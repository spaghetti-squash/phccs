import { CSStrategy, Macro } from "./combat";
import { CSTask, currentBirdHas, favouriteBirdHas } from "./lib";
import uniform from "./outfit";
import {
  adv1,
  availableAmount,
  buy,
  cliExecute,
  create,
  eat,
  Effect,
  effectModifier,
  getFuel,
  getProperty,
  handlingChoice,
  Item,
  mpCost,
  myLevel,
  myMp,
  runChoice,
  Skill,
  toEffect,
  toSkill,
  use,
  useSkill,
} from "kolmafia";
import {
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $location,
  $skill,
  AprilingBandHelmet,
  AsdonMartin,
  BeachComb,
  Clan,
  Counter,
  DeckOfEveryCard,
  get,
  have,
  Horsery,
  set,
  SourceTerminal,
} from "libram";
import { NumericModifier } from "libram/dist/modifierTypes";

export function beachTask(effect: Effect): CSTask {
  const num = 1 + BeachComb.headBuffs.indexOf(effect);
  return {
    name: `Beach Head: ${effect}`,
    completed: () => getProperty("_beachHeadsUsed").split(",").includes(num.toFixed(0)),
    ready: () =>
      get("_freeBeachWalksUsed") < 11 &&
      get("beachHeadsUnlocked").split(",").includes(num.toFixed(0)),
    do: () => BeachComb.tryHead(effect),
  };
}

export function innerElf(): CSTask {
  return {
    name: "Inner Elf",
    completed: () => have($effect`Inner Elf`),
    ready: () => myLevel() >= 13 && !Counter.exists("portscan.edu"),
    do: () =>
      Clan.with(get("phccs_elfClan", "Hobopolis Vacation Home"), () => {
        adv1($location`The Slime Tube`, -1, "");
      }),
    outfit: () =>
      uniform({
        changes: {
          shirt: $item`Jurassic Parka`,
          acc3: $item`Kremlin's Greatest Briefcase`,
          familiar: $familiar`Machine Elf`,
          modes: {
            parka: "pterodactyl",
          },
        },
      }),
    choices: { [326]: 1 },
    combat: new CSStrategy(() =>
      Macro.trySkill($skill`KGB tranquilizer dart`).trySkill($skill`Snokebomb`)
    ),
  };
}

export function potionTask(item: Item): CSTask {
  const effect = effectModifier(item, "Effect");
  return {
    name: `${effect}`,
    completed: () => have(effect),
    ready: () => have(item),
    do: () => use(item),
  };
}

export function restore(effects: Effect[]): CSTask {
  return {
    name: "Restore",
    completed: () => effects.every((e) => have(e)),
    do: () => {
      if (!have($item`magical sausage`) && have($item`magical sausage casing`)) {
        create(1, $item`magical sausage`);
      }
      if (have($item`magical sausage`)) {
        eat(1, $item`magical sausage`);
      } else if (have($item`psychokinetic energy blob`)) {
        use(1, $item`psychokinetic energy blob`);
      } else {
        buy(1, $item`Doc Galaktik's Invigorating Tonic`);
        use($item`Doc Galaktik's Invigorating Tonic`);
      }
    },
  };
}

export function skillTask(
  x: Skill | Effect | { skill: Skill; effect: Effect },
  includeAprilShield = false
): CSTask {
  {
    const { skill, effect } =
      x instanceof Skill
        ? { skill: x, effect: toEffect(x) }
        : x instanceof Effect
        ? { skill: toSkill(x), effect: x }
        : x;
    return {
      name: skill.name,
      completed: () => have(effect),
      ready: () => myMp() >= mpCost(skill),
      do: () => useSkill(skill),
      outfit: includeAprilShield
        ? { offhand: $item`April Shower Thoughts shield` }
        : { avoid: $items`April Shower Thoughts shield` },
    };
  }
}

export function restoreBuffTasks(buffs: Effect[], includeAprilShield = false): CSTask[] {
  return [...buffs.map((buff) => skillTask(buff, includeAprilShield)), restore(buffs)];
}

export function commonFamiliarWeightBuffs(): CSTask[] {
  const buffs = $effects`Empathy, Leash of Linguini, Blood Bond`;
  return [
    potionTask($item`green candy heart`),
    ...restoreBuffTasks(buffs),
    {
      name: "Witchess",
      completed: () => get("_witchessBuff"),
      do: () => cliExecute("witchess"),
    },
    skillTask({ skill: $skill`Empathy of the Newt`, effect: $effect`Thoughtful Empathy` }, true),
    beachTask($effect`Do I Know You From Somewhere?`),
  ];
}

export function songTask(song: Effect | Skill, shrugSong: Effect | Skill): CSTask {
  const { wantedSongSkill, wantedSongEffect } =
    song instanceof Effect
      ? { wantedSongSkill: toSkill(song), wantedSongEffect: song }
      : { wantedSongSkill: song, wantedSongEffect: toEffect(song) };
  const shrugSongEffect = shrugSong instanceof Effect ? shrugSong : toEffect(shrugSong);
  return {
    name: song.name,
    completed: () => have(wantedSongEffect),
    ready: () => myMp() >= mpCost(wantedSongSkill),
    do: (): void => {
      if (have(shrugSongEffect)) cliExecute(`shrug ${shrugSongEffect}`);
      useSkill(wantedSongSkill);
    },
  };
}

export function asdonTask(style: Effect | keyof typeof AsdonMartin.Driving): CSTask {
  const effect = style instanceof Effect ? style : AsdonMartin.Driving[style];
  return {
    name: effect.name,
    completed: () => have(effect),
    do: () => {
      if (getFuel() < 37) {
        buy(1, $item`all-purpose flower`);
        use(1, $item`all-purpose flower`);
        buy(availableAmount($item`wad of dough`), $item`soda water`);
        create(availableAmount($item`wad of dough`), $item`loaf of soda bread`);
        AsdonMartin.insertFuel(
          $item`loaf of soda bread`,
          availableAmount($item`loaf of soda bread`)
        );
      }
      AsdonMartin.drive(effect);
    },
  };
}

export let showers = get("_meteorShowerUses");
export const incrementShowers = () => showers++;
export function meteorShower(): CSTask {
  return {
    name: "Meteor Showered",
    ready: () => get("_meteorShowerUses") < 5 && get("_saberForceUses") < 5,
    completed: () => have($effect`Meteor Showered`),
    prepare: () => {
      if (Horsery.current() === "pale") Horsery.changeHorse("dark");
      SourceTerminal.educate([$skill`Turbo`, $skill`Extract`]);
    },
    do: () => {
      adv1($location`The Neverending Party`, -1, "");
      if (handlingChoice()) runChoice(-1);
    },
    outfit: () =>
      uniform({
        changes: {
          familiar: $familiar.none,
          famequip: $item.none,
          weapon: $item`Fourth of May Cosplay Saber`,
        },
      }),
    choices: { [1387]: 3, [1324]: 5 },
    combat: new CSStrategy(() =>
      Macro.externalIf(have($effect`Overheated`), new Macro(), Macro.skill($skill`Turbo`))
        .skill($skill`Meteor Shower`)
        .skill($skill`Use the Force`)
    ),
    post: () => {
      if (have($effect`Meteor Showered`)) incrementShowers();
      set("_meteorShowerUses", showers);

      SourceTerminal.educate([$skill`Extract`, $skill`Portscan`]);
    },
  };
}

export function birdTask(modifier: NumericModifier, positive = true): CSTask {
  return {
    name: "Regular Bird",
    completed: () => have($effect`Blessing of the Bird`),
    ready: () => currentBirdHas(modifier, positive) && get("_birdsSoughtToday") < 6,
    do: () => useSkill($skill`Seek out a Bird`),
  };
}

export function favouriteBirdTask(modifier: NumericModifier, positive = true): CSTask {
  return {
    name: "Favourite Bird",
    completed: () => get("_favoriteBirdVisited"),
    ready: () => favouriteBirdHas(modifier, positive),
    do: () => useSkill($skill`Visit your Favorite Bird`),
  };
}

export function deckTask(card: DeckOfEveryCard.Card): CSTask {
  return {
    name: `Cheat At Cards: ${card}`,
    completed: () => DeckOfEveryCard.getCardsSeen().includes(card),
    ready: () => DeckOfEveryCard.have() && DeckOfEveryCard.getRemainingCheats() > 0,
    do: () => DeckOfEveryCard.cheatCard(card),
  };
}

export function aprilTask(song: AprilingBandHelmet.MarchingSong): CSTask {
  return {
    name: `Conduct ${song}`,
    ready: () => AprilingBandHelmet.canChangeSong(),
    completed: () => have(Effect.get(song)),
    do: () => AprilingBandHelmet.changeSong(song),
  };
}
