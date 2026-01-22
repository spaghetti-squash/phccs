'use strict';

var kolmafia = require('kolmafia');

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _assertClassBrand(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _checkPrivateRedeclaration(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _classPrivateFieldGet2(s, a) {
  return s.get(_assertClassBrand(s, a));
}
function _classPrivateFieldInitSpec(e, t, a) {
  _checkPrivateRedeclaration(e, t), t.set(e, a);
}
function _classPrivateFieldSet2(s, a, r) {
  return s.set(_assertClassBrand(s, a), r), r;
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = true,
    u = false;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = true, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function () {
    return !!t;
  })();
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = true,
      o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = true, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == typeof e || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (String )(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? new Map() : void 0;
  return _wrapNativeSuper = function (t) {
    if (null === t || !_isNativeFunction(t)) return t;
    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t)) return r.get(t);
      r.set(t, Wrapper);
    }
    function Wrapper() {
      return _construct(t, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), _setPrototypeOf(Wrapper, t);
  }, _wrapNativeSuper(t);
}

var LogLevels;
(function (LogLevels) {
  LogLevels[LogLevels["NONE"] = 0] = "NONE";
  LogLevels[LogLevels["ERROR"] = 1] = "ERROR";
  LogLevels[LogLevels["WARNING"] = 2] = "WARNING";
  LogLevels[LogLevels["INFO"] = 3] = "INFO";
  LogLevels[LogLevels["DEBUG"] = 4] = "DEBUG";
})(LogLevels || (LogLevels = {}));
var defaultHandlers = {
  [LogLevels.INFO]: message => {
    kolmafia.printHtml("<b>[Libram Info]</b> ".concat(message));
    kolmafia.logprint("[Libram] ".concat(message));
    return;
  },
  [LogLevels.WARNING]: message => {
    kolmafia.printHtml("<span style=\"background: orange; color: white;\"><b>[Libram Warning]</b> ".concat(message, "</span>"));
    kolmafia.logprint("[Libram] ".concat(message));
    return;
  },
  [LogLevels.ERROR]: error => {
    kolmafia.printHtml("<span style=\"background: red; color: white;\"><b>[Libram Error]</b> ".concat(error.toString(), "</span>"));
    kolmafia.logprint("[Libram] ".concat(error));
    return;
  },
  [LogLevels.DEBUG]: message => {
    kolmafia.printHtml("<span style=\"background: red; color: white;\"><b>[Libram Debug]</b> ".concat(message, "</span>"));
    kolmafia.logprint("[Libram] ".concat(message));
    return;
  }
};
var Logger = /*#__PURE__*/function () {
  function Logger() {
    _classCallCheck(this, Logger);
    _defineProperty(this, "handlers", defaultHandlers);
  }
  return _createClass(Logger, [{
    key: "level",
    get: function get() {
      return Logger.currentLevel;
    }
  }, {
    key: "setLevel",
    value: function setLevel(level) {
      Logger.currentLevel = level;
    }
  }, {
    key: "setHandler",
    value: function setHandler(level, callback) {
      this.handlers[level] = callback;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {
    key: "log",
    value: function log(level, message) {
      if (this.level >= level) this.handlers[level](message);
    }
  }, {
    key: "info",
    value: function info(message) {
      this.log(LogLevels.INFO, message);
    }
  }, {
    key: "warning",
    value: function warning(message) {
      this.log(LogLevels.WARNING, message);
    }
  }, {
    key: "error",
    value: function error(message) {
      this.log(LogLevels.ERROR, message);
    }
  }, {
    key: "debug",
    value: function debug(message) {
      this.log(LogLevels.DEBUG, message);
    }
  }]);
}();
_defineProperty(Logger, "currentLevel", LogLevels.ERROR);
var logger = new Logger();

/** THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseDefaultProperties.ts for more information */
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "debugTopMenuStyle", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "pingLogin", "pingStealthyTimein", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnAlwaysAdd", "svnAlwaysOverwrite", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_faxDataChanged", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSatisfyWithShop", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "batWingsBatHoleEntrance", "batWingsBatratBurrow", "batWingsBeanbatChamber", "batWingsGuanoJunction", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "bookOfIronyAvailable", "booPeakLit", "bootsCharged", "breakfastCompleted", "burlyBodyguardReceivedBonus", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "candyCaneSwordApartmentBuilding", "candyCaneSwordBlackForest", "candyCaneSwordBowlingAlley", "candyCaneSwordCopperheadClub", "candyCaneSwordDailyDungeon", "candyCaneSwordDefiledCranny", "candyCaneSwordFunHouse", "candyCaneSwordShore", "candyCaneSwordWarFratRoom", "candyCaneSwordWarFratZetas", "candyCaneSwordWarHippyBait", "candyCaneSwordWarHippyLine", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "crAlways", "crimbo23ArmoryAtWar", "crimbo23BarAtWar", "crimbo23CafeAtWar", "crimbo23CottageAtWar", "crimbo23FoundryAtWar", "cyberDatastickCollected", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "enqueueForConsumption", "errorOnAmbiguousFold", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "floristFriarAvailable", "floristFriarChecked", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "grandpaUnlockedBlankPrescriptionSheet", "grandpaUnlockedEelSauce", "grandpaUnlockedFishyWand", "grandpaUnlockedGlowingSyringe", "grandpaUnlockedGroupieSpangles", "grandpaUnlockedHairOfTheFish", "grandpaUnlockedHalibut", "grandpaUnlockedHeavilyInvestedInPunFutures", "grandpaUnlockedJellyfishGel", "grandpaUnlockedMarineAquamarine", "grandpaUnlockedMidgetClownfish", "grandpaUnlockedSeaRadish", "grandpaUnlockedTrophyFish", "grandpaUnlockedWaterPoloCap", "grandpaUnlockedWaterPoloMitt", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasShrunkenHead", "hasSushiMat", "hasTwinkleVision", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "intenseCurrents", "isMerkinGladiatorChampion", "isMerkinHighPriest", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "ledCandleDropped", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makeHandheldRadiosHardcore", "makeHandheldRadiosSoftcore", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "maximizerUseScope", "merkinElementaryBathroomUnlock", "merkinElementaryJanitorUnlock", "merkinElementaryTeacherUnlock", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "noncombatForcerActive", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsFloristFriar", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "pirateRealmUnlockedAnemometer", "pirateRealmUnlockedBlunderbuss", "pirateRealmUnlockedBreastplate", "pirateRealmUnlockedClipper", "pirateRealmUnlockedCrabsicle", "pirateRealmUnlockedFlag", "pirateRealmUnlockedFork", "pirateRealmUnlockedGoldRing", "pirateRealmUnlockedManOWar", "pirateRealmUnlockedPlushie", "pirateRealmUnlockedRadioRing", "pirateRealmUnlockedRhum", "pirateRealmUnlockedScurvySkillbook", "pirateRealmUnlockedShavingCream", "pirateRealmUnlockedSpyglass", "pirateRealmUnlockedTattoo", "pirateRealmUnlockedThirdCrewmate", "pirateRealmUnlockedTikiSkillbook", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pumpkinSpiceWhorlUsed", "pyramidBombUsed", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayDecorateJsCommands", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "replicaChateauAvailable", "replicaNeverendingPartyAlways", "replicaWitchessSetAvailable", "requireBoxServants", "requireSewerTestItems", "restUsingCampAwayTent", "restUsingChateau", "ROMOfOptimalityAvailable", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "serverAddsBothCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "shubJigguwattDefeated", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressCyberRealmDarkMode", "suppressCyberRealmGreenImages", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "yogUrtDefeated", "youRobotScavenged", "_2002MrStoreCreditsCollected", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_alliedRadioMaterielIntel", "_alliedRadioWildsunBoon", "_aprilShower", "_aprilShowerGlobsCollected", "_aprilShowerLungingThrustSmack", "_aprilShowerNorthernExplosion", "_aprilShowerSimmer", "_armyToddlerCast", "_aug1Cast", "_aug2Cast", "_aug3Cast", "_aug4Cast", "_aug5Cast", "_aug6Cast", "_aug7Cast", "_aug8Cast", "_aug9Cast", "_aug10Cast", "_aug11Cast", "_aug12Cast", "_aug13Cast", "_aug14Cast", "_aug15Cast", "_aug16Cast", "_aug17Cast", "_aug18Cast", "_aug19Cast", "_aug20Cast", "_aug21Cast", "_aug22Cast", "_aug23Cast", "_aug24Cast", "_aug25Cast", "_aug26Cast", "_aug27Cast", "_aug28Cast", "_aug29Cast", "_aug30Cast", "_aug31Cast", "_augTodayCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blackMonolithUsed", "_blankoutUsed", "_bloodBagDoctorBag", "_bloodBagCloake", "_bloodBankIntimidated", "_bloodBankVisited", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_candyCaneSwordBackAlley", "_candyCaneSwordHauntedBedroom", "_candyCaneSwordHauntedLibrary", "_candyCaneSwordLyle", "_candyCaneSwordMadnessBakery", "_candyCaneSwordOvergrownLot", "_candyCaneSwordOvergrownShrine", "_candyCaneSwordPalindome", "_candyCaneSwordSouthOfTheBorder", "_candyCaneSwordSpookyForest", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chibiChanged", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circadianRhythmsRecalled", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_coolerYetiAdventures", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboPastDailySpecial", "_crimboPastMedicalGruel", "_crimboPastPrizeTurkey", "_crimboPastSmokingPope", "_crimboTraining", "_crimboTree", "_crToday", "_cursedKegUsed", "_cursedMicrowaveUsed", "_cyberTrashCollected", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_douseFoeSuccess", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_emberingHulkFought", "_entauntaunedToday", "_envyfishEggUsed", "_epicMcTwistUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_extraGreasySliderEaten", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_flagellateFlagonUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_frostyMugUsed", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_gnomePart", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_hodgmansBlanketDrunk", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_infiniteJellyUsed", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatLost", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_leafAntEggCrafted", "_leafDayShortenerCrafted", "_leafTattooCrafted", "_leavesJumped", "_legendaryBeat", "_licenseToChillUsed", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_mapToACandyRichBlockUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_miniKiwiIntoxicatingSpiritsBought", "_miniKiwiTipiDrop", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mulliganStewEaten", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pickleJuiceDrunk", "_pingPongGame", "_pirateBellowUsed", "_pirateDinghyUsed", "_pirateForkUsed", "_pirateRealmSoldCompass", "_pirateRealmWindicleUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_punchingMirrorUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_replicaSnowconeTomeUsed", "_replicaResolutionLibramUsed", "_replicaSmithsTomeUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_saladForkUsed", "_seadentWaveUsed", "_seaJellyHarvested", "_septEmberBalanceChecked", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shadowAffinityToday", "_shadowForestLooted", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_snowballFactoryUsed", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_sotParcelReturned", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_structuralEmberUsed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_takerSpaceSuppliesDelivered", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_tiedUpFlamingLeafletFought", "_tiedUpFlamingMonsteraFought", "_tiedUpLeaviathanFought", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_unblemishedPearlAnemoneMine", "_unblemishedPearlDiveBar", "_unblemishedPearlMadnessReef", "_unblemishedPearlMarinaraTrench", "_unblemishedPearlTheBriniestDeepests", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voodooSnuffUsed", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_yamBatteryUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"];
var numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "pingDefaultTestPings", "pingLoginCount", "pingLoginGoal", "pingLoginThreshold", "pingTestPings", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_beachTides", "_g9Effect", "8BitBonusTurns", "8BitScore", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "asolDeferredPoints", "asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autopsyTweezersUsed", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableMrStore2002Credits", "availableQuarters", "availableSeptEmbers", "availableStoreCredits", "availableSwagger", "avantGuardPoints", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bodyguardCharge", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "bookOfFactsGummi", "bookOfFactsPinata", "bookOfIronyCost", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "bwApronMealsEaten", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chibiAlignment", "chibiBirthday", "chibiFitness", "chibiIntelligence", "chibiLastVisit", "chibiSocialization", "chilledToTheBone", "cinchoSaltAndLime", "cinderellaMinutesToMidnight", "cinderellaScore", "clubEmNextWeekMonsterTurn", "cocktailSummons", "commerceGhostCombats", "cookbookbatIngredientsCharge", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingPlansCharges", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "cupidBowFights", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "currentReplicaStoreYear", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "dartsThrown", "daycareEquipment", "daycareInstructorItemQuantity", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "droneSelfDestructChipsUsed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilYachtzeeChoice", "encountersUntilNEPChoice", "encountersUntilSRChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "getsYouDrunkTurnsLeft", "ghostPepperTurnsLeft", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "ironicSwagger", "jarlsbergPoints", "juicyGarbageUsed", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lassoTrainingCount", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarsElbowNC", "lastFriarsHeartNC", "lastFriarsNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastShadowForgeUnlockAdventure", "lastKOLHSArtClassUnlockAdventure", "lastKOLHSChemClassUnlockAdventure", "lastKOLHSShopClassUnlockAdventure", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "legacyPoints", "leprecondoLastNeedChange", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "markYourTerritoryCharges", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniKiwiAiolisUsed", "miniMartinisDrunk", "mixedBerryJellyUses", "moleTunnelLevel", "momSeaMonkeeProgress", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nanopolymerSpiderWebsUsed", "nextAprilBandTurn", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "peaceTurkeyIndex", "pendingMapReflections", "phosphorTracesUses", "pingpongSkill", "pirateRealmPlasticPiratesDefeated", "pirateRealmShipsDestroyed", "pirateRealmStormsEscaped", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "pokefamPoints", "poolSharkCount", "poolSkill", "powerPillProgress", "preworkoutPowderUses", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rockinRobinProgress", "romanCandelabraRedCasts", "romanCandelabraBlueCasts", "romanCandelabraYellowCasts", "romanCandelabraGreenCasts", "romanCandelabraPurpleCasts", "ROMOfOptimalityCost", "rumpelstiltskinKidsRescued", "rumpelstiltskinTurnsUsed", "rwbMonsterCount", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "screechCombats", "scriptMRULength", "seadentConstructKills", "seadentLevel", "seaodesFound", "seaPoints", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "shrunkenHeadZombieHP", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn236", "skillBurn237", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel135", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel227", "skillLevel245", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "spookyVHSTapeMonsterTurn", "statbotUses", "stockCertificateTurn", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "takerSpaceAnchor", "takerSpaceGold", "takerSpaceMast", "takerSpaceRum", "takerSpaceSilk", "takerSpaceSpice", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeposedTopHats", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "tryToRememberCharges", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "wereProfessorBite", "wereProfessorKick", "wereProfessorLiver", "wereProfessorPoints", "wereProfessorRend", "wereProfessorResearchPoints", "wereProfessorStomach", "wereProfessorTransformTurns", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProgress", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "zootSpecimensPrepared", "zootomistPoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_alliedRadioDropsUsed", "_ancestralRecallCasts", "_antihangoverBonus", "_aprilShowerDiscoNap", "_aprilBandInstruments", "_aprilBandSaxophoneUses", "_aprilBandTomUses", "_aprilBandTubaUses", "_aprilBandStaffUses", "_aprilBandPiccoloUses", "_astralDrops", "_augSkillsCast", "_assertYourAuthorityCast", "_automatedFutureManufactures", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_batWingsCauldronUsed", "_batWingsFreeFights", "_batWingsRestUsed", "_batWingsSwoopUsed", "_bczBloodGeyserCasts", "_bczRefractedGazeCasts", "_bczSweatBulletsCasts", "_bczBloodBathCasts", "_bczDialitupCasts", "_bczSweatEquityCasts", "_bczBloodThinnerCasts", "_bczSpinalTapasCasts", "_bczPheromoneCocktailCasts", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_beretBlastUses", "_beretBoastUses", "_beretBuskingUses", "_birdsSoughtToday", "_bookOfFactsWishes", "_bookOfFactsTatters", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candyEggsDeviled", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carnivorousPottedPlantWins", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chibiAdventures", "_chipBags", "_chocolateCigarsUsed", "_chocolateCoveredPingPongBallsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_cinchUsed", "_cinchoRests", "_circadianRhythmsAdventures", "_clanFortuneConsultUses", "_clipartSummons", "_clocksUsed", "_cloversPurchased", "_clubEmBattlefieldUsed", "_clubEmNextWeekUsed", "_clubEmTimeUsed", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_concoctionDatabaseRefreshes", "_cookbookbatCrafting", "_cookbookbatCombatsUntilNewQuest", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_crimboPastDailySpecialPrice", "_cyberFreeFights", "_cyberZone1Turns", "_cyberZone2Turns", "_cyberZone3Turns", "_dailySpecialPrice", "_dartsLeft", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_douseFoeUses", "_dreamJarDrops", "_drunkPygmyBanishes", "_durableDolphinWhistleUsed", "_edDefeats", "_edLashCount", "_eldritchTentaclesFoughtToday", "_elfGuardCookingUsed", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_extraTimeUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_generateIronyUsed", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_greyYouAdventures", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holidayMultitaskingUsed", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_ironTricornHeadbuttUsed", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverAdvs", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_knuckleboneDrops", "_knuckleboneRests", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastFitzsimmonsHatch", "_lastMobiusStripTurn", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_lawOfAveragesUsed", "_leafblowerML", "_leafLassosCrafted", "_leafMonstersFought", "_leavesBurned", "_legionJackhammerCrafting", "_leprecondoRearrangements", "_leprecondoFurniture", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mapToACandyRichBlockDrops", "_mayamRests", "_mayflowerDrops", "_mayflySummons", "_mcHugeLargeAvalancheUses", "_mcHugeLargeSkiPlowUses", "_mcHugeLargeSlashUses", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_mildEvilPerpetrated", "_mimicEggsDonated", "_mimicEggsObtained", "_miniKiwiDrops", "_miniMartiniDrops", "_mobiusStripEncounters", "_monkeyPawWishesUsed", "_monsterHabitatsFightsLeft", "_monsterHabitatsRecalled", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_oldSchoolCocktailCraftingUsed", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_perilsForeseen", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_photoBoothEffects", "_photoBoothEquipment", "_pieDrops", "_piePartsCount", "_pirateRealmGold", "_pirateRealmGlue", "_pirateRealmGrog", "_pirateRealmGrub", "_pirateRealmGuns", "_pirateRealmIslandMonstersDefeated", "_pirateRealmSailingTurns", "_pirateRealmShipSpeed", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_questPartyFairItemsOpened", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_seadentLightningUsed", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shadowBricksUsed", "_shadowRiftCombats", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_slimeVialsHarvested", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_smolderingSkeletonsDefeated", "_smoochArmyHQCombats", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowmanHatPlaceUsed", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_speakeasyFreeFights", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spiritOfTheMountainsAdvs", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_summonResortPassesUsed", "_surprisinglySweetSlashUsed", "_surprisinglySweetStabUsed", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_tearawayPantsAdvs", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeCopsFoughtToday", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unblemishedPearlAnemoneMineProgress", "_unblemishedPearlDiveBarProgress", "_unblemishedPearlMadnessReefProgress", "_unblemishedPearlMarinaraTrenchProgress", "_unblemishedPearlTheBriniestDeepestsProgress", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_wandOfPigificationUsed", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed", "lastNoncombat15", "lastNoncombat257", "lastNoncombat270", "lastNoncombat273", "lastNoncombat280", "lastNoncombat283", "lastNoncombat297", "lastNoncombat322", "lastNoncombat323", "lastNoncombat324", "lastNoncombat341", "lastNoncombat343", "lastNoncombat384", "lastNoncombat386", "lastNoncombat391", "lastNoncombat392", "lastNoncombat394", "lastNoncombat405", "lastNoncombat406", "lastNoncombat408", "lastNoncombat439", "lastNoncombat440", "lastNoncombat441", "lastNoncombat450", "lastNoncombat528", "lastNoncombat533", "lastNoncombat539", "lastNoncombat540", "lastNoncombat541", "lastNoncombat588", "lastNoncombat589", "lastNoncombat590", "lastNoncombat591", "lastNoncombat592"];
var monsterProperties = ["beGregariousMonster", "bodyguardChatMonster", "cameraMonster", "chateauMonster", "clubEmNextWeekMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "holdHandsMonster", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "monkeyPointMonster", "motifMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "rufusDesiredEntity", "rwbMonster", "screencappedMonster", "shrunkenHeadZombieMonster", "spookyPuttyMonster", "spookyVHSTapeMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_afterimageMonster", "_chainedRelativityMonster", "_chainedPurpleCandleMonster", "_chainedAfterimageMonster", "_cookbookbatQuestMonster", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_monsterHabitatsMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_prankCardMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_trickCoinMonster", "_voteMonster"];
var monsterNumericProperties = [];
var locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "holdHandsLocation", "lastAdventure", "nextAdventure", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "rwbLocation", "sourceOracleTarget", "_cookbookbatQuestLastLocation", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation", "_lastPirateRealmIsland", "_sotParcelLocation"];
var stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandBufferGCLI", "commandBufferTabbedChat", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "pingDefaultTestPage", "pingLatest", "pingLoginAbort", "pingLoginCheck", "pingLoginFail", "pingLongest", "pingShortest", "pingTestPage", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "antiScientificMethod", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishedPhyla", "banishingShoutMonsters", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beastSkillsAvailable", "beastSkillsKnown", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "chibiName", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "coolerYetiMode", "counterScript", "copperheadClubHazard", "crimbo23ArmoryControl", "crimbo23BarControl", "crimbo23CafeControl", "crimbo23CottageControl", "crimbo23FoundryControl", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "demonName14", "demonName14Segments", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "dreadScrollGuesses", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "everfullDartPerks", "extraCosmeticModifiers", "familiarScript", "flagellateFlagonsActive", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "holdHandsMonsterCount", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastAdventureContainer", "lastAdventureTrail", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "lastSelectedFaxbot", "lastSuccessfulFaxbot", "latteIngredients", "latteModifier", "latteUnlocks", "ledCandleMode", "leprecondoCurrentNeed", "leprecondoDiscovered", "leprecondoInstalled", "leprecondoNeedOrder", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "maximizerLastFilters", "mayoInMouth", "mayoMinderSetting", "merkinCatalogChoices", "merkinQuestPath", "mimicEggMonsters", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mineState1", "mineState2", "mineState3", "mineState4", "mineState5", "mineState6", "mpAutoRecoveryItems", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "noncombatForcers", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpClipper", "questESpEVE", "questESpFakeMedium", "questESpGore", "questESpJunglePun", "questESpOutOfOrder", "questESpSerum", "questESpSmokes", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11MacGuffin", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12HippyFrat", "questL12War", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questRufus", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayChatCLITrigger", "relayCounters", "retroCapeSuperhero", "retroCapeWashingInstructions", "royalty", "rufusQuestTarget", "rufusQuestType", "scriptMRUList", "seahorseName", "shadowLabyrinthGoal", "shadowRiftIngress", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "shrunkenHeadZombieAbilities", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trackedMonsters", "trackedPhyla", "trainsetConfiguration", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "warProgress", "watchedPreferences", "wereProfessorAdvancedResearch", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "zootGraftedMods", "zootMilkCrueltyMods", "zootMilkKindnessMods", "_automatedFutureSide", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_citizenZone", "_citizenZoneMods", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_cupidBowFamiliars", "_currentDartboard", "_cyberZone1Defense", "_cyberZone1Hacker", "_cyberZone1Owner", "_cyberZone2Defense", "_cyberZone2Hacker", "_cyberZone2Owner", "_cyberZone3Defense", "_cyberZone3Hacker", "_cyberZone3Owner", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_futuristicCollarModifier", "_futuristicHatModifier", "_futuristicShirtModifier", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatActions", "_lastCombatStarted", "_locketMonstersFought", "_mayamSymbolsUsed", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_perilLocations", "_pirateRealmCrewmate", "_pirateRealmCrewmate1", "_pirateRealmCrewmate2", "_pirateRealmCrewmate3", "_pirateRealmShip", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_questPirateRealm", "_roboDrinks", "_roninStoragePulls", "_savageBeastMods", "_seadentWaveZone", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_trickOrTreatBlock", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"];
var numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494", "choiceAdventure1505", "choiceAdventure1528", "choiceAdventure1534", "choiceAdventure1538", "choiceAdventure1539", "choiceAdventure1540", "choiceAdventure1541", "choiceAdventure1542", "choiceAdventure1545", "choiceAdventure1546", "choiceAdventure1547", "choiceAdventure1548", "choiceAdventure1549", "choiceAdventure1550", "choiceAdventure1591"];
var familiarProperties = ["commaFamiliar", "cupidBowLastFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar", "zootGraftedButtCheekLeftFamiliar", "zootGraftedButtCheekRightFamiliar", "zootGraftedFootLeftFamiliar", "zootGraftedFootRightFamiliar", "zootGraftedHandLeftFamiliar", "zootGraftedHandRightFamiliar", "zootGraftedHeadFamiliar", "zootGraftedNippleLeftFamiliar", "zootGraftedNippleRightFamiliar", "zootGraftedShoulderLeftFamiliar", "zootGraftedShoulderRightFamiliar"];
var familiarNumericProperties = ["cupidBowLastFamiliar", "zootGraftedButtCheekLeftFamiliar", "zootGraftedButtCheekRightFamiliar", "zootGraftedFootLeftFamiliar", "zootGraftedFootRightFamiliar", "zootGraftedHandLeftFamiliar", "zootGraftedHandRightFamiliar", "zootGraftedHeadFamiliar", "zootGraftedNippleLeftFamiliar", "zootGraftedNippleRightFamiliar", "zootGraftedShoulderLeftFamiliar", "zootGraftedShoulderRightFamiliar"];
var statProperties = ["nsChallenge1", "snojoSetting"];
var phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum", "_circadianRhythmsPhylum"];
var itemProperties = ["commerceGhostItem", "daycareInstructorItem", "doctorBagQuestItem", "dolphinItem", "eweItem", "guzzlrQuestBooze", "implementGlitchItem", "muffinOnOrder", "rufusDesiredArtifact", "rufusDesiredItems", "shenQuestItem", "trapperOre", "walfordBucketItem", "_cookbookbatQuestIngredient", "_crimboPastDailySpecialItem", "_dailySpecial", "_pirateRealmCurio"];
var itemNumericProperties = ["daycareInstructorItem", "_crimboPastDailySpecialItem"];

var booleanPropertiesSet = new Set(booleanProperties);
var numericPropertiesSet = new Set(numericProperties);
var numericOrStringPropertiesSet = new Set(numericOrStringProperties);
var stringPropertiesSet = new Set(stringProperties);
var locationPropertiesSet = new Set(locationProperties);
var monsterPropertiesSet = new Set(monsterProperties);
var familiarPropertiesSet = new Set(familiarProperties);
var statPropertiesSet = new Set(statProperties);
var phylumPropertiesSet = new Set(phylumProperties);
var itemPropertiesSet = new Set(itemProperties);
/**
 * Determine whether a property has a boolean value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a boolean value
 */
function isBooleanProperty(property) {
  return booleanPropertiesSet.has(property);
}
/**
 * Determine whether a property has a numeric value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a numeric value
 */
function isNumericProperty(property) {
  return numericPropertiesSet.has(property);
}
/**
 * Determine whether a property has a numeric or string value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a numeric or string value
 */
function isNumericOrStringProperty(property) {
  return numericOrStringPropertiesSet.has(property);
}
/**
 * Determine whether a property has a string value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a string value
 */
function isStringProperty(property) {
  return stringPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Location value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Location value
 */
function isLocationProperty(property) {
  return locationPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Monster value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Monster value
 */
function isMonsterProperty(property) {
  return monsterPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Familiar value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Familiar value
 */
function isFamiliarProperty(property) {
  return familiarPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Stat value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Stat value
 */
function isStatProperty(property) {
  return statPropertiesSet.has(property);
}
/**
 * Determine whether a property has a Phylum value
 *
 * @param property Property to check
 * @returns Whether the supplied property has a Phylum value
 */
function isPhylumProperty(property) {
  return phylumPropertiesSet.has(property);
}
/**
 * Determine whether a property has an Item value
 *
 * @param property Property to check
 * @returns Whether the supplied property has an Item value
 */
function isItemProperty(property) {
  return itemPropertiesSet.has(property);
}

var createPropertyGetter = transform => (property, default_) => {
  var value = kolmafia.getProperty(property);
  if (default_ !== undefined && value === "") {
    return default_;
  }
  return transform(value, property);
};
function createMafiaClassPropertyGetter(Type,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
toType) {
  var numericPropertyNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return createPropertyGetter((value, property) => {
    if (value === "") return null;
    var v = numericPropertyNames.includes(property) ? value.match(/^[0-9]+$/) ? toType(parseInt(value)) : null : toType(value);
    return v === Type.none ? null : v;
  });
}
var getString = createPropertyGetter(value => value);
var getBoolean = createPropertyGetter(value => value === "true");
var getNumber = createPropertyGetter(value => Number(value));
var getFamiliar = createMafiaClassPropertyGetter(kolmafia.Familiar, kolmafia.toFamiliar, familiarNumericProperties);
var getItem = createMafiaClassPropertyGetter(kolmafia.Item, kolmafia.toItem, itemNumericProperties);
var getLocation = createMafiaClassPropertyGetter(kolmafia.Location, kolmafia.toLocation);
var getMonster = createMafiaClassPropertyGetter(kolmafia.Monster, kolmafia.toMonster, monsterNumericProperties);
var getPhylum = createMafiaClassPropertyGetter(kolmafia.Phylum, kolmafia.toPhylum);
var getStat = createMafiaClassPropertyGetter(kolmafia.Stat, kolmafia.toStat);
/**
 * Gets the value of a mafia property, either built in or custom
 *
 * @param property Name of the property
 * @param _default Default value for the property to take if not set
 * @returns Value of the mafia property
 */
function get(property, _default) {
  var value = getString(property);
  // Handle known properties.
  if (isBooleanProperty(property)) {
    return getBoolean(property, _default) ?? false;
  } else if (isNumericProperty(property)) {
    return getNumber(property, _default) ?? 0;
  } else if (isNumericOrStringProperty(property)) {
    return value.match(/^\d+$/) ? parseInt(value) : value;
  } else if (isLocationProperty(property)) {
    return getLocation(property, _default);
  } else if (isMonsterProperty(property)) {
    return getMonster(property, _default);
  } else if (isFamiliarProperty(property)) {
    return getFamiliar(property, _default);
  } else if (isStatProperty(property)) {
    return getStat(property, _default);
  } else if (isPhylumProperty(property)) {
    return getPhylum(property, _default);
  } else if (isItemProperty(property)) {
    return getItem(property, _default);
  } else if (isStringProperty(property)) {
    return value === "" && _default !== undefined ? _default : value;
  }
  // Not a KnownProperty from here on out.
  if (_default instanceof kolmafia.Location) {
    return getLocation(property, _default);
  } else if (_default instanceof kolmafia.Monster) {
    return getMonster(property, _default);
  } else if (_default instanceof kolmafia.Familiar) {
    return getFamiliar(property, _default);
  } else if (_default instanceof kolmafia.Stat) {
    return getStat(property, _default);
  } else if (_default instanceof kolmafia.Phylum) {
    return getPhylum(property, _default);
  } else if (_default instanceof kolmafia.Item) {
    return getItem(property, _default);
  } else if (typeof _default === "boolean") {
    return value === "true" ? true : value === "false" ? false : _default;
  } else if (typeof _default === "number") {
    return value === "" ? _default : parseInt(value);
  } else if (value === "") {
    return _default === undefined ? "" : _default;
  } else {
    return value;
  }
}
/**
 * Sets the value of a mafia property, either built in or custom
 *
 * @param property Name of the property
 * @param value Value to give the property
 * @returns Value that was set
 */
function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  kolmafia.setProperty(property, stringValue);
  return value;
}
/**
 * Sets the value of a set of mafia properties
 *
 * @param properties Set of properties
 */
function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      prop = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    _set(prop, value);
  }
}
/**
 * Carries out a callback during which a set of properties will be set as supplied
 *
 * @param properties Properties to set during callback
 * @param callback Callback to execute with set properties
 * @returns Return value of the supplied callback
 */
function withProperties(properties, callback) {
  var propertiesBackup = Object.fromEntries(Object.entries(properties).map(_ref => {
    var _ref2 = _slicedToArray(_ref, 1),
      prop = _ref2[0];
    return [prop, get(prop)];
  }));
  setProperties(properties);
  try {
    return callback();
  } finally {
    setProperties(propertiesBackup);
  }
}
/**
 * Carries out a callback during which a set of choices will be handled as supplied
 *
 * @param choices Choices to set during callback
 * @param callback Callback to execute with set choices
 * @returns Return value of the supplied callback
 */
function withChoices(choices, callback) {
  var properties = Object.fromEntries(Object.entries(choices).map(_ref3 => {
    var _ref4 = _slicedToArray(_ref3, 2),
      choice = _ref4[0],
      option = _ref4[1];
    return ["choiceAdventure".concat(choice), option];
  }));
  return withProperties(properties, callback);
}
/**
 * Carries out a callback during which a choice will be handled as supplied
 *
 * @param choice Choice to set during callback
 * @param value How to handle choice during callback
 * @param callback Callback to execute with set properties
 * @returns Return value of the supplied callback
 */
function withChoice(choice, value, callback) {
  return withChoices({
    [choice]: value
  }, callback);
}
var PropertiesManager = /*#__PURE__*/function () {
  function PropertiesManager() {
    _classCallCheck(this, PropertiesManager);
    _defineProperty(this, "properties", {});
  }
  return _createClass(PropertiesManager, [{
    key: "storedValues",
    get: function get() {
      return this.properties;
    }
    /**
     * Sets a collection of properties to the given values, storing the old values.
     *
     * @param propertiesToSet A Properties object, keyed by property name.
     */
  }, {
    key: "set",
    value: function set(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
          propertyName = _Object$entries2$_i[0],
          propertyValue = _Object$entries2$_i[1];
        if (!(propertyName in this.properties)) {
          this.properties[propertyName] = kolmafia.propertyExists(propertyName) ? get(propertyName) : PropertiesManager.EMPTY_PREFERENCE;
        }
        _set(propertyName, propertyValue);
      }
    }
    /**
     * Sets a collection of choice adventure properties to the given values, storing the old values.
     *
     * @param choicesToSet An object keyed by choice adventure number.
     */
  }, {
    key: "setChoices",
    value: function setChoices(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(_ref5 => {
        var _ref6 = _slicedToArray(_ref5, 2),
          choiceNumber = _ref6[0],
          choiceValue = _ref6[1];
        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
    /**
     * Sets a single choice adventure property to the given value, storing the old value.
     *
     * @param choiceToSet The number of the choice adventure to set the property for.
     * @param value The value to assign to that choice adventure.
     */
  }, {
    key: "setChoice",
    value: function setChoice(choiceToSet, value) {
      this.setChoices({
        [choiceToSet]: value
      });
    }
    /**
     * Resets the given properties to their original stored value. Does not delete entries from the manager.
     *
     * @param properties Collection of properties to reset.
     */
  }, {
    key: "reset",
    value: function reset() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
        properties[_key] = arguments[_key];
      }
      for (var _i3 = 0, _properties = properties; _i3 < _properties.length; _i3++) {
        var property = _properties[_i3];
        if (!(property in this.properties)) continue;
        var value = this.properties[property];
        if (value === PropertiesManager.EMPTY_PREFERENCE) {
          kolmafia.removeProperty(property);
        } else {
          _set(property, value);
        }
      }
    }
    /**
     * Iterates over all stored values, setting each property back to its original stored value. Does not delete entries from the manager.
     */
  }, {
    key: "resetAll",
    value: function resetAll() {
      this.reset.apply(this, _toConsumableArray(Object.keys(this.properties)));
    }
    /**
     * Stops storing the original values of inputted properties.
     *
     * @param properties Properties for the manager to forget.
     */
  }, {
    key: "clear",
    value: function clear() {
      for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        properties[_key2] = arguments[_key2];
      }
      for (var _i4 = 0, _properties2 = properties; _i4 < _properties2.length; _i4++) {
        var property = _properties2[_i4];
        if (this.properties[property]) {
          delete this.properties[property];
        }
      }
    }
    /**
     * Clears all properties.
     */
  }, {
    key: "clearAll",
    value: function clearAll() {
      this.properties = {};
    }
    /**
     * Increases a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially raise.
     * @param value The minimum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMinimumValue",
    value: function setMinimumValue(property, value) {
      if (get(property, 0) < value) {
        this.set({
          [property]: value
        });
        return true;
      }
      return false;
    }
    /**
     * Decrease a numeric property to the given value if necessary.
     *
     * @param property The numeric property we want to potentially lower.
     * @param value The maximum value we want that property to have.
     * @returns Whether we needed to change the property.
     */
  }, {
    key: "setMaximumValue",
    value: function setMaximumValue(property, value) {
      if (get(property, 0) > value) {
        this.set({
          [property]: value
        });
        return true;
      }
      return false;
    }
    /**
     * Creates a new PropertiesManager with identical stored values to this one.
     *
     * @returns A new PropertiesManager, with identical stored values to this one.
     */
  }, {
    key: "clone",
    value: function clone() {
      var newGuy = new PropertiesManager();
      newGuy.properties = this.storedValues;
      return newGuy;
    }
    /**
     * Clamps a numeric property, modulating it up or down to fit within a specified range
     *
     * @param property The numeric property to clamp
     * @param min The lower bound for what we want the property to be allowed to be.
     * @param max The upper bound for what we want the property to be allowed to be.
     * @returns Whether we ended up changing the property or not.
     */
  }, {
    key: "clamp",
    value: function clamp(property, min, max) {
      if (max < min) return false;
      var start = get(property);
      this.setMinimumValue(property, min);
      this.setMaximumValue(property, max);
      return start !== get(property);
    }
    /**
     * Determines whether this PropertiesManager has identical stored values to another.
     *
     * @param other The PropertiesManager to compare to this one.
     * @returns Whether their StoredValues are identical.
     */
  }, {
    key: "equals",
    value: function equals(other) {
      var thisProps = Object.entries(this.storedValues);
      var otherProps = new Map(Object.entries(other.storedValues));
      if (thisProps.length !== otherProps.size) return false;
      for (var _i5 = 0, _thisProps = thisProps; _i5 < _thisProps.length; _i5++) {
        var _thisProps$_i = _slicedToArray(_thisProps[_i5], 2),
          propertyName = _thisProps$_i[0],
          propertyValue = _thisProps$_i[1];
        if (otherProps.get(propertyName) === propertyValue) return false;
      }
      return true;
    }
    /**
     * Merges a PropertiesManager onto this one, letting the input win in the event that both PropertiesManagers have a value stored.
     *
     * @param other The PropertiesManager to be merged onto this one.
     * @returns A new PropertiesManager with stored values from both its parents.
     */
  }, {
    key: "merge",
    value: function merge(other) {
      var newGuy = new PropertiesManager();
      newGuy.properties = _objectSpread2(_objectSpread2({}, this.properties), other.properties);
      return newGuy;
    }
    /**
     * Merges an arbitrary collection of PropertiesManagers, letting the rightmost PropertiesManager win in the event of verlap.
     *
     * @param mergees The PropertiesManagers to merge together.
     * @returns A PropertiesManager that is just an amalgam of all the constituents.
     */
  }], [{
    key: "merge",
    value: function merge() {
      for (var _len3 = arguments.length, mergees = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        mergees[_key3] = arguments[_key3];
      }
      if (mergees.length === 0) return new PropertiesManager();
      return mergees.reduce((a, b) => a.merge(b));
    }
  }]);
}();
_defineProperty(PropertiesManager, "EMPTY_PREFERENCE", Symbol("empty preference"));

/**
 * Sum an array of numbers.
 *
 * @param addends Addends to sum.
 * @param x Property or mapping function of addends to sum
 * @returns Sum of numbers
 */
function sum(addends, x) {
  return addends.reduce((subtotal, element) => subtotal + (typeof x === "function" ? x(element) : element[x]), 0);
}
/**
 * Checks if a given item is in a readonly array, acting as a typeguard.
 *
 * @param item Needle
 * @param array Readonly array haystack
 * @returns Whether the item is in the array, and narrows the type of the item.
 */
function arrayContains(item, array) {
  return array.includes(item);
}
/**
 * Checks if two arrays contain the same elements in the same quantity.
 *
 * @param a First array for comparison
 * @param b Second array for comparison
 * @returns Whether the two arrays are equal, irrespective of order.
 */
function setEqual(a, b) {
  var sortedA = _toConsumableArray(a).sort();
  var sortedB = _toConsumableArray(b).sort();
  return a.length === b.length && sortedA.every((item, index) => item === sortedB[index]);
}
/**
 * Splits a string by commas while also respecting escaping commas with a backslash
 *
 * @param str String to split
 * @returns List of tokens
 */
function splitByCommasWithEscapes(str) {
  var returnValue = [];
  var ignoreNext = false;
  var currentString = "";
  var _iterator2 = _createForOfIteratorHelper(str.split("")),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var char = _step2.value;
      if (char === "\\") {
        ignoreNext = true;
      } else {
        if (char == "," && !ignoreNext) {
          returnValue.push(currentString.trim());
          currentString = "";
        } else {
          currentString += char;
        }
        ignoreNext = false;
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  returnValue.push(currentString.trim());
  return returnValue;
}
/**
 * Used to collapse a Delayed<T, S> object into an entity of type "T" as represented by the object.
 *
 * @param delayedObject Object of type Delayed<T, S> that represents either a value of type T or a function returning a value of type T.
 * @param args The arguments to pass to the delay function
 * @returns The return value of the function, if delayedObject is a function. Otherwise, this returns the original element.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function undelay(delayedObject) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  return typeof delayedObject === "function" ? delayedObject.apply(void 0, args) : delayedObject;
}
/**
 * Makes a byX function, like byStat or byClass
 *
 * @param source A method for finding your stat, or class, or whatever X is in this context
 * @returns A function akin to byStat or byClass; it accepts an object that either is "complete" in the sense that it has a key for every conceivable value, or contains a `default` parameter. If an inappropriate input is provided, returns undefined.
 */
function makeByXFunction(source) {
  return function (options, alternateSource) {
    var val = undelay(alternateSource ?? source);
    if ("default" in options) return options[val] ?? options.default;
    return options[val];
  };
}
/**
 * Title cases a single word
 *
 * @param word Word to transform
 * @returns Word in title case
 */
var tc = word => word.charAt(0).toUpperCase() + word.slice(1);

var concatTemplateString = function concatTemplateString(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    placeholders[_key - 1] = arguments[_key];
  }
  return literals.raw.reduce((acc, literal, i) => acc + literal + (placeholders[i] ?? ""), "");
};
var handleTypeGetError = (Type, error) => {
  var message = "".concat(error);
  var match = message.match(RegExp("Bad ".concat(Type.name.toLowerCase(), " value: .*")));
  if (match) {
    kolmafia.print("".concat(match[0], "; if you're certain that this ").concat(Type.name, " exists and is spelled correctly, please update KoLMafia"), "red");
  } else {
    kolmafia.print(message);
  }
};
var createSingleConstant = (Type, converter) => {
  var tagFunction = function tagFunction(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      placeholders[_key2 - 1] = arguments[_key2];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    try {
      return Type.get(input);
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    kolmafia.abort();
  };
  tagFunction.cls = Type;
  tagFunction.none = Type.none;
  tagFunction.get = name => {
    var value = converter(name);
    return value === Type.none ? null : value;
  };
  return tagFunction;
};
var createPluralConstant = Type => {
  var tagFunction = function tagFunction(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      placeholders[_key3 - 1] = arguments[_key3];
    }
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    if (input === "") {
      return Type.all();
    }
    try {
      return Type.get(splitByCommasWithEscapes(input));
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    kolmafia.abort();
  };
  tagFunction.all = () => Type.all();
  return tagFunction;
};
/**
 * A Bounty specified by name.
 *
 * @category In-game constant
 */
createSingleConstant(kolmafia.Bounty, kolmafia.toBounty);
/**
 * A list of Bounties specified by a comma-separated list of names.
 * For a list of all possible Bounties, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Bounty);
/**
 * A Class specified by name.
 *
 * @category In-game constant
 */
var $class = createSingleConstant(kolmafia.Class, kolmafia.toClass);
/**
 * A list of Classes specified by a comma-separated list of names.
 * For a list of all possible Classes, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Class);
/**
 * A Coinmaster specified by name.
 *
 * @category In-game constant
 */
createSingleConstant(kolmafia.Coinmaster, kolmafia.toCoinmaster);
/**
 * A list of Coinmasters specified by a comma-separated list of names.
 * For a list of all possible Coinmasters, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Coinmaster);
/**
 * An Effect specified by name.
 *
 * @category In-game constant
 */
var $effect = createSingleConstant(kolmafia.Effect, kolmafia.toEffect);
/**
 * A list of Effects specified by a comma-separated list of names.
 * For a list of all possible Effects, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Effect);
/**
 * An Element specified by name.
 *
 * @category In-game constant
 */
var $element = createSingleConstant(kolmafia.Element, kolmafia.toElement);
/**
 * A list of Elements specified by a comma-separated list of names.
 * For a list of all possible Elements, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Element);
/**
 * A Familiar specified by name.
 *
 * @category In-game constant
 */
var $familiar = createSingleConstant(kolmafia.Familiar, kolmafia.toFamiliar);
/**
 * A list of Familiars specified by a comma-separated list of names.
 * For a list of all possible Familiars, leave the template string blank.
 *
 * @category In-game constant
 */
var $familiars = createPluralConstant(kolmafia.Familiar);
/**
 * An Item specified by name.
 *
 * @category In-game constant
 */
var $item = createSingleConstant(kolmafia.Item, kolmafia.toItem);
/**
 * A list of Items specified by a comma-separated list of names.
 * For a list of all possible Items, leave the template string blank.
 *
 * @category In-game constant
 */
var $items = createPluralConstant(kolmafia.Item);
/**
 * A Location specified by name.
 *
 * @category In-game constant
 */
var $location = createSingleConstant(kolmafia.Location, kolmafia.toLocation);
/**
 * A list of Locations specified by a comma-separated list of names.
 * For a list of all possible Locations, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Location);
/**
 * A Modifier specified by name.
 *
 * @category In-game constant
 */
createSingleConstant(kolmafia.Modifier, kolmafia.toModifier);
/**
 * A list of Modifiers specified by a comma-separated list of names.
 * For a list of all possible Modifiers, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Modifier);
/**
 * A Monster specified by name.
 *
 * @category In-game constant
 */
var $monster = createSingleConstant(kolmafia.Monster, kolmafia.toMonster);
/**
 * A list of Monsters specified by a comma-separated list of names.
 * For a list of all possible Monsters, leave the template string blank.
 *
 * @category In-game constant
 */
var $monsters = createPluralConstant(kolmafia.Monster);
/**
 * A Path specified by name.
 *
 * @category In-game constant
 */
var $path = createSingleConstant(kolmafia.Path, kolmafia.toPath);
/**
 * A list of Paths specified by a comma-separated list of names.
 * For a list of all possible Paths, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Path);
/**
 * A Phylum specified by name.
 *
 * @category In-game constant
 */
createSingleConstant(kolmafia.Phylum, kolmafia.toPhylum);
/**
 * A list of Phyla specified by a comma-separated list of names.
 * For a list of all possible Phyla, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Phylum);
/**
 * A Servant specified by name.
 *
 * @category In-game constant
 */
createSingleConstant(kolmafia.Servant, kolmafia.toServant);
/**
 * A list of Servants specified by a comma-separated list of names.
 * For a list of all possible Servants, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Servant);
/**
 * A Skill specified by name.
 *
 * @category In-game constant
 */
var $skill = createSingleConstant(kolmafia.Skill, kolmafia.toSkill);
/**
 * A list of Skills specified by a comma-separated list of names.
 * For a list of all possible Skills, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Skill);
/**
 * A Slot specified by name.
 *
 * @category In-game constant
 */
var $slot = createSingleConstant(kolmafia.Slot, kolmafia.toSlot);
/**
 * A list of Slots specified by a comma-separated list of names.
 * For a list of all possible Slots, leave the template string blank.
 *
 * @category In-game constant
 */
var $slots = createPluralConstant(kolmafia.Slot);
/**
 * A Stat specified by name.
 *
 * @category In-game constant
 */
var $stat = createSingleConstant(kolmafia.Stat, kolmafia.toStat);
/**
 * A list of Stats specified by a comma-separated list of names.
 * For a list of all possible Stats, leave the template string blank.
 *
 * @category In-game constant
 */
var $stats = createPluralConstant(kolmafia.Stat);
/**
 * A Thrall specified by name.
 *
 * @category In-game constant
 */
createSingleConstant(kolmafia.Thrall, kolmafia.toThrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Thrall);

var _templateObject$7, _templateObject10$3, _templateObject11$3, _templateObject12$3, _templateObject13$3, _templateObject14$3, _templateObject15$3, _templateObject16$3, _templateObject17$3, _templateObject18$3, _templateObject19$3, _templateObject20$3, _templateObject21$3, _templateObject22$3, _templateObject23$2, _templateObject24$2, _templateObject25$2, _templateObject26$2, _templateObject27$2, _templateObject28$2, _templateObject29$2, _templateObject30$2, _templateObject31$2, _templateObject32$2, _templateObject33$2, _templateObject34$2, _templateObject35$2, _templateObject48$2, _templateObject49$1, _templateObject50$1, _templateObject51$1, _templateObject52$1, _templateObject53$1;
/**
 * Determine whether the Skill or Effect provided is an Accordion Thief song
 *
 * @category General
 * @param skillOrEffect The Skill or Effect
 * @returns Whether it's a song
 */
function isSong(skillOrEffect) {
  if (skillOrEffect instanceof kolmafia.Effect && skillOrEffect.attributes.includes("song")) {
    return true;
  } else {
    var skill = skillOrEffect instanceof kolmafia.Effect ? kolmafia.toSkill(skillOrEffect) : skillOrEffect;
    return skill.class === $class(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
  }
}
/**
 * Determine whether the player "has" any entity which one could feasibly "have".
 *
 * @category General
 * @param thing Thing to check
 * @param quantity Minimum quantity the player must have to pass
 * @returns Whether the player meets the requirements of owning the supplied thing
 */
function have$1(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (thing instanceof kolmafia.Effect) {
    return kolmafia.haveEffect(thing) >= quantity;
  }
  if (thing instanceof kolmafia.Familiar) {
    return kolmafia.haveFamiliar(thing);
  }
  if (thing instanceof kolmafia.Item) {
    return kolmafia.availableAmount(thing) >= quantity;
  }
  if (thing instanceof kolmafia.Servant) {
    return kolmafia.haveServant(thing);
  }
  if (thing instanceof kolmafia.Skill) {
    return kolmafia.haveSkill(thing);
  }
  if (thing instanceof kolmafia.Thrall) {
    var thrall = kolmafia.myThrall();
    return thrall.id === thing.id && thrall.level >= quantity;
  }
  return false;
}
var Wanderer;
(function (Wanderer) {
  Wanderer["Digitize"] = "Digitize Monster";
  Wanderer["Enamorang"] = "Enamorang Monster";
  Wanderer["Familiar"] = "Familiar";
  Wanderer["Holiday"] = "Holiday Monster";
  Wanderer["Kramco"] = "Kramco";
  Wanderer["Nemesis"] = "Nemesis Assassin";
  Wanderer["Portscan"] = "portscan.edu";
  Wanderer["Romantic"] = "Romantic Monster";
  Wanderer["Vote"] = "Vote Monster";
})(Wanderer || (Wanderer = {}));
[Wanderer.Digitize, Wanderer.Portscan];
/**
 * Remove an effect
 *
 * @category General
 * @param effect Effect to remove
 * @returns Success
 */
function uneffect(effect) {
  return kolmafia.cliExecute("uneffect ".concat(effect.name));
}
var EnsureError = /*#__PURE__*/function (_Error) {
  function EnsureError(cause, reason) {
    var _this;
    _classCallCheck(this, EnsureError);
    _this = _callSuper(this, EnsureError, ["Failed to ensure ".concat(cause.name, "!").concat(reason ? " ".concat(reason) : "")]);
    _this.name = "Ensure Error";
    return _this;
  }
  _inherits(EnsureError, _Error);
  return _createClass(EnsureError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Tries to get an effect using the default method
 *
 * @param ef effect to try to get
 * @param turns turns to aim for; default of 1
 * @throws {EnsureError} Throws an error if the effect cannot be guaranteed
 */
function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (kolmafia.haveEffect(ef) < turns) {
    if (ef.default === null) {
      throw new EnsureError(ef, "No default action");
    }
    if (!kolmafia.cliExecute(ef.default) || kolmafia.haveEffect(ef) === 0) {
      throw new EnsureError(ef);
    }
  }
}
var holidayWanderers = new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject10$3 || (_templateObject10$3 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject11$3 || (_templateObject11$3 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject12$3 || (_templateObject12$3 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
/**
 * Get today's holiday wanderers
 *
 * @returns List of holiday wanderer Monsters
 */
function getTodaysHolidayWanderers() {
  return kolmafia.holiday().split("/").flatMap(holiday => holidayWanderers.get(holiday) ?? []);
}
new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject13$3 || (_templateObject13$3 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject14$3 || (_templateObject14$3 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject15$3 || (_templateObject15$3 = _taggedTemplateLiteral(["Moxie"])))]]);
new Map([["people, all of whom appear to be on fire", $element(_templateObject16$3 || (_templateObject16$3 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject17$3 || (_templateObject17$3 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject18$3 || (_templateObject18$3 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject19$3 || (_templateObject19$3 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject20$3 || (_templateObject20$3 = _taggedTemplateLiteral(["cold"])))]]);
new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject21$3 || (_templateObject21$3 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject22$3 || (_templateObject22$3 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject23$2 || (_templateObject23$2 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject24$2 || (_templateObject24$2 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject25$2 || (_templateObject25$2 = _taggedTemplateLiteral(["cold"])))]]);
new Map([["smoke rising from deeper within the maze", $element(_templateObject26$2 || (_templateObject26$2 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject27$2 || (_templateObject27$2 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject28$2 || (_templateObject28$2 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject29$2 || (_templateObject29$2 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject30$2 || (_templateObject30$2 = _taggedTemplateLiteral(["cold"])))]]);
new Map([["with lava slowly oozing out of it", $element(_templateObject31$2 || (_templateObject31$2 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject32$2 || (_templateObject32$2 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject33$2 || (_templateObject33$2 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject34$2 || (_templateObject34$2 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject35$2 || (_templateObject35$2 = _taggedTemplateLiteral(["cold"])))]]);
var regularFamiliarTags = Object.freeze(["animal", "insect", "haseyes", "haswings", "fast", "bite", "flies", "hashands", "wearsclothes", "organic", "vegetable", "hovers", "edible", "food", "sentient", "cute", "mineral", "polygonal", "object", "undead", "cantalk", "evil", "orb", "spooky", "sleaze", "aquatic", "swims", "isclothes", "phallic", "stench", "hot", "hasbeak", "haslegs", "robot", "technological", "hard", "cold", "hasbones", "hasclaws", "reallyevil", "good", "person", "humanoid", "animatedart", "software", "hasshell", "hasstinger"]);
new Set(regularFamiliarTags);
new Map([[$familiar(_templateObject48$2 || (_templateObject48$2 = _taggedTemplateLiteral(["Nursine"]))), ["ult_bearhug"]], [$familiar(_templateObject49$1 || (_templateObject49$1 = _taggedTemplateLiteral(["Caramel"]))), ["ult_sticktreats"]], [$familiar(_templateObject50$1 || (_templateObject50$1 = _taggedTemplateLiteral(["Smashmoth"]))), ["ult_owlstare"]], [$familiar(_templateObject51$1 || (_templateObject51$1 = _taggedTemplateLiteral(["Slotter"]))), ["ult_bloodbath"]], [$familiar(_templateObject52$1 || (_templateObject52$1 = _taggedTemplateLiteral(["Cornbeefadon"]))), ["ult_pepperscorn"]], [$familiar(_templateObject53$1 || (_templateObject53$1 = _taggedTemplateLiteral(["Mu"]))), ["ult_rainbowstorm"]]]);

/** THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseItemSkillNames.ts for more information */
var overlappingItemNames = ["spider web", "really sticky spider web", "dictionary", "NG", "Cloaca-Cola", "yo-yo", "top", "ball", "kite", "yo", "red potion", "blue potion", "bowling ball", "adder", "red button", "tennis ball", "pile of sand", "mushroom", "deluxe mushroom", "spoon"];
var overlappingSkillNames = ["Lightning Bolt", "Shoot", "Thrust-Smack", "Headbutt", "Toss", "Knife in the Dark", "Sing", "Disarm", "LIGHT", "BURN", "Extract", "Meteor Shower", "Snipe", "Bite", "Kick", "Howl", "Cleave", "Boil", "Slice", "Rainbow", "Lightning Bolt"];

var MACRO_NAME = "Script Autoattack Macro";
/**
 * Get the KoL native ID of the macro with name name.
 *
 * @param name Name of the macro
 * @category Combat
 * @returns {number} The macro ID.
 */
function getMacroId() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : MACRO_NAME;
  var query = "//select[@name=\"macroid\"]/option[text()=\"".concat(name, "\"]/@value");
  var macroText = kolmafia.visitUrl("account_combatmacros.php");
  var macroMatches = kolmafia.xpath(macroText, query);
  if (macroMatches.length === 0) {
    kolmafia.visitUrl("account_combatmacros.php?action=new");
    var newMacroText = kolmafia.visitUrl("account_combatmacros.php?macroid=0&name=".concat(name, "&macrotext=abort&action=save"));
    macroMatches = kolmafia.xpath(newMacroText, query);
  }
  if (macroMatches.length === 0) {
    // We may have hit the macro cap
    if (kolmafia.xpath(macroText, '//select[@name="macroid"]/option').length >= 100) {
      throw new InvalidMacroError("Please delete at least one existing macro to make some space for Libram");
    }
    // Otherwise who knows why it failed
    throw new InvalidMacroError("Could not find or create macro ".concat(name));
  }
  return parseInt(macroMatches[0], 10);
}
/**
 * Converts an item name to a Item, or passes through an existing instance of Item
 *
 * @param itemOrName Item name or Item instance
 * @returns KoLmafia Item instance
 */
function itemOrNameToItem(itemOrName) {
  return typeof itemOrName === "string" ? kolmafia.Item.get(itemOrName) : itemOrName;
}
/**
 * Create a string of the item or items provided that is compatible with BALLS syntax and is non-ambiguous
 *
 * @param itemOrItems Item name, item instance, or 2-tuple of item name or item instance
 * @returns BALLS macro-compatible value for item or items provided
 */
function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  } else {
    var item = itemOrNameToItem(itemOrItems);
    return !overlappingItemNames.includes(item.name) ? item.name : item.id.toFixed(0);
  }
}
/**
 * Generate a BALLS macro condition to check wither the player has either a single or a 2-tuple of combat items
 *
 * @param itemOrItems Single or 2-tuple of combat items
 * @returns BALLS macro condition
 */
function itemOrItemsBallsMacroPredicate(itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    if (itemOrItems[0] === itemOrItems[1]) return "hastwocombatitems ".concat(itemOrItemsBallsMacroName(itemOrItems[0]));
    return itemOrItems.map(itemOrItemsBallsMacroPredicate).join(" && ");
  } else {
    return "hascombatitem ".concat(itemOrItemsBallsMacroName(itemOrItems));
  }
}
/**
 * Converts a skill name to a Skill, or passes through an existing instance of Skill
 *
 * @param skillOrName Skill name or Skill instance
 * @returns KoLmafia Skill instance
 */
function skillOrNameToSkill(skillOrName) {
  if (typeof skillOrName === "string") {
    return kolmafia.Skill.get(skillOrName);
  } else {
    return skillOrName;
  }
}
/**
 * Get a skill name in a form that is appropriate for BALLS macros
 *
 * @param skillOrName Skill name or Skill instance
 * @returns BALLS macro-suitable skill name
 */
function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) && !overlappingSkillNames.includes(skill.name) ? skill.name : skill.id;
}
/**
 * Reduces a list of items into pairs to funksling.
 *
 * @param items - The items to be reduced.
 * @returns The reduced list of items or item pairs.
 */
function funkslingReduce() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }
  return items.reduce((acc, item, i, arr) => i % 2 === 0 ? acc.concat(i + 1 < arr.length ? [[item, arr[i + 1]]] : [item]) : acc, []);
}
var InvalidMacroError = /*#__PURE__*/function (_Error) {
  function InvalidMacroError() {
    _classCallCheck(this, InvalidMacroError);
    return _callSuper(this, InvalidMacroError, arguments);
  }
  _inherits(InvalidMacroError, _Error);
  return _createClass(InvalidMacroError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
/**
 * BALLS macro builder for direct submission to KoL.
 * Create a new macro with `new Macro()` and add steps using the instance methods.
 * Uses a fluent interface, so each step returns the object for easy chaining of steps.
 * Each method is also defined as a static method that creates a new Macro with only that step.
 * For example, you can do `Macro.skill('Saucestorm').attack()`.
 */
var Macro = /*#__PURE__*/function () {
  function Macro() {
    _classCallCheck(this, Macro);
    _defineProperty(this, "components", []);
    _defineProperty(this, "name", MACRO_NAME);
  }
  return _createClass(Macro, [{
    key: "toString",
    value:
    /**
     * Convert macro to string.
     *
     * @returns BALLS macro
     */
    function toString() {
      return (this.components.join(";") + ";").replace(/;;+/g, ";");
    }
    /**
     * Gives your macro a new name to be used when saving an autoattack.
     *
     * @param name The name to be used when saving as an autoattack.
     * @returns The macro in question
     */
  }, {
    key: "rename",
    value: function rename(name) {
      this.name = name;
      return this;
    }
    /**
     * Creates a new Macro with a name other than the default name.
     *
     * @param name The name to assign this macro.
     * @returns A new Macro with the assigned name.
     */
  }, {
    key: "save",
    value:
    /**
     * Save a macro to a Mafia property for use in a consult script.
     */
    function save() {
      _set(Macro.SAVED_MACRO_PROPERTY, this.toString());
    }
    /**
     * Load a saved macro from the Mafia property.
     *
     * @returns Loaded macro text
     */
  }, {
    key: "step",
    value:
    /**
     * Statefully add one or several steps to a macro.
     *
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
    function step() {
      var _ref, _this$components;
      for (var _len2 = arguments.length, nextSteps = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextSteps[_key2] = arguments[_key2];
      }
      var nextStepsStrings = (_ref = []).concat.apply(_ref, _toConsumableArray(nextSteps.map(x => x instanceof Macro ? x.components : [x])));
      (_this$components = this.components).push.apply(_this$components, _toConsumableArray(nextStepsStrings.filter(Boolean)));
      return this;
    }
    /**
     * Statefully add one or several steps to a macro.
     *
     * @param nextSteps The steps to add to the macro.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "submit",
    value:
    /**
     * Submit the built macro to KoL. Only works inside combat.
     *
     * @returns Contents of the fight page after macro submission
     */
    function submit() {
      var final = this.toString();
      return kolmafia.visitUrl("fight.php?action=macro&macrotext=".concat(kolmafia.urlEncode(final)), true, true);
    }
    /**
     * Set this macro as a KoL native autoattack.
     */
  }, {
    key: "setAutoAttack",
    value: function setAutoAttack() {
      var id = Macro.cachedMacroIds.get(this.name);
      if (id === undefined) {
        id = getMacroId(this.name);
        Macro.cachedMacroIds.set(this.name, id);
      }
      if (kolmafia.getAutoAttack() === 99000000 + id && this.toString() === Macro.cachedAutoAttacks.get(this.name)) {
        // This macro is already set. Don"t make the server request.
        return;
      }
      kolmafia.visitUrl("account_combatmacros.php?macroid=".concat(id, "&name=").concat(kolmafia.urlEncode(this.name), "&macrotext=").concat(kolmafia.urlEncode(this.toString()), "&action=save"), true, true);
      kolmafia.visitUrl("account.php?am=1&action=autoattack&value=".concat(99000000 + id, "&ajax=1"));
      Macro.cachedAutoAttacks.set(this.name, this.toString());
    }
    /**
     * Renames the macro, then sets it as an autoattack.
     *
     * @param name The name to save the macro under as an autoattack.
     */
  }, {
    key: "setAutoAttackAs",
    value: function setAutoAttackAs(name) {
      this.name = name;
      this.setAutoAttack();
    }
    /**
     * Clear all cached autoattacks, and delete all stored macros server-side.
     */
  }, {
    key: "abort",
    value:
    /**
     * Add an "abort" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
    function abort() {
      return this.step("abort");
    }
    /**
     * Create a new macro with an "abort" step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "abortWithWarning",
    value:
    /**
     * Adds an "abort" step to this macro, with a warning message to print
     *
     * @param warning The warning message to print
     * @returns  {Macro} This object itself.
     */
    function abortWithWarning(warning) {
      return this.step("abort \"".concat(warning, "\""));
    }
    /**
     * Create a new macro with an "abort" step to this macro, with a warning message to print
     *
     * @param warning The warning message to print
     * @returns {Macro} This object itself.
     */
  }, {
    key: "runaway",
    value:
    /**
     * Add a "runaway" step to this macro.
     *
     * @returns {Macro} This object itself.
     */
    function runaway() {
      return this.step("runaway");
    }
    /**
     * Create a new macro with an "runaway" step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "if_",
    value:
    /**
     * Add an "if" statement to this macro.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
    function if_(condition, ifTrue) {
      return this.step("if ".concat(Macro.makeBALLSPredicate(condition))).step(ifTrue).step("endif");
    }
    /**
     * Create a new macro with an "if" statement.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "ifNot",
    value:
    /**
     * Add an "if" statement to this macro, inverting the condition.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
    function ifNot(condition, ifTrue) {
      return this.if_("!".concat(Macro.makeBALLSPredicate(condition)), ifTrue);
    }
    /**
     * Create a new macro with an "if" statement, inverting the condition.
     *
     * @param condition The BALLS condition for the if statement.
     * @param ifTrue Continuation if the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "while_",
    value:
    /**
     * Add a "while" statement to this macro.
     *
     * @param condition The BALLS condition for the while statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
    function while_(condition, contents) {
      return this.step("while ".concat(Macro.makeBALLSPredicate(condition))).step(contents).step("endwhile");
    }
    /**
     * Create a new macro with a "while" statement.
     *
     * @param condition The BALLS condition for the while statement.
     * @param contents Loop to repeat while the condition is true.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "externalIf",
    value:
    /**
     * Conditionally add a step to a macro based on a condition evaluated at the time of building the macro.
     *
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */
    function externalIf(condition, ifTrue, ifFalse) {
      if (condition) return this.step(ifTrue);else if (ifFalse) return this.step(ifFalse);else return this;
    }
    /**
     * Create a new macro with a condition evaluated at the time of building the macro.
     *
     * @param condition The JS condition.
     * @param ifTrue Continuation to add if the condition is true.
     * @param ifFalse Optional input to turn this into an if...else statement.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "repeat",
    value:
    /**
     * Add a repeat step to the macro.
     *
     * @param condition The BALLS condition for the repeat statement, optional.
     * @returns {Macro} This object itself.
     */
    function repeat(condition) {
      return condition === undefined ? this.step("repeat") : this.step("repeat ".concat(Macro.makeBALLSPredicate(condition)));
    }
    /**
     * Add one or more skill cast steps to the macro.
     *
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "skill",
    value: function skill() {
      for (var _len3 = arguments.length, skills = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        skills[_key3] = arguments[_key3];
      }
      return this.step.apply(this, _toConsumableArray(skills.map(skill => {
        return "skill ".concat(skillBallsMacroName(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps.
     *
     * @param skills Skills to cast.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
    function trySkill() {
      for (var _len4 = arguments.length, skills = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        skills[_key4] = arguments[_key4];
      }
      return this.step.apply(this, _toConsumableArray(skills.map(skillOrName => skillOrNameToSkill(skillOrName)).map(skill => {
        return Macro.if_(Macro.makeBALLSPredicate(skill), Macro.skill(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
    function trySkillRepeat() {
      for (var _len5 = arguments.length, skills = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        skills[_key5] = arguments[_key5];
      }
      return this.step.apply(this, _toConsumableArray(skills.map(skillOrName => skillOrNameToSkill(skillOrName)).map(skill => {
        return Macro.if_(Macro.makeBALLSPredicate(skill), Macro.skill(skill).repeat(skill));
      })));
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function item() {
      for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        items[_key6] = arguments[_key6];
      }
      return this.step.apply(this, _toConsumableArray(items.map(itemOrItems => {
        return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
      })));
    }
    /**
     * Create a new macro with one or more item steps.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
    function tryItem() {
      for (var _len7 = arguments.length, items = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        items[_key7] = arguments[_key7];
      }
      return this.step.apply(this, _toConsumableArray(items.map(item => {
        return Macro.if_(itemOrItemsBallsMacroPredicate(item), Macro.item(item));
      })));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "funkslingItem",
    value:
    /**
     * Add one or more item steps to the macro, and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {Macro} This object itself.
     */
    function funkslingItem() {
      return this.item.apply(this, _toConsumableArray(funkslingReduce.apply(void 0, arguments)));
    }
    /**
     * Create a new macro with one or more item steps, and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "tryFunkslingItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first,
     * and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {Macro} This object itself.
     */
    function tryFunkslingItem() {
      return this.tryItem.apply(this, _toConsumableArray(funkslingReduce.apply(void 0, arguments)));
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first,
     * and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {Macro} This object itself.
     */
  }, {
    key: "attack",
    value:
    /**
     * Add an attack step to the macro.
     *
     * @returns {Macro} This object itself.
     */
    function attack() {
      return this.step("attack");
    }
    /**
     * Create a new macro with an attack step.
     *
     * @returns {Macro} This object itself.
     */
  }, {
    key: "ifHolidayWanderer",
    value:
    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, unmutated.
     *
     * @param macro The macro to place in the if_ statement
     * @returns This macro with supplied macro wapped in if statement matching holiday wanderers
     */
    function ifHolidayWanderer(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0) return this;
      return this.if_(todaysWanderers.map(monster => "monsterid ".concat(monster.id)).join(" || "), macro);
    }
    /**
     * Create a new macro starting with an ifHolidayWanderer step.
     *
     * @param macro The macro to place inside the if_ statement
     * @returns New macro with supplied macro wrapped in if statement matching holiday wanderers
     */
  }, {
    key: "ifNotHolidayWanderer",
    value:
    /**
     * Create an if_ statement based on what holiday of loathing it currently is. On non-holidays, returns the original macro, with the input macro appended.
     *
     * @param macro The macro to place in the if_ statement.
     * @returns This macro with supplied macro wrapped in if statement matching monsters that are not holiday wanderers
     */
    function ifNotHolidayWanderer(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      if (todaysWanderers.length === 0) return this.step(macro);
      return this.if_(todaysWanderers.map(monster => "!monsterid ".concat(monster.id)).join(" && "), macro);
    }
    /**
     * Create a new macro starting with an ifNotHolidayWanderer step.
     *
     * @param macro The macro to place inside the if_ statement
     * @returns New macro with supplied macro wrapped in if statement matching monsters that are not holiday wanderers
     */
  }], [{
    key: "rename",
    value: function rename(name) {
      return new this().rename(name);
    }
  }, {
    key: "load",
    value: function load() {
      var _this;
      return (_this = new this()).step.apply(_this, _toConsumableArray(get(Macro.SAVED_MACRO_PROPERTY).split(";")));
    }
    /**
     * Clear the saved macro in the Mafia property.
     */
  }, {
    key: "clearSaved",
    value: function clearSaved() {
      kolmafia.removeProperty(Macro.SAVED_MACRO_PROPERTY);
    }
  }, {
    key: "step",
    value: function step() {
      var _this2;
      return (_this2 = new this()).step.apply(_this2, arguments);
    }
  }, {
    key: "clearAutoAttackMacros",
    value: function clearAutoAttackMacros() {
      var _iterator = _createForOfIteratorHelper(Macro.cachedAutoAttacks.keys()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var name = _step.value;
          var id = Macro.cachedMacroIds.get(name) ?? getMacroId(name);
          kolmafia.visitUrl("account_combatmacros.php?macroid=".concat(id, "&action=edit&what=Delete&confirm=1"));
          Macro.cachedAutoAttacks.delete(name);
          Macro.cachedMacroIds.delete(name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "abort",
    value: function abort() {
      return new this().abort();
    }
  }, {
    key: "abortWithWarning",
    value: function abortWithWarning(warning) {
      return new this().abortWithWarning(warning);
    }
  }, {
    key: "runaway",
    value: function runaway() {
      return new this().runaway();
    }
    /**
     *
     * @param condition The BALLS condition or a type to make a condition for (Monster, Item, Skill, etc.)
     * @returns {string} The BALLS condition string
     */
  }, {
    key: "makeBALLSPredicate",
    value: function makeBALLSPredicate(condition) {
      if (condition instanceof kolmafia.Monster) {
        return "monsterid ".concat(condition.id);
      } else if (condition instanceof Array) {
        if (condition[0] instanceof kolmafia.Item) return itemOrItemsBallsMacroPredicate(condition);
        return "(".concat(condition.map(entry => Macro.makeBALLSPredicate(entry)).join(" || "), ")");
      } else if (condition instanceof kolmafia.Effect) {
        return "haseffect ".concat(condition.id);
      } else if (condition instanceof kolmafia.Skill) {
        return condition.combat ? "hasskill ".concat(skillBallsMacroName(condition)) : "knowsskill ".concat(condition.id);
      } else if (condition instanceof kolmafia.Item) {
        if (!condition.combat) {
          throw new InvalidMacroError("Item ".concat(condition, " cannot be made a valid BALLS predicate (it is not combat-usable)"));
        }
        return "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof kolmafia.Location) {
        var snarfblat = condition.id;
        if (snarfblat < 1) {
          throw new InvalidMacroError("Location ".concat(condition, " cannot be made a valid BALLS predicate (it has no location id)"));
        }
        return "snarfblat ".concat(snarfblat);
      } else if (condition instanceof kolmafia.Class) {
        if (condition.id > 6) {
          throw new InvalidMacroError("Class ".concat(condition, " cannot be made a valid BALLS predicate (it is not a standard class)"));
        }
        return condition.toString().replaceAll(" ", "").toLowerCase();
      } else if (condition instanceof kolmafia.Stat) {
        return "".concat(condition.toString().toLowerCase(), "class");
      } else if (condition instanceof kolmafia.Phylum) {
        return "monsterphylum ".concat(condition);
      } else if (condition instanceof kolmafia.Element) {
        return "monsterelement ".concat(condition);
      }
      return condition;
    }
  }, {
    key: "if_",
    value: function if_(condition, ifTrue) {
      return new this().if_(condition, ifTrue);
    }
  }, {
    key: "ifNot",
    value: function ifNot(condition, ifTrue) {
      return new this().ifNot(condition, ifTrue);
    }
  }, {
    key: "while_",
    value: function while_(condition, contents) {
      return new this().while_(condition, contents);
    }
  }, {
    key: "externalIf",
    value: function externalIf(condition, ifTrue, ifFalse) {
      return new this().externalIf(condition, ifTrue, ifFalse);
    }
  }, {
    key: "skill",
    value: function skill() {
      var _this3;
      return (_this3 = new this()).skill.apply(_this3, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this4;
      return (_this4 = new this()).trySkill.apply(_this4, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this5;
      return (_this5 = new this()).trySkillRepeat.apply(_this5, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this6;
      return (_this6 = new this()).item.apply(_this6, arguments);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this7;
      return (_this7 = new this()).tryItem.apply(_this7, arguments);
    }
  }, {
    key: "funkslingItem",
    value: function funkslingItem() {
      var _this8;
      return (_this8 = new this()).funkslingItem.apply(_this8, arguments);
    }
  }, {
    key: "tryFunkslingItem",
    value: function tryFunkslingItem() {
      var _this9;
      return (_this9 = new this()).tryFunkslingItem.apply(_this9, arguments);
    }
  }, {
    key: "attack",
    value: function attack() {
      return new this().attack();
    }
  }, {
    key: "ifHolidayWanderer",
    value: function ifHolidayWanderer(macro) {
      return new this().ifHolidayWanderer(macro);
    }
  }, {
    key: "ifNotHolidayWanderer",
    value: function ifNotHolidayWanderer(macro) {
      return new this().ifNotHolidayWanderer(macro);
    }
  }]);
}();
/**
 * Adventure in a location and handle all combats with a given macro.
 * To use this function you will need to create a consult script that runs Macro.load().submit() and a CCS that calls that consult script.
 * See examples/consult.ts for an example.
 *
 * @category Combat
 * @param loc Location to adventure in.
 * @param macro Macro to execute.
 */
_defineProperty(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");
_defineProperty(Macro, "cachedMacroIds", new Map());
_defineProperty(Macro, "cachedAutoAttacks", new Map());

var _templateObject$6, _templateObject2$4, _templateObject3$4, _templateObject4$4, _templateObject5$3, _templateObject6$3, _templateObject7$3, _templateObject8$3, _templateObject9$3, _templateObject0$2, _templateObject1$2, _templateObject10$2, _templateObject11$2, _templateObject12$2, _templateObject13$2, _templateObject14$2, _templateObject15$2, _templateObject16$2, _templateObject17$2, _templateObject18$2, _templateObject19$2, _templateObject20$2, _templateObject21$2, _templateObject22$2, _templateObject23$1, _templateObject24$1, _templateObject25$1, _templateObject26$1, _templateObject27$1, _templateObject28$1, _templateObject29$1, _templateObject30$1, _templateObject31$1, _templateObject32$1, _templateObject33$1, _templateObject34$1, _templateObject35$1, _templateObject36$1, _templateObject37$1, _templateObject38$1, _templateObject39$1, _templateObject40$1, _templateObject41$1, _templateObject42$1, _templateObject43$1, _templateObject44$1, _templateObject45$1, _templateObject46$1, _templateObject47$1, _templateObject48$1;
function toMaximizerName(_ref) {
  var name = _ref.name,
    id = _ref.id;
  return name.includes(";") ? "\xB6".concat(id) : name;
}
/**
 * Merges a partial set of maximizer options onto a full set maximizer options. We merge via overriding for all boolean properties and for onlySlot, and concat all other array properties.
 *
 * @param defaultOptions MaximizeOptions to use as a "base."
 * @param addendums Options to attempt to merge onto defaultOptions.
 * @returns Merged maximizer options
 */
function mergeMaximizeOptions(defaultOptions, addendums) {
  return {
    updateOnFamiliarChange: addendums.updateOnFamiliarChange ?? defaultOptions.updateOnFamiliarChange,
    updateOnCanEquipChanged: addendums.updateOnCanEquipChanged ?? defaultOptions.updateOnCanEquipChanged,
    updateOnLocationChange: addendums.updateOnLocationChange ?? defaultOptions.updateOnLocationChange,
    useOutfitCaching: addendums.useOutfitCaching ?? defaultOptions.useOutfitCaching,
    forceEquip: [].concat(_toConsumableArray(defaultOptions.forceEquip), _toConsumableArray(addendums.forceEquip ?? [])),
    preventEquip: [].concat(_toConsumableArray(defaultOptions.preventEquip), _toConsumableArray(addendums.preventEquip ?? [])).filter(item => {
      var _addendums$forceEquip;
      return !defaultOptions.forceEquip.includes(item) && !((_addendums$forceEquip = addendums.forceEquip) !== null && _addendums$forceEquip !== void 0 && _addendums$forceEquip.includes(item));
    }),
    bonusEquip: new Map([].concat(_toConsumableArray(defaultOptions.bonusEquip), _toConsumableArray(addendums.bonusEquip ?? []))),
    onlySlot: addendums.onlySlot ?? defaultOptions.onlySlot,
    preventSlot: [].concat(_toConsumableArray(defaultOptions.preventSlot), _toConsumableArray(addendums.preventSlot ?? [])),
    forceUpdate: addendums.forceUpdate ?? defaultOptions.forceUpdate,
    modes: _objectSpread2(_objectSpread2({}, defaultOptions.modes), addendums.modes ?? {})
  };
}
var defaultMaximizeOptions = {
  updateOnFamiliarChange: true,
  updateOnCanEquipChanged: true,
  updateOnLocationChange: false,
  useOutfitCaching: true,
  forceEquip: [],
  preventEquip: [],
  bonusEquip: new Map(),
  onlySlot: [],
  preventSlot: [],
  forceUpdate: false,
  modes: {}
};
var modeableCommands$1 = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka", "jillcandle"];
var modeableItems = {
  backupcamera: $item(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["backup camera"]))),
  umbrella: $item(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["unbreakable umbrella"]))),
  snowsuit: $item(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteral(["Snow Suit"]))),
  edpiece: $item(_templateObject4$4 || (_templateObject4$4 = _taggedTemplateLiteral(["The Crown of Ed the Undying"]))),
  retrocape: $item(_templateObject5$3 || (_templateObject5$3 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
  parka: $item(_templateObject6$3 || (_templateObject6$3 = _taggedTemplateLiteral(["Jurassic Parka"]))),
  jillcandle: $item(_templateObject7$3 || (_templateObject7$3 = _taggedTemplateLiteral(["LED candle"])))
};
var modeableState = {
  backupcamera: () => kolmafia.getProperty("backupCameraMode"),
  umbrella: () => kolmafia.getProperty("umbrellaState"),
  snowsuit: () => kolmafia.getProperty("snowsuit"),
  edpiece: () => kolmafia.getProperty("edPiece"),
  retrocape: () => kolmafia.getProperty("retroCapeSuperhero") + " " + kolmafia.getProperty("retroCapeWashingInstructions"),
  parka: () => kolmafia.getProperty("parkaMode"),
  jillcandle: () => kolmafia.getProperty("ledCandleMode")
};
/**
 * Get set of current modes for modeables
 *
 * @returns Set of modes
 */
function getCurrentModes$1() {
  var modes = {};
  var _iterator = _createForOfIteratorHelper(modeableCommands$1),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      if (kolmafia.haveEquipped(modeableItems[key])) {
        modes[key] = modeableState[key]();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return modes;
}
/**
 * Apply set of modes
 *
 * @param modes Modes to apply
 */
function applyModes(modes) {
  var _iterator2 = _createForOfIteratorHelper(modeableCommands$1),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var command = _step2.value;
      if (kolmafia.haveEquipped(modeableItems[command]) && modes[command] !== undefined) {
        if (modeableState[command]() !== modes[command]) {
          kolmafia.cliExecute(command + " " + modes[command]);
        }
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
// Subset of slots that are valid for caching.
var cachedSlots = $slots(_templateObject8$3 || (_templateObject8$3 = _taggedTemplateLiteral(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"])));
var CacheEntry = /*#__PURE__*/_createClass(function CacheEntry(equipment, rider, familiar, canEquipItemCount, modes) {
  _classCallCheck(this, CacheEntry);
  _defineProperty(this, "equipment", void 0);
  _defineProperty(this, "rider", void 0);
  _defineProperty(this, "familiar", void 0);
  _defineProperty(this, "canEquipItemCount", void 0);
  _defineProperty(this, "modes", void 0);
  this.equipment = equipment;
  this.rider = rider;
  this.familiar = familiar;
  this.canEquipItemCount = canEquipItemCount;
  this.modes = modes;
});
var _outfitSlots = /*#__PURE__*/new WeakMap();
var _useHistory = /*#__PURE__*/new WeakMap();
var _maxSize = /*#__PURE__*/new WeakMap();
var OutfitLRUCache = /*#__PURE__*/function () {
  function OutfitLRUCache(maxSize) {
    _classCallCheck(this, OutfitLRUCache);
    // Current outfits allocated
    _classPrivateFieldInitSpec(this, _outfitSlots, []);
    // Array of indices into #outfitSlots in order of use. Most recent at the front.
    _classPrivateFieldInitSpec(this, _useHistory, []);
    _classPrivateFieldInitSpec(this, _maxSize, void 0);
    _classPrivateFieldSet2(_maxSize, this, maxSize);
  }
  return _createClass(OutfitLRUCache, [{
    key: "checkConsistent",
    value: function checkConsistent() {
      if (_classPrivateFieldGet2(_useHistory, this).length !== _classPrivateFieldGet2(_outfitSlots, this).length || !_toConsumableArray(_classPrivateFieldGet2(_useHistory, this)).sort().every((value, index) => value === index)) {
        throw new Error("Outfit cache consistency failed.");
      }
    }
  }, {
    key: "promote",
    value: function promote(index) {
      _classPrivateFieldSet2(_useHistory, this, [index].concat(_toConsumableArray(_classPrivateFieldGet2(_useHistory, this).filter(i => i !== index))));
      this.checkConsistent();
    }
  }, {
    key: "get",
    value: function get(key) {
      var index = _classPrivateFieldGet2(_outfitSlots, this).indexOf(key);
      if (index < 0) return undefined;
      this.promote(index);
      return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(index);
    }
  }, {
    key: "insert",
    value: function insert(key) {
      var lastUseIndex = undefined;
      if (_classPrivateFieldGet2(_outfitSlots, this).length >= _classPrivateFieldGet2(_maxSize, this)) {
        lastUseIndex = _classPrivateFieldGet2(_useHistory, this).pop();
        if (lastUseIndex === undefined) {
          throw new Error("Outfit cache consistency failed.");
        }
        _classPrivateFieldGet2(_useHistory, this).splice(0, 0, lastUseIndex);
        _classPrivateFieldGet2(_outfitSlots, this)[lastUseIndex] = key;
        this.checkConsistent();
        return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(lastUseIndex);
      } else {
        var index = _classPrivateFieldGet2(_outfitSlots, this).push(key) - 1;
        _classPrivateFieldGet2(_useHistory, this).splice(0, 0, index);
        this.checkConsistent();
        return "".concat(OutfitLRUCache.OUTFIT_PREFIX, " ").concat(index);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      _classPrivateFieldSet2(_outfitSlots, this, []);
      _classPrivateFieldSet2(_useHistory, this, []);
    }
  }]);
}();
/**
 * Save current equipment as KoL-native outfit.
 *
 * @param name Name of new outfit.
 */
_defineProperty(OutfitLRUCache, "OUTFIT_PREFIX", "Script Outfit");
function saveOutfit(name) {
  kolmafia.cliExecute("outfit save ".concat(name));
}
// Objective cache entries.
var cachedObjectives = {};
// Outfit cache entries. Keep 6 by default to avoid cluttering list.
var outfitCache = new OutfitLRUCache(6);
// Cache to prevent rescanning all items unnecessarily
var cachedStats = [0, 0, 0];
var cachedCanEquipItemCount = 0;
/**
 * Count the number of unique items that can be equipped.
 *
 * @returns The count of unique items.
 */
function canEquipItemCount() {
  var stats = $stats(_templateObject9$3 || (_templateObject9$3 = _taggedTemplateLiteral(["Muscle, Mysticality, Moxie"]))).map(stat => Math.min(kolmafia.myBasestat(stat), 300));
  if (stats.every((value, index) => value === cachedStats[index])) {
    return cachedCanEquipItemCount;
  }
  cachedStats = stats;
  cachedCanEquipItemCount = kolmafia.Item.all().filter(item => kolmafia.canEquip(item)).length;
  return cachedCanEquipItemCount;
}
/**
 * Checks the objective cache for a valid entry.
 *
 * @param cacheKey The cache key to check.
 * @param options Set of maximizer options
 * @returns A valid CacheEntry or null.
 */
function checkCache(cacheKey, options) {
  var entry = cachedObjectives[cacheKey];
  if (!entry) {
    return null;
  }
  if (options.updateOnFamiliarChange && kolmafia.myFamiliar() !== entry.familiar) {
    logger.warning("Equipment found in maximize cache but familiar is different.");
    return null;
  }
  if (options.updateOnCanEquipChanged && entry.canEquipItemCount !== canEquipItemCount()) {
    logger.warning("Equipment found in maximize cache but equippable item list is out of date.");
    return null;
  }
  return entry;
}
/**
 * Applies equipment that was found in the cache.
 *
 * @param entry The CacheEntry to apply
 * @param options Set of maximizer options
 */
function applyCached(entry, options) {
  var outfitName = options.useOutfitCaching ? outfitCache.get(entry) : undefined;
  if (outfitName) {
    if (!kolmafia.isWearingOutfit(outfitName)) {
      kolmafia.outfit(outfitName);
    }
    var familiarEquip = entry.equipment.get($slot(_templateObject0$2 || (_templateObject0$2 = _taggedTemplateLiteral(["familiar"]))));
    if (familiarEquip) kolmafia.equip($slot(_templateObject1$2 || (_templateObject1$2 = _taggedTemplateLiteral(["familiar"]))), familiarEquip);
  } else {
    var _iterator3 = _createForOfIteratorHelper(entry.equipment),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = _slicedToArray(_step3.value, 2),
          slot = _step3$value[0],
          item = _step3$value[1];
        if (kolmafia.equippedItem(slot) !== item && kolmafia.availableAmount(item) > 0) {
          kolmafia.equip(slot, item);
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (verifyCached(entry) && options.useOutfitCaching) {
      var _outfitName = outfitCache.insert(entry);
      logger.info("Saving equipment to outfit ".concat(_outfitName, "."));
      saveOutfit(_outfitName);
    }
  }
  if (kolmafia.equippedAmount($item(_templateObject10$2 || (_templateObject10$2 = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject11$2 || (_templateObject11$2 = _taggedTemplateLiteral(["Crown of Thrones"]))))) {
    kolmafia.enthroneFamiliar(entry.rider.get($item(_templateObject12$2 || (_templateObject12$2 = _taggedTemplateLiteral(["Crown of Thrones"])))) || $familiar.none);
  }
  if (kolmafia.equippedAmount($item(_templateObject13$2 || (_templateObject13$2 = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject14$2 || (_templateObject14$2 = _taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    kolmafia.bjornifyFamiliar(entry.rider.get($item(_templateObject15$2 || (_templateObject15$2 = _taggedTemplateLiteral(["Buddy Bjorn"])))) || $familiar.none);
  }
  applyModes(_objectSpread2(_objectSpread2({}, entry.modes), options.modes));
}
var slotStructure = [$slots(_templateObject16$2 || (_templateObject16$2 = _taggedTemplateLiteral(["hat"]))), $slots(_templateObject17$2 || (_templateObject17$2 = _taggedTemplateLiteral(["back"]))), $slots(_templateObject18$2 || (_templateObject18$2 = _taggedTemplateLiteral(["shirt"]))), $slots(_templateObject19$2 || (_templateObject19$2 = _taggedTemplateLiteral(["weapon, off-hand"]))), $slots(_templateObject20$2 || (_templateObject20$2 = _taggedTemplateLiteral(["pants"]))), $slots(_templateObject21$2 || (_templateObject21$2 = _taggedTemplateLiteral(["acc1, acc2, acc3"]))), $slots(_templateObject22$2 || (_templateObject22$2 = _taggedTemplateLiteral(["familiar"])))];
/**
 * Verifies that a CacheEntry was applied successfully.
 *
 * @param entry The CacheEntry to verify
 * @param warn Whether to warn if the cache could not be applied
 * @returns If all desired equipment was appliedn in the correct slots.
 */
function verifyCached(entry) {
  var warn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var success = true;
  var _iterator4 = _createForOfIteratorHelper(slotStructure),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var slotGroup = _step4.value;
      var desiredSlots = slotGroup.map(slot => [slot, entry.equipment.get(slot) ?? null]).filter(_ref2 => {
        var _ref3 = _slicedToArray(_ref2, 2),
          item = _ref3[1];
        return item !== null;
      });
      var desiredSet = desiredSlots.map(_ref4 => {
        var _ref5 = _slicedToArray(_ref4, 2),
          item = _ref5[1];
        return item;
      });
      var equippedSet = desiredSlots.map(_ref6 => {
        var _ref7 = _slicedToArray(_ref6, 1),
          slot = _ref7[0];
        return kolmafia.equippedItem(slot);
      });
      if (!setEqual(desiredSet, equippedSet)) {
        if (warn) {
          logger.warning("Failed to apply cached ".concat(desiredSet.join(", "), " in ").concat(slotGroup.join(", "), "."));
        }
        success = false;
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  if (kolmafia.equippedAmount($item(_templateObject23$1 || (_templateObject23$1 = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject24$1 || (_templateObject24$1 = _taggedTemplateLiteral(["Crown of Thrones"]))))) {
    if (entry.rider.get($item(_templateObject25$1 || (_templateObject25$1 = _taggedTemplateLiteral(["Crown of Thrones"])))) !== kolmafia.myEnthronedFamiliar()) {
      if (warn) {
        logger.warning("Failed to apply ".concat(entry.rider.get($item(_templateObject26$1 || (_templateObject26$1 = _taggedTemplateLiteral(["Crown of Thrones"])))), " in ").concat($item(_templateObject27$1 || (_templateObject27$1 = _taggedTemplateLiteral(["Crown of Thrones"]))), "."));
      }
      success = false;
    }
  }
  if (kolmafia.equippedAmount($item(_templateObject28$1 || (_templateObject28$1 = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject29$1 || (_templateObject29$1 = _taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    if (entry.rider.get($item(_templateObject30$1 || (_templateObject30$1 = _taggedTemplateLiteral(["Buddy Bjorn"])))) !== kolmafia.myBjornedFamiliar()) {
      if (warn) {
        logger.warning("Failed to apply".concat(entry.rider.get($item(_templateObject31$1 || (_templateObject31$1 = _taggedTemplateLiteral(["Buddy Bjorn"])))), " in ").concat($item(_templateObject32$1 || (_templateObject32$1 = _taggedTemplateLiteral(["Buddy Bjorn"]))), "."));
      }
      success = false;
    }
  }
  return success;
}
/**
 * Save current equipment to the objective cache.
 *
 * @param cacheKey The cache key to save.
 * @param options Set of maximizer options
 */
function saveCached(cacheKey, options) {
  var equipment = new Map();
  var rider = new Map();
  var _iterator5 = _createForOfIteratorHelper(cachedSlots),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var _slot2 = _step5.value;
      equipment.set(_slot2, kolmafia.equippedItem(_slot2));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  if (kolmafia.equippedAmount($item(_templateObject33$1 || (_templateObject33$1 = _taggedTemplateLiteral(["card sleeve"])))) > 0) {
    equipment.set($slot(_templateObject34$1 || (_templateObject34$1 = _taggedTemplateLiteral(["card-sleeve"]))), kolmafia.equippedItem($slot(_templateObject35$1 || (_templateObject35$1 = _taggedTemplateLiteral(["card-sleeve"])))));
  }
  if (kolmafia.equippedAmount($item(_templateObject36$1 || (_templateObject36$1 = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0) {
    rider.set($item(_templateObject37$1 || (_templateObject37$1 = _taggedTemplateLiteral(["Crown of Thrones"]))), kolmafia.myEnthronedFamiliar());
  }
  if (kolmafia.equippedAmount($item(_templateObject38$1 || (_templateObject38$1 = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0) {
    rider.set($item(_templateObject39$1 || (_templateObject39$1 = _taggedTemplateLiteral(["Buddy Bjorn"]))), kolmafia.myBjornedFamiliar());
  }
  if (options.preventSlot && options.preventSlot.length > 0) {
    var _iterator6 = _createForOfIteratorHelper(options.preventSlot),
      _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var slot = _step6.value;
        equipment.delete(slot);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    if (options.preventSlot.includes($slot(_templateObject40$1 || (_templateObject40$1 = _taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete($item(_templateObject41$1 || (_templateObject41$1 = _taggedTemplateLiteral(["Buddy Bjorn"]))));
    }
    if (options.preventSlot.includes($slot(_templateObject42$1 || (_templateObject42$1 = _taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete($item(_templateObject43$1 || (_templateObject43$1 = _taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }
  if (options.onlySlot && options.onlySlot.length > 0) {
    var _iterator7 = _createForOfIteratorHelper(kolmafia.Slot.all()),
      _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _slot = _step7.value;
        if (!options.onlySlot.includes(_slot)) {
          equipment.delete(_slot);
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    if (!options.onlySlot.includes($slot(_templateObject44$1 || (_templateObject44$1 = _taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete($item(_templateObject45$1 || (_templateObject45$1 = _taggedTemplateLiteral(["Buddy Bjorn"]))));
    }
    if (!options.onlySlot.includes($slot(_templateObject46$1 || (_templateObject46$1 = _taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete($item(_templateObject47$1 || (_templateObject47$1 = _taggedTemplateLiteral(["Crown of Thrones"]))));
    }
  }
  var entry = new CacheEntry(equipment, rider, kolmafia.myFamiliar(), canEquipItemCount(), _objectSpread2(_objectSpread2({}, getCurrentModes$1()), options.modes));
  cachedObjectives[cacheKey] = entry;
  if (options.useOutfitCaching) {
    var outfitName = outfitCache.insert(entry);
    logger.info("Saving equipment to outfit ".concat(outfitName, "."));
    saveOutfit(outfitName);
  }
}
/**
 * Run the maximizer, but only if the objective and certain pieces of game state haven't changed since it was last run.
 *
 * @param objectives Objectives to maximize for.
 * @param options Options for this run of the maximizer.
 * @param options.updateOnFamiliarChange Re-run the maximizer if familiar has changed. Default true.
 * @param options.updateOnCanEquipChanged Re-run the maximizer if stats have changed what can be equipped. Default true.
 * @param options.forceEquip Equipment to force-equip ("equip X").
 * @param options.preventEquip Equipment to prevent equipping ("-equip X").
 * @param options.bonusEquip Equipment to apply a bonus to ("200 bonus X").
 * @returns Whether the maximize call succeeded.
 */
function maximizeCached(objectives) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fullOptions = mergeMaximizeOptions(defaultMaximizeOptions, options);
  var forceEquip = fullOptions.forceEquip,
    preventEquip = fullOptions.preventEquip,
    bonusEquip = fullOptions.bonusEquip,
    onlySlot = fullOptions.onlySlot,
    preventSlot = fullOptions.preventSlot,
    forceUpdate = fullOptions.forceUpdate;
  // Sort each group in objective to ensure consistent ordering in string
  var objective = _toConsumableArray(new Set([].concat(_toConsumableArray(objectives.sort()), _toConsumableArray(forceEquip.map(item => "\"equip ".concat(toMaximizerName(item), "\"")).sort()), _toConsumableArray(preventEquip.map(item => "-\"equip ".concat(toMaximizerName(item), "\"")).sort()), _toConsumableArray(onlySlot.map(slot => "".concat(slot)).sort()), _toConsumableArray(preventSlot.map(slot => "-".concat(slot)).sort()), _toConsumableArray(Array.from(bonusEquip.entries()).filter(_ref8 => {
    var _ref9 = _slicedToArray(_ref8, 2),
      bonus = _ref9[1];
    return bonus !== 0;
  }).map(_ref0 => {
    var _ref1 = _slicedToArray(_ref0, 2),
      item = _ref1[0],
      bonus = _ref1[1];
    return "".concat(Math.round(bonus * 100) / 100, " \"bonus ").concat(toMaximizerName(item), "\"");
  }).sort())))).join(", ");
  // Items equipped in slots not touched by the maximizer must be in the cache key
  var untouchedSlots = cachedSlots.filter(slot => preventSlot.includes(slot) || onlySlot.length > 0 && !onlySlot.includes(slot));
  var cacheKey = [objective].concat(_toConsumableArray(untouchedSlots.map(slot => "".concat(slot, ":").concat(kolmafia.equippedItem(slot))).sort()), [have$1($effect(_templateObject48$1 || (_templateObject48$1 = _taggedTemplateLiteral(["Offhand Remarkable"])))), options.updateOnLocationChange && kolmafia.myLocation()]).join("; ");
  var cacheEntry = checkCache(cacheKey, fullOptions);
  if (cacheEntry && !forceUpdate) {
    if (verifyCached(cacheEntry, false)) return true;
    logger.info("Equipment found in maximize cache, equipping...");
    applyCached(cacheEntry, fullOptions);
    if (verifyCached(cacheEntry)) {
      logger.info("Equipped cached ".concat(cacheKey));
      return true;
    }
    logger.warning("Maximize cache application failed, maximizing...");
  }
  var result = kolmafia.maximize(objective, false);
  saveCached(cacheKey, fullOptions);
  return result;
}
function mergeOptionalOptions(optionsA, optionsB) {
  for (var _len = arguments.length, keys = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    keys[_key - 2] = arguments[_key];
  }
  return keys.reduce((current, key) => _objectSpread2(_objectSpread2({}, current), (optionsA[key] || optionsB[key]) === undefined ? {} : {
    [key]: optionsA[key] || optionsB[key]
  }), {});
}
var _maximizeParameters = /*#__PURE__*/new WeakMap();
var _maximizeOptions = /*#__PURE__*/new WeakMap();
var Requirement = /*#__PURE__*/function () {
  /**
   * A convenient way of combining maximization parameters and options
   *
   * @param maximizeParameters Parameters you're attempting to maximize
   * @param maximizeOptions Object potentially containing forceEquips, bonusEquips, preventEquips, and preventSlots
   */
  function Requirement(maximizeParameters, maximizeOptions) {
    _classCallCheck(this, Requirement);
    _classPrivateFieldInitSpec(this, _maximizeParameters, void 0);
    _classPrivateFieldInitSpec(this, _maximizeOptions, void 0);
    _classPrivateFieldSet2(_maximizeParameters, this, maximizeParameters);
    _classPrivateFieldSet2(_maximizeOptions, this, maximizeOptions);
  }
  return _createClass(Requirement, [{
    key: "maximizeParameters",
    get: function get() {
      return _classPrivateFieldGet2(_maximizeParameters, this);
    }
  }, {
    key: "maximizeOptions",
    get: function get() {
      return _classPrivateFieldGet2(_maximizeOptions, this);
    }
    /**
     * Merges two requirements, concanating relevant arrays. Typically used in static form.
     *
     * @param other Requirement to merge with.
     * @returns A new merged Requirement
     */
  }, {
    key: "merge",
    value: function merge(other) {
      var _optionsA$bonusEquip, _optionsB$bonusEquip;
      var optionsA = this.maximizeOptions;
      var optionsB = other.maximizeOptions;
      var optionalBooleans = mergeOptionalOptions(optionsA, optionsB, "updateOnFamiliarChange", "updateOnCanEquipChanged", "updateOnLocationChange", "forceUpdate");
      return new Requirement([].concat(_toConsumableArray(this.maximizeParameters), _toConsumableArray(other.maximizeParameters)), _objectSpread2(_objectSpread2({}, optionalBooleans), {}, {
        forceEquip: [].concat(_toConsumableArray(optionsA.forceEquip ?? []), _toConsumableArray(other.maximizeOptions.forceEquip ?? [])).filter(x => {
          var _other$maximizeOption;
          return !((_other$maximizeOption = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption !== void 0 && _other$maximizeOption.includes(x));
        }),
        preventEquip: [].concat(_toConsumableArray(optionsA.preventEquip ?? []), _toConsumableArray(other.maximizeOptions.preventEquip ?? [])).filter(x => {
          var _other$maximizeOption2;
          return !((_other$maximizeOption2 = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption2 !== void 0 && _other$maximizeOption2.includes(x));
        }),
        bonusEquip: new Map([].concat(_toConsumableArray(((_optionsA$bonusEquip = optionsA.bonusEquip) === null || _optionsA$bonusEquip === void 0 ? void 0 : _optionsA$bonusEquip.entries()) ?? []), _toConsumableArray(((_optionsB$bonusEquip = optionsB.bonusEquip) === null || _optionsB$bonusEquip === void 0 ? void 0 : _optionsB$bonusEquip.entries()) ?? []))),
        onlySlot: [].concat(_toConsumableArray(optionsA.onlySlot ?? []), _toConsumableArray(optionsB.onlySlot ?? [])),
        preventSlot: [].concat(_toConsumableArray(optionsA.preventSlot ?? []), _toConsumableArray(optionsB.preventSlot ?? []))
      }));
    }
    /**
     * Merges a set of requirements together, starting with an empty requirement.
     *
     * @param allRequirements Requirements to merge
     * @returns Merged requirements
     */
  }, {
    key: "maximize",
    value:
    /**
     * Runs maximizeCached, using the maximizeParameters and maximizeOptions contained by this requirement.
     *
     * @returns Whether the maximize call succeeded.
     */
    function maximize() {
      return maximizeCached(this.maximizeParameters, this.maximizeOptions);
    }
    /**
     * Merges requirements, and then runs maximizeCached on the combined requirement.
     *
     * @param requirements Requirements to maximize on
     */
  }], [{
    key: "merge",
    value: function merge(allRequirements) {
      return allRequirements.reduce((x, y) => x.merge(y), new Requirement([], {}));
    }
  }, {
    key: "maximize",
    value: function maximize() {
      for (var _len2 = arguments.length, requirements = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        requirements[_key2] = arguments[_key2];
      }
      Requirement.merge(requirements).maximize();
    }
  }]);
}();

var MoonSigns = ["Mongoose", "Wallaby", "Vole", "Platypus", "Opossum", "Marmot", "Wombat", "Blender", "Packrat"];
/**
 * @param moon Moon sign name
 * @returns Moon sign id else 0
 */
function signNameToId(moon) {
  return MoonSigns.indexOf(moon) + 1;
}

/**
 * @returns Whether we own the Chateau Mantegna
 */
function have() {
  return get("chateauAvailable");
}
var desks = ["fancy stationery set", "Swiss piggy bank", "continental juice bar"];
var ceilings = ["antler chandelier", "ceiling fan", "artificial skylight"];
var nightstands = ["foreign language tapes", "bowl of potpourri", "electric muscle stimulator"];
/**
 * @returns The currently installed desk in your chateau; `null` for none
 */
function getDesk() {
  return desks.find(desk => Object.keys(kolmafia.getChateau()).includes(desk)) ?? null;
}
/**
 * @returns The currently installed ceiling in your chateau; `null` for none
 */
function getCeiling() {
  return ceilings.find(ceiling => Object.keys(kolmafia.getChateau()).includes(ceiling)) ?? null;
}
/**
 * @returns The currently installed nightstand in your chateau; `null` for none
 */
function getNightstand() {
  return nightstands.find(nightstand => Object.keys(kolmafia.getChateau()).includes(nightstand)) ?? null;
}
/**
 * @param desk The desk to change to
 * @returns Whether our desk currently matches the one requested
 */
function changeDesk(desk) {
  if (getDesk() === desk) return true;
  if (!desks.includes(desk)) return false;
  kolmafia.buy(kolmafia.Item.get(desk));
  return getDesk() === desk;
}
/**
 * @param ceiling The ceiling to change to
 * @returns Whether our ceiling currently matches the one requested
 */
function changeCeiling(ceiling) {
  if (getCeiling() === ceiling) return true;
  if (!ceilings.includes(ceiling)) return false;
  kolmafia.buy(kolmafia.Item.get(ceiling));
  return getCeiling() === ceiling;
}
/**
 * @param nightstand The nightstand to change to
 * @returns Whether our nightstand currently matches the one requested
 */
function changeNightstand(nightstand) {
  if (getNightstand() === nightstand) return true;
  if (!nightstands.includes(nightstand)) return false;
  kolmafia.buy(kolmafia.Item.get(nightstand));
  return getNightstand() === nightstand;
}

var _templateObject$5;
$item(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["combat lover's locket"])));
/**
 * Parses getLocketMonsters and returns the collection of all Monsters as an Array.
 *
 * @returns An array consisting of all Monsters you can hypothetically fight, regardless of whether they've been fought today.
 */
function unlockedLocketMonsters() {
  return Object.entries(kolmafia.getLocketMonsters()).map(_ref5 => {
    var _ref6 = _slicedToArray(_ref5, 1),
      name = _ref6[0];
    return kolmafia.toMonster(name);
  });
}

var _templateObject$4, _templateObject2$3, _templateObject3$3, _templateObject4$3, _templateObject5$2, _templateObject6$2, _templateObject7$2, _templateObject8$2, _templateObject9$2;
var Lifestyle;
(function (Lifestyle) {
  Lifestyle[Lifestyle["casual"] = 1] = "casual";
  Lifestyle[Lifestyle["softcore"] = 2] = "softcore";
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  Lifestyle[Lifestyle["normal"] = 2] = "normal";
  Lifestyle[Lifestyle["hardcore"] = 3] = "hardcore";
})(Lifestyle || (Lifestyle = {}));
var KolGender;
(function (KolGender) {
  KolGender[KolGender["male"] = 1] = "male";
  KolGender[KolGender["female"] = 2] = "female";
})(KolGender || (KolGender = {}));
/**
 * Get a mapping of permed skills to the extent to which they're permed.
 *
 * If a skill is not permed at all, it will not appear in the mapping.
 *
 * @returns Permed skills mapping
 */
function permedSkills() {
  return new Map(Array.from(Object.entries(kolmafia.getPermedSkills())).map(_ref => {
    var _ref2 = _slicedToArray(_ref, 2),
      skillName = _ref2[0],
      isHardcore = _ref2[1];
    return [kolmafia.toSkill(skillName), isHardcore ? Lifestyle.hardcore : Lifestyle.softcore];
  }));
}
var AscendError = /*#__PURE__*/function (_Error) {
  function AscendError() {
    _classCallCheck(this, AscendError);
    return _callSuper(this, AscendError, arguments);
  }
  _inherits(AscendError, _Error);
  return _createClass(AscendError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
var gardens = ["packet of pumpkin seeds", "Peppermint Pip Packet", "packet of dragon's teeth", "packet of beer seeds", "packet of winter seeds", "packet of thanksgarden seeds", "packet of tall grass seeds", "packet of mushroom spores", "packet of rock seeds"];
var eudorae = ["My Own Pen Pal kit", "GameInformPowerDailyPro subscription card", "Xi Receiver Unit", "New-You Club Membership Form", "Our Daily Candles™ order form", "Black and White Apron Enrollment Form"];
var isGarden = x => arrayContains(x, gardens);
var isEudora = x => arrayContains(x, eudorae);
var isDesk = x => arrayContains(x, desks);
var isNightstand = x => arrayContains(x, nightstands);
var isCeiling = x => arrayContains(x, ceilings);
var AscensionPrepError = /*#__PURE__*/function (_Error2) {
  function AscensionPrepError(cause, original) {
    var _this;
    _classCallCheck(this, AscensionPrepError);
    if (isGarden(cause)) {
      _this = _callSuper(this, AscensionPrepError, ["Unable to swap garden to ".concat(cause, "; garden is currently ").concat(original, ".")]);
      _defineProperty(_assertThisInitialized(_this), "cause", void 0);
    } else if (isEudora(cause)) {
      _this = _callSuper(this, AscensionPrepError, ["Unable to swap eudora to ".concat(cause, "; eudora is currently ").concat(original, ".")]);
      _defineProperty(_assertThisInitialized(_this), "cause", void 0);
    } else if (isDesk(cause)) {
      _this = _callSuper(this, AscensionPrepError, ["Unable to swap chateau desk to ".concat(cause, "; desk is currently ").concat(original, ".")]);
      _defineProperty(_assertThisInitialized(_this), "cause", void 0);
    } else if (isNightstand(cause)) {
      _this = _callSuper(this, AscensionPrepError, ["Unable to swap chateau nightstand to ".concat(cause, "; nightstand is currently ").concat(original, ".")]);
      _defineProperty(_assertThisInitialized(_this), "cause", void 0);
    } else if (isCeiling(cause)) {
      _this = _callSuper(this, AscensionPrepError, ["Unable to swap chateau ceiling to ".concat(cause, "; ceiling is currently ").concat(original, ".")]);
      _defineProperty(_assertThisInitialized(_this), "cause", void 0);
    } else {
      _this = _callSuper(this, AscensionPrepError, [cause]);
      _defineProperty(_assertThisInitialized(_this), "cause", void 0);
    }
    _this.cause = cause;
    return _assertThisInitialized(_this);
  }
  _inherits(AscensionPrepError, _Error2);
  return _createClass(AscensionPrepError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
/**
 * Determine the id of the appropriate moon sign.
 *
 * @param moon Either a moon sign or the desired unlocked zone name
 * @param playerClass Class, required for working out a moon sign based on the desired zone
 * @returns Moon sign id
 */
function inputToMoonId(moon, playerClass) {
  if (typeof moon === "number") return moon;
  var offset = () => {
    switch (playerClass.primestat) {
      case $stat(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["Muscle"]))):
        return 0;
      case $stat(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["Mysticality"]))):
        return 1;
      case $stat(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteral(["Moxie"]))):
        return 2;
      default:
        throw new AscendError("unknown prime stat for ".concat(playerClass));
    }
  };
  var fromNormalInput = signNameToId(tc(moon));
  if (fromNormalInput > 0) return fromNormalInput;
  switch (moon.toLowerCase()) {
    case "degrassi":
    case "degrassi knoll":
    case "friendly degrassi knoll":
    case "knoll":
      return 1 + offset();
    case "canada":
    case "canadia":
    case "little canadia":
      return 4 + offset();
    case "gnomads":
    case "gnomish":
    case "gnomish gnomads camp":
      return 7 + offset();
    default:
      throw new AscendError("Invalid moon sign!");
  }
}
/**
 * Determine if player is currently in Valhalla
 *
 * @returns Whether player is in Valhalla
 */
function isInValhalla() {
  var charPaneText = kolmafia.visitUrl("charpane.php");
  // Match the infinity images (inf_small.gif, inf_large.gif)
  // At time of writing, the full img tag used is:
  // <img src="https://d2uyhvukfffg5a.cloudfront.net/otherimages/inf_small.gif">
  var matches = charPaneText.match(/<img src="[^"]*\/otherimages\/inf_\w+\.gif">/);
  return matches !== null;
}
/**
 * Hops the gash, perming no skills by default
 *
 * @param options Configuration for the ascension
 * @param options.path Your path of choice for this ascension
 * @param options.playerClass Your class of choice for this ascension
 * @param options.lifestyle 1 for casual, 2 for softcore, 3 for hardcore. Alternately, use the Lifestyle enum
 * @param options.kolGender An entry from the KolGender enum: 1 for male, 2 for female (sorry that it's limited to those). Defaults to 2 or the corresponding value for defaultGenderOverride pref (which should be 'male' or 'female')
 * @param options.moon Your moon sign as a string, or the zone you're looking for as a string
 * @param options.consumable From the astral deli. Pick the container item, not the product. Defaults to astral six-pack, provide $item`none` for nothing.
 * @param options.pet From the astral pet store.
 * @param options.permOptions Options for perming during a player's stay in Valhalla
 * @param options.permOptions.permSkills A Map<Skill, Lifestyle> of skills you'd like to perm, ordered by priority.
 * @param options.permOptions.neverAbort Whether the ascension should abort on failure
 */
function ascend(options) {
  var DEFAULT_OPTIONS = {
    kolGender: get("defaultGenderOverride", "female") === "male" ? KolGender.male : KolGender.female,
    consumable: $item(_templateObject4$3 || (_templateObject4$3 = _taggedTemplateLiteral(["astral six-pack"]))),
    pet: $item(_templateObject5$2 || (_templateObject5$2 = _taggedTemplateLiteral(["none"])))
  };
  var prunedOptions = Object.fromEntries(Object.entries(options).filter(_ref3 => {
    var _ref4 = _slicedToArray(_ref3, 2),
      value = _ref4[1];
    return value;
  }));
  var _DEFAULT_OPTIONS$prun = _objectSpread2(_objectSpread2({}, DEFAULT_OPTIONS), prunedOptions),
    path = _DEFAULT_OPTIONS$prun.path,
    playerClass = _DEFAULT_OPTIONS$prun.playerClass,
    lifestyle = _DEFAULT_OPTIONS$prun.lifestyle,
    kolGender = _DEFAULT_OPTIONS$prun.kolGender,
    moon = _DEFAULT_OPTIONS$prun.moon,
    consumable = _DEFAULT_OPTIONS$prun.consumable,
    pet = _DEFAULT_OPTIONS$prun.pet,
    permOptions = _DEFAULT_OPTIONS$prun.permOptions;
  if (playerClass.path !== (path.avatar ? path : kolmafia.Path.none)) {
    throw new AscendError("Invalid class ".concat(playerClass, " for this path!"));
  }
  if (path.id < 0) throw new AscendError("Invalid path: ".concat(path, "!"));
  var moonId = inputToMoonId(moon, playerClass);
  if (moonId < 1 || moonId > 9) throw new Error("Invalid moon ".concat(moon));
  if (!$items(_templateObject6$2 || (_templateObject6$2 = _taggedTemplateLiteral(["none, astral six-pack, astral hot dog dinner, [10882]carton of astral energy drinks"]))).includes(consumable)) {
    throw new AscendError("Invalid astral consumable: ".concat(consumable));
  }
  if (!$items(_templateObject7$2 || (_templateObject7$2 = _taggedTemplateLiteral(["none, astral bludgeon, astral shield, astral chapeau, astral bracer, astral longbow, astral shorts, astral mace, astral trousers, astral ring, astral statuette, astral pistol, astral mask, astral pet sweater, astral shirt, astral belt"]))).includes(pet)) {
    throw new AscendError("Invalid astral pet: ".concat(pet));
  }
  var unownedSkills = _toConsumableArray((permOptions === null || permOptions === void 0 ? void 0 : permOptions.permSkills.keys()) ?? []).filter(skill => !kolmafia.haveSkill(skill));
  if (unownedSkills.length) {
    throw new AscendError("You're trying to perm the following skills, but don't actually have them: ".concat(unownedSkills.join(", ")));
  }
  var unpermableSkills = _toConsumableArray((permOptions === null || permOptions === void 0 ? void 0 : permOptions.permSkills.keys()) ?? []).filter(skill => !skill.permable);
  if (unpermableSkills.length) {
    throw new AscendError("You're trying to perm the following skills, but they're unpermable: ".concat(unownedSkills.join(", ")));
  }
  if (!isInValhalla()) {
    kolmafia.visitUrl("ascend.php?action=ascend&confirm=on&confirm2=on");
  }
  if (!isInValhalla()) {
    throw new AscendError("Failed to ascend--do you have a pending trade offer?");
  }
  kolmafia.visitUrl("afterlife.php?action=pearlygates");
  if (consumable !== $item(_templateObject8$2 || (_templateObject8$2 = _taggedTemplateLiteral(["none"])))) {
    kolmafia.visitUrl("afterlife.php?action=buydeli&whichitem=".concat(consumable.id));
  }
  if (pet !== $item(_templateObject9$2 || (_templateObject9$2 = _taggedTemplateLiteral(["none"])))) {
    kolmafia.visitUrl("afterlife.php?action=buyarmory&whichitem=".concat(pet.id));
  }
  if (permOptions) {
    var currentPerms = permedSkills();
    var karma = get("bankedKarma");
    var _iterator = _createForOfIteratorHelper(permOptions.permSkills.entries()),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
          skill = _step$value[0],
          prospectivePermLevel = _step$value[1];
        var currentPermLevel = currentPerms.get(skill) ?? Lifestyle.casual;
        if (prospectivePermLevel > currentPermLevel) {
          var expectedKarma = 100 * (prospectivePermLevel - currentPermLevel);
          if (karma < expectedKarma) {
            if (!permOptions.neverAbort) throw new AscendError("Skill ".concat(skill, " is too karmaically expensive!"));
            continue;
          }
          karma -= expectedKarma;
          var permText = prospectivePermLevel === Lifestyle.hardcore ? "hcperm" : "scperm";
          kolmafia.visitUrl("afterlife.php?action=".concat(permText, "&whichskill=").concat(skill.id));
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  kolmafia.visitUrl("afterlife.php?action=ascend&confirmascend=1&whichsign=".concat(moonId, "&gender=").concat(kolGender, "&whichclass=").concat(playerClass.id, "&whichpath=").concat(path.id, "&asctype=").concat(lifestyle, "&nopetok=1&noskillsok=1&lamepathok=1&lamesignok=1&pwd"), true);
}
/**
 * Sets up various iotms you may want to use in the coming ascension
 *
 * @param ascensionPrep Configuration for various ascension prep settings. Any ommitted key will be kept as-is
 * @param ascensionPrep.garden Garden to which to switch
 * @param ascensionPrep.eudora Eudora to which to switch
 * @param ascensionPrep.chateau Chateau configuration
 * @param ascensionPrep.chateau.desk Chateau desk configuration
 * @param ascensionPrep.chateau.ceiling Chateau ceiling configuration
 * @param ascensionPrep.chateau.nightstand Chateau nightstand configuration
 * @param ascensionPrep.throwOnFail If true, this will throw an error when it fails to switch something
 */
function prepareAscension() {
  var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    garden = _ref5.garden,
    eudora = _ref5.eudora,
    chateau = _ref5.chateau,
    throwOnFail = _ref5.throwOnFail;
  throwOnFail = throwOnFail ?? true;
  if (garden && !Object.getOwnPropertyNames(kolmafia.getCampground()).includes(garden)) {
    kolmafia.use(kolmafia.Item.get(garden));
    var gardenName = Object.getOwnPropertyNames(kolmafia.getCampground()).find(isGarden);
    if (gardenName !== garden && throwOnFail) {
      throw new AscensionPrepError(garden, gardenName);
    }
  }
  if (eudora && kolmafia.eudoraItem().name !== eudora) {
    var eudoraNumber = 1 + eudorae.indexOf(eudora);
    if (!kolmafia.xpath(kolmafia.visitUrl("account.php?tab=correspondence"), "//select[@name=\"whichpenpal\"]/option/@value").includes(eudoraNumber.toString()) && throwOnFail) {
      throw new AscensionPrepError("Unable to swap eudora to ".concat(eudora, " because you are not subscribed to it."));
    } else {
      kolmafia.visitUrl("account.php?actions[]=whichpenpal&whichpenpal=".concat(eudoraNumber, "&action=Update"), true);
    }
    if (kolmafia.eudoraItem() !== kolmafia.Item.get(eudora) && throwOnFail) {
      throw new AscensionPrepError(eudora, kolmafia.eudoraItem());
    }
  }
  if (chateau && have()) {
    var desk = chateau.desk,
      ceiling = chateau.ceiling,
      nightstand = chateau.nightstand;
    if (ceiling && getCeiling() !== ceiling) {
      if (!changeCeiling(ceiling) && throwOnFail) {
        throw new AscensionPrepError(ceiling, getCeiling() ?? "unknown");
      }
    }
    if (desk && getDesk() !== desk) {
      if (!changeDesk(desk) && throwOnFail) {
        throw new AscensionPrepError(desk, getDesk() ?? "unknown");
      }
    }
    if (nightstand && getNightstand() !== nightstand) {
      if (!changeNightstand(nightstand) && throwOnFail) {
        throw new AscensionPrepError(nightstand, getNightstand() ?? "unknown");
      }
    }
  }
}

var _templateObject$3, _templateObject2$2, _templateObject3$2, _templateObject4$2;
var lowercaseName = kolmafia.myName().toLowerCase();
var safariTargets = ["Kenny Kamakazi", "Busta_Rhymes", "Manendra", "Gausie", "Beldur", "worthawholebean", "ReverKiller", "Asmodais", "The Dictator", "Malibu Stacey", "DanceCommander6", "Captain Scotch", "threebullethamburgler", "BurningBman", "Katarn", "MrFizzyBubbs", "Purple Shrimp", "Butts McGruff", "Haxxi"].filter(n => n.toLowerCase() !== lowercaseName);
function burnSafaris() {
  for (var i = safariTargets.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = safariTargets[i];
    safariTargets[i] = safariTargets[j];
    safariTargets[j] = temp;
  }
  while ($skill(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["Experience Safari"]))).timescast < get("skillLevel180") && safariTargets.length) {
    kolmafia.useSkill($skill(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["Experience Safari"]))), 1, safariTargets[0]);
    safariTargets.shift();
  }
}
function getSkillsToPerm() {
  kolmafia.visitUrl("charsheet.php"); // refresh knowledge of skills
  var perms = kolmafia.getPermedSkills();
  return new Map(kolmafia.Skill.all().filter(s => have$1(s) && !perms[s.name] && s.permable).map(s => [s, Lifestyle.hardcore]));
}
function smokeEmIfYouGotEm() {
  var fullText = kolmafia.visitUrl("https://www.gutenberg.org/cache/epub/1321/pg1321.txt");
  var lines = fullText.split("\n").map(line => line.trim()).filter(Boolean);
  var poemLines = lines.slice(lines.indexOf("*** START OF THE PROJECT GUTENBERG EBOOK THE WASTE LAND ***"), lines.indexOf("*** END OF THE PROJECT GUTENBERG EBOOK THE WASTE LAND ***"));
  var poemLine = (get("phccs_wasteLand", Number(kolmafia.myId())) + 1) % poemLines.length;
  _set("phccs_wasteLand", poemLine);
  var MESSAGE = poemLines[poemLine] || "yeeeowch!";
  kolmafia.retrieveItem($item(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["campfire smoke"]))));
  withChoice(1394, "1&message=".concat(kolmafia.urlEncode(MESSAGE)), () => kolmafia.use($item(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteral(["campfire smoke"])))));
}

var Args = /*#__PURE__*/function () {
  function Args() {
    _classCallCheck(this, Args);
  }
  return _createClass(Args, null, [{
    key: "custom",
    value: function custom(spec, _parser, valueHelpName) {
      var _a, _b;
      var raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(option => option[0]);
      // Check that the default value actually appears in the options.
      if ("default" in spec && raw_options) {
        if (!raw_options.includes(spec.default)) {
          throw "Invalid default value ".concat(spec.default);
        }
      }
      return _objectSpread2(_objectSpread2({}, spec), {}, {
        valueHelpName: valueHelpName,
        parser: value => {
          var parsed_value = _parser(value);
          if (parsed_value === undefined || parsed_value instanceof ParseError) return parsed_value;
          if (raw_options) {
            if (!raw_options.includes(parsed_value)) {
              return new ParseError("received ".concat(value, " which was not in the allowed options"));
            }
          }
          return parsed_value;
        },
        options: (_b = spec.options) === null || _b === void 0 ? void 0 : _b.map(a => ["".concat(a[0]), a[1]])
      });
    }
  }, {
    key: "arrayFromArg",
    value: function arrayFromArg(spec, argFromSpec) {
      var _a, _b, _c;
      // First, construct a non-array version of this argument.
      // We do this by calling argFromSpec in order to extract the parser and
      // valueHelpName (to make it easier to define the functions below).
      //
      // The default argument of an ArraySpec is of type T[], which causes
      // problems, so we must remove it.
      var spec_without_default = _objectSpread2({}, spec); // Avoid "the operand of a 'delete' operator must be optional"
      if ("default" in spec_without_default) delete spec_without_default["default"];
      var arg = argFromSpec.call(this, spec_without_default);
      // Next, check that all default values actually appear in the options.
      var raw_options = (_a = spec.options) === null || _a === void 0 ? void 0 : _a.map(option => option[0]);
      if ("default" in spec && raw_options) {
        var _iterator = _createForOfIteratorHelper(spec.default),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var default_entry = _step.value;
            if (!raw_options.includes(default_entry)) throw "Invalid default value ".concat(spec.default);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      var separator = (_b = spec.separator) !== null && _b !== void 0 ? _b : ",";
      var arrayParser = value => {
        // Split the array
        var values = value.split(separator);
        if (!spec.noTrim) values = values.map(v => v.trim());
        // Parse all values, return the first error found if any
        var result = values.map(v => arg.parser(v));
        var error = result.find(v => v instanceof ParseError);
        if (error) return error;
        var failure_index = result.indexOf(undefined);
        if (failure_index !== -1) return new ParseError("components expected ".concat(arg.valueHelpName, " but could not parse ").concat(values[failure_index]));
        // Otherwise, all values are good
        return result;
      };
      return _objectSpread2(_objectSpread2({}, spec), {}, {
        valueHelpName: "".concat(arg.valueHelpName).concat(separator, " ").concat(arg.valueHelpName).concat(separator, " ..."),
        parser: arrayParser,
        options: (_c = spec.options) === null || _c === void 0 ? void 0 : _c.map(a => ["".concat(a[0]), a[1]])
      });
    }
  }, {
    key: "string",
    value: function string(spec) {
      return this.custom(spec, value => value, "TEXT");
    }
  }, {
    key: "strings",
    value: function strings(spec) {
      return this.arrayFromArg(spec, this.string);
    }
  }, {
    key: "number",
    value: function number(spec) {
      return this.custom(spec, value => isNaN(Number(value)) ? undefined : Number(value), "NUMBER");
    }
  }, {
    key: "numbers",
    value: function numbers(spec) {
      return this.arrayFromArg(spec, this.number);
    }
  }, {
    key: "boolean",
    value: function boolean(spec) {
      return this.custom(spec, value => {
        if (value.toLowerCase() === "true") return true;
        if (value.toLowerCase() === "false") return false;
        return undefined;
      }, "BOOLEAN");
    }
  }, {
    key: "booleans",
    value: function booleans(spec) {
      return this.arrayFromArg(spec, this.boolean);
    }
  }, {
    key: "flag",
    value: function flag(spec) {
      return this.custom(spec, value => {
        if (value.toLowerCase() === "true") return true;
        if (value.toLowerCase() === "false") return false;
        return undefined;
      }, "FLAG");
    }
  }, {
    key: "class",
    value: function _class(spec) {
      return this.custom(spec, value => {
        var match = kolmafia.Class.get(value);
        // Class.get does fuzzy matching:
        //  e.g. Class.get("sc") returns disco bandit.
        // To avoid this foot-gun, only return exact matches or id lookups.
        if (match.toString().toUpperCase() === value.toString().toUpperCase()) return match;
        if (!isNaN(Number(value))) return match;
        return undefined;
      }, "CLASS");
    }
  }, {
    key: "classes",
    value: function classes(spec) {
      return this.arrayFromArg(spec, this.class);
    }
  }, {
    key: "effect",
    value: function effect(spec) {
      return this.custom(spec, kolmafia.Effect.get, "EFFECT");
    }
  }, {
    key: "effects",
    value: function effects(spec) {
      return this.arrayFromArg(spec, this.effect);
    }
  }, {
    key: "familiar",
    value: function familiar(spec) {
      return this.custom(spec, kolmafia.Familiar.get, "FAMILIAR");
    }
  }, {
    key: "familiars",
    value: function familiars(spec) {
      return this.arrayFromArg(spec, this.familiar);
    }
  }, {
    key: "item",
    value: function item(spec) {
      return this.custom(spec, kolmafia.Item.get, "ITEM");
    }
  }, {
    key: "items",
    value: function items(spec) {
      return this.arrayFromArg(spec, this.item);
    }
  }, {
    key: "location",
    value: function location(spec) {
      return this.custom(spec, kolmafia.Location.get, "LOCATION");
    }
  }, {
    key: "locations",
    value: function locations(spec) {
      return this.arrayFromArg(spec, this.location);
    }
  }, {
    key: "monster",
    value: function monster(spec) {
      return this.custom(spec, kolmafia.Monster.get, "MONSTER");
    }
  }, {
    key: "monsters",
    value: function monsters(spec) {
      return this.arrayFromArg(spec, this.monster);
    }
  }, {
    key: "path",
    value: function path(spec) {
      return this.custom(spec, kolmafia.Path.get, "PATH");
    }
  }, {
    key: "paths",
    value: function paths(spec) {
      return this.arrayFromArg(spec, this.path);
    }
  }, {
    key: "skill",
    value: function skill(spec) {
      return this.custom(spec, kolmafia.Skill.get, "SKILL");
    }
  }, {
    key: "skills",
    value: function skills(spec) {
      return this.arrayFromArg(spec, this.skill);
    }
    /**
     * Create a group of arguments that will be printed separately in the help.
     *
     * Note that keys in the group must still be globally distinct.
     *
     * @param groupName The display name for the group in help.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     */
  }, {
    key: "group",
    value: function group(groupName, args) {
      return {
        name: groupName,
        args: args
      };
    }
    /**
     * Create a set of input arguments for a script.
     * @param scriptName Prefix for property names; often the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @param options Config options for the args and arg parser.
     * @returns An object which can hold parsed argument values. The keys of this
     *    object are identical to the keys in 'args'.
     */
  }, {
    key: "create",
    value: function create(scriptName, scriptHelp, args, options) {
      _traverse(args, (keySpec, key) => {
        if (key === "help" || keySpec.key === "help") throw "help is a reserved argument name";
      });
      var argsWithHelp = _objectSpread2(_objectSpread2({}, args), {}, {
        help: this.flag({
          help: "Show this message and exit.",
          setting: ""
        })
      });
      // Create an object to hold argument results, with a default value for
      // each argument.
      var res = _objectSpread2(_objectSpread2({}, _loadDefaultValues(argsWithHelp)), {}, {
        [specSymbol]: argsWithHelp,
        [scriptSymbol]: scriptName,
        [scriptHelpSymbol]: scriptHelp,
        [optionsSymbol]: options !== null && options !== void 0 ? options : {}
      });
      if (options === null || options === void 0 ? void 0 : options.positionalArgs) {
        var keys = [];
        var metadata = Args.getMetadata(res);
        metadata.traverse((keySpec, key) => {
          var _a;
          keys.push((_a = keySpec.key) !== null && _a !== void 0 ? _a : key);
        });
        var _iterator2 = _createForOfIteratorHelper(options.positionalArgs),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var arg = _step2.value;
            if (!keys.includes(arg)) throw "Unknown key for positional arg: ".concat(arg);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return res;
    }
    /**
     * Parse the command line input into the provided script arguments.
     * @param args An object to hold the parsed argument values, from Args.create(*).
     * @param command The command line input.
     * @param includeSettings If true, parse values from settings as well.
     */
  }, {
    key: "fill",
    value: function fill(args, command) {
      var includeSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var _a;
      var metadata = Args.getMetadata(args);
      // Load the list of keys and flags from the arg spec
      var keys = new Set();
      var flags = new Set();
      metadata.traverse((keySpec, key) => {
        var _a;
        var name = (_a = keySpec.key) !== null && _a !== void 0 ? _a : key;
        if (flags.has(name) || keys.has(name)) throw "Duplicate arg key ".concat(name, " is not allowed");
        if (keySpec.valueHelpName === "FLAG") flags.add(name);else keys.add(name);
      });
      // Parse values from settings.
      if (includeSettings) {
        metadata.traverseAndMaybeSet(args, (keySpec, key) => {
          var _a, _b;
          var setting = (_a = keySpec.setting) !== null && _a !== void 0 ? _a : "".concat(metadata.scriptName, "_").concat((_b = keySpec.key) !== null && _b !== void 0 ? _b : key);
          if (setting === "") return undefined; // no setting
          var value_str = kolmafia.getProperty(setting);
          if (value_str === "") return undefined; // no setting
          return parseAndValidate(keySpec, "Setting ".concat(setting), value_str);
        });
      }
      // Parse new argments from the command line
      if (command === undefined || command === "") return;
      var parsed = new CommandParser(command, keys, flags, (_a = metadata.options.positionalArgs) !== null && _a !== void 0 ? _a : []).parse();
      metadata.traverseAndMaybeSet(args, (keySpec, key) => {
        var _a;
        var argKey = (_a = keySpec.key) !== null && _a !== void 0 ? _a : key;
        var value_str = parsed.get(argKey);
        if (value_str === undefined) return undefined; // no setting
        return parseAndValidate(keySpec, "Argument ".concat(argKey), value_str);
      });
    }
    /**
     * Parse command line input into a new set of script arguments.
     * @param scriptName Prefix to use in property names; typically the name of the script.
     * @param scriptHelp Brief description of this script, for the help message.
     * @param spec An object specifying the script arguments.
     * @param command The command line input.
     * @param options Config options for the args and arg parser.
     */
  }, {
    key: "parse",
    value: function parse(scriptName, scriptHelp, spec, command, options) {
      var args = this.create(scriptName, scriptHelp, spec, options);
      this.fill(args, command);
      return args;
    }
    /**
     * Print a description of the script arguments to the CLI.
     *
     * First, all top-level argument descriptions are printed in the order they
     * were defined. Afterwards, descriptions for groups of arguments are printed
     * in the order they were defined.
     *
     * @param args An object of parsed arguments, from Args.create(*).
     * @param maxOptionsToDisplay If given, do not list more than this many options for each arg.
     */
  }, {
    key: "showHelp",
    value: function showHelp(args, maxOptionsToDisplay) {
      var _a;
      var metadata = Args.getMetadata(args);
      kolmafia.printHtml("".concat(metadata.scriptHelp));
      kolmafia.printHtml("");
      kolmafia.printHtml("<b>".concat((_a = metadata.options.defaultGroupName) !== null && _a !== void 0 ? _a : "Options", ":</b>"));
      metadata.traverse((arg, key) => {
        var _a, _b, _c, _d, _e;
        if (arg.hidden) return;
        var nameText = "<font color='".concat(kolmafia.isDarkMode() ? "yellow" : "blue", "'>").concat((_a = arg.key) !== null && _a !== void 0 ? _a : key, "</font>");
        var valueText = arg.valueHelpName === "FLAG" ? "" : "<font color='purple'>".concat(arg.valueHelpName, "</font>");
        var helpText = (_b = arg.help) !== null && _b !== void 0 ? _b : "";
        var defaultText = "default" in arg ? "<font color='#888888'>[default: ".concat(arg.default, "]</font>") : "";
        var settingText = arg.setting === "" ? "" : "<font color='#888888'>[setting: ".concat((_c = arg.setting) !== null && _c !== void 0 ? _c : "".concat(metadata.scriptName, "_").concat((_d = arg.key) !== null && _d !== void 0 ? _d : key), "]</font>");
        kolmafia.printHtml("&nbsp;&nbsp;".concat([nameText, valueText, "-", helpText, defaultText, settingText].join(" ")));
        var valueOptions = (_e = arg.options) !== null && _e !== void 0 ? _e : [];
        if (valueOptions.length < (maxOptionsToDisplay !== null && maxOptionsToDisplay !== void 0 ? maxOptionsToDisplay : Number.MAX_VALUE)) {
          var _iterator3 = _createForOfIteratorHelper(valueOptions),
            _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var option = _step3.value;
              if (option.length === 1 || option[1] === undefined) {
                kolmafia.printHtml("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0]));
              } else {
                kolmafia.printHtml("&nbsp;&nbsp;&nbsp;&nbsp;<font color='blue'>".concat(nameText, "</font> ").concat(option[0], " - ").concat(option[1]));
              }
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }, group => {
        kolmafia.printHtml("");
        kolmafia.printHtml("<b>".concat(group.name, ":</b>"));
      });
    }
    /**
     * Load the metadata information for a set of arguments. Only for advanced usage.
     *
     * @param args A JS object specifying the script arguments. Its values should
     *    be {@link Arg} objects (created by Args.string, Args.number, or others)
     *    or groups of arguments (created by Args.group).
     * @returns A class containing metadata information.
     */
  }, {
    key: "getMetadata",
    value: function getMetadata(args) {
      return new WrappedArgMetadata(args);
    }
  }]);
}();
var ParseError = /*#__PURE__*/_createClass(function ParseError(message) {
  _classCallCheck(this, ParseError);
  this.message = message;
});
/**
 * Metadata for the parsed arguments.
 *
 * This information is hidden within the parsed argument object so that it
 * is invisible to the user but available to fill(*) and showHelp(*).
 */
var specSymbol = Symbol("spec");
var scriptSymbol = Symbol("script");
var scriptHelpSymbol = Symbol("scriptHelp");
var optionsSymbol = Symbol("options");
/**
 * Parse a string into a value for a given argument, throwing if the parsing fails.
 * @param arg An argument that takes values in T.
 * @param source A description of where this value came from, for the error message.
 * @param value The value to parse.
 * @returns the parsed value.
 */
function parseAndValidate(arg, source, value) {
  var parsed_value;
  try {
    parsed_value = arg.parser(value);
  } catch (_a) {
    parsed_value = undefined;
  }
  if (parsed_value === undefined) throw "".concat(source, " expected ").concat(arg.valueHelpName, " but could not parse ").concat(value);
  if (parsed_value instanceof ParseError) throw "".concat(source, " ").concat(parsed_value.message);
  return parsed_value;
}
/**
 * A class that reveals the hidden metadata and specs for arguments.
 *
 * Only for advanced usage.
 */
var WrappedArgMetadata = /*#__PURE__*/function () {
  function WrappedArgMetadata(args) {
    _classCallCheck(this, WrappedArgMetadata);
    this.spec = args[specSymbol];
    this.scriptName = args[scriptSymbol];
    this.scriptHelp = args[scriptHelpSymbol];
    this.options = args[optionsSymbol];
  }
  /**
   * Create a parsed args object from this spec using all default values.
   */
  return _createClass(WrappedArgMetadata, [{
    key: "loadDefaultValues",
    value: function loadDefaultValues() {
      return _loadDefaultValues(this.spec);
    }
    /**
     * Traverse the spec and possibly generate a value for each argument.
     *
     * @param result The object to hold the resulting argument values, typically
     *    the result of loadDefaultValues().
     * @param setTo A function to generate an argument value from each arg spec.
     *    If this function returns undefined, then the argument value is unchanged.
     */
  }, {
    key: "traverseAndMaybeSet",
    value: function traverseAndMaybeSet(result, setTo) {
      return _traverseAndMaybeSet(this.spec, result, setTo);
    }
    /**
     * Traverse the spec and call a method for each argument.
     *
     * @param process A function to call at each arg spec.
     */
  }, {
    key: "traverse",
    value: function traverse(process, onGroup) {
      return _traverse(this.spec, process, onGroup);
    }
  }]);
}();
/**
 * Create a parsed args object from a spec using all default values.
 *
 * @param spec The spec for all arguments.
 */
function _loadDefaultValues(spec) {
  var result = {};
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec) {
      result[k] = _loadDefaultValues(argSpec.args);
    } else {
      if ("default" in argSpec) result[k] = argSpec.default;else result[k] = undefined;
    }
  }
  return result;
}
/**
 * Traverse the spec and possibly generate a value for each argument.
 *
 * @param spec The spec for all arguments.
 * @param result The object to hold the resulting argument values.
 * @param setTo A function to generate an argument value from each arg spec.
 *    If this function returns undefined, then the argument value is unchanged.
 */
function _traverseAndMaybeSet(spec, result, setTo) {
  var groups = [];
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec) {
      groups.push([argSpec, k]);
    } else {
      var value = setTo(argSpec, k);
      if (value === undefined) continue;
      result[k] = value;
    }
  }
  for (var _i = 0, _groups = groups; _i < _groups.length; _i++) {
    var group_and_key = _groups[_i];
    _traverseAndMaybeSet(group_and_key[0].args, result[group_and_key[1]], setTo);
  }
}
/**
 * Traverse the spec and possibly generate a value for each argument.
 *
 * @param spec The spec for all arguments.
 * @param process A function to call at each arg spec.
 */
function _traverse(spec, process, onGroup) {
  var groups = [];
  for (var k in spec) {
    var argSpec = spec[k];
    if ("args" in argSpec) {
      groups.push([argSpec, k]);
    } else {
      process(argSpec, k);
    }
  }
  for (var _i2 = 0, _groups2 = groups; _i2 < _groups2.length; _i2++) {
    var group_and_key = _groups2[_i2];
    onGroup === null || onGroup === void 0 ? void 0 : onGroup(group_and_key[0], group_and_key[1]);
    _traverse(group_and_key[0].args, process, onGroup);
  }
}
/**
 * A parser to extract key/value pairs from a command line input.
 * @member command The command line input.
 * @member keys The set of valid keys that can appear.
 * @member flags The set of valid flags that can appear.
 * @member index An internal marker for the progress of the parser over the input.
 */
var CommandParser = /*#__PURE__*/function () {
  function CommandParser(command, keys, flags, positionalArgs) {
    _classCallCheck(this, CommandParser);
    this.command = command;
    this.index = 0;
    this.keys = keys;
    this.flags = flags;
    this.positionalArgs = positionalArgs;
    this.positionalArgsParsed = 0;
  }
  /**
   * Perform the parsing of (key, value) pairs.
   * @returns The set of extracted (key, value) pairs.
   */
  return _createClass(CommandParser, [{
    key: "parse",
    value: function parse() {
      var _a, _b, _c, _d;
      this.index = 0; // reset the parser
      var result = new Map();
      while (!this.finished()) {
        // A flag F may appear as !F to be parsed as false.
        var parsing_negative_flag = false;
        if (this.peek() === "!") {
          parsing_negative_flag = true;
          this.consume(["!"]);
        }
        var startIndex = this.index;
        var key = this.parseKey();
        if (result.has(key)) {
          throw "Duplicate key ".concat(key, " (first set to ").concat((_a = result.get(key)) !== null && _a !== void 0 ? _a : "", ")");
        }
        if (this.flags.has(key)) {
          // The key corresponds to a flag.
          // Parse [key] as true and ![key] as false.
          result.set(key, parsing_negative_flag ? "false" : "true");
          if (this.peek() === "=") throw "Flag ".concat(key, " cannot be assigned a value");
          if (!this.finished()) this.consume([" "]);
          this.prevUnquotedKey = undefined;
        } else if (this.keys.has(key)) {
          // Parse [key]=[value] or [key] [value]
          this.consume(["=", " "]);
          var value = this.parseValue();
          if (["'", '"'].includes((_b = this.prev()) !== null && _b !== void 0 ? _b : "")) this.prevUnquotedKey = undefined;else this.prevUnquotedKey = key;
          if (!this.finished()) this.consume([" "]);
          result.set(key, value);
        } else if (this.positionalArgsParsed < this.positionalArgs.length && this.peek() !== "=") {
          // Parse [value] as the next positional arg
          var positionalKey = this.positionalArgs[this.positionalArgsParsed];
          this.positionalArgsParsed++;
          this.index = startIndex; // back up to reparse the key as a value
          var _value = this.parseValue();
          if (["'", '"'].includes((_c = this.prev()) !== null && _c !== void 0 ? _c : "")) this.prevUnquotedKey = undefined;else this.prevUnquotedKey = key;
          if (!this.finished()) this.consume([" "]);
          if (result.has(positionalKey)) throw "Cannot assign ".concat(_value, " to ").concat(positionalKey, " (positionally) since ").concat(positionalKey, " was already set to ").concat((_d = result.get(positionalKey)) !== null && _d !== void 0 ? _d : "");
          result.set(positionalKey, _value);
        } else {
          // Key not found; include a better error message if it is possible for quotes to have been missed
          if (this.prevUnquotedKey && this.peek() !== "=") throw "Unknown argument: ".concat(key, " (if this should have been parsed as part of ").concat(this.prevUnquotedKey, ", you should surround the entire value in quotes)");else throw "Unknown argument: ".concat(key);
        }
      }
      return result;
    }
    /**
     * @returns True if the entire command has been parsed.
     */
  }, {
    key: "finished",
    value: function finished() {
      return this.index >= this.command.length;
    }
    /**
     * @returns The next character to parse, if it exists.
     */
  }, {
    key: "peek",
    value: function peek() {
      if (this.index >= this.command.length) return undefined;
      return this.command.charAt(this.index);
    }
    /**
     * @returns The character just parsed, if it exists.
     */
  }, {
    key: "prev",
    value: function prev() {
      if (this.index <= 0) return undefined;
      if (this.index >= this.command.length + 1) return undefined;
      return this.command.charAt(this.index - 1);
    }
    /**
     * Advance the internal marker over the next expected character.
     * Throws an error on unexpected characters.
     *
     * @param allowed Characters that are expected.
     */
  }, {
    key: "consume",
    value: function consume(allowed) {
      var _a;
      if (this.finished()) throw "Expected ".concat(allowed);
      if (allowed.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "")) {
        this.index += 1;
      }
    }
    /**
     * Find the next occurance of one of the provided characters, or the end of
     * the string if the characters never appear again.
     *
     * @param searchValue The characters to locate.
     */
  }, {
    key: "findNext",
    value: function findNext(searchValue) {
      var result = this.command.length;
      var _iterator4 = _createForOfIteratorHelper(searchValue),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var value = _step4.value;
          var index = this.command.indexOf(value, this.index);
          if (index !== -1 && index < result) result = index;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return result;
    }
    /**
     * Starting from the internal marker, parse a single key.
     * This also advances the internal marker.
     *
     * @returns The next key.
     */
  }, {
    key: "parseKey",
    value: function parseKey() {
      var keyEnd = this.findNext(["=", " "]);
      var key = this.command.substring(this.index, keyEnd);
      this.index = keyEnd;
      return key;
    }
    /**
     * Starting from the internal marker, parse a single value.
     * This also advances the internal marker.
     *
     * Values are a single word or enclosed in matching quotes, i.e. one of:
     *    "[^"]*"
     *    '[^']*"
     *    [^'"][^ ]*
     *
     * @returns The next value.
     */
  }, {
    key: "parseValue",
    value: function parseValue() {
      var _a, _b;
      var valueEnder = " ";
      var quotes = ["'", '"'];
      if (quotes.includes((_a = this.peek()) !== null && _a !== void 0 ? _a : "")) {
        valueEnder = (_b = this.peek()) !== null && _b !== void 0 ? _b : ""; // The value is everything until the next quote
        this.consume([valueEnder]); // Consume opening quote
      }
      var valueEnd = this.findNext([valueEnder]);
      var value = this.command.substring(this.index, valueEnd);
      if (valueEnder !== " " && valueEnd === this.command.length) {
        throw "No closing ".concat(valueEnder, " found for ").concat(valueEnder).concat(value);
      }
      // Consume the value (and closing quote)
      this.index = valueEnd;
      if (valueEnder !== " ") this.consume([valueEnder]);
      return value;
    }
  }]);
}();

/**
 * The strategy to use for combat for a task, which indicates what to do
 * for each monster.
 *
 * There are two ways to specify in a task what to do for a given monster:
 *   1. Provide a macro directly through .macro(macro, ...monsters)
 *   2. Provide an action through .action(action, ...monsters)
 *
 * An action is a strategy for dealing with a monster that is not fully
 * defined in the task. The possible actions are set with the type parameter A.
 * Actions should typically end the fight.
 *
 * For example, a task may want to banish a monster but not necessarily know or
 * care which banisher is used. Instead, it is best for the engine to determine
 * which banisher to use on the monster. To facilitate this, "banish" can be
 * defined as an action, e.g. with CombatStrategy<"banish">;
 *
 * Each action can be resolved by the engine by:
 *   1. Providing a default macro for the action through ActionDefaults<A>,
 *      which can be done through combat_defaults in Engine options, or
 *   2. Providing a CombatResource for the action through CombatResources<A>.
 *      This is typically done in Engine.customize() by checking if a given
 *      action is requested by the task with combat.can(.), and then providing
 *      an appropriate resource with resources.provide(.).
 *
 * A monster may have both a macro and an action defined, and a macro or action
 * can be specified to be done on all monsters. The order of combat is then:
 * 1. The macro(s) given in .startingMacro().
 * 2. The monster-specific macro(s) from .macro().
 * 3. The general macro(s) from .macro().
 * 4. The monster-specific action from .action().
 * 5. The general action from .action().
 *
 * If an autoattack is set with .autoattack(), the order of the autoattack is:
 * 1. The monster-specific macro(s) from .autoattack().
 * 2. The general macro(s) from .autoattack().
 */
var CombatStrategy = /*#__PURE__*/function () {
  function CombatStrategy() {
    _classCallCheck(this, CombatStrategy);
    this.macros = new Map();
    this.autoattacks = new Map();
    this.actions = new Map();
    this.ccs_entries = new Map();
  }
  /**
   * Add a macro to perform for this monster. If multiple macros are given
   * for the same monster, they are concatinated.
   *
   * @param macro The macro to perform.
   * @param monsters Which monsters to use the macro on. If not given, add the
   *  macro as a general macro.
   * @param prepend If true, add the macro before all previous macros for
   *    the same monster. If false, add after all previous macros.
   * @returns this
   */
  return _createClass(CombatStrategy, [{
    key: "macro",
    value: function macro(_macro, monsters, prepend) {
      var _a, _b;
      if (monsters === undefined) {
        if (this.default_macro === undefined) this.default_macro = [];
        if (prepend) this.default_macro.unshift(_macro);else this.default_macro.push(_macro);
      } else {
        if (monsters instanceof kolmafia.Monster) monsters = [monsters];
        var _iterator = _createForOfIteratorHelper(monsters),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var monster = _step.value;
            if (!this.macros.has(monster)) this.macros.set(monster, []);
            if (prepend) (_a = this.macros.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(_macro);else (_b = this.macros.get(monster)) === null || _b === void 0 ? void 0 : _b.push(_macro);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return this;
    }
    /**
     * Add a macro to perform as an autoattack for this monster. If multiple
     * macros are given for the same monster, they are concatinated.
     *
     * @param macro The macro to perform as autoattack.
     * @param monsters Which monsters to use the macro on. If not given, add the
     *  macro as a general macro.
     * @param prepend If true, add the macro before all previous autoattack
     *    macros for the same monster. If false, add after all previous macros.
     * @returns this
     */
  }, {
    key: "autoattack",
    value: function autoattack(macro, monsters, prepend) {
      var _a, _b;
      if (monsters === undefined) {
        if (this.default_autoattack === undefined) this.default_autoattack = [];
        if (prepend) this.default_autoattack.unshift(macro);else this.default_autoattack.push(macro);
      } else {
        if (monsters instanceof kolmafia.Monster) monsters = [monsters];
        var _iterator2 = _createForOfIteratorHelper(monsters),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var monster = _step2.value;
            if (!this.autoattacks.has(monster)) this.autoattacks.set(monster, []);
            if (prepend) (_a = this.autoattacks.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(macro);else (_b = this.autoattacks.get(monster)) === null || _b === void 0 ? void 0 : _b.push(macro);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
    /**
     * Add a macro to perform at the start of combat.
     * @param macro The macro to perform.
     * @param prepend If true, add the macro before all previous starting
     *    macros. If false, add after all previous starting macros.
     * @returns this
     */
  }, {
    key: "startingMacro",
    value: function startingMacro(macro, prepend) {
      if (this.starting_macro === undefined) this.starting_macro = [];
      if (prepend) this.starting_macro.unshift(macro);else this.starting_macro.push(macro);
      return this;
    }
    /**
     * Add an action to perform for this monster. Only one action can be set for
     * each monster; any previous actions are overwritten.
     *
     * @param action The action to perform.
     * @param monsters Which monsters to use the action on. If not given, set the
     *  action as the general action for all monsters.
     * @returns this
     */
  }, {
    key: "action",
    value: function action(_action, monsters) {
      if (monsters === undefined) {
        this.default_action = _action;
      } else if (monsters instanceof kolmafia.Monster) {
        this.actions.set(monsters, _action);
      } else {
        var _iterator3 = _createForOfIteratorHelper(monsters),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var monster = _step3.value;
            this.actions.set(monster, _action);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return this;
    }
    /**
     * Add a separate entry in the grimoire-generated CCS file for the specified
     * monster. If multiple entries are given for the same monster, they are
     * concatinated.
     *
     * This should typically be only used rarely, on monsters for which KoL does
     * not support macros in combat (e.g. rampaging adding machine).
     *
     * @param entry The entry to add for the given monster.
     * @param monsters Which monsters to add the entry to.
     * @param prepend If true, add the entry before all previous entries. If
     *   false, add after all previous entries.
     */
  }, {
    key: "ccs",
    value: function ccs(entry, monsters, prepend) {
      var _a, _b;
      if (monsters instanceof kolmafia.Monster) monsters = [monsters];
      var _iterator4 = _createForOfIteratorHelper(monsters),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var monster = _step4.value;
          if (!this.ccs_entries.has(monster)) this.ccs_entries.set(monster, []);
          if (prepend) (_a = this.ccs_entries.get(monster)) === null || _a === void 0 ? void 0 : _a.unshift(entry);else (_b = this.ccs_entries.get(monster)) === null || _b === void 0 ? void 0 : _b.push(entry);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return this;
    }
    /**
     * Check if the provided action was requested for any monsters, or for the
     * general action.
     */
  }, {
    key: "can",
    value: function can(action) {
      if (action === this.default_action) return true;
      return Array.from(this.actions.values()).includes(action);
    }
    /**
     * Return the general action (if it exists).
     */
  }, {
    key: "getDefaultAction",
    value: function getDefaultAction() {
      return this.default_action;
    }
    /**
     * Return all monsters where the provided action was requested.
     */
  }, {
    key: "where",
    value: function where(action) {
      return Array.from(this.actions.keys()).filter(key => this.actions.get(key) === action);
    }
    /**
     * Return the requested action (if it exists) for the provided monster.
     */
  }, {
    key: "currentStrategy",
    value: function currentStrategy(monster) {
      var _a;
      return (_a = this.actions.get(monster)) !== null && _a !== void 0 ? _a : this.default_action;
    }
    /**
     * Perform a deep copy of this combat strategy.
     */
  }, {
    key: "clone",
    value: function clone() {
      var result = new CombatStrategy();
      if (this.starting_macro) result.starting_macro = _toConsumableArray(this.starting_macro);
      if (this.default_macro) result.default_macro = _toConsumableArray(this.default_macro);
      var _iterator5 = _createForOfIteratorHelper(this.macros),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var pair = _step5.value;
          result.macros.set(pair[0], _toConsumableArray(pair[1]));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      if (this.default_autoattack) result.default_autoattack = _toConsumableArray(this.default_autoattack);
      var _iterator6 = _createForOfIteratorHelper(this.autoattacks),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _pair = _step6.value;
          result.autoattacks.set(_pair[0], _toConsumableArray(_pair[1]));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      result.default_action = this.default_action;
      var _iterator7 = _createForOfIteratorHelper(this.actions),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var _pair2 = _step7.value;
          result.actions.set(_pair2[0], _pair2[1]);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      var _iterator8 = _createForOfIteratorHelper(this.ccs_entries),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _pair3 = _step8.value;
          result.ccs_entries.set(_pair3[0], _toConsumableArray(_pair3[1]));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      return result;
    }
    /**
     * Compile this combat strategy into a complete macro.
     *
     * @param resources The resources to use to fulfil actions.
     * @param defaults Macros to perform for each action without a resource.
     * @param location The adventuring location, if known.
     * @param ctx: The current engine state to be passed to task functions.
     * @returns The compiled macro.
     */
  }, {
    key: "compile",
    value: function compile(resources, defaults, location, ctx) {
      var _a, _b;
      var result = new Macro();
      // If there is macro precursor, do it now
      if (this.starting_macro) {
        result.step.apply(result, _toConsumableArray(this.starting_macro.map(macro => undelay(macro, ctx))));
      }
      // Perform any monster-specific macros (these may or may not end the fight)
      var monster_macros = new CompressedMacro();
      this.macros.forEach((value, key) => {
        var _Macro;
        monster_macros.add(key, (_Macro = new Macro()).step.apply(_Macro, _toConsumableArray(value.map(macro => undelay(macro, ctx)))));
      });
      result.step(monster_macros.compile());
      // Perform the non-monster specific macro
      if (this.default_macro) result.step.apply(result, _toConsumableArray(this.default_macro.map(macro => undelay(macro, ctx))));
      // Perform any monster-specific actions (these should end the fight)
      var monster_actions = new CompressedMacro();
      this.actions.forEach((action, key) => {
        var _a, _b;
        var macro = (_a = resources.getMacro(action, ctx)) !== null && _a !== void 0 ? _a : (_b = defaults === null || defaults === void 0 ? void 0 : defaults[action]) === null || _b === void 0 ? void 0 : _b.call(defaults, key);
        if (macro) monster_actions.add(key, new Macro().step(macro));
      });
      result.step(monster_actions.compile());
      // Perform the non-monster specific action (these should end the fight)
      if (this.default_action) {
        var macro = (_a = resources.getMacro(this.default_action, ctx)) !== null && _a !== void 0 ? _a : (_b = defaults === null || defaults === void 0 ? void 0 : defaults[this.default_action]) === null || _b === void 0 ? void 0 : _b.call(defaults, location);
        if (macro) result.step(macro);
      }
      return result;
    }
    /**
     * Compile the autoattack of this combat strategy into a complete macro.
     *
     * @param ctx: The current engine state to be passed to task functions.
     * @returns The compiled autoattack macro.
     */
  }, {
    key: "compileAutoattack",
    value: function compileAutoattack(ctx) {
      var result = new Macro();
      // Perform any monster-specific autoattacks (these may or may not end the fight)
      var monster_macros = new CompressedMacro();
      this.autoattacks.forEach((value, key) => {
        var _Macro2;
        monster_macros.add(key, (_Macro2 = new Macro()).step.apply(_Macro2, _toConsumableArray(value.map(macro => undelay(macro, ctx)))));
      });
      result.step(monster_macros.compile());
      // Perform the non-monster specific macro
      if (this.default_autoattack) result.step.apply(result, _toConsumableArray(this.default_autoattack.map(macro => undelay(macro, ctx))));
      return result;
    }
    /**
     * Compile the CCS entries of this combat strategy into a single array.
     *
     * @returns The lines of a CCS file, not including the [default] macro.
     */
  }, {
    key: "compileCcs",
    value: function compileCcs() {
      var result = [];
      var _iterator9 = _createForOfIteratorHelper(this.ccs_entries),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var ccs_entry = _step9.value;
          result.push.apply(result, ["[".concat(ccs_entry[0].name, "]")].concat(_toConsumableArray(ccs_entry[1])));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      return result;
    }
    /**
     * For advanced users, this method will generate a fluent API for requesting
     * actions. That is, it allows you to do
     *   combat.banish(monster1).kill(monster2)
     * instead of
     *   combat.action("banish", monster1).action("kill", monster2)
     *
     * Example usage:
     *   const myActions = ["kill", "banish"] as const;
     *   class MyCombatStrategy extends CombatStrategy.withActions(myActions) {}
     *
     *   const foo: MyCombatStrategy = new MyCombatStrategy();
     *   const bar: MyCombatStrategy = foo.banish($monster`crate`).kill($monster`tumbleweed`);
     */
  }], [{
    key: "withActions",
    value: function withActions(actions) {
      var CombatStrategyWithActions = /*#__PURE__*/function (_this) {
        function CombatStrategyWithActions() {
          _classCallCheck(this, CombatStrategyWithActions);
          return _callSuper(this, CombatStrategyWithActions, arguments);
        }
        _inherits(CombatStrategyWithActions, _this);
        return _createClass(CombatStrategyWithActions);
      }(this); // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var proto = CombatStrategyWithActions.prototype;
      var _iterator0 = _createForOfIteratorHelper(actions),
        _step0;
      try {
        var _loop = function _loop() {
          var action = _step0.value;
          proto[action] = function (monsters) {
            return this.action(action, monsters);
          };
        };
        for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
          _loop();
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err) {
        _iterator0.e(err);
      } finally {
        _iterator0.f();
      }
      return CombatStrategyWithActions;
    }
  }]);
}();
/**
 * A class to build a macro that combines if statements (keyed on monster) with
 * identical body into a single if statement, to avoid the 37-action limit.
 * Ex: [if x; A; if y; B; if z; A;] will turn into [if x || z; A; if y; B]
 */
var CompressedMacro = /*#__PURE__*/function () {
  function CompressedMacro() {
    _classCallCheck(this, CompressedMacro);
    this.components = new Map();
  }
  /**
   * Set the macro for a given monster (replacing any previous macros).
   */
  return _createClass(CompressedMacro, [{
    key: "add",
    value: function add(monster, macro) {
      var _a;
      var macro_text = macro.toString();
      if (macro_text.length === 0) return;
      if (!this.components.has(macro_text)) this.components.set(macro_text, [monster]);else (_a = this.components.get(macro_text)) === null || _a === void 0 ? void 0 : _a.push(monster);
    }
    /**
     * Compile the compressed form of the macro.
     */
  }, {
    key: "compile",
    value: function compile() {
      var result = new Macro();
      this.components.forEach((monsters, macro) => {
        var condition = monsters.map(mon => "monsterid ".concat(mon.id)).join(" || ");
        result.if_(condition, macro);
      });
      return result;
    }
  }]);
}();
/**
 * A class for providing resources to fulfil combat actions.
 */
var CombatResources = /*#__PURE__*/function () {
  function CombatResources() {
    _classCallCheck(this, CombatResources);
    this.resources = new Map();
  }
  /**
   * Use the provided resource to fulfil the provided action.
   * (If the resource is undefined, this does nothing).
   */
  return _createClass(CombatResources, [{
    key: "provide",
    value: function provide(action, resource) {
      if (resource === undefined) return;
      this.resources.set(action, resource);
    }
    /**
     * Return true if the provided action has a resource provided.
     */
  }, {
    key: "has",
    value: function has(action) {
      return this.resources.has(action);
    }
    /**
     * Returns the resource for the provided action, if set.
     */
  }, {
    key: "get",
    value: function get(action) {
      return this.resources.get(action);
    }
    /**
     * Return all provided combat resources.
     */
  }, {
    key: "all",
    value: function all() {
      return Array.from(this.resources.values());
    }
    /**
     * Get the macro provided by the resource for this action, or undefined if
     * no resource was provided.
     */
  }, {
    key: "getMacro",
    value: function getMacro(action, ctx) {
      var resource = this.resources.get(action);
      if (resource === undefined) return undefined;
      if (resource.do instanceof kolmafia.Item) return new Macro().item(resource.do);
      if (resource.do instanceof kolmafia.Skill) return new Macro().skill(resource.do);
      return undelay(resource.do, ctx);
    }
  }]);
}();

var _templateObject$2, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5$1, _templateObject6$1, _templateObject7$1, _templateObject8$1, _templateObject9$1, _templateObject0$1, _templateObject1$1, _templateObject10$1, _templateObject11$1, _templateObject12$1, _templateObject13$1, _templateObject14$1, _templateObject15$1, _templateObject16$1, _templateObject17$1, _templateObject18$1, _templateObject19$1, _templateObject20$1, _templateObject21$1, _templateObject22$1, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80;
var FORCE_REFRESH_REQUIREMENT = new Requirement([], {
  forceUpdate: true
});
var outfitSlots = ["hat", "back", "weapon", "offhand", "shirt", "pants", "acc1", "acc2", "acc3", "famequip"];
var weaponHands = i => i ? kolmafia.weaponHands(i) : 0;
var modeableCommands = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka", "jillcandle"];
var Outfit = /*#__PURE__*/function () {
  function Outfit() {
    _classCallCheck(this, Outfit);
    this.equips = new Map();
    this.riders = new Map();
    this.modes = {};
    this.skipDefaults = false;
    this.modifier = [];
    this.avoid = [];
    this.bonuses = new Map();
    this.postActions = [];
    this.preActions = [];
  }
  /**
   * Create an outfit from your current player state.
   */
  return _createClass(Outfit, [{
    key: "equippedAmount",
    value:
    /**
     * Check how many of an item is equipped on the outfit.
     */
    function equippedAmount(item) {
      return _toConsumableArray(this.equips.values()).filter(i => i === item).length;
    }
  }, {
    key: "isAvailable",
    value: function isAvailable(item) {
      var _a;
      if ((_a = this.avoid) === null || _a === void 0 ? void 0 : _a.includes(item)) return false;
      if (!have$1(item, this.equippedAmount(item) + 1)) return false;
      if (kolmafia.booleanModifier(item, "Single Equip") && this.equippedAmount(item) > 0) return false;
      return true;
    }
    /**
     * Check whether an item is equipped on the outfit, optionally in a specific slot.
     */
  }, {
    key: "haveEquipped",
    value: function haveEquipped(item, slot) {
      if (slot === undefined) return this.equippedAmount(item) > 0;
      return this.equips.get(slot) === item;
    }
  }, {
    key: "equipItemNone",
    value: function equipItemNone(item, slot) {
      if (item !== $item.none) return false;
      if (slot === undefined) return true;
      if (this.equips.has(slot)) return false;
      this.equips.set(slot, item);
      return true;
    }
  }, {
    key: "equipNonAccessory",
    value: function equipNonAccessory(item, slot) {
      if ($slots(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["acc1, acc2, acc3"]))).includes(kolmafia.toSlot(item))) return false;
      if (slot !== undefined && slot !== kolmafia.toSlot(item)) return false;
      if (this.equips.has(kolmafia.toSlot(item))) return false;
      switch (kolmafia.toSlot(item)) {
        case $slot(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["off-hand"]))):
          if (this.equips.has($slot(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["weapon"])))) && weaponHands(this.equips.get($slot(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["weapon"]))))) !== 1) {
            return false;
          }
          break;
        case $slot(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral(["familiar"]))):
          if (this.familiar !== undefined && !kolmafia.canEquip(this.familiar, item)) return false;
          break;
        case $slot(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteral(["weapon"]))):
          if (!weaponsCompatible(item, this.equips.get($slot(_templateObject7$1 || (_templateObject7$1 = _taggedTemplateLiteral(["off-hand"])))))) return false;
          break;
      }
      if (kolmafia.toSlot(item) !== $slot(_templateObject8$1 || (_templateObject8$1 = _taggedTemplateLiteral(["familiar"]))) && !kolmafia.canEquip(item)) return false;
      this.equips.set(kolmafia.toSlot(item), item);
      return true;
    }
  }, {
    key: "equipAccessory",
    value: function equipAccessory(item, slot) {
      if (![undefined].concat(_toConsumableArray($slots(_templateObject9$1 || (_templateObject9$1 = _taggedTemplateLiteral(["acc1, acc2, acc3"]))))).includes(slot)) return false;
      if (kolmafia.toSlot(item) !== $slot(_templateObject0$1 || (_templateObject0$1 = _taggedTemplateLiteral(["acc1"])))) return false;
      if (!kolmafia.canEquip(item)) return false;
      if (slot === undefined) {
        // We don't care which of the accessory slots we equip in
        var empty = $slots(_templateObject1$1 || (_templateObject1$1 = _taggedTemplateLiteral(["acc1, acc2, acc3"]))).find(s => !this.equips.has(s));
        if (empty === undefined) return false;
        this.equips.set(empty, item);
      } else {
        if (this.equips.has(slot)) return false;
        this.equips.set(slot, item);
      }
      return true;
    }
  }, {
    key: "equipUsingDualWield",
    value: function equipUsingDualWield(item, slot) {
      if (![undefined, $slot(_templateObject10$1 || (_templateObject10$1 = _taggedTemplateLiteral(["off-hand"])))].includes(slot)) return false;
      if (kolmafia.toSlot(item) !== $slot(_templateObject11$1 || (_templateObject11$1 = _taggedTemplateLiteral(["weapon"])))) return false;
      if (this.equips.has($slot(_templateObject12$1 || (_templateObject12$1 = _taggedTemplateLiteral(["weapon"])))) && weaponHands(this.equips.get($slot(_templateObject13$1 || (_templateObject13$1 = _taggedTemplateLiteral(["weapon"]))))) !== 1) {
        return false;
      }
      if (this.equips.has($slot(_templateObject14$1 || (_templateObject14$1 = _taggedTemplateLiteral(["off-hand"]))))) return false;
      if (!have$1($skill(_templateObject15$1 || (_templateObject15$1 = _taggedTemplateLiteral(["Double-Fisted Skull Smashing"]))))) return false;
      if (weaponHands(item) !== 1) return false;
      if (!kolmafia.canEquip(item)) return false;
      if (!weaponsCompatible(this.equips.get($slot(_templateObject16$1 || (_templateObject16$1 = _taggedTemplateLiteral(["weapon"])))), item)) return false;
      this.equips.set($slot(_templateObject17$1 || (_templateObject17$1 = _taggedTemplateLiteral(["off-hand"]))), item);
      return true;
    }
  }, {
    key: "getHoldingFamiliar",
    value: function getHoldingFamiliar(item) {
      switch (kolmafia.toSlot(item)) {
        case $slot(_templateObject18$1 || (_templateObject18$1 = _taggedTemplateLiteral(["weapon"]))):
          return $familiar(_templateObject19$1 || (_templateObject19$1 = _taggedTemplateLiteral(["Disembodied Hand"])));
        case $slot(_templateObject20$1 || (_templateObject20$1 = _taggedTemplateLiteral(["off-hand"]))):
          return $familiar(_templateObject21$1 || (_templateObject21$1 = _taggedTemplateLiteral(["Left-Hand Man"])));
        case $slot(_templateObject22$1 || (_templateObject22$1 = _taggedTemplateLiteral(["pants"]))):
          return $familiar(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["Fancypants Scarecrow"])));
        case $slot(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["hat"]))):
          return $familiar(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["Mad Hatrack"])));
        default:
          return undefined;
      }
    }
    /**
     * Returns the bonus value associated with a given item.
     *
     * @param item The item to check the bonus of.
     * @returns The bonus assigned to that item.
     */
  }, {
    key: "getBonus",
    value: function getBonus(item) {
      var _a;
      return (_a = this.bonuses.get(item)) !== null && _a !== void 0 ? _a : 0;
    }
    /**
     * Applies a value to any existing bonus this item has, using a rule assigned by the `reducer` parameter
     *
     * @param item The item to try to apply a bonus to.
     * @param value The value to try to apply.
     * @param reducer Function that combines new and current bonus
     * @returns The total assigned bonus to that item.
     */
  }, {
    key: "applyBonus",
    value: function applyBonus(item, value, reducer) {
      var previous = this.getBonus(item);
      return this.setBonus(item, reducer(value, previous));
    }
    /**
     * Sets the bonus value of an item equal to a given value, overriding any current bonus assigned.
     *
     * @param item The item to try to apply a bonus to.
     * @param value The value to try to apply.
     * @returns The total assigned bonus to that item.
     */
  }, {
    key: "setBonus",
    value: function setBonus(item, value) {
      this.bonuses.set(item, value);
      return value;
    }
    /**
     * Adds a value to any existing bonus this item has
     *
     * @param item The item to try to add a bonus to.
     * @param value The value to try to add.
     * @returns The total assigned bonus to that item.
     */
  }, {
    key: "addBonus",
    value: function addBonus(item, value) {
      return this.applyBonus(item, value, (a, b) => a + b);
    }
    /**
     * Apply the given items' bonuses to the outfit, using a rule given by the reducer
     *
     * @param items A map containing items and their bonuses
     * @param reducer A way of combining new bonuses with existing bonuses
     */
  }, {
    key: "applyBonuses",
    value: function applyBonuses(items, reducer) {
      var _iterator = _createForOfIteratorHelper(items),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            item = _step$value[0],
            value = _step$value[1];
          this.applyBonus(item, value, reducer);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * Sets the bonuses of the given items, overriding existing bonuses
     *
     * @param items Map containing items and bonuses
     */
  }, {
    key: "setBonuses",
    value: function setBonuses(items) {
      this.applyBonuses(items, a => a);
    }
    /**
     * Adds the bonuses of the given items to any existing bonuses they ahave
     *
     * @param items Map containing items and bonuses
     */
  }, {
    key: "addBonuses",
    value: function addBonuses(items) {
      this.applyBonuses(items, (a, b) => a + b);
    }
  }, {
    key: "equipUsingFamiliar",
    value: function equipUsingFamiliar(item, slot) {
      if (![undefined, $slot(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["familiar"])))].includes(slot)) return false;
      if (this.equips.has($slot(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["familiar"]))))) return false;
      if (kolmafia.booleanModifier(item, "Single Equip")) return false;
      var familiar = this.getHoldingFamiliar(item);
      // Hats/pants don't get the full effect on the familiar, unlike weapons/off-hands which are basically all fully functional
      if (familiar === undefined || $familiars(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["Fancypants Scarecrow, Mad Hatrack"]))).includes(familiar) && slot === undefined) {
        return false;
      }
      if (!this.equip(familiar)) return false;
      this.equips.set($slot(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["familiar"]))), item);
      return true;
    }
  }, {
    key: "equipItem",
    value: function equipItem(item, slot) {
      return this.haveEquipped(item, slot) || this.equipItemNone(item, slot) || this.isAvailable(item) && (this.equipNonAccessory(item, slot) || this.equipAccessory(item, slot) || this.equipUsingDualWield(item, slot) || this.equipUsingFamiliar(item, slot));
    }
  }, {
    key: "equipFamiliar",
    value: function equipFamiliar(familiar) {
      if (familiar === this.familiar) return true;
      if (this.familiar !== undefined) return false;
      if (familiar !== $familiar.none) {
        if (!have$1(familiar)) return false;
        if (Array.from(this.riders.values()).includes(familiar)) return false;
      }
      var item = this.equips.get($slot(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["familiar"]))));
      if (item !== undefined && item !== $item.none && !kolmafia.canEquip(familiar, item)) return false;
      this.familiar = familiar;
      return true;
    }
  }, {
    key: "equipSpec",
    value: function equipSpec(spec) {
      var _this$avoid;
      var _a, _b, _c, _d, _e, _f;
      var succeeded = true;
      for (var _i = 0, _outfitSlots = outfitSlots; _i < _outfitSlots.length; _i++) {
        var slotName = _outfitSlots[_i];
        var slot = (_a = new Map([["famequip", $slot(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : kolmafia.toSlot(slotName);
        var itemOrItems = spec[slotName];
        if (itemOrItems !== undefined && !this.equip(itemOrItems, slot)) succeeded = false;
      }
      var _iterator2 = _createForOfIteratorHelper((_b = spec === null || spec === void 0 ? void 0 : spec.equip) !== null && _b !== void 0 ? _b : []),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;
          if (!this.equip(item)) succeeded = false;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if ((spec === null || spec === void 0 ? void 0 : spec.familiar) !== undefined) {
        if (!this.equip(spec.familiar)) succeeded = false;
      }
      (_this$avoid = this.avoid).push.apply(_this$avoid, _toConsumableArray((_c = spec === null || spec === void 0 ? void 0 : spec.avoid) !== null && _c !== void 0 ? _c : []));
      this.skipDefaults = this.skipDefaults || ((_d = spec.skipDefaults) !== null && _d !== void 0 ? _d : false);
      if (spec.modifier) {
        var _this$modifier;
        if (Array.isArray(spec.modifier)) (_this$modifier = this.modifier).push.apply(_this$modifier, _toConsumableArray(spec.modifier));else this.modifier.push(spec.modifier);
      }
      if (spec.modes) {
        if (!this.setModes(spec.modes)) {
          succeeded = false;
        }
      }
      if (spec.riders) {
        if (spec.riders["buddy-bjorn"] && !this.bjornify(spec.riders["buddy-bjorn"])) succeeded = false;
        if (spec.riders["crown-of-thrones"] && !this.enthrone(spec.riders["crown-of-thrones"])) succeeded = false;
      }
      if (spec.bonuses) {
        this.addBonuses(spec.bonuses);
      }
      this.beforeDress.apply(this, _toConsumableArray((_e = spec.beforeDress) !== null && _e !== void 0 ? _e : []));
      this.afterDress.apply(this, _toConsumableArray((_f = spec.afterDress) !== null && _f !== void 0 ? _f : []));
      return succeeded;
    }
    /**
     * Equip the first thing that can be equipped to the outfit.
     *
     * @param things The things to equip.
     * @param slot The slot to equip them.
     * @returns True if one of the things is equipped, and false otherwise.
     */
  }, {
    key: "equipFirst",
    value: function equipFirst(things, slot) {
      // some() returns false on an empty array, yet every() returns true.
      // This keeps behavior consistent between slotful and slotless equipping.
      if (things.length === 0) return true;
      return things.some(val => this.equip(val, slot));
    }
    /**
     * Equip a thing to the outfit.
     *
     * If no slot is given, then the thing will be equipped wherever possible
     * (possibly using dual-wielding, any of the accessory slots, or as
     * familiar equipment). If it is impossible to add this thing anywhere to
     * the outfit, this function will return false.
     *
     * If a slot is given, the item will be equipped only in that slot. If the
     * slot is filled with a different item, this function will return false.
     *
     * If the thing is already equipped in the provided slot, or if no slot is
     * given and the thing is already equipped in any slot, this function will
     * return true and not change the outfit.
     *
     * @param thing The thing or things to equip.
     * @param slot The slot to equip them.
     * @returns True if the thing was sucessfully equipped, and false otherwise.
     */
  }, {
    key: "equip",
    value: function equip(thing, slot) {
      if (Array.isArray(thing)) {
        if (slot !== undefined) return this.equipFirst(thing, slot);
        return thing.every(val => this.equip(val));
      }
      if (thing instanceof kolmafia.Item) return this.equipItem(thing, slot);
      if (thing instanceof kolmafia.Familiar) return this.equipFamiliar(thing);
      if (thing instanceof Outfit) return this.equipSpec(thing.spec());
      return this.equipSpec(thing);
    }
  }, {
    key: "equipRider",
    value:
    /**
     * Add a rider to the outfit.
     *
     * This function does *not* equip the corresponding item; it must be equipped separately.
     *
     * If a familiar is already specified as the rider that is different from the provided target, this function will return false and not change the rider.
     * @param target The familiar to use as the rider, or a ranked list of familiars to try to use as the rider.
     * @returns True if we successfully set the slot to a valid rider.
     */
    function equipRider(target, slot) {
      var current = this.riders.get(slot);
      var targets = Array.isArray(target) ? target : [target];
      if (current) {
        return targets.includes(current);
      }
      // Gather the set of riders that are equipped in other rider slots.
      var otherRiders = _toConsumableArray(this.riders.entries()).filter(_ref => {
        var _ref2 = _slicedToArray(_ref, 1),
          key = _ref2[0];
        return slot !== key;
      }).map(_ref3 => {
        var _ref4 = _slicedToArray(_ref3, 2),
          value = _ref4[1];
        return value;
      });
      var fam = targets.find(f => have$1(f) && this.familiar !== f && !otherRiders.includes(f));
      if (fam) {
        this.riders.set(slot, fam);
        return true;
      }
      return false;
    }
    /**
     * Add a bjornified familiar to the outfit.
     *
     * This function does *not* equip the buddy bjorn itself; it must be equipped separately.
     *
     * If a familiar is already specified for the buddy bjorn that is different from the provided target, this function will return false and not change the buddy bjorn.
     * @param target The familiar to bjornify, or a ranked list of familiars to try to bjornify.
     * @returns True if we successfully set the bjorn to a valid target.
     */
  }, {
    key: "bjornify",
    value: function bjornify(target) {
      return this.equipRider(target, $slot(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["buddy-bjorn"]))));
    }
    /**
     * Add anenthroned familiar to the outfit.
     *
     * This function does *not* equip the crown of thrones itself; it must be equipped separately.
     *
     * If a familiar is already specified for the crown of thrones that is different from the provided target, this function will return false and not change the crown of thrones.
     * @param target The familiar to enthrone, or a ranked list of familiars to try to enthrone.
     * @returns True if we successfully set the enthrone to a valid target.
     */
  }, {
    key: "enthrone",
    value: function enthrone(target) {
      return this.equipRider(target, $slot(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["crown-of-thrones"]))));
    }
    /**
     * Set the provided modes for items that may be equipped in the outfit.
     *
     * This function does *not* equip items for the set modes; they must be
     * equipped separately.
     *
     * If a mode is already set for an item that is different from the provided
     * mode, this function will return false and not change the mode for that
     * item. (But other modes might still be changed if they are compatible.)
     *
     * Note that the superhero and instuctions of a retrocape can be set
     * independently (`undefined` is treated as "don't care").
     *
     * @param modes Modes to set in this outfit.
     * @returns True if all modes were sucessfully set, and false otherwise.
     */
  }, {
    key: "setModes",
    value: function setModes(modes) {
      var _a, _b;
      var compatible = true;
      // Check if the new modes are compatible with existing modes
      for (var _i2 = 0, _modeableCommands = modeableCommands; _i2 < _modeableCommands.length; _i2++) {
        var mode = _modeableCommands[_i2];
        if (mode === "retrocape") continue; // checked below
        if (this.modes[mode] && modes[mode] && this.modes[mode] !== modes[mode]) {
          compatible = false;
        }
      }
      // Check if retrocape modes are compatible
      // (Parts that are undefined are compatible with everything)
      if (this.modes["retrocape"] && modes["retrocape"]) {
        if (this.modes["retrocape"][0] && modes["retrocape"][0] && this.modes["retrocape"][0] !== modes["retrocape"][0]) {
          compatible = false;
        }
        if (this.modes["retrocape"][1] && modes["retrocape"][1] && this.modes["retrocape"][1] !== modes["retrocape"][1]) {
          compatible = false;
        }
        this.modes["retrocape"][0] = (_a = this.modes["retrocape"][0]) !== null && _a !== void 0 ? _a : modes["retrocape"][0];
        this.modes["retrocape"][1] = (_b = this.modes["retrocape"][1]) !== null && _b !== void 0 ? _b : modes["retrocape"][1];
      }
      this.modes = _objectSpread2(_objectSpread2({}, modes), this.modes);
      return compatible;
    }
    /**
     * Check if it is possible to equip a thing to this outfit using .equip().
     *
     * This does not change the current outfit.
     *
     * @param thing The thing to equip.
     * @param slot The slot to equip them.
     * @returns True if this thing can be equipped.
     */
  }, {
    key: "canEquip",
    value: function canEquip(thing, slot) {
      var outfit = this.clone();
      return outfit.equip(thing, slot);
    }
    /**
     * Check if it is possible to equip a thing to this outfit using .equip(); if it is, do so.
     *
     * This does change the current outfit.
     * @param thing The thing to equip.
     * @param slot The slot to equip them.
     * @returns True if this thing was successfully equipped.
     */
  }, {
    key: "tryEquip",
    value: function tryEquip(thing, slot) {
      return this.canEquip(thing, slot) && this.equip(thing, slot);
    }
  }, {
    key: "afterDress",
    value: function afterDress() {
      var _this$postActions;
      (_this$postActions = this.postActions).push.apply(_this$postActions, arguments);
    }
  }, {
    key: "beforeDress",
    value: function beforeDress() {
      var _this$preActions;
      (_this$preActions = this.preActions).push.apply(_this$preActions, arguments);
    }
    /**
     * Equip this outfit.
     */
  }, {
    key: "_dress",
    value: function _dress(refreshed) {
      if (this.familiar) kolmafia.useFamiliar(this.familiar);
      var targetEquipment = Array.from(this.equips.values());
      var usedSlots = new Set();
      // First, we equip non-accessory equipment.
      var nonaccessorySlots = $slots(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["weapon, off-hand, hat, back, shirt, pants, familiar"])));
      var bjorn = this.riders.get($slot(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["buddy-bjorn"]))));
      if (bjorn && (this.equips.get($slot(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["back"])))) === $item(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["Buddy Bjorn"]))) || this.getBonus($item(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["Buddy Bjorn"])))))) {
        usedSlots.add($slot(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["buddy-bjorn"]))));
        usedSlots.add($slot(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["crown-of-thrones"]))));
      }
      var crown = this.riders.get($slot(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["crown-of-thrones"]))));
      if (crown && (this.equips.get($slot(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["hat"])))) === $item(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["Crown of Thrones"]))) || this.getBonus($item(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["Crown of Thrones"])))))) {
        usedSlots.add($slot(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["buddy-bjorn"]))));
        usedSlots.add($slot(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["crown-of-thrones"]))));
      }
      // Then, we remove existing equipment only when it would block the new outfit:
      // 1. An existing 2-handed weapon would block offhands
      if (weaponHands(kolmafia.equippedItem($slot(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["weapon"]))))) !== 1 && this.equips.has($slot(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["offhand"])))) && !this.equips.has($slot(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["weapon"]))))) kolmafia.equip($slot(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["weapon"]))), $item.none);
      // 2. An existing dual-fisted ranged weapon would block melee weapons.
      if (!weaponsCompatible(this.equips.get($slot(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["weapon"])))), kolmafia.equippedItem($slot(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["off-hand"])))))) kolmafia.equip($slot(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["off-hand"]))), $item.none);
      // 3. Equipment that will be used in a different slot than
      // where it is currently equipped, to avoid a mafia issue.
      // Order is anchored here to prevent DFSS shenanigans
      var _iterator3 = _createForOfIteratorHelper(nonaccessorySlots),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var slot = _step3.value;
          if (targetEquipment.includes(kolmafia.equippedItem(slot)) && this.equips.get(slot) !== kolmafia.equippedItem(slot) || this.avoid.includes(kolmafia.equippedItem(slot))) kolmafia.equip(slot, $item.none);
        }
        // Then we equip all the non-accessory equipment.
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = _createForOfIteratorHelper(nonaccessorySlots),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _slot = _step4.value;
          var equipment = this.equips.get(_slot);
          if (equipment) {
            kolmafia.equip(_slot, equipment);
            usedSlots.add(_slot);
          }
        }
        // Next, we equip accessories
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      var accessorySlots = $slots(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["acc1, acc2, acc3"])));
      var accessoryEquips = accessorySlots.map(slot => this.equips.get(slot)).filter(item => item !== undefined);
      // To plan how to equip accessories, first check which accessories are
      // already equipped in some accessory slot. There is no need to move them,
      // since KoL doesn't care what order accessories are equipped in.
      var missingAccessories = []; // accessories that are not already equipped
      var _iterator5 = _createForOfIteratorHelper(accessoryEquips),
        _step5;
      try {
        var _loop = function _loop() {
          var accessory = _step5.value;
          var alreadyEquipped = accessorySlots.find(slot => !usedSlots.has(slot) && kolmafia.equippedItem(slot) === accessory);
          if (alreadyEquipped) {
            usedSlots.add(alreadyEquipped);
          } else {
            missingAccessories.push(accessory);
          }
        };
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          _loop();
        }
        // Then, for all accessories that are not currently equipped, use the first
        // open slot to place them.
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      for (var _i3 = 0, _missingAccessories = missingAccessories; _i3 < _missingAccessories.length; _i3++) {
        var accessory = _missingAccessories[_i3];
        var unusedSlot = accessorySlots.find(slot => !usedSlots.has(slot));
        if (unusedSlot === undefined) {
          // This should only occur if there is a bug in .dress()
          throw "No accessory slots remaining";
        }
        kolmafia.equip(unusedSlot, accessory);
        usedSlots.add(unusedSlot);
      }
      // Remaining slots are filled by the maximizer
      var modes = convertToLibramModes(this.modes);
      if (this.modifier.length > 0 || _toConsumableArray(this.bonuses).filter(_ref5 => {
        var _ref6 = _slicedToArray(_ref5, 2),
          value = _ref6[1];
        return value;
      }).length > 0) {
        var allRequirements = [new Requirement(this.modifier, {
          preventSlot: _toConsumableArray(usedSlots),
          preventEquip: this.avoid,
          modes: modes,
          bonusEquip: this.bonuses
        })];
        if (refreshed) allRequirements.push(FORCE_REFRESH_REQUIREMENT);
        if (!Requirement.merge(allRequirements).maximize()) {
          if (!refreshed) {
            kolmafia.cliExecute("refresh inventory");
            this._dress(true);
            return;
          } else throw new Error("Failed to maximize properly!");
        }
        kolmafia.logprint("Maximize: ".concat(this.modifier));
      }
      // Set the modes of any equipped items.
      applyModes(modes);
      // Handle the rider slots next
      if (bjorn && kolmafia.haveEquipped($item(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["Buddy Bjorn"]))))) {
        if (kolmafia.myEnthronedFamiliar() === bjorn) kolmafia.enthroneFamiliar($familiar.none);
        if (kolmafia.myBjornedFamiliar() !== bjorn) kolmafia.bjornifyFamiliar(bjorn);
      }
      if (crown && kolmafia.haveEquipped($item(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["Crown of Thrones"]))))) {
        if (kolmafia.myBjornedFamiliar() === crown) kolmafia.bjornifyFamiliar($familiar.none);
        if (kolmafia.myEnthronedFamiliar() !== crown) kolmafia.enthroneFamiliar(crown);
      }
      // Verify that all equipment was indeed equipped
      if (this.familiar !== undefined && kolmafia.myFamiliar() !== this.familiar) throw "Failed to fully dress (expected: familiar ".concat(this.familiar, ")");
      var _iterator6 = _createForOfIteratorHelper(nonaccessorySlots),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _slot2 = _step6.value;
          if (this.equips.has(_slot2) && kolmafia.equippedItem(_slot2) !== this.equips.get(_slot2)) {
            throw "Failed to fully dress (expected: ".concat(_slot2, " ").concat(this.equips.get(_slot2), ")");
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      var _iterator7 = _createForOfIteratorHelper(accessoryEquips),
        _step7;
      try {
        var _loop2 = function _loop2() {
          var accessory = _step7.value;
          if (kolmafia.equippedAmount(accessory) < accessoryEquips.filter(acc => acc === accessory).length) {
            throw "Failed to fully dress (expected: acc ".concat(accessory, ")");
          }
        };
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      for (var _i4 = 0, _arr = [[$slot(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["buddy-bjorn"]))), $item(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["Buddy Bjorn"]))), kolmafia.myBjornedFamiliar], [$slot(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["crown-of-thrones"]))), $item(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["Crown of Thrones"]))), kolmafia.myEnthronedFamiliar]]; _i4 < _arr.length; _i4++) {
        var _arr$_i = _slicedToArray(_arr[_i4], 3),
          rider = _arr$_i[0],
          throne = _arr$_i[1],
          checkingFunction = _arr$_i[2];
        var wanted = this.riders.get(rider);
        if (_toConsumableArray(this.equips.values()).includes(throne) && wanted && checkingFunction() !== wanted) {
          throw "Failed to fully dress: (expected ".concat(rider, " ").concat(wanted, ")");
        }
      }
    }
  }, {
    key: "dress",
    value: function dress() {
      var _iterator8 = _createForOfIteratorHelper(this.preActions),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var action = _step8.value;
          action();
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      this._dress(false);
      var _iterator9 = _createForOfIteratorHelper(this.postActions),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var _action = _step9.value;
          _action();
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
    /**
     * Build an Outfit identical to this outfit.
     */
  }, {
    key: "clone",
    value: function clone() {
      var result = new Outfit();
      result.equips = new Map(this.equips);
      result.skipDefaults = this.skipDefaults;
      result.familiar = this.familiar;
      result.modifier = _toConsumableArray(this.modifier);
      result.avoid = _toConsumableArray(this.avoid);
      result.modes = _objectSpread2({}, this.modes);
      result.riders = new Map(this.riders);
      result.bonuses = new Map(this.bonuses);
      result.beforeDress.apply(result, _toConsumableArray(this.preActions));
      result.afterDress.apply(result, _toConsumableArray(this.postActions));
      return result;
    }
    /**
     * Build an OutfitSpec identical to this outfit.
     */
  }, {
    key: "spec",
    value: function spec() {
      var _a;
      var result = {
        modifier: _toConsumableArray(this.modifier),
        avoid: _toConsumableArray(this.avoid),
        skipDefaults: this.skipDefaults,
        modes: _objectSpread2({}, this.modes),
        bonuses: new Map(this.bonuses)
      };
      if (this.familiar) result.familiar = this.familiar;
      // Add all equipment forced in a particular slot
      for (var _i5 = 0, _outfitSlots2 = outfitSlots; _i5 < _outfitSlots2.length; _i5++) {
        var slotName = _outfitSlots2[_i5];
        var entry = this.equips.get((_a = new Map([["famequip", $slot(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : kolmafia.toSlot(slotName));
        if (entry) result[slotName] = entry;
      }
      // Include the riders
      var riders = {};
      var buddyRider = this.riders.get($slot(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["buddy-bjorn"]))));
      if (buddyRider !== undefined) riders["buddy-bjorn"] = buddyRider;
      var throneRider = this.riders.get($slot(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["crown-of-thrones"]))));
      if (throneRider !== undefined) riders["crown-of-thrones"] = throneRider;
      if (buddyRider !== undefined || throneRider !== undefined) result.riders = riders;
      if (this.preActions.length) result.beforeDress = this.preActions;
      if (this.postActions.length) result.afterDress = this.postActions;
      return result;
    }
  }], [{
    key: "current",
    value: function current() {
      var _a;
      var outfit = new Outfit();
      var familiar = kolmafia.myFamiliar();
      if (outfit.equip(familiar)) {
        throw "Failed to create outfit from current state (expected: familiar ".concat(familiar, ")");
      }
      for (var _i6 = 0, _outfitSlots3 = outfitSlots; _i6 < _outfitSlots3.length; _i6++) {
        var slotName = _outfitSlots3[_i6];
        var slot = (_a = new Map([["famequip", $slot(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : kolmafia.toSlot(slotName);
        var item = kolmafia.equippedItem(slot);
        if (!outfit.equip(item, slot)) {
          throw "Failed to create outfit from current state (expected: ".concat(slot, " ").concat(item, ")");
        }
      }
      if (kolmafia.haveEquipped($item(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["Crown of Thrones"]))))) outfit.riders.set($slot(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["crown-of-thrones"]))), kolmafia.myEnthronedFamiliar());
      if (kolmafia.haveEquipped($item(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["Buddy Bjorn"]))))) outfit.riders.set($slot(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["buddy-bjorn"]))), kolmafia.myBjornedFamiliar());
      outfit.setModes(getCurrentModes());
      return outfit;
    }
  }, {
    key: "from",
    value: function from(spec) {
      var error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var _a;
      var outfit = new Outfit();
      if (spec instanceof Requirement) {
        var result = {};
        result.modifier = spec.maximizeParameters;
        if ((_a = spec.maximizeOptions.forceEquip) === null || _a === void 0 ? void 0 : _a.length) {
          result.equip = spec.maximizeOptions.forceEquip;
        }
        result.avoid = spec.maximizeOptions.preventEquip;
        result.bonuses = spec.maximizeOptions.bonusEquip;
        if (spec.maximizeOptions.modes) {
          result.modes = convertFromLibramModes(spec.maximizeOptions.modes);
        }
        // Not sure if this is necessary
        var cleanedResult = Object.fromEntries(_toConsumableArray(Object.entries(result)).filter(_ref7 => {
          var _ref8 = _slicedToArray(_ref7, 2),
            v = _ref8[1];
          return v !== undefined;
        }));
        return Outfit.from(cleanedResult);
      }
      var success = outfit.equip(spec);
      if (!success && error) throw error;
      return success ? outfit : null;
    }
  }]);
}();
/**
 * Get the modes of this outfit in a type compatible with Libram.
 *
 * This conversion is needed since we store the retrocape modes
 * internally as an array, but libram uses a string.
 *
 * @returns The modes equipped to this outfit.
 */
function convertToLibramModes(modes) {
  var _a;
  return {
    backupcamera: modes["backupcamera"],
    umbrella: modes["umbrella"],
    snowsuit: modes["snowsuit"],
    edpiece: modes["edpiece"],
    retrocape: (_a = modes["retrocape"]) === null || _a === void 0 ? void 0 : _a.filter(s => s !== undefined).join(" "),
    parka: modes["parka"],
    jillcandle: modes["jillcandle"]
  };
}
function convertFromLibramModes(modes) {
  return modes.retrocape ? _objectSpread2(_objectSpread2({}, modes), {}, {
    retrocape: modes.retrocape.split(" ")
  }) : modes;
}
/**
 * Get the current modes of all items.
 *
 * @returns The current mode settings for all items, equipped or not.
 */
function getCurrentModes() {
  return {
    backupcamera: getMode("backupCameraMode", ["ml", "meat", "init"]),
    umbrella: getMode("umbrellaState", ["broken", "forward-facing", "bucket style", "pitchfork style", "constantly twirling", "cocoon"]),
    snowsuit: getMode("snowsuit", ["eyebrows", "smirk", "nose", "goatee", "hat"]),
    edpiece: getMode("edPiece", ["bear", "owl", "puma", "hyena", "mouse", "weasel", "fish"]),
    retrocape: [getMode("retroCapeSuperhero", ["vampire", "heck", "robot"]), getMode("retroCapeWashingInstructions", ["hold", "thrill", "kiss", "kill"])],
    parka: getMode("parkaMode", ["kachungasaur", "dilophosaur", "ghostasaurus", "spikolodon", "pterodactyl"]),
    jillcandle: getMode("jillcandle", ["disco", "ultraviolet", "reading", "red"])
  };
}
/**
 * Get the current value for a mode in a type-safe way.
 *
 * @param property The mafia property for the mode.
 * @param options A typed list of options for the mode.
 * @returns The mode if the property value matched a valid option, or undefined.
 */
function getMode(property, options) {
  var val = get(property, "");
  return options.find(s => s === val); // .includes has type issues
}
/**
 * Returns true if the provided weapons are compatible for dual-wielding.
 * (Ranged weapons cannot be equipped alongside melee/myst weapons).
 */
function weaponsCompatible(weapon, offhand) {
  if (!weapon || weapon === $item(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["none"])))) return true;
  if (!offhand || offhand === $item(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["none"])))) return true;
  if (kolmafia.toSlot(offhand) !== $slot(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["weapon"])))) return true;
  var weaponStat = kolmafia.weaponType(weapon);
  var offhandStat = kolmafia.weaponType(offhand);
  if (weaponStat === $stat(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["Moxie"]))) && (offhandStat === $stat(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["Mysticality"]))) || offhandStat === $stat(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["Muscle"]))))) return false;
  if (offhandStat === $stat(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["Moxie"]))) && (weaponStat === $stat(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["Mysticality"]))) || weaponStat === $stat(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["Muscle"]))))) return false;
  return true;
}

var _templateObject$1;
var grimoireCCS = "grimoire_macro";
/**
 * An Engine which allows for custom engine state. Most beginning users should
 * use the Engine class instead.
 */
var ContextualEngine = /*#__PURE__*/function () {
  /**
   * Create the engine.
   * @param tasks A list of tasks for looking up task dependencies.
   * @param options Basic configuration of the engine.
   */
  function ContextualEngine(tasks, options) {
    _classCallCheck(this, ContextualEngine);
    this.attempts = {};
    this.propertyManager = new PropertiesManager();
    this.tasks_by_name = new Map();
    this.cachedCcsContents = "";
    this.options = options !== null && options !== void 0 ? options : {};
    this.tasks = tasks.map(task => _objectSpread2(_objectSpread2({}, this.options.default_task_options), task));
    var _iterator = _createForOfIteratorHelper(this.tasks),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var task = _step.value;
        this.tasks_by_name.set(task.name, task);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    this.initPropertiesManager(this.propertyManager);
  }
  /**
   * Determine the next task to perform.
   * By default, this is the first task in the task list that is available.
   * @returns The next task to perform, or undefined if no tasks are available.
   */
  return _createClass(ContextualEngine, [{
    key: "getNextTask",
    value: function getNextTask() {
      return this.tasks.find(task => this.available(task));
    }
    /**
     * Continually get the next task and execute it.
     * @param actions If given, only perform up to this many tasks.
     */
  }, {
    key: "run",
    value: function run(actions) {
      for (var i = 0; i < (actions !== null && actions !== void 0 ? actions : Infinity); i++) {
        var task = this.getNextTask();
        if (!task) return;
        this.execute(task);
      }
    }
    /**
     * Close the engine and reset all properties.
     * After this has been called, this object should not be used.
     */
  }, {
    key: "destruct",
    value: function destruct() {
      this.propertyManager.resetAll();
      kolmafia.setAutoAttack(0);
    }
    /**
     * Check if the given task is available at this moment.
     * @param task: The task to check.
     * @returns true if all dependencies are complete and the task is ready.
     *  Note that dependencies are not checked transitively. That is, if
     *  A depends on B which depends on C, then A is ready if B is complete
     *  (regardless of if C is complete or not).
     */
  }, {
    key: "available",
    value: function available(task) {
      var _a, _b;
      if (((_a = task.limit) === null || _a === void 0 ? void 0 : _a.skip) !== undefined && this.attempts[task.name] >= task.limit.skip) return false;
      var _iterator2 = _createForOfIteratorHelper((_b = task.after) !== null && _b !== void 0 ? _b : []),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var after = _step2.value;
          var after_task = this.tasks_by_name.get(after);
          if (after_task === undefined) throw "Unknown task dependency ".concat(after, " on ").concat(task.name);
          if (!after_task.completed(this.getContext(task))) return false;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if (task.ready && !task.ready(this.getContext(task))) return false;
      if (task.completed(this.getContext(task))) return false;
      return true;
    }
    /**
     * Perform all steps to execute the provided task.
     * This is the main entry point for the Engine.
     * @param task The current executing task.
     */
  }, {
    key: "execute",
    value: function execute(task) {
      var _a, _b, _c, _d, _e;
      this.printExecutingMessage(task);
      // Determine the proper postcondition for after the task executes.
      var postcondition = (_b = (_a = task.limit) === null || _a === void 0 ? void 0 : _a.guard) === null || _b === void 0 ? void 0 : _b.call(_a, this.getContext(task));
      // Acquire any items and effects first, possibly for later execution steps.
      this.acquireItems(task);
      this.acquireEffects(task);
      // Prepare the outfit, with resources.
      var task_combat = (_d = (_c = task.combat) === null || _c === void 0 ? void 0 : _c.clone()) !== null && _d !== void 0 ? _d : new CombatStrategy();
      var outfit = this.createOutfit(task);
      var task_resources = new CombatResources();
      this.customize(task, outfit, task_combat, task_resources);
      this.dress(task, outfit);
      // Prepare combat and choices
      this.setCombat(task, task_combat, task_resources);
      this.setChoices(task, this.propertyManager);
      // Actually perform the task
      var _iterator3 = _createForOfIteratorHelper(task_resources.all()),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var resource = _step3.value;
          (_e = resource.prepare) === null || _e === void 0 ? void 0 : _e.call(resource, this.getContext(task));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      this.prepare(task);
      this.do(task);
      while (this.shouldRepeatAdv(task)) {
        _set("lastEncounter", "");
        this.do(task);
      }
      this.post(task);
      // Mark that we tried the task, and apply limits
      this.markAttempt(task);
      this.checkLimits(task, postcondition);
    }
    /**
     * Print a message to indicate the task has begun.
     * @param task The current executing task.
     */
  }, {
    key: "printExecutingMessage",
    value: function printExecutingMessage(task) {
      kolmafia.print("");
      kolmafia.print("Executing ".concat(task.name), "blue");
    }
    /**
     * Acquire all items for the task.
     * @param task The current executing task.
     */
  }, {
    key: "acquireItems",
    value: function acquireItems(task) {
      var _a;
      var acquire = undelay(task.acquire, this.getContext(task));
      var _iterator4 = _createForOfIteratorHelper(acquire || []),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var to_get = _step4.value;
          var num_needed = (_a = to_get.num) !== null && _a !== void 0 ? _a : 1;
          var num_have = kolmafia.itemAmount(to_get.item) + kolmafia.equippedAmount(to_get.item);
          if (num_needed <= num_have) continue;
          if (to_get.useful !== undefined && !to_get.useful()) continue;
          if (to_get.get) {
            to_get.get();
          } else if (to_get.price !== undefined) {
            kolmafia.buy(to_get.item, num_needed - num_have, to_get.price);
          } else if (Object.keys(kolmafia.getRelated(to_get.item, "fold")).length > 0) {
            kolmafia.cliExecute("fold ".concat(to_get.item));
          } else {
            kolmafia.retrieveItem(to_get.item, num_needed);
          }
          if (kolmafia.itemAmount(to_get.item) + kolmafia.equippedAmount(to_get.item) < num_needed && !to_get.optional) {
            throw "Task ".concat(task.name, " was unable to acquire ").concat(num_needed, " ").concat(to_get.item);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
    /**
     * Acquire all effects for the task.
     * @param task The current executing task.
     */
  }, {
    key: "acquireEffects",
    value: function acquireEffects(task) {
      var _a;
      var effects = (_a = undelay(task.effects, this.getContext(task))) !== null && _a !== void 0 ? _a : [];
      var songs = effects.filter(effect => isSong(effect));
      if (songs.length > maxSongs()) throw "Too many AT songs";
      var extraSongs = Object.keys(kolmafia.myEffects()).map(effectName => kolmafia.toEffect(effectName)).filter(effect => isSong(effect) && !songs.includes(effect));
      while (songs.length + extraSongs.length > maxSongs()) {
        var toRemove = extraSongs.pop();
        if (toRemove === undefined) {
          break;
        } else {
          uneffect(toRemove);
        }
      }
      var _iterator5 = _createForOfIteratorHelper(effects),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var effect = _step5.value;
          ensureEffect(effect);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
    /**
     * Create an outfit for the task with all required equipment.
     * @param task The current executing task.
     */
  }, {
    key: "createOutfit",
    value: function createOutfit(task) {
      var spec = undelay(task.outfit, this.getContext(task));
      if (spec instanceof Outfit) return spec.clone();
      var outfit = new Outfit();
      if (spec !== undefined) {
        if (!outfit.equip(spec) && !this.options.allow_partial_outfits) {
          throw "Unable to equip all items for ".concat(task.name);
        }
      }
      return outfit;
    }
    /**
     * Equip the outfit for the task.
     * @param task The current executing task.
     * @param outfit The outfit for the task, possibly augmented by the engine.
     */
  }, {
    key: "dress",
    value: function dress(task, outfit) {
      if (task.do instanceof kolmafia.Location) kolmafia.setLocation(task.do);
      outfit.dress();
    }
    /* eslint-disable @typescript-eslint/no-unused-vars */
    /**
     * Perform any engine-specific customization for the outfit and combat plan.
     *
     * This is a natural method to override in order to:
     *   * Enable the use of any resources in the outfit or combat (e.g., allocate banishers).
     *   * Equip a default outfit.
     *   * Determine additional monster macros at a global level (e.g., use flyers).
     * @param task The current executing task.
     * @param outfit The outfit for the task.
     * @param combat The combat strategy so far for the task.
     * @param resources The combat resources assigned so far for the task.
     */
  }, {
    key: "customize",
    value: function customize(task, outfit, combat, resources) {
      // do nothing by default
    }
    /* eslint-enable @typescript-eslint/no-unused-vars */
    /**
     * Set the choice settings for the task.
     * @param task The current executing task.
     * @param manager The property manager to use.
     */
  }, {
    key: "setChoices",
    value: function setChoices(task, manager) {
      var _a;
      for (var _i = 0, _Object$entries = Object.entries(undelay((_a = task.choices) !== null && _a !== void 0 ? _a : {}, this.getContext(task))); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        if (value === undefined) continue;
        manager.setChoice(parseInt(key), value);
      }
    }
    /**
     * Save the combat macro for this task.
     * @param task The current executing task.
     * @param task_combat The completed combat strategy far for the task.
     * @param task_resources The combat resources assigned for the task.
     */
  }, {
    key: "setCombat",
    value: function setCombat(task, task_combat, task_resources) {
      var _a;
      // Save regular combat macro
      var macro = task_combat.compile(task_resources, (_a = this.options) === null || _a === void 0 ? void 0 : _a.combat_defaults, task.do instanceof kolmafia.Location ? task.do : undefined, this.getContext(task));
      macro.save();
      if (!this.options.ccs) {
        // Use the macro through a CCS file
        var otherCCSEntries = task_combat.compileCcs();
        var ccsContents = ["[default]", "\"".concat(macro.toString(), "\"")].concat(_toConsumableArray(otherCCSEntries)).join("\n");
        // Log Macro + other CCS
        kolmafia.logprint("CCS: ".concat(ccsContents.replace("\n", "\\n ")));
        if (ccsContents !== this.cachedCcsContents) {
          kolmafia.writeCcs(ccsContents, grimoireCCS);
          kolmafia.cliExecute("ccs ".concat(grimoireCCS)); // force Mafia to reparse the ccs
          this.cachedCcsContents = ccsContents;
        }
      }
      // Save autoattack combat macro
      var autoattack = task_combat.compileAutoattack(this.getContext(task));
      if (autoattack.toString().length > 1) {
        kolmafia.logprint("Autoattack macro: ".concat(autoattack.toString()));
        autoattack.setAutoAttack();
      } else {
        kolmafia.setAutoAttack(0);
      }
    }
    /**
     * Do any task-specific preparation.
     * @param task The current executing task.
     */
  }, {
    key: "prepare",
    value: function prepare(task) {
      var _a;
      (_a = task.prepare) === null || _a === void 0 ? void 0 : _a.call(task, this.getContext(task));
    }
    /**
     * Actually perform the task.
     * @param task The current executing task.
     */
  }, {
    key: "do",
    value: function _do(task) {
      var result = typeof task.do === "function" ? task.do(this.getContext(task)) : task.do;
      if (result instanceof kolmafia.Location) kolmafia.adv1(result, -1, "");
      kolmafia.runCombat();
      while (kolmafia.inMultiFight()) kolmafia.runCombat();
      if (kolmafia.choiceFollowsFight()) kolmafia.runChoice(-1);
    }
    /**
     * Check if the task.do should be immediately repeated without any prep.
     *
     * By default, this is only used to repeat a task if we hit one of:
     *   1. Halloweener dog noncombats,
     *   2. June cleaver noncombats,
     *   3. Lil' Doctor™ bag noncombat, or
     *   4. Turtle taming noncombats.
     * @param task The current executing task.
     * @returns True if the task should be immediately repeated.
     */
  }, {
    key: "shouldRepeatAdv",
    value: function shouldRepeatAdv(task) {
      return task.do instanceof kolmafia.Location && lastEncounterWasWanderingNC();
    }
    /**
     * Do any task-specific wrapup activities.
     * @param task The current executing task.
     */
  }, {
    key: "post",
    value: function post(task) {
      var _a;
      (_a = task.post) === null || _a === void 0 ? void 0 : _a.call(task, this.getContext(task));
    }
    /**
     * Mark that an attempt was made on the current task.
     * @param task The current executing task.
     */
  }, {
    key: "markAttempt",
    value: function markAttempt(task) {
      if (!(task.name in this.attempts)) this.attempts[task.name] = 0;
      this.attempts[task.name]++;
    }
    /**
     * Check if the task has passed any of its internal limits.
     * @param task The task to check.
     * @param postcondition The postcondition from the task guard.
     * @throws An error if any of the internal limits have been passed.
     */
  }, {
    key: "checkLimits",
    value: function checkLimits(task, postcondition) {
      var _a;
      if (!task.limit) return;
      var failureMessage = task.limit.message ? " ".concat(task.limit.message) : "";
      if (!task.completed(this.getContext(task))) {
        if (task.limit.tries && this.attempts[task.name] >= task.limit.tries) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.tries, " attempts. Please check what went wrong.").concat(failureMessage);
        if (task.limit.soft && this.attempts[task.name] >= task.limit.soft) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.soft, " attempts. Please check what went wrong (you may just be unlucky).").concat(failureMessage);
        if (task.limit.turns && task.do instanceof kolmafia.Location && task.do.turnsSpent >= task.limit.turns) throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.turns, " turns. Please check what went wrong.").concat(failureMessage);
        if (task.limit.unready && ((_a = task.ready) === null || _a === void 0 ? void 0 : _a.call(task, this.getContext(task)))) throw "Task ".concat(task.name, " is still ready, but it should not be. Please check what went wrong.").concat(failureMessage);
        if (task.limit.completed) throw "Task ".concat(task.name, " is not completed, but it should be. Please check what went wrong.").concat(failureMessage);
      }
      if (postcondition && !postcondition()) {
        throw "Task ".concat(task.name, " failed its guard. Please check what went wrong.").concat(failureMessage);
      }
    }
  }, {
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return this.constructor.defaultSettings;
    }
    /**
     * Initialize properties for the script.
     * @param manager The properties manager to use.
     */
  }, {
    key: "initPropertiesManager",
    value: function initPropertiesManager(manager) {
      var _a;
      // Properties adapted from garbo
      manager.set(this.getDefaultSettings());
      if (this.options.ccs !== "") {
        if (this.options.ccs === undefined && kolmafia.readCcs(grimoireCCS) === "") {
          // Write a simple CCS so we can switch to it
          kolmafia.writeCcs("[ default ]\nabort", grimoireCCS);
        }
        manager.set({
          customCombatScript: (_a = this.options.ccs) !== null && _a !== void 0 ? _a : grimoireCCS
        });
      }
    }
  }]);
}();
ContextualEngine.defaultSettings = {
  logPreferenceChange: true,
  logPreferenceChangeFilter: _toConsumableArray(new Set([].concat(_toConsumableArray(get("logPreferenceChangeFilter").split(",")), ["libram_savedMacro", "maximizerMRUList", "testudinalTeachings", "_lastCombatStarted"]))).sort().filter(a => a).join(","),
  battleAction: "custom combat script",
  autoSatisfyWithMall: true,
  autoSatisfyWithNPCs: true,
  autoSatisfyWithCoinmasters: true,
  autoSatisfyWithStash: false,
  dontStopForCounters: true,
  maximizerFoldables: true,
  hpAutoRecovery: "-0.05",
  hpAutoRecoveryTarget: "0.0",
  mpAutoRecovery: "-0.05",
  mpAutoRecoveryTarget: "0.0",
  afterAdventureScript: "",
  betweenBattleScript: "",
  choiceAdventureScript: "",
  familiarScript: "",
  currentMood: "apathetic",
  autoTuxedo: true,
  autoPinkyRing: true,
  autoGarish: true,
  allowNonMoodBurning: false,
  allowSummonBurning: true,
  libramSkillsSoftcore: "none"
};
function maxSongs() {
  return have$1($skill(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["Mariachi Memory"])))) ? 4 : 3;
}
var wanderingNCs = new Set([
// Halloweener dog noncombats
"Wooof! Wooooooof!", "Playing Fetch*",
// June cleaver noncombats
"Aunts not Ants", "Bath Time", "Beware of Aligator", "Delicious Sprouts", "Hypnotic Master", "Lost and Found", "Poetic Justice", "Summer Days", "Teacher's Pet",
// Lil' Doctor™ bag noncombat
"A Pound of Cure"]);
var environmentSpecificNCs = new Map([["Even Tamer Than Usual", "indoor"], ["Never Break the Chain", "indoor"], ["Close, but Yes Cigar", "indoor"], ["Armchair Quarterback", "indoor"], ["This Turtle Rocks!", "outdoor"], ["Really Sticking Her Neck Out", "outdoor"], ["It Came from Beneath the Sewer? Great!", "outdoor"], ["Don't Be Alarmed, Now", "outdoor"], ["Puttin' it on Wax", "underground"], ["More Like... Hurtle", "underground"], ["Musk! Musk! Musk!", "underground"], ["Silent Strolling", "underwater"]]);
var zoneSpecificNCs = new Map(Object.entries(kolmafia.fileToBuffer("data/encounters.txt").split("\n").reduce((obj, line) => {
  var _a;
  var _line$split = line.split("\t"),
    _line$split2 = _slicedToArray(_line$split, 3),
    location = _line$split2[0],
    type = _line$split2[1],
    name = _line$split2[2];
  if (type !== "TURTLE" || location === "*") return obj;
  return _objectSpread2(_objectSpread2({}, obj), {}, {
    [name]: [].concat(_toConsumableArray((_a = obj[name]) !== null && _a !== void 0 ? _a : []), [kolmafia.toLocation(location)])
  });
}, {})));
/**
 * Return true if the last adv was one of:
 *   1. Halloweener dog noncombats,
 *   2. June cleaver noncombats,
 *   3. Lil' Doctor™ bag noncombat, or
 *   4. Turtle taming noncombats.
 */
function lastEncounterWasWanderingNC() {
  var _a, _b, _c;
  var last = get("lastEncounter");
  if (zoneSpecificNCs.has(last)) {
    // Handle NCs with a duplicated name
    var zones = (_a = zoneSpecificNCs.get(last)) !== null && _a !== void 0 ? _a : [];
    return zones.includes((_b = get("lastAdventure")) !== null && _b !== void 0 ? _b : $location.none);
  } else {
    var environment = environmentSpecificNCs.get(last);
    if (environment === ((_c = get("lastAdventure")) === null || _c === void 0 ? void 0 : _c.environment)) return true;
    return wanderingNCs.has(last);
  }
}

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0, _templateObject1, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22;
var args = Args.create("phccs_gash", "This script is designed to help you hop the astral gash in a way that makes phccs run well. It will also ensure that you have some of the more specific requirements necessary to run phccs.", {
  softcore: Args.flag({
    setting: "phccs_softcore",
    help: "Ascend into softcore",
    default: false
  }),
  class: Args.class({
    setting: "phccs_class",
    help: "What class should we ascend as?",
    default: $class(_templateObject || (_templateObject = _taggedTemplateLiteral(["Pastamancer"])))
  }),
  ignorewarnings: Args.flag({
    setting: "phccs_ignoreGashWarnings",
    help: "Don't warn you when you are making a huge mistake",
    default: false
  }),
  skipperms: Args.flag({
    setting: "phccs_skipPerms",
    help: "Don't try to perm any skills",
    default: false
  })
});
var byAscendingStat = makeByXFunction(() => args.class.primestat.toString());
var bootRequirement = skin => ({
  name: "Cowboy Boots: ".concat(skin),
  meets: () => {
    if (!have$1($item(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["your cowboy boots"]))))) {
      kolmafia.visitUrl("place.php?whichplace=town_right&action=townright_ltt");
      kolmafia.runChoice(5);
    }
    if (!have$1($item(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["your cowboy boots"]))))) {
      kolmafia.print("You don't have LT&T, a hard requirement!", "red");
      return false;
    }
    return kolmafia.equippedItem($slot(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["bootskin"])))) === skin;
  },
  reason: "we want to crank that mainstat for levelling reasons, so your bootskin must be ".concat(skin)
});
var MAINSTAT_BASED_REQUIREMENTS = {
  Moxie: [{
    name: "Evil Olive in locket",
    meets: () => unlockedLocketMonsters().includes($monster(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["Evil Olive"])))),
    reason: "we need to be able to make equalizer potions!"
  }, {
    name: "Stocking Mimic",
    meets: () => have$1($familiar(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["Stocking Mimic"])))),
    reason: "sweet synthesis is complicated!"
  }, bootRequirement($item(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["mountain lion skin"]))))],
  Muscle: [bootRequirement($item(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["grizzled bearskin"]))))],
  Mysticality: [bootRequirement($item(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["frontwinder skin"]))))]
};
var REGULAR_REQUIREMENTS = [{
  name: "Sapphire-laden codpiece",
  meets: () => have$1($item(_templateObject0 || (_templateObject0 = _taggedTemplateLiteral(["The Eternity Codpiece"])))) && kolmafia.availableAmount($item(_templateObject1 || (_templateObject1 = _taggedTemplateLiteral(["glacial sapphire"])))) + sum($slots(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["codpiece1, codpiece2, codpiece3, codpiece4, codpiece5"]))), slot => Number(kolmafia.equippedItem(slot) === $item(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["glacial sapphire"]))))) >= 5,
  reason: "We use it for leveling!"
}];
function main() {
  var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  Args.fill(args, input);
  if (args.help) {
    Args.showHelp(args);
    return;
  }
  var softcore = args.softcore,
    ignorewarnings = args.ignorewarnings;
  burnSafaris();
  smokeEmIfYouGotEm();
  if (!ignorewarnings) {
    for (var _i = 0, _arr = [].concat(_toConsumableArray(byAscendingStat(MAINSTAT_BASED_REQUIREMENTS)), REGULAR_REQUIREMENTS); _i < _arr.length; _i++) {
      var _arr$_i = _arr[_i],
        name = _arr$_i.name,
        reason = _arr$_i.reason,
        meets = _arr$_i.meets;
      if (!meets() && !kolmafia.userConfirm("We have failed to meet the requirement ".concat(name, " to ascend as a ").concat(args.class, "; this is important because ").concat(reason, ". Are you sure you wish to proceed?"))) {
        kolmafia.abort();
      }
    }
    if (args.softcore) {
      var missingItems = $items(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Stick-Knife of Loathing, Buddy Bjorn"]))).filter(i => !have$1(i));
      if (missingItems.length && !kolmafia.userConfirm("You seem to be missing the following items required to run phccs in softcore: ".concat(missingItems.join(", "), ". Are you sure you wish to proceed?"))) {
        kolmafia.abort();
      }
    }
  }
  var _iterator = _createForOfIteratorHelper($slots(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["codpiece1, codpiece2, codpiece3, codpiece4, codpiece5"])))),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var codslot = _step.value;
      if (kolmafia.equippedItem(codslot) !== $item(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["glacial sapphire"])))) {
        if (!kolmafia.itemAmount($item(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["glacial sapphire"]))))) kolmafia.abort("We don't have enough sapphires!");
        kolmafia.equip(codslot, $item(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["glacial sapphire"]))));
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  prepareAscension({
    garden: "Peppermint Pip Packet",
    eudora: "Our Daily Candles™ order form",
    chateau: {
      desk: "continental juice bar",
      nightstand: byAscendingStat({
        Mysticality: "foreign language tapes",
        Moxie: "bowl of potpourri",
        Muscle: "electric muscle stimulator"
      }),
      ceiling: "ceiling fan"
    }
  });
  var lifestyle = softcore ? Lifestyle.softcore : Lifestyle.hardcore;
  var pet = softcore ? byAscendingStat({
    Mysticality: $item(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["astral chapeau"]))),
    Moxie: $item(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["astral shorts"]))),
    Muscle: $item(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["astral trousers"])))
  }) : $item(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["astral statuette"])));
  kolmafia.visitUrl("council.php");
  ascend({
    path: $path(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["Community Service"]))),
    playerClass: args.class,
    lifestyle,
    moon: "knoll",
    consumable: $item(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["astral six-pack"]))),
    pet,
    permOptions: {
      neverAbort: true,
      permSkills: args.skipperms ? new Map() : getSkillsToPerm()
    }
  });
}

exports.main = main;
