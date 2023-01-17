import { Quest } from "grimoire-kolmafia";
import { adv1, cliExecute, reverseNumberology, useSkill } from "kolmafia";
import { $effect, $item, $location, $skill, get, have, withProperty } from "libram";
import { CSStrategy, Macro } from "./combat";
import { CSTask } from "./lib";

const GLOBAL_TASKS: CSTask[] = [
    {
        name: "Numberology",
        ready: () => Object.values(reverseNumberology()).includes(69),
        completed: () => get("_universeCalculated") >= get("skillLevel144"),
        do: () => cliExecute("numberology 69"),
    },
    {
        name: "June Cleaver",
        completed: () => get("_juneCleaverFightsLeft") > 0,
        do: () =>
            withProperty("recoveryScript", "", () => {
                adv1($location`Noob Cave`, -1, "");
                if (get("lastEncounter") === "Poetic Justice")
                    useSkill($skill`Tongue of the Walrus`);
            }),
        outfit: { weapon: $item`June cleaver` },
    },
    {
        name: "Ghost",
        completed: () => get("questPAGhost") === "unstarted",
        ready: () =>
            have($item`protonic accelerator pack`) &&
            get("questPAGhost") !== "unstarted" &&
            !!get("ghostLocation") &&
            !have($effect`Meteor Showered`),
        do: (): void => {
            const location = get("ghostLocation");
            if (location) {
                adv1(location, 0, "");
            } else {
                throw "Could not determine Proton Ghost location!";
            }
        },
        combat: new CSStrategy(() =>
            Macro.delevel()
                .easyFight()
                .trySkill($skill`Shoot Ghost`)
                .trySkill($skill`Shoot Ghost`)
                .trySkill($skill`Shoot Ghost`)
                .trySkill($skill`Trap Ghost`)
        ),
    },
];

const GLOBAL_QUEST: Quest<CSTask> = { name: "Global", tasks: GLOBAL_TASKS };

export default GLOBAL_QUEST;
