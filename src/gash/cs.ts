import { burnSafaris, getSkillsToPerm, smokeEmIfYouGotEm } from "./lib";
import { Args } from "grimoire-kolmafia";
import {
  abort,
  equippedItem,
  Item,
  print,
  runChoice,
  StatType,
  userConfirm,
  visitUrl,
} from "kolmafia";
import {
  $class,
  $familiar,
  $item,
  $items,
  $monster,
  $path,
  $slot,
  ascend,
  CombatLoversLocket,
  have,
  Lifestyle,
  makeByXFunction,
  prepareAscension,
} from "libram";

const args = Args.create(
  "phccs_gash",
  "This script is designed to help you hop the astral gash in a way that makes phccs run well. It will also ensure that you have some of the more specific requirements necessary to run phccs.",
  {
    softcore: Args.flag({
      setting: "phccs_softcore",
      help: "Ascend into softcore",
      default: false,
    }),
    class: Args.class({
      setting: "phccs_class",
      help: "What class should we ascend as?",
      default: $class`Pastamancer`,
    }),
    ignorewarnings: Args.flag({
      setting: "phccs_ignoreGashWarnings",
      help: "Don't warn you when you are making a huge mistake",
      default: false,
    }),
  }
);

const byAscendingStat = makeByXFunction(() => args.class.primestat.toString());

const bootRequirement = (skin: Item) => ({
  name: `Cowboy Boots: ${skin}`,
  meets: () => {
    if (!have($item`your cowboy boots`)) {
      visitUrl("place.php?whichplace=town_right&action=townright_ltt");
      runChoice(5);
    }
    if (!have($item`your cowboy boots`)) {
      print("You don't have LT&T, a hard requirement!", "red");
      return false;
    }
    return equippedItem($slot`bootskin`) === skin;
  },
  reason: `we want to crank that mainstat for levelling reasons, so your bootskin must be ${skin}`,
});

const SPECIAL_REQUIREMENTS: Record<
  StatType,
  { name: string; meets: () => boolean; reason: string }[]
> = {
  Moxie: [
    {
      name: "Evil Olive in locket",
      meets: () => CombatLoversLocket.unlockedLocketMonsters().includes($monster`Evil Olive`),
      reason: "we need to be able to make equalizer potions!",
    },
    {
      name: "Stocking Mimic",
      meets: () => have($familiar`Stocking Mimic`),
      reason: "sweet synthesis is complicated!",
    },
    bootRequirement($item`mountain lion skin`),
  ],
  Muscle: [bootRequirement($item`grizzled bearskin`)],
  Mysticality: [bootRequirement($item`frontwinder skin`)],
};

export function main(input = ""): void {
  Args.fill(args, input);

  if (args.help) {
    Args.showHelp(args);
    return;
  }

  const { softcore, ignorewarnings } = args;
  burnSafaris();
  smokeEmIfYouGotEm();

  if (!ignorewarnings) {
    for (const { name, reason, meets } of byAscendingStat(SPECIAL_REQUIREMENTS)) {
      if (
        !meets() &&
        !userConfirm(
          `We have failed to meet the requirement ${name} to ascend as a ${args.class}; this is important because ${reason}. Are you sure you wish to proceed?`
        )
      ) {
        abort();
      }
    }

    if (args.softcore) {
      const missingItems = $items`Stick-Knife of Loathing, Buddy Bjorn`.filter((i) => !have(i));
      if (
        missingItems.length &&
        !userConfirm(
          `You seem to be missing the following items required to run phccs in softcore: ${missingItems.join(
            ", "
          )}. Are you sure you wish to proceed?`
        )
      ) {
        abort();
      }
    }
  }

  prepareAscension({
    garden: "Peppermint Pip Packet",
    eudora: "Our Daily Candles™ order form",
    chateau: {
      desk: "continental juice bar",
      nightstand: byAscendingStat({
        Mysticality: "foreign language tapes",
        Moxie: "bowl of potpourri",
        Muscle: "electric muscle stimulator",
      }),
      ceiling: "ceiling fan",
    },
  });

  const lifestyle = softcore ? Lifestyle.softcore : Lifestyle.hardcore;

  const pet = softcore
    ? byAscendingStat({
        Mysticality: $item`astral chapeau`,
        Moxie: $item`astral shorts`,
        Muscle: $item`astral trousers`,
      })
    : $item`astral statuette`;

  visitUrl("council.php");

  ascend({
    path: $path`Community Service`,
    playerClass: args.class,
    lifestyle,
    moon: "knoll",
    consumable: $item`astral six-pack`,
    pet,
    permOptions: {
      neverAbort: true,
      permSkills: getSkillsToPerm(),
    },
  });
}
