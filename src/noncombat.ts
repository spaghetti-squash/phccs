import {
  aprilTask,
  asdonTask,
  birdTask,
  commonFamiliarWeightBuffs,
  favouriteBirdTask,
  restore,
  skillTask,
  songTask,
} from "./commons";
import { CSQuest } from "./engine";
import { cliExecute } from "kolmafia";
import { $effect, $effects, $familiar, $item, CommunityService, get, Horsery } from "libram";

const Noncombat: CSQuest = {
  name: "Noncombat",
  type: "SERVICE",
  test: CommunityService.Noncombat,
  outfit: () => ({
    hat: $item`very pointy crown`,
    back: $item`protonic accelerator pack`,
    weapon: $item`Fourth of May Cosplay Saber`,
    shirt: $item`Jurassic Parka`,
    offhand: $item`unbreakable umbrella`,
    acc1: $item`McHugeLarge left ski`,
    acc2: $item`codpiece`,
    acc3: $item`Brutal brogues`,
    familiar: $familiar`Peace Turkey`,
    modes: { umbrella: "cocoon", parka: "pterodactyl" },
  }),
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [
    {
      name: "Horse",
      completed: () => Horsery.current() === "dark",
      do: () => Horsery.changeHorse("dark"),
    },
    ...commonFamiliarWeightBuffs(),
    skillTask($effect`Smooth Movements`),
    skillTask($effect`Feeling Lonely`),
    birdTask("Combat Rate", false),
    favouriteBirdTask("Combat Rate", false),
    songTask($effect`The Sonata of Sneakiness`, $effect`Fat Leon's Phat Loot Lyric`),
    restore($effects`Smooth Movements, The Sonata of Sneakiness`),
    {
      name: "Swim Sprints",
      completed: () => get("_olympicSwimmingPool"),
      do: () => cliExecute("swim sprints"),
    },
    asdonTask("Stealthily"),
    aprilTask("Apriling Band Patrol Beat"),
  ],
};

export default Noncombat;
