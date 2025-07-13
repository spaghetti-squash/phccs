import BoozeDrop from "./boozedrop";
import CoilWire from "./coilwire";
import Drink from "./drinking";
import { CSEngine } from "./engine";
import FamiliarWeight from "./familiarweight";
import HotRes from "./hotres";
import Level from "./level";
import Noncombat from "./noncombat";
import Prologue from "./prologue";
import Spell from "./spell";
import StatTests from "./stattests";
import Weapon from "./weapon";
import { logger, LogLevels, sinceKolmafiaRevision } from "libram";

export function main() {
  sinceKolmafiaRevision(28500);
  logger.setLevel(LogLevels.DEBUG);
  CSEngine.runTests(
    Prologue,
    CoilWire,
    Level,
    ...StatTests,
    Drink,
    HotRes,
    Noncombat,
    FamiliarWeight,
    Weapon,
    Spell,
    BoozeDrop
  );
}
