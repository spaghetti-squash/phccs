import {
    create,
    eat,
    Effect,
    effectModifier,
    itemAmount,
    mpCost,
    myMp,
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
    CommunityService,
    have,
    RetroCape,
} from "libram";
import { beachTask, innerElf } from "./commons";
import { CSQuest } from "./engine";
import { CSTask } from "./lib";

const SKILL_BUFFS = {
    MUSCLE: $effects`Feeling Excited, Big, Song of Bravado, Rage of the Reindeer, Quiet Determination, Disdain of the War Snapper, The Power of LOV`,
    MYSTICALITY: $effects`Feeling Excited, Big, Song of Bravado`,
    MOXIE: $effects`Feeling Excited, Big, Song of Bravado, Blessing of the Bird, Quiet Desperation, Disco Fever, Blubbered Up, Mariachi Mood, Disco State of Mind`,
    HP: $effects`Feeling Excited, Big, Song of Starch, Rage of the Reindeer, Quiet Determination, Disdain of the War Snapper, The Power of LOV`,
};

function restore(effects: Effect[]): CSTask {
    return {
        name: "Restore",
        completed: () => effects.every((e) => have(e)),
        do: () => {
            if (!have($item`magical sausage`) && have($item`magical sausage casing`)) {
                create(1, $item`magical sausage`);
            }
            if (have($item`magical sausage`)) {
                eat(1, $item`magical sausage`);
            } else {
                use(1, $item`psychokinetic energy blob`);
            }
        },
    };
}

function skillBuffTasks(key: keyof typeof SKILL_BUFFS): CSTask[] {
    return [
        ...SKILL_BUFFS[key].map((effect) => {
            const skill = toSkill(effect);
            return {
                name: skill.name,
                completed: () => have(effect),
                ready: () => myMp() >= mpCost(skill),
                do: () => useSkill(skill),
            };
        }),
        restore(SKILL_BUFFS[key]),
    ];
}

function optional(increasers: CSTask[], test: CommunityService) {
    return increasers.map((task) => ({
        ...task,
        completed: () => task.completed() || test.prediction <= 1,
    }));
}

const Muscle: CSQuest = {
    name: "Muscle",
    type: "SERVICE",
    test: CommunityService.Muscle,
    outfit: () => ({
        hat: $item`wad of used tape`,
        weapon: $item`dented scepter`,
        offhand: $item`Fourth of May Cosplay Saber`,
        shirt: $items`shoe ad T-shirt, fresh coat of paint`,
        back: $item`unwrapped knock-off retro superhero cape`,
        pants: $item`Cargo Cultist Shorts`,
        acc1: $item`Brutal brogues`,
        acc2: $item`Retrospecs`,
        acc3: $item`Kremlin's Greatest Briefcase`,
        familiar: $familiar`Left-Hand Man`,
        modes: { retrocape: ["vampire", RetroCape.currentMode()] },
        famequip: $item`unbreakable umbrella`,
    }),
    turnsSpent: 0,
    maxTurns: 1,
    tasks: [
        ...skillBuffTasks("MUSCLE"),
        ...optional(
            [
                beachTask($effect`Lack of Body-Building`),
                {
                    name: "Ham-Fisted",
                    completed: () => have($effect`Ham-Fisted`),
                    ready: () => have($item`vial of hamethyst juice`),
                    do: () => use(1, $item`vial of hamethyst juice`),
                },
                innerElf(),
            ],
            CommunityService.Muscle
        ),
    ],
};

const Mysticality: CSQuest = {
    name: "Mysticality",
    type: "SERVICE",
    test: CommunityService.Mysticality,
    outfit: () => ({
        hat: $item`wad of used tape`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $items`astral statuette, cosmetic football`,
        back: $item`unwrapped knock-off retro superhero cape`,
        shirt: $items`denim jacket, shoe ad T-shirt, fresh coat of paint`,
        pants: $item`designer sweatpants`,
        acc1: $item`your cowboy boots`,
        acc2: $item`codpiece`,
        acc3: $item`battle broom`,
        famequip: $items`Abracandalabra`,
        familiar: $familiar`Left-Hand Man`,
        modes: { retrocape: ["vampire", RetroCape.currentMode()] },
    }),
    turnsSpent: 0,
    maxTurns: 1,
    tasks: [...skillBuffTasks("MYSTICALITY")],
};

const Moxie: CSQuest = {
    name: "Moxie",
    type: "SERVICE",
    test: CommunityService.Moxie,
    outfit: () => ({
        hat: $item`very pointy crown`,
        shirt: $items`shoe ad T-shirt, fresh coat of paint`,
        back: $item`unwrapped knock-off retro superhero cape`,
        weapon: $item`Fourth of May Cosplay Saber`,
        offhand: $item`unbreakable umbrella`,
        pants: $item`Cargo Cultist Shorts`,
        acc1: $item`Beach Comb`,
        acc2: $item`"I Voted!" sticker`,
        acc3: $item`Retrospecs`,
        famequip: $item`miniature crystal ball`,
        modes: { retrocape: ["robot", RetroCape.currentMode()] },
    }),
    turnsSpent: 0,
    maxTurns: 1,
    tasks: [
        ...skillBuffTasks("MOXIE"),
        ...$items`runproof mascara, confiscated love note, dollop of barbecue sauce`.map((item) => {
            const effect = effectModifier(item, "Effect");
            return {
                name: `${effect}`,
                completed: () => have(effect),
                ready: () => have(item),
                do: () => use(item),
            };
        }),
        {
            name: "Rhinestones",
            completed: () => !have($item`rhinestone`),
            do: () => use(itemAmount($item`rhinestone`), $item`rhinestone`),
        },
    ],
};

const Hitpoints: CSQuest = {
    name: "Hitpoints",
    type: "SERVICE",
    test: CommunityService.HP,
    turnsSpent: 0,
    maxTurns: 1,
    outfit: () => ({
        hat: $item`wad of used tape`,
        weapon: $item`dented scepter`,
        offhand: $item`Fourth of May Cosplay Saber`,
        shirt: $items`Jurassic Parka, shoe ad T-shirt, fresh coat of paint`,
        back: $item`unwrapped knock-off retro superhero cape`,
        pants: $item`Cargo Cultist Shorts`,
        acc1: $item`Brutal brogues`,
        acc2: $item`Retrospecs`,
        acc3: $item`Kremlin's Greatest Briefcase`,
        famequip: $item`miniature crystal ball`,
        modes: { retrocape: ["vampire", RetroCape.currentMode()], parka: "kachungasaur" },
    }),
    tasks: [...skillBuffTasks("HP")],
};

export { Muscle, Mysticality, Moxie, Hitpoints };
