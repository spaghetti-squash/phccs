import { CSStrategy, Macro } from "./combat";
import {
  beachTask,
  birdTask,
  favouriteBirdTask,
  incrementShowers,
  innerElf,
  potionTask,
  restoreBuffTasks,
  showers,
  skillTask,
  songTask,
} from "./commons";
import { CSEngine, CSQuest } from "./engine";
import { unequip } from "./lib";
import uniform from "./outfit";
import { OutfitSpec } from "grimoire-kolmafia";
import {
  canadiaAvailable,
  cliExecute,
  handlingChoice,
  inHardcore,
  myFamiliar,
  retrieveItem,
  runChoice,
  useSkill,
} from "kolmafia";
import {
  $classes,
  $effect,
  $effects,
  $familiar,
  $item,
  $items,
  $location,
  $monster,
  $skill,
  CombatLoversLocket,
  CommunityService,
  get,
  have,
  Horsery,
  set,
} from "libram";

const buffs = $effects`Carol of the Bulls, Song of the North, Rage of the Reindeer, Scowl of the Auk, Disdain of the War Snapper, Tenacity of the Snapper`;

const Weapon: CSQuest = {
  name: "Weapon Damage",
  type: "SERVICE",
  test: CommunityService.WeaponDamage,
  outfit: () => {
    if (!have($item`broken champagne bottle`)) cliExecute("fold broken champagne bottle");
    return {
      hat: $items`seal-skull helmet, Iunion Crown`,
      weapon: $item`broken champagne bottle`,
      offhand: $item`dented scepter`,
      pants: $items`astral trousers, designer sweatpants`,
      acc1: $item`Brutal brogues`,
      acc2: $item`Powerful Glove`,
      acc3: $items`meteorite ring, Kremlin's Greatest Briefcase`,
      ...(CSEngine.core === "soft"
        ? {
            famequip: $item`Stick-Knife of Loathing`,
            familiar: $familiar`Disembodied Hand`,
          }
        : { famequip: $item`august scepter`, familiar: $familiar`Left-Hand Man` }),
      back: $items`Buddy Bjorn, unwrapped knock-off retro superhero cape`,
      riders: { "buddy-bjorn": $familiar`Mosquito` },
    };
  },
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [
    ...restoreBuffTasks(buffs),
    birdTask("Weapon Damage Percent"),
    favouriteBirdTask("Weapon Damage Percent"),
    skillTask($effect`Frenzied, Bloody`),
    potionTask($item`LOV Elixir #3`),
    potionTask($item`vial of hamethyst juice`),
    potionTask($item`imported taffy`),
    beachTask($effect`Lack of Body-Building`),
    songTask($effect`Jackasses' Symphony of Destruction`, $effect`The Sonata of Sneakiness`),
    {
      name: "Play Pool",
      completed: () => have($effect`Billiards Belligerence`),
      do: () => cliExecute("pool 1"),
    },
    {
      name: "Do You Crush What I Crush?",
      completed: () => have($effect`Do You Crush What I Crush?`),
      ready: () => !have($effect`Holiday Yoked`),
      do: $location`The Dire Warren`,
      outfit: () =>
        uniform({
          changes: { familiar: $familiar`Ghost of Crimbo Carols`, famequip: $item.none },
        }),
      prepare: () => Horsery.current() === "pale" && Horsery.changeHorse("dark"),
      combat: new CSStrategy(() =>
        Macro.trySkill($skill`Asdon Martin: Spring-Loaded Front Bumper`)
          .trySkill($skill`Feel Hatred`)
          .trySkill($skill`Snokebomb`)
          .abort()
      ),
    },
    {
      ...innerElf(),
      class: () =>
        inHardcore()
          ? $classes.all()
          : $classes`Seal Clubber, Turtle Tamer, Disco Bandit, Accordion Thief`,
    },
    {
      name: "Spit Ungulith",
      completed: () => have($item`corrupted marrow`) || have($effect`Cowrruption`),
      do: (): void => {
        CombatLoversLocket.reminisce($monster`ungulith`);
        if (handlingChoice()) runChoice(-1);
      },
      choices: { [1387]: 3 },
      outfit: () => {
        const changes: OutfitSpec = {
          weapon: $item`Fourth of May Cosplay Saber`,
        };
        if (get("camelSpit") >= 100) changes.familiar = $familiar`Melodramedary`;
        return uniform({ changes, canAttack: false });
      },
      post: (): void => {
        if (myFamiliar() === $familiar`Melodramedary` && have($effect`Spit Upon`, 15))
          set("camelSpit", 0);
        if (have($effect`Meteor Showered`)) incrementShowers();
        set("_meteorShowerUses", showers);

        const ungId = $monster`ungulith`.id.toFixed(0);
        const locketIdStrings = get("_locketMonstersFought")
          .split(",")
          .map((x) => x.trim())
          .filter((x) => x.length > 0);
        if (!locketIdStrings.includes(ungId)) {
          locketIdStrings.push(ungId);
          set("_locketMonstersFought", locketIdStrings.join(","));
        }
      },
      combat: new CSStrategy(() =>
        Macro.trySkill($skill`%fn, spit on me!`)
          .trySkill($skill`Meteor Shower`)
          .skill($skill`Use the Force`)
      ),
    },
    {
      name: "Meteorite Ring",
      core: "soft",
      completed: () => have($item`meteorite ring`),
      ready: () =>
        canadiaAvailable() &&
        $items`meteorite fragment, meteorite earring, meteorite necklace`.some((item) =>
          have(item)
        ),
      do: (): void => {
        const meteor = $items`meteorite necklace, meteorite fragment, meteorite earring`.find(
          (item) => have(item)
        );
        if (meteor) {
          unequip(meteor);
          retrieveItem(1, $item`tenderizing hammer`);
          retrieveItem(1, $item`jewelry-making pliers`);
          if (meteor !== $item`meteorite fragment`) cliExecute(`smash ${meteor}`);
          cliExecute(`make ${$item`meteorite ring`}`);
        }
      },
    },
    potionTask($item`corrupted marrow`),
    {
      name: "Swagger",
      completed: () => get("_bowleggedSwaggerUsed"),
      do: () => useSkill($skill`Bow-Legged Swagger`),
    },
  ],
};

export default Weapon;
