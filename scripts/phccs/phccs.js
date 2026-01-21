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
function _get() {
  return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) {
    var p = _superPropBase(e, t);
    if (p) {
      var n = Object.getOwnPropertyDescriptor(p, t);
      return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value;
    }
  }, _get.apply(null, arguments);
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
function ownKeys$1(e, r) {
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
    r % 2 ? ownKeys$1(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) {
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
function _superPropBase(t, o) {
  for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t)););
  return t;
}
function _superPropGet(t, o, e, r) {
  var p = _get(_getPrototypeOf(t.prototype ), o, e);
  return 2 & r && "function" == typeof p ? function (t) {
    return p.apply(e, t);
  } : p;
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
function _wrapRegExp() {
  _wrapRegExp = function (e, r) {
    return new BabelRegExp(e, void 0, r);
  };
  var e = RegExp.prototype,
    r = new WeakMap();
  function BabelRegExp(e, t, p) {
    var o = RegExp(e, t);
    return r.set(o, p || r.get(e)), _setPrototypeOf(o, BabelRegExp.prototype);
  }
  function buildGroups(e, t) {
    var p = r.get(t);
    return Object.keys(p).reduce(function (r, t) {
      var o = p[t];
      if ("number" == typeof o) r[t] = e[o];else {
        for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length;) i++;
        r[t] = e[o[i]];
      }
      return r;
    }, Object.create(null));
  }
  return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (r) {
    var t = e.exec.call(this, r);
    if (t) {
      t.groups = buildGroups(t, this);
      var p = t.indices;
      p && (p.groups = buildGroups(p, this));
    }
    return t;
  }, BabelRegExp.prototype[Symbol.replace] = function (t, p) {
    if ("string" == typeof p) {
      var o = r.get(this);
      return e[Symbol.replace].call(this, t, p.replace(/\$<([^>]+)(>|$)/g, function (e, r, t) {
        if ("" === t) return e;
        var p = o[r];
        return Array.isArray(p) ? "$" + p.join("$") : "number" == typeof p ? "$" + p : "";
      }));
    }
    if ("function" == typeof p) {
      var i = this;
      return e[Symbol.replace].call(this, t, function () {
        var e = arguments;
        return "object" != typeof e[e.length - 1] && (e = [].slice.call(e)).push(buildGroups(e, i)), p.apply(this, e);
      });
    }
    return e[Symbol.replace].call(this, t, p);
  }, _wrapRegExp.apply(this, arguments);
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
function get$2(property, _default) {
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
    return [prop, get$2(prop)];
  }));
  setProperties(properties);
  try {
    return callback();
  } finally {
    setProperties(propertiesBackup);
  }
}
/**
 * Carries out a callback during which a property will be set as supplied
 *
 * @param property Property to set during callback
 * @param value Value to set property during callback
 * @param callback Callback to execute with set properties
 * @returns Return value of the supplied callback
 */
function withProperty(property, value, callback) {
  return withProperties({
    [property]: value
  }, callback);
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
          this.properties[propertyName] = kolmafia.propertyExists(propertyName) ? get$2(propertyName) : PropertiesManager.EMPTY_PREFERENCE;
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
      if (get$2(property, 0) < value) {
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
      if (get$2(property, 0) > value) {
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
      var start = get$2(property);
      this.setMinimumValue(property, min);
      this.setMaximumValue(property, max);
      return start !== get$2(property);
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
 * Type guard against null value
 *
 * @param value Value that could be null
 * @returns Confirmation that the value is not null
 */
function notNull(value) {
  return value !== null;
}
/**
 * Parse string to number, stripping commas
 *
 * @param n Numberical string to parse
 * @returns Numerical value of string
 */
function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}
/**
 * Clamp a number between lower and upper bounds.
 *
 * @param n Number to clamp.
 * @param min Lower bound.
 * @param max Upper bound.
 * @returns Clamped value
 */
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
/**
 * Count distinct values in an array
 *
 * @param array Array of values
 * @returns Map of distinct values to count
 */
function arrayToCountedMap(array) {
  if (!Array.isArray(array)) return array;
  var map = new Map();
  array.forEach(item => {
    map.set(item, (map.get(item) || 0) + 1);
  });
  return map;
}
/**
 * Turn map of distinct values to count into array of values
 *
 * @param map Map to turn into array
 * @returns Array of values
 */
function countedMapToArray(map) {
  var _ref;
  return (_ref = []).concat.apply(_ref, _toConsumableArray(_toConsumableArray(map).map(_ref2 => {
    var _ref3 = _slicedToArray(_ref2, 2),
      item = _ref3[0],
      quantity = _ref3[1];
    return Array(quantity).fill(item);
  })));
}
/**
 * Stringify a counted map
 *
 * @param map Map of counted values
 * @returns String representing map of counted values
 */
function countedMapToString(map) {
  return _toConsumableArray(map).map(_ref4 => {
    var _ref5 = _slicedToArray(_ref4, 2),
      item = _ref5[0],
      quantity = _ref5[1];
    return "".concat(quantity, " x ").concat(item);
  }).join(", ");
}
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
 * Find the best element of an array, where "best" is defined by some given criteria.
 *
 * @param array The array to traverse and find the best element of.
 * @param optimizer Either a key on the objects we're looking at that corresponds to numerical values, or a function for mapping these objects to numbers. Essentially, some way of assigning value to the elements of the array.
 * @param reverse Make this true to find the worst element of the array, and false to find the best. Defaults to false.
 * @returns Best element by optimizer function
 */
function maxBy(array, optimizer) {
  var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!array.length) throw new Error("Cannot call maxBy on an empty array!");
  if (typeof optimizer === "function") {
    return _toConsumableArray(array).reduce((_ref6, other) => {
      var value = _ref6.value,
        item = _ref6.item;
      var otherValue = optimizer(other);
      return value >= otherValue !== reverse ? {
        value,
        item
      } : {
        value: otherValue,
        item: other
      };
    }, {
      item: array[0],
      value: optimizer(array[0])
    }).item;
  } else {
    return array.reduce((a, b) => a[optimizer] >= b[optimizer] !== reverse ? a : b);
  }
}
/**
 * Compare arrays shallowly
 *
 * @param left One array to compare
 * @param right The other array to compare
 * @returns Whether the two arrays are shallowly equal
 */
function arrayEquals(left, right) {
  if (left.length !== right.length) return false;
  return left.every((element, index) => element === right[index]);
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
var $classes = createPluralConstant(kolmafia.Class);
/**
 * A Coinmaster specified by name.
 *
 * @category In-game constant
 */
var $coinmaster = createSingleConstant(kolmafia.Coinmaster, kolmafia.toCoinmaster);
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
var $effects = createPluralConstant(kolmafia.Effect);
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
var $skills = createPluralConstant(kolmafia.Skill);
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
var $thrall = createSingleConstant(kolmafia.Thrall, kolmafia.toThrall);
/**
 * A list of Thralls specified by a comma-separated list of names.
 * For a list of all possible Thralls, leave the template string blank.
 *
 * @category In-game constant
 */
createPluralConstant(kolmafia.Thrall);

var _templateObject$E, _templateObject10$n, _templateObject11$n, _templateObject12$m, _templateObject13$k, _templateObject14$k, _templateObject15$k, _templateObject16$k, _templateObject17$j, _templateObject18$i, _templateObject19$i, _templateObject20$h, _templateObject21$h, _templateObject22$h, _templateObject23$h, _templateObject24$h, _templateObject25$h, _templateObject26$g, _templateObject27$g, _templateObject28$g, _templateObject29$g, _templateObject30$f, _templateObject31$f, _templateObject32$f, _templateObject33$e, _templateObject34$e, _templateObject35$e, _templateObject47$b, _templateObject48$b, _templateObject49$9, _templateObject50$8, _templateObject51$8, _templateObject52$7, _templateObject53$6;
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
    return skill.class === $class(_templateObject$E || (_templateObject$E = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
  }
}
/**
 * List all active Effects
 *
 * @category General
 * @returns List of Effects
 */
function getActiveEffects() {
  return Object.keys(kolmafia.myEffects()).map(e => kolmafia.Effect.get(e));
}
/**
 * List currently active Accordion Thief songs
 *
 * @category General
 * @returns List of song Effects
 */
function getActiveSongs() {
  return getActiveEffects().filter(isSong);
}
/**
 * Determine whether the player "has" any entity which one could feasibly "have".
 *
 * @category General
 * @param thing Thing to check
 * @param quantity Minimum quantity the player must have to pass
 * @returns Whether the player meets the requirements of owning the supplied thing
 */
function have$c(thing) {
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
var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
/**
 * Determine whether the player has the specified counter
 *
 * @param counterName Name of the counter
 * @param minTurns Minimum turns the counter is set to
 * @param maxTurns Maximum turns the counter is set to
 * @category General
 * @returns Whether player has the counter
 */
function haveCounter(counterName) {
  var minTurns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var maxTurns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
  return kolmafia.getCounters(counterName, minTurns, maxTurns) === counterName;
}
/**
 * Determine whether the player has the specified wanderer's counter
 *
 * @param wanderer Wanderer to check
 * @category Wanderers
 * @returns Whether player has the wanderer counter
 */
function haveWandererCounter(wanderer) {
  if (deterministicWanderers.includes(wanderer)) {
    return haveCounter(wanderer);
  }
  var begin = wanderer + " window begin";
  var end = wanderer + " window end";
  return haveCounter(begin) || haveCounter(end);
}
/**
 * Determines the chance the player will encounter a sausage goblin on the
 * next turn, providing the Kramco Sausage-o-Matic is equipped.
 *
 * @category Wanderers
 * @returns Chance that the sausage goblin is due (as a number between 0 and 1)
 */
function getKramcoWandererChance() {
  var fights = get$2("_sausageFights");
  var lastFight = get$2("_lastSausageMonsterTurn");
  var totalTurns = kolmafia.totalTurnsPlayed();
  if (fights < 1) {
    return lastFight === totalTurns && kolmafia.myTurncount() < 1 ? 0.5 : 1.0;
  }
  var turnsSinceLastFight = totalTurns - lastFight;
  return Math.min(1.0, (turnsSinceLastFight + 1) / (5 + fights * 3 + Math.max(0, fights - 5) ** 3));
}
var foldGroupCache = new Map();
/**
 * Determines the fold group (if any) of which the given item is a part
 *
 * @category General
 * @param item Item that is part of the required fold group
 * @param cache Whether to query the fold group cache
 * @returns List of items in the fold group
 */
function getFoldGroup(item) {
  var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (cache) {
    var cached = foldGroupCache.get(item);
    if (cached !== undefined) return cached;
  }
  var result = Object.entries(kolmafia.getRelated(item, "fold")).sort((_ref, _ref2) => {
    var _ref3 = _slicedToArray(_ref, 2),
      a = _ref3[1];
    var _ref4 = _slicedToArray(_ref2, 2),
      b = _ref4[1];
    return a - b;
  }).map(_ref5 => {
    var _ref6 = _slicedToArray(_ref5, 1),
      i = _ref6[0];
    return kolmafia.Item.get(i);
  });
  var _iterator = _createForOfIteratorHelper(result),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var fold = _step.value;
      foldGroupCache.set(fold, result);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return result;
}
/**
 * Parse the sort of range that KoLmafia encodes as a string
 * @param range KoLmafia-style range string
 * @returns Tuple of integers representing range
 */
function getRange(range) {
  var _range$match;
  var _ref9 = ((_range$match = range.match(/^(-?\d+)(?:-(-?\d+))?$/)) === null || _range$match === void 0 ? void 0 : _range$match.slice(1, 3).map(v => parseInt(v))) ?? [0],
    _ref0 = _slicedToArray(_ref9, 2),
    lower = _ref0[0],
    upper = _ref0[1];
  return [lower, Number.isNaN(upper) || upper === undefined ? lower : upper];
}
/**
 * Determine the average value from the sort of range that KoLmafia encodes as a string
 *
 * @param range KoLmafia-style range string
 * @returns Average value for range
 */
function getAverage(range) {
  var _getRange = getRange(range),
    _getRange2 = _slicedToArray(_getRange, 2),
    min = _getRange2[0],
    max = _getRange2[1];
  return (min + max) / 2;
}
/**
 * Deternube tge average adventures expected from consuming an Item
 *
 * If item is not a consumable, will just return "0".
 *
 * @param item Consumable item
 * @returns Average aventures from consumable
 */
function getAverageAdventures(item) {
  return getAverage(item.adventures);
}
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
/**
 * Determine the step as a number for a given quest property.
 *
 * @param questName Name of quest property to check.
 * @returns Quest step
 */
function questStep(questName) {
  var stringStep = get$2(questName);
  if (stringStep === "unstarted") return -1;else if (stringStep === "started") return 0;else if (stringStep === "finished" || stringStep === "") return 999;else {
    if (stringStep.substring(0, 4) !== "step") {
      throw new Error("Quest state parsing error.");
    }
    return parseInt(stringStep.substring(4), 10);
  }
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
var valueMap = new Map();
var MALL_VALUE_MODIFIER = 0.9;
/**
 * Determiens the average value (based on mallprice and autosell) of a collection of items
 *
 * @param items items whose value you care about
 * @returns Average value of items
 */
function getSaleValue() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }
  return items.map(item => {
    if (valueMap.has(item)) return valueMap.get(item) || 0;
    if (item.discardable) {
      valueMap.set(item, kolmafia.mallPrice(item) > Math.max(2 * kolmafia.autosellPrice(item), 100) ? MALL_VALUE_MODIFIER * kolmafia.mallPrice(item) : kolmafia.autosellPrice(item));
    } else {
      valueMap.set(item, kolmafia.mallPrice(item) > 100 ? MALL_VALUE_MODIFIER * kolmafia.mallPrice(item) : 0);
    }
    return valueMap.get(item) || 0;
  }).reduce((s, price) => s + price, 0) / items.length;
}
var holidayWanderers = new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject10$n || (_templateObject10$n = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject11$n || (_templateObject11$n = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject12$m || (_templateObject12$m = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
/**
 * Get today's holiday wanderers
 *
 * @returns List of holiday wanderer Monsters
 */
function getTodaysHolidayWanderers() {
  return kolmafia.holiday().split("/").flatMap(holiday => holidayWanderers.get(holiday) ?? []);
}
new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject13$k || (_templateObject13$k = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject14$k || (_templateObject14$k = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject15$k || (_templateObject15$k = _taggedTemplateLiteral(["Moxie"])))]]);
new Map([["people, all of whom appear to be on fire", $element(_templateObject16$k || (_templateObject16$k = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject17$j || (_templateObject17$j = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject18$i || (_templateObject18$i = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject19$i || (_templateObject19$i = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject20$h || (_templateObject20$h = _taggedTemplateLiteral(["cold"])))]]);
new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject21$h || (_templateObject21$h = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject22$h || (_templateObject22$h = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject23$h || (_templateObject23$h = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject24$h || (_templateObject24$h = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject25$h || (_templateObject25$h = _taggedTemplateLiteral(["cold"])))]]);
new Map([["smoke rising from deeper within the maze", $element(_templateObject26$g || (_templateObject26$g = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject27$g || (_templateObject27$g = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject28$g || (_templateObject28$g = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject29$g || (_templateObject29$g = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject30$f || (_templateObject30$f = _taggedTemplateLiteral(["cold"])))]]);
new Map([["with lava slowly oozing out of it", $element(_templateObject31$f || (_templateObject31$f = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject32$f || (_templateObject32$f = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject33$e || (_templateObject33$e = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject34$e || (_templateObject34$e = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject35$e || (_templateObject35$e = _taggedTemplateLiteral(["cold"])))]]);
/**
 * Visit the desc_x.php page for a given thing
 *
 * @param thing Thing to examine
 * @returns Contents of desc_x.php page
 */
function examine(thing) {
  var url = thing instanceof kolmafia.Item ? "desc_item.php?whichitem=".concat(thing.descid) : thing instanceof kolmafia.Familiar ? "desc_familiar.php?which=".concat(thing.id) : thing instanceof kolmafia.Effect ? "desc_effect.php?whicheffect=".concat(thing.descid) : "desc_skill.php?whichskill=".concat(thing.id);
  return kolmafia.visitUrl(url);
}
/**
 * Picks an option based on your primestat
 *
 * @param options An object keyed by stat; it must either contain all stats, or have a `default` parameter.
 * @param alternateSource An optional alternate way of determining which Stat to choose by.
 * @returns The option corresponding to your primestat.
 */
var byStat = makeByXFunction(() => kolmafia.myPrimestat().toString());
/**
 * Picks an option based on your player class
 *
 * @param options An object keyed by player class; it must either contain all classes, or have a `default` parameter.
 * @param alternateSource An optional anternate way of determining which Class to choose by.
 * @returns The option corresponding to your player class.
 */
var byClass = makeByXFunction(() => kolmafia.myClass().toString());
/**
 * Use an item with visitUrl instead of `use`; this is sometimes useful
 *
 * @param item The item you want to use
 * @returns The html of the resulting page
 */
function directlyUse(item) {
  return kolmafia.visitUrl("inv_use.php?which=3&whichitem=".concat(item.id, "&pwd"));
}
/**
 * Calculate the total weight of a given familiar, including soup & modifiers
 * @param familiar The familiar to use--defaults to your current one
 * @param considerAdjustment Whether to include your `weightAdjustment` in the calculation
 * @returns The total weight of the given familiar
 */
function totalFamiliarWeight() {
  var familiar = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : kolmafia.myFamiliar();
  var considerAdjustment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return clamp(clamp(kolmafia.familiarWeight(familiar), have$c($effect(_templateObject47$b || (_templateObject47$b = _taggedTemplateLiteral(["Fidoxene"])))) ? 20 : 0, Infinity) + familiar.soupWeight + (considerAdjustment ? kolmafia.weightAdjustment() : 0) + (familiar.feasted ? 10 : 0), 1, Infinity);
}
var regularFamiliarTags = Object.freeze(["animal", "insect", "haseyes", "haswings", "fast", "bite", "flies", "hashands", "wearsclothes", "organic", "vegetable", "hovers", "edible", "food", "sentient", "cute", "mineral", "polygonal", "object", "undead", "cantalk", "evil", "orb", "spooky", "sleaze", "aquatic", "swims", "isclothes", "phallic", "stench", "hot", "hasbeak", "haslegs", "robot", "technological", "hard", "cold", "hasbones", "hasclaws", "reallyevil", "good", "person", "humanoid", "animatedart", "software", "hasshell", "hasstinger"]);
new Set(regularFamiliarTags);
new Map([[$familiar(_templateObject48$b || (_templateObject48$b = _taggedTemplateLiteral(["Nursine"]))), ["ult_bearhug"]], [$familiar(_templateObject49$9 || (_templateObject49$9 = _taggedTemplateLiteral(["Caramel"]))), ["ult_sticktreats"]], [$familiar(_templateObject50$8 || (_templateObject50$8 = _taggedTemplateLiteral(["Smashmoth"]))), ["ult_owlstare"]], [$familiar(_templateObject51$8 || (_templateObject51$8 = _taggedTemplateLiteral(["Slotter"]))), ["ult_bloodbath"]], [$familiar(_templateObject52$7 || (_templateObject52$7 = _taggedTemplateLiteral(["Cornbeefadon"]))), ["ult_pepperscorn"]], [$familiar(_templateObject53$6 || (_templateObject53$6 = _taggedTemplateLiteral(["Mu"]))), ["ult_rainbowstorm"]]]);

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
var Macro$1 = /*#__PURE__*/function () {
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
      return (_this = new this()).step.apply(_this, _toConsumableArray(get$2(Macro.SAVED_MACRO_PROPERTY).split(";")));
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
_defineProperty(Macro$1, "SAVED_MACRO_PROPERTY", "libram_savedMacro");
_defineProperty(Macro$1, "cachedMacroIds", new Map());
_defineProperty(Macro$1, "cachedAutoAttacks", new Map());
var StrictMacro = /*#__PURE__*/function (_Macro2) {
  function StrictMacro() {
    _classCallCheck(this, StrictMacro);
    return _callSuper(this, StrictMacro, arguments);
  }
  _inherits(StrictMacro, _Macro2);
  return _createClass(StrictMacro, [{
    key: "skill",
    value:
    /**
     * Add one or more skill cast steps to the macro.
     *
     * @param skills Skills to cast.
     * @returns {StrictMacro} This object itself.
     */
    function skill() {
      for (var _len8 = arguments.length, skills = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        skills[_key8] = arguments[_key8];
      }
      return _superPropGet(StrictMacro, "skill", this, 3)(skills);
    }
    /**
     * Create a new macro with one or more skill cast steps.
     *
     * @param skills Skills to cast.
     * @returns {StrictMacro} This object itself.
     */
  }, {
    key: "item",
    value:
    /**
     * Add one or more item steps to the macro.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
    function item() {
      for (var _len9 = arguments.length, items = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        items[_key9] = arguments[_key9];
      }
      return _superPropGet(StrictMacro, "item", this, 3)(items);
    }
    /**
     * Create a new macro with one or more item steps.
     *
     * @param items Items to use. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
  }, {
    key: "trySkill",
    value:
    /**
     * Add one or more skill cast steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {StrictMacro} This object itself.
     */
    function trySkill() {
      for (var _len0 = arguments.length, skills = new Array(_len0), _key0 = 0; _key0 < _len0; _key0++) {
        skills[_key0] = arguments[_key0];
      }
      return _superPropGet(StrictMacro, "trySkill", this, 3)(skills);
    }
    /**
     * Create a new macro with one or more skill cast steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try casting.
     * @returns {StrictMacro} This object itself.
     */
  }, {
    key: "tryItem",
    value:
    /**
     * Add one or more item steps to the macro, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
    function tryItem() {
      for (var _len1 = arguments.length, items = new Array(_len1), _key1 = 0; _key1 < _len1; _key1++) {
        items[_key1] = arguments[_key1];
      }
      return _superPropGet(StrictMacro, "tryItem", this, 3)(items);
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first.
     *
     * @param items Items to try using. Pass a tuple [item1, item2] to funksling.
     * @returns {StrictMacro} This object itself.
     */
  }, {
    key: "funkslingItem",
    value:
    /**
     * Add one or more item steps to the macro, and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {StrictMacro} This object itself.
     */
    function funkslingItem() {
      for (var _len10 = arguments.length, items = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        items[_key10] = arguments[_key10];
      }
      return _superPropGet(StrictMacro, "funkslingItem", this, 3)(items);
    }
    /**
     * Create a new macro with one or more item steps, and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {StrictMacro} This object itself.
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
     * @returns {StrictMacro} This object itself.
     */
    function tryFunkslingItem() {
      for (var _len11 = arguments.length, items = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        items[_key11] = arguments[_key11];
      }
      return _superPropGet(StrictMacro, "tryFunkslingItem", this, 3)(items);
    }
    /**
     * Create a new macro with one or more item steps, where each step checks to see if you have the item first,
     * and automatically attempting to funksling as many of the items as possible.
     * This function does not check if you can funksling or not.
     *
     * @param items Items to use.
     * @returns {StrictMacro} This object itself.
     */
  }, {
    key: "trySkillRepeat",
    value:
    /**
     * Add one or more skill-cast-and-repeat steps to the macro, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {StrictMacro} This object itself.
     */
    function trySkillRepeat() {
      for (var _len12 = arguments.length, skills = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        skills[_key12] = arguments[_key12];
      }
      return _superPropGet(StrictMacro, "trySkillRepeat", this, 3)(skills);
    }
    /**
     * Create a new macro with one or more skill-cast-and-repeat steps, where each step checks if you have the skill first.
     *
     * @param skills Skills to try repeatedly casting.
     * @returns {StrictMacro} This object itself.
     */
  }], [{
    key: "skill",
    value: function skill() {
      var _this0;
      return (_this0 = new this()).skill.apply(_this0, arguments);
    }
  }, {
    key: "item",
    value: function item() {
      var _this1;
      return (_this1 = new this()).item.apply(_this1, arguments);
    }
  }, {
    key: "trySkill",
    value: function trySkill() {
      var _this10;
      return (_this10 = new this()).trySkill.apply(_this10, arguments);
    }
  }, {
    key: "tryItem",
    value: function tryItem() {
      var _this11;
      return (_this11 = new this()).tryItem.apply(_this11, arguments);
    }
  }, {
    key: "funkslingItem",
    value: function funkslingItem() {
      var _this12;
      return (_this12 = new this()).funkslingItem.apply(_this12, arguments);
    }
  }, {
    key: "tryFunkslingItem",
    value: function tryFunkslingItem() {
      var _this13;
      return (_this13 = new this()).tryFunkslingItem.apply(_this13, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function trySkillRepeat() {
      var _this14;
      return (_this14 = new this()).trySkillRepeat.apply(_this14, arguments);
    }
  }]);
}(Macro$1);

var _templateObject$D, _templateObject2$w, _templateObject3$u, _templateObject4$t, _templateObject5$t, _templateObject6$t, _templateObject7$t, _templateObject8$p, _templateObject9$o, _templateObject0$n, _templateObject1$m, _templateObject10$m, _templateObject11$m, _templateObject12$l, _templateObject13$j, _templateObject14$j, _templateObject15$j, _templateObject16$j, _templateObject17$i, _templateObject18$h, _templateObject19$h, _templateObject20$g, _templateObject21$g, _templateObject22$g, _templateObject23$g, _templateObject24$g, _templateObject25$g, _templateObject26$f, _templateObject27$f, _templateObject28$f, _templateObject29$f, _templateObject30$e, _templateObject31$e, _templateObject32$e, _templateObject33$d, _templateObject34$d, _templateObject35$d, _templateObject36$d, _templateObject37$c, _templateObject38$b, _templateObject39$b, _templateObject40$b, _templateObject41$b, _templateObject42$b, _templateObject43$a, _templateObject44$a, _templateObject45$a, _templateObject46$a, _templateObject47$a, _templateObject48$a;
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
  backupcamera: $item(_templateObject$D || (_templateObject$D = _taggedTemplateLiteral(["backup camera"]))),
  umbrella: $item(_templateObject2$w || (_templateObject2$w = _taggedTemplateLiteral(["unbreakable umbrella"]))),
  snowsuit: $item(_templateObject3$u || (_templateObject3$u = _taggedTemplateLiteral(["Snow Suit"]))),
  edpiece: $item(_templateObject4$t || (_templateObject4$t = _taggedTemplateLiteral(["The Crown of Ed the Undying"]))),
  retrocape: $item(_templateObject5$t || (_templateObject5$t = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
  parka: $item(_templateObject6$t || (_templateObject6$t = _taggedTemplateLiteral(["Jurassic Parka"]))),
  jillcandle: $item(_templateObject7$t || (_templateObject7$t = _taggedTemplateLiteral(["LED candle"])))
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
var cachedSlots = $slots(_templateObject8$p || (_templateObject8$p = _taggedTemplateLiteral(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"])));
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
  var stats = $stats(_templateObject9$o || (_templateObject9$o = _taggedTemplateLiteral(["Muscle, Mysticality, Moxie"]))).map(stat => Math.min(kolmafia.myBasestat(stat), 300));
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
    var familiarEquip = entry.equipment.get($slot(_templateObject0$n || (_templateObject0$n = _taggedTemplateLiteral(["familiar"]))));
    if (familiarEquip) kolmafia.equip($slot(_templateObject1$m || (_templateObject1$m = _taggedTemplateLiteral(["familiar"]))), familiarEquip);
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
  if (kolmafia.equippedAmount($item(_templateObject10$m || (_templateObject10$m = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject11$m || (_templateObject11$m = _taggedTemplateLiteral(["Crown of Thrones"]))))) {
    kolmafia.enthroneFamiliar(entry.rider.get($item(_templateObject12$l || (_templateObject12$l = _taggedTemplateLiteral(["Crown of Thrones"])))) || $familiar.none);
  }
  if (kolmafia.equippedAmount($item(_templateObject13$j || (_templateObject13$j = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject14$j || (_templateObject14$j = _taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    kolmafia.bjornifyFamiliar(entry.rider.get($item(_templateObject15$j || (_templateObject15$j = _taggedTemplateLiteral(["Buddy Bjorn"])))) || $familiar.none);
  }
  applyModes(_objectSpread2(_objectSpread2({}, entry.modes), options.modes));
}
var slotStructure = [$slots(_templateObject16$j || (_templateObject16$j = _taggedTemplateLiteral(["hat"]))), $slots(_templateObject17$i || (_templateObject17$i = _taggedTemplateLiteral(["back"]))), $slots(_templateObject18$h || (_templateObject18$h = _taggedTemplateLiteral(["shirt"]))), $slots(_templateObject19$h || (_templateObject19$h = _taggedTemplateLiteral(["weapon, off-hand"]))), $slots(_templateObject20$g || (_templateObject20$g = _taggedTemplateLiteral(["pants"]))), $slots(_templateObject21$g || (_templateObject21$g = _taggedTemplateLiteral(["acc1, acc2, acc3"]))), $slots(_templateObject22$g || (_templateObject22$g = _taggedTemplateLiteral(["familiar"])))];
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
  if (kolmafia.equippedAmount($item(_templateObject23$g || (_templateObject23$g = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject24$g || (_templateObject24$g = _taggedTemplateLiteral(["Crown of Thrones"]))))) {
    if (entry.rider.get($item(_templateObject25$g || (_templateObject25$g = _taggedTemplateLiteral(["Crown of Thrones"])))) !== kolmafia.myEnthronedFamiliar()) {
      if (warn) {
        logger.warning("Failed to apply ".concat(entry.rider.get($item(_templateObject26$f || (_templateObject26$f = _taggedTemplateLiteral(["Crown of Thrones"])))), " in ").concat($item(_templateObject27$f || (_templateObject27$f = _taggedTemplateLiteral(["Crown of Thrones"]))), "."));
      }
      success = false;
    }
  }
  if (kolmafia.equippedAmount($item(_templateObject28$f || (_templateObject28$f = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject29$f || (_templateObject29$f = _taggedTemplateLiteral(["Buddy Bjorn"]))))) {
    if (entry.rider.get($item(_templateObject30$e || (_templateObject30$e = _taggedTemplateLiteral(["Buddy Bjorn"])))) !== kolmafia.myBjornedFamiliar()) {
      if (warn) {
        logger.warning("Failed to apply".concat(entry.rider.get($item(_templateObject31$e || (_templateObject31$e = _taggedTemplateLiteral(["Buddy Bjorn"])))), " in ").concat($item(_templateObject32$e || (_templateObject32$e = _taggedTemplateLiteral(["Buddy Bjorn"]))), "."));
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
  if (kolmafia.equippedAmount($item(_templateObject33$d || (_templateObject33$d = _taggedTemplateLiteral(["card sleeve"])))) > 0) {
    equipment.set($slot(_templateObject34$d || (_templateObject34$d = _taggedTemplateLiteral(["card-sleeve"]))), kolmafia.equippedItem($slot(_templateObject35$d || (_templateObject35$d = _taggedTemplateLiteral(["card-sleeve"])))));
  }
  if (kolmafia.equippedAmount($item(_templateObject36$d || (_templateObject36$d = _taggedTemplateLiteral(["Crown of Thrones"])))) > 0) {
    rider.set($item(_templateObject37$c || (_templateObject37$c = _taggedTemplateLiteral(["Crown of Thrones"]))), kolmafia.myEnthronedFamiliar());
  }
  if (kolmafia.equippedAmount($item(_templateObject38$b || (_templateObject38$b = _taggedTemplateLiteral(["Buddy Bjorn"])))) > 0) {
    rider.set($item(_templateObject39$b || (_templateObject39$b = _taggedTemplateLiteral(["Buddy Bjorn"]))), kolmafia.myBjornedFamiliar());
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
    if (options.preventSlot.includes($slot(_templateObject40$b || (_templateObject40$b = _taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete($item(_templateObject41$b || (_templateObject41$b = _taggedTemplateLiteral(["Buddy Bjorn"]))));
    }
    if (options.preventSlot.includes($slot(_templateObject42$b || (_templateObject42$b = _taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete($item(_templateObject43$a || (_templateObject43$a = _taggedTemplateLiteral(["Crown of Thrones"]))));
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
    if (!options.onlySlot.includes($slot(_templateObject44$a || (_templateObject44$a = _taggedTemplateLiteral(["buddy-bjorn"]))))) {
      rider.delete($item(_templateObject45$a || (_templateObject45$a = _taggedTemplateLiteral(["Buddy Bjorn"]))));
    }
    if (!options.onlySlot.includes($slot(_templateObject46$a || (_templateObject46$a = _taggedTemplateLiteral(["crown-of-thrones"]))))) {
      rider.delete($item(_templateObject47$a || (_templateObject47$a = _taggedTemplateLiteral(["Crown of Thrones"]))));
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
  var cacheKey = [objective].concat(_toConsumableArray(untouchedSlots.map(slot => "".concat(slot, ":").concat(kolmafia.equippedItem(slot))).sort()), [have$c($effect(_templateObject48$a || (_templateObject48$a = _taggedTemplateLiteral(["Offhand Remarkable"])))), options.updateOnLocationChange && kolmafia.myLocation()]).join("; ");
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

var _templateObject$C, _templateObject3$t, _templateObject4$s, _templateObject5$s, _templateObject6$s, _templateObject7$s, _templateObject8$o, _templateObject9$n, _templateObject0$m, _templateObject1$l, _templateObject10$l, _templateObject11$l, _templateObject12$k, _templateObject13$i, _templateObject14$i, _templateObject15$i, _templateObject16$i;
var PriceAge;
(function (PriceAge) {
  PriceAge[PriceAge["HISTORICAL"] = 0] = "HISTORICAL";
  PriceAge[PriceAge["RECENT"] = 1] = "RECENT";
  PriceAge[PriceAge["TODAY"] = 2] = "TODAY";
})(PriceAge || (PriceAge = {}));
/**
 * @returns Whether the Asdon is our current active workshed
 */
function installed() {
  return kolmafia.getWorkshed() === $item(_templateObject$C || (_templateObject$C = _taggedTemplateLiteral(["Asdon Martin keyfob (on ring)"])));
}
var fuelSkiplist = $items(_templateObject3$t || (_templateObject3$t = _taggedTemplateLiteral(["cup of \"tea\", thermos of \"whiskey\", Lucky Lindy, Bee's Knees, Sockdollager, Ish Kabibble, Hot Socks, Phonus Balonus, Flivver, Sloppy Jalopy, glass of \"milk\""])));
/**
 * Internal function used to determine whether a historical price is recent enough
 *
 * @param item The item to check
 * @returns Whether a price is too old to trust
 */
function priceTooOld(item) {
  return kolmafia.historicalPrice(item) === 0 || kolmafia.historicalAge(item) >= 7;
}
/**
 * @param item The item in question
 * @returns Mall max if historicalPrice is -1; otherwise, the historical price
 */
function historicalPriceOrMax(item) {
  var historical = kolmafia.historicalPrice(item);
  return historical < 0 ? 999999999 : historical;
}
/**
 * @param item The item in question
 * @returns Mall max if historicalPrice is -1; otherwise, the mall price
 */
function mallPriceOrMax(item) {
  var mall = kolmafia.mallPrice(item);
  return mall < 0 ? 999999999 : mall;
}
/**
 * Combined internal function to determine the price of an item
 *
 * @param item The item in question
 * @param priceAge How do we decide when to use historical vs real mall prices?
 * @returns The price of the item in question
 */
function price(item, priceAge) {
  switch (priceAge) {
    case PriceAge.HISTORICAL:
      {
        var historical = historicalPriceOrMax(item);
        return historical === 0 ? mallPriceOrMax(item) : historical;
      }
    case PriceAge.RECENT:
      return priceTooOld(item) ? mallPriceOrMax(item) : historicalPriceOrMax(item);
    case PriceAge.TODAY:
      return mallPriceOrMax(item);
  }
}
function inventoryItems() {
  return kolmafia.Item.all().filter(isFuelItem).filter(item => have$c(item) && [100, kolmafia.autosellPrice(item)].includes(price(item, PriceAge.RECENT)));
}
/**
 * @param it The item in question
 * @param priceAge The PriceAge option to apply
 * @returns Meat per fuel of an item
 */
function calculateFuelUnitCost(it) {
  var priceAge = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : PriceAge.RECENT;
  var units = getAverageAdventures(it);
  return price(it, priceAge) / units;
}
/**
 * @param it the item in question
 * @returns Can `it` be used as Asdon fuel?
 */
function isFuelItem(it) {
  return !kolmafia.isNpcItem(it) && it.fullness + it.inebriety > 0 && getAverageAdventures(it) > 0 && it.tradeable && it.discardable && !fuelSkiplist.includes(it);
}
/**
 * @returns The best fuel options available to us at this time
 */
function getBestFuels() {
  // Three stages.
  // 1. Filter to reasonable items using historical cost (within 5x of historical best).
  var allFuel = kolmafia.Item.all().filter(isFuelItem);
  if (allFuel.filter(item => kolmafia.historicalPrice(item) === 0).length > 100) {
    kolmafia.mallPrices("food");
    kolmafia.mallPrices("booze");
  }
  var keyHistorical = item => calculateFuelUnitCost(item, PriceAge.HISTORICAL);
  allFuel.sort((x, y) => keyHistorical(x) - keyHistorical(y));
  var bestUnitCost = keyHistorical(allFuel[0]);
  var firstBadIndex = allFuel.findIndex(item => keyHistorical(item) > 5 * bestUnitCost);
  var potentialFuel = firstBadIndex > 0 ? allFuel.slice(0, firstBadIndex) : allFuel;
  // 2. Filter to top 10 candidates using prices at most a week old.
  if (potentialFuel.filter(item => priceTooOld(item)).length > 100) {
    kolmafia.mallPrices("food");
    kolmafia.mallPrices("booze");
  }
  var key1 = item => -getAverageAdventures(item);
  var key2 = item => calculateFuelUnitCost(item, PriceAge.RECENT);
  potentialFuel.sort((x, y) => key1(x) - key1(y));
  potentialFuel.sort((x, y) => key2(x) - key2(y));
  // 3. Find result using precise price for those top candidates.
  var candidates = potentialFuel.slice(0, 10);
  var key3 = item => calculateFuelUnitCost(item, PriceAge.TODAY);
  candidates.sort((x, y) => key3(x) - key3(y));
  if (calculateFuelUnitCost(candidates[0], PriceAge.TODAY) > 100) {
    throw new Error("Could not identify any fuel with efficiency better than 100 meat per fuel. " + "This means something went wrong.");
  }
  return candidates;
}
/**
 * Fuel your Asdon Martin with a given quantity of a given item
 *
 * @param it Item to fuel with.
 * @param quantity Number of items to fuel with.
 * @returns Whether we succeeded at fueling with the given items.
 */
function insertFuel(it) {
  var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var result = kolmafia.visitUrl("campground.php?action=fuelconvertor&pwd&qty=".concat(quantity, "&iid=").concat(it.id, "&go=Convert%21"));
  return result.includes("The display updates with a");
}
/**
 * Fill your Asdon Martin to the given fuel level in the cheapest way possible
 *
 * @param targetUnits Fuel level to attempt to reach.
 * @returns Whether we succeeded at filling to the target fuel level.
 */
function fillTo(targetUnits) {
  if (!installed()) return false;
  while (kolmafia.getFuel() < targetUnits) {
    // if in Hardcore/ronin, skip the price calculation and just use soda bread
    var _ref = kolmafia.canInteract() ? getBestFuels() : [$item(_templateObject4$s || (_templateObject4$s = _taggedTemplateLiteral(["loaf of soda bread"]))), undefined],
      _ref2 = _slicedToArray(_ref, 2),
      bestFuel = _ref2[0],
      secondBest = _ref2[1];
    var count = Math.ceil(targetUnits / getAverageAdventures(bestFuel));
    var ceiling = undefined;
    if (secondBest) {
      var efficiencyOfSecondBest = kolmafia.mallPrice(secondBest) / getAverageAdventures(secondBest);
      ceiling = Math.ceil(efficiencyOfSecondBest * getAverageAdventures(bestFuel));
    }
    if (!kolmafia.canInteract()) {
      // If we can't access the bugbear bakery but do have access to all-purpose flower, use that to get soda bread
      if (kolmafia.npcPrice($item(_templateObject5$s || (_templateObject5$s = _taggedTemplateLiteral(["wad of dough"])))) === 0 && kolmafia.npcPrice($item(_templateObject6$s || (_templateObject6$s = _taggedTemplateLiteral(["all-purpose flower"])))) > 0) {
        var maxTries = Math.ceil(count / 35); // minimum amount of wad of dough created from all-purpose flower is 35
        for (var i = 0; i < maxTries && kolmafia.availableAmount($item(_templateObject7$s || (_templateObject7$s = _taggedTemplateLiteral(["wad of dough"])))) < count; i++) {
          kolmafia.buy($item(_templateObject8$o || (_templateObject8$o = _taggedTemplateLiteral(["all-purpose flower"]))));
          kolmafia.use($item(_templateObject9$n || (_templateObject9$n = _taggedTemplateLiteral(["all-purpose flower"]))));
        }
        kolmafia.retrieveItem(count, bestFuel);
      } else kolmafia.retrieveItem(count, bestFuel);
    } else if (ceiling) kolmafia.buy(count, bestFuel, ceiling);else kolmafia.buy(count, bestFuel);
    if (!insertFuel(bestFuel, Math.min(kolmafia.itemAmount(bestFuel), count))) {
      throw new Error("Failed to fuel Asdon Martin.");
    }
  }
  return kolmafia.getFuel() >= targetUnits;
}
/**
 * @param targetUnits The fuel level we aim to achieve
 * @returns Whether we successfully filled our Asdon's tank
 */
function fillWithBestInventoryItem(targetUnits) {
  var options = inventoryItems().sort((a, b) => getAverageAdventures(b) / kolmafia.autosellPrice(b) - getAverageAdventures(a) / kolmafia.autosellPrice(a));
  if (options.length === 0) return false;
  var best = options[0];
  if (kolmafia.autosellPrice(best) / getAverageAdventures(best) > 100) return false;
  var amountToUse = clamp(Math.ceil(targetUnits / getAverageAdventures(best)), 0, kolmafia.itemAmount(best));
  return insertFuel(best, amountToUse);
}
/**
 * Fill your Asdon Martin by prioritizing mallmin items in your inventory. Default to the behavior of fillTo.
 *
 * @param targetUnits Fuel level to attempt to reach.
 * @returns Whether we succeeded at filling to the target fuel level.
 */
function fillWithInventoryTo(targetUnits) {
  if (!installed()) return false;
  var continueFuelingFromInventory = true;
  while (kolmafia.getFuel() < targetUnits && continueFuelingFromInventory) {
    continueFuelingFromInventory && (continueFuelingFromInventory = fillWithBestInventoryItem(targetUnits));
  }
  return fillTo(targetUnits);
}
/**
 * Object consisting of the various Asdon driving styles
 */
var Driving = {
  Obnoxiously: $effect(_templateObject0$m || (_templateObject0$m = _taggedTemplateLiteral(["Driving Obnoxiously"]))),
  Stealthily: $effect(_templateObject1$l || (_templateObject1$l = _taggedTemplateLiteral(["Driving Stealthily"]))),
  Wastefully: $effect(_templateObject10$l || (_templateObject10$l = _taggedTemplateLiteral(["Driving Wastefully"]))),
  Safely: $effect(_templateObject11$l || (_templateObject11$l = _taggedTemplateLiteral(["Driving Safely"]))),
  Recklessly: $effect(_templateObject12$k || (_templateObject12$k = _taggedTemplateLiteral(["Driving Recklessly"]))),
  Intimidatingly: $effect(_templateObject13$i || (_templateObject13$i = _taggedTemplateLiteral(["Driving Intimidatingly"]))),
  Quickly: $effect(_templateObject14$i || (_templateObject14$i = _taggedTemplateLiteral(["Driving Quickly"]))),
  Observantly: $effect(_templateObject15$i || (_templateObject15$i = _taggedTemplateLiteral(["Driving Observantly"]))),
  Waterproofly: $effect(_templateObject16$i || (_templateObject16$i = _taggedTemplateLiteral(["Driving Waterproofly"])))
};
/**
 * Attempt to drive with a particular style for a particular number of turns.
 *
 * @param style The driving style to use.
 * @param turns The number of turns to attempt to get.
 * @param preferInventory Whether we should preferentially value items currently in our inventory.
 * @returns Whether we have at least as many turns as requested of said driving style.
 */
function drive(style) {
  var turns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var preferInventory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (!Object.values(Driving).includes(style)) return false;
  if (!installed()) return false;
  if (kolmafia.haveEffect(style) >= turns) return true;
  var fuelNeeded = 37 * Math.ceil((turns - kolmafia.haveEffect(style)) / 30);
  (preferInventory ? fillWithInventoryTo : fillTo)(fuelNeeded);
  while (kolmafia.getFuel() >= 37 && kolmafia.haveEffect(style) < turns) {
    kolmafia.cliExecute("asdonmartin drive ".concat(style.name.replace("Driving ", "")));
  }
  return kolmafia.haveEffect(style) >= turns;
}

var Copier = /*#__PURE__*/_createClass(function Copier(couldCopy, prepare, canCopy, copiedMonster, fightCopy) {
  _classCallCheck(this, Copier);
  _defineProperty(this, "couldCopy", void 0);
  _defineProperty(this, "prepare", void 0);
  _defineProperty(this, "canCopy", void 0);
  _defineProperty(this, "copiedMonster", void 0);
  _defineProperty(this, "fightCopy", null);
  this.couldCopy = couldCopy;
  this.prepare = prepare;
  this.canCopy = canCopy;
  this.copiedMonster = copiedMonster;
  if (fightCopy) this.fightCopy = fightCopy;
});

// THIS FILE IS AUTOMATICALLY GENERATED. See tools/parseModifiers.ts for more information
var stringModifiers = ["Class", "Intrinsic Effect", "Equalize", "Wiki Name", "Modifiers", "Outfit", "Stat Tuning", "Equips On", "Familiar Effect", "Jiggle", "Equalize Muscle", "Equalize Mysticality", "Equalize Moxie", "Avatar", "Skill", "Floor Buffed Muscle", "Floor Buffed Mysticality", "Floor Buffed Moxie", "Plumber Stat", "Recipe", "Evaluated Modifiers", "Last Available"];
var stringModifiersSet = new Set(stringModifiers);
var booleanModifiers = ["Softcore Only", "Single Equip", "Always Fumble", "Never Fumble", "Weakens Monster", "Free Pull", "Variable", "Nonstackable Watch", "Cold Immunity", "Hot Immunity", "Sleaze Immunity", "Spooky Immunity", "Stench Immunity", "Cold Vulnerability", "Hot Vulnerability", "Sleaze Vulnerability", "Spooky Vulnerability", "Stench Vulnerability", "Moxie Controls MP", "Moxie May Control MP", "Four Songs", "Adventure Randomly", "Adventure Underwater", "Underwater Familiar", "Generic", "Unarmed", "No Pull", "Lasts Until Rollover", "Alters Page Text", "Attacks Can't Miss", "Pirate", "Blind", "Breakable", "Drops Items", "Drops Meat", "Volleyball or Sombrero", "Extra Pickpocket", "Negative Status Resist"];
var booleanModifiersSet = new Set(booleanModifiers);
var numericModifiers = ["Familiar Weight", "Monster Level", "Combat Rate", "Initiative", "Experience", "Item Drop", "Meat Drop", "Damage Absorption", "Damage Reduction", "Cold Resistance", "Hot Resistance", "Sleaze Resistance", "Spooky Resistance", "Stench Resistance", "Mana Cost", "Moxie", "Moxie Percent", "Muscle", "Muscle Percent", "Mysticality", "Mysticality Percent", "Maximum HP", "Maximum HP Percent", "Maximum MP", "Maximum MP Percent", "Weapon Damage", "Ranged Damage", "Spell Damage", "Spell Damage Percent", "Cold Damage", "Hot Damage", "Sleaze Damage", "Spooky Damage", "Stench Damage", "Cold Spell Damage", "Hot Spell Damage", "Sleaze Spell Damage", "Spooky Spell Damage", "Stench Spell Damage", "Underwater Combat Rate", "Fumble", "HP Regen Min", "HP Regen Max", "MP Regen Min", "MP Regen Max", "Adventures", "Familiar Weight Percent", "Weapon Damage Percent", "Ranged Damage Percent", "Stackable Mana Cost", "Hobo Power", "Base Resting HP", "Resting HP Percent", "Bonus Resting HP", "Base Resting MP", "Resting MP Percent", "Bonus Resting MP", "Critical Hit Percent", "PvP Fights", "Volleyball", "Sombrero", "Leprechaun", "Fairy", "Meat Drop Penalty", "Hidden Familiar Weight", "Item Drop Penalty", "Initiative Penalty", "Food Drop", "Booze Drop", "Hat Drop", "Weapon Drop", "Offhand Drop", "Shirt Drop", "Pants Drop", "Accessory Drop", "Volleyball Effectiveness", "Sombrero Effectiveness", "Leprechaun Effectiveness", "Fairy Effectiveness", "Familiar Weight Cap", "Slime Resistance", "Slime Hates It", "Spell Critical Percent", "Muscle Experience", "Mysticality Experience", "Moxie Experience", "Effect Duration", "Candy Drop", "DB Combat Damage", "Sombrero Bonus", "Familiar Experience", "Sporadic Meat Drop", "Sporadic Item Drop", "Meat Bonus", "Pickpocket Chance", "Combat Mana Cost", "Muscle Experience Percent", "Mysticality Experience Percent", "Moxie Experience Percent", "Minstrel Level", "Muscle Limit", "Mysticality Limit", "Moxie Limit", "Song Duration", "Prismatic Damage", "Smithsness", "Supercold Resistance", "Reduce Enemy Defense", "Pool Skill", "Familiar Damage", "Gear Drop", "Maximum Hooch", "Water Level", "Crimbot Outfit Power", "Familiar Tuning Muscle", "Familiar Tuning Mysticality", "Familiar Tuning Moxie", "Random Monster Modifiers", "Luck", "Othello Skill", "Disco Style", "Rollover Effect Duration", "Sixgun Damage", "Fishing Skill", "Additional Song", "Sprinkle Drop", "Absorb Adventures", "Absorb Stats", "Rubee Drop", "Kruegerand Drop", "WarBear Armor Penetration", "Maximum PP", "Plumber Power", "Drippy Damage", "Drippy Resistance", "Energy", "Scrap", "Familiar Action Bonus", "Water", "Spleen Drop", "Potion Drop", "Sauce Spell Damage", "Monster Level Percent", "Food Fairy", "Booze Fairy", "Candy Fairy", "Food Fairy Effectiveness", "Booze Fairy Effectiveness", "Candy Fairy Effectiveness", "Damage Aura", "Sporadic Damage Aura", "Thorns", "Sporadic Thorns", "Stomach Capacity", "Liver Capacity", "Spleen Capacity", "Free Rests", "Leaves", "Elf Warfare Effectiveness", "Pirate Warfare Effectiveness", "MPC Drop", "Piece of Twelve Drop", "Combat Item Damage Percent", "Avoid Attack", "Damage vs. Bugbears", "Damage vs. Werewolves", "Damage vs. Zombies", "Damage vs. Ghosts", "Damage vs. Vampires", "Damage vs. Skeletons", "Damage vs. Undead", "RAM", "Lantern", "Raw Combat Rate"];
var numericModifiersSet = new Set(numericModifiers);
var multiStringModifiers = ["Effect", "Rollover Effect", "Conditional Skill (Equipped)", "Conditional Skill (Inventory)", "Lantern Element"];
var multiStringModifiersSet = new Set(multiStringModifiers);

/**
 * Type guard that determines if a given string is a boolean modifier
 * @param modifier The modifier in question
 * @returns Whether the string in question is a valid boolean modifier
 */
function isBooleanModifier(modifier) {
  return booleanModifiersSet.has(modifier);
}
/**
 * Type guard that determines if a given string is a numeric modifier
 * @param modifier The modifier in question
 * @returns Whether the string in question is a valid numeric modifier
 */
function isNumericModifier(modifier) {
  return numericModifiersSet.has(modifier);
}
/**
 * Type guard that determines if a given string is a string modifier
 * @param modifier The modifier in question
 * @returns Whether the string in question is a valid string modifier
 */
function isStringModifier(modifier) {
  return stringModifiersSet.has(modifier);
}
/**
 * Type guard that determines if a given string is a multistring modifier
 * @param modifier The modifier in question
 * @returns Whether the string in question is a valid multistring modifier
 */
function isMultiStringModifier(modifier) {
  return multiStringModifiersSet.has(modifier);
}
/**
 * Get the value of a modifier
 *
 * @param name Modifier name
 * @param subject Subject of modifier
 * @returns Value of modifier
 */
function get$1(name, subject) {
  if (isBooleanModifier(name)) {
    return subject === undefined ? kolmafia.booleanModifier(name) : kolmafia.booleanModifier(subject, name);
  }
  if (isNumericModifier(name)) {
    return subject === undefined ? kolmafia.numericModifier(name) : kolmafia.numericModifier(subject, name);
  }
  if (isStringModifier(name)) {
    return subject === undefined ? kolmafia.stringModifier(name) : kolmafia.stringModifier(subject, name);
  }
  if (isMultiStringModifier(name)) {
    return subject === undefined ? kolmafia.stringsModifier(name) : kolmafia.stringsModifier(subject, name);
  }
}

var _templateObject$B;
/**
 * @returns Do we `have` the Deck of Every Card?
 */
function have$b() {
  return have$c($item(_templateObject$B || (_templateObject$B = _taggedTemplateLiteral(["Deck of Every Card"]))));
}
/**
 * @returns The number of cards we've drawn so far today--remember, cheating counts as 5
 */
function getCardsDrawn() {
  return clamp(get$2("_deckCardsDrawn"), 0, 15);
}
/**
 * @returns The number of draws we have remaining today--remember, cheating counts as 5
 */
function getRemainingDraws() {
  return 15 - getCardsDrawn();
}
/**
 * @returns The number of additional cards we can cheat today
 */
function getRemainingCheats() {
  return Math.floor(getRemainingDraws() / 5);
}
/**
 * @returns An array of the Cards we've seen today
 */
function getCardsSeen() {
  return get$2("_deckCardsSeen") ? get$2("_deckCardsSeen").split("|") : [];
}
/**
 * Cheat a card of your choice from the Deck
 *
 * @param card The card in question
 * @returns `true` if we succeed or if we've already cheated that card today; `false` if we fail or are out of draws/cheats for the day.
 */
function cheatCard(card) {
  if (getCardsSeen().includes(card)) return true;
  if (getRemainingDraws() < 5) return false;
  return kolmafia.cliExecute("cheat ".concat(card));
}

var _templateObject$A, _templateObject2$v, _templateObject3$s, _templateObject4$r, _templateObject5$r, _templateObject6$r, _templateObject7$r, _templateObject8$n, _templateObject9$m, _templateObject0$l, _templateObject1$k, _templateObject10$k, _templateObject11$k, _templateObject12$j, _templateObject13$h, _templateObject14$h, _templateObject15$h, _templateObject16$h, _templateObject17$h, _templateObject18$g, _templateObject19$g, _templateObject20$f, _templateObject21$f, _templateObject22$f, _templateObject23$f, _templateObject24$f, _templateObject25$f;
$item(_templateObject$A || (_templateObject$A = _taggedTemplateLiteral(["Source terminal"])));
/**
 * Buffs that can be acquired from Enhance
 *
 * - Items: +30% Item Drop
 * - Meat: +60% Meat Drop
 * - Init: +50% Initiative
 * - Critical: +10% chance of Critical Hit, +10% chance of Spell Critical Hit
 * - Damage: +5 Prismatic Damage
 * - Substats: +3 Stats Per Fight
 */
var Buffs = {
  Items: $effect(_templateObject2$v || (_templateObject2$v = _taggedTemplateLiteral(["items.enh"]))),
  Meat: $effect(_templateObject3$s || (_templateObject3$s = _taggedTemplateLiteral(["meat.enh"]))),
  Init: $effect(_templateObject4$r || (_templateObject4$r = _taggedTemplateLiteral(["init.enh"]))),
  Critical: $effect(_templateObject5$r || (_templateObject5$r = _taggedTemplateLiteral(["critical.enh"]))),
  Damage: $effect(_templateObject6$r || (_templateObject6$r = _taggedTemplateLiteral(["damage.enh"]))),
  Substats: $effect(_templateObject7$r || (_templateObject7$r = _taggedTemplateLiteral(["substats.enh"])))
};
/**
 * Acquire a buff from the Source Terminal
 *
 * @param buff The buff to acquire
 * @see Buffs
 * @returns Whether we successfully acquired the buff
 */
function enhance(buff) {
  if (!Object.values(Buffs).includes(buff)) {
    return false;
  }
  return kolmafia.cliExecute("terminal enhance ".concat(buff.name));
}
/**
 * Rollover buffs that can be acquired from Enquiry
 */
({
  /** +5 Familiar Weight */
  Familiar: $effect(_templateObject8$n || (_templateObject8$n = _taggedTemplateLiteral(["familiar.enq"]))),
  /** +25 ML */
  Monsters: $effect(_templateObject9$m || (_templateObject9$m = _taggedTemplateLiteral(["monsters.enq"]))),
  /** +5 Prismatic Resistance */
  Protect: $effect(_templateObject0$l || (_templateObject0$l = _taggedTemplateLiteral(["protect.enq"]))),
  /** +100% Muscle, +100% Mysticality, +100% Moxie */
  Stats: $effect(_templateObject1$k || (_templateObject1$k = _taggedTemplateLiteral(["stats.enq"])))
});
/**
 * Skills that can be acquired from Enhance
 */
var Skills = {
  /** Collect Source essence from enemies once per combat */
  Extract: $skill(_templateObject10$k || (_templateObject10$k = _taggedTemplateLiteral(["Extract"]))),
  /** Stagger and create a wandering monster 1-3 times per day */
  Digitize: $skill(_templateObject11$k || (_templateObject11$k = _taggedTemplateLiteral(["Digitize"]))),
  /** Stagger and deal 25% of enemy HP in damage once per combat */
  Compress: $skill(_templateObject12$j || (_templateObject12$j = _taggedTemplateLiteral(["Compress"]))),
  /** Double monster's HP, attack, defence, attacks per round and item drops once per fight and once per day (five in The Source) */
  Duplicate: $skill(_templateObject13$h || (_templateObject13$h = _taggedTemplateLiteral(["Duplicate"]))),
  /** Causes government agent/Source Agent wanderer next turn once per combat and three times per day */
  Portscan: $skill(_templateObject14$h || (_templateObject14$h = _taggedTemplateLiteral(["Portscan"]))),
  /** Increase Max MP by 100% and recover 1000 MP once per combat with a 30 turn cooldown */
  Turbo: $skill(_templateObject15$h || (_templateObject15$h = _taggedTemplateLiteral(["Turbo"])))
};
/**
 * Make a skill available.
 * The Source Terminal can give the player access to two skills at any time
 *
 * @param skills Skill or 2-tuple of Skills to learn
 * @see Skills
 * @returns Whether our current skills match the ones we asked for
 */
function educate(skills) {
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  if (arrayEquals(skillsArray, getSkills())) return true;
  var _iterator = _createForOfIteratorHelper(skillsArray),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var skill = _step.value;
      if (!Object.values(Skills).includes(skill)) return false;
      kolmafia.cliExecute("terminal educate ".concat(skill.name.toLowerCase(), ".edu"));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return true;
}
/**
 * @returns The Skills currently available from Source Terminal
 */
function getSkills() {
  return ["sourceTerminalEducate1", "sourceTerminalEducate2"].map(p => get$2(p)).filter(Boolean).map(s => kolmafia.Skill.get(s.slice(0, -4)));
}
/**
 * @param skills A Skill or 2-tuple of Skills to check if we currently have active
 * @returns Whether the input agrees with our current skills
 */
function isCurrentSkill(skills) {
  var currentSkills = getSkills();
  var skillsArray = Array.isArray(skills) ? skills.slice(0, 2) : [skills];
  return skillsArray.every(skill => currentSkills.includes(skill));
}
/**
 * Items that can be generated by the Source Terminal
 */
new Map([[$item(_templateObject16$h || (_templateObject16$h = _taggedTemplateLiteral(["browser cookie"]))), "food.ext"], [$item(_templateObject17$h || (_templateObject17$h = _taggedTemplateLiteral(["hacked gibson"]))), "booze.ext"], [$item(_templateObject18$g || (_templateObject18$g = _taggedTemplateLiteral(["Source shades"]))), "goggles.ext"], [$item(_templateObject19$g || (_templateObject19$g = _taggedTemplateLiteral(["Source terminal GRAM chip"]))), "gram.ext"], [$item(_templateObject20$f || (_templateObject20$f = _taggedTemplateLiteral(["Source terminal PRAM chip"]))), "pram.ext"], [$item(_templateObject21$f || (_templateObject21$f = _taggedTemplateLiteral(["Source terminal SPAM chip"]))), "spam.ext"], [$item(_templateObject22$f || (_templateObject22$f = _taggedTemplateLiteral(["Source terminal CRAM chip"]))), "cram.ext"], [$item(_templateObject23$f || (_templateObject23$f = _taggedTemplateLiteral(["Source terminal DRAM chip"]))), "dram.ext"], [$item(_templateObject24$f || (_templateObject24$f = _taggedTemplateLiteral(["Source terminal TRAM chip"]))), "tram.ext"], [$item(_templateObject25$f || (_templateObject25$f = _taggedTemplateLiteral(["software bug"]))), "familiar.ext"]]);
/**
 * @returns chips currently installed to player's Source Terminal
 */
function getChips() {
  return get$2("sourceTerminalChips").split(",");
}
/**
 * @returns number of times digitize was cast today
 */
function getDigitizeUses() {
  return get$2("_sourceTerminalDigitizeUses");
}
/**
 * @returns Monster that is currently digitized, else `null`
 */
function getDigitizeMonster() {
  return get$2("_sourceTerminalDigitizeMonster");
}
/**
 * @returns maximum number of digitizes player can cast
 */
function getMaximumDigitizeUses() {
  var chips = getChips();
  return 1 + (chips.includes("TRAM") ? 1 : 0) + (chips.includes("TRIGRAM") ? 1 : 0);
}
/**
 * @returns whether the player could theoretically cast Digitize
 */
function couldDigitize() {
  return getDigitizeUses() < getMaximumDigitizeUses();
}
/**
 * Sets Digitize to be one of our skills if it currently isn't
 *
 * @returns Whether we expect that Digitize is one of our active skills now
 */
function prepareDigitize() {
  if (!isCurrentSkill(Skills.Digitize)) {
    return educate(Skills.Digitize);
  }
  return true;
}
/**
 * Determines whether the player can cast Digitize immediately
 * This only considers whether the player has learned the skill
 * and has sufficient daily casts remaining, not whether they have sufficient MP
 *
 * @returns Whether the player can currently cast digitize, ignoring the MP cost but accounting for other factors
 */
function canDigitize() {
  return couldDigitize() && getSkills().includes(Skills.Digitize);
}
new Copier(() => couldDigitize(), () => prepareDigitize(), () => canDigitize(), () => getDigitizeMonster());

var _templateObject$z;
$item(_templateObject$z || (_templateObject$z = _taggedTemplateLiteral(["Witchess Set"])));
/**
 * @returns How many Witchess fights have we done so far today?
 */
function fightsDone() {
  return get$2("_witchessFights");
}
var pieces = kolmafia.Monster.get(["Witchess Pawn", "Witchess Knight", "Witchess Bishop", "Witchess Rook", "Witchess Queen", "Witchess King", "Witchess Witch", "Witchess Ox"]);
/**
 * Fight a Witchess piece of your choice
 *
 * @param piece The piece to fight
 * @param combatParams Any parameters you'd like to pass to `runCombat`
 * @returns The value of `runCombat()`, which is the page html of the final round
 */
function fightPiece(piece) {
  if (!pieces.includes(piece)) throw new Error("That is not a valid piece.");
  if (!kolmafia.visitUrl("campground.php?action=witchess").includes("whichchoice value=1181")) {
    throw new Error("Failed to open Witchess.");
  }
  if (!kolmafia.runChoice(1).includes("whichchoice=1182")) {
    throw new Error("Failed to visit shrink ray.");
  }
  if (!kolmafia.visitUrl("choice.php?option=1&pwd=".concat(kolmafia.myHash(), "&whichchoice=1182&piece=").concat(piece.id), false).includes(piece.name)) {
    throw new Error("Failed to start fight.");
  }
  for (var _len = arguments.length, combatParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    combatParams[_key - 1] = arguments[_key];
  }
  return kolmafia.runCombat.apply(void 0, combatParams);
}

/**
 * @returns Whether or not the horsery is available
 */
function have$a() {
  return get$2("horseryAvailable");
}
/**
 * @returns Your current horse; `null` if you are horseless
 */
function current() {
  var horse = get$2("_horsery");
  return horse ? horse.split(" ")[0] : null;
}
/**
 * @param horse The horse to change to
 * @returns Whether, at the end of all things, that is your horse
 */
function changeHorse(horse) {
  if (horse === current()) return true;
  if (!have$a()) return false;
  kolmafia.cliExecute("horsery ".concat(horse));
  return current() === horse;
}

var MUMMERY_MODS_PATTERN = /\[(\d*)\*fam\(([^)]*)\)/;
/**
 * Parses the _mummeryMods preference into a Map for easier use.
 *
 * @returns A map, mapping Familiars to a Tuple consisting of the NumericModifier attached to the familiar, and the value thereof.
 */
function currentCostumes() {
  return new Map(Object.entries(kolmafia.splitModifiers(get$2("_mummeryMods"))).map(_ref => {
    var _ref2 = _slicedToArray(_ref, 2),
      modifier = _ref2[0],
      value = _ref2[1];
    if (!isNumericModifier(modifier)) return null;
    var matcher = value.match(MUMMERY_MODS_PATTERN);
    if (!matcher) return null;
    return [kolmafia.Familiar.get(matcher[2]), [modifier, Number(matcher[1])]];
  }).filter(notNull));
}

var _templateObject$y, _templateObject2$u;
/**
 * @returns Do we `have` an Enamorang?
 */
function haveLovEnamorang() {
  return have$c($item(_templateObject$y || (_templateObject$y = _taggedTemplateLiteral(["LOV Enamorang"]))));
}
/**
 * @returns How many enamorangs have we used today?
 */
function getLovEnamorangUses() {
  return get$2("_enamorangs");
}
/**
 * @returns Can we currently use an enamorang?
 */
function couldUseLoveEnamorang() {
  return !haveWandererCounter(Wanderer.Enamorang) && getLovEnamorangUses() < 3 && haveLovEnamorang();
}
/**
 * @returns The Monster currently in our enamorang; `null` for none
 */
function getLovEnamorangMonster() {
  return get$2("enamorangMonster");
}
new Copier(() => couldUseLoveEnamorang(), null, () => couldUseLoveEnamorang(), () => getLovEnamorangMonster());
/**
 * Internal function used for `fightAll`
 *
 * @param equipment The equipment to select from the tunnel
 * @returns The relevant choice option
 */
function equipmentChoice(equipment) {
  switch (equipment) {
    case "LOV Eardigan":
      return 1;
    case "LOV Epaulettes":
      return 2;
    case "LOV Earring":
      return 3;
  }
}
/**
 *Internal function used for `fightAll`
 *
 * @param effect The effect to select from the tunnel
 * @returns The relevant choice option
 */
function effectChoice(effect) {
  switch (effect) {
    case "Lovebotamy":
      return 1;
    case "Open Heart Surgery":
      return 2;
    case "Wandering Eye Surgery":
      return 3;
  }
}
/**
 * Internal function used for `fightAll`
 *
 * @param extra The extra item to select from the tunnel
 * @returns The relevant choice option
 */
function extraChoice(extra) {
  switch (extra) {
    case "LOV Enamorang":
      return 1;
    case "LOV Emotionizer":
      return 2;
    case "LOV Extraterrestrial Chocolate":
      return 3;
    case "LOV Echinacea Bouquet":
      return 4;
    case "LOV Elephant":
      return 5;
    case "toast":
      return 6;
    case null:
      return 7;
  }
}
/**
 * Fight all LOV monsters and get buffs/equipment.
 *
 * @param equipment Equipment to take from LOV.
 * @param effect Effect to take from LOV.
 * @param extra Extra item to take from LOV.
 */
function fightAll(equipment, effect, extra) {
  withChoices({
    1222: 1,
    1223: 1,
    1224: equipmentChoice(equipment),
    1225: 1,
    1226: effectChoice(effect),
    1227: 1,
    1228: extraChoice(extra)
  }, () => {
    kolmafia.adv1($location(_templateObject2$u || (_templateObject2$u = _taggedTemplateLiteral(["The Tunnel of L.O.V.E."]))), 0, "");
  });
}

/**
 * Returns Infinity for counters that do not exist, and otherwise returns the duration of the counter
 *
 * @param counter The name of the counter in question
 * @returns Infinity if the counter does not exist; otherwise returns the duration of the counter
 */
function get(counter) {
  var value = kolmafia.getCounter(counter);
  // getCounter returns -1 for counters that don't exist, but it also returns -1 for counters whose value is -1
  if (value === -1) {
    // if we have a counter with value -1, we check to see if that counter exists via getCounters()
    // We return null if it doesn't exist
    return kolmafia.getCounters(counter, -1, -1).trim() === "" ? Infinity : -1;
  }
  return value;
}
/**
 * The world is everything that is the case. This determines which counters are the case.
 *
 * @param counter The name of the counter in question
 * @returns True for counters which currently exist; false for those which do not
 */
function exists(counter) {
  return kolmafia.getCounter(counter) !== -1 || kolmafia.getCounters(counter, -1, -1).trim() !== "";
}

var _templateObject$x;
$item(_templateObject$x || (_templateObject$x = _taggedTemplateLiteral(["SongBoom\u2122 BoomBox"])));
var keywords = {
  "Eye of the Giger": "spooky",
  "Food Vibrations": "food",
  "Remainin' Alive": "dr",
  "These Fists Were Made for Punchin'": "damage",
  "Total Eclipse of Your Meat": "meat"
};
var songBoomSongs = new Set(Object.keys(keywords));
/**
 * @returns The `SongBoomSong` you currently have active; `null` if none is active at this time
 */
function song() {
  var stored = get$2("boomBoxSong");
  return songBoomSongs.has(stored) ? stored : null;
}
/**
 * @returns Song changes left today.
 */
function songChangesLeft() {
  return get$2("_boomBoxSongsLeft");
}
/**
 * Change the song. Throws an error if unable.
 *
 * @param newSong Song to change to.
 * @returns Whether we successfully changed the song; `false` thus means that this was already our current song.
 */
function setSong(newSong) {
  if (song() !== newSong) {
    if (songChangesLeft() === 0) throw new Error("Out of song changes!");
    kolmafia.cliExecute("boombox ".concat(keywords[newSong] ));
    return true;
  } else {
    return false;
  }
}

var _templateObject$w, _templateObject2$t, _templateObject3$r, _templateObject4$q, _templateObject5$q, _templateObject6$q, _templateObject7$q, _templateObject8$m, _templateObject9$l, _templateObject0$k, _templateObject1$j, _templateObject10$j, _templateObject11$j, _templateObject12$i, _templateObject13$g, _templateObject14$g, _templateObject15$g, _templateObject16$g, _templateObject17$g, _templateObject18$f, _templateObject19$f;
var headBuffs = [$effect(_templateObject$w || (_templateObject$w = _taggedTemplateLiteral(["Hot-Headed"]))), $effect(_templateObject2$t || (_templateObject2$t = _taggedTemplateLiteral(["Cold as Nice"]))), $effect(_templateObject3$r || (_templateObject3$r = _taggedTemplateLiteral(["A Brush with Grossness"]))), $effect(_templateObject4$q || (_templateObject4$q = _taggedTemplateLiteral(["Does It Have a Skull In There??"]))), $effect(_templateObject5$q || (_templateObject5$q = _taggedTemplateLiteral(["Oiled, Slick"]))), $effect(_templateObject6$q || (_templateObject6$q = _taggedTemplateLiteral(["Lack of Body-Building"]))), $effect(_templateObject7$q || (_templateObject7$q = _taggedTemplateLiteral(["We're All Made of Starfish"]))), $effect(_templateObject8$m || (_templateObject8$m = _taggedTemplateLiteral(["Pomp & Circumsands"]))), $effect(_templateObject9$l || (_templateObject9$l = _taggedTemplateLiteral(["Resting Beach Face"]))), $effect(_templateObject0$k || (_templateObject0$k = _taggedTemplateLiteral(["Do I Know You From Somewhere?"]))), $effect(_templateObject1$j || (_templateObject1$j = _taggedTemplateLiteral(["You Learned Something Maybe!"])))];
var head = {
  HOT: $effect(_templateObject10$j || (_templateObject10$j = _taggedTemplateLiteral(["Hot-Headed"]))),
  COLD: $effect(_templateObject11$j || (_templateObject11$j = _taggedTemplateLiteral(["Cold as Nice"]))),
  STENCH: $effect(_templateObject12$i || (_templateObject12$i = _taggedTemplateLiteral(["A Brush with Grossness"]))),
  SPOOKY: $effect(_templateObject13$g || (_templateObject13$g = _taggedTemplateLiteral(["Does It Have a Skull In There??"]))),
  SLEAZE: $effect(_templateObject14$g || (_templateObject14$g = _taggedTemplateLiteral(["Oiled, Slick"]))),
  MUSCLE: $effect(_templateObject15$g || (_templateObject15$g = _taggedTemplateLiteral(["Lack of Body-Building"]))),
  MYSTICALITY: $effect(_templateObject16$g || (_templateObject16$g = _taggedTemplateLiteral(["We're All Made of Starfish"]))),
  INITIATIVE: $effect(_templateObject17$g || (_templateObject17$g = _taggedTemplateLiteral(["Resting Beach Face"]))),
  FAMILIAR: $effect(_templateObject18$f || (_templateObject18$f = _taggedTemplateLiteral(["Do I Know You From Somewhere?"]))),
  EXPERIENCE: $effect(_templateObject19$f || (_templateObject19$f = _taggedTemplateLiteral(["You Learned Something Maybe!"])))
};
/**
 * Determines whether a given Beach Head can be combed today
 *
 * @param target The head in question, either as the Effect it grants or as its name
 * @returns Whether the given head is combable
 */
function headAvailable(target) {
  var effect = target instanceof kolmafia.Effect ? target : head[target];
  var headNumber = 1 + headBuffs.indexOf(effect);
  return kolmafia.getProperty("beachHeadsUnlocked").split(",").includes(headNumber.toString()) && !kolmafia.getProperty("_beachHeadsUsed").split(",").includes(headNumber.toString());
}
/**
 * Tries to comb a given Beach Head
 *
 * @param target The Beach Head to comb, given either as its effect or as its name
 * @returns Whether we have the head effect at the end of the whole rigamarole; this means that if you `tryHead` when you already have the effect, it will (presumably) fail to comb but will return `true`
 */
function tryHead(target) {
  var effect = target instanceof kolmafia.Effect ? target : head[target];
  if (!headBuffs.includes(effect)) return false;
  if (!headAvailable(target)) return false;
  kolmafia.cliExecute(effect.default);
  return have$c(effect);
}

/**
 * @returns Number of cloud buffs acquired today
 */
function getCloudBuffsToday() {
  return get$2("_campAwayCloudBuffs");
}
/**
 * @returns Number of cloud buffs acquired today
 */
function getSmileBuffsToday() {
  return get$2("_campAwaySmileBuffs");
}
/**
 * @returns Number of buffs acquired today from gazing at the stars
 */
function getBuffsToday() {
  return getCloudBuffsToday() + getSmileBuffsToday();
}
/**
 * @returns Whether player has acquired all their buffs today from gazing at the stars
 */
function canGaze() {
  return getBuffsToday() < 4;
}
/**
 * Gaze at the stars
 */
function gaze() {
  if (!canGaze()) return;
  kolmafia.visitUrl("place.php?whichplace=campaway&action=campaway_sky");
}

var _templateObject$v, _templateObject2$s, _templateObject3$q, _templateObject4$p, _templateObject5$p, _templateObject6$p, _templateObject7$p;
$item(_templateObject$v || (_templateObject$v = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"])));
var currentMode = () => get$2("retroCapeWashingInstructions");
new Map([[$skill(_templateObject2$s || (_templateObject2$s = _taggedTemplateLiteral(["Smooch of the Daywalker"]))), ["vampire", "kiss"]], [$skill(_templateObject3$q || (_templateObject3$q = _taggedTemplateLiteral(["Slay the Dead"]))), ["vampire", "kill"]], [$skill(_templateObject4$p || (_templateObject4$p = _taggedTemplateLiteral(["Unleash the Devil's Kiss"]))), ["heck", "kiss"]], [$skill(_templateObject5$p || (_templateObject5$p = _taggedTemplateLiteral(["Deploy Robo-Handcuffs"]))), ["robot", "hold"]], [$skill(_templateObject6$p || (_templateObject6$p = _taggedTemplateLiteral(["Blow a Robo-Kiss"]))), ["robot", "kiss"]], [$skill(_templateObject7$p || (_templateObject7$p = _taggedTemplateLiteral(["Precision Shot"]))), ["robot", "kill"]]]);

var _templateObject$u, _templateObject2$r;
$item(_templateObject$u || (_templateObject$u = _taggedTemplateLiteral(["Daylight Shavings Helmet"])));
var buffs$3 = $effects(_templateObject2$r || (_templateObject2$r = _taggedTemplateLiteral(["Spectacle Moustache, Toiletbrush Moustache, Barbell Moustache, Grizzly Beard, Surrealist's Moustache, Musician's Musician's Moustache, Gull-Wing Moustache, Space Warlord's Beard, Pointy Wizard Beard, Cowboy Stache, Friendly Chops"])));
/**
 * Checks to see if there are any beardbuffs you have more than 1 turn of, determining whether you are eligible to receive a buff post-combat.
 *
 * @returns Whether you current are able to get a buff from the Daylight Shaving Helmet.
 */
function buffAvailable() {
  return !buffs$3.some(buff => have$c(buff, 2));
}

var _templateObject$t, _templateObject2$q, _templateObject3$p, _templateObject4$o, _templateObject5$o, _templateObject6$o, _templateObject7$o, _templateObject8$l, _templateObject9$k;
var item = kolmafia.Item.get("autumn-aton");
/**
 * Is the autumn-aton currently in your inventory, available to deploy?
 *
 * @returns The whether the autumn-aton is currently available for deployment
 */
function available() {
  return kolmafia.availableAmount(item) > 0;
}
/**
 * Internal function used to parse the fallbot's choice adventure to determine which zones are currently available
 *
 * @param html The pagetext of the fallbot's choice adventure
 * @returns The locations currently available to send the fallbot to
 */
function checkLocations(html) {
  return kolmafia.xpath(html, '//select[@name="heythereprogrammer"]//option[position()>1]/@value').map(id => kolmafia.toLocation(Number(id)));
}
function validateLocation(list, location) {
  return list.some(loc => loc.id === location.id);
}
/**
 * Deploy the autumn-aton to a location of your choosing.
 *
 * @param target A location to send the autumn-aton to, or a prioritized list of locations to send it to, or a function to pick which location to send it to.
 * @param upgrade Should we apply any upgrades we see available?
 * @returns Where we ended up sending the autumn-aton; null if we didn't send it off.
 */
function sendTo(target) {
  var upgrade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (!available()) return null;
  var pageHtml = directlyUse(item);
  if (upgrade && kolmafia.availableChoiceOptions()[1]) kolmafia.runChoice(1);
  var locationsAvailable = checkLocations(pageHtml);
  var location = target instanceof kolmafia.Location ? target : Array.isArray(target) ? target.find(l => validateLocation(locationsAvailable, l)) : target(locationsAvailable);
  if (!location) return null;
  if (!validateLocation(locationsAvailable, location)) return null;
  if (!kolmafia.handlingChoice()) directlyUse(item);
  kolmafia.runChoice(2, "heythereprogrammer=".concat(location.id));
  if (kolmafia.handlingChoice()) kolmafia.visitUrl("main.php");
  return location;
}
({
  outdoor: {
    low: {
      item: $item(_templateObject$t || (_templateObject$t = _taggedTemplateLiteral(["autumn leaf"])))
    },
    mid: {
      item: $item(_templateObject2$q || (_templateObject2$q = _taggedTemplateLiteral(["autumn debris shield"])))
    },
    high: {
      item: $item(_templateObject3$p || (_templateObject3$p = _taggedTemplateLiteral(["autumn leaf pendant"])))
    }
  },
  indoor: {
    low: {
      item: $item(_templateObject4$o || (_templateObject4$o = _taggedTemplateLiteral(["AutumnFest ale"])))
    },
    mid: {
      item: $item(_templateObject5$o || (_templateObject5$o = _taggedTemplateLiteral(["autumn-spice donut"])))
    },
    high: {
      item: $item(_templateObject6$o || (_templateObject6$o = _taggedTemplateLiteral(["autumn breeze"])))
    }
  },
  underground: {
    low: {
      item: $item(_templateObject7$o || (_templateObject7$o = _taggedTemplateLiteral(["autumn sweater-weather sweater"])))
    },
    mid: {
      item: $item(_templateObject8$l || (_templateObject8$l = _taggedTemplateLiteral(["autumn dollar"])))
    },
    high: {
      item: $item(_templateObject9$k || (_templateObject9$k = _taggedTemplateLiteral(["autumn years wisdom"])))
    }
  }
});

var _templateObject$s;
var locket = $item(_templateObject$s || (_templateObject$s = _taggedTemplateLiteral(["combat lover's locket"])));
/**
 * @returns Whether you `have` the Combat Lover's Locket
 */
function have$9() {
  return have$c(locket);
}
function parseLocketProperty() {
  return get$2("_locketMonstersFought").split(",").filter(id => id.trim().length > 0);
}
/**
 * Determines how many reminisces remain by parsing the _locketMonstersFought property.
 *
 * @returns The number of reminisces a player has available; 0 if they lack the Locket.
 */
function reminiscesLeft() {
  return have$9() ? clamp(3 - parseLocketProperty().length, 0, 3) : 0;
}
/**
 * Determines which monsters were reminisced today by parsing the _locketMonstersFought property.
 *
 * @returns An array consisting of the Monsters reminisced today.
 */
function monstersReminisced() {
  return parseLocketProperty().map(id => kolmafia.toMonster(id));
}
/**
 * Fight a Monster using the Combat Lover's Locket
 *
 * @param monster The Monster to fight
 * @param combatParams Any parameters you'd like to pass to `runCombat`
 * @returns false if we are unable to reminisce about this monster. Else, returns whether, at the end of all things, we have reminisced about this monster.
 */
function reminisce(monster) {
  if (!have$9() || reminiscesLeft() === 0 || !kolmafia.getLocketMonsters()[monster.name]) {
    return false;
  }
  kolmafia.cliExecute("reminisce ".concat(monster));
  for (var _len = arguments.length, combatParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    combatParams[_key - 1] = arguments[_key];
  }
  kolmafia.runCombat.apply(void 0, combatParams);
  return monstersReminisced().includes(monster);
}

var _templateObject$r;
var helmet = $item(_templateObject$r || (_templateObject$r = _taggedTemplateLiteral(["Apriling band helmet"])));
/**
 * @returns whether you `have` the Apriling band helmet
 */
function have$8() {
  return have$c(helmet);
}
var MARCHING_SONGS = Object.freeze(["Apriling Band Patrol Beat", "Apriling Band Battle Cadence", "Apriling Band Celebration Bop"]);
Object.freeze(MARCHING_SONGS.map(song => kolmafia.toEffect(song)));
var INSTRUMENTS = Object.freeze(["Apriling band saxophone", "Apriling band quad tom", "Apriling band tuba", "Apriling band staff", "Apriling band piccolo"]);
Object.freeze(INSTRUMENTS.map(instrument => kolmafia.toItem(instrument)));
var visitConduct = () => kolmafia.visitUrl("inventory.php?pwd&action=apriling");
function makeConductFunction(mafiaClass, canDo, set, offset) {
  return input => {
    if (!canDo()) return false;
    var _ref = typeof input === "string" ? [input, mafiaClass.get(input)] : [input.name, input],
      _ref2 = _slicedToArray(_ref, 2),
      name = _ref2[0],
      instance = _ref2[1];
    if (have$c(instance)) return true;
    var key = set.indexOf(name);
    if (key === -1) return false;
    visitConduct();
    kolmafia.runChoice(key + offset);
    kolmafia.runChoice(9);
    return have$c(instance);
  };
}
/**
 * @returns Whether we can currently change the marching song of our Apriling Band
 */
function canChangeSong() {
  return have$8() && get$2("nextAprilBandTurn") <= kolmafia.totalTurnsPlayed();
}
/**
 * Instructs your Apriling band to play the given song, returning whether it's successfully playing
 *
 * @param song The song for your band to play--either the effect's name or the effect itself.
 *
 * @returns Whether we have the effect, at the end of all things
 */
var changeSong = makeConductFunction(kolmafia.Effect, canChangeSong, MARCHING_SONGS, 1);

/**
 * @returns The current familiar your cupid bow is getting the equip of (null if there isn't one)
 */
function currentFamiliar() {
  return get$2("cupidBowLastFamiliar");
}
/**
 * @returns An array of familiars who have received their drops from the cupid bow today
 */
function familiarsToday() {
  return get$2("_cupidBowFamiliars").split(";").map(id => kolmafia.toFamiliar(Number(id)));
}
/**
 * Determine whether you've obtained the equipment of a given familiar with the TCB today
 * @param familiar The familiar in question
 * @returns Whether you've obtained the equipment from that familiar via the TCB today
 */
function doneToday(familiar) {
  return RegExp("(?:^|;)".concat(familiar.id, "(?:$|;)")).test(get$2("_cupidBowFamiliars"));
}

var _templateObject$q, _templateObject2$p, _templateObject3$o, _templateObject4$n, _templateObject5$n, _templateObject6$n, _templateObject7$n, _templateObject8$k, _templateObject9$j, _templateObject0$j, _templateObject1$i, _templateObject10$i, _templateObject11$i, _templateObject12$h, _templateObject13$f, _templateObject14$f, _templateObject15$f, _templateObject16$f, _templateObject17$f, _templateObject18$e, _templateObject19$e, _templateObject20$e, _templateObject21$e, _templateObject22$e, _templateObject23$e, _templateObject24$e, _templateObject25$e, _templateObject26$e, _templateObject27$e, _templateObject28$e, _templateObject29$e, _templateObject30$d, _templateObject31$d, _templateObject32$d, _templateObject33$c, _templateObject34$c, _templateObject35$c, _templateObject36$c, _templateObject37$b, _templateObject38$a, _templateObject39$a, _templateObject40$a, _templateObject41$a, _templateObject42$a;
/**
 * @returns Whether you `have` the Leprecondo
 */
function have$7() {
  return have$c($item(_templateObject$q || (_templateObject$q = _taggedTemplateLiteral(["Leprecondo"]))));
}
var NEEDS = Object.freeze(["exercise", "mental stimulation", "dumb entertainment", "food", "booze", "sleep"]);
var FURNITURE_PIECES = Object.freeze(["empty", "buckets of concrete", "thrift store oil painting", "boxes of old comic books", "second-hand hot plate", "beer cooler", "free mattress", "gigantic chess set", "UltraDance karaoke machine", "cupcake treadmill", "beer pong table", "padded weight bench", "internet-connected laptop", "sous vide laboratory", "programmable blender", "sensory deprivation tank", "fruit-smashing robot", "ManCave™ sports bar set", "couch and flatscreen", "kegerator", "fine upholstered dining set", "whiskeybed", "high-end home workout system", "complete classics library", "ultimate retro game console", "Omnipot", "fully-stocked wet bar", "four-poster bed"]);
var Furniture = Object.freeze({
  "beer cooler": {
    booze: $items(_templateObject2$p || (_templateObject2$p = _taggedTemplateLiteral(["beer bomb, bloody beer, ice-cold fotie, ice-cold Sir Schlitz, ice-cold Willer, overpriced \"imported\" beer, plain old beer"])))
  },
  "beer pong table": {
    booze: $items(_templateObject3$o || (_templateObject3$o = _taggedTemplateLiteral(["beer bomb, bloody beer, ice-cold fotie, ice-cold Sir Schlitz, ice-cold Willer, overpriced \"imported\" beer, plain old beer"]))),
    exercise: $item(_templateObject4$n || (_templateObject4$n = _taggedTemplateLiteral(["table tennis ball"])))
  },
  "boxes of old comic books": {
    "dumb entertainment": {
      effect: $effect(_templateObject5$n || (_templateObject5$n = _taggedTemplateLiteral(["Wasting Time"]))),
      duration: 10
    }
  },
  "buckets of concrete": {
    exercise: {
      effect: $effect(_templateObject6$n || (_templateObject6$n = _taggedTemplateLiteral(["Gym Bros"]))),
      duration: 10
    }
  },
  "complete classics library": {
    "mental stimulation": $item(_templateObject7$n || (_templateObject7$n = _taggedTemplateLiteral(["leprechaun antidepressant pill"])))
  },
  "couch and flatscreen": {
    "dumb entertainment": {
      effect: $effect(_templateObject8$k || (_templateObject8$k = _taggedTemplateLiteral(["Your Days Are Numbed"]))),
      duration: 10
    },
    sleep: {
      effect: $effect(_templateObject9$j || (_templateObject9$j = _taggedTemplateLiteral(["Good Night's Sleep"]))),
      duration: 10
    }
  },
  "cupcake treadmill": {
    exercise: {
      effect: $effect(_templateObject0$j || (_templateObject0$j = _taggedTemplateLiteral(["Your Days Are Numbed"]))),
      duration: 10
    },
    food: $item(_templateObject1$i || (_templateObject1$i = _taggedTemplateLiteral(["standard-issue cupcake"])))
  },
  "fine upholstered dining set": {
    food: $items(_templateObject10$i || (_templateObject10$i = _taggedTemplateLiteral(["boring spaghetti, delicious noodles, goat cheese pizza, sausage pizza, spicy bean burrito, spicy noodles"]))),
    sleep: {
      effect: $effect(_templateObject11$i || (_templateObject11$i = _taggedTemplateLiteral(["Sur La Table"]))),
      duration: 10
    }
  },
  empty: {},
  "four-poster bed": {
    sleep: {
      effect: $effect(_templateObject12$h || (_templateObject12$h = _taggedTemplateLiteral(["Spacious Night's Sleep"]))),
      duration: 10
    }
  },
  "free mattress": {
    sleep: {
      effect: $effect(_templateObject13$f || (_templateObject13$f = _taggedTemplateLiteral(["Good Night's Sleep"]))),
      duration: 10
    }
  },
  "fruit-smashing robot": {
    "dumb entertainment": {
      effect: $effect(_templateObject14$f || (_templateObject14$f = _taggedTemplateLiteral(["You Might Have Gotten Wet"]))),
      duration: 10
    },
    food: $items(_templateObject15$f || (_templateObject15$f = _taggedTemplateLiteral(["cherry, cranberries, grapefruit, grapes, kiwi, kumquat, lemon, lime, orange, papaya, raspberry, strawberry, tangerine"])))
  },
  "fully-stocked wet bar": {
    booze: $items(_templateObject16$f || (_templateObject16$f = _taggedTemplateLiteral(["Divine sidecar, prussian cathouse sidecar, tangarita sidecar"])))
  },
  "gigantic chess set": {
    exercise: {
      effect: $effect(_templateObject17$f || (_templateObject17$f = _taggedTemplateLiteral(["Work Out Smarter, Not Harder"]))),
      duration: 10
    },
    "mental stimulation": {
      effect: $effect(_templateObject18$e || (_templateObject18$e = _taggedTemplateLiteral(["Well Stimulated"]))),
      duration: 10
    }
  },
  "high-end home workout system": {
    exercise: $item(_templateObject19$e || (_templateObject19$e = _taggedTemplateLiteral(["scoop of pre-workout powder"])))
  },
  "internet-connected laptop": {
    "dumb entertainment": {
      effect: $effect(_templateObject20$e || (_templateObject20$e = _taggedTemplateLiteral(["Wasting Time"]))),
      duration: 10
    },
    "mental stimulation": $item(_templateObject21$e || (_templateObject21$e = _taggedTemplateLiteral(["crafting plans"])))
  },
  kegerator: {
    booze: $item(_templateObject22$e || (_templateObject22$e = _taggedTemplateLiteral(["pint of Leprechaun Stout"]))),
    food: $items(_templateObject23$e || (_templateObject23$e = _taggedTemplateLiteral(["bean burrito, plain pizza, spicy mushroom quesadilla, tofu casserole, Trollhouse cookies"])))
  },
  "ManCave™ sports bar set": {
    booze: $items(_templateObject24$e || (_templateObject24$e = _taggedTemplateLiteral(["melted Jell-o shot, shot of blackberry schnapps, shot of nepenthe schnapps, shot of peach schnapps, shot of pear schnapps, shot of rotgut"]))),
    "dumb entertainment": $item(_templateObject25$e || (_templateObject25$e = _taggedTemplateLiteral(["bar dart"])))
  },
  Omnipot: {
    food: $items(_templateObject26$e || (_templateObject26$e = _taggedTemplateLiteral(["Heck ramen, incredible mini-pizza, small beer brat, tiny burrito, tiny peach pie, savoy truffle, white chocolate chip brownies"])))
  },
  "padded weight bench": {
    exercise: {
      effect: $effect(_templateObject27$e || (_templateObject27$e = _taggedTemplateLiteral(["Gym Bros"]))),
      duration: 10
    },
    sleep: {
      effect: $effect(_templateObject28$e || (_templateObject28$e = _taggedTemplateLiteral(["Tired Muscles"]))),
      duration: 10
    }
  },
  "programmable blender": {
    booze: $items(_templateObject29$e || (_templateObject29$e = _taggedTemplateLiteral(["eggnog, extra-spicy bloody mary, grog, white lightning"]))),
    "mental stimulation": {
      effect: $effect(_templateObject30$d || (_templateObject30$d = _taggedTemplateLiteral(["Counter Intelligence"]))),
      duration: 10
    }
  },
  "second-hand hot plate": {
    food: $items(_templateObject31$d || (_templateObject31$d = _taggedTemplateLiteral(["bean burrito, chorizo taco, plain pizza, spicy mushroom quesadilla, tofu casserole, Trollhouse cookies"])))
  },
  "sensory deprivation tank": {
    "mental stimulation": {
      effect: $effect(_templateObject32$d || (_templateObject32$d = _taggedTemplateLiteral(["Alone with Your Thoughts"]))),
      duration: 10
    },
    sleep: {
      effect: $effect(_templateObject33$c || (_templateObject33$c = _taggedTemplateLiteral(["Quiet Night's Sleep"]))),
      duration: 10
    }
  },
  "sous vide laboratory": {
    food: $items(_templateObject34$c || (_templateObject34$c = _taggedTemplateLiteral(["tiny burrito, black forest ham, fishy fish, ham steak, Knoll stir-fry, spooky stir-fry"]))),
    "mental stimulation": {
      effect: $effect(_templateObject35$c || (_templateObject35$c = _taggedTemplateLiteral(["Counter Intelligence"]))),
      duration: 10
    }
  },
  "thrift store oil painting": {
    "mental stimulation": {
      effect: $effect(_templateObject36$c || (_templateObject36$c = _taggedTemplateLiteral(["Well Stimulated"]))),
      duration: 10
    }
  },
  "ultimate retro game console": {
    "dumb entertainment": $item(_templateObject37$b || (_templateObject37$b = _taggedTemplateLiteral(["phosphor traces"])))
  },
  "UltraDance karaoke machine": {
    "dumb entertainment": {
      effect: $effect(_templateObject38$a || (_templateObject38$a = _taggedTemplateLiteral(["Your Days Are Numbed"]))),
      duration: 10
    },
    exercise: {
      effect: $effect(_templateObject39$a || (_templateObject39$a = _taggedTemplateLiteral(["Vicarious Sweat"]))),
      duration: 10
    }
  },
  whiskeybed: {
    booze: $items(_templateObject40$a || (_templateObject40$a = _taggedTemplateLiteral(["Divine sidecar, lumbering jack, old-fashioned, whiskey and cola, whiskey and soda, whiskey bittersweet, whiskey sour"]))),
    sleep: {
      effect: $effect(_templateObject41$a || (_templateObject41$a = _taggedTemplateLiteral(["Moist Night's Sleep"]))),
      duration: 10
    }
  }
});
/**
 * @returns How many more times you can rearrange today
 */
function rearrangesRemaining() {
  return clamp(3 - get$2("_leprecondoRearrangements"), 0, 3);
}
/**
 * @returns Your current Leprecondo need
 */
function currentNeed() {
  return get$2("leprecondoCurrentNeed");
}
/**
 * @returns Your leprecondo need order, as an array
 */
function needOrder() {
  return get$2("leprecondoNeedOrder").split(",");
}
/**
 * @returns The number of leprecondo furniture pieces you've discovered today
 */
function furnitureDiscoveredToday() {
  return get$2("_leprecondoFurniture");
}
/**
 * @returns How many turns ago your Leprecondo need last changed; an imperfect system for tracking because the Leprecondo relies on turn-taking combats.
 */
function lastNeedChange() {
  return kolmafia.turnsPlayed() - get$2("leprecondoLastNeedChange");
}
/**
 * Find the need-result mapping for a given furniture
 * @param furniture The furniture in question
 * @returns An object, keyed by need, whose values correspond to what the furniture gives you
 */
function getStats(furniture) {
  return Furniture[furniture];
}
/**
 * @returns the Furniture elements you've discovered
 */
function discoveredFurniture() {
  return get$2("leprecondoDiscovered").split(",").map(id => FURNITURE_PIECES[Number(id)]);
}
/**
 * @returns the Furniture elements you've installed, in descending order of importance (starting from bottom right and ending in top left)
 */
function installedFurniture() {
  return get$2("leprecondoInstalled").split(",").map(id => FURNITURE_PIECES[Number(id)]).reverse();
}
/**
 * @param furniture A spread array of furniture pieces to install, starting from bottom right and ending in top left
 * @returns Whether or not you successfully installed the desired furniture
 */
function setFurniture() {
  if (rearrangesRemaining() < 0) return false;
  for (var _len = arguments.length, furniture = new Array(_len), _key = 0; _key < _len; _key++) {
    furniture[_key] = arguments[_key];
  }
  var nonemptyFurniture = furniture.filter(f => f !== "empty");
  if (nonemptyFurniture.some(piece => !discoveredFurniture().includes(piece))) return false;
  if (new Set(nonemptyFurniture).size !== nonemptyFurniture.length) return false;
  directlyUse($item(_templateObject42$a || (_templateObject42$a = _taggedTemplateLiteral(["Leprecondo"]))));
  kolmafia.runChoice(1, furniture.map((piece, index) => "r".concat(3 - index, "=").concat(FURNITURE_PIECES.indexOf(piece))).join("&"));
  return arrayEquals(installedFurniture(), furniture);
}
/**
 * @param furniture The set of furniture to examine; defaults to currently installed furniture. Reads furniture from most important (bottom right) to least important (top left)
 * @returns The cumulative bonuses of all currently-installed furniture.
 */
function furnitureBonuses() {
  var furniture = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : installedFurniture();
  return furniture.reduce((acc, piece) => _objectSpread2(_objectSpread2({}, Furniture[piece]), acc), {});
}

var Leprecondo = /*#__PURE__*/Object.freeze({
  __proto__: null,
  FURNITURE_PIECES: FURNITURE_PIECES,
  Furniture: Furniture,
  NEEDS: NEEDS,
  currentNeed: currentNeed,
  discoveredFurniture: discoveredFurniture,
  furnitureBonuses: furnitureBonuses,
  furnitureDiscoveredToday: furnitureDiscoveredToday,
  getStats: getStats,
  have: have$7,
  installedFurniture: installedFurniture,
  lastNeedChange: lastNeedChange,
  needOrder: needOrder,
  rearrangesRemaining: rearrangesRemaining,
  setFurniture: setFurniture
});

var _templateObject$p, _templateObject2$o, _templateObject3$n, _templateObject4$m, _templateObject5$m, _templateObject6$m, _templateObject7$m;
var summonSkill$6 = $skill(_templateObject$p || (_templateObject$p = _taggedTemplateLiteral(["Summon Candy Heart"])));
var libramChance$2 = 1.0 / 6;
var libramExpected$3 = new Map([[$item(_templateObject2$o || (_templateObject2$o = _taggedTemplateLiteral(["green candy heart"]))), libramChance$2], [$item(_templateObject3$n || (_templateObject3$n = _taggedTemplateLiteral(["lavender candy heart"]))), libramChance$2], [$item(_templateObject4$m || (_templateObject4$m = _taggedTemplateLiteral(["orange candy heart"]))), libramChance$2], [$item(_templateObject5$m || (_templateObject5$m = _taggedTemplateLiteral(["pink candy heart"]))), libramChance$2], [$item(_templateObject6$m || (_templateObject6$m = _taggedTemplateLiteral(["white candy heart"]))), libramChance$2], [$item(_templateObject7$m || (_templateObject7$m = _taggedTemplateLiteral(["yellow candy heart"]))), libramChance$2]]);
/**
 * @returns true if the player can Summon Candy Heart
 */
function have$6() {
  return have$c(summonSkill$6);
}
/**
 * @returns map containing the chance of an item to be summoned
 */
function expected$6() {
  return libramExpected$3;
}

var _templateObject$o, _templateObject2$n, _templateObject3$m, _templateObject4$l, _templateObject5$l, _templateObject6$l, _templateObject7$l;
var summonSkill$5 = $skill(_templateObject$o || (_templateObject$o = _taggedTemplateLiteral(["Summon Party Favor"])));
/**
 * @returns true if the player can Summon Party Favors
 */
function have$5() {
  return have$c(summonSkill$5);
}
/**
 * @returns map containing the chance of an item to be summoned
 */
function expected$5() {
  var rareSummons = get$2("_favorRareSummons");
  var totalRareChance = 1.0 / 2 ** (rareSummons + 1);
  var commonChance = (1.0 - totalRareChance) / 3;
  var rareChance = totalRareChance / 3;
  return new Map([[$item(_templateObject2$n || (_templateObject2$n = _taggedTemplateLiteral(["divine blowout"]))), commonChance], [$item(_templateObject3$m || (_templateObject3$m = _taggedTemplateLiteral(["divine can of silly string"]))), commonChance], [$item(_templateObject4$l || (_templateObject4$l = _taggedTemplateLiteral(["divine noisemaker"]))), commonChance], [$item(_templateObject5$l || (_templateObject5$l = _taggedTemplateLiteral(["divine champagne flute"]))), rareChance], [$item(_templateObject6$l || (_templateObject6$l = _taggedTemplateLiteral(["divine champagne popper"]))), rareChance], [$item(_templateObject7$l || (_templateObject7$l = _taggedTemplateLiteral(["divine cracker"]))), rareChance]]);
}

var _templateObject$n, _templateObject2$m, _templateObject3$l, _templateObject4$k, _templateObject5$k, _templateObject6$k, _templateObject7$k;
var summonSkill$4 = $skill(_templateObject$n || (_templateObject$n = _taggedTemplateLiteral(["Summon Love Song"])));
var libramChance$1 = 1.0 / 6;
var libramExpected$2 = new Map([[$item(_templateObject2$m || (_templateObject2$m = _taggedTemplateLiteral(["love song of disturbing obsession"]))), libramChance$1], [$item(_templateObject3$l || (_templateObject3$l = _taggedTemplateLiteral(["love song of icy revenge"]))), libramChance$1], [$item(_templateObject4$k || (_templateObject4$k = _taggedTemplateLiteral(["love song of naughty innuendo"]))), libramChance$1], [$item(_templateObject5$k || (_templateObject5$k = _taggedTemplateLiteral(["love song of smoldering passion"]))), libramChance$1], [$item(_templateObject6$k || (_templateObject6$k = _taggedTemplateLiteral(["love song of sugary cuteness"]))), libramChance$1], [$item(_templateObject7$k || (_templateObject7$k = _taggedTemplateLiteral(["love song of vague ambiguity"]))), libramChance$1]]);
/**
 * @returns true if the player can Summon Love Song
 */
function have$4() {
  return have$c(summonSkill$4);
}
/**
 * @returns map containing the chance of an item to be summoned
 */
function expected$4() {
  return libramExpected$2;
}

var _templateObject$m, _templateObject2$l, _templateObject3$k;
var summonSkill$3 = $skill(_templateObject$m || (_templateObject$m = _taggedTemplateLiteral(["Summon BRICKOs"])));
/**
 * @returns true if the player can Summon BRICKOs
 */
function have$3() {
  return have$c(summonSkill$3);
}
/**
 * @returns map containing the chance of an item to be summoned
 */
function expected$3() {
  var eyeSummons = get$2("_brickoEyeSummons");
  var eyeChance = eyeSummons === 3 ? 0.0 : eyeSummons === 0 ? 0.5 : 1.0 / 3.0;
  return new Map([[$item(_templateObject2$l || (_templateObject2$l = _taggedTemplateLiteral(["BRICKO eye brick"]))), eyeChance], [$item(_templateObject3$k || (_templateObject3$k = _taggedTemplateLiteral(["BRICKO brick"]))), 3.0 - eyeChance]]);
}

var _templateObject$l, _templateObject2$k, _templateObject3$j, _templateObject4$j, _templateObject5$j, _templateObject6$j, _templateObject7$j;
var summonSkill$2 = $skill(_templateObject$l || (_templateObject$l = _taggedTemplateLiteral(["Summon Dice"])));
var libramChance = 1.0 / 6;
var libramExpected$1 = new Map([[$item(_templateObject2$k || (_templateObject2$k = _taggedTemplateLiteral(["d4"]))), libramChance], [$item(_templateObject3$j || (_templateObject3$j = _taggedTemplateLiteral(["d6"]))), libramChance], [$item(_templateObject4$j || (_templateObject4$j = _taggedTemplateLiteral(["d8"]))), libramChance], [$item(_templateObject5$j || (_templateObject5$j = _taggedTemplateLiteral(["d10"]))), libramChance], [$item(_templateObject6$j || (_templateObject6$j = _taggedTemplateLiteral(["d12"]))), libramChance], [$item(_templateObject7$j || (_templateObject7$j = _taggedTemplateLiteral(["d20"]))), libramChance]]);
/**
 * @returns true if the player can Summon Dice
 */
function have$2() {
  return have$c(summonSkill$2);
}
/**
 * @returns map containing the chance of an item to be summoned
 */
function expected$2() {
  return libramExpected$1;
}

var _templateObject$k, _templateObject2$j, _templateObject3$i, _templateObject4$i, _templateObject5$i, _templateObject6$i, _templateObject7$i, _templateObject8$j, _templateObject9$i, _templateObject0$i;
var summonSkill$1 = $skill(_templateObject$k || (_templateObject$k = _taggedTemplateLiteral(["Summon Resolutions"])));
var commonChance = 0.98 / 6;
var rareChance = 0.02 / 3;
var libramExpected = new Map([[$item(_templateObject2$j || (_templateObject2$j = _taggedTemplateLiteral(["resolution: be feistier"]))), commonChance], [$item(_templateObject3$i || (_templateObject3$i = _taggedTemplateLiteral(["resolution: be happier"]))), commonChance], [$item(_templateObject4$i || (_templateObject4$i = _taggedTemplateLiteral(["resolution: be sexier"]))), commonChance], [$item(_templateObject5$i || (_templateObject5$i = _taggedTemplateLiteral(["resolution: be smarter"]))), commonChance], [$item(_templateObject6$i || (_templateObject6$i = _taggedTemplateLiteral(["resolution: be stronger"]))), commonChance], [$item(_templateObject7$i || (_templateObject7$i = _taggedTemplateLiteral(["resolution: be wealthier"]))), commonChance], [$item(_templateObject8$j || (_templateObject8$j = _taggedTemplateLiteral(["resolution: be kinder"]))), rareChance], [$item(_templateObject9$i || (_templateObject9$i = _taggedTemplateLiteral(["resolution: be luckier"]))), rareChance], [$item(_templateObject0$i || (_templateObject0$i = _taggedTemplateLiteral(["resolution: be more adventurous"]))), rareChance]]);
/**
 * @returns Whether the player can Summon Resolutions
 */
function have$1() {
  return have$c(summonSkill$1);
}
/**
 * @returns Map containing the chance of an item to be summoned
 */
function expected$1() {
  return libramExpected;
}

var _templateObject$j, _templateObject2$i, _templateObject3$h, _templateObject4$h, _templateObject5$h, _templateObject6$h, _templateObject7$h, _templateObject8$i;
var summonSkill = $skill(_templateObject$j || (_templateObject$j = _taggedTemplateLiteral(["Summon Taffy"])));
/**
 * @returns true if the player can Summon Taffy
 */
function have() {
  return have$c(summonSkill);
}
/**
 * @returns map containing the chance of an item to be summoned
 */
function expected() {
  var rareSummons = get$2("_taffyRareSummons");
  var yellowSummons = get$2("_taffyYellowSummons");
  var onlyYellow = yellowSummons === 0 && rareSummons === 3;
  var totalRareChance = rareSummons < 4 ? 1.0 / 2 ** (rareSummons + 1) : 0.0;
  var commonChance = (1.0 - totalRareChance) / 4;
  var rareChance = onlyYellow ? 0.0 : totalRareChance / (3 - get$2("_taffyYellowSummons"));
  var yellowChance = yellowSummons === 1 ? 0.0 : onlyYellow ? totalRareChance : rareChance;
  return new Map([[$item(_templateObject2$i || (_templateObject2$i = _taggedTemplateLiteral(["pulled blue taffy"]))), commonChance], [$item(_templateObject3$h || (_templateObject3$h = _taggedTemplateLiteral(["pulled orange taffy"]))), commonChance], [$item(_templateObject4$h || (_templateObject4$h = _taggedTemplateLiteral(["pulled violet taffy"]))), commonChance], [$item(_templateObject5$h || (_templateObject5$h = _taggedTemplateLiteral(["pulled red taffy"]))), commonChance], [$item(_templateObject6$h || (_templateObject6$h = _taggedTemplateLiteral(["pulled indigo taffy"]))), rareChance], [$item(_templateObject7$h || (_templateObject7$h = _taggedTemplateLiteral(["pulled green taffy"]))), rareChance], [$item(_templateObject8$i || (_templateObject8$i = _taggedTemplateLiteral(["pulled yellow taffy"]))), yellowChance]]);
}

var _templateObject8$h, _templateObject9$h, _templateObject0$h, _templateObject1$h, _templateObject10$h, _templateObject11$h, _templateObject12$g;
/**
 *
 * @returns map containing the chance of items to be summoned for each libram summoning skill available
 */
function possibleLibramSummons() {
  var results = new Map();
  if (have$6()) {
    results.set($skill(_templateObject8$h || (_templateObject8$h = _taggedTemplateLiteral(["Summon Candy Heart"]))), expected$6());
  }
  if (have$5()) {
    results.set($skill(_templateObject9$h || (_templateObject9$h = _taggedTemplateLiteral(["Summon Party Favor"]))), expected$5());
  }
  if (have$4()) {
    results.set($skill(_templateObject0$h || (_templateObject0$h = _taggedTemplateLiteral(["Summon Love Song"]))), expected$4());
  }
  if (have$3()) {
    results.set($skill(_templateObject1$h || (_templateObject1$h = _taggedTemplateLiteral(["Summon BRICKOs"]))), expected$3());
  }
  if (have$2()) {
    results.set($skill(_templateObject10$h || (_templateObject10$h = _taggedTemplateLiteral(["Summon Dice"]))), expected$2());
  }
  if (have$1()) {
    results.set($skill(_templateObject11$h || (_templateObject11$h = _taggedTemplateLiteral(["Summon Resolutions"]))), expected$1());
  }
  if (have()) {
    results.set($skill(_templateObject12$g || (_templateObject12$g = _taggedTemplateLiteral(["Summon Taffy"]))), expected());
  }
  return results;
}
/**
 * Determines the best libram to cast, based on expected meat value in mall
 *
 * @returns The best libram to cast, based on expected meat value in mall
 */
function bestLibramToCast() {
  var arr = Array.from(possibleLibramSummons().entries());
  if (!arr.length) return null;
  return maxBy(arr, _ref => {
    var _ref2 = _slicedToArray(_ref, 2),
      itemMap = _ref2[1];
    return sum(Array.from(itemMap.entries()), _ref3 => {
      var _ref4 = _slicedToArray(_ref3, 2),
        item = _ref4[0],
        weight = _ref4[1];
      return weight * getSaleValue(item);
    });
  })[0];
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var es_error_toString = {};

var isCallable;
var hasRequiredIsCallable;
function requireIsCallable() {
  if (hasRequiredIsCallable) return isCallable;
  hasRequiredIsCallable = 1;
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  var documentAll = typeof document == 'object' && document.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  isCallable = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
    return typeof argument == 'function' || argument === documentAll;
  } : function (argument) {
    return typeof argument == 'function';
  };
  return isCallable;
}

var objectDefineProperty = {};

var fails;
var hasRequiredFails;
function requireFails() {
  if (hasRequiredFails) return fails;
  hasRequiredFails = 1;
  fails = function fails(exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };
  return fails;
}

var descriptors;
var hasRequiredDescriptors;
function requireDescriptors() {
  if (hasRequiredDescriptors) return descriptors;
  hasRequiredDescriptors = 1;
  var fails = requireFails();

  // Detect IE8's incomplete defineProperty implementation
  descriptors = !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1] !== 7;
  });
  return descriptors;
}

var globalThis_1;
var hasRequiredGlobalThis;
function requireGlobalThis() {
  if (hasRequiredGlobalThis) return globalThis_1;
  hasRequiredGlobalThis = 1;
  var check = function check(it) {
    return it && it.Math === Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  globalThis_1 =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || check(typeof globalThis_1 == 'object' && globalThis_1) ||
  // eslint-disable-next-line no-new-func -- fallback
  function () {
    return this;
  }() || Function('return this')();
  return globalThis_1;
}

var isObject;
var hasRequiredIsObject;
function requireIsObject() {
  if (hasRequiredIsObject) return isObject;
  hasRequiredIsObject = 1;
  var isCallable = requireIsCallable();
  isObject = function isObject(it) {
    return typeof it == 'object' ? it !== null : isCallable(it);
  };
  return isObject;
}

var documentCreateElement;
var hasRequiredDocumentCreateElement;
function requireDocumentCreateElement() {
  if (hasRequiredDocumentCreateElement) return documentCreateElement;
  hasRequiredDocumentCreateElement = 1;
  var globalThis = requireGlobalThis();
  var isObject = requireIsObject();
  var document = globalThis.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS = isObject(document) && isObject(document.createElement);
  documentCreateElement = function documentCreateElement(it) {
    return EXISTS ? document.createElement(it) : {};
  };
  return documentCreateElement;
}

var ie8DomDefine;
var hasRequiredIe8DomDefine;
function requireIe8DomDefine() {
  if (hasRequiredIe8DomDefine) return ie8DomDefine;
  hasRequiredIe8DomDefine = 1;
  var DESCRIPTORS = requireDescriptors();
  var fails = requireFails();
  var createElement = requireDocumentCreateElement();

  // Thanks to IE8 for its funny defineProperty
  ie8DomDefine = !DESCRIPTORS && !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement('div'), 'a', {
      get: function get() {
        return 7;
      }
    }).a !== 7;
  });
  return ie8DomDefine;
}

var v8PrototypeDefineBug;
var hasRequiredV8PrototypeDefineBug;
function requireV8PrototypeDefineBug() {
  if (hasRequiredV8PrototypeDefineBug) return v8PrototypeDefineBug;
  hasRequiredV8PrototypeDefineBug = 1;
  var DESCRIPTORS = requireDescriptors();
  var fails = requireFails();

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  v8PrototypeDefineBug = DESCRIPTORS && fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () {/* empty */}, 'prototype', {
      value: 42,
      writable: false
    }).prototype !== 42;
  });
  return v8PrototypeDefineBug;
}

var anObject;
var hasRequiredAnObject;
function requireAnObject() {
  if (hasRequiredAnObject) return anObject;
  hasRequiredAnObject = 1;
  var isObject = requireIsObject();
  var $String = String;
  var $TypeError = TypeError;

  // `Assert: Type(argument) is Object`
  anObject = function anObject(argument) {
    if (isObject(argument)) return argument;
    throw new $TypeError($String(argument) + ' is not an object');
  };
  return anObject;
}

var functionBindNative;
var hasRequiredFunctionBindNative;
function requireFunctionBindNative() {
  if (hasRequiredFunctionBindNative) return functionBindNative;
  hasRequiredFunctionBindNative = 1;
  var fails = requireFails();
  functionBindNative = !fails(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = function () {/* empty */}.bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });
  return functionBindNative;
}

var functionCall;
var hasRequiredFunctionCall;
function requireFunctionCall() {
  if (hasRequiredFunctionCall) return functionCall;
  hasRequiredFunctionCall = 1;
  var NATIVE_BIND = requireFunctionBindNative();
  var call = Function.prototype.call;
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  functionCall = NATIVE_BIND ? call.bind(call) : function () {
    return call.apply(call, arguments);
  };
  return functionCall;
}

var getBuiltIn;
var hasRequiredGetBuiltIn;
function requireGetBuiltIn() {
  if (hasRequiredGetBuiltIn) return getBuiltIn;
  hasRequiredGetBuiltIn = 1;
  var globalThis = requireGlobalThis();
  var isCallable = requireIsCallable();
  var aFunction = function aFunction(argument) {
    return isCallable(argument) ? argument : undefined;
  };
  getBuiltIn = function getBuiltIn(namespace, method) {
    return arguments.length < 2 ? aFunction(globalThis[namespace]) : globalThis[namespace] && globalThis[namespace][method];
  };
  return getBuiltIn;
}

var functionUncurryThis;
var hasRequiredFunctionUncurryThis;
function requireFunctionUncurryThis() {
  if (hasRequiredFunctionUncurryThis) return functionUncurryThis;
  hasRequiredFunctionUncurryThis = 1;
  var NATIVE_BIND = requireFunctionBindNative();
  var FunctionPrototype = Function.prototype;
  var call = FunctionPrototype.call;
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
  functionUncurryThis = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
    return function () {
      return call.apply(fn, arguments);
    };
  };
  return functionUncurryThis;
}

var objectIsPrototypeOf;
var hasRequiredObjectIsPrototypeOf;
function requireObjectIsPrototypeOf() {
  if (hasRequiredObjectIsPrototypeOf) return objectIsPrototypeOf;
  hasRequiredObjectIsPrototypeOf = 1;
  var uncurryThis = requireFunctionUncurryThis();
  objectIsPrototypeOf = uncurryThis({}.isPrototypeOf);
  return objectIsPrototypeOf;
}

var environmentUserAgent;
var hasRequiredEnvironmentUserAgent;
function requireEnvironmentUserAgent() {
  if (hasRequiredEnvironmentUserAgent) return environmentUserAgent;
  hasRequiredEnvironmentUserAgent = 1;
  var globalThis = requireGlobalThis();
  var navigator = globalThis.navigator;
  var userAgent = navigator && navigator.userAgent;
  environmentUserAgent = userAgent ? String(userAgent) : '';
  return environmentUserAgent;
}

var environmentV8Version;
var hasRequiredEnvironmentV8Version;
function requireEnvironmentV8Version() {
  if (hasRequiredEnvironmentV8Version) return environmentV8Version;
  hasRequiredEnvironmentV8Version = 1;
  var globalThis = requireGlobalThis();
  var userAgent = requireEnvironmentUserAgent();
  var process = globalThis.process;
  var Deno = globalThis.Deno;
  var versions = process && process.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;
  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }
  environmentV8Version = version;
  return environmentV8Version;
}

var symbolConstructorDetection;
var hasRequiredSymbolConstructorDetection;
function requireSymbolConstructorDetection() {
  if (hasRequiredSymbolConstructorDetection) return symbolConstructorDetection;
  hasRequiredSymbolConstructorDetection = 1;
  /* eslint-disable es/no-symbol -- required for testing */
  var V8_VERSION = requireEnvironmentV8Version();
  var fails = requireFails();
  var globalThis = requireGlobalThis();
  var $String = globalThis.String;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails(function () {
    var symbol = Symbol('symbol detection');
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
  });
  return symbolConstructorDetection;
}

var useSymbolAsUid;
var hasRequiredUseSymbolAsUid;
function requireUseSymbolAsUid() {
  if (hasRequiredUseSymbolAsUid) return useSymbolAsUid;
  hasRequiredUseSymbolAsUid = 1;
  /* eslint-disable es/no-symbol -- required for testing */
  var NATIVE_SYMBOL = requireSymbolConstructorDetection();
  useSymbolAsUid = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == 'symbol';
  return useSymbolAsUid;
}

var isSymbol;
var hasRequiredIsSymbol;
function requireIsSymbol() {
  if (hasRequiredIsSymbol) return isSymbol;
  hasRequiredIsSymbol = 1;
  var getBuiltIn = requireGetBuiltIn();
  var isCallable = requireIsCallable();
  var isPrototypeOf = requireObjectIsPrototypeOf();
  var USE_SYMBOL_AS_UID = requireUseSymbolAsUid();
  var $Object = Object;
  isSymbol = USE_SYMBOL_AS_UID ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn('Symbol');
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
  };
  return isSymbol;
}

var tryToString;
var hasRequiredTryToString;
function requireTryToString() {
  if (hasRequiredTryToString) return tryToString;
  hasRequiredTryToString = 1;
  var $String = String;
  tryToString = function tryToString(argument) {
    try {
      return $String(argument);
    } catch (error) {
      return 'Object';
    }
  };
  return tryToString;
}

var aCallable;
var hasRequiredACallable;
function requireACallable() {
  if (hasRequiredACallable) return aCallable;
  hasRequiredACallable = 1;
  var isCallable = requireIsCallable();
  var tryToString = requireTryToString();
  var $TypeError = TypeError;

  // `Assert: IsCallable(argument) is true`
  aCallable = function aCallable(argument) {
    if (isCallable(argument)) return argument;
    throw new $TypeError(tryToString(argument) + ' is not a function');
  };
  return aCallable;
}

var isNullOrUndefined;
var hasRequiredIsNullOrUndefined;
function requireIsNullOrUndefined() {
  if (hasRequiredIsNullOrUndefined) return isNullOrUndefined;
  hasRequiredIsNullOrUndefined = 1;
  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  isNullOrUndefined = function isNullOrUndefined(it) {
    return it === null || it === undefined;
  };
  return isNullOrUndefined;
}

var getMethod;
var hasRequiredGetMethod;
function requireGetMethod() {
  if (hasRequiredGetMethod) return getMethod;
  hasRequiredGetMethod = 1;
  var aCallable = requireACallable();
  var isNullOrUndefined = requireIsNullOrUndefined();

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  getMethod = function getMethod(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
  };
  return getMethod;
}

var ordinaryToPrimitive;
var hasRequiredOrdinaryToPrimitive;
function requireOrdinaryToPrimitive() {
  if (hasRequiredOrdinaryToPrimitive) return ordinaryToPrimitive;
  hasRequiredOrdinaryToPrimitive = 1;
  var call = requireFunctionCall();
  var isCallable = requireIsCallable();
  var isObject = requireIsObject();
  var $TypeError = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  ordinaryToPrimitive = function ordinaryToPrimitive(input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw new $TypeError("Can't convert object to primitive value");
  };
  return ordinaryToPrimitive;
}

var sharedStore = {exports: {}};

var isPure;
var hasRequiredIsPure;
function requireIsPure() {
  if (hasRequiredIsPure) return isPure;
  hasRequiredIsPure = 1;
  isPure = false;
  return isPure;
}

var defineGlobalProperty;
var hasRequiredDefineGlobalProperty;
function requireDefineGlobalProperty() {
  if (hasRequiredDefineGlobalProperty) return defineGlobalProperty;
  hasRequiredDefineGlobalProperty = 1;
  var globalThis = requireGlobalThis();

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty = Object.defineProperty;
  defineGlobalProperty = function defineGlobalProperty(key, value) {
    try {
      defineProperty(globalThis, key, {
        value: value,
        configurable: true,
        writable: true
      });
    } catch (error) {
      globalThis[key] = value;
    }
    return value;
  };
  return defineGlobalProperty;
}

var hasRequiredSharedStore;
function requireSharedStore() {
  if (hasRequiredSharedStore) return sharedStore.exports;
  hasRequiredSharedStore = 1;
  var IS_PURE = requireIsPure();
  var globalThis = requireGlobalThis();
  var defineGlobalProperty = requireDefineGlobalProperty();
  var SHARED = '__core-js_shared__';
  var store = sharedStore.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
  (store.versions || (store.versions = [])).push({
    version: '3.47.0',
    mode: IS_PURE ? 'pure' : 'global',
    copyright: '© 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)',
    license: 'https://github.com/zloirock/core-js/blob/v3.47.0/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });
  return sharedStore.exports;
}

var shared;
var hasRequiredShared;
function requireShared() {
  if (hasRequiredShared) return shared;
  hasRequiredShared = 1;
  var store = requireSharedStore();
  shared = function shared(key, value) {
    return store[key] || (store[key] = value || {});
  };
  return shared;
}

var requireObjectCoercible;
var hasRequiredRequireObjectCoercible;
function requireRequireObjectCoercible() {
  if (hasRequiredRequireObjectCoercible) return requireObjectCoercible;
  hasRequiredRequireObjectCoercible = 1;
  var isNullOrUndefined = requireIsNullOrUndefined();
  var $TypeError = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  requireObjectCoercible = function requireObjectCoercible(it) {
    if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
    return it;
  };
  return requireObjectCoercible;
}

var toObject;
var hasRequiredToObject;
function requireToObject() {
  if (hasRequiredToObject) return toObject;
  hasRequiredToObject = 1;
  var requireObjectCoercible = requireRequireObjectCoercible();
  var $Object = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  toObject = function toObject(argument) {
    return $Object(requireObjectCoercible(argument));
  };
  return toObject;
}

var hasOwnProperty_1;
var hasRequiredHasOwnProperty;
function requireHasOwnProperty() {
  if (hasRequiredHasOwnProperty) return hasOwnProperty_1;
  hasRequiredHasOwnProperty = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var toObject = requireToObject();
  var hasOwnProperty = uncurryThis({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
  };
  return hasOwnProperty_1;
}

var uid;
var hasRequiredUid;
function requireUid() {
  if (hasRequiredUid) return uid;
  hasRequiredUid = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var id = 0;
  var postfix = Math.random();
  var toString = uncurryThis(1.1.toString);
  uid = function uid(key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
  };
  return uid;
}

var wellKnownSymbol;
var hasRequiredWellKnownSymbol;
function requireWellKnownSymbol() {
  if (hasRequiredWellKnownSymbol) return wellKnownSymbol;
  hasRequiredWellKnownSymbol = 1;
  var globalThis = requireGlobalThis();
  var shared = requireShared();
  var hasOwn = requireHasOwnProperty();
  var uid = requireUid();
  var NATIVE_SYMBOL = requireSymbolConstructorDetection();
  var USE_SYMBOL_AS_UID = requireUseSymbolAsUid();
  var Symbol = globalThis.Symbol;
  var WellKnownSymbolsStore = shared('wks');
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;
  wellKnownSymbol = function wellKnownSymbol(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol('Symbol.' + name);
    }
    return WellKnownSymbolsStore[name];
  };
  return wellKnownSymbol;
}

var toPrimitive;
var hasRequiredToPrimitive;
function requireToPrimitive() {
  if (hasRequiredToPrimitive) return toPrimitive;
  hasRequiredToPrimitive = 1;
  var call = requireFunctionCall();
  var isObject = requireIsObject();
  var isSymbol = requireIsSymbol();
  var getMethod = requireGetMethod();
  var ordinaryToPrimitive = requireOrdinaryToPrimitive();
  var wellKnownSymbol = requireWellKnownSymbol();
  var $TypeError = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  toPrimitive = function toPrimitive(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call(exoticToPrim, input, pref);
      if (!isObject(result) || isSymbol(result)) return result;
      throw new $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };
  return toPrimitive;
}

var toPropertyKey;
var hasRequiredToPropertyKey;
function requireToPropertyKey() {
  if (hasRequiredToPropertyKey) return toPropertyKey;
  hasRequiredToPropertyKey = 1;
  var toPrimitive = requireToPrimitive();
  var isSymbol = requireIsSymbol();

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  toPropertyKey = function toPropertyKey(argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
  };
  return toPropertyKey;
}

var hasRequiredObjectDefineProperty;
function requireObjectDefineProperty() {
  if (hasRequiredObjectDefineProperty) return objectDefineProperty;
  hasRequiredObjectDefineProperty = 1;
  var DESCRIPTORS = requireDescriptors();
  var IE8_DOM_DEFINE = requireIe8DomDefine();
  var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
  var anObject = requireAnObject();
  var toPropertyKey = requireToPropertyKey();
  var $TypeError = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    }
    return $defineProperty(O, P, Attributes);
  } : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) {/* empty */}
    if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  return objectDefineProperty;
}

var makeBuiltIn = {exports: {}};

var functionName;
var hasRequiredFunctionName;
function requireFunctionName() {
  if (hasRequiredFunctionName) return functionName;
  hasRequiredFunctionName = 1;
  var DESCRIPTORS = requireDescriptors();
  var hasOwn = requireHasOwnProperty();
  var FunctionPrototype = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
  var EXISTS = hasOwn(FunctionPrototype, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && function something() {/* empty */}.name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable);
  functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };
  return functionName;
}

var inspectSource;
var hasRequiredInspectSource;
function requireInspectSource() {
  if (hasRequiredInspectSource) return inspectSource;
  hasRequiredInspectSource = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var isCallable = requireIsCallable();
  var store = requireSharedStore();
  var functionToString = uncurryThis(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable(store.inspectSource)) {
    store.inspectSource = function (it) {
      return functionToString(it);
    };
  }
  inspectSource = store.inspectSource;
  return inspectSource;
}

var weakMapBasicDetection;
var hasRequiredWeakMapBasicDetection;
function requireWeakMapBasicDetection() {
  if (hasRequiredWeakMapBasicDetection) return weakMapBasicDetection;
  hasRequiredWeakMapBasicDetection = 1;
  var globalThis = requireGlobalThis();
  var isCallable = requireIsCallable();
  var WeakMap = globalThis.WeakMap;
  weakMapBasicDetection = isCallable(WeakMap) && /native code/.test(String(WeakMap));
  return weakMapBasicDetection;
}

var createPropertyDescriptor;
var hasRequiredCreatePropertyDescriptor;
function requireCreatePropertyDescriptor() {
  if (hasRequiredCreatePropertyDescriptor) return createPropertyDescriptor;
  hasRequiredCreatePropertyDescriptor = 1;
  createPropertyDescriptor = function createPropertyDescriptor(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return createPropertyDescriptor;
}

var createNonEnumerableProperty;
var hasRequiredCreateNonEnumerableProperty;
function requireCreateNonEnumerableProperty() {
  if (hasRequiredCreateNonEnumerableProperty) return createNonEnumerableProperty;
  hasRequiredCreateNonEnumerableProperty = 1;
  var DESCRIPTORS = requireDescriptors();
  var definePropertyModule = requireObjectDefineProperty();
  var createPropertyDescriptor = requireCreatePropertyDescriptor();
  createNonEnumerableProperty = DESCRIPTORS ? function (object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
  return createNonEnumerableProperty;
}

var sharedKey;
var hasRequiredSharedKey;
function requireSharedKey() {
  if (hasRequiredSharedKey) return sharedKey;
  hasRequiredSharedKey = 1;
  var shared = requireShared();
  var uid = requireUid();
  var keys = shared('keys');
  sharedKey = function sharedKey(key) {
    return keys[key] || (keys[key] = uid(key));
  };
  return sharedKey;
}

var hiddenKeys;
var hasRequiredHiddenKeys;
function requireHiddenKeys() {
  if (hasRequiredHiddenKeys) return hiddenKeys;
  hasRequiredHiddenKeys = 1;
  hiddenKeys = {};
  return hiddenKeys;
}

var internalState;
var hasRequiredInternalState;
function requireInternalState() {
  if (hasRequiredInternalState) return internalState;
  hasRequiredInternalState = 1;
  var NATIVE_WEAK_MAP = requireWeakMapBasicDetection();
  var globalThis = requireGlobalThis();
  var isObject = requireIsObject();
  var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  var hasOwn = requireHasOwnProperty();
  var shared = requireSharedStore();
  var sharedKey = requireSharedKey();
  var hiddenKeys = requireHiddenKeys();
  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError = globalThis.TypeError;
  var WeakMap = globalThis.WeakMap;
  var set, get, has;
  var enforce = function enforce(it) {
    return has(it) ? get(it) : set(it, {});
  };
  var getterFor = function getterFor(TYPE) {
    return function (it) {
      var state;
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
      }
      return state;
    };
  };
  if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set = function set(it, metadata) {
      if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store.set(it, metadata);
      return metadata;
    };
    get = function get(it) {
      return store.get(it) || {};
    };
    has = function has(it) {
      return store.has(it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function set(it, metadata) {
      if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };
    get = function get(it) {
      return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function has(it) {
      return hasOwn(it, STATE);
    };
  }
  internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };
  return internalState;
}

var hasRequiredMakeBuiltIn;
function requireMakeBuiltIn() {
  if (hasRequiredMakeBuiltIn) return makeBuiltIn.exports;
  hasRequiredMakeBuiltIn = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var fails = requireFails();
  var isCallable = requireIsCallable();
  var hasOwn = requireHasOwnProperty();
  var DESCRIPTORS = requireDescriptors();
  var CONFIGURABLE_FUNCTION_NAME = requireFunctionName().CONFIGURABLE;
  var inspectSource = requireInspectSource();
  var InternalStateModule = requireInternalState();
  var enforceInternalState = InternalStateModule.enforce;
  var getInternalState = InternalStateModule.get;
  var $String = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty = Object.defineProperty;
  var stringSlice = uncurryThis(''.slice);
  var replace = uncurryThis(''.replace);
  var join = uncurryThis([].join);
  var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
    return defineProperty(function () {/* empty */}, 'length', {
      value: 8
    }).length !== 8;
  });
  var TEMPLATE = String(String).split('String');
  var makeBuiltIn$1 = makeBuiltIn.exports = function (value, name, options) {
    if (stringSlice($String(name), 0, 7) === 'Symbol(') {
      name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwn(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      if (DESCRIPTORS) defineProperty(value, 'name', {
        value: name,
        configurable: true
      });else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
      defineProperty(value, 'length', {
        value: options.arity
      });
    }
    try {
      if (options && hasOwn(options, 'constructor') && options.constructor) {
        if (DESCRIPTORS) defineProperty(value, 'prototype', {
          writable: false
        });
        // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) {/* empty */}
    var state = enforceInternalState(value);
    if (!hasOwn(state, 'source')) {
      state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    }
    return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn$1(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
  }, 'toString');
  return makeBuiltIn.exports;
}

var defineBuiltIn;
var hasRequiredDefineBuiltIn;
function requireDefineBuiltIn() {
  if (hasRequiredDefineBuiltIn) return defineBuiltIn;
  hasRequiredDefineBuiltIn = 1;
  var isCallable = requireIsCallable();
  var definePropertyModule = requireObjectDefineProperty();
  var makeBuiltIn = requireMakeBuiltIn();
  var defineGlobalProperty = requireDefineGlobalProperty();
  defineBuiltIn = function defineBuiltIn(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
      if (simple) O[key] = value;else defineGlobalProperty(key, value);
    } else {
      try {
        if (!options.unsafe) delete O[key];else if (O[key]) simple = true;
      } catch (error) {/* empty */}
      if (simple) O[key] = value;else definePropertyModule.f(O, key, {
        value: value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
    }
    return O;
  };
  return defineBuiltIn;
}

var toStringTagSupport;
var hasRequiredToStringTagSupport;
function requireToStringTagSupport() {
  if (hasRequiredToStringTagSupport) return toStringTagSupport;
  hasRequiredToStringTagSupport = 1;
  var wellKnownSymbol = requireWellKnownSymbol();
  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  var test = {};
  // eslint-disable-next-line unicorn/no-immediate-mutation -- ES3 syntax limitation
  test[TO_STRING_TAG] = 'z';
  toStringTagSupport = String(test) === '[object z]';
  return toStringTagSupport;
}

var classofRaw;
var hasRequiredClassofRaw;
function requireClassofRaw() {
  if (hasRequiredClassofRaw) return classofRaw;
  hasRequiredClassofRaw = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var toString = uncurryThis({}.toString);
  var stringSlice = uncurryThis(''.slice);
  classofRaw = function classofRaw(it) {
    return stringSlice(toString(it), 8, -1);
  };
  return classofRaw;
}

var classof;
var hasRequiredClassof;
function requireClassof() {
  if (hasRequiredClassof) return classof;
  hasRequiredClassof = 1;
  var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
  var isCallable = requireIsCallable();
  var classofRaw = requireClassofRaw();
  var wellKnownSymbol = requireWellKnownSymbol();
  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  var $Object = Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () {
    return arguments;
  }()) === 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function tryGet(it, key) {
    try {
      return it[key];
    } catch (error) {/* empty */}
  };

  // getting tag from ES6+ `Object.prototype.toString`
  classof = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) === 'Object' && isCallable(O.callee) ? 'Arguments' : result;
  };
  return classof;
}

var toString;
var hasRequiredToString;
function requireToString() {
  if (hasRequiredToString) return toString;
  hasRequiredToString = 1;
  var classof = requireClassof();
  var $String = String;
  toString = function toString(argument) {
    if (classof(argument) === 'Symbol') throw new TypeError('Cannot convert a Symbol value to a string');
    return $String(argument);
  };
  return toString;
}

var normalizeStringArgument;
var hasRequiredNormalizeStringArgument;
function requireNormalizeStringArgument() {
  if (hasRequiredNormalizeStringArgument) return normalizeStringArgument;
  hasRequiredNormalizeStringArgument = 1;
  var toString = requireToString();
  normalizeStringArgument = function normalizeStringArgument(argument, $default) {
    return argument === undefined ? arguments.length < 2 ? '' : $default : toString(argument);
  };
  return normalizeStringArgument;
}

var errorToString;
var hasRequiredErrorToString;
function requireErrorToString() {
  if (hasRequiredErrorToString) return errorToString;
  hasRequiredErrorToString = 1;
  var DESCRIPTORS = requireDescriptors();
  var fails = requireFails();
  var anObject = requireAnObject();
  var normalizeStringArgument = requireNormalizeStringArgument();
  var nativeErrorToString = Error.prototype.toString;
  var INCORRECT_TO_STRING = fails(function () {
    if (DESCRIPTORS) {
      // Chrome 32- incorrectly call accessor
      // eslint-disable-next-line es/no-object-create, es/no-object-defineproperty -- safe
      var object = Object.create(Object.defineProperty({}, 'name', {
        get: function get() {
          return this === object;
        }
      }));
      if (nativeErrorToString.call(object) !== 'true') return true;
    }
    // FF10- does not properly handle non-strings
    return nativeErrorToString.call({
      message: 1,
      name: 2
    }) !== '2: 1'
    // IE8 does not properly handle defaults
    || nativeErrorToString.call({}) !== 'Error';
  });
  errorToString = INCORRECT_TO_STRING ? function toString() {
    var O = anObject(this);
    var name = normalizeStringArgument(O.name, 'Error');
    var message = normalizeStringArgument(O.message);
    return !name ? message : !message ? name : name + ': ' + message;
  } : nativeErrorToString;
  return errorToString;
}

var hasRequiredEs_error_toString;
function requireEs_error_toString() {
  if (hasRequiredEs_error_toString) return es_error_toString;
  hasRequiredEs_error_toString = 1;
  var defineBuiltIn = requireDefineBuiltIn();
  var errorToString = requireErrorToString();
  var ErrorPrototype = Error.prototype;

  // `Error.prototype.toString` method fix
  // https://tc39.es/ecma262/#sec-error.prototype.tostring
  if (ErrorPrototype.toString !== errorToString) {
    defineBuiltIn(ErrorPrototype, 'toString', errorToString);
  }
  return es_error_toString;
}

var es_object_toString = {};

var objectToString;
var hasRequiredObjectToString;
function requireObjectToString() {
  if (hasRequiredObjectToString) return objectToString;
  hasRequiredObjectToString = 1;
  var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
  var classof = requireClassof();

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  objectToString = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
    return '[object ' + classof(this) + ']';
  };
  return objectToString;
}

var hasRequiredEs_object_toString;
function requireEs_object_toString() {
  if (hasRequiredEs_object_toString) return es_object_toString;
  hasRequiredEs_object_toString = 1;
  var TO_STRING_TAG_SUPPORT = requireToStringTagSupport();
  var defineBuiltIn = requireDefineBuiltIn();
  var toString = requireObjectToString();

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!TO_STRING_TAG_SUPPORT) {
    defineBuiltIn(Object.prototype, 'toString', toString, {
      unsafe: true
    });
  }
  return es_object_toString;
}

var web_atob = {};

var objectGetOwnPropertyDescriptor = {};

var objectPropertyIsEnumerable = {};

var hasRequiredObjectPropertyIsEnumerable;
function requireObjectPropertyIsEnumerable() {
  if (hasRequiredObjectPropertyIsEnumerable) return objectPropertyIsEnumerable;
  hasRequiredObjectPropertyIsEnumerable = 1;
  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
  }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;
  return objectPropertyIsEnumerable;
}

var indexedObject;
var hasRequiredIndexedObject;
function requireIndexedObject() {
  if (hasRequiredIndexedObject) return indexedObject;
  hasRequiredIndexedObject = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var fails = requireFails();
  var classof = requireClassofRaw();
  var $Object = Object;
  var split = uncurryThis(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof(it) === 'String' ? split(it, '') : $Object(it);
  } : $Object;
  return indexedObject;
}

var toIndexedObject;
var hasRequiredToIndexedObject;
function requireToIndexedObject() {
  if (hasRequiredToIndexedObject) return toIndexedObject;
  hasRequiredToIndexedObject = 1;
  // toObject with fallback for non-array-like ES3 strings
  var IndexedObject = requireIndexedObject();
  var requireObjectCoercible = requireRequireObjectCoercible();
  toIndexedObject = function toIndexedObject(it) {
    return IndexedObject(requireObjectCoercible(it));
  };
  return toIndexedObject;
}

var hasRequiredObjectGetOwnPropertyDescriptor;
function requireObjectGetOwnPropertyDescriptor() {
  if (hasRequiredObjectGetOwnPropertyDescriptor) return objectGetOwnPropertyDescriptor;
  hasRequiredObjectGetOwnPropertyDescriptor = 1;
  var DESCRIPTORS = requireDescriptors();
  var call = requireFunctionCall();
  var propertyIsEnumerableModule = requireObjectPropertyIsEnumerable();
  var createPropertyDescriptor = requireCreatePropertyDescriptor();
  var toIndexedObject = requireToIndexedObject();
  var toPropertyKey = requireToPropertyKey();
  var hasOwn = requireHasOwnProperty();
  var IE8_DOM_DEFINE = requireIe8DomDefine();

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) {/* empty */}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
  };
  return objectGetOwnPropertyDescriptor;
}

var objectGetOwnPropertyNames = {};

var mathTrunc;
var hasRequiredMathTrunc;
function requireMathTrunc() {
  if (hasRequiredMathTrunc) return mathTrunc;
  hasRequiredMathTrunc = 1;
  var ceil = Math.ceil;
  var floor = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
  };
  return mathTrunc;
}

var toIntegerOrInfinity;
var hasRequiredToIntegerOrInfinity;
function requireToIntegerOrInfinity() {
  if (hasRequiredToIntegerOrInfinity) return toIntegerOrInfinity;
  hasRequiredToIntegerOrInfinity = 1;
  var trunc = requireMathTrunc();

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  toIntegerOrInfinity = function toIntegerOrInfinity(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
  };
  return toIntegerOrInfinity;
}

var toAbsoluteIndex;
var hasRequiredToAbsoluteIndex;
function requireToAbsoluteIndex() {
  if (hasRequiredToAbsoluteIndex) return toAbsoluteIndex;
  hasRequiredToAbsoluteIndex = 1;
  var toIntegerOrInfinity = requireToIntegerOrInfinity();
  var max = Math.max;
  var min = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  toAbsoluteIndex = function toAbsoluteIndex(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
  };
  return toAbsoluteIndex;
}

var toLength;
var hasRequiredToLength;
function requireToLength() {
  if (hasRequiredToLength) return toLength;
  hasRequiredToLength = 1;
  var toIntegerOrInfinity = requireToIntegerOrInfinity();
  var min = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  toLength = function toLength(argument) {
    var len = toIntegerOrInfinity(argument);
    return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };
  return toLength;
}

var lengthOfArrayLike;
var hasRequiredLengthOfArrayLike;
function requireLengthOfArrayLike() {
  if (hasRequiredLengthOfArrayLike) return lengthOfArrayLike;
  hasRequiredLengthOfArrayLike = 1;
  var toLength = requireToLength();

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  lengthOfArrayLike = function lengthOfArrayLike(obj) {
    return toLength(obj.length);
  };
  return lengthOfArrayLike;
}

var arrayIncludes;
var hasRequiredArrayIncludes;
function requireArrayIncludes() {
  if (hasRequiredArrayIncludes) return arrayIncludes;
  hasRequiredArrayIncludes = 1;
  var toIndexedObject = requireToIndexedObject();
  var toAbsoluteIndex = requireToAbsoluteIndex();
  var lengthOfArrayLike = requireLengthOfArrayLike();

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod = function createMethod(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = lengthOfArrayLike(O);
      if (length === 0) return !IS_INCLUDES && -1;
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el !== el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value !== value) return true;
        // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };
  arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
  };
  return arrayIncludes;
}

var objectKeysInternal;
var hasRequiredObjectKeysInternal;
function requireObjectKeysInternal() {
  if (hasRequiredObjectKeysInternal) return objectKeysInternal;
  hasRequiredObjectKeysInternal = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var hasOwn = requireHasOwnProperty();
  var toIndexedObject = requireToIndexedObject();
  var indexOf = requireArrayIncludes().indexOf;
  var hiddenKeys = requireHiddenKeys();
  var push = uncurryThis([].push);
  objectKeysInternal = function objectKeysInternal(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn(O, key = names[i++])) {
      ~indexOf(result, key) || push(result, key);
    }
    return result;
  };
  return objectKeysInternal;
}

var enumBugKeys;
var hasRequiredEnumBugKeys;
function requireEnumBugKeys() {
  if (hasRequiredEnumBugKeys) return enumBugKeys;
  hasRequiredEnumBugKeys = 1;
  // IE8- don't enum bug keys
  enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
  return enumBugKeys;
}

var hasRequiredObjectGetOwnPropertyNames;
function requireObjectGetOwnPropertyNames() {
  if (hasRequiredObjectGetOwnPropertyNames) return objectGetOwnPropertyNames;
  hasRequiredObjectGetOwnPropertyNames = 1;
  var internalObjectKeys = requireObjectKeysInternal();
  var enumBugKeys = requireEnumBugKeys();
  var hiddenKeys = enumBugKeys.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
  };
  return objectGetOwnPropertyNames;
}

var objectGetOwnPropertySymbols = {};

var hasRequiredObjectGetOwnPropertySymbols;
function requireObjectGetOwnPropertySymbols() {
  if (hasRequiredObjectGetOwnPropertySymbols) return objectGetOwnPropertySymbols;
  hasRequiredObjectGetOwnPropertySymbols = 1;
  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
  return objectGetOwnPropertySymbols;
}

var ownKeys;
var hasRequiredOwnKeys;
function requireOwnKeys() {
  if (hasRequiredOwnKeys) return ownKeys;
  hasRequiredOwnKeys = 1;
  var getBuiltIn = requireGetBuiltIn();
  var uncurryThis = requireFunctionUncurryThis();
  var getOwnPropertyNamesModule = requireObjectGetOwnPropertyNames();
  var getOwnPropertySymbolsModule = requireObjectGetOwnPropertySymbols();
  var anObject = requireAnObject();
  var concat = uncurryThis([].concat);

  // all object keys, includes non-enumerable and symbols
  ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
  };
  return ownKeys;
}

var copyConstructorProperties;
var hasRequiredCopyConstructorProperties;
function requireCopyConstructorProperties() {
  if (hasRequiredCopyConstructorProperties) return copyConstructorProperties;
  hasRequiredCopyConstructorProperties = 1;
  var hasOwn = requireHasOwnProperty();
  var ownKeys = requireOwnKeys();
  var getOwnPropertyDescriptorModule = requireObjectGetOwnPropertyDescriptor();
  var definePropertyModule = requireObjectDefineProperty();
  copyConstructorProperties = function copyConstructorProperties(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };
  return copyConstructorProperties;
}

var isForced_1;
var hasRequiredIsForced;
function requireIsForced() {
  if (hasRequiredIsForced) return isForced_1;
  hasRequiredIsForced = 1;
  var fails = requireFails();
  var isCallable = requireIsCallable();
  var replacement = /#|\.prototype\./;
  var isForced = function isForced(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
  };
  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };
  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';
  isForced_1 = isForced;
  return isForced_1;
}

var _export;
var hasRequired_export;
function require_export() {
  if (hasRequired_export) return _export;
  hasRequired_export = 1;
  var globalThis = requireGlobalThis();
  var getOwnPropertyDescriptor = requireObjectGetOwnPropertyDescriptor().f;
  var createNonEnumerableProperty = requireCreateNonEnumerableProperty();
  var defineBuiltIn = requireDefineBuiltIn();
  var defineGlobalProperty = requireDefineGlobalProperty();
  var copyConstructorProperties = requireCopyConstructorProperties();
  var isForced = requireIsForced();

  /*
    options.target         - name of the target object
    options.global         - target is the global object
    options.stat           - export as static methods of target
    options.proto          - export as prototype methods of target
    options.real           - real prototype method for the `pure` version
    options.forced         - export even if the native feature is available
    options.bind           - bind methods to the target, required for the `pure` version
    options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe         - use the simple assignment of property instead of delete + defineProperty
    options.sham           - add a flag to not completely full polyfills
    options.enumerable     - export as enumerable property
    options.dontCallGetSet - prevent calling a getter on target
    options.name           - the .name of the function if it does not match the key
  */
  _export = function _export(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = globalThis;
    } else if (STATIC) {
      target = globalThis[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = globalThis[TARGET] && globalThis[TARGET].prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty(sourceProperty, 'sham', true);
      }
      defineBuiltIn(target, key, sourceProperty, options);
    }
  };
  return _export;
}

var validateArgumentsLength;
var hasRequiredValidateArgumentsLength;
function requireValidateArgumentsLength() {
  if (hasRequiredValidateArgumentsLength) return validateArgumentsLength;
  hasRequiredValidateArgumentsLength = 1;
  var $TypeError = TypeError;
  validateArgumentsLength = function validateArgumentsLength(passed, required) {
    if (passed < required) throw new $TypeError('Not enough arguments');
    return passed;
  };
  return validateArgumentsLength;
}

var base64Map;
var hasRequiredBase64Map;
function requireBase64Map() {
  if (hasRequiredBase64Map) return base64Map;
  hasRequiredBase64Map = 1;
  var commonAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var base64Alphabet = commonAlphabet + '+/';
  var base64UrlAlphabet = commonAlphabet + '-_';
  var inverse = function inverse(characters) {
    // TODO: use `Object.create(null)` in `core-js@4`
    var result = {};
    var index = 0;
    for (; index < 64; index++) result[characters.charAt(index)] = index;
    return result;
  };
  base64Map = {
    i2c: base64Alphabet,
    c2i: inverse(base64Alphabet),
    i2cUrl: base64UrlAlphabet,
    c2iUrl: inverse(base64UrlAlphabet)
  };
  return base64Map;
}

var hasRequiredWeb_atob;
function requireWeb_atob() {
  if (hasRequiredWeb_atob) return web_atob;
  hasRequiredWeb_atob = 1;
  var $ = require_export();
  var globalThis = requireGlobalThis();
  var getBuiltIn = requireGetBuiltIn();
  var uncurryThis = requireFunctionUncurryThis();
  var call = requireFunctionCall();
  var fails = requireFails();
  var toString = requireToString();
  var validateArgumentsLength = requireValidateArgumentsLength();
  var c2i = requireBase64Map().c2i;
  var disallowed = /[^\d+/a-z]/i;
  var whitespaces = /[\t\n\f\r ]+/g;
  var finalEq = /[=]{1,2}$/;
  var $atob = getBuiltIn('atob');
  var fromCharCode = String.fromCharCode;
  var charAt = uncurryThis(''.charAt);
  var replace = uncurryThis(''.replace);
  var exec = uncurryThis(disallowed.exec);
  var BASIC = !!$atob && !fails(function () {
    return $atob('aGk=') !== 'hi';
  });
  var NO_SPACES_IGNORE = BASIC && fails(function () {
    return $atob(' ') !== '';
  });
  var NO_ENCODING_CHECK = BASIC && !fails(function () {
    $atob('a');
  });
  var NO_ARG_RECEIVING_CHECK = BASIC && !fails(function () {
    $atob();
  });
  var WRONG_ARITY = BASIC && $atob.length !== 1;
  var FORCED = !BASIC || NO_SPACES_IGNORE || NO_ENCODING_CHECK || NO_ARG_RECEIVING_CHECK || WRONG_ARITY;

  // `atob` method
  // https://html.spec.whatwg.org/multipage/webappapis.html#dom-atob
  $({
    global: true,
    bind: true,
    enumerable: true,
    forced: FORCED
  }, {
    atob: function atob(data) {
      validateArgumentsLength(arguments.length, 1);
      // `webpack` dev server bug on IE global methods - use call(fn, global, ...)
      if (BASIC && !NO_SPACES_IGNORE && !NO_ENCODING_CHECK) return call($atob, globalThis, data);
      var string = replace(toString(data), whitespaces, '');
      var output = '';
      var position = 0;
      var bc = 0;
      var length, chr, bs;
      if (string.length % 4 === 0) {
        string = replace(string, finalEq, '');
      }
      length = string.length;
      if (length % 4 === 1 || exec(disallowed, string)) {
        throw new (getBuiltIn('DOMException'))('The string is not correctly encoded', 'InvalidCharacterError');
      }
      while (position < length) {
        chr = charAt(string, position++);
        bs = bc % 4 ? bs * 64 + c2i[chr] : c2i[chr];
        if (bc++ % 4) output += fromCharCode(255 & bs >> (-2 * bc & 6));
      }
      return output;
    }
  });
  return web_atob;
}

var web_domException_constructor = {};

var environment;
var hasRequiredEnvironment;
function requireEnvironment() {
  if (hasRequiredEnvironment) return environment;
  hasRequiredEnvironment = 1;
  /* global Bun, Deno -- detection */
  var globalThis = requireGlobalThis();
  var userAgent = requireEnvironmentUserAgent();
  var classof = requireClassofRaw();
  var userAgentStartsWith = function userAgentStartsWith(string) {
    return userAgent.slice(0, string.length) === string;
  };
  environment = function () {
    if (userAgentStartsWith('Bun/')) return 'BUN';
    if (userAgentStartsWith('Cloudflare-Workers')) return 'CLOUDFLARE';
    if (userAgentStartsWith('Deno/')) return 'DENO';
    if (userAgentStartsWith('Node.js/')) return 'NODE';
    if (globalThis.Bun && typeof Bun.version == 'string') return 'BUN';
    if (globalThis.Deno && typeof Deno.version == 'object') return 'DENO';
    if (classof(globalThis.process) === 'process') return 'NODE';
    if (globalThis.window && globalThis.document) return 'BROWSER';
    return 'REST';
  }();
  return environment;
}

var environmentIsNode;
var hasRequiredEnvironmentIsNode;
function requireEnvironmentIsNode() {
  if (hasRequiredEnvironmentIsNode) return environmentIsNode;
  hasRequiredEnvironmentIsNode = 1;
  var ENVIRONMENT = requireEnvironment();
  environmentIsNode = ENVIRONMENT === 'NODE';
  return environmentIsNode;
}

var getBuiltInNodeModule;
var hasRequiredGetBuiltInNodeModule;
function requireGetBuiltInNodeModule() {
  if (hasRequiredGetBuiltInNodeModule) return getBuiltInNodeModule;
  hasRequiredGetBuiltInNodeModule = 1;
  var globalThis = requireGlobalThis();
  var IS_NODE = requireEnvironmentIsNode();
  getBuiltInNodeModule = function getBuiltInNodeModule(name) {
    if (IS_NODE) {
      try {
        return globalThis.process.getBuiltinModule(name);
      } catch (error) {/* empty */}
      try {
        // eslint-disable-next-line no-new-func -- safe
        return Function('return require("' + name + '")')();
      } catch (error) {/* empty */}
    }
  };
  return getBuiltInNodeModule;
}

var objectDefineProperties = {};

var objectKeys;
var hasRequiredObjectKeys;
function requireObjectKeys() {
  if (hasRequiredObjectKeys) return objectKeys;
  hasRequiredObjectKeys = 1;
  var internalObjectKeys = requireObjectKeysInternal();
  var enumBugKeys = requireEnumBugKeys();

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  objectKeys = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys);
  };
  return objectKeys;
}

var hasRequiredObjectDefineProperties;
function requireObjectDefineProperties() {
  if (hasRequiredObjectDefineProperties) return objectDefineProperties;
  hasRequiredObjectDefineProperties = 1;
  var DESCRIPTORS = requireDescriptors();
  var V8_PROTOTYPE_DEFINE_BUG = requireV8PrototypeDefineBug();
  var definePropertyModule = requireObjectDefineProperty();
  var anObject = requireAnObject();
  var toIndexedObject = requireToIndexedObject();
  var objectKeys = requireObjectKeys();

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var props = toIndexedObject(Properties);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
    return O;
  };
  return objectDefineProperties;
}

var html;
var hasRequiredHtml;
function requireHtml() {
  if (hasRequiredHtml) return html;
  hasRequiredHtml = 1;
  var getBuiltIn = requireGetBuiltIn();
  html = getBuiltIn('document', 'documentElement');
  return html;
}

var objectCreate;
var hasRequiredObjectCreate;
function requireObjectCreate() {
  if (hasRequiredObjectCreate) return objectCreate;
  hasRequiredObjectCreate = 1;
  /* global ActiveXObject -- old IE, WSH */
  var anObject = requireAnObject();
  var definePropertiesModule = requireObjectDefineProperties();
  var enumBugKeys = requireEnumBugKeys();
  var hiddenKeys = requireHiddenKeys();
  var html = requireHtml();
  var documentCreateElement = requireDocumentCreateElement();
  var sharedKey = requireSharedKey();
  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO = sharedKey('IE_PROTO');
  var EmptyConstructor = function EmptyConstructor() {/* empty */};
  var scriptTag = function scriptTag(content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    // eslint-disable-next-line no-useless-assignment -- avoid memory leak
    activeXDocument = null;
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var _NullProtoObject = function NullProtoObject() {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) {/* ignore */}
    _NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
    : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys.length;
    while (length--) delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return _NullProtoObject();
  };
  hiddenKeys[IE_PROTO] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es/no-object-create -- safe
  objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = _NullProtoObject();
    return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
  };
  return objectCreate;
}

var defineBuiltInAccessor;
var hasRequiredDefineBuiltInAccessor;
function requireDefineBuiltInAccessor() {
  if (hasRequiredDefineBuiltInAccessor) return defineBuiltInAccessor;
  hasRequiredDefineBuiltInAccessor = 1;
  var makeBuiltIn = requireMakeBuiltIn();
  var defineProperty = requireObjectDefineProperty();
  defineBuiltInAccessor = function defineBuiltInAccessor(target, name, descriptor) {
    if (descriptor.get) makeBuiltIn(descriptor.get, name, {
      getter: true
    });
    if (descriptor.set) makeBuiltIn(descriptor.set, name, {
      setter: true
    });
    return defineProperty.f(target, name, descriptor);
  };
  return defineBuiltInAccessor;
}

var anInstance;
var hasRequiredAnInstance;
function requireAnInstance() {
  if (hasRequiredAnInstance) return anInstance;
  hasRequiredAnInstance = 1;
  var isPrototypeOf = requireObjectIsPrototypeOf();
  var $TypeError = TypeError;
  anInstance = function anInstance(it, Prototype) {
    if (isPrototypeOf(Prototype, it)) return it;
    throw new $TypeError('Incorrect invocation');
  };
  return anInstance;
}

var domExceptionConstants;
var hasRequiredDomExceptionConstants;
function requireDomExceptionConstants() {
  if (hasRequiredDomExceptionConstants) return domExceptionConstants;
  hasRequiredDomExceptionConstants = 1;
  domExceptionConstants = {
    IndexSizeError: {
      s: 'INDEX_SIZE_ERR',
      c: 1,
      m: 1
    },
    DOMStringSizeError: {
      s: 'DOMSTRING_SIZE_ERR',
      c: 2,
      m: 0
    },
    HierarchyRequestError: {
      s: 'HIERARCHY_REQUEST_ERR',
      c: 3,
      m: 1
    },
    WrongDocumentError: {
      s: 'WRONG_DOCUMENT_ERR',
      c: 4,
      m: 1
    },
    InvalidCharacterError: {
      s: 'INVALID_CHARACTER_ERR',
      c: 5,
      m: 1
    },
    NoDataAllowedError: {
      s: 'NO_DATA_ALLOWED_ERR',
      c: 6,
      m: 0
    },
    NoModificationAllowedError: {
      s: 'NO_MODIFICATION_ALLOWED_ERR',
      c: 7,
      m: 1
    },
    NotFoundError: {
      s: 'NOT_FOUND_ERR',
      c: 8,
      m: 1
    },
    NotSupportedError: {
      s: 'NOT_SUPPORTED_ERR',
      c: 9,
      m: 1
    },
    InUseAttributeError: {
      s: 'INUSE_ATTRIBUTE_ERR',
      c: 10,
      m: 1
    },
    InvalidStateError: {
      s: 'INVALID_STATE_ERR',
      c: 11,
      m: 1
    },
    SyntaxError: {
      s: 'SYNTAX_ERR',
      c: 12,
      m: 1
    },
    InvalidModificationError: {
      s: 'INVALID_MODIFICATION_ERR',
      c: 13,
      m: 1
    },
    NamespaceError: {
      s: 'NAMESPACE_ERR',
      c: 14,
      m: 1
    },
    InvalidAccessError: {
      s: 'INVALID_ACCESS_ERR',
      c: 15,
      m: 1
    },
    ValidationError: {
      s: 'VALIDATION_ERR',
      c: 16,
      m: 0
    },
    TypeMismatchError: {
      s: 'TYPE_MISMATCH_ERR',
      c: 17,
      m: 1
    },
    SecurityError: {
      s: 'SECURITY_ERR',
      c: 18,
      m: 1
    },
    NetworkError: {
      s: 'NETWORK_ERR',
      c: 19,
      m: 1
    },
    AbortError: {
      s: 'ABORT_ERR',
      c: 20,
      m: 1
    },
    URLMismatchError: {
      s: 'URL_MISMATCH_ERR',
      c: 21,
      m: 1
    },
    QuotaExceededError: {
      s: 'QUOTA_EXCEEDED_ERR',
      c: 22,
      m: 1
    },
    TimeoutError: {
      s: 'TIMEOUT_ERR',
      c: 23,
      m: 1
    },
    InvalidNodeTypeError: {
      s: 'INVALID_NODE_TYPE_ERR',
      c: 24,
      m: 1
    },
    DataCloneError: {
      s: 'DATA_CLONE_ERR',
      c: 25,
      m: 1
    }
  };
  return domExceptionConstants;
}

var errorStackClear;
var hasRequiredErrorStackClear;
function requireErrorStackClear() {
  if (hasRequiredErrorStackClear) return errorStackClear;
  hasRequiredErrorStackClear = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var $Error = Error;
  var replace = uncurryThis(''.replace);
  var TEST = function (arg) {
    return String(new $Error(arg).stack);
  }('zxcasd');
  // eslint-disable-next-line redos/no-vulnerable, sonarjs/slow-regex -- safe
  var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
  var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
  errorStackClear = function errorStackClear(stack, dropEntries) {
    if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error.prepareStackTrace) {
      while (dropEntries--) stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
    }
    return stack;
  };
  return errorStackClear;
}

var hasRequiredWeb_domException_constructor;
function requireWeb_domException_constructor() {
  if (hasRequiredWeb_domException_constructor) return web_domException_constructor;
  hasRequiredWeb_domException_constructor = 1;
  var $ = require_export();
  var getBuiltIn = requireGetBuiltIn();
  var getBuiltInNodeModule = requireGetBuiltInNodeModule();
  var fails = requireFails();
  var create = requireObjectCreate();
  var createPropertyDescriptor = requireCreatePropertyDescriptor();
  var defineProperty = requireObjectDefineProperty().f;
  var defineBuiltIn = requireDefineBuiltIn();
  var defineBuiltInAccessor = requireDefineBuiltInAccessor();
  var hasOwn = requireHasOwnProperty();
  var anInstance = requireAnInstance();
  var anObject = requireAnObject();
  var errorToString = requireErrorToString();
  var normalizeStringArgument = requireNormalizeStringArgument();
  var DOMExceptionConstants = requireDomExceptionConstants();
  var clearErrorStack = requireErrorStackClear();
  var InternalStateModule = requireInternalState();
  var DESCRIPTORS = requireDescriptors();
  var IS_PURE = requireIsPure();
  var DOM_EXCEPTION = 'DOMException';
  var DATA_CLONE_ERR = 'DATA_CLONE_ERR';
  var Error = getBuiltIn('Error');
  // NodeJS < 17.0 does not expose `DOMException` to global
  var NativeDOMException = getBuiltIn(DOM_EXCEPTION) || function () {
    try {
      // NodeJS < 15.0 does not expose `MessageChannel` to global
      var MessageChannel = getBuiltIn('MessageChannel') || getBuiltInNodeModule('worker_threads').MessageChannel;
      // eslint-disable-next-line es/no-weak-map, unicorn/require-post-message-target-origin -- safe
      new MessageChannel().port1.postMessage(new WeakMap());
    } catch (error) {
      if (error.name === DATA_CLONE_ERR && error.code === 25) return error.constructor;
    }
  }();
  var NativeDOMExceptionPrototype = NativeDOMException && NativeDOMException.prototype;
  var ErrorPrototype = Error.prototype;
  var setInternalState = InternalStateModule.set;
  var getInternalState = InternalStateModule.getterFor(DOM_EXCEPTION);
  var HAS_STACK = 'stack' in new Error(DOM_EXCEPTION);
  var codeFor = function codeFor(name) {
    return hasOwn(DOMExceptionConstants, name) && DOMExceptionConstants[name].m ? DOMExceptionConstants[name].c : 0;
  };
  var $DOMException = function DOMException() {
    anInstance(this, DOMExceptionPrototype);
    var argumentsLength = arguments.length;
    var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
    var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
    var code = codeFor(name);
    setInternalState(this, {
      type: DOM_EXCEPTION,
      name: name,
      message: message,
      code: code
    });
    if (!DESCRIPTORS) {
      this.name = name;
      this.message = message;
      this.code = code;
    }
    if (HAS_STACK) {
      var error = new Error(message);
      error.name = DOM_EXCEPTION;
      defineProperty(this, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
    }
  };
  var DOMExceptionPrototype = $DOMException.prototype = create(ErrorPrototype);
  var createGetterDescriptor = function createGetterDescriptor(get) {
    return {
      enumerable: true,
      configurable: true,
      get: get
    };
  };
  var getterFor = function getterFor(key) {
    return createGetterDescriptor(function () {
      return getInternalState(this)[key];
    });
  };
  if (DESCRIPTORS) {
    // `DOMException.prototype.code` getter
    defineBuiltInAccessor(DOMExceptionPrototype, 'code', getterFor('code'));
    // `DOMException.prototype.message` getter
    defineBuiltInAccessor(DOMExceptionPrototype, 'message', getterFor('message'));
    // `DOMException.prototype.name` getter
    defineBuiltInAccessor(DOMExceptionPrototype, 'name', getterFor('name'));
  }
  defineProperty(DOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, $DOMException));

  // FF36- DOMException is a function, but can't be constructed
  var INCORRECT_CONSTRUCTOR = fails(function () {
    return !(new NativeDOMException() instanceof Error);
  });

  // Safari 10.1 / Chrome 32- / IE8- DOMException.prototype.toString bugs
  var INCORRECT_TO_STRING = INCORRECT_CONSTRUCTOR || fails(function () {
    return ErrorPrototype.toString !== errorToString || String(new NativeDOMException(1, 2)) !== '2: 1';
  });

  // Deno 1.6.3- DOMException.prototype.code just missed
  var INCORRECT_CODE = INCORRECT_CONSTRUCTOR || fails(function () {
    return new NativeDOMException(1, 'DataCloneError').code !== 25;
  });

  // Deno 1.6.3- DOMException constants just missed
  var MISSED_CONSTANTS = INCORRECT_CONSTRUCTOR || NativeDOMException[DATA_CLONE_ERR] !== 25 || NativeDOMExceptionPrototype[DATA_CLONE_ERR] !== 25;
  var FORCED_CONSTRUCTOR = IS_PURE ? INCORRECT_TO_STRING || INCORRECT_CODE || MISSED_CONSTANTS : INCORRECT_CONSTRUCTOR;

  // `DOMException` constructor
  // https://webidl.spec.whatwg.org/#idl-DOMException
  $({
    global: true,
    constructor: true,
    forced: FORCED_CONSTRUCTOR
  }, {
    DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
  });
  var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
  var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
  if (INCORRECT_TO_STRING && (IS_PURE || NativeDOMException === PolyfilledDOMException)) {
    defineBuiltIn(PolyfilledDOMExceptionPrototype, 'toString', errorToString);
  }
  if (INCORRECT_CODE && DESCRIPTORS && NativeDOMException === PolyfilledDOMException) {
    defineBuiltInAccessor(PolyfilledDOMExceptionPrototype, 'code', createGetterDescriptor(function () {
      return codeFor(anObject(this).name);
    }));
  }

  // `DOMException` constants
  for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
    var constant = DOMExceptionConstants[key];
    var constantName = constant.s;
    var descriptor = createPropertyDescriptor(6, constant.c);
    if (!hasOwn(PolyfilledDOMException, constantName)) {
      defineProperty(PolyfilledDOMException, constantName, descriptor);
    }
    if (!hasOwn(PolyfilledDOMExceptionPrototype, constantName)) {
      defineProperty(PolyfilledDOMExceptionPrototype, constantName, descriptor);
    }
  }
  return web_domException_constructor;
}

var web_domException_stack = {};

var functionUncurryThisAccessor;
var hasRequiredFunctionUncurryThisAccessor;
function requireFunctionUncurryThisAccessor() {
  if (hasRequiredFunctionUncurryThisAccessor) return functionUncurryThisAccessor;
  hasRequiredFunctionUncurryThisAccessor = 1;
  var uncurryThis = requireFunctionUncurryThis();
  var aCallable = requireACallable();
  functionUncurryThisAccessor = function functionUncurryThisAccessor(object, key, method) {
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
    } catch (error) {/* empty */}
  };
  return functionUncurryThisAccessor;
}

var isPossiblePrototype;
var hasRequiredIsPossiblePrototype;
function requireIsPossiblePrototype() {
  if (hasRequiredIsPossiblePrototype) return isPossiblePrototype;
  hasRequiredIsPossiblePrototype = 1;
  var isObject = requireIsObject();
  isPossiblePrototype = function isPossiblePrototype(argument) {
    return isObject(argument) || argument === null;
  };
  return isPossiblePrototype;
}

var aPossiblePrototype;
var hasRequiredAPossiblePrototype;
function requireAPossiblePrototype() {
  if (hasRequiredAPossiblePrototype) return aPossiblePrototype;
  hasRequiredAPossiblePrototype = 1;
  var isPossiblePrototype = requireIsPossiblePrototype();
  var $String = String;
  var $TypeError = TypeError;
  aPossiblePrototype = function aPossiblePrototype(argument) {
    if (isPossiblePrototype(argument)) return argument;
    throw new $TypeError("Can't set " + $String(argument) + ' as a prototype');
  };
  return aPossiblePrototype;
}

var objectSetPrototypeOf;
var hasRequiredObjectSetPrototypeOf;
function requireObjectSetPrototypeOf() {
  if (hasRequiredObjectSetPrototypeOf) return objectSetPrototypeOf;
  hasRequiredObjectSetPrototypeOf = 1;
  /* eslint-disable no-proto -- safe */
  var uncurryThisAccessor = requireFunctionUncurryThisAccessor();
  var isObject = requireIsObject();
  var requireObjectCoercible = requireRequireObjectCoercible();
  var aPossiblePrototype = requireAPossiblePrototype();

  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      setter = uncurryThisAccessor(Object.prototype, '__proto__', 'set');
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {/* empty */}
    return function setPrototypeOf(O, proto) {
      requireObjectCoercible(O);
      aPossiblePrototype(proto);
      if (!isObject(O)) return O;
      if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
      return O;
    };
  }() : undefined);
  return objectSetPrototypeOf;
}

var inheritIfRequired;
var hasRequiredInheritIfRequired;
function requireInheritIfRequired() {
  if (hasRequiredInheritIfRequired) return inheritIfRequired;
  hasRequiredInheritIfRequired = 1;
  var isCallable = requireIsCallable();
  var isObject = requireIsObject();
  var setPrototypeOf = requireObjectSetPrototypeOf();

  // makes subclassing work correct for wrapped built-ins
  inheritIfRequired = function inheritIfRequired($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf($this, NewTargetPrototype);
    return $this;
  };
  return inheritIfRequired;
}

var hasRequiredWeb_domException_stack;
function requireWeb_domException_stack() {
  if (hasRequiredWeb_domException_stack) return web_domException_stack;
  hasRequiredWeb_domException_stack = 1;
  var $ = require_export();
  var globalThis = requireGlobalThis();
  var getBuiltIn = requireGetBuiltIn();
  var createPropertyDescriptor = requireCreatePropertyDescriptor();
  var defineProperty = requireObjectDefineProperty().f;
  var hasOwn = requireHasOwnProperty();
  var anInstance = requireAnInstance();
  var inheritIfRequired = requireInheritIfRequired();
  var normalizeStringArgument = requireNormalizeStringArgument();
  var DOMExceptionConstants = requireDomExceptionConstants();
  var clearErrorStack = requireErrorStackClear();
  var DESCRIPTORS = requireDescriptors();
  var IS_PURE = requireIsPure();
  var DOM_EXCEPTION = 'DOMException';
  var Error = getBuiltIn('Error');
  var NativeDOMException = getBuiltIn(DOM_EXCEPTION);
  var $DOMException = function DOMException() {
    anInstance(this, DOMExceptionPrototype);
    var argumentsLength = arguments.length;
    var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
    var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
    var that = new NativeDOMException(message, name);
    var error = new Error(message);
    error.name = DOM_EXCEPTION;
    defineProperty(that, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
    inheritIfRequired(that, this, $DOMException);
    return that;
  };
  var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;
  var ERROR_HAS_STACK = 'stack' in new Error(DOM_EXCEPTION);
  var DOM_EXCEPTION_HAS_STACK = 'stack' in new NativeDOMException(1, 2);

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(globalThis, DOM_EXCEPTION);

  // Bun ~ 0.1.1 DOMException have incorrect descriptor and we can't redefine it
  // https://github.com/Jarred-Sumner/bun/issues/399
  var BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable);
  var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;

  // `DOMException` constructor patch for `.stack` where it's required
  // https://webidl.spec.whatwg.org/#es-DOMException-specialness
  $({
    global: true,
    constructor: true,
    forced: IS_PURE || FORCED_CONSTRUCTOR
  }, {
    // TODO: fix export logic
    DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
  });
  var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION);
  var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
  if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
    if (!IS_PURE) {
      defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, PolyfilledDOMException));
    }
    for (var key in DOMExceptionConstants) if (hasOwn(DOMExceptionConstants, key)) {
      var constant = DOMExceptionConstants[key];
      var constantName = constant.s;
      if (!hasOwn(PolyfilledDOMException, constantName)) {
        defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
      }
    }
  }
  return web_domException_stack;
}

var web_domException_toStringTag = {};

var setToStringTag;
var hasRequiredSetToStringTag;
function requireSetToStringTag() {
  if (hasRequiredSetToStringTag) return setToStringTag;
  hasRequiredSetToStringTag = 1;
  var defineProperty = requireObjectDefineProperty().f;
  var hasOwn = requireHasOwnProperty();
  var wellKnownSymbol = requireWellKnownSymbol();
  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  setToStringTag = function setToStringTag(target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !hasOwn(target, TO_STRING_TAG)) {
      defineProperty(target, TO_STRING_TAG, {
        configurable: true,
        value: TAG
      });
    }
  };
  return setToStringTag;
}

var hasRequiredWeb_domException_toStringTag;
function requireWeb_domException_toStringTag() {
  if (hasRequiredWeb_domException_toStringTag) return web_domException_toStringTag;
  hasRequiredWeb_domException_toStringTag = 1;
  var getBuiltIn = requireGetBuiltIn();
  var setToStringTag = requireSetToStringTag();
  var DOM_EXCEPTION = 'DOMException';

  // `DOMException.prototype[@@toStringTag]` property
  setToStringTag(getBuiltIn(DOM_EXCEPTION), DOM_EXCEPTION);
  return web_domException_toStringTag;
}

var path;
var hasRequiredPath;
function requirePath() {
  if (hasRequiredPath) return path;
  hasRequiredPath = 1;
  var globalThis = requireGlobalThis();
  path = globalThis;
  return path;
}

var atob$1;
var hasRequiredAtob;
function requireAtob() {
  if (hasRequiredAtob) return atob$1;
  hasRequiredAtob = 1;
  requireEs_error_toString();
  requireEs_object_toString();
  requireWeb_atob();
  requireWeb_domException_constructor();
  requireWeb_domException_stack();
  requireWeb_domException_toStringTag();
  var path = requirePath();
  atob$1 = path.atob;
  return atob$1;
}

requireAtob();

// Adapted from https://github.com/mathiasbynens/he/blob/36afe179392226cf1b6ccdb16ebbb7a5a844d93a/src/he.js#L106-L134
var _a;
var decodeMap = new Map([[0, 65533],
// C1 Unicode control character reference replacements
[128, 8364], [130, 8218], [131, 402], [132, 8222], [133, 8230], [134, 8224], [135, 8225], [136, 710], [137, 8240], [138, 352], [139, 8249], [140, 338], [142, 381], [145, 8216], [146, 8217], [147, 8220], [148, 8221], [149, 8226], [150, 8211], [151, 8212], [152, 732], [153, 8482], [154, 353], [155, 8250], [156, 339], [158, 382], [159, 376]]);
/**
 * Polyfill for `String.fromCodePoint`. It is used to create a string from a Unicode code point.
 */
var fromCodePoint =
// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, n/no-unsupported-features/es-builtins
(_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : codePoint => {
  var output = "";
  if (codePoint > 65535) {
    codePoint -= 65536;
    output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
    codePoint = 56320 | codePoint & 1023;
  }
  output += String.fromCharCode(codePoint);
  return output;
};
/**
 * Replace the given code point with a replacement character if it is a
 * surrogate or is outside the valid range. Otherwise return the code
 * point unchanged.
 */
function replaceCodePoint(codePoint) {
  var _a;
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return 65533;
  }
  return (_a = decodeMap.get(codePoint)) !== null && _a !== void 0 ? _a : codePoint;
}

/*
 * Shared base64 decode helper for generated decode data.
 * Assumes global atob is available.
 */
function decodeBase64(input) {
  var binary =
  // eslint-disable-next-line n/no-unsupported-features/node-builtins
  typeof atob === "function" ?
  // Browser (and Node >=16)
  // eslint-disable-next-line n/no-unsupported-features/node-builtins
  atob(input) :
  // Older Node versions (<16)
  // eslint-disable-next-line n/no-unsupported-features/node-builtins
  typeof Buffer.from === "function" ?
  // eslint-disable-next-line n/no-unsupported-features/node-builtins
  Buffer.from(input, "base64").toString("binary") :
  // eslint-disable-next-line unicorn/no-new-buffer, n/no-deprecated-api
  new Buffer(input, "base64").toString("binary");
  var evenLength = binary.length & -2; // Round down to even length
  var out = new Uint16Array(evenLength / 2);
  for (var index = 0, outIndex = 0; index < evenLength; index += 2) {
    var lo = binary.charCodeAt(index);
    var hi = binary.charCodeAt(index + 1);
    out[outIndex++] = lo | hi << 8;
  }
  return out;
}

// Generated using scripts/write-decode-map.ts
var htmlDecodeTree = /* #__PURE__ */decodeBase64("QR08ALkAAgH6AYsDNQR2BO0EPgXZBQEGLAbdBxMISQrvCmQLfQurDKQNLw4fD4YPpA+6D/IPAAAAAAAAAAAAAAAAKhBMEY8TmxUWF2EYLBkxGuAa3RsJHDscWR8YIC8jSCSIJcMl6ie3Ku8rEC0CLjoupS7kLgAIRU1hYmNmZ2xtbm9wcnN0dVQAWgBeAGUAaQBzAHcAfgCBAIQAhwCSAJoAoACsALMAbABpAGcAO4DGAMZAUAA7gCYAJkBjAHUAdABlADuAwQDBQHIiZXZlAAJhAAFpeW0AcgByAGMAO4DCAMJAEGRyAADgNdgE3XIAYQB2AGUAO4DAAMBA8CFoYZFj4SFjcgBhZAAAoFMqAAFncIsAjgBvAG4ABGFmAADgNdg43fAlbHlGdW5jdGlvbgCgYSBpAG4AZwA7gMUAxUAAAWNzpACoAHIAAOA12Jzc6SFnbgCgVCJpAGwAZABlADuAwwDDQG0AbAA7gMQAxEAABGFjZWZvcnN1xQDYANoA7QDxAPYA+QD8AAABY3LJAM8AayNzbGFzaAAAoBYidgHTANUAAKDnKmUAZAAAoAYjeQARZIABY3J0AOAA5QDrAGEidXNlAACgNSLuI291bGxpcwCgLCFhAJJjcgAA4DXYBd1wAGYAAOA12Dnd5SF2ZdhiYwDyAOoAbSJwZXEAAKBOIgAHSE9hY2RlZmhpbG9yc3UXARoBHwE6AVIBVQFiAWQBZgGCAakB6QHtAfIBYwB5ACdkUABZADuAqQCpQIABY3B5ACUBKAE1AfUhdGUGYWmg0iJ0KGFsRGlmZmVyZW50aWFsRAAAoEUhbCJleXMAAKAtIQACYWVpb0EBRAFKAU0B8iFvbgxhZABpAGwAO4DHAMdAcgBjAAhhbiJpbnQAAKAwIm8AdAAKYQABZG5ZAV0BaSJsbGEAuGB0I2VyRG90ALdg8gA5AWkAp2NyImNsZQAAAkRNUFRwAXQBeQF9AW8AdAAAoJkiaSJudXMAAKCWIuwhdXMAoJUiaSJtZXMAAKCXIm8AAAFjc4cBlAFrKndpc2VDb250b3VySW50ZWdyYWwAAKAyImUjQ3VybHkAAAFEUZwBpAFvJXVibGVRdW90ZQAAoB0gdSJvdGUAAKAZIAACbG5wdbABtgHNAdgBbwBuAGWgNyIAoHQqgAFnaXQAvAHBAcUB8iJ1ZW50AKBhIm4AdAAAoC8i7yV1ckludGVncmFsAKAuIgABZnLRAdMBAKACIe8iZHVjdACgECJuLnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbAAAoDMi7yFzcwCgLypjAHIAAOA12J7ccABDoNMiYQBwAACgTSKABURKU1phY2VmaW9zAAsCEgIVAhgCGwIsAjQCOQI9AnMCfwNvoEUh9CJyYWhkAKARKWMAeQACZGMAeQAFZGMAeQAPZIABZ3JzACECJQIoAuchZXIAoCEgcgAAoKEhaAB2AACg5CoAAWF5MAIzAvIhb24OYRRkbAB0oAciYQCUY3IAAOA12AfdAAFhZkECawIAAWNtRQJnAvIjaXRpY2FsAAJBREdUUAJUAl8CYwJjInV0ZQC0YG8AdAFZAloC2WJiJGxlQWN1dGUA3WJyImF2ZQBgYGkibGRlANxi7yFuZACgxCJmJWVyZW50aWFsRAAAoEYhcAR9AgAAAAAAAIECjgIAABoDZgAA4DXYO91EoagAhQKJAm8AdAAAoNwgcSJ1YWwAAKBQIuIhbGUAA0NETFJVVpkCqAK1Au8C/wIRA28AbgB0AG8AdQByAEkAbgB0AGUAZwByAGEA7ADEAW8AdAKvAgAAAACwAqhgbiNBcnJvdwAAoNMhAAFlb7kC0AJmAHQAgAFBUlQAwQLGAs0CciJyb3cAAKDQIekkZ2h0QXJyb3cAoNQhZQDlACsCbgBnAAABTFLWAugC5SFmdAABQVLcAuECciJyb3cAAKD4J+kkZ2h0QXJyb3cAoPon6SRnaHRBcnJvdwCg+SdpImdodAAAAUFU9gL7AnIicm93AACg0iFlAGUAAKCoInAAQQIGAwAAAAALA3Iicm93AACg0SFvJHduQXJyb3cAAKDVIWUlcnRpY2FsQmFyAACgJSJuAAADQUJMUlRhJAM2AzoDWgNxA3oDciJyb3cAAKGTIUJVLAMwA2EAcgAAoBMpcCNBcnJvdwAAoPUhciJldmUAEWPlIWZ00gJDAwAASwMAAFIDaSVnaHRWZWN0b3IAAKBQKWUkZVZlY3RvcgAAoF4p5SJjdG9yQqC9IWEAcgAAoFYpaSJnaHQA1AFiAwAAaQNlJGVWZWN0b3IAAKBfKeUiY3RvckKgwSFhAHIAAKBXKWUAZQBBoKQiciJyb3cAAKCnIXIAcgBvAPcAtAIAAWN0gwOHA3IAAOA12J/c8iFvaxBhAAhOVGFjZGZnbG1vcHFzdHV4owOlA6kDsAO/A8IDxgPNA9ID8gP9AwEEFAQeBCAEJQRHAEphSAA7gNAA0EBjAHUAdABlADuAyQDJQIABYWl5ALYDuQO+A/Ihb24aYXIAYwA7gMoAykAtZG8AdAAWYXIAAOA12AjdcgBhAHYAZQA7gMgAyEDlIm1lbnQAoAgiAAFhcNYD2QNjAHIAEmF0AHkAUwLhAwAAAADpA20lYWxsU3F1YXJlAACg+yVlJ3J5U21hbGxTcXVhcmUAAKCrJQABZ3D2A/kDbwBuABhhZgAA4DXYPN3zImlsb26VY3UAAAFhaQYEDgRsAFSgdSppImxkZQAAoEIi7CNpYnJpdW0AoMwhAAFjaRgEGwRyAACgMCFtAACgcyphAJdjbQBsADuAywDLQAABaXApBC0E8yF0cwCgAyLvJG5lbnRpYWxFAKBHIYACY2Zpb3MAPQQ/BEMEXQRyBHkAJGRyAADgNdgJ3WwibGVkAFMCTAQAAAAAVARtJWFsbFNxdWFyZQAAoPwlZSdyeVNtYWxsU3F1YXJlAACgqiVwA2UEAABpBAAAAABtBGYAAOA12D3dwSFsbACgACLyI2llcnRyZgCgMSFjAPIAcQQABkpUYWJjZGZnb3JzdIgEiwSOBJMElwSkBKcEqwStBLIE5QTqBGMAeQADZDuAPgA+QO0hbWFkoJMD3GNyImV2ZQAeYYABZWl5AJ0EoASjBOQhaWwiYXIAYwAcYRNkbwB0ACBhcgAA4DXYCt0AoNkicABmAADgNdg+3eUiYXRlcgADRUZHTFNUvwTIBM8E1QTZBOAEcSJ1YWwATKBlIuUhc3MAoNsidSRsbEVxdWFsAACgZyJyI2VhdGVyAACgoirlIXNzAKB3IuwkYW50RXF1YWwAoH4qaSJsZGUAAKBzImMAcgAA4DXYotwAoGsiAARBYWNmaW9zdfkE/QQFBQgFCwUTBSIFKwVSIkRjeQAqZAABY3QBBQQFZQBrAMdiXmDpIXJjJGFyAACgDCFsJWJlcnRTcGFjZQAAoAsh8AEYBQAAGwVmAACgDSHpJXpvbnRhbExpbmUAoAAlAAFjdCYFKAXyABIF8iFvayZhbQBwAEQBMQU5BW8AdwBuAEgAdQBtAPAAAAFxInVhbAAAoE8iAAdFSk9hY2RmZ21ub3N0dVMFVgVZBVwFYwVtBXAFcwV6BZAFtgXFBckFzQVjAHkAFWTsIWlnMmFjAHkAAWRjAHUAdABlADuAzQDNQAABaXlnBWwFcgBjADuAzgDOQBhkbwB0ADBhcgAAoBEhcgBhAHYAZQA7gMwAzEAAoREhYXB/BYsFAAFjZ4MFhQVyACphaSNuYXJ5SQAAoEghbABpAGUA8wD6AvQBlQUAAKUFZaAsIgABZ3KaBZ4F8iFhbACgKyLzI2VjdGlvbgCgwiJpI3NpYmxlAAABQ1SsBbEFbyJtbWEAAKBjIGkibWVzAACgYiCAAWdwdAC8Bb8FwwVvAG4ALmFmAADgNdhA3WEAmWNjAHIAAKAQIWkibGRlAChh6wHSBQAA1QVjAHkABmRsADuAzwDPQIACY2Zvc3UA4QXpBe0F8gX9BQABaXnlBegFcgBjADRhGWRyAADgNdgN3XAAZgAA4DXYQd3jAfcFAAD7BXIAAOA12KXc8iFjeQhk6yFjeQRkgANISmFjZm9zAAwGDwYSBhUGHQYhBiYGYwB5ACVkYwB5AAxk8CFwYZpjAAFleRkGHAbkIWlsNmEaZHIAAOA12A7dcABmAADgNdhC3WMAcgAA4DXYptyABUpUYWNlZmxtb3N0AD0GQAZDBl4GawZkB2gHcAd0B80H2gdjAHkACWQ7gDwAPECAAmNtbnByAEwGTwZSBlUGWwb1IXRlOWHiIWRhm2NnAACg6ifsI2FjZXRyZgCgEiFyAACgniGAAWFleQBkBmcGagbyIW9uPWHkIWlsO2EbZAABZnNvBjQHdAAABUFDREZSVFVWYXKABp4GpAbGBssG3AYDByEHwQIqBwABbnKEBowGZyVsZUJyYWNrZXQAAKDoJ/Ihb3cAoZAhQlKTBpcGYQByAACg5CHpJGdodEFycm93AKDGIWUjaWxpbmcAAKAII28A9QGqBgAAsgZiJWxlQnJhY2tldAAAoOYnbgDUAbcGAAC+BmUkZVZlY3RvcgAAoGEp5SJjdG9yQqDDIWEAcgAAoFkpbCJvb3IAAKAKI2kiZ2h0AAABQVbSBtcGciJyb3cAAKCUIeUiY3RvcgCgTikAAWVy4AbwBmUAAKGjIkFW5gbrBnIicm93AACgpCHlImN0b3IAoFopaSNhbmdsZQBCorIi+wYAAAAA/wZhAHIAAKDPKXEidWFsAACgtCJwAIABRFRWAAoHEQcYB+8kd25WZWN0b3IAoFEpZSRlVmVjdG9yAACgYCnlImN0b3JCoL8hYQByAACgWCnlImN0b3JCoLwhYQByAACgUilpAGcAaAB0AGEAcgByAG8A9wDMAnMAAANFRkdMU1Q/B0cHTgdUB1gHXwfxJXVhbEdyZWF0ZXIAoNoidSRsbEVxdWFsAACgZiJyI2VhdGVyAACgdiLlIXNzAKChKuwkYW50RXF1YWwAoH0qaSJsZGUAAKByInIAAOA12A/dZaDYIuYjdGFycm93AKDaIWkiZG90AD9hgAFucHcAege1B7kHZwAAAkxSbHKCB5QHmwerB+UhZnQAAUFSiAeNB3Iicm93AACg9SfpJGdodEFycm93AKD3J+kkZ2h0QXJyb3cAoPYn5SFmdAABYXLcAqEHaQBnAGgAdABhAHIAcgBvAPcA5wJpAGcAaAB0AGEAcgByAG8A9wDuAmYAAOA12EPdZQByAAABTFK/B8YHZSRmdEFycm93AACgmSHpJGdodEFycm93AKCYIYABY2h0ANMH1QfXB/IAWgYAoLAh8iFva0FhAKBqIgAEYWNlZmlvc3XpB+wH7gf/BwMICQgOCBEIcAAAoAUpeQAcZAABZGzyB/kHaSR1bVNwYWNlAACgXyBsI2ludHJmAACgMyFyAADgNdgQ3e4jdXNQbHVzAKATInAAZgAA4DXYRN1jAPIA/gecY4AESmFjZWZvc3R1ACEIJAgoCDUIgQiFCDsKQApHCmMAeQAKZGMidXRlAENhgAFhZXkALggxCDQI8iFvbkdh5CFpbEVhHWSAAWdzdwA7CGEIfQjhInRpdmWAAU1UVgBECEwIWQhlJWRpdW1TcGFjZQAAoAsgaABpAAABY25SCFMIawBTAHAAYQBjAOUASwhlAHIAeQBUAGgAaQDuAFQI9CFlZAABR0xnCHUIcgBlAGEAdABlAHIARwByAGUAYQB0AGUA8gDrBGUAcwBzAEwAZQBzAPMA2wdMImluZQAKYHIAAOA12BHdAAJCbnB0jAiRCJkInAhyImVhawAAoGAgwiZyZWFraW5nU3BhY2WgYGYAAKAVIUOq7CqzCMIIzQgAAOcIGwkAAAAAAAAtCQAAbwkAAIcJAACdCcAJGQoAADQKAAFvdbYIvAjuI2dydWVudACgYiJwIkNhcAAAoG0ibyh1YmxlVmVydGljYWxCYXIAAKAmIoABbHF4ANII1wjhCOUibWVudACgCSL1IWFsVKBgImkibGRlAADgQiI4A2kic3RzAACgBCJyI2VhdGVyAACjbyJFRkdMU1T1CPoIAgkJCQ0JFQlxInVhbAAAoHEidSRsbEVxdWFsAADgZyI4A3IjZWF0ZXIAAOBrIjgD5SFzcwCgeSLsJGFudEVxdWFsAOB+KjgDaSJsZGUAAKB1IvUhbXBEASAJJwnvI3duSHVtcADgTiI4A3EidWFsAADgTyI4A2UAAAFmczEJRgn0JFRyaWFuZ2xlQqLqIj0JAAAAAEIJYQByAADgzyk4A3EidWFsAACg7CJzAICibiJFR0xTVABRCVYJXAlhCWkJcSJ1YWwAAKBwInIjZWF0ZXIAAKB4IuUhc3MA4GoiOAPsJGFudEVxdWFsAOB9KjgDaSJsZGUAAKB0IuUic3RlZAABR0x1CX8J8iZlYXRlckdyZWF0ZXIA4KIqOAPlI3NzTGVzcwDgoSo4A/IjZWNlZGVzAKGAIkVTjwmVCXEidWFsAADgryo4A+wkYW50RXF1YWwAoOAiAAFlaaAJqQl2JmVyc2VFbGVtZW50AACgDCLnJWh0VHJpYW5nbGVCousitgkAAAAAuwlhAHIAAODQKTgDcSJ1YWwAAKDtIgABcXXDCeAJdSNhcmVTdQAAAWJwywnVCfMhZXRF4I8iOANxInVhbAAAoOIi5SJyc2V0ReCQIjgDcSJ1YWwAAKDjIoABYmNwAOYJ8AkNCvMhZXRF4IIi0iBxInVhbAAAoIgi4yJlZWRzgKGBIkVTVAD6CQAKBwpxInVhbAAA4LAqOAPsJGFudEVxdWFsAKDhImkibGRlAADgfyI4A+UicnNldEXggyLSIHEidWFsAACgiSJpImxkZQCAoUEiRUZUACIKJwouCnEidWFsAACgRCJ1JGxsRXF1YWwAAKBHImkibGRlAACgSSJlJXJ0aWNhbEJhcgAAoCQiYwByAADgNdip3GkAbABkAGUAO4DRANFAnWMAB0VhY2RmZ21vcHJzdHV2XgphCmgKcgp2CnoKgQqRCpYKqwqtCrsKyArNCuwhaWdSYWMAdQB0AGUAO4DTANNAAAFpeWwKcQpyAGMAO4DUANRAHmRiImxhYwBQYXIAAOA12BLdcgBhAHYAZQA7gNIA0kCAAWFlaQCHCooKjQpjAHIATGFnAGEAqWNjInJvbgCfY3AAZgAA4DXYRt3lI25DdXJseQABRFGeCqYKbyV1YmxlUXVvdGUAAKAcIHUib3RlAACgGCAAoFQqAAFjbLEKtQpyAADgNdiq3GEAcwBoADuA2ADYQGkAbAHACsUKZABlADuA1QDVQGUAcwAAoDcqbQBsADuA1gDWQGUAcgAAAUJQ0wrmCgABYXLXCtoKcgAAoD4gYQBjAAABZWvgCuIKAKDeI2UAdAAAoLQjYSVyZW50aGVzaXMAAKDcI4AEYWNmaGlsb3JzAP0KAwsFCwkLCwsMCxELIwtaC3IjdGlhbEQAAKACInkAH2RyAADgNdgT3WkApmOgY/Ujc01pbnVzsWAAAWlwFQsgC24AYwBhAHIAZQBwAGwAYQBuAOUACgVmAACgGSGAobsqZWlvACoLRQtJC+MiZWRlc4CheiJFU1QANAs5C0ALcSJ1YWwAAKCvKuwkYW50RXF1YWwAoHwiaSJsZGUAAKB+Im0AZQAAoDMgAAFkcE0LUQv1IWN0AKAPIm8jcnRpb24AYaA3ImwAAKAdIgABY2leC2ILcgAA4DXYq9yoYwACVWZvc2oLbwtzC3cLTwBUADuAIgAiQHIAAOA12BTdcABmAACgGiFjAHIAAOA12KzcAAZCRWFjZWZoaW9yc3WPC5MLlwupC7YL2AvbC90LhQyTDJoMowzhIXJyAKAQKUcAO4CuAK5AgAFjbnIAnQugC6ML9SF0ZVRhZwAAoOsncgB0oKAhbAAAoBYpgAFhZXkArwuyC7UL8iFvblhh5CFpbFZhIGR2oBwhZSJyc2UAAAFFVb8LzwsAAWxxwwvIC+UibWVudACgCyL1JGlsaWJyaXVtAKDLIXAmRXF1aWxpYnJpdW0AAKBvKXIAAKAcIW8AoWPnIWh0AARBQ0RGVFVWYewLCgwQDDIMNwxeDHwM9gIAAW5y8Av4C2clbGVCcmFja2V0AACg6SfyIW93AKGSIUJM/wsDDGEAcgAAoOUhZSRmdEFycm93AACgxCFlI2lsaW5nAACgCSNvAPUBFgwAAB4MYiVsZUJyYWNrZXQAAKDnJ24A1AEjDAAAKgxlJGVWZWN0b3IAAKBdKeUiY3RvckKgwiFhAHIAAKBVKWwib29yAACgCyMAAWVyOwxLDGUAAKGiIkFWQQxGDHIicm93AACgpiHlImN0b3IAoFspaSNhbmdsZQBCorMiVgwAAAAAWgxhAHIAAKDQKXEidWFsAACgtSJwAIABRFRWAGUMbAxzDO8kd25WZWN0b3IAoE8pZSRlVmVjdG9yAACgXCnlImN0b3JCoL4hYQByAACgVCnlImN0b3JCoMAhYQByAACgUykAAXB1iQyMDGYAAKAdIe4kZEltcGxpZXMAoHAp6SRnaHRhcnJvdwCg2yEAAWNongyhDHIAAKAbIQCgsSHsJGVEZWxheWVkAKD0KYAGSE9hY2ZoaW1vcXN0dQC/DMgMzAzQDOIM5gwKDQ0NFA0ZDU8NVA1YDQABQ2PDDMYMyCFjeSlkeQAoZEYiVGN5ACxkYyJ1dGUAWmEAorwqYWVpedgM2wzeDOEM8iFvbmBh5CFpbF5hcgBjAFxhIWRyAADgNdgW3e8hcnQAAkRMUlXvDPYM/QwEDW8kd25BcnJvdwAAoJMhZSRmdEFycm93AACgkCHpJGdodEFycm93AKCSIXAjQXJyb3cAAKCRIechbWGjY+EkbGxDaXJjbGUAoBgicABmAADgNdhK3XICHw0AAAAAIg10AACgGiLhIXJlgKGhJUlTVQAqDTINSg3uJXRlcnNlY3Rpb24AoJMidQAAAWJwNw1ADfMhZXRFoI8icSJ1YWwAAKCRIuUicnNldEWgkCJxInVhbAAAoJIibiJpb24AAKCUImMAcgAA4DXYrtxhAHIAAKDGIgACYmNtcF8Nag2ODZANc6DQImUAdABFoNAicSJ1YWwAAKCGIgABY2huDYkNZSJlZHMAgKF7IkVTVAB4DX0NhA1xInVhbAAAoLAq7CRhbnRFcXVhbACgfSJpImxkZQAAoH8iVABoAGEA9ADHCwCgESIAodEiZXOVDZ8NciJzZXQARaCDInEidWFsAACghyJlAHQAAKDRIoAFSFJTYWNmaGlvcnMAtQ27Db8NyA3ODdsN3w3+DRgOHQ4jDk8AUgBOADuA3gDeQMEhREUAoCIhAAFIY8MNxg1jAHkAC2R5ACZkAAFidcwNzQ0JYKRjgAFhZXkA1A3XDdoN8iFvbmRh5CFpbGJhImRyAADgNdgX3QABZWnjDe4N8gHoDQAA7Q3lImZvcmUAoDQiYQCYYwABY27yDfkNayNTcGFjZQAA4F8gCiDTInBhY2UAoAkg7CFkZYChPCJFRlQABw4MDhMOcSJ1YWwAAKBDInUkbGxFcXVhbAAAoEUiaSJsZGUAAKBIInAAZgAA4DXYS93pI3BsZURvdACg2yAAAWN0Jw4rDnIAAOA12K/c8iFva2Zh4QpFDlYOYA5qDgAAbg5yDgAAAAAAAAAAAAB5DnwOqA6zDgAADg8RDxYPGg8AAWNySA5ODnUAdABlADuA2gDaQHIAb6CfIeMhaXIAoEkpcgDjAVsOAABdDnkADmR2AGUAbGEAAWl5Yw5oDnIAYwA7gNsA20AjZGIibGFjAHBhcgAA4DXYGN1yAGEAdgBlADuA2QDZQOEhY3JqYQABZGl/Dp8OZQByAAABQlCFDpcOAAFhcokOiw5yAF9gYQBjAAABZWuRDpMOAKDfI2UAdAAAoLUjYSVyZW50aGVzaXMAAKDdI28AbgBQoMMi7CF1cwCgjiIAAWdwqw6uDm8AbgByYWYAAOA12EzdAARBREVUYWRwc78O0g7ZDuEOBQPqDvMOBw9yInJvdwDCoZEhyA4AAMwOYQByAACgEilvJHduQXJyb3cAAKDFIW8kd25BcnJvdwAAoJUhcSV1aWxpYnJpdW0AAKBuKWUAZQBBoKUiciJyb3cAAKClIW8AdwBuAGEAcgByAG8A9wAQA2UAcgAAAUxS+Q4AD2UkZnRBcnJvdwAAoJYh6SRnaHRBcnJvdwCglyFpAGyg0gNvAG4ApWPpIW5nbmFjAHIAAOA12LDcaSJsZGUAaGFtAGwAO4DcANxAgAREYmNkZWZvc3YALQ8xDzUPNw89D3IPdg97D4AP4SFzaACgqyJhAHIAAKDrKnkAEmThIXNobKCpIgCg5ioAAWVyQQ9DDwCgwSKAAWJ0eQBJD00Paw9hAHIAAKAWIGmgFiDjIWFsAAJCTFNUWA9cD18PZg9hAHIAAKAjIukhbmV8YGUkcGFyYXRvcgAAoFgnaSJsZGUAAKBAItQkaGluU3BhY2UAoAogcgAA4DXYGd1wAGYAAOA12E3dYwByAADgNdix3GQiYXNoAACgqiKAAmNlZm9zAI4PkQ+VD5kPng/pIXJjdGHkIWdlAKDAInIAAOA12BrdcABmAADgNdhO3WMAcgAA4DXYstwAAmZpb3OqD64Prw+0D3IAAOA12BvdnmNwAGYAAOA12E/dYwByAADgNdiz3IAEQUlVYWNmb3N1AMgPyw/OD9EP2A/gD+QP6Q/uD2MAeQAvZGMAeQAHZGMAeQAuZGMAdQB0AGUAO4DdAN1AAAFpedwP3w9yAGMAdmErZHIAAOA12BzdcABmAADgNdhQ3WMAcgAA4DXYtNxtAGwAeGEABEhhY2RlZm9z/g8BEAUQDRAQEB0QIBAkEGMAeQAWZGMidXRlAHlhAAFheQkQDBDyIW9ufWEXZG8AdAB7YfIBFRAAABwQbwBXAGkAZAB0AOgAVAhhAJZjcgAAoCghcABmAACgJCFjAHIAAOA12LXc4QtCEEkQTRAAAGcQbRByEAAAAAAAAAAAeRCKEJcQ8hD9EAAAGxEhETIROREAAD4RYwB1AHQAZQA7gOEA4UByImV2ZQADYYCiPiJFZGl1eQBWEFkQWxBgEGUQAOA+IjMDAKA/InIAYwA7gOIA4kB0AGUAO4C0ALRAMGRsAGkAZwA7gOYA5kByoGEgAOA12B7dcgBhAHYAZQA7gOAA4EAAAWVwfBCGEAABZnCAEIQQ8yF5bQCgNSHoAIMQaABhALFjAAFhcI0QWwAAAWNskRCTEHIAAWFnAACgPypkApwQAAAAALEQAKInImFkc3ajEKcQqRCuEG4AZAAAoFUqAKBcKmwib3BlAACgWCoAoFoqAKMgImVsbXJzersQvRDAEN0Q5RDtEACgpCllAACgICJzAGQAYaAhImEEzhDQENIQ1BDWENgQ2hDcEACgqCkAoKkpAKCqKQCgqykAoKwpAKCtKQCgrikAoK8pdAB2oB8iYgBkoL4iAKCdKQABcHTpEOwQaAAAoCIixWDhIXJyAKB8IwABZ3D1EPgQbwBuAAVhZgAA4DXYUt0Ao0giRWFlaW9wBxEJEQ0RDxESERQRAKBwKuMhaXIAoG8qAKBKImQAAKBLInMAJ2DyIW94ZaBIIvEADhFpAG4AZwA7gOUA5UCAAWN0eQAmESoRKxFyAADgNdi23CpgbQBwAGWgSCLxAPgBaQBsAGQAZQA7gOMA40BtAGwAO4DkAORAAAFjaUERRxFvAG4AaQBuAPQA6AFuAHQAAKARKgAITmFiY2RlZmlrbG5vcHJzdWQRaBGXEZ8RpxGrEdIR1hErEjASexKKEn0RThNbE3oTbwB0AACg7SoAAWNybBGJEWsAAAJjZXBzdBF4EX0RghHvIW5nAKBMInAjc2lsb24A9mNyImltZQAAoDUgaQBtAGWgPSJxAACgzSJ2AY0RkRFlAGUAAKC9ImUAZABnoAUjZQAAoAUjcgBrAHSgtSPiIXJrAKC2IwABb3mjEaYRbgDnAHcRMWTxIXVvAKAeIIACY21wcnQAtBG5Eb4RwRHFEeEhdXPloDUi5ABwInR5dgAAoLApcwDpAH0RbgBvAPUA6gCAAWFodwDLEcwRzhGyYwCgNiHlIWVuAKBsInIAAOA12B/dZwCAA2Nvc3R1dncA4xHyEQUSEhIhEiYSKRKAAWFpdQDpEesR7xHwAKMFcgBjAACg7yVwAACgwyKAAWRwdAD4EfwRABJvAHQAAKAAKuwhdXMAoAEqaSJtZXMAAKACKnECCxIAAAAADxLjIXVwAKAGKmEAcgAAoAUm8iNpYW5nbGUAAWR1GhIeEu8hd24AoL0lcAAAoLMlcCJsdXMAAKAEKmUA5QBCD+UAkg9hInJvdwAAoA0pgAFha28ANhJoEncSAAFjbjoSZRJrAIABbHN0AEESRxJNEm8jemVuZ2UAAKDrKXEAdQBhAHIA5QBcBPIjaWFuZ2xlgKG0JWRscgBYElwSYBLvIXduAKC+JeUhZnQAoMIlaSJnaHQAAKC4JWsAAKAjJLEBbRIAAHUSsgFxEgAAcxIAoJIlAKCRJTQAAKCTJWMAawAAoIglAAFlb38ShxJx4D0A5SD1IWl2AOBhIuUgdAAAoBAjAAJwdHd4kRKVEpsSnxJmAADgNdhT3XSgpSJvAG0AAKClIvQhaWUAoMgiAAZESFVWYmRobXB0dXayEsES0RLgEvcS+xIKExoTHxMjEygTNxMAAkxSbHK5ErsSvRK/EgCgVyUAoFQlAKBWJQCgUyUAolAlRFVkdckSyxLNEs8SAKBmJQCgaSUAoGQlAKBnJQACTFJsctgS2hLcEt4SAKBdJQCgWiUAoFwlAKBZJQCjUSVITFJobHLrEu0S7xLxEvMS9RIAoGwlAKBjJQCgYCUAoGslAKBiJQCgXyVvAHgAAKDJKQACTFJscgITBBMGEwgTAKBVJQCgUiUAoBAlAKAMJQCiACVEVWR1EhMUExYTGBMAoGUlAKBoJQCgLCUAoDQlaSJudXMAAKCfIuwhdXMAoJ4iaSJtZXMAAKCgIgACTFJsci8TMRMzEzUTAKBbJQCgWCUAoBglAKAUJQCjAiVITFJobHJCE0QTRhNIE0oTTBMAoGolAKBhJQCgXiUAoDwlAKAkJQCgHCUAAWV2UhNVE3YA5QD5AGIAYQByADuApgCmQAACY2Vpb2ITZhNqE24TcgAA4DXYt9xtAGkAAKBPIG0A5aA9IogRbAAAoVwAYmh0E3YTAKDFKfMhdWIAoMgnbAF+E4QTbABloCIgdAAAoCIgcAAAoU4iRWWJE4sTAKCuKvGgTyI8BeEMqRMAAN8TABQDFB8UAAAjFDQUAAAAAIUUAAAAAI0UAAAAANcU4xT3FPsUAACIFQAAlhWAAWNwcgCuE7ET1RP1IXRlB2GAoikiYWJjZHMAuxO/E8QTzhPSE24AZAAAoEQqciJjdXAAAKBJKgABYXXIE8sTcAAAoEsqcAAAoEcqbwB0AACgQCoA4CkiAP4AAWVv2RPcE3QAAKBBIO4ABAUAAmFlaXXlE+8T9RP4E/AB6hMAAO0TcwAAoE0qbwBuAA1hZABpAGwAO4DnAOdAcgBjAAlhcABzAHOgTCptAACgUCpvAHQAC2GAAWRtbgAIFA0UEhRpAGwAO4C4ALhAcCJ0eXYAAKCyKXQAAIGiADtlGBQZFKJAcgBkAG8A9ABiAXIAAOA12CDdgAFjZWkAKBQqFDIUeQBHZGMAawBtoBMn4SFyawCgEyfHY3IAAKPLJUVjZWZtcz8UQRRHFHcUfBSAFACgwykAocYCZWxGFEkUcQAAoFciZQBhAlAUAAAAAGAUciJyb3cAAAFsclYUWhTlIWZ0AKC6IWkiZ2h0AACguyGAAlJTYWNkAGgUaRRrFG8UcxSuYACgyCRzAHQAAKCbIukhcmMAoJoi4SFzaACgnSJuImludAAAoBAqaQBkAACg7yrjIWlyAKDCKfUhYnN1oGMmaQB0AACgYybsApMUmhS2FAAAwxRvAG4AZaA6APGgVCKrAG0CnxQAAAAAoxRhAHSgLABAYAChASJmbKcUqRTuABMNZQAAAW14rhSyFOUhbnQAoAEiZQDzANIB5wG6FAAAwBRkoEUibwB0AACgbSpuAPQAzAGAAWZyeQDIFMsUzhQA4DXYVN1vAOQA1wEAgakAO3MeAdMUcgAAoBchAAFhb9oU3hRyAHIAAKC1IXMAcwAAoBcnAAFjdeYU6hRyAADgNdi43AABYnDuFPIUZaDPKgCg0SploNAqAKDSKuQhb3QAoO8igANkZWxwcnZ3AAYVEBUbFSEVRBVlFYQV4SFycgABbHIMFQ4VAKA4KQCgNSlwAhYVAAAAABkVcgAAoN4iYwAAoN8i4SFycnCgtiEAoD0pgKIqImJjZG9zACsVMBU6FT4VQRVyImNhcAAAoEgqAAFhdTQVNxVwAACgRipwAACgSipvAHQAAKCNInIAAKBFKgDgKiIA/gACYWxydksVURVuFXMVcgByAG2gtyEAoDwpeQCAAWV2dwBYFWUVaRVxAHACXxUAAAAAYxVyAGUA4wAXFXUA4wAZFWUAZQAAoM4iZSJkZ2UAAKDPImUAbgA7gKQApEBlI2Fycm93AAABbHJ7FX8V5SFmdACgtiFpImdodAAAoLchZQDkAG0VAAFjaYsVkRVvAG4AaQBuAPQAkwFuAHQAAKAxImwiY3R5AACgLSOACUFIYWJjZGVmaGlqbG9yc3R1d3oAuBW7Fb8V1RXgFegV+RUKFhUWHxZUFlcWZRbFFtsW7xb7FgUXChdyAPIAtAJhAHIAAKBlKQACZ2xyc8YVyhXOFdAV5yFlcgCgICDlIXRoAKA4IfIA9QxoAHagECAAoKMiawHZFd4VYSJyb3cAAKAPKWEA4wBfAgABYXnkFecV8iFvbg9hNGQAoUYhYW/tFfQVAAFnciEC8RVyAACgyiF0InNlcQAAoHcqgAFnbG0A/xUCFgUWO4CwALBAdABhALRjcCJ0eXYAAKCxKQABaXIOFhIW8yFodACgfykA4DXYId1hAHIAAAFschsWHRYAoMMhAKDCIYACYWVnc3YAKBauAjYWOhY+Fm0AAKHEIm9zLhY0Fm4AZABzoMQi9SFpdACgZiZhIm1tYQDdY2kAbgAAoPIiAKH3AGlvQxZRFmQAZQAAgfcAO29KFksW90BuI3RpbWVzAACgxyJuAPgAUBZjAHkAUmRjAG8CXhYAAAAAYhZyAG4AAKAeI28AcAAAoA0jgAJscHR1dwBuFnEWdRaSFp4W7CFhciRgZgAA4DXYVd0AotkCZW1wc30WhBaJFo0WcQBkoFAibwB0AACgUSJpIm51cwAAoDgi7CF1cwCgFCLxInVhcmUAoKEiYgBsAGUAYgBhAHIAdwBlAGQAZwDlANcAbgCAAWFkaAClFqoWtBZyAHIAbwD3APUMbwB3AG4AYQByAHIAbwB3APMA8xVhI3Jwb29uAAABbHK8FsAWZQBmAPQAHBZpAGcAaAD0AB4WYgHJFs8WawBhAHIAbwD3AJILbwLUFgAAAADYFnIAbgAAoB8jbwBwAACgDCOAAWNvdADhFukW7BYAAXJ55RboFgDgNdi53FVkbAAAoPYp8iFvaxFhAAFkcvMW9xZvAHQAAKDxImkA5qC/JVsSAAFhaP8WAhdyAPIANQNhAPIA1wvhIm5nbGUAoKYpAAFjaQ4XEBd5AF9k5yJyYXJyAKD/JwAJRGFjZGVmZ2xtbm9wcXJzdHV4MRc4F0YXWxcyBF4XaRd5F40XrBe0F78X2RcVGCEYLRg1GEAYAAFEbzUXgRZvAPQA+BUAAWNzPBdCF3UAdABlADuA6QDpQPQhZXIAoG4qAAJhaW95TRdQF1YXWhfyIW9uG2FyAGOgViI7gOoA6kDsIW9uAKBVIk1kbwB0ABdhAAFEcmIXZhdvAHQAAKBSIgDgNdgi3XKhmipuF3QXYQB2AGUAO4DoAOhAZKCWKm8AdAAAoJgqgKGZKmlscwCAF4UXhxfuInRlcnMAoOcjAKATIWSglSpvAHQAAKCXKoABYXBzAJMXlheiF2MAcgATYXQAeQBzogUinxcAAAAAoRdlAHQAAKAFInAAMaADIDMBqRerFwCgBCAAoAUgAAFnc7AXsRdLYXAAAKACIAABZ3C4F7sXbwBuABlhZgAA4DXYVt2AAWFscwDFF8sXzxdyAHOg1SJsAACg4yl1AHMAAKBxKmkAAKG1A2x21RfYF28AbgC1Y/VjAAJjc3V24BfoF/0XEBgAAWlv5BdWF3IAYwAAoFYiaQLuFwAAAADwF+0ADQThIW50AAFnbPUX+Rd0AHIAAKCWKuUhc3MAoJUqgAFhZWkAAxgGGAoYbABzAD1gcwB0AACgXyJ2AESgYSJEAACgeCrwImFyc2wAoOUpAAFEYRkYHRhvAHQAAKBTInIAcgAAoHEpgAFjZGkAJxgqGO0XcgAAoC8hbwD0AIwCAAFhaDEYMhi3YzuA8ADwQAABbXI5GD0YbAA7gOsA60BvAACgrCCAAWNpcABGGEgYSxhsACFgcwD0ACwEAAFlb08YVxhjAHQAYQB0AGkAbwDuABoEbgBlAG4AdABpAGEAbADlADME4Ql1GAAAgRgAAIMYiBgAAAAAoRilGAAAqhgAALsYvhjRGAAA1xgnGWwAbABpAG4AZwBkAG8AdABzAGUA8QBlF3kARGRtImFsZQAAoEAmgAFpbHIAjRiRGJ0Y7CFpZwCgA/tpApcYAAAAAJoYZwAAoAD7aQBnAACgBPsA4DXYI93sIWlnAKAB++whaWcA4GYAagCAAWFsdACvGLIYthh0AACgbSZpAGcAAKAC+24AcwAAoLElbwBmAJJh8AHCGAAAxhhmAADgNdhX3QABYWvJGMwYbADsAGsEdqDUIgCg2SphI3J0aW50AACgDSoAAWFv2hgiGQABY3PeGB8ZsQPnGP0YBRkSGRUZAAAdGbID7xjyGPQY9xj5GAAA+xg7gL0AvUAAoFMhO4C8ALxAAKBVIQCgWSEAoFshswEBGQAAAxkAoFQhAKBWIbQCCxkOGQAAAAAQGTuAvgC+QACgVyEAoFwhNQAAoFghtgEZGQAAGxkAoFohAKBdITgAAKBeIWwAAKBEIHcAbgAAoCIjYwByAADgNdi73IAIRWFiY2RlZmdpamxub3JzdHYARhlKGVoZXhlmGWkZkhmWGZkZnRmgGa0ZxhnLGc8Z4BkjGmygZyIAoIwqgAFjbXAAUBlTGVgZ9SF0ZfVhbQBhAOSgswM6FgCghipyImV2ZQAfYQABaXliGWUZcgBjAB1hM2RvAHQAIWGAoWUibHFzAMYEcBl6GfGhZSLOBAAAdhlsAGEAbgD0AN8EgKF+KmNkbACBGYQZjBljAACgqSpvAHQAb6CAKmyggioAoIQqZeDbIgD+cwAAoJQqcgAA4DXYJN3noGsirATtIWVsAKA3IWMAeQBTZIChdyJFYWoApxmpGasZAKCSKgCgpSoAoKQqAAJFYWVztBm2Gb0ZwhkAoGkicABwoIoq8iFveACgiipxoIgq8aCIKrUZaQBtAACg5yJwAGYAAOA12FjdYQB2AOUAYwIAAWNp0xnWGXIAAKAKIW0AAKFzImVs3BneGQCgjioAoJAqAIM+ADtjZGxxco0E6xn0GfgZ/BkBGgABY2nvGfEZAKCnKnIAAKB6Km8AdAAAoNci0CFhcgCglSl1ImVzdAAAoHwqgAJhZGVscwAKGvQZFhrVBCAa8AEPGgAAFBpwAHIAbwD4AFkZcgAAoHgpcQAAAWxxxAQbGmwAZQBzAPMASRlpAO0A5AQAAWVuJxouGnIjdG5lcXEAAOBpIgD+xQAsGgAFQWFiY2Vma29zeUAaQxpmGmoabRqDGocalhrCGtMacgDyAMwCAAJpbG1yShpOGlAaVBpyAHMA8ABxD2YAvWBpAGwA9AASBQABZHJYGlsaYwB5AEpkAKGUIWN3YBpkGmkAcgAAoEgpAKCtIWEAcgAAoA8h6SFyYyVhgAFhbHIAcxp7Gn8a8iF0c3WgZSZpAHQAAKBlJuwhaXAAoCYg4yFvbgCguSJyAADgNdgl3XMAAAFld4wakRphInJvdwAAoCUpYSJyb3cAAKAmKYACYW1vcHIAnxqjGqcauhq+GnIAcgAAoP8h9CFodACgOyJrAAABbHKsGrMaZSRmdGFycm93AACgqSHpJGdodGFycm93AKCqIWYAAOA12Fnd4iFhcgCgFSCAAWNsdADIGswa0BpyAADgNdi93GEAcwDoAGka8iFvaydhAAFicNca2xr1IWxsAKBDIOghZW4AoBAg4Qr2GgAA/RoAAAgbExsaGwAAIRs7GwAAAAA+G2IbmRuVG6sbAACyG80b0htjAHUAdABlADuA7QDtQAChYyBpeQEbBhtyAGMAO4DuAO5AOGQAAWN4CxsNG3kANWRjAGwAO4ChAKFAAAFmcssCFhsA4DXYJt1yAGEAdgBlADuA7ADsQIChSCFpbm8AJxsyGzYbAAFpbisbLxtuAHQAAKAMKnQAAKAtIuYhaW4AoNwpdABhAACgKSHsIWlnM2GAAWFvcABDG1sbXhuAAWNndABJG0sbWRtyACthgAFlbHAAcQVRG1UbaQBuAOUAyAVhAHIA9AByBWgAMWFmAACgtyJlAGQAtWEAoggiY2ZvdGkbbRt1G3kb4SFyZQCgBSFpAG4AdKAeImkAZQAAoN0pZABvAPQAWxsAoisiY2VscIEbhRuPG5QbYQBsAACguiIAAWdyiRuNG2UAcgDzACMQ4wCCG2EicmhrAACgFyryIW9kAKA8KgACY2dwdJ8boRukG6gbeQBRZG8AbgAvYWYAAOA12FrdYQC5Y3UAZQBzAHQAO4C/AL9AAAFjabUbuRtyAADgNdi+3G4AAKIIIkVkc3bCG8QbyBvQAwCg+SJvAHQAAKD1Inag9CIAoPMiaaBiIOwhZGUpYesB1hsAANkbYwB5AFZkbAA7gO8A70AAA2NmbW9zdeYb7hvyG/Ub+hsFHAABaXnqG+0bcgBjADVhOWRyAADgNdgn3eEhdGg3YnAAZgAA4DXYW93jAf8bAAADHHIAAOA12L/c8iFjeVhk6yFjeVRkAARhY2ZnaGpvcxUcGhwiHCYcKhwtHDAcNRzwIXBhdqC6A/BjAAFleR4cIRzkIWlsN2E6ZHIAAOA12CjdciJlZW4AOGFjAHkARWRjAHkAXGRwAGYAAOA12FzdYwByAADgNdjA3IALQUJFSGFiY2RlZmdoamxtbm9wcnN0dXYAXhxtHHEcdRx5HN8cBx0dHTwd3B3tHfEdAR4EHh0eLB5FHrwewx7hHgkfPR9LH4ABYXJ0AGQcZxxpHHIA8gBvB/IAxQLhIWlsAKAbKeEhcnIAoA4pZ6BmIgCgiyphAHIAAKBiKWMJjRwAAJAcAACVHAAAAAAAAAAAAACZHJwcAACmHKgcrRwAANIc9SF0ZTph7SJwdHl2AKC0KXIAYQDuAFoG4iFkYbtjZwAAoegnZGyhHKMcAKCRKeUAiwYAoIUqdQBvADuAqwCrQHIAgKOQIWJmaGxwc3QAuhy/HMIcxBzHHMoczhxmoOQhcwAAoB8pcwAAoB0p6wCyGnAAAKCrIWwAAKA5KWkAbQAAoHMpbAAAoKIhAKGrKmFl1hzaHGkAbAAAoBkpc6CtKgDgrSoA/oABYWJyAOUc6RztHHIAcgAAoAwpcgBrAACgcicAAWFr8Rz4HGMAAAFla/Yc9xx7YFtgAAFlc/wc/hwAoIspbAAAAWR1Ax0FHQCgjykAoI0pAAJhZXV5Dh0RHRodHB3yIW9uPmEAAWRpFR0YHWkAbAA8YewAowbiAPccO2QAAmNxcnMkHScdLB05HWEAAKA2KXUAbwDyoBwgqhEAAWR1MB00HeghYXIAoGcpcyJoYXIAAKBLKWgAAKCyIQCiZCJmZ3FzRB1FB5Qdnh10AIACYWhscnQATh1WHWUdbB2NHXIicm93AHSgkCFhAOkAzxxhI3Jwb29uAAABZHVeHWId7yF3bgCgvSFwAACgvCHlJGZ0YXJyb3dzAKDHIWkiZ2h0AIABYWhzAHUdex2DHXIicm93APOglCGdBmEAcgBwAG8AbwBuAPMAzgtxAHUAaQBnAGEAcgByAG8A9wBlGugkcmVldGltZXMAoMsi8aFkIk0HAACaHWwAYQBuAPQAXgcAon0qY2Rnc6YdqR2xHbcdYwAAoKgqbwB0AG+gfypyoIEqAKCDKmXg2iIA/nMAAKCTKoACYWRlZ3MAwB3GHcod1h3ZHXAAcAByAG8A+ACmHG8AdAAAoNYicQAAAWdxzx3SHXQA8gBGB2cAdADyAHQcdADyAFMHaQDtAGMHgAFpbHIA4h3mHeod8yFodACgfClvAG8A8gDKBgDgNdgp3UWgdiIAoJEqYQH1Hf4dcgAAAWR1YB35HWygvCEAoGopbABrAACghCVjAHkAWWQAomoiYWNodAweDx4VHhkecgDyAGsdbwByAG4AZQDyAGAW4SFyZACgaylyAGkAAKD6JQABaW8hHiQe5CFvdEBh9SFzdGGgsCPjIWhlAKCwIwACRWFlczMeNR48HkEeAKBoInAAcKCJKvIhb3gAoIkqcaCHKvGghyo0HmkAbQAAoOYiAARhYm5vcHR3elIeXB5fHoUelh6mHqsetB4AAW5yVh5ZHmcAAKDsJ3IAAKD9IXIA6wCwBmcAgAFsbXIAZh52Hnse5SFmdAABYXKIB2weaQBnAGgAdABhAHIAcgBvAPcAkwfhInBzdG8AoPwnaQBnAGgAdABhAHIAcgBvAPcAmgdwI2Fycm93AAABbHKNHpEeZQBmAPQAxhxpImdodAAAoKwhgAFhZmwAnB6fHqIecgAAoIUpAOA12F3ddQBzAACgLSppIm1lcwAAoDQqYQGvHrMecwB0AACgFyLhAIoOZaHKJbkeRhLuIWdlAKDKJWEAcgBsoCgAdAAAoJMpgAJhY2htdADMHs8e1R7bHt0ecgDyAJ0GbwByAG4AZQDyANYWYQByAGSgyyEAoG0pAKAOIHIAaQAAoL8iAANhY2hpcXTrHu8e1QfzHv0eBh/xIXVvAKA5IHIAAOA12MHcbQDloXIi+h4AAPweAKCNKgCgjyoAAWJ19xwBH28AcqAYIACgGiDyIW9rQmEAhDwAO2NkaGlscXJCBhcfxh0gHyQfKB8sHzEfAAFjaRsfHR8AoKYqcgAAoHkqcgBlAOUAkx3tIWVzAKDJIuEhcnIAoHYpdSJlc3QAAKB7KgABUGk1HzkfYQByAACglillocMlAgdfEnIAAAFkdUIfRx9zImhhcgAAoEop6CFhcgCgZikAAWVuTx9WH3IjdG5lcXEAAOBoIgD+xQBUHwAHRGFjZGVmaGlsbm9wc3VuH3Ifoh+rH68ftx+7H74f5h/uH/MfBwj/HwsgxCFvdACgOiIAAmNscHJ5H30fiR+eH3IAO4CvAK9AAAFldIEfgx8AoEImZaAgJ3MAZQAAoCAnc6CmIXQAbwCAoaYhZGx1AJQfmB+cH28AdwDuAHkDZQBmAPQA6gbwAOkO6yFlcgCgriUAAW95ph+qH+0hbWEAoCkqPGThIXNoAKAUIOElc3VyZWRhbmdsZQCgISJyAADgNdgq3W8AAKAnIYABY2RuAMQfyR/bH3IAbwA7gLUAtUBhoiMi0B8AANMf1x9zAPQAKxFpAHIAAKDwKm8AdAA7gLcAt0B1AHMA4qESIh4TAADjH3WgOCIAoCoqYwHqH+0fcAAAoNsq8gB+GnAAbAB1APMACAgAAWRw9x/7H+UhbHMAoKciZgAA4DXYXt0AAWN0AyAHIHIAAOA12MLc8CFvcwCgPiJsobwDECAVIPQiaW1hcACguCJhAPAAEyAADEdMUlZhYmNkZWZnaGlqbG1vcHJzdHV2dzwgRyBmIG0geSCqILgg2iDeIBEhFSEyIUMhTSFQIZwhnyHSIQAiIyKLIrEivyIUIwABZ3RAIEMgAODZIjgD9uBrItIgBwmAAWVsdABNIF8gYiBmAHQAAAFhclMgWCByInJvdwAAoM0h6SRnaHRhcnJvdwCgziEA4NgiOAP24Goi0iBfCekkZ2h0YXJyb3cAoM8hAAFEZHEgdSDhIXNoAKCvIuEhc2gAoK4igAJiY25wdACCIIYgiSCNIKIgbABhAACgByL1IXRlRGFnAADgICLSIACiSSJFaW9wlSCYIJwgniAA4HAqOANkAADgSyI4A3MASWFyAG8A+AAyCnUAcgBhoG4mbADzoG4mmwjzAa8gAACzIHAAO4CgAKBAbQBwAOXgTiI4AyoJgAJhZW91eQDBIMogzSDWINkg8AHGIAAAyCAAoEMqbwBuAEhh5CFpbEZhbgBnAGSgRyJvAHQAAOBtKjgDcAAAoEIqPWThIXNoAKATIACjYCJBYWRxc3jpIO0g+SD+IAIhDCFyAHIAAKDXIXIAAAFocvIg9SBrAACgJClvoJch9wAGD28AdAAA4FAiOAN1AGkA9gC7CAABZWkGIQohYQByAACgKCntAN8I6SFzdPOgBCLlCHIAAOA12CvdAAJFZXN0/wgcISshLiHxoXEiIiEAABMJ8aFxIgAJAAAnIWwAYQBuAPQAEwlpAO0AGQlyoG8iAKBvIoABQWFwADghOyE/IXIA8gBeIHIAcgAAoK4hYQByAACg8ipzogsiSiEAAAAAxwtkoPwiAKD6ImMAeQBaZIADQUVhZGVzdABcIV8hYiFmIWkhkyGWIXIA8gBXIADgZiI4A3IAcgAAoJohcgAAoCUggKFwImZxcwBwIYQhjiF0AAABYXJ1IXohcgByAG8A9wBlIWkAZwBoAHQAYQByAHIAbwD3AD4h8aFwImAhAACKIWwAYQBuAPQAZwlz4H0qOAMAoG4iaQDtAG0JcqBuImkA5aDqIkUJaQDkADoKAAFwdKMhpyFmAADgNdhf3YCBrAA7aW4AriGvIcchrEBuAIChCSJFZHYAtyG6Ib8hAOD5IjgDbwB0AADg9SI4A+EB1gjEIcYhAKD3IgCg9iJpAHagDCLhAagJzyHRIQCg/iIAoP0igAFhb3IA2CHsIfEhcgCAoSYiYXN0AOAh5SHpIWwAbABlAOwAywhsAADg/SrlIADgAiI4A2wiaW50AACgFCrjoYAi9yEAAPohdQDlAJsJY+CvKjgDZaCAIvEAkwkAAkFhaXQHIgoiFyIeInIA8gBsIHIAcgAAoZshY3cRIhQiAOAzKTgDAOCdITgDZyRodGFycm93AACgmyFyAGkA5aDrIr4JgANjaGltcHF1AC8iPCJHIpwhTSJQIloigKGBImNlcgA2Iv0JOSJ1AOUABgoA4DXYw9zvIXJ0bQKdIQAAAABEImEAcgDhAOEhbQBloEEi8aBEIiYKYQDyAMsIcwB1AAABYnBWIlgi5QDUCeUA3wmAAWJjcABgInMieCKAoYQiRWVzAGci7glqIgDgxSo4A2UAdABl4IIi0iBxAPGgiCJoImMAZaCBIvEA/gmAoYUiRWVzAH8iFgqCIgDgxio4A2UAdABl4IMi0iBxAPGgiSKAIgACZ2lscpIilCKaIpwi7AAMCWwAZABlADuA8QDxQOcAWwlpI2FuZ2xlAAABbHKkIqoi5SFmdGWg6iLxAEUJaSJnaHQAZaDrIvEAvgltoL0DAKEjAGVzuCK8InIAbwAAoBYhcAAAoAcggARESGFkZ2lscnMAziLSItYi2iLeIugi7SICIw8j4SFzaACgrSLhIXJyAKAEKXAAAOBNItIg4SFzaACgrCIAAWV04iLlIgDgZSLSIADgPgDSIG4iZmluAACg3imAAUFldADzIvci+iJyAHIAAKACKQDgZCLSIHLgPADSIGkAZQAA4LQi0iAAAUF0BiMKI3IAcgAAoAMp8iFpZQDgtSLSIGkAbQAA4Dwi0iCAAUFhbgAaIx4jKiNyAHIAAKDWIXIAAAFociMjJiNrAACgIylvoJYh9wD/DuUhYXIAoCcpUxJqFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVCMAAF4jaSN/I4IjjSOeI8AUAAAAAKYjwCMAANoj3yMAAO8jHiQvJD8kRCQAAWNzVyNsFHUAdABlADuA8wDzQAABaXlhI2cjcgBjoJoiO4D0APRAPmSAAmFiaW9zAHEjdCN3I3EBeiNzAOgAdhTsIWFjUWF2AACgOCrvIWxkAKC8KewhaWdTYQABY3KFI4kjaQByAACgvykA4DXYLN1vA5QjAAAAAJYjAACcI24A22JhAHYAZQA7gPIA8kAAoMEpAAFibaEjjAphAHIAAKC1KQACYWNpdKwjryO6I70jcgDyAFkUAAFpcrMjtiNyAACgvinvIXNzAKC7KW4A5QDZCgCgwCmAAWFlaQDFI8gjyyNjAHIATWFnAGEAyWOAAWNkbgDRI9Qj1iPyIW9uv2MAoLYpdQDzAHgBcABmAADgNdhg3YABYWVsAOQj5yPrI3IAAKC3KXIAcAAAoLkpdQDzAHwBAKMoImFkaW9zdvkj/CMPJBMkFiQbJHIA8gBeFIChXSplZm0AAyQJJAwkcgBvoDQhZgAAoDQhO4CqAKpAO4C6ALpA5yFvZgCgtiJyAACgVipsIm9wZQAAoFcqAKBbKoABY2xvACMkJSQrJPIACCRhAHMAaAA7gPgA+EBsAACgmCJpAGwBMyQ4JGQAZQA7gPUA9UBlAHMAYaCXInMAAKA2Km0AbAA7gPYA9kDiIWFyAKA9I+EKXiQAAHokAAB8JJQkAACYJKkkAAAAALUkEQsAAPAkAAAAAAQleiUAAIMlcgCAoSUiYXN0AGUkbyQBCwCBtgA7bGokayS2QGwAZQDsABgDaQJ1JAAAAAB4JG0AAKDzKgCg/Sp5AD9kcgCAAmNpbXB0AIUkiCSLJJkSjyRuAHQAJWBvAGQALmBpAGwAAKAwIOUhbmsAoDEgcgAA4DXYLd2AAWltbwCdJKAkpCR2oMYD1WNtAGEA9AD+B24AZQAAoA4m9KHAA64kAAC0JGMjaGZvcmsAAKDUItZjAAFhdbgkxCRuAAABY2u9JMIkawBooA8hAKAOIfYAaRpzAACkKwBhYmNkZW1zdNMkIRPXJNsk4STjJOck6yTjIWlyAKAjKmkAcgAAoCIqAAFvdYsW3yQAoCUqAKByKm4AO4CxALFAaQBtAACgJip3AG8AAKAnKoABaXB1APUk+iT+JO4idGludACgFSpmAADgNdhh3W4AZAA7gKMAo0CApHoiRWFjZWlub3N1ABMlFSUYJRslTCVRJVklSSV1JQCgsypwAACgtyp1AOUAPwtjoK8qgKJ6ImFjZW5zACclLSU0JTYlSSVwAHAAcgBvAPgAFyV1AHIAbAB5AGUA8QA/C/EAOAuAAWFlcwA8JUElRSXwInByb3gAoLkqcQBxAACgtSppAG0AAKDoImkA7QBEC20AZQDzoDIgIguAAUVhcwBDJVclRSXwAEAlgAFkZnAATwtfJXElgAFhbHMAZSVpJW0l7CFhcgCgLiPpIW5lAKASI/UhcmYAoBMjdKAdIu8AWQvyIWVsAKCwIgABY2l9JYElcgAA4DXYxdzIY24iY3NwAACgCCAAA2Zpb3BzdZElKxuVJZolnyWkJXIAAOA12C7dcABmAADgNdhi3XIiaW1lAACgVyBjAHIAAOA12MbcgAFhZW8AqiW6JcAldAAAAWVpryW2JXIAbgBpAG8AbgDzABkFbgB0AACgFipzAHQAZaA/APEACRj0AG0LgApBQkhhYmNkZWZoaWxtbm9wcnN0dXgA4yXyJfYl+iVpJpAmpia9JtUm5ib4JlonaCdxJ3UnnietJ7EnyCfiJ+cngAFhcnQA6SXsJe4lcgDyAJkM8gD6AuEhaWwAoBwpYQByAPIA3BVhAHIAAKBkKYADY2RlbnFydAAGJhAmEyYYJiYmKyZaJgABZXUKJg0mAOA9IjEDdABlAFVhaQDjACAN7SJwdHl2AKCzKWcAgKHpJ2RlbAAgJiImJCYAoJIpAKClKeUA9wt1AG8AO4C7ALtAcgAApZIhYWJjZmhscHN0dz0mQCZFJkcmSiZMJk4mUSZVJlgmcAAAoHUpZqDlIXMAAKAgKQCgMylzAACgHinrALka8ACVHmwAAKBFKWkAbQAAoHQpbAAAoKMhAKCdIQABYWleJmImaQBsAACgGilvAG6gNiJhAGwA8wB2C4ABYWJyAG8mciZ2JnIA8gAvEnIAawAAoHMnAAFha3omgSZjAAABZWt/JoAmfWBdYAABZXOFJocmAKCMKWwAAAFkdYwmjiYAoI4pAKCQKQACYWV1eZcmmiajJqUm8iFvbllhAAFkaZ4moSZpAGwAV2HsAA8M4gCAJkBkAAJjbHFzrSawJrUmuiZhAACgNylkImhhcgAAoGkpdQBvAPKgHSCjAWgAAKCzIYABYWNnAMMm0iaUC2wAgKEcIWlwcwDLJs4migxuAOUAoAxhAHIA9ADaC3QAAKCtJYABaWxyANsm3ybjJvMhaHQAoH0pbwBvAPIANgwA4DXYL90AAWFv6ib1JnIAAAFkde8m8SYAoMEhbKDAIQCgbCl2oMED8WOAAWducwD+Jk4nUCdoAHQAAANhaGxyc3QKJxInISc1Jz0nRydyInJvdwB0oJIhYQDpAFYmYSNycG9vbgAAAWR1GiceJ28AdwDuAPAmcAAAoMAh5SFmdAABYWgnJy0ncgByAG8AdwDzAAkMYQByAHAAbwBvAG4A8wATBGklZ2h0YXJyb3dzAACgySFxAHUAaQBnAGEAcgByAG8A9wBZJugkcmVldGltZXMAoMwiZwDaYmkAbgBnAGQAbwB0AHMAZQDxABwYgAFhaG0AYCdjJ2YncgDyAAkMYQDyABMEAKAPIG8idXN0AGGgsSPjIWhlAKCxI+0haWQAoO4qAAJhYnB0fCeGJ4knmScAAW5ygCeDJ2cAAKDtJ3IAAKD+IXIA6wAcDIABYWZsAI8nkieVJ3IAAKCGKQDgNdhj3XUAcwAAoC4qaSJtZXMAAKA1KgABYXCiJ6gncgBnoCkAdAAAoJQp7yJsaW50AKASKmEAcgDyADwnAAJhY2hxuCe8J6EMwCfxIXVvAKA6IHIAAOA12MfcAAFidYAmxCdvAPKgGSCoAYABaGlyAM4n0ifWJ3IAZQDlAE0n7SFlcwCgyiJpAIChuSVlZmwAXAxjEt4n9CFyaQCgzinsInVoYXIAoGgpAKAeIWENBSgJKA0oSyhVKIYoAACLKLAoAAAAAOMo5ygAABApJCkxKW0pcSmHKaYpAACYKgAAAACxKmMidXRlAFthcQB1AO8ABR+ApHsiRWFjZWlucHN5ABwoHignKCooLygyKEEoRihJKACgtCrwASMoAAAlKACguCpvAG4AYWF1AOUAgw1koLAqaQBsAF9hcgBjAF1hgAFFYXMAOCg6KD0oAKC2KnAAAKC6KmkAbQAAoOki7yJsaW50AKATKmkA7QCIDUFkbwB0AGKixSKRFgAAAABTKACgZiqAA0FhY21zdHgAYChkKG8ocyh1KHkogihyAHIAAKDYIXIAAAFocmkoayjrAJAab6CYIfcAzAd0ADuApwCnQGkAO2D3IWFyAKApKW0AAAFpbn4ozQBuAHUA8wDOAHQAAKA2J3IA7+A12DDdIxkAAmFjb3mRKJUonSisKHIAcAAAoG8mAAFoeZkonChjAHkASWRIZHIAdABtAqUoAAAAAKgoaQDkAFsPYQByAGEA7ABsJDuArQCtQAABZ22zKLsobQBhAAChwwNmdroouijCY4CjPCJkZWdsbnByAMgozCjPKNMo1yjaKN4obwB0AACgairxoEMiCw5FoJ4qAKCgKkWgnSoAoJ8qZQAAoEYi7CF1cwCgJCrhIXJyAKByKWEAcgDyAPwMAAJhZWl07Sj8KAEpCCkAAWxz8Sj4KGwAcwBlAHQAbQDpAH8oaABwAACgMyrwImFyc2wAoOQpAAFkbFoPBSllAACgIyNloKoqc6CsKgDgrCoA/oABZmxwABUpGCkfKfQhY3lMZGKgLwBhoMQpcgAAoD8jZgAA4DXYZN1hAAABZHIoKRcDZQBzAHWgYCZpAHQAAKBgJoABY3N1ADYpRilhKQABYXU6KUApcABzoJMiAOCTIgD+cABzoJQiAOCUIgD+dQAAAWJwSylWKQChjyJlcz4NUCllAHQAZaCPIvEAPw0AoZAiZXNIDVspZQB0AGWgkCLxAEkNAKGhJWFmZilbBHIAZQFrKVwEAKChJWEAcgDyAAMNAAJjZW10dyl7KX8pgilyAADgNdjI3HQAbQDuAM4AaQDsAAYpYQByAOYAVw0AAWFyiimOKXIA5qAGJhESAAFhbpIpoylpImdodAAAAWVwmSmgKXAAcwBpAGwAbwDuANkXaADpAKAkcwCvYIACYmNtbnAArin8KY4NJSooKgCkgiJFZGVtbnByc7wpvinCKcgpzCnUKdgp3CkAoMUqbwB0AACgvSpkoIYibwB0AACgwyr1IWx0AKDBKgABRWXQKdIpAKDLKgCgiiLsIXVzAKC/KuEhcnIAoHkpgAFlaXUA4inxKfQpdAAAoYIiZW7oKewpcQDxoIYivSllAHEA8aCKItEpbQAAoMcqAAFicPgp+ikAoNUqAKDTKmMAgKJ7ImFjZW5zAAcqDSoUKhYqRihwAHAAcgBvAPgAIyh1AHIAbAB5AGUA8QCDDfEAfA2AAWFlcwAcKiIqPShwAHAAcgBvAPgAPChxAPEAOShnAACgaiYApoMiMTIzRWRlaGxtbnBzPCo/KkIqRSpHKlIqWCpjKmcqaypzKncqO4C5ALlAO4CyALJAO4CzALNAAKDGKgABb3NLKk4qdAAAoL4qdQBiAACg2CpkoIcibwB0AACgxCpzAAABb3VdKmAqbAAAoMknYgAAoNcq4SFycgCgeyn1IWx0AKDCKgABRWVvKnEqAKDMKgCgiyLsIXVzAKDAKoABZWl1AH0qjCqPKnQAAKGDImVugyqHKnEA8aCHIkYqZQBxAPGgiyJwKm0AAKDIKgABYnCTKpUqAKDUKgCg1iqAAUFhbgCdKqEqrCpyAHIAAKDZIXIAAAFocqYqqCrrAJUab6CZIfcAxQf3IWFyAKAqKWwAaQBnADuA3wDfQOELzyrZKtwq6SrsKvEqAAD1KjQrAAAAAAAAAAAAAEwrbCsAAHErvSsAAAAAAADRK3IC1CoAAAAA2CrnIWV0AKAWI8RjcgDrAOUKgAFhZXkA4SrkKucq8iFvbmVh5CFpbGNhQmRvAPQAIg5sInJlYwAAoBUjcgAA4DXYMd0AAmVpa2/7KhIrKCsuK/IBACsAAAkrZQAAATRm6g0EK28AcgDlAOsNYQBzorgDECsAAAAAEit5AG0A0WMAAWNuFislK2sAAAFhcxsrIStwAHAAcgBvAPgAFw5pAG0AAKA8InMA8AD9DQABYXMsKyEr8AAXDnIAbgA7gP4A/kDsATgrOyswG2QA5QBnAmUAcwCAgdcAO2JkAEMrRCtJK9dAYaCgInIAAKAxKgCgMCqAAWVwcwBRK1MraSvhAAkh4qKkIlsrXysAAAAAYytvAHQAAKA2I2kAcgAAoPEqb+A12GXdcgBrAACg2irhAHgociJpbWUAAKA0IIABYWlwAHYreSu3K2QA5QC+DYADYWRlbXBzdACFK6MrmiunK6wrsCuzK24iZ2xlAACitSVkbHFykCuUK5ornCvvIXduAKC/JeUhZnRloMMl8QACBwCgXCJpImdodABloLkl8QBdDG8AdAAAoOwlaSJudXMAAKA6KuwhdXMAoDkqYgAAoM0p6SFtZQCgOyrlInppdW0AoOIjgAFjaHQAwivKK80rAAFyecYrySsA4DXYydxGZGMAeQBbZPIhb2tnYQABaW/UK9creAD0ANERaCJlYWQAAAFsct4r5ytlAGYAdABhAHIAcgBvAPcAXQbpJGdodGFycm93AKCgIQAJQUhhYmNkZmdobG1vcHJzdHV3CiwNLBEsHSwnLDEsQCxLLFIsYix6LIQsjyzLLOgs7Sz/LAotcgDyAAkDYQByAACgYykAAWNyFSwbLHUAdABlADuA+gD6QPIACQ1yAOMBIywAACUseQBeZHYAZQBtYQABaXkrLDAscgBjADuA+wD7QENkgAFhYmgANyw6LD0scgDyANEO7CFhY3FhYQDyAOAOAAFpckQsSCzzIWh0AKB+KQDgNdgy3XIAYQB2AGUAO4D5APlAYQFWLF8scgAAAWxyWixcLACgvyEAoL4hbABrAACggCUAAWN0Zix2LG8CbCwAAAAAcyxyAG4AZaAcI3IAAKAcI28AcAAAoA8jcgBpAACg+CUAAWFsfiyBLGMAcgBrYTuAqACoQAABZ3CILIssbwBuAHNhZgAA4DXYZt0AA2FkaGxzdZksniynLLgsuyzFLHIAcgBvAPcACQ1vAHcAbgBhAHIAcgBvAPcA2A5hI3Jwb29uAAABbHKvLLMsZQBmAPQAWyxpAGcAaAD0AF0sdQDzAKYOaQAAocUDaGzBLMIs0mNvAG4AxWPwI2Fycm93cwCgyCGAAWNpdADRLOEs5CxvAtcsAAAAAN4scgBuAGWgHSNyAACgHSNvAHAAAKAOI24AZwBvYXIAaQAAoPklYwByAADgNdjK3IABZGlyAPMs9yz6LG8AdAAAoPAi7CFkZWlhaQBmoLUlAKC0JQABYW0DLQYtcgDyAMosbAA7gPwA/EDhIm5nbGUAoKcpgAdBQkRhY2RlZmxub3Byc3oAJy0qLTAtNC2bLZ0toS2/LcMtxy3TLdgt3C3gLfwtcgDyABADYQByAHag6CoAoOkqYQBzAOgA/gIAAW5yOC08LechcnQAoJwpgANla25wcnN0AJkpSC1NLVQtXi1iLYItYQBwAHAA4QAaHG8AdABoAGkAbgDnAKEXgAFoaXIAoSmzJFotbwBwAPQAdCVooJUh7wD4JgABaXVmLWotZwBtAOEAuygAAWJwbi14LXMjZXRuZXEAceCKIgD+AODLKgD+cyNldG5lcQBx4IsiAP4A4MwqAP4AAWhyhi2KLWUAdADhABIraSNhbmdsZQAAAWxyki2WLeUhZnQAoLIiaSJnaHQAAKCzInkAMmThIXNoAKCiIoABZWxyAKcttC24LWKiKCKuLQAAAACyLWEAcgAAoLsicQAAoFoi7CFpcACg7iIAAWJ0vC1eD2EA8gBfD3IAAOA12DPddAByAOkAlS1zAHUAAAFicM0t0C0A4IIi0iAA4IMi0iBwAGYAAOA12GfdcgBvAPAAWQt0AHIA6QCaLQABY3XkLegtcgAA4DXYy9wAAWJw7C30LW4AAAFFZXUt8S0A4IoiAP5uAAABRWV/LfktAOCLIgD+6SJnemFnAKCaKYADY2Vmb3BycwANLhAuJS4pLiMuLi40LukhcmN1YQABZGkULiEuAAFiZxguHC5hAHIAAKBfKmUAcaAnIgCgWSLlIXJwAKAYIXIAAOA12DTdcABmAADgNdho3WWgQCJhAHQA6ABqD2MAcgAA4DXYzNzjCuQRUC4AAFQuAABYLmIuAAAAAGMubS5wLnQuAAAAAIguki4AAJouJxIqEnQAcgDpAB0ScgAA4DXYNd0AAUFhWy5eLnIA8gDnAnIA8gCTB75jAAFBYWYuaS5yAPIA4AJyAPIAjAdhAPAAeh5pAHMAAKD7IoABZHB0APgReS6DLgABZmx9LoAuAOA12GnddQDzAP8RaQBtAOUABBIAAUFhiy6OLnIA8gDuAnIA8gCaBwABY3GVLgoScgAA4DXYzdwAAXB0nS6hLmwAdQDzACUScgDpACASAARhY2VmaW9zdbEuvC7ELsguzC7PLtQu2S5jAAABdXm2LrsudABlADuA/QD9QE9kAAFpecAuwy5yAGMAd2FLZG4AO4ClAKVAcgAA4DXYNt1jAHkAV2RwAGYAAOA12GrdYwByAADgNdjO3AABY23dLt8ueQBOZGwAO4D/AP9AAAVhY2RlZmhpb3N38y73Lv8uAi8MLxAvEy8YLx0vIi9jInV0ZQB6YQABYXn7Lv4u8iFvbn5hN2RvAHQAfGEAAWV0Bi8KL3QAcgDmAB8QYQC2Y3IAAOA12DfdYwB5ADZk5yJyYXJyAKDdIXAAZgAA4DXYa91jAHIAAOA12M/cAAFqbiYvKC8AoA0gagAAoAwg");

/**
 * Bit flags & masks for the binary trie encoding used for entity decoding.
 *
 * Bit layout (16 bits total):
 * 15..14 VALUE_LENGTH   (+1 encoding; 0 => no value)
 * 13     FLAG13.        If valueLength>0: semicolon required flag (implicit ';').
 *                       If valueLength==0: compact run flag.
 * 12..7  BRANCH_LENGTH  Branch length (0 => single branch in 6..0 if jumpOffset==char) OR run length (when compact run)
 * 6..0   JUMP_TABLE     Jump offset (jump table) OR single-branch char code OR first run char
 */
var BinTrieFlags;
(function (BinTrieFlags) {
  BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
  BinTrieFlags[BinTrieFlags["FLAG13"] = 8192] = "FLAG13";
  BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 8064] = "BRANCH_LENGTH";
  BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));

var CharCodes;
(function (CharCodes) {
  CharCodes[CharCodes["NUM"] = 35] = "NUM";
  CharCodes[CharCodes["SEMI"] = 59] = "SEMI";
  CharCodes[CharCodes["EQUALS"] = 61] = "EQUALS";
  CharCodes[CharCodes["ZERO"] = 48] = "ZERO";
  CharCodes[CharCodes["NINE"] = 57] = "NINE";
  CharCodes[CharCodes["LOWER_A"] = 97] = "LOWER_A";
  CharCodes[CharCodes["LOWER_F"] = 102] = "LOWER_F";
  CharCodes[CharCodes["LOWER_X"] = 120] = "LOWER_X";
  CharCodes[CharCodes["LOWER_Z"] = 122] = "LOWER_Z";
  CharCodes[CharCodes["UPPER_A"] = 65] = "UPPER_A";
  CharCodes[CharCodes["UPPER_F"] = 70] = "UPPER_F";
  CharCodes[CharCodes["UPPER_Z"] = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
/** Bit that needs to be set to convert an upper case ASCII character to lower case */
var TO_LOWER_BIT = 32;
function isNumber(code) {
  return code >= CharCodes.ZERO && code <= CharCodes.NINE;
}
function isHexadecimalCharacter(code) {
  return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F;
}
function isAsciiAlphaNumeric(code) {
  return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z || isNumber(code);
}
/**
 * Checks if the given character is a valid end character for an entity in an attribute.
 *
 * Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
 * See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
 */
function isEntityInAttributeInvalidEnd(code) {
  return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
}
var EntityDecoderState;
(function (EntityDecoderState) {
  EntityDecoderState[EntityDecoderState["EntityStart"] = 0] = "EntityStart";
  EntityDecoderState[EntityDecoderState["NumericStart"] = 1] = "NumericStart";
  EntityDecoderState[EntityDecoderState["NumericDecimal"] = 2] = "NumericDecimal";
  EntityDecoderState[EntityDecoderState["NumericHex"] = 3] = "NumericHex";
  EntityDecoderState[EntityDecoderState["NamedEntity"] = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function (DecodingMode) {
  /** Entities in text nodes that can end with any character. */
  DecodingMode[DecodingMode["Legacy"] = 0] = "Legacy";
  /** Only allow entities terminated with a semicolon. */
  DecodingMode[DecodingMode["Strict"] = 1] = "Strict";
  /** Entities in attributes have limitations on ending characters. */
  DecodingMode[DecodingMode["Attribute"] = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
/**
 * Token decoder with support of writing partial entities.
 */
var EntityDecoder = /*#__PURE__*/function () {
  function EntityDecoder(/** The tree used to decode entities. */
  // biome-ignore lint/correctness/noUnusedPrivateClassMembers: False positive
  decodeTree,
  /**
   * The function that is called when a codepoint is decoded.
   *
   * For multi-byte named entities, this will be called multiple times,
   * with the second codepoint, and the same `consumed` value.
   *
   * @param codepoint The decoded codepoint.
   * @param consumed The number of bytes consumed by the decoder.
   */
  emitCodePoint, /** An object that is used to produce errors. */
  errors) {
    _classCallCheck(this, EntityDecoder);
    this.decodeTree = decodeTree;
    this.emitCodePoint = emitCodePoint;
    this.errors = errors;
    /** The current state of the decoder. */
    this.state = EntityDecoderState.EntityStart;
    /** Characters that were consumed while parsing an entity. */
    this.consumed = 1;
    /**
     * The result of the entity.
     *
     * Either the result index of a numeric entity, or the codepoint of a
     * numeric entity.
     */
    this.result = 0;
    /** The current index in the decode tree. */
    this.treeIndex = 0;
    /** The number of characters that were consumed in excess. */
    this.excess = 1;
    /** The mode in which the decoder is operating. */
    this.decodeMode = DecodingMode.Strict;
  }
  /** Resets the instance to make it reusable. */
  return _createClass(EntityDecoder, [{
    key: "startEntity",
    value: function startEntity(decodeMode) {
      this.decodeMode = decodeMode;
      this.state = EntityDecoderState.EntityStart;
      this.result = 0;
      this.treeIndex = 0;
      this.excess = 1;
      this.consumed = 1;
    }
    /**
     * Write an entity to the decoder. This can be called multiple times with partial entities.
     * If the entity is incomplete, the decoder will return -1.
     *
     * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
     * entity is incomplete, and resume when the next string is written.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
  }, {
    key: "write",
    value: function write(input, offset) {
      switch (this.state) {
        case EntityDecoderState.EntityStart:
          {
            if (input.charCodeAt(offset) === CharCodes.NUM) {
              this.state = EntityDecoderState.NumericStart;
              this.consumed += 1;
              return this.stateNumericStart(input, offset + 1);
            }
            this.state = EntityDecoderState.NamedEntity;
            return this.stateNamedEntity(input, offset);
          }
        case EntityDecoderState.NumericStart:
          {
            return this.stateNumericStart(input, offset);
          }
        case EntityDecoderState.NumericDecimal:
          {
            return this.stateNumericDecimal(input, offset);
          }
        case EntityDecoderState.NumericHex:
          {
            return this.stateNumericHex(input, offset);
          }
        case EntityDecoderState.NamedEntity:
          {
            return this.stateNamedEntity(input, offset);
          }
      }
    }
    /**
     * Switches between the numeric decimal and hexadecimal states.
     *
     * Equivalent to the `Numeric character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
  }, {
    key: "stateNumericStart",
    value: function stateNumericStart(input, offset) {
      if (offset >= input.length) {
        return -1;
      }
      if ((input.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
        this.state = EntityDecoderState.NumericHex;
        this.consumed += 1;
        return this.stateNumericHex(input, offset + 1);
      }
      this.state = EntityDecoderState.NumericDecimal;
      return this.stateNumericDecimal(input, offset);
    }
    /**
     * Parses a hexadecimal numeric entity.
     *
     * Equivalent to the `Hexademical character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
  }, {
    key: "stateNumericHex",
    value: function stateNumericHex(input, offset) {
      while (offset < input.length) {
        var char = input.charCodeAt(offset);
        if (isNumber(char) || isHexadecimalCharacter(char)) {
          // Convert hex digit to value (0-15); 'a'/'A' -> 10.
          var digit = char <= CharCodes.NINE ? char - CharCodes.ZERO : (char | TO_LOWER_BIT) - CharCodes.LOWER_A + 10;
          this.result = this.result * 16 + digit;
          this.consumed++;
          offset++;
        } else {
          return this.emitNumericEntity(char, 3);
        }
      }
      return -1; // Incomplete entity
    }
    /**
     * Parses a decimal numeric entity.
     *
     * Equivalent to the `Decimal character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
  }, {
    key: "stateNumericDecimal",
    value: function stateNumericDecimal(input, offset) {
      while (offset < input.length) {
        var char = input.charCodeAt(offset);
        if (isNumber(char)) {
          this.result = this.result * 10 + (char - CharCodes.ZERO);
          this.consumed++;
          offset++;
        } else {
          return this.emitNumericEntity(char, 2);
        }
      }
      return -1; // Incomplete entity
    }
    /**
     * Validate and emit a numeric entity.
     *
     * Implements the logic from the `Hexademical character reference start
     * state` and `Numeric character reference end state` in the HTML spec.
     *
     * @param lastCp The last code point of the entity. Used to see if the
     *               entity was terminated with a semicolon.
     * @param expectedLength The minimum number of characters that should be
     *                       consumed. Used to validate that at least one digit
     *                       was consumed.
     * @returns The number of characters that were consumed.
     */
  }, {
    key: "emitNumericEntity",
    value: function emitNumericEntity(lastCp, expectedLength) {
      var _a;
      // Ensure we consumed at least one digit.
      if (this.consumed <= expectedLength) {
        (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
        return 0;
      }
      // Figure out if this is a legit end of the entity
      if (lastCp === CharCodes.SEMI) {
        this.consumed += 1;
      } else if (this.decodeMode === DecodingMode.Strict) {
        return 0;
      }
      this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
      if (this.errors) {
        if (lastCp !== CharCodes.SEMI) {
          this.errors.missingSemicolonAfterCharacterReference();
        }
        this.errors.validateNumericCharacterReference(this.result);
      }
      return this.consumed;
    }
    /**
     * Parses a named entity.
     *
     * Equivalent to the `Named character reference state` in the HTML spec.
     *
     * @param input The string containing the entity (or a continuation of the entity).
     * @param offset The current offset.
     * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
     */
  }, {
    key: "stateNamedEntity",
    value: function stateNamedEntity(input, offset) {
      var decodeTree = this.decodeTree;
      var current = decodeTree[this.treeIndex];
      // The length is the number of bytes of the value, including the current byte.
      var valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
      while (offset < input.length) {
        // Handle compact runs (possibly inline): valueLength == 0 and SEMI_REQUIRED bit set.
        if (valueLength === 0 && (current & BinTrieFlags.FLAG13) !== 0) {
          var runLength = (current & BinTrieFlags.BRANCH_LENGTH) >> 7; /* 2..63 */
          var firstChar = current & BinTrieFlags.JUMP_TABLE;
          // Fast-fail if we don't have enough remaining input for the full run (incomplete entity)
          if (offset + runLength > input.length) return -1;
          // Verify first char
          if (input.charCodeAt(offset) !== firstChar) {
            return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
          }
          offset++;
          this.excess++;
          // Remaining characters after the first
          var remaining = runLength - 1;
          // Iterate over packed 2-char words
          for (var runPos = 1; runPos < runLength; runPos += 2) {
            var packedWord = decodeTree[this.treeIndex + 1 + (runPos - 1 >> 1)];
            var low = packedWord & 0xff;
            if (input.charCodeAt(offset) !== low) {
              return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
            }
            offset++;
            this.excess++;
            var high = packedWord >> 8 & 0xff;
            if (runPos + 1 < runLength) {
              if (input.charCodeAt(offset) !== high) {
                return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
              }
              offset++;
              this.excess++;
            }
          }
          this.treeIndex += 1 + (remaining + 1 >> 1);
          current = decodeTree[this.treeIndex];
          valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
        }
        if (offset >= input.length) break;
        var char = input.charCodeAt(offset);
        /*
         * Implicit semicolon handling for nodes that require a semicolon but
         * don't have an explicit ';' branch stored in the trie. If we have
         * a value on the current node, it requires a semicolon, and the
         * current input character is a semicolon, emit the entity using the
         * current node (without descending further).
         */
        if (char === CharCodes.SEMI && valueLength !== 0 && (current & BinTrieFlags.FLAG13) !== 0) {
          return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
        }
        this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
        if (this.treeIndex < 0) {
          return this.result === 0 ||
          // If we are parsing an attribute
          this.decodeMode === DecodingMode.Attribute && (
          // We shouldn't have consumed any characters after the entity,
          valueLength === 0 ||
          // And there should be no invalid characters.
          isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
        }
        current = decodeTree[this.treeIndex];
        valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
        // If the branch is a value, store it and continue
        if (valueLength !== 0) {
          // If the entity is terminated by a semicolon, we are done.
          if (char === CharCodes.SEMI) {
            return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
          }
          // If we encounter a non-terminated (legacy) entity while parsing strictly, then ignore it.
          if (this.decodeMode !== DecodingMode.Strict && (current & BinTrieFlags.FLAG13) === 0) {
            this.result = this.treeIndex;
            this.consumed += this.excess;
            this.excess = 0;
          }
        }
        // Increment offset & excess for next iteration
        offset++;
        this.excess++;
      }
      return -1;
    }
    /**
     * Emit a named entity that was not terminated with a semicolon.
     *
     * @returns The number of characters consumed.
     */
  }, {
    key: "emitNotTerminatedNamedEntity",
    value: function emitNotTerminatedNamedEntity() {
      var _a;
      var result = this.result,
        decodeTree = this.decodeTree;
      var valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
      this.emitNamedEntityData(result, valueLength, this.consumed);
      (_a = this.errors) === null || _a === void 0 ? void 0 : _a.missingSemicolonAfterCharacterReference();
      return this.consumed;
    }
    /**
     * Emit a named entity.
     *
     * @param result The index of the entity in the decode tree.
     * @param valueLength The number of bytes in the entity.
     * @param consumed The number of characters consumed.
     *
     * @returns The number of characters consumed.
     */
  }, {
    key: "emitNamedEntityData",
    value: function emitNamedEntityData(result, valueLength, consumed) {
      var decodeTree = this.decodeTree;
      this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~(BinTrieFlags.VALUE_LENGTH | BinTrieFlags.FLAG13) : decodeTree[result + 1], consumed);
      if (valueLength === 3) {
        // For multi-byte values, we need to emit the second byte.
        this.emitCodePoint(decodeTree[result + 2], consumed);
      }
      return consumed;
    }
    /**
     * Signal to the parser that the end of the input was reached.
     *
     * Remaining data will be emitted and relevant errors will be produced.
     *
     * @returns The number of characters consumed.
     */
  }, {
    key: "end",
    value: function end() {
      var _a;
      switch (this.state) {
        case EntityDecoderState.NamedEntity:
          {
            // Emit a named entity if we have one.
            return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
          }
        // Otherwise, emit a numeric entity if we have one.
        case EntityDecoderState.NumericDecimal:
          {
            return this.emitNumericEntity(0, 2);
          }
        case EntityDecoderState.NumericHex:
          {
            return this.emitNumericEntity(0, 3);
          }
        case EntityDecoderState.NumericStart:
          {
            (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
            return 0;
          }
        case EntityDecoderState.EntityStart:
          {
            // Return 0 if we have no entity.
            return 0;
          }
      }
    }
  }]);
}();
/**
 * Creates a function that decodes entities in a string.
 *
 * @param decodeTree The decode tree.
 * @returns A function that decodes entities in a string.
 */
function getDecoder(decodeTree) {
  var returnValue = "";
  var decoder = new EntityDecoder(decodeTree, data => returnValue += fromCodePoint(data));
  return function decodeWithTrie(input, decodeMode) {
    var lastIndex = 0;
    var offset = 0;
    while ((offset = input.indexOf("&", offset)) >= 0) {
      returnValue += input.slice(lastIndex, offset);
      decoder.startEntity(decodeMode);
      var length = decoder.write(input,
      // Skip the "&"
      offset + 1);
      if (length < 0) {
        lastIndex = offset + decoder.end();
        break;
      }
      lastIndex = offset + length;
      // If `length` is 0, skip the current `&` and continue.
      offset = length === 0 ? lastIndex + 1 : lastIndex;
    }
    var result = returnValue + input.slice(lastIndex);
    // Make sure we don't keep a reference to the final string.
    returnValue = "";
    return result;
  };
}
/**
 * Determines the branch of the current node that is taken given the current
 * character. This function is used to traverse the trie.
 *
 * @param decodeTree The trie.
 * @param current The current node.
 * @param nodeIdx The index right after the current node and its value.
 * @param char The current character.
 * @returns The index of the next node, or -1 if no branch is taken.
 */
function determineBranch(decodeTree, current, nodeIndex, char) {
  var branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
  var jumpOffset = current & BinTrieFlags.JUMP_TABLE;
  // Case 1: Single branch encoded in jump offset
  if (branchCount === 0) {
    return jumpOffset !== 0 && char === jumpOffset ? nodeIndex : -1;
  }
  // Case 2: Multiple branches encoded in jump table
  if (jumpOffset) {
    var value = char - jumpOffset;
    return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIndex + value] - 1;
  }
  // Case 3: Multiple branches encoded in packed dictionary (two keys per uint16)
  var packedKeySlots = branchCount + 1 >> 1;
  /*
   * Treat packed keys as a virtual sorted array of length `branchCount`.
   * Key(i) = low byte for even i, high byte for odd i in slot i>>1.
   */
  var lo = 0;
  var hi = branchCount - 1;
  while (lo <= hi) {
    var mid = lo + hi >>> 1;
    var slot = mid >> 1;
    var packed = decodeTree[nodeIndex + slot];
    var midKey = packed >> (mid & 1) * 8 & 0xff;
    if (midKey < char) {
      lo = mid + 1;
    } else if (midKey > char) {
      hi = mid - 1;
    } else {
      return decodeTree[nodeIndex + packedKeySlots + mid];
    }
  }
  return -1;
}
var htmlDecoder = /* #__PURE__ */getDecoder(htmlDecodeTree);
/**
 * Decodes an HTML string.
 *
 * @param htmlString The string to decode.
 * @param mode The decoding mode.
 * @returns The decoded string.
 */
function decodeHTML(htmlString) {
  var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DecodingMode.Legacy;
  return htmlDecoder(htmlString, mode);
}

var clanIdCache = {};
var toPlayerId = player => typeof player === "string" ? kolmafia.getPlayerId(player) : player;
var LOG_FAX_PATTERN = /*#__PURE__*/_wrapRegExp(/(\d{2}\/\d{2}\/\d{2}, \d{2}:\d{2}(?:AM|PM): )<a [^>]+>([^<]+)<\/a>(?: faxed in a (.*?))<br>/, {
  monster: 3
});
var WHITELIST_DEGREE_PATTERN = /*#__PURE__*/_wrapRegExp(/(.*?) \(\xB0(\d+)\)/, {
  name: 1,
  degree: 2
});
var Clan = /*#__PURE__*/function () {
  function Clan(id, name) {
    _classCallCheck(this, Clan);
    _defineProperty(this, "id", void 0);
    _defineProperty(this, "name", void 0);
    this.id = id;
    this.name = name;
  }
  return _createClass(Clan, [{
    key: "_check",
    value: function _check() {
      if (this.id !== kolmafia.getClanId()) {
        throw new Error("You are no longer a member of this clan");
      }
    }
    /**
     * Join clan
     *
     * @returns Joined clan
     */
  }, {
    key: "join",
    value: function join() {
      return Clan.join(this.id);
    }
    /**
     * Check that this clan is the player's current clan
     *
     * @returns Whether this is the current clan
     */
  }, {
    key: "check",
    value: function check() {
      return kolmafia.visitUrl("clan_hall.php").includes("<b>".concat(this.name, "</b>"));
    }
    /**
     * Determine the monster that is currently in the current clan's fax machine if any
     *
     * @returns The current fax monster
     */
  }, {
    key: "getCurrentFax",
    value: function getCurrentFax() {
      this._check();
      var logs = kolmafia.visitUrl("clan_log.php");
      var lastFax = logs.match(LOG_FAX_PATTERN);
      if (!lastFax) return null;
      var _lastFax = _slicedToArray(lastFax, 4),
        monsterName = _lastFax[3];
      if (!monsterName) return null;
      return kolmafia.Monster.get(monsterName);
    }
    /**
     * List available ranks (name, degree and id) from the current clan
     *
     * @returns List of ranks
     */
  }, {
    key: "getRanks",
    value: function getRanks() {
      this._check();
      var page = kolmafia.visitUrl("clan_whitelist.php");
      return kolmafia.xpath(page, '//select[@name="level"]//option').map(option => {
        var validHtml = "<select>".concat(option, "</select>");
        var match = kolmafia.xpath(validHtml, "//text()")[0].match(WHITELIST_DEGREE_PATTERN);
        var id = kolmafia.xpath(validHtml, "//@value")[0];
        if (!match || !id) return null;
        var _match = _slicedToArray(match, 3),
          encodedName = _match[1],
          degree = _match[2];
        return {
          name: decodeHTML(encodedName),
          degree: Number.parseInt(degree),
          id: Number.parseInt(id)
        };
      }).filter(notNull);
    }
    /**
     * Add a player to the current clan's whitelist.
     * If the player is already in the whitelist this will change their rank or title.
     *
     * @param player Player id or name
     * @param rankName Rank to give the player. If not provided they will be given the lowest rank
     * @param title Title to give the player. If not provided, will be blank
     * @returns Success
     */
  }, {
    key: "addPlayerToWhitelist",
    value: function addPlayerToWhitelist(player, rankName) {
      var title = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      this._check();
      var playerId = toPlayerId(player);
      var ranks = this.getRanks();
      var rank = rankName ? ranks.find(r => r.name === rankName) : ranks.sort((a, b) => a.degree - b.degree)[0];
      if (!rank) return false;
      var result = kolmafia.visitUrl("clan_whitelist.php?action=add&pwd&addwho=".concat(playerId, "&level=").concat(rank.id, "&title=").concat(title));
      return result.includes("added to whitelist.") || result.includes("That player is already on the whitelist");
    }
    /**
     * Remove a player from the current clan's whitelist
     *
     * @param player Player id or name
     * @returns Success
     */
  }, {
    key: "removePlayerFromWhitelist",
    value: function removePlayerFromWhitelist(player) {
      this._check();
      var playerId = toPlayerId(player);
      var result = kolmafia.visitUrl("clan_whitelist.php?action=updatewl&pwd&who=".concat(playerId, "&remove=Remove"));
      return result.includes("Whitelist updated.");
    }
    /**
     * Return the amount of meat in the current clan's coffer
     *
     * @returns Amount of meat
     */
  }, {
    key: "getMeatInCoffer",
    value: function getMeatInCoffer() {
      this._check();
      var page = kolmafia.visitUrl("clan_stash.php");
      var _ref = page.match(/Your <b>Clan Coffer<\/b> contains ([\d,]+) Meat./) || ["0", "0"],
        _ref2 = _slicedToArray(_ref, 2),
        meat = _ref2[1];
      return parseNumber(meat);
    }
    /**
     * Add the given amount of meat to the current clan's coffer.
     *
     * @param amount Amount of meat to put in coffer
     * @returns Success
     */
  }, {
    key: "putMeatInCoffer",
    value: function putMeatInCoffer(amount) {
      this._check();
      var result = kolmafia.visitUrl("clan_stash.php?pwd&action=contribute&howmuch=".concat(amount));
      return result.includes("You contributed");
    }
  }, {
    key: "take",
    value: function take(items) {
      this._check();
      var map = arrayToCountedMap(items);
      map.forEach((quantity, item) => {
        var needed = Math.max(0, quantity - kolmafia.availableAmount(item));
        if (needed === 0) {
          return map.set(item, 0);
        }
        var foldGroup = getFoldGroup(item);
        var _iterator = _createForOfIteratorHelper(foldGroup),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var foldable = _step.value;
            var quantityToFold = Math.min(needed, kolmafia.availableAmount(foldable));
            for (var _i2 = 0; _i2 < quantityToFold; _i2++) {
              kolmafia.cliExecute("fold ".concat(item.name));
              needed--;
            }
            return map.set(item, needed);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        kolmafia.refreshStash();
        for (var _i = 0, _arr = [item].concat(_toConsumableArray(foldGroup)); _i < _arr.length; _i++) {
          var matchingItem = _arr[_i];
          var quantityToTake = Math.min(needed, kolmafia.stashAmount(matchingItem));
          if (quantityToTake === 0) continue;
          // If we can't take from the stash, there's no sense in iterating through the whole fold group
          if (!kolmafia.takeStash(quantityToTake, matchingItem)) return;
          if (matchingItem === item) {
            needed -= quantityToTake;
          } else {
            for (var i = 0; i < quantityToTake; i++) {
              kolmafia.cliExecute("fold ".concat(matchingItem.name));
              needed--;
            }
          }
        }
      });
      return Array.isArray(items) ? countedMapToArray(map) : map;
    }
  }, {
    key: "put",
    value: function put(items) {
      this._check();
      var map = arrayToCountedMap(items);
      if (!this.check()) throw new Error("Wanted to return ".concat(countedMapToString(map), " to ").concat(this.name, " but KoLmafia's clan data is out of sync"));
      map.forEach((quantity, item) => {
        kolmafia.retrieveItem(quantity, item);
        var returned = Math.min(quantity, kolmafia.availableAmount(item));
        kolmafia.putStash(returned, item);
        map.set(item, quantity - returned);
      });
      return Array.isArray(items) ? countedMapToArray(map) : map;
    }
  }, {
    key: "withStash",
    value: function withStash(items, callback) {
      this._check();
      var map = arrayToCountedMap(items);
      return Clan._withStash(() => this.take(map), borrowed => this.put(borrowed), callback);
    }
  }], [{
    key: "_join",
    value: function _join(id) {
      var result = kolmafia.visitUrl("showclan.php?recruiter=1&whichclan=".concat(id, "&pwd&whichclan=").concat(id, "&action=joinclan&apply=Apply+to+this+Clan&confirm=on"));
      if (!result.includes("clanhalltop.gif")) {
        throw new Error("Could not join clan");
      }
      return Clan.get();
    }
  }, {
    key: "_withStash",
    value: function _withStash(borrowFn,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    returnFn,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    callback) {
      var borrowed = borrowFn();
      var map = arrayToCountedMap(borrowed);
      try {
        return callback(borrowed);
      } finally {
        if (map.size > 0) {
          var returned = arrayToCountedMap(returnFn(borrowed));
          map.forEach((quantity, item) => {
            var remaining = quantity - (returned.get(item) || 0);
            if (remaining > 0) {
              map.set(item, remaining);
            } else {
              map.delete(item);
            }
          });
          if (map.size > 0) {
            logger.error("Failed to return <b>".concat(countedMapToString(map), "</b> to <b>").concat(this.name, "</b> stash"));
          }
        }
      }
    }
    /**
     * Join a clan
     *
     * @param clanIdOrName Clan id or name
     * @returns Instance of joined clan
     */
  }, {
    key: "join",
    value: function join(clanIdOrName) {
      var clanId;
      if (typeof clanIdOrName === "string") {
        var clanName = clanIdOrName.toLowerCase();
        if (clanName === kolmafia.getClanName().toLowerCase()) {
          return Clan.get();
        }
        if (!(clanName in clanIdCache)) {
          var clan = Clan.getWhitelisted().find(c => c.name.toLowerCase() === clanName);
          if (!clan) {
            throw new Error("Player is not whitelisted to clan");
          }
          clanIdCache[clanName] = clan.id;
        }
        clanId = clanIdCache[clanName];
      } else {
        clanId = clanIdOrName;
        if (clanId === kolmafia.getClanId()) {
          return Clan.get();
        }
      }
      return Clan._join(clanId);
    }
    /**
     * Execute callback as a member of a clan and then restore prior membership
     *
     * @param clanIdOrName Clan id or name
     * @param callback Actions to carry out while member of specified can
     * @returns Return value from callback
     */
  }, {
    key: "with",
    value: function _with(clanIdOrName, callback) {
      var startingClan = Clan.get();
      var clan = Clan.join(clanIdOrName);
      try {
        return callback(clan);
      } finally {
        startingClan.join();
      }
    }
  }, {
    key: "withStash",
    value: function withStash(clanIdOrName, items,
    // eslint-disable-line @typescript-eslint/no-explicit-any
    callback) {
      return Clan._withStash(() => Clan.with(clanIdOrName, clan => clan.take(items)), borrowed => Clan.with(clanIdOrName, clan => clan.put(borrowed)), callback);
    }
    /**
     * Get the player's current clan
     *
     * @returns Player's clan
     */
  }, {
    key: "get",
    value: function get() {
      return new Clan(kolmafia.getClanId(), kolmafia.getClanName());
    }
    /**
     * Get list of clans to which the player is whitelisted
     *
     * @returns List of clans
     */
  }, {
    key: "getWhitelisted",
    value: function getWhitelisted() {
      var page = kolmafia.visitUrl("clan_signup.php");
      return kolmafia.xpath(page, '//select[@name="whichclan"]//option').map(option => {
        var validHtml = "<select>".concat(option, "</select>");
        var id = Number.parseInt(kolmafia.xpath(validHtml, "//@value")[0]);
        var name = decodeHTML(kolmafia.xpath(validHtml, "//text()")[0]);
        return new Clan(id, name);
      });
    }
  }]);
}();

var _templateObject$i, _templateObject2$h, _templateObject3$g, _templateObject4$g, _templateObject5$g, _templateObject6$g, _CommunityService, _templateObject7$g, _templateObject8$g, _templateObject9$g, _templateObject0$g, _templateObject1$g, _templateObject10$g, _templateObject11$g, _templateObject12$f, _templateObject13$e, _templateObject14$e, _templateObject15$e, _templateObject16$e, _templateObject17$e, _templateObject18$d, _templateObject19$d, _templateObject20$d, _templateObject21$d, _templateObject22$d, _templateObject23$d, _templateObject24$d, _templateObject25$d, _templateObject26$d, _templateObject27$d, _templateObject28$d, _templateObject29$d;
var thralls = new Map([[$stat(_templateObject$i || (_templateObject$i = _taggedTemplateLiteral(["muscle"]))), $thrall(_templateObject2$h || (_templateObject2$h = _taggedTemplateLiteral(["Elbow Macaroni"])))], [$stat(_templateObject3$g || (_templateObject3$g = _taggedTemplateLiteral(["moxie"]))), $thrall(_templateObject4$g || (_templateObject4$g = _taggedTemplateLiteral(["Penne Dreadful"])))]]);
var statCommunityServicePredictor = stat => {
  return () => 60 - Math.floor(1 / 30 * (kolmafia.myBuffedstat(stat) - kolmafia.myBasestat(thralls.get(stat) === kolmafia.myThrall() && !have$c($effect(_templateObject5$g || (_templateObject5$g = _taggedTemplateLiteral(["Expert Oiliness"])))) ? $stat(_templateObject6$g || (_templateObject6$g = _taggedTemplateLiteral(["mysticality"]))) : stat)));
};
var visitCouncil = () => kolmafia.visitUrl("council.php");
// Use the object arg for situations like Raw Combat Rate
function hypotheticalModifier(modifier) {
  for (var _len = arguments.length, effects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    effects[_key - 1] = arguments[_key];
  }
  var newEffects = effects.filter(e => !have$c(e));
  return kolmafia.numericModifier(modifier) + sum(newEffects, effect => kolmafia.numericModifier(effect, modifier));
}
var CommunityService = /*#__PURE__*/function () {
  /**
   * Class to store properties of various CS tests.
   *
   * @param id The id the game HTML uses to identify the test; this is used primarily in runChoice.
   * @param stat The principle stat the test measures, often used as more easily memorable shorthand for the specific tests
   * @param property The name of the test as a string, often used as part of the string property "csServicesPerformed".
   * @param predictor A function that returns an estimate for the number of turns that the test will take given your character's current state.
   * @param maximizeRequirements A Requirement object, if applicable, that aligns with the things needed to maximize for this particular test.
   */
  function CommunityService(id, stat, property, predictor, maximizeRequirements) {
    _classCallCheck(this, CommunityService);
    _defineProperty(this, "choice", void 0);
    _defineProperty(this, "stat", void 0);
    _defineProperty(this, "property", void 0);
    _defineProperty(this, "predictor", void 0);
    _defineProperty(this, "maximizeRequirements", void 0);
    _defineProperty(this, "timer", null);
    this.choice = id;
    this.stat = stat;
    this.property = property;
    this.predictor = predictor;
    this.maximizeRequirements = maximizeRequirements;
  }
  /**
   * @returns The id number of the test, used primarily in runChoice.
   */
  return _createClass(CommunityService, [{
    key: "id",
    get: function get() {
      return this.choice;
    }
    /**
     * @returns The primary stat the test measures, used primarily as memorable shorthand in place of test names.
     */
  }, {
    key: "statName",
    get: function get() {
      return this.stat;
    }
    /**
     * @returns The name of the test, used primarily as part of the string property "csServicesPerformed"
     */
  }, {
    key: "name",
    get: function get() {
      return this.property;
    }
    /**
     *  @returns The predicted number of turns this test will take given your character's current state.
     */
  }, {
    key: "prediction",
    get: function get() {
      return this.predictor();
    }
    /**
     * @returns A Requirement object, if applicable, that aligns with the things needed to maximize for this particular test.
     */
  }, {
    key: "requirement",
    get: function get() {
      return this.maximizeRequirements;
    }
    /**
     * Start the time & turn counter for the Test in question.
     */
  }, {
    key: "startTimer",
    value: function startTimer() {
      this.timer ?? (this.timer = {
        time: Date.now(),
        turns: kolmafia.myTurncount()
      });
    }
  }, {
    key: "isDone",
    value:
    /**
     * Checks the "csServicesPerformed" property to see whether mafia currently believes this test is complete.
     *
     * @returns Whether mafia currently believes this test is complete.
     */
    function isDone() {
      return get$2("csServicesPerformed").includes(this.property);
    }
    /**
     * Maximizes based on the Requirement associated with this particular test.
     */
  }, {
    key: "maximize",
    value: function maximize() {
      if (this.maximizeRequirements) this.maximizeRequirements.maximize();
    }
    /**
     * Attempts to turn in the test to the Council of Loathing.
     *
     * @returns Whether mafia believes the test is complete at the end of this function.
     */
  }, {
    key: "do",
    value: function _do() {
      if (get$2("csServicesPerformed").trim().length === 0) visitCouncil();
      visitCouncil();
      var councilText = kolmafia.runChoice(this.choice);
      return this._verifyIsDone(councilText);
    }
    /**
     * Wrapper function that prepares for a test and then completes it, adding time and turn details to the log.
     *
     * @param prepare A function that does all necessary preparations for this CS test, including choosing your outfit. Optionally returns the number of turns you expect to spend preparing for the test.
     * @param maxTurns We will run the test iff the predicted/actual turns is less than or equal to this parameter.
     * @returns "completed", "failed", or "already completed".
     */
  }, {
    key: "run",
    value: function run(prepare) {
      var maxTurns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
      if (this.isDone()) return "already completed";
      var _ref = this.timer ?? {
          time: Date.now(),
          turns: kolmafia.myTurncount()
        },
        time = _ref.time,
        turns = _ref.turns;
      var additionalTurns;
      try {
        var result = prepare();
        additionalTurns = typeof result === "number" ? result : 0;
      } catch (e) {
        kolmafia.print("".concat(e), "red");
        return "failed";
      }
      var prediction = this.predictor();
      var council = visitCouncil();
      var turnCost = this._actualCost(council);
      if (!turnCost) return "already completed";
      if (turnCost > Math.min(maxTurns, kolmafia.myAdventures())) {
        return "failed";
      }
      if (!this.do()) return "failed";
      CommunityService.log[this.property] = {
        predictedTurns: prediction + additionalTurns,
        turnCost: kolmafia.myTurncount() - turns,
        seconds: (Date.now() - time) / 1000,
        type: "test"
      };
      return "completed";
    }
  }, {
    key: "_verifyIsDone",
    value: function _verifyIsDone(councilText) {
      return !councilText.includes("<input type=hidden name=option value=".concat(this.choice, ">"));
    }
    /**
     * Checks council.php to verify that a test is complete; more reliable than isDone, but requires an additional pagehit.
     *
     * @returns Whether council.php suggests that the test is complete.
     */
  }, {
    key: "verifyIsDone",
    value: function verifyIsDone() {
      return this._verifyIsDone(visitCouncil());
    }
  }, {
    key: "_actualCost",
    value: function _actualCost(councilText) {
      var match = councilText.match("<input type=hidden name=option value=".concat(this.id, ">.*?Perform Service \\((\\d+) Adventures\\)"));
      return match ? parseInt(match[1]) : 0;
    }
    /**
     * Checks council.php for the number of turns this test will take; more reliable than prediction, but requires an additional pagehit.
     *
     * @returns The number of turns to complete this test according to council.php.
     */
  }, {
    key: "actualCost",
    value: function actualCost() {
      return this._actualCost(visitCouncil());
    }
    /**
     * @param effects A spread array of Effects to consider
     * @returns The number of turns we expect to save if we start using those effects
     */
  }, {
    key: "turnsSavedBy",
    value: function turnsSavedBy() {
      var currentTurns = clamp(this.prediction, 1, 60);
      var newTurns = clamp(this.predictor.apply(this, arguments), 1, 60);
      return currentTurns - newTurns;
    }
    /**
     * A log of the predicted turns, actual turns, and duration of each CS test performed.
     */
  }], [{
    key: "startTimer",
    value:
    /**
     * Start the time & turn counter for the given task
     *
     * @param name The name of the task to start the counter of
     */
    function startTimer(name) {
      if (!this.taskTimers.has(name)) {
        this.taskTimers.set(name, {
          time: Date.now(),
          turns: kolmafia.myTurncount()
        });
      }
    }
  }, {
    key: "logTask",
    value: function logTask(name, action) {
      var _ref2 = this.taskTimers.get(name) ?? {
          time: Date.now(),
          turns: kolmafia.myTurncount()
        },
        time = _ref2.time,
        turns = _ref2.turns;
      var estimatedTurns = action() ?? 0;
      CommunityService.log[name] = {
        type: "task",
        turnCost: kolmafia.myTurncount() - turns,
        predictedTurns: estimatedTurns,
        seconds: (Date.now() - time) / 1000
      };
    }
  }, {
    key: "printLog",
    value:
    /**
     * Prints turncount and time details of the test in question.
     *
     * @param colour The colour (or color) you'd like the log to be printed in.
     */
    function printLog() {
      var colour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "blue";
      var logEntries = Object.entries(CommunityService.log);
      for (var _i = 0, _logEntries = logEntries; _i < _logEntries.length; _i++) {
        var _logEntries$_i = _slicedToArray(_logEntries[_i], 2),
          testName = _logEntries$_i[0],
          testEntry = _logEntries$_i[1];
        var type = testEntry.type,
          predictedTurns = testEntry.predictedTurns,
          turnCost = testEntry.turnCost,
          seconds = testEntry.seconds;
        if (type === "test") {
          kolmafia.print("We predicted the ".concat(testName, " test would take ").concat(predictedTurns, " turns, ").concat(predictedTurns === turnCost ? "and" : "but", " it took ").concat(turnCost, " turns."), colour);
          kolmafia.print("".concat(testName, " took ").concat(seconds.toFixed(1), " seconds."), colour);
        } else {
          if (!(predictedTurns === 0 && turnCost === 0)) {
            kolmafia.print("We predicted the task ".concat(testName, " would take ").concat(predictedTurns, " turns, ").concat(predictedTurns === turnCost ? "and" : "but", " it took ").concat(turnCost, " turns."), colour);
          }
          kolmafia.print("The task ".concat(testName, " took ").concat(seconds.toFixed(1), " seconds."), colour);
        }
      }
      var totalTime = sum(logEntries, _ref3 => {
        var _ref4 = _slicedToArray(_ref3, 2),
          testEntry = _ref4[1];
        return testEntry.seconds;
      });
      kolmafia.print("All together, you have spent ".concat(totalTime.toFixed(1), " seconds during this Community Service run"), colour);
    }
    // Below, we have the tests themselves.
  }]);
}();
_CommunityService = CommunityService;
_defineProperty(CommunityService, "taskTimers", new Map());
_defineProperty(CommunityService, "log", {});
_defineProperty(CommunityService, "HP", new _CommunityService(1, "HP", "Donate Blood", () => 60 - Math.floor((kolmafia.myMaxhp() - kolmafia.myBuffedstat($stat(_templateObject7$g || (_templateObject7$g = _taggedTemplateLiteral(["muscle"])))) - 3) / 30), new Requirement(["HP"], {})));
_defineProperty(CommunityService, "Muscle", new _CommunityService(2, "Muscle", "Feed The Children", statCommunityServicePredictor($stat(_templateObject8$g || (_templateObject8$g = _taggedTemplateLiteral(["Muscle"])))), new Requirement(["Muscle"], {})));
_defineProperty(CommunityService, "Mysticality", new _CommunityService(3, "Mysticality", "Build Playground Mazes", statCommunityServicePredictor($stat(_templateObject9$g || (_templateObject9$g = _taggedTemplateLiteral(["Mysticality"])))), new Requirement(["Mysticality"], {})));
_defineProperty(CommunityService, "Moxie", new _CommunityService(4, "Moxie", "Feed Conspirators", statCommunityServicePredictor($stat(_templateObject0$g || (_templateObject0$g = _taggedTemplateLiteral(["Moxie"])))), new Requirement(["Moxie"], {})));
_defineProperty(CommunityService, "FamiliarWeight", new _CommunityService(5, "Familiar Weight", "Breed More Collies", function () {
  for (var _len2 = arguments.length, effects = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    effects[_key2] = arguments[_key2];
  }
  return 60 - Math.floor((totalFamiliarWeight(kolmafia.myFamiliar(), false) + hypotheticalModifier.apply(void 0, ["Familiar Weight"].concat(effects))) / 5);
}, new Requirement(["Familiar Weight"], {})));
_defineProperty(CommunityService, "WeaponDamage", new _CommunityService(6, "Weapon Damage", "Reduce Gazelle Population", function () {
  var weaponPower = kolmafia.getPower(kolmafia.equippedItem($slot(_templateObject1$g || (_templateObject1$g = _taggedTemplateLiteral(["weapon"])))));
  var offhandPower = kolmafia.toSlot(kolmafia.equippedItem($slot(_templateObject10$g || (_templateObject10$g = _taggedTemplateLiteral(["off-hand"]))))) === $slot(_templateObject11$g || (_templateObject11$g = _taggedTemplateLiteral(["weapon"]))) ? kolmafia.getPower(kolmafia.equippedItem($slot(_templateObject12$f || (_templateObject12$f = _taggedTemplateLiteral(["off-hand"]))))) : 0;
  var familiarPower = kolmafia.toSlot(kolmafia.equippedItem($slot(_templateObject13$e || (_templateObject13$e = _taggedTemplateLiteral(["familiar"]))))) === $slot(_templateObject14$e || (_templateObject14$e = _taggedTemplateLiteral(["weapon"]))) ? kolmafia.getPower(kolmafia.equippedItem($slot(_templateObject15$e || (_templateObject15$e = _taggedTemplateLiteral(["familiar"]))))) : 0;
  // mafia does not currently count swagger
  var multiplier = have$c($effect(_templateObject16$e || (_templateObject16$e = _taggedTemplateLiteral(["Bow-Legged Swagger"])))) ? 2 : 1;
  // We add 0.001 because the floor function sometimes introduces weird rounding errors
  for (var _len3 = arguments.length, effects = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    effects[_key3] = arguments[_key3];
  }
  return 60 - Math.floor(multiplier * (hypotheticalModifier.apply(void 0, ["Weapon Damage"].concat(effects)) - 0.15 * (weaponPower + offhandPower + familiarPower)) / 50 + 0.001) - Math.floor(multiplier * hypotheticalModifier.apply(void 0, ["Weapon Damage Percent"].concat(effects)) / 50 + 0.001);
}, new Requirement(["Weapon Damage", "Weapon Damage Percent"], {})));
_defineProperty(CommunityService, "SpellDamage", new _CommunityService(7, "Spell Damage", "Make Sausage", function () {
  var dragonfishDamage = kolmafia.myFamiliar() === $familiar(_templateObject17$e || (_templateObject17$e = _taggedTemplateLiteral(["Magic Dragonfish"]))) ? kolmafia.numericModifier($familiar(_templateObject18$d || (_templateObject18$d = _taggedTemplateLiteral(["Magic Dragonfish"]))), "Spell Damage Percent", totalFamiliarWeight(), $item.none) : 0;
  // We add 0.001 because the floor function sometimes introduces weird rounding errors
  for (var _len4 = arguments.length, effects = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    effects[_key4] = arguments[_key4];
  }
  return 60 - Math.floor(hypotheticalModifier.apply(void 0, ["Spell Damage"].concat(effects)) / 50 + 0.001) - Math.floor((hypotheticalModifier.apply(void 0, ["Spell Damage Percent"].concat(effects)) - dragonfishDamage) / 50 + 0.001);
}, new Requirement(["Spell Damage", "Spell Damage Percent"], {})));
_defineProperty(CommunityService, "Noncombat", new _CommunityService(8, "Non-Combat", "Be a Living Statue", function () {
  for (var _len5 = arguments.length, effects = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    effects[_key5] = arguments[_key5];
  }
  var noncombatRate = -1 * hypotheticalModifier.apply(void 0, ["Raw Combat Rate"].concat(effects));
  var currentFamiliarModifier = -1 * kolmafia.numericModifier(kolmafia.myFamiliar(), "Raw Combat Rate", totalFamiliarWeight(), kolmafia.equippedItem($slot(_templateObject19$d || (_templateObject19$d = _taggedTemplateLiteral(["familiar"])))));
  var newFamiliarModifier = -1 * kolmafia.numericModifier(kolmafia.myFamiliar(), "Raw Combat Rate", totalFamiliarWeight(kolmafia.myFamiliar(), false) + hypotheticalModifier.apply(void 0, ["Familiar Weight"].concat(effects)), kolmafia.equippedItem($slot(_templateObject20$d || (_templateObject20$d = _taggedTemplateLiteral(["familiar"])))));
  var adjustedRate = noncombatRate - currentFamiliarModifier + newFamiliarModifier;
  return 60 - 3 * Math.floor(adjustedRate / 5);
}, new Requirement(["-Raw Combat Rate"], {})));
_defineProperty(CommunityService, "BoozeDrop", new _CommunityService(9, "Item Drop", "Make Margaritas", function () {
  var mummingCostume = currentCostumes().get(kolmafia.myFamiliar());
  var mummingBuff = mummingCostume && mummingCostume[0] === "Item Drop" ? mummingCostume[1] : 0;
  var familiarItemDrop = kolmafia.numericModifier(kolmafia.myFamiliar(), "Item Drop", totalFamiliarWeight(), kolmafia.equippedItem($slot(_templateObject21$d || (_templateObject21$d = _taggedTemplateLiteral(["familiar"]))))) + mummingBuff - kolmafia.numericModifier(kolmafia.equippedItem($slot(_templateObject22$d || (_templateObject22$d = _taggedTemplateLiteral(["familiar"])))), "Item Drop");
  var familiarBoozeDrop = kolmafia.numericModifier(kolmafia.myFamiliar(), "Booze Drop", totalFamiliarWeight(), kolmafia.equippedItem($slot(_templateObject23$d || (_templateObject23$d = _taggedTemplateLiteral(["familiar"]))))) - kolmafia.numericModifier(kolmafia.equippedItem($slot(_templateObject24$d || (_templateObject24$d = _taggedTemplateLiteral(["familiar"])))), "Booze Drop");
  // Champagne doubling does NOT count for CS, so we undouble
  var multiplier = kolmafia.haveEquipped($item(_templateObject25$d || (_templateObject25$d = _taggedTemplateLiteral(["broken champagne bottle"])))) && get$2("garbageChampagneCharge") > 0 ? 0.5 : 1;
  // We add 0.001 because the floor function sometimes introduces weird rounding errors
  for (var _len6 = arguments.length, effects = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    effects[_key6] = arguments[_key6];
  }
  return 60 - Math.floor(multiplier * (hypotheticalModifier.apply(void 0, ["Item Drop"].concat(effects)) - familiarItemDrop - kolmafia.numericModifier(kolmafia.myThrall(), "Item Drop")) / 30 + 0.001) - Math.floor((hypotheticalModifier.apply(void 0, ["Booze Drop"].concat(effects)) - familiarBoozeDrop) / 15 + 0.001);
}, new Requirement(["Item Drop", "2 Booze Drop"], {
  preventEquip: $items(_templateObject26$d || (_templateObject26$d = _taggedTemplateLiteral(["broken champagne bottle"])))
})));
_defineProperty(CommunityService, "HotRes", new _CommunityService(10, "Hot Resistance", "Clean Steam Tunnels", function () {
  var currentFamiliarModifier = kolmafia.numericModifier(kolmafia.myFamiliar(), "Hot Resistance", totalFamiliarWeight(), kolmafia.equippedItem($slot(_templateObject27$d || (_templateObject27$d = _taggedTemplateLiteral(["familiar"])))));
  for (var _len7 = arguments.length, effects = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    effects[_key7] = arguments[_key7];
  }
  var newFamiliarModifier = kolmafia.numericModifier(kolmafia.myFamiliar(), "Hot Resistance", totalFamiliarWeight(kolmafia.myFamiliar(), false) + hypotheticalModifier.apply(void 0, ["Familiar Weight"].concat(effects)), kolmafia.equippedItem($slot(_templateObject28$d || (_templateObject28$d = _taggedTemplateLiteral(["familiar"])))));
  return 60 - (hypotheticalModifier.apply(void 0, ["Hot Resistance"].concat(effects)) - currentFamiliarModifier + newFamiliarModifier);
}, new Requirement(["Hot Resistance"], {})));
_defineProperty(CommunityService, "CoilWire", new _CommunityService(11, "Coil Wire", "Coil Wire", () => 60, new Requirement([], {})));
_defineProperty(CommunityService, "donate", () => {
  visitCouncil();
  kolmafia.visitUrl("choice.php?whichchoice=1089&option=30");
});
_defineProperty(CommunityService, "path", $path(_templateObject29$d || (_templateObject29$d = _taggedTemplateLiteral(["Community Service"]))));

/**
 * Represents an exception thrown when the current KoLmafia version does not
 * match an expected condition.
 */
var KolmafiaVersionError = /*#__PURE__*/function (_Error) {
  function KolmafiaVersionError(message) {
    var _this;
    _classCallCheck(this, KolmafiaVersionError);
    _this = _callSuper(this, KolmafiaVersionError, [message]);
    // Explicitly set the prototype, so that 'instanceof' still works in Node.js
    // even when the class is transpiled down to ES5
    // See: https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    // Note that this code isn't needed for Rhino.
    Object.setPrototypeOf(_this, KolmafiaVersionError.prototype);
    return _this;
  }
  _inherits(KolmafiaVersionError, _Error);
  return _createClass(KolmafiaVersionError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
// Manually set class name, so that the stack trace shows proper name in Rhino
KolmafiaVersionError.prototype.name = "KolmafiaVersionError";
/**
 * Returns the currently executing script name, suitable for embedding in an
 * error message.
 *
 * @returns Path of the main script wrapped in single-quotes, or `"This script"`
 *    if the path cannot be determined
 */
function getScriptName() {
  var _require$main;
  // In Rhino, the current script name is available in require.main.id
  var scriptName = (_require$main = require.main) === null || _require$main === void 0 ? void 0 : _require$main.id;
  return scriptName ? "'".concat(scriptName, "'") : "This script";
}
/**
 * If KoLmafia's revision number is less than `revision`, throws an exception.
 * Otherwise, does nothing.
 *
 * This behaves like the `since rXXX;` statement in ASH.
 *
 * @param revision Revision number
 * @throws {KolmafiaVersionError}
 *    If KoLmafia's revision number is less than `revision`.
 * @throws {TypeError} If `revision` is not an integer
 * @example
 * ```ts
 * // Throws if KoLmafia revision is less than r20500
 * sinceKolmafiaRevision(20500);
 * ```
 */
function sinceKolmafiaRevision(revision) {
  if (!Number.isInteger(revision)) {
    throw new TypeError("Invalid revision number ".concat(revision, " (must be an integer)"));
  }
  // Based on net.sourceforge.kolmafia.textui.Parser.sinceException()
  var currentRevision = kolmafia.getRevision();
  if (currentRevision > 0 && currentRevision < revision) {
    throw new KolmafiaVersionError("".concat(getScriptName(), " requires revision r").concat(revision, " of kolmafia or higher (current: ").concat(kolmafia.getRevision(), "). Up-to-date builds can be found at https://ci.kolmafia.us/."));
  }
}

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
      var result = new Macro$1();
      // If there is macro precursor, do it now
      if (this.starting_macro) {
        result.step.apply(result, _toConsumableArray(this.starting_macro.map(macro => undelay(macro, ctx))));
      }
      // Perform any monster-specific macros (these may or may not end the fight)
      var monster_macros = new CompressedMacro();
      this.macros.forEach((value, key) => {
        var _Macro;
        monster_macros.add(key, (_Macro = new Macro$1()).step.apply(_Macro, _toConsumableArray(value.map(macro => undelay(macro, ctx)))));
      });
      result.step(monster_macros.compile());
      // Perform the non-monster specific macro
      if (this.default_macro) result.step.apply(result, _toConsumableArray(this.default_macro.map(macro => undelay(macro, ctx))));
      // Perform any monster-specific actions (these should end the fight)
      var monster_actions = new CompressedMacro();
      this.actions.forEach((action, key) => {
        var _a, _b;
        var macro = (_a = resources.getMacro(action, ctx)) !== null && _a !== void 0 ? _a : (_b = defaults === null || defaults === void 0 ? void 0 : defaults[action]) === null || _b === void 0 ? void 0 : _b.call(defaults, key);
        if (macro) monster_actions.add(key, new Macro$1().step(macro));
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
      var result = new Macro$1();
      // Perform any monster-specific autoattacks (these may or may not end the fight)
      var monster_macros = new CompressedMacro();
      this.autoattacks.forEach((value, key) => {
        var _Macro2;
        monster_macros.add(key, (_Macro2 = new Macro$1()).step.apply(_Macro2, _toConsumableArray(value.map(macro => undelay(macro, ctx)))));
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
      var result = new Macro$1();
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
      if (resource.do instanceof kolmafia.Item) return new Macro$1().item(resource.do);
      if (resource.do instanceof kolmafia.Skill) return new Macro$1().skill(resource.do);
      return undelay(resource.do, ctx);
    }
  }]);
}();

var _templateObject$h, _templateObject2$g, _templateObject3$f, _templateObject4$f, _templateObject5$f, _templateObject6$f, _templateObject7$f, _templateObject8$f, _templateObject9$f, _templateObject0$f, _templateObject1$f, _templateObject10$f, _templateObject11$f, _templateObject12$e, _templateObject13$d, _templateObject14$d, _templateObject15$d, _templateObject16$d, _templateObject17$d, _templateObject18$c, _templateObject19$c, _templateObject20$c, _templateObject21$c, _templateObject22$c, _templateObject23$c, _templateObject24$c, _templateObject25$c, _templateObject26$c, _templateObject27$c, _templateObject28$c, _templateObject29$c, _templateObject30$c, _templateObject31$c, _templateObject32$c, _templateObject33$b, _templateObject34$b, _templateObject35$b, _templateObject36$b, _templateObject37$a, _templateObject38$9, _templateObject39$9, _templateObject40$9, _templateObject41$9, _templateObject42$9, _templateObject43$9, _templateObject44$9, _templateObject45$9, _templateObject46$9, _templateObject47$9, _templateObject48$9, _templateObject49$8, _templateObject50$7, _templateObject51$7, _templateObject52$6, _templateObject53$5, _templateObject54$5, _templateObject55$5, _templateObject56$5, _templateObject57$5, _templateObject58$5, _templateObject59$4, _templateObject60$4, _templateObject61$4, _templateObject62$4, _templateObject63$3, _templateObject64$3, _templateObject65$3, _templateObject66$3, _templateObject67$3, _templateObject68$3, _templateObject69$3, _templateObject70$3, _templateObject71$3, _templateObject72$2, _templateObject73$2, _templateObject74$1, _templateObject75$1, _templateObject76$1, _templateObject77$1, _templateObject78$1, _templateObject79$1, _templateObject80$1;
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
      if (!have$c(item, this.equippedAmount(item) + 1)) return false;
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
      if ($slots(_templateObject$h || (_templateObject$h = _taggedTemplateLiteral(["acc1, acc2, acc3"]))).includes(kolmafia.toSlot(item))) return false;
      if (slot !== undefined && slot !== kolmafia.toSlot(item)) return false;
      if (this.equips.has(kolmafia.toSlot(item))) return false;
      switch (kolmafia.toSlot(item)) {
        case $slot(_templateObject2$g || (_templateObject2$g = _taggedTemplateLiteral(["off-hand"]))):
          if (this.equips.has($slot(_templateObject3$f || (_templateObject3$f = _taggedTemplateLiteral(["weapon"])))) && weaponHands(this.equips.get($slot(_templateObject4$f || (_templateObject4$f = _taggedTemplateLiteral(["weapon"]))))) !== 1) {
            return false;
          }
          break;
        case $slot(_templateObject5$f || (_templateObject5$f = _taggedTemplateLiteral(["familiar"]))):
          if (this.familiar !== undefined && !kolmafia.canEquip(this.familiar, item)) return false;
          break;
        case $slot(_templateObject6$f || (_templateObject6$f = _taggedTemplateLiteral(["weapon"]))):
          if (!weaponsCompatible(item, this.equips.get($slot(_templateObject7$f || (_templateObject7$f = _taggedTemplateLiteral(["off-hand"])))))) return false;
          break;
      }
      if (kolmafia.toSlot(item) !== $slot(_templateObject8$f || (_templateObject8$f = _taggedTemplateLiteral(["familiar"]))) && !kolmafia.canEquip(item)) return false;
      this.equips.set(kolmafia.toSlot(item), item);
      return true;
    }
  }, {
    key: "equipAccessory",
    value: function equipAccessory(item, slot) {
      if (![undefined].concat(_toConsumableArray($slots(_templateObject9$f || (_templateObject9$f = _taggedTemplateLiteral(["acc1, acc2, acc3"]))))).includes(slot)) return false;
      if (kolmafia.toSlot(item) !== $slot(_templateObject0$f || (_templateObject0$f = _taggedTemplateLiteral(["acc1"])))) return false;
      if (!kolmafia.canEquip(item)) return false;
      if (slot === undefined) {
        // We don't care which of the accessory slots we equip in
        var empty = $slots(_templateObject1$f || (_templateObject1$f = _taggedTemplateLiteral(["acc1, acc2, acc3"]))).find(s => !this.equips.has(s));
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
      if (![undefined, $slot(_templateObject10$f || (_templateObject10$f = _taggedTemplateLiteral(["off-hand"])))].includes(slot)) return false;
      if (kolmafia.toSlot(item) !== $slot(_templateObject11$f || (_templateObject11$f = _taggedTemplateLiteral(["weapon"])))) return false;
      if (this.equips.has($slot(_templateObject12$e || (_templateObject12$e = _taggedTemplateLiteral(["weapon"])))) && weaponHands(this.equips.get($slot(_templateObject13$d || (_templateObject13$d = _taggedTemplateLiteral(["weapon"]))))) !== 1) {
        return false;
      }
      if (this.equips.has($slot(_templateObject14$d || (_templateObject14$d = _taggedTemplateLiteral(["off-hand"]))))) return false;
      if (!have$c($skill(_templateObject15$d || (_templateObject15$d = _taggedTemplateLiteral(["Double-Fisted Skull Smashing"]))))) return false;
      if (weaponHands(item) !== 1) return false;
      if (!kolmafia.canEquip(item)) return false;
      if (!weaponsCompatible(this.equips.get($slot(_templateObject16$d || (_templateObject16$d = _taggedTemplateLiteral(["weapon"])))), item)) return false;
      this.equips.set($slot(_templateObject17$d || (_templateObject17$d = _taggedTemplateLiteral(["off-hand"]))), item);
      return true;
    }
  }, {
    key: "getHoldingFamiliar",
    value: function getHoldingFamiliar(item) {
      switch (kolmafia.toSlot(item)) {
        case $slot(_templateObject18$c || (_templateObject18$c = _taggedTemplateLiteral(["weapon"]))):
          return $familiar(_templateObject19$c || (_templateObject19$c = _taggedTemplateLiteral(["Disembodied Hand"])));
        case $slot(_templateObject20$c || (_templateObject20$c = _taggedTemplateLiteral(["off-hand"]))):
          return $familiar(_templateObject21$c || (_templateObject21$c = _taggedTemplateLiteral(["Left-Hand Man"])));
        case $slot(_templateObject22$c || (_templateObject22$c = _taggedTemplateLiteral(["pants"]))):
          return $familiar(_templateObject23$c || (_templateObject23$c = _taggedTemplateLiteral(["Fancypants Scarecrow"])));
        case $slot(_templateObject24$c || (_templateObject24$c = _taggedTemplateLiteral(["hat"]))):
          return $familiar(_templateObject25$c || (_templateObject25$c = _taggedTemplateLiteral(["Mad Hatrack"])));
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
      if (![undefined, $slot(_templateObject26$c || (_templateObject26$c = _taggedTemplateLiteral(["familiar"])))].includes(slot)) return false;
      if (this.equips.has($slot(_templateObject27$c || (_templateObject27$c = _taggedTemplateLiteral(["familiar"]))))) return false;
      if (kolmafia.booleanModifier(item, "Single Equip")) return false;
      var familiar = this.getHoldingFamiliar(item);
      // Hats/pants don't get the full effect on the familiar, unlike weapons/off-hands which are basically all fully functional
      if (familiar === undefined || $familiars(_templateObject28$c || (_templateObject28$c = _taggedTemplateLiteral(["Fancypants Scarecrow, Mad Hatrack"]))).includes(familiar) && slot === undefined) {
        return false;
      }
      if (!this.equip(familiar)) return false;
      this.equips.set($slot(_templateObject29$c || (_templateObject29$c = _taggedTemplateLiteral(["familiar"]))), item);
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
        if (!have$c(familiar)) return false;
        if (Array.from(this.riders.values()).includes(familiar)) return false;
      }
      var item = this.equips.get($slot(_templateObject30$c || (_templateObject30$c = _taggedTemplateLiteral(["familiar"]))));
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
        var slot = (_a = new Map([["famequip", $slot(_templateObject31$c || (_templateObject31$c = _taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(_templateObject32$c || (_templateObject32$c = _taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : kolmafia.toSlot(slotName);
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
      var fam = targets.find(f => have$c(f) && this.familiar !== f && !otherRiders.includes(f));
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
      return this.equipRider(target, $slot(_templateObject33$b || (_templateObject33$b = _taggedTemplateLiteral(["buddy-bjorn"]))));
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
      return this.equipRider(target, $slot(_templateObject34$b || (_templateObject34$b = _taggedTemplateLiteral(["crown-of-thrones"]))));
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
      var nonaccessorySlots = $slots(_templateObject35$b || (_templateObject35$b = _taggedTemplateLiteral(["weapon, off-hand, hat, back, shirt, pants, familiar"])));
      var bjorn = this.riders.get($slot(_templateObject36$b || (_templateObject36$b = _taggedTemplateLiteral(["buddy-bjorn"]))));
      if (bjorn && (this.equips.get($slot(_templateObject37$a || (_templateObject37$a = _taggedTemplateLiteral(["back"])))) === $item(_templateObject38$9 || (_templateObject38$9 = _taggedTemplateLiteral(["Buddy Bjorn"]))) || this.getBonus($item(_templateObject39$9 || (_templateObject39$9 = _taggedTemplateLiteral(["Buddy Bjorn"])))))) {
        usedSlots.add($slot(_templateObject40$9 || (_templateObject40$9 = _taggedTemplateLiteral(["buddy-bjorn"]))));
        usedSlots.add($slot(_templateObject41$9 || (_templateObject41$9 = _taggedTemplateLiteral(["crown-of-thrones"]))));
      }
      var crown = this.riders.get($slot(_templateObject42$9 || (_templateObject42$9 = _taggedTemplateLiteral(["crown-of-thrones"]))));
      if (crown && (this.equips.get($slot(_templateObject43$9 || (_templateObject43$9 = _taggedTemplateLiteral(["hat"])))) === $item(_templateObject44$9 || (_templateObject44$9 = _taggedTemplateLiteral(["Crown of Thrones"]))) || this.getBonus($item(_templateObject45$9 || (_templateObject45$9 = _taggedTemplateLiteral(["Crown of Thrones"])))))) {
        usedSlots.add($slot(_templateObject46$9 || (_templateObject46$9 = _taggedTemplateLiteral(["buddy-bjorn"]))));
        usedSlots.add($slot(_templateObject47$9 || (_templateObject47$9 = _taggedTemplateLiteral(["crown-of-thrones"]))));
      }
      // Then, we remove existing equipment only when it would block the new outfit:
      // 1. An existing 2-handed weapon would block offhands
      if (weaponHands(kolmafia.equippedItem($slot(_templateObject48$9 || (_templateObject48$9 = _taggedTemplateLiteral(["weapon"]))))) !== 1 && this.equips.has($slot(_templateObject49$8 || (_templateObject49$8 = _taggedTemplateLiteral(["offhand"])))) && !this.equips.has($slot(_templateObject50$7 || (_templateObject50$7 = _taggedTemplateLiteral(["weapon"]))))) kolmafia.equip($slot(_templateObject51$7 || (_templateObject51$7 = _taggedTemplateLiteral(["weapon"]))), $item.none);
      // 2. An existing dual-fisted ranged weapon would block melee weapons.
      if (!weaponsCompatible(this.equips.get($slot(_templateObject52$6 || (_templateObject52$6 = _taggedTemplateLiteral(["weapon"])))), kolmafia.equippedItem($slot(_templateObject53$5 || (_templateObject53$5 = _taggedTemplateLiteral(["off-hand"])))))) kolmafia.equip($slot(_templateObject54$5 || (_templateObject54$5 = _taggedTemplateLiteral(["off-hand"]))), $item.none);
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
      var accessorySlots = $slots(_templateObject55$5 || (_templateObject55$5 = _taggedTemplateLiteral(["acc1, acc2, acc3"])));
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
      if (bjorn && kolmafia.haveEquipped($item(_templateObject56$5 || (_templateObject56$5 = _taggedTemplateLiteral(["Buddy Bjorn"]))))) {
        if (kolmafia.myEnthronedFamiliar() === bjorn) kolmafia.enthroneFamiliar($familiar.none);
        if (kolmafia.myBjornedFamiliar() !== bjorn) kolmafia.bjornifyFamiliar(bjorn);
      }
      if (crown && kolmafia.haveEquipped($item(_templateObject57$5 || (_templateObject57$5 = _taggedTemplateLiteral(["Crown of Thrones"]))))) {
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
      for (var _i4 = 0, _arr = [[$slot(_templateObject58$5 || (_templateObject58$5 = _taggedTemplateLiteral(["buddy-bjorn"]))), $item(_templateObject59$4 || (_templateObject59$4 = _taggedTemplateLiteral(["Buddy Bjorn"]))), kolmafia.myBjornedFamiliar], [$slot(_templateObject60$4 || (_templateObject60$4 = _taggedTemplateLiteral(["crown-of-thrones"]))), $item(_templateObject61$4 || (_templateObject61$4 = _taggedTemplateLiteral(["Crown of Thrones"]))), kolmafia.myEnthronedFamiliar]]; _i4 < _arr.length; _i4++) {
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
        var entry = this.equips.get((_a = new Map([["famequip", $slot(_templateObject62$4 || (_templateObject62$4 = _taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(_templateObject63$3 || (_templateObject63$3 = _taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : kolmafia.toSlot(slotName));
        if (entry) result[slotName] = entry;
      }
      // Include the riders
      var riders = {};
      var buddyRider = this.riders.get($slot(_templateObject64$3 || (_templateObject64$3 = _taggedTemplateLiteral(["buddy-bjorn"]))));
      if (buddyRider !== undefined) riders["buddy-bjorn"] = buddyRider;
      var throneRider = this.riders.get($slot(_templateObject65$3 || (_templateObject65$3 = _taggedTemplateLiteral(["crown-of-thrones"]))));
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
        var slot = (_a = new Map([["famequip", $slot(_templateObject66$3 || (_templateObject66$3 = _taggedTemplateLiteral(["familiar"])))], ["offhand", $slot(_templateObject67$3 || (_templateObject67$3 = _taggedTemplateLiteral(["off-hand"])))]]).get(slotName)) !== null && _a !== void 0 ? _a : kolmafia.toSlot(slotName);
        var item = kolmafia.equippedItem(slot);
        if (!outfit.equip(item, slot)) {
          throw "Failed to create outfit from current state (expected: ".concat(slot, " ").concat(item, ")");
        }
      }
      if (kolmafia.haveEquipped($item(_templateObject68$3 || (_templateObject68$3 = _taggedTemplateLiteral(["Crown of Thrones"]))))) outfit.riders.set($slot(_templateObject69$3 || (_templateObject69$3 = _taggedTemplateLiteral(["crown-of-thrones"]))), kolmafia.myEnthronedFamiliar());
      if (kolmafia.haveEquipped($item(_templateObject70$3 || (_templateObject70$3 = _taggedTemplateLiteral(["Buddy Bjorn"]))))) outfit.riders.set($slot(_templateObject71$3 || (_templateObject71$3 = _taggedTemplateLiteral(["buddy-bjorn"]))), kolmafia.myBjornedFamiliar());
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
  var val = get$2(property, "");
  return options.find(s => s === val); // .includes has type issues
}
/**
 * Returns true if the provided weapons are compatible for dual-wielding.
 * (Ranged weapons cannot be equipped alongside melee/myst weapons).
 */
function weaponsCompatible(weapon, offhand) {
  if (!weapon || weapon === $item(_templateObject72$2 || (_templateObject72$2 = _taggedTemplateLiteral(["none"])))) return true;
  if (!offhand || offhand === $item(_templateObject73$2 || (_templateObject73$2 = _taggedTemplateLiteral(["none"])))) return true;
  if (kolmafia.toSlot(offhand) !== $slot(_templateObject74$1 || (_templateObject74$1 = _taggedTemplateLiteral(["weapon"])))) return true;
  var weaponStat = kolmafia.weaponType(weapon);
  var offhandStat = kolmafia.weaponType(offhand);
  if (weaponStat === $stat(_templateObject75$1 || (_templateObject75$1 = _taggedTemplateLiteral(["Moxie"]))) && (offhandStat === $stat(_templateObject76$1 || (_templateObject76$1 = _taggedTemplateLiteral(["Mysticality"]))) || offhandStat === $stat(_templateObject77$1 || (_templateObject77$1 = _taggedTemplateLiteral(["Muscle"]))))) return false;
  if (offhandStat === $stat(_templateObject78$1 || (_templateObject78$1 = _taggedTemplateLiteral(["Moxie"]))) && (weaponStat === $stat(_templateObject79$1 || (_templateObject79$1 = _taggedTemplateLiteral(["Mysticality"]))) || weaponStat === $stat(_templateObject80$1 || (_templateObject80$1 = _taggedTemplateLiteral(["Muscle"]))))) return false;
  return true;
}

var _templateObject$g;
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
  logPreferenceChangeFilter: _toConsumableArray(new Set([].concat(_toConsumableArray(get$2("logPreferenceChangeFilter").split(",")), ["libram_savedMacro", "maximizerMRUList", "testudinalTeachings", "_lastCombatStarted"]))).sort().filter(a => a).join(","),
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
var Engine = /*#__PURE__*/function (_ContextualEngine) {
  function Engine() {
    _classCallCheck(this, Engine);
    return _callSuper(this, Engine, arguments);
  }
  _inherits(Engine, _ContextualEngine);
  return _createClass(Engine, [{
    key: "getContext",
    value:
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function getContext(task) {
      return;
    }
  }]);
}(ContextualEngine);
function maxSongs() {
  return have$c($skill(_templateObject$g || (_templateObject$g = _taggedTemplateLiteral(["Mariachi Memory"])))) ? 4 : 3;
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
  var last = get$2("lastEncounter");
  if (zoneSpecificNCs.has(last)) {
    // Handle NCs with a duplicated name
    var zones = (_a = zoneSpecificNCs.get(last)) !== null && _a !== void 0 ? _a : [];
    return zones.includes((_b = get$2("lastAdventure")) !== null && _b !== void 0 ? _b : $location.none);
  } else {
    var environment = environmentSpecificNCs.get(last);
    if (environment === ((_c = get$2("lastAdventure")) === null || _c === void 0 ? void 0 : _c.environment)) return true;
    return wanderingNCs.has(last);
  }
}

/**
 * Extract a list of tasks from the provided quests.
 *
 * Each task name is prepended with the quest name ("Quest Name/Task Name").
 * The quest-local names referred to in task.after are updated appropriately.
 * The task completion condition is updated to include the quest completion.
 *
 * Tasks are returned in-order: all tasks from the first quest, then all tasks
 * from the second quest, etc.
 *
 * @param quests The list of quests. This method does not modify the quest
 *    objects or their tasks.
 * @param implicitAfter If true, each task with task.after = undefined will
 *    have a dependency added on the previous task in the list.
 * @returns A list of tasks from the input quests (with updated properties).
 */
function getTasks(quests) {
  var implicitAfter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var verifyTaskDependencies = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var _a;
  var result = [];
  var _iterator = _createForOfIteratorHelper(quests),
    _step;
  try {
    var _loop = function _loop() {
      var quest = _step.value;
      var questCompleted = quest.completed;
      var questReady = quest.ready;
      var _iterator2 = _createForOfIteratorHelper(quest.tasks),
        _step2;
      try {
        var _loop2 = function _loop2() {
          var task = _step2.value;
          // Include quest name in task names and dependencies (unless dependency quest is given)
          var renamedTask = _objectSpread2({}, task);
          renamedTask.name = "".concat(quest.name, "/").concat(task.name);
          renamedTask.after = (_a = task.after) === null || _a === void 0 ? void 0 : _a.map(after => after.includes("/") ? after : "".concat(quest.name, "/").concat(after));
          // Include previous task as a dependency
          if (implicitAfter && task.after === undefined && result.length > 0) renamedTask.after = [result[result.length - 1].name];
          // Include quest completion in task completion
          if (questCompleted !== undefined) {
            var taskCompleted = task.completed;
            renamedTask.completed = () => questCompleted() || taskCompleted();
          }
          var taskReady = renamedTask.ready;
          if (questReady !== undefined && taskReady !== undefined) {
            renamedTask.ready = () => questReady() && taskReady();
          } else if (questReady !== undefined) {
            renamedTask.ready = () => questReady();
          }
          result.push(renamedTask);
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  if (verifyTaskDependencies) verifyDependencies(result);
  return result;
}
function verifyDependencies(tasks) {
  var _a;
  // Verify the dependency names of all tasks
  var names = new Set();
  var _iterator3 = _createForOfIteratorHelper(tasks),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var task = _step3.value;
      names.add(task.name);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  var _iterator4 = _createForOfIteratorHelper(tasks),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _task = _step4.value;
      var _iterator5 = _createForOfIteratorHelper((_a = _task.after) !== null && _a !== void 0 ? _a : []),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var after = _step5.value;
          if (!names.has(after)) {
            throw "Unknown task dependency ".concat(after, " of ").concat(_task.name);
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return tasks;
}

var _templateObject$f, _templateObject2$f, _templateObject3$e, _templateObject4$e, _templateObject5$e, _templateObject6$e, _templateObject7$e, _templateObject8$e, _templateObject9$e, _templateObject0$e, _templateObject1$e, _templateObject10$e, _templateObject11$e, _templateObject12$d, _templateObject13$c, _templateObject14$c, _templateObject15$c, _templateObject16$c, _templateObject17$c;
var CSStrategy = /*#__PURE__*/function (_CombatStrategy) {
  function CSStrategy() {
    var _this;
    var macro = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => Macro.defaultKill();
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      fallthrough = _ref.fallthrough,
      fightHolidayWanderer = _ref.fightHolidayWanderer;
    _classCallCheck(this, CSStrategy);
    _this = _callSuper(this, CSStrategy);
    _this.macro(fightHolidayWanderer ? macro : Macro.skill($skill(_templateObject$f || (_templateObject$f = _taggedTemplateLiteral(["Feel Hatred"])))), getTodaysHolidayWanderers()).autoattack(fightHolidayWanderer ? macro : Macro.skill($skill(_templateObject2$f || (_templateObject2$f = _taggedTemplateLiteral(["Feel Hatred"])))), getTodaysHolidayWanderers()).autoattack(macro).macro(fallthrough ?? macro);
    return _this;
  }
  _inherits(CSStrategy, _CombatStrategy);
  return _createClass(CSStrategy);
}(CombatStrategy);
var Macro = /*#__PURE__*/function (_StrictMacro) {
  function Macro() {
    _classCallCheck(this, Macro);
    return _callSuper(this, Macro, arguments);
  }
  _inherits(Macro, _StrictMacro);
  return _createClass(Macro, [{
    key: "tryBowl",
    value: function tryBowl() {
      return this.ifNot($item(_templateObject3$e || (_templateObject3$e = _taggedTemplateLiteral(["cosmic bowling ball"]))), Macro.item($item(_templateObject4$e || (_templateObject4$e = _taggedTemplateLiteral(["Time-Spinner"]))))).if_($item(_templateObject5$e || (_templateObject5$e = _taggedTemplateLiteral(["cosmic bowling ball"]))), Macro.item([$item(_templateObject6$e || (_templateObject6$e = _taggedTemplateLiteral(["Time-Spinner"]))), $item(_templateObject7$e || (_templateObject7$e = _taggedTemplateLiteral(["cosmic bowling ball"])))]));
    }
  }, {
    key: "delevel",
    value: function delevel() {
      var hard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return this.trySkill($skill(_templateObject8$e || (_templateObject8$e = _taggedTemplateLiteral(["Curse of Weaksauce"])))).trySkill($skill(_templateObject9$e || (_templateObject9$e = _taggedTemplateLiteral(["Micrometeorite"])))).externalIf(hard, Macro.tryBowl(), Macro.item($item(_templateObject0$e || (_templateObject0$e = _taggedTemplateLiteral(["Time-Spinner"]))))).trySkill($skill(_templateObject1$e || (_templateObject1$e = _taggedTemplateLiteral(["Summon Love Gnats"]))));
    }
  }, {
    key: "candyblast",
    value: function candyblast() {
      return this.externalIf(have$c($skill(_templateObject10$e || (_templateObject10$e = _taggedTemplateLiteral(["Candyblast"])))), Macro.while_('!match "Hey, some of it is even intact afterwards!"', Macro.trySkill($skill(_templateObject11$e || (_templateObject11$e = _taggedTemplateLiteral(["Candyblast"]))))));
    }
  }, {
    key: "easyFight",
    value: function easyFight() {
      return this.trySkill($skill(_templateObject12$d || (_templateObject12$d = _taggedTemplateLiteral(["Extract"])))).trySkill($skill(_templateObject13$c || (_templateObject13$c = _taggedTemplateLiteral(["Sing Along"]))));
    }
  }, {
    key: "defaultKill",
    value: function defaultKill() {
      return this.delevel().easyFight().externalIf(kolmafia.myClass() === $class(_templateObject14$c || (_templateObject14$c = _taggedTemplateLiteral(["Sauceror"]))), Macro.skill($skill(_templateObject15$c || (_templateObject15$c = _taggedTemplateLiteral(["Saucegeyser"])))).repeat(), Macro.attack().repeat());
    }
  }, {
    key: "throwLoveSongs",
    value: function throwLoveSongs() {
      var LOVE_SONG_PRIORITY = byStat({
        Moxie: $items(_templateObject16$c || (_templateObject16$c = _taggedTemplateLiteral(["love song of naughty innuendo, love song of vague ambiguity, love song of smoldering passion, love song of disturbing obsession"]))),
        Muscle: $items(_templateObject17$c || (_templateObject17$c = _taggedTemplateLiteral(["love song of vague ambiguity, love song of smoldering passion, love song of naughty innuendo, love song of disturbing obsession"]))),
        Mysticality: []
      }).filter(i => have$c(i));
      var _iterator = _createForOfIteratorHelper(LOVE_SONG_PRIORITY.entries()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
            index = _step$value[0],
            song = _step$value[1];
          this.while_([song, song], Macro.item([song, song]));
          var nextSong = LOVE_SONG_PRIORITY[index + 1];
          if (nextSong) Macro.tryItem([song, nextSong]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return this;
    }
  }], [{
    key: "tryBowl",
    value: function tryBowl() {
      return new Macro().tryBowl();
    }
  }, {
    key: "delevel",
    value: function delevel() {
      var hard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return new Macro().delevel(hard);
    }
  }, {
    key: "candyblast",
    value: function candyblast() {
      return new Macro().candyblast();
    }
  }, {
    key: "easyFight",
    value: function easyFight() {
      return new Macro().easyFight();
    }
  }, {
    key: "defaultKill",
    value: function defaultKill() {
      return new Macro().defaultKill();
    }
  }, {
    key: "throwLoveSongs",
    value: function throwLoveSongs() {
      return new Macro().throwLoveSongs();
    }
  }]);
}(StrictMacro);

var _templateObject$e, _templateObject2$e, _templateObject3$d, _templateObject4$d, _templateObject5$d, _templateObject6$d, _templateObject7$d, _templateObject8$d, _templateObject9$d, _templateObject0$d, _templateObject1$d, _templateObject10$d, _templateObject11$d, _templateObject12$c, _templateObject13$b, _templateObject14$b, _templateObject15$b, _templateObject16$b, _templateObject17$b, _templateObject18$b, _templateObject19$b, _templateObject20$b, _templateObject21$b, _templateObject22$b, _templateObject23$b, _templateObject24$b, _templateObject25$b, _templateObject26$b, _templateObject27$b, _templateObject28$b, _templateObject29$b, _templateObject30$b, _templateObject31$b, _templateObject32$b, _templateObject33$a, _templateObject34$a, _templateObject35$a, _templateObject36$a, _templateObject37$9, _templateObject38$8, _templateObject39$8, _templateObject40$8, _templateObject41$8, _templateObject42$8, _templateObject43$8, _templateObject44$8, _templateObject45$8, _templateObject46$8, _templateObject47$8, _templateObject48$8, _templateObject49$7, _templateObject50$6, _templateObject51$6, _templateObject52$5, _templateObject53$4, _templateObject54$4, _templateObject55$4, _templateObject56$4, _templateObject57$4, _templateObject58$4, _templateObject59$3, _templateObject60$3, _templateObject61$3, _templateObject62$3, _templateObject63$2, _templateObject64$2, _templateObject65$2, _templateObject66$2, _templateObject67$2, _templateObject68$2, _templateObject69$2, _templateObject70$2, _templateObject71$2;
var SYNTH_PAIRS = byStat({
  Mysticality: [[$item(_templateObject$e || (_templateObject$e = _taggedTemplateLiteral(["Crimbo fudge"]))), $item(_templateObject2$e || (_templateObject2$e = _taggedTemplateLiteral(["Crimbo fudge"])))], [$item(_templateObject3$d || (_templateObject3$d = _taggedTemplateLiteral(["Crimbo fudge"]))), $item(_templateObject4$d || (_templateObject4$d = _taggedTemplateLiteral(["bag of many confections"])))], [$item(_templateObject5$d || (_templateObject5$d = _taggedTemplateLiteral(["Crimbo peppermint bark"]))), $item(_templateObject6$d || (_templateObject6$d = _taggedTemplateLiteral(["Crimbo candied pecan"])))], [$item(_templateObject7$d || (_templateObject7$d = _taggedTemplateLiteral(["Crimbo peppermint bark"]))), $item(_templateObject8$d || (_templateObject8$d = _taggedTemplateLiteral(["peppermint sprout"])))], [$item(_templateObject9$d || (_templateObject9$d = _taggedTemplateLiteral(["Crimbo candied pecan"]))), $item(_templateObject0$d || (_templateObject0$d = _taggedTemplateLiteral(["peppermint crook"])))]],
  Muscle: [[$item(_templateObject1$d || (_templateObject1$d = _taggedTemplateLiteral(["Crimbo fudge"]))), $item(_templateObject10$d || (_templateObject10$d = _taggedTemplateLiteral(["Crimbo peppermint bark"])))], [$item(_templateObject11$d || (_templateObject11$d = _taggedTemplateLiteral(["bag of many confections"]))), $item(_templateObject12$c || (_templateObject12$c = _taggedTemplateLiteral(["Crimbo peppermint bark"])))], [$item(_templateObject13$b || (_templateObject13$b = _taggedTemplateLiteral(["Crimbo candied pecan"]))), $item(_templateObject14$b || (_templateObject14$b = _taggedTemplateLiteral(["peppermint patty"])))], [$item(_templateObject15$b || (_templateObject15$b = _taggedTemplateLiteral(["peppermint sprout"]))), $item(_templateObject16$b || (_templateObject16$b = _taggedTemplateLiteral(["peppermint patty"])))]],
  Moxie: [[$item(_templateObject17$b || (_templateObject17$b = _taggedTemplateLiteral(["Crimbo fudge"]))), $item(_templateObject18$b || (_templateObject18$b = _taggedTemplateLiteral(["Crimbo candied pecan"])))], [$item(_templateObject19$b || (_templateObject19$b = _taggedTemplateLiteral(["Crimbo fudge"]))), $item(_templateObject20$b || (_templateObject20$b = _taggedTemplateLiteral(["peppermint sprout"])))], [$item(_templateObject21$b || (_templateObject21$b = _taggedTemplateLiteral(["bag of many confections"]))), $item(_templateObject22$b || (_templateObject22$b = _taggedTemplateLiteral(["Crimbo candied pecan"])))], [$item(_templateObject23$b || (_templateObject23$b = _taggedTemplateLiteral(["bag of many confections"]))), $item(_templateObject24$b || (_templateObject24$b = _taggedTemplateLiteral(["peppermint sprout"])))], [$item(_templateObject25$b || (_templateObject25$b = _taggedTemplateLiteral(["Crimbo peppermint bark"]))), $item(_templateObject26$b || (_templateObject26$b = _taggedTemplateLiteral(["peppermint twist"])))]]
});
function synthExp() {
  if (kolmafia.getCampground()["Peppermint Pip Packet"]) {
    kolmafia.visitUrl("campground.php?action=garden");
  }
  if (!get$2("_candySummons")) {
    kolmafia.useSkill(1, $skill(_templateObject27$b || (_templateObject27$b = _taggedTemplateLiteral(["Summon Crimbo Candy"]))));
  }
  var _iterator = _createForOfIteratorHelper(SYNTH_PAIRS),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        candy1 = _step$value[0],
        candy2 = _step$value[1];
      var enough = candy1 === candy2 ? kolmafia.itemAmount(candy1) >= 2 : have$c(candy1) && kolmafia.retrieveItem(candy2);
      if (enough) {
        if (kolmafia.sweetSynthesis(candy1, candy2)) return;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  throw new Error("Failed to synthesize!");
}
var SYNTH_EFFECT = byStat({
  Mysticality: $effect(_templateObject28$b || (_templateObject28$b = _taggedTemplateLiteral(["Synthesis: Learning"]))),
  Moxie: $effect(_templateObject29$b || (_templateObject29$b = _taggedTemplateLiteral(["Synthesis: Style"]))),
  Muscle: $effect(_templateObject30$b || (_templateObject30$b = _taggedTemplateLiteral(["Synthesis: Movement"])))
});
function tryUse(quantity, it) {
  //ripped straight from bean
  if (kolmafia.availableAmount(it) > 0) {
    return kolmafia.use(quantity, it);
  } else {
    return false;
  }
}
function ensureMp(mp) {
  if (kolmafia.myMp() > mp) return;
  if (mp > kolmafia.myMaxmp()) throw "Insufficient maximum mp!";
  while (have$c($item(_templateObject31$b || (_templateObject31$b = _taggedTemplateLiteral(["magical sausage"])))) || have$c($item(_templateObject32$b || (_templateObject32$b = _taggedTemplateLiteral(["magical sausage casing"])))) && kolmafia.myMp() < mp && get$2("_sausagesEaten") < 23) {
    kolmafia.retrieveItem($item(_templateObject33$a || (_templateObject33$a = _taggedTemplateLiteral(["magical sausage"]))));
    kolmafia.eat($item(_templateObject34$a || (_templateObject34$a = _taggedTemplateLiteral(["magical sausage"]))));
  }
  while (have$c($item(_templateObject35$a || (_templateObject35$a = _taggedTemplateLiteral(["psychokinetic energy blob"])))) && kolmafia.myMp() < mp) {
    kolmafia.use($item(_templateObject36$a || (_templateObject36$a = _taggedTemplateLiteral(["psychokinetic energy blob"]))));
  }
  if (kolmafia.myMp() < mp) kolmafia.restoreMp(mp);
}
function canCastLibrams() {
  var summonNumber = 1 + get$2("libramSummons");
  var cost = 1 + summonNumber * (summonNumber - 1) / 2;
  return kolmafia.myMp() >= cost;
}
function totalDuration(item) {
  var effect = kolmafia.effectModifier(item, "Effect");
  return kolmafia.haveEffect(effect) + get$1("Effect Duration", item) * kolmafia.availableAmount(item);
}
var availableFights = () => clamp(5 - fightsDone(), 0, 5) + clamp(kolmafia.availableAmount($item(_templateObject37$9 || (_templateObject37$9 = _taggedTemplateLiteral(["BRICKO eye brick"])))), 0, 10 - get$2("_brickoFights"));
var potentialFights = () => clamp(5 - fightsDone(), 0, 5) + clamp(kolmafia.availableAmount($item(_templateObject38$8 || (_templateObject38$8 = _taggedTemplateLiteral(["BRICKO eye brick"])))), 0, 10 - get$2("_brickoFights")) + clamp(3 - get$2("_brickoEyeSummons"), 0, 10 - get$2("_brickoFights"));
function castPriciestLibram() {
  var choice = bestLibramToCast();
  if (!choice) return false;
  return kolmafia.useSkill(1, choice);
}
function burnLibrams() {
  var testsDone = get$2("csServicesPerformed").split(",");
  if (!$skills(_templateObject39$8 || (_templateObject39$8 = _taggedTemplateLiteral(["Summon BRICKOs, Summon Taffy, Summon Love Song, Summon Candy Heart"]))).some(skill => have$c(skill))) return;
  while (canCastLibrams()) {
    if (!testsDone.includes("Breed More Collies")) {
      var libramPossibilities = possibleLibramSummons();
      var decisionMap = new Map();
      if (have$c($skill(_templateObject40$8 || (_templateObject40$8 = _taggedTemplateLiteral(["Summon Candy Heart"])))) && totalDuration($item(_templateObject41$8 || (_templateObject41$8 = _taggedTemplateLiteral(["green candy heart"])))) <= 0) {
        var _libramPossibilities$;
        var probability = ((_libramPossibilities$ = libramPossibilities.get($skill(_templateObject42$8 || (_templateObject42$8 = _taggedTemplateLiteral(["Summon Candy Heart"]))))) === null || _libramPossibilities$ === void 0 ? void 0 : _libramPossibilities$.get($item(_templateObject43$8 || (_templateObject43$8 = _taggedTemplateLiteral(["green candy heart"]))))) ?? 0;
        decisionMap.set($skill(_templateObject44$8 || (_templateObject44$8 = _taggedTemplateLiteral(["Summon Candy Heart"]))), 3 * probability);
      }
      if (have$c($skill(_templateObject45$8 || (_templateObject45$8 = _taggedTemplateLiteral(["Summon Taffy"])))) && totalDuration($item(_templateObject46$8 || (_templateObject46$8 = _taggedTemplateLiteral(["pulled blue taffy"])))) < 50) {
        var _libramPossibilities$2;
        var _probability = ((_libramPossibilities$2 = libramPossibilities.get($skill(_templateObject47$8 || (_templateObject47$8 = _taggedTemplateLiteral(["Summon Taffy"]))))) === null || _libramPossibilities$2 === void 0 ? void 0 : _libramPossibilities$2.get($item(_templateObject48$8 || (_templateObject48$8 = _taggedTemplateLiteral(["pulled blue taffy"]))))) ?? 0;
        decisionMap.set($skill(_templateObject49$7 || (_templateObject49$7 = _taggedTemplateLiteral(["Summon Taffy"]))), 1 * _probability);
      }
      if (have$c($skill(_templateObject50$6 || (_templateObject50$6 = _taggedTemplateLiteral(["Summon Love Song"])))) && totalDuration($item(_templateObject51$6 || (_templateObject51$6 = _taggedTemplateLiteral(["love song of icy revenge"])))) < 20) {
        var _libramPossibilities$3;
        var _probability2 = ((_libramPossibilities$3 = libramPossibilities.get($skill(_templateObject52$5 || (_templateObject52$5 = _taggedTemplateLiteral(["Summon Love Song"]))))) === null || _libramPossibilities$3 === void 0 ? void 0 : _libramPossibilities$3.get($item(_templateObject53$4 || (_templateObject53$4 = _taggedTemplateLiteral(["love song of icy revenge"]))))) ?? 0;
        var currentWeightValue = clamp(Math.ceil(totalDuration($item(_templateObject54$4 || (_templateObject54$4 = _taggedTemplateLiteral(["love song of icy revenge"])))) / 2), 0, 10);
        var newWeightValue = clamp(Math.ceil((totalDuration($item(_templateObject55$4 || (_templateObject55$4 = _taggedTemplateLiteral(["love song of icy revenge"])))) + 5) / 2), 0, 10);
        decisionMap.set($skill(_templateObject56$4 || (_templateObject56$4 = _taggedTemplateLiteral(["Summon Love Song"]))), _probability2 * (newWeightValue - currentWeightValue));
      }
      if (have$c($skill(_templateObject57$4 || (_templateObject57$4 = _taggedTemplateLiteral(["Summon BRICKOs"])))) && get$2("_brickoEyeSummons") < 3 && testsDone.includes("Donate Blood")) {
        var _libramPossibilities$4;
        var _probability3 = ((_libramPossibilities$4 = libramPossibilities.get($skill(_templateObject58$4 || (_templateObject58$4 = _taggedTemplateLiteral(["Summon BRICKOs"]))))) === null || _libramPossibilities$4 === void 0 ? void 0 : _libramPossibilities$4.get($item(_templateObject59$3 || (_templateObject59$3 = _taggedTemplateLiteral(["BRICKO eye brick"]))))) ?? 0;
        if (have$c($familiar(_templateObject60$3 || (_templateObject60$3 = _taggedTemplateLiteral(["Shorter-Order Cook"])))) && totalDuration($item(_templateObject61$3 || (_templateObject61$3 = _taggedTemplateLiteral(["short stack of pancakes"])))) === 0 && availableFights() < 11 - get$2("_shortOrderCookCharge") && potentialFights() >= 11 - get$2("_shortOrderCookCharge")) {
          decisionMap.set($skill(_templateObject62$3 || (_templateObject62$3 = _taggedTemplateLiteral(["Summon BRICKOs"]))), _probability3 * 11 / (11 - get$2("_shortOrderCookCharge") - availableFights()));
        }
        if (have$c($familiar(_templateObject63$2 || (_templateObject63$2 = _taggedTemplateLiteral(["Garbage Fire"])))) && !have$c($item(_templateObject64$2 || (_templateObject64$2 = _taggedTemplateLiteral(["burning paper crane"])))) && !have$c($item(_templateObject65$2 || (_templateObject65$2 = _taggedTemplateLiteral(["burning newspaper"])))) && availableFights() < 30 - get$2("garbageFireProgress") && potentialFights() >= 30 - get$2("garbageFireProgress")) {
          var value = 5 / (30 - get$2("garbageFireProgress") - availableFights()) * _probability3;
          var otherBrickoValue = decisionMap.get($skill(_templateObject66$2 || (_templateObject66$2 = _taggedTemplateLiteral(["Summon BRICKOs"])))) ?? 0;
          if (value > otherBrickoValue) {
            decisionMap.set($skill(_templateObject67$2 || (_templateObject67$2 = _taggedTemplateLiteral(["Summon BRICKOs"]))), value);
          }
        }
      }
      var bestLibrams = Array.from(decisionMap).sort((a, b) => b[1] - a[1]);
      if (bestLibrams.length === 0) {
        if (!castPriciestLibram()) return;
      } else {
        var decision = bestLibrams[0][0];
        kolmafia.useSkill(1, decision);
      }
    } else if (!castPriciestLibram()) return;
  }
}
function unequip(item) {
  while (kolmafia.equippedAmount(item) > 0) {
    var slot = kolmafia.Slot.all().find(equipmentSlot => kolmafia.equippedItem(equipmentSlot) === item);
    if (!slot) return;
    kolmafia.equip(slot, $item(_templateObject68$2 || (_templateObject68$2 = _taggedTemplateLiteral(["none"]))));
  }
}
function favouriteBirdHas(modifier) {
  var positive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var sign = positive ? "+" : "-";
  return get$2("yourFavoriteBirdMods").split(",").some(mod => mod.includes("".concat(modifier, ": ").concat(sign)));
}
function currentBirdHas(modifier) {
  var positive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var sign = positive ? "+" : "-";
  return get$2("_birdOfTheDayMods").split(",").some(mod => mod.includes("".concat(modifier, ": ").concat(sign)));
}
var guildQuestZone = byStat({
  Mysticality: $location(_templateObject69$2 || (_templateObject69$2 = _taggedTemplateLiteral(["The Haunted Pantry"]))),
  Moxie: $location(_templateObject70$2 || (_templateObject70$2 = _taggedTemplateLiteral(["The Sleazy Back Alley"]))),
  Muscle: $location(_templateObject71$2 || (_templateObject71$2 = _taggedTemplateLiteral(["The Outskirts of Cobb's Knob"])))
});
var LEPRECONDO_CONFIG = byStat({
  Moxie: ["internet-connected laptop", "cupcake treadmill", "four-poster bed", "fully-stocked wet bar"],
  Mysticality: ["cupcake treadmill", "gigantic chess set", "couch and flatscreen", "fully-stocked wet bar"],
  Muscle: ["four-poster bed", "padded weight bench", "UltraDance karaoke machine", "fully-stocked wet bar"]
});
var peridotChoice = monster => ({
  1557: "1&bandersnatch=".concat(monster.id)
});
var availableEmbers = () => Math.floor(get$2("availableSeptEmbers") / 2);

var _templateObject$d, _templateObject2$d, _templateObject3$c, _templateObject4$c, _templateObject5$c, _templateObject6$c, _templateObject7$c, _templateObject8$c, _templateObject9$c, _templateObject0$c, _templateObject1$c, _templateObject10$c, _templateObject11$c, _templateObject12$b, _templateObject13$a, _templateObject14$a, _templateObject15$a, _templateObject16$a, _templateObject17$a, _templateObject18$a, _templateObject19$a, _templateObject20$a, _templateObject21$a, _templateObject22$a, _templateObject23$a, _templateObject24$a, _templateObject25$a, _templateObject26$a, _templateObject27$a, _templateObject28$a, _templateObject29$a, _templateObject30$a, _templateObject31$a, _templateObject32$a, _templateObject33$9, _templateObject34$9, _templateObject35$9, _templateObject36$9, _templateObject37$8, _templateObject38$7, _templateObject39$7, _templateObject40$7, _templateObject41$7, _templateObject42$7, _templateObject43$7, _templateObject44$7, _templateObject45$7, _templateObject46$7, _templateObject47$7, _templateObject48$7;
var UNCHANGING_OUTFIT = _objectSpread2(_objectSpread2({
  shirt: $items(_templateObject$d || (_templateObject$d = _taggedTemplateLiteral(["LOV Eardigan, Jurassic Parka, fresh coat of paint"]))),
  offhand: $item(_templateObject2$d || (_templateObject2$d = _taggedTemplateLiteral(["unbreakable umbrella"])))
}, byStat({
  Mysticality: {
    acc1: $items(_templateObject3$c || (_templateObject3$c = _taggedTemplateLiteral(["meteorite necklace, your cowboy boots"]))),
    acc2: $item(_templateObject4$c || (_templateObject4$c = _taggedTemplateLiteral(["codpiece"]))),
    acc3: $items(_templateObject5$c || (_templateObject5$c = _taggedTemplateLiteral(["battle broom, Retrospecs"])))
  },
  Muscle: {
    acc1: $item(_templateObject6$c || (_templateObject6$c = _taggedTemplateLiteral(["your cowboy boots"]))),
    acc2: $items(_templateObject7$c || (_templateObject7$c = _taggedTemplateLiteral(["Brutal brogues, Powerful Glove"]))),
    acc3: $items(_templateObject8$c || (_templateObject8$c = _taggedTemplateLiteral(["Retrospecs"])))
  },
  Moxie: {
    acc1: $item(_templateObject9$c || (_templateObject9$c = _taggedTemplateLiteral(["your cowboy boots"]))),
    acc2: $items(_templateObject0$c || (_templateObject0$c = _taggedTemplateLiteral(["LOV Earrings, Beach Comb"]))),
    acc3: $item(_templateObject1$c || (_templateObject1$c = _taggedTemplateLiteral(["Cincho de Mayo"])))
  }
})), {}, {
  modes: {
    retrocape: [byStat({
      Muscle: "vampire",
      Moxie: "robot",
      Mysticality: "heck"
    }), "thrill"],
    umbrella: "broken",
    parka: "spikolodon"
  }
});
var DEFAULT_UNIFORM = () => _objectSpread2(_objectSpread2({}, UNCHANGING_OUTFIT), {}, {
  hat: buffAvailable() ? $item(_templateObject10$c || (_templateObject10$c = _taggedTemplateLiteral(["Daylight Shavings Helmet"]))) : byStat({
    Moxie: $items(_templateObject11$c || (_templateObject11$c = _taggedTemplateLiteral(["very pointy crown, Apriling band helmet"]))),
    Mysticality: $items(_templateObject12$b || (_templateObject12$b = _taggedTemplateLiteral(["astral chapeau, Apriling band helmet"]))),
    Muscle: $item(_templateObject13$a || (_templateObject13$a = _taggedTemplateLiteral(["Apriling band helmet"])))
  }),
  pants: get$2("sweat") < 100 ? $item(_templateObject14$a || (_templateObject14$a = _taggedTemplateLiteral(["designer sweatpants"]))) : $items(_templateObject15$a || (_templateObject15$a = _taggedTemplateLiteral(["astral trousers, astral shorts, designer sweatpants"]))),
  weapon: get$2("_juneCleaverFightsLeft") > 0 && get$2("_juneCleaverEncounters") < 2 ? $item(_templateObject16$a || (_templateObject16$a = _taggedTemplateLiteral(["June cleaver"]))) : byStat({
    Muscle: $items(_templateObject17$a || (_templateObject17$a = _taggedTemplateLiteral(["dented scepter, Fourth of May Cosplay Saber"]))),
    default: $item(_templateObject18$a || (_templateObject18$a = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))
  }),
  back: get$2("questPAGhost") === "unstarted" && get$2("nextParanormalActivity") <= kolmafia.totalTurnsPlayed() ? $item(_templateObject19$a || (_templateObject19$a = _taggedTemplateLiteral(["protonic accelerator pack"]))) : $items(_templateObject20$a || (_templateObject20$a = _taggedTemplateLiteral(["LOV Epaulettes, unwrapped knock-off retro superhero cape"])))
});
var FAMILIAR_PICKS = [{
  familiar: $familiar(_templateObject21$a || (_templateObject21$a = _taggedTemplateLiteral(["Stocking Mimic"]))),
  famequip: $item.none,
  condition: () => !get$2("_bagOfCandy")
}, {
  familiar: $familiar(_templateObject22$a || (_templateObject22$a = _taggedTemplateLiteral(["Melodramedary"]))),
  famequip: () => $items(_templateObject23$a || (_templateObject23$a = _taggedTemplateLiteral(["dromedary drinking helmet"]))).find(i => have$c(i)),
  condition: () => get$2("camelSpit") < 100 && !have$c($effect(_templateObject24$a || (_templateObject24$a = _taggedTemplateLiteral(["Spit Upon"])))) && kolmafia.inHardcore()
}, {
  familiar: $familiar(_templateObject25$a || (_templateObject25$a = _taggedTemplateLiteral(["Shorter-Order Cook"]))),
  condition: () => ![$effect(_templateObject26$a || (_templateObject26$a = _taggedTemplateLiteral(["Shortly Stacked"]))), $item(_templateObject27$a || (_templateObject27$a = _taggedTemplateLiteral(["short stack of pancakes"])))].some(x => have$c(x)) && !CommunityService.FamiliarWeight.isDone()
}, {
  familiar: $familiar(_templateObject28$a || (_templateObject28$a = _taggedTemplateLiteral(["Garbage Fire"]))),
  condition: () => $familiar(_templateObject29$a || (_templateObject29$a = _taggedTemplateLiteral(["Garbage Fire"]))).dropsToday < 1
}, {
  familiar: $familiar(_templateObject30$a || (_templateObject30$a = _taggedTemplateLiteral(["Cornbeefadon"]))),
  condition: () => {
    if (doneToday($familiar(_templateObject31$a || (_templateObject31$a = _taggedTemplateLiteral(["Cornbeefadon"]))))) return false;
    var currentCupidFamiliar = currentFamiliar();
    if (!currentCupidFamiliar || currentCupidFamiliar === $familiar(_templateObject32$a || (_templateObject32$a = _taggedTemplateLiteral(["Cornbeefadon"])))) return true;
    return doneToday(currentCupidFamiliar);
  }
}];
function findFirstFamiliar(fams) {
  return fams.find(f => have$c(f));
}
function chooseFamiliar(canAttack) {
  var pick = FAMILIAR_PICKS.find(_ref => {
    var condition = _ref.condition,
      familiar = _ref.familiar;
    return condition() && have$c(familiar) && (canAttack || !(familiar.elementalDamage || familiar.physicalDamage));
  });
  if (pick) {
    if (pick.famequip) {
      return {
        famequip: undelay(pick.famequip),
        familiar: pick.familiar
      };
    }
    if (!doneToday($familiar(_templateObject33$9 || (_templateObject33$9 = _taggedTemplateLiteral(["Shorter-Order Cook"]))))) {
      return {
        familiar: pick.familiar,
        famequip: pick.familiar === $familiar(_templateObject34$9 || (_templateObject34$9 = _taggedTemplateLiteral(["Shorter-Order Cook"]))) ? $item(_templateObject35$9 || (_templateObject35$9 = _taggedTemplateLiteral(["toy Cupid bow"]))) : $item(_templateObject36$9 || (_templateObject36$9 = _taggedTemplateLiteral(["tiny stillsuit"])))
      };
    }
    return {
      familiar: pick.familiar,
      famequip: doneToday(pick.familiar) ? $item(_templateObject37$8 || (_templateObject37$8 = _taggedTemplateLiteral(["tiny stillsuit"]))) : $item(_templateObject38$7 || (_templateObject38$7 = _taggedTemplateLiteral(["toy Cupid bow"])))
    };
  }
  return {
    famequip: $item(_templateObject39$7 || (_templateObject39$7 = _taggedTemplateLiteral(["tiny stillsuit"]))),
    familiar: findFirstFamiliar($familiars(_templateObject40$7 || (_templateObject40$7 = _taggedTemplateLiteral(["Puck Man, Ms. Puck Man"])))) ?? $familiar(_templateObject41$7 || (_templateObject41$7 = _taggedTemplateLiteral(["Blood-Faced Volleyball"])))
  };
}
var equipBluePlate = () => have$c($item(_templateObject42$7 || (_templateObject42$7 = _taggedTemplateLiteral(["blue plate"])))) && kolmafia.familiarEquippedEquipment($familiar(_templateObject43$7 || (_templateObject43$7 = _taggedTemplateLiteral(["Shorter-Order Cook"])))) !== $item(_templateObject44$7 || (_templateObject44$7 = _taggedTemplateLiteral(["blue plate"]))) && kolmafia.equip($familiar(_templateObject45$7 || (_templateObject45$7 = _taggedTemplateLiteral(["Shorter-Order Cook"]))), $item(_templateObject46$7 || (_templateObject46$7 = _taggedTemplateLiteral(["blue plate"]))));
function uniform() {
  var _spec$familiar;
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref2$changes = _ref2.changes,
    changes = _ref2$changes === void 0 ? {} : _ref2$changes,
    _ref2$canAttack = _ref2.canAttack,
    canAttack = _ref2$canAttack === void 0 ? true : _ref2$canAttack;
  if ("familiar" in changes && !("famequip" in changes) && changes.familiar) {
    if (familiarsToday().includes(changes.familiar)) {
      changes.famequip = $item(_templateObject47$7 || (_templateObject47$7 = _taggedTemplateLiteral(["tiny stillsuit"])));
    } else {
      changes.famequip = $item(_templateObject48$7 || (_templateObject48$7 = _taggedTemplateLiteral(["toy Cupid bow"])));
    }
  }
  var spec = _objectSpread2(_objectSpread2(_objectSpread2({}, DEFAULT_UNIFORM()), chooseFamiliar(canAttack)), changes);
  if (((_spec$familiar = spec.familiar) === null || _spec$familiar === void 0 ? void 0 : _spec$familiar.experience) === 0) spec.beforeDress = [equipBluePlate];
  return spec;
}

var _templateObject$c, _templateObject2$c, _templateObject3$b, _templateObject4$b, _templateObject5$b, _templateObject6$b, _templateObject7$b, _templateObject8$b, _templateObject9$b, _templateObject0$b, _templateObject1$b, _templateObject10$b, _templateObject11$b, _templateObject12$a, _templateObject13$9, _templateObject14$9, _templateObject15$9, _templateObject16$9, _templateObject17$9, _templateObject18$9, _templateObject19$9, _templateObject20$9, _templateObject21$9, _templateObject22$9, _templateObject23$9, _templateObject24$9, _templateObject25$9, _templateObject26$9, _templateObject27$9, _templateObject28$9, _templateObject29$9, _templateObject30$9, _templateObject31$9, _templateObject32$9, _templateObject33$8, _templateObject34$8, _templateObject35$8, _templateObject36$8, _templateObject37$7, _templateObject38$6, _templateObject39$6, _templateObject40$6, _templateObject41$6, _templateObject42$6, _templateObject43$6, _templateObject44$6, _templateObject45$6, _templateObject46$6, _templateObject47$6, _templateObject48$6, _templateObject49$6;
function beachTask(effect) {
  var num = 1 + headBuffs.indexOf(effect);
  return {
    name: "Beach Head: ".concat(effect),
    completed: () => kolmafia.getProperty("_beachHeadsUsed").split(",").includes(num.toFixed(0)),
    ready: () => get$2("_freeBeachWalksUsed") < 11 && get$2("beachHeadsUnlocked").split(",").includes(num.toFixed(0)),
    do: () => tryHead(effect)
  };
}
function innerElf() {
  return {
    name: "Inner Elf",
    completed: () => have$c($effect(_templateObject$c || (_templateObject$c = _taggedTemplateLiteral(["Inner Elf"])))),
    ready: () => kolmafia.myLevel() >= 13 && !exists("portscan.edu"),
    do: () => Clan.with(get$2("phccs_elfClan", "Hobopolis Vacation Home"), () => {
      kolmafia.adv1($location(_templateObject2$c || (_templateObject2$c = _taggedTemplateLiteral(["The Slime Tube"]))), -1, "");
    }),
    outfit: () => uniform({
      changes: {
        shirt: $item(_templateObject3$b || (_templateObject3$b = _taggedTemplateLiteral(["Jurassic Parka"]))),
        acc3: $item(_templateObject4$b || (_templateObject4$b = _taggedTemplateLiteral(["Kremlin's Greatest Briefcase"]))),
        familiar: $familiar(_templateObject5$b || (_templateObject5$b = _taggedTemplateLiteral(["Machine Elf"]))),
        modes: {
          parka: "pterodactyl"
        }
      }
    }),
    choices: {
      [326]: 1
    },
    combat: new CSStrategy(() => Macro.trySkill($skill(_templateObject6$b || (_templateObject6$b = _taggedTemplateLiteral(["KGB tranquilizer dart"])))).trySkill($skill(_templateObject7$b || (_templateObject7$b = _taggedTemplateLiteral(["Snokebomb"])))))
  };
}
function potionTask(item) {
  var effect = kolmafia.effectModifier(item, "Effect");
  return {
    name: "".concat(effect),
    completed: () => have$c(effect),
    ready: () => have$c(item),
    do: () => kolmafia.use(item)
  };
}
function restore(effects) {
  return {
    name: "Restore",
    completed: () => effects.every(e => have$c(e)),
    do: () => {
      if (!have$c($item(_templateObject8$b || (_templateObject8$b = _taggedTemplateLiteral(["magical sausage"])))) && have$c($item(_templateObject9$b || (_templateObject9$b = _taggedTemplateLiteral(["magical sausage casing"]))))) {
        kolmafia.create(1, $item(_templateObject0$b || (_templateObject0$b = _taggedTemplateLiteral(["magical sausage"]))));
      }
      if (have$c($item(_templateObject1$b || (_templateObject1$b = _taggedTemplateLiteral(["magical sausage"]))))) {
        kolmafia.eat(1, $item(_templateObject10$b || (_templateObject10$b = _taggedTemplateLiteral(["magical sausage"]))));
      } else if (have$c($item(_templateObject11$b || (_templateObject11$b = _taggedTemplateLiteral(["psychokinetic energy blob"]))))) {
        kolmafia.use(1, $item(_templateObject12$a || (_templateObject12$a = _taggedTemplateLiteral(["psychokinetic energy blob"]))));
      } else {
        kolmafia.buy(1, $item(_templateObject13$9 || (_templateObject13$9 = _taggedTemplateLiteral(["Doc Galaktik's Invigorating Tonic"]))));
        kolmafia.use($item(_templateObject14$9 || (_templateObject14$9 = _taggedTemplateLiteral(["Doc Galaktik's Invigorating Tonic"]))));
      }
    }
  };
}
function skillTask(x) {
  var includeAprilShield = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  {
    var _ref = x instanceof kolmafia.Skill ? {
        skill: x,
        effect: kolmafia.toEffect(x)
      } : x instanceof kolmafia.Effect ? {
        skill: kolmafia.toSkill(x),
        effect: x
      } : x,
      skill = _ref.skill,
      effect = _ref.effect;
    return {
      name: skill.name,
      completed: () => have$c(effect),
      ready: () => kolmafia.myMp() >= kolmafia.mpCost(skill) && kolmafia.myAdventures() >= kolmafia.advCost(skill),
      do: () => kolmafia.useSkill(skill),
      outfit: includeAprilShield ? {
        offhand: $item(_templateObject15$9 || (_templateObject15$9 = _taggedTemplateLiteral(["April Shower Thoughts shield"])))
      } : {
        avoid: $items(_templateObject16$9 || (_templateObject16$9 = _taggedTemplateLiteral(["April Shower Thoughts shield"])))
      }
    };
  }
}
function restoreBuffTasks(buffs) {
  var includeAprilShield = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return [].concat(_toConsumableArray(buffs.map(buff => skillTask(buff, includeAprilShield))), [restore(buffs)]);
}
function commonFamiliarWeightBuffs() {
  var buffs = $effects(_templateObject17$9 || (_templateObject17$9 = _taggedTemplateLiteral(["Empathy, Leash of Linguini, Blood Bond"])));
  return [potionTask($item(_templateObject18$9 || (_templateObject18$9 = _taggedTemplateLiteral(["green candy heart"]))))].concat(_toConsumableArray(restoreBuffTasks(buffs)), [skillTask({
    skill: $skill(_templateObject19$9 || (_templateObject19$9 = _taggedTemplateLiteral(["Empathy of the Newt"]))),
    effect: $effect(_templateObject20$9 || (_templateObject20$9 = _taggedTemplateLiteral(["Thoughtful Empathy"])))
  }, true)]);
}
function songTask(song, shrugSong) {
  var _ref2 = song instanceof kolmafia.Effect ? {
      wantedSongSkill: kolmafia.toSkill(song),
      wantedSongEffect: song
    } : {
      wantedSongSkill: song,
      wantedSongEffect: kolmafia.toEffect(song)
    },
    wantedSongSkill = _ref2.wantedSongSkill,
    wantedSongEffect = _ref2.wantedSongEffect;
  var shrugSongEffect = shrugSong instanceof kolmafia.Effect ? shrugSong : kolmafia.toEffect(shrugSong);
  return {
    name: song.name,
    completed: () => have$c(wantedSongEffect),
    ready: () => kolmafia.myMp() >= kolmafia.mpCost(wantedSongSkill),
    do: () => {
      if (have$c(shrugSongEffect)) kolmafia.cliExecute("shrug ".concat(shrugSongEffect));
      kolmafia.useSkill(wantedSongSkill);
    }
  };
}
function asdonTask(style) {
  var effect = style instanceof kolmafia.Effect ? style : Driving[style];
  return {
    name: effect.name,
    completed: () => have$c(effect),
    do: () => {
      if (kolmafia.getFuel() < 37) {
        kolmafia.buy(1, $item(_templateObject21$9 || (_templateObject21$9 = _taggedTemplateLiteral(["all-purpose flower"]))));
        kolmafia.use(1, $item(_templateObject22$9 || (_templateObject22$9 = _taggedTemplateLiteral(["all-purpose flower"]))));
        kolmafia.buy(kolmafia.availableAmount($item(_templateObject23$9 || (_templateObject23$9 = _taggedTemplateLiteral(["wad of dough"])))), $item(_templateObject24$9 || (_templateObject24$9 = _taggedTemplateLiteral(["soda water"]))));
        kolmafia.create(kolmafia.availableAmount($item(_templateObject25$9 || (_templateObject25$9 = _taggedTemplateLiteral(["wad of dough"])))), $item(_templateObject26$9 || (_templateObject26$9 = _taggedTemplateLiteral(["loaf of soda bread"]))));
        insertFuel($item(_templateObject27$9 || (_templateObject27$9 = _taggedTemplateLiteral(["loaf of soda bread"]))), kolmafia.availableAmount($item(_templateObject28$9 || (_templateObject28$9 = _taggedTemplateLiteral(["loaf of soda bread"])))));
      }
      drive(effect);
    }
  };
}
var showers = get$2("_meteorShowerUses");
var incrementShowers = () => showers++;
function meteorShower() {
  return {
    name: "Meteor Showered",
    ready: () => get$2("_meteorShowerUses") < 5 && get$2("_saberForceUses") < 5,
    completed: () => have$c($effect(_templateObject29$9 || (_templateObject29$9 = _taggedTemplateLiteral(["Meteor Showered"])))),
    prepare: () => {
      if (current() === "pale") changeHorse("dark");
      educate([$skill(_templateObject30$9 || (_templateObject30$9 = _taggedTemplateLiteral(["Turbo"]))), $skill(_templateObject31$9 || (_templateObject31$9 = _taggedTemplateLiteral(["Extract"])))]);
    },
    do: () => {
      kolmafia.adv1($location(_templateObject32$9 || (_templateObject32$9 = _taggedTemplateLiteral(["The Neverending Party"]))), -1, "");
      if (kolmafia.handlingChoice()) kolmafia.runChoice(-1);
    },
    outfit: () => uniform({
      changes: {
        familiar: $familiar.none,
        famequip: $item.none,
        weapon: $item(_templateObject33$8 || (_templateObject33$8 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))
      }
    }),
    choices: {
      [1387]: 3,
      [1324]: 5
    },
    combat: new CSStrategy(() => Macro.externalIf(have$c($effect(_templateObject34$8 || (_templateObject34$8 = _taggedTemplateLiteral(["Overheated"])))), new Macro(), Macro.skill($skill(_templateObject35$8 || (_templateObject35$8 = _taggedTemplateLiteral(["Turbo"]))))).skill($skill(_templateObject36$8 || (_templateObject36$8 = _taggedTemplateLiteral(["Meteor Shower"])))).skill($skill(_templateObject37$7 || (_templateObject37$7 = _taggedTemplateLiteral(["Use the Force"]))))),
    post: () => {
      if (have$c($effect(_templateObject38$6 || (_templateObject38$6 = _taggedTemplateLiteral(["Meteor Showered"]))))) incrementShowers();
      _set("_meteorShowerUses", showers);
      educate([$skill(_templateObject39$6 || (_templateObject39$6 = _taggedTemplateLiteral(["Extract"]))), $skill(_templateObject40$6 || (_templateObject40$6 = _taggedTemplateLiteral(["Portscan"])))]);
    }
  };
}
function birdTask(modifier) {
  var positive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return {
    name: "Regular Bird",
    completed: () => have$c($effect(_templateObject41$6 || (_templateObject41$6 = _taggedTemplateLiteral(["Blessing of the Bird"])))),
    ready: () => have$c($skill(_templateObject42$6 || (_templateObject42$6 = _taggedTemplateLiteral(["Seek out a Bird"])))) && currentBirdHas(modifier, positive) && get$2("_birdsSoughtToday") < 6,
    do: () => kolmafia.useSkill($skill(_templateObject43$6 || (_templateObject43$6 = _taggedTemplateLiteral(["Seek out a Bird"]))))
  };
}
function favouriteBirdTask(modifier) {
  var positive = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return {
    name: "Favourite Bird",
    completed: () => get$2("_favoriteBirdVisited"),
    ready: () => have$c($skill(_templateObject44$6 || (_templateObject44$6 = _taggedTemplateLiteral(["Visit your Favorite Bird"])))) && favouriteBirdHas(modifier, positive),
    do: () => kolmafia.useSkill($skill(_templateObject45$6 || (_templateObject45$6 = _taggedTemplateLiteral(["Visit your Favorite Bird"]))))
  };
}
function deckTask(card) {
  return {
    name: "Cheat At Cards: ".concat(card),
    completed: () => getCardsSeen().includes(card),
    ready: () => have$b() && getRemainingCheats() > 0,
    do: () => cheatCard(card)
  };
}
function aprilTask(song) {
  return {
    name: "Conduct ".concat(song),
    ready: () => canChangeSong(),
    completed: () => have$c(kolmafia.Effect.get(song)),
    do: () => changeSong(song)
  };
}
function buskTask(hat, shirt, pants, index) {
  return {
    name: "Busk #".concat(index + 1, ": ").concat(hat, ". ").concat(shirt, ", and ").concat(pants),
    outfit: _objectSpread2({
      hat,
      shirt,
      pants
    }, hat === $item(_templateObject46$6 || (_templateObject46$6 = _taggedTemplateLiteral(["prismatic beret"]))) ? {} : {
      familiar: $familiar(_templateObject47$6 || (_templateObject47$6 = _taggedTemplateLiteral(["Mad Hatrack"]))),
      famequip: $item(_templateObject48$6 || (_templateObject48$6 = _taggedTemplateLiteral(["prismatic beret"])))
    }),
    acquire: () => [hat, pants, shirt].filter(i => i !== $item.none && !have$c(i) && kolmafia.npcPrice(i) > 0).map(item => ({
      item
    })),
    ready: () => [hat, shirt, pants].every(it => it === $item.none || kolmafia.canEquip(it) && (have$c(it) || kolmafia.npcPrice(it) > 0)),
    completed: () => get$2("_beretBuskingUses") !== index,
    do: () => {
      for (var _i = 0, _Object$entries = Object.entries({
          hat,
          shirt,
          pants
        }); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          slotName = _Object$entries$_i[0],
          item = _Object$entries$_i[1];
        if (kolmafia.equippedItem(kolmafia.toSlot(slotName)) !== item) kolmafia.abort("Failed to equip ".concat(item, " to ").concat(slotName, " for Busking!"));
      }
      kolmafia.useSkill($skill(_templateObject49$6 || (_templateObject49$6 = _taggedTemplateLiteral(["Beret Busking"]))));
    },
    core: "soft"
  };
}

var _templateObject$b, _templateObject2$b, _templateObject3$a, _templateObject4$a, _templateObject5$a, _templateObject6$a, _templateObject7$a, _templateObject8$a, _templateObject9$a, _templateObject0$a, _templateObject1$a, _templateObject10$a, _templateObject11$a, _templateObject12$9, _templateObject13$8, _templateObject14$8, _templateObject15$8, _templateObject16$8, _templateObject17$8, _templateObject18$8, _templateObject19$8, _templateObject20$8, _templateObject21$8, _templateObject22$8, _templateObject23$8, _templateObject24$8, _templateObject25$8, _templateObject26$8, _templateObject27$8, _templateObject28$8, _templateObject29$8, _templateObject30$8, _templateObject31$8, _templateObject32$8;
var BoozeDrop = {
  name: "Booze Drop",
  type: "SERVICE",
  test: CommunityService.BoozeDrop,
  outfit: () => {
    kolmafia.cliExecute("fold wad of used tape");
    return {
      hat: $items(_templateObject$b || (_templateObject$b = _taggedTemplateLiteral(["norwhal helmet, wad of used tape"]))),
      weapon: $items(_templateObject2$b || (_templateObject2$b = _taggedTemplateLiteral(["extra-large utility candle, runed taper candle, novelty sparkling candle, Fourth of May Cosplay Saber"]))),
      offhand: $item(_templateObject3$a || (_templateObject3$a = _taggedTemplateLiteral(["unbreakable umbrella"]))),
      back: $items(_templateObject4$a || (_templateObject4$a = _taggedTemplateLiteral(["Buddy Bjorn, protonic accelerator pack"]))),
      riders: {
        "buddy-bjorn": $familiar(_templateObject5$a || (_templateObject5$a = _taggedTemplateLiteral(["Party Mouse"])))
      },
      acc1: $item(_templateObject6$a || (_templateObject6$a = _taggedTemplateLiteral(["Guzzlr tablet"]))),
      acc2: $item(_templateObject7$a || (_templateObject7$a = _taggedTemplateLiteral(["Cincho de Mayo"]))),
      acc3: $items(_templateObject8$a || (_templateObject8$a = _taggedTemplateLiteral(["barrel hoop earring, gold detective badge, government-issued night-vision goggles, combat lover's locket"]))),
      famequip: $item(_templateObject9$a || (_templateObject9$a = _taggedTemplateLiteral(["li'l ninja costume"]))),
      familiar: $familiar(_templateObject0$a || (_templateObject0$a = _taggedTemplateLiteral(["Trick-or-Treating Tot"]))),
      modes: {
        umbrella: "bucket style"
      }
    };
  },
  turnsSpent: 0,
  maxTurns: byClass({
    Pastamancer: 1,
    default: 3
  }),
  tasks: [{
    name: "Batform",
    completed: () => have$c($effect(_templateObject1$a || (_templateObject1$a = _taggedTemplateLiteral(["Bat-Adjacent Form"])))),
    do: $location(_templateObject10$a || (_templateObject10$a = _taggedTemplateLiteral(["The Dire Warren"]))),
    outfit: () => uniform({
      changes: {
        back: $item(_templateObject11$a || (_templateObject11$a = _taggedTemplateLiteral(["vampyric cloake"]))),
        offhand: $item(_templateObject12$9 || (_templateObject12$9 = _taggedTemplateLiteral(["latte lovers member's mug"])))
      },
      canAttack: false
    }),
    combat: new CSStrategy(() => Macro.skill($skill(_templateObject13$8 || (_templateObject13$8 = _taggedTemplateLiteral(["Become a Bat"])))).skill($skill(_templateObject14$8 || (_templateObject14$8 = _taggedTemplateLiteral(["Throw Latte on Opponent"])))))
  }, _objectSpread2(_objectSpread2({}, deckTask("X - The Wheel of Fortune")), {}, {
    // These classes aren't using barrel for +item
    class: $classes(_templateObject15$8 || (_templateObject15$8 = _taggedTemplateLiteral(["Sauceror, Turtle Tamer"]))),
    core: "hard"
  }), {
    name: "Items.enh",
    completed: () => have$c($effect(_templateObject16$8 || (_templateObject16$8 = _taggedTemplateLiteral(["items.enh"])))),
    do: () => enhance($effect(_templateObject17$8 || (_templateObject17$8 = _taggedTemplateLiteral(["items.enh"]))))
  }, skillTask($skill(_templateObject18$8 || (_templateObject18$8 = _taggedTemplateLiteral(["The Spirit of Taking"])))), skillTask($skill(_templateObject19$8 || (_templateObject19$8 = _taggedTemplateLiteral(["Singer's Faithful Ocelot"])))), {
    name: "Play Pool",
    completed: () => have$c($effect(_templateObject20$8 || (_templateObject20$8 = _taggedTemplateLiteral(["Hustlin'"])))),
    do: () => kolmafia.cliExecute("pool 3")
  }, asdonTask("Observantly"), {
    name: "Get Anticheese",
    ready: () => kolmafia.canAdventure($location(_templateObject21$8 || (_templateObject21$8 = _taggedTemplateLiteral(["South of the Border"])))),
    completed: () => get$2("lastAnticheeseDay") > 0,
    do: () => kolmafia.visitUrl("place.php?whichplace=desertbeach&action=db_nukehouse")
  }, {
    name: "Government",
    ready: () => have$c($item(_templateObject22$8 || (_templateObject22$8 = _taggedTemplateLiteral(["anticheese"])))) && have$c($item(_templateObject23$8 || (_templateObject23$8 = _taggedTemplateLiteral(["government cheese"])))),
    completed: () => have$c($effect(_templateObject24$8 || (_templateObject24$8 = _taggedTemplateLiteral(["I See Everything Thrice!"])))),
    do: () => kolmafia.create(1, $item(_templateObject25$8 || (_templateObject25$8 = _taggedTemplateLiteral(["government"])))) && kolmafia.use(1, $item(_templateObject26$8 || (_templateObject26$8 = _taggedTemplateLiteral(["government"]))))
  }, {
    name: "Pray",
    class: $classes(_templateObject27$8 || (_templateObject27$8 = _taggedTemplateLiteral(["Pastamancer"]))),
    completed: () => get$2("_barrelPrayer"),
    do: () => kolmafia.cliExecute("barrelprayer buff")
  }].concat(_toConsumableArray($items(_templateObject28$8 || (_templateObject28$8 = _taggedTemplateLiteral(["Salsa Caliente\u2122 candle, lavender candy heart, bag of grain, emergency glowstick, autumn leaf"]))).map(potionTask)), [{
    name: "Steely-Eyed Squint",
    completed: () => have$c($effect(_templateObject29$8 || (_templateObject29$8 = _taggedTemplateLiteral(["Steely-Eyed Squint"])))),
    do: () => kolmafia.useSkill($skill(_templateObject30$8 || (_templateObject30$8 = _taggedTemplateLiteral(["Steely-Eyed Squint"]))))
  }, aprilTask("Apriling Band Celebration Bop"), {
    name: "Feel Lost",
    completed: () => have$c($effect(_templateObject31$8 || (_templateObject31$8 = _taggedTemplateLiteral(["Feeling Lost"])))),
    do: () => kolmafia.useSkill($skill(_templateObject32$8 || (_templateObject32$8 = _taggedTemplateLiteral(["Feel Lost"]))))
  }])
};

var _templateObject$a, _templateObject2$a, _templateObject3$9, _templateObject4$9, _templateObject5$9, _templateObject6$9, _templateObject7$9, _templateObject8$9, _templateObject9$9, _templateObject0$9, _templateObject1$9, _templateObject10$9, _templateObject11$9, _templateObject12$8, _templateObject13$7, _templateObject14$7, _templateObject15$7, _templateObject16$7, _templateObject17$7, _templateObject18$7, _templateObject19$7, _templateObject20$7, _templateObject21$7, _templateObject22$7, _templateObject23$7, _templateObject24$7, _templateObject25$7, _templateObject26$7, _templateObject27$7, _templateObject28$7, _templateObject29$7, _templateObject30$7, _templateObject31$7, _templateObject32$7, _templateObject33$7, _templateObject34$7, _templateObject35$7, _templateObject36$7, _templateObject37$6;
var CoilWire = {
  type: "SERVICE",
  maxTurns: 60,
  test: CommunityService.CoilWire,
  name: "Coil Wire",
  tasks: [{
    name: "Sausage",
    ready: () => getKramcoWandererChance() >= 1,
    completed: () => get$2("_sausageFights") > 0,
    do: () => {
      kolmafia.adv1(guildQuestZone, -1, "");
      if (have$c($item(_templateObject$a || (_templateObject$a = _taggedTemplateLiteral(["magical sausage casing"]))))) {
        kolmafia.create(1, $item(_templateObject2$a || (_templateObject2$a = _taggedTemplateLiteral(["magical sausage"]))));
      }
      kolmafia.eat(1, $item(_templateObject3$9 || (_templateObject3$9 = _taggedTemplateLiteral(["magical sausage"]))));
    },
    outfit: () => uniform({
      changes: {
        offhand: $item(_templateObject4$9 || (_templateObject4$9 = _taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))),
        familiar: $familiar(_templateObject5$9 || (_templateObject5$9 = _taggedTemplateLiteral(["Left-Hand Man"]))),
        famequip: $item(_templateObject6$9 || (_templateObject6$9 = _taggedTemplateLiteral(["Roman Candelabra"])))
      }
    }),
    combat: new CSStrategy(() => Macro.trySkill($skill(_templateObject7$9 || (_templateObject7$9 = _taggedTemplateLiteral(["Blow the Purple Candle!"])))).trySkill($skill(_templateObject8$9 || (_templateObject8$9 = _taggedTemplateLiteral(["Blow the Red Candle!"])))).skill($skill(_templateObject9$9 || (_templateObject9$9 = _taggedTemplateLiteral(["Micrometeorite"])))).attack().repeat())
  }, {
    name: "Acquire Sombrero-Mounted Sparkler",
    completed: () => have$c($item(_templateObject0$9 || (_templateObject0$9 = _taggedTemplateLiteral(["sombrero-mounted sparkler"])))),
    do: () => {
      kolmafia.visitUrl("clan_viplounge.php?action=fwshop&whichfloor=2");
      kolmafia.buy(1, $item(_templateObject1$9 || (_templateObject1$9 = _taggedTemplateLiteral(["sombrero-mounted sparkler"]))));
    }
  }, asdonTask("Obnoxiously"), {
    name: "Spring Run",
    completed: () => have$c($effect(_templateObject10$9 || (_templateObject10$9 = _taggedTemplateLiteral(["Everything Looks Green"])))),
    do: guildQuestZone,
    outfit: () => uniform({
      canAttack: false,
      changes: {
        acc1: $item(_templateObject11$9 || (_templateObject11$9 = _taggedTemplateLiteral(["spring shoes"]))),
        hat: $item(_templateObject12$8 || (_templateObject12$8 = _taggedTemplateLiteral(["sombrero-mounted sparkler"])))
      }
    }),
    combat: new CSStrategy(() => Macro.trySkill($skill(_templateObject13$7 || (_templateObject13$7 = _taggedTemplateLiteral(["Spring Away"])))))
  }, {
    name: "Fruity Skeleton",
    class: $classes(_templateObject14$7 || (_templateObject14$7 = _taggedTemplateLiteral(["Sauceror"]))),
    completed: () => have$c($item(_templateObject15$7 || (_templateObject15$7 = _taggedTemplateLiteral(["cherry"])))),
    ready: () => !have$c($effect(_templateObject16$7 || (_templateObject16$7 = _taggedTemplateLiteral(["Everything Looks Yellow"])))),
    do: $location(_templateObject17$7 || (_templateObject17$7 = _taggedTemplateLiteral(["The Skeleton Store"]))),
    outfit: () => uniform({
      canAttack: false,
      changes: {
        shirt: $item(_templateObject18$7 || (_templateObject18$7 = _taggedTemplateLiteral(["Jurassic Parka"]))),
        modes: {
          parka: "dilophosaur"
        },
        acc3: $item(_templateObject19$7 || (_templateObject19$7 = _taggedTemplateLiteral(["Peridot of Peril"])))
      }
    }),
    choices: peridotChoice($monster(_templateObject20$7 || (_templateObject20$7 = _taggedTemplateLiteral(["novelty tropical skeleton"])))),
    combat: new CSStrategy(() => Macro.skill($skill(_templateObject21$7 || (_templateObject21$7 = _taggedTemplateLiteral(["Spit jurassic acid"])))))
  }, {
    name: "Evil Olive",
    class: $classes(_templateObject22$7 || (_templateObject22$7 = _taggedTemplateLiteral(["Disco Bandit, Accordion Thief"]))),
    completed: () => have$c($item(_templateObject23$7 || (_templateObject23$7 = _taggedTemplateLiteral(["jumbo olive"])))),
    ready: () => !have$c($effect(_templateObject24$7 || (_templateObject24$7 = _taggedTemplateLiteral(["Everything Looks Yellow"])))),
    do: () => reminisce($monster(_templateObject25$7 || (_templateObject25$7 = _taggedTemplateLiteral(["Evil Olive"])))),
    outfit: () => uniform({
      canAttack: false,
      changes: {
        shirt: $item(_templateObject26$7 || (_templateObject26$7 = _taggedTemplateLiteral(["Jurassic Parka"]))),
        modes: {
          parka: "dilophosaur"
        }
      }
    }),
    combat: new CSStrategy(() => Macro.skill($skill(_templateObject27$7 || (_templateObject27$7 = _taggedTemplateLiteral(["Spit jurassic acid"])))))
  }],
  outfit: () => ({
    hat: $items(_templateObject28$7 || (_templateObject28$7 = _taggedTemplateLiteral(["astral chapeau, Iunion Crown"]))),
    shirt: $item(_templateObject29$7 || (_templateObject29$7 = _taggedTemplateLiteral(["Jurassic Parka"]))),
    pants: $item(_templateObject30$7 || (_templateObject30$7 = _taggedTemplateLiteral(["Cargo Cultist Shorts"]))),
    weapon: $item(_templateObject31$7 || (_templateObject31$7 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
    offhand: $item(_templateObject32$7 || (_templateObject32$7 = _taggedTemplateLiteral(["august scepter"]))),
    acc1: $item(_templateObject33$7 || (_templateObject33$7 = _taggedTemplateLiteral(["Eight Days a Week Pill Keeper"]))),
    acc2: $item(_templateObject34$7 || (_templateObject34$7 = _taggedTemplateLiteral(["Powerful Glove"]))),
    acc3: $item(_templateObject35$7 || (_templateObject35$7 = _taggedTemplateLiteral(["Guzzlr tablet"]))),
    familiar: $familiar(_templateObject36$7 || (_templateObject36$7 = _taggedTemplateLiteral(["Left-Hand Man"]))),
    famequip: $items(_templateObject37$6 || (_templateObject37$6 = _taggedTemplateLiteral(["Abracandalabra, unbreakable umbrella"]))),
    modes: {
      parka: "ghostasaurus"
    }
  })
};

var _templateObject$9, _templateObject2$9, _templateObject3$8, _templateObject4$8, _templateObject5$8, _templateObject6$8, _templateObject7$8, _templateObject8$8, _templateObject9$8, _templateObject0$8, _templateObject1$8, _templateObject10$8, _templateObject11$8;
var GLOBAL_TASKS = [{
  name: "Beaten Up!",
  completed: () => !have$c($effect(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(["Beaten Up"])))),
  ready: () => "Poetic Justice" !== get$2("lastEncounter"),
  do: () => kolmafia.abort("Beaten up!")
}, {
  name: "Sweat Out some Booze",
  completed: () => get$2("_sweatOutSomeBoozeUsed") >= 3,
  ready: () => kolmafia.myInebriety() > 0 && get$2("sweat") >= 25,
  do: () => kolmafia.useSkill($skill(_templateObject2$9 || (_templateObject2$9 = _taggedTemplateLiteral(["Sweat Out Some Booze"])))),
  outfit: {
    pants: $item(_templateObject3$8 || (_templateObject3$8 = _taggedTemplateLiteral(["designer sweatpants"])))
  }
}, {
  name: "Numberology",
  ready: () => Object.values(kolmafia.reverseNumberology()).includes(69),
  completed: () => get$2("_universeCalculated") >= (get$2("skillLevel144") > 3 ? 2 : get$2("skillLevel144")),
  do: () => kolmafia.cliExecute("numberology 69")
}, {
  name: "June Cleaver",
  completed: () => get$2("_juneCleaverFightsLeft") > 0,
  ready: () => !exists("portscan.edu"),
  do: () => withProperty("recoveryScript", "", () => {
    kolmafia.adv1($location(_templateObject4$8 || (_templateObject4$8 = _taggedTemplateLiteral(["Noob Cave"]))), -1, "");
    if (get$2("lastEncounter") === "Poetic Justice") kolmafia.useSkill($skill(_templateObject5$8 || (_templateObject5$8 = _taggedTemplateLiteral(["Tongue of the Walrus"]))));
  }),
  outfit: {
    weapon: $item(_templateObject6$8 || (_templateObject6$8 = _taggedTemplateLiteral(["June cleaver"])))
  }
}, {
  name: "Ghost",
  completed: () => get$2("questPAGhost") === "unstarted",
  ready: () => have$c($item(_templateObject7$8 || (_templateObject7$8 = _taggedTemplateLiteral(["protonic accelerator pack"])))) && get$2("questPAGhost") !== "unstarted" && !!get$2("ghostLocation") && !have$c($effect(_templateObject8$8 || (_templateObject8$8 = _taggedTemplateLiteral(["Meteor Showered"])))),
  do: () => get$2("ghostLocation") ?? kolmafia.abort("Failed to identify ghost location"),
  combat: new CSStrategy(() => Macro.delevel().easyFight().trySkill($skill(_templateObject9$8 || (_templateObject9$8 = _taggedTemplateLiteral(["Shoot Ghost"])))).trySkill($skill(_templateObject0$8 || (_templateObject0$8 = _taggedTemplateLiteral(["Shoot Ghost"])))).trySkill($skill(_templateObject1$8 || (_templateObject1$8 = _taggedTemplateLiteral(["Shoot Ghost"])))).trySkill($skill(_templateObject10$8 || (_templateObject10$8 = _taggedTemplateLiteral(["Trap Ghost"]))))),
  outfit: () => uniform({
    changes: {
      back: $item(_templateObject11$8 || (_templateObject11$8 = _taggedTemplateLiteral(["protonic accelerator pack"])))
    }
  })
}];
var GLOBAL_QUEST = {
  name: "Global",
  tasks: GLOBAL_TASKS
};

var _templateObject$8, _templateObject2$8;
var HIGHLIGHT = kolmafia.isDarkMode() ? "yellow" : "blue";
var CSEngine = /*#__PURE__*/function (_Engine) {
  function CSEngine(quest) {
    var _this;
    _classCallCheck(this, CSEngine);
    _this = _callSuper(this, CSEngine, [getTasks([GLOBAL_QUEST, quest])]);
    _defineProperty(_this, "propertyManager", CSEngine.propertyManager);
    _this.csOptions = quest;
    _this.turnsSpent = quest.turnsSpent;
    _this.name = _this.csOptions.type === "MISC" ? _this.csOptions.name : _this.csOptions.test.statName;
    return _this;
  }
  _inherits(CSEngine, _Engine);
  return _createClass(CSEngine, [{
    key: "destruct",
    value: function destruct() {
      kolmafia.setAutoAttack(0);
    }
  }, {
    key: "available",
    value: function available(task) {
      var core = undelay(task.core);
      var taskClass = undelay(task.class);
      return _superPropGet(CSEngine, "available", this, 3)([task]) && (!core || core === CSEngine.core) && (!taskClass || taskClass.includes(kolmafia.myClass()));
    }
  }, {
    key: "initPropertiesManager",
    value: function initPropertiesManager() {}
  }, {
    key: "turns",
    get: function get() {
      if (!this.turnsSpent) return 0;
      return undelay(this.turnsSpent);
    }
  }, {
    key: "runTest",
    value: function runTest() {
      var loggingFunction = action => this.csOptions.type === "MISC" ? CommunityService.logTask(this.name, action) : this.csOptions.test.run(action, this.csOptions.maxTurns);
      try {
        var result = loggingFunction(() => {
          this.run();
          if (this.csOptions.type === "SERVICE") {
            var spec = this.csOptions.outfit();
            Outfit.from(spec, new Error("Failed to equip outfit for ".concat(this.name, ". Also, that outfit is ").concat(kolmafia.toJson(Object.fromEntries(Object.entries(spec).filter(_ref => {
              var _ref2 = _slicedToArray(_ref, 1),
                key = _ref2[0];
              return key !== "afterDress";
            })))))).dress();
            burnLibrams();
          }
          return this.turns;
        });
        var warning = this.csOptions.type === "MISC" ? "Failed to execute ".concat(this.name, "!") : "Failed to cap ".concat(this.name, "!");
        if (result === "failed") throw new Error(warning);
        if (result === "already completed") throw new Error("Libram thinks we already completed ".concat(this.name, " but we beg to differ"));
      } finally {
        this.destruct();
      }
    }
  }], [{
    key: "core",
    get: function get() {
      return CSEngine.core_;
    }
  }, {
    key: "initiate",
    value: function initiate() {
      CSEngine.propertyManager.set(_objectSpread2(_objectSpread2({}, CSEngine.defaultSettings), {}, {
        customCombatScript: "grimoire_macro",
        logPreferenceChangeFilter: _toConsumableArray(new Set([].concat(_toConsumableArray(get$2("logPreferenceChangeFilter").split(",")), ["libram_savedMacro", "maximizerMRUList", "testudinalTeachings", "_lastCombatStarted"]))).sort().filter(a => a).join(","),
        requireBoxServants: false
      }));
      CSEngine.propertyManager.setChoices({
        1467: 3,
        1468: byStat({
          Moxie: 1,
          default: 2
        }),
        1469: 3,
        1470: byStat({
          Muscle: 3,
          default: 2
        }),
        1471: byStat({
          Mysticality: 3,
          default: 1
        }),
        1472: byStat({
          Moxie: 3,
          default: 1
        }),
        1473: 1,
        1474: byStat({
          Mysticality: 1,
          Moxie: 2,
          Muscle: 3
        }),
        1475: byStat({
          Muscle: 2,
          default: 1
        })
      });
      if (!kolmafia.readCcs("grimoire_macro")) {
        kolmafia.writeCcs("[ default ]\nabort", "grimoire_macro");
      }
    }
  }, {
    key: "runTests",
    value: function runTests() {
      if (kolmafia.myPath() !== $path(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral(["Community Service"])))) {
        kolmafia.abort("phccs doesn't ascend on your behalf! Run phccs_gash to ascend.");
      }
      kolmafia.visitUrl("council.php");
      CSEngine.initiate();
      try {
        for (var _len = arguments.length, quests = new Array(_len), _key = 0; _key < _len; _key++) {
          quests[_key] = arguments[_key];
        }
        for (var _i = 0, _quests = quests; _i < _quests.length; _i++) {
          var quest = _quests[_i];
          var type = quest.type;
          if (type === "MISC" || !quest.test.isDone()) {
            var engine = new CSEngine(quest);
            engine.runTest();
          }
        }
        if (CSEngine.core === "soft") {
          CommunityService.donate();
          kolmafia.cliExecute("refresh all");
          kolmafia.cliExecute(get$2("kingLiberatedScript"));
          uneffect($effect(_templateObject2$8 || (_templateObject2$8 = _taggedTemplateLiteral(["Feeling Lost"]))));
        }
        if (get$2("_cloudTalkSmoker")) {
          kolmafia.print("".concat(get$2("_cloudTalkSmoker").slice(10), " has a message for you: ").concat(get$2("_cloudTalkMessage")));
        }
        if (["food", "booze"].includes(get$2("_questPartyFairQuest"))) {
          kolmafia.print("Talk to Gerald/ine!");
        }
      } finally {
        CSEngine.propertyManager.resetAll();
        CommunityService.printLog(HIGHLIGHT);
      }
    }
  }]);
}(Engine);
_defineProperty(CSEngine, "propertyManager", new PropertiesManager());
_defineProperty(CSEngine, "core_", kolmafia.inHardcore() ? "hard" : "soft");

var _templateObject$7, _templateObject2$7, _templateObject3$7, _templateObject4$7, _templateObject5$7, _templateObject6$7, _templateObject7$7, _templateObject8$7, _templateObject9$7, _templateObject0$7, _templateObject1$7, _templateObject10$7, _templateObject11$7, _templateObject12$7, _templateObject13$6, _templateObject14$6, _templateObject15$6, _templateObject16$6, _templateObject17$6, _templateObject18$6, _templateObject19$6, _templateObject20$6, _templateObject21$6, _templateObject22$6, _templateObject23$6, _templateObject24$6, _templateObject25$6, _templateObject26$6, _templateObject27$6, _templateObject28$6, _templateObject29$6, _templateObject30$6, _templateObject31$6, _templateObject32$6, _templateObject33$6, _templateObject34$6, _templateObject35$6, _templateObject36$6, _templateObject37$5, _templateObject38$5, _templateObject39$5, _templateObject40$5, _templateObject41$5, _templateObject42$5, _templateObject43$5, _templateObject44$5, _templateObject45$5, _templateObject46$5, _templateObject47$5, _templateObject48$5, _templateObject49$5, _templateObject50$5, _templateObject51$5, _templateObject52$4, _templateObject53$3, _templateObject54$3, _templateObject55$3, _templateObject56$3, _templateObject57$3, _templateObject58$3;
var familiar = have$c($familiar(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["Comma Chameleon"])))) ? $familiar(_templateObject2$7 || (_templateObject2$7 = _taggedTemplateLiteral(["Comma Chameleon"]))) : $familiar(_templateObject3$7 || (_templateObject3$7 = _taggedTemplateLiteral(["Mini-Trainbot"])));
var FamiliarWeight = {
  name: "Familiar Weight",
  type: "SERVICE",
  test: CommunityService.FamiliarWeight,
  outfit: () => _objectSpread2(_objectSpread2({
    hat: $item(_templateObject4$7 || (_templateObject4$7 = _taggedTemplateLiteral(["Daylight Shavings Helmet"]))),
    weapon: $item(_templateObject5$7 || (_templateObject5$7 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
    offhand: $items(_templateObject6$7 || (_templateObject6$7 = _taggedTemplateLiteral(["burning paper crane, familiar scrapbook"]))),
    pants: $items(_templateObject7$7 || (_templateObject7$7 = _taggedTemplateLiteral(["repaid diaper, Great Wolf's beastly trousers, designer sweatpants"]))),
    acc1: $item(_templateObject8$7 || (_templateObject8$7 = _taggedTemplateLiteral(["Beach Comb"]))),
    acc2: $item(_templateObject9$7 || (_templateObject9$7 = _taggedTemplateLiteral(["Brutal brogues"]))),
    acc3: $item(_templateObject0$7 || (_templateObject0$7 = _taggedTemplateLiteral(["hewn moon-rune spoon"]))),
    familiar
  }, familiar === $familiar(_templateObject1$7 || (_templateObject1$7 = _taggedTemplateLiteral(["Comma Chameleon"]))) ? $item.none : $item(_templateObject10$7 || (_templateObject10$7 = _taggedTemplateLiteral(["overloaded Yule battery"])))), {}, {
    back: $items(_templateObject11$7 || (_templateObject11$7 = _taggedTemplateLiteral(["Buddy Bjorn, protonic accelerator pack"]))),
    riders: {
      "buddy-bjorn": $familiar(_templateObject12$7 || (_templateObject12$7 = _taggedTemplateLiteral(["Misshapen Animal Skeleton"])))
    }
  }),
  turnsSpent: 0,
  maxTurns: 30,
  tasks: [].concat(_toConsumableArray(commonFamiliarWeightBuffs()), [potionTask($item(_templateObject13$6 || (_templateObject13$6 = _taggedTemplateLiteral(["short stack of pancakes"])))), {
    name: "Get Familiar Equipment",
    completed: () => have$c($item(_templateObject14$6 || (_templateObject14$6 = _taggedTemplateLiteral(["overloaded Yule battery"])))) || have$c($item(_templateObject15$6 || (_templateObject15$6 = _taggedTemplateLiteral(["homemade robot gear"])))) || get$2("commaFamiliar") === $familiar(_templateObject16$6 || (_templateObject16$6 = _taggedTemplateLiteral(["Homemade Robot"]))),
    do: () => {
      if (!have$c($item(_templateObject17$6 || (_templateObject17$6 = _taggedTemplateLiteral(["box of Familiar Jacks"]))))) kolmafia.create($item(_templateObject18$6 || (_templateObject18$6 = _taggedTemplateLiteral(["box of Familiar Jacks"]))));
      kolmafia.use($item(_templateObject19$6 || (_templateObject19$6 = _taggedTemplateLiteral(["box of Familiar Jacks"]))));
    },
    outfit: {
      familiar: familiar === $familiar(_templateObject20$6 || (_templateObject20$6 = _taggedTemplateLiteral(["Comma Chameleon"]))) ? $familiar(_templateObject21$6 || (_templateObject21$6 = _taggedTemplateLiteral(["Homemade Robot"]))) : familiar
    }
  }, {
    name: "Feed Chameleon",
    completed: () => get$2("commaFamiliar") === $familiar(_templateObject22$6 || (_templateObject22$6 = _taggedTemplateLiteral(["Homemade Robot"]))),
    ready: () => have$c($familiar(_templateObject23$6 || (_templateObject23$6 = _taggedTemplateLiteral(["Comma Chameleon"])))),
    do: () => {
      kolmafia.visitUrl("inv_equip.php?which=2&action=equip&whichitem=".concat(kolmafia.toInt($item(_templateObject24$6 || (_templateObject24$6 = _taggedTemplateLiteral(["homemade robot gear"])))), "&pwd"));
      kolmafia.visitUrl("charpane.php");
    },
    outfit: {
      familiar: $familiar(_templateObject25$6 || (_templateObject25$6 = _taggedTemplateLiteral(["Comma Chameleon"])))
    }
  }, {
    name: "Paper Crane",
    completed: () => have$c($item(_templateObject26$6 || (_templateObject26$6 = _taggedTemplateLiteral(["burning paper crane"])))),
    do: () => kolmafia.create($item(_templateObject27$6 || (_templateObject27$6 = _taggedTemplateLiteral(["burning paper crane"])))),
    ready: () => have$c($item(_templateObject28$6 || (_templateObject28$6 = _taggedTemplateLiteral(["burning newspaper"]))))
  }, {
    name: "Shorty Fights (Witchess)",
    completed: () => [$effect(_templateObject29$6 || (_templateObject29$6 = _taggedTemplateLiteral(["Shortly Stacked"]))), $item(_templateObject30$6 || (_templateObject30$6 = _taggedTemplateLiteral(["short stack of pancakes"])))].some(x => have$c(x)),
    ready: () => availableFights() >= 11 - get$2("_shortOrderCookCharge") && 5 > fightsDone(),
    do: () => fightPiece($monster(_templateObject31$6 || (_templateObject31$6 = _taggedTemplateLiteral(["Witchess Bishop"])))),
    outfit: () => uniform({
      changes: {
        familiar: $familiar(_templateObject32$6 || (_templateObject32$6 = _taggedTemplateLiteral(["Shorter-Order Cook"])))
      }
    }),
    combat: new CSStrategy(() => Macro.defaultKill())
  }, {
    name: "Shorty Fights (BRICKO)",
    completed: () => [$effect(_templateObject33$6 || (_templateObject33$6 = _taggedTemplateLiteral(["Shortly Stacked"]))), $item(_templateObject34$6 || (_templateObject34$6 = _taggedTemplateLiteral(["short stack of pancakes"])))].some(x => have$c(x)),
    ready: () => availableFights() >= 11 - get$2("_shortOrderCookCharge") && have$c($item(_templateObject35$6 || (_templateObject35$6 = _taggedTemplateLiteral(["BRICKO eye brick"])))),
    do: () => {
      if (!have$c($item(_templateObject36$6 || (_templateObject36$6 = _taggedTemplateLiteral(["BRICKO ooze"]))))) kolmafia.create($item(_templateObject37$5 || (_templateObject37$5 = _taggedTemplateLiteral(["BRICKO ooze"]))));
      kolmafia.use($item(_templateObject38$5 || (_templateObject38$5 = _taggedTemplateLiteral(["BRICKO ooze"]))));
      kolmafia.runCombat();
    },
    outfit: () => uniform({
      changes: {
        familiar: $familiar(_templateObject39$5 || (_templateObject39$5 = _taggedTemplateLiteral(["Shorter-Order Cook"])))
      }
    }),
    combat: new CSStrategy(() => Macro.defaultKill())
  }, {
    name: "Garbage Fights (Witchess)",
    completed: () => $familiar(_templateObject40$5 || (_templateObject40$5 = _taggedTemplateLiteral(["Garbage Fire"]))).dropsToday > 0,
    ready: () => availableFights() >= 30 - get$2("garbageFireProgress") && 5 > fightsDone(),
    do: () => fightPiece($monster(_templateObject41$5 || (_templateObject41$5 = _taggedTemplateLiteral(["Witchess Bishop"])))),
    outfit: () => uniform({
      changes: {
        familiar: $familiar(_templateObject42$5 || (_templateObject42$5 = _taggedTemplateLiteral(["Garbage Fire"])))
      }
    }),
    combat: new CSStrategy(() => Macro.defaultKill())
  }, {
    name: "Garbage Fights (BRICKO)",
    completed: () => $familiar(_templateObject43$5 || (_templateObject43$5 = _taggedTemplateLiteral(["Garbage Fire"]))).dropsToday > 0,
    ready: () => availableFights() >= 30 - get$2("garbageFireProgress") && have$c($item(_templateObject44$5 || (_templateObject44$5 = _taggedTemplateLiteral(["BRICKO eye brick"])))),
    do: () => {
      if (!have$c($item(_templateObject45$5 || (_templateObject45$5 = _taggedTemplateLiteral(["BRICKO ooze"]))))) kolmafia.create($item(_templateObject46$5 || (_templateObject46$5 = _taggedTemplateLiteral(["BRICKO ooze"]))));
      kolmafia.use($item(_templateObject47$5 || (_templateObject47$5 = _taggedTemplateLiteral(["BRICKO ooze"]))));
      kolmafia.runCombat();
    },
    outfit: () => uniform({
      changes: {
        familiar: $familiar(_templateObject48$5 || (_templateObject48$5 = _taggedTemplateLiteral(["Garbage Fire"])))
      }
    }),
    combat: new CSStrategy(() => Macro.defaultKill())
  }, {
    name: "Icy Revenge",
    ready: () => have$c($item(_templateObject49$5 || (_templateObject49$5 = _taggedTemplateLiteral(["love song of icy revenge"])))),
    completed: () => have$c($effect(_templateObject50$5 || (_templateObject50$5 = _taggedTemplateLiteral(["Cold Hearted"]))), 20),
    do: () => kolmafia.use($item(_templateObject51$5 || (_templateObject51$5 = _taggedTemplateLiteral(["love song of icy revenge"]))))
  }, {
    name: "Blue Taffy",
    ready: () => have$c($item(_templateObject52$4 || (_templateObject52$4 = _taggedTemplateLiteral(["pulled blue taffy"])))),
    completed: () => have$c($effect(_templateObject53$3 || (_templateObject53$3 = _taggedTemplateLiteral(["Blue Swayed"]))), 50),
    do: () => kolmafia.use($item(_templateObject54$3 || (_templateObject54$3 = _taggedTemplateLiteral(["pulled blue taffy"]))))
  }, {
    name: "Tune Moon",
    ready: () => kolmafia.mySign() !== "Platypus",
    completed: () => get$2("moonTuned"),
    do: () => {
      kolmafia.buy(1, $item(_templateObject55$3 || (_templateObject55$3 = _taggedTemplateLiteral(["frilly skirt"]))));
      kolmafia.buy(1, $item(_templateObject56$3 || (_templateObject56$3 = _taggedTemplateLiteral(["maiden wig"]))));
      unequip($item(_templateObject57$3 || (_templateObject57$3 = _taggedTemplateLiteral(["hewn moon-rune spoon"]))));
      kolmafia.visitUrl("inv_use.php?whichitem=10254&pwd&doit=96&whichsign=4");
    },
    core: "soft"
  }, potionTask($item(_templateObject58$3 || (_templateObject58$3 = _taggedTemplateLiteral(["silver face paint"])))), meteorShower()])
};

var _templateObject$6, _templateObject2$6, _templateObject3$6, _templateObject4$6, _templateObject5$6, _templateObject6$6, _templateObject7$6, _templateObject8$6, _templateObject9$6, _templateObject0$6, _templateObject1$6, _templateObject10$6, _templateObject11$6, _templateObject12$6, _templateObject13$5, _templateObject14$5, _templateObject15$5, _templateObject16$5, _templateObject17$5, _templateObject18$5, _templateObject19$5, _templateObject20$5, _templateObject21$5, _templateObject22$5, _templateObject23$5, _templateObject24$5, _templateObject25$5, _templateObject26$5, _templateObject27$5, _templateObject28$5, _templateObject29$5, _templateObject30$5, _templateObject31$5, _templateObject32$5, _templateObject33$5, _templateObject34$5, _templateObject35$5, _templateObject36$5;
var buffs$2 = $effects(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["Elemental Saucesphere, Astral Shell"])));
var HotRes = {
  name: "Hot Res",
  type: "SERVICE",
  test: CommunityService.HotRes,
  outfit: () => ({
    hat: $item(_templateObject2$6 || (_templateObject2$6 = _taggedTemplateLiteral(["Daylight Shavings Helmet"]))),
    shirt: $items(_templateObject3$6 || (_templateObject3$6 = _taggedTemplateLiteral(["Jurassic Parka, denim jacket"]))),
    back: $item(_templateObject4$6 || (_templateObject4$6 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
    weapon: $item(_templateObject5$6 || (_templateObject5$6 = _taggedTemplateLiteral(["industrial fire extinguisher"]))),
    offhand: $items(_templateObject6$6 || (_templateObject6$6 = _taggedTemplateLiteral(["meteorite guard, Fourth of May Cosplay Saber"]))),
    pants: $item(_templateObject7$6 || (_templateObject7$6 = _taggedTemplateLiteral(["designer sweatpants"]))),
    acc1: $item(_templateObject8$6 || (_templateObject8$6 = _taggedTemplateLiteral(["your cowboy boots"]))),
    acc2: $item(_templateObject9$6 || (_templateObject9$6 = _taggedTemplateLiteral(["Brutal brogues"]))),
    acc3: $item(_templateObject0$6 || (_templateObject0$6 = _taggedTemplateLiteral(["cursed monkey's paw"]))),
    familiar: $familiar(_templateObject1$6 || (_templateObject1$6 = _taggedTemplateLiteral(["Exotic Parrot"]))),
    famequip: $item(_templateObject10$6 || (_templateObject10$6 = _taggedTemplateLiteral(["tiny stillsuit"]))),
    modes: {
      parka: "pterodactyl",
      retrocape: ["vampire", "hold"]
    }
  }),
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [].concat(_toConsumableArray(restoreBuffTasks(buffs$2)), _toConsumableArray(commonFamiliarWeightBuffs()), [_objectSpread2(_objectSpread2({}, beachTask($effect(_templateObject11$6 || (_templateObject11$6 = _taggedTemplateLiteral(["Hot-Headed"]))))), {}, {
    core: "hard"
  }), beachTask($effect(_templateObject12$6 || (_templateObject12$6 = _taggedTemplateLiteral(["Does It Have a Skull In There??"])))), asdonTask("Safely"), {
    name: "Extinguisher",
    completed: () => have$c($effect(_templateObject13$5 || (_templateObject13$5 = _taggedTemplateLiteral(["Fireproof Foam Suit"])))),
    ready: () => get$2("_saberForceUses") < 5,
    do: () => {
      kolmafia.adv1($location(_templateObject14$5 || (_templateObject14$5 = _taggedTemplateLiteral(["The Dire Warren"]))), -1, "");
      if (kolmafia.handlingChoice()) kolmafia.runChoice(-1);
    },
    choices: {
      [1387]: 3
    },
    outfit: () => uniform({
      changes: {
        familiar: $familiar.none,
        famequip: $item.none,
        weapon: $item(_templateObject15$5 || (_templateObject15$5 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
        offhand: $item(_templateObject16$5 || (_templateObject16$5 = _taggedTemplateLiteral(["industrial fire extinguisher"])))
      }
    }),
    combat: new CSStrategy(() => Macro.skill($skill(_templateObject17$5 || (_templateObject17$5 = _taggedTemplateLiteral(["Fire Extinguisher: Foam Yourself"])))).skill($skill(_templateObject18$5 || (_templateObject18$5 = _taggedTemplateLiteral(["Use the Force"]))))),
    post: () => examine($item(_templateObject19$5 || (_templateObject19$5 = _taggedTemplateLiteral(["industrial fire extinguisher"]))))
  }, {
    core: "hard",
    name: "Pale Horse",
    completed: () => current() === "pale",
    do: () => changeHorse("pale")
  }, {
    name: "Deep Dark Visions",
    completed: () => have$c($effect(_templateObject20$5 || (_templateObject20$5 = _taggedTemplateLiteral(["Visions of the Deep Dark Deeps"]))), 20),
    do: () => {
      while (kolmafia.myHp() < kolmafia.myMaxhp()) {
        ensureMp(20);
        kolmafia.useSkill(1, $skill(_templateObject21$5 || (_templateObject21$5 = _taggedTemplateLiteral(["Cannelloni Cocoon"]))));
      }
      ensureMp(100);
      kolmafia.useSkill(1, $skill(_templateObject22$5 || (_templateObject22$5 = _taggedTemplateLiteral(["Deep Dark Visions"]))));
    },
    outfit: {
      hat: $item(_templateObject23$5 || (_templateObject23$5 = _taggedTemplateLiteral(["Daylight Shavings Helmet"]))),
      shirt: $items(_templateObject24$5 || (_templateObject24$5 = _taggedTemplateLiteral(["Jurassic Parka, denim jacket"]))),
      back: $item(_templateObject25$5 || (_templateObject25$5 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
      weapon: $item(_templateObject26$5 || (_templateObject26$5 = _taggedTemplateLiteral(["industrial fire extinguisher"]))),
      offhand: $item(_templateObject27$5 || (_templateObject27$5 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
      pants: $item(_templateObject28$5 || (_templateObject28$5 = _taggedTemplateLiteral(["Cargo Cultist Shorts"]))),
      acc1: $item(_templateObject29$5 || (_templateObject29$5 = _taggedTemplateLiteral(["your cowboy boots"]))),
      acc2: $item(_templateObject30$5 || (_templateObject30$5 = _taggedTemplateLiteral(["Brutal brogues"]))),
      acc3: $item(_templateObject31$5 || (_templateObject31$5 = _taggedTemplateLiteral(["cursed monkey's paw"]))),
      familiar: $familiar(_templateObject32$5 || (_templateObject32$5 = _taggedTemplateLiteral(["Exotic Parrot"]))),
      famequip: $item(_templateObject33$5 || (_templateObject33$5 = _taggedTemplateLiteral(["tiny stillsuit"]))),
      modes: {
        parka: "ghostasaurus",
        retrocape: ["vampire", "hold"]
      }
    }
  }, {
    name: "Meteorite Guard",
    completed: () => have$c($item(_templateObject34$5 || (_templateObject34$5 = _taggedTemplateLiteral(["meteorite guard"])))),
    ready: () => have$c($item(_templateObject35$5 || (_templateObject35$5 = _taggedTemplateLiteral(["metal meteoroid"])))),
    do: () => kolmafia.create($item(_templateObject36$5 || (_templateObject36$5 = _taggedTemplateLiteral(["meteorite guard"]))))
  }])
};

var _templateObject$5, _templateObject2$5, _templateObject3$5, _templateObject4$5, _templateObject5$5, _templateObject6$5, _templateObject7$5, _templateObject8$5, _templateObject9$5, _templateObject0$5, _templateObject1$5, _templateObject10$5, _templateObject11$5, _templateObject12$5, _templateObject13$4, _templateObject14$4, _templateObject15$4, _templateObject16$4, _templateObject17$4, _templateObject18$4, _templateObject19$4, _templateObject20$4, _templateObject21$4, _templateObject22$4, _templateObject23$4, _templateObject24$4, _templateObject25$4, _templateObject26$4, _templateObject27$4, _templateObject28$4, _templateObject29$4, _templateObject30$4, _templateObject31$4, _templateObject32$4, _templateObject33$4, _templateObject34$4, _templateObject35$4, _templateObject36$4, _templateObject37$4, _templateObject38$4, _templateObject39$4, _templateObject40$4, _templateObject41$4, _templateObject42$4, _templateObject43$4, _templateObject44$4, _templateObject45$4, _templateObject46$4, _templateObject47$4, _templateObject48$4, _templateObject49$4, _templateObject50$4, _templateObject51$4, _templateObject52$3, _templateObject53$2, _templateObject54$2, _templateObject55$2, _templateObject56$2, _templateObject57$2, _templateObject58$2, _templateObject59$2, _templateObject60$2, _templateObject61$2, _templateObject62$2, _templateObject63$1, _templateObject64$1, _templateObject65$1, _templateObject66$1, _templateObject67$1, _templateObject68$1, _templateObject69$1, _templateObject70$1, _templateObject71$1, _templateObject72$1, _templateObject73$1, _templateObject74, _templateObject75, _templateObject76, _templateObject77, _templateObject78, _templateObject79, _templateObject80, _templateObject81, _templateObject82, _templateObject83, _templateObject84, _templateObject85, _templateObject86, _templateObject87, _templateObject88, _templateObject89, _templateObject90, _templateObject91, _templateObject92, _templateObject93, _templateObject94, _templateObject95, _templateObject96, _templateObject97, _templateObject98, _templateObject99, _templateObject100, _templateObject101, _templateObject102, _templateObject103, _templateObject104, _templateObject105, _templateObject106, _templateObject107, _templateObject108, _templateObject109, _templateObject110, _templateObject111, _templateObject112, _templateObject113, _templateObject114, _templateObject115, _templateObject116, _templateObject117, _templateObject118, _templateObject119, _templateObject120, _templateObject121, _templateObject122, _templateObject123, _templateObject124, _templateObject125, _templateObject126, _templateObject127, _templateObject128, _templateObject129, _templateObject130, _templateObject131, _templateObject132, _templateObject133, _templateObject134, _templateObject135, _templateObject136, _templateObject137, _templateObject138, _templateObject139, _templateObject140, _templateObject141, _templateObject142, _templateObject143, _templateObject144, _templateObject145, _templateObject146, _templateObject147, _templateObject148, _templateObject149, _templateObject150, _templateObject151, _templateObject152, _templateObject153, _templateObject154, _templateObject155, _templateObject156, _templateObject157, _templateObject158, _templateObject159, _templateObject160, _templateObject161, _templateObject162, _templateObject163, _templateObject164, _templateObject165, _templateObject166, _templateObject167, _templateObject168, _templateObject169, _templateObject170, _templateObject171, _templateObject172, _templateObject173, _templateObject174, _templateObject175, _templateObject176, _templateObject177, _templateObject178, _templateObject179, _templateObject180, _templateObject181, _templateObject182, _templateObject183, _templateObject184, _templateObject185, _templateObject186;
var levellingComplete = get$2("csServicesPerformed").split(",").length > 1;
var lovePotionConsidered = false;
var queenPrep = false;
var CastSkills = [].concat(_toConsumableArray($skills(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["Advanced Saucecrafting, Advanced Cocktailcrafting, Acquire Rhinestones, Prevent Scurvy and Sobriety, Stevedave's Shanty of Superiority, Fat Leon's Phat Loot Lyric, Paul's Passionate Pop Song, Leash of Linguini, Blood Bond, Blood Bubble, Song of Bravado, Get Big, Mathematical Precision, Ruthless Efficiency, Carol of the Bulls, Rage of the Reindeer, Disco Aerobics, Manicotti Meditation, Moxie of the Mariachi, Patience of the Tortoise, Sauce Contemplation, Seal Clubbing Frenzy, Bend Hell, Astral Shell, Elemental Saucesphere, Scarysauce"])))), [byStat({
  Mysticality: $skill(_templateObject2$5 || (_templateObject2$5 = _taggedTemplateLiteral(["The Magical Mojomuscular Melody"]))),
  Muscle: $skill(_templateObject3$5 || (_templateObject3$5 = _taggedTemplateLiteral(["The Power Ballad of the Arrowsmith"]))),
  Moxie: $skill(_templateObject4$5 || (_templateObject4$5 = _taggedTemplateLiteral(["The Moxious Madrigal"])))
})]).map(s => ({
  name: s.name,
  do: () => {
    kolmafia.useSkill(s);
  },
  completed: () => s.buff ? have$c(kolmafia.toEffect(s)) : s.timescast >= s.dailylimit,
  ready: () => kolmafia.myMp() >= kolmafia.mpCost(s) && !queenPrep,
  outfit: () => uniform({
    changes: {
      offhand: $item(_templateObject5$5 || (_templateObject5$5 = _taggedTemplateLiteral(["April Shower Thoughts shield"])))
    }
  })
}));
var generalStoreItem = byStat({
  Muscle: $item(_templateObject6$5 || (_templateObject6$5 = _taggedTemplateLiteral(["Ben-Gal\u2122 Balm"]))),
  Mysticality: $item(_templateObject7$5 || (_templateObject7$5 = _taggedTemplateLiteral(["glittery mascara"]))),
  Moxie: $item(_templateObject8$5 || (_templateObject8$5 = _taggedTemplateLiteral(["hair spray"])))
});
var _byStat = byStat({
    Mysticality: {
      sauceFruit: $item(_templateObject9$5 || (_templateObject9$5 = _taggedTemplateLiteral(["grapefruit"]))),
      saucePotion: $item(_templateObject0$5 || (_templateObject0$5 = _taggedTemplateLiteral(["ointment of the occult"]))),
      sauceEffect: $effect(_templateObject1$5 || (_templateObject1$5 = _taggedTemplateLiteral(["Mystically Oiled"])))
    },
    Muscle: {
      sauceFruit: $item(_templateObject10$5 || (_templateObject10$5 = _taggedTemplateLiteral(["lemon"]))),
      saucePotion: $item(_templateObject11$5 || (_templateObject11$5 = _taggedTemplateLiteral(["philter of phorce"]))),
      sauceEffect: $effect(_templateObject12$5 || (_templateObject12$5 = _taggedTemplateLiteral(["Phorcefullness"])))
    },
    Moxie: {
      sauceFruit: $item(_templateObject13$4 || (_templateObject13$4 = _taggedTemplateLiteral(["olive"]))),
      saucePotion: $item(_templateObject14$4 || (_templateObject14$4 = _taggedTemplateLiteral(["serum of sarcasm"]))),
      sauceEffect: $effect(_templateObject15$4 || (_templateObject15$4 = _taggedTemplateLiteral(["Superhuman Sarcasm"])))
    }
  }),
  saucePotion = _byStat.saucePotion,
  sauceFruit = _byStat.sauceFruit,
  sauceEffect = _byStat.sauceEffect;
var lovePotion = $item(_templateObject16$4 || (_templateObject16$4 = _taggedTemplateLiteral(["Love Potion #XYZ"])));
var loveEffect = $effect(_templateObject17$4 || (_templateObject17$4 = _taggedTemplateLiteral(["Tainted Love Potion"])));
var Level = {
  type: "MISC",
  name: "Level",
  completed: () => levellingComplete,
  tasks: [{
    name: "Fold Shirt",
    completed: () => have$c($item(_templateObject18$4 || (_templateObject18$4 = _taggedTemplateLiteral(["makeshift garbage shirt"])))),
    do: () => kolmafia.cliExecute("fold makeshift garbage shirt")
  }, buskTask($item(_templateObject19$4 || (_templateObject19$4 = _taggedTemplateLiteral(["norwhal helmet"]))), $item.none, $item(_templateObject20$4 || (_templateObject20$4 = _taggedTemplateLiteral(["repaid diaper"]))), 0), buskTask($item(_templateObject21$4 || (_templateObject21$4 = _taggedTemplateLiteral(["Apriling band helmet"]))), $item(_templateObject22$4 || (_templateObject22$4 = _taggedTemplateLiteral(["makeshift garbage shirt"]))), $item(_templateObject23$4 || (_templateObject23$4 = _taggedTemplateLiteral(["union scalemail pants"]))), 1), buskTask($item(_templateObject24$4 || (_templateObject24$4 = _taggedTemplateLiteral(["coconut shell"]))), $item(_templateObject25$4 || (_templateObject25$4 = _taggedTemplateLiteral(["fresh coat of paint"]))), $item.none, 2), buskTask($item(_templateObject26$4 || (_templateObject26$4 = _taggedTemplateLiteral(["norwhal helmet"]))), $item(_templateObject27$4 || (_templateObject27$4 = _taggedTemplateLiteral(["fresh coat of paint"]))), $item(_templateObject28$4 || (_templateObject28$4 = _taggedTemplateLiteral(["union scalemail pants"]))), 3), buskTask($item.none, $item.none, $item(_templateObject29$4 || (_templateObject29$4 = _taggedTemplateLiteral(["repaid diaper"]))), 4), {
    name: "Ember",
    ready: () => get$2("_beretBuskingUses") >= 5 && get$2("_loveTunnelUsed") && have$c($effect(_templateObject30$4 || (_templateObject30$4 = _taggedTemplateLiteral(["Entauntauned"])))),
    completed: () => availableEmbers() <= 0,
    do: () => {
      kolmafia.buy($coinmaster(_templateObject31$4 || (_templateObject31$4 = _taggedTemplateLiteral(["Sept-Ember Censer"]))), 1, $item(_templateObject32$4 || (_templateObject32$4 = _taggedTemplateLiteral(["Mmm-brr! brand mouthwash"]))));
      kolmafia.use($item(_templateObject33$4 || (_templateObject33$4 = _taggedTemplateLiteral(["Mmm-brr! brand mouthwash"]))));
    },
    outfit: _objectSpread2({
      hat: $item(_templateObject34$4 || (_templateObject34$4 = _taggedTemplateLiteral(["prismatic beret"]))),
      weapon: $item(_templateObject35$4 || (_templateObject35$4 = _taggedTemplateLiteral(["McHugeLarge right pole"]))),
      offhand: $item(_templateObject36$4 || (_templateObject36$4 = _taggedTemplateLiteral(["McHugeLarge left pole"]))),
      back: $item(_templateObject37$4 || (_templateObject37$4 = _taggedTemplateLiteral(["McHugeLarge duffel bag"]))),
      shirt: $item(_templateObject38$4 || (_templateObject38$4 = _taggedTemplateLiteral(["Jurassic Parka"]))),
      modes: {
        parka: "kachungasaur"
      },
      pants: $item(_templateObject39$4 || (_templateObject39$4 = _taggedTemplateLiteral(["repaid diaper"]))),
      acc1: $item(_templateObject40$4 || (_templateObject40$4 = _taggedTemplateLiteral(["your cowboy boots"]))),
      acc2: $item(_templateObject41$4 || (_templateObject41$4 = _taggedTemplateLiteral(["McHugeLarge left ski"]))),
      acc3: $item(_templateObject42$4 || (_templateObject42$4 = _taggedTemplateLiteral(["McHugeLarge right ski"]))),
      familiar: $familiar(_templateObject43$4 || (_templateObject43$4 = _taggedTemplateLiteral(["Cooler Yeti"]))),
      famequip: $item(_templateObject44$4 || (_templateObject44$4 = _taggedTemplateLiteral(["tiny stillsuit"]))),
      beforeDress: [equipBluePlate]
    }, byStat({
      Muscle: {
        shirt: $item(_templateObject45$4 || (_templateObject45$4 = _taggedTemplateLiteral(["LOV Eardigan"])))
      },
      Moxie: {
        acc1: $item(_templateObject46$4 || (_templateObject46$4 = _taggedTemplateLiteral(["LOV Earrings"])))
      },
      Mysticality: {
        back: $item(_templateObject47$4 || (_templateObject47$4 = _taggedTemplateLiteral(["LOV Epaulettes"])))
      }
    }))
  }, {
    name: "Slay Camel",
    completed: () => get$2("_entauntaunedToday"),
    ready: () => have$c($item(_templateObject48$4 || (_templateObject48$4 = _taggedTemplateLiteral(["blue plate"])))),
    outfit: () => ({
      familiar: $familiar(_templateObject49$4 || (_templateObject49$4 = _taggedTemplateLiteral(["Melodramedary"]))),
      weapon: $item(_templateObject50$4 || (_templateObject50$4 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))
    }),
    do: () => {
      kolmafia.visitUrl("main.php?action=camel", false);
      kolmafia.runChoice(1);
    }
  }, innerElf(), {
    name: "That's Just Cloud Talk, Man",
    completed: () => getCloudBuffsToday() > 0,
    do: () => gaze()
  }, {
    name: SYNTH_EFFECT.name,
    completed: () => have$c(SYNTH_EFFECT),
    do: synthExp
  }, {
    name: "shower",
    completed: () => get$2("_aprilShower"),
    do: () => kolmafia.cliExecute("shower ".concat(kolmafia.myPrimestat()))
  }, {
    name: "Ten-Percent Bonus",
    completed: () => !have$c($item(_templateObject51$4 || (_templateObject51$4 = _taggedTemplateLiteral(["a ten-percent bonus"])))),
    outfit: () => uniform({
      changes: {
        offhand: $item(_templateObject52$3 || (_templateObject52$3 = _taggedTemplateLiteral(["familiar scrapbook"])))
      }
    }),
    effects: byStat({
      Mysticality: $effects(_templateObject53$2 || (_templateObject53$2 = _taggedTemplateLiteral(["Inscrutable Gaze"]))),
      default: []
    }),
    do: () => kolmafia.use(1, $item(_templateObject54$2 || (_templateObject54$2 = _taggedTemplateLiteral(["a ten-percent bonus"]))))
  }, {
    name: "Bastille",
    completed: () => get$2("_bastilleGames") > 0,
    do: () => kolmafia.cliExecute("bastille ".concat(kolmafia.myPrimestat(), " brutalist"))
  }, {
    name: "Get Love Potion",
    completed: () => have$c(lovePotion) || have$c(loveEffect),
    do: () => {
      kolmafia.useSkill(1, $skill(_templateObject55$2 || (_templateObject55$2 = _taggedTemplateLiteral(["Love Mixology"]))));
      lovePotionConsidered = false;
    }
  }, {
    name: "Consider Love Potion",
    ready: () => have$c(lovePotion),
    completed: () => lovePotionConsidered || have$c(loveEffect),
    do: () => {
      kolmafia.visitUrl("desc_effect.php?whicheffect=".concat(loveEffect.descid));
      lovePotionConsidered = true;
      if (kolmafia.numericModifier(loveEffect, kolmafia.myPrimestat().toString()) > 10 && kolmafia.Stat.all().every(stat => kolmafia.numericModifier(loveEffect, stat.toString()) > -30) && kolmafia.numericModifier(loveEffect, "Maximum HP Percent") > -1e-3) {
        kolmafia.use(1, lovePotion);
      }
    }
  }, favouriteBirdTask("".concat(kolmafia.myPrimestat().toString(), " Percent")), {
    name: "Vaccine",
    completed: () => get$2("_spacegateVaccine"),
    ready: () => get$2("spacegateVaccine2") && get$2("spacegateAlways"),
    do: () => kolmafia.cliExecute("spacegate vaccine 2")
  }, {
    name: "Boxing Daybuff",
    completed: () => get$2("_daycareSpa"),
    do: () => kolmafia.cliExecute("daycare ".concat(kolmafia.myPrimestat().toString().toLowerCase()))
  }, beachTask($effect(_templateObject56$2 || (_templateObject56$2 = _taggedTemplateLiteral(["You Learned Something Maybe!"])))), beachTask($effect(_templateObject57$2 || (_templateObject57$2 = _taggedTemplateLiteral(["We're All Made of Starfish"])))), beachTask($effect(_templateObject58$2 || (_templateObject58$2 = _taggedTemplateLiteral(["Lack of Body-Building"])))), {
    name: "Smile of Lyle",
    completed: () => get$2("_lyleFavored"),
    do: () => kolmafia.cliExecute("monorail buff")
  }, {
    name: "Telescope",
    completed: () => get$2("telescopeLookedHigh"),
    do: () => kolmafia.cliExecute("telescope look high")
  }, {
    name: "Cross Streams",
    completed: () => get$2("_streamsCrossed"),
    do: () => kolmafia.cliExecute("crossstreams")
  }, {
    name: "Buy General Store Potion",
    completed: () => have$c(generalStoreItem) || have$c(kolmafia.effectModifier(generalStoreItem, "Effect")),
    do: () => kolmafia.buy(1, generalStoreItem)
  }, potionTask(generalStoreItem), {
    name: "Triple-Sized",
    completed: () => have$c($effect(_templateObject59$2 || (_templateObject59$2 = _taggedTemplateLiteral(["Triple-Sized"])))),
    do: () => kolmafia.useSkill($skill(_templateObject60$2 || (_templateObject60$2 = _taggedTemplateLiteral(["CHEAT CODE: Triple Size"]))), 1),
    outfit: {
      acc3: $item(_templateObject61$2 || (_templateObject61$2 = _taggedTemplateLiteral(["Powerful Glove"])))
    }
  }, {
    name: "Feel Excited",
    completed: () => get$2("_feelExcitementUsed") > 0,
    do: () => kolmafia.useSkill($skill(_templateObject62$2 || (_templateObject62$2 = _taggedTemplateLiteral(["Feel Excitement"]))))
  }].concat(_toConsumableArray($items(_templateObject63$1 || (_templateObject63$1 = _taggedTemplateLiteral(["votive of confidence, natural magick candle, MayDay\u2122 supply package, Napalm In The Morning\u2122 candle"]))).map(potionTask)), [{
    name: "Acquire Blue Rocket",
    completed: () => have$c($effect(_templateObject64$1 || (_templateObject64$1 = _taggedTemplateLiteral(["Glowing Blue"])))) || have$c($item(_templateObject65$1 || (_templateObject65$1 = _taggedTemplateLiteral(["blue rocket"])))),
    do: () => {
      kolmafia.visitUrl("clan_viplounge.php?action=fwshop&whichfloor=2");
      kolmafia.buy(1, $item(_templateObject66$1 || (_templateObject66$1 = _taggedTemplateLiteral(["blue rocket"]))));
    }
  }, {
    // not strictly necessary
    name: "Acquire Casting Items",
    completed: () => $items(_templateObject67$1 || (_templateObject67$1 = _taggedTemplateLiteral(["turtle totem, saucepan"]))).every(i => have$c(i)),
    do: () => $items(_templateObject68$1 || (_templateObject68$1 = _taggedTemplateLiteral(["turtle totem, saucepan"]))).forEach(i => !have$c(i) && kolmafia.cliExecute("acquire ".concat(i)))
  }], _toConsumableArray(CastSkills), [_objectSpread2(_objectSpread2({}, restore([])), {}, {
    ready: () => !queenPrep,
    completed: () => CastSkills.every(_ref => {
      var completed = _ref.completed;
      return completed();
    }),
    outfit: {
      offhand: $items(_templateObject69$1 || (_templateObject69$1 = _taggedTemplateLiteral(["Abracandalabra, august scepter"])))
    }
  })], _toConsumableArray(restoreBuffTasks(byStat({
    Mysticality: $effects(_templateObject70$1 || (_templateObject70$1 = _taggedTemplateLiteral(["Inscrutable Gaze"]))),
    Moxie: $effects(_templateObject71$1 || (_templateObject71$1 = _taggedTemplateLiteral(["Quiet Desperation"]))),
    Muscle: $effects(_templateObject72$1 || (_templateObject72$1 = _taggedTemplateLiteral(["Quiet Determination"])))
  }))), _toConsumableArray(restoreBuffTasks($effects(_templateObject73$1 || (_templateObject73$1 = _taggedTemplateLiteral(["Empathy"]))))), [skillTask({
    skill: $skill(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral(["Empathy of the Newt"]))),
    effect: $effect(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral(["Thoughtful Empathy"])))
  }, true), potionTask($item(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral(["green candy heart"])))), {
    name: "Witchess",
    completed: () => get$2("_witchessBuff"),
    do: () => kolmafia.cliExecute("witchess")
  }, beachTask($effect(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral(["Do I Know You From Somewhere?"])))), {
    name: "Get Range",
    completed: () => get$2("hasRange"),
    do: () => {
      if (!have$c($item(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral(["Dramatic\u2122 range"]))))) {
        kolmafia.buy(1, $item(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral(["Dramatic\u2122 range"]))));
      }
      kolmafia.use(1, $item(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral(["Dramatic\u2122 range"]))));
    }
  }, {
    name: "Make & Use Sauce Potion",
    completed: () => have$c(sauceEffect),
    ready: () => have$c(sauceFruit),
    do: () => {
      if (!have$c(saucePotion)) {
        kolmafia.create(1, saucePotion);
      }
      if (have$c(saucePotion)) {
        kolmafia.use(1, saucePotion);
      }
    }
  }, {
    name: "Set Snojo",
    completed: () => !!get$2("snojoSetting"),
    do: () => {
      kolmafia.visitUrl("place.php?whichplace=snojo&action=snojo_controller");
      kolmafia.runChoice(3);
    }
  }, {
    name: "Holiday Yoked, Giant Growth, and Blue Rocket",
    core: "hard",
    completed: () => have$c($effect(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral(["Holiday Yoked"])))),
    ready: () => have$c($item(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral(["green mana"])))) && get$2("_snojoFreeFights") < 10,
    do: $location(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral(["The X-32-F Combat Training Snowman"]))),
    outfit: () => uniform({
      changes: {
        familiar: $familiar(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral(["Ghost of Crimbo Carols"]))),
        famequip: $item.none
      }
    }),
    combat: new CSStrategy(() => Macro.externalIf(!have$c($effect(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral(["Cosmic Ball in the Air"])))), Macro.trySkill($skill(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral(["Bowl Straight Up"]))))).tryItem($item(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral(["blue rocket"])))).trySkill($skill(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral(["Giant Growth"])))).attack().repeat())
  }, {
    name: "Giant Growth and Blue Rocket",
    core: "soft",
    completed: () => have$c($effect(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral(["Giant Growth"])))),
    ready: () => have$c($item(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral(["green mana"])))) && get$2("_snojoFreeFights") < 10,
    do: $location(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral(["The X-32-F Combat Training Snowman"]))),
    outfit: () => uniform(),
    combat: new CSStrategy(() => Macro.externalIf(!have$c($effect(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral(["Cosmic Ball in the Air"])))), Macro.trySkill($skill(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral(["Bowl Straight Up"]))))).tryItem($item(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral(["blue rocket"])))).trySkill($skill(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral(["Giant Growth"])))).attack().repeat())
  },
  // A proton ghost should get fought here
  // It happens in globaltasks.ts
  {
    name: "Witch",
    completed: () => have$c($item(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral(["battle broom"])))),
    outfit: () => {
      return uniform({
        changes: {
          weapon: byStat({
            default: $item(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
            Muscle: $item(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral(["June cleaver"])))
          }),
          shirt: $item(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral(["makeshift garbage shirt"]))),
          offhand: $item(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral(["familiar scrapbook"]))),
          familiar: $familiar(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral(["Shorter-Order Cook"]))),
          famequip: $item(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral(["toy Cupid bow"])))
        }
      });
    },
    prepare: () => {
      kolmafia.useSkill($skill(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral(["Cannelloni Cocoon"]))));
    },
    ready: () => fightsDone() < 5,
    do: () => fightPiece($monster(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral(["Witchess Witch"])))),
    combat: new CSStrategy(() => Macro.delevel(true).attack().repeat())
  }, {
    name: "King",
    completed: () => have$c($item(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral(["dented scepter"])))),
    do: () => fightPiece($monster(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral(["Witchess King"])))),
    ready: () => fightsDone() < 5,
    outfit: () => {
      return uniform({
        changes: {
          weapon: byStat({
            default: $item(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
            Muscle: $item(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral(["June cleaver"])))
          }),
          shirt: $item(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral(["makeshift garbage shirt"]))),
          offhand: $item(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral(["familiar scrapbook"]))),
          familiar: $familiar(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral(["Shorter-Order Cook"]))),
          famequip: $item(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral(["toy Cupid bow"])))
        }
      });
    },
    combat: new CSStrategy(() => Macro.attack().repeat()),
    prepare: () => {
      kolmafia.useSkill($skill(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral(["Cannelloni Cocoon"]))));
    }
  }, {
    name: "Prepare for Queen",
    completed: () => have$c($item(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral(["very pointy crown"])))),
    ready: () => !have$c($effect(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral(["Psalm of Pointiness"])))) || kolmafia.myPrimestat() === $stat(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral(["Moxie"]))) && kolmafia.myMp() >= kolmafia.mpCost($skill(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral(["Summon Love Song"])))),
    do: () => {
      kolmafia.useSkill($skill(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral(["Cannelloni Cocoon"]))));
      if (!have$c($effect(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral(["Psalm of Pointiness"]))))) {
        if (getActiveSongs().length >= 4) uneffect($effect(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral(["Fat Leon's Phat Loot Lyric"]))));
        kolmafia.useSkill($skill(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral(["The Psalm of Pointiness"]))));
      }
      while (kolmafia.myPrimestat() === $stat(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral(["Moxie"]))) && kolmafia.myMp() >= kolmafia.mpCost($skill(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral(["Summon Love Song"]))))) {
        kolmafia.useSkill($skill(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral(["Summon Love Song"]))));
      }
    },
    prepare: () => queenPrep = true
  }, {
    name: "Queen",
    completed: () => have$c($item(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral(["very pointy crown"])))),
    do: () => fightPiece($monster(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral(["Witchess Queen"])))),
    ready: () => fightsDone() < 5,
    outfit: () => {
      return uniform({
        changes: {
          weapon: byStat({
            default: $item(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
            Muscle: $item(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral(["June cleaver"])))
          }),
          shirt: $item(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral(["makeshift garbage shirt"]))),
          offhand: $item(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral(["familiar scrapbook"]))),
          familiar: $familiar(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral(["Shorter-Order Cook"]))),
          famequip: $item(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral(["toy Cupid bow"])))
        }
      });
    },
    combat: new CSStrategy(() => Macro.tryBowl().throwLoveSongs().attack().repeat()),
    post: () => {
      queenPrep = false;
      uneffect($effect(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral(["Psalm of Pointiness"]))));
      kolmafia.use($item(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral(["psychokinetic energy blob"]))));
      kolmafia.useSkill($skill(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral(["Fat Leon's Phat Loot Lyric"]))));
    }
  }, {
    name: "Oliver's Place: Prime Portscan",
    completed: () => get$2("_sourceTerminalPortscanUses") > 0,
    do: $location(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral(["An Unusually Quiet Barroom Brawl"]))),
    outfit: () => uniform({
      changes: _objectSpread2(_objectSpread2({}, have$c($familiar(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral(["Nanorhino"])))) && get$2("_nanorhinoCharge") >= 100 ? {
        familiar: $familiar(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral(["Nanorhino"])))
      } : {}), {}, {
        acc3: $item(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral(["Peridot of Peril"])))
      })
    }),
    choices: peridotChoice($monster(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral(["goblin flapper"])))),
    combat: new CSStrategy(() => Macro.skill($skill(_templateObject141 || (_templateObject141 = _taggedTemplateLiteral(["Portscan"])))).externalIf(kolmafia.myFamiliar() === $familiar(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral(["Nanorhino"]))), Macro.trySkill(byStat({
      Mysticality: $skill(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral(["Spaghetti Spear"]))),
      Moxie: $skill(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral(["Suckerpunch"]))),
      Muscle: $skill(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral(["Clobber"])))
    }))).trySkill($skill(_templateObject146 || (_templateObject146 = _taggedTemplateLiteral(["Feel Envy"])))).defaultKill(), {
      fightHolidayWanderer: true
    })
  }, {
    name: "Oliver's Place: Use Portscan",
    ready: () => get("Portscan") === 0,
    completed: () => have$c($item(_templateObject147 || (_templateObject147 = _taggedTemplateLiteral(["government cheese"])))),
    do: $location(_templateObject148 || (_templateObject148 = _taggedTemplateLiteral(["An Unusually Quiet Barroom Brawl"]))),
    outfit: () => uniform({
      changes: {
        back: $item(_templateObject149 || (_templateObject149 = _taggedTemplateLiteral(["vampyric cloake"]))),
        acc3: $item(_templateObject150 || (_templateObject150 = _taggedTemplateLiteral(["Lil' Doctor\u2122 bag"])))
      }
    }),
    combat: new CSStrategy(() => Macro.skill($skill(_templateObject151 || (_templateObject151 = _taggedTemplateLiteral(["Become a Bat"])))).skill($skill(_templateObject152 || (_templateObject152 = _taggedTemplateLiteral(["Otoscope"])))).defaultKill())
  }, {
    name: "Map Ninja",
    completed: () => have$c($item(_templateObject153 || (_templateObject153 = _taggedTemplateLiteral(["li'l ninja costume"])))),
    do: $location(_templateObject154 || (_templateObject154 = _taggedTemplateLiteral(["The Haiku Dungeon"]))),
    choices: peridotChoice($monster(_templateObject155 || (_templateObject155 = _taggedTemplateLiteral(["amateur ninja"])))),
    combat: new CSStrategy(() => Macro.if_($monster(_templateObject156 || (_templateObject156 = _taggedTemplateLiteral(["amateur ninja"]))), Macro.skill($skill(_templateObject157 || (_templateObject157 = _taggedTemplateLiteral(["Chest X-Ray"]))))).abort()),
    outfit: () => uniform({
      canAttack: false,
      changes: {
        acc3: $item(_templateObject158 || (_templateObject158 = _taggedTemplateLiteral(["Lil' Doctor\u2122 bag"]))),
        acc2: $item(_templateObject159 || (_templateObject159 = _taggedTemplateLiteral(["Peridot of Peril"])))
      }
    })
  }, {
    name: "LOV",
    completed: () => get$2("_loveTunnelUsed"),
    outfit: () => {
      return uniform({
        changes: {
          weapon: byStat({
            Muscle: $item(_templateObject160 || (_templateObject160 = _taggedTemplateLiteral(["June cleaver"]))),
            default: $item(_templateObject161 || (_templateObject161 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))
          }),
          shirt: $item(_templateObject162 || (_templateObject162 = _taggedTemplateLiteral(["makeshift garbage shirt"])))
        },
        canAttack: false
      });
    },
    do: () => fightAll(byStat({
      Mysticality: "LOV Epaulettes",
      Muscle: "LOV Eardigan",
      Moxie: "LOV Earring"
    }), "Open Heart Surgery", "LOV Extraterrestrial Chocolate"),
    combat: new CSStrategy(() => Macro.if_($monster(_templateObject163 || (_templateObject163 = _taggedTemplateLiteral(["LOV Enforcer"]))), Macro.attack().repeat()).if_($monster(_templateObject164 || (_templateObject164 = _taggedTemplateLiteral(["LOV Engineer"]))), Macro.candyblast().trySkillRepeat($skill(_templateObject165 || (_templateObject165 = _taggedTemplateLiteral(["Weapon of the Pastalord"]))))).if_($monster(_templateObject166 || (_templateObject166 = _taggedTemplateLiteral(["LOV Equivocator"]))), Macro.step("pickpocket").delevel().easyFight().candyblast().defaultKill())),
    post: () => {
      kolmafia.use(1, $item(_templateObject167 || (_templateObject167 = _taggedTemplateLiteral(["LOV Extraterrestrial Chocolate"]))));
      burnLibrams();
    }
  }, potionTask(byStat({
    Muscle: $item(_templateObject168 || (_templateObject168 = _taggedTemplateLiteral(["LOV Elixir #3"]))),
    Mysticality: $item(_templateObject169 || (_templateObject169 = _taggedTemplateLiteral(["LOV Elixir #6"]))),
    Moxie: $item(_templateObject170 || (_templateObject170 = _taggedTemplateLiteral(["LOV Elixir #9"])))
  })), {
    name: "Post-Snojo Hottub",
    completed: () => $effects(_templateObject171 || (_templateObject171 = _taggedTemplateLiteral(["Snowballed, Half-Blooded, Half-Drained, Bruised, Relaxed Muscles, Hypnotized, Bad Haircut"]))).every(effect => !have$c(effect)),
    do: () => kolmafia.cliExecute("hottub")
  }, {
    name: "Tentacle",
    completed: () => get$2("_eldritchHorrorEvoked"),
    do: () => withProperties({
      autoAbortThreshold: -0.05,
      hpAutoRecoveryTarget: -0.05
    }, () => {
      try {
        kolmafia.useSkill($skill(_templateObject172 || (_templateObject172 = _taggedTemplateLiteral(["Evoke Eldritch Horror"]))));
        kolmafia.runCombat();
      } catch (e) {
        kolmafia.print("".concat(e));
      } finally {
        if (have$c($effect(_templateObject173 || (_templateObject173 = _taggedTemplateLiteral(["Beaten Up"])))) || kolmafia.myHp() === 0 || !get$2("_lastCombatWon")) {
          kolmafia.cliExecute("hottub");
        }
      }
    }),
    outfit: () => uniform(),
    combat: new CSStrategy(() => Macro.delevel().candyblast().defaultKill())
  }, {
    name: "God Lobster",
    completed: () => get$2("_godLobsterFights") >= 3,
    do: () => {
      kolmafia.visitUrl("main.php?fightgodlobster=1");
      kolmafia.runCombat();
      kolmafia.visitUrl("choice.php");
      kolmafia.runChoice(-1);
    },
    outfit: () => {
      var gear = $items(_templateObject174 || (_templateObject174 = _taggedTemplateLiteral(["God Lobster's Crown, God Lobster's Robe, God Lobster's Rod, God Lobster's Ring, God Lobster's Scepter"]))).find(it => have$c(it)) ?? $item(_templateObject175 || (_templateObject175 = _taggedTemplateLiteral(["tiny stillsuit"])));
      return uniform({
        changes: {
          familiar: $familiar(_templateObject176 || (_templateObject176 = _taggedTemplateLiteral(["God Lobster"]))),
          famequip: gear
        }
      });
    },
    choices: () => ({
      // Stats
      1310: 3
    }),
    combat: new CSStrategy()
  }, {
    name: "DMT",
    completed: () => get$2("_machineTunnelsAdv") >= 5,
    do: $location(_templateObject177 || (_templateObject177 = _taggedTemplateLiteral(["The Deep Machine Tunnels"]))),
    outfit: () => {
      return uniform({
        changes: {
          shirt: $item(_templateObject178 || (_templateObject178 = _taggedTemplateLiteral(["makeshift garbage shirt"]))),
          familiar: $familiar(_templateObject179 || (_templateObject179 = _taggedTemplateLiteral(["Machine Elf"])))
        }
      });
    },
    combat: new CSStrategy()
  }, {
    name: "NEP Quest",
    completed: () => get$2("_questPartyFair") !== "unstarted",
    do: () => {
      kolmafia.visitUrl("adventure.php?snarfblat=528");
      var choice = ["food", "booze"].includes(get$2("_questPartyFairQuest")) ? 1 : 2;
      kolmafia.runChoice(choice);
    }
  }, {
    name: "Purple Candle Kramco",
    completed: () => getKramcoWandererChance() < 1,
    do: guildQuestZone,
    outfit: () => {
      return uniform({
        changes: {
          shirt: $item(_templateObject180 || (_templateObject180 = _taggedTemplateLiteral(["makeshift garbage shirt"]))),
          offhand: $item(_templateObject181 || (_templateObject181 = _taggedTemplateLiteral(["Kramco Sausage-o-Matic\u2122"]))),
          familiar: $familiar(_templateObject182 || (_templateObject182 = _taggedTemplateLiteral(["Left-Hand Man"]))),
          famequip: $item(_templateObject183 || (_templateObject183 = _taggedTemplateLiteral(["Roman Candelabra"])))
        }
      });
    },
    combat: new CSStrategy(() => Macro.trySkill($skill(_templateObject184 || (_templateObject184 = _taggedTemplateLiteral(["Blow the Purple Candle!"])))).trySkill($skill(_templateObject185 || (_templateObject185 = _taggedTemplateLiteral(["Blow the Red Candle!"])))).skill($skill(_templateObject186 || (_templateObject186 = _taggedTemplateLiteral(["Micrometeorite"])))).attack().repeat())
  }
  /*{
    name: "Peridot NEP",
    completed: () => !PeridotOfPeril.canImperil($location`The Neverending Party`),
    do: $location`The Neverending Party`,
    choices: peridotChoice($monster`jock`),
    outfit: () => {
       return uniform({
        changes: {
          acc3: $item`Peridot of Peril`,
        },
      });
    },
    combat: new CSStrategy(() =>
      Macro.trySkill($skill`Feel Pride`)
        .trySkill($skill`Feel Envy`)
        .trySkill($skill`Bowl Sideways`)
        .delevel()
        .defaultKill()
    ),
  },
  {
    name: "Regular NEP",
    completed: () => get("_neverendingPartyFreeTurns") >= 10,
    do: $location`The Neverending Party`,
    outfit: (): OutfitSpec => {
       return uniform({
        changes: {
          shirt: $items`makeshift garbage shirt`,
          ...(get("_sausageFights") > 4 ? {} : { offhand: $item`Kramco Sausage-o-Matic™` }),
        },
      });
    },
    combat: new CSStrategy(() =>
      Macro.if_(
        $effect`Inner Elf`,
        Macro.if_(
          `!hascombatitem ${$item`cosmic bowling ball`}`,
          Macro.trySkill($skill`Feel Pride`)
        )
      )
        .trySkill($skill`Bowl Sideways`)
        .delevel()
        .defaultKill()
    ),
    choices: { [1324]: 5 },
  },*/])
};

var _templateObject$4, _templateObject2$4, _templateObject3$4, _templateObject4$4, _templateObject5$4, _templateObject6$4, _templateObject7$4, _templateObject8$4, _templateObject9$4, _templateObject0$4, _templateObject1$4, _templateObject10$4, _templateObject11$4, _templateObject12$4;
var Noncombat = {
  name: "Noncombat",
  type: "SERVICE",
  test: CommunityService.Noncombat,
  outfit: () => ({
    hat: $item(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral(["very pointy crown"]))),
    back: $item(_templateObject2$4 || (_templateObject2$4 = _taggedTemplateLiteral(["protonic accelerator pack"]))),
    weapon: $item(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
    shirt: $item(_templateObject4$4 || (_templateObject4$4 = _taggedTemplateLiteral(["Jurassic Parka"]))),
    offhand: $item(_templateObject5$4 || (_templateObject5$4 = _taggedTemplateLiteral(["unbreakable umbrella"]))),
    acc1: $item(_templateObject6$4 || (_templateObject6$4 = _taggedTemplateLiteral(["McHugeLarge left ski"]))),
    acc2: $item(_templateObject7$4 || (_templateObject7$4 = _taggedTemplateLiteral(["codpiece"]))),
    acc3: $item(_templateObject8$4 || (_templateObject8$4 = _taggedTemplateLiteral(["Brutal brogues"]))),
    familiar: $familiar(_templateObject9$4 || (_templateObject9$4 = _taggedTemplateLiteral(["Peace Turkey"]))),
    modes: {
      umbrella: "cocoon",
      parka: "pterodactyl"
    }
  }),
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [{
    name: "Horse",
    completed: () => current() === "dark",
    do: () => changeHorse("dark")
  }].concat(_toConsumableArray(commonFamiliarWeightBuffs()), [skillTask($effect(_templateObject0$4 || (_templateObject0$4 = _taggedTemplateLiteral(["Smooth Movements"])))), skillTask($effect(_templateObject1$4 || (_templateObject1$4 = _taggedTemplateLiteral(["Feeling Lonely"])))), birdTask("Combat Rate", false), favouriteBirdTask("Combat Rate", false), songTask($effect(_templateObject10$4 || (_templateObject10$4 = _taggedTemplateLiteral(["The Sonata of Sneakiness"]))), $effect(_templateObject11$4 || (_templateObject11$4 = _taggedTemplateLiteral(["Fat Leon's Phat Loot Lyric"])))), restore($effects(_templateObject12$4 || (_templateObject12$4 = _taggedTemplateLiteral(["Smooth Movements, The Sonata of Sneakiness"])))), {
    name: "Swim Sprints",
    completed: () => get$2("_olympicSwimmingPool"),
    do: () => kolmafia.cliExecute("swim sprints")
  }, asdonTask("Stealthily"), aprilTask("Apriling Band Patrol Beat")])
};

var _templateObject$3, _templateObject2$3, _templateObject3$3, _templateObject4$3, _templateObject5$3, _templateObject6$3, _templateObject7$3, _templateObject8$3, _templateObject9$3, _templateObject0$3, _templateObject1$3, _templateObject10$3, _templateObject11$3, _templateObject12$3, _templateObject13$3, _templateObject14$3, _templateObject15$3, _templateObject16$3, _templateObject17$3, _templateObject18$3, _templateObject19$3, _templateObject20$3, _templateObject21$3, _templateObject22$3, _templateObject23$3, _templateObject24$3, _templateObject25$3, _templateObject26$3, _templateObject27$3, _templateObject28$3, _templateObject29$3, _templateObject30$3, _templateObject31$3, _templateObject32$3, _templateObject33$3, _templateObject34$3, _templateObject35$3, _templateObject36$3, _templateObject37$3, _templateObject38$3, _templateObject39$3, _templateObject40$3, _templateObject41$3, _templateObject42$3, _templateObject43$3, _templateObject44$3, _templateObject45$3, _templateObject46$3, _templateObject47$3, _templateObject48$3, _templateObject49$3, _templateObject50$3, _templateObject51$3, _templateObject52$2, _templateObject53$1, _templateObject54$1, _templateObject55$1, _templateObject56$1, _templateObject57$1, _templateObject58$1, _templateObject59$1, _templateObject60$1, _templateObject61$1, _templateObject62$1;
var PULLS = [$items(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["repaid diaper, Great Wolf's beastly trousers"]))), $items(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["norwhal helmet"]))), $items(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteral(["Stick-Knife of Loathing"]))), $items(_templateObject4$3 || (_templateObject4$3 = _taggedTemplateLiteral(["Buddy Bjorn"])))];
var codpieceAttempted = false;
var MARKET_QUESTS = [{
  pref: "questM23Meatsmith",
  url: "shop.php?whichshop=meatsmith&action=talk"
}, {
  pref: "questM24Doc",
  url: "shop.php?whichshop=doc&action=talk"
}, {
  pref: "questM25Armorer",
  url: "shop.php?whichshop=armory&action=talk"
}];
var BEST_INITIATIVE = byClass({
  "Seal Clubber": 2,
  // Familiar exp: 2
  "Turtle Tamer": 0,
  // Weapon Damage Percent: 100
  "Disco Bandit": 0,
  // Maximum MP Percent: 30
  "Accordion Thief": 2,
  // Booze Drop: 30
  Pastamancer: 3,
  // Familiar exp: 2
  Sauceror: 1,
  // Exp: 3
  default: 0
});
var Prologue = {
  type: "MISC",
  name: "Prologue",
  completed: () => !!get$2("csServicesPerformed").split(",").filter(x => x.trim().length > 0).length,
  tasks: [{
    name: "Set Workshed",
    completed: () => kolmafia.getWorkshed() === $item(_templateObject5$3 || (_templateObject5$3 = _taggedTemplateLiteral(["Asdon Martin keyfob (on ring)"]))),
    do: () => kolmafia.use($item(_templateObject6$3 || (_templateObject6$3 = _taggedTemplateLiteral(["Asdon Martin keyfob (on ring)"]))))
  }].concat(_toConsumableArray(MARKET_QUESTS.map(_ref => {
    var pref = _ref.pref,
      url = _ref.url;
    return {
      name: "Start Quest: ".concat(pref),
      completed: () => questStep(pref) > -1,
      do: () => {
        kolmafia.visitUrl(url);
        kolmafia.runChoice(1);
      }
    };
  })), [{
    name: "Non-Staff Pulls",
    core: "soft",
    ready: () => PULLS.some(pullSet => pullSet.every(pull => !have$c(pull))),
    completed: () => get$2("_roninStoragePulls").split(",").length >= 4,
    do: () => {
      for (var _i = 0, _PULLS = PULLS; _i < _PULLS.length; _i++) {
        var pullSet = _PULLS[_i];
        if (pullSet.some(pull => have$c(pull))) continue;
        var pull = pullSet.find(p => kolmafia.storageAmount(p) > 0);
        if (pull) kolmafia.takeStorage(pull, 1);else throw new Error("Failed to pull one of ".concat(pullSet.join(", "), "; are you rich enough to run this in softcore?"));
      }
    }
  }, {
    name: "Learn About Bugs",
    ready: () => have$c($item(_templateObject7$3 || (_templateObject7$3 = _taggedTemplateLiteral(["S.I.T. Course Completion Certificate"])))),
    completed: () => get$2("_sitCourseCompleted") || have$c($skill(_templateObject8$3 || (_templateObject8$3 = _taggedTemplateLiteral(["Insectologist"])))),
    do: () => kolmafia.use($item(_templateObject9$3 || (_templateObject9$3 = _taggedTemplateLiteral(["S.I.T. Course Completion Certificate"])))),
    choices: {
      1494: 2
    }
  }, {
    name: "Fallbot",
    completed: () => !available(),
    do: () => {
      sendTo($location(_templateObject0$3 || (_templateObject0$3 = _taggedTemplateLiteral(["The Sleazy Back Alley"]))));
    }
  }, {
    name: "Borrow Time",
    completed: () => get$2("_borrowedTimeUsed"),
    do: () => {
      if (!have$c($item(_templateObject1$3 || (_templateObject1$3 = _taggedTemplateLiteral(["borrowed time"]))))) {
        kolmafia.create(1, $item(_templateObject10$3 || (_templateObject10$3 = _taggedTemplateLiteral(["borrowed time"]))));
      }
      kolmafia.use(1, $item(_templateObject11$3 || (_templateObject11$3 = _taggedTemplateLiteral(["borrowed time"]))));
    }
  }, deckTask("Forest"), deckTask("Island"), {
    name: "Ancestral Recall",
    completed: () => !have$c($item(_templateObject12$3 || (_templateObject12$3 = _taggedTemplateLiteral(["blue mana"])))),
    do: () => kolmafia.useSkill($skill(_templateObject13$3 || (_templateObject13$3 = _taggedTemplateLiteral(["Ancestral Recall"]))))
  }, _objectSpread2(_objectSpread2({}, deckTask("1952 Mickey Mantle")), {}, {
    // These classes don't need to use Wheel of Fortune
    class: $classes(_templateObject14$3 || (_templateObject14$3 = _taggedTemplateLiteral(["Pastamancer, Seal Clubber, Disco Bandit, Accordion Thief"])))
  }), {
    name: "Sell Mickey Mantle",
    completed: () => !have$c($item(_templateObject15$3 || (_templateObject15$3 = _taggedTemplateLiteral(["1952 Mickey Mantle card"])))),
    do: () => kolmafia.autosell(1, $item(_templateObject16$3 || (_templateObject16$3 = _taggedTemplateLiteral(["1952 Mickey Mantle card"]))))
  }, {
    name: "Sell Space Blanket",
    completed: () => $items(_templateObject17$3 || (_templateObject17$3 = _taggedTemplateLiteral(["space blanket, MayDay\u2122 supply package"]))).every(i => !have$c(i)),
    do: () => {
      if (have$c($item(_templateObject18$3 || (_templateObject18$3 = _taggedTemplateLiteral(["MayDay\u2122 supply package"]))))) kolmafia.use($item(_templateObject19$3 || (_templateObject19$3 = _taggedTemplateLiteral(["MayDay\u2122 supply package"]))));
      kolmafia.autosell(1, $item(_templateObject20$3 || (_templateObject20$3 = _taggedTemplateLiteral(["space blanket"]))));
    },
    class: $classes(_templateObject21$3 || (_templateObject21$3 = _taggedTemplateLiteral(["Turtle Tamer, Sauceror"])))
  }, {
    name: "Barrel Hoop Earring",
    completed: () => get$2("_barrelPrayer"),
    class: $classes(_templateObject22$3 || (_templateObject22$3 = _taggedTemplateLiteral(["Seal Clubber, Disco Bandit"]))),
    do: () => kolmafia.cliExecute("barrelprayer glamour")
  }, {
    name: "Unlock Beach",
    completed: () => kolmafia.canAdventure($location(_templateObject23$3 || (_templateObject23$3 = _taggedTemplateLiteral(["South of the Border"])))),
    do: () => {
      var desertAccessItem = kolmafia.knollAvailable() ? $item(_templateObject24$3 || (_templateObject24$3 = _taggedTemplateLiteral(["bitchin' meatcar"]))) : $item(_templateObject25$3 || (_templateObject25$3 = _taggedTemplateLiteral(["Desert Bus pass"])));
      if (!have$c(desertAccessItem)) {
        kolmafia.cliExecute("acquire ".concat(desertAccessItem.name));
      }
    }
  }, {
    name: "Juice Bar",
    completed: () => get$2("_chateauDeskHarvested"),
    do: () => {
      kolmafia.visitUrl("place.php?whichplace=chateau&action=chateau_desk2");
      kolmafia.autosell(1, $item(_templateObject26$3 || (_templateObject26$3 = _taggedTemplateLiteral(["gremlin juice"]))));
    }
  }, {
    name: "Vote!",
    completed: () => have$c($item(_templateObject27$3 || (_templateObject27$3 = _taggedTemplateLiteral(["\"I Voted!\" sticker"])))),
    do: () => {
      kolmafia.visitUrl("place.php?whichplace=town_right&action=townright_vote");
      kolmafia.visitUrl("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=".concat(BEST_INITIATIVE, "&local%5B%5D=").concat(BEST_INITIATIVE));
      kolmafia.visitUrl("place.php?whichplace=town_right&action=townright_vote");
    }
  }, {
    name: "Terminal Skills",
    completed: () => getSkills().every(skill => $skills(_templateObject28$3 || (_templateObject28$3 = _taggedTemplateLiteral(["Extract, Portscan"]))).includes(skill)) && !!getSkills().length,
    do: () => educate([$skill(_templateObject29$3 || (_templateObject29$3 = _taggedTemplateLiteral(["Extract"]))), $skill(_templateObject30$3 || (_templateObject30$3 = _taggedTemplateLiteral(["Portscan"])))])
  }, {
    name: "Change Clan",
    completed: () => kolmafia.getClanName() === get$2("phccs_mainClan", "Bonus Adventures from Hell"),
    do: () => Clan.join(get$2("phccs_mainClan", "Bonus Adventures from Hell"))
  }, {
    name: "Toot",
    completed: () => have$c($item(_templateObject31$3 || (_templateObject31$3 = _taggedTemplateLiteral(["big rock"])))),
    do: () => {
      kolmafia.visitUrl("tutorial.php?action=toot");
      tryUse(1, $item(_templateObject32$3 || (_templateObject32$3 = _taggedTemplateLiteral(["letter from King Ralph XI"]))));
      tryUse(1, $item(_templateObject33$3 || (_templateObject33$3 = _taggedTemplateLiteral(["pork elf goodies sack"]))));
      kolmafia.autosell(5, $item(_templateObject34$3 || (_templateObject34$3 = _taggedTemplateLiteral(["baconstone"]))));
      kolmafia.autosell(5, $item(_templateObject35$3 || (_templateObject35$3 = _taggedTemplateLiteral(["hamethyst"]))));
    }
  }, {
    name: "Accordion",
    class: $classes(_templateObject36$3 || (_templateObject36$3 = _taggedTemplateLiteral(["Seal Clubber, Turtle Tamer, Disco Bandit, Sauceror, Pastamancer"]))),
    completed: () => have$c($item(_templateObject37$3 || (_templateObject37$3 = _taggedTemplateLiteral(["toy accordion"])))),
    do: () => kolmafia.buy(1, $item(_templateObject38$3 || (_templateObject38$3 = _taggedTemplateLiteral(["toy accordion"]))))
  }, {
    name: "Confiscated Items",
    completed: () => !!get$2("_grimoireConfiscatorSummons"),
    ready: () => have$c($skill(_templateObject39$3 || (_templateObject39$3 = _taggedTemplateLiteral(["Summon Confiscated Things"])))),
    do: () => {
      kolmafia.useSkill(1, $skill(_templateObject40$3 || (_templateObject40$3 = _taggedTemplateLiteral(["Summon Confiscated Things"]))));
      $items(_templateObject41$3 || (_templateObject41$3 = _taggedTemplateLiteral(["glow-in-the-dark necklace, \"KICK ME\" sign, LCD game: Burger Belt, LCD game: Food Eater, LCD game: Garbage River"]))).forEach(item => kolmafia.autosell(kolmafia.itemAmount(item), item));
    }
  }, {
    name: "Tasteful Items",
    completed: () => !!get$2("grimoire2Summons"),
    ready: () => have$c($skill(_templateObject42$3 || (_templateObject42$3 = _taggedTemplateLiteral(["Summon Tasteful Items"])))),
    do: () => {
      kolmafia.useSkill(1, $skill(_templateObject43$3 || (_templateObject43$3 = _taggedTemplateLiteral(["Summon Tasteful Items"]))));
      $items(_templateObject44$3 || (_templateObject44$3 = _taggedTemplateLiteral(["black-and-blue light, blue plasma ball, cheap studded belt, flavored foot massage oil, foam dart, Loudmouth Larry Lamprey, personal massager, personalized coffee mug, stick-on eyebrow piercing"]))).forEach(item => kolmafia.autosell(kolmafia.itemAmount(item), item));
    }
  }, {
    name: "Alice's Army",
    completed: () => !!get$2("grimoire3Summons"),
    ready: () => have$c($skill(_templateObject45$3 || (_templateObject45$3 = _taggedTemplateLiteral(["Summon Alice's Army Cards"])))),
    do: () => {
      kolmafia.useSkill(1, $skill(_templateObject46$3 || (_templateObject46$3 = _taggedTemplateLiteral(["Summon Alice's Army Cards"]))));
      if (!have$c($item(_templateObject47$3 || (_templateObject47$3 = _taggedTemplateLiteral(["tobiko marble soda"])))) && !CommunityService.SpellDamage.isDone()) kolmafia.buy($coinmaster(_templateObject48$3 || (_templateObject48$3 = _taggedTemplateLiteral(["Game Shoppe Snacks"]))), 1, $item(_templateObject49$3 || (_templateObject49$3 = _taggedTemplateLiteral(["tobiko marble soda"]))));
    }
  }, {
    name: "Mummery",
    completed: () => get$2("_mummeryMods").includes(kolmafia.myPrimestat().toString()),
    do: () => {
      kolmafia.useFamiliar($familiar(_templateObject50$3 || (_templateObject50$3 = _taggedTemplateLiteral(["Melodramedary"]))));
      kolmafia.cliExecute("mummery ".concat(kolmafia.myPrimestat().toString().toLowerCase()));
    },
    core: "hard"
  }, {
    name: "Shortsuit",
    completed: () => !kolmafia.itemAmount($item(_templateObject51$3 || (_templateObject51$3 = _taggedTemplateLiteral(["tiny stillsuit"])))),
    do: () => kolmafia.equip($familiar(_templateObject52$2 || (_templateObject52$2 = _taggedTemplateLiteral(["Shorter-Order Cook"]))), $item(_templateObject53$1 || (_templateObject53$1 = _taggedTemplateLiteral(["tiny stillsuit"]))))
  }, {
    name: "Horsery",
    completed: () => current() === "dark",
    do: () => changeHorse("dark")
  }, {
    name: "Cowboy Boots",
    completed: () => have$c($item(_templateObject54$1 || (_templateObject54$1 = _taggedTemplateLiteral(["your cowboy boots"])))),
    do: () => {
      kolmafia.visitUrl("place.php?whichplace=town_right&action=townright_ltt");
      kolmafia.runChoice(5);
    }
  }, {
    name: "Cosplay Saber",
    completed: () => !!get$2("_saberMod"),
    do: () => {
      kolmafia.visitUrl("main.php?action=may4");
      kolmafia.runChoice(4);
    }
  }, {
    name: "Detective Badge",
    completed: () => have$c($item(_templateObject55$1 || (_templateObject55$1 = _taggedTemplateLiteral(["gold detective badge"])))),
    do: () => kolmafia.visitUrl("place.php?whichplace=town_wrong&action=townwrong_precinct")
  }, {
    name: "Codpiece",
    completed: () => have$c($item(_templateObject56$1 || (_templateObject56$1 = _taggedTemplateLiteral(["codpiece"])))) || codpieceAttempted,
    do: () => {
      Clan.with(get$2("phccs_codClan", "Floundry"), () => kolmafia.cliExecute("acquire codpiece"));
      codpieceAttempted = true;
    }
  }, {
    name: "Songboom",
    completed: () => song() === "Total Eclipse of Your Meat",
    do: () => setSong("Total Eclipse of Your Meat")
  }, {
    name: "Scavenge",
    completed: () => !!get$2("_daycareGymScavenges"),
    do: () => {
      kolmafia.visitUrl("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare");
      kolmafia.runChoice(3);
      kolmafia.runChoice(2);
      kolmafia.runChoice(5);
      kolmafia.runChoice(4);
    }
  }, {
    name: "Unlock Bird",
    completed: () => have$c($skill(_templateObject57$1 || (_templateObject57$1 = _taggedTemplateLiteral(["Seek out a Bird"])))) || get$2("_canSeekBirds"),
    ready: () => have$c($item(_templateObject58$1 || (_templateObject58$1 = _taggedTemplateLiteral(["Bird-a-Day calendar"])))),
    do: () => kolmafia.use($item(_templateObject59$1 || (_templateObject59$1 = _taggedTemplateLiteral(["Bird-a-Day calendar"]))))
  }, {
    name: "Guild Quest",
    completed: () => questStep(byStat({
      Mysticality: "questG07Myst",
      Moxie: "questG08Moxie",
      Muscle: "questG09Muscle"
    })) >= 0,
    do: () => kolmafia.visitUrl("guild.php?place=challenge"),
    outfit: () => byStat({
      Moxie: {
        pants: $item(_templateObject60$1 || (_templateObject60$1 = _taggedTemplateLiteral(["tearaway pants"])))
      },
      default: {}
    })
  }, {
    name: "MC Hugelarge",
    completed: () => have$c($item(_templateObject61$1 || (_templateObject61$1 = _taggedTemplateLiteral(["McHugeLarge left ski"])))),
    ready: () => have$c($item(_templateObject62$1 || (_templateObject62$1 = _taggedTemplateLiteral(["McHugeLarge duffel bag"])))),
    do: () => kolmafia.visitUrl("inventory.php?action=skiduffel&pwd=".concat(kolmafia.myHash()), false)
  }, aprilTask("Apriling Band Battle Cadence"), {
    name: "Leprecondo",
    ready: () => have$7(),
    completed: () => arrayEquals(installedFurniture(), LEPRECONDO_CONFIG),
    do: () => setFurniture.apply(Leprecondo, _toConsumableArray(LEPRECONDO_CONFIG))
  }])
};

var _templateObject$2, _templateObject2$2, _templateObject3$2, _templateObject4$2, _templateObject5$2, _templateObject6$2, _templateObject7$2, _templateObject8$2, _templateObject9$2, _templateObject0$2, _templateObject1$2, _templateObject10$2, _templateObject11$2, _templateObject12$2, _templateObject13$2, _templateObject14$2, _templateObject15$2, _templateObject16$2, _templateObject17$2, _templateObject18$2, _templateObject19$2, _templateObject20$2, _templateObject21$2, _templateObject22$2, _templateObject23$2, _templateObject24$2, _templateObject25$2, _templateObject26$2, _templateObject27$2, _templateObject28$2, _templateObject29$2, _templateObject30$2, _templateObject31$2, _templateObject32$2, _templateObject33$2, _templateObject34$2, _templateObject35$2, _templateObject36$2, _templateObject37$2, _templateObject38$2, _templateObject39$2, _templateObject40$2, _templateObject41$2, _templateObject42$2, _templateObject43$2, _templateObject44$2, _templateObject45$2, _templateObject46$2, _templateObject47$2, _templateObject48$2, _templateObject49$2, _templateObject50$2, _templateObject51$2, _templateObject52$1;
var buffs$1 = $effects(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["Carol of the Hells, Arched Eyebrow of the Archmage, Song of Sauce"])));
var chefstaves = $items(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["Staff of the Roaring Hearth, Staff of Simmering Hatred, Staff of Kitchen Royalty, Staff of the Deepest Freeze, Staff of Frozen Lard, Staff of the Peppermint Twist"])));
var Spell = {
  name: "Spell Damage",
  type: "SERVICE",
  test: CommunityService.SpellDamage,
  outfit: () => _objectSpread2(_objectSpread2({
    hat: $items(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["norwhal helmet, astral chapeau, Hollandaise helmet, Iunion Crown"]))),
    weapon: [].concat(_toConsumableArray(chefstaves), [$item(_templateObject4$2 || (_templateObject4$2 = _taggedTemplateLiteral(["weeping willow wand"])))]),
    offhand: $items(_templateObject5$2 || (_templateObject5$2 = _taggedTemplateLiteral(["Abracandalabra, august scepter"]))),
    pants: $item(_templateObject6$2 || (_templateObject6$2 = _taggedTemplateLiteral(["designer sweatpants"]))),
    acc1: $items(_templateObject7$2 || (_templateObject7$2 = _taggedTemplateLiteral(["meteorite necklace, Powerful Glove"]))),
    acc2: $item(_templateObject8$2 || (_templateObject8$2 = _taggedTemplateLiteral(["codpiece"]))),
    acc3: $item(_templateObject9$2 || (_templateObject9$2 = _taggedTemplateLiteral(["battle broom"])))
  }, CSEngine.core === "soft" ? {
    familiar: $familiar(_templateObject0$2 || (_templateObject0$2 = _taggedTemplateLiteral(["Disembodied Hand"]))),
    famequip: $item(_templateObject1$2 || (_templateObject1$2 = _taggedTemplateLiteral(["Stick-Knife of Loathing"])))
  } : {
    familiar: $familiar(_templateObject10$2 || (_templateObject10$2 = _taggedTemplateLiteral(["Left-Hand Man"]))),
    famequip: $item(_templateObject11$2 || (_templateObject11$2 = _taggedTemplateLiteral(["astral statuette"])))
  }), {}, {
    back: $items(_templateObject12$2 || (_templateObject12$2 = _taggedTemplateLiteral(["Buddy Bjorn, protonic accelerator pack"]))),
    riders: {
      "buddy-bjorn": $familiar(_templateObject13$2 || (_templateObject13$2 = _taggedTemplateLiteral(["Mechanical Songbird"])))
    }
  }),
  maxTurns: 30,
  tasks: [skillTask($skill(_templateObject14$2 || (_templateObject14$2 = _taggedTemplateLiteral(["Simmer"]))), true), {
    name: "Do You Crush What I Crush?",
    completed: () => have$c($effect(_templateObject15$2 || (_templateObject15$2 = _taggedTemplateLiteral(["Do You Crush What I Crush?"])))),
    ready: () => !have$c($effect(_templateObject16$2 || (_templateObject16$2 = _taggedTemplateLiteral(["Holiday Yoked"])))),
    do: $location(_templateObject17$2 || (_templateObject17$2 = _taggedTemplateLiteral(["The Dire Warren"]))),
    outfit: () => uniform({
      changes: {
        familiar: $familiar(_templateObject18$2 || (_templateObject18$2 = _taggedTemplateLiteral(["Ghost of Crimbo Carols"]))),
        famequip: $item.none
      }
    }),
    prepare: () => current() === "pale" && changeHorse("dark"),
    combat: new CSStrategy(() => Macro.trySkill($skill(_templateObject19$2 || (_templateObject19$2 = _taggedTemplateLiteral(["Asdon Martin: Spring-Loaded Front Bumper"])))).trySkill($skill(_templateObject20$2 || (_templateObject20$2 = _taggedTemplateLiteral(["Feel Hatred"])))).trySkill($skill(_templateObject21$2 || (_templateObject21$2 = _taggedTemplateLiteral(["Snokebomb"])))).abort())
  }, {
    name: "Barrel Prayer",
    class: $classes(_templateObject22$2 || (_templateObject22$2 = _taggedTemplateLiteral(["Sauceror"]))),
    completed: () => get$2("_barrelPrayer"),
    do: () => kolmafia.cliExecute("barrelprayer buff")
  }, potionTask($item(_templateObject23$2 || (_templateObject23$2 = _taggedTemplateLiteral(["tobiko marble soda"])))), potionTask($item(_templateObject24$2 || (_templateObject24$2 = _taggedTemplateLiteral(["imported taffy"])))), songTask($effect(_templateObject25$2 || (_templateObject25$2 = _taggedTemplateLiteral(["Jackasses' Symphony of Destruction"]))), $effect(_templateObject26$2 || (_templateObject26$2 = _taggedTemplateLiteral(["The Sonata of Sneakiness"]))))].concat(_toConsumableArray(restoreBuffTasks(buffs$1)), [skillTask({
    skill: $skill(_templateObject27$2 || (_templateObject27$2 = _taggedTemplateLiteral(["Sauce Contemplation"]))),
    effect: $effect(_templateObject28$2 || (_templateObject28$2 = _taggedTemplateLiteral(["Lubricating Sauce"])))
  }, true), beachTask($effect(_templateObject29$2 || (_templateObject29$2 = _taggedTemplateLiteral(["We're All Made of Starfish"])))), potionTask($item(_templateObject30$2 || (_templateObject30$2 = _taggedTemplateLiteral(["LOV Elixir #6"])))), {
    name: "Cargopocket",
    completed: () => get$2("_cargoPocketEmptied"),
    ready: () => $items(_templateObject31$2 || (_templateObject31$2 = _taggedTemplateLiteral(["sizzling desk bell, frost-rimed desk bell, uncanny desk bell, nasty desk bell, greasy desk bell"]))).every(item => getSaleValue(item) < 4 * get$2("valueOfAdventure")),
    do: () => kolmafia.cliExecute("cargo 177")
  }, potionTask($item(_templateObject32$2 || (_templateObject32$2 = _taggedTemplateLiteral(["Yeg's Motel hand soap"])))), skillTask($skill(_templateObject33$2 || (_templateObject33$2 = _taggedTemplateLiteral(["Spirit of Cayenne"])))), potionTask($item(_templateObject34$2 || (_templateObject34$2 = _taggedTemplateLiteral(["flask of baconstone juice"])))), {
    name: "Saucefingers",
    ready: () => kolmafia.myLevel() >= 15 && have$c($familiar(_templateObject35$2 || (_templateObject35$2 = _taggedTemplateLiteral(["Mini-Adventurer"])))),
    completed: () => have$c($effect(_templateObject36$2 || (_templateObject36$2 = _taggedTemplateLiteral(["Saucefingers"])))),
    class: $classes(_templateObject37$2 || (_templateObject37$2 = _taggedTemplateLiteral(["Pastamancer"]))),
    do: $location(_templateObject38$2 || (_templateObject38$2 = _taggedTemplateLiteral(["The Dire Warren"]))),
    prepare: () => current() === "pale" && changeHorse("dark"),
    outfit: () => uniform({
      changes: {
        familiar: $familiar(_templateObject39$2 || (_templateObject39$2 = _taggedTemplateLiteral(["Mini-Adventurer"])))
      }
    }),
    combat: new CSStrategy(() => Macro.trySkill($skill(_templateObject40$2 || (_templateObject40$2 = _taggedTemplateLiteral(["Asdon Martin: Spring-Loaded Front Bumper"])))).trySkill($skill(_templateObject41$2 || (_templateObject41$2 = _taggedTemplateLiteral(["Feel Hatred"])))).trySkill($skill(_templateObject42$2 || (_templateObject42$2 = _taggedTemplateLiteral(["Snokebomb"])))).abort()),
    choices: {
      [768]: 4
    }
  }, innerElf(), meteorShower(), {
    name: "Meteorite Necklace",
    core: "soft",
    completed: () => have$c($item(_templateObject43$2 || (_templateObject43$2 = _taggedTemplateLiteral(["meteorite necklace"])))),
    ready: () => kolmafia.canadiaAvailable() && $items(_templateObject44$2 || (_templateObject44$2 = _taggedTemplateLiteral(["meteorite fragment, meteorite earring, meteorite ring"]))).some(item => have$c(item)),
    do: () => {
      var meteor = $items(_templateObject45$2 || (_templateObject45$2 = _taggedTemplateLiteral(["meteorite ring, meteorite fragment, meteorite earring"]))).find(item => have$c(item));
      if (meteor) {
        unequip(meteor);
        kolmafia.retrieveItem(1, $item(_templateObject46$2 || (_templateObject46$2 = _taggedTemplateLiteral(["tenderizing hammer"]))));
        kolmafia.retrieveItem(1, $item(_templateObject47$2 || (_templateObject47$2 = _taggedTemplateLiteral(["jewelry-making pliers"]))));
        if (meteor !== $item(_templateObject48$2 || (_templateObject48$2 = _taggedTemplateLiteral(["meteorite fragment"])))) kolmafia.cliExecute("smash ".concat(meteor));
        kolmafia.cliExecute("make ".concat($item(_templateObject49$2 || (_templateObject49$2 = _taggedTemplateLiteral(["meteorite necklace"])))));
      }
    }
  }, {
    name: "Pull Staff",
    ready: () => chefstaves.filter(s => kolmafia.storageAmount(s) > 0 && kolmafia.canEquip(s)).length > 0 && kolmafia.pullsRemaining() > 0,
    completed: () => chefstaves.some(staff => have$c(staff)),
    core: "soft",
    do: () => {
      var staff = chefstaves.find(s => kolmafia.storageAmount(s) > 0 && kolmafia.canEquip(s));
      if (staff) kolmafia.takeStorage(staff, 1);
    }
  }, {
    name: "Weeping Willow Wand",
    completed: () => have$c($item(_templateObject50$2 || (_templateObject50$2 = _taggedTemplateLiteral(["weeping willow wand"])))),
    ready: () => !chefstaves.some(staff => have$c(staff)),
    do: () => {
      if (!have$c($item(_templateObject51$2 || (_templateObject51$2 = _taggedTemplateLiteral(["flimsy hardwood scraps"]))))) kolmafia.visitUrl("shop.php?whichshop=lathe");
      kolmafia.retrieveItem($item(_templateObject52$1 || (_templateObject52$1 = _taggedTemplateLiteral(["weeping willow wand"]))));
    }
  }])
};

var _templateObject$1, _templateObject2$1, _templateObject3$1, _templateObject4$1, _templateObject5$1, _templateObject6$1, _templateObject7$1, _templateObject8$1, _templateObject9$1, _templateObject0$1, _templateObject1$1, _templateObject10$1, _templateObject11$1, _templateObject12$1, _templateObject13$1, _templateObject14$1, _templateObject15$1, _templateObject16$1, _templateObject17$1, _templateObject18$1, _templateObject19$1, _templateObject20$1, _templateObject21$1, _templateObject22$1, _templateObject23$1, _templateObject24$1, _templateObject25$1, _templateObject26$1, _templateObject27$1, _templateObject28$1, _templateObject29$1, _templateObject30$1, _templateObject31$1, _templateObject32$1, _templateObject33$1, _templateObject34$1, _templateObject35$1, _templateObject36$1, _templateObject37$1, _templateObject38$1, _templateObject39$1, _templateObject40$1, _templateObject41$1, _templateObject42$1, _templateObject43$1, _templateObject44$1, _templateObject45$1, _templateObject46$1, _templateObject47$1, _templateObject48$1, _templateObject49$1, _templateObject50$1, _templateObject51$1, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58, _templateObject59, _templateObject60, _templateObject61, _templateObject62, _templateObject63, _templateObject64, _templateObject65, _templateObject66, _templateObject67, _templateObject68, _templateObject69, _templateObject70, _templateObject71, _templateObject72, _templateObject73;
var SKILL_BUFFS = {
  MUSCLE: $effects(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["Feeling Excited, Big, Song of Bravado, Rage of the Reindeer, Quiet Determination, Disdain of the War Snapper"]))),
  MYSTICALITY: $effects(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["Feeling Excited, Big, Song of Bravado, Quiet Judgement"]))),
  MOXIE: $effects(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["Feeling Excited, Big, Song of Bravado, Quiet Desperation, Disco Fever, Blubbered Up, Mariachi Mood, Disco State of Mind"]))),
  HP: $effects(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["Feeling Excited, Big, Song of Starch, Rage of the Reindeer, Quiet Determination, Disdain of the War Snapper"])))
};
function skillBuffTasks(key) {
  return restoreBuffTasks(SKILL_BUFFS[key]);
}
function thrallTask(thrall) {
  return {
    name: thrall.toString(),
    class: $classes(_templateObject5$1 || (_templateObject5$1 = _taggedTemplateLiteral(["Pastamancer"]))),
    completed: () => kolmafia.myThrall() === thrall,
    do: () => kolmafia.useSkill(thrall.skill)
  };
}
function equalizeTasks() {
  var equalizerPotion = byStat({
    Moxie: $item(_templateObject6$1 || (_templateObject6$1 = _taggedTemplateLiteral(["oil of slipperiness"]))),
    Muscle: $item(_templateObject7$1 || (_templateObject7$1 = _taggedTemplateLiteral(["oil of stability"]))),
    Mysticality: $item(_templateObject8$1 || (_templateObject8$1 = _taggedTemplateLiteral(["oil of expertise"])))
  });
  var equalizerFruit = byStat({
    Moxie: $item(_templateObject9$1 || (_templateObject9$1 = _taggedTemplateLiteral(["jumbo olive"]))),
    Muscle: $item(_templateObject0$1 || (_templateObject0$1 = _taggedTemplateLiteral(["lime"]))),
    Mysticality: $item(_templateObject1$1 || (_templateObject1$1 = _taggedTemplateLiteral(["cherry"])))
  });
  return [{
    name: "Create ".concat(equalizerPotion),
    ready: () => have$c(equalizerFruit) && get$2("hasRange"),
    completed: () => have$c(equalizerPotion) || have$c(kolmafia.effectModifier(equalizerPotion, "Effect")),
    do: () => kolmafia.create(equalizerPotion),
    class: $classes(_templateObject10$1 || (_templateObject10$1 = _taggedTemplateLiteral(["Seal Clubber, Turtle Tamer, Disco Bandit, Accordion Thief, Sauceror"])))
  }, _objectSpread2(_objectSpread2({}, potionTask(equalizerPotion)), {}, {
    class: $classes(_templateObject11$1 || (_templateObject11$1 = _taggedTemplateLiteral(["Seal Clubber, Turtle Tamer, Disco Bandit, Accordion Thief, Sauceror"])))
  })];
}
var Muscle = {
  name: "Muscle",
  type: "SERVICE",
  test: CommunityService.Muscle,
  outfit: () => {
    if (!have$c($item(_templateObject12$1 || (_templateObject12$1 = _taggedTemplateLiteral(["wad of used tape"]))))) kolmafia.cliExecute("fold wad of used tape");
    return {
      hat: $item(_templateObject13$1 || (_templateObject13$1 = _taggedTemplateLiteral(["wad of used tape"]))),
      weapon: $item(_templateObject14$1 || (_templateObject14$1 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
      offhand: $item(_templateObject15$1 || (_templateObject15$1 = _taggedTemplateLiteral(["dented scepter"]))),
      shirt: $item(_templateObject16$1 || (_templateObject16$1 = _taggedTemplateLiteral(["Jurassic Parka"]))),
      back: $item(_templateObject17$1 || (_templateObject17$1 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
      pants: $items(_templateObject18$1 || (_templateObject18$1 = _taggedTemplateLiteral(["astral trousers, designer sweatpants"]))),
      acc1: $item(_templateObject19$1 || (_templateObject19$1 = _taggedTemplateLiteral(["Brutal brogues"]))),
      acc2: $items(_templateObject20$1 || (_templateObject20$1 = _taggedTemplateLiteral(["meteorite necklace, Retrospecs"]))),
      acc3: byStat({
        Muscle: $item(_templateObject21$1 || (_templateObject21$1 = _taggedTemplateLiteral(["your cowboy boots"]))),
        default: $item(_templateObject22$1 || (_templateObject22$1 = _taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))
      }),
      familiar: $familiar(_templateObject23$1 || (_templateObject23$1 = _taggedTemplateLiteral(["Left-Hand Man"]))),
      famequip: $item(_templateObject24$1 || (_templateObject24$1 = _taggedTemplateLiteral(["unbreakable umbrella"]))),
      modes: {
        retrocape: ["vampire", currentMode()],
        parka: "dilophosaur",
        umbrella: "broken"
      }
    };
  },
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [].concat(_toConsumableArray(skillBuffTasks("MUSCLE")), [potionTask($item(_templateObject25$1 || (_templateObject25$1 = _taggedTemplateLiteral(["LOV Elixir #3"])))), thrallTask($thrall(_templateObject26$1 || (_templateObject26$1 = _taggedTemplateLiteral(["Elbow Macaroni"])))), birdTask("Muscle Percent"), favouriteBirdTask("Muscle Percent"), _objectSpread2(_objectSpread2({}, innerElf()), {}, {
    core: "hard",
    class: $classes(_templateObject27$1 || (_templateObject27$1 = _taggedTemplateLiteral(["Pastamancer, Sauceror, Disco Bandit, Accordion Thief"])))
  }), _objectSpread2(_objectSpread2({}, potionTask($item(_templateObject28$1 || (_templateObject28$1 = _taggedTemplateLiteral(["Ben-Gal\u2122 Balm"]))))), {}, {
    core: "hard"
  })], _toConsumableArray(equalizeTasks()))
};
var Mysticality = {
  name: "Mysticality",
  type: "SERVICE",
  test: CommunityService.Mysticality,
  outfit: () => {
    if (!have$c($item(_templateObject29$1 || (_templateObject29$1 = _taggedTemplateLiteral(["wad of used tape"]))))) kolmafia.cliExecute("fold wad of used tape");
    return {
      hat: $items(_templateObject30$1 || (_templateObject30$1 = _taggedTemplateLiteral(["astral chapeau, wad of used tape"]))),
      weapon: $item(_templateObject31$1 || (_templateObject31$1 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
      offhand: $items(_templateObject32$1 || (_templateObject32$1 = _taggedTemplateLiteral(["astral statuette, industrial fire extinguisher"]))),
      back: $item(_templateObject33$1 || (_templateObject33$1 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
      shirt: $item(_templateObject34$1 || (_templateObject34$1 = _taggedTemplateLiteral(["Jurassic Parka"]))),
      pants: $item(_templateObject35$1 || (_templateObject35$1 = _taggedTemplateLiteral(["designer sweatpants"]))),
      acc1: byStat({
        Mysticality: $item(_templateObject36$1 || (_templateObject36$1 = _taggedTemplateLiteral(["your cowboy boots"]))),
        default: $items(_templateObject37$1 || (_templateObject37$1 = _taggedTemplateLiteral(["barrel hoop earring, Powerful Glove"])))
      }),
      acc2: $item(_templateObject38$1 || (_templateObject38$1 = _taggedTemplateLiteral(["codpiece"]))),
      acc3: $item(_templateObject39$1 || (_templateObject39$1 = _taggedTemplateLiteral(["battle broom"]))),
      famequip: $item(_templateObject40$1 || (_templateObject40$1 = _taggedTemplateLiteral(["unbreakable umbrella"]))),
      familiar: $familiar(_templateObject41$1 || (_templateObject41$1 = _taggedTemplateLiteral(["Left-Hand Man"]))),
      modes: {
        retrocape: ["heck", currentMode()]
      }
    };
  },
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [].concat(_toConsumableArray(skillBuffTasks("MYSTICALITY")), [birdTask("Mysticality Percent"), favouriteBirdTask("Mysticality Percent")], _toConsumableArray(equalizeTasks()), [_objectSpread2(_objectSpread2({}, innerElf()), {}, {
    class: $classes(_templateObject42$1 || (_templateObject42$1 = _taggedTemplateLiteral(["Seal Clubber, Turtle Tamer, Disco Bandit, Accordion Thief"])))
  })])
};
var Moxie = {
  name: "Moxie",
  type: "SERVICE",
  test: CommunityService.Moxie,
  outfit: () => ({
    hat: $item(_templateObject43$1 || (_templateObject43$1 = _taggedTemplateLiteral(["very pointy crown"]))),
    shirt: $item(_templateObject44$1 || (_templateObject44$1 = _taggedTemplateLiteral(["Jurassic Parka"]))),
    back: $item(_templateObject45$1 || (_templateObject45$1 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
    weapon: $item(_templateObject46$1 || (_templateObject46$1 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
    offhand: $item(_templateObject47$1 || (_templateObject47$1 = _taggedTemplateLiteral(["unbreakable umbrella"]))),
    pants: $items(_templateObject48$1 || (_templateObject48$1 = _taggedTemplateLiteral(["astral shorts, Cargo Cultist Shorts"]))),
    acc1: $item(_templateObject49$1 || (_templateObject49$1 = _taggedTemplateLiteral(["Cincho de Mayo"]))),
    acc2: byStat({
      Moxie: $item(_templateObject50$1 || (_templateObject50$1 = _taggedTemplateLiteral(["your cowboy boots"]))),
      default: $item(_templateObject51$1 || (_templateObject51$1 = _taggedTemplateLiteral(["Beach Comb"])))
    }),
    acc3: $items(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["meteorite necklace, spring shoes"]))),
    famequip: $item(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["miniature crystal ball"]))),
    modes: {
      retrocape: ["robot", currentMode()],
      umbrella: "broken"
    }
  }),
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [].concat(_toConsumableArray(skillBuffTasks("MOXIE")), [birdTask("Moxie Percent"), favouriteBirdTask("Moxie Percent")], _toConsumableArray($items(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["runproof mascara, confiscated love note, dollop of barbecue sauce"]))).map(potionTask)), [{
    name: "Rhinestones",
    completed: () => !have$c($item(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["rhinestone"])))),
    do: () => kolmafia.use(kolmafia.itemAmount($item(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["rhinestone"])))), $item(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["rhinestone"]))))
  }, thrallTask($thrall(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["Penne Dreadful"]))))], _toConsumableArray(equalizeTasks()))
};
var Hitpoints = {
  name: "Hitpoints",
  type: "SERVICE",
  test: CommunityService.HP,
  turnsSpent: 0,
  maxTurns: 1,
  outfit: () => {
    if (!have$c($item(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral(["wad of used tape"]))))) kolmafia.cliExecute("fold wad of used tape");
    return {
      hat: $item(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral(["wad of used tape"]))),
      weapon: $item(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral(["dented scepter"]))),
      offhand: $item(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"]))),
      shirt: $items(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral(["Jurassic Parka, shoe ad T-shirt, fresh coat of paint"]))),
      back: $item(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral(["unwrapped knock-off retro superhero cape"]))),
      pants: $item(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral(["Cargo Cultist Shorts"]))),
      acc1: $item(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral(["Brutal brogues"]))),
      acc2: byStat({
        Muscle: $item(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral(["your cowboy boots"]))),
        default: $item(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral(["Kremlin's Greatest Briefcase"])))
      }),
      acc3: $items(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral(["meteorite necklace, Retrospecs"]))),
      familiar: $familiar(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral(["Left-Hand Man"]))),
      famequip: $item(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral(["unbreakable umbrella"]))),
      modes: {
        retrocape: ["vampire", currentMode()],
        parka: "kachungasaur"
      }
    };
  },
  tasks: [].concat(_toConsumableArray(skillBuffTasks("HP")), [birdTask("Muscle Percent"), favouriteBirdTask("Muscle Percent"), potionTask($item(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral(["LOV Elixir #3"])))), thrallTask($thrall(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral(["Elbow Macaroni"]))))], _toConsumableArray(equalizeTasks()))
};
var StatTests = byStat({
  Mysticality: [Moxie, Muscle, Hitpoints, Mysticality],
  Muscle: [Moxie, Mysticality, Hitpoints, Muscle],
  Moxie: [Mysticality, Muscle, Hitpoints, Moxie]
});

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject0, _templateObject1, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51;
var buffs = $effects(_templateObject || (_templateObject = _taggedTemplateLiteral(["Carol of the Bulls, Song of the North, Rage of the Reindeer, Scowl of the Auk, Disdain of the War Snapper, Tenacity of the Snapper"])));
var Weapon = {
  name: "Weapon Damage",
  type: "SERVICE",
  test: CommunityService.WeaponDamage,
  outfit: () => {
    if (!have$c($item(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["broken champagne bottle"]))))) kolmafia.cliExecute("fold broken champagne bottle");
    return _objectSpread2(_objectSpread2({
      hat: $items(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["seal-skull helmet, Iunion Crown"]))),
      weapon: $item(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["broken champagne bottle"]))),
      offhand: $item(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["dented scepter"]))),
      pants: $items(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["astral trousers, designer sweatpants"]))),
      acc1: $item(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["Brutal brogues"]))),
      acc2: $item(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["Powerful Glove"]))),
      acc3: $items(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["meteorite ring, Kremlin's Greatest Briefcase"])))
    }, CSEngine.core === "soft" ? {
      famequip: $item(_templateObject0 || (_templateObject0 = _taggedTemplateLiteral(["Stick-Knife of Loathing"]))),
      familiar: $familiar(_templateObject1 || (_templateObject1 = _taggedTemplateLiteral(["Disembodied Hand"])))
    } : {
      famequip: $item(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["august scepter"]))),
      familiar: $familiar(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["Left-Hand Man"])))
    }), {}, {
      back: $items(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Buddy Bjorn, unwrapped knock-off retro superhero cape"]))),
      riders: {
        "buddy-bjorn": $familiar(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Mosquito"])))
      }
    });
  },
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [].concat(_toConsumableArray(restoreBuffTasks(buffs)), [birdTask("Weapon Damage Percent"), favouriteBirdTask("Weapon Damage Percent"), skillTask($effect(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["Frenzied, Bloody"])))), potionTask($item(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["LOV Elixir #3"])))), potionTask($item(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["vial of hamethyst juice"])))), potionTask($item(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["imported taffy"])))), beachTask($effect(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["Lack of Body-Building"])))), songTask($effect(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["Jackasses' Symphony of Destruction"]))), $effect(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["The Sonata of Sneakiness"])))), {
    name: "Play Pool",
    completed: () => have$c($effect(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["Billiards Belligerence"])))),
    do: () => kolmafia.cliExecute("pool 1")
  }, {
    name: "Do You Crush What I Crush?",
    completed: () => have$c($effect(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["Do You Crush What I Crush?"])))),
    ready: () => !have$c($effect(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["Holiday Yoked"])))),
    do: $location(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["The Dire Warren"]))),
    outfit: () => uniform({
      changes: {
        familiar: $familiar(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["Ghost of Crimbo Carols"]))),
        famequip: $item.none
      }
    }),
    prepare: () => current() === "pale" && changeHorse("dark"),
    combat: new CSStrategy(() => Macro.trySkill($skill(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["Asdon Martin: Spring-Loaded Front Bumper"])))).trySkill($skill(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["Feel Hatred"])))).trySkill($skill(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["Snokebomb"])))).abort())
  }, _objectSpread2(_objectSpread2({}, innerElf()), {}, {
    class: () => kolmafia.inHardcore() ? $classes.all() : $classes(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["Seal Clubber, Turtle Tamer, Disco Bandit, Accordion Thief"])))
  }), {
    name: "Spit Ungulith",
    completed: () => have$c($item(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["corrupted marrow"])))) || have$c($effect(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["Cowrruption"])))),
    do: () => {
      reminisce($monster(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["ungulith"]))));
      if (kolmafia.handlingChoice()) kolmafia.runChoice(-1);
    },
    choices: {
      [1387]: 3
    },
    outfit: () => {
      var changes = {
        weapon: $item(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["Fourth of May Cosplay Saber"])))
      };
      if (get$2("camelSpit") >= 100 && !have$c($effect(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["Spit Upon"]))))) changes.familiar = $familiar(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["Melodramedary"])));
      return uniform({
        changes,
        canAttack: false
      });
    },
    post: () => {
      if (kolmafia.myFamiliar() === $familiar(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["Melodramedary"]))) && have$c($effect(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["Spit Upon"]))), 15)) _set("camelSpit", 0);
      if (have$c($effect(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["Meteor Showered"]))))) incrementShowers();
      _set("_meteorShowerUses", showers);
      var ungId = $monster(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["ungulith"]))).id.toFixed(0);
      var locketIdStrings = get$2("_locketMonstersFought").split(",").map(x => x.trim()).filter(x => x.length > 0);
      if (!locketIdStrings.includes(ungId)) {
        locketIdStrings.push(ungId);
        _set("_locketMonstersFought", locketIdStrings.join(","));
      }
    },
    combat: new CSStrategy(() => Macro.trySkill($skill(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["%fn, spit on me!"])))).trySkill($skill(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["Meteor Shower"])))).skill($skill(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["Use the Force"])))))
  }, {
    name: "Meteorite Ring",
    core: "soft",
    completed: () => have$c($item(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["meteorite ring"])))),
    ready: () => kolmafia.canadiaAvailable() && $items(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["meteorite fragment, meteorite earring, meteorite necklace"]))).some(item => have$c(item)),
    do: () => {
      var meteor = $items(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["meteorite necklace, meteorite fragment, meteorite earring"]))).find(item => have$c(item));
      if (meteor) {
        unequip(meteor);
        kolmafia.retrieveItem(1, $item(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["tenderizing hammer"]))));
        kolmafia.retrieveItem(1, $item(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["jewelry-making pliers"]))));
        if (meteor !== $item(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["meteorite fragment"])))) kolmafia.cliExecute("smash ".concat(meteor));
        kolmafia.cliExecute("make ".concat($item(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["meteorite ring"])))));
      }
    }
  }, potionTask($item(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["corrupted marrow"])))), {
    name: "Swagger",
    completed: () => get$2("_bowleggedSwaggerUsed"),
    do: () => kolmafia.useSkill($skill(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["Bow-Legged Swagger"]))))
  }])
};

function main() {
  sinceKolmafiaRevision(28500);
  logger.setLevel(LogLevels.DEBUG);
  CSEngine.runTests.apply(CSEngine, [Prologue, CoilWire, Level].concat(_toConsumableArray(StatTests), [HotRes, Noncombat, FamiliarWeight, Weapon, Spell, BoozeDrop]));
}

exports.main = main;
