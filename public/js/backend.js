(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/backend"],{

/***/ "./node_modules/@coreui/coreui/dist/js/coreui.js":
/*!*******************************************************!*\
  !*** ./node_modules/@coreui/coreui/dist/js/coreui.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
  * CoreUI v2.1.9 (https://coreui.io)
  * Copyright 2019 Łukasz Holeczek
  * Licensed under MIT (https://coreui.io)
  */
(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js")) :
  undefined;
}(this, function (exports, $, PerfectScrollbar) { 'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;
  PerfectScrollbar = PerfectScrollbar && PerfectScrollbar.hasOwnProperty('default') ? PerfectScrollbar['default'] : PerfectScrollbar;

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.6.5' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = _global[SHARED] || (_global[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: _core.version,
    mode: 'global',
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
  });

  var id = 0;
  var px = Math.random();
  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var _wks = createCommonjsModule(function (module) {
  var store = _shared('wks');

  var Symbol = _global.Symbol;
  var USE_SYMBOL = typeof Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
  };

  $exports.store = store;
  });

  // 7.2.8 IsRegExp(argument)


  var MATCH = _wks('match');
  var _isRegexp = function (it) {
    var isRegExp;
    return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
  };

  var _anObject = function (it) {
    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  // 7.3.20 SpeciesConstructor(O, defaultConstructor)


  var SPECIES = _wks('species');
  var _speciesConstructor = function (O, D) {
    var C = _anObject(O).constructor;
    var S;
    return C === undefined || (S = _anObject(C)[SPECIES]) == undefined ? D : _aFunction(S);
  };

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  // true  -> String#at
  // false -> String#codePointAt
  var _stringAt = function (TO_STRING) {
    return function (that, pos) {
      var s = String(_defined(that));
      var i = _toInteger(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };

  var at = _stringAt(true);

   // `AdvanceStringIndex` abstract operation
  // https://tc39.github.io/ecma262/#sec-advancestringindex
  var _advanceStringIndex = function (S, index, unicode) {
    return index + (unicode ? at(S, index).length : 1);
  };

  // 7.1.15 ToLength

  var min = Math.min;
  var _toLength = function (it) {
    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  // getting tag from 19.1.3.6 Object.prototype.toString()

  var TAG = _wks('toStringTag');
  // ES3 wrong here
  var ARG = _cof(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) { /* empty */ }
  };

  var _classof = function (it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
      // builtinTag case
      : ARG ? _cof(O)
      // ES3 arguments fallback
      : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var builtinExec = RegExp.prototype.exec;

   // `RegExpExec` abstract operation
  // https://tc39.github.io/ecma262/#sec-regexpexec
  var _regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
      var result = exec.call(R, S);
      if (typeof result !== 'object') {
        throw new TypeError('RegExp exec method returned something other than an Object or null');
      }
      return result;
    }
    if (_classof(R) !== 'RegExp') {
      throw new TypeError('RegExp#exec called on incompatible receiver');
    }
    return builtinExec.call(R, S);
  };

  // 21.2.5.3 get RegExp.prototype.flags

  var _flags = function () {
    var that = _anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var nativeExec = RegExp.prototype.exec;
  // This always refers to the native implementation, because the
  // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
  // which loads this file before patching the method.
  var nativeReplace = String.prototype.replace;

  var patchedExec = nativeExec;

  var LAST_INDEX = 'lastIndex';

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/,
        re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
  })();

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + re.source + '$(?!\\s)', _flags.call(re));
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

      match = nativeExec.call(re, str);

      if (UPDATES_LAST_INDEX_WRONG && match) {
        re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        // eslint-disable-next-line no-loop-func
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var _regexpExec = patchedExec;

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !_fails(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var document$1 = _global.document;
  // typeof document.createElement is 'object' in old IE
  var is = _isObject(document$1) && _isObject(document$1.createElement);
  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _ie8DomDefine = !_descriptors && !_fails(function () {
    return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function (it, S) {
    if (!_isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var dP = Object.defineProperty;

  var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    _anObject(O);
    P = _toPrimitive(P, true);
    _anObject(Attributes);
    if (_ie8DomDefine) try {
      return dP(O, P, Attributes);
    } catch (e) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp = {
  	f: f
  };

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _hide = _descriptors ? function (object, key, value) {
    return _objectDp.f(object, key, _propertyDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var _functionToString = _shared('native-function-to-string', Function.toString);

  var _redefine = createCommonjsModule(function (module) {
  var SRC = _uid('src');

  var TO_STRING = 'toString';
  var TPL = ('' + _functionToString).split(TO_STRING);

  _core.inspectSource = function (it) {
    return _functionToString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if (O === _global) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      _hide(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      _hide(O, key, val);
    }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || _functionToString.call(this);
  });
  });

  // optional / simple context binding

  var _ctx = function (fn, that, length) {
    _aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
      // extend global
      if (target) _redefine(target, key, out, type & $export.U);
      // export
      if (exports[key] != out) _hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };
  _global.core = _core;
  // type bitmap
  $export.F = 1;   // forced
  $export.G = 2;   // global
  $export.S = 4;   // static
  $export.P = 8;   // proto
  $export.B = 16;  // bind
  $export.W = 32;  // wrap
  $export.U = 64;  // safe
  $export.R = 128; // real proto method for `library`
  var _export = $export;

  _export({
    target: 'RegExp',
    proto: true,
    forced: _regexpExec !== /./.exec
  }, {
    exec: _regexpExec
  });

  var SPECIES$1 = _wks('species');

  var REPLACE_SUPPORTS_NAMED_GROUPS = !_fails(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    return ''.replace(re, '$<a>') !== '7';
  });

  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
    // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () { return originalExec.apply(this, arguments); };
    var result = 'ab'.split(re);
    return result.length === 2 && result[0] === 'a' && result[1] === 'b';
  })();

  var _fixReWks = function (KEY, length, exec) {
    var SYMBOL = _wks(KEY);

    var DELEGATES_TO_SYMBOL = !_fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !_fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;
      re.exec = function () { execCalled = true; return null; };
      if (KEY === 'split') {
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES$1] = function () { return re; };
      }
      re[SYMBOL]('');
      return !execCalled;
    }) : undefined;

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
      (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
    ) {
      var nativeRegExpMethod = /./[SYMBOL];
      var fns = exec(
        _defined,
        SYMBOL,
        ''[KEY],
        function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
          if (regexp.exec === _regexpExec) {
            if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
              // The native String method already delegates to @@method (this
              // polyfilled function), leasing to infinite recursion.
              // We avoid it by directly calling the native @@method method.
              return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
            }
            return { done: true, value: nativeMethod.call(str, regexp, arg2) };
          }
          return { done: false };
        }
      );
      var strfn = fns[0];
      var rxfn = fns[1];

      _redefine(String.prototype, KEY, strfn);
      _hide(RegExp.prototype, SYMBOL, length == 2
        // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
        // 21.2.5.11 RegExp.prototype[@@split](string, limit)
        ? function (string, arg) { return rxfn.call(string, this, arg); }
        // 21.2.5.6 RegExp.prototype[@@match](string)
        // 21.2.5.9 RegExp.prototype[@@search](string)
        : function (string) { return rxfn.call(string, this); }
      );
    }
  };

  var $min = Math.min;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX$1 = 'lastIndex';
  var MAX_UINT32 = 0xffffffff;

  // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
  var SUPPORTS_Y = !_fails(function () { });

  // @@split logic
  _fixReWks('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
    var internalSplit;
    if (
      'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
      'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
      'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
      '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
      '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
      ''[$SPLIT](/.?/)[LENGTH]
    ) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = String(this);
        if (separator === undefined && limit === 0) return [];
        // If `separator` is not a regex, use native split
        if (!_isRegexp(separator)) return $split.call(string, separator, limit);
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') +
                    (separator.multiline ? 'm' : '') +
                    (separator.unicode ? 'u' : '') +
                    (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while (match = _regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy[LAST_INDEX$1];
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
            lastLength = match[0][LENGTH];
            lastLastIndex = lastIndex;
            if (output[LENGTH] >= splitLimit) break;
          }
          if (separatorCopy[LAST_INDEX$1] === match.index) separatorCopy[LAST_INDEX$1]++; // Avoid an infinite loop
        }
        if (lastLastIndex === string[LENGTH]) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
      };
    // Chakra, V8
    } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
      };
    } else {
      internalSplit = $split;
    }

    return [
      // `String.prototype.split` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.split
      function split(separator, limit) {
        var O = defined(this);
        var splitter = separator == undefined ? undefined : separator[SPLIT];
        return splitter !== undefined
          ? splitter.call(separator, O, limit)
          : internalSplit.call(String(O), separator, limit);
      },
      // `RegExp.prototype[@@split]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
      //
      // NOTE: This cannot be properly polyfilled in engines that don't support
      // the 'y' flag.
      function (regexp, limit) {
        var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
        if (res.done) return res.value;

        var rx = _anObject(regexp);
        var S = String(this);
        var C = _speciesConstructor(rx, RegExp);

        var unicodeMatching = rx.unicode;
        var flags = (rx.ignoreCase ? 'i' : '') +
                    (rx.multiline ? 'm' : '') +
                    (rx.unicode ? 'u' : '') +
                    (SUPPORTS_Y ? 'y' : 'g');

        // ^(? + rx + ) is needed, in combination with some S slicing, to
        // simulate the 'y' flag.
        var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (S.length === 0) return _regexpExecAbstract(splitter, S) === null ? [S] : [];
        var p = 0;
        var q = 0;
        var A = [];
        while (q < S.length) {
          splitter.lastIndex = SUPPORTS_Y ? q : 0;
          var z = _regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
          var e;
          if (
            z === null ||
            (e = $min(_toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
          ) {
            q = _advanceStringIndex(S, q, unicodeMatching);
          } else {
            A.push(S.slice(p, q));
            if (A.length === lim) return A;
            for (var i = 1; i <= z.length - 1; i++) {
              A.push(z[i]);
              if (A.length === lim) return A;
            }
            q = p = e;
          }
        }
        A.push(S.slice(p));
        return A;
      }
    ];
  });

  /*
  * required polyfills
  */
  // eslint-disable-next-line consistent-return
  (function () {
    if (typeof NodeList.prototype.forEach === 'function') {
      return false;
    }

    NodeList.prototype.forEach = Array.prototype.forEach;
  })();
  /** IE9, IE10 and IE11 requires all of the following polyfills. **/
  // import 'core-js/es6/symbol'
  // import 'core-js/es6/object'
  // import 'core-js/es6/function'
  // import 'core-js/es6/parse-int'
  // import 'core-js/es6/parse-float'
  // import 'core-js/es6/number'
  // import 'core-js/es6/math'
  // import 'core-js/es6/string'
  // import 'core-js/es6/date'
  // import 'core-js/es6/array'
  // import 'core-js/es6/regexp'
  // import 'core-js/es6/map'
  // import 'core-js/es6/weak-map'
  // import 'core-js/es6/set'
  // import 'core-js/es7/object'

  /** IE10 and IE11 requires the following for the Reflect API. */
  // import 'core-js/es6/reflect'

  /** Evergreen browsers require these. **/
  // Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.
  // import 'core-js/es7/reflect'
  // CustomEvent() constructor functionality in IE9, IE10, IE11
  // (function () {
  //
  //   if ( typeof window.CustomEvent === "function" ) return false
  //
  //   function CustomEvent ( event, params ) {
  //     params = params || { bubbles: false, cancelable: false, detail: undefined }
  //     var evt = document.createEvent( 'CustomEvent' )
  //     evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail )
  //     return evt
  //   }
  //
  //   CustomEvent.prototype = window.Event.prototype
  //
  //   window.CustomEvent = CustomEvent
  // })()

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return _cof(it) == 'String' ? it.split('') : Object(it);
  };

  // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject = function (it) {
    return _iobject(_defined(it));
  };

  var max = Math.max;
  var min$1 = Math.min;
  var _toAbsoluteIndex = function (index, length) {
    index = _toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  // false -> Array#indexOf
  // true  -> Array#includes



  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = _toIobject($this);
      var length = _toLength(O.length);
      var index = _toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var shared = _shared('keys');

  var _sharedKey = function (key) {
    return shared[key] || (shared[key] = _uid(key));
  };

  var arrayIndexOf = _arrayIncludes(false);
  var IE_PROTO = _sharedKey('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = _toIobject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (_has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

  // IE 8- don't enum bug keys
  var _enumBugKeys = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)



  var _objectKeys = Object.keys || function keys(O) {
    return _objectKeysInternal(O, _enumBugKeys);
  };

  var f$1 = Object.getOwnPropertySymbols;

  var _objectGops = {
  	f: f$1
  };

  var f$2 = {}.propertyIsEnumerable;

  var _objectPie = {
  	f: f$2
  };

  // 7.1.13 ToObject(argument)

  var _toObject = function (it) {
    return Object(_defined(it));
  };

  // 19.1.2.1 Object.assign(target, source, ...)





  var $assign = Object.assign;

  // should work with symbols and should have deterministic property order (V8 bug)
  var _objectAssign = !$assign || _fails(function () {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) { B[k] = k; });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
    var T = _toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = _objectGops.f;
    var isEnum = _objectPie.f;
    while (aLen > index) {
      var S = _iobject(arguments[index++]);
      var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    } return T;
  } : $assign;

  // 19.1.3.1 Object.assign(target, source)


  _export(_export.S + _export.F, 'Object', { assign: _objectAssign });

  var _iterators = {};

  var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    _anObject(O);
    var keys = _objectKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
    return O;
  };

  var document$2 = _global.document;
  var _html = document$2 && document$2.documentElement;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



  var IE_PROTO$1 = _sharedKey('IE_PROTO');
  var Empty = function () { /* empty */ };
  var PROTOTYPE$1 = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = _domCreate('iframe');
    var i = _enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    _html.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
    return createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE$1] = _anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = createDict();
    return Properties === undefined ? result : _objectDps(result, Properties);
  };

  var def = _objectDp.f;

  var TAG$1 = _wks('toStringTag');

  var _setToStringTag = function (it, tag, stat) {
    if (it && !_has(it = stat ? it : it.prototype, TAG$1)) def(it, TAG$1, { configurable: true, value: tag });
  };

  var IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  _hide(IteratorPrototype, _wks('iterator'), function () { return this; });

  var _iterCreate = function (Constructor, NAME, next) {
    Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
    _setToStringTag(Constructor, NAME + ' Iterator');
  };

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


  var IE_PROTO$2 = _sharedKey('IE_PROTO');
  var ObjectProto = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = _toObject(O);
    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  };

  var ITERATOR = _wks('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function () { return this; };

  var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    _iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS: return function keys() { return new Constructor(this, kind); };
        case VALUES: return function values() { return new Constructor(this, kind); };
      } return function entries() { return new Constructor(this, kind); };
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = _objectGpo($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        _setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if (typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() { return $native.call(this); };
    }
    // Define iterator
    if (BUGGY || VALUES_BUG || !proto[ITERATOR]) {
      _hide(proto, ITERATOR, $default);
    }
    // Plug for library
    _iterators[NAME] = $default;
    _iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) _redefine(proto, key, methods[key]);
      } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };

  var $at = _stringAt(true);

  // 21.1.3.27 String.prototype[@@iterator]()
  _iterDefine(String, 'String', function (iterated) {
    this._t = String(iterated); // target
    this._i = 0;                // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var index = this._i;
    var point;
    if (index >= O.length) return { value: undefined, done: true };
    point = $at(O, index);
    this._i += point.length;
    return { value: point, done: false };
  });

  // call something on iterator step with safe closing on error

  var _iterCall = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) _anObject(ret.call(iterator));
      throw e;
    }
  };

  // check on default Array iterator

  var ITERATOR$1 = _wks('iterator');
  var ArrayProto = Array.prototype;

  var _isArrayIter = function (it) {
    return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
  };

  var _createProperty = function (object, index, value) {
    if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
    else object[index] = value;
  };

  var ITERATOR$2 = _wks('iterator');

  var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$2]
      || it['@@iterator']
      || _iterators[_classof(it)];
  };

  var ITERATOR$3 = _wks('iterator');
  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR$3]();
    riter['return'] = function () { SAFE_CLOSING = true; };
  } catch (e) { /* empty */ }

  var _iterDetect = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7];
      var iter = arr[ITERATOR$3]();
      iter.next = function () { return { done: safe = true }; };
      arr[ITERATOR$3] = function () { return iter; };
      exec(arr);
    } catch (e) { /* empty */ }
    return safe;
  };

  _export(_export.S + _export.F * !_iterDetect(function (iter) { }), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
      var O = _toObject(arrayLike);
      var C = typeof this == 'function' ? this : Array;
      var aLen = arguments.length;
      var mapfn = aLen > 1 ? arguments[1] : undefined;
      var mapping = mapfn !== undefined;
      var index = 0;
      var iterFn = core_getIteratorMethod(O);
      var length, result, step, iterator;
      if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
      // if object isn't iterable or it's array with default iterator - use simple case
      if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = _toLength(O.length);
        for (result = new C(length); length > index; index++) {
          _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }
      result.length = index;
      return result;
    }
  });

  var max$1 = Math.max;
  var min$2 = Math.min;
  var floor$1 = Math.floor;
  var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // @@replace logic
  _fixReWks('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
    return [
      // `String.prototype.replace` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = defined(this);
        var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
        return fn !== undefined
          ? fn.call(searchValue, O, replaceValue)
          : $replace.call(String(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
      function (regexp, replaceValue) {
        var res = maybeCallNative($replace, regexp, this, replaceValue);
        if (res.done) return res.value;

        var rx = _anObject(regexp);
        var S = String(this);
        var functionalReplace = typeof replaceValue === 'function';
        if (!functionalReplace) replaceValue = String(replaceValue);
        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = _regexpExecAbstract(rx, S);
          if (result === null) break;
          results.push(result);
          if (!global) break;
          var matchStr = String(result[0]);
          if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
        }
        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];
          var matched = String(result[0]);
          var position = max$1(min$2(_toInteger(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = [matched].concat(captures, position, S);
            if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
            var replacement = String(replaceValue.apply(undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + S.slice(nextSourcePosition);
      }
    ];

      // https://tc39.github.io/ecma262/#sec-getsubstitution
    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
      if (namedCaptures !== undefined) {
        namedCaptures = _toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }
      return $replace.call(replacement, symbols, function (match, ch) {
        var capture;
        switch (ch.charAt(0)) {
          case '$': return '$';
          case '&': return matched;
          case '`': return str.slice(0, position);
          case "'": return str.slice(tailPos);
          case '<':
            capture = namedCaptures[ch.slice(1, -1)];
            break;
          default: // \d\d?
            var n = +ch;
            if (n === 0) return match;
            if (n > m) {
              var f = floor$1(n / 10);
              if (f === 0) return match;
              if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
              return match;
            }
            capture = captures[n - 1];
        }
        return capture === undefined ? '' : capture;
      });
    }
  });

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): ajax-load.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  var AjaxLoad = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'ajaxLoad';
    var VERSION = '2.1.9';
    var DATA_KEY = 'coreui.ajaxLoad';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var ClassName = {
      ACTIVE: 'active',
      NAV_PILLS: 'nav-pills',
      NAV_TABS: 'nav-tabs',
      OPEN: 'open',
      VIEW_SCRIPT: 'view-script'
    };
    var Event = {
      CLICK: 'click'
    };
    var Selector = {
      HEAD: 'head',
      NAV_DROPDOWN: '.sidebar-nav .nav-dropdown',
      NAV_LINK: '.sidebar-nav .nav-link',
      NAV_ITEM: '.sidebar-nav .nav-item',
      VIEW_SCRIPT: '.view-script'
    };
    var Default = {
      defaultPage: 'main.html',
      errorPage: '404.html',
      subpagesDirectory: 'views/'
    };

    var AjaxLoad =
    /*#__PURE__*/
    function () {
      function AjaxLoad(element, config) {
        this._config = this._getConfig(config);
        this._element = element;
        var url = location.hash.replace(/^#/, '');

        if (url !== '') {
          this.setUpUrl(url);
        } else {
          this.setUpUrl(this._config.defaultPage);
        }

        this._addEventListeners();
      } // Getters


      var _proto = AjaxLoad.prototype;

      // Public
      _proto.loadPage = function loadPage(url) {
        var element = this._element;
        var config = this._config;

        var loadScripts = function loadScripts(src, element) {
          if (element === void 0) {
            element = 0;
          }

          var script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = src[element];
          script.className = ClassName.VIEW_SCRIPT; // eslint-disable-next-line no-multi-assign

          script.onload = script.onreadystatechange = function () {
            if (!this.readyState || this.readyState === 'complete') {
              if (src.length > element + 1) {
                loadScripts(src, element + 1);
              }
            }
          };

          var body = document.getElementsByTagName('body')[0];
          body.appendChild(script);
        };

        $.ajax({
          type: 'GET',
          url: config.subpagesDirectory + url,
          dataType: 'html',
          beforeSend: function beforeSend() {
            $(Selector.VIEW_SCRIPT).remove();
          },
          success: function success(result) {
            var wrapper = document.createElement('div');
            wrapper.innerHTML = result;
            var scripts = Array.from(wrapper.querySelectorAll('script')).map(function (script) {
              return script.attributes.getNamedItem('src').nodeValue;
            });
            wrapper.querySelectorAll('script').forEach(function (script) {
              return script.parentNode.removeChild(script);
            });
            $('body').animate({
              scrollTop: 0
            }, 0);
            $(element).html(wrapper);

            if (scripts.length) {
              loadScripts(scripts);
            }

            window.location.hash = url;
          },
          error: function error() {
            window.location.href = config.errorPage;
          }
        });
      };

      _proto.setUpUrl = function setUpUrl(url) {
        $(Selector.NAV_LINK).removeClass(ClassName.ACTIVE);
        $(Selector.NAV_DROPDOWN).removeClass(ClassName.OPEN);
        $(Selector.NAV_DROPDOWN + ":has(a[href=\"" + url.replace(/^\//, '').split('?')[0] + "\"])").addClass(ClassName.OPEN);
        $(Selector.NAV_ITEM + " a[href=\"" + url.replace(/^\//, '').split('?')[0] + "\"]").addClass(ClassName.ACTIVE);
        this.loadPage(url);
      };

      _proto.loadBlank = function loadBlank(url) {
        window.open(url);
      };

      _proto.loadTop = function loadTop(url) {
        window.location = url;
      } // Private
      ;

      _proto._getConfig = function _getConfig(config) {
        config = Object.assign({}, Default, config);
        return config;
      };

      _proto._addEventListeners = function _addEventListeners() {
        var _this = this;

        $(document).on(Event.CLICK, Selector.NAV_LINK + "[href!=\"#\"]", function (event) {
          event.preventDefault();
          event.stopPropagation();

          if (event.currentTarget.target === '_top') {
            _this.loadTop(event.currentTarget.href);
          } else if (event.currentTarget.target === '_blank') {
            _this.loadBlank(event.currentTarget.href);
          } else {
            _this.setUpUrl(event.currentTarget.getAttribute('href'));
          }
        });
      } // Static
      ;

      AjaxLoad._jQueryInterface = function _jQueryInterface(config) {
        return this.each(function () {
          var data = $(this).data(DATA_KEY);

          var _config = typeof config === 'object' && config;

          if (!data) {
            data = new AjaxLoad(this, _config);
            $(this).data(DATA_KEY, data);
          }
        });
      };

      _createClass(AjaxLoad, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }, {
        key: "Default",
        get: function get() {
          return Default;
        }
      }]);

      return AjaxLoad;
    }();
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */


    $.fn[NAME] = AjaxLoad._jQueryInterface;
    $.fn[NAME].Constructor = AjaxLoad;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return AjaxLoad._jQueryInterface;
    };

    return AjaxLoad;
  }($);

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): toggle-classes.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */
  var removeClasses = function removeClasses(classNames) {
    return classNames.map(function (className) {
      return document.body.classList.contains(className);
    }).indexOf(true) !== -1;
  };

  var toggleClasses = function toggleClasses(toggleClass, classNames) {
    var breakpoint = classNames.indexOf(toggleClass);
    var newClassNames = classNames.slice(0, breakpoint + 1);

    if (removeClasses(newClassNames)) {
      newClassNames.map(function (className) {
        return document.body.classList.remove(className);
      });
    } else {
      document.body.classList.add(toggleClass);
    }
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): aside-menu.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  var AsideMenu = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'aside-menu';
    var VERSION = '2.1.9';
    var DATA_KEY = 'coreui.aside-menu';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Event = {
      CLICK: 'click',
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      TOGGLE: 'toggle'
    };
    var Selector = {
      BODY: 'body',
      ASIDE_MENU: '.aside-menu',
      ASIDE_MENU_TOGGLER: '.aside-menu-toggler'
    };
    var ShowClassNames = ['aside-menu-show', 'aside-menu-sm-show', 'aside-menu-md-show', 'aside-menu-lg-show', 'aside-menu-xl-show'];
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var AsideMenu =
    /*#__PURE__*/
    function () {
      function AsideMenu(element) {
        this._element = element;

        this._addEventListeners();
      } // Getters


      var _proto = AsideMenu.prototype;

      // Private
      _proto._addEventListeners = function _addEventListeners() {
        $(document).on(Event.CLICK, Selector.ASIDE_MENU_TOGGLER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          var toggle = event.currentTarget.dataset ? event.currentTarget.dataset.toggle : $(event.currentTarget).data('toggle');
          toggleClasses(toggle, ShowClassNames);
        });
      } // Static
      ;

      AsideMenu._jQueryInterface = function _jQueryInterface() {
        return this.each(function () {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new AsideMenu(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(AsideMenu, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return AsideMenu;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      var asideMenu = $(Selector.ASIDE_MENU);

      AsideMenu._jQueryInterface.call(asideMenu);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = AsideMenu._jQueryInterface;
    $.fn[NAME].Constructor = AsideMenu;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return AsideMenu._jQueryInterface;
    };

    return AsideMenu;
  }($);

  // 7.2.2 IsArray(argument)

  var _isArray = Array.isArray || function isArray(arg) {
    return _cof(arg) == 'Array';
  };

  var SPECIES$2 = _wks('species');

  var _arraySpeciesConstructor = function (original) {
    var C;
    if (_isArray(original)) {
      C = original.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
      if (_isObject(C)) {
        C = C[SPECIES$2];
        if (C === null) C = undefined;
      }
    } return C === undefined ? Array : C;
  };

  // 9.4.2.3 ArraySpeciesCreate(originalArray, length)


  var _arraySpeciesCreate = function (original, length) {
    return new (_arraySpeciesConstructor(original))(length);
  };

  // 0 -> Array#forEach
  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex





  var _arrayMethods = function (TYPE, $create) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    var create = $create || _arraySpeciesCreate;
    return function ($this, callbackfn, that) {
      var O = _toObject($this);
      var self = _iobject(O);
      var f = _ctx(callbackfn, that, 3);
      var length = _toLength(self.length);
      var index = 0;
      var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
      var val, res;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res;   // map
          else if (res) switch (TYPE) {
            case 3: return true;             // some
            case 5: return val;              // find
            case 6: return index;            // findIndex
            case 2: result.push(val);        // filter
          } else if (IS_EVERY) return false; // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };

  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = _wks('unscopables');
  var ArrayProto$1 = Array.prototype;
  if (ArrayProto$1[UNSCOPABLES] == undefined) _hide(ArrayProto$1, UNSCOPABLES, {});
  var _addToUnscopables = function (key) {
    ArrayProto$1[UNSCOPABLES][key] = true;
  };

  // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

  var $find = _arrayMethods(5);
  var KEY = 'find';
  var forced = true;
  // Shouldn't skip holes
  if (KEY in []) Array(1)[KEY](function () { forced = false; });
  _export(_export.P + _export.F * forced, 'Array', {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  _addToUnscopables(KEY);

  // @@match logic
  _fixReWks('match', 1, function (defined, MATCH, $match, maybeCallNative) {
    return [
      // `String.prototype.match` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.match
      function match(regexp) {
        var O = defined(this);
        var fn = regexp == undefined ? undefined : regexp[MATCH];
        return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
      },
      // `RegExp.prototype[@@match]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
      function (regexp) {
        var res = maybeCallNative($match, regexp, this);
        if (res.done) return res.value;
        var rx = _anObject(regexp);
        var S = String(this);
        if (!rx.global) return _regexpExecAbstract(rx, S);
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
        var A = [];
        var n = 0;
        var result;
        while ((result = _regexpExecAbstract(rx, S)) !== null) {
          var matchStr = String(result[0]);
          A[n] = matchStr;
          if (matchStr === '') rx.lastIndex = _advanceStringIndex(S, _toLength(rx.lastIndex), fullUnicode);
          n++;
        }
        return n === 0 ? null : A;
      }
    ];
  });

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.1.9): get-css-custom-properties.js
   * Licensed under MIT (https://coreui.io/license)
   * @returns {string} css custom property name
   * --------------------------------------------------------------------------
   */
  var getCssCustomProperties = function getCssCustomProperties() {
    var cssCustomProperties = {};
    var sheets = document.styleSheets;
    var cssText = '';

    for (var i = sheets.length - 1; i > -1; i--) {
      var rules = sheets[i].cssRules;

      for (var j = rules.length - 1; j > -1; j--) {
        if (rules[j].selectorText === '.ie-custom-properties') {
          cssText = rules[j].cssText;
          break;
        }
      }

      if (cssText) {
        break;
      }
    }

    cssText = cssText.substring(cssText.lastIndexOf('{') + 1, cssText.lastIndexOf('}'));
    cssText.split(';').forEach(function (property) {
      if (property) {
        var name = property.split(': ')[0];
        var value = property.split(': ')[1];

        if (name && value) {
          cssCustomProperties["--" + name.trim()] = value.trim();
        }
      }
    });
    return cssCustomProperties;
  };

  var minIEVersion = 10;

  var isIE1x = function isIE1x() {
    return Boolean(document.documentMode) && document.documentMode >= minIEVersion;
  };

  var isCustomProperty = function isCustomProperty(property) {
    return property.match(/^--.*/i);
  };

  var getStyle = function getStyle(property, element) {
    if (element === void 0) {
      element = document.body;
    }

    var style;

    if (isCustomProperty(property) && isIE1x()) {
      var cssCustomProperties = getCssCustomProperties();
      style = cssCustomProperties[property];
    } else {
      style = window.getComputedStyle(element, null).getPropertyValue(property).replace(/^\s/, '');
    }

    return style;
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): sidebar.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  var Sidebar = function ($) {
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */
    var NAME = 'sidebar';
    var VERSION = '2.1.9';
    var DATA_KEY = 'coreui.sidebar';
    var EVENT_KEY = "." + DATA_KEY;
    var DATA_API_KEY = '.data-api';
    var JQUERY_NO_CONFLICT = $.fn[NAME];
    var Default = {
      transition: 400
    };
    var ClassName = {
      ACTIVE: 'active',
      BRAND_MINIMIZED: 'brand-minimized',
      NAV_DROPDOWN_TOGGLE: 'nav-dropdown-toggle',
      OPEN: 'open',
      SIDEBAR_FIXED: 'sidebar-fixed',
      SIDEBAR_MINIMIZED: 'sidebar-minimized',
      SIDEBAR_OFF_CANVAS: 'sidebar-off-canvas'
    };
    var Event = {
      CLICK: 'click',
      DESTROY: 'destroy',
      INIT: 'init',
      LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
      TOGGLE: 'toggle',
      UPDATE: 'update'
    };
    var Selector = {
      BODY: 'body',
      BRAND_MINIMIZER: '.brand-minimizer',
      NAV_DROPDOWN_TOGGLE: '.nav-dropdown-toggle',
      NAV_DROPDOWN_ITEMS: '.nav-dropdown-items',
      NAV_ITEM: '.nav-item',
      NAV_LINK: '.nav-link',
      NAV_LINK_QUERIED: '.nav-link-queried',
      NAVIGATION_CONTAINER: '.sidebar-nav',
      NAVIGATION: '.sidebar-nav > .nav',
      SIDEBAR: '.sidebar',
      SIDEBAR_MINIMIZER: '.sidebar-minimizer',
      SIDEBAR_TOGGLER: '.sidebar-toggler'
    };
    var ShowClassNames = ['sidebar-show', 'sidebar-sm-show', 'sidebar-md-show', 'sidebar-lg-show', 'sidebar-xl-show'];
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

    var Sidebar =
    /*#__PURE__*/
    function () {
      function Sidebar(element) {
        this._element = element;
        this.mobile = false;
        this.ps = null;
        this.perfectScrollbar(Event.INIT);
        this.setActiveLink();
        this._breakpointTest = this._breakpointTest.bind(this);
        this._clickOutListener = this._clickOutListener.bind(this);

        this._addEventListeners();

        this._addMediaQuery();
      } // Getters


      var _proto = Sidebar.prototype;

      // Public
      _proto.perfectScrollbar = function perfectScrollbar(event) {
        var _this = this;

        if (typeof PerfectScrollbar !== 'undefined') {
          var classList = document.body.classList;

          if (event === Event.INIT && !classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
            this.ps = this.makeScrollbar();
          }

          if (event === Event.DESTROY) {
            this.destroyScrollbar();
          }

          if (event === Event.TOGGLE) {
            if (classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
              this.destroyScrollbar();
            } else {
              this.destroyScrollbar();
              this.ps = this.makeScrollbar();
            }
          }

          if (event === Event.UPDATE && !classList.contains(ClassName.SIDEBAR_MINIMIZED)) {
            // ToDo: Add smooth transition
            setTimeout(function () {
              _this.destroyScrollbar();

              _this.ps = _this.makeScrollbar();
            }, Default.transition);
          }
        }
      };

      _proto.makeScrollbar = function makeScrollbar(container) {
        if (container === void 0) {
          container = Selector.NAVIGATION_CONTAINER;
        }

        var ps = new PerfectScrollbar(document.querySelector(container), {
          suppressScrollX: true
        }); // ToDo: find real fix for ps rtl

        ps.isRtl = false;
        return ps;
      };

      _proto.destroyScrollbar = function destroyScrollbar() {
        if (this.ps) {
          this.ps.destroy();
          this.ps = null;
        }
      };

      _proto.setActiveLink = function setActiveLink() {
        $(Selector.NAVIGATION).find(Selector.NAV_LINK).each(function (key, value) {
          var link = value;
          var cUrl;

          if (link.classList.contains(Selector.NAV_LINK_QUERIED)) {
            cUrl = String(window.location);
          } else {
            cUrl = String(window.location).split('?')[0];
          }

          if (cUrl.substr(cUrl.length - 1) === '#') {
            cUrl = cUrl.slice(0, -1);
          }

          if ($($(link))[0].href === cUrl) {
            $(link).addClass(ClassName.ACTIVE).parents(Selector.NAV_DROPDOWN_ITEMS).add(link).each(function (key, value) {
              link = value;
              $(link).parent().addClass(ClassName.OPEN);
            });
          }
        });
      } // Private
      ;

      _proto._addMediaQuery = function _addMediaQuery() {
        var sm = getStyle('--breakpoint-sm');

        if (!sm) {
          return;
        }

        var smVal = parseInt(sm, 10) - 1;
        var mediaQueryList = window.matchMedia("(max-width: " + smVal + "px)");

        this._breakpointTest(mediaQueryList);

        mediaQueryList.addListener(this._breakpointTest);
      };

      _proto._breakpointTest = function _breakpointTest(e) {
        this.mobile = Boolean(e.matches);

        this._toggleClickOut();
      };

      _proto._clickOutListener = function _clickOutListener(event) {
        if (!this._element.contains(event.target)) {
          // or use: event.target.closest(Selector.SIDEBAR) === null
          event.preventDefault();
          event.stopPropagation();

          this._removeClickOut();

          document.body.classList.remove('sidebar-show');
        }
      };

      _proto._addClickOut = function _addClickOut() {
        document.addEventListener(Event.CLICK, this._clickOutListener, true);
      };

      _proto._removeClickOut = function _removeClickOut() {
        document.removeEventListener(Event.CLICK, this._clickOutListener, true);
      };

      _proto._toggleClickOut = function _toggleClickOut() {
        if (this.mobile && document.body.classList.contains('sidebar-show')) {
          document.body.classList.remove('aside-menu-show');

          this._addClickOut();
        } else {
          this._removeClickOut();
        }
      };

      _proto._addEventListeners = function _addEventListeners() {
        var _this2 = this;

        $(document).on(Event.CLICK, Selector.BRAND_MINIMIZER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          $(Selector.BODY).toggleClass(ClassName.BRAND_MINIMIZED);
        });
        $(document).on(Event.CLICK, Selector.NAV_DROPDOWN_TOGGLE, function (event) {
          event.preventDefault();
          event.stopPropagation();
          var dropdown = event.target;
          $(dropdown).parent().toggleClass(ClassName.OPEN);

          _this2.perfectScrollbar(Event.UPDATE);
        });
        $(document).on(Event.CLICK, Selector.SIDEBAR_MINIMIZER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          $(Selector.BODY).toggleClass(ClassName.SIDEBAR_MINIMIZED);

          _this2.perfectScrollbar(Event.TOGGLE);
        });
        $(document).on(Event.CLICK, Selector.SIDEBAR_TOGGLER, function (event) {
          event.preventDefault();
          event.stopPropagation();
          var toggle = event.currentTarget.dataset ? event.currentTarget.dataset.toggle : $(event.currentTarget).data('toggle');
          toggleClasses(toggle, ShowClassNames);

          _this2._toggleClickOut();
        });
        $(Selector.NAVIGATION + " > " + Selector.NAV_ITEM + " " + Selector.NAV_LINK + ":not(" + Selector.NAV_DROPDOWN_TOGGLE + ")").on(Event.CLICK, function () {
          _this2._removeClickOut();

          document.body.classList.remove('sidebar-show');
        });
      } // Static
      ;

      Sidebar._jQueryInterface = function _jQueryInterface() {
        return this.each(function () {
          var $element = $(this);
          var data = $element.data(DATA_KEY);

          if (!data) {
            data = new Sidebar(this);
            $element.data(DATA_KEY, data);
          }
        });
      };

      _createClass(Sidebar, null, [{
        key: "VERSION",
        get: function get() {
          return VERSION;
        }
      }]);

      return Sidebar;
    }();
    /**
     * ------------------------------------------------------------------------
     * Data Api implementation
     * ------------------------------------------------------------------------
     */


    $(window).on(Event.LOAD_DATA_API, function () {
      var sidebar = $(Selector.SIDEBAR);

      Sidebar._jQueryInterface.call(sidebar);
    });
    /**
     * ------------------------------------------------------------------------
     * jQuery
     * ------------------------------------------------------------------------
     */

    $.fn[NAME] = Sidebar._jQueryInterface;
    $.fn[NAME].Constructor = Sidebar;

    $.fn[NAME].noConflict = function () {
      $.fn[NAME] = JQUERY_NO_CONFLICT;
      return Sidebar._jQueryInterface;
    };

    return Sidebar;
  }($);

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.1.9): hex-to-rgb.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var hexToRgb = function hexToRgb(color) {
    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

    if (!hex) {
      throw new Error(color + " is not a valid hex color");
    }

    var r;
    var g;
    var b;

    if (color.length === 7) {
      r = parseInt(color.substring(1, 3), 16);
      g = parseInt(color.substring(3, 5), 16);
      b = parseInt(color.substring(5, 7), 16);
    } else {
      r = parseInt(color.substring(1, 2), 16);
      g = parseInt(color.substring(2, 3), 16);
      b = parseInt(color.substring(3, 5), 16);
    }

    return "rgba(" + r + ", " + g + ", " + b + ")";
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI Utilities (v2.1.9): hex-to-rgba.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var hexToRgba = function hexToRgba(color, opacity) {
    if (opacity === void 0) {
      opacity = 100;
    }

    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    var hex = color.match(/^#(?:[0-9a-f]{3}){1,2}$/i);

    if (!hex) {
      throw new Error(color + " is not a valid hex color");
    }

    var r;
    var g;
    var b;

    if (color.length === 7) {
      r = parseInt(color.substring(1, 3), 16);
      g = parseInt(color.substring(3, 5), 16);
      b = parseInt(color.substring(5, 7), 16);
    } else {
      r = parseInt(color.substring(1, 2), 16);
      g = parseInt(color.substring(2, 3), 16);
      b = parseInt(color.substring(3, 5), 16);
    }

    return "rgba(" + r + ", " + g + ", " + b + ", " + opacity / 100 + ")";
  };

  // 21.2.5.3 get RegExp.prototype.flags()
  if (_descriptors && /./g.flags != 'g') _objectDp.f(RegExp.prototype, 'flags', {
    configurable: true,
    get: _flags
  });

  var TO_STRING = 'toString';
  var $toString = /./[TO_STRING];

  var define = function (fn) {
    _redefine(RegExp.prototype, TO_STRING, fn, true);
  };

  // 21.2.5.14 RegExp.prototype.toString()
  if (_fails(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
    define(function toString() {
      var R = _anObject(this);
      return '/'.concat(R.source, '/',
        'flags' in R ? R.flags : !_descriptors && R instanceof RegExp ? _flags.call(R) : undefined);
    });
  // FF44- RegExp#toString has a wrong name
  } else if ($toString.name != TO_STRING) {
    define(function toString() {
      return $toString.call(this);
    });
  }

  // 19.1.3.6 Object.prototype.toString()

  var test = {};
  test[_wks('toStringTag')] = 'z';
  if (test + '' != '[object z]') {
    _redefine(Object.prototype, 'toString', function toString() {
      return '[object ' + _classof(this) + ']';
    }, true);
  }

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): rgb-to-hex.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  /* eslint-disable no-magic-numbers */
  var rgbToHex = function rgbToHex(color) {
    if (typeof color === 'undefined') {
      throw new Error('Hex color is not defined');
    }

    if (color === 'transparent') {
      return '#00000000';
    }

    var rgb = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

    if (!rgb) {
      throw new Error(color + " is not a valid rgb color");
    }

    var r = "0" + parseInt(rgb[1], 10).toString(16);
    var g = "0" + parseInt(rgb[2], 10).toString(16);
    var b = "0" + parseInt(rgb[3], 10).toString(16);
    return "#" + r.slice(-2) + g.slice(-2) + b.slice(-2);
  };

  /**
   * --------------------------------------------------------------------------
   * CoreUI (v2.1.9): index.js
   * Licensed under MIT (https://coreui.io/license)
   * --------------------------------------------------------------------------
   */

  (function ($) {
    if (typeof $ === 'undefined') {
      throw new TypeError('CoreUI\'s JavaScript requires jQuery. jQuery must be included before CoreUI\'s JavaScript.');
    }

    var version = $.fn.jquery.split(' ')[0].split('.');
    var minMajor = 1;
    var ltMajor = 2;
    var minMinor = 9;
    var minPatch = 1;
    var maxMajor = 4;

    if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
      throw new Error('CoreUI\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
    }
  })($);
  window.getStyle = getStyle;
  window.hexToRgb = hexToRgb;
  window.hexToRgba = hexToRgba;
  window.rgbToHex = rgbToHex;

  exports.AjaxLoad = AjaxLoad;
  exports.AsideMenu = AsideMenu;
  exports.Sidebar = Sidebar;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=coreui.js.map


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * perfect-scrollbar v1.4.0
 * (c) 2018 Hyunje Jun
 * @license MIT
 */
function get(element) {
  return getComputedStyle(element);
}

function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === 'number') {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}

function div(className) {
  var div = document.createElement('div');
  div.className = className;
  return div;
}

var elMatches =
  typeof Element !== 'undefined' &&
  (Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector);

function matches(element, query) {
  if (!elMatches) {
    throw new Error('No element matching method supported');
  }

  return elMatches.call(element, query);
}

function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}

function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function (child) { return matches(child, selector); }
  );
}

var cls = {
  main: 'ps',
  element: {
    thumb: function (x) { return ("ps__thumb-" + x); },
    rail: function (x) { return ("ps__rail-" + x); },
    consuming: 'ps__child--consume',
  },
  state: {
    focus: 'ps--focus',
    clicking: 'ps--clicking',
    active: function (x) { return ("ps--active-" + x); },
    scrolling: function (x) { return ("ps--scrolling-" + x); },
  },
};

/*
 * Helper methods
 */
var scrollingClassTimeout = { x: null, y: null };

function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);

  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}

function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(
    function () { return i.isAlive && i.element.classList.remove(cls.state.scrolling(x)); },
    i.settings.scrollingThreshold
  );
}

function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}

var EventElement = function EventElement(element) {
  this.element = element;
  this.handlers = {};
};

var prototypeAccessors = { isEmpty: { configurable: true } };

EventElement.prototype.bind = function bind (eventName, handler) {
  if (typeof this.handlers[eventName] === 'undefined') {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};

EventElement.prototype.unbind = function unbind (eventName, target) {
    var this$1 = this;

  this.handlers[eventName] = this.handlers[eventName].filter(function (handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};

EventElement.prototype.unbindAll = function unbindAll () {
    var this$1 = this;

  for (var name in this$1.handlers) {
    this$1.unbind(name);
  }
};

prototypeAccessors.isEmpty.get = function () {
    var this$1 = this;

  return Object.keys(this.handlers).every(
    function (key) { return this$1.handlers[key].length === 0; }
  );
};

Object.defineProperties( EventElement.prototype, prototypeAccessors );

var EventManager = function EventManager() {
  this.eventElements = [];
};

EventManager.prototype.eventElement = function eventElement (element) {
  var ee = this.eventElements.filter(function (ee) { return ee.element === element; })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};

EventManager.prototype.bind = function bind (element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};

EventManager.prototype.unbind = function unbind (element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);

  if (ee.isEmpty) {
    // remove
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};

EventManager.prototype.unbindAll = function unbindAll () {
  this.eventElements.forEach(function (e) { return e.unbindAll(); });
  this.eventElements = [];
};

EventManager.prototype.once = function once (element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function (evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};

function createEvent(name) {
  if (typeof window.CustomEvent === 'function') {
    return new CustomEvent(name);
  } else {
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(name, false, false, undefined);
    return evt;
  }
}

var processScrollDiff = function(
  i,
  axis,
  diff,
  useScrollingClass,
  forceFireReachEvent
) {
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var fields;
  if (axis === 'top') {
    fields = [
      'contentHeight',
      'containerHeight',
      'scrollTop',
      'y',
      'up',
      'down' ];
  } else if (axis === 'left') {
    fields = [
      'contentWidth',
      'containerWidth',
      'scrollLeft',
      'x',
      'left',
      'right' ];
  } else {
    throw new Error('A proper axis should be provided');
  }

  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
};

function processScrollDiff$1(
  i,
  diff,
  ref,
  useScrollingClass,
  forceFireReachEvent
) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if ( useScrollingClass === void 0 ) useScrollingClass = true;
  if ( forceFireReachEvent === void 0 ) forceFireReachEvent = false;

  var element = i.element;

  // reset reach
  i.reach[y] = null;

  // 1 for subpixel rounding
  if (element[scrollTop] < 1) {
    i.reach[y] = 'start';
  }

  // 1 for subpixel rounding
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = 'end';
  }

  if (diff) {
    element.dispatchEvent(createEvent(("ps-scroll-" + y)));

    if (diff < 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + up)));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent(("ps-scroll-" + down)));
    }

    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }

  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent(("ps-" + y + "-reach-" + (i.reach[y]))));
  }
}

function toInt(x) {
  return parseInt(x, 10) || 0;
}

function isEditable(el) {
  return (
    matches(el, 'input,[contenteditable]') ||
    matches(el, 'select,[contenteditable]') ||
    matches(el, 'textarea,[contenteditable]') ||
    matches(el, 'button,[contenteditable]')
  );
}

function outerWidth(element) {
  var styles = get(element);
  return (
    toInt(styles.width) +
    toInt(styles.paddingLeft) +
    toInt(styles.paddingRight) +
    toInt(styles.borderLeftWidth) +
    toInt(styles.borderRightWidth)
  );
}

var env = {
  isWebKit:
    typeof document !== 'undefined' &&
    'WebkitAppearance' in document.documentElement.style,
  supportsTouch:
    typeof window !== 'undefined' &&
    ('ontouchstart' in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)),
  supportsIePointer:
    typeof navigator !== 'undefined' && navigator.msMaxTouchPoints,
  isChrome:
    typeof navigator !== 'undefined' &&
    /Chrome/i.test(navigator && navigator.userAgent),
};

var updateGeometry = function(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);

  i.containerWidth = element.clientWidth;
  i.containerHeight = element.clientHeight;
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;

  if (!element.contains(i.scrollbarXRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('x')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    // clean up and append
    queryChildren(element, cls.element.rail('y')).forEach(function (el) { return remove(el); }
    );
    element.appendChild(i.scrollbarYRail);
  }

  if (
    !i.settings.suppressScrollX &&
    i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth
  ) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(
      i,
      toInt(i.railXWidth * i.containerWidth / i.contentWidth)
    );
    i.scrollbarXLeft = toInt(
      (i.negativeScrollAdjustment + element.scrollLeft) *
        (i.railXWidth - i.scrollbarXWidth) /
        (i.contentWidth - i.containerWidth)
    );
  } else {
    i.scrollbarXActive = false;
  }

  if (
    !i.settings.suppressScrollY &&
    i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight
  ) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(
      i,
      toInt(i.railYHeight * i.containerHeight / i.contentHeight)
    );
    i.scrollbarYTop = toInt(
      roundedScrollTop *
        (i.railYHeight - i.scrollbarYHeight) /
        (i.contentHeight - i.containerHeight)
    );
  } else {
    i.scrollbarYActive = false;
  }

  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }

  updateCss(element, i);

  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active('x'));
  } else {
    element.classList.remove(cls.state.active('x'));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active('y'));
  } else {
    element.classList.remove(cls.state.active('y'));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
};

function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}

function updateCss(element, i) {
  var xRailOffset = { width: i.railXWidth };
  var roundedScrollTop = Math.floor(element.scrollTop);

  if (i.isRtl) {
    xRailOffset.left =
      i.negativeScrollAdjustment +
      element.scrollLeft +
      i.containerWidth -
      i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);

  var yRailOffset = { top: roundedScrollTop, height: i.railYHeight };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right =
        i.contentWidth -
        (i.negativeScrollAdjustment + element.scrollLeft) -
        i.scrollbarYRight -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left =
        i.negativeScrollAdjustment +
        element.scrollLeft +
        i.containerWidth * 2 -
        i.contentWidth -
        i.scrollbarYLeft -
        i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);

  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth,
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth,
  });
}

var clickRail = function(i) {
  i.event.bind(i.scrollbarY, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarYRail, 'mousedown', function (e) {
    var positionTop =
      e.pageY -
      window.pageYOffset -
      i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;

    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);

    e.stopPropagation();
  });

  i.event.bind(i.scrollbarX, 'mousedown', function (e) { return e.stopPropagation(); });
  i.event.bind(i.scrollbarXRail, 'mousedown', function (e) {
    var positionLeft =
      e.pageX -
      window.pageXOffset -
      i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;

    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);

    e.stopPropagation();
  });
};

var dragThumb = function(i) {
  bindMouseScrollHandler(i, [
    'containerWidth',
    'contentWidth',
    'pageX',
    'railXWidth',
    'scrollbarX',
    'scrollbarXWidth',
    'scrollLeft',
    'x',
    'scrollbarXRail' ]);
  bindMouseScrollHandler(i, [
    'containerHeight',
    'contentHeight',
    'pageY',
    'railYHeight',
    'scrollbarY',
    'scrollbarYHeight',
    'scrollTop',
    'y',
    'scrollbarYRail' ]);
};

function bindMouseScrollHandler(
  i,
  ref
) {
  var containerHeight = ref[0];
  var contentHeight = ref[1];
  var pageY = ref[2];
  var railYHeight = ref[3];
  var scrollbarY = ref[4];
  var scrollbarYHeight = ref[5];
  var scrollTop = ref[6];
  var y = ref[7];
  var scrollbarYRail = ref[8];

  var element = i.element;

  var startingScrollTop = null;
  var startingMousePageY = null;
  var scrollBy = null;

  function mouseMoveHandler(e) {
    element[scrollTop] =
      startingScrollTop + scrollBy * (e[pageY] - startingMousePageY);
    addScrollingClass(i, y);
    updateGeometry(i);

    e.stopPropagation();
    e.preventDefault();
  }

  function mouseUpHandler() {
    removeScrollingClass(i, y);
    i[scrollbarYRail].classList.remove(cls.state.clicking);
    i.event.unbind(i.ownerDocument, 'mousemove', mouseMoveHandler);
  }

  i.event.bind(i[scrollbarY], 'mousedown', function (e) {
    startingScrollTop = element[scrollTop];
    startingMousePageY = e[pageY];
    scrollBy =
      (i[contentHeight] - i[containerHeight]) /
      (i[railYHeight] - i[scrollbarYHeight]);

    i.event.bind(i.ownerDocument, 'mousemove', mouseMoveHandler);
    i.event.once(i.ownerDocument, 'mouseup', mouseUpHandler);

    i[scrollbarYRail].classList.add(cls.state.clicking);

    e.stopPropagation();
    e.preventDefault();
  });
}

var keyboard = function(i) {
  var element = i.element;

  var elementHovered = function () { return matches(element, ':hover'); };
  var scrollbarFocused = function () { return matches(i.scrollbarX, ':focus') || matches(i.scrollbarY, ':focus'); };

  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (
        (scrollTop === 0 && deltaY > 0) ||
        (scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }

    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (
        (scrollLeft === 0 && deltaX < 0) ||
        (scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0)
      ) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }

  i.event.bind(i.ownerDocument, 'keydown', function (e) {
    if (
      (e.isDefaultPrevented && e.isDefaultPrevented()) ||
      e.defaultPrevented
    ) {
      return;
    }

    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }

    var activeElement = document.activeElement
      ? document.activeElement
      : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === 'IFRAME') {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        // go deeper if element is a webcomponent
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }

    var deltaX = 0;
    var deltaY = 0;

    switch (e.which) {
      case 37: // left
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38: // up
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39: // right
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40: // down
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32: // space bar
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33: // page up
        deltaY = i.containerHeight;
        break;
      case 34: // page down
        deltaY = -i.containerHeight;
        break;
      case 36: // home
        deltaY = i.contentHeight;
        break;
      case 35: // end
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }

    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }

    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);

    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
};

var wheel = function(i) {
  var element = i.element;

  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom =
      roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight =
      element.scrollLeft + element.offsetWidth === element.scrollWidth;

    var hitsBound;

    // pick axis with primary direction
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }

    return hitsBound ? !i.settings.wheelPropagation : true;
  }

  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
      // OS X Safari
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
      // Firefox in deltaMode 1: Line scrolling
      deltaX *= 10;
      deltaY *= 10;
    }

    if (deltaX !== deltaX && deltaY !== deltaY /* NaN checks */) {
      // IE in some mouse drivers
      deltaX = 0;
      deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
      // reverse axis with shift key
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    // FIXME: this is a workaround for <select> issue in FF and IE #571
    if (!env.isWebKit && element.querySelector('select:focus')) {
      return true;
    }

    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];

    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }

    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      // deltaX will only be used for horizontal scrolling and deltaY will
      // only be used for vertical scrolling - this is the default
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      // only vertical scrollbar is active and useBothWheelAxes option is
      // active, so let's scroll vertical bar using both mouse wheel axes
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      // useBothWheelAxes and only horizontal bar is active, so use both
      // wheel axes for horizontal bar
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }

    updateGeometry(i);

    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }

  if (typeof window.onwheel !== 'undefined') {
    i.event.bind(element, 'wheel', mousewheelHandler);
  } else if (typeof window.onmousewheel !== 'undefined') {
    i.event.bind(element, 'mousewheel', mousewheelHandler);
  }
};

var touch = function(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }

  var element = i.element;

  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);

    if (magnitudeY > magnitudeX) {
      // user is perhaps trying to swipe up/down the page

      if (
        (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight) ||
        (deltaY > 0 && scrollTop === 0)
      ) {
        // set prevent for mobile Chrome refresh
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      // user is perhaps trying to swipe left/right across the page

      if (
        (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth) ||
        (deltaX > 0 && scrollLeft === 0)
      ) {
        return true;
      }
    }

    return true;
  }

  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;

    updateGeometry(i);
  }

  var startOffset = {};
  var startTime = 0;
  var speed = {};
  var easingLoop = null;

  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    } else {
      // Maybe IE pointer
      return e;
    }
  }

  function shouldHandle(e) {
    if (e.pointerType && e.pointerType === 'pen' && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (
      e.pointerType &&
      e.pointerType !== 'mouse' &&
      e.pointerType !== e.MSPOINTER_TYPE_MOUSE
    ) {
      return true;
    }
    return false;
  }

  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }

    var touch = getTouch(e);

    startOffset.pageX = touch.pageX;
    startOffset.pageY = touch.pageY;

    startTime = new Date().getTime();

    if (easingLoop !== null) {
      clearInterval(easingLoop);
    }
  }

  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }

    var cursor = target;

    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }

      var style = get(cursor);
      var overflow = [style.overflow, style.overflowX, style.overflowY].join(
        ''
      );

      // if scrollable
      if (overflow.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (
            !(cursor.scrollTop === 0 && deltaY > 0) &&
            !(cursor.scrollTop === maxScrollTop && deltaY < 0)
          ) {
            return true;
          }
        }
        var maxScrollLeft = cursor.scrollLeft - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (
            !(cursor.scrollLeft === 0 && deltaX < 0) &&
            !(cursor.scrollLeft === maxScrollLeft && deltaX > 0)
          ) {
            return true;
          }
        }
      }

      cursor = cursor.parentNode;
    }

    return false;
  }

  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch = getTouch(e);

      var currentOffset = { pageX: touch.pageX, pageY: touch.pageY };

      var differenceX = currentOffset.pageX - startOffset.pageX;
      var differenceY = currentOffset.pageY - startOffset.pageY;

      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }

      applyTouchMove(differenceX, differenceY);
      startOffset = currentOffset;

      var currentTime = new Date().getTime();

      var timeGap = currentTime - startTime;
      if (timeGap > 0) {
        speed.x = differenceX / timeGap;
        speed.y = differenceY / timeGap;
        startTime = currentTime;
      }

      if (shouldPrevent(differenceX, differenceY)) {
        e.preventDefault();
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(easingLoop);
      easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(easingLoop);
          return;
        }

        if (!speed.x && !speed.y) {
          clearInterval(easingLoop);
          return;
        }

        if (Math.abs(speed.x) < 0.01 && Math.abs(speed.y) < 0.01) {
          clearInterval(easingLoop);
          return;
        }

        applyTouchMove(speed.x * 30, speed.y * 30);

        speed.x *= 0.8;
        speed.y *= 0.8;
      }, 10);
    }
  }

  if (env.supportsTouch) {
    i.event.bind(element, 'touchstart', touchStart);
    i.event.bind(element, 'touchmove', touchMove);
    i.event.bind(element, 'touchend', touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, 'pointerdown', touchStart);
      i.event.bind(element, 'pointermove', touchMove);
      i.event.bind(element, 'pointerup', touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, 'MSPointerDown', touchStart);
      i.event.bind(element, 'MSPointerMove', touchMove);
      i.event.bind(element, 'MSPointerUp', touchEnd);
    }
  }
};

var defaultSettings = function () { return ({
  handlers: ['click-rail', 'drag-thumb', 'keyboard', 'wheel', 'touch'],
  maxScrollbarLength: null,
  minScrollbarLength: null,
  scrollingThreshold: 1000,
  scrollXMarginOffset: 0,
  scrollYMarginOffset: 0,
  suppressScrollX: false,
  suppressScrollY: false,
  swipeEasing: true,
  useBothWheelAxes: false,
  wheelPropagation: true,
  wheelSpeed: 1,
}); };

var handlers = {
  'click-rail': clickRail,
  'drag-thumb': dragThumb,
  keyboard: keyboard,
  wheel: wheel,
  touch: touch,
};

var PerfectScrollbar = function PerfectScrollbar(element, userSettings) {
  var this$1 = this;
  if ( userSettings === void 0 ) userSettings = {};

  if (typeof element === 'string') {
    element = document.querySelector(element);
  }

  if (!element || !element.nodeName) {
    throw new Error('no element is specified to initialize PerfectScrollbar');
  }

  this.element = element;

  element.classList.add(cls.main);

  this.settings = defaultSettings();
  for (var key in userSettings) {
    this$1.settings[key] = userSettings[key];
  }

  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;

  var focus = function () { return element.classList.add(cls.state.focus); };
  var blur = function () { return element.classList.remove(cls.state.focus); };

  this.isRtl = get(element).direction === 'rtl';
  this.isNegativeScroll = (function () {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  })();
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? element.scrollWidth - element.clientWidth
    : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;

  this.scrollbarXRail = div(cls.element.rail('x'));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb('x'));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarX, 'focus', focus);
  this.event.bind(this.scrollbarX, 'blur', blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth =
    toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  // Set rail to display:block to calculate margins
  set(this.scrollbarXRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, { display: '' });
  this.railXWidth = null;
  this.railXRatio = null;

  this.scrollbarYRail = div(cls.element.rail('y'));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb('y'));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute('tabindex', 0);
  this.event.bind(this.scrollbarY, 'focus', focus);
  this.event.bind(this.scrollbarY, 'blur', blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth =
    toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, { display: 'block' });
  this.railYMarginHeight =
    toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, { display: '' });
  this.railYHeight = null;
  this.railYRatio = null;

  this.reach = {
    x:
      element.scrollLeft <= 0
        ? 'start'
        : element.scrollLeft >= this.contentWidth - this.containerWidth
          ? 'end'
          : null,
    y:
      element.scrollTop <= 0
        ? 'start'
        : element.scrollTop >= this.contentHeight - this.containerHeight
          ? 'end'
          : null,
  };

  this.isAlive = true;

  this.settings.handlers.forEach(function (handlerName) { return handlers[handlerName](this$1); });

  this.lastScrollTop = Math.floor(element.scrollTop); // for onScroll only
  this.lastScrollLeft = element.scrollLeft; // for onScroll only
  this.event.bind(this.element, 'scroll', function (e) { return this$1.onScroll(e); });
  updateGeometry(this);
};

PerfectScrollbar.prototype.update = function update () {
  if (!this.isAlive) {
    return;
  }

  // Recalcuate negative scrollLeft adjustment
  this.negativeScrollAdjustment = this.isNegativeScroll
    ? this.element.scrollWidth - this.element.clientWidth
    : 0;

  // Recalculate rail margins
  set(this.scrollbarXRail, { display: 'block' });
  set(this.scrollbarYRail, { display: 'block' });
  this.railXMarginWidth =
    toInt(get(this.scrollbarXRail).marginLeft) +
    toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight =
    toInt(get(this.scrollbarYRail).marginTop) +
    toInt(get(this.scrollbarYRail).marginBottom);

  // Hide scrollbars not to affect scrollWidth and scrollHeight
  set(this.scrollbarXRail, { display: 'none' });
  set(this.scrollbarYRail, { display: 'none' });

  updateGeometry(this);

  processScrollDiff(this, 'top', 0, false, true);
  processScrollDiff(this, 'left', 0, false, true);

  set(this.scrollbarXRail, { display: '' });
  set(this.scrollbarYRail, { display: '' });
};

PerfectScrollbar.prototype.onScroll = function onScroll (e) {
  if (!this.isAlive) {
    return;
  }

  updateGeometry(this);
  processScrollDiff(this, 'top', this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(
    this,
    'left',
    this.element.scrollLeft - this.lastScrollLeft
  );

  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};

PerfectScrollbar.prototype.destroy = function destroy () {
  if (!this.isAlive) {
    return;
  }

  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();

  // unset elements
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;

  this.isAlive = false;
};

PerfectScrollbar.prototype.removePsClasses = function removePsClasses () {
  this.element.className = this.element.className
    .split(' ')
    .filter(function (name) { return !name.match(/^ps([-_].+|)$/); })
    .join(' ');
};

/* harmony default export */ __webpack_exports__["default"] = (PerfectScrollbar);


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/js/backend/_pace.js":
/*!***************************************!*\
  !*** ./resources/js/backend/_pace.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! pace 1.0.0 */
(function () {
  var a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      _v,
      w,
      x,
      y,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L,
      M,
      N,
      O,
      P,
      Q,
      R,
      S,
      T,
      U,
      V,
      W,
      X = [].slice,
      Y = {}.hasOwnProperty,
      Z = function Z(a, b) {
    function c() {
      this.constructor = a;
    }

    for (var d in b) {
      Y.call(b, d) && (a[d] = b[d]);
    }

    return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
  },
      $ = [].indexOf || function (a) {
    for (var b = 0, c = this.length; c > b; b++) {
      if (b in this && this[b] === a) return b;
    }

    return -1;
  };

  for (u = {
    catchupTime: 100,
    initialRate: .03,
    minTime: 250,
    ghostTime: 100,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: !0,
    restartOnPushState: !0,
    restartOnRequestAfter: 500,
    target: "body",
    elements: {
      checkInterval: 100,
      selectors: ["body"]
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ["GET"],
      trackWebSockets: !0,
      ignoreURLs: []
    }
  }, C = function C() {
    var a;
    return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date();
  }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function E(a) {
    return setTimeout(a, 50);
  }, t = function t(a) {
    return clearTimeout(a);
  }), G = function G(a) {
    var b, _c;

    return b = C(), (_c = function c() {
      var d;
      return d = C() - b, d >= 33 ? (b = C(), a(d, function () {
        return E(_c);
      })) : setTimeout(_c, 33 - d);
    })();
  }, F = function F() {
    var a, b, c;
    return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b];
  }, _v = function v() {
    var a, b, c, d, e, f, g;

    for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++) {
      if (c = d[f]) for (a in c) {
        Y.call(c, a) && (e = c[a], null != b[a] && "object" == _typeof(b[a]) && null != e && "object" == _typeof(e) ? _v(b[a], e) : b[a] = e);
      }
    }

    return b;
  }, q = function q(a) {
    var b, c, d, e, f;

    for (c = b = 0, e = 0, f = a.length; f > e; e++) {
      d = a[e], c += Math.abs(d), b++;
    }

    return c / b;
  }, x = function x(a, b) {
    var c, d, e;

    if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
      if (c = e.getAttribute("data-pace-" + a), !b) return c;

      try {
        return JSON.parse(c);
      } catch (f) {
        return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0;
      }
    }
  }, g = function () {
    function a() {}

    return a.prototype.on = function (a, b, c, d) {
      var e;
      return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
        handler: b,
        ctx: c,
        once: d
      });
    }, a.prototype.once = function (a, b, c) {
      return this.on(a, b, c, !0);
    }, a.prototype.off = function (a, b) {
      var c, d, e;

      if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
        if (null == b) return delete this.bindings[a];

        for (c = 0, e = []; c < this.bindings[a].length;) {
          e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
        }

        return e;
      }
    }, a.prototype.trigger = function () {
      var a, b, c, d, e, f, g, h, i;

      if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
        for (e = 0, i = []; e < this.bindings[c].length;) {
          h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
        }

        return i;
      }
    }, a;
  }(), j = window.Pace || {}, window.Pace = j, _v(j, g.prototype), D = j.options = _v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++) {
    K = U[Q], D[K] === !0 && (D[K] = u[K]);
  }

  i = function (a) {
    function b() {
      return V = b.__super__.constructor.apply(this, arguments);
    }

    return Z(b, a), b;
  }(Error), b = function () {
    function a() {
      this.progress = 0;
    }

    return a.prototype.getElement = function () {
      var a;

      if (null == this.el) {
        if (a = document.querySelector(D.target), !a) throw new i();
        this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el);
      }

      return this.el;
    }, a.prototype.finish = function () {
      var a;
      return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done";
    }, a.prototype.update = function (a) {
      return this.progress = a, this.render();
    }, a.prototype.destroy = function () {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (a) {
        i = a;
      }

      return this.el = void 0;
    }, a.prototype.render = function () {
      var a, b, c, d, e, f, g;
      if (null == document.querySelector(D.target)) return !1;

      for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) {
        b = g[e], a.children[0].style[b] = d;
      }

      return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress;
    }, a.prototype.done = function () {
      return this.progress >= 100;
    }, a;
  }(), h = function () {
    function a() {
      this.bindings = {};
    }

    return a.prototype.trigger = function (a, b) {
      var c, d, e, f, g;

      if (null != this.bindings[a]) {
        for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) {
          c = f[d], g.push(c.call(this, b));
        }

        return g;
      }
    }, a.prototype.on = function (a, b) {
      var c;
      return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b);
    }, a;
  }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function w(a, b) {
    var c, d, e, f;
    f = [];

    for (d in b.prototype) {
      try {
        e = b.prototype[d], f.push(null == a[d] && "function" != typeof e ? a[d] = e : void 0);
      } catch (g) {
        c = g;
      }
    }

    return f;
  }, A = [], j.ignore = function () {
    var a, b, c;
    return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c;
  }, j.track = function () {
    var a, b, c;
    return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c;
  }, J = function J(a) {
    var b;
    if (null == a && (a = "GET"), "track" === A[0]) return "force";

    if (!A.length && D.ajax) {
      if ("socket" === a && D.ajax.trackWebSockets) return !0;
      if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0;
    }

    return !1;
  }, k = function (a) {
    function b() {
      var a,
          c = this;
      b.__super__.constructor.apply(this, arguments), a = function a(_a) {
        var b;
        return b = _a.open, _a.open = function (d, e) {
          return J(d) && c.trigger("request", {
            type: d,
            url: e,
            request: _a
          }), b.apply(_a, arguments);
        };
      }, window.XMLHttpRequest = function (b) {
        var c;
        return c = new P(b), a(c), c;
      };

      try {
        w(window.XMLHttpRequest, P);
      } catch (d) {}

      if (null != O) {
        window.XDomainRequest = function () {
          var b;
          return b = new O(), a(b), b;
        };

        try {
          w(window.XDomainRequest, O);
        } catch (d) {}
      }

      if (null != N && D.ajax.trackWebSockets) {
        window.WebSocket = function (a, b) {
          var d;
          return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", {
            type: "socket",
            url: a,
            protocols: b,
            request: d
          }), d;
        };

        try {
          w(window.WebSocket, N);
        } catch (d) {}
      }
    }

    return Z(b, a), b;
  }(h), R = null, y = function y() {
    return null == R && (R = new k()), R;
  }, I = function I(a) {
    var b, c, d, e;

    for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++) {
      if (b = e[c], "string" == typeof b) {
        if (-1 !== a.indexOf(b)) return !0;
      } else if (b.test(a)) return !0;
    }

    return !1;
  }, y().on("request", function (b) {
    var c, d, e, f, g;
    return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function () {
      var b, c, g, h, i, k;

      if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
        for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
          if (K = i[c], K instanceof a) {
            K.watch.apply(K, d);
            break;
          }

          k.push(void 0);
        }

        return k;
      }
    }, c));
  }), a = function () {
    function a() {
      var a = this;
      this.elements = [], y().on("request", function () {
        return a.watch.apply(a, arguments);
      });
    }

    return a.prototype.watch = function (a) {
      var b, c, d, e;
      return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c));
    }, a;
  }(), o = function () {
    function a(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = this;
      if (this.progress = 0, null != window.ProgressEvent) for (c = null, a.addEventListener("progress", function (a) {
        return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2;
      }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) {
        b = g[d], a.addEventListener(b, function () {
          return h.progress = 100;
        }, !1);
      } else f = a.onreadystatechange, a.onreadystatechange = function () {
        var b;
        return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0;
      };
    }

    return a;
  }(), n = function () {
    function a(a) {
      var b,
          c,
          d,
          e,
          f = this;

      for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) {
        b = e[c], a.addEventListener(b, function () {
          return f.progress = 100;
        }, !1);
      }
    }

    return a;
  }(), d = function () {
    function a(a) {
      var b, c, d, f;

      for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) {
        b = f[c], this.elements.push(new e(b));
      }
    }

    return a;
  }(), e = function () {
    function a(a) {
      this.selector = a, this.progress = 0, this.check();
    }

    return a.prototype.check = function () {
      var a = this;
      return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
        return a.check();
      }, D.elements.checkInterval);
    }, a.prototype.done = function () {
      return this.progress = 100;
    }, a;
  }(), c = function () {
    function a() {
      var a,
          b,
          c = this;
      this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function () {
        return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0;
      };
    }

    return a.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    }, a;
  }(), f = function () {
    function a() {
      var a,
          b,
          c,
          d,
          e,
          f = this;
      this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function () {
        var g;
        return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3));
      }, 50);
    }

    return a;
  }(), m = function () {
    function a(a) {
      this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"));
    }

    return a.prototype.tick = function (a, b) {
      var c;
      return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress;
    }, a;
  }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function z() {
    return D.restartOnPushState ? j.restart() : void 0;
  }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function () {
    return z(), T.apply(window.history, arguments);
  }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function () {
    return z(), W.apply(window.history, arguments);
  }), l = {
    ajax: a,
    elements: d,
    document: c,
    eventLag: f
  }, (B = function B() {
    var a, c, d, e, f, g, h, i;

    for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) {
      a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
    }

    for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) {
      K = i[d], L.push(new K(D));
    }

    return j.bar = r = new b(), H = [], M = new m();
  })(), j.stop = function () {
    return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B();
  }, j.restart = function () {
    return j.trigger("restart"), j.stop(), j.start();
  }, j.go = function () {
    var a;
    return j.running = !0, r.render(), a = C(), s = !1, p = G(function (b, c) {
      var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;

      for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q) {
        for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t) {
          g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b));
        }
      }

      return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function () {
        return r.finish(), j.running = !1, j.trigger("hide");
      }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c();
    });
  }, j.start = function (a) {
    _v(D, a), j.running = !0;

    try {
      r.render();
    } catch (b) {
      i = b;
    }

    return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50);
  },  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return j;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}).call(this);

/***/ }),

/***/ "./resources/js/backend/after.js":
/*!***************************************!*\
  !*** ./resources/js/backend/after.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Loaded after CoreUI app.js

/***/ }),

/***/ "./resources/js/backend/app.js":
/*!*************************************!*\
  !*** ./resources/js/backend/app.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_coreui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/coreui */ "./node_modules/@coreui/coreui/dist/js/coreui.js");
/* harmony import */ var _coreui_coreui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_coreui__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./resources/js/backend/before.js":
/*!****************************************!*\
  !*** ./resources/js/backend/before.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bootstrap */ "./resources/js/bootstrap.js");
/* harmony import */ var _pace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_pace */ "./resources/js/backend/_pace.js");
/* harmony import */ var _pace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugins */ "./resources/js/plugins.js");
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_plugins__WEBPACK_IMPORTED_MODULE_2__);
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
// Loaded before CoreUI app.js




/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_5__);
/**
 * This bootstrap file is used for both frontend and backend
 */




 // Required for BS4


/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.$ = window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;
window.Swal = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a;
window._ = lodash__WEBPACK_IMPORTED_MODULE_0___default.a; // Lodash

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = axios__WEBPACK_IMPORTED_MODULE_1___default.a;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo'
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/plugins.js":
/*!*********************************!*\
  !*** ./resources/js/plugins.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Allows you to add data-method="METHOD to links to automatically inject a form
 * with the method on click
 *
 * Example: <a href="{{route('customers.destroy', $customer->id)}}"
 * data-method="delete" name="delete_item">Delete</a>
 *
 * Injects a form with that's fired on click of the link with a DELETE request.
 * Good because you don't have to dirty your HTML with delete forms everywhere.
 */
function addDeleteForms() {
  $('[data-method]').append(function () {
    if (!$(this).find('form').length > 0) {
      return "\n<form action='" + $(this).attr('href') + "' method='POST' name='delete_item' style='display:none'>\n" + "<input type='hidden' name='_method' value='" + $(this).attr('data-method') + "'>\n" + "<input type='hidden' name='_token' value='" + $('meta[name="csrf-token"]').attr('content') + "'>\n" + '</form>\n';
    } else {
      return '';
    }
  }).attr('href', '#').attr('style', 'cursor:pointer;').attr('onclick', '$(this).find("form").submit();');
}
/**
 * Place any jQuery/helper plugins in here.
 */


$(function () {
  /**
   * Add the data-method="delete" forms to all delete links
   */
  addDeleteForms();
  /**
   * Disable all submit buttons once clicked
   */

  $('form').submit(function () {
    $(this).find('input[type="submit"]').attr('disabled', true);
    $(this).find('button[type="submit"]').attr('disabled', true);
    return true;
  });
  /**
   * Generic confirm form delete using Sweet Alert
   */

  $('body').on('submit', 'form[name=delete_item]', function (e) {
    e.preventDefault();
    var form = this;
    var link = $('a[data-method="delete"]');
    var cancel = link.attr('data-trans-button-cancel') ? link.attr('data-trans-button-cancel') : 'Cancel';
    var confirm = link.attr('data-trans-button-confirm') ? link.attr('data-trans-button-confirm') : 'Yes, delete';
    var title = link.attr('data-trans-title') ? link.attr('data-trans-title') : 'Are you sure you want to delete this item?';
    Swal.fire({
      title: title,
      showCancelButton: true,
      confirmButtonText: confirm,
      cancelButtonText: cancel,
      type: 'warning'
    }).then(function (result) {
      result.value && form.submit();
    });
  }).on('click', 'a[name=confirm_item]', function (e) {
    /**
     * Generic 'are you sure' confirm box
     */
    e.preventDefault();
    var link = $(this);
    var title = link.attr('data-trans-title') ? link.attr('data-trans-title') : 'Are you sure you want to do this?';
    var cancel = link.attr('data-trans-button-cancel') ? link.attr('data-trans-button-cancel') : 'Cancel';
    var confirm = link.attr('data-trans-button-confirm') ? link.attr('data-trans-button-confirm') : 'Continue';
    Swal.fire({
      title: title,
      showCancelButton: true,
      confirmButtonText: confirm,
      cancelButtonText: cancel,
      type: 'info'
    }).then(function (result) {
      result.value && window.location.assign(link.attr('href'));
    });
  });
  /* hide loader if 3sec or more time */

  setTimeout(function () {
    $(".loader-logo").fadeOut();
  }, 3000);
  /* left sidebar open */

  $('#left-menu').on('click', function () {
    $('body').toggleClass('sidebar-left-close');
  });
  $('.sidebar-left + div.backdrop').on('click', function () {
    $('body').addClass('sidebar-left-close');
  });
  /* left sidebar accordion menu */

  /* url  navigation active */

  var url = window.location;

  function menuitems() {
    var element = $('.sidebar .nav .nav-item a').filter(function () {
      return this.href == url;
      console.log(url);
    }).addClass('active').parent("li").addClass('active').closest('.nav').slideDown().addClass('in').prev().addClass('active').parent().addClass('show').closest('.nav').slideDown().addClass('in').parent().addClass('show');
  }

  menuitems();
  $('.sidebar .nav .nav-item .dropdwown-toggle').on('click', function () {
    if ($(this).hasClass('active') != true) {
      $('.sidebar .nav .nav-item .dropdwown-toggle').removeClass('active').next().slideUp();
      $(this).addClass('active').next().slideDown();
    } else {
      $(this).removeClass('active').next().slideUp();
    }
  });
  /* sidebar hide below 1100px resolution  */

  if ($(window).width() <= 1100) {
    $('body').addClass('sidebar-left-close');
  }

  $(window).on('load', function () {
    /* hide loader  */
    $('.loader').hide();
    $('.animatejack').addClass('jackInTheBox');
    $('.wrapper').css('padding-bottom', $('body > footer').outerHeight());
    $('body > footer').css('margin-top', -$('body > footer').outerHeight());
  });
}); // Jquery Dependency

/* $("input[data-type='currency']").on({
    keyup: function() {
      formatCurrency($(this));
    },
    blur: function() { 
      formatCurrency($(this), "blur");
    }
}); */

$("input[data-type='currency']").on({
  change: function change() {
    formatCurrency($(this));
  },
  keyup: function keyup() {
    formatCurrency($(this));
  },
  blur: function blur() {
    formatCurrency($(this), "blur");
  }
});
var count = 0;
$(".digit").click(function () {
  var num = $(this).attr('data-number');
  $("#currency-field").val(function () {
    return this.value + num;
  });
  formatCurrency($("#currency-field"));
});

function formatNumber(n) {
  // format number 1000000 to 1,234,567
  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatCurrency(input, blur) {
  // appends $ to value, validates decimal side
  // and puts cursor back in right position.
  // get input value
  var input_val = input.val(); // don't validate empty input

  if (input_val === "") {
    return;
  } // original length


  var original_len = input_val.length; // initial caret position 

  var caret_pos = input.prop("selectionStart"); // check for decimal

  if (input_val.indexOf(".") >= 0) {
    // get position of first decimal
    // this prevents multiple decimals from
    // being entered
    var decimal_pos = input_val.indexOf("."); // split number by decimal point

    var left_side = input_val.substring(0, decimal_pos);
    var right_side = input_val.substring(decimal_pos); // add commas to left side of number

    left_side = formatNumber(left_side); // validate right side

    right_side = formatNumber(right_side); // On blur make sure 2 numbers after decimal

    if (blur === "blur") {
      right_side += "00";
    } // Limit decimal to only 2 digits


    right_side = right_side.substring(0, 2); // join number by .

    input_val = "$" + left_side + "." + right_side;
  } else {
    // no decimal entered
    // add commas to number
    // remove all non-digits
    input_val = formatNumber(input_val);
    input_val = "$" + input_val; // final formatting

    if (blur === "blur") {
      input_val += ".00";
    }
  } // send updated string to input


  input.val(input_val); // put caret back in the right position

  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
  console.log(input_val);
  /* var modal = document.querySelector('#test');
  modal.innerHTML = input_val; 
    */

  document.getElementById("payment-amount").innerHTML = input_val.replace(/[$]/, "");
  document.getElementById("sending-amount").innerHTML = input_val.replace(/[$]/, "");
}

(function ($) {
  $(document).on("click", ".dropdown-menu.show a.dropdown-item", function () {
    var text = $(this).find('.funding-button-text').html();
    $('.funding-button').text(text);
    console.log(text);
  });
})(jQuery);

/***/ }),

/***/ 4:
/*!************************************************************************************************************!*\
  !*** multi ./resources/js/backend/before.js ./resources/js/backend/app.js ./resources/js/backend/after.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\AkwaCash\resources\js\backend\before.js */"./resources/js/backend/before.js");
__webpack_require__(/*! C:\xampp\htdocs\AkwaCash\resources\js\backend\app.js */"./resources/js/backend/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\AkwaCash\resources\js\backend\after.js */"./resources/js/backend/after.js");


/***/ })

},[[4,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGNvcmV1aS9jb3JldWkvZGlzdC9qcy9jb3JldWkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvZGlzdC9wZXJmZWN0LXNjcm9sbGJhci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvX3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWZ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2JlZm9yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wbHVnaW5zLmpzIl0sIm5hbWVzIjpbImEiLCJiIiwiYyIsImQiLCJlIiwiZiIsImciLCJoIiwiaSIsImoiLCJrIiwibCIsIm0iLCJuIiwibyIsInAiLCJxIiwiciIsInMiLCJ0IiwidSIsInYiLCJ3IiwieCIsInkiLCJ6IiwiQSIsIkIiLCJDIiwiRCIsIkUiLCJGIiwiRyIsIkgiLCJJIiwiSiIsIksiLCJMIiwiTSIsIk4iLCJPIiwiUCIsIlEiLCJSIiwiUyIsIlQiLCJVIiwiViIsIlciLCJYIiwic2xpY2UiLCJZIiwiaGFzT3duUHJvcGVydHkiLCJaIiwiY29uc3RydWN0b3IiLCJjYWxsIiwicHJvdG90eXBlIiwiX19zdXBlcl9fIiwiJCIsImluZGV4T2YiLCJsZW5ndGgiLCJjYXRjaHVwVGltZSIsImluaXRpYWxSYXRlIiwibWluVGltZSIsImdob3N0VGltZSIsIm1heFByb2dyZXNzUGVyRnJhbWUiLCJlYXNlRmFjdG9yIiwic3RhcnRPblBhZ2VMb2FkIiwicmVzdGFydE9uUHVzaFN0YXRlIiwicmVzdGFydE9uUmVxdWVzdEFmdGVyIiwidGFyZ2V0IiwiZWxlbWVudHMiLCJjaGVja0ludGVydmFsIiwic2VsZWN0b3JzIiwiZXZlbnRMYWciLCJtaW5TYW1wbGVzIiwic2FtcGxlQ291bnQiLCJsYWdUaHJlc2hvbGQiLCJhamF4IiwidHJhY2tNZXRob2RzIiwidHJhY2tXZWJTb2NrZXRzIiwiaWdub3JlVVJMcyIsInBlcmZvcm1hbmNlIiwibm93IiwiRGF0ZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJhcmd1bWVudHMiLCJhcHBseSIsIk1hdGgiLCJhYnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwiZXJyb3IiLCJvbiIsImJpbmRpbmdzIiwicHVzaCIsImhhbmRsZXIiLCJjdHgiLCJvbmNlIiwib2ZmIiwic3BsaWNlIiwidHJpZ2dlciIsIlBhY2UiLCJvcHRpb25zIiwicGFjZU9wdGlvbnMiLCJFcnJvciIsInByb2dyZXNzIiwiZ2V0RWxlbWVudCIsImVsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImJvZHkiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwiZmluaXNoIiwidXBkYXRlIiwicmVuZGVyIiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNoaWxkcmVuIiwic3R5bGUiLCJsYXN0UmVuZGVyZWRQcm9ncmVzcyIsInNldEF0dHJpYnV0ZSIsImRvbmUiLCJYTUxIdHRwUmVxdWVzdCIsIlhEb21haW5SZXF1ZXN0IiwiV2ViU29ja2V0IiwiaWdub3JlIiwidW5zaGlmdCIsInNoaWZ0IiwidHJhY2siLCJ0b1VwcGVyQ2FzZSIsIm9wZW4iLCJ0eXBlIiwidXJsIiwicmVxdWVzdCIsInByb3RvY29scyIsInRlc3QiLCJydW5uaW5nIiwicmVhZHlTdGF0ZSIsInJlc3RhcnQiLCJzb3VyY2VzIiwid2F0Y2giLCJQcm9ncmVzc0V2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxlbmd0aENvbXB1dGFibGUiLCJsb2FkZWQiLCJ0b3RhbCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInNlbGVjdG9yIiwiY2hlY2siLCJzdGF0ZXMiLCJsb2FkaW5nIiwiaW50ZXJhY3RpdmUiLCJjb21wbGV0ZSIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNvdXJjZSIsImxhc3QiLCJzaW5jZUxhc3RVcGRhdGUiLCJyYXRlIiwiY2F0Y2h1cCIsImxhc3RQcm9ncmVzcyIsInRpY2siLCJwb3ciLCJtaW4iLCJtYXgiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwicmVwbGFjZVN0YXRlIiwiZXh0cmFTb3VyY2VzIiwiYmFyIiwic3RvcCIsInN0YXJ0IiwiZ28iLCJkZWZpbmUiLCJqUXVlcnkiLCJTd2FsIiwiXyIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwidG9rZW4iLCJoZWFkIiwiY29udGVudCIsImFkZERlbGV0ZUZvcm1zIiwiYXBwZW5kIiwiZmluZCIsImF0dHIiLCJzdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJsaW5rIiwiY2FuY2VsIiwiY29uZmlybSIsInRpdGxlIiwiZmlyZSIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJsb2NhdGlvbiIsImFzc2lnbiIsImZhZGVPdXQiLCJ0b2dnbGVDbGFzcyIsImFkZENsYXNzIiwibWVudWl0ZW1zIiwiZWxlbWVudCIsImZpbHRlciIsImhyZWYiLCJsb2ciLCJwYXJlbnQiLCJjbG9zZXN0Iiwic2xpZGVEb3duIiwicHJldiIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJuZXh0Iiwic2xpZGVVcCIsIndpZHRoIiwiaGlkZSIsImNzcyIsIm91dGVySGVpZ2h0IiwiY2hhbmdlIiwiZm9ybWF0Q3VycmVuY3kiLCJrZXl1cCIsImJsdXIiLCJjb3VudCIsImNsaWNrIiwibnVtIiwidmFsIiwiZm9ybWF0TnVtYmVyIiwiaW5wdXQiLCJpbnB1dF92YWwiLCJvcmlnaW5hbF9sZW4iLCJjYXJldF9wb3MiLCJwcm9wIiwiZGVjaW1hbF9wb3MiLCJsZWZ0X3NpZGUiLCJzdWJzdHJpbmciLCJyaWdodF9zaWRlIiwidXBkYXRlZF9sZW4iLCJzZXRTZWxlY3Rpb25SYW5nZSIsImdldEVsZW1lbnRCeUlkIiwidGV4dCIsImh0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBNEQsb0JBQW9CLG1CQUFPLENBQUMsb0RBQVEsR0FBRyxtQkFBTyxDQUFDLHlGQUFtQjtBQUNoSSxFQUFFLFNBQzhGO0FBQ2hHLENBQUMsZ0RBQWdEOztBQUVqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixZQUFZLEVBQUU7QUFDbEM7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0IseUNBQXlDO0FBQ3pDLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBLHVFQUF1RTtBQUN2RSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCLGtCQUFrQixFQUFFOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssWUFBWTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUZBQXlGO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSwyQkFBMkIsbUJBQW1CO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7O0FBR1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7O0FBR1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsZ0NBQWdDO0FBQ2hDLCtCQUErQjtBQUMvQixpQ0FBaUM7QUFDakMscUNBQXFDO0FBQ3JDLFdBQVcsaUNBQWlDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxnQkFBZ0IsRUFBRTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMsUUFBUTtBQUMzQzs7QUFFQSxvQ0FBb0MsUUFBUTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNEQUFzRCw4QkFBOEI7QUFDcEYsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLE9BQU87OztBQUdQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxFQUFFOztBQUVYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNB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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlFQUF5RSxtQkFBbUI7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlFQUF5RSxtQkFBbUI7QUFDNUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0Esd0RBQXdELDRCQUE0QixFQUFFO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSCx3REFBd0QsNEJBQTRCLEVBQUU7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBLG9DQUFvQyxtQ0FBbUM7QUFDdkUsc0NBQXNDLDJFQUEyRTs7QUFFakg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7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LDZCQUE2QixxQ0FBcUMsRUFBRTtBQUNwRTtBQUNBOztBQUVlLCtFQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7QUNueUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNB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QyxVQUFTbEUsQ0FBVCxFQUFZO0FBQ1pBLEdBQUMsQ0FBQ3dDLFFBQUQsQ0FBRCxDQUFZTyxFQUFaLENBQWUsT0FBZixFQUF3QixxQ0FBeEIsRUFBK0QsWUFBVztBQUN2RSxRQUFJOEosSUFBSSxHQUFHN00sQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRa0osSUFBUixDQUFhLHNCQUFiLEVBQXFDNEQsSUFBckMsRUFBWDtBQUNBOU0sS0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUI2TSxJQUFyQixDQUEwQkEsSUFBMUI7QUFDRmhLLFdBQU8sQ0FBQzhILEdBQVIsQ0FBWWtDLElBQVo7QUFDQSxHQUpEO0FBS0EsQ0FORCxFQU1HdkUsTUFOSCxFIiwiZmlsZSI6Ii9qcy9iYWNrZW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gICogQ29yZVVJIHYyLjEuOSAoaHR0cHM6Ly9jb3JldWkuaW8pXG4gICogQ29weXJpZ2h0IDIwMTkgxYF1a2FzeiBIb2xlY3pla1xuICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8pXG4gICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJ2pxdWVyeScpLCByZXF1aXJlKCdwZXJmZWN0LXNjcm9sbGJhcicpKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbJ2V4cG9ydHMnLCAnanF1ZXJ5JywgJ3BlcmZlY3Qtc2Nyb2xsYmFyJ10sIGZhY3RvcnkpIDpcbiAgKGdsb2JhbCA9IGdsb2JhbCB8fCBzZWxmLCBmYWN0b3J5KGdsb2JhbC5jb3JldWkgPSB7fSwgZ2xvYmFsLmpRdWVyeSwgZ2xvYmFsLlBlcmZlY3RTY3JvbGxiYXIpKTtcbn0odGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsICQsIFBlcmZlY3RTY3JvbGxiYXIpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICQgPSAkICYmICQuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSA/ICRbJ2RlZmF1bHQnXSA6ICQ7XG4gIFBlcmZlY3RTY3JvbGxiYXIgPSBQZXJmZWN0U2Nyb2xsYmFyICYmIFBlcmZlY3RTY3JvbGxiYXIuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHQnKSA/IFBlcmZlY3RTY3JvbGxiYXJbJ2RlZmF1bHQnXSA6IFBlcmZlY3RTY3JvbGxiYXI7XG5cbiAgdmFyIF9pc09iamVjdCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG4gIH07XG5cbiAgdmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbiAgdmFyIF9jb2YgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcbiAgXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG4gIH1cblxuICB2YXIgX2NvcmUgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4gIHZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjYuNScgfTtcbiAgaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgfSk7XG4gIHZhciBfY29yZV8xID0gX2NvcmUudmVyc2lvbjtcblxuICB2YXIgX2dsb2JhbCA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbiAgdmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gICAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG4gIGlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiAgfSk7XG5cbiAgdmFyIF9zaGFyZWQgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4gIHZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbiAgdmFyIHN0b3JlID0gX2dsb2JhbFtTSEFSRURdIHx8IChfZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5cbiAgKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbiAgfSkoJ3ZlcnNpb25zJywgW10pLnB1c2goe1xuICAgIHZlcnNpb246IF9jb3JlLnZlcnNpb24sXG4gICAgbW9kZTogJ2dsb2JhbCcsXG4gICAgY29weXJpZ2h0OiAnwqkgMjAxOSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbiAgfSk7XG4gIH0pO1xuXG4gIHZhciBpZCA9IDA7XG4gIHZhciBweCA9IE1hdGgucmFuZG9tKCk7XG4gIHZhciBfdWlkID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG4gIH07XG5cbiAgdmFyIF93a3MgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XG4gIHZhciBzdG9yZSA9IF9zaGFyZWQoJ3drcycpO1xuXG4gIHZhciBTeW1ib2wgPSBfZ2xvYmFsLlN5bWJvbDtcbiAgdmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbiAgdmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiBfdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG4gIH07XG5cbiAgJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiAgfSk7XG5cbiAgLy8gNy4yLjggSXNSZWdFeHAoYXJndW1lbnQpXG5cblxuICB2YXIgTUFUQ0ggPSBfd2tzKCdtYXRjaCcpO1xuICB2YXIgX2lzUmVnZXhwID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgdmFyIGlzUmVnRXhwO1xuICAgIHJldHVybiBfaXNPYmplY3QoaXQpICYmICgoaXNSZWdFeHAgPSBpdFtNQVRDSF0pICE9PSB1bmRlZmluZWQgPyAhIWlzUmVnRXhwIDogX2NvZihpdCkgPT0gJ1JlZ0V4cCcpO1xuICB9O1xuXG4gIHZhciBfYW5PYmplY3QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICBpZiAoIV9pc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgICByZXR1cm4gaXQ7XG4gIH07XG5cbiAgdmFyIF9hRnVuY3Rpb24gPSBmdW5jdGlvbiAoaXQpIHtcbiAgICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gICAgcmV0dXJuIGl0O1xuICB9O1xuXG4gIC8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxuXG5cbiAgdmFyIFNQRUNJRVMgPSBfd2tzKCdzcGVjaWVzJyk7XG4gIHZhciBfc3BlY2llc0NvbnN0cnVjdG9yID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgICB2YXIgQyA9IF9hbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgUztcbiAgICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gX2FuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogX2FGdW5jdGlvbihTKTtcbiAgfTtcblxuICAvLyA3LjEuNCBUb0ludGVnZXJcbiAgdmFyIGNlaWwgPSBNYXRoLmNlaWw7XG4gIHZhciBmbG9vciA9IE1hdGguZmxvb3I7XG4gIHZhciBfdG9JbnRlZ2VyID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG4gIH07XG5cbiAgLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbiAgdmFyIF9kZWZpbmVkID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICAgIHJldHVybiBpdDtcbiAgfTtcblxuICAvLyB0cnVlICAtPiBTdHJpbmcjYXRcbiAgLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG4gIHZhciBfc3RyaW5nQXQgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICAgIHZhciBzID0gU3RyaW5nKF9kZWZpbmVkKHRoYXQpKTtcbiAgICAgIHZhciBpID0gX3RvSW50ZWdlcihwb3MpO1xuICAgICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICAgIHZhciBhLCBiO1xuICAgICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGF0ID0gX3N0cmluZ0F0KHRydWUpO1xuXG4gICAvLyBgQWR2YW5jZVN0cmluZ0luZGV4YCBhYnN0cmFjdCBvcGVyYXRpb25cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtYWR2YW5jZXN0cmluZ2luZGV4XG4gIHZhciBfYWR2YW5jZVN0cmluZ0luZGV4ID0gZnVuY3Rpb24gKFMsIGluZGV4LCB1bmljb2RlKSB7XG4gICAgcmV0dXJuIGluZGV4ICsgKHVuaWNvZGUgPyBhdChTLCBpbmRleCkubGVuZ3RoIDogMSk7XG4gIH07XG5cbiAgLy8gNy4xLjE1IFRvTGVuZ3RoXG5cbiAgdmFyIG1pbiA9IE1hdGgubWluO1xuICB2YXIgX3RvTGVuZ3RoID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGl0ID4gMCA/IG1pbihfdG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG4gIH07XG5cbiAgLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcblxuICB2YXIgVEFHID0gX3drcygndG9TdHJpbmdUYWcnKTtcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgdmFyIEFSRyA9IF9jb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4gIC8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG4gIHZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gaXRba2V5XTtcbiAgICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgfTtcblxuICB2YXIgX2NsYXNzb2YgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgTywgVCwgQjtcbiAgICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgICA6IEFSRyA/IF9jb2YoTylcbiAgICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICAgIDogKEIgPSBfY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbiAgfTtcblxuICB2YXIgYnVpbHRpbkV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG5cbiAgIC8vIGBSZWdFeHBFeGVjYCBhYnN0cmFjdCBvcGVyYXRpb25cbiAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwZXhlY1xuICB2YXIgX3JlZ2V4cEV4ZWNBYnN0cmFjdCA9IGZ1bmN0aW9uIChSLCBTKSB7XG4gICAgdmFyIGV4ZWMgPSBSLmV4ZWM7XG4gICAgaWYgKHR5cGVvZiBleGVjID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gZXhlYy5jYWxsKFIsIFMpO1xuICAgICAgaWYgKHR5cGVvZiByZXN1bHQgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZ0V4cCBleGVjIG1ldGhvZCByZXR1cm5lZCBzb21ldGhpbmcgb3RoZXIgdGhhbiBhbiBPYmplY3Qgb3IgbnVsbCcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgaWYgKF9jbGFzc29mKFIpICE9PSAnUmVnRXhwJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwI2V4ZWMgY2FsbGVkIG9uIGluY29tcGF0aWJsZSByZWNlaXZlcicpO1xuICAgIH1cbiAgICByZXR1cm4gYnVpbHRpbkV4ZWMuY2FsbChSLCBTKTtcbiAgfTtcblxuICAvLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFnc1xuXG4gIHZhciBfZmxhZ3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRoYXQgPSBfYW5PYmplY3QodGhpcyk7XG4gICAgdmFyIHJlc3VsdCA9ICcnO1xuICAgIGlmICh0aGF0Lmdsb2JhbCkgcmVzdWx0ICs9ICdnJztcbiAgICBpZiAodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICAgIGlmICh0aGF0Lm11bHRpbGluZSkgcmVzdWx0ICs9ICdtJztcbiAgICBpZiAodGhhdC51bmljb2RlKSByZXN1bHQgKz0gJ3UnO1xuICAgIGlmICh0aGF0LnN0aWNreSkgcmVzdWx0ICs9ICd5JztcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBuYXRpdmVFeGVjID0gUmVnRXhwLnByb3RvdHlwZS5leGVjO1xuICAvLyBUaGlzIGFsd2F5cyByZWZlcnMgdG8gdGhlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiwgYmVjYXVzZSB0aGVcbiAgLy8gU3RyaW5nI3JlcGxhY2UgcG9seWZpbGwgdXNlcyAuL2ZpeC1yZWdleHAtd2VsbC1rbm93bi1zeW1ib2wtbG9naWMuanMsXG4gIC8vIHdoaWNoIGxvYWRzIHRoaXMgZmlsZSBiZWZvcmUgcGF0Y2hpbmcgdGhlIG1ldGhvZC5cbiAgdmFyIG5hdGl2ZVJlcGxhY2UgPSBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2U7XG5cbiAgdmFyIHBhdGNoZWRFeGVjID0gbmF0aXZlRXhlYztcblxuICB2YXIgTEFTVF9JTkRFWCA9ICdsYXN0SW5kZXgnO1xuXG4gIHZhciBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciByZTEgPSAvYS8sXG4gICAgICAgIHJlMiA9IC9iKi9nO1xuICAgIG5hdGl2ZUV4ZWMuY2FsbChyZTEsICdhJyk7XG4gICAgbmF0aXZlRXhlYy5jYWxsKHJlMiwgJ2EnKTtcbiAgICByZXR1cm4gcmUxW0xBU1RfSU5ERVhdICE9PSAwIHx8IHJlMltMQVNUX0lOREVYXSAhPT0gMDtcbiAgfSkoKTtcblxuICAvLyBub25wYXJ0aWNpcGF0aW5nIGNhcHR1cmluZyBncm91cCwgY29waWVkIGZyb20gZXM1LXNoaW0ncyBTdHJpbmcjc3BsaXQgcGF0Y2guXG4gIHZhciBOUENHX0lOQ0xVREVEID0gLygpPz8vLmV4ZWMoJycpWzFdICE9PSB1bmRlZmluZWQ7XG5cbiAgdmFyIFBBVENIID0gVVBEQVRFU19MQVNUX0lOREVYX1dST05HIHx8IE5QQ0dfSU5DTFVERUQ7XG5cbiAgaWYgKFBBVENIKSB7XG4gICAgcGF0Y2hlZEV4ZWMgPSBmdW5jdGlvbiBleGVjKHN0cikge1xuICAgICAgdmFyIHJlID0gdGhpcztcbiAgICAgIHZhciBsYXN0SW5kZXgsIHJlQ29weSwgbWF0Y2gsIGk7XG5cbiAgICAgIGlmIChOUENHX0lOQ0xVREVEKSB7XG4gICAgICAgIHJlQ29weSA9IG5ldyBSZWdFeHAoJ14nICsgcmUuc291cmNlICsgJyQoPyFcXFxccyknLCBfZmxhZ3MuY2FsbChyZSkpO1xuICAgICAgfVxuICAgICAgaWYgKFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORykgbGFzdEluZGV4ID0gcmVbTEFTVF9JTkRFWF07XG5cbiAgICAgIG1hdGNoID0gbmF0aXZlRXhlYy5jYWxsKHJlLCBzdHIpO1xuXG4gICAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HICYmIG1hdGNoKSB7XG4gICAgICAgIHJlW0xBU1RfSU5ERVhdID0gcmUuZ2xvYmFsID8gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggOiBsYXN0SW5kZXg7XG4gICAgICB9XG4gICAgICBpZiAoTlBDR19JTkNMVURFRCAmJiBtYXRjaCAmJiBtYXRjaC5sZW5ndGggPiAxKSB7XG4gICAgICAgIC8vIEZpeCBicm93c2VycyB3aG9zZSBgZXhlY2AgbWV0aG9kcyBkb24ndCBjb25zaXN0ZW50bHkgcmV0dXJuIGB1bmRlZmluZWRgXG4gICAgICAgIC8vIGZvciBOUENHLCBsaWtlIElFOC4gTk9URTogVGhpcyBkb2Vzbicgd29yayBmb3IgLyguPyk/L1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbG9vcC1mdW5jXG4gICAgICAgIG5hdGl2ZVJlcGxhY2UuY2FsbChtYXRjaFswXSwgcmVDb3B5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm9yIChpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0gPT09IHVuZGVmaW5lZCkgbWF0Y2hbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH07XG4gIH1cblxuICB2YXIgX3JlZ2V4cEV4ZWMgPSBwYXRjaGVkRXhlYztcblxuICB2YXIgX2ZhaWxzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuICEhZXhlYygpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfTtcblxuICAvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG4gIHZhciBfZGVzY3JpcHRvcnMgPSAhX2ZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbiAgfSk7XG5cbiAgdmFyIGRvY3VtZW50JDEgPSBfZ2xvYmFsLmRvY3VtZW50O1xuICAvLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbiAgdmFyIGlzID0gX2lzT2JqZWN0KGRvY3VtZW50JDEpICYmIF9pc09iamVjdChkb2N1bWVudCQxLmNyZWF0ZUVsZW1lbnQpO1xuICB2YXIgX2RvbUNyZWF0ZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBpcyA/IGRvY3VtZW50JDEuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbiAgfTtcblxuICB2YXIgX2llOERvbURlZmluZSA9ICFfZGVzY3JpcHRvcnMgJiYgIV9mYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfZG9tQ3JlYXRlKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG4gIH0pO1xuXG4gIC8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxuXG4gIC8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4gIC8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG4gIHZhciBfdG9QcmltaXRpdmUgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgICBpZiAoIV9pc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgICB2YXIgZm4sIHZhbDtcbiAgICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIV9pc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gICAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFfaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICAgIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIV9pc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xuICB9O1xuXG4gIHZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuICB2YXIgZiA9IF9kZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgICBfYW5PYmplY3QoTyk7XG4gICAgUCA9IF90b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgICBfYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gICAgaWYgKF9pZThEb21EZWZpbmUpIHRyeSB7XG4gICAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gICAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICByZXR1cm4gTztcbiAgfTtcblxuICB2YXIgX29iamVjdERwID0ge1xuICBcdGY6IGZcbiAgfTtcblxuICB2YXIgX3Byb3BlcnR5RGVzYyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH07XG4gIH07XG5cbiAgdmFyIF9oaWRlID0gX2Rlc2NyaXB0b3JzID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBfb2JqZWN0RHAuZihvYmplY3QsIGtleSwgX3Byb3BlcnR5RGVzYygxLCB2YWx1ZSkpO1xuICB9IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfTtcblxuICB2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIF9oYXMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICAgIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xuICB9O1xuXG4gIHZhciBfZnVuY3Rpb25Ub1N0cmluZyA9IF9zaGFyZWQoJ25hdGl2ZS1mdW5jdGlvbi10by1zdHJpbmcnLCBGdW5jdGlvbi50b1N0cmluZyk7XG5cbiAgdmFyIF9yZWRlZmluZSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgdmFyIFNSQyA9IF91aWQoJ3NyYycpO1xuXG4gIHZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xuICB2YXIgVFBMID0gKCcnICsgX2Z1bmN0aW9uVG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbiAgX2NvcmUuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBfZnVuY3Rpb25Ub1N0cmluZy5jYWxsKGl0KTtcbiAgfTtcblxuICAobW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAoaXNGdW5jdGlvbikgX2hhcyh2YWwsICduYW1lJykgfHwgX2hpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gICAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gICAgaWYgKGlzRnVuY3Rpb24pIF9oYXModmFsLCBTUkMpIHx8IF9oaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gICAgaWYgKE8gPT09IF9nbG9iYWwpIHtcbiAgICAgIE9ba2V5XSA9IHZhbDtcbiAgICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgICBkZWxldGUgT1trZXldO1xuICAgICAgX2hpZGUoTywga2V5LCB2YWwpO1xuICAgIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgICBPW2tleV0gPSB2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9oaWRlKE8sIGtleSwgdmFsKTtcbiAgICB9XG4gIC8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxuICB9KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8IF9mdW5jdGlvblRvU3RyaW5nLmNhbGwodGhpcyk7XG4gIH0pO1xuICB9KTtcblxuICAvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcblxuICB2YXIgX2N0eCA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gICAgX2FGdW5jdGlvbihmbik7XG4gICAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICAgIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICAgIH07XG4gICAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICAgIH07XG4gICAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbiAgdmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gICAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gICAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gICAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gICAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gICAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IF9nbG9iYWwgOiBJU19TVEFUSUMgPyBfZ2xvYmFsW25hbWVdIHx8IChfZ2xvYmFsW25hbWVdID0ge30pIDogKF9nbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gICAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBfY29yZSA6IF9jb3JlW25hbWVdIHx8IChfY29yZVtuYW1lXSA9IHt9KTtcbiAgICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICAgIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gICAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgICBleHAgPSBJU19CSU5EICYmIG93biA/IF9jdHgob3V0LCBfZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IF9jdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICAgIGlmICh0YXJnZXQpIF9yZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAgIC8vIGV4cG9ydFxuICAgICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIF9oaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgICB9XG4gIH07XG4gIF9nbG9iYWwuY29yZSA9IF9jb3JlO1xuICAvLyB0eXBlIGJpdG1hcFxuICAkZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuICAkZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuICAkZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuICAkZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4gICRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuICAkZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiAgJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4gICRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxuICB2YXIgX2V4cG9ydCA9ICRleHBvcnQ7XG5cbiAgX2V4cG9ydCh7XG4gICAgdGFyZ2V0OiAnUmVnRXhwJyxcbiAgICBwcm90bzogdHJ1ZSxcbiAgICBmb3JjZWQ6IF9yZWdleHBFeGVjICE9PSAvLi8uZXhlY1xuICB9LCB7XG4gICAgZXhlYzogX3JlZ2V4cEV4ZWNcbiAgfSk7XG5cbiAgdmFyIFNQRUNJRVMkMSA9IF93a3MoJ3NwZWNpZXMnKTtcblxuICB2YXIgUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMgPSAhX2ZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAvLyAjcmVwbGFjZSBuZWVkcyBidWlsdC1pbiBzdXBwb3J0IGZvciBuYW1lZCBncm91cHMuXG4gICAgLy8gI21hdGNoIHdvcmtzIGZpbmUgYmVjYXVzZSBpdCBqdXN0IHJldHVybiB0aGUgZXhlYyByZXN1bHRzLCBldmVuIGlmIGl0IGhhc1xuICAgIC8vIGEgXCJncm9wc1wiIHByb3BlcnR5LlxuICAgIHZhciByZSA9IC8uLztcbiAgICByZS5leGVjID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgcmVzdWx0Lmdyb3VwcyA9IHsgYTogJzcnIH07XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgcmV0dXJuICcnLnJlcGxhY2UocmUsICckPGE+JykgIT09ICc3JztcbiAgfSk7XG5cbiAgdmFyIFNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQyA9IChmdW5jdGlvbiAoKSB7XG4gICAgLy8gQ2hyb21lIDUxIGhhcyBhIGJ1Z2d5IFwic3BsaXRcIiBpbXBsZW1lbnRhdGlvbiB3aGVuIFJlZ0V4cCNleGVjICE9PSBuYXRpdmVFeGVjXG4gICAgdmFyIHJlID0gLyg/OikvO1xuICAgIHZhciBvcmlnaW5hbEV4ZWMgPSByZS5leGVjO1xuICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBvcmlnaW5hbEV4ZWMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICB2YXIgcmVzdWx0ID0gJ2FiJy5zcGxpdChyZSk7XG4gICAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPT09IDIgJiYgcmVzdWx0WzBdID09PSAnYScgJiYgcmVzdWx0WzFdID09PSAnYic7XG4gIH0pKCk7XG5cbiAgdmFyIF9maXhSZVdrcyA9IGZ1bmN0aW9uIChLRVksIGxlbmd0aCwgZXhlYykge1xuICAgIHZhciBTWU1CT0wgPSBfd2tzKEtFWSk7XG5cbiAgICB2YXIgREVMRUdBVEVTX1RPX1NZTUJPTCA9ICFfZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gU3RyaW5nIG1ldGhvZHMgY2FsbCBzeW1ib2wtbmFtZWQgUmVnRXAgbWV0aG9kc1xuICAgICAgdmFyIE8gPSB7fTtcbiAgICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XG4gICAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICAgIH0pO1xuXG4gICAgdmFyIERFTEVHQVRFU19UT19FWEVDID0gREVMRUdBVEVTX1RPX1NZTUJPTCA/ICFfZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgICAgLy8gU3ltYm9sLW5hbWVkIFJlZ0V4cCBtZXRob2RzIGNhbGwgLmV4ZWNcbiAgICAgIHZhciBleGVjQ2FsbGVkID0gZmFsc2U7XG4gICAgICB2YXIgcmUgPSAvYS87XG4gICAgICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyBleGVjQ2FsbGVkID0gdHJ1ZTsgcmV0dXJuIG51bGw7IH07XG4gICAgICBpZiAoS0VZID09PSAnc3BsaXQnKSB7XG4gICAgICAgIC8vIFJlZ0V4cFtAQHNwbGl0XSBkb2Vzbid0IGNhbGwgdGhlIHJlZ2V4J3MgZXhlYyBtZXRob2QsIGJ1dCBmaXJzdCBjcmVhdGVzXG4gICAgICAgIC8vIGEgbmV3IG9uZS4gV2UgbmVlZCB0byByZXR1cm4gdGhlIHBhdGNoZWQgcmVnZXggd2hlbiBjcmVhdGluZyB0aGUgbmV3IG9uZS5cbiAgICAgICAgcmUuY29uc3RydWN0b3IgPSB7fTtcbiAgICAgICAgcmUuY29uc3RydWN0b3JbU1BFQ0lFUyQxXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlOyB9O1xuICAgICAgfVxuICAgICAgcmVbU1lNQk9MXSgnJyk7XG4gICAgICByZXR1cm4gIWV4ZWNDYWxsZWQ7XG4gICAgfSkgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoXG4gICAgICAhREVMRUdBVEVTX1RPX1NZTUJPTCB8fFxuICAgICAgIURFTEVHQVRFU19UT19FWEVDIHx8XG4gICAgICAoS0VZID09PSAncmVwbGFjZScgJiYgIVJFUExBQ0VfU1VQUE9SVFNfTkFNRURfR1JPVVBTKSB8fFxuICAgICAgKEtFWSA9PT0gJ3NwbGl0JyAmJiAhU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDKVxuICAgICkge1xuICAgICAgdmFyIG5hdGl2ZVJlZ0V4cE1ldGhvZCA9IC8uL1tTWU1CT0xdO1xuICAgICAgdmFyIGZucyA9IGV4ZWMoXG4gICAgICAgIF9kZWZpbmVkLFxuICAgICAgICBTWU1CT0wsXG4gICAgICAgICcnW0tFWV0sXG4gICAgICAgIGZ1bmN0aW9uIG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVNZXRob2QsIHJlZ2V4cCwgc3RyLCBhcmcyLCBmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICAgIGlmIChyZWdleHAuZXhlYyA9PT0gX3JlZ2V4cEV4ZWMpIHtcbiAgICAgICAgICAgIGlmIChERUxFR0FURVNfVE9fU1lNQk9MICYmICFmb3JjZVN0cmluZ01ldGhvZCkge1xuICAgICAgICAgICAgICAvLyBUaGUgbmF0aXZlIFN0cmluZyBtZXRob2QgYWxyZWFkeSBkZWxlZ2F0ZXMgdG8gQEBtZXRob2QgKHRoaXNcbiAgICAgICAgICAgICAgLy8gcG9seWZpbGxlZCBmdW5jdGlvbiksIGxlYXNpbmcgdG8gaW5maW5pdGUgcmVjdXJzaW9uLlxuICAgICAgICAgICAgICAvLyBXZSBhdm9pZCBpdCBieSBkaXJlY3RseSBjYWxsaW5nIHRoZSBuYXRpdmUgQEBtZXRob2QgbWV0aG9kLlxuICAgICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlUmVnRXhwTWV0aG9kLmNhbGwocmVnZXhwLCBzdHIsIGFyZzIpIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyBkb25lOiB0cnVlLCB2YWx1ZTogbmF0aXZlTWV0aG9kLmNhbGwoc3RyLCByZWdleHAsIGFyZzIpIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB7IGRvbmU6IGZhbHNlIH07XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICB2YXIgc3RyZm4gPSBmbnNbMF07XG4gICAgICB2YXIgcnhmbiA9IGZuc1sxXTtcblxuICAgICAgX3JlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgc3RyZm4pO1xuICAgICAgX2hpZGUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICAgID8gZnVuY3Rpb24gKHN0cmluZywgYXJnKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG4gICAgICAgIDogZnVuY3Rpb24gKHN0cmluZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIHZhciAkbWluID0gTWF0aC5taW47XG4gIHZhciAkcHVzaCA9IFtdLnB1c2g7XG4gIHZhciAkU1BMSVQgPSAnc3BsaXQnO1xuICB2YXIgTEVOR1RIID0gJ2xlbmd0aCc7XG4gIHZhciBMQVNUX0lOREVYJDEgPSAnbGFzdEluZGV4JztcbiAgdmFyIE1BWF9VSU5UMzIgPSAweGZmZmZmZmZmO1xuXG4gIC8vIGJhYmVsLW1pbmlmeSB0cmFuc3BpbGVzIFJlZ0V4cCgneCcsICd5JykgLT4gL3gveSBhbmQgaXQgY2F1c2VzIFN5bnRheEVycm9yXG4gIHZhciBTVVBQT1JUU19ZID0gIV9mYWlscyhmdW5jdGlvbiAoKSB7IH0pO1xuXG4gIC8vIEBAc3BsaXQgbG9naWNcbiAgX2ZpeFJlV2tzKCdzcGxpdCcsIDIsIGZ1bmN0aW9uIChkZWZpbmVkLCBTUExJVCwgJHNwbGl0LCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgICB2YXIgaW50ZXJuYWxTcGxpdDtcbiAgICBpZiAoXG4gICAgICAnYWJiYydbJFNQTElUXSgvKGIpKi8pWzFdID09ICdjJyB8fFxuICAgICAgJ3Rlc3QnWyRTUExJVF0oLyg/OikvLCAtMSlbTEVOR1RIXSAhPSA0IHx8XG4gICAgICAnYWInWyRTUExJVF0oLyg/OmFiKSovKVtMRU5HVEhdICE9IDIgfHxcbiAgICAgICcuJ1skU1BMSVRdKC8oLj8pKC4/KS8pW0xFTkdUSF0gIT0gNCB8fFxuICAgICAgJy4nWyRTUExJVF0oLygpKCkvKVtMRU5HVEhdID4gMSB8fFxuICAgICAgJydbJFNQTElUXSgvLj8vKVtMRU5HVEhdXG4gICAgKSB7XG4gICAgICAvLyBiYXNlZCBvbiBlczUtc2hpbSBpbXBsZW1lbnRhdGlvbiwgbmVlZCB0byByZXdvcmsgaXRcbiAgICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xuICAgICAgICBpZiAoc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDApIHJldHVybiBbXTtcbiAgICAgICAgLy8gSWYgYHNlcGFyYXRvcmAgaXMgbm90IGEgcmVnZXgsIHVzZSBuYXRpdmUgc3BsaXRcbiAgICAgICAgaWYgKCFfaXNSZWdleHAoc2VwYXJhdG9yKSkgcmV0dXJuICRzcGxpdC5jYWxsKHN0cmluZywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgICAgIHZhciBvdXRwdXQgPSBbXTtcbiAgICAgICAgdmFyIGZsYWdzID0gKHNlcGFyYXRvci5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKHNlcGFyYXRvci5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnVuaWNvZGUgPyAndScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLnN0aWNreSA/ICd5JyA6ICcnKTtcbiAgICAgICAgdmFyIGxhc3RMYXN0SW5kZXggPSAwO1xuICAgICAgICB2YXIgc3BsaXRMaW1pdCA9IGxpbWl0ID09PSB1bmRlZmluZWQgPyBNQVhfVUlOVDMyIDogbGltaXQgPj4+IDA7XG4gICAgICAgIC8vIE1ha2UgYGdsb2JhbGAgYW5kIGF2b2lkIGBsYXN0SW5kZXhgIGlzc3VlcyBieSB3b3JraW5nIHdpdGggYSBjb3B5XG4gICAgICAgIHZhciBzZXBhcmF0b3JDb3B5ID0gbmV3IFJlZ0V4cChzZXBhcmF0b3Iuc291cmNlLCBmbGFncyArICdnJyk7XG4gICAgICAgIHZhciBtYXRjaCwgbGFzdEluZGV4LCBsYXN0TGVuZ3RoO1xuICAgICAgICB3aGlsZSAobWF0Y2ggPSBfcmVnZXhwRXhlYy5jYWxsKHNlcGFyYXRvckNvcHksIHN0cmluZykpIHtcbiAgICAgICAgICBsYXN0SW5kZXggPSBzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVgkMV07XG4gICAgICAgICAgaWYgKGxhc3RJbmRleCA+IGxhc3RMYXN0SW5kZXgpIHtcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKHN0cmluZy5zbGljZShsYXN0TGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgICAgICAgICAgaWYgKG1hdGNoW0xFTkdUSF0gPiAxICYmIG1hdGNoLmluZGV4IDwgc3RyaW5nW0xFTkdUSF0pICRwdXNoLmFwcGx5KG91dHB1dCwgbWF0Y2guc2xpY2UoMSkpO1xuICAgICAgICAgICAgbGFzdExlbmd0aCA9IG1hdGNoWzBdW0xFTkdUSF07XG4gICAgICAgICAgICBsYXN0TGFzdEluZGV4ID0gbGFzdEluZGV4O1xuICAgICAgICAgICAgaWYgKG91dHB1dFtMRU5HVEhdID49IHNwbGl0TGltaXQpIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYJDFdID09PSBtYXRjaC5pbmRleCkgc2VwYXJhdG9yQ29weVtMQVNUX0lOREVYJDFdKys7IC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3BcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdExhc3RJbmRleCA9PT0gc3RyaW5nW0xFTkdUSF0pIHtcbiAgICAgICAgICBpZiAobGFzdExlbmd0aCB8fCAhc2VwYXJhdG9yQ29weS50ZXN0KCcnKSkgb3V0cHV0LnB1c2goJycpO1xuICAgICAgICB9IGVsc2Ugb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgpKTtcbiAgICAgICAgcmV0dXJuIG91dHB1dFtMRU5HVEhdID4gc3BsaXRMaW1pdCA/IG91dHB1dC5zbGljZSgwLCBzcGxpdExpbWl0KSA6IG91dHB1dDtcbiAgICAgIH07XG4gICAgLy8gQ2hha3JhLCBWOFxuICAgIH0gZWxzZSBpZiAoJzAnWyRTUExJVF0odW5kZWZpbmVkLCAwKVtMRU5HVEhdKSB7XG4gICAgICBpbnRlcm5hbFNwbGl0ID0gZnVuY3Rpb24gKHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiAkc3BsaXQuY2FsbCh0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGludGVybmFsU3BsaXQgPSAkc3BsaXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNwbGl0YCBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc3BsaXRcbiAgICAgIGZ1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgICB2YXIgc3BsaXR0ZXIgPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICAgICAgcmV0dXJuIHNwbGl0dGVyICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IHNwbGl0dGVyLmNhbGwoc2VwYXJhdG9yLCBPLCBsaW1pdClcbiAgICAgICAgICA6IGludGVybmFsU3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgfSxcbiAgICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdYCBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzcGxpdFxuICAgICAgLy9cbiAgICAgIC8vIE5PVEU6IFRoaXMgY2Fubm90IGJlIHByb3Blcmx5IHBvbHlmaWxsZWQgaW4gZW5naW5lcyB0aGF0IGRvbid0IHN1cHBvcnRcbiAgICAgIC8vIHRoZSAneScgZmxhZy5cbiAgICAgIGZ1bmN0aW9uIChyZWdleHAsIGxpbWl0KSB7XG4gICAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoaW50ZXJuYWxTcGxpdCwgcmVnZXhwLCB0aGlzLCBsaW1pdCwgaW50ZXJuYWxTcGxpdCAhPT0gJHNwbGl0KTtcbiAgICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICAgIHZhciByeCA9IF9hbk9iamVjdChyZWdleHApO1xuICAgICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgICAgdmFyIEMgPSBfc3BlY2llc0NvbnN0cnVjdG9yKHJ4LCBSZWdFeHApO1xuXG4gICAgICAgIHZhciB1bmljb2RlTWF0Y2hpbmcgPSByeC51bmljb2RlO1xuICAgICAgICB2YXIgZmxhZ3MgPSAocnguaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChyeC5tdWx0aWxpbmUgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAocngudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChTVVBQT1JUU19ZID8gJ3knIDogJ2cnKTtcblxuICAgICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgUyBzbGljaW5nLCB0b1xuICAgICAgICAvLyBzaW11bGF0ZSB0aGUgJ3knIGZsYWcuXG4gICAgICAgIHZhciBzcGxpdHRlciA9IG5ldyBDKFNVUFBPUlRTX1kgPyByeCA6ICdeKD86JyArIHJ4LnNvdXJjZSArICcpJywgZmxhZ3MpO1xuICAgICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgICBpZiAoUy5sZW5ndGggPT09IDApIHJldHVybiBfcmVnZXhwRXhlY0Fic3RyYWN0KHNwbGl0dGVyLCBTKSA9PT0gbnVsbCA/IFtTXSA6IFtdO1xuICAgICAgICB2YXIgcCA9IDA7XG4gICAgICAgIHZhciBxID0gMDtcbiAgICAgICAgdmFyIEEgPSBbXTtcbiAgICAgICAgd2hpbGUgKHEgPCBTLmxlbmd0aCkge1xuICAgICAgICAgIHNwbGl0dGVyLmxhc3RJbmRleCA9IFNVUFBPUlRTX1kgPyBxIDogMDtcbiAgICAgICAgICB2YXIgeiA9IF9yZWdleHBFeGVjQWJzdHJhY3Qoc3BsaXR0ZXIsIFNVUFBPUlRTX1kgPyBTIDogUy5zbGljZShxKSk7XG4gICAgICAgICAgdmFyIGU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgeiA9PT0gbnVsbCB8fFxuICAgICAgICAgICAgKGUgPSAkbWluKF90b0xlbmd0aChzcGxpdHRlci5sYXN0SW5kZXggKyAoU1VQUE9SVFNfWSA/IDAgOiBxKSksIFMubGVuZ3RoKSkgPT09IHBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHEgPSBfYWR2YW5jZVN0cmluZ0luZGV4KFMsIHEsIHVuaWNvZGVNYXRjaGluZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEEucHVzaChTLnNsaWNlKHAsIHEpKTtcbiAgICAgICAgICAgIGlmIChBLmxlbmd0aCA9PT0gbGltKSByZXR1cm4gQTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHoubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgIEEucHVzaCh6W2ldKTtcbiAgICAgICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcSA9IHAgPSBlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBBLnB1c2goUy5zbGljZShwKSk7XG4gICAgICAgIHJldHVybiBBO1xuICAgICAgfVxuICAgIF07XG4gIH0pO1xuXG4gIC8qXHJcbiAgKiByZXF1aXJlZCBwb2x5ZmlsbHNcclxuICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcbiAgfSkoKTtcbiAgLyoqIElFOSwgSUUxMCBhbmQgSUUxMSByZXF1aXJlcyBhbGwgb2YgdGhlIGZvbGxvd2luZyBwb2x5ZmlsbHMuICoqL1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3N5bWJvbCdcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9vYmplY3QnXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvZnVuY3Rpb24nXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtaW50J1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3BhcnNlLWZsb2F0J1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L251bWJlcidcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXRoJ1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3N0cmluZydcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9kYXRlJ1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L2FycmF5J1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L3JlZ2V4cCdcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9tYXAnXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvd2Vhay1tYXAnXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvc2V0J1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM3L29iamVjdCdcblxuICAvKiogSUUxMCBhbmQgSUUxMSByZXF1aXJlcyB0aGUgZm9sbG93aW5nIGZvciB0aGUgUmVmbGVjdCBBUEkuICovXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvcmVmbGVjdCdcblxuICAvKiogRXZlcmdyZWVuIGJyb3dzZXJzIHJlcXVpcmUgdGhlc2UuICoqL1xuICAvLyBVc2VkIGZvciByZWZsZWN0LW1ldGFkYXRhIGluIEpJVC4gSWYgeW91IHVzZSBBT1QgKGFuZCBvbmx5IEFuZ3VsYXIgZGVjb3JhdG9ycyksIHlvdSBjYW4gcmVtb3ZlLlxuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM3L3JlZmxlY3QnXG4gIC8vIEN1c3RvbUV2ZW50KCkgY29uc3RydWN0b3IgZnVuY3Rpb25hbGl0eSBpbiBJRTksIElFMTAsIElFMTFcbiAgLy8gKGZ1bmN0aW9uICgpIHtcbiAgLy9cbiAgLy8gICBpZiAoIHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgPT09IFwiZnVuY3Rpb25cIiApIHJldHVybiBmYWxzZVxuICAvL1xuICAvLyAgIGZ1bmN0aW9uIEN1c3RvbUV2ZW50ICggZXZlbnQsIHBhcmFtcyApIHtcbiAgLy8gICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiB1bmRlZmluZWQgfVxuICAvLyAgICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCAnQ3VzdG9tRXZlbnQnIClcbiAgLy8gICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoIGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwgKVxuICAvLyAgICAgcmV0dXJuIGV2dFxuICAvLyAgIH1cbiAgLy9cbiAgLy8gICBDdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3cuRXZlbnQucHJvdG90eXBlXG4gIC8vXG4gIC8vICAgd2luZG93LkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnRcbiAgLy8gfSkoKVxuXG4gIC8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICB2YXIgX2lvYmplY3QgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBfY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG4gIH07XG5cbiAgLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG5cblxuICB2YXIgX3RvSW9iamVjdCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBfaW9iamVjdChfZGVmaW5lZChpdCkpO1xuICB9O1xuXG4gIHZhciBtYXggPSBNYXRoLm1heDtcbiAgdmFyIG1pbiQxID0gTWF0aC5taW47XG4gIHZhciBfdG9BYnNvbHV0ZUluZGV4ID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgICBpbmRleCA9IF90b0ludGVnZXIoaW5kZXgpO1xuICAgIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluJDEoaW5kZXgsIGxlbmd0aCk7XG4gIH07XG5cbiAgLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuICAvLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xuXG5cblxuICB2YXIgX2FycmF5SW5jbHVkZXMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgICB2YXIgTyA9IF90b0lvYmplY3QoJHRoaXMpO1xuICAgICAgdmFyIGxlbmd0aCA9IF90b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICB2YXIgaW5kZXggPSBfdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICAgIHZhciB2YWx1ZTtcbiAgICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBzaGFyZWQgPSBfc2hhcmVkKCdrZXlzJyk7XG5cbiAgdmFyIF9zaGFyZWRLZXkgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IF91aWQoa2V5KSk7XG4gIH07XG5cbiAgdmFyIGFycmF5SW5kZXhPZiA9IF9hcnJheUluY2x1ZGVzKGZhbHNlKTtcbiAgdmFyIElFX1BST1RPID0gX3NoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxuICB2YXIgX29iamVjdEtleXNJbnRlcm5hbCA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gICAgdmFyIE8gPSBfdG9Jb2JqZWN0KG9iamVjdCk7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5O1xuICAgIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIF9oYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAgIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKF9oYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xuICB2YXIgX2VudW1CdWdLZXlzID0gKFxuICAgICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4gICkuc3BsaXQoJywnKTtcblxuICAvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcblxuXG5cbiAgdmFyIF9vYmplY3RLZXlzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gICAgcmV0dXJuIF9vYmplY3RLZXlzSW50ZXJuYWwoTywgX2VudW1CdWdLZXlzKTtcbiAgfTtcblxuICB2YXIgZiQxID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuICB2YXIgX29iamVjdEdvcHMgPSB7XG4gIFx0ZjogZiQxXG4gIH07XG5cbiAgdmFyIGYkMiA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4gIHZhciBfb2JqZWN0UGllID0ge1xuICBcdGY6IGYkMlxuICB9O1xuXG4gIC8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcblxuICB2YXIgX3RvT2JqZWN0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIE9iamVjdChfZGVmaW5lZChpdCkpO1xuICB9O1xuXG4gIC8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcblxuXG5cblxuXG4gIHZhciAkYXNzaWduID0gT2JqZWN0LmFzc2lnbjtcblxuICAvLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1ZylcbiAgdmFyIF9vYmplY3RBc3NpZ24gPSAhJGFzc2lnbiB8fCBfZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHZhciBBID0ge307XG4gICAgdmFyIEIgPSB7fTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgUyA9IFN5bWJvbCgpO1xuICAgIHZhciBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgICBBW1NdID0gNztcbiAgICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7IEJba10gPSBrOyB9KTtcbiAgICByZXR1cm4gJGFzc2lnbih7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cygkYXNzaWduKHt9LCBCKSkuam9pbignJykgIT0gSztcbiAgfSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHZhciBUID0gX3RvT2JqZWN0KHRhcmdldCk7XG4gICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBpbmRleCA9IDE7XG4gICAgdmFyIGdldFN5bWJvbHMgPSBfb2JqZWN0R29wcy5mO1xuICAgIHZhciBpc0VudW0gPSBfb2JqZWN0UGllLmY7XG4gICAgd2hpbGUgKGFMZW4gPiBpbmRleCkge1xuICAgICAgdmFyIFMgPSBfaW9iamVjdChhcmd1bWVudHNbaW5kZXgrK10pO1xuICAgICAgdmFyIGtleXMgPSBnZXRTeW1ib2xzID8gX29iamVjdEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogX29iamVjdEtleXMoUyk7XG4gICAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgICB2YXIgaiA9IDA7XG4gICAgICB2YXIga2V5O1xuICAgICAgd2hpbGUgKGxlbmd0aCA+IGopIGlmIChpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKSBUW2tleV0gPSBTW2tleV07XG4gICAgfSByZXR1cm4gVDtcbiAgfSA6ICRhc3NpZ247XG5cbiAgLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcblxuXG4gIF9leHBvcnQoX2V4cG9ydC5TICsgX2V4cG9ydC5GLCAnT2JqZWN0JywgeyBhc3NpZ246IF9vYmplY3RBc3NpZ24gfSk7XG5cbiAgdmFyIF9pdGVyYXRvcnMgPSB7fTtcblxuICB2YXIgX29iamVjdERwcyA9IF9kZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gICAgX2FuT2JqZWN0KE8pO1xuICAgIHZhciBrZXlzID0gX29iamVjdEtleXMoUHJvcGVydGllcyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgUDtcbiAgICB3aGlsZSAobGVuZ3RoID4gaSkgX29iamVjdERwLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gICAgcmV0dXJuIE87XG4gIH07XG5cbiAgdmFyIGRvY3VtZW50JDIgPSBfZ2xvYmFsLmRvY3VtZW50O1xuICB2YXIgX2h0bWwgPSBkb2N1bWVudCQyICYmIGRvY3VtZW50JDIuZG9jdW1lbnRFbGVtZW50O1xuXG4gIC8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuXG5cblxuICB2YXIgSUVfUFJPVE8kMSA9IF9zaGFyZWRLZXkoJ0lFX1BST1RPJyk7XG4gIHZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbiAgdmFyIFBST1RPVFlQRSQxID0gJ3Byb3RvdHlwZSc7XG5cbiAgLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxuICB2YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICAgIHZhciBpZnJhbWUgPSBfZG9tQ3JlYXRlKCdpZnJhbWUnKTtcbiAgICB2YXIgaSA9IF9lbnVtQnVnS2V5cy5sZW5ndGg7XG4gICAgdmFyIGx0ID0gJzwnO1xuICAgIHZhciBndCA9ICc+JztcbiAgICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gICAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgX2h0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gICAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gICAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gICAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICAgIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gICAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gICAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFJDFdW19lbnVtQnVnS2V5c1tpXV07XG4gICAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbiAgfTtcblxuICB2YXIgX29iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGlmIChPICE9PSBudWxsKSB7XG4gICAgICBFbXB0eVtQUk9UT1RZUEUkMV0gPSBfYW5PYmplY3QoTyk7XG4gICAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICAgIEVtcHR5W1BST1RPVFlQRSQxXSA9IG51bGw7XG4gICAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgICByZXN1bHRbSUVfUFJPVE8kMV0gPSBPO1xuICAgIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gICAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IF9vYmplY3REcHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbiAgfTtcblxuICB2YXIgZGVmID0gX29iamVjdERwLmY7XG5cbiAgdmFyIFRBRyQxID0gX3drcygndG9TdHJpbmdUYWcnKTtcblxuICB2YXIgX3NldFRvU3RyaW5nVGFnID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgICBpZiAoaXQgJiYgIV9oYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRyQxKSkgZGVmKGl0LCBUQUckMSwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG4gIH07XG5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbiAgLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbiAgX2hpZGUoSXRlcmF0b3JQcm90b3R5cGUsIF93a3MoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG4gIHZhciBfaXRlckNyZWF0ZSA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IF9vYmplY3RDcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogX3Byb3BlcnR5RGVzYygxLCBuZXh0KSB9KTtcbiAgICBfc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG4gIH07XG5cbiAgLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcblxuXG4gIHZhciBJRV9QUk9UTyQyID0gX3NoYXJlZEtleSgnSUVfUFJPVE8nKTtcbiAgdmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuICB2YXIgX29iamVjdEdwbyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICAgIE8gPSBfdG9PYmplY3QoTyk7XG4gICAgaWYgKF9oYXMoTywgSUVfUFJPVE8kMikpIHJldHVybiBPW0lFX1BST1RPJDJdO1xuICAgIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbiAgfTtcblxuICB2YXIgSVRFUkFUT1IgPSBfd2tzKCdpdGVyYXRvcicpO1xuICB2YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgdmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xuICB2YXIgS0VZUyA9ICdrZXlzJztcbiAgdmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG4gIHZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxuICB2YXIgX2l0ZXJEZWZpbmUgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICAgX2l0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICAgIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH07XG4gICAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICAgIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gICAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gICAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gICAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gICAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gICAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gICAgLy8gRml4IG5hdGl2ZVxuICAgIGlmICgkYW55TmF0aXZlKSB7XG4gICAgICBJdGVyYXRvclByb3RvdHlwZSA9IF9vYmplY3RHcG8oJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgICAgX3NldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgICAgaWYgKHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgX2hpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICAgIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gICAgfVxuICAgIC8vIERlZmluZSBpdGVyYXRvclxuICAgIGlmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pIHtcbiAgICAgIF9oaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICAgIH1cbiAgICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gICAgX2l0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICAgIF9pdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gICAgaWYgKERFRkFVTFQpIHtcbiAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgICAgfTtcbiAgICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgX3JlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgICB9IGVsc2UgX2V4cG9ydChfZXhwb3J0LlAgKyBfZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICAgIH1cbiAgICByZXR1cm4gbWV0aG9kcztcbiAgfTtcblxuICB2YXIgJGF0ID0gX3N0cmluZ0F0KHRydWUpO1xuXG4gIC8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbiAgX2l0ZXJEZWZpbmUoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gICAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICAgIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIC8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbiAgfSwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBPID0gdGhpcy5fdDtcbiAgICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICAgIHZhciBwb2ludDtcbiAgICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gICAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xuICB9KTtcblxuICAvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG5cbiAgdmFyIF9pdGVyQ2FsbCA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBlbnRyaWVzID8gZm4oX2FuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAgIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgX2FuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfTtcblxuICAvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG5cbiAgdmFyIElURVJBVE9SJDEgPSBfd2tzKCdpdGVyYXRvcicpO1xuICB2YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuICB2YXIgX2lzQXJyYXlJdGVyID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKF9pdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1IkMV0gPT09IGl0KTtcbiAgfTtcblxuICB2YXIgX2NyZWF0ZVByb3BlcnR5ID0gZnVuY3Rpb24gKG9iamVjdCwgaW5kZXgsIHZhbHVlKSB7XG4gICAgaWYgKGluZGV4IGluIG9iamVjdCkgX29iamVjdERwLmYob2JqZWN0LCBpbmRleCwgX3Byb3BlcnR5RGVzYygwLCB2YWx1ZSkpO1xuICAgIGVsc2Ugb2JqZWN0W2luZGV4XSA9IHZhbHVlO1xuICB9O1xuXG4gIHZhciBJVEVSQVRPUiQyID0gX3drcygnaXRlcmF0b3InKTtcblxuICB2YXIgY29yZV9nZXRJdGVyYXRvck1ldGhvZCA9IF9jb3JlLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SJDJdXG4gICAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgICB8fCBfaXRlcmF0b3JzW19jbGFzc29mKGl0KV07XG4gIH07XG5cbiAgdmFyIElURVJBVE9SJDMgPSBfd2tzKCdpdGVyYXRvcicpO1xuICB2YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbiAgdHJ5IHtcbiAgICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1IkM10oKTtcbiAgICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG4gIHZhciBfaXRlckRldGVjdCA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICAgIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBzYWZlID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBhcnIgPSBbN107XG4gICAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUiQzXSgpO1xuICAgICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgICAgYXJyW0lURVJBVE9SJDNdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICAgIGV4ZWMoYXJyKTtcbiAgICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgICByZXR1cm4gc2FmZTtcbiAgfTtcblxuICBfZXhwb3J0KF9leHBvcnQuUyArIF9leHBvcnQuRiAqICFfaXRlckRldGVjdChmdW5jdGlvbiAoaXRlcikgeyB9KSwgJ0FycmF5Jywge1xuICAgIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSAvKiAsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkICovKSB7XG4gICAgICB2YXIgTyA9IF90b09iamVjdChhcnJheUxpa2UpO1xuICAgICAgdmFyIEMgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5O1xuICAgICAgdmFyIGFMZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgdmFyIG1hcGZuID0gYUxlbiA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQ7XG4gICAgICB2YXIgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWQ7XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIGl0ZXJGbiA9IGNvcmVfZ2V0SXRlcmF0b3JNZXRob2QoTyk7XG4gICAgICB2YXIgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgICAgaWYgKG1hcHBpbmcpIG1hcGZuID0gX2N0eChtYXBmbiwgYUxlbiA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgX2lzQXJyYXlJdGVyKGl0ZXJGbikpKSB7XG4gICAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgICAgX2NyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBfaXRlckNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZW5ndGggPSBfdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgICBmb3IgKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgICAgX2NyZWF0ZVByb3BlcnR5KHJlc3VsdCwgaW5kZXgsIG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIG1heCQxID0gTWF0aC5tYXg7XG4gIHZhciBtaW4kMiA9IE1hdGgubWluO1xuICB2YXIgZmxvb3IkMSA9IE1hdGguZmxvb3I7XG4gIHZhciBTVUJTVElUVVRJT05fU1lNQk9MUyA9IC9cXCQoWyQmYCddfFxcZFxcZD98PFtePl0qPikvZztcbiAgdmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEID0gL1xcJChbJCZgJ118XFxkXFxkPykvZztcblxuICB2YXIgbWF5YmVUb1N0cmluZyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gaXQgOiBTdHJpbmcoaXQpO1xuICB9O1xuXG4gIC8vIEBAcmVwbGFjZSBsb2dpY1xuICBfZml4UmVXa3MoJ3JlcGxhY2UnLCAyLCBmdW5jdGlvbiAoZGVmaW5lZCwgUkVQTEFDRSwgJHJlcGxhY2UsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICAgIHJldHVybiBbXG4gICAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlYCBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwbGFjZVxuICAgICAgZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICAgICAgdmFyIGZuID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VhcmNoVmFsdWVbUkVQTEFDRV07XG4gICAgICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyBmbi5jYWxsKHNlYXJjaFZhbHVlLCBPLCByZXBsYWNlVmFsdWUpXG4gICAgICAgICAgOiAkcmVwbGFjZS5jYWxsKFN0cmluZyhPKSwgc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICB9LFxuICAgICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXWAgbWV0aG9kXG4gICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAcmVwbGFjZVxuICAgICAgZnVuY3Rpb24gKHJlZ2V4cCwgcmVwbGFjZVZhbHVlKSB7XG4gICAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUoJHJlcGxhY2UsIHJlZ2V4cCwgdGhpcywgcmVwbGFjZVZhbHVlKTtcbiAgICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICAgIHZhciByeCA9IF9hbk9iamVjdChyZWdleHApO1xuICAgICAgICB2YXIgUyA9IFN0cmluZyh0aGlzKTtcbiAgICAgICAgdmFyIGZ1bmN0aW9uYWxSZXBsYWNlID0gdHlwZW9mIHJlcGxhY2VWYWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgaWYgKCFmdW5jdGlvbmFsUmVwbGFjZSkgcmVwbGFjZVZhbHVlID0gU3RyaW5nKHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgIHZhciBnbG9iYWwgPSByeC5nbG9iYWw7XG4gICAgICAgIGlmIChnbG9iYWwpIHtcbiAgICAgICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gX3JlZ2V4cEV4ZWNBYnN0cmFjdChyeCwgUyk7XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gbnVsbCkgYnJlYWs7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgICAgICAgaWYgKCFnbG9iYWwpIGJyZWFrO1xuICAgICAgICAgIHZhciBtYXRjaFN0ciA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IF9hZHZhbmNlU3RyaW5nSW5kZXgoUywgX3RvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWNjdW11bGF0ZWRSZXN1bHQgPSAnJztcbiAgICAgICAgdmFyIG5leHRTb3VyY2VQb3NpdGlvbiA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdHNbaV07XG4gICAgICAgICAgdmFyIG1hdGNoZWQgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgICB2YXIgcG9zaXRpb24gPSBtYXgkMShtaW4kMihfdG9JbnRlZ2VyKHJlc3VsdC5pbmRleCksIFMubGVuZ3RoKSwgMCk7XG4gICAgICAgICAgdmFyIGNhcHR1cmVzID0gW107XG4gICAgICAgICAgLy8gTk9URTogVGhpcyBpcyBlcXVpdmFsZW50IHRvXG4gICAgICAgICAgLy8gICBjYXB0dXJlcyA9IHJlc3VsdC5zbGljZSgxKS5tYXAobWF5YmVUb1N0cmluZylcbiAgICAgICAgICAvLyBidXQgZm9yIHNvbWUgcmVhc29uIGBuYXRpdmVTbGljZS5jYWxsKHJlc3VsdCwgMSwgcmVzdWx0Lmxlbmd0aClgIChjYWxsZWQgaW5cbiAgICAgICAgICAvLyB0aGUgc2xpY2UgcG9seWZpbGwgd2hlbiBzbGljaW5nIG5hdGl2ZSBhcnJheXMpIFwiZG9lc24ndCB3b3JrXCIgaW4gc2FmYXJpIDkgYW5kXG4gICAgICAgICAgLy8gY2F1c2VzIGEgY3Jhc2ggKGh0dHBzOi8vcGFzdGViaW4uY29tL04yMVF6ZVFBKSB3aGVuIHRyeWluZyB0byBkZWJ1ZyBpdC5cbiAgICAgICAgICBmb3IgKHZhciBqID0gMTsgaiA8IHJlc3VsdC5sZW5ndGg7IGorKykgY2FwdHVyZXMucHVzaChtYXliZVRvU3RyaW5nKHJlc3VsdFtqXSkpO1xuICAgICAgICAgIHZhciBuYW1lZENhcHR1cmVzID0gcmVzdWx0Lmdyb3VwcztcbiAgICAgICAgICBpZiAoZnVuY3Rpb25hbFJlcGxhY2UpIHtcbiAgICAgICAgICAgIHZhciByZXBsYWNlckFyZ3MgPSBbbWF0Y2hlZF0uY29uY2F0KGNhcHR1cmVzLCBwb3NpdGlvbiwgUyk7XG4gICAgICAgICAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSByZXBsYWNlckFyZ3MucHVzaChuYW1lZENhcHR1cmVzKTtcbiAgICAgICAgICAgIHZhciByZXBsYWNlbWVudCA9IFN0cmluZyhyZXBsYWNlVmFsdWUuYXBwbHkodW5kZWZpbmVkLCByZXBsYWNlckFyZ3MpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVwbGFjZW1lbnQgPSBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgUywgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocG9zaXRpb24gPj0gbmV4dFNvdXJjZVBvc2l0aW9uKSB7XG4gICAgICAgICAgICBhY2N1bXVsYXRlZFJlc3VsdCArPSBTLnNsaWNlKG5leHRTb3VyY2VQb3NpdGlvbiwgcG9zaXRpb24pICsgcmVwbGFjZW1lbnQ7XG4gICAgICAgICAgICBuZXh0U291cmNlUG9zaXRpb24gPSBwb3NpdGlvbiArIG1hdGNoZWQubGVuZ3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWNjdW11bGF0ZWRSZXN1bHQgKyBTLnNsaWNlKG5leHRTb3VyY2VQb3NpdGlvbik7XG4gICAgICB9XG4gICAgXTtcblxuICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZ2V0c3Vic3RpdHV0aW9uXG4gICAgZnVuY3Rpb24gZ2V0U3Vic3RpdHV0aW9uKG1hdGNoZWQsIHN0ciwgcG9zaXRpb24sIGNhcHR1cmVzLCBuYW1lZENhcHR1cmVzLCByZXBsYWNlbWVudCkge1xuICAgICAgdmFyIHRhaWxQb3MgPSBwb3NpdGlvbiArIG1hdGNoZWQubGVuZ3RoO1xuICAgICAgdmFyIG0gPSBjYXB0dXJlcy5sZW5ndGg7XG4gICAgICB2YXIgc3ltYm9scyA9IFNVQlNUSVRVVElPTl9TWU1CT0xTX05PX05BTUVEO1xuICAgICAgaWYgKG5hbWVkQ2FwdHVyZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBuYW1lZENhcHR1cmVzID0gX3RvT2JqZWN0KG5hbWVkQ2FwdHVyZXMpO1xuICAgICAgICBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFM7XG4gICAgICB9XG4gICAgICByZXR1cm4gJHJlcGxhY2UuY2FsbChyZXBsYWNlbWVudCwgc3ltYm9scywgZnVuY3Rpb24gKG1hdGNoLCBjaCkge1xuICAgICAgICB2YXIgY2FwdHVyZTtcbiAgICAgICAgc3dpdGNoIChjaC5jaGFyQXQoMCkpIHtcbiAgICAgICAgICBjYXNlICckJzogcmV0dXJuICckJztcbiAgICAgICAgICBjYXNlICcmJzogcmV0dXJuIG1hdGNoZWQ7XG4gICAgICAgICAgY2FzZSAnYCc6IHJldHVybiBzdHIuc2xpY2UoMCwgcG9zaXRpb24pO1xuICAgICAgICAgIGNhc2UgXCInXCI6IHJldHVybiBzdHIuc2xpY2UodGFpbFBvcyk7XG4gICAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgICBjYXB0dXJlID0gbmFtZWRDYXB0dXJlc1tjaC5zbGljZSgxLCAtMSldO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDogLy8gXFxkXFxkP1xuICAgICAgICAgICAgdmFyIG4gPSArY2g7XG4gICAgICAgICAgICBpZiAobiA9PT0gMCkgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgaWYgKG4gPiBtKSB7XG4gICAgICAgICAgICAgIHZhciBmID0gZmxvb3IkMShuIC8gMTApO1xuICAgICAgICAgICAgICBpZiAoZiA9PT0gMCkgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgICBpZiAoZiA8PSBtKSByZXR1cm4gY2FwdHVyZXNbZiAtIDFdID09PSB1bmRlZmluZWQgPyBjaC5jaGFyQXQoMSkgOiBjYXB0dXJlc1tmIC0gMV0gKyBjaC5jaGFyQXQoMSk7XG4gICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhcHR1cmUgPSBjYXB0dXJlc1tuIC0gMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhcHR1cmUgPT09IHVuZGVmaW5lZCA/ICcnIDogY2FwdHVyZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9XG5cbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBDb3JlVUkgKHYyLjEuOSk6IGFqYXgtbG9hZC5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXG4gIHZhciBBamF4TG9hZCA9IGZ1bmN0aW9uICgkKSB7XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIENvbnN0YW50c1xyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cbiAgICB2YXIgTkFNRSA9ICdhamF4TG9hZCc7XG4gICAgdmFyIFZFUlNJT04gPSAnMi4xLjknO1xuICAgIHZhciBEQVRBX0tFWSA9ICdjb3JldWkuYWpheExvYWQnO1xuICAgIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICAgIHZhciBDbGFzc05hbWUgPSB7XG4gICAgICBBQ1RJVkU6ICdhY3RpdmUnLFxuICAgICAgTkFWX1BJTExTOiAnbmF2LXBpbGxzJyxcbiAgICAgIE5BVl9UQUJTOiAnbmF2LXRhYnMnLFxuICAgICAgT1BFTjogJ29wZW4nLFxuICAgICAgVklFV19TQ1JJUFQ6ICd2aWV3LXNjcmlwdCdcbiAgICB9O1xuICAgIHZhciBFdmVudCA9IHtcbiAgICAgIENMSUNLOiAnY2xpY2snXG4gICAgfTtcbiAgICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgICBIRUFEOiAnaGVhZCcsXG4gICAgICBOQVZfRFJPUERPV046ICcuc2lkZWJhci1uYXYgLm5hdi1kcm9wZG93bicsXG4gICAgICBOQVZfTElOSzogJy5zaWRlYmFyLW5hdiAubmF2LWxpbmsnLFxuICAgICAgTkFWX0lURU06ICcuc2lkZWJhci1uYXYgLm5hdi1pdGVtJyxcbiAgICAgIFZJRVdfU0NSSVBUOiAnLnZpZXctc2NyaXB0J1xuICAgIH07XG4gICAgdmFyIERlZmF1bHQgPSB7XG4gICAgICBkZWZhdWx0UGFnZTogJ21haW4uaHRtbCcsXG4gICAgICBlcnJvclBhZ2U6ICc0MDQuaHRtbCcsXG4gICAgICBzdWJwYWdlc0RpcmVjdG9yeTogJ3ZpZXdzLydcbiAgICB9O1xuXG4gICAgdmFyIEFqYXhMb2FkID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gQWpheExvYWQoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpO1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdmFyIHVybCA9IGxvY2F0aW9uLmhhc2gucmVwbGFjZSgvXiMvLCAnJyk7XG5cbiAgICAgICAgaWYgKHVybCAhPT0gJycpIHtcbiAgICAgICAgICB0aGlzLnNldFVwVXJsKHVybCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRVcFVybCh0aGlzLl9jb25maWcuZGVmYXVsdFBhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICAgIHZhciBfcHJvdG8gPSBBamF4TG9hZC5wcm90b3R5cGU7XG5cbiAgICAgIC8vIFB1YmxpY1xuICAgICAgX3Byb3RvLmxvYWRQYWdlID0gZnVuY3Rpb24gbG9hZFBhZ2UodXJsKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy5fZWxlbWVudDtcbiAgICAgICAgdmFyIGNvbmZpZyA9IHRoaXMuX2NvbmZpZztcblxuICAgICAgICB2YXIgbG9hZFNjcmlwdHMgPSBmdW5jdGlvbiBsb2FkU2NyaXB0cyhzcmMsIGVsZW1lbnQpIHtcbiAgICAgICAgICBpZiAoZWxlbWVudCA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgICBzY3JpcHQuc3JjID0gc3JjW2VsZW1lbnRdO1xuICAgICAgICAgIHNjcmlwdC5jbGFzc05hbWUgPSBDbGFzc05hbWUuVklFV19TQ1JJUFQ7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1tdWx0aS1hc3NpZ25cblxuICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBzY3JpcHQub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnJlYWR5U3RhdGUgfHwgdGhpcy5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICAgIGlmIChzcmMubGVuZ3RoID4gZWxlbWVudCArIDEpIHtcbiAgICAgICAgICAgICAgICBsb2FkU2NyaXB0cyhzcmMsIGVsZW1lbnQgKyAxKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG4gICAgICAgICAgYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICAgICAgdXJsOiBjb25maWcuc3VicGFnZXNEaXJlY3RvcnkgKyB1cmwsXG4gICAgICAgICAgZGF0YVR5cGU6ICdodG1sJyxcbiAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiBiZWZvcmVTZW5kKCkge1xuICAgICAgICAgICAgJChTZWxlY3Rvci5WSUVXX1NDUklQVCkucmVtb3ZlKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKHJlc3VsdCkge1xuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gcmVzdWx0O1xuICAgICAgICAgICAgdmFyIHNjcmlwdHMgPSBBcnJheS5mcm9tKHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbCgnc2NyaXB0JykpLm1hcChmdW5jdGlvbiAoc2NyaXB0KSB7XG4gICAgICAgICAgICAgIHJldHVybiBzY3JpcHQuYXR0cmlidXRlcy5nZXROYW1lZEl0ZW0oJ3NyYycpLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKS5mb3JFYWNoKGZ1bmN0aW9uIChzY3JpcHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICQoZWxlbWVudCkuaHRtbCh3cmFwcGVyKTtcblxuICAgICAgICAgICAgaWYgKHNjcmlwdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGxvYWRTY3JpcHRzKHNjcmlwdHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHVybDtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gY29uZmlnLmVycm9yUGFnZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnNldFVwVXJsID0gZnVuY3Rpb24gc2V0VXBVcmwodXJsKSB7XG4gICAgICAgICQoU2VsZWN0b3IuTkFWX0xJTkspLnJlbW92ZUNsYXNzKENsYXNzTmFtZS5BQ1RJVkUpO1xuICAgICAgICAkKFNlbGVjdG9yLk5BVl9EUk9QRE9XTikucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pO1xuICAgICAgICAkKFNlbGVjdG9yLk5BVl9EUk9QRE9XTiArIFwiOmhhcyhhW2hyZWY9XFxcIlwiICsgdXJsLnJlcGxhY2UoL15cXC8vLCAnJykuc3BsaXQoJz8nKVswXSArIFwiXFxcIl0pXCIpLmFkZENsYXNzKENsYXNzTmFtZS5PUEVOKTtcbiAgICAgICAgJChTZWxlY3Rvci5OQVZfSVRFTSArIFwiIGFbaHJlZj1cXFwiXCIgKyB1cmwucmVwbGFjZSgvXlxcLy8sICcnKS5zcGxpdCgnPycpWzBdICsgXCJcXFwiXVwiKS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKTtcbiAgICAgICAgdGhpcy5sb2FkUGFnZSh1cmwpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmxvYWRCbGFuayA9IGZ1bmN0aW9uIGxvYWRCbGFuayh1cmwpIHtcbiAgICAgICAgd2luZG93Lm9wZW4odXJsKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5sb2FkVG9wID0gZnVuY3Rpb24gbG9hZFRvcCh1cmwpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdXJsO1xuICAgICAgfSAvLyBQcml2YXRlXG4gICAgICA7XG5cbiAgICAgIF9wcm90by5fZ2V0Q29uZmlnID0gZnVuY3Rpb24gX2dldENvbmZpZyhjb25maWcpIHtcbiAgICAgICAgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgRGVmYXVsdCwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0ssIFNlbGVjdG9yLk5BVl9MSU5LICsgXCJbaHJlZiE9XFxcIiNcXFwiXVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQudGFyZ2V0ID09PSAnX3RvcCcpIHtcbiAgICAgICAgICAgIF90aGlzLmxvYWRUb3AoZXZlbnQuY3VycmVudFRhcmdldC5ocmVmKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQudGFyZ2V0ID09PSAnX2JsYW5rJykge1xuICAgICAgICAgICAgX3RoaXMubG9hZEJsYW5rKGV2ZW50LmN1cnJlbnRUYXJnZXQuaHJlZik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLnNldFVwVXJsKGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IC8vIFN0YXRpY1xuICAgICAgO1xuXG4gICAgICBBamF4TG9hZC5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIGRhdGEgPSAkKHRoaXMpLmRhdGEoREFUQV9LRVkpO1xuXG4gICAgICAgICAgdmFyIF9jb25maWcgPSB0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0JyAmJiBjb25maWc7XG5cbiAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgQWpheExvYWQodGhpcywgX2NvbmZpZyk7XG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoREFUQV9LRVksIGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfY3JlYXRlQ2xhc3MoQWpheExvYWQsIG51bGwsIFt7XG4gICAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBWRVJTSU9OO1xuICAgICAgICB9XG4gICAgICB9LCB7XG4gICAgICAgIGtleTogXCJEZWZhdWx0XCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBEZWZhdWx0O1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBBamF4TG9hZDtcbiAgICB9KCk7XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIGpRdWVyeVxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cblxuXG4gICAgJC5mbltOQU1FXSA9IEFqYXhMb2FkLl9qUXVlcnlJbnRlcmZhY2U7XG4gICAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IEFqYXhMb2FkO1xuXG4gICAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICAgIHJldHVybiBBamF4TG9hZC5falF1ZXJ5SW50ZXJmYWNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gQWpheExvYWQ7XG4gIH0oJCk7XG5cbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBDb3JlVUkgKHYyLjEuOSk6IHRvZ2dsZS1jbGFzc2VzLmpzXHJcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2NvcmV1aS5pby9saWNlbnNlKVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG4gIHZhciByZW1vdmVDbGFzc2VzID0gZnVuY3Rpb24gcmVtb3ZlQ2xhc3NlcyhjbGFzc05hbWVzKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZXMubWFwKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICAgIH0pLmluZGV4T2YodHJ1ZSkgIT09IC0xO1xuICB9O1xuXG4gIHZhciB0b2dnbGVDbGFzc2VzID0gZnVuY3Rpb24gdG9nZ2xlQ2xhc3Nlcyh0b2dnbGVDbGFzcywgY2xhc3NOYW1lcykge1xuICAgIHZhciBicmVha3BvaW50ID0gY2xhc3NOYW1lcy5pbmRleE9mKHRvZ2dsZUNsYXNzKTtcbiAgICB2YXIgbmV3Q2xhc3NOYW1lcyA9IGNsYXNzTmFtZXMuc2xpY2UoMCwgYnJlYWtwb2ludCArIDEpO1xuXG4gICAgaWYgKHJlbW92ZUNsYXNzZXMobmV3Q2xhc3NOYW1lcykpIHtcbiAgICAgIG5ld0NsYXNzTmFtZXMubWFwKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCh0b2dnbGVDbGFzcyk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29yZVVJICh2Mi4xLjkpOiBhc2lkZS1tZW51LmpzXHJcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2NvcmV1aS5pby9saWNlbnNlKVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG5cbiAgdmFyIEFzaWRlTWVudSA9IGZ1bmN0aW9uICgkKSB7XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIENvbnN0YW50c1xyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cbiAgICB2YXIgTkFNRSA9ICdhc2lkZS1tZW51JztcbiAgICB2YXIgVkVSU0lPTiA9ICcyLjEuOSc7XG4gICAgdmFyIERBVEFfS0VZID0gJ2NvcmV1aS5hc2lkZS1tZW51JztcbiAgICB2YXIgRVZFTlRfS0VZID0gXCIuXCIgKyBEQVRBX0tFWTtcbiAgICB2YXIgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG4gICAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gICAgdmFyIEV2ZW50ID0ge1xuICAgICAgQ0xJQ0s6ICdjbGljaycsXG4gICAgICBMT0FEX0RBVEFfQVBJOiBcImxvYWRcIiArIEVWRU5UX0tFWSArIERBVEFfQVBJX0tFWSxcbiAgICAgIFRPR0dMRTogJ3RvZ2dsZSdcbiAgICB9O1xuICAgIHZhciBTZWxlY3RvciA9IHtcbiAgICAgIEJPRFk6ICdib2R5JyxcbiAgICAgIEFTSURFX01FTlU6ICcuYXNpZGUtbWVudScsXG4gICAgICBBU0lERV9NRU5VX1RPR0dMRVI6ICcuYXNpZGUtbWVudS10b2dnbGVyJ1xuICAgIH07XG4gICAgdmFyIFNob3dDbGFzc05hbWVzID0gWydhc2lkZS1tZW51LXNob3cnLCAnYXNpZGUtbWVudS1zbS1zaG93JywgJ2FzaWRlLW1lbnUtbWQtc2hvdycsICdhc2lkZS1tZW51LWxnLXNob3cnLCAnYXNpZGUtbWVudS14bC1zaG93J107XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIENsYXNzIERlZmluaXRpb25cclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG5cbiAgICB2YXIgQXNpZGVNZW51ID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gQXNpZGVNZW51KGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIH0gLy8gR2V0dGVyc1xuXG5cbiAgICAgIHZhciBfcHJvdG8gPSBBc2lkZU1lbnUucHJvdG90eXBlO1xuXG4gICAgICAvLyBQcml2YXRlXG4gICAgICBfcHJvdG8uX2FkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICAkKGRvY3VtZW50KS5vbihFdmVudC5DTElDSywgU2VsZWN0b3IuQVNJREVfTUVOVV9UT0dHTEVSLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHZhciB0b2dnbGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQgPyBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudG9nZ2xlIDogJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCd0b2dnbGUnKTtcbiAgICAgICAgICB0b2dnbGVDbGFzc2VzKHRvZ2dsZSwgU2hvd0NsYXNzTmFtZXMpO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gU3RhdGljXG4gICAgICA7XG5cbiAgICAgIEFzaWRlTWVudS5falF1ZXJ5SW50ZXJmYWNlID0gZnVuY3Rpb24gX2pRdWVyeUludGVyZmFjZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyICRlbGVtZW50ID0gJCh0aGlzKTtcbiAgICAgICAgICB2YXIgZGF0YSA9ICRlbGVtZW50LmRhdGEoREFUQV9LRVkpO1xuXG4gICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICBkYXRhID0gbmV3IEFzaWRlTWVudSh0aGlzKTtcbiAgICAgICAgICAgICRlbGVtZW50LmRhdGEoREFUQV9LRVksIGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfY3JlYXRlQ2xhc3MoQXNpZGVNZW51LCBudWxsLCBbe1xuICAgICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gVkVSU0lPTjtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gQXNpZGVNZW51O1xuICAgIH0oKTtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogRGF0YSBBcGkgaW1wbGVtZW50YXRpb25cclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG5cblxuICAgICQod2luZG93KS5vbihFdmVudC5MT0FEX0RBVEFfQVBJLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgYXNpZGVNZW51ID0gJChTZWxlY3Rvci5BU0lERV9NRU5VKTtcblxuICAgICAgQXNpZGVNZW51Ll9qUXVlcnlJbnRlcmZhY2UuY2FsbChhc2lkZU1lbnUpO1xuICAgIH0pO1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBqUXVlcnlcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG5cbiAgICAkLmZuW05BTUVdID0gQXNpZGVNZW51Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IEFzaWRlTWVudTtcblxuICAgICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgICByZXR1cm4gQXNpZGVNZW51Ll9qUXVlcnlJbnRlcmZhY2U7XG4gICAgfTtcblxuICAgIHJldHVybiBBc2lkZU1lbnU7XG4gIH0oJCk7XG5cbiAgLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcblxuICB2YXIgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gICAgcmV0dXJuIF9jb2YoYXJnKSA9PSAnQXJyYXknO1xuICB9O1xuXG4gIHZhciBTUEVDSUVTJDIgPSBfd2tzKCdzcGVjaWVzJyk7XG5cbiAgdmFyIF9hcnJheVNwZWNpZXNDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIChvcmlnaW5hbCkge1xuICAgIHZhciBDO1xuICAgIGlmIChfaXNBcnJheShvcmlnaW5hbCkpIHtcbiAgICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgICBpZiAodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgX2lzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICAgIGlmIChfaXNPYmplY3QoQykpIHtcbiAgICAgICAgQyA9IENbU1BFQ0lFUyQyXTtcbiAgICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xuICB9O1xuXG4gIC8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcblxuXG4gIHZhciBfYXJyYXlTcGVjaWVzQ3JlYXRlID0gZnVuY3Rpb24gKG9yaWdpbmFsLCBsZW5ndGgpIHtcbiAgICByZXR1cm4gbmV3IChfYXJyYXlTcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xuICB9O1xuXG4gIC8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuICAvLyAxIC0+IEFycmF5I21hcFxuICAvLyAyIC0+IEFycmF5I2ZpbHRlclxuICAvLyAzIC0+IEFycmF5I3NvbWVcbiAgLy8gNCAtPiBBcnJheSNldmVyeVxuICAvLyA1IC0+IEFycmF5I2ZpbmRcbiAgLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcblxuXG5cblxuXG4gIHZhciBfYXJyYXlNZXRob2RzID0gZnVuY3Rpb24gKFRZUEUsICRjcmVhdGUpIHtcbiAgICB2YXIgSVNfTUFQID0gVFlQRSA9PSAxO1xuICAgIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gICAgdmFyIElTX1NPTUUgPSBUWVBFID09IDM7XG4gICAgdmFyIElTX0VWRVJZID0gVFlQRSA9PSA0O1xuICAgIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICAgIHZhciBOT19IT0xFUyA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYO1xuICAgIHZhciBjcmVhdGUgPSAkY3JlYXRlIHx8IF9hcnJheVNwZWNpZXNDcmVhdGU7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCkge1xuICAgICAgdmFyIE8gPSBfdG9PYmplY3QoJHRoaXMpO1xuICAgICAgdmFyIHNlbGYgPSBfaW9iamVjdChPKTtcbiAgICAgIHZhciBmID0gX2N0eChjYWxsYmFja2ZuLCB0aGF0LCAzKTtcbiAgICAgIHZhciBsZW5ndGggPSBfdG9MZW5ndGgoc2VsZi5sZW5ndGgpO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZXN1bHQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkO1xuICAgICAgdmFyIHZhbCwgcmVzO1xuICAgICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xuICAgICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgICBpZiAoVFlQRSkge1xuICAgICAgICAgIGlmIChJU19NQVApIHJlc3VsdFtpbmRleF0gPSByZXM7ICAgLy8gbWFwXG4gICAgICAgICAgZWxzZSBpZiAocmVzKSBzd2l0Y2ggKFRZUEUpIHtcbiAgICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgICAgfSBlbHNlIGlmIChJU19FVkVSWSkgcmV0dXJuIGZhbHNlOyAvLyBldmVyeVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICAgIH07XG4gIH07XG5cbiAgLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxuICB2YXIgVU5TQ09QQUJMRVMgPSBfd2tzKCd1bnNjb3BhYmxlcycpO1xuICB2YXIgQXJyYXlQcm90byQxID0gQXJyYXkucHJvdG90eXBlO1xuICBpZiAoQXJyYXlQcm90byQxW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIF9oaWRlKEFycmF5UHJvdG8kMSwgVU5TQ09QQUJMRVMsIHt9KTtcbiAgdmFyIF9hZGRUb1Vuc2NvcGFibGVzID0gZnVuY3Rpb24gKGtleSkge1xuICAgIEFycmF5UHJvdG8kMVtVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG4gIH07XG5cbiAgLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuXG4gIHZhciAkZmluZCA9IF9hcnJheU1ldGhvZHMoNSk7XG4gIHZhciBLRVkgPSAnZmluZCc7XG4gIHZhciBmb3JjZWQgPSB0cnVlO1xuICAvLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuICBpZiAoS0VZIGluIFtdKSBBcnJheSgxKVtLRVldKGZ1bmN0aW9uICgpIHsgZm9yY2VkID0gZmFsc2U7IH0pO1xuICBfZXhwb3J0KF9leHBvcnQuUCArIF9leHBvcnQuRiAqIGZvcmNlZCwgJ0FycmF5Jywge1xuICAgIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgfVxuICB9KTtcbiAgX2FkZFRvVW5zY29wYWJsZXMoS0VZKTtcblxuICAvLyBAQG1hdGNoIGxvZ2ljXG4gIF9maXhSZVdrcygnbWF0Y2gnLCAxLCBmdW5jdGlvbiAoZGVmaW5lZCwgTUFUQ0gsICRtYXRjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLm1hdGNoYCBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUubWF0Y2hcbiAgICAgIGZ1bmN0aW9uIG1hdGNoKHJlZ2V4cCkge1xuICAgICAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgICAgIHZhciBmbiA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbTUFUQ0hdO1xuICAgICAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtNQVRDSF0oU3RyaW5nKE8pKTtcbiAgICAgIH0sXG4gICAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXWAgbWV0aG9kXG4gICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHAucHJvdG90eXBlLUBAbWF0Y2hcbiAgICAgIGZ1bmN0aW9uIChyZWdleHApIHtcbiAgICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZSgkbWF0Y2gsIHJlZ2V4cCwgdGhpcyk7XG4gICAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcbiAgICAgICAgdmFyIHJ4ID0gX2FuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgICAgICBpZiAoIXJ4Lmdsb2JhbCkgcmV0dXJuIF9yZWdleHBFeGVjQWJzdHJhY3QocngsIFMpO1xuICAgICAgICB2YXIgZnVsbFVuaWNvZGUgPSByeC51bmljb2RlO1xuICAgICAgICByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgICB2YXIgQSA9IFtdO1xuICAgICAgICB2YXIgbiA9IDA7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHdoaWxlICgocmVzdWx0ID0gX3JlZ2V4cEV4ZWNBYnN0cmFjdChyeCwgUykpICE9PSBudWxsKSB7XG4gICAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgICAgQVtuXSA9IG1hdGNoU3RyO1xuICAgICAgICAgIGlmIChtYXRjaFN0ciA9PT0gJycpIHJ4Lmxhc3RJbmRleCA9IF9hZHZhbmNlU3RyaW5nSW5kZXgoUywgX3RvTGVuZ3RoKHJ4Lmxhc3RJbmRleCksIGZ1bGxVbmljb2RlKTtcbiAgICAgICAgICBuKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG4gPT09IDAgPyBudWxsIDogQTtcbiAgICAgIH1cbiAgICBdO1xuICB9KTtcblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSBVdGlsaXRpZXMgKHYyLjEuOSk6IGdldC1jc3MtY3VzdG9tLXByb3BlcnRpZXMuanNcclxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvL2xpY2Vuc2UpXHJcbiAgICogQHJldHVybnMge3N0cmluZ30gY3NzIGN1c3RvbSBwcm9wZXJ0eSBuYW1lXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cbiAgdmFyIGdldENzc0N1c3RvbVByb3BlcnRpZXMgPSBmdW5jdGlvbiBnZXRDc3NDdXN0b21Qcm9wZXJ0aWVzKCkge1xuICAgIHZhciBjc3NDdXN0b21Qcm9wZXJ0aWVzID0ge307XG4gICAgdmFyIHNoZWV0cyA9IGRvY3VtZW50LnN0eWxlU2hlZXRzO1xuICAgIHZhciBjc3NUZXh0ID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gc2hlZXRzLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XG4gICAgICB2YXIgcnVsZXMgPSBzaGVldHNbaV0uY3NzUnVsZXM7XG5cbiAgICAgIGZvciAodmFyIGogPSBydWxlcy5sZW5ndGggLSAxOyBqID4gLTE7IGotLSkge1xuICAgICAgICBpZiAocnVsZXNbal0uc2VsZWN0b3JUZXh0ID09PSAnLmllLWN1c3RvbS1wcm9wZXJ0aWVzJykge1xuICAgICAgICAgIGNzc1RleHQgPSBydWxlc1tqXS5jc3NUZXh0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjc3NUZXh0KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNzc1RleHQgPSBjc3NUZXh0LnN1YnN0cmluZyhjc3NUZXh0Lmxhc3RJbmRleE9mKCd7JykgKyAxLCBjc3NUZXh0Lmxhc3RJbmRleE9mKCd9JykpO1xuICAgIGNzc1RleHQuc3BsaXQoJzsnKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgaWYgKHByb3BlcnR5KSB7XG4gICAgICAgIHZhciBuYW1lID0gcHJvcGVydHkuc3BsaXQoJzogJylbMF07XG4gICAgICAgIHZhciB2YWx1ZSA9IHByb3BlcnR5LnNwbGl0KCc6ICcpWzFdO1xuXG4gICAgICAgIGlmIChuYW1lICYmIHZhbHVlKSB7XG4gICAgICAgICAgY3NzQ3VzdG9tUHJvcGVydGllc1tcIi0tXCIgKyBuYW1lLnRyaW0oKV0gPSB2YWx1ZS50cmltKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY3NzQ3VzdG9tUHJvcGVydGllcztcbiAgfTtcblxuICB2YXIgbWluSUVWZXJzaW9uID0gMTA7XG5cbiAgdmFyIGlzSUUxeCA9IGZ1bmN0aW9uIGlzSUUxeCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbihkb2N1bWVudC5kb2N1bWVudE1vZGUpICYmIGRvY3VtZW50LmRvY3VtZW50TW9kZSA+PSBtaW5JRVZlcnNpb247XG4gIH07XG5cbiAgdmFyIGlzQ3VzdG9tUHJvcGVydHkgPSBmdW5jdGlvbiBpc0N1c3RvbVByb3BlcnR5KHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIHByb3BlcnR5Lm1hdGNoKC9eLS0uKi9pKTtcbiAgfTtcblxuICB2YXIgZ2V0U3R5bGUgPSBmdW5jdGlvbiBnZXRTdHlsZShwcm9wZXJ0eSwgZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50ID09PSB2b2lkIDApIHtcbiAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuICAgIH1cblxuICAgIHZhciBzdHlsZTtcblxuICAgIGlmIChpc0N1c3RvbVByb3BlcnR5KHByb3BlcnR5KSAmJiBpc0lFMXgoKSkge1xuICAgICAgdmFyIGNzc0N1c3RvbVByb3BlcnRpZXMgPSBnZXRDc3NDdXN0b21Qcm9wZXJ0aWVzKCk7XG4gICAgICBzdHlsZSA9IGNzc0N1c3RvbVByb3BlcnRpZXNbcHJvcGVydHldO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpLmdldFByb3BlcnR5VmFsdWUocHJvcGVydHkpLnJlcGxhY2UoL15cXHMvLCAnJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9O1xuXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29yZVVJICh2Mi4xLjkpOiBzaWRlYmFyLmpzXHJcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2NvcmV1aS5pby9saWNlbnNlKVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG5cbiAgdmFyIFNpZGViYXIgPSBmdW5jdGlvbiAoJCkge1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBDb25zdGFudHNcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXG4gICAgdmFyIE5BTUUgPSAnc2lkZWJhcic7XG4gICAgdmFyIFZFUlNJT04gPSAnMi4xLjknO1xuICAgIHZhciBEQVRBX0tFWSA9ICdjb3JldWkuc2lkZWJhcic7XG4gICAgdmFyIEVWRU5UX0tFWSA9IFwiLlwiICsgREFUQV9LRVk7XG4gICAgdmFyIERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknO1xuICAgIHZhciBKUVVFUllfTk9fQ09ORkxJQ1QgPSAkLmZuW05BTUVdO1xuICAgIHZhciBEZWZhdWx0ID0ge1xuICAgICAgdHJhbnNpdGlvbjogNDAwXG4gICAgfTtcbiAgICB2YXIgQ2xhc3NOYW1lID0ge1xuICAgICAgQUNUSVZFOiAnYWN0aXZlJyxcbiAgICAgIEJSQU5EX01JTklNSVpFRDogJ2JyYW5kLW1pbmltaXplZCcsXG4gICAgICBOQVZfRFJPUERPV05fVE9HR0xFOiAnbmF2LWRyb3Bkb3duLXRvZ2dsZScsXG4gICAgICBPUEVOOiAnb3BlbicsXG4gICAgICBTSURFQkFSX0ZJWEVEOiAnc2lkZWJhci1maXhlZCcsXG4gICAgICBTSURFQkFSX01JTklNSVpFRDogJ3NpZGViYXItbWluaW1pemVkJyxcbiAgICAgIFNJREVCQVJfT0ZGX0NBTlZBUzogJ3NpZGViYXItb2ZmLWNhbnZhcydcbiAgICB9O1xuICAgIHZhciBFdmVudCA9IHtcbiAgICAgIENMSUNLOiAnY2xpY2snLFxuICAgICAgREVTVFJPWTogJ2Rlc3Ryb3knLFxuICAgICAgSU5JVDogJ2luaXQnLFxuICAgICAgTE9BRF9EQVRBX0FQSTogXCJsb2FkXCIgKyBFVkVOVF9LRVkgKyBEQVRBX0FQSV9LRVksXG4gICAgICBUT0dHTEU6ICd0b2dnbGUnLFxuICAgICAgVVBEQVRFOiAndXBkYXRlJ1xuICAgIH07XG4gICAgdmFyIFNlbGVjdG9yID0ge1xuICAgICAgQk9EWTogJ2JvZHknLFxuICAgICAgQlJBTkRfTUlOSU1JWkVSOiAnLmJyYW5kLW1pbmltaXplcicsXG4gICAgICBOQVZfRFJPUERPV05fVE9HR0xFOiAnLm5hdi1kcm9wZG93bi10b2dnbGUnLFxuICAgICAgTkFWX0RST1BET1dOX0lURU1TOiAnLm5hdi1kcm9wZG93bi1pdGVtcycsXG4gICAgICBOQVZfSVRFTTogJy5uYXYtaXRlbScsXG4gICAgICBOQVZfTElOSzogJy5uYXYtbGluaycsXG4gICAgICBOQVZfTElOS19RVUVSSUVEOiAnLm5hdi1saW5rLXF1ZXJpZWQnLFxuICAgICAgTkFWSUdBVElPTl9DT05UQUlORVI6ICcuc2lkZWJhci1uYXYnLFxuICAgICAgTkFWSUdBVElPTjogJy5zaWRlYmFyLW5hdiA+IC5uYXYnLFxuICAgICAgU0lERUJBUjogJy5zaWRlYmFyJyxcbiAgICAgIFNJREVCQVJfTUlOSU1JWkVSOiAnLnNpZGViYXItbWluaW1pemVyJyxcbiAgICAgIFNJREVCQVJfVE9HR0xFUjogJy5zaWRlYmFyLXRvZ2dsZXInXG4gICAgfTtcbiAgICB2YXIgU2hvd0NsYXNzTmFtZXMgPSBbJ3NpZGViYXItc2hvdycsICdzaWRlYmFyLXNtLXNob3cnLCAnc2lkZWJhci1tZC1zaG93JywgJ3NpZGViYXItbGctc2hvdycsICdzaWRlYmFyLXhsLXNob3cnXTtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cblxuICAgIHZhciBTaWRlYmFyID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgZnVuY3Rpb24gKCkge1xuICAgICAgZnVuY3Rpb24gU2lkZWJhcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLm1vYmlsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBzID0gbnVsbDtcbiAgICAgICAgdGhpcy5wZXJmZWN0U2Nyb2xsYmFyKEV2ZW50LklOSVQpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZUxpbmsoKTtcbiAgICAgICAgdGhpcy5fYnJlYWtwb2ludFRlc3QgPSB0aGlzLl9icmVha3BvaW50VGVzdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9jbGlja091dExpc3RlbmVyID0gdGhpcy5fY2xpY2tPdXRMaXN0ZW5lci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgICAgdGhpcy5fYWRkTWVkaWFRdWVyeSgpO1xuICAgICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgICAgdmFyIF9wcm90byA9IFNpZGViYXIucHJvdG90eXBlO1xuXG4gICAgICAvLyBQdWJsaWNcbiAgICAgIF9wcm90by5wZXJmZWN0U2Nyb2xsYmFyID0gZnVuY3Rpb24gcGVyZmVjdFNjcm9sbGJhcihldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0eXBlb2YgUGVyZmVjdFNjcm9sbGJhciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB2YXIgY2xhc3NMaXN0ID0gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3Q7XG5cbiAgICAgICAgICBpZiAoZXZlbnQgPT09IEV2ZW50LklOSVQgJiYgIWNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuU0lERUJBUl9NSU5JTUlaRUQpKSB7XG4gICAgICAgICAgICB0aGlzLnBzID0gdGhpcy5tYWtlU2Nyb2xsYmFyKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGV2ZW50ID09PSBFdmVudC5ERVNUUk9ZKSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lTY3JvbGxiYXIoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZXZlbnQgPT09IEV2ZW50LlRPR0dMRSkge1xuICAgICAgICAgICAgaWYgKGNsYXNzTGlzdC5jb250YWlucyhDbGFzc05hbWUuU0lERUJBUl9NSU5JTUlaRUQpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZGVzdHJveVNjcm9sbGJhcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5kZXN0cm95U2Nyb2xsYmFyKCk7XG4gICAgICAgICAgICAgIHRoaXMucHMgPSB0aGlzLm1ha2VTY3JvbGxiYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZXZlbnQgPT09IEV2ZW50LlVQREFURSAmJiAhY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5TSURFQkFSX01JTklNSVpFRCkpIHtcbiAgICAgICAgICAgIC8vIFRvRG86IEFkZCBzbW9vdGggdHJhbnNpdGlvblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIF90aGlzLmRlc3Ryb3lTY3JvbGxiYXIoKTtcblxuICAgICAgICAgICAgICBfdGhpcy5wcyA9IF90aGlzLm1ha2VTY3JvbGxiYXIoKTtcbiAgICAgICAgICAgIH0sIERlZmF1bHQudHJhbnNpdGlvbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8ubWFrZVNjcm9sbGJhciA9IGZ1bmN0aW9uIG1ha2VTY3JvbGxiYXIoY29udGFpbmVyKSB7XG4gICAgICAgIGlmIChjb250YWluZXIgPT09IHZvaWQgMCkge1xuICAgICAgICAgIGNvbnRhaW5lciA9IFNlbGVjdG9yLk5BVklHQVRJT05fQ09OVEFJTkVSO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpLCB7XG4gICAgICAgICAgc3VwcHJlc3NTY3JvbGxYOiB0cnVlXG4gICAgICAgIH0pOyAvLyBUb0RvOiBmaW5kIHJlYWwgZml4IGZvciBwcyBydGxcblxuICAgICAgICBwcy5pc1J0bCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gcHM7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uZGVzdHJveVNjcm9sbGJhciA9IGZ1bmN0aW9uIGRlc3Ryb3lTY3JvbGxiYXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnBzKSB7XG4gICAgICAgICAgdGhpcy5wcy5kZXN0cm95KCk7XG4gICAgICAgICAgdGhpcy5wcyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5zZXRBY3RpdmVMaW5rID0gZnVuY3Rpb24gc2V0QWN0aXZlTGluaygpIHtcbiAgICAgICAgJChTZWxlY3Rvci5OQVZJR0FUSU9OKS5maW5kKFNlbGVjdG9yLk5BVl9MSU5LKS5lYWNoKGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgdmFyIGxpbmsgPSB2YWx1ZTtcbiAgICAgICAgICB2YXIgY1VybDtcblxuICAgICAgICAgIGlmIChsaW5rLmNsYXNzTGlzdC5jb250YWlucyhTZWxlY3Rvci5OQVZfTElOS19RVUVSSUVEKSkge1xuICAgICAgICAgICAgY1VybCA9IFN0cmluZyh3aW5kb3cubG9jYXRpb24pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjVXJsID0gU3RyaW5nKHdpbmRvdy5sb2NhdGlvbikuc3BsaXQoJz8nKVswXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY1VybC5zdWJzdHIoY1VybC5sZW5ndGggLSAxKSA9PT0gJyMnKSB7XG4gICAgICAgICAgICBjVXJsID0gY1VybC5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCQoJChsaW5rKSlbMF0uaHJlZiA9PT0gY1VybCkge1xuICAgICAgICAgICAgJChsaW5rKS5hZGRDbGFzcyhDbGFzc05hbWUuQUNUSVZFKS5wYXJlbnRzKFNlbGVjdG9yLk5BVl9EUk9QRE9XTl9JVEVNUykuYWRkKGxpbmspLmVhY2goZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgbGluayA9IHZhbHVlO1xuICAgICAgICAgICAgICAkKGxpbmspLnBhcmVudCgpLmFkZENsYXNzKENsYXNzTmFtZS5PUEVOKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IC8vIFByaXZhdGVcbiAgICAgIDtcblxuICAgICAgX3Byb3RvLl9hZGRNZWRpYVF1ZXJ5ID0gZnVuY3Rpb24gX2FkZE1lZGlhUXVlcnkoKSB7XG4gICAgICAgIHZhciBzbSA9IGdldFN0eWxlKCctLWJyZWFrcG9pbnQtc20nKTtcblxuICAgICAgICBpZiAoIXNtKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNtVmFsID0gcGFyc2VJbnQoc20sIDEwKSAtIDE7XG4gICAgICAgIHZhciBtZWRpYVF1ZXJ5TGlzdCA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogXCIgKyBzbVZhbCArIFwicHgpXCIpO1xuXG4gICAgICAgIHRoaXMuX2JyZWFrcG9pbnRUZXN0KG1lZGlhUXVlcnlMaXN0KTtcblxuICAgICAgICBtZWRpYVF1ZXJ5TGlzdC5hZGRMaXN0ZW5lcih0aGlzLl9icmVha3BvaW50VGVzdCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX2JyZWFrcG9pbnRUZXN0ID0gZnVuY3Rpb24gX2JyZWFrcG9pbnRUZXN0KGUpIHtcbiAgICAgICAgdGhpcy5tb2JpbGUgPSBCb29sZWFuKGUubWF0Y2hlcyk7XG5cbiAgICAgICAgdGhpcy5fdG9nZ2xlQ2xpY2tPdXQoKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5fY2xpY2tPdXRMaXN0ZW5lciA9IGZ1bmN0aW9uIF9jbGlja091dExpc3RlbmVyKGV2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5fZWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgLy8gb3IgdXNlOiBldmVudC50YXJnZXQuY2xvc2VzdChTZWxlY3Rvci5TSURFQkFSKSA9PT0gbnVsbFxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICB0aGlzLl9yZW1vdmVDbGlja091dCgpO1xuXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLXNob3cnKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9hZGRDbGlja091dCA9IGZ1bmN0aW9uIF9hZGRDbGlja091dCgpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihFdmVudC5DTElDSywgdGhpcy5fY2xpY2tPdXRMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX3JlbW92ZUNsaWNrT3V0ID0gZnVuY3Rpb24gX3JlbW92ZUNsaWNrT3V0KCkge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKEV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja091dExpc3RlbmVyLCB0cnVlKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5fdG9nZ2xlQ2xpY2tPdXQgPSBmdW5jdGlvbiBfdG9nZ2xlQ2xpY2tPdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLm1vYmlsZSAmJiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1zaG93JykpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2FzaWRlLW1lbnUtc2hvdycpO1xuXG4gICAgICAgICAgdGhpcy5fYWRkQ2xpY2tPdXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9yZW1vdmVDbGlja091dCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX2FkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX2FkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAkKGRvY3VtZW50KS5vbihFdmVudC5DTElDSywgU2VsZWN0b3IuQlJBTkRfTUlOSU1JWkVSLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICQoU2VsZWN0b3IuQk9EWSkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLkJSQU5EX01JTklNSVpFRCk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKGRvY3VtZW50KS5vbihFdmVudC5DTElDSywgU2VsZWN0b3IuTkFWX0RST1BET1dOX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB2YXIgZHJvcGRvd24gPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgJChkcm9wZG93bikucGFyZW50KCkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pO1xuXG4gICAgICAgICAgX3RoaXMyLnBlcmZlY3RTY3JvbGxiYXIoRXZlbnQuVVBEQVRFKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLLCBTZWxlY3Rvci5TSURFQkFSX01JTklNSVpFUiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAkKFNlbGVjdG9yLkJPRFkpLnRvZ2dsZUNsYXNzKENsYXNzTmFtZS5TSURFQkFSX01JTklNSVpFRCk7XG5cbiAgICAgICAgICBfdGhpczIucGVyZmVjdFNjcm9sbGJhcihFdmVudC5UT0dHTEUpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0ssIFNlbGVjdG9yLlNJREVCQVJfVE9HR0xFUiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB2YXIgdG9nZ2xlID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0ID8gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnRvZ2dsZSA6ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgndG9nZ2xlJyk7XG4gICAgICAgICAgdG9nZ2xlQ2xhc3Nlcyh0b2dnbGUsIFNob3dDbGFzc05hbWVzKTtcblxuICAgICAgICAgIF90aGlzMi5fdG9nZ2xlQ2xpY2tPdXQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoU2VsZWN0b3IuTkFWSUdBVElPTiArIFwiID4gXCIgKyBTZWxlY3Rvci5OQVZfSVRFTSArIFwiIFwiICsgU2VsZWN0b3IuTkFWX0xJTksgKyBcIjpub3QoXCIgKyBTZWxlY3Rvci5OQVZfRFJPUERPV05fVE9HR0xFICsgXCIpXCIpLm9uKEV2ZW50LkNMSUNLLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXMyLl9yZW1vdmVDbGlja091dCgpO1xuXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzaWRlYmFyLXNob3cnKTtcbiAgICAgICAgfSk7XG4gICAgICB9IC8vIFN0YXRpY1xuICAgICAgO1xuXG4gICAgICBTaWRlYmFyLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgJGVsZW1lbnQgPSAkKHRoaXMpO1xuICAgICAgICAgIHZhciBkYXRhID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgU2lkZWJhcih0aGlzKTtcbiAgICAgICAgICAgICRlbGVtZW50LmRhdGEoREFUQV9LRVksIGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfY3JlYXRlQ2xhc3MoU2lkZWJhciwgbnVsbCwgW3tcbiAgICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIFZFUlNJT047XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIFNpZGViYXI7XG4gICAgfSgpO1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cblxuXG4gICAgJCh3aW5kb3cpLm9uKEV2ZW50LkxPQURfREFUQV9BUEksIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzaWRlYmFyID0gJChTZWxlY3Rvci5TSURFQkFSKTtcblxuICAgICAgU2lkZWJhci5falF1ZXJ5SW50ZXJmYWNlLmNhbGwoc2lkZWJhcik7XG4gICAgfSk7XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIGpRdWVyeVxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cblxuICAgICQuZm5bTkFNRV0gPSBTaWRlYmFyLl9qUXVlcnlJbnRlcmZhY2U7XG4gICAgJC5mbltOQU1FXS5Db25zdHJ1Y3RvciA9IFNpZGViYXI7XG5cbiAgICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgICAgcmV0dXJuIFNpZGViYXIuX2pRdWVyeUludGVyZmFjZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNpZGViYXI7XG4gIH0oJCk7XG5cbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBDb3JlVUkgVXRpbGl0aWVzICh2Mi4xLjkpOiBoZXgtdG8tcmdiLmpzXHJcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2NvcmV1aS5pby9saWNlbnNlKVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG5cbiAgLyogZXNsaW50LWRpc2FibGUgbm8tbWFnaWMtbnVtYmVycyAqL1xuICB2YXIgaGV4VG9SZ2IgPSBmdW5jdGlvbiBoZXhUb1JnYihjb2xvcikge1xuICAgIGlmICh0eXBlb2YgY29sb3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hleCBjb2xvciBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIHZhciBoZXggPSBjb2xvci5tYXRjaCgvXiMoPzpbMC05YS1mXXszfSl7MSwyfSQvaSk7XG5cbiAgICBpZiAoIWhleCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbG9yICsgXCIgaXMgbm90IGEgdmFsaWQgaGV4IGNvbG9yXCIpO1xuICAgIH1cblxuICAgIHZhciByO1xuICAgIHZhciBnO1xuICAgIHZhciBiO1xuXG4gICAgaWYgKGNvbG9yLmxlbmd0aCA9PT0gNykge1xuICAgICAgciA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygxLCAzKSwgMTYpO1xuICAgICAgZyA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygzLCA1KSwgMTYpO1xuICAgICAgYiA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZyg1LCA3KSwgMTYpO1xuICAgIH0gZWxzZSB7XG4gICAgICByID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsIDIpLCAxNik7XG4gICAgICBnID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDIsIDMpLCAxNik7XG4gICAgICBiID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDMsIDUpLCAxNik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIiwgXCIgKyBnICsgXCIsIFwiICsgYiArIFwiKVwiO1xuICB9O1xuXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29yZVVJIFV0aWxpdGllcyAodjIuMS45KTogaGV4LXRvLXJnYmEuanNcclxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvL2xpY2Vuc2UpXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1tYWdpYy1udW1iZXJzICovXG4gIHZhciBoZXhUb1JnYmEgPSBmdW5jdGlvbiBoZXhUb1JnYmEoY29sb3IsIG9wYWNpdHkpIHtcbiAgICBpZiAob3BhY2l0eSA9PT0gdm9pZCAwKSB7XG4gICAgICBvcGFjaXR5ID0gMTAwO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgY29sb3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hleCBjb2xvciBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cblxuICAgIHZhciBoZXggPSBjb2xvci5tYXRjaCgvXiMoPzpbMC05YS1mXXszfSl7MSwyfSQvaSk7XG5cbiAgICBpZiAoIWhleCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbG9yICsgXCIgaXMgbm90IGEgdmFsaWQgaGV4IGNvbG9yXCIpO1xuICAgIH1cblxuICAgIHZhciByO1xuICAgIHZhciBnO1xuICAgIHZhciBiO1xuXG4gICAgaWYgKGNvbG9yLmxlbmd0aCA9PT0gNykge1xuICAgICAgciA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygxLCAzKSwgMTYpO1xuICAgICAgZyA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZygzLCA1KSwgMTYpO1xuICAgICAgYiA9IHBhcnNlSW50KGNvbG9yLnN1YnN0cmluZyg1LCA3KSwgMTYpO1xuICAgIH0gZWxzZSB7XG4gICAgICByID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsIDIpLCAxNik7XG4gICAgICBnID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDIsIDMpLCAxNik7XG4gICAgICBiID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDMsIDUpLCAxNik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwicmdiYShcIiArIHIgKyBcIiwgXCIgKyBnICsgXCIsIFwiICsgYiArIFwiLCBcIiArIG9wYWNpdHkgLyAxMDAgKyBcIilcIjtcbiAgfTtcblxuICAvLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFncygpXG4gIGlmIChfZGVzY3JpcHRvcnMgJiYgLy4vZy5mbGFncyAhPSAnZycpIF9vYmplY3REcC5mKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBfZmxhZ3NcbiAgfSk7XG5cbiAgdmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG4gIHZhciAkdG9TdHJpbmcgPSAvLi9bVE9fU1RSSU5HXTtcblxuICB2YXIgZGVmaW5lID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgX3JlZGVmaW5lKFJlZ0V4cC5wcm90b3R5cGUsIFRPX1NUUklORywgZm4sIHRydWUpO1xuICB9O1xuXG4gIC8vIDIxLjIuNS4xNCBSZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nKClcbiAgaWYgKF9mYWlscyhmdW5jdGlvbiAoKSB7IHJldHVybiAkdG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSkpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICB2YXIgUiA9IF9hbk9iamVjdCh0aGlzKTtcbiAgICAgIHJldHVybiAnLycuY29uY2F0KFIuc291cmNlLCAnLycsXG4gICAgICAgICdmbGFncycgaW4gUiA/IFIuZmxhZ3MgOiAhX2Rlc2NyaXB0b3JzICYmIFIgaW5zdGFuY2VvZiBSZWdFeHAgPyBfZmxhZ3MuY2FsbChSKSA6IHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIC8vIEZGNDQtIFJlZ0V4cCN0b1N0cmluZyBoYXMgYSB3cm9uZyBuYW1lXG4gIH0gZWxzZSBpZiAoJHRvU3RyaW5nLm5hbWUgIT0gVE9fU1RSSU5HKSB7XG4gICAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuICR0b1N0cmluZy5jYWxsKHRoaXMpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG5cbiAgdmFyIHRlc3QgPSB7fTtcbiAgdGVzdFtfd2tzKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbiAgaWYgKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpIHtcbiAgICBfcmVkZWZpbmUoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gJ1tvYmplY3QgJyArIF9jbGFzc29mKHRoaXMpICsgJ10nO1xuICAgIH0sIHRydWUpO1xuICB9XG5cbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBDb3JlVUkgKHYyLjEuOSk6IHJnYi10by1oZXguanNcclxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvL2xpY2Vuc2UpXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1tYWdpYy1udW1iZXJzICovXG4gIHZhciByZ2JUb0hleCA9IGZ1bmN0aW9uIHJnYlRvSGV4KGNvbG9yKSB7XG4gICAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSGV4IGNvbG9yIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICByZXR1cm4gJyMwMDAwMDAwMCc7XG4gICAgfVxuXG4gICAgdmFyIHJnYiA9IGNvbG9yLm1hdGNoKC9ecmdiYT9bXFxzK10/XFwoW1xccytdPyhcXGQrKVtcXHMrXT8sW1xccytdPyhcXGQrKVtcXHMrXT8sW1xccytdPyhcXGQrKVtcXHMrXT8vaSk7XG5cbiAgICBpZiAoIXJnYikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbG9yICsgXCIgaXMgbm90IGEgdmFsaWQgcmdiIGNvbG9yXCIpO1xuICAgIH1cblxuICAgIHZhciByID0gXCIwXCIgKyBwYXJzZUludChyZ2JbMV0sIDEwKS50b1N0cmluZygxNik7XG4gICAgdmFyIGcgPSBcIjBcIiArIHBhcnNlSW50KHJnYlsyXSwgMTApLnRvU3RyaW5nKDE2KTtcbiAgICB2YXIgYiA9IFwiMFwiICsgcGFyc2VJbnQocmdiWzNdLCAxMCkudG9TdHJpbmcoMTYpO1xuICAgIHJldHVybiBcIiNcIiArIHIuc2xpY2UoLTIpICsgZy5zbGljZSgtMikgKyBiLnNsaWNlKC0yKTtcbiAgfTtcblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSAodjIuMS45KTogaW5kZXguanNcclxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvL2xpY2Vuc2UpXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuICAoZnVuY3Rpb24gKCQpIHtcbiAgICBpZiAodHlwZW9mICQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDb3JlVUlcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgalF1ZXJ5LiBqUXVlcnkgbXVzdCBiZSBpbmNsdWRlZCBiZWZvcmUgQ29yZVVJXFwncyBKYXZhU2NyaXB0LicpO1xuICAgIH1cblxuICAgIHZhciB2ZXJzaW9uID0gJC5mbi5qcXVlcnkuc3BsaXQoJyAnKVswXS5zcGxpdCgnLicpO1xuICAgIHZhciBtaW5NYWpvciA9IDE7XG4gICAgdmFyIGx0TWFqb3IgPSAyO1xuICAgIHZhciBtaW5NaW5vciA9IDk7XG4gICAgdmFyIG1pblBhdGNoID0gMTtcbiAgICB2YXIgbWF4TWFqb3IgPSA0O1xuXG4gICAgaWYgKHZlcnNpb25bMF0gPCBsdE1ham9yICYmIHZlcnNpb25bMV0gPCBtaW5NaW5vciB8fCB2ZXJzaW9uWzBdID09PSBtaW5NYWpvciAmJiB2ZXJzaW9uWzFdID09PSBtaW5NaW5vciAmJiB2ZXJzaW9uWzJdIDwgbWluUGF0Y2ggfHwgdmVyc2lvblswXSA+PSBtYXhNYWpvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3JlVUlcXCdzIEphdmFTY3JpcHQgcmVxdWlyZXMgYXQgbGVhc3QgalF1ZXJ5IHYxLjkuMSBidXQgbGVzcyB0aGFuIHY0LjAuMCcpO1xuICAgIH1cbiAgfSkoJCk7XG4gIHdpbmRvdy5nZXRTdHlsZSA9IGdldFN0eWxlO1xuICB3aW5kb3cuaGV4VG9SZ2IgPSBoZXhUb1JnYjtcbiAgd2luZG93LmhleFRvUmdiYSA9IGhleFRvUmdiYTtcbiAgd2luZG93LnJnYlRvSGV4ID0gcmdiVG9IZXg7XG5cbiAgZXhwb3J0cy5BamF4TG9hZCA9IEFqYXhMb2FkO1xuICBleHBvcnRzLkFzaWRlTWVudSA9IEFzaWRlTWVudTtcbiAgZXhwb3J0cy5TaWRlYmFyID0gU2lkZWJhcjtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG59KSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb3JldWkuanMubWFwXG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cbiIsIi8qIVxuICogcGVyZmVjdC1zY3JvbGxiYXIgdjEuNC4wXG4gKiAoYykgMjAxOCBIeXVuamUgSnVuXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuZnVuY3Rpb24gZ2V0KGVsZW1lbnQpIHtcbiAgcmV0dXJuIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIHNldChlbGVtZW50LCBvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIHZhciB2YWwgPSBvYmpba2V5XTtcbiAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbCA9IHZhbCArIFwicHhcIjtcbiAgICB9XG4gICAgZWxlbWVudC5zdHlsZVtrZXldID0gdmFsO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBkaXYoY2xhc3NOYW1lKSB7XG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgcmV0dXJuIGRpdjtcbn1cblxudmFyIGVsTWF0Y2hlcyA9XG4gIHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAoRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgIEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yKTtcblxuZnVuY3Rpb24gbWF0Y2hlcyhlbGVtZW50LCBxdWVyeSkge1xuICBpZiAoIWVsTWF0Y2hlcykge1xuICAgIHRocm93IG5ldyBFcnJvcignTm8gZWxlbWVudCBtYXRjaGluZyBtZXRob2Qgc3VwcG9ydGVkJyk7XG4gIH1cblxuICByZXR1cm4gZWxNYXRjaGVzLmNhbGwoZWxlbWVudCwgcXVlcnkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoZWxlbWVudCkge1xuICBpZiAoZWxlbWVudC5yZW1vdmUpIHtcbiAgICBlbGVtZW50LnJlbW92ZSgpO1xuICB9IGVsc2Uge1xuICAgIGlmIChlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcXVlcnlDaGlsZHJlbihlbGVtZW50LCBzZWxlY3Rvcikge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGVsZW1lbnQuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gbWF0Y2hlcyhjaGlsZCwgc2VsZWN0b3IpOyB9XG4gICk7XG59XG5cbnZhciBjbHMgPSB7XG4gIG1haW46ICdwcycsXG4gIGVsZW1lbnQ6IHtcbiAgICB0aHVtYjogZnVuY3Rpb24gKHgpIHsgcmV0dXJuIChcInBzX190aHVtYi1cIiArIHgpOyB9LFxuICAgIHJhaWw6IGZ1bmN0aW9uICh4KSB7IHJldHVybiAoXCJwc19fcmFpbC1cIiArIHgpOyB9LFxuICAgIGNvbnN1bWluZzogJ3BzX19jaGlsZC0tY29uc3VtZScsXG4gIH0sXG4gIHN0YXRlOiB7XG4gICAgZm9jdXM6ICdwcy0tZm9jdXMnLFxuICAgIGNsaWNraW5nOiAncHMtLWNsaWNraW5nJyxcbiAgICBhY3RpdmU6IGZ1bmN0aW9uICh4KSB7IHJldHVybiAoXCJwcy0tYWN0aXZlLVwiICsgeCk7IH0sXG4gICAgc2Nyb2xsaW5nOiBmdW5jdGlvbiAoeCkgeyByZXR1cm4gKFwicHMtLXNjcm9sbGluZy1cIiArIHgpOyB9LFxuICB9LFxufTtcblxuLypcbiAqIEhlbHBlciBtZXRob2RzXG4gKi9cbnZhciBzY3JvbGxpbmdDbGFzc1RpbWVvdXQgPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcblxuZnVuY3Rpb24gYWRkU2Nyb2xsaW5nQ2xhc3MoaSwgeCkge1xuICB2YXIgY2xhc3NMaXN0ID0gaS5lbGVtZW50LmNsYXNzTGlzdDtcbiAgdmFyIGNsYXNzTmFtZSA9IGNscy5zdGF0ZS5zY3JvbGxpbmcoeCk7XG5cbiAgaWYgKGNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgY2xlYXJUaW1lb3V0KHNjcm9sbGluZ0NsYXNzVGltZW91dFt4XSk7XG4gIH0gZWxzZSB7XG4gICAgY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVNjcm9sbGluZ0NsYXNzKGksIHgpIHtcbiAgc2Nyb2xsaW5nQ2xhc3NUaW1lb3V0W3hdID0gc2V0VGltZW91dChcbiAgICBmdW5jdGlvbiAoKSB7IHJldHVybiBpLmlzQWxpdmUgJiYgaS5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xzLnN0YXRlLnNjcm9sbGluZyh4KSk7IH0sXG4gICAgaS5zZXR0aW5ncy5zY3JvbGxpbmdUaHJlc2hvbGRcbiAgKTtcbn1cblxuZnVuY3Rpb24gc2V0U2Nyb2xsaW5nQ2xhc3NJbnN0YW50bHkoaSwgeCkge1xuICBhZGRTY3JvbGxpbmdDbGFzcyhpLCB4KTtcbiAgcmVtb3ZlU2Nyb2xsaW5nQ2xhc3MoaSwgeCk7XG59XG5cbnZhciBFdmVudEVsZW1lbnQgPSBmdW5jdGlvbiBFdmVudEVsZW1lbnQoZWxlbWVudCkge1xuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB0aGlzLmhhbmRsZXJzID0ge307XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBpc0VtcHR5OiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbkV2ZW50RWxlbWVudC5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIGJpbmQgKGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICBpZiAodHlwZW9mIHRoaXMuaGFuZGxlcnNbZXZlbnROYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmhhbmRsZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgfVxuICB0aGlzLmhhbmRsZXJzW2V2ZW50TmFtZV0ucHVzaChoYW5kbGVyKTtcbiAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVsZW1lbnQucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uIHVuYmluZCAoZXZlbnROYW1lLCB0YXJnZXQpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICB0aGlzLmhhbmRsZXJzW2V2ZW50TmFtZV0gPSB0aGlzLmhhbmRsZXJzW2V2ZW50TmFtZV0uZmlsdGVyKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgaWYgKHRhcmdldCAmJiBoYW5kbGVyICE9PSB0YXJnZXQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB0aGlzJDEuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgZmFsc2UpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59O1xuXG5FdmVudEVsZW1lbnQucHJvdG90eXBlLnVuYmluZEFsbCA9IGZ1bmN0aW9uIHVuYmluZEFsbCAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgZm9yICh2YXIgbmFtZSBpbiB0aGlzJDEuaGFuZGxlcnMpIHtcbiAgICB0aGlzJDEudW5iaW5kKG5hbWUpO1xuICB9XG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMuaXNFbXB0eS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaGFuZGxlcnMpLmV2ZXJ5KFxuICAgIGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHRoaXMkMS5oYW5kbGVyc1trZXldLmxlbmd0aCA9PT0gMDsgfVxuICApO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIEV2ZW50RWxlbWVudC5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG52YXIgRXZlbnRNYW5hZ2VyID0gZnVuY3Rpb24gRXZlbnRNYW5hZ2VyKCkge1xuICB0aGlzLmV2ZW50RWxlbWVudHMgPSBbXTtcbn07XG5cbkV2ZW50TWFuYWdlci5wcm90b3R5cGUuZXZlbnRFbGVtZW50ID0gZnVuY3Rpb24gZXZlbnRFbGVtZW50IChlbGVtZW50KSB7XG4gIHZhciBlZSA9IHRoaXMuZXZlbnRFbGVtZW50cy5maWx0ZXIoZnVuY3Rpb24gKGVlKSB7IHJldHVybiBlZS5lbGVtZW50ID09PSBlbGVtZW50OyB9KVswXTtcbiAgaWYgKCFlZSkge1xuICAgIGVlID0gbmV3IEV2ZW50RWxlbWVudChlbGVtZW50KTtcbiAgICB0aGlzLmV2ZW50RWxlbWVudHMucHVzaChlZSk7XG4gIH1cbiAgcmV0dXJuIGVlO1xufTtcblxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gYmluZCAoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIHRoaXMuZXZlbnRFbGVtZW50KGVsZW1lbnQpLmJpbmQoZXZlbnROYW1lLCBoYW5kbGVyKTtcbn07XG5cbkV2ZW50TWFuYWdlci5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24gdW5iaW5kIChlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgdmFyIGVlID0gdGhpcy5ldmVudEVsZW1lbnQoZWxlbWVudCk7XG4gIGVlLnVuYmluZChldmVudE5hbWUsIGhhbmRsZXIpO1xuXG4gIGlmIChlZS5pc0VtcHR5KSB7XG4gICAgLy8gcmVtb3ZlXG4gICAgdGhpcy5ldmVudEVsZW1lbnRzLnNwbGljZSh0aGlzLmV2ZW50RWxlbWVudHMuaW5kZXhPZihlZSksIDEpO1xuICB9XG59O1xuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLnVuYmluZEFsbCA9IGZ1bmN0aW9uIHVuYmluZEFsbCAoKSB7XG4gIHRoaXMuZXZlbnRFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnVuYmluZEFsbCgpOyB9KTtcbiAgdGhpcy5ldmVudEVsZW1lbnRzID0gW107XG59O1xuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlIChlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgdmFyIGVlID0gdGhpcy5ldmVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciBvbmNlSGFuZGxlciA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBlZS51bmJpbmQoZXZlbnROYW1lLCBvbmNlSGFuZGxlcik7XG4gICAgaGFuZGxlcihldnQpO1xuICB9O1xuICBlZS5iaW5kKGV2ZW50TmFtZSwgb25jZUhhbmRsZXIpO1xufTtcblxuZnVuY3Rpb24gY3JlYXRlRXZlbnQobmFtZSkge1xuICBpZiAodHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBuZXcgQ3VzdG9tRXZlbnQobmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdDdXN0b21FdmVudCcpO1xuICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQobmFtZSwgZmFsc2UsIGZhbHNlLCB1bmRlZmluZWQpO1xuICAgIHJldHVybiBldnQ7XG4gIH1cbn1cblxudmFyIHByb2Nlc3NTY3JvbGxEaWZmID0gZnVuY3Rpb24oXG4gIGksXG4gIGF4aXMsXG4gIGRpZmYsXG4gIHVzZVNjcm9sbGluZ0NsYXNzLFxuICBmb3JjZUZpcmVSZWFjaEV2ZW50XG4pIHtcbiAgaWYgKCB1c2VTY3JvbGxpbmdDbGFzcyA9PT0gdm9pZCAwICkgdXNlU2Nyb2xsaW5nQ2xhc3MgPSB0cnVlO1xuICBpZiAoIGZvcmNlRmlyZVJlYWNoRXZlbnQgPT09IHZvaWQgMCApIGZvcmNlRmlyZVJlYWNoRXZlbnQgPSBmYWxzZTtcblxuICB2YXIgZmllbGRzO1xuICBpZiAoYXhpcyA9PT0gJ3RvcCcpIHtcbiAgICBmaWVsZHMgPSBbXG4gICAgICAnY29udGVudEhlaWdodCcsXG4gICAgICAnY29udGFpbmVySGVpZ2h0JyxcbiAgICAgICdzY3JvbGxUb3AnLFxuICAgICAgJ3knLFxuICAgICAgJ3VwJyxcbiAgICAgICdkb3duJyBdO1xuICB9IGVsc2UgaWYgKGF4aXMgPT09ICdsZWZ0Jykge1xuICAgIGZpZWxkcyA9IFtcbiAgICAgICdjb250ZW50V2lkdGgnLFxuICAgICAgJ2NvbnRhaW5lcldpZHRoJyxcbiAgICAgICdzY3JvbGxMZWZ0JyxcbiAgICAgICd4JyxcbiAgICAgICdsZWZ0JyxcbiAgICAgICdyaWdodCcgXTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgcHJvcGVyIGF4aXMgc2hvdWxkIGJlIHByb3ZpZGVkJyk7XG4gIH1cblxuICBwcm9jZXNzU2Nyb2xsRGlmZiQxKGksIGRpZmYsIGZpZWxkcywgdXNlU2Nyb2xsaW5nQ2xhc3MsIGZvcmNlRmlyZVJlYWNoRXZlbnQpO1xufTtcblxuZnVuY3Rpb24gcHJvY2Vzc1Njcm9sbERpZmYkMShcbiAgaSxcbiAgZGlmZixcbiAgcmVmLFxuICB1c2VTY3JvbGxpbmdDbGFzcyxcbiAgZm9yY2VGaXJlUmVhY2hFdmVudFxuKSB7XG4gIHZhciBjb250ZW50SGVpZ2h0ID0gcmVmWzBdO1xuICB2YXIgY29udGFpbmVySGVpZ2h0ID0gcmVmWzFdO1xuICB2YXIgc2Nyb2xsVG9wID0gcmVmWzJdO1xuICB2YXIgeSA9IHJlZlszXTtcbiAgdmFyIHVwID0gcmVmWzRdO1xuICB2YXIgZG93biA9IHJlZls1XTtcbiAgaWYgKCB1c2VTY3JvbGxpbmdDbGFzcyA9PT0gdm9pZCAwICkgdXNlU2Nyb2xsaW5nQ2xhc3MgPSB0cnVlO1xuICBpZiAoIGZvcmNlRmlyZVJlYWNoRXZlbnQgPT09IHZvaWQgMCApIGZvcmNlRmlyZVJlYWNoRXZlbnQgPSBmYWxzZTtcblxuICB2YXIgZWxlbWVudCA9IGkuZWxlbWVudDtcblxuICAvLyByZXNldCByZWFjaFxuICBpLnJlYWNoW3ldID0gbnVsbDtcblxuICAvLyAxIGZvciBzdWJwaXhlbCByb3VuZGluZ1xuICBpZiAoZWxlbWVudFtzY3JvbGxUb3BdIDwgMSkge1xuICAgIGkucmVhY2hbeV0gPSAnc3RhcnQnO1xuICB9XG5cbiAgLy8gMSBmb3Igc3VicGl4ZWwgcm91bmRpbmdcbiAgaWYgKGVsZW1lbnRbc2Nyb2xsVG9wXSA+IGlbY29udGVudEhlaWdodF0gLSBpW2NvbnRhaW5lckhlaWdodF0gLSAxKSB7XG4gICAgaS5yZWFjaFt5XSA9ICdlbmQnO1xuICB9XG5cbiAgaWYgKGRpZmYpIHtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoKFwicHMtc2Nyb2xsLVwiICsgeSkpKTtcblxuICAgIGlmIChkaWZmIDwgMCkge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KChcInBzLXNjcm9sbC1cIiArIHVwKSkpO1xuICAgIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVFdmVudCgoXCJwcy1zY3JvbGwtXCIgKyBkb3duKSkpO1xuICAgIH1cblxuICAgIGlmICh1c2VTY3JvbGxpbmdDbGFzcykge1xuICAgICAgc2V0U2Nyb2xsaW5nQ2xhc3NJbnN0YW50bHkoaSwgeSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGkucmVhY2hbeV0gJiYgKGRpZmYgfHwgZm9yY2VGaXJlUmVhY2hFdmVudCkpIHtcbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoKFwicHMtXCIgKyB5ICsgXCItcmVhY2gtXCIgKyAoaS5yZWFjaFt5XSkpKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9JbnQoeCkge1xuICByZXR1cm4gcGFyc2VJbnQoeCwgMTApIHx8IDA7XG59XG5cbmZ1bmN0aW9uIGlzRWRpdGFibGUoZWwpIHtcbiAgcmV0dXJuIChcbiAgICBtYXRjaGVzKGVsLCAnaW5wdXQsW2NvbnRlbnRlZGl0YWJsZV0nKSB8fFxuICAgIG1hdGNoZXMoZWwsICdzZWxlY3QsW2NvbnRlbnRlZGl0YWJsZV0nKSB8fFxuICAgIG1hdGNoZXMoZWwsICd0ZXh0YXJlYSxbY29udGVudGVkaXRhYmxlXScpIHx8XG4gICAgbWF0Y2hlcyhlbCwgJ2J1dHRvbixbY29udGVudGVkaXRhYmxlXScpXG4gICk7XG59XG5cbmZ1bmN0aW9uIG91dGVyV2lkdGgoZWxlbWVudCkge1xuICB2YXIgc3R5bGVzID0gZ2V0KGVsZW1lbnQpO1xuICByZXR1cm4gKFxuICAgIHRvSW50KHN0eWxlcy53aWR0aCkgK1xuICAgIHRvSW50KHN0eWxlcy5wYWRkaW5nTGVmdCkgK1xuICAgIHRvSW50KHN0eWxlcy5wYWRkaW5nUmlnaHQpICtcbiAgICB0b0ludChzdHlsZXMuYm9yZGVyTGVmdFdpZHRoKSArXG4gICAgdG9JbnQoc3R5bGVzLmJvcmRlclJpZ2h0V2lkdGgpXG4gICk7XG59XG5cbnZhciBlbnYgPSB7XG4gIGlzV2ViS2l0OlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAnV2Via2l0QXBwZWFyYW5jZScgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLFxuICBzdXBwb3J0c1RvdWNoOlxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fFxuICAgICAgKHdpbmRvdy5Eb2N1bWVudFRvdWNoICYmIGRvY3VtZW50IGluc3RhbmNlb2Ygd2luZG93LkRvY3VtZW50VG91Y2gpKSxcbiAgc3VwcG9ydHNJZVBvaW50ZXI6XG4gICAgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMsXG4gIGlzQ2hyb21lOlxuICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmXG4gICAgL0Nocm9tZS9pLnRlc3QobmF2aWdhdG9yICYmIG5hdmlnYXRvci51c2VyQWdlbnQpLFxufTtcblxudmFyIHVwZGF0ZUdlb21ldHJ5ID0gZnVuY3Rpb24oaSkge1xuICB2YXIgZWxlbWVudCA9IGkuZWxlbWVudDtcbiAgdmFyIHJvdW5kZWRTY3JvbGxUb3AgPSBNYXRoLmZsb29yKGVsZW1lbnQuc2Nyb2xsVG9wKTtcblxuICBpLmNvbnRhaW5lcldpZHRoID0gZWxlbWVudC5jbGllbnRXaWR0aDtcbiAgaS5jb250YWluZXJIZWlnaHQgPSBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgaS5jb250ZW50V2lkdGggPSBlbGVtZW50LnNjcm9sbFdpZHRoO1xuICBpLmNvbnRlbnRIZWlnaHQgPSBlbGVtZW50LnNjcm9sbEhlaWdodDtcblxuICBpZiAoIWVsZW1lbnQuY29udGFpbnMoaS5zY3JvbGxiYXJYUmFpbCkpIHtcbiAgICAvLyBjbGVhbiB1cCBhbmQgYXBwZW5kXG4gICAgcXVlcnlDaGlsZHJlbihlbGVtZW50LCBjbHMuZWxlbWVudC5yYWlsKCd4JykpLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7IHJldHVybiByZW1vdmUoZWwpOyB9XG4gICAgKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGkuc2Nyb2xsYmFyWFJhaWwpO1xuICB9XG4gIGlmICghZWxlbWVudC5jb250YWlucyhpLnNjcm9sbGJhcllSYWlsKSkge1xuICAgIC8vIGNsZWFuIHVwIGFuZCBhcHBlbmRcbiAgICBxdWVyeUNoaWxkcmVuKGVsZW1lbnQsIGNscy5lbGVtZW50LnJhaWwoJ3knKSkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIHJlbW92ZShlbCk7IH1cbiAgICApO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaS5zY3JvbGxiYXJZUmFpbCk7XG4gIH1cblxuICBpZiAoXG4gICAgIWkuc2V0dGluZ3Muc3VwcHJlc3NTY3JvbGxYICYmXG4gICAgaS5jb250YWluZXJXaWR0aCArIGkuc2V0dGluZ3Muc2Nyb2xsWE1hcmdpbk9mZnNldCA8IGkuY29udGVudFdpZHRoXG4gICkge1xuICAgIGkuc2Nyb2xsYmFyWEFjdGl2ZSA9IHRydWU7XG4gICAgaS5yYWlsWFdpZHRoID0gaS5jb250YWluZXJXaWR0aCAtIGkucmFpbFhNYXJnaW5XaWR0aDtcbiAgICBpLnJhaWxYUmF0aW8gPSBpLmNvbnRhaW5lcldpZHRoIC8gaS5yYWlsWFdpZHRoO1xuICAgIGkuc2Nyb2xsYmFyWFdpZHRoID0gZ2V0VGh1bWJTaXplKFxuICAgICAgaSxcbiAgICAgIHRvSW50KGkucmFpbFhXaWR0aCAqIGkuY29udGFpbmVyV2lkdGggLyBpLmNvbnRlbnRXaWR0aClcbiAgICApO1xuICAgIGkuc2Nyb2xsYmFyWExlZnQgPSB0b0ludChcbiAgICAgIChpLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCArIGVsZW1lbnQuc2Nyb2xsTGVmdCkgKlxuICAgICAgICAoaS5yYWlsWFdpZHRoIC0gaS5zY3JvbGxiYXJYV2lkdGgpIC9cbiAgICAgICAgKGkuY29udGVudFdpZHRoIC0gaS5jb250YWluZXJXaWR0aClcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGkuc2Nyb2xsYmFyWEFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKFxuICAgICFpLnNldHRpbmdzLnN1cHByZXNzU2Nyb2xsWSAmJlxuICAgIGkuY29udGFpbmVySGVpZ2h0ICsgaS5zZXR0aW5ncy5zY3JvbGxZTWFyZ2luT2Zmc2V0IDwgaS5jb250ZW50SGVpZ2h0XG4gICkge1xuICAgIGkuc2Nyb2xsYmFyWUFjdGl2ZSA9IHRydWU7XG4gICAgaS5yYWlsWUhlaWdodCA9IGkuY29udGFpbmVySGVpZ2h0IC0gaS5yYWlsWU1hcmdpbkhlaWdodDtcbiAgICBpLnJhaWxZUmF0aW8gPSBpLmNvbnRhaW5lckhlaWdodCAvIGkucmFpbFlIZWlnaHQ7XG4gICAgaS5zY3JvbGxiYXJZSGVpZ2h0ID0gZ2V0VGh1bWJTaXplKFxuICAgICAgaSxcbiAgICAgIHRvSW50KGkucmFpbFlIZWlnaHQgKiBpLmNvbnRhaW5lckhlaWdodCAvIGkuY29udGVudEhlaWdodClcbiAgICApO1xuICAgIGkuc2Nyb2xsYmFyWVRvcCA9IHRvSW50KFxuICAgICAgcm91bmRlZFNjcm9sbFRvcCAqXG4gICAgICAgIChpLnJhaWxZSGVpZ2h0IC0gaS5zY3JvbGxiYXJZSGVpZ2h0KSAvXG4gICAgICAgIChpLmNvbnRlbnRIZWlnaHQgLSBpLmNvbnRhaW5lckhlaWdodClcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGkuc2Nyb2xsYmFyWUFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKGkuc2Nyb2xsYmFyWExlZnQgPj0gaS5yYWlsWFdpZHRoIC0gaS5zY3JvbGxiYXJYV2lkdGgpIHtcbiAgICBpLnNjcm9sbGJhclhMZWZ0ID0gaS5yYWlsWFdpZHRoIC0gaS5zY3JvbGxiYXJYV2lkdGg7XG4gIH1cbiAgaWYgKGkuc2Nyb2xsYmFyWVRvcCA+PSBpLnJhaWxZSGVpZ2h0IC0gaS5zY3JvbGxiYXJZSGVpZ2h0KSB7XG4gICAgaS5zY3JvbGxiYXJZVG9wID0gaS5yYWlsWUhlaWdodCAtIGkuc2Nyb2xsYmFyWUhlaWdodDtcbiAgfVxuXG4gIHVwZGF0ZUNzcyhlbGVtZW50LCBpKTtcblxuICBpZiAoaS5zY3JvbGxiYXJYQWN0aXZlKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscy5zdGF0ZS5hY3RpdmUoJ3gnKSk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNscy5zdGF0ZS5hY3RpdmUoJ3gnKSk7XG4gICAgaS5zY3JvbGxiYXJYV2lkdGggPSAwO1xuICAgIGkuc2Nyb2xsYmFyWExlZnQgPSAwO1xuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IDA7XG4gIH1cbiAgaWYgKGkuc2Nyb2xsYmFyWUFjdGl2ZSkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMuc3RhdGUuYWN0aXZlKCd5JykpO1xuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbHMuc3RhdGUuYWN0aXZlKCd5JykpO1xuICAgIGkuc2Nyb2xsYmFyWUhlaWdodCA9IDA7XG4gICAgaS5zY3JvbGxiYXJZVG9wID0gMDtcbiAgICBlbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGdldFRodW1iU2l6ZShpLCB0aHVtYlNpemUpIHtcbiAgaWYgKGkuc2V0dGluZ3MubWluU2Nyb2xsYmFyTGVuZ3RoKSB7XG4gICAgdGh1bWJTaXplID0gTWF0aC5tYXgodGh1bWJTaXplLCBpLnNldHRpbmdzLm1pblNjcm9sbGJhckxlbmd0aCk7XG4gIH1cbiAgaWYgKGkuc2V0dGluZ3MubWF4U2Nyb2xsYmFyTGVuZ3RoKSB7XG4gICAgdGh1bWJTaXplID0gTWF0aC5taW4odGh1bWJTaXplLCBpLnNldHRpbmdzLm1heFNjcm9sbGJhckxlbmd0aCk7XG4gIH1cbiAgcmV0dXJuIHRodW1iU2l6ZTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3NzKGVsZW1lbnQsIGkpIHtcbiAgdmFyIHhSYWlsT2Zmc2V0ID0geyB3aWR0aDogaS5yYWlsWFdpZHRoIH07XG4gIHZhciByb3VuZGVkU2Nyb2xsVG9wID0gTWF0aC5mbG9vcihlbGVtZW50LnNjcm9sbFRvcCk7XG5cbiAgaWYgKGkuaXNSdGwpIHtcbiAgICB4UmFpbE9mZnNldC5sZWZ0ID1cbiAgICAgIGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ICtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCArXG4gICAgICBpLmNvbnRhaW5lcldpZHRoIC1cbiAgICAgIGkuY29udGVudFdpZHRoO1xuICB9IGVsc2Uge1xuICAgIHhSYWlsT2Zmc2V0LmxlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gIH1cbiAgaWYgKGkuaXNTY3JvbGxiYXJYVXNpbmdCb3R0b20pIHtcbiAgICB4UmFpbE9mZnNldC5ib3R0b20gPSBpLnNjcm9sbGJhclhCb3R0b20gLSByb3VuZGVkU2Nyb2xsVG9wO1xuICB9IGVsc2Uge1xuICAgIHhSYWlsT2Zmc2V0LnRvcCA9IGkuc2Nyb2xsYmFyWFRvcCArIHJvdW5kZWRTY3JvbGxUb3A7XG4gIH1cbiAgc2V0KGkuc2Nyb2xsYmFyWFJhaWwsIHhSYWlsT2Zmc2V0KTtcblxuICB2YXIgeVJhaWxPZmZzZXQgPSB7IHRvcDogcm91bmRlZFNjcm9sbFRvcCwgaGVpZ2h0OiBpLnJhaWxZSGVpZ2h0IH07XG4gIGlmIChpLmlzU2Nyb2xsYmFyWVVzaW5nUmlnaHQpIHtcbiAgICBpZiAoaS5pc1J0bCkge1xuICAgICAgeVJhaWxPZmZzZXQucmlnaHQgPVxuICAgICAgICBpLmNvbnRlbnRXaWR0aCAtXG4gICAgICAgIChpLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCArIGVsZW1lbnQuc2Nyb2xsTGVmdCkgLVxuICAgICAgICBpLnNjcm9sbGJhcllSaWdodCAtXG4gICAgICAgIGkuc2Nyb2xsYmFyWU91dGVyV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHlSYWlsT2Zmc2V0LnJpZ2h0ID0gaS5zY3JvbGxiYXJZUmlnaHQgLSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChpLmlzUnRsKSB7XG4gICAgICB5UmFpbE9mZnNldC5sZWZ0ID1cbiAgICAgICAgaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgK1xuICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgK1xuICAgICAgICBpLmNvbnRhaW5lcldpZHRoICogMiAtXG4gICAgICAgIGkuY29udGVudFdpZHRoIC1cbiAgICAgICAgaS5zY3JvbGxiYXJZTGVmdCAtXG4gICAgICAgIGkuc2Nyb2xsYmFyWU91dGVyV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHlSYWlsT2Zmc2V0LmxlZnQgPSBpLnNjcm9sbGJhcllMZWZ0ICsgZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgfVxuICBzZXQoaS5zY3JvbGxiYXJZUmFpbCwgeVJhaWxPZmZzZXQpO1xuXG4gIHNldChpLnNjcm9sbGJhclgsIHtcbiAgICBsZWZ0OiBpLnNjcm9sbGJhclhMZWZ0LFxuICAgIHdpZHRoOiBpLnNjcm9sbGJhclhXaWR0aCAtIGkucmFpbEJvcmRlclhXaWR0aCxcbiAgfSk7XG4gIHNldChpLnNjcm9sbGJhclksIHtcbiAgICB0b3A6IGkuc2Nyb2xsYmFyWVRvcCxcbiAgICBoZWlnaHQ6IGkuc2Nyb2xsYmFyWUhlaWdodCAtIGkucmFpbEJvcmRlcllXaWR0aCxcbiAgfSk7XG59XG5cbnZhciBjbGlja1JhaWwgPSBmdW5jdGlvbihpKSB7XG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclksICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5zdG9wUHJvcGFnYXRpb24oKTsgfSk7XG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhcllSYWlsLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgcG9zaXRpb25Ub3AgPVxuICAgICAgZS5wYWdlWSAtXG4gICAgICB3aW5kb3cucGFnZVlPZmZzZXQgLVxuICAgICAgaS5zY3JvbGxiYXJZUmFpbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgdmFyIGRpcmVjdGlvbiA9IHBvc2l0aW9uVG9wID4gaS5zY3JvbGxiYXJZVG9wID8gMSA6IC0xO1xuXG4gICAgaS5lbGVtZW50LnNjcm9sbFRvcCArPSBkaXJlY3Rpb24gKiBpLmNvbnRhaW5lckhlaWdodDtcbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xuXG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclgsICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5zdG9wUHJvcGFnYXRpb24oKTsgfSk7XG4gIGkuZXZlbnQuYmluZChpLnNjcm9sbGJhclhSYWlsLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgcG9zaXRpb25MZWZ0ID1cbiAgICAgIGUucGFnZVggLVxuICAgICAgd2luZG93LnBhZ2VYT2Zmc2V0IC1cbiAgICAgIGkuc2Nyb2xsYmFyWFJhaWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICB2YXIgZGlyZWN0aW9uID0gcG9zaXRpb25MZWZ0ID4gaS5zY3JvbGxiYXJYTGVmdCA/IDEgOiAtMTtcblxuICAgIGkuZWxlbWVudC5zY3JvbGxMZWZ0ICs9IGRpcmVjdGlvbiAqIGkuY29udGFpbmVyV2lkdGg7XG4gICAgdXBkYXRlR2VvbWV0cnkoaSk7XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcbn07XG5cbnZhciBkcmFnVGh1bWIgPSBmdW5jdGlvbihpKSB7XG4gIGJpbmRNb3VzZVNjcm9sbEhhbmRsZXIoaSwgW1xuICAgICdjb250YWluZXJXaWR0aCcsXG4gICAgJ2NvbnRlbnRXaWR0aCcsXG4gICAgJ3BhZ2VYJyxcbiAgICAncmFpbFhXaWR0aCcsXG4gICAgJ3Njcm9sbGJhclgnLFxuICAgICdzY3JvbGxiYXJYV2lkdGgnLFxuICAgICdzY3JvbGxMZWZ0JyxcbiAgICAneCcsXG4gICAgJ3Njcm9sbGJhclhSYWlsJyBdKTtcbiAgYmluZE1vdXNlU2Nyb2xsSGFuZGxlcihpLCBbXG4gICAgJ2NvbnRhaW5lckhlaWdodCcsXG4gICAgJ2NvbnRlbnRIZWlnaHQnLFxuICAgICdwYWdlWScsXG4gICAgJ3JhaWxZSGVpZ2h0JyxcbiAgICAnc2Nyb2xsYmFyWScsXG4gICAgJ3Njcm9sbGJhcllIZWlnaHQnLFxuICAgICdzY3JvbGxUb3AnLFxuICAgICd5JyxcbiAgICAnc2Nyb2xsYmFyWVJhaWwnIF0pO1xufTtcblxuZnVuY3Rpb24gYmluZE1vdXNlU2Nyb2xsSGFuZGxlcihcbiAgaSxcbiAgcmVmXG4pIHtcbiAgdmFyIGNvbnRhaW5lckhlaWdodCA9IHJlZlswXTtcbiAgdmFyIGNvbnRlbnRIZWlnaHQgPSByZWZbMV07XG4gIHZhciBwYWdlWSA9IHJlZlsyXTtcbiAgdmFyIHJhaWxZSGVpZ2h0ID0gcmVmWzNdO1xuICB2YXIgc2Nyb2xsYmFyWSA9IHJlZls0XTtcbiAgdmFyIHNjcm9sbGJhcllIZWlnaHQgPSByZWZbNV07XG4gIHZhciBzY3JvbGxUb3AgPSByZWZbNl07XG4gIHZhciB5ID0gcmVmWzddO1xuICB2YXIgc2Nyb2xsYmFyWVJhaWwgPSByZWZbOF07XG5cbiAgdmFyIGVsZW1lbnQgPSBpLmVsZW1lbnQ7XG5cbiAgdmFyIHN0YXJ0aW5nU2Nyb2xsVG9wID0gbnVsbDtcbiAgdmFyIHN0YXJ0aW5nTW91c2VQYWdlWSA9IG51bGw7XG4gIHZhciBzY3JvbGxCeSA9IG51bGw7XG5cbiAgZnVuY3Rpb24gbW91c2VNb3ZlSGFuZGxlcihlKSB7XG4gICAgZWxlbWVudFtzY3JvbGxUb3BdID1cbiAgICAgIHN0YXJ0aW5nU2Nyb2xsVG9wICsgc2Nyb2xsQnkgKiAoZVtwYWdlWV0gLSBzdGFydGluZ01vdXNlUGFnZVkpO1xuICAgIGFkZFNjcm9sbGluZ0NsYXNzKGksIHkpO1xuICAgIHVwZGF0ZUdlb21ldHJ5KGkpO1xuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZVVwSGFuZGxlcigpIHtcbiAgICByZW1vdmVTY3JvbGxpbmdDbGFzcyhpLCB5KTtcbiAgICBpW3Njcm9sbGJhcllSYWlsXS5jbGFzc0xpc3QucmVtb3ZlKGNscy5zdGF0ZS5jbGlja2luZyk7XG4gICAgaS5ldmVudC51bmJpbmQoaS5vd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XG4gIH1cblxuICBpLmV2ZW50LmJpbmQoaVtzY3JvbGxiYXJZXSwgJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgc3RhcnRpbmdTY3JvbGxUb3AgPSBlbGVtZW50W3Njcm9sbFRvcF07XG4gICAgc3RhcnRpbmdNb3VzZVBhZ2VZID0gZVtwYWdlWV07XG4gICAgc2Nyb2xsQnkgPVxuICAgICAgKGlbY29udGVudEhlaWdodF0gLSBpW2NvbnRhaW5lckhlaWdodF0pIC9cbiAgICAgIChpW3JhaWxZSGVpZ2h0XSAtIGlbc2Nyb2xsYmFyWUhlaWdodF0pO1xuXG4gICAgaS5ldmVudC5iaW5kKGkub3duZXJEb2N1bWVudCwgJ21vdXNlbW92ZScsIG1vdXNlTW92ZUhhbmRsZXIpO1xuICAgIGkuZXZlbnQub25jZShpLm93bmVyRG9jdW1lbnQsICdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xuXG4gICAgaVtzY3JvbGxiYXJZUmFpbF0uY2xhc3NMaXN0LmFkZChjbHMuc3RhdGUuY2xpY2tpbmcpO1xuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xufVxuXG52YXIga2V5Ym9hcmQgPSBmdW5jdGlvbihpKSB7XG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuXG4gIHZhciBlbGVtZW50SG92ZXJlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1hdGNoZXMoZWxlbWVudCwgJzpob3ZlcicpOyB9O1xuICB2YXIgc2Nyb2xsYmFyRm9jdXNlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1hdGNoZXMoaS5zY3JvbGxiYXJYLCAnOmZvY3VzJykgfHwgbWF0Y2hlcyhpLnNjcm9sbGJhclksICc6Zm9jdXMnKTsgfTtcblxuICBmdW5jdGlvbiBzaG91bGRQcmV2ZW50RGVmYXVsdChkZWx0YVgsIGRlbHRhWSkge1xuICAgIHZhciBzY3JvbGxUb3AgPSBNYXRoLmZsb29yKGVsZW1lbnQuc2Nyb2xsVG9wKTtcbiAgICBpZiAoZGVsdGFYID09PSAwKSB7XG4gICAgICBpZiAoIWkuc2Nyb2xsYmFyWUFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIChzY3JvbGxUb3AgPT09IDAgJiYgZGVsdGFZID4gMCkgfHxcbiAgICAgICAgKHNjcm9sbFRvcCA+PSBpLmNvbnRlbnRIZWlnaHQgLSBpLmNvbnRhaW5lckhlaWdodCAmJiBkZWx0YVkgPCAwKVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiAhaS5zZXR0aW5ncy53aGVlbFByb3BhZ2F0aW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBzY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIGlmIChkZWx0YVkgPT09IDApIHtcbiAgICAgIGlmICghaS5zY3JvbGxiYXJYQWN0aXZlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgKHNjcm9sbExlZnQgPT09IDAgJiYgZGVsdGFYIDwgMCkgfHxcbiAgICAgICAgKHNjcm9sbExlZnQgPj0gaS5jb250ZW50V2lkdGggLSBpLmNvbnRhaW5lcldpZHRoICYmIGRlbHRhWCA+IDApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuICFpLnNldHRpbmdzLndoZWVsUHJvcGFnYXRpb247XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaS5ldmVudC5iaW5kKGkub3duZXJEb2N1bWVudCwgJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChcbiAgICAgIChlLmlzRGVmYXVsdFByZXZlbnRlZCAmJiBlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB8fFxuICAgICAgZS5kZWZhdWx0UHJldmVudGVkXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFlbGVtZW50SG92ZXJlZCgpICYmICFzY3JvbGxiYXJGb2N1c2VkKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRcbiAgICAgID8gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgOiBpLm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICBpZiAoYWN0aXZlRWxlbWVudCkge1xuICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQudGFnTmFtZSA9PT0gJ0lGUkFNRScpIHtcbiAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQuY29udGVudERvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBnbyBkZWVwZXIgaWYgZWxlbWVudCBpcyBhIHdlYmNvbXBvbmVudFxuICAgICAgICB3aGlsZSAoYWN0aXZlRWxlbWVudC5zaGFkb3dSb290KSB7XG4gICAgICAgICAgYWN0aXZlRWxlbWVudCA9IGFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaXNFZGl0YWJsZShhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRlbHRhWCA9IDA7XG4gICAgdmFyIGRlbHRhWSA9IDA7XG5cbiAgICBzd2l0Y2ggKGUud2hpY2gpIHtcbiAgICAgIGNhc2UgMzc6IC8vIGxlZnRcbiAgICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgIGRlbHRhWCA9IC1pLmNvbnRlbnRXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgIGRlbHRhWCA9IC1pLmNvbnRhaW5lcldpZHRoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbHRhWCA9IC0zMDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzg6IC8vIHVwXG4gICAgICAgIGlmIChlLm1ldGFLZXkpIHtcbiAgICAgICAgICBkZWx0YVkgPSBpLmNvbnRlbnRIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5hbHRLZXkpIHtcbiAgICAgICAgICBkZWx0YVkgPSBpLmNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWx0YVkgPSAzMDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzk6IC8vIHJpZ2h0XG4gICAgICAgIGlmIChlLm1ldGFLZXkpIHtcbiAgICAgICAgICBkZWx0YVggPSBpLmNvbnRlbnRXaWR0aDtcbiAgICAgICAgfSBlbHNlIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgIGRlbHRhWCA9IGkuY29udGFpbmVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsdGFYID0gMzA7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDQwOiAvLyBkb3duXG4gICAgICAgIGlmIChlLm1ldGFLZXkpIHtcbiAgICAgICAgICBkZWx0YVkgPSAtaS5jb250ZW50SGVpZ2h0O1xuICAgICAgICB9IGVsc2UgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgZGVsdGFZID0gLWkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbHRhWSA9IC0zMDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzI6IC8vIHNwYWNlIGJhclxuICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgIGRlbHRhWSA9IGkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbHRhWSA9IC1pLmNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzM6IC8vIHBhZ2UgdXBcbiAgICAgICAgZGVsdGFZID0gaS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzNDogLy8gcGFnZSBkb3duXG4gICAgICAgIGRlbHRhWSA9IC1pLmNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM2OiAvLyBob21lXG4gICAgICAgIGRlbHRhWSA9IGkuY29udGVudEhlaWdodDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM1OiAvLyBlbmRcbiAgICAgICAgZGVsdGFZID0gLWkuY29udGVudEhlaWdodDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGkuc2V0dGluZ3Muc3VwcHJlc3NTY3JvbGxYICYmIGRlbHRhWCAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaS5zZXR0aW5ncy5zdXBwcmVzc1Njcm9sbFkgJiYgZGVsdGFZICE9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5zY3JvbGxUb3AgLT0gZGVsdGFZO1xuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCArPSBkZWx0YVg7XG4gICAgdXBkYXRlR2VvbWV0cnkoaSk7XG5cbiAgICBpZiAoc2hvdWxkUHJldmVudERlZmF1bHQoZGVsdGFYLCBkZWx0YVkpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciB3aGVlbCA9IGZ1bmN0aW9uKGkpIHtcbiAgdmFyIGVsZW1lbnQgPSBpLmVsZW1lbnQ7XG5cbiAgZnVuY3Rpb24gc2hvdWxkUHJldmVudERlZmF1bHQoZGVsdGFYLCBkZWx0YVkpIHtcbiAgICB2YXIgcm91bmRlZFNjcm9sbFRvcCA9IE1hdGguZmxvb3IoZWxlbWVudC5zY3JvbGxUb3ApO1xuICAgIHZhciBpc1RvcCA9IGVsZW1lbnQuc2Nyb2xsVG9wID09PSAwO1xuICAgIHZhciBpc0JvdHRvbSA9XG4gICAgICByb3VuZGVkU2Nyb2xsVG9wICsgZWxlbWVudC5vZmZzZXRIZWlnaHQgPT09IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuICAgIHZhciBpc0xlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQgPT09IDA7XG4gICAgdmFyIGlzUmlnaHQgPVxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ICsgZWxlbWVudC5vZmZzZXRXaWR0aCA9PT0gZWxlbWVudC5zY3JvbGxXaWR0aDtcblxuICAgIHZhciBoaXRzQm91bmQ7XG5cbiAgICAvLyBwaWNrIGF4aXMgd2l0aCBwcmltYXJ5IGRpcmVjdGlvblxuICAgIGlmIChNYXRoLmFicyhkZWx0YVkpID4gTWF0aC5hYnMoZGVsdGFYKSkge1xuICAgICAgaGl0c0JvdW5kID0gaXNUb3AgfHwgaXNCb3R0b207XG4gICAgfSBlbHNlIHtcbiAgICAgIGhpdHNCb3VuZCA9IGlzTGVmdCB8fCBpc1JpZ2h0O1xuICAgIH1cblxuICAgIHJldHVybiBoaXRzQm91bmQgPyAhaS5zZXR0aW5ncy53aGVlbFByb3BhZ2F0aW9uIDogdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERlbHRhRnJvbUV2ZW50KGUpIHtcbiAgICB2YXIgZGVsdGFYID0gZS5kZWx0YVg7XG4gICAgdmFyIGRlbHRhWSA9IC0xICogZS5kZWx0YVk7XG5cbiAgICBpZiAodHlwZW9mIGRlbHRhWCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGRlbHRhWSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIE9TIFggU2FmYXJpXG4gICAgICBkZWx0YVggPSAtMSAqIGUud2hlZWxEZWx0YVggLyA2O1xuICAgICAgZGVsdGFZID0gZS53aGVlbERlbHRhWSAvIDY7XG4gICAgfVxuXG4gICAgaWYgKGUuZGVsdGFNb2RlICYmIGUuZGVsdGFNb2RlID09PSAxKSB7XG4gICAgICAvLyBGaXJlZm94IGluIGRlbHRhTW9kZSAxOiBMaW5lIHNjcm9sbGluZ1xuICAgICAgZGVsdGFYICo9IDEwO1xuICAgICAgZGVsdGFZICo9IDEwO1xuICAgIH1cblxuICAgIGlmIChkZWx0YVggIT09IGRlbHRhWCAmJiBkZWx0YVkgIT09IGRlbHRhWSAvKiBOYU4gY2hlY2tzICovKSB7XG4gICAgICAvLyBJRSBpbiBzb21lIG1vdXNlIGRyaXZlcnNcbiAgICAgIGRlbHRhWCA9IDA7XG4gICAgICBkZWx0YVkgPSBlLndoZWVsRGVsdGE7XG4gICAgfVxuXG4gICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgIC8vIHJldmVyc2UgYXhpcyB3aXRoIHNoaWZ0IGtleVxuICAgICAgcmV0dXJuIFstZGVsdGFZLCAtZGVsdGFYXTtcbiAgICB9XG4gICAgcmV0dXJuIFtkZWx0YVgsIGRlbHRhWV07XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRCZUNvbnN1bWVkQnlDaGlsZCh0YXJnZXQsIGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgLy8gRklYTUU6IHRoaXMgaXMgYSB3b3JrYXJvdW5kIGZvciA8c2VsZWN0PiBpc3N1ZSBpbiBGRiBhbmQgSUUgIzU3MVxuICAgIGlmICghZW52LmlzV2ViS2l0ICYmIGVsZW1lbnQucXVlcnlTZWxlY3Rvcignc2VsZWN0OmZvY3VzJykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICghZWxlbWVudC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGN1cnNvciA9IHRhcmdldDtcblxuICAgIHdoaWxlIChjdXJzb3IgJiYgY3Vyc29yICE9PSBlbGVtZW50KSB7XG4gICAgICBpZiAoY3Vyc29yLmNsYXNzTGlzdC5jb250YWlucyhjbHMuZWxlbWVudC5jb25zdW1pbmcpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3R5bGUgPSBnZXQoY3Vyc29yKTtcbiAgICAgIHZhciBvdmVyZmxvdyA9IFtzdHlsZS5vdmVyZmxvdywgc3R5bGUub3ZlcmZsb3dYLCBzdHlsZS5vdmVyZmxvd1ldLmpvaW4oXG4gICAgICAgICcnXG4gICAgICApO1xuXG4gICAgICAvLyBpZiBzY3JvbGxhYmxlXG4gICAgICBpZiAob3ZlcmZsb3cubWF0Y2goLyhzY3JvbGx8YXV0bykvKSkge1xuICAgICAgICB2YXIgbWF4U2Nyb2xsVG9wID0gY3Vyc29yLnNjcm9sbEhlaWdodCAtIGN1cnNvci5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGlmIChtYXhTY3JvbGxUb3AgPiAwKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsVG9wID09PSAwICYmIGRlbHRhWSA+IDApICYmXG4gICAgICAgICAgICAhKGN1cnNvci5zY3JvbGxUb3AgPT09IG1heFNjcm9sbFRvcCAmJiBkZWx0YVkgPCAwKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBtYXhTY3JvbGxMZWZ0ID0gY3Vyc29yLnNjcm9sbFdpZHRoIC0gY3Vyc29yLmNsaWVudFdpZHRoO1xuICAgICAgICBpZiAobWF4U2Nyb2xsTGVmdCA+IDApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhKGN1cnNvci5zY3JvbGxMZWZ0ID09PSAwICYmIGRlbHRhWCA8IDApICYmXG4gICAgICAgICAgICAhKGN1cnNvci5zY3JvbGxMZWZ0ID09PSBtYXhTY3JvbGxMZWZ0ICYmIGRlbHRhWCA+IDApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3Vyc29yID0gY3Vyc29yLnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gbW91c2V3aGVlbEhhbmRsZXIoZSkge1xuICAgIHZhciByZWYgPSBnZXREZWx0YUZyb21FdmVudChlKTtcbiAgICB2YXIgZGVsdGFYID0gcmVmWzBdO1xuICAgIHZhciBkZWx0YVkgPSByZWZbMV07XG5cbiAgICBpZiAoc2hvdWxkQmVDb25zdW1lZEJ5Q2hpbGQoZS50YXJnZXQsIGRlbHRhWCwgZGVsdGFZKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzaG91bGRQcmV2ZW50ID0gZmFsc2U7XG4gICAgaWYgKCFpLnNldHRpbmdzLnVzZUJvdGhXaGVlbEF4ZXMpIHtcbiAgICAgIC8vIGRlbHRhWCB3aWxsIG9ubHkgYmUgdXNlZCBmb3IgaG9yaXpvbnRhbCBzY3JvbGxpbmcgYW5kIGRlbHRhWSB3aWxsXG4gICAgICAvLyBvbmx5IGJlIHVzZWQgZm9yIHZlcnRpY2FsIHNjcm9sbGluZyAtIHRoaXMgaXMgdGhlIGRlZmF1bHRcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wIC09IGRlbHRhWSAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZDtcbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCArPSBkZWx0YVggKiBpLnNldHRpbmdzLndoZWVsU3BlZWQ7XG4gICAgfSBlbHNlIGlmIChpLnNjcm9sbGJhcllBY3RpdmUgJiYgIWkuc2Nyb2xsYmFyWEFjdGl2ZSkge1xuICAgICAgLy8gb25seSB2ZXJ0aWNhbCBzY3JvbGxiYXIgaXMgYWN0aXZlIGFuZCB1c2VCb3RoV2hlZWxBeGVzIG9wdGlvbiBpc1xuICAgICAgLy8gYWN0aXZlLCBzbyBsZXQncyBzY3JvbGwgdmVydGljYWwgYmFyIHVzaW5nIGJvdGggbW91c2Ugd2hlZWwgYXhlc1xuICAgICAgaWYgKGRlbHRhWSkge1xuICAgICAgICBlbGVtZW50LnNjcm9sbFRvcCAtPSBkZWx0YVkgKiBpLnNldHRpbmdzLndoZWVsU3BlZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNjcm9sbFRvcCArPSBkZWx0YVggKiBpLnNldHRpbmdzLndoZWVsU3BlZWQ7XG4gICAgICB9XG4gICAgICBzaG91bGRQcmV2ZW50ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGkuc2Nyb2xsYmFyWEFjdGl2ZSAmJiAhaS5zY3JvbGxiYXJZQWN0aXZlKSB7XG4gICAgICAvLyB1c2VCb3RoV2hlZWxBeGVzIGFuZCBvbmx5IGhvcml6b250YWwgYmFyIGlzIGFjdGl2ZSwgc28gdXNlIGJvdGhcbiAgICAgIC8vIHdoZWVsIGF4ZXMgZm9yIGhvcml6b250YWwgYmFyXG4gICAgICBpZiAoZGVsdGFYKSB7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCArPSBkZWx0YVggKiBpLnNldHRpbmdzLndoZWVsU3BlZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgLT0gZGVsdGFZICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgICAgfVxuICAgICAgc2hvdWxkUHJldmVudCA9IHRydWU7XG4gICAgfVxuXG4gICAgdXBkYXRlR2VvbWV0cnkoaSk7XG5cbiAgICBzaG91bGRQcmV2ZW50ID0gc2hvdWxkUHJldmVudCB8fCBzaG91bGRQcmV2ZW50RGVmYXVsdChkZWx0YVgsIGRlbHRhWSk7XG4gICAgaWYgKHNob3VsZFByZXZlbnQgJiYgIWUuY3RybEtleSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHdpbmRvdy5vbndoZWVsICE9PSAndW5kZWZpbmVkJykge1xuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnd2hlZWwnLCBtb3VzZXdoZWVsSGFuZGxlcik7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdy5vbm1vdXNld2hlZWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdtb3VzZXdoZWVsJywgbW91c2V3aGVlbEhhbmRsZXIpO1xuICB9XG59O1xuXG52YXIgdG91Y2ggPSBmdW5jdGlvbihpKSB7XG4gIGlmICghZW52LnN1cHBvcnRzVG91Y2ggJiYgIWVudi5zdXBwb3J0c0llUG9pbnRlcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuXG4gIGZ1bmN0aW9uIHNob3VsZFByZXZlbnQoZGVsdGFYLCBkZWx0YVkpIHtcbiAgICB2YXIgc2Nyb2xsVG9wID0gTWF0aC5mbG9vcihlbGVtZW50LnNjcm9sbFRvcCk7XG4gICAgdmFyIHNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgdmFyIG1hZ25pdHVkZVggPSBNYXRoLmFicyhkZWx0YVgpO1xuICAgIHZhciBtYWduaXR1ZGVZID0gTWF0aC5hYnMoZGVsdGFZKTtcblxuICAgIGlmIChtYWduaXR1ZGVZID4gbWFnbml0dWRlWCkge1xuICAgICAgLy8gdXNlciBpcyBwZXJoYXBzIHRyeWluZyB0byBzd2lwZSB1cC9kb3duIHRoZSBwYWdlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKGRlbHRhWSA8IDAgJiYgc2Nyb2xsVG9wID09PSBpLmNvbnRlbnRIZWlnaHQgLSBpLmNvbnRhaW5lckhlaWdodCkgfHxcbiAgICAgICAgKGRlbHRhWSA+IDAgJiYgc2Nyb2xsVG9wID09PSAwKVxuICAgICAgKSB7XG4gICAgICAgIC8vIHNldCBwcmV2ZW50IGZvciBtb2JpbGUgQ2hyb21lIHJlZnJlc2hcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5zY3JvbGxZID09PSAwICYmIGRlbHRhWSA+IDAgJiYgZW52LmlzQ2hyb21lO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobWFnbml0dWRlWCA+IG1hZ25pdHVkZVkpIHtcbiAgICAgIC8vIHVzZXIgaXMgcGVyaGFwcyB0cnlpbmcgdG8gc3dpcGUgbGVmdC9yaWdodCBhY3Jvc3MgdGhlIHBhZ2VcblxuICAgICAgaWYgKFxuICAgICAgICAoZGVsdGFYIDwgMCAmJiBzY3JvbGxMZWZ0ID09PSBpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGgpIHx8XG4gICAgICAgIChkZWx0YVggPiAwICYmIHNjcm9sbExlZnQgPT09IDApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBhcHBseVRvdWNoTW92ZShkaWZmZXJlbmNlWCwgZGlmZmVyZW5jZVkpIHtcbiAgICBlbGVtZW50LnNjcm9sbFRvcCAtPSBkaWZmZXJlbmNlWTtcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgLT0gZGlmZmVyZW5jZVg7XG5cbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcbiAgfVxuXG4gIHZhciBzdGFydE9mZnNldCA9IHt9O1xuICB2YXIgc3RhcnRUaW1lID0gMDtcbiAgdmFyIHNwZWVkID0ge307XG4gIHZhciBlYXNpbmdMb29wID0gbnVsbDtcblxuICBmdW5jdGlvbiBnZXRUb3VjaChlKSB7XG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcykge1xuICAgICAgcmV0dXJuIGUudGFyZ2V0VG91Y2hlc1swXTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTWF5YmUgSUUgcG9pbnRlclxuICAgICAgcmV0dXJuIGU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSGFuZGxlKGUpIHtcbiAgICBpZiAoZS5wb2ludGVyVHlwZSAmJiBlLnBvaW50ZXJUeXBlID09PSAncGVuJyAmJiBlLmJ1dHRvbnMgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0VG91Y2hlcyAmJiBlLnRhcmdldFRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKFxuICAgICAgZS5wb2ludGVyVHlwZSAmJlxuICAgICAgZS5wb2ludGVyVHlwZSAhPT0gJ21vdXNlJyAmJlxuICAgICAgZS5wb2ludGVyVHlwZSAhPT0gZS5NU1BPSU5URVJfVFlQRV9NT1VTRVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvdWNoU3RhcnQoZSkge1xuICAgIGlmICghc2hvdWxkSGFuZGxlKGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRvdWNoID0gZ2V0VG91Y2goZSk7XG5cbiAgICBzdGFydE9mZnNldC5wYWdlWCA9IHRvdWNoLnBhZ2VYO1xuICAgIHN0YXJ0T2Zmc2V0LnBhZ2VZID0gdG91Y2gucGFnZVk7XG5cbiAgICBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgIGlmIChlYXNpbmdMb29wICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEJlQ29uc3VtZWRCeUNoaWxkKHRhcmdldCwgZGVsdGFYLCBkZWx0YVkpIHtcbiAgICBpZiAoIWVsZW1lbnQuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBjdXJzb3IgPSB0YXJnZXQ7XG5cbiAgICB3aGlsZSAoY3Vyc29yICYmIGN1cnNvciAhPT0gZWxlbWVudCkge1xuICAgICAgaWYgKGN1cnNvci5jbGFzc0xpc3QuY29udGFpbnMoY2xzLmVsZW1lbnQuY29uc3VtaW5nKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0eWxlID0gZ2V0KGN1cnNvcik7XG4gICAgICB2YXIgb3ZlcmZsb3cgPSBbc3R5bGUub3ZlcmZsb3csIHN0eWxlLm92ZXJmbG93WCwgc3R5bGUub3ZlcmZsb3dZXS5qb2luKFxuICAgICAgICAnJ1xuICAgICAgKTtcblxuICAgICAgLy8gaWYgc2Nyb2xsYWJsZVxuICAgICAgaWYgKG92ZXJmbG93Lm1hdGNoKC8oc2Nyb2xsfGF1dG8pLykpIHtcbiAgICAgICAgdmFyIG1heFNjcm9sbFRvcCA9IGN1cnNvci5zY3JvbGxIZWlnaHQgLSBjdXJzb3IuY2xpZW50SGVpZ2h0O1xuICAgICAgICBpZiAobWF4U2Nyb2xsVG9wID4gMCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbFRvcCA9PT0gMCAmJiBkZWx0YVkgPiAwKSAmJlxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsVG9wID09PSBtYXhTY3JvbGxUb3AgJiYgZGVsdGFZIDwgMClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF4U2Nyb2xsTGVmdCA9IGN1cnNvci5zY3JvbGxMZWZ0IC0gY3Vyc29yLmNsaWVudFdpZHRoO1xuICAgICAgICBpZiAobWF4U2Nyb2xsTGVmdCA+IDApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhKGN1cnNvci5zY3JvbGxMZWZ0ID09PSAwICYmIGRlbHRhWCA8IDApICYmXG4gICAgICAgICAgICAhKGN1cnNvci5zY3JvbGxMZWZ0ID09PSBtYXhTY3JvbGxMZWZ0ICYmIGRlbHRhWCA+IDApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3Vyc29yID0gY3Vyc29yLnBhcmVudE5vZGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gdG91Y2hNb3ZlKGUpIHtcbiAgICBpZiAoc2hvdWxkSGFuZGxlKGUpKSB7XG4gICAgICB2YXIgdG91Y2ggPSBnZXRUb3VjaChlKTtcblxuICAgICAgdmFyIGN1cnJlbnRPZmZzZXQgPSB7IHBhZ2VYOiB0b3VjaC5wYWdlWCwgcGFnZVk6IHRvdWNoLnBhZ2VZIH07XG5cbiAgICAgIHZhciBkaWZmZXJlbmNlWCA9IGN1cnJlbnRPZmZzZXQucGFnZVggLSBzdGFydE9mZnNldC5wYWdlWDtcbiAgICAgIHZhciBkaWZmZXJlbmNlWSA9IGN1cnJlbnRPZmZzZXQucGFnZVkgLSBzdGFydE9mZnNldC5wYWdlWTtcblxuICAgICAgaWYgKHNob3VsZEJlQ29uc3VtZWRCeUNoaWxkKGUudGFyZ2V0LCBkaWZmZXJlbmNlWCwgZGlmZmVyZW5jZVkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBwbHlUb3VjaE1vdmUoZGlmZmVyZW5jZVgsIGRpZmZlcmVuY2VZKTtcbiAgICAgIHN0YXJ0T2Zmc2V0ID0gY3VycmVudE9mZnNldDtcblxuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgICAgIHZhciB0aW1lR2FwID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XG4gICAgICBpZiAodGltZUdhcCA+IDApIHtcbiAgICAgICAgc3BlZWQueCA9IGRpZmZlcmVuY2VYIC8gdGltZUdhcDtcbiAgICAgICAgc3BlZWQueSA9IGRpZmZlcmVuY2VZIC8gdGltZUdhcDtcbiAgICAgICAgc3RhcnRUaW1lID0gY3VycmVudFRpbWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzaG91bGRQcmV2ZW50KGRpZmZlcmVuY2VYLCBkaWZmZXJlbmNlWSkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiB0b3VjaEVuZCgpIHtcbiAgICBpZiAoaS5zZXR0aW5ncy5zd2lwZUVhc2luZykge1xuICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcbiAgICAgIGVhc2luZ0xvb3AgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGkuaXNJbml0aWFsaXplZCkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZWFzaW5nTG9vcCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzcGVlZC54ICYmICFzcGVlZC55KSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTWF0aC5hYnMoc3BlZWQueCkgPCAwLjAxICYmIE1hdGguYWJzKHNwZWVkLnkpIDwgMC4wMSkge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZWFzaW5nTG9vcCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgYXBwbHlUb3VjaE1vdmUoc3BlZWQueCAqIDMwLCBzcGVlZC55ICogMzApO1xuXG4gICAgICAgIHNwZWVkLnggKj0gMC44O1xuICAgICAgICBzcGVlZC55ICo9IDAuODtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZW52LnN1cHBvcnRzVG91Y2gpIHtcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3RvdWNoc3RhcnQnLCB0b3VjaFN0YXJ0KTtcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3RvdWNobW92ZScsIHRvdWNoTW92ZSk7XG4gICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICd0b3VjaGVuZCcsIHRvdWNoRW5kKTtcbiAgfSBlbHNlIGlmIChlbnYuc3VwcG9ydHNJZVBvaW50ZXIpIHtcbiAgICBpZiAod2luZG93LlBvaW50ZXJFdmVudCkge1xuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdwb2ludGVyZG93bicsIHRvdWNoU3RhcnQpO1xuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdwb2ludGVybW92ZScsIHRvdWNoTW92ZSk7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3BvaW50ZXJ1cCcsIHRvdWNoRW5kKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5NU1BvaW50ZXJFdmVudCkge1xuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdNU1BvaW50ZXJEb3duJywgdG91Y2hTdGFydCk7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ01TUG9pbnRlck1vdmUnLCB0b3VjaE1vdmUpO1xuICAgICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICdNU1BvaW50ZXJVcCcsIHRvdWNoRW5kKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBkZWZhdWx0U2V0dGluZ3MgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoe1xuICBoYW5kbGVyczogWydjbGljay1yYWlsJywgJ2RyYWctdGh1bWInLCAna2V5Ym9hcmQnLCAnd2hlZWwnLCAndG91Y2gnXSxcbiAgbWF4U2Nyb2xsYmFyTGVuZ3RoOiBudWxsLFxuICBtaW5TY3JvbGxiYXJMZW5ndGg6IG51bGwsXG4gIHNjcm9sbGluZ1RocmVzaG9sZDogMTAwMCxcbiAgc2Nyb2xsWE1hcmdpbk9mZnNldDogMCxcbiAgc2Nyb2xsWU1hcmdpbk9mZnNldDogMCxcbiAgc3VwcHJlc3NTY3JvbGxYOiBmYWxzZSxcbiAgc3VwcHJlc3NTY3JvbGxZOiBmYWxzZSxcbiAgc3dpcGVFYXNpbmc6IHRydWUsXG4gIHVzZUJvdGhXaGVlbEF4ZXM6IGZhbHNlLFxuICB3aGVlbFByb3BhZ2F0aW9uOiB0cnVlLFxuICB3aGVlbFNwZWVkOiAxLFxufSk7IH07XG5cbnZhciBoYW5kbGVycyA9IHtcbiAgJ2NsaWNrLXJhaWwnOiBjbGlja1JhaWwsXG4gICdkcmFnLXRodW1iJzogZHJhZ1RodW1iLFxuICBrZXlib2FyZDoga2V5Ym9hcmQsXG4gIHdoZWVsOiB3aGVlbCxcbiAgdG91Y2g6IHRvdWNoLFxufTtcblxudmFyIFBlcmZlY3RTY3JvbGxiYXIgPSBmdW5jdGlvbiBQZXJmZWN0U2Nyb2xsYmFyKGVsZW1lbnQsIHVzZXJTZXR0aW5ncykge1xuICB2YXIgdGhpcyQxID0gdGhpcztcbiAgaWYgKCB1c2VyU2V0dGluZ3MgPT09IHZvaWQgMCApIHVzZXJTZXR0aW5ncyA9IHt9O1xuXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcbiAgfVxuXG4gIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5ub2RlTmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignbm8gZWxlbWVudCBpcyBzcGVjaWZpZWQgdG8gaW5pdGlhbGl6ZSBQZXJmZWN0U2Nyb2xsYmFyJyk7XG4gIH1cblxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMubWFpbik7XG5cbiAgdGhpcy5zZXR0aW5ncyA9IGRlZmF1bHRTZXR0aW5ncygpO1xuICBmb3IgKHZhciBrZXkgaW4gdXNlclNldHRpbmdzKSB7XG4gICAgdGhpcyQxLnNldHRpbmdzW2tleV0gPSB1c2VyU2V0dGluZ3Nba2V5XTtcbiAgfVxuXG4gIHRoaXMuY29udGFpbmVyV2lkdGggPSBudWxsO1xuICB0aGlzLmNvbnRhaW5lckhlaWdodCA9IG51bGw7XG4gIHRoaXMuY29udGVudFdpZHRoID0gbnVsbDtcbiAgdGhpcy5jb250ZW50SGVpZ2h0ID0gbnVsbDtcblxuICB2YXIgZm9jdXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzLnN0YXRlLmZvY3VzKTsgfTtcbiAgdmFyIGJsdXIgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xzLnN0YXRlLmZvY3VzKTsgfTtcblxuICB0aGlzLmlzUnRsID0gZ2V0KGVsZW1lbnQpLmRpcmVjdGlvbiA9PT0gJ3J0bCc7XG4gIHRoaXMuaXNOZWdhdGl2ZVNjcm9sbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9yaWdpbmFsU2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICBlbGVtZW50LnNjcm9sbExlZnQgPSAtMTtcbiAgICByZXN1bHQgPSBlbGVtZW50LnNjcm9sbExlZnQgPCAwO1xuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IG9yaWdpbmFsU2Nyb2xsTGVmdDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KSgpO1xuICB0aGlzLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCA9IHRoaXMuaXNOZWdhdGl2ZVNjcm9sbFxuICAgID8gZWxlbWVudC5zY3JvbGxXaWR0aCAtIGVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICA6IDA7XG4gIHRoaXMuZXZlbnQgPSBuZXcgRXZlbnRNYW5hZ2VyKCk7XG4gIHRoaXMub3duZXJEb2N1bWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudDtcblxuICB0aGlzLnNjcm9sbGJhclhSYWlsID0gZGl2KGNscy5lbGVtZW50LnJhaWwoJ3gnKSk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zY3JvbGxiYXJYUmFpbCk7XG4gIHRoaXMuc2Nyb2xsYmFyWCA9IGRpdihjbHMuZWxlbWVudC50aHVtYigneCcpKTtcbiAgdGhpcy5zY3JvbGxiYXJYUmFpbC5hcHBlbmRDaGlsZCh0aGlzLnNjcm9sbGJhclgpO1xuICB0aGlzLnNjcm9sbGJhclguc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuICB0aGlzLmV2ZW50LmJpbmQodGhpcy5zY3JvbGxiYXJYLCAnZm9jdXMnLCBmb2N1cyk7XG4gIHRoaXMuZXZlbnQuYmluZCh0aGlzLnNjcm9sbGJhclgsICdibHVyJywgYmx1cik7XG4gIHRoaXMuc2Nyb2xsYmFyWEFjdGl2ZSA9IG51bGw7XG4gIHRoaXMuc2Nyb2xsYmFyWFdpZHRoID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJYTGVmdCA9IG51bGw7XG4gIHZhciByYWlsWFN0eWxlID0gZ2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwpO1xuICB0aGlzLnNjcm9sbGJhclhCb3R0b20gPSBwYXJzZUludChyYWlsWFN0eWxlLmJvdHRvbSwgMTApO1xuICBpZiAoaXNOYU4odGhpcy5zY3JvbGxiYXJYQm90dG9tKSkge1xuICAgIHRoaXMuaXNTY3JvbGxiYXJYVXNpbmdCb3R0b20gPSBmYWxzZTtcbiAgICB0aGlzLnNjcm9sbGJhclhUb3AgPSB0b0ludChyYWlsWFN0eWxlLnRvcCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pc1Njcm9sbGJhclhVc2luZ0JvdHRvbSA9IHRydWU7XG4gIH1cbiAgdGhpcy5yYWlsQm9yZGVyWFdpZHRoID1cbiAgICB0b0ludChyYWlsWFN0eWxlLmJvcmRlckxlZnRXaWR0aCkgKyB0b0ludChyYWlsWFN0eWxlLmJvcmRlclJpZ2h0V2lkdGgpO1xuICAvLyBTZXQgcmFpbCB0byBkaXNwbGF5OmJsb2NrIHRvIGNhbGN1bGF0ZSBtYXJnaW5zXG4gIHNldCh0aGlzLnNjcm9sbGJhclhSYWlsLCB7IGRpc3BsYXk6ICdibG9jaycgfSk7XG4gIHRoaXMucmFpbFhNYXJnaW5XaWR0aCA9XG4gICAgdG9JbnQocmFpbFhTdHlsZS5tYXJnaW5MZWZ0KSArIHRvSW50KHJhaWxYU3R5bGUubWFyZ2luUmlnaHQpO1xuICBzZXQodGhpcy5zY3JvbGxiYXJYUmFpbCwgeyBkaXNwbGF5OiAnJyB9KTtcbiAgdGhpcy5yYWlsWFdpZHRoID0gbnVsbDtcbiAgdGhpcy5yYWlsWFJhdGlvID0gbnVsbDtcblxuICB0aGlzLnNjcm9sbGJhcllSYWlsID0gZGl2KGNscy5lbGVtZW50LnJhaWwoJ3knKSk7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zY3JvbGxiYXJZUmFpbCk7XG4gIHRoaXMuc2Nyb2xsYmFyWSA9IGRpdihjbHMuZWxlbWVudC50aHVtYigneScpKTtcbiAgdGhpcy5zY3JvbGxiYXJZUmFpbC5hcHBlbmRDaGlsZCh0aGlzLnNjcm9sbGJhclkpO1xuICB0aGlzLnNjcm9sbGJhclkuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuICB0aGlzLmV2ZW50LmJpbmQodGhpcy5zY3JvbGxiYXJZLCAnZm9jdXMnLCBmb2N1cyk7XG4gIHRoaXMuZXZlbnQuYmluZCh0aGlzLnNjcm9sbGJhclksICdibHVyJywgYmx1cik7XG4gIHRoaXMuc2Nyb2xsYmFyWUFjdGl2ZSA9IG51bGw7XG4gIHRoaXMuc2Nyb2xsYmFyWUhlaWdodCA9IG51bGw7XG4gIHRoaXMuc2Nyb2xsYmFyWVRvcCA9IG51bGw7XG4gIHZhciByYWlsWVN0eWxlID0gZ2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwpO1xuICB0aGlzLnNjcm9sbGJhcllSaWdodCA9IHBhcnNlSW50KHJhaWxZU3R5bGUucmlnaHQsIDEwKTtcbiAgaWYgKGlzTmFOKHRoaXMuc2Nyb2xsYmFyWVJpZ2h0KSkge1xuICAgIHRoaXMuaXNTY3JvbGxiYXJZVXNpbmdSaWdodCA9IGZhbHNlO1xuICAgIHRoaXMuc2Nyb2xsYmFyWUxlZnQgPSB0b0ludChyYWlsWVN0eWxlLmxlZnQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuaXNTY3JvbGxiYXJZVXNpbmdSaWdodCA9IHRydWU7XG4gIH1cbiAgdGhpcy5zY3JvbGxiYXJZT3V0ZXJXaWR0aCA9IHRoaXMuaXNSdGwgPyBvdXRlcldpZHRoKHRoaXMuc2Nyb2xsYmFyWSkgOiBudWxsO1xuICB0aGlzLnJhaWxCb3JkZXJZV2lkdGggPVxuICAgIHRvSW50KHJhaWxZU3R5bGUuYm9yZGVyVG9wV2lkdGgpICsgdG9JbnQocmFpbFlTdHlsZS5ib3JkZXJCb3R0b21XaWR0aCk7XG4gIHNldCh0aGlzLnNjcm9sbGJhcllSYWlsLCB7IGRpc3BsYXk6ICdibG9jaycgfSk7XG4gIHRoaXMucmFpbFlNYXJnaW5IZWlnaHQgPVxuICAgIHRvSW50KHJhaWxZU3R5bGUubWFyZ2luVG9wKSArIHRvSW50KHJhaWxZU3R5bGUubWFyZ2luQm90dG9tKTtcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwsIHsgZGlzcGxheTogJycgfSk7XG4gIHRoaXMucmFpbFlIZWlnaHQgPSBudWxsO1xuICB0aGlzLnJhaWxZUmF0aW8gPSBudWxsO1xuXG4gIHRoaXMucmVhY2ggPSB7XG4gICAgeDpcbiAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA8PSAwXG4gICAgICAgID8gJ3N0YXJ0J1xuICAgICAgICA6IGVsZW1lbnQuc2Nyb2xsTGVmdCA+PSB0aGlzLmNvbnRlbnRXaWR0aCAtIHRoaXMuY29udGFpbmVyV2lkdGhcbiAgICAgICAgICA/ICdlbmQnXG4gICAgICAgICAgOiBudWxsLFxuICAgIHk6XG4gICAgICBlbGVtZW50LnNjcm9sbFRvcCA8PSAwXG4gICAgICAgID8gJ3N0YXJ0J1xuICAgICAgICA6IGVsZW1lbnQuc2Nyb2xsVG9wID49IHRoaXMuY29udGVudEhlaWdodCAtIHRoaXMuY29udGFpbmVySGVpZ2h0XG4gICAgICAgICAgPyAnZW5kJ1xuICAgICAgICAgIDogbnVsbCxcbiAgfTtcblxuICB0aGlzLmlzQWxpdmUgPSB0cnVlO1xuXG4gIHRoaXMuc2V0dGluZ3MuaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlck5hbWUpIHsgcmV0dXJuIGhhbmRsZXJzW2hhbmRsZXJOYW1lXSh0aGlzJDEpOyB9KTtcblxuICB0aGlzLmxhc3RTY3JvbGxUb3AgPSBNYXRoLmZsb29yKGVsZW1lbnQuc2Nyb2xsVG9wKTsgLy8gZm9yIG9uU2Nyb2xsIG9ubHlcbiAgdGhpcy5sYXN0U2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDsgLy8gZm9yIG9uU2Nyb2xsIG9ubHlcbiAgdGhpcy5ldmVudC5iaW5kKHRoaXMuZWxlbWVudCwgJ3Njcm9sbCcsIGZ1bmN0aW9uIChlKSB7IHJldHVybiB0aGlzJDEub25TY3JvbGwoZSk7IH0pO1xuICB1cGRhdGVHZW9tZXRyeSh0aGlzKTtcbn07XG5cblBlcmZlY3RTY3JvbGxiYXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAoKSB7XG4gIGlmICghdGhpcy5pc0FsaXZlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gUmVjYWxjdWF0ZSBuZWdhdGl2ZSBzY3JvbGxMZWZ0IGFkanVzdG1lbnRcbiAgdGhpcy5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgPSB0aGlzLmlzTmVnYXRpdmVTY3JvbGxcbiAgICA/IHRoaXMuZWxlbWVudC5zY3JvbGxXaWR0aCAtIHRoaXMuZWxlbWVudC5jbGllbnRXaWR0aFxuICAgIDogMDtcblxuICAvLyBSZWNhbGN1bGF0ZSByYWlsIG1hcmdpbnNcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwsIHsgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwsIHsgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgdGhpcy5yYWlsWE1hcmdpbldpZHRoID1cbiAgICB0b0ludChnZXQodGhpcy5zY3JvbGxiYXJYUmFpbCkubWFyZ2luTGVmdCkgK1xuICAgIHRvSW50KGdldCh0aGlzLnNjcm9sbGJhclhSYWlsKS5tYXJnaW5SaWdodCk7XG4gIHRoaXMucmFpbFlNYXJnaW5IZWlnaHQgPVxuICAgIHRvSW50KGdldCh0aGlzLnNjcm9sbGJhcllSYWlsKS5tYXJnaW5Ub3ApICtcbiAgICB0b0ludChnZXQodGhpcy5zY3JvbGxiYXJZUmFpbCkubWFyZ2luQm90dG9tKTtcblxuICAvLyBIaWRlIHNjcm9sbGJhcnMgbm90IHRvIGFmZmVjdCBzY3JvbGxXaWR0aCBhbmQgc2Nyb2xsSGVpZ2h0XG4gIHNldCh0aGlzLnNjcm9sbGJhclhSYWlsLCB7IGRpc3BsYXk6ICdub25lJyB9KTtcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwsIHsgZGlzcGxheTogJ25vbmUnIH0pO1xuXG4gIHVwZGF0ZUdlb21ldHJ5KHRoaXMpO1xuXG4gIHByb2Nlc3NTY3JvbGxEaWZmKHRoaXMsICd0b3AnLCAwLCBmYWxzZSwgdHJ1ZSk7XG4gIHByb2Nlc3NTY3JvbGxEaWZmKHRoaXMsICdsZWZ0JywgMCwgZmFsc2UsIHRydWUpO1xuXG4gIHNldCh0aGlzLnNjcm9sbGJhclhSYWlsLCB7IGRpc3BsYXk6ICcnIH0pO1xuICBzZXQodGhpcy5zY3JvbGxiYXJZUmFpbCwgeyBkaXNwbGF5OiAnJyB9KTtcbn07XG5cblBlcmZlY3RTY3JvbGxiYXIucHJvdG90eXBlLm9uU2Nyb2xsID0gZnVuY3Rpb24gb25TY3JvbGwgKGUpIHtcbiAgaWYgKCF0aGlzLmlzQWxpdmUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB1cGRhdGVHZW9tZXRyeSh0aGlzKTtcbiAgcHJvY2Vzc1Njcm9sbERpZmYodGhpcywgJ3RvcCcsIHRoaXMuZWxlbWVudC5zY3JvbGxUb3AgLSB0aGlzLmxhc3RTY3JvbGxUb3ApO1xuICBwcm9jZXNzU2Nyb2xsRGlmZihcbiAgICB0aGlzLFxuICAgICdsZWZ0JyxcbiAgICB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdCAtIHRoaXMubGFzdFNjcm9sbExlZnRcbiAgKTtcblxuICB0aGlzLmxhc3RTY3JvbGxUb3AgPSBNYXRoLmZsb29yKHRoaXMuZWxlbWVudC5zY3JvbGxUb3ApO1xuICB0aGlzLmxhc3RTY3JvbGxMZWZ0ID0gdGhpcy5lbGVtZW50LnNjcm9sbExlZnQ7XG59O1xuXG5QZXJmZWN0U2Nyb2xsYmFyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIGlmICghdGhpcy5pc0FsaXZlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5ldmVudC51bmJpbmRBbGwoKTtcbiAgcmVtb3ZlKHRoaXMuc2Nyb2xsYmFyWCk7XG4gIHJlbW92ZSh0aGlzLnNjcm9sbGJhclkpO1xuICByZW1vdmUodGhpcy5zY3JvbGxiYXJYUmFpbCk7XG4gIHJlbW92ZSh0aGlzLnNjcm9sbGJhcllSYWlsKTtcbiAgdGhpcy5yZW1vdmVQc0NsYXNzZXMoKTtcblxuICAvLyB1bnNldCBlbGVtZW50c1xuICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhclggPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhclkgPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhclhSYWlsID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJZUmFpbCA9IG51bGw7XG5cbiAgdGhpcy5pc0FsaXZlID0gZmFsc2U7XG59O1xuXG5QZXJmZWN0U2Nyb2xsYmFyLnByb3RvdHlwZS5yZW1vdmVQc0NsYXNzZXMgPSBmdW5jdGlvbiByZW1vdmVQc0NsYXNzZXMgKCkge1xuICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lID0gdGhpcy5lbGVtZW50LmNsYXNzTmFtZVxuICAgIC5zcGxpdCgnICcpXG4gICAgLmZpbHRlcihmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gIW5hbWUubWF0Y2goL15wcyhbLV9dLit8KSQvKTsgfSlcbiAgICAuam9pbignICcpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGVyZmVjdFNjcm9sbGJhcjtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIvKiEgcGFjZSAxLjAuMCAqL1xuKGZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGcsaCxpLGosayxsLG0sbixvLHAscSxyLHMsdCx1LHYsdyx4LHkseixBLEIsQyxELEUsRixHLEgsSSxKLEssTCxNLE4sTyxQLFEsUixTLFQsVSxWLFcsWD1bXS5zbGljZSxZPXt9Lmhhc093blByb3BlcnR5LFo9ZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKCl7dGhpcy5jb25zdHJ1Y3Rvcj1hfWZvcih2YXIgZCBpbiBiKVkuY2FsbChiLGQpJiYoYVtkXT1iW2RdKTtyZXR1cm4gYy5wcm90b3R5cGU9Yi5wcm90b3R5cGUsYS5wcm90b3R5cGU9bmV3IGMsYS5fX3N1cGVyX189Yi5wcm90b3R5cGUsYX0sJD1bXS5pbmRleE9mfHxmdW5jdGlvbihhKXtmb3IodmFyIGI9MCxjPXRoaXMubGVuZ3RoO2M+YjtiKyspaWYoYiBpbiB0aGlzJiZ0aGlzW2JdPT09YSlyZXR1cm4gYjtyZXR1cm4tMX07Zm9yKHU9e2NhdGNodXBUaW1lOjEwMCxpbml0aWFsUmF0ZTouMDMsbWluVGltZToyNTAsZ2hvc3RUaW1lOjEwMCxtYXhQcm9ncmVzc1BlckZyYW1lOjIwLGVhc2VGYWN0b3I6MS4yNSxzdGFydE9uUGFnZUxvYWQ6ITAscmVzdGFydE9uUHVzaFN0YXRlOiEwLHJlc3RhcnRPblJlcXVlc3RBZnRlcjo1MDAsdGFyZ2V0OlwiYm9keVwiLGVsZW1lbnRzOntjaGVja0ludGVydmFsOjEwMCxzZWxlY3RvcnM6W1wiYm9keVwiXX0sZXZlbnRMYWc6e21pblNhbXBsZXM6MTAsc2FtcGxlQ291bnQ6MyxsYWdUaHJlc2hvbGQ6M30sYWpheDp7dHJhY2tNZXRob2RzOltcIkdFVFwiXSx0cmFja1dlYlNvY2tldHM6ITAsaWdub3JlVVJMczpbXX19LEM9ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4gbnVsbCE9KGE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHBlcmZvcm1hbmNlJiZudWxsIT09cGVyZm9ybWFuY2UmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHBlcmZvcm1hbmNlLm5vdz9wZXJmb3JtYW5jZS5ub3coKTp2b2lkIDApP2E6K25ldyBEYXRlfSxFPXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSx0PXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZXx8d2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lLG51bGw9PUUmJihFPWZ1bmN0aW9uKGEpe3JldHVybiBzZXRUaW1lb3V0KGEsNTApfSx0PWZ1bmN0aW9uKGEpe3JldHVybiBjbGVhclRpbWVvdXQoYSl9KSxHPWZ1bmN0aW9uKGEpe3ZhciBiLGM7cmV0dXJuIGI9QygpLChjPWZ1bmN0aW9uKCl7dmFyIGQ7cmV0dXJuIGQ9QygpLWIsZD49MzM/KGI9QygpLGEoZCxmdW5jdGlvbigpe3JldHVybiBFKGMpfSkpOnNldFRpbWVvdXQoYywzMy1kKX0pKCl9LEY9ZnVuY3Rpb24oKXt2YXIgYSxiLGM7cmV0dXJuIGM9YXJndW1lbnRzWzBdLGI9YXJndW1lbnRzWzFdLGE9Mzw9YXJndW1lbnRzLmxlbmd0aD9YLmNhbGwoYXJndW1lbnRzLDIpOltdLFwiZnVuY3Rpb25cIj09dHlwZW9mIGNbYl0/Y1tiXS5hcHBseShjLGEpOmNbYl19LHY9ZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlLGYsZztmb3IoYj1hcmd1bWVudHNbMF0sZD0yPD1hcmd1bWVudHMubGVuZ3RoP1guY2FsbChhcmd1bWVudHMsMSk6W10sZj0wLGc9ZC5sZW5ndGg7Zz5mO2YrKylpZihjPWRbZl0pZm9yKGEgaW4gYylZLmNhbGwoYyxhKSYmKGU9Y1thXSxudWxsIT1iW2FdJiZcIm9iamVjdFwiPT10eXBlb2YgYlthXSYmbnVsbCE9ZSYmXCJvYmplY3RcIj09dHlwZW9mIGU/dihiW2FdLGUpOmJbYV09ZSk7cmV0dXJuIGJ9LHE9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZjtmb3IoYz1iPTAsZT0wLGY9YS5sZW5ndGg7Zj5lO2UrKylkPWFbZV0sYys9TWF0aC5hYnMoZCksYisrO3JldHVybiBjL2J9LHg9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU7aWYobnVsbD09YSYmKGE9XCJvcHRpb25zXCIpLG51bGw9PWImJihiPSEwKSxlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wYWNlLVwiK2ErXCJdXCIpKXtpZihjPWUuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYWNlLVwiK2EpLCFiKXJldHVybiBjO3RyeXtyZXR1cm4gSlNPTi5wYXJzZShjKX1jYXRjaChmKXtyZXR1cm4gZD1mLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBjb25zb2xlJiZudWxsIT09Y29uc29sZT9jb25zb2xlLmVycm9yKFwiRXJyb3IgcGFyc2luZyBpbmxpbmUgcGFjZSBvcHRpb25zXCIsZCk6dm9pZCAwfX19LGc9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7fXJldHVybiBhLnByb3RvdHlwZS5vbj1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZTtyZXR1cm4gbnVsbD09ZCYmKGQ9ITEpLG51bGw9PXRoaXMuYmluZGluZ3MmJih0aGlzLmJpbmRpbmdzPXt9KSxudWxsPT0oZT10aGlzLmJpbmRpbmdzKVthXSYmKGVbYV09W10pLHRoaXMuYmluZGluZ3NbYV0ucHVzaCh7aGFuZGxlcjpiLGN0eDpjLG9uY2U6ZH0pfSxhLnByb3RvdHlwZS5vbmNlPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vbihhLGIsYywhMCl9LGEucHJvdG90eXBlLm9mZj1mdW5jdGlvbihhLGIpe3ZhciBjLGQsZTtpZihudWxsIT0obnVsbCE9KGQ9dGhpcy5iaW5kaW5ncyk/ZFthXTp2b2lkIDApKXtpZihudWxsPT1iKXJldHVybiBkZWxldGUgdGhpcy5iaW5kaW5nc1thXTtmb3IoYz0wLGU9W107Yzx0aGlzLmJpbmRpbmdzW2FdLmxlbmd0aDspZS5wdXNoKHRoaXMuYmluZGluZ3NbYV1bY10uaGFuZGxlcj09PWI/dGhpcy5iaW5kaW5nc1thXS5zcGxpY2UoYywxKTpjKyspO3JldHVybiBlfX0sYS5wcm90b3R5cGUudHJpZ2dlcj1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnLGgsaTtpZihjPWFyZ3VtZW50c1swXSxhPTI8PWFyZ3VtZW50cy5sZW5ndGg/WC5jYWxsKGFyZ3VtZW50cywxKTpbXSxudWxsIT0oZz10aGlzLmJpbmRpbmdzKT9nW2NdOnZvaWQgMCl7Zm9yKGU9MCxpPVtdO2U8dGhpcy5iaW5kaW5nc1tjXS5sZW5ndGg7KWg9dGhpcy5iaW5kaW5nc1tjXVtlXSxkPWguaGFuZGxlcixiPWguY3R4LGY9aC5vbmNlLGQuYXBwbHkobnVsbCE9Yj9iOnRoaXMsYSksaS5wdXNoKGY/dGhpcy5iaW5kaW5nc1tjXS5zcGxpY2UoZSwxKTplKyspO3JldHVybiBpfX0sYX0oKSxqPXdpbmRvdy5QYWNlfHx7fSx3aW5kb3cuUGFjZT1qLHYoaixnLnByb3RvdHlwZSksRD1qLm9wdGlvbnM9dih7fSx1LHdpbmRvdy5wYWNlT3B0aW9ucyx4KCkpLFU9W1wiYWpheFwiLFwiZG9jdW1lbnRcIixcImV2ZW50TGFnXCIsXCJlbGVtZW50c1wiXSxRPTAsUz1VLmxlbmd0aDtTPlE7USsrKUs9VVtRXSxEW0tdPT09ITAmJihEW0tdPXVbS10pO2k9ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYigpe3JldHVybiBWPWIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1yZXR1cm4gWihiLGEpLGJ9KEVycm9yKSxiPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe3RoaXMucHJvZ3Jlc3M9MH1yZXR1cm4gYS5wcm90b3R5cGUuZ2V0RWxlbWVudD1mdW5jdGlvbigpe3ZhciBhO2lmKG51bGw9PXRoaXMuZWwpe2lmKGE9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihELnRhcmdldCksIWEpdGhyb3cgbmV3IGk7dGhpcy5lbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHRoaXMuZWwuY2xhc3NOYW1lPVwicGFjZSBwYWNlLWFjdGl2ZVwiLGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lPWRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoL3BhY2UtZG9uZS9nLFwiXCIpLGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lKz1cIiBwYWNlLXJ1bm5pbmdcIix0aGlzLmVsLmlubmVySFRNTD0nPGRpdiBjbGFzcz1cInBhY2UtcHJvZ3Jlc3NcIj5cXG4gIDxkaXYgY2xhc3M9XCJwYWNlLXByb2dyZXNzLWlubmVyXCI+PC9kaXY+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cInBhY2UtYWN0aXZpdHlcIj48L2Rpdj4nLG51bGwhPWEuZmlyc3RDaGlsZD9hLmluc2VydEJlZm9yZSh0aGlzLmVsLGEuZmlyc3RDaGlsZCk6YS5hcHBlbmRDaGlsZCh0aGlzLmVsKX1yZXR1cm4gdGhpcy5lbH0sYS5wcm90b3R5cGUuZmluaXNoPWZ1bmN0aW9uKCl7dmFyIGE7cmV0dXJuIGE9dGhpcy5nZXRFbGVtZW50KCksYS5jbGFzc05hbWU9YS5jbGFzc05hbWUucmVwbGFjZShcInBhY2UtYWN0aXZlXCIsXCJcIiksYS5jbGFzc05hbWUrPVwiIHBhY2UtaW5hY3RpdmVcIixkb2N1bWVudC5ib2R5LmNsYXNzTmFtZT1kb2N1bWVudC5ib2R5LmNsYXNzTmFtZS5yZXBsYWNlKFwicGFjZS1ydW5uaW5nXCIsXCJcIiksZG9jdW1lbnQuYm9keS5jbGFzc05hbWUrPVwiIHBhY2UtZG9uZVwifSxhLnByb3RvdHlwZS51cGRhdGU9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHJvZ3Jlc3M9YSx0aGlzLnJlbmRlcigpfSxhLnByb3RvdHlwZS5kZXN0cm95PWZ1bmN0aW9uKCl7dHJ5e3RoaXMuZ2V0RWxlbWVudCgpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5nZXRFbGVtZW50KCkpfWNhdGNoKGEpe2k9YX1yZXR1cm4gdGhpcy5lbD12b2lkIDB9LGEucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnO2lmKG51bGw9PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRC50YXJnZXQpKXJldHVybiExO2ZvcihhPXRoaXMuZ2V0RWxlbWVudCgpLGQ9XCJ0cmFuc2xhdGUzZChcIit0aGlzLnByb2dyZXNzK1wiJSwgMCwgMClcIixnPVtcIndlYmtpdFRyYW5zZm9ybVwiLFwibXNUcmFuc2Zvcm1cIixcInRyYW5zZm9ybVwiXSxlPTAsZj1nLmxlbmd0aDtmPmU7ZSsrKWI9Z1tlXSxhLmNoaWxkcmVuWzBdLnN0eWxlW2JdPWQ7cmV0dXJuKCF0aGlzLmxhc3RSZW5kZXJlZFByb2dyZXNzfHx0aGlzLmxhc3RSZW5kZXJlZFByb2dyZXNzfDAhPT10aGlzLnByb2dyZXNzfDApJiYoYS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2dyZXNzLXRleHRcIixcIlwiKygwfHRoaXMucHJvZ3Jlc3MpK1wiJVwiKSx0aGlzLnByb2dyZXNzPj0xMDA/Yz1cIjk5XCI6KGM9dGhpcy5wcm9ncmVzczwxMD9cIjBcIjpcIlwiLGMrPTB8dGhpcy5wcm9ncmVzcyksYS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2dyZXNzXCIsXCJcIitjKSksdGhpcy5sYXN0UmVuZGVyZWRQcm9ncmVzcz10aGlzLnByb2dyZXNzfSxhLnByb3RvdHlwZS5kb25lPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJvZ3Jlc3M+PTEwMH0sYX0oKSxoPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe3RoaXMuYmluZGluZ3M9e319cmV0dXJuIGEucHJvdG90eXBlLnRyaWdnZXI9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnO2lmKG51bGwhPXRoaXMuYmluZGluZ3NbYV0pe2ZvcihmPXRoaXMuYmluZGluZ3NbYV0sZz1bXSxkPTAsZT1mLmxlbmd0aDtlPmQ7ZCsrKWM9ZltkXSxnLnB1c2goYy5jYWxsKHRoaXMsYikpO3JldHVybiBnfX0sYS5wcm90b3R5cGUub249ZnVuY3Rpb24oYSxiKXt2YXIgYztyZXR1cm4gbnVsbD09KGM9dGhpcy5iaW5kaW5ncylbYV0mJihjW2FdPVtdKSx0aGlzLmJpbmRpbmdzW2FdLnB1c2goYil9LGF9KCksUD13aW5kb3cuWE1MSHR0cFJlcXVlc3QsTz13aW5kb3cuWERvbWFpblJlcXVlc3QsTj13aW5kb3cuV2ViU29ja2V0LHc9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZjtmPVtdO2ZvcihkIGluIGIucHJvdG90eXBlKXRyeXtlPWIucHJvdG90eXBlW2RdLGYucHVzaChudWxsPT1hW2RdJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBlP2FbZF09ZTp2b2lkIDApfWNhdGNoKGcpe2M9Z31yZXR1cm4gZn0sQT1bXSxqLmlnbm9yZT1mdW5jdGlvbigpe3ZhciBhLGIsYztyZXR1cm4gYj1hcmd1bWVudHNbMF0sYT0yPD1hcmd1bWVudHMubGVuZ3RoP1guY2FsbChhcmd1bWVudHMsMSk6W10sQS51bnNoaWZ0KFwiaWdub3JlXCIpLGM9Yi5hcHBseShudWxsLGEpLEEuc2hpZnQoKSxjfSxqLnRyYWNrPWZ1bmN0aW9uKCl7dmFyIGEsYixjO3JldHVybiBiPWFyZ3VtZW50c1swXSxhPTI8PWFyZ3VtZW50cy5sZW5ndGg/WC5jYWxsKGFyZ3VtZW50cywxKTpbXSxBLnVuc2hpZnQoXCJ0cmFja1wiKSxjPWIuYXBwbHkobnVsbCxhKSxBLnNoaWZ0KCksY30sSj1mdW5jdGlvbihhKXt2YXIgYjtpZihudWxsPT1hJiYoYT1cIkdFVFwiKSxcInRyYWNrXCI9PT1BWzBdKXJldHVyblwiZm9yY2VcIjtpZighQS5sZW5ndGgmJkQuYWpheCl7aWYoXCJzb2NrZXRcIj09PWEmJkQuYWpheC50cmFja1dlYlNvY2tldHMpcmV0dXJuITA7aWYoYj1hLnRvVXBwZXJDYXNlKCksJC5jYWxsKEQuYWpheC50cmFja01ldGhvZHMsYik+PTApcmV0dXJuITB9cmV0dXJuITF9LGs9ZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYigpe3ZhciBhLGM9dGhpcztiLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5hcHBseSh0aGlzLGFyZ3VtZW50cyksYT1mdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gYj1hLm9wZW4sYS5vcGVuPWZ1bmN0aW9uKGQsZSl7cmV0dXJuIEooZCkmJmMudHJpZ2dlcihcInJlcXVlc3RcIix7dHlwZTpkLHVybDplLHJlcXVlc3Q6YX0pLGIuYXBwbHkoYSxhcmd1bWVudHMpfX0sd2luZG93LlhNTEh0dHBSZXF1ZXN0PWZ1bmN0aW9uKGIpe3ZhciBjO3JldHVybiBjPW5ldyBQKGIpLGEoYyksY307dHJ5e3cod2luZG93LlhNTEh0dHBSZXF1ZXN0LFApfWNhdGNoKGQpe31pZihudWxsIT1PKXt3aW5kb3cuWERvbWFpblJlcXVlc3Q9ZnVuY3Rpb24oKXt2YXIgYjtyZXR1cm4gYj1uZXcgTyxhKGIpLGJ9O3RyeXt3KHdpbmRvdy5YRG9tYWluUmVxdWVzdCxPKX1jYXRjaChkKXt9fWlmKG51bGwhPU4mJkQuYWpheC50cmFja1dlYlNvY2tldHMpe3dpbmRvdy5XZWJTb2NrZXQ9ZnVuY3Rpb24oYSxiKXt2YXIgZDtyZXR1cm4gZD1udWxsIT1iP25ldyBOKGEsYik6bmV3IE4oYSksSihcInNvY2tldFwiKSYmYy50cmlnZ2VyKFwicmVxdWVzdFwiLHt0eXBlOlwic29ja2V0XCIsdXJsOmEscHJvdG9jb2xzOmIscmVxdWVzdDpkfSksZH07dHJ5e3cod2luZG93LldlYlNvY2tldCxOKX1jYXRjaChkKXt9fX1yZXR1cm4gWihiLGEpLGJ9KGgpLFI9bnVsbCx5PWZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PVImJihSPW5ldyBrKSxSfSxJPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlO2ZvcihlPUQuYWpheC5pZ25vcmVVUkxzLGM9MCxkPWUubGVuZ3RoO2Q+YztjKyspaWYoYj1lW2NdLFwic3RyaW5nXCI9PXR5cGVvZiBiKXtpZigtMSE9PWEuaW5kZXhPZihiKSlyZXR1cm4hMH1lbHNlIGlmKGIudGVzdChhKSlyZXR1cm4hMDtyZXR1cm4hMX0seSgpLm9uKFwicmVxdWVzdFwiLGZ1bmN0aW9uKGIpe3ZhciBjLGQsZSxmLGc7cmV0dXJuIGY9Yi50eXBlLGU9Yi5yZXF1ZXN0LGc9Yi51cmwsSShnKT92b2lkIDA6ai5ydW5uaW5nfHxELnJlc3RhcnRPblJlcXVlc3RBZnRlcj09PSExJiZcImZvcmNlXCIhPT1KKGYpP3ZvaWQgMDooZD1hcmd1bWVudHMsYz1ELnJlc3RhcnRPblJlcXVlc3RBZnRlcnx8MCxcImJvb2xlYW5cIj09dHlwZW9mIGMmJihjPTApLHNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgYixjLGcsaCxpLGs7aWYoYj1cInNvY2tldFwiPT09Zj9lLnJlYWR5U3RhdGU8MjowPChoPWUucmVhZHlTdGF0ZSkmJjQ+aCl7Zm9yKGoucmVzdGFydCgpLGk9ai5zb3VyY2VzLGs9W10sYz0wLGc9aS5sZW5ndGg7Zz5jO2MrKyl7aWYoSz1pW2NdLEsgaW5zdGFuY2VvZiBhKXtLLndhdGNoLmFwcGx5KEssZCk7YnJlYWt9ay5wdXNoKHZvaWQgMCl9cmV0dXJuIGt9fSxjKSl9KSxhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe3ZhciBhPXRoaXM7dGhpcy5lbGVtZW50cz1bXSx5KCkub24oXCJyZXF1ZXN0XCIsZnVuY3Rpb24oKXtyZXR1cm4gYS53YXRjaC5hcHBseShhLGFyZ3VtZW50cyl9KX1yZXR1cm4gYS5wcm90b3R5cGUud2F0Y2g9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU7cmV0dXJuIGQ9YS50eXBlLGI9YS5yZXF1ZXN0LGU9YS51cmwsSShlKT92b2lkIDA6KGM9XCJzb2NrZXRcIj09PWQ/bmV3IG4oYik6bmV3IG8oYiksdGhpcy5lbGVtZW50cy5wdXNoKGMpKX0sYX0oKSxvPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhKXt2YXIgYixjLGQsZSxmLGcsaD10aGlzO2lmKHRoaXMucHJvZ3Jlc3M9MCxudWxsIT13aW5kb3cuUHJvZ3Jlc3NFdmVudClmb3IoYz1udWxsLGEuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGgucHJvZ3Jlc3M9YS5sZW5ndGhDb21wdXRhYmxlPzEwMCphLmxvYWRlZC9hLnRvdGFsOmgucHJvZ3Jlc3MrKDEwMC1oLnByb2dyZXNzKS8yfSwhMSksZz1bXCJsb2FkXCIsXCJhYm9ydFwiLFwidGltZW91dFwiLFwiZXJyb3JcIl0sZD0wLGU9Zy5sZW5ndGg7ZT5kO2QrKyliPWdbZF0sYS5hZGRFdmVudExpc3RlbmVyKGIsZnVuY3Rpb24oKXtyZXR1cm4gaC5wcm9ncmVzcz0xMDB9LCExKTtlbHNlIGY9YS5vbnJlYWR5c3RhdGVjaGFuZ2UsYS5vbnJlYWR5c3RhdGVjaGFuZ2U9ZnVuY3Rpb24oKXt2YXIgYjtyZXR1cm4gMD09PShiPWEucmVhZHlTdGF0ZSl8fDQ9PT1iP2gucHJvZ3Jlc3M9MTAwOjM9PT1hLnJlYWR5U3RhdGUmJihoLnByb2dyZXNzPTUwKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBmP2YuYXBwbHkobnVsbCxhcmd1bWVudHMpOnZvaWQgMH19cmV0dXJuIGF9KCksbj1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSl7dmFyIGIsYyxkLGUsZj10aGlzO2Zvcih0aGlzLnByb2dyZXNzPTAsZT1bXCJlcnJvclwiLFwib3BlblwiXSxjPTAsZD1lLmxlbmd0aDtkPmM7YysrKWI9ZVtjXSxhLmFkZEV2ZW50TGlzdGVuZXIoYixmdW5jdGlvbigpe3JldHVybiBmLnByb2dyZXNzPTEwMH0sITEpfXJldHVybiBhfSgpLGQ9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEpe3ZhciBiLGMsZCxmO2ZvcihudWxsPT1hJiYoYT17fSksdGhpcy5lbGVtZW50cz1bXSxudWxsPT1hLnNlbGVjdG9ycyYmKGEuc2VsZWN0b3JzPVtdKSxmPWEuc2VsZWN0b3JzLGM9MCxkPWYubGVuZ3RoO2Q+YztjKyspYj1mW2NdLHRoaXMuZWxlbWVudHMucHVzaChuZXcgZShiKSl9cmV0dXJuIGF9KCksZT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSl7dGhpcy5zZWxlY3Rvcj1hLHRoaXMucHJvZ3Jlc3M9MCx0aGlzLmNoZWNrKCl9cmV0dXJuIGEucHJvdG90eXBlLmNoZWNrPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcztyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKT90aGlzLmRvbmUoKTpzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIGEuY2hlY2soKX0sRC5lbGVtZW50cy5jaGVja0ludGVydmFsKX0sYS5wcm90b3R5cGUuZG9uZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnByb2dyZXNzPTEwMH0sYX0oKSxjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYSgpe3ZhciBhLGIsYz10aGlzO3RoaXMucHJvZ3Jlc3M9bnVsbCE9KGI9dGhpcy5zdGF0ZXNbZG9jdW1lbnQucmVhZHlTdGF0ZV0pP2I6MTAwLGE9ZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlLGRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe3JldHVybiBudWxsIT1jLnN0YXRlc1tkb2N1bWVudC5yZWFkeVN0YXRlXSYmKGMucHJvZ3Jlc3M9Yy5zdGF0ZXNbZG9jdW1lbnQucmVhZHlTdGF0ZV0pLFwiZnVuY3Rpb25cIj09dHlwZW9mIGE/YS5hcHBseShudWxsLGFyZ3VtZW50cyk6dm9pZCAwfX1yZXR1cm4gYS5wcm90b3R5cGUuc3RhdGVzPXtsb2FkaW5nOjAsaW50ZXJhY3RpdmU6NTAsY29tcGxldGU6MTAwfSxhfSgpLGY9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7dmFyIGEsYixjLGQsZSxmPXRoaXM7dGhpcy5wcm9ncmVzcz0wLGE9MCxlPVtdLGQ9MCxjPUMoKSxiPXNldEludGVydmFsKGZ1bmN0aW9uKCl7dmFyIGc7cmV0dXJuIGc9QygpLWMtNTAsYz1DKCksZS5wdXNoKGcpLGUubGVuZ3RoPkQuZXZlbnRMYWcuc2FtcGxlQ291bnQmJmUuc2hpZnQoKSxhPXEoZSksKytkPj1ELmV2ZW50TGFnLm1pblNhbXBsZXMmJmE8RC5ldmVudExhZy5sYWdUaHJlc2hvbGQ/KGYucHJvZ3Jlc3M9MTAwLGNsZWFySW50ZXJ2YWwoYikpOmYucHJvZ3Jlc3M9MTAwKigzLyhhKzMpKX0sNTApfXJldHVybiBhfSgpLG09ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEpe3RoaXMuc291cmNlPWEsdGhpcy5sYXN0PXRoaXMuc2luY2VMYXN0VXBkYXRlPTAsdGhpcy5yYXRlPUQuaW5pdGlhbFJhdGUsdGhpcy5jYXRjaHVwPTAsdGhpcy5wcm9ncmVzcz10aGlzLmxhc3RQcm9ncmVzcz0wLG51bGwhPXRoaXMuc291cmNlJiYodGhpcy5wcm9ncmVzcz1GKHRoaXMuc291cmNlLFwicHJvZ3Jlc3NcIikpfXJldHVybiBhLnByb3RvdHlwZS50aWNrPWZ1bmN0aW9uKGEsYil7dmFyIGM7cmV0dXJuIG51bGw9PWImJihiPUYodGhpcy5zb3VyY2UsXCJwcm9ncmVzc1wiKSksYj49MTAwJiYodGhpcy5kb25lPSEwKSxiPT09dGhpcy5sYXN0P3RoaXMuc2luY2VMYXN0VXBkYXRlKz1hOih0aGlzLnNpbmNlTGFzdFVwZGF0ZSYmKHRoaXMucmF0ZT0oYi10aGlzLmxhc3QpL3RoaXMuc2luY2VMYXN0VXBkYXRlKSx0aGlzLmNhdGNodXA9KGItdGhpcy5wcm9ncmVzcykvRC5jYXRjaHVwVGltZSx0aGlzLnNpbmNlTGFzdFVwZGF0ZT0wLHRoaXMubGFzdD1iKSxiPnRoaXMucHJvZ3Jlc3MmJih0aGlzLnByb2dyZXNzKz10aGlzLmNhdGNodXAqYSksYz0xLU1hdGgucG93KHRoaXMucHJvZ3Jlc3MvMTAwLEQuZWFzZUZhY3RvciksdGhpcy5wcm9ncmVzcys9Yyp0aGlzLnJhdGUqYSx0aGlzLnByb2dyZXNzPU1hdGgubWluKHRoaXMubGFzdFByb2dyZXNzK0QubWF4UHJvZ3Jlc3NQZXJGcmFtZSx0aGlzLnByb2dyZXNzKSx0aGlzLnByb2dyZXNzPU1hdGgubWF4KDAsdGhpcy5wcm9ncmVzcyksdGhpcy5wcm9ncmVzcz1NYXRoLm1pbigxMDAsdGhpcy5wcm9ncmVzcyksdGhpcy5sYXN0UHJvZ3Jlc3M9dGhpcy5wcm9ncmVzcyx0aGlzLnByb2dyZXNzfSxhfSgpLEw9bnVsbCxIPW51bGwscj1udWxsLE09bnVsbCxwPW51bGwscz1udWxsLGoucnVubmluZz0hMSx6PWZ1bmN0aW9uKCl7cmV0dXJuIEQucmVzdGFydE9uUHVzaFN0YXRlP2oucmVzdGFydCgpOnZvaWQgMH0sbnVsbCE9d2luZG93Lmhpc3RvcnkucHVzaFN0YXRlJiYoVD13aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUsd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlPWZ1bmN0aW9uKCl7cmV0dXJuIHooKSxULmFwcGx5KHdpbmRvdy5oaXN0b3J5LGFyZ3VtZW50cyl9KSxudWxsIT13aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUmJihXPXdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSx3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4geigpLFcuYXBwbHkod2luZG93Lmhpc3RvcnksYXJndW1lbnRzKX0pLGw9e2FqYXg6YSxlbGVtZW50czpkLGRvY3VtZW50OmMsZXZlbnRMYWc6Zn0sKEI9ZnVuY3Rpb24oKXt2YXIgYSxjLGQsZSxmLGcsaCxpO2ZvcihqLnNvdXJjZXM9TD1bXSxnPVtcImFqYXhcIixcImVsZW1lbnRzXCIsXCJkb2N1bWVudFwiLFwiZXZlbnRMYWdcIl0sYz0wLGU9Zy5sZW5ndGg7ZT5jO2MrKylhPWdbY10sRFthXSE9PSExJiZMLnB1c2gobmV3IGxbYV0oRFthXSkpO2ZvcihpPW51bGwhPShoPUQuZXh0cmFTb3VyY2VzKT9oOltdLGQ9MCxmPWkubGVuZ3RoO2Y+ZDtkKyspSz1pW2RdLEwucHVzaChuZXcgSyhEKSk7cmV0dXJuIGouYmFyPXI9bmV3IGIsSD1bXSxNPW5ldyBtfSkoKSxqLnN0b3A9ZnVuY3Rpb24oKXtyZXR1cm4gai50cmlnZ2VyKFwic3RvcFwiKSxqLnJ1bm5pbmc9ITEsci5kZXN0cm95KCkscz0hMCxudWxsIT1wJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmdChwKSxwPW51bGwpLEIoKX0sai5yZXN0YXJ0PWZ1bmN0aW9uKCl7cmV0dXJuIGoudHJpZ2dlcihcInJlc3RhcnRcIiksai5zdG9wKCksai5zdGFydCgpfSxqLmdvPWZ1bmN0aW9uKCl7dmFyIGE7cmV0dXJuIGoucnVubmluZz0hMCxyLnJlbmRlcigpLGE9QygpLHM9ITEscD1HKGZ1bmN0aW9uKGIsYyl7dmFyIGQsZSxmLGcsaCxpLGssbCxuLG8scCxxLHQsdSx2LHc7Zm9yKGw9MTAwLXIucHJvZ3Jlc3MsZT1wPTAsZj0hMCxpPXE9MCx1PUwubGVuZ3RoO3U+cTtpPSsrcSlmb3IoSz1MW2ldLG89bnVsbCE9SFtpXT9IW2ldOkhbaV09W10saD1udWxsIT0odz1LLmVsZW1lbnRzKT93OltLXSxrPXQ9MCx2PWgubGVuZ3RoO3Y+dDtrPSsrdClnPWhba10sbj1udWxsIT1vW2tdP29ba106b1trXT1uZXcgbShnKSxmJj1uLmRvbmUsbi5kb25lfHwoZSsrLHArPW4udGljayhiKSk7cmV0dXJuIGQ9cC9lLHIudXBkYXRlKE0udGljayhiLGQpKSxyLmRvbmUoKXx8Znx8cz8oci51cGRhdGUoMTAwKSxqLnRyaWdnZXIoXCJkb25lXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gci5maW5pc2goKSxqLnJ1bm5pbmc9ITEsai50cmlnZ2VyKFwiaGlkZVwiKX0sTWF0aC5tYXgoRC5naG9zdFRpbWUsTWF0aC5tYXgoRC5taW5UaW1lLShDKCktYSksMCkpKSk6YygpfSl9LGouc3RhcnQ9ZnVuY3Rpb24oYSl7dihELGEpLGoucnVubmluZz0hMDt0cnl7ci5yZW5kZXIoKX1jYXRjaChiKXtpPWJ9cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFjZVwiKT8oai50cmlnZ2VyKFwic3RhcnRcIiksai5nbygpKTpzZXRUaW1lb3V0KGouc3RhcnQsNTApfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGZ1bmN0aW9uKCl7cmV0dXJuIGp9KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1qOkQuc3RhcnRPblBhZ2VMb2FkJiZqLnN0YXJ0KCl9KS5jYWxsKHRoaXMpOyIsIi8vIExvYWRlZCBhZnRlciBDb3JlVUkgYXBwLmpzXG5cbiIsImltcG9ydCAnQGNvcmV1aS9jb3JldWknXG4iLCIvKipcbiAqIEZpcnN0IHdlIHdpbGwgbG9hZCBhbGwgb2YgdGhpcyBwcm9qZWN0J3MgSmF2YVNjcmlwdCBkZXBlbmRlbmNpZXMgd2hpY2hcbiAqIGluY2x1ZGVzIFZ1ZSBhbmQgb3RoZXIgbGlicmFyaWVzLiBJdCBpcyBhIGdyZWF0IHN0YXJ0aW5nIHBvaW50IHdoZW5cbiAqIGJ1aWxkaW5nIHJvYnVzdCwgcG93ZXJmdWwgd2ViIGFwcGxpY2F0aW9ucyB1c2luZyBWdWUgYW5kIExhcmF2ZWwuXG4gKi9cblxuLy8gTG9hZGVkIGJlZm9yZSBDb3JlVUkgYXBwLmpzXG5pbXBvcnQgJy4uL2Jvb3RzdHJhcCc7XG5pbXBvcnQgJy4vX3BhY2UnO1xuaW1wb3J0ICcuLi9wbHVnaW5zJztcbiIsIi8qKlxuICogVGhpcyBib290c3RyYXAgZmlsZSBpcyB1c2VkIGZvciBib3RoIGZyb250ZW5kIGFuZCBiYWNrZW5kXG4gKi9cblxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAncG9wcGVyLmpzJzsgLy8gUmVxdWlyZWQgZm9yIEJTNFxuaW1wb3J0ICdib290c3RyYXAnO1xuXG4vKipcbiAqIFdlJ2xsIGxvYWQgalF1ZXJ5IGFuZCB0aGUgQm9vdHN0cmFwIGpRdWVyeSBwbHVnaW4gd2hpY2ggcHJvdmlkZXMgc3VwcG9ydFxuICogZm9yIEphdmFTY3JpcHQgYmFzZWQgQm9vdHN0cmFwIGZlYXR1cmVzIHN1Y2ggYXMgbW9kYWxzIGFuZCB0YWJzLiBUaGlzXG4gKiBjb2RlIG1heSBiZSBtb2RpZmllZCB0byBmaXQgdGhlIHNwZWNpZmljIG5lZWRzIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gKi9cblxud2luZG93LiQgPSB3aW5kb3cualF1ZXJ5ID0gJDtcbndpbmRvdy5Td2FsID0gU3dhbDtcbndpbmRvdy5fID0gXzsgLy8gTG9kYXNoXG5cbi8qKlxuICogV2UnbGwgbG9hZCB0aGUgYXhpb3MgSFRUUCBsaWJyYXJ5IHdoaWNoIGFsbG93cyB1cyB0byBlYXNpbHkgaXNzdWUgcmVxdWVzdHNcbiAqIHRvIG91ciBMYXJhdmVsIGJhY2stZW5kLiBUaGlzIGxpYnJhcnkgYXV0b21hdGljYWxseSBoYW5kbGVzIHNlbmRpbmcgdGhlXG4gKiBDU1JGIHRva2VuIGFzIGEgaGVhZGVyIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiB0aGUgXCJYU1JGXCIgdG9rZW4gY29va2llLlxuICovXG5cbndpbmRvdy5heGlvcyA9IGF4aW9zO1xud2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLVJlcXVlc3RlZC1XaXRoJ10gPSAnWE1MSHR0cFJlcXVlc3QnO1xuXG4vKipcbiAqIE5leHQgd2Ugd2lsbCByZWdpc3RlciB0aGUgQ1NSRiBUb2tlbiBhcyBhIGNvbW1vbiBoZWFkZXIgd2l0aCBBeGlvcyBzbyB0aGF0XG4gKiBhbGwgb3V0Z29pbmcgSFRUUCByZXF1ZXN0cyBhdXRvbWF0aWNhbGx5IGhhdmUgaXQgYXR0YWNoZWQuIFRoaXMgaXMganVzdFxuICogYSBzaW1wbGUgY29udmVuaWVuY2Ugc28gd2UgZG9uJ3QgaGF2ZSB0byBhdHRhY2ggZXZlcnkgdG9rZW4gbWFudWFsbHkuXG4gKi9cblxuY29uc3QgdG9rZW4gPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKTtcblxuaWYgKHRva2VuKSB7XG4gICAgd2luZG93LmF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydYLUNTUkYtVE9LRU4nXSA9IHRva2VuLmNvbnRlbnQ7XG59IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0NTUkYgdG9rZW4gbm90IGZvdW5kOiBodHRwczovL2xhcmF2ZWwuY29tL2RvY3MvY3NyZiNjc3JmLXgtY3NyZi10b2tlbicpO1xufVxuXG4vKipcbiAqIEVjaG8gZXhwb3NlcyBhbiBleHByZXNzaXZlIEFQSSBmb3Igc3Vic2NyaWJpbmcgdG8gY2hhbm5lbHMgYW5kIGxpc3RlbmluZ1xuICogZm9yIGV2ZW50cyB0aGF0IGFyZSBicm9hZGNhc3QgYnkgTGFyYXZlbC4gRWNobyBhbmQgZXZlbnQgYnJvYWRjYXN0aW5nXG4gKiBhbGxvd3MgeW91ciB0ZWFtIHRvIGVhc2lseSBidWlsZCByb2J1c3QgcmVhbC10aW1lIHdlYiBhcHBsaWNhdGlvbnMuXG4gKi9cblxuLy8gaW1wb3J0IEVjaG8gZnJvbSAnbGFyYXZlbC1lY2hvJ1xuXG4vLyB3aW5kb3cuUHVzaGVyID0gcmVxdWlyZSgncHVzaGVyLWpzJyk7XG5cbi8vIHdpbmRvdy5FY2hvID0gbmV3IEVjaG8oe1xuLy8gICAgIGJyb2FkY2FzdGVyOiAncHVzaGVyJyxcbi8vICAgICBrZXk6IHByb2Nlc3MuZW52Lk1JWF9QVVNIRVJfQVBQX0tFWVxuLy8gICAgIGNsdXN0ZXI6IHByb2Nlc3MuZW52Lk1JWF9QVVNIRVJfQVBQX0NMVVNURVIsXG4vLyAgICAgZW5jcnlwdGVkOiB0cnVlXG4vLyB9KTtcbiIsIi8qKlxuICogQWxsb3dzIHlvdSB0byBhZGQgZGF0YS1tZXRob2Q9XCJNRVRIT0QgdG8gbGlua3MgdG8gYXV0b21hdGljYWxseSBpbmplY3QgYSBmb3JtXG4gKiB3aXRoIHRoZSBtZXRob2Qgb24gY2xpY2tcbiAqXG4gKiBFeGFtcGxlOiA8YSBocmVmPVwie3tyb3V0ZSgnY3VzdG9tZXJzLmRlc3Ryb3knLCAkY3VzdG9tZXItPmlkKX19XCJcbiAqIGRhdGEtbWV0aG9kPVwiZGVsZXRlXCIgbmFtZT1cImRlbGV0ZV9pdGVtXCI+RGVsZXRlPC9hPlxuICpcbiAqIEluamVjdHMgYSBmb3JtIHdpdGggdGhhdCdzIGZpcmVkIG9uIGNsaWNrIG9mIHRoZSBsaW5rIHdpdGggYSBERUxFVEUgcmVxdWVzdC5cbiAqIEdvb2QgYmVjYXVzZSB5b3UgZG9uJ3QgaGF2ZSB0byBkaXJ0eSB5b3VyIEhUTUwgd2l0aCBkZWxldGUgZm9ybXMgZXZlcnl3aGVyZS5cbiAqL1xuZnVuY3Rpb24gYWRkRGVsZXRlRm9ybXMoKSB7XG4gICAgJCgnW2RhdGEtbWV0aG9kXScpLmFwcGVuZChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghJCh0aGlzKS5maW5kKCdmb3JtJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXFxuPGZvcm0gYWN0aW9uPSdcIiArICQodGhpcykuYXR0cignaHJlZicpICsgXCInIG1ldGhvZD0nUE9TVCcgbmFtZT0nZGVsZXRlX2l0ZW0nIHN0eWxlPSdkaXNwbGF5Om5vbmUnPlxcblwiICtcbiAgICAgICAgICAgICAgICBcIjxpbnB1dCB0eXBlPSdoaWRkZW4nIG5hbWU9J19tZXRob2QnIHZhbHVlPSdcIiArICQodGhpcykuYXR0cignZGF0YS1tZXRob2QnKSArIFwiJz5cXG5cIiArXG4gICAgICAgICAgICAgICAgXCI8aW5wdXQgdHlwZT0naGlkZGVuJyBuYW1lPSdfdG9rZW4nIHZhbHVlPSdcIiArICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JykgKyBcIic+XFxuXCIgK1xuICAgICAgICAgICAgICAgICc8L2Zvcm0+XFxuJztcbiAgICAgICAgfSBlbHNlIHsgcmV0dXJuICcnIH1cbiAgICB9KVxuICAgICAgICAuYXR0cignaHJlZicsICcjJylcbiAgICAgICAgLmF0dHIoJ3N0eWxlJywgJ2N1cnNvcjpwb2ludGVyOycpXG4gICAgICAgIC5hdHRyKCdvbmNsaWNrJywgJyQodGhpcykuZmluZChcImZvcm1cIikuc3VibWl0KCk7Jyk7XG59XG5cbi8qKlxuICogUGxhY2UgYW55IGpRdWVyeS9oZWxwZXIgcGx1Z2lucyBpbiBoZXJlLlxuICovXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBBZGQgdGhlIGRhdGEtbWV0aG9kPVwiZGVsZXRlXCIgZm9ybXMgdG8gYWxsIGRlbGV0ZSBsaW5rc1xuICAgICAqL1xuICAgIGFkZERlbGV0ZUZvcm1zKCk7XG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlIGFsbCBzdWJtaXQgYnV0dG9ucyBvbmNlIGNsaWNrZWRcbiAgICAgKi9cbiAgICAkKCdmb3JtJykuc3VibWl0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgJCh0aGlzKS5maW5kKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJpYyBjb25maXJtIGZvcm0gZGVsZXRlIHVzaW5nIFN3ZWV0IEFsZXJ0XG4gICAgICovXG4gICAgJCgnYm9keScpLm9uKCdzdWJtaXQnLCAnZm9ybVtuYW1lPWRlbGV0ZV9pdGVtXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBmb3JtID0gdGhpcztcbiAgICAgICAgY29uc3QgbGluayA9ICQoJ2FbZGF0YS1tZXRob2Q9XCJkZWxldGVcIl0nKTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY2FuY2VsJykpID8gbGluay5hdHRyKCdkYXRhLXRyYW5zLWJ1dHRvbi1jYW5jZWwnKSA6ICdDYW5jZWwnO1xuICAgICAgICBjb25zdCBjb25maXJtID0gKGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY29uZmlybScpKSA/IGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY29uZmlybScpIDogJ1llcywgZGVsZXRlJztcbiAgICAgICAgY29uc3QgdGl0bGUgPSAobGluay5hdHRyKCdkYXRhLXRyYW5zLXRpdGxlJykpID8gbGluay5hdHRyKCdkYXRhLXRyYW5zLXRpdGxlJykgOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0/JztcblxuICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsLFxuICAgICAgICAgICAgdHlwZTogJ3dhcm5pbmcnXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmVzdWx0LnZhbHVlICYmIGZvcm0uc3VibWl0KCk7XG4gICAgICAgIH0pO1xuICAgIH0pLm9uKCdjbGljaycsICdhW25hbWU9Y29uZmlybV9pdGVtXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZW5lcmljICdhcmUgeW91IHN1cmUnIGNvbmZpcm0gYm94XG4gICAgICAgICAqL1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgbGluayA9ICQodGhpcyk7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gKGxpbmsuYXR0cignZGF0YS10cmFucy10aXRsZScpKSA/IGxpbmsuYXR0cignZGF0YS10cmFucy10aXRsZScpIDogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkbyB0aGlzPyc7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IChsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNhbmNlbCcpKSA/IGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY2FuY2VsJykgOiAnQ2FuY2VsJztcbiAgICAgICAgY29uc3QgY29uZmlybSA9IChsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNvbmZpcm0nKSkgPyBsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNvbmZpcm0nKSA6ICdDb250aW51ZSc7XG5cbiAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogY29uZmlybSxcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbCxcbiAgICAgICAgICAgIHR5cGU6ICdpbmZvJ1xuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSAmJiB3aW5kb3cubG9jYXRpb24uYXNzaWduKGxpbmsuYXR0cignaHJlZicpKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cblxuIC8qIGhpZGUgbG9hZGVyIGlmIDNzZWMgb3IgbW9yZSB0aW1lICovXG4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgJChcIi5sb2FkZXItbG9nb1wiKS5mYWRlT3V0KCk7XG59LCAzMDAwKTtcblxuLyogbGVmdCBzaWRlYmFyIG9wZW4gKi9cbiQoJyNsZWZ0LW1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdzaWRlYmFyLWxlZnQtY2xvc2UnKTtcbn0pO1xuJCgnLnNpZGViYXItbGVmdCArIGRpdi5iYWNrZHJvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3NpZGViYXItbGVmdC1jbG9zZScpO1xufSk7XG5cblxuXG5cblxuXG4gICAgLyogbGVmdCBzaWRlYmFyIGFjY29yZGlvbiBtZW51ICovXG4gICAgLyogdXJsICBuYXZpZ2F0aW9uIGFjdGl2ZSAqL1xuICAgIHZhciB1cmwgPSB3aW5kb3cubG9jYXRpb247XG5cbiAgICBmdW5jdGlvbiBtZW51aXRlbXMoKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gJCgnLnNpZGViYXIgLm5hdiAubmF2LWl0ZW0gYScpLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ocmVmID09IHVybDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVybClcbiAgICAgICAgfSkuYWRkQ2xhc3MoJ2FjdGl2ZScpLnBhcmVudChcImxpXCIpLmFkZENsYXNzKCdhY3RpdmUnKS5jbG9zZXN0KCcubmF2Jykuc2xpZGVEb3duKCkuYWRkQ2xhc3MoJ2luJykucHJldigpLmFkZENsYXNzKCdhY3RpdmUnKS5wYXJlbnQoKS5hZGRDbGFzcygnc2hvdycpLmNsb3Nlc3QoJy5uYXYnKS5zbGlkZURvd24oKS5hZGRDbGFzcygnaW4nKS5wYXJlbnQoKS5hZGRDbGFzcygnc2hvdycpO1xuICAgIH1cbiAgICBtZW51aXRlbXMoKTtcblxuICAgICQoJy5zaWRlYmFyIC5uYXYgLm5hdi1pdGVtIC5kcm9wZHdvd24tdG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykgIT0gdHJ1ZSkge1xuICAgICAgICAgICAgJCgnLnNpZGViYXIgLm5hdiAubmF2LWl0ZW0gLmRyb3Bkd293bi10b2dnbGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJykubmV4dCgpLnNsaWRlVXAoKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpLm5leHQoKS5zbGlkZURvd24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLm5leHQoKS5zbGlkZVVwKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgXG5cblxuXG4gICAgLyogc2lkZWJhciBoaWRlIGJlbG93IDExMDBweCByZXNvbHV0aW9uICAqL1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8PSAxMTAwKSB7XG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc2lkZWJhci1sZWZ0LWNsb3NlJyk7XG4gICAgfVxuXG5cbiAgICAkKHdpbmRvdykub24oJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qIGhpZGUgbG9hZGVyICAqL1xuICAgICAgICAkKCcubG9hZGVyJykuaGlkZSgpO1xuICAgICAgICAkKCcuYW5pbWF0ZWphY2snKS5hZGRDbGFzcygnamFja0luVGhlQm94Jyk7XG4gICAgICAgICQoJy53cmFwcGVyJykuY3NzKCdwYWRkaW5nLWJvdHRvbScsICQoJ2JvZHkgPiBmb290ZXInKS5vdXRlckhlaWdodCgpICk7XG4gICAgICAgICQoJ2JvZHkgPiBmb290ZXInKS5jc3MoJ21hcmdpbi10b3AnLCAtKCAkKCdib2R5ID4gZm9vdGVyJykub3V0ZXJIZWlnaHQoKSApKTtcbiAgICB9KTtcblxuXG5cblxuXG5cblxuXG5cblxuXG59KTtcblxuXG5cblxuICAgIC8vIEpxdWVyeSBEZXBlbmRlbmN5XG5cbi8qICQoXCJpbnB1dFtkYXRhLXR5cGU9J2N1cnJlbmN5J11cIikub24oe1xuICAgIGtleXVwOiBmdW5jdGlvbigpIHtcbiAgICAgIGZvcm1hdEN1cnJlbmN5KCQodGhpcykpO1xuICAgIH0sXG4gICAgYmx1cjogZnVuY3Rpb24oKSB7IFxuICAgICAgZm9ybWF0Q3VycmVuY3koJCh0aGlzKSwgXCJibHVyXCIpO1xuICAgIH1cbn0pOyAqL1xuJChcImlucHV0W2RhdGEtdHlwZT0nY3VycmVuY3knXVwiKS5vbih7XG4gICAgY2hhbmdlOiBmdW5jdGlvbigpIHtcbiAgICAgIGZvcm1hdEN1cnJlbmN5KCQodGhpcykpO1xuICAgIH0sXG4gICAga2V5dXA6IGZ1bmN0aW9uKCkge1xuICAgICAgZm9ybWF0Q3VycmVuY3koJCh0aGlzKSk7XG4gICAgfSxcbiAgICBibHVyOiBmdW5jdGlvbigpIHsgXG4gICAgICBmb3JtYXRDdXJyZW5jeSgkKHRoaXMpLCBcImJsdXJcIik7XG4gICAgfSBcbn0pO1xudmFyIGNvdW50ID0gMDtcblxuJChcIi5kaWdpdFwiKS5jbGljayhmdW5jdGlvbigpIHtcblxuXHQgIHZhciBudW09ICQodGhpcykuYXR0cignZGF0YS1udW1iZXInKTtcblx0ICAkKFwiI2N1cnJlbmN5LWZpZWxkXCIpLnZhbChmdW5jdGlvbigpIHtcbiAgICAgIFxuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgKyBudW07XG4gICAgfSk7XG4gICAgIGZvcm1hdEN1cnJlbmN5KCQoXCIjY3VycmVuY3ktZmllbGRcIikpO1xuICAgIFxuXHR9KTtcblxuXG5mdW5jdGlvbiBmb3JtYXROdW1iZXIobikge1xuICAvLyBmb3JtYXQgbnVtYmVyIDEwMDAwMDAgdG8gMSwyMzQsNTY3XG4gIHJldHVybiBuLnJlcGxhY2UoL1xcRC9nLCBcIlwiKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCBcIixcIilcbn1cblxuXG5mdW5jdGlvbiBmb3JtYXRDdXJyZW5jeShpbnB1dCwgYmx1cikge1xuICAvLyBhcHBlbmRzICQgdG8gdmFsdWUsIHZhbGlkYXRlcyBkZWNpbWFsIHNpZGVcbiAgLy8gYW5kIHB1dHMgY3Vyc29yIGJhY2sgaW4gcmlnaHQgcG9zaXRpb24uXG4gIFxuICAvLyBnZXQgaW5wdXQgdmFsdWVcbiAgdmFyIGlucHV0X3ZhbCA9IGlucHV0LnZhbCgpO1xuICBcbiAgLy8gZG9uJ3QgdmFsaWRhdGUgZW1wdHkgaW5wdXRcbiAgaWYgKGlucHV0X3ZhbCA9PT0gXCJcIikgeyByZXR1cm47IH1cbiAgXG4gIC8vIG9yaWdpbmFsIGxlbmd0aFxuICB2YXIgb3JpZ2luYWxfbGVuID0gaW5wdXRfdmFsLmxlbmd0aDtcblxuICAvLyBpbml0aWFsIGNhcmV0IHBvc2l0aW9uIFxuICB2YXIgY2FyZXRfcG9zID0gaW5wdXQucHJvcChcInNlbGVjdGlvblN0YXJ0XCIpO1xuICAgIFxuICAvLyBjaGVjayBmb3IgZGVjaW1hbFxuICBpZiAoaW5wdXRfdmFsLmluZGV4T2YoXCIuXCIpID49IDApIHtcblxuICAgIC8vIGdldCBwb3NpdGlvbiBvZiBmaXJzdCBkZWNpbWFsXG4gICAgLy8gdGhpcyBwcmV2ZW50cyBtdWx0aXBsZSBkZWNpbWFscyBmcm9tXG4gICAgLy8gYmVpbmcgZW50ZXJlZFxuICAgIHZhciBkZWNpbWFsX3BvcyA9IGlucHV0X3ZhbC5pbmRleE9mKFwiLlwiKTtcblxuICAgIC8vIHNwbGl0IG51bWJlciBieSBkZWNpbWFsIHBvaW50XG4gICAgdmFyIGxlZnRfc2lkZSA9IGlucHV0X3ZhbC5zdWJzdHJpbmcoMCwgZGVjaW1hbF9wb3MpO1xuICAgIHZhciByaWdodF9zaWRlID0gaW5wdXRfdmFsLnN1YnN0cmluZyhkZWNpbWFsX3Bvcyk7XG5cbiAgICAvLyBhZGQgY29tbWFzIHRvIGxlZnQgc2lkZSBvZiBudW1iZXJcbiAgICBsZWZ0X3NpZGUgPSBmb3JtYXROdW1iZXIobGVmdF9zaWRlKTtcblxuICAgIC8vIHZhbGlkYXRlIHJpZ2h0IHNpZGVcbiAgICByaWdodF9zaWRlID0gZm9ybWF0TnVtYmVyKHJpZ2h0X3NpZGUpO1xuICAgIFxuICAgIC8vIE9uIGJsdXIgbWFrZSBzdXJlIDIgbnVtYmVycyBhZnRlciBkZWNpbWFsXG4gICAgaWYgKGJsdXIgPT09IFwiYmx1clwiKSB7XG4gICAgICByaWdodF9zaWRlICs9IFwiMDBcIjtcbiAgICB9XG4gICAgXG4gICAgLy8gTGltaXQgZGVjaW1hbCB0byBvbmx5IDIgZGlnaXRzXG4gICAgcmlnaHRfc2lkZSA9IHJpZ2h0X3NpZGUuc3Vic3RyaW5nKDAsIDIpO1xuXG4gICAgLy8gam9pbiBudW1iZXIgYnkgLlxuICAgIGlucHV0X3ZhbCA9IFwiJFwiICsgbGVmdF9zaWRlICsgXCIuXCIgKyByaWdodF9zaWRlO1xuXG4gIH0gZWxzZSB7XG4gICAgLy8gbm8gZGVjaW1hbCBlbnRlcmVkXG4gICAgLy8gYWRkIGNvbW1hcyB0byBudW1iZXJcbiAgICAvLyByZW1vdmUgYWxsIG5vbi1kaWdpdHNcbiAgICBpbnB1dF92YWwgPSBmb3JtYXROdW1iZXIoaW5wdXRfdmFsKTtcbiAgICBpbnB1dF92YWwgPSBcIiRcIiArIGlucHV0X3ZhbDtcbiAgICBcbiAgICAvLyBmaW5hbCBmb3JtYXR0aW5nXG4gICAgaWYgKGJsdXIgPT09IFwiYmx1clwiKSB7XG4gICAgICBpbnB1dF92YWwgKz0gXCIuMDBcIjtcbiAgICB9XG4gIH1cbiAgXG4gIC8vIHNlbmQgdXBkYXRlZCBzdHJpbmcgdG8gaW5wdXRcbiAgaW5wdXQudmFsKGlucHV0X3ZhbCk7XG5cbiAgLy8gcHV0IGNhcmV0IGJhY2sgaW4gdGhlIHJpZ2h0IHBvc2l0aW9uXG4gIHZhciB1cGRhdGVkX2xlbiA9IGlucHV0X3ZhbC5sZW5ndGg7XG4gIGNhcmV0X3BvcyA9IHVwZGF0ZWRfbGVuIC0gb3JpZ2luYWxfbGVuICsgY2FyZXRfcG9zO1xuICBpbnB1dFswXS5zZXRTZWxlY3Rpb25SYW5nZShjYXJldF9wb3MsIGNhcmV0X3Bvcyk7XG5cbiAgY29uc29sZS5sb2coaW5wdXRfdmFsKTtcblxuICAvKiB2YXIgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVzdCcpO1xuICBtb2RhbC5pbm5lckhUTUwgPSBpbnB1dF92YWw7IFxuIFxuICAqL1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXltZW50LWFtb3VudFwiKS5pbm5lckhUTUwgPSBpbnB1dF92YWwucmVwbGFjZSgvWyRdLyxcIlwiKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VuZGluZy1hbW91bnRcIikuaW5uZXJIVE1MID0gaW5wdXRfdmFsLnJlcGxhY2UoL1skXS8sXCJcIik7XG5cblxufVxuXG5cbihmdW5jdGlvbigkKSB7XG5cdCQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIuZHJvcGRvd24tbWVudS5zaG93IGEuZHJvcGRvd24taXRlbVwiLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGV4dCA9ICQodGhpcykuZmluZCgnLmZ1bmRpbmctYnV0dG9uLXRleHQnKS5odG1sKCk7XG4gICAgJCgnLmZ1bmRpbmctYnV0dG9uJykudGV4dCh0ZXh0KTtcblx0XHRjb25zb2xlLmxvZyh0ZXh0KTtcblx0fSk7XG59KShqUXVlcnkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==