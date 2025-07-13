import { OutfitSpec } from "grimoire-kolmafia";
import { Familiar, inHardcore, Item, totalTurnsPlayed } from "kolmafia";
import {
  $effect,
  $familiar,
  $familiars,
  $item,
  $items,
  byStat,
  CommunityService,
  DaylightShavings,
  get,
  have,
  ToyCupidBow,
  undelay,
} from "libram";

const UNCHANGING_OUTFIT: OutfitSpec = {
  shirt: $items`LOV Eardigan, Jurassic Parka, fresh coat of paint`,
  offhand: $item`unbreakable umbrella`,
  ...byStat({
    Mysticality: {
      acc1: $items`meteorite necklace, your cowboy boots`,
      acc2: $item`codpiece`,
      acc3: $items`battle broom, Retrospecs`,
    },
    Muscle: {
      acc1: $item`your cowboy boots`,
      acc2: $items`Brutal brogues, Powerful Glove`,
      acc3: $items`Retrospecs`,
    },
    Moxie: {
      acc1: $item`your cowboy boots`,
      acc2: $items`LOV Earrings, Beach Comb`,
      acc3: $item`Cincho de Mayo`,
    },
  }),
  modes: {
    retrocape: [
      byStat({ Muscle: "vampire", Moxie: "robot", Mysticality: "heck" } as const),
      "thrill",
    ],
    umbrella: "broken",
    parka: "spikolodon",
  },
};

const DEFAULT_UNIFORM = (): OutfitSpec => ({
  ...UNCHANGING_OUTFIT,
  hat: DaylightShavings.buffAvailable()
    ? $item`Daylight Shavings Helmet`
    : byStat<Item | Item[]>({
        Moxie: $items`very pointy crown, Apriling band helmet`,
        Mysticality: $items`astral chapeau, Apriling band helmet`,
        Muscle: $item`Apriling band helmet`,
      }),
  pants:
    get("sweat") < 100
      ? $item`designer sweatpants`
      : $items`astral trousers, astral shorts, designer sweatpants`,
  weapon:
    get("_juneCleaverFightsLeft") > 0 && get("_juneCleaverEncounters") < 2
      ? $item`June cleaver`
      : byStat<Item | Item[]>({
          Muscle: $items`dented scepter, Fourth of May Cosplay Saber`,
          default: $item`Fourth of May Cosplay Saber`,
        }),
  back:
    get("questPAGhost") === "unstarted" && get("nextParanormalActivity") <= totalTurnsPlayed()
      ? $item`protonic accelerator pack`
      : $items`LOV Epaulettes, unwrapped knock-off retro superhero cape`,
});

const FAMILIAR_PICKS = [
  {
    familiar: $familiar`Stocking Mimic`,
    famequip: $item.none,
    condition: () => !get("_bagOfCandy"),
  },
  {
    familiar: $familiar`Melodramedary`,
    famequip: () => $items`dromedary drinking helmet`.find((i) => have(i)),
    condition: () => get("camelSpit") < 100 && !have($effect`Spit Upon`) && inHardcore(),
  },
  {
    familiar: $familiar`Shorter-Order Cook`,
    condition: () =>
      ![$effect`Shortly Stacked`, $item`short stack of pancakes`].some((x) => have(x)) &&
      !CommunityService.FamiliarWeight.isDone(),
  },
  {
    familiar: $familiar`Garbage Fire`,
    condition: () => $familiar`Garbage Fire`.dropsToday < 1,
  },
  {
    familiar: $familiar`Cornbeefadon`,
    condition: () => {
      if (ToyCupidBow.doneToday($familiar`Cornbeefadon`)) return false;
      const currentCupidFamiliar = ToyCupidBow.currentFamiliar();
      if (!currentCupidFamiliar || currentCupidFamiliar === $familiar`Cornbeefadon`) return true;
      return ToyCupidBow.doneToday(currentCupidFamiliar);
    },
  },
];

function findFirstFamiliar(fams: Familiar[]) {
  return fams.find((f) => have(f));
}

function chooseFamiliar(canAttack: boolean): Pick<OutfitSpec, "familiar" | "famequip"> {
  const pick = FAMILIAR_PICKS.find(
    ({ condition, familiar }) =>
      condition() &&
      have(familiar) &&
      (canAttack || !(familiar.elementalDamage || familiar.physicalDamage))
  );
  if (pick) {
    return {
      famequip:
        undelay(pick.famequip) ??
        (ToyCupidBow.familiarsToday().includes(pick.familiar)
          ? $item`tiny stillsuit`
          : $item`toy Cupid bow`),
      familiar: pick.familiar,
    };
  }
  return {
    famequip: $item`tiny stillsuit`,
    familiar:
      findFirstFamiliar($familiars`Puck Man, Ms. Puck Man`) ?? $familiar`Blood-Faced Volleyball`,
  };
}

export default function uniform({ changes = {} as OutfitSpec, canAttack = true } = {}): OutfitSpec {
  if ("familiar" in changes && !("famequip" in changes) && changes.familiar) {
    if (ToyCupidBow.familiarsToday().includes(changes.familiar)) {
      changes.famequip = $item`tiny stillsuit`;
    } else {
      changes.famequip = $item`toy Cupid bow`;
    }
  }
  return { ...DEFAULT_UNIFORM(), ...chooseFamiliar(canAttack), ...changes };
}
