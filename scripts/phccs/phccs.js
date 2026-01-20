"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = function(fn, res) {
  return function() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
};
var __commonJS = function(cb, mod) {
  return function() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
};
var __export = function(target, all) {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = function(to, from, except, desc) {
  if (from && typeof from == "object" || typeof from == "function")
    for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++)
      key = keys[i], !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: function(k) {
        return from[k];
      }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = function(mod, isNodeMode, target) {
  return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
    mod
  );
}, __toCommonJS = function(mod) {
  return __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
};

// kolmafia-polyfill.js
var kolmafia, console, init_kolmafia_polyfill = __esm({
  "kolmafia-polyfill.js": function() {
    "use strict";
    kolmafia = require("kolmafia"), console = {
      log: kolmafia.print
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/is-callable.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var documentAll = typeof document == "object" && document.all;
    module2.exports = typeof documentAll == "undefined" && documentAll !== void 0 ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/fails.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    module2.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return !0;
      }
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/descriptors.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var fails = require_fails();
    module2.exports = !fails(function() {
      return Object.defineProperty({}, 1, {
        get: function() {
          return 7;
        }
      })[1] !== 7;
    });
  }
});

// node_modules/libram/node_modules/core-js/internals/global-this.js
var require_global_this = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/global-this.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var check = function(it) {
      return it && it.Math === Math && it;
    };
    module2.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof exports == "object" && exports) || function() {
      return this;
    }() || Function("return this")();
  }
});

// node_modules/libram/node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/is-object.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var isCallable = require_is_callable();
    module2.exports = function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/document-create-element.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var globalThis2 = require_global_this(), isObject = require_is_object(), document2 = globalThis2.document, EXISTS = isObject(document2) && isObject(document2.createElement);
    module2.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/ie8-dom-define.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), fails = require_fails(), createElement = require_document_create_element();
    module2.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a !== 7;
    });
  }
});

// node_modules/libram/node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/v8-prototype-define-bug.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), fails = require_fails();
    module2.exports = DESCRIPTORS && fails(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: !1
      }).prototype !== 42;
    });
  }
});

// node_modules/libram/node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/an-object.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var isObject = require_is_object(), $String = String, $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isObject(argument))
        return argument;
      throw new $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/function-bind-native.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var fails = require_fails();
    module2.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/libram/node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/function-call.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var NATIVE_BIND = require_function_bind_native(), call = Function.prototype.call;
    module2.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/get-built-in.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var globalThis2 = require_global_this(), isCallable = require_is_callable(), aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module2.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(globalThis2[namespace]) : globalThis2[namespace] && globalThis2[namespace][method];
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/function-uncurry-this.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var NATIVE_BIND = require_function_bind_native(), FunctionPrototype = Function.prototype, call = FunctionPrototype.call, uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    module2.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
      return function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-is-prototype-of.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this();
    module2.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/libram/node_modules/core-js/internals/environment-user-agent.js
var require_environment_user_agent = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/environment-user-agent.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var globalThis2 = require_global_this(), navigator = globalThis2.navigator, userAgent = navigator && navigator.userAgent;
    module2.exports = userAgent ? String(userAgent) : "";
  }
});

// node_modules/libram/node_modules/core-js/internals/environment-v8-version.js
var require_environment_v8_version = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/environment-v8-version.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var globalThis2 = require_global_this(), userAgent = require_environment_user_agent(), process = globalThis2.process, Deno2 = globalThis2.Deno, versions = process && process.versions || Deno2 && Deno2.version, v8 = versions && versions.v8, match, version;
    v8 && (match = v8.split("."), version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]));
    !version && userAgent && (match = userAgent.match(/Edge\/(\d+)/), (!match || match[1] >= 74) && (match = userAgent.match(/Chrome\/(\d+)/), match && (version = +match[1])));
    module2.exports = version;
  }
});

// node_modules/libram/node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/symbol-constructor-detection.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var V8_VERSION = require_environment_v8_version(), fails = require_fails(), globalThis2 = require_global_this(), $String = globalThis2.String;
    module2.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol("symbol detection");
      return !$String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/libram/node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/use-symbol-as-uid.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module2.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/libram/node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/is-symbol.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var getBuiltIn = require_get_built_in(), isCallable = require_is_callable(), isPrototypeOf = require_object_is_prototype_of(), USE_SYMBOL_AS_UID = require_use_symbol_as_uid(), $Object = Object;
    module2.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/try-to-string.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var $String = String;
    module2.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/a-callable.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var isCallable = require_is_callable(), tryToString = require_try_to_string(), $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isCallable(argument))
        return argument;
      throw new $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/is-null-or-undefined.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    module2.exports = function(it) {
      return it == null;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/get-method.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var aCallable = require_a_callable(), isNullOrUndefined = require_is_null_or_undefined();
    module2.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/ordinary-to-primitive.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var call = require_function_call(), isCallable = require_is_callable(), isObject = require_is_object(), $TypeError = TypeError;
    module2.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)) || isCallable(fn = input.valueOf) && !isObject(val = call(fn, input)) || pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
        return val;
      throw new $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/is-pure.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    module2.exports = !1;
  }
});

// node_modules/libram/node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/define-global-property.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var globalThis2 = require_global_this(), defineProperty = Object.defineProperty;
    module2.exports = function(key, value) {
      try {
        defineProperty(globalThis2, key, {
          value: value,
          configurable: !0,
          writable: !0
        });
      } catch (error) {
        globalThis2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/shared-store.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var IS_PURE = require_is_pure(), globalThis2 = require_global_this(), defineGlobalProperty = require_define_global_property(), SHARED = "__core-js_shared__", store = module2.exports = globalThis2[SHARED] || defineGlobalProperty(SHARED, {});
    (store.versions || (store.versions = [])).push({
      version: "3.47.0",
      mode: IS_PURE ? "pure" : "global",
      copyright: "\xA9 2014-2025 Denis Pushkarev (zloirock.ru), 2025 CoreJS Company (core-js.io)",
      license: "https://github.com/zloirock/core-js/blob/v3.47.0/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/libram/node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/shared.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var store = require_shared_store();
    module2.exports = function(key, value) {
      return store[key] || (store[key] = value || {});
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/require-object-coercible.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var isNullOrUndefined = require_is_null_or_undefined(), $TypeError = TypeError;
    module2.exports = function(it) {
      if (isNullOrUndefined(it))
        throw new $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/to-object.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var requireObjectCoercible = require_require_object_coercible(), $Object = Object;
    module2.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/has-own-property.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), toObject = require_to_object(), hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module2.exports = Object.hasOwn || function(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/uid.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), id = 0, postfix = Math.random(), toString = uncurryThis(1.1 .toString);
    module2.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/well-known-symbol.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var globalThis2 = require_global_this(), shared = require_shared(), hasOwn = require_has_own_property(), uid = require_uid(), NATIVE_SYMBOL = require_symbol_constructor_detection(), USE_SYMBOL_AS_UID = require_use_symbol_as_uid(), Symbol2 = globalThis2.Symbol, WellKnownSymbolsStore = shared("wks"), createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2.for || Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module2.exports = function(name) {
      return hasOwn(WellKnownSymbolsStore, name) || (WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol2, name) ? Symbol2[name] : createWellKnownSymbol("Symbol." + name)), WellKnownSymbolsStore[name];
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/to-primitive.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var call = require_function_call(), isObject = require_is_object(), isSymbol = require_is_symbol(), getMethod = require_get_method(), ordinaryToPrimitive = require_ordinary_to_primitive(), wellKnownSymbol = require_well_known_symbol(), $TypeError = TypeError, TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module2.exports = function(input, pref) {
      if (!isObject(input) || isSymbol(input))
        return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE), result;
      if (exoticToPrim) {
        if (pref === void 0 && (pref = "default"), result = call(exoticToPrim, input, pref), !isObject(result) || isSymbol(result))
          return result;
        throw new $TypeError("Can't convert object to primitive value");
      }
      return pref === void 0 && (pref = "number"), ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/to-property-key.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var toPrimitive = require_to_primitive(), isSymbol = require_is_symbol();
    module2.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-define-property.js": function(exports) {
    "use strict";
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), IE8_DOM_DEFINE = require_ie8_dom_define(), V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug(), anObject = require_an_object(), toPropertyKey = require_to_property_key(), $TypeError = TypeError, $defineProperty = Object.defineProperty, $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, ENUMERABLE = "enumerable", CONFIGURABLE = "configurable", WRITABLE = "writable";
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function(O, P, Attributes) {
      if (anObject(O), P = toPropertyKey(P), anObject(Attributes), typeof O == "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current2 = $getOwnPropertyDescriptor(O, P);
        current2 && current2[WRITABLE] && (O[P] = Attributes.value, Attributes = {
          configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current2[CONFIGURABLE],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current2[ENUMERABLE],
          writable: !1
        });
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function(O, P, Attributes) {
      if (anObject(O), P = toPropertyKey(P), anObject(Attributes), IE8_DOM_DEFINE)
        try {
          return $defineProperty(O, P, Attributes);
        } catch (error) {
        }
      if ("get" in Attributes || "set" in Attributes)
        throw new $TypeError("Accessors not supported");
      return "value" in Attributes && (O[P] = Attributes.value), O;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/function-name.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), hasOwn = require_has_own_property(), FunctionPrototype = Function.prototype, getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor, EXISTS = hasOwn(FunctionPrototype, "name"), PROPER = EXISTS && function() {
    }.name === "something", CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module2.exports = {
      EXISTS: EXISTS,
      PROPER: PROPER,
      CONFIGURABLE: CONFIGURABLE
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/inspect-source.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), isCallable = require_is_callable(), store = require_shared_store(), functionToString = uncurryThis(Function.toString);
    isCallable(store.inspectSource) || (store.inspectSource = function(it) {
      return functionToString(it);
    });
    module2.exports = store.inspectSource;
  }
});

// node_modules/libram/node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/weak-map-basic-detection.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var globalThis2 = require_global_this(), isCallable = require_is_callable(), WeakMap2 = globalThis2.WeakMap;
    module2.exports = isCallable(WeakMap2) && /native code/.test(String(WeakMap2));
  }
});

// node_modules/libram/node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/create-property-descriptor.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    module2.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
      };
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/create-non-enumerable-property.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), definePropertyModule = require_object_define_property(), createPropertyDescriptor = require_create_property_descriptor();
    module2.exports = DESCRIPTORS ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      return object[key] = value, object;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/shared-key.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var shared = require_shared(), uid = require_uid(), keys = shared("keys");
    module2.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/hidden-keys.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    module2.exports = {};
  }
});

// node_modules/libram/node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/internal-state.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection(), globalThis2 = require_global_this(), isObject = require_is_object(), createNonEnumerableProperty = require_create_non_enumerable_property(), hasOwn = require_has_own_property(), shared = require_shared_store(), sharedKey = require_shared_key(), hiddenKeys = require_hidden_keys(), OBJECT_ALREADY_INITIALIZED = "Object already initialized", TypeError2 = globalThis2.TypeError, WeakMap2 = globalThis2.WeakMap, set3, get4, has, enforce = function(it) {
      return has(it) ? get4(it) : set3(it, {});
    }, getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject(it) || (state = get4(it)).type !== TYPE)
          throw new TypeError2("Incompatible receiver, " + TYPE + " required");
        return state;
      };
    };
    NATIVE_WEAK_MAP || shared.state ? (store = shared.state || (shared.state = new WeakMap2()), store.get = store.get, store.has = store.has, store.set = store.set, set3 = function(it, metadata) {
      if (store.has(it))
        throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
      return metadata.facade = it, store.set(it, metadata), metadata;
    }, get4 = function(it) {
      return store.get(it) || {};
    }, has = function(it) {
      return store.has(it);
    }) : (STATE = sharedKey("state"), hiddenKeys[STATE] = !0, set3 = function(it, metadata) {
      if (hasOwn(it, STATE))
        throw new TypeError2(OBJECT_ALREADY_INITIALIZED);
      return metadata.facade = it, createNonEnumerableProperty(it, STATE, metadata), metadata;
    }, get4 = function(it) {
      return hasOwn(it, STATE) ? it[STATE] : {};
    }, has = function(it) {
      return hasOwn(it, STATE);
    });
    var store, STATE;
    module2.exports = {
      set: set3,
      get: get4,
      has: has,
      enforce: enforce,
      getterFor: getterFor
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/make-built-in.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), fails = require_fails(), isCallable = require_is_callable(), hasOwn = require_has_own_property(), DESCRIPTORS = require_descriptors(), CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE, inspectSource = require_inspect_source(), InternalStateModule = require_internal_state(), enforceInternalState = InternalStateModule.enforce, getInternalState = InternalStateModule.get, $String = String, defineProperty = Object.defineProperty, stringSlice = uncurryThis("".slice), replace = uncurryThis("".replace), join = uncurryThis([].join), CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
      return defineProperty(function() {
      }, "length", {
        value: 8
      }).length !== 8;
    }), TEMPLATE = String(String).split("String"), makeBuiltIn = module2.exports = function(value, name, options) {
      stringSlice($String(name), 0, 7) === "Symbol(" && (name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), options && options.getter && (name = "get " + name), options && options.setter && (name = "set " + name), (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) && (DESCRIPTORS ? defineProperty(value, "name", {
        value: name,
        configurable: !0
      }) : value.name = name), CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity && defineProperty(value, "length", {
        value: options.arity
      });
      try {
        options && hasOwn(options, "constructor") && options.constructor ? DESCRIPTORS && defineProperty(value, "prototype", {
          writable: !1
        }) : value.prototype && (value.prototype = void 0);
      } catch (error) {
      }
      var state = enforceInternalState(value);
      return hasOwn(state, "source") || (state.source = join(TEMPLATE, typeof name == "string" ? name : "")), value;
    };
    Function.prototype.toString = makeBuiltIn(function() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    }, "toString");
  }
});

// node_modules/libram/node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/define-built-in.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var isCallable = require_is_callable(), definePropertyModule = require_object_define_property(), makeBuiltIn = require_make_built_in(), defineGlobalProperty = require_define_global_property();
    module2.exports = function(O, key, value, options) {
      options || (options = {});
      var simple = options.enumerable, name = options.name !== void 0 ? options.name : key;
      if (isCallable(value) && makeBuiltIn(value, name, options), options.global)
        simple ? O[key] = value : defineGlobalProperty(key, value);
      else {
        try {
          options.unsafe ? O[key] && (simple = !0) : delete O[key];
        } catch (error) {
        }
        simple ? O[key] = value : definePropertyModule.f(O, key, {
          value: value,
          enumerable: !1,
          configurable: !options.nonConfigurable,
          writable: !options.nonWritable
        });
      }
      return O;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/to-string-tag-support.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var wellKnownSymbol = require_well_known_symbol(), TO_STRING_TAG = wellKnownSymbol("toStringTag"), test = {};
    test[TO_STRING_TAG] = "z";
    module2.exports = String(test) === "[object z]";
  }
});

// node_modules/libram/node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/classof-raw.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), toString = uncurryThis({}.toString), stringSlice = uncurryThis("".slice);
    module2.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/classof.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support(), isCallable = require_is_callable(), classofRaw = require_classof_raw(), wellKnownSymbol = require_well_known_symbol(), TO_STRING_TAG = wellKnownSymbol("toStringTag"), $Object = Object, CORRECT_ARGUMENTS = classofRaw(function() {
      return arguments;
    }()) === "Arguments", tryGet = function(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    module2.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/to-string.js
var require_to_string = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/to-string.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var classof = require_classof(), $String = String;
    module2.exports = function(argument) {
      if (classof(argument) === "Symbol")
        throw new TypeError("Cannot convert a Symbol value to a string");
      return $String(argument);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/normalize-string-argument.js
var require_normalize_string_argument = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/normalize-string-argument.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var toString = require_to_string();
    module2.exports = function(argument, $default) {
      return argument === void 0 ? arguments.length < 2 ? "" : $default : toString(argument);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/error-to-string.js
var require_error_to_string = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/error-to-string.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), fails = require_fails(), anObject = require_an_object(), normalizeStringArgument = require_normalize_string_argument(), nativeErrorToString = Error.prototype.toString, INCORRECT_TO_STRING = fails(function() {
      if (DESCRIPTORS) {
        var object = Object.create(Object.defineProperty({}, "name", {
          get: function() {
            return this === object;
          }
        }));
        if (nativeErrorToString.call(object) !== "true")
          return !0;
      }
      return nativeErrorToString.call({
        message: 1,
        name: 2
      }) !== "2: 1" || nativeErrorToString.call({}) !== "Error";
    });
    module2.exports = INCORRECT_TO_STRING ? function() {
      var O = anObject(this), name = normalizeStringArgument(O.name, "Error"), message = normalizeStringArgument(O.message);
      return name ? message ? name + ": " + message : name : message;
    } : nativeErrorToString;
  }
});

// node_modules/libram/node_modules/core-js/modules/es.error.to-string.js
var require_es_error_to_string = __commonJS({
  "node_modules/libram/node_modules/core-js/modules/es.error.to-string.js": function() {
    "use strict";
    init_kolmafia_polyfill();
    var defineBuiltIn = require_define_built_in(), errorToString = require_error_to_string(), ErrorPrototype = Error.prototype;
    ErrorPrototype.toString !== errorToString && defineBuiltIn(ErrorPrototype, "toString", errorToString);
  }
});

// node_modules/libram/node_modules/core-js/internals/object-to-string.js
var require_object_to_string = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-to-string.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support(), classof = require_classof();
    module2.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function() {
      return "[object " + classof(this) + "]";
    };
  }
});

// node_modules/libram/node_modules/core-js/modules/es.object.to-string.js
var require_es_object_to_string = __commonJS({
  "node_modules/libram/node_modules/core-js/modules/es.object.to-string.js": function() {
    "use strict";
    init_kolmafia_polyfill();
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support(), defineBuiltIn = require_define_built_in(), toString = require_object_to_string();
    TO_STRING_TAG_SUPPORT || defineBuiltIn(Object.prototype, "toString", toString, {
      unsafe: !0
    });
  }
});

// node_modules/libram/node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-property-is-enumerable.js": function(exports) {
    "use strict";
    init_kolmafia_polyfill();
    var $propertyIsEnumerable = {}.propertyIsEnumerable, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
      1: 2
    }, 1);
    exports.f = NASHORN_BUG ? function(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/libram/node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/indexed-object.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), fails = require_fails(), classof = require_classof_raw(), $Object = Object, split = uncurryThis("".split);
    module2.exports = fails(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) === "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// node_modules/libram/node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/to-indexed-object.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var IndexedObject = require_indexed_object(), requireObjectCoercible = require_require_object_coercible();
    module2.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-get-own-property-descriptor.js": function(exports) {
    "use strict";
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), call = require_function_call(), propertyIsEnumerableModule = require_object_property_is_enumerable(), createPropertyDescriptor = require_create_property_descriptor(), toIndexedObject = require_to_indexed_object(), toPropertyKey = require_to_property_key(), hasOwn = require_has_own_property(), IE8_DOM_DEFINE = require_ie8_dom_define(), $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function(O, P) {
      if (O = toIndexedObject(O), P = toPropertyKey(P), IE8_DOM_DEFINE)
        try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
        }
      if (hasOwn(O, P))
        return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/math-trunc.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var ceil = Math.ceil, floor = Math.floor;
    module2.exports = Math.trunc || function(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/to-integer-or-infinity.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var trunc = require_math_trunc();
    module2.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/to-absolute-index.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var toIntegerOrInfinity = require_to_integer_or_infinity(), max = Math.max, min = Math.min;
    module2.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/to-length.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var toIntegerOrInfinity = require_to_integer_or_infinity(), min = Math.min;
    module2.exports = function(argument) {
      var len = toIntegerOrInfinity(argument);
      return len > 0 ? min(len, 9007199254740991) : 0;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/length-of-array-like.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var toLength = require_to_length();
    module2.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/array-includes.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var toIndexedObject = require_to_indexed_object(), toAbsoluteIndex = require_to_absolute_index(), lengthOfArrayLike = require_length_of_array_like(), createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this), length = lengthOfArrayLike(O);
        if (length === 0)
          return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length), value;
        if (IS_INCLUDES && el !== el) {
          for (; length > index; )
            if (value = O[index++], value !== value)
              return !0;
        } else
          for (; length > index; index++)
            if ((IS_INCLUDES || index in O) && O[index] === el)
              return IS_INCLUDES || index || 0;
        return !IS_INCLUDES && -1;
      };
    };
    module2.exports = {
      includes: createMethod(!0),
      indexOf: createMethod(!1)
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-keys-internal.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), hasOwn = require_has_own_property(), toIndexedObject = require_to_indexed_object(), indexOf = require_array_includes().indexOf, hiddenKeys = require_hidden_keys(), push = uncurryThis([].push);
    module2.exports = function(object, names) {
      var O = toIndexedObject(object), i = 0, result = [], key;
      for (key in O)
        !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      for (; names.length > i; )
        hasOwn(O, key = names[i++]) && (~indexOf(result, key) || push(result, key));
      return result;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/enum-bug-keys.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    module2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  }
});

// node_modules/libram/node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-get-own-property-names.js": function(exports) {
    "use strict";
    init_kolmafia_polyfill();
    var internalObjectKeys = require_object_keys_internal(), enumBugKeys = require_enum_bug_keys(), hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-get-own-property-symbols.js": function(exports) {
    "use strict";
    init_kolmafia_polyfill();
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/libram/node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/own-keys.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var getBuiltIn = require_get_built_in(), uncurryThis = require_function_uncurry_this(), getOwnPropertyNamesModule = require_object_get_own_property_names(), getOwnPropertySymbolsModule = require_object_get_own_property_symbols(), anObject = require_an_object(), concat = uncurryThis([].concat);
    module2.exports = getBuiltIn("Reflect", "ownKeys") || function(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it)), getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/copy-constructor-properties.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var hasOwn = require_has_own_property(), ownKeys19 = require_own_keys(), getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor(), definePropertyModule = require_object_define_property();
    module2.exports = function(target, source, exceptions) {
      for (var keys = ownKeys19(source), defineProperty = definePropertyModule.f, getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f, i = 0; i < keys.length; i++) {
        var key = keys[i];
        !hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key)) && defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/is-forced.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var fails = require_fails(), isCallable = require_is_callable(), replacement = /#|\.prototype\./, isForced = function(feature, detection) {
      var value = data[normalize(feature)];
      return value === POLYFILL ? !0 : value === NATIVE ? !1 : isCallable(detection) ? fails(detection) : !!detection;
    }, normalize = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    }, data = isForced.data = {}, NATIVE = isForced.NATIVE = "N", POLYFILL = isForced.POLYFILL = "P";
    module2.exports = isForced;
  }
});

// node_modules/libram/node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/export.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var globalThis2 = require_global_this(), getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f, createNonEnumerableProperty = require_create_non_enumerable_property(), defineBuiltIn = require_define_built_in(), defineGlobalProperty = require_define_global_property(), copyConstructorProperties = require_copy_constructor_properties(), isForced = require_is_forced();
    module2.exports = function(options, source) {
      var TARGET = options.target, GLOBAL = options.global, STATIC = options.stat, FORCED, target, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL ? target = globalThis2 : STATIC ? target = globalThis2[TARGET] || defineGlobalProperty(TARGET, {}) : target = globalThis2[TARGET] && globalThis2[TARGET].prototype, target)
        for (key in source) {
          if (sourceProperty = source[key], options.dontCallGetSet ? (descriptor = getOwnPropertyDescriptor(target, key), targetProperty = descriptor && descriptor.value) : targetProperty = target[key], FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced), !FORCED && targetProperty !== void 0) {
            if (typeof sourceProperty == typeof targetProperty)
              continue;
            copyConstructorProperties(sourceProperty, targetProperty);
          }
          (options.sham || targetProperty && targetProperty.sham) && createNonEnumerableProperty(sourceProperty, "sham", !0), defineBuiltIn(target, key, sourceProperty, options);
        }
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/validate-arguments-length.js
var require_validate_arguments_length = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/validate-arguments-length.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var $TypeError = TypeError;
    module2.exports = function(passed, required) {
      if (passed < required)
        throw new $TypeError("Not enough arguments");
      return passed;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/base64-map.js
var require_base64_map = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/base64-map.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var commonAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", base64Alphabet = commonAlphabet + "+/", base64UrlAlphabet = commonAlphabet + "-_", inverse = function(characters) {
      for (var result = {}, index = 0; index < 64; index++)
        result[characters.charAt(index)] = index;
      return result;
    };
    module2.exports = {
      i2c: base64Alphabet,
      c2i: inverse(base64Alphabet),
      i2cUrl: base64UrlAlphabet,
      c2iUrl: inverse(base64UrlAlphabet)
    };
  }
});

// node_modules/libram/node_modules/core-js/modules/web.atob.js
var require_web_atob = __commonJS({
  "node_modules/libram/node_modules/core-js/modules/web.atob.js": function() {
    "use strict";
    init_kolmafia_polyfill();
    var $ = require_export(), globalThis2 = require_global_this(), getBuiltIn = require_get_built_in(), uncurryThis = require_function_uncurry_this(), call = require_function_call(), fails = require_fails(), toString = require_to_string(), validateArgumentsLength = require_validate_arguments_length(), c2i = require_base64_map().c2i, disallowed = /[^\d+/a-z]/i, whitespaces = /[\t\n\f\r ]+/g, finalEq = /[=]{1,2}$/, $atob = getBuiltIn("atob"), fromCharCode = String.fromCharCode, charAt = uncurryThis("".charAt), replace = uncurryThis("".replace), exec = uncurryThis(disallowed.exec), BASIC = !!$atob && !fails(function() {
      return $atob("aGk=") !== "hi";
    }), NO_SPACES_IGNORE = BASIC && fails(function() {
      return $atob(" ") !== "";
    }), NO_ENCODING_CHECK = BASIC && !fails(function() {
      $atob("a");
    }), NO_ARG_RECEIVING_CHECK = BASIC && !fails(function() {
      $atob();
    }), WRONG_ARITY = BASIC && $atob.length !== 1, FORCED = !BASIC || NO_SPACES_IGNORE || NO_ENCODING_CHECK || NO_ARG_RECEIVING_CHECK || WRONG_ARITY;
    $({
      global: !0,
      bind: !0,
      enumerable: !0,
      forced: FORCED
    }, {
      atob: function(data) {
        if (validateArgumentsLength(arguments.length, 1), BASIC && !NO_SPACES_IGNORE && !NO_ENCODING_CHECK)
          return call($atob, globalThis2, data);
        var string = replace(toString(data), whitespaces, ""), output = "", position = 0, bc = 0, length, chr, bs;
        if (string.length % 4 === 0 && (string = replace(string, finalEq, "")), length = string.length, length % 4 === 1 || exec(disallowed, string))
          throw new (getBuiltIn("DOMException"))("The string is not correctly encoded", "InvalidCharacterError");
        for (; position < length; )
          chr = charAt(string, position++), bs = bc % 4 ? bs * 64 + c2i[chr] : c2i[chr], bc++ % 4 && (output += fromCharCode(255 & bs >> (-2 * bc & 6)));
        return output;
      }
    });
  }
});

// node_modules/libram/node_modules/core-js/internals/environment.js
var require_environment = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/environment.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var globalThis2 = require_global_this(), userAgent = require_environment_user_agent(), classof = require_classof_raw(), userAgentStartsWith = function(string) {
      return userAgent.slice(0, string.length) === string;
    };
    module2.exports = function() {
      return userAgentStartsWith("Bun/") ? "BUN" : userAgentStartsWith("Cloudflare-Workers") ? "CLOUDFLARE" : userAgentStartsWith("Deno/") ? "DENO" : userAgentStartsWith("Node.js/") ? "NODE" : globalThis2.Bun && typeof Bun.version == "string" ? "BUN" : globalThis2.Deno && typeof Deno.version == "object" ? "DENO" : classof(globalThis2.process) === "process" ? "NODE" : globalThis2.window && globalThis2.document ? "BROWSER" : "REST";
    }();
  }
});

// node_modules/libram/node_modules/core-js/internals/environment-is-node.js
var require_environment_is_node = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/environment-is-node.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var ENVIRONMENT = require_environment();
    module2.exports = ENVIRONMENT === "NODE";
  }
});

// node_modules/libram/node_modules/core-js/internals/get-built-in-node-module.js
var require_get_built_in_node_module = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/get-built-in-node-module.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var globalThis2 = require_global_this(), IS_NODE = require_environment_is_node();
    module2.exports = function(name) {
      if (IS_NODE) {
        try {
          return globalThis2.process.getBuiltinModule(name);
        } catch (error) {
        }
        try {
          return Function('return require("' + name + '")')();
        } catch (error) {
        }
      }
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/object-keys.js
var require_object_keys = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-keys.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var internalObjectKeys = require_object_keys_internal(), enumBugKeys = require_enum_bug_keys();
    module2.exports = Object.keys || function(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-define-properties.js": function(exports) {
    "use strict";
    init_kolmafia_polyfill();
    var DESCRIPTORS = require_descriptors(), V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug(), definePropertyModule = require_object_define_property(), anObject = require_an_object(), toIndexedObject = require_to_indexed_object(), objectKeys = require_object_keys();
    exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function(O, Properties) {
      anObject(O);
      for (var props = toIndexedObject(Properties), keys = objectKeys(Properties), length = keys.length, index = 0, key; length > index; )
        definePropertyModule.f(O, key = keys[index++], props[key]);
      return O;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/html.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var getBuiltIn = require_get_built_in();
    module2.exports = getBuiltIn("document", "documentElement");
  }
});

// node_modules/libram/node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-create.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var anObject = require_an_object(), definePropertiesModule = require_object_define_properties(), enumBugKeys = require_enum_bug_keys(), hiddenKeys = require_hidden_keys(), html = require_html(), documentCreateElement = require_document_create_element(), sharedKey = require_shared_key(), GT = ">", LT = "<", PROTOTYPE = "prototype", SCRIPT = "script", IE_PROTO = sharedKey("IE_PROTO"), EmptyConstructor = function() {
    }, scriptTag = function(content) {
      return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
    }, NullProtoObjectViaActiveX = function(activeXDocument2) {
      activeXDocument2.write(scriptTag("")), activeXDocument2.close();
      var temp = activeXDocument2.parentWindow.Object;
      return activeXDocument2 = null, temp;
    }, NullProtoObjectViaIFrame = function() {
      var iframe = documentCreateElement("iframe"), JS = "java" + SCRIPT + ":", iframeDocument;
      return iframe.style.display = "none", html.appendChild(iframe), iframe.src = String(JS), iframeDocument = iframe.contentWindow.document, iframeDocument.open(), iframeDocument.write(scriptTag("document.F=Object")), iframeDocument.close(), iframeDocument.F;
    }, activeXDocument, _NullProtoObject = function() {
      try {
        activeXDocument = new ActiveXObject("htmlfile");
      } catch (error) {
      }
      _NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      for (var length = enumBugKeys.length; length--; )
        delete _NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return _NullProtoObject();
    };
    hiddenKeys[IE_PROTO] = !0;
    module2.exports = Object.create || function(O, Properties) {
      var result;
      return O !== null ? (EmptyConstructor[PROTOTYPE] = anObject(O), result = new EmptyConstructor(), EmptyConstructor[PROTOTYPE] = null, result[IE_PROTO] = O) : result = _NullProtoObject(), Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/define-built-in-accessor.js
var require_define_built_in_accessor = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/define-built-in-accessor.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var makeBuiltIn = require_make_built_in(), defineProperty = require_object_define_property();
    module2.exports = function(target, name, descriptor) {
      return descriptor.get && makeBuiltIn(descriptor.get, name, {
        getter: !0
      }), descriptor.set && makeBuiltIn(descriptor.set, name, {
        setter: !0
      }), defineProperty.f(target, name, descriptor);
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/an-instance.js
var require_an_instance = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/an-instance.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var isPrototypeOf = require_object_is_prototype_of(), $TypeError = TypeError;
    module2.exports = function(it, Prototype) {
      if (isPrototypeOf(Prototype, it))
        return it;
      throw new $TypeError("Incorrect invocation");
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/dom-exception-constants.js
var require_dom_exception_constants = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/dom-exception-constants.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    module2.exports = {
      IndexSizeError: {
        s: "INDEX_SIZE_ERR",
        c: 1,
        m: 1
      },
      DOMStringSizeError: {
        s: "DOMSTRING_SIZE_ERR",
        c: 2,
        m: 0
      },
      HierarchyRequestError: {
        s: "HIERARCHY_REQUEST_ERR",
        c: 3,
        m: 1
      },
      WrongDocumentError: {
        s: "WRONG_DOCUMENT_ERR",
        c: 4,
        m: 1
      },
      InvalidCharacterError: {
        s: "INVALID_CHARACTER_ERR",
        c: 5,
        m: 1
      },
      NoDataAllowedError: {
        s: "NO_DATA_ALLOWED_ERR",
        c: 6,
        m: 0
      },
      NoModificationAllowedError: {
        s: "NO_MODIFICATION_ALLOWED_ERR",
        c: 7,
        m: 1
      },
      NotFoundError: {
        s: "NOT_FOUND_ERR",
        c: 8,
        m: 1
      },
      NotSupportedError: {
        s: "NOT_SUPPORTED_ERR",
        c: 9,
        m: 1
      },
      InUseAttributeError: {
        s: "INUSE_ATTRIBUTE_ERR",
        c: 10,
        m: 1
      },
      InvalidStateError: {
        s: "INVALID_STATE_ERR",
        c: 11,
        m: 1
      },
      SyntaxError: {
        s: "SYNTAX_ERR",
        c: 12,
        m: 1
      },
      InvalidModificationError: {
        s: "INVALID_MODIFICATION_ERR",
        c: 13,
        m: 1
      },
      NamespaceError: {
        s: "NAMESPACE_ERR",
        c: 14,
        m: 1
      },
      InvalidAccessError: {
        s: "INVALID_ACCESS_ERR",
        c: 15,
        m: 1
      },
      ValidationError: {
        s: "VALIDATION_ERR",
        c: 16,
        m: 0
      },
      TypeMismatchError: {
        s: "TYPE_MISMATCH_ERR",
        c: 17,
        m: 1
      },
      SecurityError: {
        s: "SECURITY_ERR",
        c: 18,
        m: 1
      },
      NetworkError: {
        s: "NETWORK_ERR",
        c: 19,
        m: 1
      },
      AbortError: {
        s: "ABORT_ERR",
        c: 20,
        m: 1
      },
      URLMismatchError: {
        s: "URL_MISMATCH_ERR",
        c: 21,
        m: 1
      },
      QuotaExceededError: {
        s: "QUOTA_EXCEEDED_ERR",
        c: 22,
        m: 1
      },
      TimeoutError: {
        s: "TIMEOUT_ERR",
        c: 23,
        m: 1
      },
      InvalidNodeTypeError: {
        s: "INVALID_NODE_TYPE_ERR",
        c: 24,
        m: 1
      },
      DataCloneError: {
        s: "DATA_CLONE_ERR",
        c: 25,
        m: 1
      }
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/error-stack-clear.js
var require_error_stack_clear = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/error-stack-clear.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), $Error = Error, replace = uncurryThis("".replace), TEST = function(arg) {
      return String(new $Error(arg).stack);
    }("zxcasd"), V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/, IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);
    module2.exports = function(stack, dropEntries) {
      if (IS_V8_OR_CHAKRA_STACK && typeof stack == "string" && !$Error.prepareStackTrace)
        for (; dropEntries--; )
          stack = replace(stack, V8_OR_CHAKRA_STACK_ENTRY, "");
      return stack;
    };
  }
});

// node_modules/libram/node_modules/core-js/modules/web.dom-exception.constructor.js
var require_web_dom_exception_constructor = __commonJS({
  "node_modules/libram/node_modules/core-js/modules/web.dom-exception.constructor.js": function() {
    "use strict";
    init_kolmafia_polyfill();
    var $ = require_export(), getBuiltIn = require_get_built_in(), getBuiltInNodeModule = require_get_built_in_node_module(), fails = require_fails(), create9 = require_object_create(), createPropertyDescriptor = require_create_property_descriptor(), defineProperty = require_object_define_property().f, defineBuiltIn = require_define_built_in(), defineBuiltInAccessor = require_define_built_in_accessor(), hasOwn = require_has_own_property(), anInstance = require_an_instance(), anObject = require_an_object(), errorToString = require_error_to_string(), normalizeStringArgument = require_normalize_string_argument(), DOMExceptionConstants = require_dom_exception_constants(), clearErrorStack = require_error_stack_clear(), InternalStateModule = require_internal_state(), DESCRIPTORS = require_descriptors(), IS_PURE = require_is_pure(), DOM_EXCEPTION = "DOMException", DATA_CLONE_ERR = "DATA_CLONE_ERR", Error2 = getBuiltIn("Error"), NativeDOMException = getBuiltIn(DOM_EXCEPTION) || function() {
      try {
        var MessageChannel = getBuiltIn("MessageChannel") || getBuiltInNodeModule("worker_threads").MessageChannel;
        new MessageChannel().port1.postMessage(/* @__PURE__ */ new WeakMap());
      } catch (error) {
        if (error.name === DATA_CLONE_ERR && error.code === 25)
          return error.constructor;
      }
    }(), NativeDOMExceptionPrototype = NativeDOMException && NativeDOMException.prototype, ErrorPrototype = Error2.prototype, setInternalState = InternalStateModule.set, getInternalState = InternalStateModule.getterFor(DOM_EXCEPTION), HAS_STACK = "stack" in new Error2(DOM_EXCEPTION), codeFor = function(name) {
      return hasOwn(DOMExceptionConstants, name) && DOMExceptionConstants[name].m ? DOMExceptionConstants[name].c : 0;
    }, $DOMException = function() {
      anInstance(this, DOMExceptionPrototype);
      var argumentsLength = arguments.length, message = normalizeStringArgument(argumentsLength < 1 ? void 0 : arguments[0]), name = normalizeStringArgument(argumentsLength < 2 ? void 0 : arguments[1], "Error"), code = codeFor(name);
      if (setInternalState(this, {
        type: DOM_EXCEPTION,
        name: name,
        message: message,
        code: code
      }), DESCRIPTORS || (this.name = name, this.message = message, this.code = code), HAS_STACK) {
        var error = new Error2(message);
        error.name = DOM_EXCEPTION, defineProperty(this, "stack", createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
      }
    }, DOMExceptionPrototype = $DOMException.prototype = create9(ErrorPrototype), createGetterDescriptor = function(get4) {
      return {
        enumerable: !0,
        configurable: !0,
        get: get4
      };
    }, getterFor = function(key2) {
      return createGetterDescriptor(function() {
        return getInternalState(this)[key2];
      });
    };
    DESCRIPTORS && (defineBuiltInAccessor(DOMExceptionPrototype, "code", getterFor("code")), defineBuiltInAccessor(DOMExceptionPrototype, "message", getterFor("message")), defineBuiltInAccessor(DOMExceptionPrototype, "name", getterFor("name")));
    defineProperty(DOMExceptionPrototype, "constructor", createPropertyDescriptor(1, $DOMException));
    var INCORRECT_CONSTRUCTOR = fails(function() {
      return !(new NativeDOMException() instanceof Error2);
    }), INCORRECT_TO_STRING = INCORRECT_CONSTRUCTOR || fails(function() {
      return ErrorPrototype.toString !== errorToString || String(new NativeDOMException(1, 2)) !== "2: 1";
    }), INCORRECT_CODE = INCORRECT_CONSTRUCTOR || fails(function() {
      return new NativeDOMException(1, "DataCloneError").code !== 25;
    }), MISSED_CONSTANTS = INCORRECT_CONSTRUCTOR || NativeDOMException[DATA_CLONE_ERR] !== 25 || NativeDOMExceptionPrototype[DATA_CLONE_ERR] !== 25, FORCED_CONSTRUCTOR = IS_PURE ? INCORRECT_TO_STRING || INCORRECT_CODE || MISSED_CONSTANTS : INCORRECT_CONSTRUCTOR;
    $({
      global: !0,
      constructor: !0,
      forced: FORCED_CONSTRUCTOR
    }, {
      DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
    });
    var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION), PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
    INCORRECT_TO_STRING && (IS_PURE || NativeDOMException === PolyfilledDOMException) && defineBuiltIn(PolyfilledDOMExceptionPrototype, "toString", errorToString);
    INCORRECT_CODE && DESCRIPTORS && NativeDOMException === PolyfilledDOMException && defineBuiltInAccessor(PolyfilledDOMExceptionPrototype, "code", createGetterDescriptor(function() {
      return codeFor(anObject(this).name);
    }));
    for (key in DOMExceptionConstants)
      hasOwn(DOMExceptionConstants, key) && (constant = DOMExceptionConstants[key], constantName = constant.s, descriptor = createPropertyDescriptor(6, constant.c), hasOwn(PolyfilledDOMException, constantName) || defineProperty(PolyfilledDOMException, constantName, descriptor), hasOwn(PolyfilledDOMExceptionPrototype, constantName) || defineProperty(PolyfilledDOMExceptionPrototype, constantName, descriptor));
    var constant, constantName, descriptor, key;
  }
});

// node_modules/libram/node_modules/core-js/internals/function-uncurry-this-accessor.js
var require_function_uncurry_this_accessor = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/function-uncurry-this-accessor.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThis = require_function_uncurry_this(), aCallable = require_a_callable();
    module2.exports = function(object, key, method) {
      try {
        return uncurryThis(aCallable(Object.getOwnPropertyDescriptor(object, key)[method]));
      } catch (error) {
      }
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/is-possible-prototype.js
var require_is_possible_prototype = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/is-possible-prototype.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var isObject = require_is_object();
    module2.exports = function(argument) {
      return isObject(argument) || argument === null;
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/a-possible-prototype.js
var require_a_possible_prototype = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/a-possible-prototype.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var isPossiblePrototype = require_is_possible_prototype(), $String = String, $TypeError = TypeError;
    module2.exports = function(argument) {
      if (isPossiblePrototype(argument))
        return argument;
      throw new $TypeError("Can't set " + $String(argument) + " as a prototype");
    };
  }
});

// node_modules/libram/node_modules/core-js/internals/object-set-prototype-of.js
var require_object_set_prototype_of = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/object-set-prototype-of.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var uncurryThisAccessor = require_function_uncurry_this_accessor(), isObject = require_is_object(), requireObjectCoercible = require_require_object_coercible(), aPossiblePrototype = require_a_possible_prototype();
    module2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
      var CORRECT_SETTER = !1, test = {}, setter;
      try {
        setter = uncurryThisAccessor(Object.prototype, "__proto__", "set"), setter(test, []), CORRECT_SETTER = test instanceof Array;
      } catch (error) {
      }
      return function(O, proto) {
        return requireObjectCoercible(O), aPossiblePrototype(proto), isObject(O) && (CORRECT_SETTER ? setter(O, proto) : O.__proto__ = proto), O;
      };
    }() : void 0);
  }
});

// node_modules/libram/node_modules/core-js/internals/inherit-if-required.js
var require_inherit_if_required = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/inherit-if-required.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var isCallable = require_is_callable(), isObject = require_is_object(), setPrototypeOf = require_object_set_prototype_of();
    module2.exports = function($this, dummy, Wrapper) {
      var NewTarget, NewTargetPrototype;
      return setPrototypeOf && isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype && setPrototypeOf($this, NewTargetPrototype), $this;
    };
  }
});

// node_modules/libram/node_modules/core-js/modules/web.dom-exception.stack.js
var require_web_dom_exception_stack = __commonJS({
  "node_modules/libram/node_modules/core-js/modules/web.dom-exception.stack.js": function() {
    "use strict";
    init_kolmafia_polyfill();
    var $ = require_export(), globalThis2 = require_global_this(), getBuiltIn = require_get_built_in(), createPropertyDescriptor = require_create_property_descriptor(), defineProperty = require_object_define_property().f, hasOwn = require_has_own_property(), anInstance = require_an_instance(), inheritIfRequired = require_inherit_if_required(), normalizeStringArgument = require_normalize_string_argument(), DOMExceptionConstants = require_dom_exception_constants(), clearErrorStack = require_error_stack_clear(), DESCRIPTORS = require_descriptors(), IS_PURE = require_is_pure(), DOM_EXCEPTION = "DOMException", Error2 = getBuiltIn("Error"), NativeDOMException = getBuiltIn(DOM_EXCEPTION), $DOMException = function() {
      anInstance(this, DOMExceptionPrototype);
      var argumentsLength = arguments.length, message = normalizeStringArgument(argumentsLength < 1 ? void 0 : arguments[0]), name = normalizeStringArgument(argumentsLength < 2 ? void 0 : arguments[1], "Error"), that = new NativeDOMException(message, name), error = new Error2(message);
      return error.name = DOM_EXCEPTION, defineProperty(that, "stack", createPropertyDescriptor(1, clearErrorStack(error.stack, 1))), inheritIfRequired(that, this, $DOMException), that;
    }, DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype, ERROR_HAS_STACK = "stack" in new Error2(DOM_EXCEPTION), DOM_EXCEPTION_HAS_STACK = "stack" in new NativeDOMException(1, 2), descriptor = NativeDOMException && DESCRIPTORS && Object.getOwnPropertyDescriptor(globalThis2, DOM_EXCEPTION), BUGGY_DESCRIPTOR = !!descriptor && !(descriptor.writable && descriptor.configurable), FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !BUGGY_DESCRIPTOR && !DOM_EXCEPTION_HAS_STACK;
    $({
      global: !0,
      constructor: !0,
      forced: IS_PURE || FORCED_CONSTRUCTOR
    }, {
      DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
    });
    var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION), PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;
    if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
      IS_PURE || defineProperty(PolyfilledDOMExceptionPrototype, "constructor", createPropertyDescriptor(1, PolyfilledDOMException));
      for (key in DOMExceptionConstants)
        hasOwn(DOMExceptionConstants, key) && (constant = DOMExceptionConstants[key], constantName = constant.s, hasOwn(PolyfilledDOMException, constantName) || defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c)));
    }
    var constant, constantName, key;
  }
});

// node_modules/libram/node_modules/core-js/internals/set-to-string-tag.js
var require_set_to_string_tag = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/set-to-string-tag.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var defineProperty = require_object_define_property().f, hasOwn = require_has_own_property(), wellKnownSymbol = require_well_known_symbol(), TO_STRING_TAG = wellKnownSymbol("toStringTag");
    module2.exports = function(target, TAG, STATIC) {
      target && !STATIC && (target = target.prototype), target && !hasOwn(target, TO_STRING_TAG) && defineProperty(target, TO_STRING_TAG, {
        configurable: !0,
        value: TAG
      });
    };
  }
});

// node_modules/libram/node_modules/core-js/modules/web.dom-exception.to-string-tag.js
var require_web_dom_exception_to_string_tag = __commonJS({
  "node_modules/libram/node_modules/core-js/modules/web.dom-exception.to-string-tag.js": function() {
    "use strict";
    init_kolmafia_polyfill();
    var getBuiltIn = require_get_built_in(), setToStringTag = require_set_to_string_tag(), DOM_EXCEPTION = "DOMException";
    setToStringTag(getBuiltIn(DOM_EXCEPTION), DOM_EXCEPTION);
  }
});

// node_modules/libram/node_modules/core-js/internals/path.js
var require_path = __commonJS({
  "node_modules/libram/node_modules/core-js/internals/path.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    var globalThis2 = require_global_this();
    module2.exports = globalThis2;
  }
});

// node_modules/libram/node_modules/core-js/stable/atob.js
var require_atob = __commonJS({
  "node_modules/libram/node_modules/core-js/stable/atob.js": function(exports, module2) {
    "use strict";
    init_kolmafia_polyfill();
    require_es_error_to_string();
    require_es_object_to_string();
    require_web_atob();
    require_web_dom_exception_constructor();
    require_web_dom_exception_stack();
    require_web_dom_exception_to_string_tag();
    var path = require_path();
    module2.exports = path.atob;
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  main: function() {
    return main;
  }
});
module.exports = __toCommonJS(src_exports);
init_kolmafia_polyfill();

// src/boozedrop.ts
init_kolmafia_polyfill();

// src/combat.ts
init_kolmafia_polyfill();

// node_modules/grimoire-kolmafia/dist/index.js
init_kolmafia_polyfill();

// node_modules/grimoire-kolmafia/dist/args.js
init_kolmafia_polyfill();
var import_kolmafia = require("kolmafia");
var specSymbol = Symbol("spec"), scriptSymbol = Symbol("script"), scriptHelpSymbol = Symbol("scriptHelp"), optionsSymbol = Symbol("options");

// node_modules/grimoire-kolmafia/dist/combat.js
init_kolmafia_polyfill();
var import_kolmafia30 = require("kolmafia");

// node_modules/libram/dist/index.js
init_kolmafia_polyfill();

// node_modules/libram/dist/combat.js
init_kolmafia_polyfill();
var import_kolmafia6 = require("kolmafia");

// node_modules/libram/dist/lib.js
init_kolmafia_polyfill();
var import_kolmafia5 = require("kolmafia");

// node_modules/libram/dist/logger.js
init_kolmafia_polyfill();
var import_kolmafia2 = require("kolmafia"), _defaultHandlers;
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties(Constructor.prototype, protoProps), staticProps && _defineProperties(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty(obj, key, value) {
  return key = _toPropertyKey(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var LogLevels;
(function(LogLevels2) {
  LogLevels2[LogLevels2.NONE = 0] = "NONE", LogLevels2[LogLevels2.ERROR = 1] = "ERROR", LogLevels2[LogLevels2.WARNING = 2] = "WARNING", LogLevels2[LogLevels2.INFO = 3] = "INFO", LogLevels2[LogLevels2.DEBUG = 4] = "DEBUG";
})(LogLevels || (LogLevels = {}));
var defaultHandlers = (_defaultHandlers = {}, _defineProperty(_defaultHandlers, LogLevels.INFO, function(message) {
  (0, import_kolmafia2.printHtml)("<b>[Libram Info]</b> ".concat(message)), (0, import_kolmafia2.logprint)("[Libram] ".concat(message));
}), _defineProperty(_defaultHandlers, LogLevels.WARNING, function(message) {
  (0, import_kolmafia2.printHtml)('<span style="background: orange; color: white;"><b>[Libram Warning]</b> '.concat(message, "</span>")), (0, import_kolmafia2.logprint)("[Libram] ".concat(message));
}), _defineProperty(_defaultHandlers, LogLevels.ERROR, function(error) {
  (0, import_kolmafia2.printHtml)('<span style="background: red; color: white;"><b>[Libram Error]</b> '.concat(error.toString(), "</span>")), (0, import_kolmafia2.logprint)("[Libram] ".concat(error));
}), _defineProperty(_defaultHandlers, LogLevels.DEBUG, function(message) {
  (0, import_kolmafia2.printHtml)('<span style="background: red; color: white;"><b>[Libram Debug]</b> '.concat(message, "</span>")), (0, import_kolmafia2.logprint)("[Libram] ".concat(message));
}), _defaultHandlers), Logger = /* @__PURE__ */ function() {
  function Logger2() {
    _classCallCheck(this, Logger2), _defineProperty(this, "handlers", defaultHandlers);
  }
  return _createClass(Logger2, [{
    key: "level",
    get: function() {
      return Logger2.currentLevel;
    }
  }, {
    key: "setLevel",
    value: function(level) {
      Logger2.currentLevel = level;
    }
  }, {
    key: "setHandler",
    value: function(level, callback) {
      this.handlers[level] = callback;
    }
  }, {
    key: "log",
    value: function(level, message) {
      this.level >= level && this.handlers[level](message);
    }
  }, {
    key: "info",
    value: function(message) {
      this.log(LogLevels.INFO, message);
    }
  }, {
    key: "warning",
    value: function(message) {
      this.log(LogLevels.WARNING, message);
    }
  }, {
    key: "error",
    value: function(message) {
      this.log(LogLevels.ERROR, message);
    }
  }, {
    key: "debug",
    value: function(message) {
      this.log(LogLevels.DEBUG, message);
    }
  }]), Logger2;
}();
_defineProperty(Logger, "currentLevel", LogLevels.ERROR);
var logger_default = new Logger();

// node_modules/libram/dist/property.js
init_kolmafia_polyfill();
var import_kolmafia3 = require("kolmafia");

// node_modules/libram/dist/propertyTypes.js
init_kolmafia_polyfill();
var booleanProperties = ["abortOnChoiceWhenNotInChoice", "addChatCommandLine", "addCreationQueue", "addStatusBarToFrames", "allowCloseableDesktopTabs", "allowNegativeTally", "allowNonMoodBurning", "allowSummonBurning", "autoHighlightOnFocus", "broadcastEvents", "cacheMallSearches", "chatBeep", "chatLinksUseRelay", "compactChessboard", "copyAsHTML", "customizedTabs", "debugBuy", "debugConsequences", "debugFoxtrotRemoval", "debugPathnames", "debugTopMenuStyle", "gapProtection", "gitInstallDependencies", "gitShowCommitMessages", "gitUpdateOnLogin", "greenScreenProtection", "guiUsesOneWindow", "hideServerDebugText", "logAcquiredItems", "logBattleAction", "logBrowserInteractions", "logChatMessages", "logChatRequests", "logCleanedHTML", "logDecoratedResponses", "logFamiliarActions", "logGainMessages", "logReadableHTML", "logPreferenceChange", "logMonsterHealth", "logReverseOrder", "logStatGains", "logStatusEffects", "logStatusOnLogin", "macroDebug", "macroLens", "mementoListActive", "mergeHobopolisChat", "pingLogin", "pingStealthyTimein", "printStackOnAbort", "proxySet", "relayAddSounds", "relayAddsCustomCombat", "relayAddsDiscoHelper", "relayAddsGraphicalCLI", "relayAddsQuickScripts", "relayAddsRestoreLinks", "relayAddsUpArrowLinks", "relayAddsUseLinks", "relayAddsWikiLinks", "relayAllowRemoteAccess", "relayBrowserOnly", "relayCacheUncacheable", "relayFormatsChatText", "relayHidesJunkMallItems", "relayMaintainsEffects", "relayMaintainsHealth", "relayMaintainsMana", "relayOverridesImages", "relayRunsAfterAdventureScript", "relayRunsBeforeBattleScript", "relayRunsBeforePVPScript", "relayScriptButtonFirst", "relayTextualizesEffects", "relayTrimsZapList", "relayUsesInlineLinks", "relayUsesIntegratedChat", "relayWarnOnRecoverFailure", "removeMalignantEffects", "saveSettingsOnSet", "sharePriceData", "showAllRequests", "showExceptionalRequests", "stealthLogin", "svnAlwaysAdd", "svnAlwaysOverwrite", "svnInstallDependencies", "svnShowCommitMessages", "svnUpdateOnLogin", "switchEquipmentForBuffs", "syncAfterSvnUpdate", "useChatToolbar", "useContactsFrame", "useDevServer", "useDockIconBadge", "useHugglerChannel", "useImageCache", "useLastUserAgent", "useSystemTrayIcon", "useTabbedChatFrame", "useToolbars", "useCachedVolcanoMaps", "useZoneComboBox", "verboseSpeakeasy", "verboseFloundry", "wrapLongLines", "_faxDataChanged", "_gitUpdated", "_svnRepoFileFetched", "_svnUpdated", "antagonisticSnowmanKitAvailable", "arcadeGameHints", "armoryUnlocked", "autoForbidIgnoringStores", "autoCraft", "autoQuest", "autoEntangle", "autoGarish", "autoManaRestore", "autoFillMayoMinder", "autoPinkyRing", "autoPlantHardcore", "autoPlantSoftcore", "autoPotionID", "autoRepairBoxServants", "autoSatisfyWithCloset", "autoSatisfyWithCoinmasters", "autoSatisfyWithMall", "autoSatisfyWithNPCs", "autoSatisfyWithStash", "autoSatisfyWithStorage", "autoSatisfyWithShop", "autoSetConditions", "autoSteal", "autoTuxedo", "backupCameraReverserEnabled", "badMoonEncounter01", "badMoonEncounter02", "badMoonEncounter03", "badMoonEncounter04", "badMoonEncounter05", "badMoonEncounter06", "badMoonEncounter07", "badMoonEncounter08", "badMoonEncounter09", "badMoonEncounter10", "badMoonEncounter11", "badMoonEncounter12", "badMoonEncounter13", "badMoonEncounter14", "badMoonEncounter15", "badMoonEncounter16", "badMoonEncounter17", "badMoonEncounter18", "badMoonEncounter19", "badMoonEncounter20", "badMoonEncounter21", "badMoonEncounter22", "badMoonEncounter23", "badMoonEncounter24", "badMoonEncounter25", "badMoonEncounter26", "badMoonEncounter27", "badMoonEncounter28", "badMoonEncounter29", "badMoonEncounter30", "badMoonEncounter31", "badMoonEncounter32", "badMoonEncounter33", "badMoonEncounter34", "badMoonEncounter35", "badMoonEncounter36", "badMoonEncounter37", "badMoonEncounter38", "badMoonEncounter39", "badMoonEncounter40", "badMoonEncounter41", "badMoonEncounter42", "badMoonEncounter43", "badMoonEncounter44", "badMoonEncounter45", "badMoonEncounter46", "badMoonEncounter47", "badMoonEncounter48", "barrelShrineUnlocked", "batWingsBatHoleEntrance", "batWingsBatratBurrow", "batWingsBeanbatChamber", "batWingsGuanoJunction", "bigBrotherRescued", "blackBartsBootyAvailable", "bondAdv", "bondBeach", "bondBeat", "bondBooze", "bondBridge", "bondDesert", "bondDR", "bondDrunk1", "bondDrunk2", "bondHoney", "bondHP", "bondInit", "bondItem1", "bondItem2", "bondItem3", "bondJetpack", "bondMartiniDelivery", "bondMartiniPlus", "bondMartiniTurn", "bondMeat", "bondMox1", "bondMox2", "bondMPregen", "bondMus1", "bondMus2", "bondMys1", "bondMys2", "bondSpleen", "bondStat", "bondStat2", "bondStealth", "bondStealth2", "bondSymbols", "bondWar", "bondWeapon2", "bondWpn", "bookOfIronyAvailable", "booPeakLit", "bootsCharged", "breakfastCompleted", "burlyBodyguardReceivedBonus", "burrowgrubHiveUsed", "calzoneOfLegendEaten", "candyCaneSwordApartmentBuilding", "candyCaneSwordBlackForest", "candyCaneSwordBowlingAlley", "candyCaneSwordCopperheadClub", "candyCaneSwordDailyDungeon", "candyCaneSwordDefiledCranny", "candyCaneSwordFunHouse", "candyCaneSwordShore", "candyCaneSwordWarFratRoom", "candyCaneSwordWarFratZetas", "candyCaneSwordWarHippyBait", "candyCaneSwordWarHippyLine", "canteenUnlocked", "chaosButterflyThrown", "chatbotScriptExecuted", "chateauAvailable", "chatLiterate", "chatServesUpdates", "checkJackassHardcore", "checkJackassSoftcore", "clanAttacksEnabled", "coldAirportAlways", "considerShadowNoodles", "controlRoomUnlock", "concertVisited", "controlPanel1", "controlPanel2", "controlPanel3", "controlPanel4", "controlPanel5", "controlPanel6", "controlPanel7", "controlPanel8", "controlPanel9", "corralUnlocked", "crAlways", "crimbo23ArmoryAtWar", "crimbo23BarAtWar", "crimbo23CafeAtWar", "crimbo23CottageAtWar", "crimbo23FoundryAtWar", "cyberDatastickCollected", "dailyDungeonDone", "dampOldBootPurchased", "daycareOpen", "deepDishOfLegendEaten", "demonSummoned", "dinseyAudienceEngagement", "dinseyGarbagePirate", "dinseyRapidPassEnabled", "dinseyRollercoasterNext", "dinseySafetyProtocolsLoose", "doghouseBoarded", "dontStopForCounters", "drippingHallUnlocked", "drippyShieldUnlocked", "edUsedLash", "eldritchFissureAvailable", "eldritchHorrorAvailable", "enqueueForConsumption", "errorOnAmbiguousFold", "essenceOfAnnoyanceAvailable", "essenceOfBearAvailable", "expressCardUsed", "falloutShelterChronoUsed", "falloutShelterCoolingTankUsed", "fireExtinguisherBatHoleUsed", "fireExtinguisherChasmUsed", "fireExtinguisherCyrptUsed", "fireExtinguisherDesertUsed", "fireExtinguisherHaremUsed", "fistTeachingsHaikuDungeon", "fistTeachingsPokerRoom", "fistTeachingsBarroomBrawl", "fistTeachingsConservatory", "fistTeachingsBatHole", "fistTeachingsFunHouse", "fistTeachingsMenagerie", "fistTeachingsSlums", "fistTeachingsFratHouse", "fistTeachingsRoad", "fistTeachingsNinjaSnowmen", "flickeringPixel1", "flickeringPixel2", "flickeringPixel3", "flickeringPixel4", "flickeringPixel5", "flickeringPixel6", "flickeringPixel7", "flickeringPixel8", "floristFriarAvailable", "floristFriarChecked", "frAlways", "frCemetaryUnlocked", "friarsBlessingReceived", "frMountainsUnlocked", "frSwampUnlocked", "frVillageUnlocked", "frWoodUnlocked", "getawayCampsiteUnlocked", "ghostPencil1", "ghostPencil2", "ghostPencil3", "ghostPencil4", "ghostPencil5", "ghostPencil6", "ghostPencil7", "ghostPencil8", "ghostPencil9", "gingerAdvanceClockUnlocked", "gingerBlackmailAccomplished", "gingerbreadCityAvailable", "gingerExtraAdventures", "gingerNegativesDropped", "gingerSewersUnlocked", "gingerSubwayLineUnlocked", "gingerRetailUnlocked", "glitchItemAvailable", "grabCloversHardcore", "grabCloversSoftcore", "grandpaUnlockedBlankPrescriptionSheet", "grandpaUnlockedEelSauce", "grandpaUnlockedFishyWand", "grandpaUnlockedGlowingSyringe", "grandpaUnlockedGroupieSpangles", "grandpaUnlockedHairOfTheFish", "grandpaUnlockedHalibut", "grandpaUnlockedHeavilyInvestedInPunFutures", "grandpaUnlockedJellyfishGel", "grandpaUnlockedMarineAquamarine", "grandpaUnlockedMidgetClownfish", "grandpaUnlockedSeaRadish", "grandpaUnlockedTrophyFish", "grandpaUnlockedWaterPoloCap", "grandpaUnlockedWaterPoloMitt", "guideToSafariAvailable", "guyMadeOfBeesDefeated", "hallowienerDefiledNook", "hallowienerGuanoJunction", "hallowienerKnollGym", "hallowienerMadnessBakery", "hallowienerMiddleChamber", "hallowienerOvergrownLot", "hallowienerSkeletonStore", "hallowienerSmutOrcs", "hallowienerSonofaBeach", "hallowienerVolcoino", "hardcorePVPWarning", "harvestBatteriesHardcore", "harvestBatteriesSoftcore", "hasAutumnaton", "hasBartender", "hasChef", "hasCocktailKit", "hasCosmicBowlingBall", "hasDetectiveSchool", "hasMaydayContract", "hasOven", "hasRange", "hasShaker", "hasShrunkenHead", "hasSushiMat", "hasTwinkleVision", "haveBoxingDaydreamHardcore", "haveBoxingDaydreamSoftcore", "hermitHax0red", "holidayHalsBookAvailable", "horseryAvailable", "hotAirportAlways", "intenseCurrents", "isMerkinGladiatorChampion", "isMerkinHighPriest", "itemBoughtPerAscension637", "itemBoughtPerAscension8266", "itemBoughtPerAscension10790", "itemBoughtPerAscension10794", "itemBoughtPerAscension10795", "itemBoughtPerCharacter6423", "itemBoughtPerCharacter6428", "itemBoughtPerCharacter6429", "kingLiberated", "lastPirateInsult1", "lastPirateInsult2", "lastPirateInsult3", "lastPirateInsult4", "lastPirateInsult5", "lastPirateInsult6", "lastPirateInsult7", "lastPirateInsult8", "lawOfAveragesAvailable", "leafletCompleted", "ledCandleDropped", "libraryCardUsed", "lockPicked", "logBastilleBattalionBattles", "loginRecoveryHardcore", "loginRecoverySoftcore", "lovebugsUnlocked", "loveTunnelAvailable", "lowerChamberUnlock", "madnessBakeryAvailable", "makeHandheldRadiosHardcore", "makeHandheldRadiosSoftcore", "makePocketWishesHardcore", "makePocketWishesSoftcore", "manualOfNumberologyAvailable", "mappingMonsters", "mapToAnemoneMinePurchased", "mapToKokomoAvailable", "mapToMadnessReefPurchased", "mapToTheDiveBarPurchased", "mapToTheMarinaraTrenchPurchased", "mapToTheSkateParkPurchased", "maraisBeaverUnlock", "maraisCorpseUnlock", "maraisDarkUnlock", "maraisVillageUnlock", "maraisWildlifeUnlock", "maraisWizardUnlock", "maximizerAlwaysCurrent", "maximizerCreateOnHand", "maximizerCurrentMallPrices", "maximizerFoldables", "maximizerIncludeAll", "maximizerNoAdventures", "maximizerUseScope", "merkinElementaryBathroomUnlock", "merkinElementaryJanitorUnlock", "merkinElementaryTeacherUnlock", "middleChamberUnlock", "milkOfMagnesiumActive", "moonTuned", "neverendingPartyAlways", "noncombatForcerActive", "oasisAvailable", "odeBuffbotCheck", "oilPeakLit", "oscusSodaUsed", "outrageousSombreroUsed", "overgrownLotAvailable", "ownsFloristFriar", "ownsSpeakeasy", "pathedSummonsHardcore", "pathedSummonsSoftcore", "pirateRealmUnlockedAnemometer", "pirateRealmUnlockedBlunderbuss", "pirateRealmUnlockedBreastplate", "pirateRealmUnlockedClipper", "pirateRealmUnlockedCrabsicle", "pirateRealmUnlockedFlag", "pirateRealmUnlockedFork", "pirateRealmUnlockedGoldRing", "pirateRealmUnlockedManOWar", "pirateRealmUnlockedPlushie", "pirateRealmUnlockedRadioRing", "pirateRealmUnlockedRhum", "pirateRealmUnlockedScurvySkillbook", "pirateRealmUnlockedShavingCream", "pirateRealmUnlockedSpyglass", "pirateRealmUnlockedTattoo", "pirateRealmUnlockedThirdCrewmate", "pirateRealmUnlockedTikiSkillbook", "pizzaOfLegendEaten", "popularTartUnlocked", "potatoAlarmClockUsed", "prAlways", "prayedForGlamour", "prayedForProtection", "prayedForVigor", "primaryLabCheerCoreGrabbed", "pumpkinSpiceWhorlUsed", "pyramidBombUsed", "rageGlandVented", "readManualHardcore", "readManualSoftcore", "relayDecorateJsCommands", "relayShowSpoilers", "relayShowWarnings", "rememberDesktopSize", "replicaChateauAvailable", "replicaNeverendingPartyAlways", "replicaWitchessSetAvailable", "requireBoxServants", "requireSewerTestItems", "restUsingCampAwayTent", "restUsingChateau", "ROMOfOptimalityAvailable", "safePickpocket", "schoolOfHardKnocksDiplomaAvailable", "scriptCascadingMenus", "serverAddsCustomCombat", "serverAddsBothCombat", "SHAWARMAInitiativeUnlocked", "showForbiddenStores", "showGainsPerUnit", "showIgnoringStorePrices", "showNoSummonOnly", "showTurnFreeOnly", "shubJigguwattDefeated", "skeletonStoreAvailable", "sleazeAirportAlways", "snojoAvailable", "sortByEffect", "sortByRoom", "spacegateAlways", "spacegateVaccine1", "spacegateVaccine2", "spacegateVaccine3", "spaceInvaderDefeated", "spelunkyHints", "spiceMelangeUsed", "spookyAirportAlways", "stenchAirportAlways", "stopForFixedWanderer", "stopForUltraRare", "styxPixieVisited", "superconductorDefeated", "suppressCyberRealmDarkMode", "suppressCyberRealmGreenImages", "suppressInappropriateNags", "suppressPowerPixellation", "suppressMallPriceCacheMessages", "telegraphOfficeAvailable", "telescopeLookedHigh", "timeTowerAvailable", "trackLightsOut", "uneffectWithHotTub", "universalSeasoningActive", "universalSeasoningAvailable", "useBookOfEverySkillHardcore", "useBookOfEverySkillSoftcore", "useCrimboToysHardcore", "useCrimboToysSoftcore", "verboseMaximizer", "visitLoungeHardcore", "visitLoungeSoftcore", "visitRumpusHardcore", "visitRumpusSoftcore", "voteAlways", "wildfireBarrelCaulked", "wildfireDusted", "wildfireFracked", "wildfirePumpGreased", "wildfireSprinkled", "yearbookCameraPending", "yogUrtDefeated", "youRobotScavenged", "_2002MrStoreCreditsCollected", "_affirmationCookieEaten", "_affirmationHateUsed", "_airFryerUsed", "_akgyxothUsed", "_alienAnimalMilkUsed", "_alienPlantPodUsed", "_allYearSucker", "_alliedRadioMaterielIntel", "_alliedRadioWildsunBoon", "_aprilShower", "_aprilShowerGlobsCollected", "_aprilShowerLungingThrustSmack", "_aprilShowerNorthernExplosion", "_aprilShowerSimmer", "_armyToddlerCast", "_aug1Cast", "_aug2Cast", "_aug3Cast", "_aug4Cast", "_aug5Cast", "_aug6Cast", "_aug7Cast", "_aug8Cast", "_aug9Cast", "_aug10Cast", "_aug11Cast", "_aug12Cast", "_aug13Cast", "_aug14Cast", "_aug15Cast", "_aug16Cast", "_aug17Cast", "_aug18Cast", "_aug19Cast", "_aug20Cast", "_aug21Cast", "_aug22Cast", "_aug23Cast", "_aug24Cast", "_aug25Cast", "_aug26Cast", "_aug27Cast", "_aug28Cast", "_aug29Cast", "_aug30Cast", "_aug31Cast", "_augTodayCast", "_authorsInkUsed", "_baconMachineUsed", "_bagOfCandy", "_bagOfCandyUsed", "_bagOTricksUsed", "_ballastTurtleUsed", "_ballInACupUsed", "_ballpit", "_barrelPrayer", "_bastilleLastBattleWon", "_beachCombing", "_bendHellUsed", "_blackMonolithUsed", "_blankoutUsed", "_bloodBagDoctorBag", "_bloodBagCloake", "_bloodBankIntimidated", "_bloodBankVisited", "_bonersSummoned", "_bookOfEverySkillUsed", "_borrowedTimeUsed", "_bowleggedSwaggerUsed", "_bowlFullOfJellyUsed", "_boxOfHammersUsed", "_brainPreservationFluidUsed", "_brassDreadFlaskUsed", "_cameraUsed", "_canSeekBirds", "_candyCaneSwordBackAlley", "_candyCaneSwordHauntedBedroom", "_candyCaneSwordHauntedLibrary", "_candyCaneSwordLyle", "_candyCaneSwordMadnessBakery", "_candyCaneSwordOvergrownLot", "_candyCaneSwordOvergrownShrine", "_candyCaneSwordPalindome", "_candyCaneSwordSouthOfTheBorder", "_candyCaneSwordSpookyForest", "_carboLoaded", "_cargoPocketEmptied", "_ceciHatUsed", "_chateauDeskHarvested", "_chateauMonsterFought", "_chibiChanged", "_chronerCrossUsed", "_chronerTriggerUsed", "_chubbyAndPlumpUsed", "_circadianRhythmsRecalled", "_circleDrumUsed", "_clanFortuneBuffUsed", "_claraBellUsed", "_coalPaperweightUsed", "_cocoaDispenserUsed", "_cocktailShakerUsed", "_coldAirportToday", "_coldOne", "_communismUsed", "_confusingLEDClockUsed", "_controlPanelUsed", "_cookbookbatRecipeDrops", "_coolerYetiAdventures", "_corruptedStardustUsed", "_cosmicSixPackConjured", "_crappyCameraUsed", "_creepyVoodooDollUsed", "_crimboPastDailySpecial", "_crimboPastMedicalGruel", "_crimboPastPrizeTurkey", "_crimboPastSmokingPope", "_crimboTraining", "_crimboTree", "_crToday", "_cursedKegUsed", "_cursedMicrowaveUsed", "_cyberTrashCollected", "_dailyDungeonMalwareUsed", "_darkChocolateHeart", "_daycareFights", "_daycareNap", "_daycareSpa", "_daycareToday", "_defectiveTokenChecked", "_defectiveTokenUsed", "_dinseyGarbageDisposed", "_discoKnife", "_distentionPillUsed", "_dnaHybrid", "_docClocksThymeCocktailDrunk", "_douseFoeSuccess", "_drippingHallDoor1", "_drippingHallDoor2", "_drippingHallDoor3", "_drippingHallDoor4", "_drippyCaviarUsed", "_drippyNuggetUsed", "_drippyPilsnerUsed", "_drippyPlumUsed", "_drippyWineUsed", "_eldritchHorrorEvoked", "_eldritchTentacleFought", "_emberingHulkFought", "_entauntaunedToday", "_envyfishEggUsed", "_epicMcTwistUsed", "_essentialTofuUsed", "_etchedHourglassUsed", "_eternalCarBatteryUsed", "_everfullGlassUsed", "_extraGreasySliderEaten", "_eyeAndATwistUsed", "_fancyChessSetUsed", "_falloutShelterSpaUsed", "_fancyHotDogEaten", "_farmerItemsCollected", "_favoriteBirdVisited", "_firedJokestersGun", "_fireExtinguisherRefilled", "_fireStartingKitUsed", "_fireworksShop", "_fireworksShopHatBought", "_fireworksShopEquipmentBought", "_fireworkUsed", "_fishyPipeUsed", "_flagellateFlagonUsed", "_floundryItemCreated", "_floundryItemUsed", "_freePillKeeperUsed", "_frToday", "_frostyMugUsed", "_fudgeSporkUsed", "_garbageItemChanged", "_gingerBiggerAlligators", "_gingerbreadCityToday", "_gingerbreadClockAdvanced", "_gingerbreadClockVisited", "_gingerbreadColumnDestroyed", "_gingerbreadMobHitUsed", "_glennGoldenDiceUsed", "_glitchItemImplemented", "_gnollEyeUsed", "_gnomePart", "_governmentPerDiemUsed", "_grimBuff", "_guildManualUsed", "_guzzlrQuestAbandoned", "_hardKnocksDiplomaUsed", "_hippyMeatCollected", "_hobbyHorseUsed", "_hodgmansBlanketDrunk", "_holidayFunUsed", "_holoWristCrystal", "_hotAirportToday", "_hungerSauceUsed", "_hyperinflatedSealLungUsed", "_iceHotelRoomsRaided", "_iceSculptureUsed", "_incredibleSelfEsteemCast", "_infernoDiscoVisited", "_infiniteJellyUsed", "_internetDailyDungeonMalwareBought", "_internetGallonOfMilkBought", "_internetPlusOneBought", "_internetPrintScreenButtonBought", "_internetViralVideoBought", "_interviewIsabella", "_interviewMasquerade", "_interviewVlad", "_inquisitorsUnidentifiableObjectUsed", "_ironicMoustache", "_jackassPlumberGame", "_jarlsCheeseSummoned", "_jarlsCreamSummoned", "_jarlsDoughSummoned", "_jarlsEggsSummoned", "_jarlsFruitSummoned", "_jarlsMeatSummoned", "_jarlsPotatoSummoned", "_jarlsVeggiesSummoned", "_jingleBellUsed", "_jukebox", "_kgbFlywheelCharged", "_kgbLeftDrawerUsed", "_kgbOpened", "_kgbRightDrawerUsed", "_kolConSixPackUsed", "_kolhsCutButNotDried", "_kolhsIsskayLikeAnAshtray", "_kolhsPoeticallyLicenced", "_kolhsSchoolSpirited", "_kudzuSaladEaten", "_lastCombatLost", "_lastCombatWon", "_latteBanishUsed", "_latteCopyUsed", "_latteDrinkUsed", "_leafAntEggCrafted", "_leafDayShortenerCrafted", "_leafTattooCrafted", "_leavesJumped", "_legendaryBeat", "_licenseToChillUsed", "_lodestoneUsed", "_lookingGlass", "_loveTunnelToday", "_loveTunnelUsed", "_luckyGoldRingVolcoino", "_lunchBreak", "_lupineHormonesUsed", "_lyleFavored", "_madLiquorDrunk", "_madTeaParty", "_mafiaMiddleFingerRingUsed", "_managerialManipulationUsed", "_mansquitoSerumUsed", "_mapToACandyRichBlockUsed", "_maydayDropped", "_mayoDeviceRented", "_mayoTankSoaked", "_meatballMachineUsed", "_meatifyMatterUsed", "_milkOfMagnesiumUsed", "_mimeArmyShotglassUsed", "_miniKiwiIntoxicatingSpiritsBought", "_miniKiwiTipiDrop", "_missGravesVermouthDrunk", "_missileLauncherUsed", "_molehillMountainUsed", "_momFoodReceived", "_mrBurnsgerEaten", "_muffinOrderedToday", "_mulliganStewEaten", "_mushroomGardenVisited", "_neverendingPartyToday", "_newYouQuestCompleted", "_olympicSwimmingPool", "_olympicSwimmingPoolItemFound", "_overflowingGiftBasketUsed", "_partyHard", "_pastaAdditive", "_perfectFreezeUsed", "_perfectlyFairCoinUsed", "_petePartyThrown", "_peteRiotIncited", "_photocopyUsed", "_pickyTweezersUsed", "_pickleJuiceDrunk", "_pingPongGame", "_pirateBellowUsed", "_pirateDinghyUsed", "_pirateForkUsed", "_pirateRealmSoldCompass", "_pirateRealmWindicleUsed", "_pixelOrbUsed", "_plumbersMushroomStewEaten", "_pneumaticityPotionUsed", "_portableSteamUnitUsed", "_pottedTeaTreeUsed", "_prToday", "_psychoJarFilled", "_psychoJarUsed", "_psychokineticHugUsed", "_punchingMirrorUsed", "_rainStickUsed", "_redwoodRainStickUsed", "_replicaSnowconeTomeUsed", "_replicaResolutionLibramUsed", "_replicaSmithsTomeUsed", "_requestSandwichSucceeded", "_rhinestonesAcquired", "_saladForkUsed", "_seadentWaveUsed", "_seaJellyHarvested", "_septEmberBalanceChecked", "_setOfJacksUsed", "_sewingKitUsed", "_sexChanged", "_shadowAffinityToday", "_shadowForestLooted", "_shrubDecorated", "_silverDreadFlaskUsed", "_sitCourseCompleted", "_skateBuff1", "_skateBuff2", "_skateBuff3", "_skateBuff4", "_skateBuff5", "_sleazeAirportToday", "_snowballFactoryUsed", "_sobrieTeaUsed", "_softwareGlitchTurnReceived", "_sotParcelReturned", "_spacegateMurderbot", "_spacegateRuins", "_spacegateSpant", "_spacegateToday", "_spacegateVaccine", "_spaghettiBreakfast", "_spaghettiBreakfastEaten", "_spinmasterLatheVisited", "_spinningWheel", "_spookyAirportToday", "_stabonicScrollUsed", "_steelyEyedSquintUsed", "_stenchAirportToday", "_stinkyCheeseBanisherUsed", "_strangeStalagmiteUsed", "_streamsCrossed", "_structuralEmberUsed", "_stuffedPocketwatchUsed", "_styxSprayUsed", "_summonAnnoyanceUsed", "_summonCarrotUsed", "_summonResortPassUsed", "_sweetToothUsed", "_syntheticDogHairPillUsed", "_tacoFlierUsed", "_takerSpaceSuppliesDelivered", "_telegraphOfficeToday", "_templeHiddenPower", "_tempuraAirUsed", "_thesisDelivered", "_tiedUpFlamingLeafletFought", "_tiedUpFlamingMonsteraFought", "_tiedUpLeaviathanFought", "_timeSpinnerReplicatorUsed", "_toastSummoned", "_tonicDjinn", "_treasuryEliteMeatCollected", "_treasuryHaremMeatCollected", "_trivialAvocationsGame", "_tryptophanDartUsed", "_turtlePowerCast", "_twelveNightEnergyUsed", "_ultraMegaSourBallUsed", "_unblemishedPearlAnemoneMine", "_unblemishedPearlDiveBar", "_unblemishedPearlMadnessReef", "_unblemishedPearlMarinaraTrench", "_unblemishedPearlTheBriniestDeepests", "_victorSpoilsUsed", "_villainLairCanLidUsed", "_villainLairColorChoiceUsed", "_villainLairDoorChoiceUsed", "_villainLairFirecrackerUsed", "_villainLairSymbologyChoiceUsed", "_villainLairWebUsed", "_vmaskBanisherUsed", "_voraciTeaUsed", "_volcanoItemRedeemed", "_volcanoSuperduperheatedMetal", "_voodooSnuffUsed", "_voteToday", "_VYKEACafeteriaRaided", "_VYKEALoungeRaided", "_walfordQuestStartedToday", "_warbearBankUsed", "_warbearBreakfastMachineUsed", "_warbearGyrocopterUsed", "_warbearSodaMachineUsed", "_wildfireBarrelHarvested", "_witchessBuff", "_workshedItemUsed", "_yamBatteryUsed", "_zombieClover", "_preventScurvy", "lockedItem4637", "lockedItem4638", "lockedItem4639", "lockedItem4646", "lockedItem4647", "unknownRecipe3542", "unknownRecipe3543", "unknownRecipe3544", "unknownRecipe3545", "unknownRecipe3546", "unknownRecipe3547", "unknownRecipe3548", "unknownRecipe3749", "unknownRecipe3751", "unknownRecipe4172", "unknownRecipe4173", "unknownRecipe4174", "unknownRecipe5060", "unknownRecipe5061", "unknownRecipe5062", "unknownRecipe5063", "unknownRecipe5064", "unknownRecipe5066", "unknownRecipe5067", "unknownRecipe5069", "unknownRecipe5070", "unknownRecipe5072", "unknownRecipe5073", "unknownRecipe5670", "unknownRecipe5671", "unknownRecipe6501", "unknownRecipe6564", "unknownRecipe6565", "unknownRecipe6566", "unknownRecipe6567", "unknownRecipe6568", "unknownRecipe6569", "unknownRecipe6570", "unknownRecipe6571", "unknownRecipe6572", "unknownRecipe6573", "unknownRecipe6574", "unknownRecipe6575", "unknownRecipe6576", "unknownRecipe6577", "unknownRecipe6578", "unknownRecipe7752", "unknownRecipe7753", "unknownRecipe7754", "unknownRecipe7755", "unknownRecipe7756", "unknownRecipe7757", "unknownRecipe7758", "unknownRecipe10970", "unknownRecipe10971", "unknownRecipe10972", "unknownRecipe10973", "unknownRecipe10974", "unknownRecipe10975", "unknownRecipe10976", "unknownRecipe10977", "unknownRecipe10978", "unknownRecipe10988", "unknownRecipe10989", "unknownRecipe10990", "unknownRecipe10991", "unknownRecipe10992", "unknownRecipe11000"], numericProperties = ["coinMasterIndex", "dailyDeedsVersion", "defaultDropdown1", "defaultDropdown2", "defaultDropdownSplit", "defaultLimit", "fixedThreadPoolSize", "itemManagerIndex", "lastBuffRequestType", "lastGlobalCounterDay", "lastImageCacheClear", "pingDefaultTestPings", "pingLoginCount", "pingLoginGoal", "pingLoginThreshold", "pingTestPings", "previousUpdateRevision", "relayDelayForSVN", "relaySkillButtonCount", "scriptButtonPosition", "statusDropdown", "svnThreadPoolSize", "toolbarPosition", "_beachTides", "_g9Effect", "8BitBonusTurns", "8BitScore", "addingScrolls", "affirmationCookiesEaten", "aminoAcidsUsed", "antagonisticSnowmanKitCost", "ascensionsToday", "asolDeferredPoints", "asolPointsPigSkinner", "asolPointsCheeseWizard", "asolPointsJazzAgent", "autoAbortThreshold", "autoAntidote", "autoBuyPriceLimit", "autopsyTweezersUsed", "autumnatonQuestTurn", "availableCandyCredits", "availableDimes", "availableFunPoints", "availableMrStore2002Credits", "availableQuarters", "availableSeptEmbers", "availableStoreCredits", "availableSwagger", "avantGuardPoints", "averageSwagger", "awolMedicine", "awolPointsBeanslinger", "awolPointsCowpuncher", "awolPointsSnakeoiler", "awolDeferredPointsBeanslinger", "awolDeferredPointsCowpuncher", "awolDeferredPointsSnakeoiler", "awolVenom", "bagOTricksCharges", "ballpitBonus", "bankedKarma", "bartenderTurnsUsed", "basementMallPrices", "basementSafetyMargin", "batmanFundsAvailable", "batmanBonusInitialFunds", "batmanTimeLeft", "bearSwagger", "beeCounter", "beGregariousCharges", "beGregariousFightsLeft", "birdformCold", "birdformHot", "birdformRoc", "birdformSleaze", "birdformSpooky", "birdformStench", "blackBartsBootyCost", "blackPuddingsDefeated", "blackForestProgress", "blankOutUsed", "bloodweiserDrunk", "bodyguardCharge", "bondPoints", "bondVillainsDefeated", "boneAbacusVictories", "bookOfFactsGummi", "bookOfFactsPinata", "bookOfIronyCost", "booPeakProgress", "borisPoints", "breakableHandling", "breakableHandling1964", "breakableHandling9691", "breakableHandling9692", "breakableHandling9699", "breathitinCharges", "brodenBacteria", "brodenSprinkles", "buffBotMessageDisposal", "buffBotPhilanthropyType", "buffJimmyIngredients", "burnoutsDefeated", "burrowgrubSummonsRemaining", "bwApronMealsEaten", "camelSpit", "camerasUsed", "campAwayDecoration", "candyWitchTurnsUsed", "candyWitchCandyTotal", "carboLoading", "catBurglarBankHeists", "cellarLayout", "charitableDonations", "chasmBridgeProgress", "chefTurnsUsed", "chessboardsCleared", "chibiAlignment", "chibiBirthday", "chibiFitness", "chibiIntelligence", "chibiLastVisit", "chibiSocialization", "chilledToTheBone", "cinchoSaltAndLime", "cinderellaMinutesToMidnight", "cinderellaScore", "clubEmNextWeekMonsterTurn", "cocktailSummons", "commerceGhostCombats", "cookbookbatIngredientsCharge", "controlPanelOmega", "cornucopiasOpened", "cosmicBowlingBallReturnCombats", "cozyCounter6332", "cozyCounter6333", "cozyCounter6334", "craftingClay", "craftingLeather", "craftingPlansCharges", "craftingStraw", "crimbo16BeardChakraCleanliness", "crimbo16BootsChakraCleanliness", "crimbo16BungChakraCleanliness", "crimbo16CrimboHatChakraCleanliness", "crimbo16GutsChakraCleanliness", "crimbo16HatChakraCleanliness", "crimbo16JellyChakraCleanliness", "crimbo16LiverChakraCleanliness", "crimbo16NippleChakraCleanliness", "crimbo16NoseChakraCleanliness", "crimbo16ReindeerChakraCleanliness", "crimbo16SackChakraCleanliness", "crimboTrainingSkill", "crimboTreeDays", "cubelingProgress", "cupidBowFights", "currentExtremity", "currentHedgeMazeRoom", "currentMojoFilters", "currentNunneryMeat", "currentPortalEnergy", "currentReplicaStoreYear", "cursedMagnifyingGlassCount", "cyrptAlcoveEvilness", "cyrptCrannyEvilness", "cyrptNicheEvilness", "cyrptNookEvilness", "cyrptTotalEvilness", "darkGyfftePoints", "dartsThrown", "daycareEquipment", "daycareInstructorItemQuantity", "daycareInstructors", "daycareLastScavenge", "daycareToddlers", "dbNemesisSkill1", "dbNemesisSkill2", "dbNemesisSkill3", "desertExploration", "desktopHeight", "desktopWidth", "dinseyFilthLevel", "dinseyFunProgress", "dinseyNastyBearsDefeated", "dinseySocialJusticeIProgress", "dinseySocialJusticeIIProgress", "dinseyTouristsFed", "dinseyToxicMultiplier", "doctorBagQuestLights", "doctorBagUpgrades", "dreadScroll1", "dreadScroll2", "dreadScroll3", "dreadScroll4", "dreadScroll5", "dreadScroll6", "dreadScroll7", "dreadScroll8", "dripAdventuresSinceAscension", "drippingHallAdventuresSinceAscension", "drippingTreesAdventuresSinceAscension", "drippyBatsUnlocked", "drippyJuice", "drippyOrbsClaimed", "droneSelfDestructChipsUsed", "drunkenSwagger", "edDefeatAbort", "edPoints", "eldritchTentaclesFought", "electricKoolAidEaten", "elfGratitude", "encountersUntilDMTChoice", "encountersUntilYachtzeeChoice", "encountersUntilNEPChoice", "encountersUntilSRChoice", "ensorceleeLevel", "entauntaunedColdRes", "essenceOfAnnoyanceCost", "essenceOfBearCost", "extraRolloverAdventures", "falloutShelterLevel", "familiarSweat", "fingernailsClipped", "fistSkillsKnown", "flyeredML", "fossilB", "fossilD", "fossilN", "fossilP", "fossilS", "fossilW", "fratboysDefeated", "frenchGuardTurtlesFreed", "funGuyMansionKills", "garbageChampagneCharge", "garbageFireProgress", "garbageShirtCharge", "garbageTreeCharge", "garlandUpgrades", "getsYouDrunkTurnsLeft", "ghostPepperTurnsLeft", "gingerDigCount", "gingerLawChoice", "gingerMuscleChoice", "gingerTrainScheduleStudies", "gladiatorBallMovesKnown", "gladiatorBladeMovesKnown", "gladiatorNetMovesKnown", "glitchItemCost", "glitchItemImplementationCount", "glitchItemImplementationLevel", "glitchSwagger", "gloverPoints", "gnasirProgress", "goldenMrAccessories", "gongPath", "gooseDronesRemaining", "goreCollected", "gourdItemCount", "greyYouPoints", "grimoire1Summons", "grimoire2Summons", "grimoire3Summons", "grimstoneCharge", "guardTurtlesFreed", "guideToSafariCost", "guyMadeOfBeesCount", "guzzlrBronzeDeliveries", "guzzlrDeliveryProgress", "guzzlrGoldDeliveries", "guzzlrPlatinumDeliveries", "haciendaLayout", "hallowiener8BitRealm", "hallowienerCoinspiracy", "hareMillisecondsSaved", "hareTurnsUsed", "heavyRainsStartingThunder", "heavyRainsStartingRain", "heavyRainsStartingLightning", "heroDonationBoris", "heroDonationJarlsberg", "heroDonationSneakyPete", "hiddenApartmentProgress", "hiddenBowlingAlleyProgress", "hiddenHospitalProgress", "hiddenOfficeProgress", "hiddenTavernUnlock", "highTopPumped", "hippiesDefeated", "holidayHalsBookCost", "holidaySwagger", "homemadeRobotUpgrades", "homebodylCharges", "hpAutoRecovery", "hpAutoRecoveryTarget", "iceSwagger", "ironicSwagger", "jarlsbergPoints", "juicyGarbageUsed", "jungCharge", "junglePuns", "knownAscensions", "kolhsTotalSchoolSpirited", "lassoTrainingCount", "lastAnticheeseDay", "lastArcadeAscension", "lastBadMoonReset", "lastBangPotionReset", "lastBattlefieldReset", "lastBeardBuff", "lastBreakfast", "lastCartographyBooPeak", "lastCartographyCastleTop", "lastCartographyDarkNeck", "lastCartographyDefiledNook", "lastCartographyFratHouse", "lastCartographyFratHouseVerge", "lastCartographyGuanoJunction", "lastCartographyHauntedBilliards", "lastCartographyHippyCampVerge", "lastCartographyZeppelinProtesters", "lastCastleGroundUnlock", "lastCastleTopUnlock", "lastCellarReset", "lastChanceThreshold", "lastChasmReset", "lastColosseumRoundWon", "lastCouncilVisit", "lastCounterDay", "lastDesertUnlock", "lastDispensaryOpen", "lastDMTDuplication", "lastDwarfFactoryReset", "lastEVHelmetValue", "lastEVHelmetReset", "lastEmptiedStorage", "lastFilthClearance", "lastGoofballBuy", "lastGuildStoreOpen", "lastGuyMadeOfBeesReset", "lastFratboyCall", "lastFriarCeremonyAscension", "lastFriarsElbowNC", "lastFriarsHeartNC", "lastFriarsNeckNC", "lastHippyCall", "lastIslandUnlock", "lastKeyotronUse", "lastKingLiberation", "lastLightsOutTurn", "lastMushroomPlot", "lastMiningReset", "lastNemesisReset", "lastPaperStripReset", "lastPirateEphemeraReset", "lastPirateInsultReset", "lastPlusSignUnlock", "lastQuartetAscension", "lastQuartetRequest", "lastSecondFloorUnlock", "lastShadowForgeUnlockAdventure", "lastKOLHSArtClassUnlockAdventure", "lastKOLHSChemClassUnlockAdventure", "lastKOLHSShopClassUnlockAdventure", "lastSkateParkReset", "lastStillBeatingSpleen", "lastTavernAscension", "lastTavernSquare", "lastTelescopeReset", "lastTempleAdventures", "lastTempleButtonsUnlock", "lastTempleUnlock", "lastThingWithNoNameDefeated", "lastTowelAscension", "lastTr4pz0rQuest", "lastTrainsetConfiguration", "lastVioletFogMap", "lastVoteMonsterTurn", "lastWartDinseyDefeated", "lastWuTangDefeated", "lastYearbookCameraAscension", "lastZapperWand", "lastZapperWandExplosionDay", "lawOfAveragesCost", "legacyPoints", "leprecondoLastNeedChange", "libramSummons", "lightsOutAutomation", "louvreDesiredGoal", "louvreGoal", "lovebugsAridDesert", "lovebugsBeachBuck", "lovebugsBooze", "lovebugsChroner", "lovebugsCoinspiracy", "lovebugsCyrpt", "lovebugsFreddy", "lovebugsFunFunds", "lovebugsHoboNickel", "lovebugsItemDrop", "lovebugsMeat", "lovebugsMeatDrop", "lovebugsMoxie", "lovebugsMuscle", "lovebugsMysticality", "lovebugsOilPeak", "lovebugsOrcChasm", "lovebugsPowder", "lovebugsWalmart", "lttQuestDifficulty", "lttQuestStageCount", "manaBurnSummonThreshold", "manaBurningThreshold", "manaBurningTrigger", "manorDrawerCount", "manualOfNumberologyCost", "mapToKokomoCost", "markYourTerritoryCharges", "masksUnlocked", "maximizerMRUSize", "maximizerCombinationLimit", "maximizerEquipmentLevel", "maximizerEquipmentScope", "maximizerMaxPrice", "maximizerPriceLevel", "maxManaBurn", "mayflyExperience", "mayoLevel", "meansuckerPrice", "merkinVocabularyMastery", "miniAdvClass", "miniKiwiAiolisUsed", "miniMartinisDrunk", "mixedBerryJellyUses", "moleTunnelLevel", "momSeaMonkeeProgress", "mothershipProgress", "mpAutoRecovery", "mpAutoRecoveryTarget", "munchiesPillsUsed", "mushroomGardenCropLevel", "nanopolymerSpiderWebsUsed", "nextAprilBandTurn", "nextParanormalActivity", "nextQuantumFamiliarOwnerId", "nextQuantumFamiliarTurn", "noobPoints", "noobDeferredPoints", "noodleSummons", "nsContestants1", "nsContestants2", "nsContestants3", "nuclearAutumnPoints", "numericSwagger", "nunsVisits", "oilPeakProgress", "optimalSwagger", "optimisticCandleProgress", "palindomeDudesDefeated", "parasolUsed", "peaceTurkeyIndex", "pendingMapReflections", "phosphorTracesUses", "pingpongSkill", "pirateRealmPlasticPiratesDefeated", "pirateRealmShipsDestroyed", "pirateRealmStormsEscaped", "pirateSwagger", "plantingDay", "plumberBadgeCost", "plumberCostumeCost", "plumberPoints", "pokefamPoints", "poolSharkCount", "poolSkill", "powerPillProgress", "preworkoutPowderUses", "primaryLabGooIntensity", "prismaticSummons", "procrastinatorLanguageFluency", "promptAboutCrafting", "puzzleChampBonus", "pyramidPosition", "quantumPoints", "reagentSummons", "reanimatorArms", "reanimatorLegs", "reanimatorSkulls", "reanimatorWeirdParts", "reanimatorWings", "recentLocations", "redSnapperProgress", "relayPort", "relocatePygmyJanitor", "relocatePygmyLawyer", "rockinRobinProgress", "romanCandelabraRedCasts", "romanCandelabraBlueCasts", "romanCandelabraYellowCasts", "romanCandelabraGreenCasts", "romanCandelabraPurpleCasts", "ROMOfOptimalityCost", "rumpelstiltskinKidsRescued", "rumpelstiltskinTurnsUsed", "rwbMonsterCount", "safariSwagger", "sausageGrinderUnits", "schoolOfHardKnocksDiplomaCost", "schoolSwagger", "scrapbookCharges", "screechCombats", "scriptMRULength", "seadentConstructKills", "seadentLevel", "seaodesFound", "seaPoints", "SeasoningSwagger", "sexChanges", "shenInitiationDay", "shockingLickCharges", "shrunkenHeadZombieHP", "singleFamiliarRun", "skillBurn3", "skillBurn90", "skillBurn153", "skillBurn154", "skillBurn155", "skillBurn236", "skillBurn237", "skillBurn1019", "skillBurn5017", "skillBurn6014", "skillBurn6015", "skillBurn6016", "skillBurn6020", "skillBurn6021", "skillBurn6022", "skillBurn6023", "skillBurn6024", "skillBurn6026", "skillBurn6028", "skillBurn7323", "skillBurn14008", "skillBurn14028", "skillBurn14038", "skillBurn15011", "skillBurn15028", "skillBurn17005", "skillBurn22034", "skillBurn22035", "skillBurn23301", "skillBurn23302", "skillBurn23303", "skillBurn23304", "skillBurn23305", "skillBurn23306", "skillLevel46", "skillLevel47", "skillLevel48", "skillLevel117", "skillLevel118", "skillLevel121", "skillLevel128", "skillLevel134", "skillLevel135", "skillLevel144", "skillLevel180", "skillLevel188", "skillLevel227", "skillLevel245", "skillLevel7254", "slimelingFullness", "slimelingStacksDropped", "slimelingStacksDue", "smoresEaten", "smutOrcNoncombatProgress", "sneakyPetePoints", "snojoMoxieWins", "snojoMuscleWins", "snojoMysticalityWins", "sourceAgentsDefeated", "sourceEnlightenment", "sourceInterval", "sourcePoints", "sourceTerminalGram", "sourceTerminalPram", "sourceTerminalSpam", "spaceBabyLanguageFluency", "spacePirateLanguageFluency", "spelunkyNextNoncombat", "spelunkySacrifices", "spelunkyWinCount", "spookyPuttyCopiesMade", "spookyVHSTapeMonsterTurn", "statbotUses", "stockCertificateTurn", "sugarCounter4178", "sugarCounter4179", "sugarCounter4180", "sugarCounter4181", "sugarCounter4182", "sugarCounter4183", "sugarCounter4191", "summonAnnoyanceCost", "sweat", "tacoDanCocktailSauce", "tacoDanFishMeat", "takerSpaceAnchor", "takerSpaceGold", "takerSpaceMast", "takerSpaceRum", "takerSpaceSilk", "takerSpaceSpice", "tavernLayout", "telescopeUpgrades", "tempuraSummons", "timeposedTopHats", "timeSpinnerMedals", "timesRested", "tomeSummons", "totalCharitableDonations", "trainsetPosition", "tryToRememberCharges", "turtleBlessingTurns", "twinPeakProgress", "twoCRSPoints", "unicornHornInflation", "universalSeasoningCost", "usable1HWeapons", "usable1xAccs", "usable2HWeapons", "usable3HWeapons", "usableAccessories", "usableHats", "usableOffhands", "usableOther", "usablePants", "usableShirts", "valueOfAdventure", "valueOfInventory", "valueOfStill", "valueOfTome", "vintnerCharge", "vintnerWineLevel", "violetFogGoal", "walfordBucketProgress", "warehouseProgress", "welcomeBackAdv", "wereProfessorBite", "wereProfessorKick", "wereProfessorLiver", "wereProfessorPoints", "wereProfessorRend", "wereProfessorResearchPoints", "wereProfessorStomach", "wereProfessorTransformTurns", "whetstonesUsed", "wolfPigsEvicted", "wolfTurnsUsed", "writingDesksDefeated", "xoSkeleltonXProgress", "xoSkeleltonOProgress", "yearbookCameraAscensions", "yearbookCameraUpgrades", "youRobotBody", "youRobotBottom", "youRobotLeft", "youRobotPoints", "youRobotRight", "youRobotTop", "zeppelinProgress", "zeppelinProtestors", "zigguratLianas", "zombiePoints", "zootSpecimensPrepared", "zootomistPoints", "_absintheDrops", "_abstractionDropsCrown", "_aguaDrops", "_xenomorphCharge", "_alliedRadioDropsUsed", "_ancestralRecallCasts", "_antihangoverBonus", "_aprilShowerDiscoNap", "_aprilBandInstruments", "_aprilBandSaxophoneUses", "_aprilBandTomUses", "_aprilBandTubaUses", "_aprilBandStaffUses", "_aprilBandPiccoloUses", "_astralDrops", "_augSkillsCast", "_assertYourAuthorityCast", "_automatedFutureManufactures", "_autumnatonQuests", "_backUpUses", "_badlyRomanticArrows", "_badgerCharge", "_balefulHowlUses", "_banderRunaways", "_bastilleCheese", "_bastilleGames", "_bastilleGameTurn", "_bastilleLastCheese", "_batWingsCauldronUsed", "_batWingsFreeFights", "_batWingsRestUsed", "_batWingsSwoopUsed", "_bczBloodGeyserCasts", "_bczRefractedGazeCasts", "_bczSweatBulletsCasts", "_bczBloodBathCasts", "_bczDialitupCasts", "_bczSweatEquityCasts", "_bczBloodThinnerCasts", "_bczSpinalTapasCasts", "_bczPheromoneCocktailCasts", "_beanCannonUses", "_bearHugs", "_beerLensDrops", "_bellydancerPickpockets", "_benettonsCasts", "_beretBlastUses", "_beretBoastUses", "_beretBuskingUses", "_birdsSoughtToday", "_bookOfFactsWishes", "_bookOfFactsTatters", "_boomBoxFights", "_boomBoxSongsLeft", "_bootStomps", "_boxingGloveArrows", "_brickoEyeSummons", "_brickoFights", "_campAwayCloudBuffs", "_campAwaySmileBuffs", "_candyEggsDeviled", "_candySummons", "_captainHagnkUsed", "_carnieCandyDrops", "_carnivorousPottedPlantWins", "_carrotNoseDrops", "_catBurglarCharge", "_catBurglarHeistsComplete", "_cheerleaderSteam", "_chestXRayUsed", "_chibiAdventures", "_chipBags", "_chocolateCigarsUsed", "_chocolateCoveredPingPongBallsUsed", "_chocolateSculpturesUsed", "_chocolatesUsed", "_chronolithActivations", "_chronolithNextCost", "_cinchUsed", "_cinchoRests", "_circadianRhythmsAdventures", "_clanFortuneConsultUses", "_clipartSummons", "_clocksUsed", "_cloversPurchased", "_clubEmBattlefieldUsed", "_clubEmNextWeekUsed", "_clubEmTimeUsed", "_coldMedicineConsults", "_coldMedicineEquipmentTaken", "_companionshipCasts", "_concoctionDatabaseRefreshes", "_cookbookbatCrafting", "_cookbookbatCombatsUntilNewQuest", "_cosmicBowlingSkillsUsed", "_crimbo21ColdResistance", "_crimboPastDailySpecialPrice", "_cyberFreeFights", "_cyberZone1Turns", "_cyberZone2Turns", "_cyberZone3Turns", "_dailySpecialPrice", "_dartsLeft", "_daycareGymScavenges", "_daycareRecruits", "_deckCardsDrawn", "_deluxeKlawSummons", "_demandSandwich", "_detectiveCasesCompleted", "_disavowed", "_dnaPotionsMade", "_donhosCasts", "_douseFoeUses", "_dreamJarDrops", "_drunkPygmyBanishes", "_durableDolphinWhistleUsed", "_edDefeats", "_edLashCount", "_eldritchTentaclesFoughtToday", "_elfGuardCookingUsed", "_elronsCasts", "_enamorangs", "_energyCollected", "_expertCornerCutterUsed", "_extraTimeUsed", "_favorRareSummons", "_feastUsed", "_feelinTheRhythm", "_feelPrideUsed", "_feelExcitementUsed", "_feelHatredUsed", "_feelLonelyUsed", "_feelNervousUsed", "_feelEnvyUsed", "_feelDisappointedUsed", "_feelSuperiorUsed", "_feelLostUsed", "_feelNostalgicUsed", "_feelPeacefulUsed", "_fingertrapArrows", "_fireExtinguisherCharge", "_fragrantHerbsUsed", "_freeBeachWalksUsed", "_frButtonsPressed", "_fudgeWaspFights", "_gapBuffs", "_garbageFireDrops", "_garbageFireDropsCrown", "_generateIronyUsed", "_genieFightsUsed", "_genieWishesUsed", "_gibbererAdv", "_gibbererCharge", "_gingerbreadCityTurns", "_glarkCableUses", "_glitchMonsterFights", "_gnomeAdv", "_godLobsterFights", "_goldenMoneyCharge", "_gongDrops", "_gothKidCharge", "_gothKidFights", "_greyYouAdventures", "_grimBrotherCharge", "_grimFairyTaleDrops", "_grimFairyTaleDropsCrown", "_grimoireConfiscatorSummons", "_grimoireGeekySummons", "_grimstoneMaskDrops", "_grimstoneMaskDropsCrown", "_grooseCharge", "_grooseDrops", "_grubbyWoolDrops", "_guzzlrDeliveries", "_guzzlrGoldDeliveries", "_guzzlrPlatinumDeliveries", "_hareAdv", "_hareCharge", "_highTopPumps", "_hipsterAdv", "_hoardedCandyDropsCrown", "_hoboUnderlingSummons", "_holidayMultitaskingUsed", "_holoWristDrops", "_holoWristProgress", "_hotAshesDrops", "_hotJellyUses", "_hotTubSoaks", "_humanMuskUses", "_iceballUses", "_inigosCasts", "_ironTricornHeadbuttUsed", "_jerksHealthMagazinesUsed", "_jiggleCheese", "_jiggleCream", "_jiggleLife", "_jiggleSteak", "_jitbCharge", "_juneCleaverAdvs", "_juneCleaverFightsLeft", "_juneCleaverEncounters", "_juneCleaverStench", "_juneCleaverSpooky", "_juneCleaverSleaze", "_juneCleaverHot", "_juneCleaverCold", "_juneCleaverSkips", "_jungDrops", "_kgbClicksUsed", "_kgbDispenserUses", "_kgbTranquilizerDartUses", "_klawSummons", "_kloopCharge", "_kloopDrops", "_knuckleboneDrops", "_knuckleboneRests", "_kolhsAdventures", "_kolhsSavedByTheBell", "_lastDailyDungeonRoom", "_lastFitzsimmonsHatch", "_lastMobiusStripTurn", "_lastSausageMonsterTurn", "_lastZomboEye", "_latteRefillsUsed", "_lawOfAveragesUsed", "_leafblowerML", "_leafLassosCrafted", "_leafMonstersFought", "_leavesBurned", "_legionJackhammerCrafting", "_leprecondoRearrangements", "_leprecondoFurniture", "_llamaCharge", "_longConUsed", "_lovebugsBeachBuck", "_lovebugsChroner", "_lovebugsCoinspiracy", "_lovebugsFreddy", "_lovebugsFunFunds", "_lovebugsHoboNickel", "_lovebugsWalmart", "_loveChocolatesUsed", "_lynyrdSnareUses", "_machineTunnelsAdv", "_macrometeoriteUses", "_mafiaThumbRingAdvs", "_mapToACandyRichBlockDrops", "_mayamRests", "_mayflowerDrops", "_mayflySummons", "_mcHugeLargeAvalancheUses", "_mcHugeLargeSkiPlowUses", "_mcHugeLargeSlashUses", "_mediumSiphons", "_meteoriteAdesUsed", "_meteorShowerUses", "_micrometeoriteUses", "_mildEvilPerpetrated", "_mimicEggsDonated", "_mimicEggsObtained", "_miniKiwiDrops", "_miniMartiniDrops", "_mobiusStripEncounters", "_monkeyPawWishesUsed", "_monsterHabitatsFightsLeft", "_monsterHabitatsRecalled", "_monstersMapped", "_mushroomGardenFights", "_nanorhinoCharge", "_navelRunaways", "_neverendingPartyFreeTurns", "_newYouQuestSharpensDone", "_newYouQuestSharpensToDo", "_nextColdMedicineConsult", "_nextQuantumAlignment", "_nightmareFuelCharges", "_noobSkillCount", "_nuclearStockpileUsed", "_oilExtracted", "_oldSchoolCocktailCraftingUsed", "_olfactionsUsed", "_optimisticCandleDropsCrown", "_oreDropsCrown", "_otoscopeUsed", "_oysterEggsFound", "_pantsgivingBanish", "_pantsgivingCount", "_pantsgivingCrumbs", "_pantsgivingFullness", "_pasteDrops", "_perilsForeseen", "_peteJukeboxFixed", "_peteJumpedShark", "_petePeeledOut", "_photoBoothEffects", "_photoBoothEquipment", "_pieDrops", "_piePartsCount", "_pirateRealmGold", "_pirateRealmGlue", "_pirateRealmGrog", "_pirateRealmGrub", "_pirateRealmGuns", "_pirateRealmIslandMonstersDefeated", "_pirateRealmSailingTurns", "_pirateRealmShipSpeed", "_pixieCharge", "_pocketProfessorLectures", "_poisonArrows", "_pokeGrowFertilizerDrops", "_poolGames", "_powderedGoldDrops", "_powderedMadnessUses", "_powerfulGloveBatteryPowerUsed", "_powerPillDrops", "_powerPillUses", "_precisionCasts", "_questPartyFairItemsOpened", "_radlibSummons", "_raindohCopiesMade", "_rapidPrototypingUsed", "_raveStealCount", "_reflexHammerUsed", "_resolutionAdv", "_resolutionRareSummons", "_riftletAdv", "_robinEggDrops", "_roboDrops", "_rogueProgramCharge", "_romanticFightsLeft", "_saberForceMonsterCount", "_saberForceUses", "_saberMod", "_saltGrainsConsumed", "_sandwormCharge", "_saplingsPlanted", "_sausageFights", "_sausagesEaten", "_sausagesMade", "_seadentLightningUsed", "_sealFigurineUses", "_sealScreeches", "_sealsSummoned", "_shadowBricksUsed", "_shadowRiftCombats", "_shatteringPunchUsed", "_shortOrderCookCharge", "_shrubCharge", "_slimeVialsHarvested", "_sloppyDinerBeachBucks", "_smilesOfMrA", "_smithsnessSummons", "_smolderingSkeletonsDefeated", "_smoochArmyHQCombats", "_snojoFreeFights", "_snojoParts", "_snokebombUsed", "_snowconeSummons", "_snowglobeDrops", "_snowmanHatPlaceUsed", "_snowSuitCount", "_sourceTerminalDigitizeMonsterCount", "_sourceTerminalDigitizeUses", "_sourceTerminalDuplicateUses", "_sourceTerminalEnhanceUses", "_sourceTerminalExtrudes", "_sourceTerminalPortscanUses", "_spaceFurDropsCrown", "_spacegatePlanetIndex", "_spacegateTurnsLeft", "_spaceJellyfishDrops", "_speakeasyDrinksDrunk", "_speakeasyFreeFights", "_spelunkerCharges", "_spelunkingTalesDrops", "_spikolodonSpikeUses", "_spiritOfTheMountainsAdvs", "_spookyJellyUses", "_stackLumpsUses", "_steamCardDrops", "_stickerSummons", "_stinkyCheeseCount", "_stressBallSqueezes", "_sugarSummons", "_summonResortPassesUsed", "_surprisinglySweetSlashUsed", "_surprisinglySweetStabUsed", "_sweatOutSomeBoozeUsed", "_taffyRareSummons", "_taffyYellowSummons", "_tearawayPantsAdvs", "_thanksgettingFoodsEaten", "_thingfinderCasts", "_thinknerdPackageDrops", "_thorsPliersCrafting", "_timeHelmetAdv", "_timeCopsFoughtToday", "_timeSpinnerMinutesUsed", "_tokenDrops", "_transponderDrops", "_turkeyBlastersUsed", "_turkeyBooze", "_turkeyMuscle", "_turkeyMyst", "_turkeyMoxie", "_unaccompaniedMinerUsed", "_unblemishedPearlAnemoneMineProgress", "_unblemishedPearlDiveBarProgress", "_unblemishedPearlMadnessReefProgress", "_unblemishedPearlMarinaraTrenchProgress", "_unblemishedPearlTheBriniestDeepestsProgress", "_unconsciousCollectiveCharge", "_universalSeasoningsUsed", "_universeCalculated", "_universeImploded", "_usedReplicaBatoomerang", "_vampyreCloakeFormUses", "_villainLairProgress", "_vitachocCapsulesUsed", "_vmaskAdv", "_voidFreeFights", "_volcanoItem1", "_volcanoItem2", "_volcanoItem3", "_volcanoItemCount1", "_volcanoItemCount2", "_volcanoItemCount3", "_voteFreeFights", "_VYKEACompanionLevel", "_wandOfPigificationUsed", "_warbearAutoAnvilCrafting", "_waxGlobDrops", "_whiteRiceDrops", "_witchessFights", "_xoHugsUsed", "_yellowPixelDropsCrown", "_zapCount", "_zombieSmashPocketsUsed", "lastNoncombat15", "lastNoncombat257", "lastNoncombat270", "lastNoncombat273", "lastNoncombat280", "lastNoncombat283", "lastNoncombat297", "lastNoncombat322", "lastNoncombat323", "lastNoncombat324", "lastNoncombat341", "lastNoncombat343", "lastNoncombat384", "lastNoncombat386", "lastNoncombat391", "lastNoncombat392", "lastNoncombat394", "lastNoncombat405", "lastNoncombat406", "lastNoncombat408", "lastNoncombat439", "lastNoncombat440", "lastNoncombat441", "lastNoncombat450", "lastNoncombat528", "lastNoncombat533", "lastNoncombat539", "lastNoncombat540", "lastNoncombat541", "lastNoncombat588", "lastNoncombat589", "lastNoncombat590", "lastNoncombat591", "lastNoncombat592"], monsterProperties = ["beGregariousMonster", "bodyguardChatMonster", "cameraMonster", "chateauMonster", "clubEmNextWeekMonster", "clumsinessGroveBoss", "crappyCameraMonster", "crudeMonster", "enamorangMonster", "envyfishMonster", "glacierOfJerksBoss", "holdHandsMonster", "iceSculptureMonster", "lastCopyableMonster", "longConMonster", "maelstromOfLoversBoss", "makeFriendsMonster", "merkinLockkeyMonster", "monkeyPointMonster", "motifMonster", "nosyNoseMonster", "olfactedMonster", "photocopyMonster", "rainDohMonster", "romanticTarget", "rufusDesiredEntity", "rwbMonster", "screencappedMonster", "shrunkenHeadZombieMonster", "spookyPuttyMonster", "spookyVHSTapeMonster", "stenchCursedMonster", "superficiallyInterestedMonster", "waxMonster", "yearbookCameraTarget", "_afterimageMonster", "_chainedRelativityMonster", "_chainedPurpleCandleMonster", "_chainedAfterimageMonster", "_cookbookbatQuestMonster", "_gallapagosMonster", "_jiggleCreamedMonster", "_latteMonster", "_monsterHabitatsMonster", "_nanorhinoBanishedMonster", "_newYouQuestMonster", "_prankCardMonster", "_relativityMonster", "_saberForceMonster", "_sourceTerminalDigitizeMonster", "_trickCoinMonster", "_voteMonster"], monsterNumericProperties = [], locationProperties = ["autumnatonQuestLocation", "currentJunkyardLocation", "doctorBagQuestLocation", "ghostLocation", "guzzlrQuestLocation", "holdHandsLocation", "lastAdventure", "nextAdventure", "nextSpookyravenElizabethRoom", "nextSpookyravenStephenRoom", "rwbLocation", "sourceOracleTarget", "_cookbookbatQuestLastLocation", "_floundryBassLocation", "_floundryCarpLocation", "_floundryCodLocation", "_floundryHatchetfishLocation", "_floundryTroutLocation", "_floundryTunaLocation", "_lastPirateRealmIsland", "_sotParcelLocation"], stringProperties = ["autoLogin", "browserBookmarks", "chatFontSize", "combatHotkey0", "combatHotkey1", "combatHotkey2", "combatHotkey3", "combatHotkey4", "combatHotkey5", "combatHotkey6", "combatHotkey7", "combatHotkey8", "combatHotkey9", "commandBufferGCLI", "commandBufferTabbedChat", "commandLineNamespace", "dailyDeedsOptions", "defaultBorderColor", "displayName", "externalEditor", "getBreakfast", "headerStates", "highlightList", "http.proxyHost", "http.proxyPassword", "http.proxyPort", "http.proxyUser", "https.proxyHost", "https.proxyPassword", "https.proxyPort", "https.proxyUser", "initialDesktop", "initialFrames", "lastRelayUpdate", "lastUserAgent", "lastUsername", "logPreferenceChangeFilter", "loginScript", "loginServerName", "loginWindowLogo", "logoutScript", "pingDefaultTestPage", "pingLatest", "pingLoginAbort", "pingLoginCheck", "pingLoginFail", "pingLongest", "pingShortest", "pingTestPage", "previousNotifyList", "previousUpdateVersion", "saveState", "saveStateActive", "scriptList", "swingLookAndFeel", "userAgent", "8BitColor", "afterAdventureScript", "antiScientificMethod", "autoOlfact", "autoPutty", "autumnatonUpgrades", "backupCameraMode", "banishedMonsters", "banishedPhyla", "banishingShoutMonsters", "batmanStats", "batmanZone", "batmanUpgrades", "battleAction", "beachHeadsUnlocked", "beastSkillsAvailable", "beastSkillsKnown", "beforePVPScript", "betweenBattleScript", "boomBoxSong", "breakfastAlways", "breakfastHardcore", "breakfastSoftcore", "buffBotCasting", "buyScript", "cargoPocketsEmptied", "cargoPocketScraps", "chatbotScript", "chatPlayerScript", "chibiName", "choiceAdventureScript", "chosenTrip", "clanFortuneReply1", "clanFortuneReply2", "clanFortuneReply3", "clanFortuneWord1", "clanFortuneWord2", "clanFortuneWord3", "coolerYetiMode", "counterScript", "copperheadClubHazard", "crimbo23ArmoryControl", "crimbo23BarControl", "crimbo23CafeControl", "crimbo23CottageControl", "crimbo23FoundryControl", "crimbotChassis", "crimbotArm", "crimbotPropulsion", "crystalBallPredictions", "csServicesPerformed", "currentAstralTrip", "currentDistillateMods", "currentEasyBountyItem", "currentHardBountyItem", "currentHippyStore", "currentJunkyardTool", "currentLlamaForm", "currentMood", "currentPVPSeason", "currentPvpVictories", "currentSpecialBountyItem", "currentSITSkill", "customCombatScript", "cyrusAdjectives", "defaultFlowerLossMessage", "defaultFlowerWinMessage", "demonName1", "demonName2", "demonName3", "demonName4", "demonName5", "demonName6", "demonName7", "demonName8", "demonName9", "demonName10", "demonName11", "demonName12", "demonName13", "demonName14", "demonName14Segments", "dinseyGatorStenchDamage", "dinseyRollercoasterStats", "dreadScrollGuesses", "duckAreasCleared", "duckAreasSelected", "edPiece", "enamorangMonsterTurn", "ensorcelee", "EVEDirections", "everfullDartPerks", "extraCosmeticModifiers", "familiarScript", "flagellateFlagonsActive", "forbiddenStores", "gameProBossSpecialPower", "gooseReprocessed", "grimoireSkillsHardcore", "grimoireSkillsSoftcore", "grimstoneMaskPath", "guzzlrQuestClient", "guzzlrQuestTier", "harvestGardenHardcore", "harvestGardenSoftcore", "holdHandsMonsterCount", "hpAutoRecoveryItems", "invalidBuffMessage", "jickSwordModifier", "juneCleaverQueue", "kingLiberatedScript", "lassoTraining", "lastAdventureContainer", "lastAdventureTrail", "lastBangPotion819", "lastBangPotion820", "lastBangPotion821", "lastBangPotion822", "lastBangPotion823", "lastBangPotion824", "lastBangPotion825", "lastBangPotion826", "lastBangPotion827", "lastChanceBurn", "lastChessboard", "lastCombatEnvironments", "lastDwarfDiceRolls", "lastDwarfDigitRunes", "lastDwarfEquipmentRunes", "lastDwarfFactoryItem118", "lastDwarfFactoryItem119", "lastDwarfFactoryItem120", "lastDwarfFactoryItem360", "lastDwarfFactoryItem361", "lastDwarfFactoryItem362", "lastDwarfFactoryItem363", "lastDwarfFactoryItem364", "lastDwarfFactoryItem365", "lastDwarfFactoryItem910", "lastDwarfFactoryItem3199", "lastDwarfOfficeItem3208", "lastDwarfOfficeItem3209", "lastDwarfOfficeItem3210", "lastDwarfOfficeItem3211", "lastDwarfOfficeItem3212", "lastDwarfOfficeItem3213", "lastDwarfOfficeItem3214", "lastDwarfOreRunes", "lastDwarfHopper1", "lastDwarfHopper2", "lastDwarfHopper3", "lastDwarfHopper4", "lastEncounter", "lastMacroError", "lastMessageId", "lastPaperStrip3144", "lastPaperStrip4138", "lastPaperStrip4139", "lastPaperStrip4140", "lastPaperStrip4141", "lastPaperStrip4142", "lastPaperStrip4143", "lastPaperStrip4144", "lastPirateEphemera", "lastPorkoBoard", "lastPorkoPayouts", "lastPorkoExpected", "lastSlimeVial3885", "lastSlimeVial3886", "lastSlimeVial3887", "lastSlimeVial3888", "lastSlimeVial3889", "lastSlimeVial3890", "lastSlimeVial3891", "lastSlimeVial3892", "lastSlimeVial3893", "lastSlimeVial3894", "lastSlimeVial3895", "lastSlimeVial3896", "lastSelectedFaxbot", "lastSuccessfulFaxbot", "latteIngredients", "latteModifier", "latteUnlocks", "ledCandleMode", "leprecondoCurrentNeed", "leprecondoDiscovered", "leprecondoInstalled", "leprecondoNeedOrder", "libramSkillsHardcore", "libramSkillsSoftcore", "louvreOverride", "lovePotion", "lttQuestName", "maximizerList", "maximizerMRUList", "maximizerLastFilters", "mayoInMouth", "mayoMinderSetting", "merkinCatalogChoices", "merkinQuestPath", "mimicEggMonsters", "mineLayout1", "mineLayout2", "mineLayout3", "mineLayout4", "mineLayout5", "mineLayout6", "mineState1", "mineState2", "mineState3", "mineState4", "mineState5", "mineState6", "mpAutoRecoveryItems", "nextDistillateMods", "nextQuantumFamiliarName", "nextQuantumFamiliarOwner", "noncombatForcers", "nsChallenge2", "nsChallenge3", "nsChallenge4", "nsChallenge5", "nsTowerDoorKeysUsed", "oceanAction", "oceanDestination", "parkaMode", "pastaThrall1", "pastaThrall2", "pastaThrall3", "pastaThrall4", "pastaThrall5", "pastaThrall6", "pastaThrall7", "pastaThrall8", "peteMotorbikeTires", "peteMotorbikeGasTank", "peteMotorbikeHeadlight", "peteMotorbikeCowling", "peteMotorbikeMuffler", "peteMotorbikeSeat", "pieStuffing", "plantingDate", "plantingLength", "plantingScript", "plumberCostumeWorn", "pokefamBoosts", "postAscensionScript", "preAscensionScript", "questClumsinessGrove", "questDoctorBag", "questECoBucket", "questESlAudit", "questESlBacteria", "questESlCheeseburger", "questESlCocktail", "questESlDebt", "questESlFish", "questESlMushStash", "questESlSalt", "questESlSprinkles", "questESpClipper", "questESpEVE", "questESpFakeMedium", "questESpGore", "questESpJunglePun", "questESpOutOfOrder", "questESpSerum", "questESpSmokes", "questEStFishTrash", "questEStGiveMeFuel", "questEStNastyBears", "questEStSocialJusticeI", "questEStSocialJusticeII", "questEStSuperLuber", "questEStWorkWithFood", "questEStZippityDooDah", "questEUNewYou", "questF01Primordial", "questF02Hyboria", "questF03Future", "questF04Elves", "questF05Clancy", "questG01Meatcar", "questG02Whitecastle", "questG03Ego", "questG04Nemesis", "questG05Dark", "questG06Delivery", "questG07Myst", "questG08Moxie", "questG09Muscle", "questGlacierOfJerks", "questGuzzlr", "questI01Scapegoat", "questI02Beat", "questL02Larva", "questL03Rat", "questL04Bat", "questL05Goblin", "questL06Friar", "questL07Cyrptic", "questL08Trapper", "questL09Topping", "questL10Garbage", "questL11Black", "questL11Business", "questL11Curses", "questL11Desert", "questL11Doctor", "questL11MacGuffin", "questL11Manor", "questL11Palindome", "questL11Pyramid", "questL11Ron", "questL11Shen", "questL11Spare", "questL11Worship", "questL12HippyFrat", "questL12War", "questL13Final", "questL13Warehouse", "questLTTQuestByWire", "questM01Untinker", "questM02Artist", "questM03Bugbear", "questM05Toot", "questM06Gourd", "questM07Hammer", "questM08Baker", "questM09Rocks", "questM10Azazel", "questM11Postal", "questM12Pirate", "questM13Escape", "questM14Bounty", "questM15Lol", "questM16Temple", "questM17Babies", "questM18Swamp", "questM19Hippy", "questM20Necklace", "questM21Dance", "questM22Shirt", "questM23Meatsmith", "questM24Doc", "questM25Armorer", "questM26Oracle", "questMaelstromOfLovers", "questPAGhost", "questRufus", "questS01OldGuy", "questS02Monkees", "raveCombo1", "raveCombo2", "raveCombo3", "raveCombo4", "raveCombo5", "raveCombo6", "recoveryScript", "relayChatCLITrigger", "relayCounters", "retroCapeSuperhero", "retroCapeWashingInstructions", "royalty", "rufusQuestTarget", "rufusQuestType", "scriptMRUList", "seahorseName", "shadowLabyrinthGoal", "shadowRiftIngress", "shrubGarland", "shrubGifts", "shrubLights", "shrubTopper", "shrunkenHeadZombieAbilities", "sideDefeated", "sidequestArenaCompleted", "sidequestFarmCompleted", "sidequestJunkyardCompleted", "sidequestLighthouseCompleted", "sidequestNunsCompleted", "sidequestOrchardCompleted", "skateParkStatus", "snowsuit", "sourceTerminalChips", "sourceTerminalEducate1", "sourceTerminalEducate2", "sourceTerminalEnquiry", "sourceTerminalEducateKnown", "sourceTerminalEnhanceKnown", "sourceTerminalEnquiryKnown", "sourceTerminalExtrudeKnown", "spadingData", "spadingScript", "speakeasyName", "spelunkyStatus", "spelunkyUpgrades", "spookyravenRecipeUsed", "stationaryButton1", "stationaryButton2", "stationaryButton3", "stationaryButton4", "stationaryButton5", "streamCrossDefaultTarget", "sweetSynthesisBlacklist", "telescope1", "telescope2", "telescope3", "telescope4", "telescope5", "testudinalTeachings", "textColors", "thanksMessage", "tomeSkillsHardcore", "tomeSkillsSoftcore", "trackVoteMonster", "trackedMonsters", "trackedPhyla", "trainsetConfiguration", "umbrellaState", "umdLastObtained", "vintnerWineEffect", "vintnerWineName", "vintnerWineType", "violetFogLayout", "volcanoMaze1", "volcanoMaze2", "volcanoMaze3", "volcanoMaze4", "volcanoMaze5", "warProgress", "watchedPreferences", "wereProfessorAdvancedResearch", "workteaClue", "yourFavoriteBird", "yourFavoriteBirdMods", "youRobotCPUUpgrades", "zootGraftedMods", "zootMilkCrueltyMods", "zootMilkKindnessMods", "_automatedFutureSide", "_bastilleBoosts", "_bastilleChoice1", "_bastilleChoice2", "_bastilleChoice3", "_bastilleCurrentStyles", "_bastilleEnemyCastle", "_bastilleEnemyName", "_bastilleLastBattleResults", "_bastilleLastEncounter", "_bastilleStats", "_beachHeadsUsed", "_beachLayout", "_beachMinutes", "_birdOfTheDay", "_birdOfTheDayMods", "_bittycar", "_campAwaySmileBuffSign", "_citizenZone", "_citizenZoneMods", "_cloudTalkMessage", "_cloudTalkSmoker", "_coatOfPaintModifier", "_cupidBowFamiliars", "_currentDartboard", "_cyberZone1Defense", "_cyberZone1Hacker", "_cyberZone1Owner", "_cyberZone2Defense", "_cyberZone2Hacker", "_cyberZone2Owner", "_cyberZone3Defense", "_cyberZone3Hacker", "_cyberZone3Owner", "_deckCardsSeen", "_feastedFamiliars", "_floristPlantsUsed", "_frAreasUnlocked", "_frHoursLeft", "_frMonstersKilled", "_futuristicCollarModifier", "_futuristicHatModifier", "_futuristicShirtModifier", "_horsery", "_horseryCrazyMox", "_horseryCrazyMus", "_horseryCrazyMys", "_horseryCrazyName", "_horseryCurrentName", "_horseryDarkName", "_horseryNormalName", "_horseryPaleName", "_jickJarAvailable", "_jiggleCheesedMonsters", "_lastCombatActions", "_lastCombatStarted", "_locketMonstersFought", "_mayamSymbolsUsed", "_mummeryMods", "_mummeryUses", "_newYouQuestSkill", "_noHatModifier", "_pantogramModifier", "_perilLocations", "_pirateRealmCrewmate", "_pirateRealmCrewmate1", "_pirateRealmCrewmate2", "_pirateRealmCrewmate3", "_pirateRealmShip", "_pottedPowerPlant", "_questESp", "_questPartyFair", "_questPartyFairProgress", "_questPartyFairQuest", "_questPirateRealm", "_roboDrinks", "_roninStoragePulls", "_savageBeastMods", "_seadentWaveZone", "_spacegateAnimalLife", "_spacegateCoordinates", "_spacegateGear", "_spacegateHazards", "_spacegateIntelligentLife", "_spacegatePlanetName", "_spacegatePlantLife", "_stolenAccordions", "_tempRelayCounters", "_timeSpinnerFoodAvailable", "_trickOrTreatBlock", "_unknownEasyBountyItem", "_unknownHardBountyItem", "_unknownSpecialBountyItem", "_untakenEasyBountyItem", "_untakenHardBountyItem", "_untakenSpecialBountyItem", "_userMods", "_villainLairColor", "_villainLairKey", "_voteLocal1", "_voteLocal2", "_voteLocal3", "_voteLocal4", "_voteMonster1", "_voteMonster2", "_voteModifier", "_VYKEACompanionType", "_VYKEACompanionRune", "_VYKEACompanionName"], numericOrStringProperties = ["statusEngineering", "statusGalley", "statusMedbay", "statusMorgue", "statusNavigation", "statusScienceLab", "statusSonar", "statusSpecialOps", "statusWasteProcessing", "choiceAdventure2", "choiceAdventure3", "choiceAdventure4", "choiceAdventure5", "choiceAdventure6", "choiceAdventure7", "choiceAdventure8", "choiceAdventure9", "choiceAdventure10", "choiceAdventure11", "choiceAdventure12", "choiceAdventure14", "choiceAdventure15", "choiceAdventure16", "choiceAdventure17", "choiceAdventure18", "choiceAdventure19", "choiceAdventure20", "choiceAdventure21", "choiceAdventure22", "choiceAdventure23", "choiceAdventure24", "choiceAdventure25", "choiceAdventure26", "choiceAdventure27", "choiceAdventure28", "choiceAdventure29", "choiceAdventure40", "choiceAdventure41", "choiceAdventure42", "choiceAdventure45", "choiceAdventure46", "choiceAdventure47", "choiceAdventure71", "choiceAdventure72", "choiceAdventure73", "choiceAdventure74", "choiceAdventure75", "choiceAdventure76", "choiceAdventure77", "choiceAdventure86", "choiceAdventure87", "choiceAdventure88", "choiceAdventure89", "choiceAdventure90", "choiceAdventure91", "choiceAdventure105", "choiceAdventure106", "choiceAdventure107", "choiceAdventure108", "choiceAdventure109", "choiceAdventure110", "choiceAdventure111", "choiceAdventure112", "choiceAdventure113", "choiceAdventure114", "choiceAdventure115", "choiceAdventure116", "choiceAdventure117", "choiceAdventure118", "choiceAdventure120", "choiceAdventure123", "choiceAdventure125", "choiceAdventure126", "choiceAdventure127", "choiceAdventure129", "choiceAdventure131", "choiceAdventure132", "choiceAdventure135", "choiceAdventure136", "choiceAdventure137", "choiceAdventure138", "choiceAdventure139", "choiceAdventure140", "choiceAdventure141", "choiceAdventure142", "choiceAdventure143", "choiceAdventure144", "choiceAdventure145", "choiceAdventure146", "choiceAdventure147", "choiceAdventure148", "choiceAdventure149", "choiceAdventure151", "choiceAdventure152", "choiceAdventure153", "choiceAdventure154", "choiceAdventure155", "choiceAdventure156", "choiceAdventure157", "choiceAdventure158", "choiceAdventure159", "choiceAdventure160", "choiceAdventure161", "choiceAdventure162", "choiceAdventure163", "choiceAdventure164", "choiceAdventure165", "choiceAdventure166", "choiceAdventure167", "choiceAdventure168", "choiceAdventure169", "choiceAdventure170", "choiceAdventure171", "choiceAdventure172", "choiceAdventure177", "choiceAdventure178", "choiceAdventure180", "choiceAdventure181", "choiceAdventure182", "choiceAdventure184", "choiceAdventure185", "choiceAdventure186", "choiceAdventure187", "choiceAdventure188", "choiceAdventure189", "choiceAdventure191", "choiceAdventure197", "choiceAdventure198", "choiceAdventure199", "choiceAdventure200", "choiceAdventure201", "choiceAdventure202", "choiceAdventure203", "choiceAdventure204", "choiceAdventure205", "choiceAdventure206", "choiceAdventure207", "choiceAdventure208", "choiceAdventure211", "choiceAdventure212", "choiceAdventure213", "choiceAdventure214", "choiceAdventure215", "choiceAdventure216", "choiceAdventure217", "choiceAdventure218", "choiceAdventure219", "choiceAdventure220", "choiceAdventure221", "choiceAdventure222", "choiceAdventure223", "choiceAdventure224", "choiceAdventure225", "choiceAdventure230", "choiceAdventure272", "choiceAdventure273", "choiceAdventure276", "choiceAdventure277", "choiceAdventure278", "choiceAdventure279", "choiceAdventure280", "choiceAdventure281", "choiceAdventure282", "choiceAdventure283", "choiceAdventure284", "choiceAdventure285", "choiceAdventure286", "choiceAdventure287", "choiceAdventure288", "choiceAdventure289", "choiceAdventure290", "choiceAdventure291", "choiceAdventure292", "choiceAdventure293", "choiceAdventure294", "choiceAdventure295", "choiceAdventure296", "choiceAdventure297", "choiceAdventure298", "choiceAdventure299", "choiceAdventure302", "choiceAdventure303", "choiceAdventure304", "choiceAdventure305", "choiceAdventure306", "choiceAdventure307", "choiceAdventure308", "choiceAdventure309", "choiceAdventure310", "choiceAdventure311", "choiceAdventure317", "choiceAdventure318", "choiceAdventure319", "choiceAdventure320", "choiceAdventure321", "choiceAdventure322", "choiceAdventure326", "choiceAdventure327", "choiceAdventure328", "choiceAdventure329", "choiceAdventure330", "choiceAdventure331", "choiceAdventure332", "choiceAdventure333", "choiceAdventure334", "choiceAdventure335", "choiceAdventure336", "choiceAdventure337", "choiceAdventure338", "choiceAdventure339", "choiceAdventure340", "choiceAdventure341", "choiceAdventure342", "choiceAdventure343", "choiceAdventure344", "choiceAdventure345", "choiceAdventure346", "choiceAdventure347", "choiceAdventure348", "choiceAdventure349", "choiceAdventure350", "choiceAdventure351", "choiceAdventure352", "choiceAdventure353", "choiceAdventure354", "choiceAdventure355", "choiceAdventure356", "choiceAdventure357", "choiceAdventure358", "choiceAdventure360", "choiceAdventure361", "choiceAdventure362", "choiceAdventure363", "choiceAdventure364", "choiceAdventure365", "choiceAdventure366", "choiceAdventure367", "choiceAdventure372", "choiceAdventure376", "choiceAdventure387", "choiceAdventure388", "choiceAdventure389", "choiceAdventure390", "choiceAdventure391", "choiceAdventure392", "choiceAdventure393", "choiceAdventure395", "choiceAdventure396", "choiceAdventure397", "choiceAdventure398", "choiceAdventure399", "choiceAdventure400", "choiceAdventure401", "choiceAdventure402", "choiceAdventure403", "choiceAdventure423", "choiceAdventure424", "choiceAdventure425", "choiceAdventure426", "choiceAdventure427", "choiceAdventure428", "choiceAdventure429", "choiceAdventure430", "choiceAdventure431", "choiceAdventure432", "choiceAdventure433", "choiceAdventure435", "choiceAdventure438", "choiceAdventure439", "choiceAdventure442", "choiceAdventure444", "choiceAdventure445", "choiceAdventure446", "choiceAdventure447", "choiceAdventure448", "choiceAdventure449", "choiceAdventure451", "choiceAdventure452", "choiceAdventure453", "choiceAdventure454", "choiceAdventure455", "choiceAdventure456", "choiceAdventure457", "choiceAdventure458", "choiceAdventure460", "choiceAdventure461", "choiceAdventure462", "choiceAdventure463", "choiceAdventure464", "choiceAdventure465", "choiceAdventure467", "choiceAdventure468", "choiceAdventure469", "choiceAdventure470", "choiceAdventure471", "choiceAdventure472", "choiceAdventure473", "choiceAdventure474", "choiceAdventure475", "choiceAdventure477", "choiceAdventure478", "choiceAdventure480", "choiceAdventure483", "choiceAdventure484", "choiceAdventure485", "choiceAdventure486", "choiceAdventure488", "choiceAdventure489", "choiceAdventure490", "choiceAdventure491", "choiceAdventure496", "choiceAdventure497", "choiceAdventure502", "choiceAdventure503", "choiceAdventure504", "choiceAdventure505", "choiceAdventure506", "choiceAdventure507", "choiceAdventure509", "choiceAdventure510", "choiceAdventure511", "choiceAdventure512", "choiceAdventure513", "choiceAdventure514", "choiceAdventure515", "choiceAdventure517", "choiceAdventure518", "choiceAdventure519", "choiceAdventure521", "choiceAdventure522", "choiceAdventure523", "choiceAdventure527", "choiceAdventure528", "choiceAdventure529", "choiceAdventure530", "choiceAdventure531", "choiceAdventure532", "choiceAdventure533", "choiceAdventure534", "choiceAdventure535", "choiceAdventure536", "choiceAdventure538", "choiceAdventure539", "choiceAdventure542", "choiceAdventure543", "choiceAdventure544", "choiceAdventure546", "choiceAdventure548", "choiceAdventure549", "choiceAdventure550", "choiceAdventure551", "choiceAdventure552", "choiceAdventure553", "choiceAdventure554", "choiceAdventure556", "choiceAdventure557", "choiceAdventure558", "choiceAdventure559", "choiceAdventure560", "choiceAdventure561", "choiceAdventure562", "choiceAdventure563", "choiceAdventure564", "choiceAdventure565", "choiceAdventure566", "choiceAdventure567", "choiceAdventure568", "choiceAdventure569", "choiceAdventure571", "choiceAdventure572", "choiceAdventure573", "choiceAdventure574", "choiceAdventure575", "choiceAdventure576", "choiceAdventure577", "choiceAdventure578", "choiceAdventure579", "choiceAdventure581", "choiceAdventure582", "choiceAdventure583", "choiceAdventure584", "choiceAdventure594", "choiceAdventure595", "choiceAdventure596", "choiceAdventure597", "choiceAdventure598", "choiceAdventure599", "choiceAdventure600", "choiceAdventure603", "choiceAdventure604", "choiceAdventure616", "choiceAdventure634", "choiceAdventure640", "choiceAdventure654", "choiceAdventure655", "choiceAdventure656", "choiceAdventure657", "choiceAdventure658", "choiceAdventure664", "choiceAdventure669", "choiceAdventure670", "choiceAdventure671", "choiceAdventure672", "choiceAdventure673", "choiceAdventure674", "choiceAdventure675", "choiceAdventure676", "choiceAdventure677", "choiceAdventure678", "choiceAdventure679", "choiceAdventure681", "choiceAdventure683", "choiceAdventure684", "choiceAdventure685", "choiceAdventure686", "choiceAdventure687", "choiceAdventure688", "choiceAdventure689", "choiceAdventure690", "choiceAdventure691", "choiceAdventure692", "choiceAdventure693", "choiceAdventure694", "choiceAdventure695", "choiceAdventure696", "choiceAdventure697", "choiceAdventure698", "choiceAdventure700", "choiceAdventure701", "choiceAdventure705", "choiceAdventure706", "choiceAdventure707", "choiceAdventure708", "choiceAdventure709", "choiceAdventure710", "choiceAdventure711", "choiceAdventure712", "choiceAdventure713", "choiceAdventure714", "choiceAdventure715", "choiceAdventure716", "choiceAdventure717", "choiceAdventure721", "choiceAdventure725", "choiceAdventure729", "choiceAdventure733", "choiceAdventure737", "choiceAdventure741", "choiceAdventure745", "choiceAdventure749", "choiceAdventure753", "choiceAdventure771", "choiceAdventure778", "choiceAdventure780", "choiceAdventure781", "choiceAdventure783", "choiceAdventure784", "choiceAdventure785", "choiceAdventure786", "choiceAdventure787", "choiceAdventure788", "choiceAdventure789", "choiceAdventure791", "choiceAdventure793", "choiceAdventure794", "choiceAdventure795", "choiceAdventure796", "choiceAdventure797", "choiceAdventure803", "choiceAdventure805", "choiceAdventure808", "choiceAdventure809", "choiceAdventure813", "choiceAdventure815", "choiceAdventure830", "choiceAdventure832", "choiceAdventure833", "choiceAdventure834", "choiceAdventure835", "choiceAdventure837", "choiceAdventure838", "choiceAdventure839", "choiceAdventure840", "choiceAdventure841", "choiceAdventure842", "choiceAdventure851", "choiceAdventure852", "choiceAdventure853", "choiceAdventure854", "choiceAdventure855", "choiceAdventure856", "choiceAdventure857", "choiceAdventure858", "choiceAdventure866", "choiceAdventure873", "choiceAdventure875", "choiceAdventure876", "choiceAdventure877", "choiceAdventure878", "choiceAdventure879", "choiceAdventure880", "choiceAdventure881", "choiceAdventure882", "choiceAdventure888", "choiceAdventure889", "choiceAdventure918", "choiceAdventure919", "choiceAdventure920", "choiceAdventure921", "choiceAdventure923", "choiceAdventure924", "choiceAdventure925", "choiceAdventure926", "choiceAdventure927", "choiceAdventure928", "choiceAdventure929", "choiceAdventure930", "choiceAdventure931", "choiceAdventure932", "choiceAdventure940", "choiceAdventure941", "choiceAdventure942", "choiceAdventure943", "choiceAdventure944", "choiceAdventure945", "choiceAdventure946", "choiceAdventure950", "choiceAdventure955", "choiceAdventure957", "choiceAdventure958", "choiceAdventure959", "choiceAdventure960", "choiceAdventure961", "choiceAdventure962", "choiceAdventure963", "choiceAdventure964", "choiceAdventure965", "choiceAdventure966", "choiceAdventure970", "choiceAdventure973", "choiceAdventure974", "choiceAdventure975", "choiceAdventure976", "choiceAdventure977", "choiceAdventure979", "choiceAdventure980", "choiceAdventure981", "choiceAdventure982", "choiceAdventure983", "choiceAdventure988", "choiceAdventure989", "choiceAdventure993", "choiceAdventure998", "choiceAdventure1000", "choiceAdventure1003", "choiceAdventure1005", "choiceAdventure1006", "choiceAdventure1007", "choiceAdventure1008", "choiceAdventure1009", "choiceAdventure1010", "choiceAdventure1011", "choiceAdventure1012", "choiceAdventure1013", "choiceAdventure1015", "choiceAdventure1016", "choiceAdventure1017", "choiceAdventure1018", "choiceAdventure1019", "choiceAdventure1020", "choiceAdventure1021", "choiceAdventure1022", "choiceAdventure1023", "choiceAdventure1026", "choiceAdventure1027", "choiceAdventure1028", "choiceAdventure1029", "choiceAdventure1030", "choiceAdventure1031", "choiceAdventure1032", "choiceAdventure1033", "choiceAdventure1034", "choiceAdventure1035", "choiceAdventure1036", "choiceAdventure1037", "choiceAdventure1038", "choiceAdventure1039", "choiceAdventure1040", "choiceAdventure1041", "choiceAdventure1042", "choiceAdventure1044", "choiceAdventure1045", "choiceAdventure1046", "choiceAdventure1048", "choiceAdventure1051", "choiceAdventure1052", "choiceAdventure1053", "choiceAdventure1054", "choiceAdventure1055", "choiceAdventure1056", "choiceAdventure1057", "choiceAdventure1059", "choiceAdventure1060", "choiceAdventure1061", "choiceAdventure1062", "choiceAdventure1065", "choiceAdventure1067", "choiceAdventure1068", "choiceAdventure1069", "choiceAdventure1070", "choiceAdventure1071", "choiceAdventure1073", "choiceAdventure1077", "choiceAdventure1080", "choiceAdventure1081", "choiceAdventure1082", "choiceAdventure1083", "choiceAdventure1084", "choiceAdventure1085", "choiceAdventure1091", "choiceAdventure1094", "choiceAdventure1095", "choiceAdventure1096", "choiceAdventure1097", "choiceAdventure1102", "choiceAdventure1106", "choiceAdventure1107", "choiceAdventure1108", "choiceAdventure1110", "choiceAdventure1114", "choiceAdventure1115", "choiceAdventure1116", "choiceAdventure1118", "choiceAdventure1119", "choiceAdventure1120", "choiceAdventure1121", "choiceAdventure1122", "choiceAdventure1123", "choiceAdventure1171", "choiceAdventure1172", "choiceAdventure1173", "choiceAdventure1174", "choiceAdventure1175", "choiceAdventure1193", "choiceAdventure1195", "choiceAdventure1196", "choiceAdventure1197", "choiceAdventure1198", "choiceAdventure1199", "choiceAdventure1202", "choiceAdventure1203", "choiceAdventure1204", "choiceAdventure1205", "choiceAdventure1206", "choiceAdventure1207", "choiceAdventure1208", "choiceAdventure1209", "choiceAdventure1210", "choiceAdventure1211", "choiceAdventure1212", "choiceAdventure1213", "choiceAdventure1214", "choiceAdventure1215", "choiceAdventure1219", "choiceAdventure1222", "choiceAdventure1223", "choiceAdventure1224", "choiceAdventure1225", "choiceAdventure1226", "choiceAdventure1227", "choiceAdventure1228", "choiceAdventure1229", "choiceAdventure1236", "choiceAdventure1237", "choiceAdventure1238", "choiceAdventure1239", "choiceAdventure1240", "choiceAdventure1241", "choiceAdventure1242", "choiceAdventure1243", "choiceAdventure1244", "choiceAdventure1245", "choiceAdventure1246", "choiceAdventure1247", "choiceAdventure1248", "choiceAdventure1249", "choiceAdventure1250", "choiceAdventure1251", "choiceAdventure1252", "choiceAdventure1253", "choiceAdventure1254", "choiceAdventure1255", "choiceAdventure1256", "choiceAdventure1266", "choiceAdventure1280", "choiceAdventure1281", "choiceAdventure1282", "choiceAdventure1283", "choiceAdventure1284", "choiceAdventure1285", "choiceAdventure1286", "choiceAdventure1287", "choiceAdventure1288", "choiceAdventure1289", "choiceAdventure1290", "choiceAdventure1291", "choiceAdventure1292", "choiceAdventure1293", "choiceAdventure1294", "choiceAdventure1295", "choiceAdventure1296", "choiceAdventure1297", "choiceAdventure1298", "choiceAdventure1299", "choiceAdventure1300", "choiceAdventure1301", "choiceAdventure1302", "choiceAdventure1303", "choiceAdventure1304", "choiceAdventure1305", "choiceAdventure1307", "choiceAdventure1310", "choiceAdventure1312", "choiceAdventure1313", "choiceAdventure1314", "choiceAdventure1315", "choiceAdventure1316", "choiceAdventure1317", "choiceAdventure1318", "choiceAdventure1319", "choiceAdventure1321", "choiceAdventure1322", "choiceAdventure1323", "choiceAdventure1324", "choiceAdventure1325", "choiceAdventure1326", "choiceAdventure1327", "choiceAdventure1328", "choiceAdventure1332", "choiceAdventure1333", "choiceAdventure1335", "choiceAdventure1340", "choiceAdventure1341", "choiceAdventure1345", "choiceAdventure1389", "choiceAdventure1392", "choiceAdventure1397", "choiceAdventure1399", "choiceAdventure1405", "choiceAdventure1411", "choiceAdventure1415", "choiceAdventure1427", "choiceAdventure1428", "choiceAdventure1429", "choiceAdventure1430", "choiceAdventure1431", "choiceAdventure1432", "choiceAdventure1433", "choiceAdventure1434", "choiceAdventure1436", "choiceAdventure1460", "choiceAdventure1461", "choiceAdventure1467", "choiceAdventure1468", "choiceAdventure1469", "choiceAdventure1470", "choiceAdventure1471", "choiceAdventure1472", "choiceAdventure1473", "choiceAdventure1474", "choiceAdventure1475", "choiceAdventure1486", "choiceAdventure1487", "choiceAdventure1488", "choiceAdventure1489", "choiceAdventure1491", "choiceAdventure1494", "choiceAdventure1505", "choiceAdventure1528", "choiceAdventure1534", "choiceAdventure1538", "choiceAdventure1539", "choiceAdventure1540", "choiceAdventure1541", "choiceAdventure1542", "choiceAdventure1545", "choiceAdventure1546", "choiceAdventure1547", "choiceAdventure1548", "choiceAdventure1549", "choiceAdventure1550", "choiceAdventure1591"], familiarProperties = ["commaFamiliar", "cupidBowLastFamiliar", "nextQuantumFamiliar", "stillsuitFamiliar", "zootGraftedButtCheekLeftFamiliar", "zootGraftedButtCheekRightFamiliar", "zootGraftedFootLeftFamiliar", "zootGraftedFootRightFamiliar", "zootGraftedHandLeftFamiliar", "zootGraftedHandRightFamiliar", "zootGraftedHeadFamiliar", "zootGraftedNippleLeftFamiliar", "zootGraftedNippleRightFamiliar", "zootGraftedShoulderLeftFamiliar", "zootGraftedShoulderRightFamiliar"], familiarNumericProperties = ["cupidBowLastFamiliar", "zootGraftedButtCheekLeftFamiliar", "zootGraftedButtCheekRightFamiliar", "zootGraftedFootLeftFamiliar", "zootGraftedFootRightFamiliar", "zootGraftedHandLeftFamiliar", "zootGraftedHandRightFamiliar", "zootGraftedHeadFamiliar", "zootGraftedNippleLeftFamiliar", "zootGraftedNippleRightFamiliar", "zootGraftedShoulderLeftFamiliar", "zootGraftedShoulderRightFamiliar"], statProperties = ["nsChallenge1", "snojoSetting"], phylumProperties = ["dnaSyringe", "locketPhylum", "redSnapperPhylum", "_circadianRhythmsPhylum"], itemProperties = ["commerceGhostItem", "daycareInstructorItem", "doctorBagQuestItem", "dolphinItem", "eweItem", "guzzlrQuestBooze", "implementGlitchItem", "muffinOnOrder", "rufusDesiredArtifact", "rufusDesiredItems", "shenQuestItem", "trapperOre", "walfordBucketItem", "_cookbookbatQuestIngredient", "_crimboPastDailySpecialItem", "_dailySpecial", "_pirateRealmCurio"], itemNumericProperties = ["daycareInstructorItem", "_crimboPastDailySpecialItem"];

// node_modules/libram/dist/propertyTyping.js
init_kolmafia_polyfill();
var booleanPropertiesSet = new Set(booleanProperties), numericPropertiesSet = new Set(numericProperties), numericOrStringPropertiesSet = new Set(numericOrStringProperties), stringPropertiesSet = new Set(stringProperties), locationPropertiesSet = new Set(locationProperties), monsterPropertiesSet = new Set(monsterProperties), familiarPropertiesSet = new Set(familiarProperties), statPropertiesSet = new Set(statProperties), phylumPropertiesSet = new Set(phylumProperties), itemPropertiesSet = new Set(itemProperties);
function isBooleanProperty(property) {
  return booleanPropertiesSet.has(property);
}
function isNumericProperty(property) {
  return numericPropertiesSet.has(property);
}
function isNumericOrStringProperty(property) {
  return numericOrStringPropertiesSet.has(property);
}
function isStringProperty(property) {
  return stringPropertiesSet.has(property);
}
function isLocationProperty(property) {
  return locationPropertiesSet.has(property);
}
function isMonsterProperty(property) {
  return monsterPropertiesSet.has(property);
}
function isFamiliarProperty(property) {
  return familiarPropertiesSet.has(property);
}
function isStatProperty(property) {
  return statPropertiesSet.has(property);
}
function isPhylumProperty(property) {
  return phylumPropertiesSet.has(property);
}
function isItemProperty(property) {
  return itemPropertiesSet.has(property);
}

// node_modules/libram/dist/property.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
      _defineProperty2(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray(arr);
}
function _classCallCheck2(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey2(descriptor.key), descriptor);
  }
}
function _createClass2(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties2(Constructor.prototype, protoProps), staticProps && _defineProperties2(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty2(obj, key, value) {
  return key = _toPropertyKey2(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey2(arg) {
  var key = _toPrimitive2(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive2(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
}
function _arrayLikeToArray(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
var createPropertyGetter = function(transform) {
  return function(property, default_) {
    var value = (0, import_kolmafia3.getProperty)(property);
    return default_ !== void 0 && value === "" ? default_ : transform(value, property);
  };
};
function createMafiaClassPropertyGetter(Type, toType) {
  var numericPropertyNames = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
  return createPropertyGetter(function(value, property) {
    if (value === "")
      return null;
    var v = numericPropertyNames.includes(property) ? value.match(/^[0-9]+$/) ? toType(parseInt(value)) : null : toType(value);
    return v === Type.none ? null : v;
  });
}
var getString = createPropertyGetter(function(value) {
  return value;
}), getCommaSeparated = createPropertyGetter(function(value) {
  return value.split(/, ?/);
}), getBoolean = createPropertyGetter(function(value) {
  return value === "true";
}), getNumber = createPropertyGetter(function(value) {
  return Number(value);
}), getBounty = createMafiaClassPropertyGetter(import_kolmafia3.Bounty, import_kolmafia3.toBounty), getClass = createMafiaClassPropertyGetter(import_kolmafia3.Class, import_kolmafia3.toClass), getCoinmaster = createMafiaClassPropertyGetter(import_kolmafia3.Coinmaster, import_kolmafia3.toCoinmaster), getEffect = createMafiaClassPropertyGetter(import_kolmafia3.Effect, import_kolmafia3.toEffect), getElement = createMafiaClassPropertyGetter(import_kolmafia3.Element, import_kolmafia3.toElement), getFamiliar = createMafiaClassPropertyGetter(import_kolmafia3.Familiar, import_kolmafia3.toFamiliar, familiarNumericProperties), getItem = createMafiaClassPropertyGetter(import_kolmafia3.Item, import_kolmafia3.toItem, itemNumericProperties), getLocation = createMafiaClassPropertyGetter(import_kolmafia3.Location, import_kolmafia3.toLocation), getMonster = createMafiaClassPropertyGetter(import_kolmafia3.Monster, import_kolmafia3.toMonster, monsterNumericProperties), getPhylum = createMafiaClassPropertyGetter(import_kolmafia3.Phylum, import_kolmafia3.toPhylum), getServant = createMafiaClassPropertyGetter(import_kolmafia3.Servant, import_kolmafia3.toServant), getSkill = createMafiaClassPropertyGetter(import_kolmafia3.Skill, import_kolmafia3.toSkill), getSlot = createMafiaClassPropertyGetter(import_kolmafia3.Slot, import_kolmafia3.toSlot), getStat = createMafiaClassPropertyGetter(import_kolmafia3.Stat, import_kolmafia3.toStat), getThrall = createMafiaClassPropertyGetter(import_kolmafia3.Thrall, import_kolmafia3.toThrall);
function get(property, _default) {
  var value = getString(property);
  if (isBooleanProperty(property)) {
    var _getBoolean;
    return (_getBoolean = getBoolean(property, _default)) !== null && _getBoolean !== void 0 ? _getBoolean : !1;
  } else if (isNumericProperty(property)) {
    var _getNumber;
    return (_getNumber = getNumber(property, _default)) !== null && _getNumber !== void 0 ? _getNumber : 0;
  } else {
    if (isNumericOrStringProperty(property))
      return value.match(/^\d+$/) ? parseInt(value) : value;
    if (isLocationProperty(property))
      return getLocation(property, _default);
    if (isMonsterProperty(property))
      return getMonster(property, _default);
    if (isFamiliarProperty(property))
      return getFamiliar(property, _default);
    if (isStatProperty(property))
      return getStat(property, _default);
    if (isPhylumProperty(property))
      return getPhylum(property, _default);
    if (isItemProperty(property))
      return getItem(property, _default);
    if (isStringProperty(property))
      return value === "" && _default !== void 0 ? _default : value;
  }
  return _default instanceof import_kolmafia3.Location ? getLocation(property, _default) : _default instanceof import_kolmafia3.Monster ? getMonster(property, _default) : _default instanceof import_kolmafia3.Familiar ? getFamiliar(property, _default) : _default instanceof import_kolmafia3.Stat ? getStat(property, _default) : _default instanceof import_kolmafia3.Phylum ? getPhylum(property, _default) : _default instanceof import_kolmafia3.Item ? getItem(property, _default) : typeof _default == "boolean" ? value === "true" ? !0 : value === "false" ? !1 : _default : typeof _default == "number" ? value === "" ? _default : parseInt(value) : value === "" ? _default === void 0 ? "" : _default : value;
}
function _set(property, value) {
  var stringValue = value === null ? "" : value.toString();
  return (0, import_kolmafia3.setProperty)(property, stringValue), value;
}
function setProperties(properties) {
  for (var _i = 0, _Object$entries = Object.entries(properties); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), prop = _Object$entries$_i[0], value = _Object$entries$_i[1];
    _set(prop, value);
  }
}
function withProperties(properties, callback) {
  var propertiesBackup = Object.fromEntries(Object.entries(properties).map(function(_ref) {
    var _ref2 = _slicedToArray(_ref, 1), prop = _ref2[0];
    return [prop, get(prop)];
  }));
  setProperties(properties);
  try {
    return callback();
  } finally {
    setProperties(propertiesBackup);
  }
}
function withProperty(property, value, callback) {
  return withProperties(_defineProperty2({}, property, value), callback);
}
function withChoices(choices, callback) {
  var properties = Object.fromEntries(Object.entries(choices).map(function(_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2), choice = _ref4[0], option = _ref4[1];
    return ["choiceAdventure".concat(choice), option];
  }));
  return withProperties(properties, callback);
}
function withChoice(choice, value, callback) {
  return withChoices(_defineProperty2({}, choice, value), callback);
}
var PropertiesManager = /* @__PURE__ */ function() {
  function PropertiesManager2() {
    _classCallCheck2(this, PropertiesManager2), _defineProperty2(this, "properties", {});
  }
  return _createClass2(PropertiesManager2, [{
    key: "storedValues",
    get: function() {
      return this.properties;
    }
  }, {
    key: "set",
    value: function(propertiesToSet) {
      for (var _i2 = 0, _Object$entries2 = Object.entries(propertiesToSet); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), propertyName = _Object$entries2$_i[0], propertyValue = _Object$entries2$_i[1];
        propertyName in this.properties || (this.properties[propertyName] = (0, import_kolmafia3.propertyExists)(propertyName) ? get(propertyName) : PropertiesManager2.EMPTY_PREFERENCE), _set(propertyName, propertyValue);
      }
    }
  }, {
    key: "setChoices",
    value: function(choicesToSet) {
      this.set(Object.fromEntries(Object.entries(choicesToSet).map(function(_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2), choiceNumber = _ref6[0], choiceValue = _ref6[1];
        return ["choiceAdventure".concat(choiceNumber), choiceValue];
      })));
    }
  }, {
    key: "setChoice",
    value: function(choiceToSet, value) {
      this.setChoices(_defineProperty2({}, choiceToSet, value));
    }
  }, {
    key: "reset",
    value: function() {
      for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++)
        properties[_key] = arguments[_key];
      for (var _i3 = 0, _properties = properties; _i3 < _properties.length; _i3++) {
        var property = _properties[_i3];
        if (property in this.properties) {
          var value = this.properties[property];
          value === PropertiesManager2.EMPTY_PREFERENCE ? (0, import_kolmafia3.removeProperty)(property) : _set(property, value);
        }
      }
    }
  }, {
    key: "resetAll",
    value: function() {
      this.reset.apply(this, _toConsumableArray(Object.keys(this.properties)));
    }
  }, {
    key: "clear",
    value: function() {
      for (var _len2 = arguments.length, properties = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
        properties[_key2] = arguments[_key2];
      for (var _i4 = 0, _properties2 = properties; _i4 < _properties2.length; _i4++) {
        var property = _properties2[_i4];
        this.properties[property] && delete this.properties[property];
      }
    }
  }, {
    key: "clearAll",
    value: function() {
      this.properties = {};
    }
  }, {
    key: "setMinimumValue",
    value: function(property, value) {
      return get(property, 0) < value ? (this.set(_defineProperty2({}, property, value)), !0) : !1;
    }
  }, {
    key: "setMaximumValue",
    value: function(property, value) {
      return get(property, 0) > value ? (this.set(_defineProperty2({}, property, value)), !0) : !1;
    }
  }, {
    key: "clone",
    value: function() {
      var newGuy = new PropertiesManager2();
      return newGuy.properties = this.storedValues, newGuy;
    }
  }, {
    key: "clamp",
    value: function(property, min, max) {
      if (max < min)
        return !1;
      var start = get(property);
      return this.setMinimumValue(property, min), this.setMaximumValue(property, max), start !== get(property);
    }
  }, {
    key: "equals",
    value: function(other) {
      var thisProps = Object.entries(this.storedValues), otherProps = new Map(Object.entries(other.storedValues));
      if (thisProps.length !== otherProps.size)
        return !1;
      for (var _i5 = 0, _thisProps = thisProps; _i5 < _thisProps.length; _i5++) {
        var _thisProps$_i = _slicedToArray(_thisProps[_i5], 2), propertyName = _thisProps$_i[0], propertyValue = _thisProps$_i[1];
        if (otherProps.get(propertyName) === propertyValue)
          return !1;
      }
      return !0;
    }
  }, {
    key: "merge",
    value: function(other) {
      var newGuy = new PropertiesManager2();
      return newGuy.properties = _objectSpread(_objectSpread({}, this.properties), other.properties), newGuy;
    }
  }], [{
    key: "merge",
    value: function() {
      for (var _len3 = arguments.length, mergees = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)
        mergees[_key3] = arguments[_key3];
      return mergees.length === 0 ? new PropertiesManager2() : mergees.reduce(function(a, b) {
        return a.merge(b);
      });
    }
  }]), PropertiesManager2;
}();
_defineProperty2(PropertiesManager, "EMPTY_PREFERENCE", Symbol("empty preference"));

// node_modules/libram/dist/template-string.js
init_kolmafia_polyfill();
var import_kolmafia4 = require("kolmafia");

// node_modules/libram/dist/utils.js
init_kolmafia_polyfill();
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray2(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _slicedToArray2(arr, i) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i) || _unsupportedIterableToArray2(arr, i) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit2(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _toConsumableArray2(arr) {
  return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray2(arr) || _nonIterableSpread2();
}
function _nonIterableSpread2() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray2(o, minLen);
  }
}
function _iterableToArray2(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles2(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray2(arr);
}
function _arrayLikeToArray2(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function notNull(value) {
  return value !== null;
}
function parseNumber(n) {
  return Number.parseInt(n.replace(/,/g, ""));
}
function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
function arrayToCountedMap(array) {
  if (!Array.isArray(array))
    return array;
  var map = /* @__PURE__ */ new Map();
  return array.forEach(function(item6) {
    map.set(item6, (map.get(item6) || 0) + 1);
  }), map;
}
function countedMapToArray(map) {
  var _ref;
  return (_ref = []).concat.apply(_ref, _toConsumableArray2(_toConsumableArray2(map).map(function(_ref2) {
    var _ref3 = _slicedToArray2(_ref2, 2), item6 = _ref3[0], quantity = _ref3[1];
    return Array(quantity).fill(item6);
  })));
}
function countedMapToString(map) {
  return _toConsumableArray2(map).map(function(_ref4) {
    var _ref5 = _slicedToArray2(_ref4, 2), item6 = _ref5[0], quantity = _ref5[1];
    return "".concat(quantity, " x ").concat(item6);
  }).join(", ");
}
function sum(addends, x) {
  return addends.reduce(function(subtotal, element) {
    return subtotal + (typeof x == "function" ? x(element) : element[x]);
  }, 0);
}
function arrayContains(item6, array) {
  return array.includes(item6);
}
function setEqual(a, b) {
  var sortedA = _toConsumableArray2(a).sort(), sortedB = _toConsumableArray2(b).sort();
  return a.length === b.length && sortedA.every(function(item6, index) {
    return item6 === sortedB[index];
  });
}
function splitByCommasWithEscapes(str) {
  var returnValue = [], ignoreNext = !1, currentString = "", _iterator2 = _createForOfIteratorHelper(str.split("")), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var char = _step2.value;
      char === "\\" ? ignoreNext = !0 : (char == "," && !ignoreNext ? (returnValue.push(currentString.trim()), currentString = "") : currentString += char, ignoreNext = !1);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return returnValue.push(currentString.trim()), returnValue;
}
function maxBy(array, optimizer) {
  var reverse = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  if (!array.length)
    throw new Error("Cannot call maxBy on an empty array!");
  return typeof optimizer == "function" ? _toConsumableArray2(array).reduce(function(_ref6, other) {
    var value = _ref6.value, item6 = _ref6.item, otherValue = optimizer(other);
    return value >= otherValue !== reverse ? {
      value: value,
      item: item6
    } : {
      value: otherValue,
      item: other
    };
  }, {
    item: array[0],
    value: optimizer(array[0])
  }).item : array.reduce(function(a, b) {
    return a[optimizer] >= b[optimizer] !== reverse ? a : b;
  });
}
function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
    args[_key] = arguments[_key];
  return args;
}
function arrayEquals(left, right) {
  return left.length !== right.length ? !1 : left.every(function(element, index) {
    return element === right[index];
  });
}
function undelay(delayedObject) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
    args[_key2 - 1] = arguments[_key2];
  return typeof delayedObject == "function" ? delayedObject.apply(void 0, args) : delayedObject;
}
function makeByXFunction(source) {
  return function(options, alternateSource) {
    var _options$val, val = undelay(alternateSource != null ? alternateSource : source);
    return "default" in options ? (_options$val = options[val]) !== null && _options$val !== void 0 ? _options$val : options.default : options[val];
  };
}
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// node_modules/libram/dist/template-string.js
var concatTemplateString = function(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
    placeholders[_key - 1] = arguments[_key];
  return literals.raw.reduce(function(acc, literal, i) {
    var _placeholders$i;
    return acc + literal + ((_placeholders$i = placeholders[i]) !== null && _placeholders$i !== void 0 ? _placeholders$i : "");
  }, "");
}, handleTypeGetError = function(Type, error) {
  var message = "".concat(error), match = message.match(RegExp("Bad ".concat(Type.name.toLowerCase(), " value: .*")));
  match ? (0, import_kolmafia4.print)("".concat(match[0], "; if you're certain that this ").concat(Type.name, " exists and is spelled correctly, please update KoLMafia"), "red") : (0, import_kolmafia4.print)(message);
}, createSingleConstant = function(Type, converter) {
  var tagFunction = function(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
      placeholders[_key2 - 1] = arguments[_key2];
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    try {
      return Type.get(input);
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0, import_kolmafia4.abort)();
  };
  return tagFunction.cls = Type, tagFunction.none = Type.none, tagFunction.get = function(name) {
    var value = converter(name);
    return value === Type.none ? null : value;
  }, tagFunction;
}, createPluralConstant = function(Type) {
  var tagFunction = function(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)
      placeholders[_key3 - 1] = arguments[_key3];
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    if (input === "")
      return Type.all();
    try {
      return Type.get(splitByCommasWithEscapes(input));
    } catch (error) {
      handleTypeGetError(Type, error);
    }
    (0, import_kolmafia4.abort)();
  };
  return tagFunction.all = function() {
    return Type.all();
  }, tagFunction;
}, $bounty = createSingleConstant(import_kolmafia4.Bounty, import_kolmafia4.toBounty), $bounties = createPluralConstant(import_kolmafia4.Bounty), $class = createSingleConstant(import_kolmafia4.Class, import_kolmafia4.toClass), $classes = createPluralConstant(import_kolmafia4.Class), $coinmaster = createSingleConstant(import_kolmafia4.Coinmaster, import_kolmafia4.toCoinmaster), $coinmasters = createPluralConstant(import_kolmafia4.Coinmaster), $effect = createSingleConstant(import_kolmafia4.Effect, import_kolmafia4.toEffect), $effects = createPluralConstant(import_kolmafia4.Effect), $element = createSingleConstant(import_kolmafia4.Element, import_kolmafia4.toElement), $elements = createPluralConstant(import_kolmafia4.Element), $familiar = createSingleConstant(import_kolmafia4.Familiar, import_kolmafia4.toFamiliar), $familiars = createPluralConstant(import_kolmafia4.Familiar), $item = createSingleConstant(import_kolmafia4.Item, import_kolmafia4.toItem), $items = createPluralConstant(import_kolmafia4.Item), $location = createSingleConstant(import_kolmafia4.Location, import_kolmafia4.toLocation), $locations = createPluralConstant(import_kolmafia4.Location), $modifier = createSingleConstant(import_kolmafia4.Modifier, import_kolmafia4.toModifier), $modifiers = createPluralConstant(import_kolmafia4.Modifier), $monster = createSingleConstant(import_kolmafia4.Monster, import_kolmafia4.toMonster), $monsters = createPluralConstant(import_kolmafia4.Monster), $path = createSingleConstant(import_kolmafia4.Path, import_kolmafia4.toPath), $paths = createPluralConstant(import_kolmafia4.Path), $phylum = createSingleConstant(import_kolmafia4.Phylum, import_kolmafia4.toPhylum), $phyla = createPluralConstant(import_kolmafia4.Phylum), $servant = createSingleConstant(import_kolmafia4.Servant, import_kolmafia4.toServant), $servants = createPluralConstant(import_kolmafia4.Servant), $skill = createSingleConstant(import_kolmafia4.Skill, import_kolmafia4.toSkill), $skills = createPluralConstant(import_kolmafia4.Skill), $slot = createSingleConstant(import_kolmafia4.Slot, import_kolmafia4.toSlot), $slots = createPluralConstant(import_kolmafia4.Slot), $stat = createSingleConstant(import_kolmafia4.Stat, import_kolmafia4.toStat), $stats = createPluralConstant(import_kolmafia4.Stat), $thrall = createSingleConstant(import_kolmafia4.Thrall, import_kolmafia4.toThrall), $thralls = createPluralConstant(import_kolmafia4.Thrall);

// node_modules/libram/dist/lib.js
var _templateObject;
var _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37;
var _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55;
function _defineProperties3(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey3(descriptor.key), descriptor);
  }
}
function _createClass3(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties3(Constructor.prototype, protoProps), staticProps && _defineProperties3(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey3(arg) {
  var key = _toPrimitive3(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive3(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _classCallCheck3(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _inherits(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf(subClass, superClass);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self2, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(self2);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self2;
}
function _wrapNativeSuper(Class5) {
  var _cache = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = function(Class6) {
    if (Class6 === null || !_isNativeFunction(Class6))
      return Class6;
    if (typeof Class6 != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof _cache != "undefined") {
      if (_cache.has(Class6))
        return _cache.get(Class6);
      _cache.set(Class6, Wrapper);
    }
    function Wrapper() {
      return _construct(Class6, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(Class6.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, Class6);
  }, _wrapNativeSuper(Class5);
}
function _construct(Parent, args, Class5) {
  return _isNativeReflectConstruct() ? _construct = Reflect.construct.bind() : _construct = function(Parent2, args2, Class6) {
    var a = [null];
    a.push.apply(a, args2);
    var Constructor = Function.bind.apply(Parent2, a), instance = new Constructor();
    return Class6 && _setPrototypeOf(instance, Class6.prototype), instance;
  }, _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf(o);
}
function _createForOfIteratorHelper2(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray3(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _slicedToArray3(arr, i) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i) || _unsupportedIterableToArray3(arr, i) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray3(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray3(o, minLen);
  }
}
function _arrayLikeToArray3(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit3(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function isSong(skillOrEffect) {
  if (skillOrEffect instanceof import_kolmafia5.Effect && skillOrEffect.attributes.includes("song"))
    return !0;
  var skill = skillOrEffect instanceof import_kolmafia5.Effect ? (0, import_kolmafia5.toSkill)(skillOrEffect) : skillOrEffect;
  return skill.class === $class(_templateObject || (_templateObject = _taggedTemplateLiteral(["Accordion Thief"]))) && skill.buff;
}
function getActiveEffects() {
  return Object.keys((0, import_kolmafia5.myEffects)()).map(function(e) {
    return import_kolmafia5.Effect.get(e);
  });
}
function getActiveSongs() {
  return getActiveEffects().filter(isSong);
}
function have(thing) {
  var quantity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  if (thing instanceof import_kolmafia5.Effect)
    return (0, import_kolmafia5.haveEffect)(thing) >= quantity;
  if (thing instanceof import_kolmafia5.Familiar)
    return (0, import_kolmafia5.haveFamiliar)(thing);
  if (thing instanceof import_kolmafia5.Item)
    return (0, import_kolmafia5.availableAmount)(thing) >= quantity;
  if (thing instanceof import_kolmafia5.Servant)
    return (0, import_kolmafia5.haveServant)(thing);
  if (thing instanceof import_kolmafia5.Skill)
    return (0, import_kolmafia5.haveSkill)(thing);
  if (thing instanceof import_kolmafia5.Thrall) {
    var thrall = (0, import_kolmafia5.myThrall)();
    return thrall.id === thing.id && thrall.level >= quantity;
  }
  return !1;
}
function haveInCampground(item6) {
  return Object.keys((0, import_kolmafia5.getCampground)()).map(function(i) {
    return import_kolmafia5.Item.get(i);
  }).includes(item6);
}
var Wanderer;
(function(Wanderer2) {
  Wanderer2.Digitize = "Digitize Monster", Wanderer2.Enamorang = "Enamorang Monster", Wanderer2.Familiar = "Familiar", Wanderer2.Holiday = "Holiday Monster", Wanderer2.Kramco = "Kramco", Wanderer2.Nemesis = "Nemesis Assassin", Wanderer2.Portscan = "portscan.edu", Wanderer2.Romantic = "Romantic Monster", Wanderer2.Vote = "Vote Monster";
})(Wanderer || (Wanderer = {}));
var deterministicWanderers = [Wanderer.Digitize, Wanderer.Portscan];
function haveCounter(counterName) {
  var minTurns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, maxTurns = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 500;
  return (0, import_kolmafia5.getCounters)(counterName, minTurns, maxTurns) === counterName;
}
function haveWandererCounter(wanderer) {
  if (deterministicWanderers.includes(wanderer))
    return haveCounter(wanderer);
  var begin = wanderer + " window begin", end = wanderer + " window end";
  return haveCounter(begin) || haveCounter(end);
}
function getKramcoWandererChance() {
  var fights = get("_sausageFights"), lastFight = get("_lastSausageMonsterTurn"), totalTurns = (0, import_kolmafia5.totalTurnsPlayed)();
  if (fights < 1)
    return lastFight === totalTurns && (0, import_kolmafia5.myTurncount)() < 1 ? 0.5 : 1;
  var turnsSinceLastFight = totalTurns - lastFight;
  return Math.min(1, (turnsSinceLastFight + 1) / (5 + fights * 3 + Math.max(0, fights - 5) ** 3));
}
var foldGroupCache = /* @__PURE__ */ new Map();
function getFoldGroup(item6) {
  var cache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  if (cache) {
    var cached = foldGroupCache.get(item6);
    if (cached !== void 0)
      return cached;
  }
  var result = Object.entries((0, import_kolmafia5.getRelated)(item6, "fold")).sort(function(_ref, _ref2) {
    var _ref3 = _slicedToArray3(_ref, 2), a = _ref3[1], _ref4 = _slicedToArray3(_ref2, 2), b = _ref4[1];
    return a - b;
  }).map(function(_ref5) {
    var _ref6 = _slicedToArray3(_ref5, 1), i = _ref6[0];
    return import_kolmafia5.Item.get(i);
  }), _iterator = _createForOfIteratorHelper2(result), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
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
function getRange(range) {
  var _range$match$slice$ma, _range$match, _ref9 = (_range$match$slice$ma = (_range$match = range.match(/^(-?\d+)(?:-(-?\d+))?$/)) === null || _range$match === void 0 ? void 0 : _range$match.slice(1, 3).map(function(v) {
    return parseInt(v);
  })) !== null && _range$match$slice$ma !== void 0 ? _range$match$slice$ma : [0], _ref10 = _slicedToArray3(_ref9, 2), lower = _ref10[0], upper = _ref10[1];
  return [lower, Number.isNaN(upper) || upper === void 0 ? lower : upper];
}
function getAverage(range) {
  var _getRange = getRange(range), _getRange2 = _slicedToArray3(_getRange, 2), min = _getRange2[0], max = _getRange2[1];
  return (min + max) / 2;
}
function getAverageAdventures(item6) {
  return getAverage(item6.adventures);
}
function uneffect(effect) {
  return (0, import_kolmafia5.cliExecute)("uneffect ".concat(effect.name));
}
function questStep(questName) {
  var stringStep = get(questName);
  if (stringStep === "unstarted")
    return -1;
  if (stringStep === "started")
    return 0;
  if (stringStep === "finished" || stringStep === "")
    return 999;
  if (stringStep.substring(0, 4) !== "step")
    throw new Error("Quest state parsing error.");
  return parseInt(stringStep.substring(4), 10);
}
var EnsureError = /* @__PURE__ */ function(_Error) {
  _inherits(EnsureError2, _Error);
  var _super = _createSuper(EnsureError2);
  function EnsureError2(cause, reason) {
    var _this;
    return _classCallCheck3(this, EnsureError2), _this = _super.call(this, "Failed to ensure ".concat(cause.name, "!").concat(reason ? " ".concat(reason) : "")), _this.name = "Ensure Error", _this;
  }
  return _createClass3(EnsureError2);
}(/* @__PURE__ */ _wrapNativeSuper(Error));
function ensureEffect(ef) {
  var turns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  if ((0, import_kolmafia5.haveEffect)(ef) < turns) {
    if (ef.default === null)
      throw new EnsureError(ef, "No default action");
    if (!(0, import_kolmafia5.cliExecute)(ef.default) || (0, import_kolmafia5.haveEffect)(ef) === 0)
      throw new EnsureError(ef);
  }
}
var valueMap = /* @__PURE__ */ new Map(), MALL_VALUE_MODIFIER = 0.9;
function getSaleValue() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++)
    items[_key] = arguments[_key];
  return items.map(function(item6) {
    return valueMap.has(item6) || (item6.discardable ? valueMap.set(item6, (0, import_kolmafia5.mallPrice)(item6) > Math.max(2 * (0, import_kolmafia5.autosellPrice)(item6), 100) ? MALL_VALUE_MODIFIER * (0, import_kolmafia5.mallPrice)(item6) : (0, import_kolmafia5.autosellPrice)(item6)) : valueMap.set(item6, (0, import_kolmafia5.mallPrice)(item6) > 100 ? MALL_VALUE_MODIFIER * (0, import_kolmafia5.mallPrice)(item6) : 0)), valueMap.get(item6) || 0;
  }).reduce(function(s, price2) {
    return s + price2;
  }, 0) / items.length;
}
var holidayWanderers = /* @__PURE__ */ new Map([["El Dia De Los Muertos Borrachos", $monsters(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["Novia Cad\xE1ver, Novio Cad\xE1ver, Padre Cad\xE1ver, Persona Inocente Cad\xE1ver"])))], ["Feast of Boris", $monsters(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["Candied Yam Golem, Malevolent Tofurkey, Possessed Can of Cranberry Sauce, Stuffing Golem"])))], ["Talk Like a Pirate Day", $monsters(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["ambulatory pirate, migratory pirate, peripatetic pirate"])))]]);
function getTodaysHolidayWanderers() {
  return (0, import_kolmafia5.holiday)().split("/").flatMap(function(holiday2) {
    var _holidayWanderers$get;
    return (_holidayWanderers$get = holidayWanderers.get(holiday2)) !== null && _holidayWanderers$get !== void 0 ? _holidayWanderers$get : [];
  });
}
var telescopeStats = /* @__PURE__ */ new Map([["standing around flexing their muscles and using grip exercisers", $stat(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["Muscle"])))], ["sitting around playing chess and solving complicated-looking logic puzzles", $stat(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["Mysticality"])))], ["all wearing sunglasses and dancing", $stat(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["Moxie"])))]]), telescopeElements = /* @__PURE__ */ new Map([["people, all of whom appear to be on fire", $element(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["hot"])))], ["people, surrounded by a cloud of eldritch mist", $element(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["spooky"])))], ["greasy-looking people furtively skulking around", $element(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["sleaze"])))], ["people, surrounded by garbage and clouds of flies", $element(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["stench"])))], ["people, clustered around a group of igloos", $element(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap1 = /* @__PURE__ */ new Map([["smoldering bushes on the outskirts of a hedge maze", $element(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["hot"])))], ["creepy-looking black bushes on the outskirts of a hedge maze", $element(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["spooky"])))], ["purplish, greasy-looking hedges", $element(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["sleaze"])))], ["nasty-looking, dripping green bushes on the outskirts of a hedge maze", $element(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["stench"])))], ["frost-rimed bushes on the outskirts of a hedge maze", $element(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap2 = /* @__PURE__ */ new Map([["smoke rising from deeper within the maze", $element(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["hot"])))], ["a miasma of eldritch vapors rising from deeper within the maze", $element(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["spooky"])))], ["a greasy purple cloud hanging over the center of the maze", $element(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["sleaze"])))], ["a cloud of green gas hovering over the maze", $element(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["stench"])))], ["wintry mists rising from deeper within the maze", $element(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["cold"])))]]), hedgeTrap3 = /* @__PURE__ */ new Map([["with lava slowly oozing out of it", $element(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["hot"])))], ["surrounded by creepy black mist", $element(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["spooky"])))], ["that occasionally vomits out a greasy ball of hair", $element(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["sleaze"])))], ["disgorging a really surprising amount of sewage", $element(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["stench"])))], ["occasionally disgorging a bunch of ice cubes", $element(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["cold"])))]]);
function examine(thing) {
  var url = thing instanceof import_kolmafia5.Item ? "desc_item.php?whichitem=".concat(thing.descid) : thing instanceof import_kolmafia5.Familiar ? "desc_familiar.php?which=".concat(thing.id) : thing instanceof import_kolmafia5.Effect ? "desc_effect.php?whicheffect=".concat(thing.descid) : "desc_skill.php?whichskill=".concat(thing.id);
  return (0, import_kolmafia5.visitUrl)(url);
}
var byStat = makeByXFunction(function() {
  return (0, import_kolmafia5.myPrimestat)().toString();
}), byClass = makeByXFunction(function() {
  return (0, import_kolmafia5.myClass)().toString();
});
function directlyUse(item6) {
  return (0, import_kolmafia5.visitUrl)("inv_use.php?which=3&whichitem=".concat(item6.id, "&pwd"));
}
function makeScalerCalcFunction(cache, pattern) {
  return function(monster) {
    var _find, _pattern$exec$slice, _pattern$exec, current2 = cache.get(monster);
    if (current2 !== void 0)
      return (0, import_kolmafia5.monsterEval)(current2);
    var result = (_find = ((_pattern$exec$slice = (_pattern$exec = pattern.exec(monster.attributes)) === null || _pattern$exec === void 0 ? void 0 : _pattern$exec.slice(1)) !== null && _pattern$exec$slice !== void 0 ? _pattern$exec$slice : []).find(function(m) {
      return m !== void 0;
    })) !== null && _find !== void 0 ? _find : "0";
    return cache.set(monster, result), (0, import_kolmafia5.monsterEval)(result);
  };
}
var scalerRates = /* @__PURE__ */ new Map(), scalerCaps = /* @__PURE__ */ new Map(), SCALE_RATE_PATTERN = /Scale: (?:\[([^\]]*)\]|(\d*))/, SCALE_CAP_PATTERN = /Cap: (?:\[([^\]]*)\]|(\d*))/, getScalingRate = makeScalerCalcFunction(scalerRates, SCALE_RATE_PATTERN), getScalingCap = makeScalerCalcFunction(scalerCaps, SCALE_CAP_PATTERN);
var makeBulkFunction = function(action) {
  return function(items) {
    (0, import_kolmafia5.batchOpen)();
    var _iterator2 = _createForOfIteratorHelper2(items.entries()), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        var _step2$value = _slicedToArray3(_step2.value, 2), item6 = _step2$value[0], quantity = _step2$value[1];
        action(quantity, item6);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return (0, import_kolmafia5.batchClose)();
  };
}, bulkAutosell = makeBulkFunction(import_kolmafia5.autosell), bulkPutCloset = makeBulkFunction(import_kolmafia5.putCloset), bulkPutDisplay = makeBulkFunction(import_kolmafia5.putDisplay), bulkPutStash = makeBulkFunction(import_kolmafia5.putStash), bulkTakeCloset = makeBulkFunction(import_kolmafia5.takeCloset), bulkTakeDisplay = makeBulkFunction(import_kolmafia5.takeDisplay), bulkTakeShop = makeBulkFunction(import_kolmafia5.takeShop), bulkTakeStash = makeBulkFunction(import_kolmafia5.takeStash), bulkTakeStorage = makeBulkFunction(import_kolmafia5.takeStorage);
function totalFamiliarWeight() {
  var familiar2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, import_kolmafia5.myFamiliar)(), considerAdjustment = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return clamp(clamp((0, import_kolmafia5.familiarWeight)(familiar2), have($effect(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["Fidoxene"])))) ? 20 : 0, 1 / 0) + familiar2.soupWeight + (considerAdjustment ? (0, import_kolmafia5.weightAdjustment)() : 0) + (familiar2.feasted ? 10 : 0), 1, 1 / 0);
}
var regularFamiliarTags = Object.freeze(["animal", "insect", "haseyes", "haswings", "fast", "bite", "flies", "hashands", "wearsclothes", "organic", "vegetable", "hovers", "edible", "food", "sentient", "cute", "mineral", "polygonal", "object", "undead", "cantalk", "evil", "orb", "spooky", "sleaze", "aquatic", "swims", "isclothes", "phallic", "stench", "hot", "hasbeak", "haslegs", "robot", "technological", "hard", "cold", "hasbones", "hasclaws", "reallyevil", "good", "person", "humanoid", "animatedart", "software", "hasshell", "hasstinger"]), regularFamiliarTagSet = new Set(regularFamiliarTags), pokefamUltTags = Object.freeze(["ult_bearhug", "ult_sticktreats", "ult_owlstare", "ult_bloodbath", "ult_pepperscorn", "ult_rainbowstorm"]), SPECIAL_ULTS = /* @__PURE__ */ new Map([[$familiar(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["Nursine"]))), ["ult_bearhug"]], [$familiar(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["Caramel"]))), ["ult_sticktreats"]], [$familiar(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["Smashmoth"]))), ["ult_owlstare"]], [$familiar(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["Slotter"]))), ["ult_bloodbath"]], [$familiar(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["Cornbeefadon"]))), ["ult_pepperscorn"]], [$familiar(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["Mu"]))), ["ult_rainbowstorm"]]]);

// node_modules/libram/dist/overlappingNames.js
init_kolmafia_polyfill();
var overlappingItemNames = ["spider web", "really sticky spider web", "dictionary", "NG", "Cloaca-Cola", "yo-yo", "top", "ball", "kite", "yo", "red potion", "blue potion", "bowling ball", "adder", "red button", "tennis ball", "pile of sand", "mushroom", "deluxe mushroom", "spoon"], overlappingSkillNames = ["Lightning Bolt", "Shoot", "Thrust-Smack", "Headbutt", "Toss", "Knife in the Dark", "Sing", "Disarm", "LIGHT", "BURN", "Extract", "Meteor Shower", "Snipe", "Bite", "Kick", "Howl", "Cleave", "Boil", "Slice", "Rainbow", "Lightning Bolt"];

// node_modules/libram/dist/combat.js
function _get() {
  return typeof Reflect != "undefined" && Reflect.get ? _get = Reflect.get.bind() : _get = function(target, property, receiver) {
    var base = _superPropBase(target, property);
    if (!!base) {
      var desc = Object.getOwnPropertyDescriptor(base, property);
      return desc.get ? desc.get.call(arguments.length < 3 ? target : receiver) : desc.value;
    }
  }, _get.apply(this, arguments);
}
function _superPropBase(object, property) {
  for (; !Object.prototype.hasOwnProperty.call(object, property) && (object = _getPrototypeOf2(object), object !== null); )
    ;
  return object;
}
function _createForOfIteratorHelper3(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray4(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _toConsumableArray3(arr) {
  return _arrayWithoutHoles3(arr) || _iterableToArray3(arr) || _unsupportedIterableToArray4(arr) || _nonIterableSpread3();
}
function _nonIterableSpread3() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray4(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray4(o, minLen);
  }
}
function _iterableToArray3(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles3(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray4(arr);
}
function _arrayLikeToArray4(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _defineProperty3(obj, key, value) {
  return key = _toPropertyKey4(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _defineProperties4(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey4(descriptor.key), descriptor);
  }
}
function _createClass4(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties4(Constructor.prototype, protoProps), staticProps && _defineProperties4(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey4(arg) {
  var key = _toPrimitive4(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive4(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _classCallCheck4(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _inherits2(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf2(subClass, superClass);
}
function _createSuper2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct2();
  return function() {
    var Super = _getPrototypeOf2(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf2(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn2(this, result);
  };
}
function _possibleConstructorReturn2(self2, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized2(self2);
}
function _assertThisInitialized2(self2) {
  if (self2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self2;
}
function _wrapNativeSuper2(Class5) {
  var _cache = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper2 = function(Class6) {
    if (Class6 === null || !_isNativeFunction2(Class6))
      return Class6;
    if (typeof Class6 != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof _cache != "undefined") {
      if (_cache.has(Class6))
        return _cache.get(Class6);
      _cache.set(Class6, Wrapper);
    }
    function Wrapper() {
      return _construct2(Class6, arguments, _getPrototypeOf2(this).constructor);
    }
    return Wrapper.prototype = Object.create(Class6.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf2(Wrapper, Class6);
  }, _wrapNativeSuper2(Class5);
}
function _construct2(Parent, args, Class5) {
  return _isNativeReflectConstruct2() ? _construct2 = Reflect.construct.bind() : _construct2 = function(Parent2, args2, Class6) {
    var a = [null];
    a.push.apply(a, args2);
    var Constructor = Function.bind.apply(Parent2, a), instance = new Constructor();
    return Class6 && _setPrototypeOf2(instance, Class6.prototype), instance;
  }, _construct2.apply(null, arguments);
}
function _isNativeReflectConstruct2() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _isNativeFunction2(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf2(o, p) {
  return _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf2(o, p);
}
function _getPrototypeOf2(o) {
  return _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf2(o);
}
var MACRO_NAME = "Script Autoattack Macro";
function getMacroId() {
  var name = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : MACRO_NAME, query = '//select[@name="macroid"]/option[text()="'.concat(name, '"]/@value'), macroText = (0, import_kolmafia6.visitUrl)("account_combatmacros.php"), macroMatches = (0, import_kolmafia6.xpath)(macroText, query);
  if (macroMatches.length === 0) {
    (0, import_kolmafia6.visitUrl)("account_combatmacros.php?action=new");
    var newMacroText = (0, import_kolmafia6.visitUrl)("account_combatmacros.php?macroid=0&name=".concat(name, "&macrotext=abort&action=save"));
    macroMatches = (0, import_kolmafia6.xpath)(newMacroText, query);
  }
  if (macroMatches.length === 0)
    throw (0, import_kolmafia6.xpath)(macroText, '//select[@name="macroid"]/option').length >= 100 ? new InvalidMacroError("Please delete at least one existing macro to make some space for Libram") : new InvalidMacroError("Could not find or create macro ".concat(name));
  return parseInt(macroMatches[0], 10);
}
function itemOrNameToItem(itemOrName) {
  return typeof itemOrName == "string" ? import_kolmafia6.Item.get(itemOrName) : itemOrName;
}
function itemOrItemsBallsMacroName(itemOrItems) {
  if (Array.isArray(itemOrItems))
    return itemOrItems.map(itemOrItemsBallsMacroName).join(", ");
  var item6 = itemOrNameToItem(itemOrItems);
  return overlappingItemNames.includes(item6.name) ? item6.id.toFixed(0) : item6.name;
}
function itemOrItemsBallsMacroPredicate(itemOrItems) {
  return Array.isArray(itemOrItems) ? itemOrItems[0] === itemOrItems[1] ? "hastwocombatitems ".concat(itemOrItemsBallsMacroName(itemOrItems[0])) : itemOrItems.map(itemOrItemsBallsMacroPredicate).join(" && ") : "hascombatitem ".concat(itemOrItemsBallsMacroName(itemOrItems));
}
function skillOrNameToSkill(skillOrName) {
  return typeof skillOrName == "string" ? import_kolmafia6.Skill.get(skillOrName) : skillOrName;
}
function skillBallsMacroName(skillOrName) {
  var skill = skillOrNameToSkill(skillOrName);
  return skill.name.match(/^[A-Za-z ]+$/) && !overlappingSkillNames.includes(skill.name) ? skill.name : skill.id;
}
function funkslingReduce() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++)
    items[_key] = arguments[_key];
  return items.reduce(function(acc, item6, i, arr) {
    return i % 2 === 0 ? acc.concat(i + 1 < arr.length ? [[item6, arr[i + 1]]] : [item6]) : acc;
  }, []);
}
var InvalidMacroError = /* @__PURE__ */ function(_Error) {
  _inherits2(InvalidMacroError2, _Error);
  var _super = _createSuper2(InvalidMacroError2);
  function InvalidMacroError2() {
    return _classCallCheck4(this, InvalidMacroError2), _super.apply(this, arguments);
  }
  return _createClass4(InvalidMacroError2);
}(/* @__PURE__ */ _wrapNativeSuper2(Error)), Macro = /* @__PURE__ */ function() {
  function Macro3() {
    _classCallCheck4(this, Macro3), _defineProperty3(this, "components", []), _defineProperty3(this, "name", MACRO_NAME);
  }
  return _createClass4(Macro3, [{
    key: "toString",
    value: function() {
      return (this.components.join(";") + ";").replace(/;;+/g, ";");
    }
  }, {
    key: "rename",
    value: function(name) {
      return this.name = name, this;
    }
  }, {
    key: "save",
    value: function() {
      _set(Macro3.SAVED_MACRO_PROPERTY, this.toString());
    }
  }, {
    key: "step",
    value: function() {
      for (var _ref, _this$components, _len2 = arguments.length, nextSteps = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
        nextSteps[_key2] = arguments[_key2];
      var nextStepsStrings = (_ref = []).concat.apply(_ref, _toConsumableArray3(nextSteps.map(function(x) {
        return x instanceof Macro3 ? x.components : [x];
      })));
      return (_this$components = this.components).push.apply(_this$components, _toConsumableArray3(nextStepsStrings.filter(Boolean))), this;
    }
  }, {
    key: "submit",
    value: function() {
      var final = this.toString();
      return (0, import_kolmafia6.visitUrl)("fight.php?action=macro&macrotext=".concat((0, import_kolmafia6.urlEncode)(final)), !0, !0);
    }
  }, {
    key: "setAutoAttack",
    value: function() {
      var id = Macro3.cachedMacroIds.get(this.name);
      id === void 0 && (id = getMacroId(this.name), Macro3.cachedMacroIds.set(this.name, id)), !((0, import_kolmafia6.getAutoAttack)() === 99e6 + id && this.toString() === Macro3.cachedAutoAttacks.get(this.name)) && ((0, import_kolmafia6.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&name=").concat((0, import_kolmafia6.urlEncode)(this.name), "&macrotext=").concat((0, import_kolmafia6.urlEncode)(this.toString()), "&action=save"), !0, !0), (0, import_kolmafia6.visitUrl)("account.php?am=1&action=autoattack&value=".concat(99e6 + id, "&ajax=1")), Macro3.cachedAutoAttacks.set(this.name, this.toString()));
    }
  }, {
    key: "setAutoAttackAs",
    value: function(name) {
      this.name = name, this.setAutoAttack();
    }
  }, {
    key: "abort",
    value: function() {
      return this.step("abort");
    }
  }, {
    key: "abortWithWarning",
    value: function(warning) {
      return this.step('abort "'.concat(warning, '"'));
    }
  }, {
    key: "runaway",
    value: function() {
      return this.step("runaway");
    }
  }, {
    key: "if_",
    value: function(condition, ifTrue) {
      return this.step("if ".concat(Macro3.makeBALLSPredicate(condition))).step(ifTrue).step("endif");
    }
  }, {
    key: "ifNot",
    value: function(condition, ifTrue) {
      return this.if_("!".concat(Macro3.makeBALLSPredicate(condition)), ifTrue);
    }
  }, {
    key: "while_",
    value: function(condition, contents) {
      return this.step("while ".concat(Macro3.makeBALLSPredicate(condition))).step(contents).step("endwhile");
    }
  }, {
    key: "externalIf",
    value: function(condition, ifTrue, ifFalse) {
      return condition ? this.step(ifTrue) : ifFalse ? this.step(ifFalse) : this;
    }
  }, {
    key: "repeat",
    value: function(condition) {
      return condition === void 0 ? this.step("repeat") : this.step("repeat ".concat(Macro3.makeBALLSPredicate(condition)));
    }
  }, {
    key: "skill",
    value: function() {
      for (var _len3 = arguments.length, skills2 = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)
        skills2[_key3] = arguments[_key3];
      return this.step.apply(this, _toConsumableArray3(skills2.map(function(skill2) {
        return "skill ".concat(skillBallsMacroName(skill2));
      })));
    }
  }, {
    key: "trySkill",
    value: function() {
      for (var _len4 = arguments.length, skills2 = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++)
        skills2[_key4] = arguments[_key4];
      return this.step.apply(this, _toConsumableArray3(skills2.map(function(skillOrName) {
        return skillOrNameToSkill(skillOrName);
      }).map(function(skill) {
        return Macro3.if_(Macro3.makeBALLSPredicate(skill), Macro3.skill(skill));
      })));
    }
  }, {
    key: "trySkillRepeat",
    value: function() {
      for (var _len5 = arguments.length, skills2 = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++)
        skills2[_key5] = arguments[_key5];
      return this.step.apply(this, _toConsumableArray3(skills2.map(function(skillOrName) {
        return skillOrNameToSkill(skillOrName);
      }).map(function(skill) {
        return Macro3.if_(Macro3.makeBALLSPredicate(skill), Macro3.skill(skill).repeat(skill));
      })));
    }
  }, {
    key: "item",
    value: function() {
      for (var _len6 = arguments.length, items = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++)
        items[_key6] = arguments[_key6];
      return this.step.apply(this, _toConsumableArray3(items.map(function(itemOrItems) {
        return "use ".concat(itemOrItemsBallsMacroName(itemOrItems));
      })));
    }
  }, {
    key: "tryItem",
    value: function() {
      for (var _len7 = arguments.length, items = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++)
        items[_key7] = arguments[_key7];
      return this.step.apply(this, _toConsumableArray3(items.map(function(item6) {
        return Macro3.if_(itemOrItemsBallsMacroPredicate(item6), Macro3.item(item6));
      })));
    }
  }, {
    key: "funkslingItem",
    value: function() {
      return this.item.apply(this, _toConsumableArray3(funkslingReduce.apply(void 0, arguments)));
    }
  }, {
    key: "tryFunkslingItem",
    value: function() {
      return this.tryItem.apply(this, _toConsumableArray3(funkslingReduce.apply(void 0, arguments)));
    }
  }, {
    key: "attack",
    value: function() {
      return this.step("attack");
    }
  }, {
    key: "ifHolidayWanderer",
    value: function(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      return todaysWanderers.length === 0 ? this : this.if_(todaysWanderers.map(function(monster) {
        return "monsterid ".concat(monster.id);
      }).join(" || "), macro);
    }
  }, {
    key: "ifNotHolidayWanderer",
    value: function(macro) {
      var todaysWanderers = getTodaysHolidayWanderers();
      return todaysWanderers.length === 0 ? this.step(macro) : this.if_(todaysWanderers.map(function(monster) {
        return "!monsterid ".concat(monster.id);
      }).join(" && "), macro);
    }
  }], [{
    key: "rename",
    value: function(name) {
      return new this().rename(name);
    }
  }, {
    key: "load",
    value: function() {
      var _this;
      return (_this = new this()).step.apply(_this, _toConsumableArray3(get(Macro3.SAVED_MACRO_PROPERTY).split(";")));
    }
  }, {
    key: "clearSaved",
    value: function() {
      (0, import_kolmafia6.removeProperty)(Macro3.SAVED_MACRO_PROPERTY);
    }
  }, {
    key: "step",
    value: function() {
      var _this2;
      return (_this2 = new this()).step.apply(_this2, arguments);
    }
  }, {
    key: "clearAutoAttackMacros",
    value: function() {
      var _iterator = _createForOfIteratorHelper3(Macro3.cachedAutoAttacks.keys()), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _Macro$cachedMacroIds, name = _step.value, id = (_Macro$cachedMacroIds = Macro3.cachedMacroIds.get(name)) !== null && _Macro$cachedMacroIds !== void 0 ? _Macro$cachedMacroIds : getMacroId(name);
          (0, import_kolmafia6.visitUrl)("account_combatmacros.php?macroid=".concat(id, "&action=edit&what=Delete&confirm=1")), Macro3.cachedAutoAttacks.delete(name), Macro3.cachedMacroIds.delete(name);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "abort",
    value: function() {
      return new this().abort();
    }
  }, {
    key: "abortWithWarning",
    value: function(warning) {
      return new this().abortWithWarning(warning);
    }
  }, {
    key: "runaway",
    value: function() {
      return new this().runaway();
    }
  }, {
    key: "makeBALLSPredicate",
    value: function(condition) {
      if (condition instanceof import_kolmafia6.Monster)
        return "monsterid ".concat(condition.id);
      if (condition instanceof Array)
        return condition[0] instanceof import_kolmafia6.Item ? itemOrItemsBallsMacroPredicate(condition) : "(".concat(condition.map(function(entry) {
          return Macro3.makeBALLSPredicate(entry);
        }).join(" || "), ")");
      if (condition instanceof import_kolmafia6.Effect)
        return "haseffect ".concat(condition.id);
      if (condition instanceof import_kolmafia6.Skill)
        return condition.combat ? "hasskill ".concat(skillBallsMacroName(condition)) : "knowsskill ".concat(condition.id);
      if (condition instanceof import_kolmafia6.Item) {
        if (!condition.combat)
          throw new InvalidMacroError("Item ".concat(condition, " cannot be made a valid BALLS predicate (it is not combat-usable)"));
        return "hascombatitem ".concat(itemOrItemsBallsMacroName(condition));
      } else if (condition instanceof import_kolmafia6.Location) {
        var snarfblat = condition.id;
        if (snarfblat < 1)
          throw new InvalidMacroError("Location ".concat(condition, " cannot be made a valid BALLS predicate (it has no location id)"));
        return "snarfblat ".concat(snarfblat);
      } else if (condition instanceof import_kolmafia6.Class) {
        if (condition.id > 6)
          throw new InvalidMacroError("Class ".concat(condition, " cannot be made a valid BALLS predicate (it is not a standard class)"));
        return condition.toString().replaceAll(" ", "").toLowerCase();
      } else {
        if (condition instanceof import_kolmafia6.Stat)
          return "".concat(condition.toString().toLowerCase(), "class");
        if (condition instanceof import_kolmafia6.Phylum)
          return "monsterphylum ".concat(condition);
        if (condition instanceof import_kolmafia6.Element)
          return "monsterelement ".concat(condition);
      }
      return condition;
    }
  }, {
    key: "if_",
    value: function(condition, ifTrue) {
      return new this().if_(condition, ifTrue);
    }
  }, {
    key: "ifNot",
    value: function(condition, ifTrue) {
      return new this().ifNot(condition, ifTrue);
    }
  }, {
    key: "while_",
    value: function(condition, contents) {
      return new this().while_(condition, contents);
    }
  }, {
    key: "externalIf",
    value: function(condition, ifTrue, ifFalse) {
      return new this().externalIf(condition, ifTrue, ifFalse);
    }
  }, {
    key: "skill",
    value: function() {
      var _this3;
      return (_this3 = new this()).skill.apply(_this3, arguments);
    }
  }, {
    key: "trySkill",
    value: function() {
      var _this4;
      return (_this4 = new this()).trySkill.apply(_this4, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function() {
      var _this5;
      return (_this5 = new this()).trySkillRepeat.apply(_this5, arguments);
    }
  }, {
    key: "item",
    value: function() {
      var _this6;
      return (_this6 = new this()).item.apply(_this6, arguments);
    }
  }, {
    key: "tryItem",
    value: function() {
      var _this7;
      return (_this7 = new this()).tryItem.apply(_this7, arguments);
    }
  }, {
    key: "funkslingItem",
    value: function() {
      var _this8;
      return (_this8 = new this()).funkslingItem.apply(_this8, arguments);
    }
  }, {
    key: "tryFunkslingItem",
    value: function() {
      var _this9;
      return (_this9 = new this()).tryFunkslingItem.apply(_this9, arguments);
    }
  }, {
    key: "attack",
    value: function() {
      return new this().attack();
    }
  }, {
    key: "ifHolidayWanderer",
    value: function(macro) {
      return new this().ifHolidayWanderer(macro);
    }
  }, {
    key: "ifNotHolidayWanderer",
    value: function(macro) {
      return new this().ifNotHolidayWanderer(macro);
    }
  }]), Macro3;
}();
_defineProperty3(Macro, "SAVED_MACRO_PROPERTY", "libram_savedMacro");
_defineProperty3(Macro, "cachedMacroIds", /* @__PURE__ */ new Map());
_defineProperty3(Macro, "cachedAutoAttacks", /* @__PURE__ */ new Map());
var StrictMacro = /* @__PURE__ */ function(_Macro) {
  _inherits2(StrictMacro2, _Macro);
  var _super2 = _createSuper2(StrictMacro2);
  function StrictMacro2() {
    return _classCallCheck4(this, StrictMacro2), _super2.apply(this, arguments);
  }
  return _createClass4(StrictMacro2, [{
    key: "skill",
    value: function() {
      for (var _get22, _len8 = arguments.length, skills2 = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++)
        skills2[_key8] = arguments[_key8];
      return (_get22 = _get(_getPrototypeOf2(StrictMacro2.prototype), "skill", this)).call.apply(_get22, [this].concat(skills2));
    }
  }, {
    key: "item",
    value: function() {
      for (var _get3, _len9 = arguments.length, items = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++)
        items[_key9] = arguments[_key9];
      return (_get3 = _get(_getPrototypeOf2(StrictMacro2.prototype), "item", this)).call.apply(_get3, [this].concat(items));
    }
  }, {
    key: "trySkill",
    value: function() {
      for (var _get4, _len10 = arguments.length, skills2 = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++)
        skills2[_key10] = arguments[_key10];
      return (_get4 = _get(_getPrototypeOf2(StrictMacro2.prototype), "trySkill", this)).call.apply(_get4, [this].concat(skills2));
    }
  }, {
    key: "tryItem",
    value: function() {
      for (var _get5, _len11 = arguments.length, items = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++)
        items[_key11] = arguments[_key11];
      return (_get5 = _get(_getPrototypeOf2(StrictMacro2.prototype), "tryItem", this)).call.apply(_get5, [this].concat(items));
    }
  }, {
    key: "funkslingItem",
    value: function() {
      for (var _get6, _len12 = arguments.length, items = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++)
        items[_key12] = arguments[_key12];
      return (_get6 = _get(_getPrototypeOf2(StrictMacro2.prototype), "funkslingItem", this)).call.apply(_get6, [this].concat(items));
    }
  }, {
    key: "tryFunkslingItem",
    value: function() {
      for (var _get7, _len13 = arguments.length, items = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++)
        items[_key13] = arguments[_key13];
      return (_get7 = _get(_getPrototypeOf2(StrictMacro2.prototype), "tryFunkslingItem", this)).call.apply(_get7, [this].concat(items));
    }
  }, {
    key: "trySkillRepeat",
    value: function() {
      for (var _get8, _len14 = arguments.length, skills2 = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++)
        skills2[_key14] = arguments[_key14];
      return (_get8 = _get(_getPrototypeOf2(StrictMacro2.prototype), "trySkillRepeat", this)).call.apply(_get8, [this].concat(skills2));
    }
  }], [{
    key: "skill",
    value: function() {
      var _this10;
      return (_this10 = new this()).skill.apply(_this10, arguments);
    }
  }, {
    key: "item",
    value: function() {
      var _this11;
      return (_this11 = new this()).item.apply(_this11, arguments);
    }
  }, {
    key: "trySkill",
    value: function() {
      var _this12;
      return (_this12 = new this()).trySkill.apply(_this12, arguments);
    }
  }, {
    key: "tryItem",
    value: function() {
      var _this13;
      return (_this13 = new this()).tryItem.apply(_this13, arguments);
    }
  }, {
    key: "funkslingItem",
    value: function() {
      var _this14;
      return (_this14 = new this()).funkslingItem.apply(_this14, arguments);
    }
  }, {
    key: "tryFunkslingItem",
    value: function() {
      var _this15;
      return (_this15 = new this()).tryFunkslingItem.apply(_this15, arguments);
    }
  }, {
    key: "trySkillRepeat",
    value: function() {
      var _this16;
      return (_this16 = new this()).trySkillRepeat.apply(_this16, arguments);
    }
  }]), StrictMacro2;
}(Macro);

// node_modules/libram/dist/maximize.js
init_kolmafia_polyfill();
var import_kolmafia7 = require("kolmafia");
var _templateObject2, _templateObject210, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject122, _templateObject132, _templateObject142, _templateObject152, _templateObject162, _templateObject172, _templateObject182, _templateObject192, _templateObject202, _templateObject212, _templateObject222, _templateObject232, _templateObject242, _templateObject252, _templateObject262, _templateObject272, _templateObject282, _templateObject292, _templateObject302, _templateObject312, _templateObject322, _templateObject332, _templateObject342, _templateObject352, _templateObject362, _templateObject372, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject492, _templateObject502;
function _slicedToArray4(arr, i) {
  return _arrayWithHoles4(arr) || _iterableToArrayLimit4(arr, i) || _unsupportedIterableToArray5(arr, i) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit4(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles4(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap), privateMap.set(obj, value);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj))
    throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
  return _classApplyDescriptorGet(receiver, descriptor);
}
function _classApplyDescriptorGet(receiver, descriptor) {
  return descriptor.get ? descriptor.get.call(receiver) : descriptor.value;
}
function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
  return _classApplyDescriptorSet(receiver, descriptor, value), value;
}
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver))
    throw new TypeError("attempted to " + action + " private field on non-instance");
  return privateMap.get(receiver);
}
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set)
    descriptor.set.call(receiver, value);
  else {
    if (!descriptor.writable)
      throw new TypeError("attempted to set read only private field");
    descriptor.value = value;
  }
}
function _defineProperties5(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey5(descriptor.key), descriptor);
  }
}
function _createClass5(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties5(Constructor.prototype, protoProps), staticProps && _defineProperties5(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _classCallCheck5(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _createForOfIteratorHelper4(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray5(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _taggedTemplateLiteral2(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys2(Object(source), !0).forEach(function(key) {
      _defineProperty4(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys2(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty4(obj, key, value) {
  return key = _toPropertyKey5(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey5(arg) {
  var key = _toPrimitive5(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive5(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toConsumableArray4(arr) {
  return _arrayWithoutHoles4(arr) || _iterableToArray4(arr) || _unsupportedIterableToArray5(arr) || _nonIterableSpread4();
}
function _nonIterableSpread4() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray5(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray5(o, minLen);
  }
}
function _iterableToArray4(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles4(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray5(arr);
}
function _arrayLikeToArray5(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function toMaximizerName(_ref) {
  var name = _ref.name, id = _ref.id;
  return name.includes(";") ? "\xB6".concat(id) : name;
}
function mergeMaximizeOptions(defaultOptions, addendums) {
  var _addendums$updateOnFa, _addendums$updateOnCa, _addendums$updateOnLo, _addendums$useOutfitC, _addendums$forceEquip, _addendums$preventEqu, _addendums$bonusEquip, _addendums$onlySlot, _addendums$preventSlo, _addendums$forceUpdat, _addendums$modes;
  return {
    updateOnFamiliarChange: (_addendums$updateOnFa = addendums.updateOnFamiliarChange) !== null && _addendums$updateOnFa !== void 0 ? _addendums$updateOnFa : defaultOptions.updateOnFamiliarChange,
    updateOnCanEquipChanged: (_addendums$updateOnCa = addendums.updateOnCanEquipChanged) !== null && _addendums$updateOnCa !== void 0 ? _addendums$updateOnCa : defaultOptions.updateOnCanEquipChanged,
    updateOnLocationChange: (_addendums$updateOnLo = addendums.updateOnLocationChange) !== null && _addendums$updateOnLo !== void 0 ? _addendums$updateOnLo : defaultOptions.updateOnLocationChange,
    useOutfitCaching: (_addendums$useOutfitC = addendums.useOutfitCaching) !== null && _addendums$useOutfitC !== void 0 ? _addendums$useOutfitC : defaultOptions.useOutfitCaching,
    forceEquip: [].concat(_toConsumableArray4(defaultOptions.forceEquip), _toConsumableArray4((_addendums$forceEquip = addendums.forceEquip) !== null && _addendums$forceEquip !== void 0 ? _addendums$forceEquip : [])),
    preventEquip: [].concat(_toConsumableArray4(defaultOptions.preventEquip), _toConsumableArray4((_addendums$preventEqu = addendums.preventEquip) !== null && _addendums$preventEqu !== void 0 ? _addendums$preventEqu : [])).filter(function(item6) {
      var _addendums$forceEquip2;
      return !defaultOptions.forceEquip.includes(item6) && !((_addendums$forceEquip2 = addendums.forceEquip) !== null && _addendums$forceEquip2 !== void 0 && _addendums$forceEquip2.includes(item6));
    }),
    bonusEquip: new Map([].concat(_toConsumableArray4(defaultOptions.bonusEquip), _toConsumableArray4((_addendums$bonusEquip = addendums.bonusEquip) !== null && _addendums$bonusEquip !== void 0 ? _addendums$bonusEquip : []))),
    onlySlot: (_addendums$onlySlot = addendums.onlySlot) !== null && _addendums$onlySlot !== void 0 ? _addendums$onlySlot : defaultOptions.onlySlot,
    preventSlot: [].concat(_toConsumableArray4(defaultOptions.preventSlot), _toConsumableArray4((_addendums$preventSlo = addendums.preventSlot) !== null && _addendums$preventSlo !== void 0 ? _addendums$preventSlo : [])),
    forceUpdate: (_addendums$forceUpdat = addendums.forceUpdate) !== null && _addendums$forceUpdat !== void 0 ? _addendums$forceUpdat : defaultOptions.forceUpdate,
    modes: _objectSpread2(_objectSpread2({}, defaultOptions.modes), (_addendums$modes = addendums.modes) !== null && _addendums$modes !== void 0 ? _addendums$modes : {})
  };
}
var defaultMaximizeOptions = {
  updateOnFamiliarChange: !0,
  updateOnCanEquipChanged: !0,
  updateOnLocationChange: !1,
  useOutfitCaching: !0,
  forceEquip: [],
  preventEquip: [],
  bonusEquip: /* @__PURE__ */ new Map(),
  onlySlot: [],
  preventSlot: [],
  forceUpdate: !1,
  modes: {}
};
var modeableCommands = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka", "jillcandle"], modeableItems = {
  backupcamera: $item(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral2(["backup camera"]))),
  umbrella: $item(_templateObject210 || (_templateObject210 = _taggedTemplateLiteral2(["unbreakable umbrella"]))),
  snowsuit: $item(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral2(["Snow Suit"]))),
  edpiece: $item(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral2(["The Crown of Ed the Undying"]))),
  retrocape: $item(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral2(["unwrapped knock-off retro superhero cape"]))),
  parka: $item(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral2(["Jurassic Parka"]))),
  jillcandle: $item(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral2(["LED candle"])))
}, modeableState = {
  backupcamera: function() {
    return (0, import_kolmafia7.getProperty)("backupCameraMode");
  },
  umbrella: function() {
    return (0, import_kolmafia7.getProperty)("umbrellaState");
  },
  snowsuit: function() {
    return (0, import_kolmafia7.getProperty)("snowsuit");
  },
  edpiece: function() {
    return (0, import_kolmafia7.getProperty)("edPiece");
  },
  retrocape: function() {
    return (0, import_kolmafia7.getProperty)("retroCapeSuperhero") + " " + (0, import_kolmafia7.getProperty)("retroCapeWashingInstructions");
  },
  parka: function() {
    return (0, import_kolmafia7.getProperty)("parkaMode");
  },
  jillcandle: function() {
    return (0, import_kolmafia7.getProperty)("ledCandleMode");
  }
};
function getCurrentModes() {
  var modes = {}, _iterator = _createForOfIteratorHelper4(modeableCommands), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var key = _step.value;
      (0, import_kolmafia7.haveEquipped)(modeableItems[key]) && (modes[key] = modeableState[key]());
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return modes;
}
function applyModes(modes) {
  var _iterator2 = _createForOfIteratorHelper4(modeableCommands), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var command = _step2.value;
      (0, import_kolmafia7.haveEquipped)(modeableItems[command]) && modes[command] !== void 0 && modeableState[command]() !== modes[command] && (0, import_kolmafia7.cliExecute)(command + " " + modes[command]);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}
var cachedSlots = $slots(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral2(["hat, weapon, off-hand, back, shirt, pants, acc1, acc2, acc3, familiar"]))), CacheEntry = /* @__PURE__ */ _createClass5(function CacheEntry2(equipment, rider, familiar2, canEquipItemCount2, modes) {
  _classCallCheck5(this, CacheEntry2), _defineProperty4(this, "equipment", void 0), _defineProperty4(this, "rider", void 0), _defineProperty4(this, "familiar", void 0), _defineProperty4(this, "canEquipItemCount", void 0), _defineProperty4(this, "modes", void 0), this.equipment = equipment, this.rider = rider, this.familiar = familiar2, this.canEquipItemCount = canEquipItemCount2, this.modes = modes;
}), _outfitSlots = /* @__PURE__ */ new WeakMap(), _useHistory = /* @__PURE__ */ new WeakMap(), _maxSize = /* @__PURE__ */ new WeakMap(), OutfitLRUCache = /* @__PURE__ */ function() {
  function OutfitLRUCache2(maxSize) {
    _classCallCheck5(this, OutfitLRUCache2), _classPrivateFieldInitSpec(this, _outfitSlots, {
      writable: !0,
      value: []
    }), _classPrivateFieldInitSpec(this, _useHistory, {
      writable: !0,
      value: []
    }), _classPrivateFieldInitSpec(this, _maxSize, {
      writable: !0,
      value: void 0
    }), _classPrivateFieldSet(this, _maxSize, maxSize);
  }
  return _createClass5(OutfitLRUCache2, [{
    key: "checkConsistent",
    value: function() {
      if (_classPrivateFieldGet(this, _useHistory).length !== _classPrivateFieldGet(this, _outfitSlots).length || !_toConsumableArray4(_classPrivateFieldGet(this, _useHistory)).sort().every(function(value, index) {
        return value === index;
      }))
        throw new Error("Outfit cache consistency failed.");
    }
  }, {
    key: "promote",
    value: function(index) {
      _classPrivateFieldSet(this, _useHistory, [index].concat(_toConsumableArray4(_classPrivateFieldGet(this, _useHistory).filter(function(i) {
        return i !== index;
      })))), this.checkConsistent();
    }
  }, {
    key: "get",
    value: function(key) {
      var index = _classPrivateFieldGet(this, _outfitSlots).indexOf(key);
      if (!(index < 0))
        return this.promote(index), "".concat(OutfitLRUCache2.OUTFIT_PREFIX, " ").concat(index);
    }
  }, {
    key: "insert",
    value: function(key) {
      var lastUseIndex = void 0;
      if (_classPrivateFieldGet(this, _outfitSlots).length >= _classPrivateFieldGet(this, _maxSize)) {
        if (lastUseIndex = _classPrivateFieldGet(this, _useHistory).pop(), lastUseIndex === void 0)
          throw new Error("Outfit cache consistency failed.");
        return _classPrivateFieldGet(this, _useHistory).splice(0, 0, lastUseIndex), _classPrivateFieldGet(this, _outfitSlots)[lastUseIndex] = key, this.checkConsistent(), "".concat(OutfitLRUCache2.OUTFIT_PREFIX, " ").concat(lastUseIndex);
      } else {
        var index = _classPrivateFieldGet(this, _outfitSlots).push(key) - 1;
        return _classPrivateFieldGet(this, _useHistory).splice(0, 0, index), this.checkConsistent(), "".concat(OutfitLRUCache2.OUTFIT_PREFIX, " ").concat(index);
      }
    }
  }, {
    key: "clear",
    value: function() {
      _classPrivateFieldSet(this, _outfitSlots, []), _classPrivateFieldSet(this, _useHistory, []);
    }
  }]), OutfitLRUCache2;
}();
_defineProperty4(OutfitLRUCache, "OUTFIT_PREFIX", "Script Outfit");
function saveOutfit(name) {
  (0, import_kolmafia7.cliExecute)("outfit save ".concat(name));
}
var cachedObjectives = {}, outfitCache = new OutfitLRUCache(6), cachedStats = [0, 0, 0], cachedCanEquipItemCount = 0;
function canEquipItemCount() {
  var stats = $stats(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral2(["Muscle, Mysticality, Moxie"]))).map(function(stat) {
    return Math.min((0, import_kolmafia7.myBasestat)(stat), 300);
  });
  return stats.every(function(value, index) {
    return value === cachedStats[index];
  }) || (cachedStats = stats, cachedCanEquipItemCount = import_kolmafia7.Item.all().filter(function(item6) {
    return (0, import_kolmafia7.canEquip)(item6);
  }).length), cachedCanEquipItemCount;
}
function checkCache(cacheKey, options) {
  var entry = cachedObjectives[cacheKey];
  return entry ? options.updateOnFamiliarChange && (0, import_kolmafia7.myFamiliar)() !== entry.familiar ? (logger_default.warning("Equipment found in maximize cache but familiar is different."), null) : options.updateOnCanEquipChanged && entry.canEquipItemCount !== canEquipItemCount() ? (logger_default.warning("Equipment found in maximize cache but equippable item list is out of date."), null) : entry : null;
}
function applyCached(entry, options) {
  var outfitName = options.useOutfitCaching ? outfitCache.get(entry) : void 0;
  if (outfitName) {
    (0, import_kolmafia7.isWearingOutfit)(outfitName) || (0, import_kolmafia7.outfit)(outfitName);
    var familiarEquip = entry.equipment.get($slot(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral2(["familiar"]))));
    familiarEquip && (0, import_kolmafia7.equip)($slot(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral2(["familiar"]))), familiarEquip);
  } else {
    var _iterator3 = _createForOfIteratorHelper4(entry.equipment), _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
        var _step3$value = _slicedToArray4(_step3.value, 2), slot = _step3$value[0], item6 = _step3$value[1];
        (0, import_kolmafia7.equippedItem)(slot) !== item6 && (0, import_kolmafia7.availableAmount)(item6) > 0 && (0, import_kolmafia7.equip)(slot, item6);
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    if (verifyCached(entry) && options.useOutfitCaching) {
      var _outfitName = outfitCache.insert(entry);
      logger_default.info("Saving equipment to outfit ".concat(_outfitName, ".")), saveOutfit(_outfitName);
    }
  }
  (0, import_kolmafia7.equippedAmount)($item(_templateObject122 || (_templateObject122 = _taggedTemplateLiteral2(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject132 || (_templateObject132 = _taggedTemplateLiteral2(["Crown of Thrones"])))) && (0, import_kolmafia7.enthroneFamiliar)(entry.rider.get($item(_templateObject142 || (_templateObject142 = _taggedTemplateLiteral2(["Crown of Thrones"])))) || $familiar.none), (0, import_kolmafia7.equippedAmount)($item(_templateObject152 || (_templateObject152 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject162 || (_templateObject162 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) && (0, import_kolmafia7.bjornifyFamiliar)(entry.rider.get($item(_templateObject172 || (_templateObject172 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) || $familiar.none), applyModes(_objectSpread2(_objectSpread2({}, entry.modes), options.modes));
}
var slotStructure = [$slots(_templateObject182 || (_templateObject182 = _taggedTemplateLiteral2(["hat"]))), $slots(_templateObject192 || (_templateObject192 = _taggedTemplateLiteral2(["back"]))), $slots(_templateObject202 || (_templateObject202 = _taggedTemplateLiteral2(["shirt"]))), $slots(_templateObject212 || (_templateObject212 = _taggedTemplateLiteral2(["weapon, off-hand"]))), $slots(_templateObject222 || (_templateObject222 = _taggedTemplateLiteral2(["pants"]))), $slots(_templateObject232 || (_templateObject232 = _taggedTemplateLiteral2(["acc1, acc2, acc3"]))), $slots(_templateObject242 || (_templateObject242 = _taggedTemplateLiteral2(["familiar"])))];
function verifyCached(entry) {
  var warn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, success = !0, _iterator4 = _createForOfIteratorHelper4(slotStructure), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var slotGroup = _step4.value, desiredSlots = slotGroup.map(function(slot) {
        var _entry$equipment$get;
        return [slot, (_entry$equipment$get = entry.equipment.get(slot)) !== null && _entry$equipment$get !== void 0 ? _entry$equipment$get : null];
      }).filter(function(_ref2) {
        var _ref3 = _slicedToArray4(_ref2, 2), item6 = _ref3[1];
        return item6 !== null;
      }), desiredSet = desiredSlots.map(function(_ref4) {
        var _ref5 = _slicedToArray4(_ref4, 2), item6 = _ref5[1];
        return item6;
      }), equippedSet = desiredSlots.map(function(_ref6) {
        var _ref7 = _slicedToArray4(_ref6, 1), slot = _ref7[0];
        return (0, import_kolmafia7.equippedItem)(slot);
      });
      setEqual(desiredSet, equippedSet) || (warn && logger_default.warning("Failed to apply cached ".concat(desiredSet.join(", "), " in ").concat(slotGroup.join(", "), ".")), success = !1);
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return (0, import_kolmafia7.equippedAmount)($item(_templateObject252 || (_templateObject252 = _taggedTemplateLiteral2(["Crown of Thrones"])))) > 0 && entry.rider.get($item(_templateObject262 || (_templateObject262 = _taggedTemplateLiteral2(["Crown of Thrones"])))) && entry.rider.get($item(_templateObject272 || (_templateObject272 = _taggedTemplateLiteral2(["Crown of Thrones"])))) !== (0, import_kolmafia7.myEnthronedFamiliar)() && (warn && logger_default.warning("Failed to apply ".concat(entry.rider.get($item(_templateObject282 || (_templateObject282 = _taggedTemplateLiteral2(["Crown of Thrones"])))), " in ").concat($item(_templateObject292 || (_templateObject292 = _taggedTemplateLiteral2(["Crown of Thrones"]))), ".")), success = !1), (0, import_kolmafia7.equippedAmount)($item(_templateObject302 || (_templateObject302 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) > 0 && entry.rider.get($item(_templateObject312 || (_templateObject312 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) && entry.rider.get($item(_templateObject322 || (_templateObject322 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) !== (0, import_kolmafia7.myBjornedFamiliar)() && (warn && logger_default.warning("Failed to apply".concat(entry.rider.get($item(_templateObject332 || (_templateObject332 = _taggedTemplateLiteral2(["Buddy Bjorn"])))), " in ").concat($item(_templateObject342 || (_templateObject342 = _taggedTemplateLiteral2(["Buddy Bjorn"]))), ".")), success = !1), success;
}
function saveCached(cacheKey, options) {
  var equipment = /* @__PURE__ */ new Map(), rider = /* @__PURE__ */ new Map(), _iterator5 = _createForOfIteratorHelper4(cachedSlots), _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
      var _slot2 = _step5.value;
      equipment.set(_slot2, (0, import_kolmafia7.equippedItem)(_slot2));
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  if ((0, import_kolmafia7.equippedAmount)($item(_templateObject352 || (_templateObject352 = _taggedTemplateLiteral2(["card sleeve"])))) > 0 && equipment.set($slot(_templateObject362 || (_templateObject362 = _taggedTemplateLiteral2(["card-sleeve"]))), (0, import_kolmafia7.equippedItem)($slot(_templateObject372 || (_templateObject372 = _taggedTemplateLiteral2(["card-sleeve"]))))), (0, import_kolmafia7.equippedAmount)($item(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral2(["Crown of Thrones"])))) > 0 && rider.set($item(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral2(["Crown of Thrones"]))), (0, import_kolmafia7.myEnthronedFamiliar)()), (0, import_kolmafia7.equippedAmount)($item(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral2(["Buddy Bjorn"])))) > 0 && rider.set($item(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral2(["Buddy Bjorn"]))), (0, import_kolmafia7.myBjornedFamiliar)()), options.preventSlot && options.preventSlot.length > 0) {
    var _iterator6 = _createForOfIteratorHelper4(options.preventSlot), _step6;
    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
        var slot = _step6.value;
        equipment.delete(slot);
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
    options.preventSlot.includes($slot(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral2(["buddy-bjorn"])))) && rider.delete($item(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral2(["Buddy Bjorn"])))), options.preventSlot.includes($slot(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral2(["crown-of-thrones"])))) && rider.delete($item(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral2(["Crown of Thrones"]))));
  }
  if (options.onlySlot && options.onlySlot.length > 0) {
    var _iterator7 = _createForOfIteratorHelper4(import_kolmafia7.Slot.all()), _step7;
    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
        var _slot = _step7.value;
        options.onlySlot.includes(_slot) || equipment.delete(_slot);
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
    options.onlySlot.includes($slot(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral2(["buddy-bjorn"])))) || rider.delete($item(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral2(["Buddy Bjorn"])))), options.onlySlot.includes($slot(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral2(["crown-of-thrones"])))) || rider.delete($item(_templateObject492 || (_templateObject492 = _taggedTemplateLiteral2(["Crown of Thrones"]))));
  }
  var entry = new CacheEntry(equipment, rider, (0, import_kolmafia7.myFamiliar)(), canEquipItemCount(), _objectSpread2(_objectSpread2({}, getCurrentModes()), options.modes));
  if (cachedObjectives[cacheKey] = entry, options.useOutfitCaching) {
    var outfitName = outfitCache.insert(entry);
    logger_default.info("Saving equipment to outfit ".concat(outfitName, ".")), saveOutfit(outfitName);
  }
}
function maximizeCached(objectives) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, fullOptions = mergeMaximizeOptions(defaultMaximizeOptions, options), forceEquip = fullOptions.forceEquip, preventEquip = fullOptions.preventEquip, bonusEquip = fullOptions.bonusEquip, onlySlot = fullOptions.onlySlot, preventSlot = fullOptions.preventSlot, forceUpdate = fullOptions.forceUpdate, objective = _toConsumableArray4(new Set([].concat(_toConsumableArray4(objectives.sort()), _toConsumableArray4(forceEquip.map(function(item6) {
    return '"equip '.concat(toMaximizerName(item6), '"');
  }).sort()), _toConsumableArray4(preventEquip.map(function(item6) {
    return '-"equip '.concat(toMaximizerName(item6), '"');
  }).sort()), _toConsumableArray4(onlySlot.map(function(slot) {
    return "".concat(slot);
  }).sort()), _toConsumableArray4(preventSlot.map(function(slot) {
    return "-".concat(slot);
  }).sort()), _toConsumableArray4(Array.from(bonusEquip.entries()).filter(function(_ref8) {
    var _ref9 = _slicedToArray4(_ref8, 2), bonus = _ref9[1];
    return bonus !== 0;
  }).map(function(_ref10) {
    var _ref11 = _slicedToArray4(_ref10, 2), item6 = _ref11[0], bonus = _ref11[1];
    return "".concat(Math.round(bonus * 100) / 100, ' "bonus ').concat(toMaximizerName(item6), '"');
  }).sort())))).join(", "), untouchedSlots = cachedSlots.filter(function(slot) {
    return preventSlot.includes(slot) || onlySlot.length > 0 && !onlySlot.includes(slot);
  }), cacheKey = [objective].concat(_toConsumableArray4(untouchedSlots.map(function(slot) {
    return "".concat(slot, ":").concat((0, import_kolmafia7.equippedItem)(slot));
  }).sort()), [have($effect(_templateObject502 || (_templateObject502 = _taggedTemplateLiteral2(["Offhand Remarkable"])))), options.updateOnLocationChange && (0, import_kolmafia7.myLocation)()]).join("; "), cacheEntry = checkCache(cacheKey, fullOptions);
  if (cacheEntry && !forceUpdate) {
    if (verifyCached(cacheEntry, !1))
      return !0;
    if (logger_default.info("Equipment found in maximize cache, equipping..."), applyCached(cacheEntry, fullOptions), verifyCached(cacheEntry))
      return logger_default.info("Equipped cached ".concat(cacheKey)), !0;
    logger_default.warning("Maximize cache application failed, maximizing...");
  }
  var result = (0, import_kolmafia7.maximize)(objective, !1);
  return saveCached(cacheKey, fullOptions), result;
}
function mergeOptionalOptions(optionsA, optionsB) {
  for (var _len = arguments.length, keys = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++)
    keys[_key - 2] = arguments[_key];
  return keys.reduce(function(current2, key) {
    return _objectSpread2(_objectSpread2({}, current2), (optionsA[key] || optionsB[key]) === void 0 ? {} : _defineProperty4({}, key, optionsA[key] || optionsB[key]));
  }, {});
}
var _maximizeParameters = /* @__PURE__ */ new WeakMap(), _maximizeOptions = /* @__PURE__ */ new WeakMap(), Requirement = /* @__PURE__ */ function() {
  function Requirement2(maximizeParameters, maximizeOptions) {
    _classCallCheck5(this, Requirement2), _classPrivateFieldInitSpec(this, _maximizeParameters, {
      writable: !0,
      value: void 0
    }), _classPrivateFieldInitSpec(this, _maximizeOptions, {
      writable: !0,
      value: void 0
    }), _classPrivateFieldSet(this, _maximizeParameters, maximizeParameters), _classPrivateFieldSet(this, _maximizeOptions, maximizeOptions);
  }
  return _createClass5(Requirement2, [{
    key: "maximizeParameters",
    get: function() {
      return _classPrivateFieldGet(this, _maximizeParameters);
    }
  }, {
    key: "maximizeOptions",
    get: function() {
      return _classPrivateFieldGet(this, _maximizeOptions);
    }
  }, {
    key: "merge",
    value: function(other) {
      var _optionsA$forceEquip, _other$maximizeOption, _optionsA$preventEqui, _other$maximizeOption3, _optionsA$bonusEquip$, _optionsA$bonusEquip, _optionsB$bonusEquip$, _optionsB$bonusEquip, _optionsA$onlySlot, _optionsB$onlySlot, _optionsA$preventSlot, _optionsB$preventSlot, optionsA = this.maximizeOptions, optionsB = other.maximizeOptions, optionalBooleans = mergeOptionalOptions(optionsA, optionsB, "updateOnFamiliarChange", "updateOnCanEquipChanged", "updateOnLocationChange", "forceUpdate");
      return new Requirement2([].concat(_toConsumableArray4(this.maximizeParameters), _toConsumableArray4(other.maximizeParameters)), _objectSpread2(_objectSpread2({}, optionalBooleans), {}, {
        forceEquip: [].concat(_toConsumableArray4((_optionsA$forceEquip = optionsA.forceEquip) !== null && _optionsA$forceEquip !== void 0 ? _optionsA$forceEquip : []), _toConsumableArray4((_other$maximizeOption = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption !== void 0 ? _other$maximizeOption : [])).filter(function(x) {
          var _other$maximizeOption2;
          return !((_other$maximizeOption2 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption2 !== void 0 && _other$maximizeOption2.includes(x));
        }),
        preventEquip: [].concat(_toConsumableArray4((_optionsA$preventEqui = optionsA.preventEquip) !== null && _optionsA$preventEqui !== void 0 ? _optionsA$preventEqui : []), _toConsumableArray4((_other$maximizeOption3 = other.maximizeOptions.preventEquip) !== null && _other$maximizeOption3 !== void 0 ? _other$maximizeOption3 : [])).filter(function(x) {
          var _other$maximizeOption4;
          return !((_other$maximizeOption4 = other.maximizeOptions.forceEquip) !== null && _other$maximizeOption4 !== void 0 && _other$maximizeOption4.includes(x));
        }),
        bonusEquip: new Map([].concat(_toConsumableArray4((_optionsA$bonusEquip$ = (_optionsA$bonusEquip = optionsA.bonusEquip) === null || _optionsA$bonusEquip === void 0 ? void 0 : _optionsA$bonusEquip.entries()) !== null && _optionsA$bonusEquip$ !== void 0 ? _optionsA$bonusEquip$ : []), _toConsumableArray4((_optionsB$bonusEquip$ = (_optionsB$bonusEquip = optionsB.bonusEquip) === null || _optionsB$bonusEquip === void 0 ? void 0 : _optionsB$bonusEquip.entries()) !== null && _optionsB$bonusEquip$ !== void 0 ? _optionsB$bonusEquip$ : []))),
        onlySlot: [].concat(_toConsumableArray4((_optionsA$onlySlot = optionsA.onlySlot) !== null && _optionsA$onlySlot !== void 0 ? _optionsA$onlySlot : []), _toConsumableArray4((_optionsB$onlySlot = optionsB.onlySlot) !== null && _optionsB$onlySlot !== void 0 ? _optionsB$onlySlot : [])),
        preventSlot: [].concat(_toConsumableArray4((_optionsA$preventSlot = optionsA.preventSlot) !== null && _optionsA$preventSlot !== void 0 ? _optionsA$preventSlot : []), _toConsumableArray4((_optionsB$preventSlot = optionsB.preventSlot) !== null && _optionsB$preventSlot !== void 0 ? _optionsB$preventSlot : []))
      }));
    }
  }, {
    key: "maximize",
    value: function() {
      return maximizeCached(this.maximizeParameters, this.maximizeOptions);
    }
  }], [{
    key: "merge",
    value: function(allRequirements) {
      return allRequirements.reduce(function(x, y) {
        return x.merge(y);
      }, new Requirement2([], {}));
    }
  }, {
    key: "maximize",
    value: function() {
      for (var _len2 = arguments.length, requirements = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
        requirements[_key2] = arguments[_key2];
      Requirement2.merge(requirements).maximize();
    }
  }]), Requirement2;
}();

// node_modules/libram/dist/resources/2017/AsdonMartin.js
var AsdonMartin_exports = {};
__export(AsdonMartin_exports, {
  Driving: function() {
    return Driving;
  },
  drive: function() {
    return drive;
  },
  fillTo: function() {
    return fillTo;
  },
  fillWithInventoryTo: function() {
    return fillWithInventoryTo;
  },
  have: function() {
    return have2;
  },
  insertFuel: function() {
    return insertFuel;
  },
  installed: function() {
    return installed;
  },
  isFuelItem: function() {
    return isFuelItem;
  }
});
init_kolmafia_polyfill();
var import_kolmafia8 = require("kolmafia");
var _templateObject56, _templateObject211, _templateObject310, _templateObject410, _templateObject57, _templateObject62, _templateObject72, _templateObject82, _templateObject92, _templateObject102, _templateObject112, _templateObject123, _templateObject133, _templateObject143, _templateObject153, _templateObject163, _templateObject173, _templateObject183;
function _slicedToArray5(arr, i) {
  return _arrayWithHoles5(arr) || _iterableToArrayLimit5(arr, i) || _unsupportedIterableToArray6(arr, i) || _nonIterableRest5();
}
function _nonIterableRest5() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray6(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray6(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray6(o, minLen);
  }
}
function _arrayLikeToArray6(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit5(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles5(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral3(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var PriceAge;
(function(PriceAge2) {
  PriceAge2[PriceAge2.HISTORICAL = 0] = "HISTORICAL", PriceAge2[PriceAge2.RECENT = 1] = "RECENT", PriceAge2[PriceAge2.TODAY = 2] = "TODAY";
})(PriceAge || (PriceAge = {}));
function installed() {
  return (0, import_kolmafia8.getWorkshed)() === $item(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral3(["Asdon Martin keyfob (on ring)"])));
}
function have2() {
  return installed() || have($item(_templateObject211 || (_templateObject211 = _taggedTemplateLiteral3(["Asdon Martin keyfob (on ring)"]))));
}
var fuelSkiplist = $items(_templateObject310 || (_templateObject310 = _taggedTemplateLiteral3(['cup of "tea", thermos of "whiskey", Lucky Lindy, Bee\'s Knees, Sockdollager, Ish Kabibble, Hot Socks, Phonus Balonus, Flivver, Sloppy Jalopy, glass of "milk"'])));
function priceTooOld(item6) {
  return (0, import_kolmafia8.historicalPrice)(item6) === 0 || (0, import_kolmafia8.historicalAge)(item6) >= 7;
}
function historicalPriceOrMax(item6) {
  var historical = (0, import_kolmafia8.historicalPrice)(item6);
  return historical < 0 ? 999999999 : historical;
}
function mallPriceOrMax(item6) {
  var mall = (0, import_kolmafia8.mallPrice)(item6);
  return mall < 0 ? 999999999 : mall;
}
function price(item6, priceAge) {
  switch (priceAge) {
    case PriceAge.HISTORICAL: {
      var historical = historicalPriceOrMax(item6);
      return historical === 0 ? mallPriceOrMax(item6) : historical;
    }
    case PriceAge.RECENT:
      return priceTooOld(item6) ? mallPriceOrMax(item6) : historicalPriceOrMax(item6);
    case PriceAge.TODAY:
      return mallPriceOrMax(item6);
  }
}
function inventoryItems() {
  return import_kolmafia8.Item.all().filter(isFuelItem).filter(function(item6) {
    return have(item6) && [100, (0, import_kolmafia8.autosellPrice)(item6)].includes(price(item6, PriceAge.RECENT));
  });
}
function calculateFuelUnitCost(it) {
  var priceAge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : PriceAge.RECENT, units = getAverageAdventures(it);
  return price(it, priceAge) / units;
}
function isFuelItem(it) {
  return !(0, import_kolmafia8.isNpcItem)(it) && it.fullness + it.inebriety > 0 && getAverageAdventures(it) > 0 && it.tradeable && it.discardable && !fuelSkiplist.includes(it);
}
function getBestFuels() {
  var allFuel = import_kolmafia8.Item.all().filter(isFuelItem);
  allFuel.filter(function(item6) {
    return (0, import_kolmafia8.historicalPrice)(item6) === 0;
  }).length > 100 && ((0, import_kolmafia8.mallPrices)("food"), (0, import_kolmafia8.mallPrices)("booze"));
  var keyHistorical = function(item6) {
    return calculateFuelUnitCost(item6, PriceAge.HISTORICAL);
  };
  allFuel.sort(function(x, y) {
    return keyHistorical(x) - keyHistorical(y);
  });
  var bestUnitCost = keyHistorical(allFuel[0]), firstBadIndex = allFuel.findIndex(function(item6) {
    return keyHistorical(item6) > 5 * bestUnitCost;
  }), potentialFuel = firstBadIndex > 0 ? allFuel.slice(0, firstBadIndex) : allFuel;
  potentialFuel.filter(function(item6) {
    return priceTooOld(item6);
  }).length > 100 && ((0, import_kolmafia8.mallPrices)("food"), (0, import_kolmafia8.mallPrices)("booze"));
  var key1 = function(item6) {
    return -getAverageAdventures(item6);
  }, key2 = function(item6) {
    return calculateFuelUnitCost(item6, PriceAge.RECENT);
  };
  potentialFuel.sort(function(x, y) {
    return key1(x) - key1(y);
  }), potentialFuel.sort(function(x, y) {
    return key2(x) - key2(y);
  });
  var candidates = potentialFuel.slice(0, 10), key3 = function(item6) {
    return calculateFuelUnitCost(item6, PriceAge.TODAY);
  };
  if (candidates.sort(function(x, y) {
    return key3(x) - key3(y);
  }), calculateFuelUnitCost(candidates[0], PriceAge.TODAY) > 100)
    throw new Error("Could not identify any fuel with efficiency better than 100 meat per fuel. This means something went wrong.");
  return candidates;
}
function insertFuel(it) {
  var quantity = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, result = (0, import_kolmafia8.visitUrl)("campground.php?action=fuelconvertor&pwd&qty=".concat(quantity, "&iid=").concat(it.id, "&go=Convert%21"));
  return result.includes("The display updates with a");
}
function fillTo(targetUnits) {
  if (!installed())
    return !1;
  for (; (0, import_kolmafia8.getFuel)() < targetUnits; ) {
    var _ref = (0, import_kolmafia8.canInteract)() ? getBestFuels() : [$item(_templateObject410 || (_templateObject410 = _taggedTemplateLiteral3(["loaf of soda bread"]))), void 0], _ref2 = _slicedToArray5(_ref, 2), bestFuel = _ref2[0], secondBest = _ref2[1], count = Math.ceil(targetUnits / getAverageAdventures(bestFuel)), ceiling = void 0;
    if (secondBest) {
      var efficiencyOfSecondBest = (0, import_kolmafia8.mallPrice)(secondBest) / getAverageAdventures(secondBest);
      ceiling = Math.ceil(efficiencyOfSecondBest * getAverageAdventures(bestFuel));
    }
    if ((0, import_kolmafia8.canInteract)())
      ceiling ? (0, import_kolmafia8.buy)(count, bestFuel, ceiling) : (0, import_kolmafia8.buy)(count, bestFuel);
    else if ((0, import_kolmafia8.npcPrice)($item(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral3(["wad of dough"])))) === 0 && (0, import_kolmafia8.npcPrice)($item(_templateObject62 || (_templateObject62 = _taggedTemplateLiteral3(["all-purpose flower"])))) > 0) {
      for (var maxTries = Math.ceil(count / 35), i = 0; i < maxTries && (0, import_kolmafia8.availableAmount)($item(_templateObject72 || (_templateObject72 = _taggedTemplateLiteral3(["wad of dough"])))) < count; i++)
        (0, import_kolmafia8.buy)($item(_templateObject82 || (_templateObject82 = _taggedTemplateLiteral3(["all-purpose flower"])))), (0, import_kolmafia8.use)($item(_templateObject92 || (_templateObject92 = _taggedTemplateLiteral3(["all-purpose flower"]))));
      (0, import_kolmafia8.retrieveItem)(count, bestFuel);
    } else
      (0, import_kolmafia8.retrieveItem)(count, bestFuel);
    if (!insertFuel(bestFuel, Math.min((0, import_kolmafia8.itemAmount)(bestFuel), count)))
      throw new Error("Failed to fuel Asdon Martin.");
  }
  return (0, import_kolmafia8.getFuel)() >= targetUnits;
}
function fillWithBestInventoryItem(targetUnits) {
  var options = inventoryItems().sort(function(a, b) {
    return getAverageAdventures(b) / (0, import_kolmafia8.autosellPrice)(b) - getAverageAdventures(a) / (0, import_kolmafia8.autosellPrice)(a);
  });
  if (options.length === 0)
    return !1;
  var best = options[0];
  if ((0, import_kolmafia8.autosellPrice)(best) / getAverageAdventures(best) > 100)
    return !1;
  var amountToUse = clamp(Math.ceil(targetUnits / getAverageAdventures(best)), 0, (0, import_kolmafia8.itemAmount)(best));
  return insertFuel(best, amountToUse);
}
function fillWithInventoryTo(targetUnits) {
  if (!installed())
    return !1;
  for (var continueFuelingFromInventory = !0; (0, import_kolmafia8.getFuel)() < targetUnits && continueFuelingFromInventory; )
    continueFuelingFromInventory && (continueFuelingFromInventory = fillWithBestInventoryItem(targetUnits));
  return fillTo(targetUnits);
}
var Driving = {
  Obnoxiously: $effect(_templateObject102 || (_templateObject102 = _taggedTemplateLiteral3(["Driving Obnoxiously"]))),
  Stealthily: $effect(_templateObject112 || (_templateObject112 = _taggedTemplateLiteral3(["Driving Stealthily"]))),
  Wastefully: $effect(_templateObject123 || (_templateObject123 = _taggedTemplateLiteral3(["Driving Wastefully"]))),
  Safely: $effect(_templateObject133 || (_templateObject133 = _taggedTemplateLiteral3(["Driving Safely"]))),
  Recklessly: $effect(_templateObject143 || (_templateObject143 = _taggedTemplateLiteral3(["Driving Recklessly"]))),
  Intimidatingly: $effect(_templateObject153 || (_templateObject153 = _taggedTemplateLiteral3(["Driving Intimidatingly"]))),
  Quickly: $effect(_templateObject163 || (_templateObject163 = _taggedTemplateLiteral3(["Driving Quickly"]))),
  Observantly: $effect(_templateObject173 || (_templateObject173 = _taggedTemplateLiteral3(["Driving Observantly"]))),
  Waterproofly: $effect(_templateObject183 || (_templateObject183 = _taggedTemplateLiteral3(["Driving Waterproofly"])))
};
function drive(style) {
  var turns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, preferInventory = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  if (!Object.values(Driving).includes(style) || !installed())
    return !1;
  if ((0, import_kolmafia8.haveEffect)(style) >= turns)
    return !0;
  var fuelNeeded = 37 * Math.ceil((turns - (0, import_kolmafia8.haveEffect)(style)) / 30);
  for ((preferInventory ? fillWithInventoryTo : fillTo)(fuelNeeded); (0, import_kolmafia8.getFuel)() >= 37 && (0, import_kolmafia8.haveEffect)(style) < turns; )
    (0, import_kolmafia8.cliExecute)("asdonmartin drive ".concat(style.name.replace("Driving ", "")));
  return (0, import_kolmafia8.haveEffect)(style) >= turns;
}

// node_modules/libram/dist/moonSign.js
init_kolmafia_polyfill();
var MoonSigns = ["Mongoose", "Wallaby", "Vole", "Platypus", "Opossum", "Marmot", "Wombat", "Blender", "Packrat"];
function signIdToName(id) {
  return MoonSigns[id - 1] || "None";
}

// node_modules/libram/dist/resources/index.js
init_kolmafia_polyfill();

// node_modules/libram/dist/Copier.js
init_kolmafia_polyfill();
function _defineProperties6(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey6(descriptor.key), descriptor);
  }
}
function _createClass6(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties6(Constructor.prototype, protoProps), staticProps && _defineProperties6(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _classCallCheck6(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperty5(obj, key, value) {
  return key = _toPropertyKey6(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey6(arg) {
  var key = _toPrimitive6(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive6(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var Copier = /* @__PURE__ */ _createClass6(function Copier2(couldCopy, prepare, canCopy, copiedMonster, fightCopy) {
  _classCallCheck6(this, Copier2), _defineProperty5(this, "couldCopy", void 0), _defineProperty5(this, "prepare", void 0), _defineProperty5(this, "canCopy", void 0), _defineProperty5(this, "copiedMonster", void 0), _defineProperty5(this, "fightCopy", null), this.couldCopy = couldCopy, this.prepare = prepare, this.canCopy = canCopy, this.copiedMonster = copiedMonster, fightCopy && (this.fightCopy = fightCopy);
});

// node_modules/libram/dist/modifier.js
init_kolmafia_polyfill();
var import_kolmafia9 = require("kolmafia");

// node_modules/libram/dist/modifierTypes.js
init_kolmafia_polyfill();
var stringModifiers = ["Class", "Intrinsic Effect", "Equalize", "Wiki Name", "Modifiers", "Outfit", "Stat Tuning", "Equips On", "Familiar Effect", "Jiggle", "Equalize Muscle", "Equalize Mysticality", "Equalize Moxie", "Avatar", "Skill", "Floor Buffed Muscle", "Floor Buffed Mysticality", "Floor Buffed Moxie", "Plumber Stat", "Recipe", "Evaluated Modifiers", "Last Available"], stringModifiersSet = new Set(stringModifiers), booleanModifiers = ["Softcore Only", "Single Equip", "Always Fumble", "Never Fumble", "Weakens Monster", "Free Pull", "Variable", "Nonstackable Watch", "Cold Immunity", "Hot Immunity", "Sleaze Immunity", "Spooky Immunity", "Stench Immunity", "Cold Vulnerability", "Hot Vulnerability", "Sleaze Vulnerability", "Spooky Vulnerability", "Stench Vulnerability", "Moxie Controls MP", "Moxie May Control MP", "Four Songs", "Adventure Randomly", "Adventure Underwater", "Underwater Familiar", "Generic", "Unarmed", "No Pull", "Lasts Until Rollover", "Alters Page Text", "Attacks Can't Miss", "Pirate", "Blind", "Breakable", "Drops Items", "Drops Meat", "Volleyball or Sombrero", "Extra Pickpocket", "Negative Status Resist"], booleanModifiersSet = new Set(booleanModifiers), numericModifiers = ["Familiar Weight", "Monster Level", "Combat Rate", "Initiative", "Experience", "Item Drop", "Meat Drop", "Damage Absorption", "Damage Reduction", "Cold Resistance", "Hot Resistance", "Sleaze Resistance", "Spooky Resistance", "Stench Resistance", "Mana Cost", "Moxie", "Moxie Percent", "Muscle", "Muscle Percent", "Mysticality", "Mysticality Percent", "Maximum HP", "Maximum HP Percent", "Maximum MP", "Maximum MP Percent", "Weapon Damage", "Ranged Damage", "Spell Damage", "Spell Damage Percent", "Cold Damage", "Hot Damage", "Sleaze Damage", "Spooky Damage", "Stench Damage", "Cold Spell Damage", "Hot Spell Damage", "Sleaze Spell Damage", "Spooky Spell Damage", "Stench Spell Damage", "Underwater Combat Rate", "Fumble", "HP Regen Min", "HP Regen Max", "MP Regen Min", "MP Regen Max", "Adventures", "Familiar Weight Percent", "Weapon Damage Percent", "Ranged Damage Percent", "Stackable Mana Cost", "Hobo Power", "Base Resting HP", "Resting HP Percent", "Bonus Resting HP", "Base Resting MP", "Resting MP Percent", "Bonus Resting MP", "Critical Hit Percent", "PvP Fights", "Volleyball", "Sombrero", "Leprechaun", "Fairy", "Meat Drop Penalty", "Hidden Familiar Weight", "Item Drop Penalty", "Initiative Penalty", "Food Drop", "Booze Drop", "Hat Drop", "Weapon Drop", "Offhand Drop", "Shirt Drop", "Pants Drop", "Accessory Drop", "Volleyball Effectiveness", "Sombrero Effectiveness", "Leprechaun Effectiveness", "Fairy Effectiveness", "Familiar Weight Cap", "Slime Resistance", "Slime Hates It", "Spell Critical Percent", "Muscle Experience", "Mysticality Experience", "Moxie Experience", "Effect Duration", "Candy Drop", "DB Combat Damage", "Sombrero Bonus", "Familiar Experience", "Sporadic Meat Drop", "Sporadic Item Drop", "Meat Bonus", "Pickpocket Chance", "Combat Mana Cost", "Muscle Experience Percent", "Mysticality Experience Percent", "Moxie Experience Percent", "Minstrel Level", "Muscle Limit", "Mysticality Limit", "Moxie Limit", "Song Duration", "Prismatic Damage", "Smithsness", "Supercold Resistance", "Reduce Enemy Defense", "Pool Skill", "Familiar Damage", "Gear Drop", "Maximum Hooch", "Water Level", "Crimbot Outfit Power", "Familiar Tuning Muscle", "Familiar Tuning Mysticality", "Familiar Tuning Moxie", "Random Monster Modifiers", "Luck", "Othello Skill", "Disco Style", "Rollover Effect Duration", "Sixgun Damage", "Fishing Skill", "Additional Song", "Sprinkle Drop", "Absorb Adventures", "Absorb Stats", "Rubee Drop", "Kruegerand Drop", "WarBear Armor Penetration", "Maximum PP", "Plumber Power", "Drippy Damage", "Drippy Resistance", "Energy", "Scrap", "Familiar Action Bonus", "Water", "Spleen Drop", "Potion Drop", "Sauce Spell Damage", "Monster Level Percent", "Food Fairy", "Booze Fairy", "Candy Fairy", "Food Fairy Effectiveness", "Booze Fairy Effectiveness", "Candy Fairy Effectiveness", "Damage Aura", "Sporadic Damage Aura", "Thorns", "Sporadic Thorns", "Stomach Capacity", "Liver Capacity", "Spleen Capacity", "Free Rests", "Leaves", "Elf Warfare Effectiveness", "Pirate Warfare Effectiveness", "MPC Drop", "Piece of Twelve Drop", "Combat Item Damage Percent", "Avoid Attack", "Damage vs. Bugbears", "Damage vs. Werewolves", "Damage vs. Zombies", "Damage vs. Ghosts", "Damage vs. Vampires", "Damage vs. Skeletons", "Damage vs. Undead", "RAM", "Lantern", "Raw Combat Rate"], numericModifiersSet = new Set(numericModifiers), multiStringModifiers = ["Effect", "Rollover Effect", "Conditional Skill (Equipped)", "Conditional Skill (Inventory)", "Lantern Element"], multiStringModifiersSet = new Set(multiStringModifiers);

// node_modules/libram/dist/modifier.js
function isBooleanModifier(modifier) {
  return booleanModifiersSet.has(modifier);
}
function isNumericModifier(modifier) {
  return numericModifiersSet.has(modifier);
}
function isStringModifier(modifier) {
  return stringModifiersSet.has(modifier);
}
function isMultiStringModifier(modifier) {
  return multiStringModifiersSet.has(modifier);
}
function get2(name, subject) {
  if (isBooleanModifier(name))
    return subject === void 0 ? (0, import_kolmafia9.booleanModifier)(name) : (0, import_kolmafia9.booleanModifier)(subject, name);
  if (isNumericModifier(name))
    return subject === void 0 ? (0, import_kolmafia9.numericModifier)(name) : (0, import_kolmafia9.numericModifier)(subject, name);
  if (isStringModifier(name))
    return subject === void 0 ? (0, import_kolmafia9.stringModifier)(name) : (0, import_kolmafia9.stringModifier)(subject, name);
  if (isMultiStringModifier(name))
    return subject === void 0 ? (0, import_kolmafia9.stringsModifier)(name) : (0, import_kolmafia9.stringsModifier)(subject, name);
}

// node_modules/libram/dist/resources/2015/DeckOfEveryCard.js
var DeckOfEveryCard_exports = {};
__export(DeckOfEveryCard_exports, {
  cards: function() {
    return cards;
  },
  cheatCard: function() {
    return cheatCard;
  },
  getCardsDrawn: function() {
    return getCardsDrawn;
  },
  getCardsSeen: function() {
    return getCardsSeen;
  },
  getRemainingCheats: function() {
    return getRemainingCheats;
  },
  getRemainingDraws: function() {
    return getRemainingDraws;
  },
  have: function() {
    return have3;
  }
});
init_kolmafia_polyfill();
var import_kolmafia10 = require("kolmafia");
var _templateObject58;
function _taggedTemplateLiteral4(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function have3() {
  return have($item(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral4(["Deck of Every Card"]))));
}
var cards = Object.freeze(["X of Clubs", "X of Diamonds", "X of Hearts", "X of Spades", "X of Papayas", "X of Kumquats", "X of Salads", "X of Cups", "X of Coins", "X of Swords", "X of Wands", "XVI - The Tower", "Professor Plum", "Spare Tire", "Extra Tank", "Sheep", "Year of Plenty", "Mine", "Laboratory", "Plains", "Swamp", "Mountain", "Forest", "Island", "Lead Pipe", "Rope", "Wrench", "Candlestick", "Knife", "Revolver", "Gift Card", "1952 Mickey Mantle", "XXI - The World", "III - The Empress", "VI - The Lovers", "Healing Salve", "Dark Ritual", "Lightning Bolt", "Giant Growth", "Ancestral Recall", "XI - Strength", "I - The Magician", "0 - The Fool", "X - The Wheel of Fortune", "The Race Card", "Green Card", "IV - The Emperor", "IX - The Hermit", "Werewolf", "The Hive", "XVII - The Star", "VII - The Chariot", "XV - The Devil", "V - The Hierophant", "Fire Elemental", "Christmas Card", "Go Fish", "Goblin Sapper", "II - The High Priestess", "XIV - Temperance", "XVIII - The Moon", "Hunky Fireman Card", "Aquarius Horoscope", "XII - The Hanged Man", "Suit Warehouse Discount Card", "Pirate Birthday Card", "Plantable Greeting Card", "Slimer Trading Card", "XIII - Death", "Unstable Portal"]);
function getCardsDrawn() {
  return clamp(get("_deckCardsDrawn"), 0, 15);
}
function getRemainingDraws() {
  return 15 - getCardsDrawn();
}
function getRemainingCheats() {
  return Math.floor(getRemainingDraws() / 5);
}
function getCardsSeen() {
  return get("_deckCardsSeen") ? get("_deckCardsSeen").split("|") : [];
}
function cheatCard(card) {
  return getCardsSeen().includes(card) ? !0 : getRemainingDraws() < 5 ? !1 : (0, import_kolmafia10.cliExecute)("cheat ".concat(card));
}

// node_modules/libram/dist/resources/2016/SourceTerminal.js
var SourceTerminal_exports = {};
__export(SourceTerminal_exports, {
  Buffs: function() {
    return Buffs;
  },
  Digitize: function() {
    return Digitize;
  },
  Items: function() {
    return Items;
  },
  RolloverBuffs: function() {
    return RolloverBuffs;
  },
  Skills: function() {
    return Skills;
  },
  canDigitize: function() {
    return canDigitize;
  },
  couldDigitize: function() {
    return couldDigitize;
  },
  duplicateUsesRemaining: function() {
    return duplicateUsesRemaining;
  },
  educate: function() {
    return educate;
  },
  enhance: function() {
    return enhance;
  },
  enhanceBuffDuration: function() {
    return enhanceBuffDuration;
  },
  enhanceUsesRemaining: function() {
    return enhanceUsesRemaining;
  },
  enquiry: function() {
    return enquiry;
  },
  enquiryBuffDuration: function() {
    return enquiryBuffDuration;
  },
  extrude: function() {
    return extrude;
  },
  getChips: function() {
    return getChips;
  },
  getDigitizeMonster: function() {
    return getDigitizeMonster;
  },
  getDigitizeMonsterCount: function() {
    return getDigitizeMonsterCount;
  },
  getDigitizeUses: function() {
    return getDigitizeUses;
  },
  getDigitizeUsesRemaining: function() {
    return getDigitizeUsesRemaining;
  },
  getDuplicateUses: function() {
    return getDuplicateUses;
  },
  getEnhanceUses: function() {
    return getEnhanceUses;
  },
  getMaximumDigitizeUses: function() {
    return getMaximumDigitizeUses;
  },
  getPortscanUses: function() {
    return getPortscanUses;
  },
  getSkills: function() {
    return getSkills;
  },
  have: function() {
    return have4;
  },
  isCurrentSkill: function() {
    return isCurrentSkill;
  },
  maximumDuplicateUses: function() {
    return maximumDuplicateUses;
  },
  maximumEnhanceUses: function() {
    return maximumEnhanceUses;
  },
  prepareDigitize: function() {
    return prepareDigitize;
  }
});
init_kolmafia_polyfill();
var import_kolmafia11 = require("kolmafia");
var _templateObject59, _templateObject213, _templateObject311, _templateObject411, _templateObject510, _templateObject63, _templateObject73, _templateObject83, _templateObject93, _templateObject103, _templateObject113, _templateObject124, _templateObject134, _templateObject144, _templateObject154, _templateObject164, _templateObject174, _templateObject184, _templateObject193, _templateObject203, _templateObject214, _templateObject223, _templateObject233, _templateObject243, _templateObject253, _templateObject263, _templateObject273;
function _createForOfIteratorHelper5(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray7(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray7(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray7(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray7(o, minLen);
  }
}
function _arrayLikeToArray7(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral5(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item = $item(_templateObject59 || (_templateObject59 = _taggedTemplateLiteral5(["Source terminal"])));
function have4() {
  return haveInCampground(item);
}
var Buffs = {
  Items: $effect(_templateObject213 || (_templateObject213 = _taggedTemplateLiteral5(["items.enh"]))),
  Meat: $effect(_templateObject311 || (_templateObject311 = _taggedTemplateLiteral5(["meat.enh"]))),
  Init: $effect(_templateObject411 || (_templateObject411 = _taggedTemplateLiteral5(["init.enh"]))),
  Critical: $effect(_templateObject510 || (_templateObject510 = _taggedTemplateLiteral5(["critical.enh"]))),
  Damage: $effect(_templateObject63 || (_templateObject63 = _taggedTemplateLiteral5(["damage.enh"]))),
  Substats: $effect(_templateObject73 || (_templateObject73 = _taggedTemplateLiteral5(["substats.enh"])))
};
function enhance(buff) {
  return Object.values(Buffs).includes(buff) ? (0, import_kolmafia11.cliExecute)("terminal enhance ".concat(buff.name)) : !1;
}
var RolloverBuffs = {
  Familiar: $effect(_templateObject83 || (_templateObject83 = _taggedTemplateLiteral5(["familiar.enq"]))),
  Monsters: $effect(_templateObject93 || (_templateObject93 = _taggedTemplateLiteral5(["monsters.enq"]))),
  Protect: $effect(_templateObject103 || (_templateObject103 = _taggedTemplateLiteral5(["protect.enq"]))),
  Stats: $effect(_templateObject113 || (_templateObject113 = _taggedTemplateLiteral5(["stats.enq"])))
};
function enquiry(rolloverBuff) {
  return Object.values(RolloverBuffs).includes(rolloverBuff) ? (0, import_kolmafia11.cliExecute)("terminal enquiry ".concat(rolloverBuff.name)) : !1;
}
var Skills = {
  Extract: $skill(_templateObject124 || (_templateObject124 = _taggedTemplateLiteral5(["Extract"]))),
  Digitize: $skill(_templateObject134 || (_templateObject134 = _taggedTemplateLiteral5(["Digitize"]))),
  Compress: $skill(_templateObject144 || (_templateObject144 = _taggedTemplateLiteral5(["Compress"]))),
  Duplicate: $skill(_templateObject154 || (_templateObject154 = _taggedTemplateLiteral5(["Duplicate"]))),
  Portscan: $skill(_templateObject164 || (_templateObject164 = _taggedTemplateLiteral5(["Portscan"]))),
  Turbo: $skill(_templateObject174 || (_templateObject174 = _taggedTemplateLiteral5(["Turbo"])))
};
function educate(skills2) {
  var skillsArray = Array.isArray(skills2) ? skills2.slice(0, 2) : [skills2];
  if (arrayEquals(skillsArray, getSkills()))
    return !0;
  var _iterator = _createForOfIteratorHelper5(skillsArray), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var skill = _step.value;
      if (!Object.values(Skills).includes(skill))
        return !1;
      (0, import_kolmafia11.cliExecute)("terminal educate ".concat(skill.name.toLowerCase(), ".edu"));
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return !0;
}
function getSkills() {
  return ["sourceTerminalEducate1", "sourceTerminalEducate2"].map(function(p) {
    return get(p);
  }).filter(Boolean).map(function(s) {
    return import_kolmafia11.Skill.get(s.slice(0, -4));
  });
}
function isCurrentSkill(skills2) {
  var currentSkills = getSkills(), skillsArray = Array.isArray(skills2) ? skills2.slice(0, 2) : [skills2];
  return skillsArray.every(function(skill) {
    return currentSkills.includes(skill);
  });
}
var Items = /* @__PURE__ */ new Map([[$item(_templateObject184 || (_templateObject184 = _taggedTemplateLiteral5(["browser cookie"]))), "food.ext"], [$item(_templateObject193 || (_templateObject193 = _taggedTemplateLiteral5(["hacked gibson"]))), "booze.ext"], [$item(_templateObject203 || (_templateObject203 = _taggedTemplateLiteral5(["Source shades"]))), "goggles.ext"], [$item(_templateObject214 || (_templateObject214 = _taggedTemplateLiteral5(["Source terminal GRAM chip"]))), "gram.ext"], [$item(_templateObject223 || (_templateObject223 = _taggedTemplateLiteral5(["Source terminal PRAM chip"]))), "pram.ext"], [$item(_templateObject233 || (_templateObject233 = _taggedTemplateLiteral5(["Source terminal SPAM chip"]))), "spam.ext"], [$item(_templateObject243 || (_templateObject243 = _taggedTemplateLiteral5(["Source terminal CRAM chip"]))), "cram.ext"], [$item(_templateObject253 || (_templateObject253 = _taggedTemplateLiteral5(["Source terminal DRAM chip"]))), "dram.ext"], [$item(_templateObject263 || (_templateObject263 = _taggedTemplateLiteral5(["Source terminal TRAM chip"]))), "tram.ext"], [$item(_templateObject273 || (_templateObject273 = _taggedTemplateLiteral5(["software bug"]))), "familiar.ext"]]);
function extrude(item6) {
  var fileName = Items.get(item6);
  return fileName ? (0, import_kolmafia11.cliExecute)("terminal extrude ".concat(fileName)) : !1;
}
function getChips() {
  return get("sourceTerminalChips").split(",");
}
function getDigitizeUses() {
  return get("_sourceTerminalDigitizeUses");
}
function getDigitizeMonster() {
  return get("_sourceTerminalDigitizeMonster");
}
function getDigitizeMonsterCount() {
  return get("_sourceTerminalDigitizeMonsterCount");
}
function getMaximumDigitizeUses() {
  var chips = getChips();
  return 1 + (chips.includes("TRAM") ? 1 : 0) + (chips.includes("TRIGRAM") ? 1 : 0);
}
function getDigitizeUsesRemaining() {
  return getMaximumDigitizeUses() - getDigitizeUses();
}
function couldDigitize() {
  return getDigitizeUses() < getMaximumDigitizeUses();
}
function prepareDigitize() {
  return isCurrentSkill(Skills.Digitize) ? !0 : educate(Skills.Digitize);
}
function canDigitize() {
  return couldDigitize() && getSkills().includes(Skills.Digitize);
}
var Digitize = new Copier(function() {
  return couldDigitize();
}, function() {
  return prepareDigitize();
}, function() {
  return canDigitize();
}, function() {
  return getDigitizeMonster();
});
function getDuplicateUses() {
  return get("_sourceTerminalDuplicateUses");
}
function getEnhanceUses() {
  return get("_sourceTerminalEnhanceUses");
}
function getPortscanUses() {
  return get("_sourceTerminalPortscanUses");
}
function maximumDuplicateUses() {
  return (0, import_kolmafia11.myPath)() === import_kolmafia11.Path.get("The Source") ? 5 : 1;
}
function duplicateUsesRemaining() {
  return maximumDuplicateUses() - getDuplicateUses();
}
function maximumEnhanceUses() {
  return 1 + getChips().filter(function(chip) {
    return ["CRAM", "SCRAM"].includes(chip);
  }).length;
}
function enhanceUsesRemaining() {
  return maximumEnhanceUses() - getEnhanceUses();
}
function enhanceBuffDuration() {
  return 25 + get("sourceTerminalPram") * 5 + (getChips().includes("INGRAM") ? 25 : 0);
}
function enquiryBuffDuration() {
  return 50 + 10 * get("sourceTerminalGram") + (getChips().includes("DIAGRAM") ? 50 : 0);
}

// node_modules/libram/dist/resources/2016/Witchess.js
var Witchess_exports = {};
__export(Witchess_exports, {
  fightPiece: function() {
    return fightPiece;
  },
  fightsDone: function() {
    return fightsDone;
  },
  have: function() {
    return have5;
  },
  pieces: function() {
    return pieces;
  }
});
init_kolmafia_polyfill();
var import_kolmafia12 = require("kolmafia");
var _templateObject60;
function _taggedTemplateLiteral6(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item2 = $item(_templateObject60 || (_templateObject60 = _taggedTemplateLiteral6(["Witchess Set"])));
function have5() {
  return haveInCampground(item2);
}
function fightsDone() {
  return get("_witchessFights");
}
var pieces = import_kolmafia12.Monster.get(["Witchess Pawn", "Witchess Knight", "Witchess Bishop", "Witchess Rook", "Witchess Queen", "Witchess King", "Witchess Witch", "Witchess Ox"]);
function fightPiece(piece) {
  if (!pieces.includes(piece))
    throw new Error("That is not a valid piece.");
  if (!(0, import_kolmafia12.visitUrl)("campground.php?action=witchess").includes("whichchoice value=1181"))
    throw new Error("Failed to open Witchess.");
  if (!(0, import_kolmafia12.runChoice)(1).includes("whichchoice=1182"))
    throw new Error("Failed to visit shrink ray.");
  if (!(0, import_kolmafia12.visitUrl)("choice.php?option=1&pwd=".concat((0, import_kolmafia12.myHash)(), "&whichchoice=1182&piece=").concat(piece.id), !1).includes(piece.name))
    throw new Error("Failed to start fight.");
  for (var _len = arguments.length, combatParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
    combatParams[_key - 1] = arguments[_key];
  return import_kolmafia12.runCombat.apply(void 0, combatParams);
}

// node_modules/libram/dist/resources/2017/Horsery.js
var Horsery_exports = {};
__export(Horsery_exports, {
  changeHorse: function() {
    return changeHorse;
  },
  crazyHorseStats: function() {
    return crazyHorseStats;
  },
  current: function() {
    return current;
  },
  have: function() {
    return have6;
  }
});
init_kolmafia_polyfill();
var import_kolmafia13 = require("kolmafia");
function have6() {
  return get("horseryAvailable");
}
function current() {
  var horse = get("_horsery");
  return horse ? horse.split(" ")[0] : null;
}
function changeHorse(horse) {
  return horse === current() ? !0 : have6() ? ((0, import_kolmafia13.cliExecute)("horsery ".concat(horse)), current() === horse) : !1;
}
function crazyHorseStats() {
  return have6() ? (get("_horseryCrazyName") || (0, import_kolmafia13.visitUrl)("place.php?whichplace=town_right&action=town_horsery"), {
    "Mysticality Percent": Number(get("_horseryCrazyMys")),
    "Muscle Percent": Number(get("_horseryCrazyMus")),
    "Moxie Percent": Number(get("_horseryCrazyMox"))
  }) : {};
}

// node_modules/libram/dist/resources/2017/MummingTrunk.js
var MummingTrunk_exports = {};
__export(MummingTrunk_exports, {
  currentCostumes: function() {
    return currentCostumes;
  }
});
init_kolmafia_polyfill();
var import_kolmafia14 = require("kolmafia");
function _slicedToArray6(arr, i) {
  return _arrayWithHoles6(arr) || _iterableToArrayLimit6(arr, i) || _unsupportedIterableToArray8(arr, i) || _nonIterableRest6();
}
function _nonIterableRest6() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray8(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray8(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray8(o, minLen);
  }
}
function _arrayLikeToArray8(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit6(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles6(arr) {
  if (Array.isArray(arr))
    return arr;
}
var MUMMERY_MODS_PATTERN = /\[(\d*)\*fam\(([^)]*)\)/;
function currentCostumes() {
  return new Map(Object.entries((0, import_kolmafia14.splitModifiers)(get("_mummeryMods"))).map(function(_ref) {
    var _ref2 = _slicedToArray6(_ref, 2), modifier = _ref2[0], value = _ref2[1];
    if (!isNumericModifier(modifier))
      return null;
    var matcher = value.match(MUMMERY_MODS_PATTERN);
    return matcher ? [import_kolmafia14.Familiar.get(matcher[2]), [modifier, Number(matcher[1])]] : null;
  }).filter(notNull));
}

// node_modules/libram/dist/resources/2017/TunnelOfLove.js
var TunnelOfLove_exports = {};
__export(TunnelOfLove_exports, {
  LovEnamorang: function() {
    return LovEnamorang;
  },
  couldUseLoveEnamorang: function() {
    return couldUseLoveEnamorang;
  },
  fightAll: function() {
    return fightAll;
  },
  getLovEnamorangMonster: function() {
    return getLovEnamorangMonster;
  },
  getLovEnamorangUses: function() {
    return getLovEnamorangUses;
  },
  have: function() {
    return have7;
  },
  haveLovEnamorang: function() {
    return haveLovEnamorang;
  },
  isUsed: function() {
    return isUsed;
  }
});
init_kolmafia_polyfill();
var import_kolmafia15 = require("kolmafia");
var _templateObject61, _templateObject215;
function _taggedTemplateLiteral7(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function have7() {
  return get("loveTunnelAvailable");
}
function isUsed() {
  return get("_loveTunnelUsed");
}
function haveLovEnamorang() {
  return have($item(_templateObject61 || (_templateObject61 = _taggedTemplateLiteral7(["LOV Enamorang"]))));
}
function getLovEnamorangUses() {
  return get("_enamorangs");
}
function couldUseLoveEnamorang() {
  return !haveWandererCounter(Wanderer.Enamorang) && getLovEnamorangUses() < 3 && haveLovEnamorang();
}
function getLovEnamorangMonster() {
  return get("enamorangMonster");
}
var LovEnamorang = new Copier(function() {
  return couldUseLoveEnamorang();
}, null, function() {
  return couldUseLoveEnamorang();
}, function() {
  return getLovEnamorangMonster();
});
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
function fightAll(equipment, effect, extra) {
  withChoices({
    1222: 1,
    1223: 1,
    1224: equipmentChoice(equipment),
    1225: 1,
    1226: effectChoice(effect),
    1227: 1,
    1228: extraChoice(extra)
  }, function() {
    (0, import_kolmafia15.adv1)($location(_templateObject215 || (_templateObject215 = _taggedTemplateLiteral7(["The Tunnel of L.O.V.E."]))), 0, "");
  });
}

// node_modules/libram/dist/counter.js
var counter_exports = {};
__export(counter_exports, {
  exists: function() {
    return exists;
  },
  get: function() {
    return get3;
  },
  set: function() {
    return set;
  }
});
init_kolmafia_polyfill();
var import_kolmafia16 = require("kolmafia");
function get3(counter) {
  var value = (0, import_kolmafia16.getCounter)(counter);
  return value === -1 ? (0, import_kolmafia16.getCounters)(counter, -1, -1).trim() === "" ? 1 / 0 : -1 : value;
}
function exists(counter) {
  return (0, import_kolmafia16.getCounter)(counter) !== -1 || (0, import_kolmafia16.getCounters)(counter, -1, -1).trim() !== "";
}
function set(counter, duration) {
  return (0, import_kolmafia16.cliExecute)("counters add ".concat(duration, " ").concat(counter)), get3(counter) !== null;
}

// node_modules/libram/dist/resources/2018/SongBoom.js
var SongBoom_exports = {};
__export(SongBoom_exports, {
  dropProgress: function() {
    return dropProgress;
  },
  have: function() {
    return have8;
  },
  setSong: function() {
    return setSong;
  },
  song: function() {
    return song;
  },
  songBoomSongs: function() {
    return songBoomSongs;
  },
  songChangesLeft: function() {
    return songChangesLeft;
  }
});
init_kolmafia_polyfill();
var import_kolmafia17 = require("kolmafia");
var _templateObject64;
function _taggedTemplateLiteral8(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item3 = $item(_templateObject64 || (_templateObject64 = _taggedTemplateLiteral8(["SongBoom\u2122 BoomBox"])));
function have8() {
  return have(item3);
}
var keywords = {
  "Eye of the Giger": "spooky",
  "Food Vibrations": "food",
  "Remainin' Alive": "dr",
  "These Fists Were Made for Punchin'": "damage",
  "Total Eclipse of Your Meat": "meat"
}, songBoomSongs = new Set(Object.keys(keywords));
function song() {
  var stored = get("boomBoxSong");
  return songBoomSongs.has(stored) ? stored : null;
}
function songChangesLeft() {
  return get("_boomBoxSongsLeft");
}
function setSong(newSong) {
  if (song() !== newSong) {
    if (songChangesLeft() === 0)
      throw new Error("Out of song changes!");
    return (0, import_kolmafia17.cliExecute)("boombox ".concat(newSong ? keywords[newSong] : "none")), !0;
  } else
    return !1;
}
function dropProgress() {
  return get("_boomBoxFights");
}

// node_modules/libram/dist/resources/2019/BeachComb.js
var BeachComb_exports = {};
__export(BeachComb_exports, {
  available: function() {
    return available;
  },
  canComb: function() {
    return canComb;
  },
  comb: function() {
    return comb;
  },
  freeCombs: function() {
    return freeCombs;
  },
  have: function() {
    return have9;
  },
  head: function() {
    return head;
  },
  headAvailable: function() {
    return headAvailable;
  },
  headBuffs: function() {
    return headBuffs;
  },
  tideLevel: function() {
    return tideLevel;
  },
  tryHead: function() {
    return tryHead;
  }
});
init_kolmafia_polyfill();
var import_kolmafia18 = require("kolmafia");
var _templateObject65, _templateObject216, _templateObject313, _templateObject412, _templateObject511, _templateObject66, _templateObject74, _templateObject84, _templateObject94, _templateObject104, _templateObject114, _templateObject125, _templateObject135, _templateObject145, _templateObject155, _templateObject165, _templateObject175, _templateObject185, _templateObject194, _templateObject204, _templateObject217;
function _taggedTemplateLiteral9(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function have9() {
  return have(import_kolmafia18.Item.get("Beach Comb"));
}
function available() {
  return have9() || have(import_kolmafia18.Item.get("driftwood beach comb"));
}
var headBuffs = [$effect(_templateObject65 || (_templateObject65 = _taggedTemplateLiteral9(["Hot-Headed"]))), $effect(_templateObject216 || (_templateObject216 = _taggedTemplateLiteral9(["Cold as Nice"]))), $effect(_templateObject313 || (_templateObject313 = _taggedTemplateLiteral9(["A Brush with Grossness"]))), $effect(_templateObject412 || (_templateObject412 = _taggedTemplateLiteral9(["Does It Have a Skull In There??"]))), $effect(_templateObject511 || (_templateObject511 = _taggedTemplateLiteral9(["Oiled, Slick"]))), $effect(_templateObject66 || (_templateObject66 = _taggedTemplateLiteral9(["Lack of Body-Building"]))), $effect(_templateObject74 || (_templateObject74 = _taggedTemplateLiteral9(["We're All Made of Starfish"]))), $effect(_templateObject84 || (_templateObject84 = _taggedTemplateLiteral9(["Pomp & Circumsands"]))), $effect(_templateObject94 || (_templateObject94 = _taggedTemplateLiteral9(["Resting Beach Face"]))), $effect(_templateObject104 || (_templateObject104 = _taggedTemplateLiteral9(["Do I Know You From Somewhere?"]))), $effect(_templateObject114 || (_templateObject114 = _taggedTemplateLiteral9(["You Learned Something Maybe!"])))], head = {
  HOT: $effect(_templateObject125 || (_templateObject125 = _taggedTemplateLiteral9(["Hot-Headed"]))),
  COLD: $effect(_templateObject135 || (_templateObject135 = _taggedTemplateLiteral9(["Cold as Nice"]))),
  STENCH: $effect(_templateObject145 || (_templateObject145 = _taggedTemplateLiteral9(["A Brush with Grossness"]))),
  SPOOKY: $effect(_templateObject155 || (_templateObject155 = _taggedTemplateLiteral9(["Does It Have a Skull In There??"]))),
  SLEAZE: $effect(_templateObject165 || (_templateObject165 = _taggedTemplateLiteral9(["Oiled, Slick"]))),
  MUSCLE: $effect(_templateObject175 || (_templateObject175 = _taggedTemplateLiteral9(["Lack of Body-Building"]))),
  MYSTICALITY: $effect(_templateObject185 || (_templateObject185 = _taggedTemplateLiteral9(["We're All Made of Starfish"]))),
  INITIATIVE: $effect(_templateObject194 || (_templateObject194 = _taggedTemplateLiteral9(["Resting Beach Face"]))),
  FAMILIAR: $effect(_templateObject204 || (_templateObject204 = _taggedTemplateLiteral9(["Do I Know You From Somewhere?"]))),
  EXPERIENCE: $effect(_templateObject217 || (_templateObject217 = _taggedTemplateLiteral9(["You Learned Something Maybe!"])))
};
function tideLevel() {
  var day = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, import_kolmafia18.gamedayToInt)(), dayOfMonth = 1 + day % 8;
  return 4 - Math.abs(4 - dayOfMonth);
}
function canComb(tile) {
  return tile.row > tideLevel();
}
function freeCombs() {
  return available() ? clamp(11 - get("_freeBeachWalksUsed"), 0, 11) : 0;
}
function comb() {
  for (var _len = arguments.length, tiles = new Array(_len), _key = 0; _key < _len; _key++)
    tiles[_key] = arguments[_key];
  if (!(!available() || !tiles.length)) {
    for (var _i = 0, _tiles = tiles; _i < _tiles.length; _i++) {
      var tile = _tiles[_i];
      if (canComb(tile)) {
        var minute = tile.minute, row = tile.row, column = tile.column;
        (0, import_kolmafia18.cliExecute)("beach wander ".concat(minute)), (0, import_kolmafia18.cliExecute)("beach comb ".concat(row, " ").concat(column));
      }
    }
    (0, import_kolmafia18.handlingChoice)() && (0, import_kolmafia18.runChoice)(5);
  }
}
function headAvailable(target) {
  var effect = target instanceof import_kolmafia18.Effect ? target : head[target], headNumber = 1 + headBuffs.indexOf(effect);
  return (0, import_kolmafia18.getProperty)("beachHeadsUnlocked").split(",").includes(headNumber.toString()) && !(0, import_kolmafia18.getProperty)("_beachHeadsUsed").split(",").includes(headNumber.toString());
}
function tryHead(target) {
  var effect = target instanceof import_kolmafia18.Effect ? target : head[target];
  return !headBuffs.includes(effect) || !headAvailable(target) ? !1 : ((0, import_kolmafia18.cliExecute)(effect.default), have(effect));
}

// node_modules/libram/dist/resources/2019/CampAway.js
var CampAway_exports = {};
__export(CampAway_exports, {
  blowSmoke: function() {
    return blowSmoke;
  },
  canGaze: function() {
    return canGaze;
  },
  gaze: function() {
    return gaze;
  },
  getBuffsToday: function() {
    return getBuffsToday;
  },
  getCloudBuffsToday: function() {
    return getCloudBuffsToday;
  },
  getGazeBuff: function() {
    return getGazeBuff;
  },
  getSmileBuffsToday: function() {
    return getSmileBuffsToday;
  },
  have: function() {
    return have10;
  }
});
init_kolmafia_polyfill();
var import_kolmafia19 = require("kolmafia");
var _templateObject67;
function _taggedTemplateLiteral10(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function have10() {
  return get("getawayCampsiteUnlocked");
}
function getCloudBuffsToday() {
  return get("_campAwayCloudBuffs");
}
function getSmileBuffsToday() {
  return get("_campAwaySmileBuffs");
}
function getBuffsToday() {
  return getCloudBuffsToday() + getSmileBuffsToday();
}
function canGaze() {
  return getBuffsToday() < 4;
}
function gaze() {
  !canGaze() || (0, import_kolmafia19.visitUrl)("place.php?whichplace=campaway&action=campaway_sky");
}
function getGazeBuff() {
  var daycountToCheck = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, import_kolmafia19.daycount)(), buffSign = signIdToName((daycountToCheck + (0, import_kolmafia19.myPath)().id) % 9 + 1), effectName = [];
  return buffSign === (0, import_kolmafia19.mySign)() && effectName.push("Big"), effectName.push("Smile of the", buffSign), import_kolmafia19.Effect.get(effectName.join(" "));
}
function blowSmoke(messages) {
  var times = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, smoke = $item(_templateObject67 || (_templateObject67 = _taggedTemplateLiteral10(["campfire smoke"])));
  (0, import_kolmafia19.retrieveItem)(smoke, times);
  for (var i = 0; i < times; i++)
    withChoice(1394, "1&message=".concat(random(messages)), function() {
      (0, import_kolmafia19.use)(smoke);
    });
}

// node_modules/libram/dist/resources/2020/RetroCape.js
var RetroCape_exports = {};
__export(RetroCape_exports, {
  currentHero: function() {
    return currentHero;
  },
  currentMode: function() {
    return currentMode;
  },
  getModifier: function() {
    return getModifier;
  },
  have: function() {
    return have11;
  },
  set: function() {
    return set2;
  },
  tuneToSkill: function() {
    return tuneToSkill;
  }
});
init_kolmafia_polyfill();
var import_kolmafia20 = require("kolmafia");
var _templateObject68, _templateObject218, _templateObject314, _templateObject413, _templateObject512, _templateObject69, _templateObject75;
function _toConsumableArray5(arr) {
  return _arrayWithoutHoles5(arr) || _iterableToArray5(arr) || _unsupportedIterableToArray9(arr) || _nonIterableSpread5();
}
function _nonIterableSpread5() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray9(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray9(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray9(o, minLen);
  }
}
function _iterableToArray5(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles5(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray9(arr);
}
function _arrayLikeToArray9(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys3(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread3(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys3(Object(source), !0).forEach(function(key) {
      _defineProperty6(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys3(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty6(obj, key, value) {
  return key = _toPropertyKey7(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey7(arg) {
  var key = _toPrimitive7(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive7(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral11(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item4 = $item(_templateObject68 || (_templateObject68 = _taggedTemplateLiteral11(["unwrapped knock-off retro superhero cape"])));
function have11() {
  return have(item4);
}
var Heroes = {
  vampire: {
    "Muscle Percent": 30,
    "Maximum HP": 50
  },
  heck: {
    "Mysticality Percent": 30,
    "Maximum MP": 50
  },
  robot: {
    "Moxie Percent": 30,
    "Maximum HP": 25,
    "Maximum MP": 25
  }
}, currentHero = function() {
  return get("retroCapeSuperhero");
}, currentMode = function() {
  return get("retroCapeWashingInstructions");
}, modeMap = /* @__PURE__ */ new Map([[["vampire", "hold"], {
  "Hot Resistance": 3,
  "Cold Resistance": 3,
  "Stench Resistance": 3,
  "Spooky Resistance": 3,
  "Sleaze Resistance": 3
}], [["vampire", "thrill"], {
  "Muscle Experience": 3
}], [["vampire", "kiss"], {
  Skill: "Smooch of the Daywalker"
}], [["vampire", "kill"], {
  Skill: "Slay the Dead"
}], [["heck", "thrill"], {
  "Mysticality Experience": 3
}], [["heck", "kiss"], {
  Skill: "Unleash the Devil's Kiss"
}], [["robot", "hold"], {
  Skill: "Deploy Robo-Handcuffs"
}], [["robot", "thrill"], {
  "Moxie Experience": 3
}], [["robot", "kiss"], {
  Skill: "Blow a Robo-Kiss"
}], [["robot", "kill"], {
  Skill: "Precision Shot"
}]]);
function set2(hero, mode) {
  return have11() ? currentHero() === hero && currentMode() === mode ? !0 : ((0, import_kolmafia20.cliExecute)("retrocape ".concat(hero, " ").concat(mode)), currentHero() === hero && currentMode() === mode) : !1;
}
function getModifier() {
  var _modeMap$get, hero = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : currentHero(), mode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : currentMode();
  return _objectSpread3(_objectSpread3({}, Heroes[hero]), (_modeMap$get = modeMap.get([hero, mode])) !== null && _modeMap$get !== void 0 ? _modeMap$get : {});
}
var skills = /* @__PURE__ */ new Map([[$skill(_templateObject218 || (_templateObject218 = _taggedTemplateLiteral11(["Smooch of the Daywalker"]))), ["vampire", "kiss"]], [$skill(_templateObject314 || (_templateObject314 = _taggedTemplateLiteral11(["Slay the Dead"]))), ["vampire", "kill"]], [$skill(_templateObject413 || (_templateObject413 = _taggedTemplateLiteral11(["Unleash the Devil's Kiss"]))), ["heck", "kiss"]], [$skill(_templateObject512 || (_templateObject512 = _taggedTemplateLiteral11(["Deploy Robo-Handcuffs"]))), ["robot", "hold"]], [$skill(_templateObject69 || (_templateObject69 = _taggedTemplateLiteral11(["Blow a Robo-Kiss"]))), ["robot", "kiss"]], [$skill(_templateObject75 || (_templateObject75 = _taggedTemplateLiteral11(["Precision Shot"]))), ["robot", "kill"]]]);
function tuneToSkill(skill) {
  var setting = skills.get(skill);
  return !setting || !have11() ? !1 : (set2.apply(void 0, _toConsumableArray5(setting)), [currentHero(), currentMode()].every(function(element, index) {
    return element === setting[index];
  }));
}

// node_modules/libram/dist/resources/2021/DaylightShavings.js
var DaylightShavings_exports = {};
__export(DaylightShavings_exports, {
  buffAvailable: function() {
    return buffAvailable;
  },
  buffCycle: function() {
    return buffCycle;
  },
  buffs: function() {
    return buffs;
  },
  buffsUntil: function() {
    return buffsUntil;
  },
  hasBuff: function() {
    return hasBuff;
  },
  have: function() {
    return have12;
  },
  nextBuff: function() {
    return nextBuff;
  }
});
init_kolmafia_polyfill();
var import_kolmafia21 = require("kolmafia");
var _templateObject70, _templateObject219;
function _taggedTemplateLiteral12(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var helmet = $item(_templateObject70 || (_templateObject70 = _taggedTemplateLiteral12(["Daylight Shavings Helmet"])));
function have12() {
  return have(helmet);
}
var buffs = $effects(_templateObject219 || (_templateObject219 = _taggedTemplateLiteral12(["Spectacle Moustache, Toiletbrush Moustache, Barbell Moustache, Grizzly Beard, Surrealist's Moustache, Musician's Musician's Moustache, Gull-Wing Moustache, Space Warlord's Beard, Pointy Wizard Beard, Cowboy Stache, Friendly Chops"])));
function hasBuff() {
  return buffs.some(function(buff) {
    return have(buff);
  });
}
function buffAvailable() {
  return !buffs.some(function(buff) {
    return have(buff, 2);
  });
}
function buffCycle() {
  var playerclass = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0, import_kolmafia21.myClass)(), cycle = tuple(import_kolmafia21.Effect.none, import_kolmafia21.Effect.none, import_kolmafia21.Effect.none, import_kolmafia21.Effect.none, import_kolmafia21.Effect.none, import_kolmafia21.Effect.none, import_kolmafia21.Effect.none, import_kolmafia21.Effect.none, import_kolmafia21.Effect.none, import_kolmafia21.Effect.none, import_kolmafia21.Effect.none);
  if (playerclass.id <= 0)
    return cycle;
  for (var id = playerclass.id, seed = id > 6 ? id % 6 + 1 : id, i = 1; i < 12; i++) {
    var index = i * seed % 11;
    cycle[i - 1] = buffs[index];
  }
  return cycle;
}
function nextBuff() {
  var currentBuff = (0, import_kolmafia21.toEffect)(get("lastBeardBuff").toFixed(0)), cycle = buffCycle(), index = cycle.indexOf(currentBuff), newIndex = (1 + index) % 11;
  return cycle[newIndex];
}
function buffsUntil(buff) {
  if (!buffs.includes(buff))
    return null;
  var currentIndex = buffs.indexOf(nextBuff()) - 1, newIndex = buffs.indexOf(buff), diff = (newIndex - currentIndex) % 11;
  return diff === 0 ? 11 : diff;
}

// node_modules/libram/dist/resources/2022/AutumnAton.js
var AutumnAton_exports = {};
__export(AutumnAton_exports, {
  available: function() {
    return available2;
  },
  availableLocations: function() {
    return availableLocations;
  },
  currentUpgrades: function() {
    return currentUpgrades;
  },
  currentlyIn: function() {
    return currentlyIn;
  },
  getUniques: function() {
    return getUniques;
  },
  have: function() {
    return have13;
  },
  legs: function() {
    return legs;
  },
  possibleUpgrades: function() {
    return possibleUpgrades;
  },
  seasonalItems: function() {
    return seasonalItems;
  },
  sendTo: function() {
    return sendTo;
  },
  turnsForQuest: function() {
    return turnsForQuest;
  },
  turnsLeft: function() {
    return turnsLeft;
  },
  upgrade: function() {
    return upgrade;
  },
  visualAcuity: function() {
    return visualAcuity;
  },
  zoneItems: function() {
    return zoneItems;
  }
});
init_kolmafia_polyfill();
var import_kolmafia22 = require("kolmafia");
var _templateObject71, _templateObject220, _templateObject315, _templateObject414, _templateObject513, _templateObject610, _templateObject76, _templateObject85, _templateObject95;
function _taggedTemplateLiteral13(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var item5 = import_kolmafia22.Item.get("autumn-aton");
function available2() {
  return (0, import_kolmafia22.availableAmount)(item5) > 0;
}
function have13() {
  return get("hasAutumnaton") || available2();
}
function checkLocations(html) {
  return (0, import_kolmafia22.xpath)(html, '//select[@name="heythereprogrammer"]//option[position()>1]/@value').map(function(id) {
    return (0, import_kolmafia22.toLocation)(Number(id));
  });
}
function currentlyIn() {
  return get("autumnatonQuestLocation");
}
function validateLocation(list, location) {
  return list.some(function(loc) {
    return loc.id === location.id;
  });
}
function sendTo(target) {
  var upgrade2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  if (!available2())
    return null;
  var pageHtml = directlyUse(item5);
  upgrade2 && (0, import_kolmafia22.availableChoiceOptions)()[1] && (0, import_kolmafia22.runChoice)(1);
  var locationsAvailable = checkLocations(pageHtml), location = target instanceof import_kolmafia22.Location ? target : Array.isArray(target) ? target.find(function(l) {
    return validateLocation(locationsAvailable, l);
  }) : target(locationsAvailable);
  return !location || !validateLocation(locationsAvailable, location) ? null : ((0, import_kolmafia22.handlingChoice)() || directlyUse(item5), (0, import_kolmafia22.runChoice)(2, "heythereprogrammer=".concat(location.id)), (0, import_kolmafia22.handlingChoice)() && (0, import_kolmafia22.visitUrl)("main.php"), location);
}
function upgrade() {
  directlyUse(item5);
  var canUpgrade = (0, import_kolmafia22.availableChoiceOptions)()[1] !== void 0;
  return canUpgrade && (0, import_kolmafia22.runChoice)(1), (0, import_kolmafia22.visitUrl)("main.php"), canUpgrade;
}
function availableLocations() {
  if (!available2())
    return [];
  var pageHtml = directlyUse(item5);
  return (0, import_kolmafia22.visitUrl)("main.php"), checkLocations(pageHtml);
}
var possibleUpgrades = ["leftarm1", "leftleg1", "rightarm1", "rightleg1", "base_blackhat", "cowcatcher", "periscope", "radardish", "dualexhaust"];
function currentUpgrades() {
  return get("autumnatonUpgrades").split(",");
}
function turnsLeft() {
  return get("autumnatonQuestTurn") - (0, import_kolmafia22.totalTurnsPlayed)();
}
function legs() {
  return currentUpgrades().filter(function(u) {
    return u.includes("leg");
  }).length;
}
function turnsForQuest() {
  return 11 * Math.max(1, get("_autumnatonQuests") - legs());
}
function visualAcuity() {
  var visualUpgrades = ["periscope", "radardish"];
  return 1 + currentUpgrades().filter(function(u) {
    return visualUpgrades.includes(u);
  }).length;
}
function zoneItems() {
  return 3 + currentUpgrades().filter(function(u) {
    return u.includes("arm");
  }).length;
}
function seasonalItems() {
  return currentUpgrades().includes("cowcatcher") ? 2 : 1;
}
var difficulties = ["low", "mid", "high"], UNIQUES = {
  outdoor: {
    low: {
      index: 4,
      item: $item(_templateObject71 || (_templateObject71 = _taggedTemplateLiteral13(["autumn leaf"])))
    },
    mid: {
      index: 2,
      item: $item(_templateObject220 || (_templateObject220 = _taggedTemplateLiteral13(["autumn debris shield"])))
    },
    high: {
      index: 6,
      item: $item(_templateObject315 || (_templateObject315 = _taggedTemplateLiteral13(["autumn leaf pendant"])))
    }
  },
  indoor: {
    low: {
      index: 0,
      item: $item(_templateObject414 || (_templateObject414 = _taggedTemplateLiteral13(["AutumnFest ale"])))
    },
    mid: {
      index: 3,
      item: $item(_templateObject513 || (_templateObject513 = _taggedTemplateLiteral13(["autumn-spice donut"])))
    },
    high: {
      index: 7,
      item: $item(_templateObject610 || (_templateObject610 = _taggedTemplateLiteral13(["autumn breeze"])))
    }
  },
  underground: {
    low: {
      index: 1,
      item: $item(_templateObject76 || (_templateObject76 = _taggedTemplateLiteral13(["autumn sweater-weather sweater"])))
    },
    mid: {
      index: 5,
      item: $item(_templateObject85 || (_templateObject85 = _taggedTemplateLiteral13(["autumn dollar"])))
    },
    high: {
      index: 8,
      item: $item(_templateObject95 || (_templateObject95 = _taggedTemplateLiteral13(["autumn years wisdom"])))
    }
  }
};
function getUniques(location) {
  var env = location.environment, difficulty = location.difficultyLevel;
  if (arrayContains(env, ["outdoor", "indoor", "underground"]) && arrayContains(difficulty, difficulties)) {
    var _UNIQUES$env$difficul = UNIQUES[env][difficulty], index = _UNIQUES$env$difficul.index, _item = _UNIQUES$env$difficul.item;
    return {
      upgrade: possibleUpgrades[index],
      item: _item
    };
  }
  return null;
}

// node_modules/libram/dist/resources/2022/CombatLoversLocket.js
var CombatLoversLocket_exports = {};
__export(CombatLoversLocket_exports, {
  availableLocketMonsters: function() {
    return availableLocketMonsters;
  },
  canReminisce: function() {
    return canReminisce;
  },
  findMonster: function() {
    return findMonster;
  },
  have: function() {
    return have14;
  },
  monstersReminisced: function() {
    return monstersReminisced;
  },
  reminisce: function() {
    return reminisce;
  },
  reminiscesLeft: function() {
    return reminiscesLeft;
  },
  unlockedLocketMonsters: function() {
    return unlockedLocketMonsters;
  }
});
init_kolmafia_polyfill();
var import_kolmafia23 = require("kolmafia");
var _templateObject77;
function _slicedToArray7(arr, i) {
  return _arrayWithHoles7(arr) || _iterableToArrayLimit7(arr, i) || _unsupportedIterableToArray10(arr, i) || _nonIterableRest7();
}
function _nonIterableRest7() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray10(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray10(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray10(o, minLen);
  }
}
function _arrayLikeToArray10(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit7(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles7(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral14(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var locket = $item(_templateObject77 || (_templateObject77 = _taggedTemplateLiteral14(["combat lover's locket"])));
function have14() {
  return have(locket);
}
function availableLocketMonsters() {
  return reminiscesLeft() === 0 ? [] : Object.entries((0, import_kolmafia23.getLocketMonsters)()).filter(function(_ref) {
    var _ref2 = _slicedToArray7(_ref, 2), unused = _ref2[1];
    return unused;
  }).map(function(_ref3) {
    var _ref4 = _slicedToArray7(_ref3, 1), name = _ref4[0];
    return (0, import_kolmafia23.toMonster)(name);
  });
}
function unlockedLocketMonsters() {
  return Object.entries((0, import_kolmafia23.getLocketMonsters)()).map(function(_ref5) {
    var _ref6 = _slicedToArray7(_ref5, 1), name = _ref6[0];
    return (0, import_kolmafia23.toMonster)(name);
  });
}
function parseLocketProperty() {
  return get("_locketMonstersFought").split(",").filter(function(id) {
    return id.trim().length > 0;
  });
}
function reminiscesLeft() {
  return have14() ? clamp(3 - parseLocketProperty().length, 0, 3) : 0;
}
function monstersReminisced() {
  return parseLocketProperty().map(function(id) {
    return (0, import_kolmafia23.toMonster)(id);
  });
}
function reminisce(monster) {
  if (!have14() || reminiscesLeft() === 0 || !(0, import_kolmafia23.getLocketMonsters)()[monster.name])
    return !1;
  (0, import_kolmafia23.cliExecute)("reminisce ".concat(monster));
  for (var _len = arguments.length, combatParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
    combatParams[_key - 1] = arguments[_key];
  return import_kolmafia23.runCombat.apply(void 0, combatParams), monstersReminisced().includes(monster);
}
function findMonster(criteria) {
  var value = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
    return 1;
  };
  if (!have14() || reminiscesLeft() === 0)
    return null;
  var options = availableLocketMonsters().filter(criteria);
  return options.length ? maxBy(options, value) : null;
}
function canReminisce(monster) {
  return have14() && reminiscesLeft() > 0 && Boolean((0, import_kolmafia23.getLocketMonsters)()["".concat(monster)]);
}

// node_modules/libram/dist/resources/2024/AprilingBandHelmet.js
var AprilingBandHelmet_exports = {};
__export(AprilingBandHelmet_exports, {
  INSTRUMENTS: function() {
    return INSTRUMENTS;
  },
  INSTRUMENT_ITEMS: function() {
    return INSTRUMENT_ITEMS;
  },
  MARCHING_SONGS: function() {
    return MARCHING_SONGS;
  },
  MARCHING_SONG_EFFECTS: function() {
    return MARCHING_SONG_EFFECTS;
  },
  canChangeSong: function() {
    return canChangeSong;
  },
  canJoinSection: function() {
    return canJoinSection;
  },
  canPlay: function() {
    return canPlay;
  },
  changeSong: function() {
    return changeSong;
  },
  conduct: function() {
    return conduct;
  },
  have: function() {
    return have15;
  },
  joinSection: function() {
    return joinSection;
  },
  play: function() {
    return play;
  }
});
init_kolmafia_polyfill();
var import_kolmafia24 = require("kolmafia");
var _templateObject78;
function _slicedToArray8(arr, i) {
  return _arrayWithHoles8(arr) || _iterableToArrayLimit8(arr, i) || _unsupportedIterableToArray11(arr, i) || _nonIterableRest8();
}
function _nonIterableRest8() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray11(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray11(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray11(o, minLen);
  }
}
function _arrayLikeToArray11(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit8(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles8(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral15(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var helmet2 = $item(_templateObject78 || (_templateObject78 = _taggedTemplateLiteral15(["Apriling band helmet"])));
function have15() {
  return have(helmet2);
}
var MARCHING_SONGS = Object.freeze(["Apriling Band Patrol Beat", "Apriling Band Battle Cadence", "Apriling Band Celebration Bop"]), MARCHING_SONG_EFFECTS = Object.freeze(MARCHING_SONGS.map(function(song2) {
  return (0, import_kolmafia24.toEffect)(song2);
})), INSTRUMENTS = Object.freeze(["Apriling band saxophone", "Apriling band quad tom", "Apriling band tuba", "Apriling band staff", "Apriling band piccolo"]), INSTRUMENT_ITEMS = Object.freeze(INSTRUMENTS.map(function(instrument) {
  return (0, import_kolmafia24.toItem)(instrument);
})), visitConduct = function() {
  return (0, import_kolmafia24.visitUrl)("inventory.php?pwd&action=apriling");
};
function canJoinSection() {
  return have15() && get("_aprilBandInstruments") < 2;
}
function makeConductFunction(mafiaClass, canDo, set3, offset) {
  return function(input) {
    if (!canDo())
      return !1;
    var _ref = typeof input == "string" ? [input, mafiaClass.get(input)] : [input.name, input], _ref2 = _slicedToArray8(_ref, 2), name = _ref2[0], instance = _ref2[1];
    if (have(instance))
      return !0;
    var key = set3.indexOf(name);
    return key === -1 ? !1 : (visitConduct(), (0, import_kolmafia24.runChoice)(key + offset), (0, import_kolmafia24.runChoice)(9), have(instance));
  };
}
var joinSection = makeConductFunction(import_kolmafia24.Item, canJoinSection, INSTRUMENTS, 4);
function canChangeSong() {
  return have15() && get("nextAprilBandTurn") <= (0, import_kolmafia24.totalTurnsPlayed)();
}
var changeSong = makeConductFunction(import_kolmafia24.Effect, canChangeSong, MARCHING_SONGS, 1);
function conduct(result) {
  return result instanceof import_kolmafia24.Item || arrayContains(result, INSTRUMENTS) ? joinSection(result) : changeSong(result);
}
function play(instrument) {
  var acquire = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, item6 = instrument instanceof import_kolmafia24.Item ? instrument : import_kolmafia24.Item.get(instrument);
  if (!canPlay(instrument, acquire))
    return !1;
  acquire && !have(item6) && joinSection(item6);
  var currentUsesRemaining = item6.dailyusesleft;
  return (0, import_kolmafia24.visitUrl)("inventory.php?pwd=".concat((0, import_kolmafia24.myHash)(), "&iid=").concat(item6.id, "&action=aprilplay"), !1), item6.dailyusesleft !== currentUsesRemaining;
}
function canPlay(instrument) {
  var acquire = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (!have15())
    return !1;
  var item6 = instrument instanceof import_kolmafia24.Item ? instrument : import_kolmafia24.Item.get(instrument);
  return !(!have(item6) && (!acquire || !canJoinSection()) || item6.dailyusesleft <= 0);
}

// node_modules/libram/dist/resources/2025/ToyCupidBow.js
var ToyCupidBow_exports = {};
__export(ToyCupidBow_exports, {
  currentFamiliar: function() {
    return currentFamiliar;
  },
  doneToday: function() {
    return doneToday;
  },
  familiarsToday: function() {
    return familiarsToday;
  },
  have: function() {
    return have16;
  },
  turnsLeft: function() {
    return turnsLeft2;
  }
});
init_kolmafia_polyfill();
var import_kolmafia25 = require("kolmafia");
var _templateObject79;
function _taggedTemplateLiteral16(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function have16() {
  return have($item(_templateObject79 || (_templateObject79 = _taggedTemplateLiteral16(["toy Cupid bow"]))));
}
function currentFamiliar() {
  return get("cupidBowLastFamiliar");
}
function familiarsToday() {
  return get("_cupidBowFamiliars").split(";").map(function(id) {
    return (0, import_kolmafia25.toFamiliar)(Number(id));
  });
}
function doneToday(familiar2) {
  return RegExp("(?:^|;)".concat(familiar2.id, "(?:$|;)")).test(get("_cupidBowFamiliars"));
}
function turnsLeft2() {
  var familiar2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : currentFamiliar();
  return familiarsToday().includes(familiar2) ? 1 / 0 : currentFamiliar() !== familiar2 ? 5 : clamp(5 - get("cupidBowFights"), 1, 5);
}

// node_modules/libram/dist/resources/2025/Leprecondo.js
var Leprecondo_exports = {};
__export(Leprecondo_exports, {
  FURNITURE_PIECES: function() {
    return FURNITURE_PIECES;
  },
  Furniture: function() {
    return Furniture;
  },
  NEEDS: function() {
    return NEEDS;
  },
  currentNeed: function() {
    return currentNeed;
  },
  discoveredFurniture: function() {
    return discoveredFurniture;
  },
  furnitureBonuses: function() {
    return furnitureBonuses;
  },
  furnitureDiscoveredToday: function() {
    return furnitureDiscoveredToday;
  },
  getStats: function() {
    return getStats;
  },
  have: function() {
    return have17;
  },
  installedFurniture: function() {
    return installedFurniture;
  },
  lastNeedChange: function() {
    return lastNeedChange;
  },
  needOrder: function() {
    return needOrder;
  },
  rearrangesRemaining: function() {
    return rearrangesRemaining;
  },
  setFurniture: function() {
    return setFurniture;
  }
});
init_kolmafia_polyfill();
var import_kolmafia26 = require("kolmafia");
var _templateObject80, _templateObject221, _templateObject316, _templateObject415, _templateObject514, _templateObject611, _templateObject710, _templateObject86, _templateObject96, _templateObject105, _templateObject115, _templateObject126, _templateObject136, _templateObject146, _templateObject156, _templateObject166, _templateObject176, _templateObject186, _templateObject195, _templateObject205, _templateObject2110, _templateObject224, _templateObject234, _templateObject244, _templateObject254, _templateObject264, _templateObject274, _templateObject283, _templateObject293, _templateObject303, _templateObject317, _templateObject323, _templateObject333, _templateObject343, _templateObject353, _templateObject363, _templateObject373, _templateObject382, _templateObject392, _templateObject402, _templateObject416, _templateObject422, _templateObject432, _templateObject442;
function ownKeys4(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread4(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys4(Object(source), !0).forEach(function(key) {
      _defineProperty7(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys4(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty7(obj, key, value) {
  return key = _toPropertyKey8(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey8(arg) {
  var key = _toPrimitive8(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive8(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral17(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function have17() {
  return have($item(_templateObject80 || (_templateObject80 = _taggedTemplateLiteral17(["Leprecondo"]))));
}
var NEEDS = Object.freeze(["exercise", "mental stimulation", "dumb entertainment", "food", "booze", "sleep"]), FURNITURE_PIECES = Object.freeze(["empty", "buckets of concrete", "thrift store oil painting", "boxes of old comic books", "second-hand hot plate", "beer cooler", "free mattress", "gigantic chess set", "UltraDance karaoke machine", "cupcake treadmill", "beer pong table", "padded weight bench", "internet-connected laptop", "sous vide laboratory", "programmable blender", "sensory deprivation tank", "fruit-smashing robot", "ManCave\u2122 sports bar set", "couch and flatscreen", "kegerator", "fine upholstered dining set", "whiskeybed", "high-end home workout system", "complete classics library", "ultimate retro game console", "Omnipot", "fully-stocked wet bar", "four-poster bed"]), Furniture = Object.freeze({
  "beer cooler": {
    booze: $items(_templateObject221 || (_templateObject221 = _taggedTemplateLiteral17(['beer bomb, bloody beer, ice-cold fotie, ice-cold Sir Schlitz, ice-cold Willer, overpriced "imported" beer, plain old beer'])))
  },
  "beer pong table": {
    booze: $items(_templateObject316 || (_templateObject316 = _taggedTemplateLiteral17(['beer bomb, bloody beer, ice-cold fotie, ice-cold Sir Schlitz, ice-cold Willer, overpriced "imported" beer, plain old beer']))),
    exercise: $item(_templateObject415 || (_templateObject415 = _taggedTemplateLiteral17(["table tennis ball"])))
  },
  "boxes of old comic books": {
    "dumb entertainment": {
      effect: $effect(_templateObject514 || (_templateObject514 = _taggedTemplateLiteral17(["Wasting Time"]))),
      duration: 10
    }
  },
  "buckets of concrete": {
    exercise: {
      effect: $effect(_templateObject611 || (_templateObject611 = _taggedTemplateLiteral17(["Gym Bros"]))),
      duration: 10
    }
  },
  "complete classics library": {
    "mental stimulation": $item(_templateObject710 || (_templateObject710 = _taggedTemplateLiteral17(["leprechaun antidepressant pill"])))
  },
  "couch and flatscreen": {
    "dumb entertainment": {
      effect: $effect(_templateObject86 || (_templateObject86 = _taggedTemplateLiteral17(["Your Days Are Numbed"]))),
      duration: 10
    },
    sleep: {
      effect: $effect(_templateObject96 || (_templateObject96 = _taggedTemplateLiteral17(["Good Night's Sleep"]))),
      duration: 10
    }
  },
  "cupcake treadmill": {
    exercise: {
      effect: $effect(_templateObject105 || (_templateObject105 = _taggedTemplateLiteral17(["Your Days Are Numbed"]))),
      duration: 10
    },
    food: $item(_templateObject115 || (_templateObject115 = _taggedTemplateLiteral17(["standard-issue cupcake"])))
  },
  "fine upholstered dining set": {
    food: $items(_templateObject126 || (_templateObject126 = _taggedTemplateLiteral17(["boring spaghetti, delicious noodles, goat cheese pizza, sausage pizza, spicy bean burrito, spicy noodles"]))),
    sleep: {
      effect: $effect(_templateObject136 || (_templateObject136 = _taggedTemplateLiteral17(["Sur La Table"]))),
      duration: 10
    }
  },
  empty: {},
  "four-poster bed": {
    sleep: {
      effect: $effect(_templateObject146 || (_templateObject146 = _taggedTemplateLiteral17(["Spacious Night's Sleep"]))),
      duration: 10
    }
  },
  "free mattress": {
    sleep: {
      effect: $effect(_templateObject156 || (_templateObject156 = _taggedTemplateLiteral17(["Good Night's Sleep"]))),
      duration: 10
    }
  },
  "fruit-smashing robot": {
    "dumb entertainment": {
      effect: $effect(_templateObject166 || (_templateObject166 = _taggedTemplateLiteral17(["You Might Have Gotten Wet"]))),
      duration: 10
    },
    food: $items(_templateObject176 || (_templateObject176 = _taggedTemplateLiteral17(["cherry, cranberries, grapefruit, grapes, kiwi, kumquat, lemon, lime, orange, papaya, raspberry, strawberry, tangerine"])))
  },
  "fully-stocked wet bar": {
    booze: $items(_templateObject186 || (_templateObject186 = _taggedTemplateLiteral17(["Divine sidecar, prussian cathouse sidecar, tangarita sidecar"])))
  },
  "gigantic chess set": {
    exercise: {
      effect: $effect(_templateObject195 || (_templateObject195 = _taggedTemplateLiteral17(["Work Out Smarter, Not Harder"]))),
      duration: 10
    },
    "mental stimulation": {
      effect: $effect(_templateObject205 || (_templateObject205 = _taggedTemplateLiteral17(["Well Stimulated"]))),
      duration: 10
    }
  },
  "high-end home workout system": {
    exercise: $item(_templateObject2110 || (_templateObject2110 = _taggedTemplateLiteral17(["scoop of pre-workout powder"])))
  },
  "internet-connected laptop": {
    "dumb entertainment": {
      effect: $effect(_templateObject224 || (_templateObject224 = _taggedTemplateLiteral17(["Wasting Time"]))),
      duration: 10
    },
    "mental stimulation": $item(_templateObject234 || (_templateObject234 = _taggedTemplateLiteral17(["crafting plans"])))
  },
  kegerator: {
    booze: $item(_templateObject244 || (_templateObject244 = _taggedTemplateLiteral17(["pint of Leprechaun Stout"]))),
    food: $items(_templateObject254 || (_templateObject254 = _taggedTemplateLiteral17(["bean burrito, plain pizza, spicy mushroom quesadilla, tofu casserole, Trollhouse cookies"])))
  },
  "ManCave\u2122 sports bar set": {
    booze: $items(_templateObject264 || (_templateObject264 = _taggedTemplateLiteral17(["melted Jell-o shot, shot of blackberry schnapps, shot of nepenthe schnapps, shot of peach schnapps, shot of pear schnapps, shot of rotgut"]))),
    "dumb entertainment": $item(_templateObject274 || (_templateObject274 = _taggedTemplateLiteral17(["bar dart"])))
  },
  Omnipot: {
    food: $items(_templateObject283 || (_templateObject283 = _taggedTemplateLiteral17(["Heck ramen, incredible mini-pizza, small beer brat, tiny burrito, tiny peach pie, savoy truffle, white chocolate chip brownies"])))
  },
  "padded weight bench": {
    exercise: {
      effect: $effect(_templateObject293 || (_templateObject293 = _taggedTemplateLiteral17(["Gym Bros"]))),
      duration: 10
    },
    sleep: {
      effect: $effect(_templateObject303 || (_templateObject303 = _taggedTemplateLiteral17(["Tired Muscles"]))),
      duration: 10
    }
  },
  "programmable blender": {
    booze: $items(_templateObject317 || (_templateObject317 = _taggedTemplateLiteral17(["eggnog, extra-spicy bloody mary, grog, white lightning"]))),
    "mental stimulation": {
      effect: $effect(_templateObject323 || (_templateObject323 = _taggedTemplateLiteral17(["Counter Intelligence"]))),
      duration: 10
    }
  },
  "second-hand hot plate": {
    food: $items(_templateObject333 || (_templateObject333 = _taggedTemplateLiteral17(["bean burrito, chorizo taco, plain pizza, spicy mushroom quesadilla, tofu casserole, Trollhouse cookies"])))
  },
  "sensory deprivation tank": {
    "mental stimulation": {
      effect: $effect(_templateObject343 || (_templateObject343 = _taggedTemplateLiteral17(["Alone with Your Thoughts"]))),
      duration: 10
    },
    sleep: {
      effect: $effect(_templateObject353 || (_templateObject353 = _taggedTemplateLiteral17(["Quiet Night's Sleep"]))),
      duration: 10
    }
  },
  "sous vide laboratory": {
    food: $items(_templateObject363 || (_templateObject363 = _taggedTemplateLiteral17(["tiny burrito, black forest ham, fishy fish, ham steak, Knoll stir-fry, spooky stir-fry"]))),
    "mental stimulation": {
      effect: $effect(_templateObject373 || (_templateObject373 = _taggedTemplateLiteral17(["Counter Intelligence"]))),
      duration: 10
    }
  },
  "thrift store oil painting": {
    "mental stimulation": {
      effect: $effect(_templateObject382 || (_templateObject382 = _taggedTemplateLiteral17(["Well Stimulated"]))),
      duration: 10
    }
  },
  "ultimate retro game console": {
    "dumb entertainment": $item(_templateObject392 || (_templateObject392 = _taggedTemplateLiteral17(["phosphor traces"])))
  },
  "UltraDance karaoke machine": {
    "dumb entertainment": {
      effect: $effect(_templateObject402 || (_templateObject402 = _taggedTemplateLiteral17(["Your Days Are Numbed"]))),
      duration: 10
    },
    exercise: {
      effect: $effect(_templateObject416 || (_templateObject416 = _taggedTemplateLiteral17(["Vicarious Sweat"]))),
      duration: 10
    }
  },
  whiskeybed: {
    booze: $items(_templateObject422 || (_templateObject422 = _taggedTemplateLiteral17(["Divine sidecar, lumbering jack, old-fashioned, whiskey and cola, whiskey and soda, whiskey bittersweet, whiskey sour"]))),
    sleep: {
      effect: $effect(_templateObject432 || (_templateObject432 = _taggedTemplateLiteral17(["Moist Night's Sleep"]))),
      duration: 10
    }
  }
});
function rearrangesRemaining() {
  return clamp(3 - get("_leprecondoRearrangements"), 0, 3);
}
function currentNeed() {
  return get("leprecondoCurrentNeed");
}
function needOrder() {
  return get("leprecondoNeedOrder").split(",");
}
function furnitureDiscoveredToday() {
  return get("_leprecondoFurniture");
}
function lastNeedChange() {
  return (0, import_kolmafia26.turnsPlayed)() - get("leprecondoLastNeedChange");
}
function getStats(furniture) {
  return Furniture[furniture];
}
function discoveredFurniture() {
  return get("leprecondoDiscovered").split(",").map(function(id) {
    return FURNITURE_PIECES[Number(id)];
  });
}
function installedFurniture() {
  return get("leprecondoInstalled").split(",").map(function(id) {
    return FURNITURE_PIECES[Number(id)];
  }).reverse();
}
function setFurniture() {
  if (rearrangesRemaining() < 0)
    return !1;
  for (var _len = arguments.length, furniture = new Array(_len), _key = 0; _key < _len; _key++)
    furniture[_key] = arguments[_key];
  var nonemptyFurniture = furniture.filter(function(f) {
    return f !== "empty";
  });
  return nonemptyFurniture.some(function(piece) {
    return !discoveredFurniture().includes(piece);
  }) || new Set(nonemptyFurniture).size !== nonemptyFurniture.length ? !1 : (directlyUse($item(_templateObject442 || (_templateObject442 = _taggedTemplateLiteral17(["Leprecondo"])))), (0, import_kolmafia26.runChoice)(1, furniture.map(function(piece, index) {
    return "r".concat(3 - index, "=").concat(FURNITURE_PIECES.indexOf(piece));
  }).join("&")), arrayEquals(installedFurniture(), furniture));
}
function furnitureBonuses() {
  var furniture = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : installedFurniture();
  return furniture.reduce(function(acc, piece) {
    return _objectSpread4(_objectSpread4({}, Furniture[piece]), acc);
  }, {});
}

// node_modules/libram/dist/resources/LibramSummon.js
init_kolmafia_polyfill();

// node_modules/libram/dist/resources/2007/CandyHearts.js
init_kolmafia_polyfill();
var _templateObject81, _templateObject225, _templateObject318, _templateObject417, _templateObject515, _templateObject612, _templateObject711;
function _taggedTemplateLiteral18(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var summonSkill = $skill(_templateObject81 || (_templateObject81 = _taggedTemplateLiteral18(["Summon Candy Heart"]))), libramChance = 1 / 6, libramExpected = /* @__PURE__ */ new Map([[$item(_templateObject225 || (_templateObject225 = _taggedTemplateLiteral18(["green candy heart"]))), libramChance], [$item(_templateObject318 || (_templateObject318 = _taggedTemplateLiteral18(["lavender candy heart"]))), libramChance], [$item(_templateObject417 || (_templateObject417 = _taggedTemplateLiteral18(["orange candy heart"]))), libramChance], [$item(_templateObject515 || (_templateObject515 = _taggedTemplateLiteral18(["pink candy heart"]))), libramChance], [$item(_templateObject612 || (_templateObject612 = _taggedTemplateLiteral18(["white candy heart"]))), libramChance], [$item(_templateObject711 || (_templateObject711 = _taggedTemplateLiteral18(["yellow candy heart"]))), libramChance]]);
function have18() {
  return have(summonSkill);
}
function expected() {
  return libramExpected;
}

// node_modules/libram/dist/resources/2008/DivineFavors.js
init_kolmafia_polyfill();
var _templateObject87, _templateObject226, _templateObject319, _templateObject418, _templateObject516, _templateObject613, _templateObject712;
function _taggedTemplateLiteral19(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var summonSkill2 = $skill(_templateObject87 || (_templateObject87 = _taggedTemplateLiteral19(["Summon Party Favor"])));
function have19() {
  return have(summonSkill2);
}
function expected2() {
  var rareSummons = get("_favorRareSummons"), totalRareChance = 1 / 2 ** (rareSummons + 1), commonChance2 = (1 - totalRareChance) / 3, rareChance2 = totalRareChance / 3;
  return /* @__PURE__ */ new Map([[$item(_templateObject226 || (_templateObject226 = _taggedTemplateLiteral19(["divine blowout"]))), commonChance2], [$item(_templateObject319 || (_templateObject319 = _taggedTemplateLiteral19(["divine can of silly string"]))), commonChance2], [$item(_templateObject418 || (_templateObject418 = _taggedTemplateLiteral19(["divine noisemaker"]))), commonChance2], [$item(_templateObject516 || (_templateObject516 = _taggedTemplateLiteral19(["divine champagne flute"]))), rareChance2], [$item(_templateObject613 || (_templateObject613 = _taggedTemplateLiteral19(["divine champagne popper"]))), rareChance2], [$item(_templateObject712 || (_templateObject712 = _taggedTemplateLiteral19(["divine cracker"]))), rareChance2]]);
}

// node_modules/libram/dist/resources/2009/LoveSongs.js
init_kolmafia_polyfill();
var _templateObject88, _templateObject227, _templateObject320, _templateObject419, _templateObject517, _templateObject614, _templateObject713;
function _taggedTemplateLiteral20(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var summonSkill3 = $skill(_templateObject88 || (_templateObject88 = _taggedTemplateLiteral20(["Summon Love Song"]))), libramChance2 = 1 / 6, libramExpected2 = /* @__PURE__ */ new Map([[$item(_templateObject227 || (_templateObject227 = _taggedTemplateLiteral20(["love song of disturbing obsession"]))), libramChance2], [$item(_templateObject320 || (_templateObject320 = _taggedTemplateLiteral20(["love song of icy revenge"]))), libramChance2], [$item(_templateObject419 || (_templateObject419 = _taggedTemplateLiteral20(["love song of naughty innuendo"]))), libramChance2], [$item(_templateObject517 || (_templateObject517 = _taggedTemplateLiteral20(["love song of smoldering passion"]))), libramChance2], [$item(_templateObject614 || (_templateObject614 = _taggedTemplateLiteral20(["love song of sugary cuteness"]))), libramChance2], [$item(_templateObject713 || (_templateObject713 = _taggedTemplateLiteral20(["love song of vague ambiguity"]))), libramChance2]]);
function have20() {
  return have(summonSkill3);
}
function expected3() {
  return libramExpected2;
}

// node_modules/libram/dist/resources/2010/Brickos.js
init_kolmafia_polyfill();
var _templateObject89, _templateObject228, _templateObject321;
function _taggedTemplateLiteral21(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var summonSkill4 = $skill(_templateObject89 || (_templateObject89 = _taggedTemplateLiteral21(["Summon BRICKOs"])));
function have21() {
  return have(summonSkill4);
}
function expected4() {
  var eyeSummons = get("_brickoEyeSummons"), eyeChance = eyeSummons === 3 ? 0 : eyeSummons === 0 ? 0.5 : 1 / 3;
  return /* @__PURE__ */ new Map([[$item(_templateObject228 || (_templateObject228 = _taggedTemplateLiteral21(["BRICKO eye brick"]))), eyeChance], [$item(_templateObject321 || (_templateObject321 = _taggedTemplateLiteral21(["BRICKO brick"]))), 3 - eyeChance]]);
}

// node_modules/libram/dist/resources/2011/Gygaxian.js
init_kolmafia_polyfill();
var _templateObject90, _templateObject229, _templateObject324, _templateObject420, _templateObject518, _templateObject615, _templateObject714;
function _taggedTemplateLiteral22(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var summonSkill5 = $skill(_templateObject90 || (_templateObject90 = _taggedTemplateLiteral22(["Summon Dice"]))), libramChance3 = 1 / 6, libramExpected3 = /* @__PURE__ */ new Map([[$item(_templateObject229 || (_templateObject229 = _taggedTemplateLiteral22(["d4"]))), libramChance3], [$item(_templateObject324 || (_templateObject324 = _taggedTemplateLiteral22(["d6"]))), libramChance3], [$item(_templateObject420 || (_templateObject420 = _taggedTemplateLiteral22(["d8"]))), libramChance3], [$item(_templateObject518 || (_templateObject518 = _taggedTemplateLiteral22(["d10"]))), libramChance3], [$item(_templateObject615 || (_templateObject615 = _taggedTemplateLiteral22(["d12"]))), libramChance3], [$item(_templateObject714 || (_templateObject714 = _taggedTemplateLiteral22(["d20"]))), libramChance3]]);
function have22() {
  return have(summonSkill5);
}
function expected5() {
  return libramExpected3;
}

// node_modules/libram/dist/resources/2012/Resolutions.js
init_kolmafia_polyfill();
var _templateObject91, _templateObject230, _templateObject325, _templateObject421, _templateObject519, _templateObject616, _templateObject715, _templateObject810, _templateObject97, _templateObject106;
function _taggedTemplateLiteral23(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var summonSkill6 = $skill(_templateObject91 || (_templateObject91 = _taggedTemplateLiteral23(["Summon Resolutions"]))), commonChance = 0.98 / 6, rareChance = 0.02 / 3, libramExpected4 = /* @__PURE__ */ new Map([[$item(_templateObject230 || (_templateObject230 = _taggedTemplateLiteral23(["resolution: be feistier"]))), commonChance], [$item(_templateObject325 || (_templateObject325 = _taggedTemplateLiteral23(["resolution: be happier"]))), commonChance], [$item(_templateObject421 || (_templateObject421 = _taggedTemplateLiteral23(["resolution: be sexier"]))), commonChance], [$item(_templateObject519 || (_templateObject519 = _taggedTemplateLiteral23(["resolution: be smarter"]))), commonChance], [$item(_templateObject616 || (_templateObject616 = _taggedTemplateLiteral23(["resolution: be stronger"]))), commonChance], [$item(_templateObject715 || (_templateObject715 = _taggedTemplateLiteral23(["resolution: be wealthier"]))), commonChance], [$item(_templateObject810 || (_templateObject810 = _taggedTemplateLiteral23(["resolution: be kinder"]))), rareChance], [$item(_templateObject97 || (_templateObject97 = _taggedTemplateLiteral23(["resolution: be luckier"]))), rareChance], [$item(_templateObject106 || (_templateObject106 = _taggedTemplateLiteral23(["resolution: be more adventurous"]))), rareChance]]);
function have23() {
  return have(summonSkill6);
}
function expected6() {
  return libramExpected4;
}

// node_modules/libram/dist/resources/2013/PulledTaffy.js
init_kolmafia_polyfill();
var _templateObject98, _templateObject231, _templateObject326, _templateObject423, _templateObject520, _templateObject617, _templateObject716, _templateObject811;
function _taggedTemplateLiteral24(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var summonSkill7 = $skill(_templateObject98 || (_templateObject98 = _taggedTemplateLiteral24(["Summon Taffy"])));
function have24() {
  return have(summonSkill7);
}
function expected7() {
  var rareSummons = get("_taffyRareSummons"), yellowSummons = get("_taffyYellowSummons"), onlyYellow = yellowSummons === 0 && rareSummons === 3, totalRareChance = rareSummons < 4 ? 1 / 2 ** (rareSummons + 1) : 0, commonChance2 = (1 - totalRareChance) / 4, rareChance2 = onlyYellow ? 0 : totalRareChance / (3 - get("_taffyYellowSummons")), yellowChance = yellowSummons === 1 ? 0 : onlyYellow ? totalRareChance : rareChance2;
  return /* @__PURE__ */ new Map([[$item(_templateObject231 || (_templateObject231 = _taggedTemplateLiteral24(["pulled blue taffy"]))), commonChance2], [$item(_templateObject326 || (_templateObject326 = _taggedTemplateLiteral24(["pulled orange taffy"]))), commonChance2], [$item(_templateObject423 || (_templateObject423 = _taggedTemplateLiteral24(["pulled violet taffy"]))), commonChance2], [$item(_templateObject520 || (_templateObject520 = _taggedTemplateLiteral24(["pulled red taffy"]))), commonChance2], [$item(_templateObject617 || (_templateObject617 = _taggedTemplateLiteral24(["pulled indigo taffy"]))), rareChance2], [$item(_templateObject716 || (_templateObject716 = _taggedTemplateLiteral24(["pulled green taffy"]))), rareChance2], [$item(_templateObject811 || (_templateObject811 = _taggedTemplateLiteral24(["pulled yellow taffy"]))), yellowChance]]);
}

// node_modules/libram/dist/resources/LibramSummon.js
var _templateObject812, _templateObject99, _templateObject107, _templateObject116, _templateObject127, _templateObject137, _templateObject147;
function _slicedToArray9(arr, i) {
  return _arrayWithHoles9(arr) || _iterableToArrayLimit9(arr, i) || _unsupportedIterableToArray12(arr, i) || _nonIterableRest9();
}
function _nonIterableRest9() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray12(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray12(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray12(o, minLen);
  }
}
function _arrayLikeToArray12(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit9(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles9(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _taggedTemplateLiteral25(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function possibleLibramSummons() {
  var results = /* @__PURE__ */ new Map();
  return have18() && results.set($skill(_templateObject812 || (_templateObject812 = _taggedTemplateLiteral25(["Summon Candy Heart"]))), expected()), have19() && results.set($skill(_templateObject99 || (_templateObject99 = _taggedTemplateLiteral25(["Summon Party Favor"]))), expected2()), have20() && results.set($skill(_templateObject107 || (_templateObject107 = _taggedTemplateLiteral25(["Summon Love Song"]))), expected3()), have21() && results.set($skill(_templateObject116 || (_templateObject116 = _taggedTemplateLiteral25(["Summon BRICKOs"]))), expected4()), have22() && results.set($skill(_templateObject127 || (_templateObject127 = _taggedTemplateLiteral25(["Summon Dice"]))), expected5()), have23() && results.set($skill(_templateObject137 || (_templateObject137 = _taggedTemplateLiteral25(["Summon Resolutions"]))), expected6()), have24() && results.set($skill(_templateObject147 || (_templateObject147 = _taggedTemplateLiteral25(["Summon Taffy"]))), expected7()), results;
}
function bestLibramToCast() {
  var arr = Array.from(possibleLibramSummons().entries());
  return arr.length ? maxBy(arr, function(_ref) {
    var _ref2 = _slicedToArray9(_ref, 2), itemMap = _ref2[1];
    return sum(Array.from(itemMap.entries()), function(_ref3) {
      var _ref4 = _slicedToArray9(_ref3, 2), item6 = _ref4[0], weight = _ref4[1];
      return weight * getSaleValue(item6);
    });
  })[0] : null;
}

// node_modules/libram/dist/Clan.js
init_kolmafia_polyfill();
var import_atob = __toESM(require_atob(), 1);

// node_modules/entities/dist/esm/index.js
init_kolmafia_polyfill();

// node_modules/entities/dist/esm/decode.js
init_kolmafia_polyfill();

// node_modules/entities/dist/esm/decode-codepoint.js
init_kolmafia_polyfill();
var _a, decodeMap = /* @__PURE__ */ new Map([
  [0, 65533],
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), fromCodePoint = (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
  var output = "";
  return codePoint > 65535 && (codePoint -= 65536, output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296), codePoint = 56320 | codePoint & 1023), output += String.fromCharCode(codePoint), output;
};
function replaceCodePoint(codePoint) {
  var _a2;
  return codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111 ? 65533 : (_a2 = decodeMap.get(codePoint)) !== null && _a2 !== void 0 ? _a2 : codePoint;
}

// node_modules/entities/dist/esm/generated/decode-data-html.js
init_kolmafia_polyfill();

// node_modules/entities/dist/esm/internal/decode-shared.js
init_kolmafia_polyfill();
function decodeBase64(input) {
  for (var binary = typeof atob == "function" ? atob(input) : typeof Buffer.from == "function" ? Buffer.from(input, "base64").toString("binary") : new Buffer(input, "base64").toString("binary"), evenLength = binary.length & -2, out = new Uint16Array(evenLength / 2), index = 0, outIndex = 0; index < evenLength; index += 2) {
    var lo = binary.charCodeAt(index), hi = binary.charCodeAt(index + 1);
    out[outIndex++] = lo | hi << 8;
  }
  return out;
}

// node_modules/entities/dist/esm/generated/decode-data-html.js
var htmlDecodeTree = /* @__PURE__ */ decodeBase64("QR08ALkAAgH6AYsDNQR2BO0EPgXZBQEGLAbdBxMISQrvCmQLfQurDKQNLw4fD4YPpA+6D/IPAAAAAAAAAAAAAAAAKhBMEY8TmxUWF2EYLBkxGuAa3RsJHDscWR8YIC8jSCSIJcMl6ie3Ku8rEC0CLjoupS7kLgAIRU1hYmNmZ2xtbm9wcnN0dVQAWgBeAGUAaQBzAHcAfgCBAIQAhwCSAJoAoACsALMAbABpAGcAO4DGAMZAUAA7gCYAJkBjAHUAdABlADuAwQDBQHIiZXZlAAJhAAFpeW0AcgByAGMAO4DCAMJAEGRyAADgNdgE3XIAYQB2AGUAO4DAAMBA8CFoYZFj4SFjcgBhZAAAoFMqAAFncIsAjgBvAG4ABGFmAADgNdg43fAlbHlGdW5jdGlvbgCgYSBpAG4AZwA7gMUAxUAAAWNzpACoAHIAAOA12Jzc6SFnbgCgVCJpAGwAZABlADuAwwDDQG0AbAA7gMQAxEAABGFjZWZvcnN1xQDYANoA7QDxAPYA+QD8AAABY3LJAM8AayNzbGFzaAAAoBYidgHTANUAAKDnKmUAZAAAoAYjeQARZIABY3J0AOAA5QDrAGEidXNlAACgNSLuI291bGxpcwCgLCFhAJJjcgAA4DXYBd1wAGYAAOA12Dnd5SF2ZdhiYwDyAOoAbSJwZXEAAKBOIgAHSE9hY2RlZmhpbG9yc3UXARoBHwE6AVIBVQFiAWQBZgGCAakB6QHtAfIBYwB5ACdkUABZADuAqQCpQIABY3B5ACUBKAE1AfUhdGUGYWmg0iJ0KGFsRGlmZmVyZW50aWFsRAAAoEUhbCJleXMAAKAtIQACYWVpb0EBRAFKAU0B8iFvbgxhZABpAGwAO4DHAMdAcgBjAAhhbiJpbnQAAKAwIm8AdAAKYQABZG5ZAV0BaSJsbGEAuGB0I2VyRG90ALdg8gA5AWkAp2NyImNsZQAAAkRNUFRwAXQBeQF9AW8AdAAAoJkiaSJudXMAAKCWIuwhdXMAoJUiaSJtZXMAAKCXIm8AAAFjc4cBlAFrKndpc2VDb250b3VySW50ZWdyYWwAAKAyImUjQ3VybHkAAAFEUZwBpAFvJXVibGVRdW90ZQAAoB0gdSJvdGUAAKAZIAACbG5wdbABtgHNAdgBbwBuAGWgNyIAoHQqgAFnaXQAvAHBAcUB8iJ1ZW50AKBhIm4AdAAAoC8i7yV1ckludGVncmFsAKAuIgABZnLRAdMBAKACIe8iZHVjdACgECJuLnRlckNsb2Nrd2lzZUNvbnRvdXJJbnRlZ3JhbAAAoDMi7yFzcwCgLypjAHIAAOA12J7ccABDoNMiYQBwAACgTSKABURKU1phY2VmaW9zAAsCEgIVAhgCGwIsAjQCOQI9AnMCfwNvoEUh9CJyYWhkAKARKWMAeQACZGMAeQAFZGMAeQAPZIABZ3JzACECJQIoAuchZXIAoCEgcgAAoKEhaAB2AACg5CoAAWF5MAIzAvIhb24OYRRkbAB0oAciYQCUY3IAAOA12AfdAAFhZkECawIAAWNtRQJnAvIjaXRpY2FsAAJBREdUUAJUAl8CYwJjInV0ZQC0YG8AdAFZAloC2WJiJGxlQWN1dGUA3WJyImF2ZQBgYGkibGRlANxi7yFuZACgxCJmJWVyZW50aWFsRAAAoEYhcAR9AgAAAAAAAIECjgIAABoDZgAA4DXYO91EoagAhQKJAm8AdAAAoNwgcSJ1YWwAAKBQIuIhbGUAA0NETFJVVpkCqAK1Au8C/wIRA28AbgB0AG8AdQByAEkAbgB0AGUAZwByAGEA7ADEAW8AdAKvAgAAAACwAqhgbiNBcnJvdwAAoNMhAAFlb7kC0AJmAHQAgAFBUlQAwQLGAs0CciJyb3cAAKDQIekkZ2h0QXJyb3cAoNQhZQDlACsCbgBnAAABTFLWAugC5SFmdAABQVLcAuECciJyb3cAAKD4J+kkZ2h0QXJyb3cAoPon6SRnaHRBcnJvdwCg+SdpImdodAAAAUFU9gL7AnIicm93AACg0iFlAGUAAKCoInAAQQIGAwAAAAALA3Iicm93AACg0SFvJHduQXJyb3cAAKDVIWUlcnRpY2FsQmFyAACgJSJuAAADQUJMUlRhJAM2AzoDWgNxA3oDciJyb3cAAKGTIUJVLAMwA2EAcgAAoBMpcCNBcnJvdwAAoPUhciJldmUAEWPlIWZ00gJDAwAASwMAAFIDaSVnaHRWZWN0b3IAAKBQKWUkZVZlY3RvcgAAoF4p5SJjdG9yQqC9IWEAcgAAoFYpaSJnaHQA1AFiAwAAaQNlJGVWZWN0b3IAAKBfKeUiY3RvckKgwSFhAHIAAKBXKWUAZQBBoKQiciJyb3cAAKCnIXIAcgBvAPcAtAIAAWN0gwOHA3IAAOA12J/c8iFvaxBhAAhOVGFjZGZnbG1vcHFzdHV4owOlA6kDsAO/A8IDxgPNA9ID8gP9AwEEFAQeBCAEJQRHAEphSAA7gNAA0EBjAHUAdABlADuAyQDJQIABYWl5ALYDuQO+A/Ihb24aYXIAYwA7gMoAykAtZG8AdAAWYXIAAOA12AjdcgBhAHYAZQA7gMgAyEDlIm1lbnQAoAgiAAFhcNYD2QNjAHIAEmF0AHkAUwLhAwAAAADpA20lYWxsU3F1YXJlAACg+yVlJ3J5U21hbGxTcXVhcmUAAKCrJQABZ3D2A/kDbwBuABhhZgAA4DXYPN3zImlsb26VY3UAAAFhaQYEDgRsAFSgdSppImxkZQAAoEIi7CNpYnJpdW0AoMwhAAFjaRgEGwRyAACgMCFtAACgcyphAJdjbQBsADuAywDLQAABaXApBC0E8yF0cwCgAyLvJG5lbnRpYWxFAKBHIYACY2Zpb3MAPQQ/BEMEXQRyBHkAJGRyAADgNdgJ3WwibGVkAFMCTAQAAAAAVARtJWFsbFNxdWFyZQAAoPwlZSdyeVNtYWxsU3F1YXJlAACgqiVwA2UEAABpBAAAAABtBGYAAOA12D3dwSFsbACgACLyI2llcnRyZgCgMSFjAPIAcQQABkpUYWJjZGZnb3JzdIgEiwSOBJMElwSkBKcEqwStBLIE5QTqBGMAeQADZDuAPgA+QO0hbWFkoJMD3GNyImV2ZQAeYYABZWl5AJ0EoASjBOQhaWwiYXIAYwAcYRNkbwB0ACBhcgAA4DXYCt0AoNkicABmAADgNdg+3eUiYXRlcgADRUZHTFNUvwTIBM8E1QTZBOAEcSJ1YWwATKBlIuUhc3MAoNsidSRsbEVxdWFsAACgZyJyI2VhdGVyAACgoirlIXNzAKB3IuwkYW50RXF1YWwAoH4qaSJsZGUAAKBzImMAcgAA4DXYotwAoGsiAARBYWNmaW9zdfkE/QQFBQgFCwUTBSIFKwVSIkRjeQAqZAABY3QBBQQFZQBrAMdiXmDpIXJjJGFyAACgDCFsJWJlcnRTcGFjZQAAoAsh8AEYBQAAGwVmAACgDSHpJXpvbnRhbExpbmUAoAAlAAFjdCYFKAXyABIF8iFvayZhbQBwAEQBMQU5BW8AdwBuAEgAdQBtAPAAAAFxInVhbAAAoE8iAAdFSk9hY2RmZ21ub3N0dVMFVgVZBVwFYwVtBXAFcwV6BZAFtgXFBckFzQVjAHkAFWTsIWlnMmFjAHkAAWRjAHUAdABlADuAzQDNQAABaXlnBWwFcgBjADuAzgDOQBhkbwB0ADBhcgAAoBEhcgBhAHYAZQA7gMwAzEAAoREhYXB/BYsFAAFjZ4MFhQVyACphaSNuYXJ5SQAAoEghbABpAGUA8wD6AvQBlQUAAKUFZaAsIgABZ3KaBZ4F8iFhbACgKyLzI2VjdGlvbgCgwiJpI3NpYmxlAAABQ1SsBbEFbyJtbWEAAKBjIGkibWVzAACgYiCAAWdwdAC8Bb8FwwVvAG4ALmFmAADgNdhA3WEAmWNjAHIAAKAQIWkibGRlAChh6wHSBQAA1QVjAHkABmRsADuAzwDPQIACY2Zvc3UA4QXpBe0F8gX9BQABaXnlBegFcgBjADRhGWRyAADgNdgN3XAAZgAA4DXYQd3jAfcFAAD7BXIAAOA12KXc8iFjeQhk6yFjeQRkgANISmFjZm9zAAwGDwYSBhUGHQYhBiYGYwB5ACVkYwB5AAxk8CFwYZpjAAFleRkGHAbkIWlsNmEaZHIAAOA12A7dcABmAADgNdhC3WMAcgAA4DXYptyABUpUYWNlZmxtb3N0AD0GQAZDBl4GawZkB2gHcAd0B80H2gdjAHkACWQ7gDwAPECAAmNtbnByAEwGTwZSBlUGWwb1IXRlOWHiIWRhm2NnAACg6ifsI2FjZXRyZgCgEiFyAACgniGAAWFleQBkBmcGagbyIW9uPWHkIWlsO2EbZAABZnNvBjQHdAAABUFDREZSVFVWYXKABp4GpAbGBssG3AYDByEHwQIqBwABbnKEBowGZyVsZUJyYWNrZXQAAKDoJ/Ihb3cAoZAhQlKTBpcGYQByAACg5CHpJGdodEFycm93AKDGIWUjaWxpbmcAAKAII28A9QGqBgAAsgZiJWxlQnJhY2tldAAAoOYnbgDUAbcGAAC+BmUkZVZlY3RvcgAAoGEp5SJjdG9yQqDDIWEAcgAAoFkpbCJvb3IAAKAKI2kiZ2h0AAABQVbSBtcGciJyb3cAAKCUIeUiY3RvcgCgTikAAWVy4AbwBmUAAKGjIkFW5gbrBnIicm93AACgpCHlImN0b3IAoFopaSNhbmdsZQBCorIi+wYAAAAA/wZhAHIAAKDPKXEidWFsAACgtCJwAIABRFRWAAoHEQcYB+8kd25WZWN0b3IAoFEpZSRlVmVjdG9yAACgYCnlImN0b3JCoL8hYQByAACgWCnlImN0b3JCoLwhYQByAACgUilpAGcAaAB0AGEAcgByAG8A9wDMAnMAAANFRkdMU1Q/B0cHTgdUB1gHXwfxJXVhbEdyZWF0ZXIAoNoidSRsbEVxdWFsAACgZiJyI2VhdGVyAACgdiLlIXNzAKChKuwkYW50RXF1YWwAoH0qaSJsZGUAAKByInIAAOA12A/dZaDYIuYjdGFycm93AKDaIWkiZG90AD9hgAFucHcAege1B7kHZwAAAkxSbHKCB5QHmwerB+UhZnQAAUFSiAeNB3Iicm93AACg9SfpJGdodEFycm93AKD3J+kkZ2h0QXJyb3cAoPYn5SFmdAABYXLcAqEHaQBnAGgAdABhAHIAcgBvAPcA5wJpAGcAaAB0AGEAcgByAG8A9wDuAmYAAOA12EPdZQByAAABTFK/B8YHZSRmdEFycm93AACgmSHpJGdodEFycm93AKCYIYABY2h0ANMH1QfXB/IAWgYAoLAh8iFva0FhAKBqIgAEYWNlZmlvc3XpB+wH7gf/BwMICQgOCBEIcAAAoAUpeQAcZAABZGzyB/kHaSR1bVNwYWNlAACgXyBsI2ludHJmAACgMyFyAADgNdgQ3e4jdXNQbHVzAKATInAAZgAA4DXYRN1jAPIA/gecY4AESmFjZWZvc3R1ACEIJAgoCDUIgQiFCDsKQApHCmMAeQAKZGMidXRlAENhgAFhZXkALggxCDQI8iFvbkdh5CFpbEVhHWSAAWdzdwA7CGEIfQjhInRpdmWAAU1UVgBECEwIWQhlJWRpdW1TcGFjZQAAoAsgaABpAAABY25SCFMIawBTAHAAYQBjAOUASwhlAHIAeQBUAGgAaQDuAFQI9CFlZAABR0xnCHUIcgBlAGEAdABlAHIARwByAGUAYQB0AGUA8gDrBGUAcwBzAEwAZQBzAPMA2wdMImluZQAKYHIAAOA12BHdAAJCbnB0jAiRCJkInAhyImVhawAAoGAgwiZyZWFraW5nU3BhY2WgYGYAAKAVIUOq7CqzCMIIzQgAAOcIGwkAAAAAAAAtCQAAbwkAAIcJAACdCcAJGQoAADQKAAFvdbYIvAjuI2dydWVudACgYiJwIkNhcAAAoG0ibyh1YmxlVmVydGljYWxCYXIAAKAmIoABbHF4ANII1wjhCOUibWVudACgCSL1IWFsVKBgImkibGRlAADgQiI4A2kic3RzAACgBCJyI2VhdGVyAACjbyJFRkdMU1T1CPoIAgkJCQ0JFQlxInVhbAAAoHEidSRsbEVxdWFsAADgZyI4A3IjZWF0ZXIAAOBrIjgD5SFzcwCgeSLsJGFudEVxdWFsAOB+KjgDaSJsZGUAAKB1IvUhbXBEASAJJwnvI3duSHVtcADgTiI4A3EidWFsAADgTyI4A2UAAAFmczEJRgn0JFRyaWFuZ2xlQqLqIj0JAAAAAEIJYQByAADgzyk4A3EidWFsAACg7CJzAICibiJFR0xTVABRCVYJXAlhCWkJcSJ1YWwAAKBwInIjZWF0ZXIAAKB4IuUhc3MA4GoiOAPsJGFudEVxdWFsAOB9KjgDaSJsZGUAAKB0IuUic3RlZAABR0x1CX8J8iZlYXRlckdyZWF0ZXIA4KIqOAPlI3NzTGVzcwDgoSo4A/IjZWNlZGVzAKGAIkVTjwmVCXEidWFsAADgryo4A+wkYW50RXF1YWwAoOAiAAFlaaAJqQl2JmVyc2VFbGVtZW50AACgDCLnJWh0VHJpYW5nbGVCousitgkAAAAAuwlhAHIAAODQKTgDcSJ1YWwAAKDtIgABcXXDCeAJdSNhcmVTdQAAAWJwywnVCfMhZXRF4I8iOANxInVhbAAAoOIi5SJyc2V0ReCQIjgDcSJ1YWwAAKDjIoABYmNwAOYJ8AkNCvMhZXRF4IIi0iBxInVhbAAAoIgi4yJlZWRzgKGBIkVTVAD6CQAKBwpxInVhbAAA4LAqOAPsJGFudEVxdWFsAKDhImkibGRlAADgfyI4A+UicnNldEXggyLSIHEidWFsAACgiSJpImxkZQCAoUEiRUZUACIKJwouCnEidWFsAACgRCJ1JGxsRXF1YWwAAKBHImkibGRlAACgSSJlJXJ0aWNhbEJhcgAAoCQiYwByAADgNdip3GkAbABkAGUAO4DRANFAnWMAB0VhY2RmZ21vcHJzdHV2XgphCmgKcgp2CnoKgQqRCpYKqwqtCrsKyArNCuwhaWdSYWMAdQB0AGUAO4DTANNAAAFpeWwKcQpyAGMAO4DUANRAHmRiImxhYwBQYXIAAOA12BLdcgBhAHYAZQA7gNIA0kCAAWFlaQCHCooKjQpjAHIATGFnAGEAqWNjInJvbgCfY3AAZgAA4DXYRt3lI25DdXJseQABRFGeCqYKbyV1YmxlUXVvdGUAAKAcIHUib3RlAACgGCAAoFQqAAFjbLEKtQpyAADgNdiq3GEAcwBoADuA2ADYQGkAbAHACsUKZABlADuA1QDVQGUAcwAAoDcqbQBsADuA1gDWQGUAcgAAAUJQ0wrmCgABYXLXCtoKcgAAoD4gYQBjAAABZWvgCuIKAKDeI2UAdAAAoLQjYSVyZW50aGVzaXMAAKDcI4AEYWNmaGlsb3JzAP0KAwsFCwkLCwsMCxELIwtaC3IjdGlhbEQAAKACInkAH2RyAADgNdgT3WkApmOgY/Ujc01pbnVzsWAAAWlwFQsgC24AYwBhAHIAZQBwAGwAYQBuAOUACgVmAACgGSGAobsqZWlvACoLRQtJC+MiZWRlc4CheiJFU1QANAs5C0ALcSJ1YWwAAKCvKuwkYW50RXF1YWwAoHwiaSJsZGUAAKB+Im0AZQAAoDMgAAFkcE0LUQv1IWN0AKAPIm8jcnRpb24AYaA3ImwAAKAdIgABY2leC2ILcgAA4DXYq9yoYwACVWZvc2oLbwtzC3cLTwBUADuAIgAiQHIAAOA12BTdcABmAACgGiFjAHIAAOA12KzcAAZCRWFjZWZoaW9yc3WPC5MLlwupC7YL2AvbC90LhQyTDJoMowzhIXJyAKAQKUcAO4CuAK5AgAFjbnIAnQugC6ML9SF0ZVRhZwAAoOsncgB0oKAhbAAAoBYpgAFhZXkArwuyC7UL8iFvblhh5CFpbFZhIGR2oBwhZSJyc2UAAAFFVb8LzwsAAWxxwwvIC+UibWVudACgCyL1JGlsaWJyaXVtAKDLIXAmRXF1aWxpYnJpdW0AAKBvKXIAAKAcIW8AoWPnIWh0AARBQ0RGVFVWYewLCgwQDDIMNwxeDHwM9gIAAW5y8Av4C2clbGVCcmFja2V0AACg6SfyIW93AKGSIUJM/wsDDGEAcgAAoOUhZSRmdEFycm93AACgxCFlI2lsaW5nAACgCSNvAPUBFgwAAB4MYiVsZUJyYWNrZXQAAKDnJ24A1AEjDAAAKgxlJGVWZWN0b3IAAKBdKeUiY3RvckKgwiFhAHIAAKBVKWwib29yAACgCyMAAWVyOwxLDGUAAKGiIkFWQQxGDHIicm93AACgpiHlImN0b3IAoFspaSNhbmdsZQBCorMiVgwAAAAAWgxhAHIAAKDQKXEidWFsAACgtSJwAIABRFRWAGUMbAxzDO8kd25WZWN0b3IAoE8pZSRlVmVjdG9yAACgXCnlImN0b3JCoL4hYQByAACgVCnlImN0b3JCoMAhYQByAACgUykAAXB1iQyMDGYAAKAdIe4kZEltcGxpZXMAoHAp6SRnaHRhcnJvdwCg2yEAAWNongyhDHIAAKAbIQCgsSHsJGVEZWxheWVkAKD0KYAGSE9hY2ZoaW1vcXN0dQC/DMgMzAzQDOIM5gwKDQ0NFA0ZDU8NVA1YDQABQ2PDDMYMyCFjeSlkeQAoZEYiVGN5ACxkYyJ1dGUAWmEAorwqYWVpedgM2wzeDOEM8iFvbmBh5CFpbF5hcgBjAFxhIWRyAADgNdgW3e8hcnQAAkRMUlXvDPYM/QwEDW8kd25BcnJvdwAAoJMhZSRmdEFycm93AACgkCHpJGdodEFycm93AKCSIXAjQXJyb3cAAKCRIechbWGjY+EkbGxDaXJjbGUAoBgicABmAADgNdhK3XICHw0AAAAAIg10AACgGiLhIXJlgKGhJUlTVQAqDTINSg3uJXRlcnNlY3Rpb24AoJMidQAAAWJwNw1ADfMhZXRFoI8icSJ1YWwAAKCRIuUicnNldEWgkCJxInVhbAAAoJIibiJpb24AAKCUImMAcgAA4DXYrtxhAHIAAKDGIgACYmNtcF8Nag2ODZANc6DQImUAdABFoNAicSJ1YWwAAKCGIgABY2huDYkNZSJlZHMAgKF7IkVTVAB4DX0NhA1xInVhbAAAoLAq7CRhbnRFcXVhbACgfSJpImxkZQAAoH8iVABoAGEA9ADHCwCgESIAodEiZXOVDZ8NciJzZXQARaCDInEidWFsAACghyJlAHQAAKDRIoAFSFJTYWNmaGlvcnMAtQ27Db8NyA3ODdsN3w3+DRgOHQ4jDk8AUgBOADuA3gDeQMEhREUAoCIhAAFIY8MNxg1jAHkAC2R5ACZkAAFidcwNzQ0JYKRjgAFhZXkA1A3XDdoN8iFvbmRh5CFpbGJhImRyAADgNdgX3QABZWnjDe4N8gHoDQAA7Q3lImZvcmUAoDQiYQCYYwABY27yDfkNayNTcGFjZQAA4F8gCiDTInBhY2UAoAkg7CFkZYChPCJFRlQABw4MDhMOcSJ1YWwAAKBDInUkbGxFcXVhbAAAoEUiaSJsZGUAAKBIInAAZgAA4DXYS93pI3BsZURvdACg2yAAAWN0Jw4rDnIAAOA12K/c8iFva2Zh4QpFDlYOYA5qDgAAbg5yDgAAAAAAAAAAAAB5DnwOqA6zDgAADg8RDxYPGg8AAWNySA5ODnUAdABlADuA2gDaQHIAb6CfIeMhaXIAoEkpcgDjAVsOAABdDnkADmR2AGUAbGEAAWl5Yw5oDnIAYwA7gNsA20AjZGIibGFjAHBhcgAA4DXYGN1yAGEAdgBlADuA2QDZQOEhY3JqYQABZGl/Dp8OZQByAAABQlCFDpcOAAFhcokOiw5yAF9gYQBjAAABZWuRDpMOAKDfI2UAdAAAoLUjYSVyZW50aGVzaXMAAKDdI28AbgBQoMMi7CF1cwCgjiIAAWdwqw6uDm8AbgByYWYAAOA12EzdAARBREVUYWRwc78O0g7ZDuEOBQPqDvMOBw9yInJvdwDCoZEhyA4AAMwOYQByAACgEilvJHduQXJyb3cAAKDFIW8kd25BcnJvdwAAoJUhcSV1aWxpYnJpdW0AAKBuKWUAZQBBoKUiciJyb3cAAKClIW8AdwBuAGEAcgByAG8A9wAQA2UAcgAAAUxS+Q4AD2UkZnRBcnJvdwAAoJYh6SRnaHRBcnJvdwCglyFpAGyg0gNvAG4ApWPpIW5nbmFjAHIAAOA12LDcaSJsZGUAaGFtAGwAO4DcANxAgAREYmNkZWZvc3YALQ8xDzUPNw89D3IPdg97D4AP4SFzaACgqyJhAHIAAKDrKnkAEmThIXNobKCpIgCg5ioAAWVyQQ9DDwCgwSKAAWJ0eQBJD00Paw9hAHIAAKAWIGmgFiDjIWFsAAJCTFNUWA9cD18PZg9hAHIAAKAjIukhbmV8YGUkcGFyYXRvcgAAoFgnaSJsZGUAAKBAItQkaGluU3BhY2UAoAogcgAA4DXYGd1wAGYAAOA12E3dYwByAADgNdix3GQiYXNoAACgqiKAAmNlZm9zAI4PkQ+VD5kPng/pIXJjdGHkIWdlAKDAInIAAOA12BrdcABmAADgNdhO3WMAcgAA4DXYstwAAmZpb3OqD64Prw+0D3IAAOA12BvdnmNwAGYAAOA12E/dYwByAADgNdiz3IAEQUlVYWNmb3N1AMgPyw/OD9EP2A/gD+QP6Q/uD2MAeQAvZGMAeQAHZGMAeQAuZGMAdQB0AGUAO4DdAN1AAAFpedwP3w9yAGMAdmErZHIAAOA12BzdcABmAADgNdhQ3WMAcgAA4DXYtNxtAGwAeGEABEhhY2RlZm9z/g8BEAUQDRAQEB0QIBAkEGMAeQAWZGMidXRlAHlhAAFheQkQDBDyIW9ufWEXZG8AdAB7YfIBFRAAABwQbwBXAGkAZAB0AOgAVAhhAJZjcgAAoCghcABmAACgJCFjAHIAAOA12LXc4QtCEEkQTRAAAGcQbRByEAAAAAAAAAAAeRCKEJcQ8hD9EAAAGxEhETIROREAAD4RYwB1AHQAZQA7gOEA4UByImV2ZQADYYCiPiJFZGl1eQBWEFkQWxBgEGUQAOA+IjMDAKA/InIAYwA7gOIA4kB0AGUAO4C0ALRAMGRsAGkAZwA7gOYA5kByoGEgAOA12B7dcgBhAHYAZQA7gOAA4EAAAWVwfBCGEAABZnCAEIQQ8yF5bQCgNSHoAIMQaABhALFjAAFhcI0QWwAAAWNskRCTEHIAAWFnAACgPypkApwQAAAAALEQAKInImFkc3ajEKcQqRCuEG4AZAAAoFUqAKBcKmwib3BlAACgWCoAoFoqAKMgImVsbXJzersQvRDAEN0Q5RDtEACgpCllAACgICJzAGQAYaAhImEEzhDQENIQ1BDWENgQ2hDcEACgqCkAoKkpAKCqKQCgqykAoKwpAKCtKQCgrikAoK8pdAB2oB8iYgBkoL4iAKCdKQABcHTpEOwQaAAAoCIixWDhIXJyAKB8IwABZ3D1EPgQbwBuAAVhZgAA4DXYUt0Ao0giRWFlaW9wBxEJEQ0RDxESERQRAKBwKuMhaXIAoG8qAKBKImQAAKBLInMAJ2DyIW94ZaBIIvEADhFpAG4AZwA7gOUA5UCAAWN0eQAmESoRKxFyAADgNdi23CpgbQBwAGWgSCLxAPgBaQBsAGQAZQA7gOMA40BtAGwAO4DkAORAAAFjaUERRxFvAG4AaQBuAPQA6AFuAHQAAKARKgAITmFiY2RlZmlrbG5vcHJzdWQRaBGXEZ8RpxGrEdIR1hErEjASexKKEn0RThNbE3oTbwB0AACg7SoAAWNybBGJEWsAAAJjZXBzdBF4EX0RghHvIW5nAKBMInAjc2lsb24A9mNyImltZQAAoDUgaQBtAGWgPSJxAACgzSJ2AY0RkRFlAGUAAKC9ImUAZABnoAUjZQAAoAUjcgBrAHSgtSPiIXJrAKC2IwABb3mjEaYRbgDnAHcRMWTxIXVvAKAeIIACY21wcnQAtBG5Eb4RwRHFEeEhdXPloDUi5ABwInR5dgAAoLApcwDpAH0RbgBvAPUA6gCAAWFodwDLEcwRzhGyYwCgNiHlIWVuAKBsInIAAOA12B/dZwCAA2Nvc3R1dncA4xHyEQUSEhIhEiYSKRKAAWFpdQDpEesR7xHwAKMFcgBjAACg7yVwAACgwyKAAWRwdAD4EfwRABJvAHQAAKAAKuwhdXMAoAEqaSJtZXMAAKACKnECCxIAAAAADxLjIXVwAKAGKmEAcgAAoAUm8iNpYW5nbGUAAWR1GhIeEu8hd24AoL0lcAAAoLMlcCJsdXMAAKAEKmUA5QBCD+UAkg9hInJvdwAAoA0pgAFha28ANhJoEncSAAFjbjoSZRJrAIABbHN0AEESRxJNEm8jemVuZ2UAAKDrKXEAdQBhAHIA5QBcBPIjaWFuZ2xlgKG0JWRscgBYElwSYBLvIXduAKC+JeUhZnQAoMIlaSJnaHQAAKC4JWsAAKAjJLEBbRIAAHUSsgFxEgAAcxIAoJIlAKCRJTQAAKCTJWMAawAAoIglAAFlb38ShxJx4D0A5SD1IWl2AOBhIuUgdAAAoBAjAAJwdHd4kRKVEpsSnxJmAADgNdhT3XSgpSJvAG0AAKClIvQhaWUAoMgiAAZESFVWYmRobXB0dXayEsES0RLgEvcS+xIKExoTHxMjEygTNxMAAkxSbHK5ErsSvRK/EgCgVyUAoFQlAKBWJQCgUyUAolAlRFVkdckSyxLNEs8SAKBmJQCgaSUAoGQlAKBnJQACTFJsctgS2hLcEt4SAKBdJQCgWiUAoFwlAKBZJQCjUSVITFJobHLrEu0S7xLxEvMS9RIAoGwlAKBjJQCgYCUAoGslAKBiJQCgXyVvAHgAAKDJKQACTFJscgITBBMGEwgTAKBVJQCgUiUAoBAlAKAMJQCiACVEVWR1EhMUExYTGBMAoGUlAKBoJQCgLCUAoDQlaSJudXMAAKCfIuwhdXMAoJ4iaSJtZXMAAKCgIgACTFJsci8TMRMzEzUTAKBbJQCgWCUAoBglAKAUJQCjAiVITFJobHJCE0QTRhNIE0oTTBMAoGolAKBhJQCgXiUAoDwlAKAkJQCgHCUAAWV2UhNVE3YA5QD5AGIAYQByADuApgCmQAACY2Vpb2ITZhNqE24TcgAA4DXYt9xtAGkAAKBPIG0A5aA9IogRbAAAoVwAYmh0E3YTAKDFKfMhdWIAoMgnbAF+E4QTbABloCIgdAAAoCIgcAAAoU4iRWWJE4sTAKCuKvGgTyI8BeEMqRMAAN8TABQDFB8UAAAjFDQUAAAAAIUUAAAAAI0UAAAAANcU4xT3FPsUAACIFQAAlhWAAWNwcgCuE7ET1RP1IXRlB2GAoikiYWJjZHMAuxO/E8QTzhPSE24AZAAAoEQqciJjdXAAAKBJKgABYXXIE8sTcAAAoEsqcAAAoEcqbwB0AACgQCoA4CkiAP4AAWVv2RPcE3QAAKBBIO4ABAUAAmFlaXXlE+8T9RP4E/AB6hMAAO0TcwAAoE0qbwBuAA1hZABpAGwAO4DnAOdAcgBjAAlhcABzAHOgTCptAACgUCpvAHQAC2GAAWRtbgAIFA0UEhRpAGwAO4C4ALhAcCJ0eXYAAKCyKXQAAIGiADtlGBQZFKJAcgBkAG8A9ABiAXIAAOA12CDdgAFjZWkAKBQqFDIUeQBHZGMAawBtoBMn4SFyawCgEyfHY3IAAKPLJUVjZWZtcz8UQRRHFHcUfBSAFACgwykAocYCZWxGFEkUcQAAoFciZQBhAlAUAAAAAGAUciJyb3cAAAFsclYUWhTlIWZ0AKC6IWkiZ2h0AACguyGAAlJTYWNkAGgUaRRrFG8UcxSuYACgyCRzAHQAAKCbIukhcmMAoJoi4SFzaACgnSJuImludAAAoBAqaQBkAACg7yrjIWlyAKDCKfUhYnN1oGMmaQB0AACgYybsApMUmhS2FAAAwxRvAG4AZaA6APGgVCKrAG0CnxQAAAAAoxRhAHSgLABAYAChASJmbKcUqRTuABMNZQAAAW14rhSyFOUhbnQAoAEiZQDzANIB5wG6FAAAwBRkoEUibwB0AACgbSpuAPQAzAGAAWZyeQDIFMsUzhQA4DXYVN1vAOQA1wEAgakAO3MeAdMUcgAAoBchAAFhb9oU3hRyAHIAAKC1IXMAcwAAoBcnAAFjdeYU6hRyAADgNdi43AABYnDuFPIUZaDPKgCg0SploNAqAKDSKuQhb3QAoO8igANkZWxwcnZ3AAYVEBUbFSEVRBVlFYQV4SFycgABbHIMFQ4VAKA4KQCgNSlwAhYVAAAAABkVcgAAoN4iYwAAoN8i4SFycnCgtiEAoD0pgKIqImJjZG9zACsVMBU6FT4VQRVyImNhcAAAoEgqAAFhdTQVNxVwAACgRipwAACgSipvAHQAAKCNInIAAKBFKgDgKiIA/gACYWxydksVURVuFXMVcgByAG2gtyEAoDwpeQCAAWV2dwBYFWUVaRVxAHACXxUAAAAAYxVyAGUA4wAXFXUA4wAZFWUAZQAAoM4iZSJkZ2UAAKDPImUAbgA7gKQApEBlI2Fycm93AAABbHJ7FX8V5SFmdACgtiFpImdodAAAoLchZQDkAG0VAAFjaYsVkRVvAG4AaQBuAPQAkwFuAHQAAKAxImwiY3R5AACgLSOACUFIYWJjZGVmaGlqbG9yc3R1d3oAuBW7Fb8V1RXgFegV+RUKFhUWHxZUFlcWZRbFFtsW7xb7FgUXChdyAPIAtAJhAHIAAKBlKQACZ2xyc8YVyhXOFdAV5yFlcgCgICDlIXRoAKA4IfIA9QxoAHagECAAoKMiawHZFd4VYSJyb3cAAKAPKWEA4wBfAgABYXnkFecV8iFvbg9hNGQAoUYhYW/tFfQVAAFnciEC8RVyAACgyiF0InNlcQAAoHcqgAFnbG0A/xUCFgUWO4CwALBAdABhALRjcCJ0eXYAAKCxKQABaXIOFhIW8yFodACgfykA4DXYId1hAHIAAAFschsWHRYAoMMhAKDCIYACYWVnc3YAKBauAjYWOhY+Fm0AAKHEIm9zLhY0Fm4AZABzoMQi9SFpdACgZiZhIm1tYQDdY2kAbgAAoPIiAKH3AGlvQxZRFmQAZQAAgfcAO29KFksW90BuI3RpbWVzAACgxyJuAPgAUBZjAHkAUmRjAG8CXhYAAAAAYhZyAG4AAKAeI28AcAAAoA0jgAJscHR1dwBuFnEWdRaSFp4W7CFhciRgZgAA4DXYVd0AotkCZW1wc30WhBaJFo0WcQBkoFAibwB0AACgUSJpIm51cwAAoDgi7CF1cwCgFCLxInVhcmUAoKEiYgBsAGUAYgBhAHIAdwBlAGQAZwDlANcAbgCAAWFkaAClFqoWtBZyAHIAbwD3APUMbwB3AG4AYQByAHIAbwB3APMA8xVhI3Jwb29uAAABbHK8FsAWZQBmAPQAHBZpAGcAaAD0AB4WYgHJFs8WawBhAHIAbwD3AJILbwLUFgAAAADYFnIAbgAAoB8jbwBwAACgDCOAAWNvdADhFukW7BYAAXJ55RboFgDgNdi53FVkbAAAoPYp8iFvaxFhAAFkcvMW9xZvAHQAAKDxImkA5qC/JVsSAAFhaP8WAhdyAPIANQNhAPIA1wvhIm5nbGUAoKYpAAFjaQ4XEBd5AF9k5yJyYXJyAKD/JwAJRGFjZGVmZ2xtbm9wcXJzdHV4MRc4F0YXWxcyBF4XaRd5F40XrBe0F78X2RcVGCEYLRg1GEAYAAFEbzUXgRZvAPQA+BUAAWNzPBdCF3UAdABlADuA6QDpQPQhZXIAoG4qAAJhaW95TRdQF1YXWhfyIW9uG2FyAGOgViI7gOoA6kDsIW9uAKBVIk1kbwB0ABdhAAFEcmIXZhdvAHQAAKBSIgDgNdgi3XKhmipuF3QXYQB2AGUAO4DoAOhAZKCWKm8AdAAAoJgqgKGZKmlscwCAF4UXhxfuInRlcnMAoOcjAKATIWSglSpvAHQAAKCXKoABYXBzAJMXlheiF2MAcgATYXQAeQBzogUinxcAAAAAoRdlAHQAAKAFInAAMaADIDMBqRerFwCgBCAAoAUgAAFnc7AXsRdLYXAAAKACIAABZ3C4F7sXbwBuABlhZgAA4DXYVt2AAWFscwDFF8sXzxdyAHOg1SJsAACg4yl1AHMAAKBxKmkAAKG1A2x21RfYF28AbgC1Y/VjAAJjc3V24BfoF/0XEBgAAWlv5BdWF3IAYwAAoFYiaQLuFwAAAADwF+0ADQThIW50AAFnbPUX+Rd0AHIAAKCWKuUhc3MAoJUqgAFhZWkAAxgGGAoYbABzAD1gcwB0AACgXyJ2AESgYSJEAACgeCrwImFyc2wAoOUpAAFEYRkYHRhvAHQAAKBTInIAcgAAoHEpgAFjZGkAJxgqGO0XcgAAoC8hbwD0AIwCAAFhaDEYMhi3YzuA8ADwQAABbXI5GD0YbAA7gOsA60BvAACgrCCAAWNpcABGGEgYSxhsACFgcwD0ACwEAAFlb08YVxhjAHQAYQB0AGkAbwDuABoEbgBlAG4AdABpAGEAbADlADME4Ql1GAAAgRgAAIMYiBgAAAAAoRilGAAAqhgAALsYvhjRGAAA1xgnGWwAbABpAG4AZwBkAG8AdABzAGUA8QBlF3kARGRtImFsZQAAoEAmgAFpbHIAjRiRGJ0Y7CFpZwCgA/tpApcYAAAAAJoYZwAAoAD7aQBnAACgBPsA4DXYI93sIWlnAKAB++whaWcA4GYAagCAAWFsdACvGLIYthh0AACgbSZpAGcAAKAC+24AcwAAoLElbwBmAJJh8AHCGAAAxhhmAADgNdhX3QABYWvJGMwYbADsAGsEdqDUIgCg2SphI3J0aW50AACgDSoAAWFv2hgiGQABY3PeGB8ZsQPnGP0YBRkSGRUZAAAdGbID7xjyGPQY9xj5GAAA+xg7gL0AvUAAoFMhO4C8ALxAAKBVIQCgWSEAoFshswEBGQAAAxkAoFQhAKBWIbQCCxkOGQAAAAAQGTuAvgC+QACgVyEAoFwhNQAAoFghtgEZGQAAGxkAoFohAKBdITgAAKBeIWwAAKBEIHcAbgAAoCIjYwByAADgNdi73IAIRWFiY2RlZmdpamxub3JzdHYARhlKGVoZXhlmGWkZkhmWGZkZnRmgGa0ZxhnLGc8Z4BkjGmygZyIAoIwqgAFjbXAAUBlTGVgZ9SF0ZfVhbQBhAOSgswM6FgCghipyImV2ZQAfYQABaXliGWUZcgBjAB1hM2RvAHQAIWGAoWUibHFzAMYEcBl6GfGhZSLOBAAAdhlsAGEAbgD0AN8EgKF+KmNkbACBGYQZjBljAACgqSpvAHQAb6CAKmyggioAoIQqZeDbIgD+cwAAoJQqcgAA4DXYJN3noGsirATtIWVsAKA3IWMAeQBTZIChdyJFYWoApxmpGasZAKCSKgCgpSoAoKQqAAJFYWVztBm2Gb0ZwhkAoGkicABwoIoq8iFveACgiipxoIgq8aCIKrUZaQBtAACg5yJwAGYAAOA12FjdYQB2AOUAYwIAAWNp0xnWGXIAAKAKIW0AAKFzImVs3BneGQCgjioAoJAqAIM+ADtjZGxxco0E6xn0GfgZ/BkBGgABY2nvGfEZAKCnKnIAAKB6Km8AdAAAoNci0CFhcgCglSl1ImVzdAAAoHwqgAJhZGVscwAKGvQZFhrVBCAa8AEPGgAAFBpwAHIAbwD4AFkZcgAAoHgpcQAAAWxxxAQbGmwAZQBzAPMASRlpAO0A5AQAAWVuJxouGnIjdG5lcXEAAOBpIgD+xQAsGgAFQWFiY2Vma29zeUAaQxpmGmoabRqDGocalhrCGtMacgDyAMwCAAJpbG1yShpOGlAaVBpyAHMA8ABxD2YAvWBpAGwA9AASBQABZHJYGlsaYwB5AEpkAKGUIWN3YBpkGmkAcgAAoEgpAKCtIWEAcgAAoA8h6SFyYyVhgAFhbHIAcxp7Gn8a8iF0c3WgZSZpAHQAAKBlJuwhaXAAoCYg4yFvbgCguSJyAADgNdgl3XMAAAFld4wakRphInJvdwAAoCUpYSJyb3cAAKAmKYACYW1vcHIAnxqjGqcauhq+GnIAcgAAoP8h9CFodACgOyJrAAABbHKsGrMaZSRmdGFycm93AACgqSHpJGdodGFycm93AKCqIWYAAOA12Fnd4iFhcgCgFSCAAWNsdADIGswa0BpyAADgNdi93GEAcwDoAGka8iFvaydhAAFicNca2xr1IWxsAKBDIOghZW4AoBAg4Qr2GgAA/RoAAAgbExsaGwAAIRs7GwAAAAA+G2IbmRuVG6sbAACyG80b0htjAHUAdABlADuA7QDtQAChYyBpeQEbBhtyAGMAO4DuAO5AOGQAAWN4CxsNG3kANWRjAGwAO4ChAKFAAAFmcssCFhsA4DXYJt1yAGEAdgBlADuA7ADsQIChSCFpbm8AJxsyGzYbAAFpbisbLxtuAHQAAKAMKnQAAKAtIuYhaW4AoNwpdABhAACgKSHsIWlnM2GAAWFvcABDG1sbXhuAAWNndABJG0sbWRtyACthgAFlbHAAcQVRG1UbaQBuAOUAyAVhAHIA9AByBWgAMWFmAACgtyJlAGQAtWEAoggiY2ZvdGkbbRt1G3kb4SFyZQCgBSFpAG4AdKAeImkAZQAAoN0pZABvAPQAWxsAoisiY2VscIEbhRuPG5QbYQBsAACguiIAAWdyiRuNG2UAcgDzACMQ4wCCG2EicmhrAACgFyryIW9kAKA8KgACY2dwdJ8boRukG6gbeQBRZG8AbgAvYWYAAOA12FrdYQC5Y3UAZQBzAHQAO4C/AL9AAAFjabUbuRtyAADgNdi+3G4AAKIIIkVkc3bCG8QbyBvQAwCg+SJvAHQAAKD1Inag9CIAoPMiaaBiIOwhZGUpYesB1hsAANkbYwB5AFZkbAA7gO8A70AAA2NmbW9zdeYb7hvyG/Ub+hsFHAABaXnqG+0bcgBjADVhOWRyAADgNdgn3eEhdGg3YnAAZgAA4DXYW93jAf8bAAADHHIAAOA12L/c8iFjeVhk6yFjeVRkAARhY2ZnaGpvcxUcGhwiHCYcKhwtHDAcNRzwIXBhdqC6A/BjAAFleR4cIRzkIWlsN2E6ZHIAAOA12CjdciJlZW4AOGFjAHkARWRjAHkAXGRwAGYAAOA12FzdYwByAADgNdjA3IALQUJFSGFiY2RlZmdoamxtbm9wcnN0dXYAXhxtHHEcdRx5HN8cBx0dHTwd3B3tHfEdAR4EHh0eLB5FHrwewx7hHgkfPR9LH4ABYXJ0AGQcZxxpHHIA8gBvB/IAxQLhIWlsAKAbKeEhcnIAoA4pZ6BmIgCgiyphAHIAAKBiKWMJjRwAAJAcAACVHAAAAAAAAAAAAACZHJwcAACmHKgcrRwAANIc9SF0ZTph7SJwdHl2AKC0KXIAYQDuAFoG4iFkYbtjZwAAoegnZGyhHKMcAKCRKeUAiwYAoIUqdQBvADuAqwCrQHIAgKOQIWJmaGxwc3QAuhy/HMIcxBzHHMoczhxmoOQhcwAAoB8pcwAAoB0p6wCyGnAAAKCrIWwAAKA5KWkAbQAAoHMpbAAAoKIhAKGrKmFl1hzaHGkAbAAAoBkpc6CtKgDgrSoA/oABYWJyAOUc6RztHHIAcgAAoAwpcgBrAACgcicAAWFr8Rz4HGMAAAFla/Yc9xx7YFtgAAFlc/wc/hwAoIspbAAAAWR1Ax0FHQCgjykAoI0pAAJhZXV5Dh0RHRodHB3yIW9uPmEAAWRpFR0YHWkAbAA8YewAowbiAPccO2QAAmNxcnMkHScdLB05HWEAAKA2KXUAbwDyoBwgqhEAAWR1MB00HeghYXIAoGcpcyJoYXIAAKBLKWgAAKCyIQCiZCJmZ3FzRB1FB5Qdnh10AIACYWhscnQATh1WHWUdbB2NHXIicm93AHSgkCFhAOkAzxxhI3Jwb29uAAABZHVeHWId7yF3bgCgvSFwAACgvCHlJGZ0YXJyb3dzAKDHIWkiZ2h0AIABYWhzAHUdex2DHXIicm93APOglCGdBmEAcgBwAG8AbwBuAPMAzgtxAHUAaQBnAGEAcgByAG8A9wBlGugkcmVldGltZXMAoMsi8aFkIk0HAACaHWwAYQBuAPQAXgcAon0qY2Rnc6YdqR2xHbcdYwAAoKgqbwB0AG+gfypyoIEqAKCDKmXg2iIA/nMAAKCTKoACYWRlZ3MAwB3GHcod1h3ZHXAAcAByAG8A+ACmHG8AdAAAoNYicQAAAWdxzx3SHXQA8gBGB2cAdADyAHQcdADyAFMHaQDtAGMHgAFpbHIA4h3mHeod8yFodACgfClvAG8A8gDKBgDgNdgp3UWgdiIAoJEqYQH1Hf4dcgAAAWR1YB35HWygvCEAoGopbABrAACghCVjAHkAWWQAomoiYWNodAweDx4VHhkecgDyAGsdbwByAG4AZQDyAGAW4SFyZACgaylyAGkAAKD6JQABaW8hHiQe5CFvdEBh9SFzdGGgsCPjIWhlAKCwIwACRWFlczMeNR48HkEeAKBoInAAcKCJKvIhb3gAoIkqcaCHKvGghyo0HmkAbQAAoOYiAARhYm5vcHR3elIeXB5fHoUelh6mHqsetB4AAW5yVh5ZHmcAAKDsJ3IAAKD9IXIA6wCwBmcAgAFsbXIAZh52Hnse5SFmdAABYXKIB2weaQBnAGgAdABhAHIAcgBvAPcAkwfhInBzdG8AoPwnaQBnAGgAdABhAHIAcgBvAPcAmgdwI2Fycm93AAABbHKNHpEeZQBmAPQAxhxpImdodAAAoKwhgAFhZmwAnB6fHqIecgAAoIUpAOA12F3ddQBzAACgLSppIm1lcwAAoDQqYQGvHrMecwB0AACgFyLhAIoOZaHKJbkeRhLuIWdlAKDKJWEAcgBsoCgAdAAAoJMpgAJhY2htdADMHs8e1R7bHt0ecgDyAJ0GbwByAG4AZQDyANYWYQByAGSgyyEAoG0pAKAOIHIAaQAAoL8iAANhY2hpcXTrHu8e1QfzHv0eBh/xIXVvAKA5IHIAAOA12MHcbQDloXIi+h4AAPweAKCNKgCgjyoAAWJ19xwBH28AcqAYIACgGiDyIW9rQmEAhDwAO2NkaGlscXJCBhcfxh0gHyQfKB8sHzEfAAFjaRsfHR8AoKYqcgAAoHkqcgBlAOUAkx3tIWVzAKDJIuEhcnIAoHYpdSJlc3QAAKB7KgABUGk1HzkfYQByAACglillocMlAgdfEnIAAAFkdUIfRx9zImhhcgAAoEop6CFhcgCgZikAAWVuTx9WH3IjdG5lcXEAAOBoIgD+xQBUHwAHRGFjZGVmaGlsbm9wc3VuH3Ifoh+rH68ftx+7H74f5h/uH/MfBwj/HwsgxCFvdACgOiIAAmNscHJ5H30fiR+eH3IAO4CvAK9AAAFldIEfgx8AoEImZaAgJ3MAZQAAoCAnc6CmIXQAbwCAoaYhZGx1AJQfmB+cH28AdwDuAHkDZQBmAPQA6gbwAOkO6yFlcgCgriUAAW95ph+qH+0hbWEAoCkqPGThIXNoAKAUIOElc3VyZWRhbmdsZQCgISJyAADgNdgq3W8AAKAnIYABY2RuAMQfyR/bH3IAbwA7gLUAtUBhoiMi0B8AANMf1x9zAPQAKxFpAHIAAKDwKm8AdAA7gLcAt0B1AHMA4qESIh4TAADjH3WgOCIAoCoqYwHqH+0fcAAAoNsq8gB+GnAAbAB1APMACAgAAWRw9x/7H+UhbHMAoKciZgAA4DXYXt0AAWN0AyAHIHIAAOA12MLc8CFvcwCgPiJsobwDECAVIPQiaW1hcACguCJhAPAAEyAADEdMUlZhYmNkZWZnaGlqbG1vcHJzdHV2dzwgRyBmIG0geSCqILgg2iDeIBEhFSEyIUMhTSFQIZwhnyHSIQAiIyKLIrEivyIUIwABZ3RAIEMgAODZIjgD9uBrItIgBwmAAWVsdABNIF8gYiBmAHQAAAFhclMgWCByInJvdwAAoM0h6SRnaHRhcnJvdwCgziEA4NgiOAP24Goi0iBfCekkZ2h0YXJyb3cAoM8hAAFEZHEgdSDhIXNoAKCvIuEhc2gAoK4igAJiY25wdACCIIYgiSCNIKIgbABhAACgByL1IXRlRGFnAADgICLSIACiSSJFaW9wlSCYIJwgniAA4HAqOANkAADgSyI4A3MASWFyAG8A+AAyCnUAcgBhoG4mbADzoG4mmwjzAa8gAACzIHAAO4CgAKBAbQBwAOXgTiI4AyoJgAJhZW91eQDBIMogzSDWINkg8AHGIAAAyCAAoEMqbwBuAEhh5CFpbEZhbgBnAGSgRyJvAHQAAOBtKjgDcAAAoEIqPWThIXNoAKATIACjYCJBYWRxc3jpIO0g+SD+IAIhDCFyAHIAAKDXIXIAAAFocvIg9SBrAACgJClvoJch9wAGD28AdAAA4FAiOAN1AGkA9gC7CAABZWkGIQohYQByAACgKCntAN8I6SFzdPOgBCLlCHIAAOA12CvdAAJFZXN0/wgcISshLiHxoXEiIiEAABMJ8aFxIgAJAAAnIWwAYQBuAPQAEwlpAO0AGQlyoG8iAKBvIoABQWFwADghOyE/IXIA8gBeIHIAcgAAoK4hYQByAACg8ipzogsiSiEAAAAAxwtkoPwiAKD6ImMAeQBaZIADQUVhZGVzdABcIV8hYiFmIWkhkyGWIXIA8gBXIADgZiI4A3IAcgAAoJohcgAAoCUggKFwImZxcwBwIYQhjiF0AAABYXJ1IXohcgByAG8A9wBlIWkAZwBoAHQAYQByAHIAbwD3AD4h8aFwImAhAACKIWwAYQBuAPQAZwlz4H0qOAMAoG4iaQDtAG0JcqBuImkA5aDqIkUJaQDkADoKAAFwdKMhpyFmAADgNdhf3YCBrAA7aW4AriGvIcchrEBuAIChCSJFZHYAtyG6Ib8hAOD5IjgDbwB0AADg9SI4A+EB1gjEIcYhAKD3IgCg9iJpAHagDCLhAagJzyHRIQCg/iIAoP0igAFhb3IA2CHsIfEhcgCAoSYiYXN0AOAh5SHpIWwAbABlAOwAywhsAADg/SrlIADgAiI4A2wiaW50AACgFCrjoYAi9yEAAPohdQDlAJsJY+CvKjgDZaCAIvEAkwkAAkFhaXQHIgoiFyIeInIA8gBsIHIAcgAAoZshY3cRIhQiAOAzKTgDAOCdITgDZyRodGFycm93AACgmyFyAGkA5aDrIr4JgANjaGltcHF1AC8iPCJHIpwhTSJQIloigKGBImNlcgA2Iv0JOSJ1AOUABgoA4DXYw9zvIXJ0bQKdIQAAAABEImEAcgDhAOEhbQBloEEi8aBEIiYKYQDyAMsIcwB1AAABYnBWIlgi5QDUCeUA3wmAAWJjcABgInMieCKAoYQiRWVzAGci7glqIgDgxSo4A2UAdABl4IIi0iBxAPGgiCJoImMAZaCBIvEA/gmAoYUiRWVzAH8iFgqCIgDgxio4A2UAdABl4IMi0iBxAPGgiSKAIgACZ2lscpIilCKaIpwi7AAMCWwAZABlADuA8QDxQOcAWwlpI2FuZ2xlAAABbHKkIqoi5SFmdGWg6iLxAEUJaSJnaHQAZaDrIvEAvgltoL0DAKEjAGVzuCK8InIAbwAAoBYhcAAAoAcggARESGFkZ2lscnMAziLSItYi2iLeIugi7SICIw8j4SFzaACgrSLhIXJyAKAEKXAAAOBNItIg4SFzaACgrCIAAWV04iLlIgDgZSLSIADgPgDSIG4iZmluAACg3imAAUFldADzIvci+iJyAHIAAKACKQDgZCLSIHLgPADSIGkAZQAA4LQi0iAAAUF0BiMKI3IAcgAAoAMp8iFpZQDgtSLSIGkAbQAA4Dwi0iCAAUFhbgAaIx4jKiNyAHIAAKDWIXIAAAFociMjJiNrAACgIylvoJYh9wD/DuUhYXIAoCcpUxJqFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVCMAAF4jaSN/I4IjjSOeI8AUAAAAAKYjwCMAANoj3yMAAO8jHiQvJD8kRCQAAWNzVyNsFHUAdABlADuA8wDzQAABaXlhI2cjcgBjoJoiO4D0APRAPmSAAmFiaW9zAHEjdCN3I3EBeiNzAOgAdhTsIWFjUWF2AACgOCrvIWxkAKC8KewhaWdTYQABY3KFI4kjaQByAACgvykA4DXYLN1vA5QjAAAAAJYjAACcI24A22JhAHYAZQA7gPIA8kAAoMEpAAFibaEjjAphAHIAAKC1KQACYWNpdKwjryO6I70jcgDyAFkUAAFpcrMjtiNyAACgvinvIXNzAKC7KW4A5QDZCgCgwCmAAWFlaQDFI8gjyyNjAHIATWFnAGEAyWOAAWNkbgDRI9Qj1iPyIW9uv2MAoLYpdQDzAHgBcABmAADgNdhg3YABYWVsAOQj5yPrI3IAAKC3KXIAcAAAoLkpdQDzAHwBAKMoImFkaW9zdvkj/CMPJBMkFiQbJHIA8gBeFIChXSplZm0AAyQJJAwkcgBvoDQhZgAAoDQhO4CqAKpAO4C6ALpA5yFvZgCgtiJyAACgVipsIm9wZQAAoFcqAKBbKoABY2xvACMkJSQrJPIACCRhAHMAaAA7gPgA+EBsAACgmCJpAGwBMyQ4JGQAZQA7gPUA9UBlAHMAYaCXInMAAKA2Km0AbAA7gPYA9kDiIWFyAKA9I+EKXiQAAHokAAB8JJQkAACYJKkkAAAAALUkEQsAAPAkAAAAAAQleiUAAIMlcgCAoSUiYXN0AGUkbyQBCwCBtgA7bGokayS2QGwAZQDsABgDaQJ1JAAAAAB4JG0AAKDzKgCg/Sp5AD9kcgCAAmNpbXB0AIUkiCSLJJkSjyRuAHQAJWBvAGQALmBpAGwAAKAwIOUhbmsAoDEgcgAA4DXYLd2AAWltbwCdJKAkpCR2oMYD1WNtAGEA9AD+B24AZQAAoA4m9KHAA64kAAC0JGMjaGZvcmsAAKDUItZjAAFhdbgkxCRuAAABY2u9JMIkawBooA8hAKAOIfYAaRpzAACkKwBhYmNkZW1zdNMkIRPXJNsk4STjJOck6yTjIWlyAKAjKmkAcgAAoCIqAAFvdYsW3yQAoCUqAKByKm4AO4CxALFAaQBtAACgJip3AG8AAKAnKoABaXB1APUk+iT+JO4idGludACgFSpmAADgNdhh3W4AZAA7gKMAo0CApHoiRWFjZWlub3N1ABMlFSUYJRslTCVRJVklSSV1JQCgsypwAACgtyp1AOUAPwtjoK8qgKJ6ImFjZW5zACclLSU0JTYlSSVwAHAAcgBvAPgAFyV1AHIAbAB5AGUA8QA/C/EAOAuAAWFlcwA8JUElRSXwInByb3gAoLkqcQBxAACgtSppAG0AAKDoImkA7QBEC20AZQDzoDIgIguAAUVhcwBDJVclRSXwAEAlgAFkZnAATwtfJXElgAFhbHMAZSVpJW0l7CFhcgCgLiPpIW5lAKASI/UhcmYAoBMjdKAdIu8AWQvyIWVsAKCwIgABY2l9JYElcgAA4DXYxdzIY24iY3NwAACgCCAAA2Zpb3BzdZElKxuVJZolnyWkJXIAAOA12C7dcABmAADgNdhi3XIiaW1lAACgVyBjAHIAAOA12MbcgAFhZW8AqiW6JcAldAAAAWVpryW2JXIAbgBpAG8AbgDzABkFbgB0AACgFipzAHQAZaA/APEACRj0AG0LgApBQkhhYmNkZWZoaWxtbm9wcnN0dXgA4yXyJfYl+iVpJpAmpia9JtUm5ib4JlonaCdxJ3UnnietJ7EnyCfiJ+cngAFhcnQA6SXsJe4lcgDyAJkM8gD6AuEhaWwAoBwpYQByAPIA3BVhAHIAAKBkKYADY2RlbnFydAAGJhAmEyYYJiYmKyZaJgABZXUKJg0mAOA9IjEDdABlAFVhaQDjACAN7SJwdHl2AKCzKWcAgKHpJ2RlbAAgJiImJCYAoJIpAKClKeUA9wt1AG8AO4C7ALtAcgAApZIhYWJjZmhscHN0dz0mQCZFJkcmSiZMJk4mUSZVJlgmcAAAoHUpZqDlIXMAAKAgKQCgMylzAACgHinrALka8ACVHmwAAKBFKWkAbQAAoHQpbAAAoKMhAKCdIQABYWleJmImaQBsAACgGilvAG6gNiJhAGwA8wB2C4ABYWJyAG8mciZ2JnIA8gAvEnIAawAAoHMnAAFha3omgSZjAAABZWt/JoAmfWBdYAABZXOFJocmAKCMKWwAAAFkdYwmjiYAoI4pAKCQKQACYWV1eZcmmiajJqUm8iFvbllhAAFkaZ4moSZpAGwAV2HsAA8M4gCAJkBkAAJjbHFzrSawJrUmuiZhAACgNylkImhhcgAAoGkpdQBvAPKgHSCjAWgAAKCzIYABYWNnAMMm0iaUC2wAgKEcIWlwcwDLJs4migxuAOUAoAxhAHIA9ADaC3QAAKCtJYABaWxyANsm3ybjJvMhaHQAoH0pbwBvAPIANgwA4DXYL90AAWFv6ib1JnIAAAFkde8m8SYAoMEhbKDAIQCgbCl2oMED8WOAAWducwD+Jk4nUCdoAHQAAANhaGxyc3QKJxInISc1Jz0nRydyInJvdwB0oJIhYQDpAFYmYSNycG9vbgAAAWR1GiceJ28AdwDuAPAmcAAAoMAh5SFmdAABYWgnJy0ncgByAG8AdwDzAAkMYQByAHAAbwBvAG4A8wATBGklZ2h0YXJyb3dzAACgySFxAHUAaQBnAGEAcgByAG8A9wBZJugkcmVldGltZXMAoMwiZwDaYmkAbgBnAGQAbwB0AHMAZQDxABwYgAFhaG0AYCdjJ2YncgDyAAkMYQDyABMEAKAPIG8idXN0AGGgsSPjIWhlAKCxI+0haWQAoO4qAAJhYnB0fCeGJ4knmScAAW5ygCeDJ2cAAKDtJ3IAAKD+IXIA6wAcDIABYWZsAI8nkieVJ3IAAKCGKQDgNdhj3XUAcwAAoC4qaSJtZXMAAKA1KgABYXCiJ6gncgBnoCkAdAAAoJQp7yJsaW50AKASKmEAcgDyADwnAAJhY2hxuCe8J6EMwCfxIXVvAKA6IHIAAOA12MfcAAFidYAmxCdvAPKgGSCoAYABaGlyAM4n0ifWJ3IAZQDlAE0n7SFlcwCgyiJpAIChuSVlZmwAXAxjEt4n9CFyaQCgzinsInVoYXIAoGgpAKAeIWENBSgJKA0oSyhVKIYoAACLKLAoAAAAAOMo5ygAABApJCkxKW0pcSmHKaYpAACYKgAAAACxKmMidXRlAFthcQB1AO8ABR+ApHsiRWFjZWlucHN5ABwoHignKCooLygyKEEoRihJKACgtCrwASMoAAAlKACguCpvAG4AYWF1AOUAgw1koLAqaQBsAF9hcgBjAF1hgAFFYXMAOCg6KD0oAKC2KnAAAKC6KmkAbQAAoOki7yJsaW50AKATKmkA7QCIDUFkbwB0AGKixSKRFgAAAABTKACgZiqAA0FhY21zdHgAYChkKG8ocyh1KHkogihyAHIAAKDYIXIAAAFocmkoayjrAJAab6CYIfcAzAd0ADuApwCnQGkAO2D3IWFyAKApKW0AAAFpbn4ozQBuAHUA8wDOAHQAAKA2J3IA7+A12DDdIxkAAmFjb3mRKJUonSisKHIAcAAAoG8mAAFoeZkonChjAHkASWRIZHIAdABtAqUoAAAAAKgoaQDkAFsPYQByAGEA7ABsJDuArQCtQAABZ22zKLsobQBhAAChwwNmdroouijCY4CjPCJkZWdsbnByAMgozCjPKNMo1yjaKN4obwB0AACgairxoEMiCw5FoJ4qAKCgKkWgnSoAoJ8qZQAAoEYi7CF1cwCgJCrhIXJyAKByKWEAcgDyAPwMAAJhZWl07Sj8KAEpCCkAAWxz8Sj4KGwAcwBlAHQAbQDpAH8oaABwAACgMyrwImFyc2wAoOQpAAFkbFoPBSllAACgIyNloKoqc6CsKgDgrCoA/oABZmxwABUpGCkfKfQhY3lMZGKgLwBhoMQpcgAAoD8jZgAA4DXYZN1hAAABZHIoKRcDZQBzAHWgYCZpAHQAAKBgJoABY3N1ADYpRilhKQABYXU6KUApcABzoJMiAOCTIgD+cABzoJQiAOCUIgD+dQAAAWJwSylWKQChjyJlcz4NUCllAHQAZaCPIvEAPw0AoZAiZXNIDVspZQB0AGWgkCLxAEkNAKGhJWFmZilbBHIAZQFrKVwEAKChJWEAcgDyAAMNAAJjZW10dyl7KX8pgilyAADgNdjI3HQAbQDuAM4AaQDsAAYpYQByAOYAVw0AAWFyiimOKXIA5qAGJhESAAFhbpIpoylpImdodAAAAWVwmSmgKXAAcwBpAGwAbwDuANkXaADpAKAkcwCvYIACYmNtbnAArin8KY4NJSooKgCkgiJFZGVtbnByc7wpvinCKcgpzCnUKdgp3CkAoMUqbwB0AACgvSpkoIYibwB0AACgwyr1IWx0AKDBKgABRWXQKdIpAKDLKgCgiiLsIXVzAKC/KuEhcnIAoHkpgAFlaXUA4inxKfQpdAAAoYIiZW7oKewpcQDxoIYivSllAHEA8aCKItEpbQAAoMcqAAFicPgp+ikAoNUqAKDTKmMAgKJ7ImFjZW5zAAcqDSoUKhYqRihwAHAAcgBvAPgAIyh1AHIAbAB5AGUA8QCDDfEAfA2AAWFlcwAcKiIqPShwAHAAcgBvAPgAPChxAPEAOShnAACgaiYApoMiMTIzRWRlaGxtbnBzPCo/KkIqRSpHKlIqWCpjKmcqaypzKncqO4C5ALlAO4CyALJAO4CzALNAAKDGKgABb3NLKk4qdAAAoL4qdQBiAACg2CpkoIcibwB0AACgxCpzAAABb3VdKmAqbAAAoMknYgAAoNcq4SFycgCgeyn1IWx0AKDCKgABRWVvKnEqAKDMKgCgiyLsIXVzAKDAKoABZWl1AH0qjCqPKnQAAKGDImVugyqHKnEA8aCHIkYqZQBxAPGgiyJwKm0AAKDIKgABYnCTKpUqAKDUKgCg1iqAAUFhbgCdKqEqrCpyAHIAAKDZIXIAAAFocqYqqCrrAJUab6CZIfcAxQf3IWFyAKAqKWwAaQBnADuA3wDfQOELzyrZKtwq6SrsKvEqAAD1KjQrAAAAAAAAAAAAAEwrbCsAAHErvSsAAAAAAADRK3IC1CoAAAAA2CrnIWV0AKAWI8RjcgDrAOUKgAFhZXkA4SrkKucq8iFvbmVh5CFpbGNhQmRvAPQAIg5sInJlYwAAoBUjcgAA4DXYMd0AAmVpa2/7KhIrKCsuK/IBACsAAAkrZQAAATRm6g0EK28AcgDlAOsNYQBzorgDECsAAAAAEit5AG0A0WMAAWNuFislK2sAAAFhcxsrIStwAHAAcgBvAPgAFw5pAG0AAKA8InMA8AD9DQABYXMsKyEr8AAXDnIAbgA7gP4A/kDsATgrOyswG2QA5QBnAmUAcwCAgdcAO2JkAEMrRCtJK9dAYaCgInIAAKAxKgCgMCqAAWVwcwBRK1MraSvhAAkh4qKkIlsrXysAAAAAYytvAHQAAKA2I2kAcgAAoPEqb+A12GXdcgBrAACg2irhAHgociJpbWUAAKA0IIABYWlwAHYreSu3K2QA5QC+DYADYWRlbXBzdACFK6MrmiunK6wrsCuzK24iZ2xlAACitSVkbHFykCuUK5ornCvvIXduAKC/JeUhZnRloMMl8QACBwCgXCJpImdodABloLkl8QBdDG8AdAAAoOwlaSJudXMAAKA6KuwhdXMAoDkqYgAAoM0p6SFtZQCgOyrlInppdW0AoOIjgAFjaHQAwivKK80rAAFyecYrySsA4DXYydxGZGMAeQBbZPIhb2tnYQABaW/UK9creAD0ANERaCJlYWQAAAFsct4r5ytlAGYAdABhAHIAcgBvAPcAXQbpJGdodGFycm93AKCgIQAJQUhhYmNkZmdobG1vcHJzdHV3CiwNLBEsHSwnLDEsQCxLLFIsYix6LIQsjyzLLOgs7Sz/LAotcgDyAAkDYQByAACgYykAAWNyFSwbLHUAdABlADuA+gD6QPIACQ1yAOMBIywAACUseQBeZHYAZQBtYQABaXkrLDAscgBjADuA+wD7QENkgAFhYmgANyw6LD0scgDyANEO7CFhY3FhYQDyAOAOAAFpckQsSCzzIWh0AKB+KQDgNdgy3XIAYQB2AGUAO4D5APlAYQFWLF8scgAAAWxyWixcLACgvyEAoL4hbABrAACggCUAAWN0Zix2LG8CbCwAAAAAcyxyAG4AZaAcI3IAAKAcI28AcAAAoA8jcgBpAACg+CUAAWFsfiyBLGMAcgBrYTuAqACoQAABZ3CILIssbwBuAHNhZgAA4DXYZt0AA2FkaGxzdZksniynLLgsuyzFLHIAcgBvAPcACQ1vAHcAbgBhAHIAcgBvAPcA2A5hI3Jwb29uAAABbHKvLLMsZQBmAPQAWyxpAGcAaAD0AF0sdQDzAKYOaQAAocUDaGzBLMIs0mNvAG4AxWPwI2Fycm93cwCgyCGAAWNpdADRLOEs5CxvAtcsAAAAAN4scgBuAGWgHSNyAACgHSNvAHAAAKAOI24AZwBvYXIAaQAAoPklYwByAADgNdjK3IABZGlyAPMs9yz6LG8AdAAAoPAi7CFkZWlhaQBmoLUlAKC0JQABYW0DLQYtcgDyAMosbAA7gPwA/EDhIm5nbGUAoKcpgAdBQkRhY2RlZmxub3Byc3oAJy0qLTAtNC2bLZ0toS2/LcMtxy3TLdgt3C3gLfwtcgDyABADYQByAHag6CoAoOkqYQBzAOgA/gIAAW5yOC08LechcnQAoJwpgANla25wcnN0AJkpSC1NLVQtXi1iLYItYQBwAHAA4QAaHG8AdABoAGkAbgDnAKEXgAFoaXIAoSmzJFotbwBwAPQAdCVooJUh7wD4JgABaXVmLWotZwBtAOEAuygAAWJwbi14LXMjZXRuZXEAceCKIgD+AODLKgD+cyNldG5lcQBx4IsiAP4A4MwqAP4AAWhyhi2KLWUAdADhABIraSNhbmdsZQAAAWxyki2WLeUhZnQAoLIiaSJnaHQAAKCzInkAMmThIXNoAKCiIoABZWxyAKcttC24LWKiKCKuLQAAAACyLWEAcgAAoLsicQAAoFoi7CFpcACg7iIAAWJ0vC1eD2EA8gBfD3IAAOA12DPddAByAOkAlS1zAHUAAAFicM0t0C0A4IIi0iAA4IMi0iBwAGYAAOA12GfdcgBvAPAAWQt0AHIA6QCaLQABY3XkLegtcgAA4DXYy9wAAWJw7C30LW4AAAFFZXUt8S0A4IoiAP5uAAABRWV/LfktAOCLIgD+6SJnemFnAKCaKYADY2Vmb3BycwANLhAuJS4pLiMuLi40LukhcmN1YQABZGkULiEuAAFiZxguHC5hAHIAAKBfKmUAcaAnIgCgWSLlIXJwAKAYIXIAAOA12DTdcABmAADgNdho3WWgQCJhAHQA6ABqD2MAcgAA4DXYzNzjCuQRUC4AAFQuAABYLmIuAAAAAGMubS5wLnQuAAAAAIguki4AAJouJxIqEnQAcgDpAB0ScgAA4DXYNd0AAUFhWy5eLnIA8gDnAnIA8gCTB75jAAFBYWYuaS5yAPIA4AJyAPIAjAdhAPAAeh5pAHMAAKD7IoABZHB0APgReS6DLgABZmx9LoAuAOA12GnddQDzAP8RaQBtAOUABBIAAUFhiy6OLnIA8gDuAnIA8gCaBwABY3GVLgoScgAA4DXYzdwAAXB0nS6hLmwAdQDzACUScgDpACASAARhY2VmaW9zdbEuvC7ELsguzC7PLtQu2S5jAAABdXm2LrsudABlADuA/QD9QE9kAAFpecAuwy5yAGMAd2FLZG4AO4ClAKVAcgAA4DXYNt1jAHkAV2RwAGYAAOA12GrdYwByAADgNdjO3AABY23dLt8ueQBOZGwAO4D/AP9AAAVhY2RlZmhpb3N38y73Lv8uAi8MLxAvEy8YLx0vIi9jInV0ZQB6YQABYXn7Lv4u8iFvbn5hN2RvAHQAfGEAAWV0Bi8KL3QAcgDmAB8QYQC2Y3IAAOA12DfdYwB5ADZk5yJyYXJyAKDdIXAAZgAA4DXYa91jAHIAAOA12M/cAAFqbiYvKC8AoA0gagAAoAwg");

// node_modules/entities/dist/esm/generated/decode-data-xml.js
init_kolmafia_polyfill();

// node_modules/entities/dist/esm/internal/bin-trie-flags.js
init_kolmafia_polyfill();
var BinTrieFlags;
(function(BinTrieFlags2) {
  BinTrieFlags2[BinTrieFlags2.VALUE_LENGTH = 49152] = "VALUE_LENGTH", BinTrieFlags2[BinTrieFlags2.FLAG13 = 8192] = "FLAG13", BinTrieFlags2[BinTrieFlags2.BRANCH_LENGTH = 8064] = "BRANCH_LENGTH", BinTrieFlags2[BinTrieFlags2.JUMP_TABLE = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));

// node_modules/entities/dist/esm/decode.js
function _classCallCheck7(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties7(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey9(descriptor.key), descriptor);
  }
}
function _createClass7(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties7(Constructor.prototype, protoProps), staticProps && _defineProperties7(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey9(arg) {
  var key = _toPrimitive9(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive9(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var CharCodes;
(function(CharCodes2) {
  CharCodes2[CharCodes2.NUM = 35] = "NUM", CharCodes2[CharCodes2.SEMI = 59] = "SEMI", CharCodes2[CharCodes2.EQUALS = 61] = "EQUALS", CharCodes2[CharCodes2.ZERO = 48] = "ZERO", CharCodes2[CharCodes2.NINE = 57] = "NINE", CharCodes2[CharCodes2.LOWER_A = 97] = "LOWER_A", CharCodes2[CharCodes2.LOWER_F = 102] = "LOWER_F", CharCodes2[CharCodes2.LOWER_X = 120] = "LOWER_X", CharCodes2[CharCodes2.LOWER_Z = 122] = "LOWER_Z", CharCodes2[CharCodes2.UPPER_A = 65] = "UPPER_A", CharCodes2[CharCodes2.UPPER_F = 70] = "UPPER_F", CharCodes2[CharCodes2.UPPER_Z = 90] = "UPPER_Z";
})(CharCodes || (CharCodes = {}));
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
function isEntityInAttributeInvalidEnd(code) {
  return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
}
var EntityDecoderState;
(function(EntityDecoderState2) {
  EntityDecoderState2[EntityDecoderState2.EntityStart = 0] = "EntityStart", EntityDecoderState2[EntityDecoderState2.NumericStart = 1] = "NumericStart", EntityDecoderState2[EntityDecoderState2.NumericDecimal = 2] = "NumericDecimal", EntityDecoderState2[EntityDecoderState2.NumericHex = 3] = "NumericHex", EntityDecoderState2[EntityDecoderState2.NamedEntity = 4] = "NamedEntity";
})(EntityDecoderState || (EntityDecoderState = {}));
var DecodingMode;
(function(DecodingMode2) {
  DecodingMode2[DecodingMode2.Legacy = 0] = "Legacy", DecodingMode2[DecodingMode2.Strict = 1] = "Strict", DecodingMode2[DecodingMode2.Attribute = 2] = "Attribute";
})(DecodingMode || (DecodingMode = {}));
var EntityDecoder = /* @__PURE__ */ function() {
  function EntityDecoder2(decodeTree, emitCodePoint, errors) {
    _classCallCheck7(this, EntityDecoder2), this.decodeTree = decodeTree, this.emitCodePoint = emitCodePoint, this.errors = errors, this.state = EntityDecoderState.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = DecodingMode.Strict;
  }
  return _createClass7(EntityDecoder2, [{
    key: "startEntity",
    value: function(decodeMode) {
      this.decodeMode = decodeMode, this.state = EntityDecoderState.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
    }
  }, {
    key: "write",
    value: function(input, offset) {
      switch (this.state) {
        case EntityDecoderState.EntityStart:
          return input.charCodeAt(offset) === CharCodes.NUM ? (this.state = EntityDecoderState.NumericStart, this.consumed += 1, this.stateNumericStart(input, offset + 1)) : (this.state = EntityDecoderState.NamedEntity, this.stateNamedEntity(input, offset));
        case EntityDecoderState.NumericStart:
          return this.stateNumericStart(input, offset);
        case EntityDecoderState.NumericDecimal:
          return this.stateNumericDecimal(input, offset);
        case EntityDecoderState.NumericHex:
          return this.stateNumericHex(input, offset);
        case EntityDecoderState.NamedEntity:
          return this.stateNamedEntity(input, offset);
      }
    }
  }, {
    key: "stateNumericStart",
    value: function(input, offset) {
      return offset >= input.length ? -1 : (input.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X ? (this.state = EntityDecoderState.NumericHex, this.consumed += 1, this.stateNumericHex(input, offset + 1)) : (this.state = EntityDecoderState.NumericDecimal, this.stateNumericDecimal(input, offset));
    }
  }, {
    key: "stateNumericHex",
    value: function(input, offset) {
      for (; offset < input.length; ) {
        var char = input.charCodeAt(offset);
        if (isNumber(char) || isHexadecimalCharacter(char)) {
          var digit = char <= CharCodes.NINE ? char - CharCodes.ZERO : (char | TO_LOWER_BIT) - CharCodes.LOWER_A + 10;
          this.result = this.result * 16 + digit, this.consumed++, offset++;
        } else
          return this.emitNumericEntity(char, 3);
      }
      return -1;
    }
  }, {
    key: "stateNumericDecimal",
    value: function(input, offset) {
      for (; offset < input.length; ) {
        var char = input.charCodeAt(offset);
        if (isNumber(char))
          this.result = this.result * 10 + (char - CharCodes.ZERO), this.consumed++, offset++;
        else
          return this.emitNumericEntity(char, 2);
      }
      return -1;
    }
  }, {
    key: "emitNumericEntity",
    value: function(lastCp, expectedLength) {
      var _a2;
      if (this.consumed <= expectedLength)
        return (_a2 = this.errors) === null || _a2 === void 0 || _a2.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      if (lastCp === CharCodes.SEMI)
        this.consumed += 1;
      else if (this.decodeMode === DecodingMode.Strict)
        return 0;
      return this.emitCodePoint(replaceCodePoint(this.result), this.consumed), this.errors && (lastCp !== CharCodes.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
    }
  }, {
    key: "stateNamedEntity",
    value: function(input, offset) {
      for (var decodeTree = this.decodeTree, current2 = decodeTree[this.treeIndex], valueLength = (current2 & BinTrieFlags.VALUE_LENGTH) >> 14; offset < input.length; ) {
        if (valueLength === 0 && (current2 & BinTrieFlags.FLAG13) !== 0) {
          var runLength = (current2 & BinTrieFlags.BRANCH_LENGTH) >> 7, firstChar = current2 & BinTrieFlags.JUMP_TABLE;
          if (offset + runLength > input.length)
            return -1;
          if (input.charCodeAt(offset) !== firstChar)
            return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
          offset++, this.excess++;
          for (var remaining = runLength - 1, runPos = 1; runPos < runLength; runPos += 2) {
            var packedWord = decodeTree[this.treeIndex + 1 + (runPos - 1 >> 1)], low = packedWord & 255;
            if (input.charCodeAt(offset) !== low)
              return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
            offset++, this.excess++;
            var high = packedWord >> 8 & 255;
            if (runPos + 1 < runLength) {
              if (input.charCodeAt(offset) !== high)
                return this.result === 0 ? 0 : this.emitNotTerminatedNamedEntity();
              offset++, this.excess++;
            }
          }
          this.treeIndex += 1 + (remaining + 1 >> 1), current2 = decodeTree[this.treeIndex], valueLength = (current2 & BinTrieFlags.VALUE_LENGTH) >> 14;
        }
        if (offset >= input.length)
          break;
        var char = input.charCodeAt(offset);
        if (char === CharCodes.SEMI && valueLength !== 0 && (current2 & BinTrieFlags.FLAG13) !== 0)
          return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
        if (this.treeIndex = determineBranch(decodeTree, current2, this.treeIndex + Math.max(1, valueLength), char), this.treeIndex < 0)
          return this.result === 0 || this.decodeMode === DecodingMode.Attribute && (valueLength === 0 || isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (current2 = decodeTree[this.treeIndex], valueLength = (current2 & BinTrieFlags.VALUE_LENGTH) >> 14, valueLength !== 0) {
          if (char === CharCodes.SEMI)
            return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
          this.decodeMode !== DecodingMode.Strict && (current2 & BinTrieFlags.FLAG13) === 0 && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
        offset++, this.excess++;
      }
      return -1;
    }
  }, {
    key: "emitNotTerminatedNamedEntity",
    value: function() {
      var _a2, result = this.result, decodeTree = this.decodeTree, valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
      return this.emitNamedEntityData(result, valueLength, this.consumed), (_a2 = this.errors) === null || _a2 === void 0 || _a2.missingSemicolonAfterCharacterReference(), this.consumed;
    }
  }, {
    key: "emitNamedEntityData",
    value: function(result, valueLength, consumed) {
      var decodeTree = this.decodeTree;
      return this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~(BinTrieFlags.VALUE_LENGTH | BinTrieFlags.FLAG13) : decodeTree[result + 1], consumed), valueLength === 3 && this.emitCodePoint(decodeTree[result + 2], consumed), consumed;
    }
  }, {
    key: "end",
    value: function() {
      var _a2;
      switch (this.state) {
        case EntityDecoderState.NamedEntity:
          return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case EntityDecoderState.NumericDecimal:
          return this.emitNumericEntity(0, 2);
        case EntityDecoderState.NumericHex:
          return this.emitNumericEntity(0, 3);
        case EntityDecoderState.NumericStart:
          return (_a2 = this.errors) === null || _a2 === void 0 || _a2.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case EntityDecoderState.EntityStart:
          return 0;
      }
    }
  }]), EntityDecoder2;
}();
function getDecoder(decodeTree) {
  var returnValue = "", decoder = new EntityDecoder(decodeTree, function(data) {
    return returnValue += fromCodePoint(data);
  });
  return function(input, decodeMode) {
    for (var lastIndex = 0, offset = 0; (offset = input.indexOf("&", offset)) >= 0; ) {
      returnValue += input.slice(lastIndex, offset), decoder.startEntity(decodeMode);
      var length = decoder.write(
        input,
        offset + 1
      );
      if (length < 0) {
        lastIndex = offset + decoder.end();
        break;
      }
      lastIndex = offset + length, offset = length === 0 ? lastIndex + 1 : lastIndex;
    }
    var result = returnValue + input.slice(lastIndex);
    return returnValue = "", result;
  };
}
function determineBranch(decodeTree, current2, nodeIndex, char) {
  var branchCount = (current2 & BinTrieFlags.BRANCH_LENGTH) >> 7, jumpOffset = current2 & BinTrieFlags.JUMP_TABLE;
  if (branchCount === 0)
    return jumpOffset !== 0 && char === jumpOffset ? nodeIndex : -1;
  if (jumpOffset) {
    var value = char - jumpOffset;
    return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIndex + value] - 1;
  }
  for (var packedKeySlots = branchCount + 1 >> 1, lo = 0, hi = branchCount - 1; lo <= hi; ) {
    var mid = lo + hi >>> 1, slot = mid >> 1, packed = decodeTree[nodeIndex + slot], midKey = packed >> (mid & 1) * 8 & 255;
    if (midKey < char)
      lo = mid + 1;
    else if (midKey > char)
      hi = mid - 1;
    else
      return decodeTree[nodeIndex + packedKeySlots + mid];
  }
  return -1;
}
var htmlDecoder = /* @__PURE__ */ getDecoder(htmlDecodeTree);
function decodeHTML(htmlString) {
  var mode = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DecodingMode.Legacy;
  return htmlDecoder(htmlString, mode);
}

// node_modules/entities/dist/esm/encode.js
init_kolmafia_polyfill();

// node_modules/entities/dist/esm/escape.js
init_kolmafia_polyfill();
var getCodePoint = String.prototype.codePointAt == null ? function(c, index) {
  return (c.charCodeAt(index) & 64512) === 55296 ? (c.charCodeAt(index) - 55296) * 1024 + c.charCodeAt(index + 1) - 56320 + 65536 : c.charCodeAt(index);
} : function(input, index) {
  return input.codePointAt(index);
};

// node_modules/entities/dist/esm/generated/encode-html.js
init_kolmafia_polyfill();

// node_modules/entities/dist/esm/internal/encode-shared.js
init_kolmafia_polyfill();

// node_modules/entities/dist/esm/index.js
var EntityLevel;
(function(EntityLevel2) {
  EntityLevel2[EntityLevel2.XML = 0] = "XML", EntityLevel2[EntityLevel2.HTML = 1] = "HTML";
})(EntityLevel || (EntityLevel = {}));
var EncodingMode;
(function(EncodingMode2) {
  EncodingMode2[EncodingMode2.UTF8 = 0] = "UTF8", EncodingMode2[EncodingMode2.ASCII = 1] = "ASCII", EncodingMode2[EncodingMode2.Extensive = 2] = "Extensive", EncodingMode2[EncodingMode2.Attribute = 3] = "Attribute", EncodingMode2[EncodingMode2.Text = 4] = "Text";
})(EncodingMode || (EncodingMode = {}));

// node_modules/libram/dist/Clan.js
var import_kolmafia27 = require("kolmafia");
function _toConsumableArray6(arr) {
  return _arrayWithoutHoles6(arr) || _iterableToArray6(arr) || _unsupportedIterableToArray13(arr) || _nonIterableSpread6();
}
function _nonIterableSpread6() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray6(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles6(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray13(arr);
}
function _createForOfIteratorHelper6(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray13(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _slicedToArray10(arr, i) {
  return _arrayWithHoles10(arr) || _iterableToArrayLimit10(arr, i) || _unsupportedIterableToArray13(arr, i) || _nonIterableRest10();
}
function _nonIterableRest10() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray13(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray13(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray13(o, minLen);
  }
}
function _arrayLikeToArray13(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit10(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles10(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck8(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties8(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey10(descriptor.key), descriptor);
  }
}
function _createClass8(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties8(Constructor.prototype, protoProps), staticProps && _defineProperties8(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty8(obj, key, value) {
  return key = _toPropertyKey10(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey10(arg) {
  var key = _toPrimitive10(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive10(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _wrapRegExp() {
  _wrapRegExp = function(re, groups) {
    return new BabelRegExp(re, void 0, groups);
  };
  var _super = RegExp.prototype, _groups = /* @__PURE__ */ new WeakMap();
  function BabelRegExp(re, flags, groups) {
    var _this = new RegExp(re, flags);
    return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf3(_this, BabelRegExp.prototype);
  }
  function buildGroups(result, re) {
    var g = _groups.get(re);
    return Object.keys(g).reduce(function(groups, name) {
      var i = g[name];
      if (typeof i == "number")
        groups[name] = result[i];
      else {
        for (var k = 0; result[i[k]] === void 0 && k + 1 < i.length; )
          k++;
        groups[name] = result[i[k]];
      }
      return groups;
    }, /* @__PURE__ */ Object.create(null));
  }
  return _inherits3(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function(str) {
    var result = _super.exec.call(this, str);
    if (result) {
      result.groups = buildGroups(result, this);
      var indices = result.indices;
      indices && (indices.groups = buildGroups(indices, this));
    }
    return result;
  }, BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
    if (typeof substitution == "string") {
      var groups = _groups.get(this);
      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function(_, name) {
        var group = groups[name];
        return "$" + (Array.isArray(group) ? group.join("$") : group);
      }));
    }
    if (typeof substitution == "function") {
      var _this = this;
      return _super[Symbol.replace].call(this, str, function() {
        var args = arguments;
        return typeof args[args.length - 1] != "object" && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
      });
    }
    return _super[Symbol.replace].call(this, str, substitution);
  }, _wrapRegExp.apply(this, arguments);
}
function _inherits3(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf3(subClass, superClass);
}
function _setPrototypeOf3(o, p) {
  return _setPrototypeOf3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf3(o, p);
}
var clanIdCache = {}, toPlayerId = function(player) {
  return typeof player == "string" ? (0, import_kolmafia27.getPlayerId)(player) : player;
}, LOG_FAX_PATTERN = /* @__PURE__ */ _wrapRegExp(/(\d{2}\/\d{2}\/\d{2}, \d{2}:\d{2}(?:AM|PM): )<a [^>]+>([^<]+)<\/a>(?: faxed in a (.*?))<br>/, {
  monster: 3
}), WHITELIST_DEGREE_PATTERN = /* @__PURE__ */ _wrapRegExp(/(.*?) \(\xB0(\d+)\)/, {
  name: 1,
  degree: 2
}), Clan = /* @__PURE__ */ function() {
  function Clan2(id, name) {
    _classCallCheck8(this, Clan2), _defineProperty8(this, "id", void 0), _defineProperty8(this, "name", void 0), this.id = id, this.name = name;
  }
  return _createClass8(Clan2, [{
    key: "_check",
    value: function() {
      if (this.id !== (0, import_kolmafia27.getClanId)())
        throw new Error("You are no longer a member of this clan");
    }
  }, {
    key: "join",
    value: function() {
      return Clan2.join(this.id);
    }
  }, {
    key: "check",
    value: function() {
      return (0, import_kolmafia27.visitUrl)("clan_hall.php").includes("<b>".concat(this.name, "</b>"));
    }
  }, {
    key: "getCurrentFax",
    value: function() {
      this._check();
      var logs = (0, import_kolmafia27.visitUrl)("clan_log.php"), lastFax = logs.match(LOG_FAX_PATTERN);
      if (!lastFax)
        return null;
      var _lastFax = _slicedToArray10(lastFax, 4), monsterName = _lastFax[3];
      return monsterName ? import_kolmafia27.Monster.get(monsterName) : null;
    }
  }, {
    key: "getRanks",
    value: function() {
      this._check();
      var page = (0, import_kolmafia27.visitUrl)("clan_whitelist.php");
      return (0, import_kolmafia27.xpath)(page, '//select[@name="level"]//option').map(function(option) {
        var validHtml = "<select>".concat(option, "</select>"), match = (0, import_kolmafia27.xpath)(validHtml, "//text()")[0].match(WHITELIST_DEGREE_PATTERN), id = (0, import_kolmafia27.xpath)(validHtml, "//@value")[0];
        if (!match || !id)
          return null;
        var _match = _slicedToArray10(match, 3), encodedName = _match[1], degree = _match[2];
        return {
          name: decodeHTML(encodedName),
          degree: Number.parseInt(degree),
          id: Number.parseInt(id)
        };
      }).filter(notNull);
    }
  }, {
    key: "addPlayerToWhitelist",
    value: function(player, rankName) {
      var title = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
      this._check();
      var playerId = toPlayerId(player), ranks = this.getRanks(), rank = rankName ? ranks.find(function(r) {
        return r.name === rankName;
      }) : ranks.sort(function(a, b) {
        return a.degree - b.degree;
      })[0];
      if (!rank)
        return !1;
      var result = (0, import_kolmafia27.visitUrl)("clan_whitelist.php?action=add&pwd&addwho=".concat(playerId, "&level=").concat(rank.id, "&title=").concat(title));
      return result.includes("added to whitelist.") || result.includes("That player is already on the whitelist");
    }
  }, {
    key: "removePlayerFromWhitelist",
    value: function(player) {
      this._check();
      var playerId = toPlayerId(player), result = (0, import_kolmafia27.visitUrl)("clan_whitelist.php?action=updatewl&pwd&who=".concat(playerId, "&remove=Remove"));
      return result.includes("Whitelist updated.");
    }
  }, {
    key: "getMeatInCoffer",
    value: function() {
      this._check();
      var page = (0, import_kolmafia27.visitUrl)("clan_stash.php"), _ref = page.match(/Your <b>Clan Coffer<\/b> contains ([\d,]+) Meat./) || ["0", "0"], _ref2 = _slicedToArray10(_ref, 2), meat = _ref2[1];
      return parseNumber(meat);
    }
  }, {
    key: "putMeatInCoffer",
    value: function(amount) {
      this._check();
      var result = (0, import_kolmafia27.visitUrl)("clan_stash.php?pwd&action=contribute&howmuch=".concat(amount));
      return result.includes("You contributed");
    }
  }, {
    key: "take",
    value: function(items) {
      this._check();
      var map = arrayToCountedMap(items);
      return map.forEach(function(quantity, item6) {
        var needed = Math.max(0, quantity - (0, import_kolmafia27.availableAmount)(item6));
        if (needed === 0)
          return map.set(item6, 0);
        var foldGroup = getFoldGroup(item6), _iterator = _createForOfIteratorHelper6(foldGroup), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            for (var foldable = _step.value, quantityToFold = Math.min(needed, (0, import_kolmafia27.availableAmount)(foldable)), _i3 = 0; _i3 < quantityToFold; _i3++)
              (0, import_kolmafia27.cliExecute)("fold ".concat(item6.name)), needed--;
            return map.set(item6, needed);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        (0, import_kolmafia27.refreshStash)();
        for (var _i2 = 0, _arr2 = [item6].concat(_toConsumableArray6(foldGroup)); _i2 < _arr2.length; _i2++) {
          var matchingItem = _arr2[_i2], quantityToTake = Math.min(needed, (0, import_kolmafia27.stashAmount)(matchingItem));
          if (quantityToTake !== 0) {
            if (!(0, import_kolmafia27.takeStash)(quantityToTake, matchingItem))
              return;
            if (matchingItem === item6)
              needed -= quantityToTake;
            else
              for (var i = 0; i < quantityToTake; i++)
                (0, import_kolmafia27.cliExecute)("fold ".concat(matchingItem.name)), needed--;
          }
        }
      }), Array.isArray(items) ? countedMapToArray(map) : map;
    }
  }, {
    key: "put",
    value: function(items) {
      this._check();
      var map = arrayToCountedMap(items);
      if (!this.check())
        throw new Error("Wanted to return ".concat(countedMapToString(map), " to ").concat(this.name, " but KoLmafia's clan data is out of sync"));
      return map.forEach(function(quantity, item6) {
        (0, import_kolmafia27.retrieveItem)(quantity, item6);
        var returned = Math.min(quantity, (0, import_kolmafia27.availableAmount)(item6));
        (0, import_kolmafia27.putStash)(returned, item6), map.set(item6, quantity - returned);
      }), Array.isArray(items) ? countedMapToArray(map) : map;
    }
  }, {
    key: "withStash",
    value: function(items, callback) {
      var _this = this;
      this._check();
      var map = arrayToCountedMap(items);
      return Clan2._withStash(function() {
        return _this.take(map);
      }, function(borrowed) {
        return _this.put(borrowed);
      }, callback);
    }
  }], [{
    key: "_join",
    value: function(id) {
      var result = (0, import_kolmafia27.visitUrl)("showclan.php?recruiter=1&whichclan=".concat(id, "&pwd&whichclan=").concat(id, "&action=joinclan&apply=Apply+to+this+Clan&confirm=on"));
      if (!result.includes("clanhalltop.gif"))
        throw new Error("Could not join clan");
      return Clan2.get();
    }
  }, {
    key: "_withStash",
    value: function(borrowFn, returnFn, callback) {
      var borrowed = borrowFn(), map = arrayToCountedMap(borrowed);
      try {
        return callback(borrowed);
      } finally {
        if (map.size > 0) {
          var returned = arrayToCountedMap(returnFn(borrowed));
          map.forEach(function(quantity, item6) {
            var remaining = quantity - (returned.get(item6) || 0);
            remaining > 0 ? map.set(item6, remaining) : map.delete(item6);
          }), map.size > 0 && logger_default.error("Failed to return <b>".concat(countedMapToString(map), "</b> to <b>").concat(this.name, "</b> stash"));
        }
      }
    }
  }, {
    key: "join",
    value: function(clanIdOrName) {
      var clanId;
      if (typeof clanIdOrName == "string") {
        var clanName = clanIdOrName.toLowerCase();
        if (clanName === (0, import_kolmafia27.getClanName)().toLowerCase())
          return Clan2.get();
        if (!(clanName in clanIdCache)) {
          var clan = Clan2.getWhitelisted().find(function(c) {
            return c.name.toLowerCase() === clanName;
          });
          if (!clan)
            throw new Error("Player is not whitelisted to clan");
          clanIdCache[clanName] = clan.id;
        }
        clanId = clanIdCache[clanName];
      } else if (clanId = clanIdOrName, clanId === (0, import_kolmafia27.getClanId)())
        return Clan2.get();
      return Clan2._join(clanId);
    }
  }, {
    key: "with",
    value: function(clanIdOrName, callback) {
      var startingClan = Clan2.get(), clan = Clan2.join(clanIdOrName);
      try {
        return callback(clan);
      } finally {
        startingClan.join();
      }
    }
  }, {
    key: "withStash",
    value: function(clanIdOrName, items, callback) {
      return Clan2._withStash(function() {
        return Clan2.with(clanIdOrName, function(clan) {
          return clan.take(items);
        });
      }, function(borrowed) {
        return Clan2.with(clanIdOrName, function(clan) {
          return clan.put(borrowed);
        });
      }, callback);
    }
  }, {
    key: "get",
    value: function() {
      return new Clan2((0, import_kolmafia27.getClanId)(), (0, import_kolmafia27.getClanName)());
    }
  }, {
    key: "getWhitelisted",
    value: function() {
      var page = (0, import_kolmafia27.visitUrl)("clan_signup.php");
      return (0, import_kolmafia27.xpath)(page, '//select[@name="whichclan"]//option').map(function(option) {
        var validHtml = "<select>".concat(option, "</select>"), id = Number.parseInt((0, import_kolmafia27.xpath)(validHtml, "//@value")[0]), name = decodeHTML((0, import_kolmafia27.xpath)(validHtml, "//text()")[0]);
        return new Clan2(id, name);
      });
    }
  }]), Clan2;
}();

// node_modules/libram/dist/challengePaths/index.js
init_kolmafia_polyfill();

// node_modules/libram/dist/challengePaths/2015/CommunityService.js
init_kolmafia_polyfill();
var import_kolmafia28 = require("kolmafia");
var _templateObject100, _templateObject235, _templateObject327, _templateObject424, _templateObject521, _templateObject618, _templateObject717, _templateObject813, _templateObject910, _templateObject108, _templateObject117, _templateObject128, _templateObject138, _templateObject148, _templateObject157, _templateObject167, _templateObject177, _templateObject187, _templateObject196, _templateObject206, _templateObject2111, _templateObject2210, _templateObject236, _templateObject245, _templateObject255, _templateObject265, _templateObject275, _templateObject284, _templateObject294, _templateObject304, _templateObject3110;
function _slicedToArray11(arr, i) {
  return _arrayWithHoles11(arr) || _iterableToArrayLimit11(arr, i) || _unsupportedIterableToArray14(arr, i) || _nonIterableRest11();
}
function _nonIterableRest11() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray14(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray14(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray14(o, minLen);
  }
}
function _arrayLikeToArray14(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit11(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles11(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck9(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties9(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey11(descriptor.key), descriptor);
  }
}
function _createClass9(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties9(Constructor.prototype, protoProps), staticProps && _defineProperties9(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _defineProperty9(obj, key, value) {
  return key = _toPropertyKey11(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey11(arg) {
  var key = _toPrimitive11(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive11(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral26(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var thralls = /* @__PURE__ */ new Map([[$stat(_templateObject100 || (_templateObject100 = _taggedTemplateLiteral26(["muscle"]))), $thrall(_templateObject235 || (_templateObject235 = _taggedTemplateLiteral26(["Elbow Macaroni"])))], [$stat(_templateObject327 || (_templateObject327 = _taggedTemplateLiteral26(["moxie"]))), $thrall(_templateObject424 || (_templateObject424 = _taggedTemplateLiteral26(["Penne Dreadful"])))]]), statCommunityServicePredictor = function(stat) {
  return function() {
    return 60 - Math.floor(1 / 30 * ((0, import_kolmafia28.myBuffedstat)(stat) - (0, import_kolmafia28.myBasestat)(thralls.get(stat) === (0, import_kolmafia28.myThrall)() && !have($effect(_templateObject521 || (_templateObject521 = _taggedTemplateLiteral26(["Expert Oiliness"])))) ? $stat(_templateObject618 || (_templateObject618 = _taggedTemplateLiteral26(["mysticality"]))) : stat)));
  };
}, visitCouncil = function() {
  return (0, import_kolmafia28.visitUrl)("council.php");
};
function hypotheticalModifier(modifier) {
  for (var _len = arguments.length, effects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
    effects[_key - 1] = arguments[_key];
  var newEffects = effects.filter(function(e) {
    return !have(e);
  });
  return (0, import_kolmafia28.numericModifier)(modifier) + sum(newEffects, function(effect) {
    return (0, import_kolmafia28.numericModifier)(effect, modifier);
  });
}
var CommunityService = /* @__PURE__ */ function() {
  function CommunityService2(id, stat, property, predictor, maximizeRequirements) {
    _classCallCheck9(this, CommunityService2), _defineProperty9(this, "choice", void 0), _defineProperty9(this, "stat", void 0), _defineProperty9(this, "property", void 0), _defineProperty9(this, "predictor", void 0), _defineProperty9(this, "maximizeRequirements", void 0), _defineProperty9(this, "timer", null), this.choice = id, this.stat = stat, this.property = property, this.predictor = predictor, this.maximizeRequirements = maximizeRequirements;
  }
  return _createClass9(CommunityService2, [{
    key: "id",
    get: function() {
      return this.choice;
    }
  }, {
    key: "statName",
    get: function() {
      return this.stat;
    }
  }, {
    key: "name",
    get: function() {
      return this.property;
    }
  }, {
    key: "prediction",
    get: function() {
      return this.predictor();
    }
  }, {
    key: "requirement",
    get: function() {
      return this.maximizeRequirements;
    }
  }, {
    key: "startTimer",
    value: function() {
      var _this$timer;
      (_this$timer = this.timer) !== null && _this$timer !== void 0 || (this.timer = {
        time: Date.now(),
        turns: (0, import_kolmafia28.myTurncount)()
      });
    }
  }, {
    key: "isDone",
    value: function() {
      return get("csServicesPerformed").includes(this.property);
    }
  }, {
    key: "maximize",
    value: function() {
      this.maximizeRequirements && this.maximizeRequirements.maximize();
    }
  }, {
    key: "do",
    value: function() {
      get("csServicesPerformed").trim().length === 0 && visitCouncil(), visitCouncil();
      var councilText = (0, import_kolmafia28.runChoice)(this.choice);
      return this._verifyIsDone(councilText);
    }
  }, {
    key: "run",
    value: function(prepare) {
      var _this$timer2, maxTurns = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1 / 0;
      if (this.isDone())
        return "already completed";
      var _ref = (_this$timer2 = this.timer) !== null && _this$timer2 !== void 0 ? _this$timer2 : {
        time: Date.now(),
        turns: (0, import_kolmafia28.myTurncount)()
      }, time = _ref.time, turns = _ref.turns, additionalTurns;
      try {
        var result = prepare();
        additionalTurns = typeof result == "number" ? result : 0;
      } catch (e) {
        return (0, import_kolmafia28.print)("".concat(e), "red"), "failed";
      }
      var prediction = this.predictor(), council = visitCouncil(), turnCost = this._actualCost(council);
      return turnCost ? turnCost > Math.min(maxTurns, (0, import_kolmafia28.myAdventures)()) || !this.do() ? "failed" : (CommunityService2.log[this.property] = {
        predictedTurns: prediction + additionalTurns,
        turnCost: (0, import_kolmafia28.myTurncount)() - turns,
        seconds: (Date.now() - time) / 1e3,
        type: "test"
      }, "completed") : "already completed";
    }
  }, {
    key: "_verifyIsDone",
    value: function(councilText) {
      return !councilText.includes("<input type=hidden name=option value=".concat(this.choice, ">"));
    }
  }, {
    key: "verifyIsDone",
    value: function() {
      return this._verifyIsDone(visitCouncil());
    }
  }, {
    key: "_actualCost",
    value: function(councilText) {
      var match = councilText.match("<input type=hidden name=option value=".concat(this.id, ">.*?Perform Service \\((\\d+) Adventures\\)"));
      return match ? parseInt(match[1]) : 0;
    }
  }, {
    key: "actualCost",
    value: function() {
      return this._actualCost(visitCouncil());
    }
  }, {
    key: "turnsSavedBy",
    value: function() {
      var currentTurns = clamp(this.prediction, 1, 60), newTurns = clamp(this.predictor.apply(this, arguments), 1, 60);
      return currentTurns - newTurns;
    }
  }], [{
    key: "startTimer",
    value: function(name) {
      this.taskTimers.has(name) || this.taskTimers.set(name, {
        time: Date.now(),
        turns: (0, import_kolmafia28.myTurncount)()
      });
    }
  }, {
    key: "logTask",
    value: function(name, action) {
      var _this$taskTimers$get, _action, _ref2 = (_this$taskTimers$get = this.taskTimers.get(name)) !== null && _this$taskTimers$get !== void 0 ? _this$taskTimers$get : {
        time: Date.now(),
        turns: (0, import_kolmafia28.myTurncount)()
      }, time = _ref2.time, turns = _ref2.turns, estimatedTurns = (_action = action()) !== null && _action !== void 0 ? _action : 0;
      CommunityService2.log[name] = {
        type: "task",
        turnCost: (0, import_kolmafia28.myTurncount)() - turns,
        predictedTurns: estimatedTurns,
        seconds: (Date.now() - time) / 1e3
      };
    }
  }, {
    key: "printLog",
    value: function() {
      for (var colour = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "blue", logEntries = Object.entries(CommunityService2.log), _i = 0, _logEntries = logEntries; _i < _logEntries.length; _i++) {
        var _logEntries$_i = _slicedToArray11(_logEntries[_i], 2), testName = _logEntries$_i[0], testEntry = _logEntries$_i[1], type = testEntry.type, predictedTurns = testEntry.predictedTurns, turnCost = testEntry.turnCost, seconds = testEntry.seconds;
        type === "test" ? ((0, import_kolmafia28.print)("We predicted the ".concat(testName, " test would take ").concat(predictedTurns, " turns, ").concat(predictedTurns === turnCost ? "and" : "but", " it took ").concat(turnCost, " turns."), colour), (0, import_kolmafia28.print)("".concat(testName, " took ").concat(seconds.toFixed(1), " seconds."), colour)) : (predictedTurns === 0 && turnCost === 0 || (0, import_kolmafia28.print)("We predicted the task ".concat(testName, " would take ").concat(predictedTurns, " turns, ").concat(predictedTurns === turnCost ? "and" : "but", " it took ").concat(turnCost, " turns."), colour), (0, import_kolmafia28.print)("The task ".concat(testName, " took ").concat(seconds.toFixed(1), " seconds."), colour));
      }
      var totalTime = sum(logEntries, function(_ref3) {
        var _ref4 = _slicedToArray11(_ref3, 2), testEntry2 = _ref4[1];
        return testEntry2.seconds;
      });
      (0, import_kolmafia28.print)("All together, you have spent ".concat(totalTime.toFixed(1), " seconds during this Community Service run"), colour);
    }
  }]), CommunityService2;
}();
_defineProperty9(CommunityService, "taskTimers", /* @__PURE__ */ new Map());
_defineProperty9(CommunityService, "log", {});
_defineProperty9(CommunityService, "HP", new CommunityService(1, "HP", "Donate Blood", function() {
  return 60 - Math.floor(((0, import_kolmafia28.myMaxhp)() - (0, import_kolmafia28.myBuffedstat)($stat(_templateObject717 || (_templateObject717 = _taggedTemplateLiteral26(["muscle"])))) - 3) / 30);
}, new Requirement(["HP"], {})));
_defineProperty9(CommunityService, "Muscle", new CommunityService(2, "Muscle", "Feed The Children", statCommunityServicePredictor($stat(_templateObject813 || (_templateObject813 = _taggedTemplateLiteral26(["Muscle"])))), new Requirement(["Muscle"], {})));
_defineProperty9(CommunityService, "Mysticality", new CommunityService(3, "Mysticality", "Build Playground Mazes", statCommunityServicePredictor($stat(_templateObject910 || (_templateObject910 = _taggedTemplateLiteral26(["Mysticality"])))), new Requirement(["Mysticality"], {})));
_defineProperty9(CommunityService, "Moxie", new CommunityService(4, "Moxie", "Feed Conspirators", statCommunityServicePredictor($stat(_templateObject108 || (_templateObject108 = _taggedTemplateLiteral26(["Moxie"])))), new Requirement(["Moxie"], {})));
_defineProperty9(CommunityService, "FamiliarWeight", new CommunityService(5, "Familiar Weight", "Breed More Collies", function() {
  for (var _len2 = arguments.length, effects = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)
    effects[_key2] = arguments[_key2];
  return 60 - Math.floor((totalFamiliarWeight((0, import_kolmafia28.myFamiliar)(), !1) + hypotheticalModifier.apply(void 0, ["Familiar Weight"].concat(effects))) / 5);
}, new Requirement(["Familiar Weight"], {})));
_defineProperty9(CommunityService, "WeaponDamage", new CommunityService(6, "Weapon Damage", "Reduce Gazelle Population", function() {
  for (var weaponPower = (0, import_kolmafia28.getPower)((0, import_kolmafia28.equippedItem)($slot(_templateObject117 || (_templateObject117 = _taggedTemplateLiteral26(["weapon"]))))), offhandPower = (0, import_kolmafia28.toSlot)((0, import_kolmafia28.equippedItem)($slot(_templateObject128 || (_templateObject128 = _taggedTemplateLiteral26(["off-hand"]))))) === $slot(_templateObject138 || (_templateObject138 = _taggedTemplateLiteral26(["weapon"]))) ? (0, import_kolmafia28.getPower)((0, import_kolmafia28.equippedItem)($slot(_templateObject148 || (_templateObject148 = _taggedTemplateLiteral26(["off-hand"]))))) : 0, familiarPower = (0, import_kolmafia28.toSlot)((0, import_kolmafia28.equippedItem)($slot(_templateObject157 || (_templateObject157 = _taggedTemplateLiteral26(["familiar"]))))) === $slot(_templateObject167 || (_templateObject167 = _taggedTemplateLiteral26(["weapon"]))) ? (0, import_kolmafia28.getPower)((0, import_kolmafia28.equippedItem)($slot(_templateObject177 || (_templateObject177 = _taggedTemplateLiteral26(["familiar"]))))) : 0, multiplier = have($effect(_templateObject187 || (_templateObject187 = _taggedTemplateLiteral26(["Bow-Legged Swagger"])))) ? 2 : 1, _len3 = arguments.length, effects = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++)
    effects[_key3] = arguments[_key3];
  return 60 - Math.floor(multiplier * (hypotheticalModifier.apply(void 0, ["Weapon Damage"].concat(effects)) - 0.15 * (weaponPower + offhandPower + familiarPower)) / 50 + 1e-3) - Math.floor(multiplier * hypotheticalModifier.apply(void 0, ["Weapon Damage Percent"].concat(effects)) / 50 + 1e-3);
}, new Requirement(["Weapon Damage", "Weapon Damage Percent"], {})));
_defineProperty9(CommunityService, "SpellDamage", new CommunityService(7, "Spell Damage", "Make Sausage", function() {
  for (var dragonfishDamage = (0, import_kolmafia28.myFamiliar)() === $familiar(_templateObject196 || (_templateObject196 = _taggedTemplateLiteral26(["Magic Dragonfish"]))) ? (0, import_kolmafia28.numericModifier)($familiar(_templateObject206 || (_templateObject206 = _taggedTemplateLiteral26(["Magic Dragonfish"]))), "Spell Damage Percent", totalFamiliarWeight(), $item.none) : 0, _len4 = arguments.length, effects = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++)
    effects[_key4] = arguments[_key4];
  return 60 - Math.floor(hypotheticalModifier.apply(void 0, ["Spell Damage"].concat(effects)) / 50 + 1e-3) - Math.floor((hypotheticalModifier.apply(void 0, ["Spell Damage Percent"].concat(effects)) - dragonfishDamage) / 50 + 1e-3);
}, new Requirement(["Spell Damage", "Spell Damage Percent"], {})));
_defineProperty9(CommunityService, "Noncombat", new CommunityService(8, "Non-Combat", "Be a Living Statue", function() {
  for (var _len5 = arguments.length, effects = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++)
    effects[_key5] = arguments[_key5];
  var noncombatRate = -1 * hypotheticalModifier.apply(void 0, ["Raw Combat Rate"].concat(effects)), currentFamiliarModifier = -1 * (0, import_kolmafia28.numericModifier)((0, import_kolmafia28.myFamiliar)(), "Raw Combat Rate", totalFamiliarWeight(), (0, import_kolmafia28.equippedItem)($slot(_templateObject2111 || (_templateObject2111 = _taggedTemplateLiteral26(["familiar"]))))), newFamiliarModifier = -1 * (0, import_kolmafia28.numericModifier)((0, import_kolmafia28.myFamiliar)(), "Raw Combat Rate", totalFamiliarWeight((0, import_kolmafia28.myFamiliar)(), !1) + hypotheticalModifier.apply(void 0, ["Familiar Weight"].concat(effects)), (0, import_kolmafia28.equippedItem)($slot(_templateObject2210 || (_templateObject2210 = _taggedTemplateLiteral26(["familiar"]))))), adjustedRate = noncombatRate - currentFamiliarModifier + newFamiliarModifier;
  return 60 - 3 * Math.floor(adjustedRate / 5);
}, new Requirement(["-Raw Combat Rate"], {})));
_defineProperty9(CommunityService, "BoozeDrop", new CommunityService(9, "Item Drop", "Make Margaritas", function() {
  for (var mummingCostume = MummingTrunk_exports.currentCostumes().get((0, import_kolmafia28.myFamiliar)()), mummingBuff = mummingCostume && mummingCostume[0] === "Item Drop" ? mummingCostume[1] : 0, familiarItemDrop = (0, import_kolmafia28.numericModifier)((0, import_kolmafia28.myFamiliar)(), "Item Drop", totalFamiliarWeight(), (0, import_kolmafia28.equippedItem)($slot(_templateObject236 || (_templateObject236 = _taggedTemplateLiteral26(["familiar"]))))) + mummingBuff - (0, import_kolmafia28.numericModifier)((0, import_kolmafia28.equippedItem)($slot(_templateObject245 || (_templateObject245 = _taggedTemplateLiteral26(["familiar"])))), "Item Drop"), familiarBoozeDrop = (0, import_kolmafia28.numericModifier)((0, import_kolmafia28.myFamiliar)(), "Booze Drop", totalFamiliarWeight(), (0, import_kolmafia28.equippedItem)($slot(_templateObject255 || (_templateObject255 = _taggedTemplateLiteral26(["familiar"]))))) - (0, import_kolmafia28.numericModifier)((0, import_kolmafia28.equippedItem)($slot(_templateObject265 || (_templateObject265 = _taggedTemplateLiteral26(["familiar"])))), "Booze Drop"), multiplier = (0, import_kolmafia28.haveEquipped)($item(_templateObject275 || (_templateObject275 = _taggedTemplateLiteral26(["broken champagne bottle"])))) && get("garbageChampagneCharge") > 0 ? 0.5 : 1, _len6 = arguments.length, effects = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++)
    effects[_key6] = arguments[_key6];
  return 60 - Math.floor(multiplier * (hypotheticalModifier.apply(void 0, ["Item Drop"].concat(effects)) - familiarItemDrop - (0, import_kolmafia28.numericModifier)((0, import_kolmafia28.myThrall)(), "Item Drop")) / 30 + 1e-3) - Math.floor((hypotheticalModifier.apply(void 0, ["Booze Drop"].concat(effects)) - familiarBoozeDrop) / 15 + 1e-3);
}, new Requirement(["Item Drop", "2 Booze Drop"], {
  preventEquip: $items(_templateObject284 || (_templateObject284 = _taggedTemplateLiteral26(["broken champagne bottle"])))
})));
_defineProperty9(CommunityService, "HotRes", new CommunityService(10, "Hot Resistance", "Clean Steam Tunnels", function() {
  for (var currentFamiliarModifier = (0, import_kolmafia28.numericModifier)((0, import_kolmafia28.myFamiliar)(), "Hot Resistance", totalFamiliarWeight(), (0, import_kolmafia28.equippedItem)($slot(_templateObject294 || (_templateObject294 = _taggedTemplateLiteral26(["familiar"]))))), _len7 = arguments.length, effects = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++)
    effects[_key7] = arguments[_key7];
  var newFamiliarModifier = (0, import_kolmafia28.numericModifier)((0, import_kolmafia28.myFamiliar)(), "Hot Resistance", totalFamiliarWeight((0, import_kolmafia28.myFamiliar)(), !1) + hypotheticalModifier.apply(void 0, ["Familiar Weight"].concat(effects)), (0, import_kolmafia28.equippedItem)($slot(_templateObject304 || (_templateObject304 = _taggedTemplateLiteral26(["familiar"])))));
  return 60 - (hypotheticalModifier.apply(void 0, ["Hot Resistance"].concat(effects)) - currentFamiliarModifier + newFamiliarModifier);
}, new Requirement(["Hot Resistance"], {})));
_defineProperty9(CommunityService, "CoilWire", new CommunityService(11, "Coil Wire", "Coil Wire", function() {
  return 60;
}, new Requirement([], {})));
_defineProperty9(CommunityService, "donate", function() {
  visitCouncil(), (0, import_kolmafia28.visitUrl)("choice.php?whichchoice=1089&option=30");
});
_defineProperty9(CommunityService, "path", $path(_templateObject3110 || (_templateObject3110 = _taggedTemplateLiteral26(["Community Service"]))));

// node_modules/libram/dist/since.js
init_kolmafia_polyfill();
var import_kolmafia29 = require("kolmafia");
function _defineProperties10(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey12(descriptor.key), descriptor);
  }
}
function _createClass10(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties10(Constructor.prototype, protoProps), staticProps && _defineProperties10(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey12(arg) {
  var key = _toPrimitive12(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive12(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _classCallCheck10(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _inherits4(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf4(subClass, superClass);
}
function _createSuper3(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct3();
  return function() {
    var Super = _getPrototypeOf3(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf3(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn3(this, result);
  };
}
function _possibleConstructorReturn3(self2, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized3(self2);
}
function _assertThisInitialized3(self2) {
  if (self2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self2;
}
function _wrapNativeSuper3(Class5) {
  var _cache = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper3 = function(Class6) {
    if (Class6 === null || !_isNativeFunction3(Class6))
      return Class6;
    if (typeof Class6 != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof _cache != "undefined") {
      if (_cache.has(Class6))
        return _cache.get(Class6);
      _cache.set(Class6, Wrapper);
    }
    function Wrapper() {
      return _construct3(Class6, arguments, _getPrototypeOf3(this).constructor);
    }
    return Wrapper.prototype = Object.create(Class6.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf4(Wrapper, Class6);
  }, _wrapNativeSuper3(Class5);
}
function _construct3(Parent, args, Class5) {
  return _isNativeReflectConstruct3() ? _construct3 = Reflect.construct.bind() : _construct3 = function(Parent2, args2, Class6) {
    var a = [null];
    a.push.apply(a, args2);
    var Constructor = Function.bind.apply(Parent2, a), instance = new Constructor();
    return Class6 && _setPrototypeOf4(instance, Class6.prototype), instance;
  }, _construct3.apply(null, arguments);
}
function _isNativeReflectConstruct3() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _isNativeFunction3(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf4(o, p) {
  return _setPrototypeOf4 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf4(o, p);
}
function _getPrototypeOf3(o) {
  return _getPrototypeOf3 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf3(o);
}
var KolmafiaVersionError = /* @__PURE__ */ function(_Error) {
  _inherits4(KolmafiaVersionError2, _Error);
  var _super = _createSuper3(KolmafiaVersionError2);
  function KolmafiaVersionError2(message) {
    var _this;
    return _classCallCheck10(this, KolmafiaVersionError2), _this = _super.call(this, message), Object.setPrototypeOf(_assertThisInitialized3(_this), KolmafiaVersionError2.prototype), _this;
  }
  return _createClass10(KolmafiaVersionError2);
}(/* @__PURE__ */ _wrapNativeSuper3(Error));
KolmafiaVersionError.prototype.name = "KolmafiaVersionError";
function getScriptName() {
  var _require$main, scriptName = (_require$main = require.main) === null || _require$main === void 0 ? void 0 : _require$main.id;
  return scriptName ? "'".concat(scriptName, "'") : "This script";
}
function sinceKolmafiaRevision(revision) {
  if (!Number.isInteger(revision))
    throw new TypeError("Invalid revision number ".concat(revision, " (must be an integer)"));
  var currentRevision = (0, import_kolmafia29.getRevision)();
  if (currentRevision > 0 && currentRevision < revision)
    throw new KolmafiaVersionError("".concat(getScriptName(), " requires revision r").concat(revision, " of kolmafia or higher (current: ").concat((0, import_kolmafia29.getRevision)(), "). Up-to-date builds can be found at https://ci.kolmafia.us/."));
}

// node_modules/grimoire-kolmafia/dist/combat.js
function _inherits5(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf5(subClass, superClass);
}
function _setPrototypeOf5(o, p) {
  return _setPrototypeOf5 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf5(o, p);
}
function _createSuper4(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct4();
  return function() {
    var Super = _getPrototypeOf4(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf4(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn4(this, result);
  };
}
function _possibleConstructorReturn4(self2, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized4(self2);
}
function _assertThisInitialized4(self2) {
  if (self2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self2;
}
function _isNativeReflectConstruct4() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _getPrototypeOf4(o) {
  return _getPrototypeOf4 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf4(o);
}
function _toConsumableArray7(arr) {
  return _arrayWithoutHoles7(arr) || _iterableToArray7(arr) || _unsupportedIterableToArray15(arr) || _nonIterableSpread7();
}
function _nonIterableSpread7() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray7(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles7(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray15(arr);
}
function _createForOfIteratorHelper7(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray15(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray15(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray15(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray15(o, minLen);
  }
}
function _arrayLikeToArray15(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck11(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties11(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey13(descriptor.key), descriptor);
  }
}
function _createClass11(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties11(Constructor.prototype, protoProps), staticProps && _defineProperties11(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey13(arg) {
  var key = _toPrimitive13(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive13(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var CombatStrategy = /* @__PURE__ */ function() {
  function CombatStrategy2() {
    _classCallCheck11(this, CombatStrategy2), this.macros = /* @__PURE__ */ new Map(), this.autoattacks = /* @__PURE__ */ new Map(), this.actions = /* @__PURE__ */ new Map(), this.ccs_entries = /* @__PURE__ */ new Map();
  }
  return _createClass11(CombatStrategy2, [{
    key: "macro",
    value: function(_macro, monsters, prepend) {
      var _a2, _b;
      if (monsters === void 0)
        this.default_macro === void 0 && (this.default_macro = []), prepend ? this.default_macro.unshift(_macro) : this.default_macro.push(_macro);
      else {
        monsters instanceof import_kolmafia30.Monster && (monsters = [monsters]);
        var _iterator = _createForOfIteratorHelper7(monsters), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var monster = _step.value;
            this.macros.has(monster) || this.macros.set(monster, []), prepend ? (_a2 = this.macros.get(monster)) === null || _a2 === void 0 || _a2.unshift(_macro) : (_b = this.macros.get(monster)) === null || _b === void 0 || _b.push(_macro);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return this;
    }
  }, {
    key: "autoattack",
    value: function(macro, monsters, prepend) {
      var _a2, _b;
      if (monsters === void 0)
        this.default_autoattack === void 0 && (this.default_autoattack = []), prepend ? this.default_autoattack.unshift(macro) : this.default_autoattack.push(macro);
      else {
        monsters instanceof import_kolmafia30.Monster && (monsters = [monsters]);
        var _iterator2 = _createForOfIteratorHelper7(monsters), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var monster = _step2.value;
            this.autoattacks.has(monster) || this.autoattacks.set(monster, []), prepend ? (_a2 = this.autoattacks.get(monster)) === null || _a2 === void 0 || _a2.unshift(macro) : (_b = this.autoattacks.get(monster)) === null || _b === void 0 || _b.push(macro);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
  }, {
    key: "startingMacro",
    value: function(macro, prepend) {
      return this.starting_macro === void 0 && (this.starting_macro = []), prepend ? this.starting_macro.unshift(macro) : this.starting_macro.push(macro), this;
    }
  }, {
    key: "action",
    value: function(_action, monsters) {
      if (monsters === void 0)
        this.default_action = _action;
      else if (monsters instanceof import_kolmafia30.Monster)
        this.actions.set(monsters, _action);
      else {
        var _iterator3 = _createForOfIteratorHelper7(monsters), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
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
  }, {
    key: "ccs",
    value: function(entry, monsters, prepend) {
      var _a2, _b;
      monsters instanceof import_kolmafia30.Monster && (monsters = [monsters]);
      var _iterator4 = _createForOfIteratorHelper7(monsters), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var monster = _step4.value;
          this.ccs_entries.has(monster) || this.ccs_entries.set(monster, []), prepend ? (_a2 = this.ccs_entries.get(monster)) === null || _a2 === void 0 || _a2.unshift(entry) : (_b = this.ccs_entries.get(monster)) === null || _b === void 0 || _b.push(entry);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return this;
    }
  }, {
    key: "can",
    value: function(action) {
      return action === this.default_action ? !0 : Array.from(this.actions.values()).includes(action);
    }
  }, {
    key: "getDefaultAction",
    value: function() {
      return this.default_action;
    }
  }, {
    key: "where",
    value: function(action) {
      var _this = this;
      return Array.from(this.actions.keys()).filter(function(key) {
        return _this.actions.get(key) === action;
      });
    }
  }, {
    key: "currentStrategy",
    value: function(monster) {
      var _a2;
      return (_a2 = this.actions.get(monster)) !== null && _a2 !== void 0 ? _a2 : this.default_action;
    }
  }, {
    key: "clone",
    value: function() {
      var result = new CombatStrategy2();
      this.starting_macro && (result.starting_macro = _toConsumableArray7(this.starting_macro)), this.default_macro && (result.default_macro = _toConsumableArray7(this.default_macro));
      var _iterator5 = _createForOfIteratorHelper7(this.macros), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          var pair = _step5.value;
          result.macros.set(pair[0], _toConsumableArray7(pair[1]));
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      this.default_autoattack && (result.default_autoattack = _toConsumableArray7(this.default_autoattack));
      var _iterator6 = _createForOfIteratorHelper7(this.autoattacks), _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          var _pair = _step6.value;
          result.autoattacks.set(_pair[0], _toConsumableArray7(_pair[1]));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      result.default_action = this.default_action;
      var _iterator7 = _createForOfIteratorHelper7(this.actions), _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
          var _pair2 = _step7.value;
          result.actions.set(_pair2[0], _pair2[1]);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      var _iterator8 = _createForOfIteratorHelper7(this.ccs_entries), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          var _pair3 = _step8.value;
          result.ccs_entries.set(_pair3[0], _toConsumableArray7(_pair3[1]));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      return result;
    }
  }, {
    key: "compile",
    value: function(resources, defaults, location, ctx) {
      var _a2, _b, result = new Macro();
      this.starting_macro && result.step.apply(result, _toConsumableArray7(this.starting_macro.map(function(macro2) {
        return undelay(macro2, ctx);
      })));
      var monster_macros = new CompressedMacro();
      this.macros.forEach(function(value, key) {
        var _Macro;
        monster_macros.add(key, (_Macro = new Macro()).step.apply(_Macro, _toConsumableArray7(value.map(function(macro2) {
          return undelay(macro2, ctx);
        }))));
      }), result.step(monster_macros.compile()), this.default_macro && result.step.apply(result, _toConsumableArray7(this.default_macro.map(function(macro2) {
        return undelay(macro2, ctx);
      })));
      var monster_actions = new CompressedMacro();
      if (this.actions.forEach(function(action, key) {
        var _a3, _b2, macro2 = (_a3 = resources.getMacro(action, ctx)) !== null && _a3 !== void 0 ? _a3 : (_b2 = defaults == null ? void 0 : defaults[action]) === null || _b2 === void 0 ? void 0 : _b2.call(defaults, key);
        macro2 && monster_actions.add(key, new Macro().step(macro2));
      }), result.step(monster_actions.compile()), this.default_action) {
        var macro = (_a2 = resources.getMacro(this.default_action, ctx)) !== null && _a2 !== void 0 ? _a2 : (_b = defaults == null ? void 0 : defaults[this.default_action]) === null || _b === void 0 ? void 0 : _b.call(defaults, location);
        macro && result.step(macro);
      }
      return result;
    }
  }, {
    key: "compileAutoattack",
    value: function(ctx) {
      var result = new Macro(), monster_macros = new CompressedMacro();
      return this.autoattacks.forEach(function(value, key) {
        var _Macro2;
        monster_macros.add(key, (_Macro2 = new Macro()).step.apply(_Macro2, _toConsumableArray7(value.map(function(macro) {
          return undelay(macro, ctx);
        }))));
      }), result.step(monster_macros.compile()), this.default_autoattack && result.step.apply(result, _toConsumableArray7(this.default_autoattack.map(function(macro) {
        return undelay(macro, ctx);
      }))), result;
    }
  }, {
    key: "compileCcs",
    value: function() {
      var result = [], _iterator9 = _createForOfIteratorHelper7(this.ccs_entries), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          var ccs_entry = _step9.value;
          result.push.apply(result, ["[".concat(ccs_entry[0].name, "]")].concat(_toConsumableArray7(ccs_entry[1])));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      return result;
    }
  }], [{
    key: "withActions",
    value: function(actions) {
      var CombatStrategyWithActions = /* @__PURE__ */ function(_this) {
        _inherits5(CombatStrategyWithActions2, _this);
        var _super = _createSuper4(CombatStrategyWithActions2);
        function CombatStrategyWithActions2() {
          return _classCallCheck11(this, CombatStrategyWithActions2), _super.apply(this, arguments);
        }
        return _createClass11(CombatStrategyWithActions2);
      }(this), proto = CombatStrategyWithActions.prototype, _iterator10 = _createForOfIteratorHelper7(actions), _step10;
      try {
        var _loop = function() {
          var action = _step10.value;
          proto[action] = function(monsters) {
            return this.action(action, monsters);
          };
        };
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done; )
          _loop();
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      return CombatStrategyWithActions;
    }
  }]), CombatStrategy2;
}(), CompressedMacro = /* @__PURE__ */ function() {
  function CompressedMacro2() {
    _classCallCheck11(this, CompressedMacro2), this.components = /* @__PURE__ */ new Map();
  }
  return _createClass11(CompressedMacro2, [{
    key: "add",
    value: function(monster, macro) {
      var _a2, macro_text = macro.toString();
      macro_text.length !== 0 && (this.components.has(macro_text) ? (_a2 = this.components.get(macro_text)) === null || _a2 === void 0 || _a2.push(monster) : this.components.set(macro_text, [monster]));
    }
  }, {
    key: "compile",
    value: function() {
      var result = new Macro();
      return this.components.forEach(function(monsters, macro) {
        var condition = monsters.map(function(mon) {
          return "monsterid ".concat(mon.id);
        }).join(" || ");
        result.if_(condition, macro);
      }), result;
    }
  }]), CompressedMacro2;
}(), CombatResources = /* @__PURE__ */ function() {
  function CombatResources2() {
    _classCallCheck11(this, CombatResources2), this.resources = /* @__PURE__ */ new Map();
  }
  return _createClass11(CombatResources2, [{
    key: "provide",
    value: function(action, resource) {
      resource !== void 0 && this.resources.set(action, resource);
    }
  }, {
    key: "has",
    value: function(action) {
      return this.resources.has(action);
    }
  }, {
    key: "get",
    value: function(action) {
      return this.resources.get(action);
    }
  }, {
    key: "all",
    value: function() {
      return Array.from(this.resources.values());
    }
  }, {
    key: "getMacro",
    value: function(action, ctx) {
      var resource = this.resources.get(action);
      if (resource !== void 0)
        return resource.do instanceof import_kolmafia30.Item ? new Macro().item(resource.do) : resource.do instanceof import_kolmafia30.Skill ? new Macro().skill(resource.do) : undelay(resource.do, ctx);
    }
  }]), CombatResources2;
}();

// node_modules/grimoire-kolmafia/dist/engine.js
init_kolmafia_polyfill();
var import_kolmafia32 = require("kolmafia");

// node_modules/grimoire-kolmafia/dist/outfit.js
init_kolmafia_polyfill();
var import_kolmafia31 = require("kolmafia");
var _templateObject101, _templateObject237, _templateObject328, _templateObject425, _templateObject522, _templateObject619, _templateObject718, _templateObject814, _templateObject911, _templateObject109, _templateObject118, _templateObject129, _templateObject139, _templateObject149, _templateObject158, _templateObject168, _templateObject178, _templateObject188, _templateObject197, _templateObject207, _templateObject2112, _templateObject2211, _templateObject238, _templateObject246, _templateObject256, _templateObject266, _templateObject276, _templateObject285, _templateObject295, _templateObject305, _templateObject3111, _templateObject329, _templateObject334, _templateObject344, _templateObject354, _templateObject364, _templateObject374, _templateObject383, _templateObject393, _templateObject403, _templateObject4110, _templateObject426, _templateObject433, _templateObject443, _templateObject452, _templateObject462, _templateObject472, _templateObject482, _templateObject493, _templateObject503, _templateObject5110, _templateObject523, _templateObject532, _templateObject542, _templateObject552, _templateObject562, _templateObject572, _templateObject582, _templateObject592, _templateObject602, _templateObject6110, _templateObject622, _templateObject632, _templateObject642, _templateObject652, _templateObject662, _templateObject672, _templateObject682, _templateObject692, _templateObject702, _templateObject719, _templateObject722, _templateObject732, _templateObject742, _templateObject752, _templateObject762, _templateObject772, _templateObject782, _templateObject792, _templateObject802, _templateObject815, _templateObject822;
function ownKeys5(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread5(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys5(Object(source), !0).forEach(function(key) {
      _defineProperty10(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys5(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty10(obj, key, value) {
  return key = _toPropertyKey14(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _slicedToArray12(arr, i) {
  return _arrayWithHoles12(arr) || _iterableToArrayLimit12(arr, i) || _unsupportedIterableToArray16(arr, i) || _nonIterableRest12();
}
function _nonIterableRest12() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit12(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles12(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _createForOfIteratorHelper8(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray16(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _taggedTemplateLiteral27(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _toConsumableArray8(arr) {
  return _arrayWithoutHoles8(arr) || _iterableToArray8(arr) || _unsupportedIterableToArray16(arr) || _nonIterableSpread8();
}
function _nonIterableSpread8() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray16(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray16(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray16(o, minLen);
  }
}
function _iterableToArray8(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles8(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray16(arr);
}
function _arrayLikeToArray16(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _classCallCheck12(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties12(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey14(descriptor.key), descriptor);
  }
}
function _createClass12(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties12(Constructor.prototype, protoProps), staticProps && _defineProperties12(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey14(arg) {
  var key = _toPrimitive14(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive14(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var FORCE_REFRESH_REQUIREMENT = new Requirement([], {
  forceUpdate: !0
}), outfitSlots = ["hat", "back", "weapon", "offhand", "shirt", "pants", "acc1", "acc2", "acc3", "famequip"];
var weaponHands = function(i) {
  return i ? (0, import_kolmafia31.weaponHands)(i) : 0;
}, modeableCommands2 = ["backupcamera", "umbrella", "snowsuit", "edpiece", "retrocape", "parka", "jillcandle"], Outfit = /* @__PURE__ */ function() {
  function Outfit2() {
    _classCallCheck12(this, Outfit2), this.equips = /* @__PURE__ */ new Map(), this.riders = /* @__PURE__ */ new Map(), this.modes = {}, this.skipDefaults = !1, this.modifier = [], this.avoid = [], this.bonuses = /* @__PURE__ */ new Map(), this.postActions = [], this.preActions = [];
  }
  return _createClass12(Outfit2, [{
    key: "equippedAmount",
    value: function(item6) {
      return _toConsumableArray8(this.equips.values()).filter(function(i) {
        return i === item6;
      }).length;
    }
  }, {
    key: "isAvailable",
    value: function(item6) {
      var _a2;
      return !(!((_a2 = this.avoid) === null || _a2 === void 0) && _a2.includes(item6) || !have(item6, this.equippedAmount(item6) + 1) || (0, import_kolmafia31.booleanModifier)(item6, "Single Equip") && this.equippedAmount(item6) > 0);
    }
  }, {
    key: "haveEquipped",
    value: function(item6, slot) {
      return slot === void 0 ? this.equippedAmount(item6) > 0 : this.equips.get(slot) === item6;
    }
  }, {
    key: "equipItemNone",
    value: function(item6, slot) {
      return item6 !== $item.none ? !1 : slot === void 0 ? !0 : this.equips.has(slot) ? !1 : (this.equips.set(slot, item6), !0);
    }
  }, {
    key: "equipNonAccessory",
    value: function(item6, slot) {
      if ($slots(_templateObject101 || (_templateObject101 = _taggedTemplateLiteral27(["acc1, acc2, acc3"]))).includes((0, import_kolmafia31.toSlot)(item6)) || slot !== void 0 && slot !== (0, import_kolmafia31.toSlot)(item6) || this.equips.has((0, import_kolmafia31.toSlot)(item6)))
        return !1;
      switch ((0, import_kolmafia31.toSlot)(item6)) {
        case $slot(_templateObject237 || (_templateObject237 = _taggedTemplateLiteral27(["off-hand"]))):
          if (this.equips.has($slot(_templateObject328 || (_templateObject328 = _taggedTemplateLiteral27(["weapon"])))) && weaponHands(this.equips.get($slot(_templateObject425 || (_templateObject425 = _taggedTemplateLiteral27(["weapon"]))))) !== 1)
            return !1;
          break;
        case $slot(_templateObject522 || (_templateObject522 = _taggedTemplateLiteral27(["familiar"]))):
          if (this.familiar !== void 0 && !(0, import_kolmafia31.canEquip)(this.familiar, item6))
            return !1;
          break;
        case $slot(_templateObject619 || (_templateObject619 = _taggedTemplateLiteral27(["weapon"]))):
          if (!weaponsCompatible(item6, this.equips.get($slot(_templateObject718 || (_templateObject718 = _taggedTemplateLiteral27(["off-hand"]))))))
            return !1;
          break;
      }
      return (0, import_kolmafia31.toSlot)(item6) !== $slot(_templateObject814 || (_templateObject814 = _taggedTemplateLiteral27(["familiar"]))) && !(0, import_kolmafia31.canEquip)(item6) ? !1 : (this.equips.set((0, import_kolmafia31.toSlot)(item6), item6), !0);
    }
  }, {
    key: "equipAccessory",
    value: function(item6, slot) {
      var _this = this;
      if (![void 0].concat(_toConsumableArray8($slots(_templateObject911 || (_templateObject911 = _taggedTemplateLiteral27(["acc1, acc2, acc3"]))))).includes(slot) || (0, import_kolmafia31.toSlot)(item6) !== $slot(_templateObject109 || (_templateObject109 = _taggedTemplateLiteral27(["acc1"]))) || !(0, import_kolmafia31.canEquip)(item6))
        return !1;
      if (slot === void 0) {
        var empty = $slots(_templateObject118 || (_templateObject118 = _taggedTemplateLiteral27(["acc1, acc2, acc3"]))).find(function(s) {
          return !_this.equips.has(s);
        });
        if (empty === void 0)
          return !1;
        this.equips.set(empty, item6);
      } else {
        if (this.equips.has(slot))
          return !1;
        this.equips.set(slot, item6);
      }
      return !0;
    }
  }, {
    key: "equipUsingDualWield",
    value: function(item6, slot) {
      return ![void 0, $slot(_templateObject129 || (_templateObject129 = _taggedTemplateLiteral27(["off-hand"])))].includes(slot) || (0, import_kolmafia31.toSlot)(item6) !== $slot(_templateObject139 || (_templateObject139 = _taggedTemplateLiteral27(["weapon"]))) || this.equips.has($slot(_templateObject149 || (_templateObject149 = _taggedTemplateLiteral27(["weapon"])))) && weaponHands(this.equips.get($slot(_templateObject158 || (_templateObject158 = _taggedTemplateLiteral27(["weapon"]))))) !== 1 || this.equips.has($slot(_templateObject168 || (_templateObject168 = _taggedTemplateLiteral27(["off-hand"])))) || !have($skill(_templateObject178 || (_templateObject178 = _taggedTemplateLiteral27(["Double-Fisted Skull Smashing"])))) || weaponHands(item6) !== 1 || !(0, import_kolmafia31.canEquip)(item6) || !weaponsCompatible(this.equips.get($slot(_templateObject188 || (_templateObject188 = _taggedTemplateLiteral27(["weapon"])))), item6) ? !1 : (this.equips.set($slot(_templateObject197 || (_templateObject197 = _taggedTemplateLiteral27(["off-hand"]))), item6), !0);
    }
  }, {
    key: "getHoldingFamiliar",
    value: function(item6) {
      switch ((0, import_kolmafia31.toSlot)(item6)) {
        case $slot(_templateObject207 || (_templateObject207 = _taggedTemplateLiteral27(["weapon"]))):
          return $familiar(_templateObject2112 || (_templateObject2112 = _taggedTemplateLiteral27(["Disembodied Hand"])));
        case $slot(_templateObject2211 || (_templateObject2211 = _taggedTemplateLiteral27(["off-hand"]))):
          return $familiar(_templateObject238 || (_templateObject238 = _taggedTemplateLiteral27(["Left-Hand Man"])));
        case $slot(_templateObject246 || (_templateObject246 = _taggedTemplateLiteral27(["pants"]))):
          return $familiar(_templateObject256 || (_templateObject256 = _taggedTemplateLiteral27(["Fancypants Scarecrow"])));
        case $slot(_templateObject266 || (_templateObject266 = _taggedTemplateLiteral27(["hat"]))):
          return $familiar(_templateObject276 || (_templateObject276 = _taggedTemplateLiteral27(["Mad Hatrack"])));
        default:
          return;
      }
    }
  }, {
    key: "getBonus",
    value: function(item6) {
      var _a2;
      return (_a2 = this.bonuses.get(item6)) !== null && _a2 !== void 0 ? _a2 : 0;
    }
  }, {
    key: "applyBonus",
    value: function(item6, value, reducer) {
      var previous = this.getBonus(item6);
      return this.setBonus(item6, reducer(value, previous));
    }
  }, {
    key: "setBonus",
    value: function(item6, value) {
      return this.bonuses.set(item6, value), value;
    }
  }, {
    key: "addBonus",
    value: function(item6, value) {
      return this.applyBonus(item6, value, function(a, b) {
        return a + b;
      });
    }
  }, {
    key: "applyBonuses",
    value: function(items, reducer) {
      var _iterator = _createForOfIteratorHelper8(items), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _step$value = _slicedToArray12(_step.value, 2), item6 = _step$value[0], value = _step$value[1];
          this.applyBonus(item6, value, reducer);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "setBonuses",
    value: function(items) {
      this.applyBonuses(items, function(a) {
        return a;
      });
    }
  }, {
    key: "addBonuses",
    value: function(items) {
      this.applyBonuses(items, function(a, b) {
        return a + b;
      });
    }
  }, {
    key: "equipUsingFamiliar",
    value: function(item6, slot) {
      if (![void 0, $slot(_templateObject285 || (_templateObject285 = _taggedTemplateLiteral27(["familiar"])))].includes(slot) || this.equips.has($slot(_templateObject295 || (_templateObject295 = _taggedTemplateLiteral27(["familiar"])))) || (0, import_kolmafia31.booleanModifier)(item6, "Single Equip"))
        return !1;
      var familiar2 = this.getHoldingFamiliar(item6);
      return familiar2 === void 0 || $familiars(_templateObject305 || (_templateObject305 = _taggedTemplateLiteral27(["Fancypants Scarecrow, Mad Hatrack"]))).includes(familiar2) && slot === void 0 || !this.equip(familiar2) ? !1 : (this.equips.set($slot(_templateObject3111 || (_templateObject3111 = _taggedTemplateLiteral27(["familiar"]))), item6), !0);
    }
  }, {
    key: "equipItem",
    value: function(item6, slot) {
      return this.haveEquipped(item6, slot) || this.equipItemNone(item6, slot) || this.isAvailable(item6) && (this.equipNonAccessory(item6, slot) || this.equipAccessory(item6, slot) || this.equipUsingDualWield(item6, slot) || this.equipUsingFamiliar(item6, slot));
    }
  }, {
    key: "equipFamiliar",
    value: function(familiar2) {
      if (familiar2 === this.familiar)
        return !0;
      if (this.familiar !== void 0 || familiar2 !== $familiar.none && (!have(familiar2) || Array.from(this.riders.values()).includes(familiar2)))
        return !1;
      var item6 = this.equips.get($slot(_templateObject329 || (_templateObject329 = _taggedTemplateLiteral27(["familiar"]))));
      return item6 !== void 0 && item6 !== $item.none && !(0, import_kolmafia31.canEquip)(familiar2, item6) ? !1 : (this.familiar = familiar2, !0);
    }
  }, {
    key: "equipSpec",
    value: function(spec) {
      for (var _this$avoid, _a2, _b, _c, _d, _e, _f, succeeded = !0, _i2 = 0, _outfitSlots2 = outfitSlots; _i2 < _outfitSlots2.length; _i2++) {
        var slotName = _outfitSlots2[_i2], slot = (_a2 = (/* @__PURE__ */ new Map([["famequip", $slot(_templateObject334 || (_templateObject334 = _taggedTemplateLiteral27(["familiar"])))], ["offhand", $slot(_templateObject344 || (_templateObject344 = _taggedTemplateLiteral27(["off-hand"])))]])).get(slotName)) !== null && _a2 !== void 0 ? _a2 : (0, import_kolmafia31.toSlot)(slotName), itemOrItems = spec[slotName];
        itemOrItems !== void 0 && !this.equip(itemOrItems, slot) && (succeeded = !1);
      }
      var _iterator2 = _createForOfIteratorHelper8((_b = spec == null ? void 0 : spec.equip) !== null && _b !== void 0 ? _b : []), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var item6 = _step2.value;
          this.equip(item6) || (succeeded = !1);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      if ((spec == null ? void 0 : spec.familiar) !== void 0 && (this.equip(spec.familiar) || (succeeded = !1)), (_this$avoid = this.avoid).push.apply(_this$avoid, _toConsumableArray8((_c = spec == null ? void 0 : spec.avoid) !== null && _c !== void 0 ? _c : [])), this.skipDefaults = this.skipDefaults || ((_d = spec.skipDefaults) !== null && _d !== void 0 ? _d : !1), spec.modifier) {
        var _this$modifier;
        Array.isArray(spec.modifier) ? (_this$modifier = this.modifier).push.apply(_this$modifier, _toConsumableArray8(spec.modifier)) : this.modifier.push(spec.modifier);
      }
      return spec.modes && (this.setModes(spec.modes) || (succeeded = !1)), spec.riders && (spec.riders["buddy-bjorn"] && !this.bjornify(spec.riders["buddy-bjorn"]) && (succeeded = !1), spec.riders["crown-of-thrones"] && !this.enthrone(spec.riders["crown-of-thrones"]) && (succeeded = !1)), spec.bonuses && this.addBonuses(spec.bonuses), this.beforeDress.apply(this, _toConsumableArray8((_e = spec.beforeDress) !== null && _e !== void 0 ? _e : [])), this.afterDress.apply(this, _toConsumableArray8((_f = spec.afterDress) !== null && _f !== void 0 ? _f : [])), succeeded;
    }
  }, {
    key: "equipFirst",
    value: function(things, slot) {
      var _this = this;
      return things.length === 0 ? !0 : things.some(function(val) {
        return _this.equip(val, slot);
      });
    }
  }, {
    key: "equip",
    value: function(thing, slot) {
      var _this = this;
      return Array.isArray(thing) ? slot !== void 0 ? this.equipFirst(thing, slot) : thing.every(function(val) {
        return _this.equip(val);
      }) : thing instanceof import_kolmafia31.Item ? this.equipItem(thing, slot) : thing instanceof import_kolmafia31.Familiar ? this.equipFamiliar(thing) : thing instanceof Outfit2 ? this.equipSpec(thing.spec()) : this.equipSpec(thing);
    }
  }, {
    key: "equipRider",
    value: function(target, slot) {
      var _this = this;
      var current2 = this.riders.get(slot), targets = Array.isArray(target) ? target : [target];
      if (current2)
        return targets.includes(current2);
      var otherRiders = _toConsumableArray8(this.riders.entries()).filter(function(_ref) {
        var _ref2 = _slicedToArray12(_ref, 1), key = _ref2[0];
        return slot !== key;
      }).map(function(_ref3) {
        var _ref4 = _slicedToArray12(_ref3, 2), value = _ref4[1];
        return value;
      }), fam = targets.find(function(f) {
        return have(f) && _this.familiar !== f && !otherRiders.includes(f);
      });
      return fam ? (this.riders.set(slot, fam), !0) : !1;
    }
  }, {
    key: "bjornify",
    value: function(target) {
      return this.equipRider(target, $slot(_templateObject354 || (_templateObject354 = _taggedTemplateLiteral27(["buddy-bjorn"]))));
    }
  }, {
    key: "enthrone",
    value: function(target) {
      return this.equipRider(target, $slot(_templateObject364 || (_templateObject364 = _taggedTemplateLiteral27(["crown-of-thrones"]))));
    }
  }, {
    key: "setModes",
    value: function(modes) {
      for (var _a2, _b, compatible = !0, _i3 = 0, _modeableCommands = modeableCommands2; _i3 < _modeableCommands.length; _i3++) {
        var mode = _modeableCommands[_i3];
        mode !== "retrocape" && this.modes[mode] && modes[mode] && this.modes[mode] !== modes[mode] && (compatible = !1);
      }
      return this.modes.retrocape && modes.retrocape && (this.modes.retrocape[0] && modes.retrocape[0] && this.modes.retrocape[0] !== modes.retrocape[0] && (compatible = !1), this.modes.retrocape[1] && modes.retrocape[1] && this.modes.retrocape[1] !== modes.retrocape[1] && (compatible = !1), this.modes.retrocape[0] = (_a2 = this.modes.retrocape[0]) !== null && _a2 !== void 0 ? _a2 : modes.retrocape[0], this.modes.retrocape[1] = (_b = this.modes.retrocape[1]) !== null && _b !== void 0 ? _b : modes.retrocape[1]), this.modes = _objectSpread5(_objectSpread5({}, modes), this.modes), compatible;
    }
  }, {
    key: "canEquip",
    value: function(thing, slot) {
      var outfit2 = this.clone();
      return outfit2.equip(thing, slot);
    }
  }, {
    key: "tryEquip",
    value: function(thing, slot) {
      return this.canEquip(thing, slot) && this.equip(thing, slot);
    }
  }, {
    key: "afterDress",
    value: function() {
      var _this$postActions;
      (_this$postActions = this.postActions).push.apply(_this$postActions, arguments);
    }
  }, {
    key: "beforeDress",
    value: function() {
      var _this$preActions;
      (_this$preActions = this.preActions).push.apply(_this$preActions, arguments);
    }
  }, {
    key: "_dress",
    value: function(refreshed) {
      var _this = this;
      this.familiar && (0, import_kolmafia31.useFamiliar)(this.familiar);
      var targetEquipment = Array.from(this.equips.values()), usedSlots = /* @__PURE__ */ new Set(), nonaccessorySlots = $slots(_templateObject374 || (_templateObject374 = _taggedTemplateLiteral27(["weapon, off-hand, hat, back, shirt, pants, familiar"]))), bjorn = this.riders.get($slot(_templateObject383 || (_templateObject383 = _taggedTemplateLiteral27(["buddy-bjorn"]))));
      bjorn && (this.equips.get($slot(_templateObject393 || (_templateObject393 = _taggedTemplateLiteral27(["back"])))) === $item(_templateObject403 || (_templateObject403 = _taggedTemplateLiteral27(["Buddy Bjorn"]))) || this.getBonus($item(_templateObject4110 || (_templateObject4110 = _taggedTemplateLiteral27(["Buddy Bjorn"]))))) && (usedSlots.add($slot(_templateObject426 || (_templateObject426 = _taggedTemplateLiteral27(["buddy-bjorn"])))), usedSlots.add($slot(_templateObject433 || (_templateObject433 = _taggedTemplateLiteral27(["crown-of-thrones"])))));
      var crown = this.riders.get($slot(_templateObject443 || (_templateObject443 = _taggedTemplateLiteral27(["crown-of-thrones"]))));
      crown && (this.equips.get($slot(_templateObject452 || (_templateObject452 = _taggedTemplateLiteral27(["hat"])))) === $item(_templateObject462 || (_templateObject462 = _taggedTemplateLiteral27(["Crown of Thrones"]))) || this.getBonus($item(_templateObject472 || (_templateObject472 = _taggedTemplateLiteral27(["Crown of Thrones"]))))) && (usedSlots.add($slot(_templateObject482 || (_templateObject482 = _taggedTemplateLiteral27(["buddy-bjorn"])))), usedSlots.add($slot(_templateObject493 || (_templateObject493 = _taggedTemplateLiteral27(["crown-of-thrones"]))))), weaponHands((0, import_kolmafia31.equippedItem)($slot(_templateObject503 || (_templateObject503 = _taggedTemplateLiteral27(["weapon"]))))) !== 1 && this.equips.has($slot(_templateObject5110 || (_templateObject5110 = _taggedTemplateLiteral27(["offhand"])))) && !this.equips.has($slot(_templateObject523 || (_templateObject523 = _taggedTemplateLiteral27(["weapon"])))) && (0, import_kolmafia31.equip)($slot(_templateObject532 || (_templateObject532 = _taggedTemplateLiteral27(["weapon"]))), $item.none), weaponsCompatible(this.equips.get($slot(_templateObject542 || (_templateObject542 = _taggedTemplateLiteral27(["weapon"])))), (0, import_kolmafia31.equippedItem)($slot(_templateObject552 || (_templateObject552 = _taggedTemplateLiteral27(["off-hand"]))))) || (0, import_kolmafia31.equip)($slot(_templateObject562 || (_templateObject562 = _taggedTemplateLiteral27(["off-hand"]))), $item.none);
      var _iterator3 = _createForOfIteratorHelper8(nonaccessorySlots), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var slot = _step3.value;
          (targetEquipment.includes((0, import_kolmafia31.equippedItem)(slot)) && this.equips.get(slot) !== (0, import_kolmafia31.equippedItem)(slot) || this.avoid.includes((0, import_kolmafia31.equippedItem)(slot))) && (0, import_kolmafia31.equip)(slot, $item.none);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var _iterator4 = _createForOfIteratorHelper8(nonaccessorySlots), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var _slot = _step4.value, equipment = this.equips.get(_slot);
          equipment && ((0, import_kolmafia31.equip)(_slot, equipment), usedSlots.add(_slot));
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      var accessorySlots = $slots(_templateObject572 || (_templateObject572 = _taggedTemplateLiteral27(["acc1, acc2, acc3"]))), accessoryEquips = accessorySlots.map(function(slot2) {
        return _this.equips.get(slot2);
      }).filter(function(item6) {
        return item6 !== void 0;
      }), missingAccessories = [], _iterator5 = _createForOfIteratorHelper8(accessoryEquips), _step5;
      try {
        var _loop = function() {
          var accessory2 = _step5.value, alreadyEquipped = accessorySlots.find(function(slot2) {
            return !usedSlots.has(slot2) && (0, import_kolmafia31.equippedItem)(slot2) === accessory2;
          });
          alreadyEquipped ? usedSlots.add(alreadyEquipped) : missingAccessories.push(accessory2);
        };
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; )
          _loop();
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      for (var _i4 = 0, _missingAccessories = missingAccessories; _i4 < _missingAccessories.length; _i4++) {
        var accessory = _missingAccessories[_i4], unusedSlot = accessorySlots.find(function(slot2) {
          return !usedSlots.has(slot2);
        });
        if (unusedSlot === void 0)
          throw "No accessory slots remaining";
        (0, import_kolmafia31.equip)(unusedSlot, accessory), usedSlots.add(unusedSlot);
      }
      var modes = convertToLibramModes(this.modes);
      if (this.modifier.length > 0 || _toConsumableArray8(this.bonuses).filter(function(_ref5) {
        var _ref6 = _slicedToArray12(_ref5, 2), value = _ref6[1];
        return value;
      }).length > 0) {
        var allRequirements = [new Requirement(this.modifier, {
          preventSlot: _toConsumableArray8(usedSlots),
          preventEquip: this.avoid,
          modes: modes,
          bonusEquip: this.bonuses
        })];
        if (refreshed && allRequirements.push(FORCE_REFRESH_REQUIREMENT), !Requirement.merge(allRequirements).maximize()) {
          if (refreshed)
            throw new Error("Failed to maximize properly!");
          (0, import_kolmafia31.cliExecute)("refresh inventory"), this._dress(!0);
          return;
        }
        (0, import_kolmafia31.logprint)("Maximize: ".concat(this.modifier));
      }
      if (applyModes(modes), bjorn && (0, import_kolmafia31.haveEquipped)($item(_templateObject582 || (_templateObject582 = _taggedTemplateLiteral27(["Buddy Bjorn"])))) && ((0, import_kolmafia31.myEnthronedFamiliar)() === bjorn && (0, import_kolmafia31.enthroneFamiliar)($familiar.none), (0, import_kolmafia31.myBjornedFamiliar)() !== bjorn && (0, import_kolmafia31.bjornifyFamiliar)(bjorn)), crown && (0, import_kolmafia31.haveEquipped)($item(_templateObject592 || (_templateObject592 = _taggedTemplateLiteral27(["Crown of Thrones"])))) && ((0, import_kolmafia31.myBjornedFamiliar)() === crown && (0, import_kolmafia31.bjornifyFamiliar)($familiar.none), (0, import_kolmafia31.myEnthronedFamiliar)() !== crown && (0, import_kolmafia31.enthroneFamiliar)(crown)), this.familiar !== void 0 && (0, import_kolmafia31.myFamiliar)() !== this.familiar)
        throw "Failed to fully dress (expected: familiar ".concat(this.familiar, ")");
      var _iterator6 = _createForOfIteratorHelper8(nonaccessorySlots), _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
          var _slot2 = _step6.value;
          if (this.equips.has(_slot2) && (0, import_kolmafia31.equippedItem)(_slot2) !== this.equips.get(_slot2))
            throw "Failed to fully dress (expected: ".concat(_slot2, " ").concat(this.equips.get(_slot2), ")");
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      var _iterator7 = _createForOfIteratorHelper8(accessoryEquips), _step7;
      try {
        var _loop2 = function() {
          var accessory2 = _step7.value;
          if ((0, import_kolmafia31.equippedAmount)(accessory2) < accessoryEquips.filter(function(acc) {
            return acc === accessory2;
          }).length)
            throw "Failed to fully dress (expected: acc ".concat(accessory2, ")");
        };
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done; )
          _loop2();
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      for (var _i5 = 0, _arr2 = [[$slot(_templateObject602 || (_templateObject602 = _taggedTemplateLiteral27(["buddy-bjorn"]))), $item(_templateObject6110 || (_templateObject6110 = _taggedTemplateLiteral27(["Buddy Bjorn"]))), import_kolmafia31.myBjornedFamiliar], [$slot(_templateObject622 || (_templateObject622 = _taggedTemplateLiteral27(["crown-of-thrones"]))), $item(_templateObject632 || (_templateObject632 = _taggedTemplateLiteral27(["Crown of Thrones"]))), import_kolmafia31.myEnthronedFamiliar]]; _i5 < _arr2.length; _i5++) {
        var _arr2$_i = _slicedToArray12(_arr2[_i5], 3), rider = _arr2$_i[0], throne = _arr2$_i[1], checkingFunction = _arr2$_i[2], wanted = this.riders.get(rider);
        if (_toConsumableArray8(this.equips.values()).includes(throne) && wanted && checkingFunction() !== wanted)
          throw "Failed to fully dress: (expected ".concat(rider, " ").concat(wanted, ")");
      }
    }
  }, {
    key: "dress",
    value: function() {
      var _iterator8 = _createForOfIteratorHelper8(this.preActions), _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
          var action = _step8.value;
          action();
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      this._dress(!1);
      var _iterator9 = _createForOfIteratorHelper8(this.postActions), _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done; ) {
          var _action = _step9.value;
          _action();
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    }
  }, {
    key: "clone",
    value: function() {
      var result = new Outfit2();
      return result.equips = new Map(this.equips), result.skipDefaults = this.skipDefaults, result.familiar = this.familiar, result.modifier = _toConsumableArray8(this.modifier), result.avoid = _toConsumableArray8(this.avoid), result.modes = _objectSpread5({}, this.modes), result.riders = new Map(this.riders), result.bonuses = new Map(this.bonuses), result.beforeDress.apply(result, _toConsumableArray8(this.preActions)), result.afterDress.apply(result, _toConsumableArray8(this.postActions)), result;
    }
  }, {
    key: "spec",
    value: function() {
      var _a2, result = {
        modifier: _toConsumableArray8(this.modifier),
        avoid: _toConsumableArray8(this.avoid),
        skipDefaults: this.skipDefaults,
        modes: _objectSpread5({}, this.modes),
        bonuses: new Map(this.bonuses)
      };
      this.familiar && (result.familiar = this.familiar);
      for (var _i6 = 0, _outfitSlots2 = outfitSlots; _i6 < _outfitSlots2.length; _i6++) {
        var slotName = _outfitSlots2[_i6], entry = this.equips.get((_a2 = (/* @__PURE__ */ new Map([["famequip", $slot(_templateObject642 || (_templateObject642 = _taggedTemplateLiteral27(["familiar"])))], ["offhand", $slot(_templateObject652 || (_templateObject652 = _taggedTemplateLiteral27(["off-hand"])))]])).get(slotName)) !== null && _a2 !== void 0 ? _a2 : (0, import_kolmafia31.toSlot)(slotName));
        entry && (result[slotName] = entry);
      }
      var riders = {}, buddyRider = this.riders.get($slot(_templateObject662 || (_templateObject662 = _taggedTemplateLiteral27(["buddy-bjorn"]))));
      buddyRider !== void 0 && (riders["buddy-bjorn"] = buddyRider);
      var throneRider = this.riders.get($slot(_templateObject672 || (_templateObject672 = _taggedTemplateLiteral27(["crown-of-thrones"]))));
      return throneRider !== void 0 && (riders["crown-of-thrones"] = throneRider), (buddyRider !== void 0 || throneRider !== void 0) && (result.riders = riders), this.preActions.length && (result.beforeDress = this.preActions), this.postActions.length && (result.afterDress = this.postActions), result;
    }
  }], [{
    key: "current",
    value: function() {
      var _a2, outfit2 = new Outfit2(), familiar2 = (0, import_kolmafia31.myFamiliar)();
      if (outfit2.equip(familiar2))
        throw "Failed to create outfit from current state (expected: familiar ".concat(familiar2, ")");
      for (var _i7 = 0, _outfitSlots3 = outfitSlots; _i7 < _outfitSlots3.length; _i7++) {
        var slotName = _outfitSlots3[_i7], slot = (_a2 = (/* @__PURE__ */ new Map([["famequip", $slot(_templateObject682 || (_templateObject682 = _taggedTemplateLiteral27(["familiar"])))], ["offhand", $slot(_templateObject692 || (_templateObject692 = _taggedTemplateLiteral27(["off-hand"])))]])).get(slotName)) !== null && _a2 !== void 0 ? _a2 : (0, import_kolmafia31.toSlot)(slotName), item6 = (0, import_kolmafia31.equippedItem)(slot);
        if (!outfit2.equip(item6, slot))
          throw "Failed to create outfit from current state (expected: ".concat(slot, " ").concat(item6, ")");
      }
      return (0, import_kolmafia31.haveEquipped)($item(_templateObject702 || (_templateObject702 = _taggedTemplateLiteral27(["Crown of Thrones"])))) && outfit2.riders.set($slot(_templateObject719 || (_templateObject719 = _taggedTemplateLiteral27(["crown-of-thrones"]))), (0, import_kolmafia31.myEnthronedFamiliar)()), (0, import_kolmafia31.haveEquipped)($item(_templateObject722 || (_templateObject722 = _taggedTemplateLiteral27(["Buddy Bjorn"])))) && outfit2.riders.set($slot(_templateObject732 || (_templateObject732 = _taggedTemplateLiteral27(["buddy-bjorn"]))), (0, import_kolmafia31.myBjornedFamiliar)()), outfit2.setModes(getCurrentModes2()), outfit2;
    }
  }, {
    key: "from",
    value: function(spec) {
      var error = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, _a2, outfit2 = new Outfit2();
      if (spec instanceof Requirement) {
        var result = {};
        result.modifier = spec.maximizeParameters, !((_a2 = spec.maximizeOptions.forceEquip) === null || _a2 === void 0) && _a2.length && (result.equip = spec.maximizeOptions.forceEquip), result.avoid = spec.maximizeOptions.preventEquip, result.bonuses = spec.maximizeOptions.bonusEquip, spec.maximizeOptions.modes && (result.modes = convertFromLibramModes(spec.maximizeOptions.modes));
        var cleanedResult = Object.fromEntries(_toConsumableArray8(Object.entries(result)).filter(function(_ref7) {
          var _ref8 = _slicedToArray12(_ref7, 2), v = _ref8[1];
          return v !== void 0;
        }));
        return Outfit2.from(cleanedResult);
      }
      var success = outfit2.equip(spec);
      if (!success && error)
        throw error;
      return success ? outfit2 : null;
    }
  }]), Outfit2;
}();
function convertToLibramModes(modes) {
  var _a2;
  return {
    backupcamera: modes.backupcamera,
    umbrella: modes.umbrella,
    snowsuit: modes.snowsuit,
    edpiece: modes.edpiece,
    retrocape: (_a2 = modes.retrocape) === null || _a2 === void 0 ? void 0 : _a2.filter(function(s) {
      return s !== void 0;
    }).join(" "),
    parka: modes.parka,
    jillcandle: modes.jillcandle
  };
}
function convertFromLibramModes(modes) {
  return modes.retrocape ? _objectSpread5(_objectSpread5({}, modes), {}, {
    retrocape: modes.retrocape.split(" ")
  }) : modes;
}
function getCurrentModes2() {
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
function getMode(property, options) {
  var val = get(property, "");
  return options.find(function(s) {
    return s === val;
  });
}
function weaponsCompatible(weapon, offhand) {
  if (!weapon || weapon === $item(_templateObject742 || (_templateObject742 = _taggedTemplateLiteral27(["none"]))) || !offhand || offhand === $item(_templateObject752 || (_templateObject752 = _taggedTemplateLiteral27(["none"]))) || (0, import_kolmafia31.toSlot)(offhand) !== $slot(_templateObject762 || (_templateObject762 = _taggedTemplateLiteral27(["weapon"]))))
    return !0;
  var weaponStat = (0, import_kolmafia31.weaponType)(weapon), offhandStat = (0, import_kolmafia31.weaponType)(offhand);
  return !(weaponStat === $stat(_templateObject772 || (_templateObject772 = _taggedTemplateLiteral27(["Moxie"]))) && (offhandStat === $stat(_templateObject782 || (_templateObject782 = _taggedTemplateLiteral27(["Mysticality"]))) || offhandStat === $stat(_templateObject792 || (_templateObject792 = _taggedTemplateLiteral27(["Muscle"])))) || offhandStat === $stat(_templateObject802 || (_templateObject802 = _taggedTemplateLiteral27(["Moxie"]))) && (weaponStat === $stat(_templateObject815 || (_templateObject815 = _taggedTemplateLiteral27(["Mysticality"]))) || weaponStat === $stat(_templateObject822 || (_templateObject822 = _taggedTemplateLiteral27(["Muscle"])))));
}

// node_modules/grimoire-kolmafia/dist/engine.js
var _templateObject110;
function _taggedTemplateLiteral28(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _inherits6(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf6(subClass, superClass);
}
function _setPrototypeOf6(o, p) {
  return _setPrototypeOf6 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf6(o, p);
}
function _createSuper5(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct5();
  return function() {
    var Super = _getPrototypeOf5(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf5(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn5(this, result);
  };
}
function _possibleConstructorReturn5(self2, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized5(self2);
}
function _assertThisInitialized5(self2) {
  if (self2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self2;
}
function _isNativeReflectConstruct5() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _getPrototypeOf5(o) {
  return _getPrototypeOf5 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf5(o);
}
function _toConsumableArray9(arr) {
  return _arrayWithoutHoles9(arr) || _iterableToArray9(arr) || _unsupportedIterableToArray17(arr) || _nonIterableSpread9();
}
function _nonIterableSpread9() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray9(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles9(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray17(arr);
}
function _slicedToArray13(arr, i) {
  return _arrayWithHoles13(arr) || _iterableToArrayLimit13(arr, i) || _unsupportedIterableToArray17(arr, i) || _nonIterableRest13();
}
function _nonIterableRest13() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit13(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles13(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _createForOfIteratorHelper9(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray17(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray17(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray17(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray17(o, minLen);
  }
}
function _arrayLikeToArray17(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys6(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread6(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys6(Object(source), !0).forEach(function(key) {
      _defineProperty11(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys6(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty11(obj, key, value) {
  return key = _toPropertyKey15(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _defineProperties13(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey15(descriptor.key), descriptor);
  }
}
function _createClass13(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties13(Constructor.prototype, protoProps), staticProps && _defineProperties13(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey15(arg) {
  var key = _toPrimitive15(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive15(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _classCallCheck13(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
var grimoireCCS = "grimoire_macro", ContextualEngine = /* @__PURE__ */ function() {
  function ContextualEngine2(tasks, options) {
    var _this = this;
    _classCallCheck13(this, ContextualEngine2), this.attempts = {}, this.propertyManager = new PropertiesManager(), this.tasks_by_name = /* @__PURE__ */ new Map(), this.cachedCcsContents = "", this.options = options != null ? options : {}, this.tasks = tasks.map(function(task2) {
      return _objectSpread6(_objectSpread6({}, _this.options.default_task_options), task2);
    });
    var _iterator = _createForOfIteratorHelper9(this.tasks), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
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
  return _createClass13(ContextualEngine2, [{
    key: "getNextTask",
    value: function() {
      var _this = this;
      return this.tasks.find(function(task) {
        return _this.available(task);
      });
    }
  }, {
    key: "run",
    value: function(actions) {
      for (var i = 0; i < (actions != null ? actions : 1 / 0); i++) {
        var task = this.getNextTask();
        if (!task)
          return;
        this.execute(task);
      }
    }
  }, {
    key: "destruct",
    value: function() {
      this.propertyManager.resetAll(), (0, import_kolmafia32.setAutoAttack)(0);
    }
  }, {
    key: "available",
    value: function(task) {
      var _a2, _b;
      if (((_a2 = task.limit) === null || _a2 === void 0 ? void 0 : _a2.skip) !== void 0 && this.attempts[task.name] >= task.limit.skip)
        return !1;
      var _iterator2 = _createForOfIteratorHelper9((_b = task.after) !== null && _b !== void 0 ? _b : []), _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
          var after = _step2.value, after_task = this.tasks_by_name.get(after);
          if (after_task === void 0)
            throw "Unknown task dependency ".concat(after, " on ").concat(task.name);
          if (!after_task.completed(this.getContext(task)))
            return !1;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return !(task.ready && !task.ready(this.getContext(task)) || task.completed(this.getContext(task)));
    }
  }, {
    key: "execute",
    value: function(task) {
      var _a2, _b, _c, _d, _e;
      this.printExecutingMessage(task);
      var postcondition = (_b = (_a2 = task.limit) === null || _a2 === void 0 ? void 0 : _a2.guard) === null || _b === void 0 ? void 0 : _b.call(_a2, this.getContext(task));
      this.acquireItems(task), this.acquireEffects(task);
      var task_combat = (_d = (_c = task.combat) === null || _c === void 0 ? void 0 : _c.clone()) !== null && _d !== void 0 ? _d : new CombatStrategy(), outfit2 = this.createOutfit(task), task_resources = new CombatResources();
      this.customize(task, outfit2, task_combat, task_resources), this.dress(task, outfit2), this.setCombat(task, task_combat, task_resources), this.setChoices(task, this.propertyManager);
      var _iterator3 = _createForOfIteratorHelper9(task_resources.all()), _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
          var resource = _step3.value;
          (_e = resource.prepare) === null || _e === void 0 || _e.call(resource, this.getContext(task));
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      for (this.prepare(task), this.do(task); this.shouldRepeatAdv(task); )
        _set("lastEncounter", ""), this.do(task);
      this.post(task), this.markAttempt(task), this.checkLimits(task, postcondition);
    }
  }, {
    key: "printExecutingMessage",
    value: function(task) {
      (0, import_kolmafia32.print)(""), (0, import_kolmafia32.print)("Executing ".concat(task.name), "blue");
    }
  }, {
    key: "acquireItems",
    value: function(task) {
      var _a2, acquire = undelay(task.acquire, this.getContext(task)), _iterator4 = _createForOfIteratorHelper9(acquire || []), _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
          var to_get = _step4.value, num_needed = (_a2 = to_get.num) !== null && _a2 !== void 0 ? _a2 : 1, num_have = (0, import_kolmafia32.itemAmount)(to_get.item) + (0, import_kolmafia32.equippedAmount)(to_get.item);
          if (!(num_needed <= num_have) && !(to_get.useful !== void 0 && !to_get.useful()) && (to_get.get ? to_get.get() : to_get.price !== void 0 ? (0, import_kolmafia32.buy)(to_get.item, num_needed - num_have, to_get.price) : Object.keys((0, import_kolmafia32.getRelated)(to_get.item, "fold")).length > 0 ? (0, import_kolmafia32.cliExecute)("fold ".concat(to_get.item)) : (0, import_kolmafia32.retrieveItem)(to_get.item, num_needed), (0, import_kolmafia32.itemAmount)(to_get.item) + (0, import_kolmafia32.equippedAmount)(to_get.item) < num_needed && !to_get.optional))
            throw "Task ".concat(task.name, " was unable to acquire ").concat(num_needed, " ").concat(to_get.item);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "acquireEffects",
    value: function(task) {
      var _a2, effects = (_a2 = undelay(task.effects, this.getContext(task))) !== null && _a2 !== void 0 ? _a2 : [], songs = effects.filter(function(effect2) {
        return isSong(effect2);
      });
      if (songs.length > maxSongs())
        throw "Too many AT songs";
      for (var extraSongs = Object.keys((0, import_kolmafia32.myEffects)()).map(function(effectName) {
        return (0, import_kolmafia32.toEffect)(effectName);
      }).filter(function(effect2) {
        return isSong(effect2) && !songs.includes(effect2);
      }); songs.length + extraSongs.length > maxSongs(); ) {
        var toRemove = extraSongs.pop();
        if (toRemove === void 0)
          break;
        uneffect(toRemove);
      }
      var _iterator5 = _createForOfIteratorHelper9(effects), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          var effect = _step5.value;
          ensureEffect(effect);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }, {
    key: "createOutfit",
    value: function(task) {
      var spec = undelay(task.outfit, this.getContext(task));
      if (spec instanceof Outfit)
        return spec.clone();
      var outfit2 = new Outfit();
      if (spec !== void 0 && !outfit2.equip(spec) && !this.options.allow_partial_outfits)
        throw "Unable to equip all items for ".concat(task.name);
      return outfit2;
    }
  }, {
    key: "dress",
    value: function(task, outfit2) {
      task.do instanceof import_kolmafia32.Location && (0, import_kolmafia32.setLocation)(task.do), outfit2.dress();
    }
  }, {
    key: "customize",
    value: function(task, outfit2, combat, resources) {
    }
  }, {
    key: "setChoices",
    value: function(task, manager) {
      for (var _a2, _i = 0, _Object$entries = Object.entries(undelay((_a2 = task.choices) !== null && _a2 !== void 0 ? _a2 : {}, this.getContext(task))); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray13(_Object$entries[_i], 2), key = _Object$entries$_i[0], value = _Object$entries$_i[1];
        value !== void 0 && manager.setChoice(parseInt(key), value);
      }
    }
  }, {
    key: "setCombat",
    value: function(task, task_combat, task_resources) {
      var _a2, macro = task_combat.compile(task_resources, (_a2 = this.options) === null || _a2 === void 0 ? void 0 : _a2.combat_defaults, task.do instanceof import_kolmafia32.Location ? task.do : void 0, this.getContext(task));
      if (macro.save(), !this.options.ccs) {
        var otherCCSEntries = task_combat.compileCcs(), ccsContents = ["[default]", '"'.concat(macro.toString(), '"')].concat(_toConsumableArray9(otherCCSEntries)).join("\n");
        (0, import_kolmafia32.logprint)("CCS: ".concat(ccsContents.replace("\n", "\\n "))), ccsContents !== this.cachedCcsContents && ((0, import_kolmafia32.writeCcs)(ccsContents, grimoireCCS), (0, import_kolmafia32.cliExecute)("ccs ".concat(grimoireCCS)), this.cachedCcsContents = ccsContents);
      }
      var autoattack = task_combat.compileAutoattack(this.getContext(task));
      autoattack.toString().length > 1 ? ((0, import_kolmafia32.logprint)("Autoattack macro: ".concat(autoattack.toString())), autoattack.setAutoAttack()) : (0, import_kolmafia32.setAutoAttack)(0);
    }
  }, {
    key: "prepare",
    value: function(task) {
      var _a2;
      (_a2 = task.prepare) === null || _a2 === void 0 || _a2.call(task, this.getContext(task));
    }
  }, {
    key: "do",
    value: function(task) {
      var result = typeof task.do == "function" ? task.do(this.getContext(task)) : task.do;
      for (result instanceof import_kolmafia32.Location && (0, import_kolmafia32.adv1)(result, -1, ""), (0, import_kolmafia32.runCombat)(); (0, import_kolmafia32.inMultiFight)(); )
        (0, import_kolmafia32.runCombat)();
      (0, import_kolmafia32.choiceFollowsFight)() && (0, import_kolmafia32.runChoice)(-1);
    }
  }, {
    key: "shouldRepeatAdv",
    value: function(task) {
      return task.do instanceof import_kolmafia32.Location && lastEncounterWasWanderingNC();
    }
  }, {
    key: "post",
    value: function(task) {
      var _a2;
      (_a2 = task.post) === null || _a2 === void 0 || _a2.call(task, this.getContext(task));
    }
  }, {
    key: "markAttempt",
    value: function(task) {
      task.name in this.attempts || (this.attempts[task.name] = 0), this.attempts[task.name]++;
    }
  }, {
    key: "checkLimits",
    value: function(task, postcondition) {
      var _a2;
      if (!!task.limit) {
        var failureMessage = task.limit.message ? " ".concat(task.limit.message) : "";
        if (!task.completed(this.getContext(task))) {
          if (task.limit.tries && this.attempts[task.name] >= task.limit.tries)
            throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.tries, " attempts. Please check what went wrong.").concat(failureMessage);
          if (task.limit.soft && this.attempts[task.name] >= task.limit.soft)
            throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.soft, " attempts. Please check what went wrong (you may just be unlucky).").concat(failureMessage);
          if (task.limit.turns && task.do instanceof import_kolmafia32.Location && task.do.turnsSpent >= task.limit.turns)
            throw "Task ".concat(task.name, " did not complete within ").concat(task.limit.turns, " turns. Please check what went wrong.").concat(failureMessage);
          if (task.limit.unready && ((_a2 = task.ready) === null || _a2 === void 0 ? void 0 : _a2.call(task, this.getContext(task))))
            throw "Task ".concat(task.name, " is still ready, but it should not be. Please check what went wrong.").concat(failureMessage);
          if (task.limit.completed)
            throw "Task ".concat(task.name, " is not completed, but it should be. Please check what went wrong.").concat(failureMessage);
        }
        if (postcondition && !postcondition())
          throw "Task ".concat(task.name, " failed its guard. Please check what went wrong.").concat(failureMessage);
      }
    }
  }, {
    key: "getDefaultSettings",
    value: function() {
      return this.constructor.defaultSettings;
    }
  }, {
    key: "initPropertiesManager",
    value: function(manager) {
      var _a2;
      manager.set(this.getDefaultSettings()), this.options.ccs !== "" && (this.options.ccs === void 0 && (0, import_kolmafia32.readCcs)(grimoireCCS) === "" && (0, import_kolmafia32.writeCcs)("[ default ]\nabort", grimoireCCS), manager.set({
        customCombatScript: (_a2 = this.options.ccs) !== null && _a2 !== void 0 ? _a2 : grimoireCCS
      }));
    }
  }]), ContextualEngine2;
}();
ContextualEngine.defaultSettings = {
  logPreferenceChange: !0,
  logPreferenceChangeFilter: _toConsumableArray9(new Set([].concat(_toConsumableArray9(get("logPreferenceChangeFilter").split(",")), ["libram_savedMacro", "maximizerMRUList", "testudinalTeachings", "_lastCombatStarted"]))).sort().filter(function(a) {
    return a;
  }).join(","),
  battleAction: "custom combat script",
  autoSatisfyWithMall: !0,
  autoSatisfyWithNPCs: !0,
  autoSatisfyWithCoinmasters: !0,
  autoSatisfyWithStash: !1,
  dontStopForCounters: !0,
  maximizerFoldables: !0,
  hpAutoRecovery: "-0.05",
  hpAutoRecoveryTarget: "0.0",
  mpAutoRecovery: "-0.05",
  mpAutoRecoveryTarget: "0.0",
  afterAdventureScript: "",
  betweenBattleScript: "",
  choiceAdventureScript: "",
  familiarScript: "",
  currentMood: "apathetic",
  autoTuxedo: !0,
  autoPinkyRing: !0,
  autoGarish: !0,
  allowNonMoodBurning: !1,
  allowSummonBurning: !0,
  libramSkillsSoftcore: "none"
};
var Engine = /* @__PURE__ */ function(_ContextualEngine) {
  _inherits6(Engine2, _ContextualEngine);
  var _super = _createSuper5(Engine2);
  function Engine2() {
    return _classCallCheck13(this, Engine2), _super.apply(this, arguments);
  }
  return _createClass13(Engine2, [{
    key: "getContext",
    value: function(task) {
    }
  }]), Engine2;
}(ContextualEngine);
function maxSongs() {
  return have($skill(_templateObject110 || (_templateObject110 = _taggedTemplateLiteral28(["Mariachi Memory"])))) ? 4 : 3;
}
var wanderingNCs = /* @__PURE__ */ new Set([
  "Wooof! Wooooooof!",
  "Playing Fetch*",
  "Aunts not Ants",
  "Bath Time",
  "Beware of Aligator",
  "Delicious Sprouts",
  "Hypnotic Master",
  "Lost and Found",
  "Poetic Justice",
  "Summer Days",
  "Teacher's Pet",
  "A Pound of Cure"
]), environmentSpecificNCs = /* @__PURE__ */ new Map([["Even Tamer Than Usual", "indoor"], ["Never Break the Chain", "indoor"], ["Close, but Yes Cigar", "indoor"], ["Armchair Quarterback", "indoor"], ["This Turtle Rocks!", "outdoor"], ["Really Sticking Her Neck Out", "outdoor"], ["It Came from Beneath the Sewer? Great!", "outdoor"], ["Don't Be Alarmed, Now", "outdoor"], ["Puttin' it on Wax", "underground"], ["More Like... Hurtle", "underground"], ["Musk! Musk! Musk!", "underground"], ["Silent Strolling", "underwater"]]), zoneSpecificNCs = new Map(Object.entries((0, import_kolmafia32.fileToBuffer)("data/encounters.txt").split("\n").reduce(function(obj, line) {
  var _a2, _line$split = line.split("	"), _line$split2 = _slicedToArray13(_line$split, 3), location = _line$split2[0], type = _line$split2[1], name = _line$split2[2];
  return type !== "TURTLE" || location === "*" ? obj : _objectSpread6(_objectSpread6({}, obj), {}, _defineProperty11({}, name, [].concat(_toConsumableArray9((_a2 = obj[name]) !== null && _a2 !== void 0 ? _a2 : []), [(0, import_kolmafia32.toLocation)(location)])));
}, {})));
function lastEncounterWasWanderingNC() {
  var _a2, _b, _c, last = get("lastEncounter");
  if (zoneSpecificNCs.has(last)) {
    var zones = (_a2 = zoneSpecificNCs.get(last)) !== null && _a2 !== void 0 ? _a2 : [];
    return zones.includes((_b = get("lastAdventure")) !== null && _b !== void 0 ? _b : $location.none);
  } else {
    var environment = environmentSpecificNCs.get(last);
    return environment === ((_c = get("lastAdventure")) === null || _c === void 0 ? void 0 : _c.environment) ? !0 : wanderingNCs.has(last);
  }
}

// node_modules/grimoire-kolmafia/dist/route.js
init_kolmafia_polyfill();
function ownKeys7(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread7(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys7(Object(source), !0).forEach(function(key) {
      _defineProperty12(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys7(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty12(obj, key, value) {
  return key = _toPropertyKey16(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey16(arg) {
  var key = _toPrimitive16(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive16(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _createForOfIteratorHelper10(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray18(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e) {
        throw _e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e2) {
    didErr = !0, err = _e2;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray18(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray18(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray18(o, minLen);
  }
}
function _arrayLikeToArray18(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function getTasks(quests) {
  var implicitAfter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, verifyTaskDependencies = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, _a2, result = [], _iterator = _createForOfIteratorHelper10(quests), _step;
  try {
    var _loop = function() {
      var quest = _step.value, questCompleted = quest.completed, questReady = quest.ready, _iterator2 = _createForOfIteratorHelper10(quest.tasks), _step2;
      try {
        var _loop22 = function() {
          var task = _step2.value, renamedTask = _objectSpread7({}, task);
          if (renamedTask.name = "".concat(quest.name, "/").concat(task.name), renamedTask.after = (_a2 = task.after) === null || _a2 === void 0 ? void 0 : _a2.map(function(after) {
            return after.includes("/") ? after : "".concat(quest.name, "/").concat(after);
          }), implicitAfter && task.after === void 0 && result.length > 0 && (renamedTask.after = [result[result.length - 1].name]), questCompleted !== void 0) {
            var taskCompleted = task.completed;
            renamedTask.completed = function() {
              return questCompleted() || taskCompleted();
            };
          }
          var taskReady = renamedTask.ready;
          questReady !== void 0 && taskReady !== void 0 ? renamedTask.ready = function() {
            return questReady() && taskReady();
          } : questReady !== void 0 && (renamedTask.ready = function() {
            return questReady();
          }), result.push(renamedTask);
        };
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; )
          _loop22();
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done; )
      _loop();
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return verifyTaskDependencies && verifyDependencies(result), result;
}
function verifyDependencies(tasks) {
  var _a2, names = /* @__PURE__ */ new Set(), _iterator3 = _createForOfIteratorHelper10(tasks), _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
      var task = _step3.value;
      names.add(task.name);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  var _iterator4 = _createForOfIteratorHelper10(tasks), _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
      var _task = _step4.value, _iterator5 = _createForOfIteratorHelper10((_a2 = _task.after) !== null && _a2 !== void 0 ? _a2 : []), _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
          var after = _step5.value;
          if (!names.has(after))
            throw "Unknown task dependency ".concat(after, " of ").concat(_task.name);
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

// node_modules/grimoire-kolmafia/dist/task.js
init_kolmafia_polyfill();

// node_modules/grimoire-kolmafia/dist/limit.js
init_kolmafia_polyfill();

// src/combat.ts
var import_kolmafia33 = require("kolmafia");
var _templateObject111, _templateObject239, _templateObject330, _templateObject427, _templateObject524, _templateObject620, _templateObject720, _templateObject816, _templateObject912, _templateObject1010, _templateObject119, _templateObject1210, _templateObject1310, _templateObject1410, _templateObject159, _templateObject169, _templateObject179, _templateObject189, _templateObject198;
function _slicedToArray14(arr, i) {
  return _arrayWithHoles14(arr) || _iterableToArrayLimit14(arr, i) || _unsupportedIterableToArray19(arr, i) || _nonIterableRest14();
}
function _nonIterableRest14() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit14(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles14(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _createForOfIteratorHelper11(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray19(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray19(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray19(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray19(o, minLen);
  }
}
function _arrayLikeToArray19(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral29(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _defineProperties14(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey17(descriptor.key), descriptor);
  }
}
function _createClass14(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties14(Constructor.prototype, protoProps), staticProps && _defineProperties14(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _toPropertyKey17(arg) {
  var key = _toPrimitive17(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive17(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _classCallCheck14(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _inherits7(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf7(subClass, superClass);
}
function _setPrototypeOf7(o, p) {
  return _setPrototypeOf7 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf7(o, p);
}
function _createSuper6(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct6();
  return function() {
    var Super = _getPrototypeOf6(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf6(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn6(this, result);
  };
}
function _possibleConstructorReturn6(self2, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized6(self2);
}
function _assertThisInitialized6(self2) {
  if (self2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self2;
}
function _isNativeReflectConstruct6() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _getPrototypeOf6(o) {
  return _getPrototypeOf6 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf6(o);
}
var CSStrategy = /* @__PURE__ */ function(_CombatStrategy) {
  _inherits7(CSStrategy2, _CombatStrategy);
  var _super = _createSuper6(CSStrategy2);
  function CSStrategy2() {
    var _this, macro = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function() {
      return Macro2.defaultKill();
    }, _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, fallthrough = _ref.fallthrough, fightHolidayWanderer = _ref.fightHolidayWanderer;
    return _classCallCheck14(this, CSStrategy2), _this = _super.call(this), _this.macro(fightHolidayWanderer ? macro : Macro2.skill($skill(_templateObject111 || (_templateObject111 = _taggedTemplateLiteral29(["Feel Hatred"])))), getTodaysHolidayWanderers()).autoattack(fightHolidayWanderer ? macro : Macro2.skill($skill(_templateObject239 || (_templateObject239 = _taggedTemplateLiteral29(["Feel Hatred"])))), getTodaysHolidayWanderers()).autoattack(macro).macro(fallthrough != null ? fallthrough : macro), _this;
  }
  return _createClass14(CSStrategy2);
}(CombatStrategy), Macro2 = /* @__PURE__ */ function(_StrictMacro) {
  _inherits7(Macro3, _StrictMacro);
  var _super2 = _createSuper6(Macro3);
  function Macro3() {
    return _classCallCheck14(this, Macro3), _super2.apply(this, arguments);
  }
  return _createClass14(Macro3, [{
    key: "tryBowl",
    value: function() {
      return this.ifNot($item(_templateObject330 || (_templateObject330 = _taggedTemplateLiteral29(["cosmic bowling ball"]))), Macro3.item($item(_templateObject427 || (_templateObject427 = _taggedTemplateLiteral29(["Time-Spinner"]))))).if_($item(_templateObject524 || (_templateObject524 = _taggedTemplateLiteral29(["cosmic bowling ball"]))), Macro3.item([$item(_templateObject620 || (_templateObject620 = _taggedTemplateLiteral29(["Time-Spinner"]))), $item(_templateObject720 || (_templateObject720 = _taggedTemplateLiteral29(["cosmic bowling ball"])))]));
    }
  }, {
    key: "delevel",
    value: function() {
      var hard = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      return this.trySkill($skill(_templateObject816 || (_templateObject816 = _taggedTemplateLiteral29(["Curse of Weaksauce"])))).trySkill($skill(_templateObject912 || (_templateObject912 = _taggedTemplateLiteral29(["Micrometeorite"])))).externalIf(hard, Macro3.tryBowl(), Macro3.item($item(_templateObject1010 || (_templateObject1010 = _taggedTemplateLiteral29(["Time-Spinner"]))))).trySkill($skill(_templateObject119 || (_templateObject119 = _taggedTemplateLiteral29(["Summon Love Gnats"]))));
    }
  }, {
    key: "candyblast",
    value: function() {
      return this.externalIf(have($skill(_templateObject1210 || (_templateObject1210 = _taggedTemplateLiteral29(["Candyblast"])))), Macro3.while_('!match "Hey, some of it is even intact afterwards!"', Macro3.trySkill($skill(_templateObject1310 || (_templateObject1310 = _taggedTemplateLiteral29(["Candyblast"]))))));
    }
  }, {
    key: "easyFight",
    value: function() {
      return this.trySkill($skill(_templateObject1410 || (_templateObject1410 = _taggedTemplateLiteral29(["Extract"])))).trySkill($skill(_templateObject159 || (_templateObject159 = _taggedTemplateLiteral29(["Sing Along"]))));
    }
  }, {
    key: "defaultKill",
    value: function() {
      return this.delevel().easyFight().externalIf((0, import_kolmafia33.myClass)() === $class(_templateObject169 || (_templateObject169 = _taggedTemplateLiteral29(["Sauceror"]))), Macro3.skill($skill(_templateObject179 || (_templateObject179 = _taggedTemplateLiteral29(["Saucegeyser"])))).repeat(), Macro3.attack().repeat());
    }
  }, {
    key: "throwLoveSongs",
    value: function() {
      var LOVE_SONG_PRIORITY = byStat({
        Moxie: $items(_templateObject189 || (_templateObject189 = _taggedTemplateLiteral29(["love song of naughty innuendo, love song of vague ambiguity, love song of smoldering passion, love song of disturbing obsession"]))),
        Muscle: $items(_templateObject198 || (_templateObject198 = _taggedTemplateLiteral29(["love song of vague ambiguity, love song of smoldering passion, love song of naughty innuendo, love song of disturbing obsession"]))),
        Mysticality: []
      }).filter(function(i) {
        return have(i);
      }), _iterator = _createForOfIteratorHelper11(LOVE_SONG_PRIORITY.entries()), _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _step$value = _slicedToArray14(_step.value, 2), index = _step$value[0], song2 = _step$value[1];
          this.while_([song2, song2], Macro3.item([song2, song2]));
          var nextSong = LOVE_SONG_PRIORITY[index + 1];
          nextSong && Macro3.tryItem([song2, nextSong]);
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
    value: function() {
      return new Macro3().tryBowl();
    }
  }, {
    key: "delevel",
    value: function() {
      var hard = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
      return new Macro3().delevel(hard);
    }
  }, {
    key: "candyblast",
    value: function() {
      return new Macro3().candyblast();
    }
  }, {
    key: "easyFight",
    value: function() {
      return new Macro3().easyFight();
    }
  }, {
    key: "defaultKill",
    value: function() {
      return new Macro3().defaultKill();
    }
  }, {
    key: "throwLoveSongs",
    value: function() {
      return new Macro3().throwLoveSongs();
    }
  }]), Macro3;
}(StrictMacro);

// src/commons.ts
init_kolmafia_polyfill();

// src/lib.ts
init_kolmafia_polyfill();
var import_kolmafia34 = require("kolmafia");
var _templateObject120, _templateObject240, _templateObject331, _templateObject428, _templateObject525, _templateObject621, _templateObject721, _templateObject817, _templateObject913, _templateObject1011, _templateObject1110, _templateObject1211, _templateObject1311, _templateObject1411, _templateObject1510, _templateObject1610, _templateObject1710, _templateObject1810, _templateObject199, _templateObject208, _templateObject2113, _templateObject2212, _templateObject2310, _templateObject247, _templateObject257, _templateObject267, _templateObject277, _templateObject286, _templateObject296, _templateObject306, _templateObject3112, _templateObject3210, _templateObject335, _templateObject345, _templateObject355, _templateObject365, _templateObject375, _templateObject384, _templateObject394, _templateObject404, _templateObject4111, _templateObject429, _templateObject434, _templateObject444, _templateObject453, _templateObject463, _templateObject473, _templateObject483, _templateObject494, _templateObject504, _templateObject5111, _templateObject526, _templateObject533, _templateObject543, _templateObject553, _templateObject563, _templateObject573, _templateObject583, _templateObject593, _templateObject603, _templateObject6111, _templateObject623, _templateObject633, _templateObject643, _templateObject653, _templateObject663, _templateObject673, _templateObject683, _templateObject693, _templateObject703, _templateObject7110, _templateObject723, _templateObject733;
function _slicedToArray15(arr, i) {
  return _arrayWithHoles15(arr) || _iterableToArrayLimit15(arr, i) || _unsupportedIterableToArray20(arr, i) || _nonIterableRest15();
}
function _nonIterableRest15() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit15(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles15(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _createForOfIteratorHelper12(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray20(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray20(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray20(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray20(o, minLen);
  }
}
function _arrayLikeToArray20(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral30(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var SYNTH_PAIRS = byStat({
  Mysticality: [[$item(_templateObject120 || (_templateObject120 = _taggedTemplateLiteral30(["Crimbo fudge"]))), $item(_templateObject240 || (_templateObject240 = _taggedTemplateLiteral30(["Crimbo fudge"])))], [$item(_templateObject331 || (_templateObject331 = _taggedTemplateLiteral30(["Crimbo fudge"]))), $item(_templateObject428 || (_templateObject428 = _taggedTemplateLiteral30(["bag of many confections"])))], [$item(_templateObject525 || (_templateObject525 = _taggedTemplateLiteral30(["Crimbo peppermint bark"]))), $item(_templateObject621 || (_templateObject621 = _taggedTemplateLiteral30(["Crimbo candied pecan"])))], [$item(_templateObject721 || (_templateObject721 = _taggedTemplateLiteral30(["Crimbo peppermint bark"]))), $item(_templateObject817 || (_templateObject817 = _taggedTemplateLiteral30(["peppermint sprout"])))], [$item(_templateObject913 || (_templateObject913 = _taggedTemplateLiteral30(["Crimbo candied pecan"]))), $item(_templateObject1011 || (_templateObject1011 = _taggedTemplateLiteral30(["peppermint crook"])))]],
  Muscle: [[$item(_templateObject1110 || (_templateObject1110 = _taggedTemplateLiteral30(["Crimbo fudge"]))), $item(_templateObject1211 || (_templateObject1211 = _taggedTemplateLiteral30(["Crimbo peppermint bark"])))], [$item(_templateObject1311 || (_templateObject1311 = _taggedTemplateLiteral30(["bag of many confections"]))), $item(_templateObject1411 || (_templateObject1411 = _taggedTemplateLiteral30(["Crimbo peppermint bark"])))], [$item(_templateObject1510 || (_templateObject1510 = _taggedTemplateLiteral30(["Crimbo candied pecan"]))), $item(_templateObject1610 || (_templateObject1610 = _taggedTemplateLiteral30(["peppermint patty"])))], [$item(_templateObject1710 || (_templateObject1710 = _taggedTemplateLiteral30(["peppermint sprout"]))), $item(_templateObject1810 || (_templateObject1810 = _taggedTemplateLiteral30(["peppermint patty"])))]],
  Moxie: [[$item(_templateObject199 || (_templateObject199 = _taggedTemplateLiteral30(["Crimbo fudge"]))), $item(_templateObject208 || (_templateObject208 = _taggedTemplateLiteral30(["Crimbo candied pecan"])))], [$item(_templateObject2113 || (_templateObject2113 = _taggedTemplateLiteral30(["Crimbo fudge"]))), $item(_templateObject2212 || (_templateObject2212 = _taggedTemplateLiteral30(["peppermint sprout"])))], [$item(_templateObject2310 || (_templateObject2310 = _taggedTemplateLiteral30(["bag of many confections"]))), $item(_templateObject247 || (_templateObject247 = _taggedTemplateLiteral30(["Crimbo candied pecan"])))], [$item(_templateObject257 || (_templateObject257 = _taggedTemplateLiteral30(["bag of many confections"]))), $item(_templateObject267 || (_templateObject267 = _taggedTemplateLiteral30(["peppermint sprout"])))], [$item(_templateObject277 || (_templateObject277 = _taggedTemplateLiteral30(["Crimbo peppermint bark"]))), $item(_templateObject286 || (_templateObject286 = _taggedTemplateLiteral30(["peppermint twist"])))]]
});
function synthExp() {
  (0, import_kolmafia34.getCampground)()["Peppermint Pip Packet"] && (0, import_kolmafia34.visitUrl)("campground.php?action=garden"), get("_candySummons") || (0, import_kolmafia34.useSkill)(1, $skill(_templateObject296 || (_templateObject296 = _taggedTemplateLiteral30(["Summon Crimbo Candy"]))));
  var _iterator = _createForOfIteratorHelper12(SYNTH_PAIRS), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _step$value = _slicedToArray15(_step.value, 2), candy1 = _step$value[0], candy2 = _step$value[1], enough = candy1 === candy2 ? (0, import_kolmafia34.itemAmount)(candy1) >= 2 : have(candy1) && (0, import_kolmafia34.retrieveItem)(candy2);
      if (enough && (0, import_kolmafia34.sweetSynthesis)(candy1, candy2))
        return;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  throw new Error("Failed to synthesize!");
}
var SYNTH_EFFECT = byStat({
  Mysticality: $effect(_templateObject306 || (_templateObject306 = _taggedTemplateLiteral30(["Synthesis: Learning"]))),
  Moxie: $effect(_templateObject3112 || (_templateObject3112 = _taggedTemplateLiteral30(["Synthesis: Style"]))),
  Muscle: $effect(_templateObject3210 || (_templateObject3210 = _taggedTemplateLiteral30(["Synthesis: Movement"])))
});
function tryUse(quantity, it) {
  return (0, import_kolmafia34.availableAmount)(it) > 0 ? (0, import_kolmafia34.use)(quantity, it) : !1;
}
function ensureMp(mp) {
  if (!((0, import_kolmafia34.myMp)() > mp)) {
    if (mp > (0, import_kolmafia34.myMaxmp)())
      throw "Insufficient maximum mp!";
    for (; have($item(_templateObject335 || (_templateObject335 = _taggedTemplateLiteral30(["magical sausage"])))) || have($item(_templateObject345 || (_templateObject345 = _taggedTemplateLiteral30(["magical sausage casing"])))) && (0, import_kolmafia34.myMp)() < mp && get("_sausagesEaten") < 23; )
      (0, import_kolmafia34.retrieveItem)($item(_templateObject355 || (_templateObject355 = _taggedTemplateLiteral30(["magical sausage"])))), (0, import_kolmafia34.eat)($item(_templateObject365 || (_templateObject365 = _taggedTemplateLiteral30(["magical sausage"]))));
    for (; have($item(_templateObject375 || (_templateObject375 = _taggedTemplateLiteral30(["psychokinetic energy blob"])))) && (0, import_kolmafia34.myMp)() < mp; )
      (0, import_kolmafia34.use)($item(_templateObject384 || (_templateObject384 = _taggedTemplateLiteral30(["psychokinetic energy blob"]))));
    (0, import_kolmafia34.myMp)() < mp && (0, import_kolmafia34.restoreMp)(mp);
  }
}
function canCastLibrams() {
  var summonNumber = 1 + get("libramSummons"), cost = 1 + summonNumber * (summonNumber - 1) / 2;
  return (0, import_kolmafia34.myMp)() >= cost;
}
function totalDuration(item6) {
  var effect = (0, import_kolmafia34.effectModifier)(item6, "Effect");
  return (0, import_kolmafia34.haveEffect)(effect) + get2("Effect Duration", item6) * (0, import_kolmafia34.availableAmount)(item6);
}
var availableFights = function() {
  return clamp(5 - Witchess_exports.fightsDone(), 0, 5) + clamp((0, import_kolmafia34.availableAmount)($item(_templateObject394 || (_templateObject394 = _taggedTemplateLiteral30(["BRICKO eye brick"])))), 0, 10 - get("_brickoFights"));
}, potentialFights = function() {
  return clamp(5 - Witchess_exports.fightsDone(), 0, 5) + clamp((0, import_kolmafia34.availableAmount)($item(_templateObject404 || (_templateObject404 = _taggedTemplateLiteral30(["BRICKO eye brick"])))), 0, 10 - get("_brickoFights")) + clamp(3 - get("_brickoEyeSummons"), 0, 10 - get("_brickoFights"));
};
function castPriciestLibram() {
  var choice = bestLibramToCast();
  return choice ? (0, import_kolmafia34.useSkill)(1, choice) : !1;
}
function burnLibrams() {
  var testsDone = get("csServicesPerformed").split(",");
  if (!!$skills(_templateObject4111 || (_templateObject4111 = _taggedTemplateLiteral30(["Summon BRICKOs, Summon Taffy, Summon Love Song, Summon Candy Heart"]))).some(function(skill) {
    return have(skill);
  }))
    for (; canCastLibrams(); )
      if (testsDone.includes("Breed More Collies")) {
        if (!castPriciestLibram())
          return;
      } else {
        var libramPossibilities = possibleLibramSummons(), decisionMap = /* @__PURE__ */ new Map();
        if (have($skill(_templateObject429 || (_templateObject429 = _taggedTemplateLiteral30(["Summon Candy Heart"])))) && totalDuration($item(_templateObject434 || (_templateObject434 = _taggedTemplateLiteral30(["green candy heart"])))) <= 0) {
          var _libramPossibilities$, _libramPossibilities$2, probability = (_libramPossibilities$ = (_libramPossibilities$2 = libramPossibilities.get($skill(_templateObject444 || (_templateObject444 = _taggedTemplateLiteral30(["Summon Candy Heart"]))))) === null || _libramPossibilities$2 === void 0 ? void 0 : _libramPossibilities$2.get($item(_templateObject453 || (_templateObject453 = _taggedTemplateLiteral30(["green candy heart"]))))) !== null && _libramPossibilities$ !== void 0 ? _libramPossibilities$ : 0;
          decisionMap.set($skill(_templateObject463 || (_templateObject463 = _taggedTemplateLiteral30(["Summon Candy Heart"]))), 3 * probability);
        }
        if (have($skill(_templateObject473 || (_templateObject473 = _taggedTemplateLiteral30(["Summon Taffy"])))) && totalDuration($item(_templateObject483 || (_templateObject483 = _taggedTemplateLiteral30(["pulled blue taffy"])))) < 50) {
          var _libramPossibilities$3, _libramPossibilities$4, _probability = (_libramPossibilities$3 = (_libramPossibilities$4 = libramPossibilities.get($skill(_templateObject494 || (_templateObject494 = _taggedTemplateLiteral30(["Summon Taffy"]))))) === null || _libramPossibilities$4 === void 0 ? void 0 : _libramPossibilities$4.get($item(_templateObject504 || (_templateObject504 = _taggedTemplateLiteral30(["pulled blue taffy"]))))) !== null && _libramPossibilities$3 !== void 0 ? _libramPossibilities$3 : 0;
          decisionMap.set($skill(_templateObject5111 || (_templateObject5111 = _taggedTemplateLiteral30(["Summon Taffy"]))), 1 * _probability);
        }
        if (have($skill(_templateObject526 || (_templateObject526 = _taggedTemplateLiteral30(["Summon Love Song"])))) && totalDuration($item(_templateObject533 || (_templateObject533 = _taggedTemplateLiteral30(["love song of icy revenge"])))) < 20) {
          var _libramPossibilities$5, _libramPossibilities$6, _probability2 = (_libramPossibilities$5 = (_libramPossibilities$6 = libramPossibilities.get($skill(_templateObject543 || (_templateObject543 = _taggedTemplateLiteral30(["Summon Love Song"]))))) === null || _libramPossibilities$6 === void 0 ? void 0 : _libramPossibilities$6.get($item(_templateObject553 || (_templateObject553 = _taggedTemplateLiteral30(["love song of icy revenge"]))))) !== null && _libramPossibilities$5 !== void 0 ? _libramPossibilities$5 : 0, currentWeightValue = clamp(Math.ceil(totalDuration($item(_templateObject563 || (_templateObject563 = _taggedTemplateLiteral30(["love song of icy revenge"])))) / 2), 0, 10), newWeightValue = clamp(Math.ceil((totalDuration($item(_templateObject573 || (_templateObject573 = _taggedTemplateLiteral30(["love song of icy revenge"])))) + 5) / 2), 0, 10);
          decisionMap.set($skill(_templateObject583 || (_templateObject583 = _taggedTemplateLiteral30(["Summon Love Song"]))), _probability2 * (newWeightValue - currentWeightValue));
        }
        if (have($skill(_templateObject593 || (_templateObject593 = _taggedTemplateLiteral30(["Summon BRICKOs"])))) && get("_brickoEyeSummons") < 3 && testsDone.includes("Donate Blood")) {
          var _libramPossibilities$7, _libramPossibilities$8, _probability3 = (_libramPossibilities$7 = (_libramPossibilities$8 = libramPossibilities.get($skill(_templateObject603 || (_templateObject603 = _taggedTemplateLiteral30(["Summon BRICKOs"]))))) === null || _libramPossibilities$8 === void 0 ? void 0 : _libramPossibilities$8.get($item(_templateObject6111 || (_templateObject6111 = _taggedTemplateLiteral30(["BRICKO eye brick"]))))) !== null && _libramPossibilities$7 !== void 0 ? _libramPossibilities$7 : 0;
          if (have($familiar(_templateObject623 || (_templateObject623 = _taggedTemplateLiteral30(["Shorter-Order Cook"])))) && totalDuration($item(_templateObject633 || (_templateObject633 = _taggedTemplateLiteral30(["short stack of pancakes"])))) === 0 && availableFights() < 11 - get("_shortOrderCookCharge") && potentialFights() >= 11 - get("_shortOrderCookCharge") && decisionMap.set($skill(_templateObject643 || (_templateObject643 = _taggedTemplateLiteral30(["Summon BRICKOs"]))), _probability3 * 11 / (11 - get("_shortOrderCookCharge") - availableFights())), have($familiar(_templateObject653 || (_templateObject653 = _taggedTemplateLiteral30(["Garbage Fire"])))) && !have($item(_templateObject663 || (_templateObject663 = _taggedTemplateLiteral30(["burning paper crane"])))) && !have($item(_templateObject673 || (_templateObject673 = _taggedTemplateLiteral30(["burning newspaper"])))) && availableFights() < 30 - get("garbageFireProgress") && potentialFights() >= 30 - get("garbageFireProgress")) {
            var _decisionMap$get, value = 5 / (30 - get("garbageFireProgress") - availableFights()) * _probability3, otherBrickoValue = (_decisionMap$get = decisionMap.get($skill(_templateObject683 || (_templateObject683 = _taggedTemplateLiteral30(["Summon BRICKOs"]))))) !== null && _decisionMap$get !== void 0 ? _decisionMap$get : 0;
            value > otherBrickoValue && decisionMap.set($skill(_templateObject693 || (_templateObject693 = _taggedTemplateLiteral30(["Summon BRICKOs"]))), value);
          }
        }
        var bestLibrams = Array.from(decisionMap).sort(function(a, b) {
          return b[1] - a[1];
        });
        if (bestLibrams.length === 0) {
          if (!castPriciestLibram())
            return;
        } else {
          var decision = bestLibrams[0][0];
          (0, import_kolmafia34.useSkill)(1, decision);
        }
      }
}
function unequip(item6) {
  for (; (0, import_kolmafia34.equippedAmount)(item6) > 0; ) {
    var slot = import_kolmafia34.Slot.all().find(function(equipmentSlot) {
      return (0, import_kolmafia34.equippedItem)(equipmentSlot) === item6;
    });
    if (!slot)
      return;
    (0, import_kolmafia34.equip)(slot, $item(_templateObject703 || (_templateObject703 = _taggedTemplateLiteral30(["none"]))));
  }
}
function favouriteBirdHas(modifier) {
  var positive = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, sign = positive ? "+" : "-";
  return get("yourFavoriteBirdMods").split(",").some(function(mod) {
    return mod.includes("".concat(modifier, ": ").concat(sign));
  });
}
function currentBirdHas(modifier) {
  var positive = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, sign = positive ? "+" : "-";
  return get("_birdOfTheDayMods").split(",").some(function(mod) {
    return mod.includes("".concat(modifier, ": ").concat(sign));
  });
}
var guildQuestZone = byStat({
  Mysticality: $location(_templateObject7110 || (_templateObject7110 = _taggedTemplateLiteral30(["The Haunted Pantry"]))),
  Moxie: $location(_templateObject723 || (_templateObject723 = _taggedTemplateLiteral30(["The Sleazy Back Alley"]))),
  Muscle: $location(_templateObject733 || (_templateObject733 = _taggedTemplateLiteral30(["The Outskirts of Cobb's Knob"])))
}), LEPRECONDO_CONFIG = byStat({
  Moxie: ["internet-connected laptop", "cupcake treadmill", "four-poster bed", "fully-stocked wet bar"],
  Mysticality: ["cupcake treadmill", "gigantic chess set", "couch and flatscreen", "fully-stocked wet bar"],
  Muscle: ["four-poster bed", "padded weight bench", "UltraDance karaoke machine", "fully-stocked wet bar"]
}), peridotChoice = function(monster) {
  return {
    1557: "1&bandersnatch=".concat(monster.id)
  };
}, availableEmbers = function() {
  return Math.floor(get("availableSeptEmbers") / 2);
};

// src/outfit.ts
init_kolmafia_polyfill();
var import_kolmafia35 = require("kolmafia");
var _templateObject121, _templateObject241, _templateObject336, _templateObject430, _templateObject527, _templateObject624, _templateObject724, _templateObject818, _templateObject914, _templateObject1012, _templateObject1111, _templateObject1212, _templateObject1312, _templateObject1412, _templateObject1511, _templateObject1611, _templateObject1711, _templateObject1811, _templateObject1910, _templateObject209, _templateObject2114, _templateObject2213, _templateObject2311, _templateObject248, _templateObject258, _templateObject268, _templateObject278, _templateObject287, _templateObject297, _templateObject307, _templateObject3113, _templateObject3211, _templateObject337, _templateObject346, _templateObject356, _templateObject366, _templateObject376, _templateObject385, _templateObject395, _templateObject405, _templateObject4112, _templateObject4210, _templateObject435, _templateObject445, _templateObject454, _templateObject464, _templateObject474, _templateObject484, _templateObject495, _templateObject505;
function _taggedTemplateLiteral31(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function ownKeys8(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread8(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys8(Object(source), !0).forEach(function(key) {
      _defineProperty13(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys8(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty13(obj, key, value) {
  return key = _toPropertyKey18(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey18(arg) {
  var key = _toPrimitive18(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive18(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var UNCHANGING_OUTFIT = _objectSpread8(_objectSpread8({
  shirt: $items(_templateObject121 || (_templateObject121 = _taggedTemplateLiteral31(["LOV Eardigan, Jurassic Parka, fresh coat of paint"]))),
  offhand: $item(_templateObject241 || (_templateObject241 = _taggedTemplateLiteral31(["unbreakable umbrella"])))
}, byStat({
  Mysticality: {
    acc1: $items(_templateObject336 || (_templateObject336 = _taggedTemplateLiteral31(["meteorite necklace, your cowboy boots"]))),
    acc2: $item(_templateObject430 || (_templateObject430 = _taggedTemplateLiteral31(["codpiece"]))),
    acc3: $items(_templateObject527 || (_templateObject527 = _taggedTemplateLiteral31(["battle broom, Retrospecs"])))
  },
  Muscle: {
    acc1: $item(_templateObject624 || (_templateObject624 = _taggedTemplateLiteral31(["your cowboy boots"]))),
    acc2: $items(_templateObject724 || (_templateObject724 = _taggedTemplateLiteral31(["Brutal brogues, Powerful Glove"]))),
    acc3: $items(_templateObject818 || (_templateObject818 = _taggedTemplateLiteral31(["Retrospecs"])))
  },
  Moxie: {
    acc1: $item(_templateObject914 || (_templateObject914 = _taggedTemplateLiteral31(["your cowboy boots"]))),
    acc2: $items(_templateObject1012 || (_templateObject1012 = _taggedTemplateLiteral31(["LOV Earrings, Beach Comb"]))),
    acc3: $item(_templateObject1111 || (_templateObject1111 = _taggedTemplateLiteral31(["Cincho de Mayo"])))
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
}), DEFAULT_UNIFORM = function() {
  return _objectSpread8(_objectSpread8({}, UNCHANGING_OUTFIT), {}, {
    hat: DaylightShavings_exports.buffAvailable() ? $item(_templateObject1212 || (_templateObject1212 = _taggedTemplateLiteral31(["Daylight Shavings Helmet"]))) : byStat({
      Moxie: $items(_templateObject1312 || (_templateObject1312 = _taggedTemplateLiteral31(["very pointy crown, Apriling band helmet"]))),
      Mysticality: $items(_templateObject1412 || (_templateObject1412 = _taggedTemplateLiteral31(["astral chapeau, Apriling band helmet"]))),
      Muscle: $item(_templateObject1511 || (_templateObject1511 = _taggedTemplateLiteral31(["Apriling band helmet"])))
    }),
    pants: get("sweat") < 100 ? $item(_templateObject1611 || (_templateObject1611 = _taggedTemplateLiteral31(["designer sweatpants"]))) : $items(_templateObject1711 || (_templateObject1711 = _taggedTemplateLiteral31(["astral trousers, astral shorts, designer sweatpants"]))),
    weapon: get("_juneCleaverFightsLeft") > 0 && get("_juneCleaverEncounters") < 2 ? $item(_templateObject1811 || (_templateObject1811 = _taggedTemplateLiteral31(["June cleaver"]))) : byStat({
      Muscle: $items(_templateObject1910 || (_templateObject1910 = _taggedTemplateLiteral31(["dented scepter, Fourth of May Cosplay Saber"]))),
      default: $item(_templateObject209 || (_templateObject209 = _taggedTemplateLiteral31(["Fourth of May Cosplay Saber"])))
    }),
    back: get("questPAGhost") === "unstarted" && get("nextParanormalActivity") <= (0, import_kolmafia35.totalTurnsPlayed)() ? $item(_templateObject2114 || (_templateObject2114 = _taggedTemplateLiteral31(["protonic accelerator pack"]))) : $items(_templateObject2213 || (_templateObject2213 = _taggedTemplateLiteral31(["LOV Epaulettes, unwrapped knock-off retro superhero cape"])))
  });
}, FAMILIAR_PICKS = [{
  familiar: $familiar(_templateObject2311 || (_templateObject2311 = _taggedTemplateLiteral31(["Stocking Mimic"]))),
  famequip: $item.none,
  condition: function() {
    return !get("_bagOfCandy");
  }
}, {
  familiar: $familiar(_templateObject248 || (_templateObject248 = _taggedTemplateLiteral31(["Melodramedary"]))),
  famequip: function() {
    return $items(_templateObject258 || (_templateObject258 = _taggedTemplateLiteral31(["dromedary drinking helmet"]))).find(function(i) {
      return have(i);
    });
  },
  condition: function() {
    return get("camelSpit") < 100 && !have($effect(_templateObject268 || (_templateObject268 = _taggedTemplateLiteral31(["Spit Upon"])))) && (0, import_kolmafia35.inHardcore)();
  }
}, {
  familiar: $familiar(_templateObject278 || (_templateObject278 = _taggedTemplateLiteral31(["Shorter-Order Cook"]))),
  condition: function() {
    return ![$effect(_templateObject287 || (_templateObject287 = _taggedTemplateLiteral31(["Shortly Stacked"]))), $item(_templateObject297 || (_templateObject297 = _taggedTemplateLiteral31(["short stack of pancakes"])))].some(function(x) {
      return have(x);
    }) && !CommunityService.FamiliarWeight.isDone();
  }
}, {
  familiar: $familiar(_templateObject307 || (_templateObject307 = _taggedTemplateLiteral31(["Garbage Fire"]))),
  condition: function() {
    return $familiar(_templateObject3113 || (_templateObject3113 = _taggedTemplateLiteral31(["Garbage Fire"]))).dropsToday < 1;
  }
}, {
  familiar: $familiar(_templateObject3211 || (_templateObject3211 = _taggedTemplateLiteral31(["Cornbeefadon"]))),
  condition: function() {
    if (ToyCupidBow_exports.doneToday($familiar(_templateObject337 || (_templateObject337 = _taggedTemplateLiteral31(["Cornbeefadon"])))))
      return !1;
    var currentCupidFamiliar = ToyCupidBow_exports.currentFamiliar();
    return !currentCupidFamiliar || currentCupidFamiliar === $familiar(_templateObject346 || (_templateObject346 = _taggedTemplateLiteral31(["Cornbeefadon"]))) ? !0 : ToyCupidBow_exports.doneToday(currentCupidFamiliar);
  }
}];
function findFirstFamiliar(fams) {
  return fams.find(function(f) {
    return have(f);
  });
}
function chooseFamiliar(canAttack) {
  var _findFirstFamiliar, pick = FAMILIAR_PICKS.find(function(_ref) {
    var condition = _ref.condition, familiar2 = _ref.familiar;
    return condition() && have(familiar2) && (canAttack || !(familiar2.elementalDamage || familiar2.physicalDamage));
  });
  return pick ? pick.famequip ? {
    famequip: undelay(pick.famequip),
    familiar: pick.familiar
  } : ToyCupidBow_exports.doneToday($familiar(_templateObject356 || (_templateObject356 = _taggedTemplateLiteral31(["Shorter-Order Cook"])))) ? {
    familiar: pick.familiar,
    famequip: ToyCupidBow_exports.doneToday(pick.familiar) ? $item(_templateObject395 || (_templateObject395 = _taggedTemplateLiteral31(["tiny stillsuit"]))) : $item(_templateObject405 || (_templateObject405 = _taggedTemplateLiteral31(["toy Cupid bow"])))
  } : {
    familiar: pick.familiar,
    famequip: pick.familiar === $familiar(_templateObject366 || (_templateObject366 = _taggedTemplateLiteral31(["Shorter-Order Cook"]))) ? $item(_templateObject376 || (_templateObject376 = _taggedTemplateLiteral31(["toy Cupid bow"]))) : $item(_templateObject385 || (_templateObject385 = _taggedTemplateLiteral31(["tiny stillsuit"])))
  } : {
    famequip: $item(_templateObject4112 || (_templateObject4112 = _taggedTemplateLiteral31(["tiny stillsuit"]))),
    familiar: (_findFirstFamiliar = findFirstFamiliar($familiars(_templateObject4210 || (_templateObject4210 = _taggedTemplateLiteral31(["Puck Man, Ms. Puck Man"]))))) !== null && _findFirstFamiliar !== void 0 ? _findFirstFamiliar : $familiar(_templateObject435 || (_templateObject435 = _taggedTemplateLiteral31(["Blood-Faced Volleyball"])))
  };
}
var equipBluePlate = function() {
  return have($item(_templateObject445 || (_templateObject445 = _taggedTemplateLiteral31(["blue plate"])))) && (0, import_kolmafia35.familiarEquippedEquipment)($familiar(_templateObject454 || (_templateObject454 = _taggedTemplateLiteral31(["Shorter-Order Cook"])))) !== $item(_templateObject464 || (_templateObject464 = _taggedTemplateLiteral31(["blue plate"]))) && (0, import_kolmafia35.equip)($familiar(_templateObject474 || (_templateObject474 = _taggedTemplateLiteral31(["Shorter-Order Cook"]))), $item(_templateObject484 || (_templateObject484 = _taggedTemplateLiteral31(["blue plate"]))));
};
function uniform() {
  var _spec$familiar, _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref2$changes = _ref2.changes, changes = _ref2$changes === void 0 ? {} : _ref2$changes, _ref2$canAttack = _ref2.canAttack, canAttack = _ref2$canAttack === void 0 ? !0 : _ref2$canAttack;
  "familiar" in changes && !("famequip" in changes) && changes.familiar && (ToyCupidBow_exports.familiarsToday().includes(changes.familiar) ? changes.famequip = $item(_templateObject495 || (_templateObject495 = _taggedTemplateLiteral31(["tiny stillsuit"]))) : changes.famequip = $item(_templateObject505 || (_templateObject505 = _taggedTemplateLiteral31(["toy Cupid bow"]))));
  var spec = _objectSpread8(_objectSpread8(_objectSpread8({}, DEFAULT_UNIFORM()), chooseFamiliar(canAttack)), changes);
  return ((_spec$familiar = spec.familiar) === null || _spec$familiar === void 0 ? void 0 : _spec$familiar.experience) === 0 && (spec.beforeDress = [equipBluePlate]), spec;
}

// src/commons.ts
var import_kolmafia36 = require("kolmafia");
var _templateObject130, _templateObject249, _templateObject338, _templateObject431, _templateObject528, _templateObject625, _templateObject725, _templateObject819, _templateObject915, _templateObject1013, _templateObject1112, _templateObject1213, _templateObject1313, _templateObject1413, _templateObject1512, _templateObject1612, _templateObject1712, _templateObject1812, _templateObject1911, _templateObject2010, _templateObject2115, _templateObject2214, _templateObject2312, _templateObject2410, _templateObject259, _templateObject269, _templateObject279, _templateObject288, _templateObject298, _templateObject308, _templateObject3114, _templateObject3212, _templateObject339, _templateObject347, _templateObject357, _templateObject367, _templateObject377, _templateObject386, _templateObject396, _templateObject406, _templateObject4113, _templateObject4211, _templateObject436, _templateObject446, _templateObject455, _templateObject465, _templateObject475, _templateObject485, _templateObject496, _templateObject506, _templateObject5112;
function _slicedToArray16(arr, i) {
  return _arrayWithHoles16(arr) || _iterableToArrayLimit16(arr, i) || _unsupportedIterableToArray21(arr, i) || _nonIterableRest16();
}
function _nonIterableRest16() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit16(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles16(arr) {
  if (Array.isArray(arr))
    return arr;
}
function ownKeys9(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread9(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys9(Object(source), !0).forEach(function(key) {
      _defineProperty14(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys9(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _toConsumableArray10(arr) {
  return _arrayWithoutHoles10(arr) || _iterableToArray10(arr) || _unsupportedIterableToArray21(arr) || _nonIterableSpread10();
}
function _nonIterableSpread10() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray21(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray21(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray21(o, minLen);
  }
}
function _iterableToArray10(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles10(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray21(arr);
}
function _arrayLikeToArray21(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _defineProperty14(obj, key, value) {
  return key = _toPropertyKey19(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey19(arg) {
  var key = _toPrimitive19(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive19(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral32(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function beachTask(effect) {
  var num = 1 + BeachComb_exports.headBuffs.indexOf(effect);
  return {
    name: "Beach Head: ".concat(effect),
    completed: function() {
      return (0, import_kolmafia36.getProperty)("_beachHeadsUsed").split(",").includes(num.toFixed(0));
    },
    ready: function() {
      return get("_freeBeachWalksUsed") < 11 && get("beachHeadsUnlocked").split(",").includes(num.toFixed(0));
    },
    do: function() {
      return BeachComb_exports.tryHead(effect);
    }
  };
}
function innerElf() {
  return {
    name: "Inner Elf",
    completed: function() {
      return have($effect(_templateObject130 || (_templateObject130 = _taggedTemplateLiteral32(["Inner Elf"]))));
    },
    ready: function() {
      return (0, import_kolmafia36.myLevel)() >= 13 && !counter_exports.exists("portscan.edu");
    },
    do: function() {
      return Clan.with(get("phccs_elfClan", "Hobopolis Vacation Home"), function() {
        (0, import_kolmafia36.adv1)($location(_templateObject249 || (_templateObject249 = _taggedTemplateLiteral32(["The Slime Tube"]))), -1, "");
      });
    },
    outfit: function() {
      return uniform({
        changes: {
          shirt: $item(_templateObject338 || (_templateObject338 = _taggedTemplateLiteral32(["Jurassic Parka"]))),
          acc3: $item(_templateObject431 || (_templateObject431 = _taggedTemplateLiteral32(["Kremlin's Greatest Briefcase"]))),
          familiar: $familiar(_templateObject528 || (_templateObject528 = _taggedTemplateLiteral32(["Machine Elf"]))),
          modes: {
            parka: "pterodactyl"
          }
        }
      });
    },
    choices: _defineProperty14({}, 326, 1),
    combat: new CSStrategy(function() {
      return Macro2.trySkill($skill(_templateObject625 || (_templateObject625 = _taggedTemplateLiteral32(["KGB tranquilizer dart"])))).trySkill($skill(_templateObject725 || (_templateObject725 = _taggedTemplateLiteral32(["Snokebomb"]))));
    })
  };
}
function potionTask(item6) {
  var effect = (0, import_kolmafia36.effectModifier)(item6, "Effect");
  return {
    name: "".concat(effect),
    completed: function() {
      return have(effect);
    },
    ready: function() {
      return have(item6);
    },
    do: function() {
      return (0, import_kolmafia36.use)(item6);
    }
  };
}
function restore(effects) {
  return {
    name: "Restore",
    completed: function() {
      return effects.every(function(e) {
        return have(e);
      });
    },
    do: function() {
      !have($item(_templateObject819 || (_templateObject819 = _taggedTemplateLiteral32(["magical sausage"])))) && have($item(_templateObject915 || (_templateObject915 = _taggedTemplateLiteral32(["magical sausage casing"])))) && (0, import_kolmafia36.create)(1, $item(_templateObject1013 || (_templateObject1013 = _taggedTemplateLiteral32(["magical sausage"])))), have($item(_templateObject1112 || (_templateObject1112 = _taggedTemplateLiteral32(["magical sausage"])))) ? (0, import_kolmafia36.eat)(1, $item(_templateObject1213 || (_templateObject1213 = _taggedTemplateLiteral32(["magical sausage"])))) : have($item(_templateObject1313 || (_templateObject1313 = _taggedTemplateLiteral32(["psychokinetic energy blob"])))) ? (0, import_kolmafia36.use)(1, $item(_templateObject1413 || (_templateObject1413 = _taggedTemplateLiteral32(["psychokinetic energy blob"])))) : ((0, import_kolmafia36.buy)(1, $item(_templateObject1512 || (_templateObject1512 = _taggedTemplateLiteral32(["Doc Galaktik's Invigorating Tonic"])))), (0, import_kolmafia36.use)($item(_templateObject1612 || (_templateObject1612 = _taggedTemplateLiteral32(["Doc Galaktik's Invigorating Tonic"])))));
    }
  };
}
function skillTask(x) {
  var includeAprilShield = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  {
    var _ref = x instanceof import_kolmafia36.Skill ? {
      skill: x,
      effect: (0, import_kolmafia36.toEffect)(x)
    } : x instanceof import_kolmafia36.Effect ? {
      skill: (0, import_kolmafia36.toSkill)(x),
      effect: x
    } : x, skill = _ref.skill, effect = _ref.effect;
    return {
      name: skill.name,
      completed: function() {
        return have(effect);
      },
      ready: function() {
        return (0, import_kolmafia36.myMp)() >= (0, import_kolmafia36.mpCost)(skill) && (0, import_kolmafia36.myAdventures)() >= (0, import_kolmafia36.advCost)(skill);
      },
      do: function() {
        return (0, import_kolmafia36.useSkill)(skill);
      },
      outfit: includeAprilShield ? {
        offhand: $item(_templateObject1712 || (_templateObject1712 = _taggedTemplateLiteral32(["April Shower Thoughts shield"])))
      } : {
        avoid: $items(_templateObject1812 || (_templateObject1812 = _taggedTemplateLiteral32(["April Shower Thoughts shield"])))
      }
    };
  }
}
function restoreBuffTasks(buffs5) {
  var includeAprilShield = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return [].concat(_toConsumableArray10(buffs5.map(function(buff) {
    return skillTask(buff, includeAprilShield);
  })), [restore(buffs5)]);
}
function commonFamiliarWeightBuffs() {
  var buffs5 = $effects(_templateObject1911 || (_templateObject1911 = _taggedTemplateLiteral32(["Empathy, Leash of Linguini, Blood Bond"])));
  return [potionTask($item(_templateObject2010 || (_templateObject2010 = _taggedTemplateLiteral32(["green candy heart"]))))].concat(_toConsumableArray10(restoreBuffTasks(buffs5)), [skillTask({
    skill: $skill(_templateObject2115 || (_templateObject2115 = _taggedTemplateLiteral32(["Empathy of the Newt"]))),
    effect: $effect(_templateObject2214 || (_templateObject2214 = _taggedTemplateLiteral32(["Thoughtful Empathy"])))
  }, !0)]);
}
function songTask(song2, shrugSong) {
  var _ref2 = song2 instanceof import_kolmafia36.Effect ? {
    wantedSongSkill: (0, import_kolmafia36.toSkill)(song2),
    wantedSongEffect: song2
  } : {
    wantedSongSkill: song2,
    wantedSongEffect: (0, import_kolmafia36.toEffect)(song2)
  }, wantedSongSkill = _ref2.wantedSongSkill, wantedSongEffect = _ref2.wantedSongEffect, shrugSongEffect = shrugSong instanceof import_kolmafia36.Effect ? shrugSong : (0, import_kolmafia36.toEffect)(shrugSong);
  return {
    name: song2.name,
    completed: function() {
      return have(wantedSongEffect);
    },
    ready: function() {
      return (0, import_kolmafia36.myMp)() >= (0, import_kolmafia36.mpCost)(wantedSongSkill);
    },
    do: function() {
      have(shrugSongEffect) && (0, import_kolmafia36.cliExecute)("shrug ".concat(shrugSongEffect)), (0, import_kolmafia36.useSkill)(wantedSongSkill);
    }
  };
}
function asdonTask(style) {
  var effect = style instanceof import_kolmafia36.Effect ? style : AsdonMartin_exports.Driving[style];
  return {
    name: effect.name,
    completed: function() {
      return have(effect);
    },
    do: function() {
      (0, import_kolmafia36.getFuel)() < 37 && ((0, import_kolmafia36.buy)(1, $item(_templateObject2312 || (_templateObject2312 = _taggedTemplateLiteral32(["all-purpose flower"])))), (0, import_kolmafia36.use)(1, $item(_templateObject2410 || (_templateObject2410 = _taggedTemplateLiteral32(["all-purpose flower"])))), (0, import_kolmafia36.buy)((0, import_kolmafia36.availableAmount)($item(_templateObject259 || (_templateObject259 = _taggedTemplateLiteral32(["wad of dough"])))), $item(_templateObject269 || (_templateObject269 = _taggedTemplateLiteral32(["soda water"])))), (0, import_kolmafia36.create)((0, import_kolmafia36.availableAmount)($item(_templateObject279 || (_templateObject279 = _taggedTemplateLiteral32(["wad of dough"])))), $item(_templateObject288 || (_templateObject288 = _taggedTemplateLiteral32(["loaf of soda bread"])))), AsdonMartin_exports.insertFuel($item(_templateObject298 || (_templateObject298 = _taggedTemplateLiteral32(["loaf of soda bread"]))), (0, import_kolmafia36.availableAmount)($item(_templateObject308 || (_templateObject308 = _taggedTemplateLiteral32(["loaf of soda bread"])))))), AsdonMartin_exports.drive(effect);
    }
  };
}
var showers = get("_meteorShowerUses"), incrementShowers = function() {
  return showers++;
};
function meteorShower() {
  var _choices2;
  return {
    name: "Meteor Showered",
    ready: function() {
      return get("_meteorShowerUses") < 5 && get("_saberForceUses") < 5;
    },
    completed: function() {
      return have($effect(_templateObject3114 || (_templateObject3114 = _taggedTemplateLiteral32(["Meteor Showered"]))));
    },
    prepare: function() {
      Horsery_exports.current() === "pale" && Horsery_exports.changeHorse("dark"), SourceTerminal_exports.educate([$skill(_templateObject3212 || (_templateObject3212 = _taggedTemplateLiteral32(["Turbo"]))), $skill(_templateObject339 || (_templateObject339 = _taggedTemplateLiteral32(["Extract"])))]);
    },
    do: function() {
      (0, import_kolmafia36.adv1)($location(_templateObject347 || (_templateObject347 = _taggedTemplateLiteral32(["The Neverending Party"]))), -1, ""), (0, import_kolmafia36.handlingChoice)() && (0, import_kolmafia36.runChoice)(-1);
    },
    outfit: function() {
      return uniform({
        changes: {
          familiar: $familiar.none,
          famequip: $item.none,
          weapon: $item(_templateObject357 || (_templateObject357 = _taggedTemplateLiteral32(["Fourth of May Cosplay Saber"])))
        }
      });
    },
    choices: (_choices2 = {}, _defineProperty14(_choices2, 1387, 3), _defineProperty14(_choices2, 1324, 5), _choices2),
    combat: new CSStrategy(function() {
      return Macro2.externalIf(have($effect(_templateObject367 || (_templateObject367 = _taggedTemplateLiteral32(["Overheated"])))), new Macro2(), Macro2.skill($skill(_templateObject377 || (_templateObject377 = _taggedTemplateLiteral32(["Turbo"]))))).skill($skill(_templateObject386 || (_templateObject386 = _taggedTemplateLiteral32(["Meteor Shower"])))).skill($skill(_templateObject396 || (_templateObject396 = _taggedTemplateLiteral32(["Use the Force"]))));
    }),
    post: function() {
      have($effect(_templateObject406 || (_templateObject406 = _taggedTemplateLiteral32(["Meteor Showered"])))) && incrementShowers(), _set("_meteorShowerUses", showers), SourceTerminal_exports.educate([$skill(_templateObject4113 || (_templateObject4113 = _taggedTemplateLiteral32(["Extract"]))), $skill(_templateObject4211 || (_templateObject4211 = _taggedTemplateLiteral32(["Portscan"])))]);
    }
  };
}
function birdTask(modifier) {
  var positive = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return {
    name: "Regular Bird",
    completed: function() {
      return have($effect(_templateObject436 || (_templateObject436 = _taggedTemplateLiteral32(["Blessing of the Bird"]))));
    },
    ready: function() {
      return have($skill(_templateObject446 || (_templateObject446 = _taggedTemplateLiteral32(["Seek out a Bird"])))) && currentBirdHas(modifier, positive) && get("_birdsSoughtToday") < 6;
    },
    do: function() {
      return (0, import_kolmafia36.useSkill)($skill(_templateObject455 || (_templateObject455 = _taggedTemplateLiteral32(["Seek out a Bird"]))));
    }
  };
}
function favouriteBirdTask(modifier) {
  var positive = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return {
    name: "Favourite Bird",
    completed: function() {
      return get("_favoriteBirdVisited");
    },
    ready: function() {
      return have($skill(_templateObject465 || (_templateObject465 = _taggedTemplateLiteral32(["Visit your Favorite Bird"])))) && favouriteBirdHas(modifier, positive);
    },
    do: function() {
      return (0, import_kolmafia36.useSkill)($skill(_templateObject475 || (_templateObject475 = _taggedTemplateLiteral32(["Visit your Favorite Bird"]))));
    }
  };
}
function deckTask(card) {
  return {
    name: "Cheat At Cards: ".concat(card),
    completed: function() {
      return DeckOfEveryCard_exports.getCardsSeen().includes(card);
    },
    ready: function() {
      return DeckOfEveryCard_exports.have() && DeckOfEveryCard_exports.getRemainingCheats() > 0;
    },
    do: function() {
      return DeckOfEveryCard_exports.cheatCard(card);
    }
  };
}
function aprilTask(song2) {
  return {
    name: "Conduct ".concat(song2),
    ready: function() {
      return AprilingBandHelmet_exports.canChangeSong();
    },
    completed: function() {
      return have(import_kolmafia36.Effect.get(song2));
    },
    do: function() {
      return AprilingBandHelmet_exports.changeSong(song2);
    }
  };
}
function buskTask(hat, shirt, pants, index) {
  return {
    name: "Busk #".concat(index + 1, ": ").concat(hat, ". ").concat(shirt, ", and ").concat(pants),
    outfit: _objectSpread9({
      hat: hat,
      shirt: shirt,
      pants: pants
    }, hat === $item(_templateObject485 || (_templateObject485 = _taggedTemplateLiteral32(["prismatic beret"]))) ? {} : {
      familiar: $familiar(_templateObject496 || (_templateObject496 = _taggedTemplateLiteral32(["Mad Hatrack"]))),
      famequip: $item(_templateObject506 || (_templateObject506 = _taggedTemplateLiteral32(["prismatic beret"])))
    }),
    acquire: function() {
      return [hat, pants, shirt].filter(function(i) {
        return i !== $item.none && !have(i) && (0, import_kolmafia36.npcPrice)(i) > 0;
      }).map(function(item6) {
        return {
          item: item6
        };
      });
    },
    ready: function() {
      return [hat, shirt, pants].every(function(it) {
        return it === $item.none || (0, import_kolmafia36.canEquip)(it) && (have(it) || (0, import_kolmafia36.npcPrice)(it) > 0);
      });
    },
    completed: function() {
      return get("_beretBuskingUses") !== index;
    },
    do: function() {
      for (var _i = 0, _Object$entries = Object.entries({
        hat: hat,
        shirt: shirt,
        pants: pants
      }); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray16(_Object$entries[_i], 2), slotName = _Object$entries$_i[0], item6 = _Object$entries$_i[1];
        (0, import_kolmafia36.equippedItem)((0, import_kolmafia36.toSlot)(slotName)) !== item6 && (0, import_kolmafia36.abort)("Failed to equip ".concat(item6, " to ").concat(slotName, " for Busking!"));
      }
      (0, import_kolmafia36.useSkill)($skill(_templateObject5112 || (_templateObject5112 = _taggedTemplateLiteral32(["Beret Busking"]))));
    },
    core: "soft"
  };
}

// src/boozedrop.ts
var import_kolmafia37 = require("kolmafia");
var _templateObject131, _templateObject250, _templateObject340, _templateObject437, _templateObject529, _templateObject626, _templateObject726, _templateObject820, _templateObject916, _templateObject1014, _templateObject1113, _templateObject1214, _templateObject1314, _templateObject1414, _templateObject1513, _templateObject1613, _templateObject1713, _templateObject1813, _templateObject1912, _templateObject2011, _templateObject2116, _templateObject2215, _templateObject2313, _templateObject2411, _templateObject2510, _templateObject2610, _templateObject2710, _templateObject289, _templateObject299, _templateObject309, _templateObject3115, _templateObject3213, _templateObject3310, _templateObject348;
function ownKeys10(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread10(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys10(Object(source), !0).forEach(function(key) {
      _defineProperty15(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys10(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty15(obj, key, value) {
  return key = _toPropertyKey20(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey20(arg) {
  var key = _toPrimitive20(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive20(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toConsumableArray11(arr) {
  return _arrayWithoutHoles11(arr) || _iterableToArray11(arr) || _unsupportedIterableToArray22(arr) || _nonIterableSpread11();
}
function _nonIterableSpread11() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray22(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray22(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray22(o, minLen);
  }
}
function _iterableToArray11(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles11(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray22(arr);
}
function _arrayLikeToArray22(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral33(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var BoozeDrop = {
  name: "Booze Drop",
  type: "SERVICE",
  test: CommunityService.BoozeDrop,
  outfit: function() {
    return (0, import_kolmafia37.cliExecute)("fold wad of used tape"), {
      hat: $items(_templateObject131 || (_templateObject131 = _taggedTemplateLiteral33(["norwhal helmet, wad of used tape"]))),
      weapon: $items(_templateObject250 || (_templateObject250 = _taggedTemplateLiteral33(["extra-large utility candle, runed taper candle, novelty sparkling candle, Fourth of May Cosplay Saber"]))),
      offhand: $item(_templateObject340 || (_templateObject340 = _taggedTemplateLiteral33(["unbreakable umbrella"]))),
      back: $items(_templateObject437 || (_templateObject437 = _taggedTemplateLiteral33(["Buddy Bjorn, protonic accelerator pack"]))),
      riders: {
        "buddy-bjorn": $familiar(_templateObject529 || (_templateObject529 = _taggedTemplateLiteral33(["Party Mouse"])))
      },
      acc1: $item(_templateObject626 || (_templateObject626 = _taggedTemplateLiteral33(["Guzzlr tablet"]))),
      acc2: $item(_templateObject726 || (_templateObject726 = _taggedTemplateLiteral33(["Cincho de Mayo"]))),
      acc3: $items(_templateObject820 || (_templateObject820 = _taggedTemplateLiteral33(["barrel hoop earring, gold detective badge, government-issued night-vision goggles, combat lover's locket"]))),
      famequip: $item(_templateObject916 || (_templateObject916 = _taggedTemplateLiteral33(["li'l ninja costume"]))),
      familiar: $familiar(_templateObject1014 || (_templateObject1014 = _taggedTemplateLiteral33(["Trick-or-Treating Tot"]))),
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
    completed: function() {
      return have($effect(_templateObject1113 || (_templateObject1113 = _taggedTemplateLiteral33(["Bat-Adjacent Form"]))));
    },
    do: $location(_templateObject1214 || (_templateObject1214 = _taggedTemplateLiteral33(["The Dire Warren"]))),
    outfit: function() {
      return uniform({
        changes: {
          back: $item(_templateObject1314 || (_templateObject1314 = _taggedTemplateLiteral33(["vampyric cloake"]))),
          offhand: $item(_templateObject1414 || (_templateObject1414 = _taggedTemplateLiteral33(["latte lovers member's mug"])))
        },
        canAttack: !1
      });
    },
    combat: new CSStrategy(function() {
      return Macro2.skill($skill(_templateObject1513 || (_templateObject1513 = _taggedTemplateLiteral33(["Become a Bat"])))).skill($skill(_templateObject1613 || (_templateObject1613 = _taggedTemplateLiteral33(["Throw Latte on Opponent"]))));
    })
  }, _objectSpread10(_objectSpread10({}, deckTask("X - The Wheel of Fortune")), {}, {
    class: $classes(_templateObject1713 || (_templateObject1713 = _taggedTemplateLiteral33(["Sauceror, Turtle Tamer"]))),
    core: "hard"
  }), {
    name: "Items.enh",
    completed: function() {
      return have($effect(_templateObject1813 || (_templateObject1813 = _taggedTemplateLiteral33(["items.enh"]))));
    },
    do: function() {
      return SourceTerminal_exports.enhance($effect(_templateObject1912 || (_templateObject1912 = _taggedTemplateLiteral33(["items.enh"]))));
    }
  }, skillTask($skill(_templateObject2011 || (_templateObject2011 = _taggedTemplateLiteral33(["The Spirit of Taking"])))), skillTask($skill(_templateObject2116 || (_templateObject2116 = _taggedTemplateLiteral33(["Singer's Faithful Ocelot"])))), {
    name: "Play Pool",
    completed: function() {
      return have($effect(_templateObject2215 || (_templateObject2215 = _taggedTemplateLiteral33(["Hustlin'"]))));
    },
    do: function() {
      return (0, import_kolmafia37.cliExecute)("pool 3");
    }
  }, asdonTask("Observantly"), {
    name: "Get Anticheese",
    ready: function() {
      return (0, import_kolmafia37.canAdventure)($location(_templateObject2313 || (_templateObject2313 = _taggedTemplateLiteral33(["South of the Border"]))));
    },
    completed: function() {
      return get("lastAnticheeseDay") > 0;
    },
    do: function() {
      return (0, import_kolmafia37.visitUrl)("place.php?whichplace=desertbeach&action=db_nukehouse");
    }
  }, {
    name: "Government",
    ready: function() {
      return have($item(_templateObject2411 || (_templateObject2411 = _taggedTemplateLiteral33(["anticheese"])))) && have($item(_templateObject2510 || (_templateObject2510 = _taggedTemplateLiteral33(["government cheese"]))));
    },
    completed: function() {
      return have($effect(_templateObject2610 || (_templateObject2610 = _taggedTemplateLiteral33(["I See Everything Thrice!"]))));
    },
    do: function() {
      return (0, import_kolmafia37.create)(1, $item(_templateObject2710 || (_templateObject2710 = _taggedTemplateLiteral33(["government"])))) && (0, import_kolmafia37.use)(1, $item(_templateObject289 || (_templateObject289 = _taggedTemplateLiteral33(["government"]))));
    }
  }, {
    name: "Pray",
    class: $classes(_templateObject299 || (_templateObject299 = _taggedTemplateLiteral33(["Pastamancer"]))),
    completed: function() {
      return get("_barrelPrayer");
    },
    do: function() {
      return (0, import_kolmafia37.cliExecute)("barrelprayer buff");
    }
  }].concat(_toConsumableArray11($items(_templateObject309 || (_templateObject309 = _taggedTemplateLiteral33(["Salsa Caliente\u2122 candle, lavender candy heart, bag of grain, emergency glowstick, autumn leaf"]))).map(potionTask)), [{
    name: "Steely-Eyed Squint",
    completed: function() {
      return have($effect(_templateObject3115 || (_templateObject3115 = _taggedTemplateLiteral33(["Steely-Eyed Squint"]))));
    },
    do: function() {
      return (0, import_kolmafia37.useSkill)($skill(_templateObject3213 || (_templateObject3213 = _taggedTemplateLiteral33(["Steely-Eyed Squint"]))));
    }
  }, aprilTask("Apriling Band Celebration Bop"), {
    name: "Feel Lost",
    completed: function() {
      return have($effect(_templateObject3310 || (_templateObject3310 = _taggedTemplateLiteral33(["Feeling Lost"]))));
    },
    do: function() {
      return (0, import_kolmafia37.useSkill)($skill(_templateObject348 || (_templateObject348 = _taggedTemplateLiteral33(["Feel Lost"]))));
    }
  }])
}, boozedrop_default = BoozeDrop;

// src/coilwire.ts
init_kolmafia_polyfill();
var import_kolmafia38 = require("kolmafia");
var _templateObject140, _templateObject251, _templateObject341, _templateObject438, _templateObject530, _templateObject627, _templateObject727, _templateObject821, _templateObject917, _templateObject1015, _templateObject1114, _templateObject1215, _templateObject1315, _templateObject1415, _templateObject1514, _templateObject1614, _templateObject1714, _templateObject1814, _templateObject1913, _templateObject2012, _templateObject2117, _templateObject2216, _templateObject2314, _templateObject2412, _templateObject2511, _templateObject2611, _templateObject2711, _templateObject2810, _templateObject2910, _templateObject3010, _templateObject3116, _templateObject3214, _templateObject3311, _templateObject349, _templateObject358, _templateObject368, _templateObject378, _templateObject387, _templateObject397;
function _taggedTemplateLiteral34(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var CoilWire = {
  type: "SERVICE",
  maxTurns: 60,
  test: CommunityService.CoilWire,
  name: "Coil Wire",
  tasks: [{
    name: "Sausage",
    ready: function() {
      return getKramcoWandererChance() >= 1;
    },
    completed: function() {
      return get("_sausageFights") > 0;
    },
    do: function() {
      (0, import_kolmafia38.adv1)(guildQuestZone, -1, ""), have($item(_templateObject140 || (_templateObject140 = _taggedTemplateLiteral34(["magical sausage casing"])))) && (0, import_kolmafia38.create)(1, $item(_templateObject251 || (_templateObject251 = _taggedTemplateLiteral34(["magical sausage"])))), (0, import_kolmafia38.eat)(1, $item(_templateObject341 || (_templateObject341 = _taggedTemplateLiteral34(["magical sausage"]))));
    },
    outfit: function() {
      return uniform({
        changes: {
          offhand: $item(_templateObject438 || (_templateObject438 = _taggedTemplateLiteral34(["Kramco Sausage-o-Matic\u2122"]))),
          familiar: $familiar(_templateObject530 || (_templateObject530 = _taggedTemplateLiteral34(["Left-Hand Man"]))),
          famequip: $item(_templateObject627 || (_templateObject627 = _taggedTemplateLiteral34(["Roman Candelabra"])))
        }
      });
    },
    combat: new CSStrategy(function() {
      return Macro2.trySkill($skill(_templateObject727 || (_templateObject727 = _taggedTemplateLiteral34(["Blow the Purple Candle!"])))).trySkill($skill(_templateObject821 || (_templateObject821 = _taggedTemplateLiteral34(["Blow the Red Candle!"])))).skill($skill(_templateObject917 || (_templateObject917 = _taggedTemplateLiteral34(["Micrometeorite"])))).attack().repeat();
    })
  }, {
    name: "Acquire Sombrero-Mounted Sparkler",
    completed: function() {
      return have($item(_templateObject1015 || (_templateObject1015 = _taggedTemplateLiteral34(["sombrero-mounted sparkler"]))));
    },
    do: function() {
      (0, import_kolmafia38.visitUrl)("clan_viplounge.php?action=fwshop&whichfloor=2"), (0, import_kolmafia38.buy)(1, $item(_templateObject1114 || (_templateObject1114 = _taggedTemplateLiteral34(["sombrero-mounted sparkler"]))));
    }
  }, asdonTask("Obnoxiously"), {
    name: "Spring Run",
    completed: function() {
      return have($effect(_templateObject1215 || (_templateObject1215 = _taggedTemplateLiteral34(["Everything Looks Green"]))));
    },
    do: guildQuestZone,
    outfit: function() {
      return uniform({
        canAttack: !1,
        changes: {
          acc1: $item(_templateObject1315 || (_templateObject1315 = _taggedTemplateLiteral34(["spring shoes"]))),
          hat: $item(_templateObject1415 || (_templateObject1415 = _taggedTemplateLiteral34(["sombrero-mounted sparkler"])))
        }
      });
    },
    combat: new CSStrategy(function() {
      return Macro2.trySkill($skill(_templateObject1514 || (_templateObject1514 = _taggedTemplateLiteral34(["Spring Away"]))));
    })
  }, {
    name: "Fruity Skeleton",
    class: $classes(_templateObject1614 || (_templateObject1614 = _taggedTemplateLiteral34(["Sauceror"]))),
    completed: function() {
      return have($item(_templateObject1714 || (_templateObject1714 = _taggedTemplateLiteral34(["cherry"]))));
    },
    ready: function() {
      return !have($effect(_templateObject1814 || (_templateObject1814 = _taggedTemplateLiteral34(["Everything Looks Yellow"]))));
    },
    do: $location(_templateObject1913 || (_templateObject1913 = _taggedTemplateLiteral34(["The Skeleton Store"]))),
    outfit: function() {
      return uniform({
        canAttack: !1,
        changes: {
          shirt: $item(_templateObject2012 || (_templateObject2012 = _taggedTemplateLiteral34(["Jurassic Parka"]))),
          modes: {
            parka: "dilophosaur"
          },
          acc3: $item(_templateObject2117 || (_templateObject2117 = _taggedTemplateLiteral34(["Peridot of Peril"])))
        }
      });
    },
    choices: peridotChoice($monster(_templateObject2216 || (_templateObject2216 = _taggedTemplateLiteral34(["novelty tropical skeleton"])))),
    combat: new CSStrategy(function() {
      return Macro2.skill($skill(_templateObject2314 || (_templateObject2314 = _taggedTemplateLiteral34(["Spit jurassic acid"]))));
    })
  }, {
    name: "Evil Olive",
    class: $classes(_templateObject2412 || (_templateObject2412 = _taggedTemplateLiteral34(["Disco Bandit, Accordion Thief"]))),
    completed: function() {
      return have($item(_templateObject2511 || (_templateObject2511 = _taggedTemplateLiteral34(["jumbo olive"]))));
    },
    ready: function() {
      return !have($effect(_templateObject2611 || (_templateObject2611 = _taggedTemplateLiteral34(["Everything Looks Yellow"]))));
    },
    do: function() {
      return CombatLoversLocket_exports.reminisce($monster(_templateObject2711 || (_templateObject2711 = _taggedTemplateLiteral34(["Evil Olive"]))));
    },
    outfit: function() {
      return uniform({
        canAttack: !1,
        changes: {
          shirt: $item(_templateObject2810 || (_templateObject2810 = _taggedTemplateLiteral34(["Jurassic Parka"]))),
          modes: {
            parka: "dilophosaur"
          }
        }
      });
    },
    combat: new CSStrategy(function() {
      return Macro2.skill($skill(_templateObject2910 || (_templateObject2910 = _taggedTemplateLiteral34(["Spit jurassic acid"]))));
    })
  }],
  outfit: function() {
    return {
      hat: $items(_templateObject3010 || (_templateObject3010 = _taggedTemplateLiteral34(["astral chapeau, Iunion Crown"]))),
      shirt: $item(_templateObject3116 || (_templateObject3116 = _taggedTemplateLiteral34(["Jurassic Parka"]))),
      pants: $item(_templateObject3214 || (_templateObject3214 = _taggedTemplateLiteral34(["Cargo Cultist Shorts"]))),
      weapon: $item(_templateObject3311 || (_templateObject3311 = _taggedTemplateLiteral34(["Fourth of May Cosplay Saber"]))),
      offhand: $item(_templateObject349 || (_templateObject349 = _taggedTemplateLiteral34(["august scepter"]))),
      acc1: $item(_templateObject358 || (_templateObject358 = _taggedTemplateLiteral34(["Eight Days a Week Pill Keeper"]))),
      acc2: $item(_templateObject368 || (_templateObject368 = _taggedTemplateLiteral34(["Powerful Glove"]))),
      acc3: $item(_templateObject378 || (_templateObject378 = _taggedTemplateLiteral34(["Guzzlr tablet"]))),
      familiar: $familiar(_templateObject387 || (_templateObject387 = _taggedTemplateLiteral34(["Left-Hand Man"]))),
      famequip: $items(_templateObject397 || (_templateObject397 = _taggedTemplateLiteral34(["Abracandalabra, unbreakable umbrella"]))),
      modes: {
        parka: "ghostasaurus"
      }
    };
  }
}, coilwire_default = CoilWire;

// src/engine.ts
init_kolmafia_polyfill();

// src/globaltasks.ts
init_kolmafia_polyfill();
var import_kolmafia39 = require("kolmafia");
var _templateObject141, _templateObject260, _templateObject350, _templateObject439, _templateObject531, _templateObject628, _templateObject728, _templateObject823, _templateObject918, _templateObject1016, _templateObject1115, _templateObject1216, _templateObject1316;
function _taggedTemplateLiteral35(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var GLOBAL_TASKS = [{
  name: "Beaten Up!",
  completed: function() {
    return !have($effect(_templateObject141 || (_templateObject141 = _taggedTemplateLiteral35(["Beaten Up"]))));
  },
  ready: function() {
    return get("lastEncounter") !== "Poetic Justice";
  },
  do: function() {
    return (0, import_kolmafia39.abort)("Beaten up!");
  }
}, {
  name: "Sweat Out some Booze",
  completed: function() {
    return get("_sweatOutSomeBoozeUsed") >= 3;
  },
  ready: function() {
    return (0, import_kolmafia39.myInebriety)() > 0 && get("sweat") >= 25;
  },
  do: function() {
    return (0, import_kolmafia39.useSkill)($skill(_templateObject260 || (_templateObject260 = _taggedTemplateLiteral35(["Sweat Out Some Booze"]))));
  },
  outfit: {
    pants: $item(_templateObject350 || (_templateObject350 = _taggedTemplateLiteral35(["designer sweatpants"])))
  }
}, {
  name: "Numberology",
  ready: function() {
    return Object.values((0, import_kolmafia39.reverseNumberology)()).includes(69);
  },
  completed: function() {
    return get("_universeCalculated") >= (get("skillLevel144") > 3 ? 2 : get("skillLevel144"));
  },
  do: function() {
    return (0, import_kolmafia39.cliExecute)("numberology 69");
  }
}, {
  name: "June Cleaver",
  completed: function() {
    return get("_juneCleaverFightsLeft") > 0;
  },
  ready: function() {
    return !counter_exports.exists("portscan.edu");
  },
  do: function() {
    return withProperty("recoveryScript", "", function() {
      (0, import_kolmafia39.adv1)($location(_templateObject439 || (_templateObject439 = _taggedTemplateLiteral35(["Noob Cave"]))), -1, ""), get("lastEncounter") === "Poetic Justice" && (0, import_kolmafia39.useSkill)($skill(_templateObject531 || (_templateObject531 = _taggedTemplateLiteral35(["Tongue of the Walrus"]))));
    });
  },
  outfit: {
    weapon: $item(_templateObject628 || (_templateObject628 = _taggedTemplateLiteral35(["June cleaver"])))
  }
}, {
  name: "Ghost",
  completed: function() {
    return get("questPAGhost") === "unstarted";
  },
  ready: function() {
    return have($item(_templateObject728 || (_templateObject728 = _taggedTemplateLiteral35(["protonic accelerator pack"])))) && get("questPAGhost") !== "unstarted" && !!get("ghostLocation") && !have($effect(_templateObject823 || (_templateObject823 = _taggedTemplateLiteral35(["Meteor Showered"]))));
  },
  do: function() {
    var _get3;
    return (_get3 = get("ghostLocation")) !== null && _get3 !== void 0 ? _get3 : (0, import_kolmafia39.abort)("Failed to identify ghost location");
  },
  combat: new CSStrategy(function() {
    return Macro2.delevel().easyFight().trySkill($skill(_templateObject918 || (_templateObject918 = _taggedTemplateLiteral35(["Shoot Ghost"])))).trySkill($skill(_templateObject1016 || (_templateObject1016 = _taggedTemplateLiteral35(["Shoot Ghost"])))).trySkill($skill(_templateObject1115 || (_templateObject1115 = _taggedTemplateLiteral35(["Shoot Ghost"])))).trySkill($skill(_templateObject1216 || (_templateObject1216 = _taggedTemplateLiteral35(["Trap Ghost"]))));
  }),
  outfit: function() {
    return uniform({
      changes: {
        back: $item(_templateObject1316 || (_templateObject1316 = _taggedTemplateLiteral35(["protonic accelerator pack"])))
      }
    });
  }
}], GLOBAL_QUEST = {
  name: "Global",
  tasks: GLOBAL_TASKS
}, globaltasks_default = GLOBAL_QUEST;

// src/engine.ts
var import_kolmafia40 = require("kolmafia");
var _templateObject150, _templateObject261;
function _taggedTemplateLiteral36(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _toConsumableArray12(arr) {
  return _arrayWithoutHoles12(arr) || _iterableToArray12(arr) || _unsupportedIterableToArray23(arr) || _nonIterableSpread12();
}
function _nonIterableSpread12() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray12(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles12(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray23(arr);
}
function ownKeys11(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread11(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys11(Object(source), !0).forEach(function(key) {
      _defineProperty16(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys11(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _slicedToArray17(arr, i) {
  return _arrayWithHoles17(arr) || _iterableToArrayLimit17(arr, i) || _unsupportedIterableToArray23(arr, i) || _nonIterableRest17();
}
function _nonIterableRest17() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray23(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray23(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray23(o, minLen);
  }
}
function _arrayLikeToArray23(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit17(arr, i) {
  var _i = arr == null ? null : typeof Symbol != "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i != null) {
    var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, i === 0) {
        if (Object(_i) !== _i)
          return;
        _n = !1;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0)
          ;
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && _i.return != null && (_r = _i.return(), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles17(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _classCallCheck15(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
function _defineProperties15(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, _toPropertyKey21(descriptor.key), descriptor);
  }
}
function _createClass15(Constructor, protoProps, staticProps) {
  return protoProps && _defineProperties15(Constructor.prototype, protoProps), staticProps && _defineProperties15(Constructor, staticProps), Object.defineProperty(Constructor, "prototype", { writable: !1 }), Constructor;
}
function _get2() {
  return typeof Reflect != "undefined" && Reflect.get ? _get2 = Reflect.get.bind() : _get2 = function(target, property, receiver) {
    var base = _superPropBase2(target, property);
    if (!!base) {
      var desc = Object.getOwnPropertyDescriptor(base, property);
      return desc.get ? desc.get.call(arguments.length < 3 ? target : receiver) : desc.value;
    }
  }, _get2.apply(this, arguments);
}
function _superPropBase2(object, property) {
  for (; !Object.prototype.hasOwnProperty.call(object, property) && (object = _getPrototypeOf7(object), object !== null); )
    ;
  return object;
}
function _inherits8(subClass, superClass) {
  if (typeof superClass != "function" && superClass !== null)
    throw new TypeError("Super expression must either be null or a function");
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: !0, configurable: !0 } }), Object.defineProperty(subClass, "prototype", { writable: !1 }), superClass && _setPrototypeOf8(subClass, superClass);
}
function _setPrototypeOf8(o, p) {
  return _setPrototypeOf8 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf8(o, p);
}
function _createSuper7(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct7();
  return function() {
    var Super = _getPrototypeOf7(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf7(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else
      result = Super.apply(this, arguments);
    return _possibleConstructorReturn7(this, result);
  };
}
function _possibleConstructorReturn7(self2, call) {
  if (call && (typeof call == "object" || typeof call == "function"))
    return call;
  if (call !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized7(self2);
}
function _assertThisInitialized7(self2) {
  if (self2 === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return self2;
}
function _isNativeReflectConstruct7() {
  if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch (e) {
    return !1;
  }
}
function _getPrototypeOf7(o) {
  return _getPrototypeOf7 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o2) {
    return o2.__proto__ || Object.getPrototypeOf(o2);
  }, _getPrototypeOf7(o);
}
function _defineProperty16(obj, key, value) {
  return key = _toPropertyKey21(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey21(arg) {
  var key = _toPrimitive21(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive21(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
var HIGHLIGHT = (0, import_kolmafia40.isDarkMode)() ? "yellow" : "blue", CSEngine = /* @__PURE__ */ function(_Engine) {
  _inherits8(CSEngine2, _Engine);
  var _super = _createSuper7(CSEngine2);
  function CSEngine2(quest) {
    var _this;
    return _classCallCheck15(this, CSEngine2), _this = _super.call(this, getTasks([globaltasks_default, quest])), _defineProperty16(_assertThisInitialized7(_this), "propertyManager", CSEngine2.propertyManager), _defineProperty16(_assertThisInitialized7(_this), "name", void 0), _defineProperty16(_assertThisInitialized7(_this), "csOptions", void 0), _defineProperty16(_assertThisInitialized7(_this), "turnsSpent", void 0), _this.csOptions = quest, _this.turnsSpent = quest.turnsSpent, _this.name = _this.csOptions.type === "MISC" ? _this.csOptions.name : _this.csOptions.test.statName, _this;
  }
  return _createClass15(CSEngine2, [{
    key: "destruct",
    value: function() {
      (0, import_kolmafia40.setAutoAttack)(0);
    }
  }, {
    key: "available",
    value: function(task) {
      var core = undelay(task.core), taskClass = undelay(task.class);
      return _get2(_getPrototypeOf7(CSEngine2.prototype), "available", this).call(this, task) && (!core || core === CSEngine2.core) && (!taskClass || taskClass.includes((0, import_kolmafia40.myClass)()));
    }
  }, {
    key: "initPropertiesManager",
    value: function() {
    }
  }, {
    key: "turns",
    get: function() {
      return this.turnsSpent ? undelay(this.turnsSpent) : 0;
    }
  }, {
    key: "runTest",
    value: function() {
      var _this = this;
      var loggingFunction = function(action) {
        return _this.csOptions.type === "MISC" ? CommunityService.logTask(_this.name, action) : _this.csOptions.test.run(action, _this.csOptions.maxTurns);
      };
      try {
        var result = loggingFunction(function() {
          if (_this.run(), _this.csOptions.type === "SERVICE") {
            var spec = _this.csOptions.outfit();
            Outfit.from(spec, new Error("Failed to equip outfit for ".concat(_this.name, ". Also, that outfit is ").concat((0, import_kolmafia40.toJson)(Object.fromEntries(Object.entries(spec).filter(function(_ref) {
              var _ref2 = _slicedToArray17(_ref, 1), key = _ref2[0];
              return key !== "afterDress";
            })))))).dress(), burnLibrams();
          }
          return _this.turns;
        }), warning = this.csOptions.type === "MISC" ? "Failed to execute ".concat(this.name, "!") : "Failed to cap ".concat(this.name, "!");
        if (result === "failed")
          throw new Error(warning);
        if (result === "already completed")
          throw new Error("Libram thinks we already completed ".concat(this.name, " but we beg to differ"));
      } finally {
        this.destruct();
      }
    }
  }], [{
    key: "core",
    get: function() {
      return CSEngine2.core_;
    }
  }, {
    key: "initiate",
    value: function() {
      CSEngine2.propertyManager.set(_objectSpread11(_objectSpread11({}, CSEngine2.defaultSettings), {}, {
        customCombatScript: "grimoire_macro",
        logPreferenceChangeFilter: _toConsumableArray12(new Set([].concat(_toConsumableArray12(get("logPreferenceChangeFilter").split(",")), ["libram_savedMacro", "maximizerMRUList", "testudinalTeachings", "_lastCombatStarted"]))).sort().filter(function(a) {
          return a;
        }).join(","),
        requireBoxServants: !1
      })), CSEngine2.propertyManager.setChoices({
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
      }), (0, import_kolmafia40.readCcs)("grimoire_macro") || (0, import_kolmafia40.writeCcs)("[ default ]\nabort", "grimoire_macro");
    }
  }, {
    key: "runTests",
    value: function() {
      (0, import_kolmafia40.myPath)() !== $path(_templateObject150 || (_templateObject150 = _taggedTemplateLiteral36(["Community Service"]))) && (0, import_kolmafia40.abort)("phccs doesn't ascend on your behalf! Run phccs_gash to ascend."), (0, import_kolmafia40.visitUrl)("council.php"), CSEngine2.initiate();
      try {
        for (var _len = arguments.length, quests = new Array(_len), _key = 0; _key < _len; _key++)
          quests[_key] = arguments[_key];
        for (var _i2 = 0, _quests = quests; _i2 < _quests.length; _i2++) {
          var quest = _quests[_i2], type = quest.type;
          if (type === "MISC" || !quest.test.isDone()) {
            var engine = new CSEngine2(quest);
            engine.runTest();
          }
        }
        CSEngine2.core === "soft" && (CommunityService.donate(), (0, import_kolmafia40.cliExecute)("refresh all"), (0, import_kolmafia40.cliExecute)(get("kingLiberatedScript")), uneffect($effect(_templateObject261 || (_templateObject261 = _taggedTemplateLiteral36(["Feeling Lost"]))))), get("_cloudTalkSmoker") && (0, import_kolmafia40.print)("".concat(get("_cloudTalkSmoker").slice(10), " has a message for you: ").concat(get("_cloudTalkMessage"))), ["food", "booze"].includes(get("_questPartyFairQuest")) && (0, import_kolmafia40.print)("Talk to Gerald/ine!");
      } finally {
        CSEngine2.propertyManager.resetAll(), CommunityService.printLog(HIGHLIGHT);
      }
    }
  }]), CSEngine2;
}(Engine);
_defineProperty16(CSEngine, "propertyManager", new PropertiesManager());
_defineProperty16(CSEngine, "core_", (0, import_kolmafia40.inHardcore)() ? "hard" : "soft");

// src/familiarweight.ts
init_kolmafia_polyfill();
var import_kolmafia41 = require("kolmafia");
var _templateObject151, _templateObject270, _templateObject351, _templateObject440, _templateObject534, _templateObject629, _templateObject729, _templateObject824, _templateObject919, _templateObject1017, _templateObject1116, _templateObject1217, _templateObject1317, _templateObject1416, _templateObject1515, _templateObject1615, _templateObject1715, _templateObject1815, _templateObject1914, _templateObject2013, _templateObject2118, _templateObject2217, _templateObject2315, _templateObject2413, _templateObject2512, _templateObject2612, _templateObject2712, _templateObject2811, _templateObject2911, _templateObject3011, _templateObject3117, _templateObject3215, _templateObject3312, _templateObject3410, _templateObject359, _templateObject369, _templateObject379, _templateObject388, _templateObject398, _templateObject407, _templateObject4114, _templateObject4212, _templateObject4310, _templateObject447, _templateObject456, _templateObject466, _templateObject476, _templateObject486, _templateObject497, _templateObject507, _templateObject5113, _templateObject5210, _templateObject535, _templateObject544, _templateObject554, _templateObject564, _templateObject574, _templateObject584, _templateObject594, _templateObject604;
function _toConsumableArray13(arr) {
  return _arrayWithoutHoles13(arr) || _iterableToArray13(arr) || _unsupportedIterableToArray24(arr) || _nonIterableSpread13();
}
function _nonIterableSpread13() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray24(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray24(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray24(o, minLen);
  }
}
function _iterableToArray13(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles13(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray24(arr);
}
function _arrayLikeToArray24(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys12(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread12(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys12(Object(source), !0).forEach(function(key) {
      _defineProperty17(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys12(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty17(obj, key, value) {
  return key = _toPropertyKey22(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey22(arg) {
  var key = _toPrimitive22(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive22(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral37(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var familiar = have($familiar(_templateObject151 || (_templateObject151 = _taggedTemplateLiteral37(["Comma Chameleon"])))) ? $familiar(_templateObject270 || (_templateObject270 = _taggedTemplateLiteral37(["Comma Chameleon"]))) : $familiar(_templateObject351 || (_templateObject351 = _taggedTemplateLiteral37(["Mini-Trainbot"]))), FamiliarWeight = {
  name: "Familiar Weight",
  type: "SERVICE",
  test: CommunityService.FamiliarWeight,
  outfit: function() {
    return _objectSpread12(_objectSpread12({
      hat: $item(_templateObject440 || (_templateObject440 = _taggedTemplateLiteral37(["Daylight Shavings Helmet"]))),
      weapon: $item(_templateObject534 || (_templateObject534 = _taggedTemplateLiteral37(["Fourth of May Cosplay Saber"]))),
      offhand: $items(_templateObject629 || (_templateObject629 = _taggedTemplateLiteral37(["burning paper crane, familiar scrapbook"]))),
      pants: $items(_templateObject729 || (_templateObject729 = _taggedTemplateLiteral37(["repaid diaper, Great Wolf's beastly trousers, designer sweatpants"]))),
      acc1: $item(_templateObject824 || (_templateObject824 = _taggedTemplateLiteral37(["Beach Comb"]))),
      acc2: $item(_templateObject919 || (_templateObject919 = _taggedTemplateLiteral37(["Brutal brogues"]))),
      acc3: $item(_templateObject1017 || (_templateObject1017 = _taggedTemplateLiteral37(["hewn moon-rune spoon"]))),
      familiar: familiar
    }, familiar === $familiar(_templateObject1116 || (_templateObject1116 = _taggedTemplateLiteral37(["Comma Chameleon"]))) ? $item.none : $item(_templateObject1217 || (_templateObject1217 = _taggedTemplateLiteral37(["overloaded Yule battery"])))), {}, {
      back: $items(_templateObject1317 || (_templateObject1317 = _taggedTemplateLiteral37(["Buddy Bjorn, protonic accelerator pack"]))),
      riders: {
        "buddy-bjorn": $familiar(_templateObject1416 || (_templateObject1416 = _taggedTemplateLiteral37(["Misshapen Animal Skeleton"])))
      }
    });
  },
  turnsSpent: 0,
  maxTurns: 30,
  tasks: [].concat(_toConsumableArray13(commonFamiliarWeightBuffs()), [potionTask($item(_templateObject1515 || (_templateObject1515 = _taggedTemplateLiteral37(["short stack of pancakes"])))), {
    name: "Get Familiar Equipment",
    completed: function() {
      return have($item(_templateObject1615 || (_templateObject1615 = _taggedTemplateLiteral37(["overloaded Yule battery"])))) || have($item(_templateObject1715 || (_templateObject1715 = _taggedTemplateLiteral37(["homemade robot gear"])))) || get("commaFamiliar") === $familiar(_templateObject1815 || (_templateObject1815 = _taggedTemplateLiteral37(["Homemade Robot"])));
    },
    do: function() {
      have($item(_templateObject1914 || (_templateObject1914 = _taggedTemplateLiteral37(["box of Familiar Jacks"])))) || (0, import_kolmafia41.create)($item(_templateObject2013 || (_templateObject2013 = _taggedTemplateLiteral37(["box of Familiar Jacks"])))), (0, import_kolmafia41.use)($item(_templateObject2118 || (_templateObject2118 = _taggedTemplateLiteral37(["box of Familiar Jacks"]))));
    },
    outfit: {
      familiar: familiar === $familiar(_templateObject2217 || (_templateObject2217 = _taggedTemplateLiteral37(["Comma Chameleon"]))) ? $familiar(_templateObject2315 || (_templateObject2315 = _taggedTemplateLiteral37(["Homemade Robot"]))) : familiar
    }
  }, {
    name: "Feed Chameleon",
    completed: function() {
      return get("commaFamiliar") === $familiar(_templateObject2413 || (_templateObject2413 = _taggedTemplateLiteral37(["Homemade Robot"])));
    },
    ready: function() {
      return have($familiar(_templateObject2512 || (_templateObject2512 = _taggedTemplateLiteral37(["Comma Chameleon"]))));
    },
    do: function() {
      (0, import_kolmafia41.visitUrl)("inv_equip.php?which=2&action=equip&whichitem=".concat((0, import_kolmafia41.toInt)($item(_templateObject2612 || (_templateObject2612 = _taggedTemplateLiteral37(["homemade robot gear"])))), "&pwd")), (0, import_kolmafia41.visitUrl)("charpane.php");
    },
    outfit: {
      familiar: $familiar(_templateObject2712 || (_templateObject2712 = _taggedTemplateLiteral37(["Comma Chameleon"])))
    }
  }, {
    name: "Paper Crane",
    completed: function() {
      return have($item(_templateObject2811 || (_templateObject2811 = _taggedTemplateLiteral37(["burning paper crane"]))));
    },
    do: function() {
      return (0, import_kolmafia41.create)($item(_templateObject2911 || (_templateObject2911 = _taggedTemplateLiteral37(["burning paper crane"]))));
    },
    ready: function() {
      return have($item(_templateObject3011 || (_templateObject3011 = _taggedTemplateLiteral37(["burning newspaper"]))));
    }
  }, {
    name: "Shorty Fights (Witchess)",
    completed: function() {
      return [$effect(_templateObject3117 || (_templateObject3117 = _taggedTemplateLiteral37(["Shortly Stacked"]))), $item(_templateObject3215 || (_templateObject3215 = _taggedTemplateLiteral37(["short stack of pancakes"])))].some(function(x) {
        return have(x);
      });
    },
    ready: function() {
      return availableFights() >= 11 - get("_shortOrderCookCharge") && 5 > Witchess_exports.fightsDone();
    },
    do: function() {
      return Witchess_exports.fightPiece($monster(_templateObject3312 || (_templateObject3312 = _taggedTemplateLiteral37(["Witchess Bishop"]))));
    },
    outfit: function() {
      return uniform({
        changes: {
          familiar: $familiar(_templateObject3410 || (_templateObject3410 = _taggedTemplateLiteral37(["Shorter-Order Cook"])))
        }
      });
    },
    combat: new CSStrategy(function() {
      return Macro2.defaultKill();
    })
  }, {
    name: "Shorty Fights (BRICKO)",
    completed: function() {
      return [$effect(_templateObject359 || (_templateObject359 = _taggedTemplateLiteral37(["Shortly Stacked"]))), $item(_templateObject369 || (_templateObject369 = _taggedTemplateLiteral37(["short stack of pancakes"])))].some(function(x) {
        return have(x);
      });
    },
    ready: function() {
      return availableFights() >= 11 - get("_shortOrderCookCharge") && have($item(_templateObject379 || (_templateObject379 = _taggedTemplateLiteral37(["BRICKO eye brick"]))));
    },
    do: function() {
      have($item(_templateObject388 || (_templateObject388 = _taggedTemplateLiteral37(["BRICKO ooze"])))) || (0, import_kolmafia41.create)($item(_templateObject398 || (_templateObject398 = _taggedTemplateLiteral37(["BRICKO ooze"])))), (0, import_kolmafia41.use)($item(_templateObject407 || (_templateObject407 = _taggedTemplateLiteral37(["BRICKO ooze"])))), (0, import_kolmafia41.runCombat)();
    },
    outfit: function() {
      return uniform({
        changes: {
          familiar: $familiar(_templateObject4114 || (_templateObject4114 = _taggedTemplateLiteral37(["Shorter-Order Cook"])))
        }
      });
    },
    combat: new CSStrategy(function() {
      return Macro2.defaultKill();
    })
  }, {
    name: "Garbage Fights (Witchess)",
    completed: function() {
      return $familiar(_templateObject4212 || (_templateObject4212 = _taggedTemplateLiteral37(["Garbage Fire"]))).dropsToday > 0;
    },
    ready: function() {
      return availableFights() >= 30 - get("garbageFireProgress") && 5 > Witchess_exports.fightsDone();
    },
    do: function() {
      return Witchess_exports.fightPiece($monster(_templateObject4310 || (_templateObject4310 = _taggedTemplateLiteral37(["Witchess Bishop"]))));
    },
    outfit: function() {
      return uniform({
        changes: {
          familiar: $familiar(_templateObject447 || (_templateObject447 = _taggedTemplateLiteral37(["Garbage Fire"])))
        }
      });
    },
    combat: new CSStrategy(function() {
      return Macro2.defaultKill();
    })
  }, {
    name: "Garbage Fights (BRICKO)",
    completed: function() {
      return $familiar(_templateObject456 || (_templateObject456 = _taggedTemplateLiteral37(["Garbage Fire"]))).dropsToday > 0;
    },
    ready: function() {
      return availableFights() >= 30 - get("garbageFireProgress") && have($item(_templateObject466 || (_templateObject466 = _taggedTemplateLiteral37(["BRICKO eye brick"]))));
    },
    do: function() {
      have($item(_templateObject476 || (_templateObject476 = _taggedTemplateLiteral37(["BRICKO ooze"])))) || (0, import_kolmafia41.create)($item(_templateObject486 || (_templateObject486 = _taggedTemplateLiteral37(["BRICKO ooze"])))), (0, import_kolmafia41.use)($item(_templateObject497 || (_templateObject497 = _taggedTemplateLiteral37(["BRICKO ooze"])))), (0, import_kolmafia41.runCombat)();
    },
    outfit: function() {
      return uniform({
        changes: {
          familiar: $familiar(_templateObject507 || (_templateObject507 = _taggedTemplateLiteral37(["Garbage Fire"])))
        }
      });
    },
    combat: new CSStrategy(function() {
      return Macro2.defaultKill();
    })
  }, {
    name: "Icy Revenge",
    ready: function() {
      return have($item(_templateObject5113 || (_templateObject5113 = _taggedTemplateLiteral37(["love song of icy revenge"]))));
    },
    completed: function() {
      return have($effect(_templateObject5210 || (_templateObject5210 = _taggedTemplateLiteral37(["Cold Hearted"]))), 20);
    },
    do: function() {
      return (0, import_kolmafia41.use)($item(_templateObject535 || (_templateObject535 = _taggedTemplateLiteral37(["love song of icy revenge"]))));
    }
  }, {
    name: "Blue Taffy",
    ready: function() {
      return have($item(_templateObject544 || (_templateObject544 = _taggedTemplateLiteral37(["pulled blue taffy"]))));
    },
    completed: function() {
      return have($effect(_templateObject554 || (_templateObject554 = _taggedTemplateLiteral37(["Blue Swayed"]))), 50);
    },
    do: function() {
      return (0, import_kolmafia41.use)($item(_templateObject564 || (_templateObject564 = _taggedTemplateLiteral37(["pulled blue taffy"]))));
    }
  }, {
    name: "Tune Moon",
    ready: function() {
      return (0, import_kolmafia41.mySign)() !== "Platypus";
    },
    completed: function() {
      return get("moonTuned");
    },
    do: function() {
      (0, import_kolmafia41.buy)(1, $item(_templateObject574 || (_templateObject574 = _taggedTemplateLiteral37(["frilly skirt"])))), (0, import_kolmafia41.buy)(1, $item(_templateObject584 || (_templateObject584 = _taggedTemplateLiteral37(["maiden wig"])))), unequip($item(_templateObject594 || (_templateObject594 = _taggedTemplateLiteral37(["hewn moon-rune spoon"])))), (0, import_kolmafia41.visitUrl)("inv_use.php?whichitem=10254&pwd&doit=96&whichsign=4");
    },
    core: "soft"
  }, potionTask($item(_templateObject604 || (_templateObject604 = _taggedTemplateLiteral37(["silver face paint"])))), meteorShower()])
}, familiarweight_default = FamiliarWeight;

// src/hotres.ts
init_kolmafia_polyfill();
var import_kolmafia42 = require("kolmafia");
var _templateObject160, _templateObject271, _templateObject360, _templateObject441, _templateObject536, _templateObject630, _templateObject730, _templateObject825, _templateObject920, _templateObject1018, _templateObject1117, _templateObject1218, _templateObject1318, _templateObject1417, _templateObject1516, _templateObject1616, _templateObject1716, _templateObject1816, _templateObject1915, _templateObject2014, _templateObject2119, _templateObject2218, _templateObject2316, _templateObject2414, _templateObject2513, _templateObject2613, _templateObject2713, _templateObject2812, _templateObject2912, _templateObject3012, _templateObject3118, _templateObject3216, _templateObject3313, _templateObject3411, _templateObject3510, _templateObject3610, _templateObject3710, _templateObject389;
function ownKeys13(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread13(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys13(Object(source), !0).forEach(function(key) {
      _defineProperty18(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys13(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty18(obj, key, value) {
  return key = _toPropertyKey23(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey23(arg) {
  var key = _toPrimitive23(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive23(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toConsumableArray14(arr) {
  return _arrayWithoutHoles14(arr) || _iterableToArray14(arr) || _unsupportedIterableToArray25(arr) || _nonIterableSpread14();
}
function _nonIterableSpread14() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray25(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray25(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray25(o, minLen);
  }
}
function _iterableToArray14(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles14(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray25(arr);
}
function _arrayLikeToArray25(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral38(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var buffs2 = $effects(_templateObject160 || (_templateObject160 = _taggedTemplateLiteral38(["Elemental Saucesphere, Astral Shell"]))), HotRes = {
  name: "Hot Res",
  type: "SERVICE",
  test: CommunityService.HotRes,
  outfit: function() {
    return {
      hat: $item(_templateObject271 || (_templateObject271 = _taggedTemplateLiteral38(["Daylight Shavings Helmet"]))),
      shirt: $items(_templateObject360 || (_templateObject360 = _taggedTemplateLiteral38(["Jurassic Parka, denim jacket"]))),
      back: $item(_templateObject441 || (_templateObject441 = _taggedTemplateLiteral38(["unwrapped knock-off retro superhero cape"]))),
      weapon: $item(_templateObject536 || (_templateObject536 = _taggedTemplateLiteral38(["industrial fire extinguisher"]))),
      offhand: $items(_templateObject630 || (_templateObject630 = _taggedTemplateLiteral38(["meteorite guard, Fourth of May Cosplay Saber"]))),
      pants: $item(_templateObject730 || (_templateObject730 = _taggedTemplateLiteral38(["designer sweatpants"]))),
      acc1: $item(_templateObject825 || (_templateObject825 = _taggedTemplateLiteral38(["your cowboy boots"]))),
      acc2: $item(_templateObject920 || (_templateObject920 = _taggedTemplateLiteral38(["Brutal brogues"]))),
      acc3: $item(_templateObject1018 || (_templateObject1018 = _taggedTemplateLiteral38(["cursed monkey's paw"]))),
      familiar: $familiar(_templateObject1117 || (_templateObject1117 = _taggedTemplateLiteral38(["Exotic Parrot"]))),
      famequip: $item(_templateObject1218 || (_templateObject1218 = _taggedTemplateLiteral38(["tiny stillsuit"]))),
      modes: {
        parka: "pterodactyl",
        retrocape: ["vampire", "hold"]
      }
    };
  },
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [].concat(_toConsumableArray14(restoreBuffTasks(buffs2)), _toConsumableArray14(commonFamiliarWeightBuffs()), [_objectSpread13(_objectSpread13({}, beachTask($effect(_templateObject1318 || (_templateObject1318 = _taggedTemplateLiteral38(["Hot-Headed"]))))), {}, {
    core: "hard"
  }), beachTask($effect(_templateObject1417 || (_templateObject1417 = _taggedTemplateLiteral38(["Does It Have a Skull In There??"])))), asdonTask("Safely"), {
    name: "Extinguisher",
    completed: function() {
      return have($effect(_templateObject1516 || (_templateObject1516 = _taggedTemplateLiteral38(["Fireproof Foam Suit"]))));
    },
    ready: function() {
      return get("_saberForceUses") < 5;
    },
    do: function() {
      (0, import_kolmafia42.adv1)($location(_templateObject1616 || (_templateObject1616 = _taggedTemplateLiteral38(["The Dire Warren"]))), -1, ""), (0, import_kolmafia42.handlingChoice)() && (0, import_kolmafia42.runChoice)(-1);
    },
    choices: _defineProperty18({}, 1387, 3),
    outfit: function() {
      return uniform({
        changes: {
          familiar: $familiar.none,
          famequip: $item.none,
          weapon: $item(_templateObject1716 || (_templateObject1716 = _taggedTemplateLiteral38(["Fourth of May Cosplay Saber"]))),
          offhand: $item(_templateObject1816 || (_templateObject1816 = _taggedTemplateLiteral38(["industrial fire extinguisher"])))
        }
      });
    },
    combat: new CSStrategy(function() {
      return Macro2.skill($skill(_templateObject1915 || (_templateObject1915 = _taggedTemplateLiteral38(["Fire Extinguisher: Foam Yourself"])))).skill($skill(_templateObject2014 || (_templateObject2014 = _taggedTemplateLiteral38(["Use the Force"]))));
    }),
    post: function() {
      return examine($item(_templateObject2119 || (_templateObject2119 = _taggedTemplateLiteral38(["industrial fire extinguisher"]))));
    }
  }, {
    core: "hard",
    name: "Pale Horse",
    completed: function() {
      return Horsery_exports.current() === "pale";
    },
    do: function() {
      return Horsery_exports.changeHorse("pale");
    }
  }, {
    name: "Deep Dark Visions",
    completed: function() {
      return have($effect(_templateObject2218 || (_templateObject2218 = _taggedTemplateLiteral38(["Visions of the Deep Dark Deeps"]))), 20);
    },
    do: function() {
      for (; (0, import_kolmafia42.myHp)() < (0, import_kolmafia42.myMaxhp)(); )
        ensureMp(20), (0, import_kolmafia42.useSkill)(1, $skill(_templateObject2316 || (_templateObject2316 = _taggedTemplateLiteral38(["Cannelloni Cocoon"]))));
      ensureMp(100), (0, import_kolmafia42.useSkill)(1, $skill(_templateObject2414 || (_templateObject2414 = _taggedTemplateLiteral38(["Deep Dark Visions"]))));
    },
    outfit: {
      hat: $item(_templateObject2513 || (_templateObject2513 = _taggedTemplateLiteral38(["Daylight Shavings Helmet"]))),
      shirt: $items(_templateObject2613 || (_templateObject2613 = _taggedTemplateLiteral38(["Jurassic Parka, denim jacket"]))),
      back: $item(_templateObject2713 || (_templateObject2713 = _taggedTemplateLiteral38(["unwrapped knock-off retro superhero cape"]))),
      weapon: $item(_templateObject2812 || (_templateObject2812 = _taggedTemplateLiteral38(["industrial fire extinguisher"]))),
      offhand: $item(_templateObject2912 || (_templateObject2912 = _taggedTemplateLiteral38(["Fourth of May Cosplay Saber"]))),
      pants: $item(_templateObject3012 || (_templateObject3012 = _taggedTemplateLiteral38(["Cargo Cultist Shorts"]))),
      acc1: $item(_templateObject3118 || (_templateObject3118 = _taggedTemplateLiteral38(["your cowboy boots"]))),
      acc2: $item(_templateObject3216 || (_templateObject3216 = _taggedTemplateLiteral38(["Brutal brogues"]))),
      acc3: $item(_templateObject3313 || (_templateObject3313 = _taggedTemplateLiteral38(["cursed monkey's paw"]))),
      familiar: $familiar(_templateObject3411 || (_templateObject3411 = _taggedTemplateLiteral38(["Exotic Parrot"]))),
      famequip: $item(_templateObject3510 || (_templateObject3510 = _taggedTemplateLiteral38(["tiny stillsuit"]))),
      modes: {
        parka: "ghostasaurus",
        retrocape: ["vampire", "hold"]
      }
    }
  }, {
    name: "Meteorite Guard",
    completed: function() {
      return have($item(_templateObject3610 || (_templateObject3610 = _taggedTemplateLiteral38(["meteorite guard"]))));
    },
    ready: function() {
      return have($item(_templateObject3710 || (_templateObject3710 = _taggedTemplateLiteral38(["metal meteoroid"]))));
    },
    do: function() {
      return (0, import_kolmafia42.create)($item(_templateObject389 || (_templateObject389 = _taggedTemplateLiteral38(["meteorite guard"]))));
    }
  }])
}, hotres_default = HotRes;

// src/level.ts
init_kolmafia_polyfill();
var import_kolmafia43 = require("kolmafia");
var _templateObject161, _templateObject280, _templateObject361, _templateObject448, _templateObject537, _templateObject631, _templateObject731, _templateObject826, _templateObject921, _templateObject1019, _templateObject1118, _templateObject1219, _templateObject1319, _templateObject1418, _templateObject1517, _templateObject1617, _templateObject1717, _templateObject1817, _templateObject1916, _templateObject2015, _templateObject2120, _templateObject2219, _templateObject2317, _templateObject2415, _templateObject2514, _templateObject2614, _templateObject2714, _templateObject2813, _templateObject2913, _templateObject3013, _templateObject3119, _templateObject3217, _templateObject3314, _templateObject3412, _templateObject3511, _templateObject3611, _templateObject3711, _templateObject3810, _templateObject399, _templateObject408, _templateObject4115, _templateObject4213, _templateObject4311, _templateObject449, _templateObject457, _templateObject467, _templateObject477, _templateObject487, _templateObject498, _templateObject508, _templateObject5114, _templateObject5211, _templateObject538, _templateObject545, _templateObject555, _templateObject565, _templateObject575, _templateObject585, _templateObject595, _templateObject605, _templateObject6112, _templateObject6210, _templateObject634, _templateObject644, _templateObject654, _templateObject664, _templateObject674, _templateObject684, _templateObject694, _templateObject704, _templateObject7111, _templateObject7210, _templateObject734, _templateObject743, _templateObject753, _templateObject763, _templateObject773, _templateObject783, _templateObject793, _templateObject803, _templateObject8110, _templateObject827, _templateObject832, _templateObject842, _templateObject852, _templateObject862, _templateObject872, _templateObject882, _templateObject892, _templateObject902, _templateObject9110, _templateObject922, _templateObject932, _templateObject942, _templateObject952, _templateObject962, _templateObject972, _templateObject982, _templateObject992, _templateObject1002, _templateObject10110, _templateObject1022, _templateObject1032, _templateObject1042, _templateObject1052, _templateObject1062, _templateObject1072, _templateObject1082, _templateObject1092, _templateObject1102, _templateObject1119, _templateObject1122, _templateObject1132, _templateObject1142, _templateObject1152, _templateObject1162, _templateObject1172, _templateObject1182, _templateObject1192, _templateObject1202, _templateObject12110, _templateObject1222, _templateObject1232, _templateObject1242, _templateObject1252, _templateObject1262, _templateObject1272, _templateObject1282, _templateObject1292, _templateObject1302, _templateObject13110, _templateObject1322, _templateObject1332, _templateObject1342, _templateObject1352, _templateObject1362, _templateObject1372, _templateObject1382, _templateObject1392, _templateObject1402, _templateObject1419, _templateObject1422, _templateObject1432, _templateObject1442, _templateObject1452, _templateObject1462, _templateObject1472, _templateObject1482, _templateObject1492, _templateObject1502, _templateObject1518, _templateObject1522, _templateObject1532, _templateObject1542, _templateObject1552, _templateObject1562, _templateObject1572, _templateObject1582, _templateObject1592, _templateObject1602, _templateObject1618, _templateObject1622, _templateObject1632, _templateObject1642, _templateObject1652, _templateObject1662, _templateObject1672, _templateObject1682, _templateObject1692, _templateObject170, _templateObject171, _templateObject1722, _templateObject1732, _templateObject1742, _templateObject1752, _templateObject1762, _templateObject1772, _templateObject1782, _templateObject1792, _templateObject180, _templateObject181, _templateObject1822, _templateObject1832, _templateObject1842, _templateObject1852, _templateObject1862, _templateObject1872, _templateObject1882;
function ownKeys14(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread14(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys14(Object(source), !0).forEach(function(key) {
      _defineProperty19(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys14(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty19(obj, key, value) {
  return key = _toPropertyKey24(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey24(arg) {
  var key = _toPrimitive24(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive24(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral39(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function _toConsumableArray15(arr) {
  return _arrayWithoutHoles15(arr) || _iterableToArray15(arr) || _unsupportedIterableToArray26(arr) || _nonIterableSpread15();
}
function _nonIterableSpread15() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray26(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray26(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray26(o, minLen);
  }
}
function _iterableToArray15(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles15(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray26(arr);
}
function _arrayLikeToArray26(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
var levellingComplete = get("csServicesPerformed").split(",").length > 1, lovePotionConsidered = !1, queenPrep = !1, CastSkills = [].concat(_toConsumableArray15($skills(_templateObject161 || (_templateObject161 = _taggedTemplateLiteral39(["Advanced Saucecrafting, Advanced Cocktailcrafting, Acquire Rhinestones, Prevent Scurvy and Sobriety, Stevedave's Shanty of Superiority, Fat Leon's Phat Loot Lyric, Paul's Passionate Pop Song, Leash of Linguini, Blood Bond, Blood Bubble, Song of Bravado, Get Big, Mathematical Precision, Ruthless Efficiency, Carol of the Bulls, Rage of the Reindeer, Disco Aerobics, Manicotti Meditation, Moxie of the Mariachi, Patience of the Tortoise, Sauce Contemplation, Seal Clubbing Frenzy, Bend Hell, Astral Shell, Elemental Saucesphere, Scarysauce"])))), [byStat({
  Mysticality: $skill(_templateObject280 || (_templateObject280 = _taggedTemplateLiteral39(["The Magical Mojomuscular Melody"]))),
  Muscle: $skill(_templateObject361 || (_templateObject361 = _taggedTemplateLiteral39(["The Power Ballad of the Arrowsmith"]))),
  Moxie: $skill(_templateObject448 || (_templateObject448 = _taggedTemplateLiteral39(["The Moxious Madrigal"])))
})]).map(function(s) {
  return {
    name: s.name,
    do: function() {
      (0, import_kolmafia43.useSkill)(s);
    },
    completed: function() {
      return s.buff ? have((0, import_kolmafia43.toEffect)(s)) : s.timescast >= s.dailylimit;
    },
    ready: function() {
      return (0, import_kolmafia43.myMp)() >= (0, import_kolmafia43.mpCost)(s) && !queenPrep;
    },
    outfit: function() {
      return uniform({
        changes: {
          offhand: $item(_templateObject537 || (_templateObject537 = _taggedTemplateLiteral39(["April Shower Thoughts shield"])))
        }
      });
    }
  };
}), generalStoreItem = byStat({
  Muscle: $item(_templateObject631 || (_templateObject631 = _taggedTemplateLiteral39(["Ben-Gal\u2122 Balm"]))),
  Mysticality: $item(_templateObject731 || (_templateObject731 = _taggedTemplateLiteral39(["glittery mascara"]))),
  Moxie: $item(_templateObject826 || (_templateObject826 = _taggedTemplateLiteral39(["hair spray"])))
}), _byStat = byStat({
  Mysticality: {
    sauceFruit: $item(_templateObject921 || (_templateObject921 = _taggedTemplateLiteral39(["grapefruit"]))),
    saucePotion: $item(_templateObject1019 || (_templateObject1019 = _taggedTemplateLiteral39(["ointment of the occult"]))),
    sauceEffect: $effect(_templateObject1118 || (_templateObject1118 = _taggedTemplateLiteral39(["Mystically Oiled"])))
  },
  Muscle: {
    sauceFruit: $item(_templateObject1219 || (_templateObject1219 = _taggedTemplateLiteral39(["lemon"]))),
    saucePotion: $item(_templateObject1319 || (_templateObject1319 = _taggedTemplateLiteral39(["philter of phorce"]))),
    sauceEffect: $effect(_templateObject1418 || (_templateObject1418 = _taggedTemplateLiteral39(["Phorcefullness"])))
  },
  Moxie: {
    sauceFruit: $item(_templateObject1517 || (_templateObject1517 = _taggedTemplateLiteral39(["olive"]))),
    saucePotion: $item(_templateObject1617 || (_templateObject1617 = _taggedTemplateLiteral39(["serum of sarcasm"]))),
    sauceEffect: $effect(_templateObject1717 || (_templateObject1717 = _taggedTemplateLiteral39(["Superhuman Sarcasm"])))
  }
}), saucePotion = _byStat.saucePotion, sauceFruit = _byStat.sauceFruit, sauceEffect = _byStat.sauceEffect, lovePotion = $item(_templateObject1817 || (_templateObject1817 = _taggedTemplateLiteral39(["Love Potion #XYZ"]))), loveEffect = $effect(_templateObject1916 || (_templateObject1916 = _taggedTemplateLiteral39(["Tainted Love Potion"]))), Level = {
  type: "MISC",
  name: "Level",
  completed: function() {
    return levellingComplete;
  },
  tasks: [{
    name: "Fold Shirt",
    completed: function() {
      return have($item(_templateObject2015 || (_templateObject2015 = _taggedTemplateLiteral39(["makeshift garbage shirt"]))));
    },
    do: function() {
      return (0, import_kolmafia43.cliExecute)("fold makeshift garbage shirt");
    }
  }, buskTask($item(_templateObject2120 || (_templateObject2120 = _taggedTemplateLiteral39(["norwhal helmet"]))), $item.none, $item(_templateObject2219 || (_templateObject2219 = _taggedTemplateLiteral39(["repaid diaper"]))), 0), buskTask($item(_templateObject2317 || (_templateObject2317 = _taggedTemplateLiteral39(["Apriling band helmet"]))), $item(_templateObject2415 || (_templateObject2415 = _taggedTemplateLiteral39(["makeshift garbage shirt"]))), $item(_templateObject2514 || (_templateObject2514 = _taggedTemplateLiteral39(["union scalemail pants"]))), 1), buskTask($item(_templateObject2614 || (_templateObject2614 = _taggedTemplateLiteral39(["coconut shell"]))), $item(_templateObject2714 || (_templateObject2714 = _taggedTemplateLiteral39(["fresh coat of paint"]))), $item.none, 2), buskTask($item(_templateObject2813 || (_templateObject2813 = _taggedTemplateLiteral39(["norwhal helmet"]))), $item(_templateObject2913 || (_templateObject2913 = _taggedTemplateLiteral39(["fresh coat of paint"]))), $item(_templateObject3013 || (_templateObject3013 = _taggedTemplateLiteral39(["union scalemail pants"]))), 3), buskTask($item.none, $item.none, $item(_templateObject3119 || (_templateObject3119 = _taggedTemplateLiteral39(["repaid diaper"]))), 4), {
    name: "Ember",
    ready: function() {
      return get("_beretBuskingUses") >= 5 && get("_loveTunnelUsed") && have($effect(_templateObject3217 || (_templateObject3217 = _taggedTemplateLiteral39(["Entauntauned"]))));
    },
    completed: function() {
      return availableEmbers() <= 0;
    },
    do: function() {
      (0, import_kolmafia43.buy)($coinmaster(_templateObject3314 || (_templateObject3314 = _taggedTemplateLiteral39(["Sept-Ember Censer"]))), 1, $item(_templateObject3412 || (_templateObject3412 = _taggedTemplateLiteral39(["Mmm-brr! brand mouthwash"])))), (0, import_kolmafia43.use)($item(_templateObject3511 || (_templateObject3511 = _taggedTemplateLiteral39(["Mmm-brr! brand mouthwash"]))));
    },
    outfit: _objectSpread14({
      hat: $item(_templateObject3611 || (_templateObject3611 = _taggedTemplateLiteral39(["prismatic beret"]))),
      weapon: $item(_templateObject3711 || (_templateObject3711 = _taggedTemplateLiteral39(["McHugeLarge right pole"]))),
      offhand: $item(_templateObject3810 || (_templateObject3810 = _taggedTemplateLiteral39(["McHugeLarge left pole"]))),
      back: $item(_templateObject399 || (_templateObject399 = _taggedTemplateLiteral39(["McHugeLarge duffel bag"]))),
      shirt: $item(_templateObject408 || (_templateObject408 = _taggedTemplateLiteral39(["Jurassic Parka"]))),
      modes: {
        parka: "kachungasaur"
      },
      pants: $item(_templateObject4115 || (_templateObject4115 = _taggedTemplateLiteral39(["repaid diaper"]))),
      acc1: $item(_templateObject4213 || (_templateObject4213 = _taggedTemplateLiteral39(["your cowboy boots"]))),
      acc2: $item(_templateObject4311 || (_templateObject4311 = _taggedTemplateLiteral39(["McHugeLarge left ski"]))),
      acc3: $item(_templateObject449 || (_templateObject449 = _taggedTemplateLiteral39(["McHugeLarge right ski"]))),
      familiar: $familiar(_templateObject457 || (_templateObject457 = _taggedTemplateLiteral39(["Cooler Yeti"]))),
      famequip: $item(_templateObject467 || (_templateObject467 = _taggedTemplateLiteral39(["tiny stillsuit"]))),
      beforeDress: [equipBluePlate]
    }, byStat({
      Muscle: {
        shirt: $item(_templateObject477 || (_templateObject477 = _taggedTemplateLiteral39(["LOV Eardigan"])))
      },
      Moxie: {
        acc1: $item(_templateObject487 || (_templateObject487 = _taggedTemplateLiteral39(["LOV Earrings"])))
      },
      Mysticality: {
        back: $item(_templateObject498 || (_templateObject498 = _taggedTemplateLiteral39(["LOV Epaulettes"])))
      }
    }))
  }, {
    name: "Slay Camel",
    completed: function() {
      return get("_entauntaunedToday");
    },
    ready: function() {
      return have($item(_templateObject508 || (_templateObject508 = _taggedTemplateLiteral39(["blue plate"]))));
    },
    outfit: function() {
      return {
        familiar: $familiar(_templateObject5114 || (_templateObject5114 = _taggedTemplateLiteral39(["Melodramedary"]))),
        weapon: $item(_templateObject5211 || (_templateObject5211 = _taggedTemplateLiteral39(["Fourth of May Cosplay Saber"])))
      };
    },
    do: function() {
      (0, import_kolmafia43.visitUrl)("main.php?action=camel", !1), (0, import_kolmafia43.runChoice)(1);
    }
  }, innerElf(), {
    name: "That's Just Cloud Talk, Man",
    completed: function() {
      return CampAway_exports.getCloudBuffsToday() > 0;
    },
    do: function() {
      return CampAway_exports.gaze();
    }
  }, {
    name: SYNTH_EFFECT.name,
    completed: function() {
      return have(SYNTH_EFFECT);
    },
    do: synthExp
  }, {
    name: "shower",
    completed: function() {
      return get("_aprilShower");
    },
    do: function() {
      return (0, import_kolmafia43.cliExecute)("shower ".concat((0, import_kolmafia43.myPrimestat)()));
    }
  }, {
    name: "Ten-Percent Bonus",
    completed: function() {
      return !have($item(_templateObject538 || (_templateObject538 = _taggedTemplateLiteral39(["a ten-percent bonus"]))));
    },
    outfit: function() {
      return uniform({
        changes: {
          offhand: $item(_templateObject545 || (_templateObject545 = _taggedTemplateLiteral39(["familiar scrapbook"])))
        }
      });
    },
    effects: byStat({
      Mysticality: $effects(_templateObject555 || (_templateObject555 = _taggedTemplateLiteral39(["Inscrutable Gaze"]))),
      default: []
    }),
    do: function() {
      return (0, import_kolmafia43.use)(1, $item(_templateObject565 || (_templateObject565 = _taggedTemplateLiteral39(["a ten-percent bonus"]))));
    }
  }, {
    name: "Bastille",
    completed: function() {
      return get("_bastilleGames") > 0;
    },
    do: function() {
      return (0, import_kolmafia43.cliExecute)("bastille ".concat((0, import_kolmafia43.myPrimestat)(), " brutalist"));
    }
  }, {
    name: "Get Love Potion",
    completed: function() {
      return have(lovePotion) || have(loveEffect);
    },
    do: function() {
      (0, import_kolmafia43.useSkill)(1, $skill(_templateObject575 || (_templateObject575 = _taggedTemplateLiteral39(["Love Mixology"])))), lovePotionConsidered = !1;
    }
  }, {
    name: "Consider Love Potion",
    ready: function() {
      return have(lovePotion);
    },
    completed: function() {
      return lovePotionConsidered || have(loveEffect);
    },
    do: function() {
      (0, import_kolmafia43.visitUrl)("desc_effect.php?whicheffect=".concat(loveEffect.descid)), lovePotionConsidered = !0, (0, import_kolmafia43.numericModifier)(loveEffect, (0, import_kolmafia43.myPrimestat)().toString()) > 10 && import_kolmafia43.Stat.all().every(function(stat) {
        return (0, import_kolmafia43.numericModifier)(loveEffect, stat.toString()) > -30;
      }) && (0, import_kolmafia43.numericModifier)(loveEffect, "Maximum HP Percent") > -1e-3 && (0, import_kolmafia43.use)(1, lovePotion);
    }
  }, favouriteBirdTask("".concat((0, import_kolmafia43.myPrimestat)().toString(), " Percent")), {
    name: "Vaccine",
    completed: function() {
      return get("_spacegateVaccine");
    },
    ready: function() {
      return get("spacegateVaccine2") && get("spacegateAlways");
    },
    do: function() {
      return (0, import_kolmafia43.cliExecute)("spacegate vaccine 2");
    }
  }, {
    name: "Boxing Daybuff",
    completed: function() {
      return get("_daycareSpa");
    },
    do: function() {
      return (0, import_kolmafia43.cliExecute)("daycare ".concat((0, import_kolmafia43.myPrimestat)().toString().toLowerCase()));
    }
  }, beachTask($effect(_templateObject585 || (_templateObject585 = _taggedTemplateLiteral39(["You Learned Something Maybe!"])))), beachTask($effect(_templateObject595 || (_templateObject595 = _taggedTemplateLiteral39(["We're All Made of Starfish"])))), beachTask($effect(_templateObject605 || (_templateObject605 = _taggedTemplateLiteral39(["Lack of Body-Building"])))), {
    name: "Smile of Lyle",
    completed: function() {
      return get("_lyleFavored");
    },
    do: function() {
      return (0, import_kolmafia43.cliExecute)("monorail buff");
    }
  }, {
    name: "Telescope",
    completed: function() {
      return get("telescopeLookedHigh");
    },
    do: function() {
      return (0, import_kolmafia43.cliExecute)("telescope look high");
    }
  }, {
    name: "Cross Streams",
    completed: function() {
      return get("_streamsCrossed");
    },
    do: function() {
      return (0, import_kolmafia43.cliExecute)("crossstreams");
    }
  }, {
    name: "Buy General Store Potion",
    completed: function() {
      return have(generalStoreItem) || have((0, import_kolmafia43.effectModifier)(generalStoreItem, "Effect"));
    },
    do: function() {
      return (0, import_kolmafia43.buy)(1, generalStoreItem);
    }
  }, potionTask(generalStoreItem), {
    name: "Triple-Sized",
    completed: function() {
      return have($effect(_templateObject6112 || (_templateObject6112 = _taggedTemplateLiteral39(["Triple-Sized"]))));
    },
    do: function() {
      return (0, import_kolmafia43.useSkill)($skill(_templateObject6210 || (_templateObject6210 = _taggedTemplateLiteral39(["CHEAT CODE: Triple Size"]))), 1);
    },
    outfit: {
      acc3: $item(_templateObject634 || (_templateObject634 = _taggedTemplateLiteral39(["Powerful Glove"])))
    }
  }, {
    name: "Feel Excited",
    completed: function() {
      return get("_feelExcitementUsed") > 0;
    },
    do: function() {
      return (0, import_kolmafia43.useSkill)($skill(_templateObject644 || (_templateObject644 = _taggedTemplateLiteral39(["Feel Excitement"]))));
    }
  }].concat(_toConsumableArray15($items(_templateObject654 || (_templateObject654 = _taggedTemplateLiteral39(["votive of confidence, natural magick candle, MayDay\u2122 supply package, Napalm In The Morning\u2122 candle"]))).map(potionTask)), [{
    name: "Acquire Blue Rocket",
    completed: function() {
      return have($effect(_templateObject664 || (_templateObject664 = _taggedTemplateLiteral39(["Glowing Blue"])))) || have($item(_templateObject674 || (_templateObject674 = _taggedTemplateLiteral39(["blue rocket"]))));
    },
    do: function() {
      (0, import_kolmafia43.visitUrl)("clan_viplounge.php?action=fwshop&whichfloor=2"), (0, import_kolmafia43.buy)(1, $item(_templateObject684 || (_templateObject684 = _taggedTemplateLiteral39(["blue rocket"]))));
    }
  }, {
    name: "Acquire Casting Items",
    completed: function() {
      return $items(_templateObject694 || (_templateObject694 = _taggedTemplateLiteral39(["turtle totem, saucepan"]))).every(function(i) {
        return have(i);
      });
    },
    do: function() {
      return $items(_templateObject704 || (_templateObject704 = _taggedTemplateLiteral39(["turtle totem, saucepan"]))).forEach(function(i) {
        return !have(i) && (0, import_kolmafia43.cliExecute)("acquire ".concat(i));
      });
    }
  }], _toConsumableArray15(CastSkills), [_objectSpread14(_objectSpread14({}, restore([])), {}, {
    ready: function() {
      return !queenPrep;
    },
    completed: function() {
      return CastSkills.every(function(_ref) {
        var completed = _ref.completed;
        return completed();
      });
    },
    outfit: {
      offhand: $items(_templateObject7111 || (_templateObject7111 = _taggedTemplateLiteral39(["Abracandalabra, august scepter"])))
    }
  })], _toConsumableArray15(restoreBuffTasks(byStat({
    Mysticality: $effects(_templateObject7210 || (_templateObject7210 = _taggedTemplateLiteral39(["Inscrutable Gaze"]))),
    Moxie: $effects(_templateObject734 || (_templateObject734 = _taggedTemplateLiteral39(["Quiet Desperation"]))),
    Muscle: $effects(_templateObject743 || (_templateObject743 = _taggedTemplateLiteral39(["Quiet Determination"])))
  }))), _toConsumableArray15(restoreBuffTasks($effects(_templateObject753 || (_templateObject753 = _taggedTemplateLiteral39(["Empathy"]))))), [
    skillTask({
      skill: $skill(_templateObject763 || (_templateObject763 = _taggedTemplateLiteral39(["Empathy of the Newt"]))),
      effect: $effect(_templateObject773 || (_templateObject773 = _taggedTemplateLiteral39(["Thoughtful Empathy"])))
    }, !0),
    potionTask($item(_templateObject783 || (_templateObject783 = _taggedTemplateLiteral39(["green candy heart"])))),
    {
      name: "Witchess",
      completed: function() {
        return get("_witchessBuff");
      },
      do: function() {
        return (0, import_kolmafia43.cliExecute)("witchess");
      }
    },
    beachTask($effect(_templateObject793 || (_templateObject793 = _taggedTemplateLiteral39(["Do I Know You From Somewhere?"])))),
    {
      name: "Get Range",
      completed: function() {
        return get("hasRange");
      },
      do: function() {
        have($item(_templateObject803 || (_templateObject803 = _taggedTemplateLiteral39(["Dramatic\u2122 range"])))) || (0, import_kolmafia43.buy)(1, $item(_templateObject8110 || (_templateObject8110 = _taggedTemplateLiteral39(["Dramatic\u2122 range"])))), (0, import_kolmafia43.use)(1, $item(_templateObject827 || (_templateObject827 = _taggedTemplateLiteral39(["Dramatic\u2122 range"]))));
      }
    },
    {
      name: "Make & Use Sauce Potion",
      completed: function() {
        return have(sauceEffect);
      },
      ready: function() {
        return have(sauceFruit);
      },
      do: function() {
        have(saucePotion) || (0, import_kolmafia43.create)(1, saucePotion), have(saucePotion) && (0, import_kolmafia43.use)(1, saucePotion);
      }
    },
    {
      name: "Set Snojo",
      completed: function() {
        return !!get("snojoSetting");
      },
      do: function() {
        (0, import_kolmafia43.visitUrl)("place.php?whichplace=snojo&action=snojo_controller"), (0, import_kolmafia43.runChoice)(3);
      }
    },
    {
      name: "Holiday Yoked, Giant Growth, and Blue Rocket",
      core: "hard",
      completed: function() {
        return have($effect(_templateObject832 || (_templateObject832 = _taggedTemplateLiteral39(["Holiday Yoked"]))));
      },
      ready: function() {
        return have($item(_templateObject842 || (_templateObject842 = _taggedTemplateLiteral39(["green mana"])))) && get("_snojoFreeFights") < 10;
      },
      do: $location(_templateObject852 || (_templateObject852 = _taggedTemplateLiteral39(["The X-32-F Combat Training Snowman"]))),
      outfit: function() {
        return uniform({
          changes: {
            familiar: $familiar(_templateObject862 || (_templateObject862 = _taggedTemplateLiteral39(["Ghost of Crimbo Carols"]))),
            famequip: $item.none
          }
        });
      },
      combat: new CSStrategy(function() {
        return Macro2.externalIf(!have($effect(_templateObject872 || (_templateObject872 = _taggedTemplateLiteral39(["Cosmic Ball in the Air"])))), Macro2.trySkill($skill(_templateObject882 || (_templateObject882 = _taggedTemplateLiteral39(["Bowl Straight Up"]))))).tryItem($item(_templateObject892 || (_templateObject892 = _taggedTemplateLiteral39(["blue rocket"])))).trySkill($skill(_templateObject902 || (_templateObject902 = _taggedTemplateLiteral39(["Giant Growth"])))).attack().repeat();
      })
    },
    {
      name: "Giant Growth and Blue Rocket",
      core: "soft",
      completed: function() {
        return have($effect(_templateObject9110 || (_templateObject9110 = _taggedTemplateLiteral39(["Giant Growth"]))));
      },
      ready: function() {
        return have($item(_templateObject922 || (_templateObject922 = _taggedTemplateLiteral39(["green mana"])))) && get("_snojoFreeFights") < 10;
      },
      do: $location(_templateObject932 || (_templateObject932 = _taggedTemplateLiteral39(["The X-32-F Combat Training Snowman"]))),
      outfit: function() {
        return uniform();
      },
      combat: new CSStrategy(function() {
        return Macro2.externalIf(!have($effect(_templateObject942 || (_templateObject942 = _taggedTemplateLiteral39(["Cosmic Ball in the Air"])))), Macro2.trySkill($skill(_templateObject952 || (_templateObject952 = _taggedTemplateLiteral39(["Bowl Straight Up"]))))).tryItem($item(_templateObject962 || (_templateObject962 = _taggedTemplateLiteral39(["blue rocket"])))).trySkill($skill(_templateObject972 || (_templateObject972 = _taggedTemplateLiteral39(["Giant Growth"])))).attack().repeat();
      })
    },
    {
      name: "Witch",
      completed: function() {
        return have($item(_templateObject982 || (_templateObject982 = _taggedTemplateLiteral39(["battle broom"]))));
      },
      outfit: function() {
        return uniform({
          changes: {
            weapon: byStat({
              default: $item(_templateObject992 || (_templateObject992 = _taggedTemplateLiteral39(["Fourth of May Cosplay Saber"]))),
              Muscle: $item(_templateObject1002 || (_templateObject1002 = _taggedTemplateLiteral39(["June cleaver"])))
            }),
            shirt: $item(_templateObject10110 || (_templateObject10110 = _taggedTemplateLiteral39(["makeshift garbage shirt"]))),
            offhand: $item(_templateObject1022 || (_templateObject1022 = _taggedTemplateLiteral39(["familiar scrapbook"]))),
            familiar: $familiar(_templateObject1032 || (_templateObject1032 = _taggedTemplateLiteral39(["Shorter-Order Cook"]))),
            famequip: $item(_templateObject1042 || (_templateObject1042 = _taggedTemplateLiteral39(["toy Cupid bow"])))
          }
        });
      },
      prepare: function() {
        (0, import_kolmafia43.useSkill)($skill(_templateObject1052 || (_templateObject1052 = _taggedTemplateLiteral39(["Cannelloni Cocoon"]))));
      },
      ready: function() {
        return Witchess_exports.fightsDone() < 5;
      },
      do: function() {
        return Witchess_exports.fightPiece($monster(_templateObject1062 || (_templateObject1062 = _taggedTemplateLiteral39(["Witchess Witch"]))));
      },
      combat: new CSStrategy(function() {
        return Macro2.delevel(!0).attack().repeat();
      })
    },
    {
      name: "King",
      completed: function() {
        return have($item(_templateObject1072 || (_templateObject1072 = _taggedTemplateLiteral39(["dented scepter"]))));
      },
      do: function() {
        return Witchess_exports.fightPiece($monster(_templateObject1082 || (_templateObject1082 = _taggedTemplateLiteral39(["Witchess King"]))));
      },
      ready: function() {
        return Witchess_exports.fightsDone() < 5;
      },
      outfit: function() {
        return uniform({
          changes: {
            weapon: byStat({
              default: $item(_templateObject1092 || (_templateObject1092 = _taggedTemplateLiteral39(["Fourth of May Cosplay Saber"]))),
              Muscle: $item(_templateObject1102 || (_templateObject1102 = _taggedTemplateLiteral39(["June cleaver"])))
            }),
            shirt: $item(_templateObject1119 || (_templateObject1119 = _taggedTemplateLiteral39(["makeshift garbage shirt"]))),
            offhand: $item(_templateObject1122 || (_templateObject1122 = _taggedTemplateLiteral39(["familiar scrapbook"]))),
            familiar: $familiar(_templateObject1132 || (_templateObject1132 = _taggedTemplateLiteral39(["Shorter-Order Cook"]))),
            famequip: $item(_templateObject1142 || (_templateObject1142 = _taggedTemplateLiteral39(["toy Cupid bow"])))
          }
        });
      },
      combat: new CSStrategy(function() {
        return Macro2.attack().repeat();
      }),
      prepare: function() {
        (0, import_kolmafia43.useSkill)($skill(_templateObject1152 || (_templateObject1152 = _taggedTemplateLiteral39(["Cannelloni Cocoon"]))));
      }
    },
    {
      name: "Prepare for Queen",
      completed: function() {
        return have($item(_templateObject1162 || (_templateObject1162 = _taggedTemplateLiteral39(["very pointy crown"]))));
      },
      ready: function() {
        return !have($effect(_templateObject1172 || (_templateObject1172 = _taggedTemplateLiteral39(["Psalm of Pointiness"])))) || (0, import_kolmafia43.myPrimestat)() === $stat(_templateObject1182 || (_templateObject1182 = _taggedTemplateLiteral39(["Moxie"]))) && (0, import_kolmafia43.myMp)() >= (0, import_kolmafia43.mpCost)($skill(_templateObject1192 || (_templateObject1192 = _taggedTemplateLiteral39(["Summon Love Song"]))));
      },
      do: function() {
        for ((0, import_kolmafia43.useSkill)($skill(_templateObject1202 || (_templateObject1202 = _taggedTemplateLiteral39(["Cannelloni Cocoon"])))), have($effect(_templateObject12110 || (_templateObject12110 = _taggedTemplateLiteral39(["Psalm of Pointiness"])))) || (getActiveSongs().length >= 4 && uneffect($effect(_templateObject1222 || (_templateObject1222 = _taggedTemplateLiteral39(["Fat Leon's Phat Loot Lyric"])))), (0, import_kolmafia43.useSkill)($skill(_templateObject1232 || (_templateObject1232 = _taggedTemplateLiteral39(["The Psalm of Pointiness"]))))); (0, import_kolmafia43.myPrimestat)() === $stat(_templateObject1242 || (_templateObject1242 = _taggedTemplateLiteral39(["Moxie"]))) && (0, import_kolmafia43.myMp)() >= (0, import_kolmafia43.mpCost)($skill(_templateObject1252 || (_templateObject1252 = _taggedTemplateLiteral39(["Summon Love Song"])))); )
          (0, import_kolmafia43.useSkill)($skill(_templateObject1262 || (_templateObject1262 = _taggedTemplateLiteral39(["Summon Love Song"]))));
      },
      prepare: function() {
        return queenPrep = !0;
      }
    },
    {
      name: "Queen",
      completed: function() {
        return have($item(_templateObject1272 || (_templateObject1272 = _taggedTemplateLiteral39(["very pointy crown"]))));
      },
      do: function() {
        return Witchess_exports.fightPiece($monster(_templateObject1282 || (_templateObject1282 = _taggedTemplateLiteral39(["Witchess Queen"]))));
      },
      ready: function() {
        return Witchess_exports.fightsDone() < 5;
      },
      outfit: function() {
        return uniform({
          changes: {
            weapon: byStat({
              default: $item(_templateObject1292 || (_templateObject1292 = _taggedTemplateLiteral39(["Fourth of May Cosplay Saber"]))),
              Muscle: $item(_templateObject1302 || (_templateObject1302 = _taggedTemplateLiteral39(["June cleaver"])))
            }),
            shirt: $item(_templateObject13110 || (_templateObject13110 = _taggedTemplateLiteral39(["makeshift garbage shirt"]))),
            offhand: $item(_templateObject1322 || (_templateObject1322 = _taggedTemplateLiteral39(["familiar scrapbook"]))),
            familiar: $familiar(_templateObject1332 || (_templateObject1332 = _taggedTemplateLiteral39(["Shorter-Order Cook"]))),
            famequip: $item(_templateObject1342 || (_templateObject1342 = _taggedTemplateLiteral39(["toy Cupid bow"])))
          }
        });
      },
      combat: new CSStrategy(function() {
        return Macro2.tryBowl().throwLoveSongs().attack().repeat();
      }),
      post: function() {
        queenPrep = !1, uneffect($effect(_templateObject1352 || (_templateObject1352 = _taggedTemplateLiteral39(["Psalm of Pointiness"])))), (0, import_kolmafia43.use)($item(_templateObject1362 || (_templateObject1362 = _taggedTemplateLiteral39(["psychokinetic energy blob"])))), (0, import_kolmafia43.useSkill)($skill(_templateObject1372 || (_templateObject1372 = _taggedTemplateLiteral39(["Fat Leon's Phat Loot Lyric"]))));
      }
    },
    {
      name: "Oliver's Place: Prime Portscan",
      completed: function() {
        return get("_sourceTerminalPortscanUses") > 0;
      },
      do: $location(_templateObject1382 || (_templateObject1382 = _taggedTemplateLiteral39(["An Unusually Quiet Barroom Brawl"]))),
      outfit: function() {
        return uniform({
          changes: _objectSpread14(_objectSpread14({}, have($familiar(_templateObject1392 || (_templateObject1392 = _taggedTemplateLiteral39(["Nanorhino"])))) && get("_nanorhinoCharge") >= 100 ? {
            familiar: $familiar(_templateObject1402 || (_templateObject1402 = _taggedTemplateLiteral39(["Nanorhino"])))
          } : {}), {}, {
            acc3: $item(_templateObject1419 || (_templateObject1419 = _taggedTemplateLiteral39(["Peridot of Peril"])))
          })
        });
      },
      choices: peridotChoice($monster(_templateObject1422 || (_templateObject1422 = _taggedTemplateLiteral39(["goblin flapper"])))),
      combat: new CSStrategy(function() {
        return Macro2.skill($skill(_templateObject1432 || (_templateObject1432 = _taggedTemplateLiteral39(["Portscan"])))).externalIf((0, import_kolmafia43.myFamiliar)() === $familiar(_templateObject1442 || (_templateObject1442 = _taggedTemplateLiteral39(["Nanorhino"]))), Macro2.trySkill(byStat({
          Mysticality: $skill(_templateObject1452 || (_templateObject1452 = _taggedTemplateLiteral39(["Spaghetti Spear"]))),
          Moxie: $skill(_templateObject1462 || (_templateObject1462 = _taggedTemplateLiteral39(["Suckerpunch"]))),
          Muscle: $skill(_templateObject1472 || (_templateObject1472 = _taggedTemplateLiteral39(["Clobber"])))
        }))).trySkill($skill(_templateObject1482 || (_templateObject1482 = _taggedTemplateLiteral39(["Feel Envy"])))).defaultKill();
      }, {
        fightHolidayWanderer: !0
      })
    },
    {
      name: "Oliver's Place: Use Portscan",
      ready: function() {
        return counter_exports.get("Portscan") === 0;
      },
      completed: function() {
        return have($item(_templateObject1492 || (_templateObject1492 = _taggedTemplateLiteral39(["government cheese"]))));
      },
      do: $location(_templateObject1502 || (_templateObject1502 = _taggedTemplateLiteral39(["An Unusually Quiet Barroom Brawl"]))),
      outfit: function() {
        return uniform({
          changes: {
            back: $item(_templateObject1518 || (_templateObject1518 = _taggedTemplateLiteral39(["vampyric cloake"]))),
            acc3: $item(_templateObject1522 || (_templateObject1522 = _taggedTemplateLiteral39(["Lil' Doctor\u2122 bag"])))
          }
        });
      },
      combat: new CSStrategy(function() {
        return Macro2.skill($skill(_templateObject1532 || (_templateObject1532 = _taggedTemplateLiteral39(["Become a Bat"])))).skill($skill(_templateObject1542 || (_templateObject1542 = _taggedTemplateLiteral39(["Otoscope"])))).defaultKill();
      })
    },
    {
      name: "Map Ninja",
      completed: function() {
        return have($item(_templateObject1552 || (_templateObject1552 = _taggedTemplateLiteral39(["li'l ninja costume"]))));
      },
      do: $location(_templateObject1562 || (_templateObject1562 = _taggedTemplateLiteral39(["The Haiku Dungeon"]))),
      choices: peridotChoice($monster(_templateObject1572 || (_templateObject1572 = _taggedTemplateLiteral39(["amateur ninja"])))),
      combat: new CSStrategy(function() {
        return Macro2.if_($monster(_templateObject1582 || (_templateObject1582 = _taggedTemplateLiteral39(["amateur ninja"]))), Macro2.skill($skill(_templateObject1592 || (_templateObject1592 = _taggedTemplateLiteral39(["Chest X-Ray"]))))).abort();
      }),
      outfit: function() {
        return uniform({
          canAttack: !1,
          changes: {
            acc3: $item(_templateObject1602 || (_templateObject1602 = _taggedTemplateLiteral39(["Lil' Doctor\u2122 bag"]))),
            acc2: $item(_templateObject1618 || (_templateObject1618 = _taggedTemplateLiteral39(["Peridot of Peril"])))
          }
        });
      }
    },
    {
      name: "LOV",
      completed: function() {
        return get("_loveTunnelUsed");
      },
      outfit: function() {
        return uniform({
          changes: {
            weapon: byStat({
              Muscle: $item(_templateObject1622 || (_templateObject1622 = _taggedTemplateLiteral39(["June cleaver"]))),
              default: $item(_templateObject1632 || (_templateObject1632 = _taggedTemplateLiteral39(["Fourth of May Cosplay Saber"])))
            }),
            shirt: $item(_templateObject1642 || (_templateObject1642 = _taggedTemplateLiteral39(["makeshift garbage shirt"])))
          },
          canAttack: !1
        });
      },
      do: function() {
        return TunnelOfLove_exports.fightAll(byStat({
          Mysticality: "LOV Epaulettes",
          Muscle: "LOV Eardigan",
          Moxie: "LOV Earring"
        }), "Open Heart Surgery", "LOV Extraterrestrial Chocolate");
      },
      combat: new CSStrategy(function() {
        return Macro2.if_($monster(_templateObject1652 || (_templateObject1652 = _taggedTemplateLiteral39(["LOV Enforcer"]))), Macro2.attack().repeat()).if_($monster(_templateObject1662 || (_templateObject1662 = _taggedTemplateLiteral39(["LOV Engineer"]))), Macro2.candyblast().trySkillRepeat($skill(_templateObject1672 || (_templateObject1672 = _taggedTemplateLiteral39(["Weapon of the Pastalord"]))))).if_($monster(_templateObject1682 || (_templateObject1682 = _taggedTemplateLiteral39(["LOV Equivocator"]))), Macro2.step("pickpocket").delevel().easyFight().candyblast().defaultKill());
      }),
      post: function() {
        (0, import_kolmafia43.use)(1, $item(_templateObject1692 || (_templateObject1692 = _taggedTemplateLiteral39(["LOV Extraterrestrial Chocolate"])))), burnLibrams();
      }
    },
    potionTask(byStat({
      Muscle: $item(_templateObject170 || (_templateObject170 = _taggedTemplateLiteral39(["LOV Elixir #3"]))),
      Mysticality: $item(_templateObject171 || (_templateObject171 = _taggedTemplateLiteral39(["LOV Elixir #6"]))),
      Moxie: $item(_templateObject1722 || (_templateObject1722 = _taggedTemplateLiteral39(["LOV Elixir #9"])))
    })),
    {
      name: "Post-Snojo Hottub",
      completed: function() {
        return $effects(_templateObject1732 || (_templateObject1732 = _taggedTemplateLiteral39(["Snowballed, Half-Blooded, Half-Drained, Bruised, Relaxed Muscles, Hypnotized, Bad Haircut"]))).every(function(effect) {
          return !have(effect);
        });
      },
      do: function() {
        return (0, import_kolmafia43.cliExecute)("hottub");
      }
    },
    {
      name: "Tentacle",
      completed: function() {
        return get("_eldritchHorrorEvoked");
      },
      do: function() {
        return withProperties({
          autoAbortThreshold: -0.05,
          hpAutoRecoveryTarget: -0.05
        }, function() {
          try {
            (0, import_kolmafia43.useSkill)($skill(_templateObject1742 || (_templateObject1742 = _taggedTemplateLiteral39(["Evoke Eldritch Horror"])))), (0, import_kolmafia43.runCombat)();
          } catch (e) {
            (0, import_kolmafia43.print)("".concat(e));
          } finally {
            (have($effect(_templateObject1752 || (_templateObject1752 = _taggedTemplateLiteral39(["Beaten Up"])))) || (0, import_kolmafia43.myHp)() === 0 || !get("_lastCombatWon")) && (0, import_kolmafia43.cliExecute)("hottub");
          }
        });
      },
      outfit: function() {
        return uniform();
      },
      combat: new CSStrategy(function() {
        return Macro2.delevel().candyblast().defaultKill();
      })
    },
    {
      name: "God Lobster",
      completed: function() {
        return get("_godLobsterFights") >= 3;
      },
      do: function() {
        (0, import_kolmafia43.visitUrl)("main.php?fightgodlobster=1"), (0, import_kolmafia43.runCombat)(), (0, import_kolmafia43.visitUrl)("choice.php"), (0, import_kolmafia43.runChoice)(-1);
      },
      outfit: function() {
        var _find, gear = (_find = $items(_templateObject1762 || (_templateObject1762 = _taggedTemplateLiteral39(["God Lobster's Crown, God Lobster's Robe, God Lobster's Rod, God Lobster's Ring, God Lobster's Scepter"]))).find(function(it) {
          return have(it);
        })) !== null && _find !== void 0 ? _find : $item(_templateObject1772 || (_templateObject1772 = _taggedTemplateLiteral39(["tiny stillsuit"])));
        return uniform({
          changes: {
            familiar: $familiar(_templateObject1782 || (_templateObject1782 = _taggedTemplateLiteral39(["God Lobster"]))),
            famequip: gear
          }
        });
      },
      choices: function() {
        return {
          1310: 3
        };
      },
      combat: new CSStrategy()
    },
    {
      name: "DMT",
      completed: function() {
        return get("_machineTunnelsAdv") >= 5;
      },
      do: $location(_templateObject1792 || (_templateObject1792 = _taggedTemplateLiteral39(["The Deep Machine Tunnels"]))),
      outfit: function() {
        return uniform({
          changes: {
            shirt: $item(_templateObject180 || (_templateObject180 = _taggedTemplateLiteral39(["makeshift garbage shirt"]))),
            familiar: $familiar(_templateObject181 || (_templateObject181 = _taggedTemplateLiteral39(["Machine Elf"])))
          }
        });
      },
      combat: new CSStrategy()
    },
    {
      name: "NEP Quest",
      completed: function() {
        return get("_questPartyFair") !== "unstarted";
      },
      do: function() {
        (0, import_kolmafia43.visitUrl)("adventure.php?snarfblat=528");
        var choice = ["food", "booze"].includes(get("_questPartyFairQuest")) ? 1 : 2;
        (0, import_kolmafia43.runChoice)(choice);
      }
    },
    {
      name: "Purple Candle Kramco",
      completed: function() {
        return getKramcoWandererChance() < 1;
      },
      do: guildQuestZone,
      outfit: function() {
        return uniform({
          changes: {
            shirt: $item(_templateObject1822 || (_templateObject1822 = _taggedTemplateLiteral39(["makeshift garbage shirt"]))),
            offhand: $item(_templateObject1832 || (_templateObject1832 = _taggedTemplateLiteral39(["Kramco Sausage-o-Matic\u2122"]))),
            familiar: $familiar(_templateObject1842 || (_templateObject1842 = _taggedTemplateLiteral39(["Left-Hand Man"]))),
            famequip: $item(_templateObject1852 || (_templateObject1852 = _taggedTemplateLiteral39(["Roman Candelabra"])))
          }
        });
      },
      combat: new CSStrategy(function() {
        return Macro2.trySkill($skill(_templateObject1862 || (_templateObject1862 = _taggedTemplateLiteral39(["Blow the Purple Candle!"])))).trySkill($skill(_templateObject1872 || (_templateObject1872 = _taggedTemplateLiteral39(["Blow the Red Candle!"])))).skill($skill(_templateObject1882 || (_templateObject1882 = _taggedTemplateLiteral39(["Micrometeorite"])))).attack().repeat();
      })
    }
  ])
}, level_default = Level;

// src/noncombat.ts
init_kolmafia_polyfill();
var import_kolmafia44 = require("kolmafia");
var _templateObject190, _templateObject281, _templateObject370, _templateObject450, _templateObject539, _templateObject635, _templateObject735, _templateObject828, _templateObject923, _templateObject1020, _templateObject1120, _templateObject1220, _templateObject1320, _templateObject1420;
function _toConsumableArray16(arr) {
  return _arrayWithoutHoles16(arr) || _iterableToArray16(arr) || _unsupportedIterableToArray27(arr) || _nonIterableSpread16();
}
function _nonIterableSpread16() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray27(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray27(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray27(o, minLen);
  }
}
function _iterableToArray16(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles16(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray27(arr);
}
function _arrayLikeToArray27(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral40(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var Noncombat = {
  name: "Noncombat",
  type: "SERVICE",
  test: CommunityService.Noncombat,
  outfit: function() {
    return {
      hat: $item(_templateObject190 || (_templateObject190 = _taggedTemplateLiteral40(["very pointy crown"]))),
      back: $item(_templateObject281 || (_templateObject281 = _taggedTemplateLiteral40(["protonic accelerator pack"]))),
      weapon: $item(_templateObject370 || (_templateObject370 = _taggedTemplateLiteral40(["Fourth of May Cosplay Saber"]))),
      shirt: $item(_templateObject450 || (_templateObject450 = _taggedTemplateLiteral40(["Jurassic Parka"]))),
      offhand: $item(_templateObject539 || (_templateObject539 = _taggedTemplateLiteral40(["unbreakable umbrella"]))),
      acc1: $item(_templateObject635 || (_templateObject635 = _taggedTemplateLiteral40(["McHugeLarge left ski"]))),
      acc2: $item(_templateObject735 || (_templateObject735 = _taggedTemplateLiteral40(["codpiece"]))),
      acc3: $item(_templateObject828 || (_templateObject828 = _taggedTemplateLiteral40(["Brutal brogues"]))),
      familiar: $familiar(_templateObject923 || (_templateObject923 = _taggedTemplateLiteral40(["Peace Turkey"]))),
      modes: {
        umbrella: "cocoon",
        parka: "pterodactyl"
      }
    };
  },
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [{
    name: "Horse",
    completed: function() {
      return Horsery_exports.current() === "dark";
    },
    do: function() {
      return Horsery_exports.changeHorse("dark");
    }
  }].concat(_toConsumableArray16(commonFamiliarWeightBuffs()), [skillTask($effect(_templateObject1020 || (_templateObject1020 = _taggedTemplateLiteral40(["Smooth Movements"])))), skillTask($effect(_templateObject1120 || (_templateObject1120 = _taggedTemplateLiteral40(["Feeling Lonely"])))), birdTask("Combat Rate", !1), favouriteBirdTask("Combat Rate", !1), songTask($effect(_templateObject1220 || (_templateObject1220 = _taggedTemplateLiteral40(["The Sonata of Sneakiness"]))), $effect(_templateObject1320 || (_templateObject1320 = _taggedTemplateLiteral40(["Fat Leon's Phat Loot Lyric"])))), restore($effects(_templateObject1420 || (_templateObject1420 = _taggedTemplateLiteral40(["Smooth Movements, The Sonata of Sneakiness"])))), {
    name: "Swim Sprints",
    completed: function() {
      return get("_olympicSwimmingPool");
    },
    do: function() {
      return (0, import_kolmafia44.cliExecute)("swim sprints");
    }
  }, asdonTask("Stealthily"), aprilTask("Apriling Band Patrol Beat")])
}, noncombat_default = Noncombat;

// src/prologue.ts
init_kolmafia_polyfill();
var import_kolmafia45 = require("kolmafia");
var _templateObject191, _templateObject290, _templateObject371, _templateObject451, _templateObject540, _templateObject636, _templateObject736, _templateObject829, _templateObject924, _templateObject1021, _templateObject1121, _templateObject1221, _templateObject1321, _templateObject1421, _templateObject1519, _templateObject1619, _templateObject1718, _templateObject1818, _templateObject1917, _templateObject2016, _templateObject2121, _templateObject2220, _templateObject2318, _templateObject2416, _templateObject2515, _templateObject2615, _templateObject2715, _templateObject2814, _templateObject2914, _templateObject3014, _templateObject3120, _templateObject3218, _templateObject3315, _templateObject3413, _templateObject3512, _templateObject3612, _templateObject3712, _templateObject3811, _templateObject3910, _templateObject409, _templateObject4116, _templateObject4214, _templateObject4312, _templateObject4410, _templateObject458, _templateObject468, _templateObject478, _templateObject488, _templateObject499, _templateObject509, _templateObject5115, _templateObject5212, _templateObject5310, _templateObject546, _templateObject556, _templateObject566, _templateObject576, _templateObject586, _templateObject596, _templateObject606, _templateObject6113, _templateObject6211, _templateObject637, _templateObject645;
function ownKeys15(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread15(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys15(Object(source), !0).forEach(function(key) {
      _defineProperty20(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys15(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty20(obj, key, value) {
  return key = _toPropertyKey25(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey25(arg) {
  var key = _toPrimitive25(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive25(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toConsumableArray17(arr) {
  return _arrayWithoutHoles17(arr) || _iterableToArray17(arr) || _unsupportedIterableToArray28(arr) || _nonIterableSpread17();
}
function _nonIterableSpread17() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray28(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray28(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray28(o, minLen);
  }
}
function _iterableToArray17(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles17(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray28(arr);
}
function _arrayLikeToArray28(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _taggedTemplateLiteral41(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var PULLS = [$items(_templateObject191 || (_templateObject191 = _taggedTemplateLiteral41(["repaid diaper, Great Wolf's beastly trousers"]))), $items(_templateObject290 || (_templateObject290 = _taggedTemplateLiteral41(["norwhal helmet"]))), $items(_templateObject371 || (_templateObject371 = _taggedTemplateLiteral41(["Stick-Knife of Loathing"]))), $items(_templateObject451 || (_templateObject451 = _taggedTemplateLiteral41(["Buddy Bjorn"])))], codpieceAttempted = !1, MARKET_QUESTS = [{
  pref: "questM23Meatsmith",
  url: "shop.php?whichshop=meatsmith&action=talk"
}, {
  pref: "questM24Doc",
  url: "shop.php?whichshop=doc&action=talk"
}, {
  pref: "questM25Armorer",
  url: "shop.php?whichshop=armory&action=talk"
}], BEST_INITIATIVE = byClass({
  "Seal Clubber": 2,
  "Turtle Tamer": 0,
  "Disco Bandit": 0,
  "Accordion Thief": 2,
  Pastamancer: 3,
  Sauceror: 1,
  default: 0
}), Prologue = {
  type: "MISC",
  name: "Prologue",
  completed: function() {
    return !!get("csServicesPerformed").split(",").filter(function(x) {
      return x.trim().length > 0;
    }).length;
  },
  tasks: [{
    name: "Set Workshed",
    completed: function() {
      return (0, import_kolmafia45.getWorkshed)() === $item(_templateObject540 || (_templateObject540 = _taggedTemplateLiteral41(["Asdon Martin keyfob (on ring)"])));
    },
    do: function() {
      return (0, import_kolmafia45.use)($item(_templateObject636 || (_templateObject636 = _taggedTemplateLiteral41(["Asdon Martin keyfob (on ring)"]))));
    }
  }].concat(_toConsumableArray17(MARKET_QUESTS.map(function(_ref) {
    var pref = _ref.pref, url = _ref.url;
    return {
      name: "Start Quest: ".concat(pref),
      completed: function() {
        return questStep(pref) > -1;
      },
      do: function() {
        (0, import_kolmafia45.visitUrl)(url), (0, import_kolmafia45.runChoice)(1);
      }
    };
  })), [{
    name: "Non-Staff Pulls",
    core: "soft",
    ready: function() {
      return PULLS.some(function(pullSet) {
        return pullSet.every(function(pull) {
          return !have(pull);
        });
      });
    },
    completed: function() {
      return get("_roninStoragePulls").split(",").length >= 4;
    },
    do: function() {
      for (var _i = 0, _PULLS = PULLS; _i < _PULLS.length; _i++) {
        var pullSet = _PULLS[_i];
        if (!pullSet.some(function(pull2) {
          return have(pull2);
        })) {
          var pull = pullSet.find(function(p) {
            return (0, import_kolmafia45.storageAmount)(p) > 0;
          });
          if (pull)
            (0, import_kolmafia45.takeStorage)(pull, 1);
          else
            throw new Error("Failed to pull one of ".concat(pullSet.join(", "), "; are you rich enough to run this in softcore?"));
        }
      }
    }
  }, {
    name: "Learn About Bugs",
    ready: function() {
      return have($item(_templateObject736 || (_templateObject736 = _taggedTemplateLiteral41(["S.I.T. Course Completion Certificate"]))));
    },
    completed: function() {
      return get("_sitCourseCompleted") || have($skill(_templateObject829 || (_templateObject829 = _taggedTemplateLiteral41(["Insectologist"]))));
    },
    do: function() {
      return (0, import_kolmafia45.use)($item(_templateObject924 || (_templateObject924 = _taggedTemplateLiteral41(["S.I.T. Course Completion Certificate"]))));
    },
    choices: {
      1494: 2
    }
  }, {
    name: "Fallbot",
    completed: function() {
      return !AutumnAton_exports.available();
    },
    do: function() {
      AutumnAton_exports.sendTo($location(_templateObject1021 || (_templateObject1021 = _taggedTemplateLiteral41(["The Sleazy Back Alley"]))));
    }
  }, {
    name: "Borrow Time",
    completed: function() {
      return get("_borrowedTimeUsed");
    },
    do: function() {
      have($item(_templateObject1121 || (_templateObject1121 = _taggedTemplateLiteral41(["borrowed time"])))) || (0, import_kolmafia45.create)(1, $item(_templateObject1221 || (_templateObject1221 = _taggedTemplateLiteral41(["borrowed time"])))), (0, import_kolmafia45.use)(1, $item(_templateObject1321 || (_templateObject1321 = _taggedTemplateLiteral41(["borrowed time"]))));
    }
  }, deckTask("Forest"), deckTask("Island"), {
    name: "Ancestral Recall",
    completed: function() {
      return !have($item(_templateObject1421 || (_templateObject1421 = _taggedTemplateLiteral41(["blue mana"]))));
    },
    do: function() {
      return (0, import_kolmafia45.useSkill)($skill(_templateObject1519 || (_templateObject1519 = _taggedTemplateLiteral41(["Ancestral Recall"]))));
    }
  }, _objectSpread15(_objectSpread15({}, deckTask("1952 Mickey Mantle")), {}, {
    class: $classes(_templateObject1619 || (_templateObject1619 = _taggedTemplateLiteral41(["Pastamancer, Seal Clubber, Disco Bandit, Accordion Thief"])))
  }), {
    name: "Sell Mickey Mantle",
    completed: function() {
      return !have($item(_templateObject1718 || (_templateObject1718 = _taggedTemplateLiteral41(["1952 Mickey Mantle card"]))));
    },
    do: function() {
      return (0, import_kolmafia45.autosell)(1, $item(_templateObject1818 || (_templateObject1818 = _taggedTemplateLiteral41(["1952 Mickey Mantle card"]))));
    }
  }, {
    name: "Sell Space Blanket",
    completed: function() {
      return $items(_templateObject1917 || (_templateObject1917 = _taggedTemplateLiteral41(["space blanket, MayDay\u2122 supply package"]))).every(function(i) {
        return !have(i);
      });
    },
    do: function() {
      have($item(_templateObject2016 || (_templateObject2016 = _taggedTemplateLiteral41(["MayDay\u2122 supply package"])))) && (0, import_kolmafia45.use)($item(_templateObject2121 || (_templateObject2121 = _taggedTemplateLiteral41(["MayDay\u2122 supply package"])))), (0, import_kolmafia45.autosell)(1, $item(_templateObject2220 || (_templateObject2220 = _taggedTemplateLiteral41(["space blanket"]))));
    },
    class: $classes(_templateObject2318 || (_templateObject2318 = _taggedTemplateLiteral41(["Turtle Tamer, Sauceror"])))
  }, {
    name: "Barrel Hoop Earring",
    completed: function() {
      return get("_barrelPrayer");
    },
    class: $classes(_templateObject2416 || (_templateObject2416 = _taggedTemplateLiteral41(["Seal Clubber, Disco Bandit"]))),
    do: function() {
      return (0, import_kolmafia45.cliExecute)("barrelprayer glamour");
    }
  }, {
    name: "Unlock Beach",
    completed: function() {
      return (0, import_kolmafia45.canAdventure)($location(_templateObject2515 || (_templateObject2515 = _taggedTemplateLiteral41(["South of the Border"]))));
    },
    do: function() {
      var desertAccessItem = (0, import_kolmafia45.knollAvailable)() ? $item(_templateObject2615 || (_templateObject2615 = _taggedTemplateLiteral41(["bitchin' meatcar"]))) : $item(_templateObject2715 || (_templateObject2715 = _taggedTemplateLiteral41(["Desert Bus pass"])));
      have(desertAccessItem) || (0, import_kolmafia45.cliExecute)("acquire ".concat(desertAccessItem.name));
    }
  }, {
    name: "Juice Bar",
    completed: function() {
      return get("_chateauDeskHarvested");
    },
    do: function() {
      (0, import_kolmafia45.visitUrl)("place.php?whichplace=chateau&action=chateau_desk2"), (0, import_kolmafia45.autosell)(1, $item(_templateObject2814 || (_templateObject2814 = _taggedTemplateLiteral41(["gremlin juice"]))));
    }
  }, {
    name: "Vote!",
    completed: function() {
      return have($item(_templateObject2914 || (_templateObject2914 = _taggedTemplateLiteral41(['"I Voted!" sticker']))));
    },
    do: function() {
      (0, import_kolmafia45.visitUrl)("place.php?whichplace=town_right&action=townright_vote"), (0, import_kolmafia45.visitUrl)("choice.php?option=1&whichchoice=1331&g=2&local%5B%5D=".concat(BEST_INITIATIVE, "&local%5B%5D=").concat(BEST_INITIATIVE)), (0, import_kolmafia45.visitUrl)("place.php?whichplace=town_right&action=townright_vote");
    }
  }, {
    name: "Terminal Skills",
    completed: function() {
      return SourceTerminal_exports.getSkills().every(function(skill) {
        return $skills(_templateObject3014 || (_templateObject3014 = _taggedTemplateLiteral41(["Extract, Portscan"]))).includes(skill);
      }) && !!SourceTerminal_exports.getSkills().length;
    },
    do: function() {
      return SourceTerminal_exports.educate([$skill(_templateObject3120 || (_templateObject3120 = _taggedTemplateLiteral41(["Extract"]))), $skill(_templateObject3218 || (_templateObject3218 = _taggedTemplateLiteral41(["Portscan"])))]);
    }
  }, {
    name: "Change Clan",
    completed: function() {
      return (0, import_kolmafia45.getClanName)() === get("phccs_mainClan", "Bonus Adventures from Hell");
    },
    do: function() {
      return Clan.join(get("phccs_mainClan", "Bonus Adventures from Hell"));
    }
  }, {
    name: "Toot",
    completed: function() {
      return have($item(_templateObject3315 || (_templateObject3315 = _taggedTemplateLiteral41(["big rock"]))));
    },
    do: function() {
      (0, import_kolmafia45.visitUrl)("tutorial.php?action=toot"), tryUse(1, $item(_templateObject3413 || (_templateObject3413 = _taggedTemplateLiteral41(["letter from King Ralph XI"])))), tryUse(1, $item(_templateObject3512 || (_templateObject3512 = _taggedTemplateLiteral41(["pork elf goodies sack"])))), (0, import_kolmafia45.autosell)(5, $item(_templateObject3612 || (_templateObject3612 = _taggedTemplateLiteral41(["baconstone"])))), (0, import_kolmafia45.autosell)(5, $item(_templateObject3712 || (_templateObject3712 = _taggedTemplateLiteral41(["hamethyst"]))));
    }
  }, {
    name: "Accordion",
    class: $classes(_templateObject3811 || (_templateObject3811 = _taggedTemplateLiteral41(["Seal Clubber, Turtle Tamer, Disco Bandit, Sauceror, Pastamancer"]))),
    completed: function() {
      return have($item(_templateObject3910 || (_templateObject3910 = _taggedTemplateLiteral41(["toy accordion"]))));
    },
    do: function() {
      return (0, import_kolmafia45.buy)(1, $item(_templateObject409 || (_templateObject409 = _taggedTemplateLiteral41(["toy accordion"]))));
    }
  }, {
    name: "Confiscated Items",
    completed: function() {
      return !!get("_grimoireConfiscatorSummons");
    },
    ready: function() {
      return have($skill(_templateObject4116 || (_templateObject4116 = _taggedTemplateLiteral41(["Summon Confiscated Things"]))));
    },
    do: function() {
      (0, import_kolmafia45.useSkill)(1, $skill(_templateObject4214 || (_templateObject4214 = _taggedTemplateLiteral41(["Summon Confiscated Things"])))), $items(_templateObject4312 || (_templateObject4312 = _taggedTemplateLiteral41(['glow-in-the-dark necklace, "KICK ME" sign, LCD game: Burger Belt, LCD game: Food Eater, LCD game: Garbage River']))).forEach(function(item6) {
        return (0, import_kolmafia45.autosell)((0, import_kolmafia45.itemAmount)(item6), item6);
      });
    }
  }, {
    name: "Tasteful Items",
    completed: function() {
      return !!get("grimoire2Summons");
    },
    ready: function() {
      return have($skill(_templateObject4410 || (_templateObject4410 = _taggedTemplateLiteral41(["Summon Tasteful Items"]))));
    },
    do: function() {
      (0, import_kolmafia45.useSkill)(1, $skill(_templateObject458 || (_templateObject458 = _taggedTemplateLiteral41(["Summon Tasteful Items"])))), $items(_templateObject468 || (_templateObject468 = _taggedTemplateLiteral41(["black-and-blue light, blue plasma ball, cheap studded belt, flavored foot massage oil, foam dart, Loudmouth Larry Lamprey, personal massager, personalized coffee mug, stick-on eyebrow piercing"]))).forEach(function(item6) {
        return (0, import_kolmafia45.autosell)((0, import_kolmafia45.itemAmount)(item6), item6);
      });
    }
  }, {
    name: "Alice's Army",
    completed: function() {
      return !!get("grimoire3Summons");
    },
    ready: function() {
      return have($skill(_templateObject478 || (_templateObject478 = _taggedTemplateLiteral41(["Summon Alice's Army Cards"]))));
    },
    do: function() {
      (0, import_kolmafia45.useSkill)(1, $skill(_templateObject488 || (_templateObject488 = _taggedTemplateLiteral41(["Summon Alice's Army Cards"])))), !have($item(_templateObject499 || (_templateObject499 = _taggedTemplateLiteral41(["tobiko marble soda"])))) && !CommunityService.SpellDamage.isDone() && (0, import_kolmafia45.buy)($coinmaster(_templateObject509 || (_templateObject509 = _taggedTemplateLiteral41(["Game Shoppe Snacks"]))), 1, $item(_templateObject5115 || (_templateObject5115 = _taggedTemplateLiteral41(["tobiko marble soda"]))));
    }
  }, {
    name: "Mummery",
    completed: function() {
      return get("_mummeryMods").includes((0, import_kolmafia45.myPrimestat)().toString());
    },
    do: function() {
      (0, import_kolmafia45.useFamiliar)($familiar(_templateObject5212 || (_templateObject5212 = _taggedTemplateLiteral41(["Melodramedary"])))), (0, import_kolmafia45.cliExecute)("mummery ".concat((0, import_kolmafia45.myPrimestat)().toString().toLowerCase()));
    },
    core: "hard"
  }, {
    name: "Shortsuit",
    completed: function() {
      return !(0, import_kolmafia45.itemAmount)($item(_templateObject5310 || (_templateObject5310 = _taggedTemplateLiteral41(["tiny stillsuit"]))));
    },
    do: function() {
      return (0, import_kolmafia45.equip)($familiar(_templateObject546 || (_templateObject546 = _taggedTemplateLiteral41(["Shorter-Order Cook"]))), $item(_templateObject556 || (_templateObject556 = _taggedTemplateLiteral41(["tiny stillsuit"]))));
    }
  }, {
    name: "Horsery",
    completed: function() {
      return Horsery_exports.current() === "dark";
    },
    do: function() {
      return Horsery_exports.changeHorse("dark");
    }
  }, {
    name: "Cowboy Boots",
    completed: function() {
      return have($item(_templateObject566 || (_templateObject566 = _taggedTemplateLiteral41(["your cowboy boots"]))));
    },
    do: function() {
      (0, import_kolmafia45.visitUrl)("place.php?whichplace=town_right&action=townright_ltt"), (0, import_kolmafia45.runChoice)(5);
    }
  }, {
    name: "Cosplay Saber",
    completed: function() {
      return !!get("_saberMod");
    },
    do: function() {
      (0, import_kolmafia45.visitUrl)("main.php?action=may4"), (0, import_kolmafia45.runChoice)(4);
    }
  }, {
    name: "Detective Badge",
    completed: function() {
      return have($item(_templateObject576 || (_templateObject576 = _taggedTemplateLiteral41(["gold detective badge"]))));
    },
    do: function() {
      return (0, import_kolmafia45.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_precinct");
    }
  }, {
    name: "Codpiece",
    completed: function() {
      return have($item(_templateObject586 || (_templateObject586 = _taggedTemplateLiteral41(["codpiece"])))) || codpieceAttempted;
    },
    do: function() {
      Clan.with(get("phccs_codClan", "Floundry"), function() {
        return (0, import_kolmafia45.cliExecute)("acquire codpiece");
      }), codpieceAttempted = !0;
    }
  }, {
    name: "Songboom",
    completed: function() {
      return SongBoom_exports.song() === "Total Eclipse of Your Meat";
    },
    do: function() {
      return SongBoom_exports.setSong("Total Eclipse of Your Meat");
    }
  }, {
    name: "Scavenge",
    completed: function() {
      return !!get("_daycareGymScavenges");
    },
    do: function() {
      (0, import_kolmafia45.visitUrl)("place.php?whichplace=town_wrong&action=townwrong_boxingdaycare"), (0, import_kolmafia45.runChoice)(3), (0, import_kolmafia45.runChoice)(2), (0, import_kolmafia45.runChoice)(5), (0, import_kolmafia45.runChoice)(4);
    }
  }, {
    name: "Unlock Bird",
    completed: function() {
      return have($skill(_templateObject596 || (_templateObject596 = _taggedTemplateLiteral41(["Seek out a Bird"])))) || get("_canSeekBirds");
    },
    ready: function() {
      return have($item(_templateObject606 || (_templateObject606 = _taggedTemplateLiteral41(["Bird-a-Day calendar"]))));
    },
    do: function() {
      return (0, import_kolmafia45.use)($item(_templateObject6113 || (_templateObject6113 = _taggedTemplateLiteral41(["Bird-a-Day calendar"]))));
    }
  }, {
    name: "Guild Quest",
    completed: function() {
      return questStep(byStat({
        Mysticality: "questG07Myst",
        Moxie: "questG08Moxie",
        Muscle: "questG09Muscle"
      })) >= 0;
    },
    do: function() {
      return (0, import_kolmafia45.visitUrl)("guild.php?place=challenge");
    },
    outfit: function() {
      return byStat({
        Moxie: {
          pants: $item(_templateObject6211 || (_templateObject6211 = _taggedTemplateLiteral41(["tearaway pants"])))
        },
        default: {}
      });
    }
  }, {
    name: "MC Hugelarge",
    completed: function() {
      return have($item(_templateObject637 || (_templateObject637 = _taggedTemplateLiteral41(["McHugeLarge left ski"]))));
    },
    ready: function() {
      return have($item(_templateObject645 || (_templateObject645 = _taggedTemplateLiteral41(["McHugeLarge duffel bag"]))));
    },
    do: function() {
      return (0, import_kolmafia45.visitUrl)("inventory.php?action=skiduffel&pwd=".concat((0, import_kolmafia45.myHash)()), !1);
    }
  }, aprilTask("Apriling Band Battle Cadence"), {
    name: "Leprecondo",
    ready: function() {
      return Leprecondo_exports.have();
    },
    completed: function() {
      return arrayEquals(Leprecondo_exports.installedFurniture(), LEPRECONDO_CONFIG);
    },
    do: function() {
      return Leprecondo_exports.setFurniture.apply(Leprecondo_exports, _toConsumableArray17(LEPRECONDO_CONFIG));
    }
  }])
}, prologue_default = Prologue;

// src/spell.ts
init_kolmafia_polyfill();
var import_kolmafia46 = require("kolmafia");
var _templateObject200, _templateObject291, _templateObject380, _templateObject459, _templateObject541, _templateObject638, _templateObject737, _templateObject830, _templateObject925, _templateObject1023, _templateObject1123, _templateObject1223, _templateObject1323, _templateObject1423, _templateObject1520, _templateObject1620, _templateObject1719, _templateObject1819, _templateObject1918, _templateObject2017, _templateObject2122, _templateObject2221, _templateObject2319, _templateObject2417, _templateObject2516, _templateObject2616, _templateObject2716, _templateObject2815, _templateObject2915, _templateObject3015, _templateObject3121, _templateObject3219, _templateObject3316, _templateObject3414, _templateObject3513, _templateObject3613, _templateObject3713, _templateObject3812, _templateObject3911, _templateObject4010, _templateObject4117, _templateObject4215, _templateObject4313, _templateObject4411, _templateObject4510, _templateObject469, _templateObject479, _templateObject489, _templateObject4910, _templateObject5010, _templateObject5116, _templateObject5213, _templateObject5311, _templateObject547;
function _toConsumableArray18(arr) {
  return _arrayWithoutHoles18(arr) || _iterableToArray18(arr) || _unsupportedIterableToArray29(arr) || _nonIterableSpread18();
}
function _nonIterableSpread18() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray29(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray29(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray29(o, minLen);
  }
}
function _iterableToArray18(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles18(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray29(arr);
}
function _arrayLikeToArray29(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys16(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread16(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys16(Object(source), !0).forEach(function(key) {
      _defineProperty21(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys16(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty21(obj, key, value) {
  return key = _toPropertyKey26(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey26(arg) {
  var key = _toPrimitive26(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive26(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral42(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var buffs3 = $effects(_templateObject200 || (_templateObject200 = _taggedTemplateLiteral42(["Carol of the Hells, Arched Eyebrow of the Archmage, Song of Sauce"]))), chefstaves = $items(_templateObject291 || (_templateObject291 = _taggedTemplateLiteral42(["Staff of the Roaring Hearth, Staff of Simmering Hatred, Staff of Kitchen Royalty, Staff of the Deepest Freeze, Staff of Frozen Lard, Staff of the Peppermint Twist"]))), Spell = {
  name: "Spell Damage",
  type: "SERVICE",
  test: CommunityService.SpellDamage,
  outfit: function() {
    return _objectSpread16(_objectSpread16({
      hat: $items(_templateObject380 || (_templateObject380 = _taggedTemplateLiteral42(["norwhal helmet, astral chapeau, Hollandaise helmet, Iunion Crown"]))),
      weapon: [].concat(_toConsumableArray18(chefstaves), [$item(_templateObject459 || (_templateObject459 = _taggedTemplateLiteral42(["weeping willow wand"])))]),
      offhand: $items(_templateObject541 || (_templateObject541 = _taggedTemplateLiteral42(["Abracandalabra, august scepter"]))),
      pants: $item(_templateObject638 || (_templateObject638 = _taggedTemplateLiteral42(["designer sweatpants"]))),
      acc1: $items(_templateObject737 || (_templateObject737 = _taggedTemplateLiteral42(["meteorite necklace, Powerful Glove"]))),
      acc2: $item(_templateObject830 || (_templateObject830 = _taggedTemplateLiteral42(["codpiece"]))),
      acc3: $item(_templateObject925 || (_templateObject925 = _taggedTemplateLiteral42(["battle broom"])))
    }, CSEngine.core === "soft" ? {
      familiar: $familiar(_templateObject1023 || (_templateObject1023 = _taggedTemplateLiteral42(["Disembodied Hand"]))),
      famequip: $item(_templateObject1123 || (_templateObject1123 = _taggedTemplateLiteral42(["Stick-Knife of Loathing"])))
    } : {
      familiar: $familiar(_templateObject1223 || (_templateObject1223 = _taggedTemplateLiteral42(["Left-Hand Man"]))),
      famequip: $item(_templateObject1323 || (_templateObject1323 = _taggedTemplateLiteral42(["astral statuette"])))
    }), {}, {
      back: $items(_templateObject1423 || (_templateObject1423 = _taggedTemplateLiteral42(["Buddy Bjorn, protonic accelerator pack"]))),
      riders: {
        "buddy-bjorn": $familiar(_templateObject1520 || (_templateObject1520 = _taggedTemplateLiteral42(["Mechanical Songbird"])))
      }
    });
  },
  maxTurns: 30,
  tasks: [skillTask($skill(_templateObject1620 || (_templateObject1620 = _taggedTemplateLiteral42(["Simmer"]))), !0), {
    name: "Do You Crush What I Crush?",
    completed: function() {
      return have($effect(_templateObject1719 || (_templateObject1719 = _taggedTemplateLiteral42(["Do You Crush What I Crush?"]))));
    },
    ready: function() {
      return !have($effect(_templateObject1819 || (_templateObject1819 = _taggedTemplateLiteral42(["Holiday Yoked"]))));
    },
    do: $location(_templateObject1918 || (_templateObject1918 = _taggedTemplateLiteral42(["The Dire Warren"]))),
    outfit: function() {
      return uniform({
        changes: {
          familiar: $familiar(_templateObject2017 || (_templateObject2017 = _taggedTemplateLiteral42(["Ghost of Crimbo Carols"]))),
          famequip: $item.none
        }
      });
    },
    prepare: function() {
      return Horsery_exports.current() === "pale" && Horsery_exports.changeHorse("dark");
    },
    combat: new CSStrategy(function() {
      return Macro2.trySkill($skill(_templateObject2122 || (_templateObject2122 = _taggedTemplateLiteral42(["Asdon Martin: Spring-Loaded Front Bumper"])))).trySkill($skill(_templateObject2221 || (_templateObject2221 = _taggedTemplateLiteral42(["Feel Hatred"])))).trySkill($skill(_templateObject2319 || (_templateObject2319 = _taggedTemplateLiteral42(["Snokebomb"])))).abort();
    })
  }, {
    name: "Barrel Prayer",
    class: $classes(_templateObject2417 || (_templateObject2417 = _taggedTemplateLiteral42(["Sauceror"]))),
    completed: function() {
      return get("_barrelPrayer");
    },
    do: function() {
      return (0, import_kolmafia46.cliExecute)("barrelprayer buff");
    }
  }, potionTask($item(_templateObject2516 || (_templateObject2516 = _taggedTemplateLiteral42(["tobiko marble soda"])))), potionTask($item(_templateObject2616 || (_templateObject2616 = _taggedTemplateLiteral42(["imported taffy"])))), songTask($effect(_templateObject2716 || (_templateObject2716 = _taggedTemplateLiteral42(["Jackasses' Symphony of Destruction"]))), $effect(_templateObject2815 || (_templateObject2815 = _taggedTemplateLiteral42(["The Sonata of Sneakiness"]))))].concat(_toConsumableArray18(restoreBuffTasks(buffs3)), [skillTask({
    skill: $skill(_templateObject2915 || (_templateObject2915 = _taggedTemplateLiteral42(["Sauce Contemplation"]))),
    effect: $effect(_templateObject3015 || (_templateObject3015 = _taggedTemplateLiteral42(["Lubricating Sauce"])))
  }, !0), beachTask($effect(_templateObject3121 || (_templateObject3121 = _taggedTemplateLiteral42(["We're All Made of Starfish"])))), potionTask($item(_templateObject3219 || (_templateObject3219 = _taggedTemplateLiteral42(["LOV Elixir #6"])))), {
    name: "Cargopocket",
    completed: function() {
      return get("_cargoPocketEmptied");
    },
    ready: function() {
      return $items(_templateObject3316 || (_templateObject3316 = _taggedTemplateLiteral42(["sizzling desk bell, frost-rimed desk bell, uncanny desk bell, nasty desk bell, greasy desk bell"]))).every(function(item6) {
        return getSaleValue(item6) < 4 * get("valueOfAdventure");
      });
    },
    do: function() {
      return (0, import_kolmafia46.cliExecute)("cargo 177");
    }
  }, potionTask($item(_templateObject3414 || (_templateObject3414 = _taggedTemplateLiteral42(["Yeg's Motel hand soap"])))), skillTask($skill(_templateObject3513 || (_templateObject3513 = _taggedTemplateLiteral42(["Spirit of Cayenne"])))), potionTask($item(_templateObject3613 || (_templateObject3613 = _taggedTemplateLiteral42(["flask of baconstone juice"])))), {
    name: "Saucefingers",
    ready: function() {
      return (0, import_kolmafia46.myLevel)() >= 15 && have($familiar(_templateObject3713 || (_templateObject3713 = _taggedTemplateLiteral42(["Mini-Adventurer"]))));
    },
    completed: function() {
      return have($effect(_templateObject3812 || (_templateObject3812 = _taggedTemplateLiteral42(["Saucefingers"]))));
    },
    class: $classes(_templateObject3911 || (_templateObject3911 = _taggedTemplateLiteral42(["Pastamancer"]))),
    do: $location(_templateObject4010 || (_templateObject4010 = _taggedTemplateLiteral42(["The Dire Warren"]))),
    prepare: function() {
      return Horsery_exports.current() === "pale" && Horsery_exports.changeHorse("dark");
    },
    outfit: function() {
      return uniform({
        changes: {
          familiar: $familiar(_templateObject4117 || (_templateObject4117 = _taggedTemplateLiteral42(["Mini-Adventurer"])))
        }
      });
    },
    combat: new CSStrategy(function() {
      return Macro2.trySkill($skill(_templateObject4215 || (_templateObject4215 = _taggedTemplateLiteral42(["Asdon Martin: Spring-Loaded Front Bumper"])))).trySkill($skill(_templateObject4313 || (_templateObject4313 = _taggedTemplateLiteral42(["Feel Hatred"])))).trySkill($skill(_templateObject4411 || (_templateObject4411 = _taggedTemplateLiteral42(["Snokebomb"])))).abort();
    }),
    choices: _defineProperty21({}, 768, 4)
  }, innerElf(), meteorShower(), {
    name: "Meteorite Necklace",
    core: "soft",
    completed: function() {
      return have($item(_templateObject4510 || (_templateObject4510 = _taggedTemplateLiteral42(["meteorite necklace"]))));
    },
    ready: function() {
      return (0, import_kolmafia46.canadiaAvailable)() && $items(_templateObject469 || (_templateObject469 = _taggedTemplateLiteral42(["meteorite fragment, meteorite earring, meteorite ring"]))).some(function(item6) {
        return have(item6);
      });
    },
    do: function() {
      var meteor = $items(_templateObject479 || (_templateObject479 = _taggedTemplateLiteral42(["meteorite ring, meteorite fragment, meteorite earring"]))).find(function(item6) {
        return have(item6);
      });
      meteor && (unequip(meteor), (0, import_kolmafia46.retrieveItem)(1, $item(_templateObject489 || (_templateObject489 = _taggedTemplateLiteral42(["tenderizing hammer"])))), (0, import_kolmafia46.retrieveItem)(1, $item(_templateObject4910 || (_templateObject4910 = _taggedTemplateLiteral42(["jewelry-making pliers"])))), meteor !== $item(_templateObject5010 || (_templateObject5010 = _taggedTemplateLiteral42(["meteorite fragment"]))) && (0, import_kolmafia46.cliExecute)("smash ".concat(meteor)), (0, import_kolmafia46.cliExecute)("make ".concat($item(_templateObject5116 || (_templateObject5116 = _taggedTemplateLiteral42(["meteorite necklace"]))))));
    }
  }, {
    name: "Pull Staff",
    ready: function() {
      return chefstaves.filter(function(s) {
        return (0, import_kolmafia46.storageAmount)(s) > 0 && (0, import_kolmafia46.canEquip)(s);
      }).length > 0 && (0, import_kolmafia46.pullsRemaining)() > 0;
    },
    completed: function() {
      return chefstaves.some(function(staff) {
        return have(staff);
      });
    },
    core: "soft",
    do: function() {
      var staff = chefstaves.find(function(s) {
        return (0, import_kolmafia46.storageAmount)(s) > 0 && (0, import_kolmafia46.canEquip)(s);
      });
      staff && (0, import_kolmafia46.takeStorage)(staff, 1);
    }
  }, {
    name: "Weeping Willow Wand",
    completed: function() {
      return have($item(_templateObject5213 || (_templateObject5213 = _taggedTemplateLiteral42(["weeping willow wand"]))));
    },
    ready: function() {
      return !chefstaves.some(function(staff) {
        return have(staff);
      });
    },
    do: function() {
      have($item(_templateObject5311 || (_templateObject5311 = _taggedTemplateLiteral42(["flimsy hardwood scraps"])))) || (0, import_kolmafia46.visitUrl)("shop.php?whichshop=lathe"), (0, import_kolmafia46.retrieveItem)($item(_templateObject547 || (_templateObject547 = _taggedTemplateLiteral42(["weeping willow wand"]))));
    }
  }])
}, spell_default = Spell;

// src/stattests.ts
init_kolmafia_polyfill();
var import_kolmafia47 = require("kolmafia");
var _templateObject201, _templateObject2100, _templateObject381, _templateObject460, _templateObject548, _templateObject639, _templateObject738, _templateObject831, _templateObject926, _templateObject1024, _templateObject1124, _templateObject1224, _templateObject1324, _templateObject1424, _templateObject1521, _templateObject1621, _templateObject1720, _templateObject1820, _templateObject1919, _templateObject2018, _templateObject2123, _templateObject2222, _templateObject2320, _templateObject2418, _templateObject2517, _templateObject2617, _templateObject2717, _templateObject2816, _templateObject2916, _templateObject3016, _templateObject3122, _templateObject3220, _templateObject3317, _templateObject3415, _templateObject3514, _templateObject3614, _templateObject3714, _templateObject3813, _templateObject3912, _templateObject4011, _templateObject4118, _templateObject4216, _templateObject4314, _templateObject4412, _templateObject4511, _templateObject4610, _templateObject4710, _templateObject4810, _templateObject4911, _templateObject5011, _templateObject5117, _templateObject5214, _templateObject5312, _templateObject549, _templateObject557, _templateObject567, _templateObject577, _templateObject587, _templateObject597, _templateObject607, _templateObject6114, _templateObject6212, _templateObject6310, _templateObject646, _templateObject655, _templateObject665, _templateObject675, _templateObject685, _templateObject695, _templateObject705, _templateObject7112, _templateObject7211, _templateObject739, _templateObject744, _templateObject754;
function _toConsumableArray19(arr) {
  return _arrayWithoutHoles19(arr) || _iterableToArray19(arr) || _unsupportedIterableToArray30(arr) || _nonIterableSpread19();
}
function _nonIterableSpread19() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray30(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray30(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray30(o, minLen);
  }
}
function _iterableToArray19(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles19(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray30(arr);
}
function _arrayLikeToArray30(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys17(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread17(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys17(Object(source), !0).forEach(function(key) {
      _defineProperty22(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys17(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty22(obj, key, value) {
  return key = _toPropertyKey27(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey27(arg) {
  var key = _toPrimitive27(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive27(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral43(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var SKILL_BUFFS = {
  MUSCLE: $effects(_templateObject201 || (_templateObject201 = _taggedTemplateLiteral43(["Feeling Excited, Big, Song of Bravado, Rage of the Reindeer, Quiet Determination, Disdain of the War Snapper"]))),
  MYSTICALITY: $effects(_templateObject2100 || (_templateObject2100 = _taggedTemplateLiteral43(["Feeling Excited, Big, Song of Bravado, Quiet Judgement"]))),
  MOXIE: $effects(_templateObject381 || (_templateObject381 = _taggedTemplateLiteral43(["Feeling Excited, Big, Song of Bravado, Quiet Desperation, Disco Fever, Blubbered Up, Mariachi Mood, Disco State of Mind"]))),
  HP: $effects(_templateObject460 || (_templateObject460 = _taggedTemplateLiteral43(["Feeling Excited, Big, Song of Starch, Rage of the Reindeer, Quiet Determination, Disdain of the War Snapper"])))
};
function skillBuffTasks(key) {
  return restoreBuffTasks(SKILL_BUFFS[key]);
}
function thrallTask(thrall) {
  return {
    name: thrall.toString(),
    class: $classes(_templateObject548 || (_templateObject548 = _taggedTemplateLiteral43(["Pastamancer"]))),
    completed: function() {
      return (0, import_kolmafia47.myThrall)() === thrall;
    },
    do: function() {
      return (0, import_kolmafia47.useSkill)(thrall.skill);
    }
  };
}
function equalizeTasks() {
  var equalizerPotion = byStat({
    Moxie: $item(_templateObject639 || (_templateObject639 = _taggedTemplateLiteral43(["oil of slipperiness"]))),
    Muscle: $item(_templateObject738 || (_templateObject738 = _taggedTemplateLiteral43(["oil of stability"]))),
    Mysticality: $item(_templateObject831 || (_templateObject831 = _taggedTemplateLiteral43(["oil of expertise"])))
  }), equalizerFruit = byStat({
    Moxie: $item(_templateObject926 || (_templateObject926 = _taggedTemplateLiteral43(["jumbo olive"]))),
    Muscle: $item(_templateObject1024 || (_templateObject1024 = _taggedTemplateLiteral43(["lime"]))),
    Mysticality: $item(_templateObject1124 || (_templateObject1124 = _taggedTemplateLiteral43(["cherry"])))
  });
  return [{
    name: "Create ".concat(equalizerPotion),
    ready: function() {
      return have(equalizerFruit) && get("hasRange");
    },
    completed: function() {
      return have(equalizerPotion) || have((0, import_kolmafia47.effectModifier)(equalizerPotion, "Effect"));
    },
    do: function() {
      return (0, import_kolmafia47.create)(equalizerPotion);
    },
    class: $classes(_templateObject1224 || (_templateObject1224 = _taggedTemplateLiteral43(["Seal Clubber, Turtle Tamer, Disco Bandit, Accordion Thief, Sauceror"])))
  }, _objectSpread17(_objectSpread17({}, potionTask(equalizerPotion)), {}, {
    class: $classes(_templateObject1324 || (_templateObject1324 = _taggedTemplateLiteral43(["Seal Clubber, Turtle Tamer, Disco Bandit, Accordion Thief, Sauceror"])))
  })];
}
var Muscle = {
  name: "Muscle",
  type: "SERVICE",
  test: CommunityService.Muscle,
  outfit: function() {
    return have($item(_templateObject1424 || (_templateObject1424 = _taggedTemplateLiteral43(["wad of used tape"])))) || (0, import_kolmafia47.cliExecute)("fold wad of used tape"), {
      hat: $item(_templateObject1521 || (_templateObject1521 = _taggedTemplateLiteral43(["wad of used tape"]))),
      weapon: $item(_templateObject1621 || (_templateObject1621 = _taggedTemplateLiteral43(["Fourth of May Cosplay Saber"]))),
      offhand: $item(_templateObject1720 || (_templateObject1720 = _taggedTemplateLiteral43(["dented scepter"]))),
      shirt: $item(_templateObject1820 || (_templateObject1820 = _taggedTemplateLiteral43(["Jurassic Parka"]))),
      back: $item(_templateObject1919 || (_templateObject1919 = _taggedTemplateLiteral43(["unwrapped knock-off retro superhero cape"]))),
      pants: $items(_templateObject2018 || (_templateObject2018 = _taggedTemplateLiteral43(["astral trousers, designer sweatpants"]))),
      acc1: $item(_templateObject2123 || (_templateObject2123 = _taggedTemplateLiteral43(["Brutal brogues"]))),
      acc2: $items(_templateObject2222 || (_templateObject2222 = _taggedTemplateLiteral43(["meteorite necklace, Retrospecs"]))),
      acc3: byStat({
        Muscle: $item(_templateObject2320 || (_templateObject2320 = _taggedTemplateLiteral43(["your cowboy boots"]))),
        default: $item(_templateObject2418 || (_templateObject2418 = _taggedTemplateLiteral43(["Kremlin's Greatest Briefcase"])))
      }),
      familiar: $familiar(_templateObject2517 || (_templateObject2517 = _taggedTemplateLiteral43(["Left-Hand Man"]))),
      famequip: $item(_templateObject2617 || (_templateObject2617 = _taggedTemplateLiteral43(["unbreakable umbrella"]))),
      modes: {
        retrocape: ["vampire", RetroCape_exports.currentMode()],
        parka: "dilophosaur",
        umbrella: "broken"
      }
    };
  },
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [].concat(_toConsumableArray19(skillBuffTasks("MUSCLE")), [potionTask($item(_templateObject2717 || (_templateObject2717 = _taggedTemplateLiteral43(["LOV Elixir #3"])))), thrallTask($thrall(_templateObject2816 || (_templateObject2816 = _taggedTemplateLiteral43(["Elbow Macaroni"])))), birdTask("Muscle Percent"), favouriteBirdTask("Muscle Percent"), _objectSpread17(_objectSpread17({}, innerElf()), {}, {
    core: "hard",
    class: $classes(_templateObject2916 || (_templateObject2916 = _taggedTemplateLiteral43(["Pastamancer, Sauceror, Disco Bandit, Accordion Thief"])))
  }), _objectSpread17(_objectSpread17({}, potionTask($item(_templateObject3016 || (_templateObject3016 = _taggedTemplateLiteral43(["Ben-Gal\u2122 Balm"]))))), {}, {
    core: "hard"
  })], _toConsumableArray19(equalizeTasks()))
}, Mysticality = {
  name: "Mysticality",
  type: "SERVICE",
  test: CommunityService.Mysticality,
  outfit: function() {
    return have($item(_templateObject3122 || (_templateObject3122 = _taggedTemplateLiteral43(["wad of used tape"])))) || (0, import_kolmafia47.cliExecute)("fold wad of used tape"), {
      hat: $items(_templateObject3220 || (_templateObject3220 = _taggedTemplateLiteral43(["astral chapeau, wad of used tape"]))),
      weapon: $item(_templateObject3317 || (_templateObject3317 = _taggedTemplateLiteral43(["Fourth of May Cosplay Saber"]))),
      offhand: $items(_templateObject3415 || (_templateObject3415 = _taggedTemplateLiteral43(["astral statuette, industrial fire extinguisher"]))),
      back: $item(_templateObject3514 || (_templateObject3514 = _taggedTemplateLiteral43(["unwrapped knock-off retro superhero cape"]))),
      shirt: $item(_templateObject3614 || (_templateObject3614 = _taggedTemplateLiteral43(["Jurassic Parka"]))),
      pants: $item(_templateObject3714 || (_templateObject3714 = _taggedTemplateLiteral43(["designer sweatpants"]))),
      acc1: byStat({
        Mysticality: $item(_templateObject3813 || (_templateObject3813 = _taggedTemplateLiteral43(["your cowboy boots"]))),
        default: $items(_templateObject3912 || (_templateObject3912 = _taggedTemplateLiteral43(["barrel hoop earring, Powerful Glove"])))
      }),
      acc2: $item(_templateObject4011 || (_templateObject4011 = _taggedTemplateLiteral43(["codpiece"]))),
      acc3: $item(_templateObject4118 || (_templateObject4118 = _taggedTemplateLiteral43(["battle broom"]))),
      famequip: $item(_templateObject4216 || (_templateObject4216 = _taggedTemplateLiteral43(["unbreakable umbrella"]))),
      familiar: $familiar(_templateObject4314 || (_templateObject4314 = _taggedTemplateLiteral43(["Left-Hand Man"]))),
      modes: {
        retrocape: ["heck", RetroCape_exports.currentMode()]
      }
    };
  },
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [].concat(_toConsumableArray19(skillBuffTasks("MYSTICALITY")), [birdTask("Mysticality Percent"), favouriteBirdTask("Mysticality Percent")], _toConsumableArray19(equalizeTasks()), [_objectSpread17(_objectSpread17({}, innerElf()), {}, {
    class: $classes(_templateObject4412 || (_templateObject4412 = _taggedTemplateLiteral43(["Seal Clubber, Turtle Tamer, Disco Bandit, Accordion Thief"])))
  })])
}, Moxie = {
  name: "Moxie",
  type: "SERVICE",
  test: CommunityService.Moxie,
  outfit: function() {
    return {
      hat: $item(_templateObject4511 || (_templateObject4511 = _taggedTemplateLiteral43(["very pointy crown"]))),
      shirt: $item(_templateObject4610 || (_templateObject4610 = _taggedTemplateLiteral43(["Jurassic Parka"]))),
      back: $item(_templateObject4710 || (_templateObject4710 = _taggedTemplateLiteral43(["unwrapped knock-off retro superhero cape"]))),
      weapon: $item(_templateObject4810 || (_templateObject4810 = _taggedTemplateLiteral43(["Fourth of May Cosplay Saber"]))),
      offhand: $item(_templateObject4911 || (_templateObject4911 = _taggedTemplateLiteral43(["unbreakable umbrella"]))),
      pants: $items(_templateObject5011 || (_templateObject5011 = _taggedTemplateLiteral43(["astral shorts, Cargo Cultist Shorts"]))),
      acc1: $item(_templateObject5117 || (_templateObject5117 = _taggedTemplateLiteral43(["Cincho de Mayo"]))),
      acc2: byStat({
        Moxie: $item(_templateObject5214 || (_templateObject5214 = _taggedTemplateLiteral43(["your cowboy boots"]))),
        default: $item(_templateObject5312 || (_templateObject5312 = _taggedTemplateLiteral43(["Beach Comb"])))
      }),
      acc3: $items(_templateObject549 || (_templateObject549 = _taggedTemplateLiteral43(["meteorite necklace, spring shoes"]))),
      famequip: $item(_templateObject557 || (_templateObject557 = _taggedTemplateLiteral43(["miniature crystal ball"]))),
      modes: {
        retrocape: ["robot", RetroCape_exports.currentMode()],
        umbrella: "broken"
      }
    };
  },
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [].concat(_toConsumableArray19(skillBuffTasks("MOXIE")), [birdTask("Moxie Percent"), favouriteBirdTask("Moxie Percent")], _toConsumableArray19($items(_templateObject567 || (_templateObject567 = _taggedTemplateLiteral43(["runproof mascara, confiscated love note, dollop of barbecue sauce"]))).map(potionTask)), [{
    name: "Rhinestones",
    completed: function() {
      return !have($item(_templateObject577 || (_templateObject577 = _taggedTemplateLiteral43(["rhinestone"]))));
    },
    do: function() {
      return (0, import_kolmafia47.use)((0, import_kolmafia47.itemAmount)($item(_templateObject587 || (_templateObject587 = _taggedTemplateLiteral43(["rhinestone"])))), $item(_templateObject597 || (_templateObject597 = _taggedTemplateLiteral43(["rhinestone"]))));
    }
  }, thrallTask($thrall(_templateObject607 || (_templateObject607 = _taggedTemplateLiteral43(["Penne Dreadful"]))))], _toConsumableArray19(equalizeTasks()))
}, Hitpoints = {
  name: "Hitpoints",
  type: "SERVICE",
  test: CommunityService.HP,
  turnsSpent: 0,
  maxTurns: 1,
  outfit: function() {
    return have($item(_templateObject6114 || (_templateObject6114 = _taggedTemplateLiteral43(["wad of used tape"])))) || (0, import_kolmafia47.cliExecute)("fold wad of used tape"), {
      hat: $item(_templateObject6212 || (_templateObject6212 = _taggedTemplateLiteral43(["wad of used tape"]))),
      weapon: $item(_templateObject6310 || (_templateObject6310 = _taggedTemplateLiteral43(["dented scepter"]))),
      offhand: $item(_templateObject646 || (_templateObject646 = _taggedTemplateLiteral43(["Fourth of May Cosplay Saber"]))),
      shirt: $items(_templateObject655 || (_templateObject655 = _taggedTemplateLiteral43(["Jurassic Parka, shoe ad T-shirt, fresh coat of paint"]))),
      back: $item(_templateObject665 || (_templateObject665 = _taggedTemplateLiteral43(["unwrapped knock-off retro superhero cape"]))),
      pants: $item(_templateObject675 || (_templateObject675 = _taggedTemplateLiteral43(["Cargo Cultist Shorts"]))),
      acc1: $item(_templateObject685 || (_templateObject685 = _taggedTemplateLiteral43(["Brutal brogues"]))),
      acc2: byStat({
        Muscle: $item(_templateObject695 || (_templateObject695 = _taggedTemplateLiteral43(["your cowboy boots"]))),
        default: $item(_templateObject705 || (_templateObject705 = _taggedTemplateLiteral43(["Kremlin's Greatest Briefcase"])))
      }),
      acc3: $items(_templateObject7112 || (_templateObject7112 = _taggedTemplateLiteral43(["meteorite necklace, Retrospecs"]))),
      familiar: $familiar(_templateObject7211 || (_templateObject7211 = _taggedTemplateLiteral43(["Left-Hand Man"]))),
      famequip: $item(_templateObject739 || (_templateObject739 = _taggedTemplateLiteral43(["unbreakable umbrella"]))),
      modes: {
        retrocape: ["vampire", RetroCape_exports.currentMode()],
        parka: "kachungasaur"
      }
    };
  },
  tasks: [].concat(_toConsumableArray19(skillBuffTasks("HP")), [birdTask("Muscle Percent"), favouriteBirdTask("Muscle Percent"), potionTask($item(_templateObject744 || (_templateObject744 = _taggedTemplateLiteral43(["LOV Elixir #3"])))), thrallTask($thrall(_templateObject754 || (_templateObject754 = _taggedTemplateLiteral43(["Elbow Macaroni"]))))], _toConsumableArray19(equalizeTasks()))
}, StatTests = byStat({
  Mysticality: [Moxie, Muscle, Hitpoints, Mysticality],
  Muscle: [Moxie, Mysticality, Hitpoints, Muscle],
  Moxie: [Mysticality, Muscle, Hitpoints, Moxie]
}), stattests_default = StatTests;

// src/weapon.ts
init_kolmafia_polyfill();
var import_kolmafia48 = require("kolmafia");
var _templateObject300, _templateObject2101, _templateObject390, _templateObject461, _templateObject550, _templateObject640, _templateObject740, _templateObject833, _templateObject927, _templateObject1025, _templateObject1125, _templateObject1225, _templateObject1325, _templateObject1425, _templateObject1523, _templateObject1623, _templateObject1721, _templateObject1821, _templateObject1920, _templateObject2019, _templateObject2124, _templateObject2223, _templateObject2321, _templateObject2419, _templateObject2518, _templateObject2618, _templateObject2718, _templateObject2817, _templateObject2917, _templateObject3017, _templateObject3123, _templateObject3221, _templateObject3318, _templateObject3416, _templateObject3515, _templateObject3615, _templateObject3715, _templateObject3814, _templateObject3913, _templateObject4012, _templateObject4119, _templateObject4217, _templateObject4315, _templateObject4413, _templateObject4512, _templateObject4611, _templateObject4711, _templateObject4811, _templateObject4912, _templateObject5012, _templateObject5118, _templateObject5215, _templateObject5313;
function _toConsumableArray20(arr) {
  return _arrayWithoutHoles20(arr) || _iterableToArray20(arr) || _unsupportedIterableToArray31(arr) || _nonIterableSpread20();
}
function _nonIterableSpread20() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray31(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray31(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray31(o, minLen);
  }
}
function _iterableToArray20(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles20(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray31(arr);
}
function _arrayLikeToArray31(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function ownKeys18(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread18(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    i % 2 ? ownKeys18(Object(source), !0).forEach(function(key) {
      _defineProperty23(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys18(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty23(obj, key, value) {
  return key = _toPropertyKey28(key), key in obj ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }) : obj[key] = value, obj;
}
function _toPropertyKey28(arg) {
  var key = _toPrimitive28(arg, "string");
  return typeof key == "symbol" ? key : String(key);
}
function _toPrimitive28(input, hint) {
  if (typeof input != "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res != "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _taggedTemplateLiteral44(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var buffs4 = $effects(_templateObject300 || (_templateObject300 = _taggedTemplateLiteral44(["Carol of the Bulls, Song of the North, Rage of the Reindeer, Scowl of the Auk, Disdain of the War Snapper, Tenacity of the Snapper"]))), Weapon = {
  name: "Weapon Damage",
  type: "SERVICE",
  test: CommunityService.WeaponDamage,
  outfit: function() {
    return have($item(_templateObject2101 || (_templateObject2101 = _taggedTemplateLiteral44(["broken champagne bottle"])))) || (0, import_kolmafia48.cliExecute)("fold broken champagne bottle"), _objectSpread18(_objectSpread18({
      hat: $items(_templateObject390 || (_templateObject390 = _taggedTemplateLiteral44(["seal-skull helmet, Iunion Crown"]))),
      weapon: $item(_templateObject461 || (_templateObject461 = _taggedTemplateLiteral44(["broken champagne bottle"]))),
      offhand: $item(_templateObject550 || (_templateObject550 = _taggedTemplateLiteral44(["dented scepter"]))),
      pants: $items(_templateObject640 || (_templateObject640 = _taggedTemplateLiteral44(["astral trousers, designer sweatpants"]))),
      acc1: $item(_templateObject740 || (_templateObject740 = _taggedTemplateLiteral44(["Brutal brogues"]))),
      acc2: $item(_templateObject833 || (_templateObject833 = _taggedTemplateLiteral44(["Powerful Glove"]))),
      acc3: $items(_templateObject927 || (_templateObject927 = _taggedTemplateLiteral44(["meteorite ring, Kremlin's Greatest Briefcase"])))
    }, CSEngine.core === "soft" ? {
      famequip: $item(_templateObject1025 || (_templateObject1025 = _taggedTemplateLiteral44(["Stick-Knife of Loathing"]))),
      familiar: $familiar(_templateObject1125 || (_templateObject1125 = _taggedTemplateLiteral44(["Disembodied Hand"])))
    } : {
      famequip: $item(_templateObject1225 || (_templateObject1225 = _taggedTemplateLiteral44(["august scepter"]))),
      familiar: $familiar(_templateObject1325 || (_templateObject1325 = _taggedTemplateLiteral44(["Left-Hand Man"])))
    }), {}, {
      back: $items(_templateObject1425 || (_templateObject1425 = _taggedTemplateLiteral44(["Buddy Bjorn, unwrapped knock-off retro superhero cape"]))),
      riders: {
        "buddy-bjorn": $familiar(_templateObject1523 || (_templateObject1523 = _taggedTemplateLiteral44(["Mosquito"])))
      }
    });
  },
  turnsSpent: 0,
  maxTurns: 1,
  tasks: [].concat(_toConsumableArray20(restoreBuffTasks(buffs4)), [birdTask("Weapon Damage Percent"), favouriteBirdTask("Weapon Damage Percent"), skillTask($effect(_templateObject1623 || (_templateObject1623 = _taggedTemplateLiteral44(["Frenzied, Bloody"])))), potionTask($item(_templateObject1721 || (_templateObject1721 = _taggedTemplateLiteral44(["LOV Elixir #3"])))), potionTask($item(_templateObject1821 || (_templateObject1821 = _taggedTemplateLiteral44(["vial of hamethyst juice"])))), potionTask($item(_templateObject1920 || (_templateObject1920 = _taggedTemplateLiteral44(["imported taffy"])))), beachTask($effect(_templateObject2019 || (_templateObject2019 = _taggedTemplateLiteral44(["Lack of Body-Building"])))), songTask($effect(_templateObject2124 || (_templateObject2124 = _taggedTemplateLiteral44(["Jackasses' Symphony of Destruction"]))), $effect(_templateObject2223 || (_templateObject2223 = _taggedTemplateLiteral44(["The Sonata of Sneakiness"])))), {
    name: "Play Pool",
    completed: function() {
      return have($effect(_templateObject2321 || (_templateObject2321 = _taggedTemplateLiteral44(["Billiards Belligerence"]))));
    },
    do: function() {
      return (0, import_kolmafia48.cliExecute)("pool 1");
    }
  }, {
    name: "Do You Crush What I Crush?",
    completed: function() {
      return have($effect(_templateObject2419 || (_templateObject2419 = _taggedTemplateLiteral44(["Do You Crush What I Crush?"]))));
    },
    ready: function() {
      return !have($effect(_templateObject2518 || (_templateObject2518 = _taggedTemplateLiteral44(["Holiday Yoked"]))));
    },
    do: $location(_templateObject2618 || (_templateObject2618 = _taggedTemplateLiteral44(["The Dire Warren"]))),
    outfit: function() {
      return uniform({
        changes: {
          familiar: $familiar(_templateObject2718 || (_templateObject2718 = _taggedTemplateLiteral44(["Ghost of Crimbo Carols"]))),
          famequip: $item.none
        }
      });
    },
    prepare: function() {
      return Horsery_exports.current() === "pale" && Horsery_exports.changeHorse("dark");
    },
    combat: new CSStrategy(function() {
      return Macro2.trySkill($skill(_templateObject2817 || (_templateObject2817 = _taggedTemplateLiteral44(["Asdon Martin: Spring-Loaded Front Bumper"])))).trySkill($skill(_templateObject2917 || (_templateObject2917 = _taggedTemplateLiteral44(["Feel Hatred"])))).trySkill($skill(_templateObject3017 || (_templateObject3017 = _taggedTemplateLiteral44(["Snokebomb"])))).abort();
    })
  }, _objectSpread18(_objectSpread18({}, innerElf()), {}, {
    class: function() {
      return (0, import_kolmafia48.inHardcore)() ? $classes.all() : $classes(_templateObject3123 || (_templateObject3123 = _taggedTemplateLiteral44(["Seal Clubber, Turtle Tamer, Disco Bandit, Accordion Thief"])));
    }
  }), {
    name: "Spit Ungulith",
    completed: function() {
      return have($item(_templateObject3221 || (_templateObject3221 = _taggedTemplateLiteral44(["corrupted marrow"])))) || have($effect(_templateObject3318 || (_templateObject3318 = _taggedTemplateLiteral44(["Cowrruption"]))));
    },
    do: function() {
      CombatLoversLocket_exports.reminisce($monster(_templateObject3416 || (_templateObject3416 = _taggedTemplateLiteral44(["ungulith"])))), (0, import_kolmafia48.handlingChoice)() && (0, import_kolmafia48.runChoice)(-1);
    },
    choices: _defineProperty23({}, 1387, 3),
    outfit: function() {
      var changes = {
        weapon: $item(_templateObject3515 || (_templateObject3515 = _taggedTemplateLiteral44(["Fourth of May Cosplay Saber"])))
      };
      return get("camelSpit") >= 100 && !have($effect(_templateObject3615 || (_templateObject3615 = _taggedTemplateLiteral44(["Spit Upon"])))) && (changes.familiar = $familiar(_templateObject3715 || (_templateObject3715 = _taggedTemplateLiteral44(["Melodramedary"])))), uniform({
        changes: changes,
        canAttack: !1
      });
    },
    post: function() {
      (0, import_kolmafia48.myFamiliar)() === $familiar(_templateObject3814 || (_templateObject3814 = _taggedTemplateLiteral44(["Melodramedary"]))) && have($effect(_templateObject3913 || (_templateObject3913 = _taggedTemplateLiteral44(["Spit Upon"]))), 15) && _set("camelSpit", 0), have($effect(_templateObject4012 || (_templateObject4012 = _taggedTemplateLiteral44(["Meteor Showered"])))) && incrementShowers(), _set("_meteorShowerUses", showers);
      var ungId = $monster(_templateObject4119 || (_templateObject4119 = _taggedTemplateLiteral44(["ungulith"]))).id.toFixed(0), locketIdStrings = get("_locketMonstersFought").split(",").map(function(x) {
        return x.trim();
      }).filter(function(x) {
        return x.length > 0;
      });
      locketIdStrings.includes(ungId) || (locketIdStrings.push(ungId), _set("_locketMonstersFought", locketIdStrings.join(",")));
    },
    combat: new CSStrategy(function() {
      return Macro2.trySkill($skill(_templateObject4217 || (_templateObject4217 = _taggedTemplateLiteral44(["%fn, spit on me!"])))).trySkill($skill(_templateObject4315 || (_templateObject4315 = _taggedTemplateLiteral44(["Meteor Shower"])))).skill($skill(_templateObject4413 || (_templateObject4413 = _taggedTemplateLiteral44(["Use the Force"]))));
    })
  }, {
    name: "Meteorite Ring",
    core: "soft",
    completed: function() {
      return have($item(_templateObject4512 || (_templateObject4512 = _taggedTemplateLiteral44(["meteorite ring"]))));
    },
    ready: function() {
      return (0, import_kolmafia48.canadiaAvailable)() && $items(_templateObject4611 || (_templateObject4611 = _taggedTemplateLiteral44(["meteorite fragment, meteorite earring, meteorite necklace"]))).some(function(item6) {
        return have(item6);
      });
    },
    do: function() {
      var meteor = $items(_templateObject4711 || (_templateObject4711 = _taggedTemplateLiteral44(["meteorite necklace, meteorite fragment, meteorite earring"]))).find(function(item6) {
        return have(item6);
      });
      meteor && (unequip(meteor), (0, import_kolmafia48.retrieveItem)(1, $item(_templateObject4811 || (_templateObject4811 = _taggedTemplateLiteral44(["tenderizing hammer"])))), (0, import_kolmafia48.retrieveItem)(1, $item(_templateObject4912 || (_templateObject4912 = _taggedTemplateLiteral44(["jewelry-making pliers"])))), meteor !== $item(_templateObject5012 || (_templateObject5012 = _taggedTemplateLiteral44(["meteorite fragment"]))) && (0, import_kolmafia48.cliExecute)("smash ".concat(meteor)), (0, import_kolmafia48.cliExecute)("make ".concat($item(_templateObject5118 || (_templateObject5118 = _taggedTemplateLiteral44(["meteorite ring"]))))));
    }
  }, potionTask($item(_templateObject5215 || (_templateObject5215 = _taggedTemplateLiteral44(["corrupted marrow"])))), {
    name: "Swagger",
    completed: function() {
      return get("_bowleggedSwaggerUsed");
    },
    do: function() {
      return (0, import_kolmafia48.useSkill)($skill(_templateObject5313 || (_templateObject5313 = _taggedTemplateLiteral44(["Bow-Legged Swagger"]))));
    }
  }])
}, weapon_default = Weapon;

// src/index.ts
function _toConsumableArray21(arr) {
  return _arrayWithoutHoles21(arr) || _iterableToArray21(arr) || _unsupportedIterableToArray32(arr) || _nonIterableSpread21();
}
function _nonIterableSpread21() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray32(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray32(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray32(o, minLen);
  }
}
function _iterableToArray21(iter) {
  if (typeof Symbol != "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
    return Array.from(iter);
}
function _arrayWithoutHoles21(arr) {
  if (Array.isArray(arr))
    return _arrayLikeToArray32(arr);
}
function _arrayLikeToArray32(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function main() {
  sinceKolmafiaRevision(28500), logger_default.setLevel(LogLevels.DEBUG), CSEngine.runTests.apply(CSEngine, [prologue_default, coilwire_default, level_default].concat(_toConsumableArray21(stattests_default), [hotres_default, noncombat_default, familiarweight_default, weapon_default, spell_default, boozedrop_default]));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  main
});
