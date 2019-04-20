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
});

/***/ }),

/***/ 1:
/*!************************************************************************************************************!*\
  !*** multi ./resources/js/backend/before.js ./resources/js/backend/app.js ./resources/js/backend/after.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\AkwaCash\resources\js\backend\before.js */"./resources/js/backend/before.js");
__webpack_require__(/*! C:\xampp\htdocs\AkwaCash\resources\js\backend\app.js */"./resources/js/backend/app.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\AkwaCash\resources\js\backend\after.js */"./resources/js/backend/after.js");


/***/ })

},[[1,"/js/manifest","/js/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGNvcmV1aS9jb3JldWkvZGlzdC9qcy9jb3JldWkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvZGlzdC9wZXJmZWN0LXNjcm9sbGJhci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvX3BhY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYWZ0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvYXBwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2JlZm9yZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9wbHVnaW5zLmpzIl0sIm5hbWVzIjpbImEiLCJiIiwiYyIsImQiLCJlIiwiZiIsImciLCJoIiwiaSIsImoiLCJrIiwibCIsIm0iLCJuIiwibyIsInAiLCJxIiwiciIsInMiLCJ0IiwidSIsInYiLCJ3IiwieCIsInkiLCJ6IiwiQSIsIkIiLCJDIiwiRCIsIkUiLCJGIiwiRyIsIkgiLCJJIiwiSiIsIksiLCJMIiwiTSIsIk4iLCJPIiwiUCIsIlEiLCJSIiwiUyIsIlQiLCJVIiwiViIsIlciLCJYIiwic2xpY2UiLCJZIiwiaGFzT3duUHJvcGVydHkiLCJaIiwiY29uc3RydWN0b3IiLCJjYWxsIiwicHJvdG90eXBlIiwiX19zdXBlcl9fIiwiJCIsImluZGV4T2YiLCJsZW5ndGgiLCJjYXRjaHVwVGltZSIsImluaXRpYWxSYXRlIiwibWluVGltZSIsImdob3N0VGltZSIsIm1heFByb2dyZXNzUGVyRnJhbWUiLCJlYXNlRmFjdG9yIiwic3RhcnRPblBhZ2VMb2FkIiwicmVzdGFydE9uUHVzaFN0YXRlIiwicmVzdGFydE9uUmVxdWVzdEFmdGVyIiwidGFyZ2V0IiwiZWxlbWVudHMiLCJjaGVja0ludGVydmFsIiwic2VsZWN0b3JzIiwiZXZlbnRMYWciLCJtaW5TYW1wbGVzIiwic2FtcGxlQ291bnQiLCJsYWdUaHJlc2hvbGQiLCJhamF4IiwidHJhY2tNZXRob2RzIiwidHJhY2tXZWJTb2NrZXRzIiwiaWdub3JlVVJMcyIsInBlcmZvcm1hbmNlIiwibm93IiwiRGF0ZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxBbmltYXRpb25GcmFtZSIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJhcmd1bWVudHMiLCJhcHBseSIsIk1hdGgiLCJhYnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRBdHRyaWJ1dGUiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwiZXJyb3IiLCJvbiIsImJpbmRpbmdzIiwicHVzaCIsImhhbmRsZXIiLCJjdHgiLCJvbmNlIiwib2ZmIiwic3BsaWNlIiwidHJpZ2dlciIsIlBhY2UiLCJvcHRpb25zIiwicGFjZU9wdGlvbnMiLCJFcnJvciIsInByb2dyZXNzIiwiZ2V0RWxlbWVudCIsImVsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImJvZHkiLCJyZXBsYWNlIiwiaW5uZXJIVE1MIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwiZmluaXNoIiwidXBkYXRlIiwicmVuZGVyIiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNoaWxkcmVuIiwic3R5bGUiLCJsYXN0UmVuZGVyZWRQcm9ncmVzcyIsInNldEF0dHJpYnV0ZSIsImRvbmUiLCJYTUxIdHRwUmVxdWVzdCIsIlhEb21haW5SZXF1ZXN0IiwiV2ViU29ja2V0IiwiaWdub3JlIiwidW5zaGlmdCIsInNoaWZ0IiwidHJhY2siLCJ0b1VwcGVyQ2FzZSIsIm9wZW4iLCJ0eXBlIiwidXJsIiwicmVxdWVzdCIsInByb3RvY29scyIsInRlc3QiLCJydW5uaW5nIiwicmVhZHlTdGF0ZSIsInJlc3RhcnQiLCJzb3VyY2VzIiwid2F0Y2giLCJQcm9ncmVzc0V2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxlbmd0aENvbXB1dGFibGUiLCJsb2FkZWQiLCJ0b3RhbCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInNlbGVjdG9yIiwiY2hlY2siLCJzdGF0ZXMiLCJsb2FkaW5nIiwiaW50ZXJhY3RpdmUiLCJjb21wbGV0ZSIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInNvdXJjZSIsImxhc3QiLCJzaW5jZUxhc3RVcGRhdGUiLCJyYXRlIiwiY2F0Y2h1cCIsImxhc3RQcm9ncmVzcyIsInRpY2siLCJwb3ciLCJtaW4iLCJtYXgiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwicmVwbGFjZVN0YXRlIiwiZXh0cmFTb3VyY2VzIiwiYmFyIiwic3RvcCIsInN0YXJ0IiwiZ28iLCJkZWZpbmUiLCJqUXVlcnkiLCJTd2FsIiwiXyIsImF4aW9zIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwidG9rZW4iLCJoZWFkIiwiY29udGVudCIsImFkZERlbGV0ZUZvcm1zIiwiYXBwZW5kIiwiZmluZCIsImF0dHIiLCJzdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJsaW5rIiwiY2FuY2VsIiwiY29uZmlybSIsInRpdGxlIiwiZmlyZSIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJsb2NhdGlvbiIsImFzc2lnbiIsImZhZGVPdXQiLCJ0b2dnbGVDbGFzcyIsImFkZENsYXNzIiwibWVudWl0ZW1zIiwiZWxlbWVudCIsImZpbHRlciIsImhyZWYiLCJsb2ciLCJwYXJlbnQiLCJjbG9zZXN0Iiwic2xpZGVEb3duIiwicHJldiIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJuZXh0Iiwic2xpZGVVcCIsIndpZHRoIiwiaGlkZSIsImNzcyIsIm91dGVySGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTRELG9CQUFvQixtQkFBTyxDQUFDLG9EQUFRLEdBQUcsbUJBQU8sQ0FBQyx5RkFBbUI7QUFDaEksRUFBRSxTQUM4RjtBQUNoRyxDQUFDLGdEQUFnRDs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsWUFBWSxFQUFFO0FBQ2xDOztBQUVBO0FBQ0EsK0JBQStCO0FBQy9CLHlDQUF5QztBQUN6QyxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDLEdBQUc7O0FBRUg7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQSx1RUFBdUU7QUFDdkUsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixrQkFBa0IsRUFBRTs7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFlBQVk7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQkFBMEI7QUFDL0M7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLFFBQVEsbUJBQW1CLFVBQVUsRUFBRSxFQUFFO0FBQzVFLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMERBQTBELG1CQUFtQixVQUFVLEVBQUUsRUFBRTtBQUMzRixHQUFHOztB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsMkJBQTJCLG1CQUFtQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLFlBQVksZUFBZTtBQUNsQztBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYzs7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QSw0Q0FBNEMsZ0JBQWdCLEVBQUU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUNBQW1DLFFBQVE7QUFDM0M7O0FBRUEsb0NBQW9DLFFBQVE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBc0QsOEJBQThCO0FBQ3BGLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxPQUFPOzs7QUFHUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsRUFBRTs7QUFFWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUMsRUFBRSxFQUFFLElBQUk7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUNBQXlDLEVBQUUsRUFBRSxJQUFJOztBQUVqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLHdCQUF3QiwwQkFBMEIsWUFBWSxFQUFFO0FBQzFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5RUFBeUUsbUJBQW1CO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsbUJBQW1CO0FBQzVGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLHdEQUF3RCw0QkFBNEIsRUFBRTtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUgsd0RBQXdELDRCQUE0QixFQUFFO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQSxvQ0FBb0MsbUNBQW1DO0FBQ3ZFLHNDQUFzQywyRUFBMkU7O0FBRWpIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCLCtDQUErQztBQUMxRSwwQkFBMEIsa0RBQWtEOztBQUU1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0E7QUFDQSw0QkFBNEIsY0FBYztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBO0FBQ0EsNEJBQTRCLGNBQWM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHlEQUF5RCxzQ0FBc0MsRUFBRTs7QUFFakcscURBQXFEO0FBQ3JELDJDQUEyQztBQUMzQyx3REFBd0QsMkJBQTJCLEVBQUU7QUFDckY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixtQkFBbUI7QUFDL0MsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDLDRCQUE0QixrQkFBa0I7O0FBRTlDOztBQUVBO0FBQ0E7O0FBRUEsNEJBQTRCLGNBQWM7QUFDMUMsNEJBQTRCLGNBQWM7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIscUNBQXFDLEVBQUU7QUFDcEU7QUFDQTs7QUFFZSwrRUFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7O0FDbnlDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7O0FDdkx0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7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Q0FBQyxlQUFELENBQUQsQ0FBbUJzTCxHQUFuQixDQUF1QixZQUF2QixFQUFxQyxDQUFHdEwsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQnVMLFdBQW5CLEVBQXhDO0FBQ0gsR0FORDtBQWtCSCxDQTlIQSxDQUFELEMiLCJmaWxlIjoiL2pzL2JhY2tlbmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAgKiBDb3JlVUkgdjIuMS45IChodHRwczovL2NvcmV1aS5pbylcbiAgKiBDb3B5cmlnaHQgMjAxOSDFgXVrYXN6IEhvbGVjemVrXG4gICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2NvcmV1aS5pbylcbiAgKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IGZhY3RvcnkoZXhwb3J0cywgcmVxdWlyZSgnanF1ZXJ5JyksIHJlcXVpcmUoJ3BlcmZlY3Qtc2Nyb2xsYmFyJykpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cycsICdqcXVlcnknLCAncGVyZmVjdC1zY3JvbGxiYXInXSwgZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGZhY3RvcnkoZ2xvYmFsLmNvcmV1aSA9IHt9LCBnbG9iYWwualF1ZXJ5LCBnbG9iYWwuUGVyZmVjdFNjcm9sbGJhcikpO1xufSh0aGlzLCBmdW5jdGlvbiAoZXhwb3J0cywgJCwgUGVyZmVjdFNjcm9sbGJhcikgeyAndXNlIHN0cmljdCc7XG5cbiAgJCA9ICQgJiYgJC5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpID8gJFsnZGVmYXVsdCddIDogJDtcbiAgUGVyZmVjdFNjcm9sbGJhciA9IFBlcmZlY3RTY3JvbGxiYXIgJiYgUGVyZmVjdFNjcm9sbGJhci5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdCcpID8gUGVyZmVjdFNjcm9sbGJhclsnZGVmYXVsdCddIDogUGVyZmVjdFNjcm9sbGJhcjtcblxuICB2YXIgX2lzT2JqZWN0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbiAgfTtcblxuICB2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxuICB2YXIgX2NvZiA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuICBcdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbiAgfVxuXG4gIHZhciBfY29yZSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgdmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNi41JyB9O1xuICBpZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICB9KTtcbiAgdmFyIF9jb3JlXzEgPSBfY29yZS52ZXJzaW9uO1xuXG4gIHZhciBfZ2xvYmFsID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxuICB2YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiAgaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICB9KTtcblxuICB2YXIgX3NoYXJlZCA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgdmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xuICB2YXIgc3RvcmUgPSBfZ2xvYmFsW1NIQVJFRF0gfHwgKF9nbG9iYWxbU0hBUkVEXSA9IHt9KTtcblxuICAobW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoge30pO1xuICB9KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gICAgdmVyc2lvbjogX2NvcmUudmVyc2lvbixcbiAgICBtb2RlOiAnZ2xvYmFsJyxcbiAgICBjb3B5cmlnaHQ6ICfCqSAyMDE5IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xuICB9KTtcbiAgfSk7XG5cbiAgdmFyIGlkID0gMDtcbiAgdmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbiAgdmFyIF91aWQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbiAgfTtcblxuICB2YXIgX3drcyA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgdmFyIHN0b3JlID0gX3NoYXJlZCgnd2tzJyk7XG5cbiAgdmFyIFN5bWJvbCA9IF9nbG9iYWwuU3ltYm9sO1xuICB2YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxuICB2YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IF91aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbiAgfTtcblxuICAkZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuICB9KTtcblxuICAvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcblxuXG4gIHZhciBNQVRDSCA9IF93a3MoJ21hdGNoJyk7XG4gIHZhciBfaXNSZWdleHAgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgaXNSZWdFeHA7XG4gICAgcmV0dXJuIF9pc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBfY29mKGl0KSA9PSAnUmVnRXhwJyk7XG4gIH07XG5cbiAgdmFyIF9hbk9iamVjdCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIGlmICghX2lzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICAgIHJldHVybiBpdDtcbiAgfTtcblxuICB2YXIgX2FGdW5jdGlvbiA9IGZ1bmN0aW9uIChpdCkge1xuICAgIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgICByZXR1cm4gaXQ7XG4gIH07XG5cbiAgLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG5cblxuICB2YXIgU1BFQ0lFUyA9IF93a3MoJ3NwZWNpZXMnKTtcbiAgdmFyIF9zcGVjaWVzQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAoTywgRCkge1xuICAgIHZhciBDID0gX2FuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICAgIHZhciBTO1xuICAgIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBfYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBfYUZ1bmN0aW9uKFMpO1xuICB9O1xuXG4gIC8vIDcuMS40IFRvSW50ZWdlclxuICB2YXIgY2VpbCA9IE1hdGguY2VpbDtcbiAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbiAgdmFyIF90b0ludGVnZXIgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbiAgfTtcblxuICAvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxuICB2YXIgX2RlZmluZWQgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gICAgcmV0dXJuIGl0O1xuICB9O1xuXG4gIC8vIHRydWUgIC0+IFN0cmluZyNhdFxuICAvLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbiAgdmFyIF9zdHJpbmdBdCA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgICAgdmFyIHMgPSBTdHJpbmcoX2RlZmluZWQodGhhdCkpO1xuICAgICAgdmFyIGkgPSBfdG9JbnRlZ2VyKHBvcyk7XG4gICAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgICAgdmFyIGEsIGI7XG4gICAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgYXQgPSBfc3RyaW5nQXQodHJ1ZSk7XG5cbiAgIC8vIGBBZHZhbmNlU3RyaW5nSW5kZXhgIGFic3RyYWN0IG9wZXJhdGlvblxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1hZHZhbmNlc3RyaW5naW5kZXhcbiAgdmFyIF9hZHZhbmNlU3RyaW5nSW5kZXggPSBmdW5jdGlvbiAoUywgaW5kZXgsIHVuaWNvZGUpIHtcbiAgICByZXR1cm4gaW5kZXggKyAodW5pY29kZSA/IGF0KFMsIGluZGV4KS5sZW5ndGggOiAxKTtcbiAgfTtcblxuICAvLyA3LjEuMTUgVG9MZW5ndGhcblxuICB2YXIgbWluID0gTWF0aC5taW47XG4gIHZhciBfdG9MZW5ndGggPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaXQgPiAwID8gbWluKF90b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbiAgfTtcblxuICAvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxuXG4gIHZhciBUQUcgPSBfd2tzKCd0b1N0cmluZ1RhZycpO1xuICAvLyBFUzMgd3JvbmcgaGVyZVxuICB2YXIgQVJHID0gX2NvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbiAgLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbiAgdmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBpdFtrZXldO1xuICAgIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICB9O1xuXG4gIHZhciBfY2xhc3NvZiA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBPLCBULCBCO1xuICAgIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICAgIDogQVJHID8gX2NvZihPKVxuICAgICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgICAgOiAoQiA9IF9jb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xuICB9O1xuXG4gIHZhciBidWlsdGluRXhlYyA9IFJlZ0V4cC5wcm90b3R5cGUuZXhlYztcblxuICAgLy8gYFJlZ0V4cEV4ZWNgIGFic3RyYWN0IG9wZXJhdGlvblxuICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1yZWdleHBleGVjXG4gIHZhciBfcmVnZXhwRXhlY0Fic3RyYWN0ID0gZnVuY3Rpb24gKFIsIFMpIHtcbiAgICB2YXIgZXhlYyA9IFIuZXhlYztcbiAgICBpZiAodHlwZW9mIGV4ZWMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciByZXN1bHQgPSBleGVjLmNhbGwoUiwgUyk7XG4gICAgICBpZiAodHlwZW9mIHJlc3VsdCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUmVnRXhwIGV4ZWMgbWV0aG9kIHJldHVybmVkIHNvbWV0aGluZyBvdGhlciB0aGFuIGFuIE9iamVjdCBvciBudWxsJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBpZiAoX2NsYXNzb2YoUikgIT09ICdSZWdFeHAnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdSZWdFeHAjZXhlYyBjYWxsZWQgb24gaW5jb21wYXRpYmxlIHJlY2VpdmVyJyk7XG4gICAgfVxuICAgIHJldHVybiBidWlsdGluRXhlYy5jYWxsKFIsIFMpO1xuICB9O1xuXG4gIC8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzXG5cbiAgdmFyIF9mbGFncyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGhhdCA9IF9hbk9iamVjdCh0aGlzKTtcbiAgICB2YXIgcmVzdWx0ID0gJyc7XG4gICAgaWYgKHRoYXQuZ2xvYmFsKSByZXN1bHQgKz0gJ2cnO1xuICAgIGlmICh0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gICAgaWYgKHRoYXQubXVsdGlsaW5lKSByZXN1bHQgKz0gJ20nO1xuICAgIGlmICh0aGF0LnVuaWNvZGUpIHJlc3VsdCArPSAndSc7XG4gICAgaWYgKHRoYXQuc3RpY2t5KSByZXN1bHQgKz0gJ3knO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgdmFyIG5hdGl2ZUV4ZWMgPSBSZWdFeHAucHJvdG90eXBlLmV4ZWM7XG4gIC8vIFRoaXMgYWx3YXlzIHJlZmVycyB0byB0aGUgbmF0aXZlIGltcGxlbWVudGF0aW9uLCBiZWNhdXNlIHRoZVxuICAvLyBTdHJpbmcjcmVwbGFjZSBwb2x5ZmlsbCB1c2VzIC4vZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYy5qcyxcbiAgLy8gd2hpY2ggbG9hZHMgdGhpcyBmaWxlIGJlZm9yZSBwYXRjaGluZyB0aGUgbWV0aG9kLlxuICB2YXIgbmF0aXZlUmVwbGFjZSA9IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZTtcblxuICB2YXIgcGF0Y2hlZEV4ZWMgPSBuYXRpdmVFeGVjO1xuXG4gIHZhciBMQVNUX0lOREVYID0gJ2xhc3RJbmRleCc7XG5cbiAgdmFyIFVQREFURVNfTEFTVF9JTkRFWF9XUk9ORyA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlMSA9IC9hLyxcbiAgICAgICAgcmUyID0gL2IqL2c7XG4gICAgbmF0aXZlRXhlYy5jYWxsKHJlMSwgJ2EnKTtcbiAgICBuYXRpdmVFeGVjLmNhbGwocmUyLCAnYScpO1xuICAgIHJldHVybiByZTFbTEFTVF9JTkRFWF0gIT09IDAgfHwgcmUyW0xBU1RfSU5ERVhdICE9PSAwO1xuICB9KSgpO1xuXG4gIC8vIG5vbnBhcnRpY2lwYXRpbmcgY2FwdHVyaW5nIGdyb3VwLCBjb3BpZWQgZnJvbSBlczUtc2hpbSdzIFN0cmluZyNzcGxpdCBwYXRjaC5cbiAgdmFyIE5QQ0dfSU5DTFVERUQgPSAvKCk/Py8uZXhlYygnJylbMV0gIT09IHVuZGVmaW5lZDtcblxuICB2YXIgUEFUQ0ggPSBVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgfHwgTlBDR19JTkNMVURFRDtcblxuICBpZiAoUEFUQ0gpIHtcbiAgICBwYXRjaGVkRXhlYyA9IGZ1bmN0aW9uIGV4ZWMoc3RyKSB7XG4gICAgICB2YXIgcmUgPSB0aGlzO1xuICAgICAgdmFyIGxhc3RJbmRleCwgcmVDb3B5LCBtYXRjaCwgaTtcblxuICAgICAgaWYgKE5QQ0dfSU5DTFVERUQpIHtcbiAgICAgICAgcmVDb3B5ID0gbmV3IFJlZ0V4cCgnXicgKyByZS5zb3VyY2UgKyAnJCg/IVxcXFxzKScsIF9mbGFncy5jYWxsKHJlKSk7XG4gICAgICB9XG4gICAgICBpZiAoVVBEQVRFU19MQVNUX0lOREVYX1dST05HKSBsYXN0SW5kZXggPSByZVtMQVNUX0lOREVYXTtcblxuICAgICAgbWF0Y2ggPSBuYXRpdmVFeGVjLmNhbGwocmUsIHN0cik7XG5cbiAgICAgIGlmIChVUERBVEVTX0xBU1RfSU5ERVhfV1JPTkcgJiYgbWF0Y2gpIHtcbiAgICAgICAgcmVbTEFTVF9JTkRFWF0gPSByZS5nbG9iYWwgPyBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCA6IGxhc3RJbmRleDtcbiAgICAgIH1cbiAgICAgIGlmIChOUENHX0lOQ0xVREVEICYmIG1hdGNoICYmIG1hdGNoLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgLy8gRml4IGJyb3dzZXJzIHdob3NlIGBleGVjYCBtZXRob2RzIGRvbid0IGNvbnNpc3RlbnRseSByZXR1cm4gYHVuZGVmaW5lZGBcbiAgICAgICAgLy8gZm9yIE5QQ0csIGxpa2UgSUU4LiBOT1RFOiBUaGlzIGRvZXNuJyB3b3JrIGZvciAvKC4/KT8vXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcbiAgICAgICAgbmF0aXZlUmVwbGFjZS5jYWxsKG1hdGNoWzBdLCByZUNvcHksIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmb3IgKGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50c1tpXSA9PT0gdW5kZWZpbmVkKSBtYXRjaFtpXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBfcmVnZXhwRXhlYyA9IHBhdGNoZWRFeGVjO1xuXG4gIHZhciBfZmFpbHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gISFleGVjKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9O1xuXG4gIC8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbiAgdmFyIF9kZXNjcmlwdG9ycyA9ICFfZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xuICB9KTtcblxuICB2YXIgZG9jdW1lbnQkMSA9IF9nbG9iYWwuZG9jdW1lbnQ7XG4gIC8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxuICB2YXIgaXMgPSBfaXNPYmplY3QoZG9jdW1lbnQkMSkgJiYgX2lzT2JqZWN0KGRvY3VtZW50JDEuY3JlYXRlRWxlbWVudCk7XG4gIHZhciBfZG9tQ3JlYXRlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGlzID8gZG9jdW1lbnQkMS5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xuICB9O1xuXG4gIHZhciBfaWU4RG9tRGVmaW5lID0gIV9kZXNjcmlwdG9ycyAmJiAhX2ZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KF9kb21DcmVhdGUoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbiAgfSk7XG5cbiAgLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG5cbiAgLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2VcbiAgLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbiAgdmFyIF90b1ByaW1pdGl2ZSA9IGZ1bmN0aW9uIChpdCwgUykge1xuICAgIGlmICghX2lzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICAgIHZhciBmbiwgdmFsO1xuICAgIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhX2lzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIV9pc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gICAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhX2lzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG4gIH07XG5cbiAgdmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4gIHZhciBmID0gX2Rlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICAgIF9hbk9iamVjdChPKTtcbiAgICBQID0gX3RvUHJpbWl0aXZlKFAsIHRydWUpO1xuICAgIF9hbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgICBpZiAoX2llOERvbURlZmluZSkgdHJ5IHtcbiAgICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICAgIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgIHJldHVybiBPO1xuICB9O1xuXG4gIHZhciBfb2JqZWN0RHAgPSB7XG4gIFx0ZjogZlxuICB9O1xuXG4gIHZhciBfcHJvcGVydHlEZXNjID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgICAgdmFsdWU6IHZhbHVlXG4gICAgfTtcbiAgfTtcblxuICB2YXIgX2hpZGUgPSBfZGVzY3JpcHRvcnMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gICAgcmV0dXJuIF9vYmplY3REcC5mKG9iamVjdCwga2V5LCBfcHJvcGVydHlEZXNjKDEsIHZhbHVlKSk7XG4gIH0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xuXG4gIHZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xuICB2YXIgX2hhcyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gICAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG4gIH07XG5cbiAgdmFyIF9mdW5jdGlvblRvU3RyaW5nID0gX3NoYXJlZCgnbmF0aXZlLWZ1bmN0aW9uLXRvLXN0cmluZycsIEZ1bmN0aW9uLnRvU3RyaW5nKTtcblxuICB2YXIgX3JlZGVmaW5lID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSkge1xuICB2YXIgU1JDID0gX3VpZCgnc3JjJyk7XG5cbiAgdmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG4gIHZhciBUUEwgPSAoJycgKyBfZnVuY3Rpb25Ub1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxuICBfY29yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIF9mdW5jdGlvblRvU3RyaW5nLmNhbGwoaXQpO1xuICB9O1xuXG4gIChtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICAgIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICAgIGlmIChpc0Z1bmN0aW9uKSBfaGFzKHZhbCwgJ25hbWUnKSB8fCBfaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgICBpZiAoaXNGdW5jdGlvbikgX2hhcyh2YWwsIFNSQykgfHwgX2hpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgICBpZiAoTyA9PT0gX2dsb2JhbCkge1xuICAgICAgT1trZXldID0gdmFsO1xuICAgIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICAgIGRlbGV0ZSBPW2tleV07XG4gICAgICBfaGlkZShPLCBrZXksIHZhbCk7XG4gICAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICAgIE9ba2V5XSA9IHZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgX2hpZGUoTywga2V5LCB2YWwpO1xuICAgIH1cbiAgLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG4gIH0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgX2Z1bmN0aW9uVG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfSk7XG4gIH0pO1xuXG4gIC8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xuXG4gIHZhciBfY3R4ID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgICBfYUZ1bmN0aW9uKGZuKTtcbiAgICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gICAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgICAgfTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgICAgfTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgICB9O1xuICB9O1xuXG4gIHZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuICB2YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICAgIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gX2dsb2JhbCA6IElTX1NUQVRJQyA/IF9nbG9iYWxbbmFtZV0gfHwgKF9nbG9iYWxbbmFtZV0gPSB7fSkgOiAoX2dsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IF9jb3JlIDogX2NvcmVbbmFtZV0gfHwgKF9jb3JlW25hbWVdID0ge30pO1xuICAgIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICAgIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gICAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gX2N0eChvdXQsIF9nbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gX2N0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgICAgaWYgKHRhcmdldCkgX3JlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgICAgLy8gZXhwb3J0XG4gICAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgX2hpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICAgIH1cbiAgfTtcbiAgX2dsb2JhbC5jb3JlID0gX2NvcmU7XG4gIC8vIHR5cGUgYml0bWFwXG4gICRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4gICRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4gICRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4gICRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiAgJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4gICRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuICAkZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiAgJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG4gIHZhciBfZXhwb3J0ID0gJGV4cG9ydDtcblxuICBfZXhwb3J0KHtcbiAgICB0YXJnZXQ6ICdSZWdFeHAnLFxuICAgIHByb3RvOiB0cnVlLFxuICAgIGZvcmNlZDogX3JlZ2V4cEV4ZWMgIT09IC8uLy5leGVjXG4gIH0sIHtcbiAgICBleGVjOiBfcmVnZXhwRXhlY1xuICB9KTtcblxuICB2YXIgU1BFQ0lFUyQxID0gX3drcygnc3BlY2llcycpO1xuXG4gIHZhciBSRVBMQUNFX1NVUFBPUlRTX05BTUVEX0dST1VQUyA9ICFfZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIC8vICNyZXBsYWNlIG5lZWRzIGJ1aWx0LWluIHN1cHBvcnQgZm9yIG5hbWVkIGdyb3Vwcy5cbiAgICAvLyAjbWF0Y2ggd29ya3MgZmluZSBiZWNhdXNlIGl0IGp1c3QgcmV0dXJuIHRoZSBleGVjIHJlc3VsdHMsIGV2ZW4gaWYgaXQgaGFzXG4gICAgLy8gYSBcImdyb3BzXCIgcHJvcGVydHkuXG4gICAgdmFyIHJlID0gLy4vO1xuICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICByZXN1bHQuZ3JvdXBzID0geyBhOiAnNycgfTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICByZXR1cm4gJycucmVwbGFjZShyZSwgJyQ8YT4nKSAhPT0gJzcnO1xuICB9KTtcblxuICB2YXIgU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDaHJvbWUgNTEgaGFzIGEgYnVnZ3kgXCJzcGxpdFwiIGltcGxlbWVudGF0aW9uIHdoZW4gUmVnRXhwI2V4ZWMgIT09IG5hdGl2ZUV4ZWNcbiAgICB2YXIgcmUgPSAvKD86KS87XG4gICAgdmFyIG9yaWdpbmFsRXhlYyA9IHJlLmV4ZWM7XG4gICAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9yaWdpbmFsRXhlYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIHZhciByZXN1bHQgPSAnYWInLnNwbGl0KHJlKTtcbiAgICByZXR1cm4gcmVzdWx0Lmxlbmd0aCA9PT0gMiAmJiByZXN1bHRbMF0gPT09ICdhJyAmJiByZXN1bHRbMV0gPT09ICdiJztcbiAgfSkoKTtcblxuICB2YXIgX2ZpeFJlV2tzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjKSB7XG4gICAgdmFyIFNZTUJPTCA9IF93a3MoS0VZKTtcblxuICAgIHZhciBERUxFR0FURVNfVE9fU1lNQk9MID0gIV9mYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBTdHJpbmcgbWV0aG9kcyBjYWxsIHN5bWJvbC1uYW1lZCBSZWdFcCBtZXRob2RzXG4gICAgICB2YXIgTyA9IHt9O1xuICAgICAgT1tTWU1CT0xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfTtcbiAgICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gICAgfSk7XG5cbiAgICB2YXIgREVMRUdBVEVTX1RPX0VYRUMgPSBERUxFR0FURVNfVE9fU1lNQk9MID8gIV9mYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBTeW1ib2wtbmFtZWQgUmVnRXhwIG1ldGhvZHMgY2FsbCAuZXhlY1xuICAgICAgdmFyIGV4ZWNDYWxsZWQgPSBmYWxzZTtcbiAgICAgIHZhciByZSA9IC9hLztcbiAgICAgIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7IGV4ZWNDYWxsZWQgPSB0cnVlOyByZXR1cm4gbnVsbDsgfTtcbiAgICAgIGlmIChLRVkgPT09ICdzcGxpdCcpIHtcbiAgICAgICAgLy8gUmVnRXhwW0BAc3BsaXRdIGRvZXNuJ3QgY2FsbCB0aGUgcmVnZXgncyBleGVjIG1ldGhvZCwgYnV0IGZpcnN0IGNyZWF0ZXNcbiAgICAgICAgLy8gYSBuZXcgb25lLiBXZSBuZWVkIHRvIHJldHVybiB0aGUgcGF0Y2hlZCByZWdleCB3aGVuIGNyZWF0aW5nIHRoZSBuZXcgb25lLlxuICAgICAgICByZS5jb25zdHJ1Y3RvciA9IHt9O1xuICAgICAgICByZS5jb25zdHJ1Y3RvcltTUEVDSUVTJDFdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gcmU7IH07XG4gICAgICB9XG4gICAgICByZVtTWU1CT0xdKCcnKTtcbiAgICAgIHJldHVybiAhZXhlY0NhbGxlZDtcbiAgICB9KSA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChcbiAgICAgICFERUxFR0FURVNfVE9fU1lNQk9MIHx8XG4gICAgICAhREVMRUdBVEVTX1RPX0VYRUMgfHxcbiAgICAgIChLRVkgPT09ICdyZXBsYWNlJyAmJiAhUkVQTEFDRV9TVVBQT1JUU19OQU1FRF9HUk9VUFMpIHx8XG4gICAgICAoS0VZID09PSAnc3BsaXQnICYmICFTUExJVF9XT1JLU19XSVRIX09WRVJXUklUVEVOX0VYRUMpXG4gICAgKSB7XG4gICAgICB2YXIgbmF0aXZlUmVnRXhwTWV0aG9kID0gLy4vW1NZTUJPTF07XG4gICAgICB2YXIgZm5zID0gZXhlYyhcbiAgICAgICAgX2RlZmluZWQsXG4gICAgICAgIFNZTUJPTCxcbiAgICAgICAgJydbS0VZXSxcbiAgICAgICAgZnVuY3Rpb24gbWF5YmVDYWxsTmF0aXZlKG5hdGl2ZU1ldGhvZCwgcmVnZXhwLCBzdHIsIGFyZzIsIGZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgaWYgKHJlZ2V4cC5leGVjID09PSBfcmVnZXhwRXhlYykge1xuICAgICAgICAgICAgaWYgKERFTEVHQVRFU19UT19TWU1CT0wgJiYgIWZvcmNlU3RyaW5nTWV0aG9kKSB7XG4gICAgICAgICAgICAgIC8vIFRoZSBuYXRpdmUgU3RyaW5nIG1ldGhvZCBhbHJlYWR5IGRlbGVnYXRlcyB0byBAQG1ldGhvZCAodGhpc1xuICAgICAgICAgICAgICAvLyBwb2x5ZmlsbGVkIGZ1bmN0aW9uKSwgbGVhc2luZyB0byBpbmZpbml0ZSByZWN1cnNpb24uXG4gICAgICAgICAgICAgIC8vIFdlIGF2b2lkIGl0IGJ5IGRpcmVjdGx5IGNhbGxpbmcgdGhlIG5hdGl2ZSBAQG1ldGhvZCBtZXRob2QuXG4gICAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVSZWdFeHBNZXRob2QuY2FsbChyZWdleHAsIHN0ciwgYXJnMikgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IGRvbmU6IHRydWUsIHZhbHVlOiBuYXRpdmVNZXRob2QuY2FsbChzdHIsIHJlZ2V4cCwgYXJnMikgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHsgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHZhciBzdHJmbiA9IGZuc1swXTtcbiAgICAgIHZhciByeGZuID0gZm5zWzFdO1xuXG4gICAgICBfcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBzdHJmbik7XG4gICAgICBfaGlkZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgICAgPyBmdW5jdGlvbiAoc3RyaW5nLCBhcmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgICAgLy8gMjEuMi41LjYgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXShzdHJpbmcpXG4gICAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgICAgOiBmdW5jdGlvbiAoc3RyaW5nKSB7IHJldHVybiByeGZuLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyICRtaW4gPSBNYXRoLm1pbjtcbiAgdmFyICRwdXNoID0gW10ucHVzaDtcbiAgdmFyICRTUExJVCA9ICdzcGxpdCc7XG4gIHZhciBMRU5HVEggPSAnbGVuZ3RoJztcbiAgdmFyIExBU1RfSU5ERVgkMSA9ICdsYXN0SW5kZXgnO1xuICB2YXIgTUFYX1VJTlQzMiA9IDB4ZmZmZmZmZmY7XG5cbiAgLy8gYmFiZWwtbWluaWZ5IHRyYW5zcGlsZXMgUmVnRXhwKCd4JywgJ3knKSAtPiAveC95IGFuZCBpdCBjYXVzZXMgU3ludGF4RXJyb3JcbiAgdmFyIFNVUFBPUlRTX1kgPSAhX2ZhaWxzKGZ1bmN0aW9uICgpIHsgfSk7XG5cbiAgLy8gQEBzcGxpdCBsb2dpY1xuICBfZml4UmVXa3MoJ3NwbGl0JywgMiwgZnVuY3Rpb24gKGRlZmluZWQsIFNQTElULCAkc3BsaXQsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICAgIHZhciBpbnRlcm5hbFNwbGl0O1xuICAgIGlmIChcbiAgICAgICdhYmJjJ1skU1BMSVRdKC8oYikqLylbMV0gPT0gJ2MnIHx8XG4gICAgICAndGVzdCdbJFNQTElUXSgvKD86KS8sIC0xKVtMRU5HVEhdICE9IDQgfHxcbiAgICAgICdhYidbJFNQTElUXSgvKD86YWIpKi8pW0xFTkdUSF0gIT0gMiB8fFxuICAgICAgJy4nWyRTUExJVF0oLyguPykoLj8pLylbTEVOR1RIXSAhPSA0IHx8XG4gICAgICAnLidbJFNQTElUXSgvKCkoKS8pW0xFTkdUSF0gPiAxIHx8XG4gICAgICAnJ1skU1BMSVRdKC8uPy8pW0xFTkdUSF1cbiAgICApIHtcbiAgICAgIC8vIGJhc2VkIG9uIGVzNS1zaGltIGltcGxlbWVudGF0aW9uLCBuZWVkIHRvIHJld29yayBpdFxuICAgICAgaW50ZXJuYWxTcGxpdCA9IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICAgIHZhciBzdHJpbmcgPSBTdHJpbmcodGhpcyk7XG4gICAgICAgIGlmIChzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgICAvLyBJZiBgc2VwYXJhdG9yYCBpcyBub3QgYSByZWdleCwgdXNlIG5hdGl2ZSBzcGxpdFxuICAgICAgICBpZiAoIV9pc1JlZ2V4cChzZXBhcmF0b3IpKSByZXR1cm4gJHNwbGl0LmNhbGwoc3RyaW5nLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICAgICAgdmFyIG91dHB1dCA9IFtdO1xuICAgICAgICB2YXIgZmxhZ3MgPSAoc2VwYXJhdG9yLmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAoc2VwYXJhdG9yLm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3IudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChzZXBhcmF0b3Iuc3RpY2t5ID8gJ3knIDogJycpO1xuICAgICAgICB2YXIgbGFzdExhc3RJbmRleCA9IDA7XG4gICAgICAgIHZhciBzcGxpdExpbWl0ID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgICAgLy8gTWFrZSBgZ2xvYmFsYCBhbmQgYXZvaWQgYGxhc3RJbmRleGAgaXNzdWVzIGJ5IHdvcmtpbmcgd2l0aCBhIGNvcHlcbiAgICAgICAgdmFyIHNlcGFyYXRvckNvcHkgPSBuZXcgUmVnRXhwKHNlcGFyYXRvci5zb3VyY2UsIGZsYWdzICsgJ2cnKTtcbiAgICAgICAgdmFyIG1hdGNoLCBsYXN0SW5kZXgsIGxhc3RMZW5ndGg7XG4gICAgICAgIHdoaWxlIChtYXRjaCA9IF9yZWdleHBFeGVjLmNhbGwoc2VwYXJhdG9yQ29weSwgc3RyaW5nKSkge1xuICAgICAgICAgIGxhc3RJbmRleCA9IHNlcGFyYXRvckNvcHlbTEFTVF9JTkRFWCQxXTtcbiAgICAgICAgICBpZiAobGFzdEluZGV4ID4gbGFzdExhc3RJbmRleCkge1xuICAgICAgICAgICAgb3V0cHV0LnB1c2goc3RyaW5nLnNsaWNlKGxhc3RMYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICAgICAgICBpZiAobWF0Y2hbTEVOR1RIXSA+IDEgJiYgbWF0Y2guaW5kZXggPCBzdHJpbmdbTEVOR1RIXSkgJHB1c2guYXBwbHkob3V0cHV0LCBtYXRjaC5zbGljZSgxKSk7XG4gICAgICAgICAgICBsYXN0TGVuZ3RoID0gbWF0Y2hbMF1bTEVOR1RIXTtcbiAgICAgICAgICAgIGxhc3RMYXN0SW5kZXggPSBsYXN0SW5kZXg7XG4gICAgICAgICAgICBpZiAob3V0cHV0W0xFTkdUSF0gPj0gc3BsaXRMaW1pdCkgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVgkMV0gPT09IG1hdGNoLmluZGV4KSBzZXBhcmF0b3JDb3B5W0xBU1RfSU5ERVgkMV0rKzsgLy8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcFxuICAgICAgICB9XG4gICAgICAgIGlmIChsYXN0TGFzdEluZGV4ID09PSBzdHJpbmdbTEVOR1RIXSkge1xuICAgICAgICAgIGlmIChsYXN0TGVuZ3RoIHx8ICFzZXBhcmF0b3JDb3B5LnRlc3QoJycpKSBvdXRwdXQucHVzaCgnJyk7XG4gICAgICAgIH0gZWxzZSBvdXRwdXQucHVzaChzdHJpbmcuc2xpY2UobGFzdExhc3RJbmRleCkpO1xuICAgICAgICByZXR1cm4gb3V0cHV0W0xFTkdUSF0gPiBzcGxpdExpbWl0ID8gb3V0cHV0LnNsaWNlKDAsIHNwbGl0TGltaXQpIDogb3V0cHV0O1xuICAgICAgfTtcbiAgICAvLyBDaGFrcmEsIFY4XG4gICAgfSBlbHNlIGlmICgnMCdbJFNQTElUXSh1bmRlZmluZWQsIDApW0xFTkdUSF0pIHtcbiAgICAgIGludGVybmFsU3BsaXQgPSBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgICByZXR1cm4gc2VwYXJhdG9yID09PSB1bmRlZmluZWQgJiYgbGltaXQgPT09IDAgPyBbXSA6ICRzcGxpdC5jYWxsKHRoaXMsIHNlcGFyYXRvciwgbGltaXQpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW50ZXJuYWxTcGxpdCA9ICRzcGxpdDtcbiAgICB9XG5cbiAgICByZXR1cm4gW1xuICAgICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIG1ldGhvZFxuICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zcGxpdFxuICAgICAgZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgICAgICB2YXIgTyA9IGRlZmluZWQodGhpcyk7XG4gICAgICAgIHZhciBzcGxpdHRlciA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xuICAgICAgICByZXR1cm4gc3BsaXR0ZXIgIT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gc3BsaXR0ZXIuY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KVxuICAgICAgICAgIDogaW50ZXJuYWxTcGxpdC5jYWxsKFN0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XG4gICAgICB9LFxuICAgICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF1gIG1ldGhvZFxuICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNwbGl0XG4gICAgICAvL1xuICAgICAgLy8gTk9URTogVGhpcyBjYW5ub3QgYmUgcHJvcGVybHkgcG9seWZpbGxlZCBpbiBlbmdpbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydFxuICAgICAgLy8gdGhlICd5JyBmbGFnLlxuICAgICAgZnVuY3Rpb24gKHJlZ2V4cCwgbGltaXQpIHtcbiAgICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShpbnRlcm5hbFNwbGl0LCByZWdleHAsIHRoaXMsIGxpbWl0LCBpbnRlcm5hbFNwbGl0ICE9PSAkc3BsaXQpO1xuICAgICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgICAgdmFyIHJ4ID0gX2FuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgICAgICB2YXIgQyA9IF9zcGVjaWVzQ29uc3RydWN0b3IocngsIFJlZ0V4cCk7XG5cbiAgICAgICAgdmFyIHVuaWNvZGVNYXRjaGluZyA9IHJ4LnVuaWNvZGU7XG4gICAgICAgIHZhciBmbGFncyA9IChyeC5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKHJ4Lm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgIChyeC51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKFNVUFBPUlRTX1kgPyAneScgOiAnZycpO1xuXG4gICAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBTIHNsaWNpbmcsIHRvXG4gICAgICAgIC8vIHNpbXVsYXRlIHRoZSAneScgZmxhZy5cbiAgICAgICAgdmFyIHNwbGl0dGVyID0gbmV3IEMoU1VQUE9SVFNfWSA/IHJ4IDogJ14oPzonICsgcnguc291cmNlICsgJyknLCBmbGFncyk7XG4gICAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgICBpZiAobGltID09PSAwKSByZXR1cm4gW107XG4gICAgICAgIGlmIChTLmxlbmd0aCA9PT0gMCkgcmV0dXJuIF9yZWdleHBFeGVjQWJzdHJhY3Qoc3BsaXR0ZXIsIFMpID09PSBudWxsID8gW1NdIDogW107XG4gICAgICAgIHZhciBwID0gMDtcbiAgICAgICAgdmFyIHEgPSAwO1xuICAgICAgICB2YXIgQSA9IFtdO1xuICAgICAgICB3aGlsZSAocSA8IFMubGVuZ3RoKSB7XG4gICAgICAgICAgc3BsaXR0ZXIubGFzdEluZGV4ID0gU1VQUE9SVFNfWSA/IHEgOiAwO1xuICAgICAgICAgIHZhciB6ID0gX3JlZ2V4cEV4ZWNBYnN0cmFjdChzcGxpdHRlciwgU1VQUE9SVFNfWSA/IFMgOiBTLnNsaWNlKHEpKTtcbiAgICAgICAgICB2YXIgZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB6ID09PSBudWxsIHx8XG4gICAgICAgICAgICAoZSA9ICRtaW4oX3RvTGVuZ3RoKHNwbGl0dGVyLmxhc3RJbmRleCArIChTVVBQT1JUU19ZID8gMCA6IHEpKSwgUy5sZW5ndGgpKSA9PT0gcFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcSA9IF9hZHZhbmNlU3RyaW5nSW5kZXgoUywgcSwgdW5pY29kZU1hdGNoaW5nKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgQS5wdXNoKFMuc2xpY2UocCwgcSkpO1xuICAgICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gei5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgQS5wdXNoKHpbaV0pO1xuICAgICAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxID0gcCA9IGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEEucHVzaChTLnNsaWNlKHApKTtcbiAgICAgICAgcmV0dXJuIEE7XG4gICAgICB9XG4gICAgXTtcbiAgfSk7XG5cbiAgLypcclxuICAqIHJlcXVpcmVkIHBvbHlmaWxsc1xyXG4gICovXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICAoZnVuY3Rpb24gKCkge1xuICAgIGlmICh0eXBlb2YgTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuICB9KSgpO1xuICAvKiogSUU5LCBJRTEwIGFuZCBJRTExIHJlcXVpcmVzIGFsbCBvZiB0aGUgZm9sbG93aW5nIHBvbHlmaWxscy4gKiovXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvc3ltYm9sJ1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L29iamVjdCdcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9mdW5jdGlvbidcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9wYXJzZS1pbnQnXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvcGFyc2UtZmxvYXQnXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvbnVtYmVyJ1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L21hdGgnXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvc3RyaW5nJ1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L2RhdGUnXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvYXJyYXknXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczYvcmVnZXhwJ1xuICAvLyBpbXBvcnQgJ2NvcmUtanMvZXM2L21hcCdcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi93ZWFrLW1hcCdcbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9zZXQnXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczcvb2JqZWN0J1xuXG4gIC8qKiBJRTEwIGFuZCBJRTExIHJlcXVpcmVzIHRoZSBmb2xsb3dpbmcgZm9yIHRoZSBSZWZsZWN0IEFQSS4gKi9cbiAgLy8gaW1wb3J0ICdjb3JlLWpzL2VzNi9yZWZsZWN0J1xuXG4gIC8qKiBFdmVyZ3JlZW4gYnJvd3NlcnMgcmVxdWlyZSB0aGVzZS4gKiovXG4gIC8vIFVzZWQgZm9yIHJlZmxlY3QtbWV0YWRhdGEgaW4gSklULiBJZiB5b3UgdXNlIEFPVCAoYW5kIG9ubHkgQW5ndWxhciBkZWNvcmF0b3JzKSwgeW91IGNhbiByZW1vdmUuXG4gIC8vIGltcG9ydCAnY29yZS1qcy9lczcvcmVmbGVjdCdcbiAgLy8gQ3VzdG9tRXZlbnQoKSBjb25zdHJ1Y3RvciBmdW5jdGlvbmFsaXR5IGluIElFOSwgSUUxMCwgSUUxMVxuICAvLyAoZnVuY3Rpb24gKCkge1xuICAvL1xuICAvLyAgIGlmICggdHlwZW9mIHdpbmRvdy5DdXN0b21FdmVudCA9PT0gXCJmdW5jdGlvblwiICkgcmV0dXJuIGZhbHNlXG4gIC8vXG4gIC8vICAgZnVuY3Rpb24gQ3VzdG9tRXZlbnQgKCBldmVudCwgcGFyYW1zICkge1xuICAvLyAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHsgYnViYmxlczogZmFsc2UsIGNhbmNlbGFibGU6IGZhbHNlLCBkZXRhaWw6IHVuZGVmaW5lZCB9XG4gIC8vICAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoICdDdXN0b21FdmVudCcgKVxuICAvLyAgICAgZXZ0LmluaXRDdXN0b21FdmVudCggZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCApXG4gIC8vICAgICByZXR1cm4gZXZ0XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIEN1c3RvbUV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGVcbiAgLy9cbiAgLy8gICB3aW5kb3cuQ3VzdG9tRXZlbnQgPSBDdXN0b21FdmVudFxuICAvLyB9KSgpXG5cbiAgLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIHZhciBfaW9iamVjdCA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIF9jb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbiAgfTtcblxuICAvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcblxuXG4gIHZhciBfdG9Jb2JqZWN0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIF9pb2JqZWN0KF9kZWZpbmVkKGl0KSk7XG4gIH07XG5cbiAgdmFyIG1heCA9IE1hdGgubWF4O1xuICB2YXIgbWluJDEgPSBNYXRoLm1pbjtcbiAgdmFyIF90b0Fic29sdXRlSW5kZXggPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICAgIGluZGV4ID0gX3RvSW50ZWdlcihpbmRleCk7XG4gICAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4kMShpbmRleCwgbGVuZ3RoKTtcbiAgfTtcblxuICAvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4gIC8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG5cblxuXG4gIHZhciBfYXJyYXlJbmNsdWRlcyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICAgIHZhciBPID0gX3RvSW9iamVjdCgkdGhpcyk7XG4gICAgICB2YXIgbGVuZ3RoID0gX3RvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIHZhciBpbmRleCA9IF90b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgICAgdmFyIHZhbHVlO1xuICAgICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIHNoYXJlZCA9IF9zaGFyZWQoJ2tleXMnKTtcblxuICB2YXIgX3NoYXJlZEtleSA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gX3VpZChrZXkpKTtcbiAgfTtcblxuICB2YXIgYXJyYXlJbmRleE9mID0gX2FycmF5SW5jbHVkZXMoZmFsc2UpO1xuICB2YXIgSUVfUFJPVE8gPSBfc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXG4gIHZhciBfb2JqZWN0S2V5c0ludGVybmFsID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgICB2YXIgTyA9IF90b0lvYmplY3Qob2JqZWN0KTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXk7XG4gICAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgX2hhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICAgIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoX2hhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICAvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG4gIHZhciBfZW51bUJ1Z0tleXMgPSAoXG4gICAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbiAgKS5zcGxpdCgnLCcpO1xuXG4gIC8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxuXG5cblxuICB2YXIgX29iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgICByZXR1cm4gX29iamVjdEtleXNJbnRlcm5hbChPLCBfZW51bUJ1Z0tleXMpO1xuICB9O1xuXG4gIHZhciBmJDEgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIHZhciBfb2JqZWN0R29wcyA9IHtcbiAgXHRmOiBmJDFcbiAgfTtcblxuICB2YXIgZiQyID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbiAgdmFyIF9vYmplY3RQaWUgPSB7XG4gIFx0ZjogZiQyXG4gIH07XG5cbiAgLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxuXG4gIHZhciBfdG9PYmplY3QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gT2JqZWN0KF9kZWZpbmVkKGl0KSk7XG4gIH07XG5cbiAgLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxuXG5cblxuXG5cbiAgdmFyICRhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4gIC8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxuICB2YXIgX29iamVjdEFzc2lnbiA9ICEkYXNzaWduIHx8IF9mYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIEEgPSB7fTtcbiAgICB2YXIgQiA9IHt9O1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBTID0gU3ltYm9sKCk7XG4gICAgdmFyIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICAgIEFbU10gPSA3O1xuICAgIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGspIHsgQltrXSA9IGs7IH0pO1xuICAgIHJldHVybiAkYXNzaWduKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKCRhc3NpZ24oe30sIEIpKS5qb2luKCcnKSAhPSBLO1xuICB9KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdmFyIFQgPSBfdG9PYmplY3QodGFyZ2V0KTtcbiAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdmFyIGluZGV4ID0gMTtcbiAgICB2YXIgZ2V0U3ltYm9scyA9IF9vYmplY3RHb3BzLmY7XG4gICAgdmFyIGlzRW51bSA9IF9vYmplY3RQaWUuZjtcbiAgICB3aGlsZSAoYUxlbiA+IGluZGV4KSB7XG4gICAgICB2YXIgUyA9IF9pb2JqZWN0KGFyZ3VtZW50c1tpbmRleCsrXSk7XG4gICAgICB2YXIga2V5cyA9IGdldFN5bWJvbHMgPyBfb2JqZWN0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBfb2JqZWN0S2V5cyhTKTtcbiAgICAgIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICAgIHZhciBqID0gMDtcbiAgICAgIHZhciBrZXk7XG4gICAgICB3aGlsZSAobGVuZ3RoID4gaikgaWYgKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpIFRba2V5XSA9IFNba2V5XTtcbiAgICB9IHJldHVybiBUO1xuICB9IDogJGFzc2lnbjtcblxuICAvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxuXG5cbiAgX2V4cG9ydChfZXhwb3J0LlMgKyBfZXhwb3J0LkYsICdPYmplY3QnLCB7IGFzc2lnbjogX29iamVjdEFzc2lnbiB9KTtcblxuICB2YXIgX2l0ZXJhdG9ycyA9IHt9O1xuXG4gIHZhciBfb2JqZWN0RHBzID0gX2Rlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgICBfYW5PYmplY3QoTyk7XG4gICAgdmFyIGtleXMgPSBfb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBQO1xuICAgIHdoaWxlIChsZW5ndGggPiBpKSBfb2JqZWN0RHAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgICByZXR1cm4gTztcbiAgfTtcblxuICB2YXIgZG9jdW1lbnQkMiA9IF9nbG9iYWwuZG9jdW1lbnQ7XG4gIHZhciBfaHRtbCA9IGRvY3VtZW50JDIgJiYgZG9jdW1lbnQkMi5kb2N1bWVudEVsZW1lbnQ7XG5cbiAgLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG5cblxuXG4gIHZhciBJRV9QUk9UTyQxID0gX3NoYXJlZEtleSgnSUVfUFJPVE8nKTtcbiAgdmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuICB2YXIgUFJPVE9UWVBFJDEgPSAncHJvdG90eXBlJztcblxuICAvLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG4gIHZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gICAgdmFyIGlmcmFtZSA9IF9kb21DcmVhdGUoJ2lmcmFtZScpO1xuICAgIHZhciBpID0gX2VudW1CdWdLZXlzLmxlbmd0aDtcbiAgICB2YXIgbHQgPSAnPCc7XG4gICAgdmFyIGd0ID0gJz4nO1xuICAgIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBfaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAgIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICAgIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gICAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEUkMV1bX2VudW1CdWdLZXlzW2ldXTtcbiAgICByZXR1cm4gY3JlYXRlRGljdCgpO1xuICB9O1xuXG4gIHZhciBfb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICAgIHZhciByZXN1bHQ7XG4gICAgaWYgKE8gIT09IG51bGwpIHtcbiAgICAgIEVtcHR5W1BST1RPVFlQRSQxXSA9IF9hbk9iamVjdChPKTtcbiAgICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgICAgRW1wdHlbUFJPVE9UWVBFJDFdID0gbnVsbDtcbiAgICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICAgIHJlc3VsdFtJRV9QUk9UTyQxXSA9IE87XG4gICAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogX29iamVjdERwcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xuICB9O1xuXG4gIHZhciBkZWYgPSBfb2JqZWN0RHAuZjtcblxuICB2YXIgVEFHJDEgPSBfd2tzKCd0b1N0cmluZ1RhZycpO1xuXG4gIHZhciBfc2V0VG9TdHJpbmdUYWcgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICAgIGlmIChpdCAmJiAhX2hhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHJDEpKSBkZWYoaXQsIFRBRyQxLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbiAgfTtcblxuICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuICAvLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxuICBfaGlkZShJdGVyYXRvclByb3RvdHlwZSwgX3drcygnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbiAgdmFyIF9pdGVyQ3JlYXRlID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gICAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gX29iamVjdENyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBfcHJvcGVydHlEZXNjKDEsIG5leHQpIH0pO1xuICAgIF9zZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbiAgfTtcblxuICAvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxuXG5cbiAgdmFyIElFX1BST1RPJDIgPSBfc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuICB2YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4gIHZhciBfb2JqZWN0R3BvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gICAgTyA9IF90b09iamVjdChPKTtcbiAgICBpZiAoX2hhcyhPLCBJRV9QUk9UTyQyKSkgcmV0dXJuIE9bSUVfUFJPVE8kMl07XG4gICAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xuICB9O1xuXG4gIHZhciBJVEVSQVRPUiA9IF93a3MoJ2l0ZXJhdG9yJyk7XG4gIHZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICB2YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG4gIHZhciBLRVlTID0gJ2tleXMnO1xuICB2YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbiAgdmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG4gIHZhciBfaXRlckRlZmluZSA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgICBfaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gICAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfTtcbiAgICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICAgIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gICAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICAgIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgICAvLyBGaXggbmF0aXZlXG4gICAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gX29iamVjdEdwbygkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgICBfc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgICBpZiAodHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBfaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gICAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgICB9XG4gICAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gICAgaWYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkge1xuICAgICAgX2hpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gICAgfVxuICAgIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgICBfaXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gICAgX2l0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgICBpZiAoREVGQVVMVCkge1xuICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgICB9O1xuICAgICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSBfcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICAgIH0gZWxzZSBfZXhwb3J0KF9leHBvcnQuUCArIF9leHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gICAgfVxuICAgIHJldHVybiBtZXRob2RzO1xuICB9O1xuXG4gIHZhciAkYXQgPSBfc3RyaW5nQXQodHJ1ZSk7XG5cbiAgLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxuICBfaXRlckRlZmluZShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gICAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxuICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIE8gPSB0aGlzLl90O1xuICAgIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gICAgdmFyIHBvaW50O1xuICAgIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICAgIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG4gIH0pO1xuXG4gIC8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcblxuICB2YXIgX2l0ZXJDYWxsID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGVudHJpZXMgPyBmbihfYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gICAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBfYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9O1xuXG4gIC8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcblxuICB2YXIgSVRFUkFUT1IkMSA9IF93a3MoJ2l0ZXJhdG9yJyk7XG4gIHZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4gIHZhciBfaXNBcnJheUl0ZXIgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoX2l0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUiQxXSA9PT0gaXQpO1xuICB9O1xuXG4gIHZhciBfY3JlYXRlUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqZWN0LCBpbmRleCwgdmFsdWUpIHtcbiAgICBpZiAoaW5kZXggaW4gb2JqZWN0KSBfb2JqZWN0RHAuZihvYmplY3QsIGluZGV4LCBfcHJvcGVydHlEZXNjKDAsIHZhbHVlKSk7XG4gICAgZWxzZSBvYmplY3RbaW5kZXhdID0gdmFsdWU7XG4gIH07XG5cbiAgdmFyIElURVJBVE9SJDIgPSBfd2tzKCdpdGVyYXRvcicpO1xuXG4gIHZhciBjb3JlX2dldEl0ZXJhdG9yTWV0aG9kID0gX2NvcmUuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1IkMl1cbiAgICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICAgIHx8IF9pdGVyYXRvcnNbX2NsYXNzb2YoaXQpXTtcbiAgfTtcblxuICB2YXIgSVRFUkFUT1IkMyA9IF93a3MoJ2l0ZXJhdG9yJyk7XG4gIHZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxuICB0cnkge1xuICAgIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUiQzXSgpO1xuICAgIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbiAgdmFyIF9pdGVyRGV0ZWN0ID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gICAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gICAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgdmFyIGFyciA9IFs3XTtcbiAgICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SJDNdKCk7XG4gICAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgICBhcnJbSVRFUkFUT1IkM10gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgICAgZXhlYyhhcnIpO1xuICAgIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICAgIHJldHVybiBzYWZlO1xuICB9O1xuXG4gIF9leHBvcnQoX2V4cG9ydC5TICsgX2V4cG9ydC5GICogIV9pdGVyRGV0ZWN0KGZ1bmN0aW9uIChpdGVyKSB7IH0pLCAnQXJyYXknLCB7XG4gICAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlIC8qICwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgIHZhciBPID0gX3RvT2JqZWN0KGFycmF5TGlrZSk7XG4gICAgICB2YXIgQyA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXk7XG4gICAgICB2YXIgYUxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICB2YXIgbWFwZm4gPSBhTGVuID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcbiAgICAgIHZhciBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZDtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgaXRlckZuID0gY29yZV9nZXRJdGVyYXRvck1ldGhvZChPKTtcbiAgICAgIHZhciBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgICBpZiAobWFwcGluZykgbWFwZm4gPSBfY3R4KG1hcGZuLCBhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICAgIGlmIChpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBfaXNBcnJheUl0ZXIoaXRlckZuKSkpIHtcbiAgICAgICAgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQygpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4KyspIHtcbiAgICAgICAgICBfY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IF9pdGVyQ2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlbmd0aCA9IF90b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICAgIGZvciAocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgICAgICBfY3JlYXRlUHJvcGVydHkocmVzdWx0LCBpbmRleCwgbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9KTtcblxuICB2YXIgbWF4JDEgPSBNYXRoLm1heDtcbiAgdmFyIG1pbiQyID0gTWF0aC5taW47XG4gIHZhciBmbG9vciQxID0gTWF0aC5mbG9vcjtcbiAgdmFyIFNVQlNUSVRVVElPTl9TWU1CT0xTID0gL1xcJChbJCZgJ118XFxkXFxkP3w8W14+XSo+KS9nO1xuICB2YXIgU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQgPSAvXFwkKFskJmAnXXxcXGRcXGQ/KS9nO1xuXG4gIHZhciBtYXliZVRvU3RyaW5nID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyBpdCA6IFN0cmluZyhpdCk7XG4gIH07XG5cbiAgLy8gQEByZXBsYWNlIGxvZ2ljXG4gIF9maXhSZVdrcygncmVwbGFjZScsIDIsIGZ1bmN0aW9uIChkZWZpbmVkLCBSRVBMQUNFLCAkcmVwbGFjZSwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2VgIG1ldGhvZFxuICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlXG4gICAgICBmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgICAgICB2YXIgZm4gPSBzZWFyY2hWYWx1ZSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWFyY2hWYWx1ZVtSRVBMQUNFXTtcbiAgICAgICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWRcbiAgICAgICAgICA/IGZuLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgICAgICA6ICRyZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgICAgIH0sXG4gICAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdYCBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEByZXBsYWNlXG4gICAgICBmdW5jdGlvbiAocmVnZXhwLCByZXBsYWNlVmFsdWUpIHtcbiAgICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZSgkcmVwbGFjZSwgcmVnZXhwLCB0aGlzLCByZXBsYWNlVmFsdWUpO1xuICAgICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG5cbiAgICAgICAgdmFyIHJ4ID0gX2FuT2JqZWN0KHJlZ2V4cCk7XG4gICAgICAgIHZhciBTID0gU3RyaW5nKHRoaXMpO1xuICAgICAgICB2YXIgZnVuY3Rpb25hbFJlcGxhY2UgPSB0eXBlb2YgcmVwbGFjZVZhbHVlID09PSAnZnVuY3Rpb24nO1xuICAgICAgICBpZiAoIWZ1bmN0aW9uYWxSZXBsYWNlKSByZXBsYWNlVmFsdWUgPSBTdHJpbmcocmVwbGFjZVZhbHVlKTtcbiAgICAgICAgdmFyIGdsb2JhbCA9IHJ4Lmdsb2JhbDtcbiAgICAgICAgaWYgKGdsb2JhbCkge1xuICAgICAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICAgICAgcngubGFzdEluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0cyA9IFtdO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgIHZhciByZXN1bHQgPSBfcmVnZXhwRXhlY0Fic3RyYWN0KHJ4LCBTKTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsKSBicmVhaztcbiAgICAgICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICAgICAgICBpZiAoIWdsb2JhbCkgYnJlYWs7XG4gICAgICAgICAgdmFyIG1hdGNoU3RyID0gU3RyaW5nKHJlc3VsdFswXSk7XG4gICAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gX2FkdmFuY2VTdHJpbmdJbmRleChTLCBfdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhY2N1bXVsYXRlZFJlc3VsdCA9ICcnO1xuICAgICAgICB2YXIgbmV4dFNvdXJjZVBvc2l0aW9uID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0c1tpXTtcbiAgICAgICAgICB2YXIgbWF0Y2hlZCA9IFN0cmluZyhyZXN1bHRbMF0pO1xuICAgICAgICAgIHZhciBwb3NpdGlvbiA9IG1heCQxKG1pbiQyKF90b0ludGVnZXIocmVzdWx0LmluZGV4KSwgUy5sZW5ndGgpLCAwKTtcbiAgICAgICAgICB2YXIgY2FwdHVyZXMgPSBbXTtcbiAgICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGVxdWl2YWxlbnQgdG9cbiAgICAgICAgICAvLyAgIGNhcHR1cmVzID0gcmVzdWx0LnNsaWNlKDEpLm1hcChtYXliZVRvU3RyaW5nKVxuICAgICAgICAgIC8vIGJ1dCBmb3Igc29tZSByZWFzb24gYG5hdGl2ZVNsaWNlLmNhbGwocmVzdWx0LCAxLCByZXN1bHQubGVuZ3RoKWAgKGNhbGxlZCBpblxuICAgICAgICAgIC8vIHRoZSBzbGljZSBwb2x5ZmlsbCB3aGVuIHNsaWNpbmcgbmF0aXZlIGFycmF5cykgXCJkb2Vzbid0IHdvcmtcIiBpbiBzYWZhcmkgOSBhbmRcbiAgICAgICAgICAvLyBjYXVzZXMgYSBjcmFzaCAoaHR0cHM6Ly9wYXN0ZWJpbi5jb20vTjIxUXplUUEpIHdoZW4gdHJ5aW5nIHRvIGRlYnVnIGl0LlxuICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgcmVzdWx0Lmxlbmd0aDsgaisrKSBjYXB0dXJlcy5wdXNoKG1heWJlVG9TdHJpbmcocmVzdWx0W2pdKSk7XG4gICAgICAgICAgdmFyIG5hbWVkQ2FwdHVyZXMgPSByZXN1bHQuZ3JvdXBzO1xuICAgICAgICAgIGlmIChmdW5jdGlvbmFsUmVwbGFjZSkge1xuICAgICAgICAgICAgdmFyIHJlcGxhY2VyQXJncyA9IFttYXRjaGVkXS5jb25jYXQoY2FwdHVyZXMsIHBvc2l0aW9uLCBTKTtcbiAgICAgICAgICAgIGlmIChuYW1lZENhcHR1cmVzICE9PSB1bmRlZmluZWQpIHJlcGxhY2VyQXJncy5wdXNoKG5hbWVkQ2FwdHVyZXMpO1xuICAgICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gU3RyaW5nKHJlcGxhY2VWYWx1ZS5hcHBseSh1bmRlZmluZWQsIHJlcGxhY2VyQXJncykpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXBsYWNlbWVudCA9IGdldFN1YnN0aXR1dGlvbihtYXRjaGVkLCBTLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwb3NpdGlvbiA+PSBuZXh0U291cmNlUG9zaXRpb24pIHtcbiAgICAgICAgICAgIGFjY3VtdWxhdGVkUmVzdWx0ICs9IFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uLCBwb3NpdGlvbikgKyByZXBsYWNlbWVudDtcbiAgICAgICAgICAgIG5leHRTb3VyY2VQb3NpdGlvbiA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRlZFJlc3VsdCArIFMuc2xpY2UobmV4dFNvdXJjZVBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1nZXRzdWJzdGl0dXRpb25cbiAgICBmdW5jdGlvbiBnZXRTdWJzdGl0dXRpb24obWF0Y2hlZCwgc3RyLCBwb3NpdGlvbiwgY2FwdHVyZXMsIG5hbWVkQ2FwdHVyZXMsIHJlcGxhY2VtZW50KSB7XG4gICAgICB2YXIgdGFpbFBvcyA9IHBvc2l0aW9uICsgbWF0Y2hlZC5sZW5ndGg7XG4gICAgICB2YXIgbSA9IGNhcHR1cmVzLmxlbmd0aDtcbiAgICAgIHZhciBzeW1ib2xzID0gU1VCU1RJVFVUSU9OX1NZTUJPTFNfTk9fTkFNRUQ7XG4gICAgICBpZiAobmFtZWRDYXB0dXJlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5hbWVkQ2FwdHVyZXMgPSBfdG9PYmplY3QobmFtZWRDYXB0dXJlcyk7XG4gICAgICAgIHN5bWJvbHMgPSBTVUJTVElUVVRJT05fU1lNQk9MUztcbiAgICAgIH1cbiAgICAgIHJldHVybiAkcmVwbGFjZS5jYWxsKHJlcGxhY2VtZW50LCBzeW1ib2xzLCBmdW5jdGlvbiAobWF0Y2gsIGNoKSB7XG4gICAgICAgIHZhciBjYXB0dXJlO1xuICAgICAgICBzd2l0Y2ggKGNoLmNoYXJBdCgwKSkge1xuICAgICAgICAgIGNhc2UgJyQnOiByZXR1cm4gJyQnO1xuICAgICAgICAgIGNhc2UgJyYnOiByZXR1cm4gbWF0Y2hlZDtcbiAgICAgICAgICBjYXNlICdgJzogcmV0dXJuIHN0ci5zbGljZSgwLCBwb3NpdGlvbik7XG4gICAgICAgICAgY2FzZSBcIidcIjogcmV0dXJuIHN0ci5zbGljZSh0YWlsUG9zKTtcbiAgICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICAgIGNhcHR1cmUgPSBuYW1lZENhcHR1cmVzW2NoLnNsaWNlKDEsIC0xKV07XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OiAvLyBcXGRcXGQ/XG4gICAgICAgICAgICB2YXIgbiA9ICtjaDtcbiAgICAgICAgICAgIGlmIChuID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICBpZiAobiA+IG0pIHtcbiAgICAgICAgICAgICAgdmFyIGYgPSBmbG9vciQxKG4gLyAxMCk7XG4gICAgICAgICAgICAgIGlmIChmID09PSAwKSByZXR1cm4gbWF0Y2g7XG4gICAgICAgICAgICAgIGlmIChmIDw9IG0pIHJldHVybiBjYXB0dXJlc1tmIC0gMV0gPT09IHVuZGVmaW5lZCA/IGNoLmNoYXJBdCgxKSA6IGNhcHR1cmVzW2YgLSAxXSArIGNoLmNoYXJBdCgxKTtcbiAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FwdHVyZSA9IGNhcHR1cmVzW24gLSAxXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FwdHVyZSA9PT0gdW5kZWZpbmVkID8gJycgOiBjYXB0dXJlO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH1cblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSAodjIuMS45KTogYWpheC1sb2FkLmpzXHJcbiAgICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2NvcmV1aS5pby9saWNlbnNlKVxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXG5cbiAgdmFyIEFqYXhMb2FkID0gZnVuY3Rpb24gKCQpIHtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogQ29uc3RhbnRzXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuICAgIHZhciBOQU1FID0gJ2FqYXhMb2FkJztcbiAgICB2YXIgVkVSU0lPTiA9ICcyLjEuOSc7XG4gICAgdmFyIERBVEFfS0VZID0gJ2NvcmV1aS5hamF4TG9hZCc7XG4gICAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gICAgdmFyIENsYXNzTmFtZSA9IHtcbiAgICAgIEFDVElWRTogJ2FjdGl2ZScsXG4gICAgICBOQVZfUElMTFM6ICduYXYtcGlsbHMnLFxuICAgICAgTkFWX1RBQlM6ICduYXYtdGFicycsXG4gICAgICBPUEVOOiAnb3BlbicsXG4gICAgICBWSUVXX1NDUklQVDogJ3ZpZXctc2NyaXB0J1xuICAgIH07XG4gICAgdmFyIEV2ZW50ID0ge1xuICAgICAgQ0xJQ0s6ICdjbGljaydcbiAgICB9O1xuICAgIHZhciBTZWxlY3RvciA9IHtcbiAgICAgIEhFQUQ6ICdoZWFkJyxcbiAgICAgIE5BVl9EUk9QRE9XTjogJy5zaWRlYmFyLW5hdiAubmF2LWRyb3Bkb3duJyxcbiAgICAgIE5BVl9MSU5LOiAnLnNpZGViYXItbmF2IC5uYXYtbGluaycsXG4gICAgICBOQVZfSVRFTTogJy5zaWRlYmFyLW5hdiAubmF2LWl0ZW0nLFxuICAgICAgVklFV19TQ1JJUFQ6ICcudmlldy1zY3JpcHQnXG4gICAgfTtcbiAgICB2YXIgRGVmYXVsdCA9IHtcbiAgICAgIGRlZmF1bHRQYWdlOiAnbWFpbi5odG1sJyxcbiAgICAgIGVycm9yUGFnZTogJzQwNC5odG1sJyxcbiAgICAgIHN1YnBhZ2VzRGlyZWN0b3J5OiAndmlld3MvJ1xuICAgIH07XG5cbiAgICB2YXIgQWpheExvYWQgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiBBamF4TG9hZChlbGVtZW50LCBjb25maWcpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZyk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB2YXIgdXJsID0gbG9jYXRpb24uaGFzaC5yZXBsYWNlKC9eIy8sICcnKTtcblxuICAgICAgICBpZiAodXJsICE9PSAnJykge1xuICAgICAgICAgIHRoaXMuc2V0VXBVcmwodXJsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnNldFVwVXJsKHRoaXMuX2NvbmZpZy5kZWZhdWx0UGFnZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgICAgdmFyIF9wcm90byA9IEFqYXhMb2FkLnByb3RvdHlwZTtcblxuICAgICAgLy8gUHVibGljXG4gICAgICBfcHJvdG8ubG9hZFBhZ2UgPSBmdW5jdGlvbiBsb2FkUGFnZSh1cmwpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzLl9lbGVtZW50O1xuICAgICAgICB2YXIgY29uZmlnID0gdGhpcy5fY29uZmlnO1xuXG4gICAgICAgIHZhciBsb2FkU2NyaXB0cyA9IGZ1bmN0aW9uIGxvYWRTY3JpcHRzKHNyYywgZWxlbWVudCkge1xuICAgICAgICAgIGlmIChlbGVtZW50ID09PSB2b2lkIDApIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICAgIHNjcmlwdC5zcmMgPSBzcmNbZWxlbWVudF07XG4gICAgICAgICAgc2NyaXB0LmNsYXNzTmFtZSA9IENsYXNzTmFtZS5WSUVXX1NDUklQVDsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW11bHRpLWFzc2lnblxuXG4gICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMucmVhZHlTdGF0ZSB8fCB0aGlzLnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICAgICAgaWYgKHNyYy5sZW5ndGggPiBlbGVtZW50ICsgMSkge1xuICAgICAgICAgICAgICAgIGxvYWRTY3JpcHRzKHNyYywgZWxlbWVudCArIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcbiAgICAgICAgICBib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICB1cmw6IGNvbmZpZy5zdWJwYWdlc0RpcmVjdG9yeSArIHVybCxcbiAgICAgICAgICBkYXRhVHlwZTogJ2h0bWwnLFxuICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uIGJlZm9yZVNlbmQoKSB7XG4gICAgICAgICAgICAkKFNlbGVjdG9yLlZJRVdfU0NSSVBUKS5yZW1vdmUoKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MocmVzdWx0KSB7XG4gICAgICAgICAgICB2YXIgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgd3JhcHBlci5pbm5lckhUTUwgPSByZXN1bHQ7XG4gICAgICAgICAgICB2YXIgc2NyaXB0cyA9IEFycmF5LmZyb20od3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKCdzY3JpcHQnKSkubWFwKGZ1bmN0aW9uIChzY3JpcHQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNjcmlwdC5hdHRyaWJ1dGVzLmdldE5hbWVkSXRlbSgnc3JjJykubm9kZVZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NjcmlwdCcpLmZvckVhY2goZnVuY3Rpb24gKHNjcmlwdCkge1xuICAgICAgICAgICAgICByZXR1cm4gc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCgnYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgJChlbGVtZW50KS5odG1sKHdyYXBwZXIpO1xuXG4gICAgICAgICAgICBpZiAoc2NyaXB0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgbG9hZFNjcmlwdHMoc2NyaXB0cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdXJsO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIGVycm9yKCkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBjb25maWcuZXJyb3JQYWdlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uc2V0VXBVcmwgPSBmdW5jdGlvbiBzZXRVcFVybCh1cmwpIHtcbiAgICAgICAgJChTZWxlY3Rvci5OQVZfTElOSykucmVtb3ZlQ2xhc3MoQ2xhc3NOYW1lLkFDVElWRSk7XG4gICAgICAgICQoU2VsZWN0b3IuTkFWX0RST1BET1dOKS5yZW1vdmVDbGFzcyhDbGFzc05hbWUuT1BFTik7XG4gICAgICAgICQoU2VsZWN0b3IuTkFWX0RST1BET1dOICsgXCI6aGFzKGFbaHJlZj1cXFwiXCIgKyB1cmwucmVwbGFjZSgvXlxcLy8sICcnKS5zcGxpdCgnPycpWzBdICsgXCJcXFwiXSlcIikuYWRkQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pO1xuICAgICAgICAkKFNlbGVjdG9yLk5BVl9JVEVNICsgXCIgYVtocmVmPVxcXCJcIiArIHVybC5yZXBsYWNlKC9eXFwvLywgJycpLnNwbGl0KCc/JylbMF0gKyBcIlxcXCJdXCIpLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpO1xuICAgICAgICB0aGlzLmxvYWRQYWdlKHVybCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8ubG9hZEJsYW5rID0gZnVuY3Rpb24gbG9hZEJsYW5rKHVybCkge1xuICAgICAgICB3aW5kb3cub3Blbih1cmwpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmxvYWRUb3AgPSBmdW5jdGlvbiBsb2FkVG9wKHVybCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB1cmw7XG4gICAgICB9IC8vIFByaXZhdGVcbiAgICAgIDtcblxuICAgICAgX3Byb3RvLl9nZXRDb25maWcgPSBmdW5jdGlvbiBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgICBjb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBEZWZhdWx0LCBjb25maWcpO1xuICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAkKGRvY3VtZW50KS5vbihFdmVudC5DTElDSywgU2VsZWN0b3IuTkFWX0xJTksgKyBcIltocmVmIT1cXFwiI1xcXCJdXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC50YXJnZXQgPT09ICdfdG9wJykge1xuICAgICAgICAgICAgX3RoaXMubG9hZFRvcChldmVudC5jdXJyZW50VGFyZ2V0LmhyZWYpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuY3VycmVudFRhcmdldC50YXJnZXQgPT09ICdfYmxhbmsnKSB7XG4gICAgICAgICAgICBfdGhpcy5sb2FkQmxhbmsoZXZlbnQuY3VycmVudFRhcmdldC5ocmVmKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMuc2V0VXBVcmwoZXZlbnQuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gLy8gU3RhdGljXG4gICAgICA7XG5cbiAgICAgIEFqYXhMb2FkLl9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgZGF0YSA9ICQodGhpcykuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgICB2YXIgX2NvbmZpZyA9IHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnICYmIGNvbmZpZztcblxuICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgZGF0YSA9IG5ldyBBamF4TG9hZCh0aGlzLCBfY29uZmlnKTtcbiAgICAgICAgICAgICQodGhpcykuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhBamF4TG9hZCwgbnVsbCwgW3tcbiAgICAgICAga2V5OiBcIlZFUlNJT05cIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIFZFUlNJT047XG4gICAgICAgIH1cbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiBcIkRlZmF1bHRcIixcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIERlZmF1bHQ7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcblxuICAgICAgcmV0dXJuIEFqYXhMb2FkO1xuICAgIH0oKTtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogalF1ZXJ5XHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuXG5cbiAgICAkLmZuW05BTUVdID0gQWpheExvYWQuX2pRdWVyeUludGVyZmFjZTtcbiAgICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQWpheExvYWQ7XG5cbiAgICAkLmZuW05BTUVdLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAkLmZuW05BTUVdID0gSlFVRVJZX05PX0NPTkZMSUNUO1xuICAgICAgcmV0dXJuIEFqYXhMb2FkLl9qUXVlcnlJbnRlcmZhY2U7XG4gICAgfTtcblxuICAgIHJldHVybiBBamF4TG9hZDtcbiAgfSgkKTtcblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSAodjIuMS45KTogdG9nZ2xlLWNsYXNzZXMuanNcclxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvL2xpY2Vuc2UpXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cbiAgdmFyIHJlbW92ZUNsYXNzZXMgPSBmdW5jdGlvbiByZW1vdmVDbGFzc2VzKGNsYXNzTmFtZXMpIHtcbiAgICByZXR1cm4gY2xhc3NOYW1lcy5tYXAoZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gICAgfSkuaW5kZXhPZih0cnVlKSAhPT0gLTE7XG4gIH07XG5cbiAgdmFyIHRvZ2dsZUNsYXNzZXMgPSBmdW5jdGlvbiB0b2dnbGVDbGFzc2VzKHRvZ2dsZUNsYXNzLCBjbGFzc05hbWVzKSB7XG4gICAgdmFyIGJyZWFrcG9pbnQgPSBjbGFzc05hbWVzLmluZGV4T2YodG9nZ2xlQ2xhc3MpO1xuICAgIHZhciBuZXdDbGFzc05hbWVzID0gY2xhc3NOYW1lcy5zbGljZSgwLCBicmVha3BvaW50ICsgMSk7XG5cbiAgICBpZiAocmVtb3ZlQ2xhc3NlcyhuZXdDbGFzc05hbWVzKSkge1xuICAgICAgbmV3Q2xhc3NOYW1lcy5tYXAoZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHRvZ2dsZUNsYXNzKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBDb3JlVUkgKHYyLjEuOSk6IGFzaWRlLW1lbnUuanNcclxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvL2xpY2Vuc2UpXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuICB2YXIgQXNpZGVNZW51ID0gZnVuY3Rpb24gKCQpIHtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogQ29uc3RhbnRzXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuICAgIHZhciBOQU1FID0gJ2FzaWRlLW1lbnUnO1xuICAgIHZhciBWRVJTSU9OID0gJzIuMS45JztcbiAgICB2YXIgREFUQV9LRVkgPSAnY29yZXVpLmFzaWRlLW1lbnUnO1xuICAgIHZhciBFVkVOVF9LRVkgPSBcIi5cIiArIERBVEFfS0VZO1xuICAgIHZhciBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJztcbiAgICB2YXIgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltOQU1FXTtcbiAgICB2YXIgRXZlbnQgPSB7XG4gICAgICBDTElDSzogJ2NsaWNrJyxcbiAgICAgIExPQURfREFUQV9BUEk6IFwibG9hZFwiICsgRVZFTlRfS0VZICsgREFUQV9BUElfS0VZLFxuICAgICAgVE9HR0xFOiAndG9nZ2xlJ1xuICAgIH07XG4gICAgdmFyIFNlbGVjdG9yID0ge1xuICAgICAgQk9EWTogJ2JvZHknLFxuICAgICAgQVNJREVfTUVOVTogJy5hc2lkZS1tZW51JyxcbiAgICAgIEFTSURFX01FTlVfVE9HR0xFUjogJy5hc2lkZS1tZW51LXRvZ2dsZXInXG4gICAgfTtcbiAgICB2YXIgU2hvd0NsYXNzTmFtZXMgPSBbJ2FzaWRlLW1lbnUtc2hvdycsICdhc2lkZS1tZW51LXNtLXNob3cnLCAnYXNpZGUtbWVudS1tZC1zaG93JywgJ2FzaWRlLW1lbnUtbGctc2hvdycsICdhc2lkZS1tZW51LXhsLXNob3cnXTtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogQ2xhc3MgRGVmaW5pdGlvblxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cblxuICAgIHZhciBBc2lkZU1lbnUgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiBBc2lkZU1lbnUoZWxlbWVudCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICB0aGlzLl9hZGRFdmVudExpc3RlbmVycygpO1xuICAgICAgfSAvLyBHZXR0ZXJzXG5cblxuICAgICAgdmFyIF9wcm90byA9IEFzaWRlTWVudS5wcm90b3R5cGU7XG5cbiAgICAgIC8vIFByaXZhdGVcbiAgICAgIF9wcm90by5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLLCBTZWxlY3Rvci5BU0lERV9NRU5VX1RPR0dMRVIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgdmFyIHRvZ2dsZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldCA/IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50b2dnbGUgOiAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3RvZ2dsZScpO1xuICAgICAgICAgIHRvZ2dsZUNsYXNzZXModG9nZ2xlLCBTaG93Q2xhc3NOYW1lcyk7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBTdGF0aWNcbiAgICAgIDtcblxuICAgICAgQXNpZGVNZW51Ll9qUXVlcnlJbnRlcmZhY2UgPSBmdW5jdGlvbiBfalF1ZXJ5SW50ZXJmYWNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgJGVsZW1lbnQgPSAkKHRoaXMpO1xuICAgICAgICAgIHZhciBkYXRhID0gJGVsZW1lbnQuZGF0YShEQVRBX0tFWSk7XG5cbiAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgQXNpZGVNZW51KHRoaXMpO1xuICAgICAgICAgICAgJGVsZW1lbnQuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhBc2lkZU1lbnUsIG51bGwsIFt7XG4gICAgICAgIGtleTogXCJWRVJTSU9OXCIsXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBWRVJTSU9OO1xuICAgICAgICB9XG4gICAgICB9XSk7XG5cbiAgICAgIHJldHVybiBBc2lkZU1lbnU7XG4gICAgfSgpO1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBEYXRhIEFwaSBpbXBsZW1lbnRhdGlvblxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cblxuXG4gICAgJCh3aW5kb3cpLm9uKEV2ZW50LkxPQURfREFUQV9BUEksIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBhc2lkZU1lbnUgPSAkKFNlbGVjdG9yLkFTSURFX01FTlUpO1xuXG4gICAgICBBc2lkZU1lbnUuX2pRdWVyeUludGVyZmFjZS5jYWxsKGFzaWRlTWVudSk7XG4gICAgfSk7XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIGpRdWVyeVxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cblxuICAgICQuZm5bTkFNRV0gPSBBc2lkZU1lbnUuX2pRdWVyeUludGVyZmFjZTtcbiAgICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gQXNpZGVNZW51O1xuXG4gICAgJC5mbltOQU1FXS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgJC5mbltOQU1FXSA9IEpRVUVSWV9OT19DT05GTElDVDtcbiAgICAgIHJldHVybiBBc2lkZU1lbnUuX2pRdWVyeUludGVyZmFjZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEFzaWRlTWVudTtcbiAgfSgkKTtcblxuICAvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxuXG4gIHZhciBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgICByZXR1cm4gX2NvZihhcmcpID09ICdBcnJheSc7XG4gIH07XG5cbiAgdmFyIFNQRUNJRVMkMiA9IF93a3MoJ3NwZWNpZXMnKTtcblxuICB2YXIgX2FycmF5U3BlY2llc0NvbnN0cnVjdG9yID0gZnVuY3Rpb24gKG9yaWdpbmFsKSB7XG4gICAgdmFyIEM7XG4gICAgaWYgKF9pc0FycmF5KG9yaWdpbmFsKSkge1xuICAgICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBfaXNBcnJheShDLnByb3RvdHlwZSkpKSBDID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKF9pc09iamVjdChDKSkge1xuICAgICAgICBDID0gQ1tTUEVDSUVTJDJdO1xuICAgICAgICBpZiAoQyA9PT0gbnVsbCkgQyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG4gIH07XG5cbiAgLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxuXG5cbiAgdmFyIF9hcnJheVNwZWNpZXNDcmVhdGUgPSBmdW5jdGlvbiAob3JpZ2luYWwsIGxlbmd0aCkge1xuICAgIHJldHVybiBuZXcgKF9hcnJheVNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG4gIH07XG5cbiAgLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4gIC8vIDEgLT4gQXJyYXkjbWFwXG4gIC8vIDIgLT4gQXJyYXkjZmlsdGVyXG4gIC8vIDMgLT4gQXJyYXkjc29tZVxuICAvLyA0IC0+IEFycmF5I2V2ZXJ5XG4gIC8vIDUgLT4gQXJyYXkjZmluZFxuICAvLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxuXG5cblxuXG5cbiAgdmFyIF9hcnJheU1ldGhvZHMgPSBmdW5jdGlvbiAoVFlQRSwgJGNyZWF0ZSkge1xuICAgIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gICAgdmFyIElTX0ZJTFRFUiA9IFRZUEUgPT0gMjtcbiAgICB2YXIgSVNfU09NRSA9IFRZUEUgPT0gMztcbiAgICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gICAgdmFyIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDY7XG4gICAgdmFyIE5PX0hPTEVTID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gICAgdmFyIGNyZWF0ZSA9ICRjcmVhdGUgfHwgX2FycmF5U3BlY2llc0NyZWF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KSB7XG4gICAgICB2YXIgTyA9IF90b09iamVjdCgkdGhpcyk7XG4gICAgICB2YXIgc2VsZiA9IF9pb2JqZWN0KE8pO1xuICAgICAgdmFyIGYgPSBfY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgICAgdmFyIGxlbmd0aCA9IF90b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWQ7XG4gICAgICB2YXIgdmFsLCByZXM7XG4gICAgICBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpIHtcbiAgICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICAgIGlmIChUWVBFKSB7XG4gICAgICAgICAgaWYgKElTX01BUCkgcmVzdWx0W2luZGV4XSA9IHJlczsgICAvLyBtYXBcbiAgICAgICAgICBlbHNlIGlmIChyZXMpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgICB9IGVsc2UgaWYgKElTX0VWRVJZKSByZXR1cm4gZmFsc2U7IC8vIGV2ZXJ5XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gICAgfTtcbiAgfTtcblxuICAvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG4gIHZhciBVTlNDT1BBQkxFUyA9IF93a3MoJ3Vuc2NvcGFibGVzJyk7XG4gIHZhciBBcnJheVByb3RvJDEgPSBBcnJheS5wcm90b3R5cGU7XG4gIGlmIChBcnJheVByb3RvJDFbVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgX2hpZGUoQXJyYXlQcm90byQxLCBVTlNDT1BBQkxFUywge30pO1xuICB2YXIgX2FkZFRvVW5zY29wYWJsZXMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgQXJyYXlQcm90byQxW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbiAgfTtcblxuICAvLyAyMi4xLjMuOCBBcnJheS5wcm90b3R5cGUuZmluZChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG5cbiAgdmFyICRmaW5kID0gX2FycmF5TWV0aG9kcyg1KTtcbiAgdmFyIEtFWSA9ICdmaW5kJztcbiAgdmFyIGZvcmNlZCA9IHRydWU7XG4gIC8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG4gIGlmIChLRVkgaW4gW10pIEFycmF5KDEpW0tFWV0oZnVuY3Rpb24gKCkgeyBmb3JjZWQgPSBmYWxzZTsgfSk7XG4gIF9leHBvcnQoX2V4cG9ydC5QICsgX2V4cG9ydC5GICogZm9yY2VkLCAnQXJyYXknLCB7XG4gICAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuIC8qICwgdGhhdCA9IHVuZGVmaW5lZCAqLykge1xuICAgICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgICB9XG4gIH0pO1xuICBfYWRkVG9VbnNjb3BhYmxlcyhLRVkpO1xuXG4gIC8vIEBAbWF0Y2ggbG9naWNcbiAgX2ZpeFJlV2tzKCdtYXRjaCcsIDEsIGZ1bmN0aW9uIChkZWZpbmVkLCBNQVRDSCwgJG1hdGNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgICByZXR1cm4gW1xuICAgICAgLy8gYFN0cmluZy5wcm90b3R5cGUubWF0Y2hgIG1ldGhvZFxuICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5tYXRjaFxuICAgICAgZnVuY3Rpb24gbWF0Y2gocmVnZXhwKSB7XG4gICAgICAgIHZhciBPID0gZGVmaW5lZCh0aGlzKTtcbiAgICAgICAgdmFyIGZuID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtNQVRDSF07XG4gICAgICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW01BVENIXShTdHJpbmcoTykpO1xuICAgICAgfSxcbiAgICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdYCBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBtYXRjaFxuICAgICAgZnVuY3Rpb24gKHJlZ2V4cCkge1xuICAgICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKCRtYXRjaCwgcmVnZXhwLCB0aGlzKTtcbiAgICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuICAgICAgICB2YXIgcnggPSBfYW5PYmplY3QocmVnZXhwKTtcbiAgICAgICAgdmFyIFMgPSBTdHJpbmcodGhpcyk7XG4gICAgICAgIGlmICghcnguZ2xvYmFsKSByZXR1cm4gX3JlZ2V4cEV4ZWNBYnN0cmFjdChyeCwgUyk7XG4gICAgICAgIHZhciBmdWxsVW5pY29kZSA9IHJ4LnVuaWNvZGU7XG4gICAgICAgIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICAgIHZhciBBID0gW107XG4gICAgICAgIHZhciBuID0gMDtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgd2hpbGUgKChyZXN1bHQgPSBfcmVnZXhwRXhlY0Fic3RyYWN0KHJ4LCBTKSkgIT09IG51bGwpIHtcbiAgICAgICAgICB2YXIgbWF0Y2hTdHIgPSBTdHJpbmcocmVzdWx0WzBdKTtcbiAgICAgICAgICBBW25dID0gbWF0Y2hTdHI7XG4gICAgICAgICAgaWYgKG1hdGNoU3RyID09PSAnJykgcngubGFzdEluZGV4ID0gX2FkdmFuY2VTdHJpbmdJbmRleChTLCBfdG9MZW5ndGgocngubGFzdEluZGV4KSwgZnVsbFVuaWNvZGUpO1xuICAgICAgICAgIG4rKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbiA9PT0gMCA/IG51bGwgOiBBO1xuICAgICAgfVxuICAgIF07XG4gIH0pO1xuXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29yZVVJIFV0aWxpdGllcyAodjIuMS45KTogZ2V0LWNzcy1jdXN0b20tcHJvcGVydGllcy5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBjc3MgY3VzdG9tIHByb3BlcnR5IG5hbWVcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuICB2YXIgZ2V0Q3NzQ3VzdG9tUHJvcGVydGllcyA9IGZ1bmN0aW9uIGdldENzc0N1c3RvbVByb3BlcnRpZXMoKSB7XG4gICAgdmFyIGNzc0N1c3RvbVByb3BlcnRpZXMgPSB7fTtcbiAgICB2YXIgc2hlZXRzID0gZG9jdW1lbnQuc3R5bGVTaGVldHM7XG4gICAgdmFyIGNzc1RleHQgPSAnJztcblxuICAgIGZvciAodmFyIGkgPSBzaGVldHMubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICAgIHZhciBydWxlcyA9IHNoZWV0c1tpXS5jc3NSdWxlcztcblxuICAgICAgZm9yICh2YXIgaiA9IHJ1bGVzLmxlbmd0aCAtIDE7IGogPiAtMTsgai0tKSB7XG4gICAgICAgIGlmIChydWxlc1tqXS5zZWxlY3RvclRleHQgPT09ICcuaWUtY3VzdG9tLXByb3BlcnRpZXMnKSB7XG4gICAgICAgICAgY3NzVGV4dCA9IHJ1bGVzW2pdLmNzc1RleHQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNzc1RleHQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY3NzVGV4dCA9IGNzc1RleHQuc3Vic3RyaW5nKGNzc1RleHQubGFzdEluZGV4T2YoJ3snKSArIDEsIGNzc1RleHQubGFzdEluZGV4T2YoJ30nKSk7XG4gICAgY3NzVGV4dC5zcGxpdCgnOycpLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICBpZiAocHJvcGVydHkpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBwcm9wZXJ0eS5zcGxpdCgnOiAnKVswXTtcbiAgICAgICAgdmFyIHZhbHVlID0gcHJvcGVydHkuc3BsaXQoJzogJylbMV07XG5cbiAgICAgICAgaWYgKG5hbWUgJiYgdmFsdWUpIHtcbiAgICAgICAgICBjc3NDdXN0b21Qcm9wZXJ0aWVzW1wiLS1cIiArIG5hbWUudHJpbSgpXSA9IHZhbHVlLnRyaW0oKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjc3NDdXN0b21Qcm9wZXJ0aWVzO1xuICB9O1xuXG4gIHZhciBtaW5JRVZlcnNpb24gPSAxMDtcblxuICB2YXIgaXNJRTF4ID0gZnVuY3Rpb24gaXNJRTF4KCkge1xuICAgIHJldHVybiBCb29sZWFuKGRvY3VtZW50LmRvY3VtZW50TW9kZSkgJiYgZG9jdW1lbnQuZG9jdW1lbnRNb2RlID49IG1pbklFVmVyc2lvbjtcbiAgfTtcblxuICB2YXIgaXNDdXN0b21Qcm9wZXJ0eSA9IGZ1bmN0aW9uIGlzQ3VzdG9tUHJvcGVydHkocHJvcGVydHkpIHtcbiAgICByZXR1cm4gcHJvcGVydHkubWF0Y2goL14tLS4qL2kpO1xuICB9O1xuXG4gIHZhciBnZXRTdHlsZSA9IGZ1bmN0aW9uIGdldFN0eWxlKHByb3BlcnR5LCBlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQgPT09IHZvaWQgMCkge1xuICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmJvZHk7XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlO1xuXG4gICAgaWYgKGlzQ3VzdG9tUHJvcGVydHkocHJvcGVydHkpICYmIGlzSUUxeCgpKSB7XG4gICAgICB2YXIgY3NzQ3VzdG9tUHJvcGVydGllcyA9IGdldENzc0N1c3RvbVByb3BlcnRpZXMoKTtcbiAgICAgIHN0eWxlID0gY3NzQ3VzdG9tUHJvcGVydGllc1twcm9wZXJ0eV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZShwcm9wZXJ0eSkucmVwbGFjZSgvXlxccy8sICcnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH07XG5cbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBDb3JlVUkgKHYyLjEuOSk6IHNpZGViYXIuanNcclxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvL2xpY2Vuc2UpXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuICB2YXIgU2lkZWJhciA9IGZ1bmN0aW9uICgkKSB7XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIENvbnN0YW50c1xyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKi9cbiAgICB2YXIgTkFNRSA9ICdzaWRlYmFyJztcbiAgICB2YXIgVkVSU0lPTiA9ICcyLjEuOSc7XG4gICAgdmFyIERBVEFfS0VZID0gJ2NvcmV1aS5zaWRlYmFyJztcbiAgICB2YXIgRVZFTlRfS0VZID0gXCIuXCIgKyBEQVRBX0tFWTtcbiAgICB2YXIgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSc7XG4gICAgdmFyIEpRVUVSWV9OT19DT05GTElDVCA9ICQuZm5bTkFNRV07XG4gICAgdmFyIERlZmF1bHQgPSB7XG4gICAgICB0cmFuc2l0aW9uOiA0MDBcbiAgICB9O1xuICAgIHZhciBDbGFzc05hbWUgPSB7XG4gICAgICBBQ1RJVkU6ICdhY3RpdmUnLFxuICAgICAgQlJBTkRfTUlOSU1JWkVEOiAnYnJhbmQtbWluaW1pemVkJyxcbiAgICAgIE5BVl9EUk9QRE9XTl9UT0dHTEU6ICduYXYtZHJvcGRvd24tdG9nZ2xlJyxcbiAgICAgIE9QRU46ICdvcGVuJyxcbiAgICAgIFNJREVCQVJfRklYRUQ6ICdzaWRlYmFyLWZpeGVkJyxcbiAgICAgIFNJREVCQVJfTUlOSU1JWkVEOiAnc2lkZWJhci1taW5pbWl6ZWQnLFxuICAgICAgU0lERUJBUl9PRkZfQ0FOVkFTOiAnc2lkZWJhci1vZmYtY2FudmFzJ1xuICAgIH07XG4gICAgdmFyIEV2ZW50ID0ge1xuICAgICAgQ0xJQ0s6ICdjbGljaycsXG4gICAgICBERVNUUk9ZOiAnZGVzdHJveScsXG4gICAgICBJTklUOiAnaW5pdCcsXG4gICAgICBMT0FEX0RBVEFfQVBJOiBcImxvYWRcIiArIEVWRU5UX0tFWSArIERBVEFfQVBJX0tFWSxcbiAgICAgIFRPR0dMRTogJ3RvZ2dsZScsXG4gICAgICBVUERBVEU6ICd1cGRhdGUnXG4gICAgfTtcbiAgICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgICBCT0RZOiAnYm9keScsXG4gICAgICBCUkFORF9NSU5JTUlaRVI6ICcuYnJhbmQtbWluaW1pemVyJyxcbiAgICAgIE5BVl9EUk9QRE9XTl9UT0dHTEU6ICcubmF2LWRyb3Bkb3duLXRvZ2dsZScsXG4gICAgICBOQVZfRFJPUERPV05fSVRFTVM6ICcubmF2LWRyb3Bkb3duLWl0ZW1zJyxcbiAgICAgIE5BVl9JVEVNOiAnLm5hdi1pdGVtJyxcbiAgICAgIE5BVl9MSU5LOiAnLm5hdi1saW5rJyxcbiAgICAgIE5BVl9MSU5LX1FVRVJJRUQ6ICcubmF2LWxpbmstcXVlcmllZCcsXG4gICAgICBOQVZJR0FUSU9OX0NPTlRBSU5FUjogJy5zaWRlYmFyLW5hdicsXG4gICAgICBOQVZJR0FUSU9OOiAnLnNpZGViYXItbmF2ID4gLm5hdicsXG4gICAgICBTSURFQkFSOiAnLnNpZGViYXInLFxuICAgICAgU0lERUJBUl9NSU5JTUlaRVI6ICcuc2lkZWJhci1taW5pbWl6ZXInLFxuICAgICAgU0lERUJBUl9UT0dHTEVSOiAnLnNpZGViYXItdG9nZ2xlcidcbiAgICB9O1xuICAgIHZhciBTaG93Q2xhc3NOYW1lcyA9IFsnc2lkZWJhci1zaG93JywgJ3NpZGViYXItc20tc2hvdycsICdzaWRlYmFyLW1kLXNob3cnLCAnc2lkZWJhci1sZy1zaG93JywgJ3NpZGViYXIteGwtc2hvdyddO1xuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgKiBDbGFzcyBEZWZpbml0aW9uXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuXG4gICAgdmFyIFNpZGViYXIgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoKSB7XG4gICAgICBmdW5jdGlvbiBTaWRlYmFyKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubW9iaWxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHMgPSBudWxsO1xuICAgICAgICB0aGlzLnBlcmZlY3RTY3JvbGxiYXIoRXZlbnQuSU5JVCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlTGluaygpO1xuICAgICAgICB0aGlzLl9icmVha3BvaW50VGVzdCA9IHRoaXMuX2JyZWFrcG9pbnRUZXN0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2NsaWNrT3V0TGlzdGVuZXIgPSB0aGlzLl9jbGlja091dExpc3RlbmVyLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICB0aGlzLl9hZGRNZWRpYVF1ZXJ5KCk7XG4gICAgICB9IC8vIEdldHRlcnNcblxuXG4gICAgICB2YXIgX3Byb3RvID0gU2lkZWJhci5wcm90b3R5cGU7XG5cbiAgICAgIC8vIFB1YmxpY1xuICAgICAgX3Byb3RvLnBlcmZlY3RTY3JvbGxiYXIgPSBmdW5jdGlvbiBwZXJmZWN0U2Nyb2xsYmFyKGV2ZW50KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBQZXJmZWN0U2Nyb2xsYmFyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHZhciBjbGFzc0xpc3QgPSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdDtcblxuICAgICAgICAgIGlmIChldmVudCA9PT0gRXZlbnQuSU5JVCAmJiAhY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5TSURFQkFSX01JTklNSVpFRCkpIHtcbiAgICAgICAgICAgIHRoaXMucHMgPSB0aGlzLm1ha2VTY3JvbGxiYXIoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZXZlbnQgPT09IEV2ZW50LkRFU1RST1kpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveVNjcm9sbGJhcigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChldmVudCA9PT0gRXZlbnQuVE9HR0xFKSB7XG4gICAgICAgICAgICBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKENsYXNzTmFtZS5TSURFQkFSX01JTklNSVpFRCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5kZXN0cm95U2Nyb2xsYmFyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3lTY3JvbGxiYXIoKTtcbiAgICAgICAgICAgICAgdGhpcy5wcyA9IHRoaXMubWFrZVNjcm9sbGJhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChldmVudCA9PT0gRXZlbnQuVVBEQVRFICYmICFjbGFzc0xpc3QuY29udGFpbnMoQ2xhc3NOYW1lLlNJREVCQVJfTUlOSU1JWkVEKSkge1xuICAgICAgICAgICAgLy8gVG9EbzogQWRkIHNtb290aCB0cmFuc2l0aW9uXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgX3RoaXMuZGVzdHJveVNjcm9sbGJhcigpO1xuXG4gICAgICAgICAgICAgIF90aGlzLnBzID0gX3RoaXMubWFrZVNjcm9sbGJhcigpO1xuICAgICAgICAgICAgfSwgRGVmYXVsdC50cmFuc2l0aW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5tYWtlU2Nyb2xsYmFyID0gZnVuY3Rpb24gbWFrZVNjcm9sbGJhcihjb250YWluZXIpIHtcbiAgICAgICAgaWYgKGNvbnRhaW5lciA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgY29udGFpbmVyID0gU2VsZWN0b3IuTkFWSUdBVElPTl9DT05UQUlORVI7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHMgPSBuZXcgUGVyZmVjdFNjcm9sbGJhcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lciksIHtcbiAgICAgICAgICBzdXBwcmVzc1Njcm9sbFg6IHRydWVcbiAgICAgICAgfSk7IC8vIFRvRG86IGZpbmQgcmVhbCBmaXggZm9yIHBzIHJ0bFxuXG4gICAgICAgIHBzLmlzUnRsID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBwcztcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5kZXN0cm95U2Nyb2xsYmFyID0gZnVuY3Rpb24gZGVzdHJveVNjcm9sbGJhcigpIHtcbiAgICAgICAgaWYgKHRoaXMucHMpIHtcbiAgICAgICAgICB0aGlzLnBzLmRlc3Ryb3koKTtcbiAgICAgICAgICB0aGlzLnBzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnNldEFjdGl2ZUxpbmsgPSBmdW5jdGlvbiBzZXRBY3RpdmVMaW5rKCkge1xuICAgICAgICAkKFNlbGVjdG9yLk5BVklHQVRJT04pLmZpbmQoU2VsZWN0b3IuTkFWX0xJTkspLmVhY2goZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICB2YXIgbGluayA9IHZhbHVlO1xuICAgICAgICAgIHZhciBjVXJsO1xuXG4gICAgICAgICAgaWYgKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFNlbGVjdG9yLk5BVl9MSU5LX1FVRVJJRUQpKSB7XG4gICAgICAgICAgICBjVXJsID0gU3RyaW5nKHdpbmRvdy5sb2NhdGlvbik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNVcmwgPSBTdHJpbmcod2luZG93LmxvY2F0aW9uKS5zcGxpdCgnPycpWzBdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjVXJsLnN1YnN0cihjVXJsLmxlbmd0aCAtIDEpID09PSAnIycpIHtcbiAgICAgICAgICAgIGNVcmwgPSBjVXJsLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoJCgkKGxpbmspKVswXS5ocmVmID09PSBjVXJsKSB7XG4gICAgICAgICAgICAkKGxpbmspLmFkZENsYXNzKENsYXNzTmFtZS5BQ1RJVkUpLnBhcmVudHMoU2VsZWN0b3IuTkFWX0RST1BET1dOX0lURU1TKS5hZGQobGluaykuZWFjaChmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICBsaW5rID0gdmFsdWU7XG4gICAgICAgICAgICAgICQobGluaykucGFyZW50KCkuYWRkQ2xhc3MoQ2xhc3NOYW1lLk9QRU4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gLy8gUHJpdmF0ZVxuICAgICAgO1xuXG4gICAgICBfcHJvdG8uX2FkZE1lZGlhUXVlcnkgPSBmdW5jdGlvbiBfYWRkTWVkaWFRdWVyeSgpIHtcbiAgICAgICAgdmFyIHNtID0gZ2V0U3R5bGUoJy0tYnJlYWtwb2ludC1zbScpO1xuXG4gICAgICAgIGlmICghc20pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc21WYWwgPSBwYXJzZUludChzbSwgMTApIC0gMTtcbiAgICAgICAgdmFyIG1lZGlhUXVlcnlMaXN0ID0gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiBcIiArIHNtVmFsICsgXCJweClcIik7XG5cbiAgICAgICAgdGhpcy5fYnJlYWtwb2ludFRlc3QobWVkaWFRdWVyeUxpc3QpO1xuXG4gICAgICAgIG1lZGlhUXVlcnlMaXN0LmFkZExpc3RlbmVyKHRoaXMuX2JyZWFrcG9pbnRUZXN0KTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5fYnJlYWtwb2ludFRlc3QgPSBmdW5jdGlvbiBfYnJlYWtwb2ludFRlc3QoZSkge1xuICAgICAgICB0aGlzLm1vYmlsZSA9IEJvb2xlYW4oZS5tYXRjaGVzKTtcblxuICAgICAgICB0aGlzLl90b2dnbGVDbGlja091dCgpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl9jbGlja091dExpc3RlbmVyID0gZnVuY3Rpb24gX2NsaWNrT3V0TGlzdGVuZXIoZXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAvLyBvciB1c2U6IGV2ZW50LnRhcmdldC5jbG9zZXN0KFNlbGVjdG9yLlNJREVCQVIpID09PSBudWxsXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAgIHRoaXMuX3JlbW92ZUNsaWNrT3V0KCk7XG5cbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItc2hvdycpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uX2FkZENsaWNrT3V0ID0gZnVuY3Rpb24gX2FkZENsaWNrT3V0KCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKEV2ZW50LkNMSUNLLCB0aGlzLl9jbGlja091dExpc3RlbmVyLCB0cnVlKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5fcmVtb3ZlQ2xpY2tPdXQgPSBmdW5jdGlvbiBfcmVtb3ZlQ2xpY2tPdXQoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoRXZlbnQuQ0xJQ0ssIHRoaXMuX2NsaWNrT3V0TGlzdGVuZXIsIHRydWUpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLl90b2dnbGVDbGlja091dCA9IGZ1bmN0aW9uIF90b2dnbGVDbGlja091dCgpIHtcbiAgICAgICAgaWYgKHRoaXMubW9iaWxlICYmIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaWRlYmFyLXNob3cnKSkge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYXNpZGUtbWVudS1zaG93Jyk7XG5cbiAgICAgICAgICB0aGlzLl9hZGRDbGlja091dCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3JlbW92ZUNsaWNrT3V0KCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5fYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLLCBTZWxlY3Rvci5CUkFORF9NSU5JTUlaRVIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgJChTZWxlY3Rvci5CT0RZKS50b2dnbGVDbGFzcyhDbGFzc05hbWUuQlJBTkRfTUlOSU1JWkVEKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKEV2ZW50LkNMSUNLLCBTZWxlY3Rvci5OQVZfRFJPUERPV05fVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHZhciBkcm9wZG93biA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAkKGRyb3Bkb3duKS5wYXJlbnQoKS50b2dnbGVDbGFzcyhDbGFzc05hbWUuT1BFTik7XG5cbiAgICAgICAgICBfdGhpczIucGVyZmVjdFNjcm9sbGJhcihFdmVudC5VUERBVEUpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChkb2N1bWVudCkub24oRXZlbnQuQ0xJQ0ssIFNlbGVjdG9yLlNJREVCQVJfTUlOSU1JWkVSLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICQoU2VsZWN0b3IuQk9EWSkudG9nZ2xlQ2xhc3MoQ2xhc3NOYW1lLlNJREVCQVJfTUlOSU1JWkVEKTtcblxuICAgICAgICAgIF90aGlzMi5wZXJmZWN0U2Nyb2xsYmFyKEV2ZW50LlRPR0dMRSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKGRvY3VtZW50KS5vbihFdmVudC5DTElDSywgU2VsZWN0b3IuU0lERUJBUl9UT0dHTEVSLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIHZhciB0b2dnbGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQgPyBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudG9nZ2xlIDogJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCd0b2dnbGUnKTtcbiAgICAgICAgICB0b2dnbGVDbGFzc2VzKHRvZ2dsZSwgU2hvd0NsYXNzTmFtZXMpO1xuXG4gICAgICAgICAgX3RoaXMyLl90b2dnbGVDbGlja091dCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgJChTZWxlY3Rvci5OQVZJR0FUSU9OICsgXCIgPiBcIiArIFNlbGVjdG9yLk5BVl9JVEVNICsgXCIgXCIgKyBTZWxlY3Rvci5OQVZfTElOSyArIFwiOm5vdChcIiArIFNlbGVjdG9yLk5BVl9EUk9QRE9XTl9UT0dHTEUgKyBcIilcIikub24oRXZlbnQuQ0xJQ0ssIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpczIuX3JlbW92ZUNsaWNrT3V0KCk7XG5cbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3NpZGViYXItc2hvdycpO1xuICAgICAgICB9KTtcbiAgICAgIH0gLy8gU3RhdGljXG4gICAgICA7XG5cbiAgICAgIFNpZGViYXIuX2pRdWVyeUludGVyZmFjZSA9IGZ1bmN0aW9uIF9qUXVlcnlJbnRlcmZhY2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciAkZWxlbWVudCA9ICQodGhpcyk7XG4gICAgICAgICAgdmFyIGRhdGEgPSAkZWxlbWVudC5kYXRhKERBVEFfS0VZKTtcblxuICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgZGF0YSA9IG5ldyBTaWRlYmFyKHRoaXMpO1xuICAgICAgICAgICAgJGVsZW1lbnQuZGF0YShEQVRBX0tFWSwgZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIF9jcmVhdGVDbGFzcyhTaWRlYmFyLCBudWxsLCBbe1xuICAgICAgICBrZXk6IFwiVkVSU0lPTlwiLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gVkVSU0lPTjtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gU2lkZWJhcjtcbiAgICB9KCk7XG4gICAgLyoqXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIERhdGEgQXBpIGltcGxlbWVudGF0aW9uXHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuXG5cbiAgICAkKHdpbmRvdykub24oRXZlbnQuTE9BRF9EQVRBX0FQSSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNpZGViYXIgPSAkKFNlbGVjdG9yLlNJREVCQVIpO1xuXG4gICAgICBTaWRlYmFyLl9qUXVlcnlJbnRlcmZhY2UuY2FsbChzaWRlYmFyKTtcbiAgICB9KTtcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogalF1ZXJ5XHJcbiAgICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xuXG4gICAgJC5mbltOQU1FXSA9IFNpZGViYXIuX2pRdWVyeUludGVyZmFjZTtcbiAgICAkLmZuW05BTUVdLkNvbnN0cnVjdG9yID0gU2lkZWJhcjtcblxuICAgICQuZm5bTkFNRV0ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICQuZm5bTkFNRV0gPSBKUVVFUllfTk9fQ09ORkxJQ1Q7XG4gICAgICByZXR1cm4gU2lkZWJhci5falF1ZXJ5SW50ZXJmYWNlO1xuICAgIH07XG5cbiAgICByZXR1cm4gU2lkZWJhcjtcbiAgfSgkKTtcblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSBVdGlsaXRpZXMgKHYyLjEuOSk6IGhleC10by1yZ2IuanNcclxuICAgKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vY29yZXVpLmlvL2xpY2Vuc2UpXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cblxuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1tYWdpYy1udW1iZXJzICovXG4gIHZhciBoZXhUb1JnYiA9IGZ1bmN0aW9uIGhleFRvUmdiKGNvbG9yKSB7XG4gICAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSGV4IGNvbG9yIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgdmFyIGhleCA9IGNvbG9yLm1hdGNoKC9eIyg/OlswLTlhLWZdezN9KXsxLDJ9JC9pKTtcblxuICAgIGlmICghaGV4KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY29sb3IgKyBcIiBpcyBub3QgYSB2YWxpZCBoZXggY29sb3JcIik7XG4gICAgfVxuXG4gICAgdmFyIHI7XG4gICAgdmFyIGc7XG4gICAgdmFyIGI7XG5cbiAgICBpZiAoY29sb3IubGVuZ3RoID09PSA3KSB7XG4gICAgICByID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsIDMpLCAxNik7XG4gICAgICBnID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDMsIDUpLCAxNik7XG4gICAgICBiID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDUsIDcpLCAxNik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwgMiksIDE2KTtcbiAgICAgIGcgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMiwgMyksIDE2KTtcbiAgICAgIGIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMywgNSksIDE2KTtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiLCBcIiArIGcgKyBcIiwgXCIgKyBiICsgXCIpXCI7XG4gIH07XG5cbiAgLyoqXHJcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBDb3JlVUkgVXRpbGl0aWVzICh2Mi4xLjkpOiBoZXgtdG8tcmdiYS5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLW1hZ2ljLW51bWJlcnMgKi9cbiAgdmFyIGhleFRvUmdiYSA9IGZ1bmN0aW9uIGhleFRvUmdiYShjb2xvciwgb3BhY2l0eSkge1xuICAgIGlmIChvcGFjaXR5ID09PSB2b2lkIDApIHtcbiAgICAgIG9wYWNpdHkgPSAxMDA7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSGV4IGNvbG9yIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgfVxuXG4gICAgdmFyIGhleCA9IGNvbG9yLm1hdGNoKC9eIyg/OlswLTlhLWZdezN9KXsxLDJ9JC9pKTtcblxuICAgIGlmICghaGV4KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY29sb3IgKyBcIiBpcyBub3QgYSB2YWxpZCBoZXggY29sb3JcIik7XG4gICAgfVxuXG4gICAgdmFyIHI7XG4gICAgdmFyIGc7XG4gICAgdmFyIGI7XG5cbiAgICBpZiAoY29sb3IubGVuZ3RoID09PSA3KSB7XG4gICAgICByID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDEsIDMpLCAxNik7XG4gICAgICBnID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDMsIDUpLCAxNik7XG4gICAgICBiID0gcGFyc2VJbnQoY29sb3Iuc3Vic3RyaW5nKDUsIDcpLCAxNik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMSwgMiksIDE2KTtcbiAgICAgIGcgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMiwgMyksIDE2KTtcbiAgICAgIGIgPSBwYXJzZUludChjb2xvci5zdWJzdHJpbmcoMywgNSksIDE2KTtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiLCBcIiArIGcgKyBcIiwgXCIgKyBiICsgXCIsIFwiICsgb3BhY2l0eSAvIDEwMCArIFwiKVwiO1xuICB9O1xuXG4gIC8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzKClcbiAgaWYgKF9kZXNjcmlwdG9ycyAmJiAvLi9nLmZsYWdzICE9ICdnJykgX29iamVjdERwLmYoUmVnRXhwLnByb3RvdHlwZSwgJ2ZsYWdzJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IF9mbGFnc1xuICB9KTtcblxuICB2YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbiAgdmFyICR0b1N0cmluZyA9IC8uL1tUT19TVFJJTkddO1xuXG4gIHZhciBkZWZpbmUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICBfcmVkZWZpbmUoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmbiwgdHJ1ZSk7XG4gIH07XG5cbiAgLy8gMjEuMi41LjE0IFJlZ0V4cC5wcm90b3R5cGUudG9TdHJpbmcoKVxuICBpZiAoX2ZhaWxzKGZ1bmN0aW9uICgpIHsgcmV0dXJuICR0b1N0cmluZy5jYWxsKHsgc291cmNlOiAnYScsIGZsYWdzOiAnYicgfSkgIT0gJy9hL2InOyB9KSkge1xuICAgIGRlZmluZShmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHZhciBSID0gX2FuT2JqZWN0KHRoaXMpO1xuICAgICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcbiAgICAgICAgJ2ZsYWdzJyBpbiBSID8gUi5mbGFncyA6ICFfZGVzY3JpcHRvcnMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/IF9mbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgLy8gRkY0NC0gUmVnRXhwI3RvU3RyaW5nIGhhcyBhIHdyb25nIG5hbWVcbiAgfSBlbHNlIGlmICgkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gJHRvU3RyaW5nLmNhbGwodGhpcyk7XG4gICAgfSk7XG4gIH1cblxuICAvLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcblxuICB2YXIgdGVzdCA9IHt9O1xuICB0ZXN0W193a3MoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuICBpZiAodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJykge1xuICAgIF9yZWRlZmluZShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICAgIHJldHVybiAnW29iamVjdCAnICsgX2NsYXNzb2YodGhpcykgKyAnXSc7XG4gICAgfSwgdHJ1ZSk7XG4gIH1cblxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqIENvcmVVSSAodjIuMS45KTogcmdiLXRvLWhleC5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLW1hZ2ljLW51bWJlcnMgKi9cbiAgdmFyIHJnYlRvSGV4ID0gZnVuY3Rpb24gcmdiVG9IZXgoY29sb3IpIHtcbiAgICBpZiAodHlwZW9mIGNvbG9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdIZXggY29sb3IgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG5cbiAgICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHtcbiAgICAgIHJldHVybiAnIzAwMDAwMDAwJztcbiAgICB9XG5cbiAgICB2YXIgcmdiID0gY29sb3IubWF0Y2goL15yZ2JhP1tcXHMrXT9cXChbXFxzK10/KFxcZCspW1xccytdPyxbXFxzK10/KFxcZCspW1xccytdPyxbXFxzK10/KFxcZCspW1xccytdPy9pKTtcblxuICAgIGlmICghcmdiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoY29sb3IgKyBcIiBpcyBub3QgYSB2YWxpZCByZ2IgY29sb3JcIik7XG4gICAgfVxuXG4gICAgdmFyIHIgPSBcIjBcIiArIHBhcnNlSW50KHJnYlsxXSwgMTApLnRvU3RyaW5nKDE2KTtcbiAgICB2YXIgZyA9IFwiMFwiICsgcGFyc2VJbnQocmdiWzJdLCAxMCkudG9TdHJpbmcoMTYpO1xuICAgIHZhciBiID0gXCIwXCIgKyBwYXJzZUludChyZ2JbM10sIDEwKS50b1N0cmluZygxNik7XG4gICAgcmV0dXJuIFwiI1wiICsgci5zbGljZSgtMikgKyBnLnNsaWNlKC0yKSArIGIuc2xpY2UoLTIpO1xuICB9O1xuXG4gIC8qKlxyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICogQ29yZVVJICh2Mi4xLjkpOiBpbmRleC5qc1xyXG4gICAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9jb3JldWkuaW8vbGljZW5zZSlcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAqL1xuXG4gIChmdW5jdGlvbiAoJCkge1xuICAgIGlmICh0eXBlb2YgJCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0NvcmVVSVxcJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBqUXVlcnkuIGpRdWVyeSBtdXN0IGJlIGluY2x1ZGVkIGJlZm9yZSBDb3JlVUlcXCdzIEphdmFTY3JpcHQuJyk7XG4gICAgfVxuXG4gICAgdmFyIHZlcnNpb24gPSAkLmZuLmpxdWVyeS5zcGxpdCgnICcpWzBdLnNwbGl0KCcuJyk7XG4gICAgdmFyIG1pbk1ham9yID0gMTtcbiAgICB2YXIgbHRNYWpvciA9IDI7XG4gICAgdmFyIG1pbk1pbm9yID0gOTtcbiAgICB2YXIgbWluUGF0Y2ggPSAxO1xuICAgIHZhciBtYXhNYWpvciA9IDQ7XG5cbiAgICBpZiAodmVyc2lvblswXSA8IGx0TWFqb3IgJiYgdmVyc2lvblsxXSA8IG1pbk1pbm9yIHx8IHZlcnNpb25bMF0gPT09IG1pbk1ham9yICYmIHZlcnNpb25bMV0gPT09IG1pbk1pbm9yICYmIHZlcnNpb25bMl0gPCBtaW5QYXRjaCB8fCB2ZXJzaW9uWzBdID49IG1heE1ham9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvcmVVSVxcJ3MgSmF2YVNjcmlwdCByZXF1aXJlcyBhdCBsZWFzdCBqUXVlcnkgdjEuOS4xIGJ1dCBsZXNzIHRoYW4gdjQuMC4wJyk7XG4gICAgfVxuICB9KSgkKTtcbiAgd2luZG93LmdldFN0eWxlID0gZ2V0U3R5bGU7XG4gIHdpbmRvdy5oZXhUb1JnYiA9IGhleFRvUmdiO1xuICB3aW5kb3cuaGV4VG9SZ2JhID0gaGV4VG9SZ2JhO1xuICB3aW5kb3cucmdiVG9IZXggPSByZ2JUb0hleDtcblxuICBleHBvcnRzLkFqYXhMb2FkID0gQWpheExvYWQ7XG4gIGV4cG9ydHMuQXNpZGVNZW51ID0gQXNpZGVNZW51O1xuICBleHBvcnRzLlNpZGViYXIgPSBTaWRlYmFyO1xuXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbn0pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvcmV1aS5qcy5tYXBcbiIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuIiwiLyohXG4gKiBwZXJmZWN0LXNjcm9sbGJhciB2MS40LjBcbiAqIChjKSAyMDE4IEh5dW5qZSBKdW5cbiAqIEBsaWNlbnNlIE1JVFxuICovXG5mdW5jdGlvbiBnZXQoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gc2V0KGVsZW1lbnQsIG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgdmFyIHZhbCA9IG9ialtrZXldO1xuICAgIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsID0gdmFsICsgXCJweFwiO1xuICAgIH1cbiAgICBlbGVtZW50LnN0eWxlW2tleV0gPSB2YWw7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGRpdihjbGFzc05hbWUpIHtcbiAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkaXYuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICByZXR1cm4gZGl2O1xufVxuXG52YXIgZWxNYXRjaGVzID1cbiAgdHlwZW9mIEVsZW1lbnQgIT09ICd1bmRlZmluZWQnICYmXG4gIChFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzIHx8XG4gICAgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxlbWVudC5wcm90b3R5cGUubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IpO1xuXG5mdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQsIHF1ZXJ5KSB7XG4gIGlmICghZWxNYXRjaGVzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBlbGVtZW50IG1hdGNoaW5nIG1ldGhvZCBzdXBwb3J0ZWQnKTtcbiAgfVxuXG4gIHJldHVybiBlbE1hdGNoZXMuY2FsbChlbGVtZW50LCBxdWVyeSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50LnJlbW92ZSkge1xuICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBxdWVyeUNoaWxkcmVuKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoZWxlbWVudC5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBtYXRjaGVzKGNoaWxkLCBzZWxlY3Rvcik7IH1cbiAgKTtcbn1cblxudmFyIGNscyA9IHtcbiAgbWFpbjogJ3BzJyxcbiAgZWxlbWVudDoge1xuICAgIHRodW1iOiBmdW5jdGlvbiAoeCkgeyByZXR1cm4gKFwicHNfX3RodW1iLVwiICsgeCk7IH0sXG4gICAgcmFpbDogZnVuY3Rpb24gKHgpIHsgcmV0dXJuIChcInBzX19yYWlsLVwiICsgeCk7IH0sXG4gICAgY29uc3VtaW5nOiAncHNfX2NoaWxkLS1jb25zdW1lJyxcbiAgfSxcbiAgc3RhdGU6IHtcbiAgICBmb2N1czogJ3BzLS1mb2N1cycsXG4gICAgY2xpY2tpbmc6ICdwcy0tY2xpY2tpbmcnLFxuICAgIGFjdGl2ZTogZnVuY3Rpb24gKHgpIHsgcmV0dXJuIChcInBzLS1hY3RpdmUtXCIgKyB4KTsgfSxcbiAgICBzY3JvbGxpbmc6IGZ1bmN0aW9uICh4KSB7IHJldHVybiAoXCJwcy0tc2Nyb2xsaW5nLVwiICsgeCk7IH0sXG4gIH0sXG59O1xuXG4vKlxuICogSGVscGVyIG1ldGhvZHNcbiAqL1xudmFyIHNjcm9sbGluZ0NsYXNzVGltZW91dCA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xuXG5mdW5jdGlvbiBhZGRTY3JvbGxpbmdDbGFzcyhpLCB4KSB7XG4gIHZhciBjbGFzc0xpc3QgPSBpLmVsZW1lbnQuY2xhc3NMaXN0O1xuICB2YXIgY2xhc3NOYW1lID0gY2xzLnN0YXRlLnNjcm9sbGluZyh4KTtcblxuICBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICBjbGVhclRpbWVvdXQoc2Nyb2xsaW5nQ2xhc3NUaW1lb3V0W3hdKTtcbiAgfSBlbHNlIHtcbiAgICBjbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU2Nyb2xsaW5nQ2xhc3MoaSwgeCkge1xuICBzY3JvbGxpbmdDbGFzc1RpbWVvdXRbeF0gPSBzZXRUaW1lb3V0KFxuICAgIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGkuaXNBbGl2ZSAmJiBpLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbHMuc3RhdGUuc2Nyb2xsaW5nKHgpKTsgfSxcbiAgICBpLnNldHRpbmdzLnNjcm9sbGluZ1RocmVzaG9sZFxuICApO1xufVxuXG5mdW5jdGlvbiBzZXRTY3JvbGxpbmdDbGFzc0luc3RhbnRseShpLCB4KSB7XG4gIGFkZFNjcm9sbGluZ0NsYXNzKGksIHgpO1xuICByZW1vdmVTY3JvbGxpbmdDbGFzcyhpLCB4KTtcbn1cblxudmFyIEV2ZW50RWxlbWVudCA9IGZ1bmN0aW9uIEV2ZW50RWxlbWVudChlbGVtZW50KSB7XG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIHRoaXMuaGFuZGxlcnMgPSB7fTtcbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IGlzRW1wdHk6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0gfTtcblxuRXZlbnRFbGVtZW50LnByb3RvdHlwZS5iaW5kID0gZnVuY3Rpb24gYmluZCAoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gIGlmICh0eXBlb2YgdGhpcy5oYW5kbGVyc1tldmVudE5hbWVdID09PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuaGFuZGxlcnNbZXZlbnROYW1lXSA9IFtdO1xuICB9XG4gIHRoaXMuaGFuZGxlcnNbZXZlbnROYW1lXS5wdXNoKGhhbmRsZXIpO1xuICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RWxlbWVudC5wcm90b3R5cGUudW5iaW5kID0gZnVuY3Rpb24gdW5iaW5kIChldmVudE5hbWUsIHRhcmdldCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHRoaXMuaGFuZGxlcnNbZXZlbnROYW1lXSA9IHRoaXMuaGFuZGxlcnNbZXZlbnROYW1lXS5maWx0ZXIoZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICBpZiAodGFyZ2V0ICYmIGhhbmRsZXIgIT09IHRhcmdldCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHRoaXMkMS5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KTtcbn07XG5cbkV2ZW50RWxlbWVudC5wcm90b3R5cGUudW5iaW5kQWxsID0gZnVuY3Rpb24gdW5iaW5kQWxsICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBmb3IgKHZhciBuYW1lIGluIHRoaXMkMS5oYW5kbGVycykge1xuICAgIHRoaXMkMS51bmJpbmQobmFtZSk7XG4gIH1cbn07XG5cbnByb3RvdHlwZUFjY2Vzc29ycy5pc0VtcHR5LmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5oYW5kbGVycykuZXZlcnkoXG4gICAgZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gdGhpcyQxLmhhbmRsZXJzW2tleV0ubGVuZ3RoID09PSAwOyB9XG4gICk7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggRXZlbnRFbGVtZW50LnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbnZhciBFdmVudE1hbmFnZXIgPSBmdW5jdGlvbiBFdmVudE1hbmFnZXIoKSB7XG4gIHRoaXMuZXZlbnRFbGVtZW50cyA9IFtdO1xufTtcblxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS5ldmVudEVsZW1lbnQgPSBmdW5jdGlvbiBldmVudEVsZW1lbnQgKGVsZW1lbnQpIHtcbiAgdmFyIGVlID0gdGhpcy5ldmVudEVsZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAoZWUpIHsgcmV0dXJuIGVlLmVsZW1lbnQgPT09IGVsZW1lbnQ7IH0pWzBdO1xuICBpZiAoIWVlKSB7XG4gICAgZWUgPSBuZXcgRXZlbnRFbGVtZW50KGVsZW1lbnQpO1xuICAgIHRoaXMuZXZlbnRFbGVtZW50cy5wdXNoKGVlKTtcbiAgfVxuICByZXR1cm4gZWU7XG59O1xuXG5FdmVudE1hbmFnZXIucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbiBiaW5kIChlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgdGhpcy5ldmVudEVsZW1lbnQoZWxlbWVudCkuYmluZChldmVudE5hbWUsIGhhbmRsZXIpO1xufTtcblxuRXZlbnRNYW5hZ2VyLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbiB1bmJpbmQgKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICB2YXIgZWUgPSB0aGlzLmV2ZW50RWxlbWVudChlbGVtZW50KTtcbiAgZWUudW5iaW5kKGV2ZW50TmFtZSwgaGFuZGxlcik7XG5cbiAgaWYgKGVlLmlzRW1wdHkpIHtcbiAgICAvLyByZW1vdmVcbiAgICB0aGlzLmV2ZW50RWxlbWVudHMuc3BsaWNlKHRoaXMuZXZlbnRFbGVtZW50cy5pbmRleE9mKGVlKSwgMSk7XG4gIH1cbn07XG5cbkV2ZW50TWFuYWdlci5wcm90b3R5cGUudW5iaW5kQWxsID0gZnVuY3Rpb24gdW5iaW5kQWxsICgpIHtcbiAgdGhpcy5ldmVudEVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUudW5iaW5kQWxsKCk7IH0pO1xuICB0aGlzLmV2ZW50RWxlbWVudHMgPSBbXTtcbn07XG5cbkV2ZW50TWFuYWdlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UgKGVsZW1lbnQsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xuICB2YXIgZWUgPSB0aGlzLmV2ZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIG9uY2VIYW5kbGVyID0gZnVuY3Rpb24gKGV2dCkge1xuICAgIGVlLnVuYmluZChldmVudE5hbWUsIG9uY2VIYW5kbGVyKTtcbiAgICBoYW5kbGVyKGV2dCk7XG4gIH07XG4gIGVlLmJpbmQoZXZlbnROYW1lLCBvbmNlSGFuZGxlcik7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVFdmVudChuYW1lKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG5ldyBDdXN0b21FdmVudChuYW1lKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgZXZ0LmluaXRDdXN0b21FdmVudChuYW1lLCBmYWxzZSwgZmFsc2UsIHVuZGVmaW5lZCk7XG4gICAgcmV0dXJuIGV2dDtcbiAgfVxufVxuXG52YXIgcHJvY2Vzc1Njcm9sbERpZmYgPSBmdW5jdGlvbihcbiAgaSxcbiAgYXhpcyxcbiAgZGlmZixcbiAgdXNlU2Nyb2xsaW5nQ2xhc3MsXG4gIGZvcmNlRmlyZVJlYWNoRXZlbnRcbikge1xuICBpZiAoIHVzZVNjcm9sbGluZ0NsYXNzID09PSB2b2lkIDAgKSB1c2VTY3JvbGxpbmdDbGFzcyA9IHRydWU7XG4gIGlmICggZm9yY2VGaXJlUmVhY2hFdmVudCA9PT0gdm9pZCAwICkgZm9yY2VGaXJlUmVhY2hFdmVudCA9IGZhbHNlO1xuXG4gIHZhciBmaWVsZHM7XG4gIGlmIChheGlzID09PSAndG9wJykge1xuICAgIGZpZWxkcyA9IFtcbiAgICAgICdjb250ZW50SGVpZ2h0JyxcbiAgICAgICdjb250YWluZXJIZWlnaHQnLFxuICAgICAgJ3Njcm9sbFRvcCcsXG4gICAgICAneScsXG4gICAgICAndXAnLFxuICAgICAgJ2Rvd24nIF07XG4gIH0gZWxzZSBpZiAoYXhpcyA9PT0gJ2xlZnQnKSB7XG4gICAgZmllbGRzID0gW1xuICAgICAgJ2NvbnRlbnRXaWR0aCcsXG4gICAgICAnY29udGFpbmVyV2lkdGgnLFxuICAgICAgJ3Njcm9sbExlZnQnLFxuICAgICAgJ3gnLFxuICAgICAgJ2xlZnQnLFxuICAgICAgJ3JpZ2h0JyBdO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQSBwcm9wZXIgYXhpcyBzaG91bGQgYmUgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIHByb2Nlc3NTY3JvbGxEaWZmJDEoaSwgZGlmZiwgZmllbGRzLCB1c2VTY3JvbGxpbmdDbGFzcywgZm9yY2VGaXJlUmVhY2hFdmVudCk7XG59O1xuXG5mdW5jdGlvbiBwcm9jZXNzU2Nyb2xsRGlmZiQxKFxuICBpLFxuICBkaWZmLFxuICByZWYsXG4gIHVzZVNjcm9sbGluZ0NsYXNzLFxuICBmb3JjZUZpcmVSZWFjaEV2ZW50XG4pIHtcbiAgdmFyIGNvbnRlbnRIZWlnaHQgPSByZWZbMF07XG4gIHZhciBjb250YWluZXJIZWlnaHQgPSByZWZbMV07XG4gIHZhciBzY3JvbGxUb3AgPSByZWZbMl07XG4gIHZhciB5ID0gcmVmWzNdO1xuICB2YXIgdXAgPSByZWZbNF07XG4gIHZhciBkb3duID0gcmVmWzVdO1xuICBpZiAoIHVzZVNjcm9sbGluZ0NsYXNzID09PSB2b2lkIDAgKSB1c2VTY3JvbGxpbmdDbGFzcyA9IHRydWU7XG4gIGlmICggZm9yY2VGaXJlUmVhY2hFdmVudCA9PT0gdm9pZCAwICkgZm9yY2VGaXJlUmVhY2hFdmVudCA9IGZhbHNlO1xuXG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuXG4gIC8vIHJlc2V0IHJlYWNoXG4gIGkucmVhY2hbeV0gPSBudWxsO1xuXG4gIC8vIDEgZm9yIHN1YnBpeGVsIHJvdW5kaW5nXG4gIGlmIChlbGVtZW50W3Njcm9sbFRvcF0gPCAxKSB7XG4gICAgaS5yZWFjaFt5XSA9ICdzdGFydCc7XG4gIH1cblxuICAvLyAxIGZvciBzdWJwaXhlbCByb3VuZGluZ1xuICBpZiAoZWxlbWVudFtzY3JvbGxUb3BdID4gaVtjb250ZW50SGVpZ2h0XSAtIGlbY29udGFpbmVySGVpZ2h0XSAtIDEpIHtcbiAgICBpLnJlYWNoW3ldID0gJ2VuZCc7XG4gIH1cblxuICBpZiAoZGlmZikge1xuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVFdmVudCgoXCJwcy1zY3JvbGwtXCIgKyB5KSkpO1xuXG4gICAgaWYgKGRpZmYgPCAwKSB7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoKFwicHMtc2Nyb2xsLVwiICsgdXApKSk7XG4gICAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGNyZWF0ZUV2ZW50KChcInBzLXNjcm9sbC1cIiArIGRvd24pKSk7XG4gICAgfVxuXG4gICAgaWYgKHVzZVNjcm9sbGluZ0NsYXNzKSB7XG4gICAgICBzZXRTY3JvbGxpbmdDbGFzc0luc3RhbnRseShpLCB5KTtcbiAgICB9XG4gIH1cblxuICBpZiAoaS5yZWFjaFt5XSAmJiAoZGlmZiB8fCBmb3JjZUZpcmVSZWFjaEV2ZW50KSkge1xuICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChjcmVhdGVFdmVudCgoXCJwcy1cIiArIHkgKyBcIi1yZWFjaC1cIiArIChpLnJlYWNoW3ldKSkpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b0ludCh4KSB7XG4gIHJldHVybiBwYXJzZUludCh4LCAxMCkgfHwgMDtcbn1cblxuZnVuY3Rpb24gaXNFZGl0YWJsZShlbCkge1xuICByZXR1cm4gKFxuICAgIG1hdGNoZXMoZWwsICdpbnB1dCxbY29udGVudGVkaXRhYmxlXScpIHx8XG4gICAgbWF0Y2hlcyhlbCwgJ3NlbGVjdCxbY29udGVudGVkaXRhYmxlXScpIHx8XG4gICAgbWF0Y2hlcyhlbCwgJ3RleHRhcmVhLFtjb250ZW50ZWRpdGFibGVdJykgfHxcbiAgICBtYXRjaGVzKGVsLCAnYnV0dG9uLFtjb250ZW50ZWRpdGFibGVdJylcbiAgKTtcbn1cblxuZnVuY3Rpb24gb3V0ZXJXaWR0aChlbGVtZW50KSB7XG4gIHZhciBzdHlsZXMgPSBnZXQoZWxlbWVudCk7XG4gIHJldHVybiAoXG4gICAgdG9JbnQoc3R5bGVzLndpZHRoKSArXG4gICAgdG9JbnQoc3R5bGVzLnBhZGRpbmdMZWZ0KSArXG4gICAgdG9JbnQoc3R5bGVzLnBhZGRpbmdSaWdodCkgK1xuICAgIHRvSW50KHN0eWxlcy5ib3JkZXJMZWZ0V2lkdGgpICtcbiAgICB0b0ludChzdHlsZXMuYm9yZGVyUmlnaHRXaWR0aClcbiAgKTtcbn1cblxudmFyIGVudiA9IHtcbiAgaXNXZWJLaXQ6XG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICdXZWJraXRBcHBlYXJhbmNlJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUsXG4gIHN1cHBvcnRzVG91Y2g6XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8XG4gICAgICAod2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiB3aW5kb3cuRG9jdW1lbnRUb3VjaCkpLFxuICBzdXBwb3J0c0llUG9pbnRlcjpcbiAgICB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyxcbiAgaXNDaHJvbWU6XG4gICAgdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAvQ2hyb21lL2kudGVzdChuYXZpZ2F0b3IgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCksXG59O1xuXG52YXIgdXBkYXRlR2VvbWV0cnkgPSBmdW5jdGlvbihpKSB7XG4gIHZhciBlbGVtZW50ID0gaS5lbGVtZW50O1xuICB2YXIgcm91bmRlZFNjcm9sbFRvcCA9IE1hdGguZmxvb3IoZWxlbWVudC5zY3JvbGxUb3ApO1xuXG4gIGkuY29udGFpbmVyV2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICBpLmNvbnRhaW5lckhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICBpLmNvbnRlbnRXaWR0aCA9IGVsZW1lbnQuc2Nyb2xsV2lkdGg7XG4gIGkuY29udGVudEhlaWdodCA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0O1xuXG4gIGlmICghZWxlbWVudC5jb250YWlucyhpLnNjcm9sbGJhclhSYWlsKSkge1xuICAgIC8vIGNsZWFuIHVwIGFuZCBhcHBlbmRcbiAgICBxdWVyeUNoaWxkcmVuKGVsZW1lbnQsIGNscy5lbGVtZW50LnJhaWwoJ3gnKSkuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIHJlbW92ZShlbCk7IH1cbiAgICApO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaS5zY3JvbGxiYXJYUmFpbCk7XG4gIH1cbiAgaWYgKCFlbGVtZW50LmNvbnRhaW5zKGkuc2Nyb2xsYmFyWVJhaWwpKSB7XG4gICAgLy8gY2xlYW4gdXAgYW5kIGFwcGVuZFxuICAgIHF1ZXJ5Q2hpbGRyZW4oZWxlbWVudCwgY2xzLmVsZW1lbnQucmFpbCgneScpKS5mb3JFYWNoKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gcmVtb3ZlKGVsKTsgfVxuICAgICk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChpLnNjcm9sbGJhcllSYWlsKTtcbiAgfVxuXG4gIGlmIChcbiAgICAhaS5zZXR0aW5ncy5zdXBwcmVzc1Njcm9sbFggJiZcbiAgICBpLmNvbnRhaW5lcldpZHRoICsgaS5zZXR0aW5ncy5zY3JvbGxYTWFyZ2luT2Zmc2V0IDwgaS5jb250ZW50V2lkdGhcbiAgKSB7XG4gICAgaS5zY3JvbGxiYXJYQWN0aXZlID0gdHJ1ZTtcbiAgICBpLnJhaWxYV2lkdGggPSBpLmNvbnRhaW5lcldpZHRoIC0gaS5yYWlsWE1hcmdpbldpZHRoO1xuICAgIGkucmFpbFhSYXRpbyA9IGkuY29udGFpbmVyV2lkdGggLyBpLnJhaWxYV2lkdGg7XG4gICAgaS5zY3JvbGxiYXJYV2lkdGggPSBnZXRUaHVtYlNpemUoXG4gICAgICBpLFxuICAgICAgdG9JbnQoaS5yYWlsWFdpZHRoICogaS5jb250YWluZXJXaWR0aCAvIGkuY29udGVudFdpZHRoKVxuICAgICk7XG4gICAgaS5zY3JvbGxiYXJYTGVmdCA9IHRvSW50KFxuICAgICAgKGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ICsgZWxlbWVudC5zY3JvbGxMZWZ0KSAqXG4gICAgICAgIChpLnJhaWxYV2lkdGggLSBpLnNjcm9sbGJhclhXaWR0aCkgL1xuICAgICAgICAoaS5jb250ZW50V2lkdGggLSBpLmNvbnRhaW5lcldpZHRoKVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgaS5zY3JvbGxiYXJYQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBpZiAoXG4gICAgIWkuc2V0dGluZ3Muc3VwcHJlc3NTY3JvbGxZICYmXG4gICAgaS5jb250YWluZXJIZWlnaHQgKyBpLnNldHRpbmdzLnNjcm9sbFlNYXJnaW5PZmZzZXQgPCBpLmNvbnRlbnRIZWlnaHRcbiAgKSB7XG4gICAgaS5zY3JvbGxiYXJZQWN0aXZlID0gdHJ1ZTtcbiAgICBpLnJhaWxZSGVpZ2h0ID0gaS5jb250YWluZXJIZWlnaHQgLSBpLnJhaWxZTWFyZ2luSGVpZ2h0O1xuICAgIGkucmFpbFlSYXRpbyA9IGkuY29udGFpbmVySGVpZ2h0IC8gaS5yYWlsWUhlaWdodDtcbiAgICBpLnNjcm9sbGJhcllIZWlnaHQgPSBnZXRUaHVtYlNpemUoXG4gICAgICBpLFxuICAgICAgdG9JbnQoaS5yYWlsWUhlaWdodCAqIGkuY29udGFpbmVySGVpZ2h0IC8gaS5jb250ZW50SGVpZ2h0KVxuICAgICk7XG4gICAgaS5zY3JvbGxiYXJZVG9wID0gdG9JbnQoXG4gICAgICByb3VuZGVkU2Nyb2xsVG9wICpcbiAgICAgICAgKGkucmFpbFlIZWlnaHQgLSBpLnNjcm9sbGJhcllIZWlnaHQpIC9cbiAgICAgICAgKGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0KVxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgaS5zY3JvbGxiYXJZQWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBpZiAoaS5zY3JvbGxiYXJYTGVmdCA+PSBpLnJhaWxYV2lkdGggLSBpLnNjcm9sbGJhclhXaWR0aCkge1xuICAgIGkuc2Nyb2xsYmFyWExlZnQgPSBpLnJhaWxYV2lkdGggLSBpLnNjcm9sbGJhclhXaWR0aDtcbiAgfVxuICBpZiAoaS5zY3JvbGxiYXJZVG9wID49IGkucmFpbFlIZWlnaHQgLSBpLnNjcm9sbGJhcllIZWlnaHQpIHtcbiAgICBpLnNjcm9sbGJhcllUb3AgPSBpLnJhaWxZSGVpZ2h0IC0gaS5zY3JvbGxiYXJZSGVpZ2h0O1xuICB9XG5cbiAgdXBkYXRlQ3NzKGVsZW1lbnQsIGkpO1xuXG4gIGlmIChpLnNjcm9sbGJhclhBY3RpdmUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xzLnN0YXRlLmFjdGl2ZSgneCcpKTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xzLnN0YXRlLmFjdGl2ZSgneCcpKTtcbiAgICBpLnNjcm9sbGJhclhXaWR0aCA9IDA7XG4gICAgaS5zY3JvbGxiYXJYTGVmdCA9IDA7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gMDtcbiAgfVxuICBpZiAoaS5zY3JvbGxiYXJZQWN0aXZlKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscy5zdGF0ZS5hY3RpdmUoJ3knKSk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNscy5zdGF0ZS5hY3RpdmUoJ3knKSk7XG4gICAgaS5zY3JvbGxiYXJZSGVpZ2h0ID0gMDtcbiAgICBpLnNjcm9sbGJhcllUb3AgPSAwO1xuICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0VGh1bWJTaXplKGksIHRodW1iU2l6ZSkge1xuICBpZiAoaS5zZXR0aW5ncy5taW5TY3JvbGxiYXJMZW5ndGgpIHtcbiAgICB0aHVtYlNpemUgPSBNYXRoLm1heCh0aHVtYlNpemUsIGkuc2V0dGluZ3MubWluU2Nyb2xsYmFyTGVuZ3RoKTtcbiAgfVxuICBpZiAoaS5zZXR0aW5ncy5tYXhTY3JvbGxiYXJMZW5ndGgpIHtcbiAgICB0aHVtYlNpemUgPSBNYXRoLm1pbih0aHVtYlNpemUsIGkuc2V0dGluZ3MubWF4U2Nyb2xsYmFyTGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gdGh1bWJTaXplO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDc3MoZWxlbWVudCwgaSkge1xuICB2YXIgeFJhaWxPZmZzZXQgPSB7IHdpZHRoOiBpLnJhaWxYV2lkdGggfTtcbiAgdmFyIHJvdW5kZWRTY3JvbGxUb3AgPSBNYXRoLmZsb29yKGVsZW1lbnQuc2Nyb2xsVG9wKTtcblxuICBpZiAoaS5pc1J0bCkge1xuICAgIHhSYWlsT2Zmc2V0LmxlZnQgPVxuICAgICAgaS5uZWdhdGl2ZVNjcm9sbEFkanVzdG1lbnQgK1xuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ICtcbiAgICAgIGkuY29udGFpbmVyV2lkdGggLVxuICAgICAgaS5jb250ZW50V2lkdGg7XG4gIH0gZWxzZSB7XG4gICAgeFJhaWxPZmZzZXQubGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgfVxuICBpZiAoaS5pc1Njcm9sbGJhclhVc2luZ0JvdHRvbSkge1xuICAgIHhSYWlsT2Zmc2V0LmJvdHRvbSA9IGkuc2Nyb2xsYmFyWEJvdHRvbSAtIHJvdW5kZWRTY3JvbGxUb3A7XG4gIH0gZWxzZSB7XG4gICAgeFJhaWxPZmZzZXQudG9wID0gaS5zY3JvbGxiYXJYVG9wICsgcm91bmRlZFNjcm9sbFRvcDtcbiAgfVxuICBzZXQoaS5zY3JvbGxiYXJYUmFpbCwgeFJhaWxPZmZzZXQpO1xuXG4gIHZhciB5UmFpbE9mZnNldCA9IHsgdG9wOiByb3VuZGVkU2Nyb2xsVG9wLCBoZWlnaHQ6IGkucmFpbFlIZWlnaHQgfTtcbiAgaWYgKGkuaXNTY3JvbGxiYXJZVXNpbmdSaWdodCkge1xuICAgIGlmIChpLmlzUnRsKSB7XG4gICAgICB5UmFpbE9mZnNldC5yaWdodCA9XG4gICAgICAgIGkuY29udGVudFdpZHRoIC1cbiAgICAgICAgKGkubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ICsgZWxlbWVudC5zY3JvbGxMZWZ0KSAtXG4gICAgICAgIGkuc2Nyb2xsYmFyWVJpZ2h0IC1cbiAgICAgICAgaS5zY3JvbGxiYXJZT3V0ZXJXaWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgeVJhaWxPZmZzZXQucmlnaHQgPSBpLnNjcm9sbGJhcllSaWdodCAtIGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGkuaXNSdGwpIHtcbiAgICAgIHlSYWlsT2Zmc2V0LmxlZnQgPVxuICAgICAgICBpLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCArXG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCArXG4gICAgICAgIGkuY29udGFpbmVyV2lkdGggKiAyIC1cbiAgICAgICAgaS5jb250ZW50V2lkdGggLVxuICAgICAgICBpLnNjcm9sbGJhcllMZWZ0IC1cbiAgICAgICAgaS5zY3JvbGxiYXJZT3V0ZXJXaWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgeVJhaWxPZmZzZXQubGVmdCA9IGkuc2Nyb2xsYmFyWUxlZnQgKyBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgfVxuICB9XG4gIHNldChpLnNjcm9sbGJhcllSYWlsLCB5UmFpbE9mZnNldCk7XG5cbiAgc2V0KGkuc2Nyb2xsYmFyWCwge1xuICAgIGxlZnQ6IGkuc2Nyb2xsYmFyWExlZnQsXG4gICAgd2lkdGg6IGkuc2Nyb2xsYmFyWFdpZHRoIC0gaS5yYWlsQm9yZGVyWFdpZHRoLFxuICB9KTtcbiAgc2V0KGkuc2Nyb2xsYmFyWSwge1xuICAgIHRvcDogaS5zY3JvbGxiYXJZVG9wLFxuICAgIGhlaWdodDogaS5zY3JvbGxiYXJZSGVpZ2h0IC0gaS5yYWlsQm9yZGVyWVdpZHRoLFxuICB9KTtcbn1cblxudmFyIGNsaWNrUmFpbCA9IGZ1bmN0aW9uKGkpIHtcbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWSwgJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnN0b3BQcm9wYWdhdGlvbigpOyB9KTtcbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWVJhaWwsICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBwb3NpdGlvblRvcCA9XG4gICAgICBlLnBhZ2VZIC1cbiAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCAtXG4gICAgICBpLnNjcm9sbGJhcllSYWlsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICB2YXIgZGlyZWN0aW9uID0gcG9zaXRpb25Ub3AgPiBpLnNjcm9sbGJhcllUb3AgPyAxIDogLTE7XG5cbiAgICBpLmVsZW1lbnQuc2Nyb2xsVG9wICs9IGRpcmVjdGlvbiAqIGkuY29udGFpbmVySGVpZ2h0O1xuICAgIHVwZGF0ZUdlb21ldHJ5KGkpO1xuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG5cbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWCwgJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7IHJldHVybiBlLnN0b3BQcm9wYWdhdGlvbigpOyB9KTtcbiAgaS5ldmVudC5iaW5kKGkuc2Nyb2xsYmFyWFJhaWwsICdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBwb3NpdGlvbkxlZnQgPVxuICAgICAgZS5wYWdlWCAtXG4gICAgICB3aW5kb3cucGFnZVhPZmZzZXQgLVxuICAgICAgaS5zY3JvbGxiYXJYUmFpbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgIHZhciBkaXJlY3Rpb24gPSBwb3NpdGlvbkxlZnQgPiBpLnNjcm9sbGJhclhMZWZ0ID8gMSA6IC0xO1xuXG4gICAgaS5lbGVtZW50LnNjcm9sbExlZnQgKz0gZGlyZWN0aW9uICogaS5jb250YWluZXJXaWR0aDtcbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xufTtcblxudmFyIGRyYWdUaHVtYiA9IGZ1bmN0aW9uKGkpIHtcbiAgYmluZE1vdXNlU2Nyb2xsSGFuZGxlcihpLCBbXG4gICAgJ2NvbnRhaW5lcldpZHRoJyxcbiAgICAnY29udGVudFdpZHRoJyxcbiAgICAncGFnZVgnLFxuICAgICdyYWlsWFdpZHRoJyxcbiAgICAnc2Nyb2xsYmFyWCcsXG4gICAgJ3Njcm9sbGJhclhXaWR0aCcsXG4gICAgJ3Njcm9sbExlZnQnLFxuICAgICd4JyxcbiAgICAnc2Nyb2xsYmFyWFJhaWwnIF0pO1xuICBiaW5kTW91c2VTY3JvbGxIYW5kbGVyKGksIFtcbiAgICAnY29udGFpbmVySGVpZ2h0JyxcbiAgICAnY29udGVudEhlaWdodCcsXG4gICAgJ3BhZ2VZJyxcbiAgICAncmFpbFlIZWlnaHQnLFxuICAgICdzY3JvbGxiYXJZJyxcbiAgICAnc2Nyb2xsYmFyWUhlaWdodCcsXG4gICAgJ3Njcm9sbFRvcCcsXG4gICAgJ3knLFxuICAgICdzY3JvbGxiYXJZUmFpbCcgXSk7XG59O1xuXG5mdW5jdGlvbiBiaW5kTW91c2VTY3JvbGxIYW5kbGVyKFxuICBpLFxuICByZWZcbikge1xuICB2YXIgY29udGFpbmVySGVpZ2h0ID0gcmVmWzBdO1xuICB2YXIgY29udGVudEhlaWdodCA9IHJlZlsxXTtcbiAgdmFyIHBhZ2VZID0gcmVmWzJdO1xuICB2YXIgcmFpbFlIZWlnaHQgPSByZWZbM107XG4gIHZhciBzY3JvbGxiYXJZID0gcmVmWzRdO1xuICB2YXIgc2Nyb2xsYmFyWUhlaWdodCA9IHJlZls1XTtcbiAgdmFyIHNjcm9sbFRvcCA9IHJlZls2XTtcbiAgdmFyIHkgPSByZWZbN107XG4gIHZhciBzY3JvbGxiYXJZUmFpbCA9IHJlZls4XTtcblxuICB2YXIgZWxlbWVudCA9IGkuZWxlbWVudDtcblxuICB2YXIgc3RhcnRpbmdTY3JvbGxUb3AgPSBudWxsO1xuICB2YXIgc3RhcnRpbmdNb3VzZVBhZ2VZID0gbnVsbDtcbiAgdmFyIHNjcm9sbEJ5ID0gbnVsbDtcblxuICBmdW5jdGlvbiBtb3VzZU1vdmVIYW5kbGVyKGUpIHtcbiAgICBlbGVtZW50W3Njcm9sbFRvcF0gPVxuICAgICAgc3RhcnRpbmdTY3JvbGxUb3AgKyBzY3JvbGxCeSAqIChlW3BhZ2VZXSAtIHN0YXJ0aW5nTW91c2VQYWdlWSk7XG4gICAgYWRkU2Nyb2xsaW5nQ2xhc3MoaSwgeSk7XG4gICAgdXBkYXRlR2VvbWV0cnkoaSk7XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNlVXBIYW5kbGVyKCkge1xuICAgIHJlbW92ZVNjcm9sbGluZ0NsYXNzKGksIHkpO1xuICAgIGlbc2Nyb2xsYmFyWVJhaWxdLmNsYXNzTGlzdC5yZW1vdmUoY2xzLnN0YXRlLmNsaWNraW5nKTtcbiAgICBpLmV2ZW50LnVuYmluZChpLm93bmVyRG9jdW1lbnQsICdtb3VzZW1vdmUnLCBtb3VzZU1vdmVIYW5kbGVyKTtcbiAgfVxuXG4gIGkuZXZlbnQuYmluZChpW3Njcm9sbGJhclldLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBzdGFydGluZ1Njcm9sbFRvcCA9IGVsZW1lbnRbc2Nyb2xsVG9wXTtcbiAgICBzdGFydGluZ01vdXNlUGFnZVkgPSBlW3BhZ2VZXTtcbiAgICBzY3JvbGxCeSA9XG4gICAgICAoaVtjb250ZW50SGVpZ2h0XSAtIGlbY29udGFpbmVySGVpZ2h0XSkgL1xuICAgICAgKGlbcmFpbFlIZWlnaHRdIC0gaVtzY3JvbGxiYXJZSGVpZ2h0XSk7XG5cbiAgICBpLmV2ZW50LmJpbmQoaS5vd25lckRvY3VtZW50LCAnbW91c2Vtb3ZlJywgbW91c2VNb3ZlSGFuZGxlcik7XG4gICAgaS5ldmVudC5vbmNlKGkub3duZXJEb2N1bWVudCwgJ21vdXNldXAnLCBtb3VzZVVwSGFuZGxlcik7XG5cbiAgICBpW3Njcm9sbGJhcllSYWlsXS5jbGFzc0xpc3QuYWRkKGNscy5zdGF0ZS5jbGlja2luZyk7XG5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG59XG5cbnZhciBrZXlib2FyZCA9IGZ1bmN0aW9uKGkpIHtcbiAgdmFyIGVsZW1lbnQgPSBpLmVsZW1lbnQ7XG5cbiAgdmFyIGVsZW1lbnRIb3ZlcmVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF0Y2hlcyhlbGVtZW50LCAnOmhvdmVyJyk7IH07XG4gIHZhciBzY3JvbGxiYXJGb2N1c2VkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbWF0Y2hlcyhpLnNjcm9sbGJhclgsICc6Zm9jdXMnKSB8fCBtYXRjaGVzKGkuc2Nyb2xsYmFyWSwgJzpmb2N1cycpOyB9O1xuXG4gIGZ1bmN0aW9uIHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKSB7XG4gICAgdmFyIHNjcm9sbFRvcCA9IE1hdGguZmxvb3IoZWxlbWVudC5zY3JvbGxUb3ApO1xuICAgIGlmIChkZWx0YVggPT09IDApIHtcbiAgICAgIGlmICghaS5zY3JvbGxiYXJZQWN0aXZlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgKHNjcm9sbFRvcCA9PT0gMCAmJiBkZWx0YVkgPiAwKSB8fFxuICAgICAgICAoc2Nyb2xsVG9wID49IGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0ICYmIGRlbHRhWSA8IDApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuICFpLnNldHRpbmdzLndoZWVsUHJvcGFnYXRpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgaWYgKGRlbHRhWSA9PT0gMCkge1xuICAgICAgaWYgKCFpLnNjcm9sbGJhclhBY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICAoc2Nyb2xsTGVmdCA9PT0gMCAmJiBkZWx0YVggPCAwKSB8fFxuICAgICAgICAoc2Nyb2xsTGVmdCA+PSBpLmNvbnRlbnRXaWR0aCAtIGkuY29udGFpbmVyV2lkdGggJiYgZGVsdGFYID4gMClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gIWkuc2V0dGluZ3Mud2hlZWxQcm9wYWdhdGlvbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpLmV2ZW50LmJpbmQoaS5vd25lckRvY3VtZW50LCAna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKFxuICAgICAgKGUuaXNEZWZhdWx0UHJldmVudGVkICYmIGUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHx8XG4gICAgICBlLmRlZmF1bHRQcmV2ZW50ZWRcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWVsZW1lbnRIb3ZlcmVkKCkgJiYgIXNjcm9sbGJhckZvY3VzZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBhY3RpdmVFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudFxuICAgICAgPyBkb2N1bWVudC5hY3RpdmVFbGVtZW50XG4gICAgICA6IGkub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIGlmIChhY3RpdmVFbGVtZW50KSB7XG4gICAgICBpZiAoYWN0aXZlRWxlbWVudC50YWdOYW1lID09PSAnSUZSQU1FJykge1xuICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudC5jb250ZW50RG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGdvIGRlZXBlciBpZiBlbGVtZW50IGlzIGEgd2ViY29tcG9uZW50XG4gICAgICAgIHdoaWxlIChhY3RpdmVFbGVtZW50LnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICBhY3RpdmVFbGVtZW50ID0gYWN0aXZlRWxlbWVudC5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChpc0VkaXRhYmxlKGFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGVsdGFYID0gMDtcbiAgICB2YXIgZGVsdGFZID0gMDtcblxuICAgIHN3aXRjaCAoZS53aGljaCkge1xuICAgICAgY2FzZSAzNzogLy8gbGVmdFxuICAgICAgICBpZiAoZS5tZXRhS2V5KSB7XG4gICAgICAgICAgZGVsdGFYID0gLWkuY29udGVudFdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgZGVsdGFYID0gLWkuY29udGFpbmVyV2lkdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsdGFYID0gLTMwO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzODogLy8gdXBcbiAgICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgIGRlbHRhWSA9IGkuY29udGVudEhlaWdodDtcbiAgICAgICAgfSBlbHNlIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgIGRlbHRhWSA9IGkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlbHRhWSA9IDMwO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOTogLy8gcmlnaHRcbiAgICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgIGRlbHRhWCA9IGkuY29udGVudFdpZHRoO1xuICAgICAgICB9IGVsc2UgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgZGVsdGFYID0gaS5jb250YWluZXJXaWR0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkZWx0YVggPSAzMDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDA6IC8vIGRvd25cbiAgICAgICAgaWYgKGUubWV0YUtleSkge1xuICAgICAgICAgIGRlbHRhWSA9IC1pLmNvbnRlbnRIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSBpZiAoZS5hbHRLZXkpIHtcbiAgICAgICAgICBkZWx0YVkgPSAtaS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsdGFZID0gLTMwO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzMjogLy8gc3BhY2UgYmFyXG4gICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgZGVsdGFZID0gaS5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVsdGFZID0gLWkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzMzogLy8gcGFnZSB1cFxuICAgICAgICBkZWx0YVkgPSBpLmNvbnRhaW5lckhlaWdodDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM0OiAvLyBwYWdlIGRvd25cbiAgICAgICAgZGVsdGFZID0gLWkuY29udGFpbmVySGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzY6IC8vIGhvbWVcbiAgICAgICAgZGVsdGFZID0gaS5jb250ZW50SGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzU6IC8vIGVuZFxuICAgICAgICBkZWx0YVkgPSAtaS5jb250ZW50SGVpZ2h0O1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaS5zZXR0aW5ncy5zdXBwcmVzc1Njcm9sbFggJiYgZGVsdGFYICE9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpLnNldHRpbmdzLnN1cHByZXNzU2Nyb2xsWSAmJiBkZWx0YVkgIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50LnNjcm9sbFRvcCAtPSBkZWx0YVk7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ICs9IGRlbHRhWDtcbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcblxuICAgIGlmIChzaG91bGRQcmV2ZW50RGVmYXVsdChkZWx0YVgsIGRlbHRhWSkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIHdoZWVsID0gZnVuY3Rpb24oaSkge1xuICB2YXIgZWxlbWVudCA9IGkuZWxlbWVudDtcblxuICBmdW5jdGlvbiBzaG91bGRQcmV2ZW50RGVmYXVsdChkZWx0YVgsIGRlbHRhWSkge1xuICAgIHZhciByb3VuZGVkU2Nyb2xsVG9wID0gTWF0aC5mbG9vcihlbGVtZW50LnNjcm9sbFRvcCk7XG4gICAgdmFyIGlzVG9wID0gZWxlbWVudC5zY3JvbGxUb3AgPT09IDA7XG4gICAgdmFyIGlzQm90dG9tID1cbiAgICAgIHJvdW5kZWRTY3JvbGxUb3AgKyBlbGVtZW50Lm9mZnNldEhlaWdodCA9PT0gZWxlbWVudC5zY3JvbGxIZWlnaHQ7XG4gICAgdmFyIGlzTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdCA9PT0gMDtcbiAgICB2YXIgaXNSaWdodCA9XG4gICAgICBlbGVtZW50LnNjcm9sbExlZnQgKyBlbGVtZW50Lm9mZnNldFdpZHRoID09PSBlbGVtZW50LnNjcm9sbFdpZHRoO1xuXG4gICAgdmFyIGhpdHNCb3VuZDtcblxuICAgIC8vIHBpY2sgYXhpcyB3aXRoIHByaW1hcnkgZGlyZWN0aW9uXG4gICAgaWYgKE1hdGguYWJzKGRlbHRhWSkgPiBNYXRoLmFicyhkZWx0YVgpKSB7XG4gICAgICBoaXRzQm91bmQgPSBpc1RvcCB8fCBpc0JvdHRvbTtcbiAgICB9IGVsc2Uge1xuICAgICAgaGl0c0JvdW5kID0gaXNMZWZ0IHx8IGlzUmlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhpdHNCb3VuZCA/ICFpLnNldHRpbmdzLndoZWVsUHJvcGFnYXRpb24gOiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGVsdGFGcm9tRXZlbnQoZSkge1xuICAgIHZhciBkZWx0YVggPSBlLmRlbHRhWDtcbiAgICB2YXIgZGVsdGFZID0gLTEgKiBlLmRlbHRhWTtcblxuICAgIGlmICh0eXBlb2YgZGVsdGFYID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZGVsdGFZID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gT1MgWCBTYWZhcmlcbiAgICAgIGRlbHRhWCA9IC0xICogZS53aGVlbERlbHRhWCAvIDY7XG4gICAgICBkZWx0YVkgPSBlLndoZWVsRGVsdGFZIC8gNjtcbiAgICB9XG5cbiAgICBpZiAoZS5kZWx0YU1vZGUgJiYgZS5kZWx0YU1vZGUgPT09IDEpIHtcbiAgICAgIC8vIEZpcmVmb3ggaW4gZGVsdGFNb2RlIDE6IExpbmUgc2Nyb2xsaW5nXG4gICAgICBkZWx0YVggKj0gMTA7XG4gICAgICBkZWx0YVkgKj0gMTA7XG4gICAgfVxuXG4gICAgaWYgKGRlbHRhWCAhPT0gZGVsdGFYICYmIGRlbHRhWSAhPT0gZGVsdGFZIC8qIE5hTiBjaGVja3MgKi8pIHtcbiAgICAgIC8vIElFIGluIHNvbWUgbW91c2UgZHJpdmVyc1xuICAgICAgZGVsdGFYID0gMDtcbiAgICAgIGRlbHRhWSA9IGUud2hlZWxEZWx0YTtcbiAgICB9XG5cbiAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgLy8gcmV2ZXJzZSBheGlzIHdpdGggc2hpZnQga2V5XG4gICAgICByZXR1cm4gWy1kZWx0YVksIC1kZWx0YVhdO1xuICAgIH1cbiAgICByZXR1cm4gW2RlbHRhWCwgZGVsdGFZXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEJlQ29uc3VtZWRCeUNoaWxkKHRhcmdldCwgZGVsdGFYLCBkZWx0YVkpIHtcbiAgICAvLyBGSVhNRTogdGhpcyBpcyBhIHdvcmthcm91bmQgZm9yIDxzZWxlY3Q+IGlzc3VlIGluIEZGIGFuZCBJRSAjNTcxXG4gICAgaWYgKCFlbnYuaXNXZWJLaXQgJiYgZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3Q6Zm9jdXMnKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFlbGVtZW50LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgY3Vyc29yID0gdGFyZ2V0O1xuXG4gICAgd2hpbGUgKGN1cnNvciAmJiBjdXJzb3IgIT09IGVsZW1lbnQpIHtcbiAgICAgIGlmIChjdXJzb3IuY2xhc3NMaXN0LmNvbnRhaW5zKGNscy5lbGVtZW50LmNvbnN1bWluZykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdHlsZSA9IGdldChjdXJzb3IpO1xuICAgICAgdmFyIG92ZXJmbG93ID0gW3N0eWxlLm92ZXJmbG93LCBzdHlsZS5vdmVyZmxvd1gsIHN0eWxlLm92ZXJmbG93WV0uam9pbihcbiAgICAgICAgJydcbiAgICAgICk7XG5cbiAgICAgIC8vIGlmIHNjcm9sbGFibGVcbiAgICAgIGlmIChvdmVyZmxvdy5tYXRjaCgvKHNjcm9sbHxhdXRvKS8pKSB7XG4gICAgICAgIHZhciBtYXhTY3JvbGxUb3AgPSBjdXJzb3Iuc2Nyb2xsSGVpZ2h0IC0gY3Vyc29yLmNsaWVudEhlaWdodDtcbiAgICAgICAgaWYgKG1heFNjcm9sbFRvcCA+IDApIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhKGN1cnNvci5zY3JvbGxUb3AgPT09IDAgJiYgZGVsdGFZID4gMCkgJiZcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbFRvcCA9PT0gbWF4U2Nyb2xsVG9wICYmIGRlbHRhWSA8IDApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1heFNjcm9sbExlZnQgPSBjdXJzb3Iuc2Nyb2xsV2lkdGggLSBjdXJzb3IuY2xpZW50V2lkdGg7XG4gICAgICAgIGlmIChtYXhTY3JvbGxMZWZ0ID4gMCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbExlZnQgPT09IDAgJiYgZGVsdGFYIDwgMCkgJiZcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbExlZnQgPT09IG1heFNjcm9sbExlZnQgJiYgZGVsdGFYID4gMClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdXJzb3IgPSBjdXJzb3IucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiBtb3VzZXdoZWVsSGFuZGxlcihlKSB7XG4gICAgdmFyIHJlZiA9IGdldERlbHRhRnJvbUV2ZW50KGUpO1xuICAgIHZhciBkZWx0YVggPSByZWZbMF07XG4gICAgdmFyIGRlbHRhWSA9IHJlZlsxXTtcblxuICAgIGlmIChzaG91bGRCZUNvbnN1bWVkQnlDaGlsZChlLnRhcmdldCwgZGVsdGFYLCBkZWx0YVkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNob3VsZFByZXZlbnQgPSBmYWxzZTtcbiAgICBpZiAoIWkuc2V0dGluZ3MudXNlQm90aFdoZWVsQXhlcykge1xuICAgICAgLy8gZGVsdGFYIHdpbGwgb25seSBiZSB1c2VkIGZvciBob3Jpem9udGFsIHNjcm9sbGluZyBhbmQgZGVsdGFZIHdpbGxcbiAgICAgIC8vIG9ubHkgYmUgdXNlZCBmb3IgdmVydGljYWwgc2Nyb2xsaW5nIC0gdGhpcyBpcyB0aGUgZGVmYXVsdFxuICAgICAgZWxlbWVudC5zY3JvbGxUb3AgLT0gZGVsdGFZICogaS5zZXR0aW5ncy53aGVlbFNwZWVkO1xuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ICs9IGRlbHRhWCAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZDtcbiAgICB9IGVsc2UgaWYgKGkuc2Nyb2xsYmFyWUFjdGl2ZSAmJiAhaS5zY3JvbGxiYXJYQWN0aXZlKSB7XG4gICAgICAvLyBvbmx5IHZlcnRpY2FsIHNjcm9sbGJhciBpcyBhY3RpdmUgYW5kIHVzZUJvdGhXaGVlbEF4ZXMgb3B0aW9uIGlzXG4gICAgICAvLyBhY3RpdmUsIHNvIGxldCdzIHNjcm9sbCB2ZXJ0aWNhbCBiYXIgdXNpbmcgYm90aCBtb3VzZSB3aGVlbCBheGVzXG4gICAgICBpZiAoZGVsdGFZKSB7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wIC09IGRlbHRhWSAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wICs9IGRlbHRhWCAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZDtcbiAgICAgIH1cbiAgICAgIHNob3VsZFByZXZlbnQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoaS5zY3JvbGxiYXJYQWN0aXZlICYmICFpLnNjcm9sbGJhcllBY3RpdmUpIHtcbiAgICAgIC8vIHVzZUJvdGhXaGVlbEF4ZXMgYW5kIG9ubHkgaG9yaXpvbnRhbCBiYXIgaXMgYWN0aXZlLCBzbyB1c2UgYm90aFxuICAgICAgLy8gd2hlZWwgYXhlcyBmb3IgaG9yaXpvbnRhbCBiYXJcbiAgICAgIGlmIChkZWx0YVgpIHtcbiAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ICs9IGRlbHRhWCAqIGkuc2V0dGluZ3Mud2hlZWxTcGVlZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCAtPSBkZWx0YVkgKiBpLnNldHRpbmdzLndoZWVsU3BlZWQ7XG4gICAgICB9XG4gICAgICBzaG91bGRQcmV2ZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB1cGRhdGVHZW9tZXRyeShpKTtcblxuICAgIHNob3VsZFByZXZlbnQgPSBzaG91bGRQcmV2ZW50IHx8IHNob3VsZFByZXZlbnREZWZhdWx0KGRlbHRhWCwgZGVsdGFZKTtcbiAgICBpZiAoc2hvdWxkUHJldmVudCAmJiAhZS5jdHJsS2V5KSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2Ygd2luZG93Lm9ud2hlZWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaS5ldmVudC5iaW5kKGVsZW1lbnQsICd3aGVlbCcsIG1vdXNld2hlZWxIYW5kbGVyKTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93Lm9ubW91c2V3aGVlbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ21vdXNld2hlZWwnLCBtb3VzZXdoZWVsSGFuZGxlcik7XG4gIH1cbn07XG5cbnZhciB0b3VjaCA9IGZ1bmN0aW9uKGkpIHtcbiAgaWYgKCFlbnYuc3VwcG9ydHNUb3VjaCAmJiAhZW52LnN1cHBvcnRzSWVQb2ludGVyKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGVsZW1lbnQgPSBpLmVsZW1lbnQ7XG5cbiAgZnVuY3Rpb24gc2hvdWxkUHJldmVudChkZWx0YVgsIGRlbHRhWSkge1xuICAgIHZhciBzY3JvbGxUb3AgPSBNYXRoLmZsb29yKGVsZW1lbnQuc2Nyb2xsVG9wKTtcbiAgICB2YXIgc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB2YXIgbWFnbml0dWRlWCA9IE1hdGguYWJzKGRlbHRhWCk7XG4gICAgdmFyIG1hZ25pdHVkZVkgPSBNYXRoLmFicyhkZWx0YVkpO1xuXG4gICAgaWYgKG1hZ25pdHVkZVkgPiBtYWduaXR1ZGVYKSB7XG4gICAgICAvLyB1c2VyIGlzIHBlcmhhcHMgdHJ5aW5nIHRvIHN3aXBlIHVwL2Rvd24gdGhlIHBhZ2VcblxuICAgICAgaWYgKFxuICAgICAgICAoZGVsdGFZIDwgMCAmJiBzY3JvbGxUb3AgPT09IGkuY29udGVudEhlaWdodCAtIGkuY29udGFpbmVySGVpZ2h0KSB8fFxuICAgICAgICAoZGVsdGFZID4gMCAmJiBzY3JvbGxUb3AgPT09IDApXG4gICAgICApIHtcbiAgICAgICAgLy8gc2V0IHByZXZlbnQgZm9yIG1vYmlsZSBDaHJvbWUgcmVmcmVzaFxuICAgICAgICByZXR1cm4gd2luZG93LnNjcm9sbFkgPT09IDAgJiYgZGVsdGFZID4gMCAmJiBlbnYuaXNDaHJvbWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChtYWduaXR1ZGVYID4gbWFnbml0dWRlWSkge1xuICAgICAgLy8gdXNlciBpcyBwZXJoYXBzIHRyeWluZyB0byBzd2lwZSBsZWZ0L3JpZ2h0IGFjcm9zcyB0aGUgcGFnZVxuXG4gICAgICBpZiAoXG4gICAgICAgIChkZWx0YVggPCAwICYmIHNjcm9sbExlZnQgPT09IGkuY29udGVudFdpZHRoIC0gaS5jb250YWluZXJXaWR0aCkgfHxcbiAgICAgICAgKGRlbHRhWCA+IDAgJiYgc2Nyb2xsTGVmdCA9PT0gMClcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFwcGx5VG91Y2hNb3ZlKGRpZmZlcmVuY2VYLCBkaWZmZXJlbmNlWSkge1xuICAgIGVsZW1lbnQuc2Nyb2xsVG9wIC09IGRpZmZlcmVuY2VZO1xuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCAtPSBkaWZmZXJlbmNlWDtcblxuICAgIHVwZGF0ZUdlb21ldHJ5KGkpO1xuICB9XG5cbiAgdmFyIHN0YXJ0T2Zmc2V0ID0ge307XG4gIHZhciBzdGFydFRpbWUgPSAwO1xuICB2YXIgc3BlZWQgPSB7fTtcbiAgdmFyIGVhc2luZ0xvb3AgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIGdldFRvdWNoKGUpIHtcbiAgICBpZiAoZS50YXJnZXRUb3VjaGVzKSB7XG4gICAgICByZXR1cm4gZS50YXJnZXRUb3VjaGVzWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBNYXliZSBJRSBwb2ludGVyXG4gICAgICByZXR1cm4gZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzaG91bGRIYW5kbGUoZSkge1xuICAgIGlmIChlLnBvaW50ZXJUeXBlICYmIGUucG9pbnRlclR5cGUgPT09ICdwZW4nICYmIGUuYnV0dG9ucyA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICBlLnBvaW50ZXJUeXBlICYmXG4gICAgICBlLnBvaW50ZXJUeXBlICE9PSAnbW91c2UnICYmXG4gICAgICBlLnBvaW50ZXJUeXBlICE9PSBlLk1TUE9JTlRFUl9UWVBFX01PVVNFXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gdG91Y2hTdGFydChlKSB7XG4gICAgaWYgKCFzaG91bGRIYW5kbGUoZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgdG91Y2ggPSBnZXRUb3VjaChlKTtcblxuICAgIHN0YXJ0T2Zmc2V0LnBhZ2VYID0gdG91Y2gucGFnZVg7XG4gICAgc3RhcnRPZmZzZXQucGFnZVkgPSB0b3VjaC5wYWdlWTtcblxuICAgIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgaWYgKGVhc2luZ0xvb3AgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoZWFzaW5nTG9vcCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkQmVDb25zdW1lZEJ5Q2hpbGQodGFyZ2V0LCBkZWx0YVgsIGRlbHRhWSkge1xuICAgIGlmICghZWxlbWVudC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGN1cnNvciA9IHRhcmdldDtcblxuICAgIHdoaWxlIChjdXJzb3IgJiYgY3Vyc29yICE9PSBlbGVtZW50KSB7XG4gICAgICBpZiAoY3Vyc29yLmNsYXNzTGlzdC5jb250YWlucyhjbHMuZWxlbWVudC5jb25zdW1pbmcpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3R5bGUgPSBnZXQoY3Vyc29yKTtcbiAgICAgIHZhciBvdmVyZmxvdyA9IFtzdHlsZS5vdmVyZmxvdywgc3R5bGUub3ZlcmZsb3dYLCBzdHlsZS5vdmVyZmxvd1ldLmpvaW4oXG4gICAgICAgICcnXG4gICAgICApO1xuXG4gICAgICAvLyBpZiBzY3JvbGxhYmxlXG4gICAgICBpZiAob3ZlcmZsb3cubWF0Y2goLyhzY3JvbGx8YXV0bykvKSkge1xuICAgICAgICB2YXIgbWF4U2Nyb2xsVG9wID0gY3Vyc29yLnNjcm9sbEhlaWdodCAtIGN1cnNvci5jbGllbnRIZWlnaHQ7XG4gICAgICAgIGlmIChtYXhTY3JvbGxUb3AgPiAwKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIShjdXJzb3Iuc2Nyb2xsVG9wID09PSAwICYmIGRlbHRhWSA+IDApICYmXG4gICAgICAgICAgICAhKGN1cnNvci5zY3JvbGxUb3AgPT09IG1heFNjcm9sbFRvcCAmJiBkZWx0YVkgPCAwKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBtYXhTY3JvbGxMZWZ0ID0gY3Vyc29yLnNjcm9sbExlZnQgLSBjdXJzb3IuY2xpZW50V2lkdGg7XG4gICAgICAgIGlmIChtYXhTY3JvbGxMZWZ0ID4gMCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbExlZnQgPT09IDAgJiYgZGVsdGFYIDwgMCkgJiZcbiAgICAgICAgICAgICEoY3Vyc29yLnNjcm9sbExlZnQgPT09IG1heFNjcm9sbExlZnQgJiYgZGVsdGFYID4gMClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjdXJzb3IgPSBjdXJzb3IucGFyZW50Tm9kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmdW5jdGlvbiB0b3VjaE1vdmUoZSkge1xuICAgIGlmIChzaG91bGRIYW5kbGUoZSkpIHtcbiAgICAgIHZhciB0b3VjaCA9IGdldFRvdWNoKGUpO1xuXG4gICAgICB2YXIgY3VycmVudE9mZnNldCA9IHsgcGFnZVg6IHRvdWNoLnBhZ2VYLCBwYWdlWTogdG91Y2gucGFnZVkgfTtcblxuICAgICAgdmFyIGRpZmZlcmVuY2VYID0gY3VycmVudE9mZnNldC5wYWdlWCAtIHN0YXJ0T2Zmc2V0LnBhZ2VYO1xuICAgICAgdmFyIGRpZmZlcmVuY2VZID0gY3VycmVudE9mZnNldC5wYWdlWSAtIHN0YXJ0T2Zmc2V0LnBhZ2VZO1xuXG4gICAgICBpZiAoc2hvdWxkQmVDb25zdW1lZEJ5Q2hpbGQoZS50YXJnZXQsIGRpZmZlcmVuY2VYLCBkaWZmZXJlbmNlWSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcHBseVRvdWNoTW92ZShkaWZmZXJlbmNlWCwgZGlmZmVyZW5jZVkpO1xuICAgICAgc3RhcnRPZmZzZXQgPSBjdXJyZW50T2Zmc2V0O1xuXG4gICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgdmFyIHRpbWVHYXAgPSBjdXJyZW50VGltZSAtIHN0YXJ0VGltZTtcbiAgICAgIGlmICh0aW1lR2FwID4gMCkge1xuICAgICAgICBzcGVlZC54ID0gZGlmZmVyZW5jZVggLyB0aW1lR2FwO1xuICAgICAgICBzcGVlZC55ID0gZGlmZmVyZW5jZVkgLyB0aW1lR2FwO1xuICAgICAgICBzdGFydFRpbWUgPSBjdXJyZW50VGltZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNob3VsZFByZXZlbnQoZGlmZmVyZW5jZVgsIGRpZmZlcmVuY2VZKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHRvdWNoRW5kKCkge1xuICAgIGlmIChpLnNldHRpbmdzLnN3aXBlRWFzaW5nKSB7XG4gICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xuICAgICAgZWFzaW5nTG9vcCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoaS5pc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXNwZWVkLnggJiYgIXNwZWVkLnkpIHtcbiAgICAgICAgICBjbGVhckludGVydmFsKGVhc2luZ0xvb3ApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChNYXRoLmFicyhzcGVlZC54KSA8IDAuMDEgJiYgTWF0aC5hYnMoc3BlZWQueSkgPCAwLjAxKSB7XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbChlYXNpbmdMb29wKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBhcHBseVRvdWNoTW92ZShzcGVlZC54ICogMzAsIHNwZWVkLnkgKiAzMCk7XG5cbiAgICAgICAgc3BlZWQueCAqPSAwLjg7XG4gICAgICAgIHNwZWVkLnkgKj0gMC44O1xuICAgICAgfSwgMTApO1xuICAgIH1cbiAgfVxuXG4gIGlmIChlbnYuc3VwcG9ydHNUb3VjaCkge1xuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAndG91Y2hzdGFydCcsIHRvdWNoU3RhcnQpO1xuICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAndG91Y2htb3ZlJywgdG91Y2hNb3ZlKTtcbiAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3RvdWNoZW5kJywgdG91Y2hFbmQpO1xuICB9IGVsc2UgaWYgKGVudi5zdXBwb3J0c0llUG9pbnRlcikge1xuICAgIGlmICh3aW5kb3cuUG9pbnRlckV2ZW50KSB7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3BvaW50ZXJkb3duJywgdG91Y2hTdGFydCk7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ3BvaW50ZXJtb3ZlJywgdG91Y2hNb3ZlKTtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAncG9pbnRlcnVwJywgdG91Y2hFbmQpO1xuICAgIH0gZWxzZSBpZiAod2luZG93Lk1TUG9pbnRlckV2ZW50KSB7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ01TUG9pbnRlckRvd24nLCB0b3VjaFN0YXJ0KTtcbiAgICAgIGkuZXZlbnQuYmluZChlbGVtZW50LCAnTVNQb2ludGVyTW92ZScsIHRvdWNoTW92ZSk7XG4gICAgICBpLmV2ZW50LmJpbmQoZWxlbWVudCwgJ01TUG9pbnRlclVwJywgdG91Y2hFbmQpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGRlZmF1bHRTZXR0aW5ncyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7XG4gIGhhbmRsZXJzOiBbJ2NsaWNrLXJhaWwnLCAnZHJhZy10aHVtYicsICdrZXlib2FyZCcsICd3aGVlbCcsICd0b3VjaCddLFxuICBtYXhTY3JvbGxiYXJMZW5ndGg6IG51bGwsXG4gIG1pblNjcm9sbGJhckxlbmd0aDogbnVsbCxcbiAgc2Nyb2xsaW5nVGhyZXNob2xkOiAxMDAwLFxuICBzY3JvbGxYTWFyZ2luT2Zmc2V0OiAwLFxuICBzY3JvbGxZTWFyZ2luT2Zmc2V0OiAwLFxuICBzdXBwcmVzc1Njcm9sbFg6IGZhbHNlLFxuICBzdXBwcmVzc1Njcm9sbFk6IGZhbHNlLFxuICBzd2lwZUVhc2luZzogdHJ1ZSxcbiAgdXNlQm90aFdoZWVsQXhlczogZmFsc2UsXG4gIHdoZWVsUHJvcGFnYXRpb246IHRydWUsXG4gIHdoZWVsU3BlZWQ6IDEsXG59KTsgfTtcblxudmFyIGhhbmRsZXJzID0ge1xuICAnY2xpY2stcmFpbCc6IGNsaWNrUmFpbCxcbiAgJ2RyYWctdGh1bWInOiBkcmFnVGh1bWIsXG4gIGtleWJvYXJkOiBrZXlib2FyZCxcbiAgd2hlZWw6IHdoZWVsLFxuICB0b3VjaDogdG91Y2gsXG59O1xuXG52YXIgUGVyZmVjdFNjcm9sbGJhciA9IGZ1bmN0aW9uIFBlcmZlY3RTY3JvbGxiYXIoZWxlbWVudCwgdXNlclNldHRpbmdzKSB7XG4gIHZhciB0aGlzJDEgPSB0aGlzO1xuICBpZiAoIHVzZXJTZXR0aW5ncyA9PT0gdm9pZCAwICkgdXNlclNldHRpbmdzID0ge307XG5cbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuICB9XG5cbiAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50Lm5vZGVOYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdubyBlbGVtZW50IGlzIHNwZWNpZmllZCB0byBpbml0aWFsaXplIFBlcmZlY3RTY3JvbGxiYXInKTtcbiAgfVxuXG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNscy5tYWluKTtcblxuICB0aGlzLnNldHRpbmdzID0gZGVmYXVsdFNldHRpbmdzKCk7XG4gIGZvciAodmFyIGtleSBpbiB1c2VyU2V0dGluZ3MpIHtcbiAgICB0aGlzJDEuc2V0dGluZ3Nba2V5XSA9IHVzZXJTZXR0aW5nc1trZXldO1xuICB9XG5cbiAgdGhpcy5jb250YWluZXJXaWR0aCA9IG51bGw7XG4gIHRoaXMuY29udGFpbmVySGVpZ2h0ID0gbnVsbDtcbiAgdGhpcy5jb250ZW50V2lkdGggPSBudWxsO1xuICB0aGlzLmNvbnRlbnRIZWlnaHQgPSBudWxsO1xuXG4gIHZhciBmb2N1cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbHMuc3RhdGUuZm9jdXMpOyB9O1xuICB2YXIgYmx1ciA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbHMuc3RhdGUuZm9jdXMpOyB9O1xuXG4gIHRoaXMuaXNSdGwgPSBnZXQoZWxlbWVudCkuZGlyZWN0aW9uID09PSAncnRsJztcbiAgdGhpcy5pc05lZ2F0aXZlU2Nyb2xsID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3JpZ2luYWxTY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IC0xO1xuICAgIHJlc3VsdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdCA8IDA7XG4gICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gb3JpZ2luYWxTY3JvbGxMZWZ0O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pKCk7XG4gIHRoaXMubmVnYXRpdmVTY3JvbGxBZGp1c3RtZW50ID0gdGhpcy5pc05lZ2F0aXZlU2Nyb2xsXG4gICAgPyBlbGVtZW50LnNjcm9sbFdpZHRoIC0gZWxlbWVudC5jbGllbnRXaWR0aFxuICAgIDogMDtcbiAgdGhpcy5ldmVudCA9IG5ldyBFdmVudE1hbmFnZXIoKTtcbiAgdGhpcy5vd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xuXG4gIHRoaXMuc2Nyb2xsYmFyWFJhaWwgPSBkaXYoY2xzLmVsZW1lbnQucmFpbCgneCcpKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnNjcm9sbGJhclhSYWlsKTtcbiAgdGhpcy5zY3JvbGxiYXJYID0gZGl2KGNscy5lbGVtZW50LnRodW1iKCd4JykpO1xuICB0aGlzLnNjcm9sbGJhclhSYWlsLmFwcGVuZENoaWxkKHRoaXMuc2Nyb2xsYmFyWCk7XG4gIHRoaXMuc2Nyb2xsYmFyWC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gIHRoaXMuZXZlbnQuYmluZCh0aGlzLnNjcm9sbGJhclgsICdmb2N1cycsIGZvY3VzKTtcbiAgdGhpcy5ldmVudC5iaW5kKHRoaXMuc2Nyb2xsYmFyWCwgJ2JsdXInLCBibHVyKTtcbiAgdGhpcy5zY3JvbGxiYXJYQWN0aXZlID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJYV2lkdGggPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhclhMZWZ0ID0gbnVsbDtcbiAgdmFyIHJhaWxYU3R5bGUgPSBnZXQodGhpcy5zY3JvbGxiYXJYUmFpbCk7XG4gIHRoaXMuc2Nyb2xsYmFyWEJvdHRvbSA9IHBhcnNlSW50KHJhaWxYU3R5bGUuYm90dG9tLCAxMCk7XG4gIGlmIChpc05hTih0aGlzLnNjcm9sbGJhclhCb3R0b20pKSB7XG4gICAgdGhpcy5pc1Njcm9sbGJhclhVc2luZ0JvdHRvbSA9IGZhbHNlO1xuICAgIHRoaXMuc2Nyb2xsYmFyWFRvcCA9IHRvSW50KHJhaWxYU3R5bGUudG9wKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmlzU2Nyb2xsYmFyWFVzaW5nQm90dG9tID0gdHJ1ZTtcbiAgfVxuICB0aGlzLnJhaWxCb3JkZXJYV2lkdGggPVxuICAgIHRvSW50KHJhaWxYU3R5bGUuYm9yZGVyTGVmdFdpZHRoKSArIHRvSW50KHJhaWxYU3R5bGUuYm9yZGVyUmlnaHRXaWR0aCk7XG4gIC8vIFNldCByYWlsIHRvIGRpc3BsYXk6YmxvY2sgdG8gY2FsY3VsYXRlIG1hcmdpbnNcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwsIHsgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgdGhpcy5yYWlsWE1hcmdpbldpZHRoID1cbiAgICB0b0ludChyYWlsWFN0eWxlLm1hcmdpbkxlZnQpICsgdG9JbnQocmFpbFhTdHlsZS5tYXJnaW5SaWdodCk7XG4gIHNldCh0aGlzLnNjcm9sbGJhclhSYWlsLCB7IGRpc3BsYXk6ICcnIH0pO1xuICB0aGlzLnJhaWxYV2lkdGggPSBudWxsO1xuICB0aGlzLnJhaWxYUmF0aW8gPSBudWxsO1xuXG4gIHRoaXMuc2Nyb2xsYmFyWVJhaWwgPSBkaXYoY2xzLmVsZW1lbnQucmFpbCgneScpKTtcbiAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnNjcm9sbGJhcllSYWlsKTtcbiAgdGhpcy5zY3JvbGxiYXJZID0gZGl2KGNscy5lbGVtZW50LnRodW1iKCd5JykpO1xuICB0aGlzLnNjcm9sbGJhcllSYWlsLmFwcGVuZENoaWxkKHRoaXMuc2Nyb2xsYmFyWSk7XG4gIHRoaXMuc2Nyb2xsYmFyWS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gIHRoaXMuZXZlbnQuYmluZCh0aGlzLnNjcm9sbGJhclksICdmb2N1cycsIGZvY3VzKTtcbiAgdGhpcy5ldmVudC5iaW5kKHRoaXMuc2Nyb2xsYmFyWSwgJ2JsdXInLCBibHVyKTtcbiAgdGhpcy5zY3JvbGxiYXJZQWN0aXZlID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJZSGVpZ2h0ID0gbnVsbDtcbiAgdGhpcy5zY3JvbGxiYXJZVG9wID0gbnVsbDtcbiAgdmFyIHJhaWxZU3R5bGUgPSBnZXQodGhpcy5zY3JvbGxiYXJZUmFpbCk7XG4gIHRoaXMuc2Nyb2xsYmFyWVJpZ2h0ID0gcGFyc2VJbnQocmFpbFlTdHlsZS5yaWdodCwgMTApO1xuICBpZiAoaXNOYU4odGhpcy5zY3JvbGxiYXJZUmlnaHQpKSB7XG4gICAgdGhpcy5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0ID0gZmFsc2U7XG4gICAgdGhpcy5zY3JvbGxiYXJZTGVmdCA9IHRvSW50KHJhaWxZU3R5bGUubGVmdCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5pc1Njcm9sbGJhcllVc2luZ1JpZ2h0ID0gdHJ1ZTtcbiAgfVxuICB0aGlzLnNjcm9sbGJhcllPdXRlcldpZHRoID0gdGhpcy5pc1J0bCA/IG91dGVyV2lkdGgodGhpcy5zY3JvbGxiYXJZKSA6IG51bGw7XG4gIHRoaXMucmFpbEJvcmRlcllXaWR0aCA9XG4gICAgdG9JbnQocmFpbFlTdHlsZS5ib3JkZXJUb3BXaWR0aCkgKyB0b0ludChyYWlsWVN0eWxlLmJvcmRlckJvdHRvbVdpZHRoKTtcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwsIHsgZGlzcGxheTogJ2Jsb2NrJyB9KTtcbiAgdGhpcy5yYWlsWU1hcmdpbkhlaWdodCA9XG4gICAgdG9JbnQocmFpbFlTdHlsZS5tYXJnaW5Ub3ApICsgdG9JbnQocmFpbFlTdHlsZS5tYXJnaW5Cb3R0b20pO1xuICBzZXQodGhpcy5zY3JvbGxiYXJZUmFpbCwgeyBkaXNwbGF5OiAnJyB9KTtcbiAgdGhpcy5yYWlsWUhlaWdodCA9IG51bGw7XG4gIHRoaXMucmFpbFlSYXRpbyA9IG51bGw7XG5cbiAgdGhpcy5yZWFjaCA9IHtcbiAgICB4OlxuICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0IDw9IDBcbiAgICAgICAgPyAnc3RhcnQnXG4gICAgICAgIDogZWxlbWVudC5zY3JvbGxMZWZ0ID49IHRoaXMuY29udGVudFdpZHRoIC0gdGhpcy5jb250YWluZXJXaWR0aFxuICAgICAgICAgID8gJ2VuZCdcbiAgICAgICAgICA6IG51bGwsXG4gICAgeTpcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wIDw9IDBcbiAgICAgICAgPyAnc3RhcnQnXG4gICAgICAgIDogZWxlbWVudC5zY3JvbGxUb3AgPj0gdGhpcy5jb250ZW50SGVpZ2h0IC0gdGhpcy5jb250YWluZXJIZWlnaHRcbiAgICAgICAgICA/ICdlbmQnXG4gICAgICAgICAgOiBudWxsLFxuICB9O1xuXG4gIHRoaXMuaXNBbGl2ZSA9IHRydWU7XG5cbiAgdGhpcy5zZXR0aW5ncy5oYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVyTmFtZSkgeyByZXR1cm4gaGFuZGxlcnNbaGFuZGxlck5hbWVdKHRoaXMkMSk7IH0pO1xuXG4gIHRoaXMubGFzdFNjcm9sbFRvcCA9IE1hdGguZmxvb3IoZWxlbWVudC5zY3JvbGxUb3ApOyAvLyBmb3Igb25TY3JvbGwgb25seVxuICB0aGlzLmxhc3RTY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0OyAvLyBmb3Igb25TY3JvbGwgb25seVxuICB0aGlzLmV2ZW50LmJpbmQodGhpcy5lbGVtZW50LCAnc2Nyb2xsJywgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIHRoaXMkMS5vblNjcm9sbChlKTsgfSk7XG4gIHVwZGF0ZUdlb21ldHJ5KHRoaXMpO1xufTtcblxuUGVyZmVjdFNjcm9sbGJhci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlICgpIHtcbiAgaWYgKCF0aGlzLmlzQWxpdmUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBSZWNhbGN1YXRlIG5lZ2F0aXZlIHNjcm9sbExlZnQgYWRqdXN0bWVudFxuICB0aGlzLm5lZ2F0aXZlU2Nyb2xsQWRqdXN0bWVudCA9IHRoaXMuaXNOZWdhdGl2ZVNjcm9sbFxuICAgID8gdGhpcy5lbGVtZW50LnNjcm9sbFdpZHRoIC0gdGhpcy5lbGVtZW50LmNsaWVudFdpZHRoXG4gICAgOiAwO1xuXG4gIC8vIFJlY2FsY3VsYXRlIHJhaWwgbWFyZ2luc1xuICBzZXQodGhpcy5zY3JvbGxiYXJYUmFpbCwgeyBkaXNwbGF5OiAnYmxvY2snIH0pO1xuICBzZXQodGhpcy5zY3JvbGxiYXJZUmFpbCwgeyBkaXNwbGF5OiAnYmxvY2snIH0pO1xuICB0aGlzLnJhaWxYTWFyZ2luV2lkdGggPVxuICAgIHRvSW50KGdldCh0aGlzLnNjcm9sbGJhclhSYWlsKS5tYXJnaW5MZWZ0KSArXG4gICAgdG9JbnQoZ2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwpLm1hcmdpblJpZ2h0KTtcbiAgdGhpcy5yYWlsWU1hcmdpbkhlaWdodCA9XG4gICAgdG9JbnQoZ2V0KHRoaXMuc2Nyb2xsYmFyWVJhaWwpLm1hcmdpblRvcCkgK1xuICAgIHRvSW50KGdldCh0aGlzLnNjcm9sbGJhcllSYWlsKS5tYXJnaW5Cb3R0b20pO1xuXG4gIC8vIEhpZGUgc2Nyb2xsYmFycyBub3QgdG8gYWZmZWN0IHNjcm9sbFdpZHRoIGFuZCBzY3JvbGxIZWlnaHRcbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwsIHsgZGlzcGxheTogJ25vbmUnIH0pO1xuICBzZXQodGhpcy5zY3JvbGxiYXJZUmFpbCwgeyBkaXNwbGF5OiAnbm9uZScgfSk7XG5cbiAgdXBkYXRlR2VvbWV0cnkodGhpcyk7XG5cbiAgcHJvY2Vzc1Njcm9sbERpZmYodGhpcywgJ3RvcCcsIDAsIGZhbHNlLCB0cnVlKTtcbiAgcHJvY2Vzc1Njcm9sbERpZmYodGhpcywgJ2xlZnQnLCAwLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgc2V0KHRoaXMuc2Nyb2xsYmFyWFJhaWwsIHsgZGlzcGxheTogJycgfSk7XG4gIHNldCh0aGlzLnNjcm9sbGJhcllSYWlsLCB7IGRpc3BsYXk6ICcnIH0pO1xufTtcblxuUGVyZmVjdFNjcm9sbGJhci5wcm90b3R5cGUub25TY3JvbGwgPSBmdW5jdGlvbiBvblNjcm9sbCAoZSkge1xuICBpZiAoIXRoaXMuaXNBbGl2ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHVwZGF0ZUdlb21ldHJ5KHRoaXMpO1xuICBwcm9jZXNzU2Nyb2xsRGlmZih0aGlzLCAndG9wJywgdGhpcy5lbGVtZW50LnNjcm9sbFRvcCAtIHRoaXMubGFzdFNjcm9sbFRvcCk7XG4gIHByb2Nlc3NTY3JvbGxEaWZmKFxuICAgIHRoaXMsXG4gICAgJ2xlZnQnLFxuICAgIHRoaXMuZWxlbWVudC5zY3JvbGxMZWZ0IC0gdGhpcy5sYXN0U2Nyb2xsTGVmdFxuICApO1xuXG4gIHRoaXMubGFzdFNjcm9sbFRvcCA9IE1hdGguZmxvb3IodGhpcy5lbGVtZW50LnNjcm9sbFRvcCk7XG4gIHRoaXMubGFzdFNjcm9sbExlZnQgPSB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdDtcbn07XG5cblBlcmZlY3RTY3JvbGxiYXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgaWYgKCF0aGlzLmlzQWxpdmUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB0aGlzLmV2ZW50LnVuYmluZEFsbCgpO1xuICByZW1vdmUodGhpcy5zY3JvbGxiYXJYKTtcbiAgcmVtb3ZlKHRoaXMuc2Nyb2xsYmFyWSk7XG4gIHJlbW92ZSh0aGlzLnNjcm9sbGJhclhSYWlsKTtcbiAgcmVtb3ZlKHRoaXMuc2Nyb2xsYmFyWVJhaWwpO1xuICB0aGlzLnJlbW92ZVBzQ2xhc3NlcygpO1xuXG4gIC8vIHVuc2V0IGVsZW1lbnRzXG4gIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gIHRoaXMuc2Nyb2xsYmFyWCA9IG51bGw7XG4gIHRoaXMuc2Nyb2xsYmFyWSA9IG51bGw7XG4gIHRoaXMuc2Nyb2xsYmFyWFJhaWwgPSBudWxsO1xuICB0aGlzLnNjcm9sbGJhcllSYWlsID0gbnVsbDtcblxuICB0aGlzLmlzQWxpdmUgPSBmYWxzZTtcbn07XG5cblBlcmZlY3RTY3JvbGxiYXIucHJvdG90eXBlLnJlbW92ZVBzQ2xhc3NlcyA9IGZ1bmN0aW9uIHJlbW92ZVBzQ2xhc3NlcyAoKSB7XG4gIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgPSB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lXG4gICAgLnNwbGl0KCcgJylcbiAgICAuZmlsdGVyKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiAhbmFtZS5tYXRjaCgvXnBzKFstX10uK3wpJC8pOyB9KVxuICAgIC5qb2luKCcgJyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQZXJmZWN0U2Nyb2xsYmFyO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIi8qISBwYWNlIDEuMC4wICovXG4oZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlLGYsZyxoLGksaixrLGwsbSxuLG8scCxxLHIscyx0LHUsdix3LHgseSx6LEEsQixDLEQsRSxGLEcsSCxJLEosSyxMLE0sTixPLFAsUSxSLFMsVCxVLFYsVyxYPVtdLnNsaWNlLFk9e30uaGFzT3duUHJvcGVydHksWj1mdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoKXt0aGlzLmNvbnN0cnVjdG9yPWF9Zm9yKHZhciBkIGluIGIpWS5jYWxsKGIsZCkmJihhW2RdPWJbZF0pO3JldHVybiBjLnByb3RvdHlwZT1iLnByb3RvdHlwZSxhLnByb3RvdHlwZT1uZXcgYyxhLl9fc3VwZXJfXz1iLnByb3RvdHlwZSxhfSwkPVtdLmluZGV4T2Z8fGZ1bmN0aW9uKGEpe2Zvcih2YXIgYj0wLGM9dGhpcy5sZW5ndGg7Yz5iO2IrKylpZihiIGluIHRoaXMmJnRoaXNbYl09PT1hKXJldHVybiBiO3JldHVybi0xfTtmb3IodT17Y2F0Y2h1cFRpbWU6MTAwLGluaXRpYWxSYXRlOi4wMyxtaW5UaW1lOjI1MCxnaG9zdFRpbWU6MTAwLG1heFByb2dyZXNzUGVyRnJhbWU6MjAsZWFzZUZhY3RvcjoxLjI1LHN0YXJ0T25QYWdlTG9hZDohMCxyZXN0YXJ0T25QdXNoU3RhdGU6ITAscmVzdGFydE9uUmVxdWVzdEFmdGVyOjUwMCx0YXJnZXQ6XCJib2R5XCIsZWxlbWVudHM6e2NoZWNrSW50ZXJ2YWw6MTAwLHNlbGVjdG9yczpbXCJib2R5XCJdfSxldmVudExhZzp7bWluU2FtcGxlczoxMCxzYW1wbGVDb3VudDozLGxhZ1RocmVzaG9sZDozfSxhamF4Ont0cmFja01ldGhvZHM6W1wiR0VUXCJdLHRyYWNrV2ViU29ja2V0czohMCxpZ25vcmVVUkxzOltdfX0sQz1mdW5jdGlvbigpe3ZhciBhO3JldHVybiBudWxsIT0oYT1cInVuZGVmaW5lZFwiIT10eXBlb2YgcGVyZm9ybWFuY2UmJm51bGwhPT1wZXJmb3JtYW5jZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgcGVyZm9ybWFuY2Uubm93P3BlcmZvcm1hbmNlLm5vdygpOnZvaWQgMCk/YTorbmV3IERhdGV9LEU9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8d2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lLHQ9d2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lfHx3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUsbnVsbD09RSYmKEU9ZnVuY3Rpb24oYSl7cmV0dXJuIHNldFRpbWVvdXQoYSw1MCl9LHQ9ZnVuY3Rpb24oYSl7cmV0dXJuIGNsZWFyVGltZW91dChhKX0pLEc9ZnVuY3Rpb24oYSl7dmFyIGIsYztyZXR1cm4gYj1DKCksKGM9ZnVuY3Rpb24oKXt2YXIgZDtyZXR1cm4gZD1DKCktYixkPj0zMz8oYj1DKCksYShkLGZ1bmN0aW9uKCl7cmV0dXJuIEUoYyl9KSk6c2V0VGltZW91dChjLDMzLWQpfSkoKX0sRj1mdW5jdGlvbigpe3ZhciBhLGIsYztyZXR1cm4gYz1hcmd1bWVudHNbMF0sYj1hcmd1bWVudHNbMV0sYT0zPD1hcmd1bWVudHMubGVuZ3RoP1guY2FsbChhcmd1bWVudHMsMik6W10sXCJmdW5jdGlvblwiPT10eXBlb2YgY1tiXT9jW2JdLmFwcGx5KGMsYSk6Y1tiXX0sdj1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnO2ZvcihiPWFyZ3VtZW50c1swXSxkPTI8PWFyZ3VtZW50cy5sZW5ndGg/WC5jYWxsKGFyZ3VtZW50cywxKTpbXSxmPTAsZz1kLmxlbmd0aDtnPmY7ZisrKWlmKGM9ZFtmXSlmb3IoYSBpbiBjKVkuY2FsbChjLGEpJiYoZT1jW2FdLG51bGwhPWJbYV0mJlwib2JqZWN0XCI9PXR5cGVvZiBiW2FdJiZudWxsIT1lJiZcIm9iamVjdFwiPT10eXBlb2YgZT92KGJbYV0sZSk6YlthXT1lKTtyZXR1cm4gYn0scT1mdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmO2ZvcihjPWI9MCxlPTAsZj1hLmxlbmd0aDtmPmU7ZSsrKWQ9YVtlXSxjKz1NYXRoLmFicyhkKSxiKys7cmV0dXJuIGMvYn0seD1mdW5jdGlvbihhLGIpe3ZhciBjLGQsZTtpZihudWxsPT1hJiYoYT1cIm9wdGlvbnNcIiksbnVsbD09YiYmKGI9ITApLGU9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXBhY2UtXCIrYStcIl1cIikpe2lmKGM9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBhY2UtXCIrYSksIWIpcmV0dXJuIGM7dHJ5e3JldHVybiBKU09OLnBhcnNlKGMpfWNhdGNoKGYpe3JldHVybiBkPWYsXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGNvbnNvbGUmJm51bGwhPT1jb25zb2xlP2NvbnNvbGUuZXJyb3IoXCJFcnJvciBwYXJzaW5nIGlubGluZSBwYWNlIG9wdGlvbnNcIixkKTp2b2lkIDB9fX0sZz1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXt9cmV0dXJuIGEucHJvdG90eXBlLm9uPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlO3JldHVybiBudWxsPT1kJiYoZD0hMSksbnVsbD09dGhpcy5iaW5kaW5ncyYmKHRoaXMuYmluZGluZ3M9e30pLG51bGw9PShlPXRoaXMuYmluZGluZ3MpW2FdJiYoZVthXT1bXSksdGhpcy5iaW5kaW5nc1thXS5wdXNoKHtoYW5kbGVyOmIsY3R4OmMsb25jZTpkfSl9LGEucHJvdG90eXBlLm9uY2U9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9uKGEsYixjLCEwKX0sYS5wcm90b3R5cGUub2ZmPWZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlO2lmKG51bGwhPShudWxsIT0oZD10aGlzLmJpbmRpbmdzKT9kW2FdOnZvaWQgMCkpe2lmKG51bGw9PWIpcmV0dXJuIGRlbGV0ZSB0aGlzLmJpbmRpbmdzW2FdO2ZvcihjPTAsZT1bXTtjPHRoaXMuYmluZGluZ3NbYV0ubGVuZ3RoOyllLnB1c2godGhpcy5iaW5kaW5nc1thXVtjXS5oYW5kbGVyPT09Yj90aGlzLmJpbmRpbmdzW2FdLnNwbGljZShjLDEpOmMrKyk7cmV0dXJuIGV9fSxhLnByb3RvdHlwZS50cmlnZ2VyPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGcsaCxpO2lmKGM9YXJndW1lbnRzWzBdLGE9Mjw9YXJndW1lbnRzLmxlbmd0aD9YLmNhbGwoYXJndW1lbnRzLDEpOltdLG51bGwhPShnPXRoaXMuYmluZGluZ3MpP2dbY106dm9pZCAwKXtmb3IoZT0wLGk9W107ZTx0aGlzLmJpbmRpbmdzW2NdLmxlbmd0aDspaD10aGlzLmJpbmRpbmdzW2NdW2VdLGQ9aC5oYW5kbGVyLGI9aC5jdHgsZj1oLm9uY2UsZC5hcHBseShudWxsIT1iP2I6dGhpcyxhKSxpLnB1c2goZj90aGlzLmJpbmRpbmdzW2NdLnNwbGljZShlLDEpOmUrKyk7cmV0dXJuIGl9fSxhfSgpLGo9d2luZG93LlBhY2V8fHt9LHdpbmRvdy5QYWNlPWosdihqLGcucHJvdG90eXBlKSxEPWoub3B0aW9ucz12KHt9LHUsd2luZG93LnBhY2VPcHRpb25zLHgoKSksVT1bXCJhamF4XCIsXCJkb2N1bWVudFwiLFwiZXZlbnRMYWdcIixcImVsZW1lbnRzXCJdLFE9MCxTPVUubGVuZ3RoO1M+UTtRKyspSz1VW1FdLERbS109PT0hMCYmKERbS109dVtLXSk7aT1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7cmV0dXJuIFY9Yi5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcyxhcmd1bWVudHMpfXJldHVybiBaKGIsYSksYn0oRXJyb3IpLGI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7dGhpcy5wcm9ncmVzcz0wfXJldHVybiBhLnByb3RvdHlwZS5nZXRFbGVtZW50PWZ1bmN0aW9uKCl7dmFyIGE7aWYobnVsbD09dGhpcy5lbCl7aWYoYT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKEQudGFyZ2V0KSwhYSl0aHJvdyBuZXcgaTt0aGlzLmVsPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5lbC5jbGFzc05hbWU9XCJwYWNlIHBhY2UtYWN0aXZlXCIsZG9jdW1lbnQuYm9keS5jbGFzc05hbWU9ZG9jdW1lbnQuYm9keS5jbGFzc05hbWUucmVwbGFjZSgvcGFjZS1kb25lL2csXCJcIiksZG9jdW1lbnQuYm9keS5jbGFzc05hbWUrPVwiIHBhY2UtcnVubmluZ1wiLHRoaXMuZWwuaW5uZXJIVE1MPSc8ZGl2IGNsYXNzPVwicGFjZS1wcm9ncmVzc1wiPlxcbiAgPGRpdiBjbGFzcz1cInBhY2UtcHJvZ3Jlc3MtaW5uZXJcIj48L2Rpdj5cXG48L2Rpdj5cXG48ZGl2IGNsYXNzPVwicGFjZS1hY3Rpdml0eVwiPjwvZGl2PicsbnVsbCE9YS5maXJzdENoaWxkP2EuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsYS5maXJzdENoaWxkKTphLmFwcGVuZENoaWxkKHRoaXMuZWwpfXJldHVybiB0aGlzLmVsfSxhLnByb3RvdHlwZS5maW5pc2g9ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4gYT10aGlzLmdldEVsZW1lbnQoKSxhLmNsYXNzTmFtZT1hLmNsYXNzTmFtZS5yZXBsYWNlKFwicGFjZS1hY3RpdmVcIixcIlwiKSxhLmNsYXNzTmFtZSs9XCIgcGFjZS1pbmFjdGl2ZVwiLGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lPWRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoXCJwYWNlLXJ1bm5pbmdcIixcIlwiKSxkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSs9XCIgcGFjZS1kb25lXCJ9LGEucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wcm9ncmVzcz1hLHRoaXMucmVuZGVyKCl9LGEucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0cnl7dGhpcy5nZXRFbGVtZW50KCkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmdldEVsZW1lbnQoKSl9Y2F0Y2goYSl7aT1hfXJldHVybiB0aGlzLmVsPXZvaWQgMH0sYS5wcm90b3R5cGUucmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc7aWYobnVsbD09ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihELnRhcmdldCkpcmV0dXJuITE7Zm9yKGE9dGhpcy5nZXRFbGVtZW50KCksZD1cInRyYW5zbGF0ZTNkKFwiK3RoaXMucHJvZ3Jlc3MrXCIlLCAwLCAwKVwiLGc9W1wid2Via2l0VHJhbnNmb3JtXCIsXCJtc1RyYW5zZm9ybVwiLFwidHJhbnNmb3JtXCJdLGU9MCxmPWcubGVuZ3RoO2Y+ZTtlKyspYj1nW2VdLGEuY2hpbGRyZW5bMF0uc3R5bGVbYl09ZDtyZXR1cm4oIXRoaXMubGFzdFJlbmRlcmVkUHJvZ3Jlc3N8fHRoaXMubGFzdFJlbmRlcmVkUHJvZ3Jlc3N8MCE9PXRoaXMucHJvZ3Jlc3N8MCkmJihhLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvZ3Jlc3MtdGV4dFwiLFwiXCIrKDB8dGhpcy5wcm9ncmVzcykrXCIlXCIpLHRoaXMucHJvZ3Jlc3M+PTEwMD9jPVwiOTlcIjooYz10aGlzLnByb2dyZXNzPDEwP1wiMFwiOlwiXCIsYys9MHx0aGlzLnByb2dyZXNzKSxhLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcImRhdGEtcHJvZ3Jlc3NcIixcIlwiK2MpKSx0aGlzLmxhc3RSZW5kZXJlZFByb2dyZXNzPXRoaXMucHJvZ3Jlc3N9LGEucHJvdG90eXBlLmRvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcm9ncmVzcz49MTAwfSxhfSgpLGg9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7dGhpcy5iaW5kaW5ncz17fX1yZXR1cm4gYS5wcm90b3R5cGUudHJpZ2dlcj1mdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmLGc7aWYobnVsbCE9dGhpcy5iaW5kaW5nc1thXSl7Zm9yKGY9dGhpcy5iaW5kaW5nc1thXSxnPVtdLGQ9MCxlPWYubGVuZ3RoO2U+ZDtkKyspYz1mW2RdLGcucHVzaChjLmNhbGwodGhpcyxiKSk7cmV0dXJuIGd9fSxhLnByb3RvdHlwZS5vbj1mdW5jdGlvbihhLGIpe3ZhciBjO3JldHVybiBudWxsPT0oYz10aGlzLmJpbmRpbmdzKVthXSYmKGNbYV09W10pLHRoaXMuYmluZGluZ3NbYV0ucHVzaChiKX0sYX0oKSxQPXdpbmRvdy5YTUxIdHRwUmVxdWVzdCxPPXdpbmRvdy5YRG9tYWluUmVxdWVzdCxOPXdpbmRvdy5XZWJTb2NrZXQsdz1mdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmO2Y9W107Zm9yKGQgaW4gYi5wcm90b3R5cGUpdHJ5e2U9Yi5wcm90b3R5cGVbZF0sZi5wdXNoKG51bGw9PWFbZF0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGU/YVtkXT1lOnZvaWQgMCl9Y2F0Y2goZyl7Yz1nfXJldHVybiBmfSxBPVtdLGouaWdub3JlPWZ1bmN0aW9uKCl7dmFyIGEsYixjO3JldHVybiBiPWFyZ3VtZW50c1swXSxhPTI8PWFyZ3VtZW50cy5sZW5ndGg/WC5jYWxsKGFyZ3VtZW50cywxKTpbXSxBLnVuc2hpZnQoXCJpZ25vcmVcIiksYz1iLmFwcGx5KG51bGwsYSksQS5zaGlmdCgpLGN9LGoudHJhY2s9ZnVuY3Rpb24oKXt2YXIgYSxiLGM7cmV0dXJuIGI9YXJndW1lbnRzWzBdLGE9Mjw9YXJndW1lbnRzLmxlbmd0aD9YLmNhbGwoYXJndW1lbnRzLDEpOltdLEEudW5zaGlmdChcInRyYWNrXCIpLGM9Yi5hcHBseShudWxsLGEpLEEuc2hpZnQoKSxjfSxKPWZ1bmN0aW9uKGEpe3ZhciBiO2lmKG51bGw9PWEmJihhPVwiR0VUXCIpLFwidHJhY2tcIj09PUFbMF0pcmV0dXJuXCJmb3JjZVwiO2lmKCFBLmxlbmd0aCYmRC5hamF4KXtpZihcInNvY2tldFwiPT09YSYmRC5hamF4LnRyYWNrV2ViU29ja2V0cylyZXR1cm4hMDtpZihiPWEudG9VcHBlckNhc2UoKSwkLmNhbGwoRC5hamF4LnRyYWNrTWV0aG9kcyxiKT49MClyZXR1cm4hMH1yZXR1cm4hMX0saz1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7dmFyIGEsYz10aGlzO2IuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxhPWZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBiPWEub3BlbixhLm9wZW49ZnVuY3Rpb24oZCxlKXtyZXR1cm4gSihkKSYmYy50cmlnZ2VyKFwicmVxdWVzdFwiLHt0eXBlOmQsdXJsOmUscmVxdWVzdDphfSksYi5hcHBseShhLGFyZ3VtZW50cyl9fSx3aW5kb3cuWE1MSHR0cFJlcXVlc3Q9ZnVuY3Rpb24oYil7dmFyIGM7cmV0dXJuIGM9bmV3IFAoYiksYShjKSxjfTt0cnl7dyh3aW5kb3cuWE1MSHR0cFJlcXVlc3QsUCl9Y2F0Y2goZCl7fWlmKG51bGwhPU8pe3dpbmRvdy5YRG9tYWluUmVxdWVzdD1mdW5jdGlvbigpe3ZhciBiO3JldHVybiBiPW5ldyBPLGEoYiksYn07dHJ5e3cod2luZG93LlhEb21haW5SZXF1ZXN0LE8pfWNhdGNoKGQpe319aWYobnVsbCE9TiYmRC5hamF4LnRyYWNrV2ViU29ja2V0cyl7d2luZG93LldlYlNvY2tldD1mdW5jdGlvbihhLGIpe3ZhciBkO3JldHVybiBkPW51bGwhPWI/bmV3IE4oYSxiKTpuZXcgTihhKSxKKFwic29ja2V0XCIpJiZjLnRyaWdnZXIoXCJyZXF1ZXN0XCIse3R5cGU6XCJzb2NrZXRcIix1cmw6YSxwcm90b2NvbHM6YixyZXF1ZXN0OmR9KSxkfTt0cnl7dyh3aW5kb3cuV2ViU29ja2V0LE4pfWNhdGNoKGQpe319fXJldHVybiBaKGIsYSksYn0oaCksUj1udWxsLHk9ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09UiYmKFI9bmV3IGspLFJ9LEk9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU7Zm9yKGU9RC5hamF4Lmlnbm9yZVVSTHMsYz0wLGQ9ZS5sZW5ndGg7ZD5jO2MrKylpZihiPWVbY10sXCJzdHJpbmdcIj09dHlwZW9mIGIpe2lmKC0xIT09YS5pbmRleE9mKGIpKXJldHVybiEwfWVsc2UgaWYoYi50ZXN0KGEpKXJldHVybiEwO3JldHVybiExfSx5KCkub24oXCJyZXF1ZXN0XCIsZnVuY3Rpb24oYil7dmFyIGMsZCxlLGYsZztyZXR1cm4gZj1iLnR5cGUsZT1iLnJlcXVlc3QsZz1iLnVybCxJKGcpP3ZvaWQgMDpqLnJ1bm5pbmd8fEQucmVzdGFydE9uUmVxdWVzdEFmdGVyPT09ITEmJlwiZm9yY2VcIiE9PUooZik/dm9pZCAwOihkPWFyZ3VtZW50cyxjPUQucmVzdGFydE9uUmVxdWVzdEFmdGVyfHwwLFwiYm9vbGVhblwiPT10eXBlb2YgYyYmKGM9MCksc2V0VGltZW91dChmdW5jdGlvbigpe3ZhciBiLGMsZyxoLGksaztpZihiPVwic29ja2V0XCI9PT1mP2UucmVhZHlTdGF0ZTwyOjA8KGg9ZS5yZWFkeVN0YXRlKSYmND5oKXtmb3Ioai5yZXN0YXJ0KCksaT1qLnNvdXJjZXMsaz1bXSxjPTAsZz1pLmxlbmd0aDtnPmM7YysrKXtpZihLPWlbY10sSyBpbnN0YW5jZW9mIGEpe0sud2F0Y2guYXBwbHkoSyxkKTticmVha31rLnB1c2godm9pZCAwKX1yZXR1cm4ga319LGMpKX0pLGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7dmFyIGE9dGhpczt0aGlzLmVsZW1lbnRzPVtdLHkoKS5vbihcInJlcXVlc3RcIixmdW5jdGlvbigpe3JldHVybiBhLndhdGNoLmFwcGx5KGEsYXJndW1lbnRzKX0pfXJldHVybiBhLnByb3RvdHlwZS53YXRjaD1mdW5jdGlvbihhKXt2YXIgYixjLGQsZTtyZXR1cm4gZD1hLnR5cGUsYj1hLnJlcXVlc3QsZT1hLnVybCxJKGUpP3ZvaWQgMDooYz1cInNvY2tldFwiPT09ZD9uZXcgbihiKTpuZXcgbyhiKSx0aGlzLmVsZW1lbnRzLnB1c2goYykpfSxhfSgpLG89ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGEpe3ZhciBiLGMsZCxlLGYsZyxoPXRoaXM7aWYodGhpcy5wcm9ncmVzcz0wLG51bGwhPXdpbmRvdy5Qcm9ncmVzc0V2ZW50KWZvcihjPW51bGwsYS5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIixmdW5jdGlvbihhKXtyZXR1cm4gaC5wcm9ncmVzcz1hLmxlbmd0aENvbXB1dGFibGU/MTAwKmEubG9hZGVkL2EudG90YWw6aC5wcm9ncmVzcysoMTAwLWgucHJvZ3Jlc3MpLzJ9LCExKSxnPVtcImxvYWRcIixcImFib3J0XCIsXCJ0aW1lb3V0XCIsXCJlcnJvclwiXSxkPTAsZT1nLmxlbmd0aDtlPmQ7ZCsrKWI9Z1tkXSxhLmFkZEV2ZW50TGlzdGVuZXIoYixmdW5jdGlvbigpe3JldHVybiBoLnByb2dyZXNzPTEwMH0sITEpO2Vsc2UgZj1hLm9ucmVhZHlzdGF0ZWNoYW5nZSxhLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe3ZhciBiO3JldHVybiAwPT09KGI9YS5yZWFkeVN0YXRlKXx8ND09PWI/aC5wcm9ncmVzcz0xMDA6Mz09PWEucmVhZHlTdGF0ZSYmKGgucHJvZ3Jlc3M9NTApLFwiZnVuY3Rpb25cIj09dHlwZW9mIGY/Zi5hcHBseShudWxsLGFyZ3VtZW50cyk6dm9pZCAwfX1yZXR1cm4gYX0oKSxuPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhKXt2YXIgYixjLGQsZSxmPXRoaXM7Zm9yKHRoaXMucHJvZ3Jlc3M9MCxlPVtcImVycm9yXCIsXCJvcGVuXCJdLGM9MCxkPWUubGVuZ3RoO2Q+YztjKyspYj1lW2NdLGEuYWRkRXZlbnRMaXN0ZW5lcihiLGZ1bmN0aW9uKCl7cmV0dXJuIGYucHJvZ3Jlc3M9MTAwfSwhMSl9cmV0dXJuIGF9KCksZD1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSl7dmFyIGIsYyxkLGY7Zm9yKG51bGw9PWEmJihhPXt9KSx0aGlzLmVsZW1lbnRzPVtdLG51bGw9PWEuc2VsZWN0b3JzJiYoYS5zZWxlY3RvcnM9W10pLGY9YS5zZWxlY3RvcnMsYz0wLGQ9Zi5sZW5ndGg7ZD5jO2MrKyliPWZbY10sdGhpcy5lbGVtZW50cy5wdXNoKG5ldyBlKGIpKX1yZXR1cm4gYX0oKSxlPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShhKXt0aGlzLnNlbGVjdG9yPWEsdGhpcy5wcm9ncmVzcz0wLHRoaXMuY2hlY2soKX1yZXR1cm4gYS5wcm90b3R5cGUuY2hlY2s9ZnVuY3Rpb24oKXt2YXIgYT10aGlzO3JldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2VsZWN0b3IpP3RoaXMuZG9uZSgpOnNldFRpbWVvdXQoZnVuY3Rpb24oKXtyZXR1cm4gYS5jaGVjaygpfSxELmVsZW1lbnRzLmNoZWNrSW50ZXJ2YWwpfSxhLnByb3RvdHlwZS5kb25lPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJvZ3Jlc3M9MTAwfSxhfSgpLGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKCl7dmFyIGEsYixjPXRoaXM7dGhpcy5wcm9ncmVzcz1udWxsIT0oYj10aGlzLnN0YXRlc1tkb2N1bWVudC5yZWFkeVN0YXRlXSk/YjoxMDAsYT1kb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UsZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGwhPWMuc3RhdGVzW2RvY3VtZW50LnJlYWR5U3RhdGVdJiYoYy5wcm9ncmVzcz1jLnN0YXRlc1tkb2N1bWVudC5yZWFkeVN0YXRlXSksXCJmdW5jdGlvblwiPT10eXBlb2YgYT9hLmFwcGx5KG51bGwsYXJndW1lbnRzKTp2b2lkIDB9fXJldHVybiBhLnByb3RvdHlwZS5zdGF0ZXM9e2xvYWRpbmc6MCxpbnRlcmFjdGl2ZTo1MCxjb21wbGV0ZToxMDB9LGF9KCksZj1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoKXt2YXIgYSxiLGMsZCxlLGY9dGhpczt0aGlzLnByb2dyZXNzPTAsYT0wLGU9W10sZD0wLGM9QygpLGI9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXt2YXIgZztyZXR1cm4gZz1DKCktYy01MCxjPUMoKSxlLnB1c2goZyksZS5sZW5ndGg+RC5ldmVudExhZy5zYW1wbGVDb3VudCYmZS5zaGlmdCgpLGE9cShlKSwrK2Q+PUQuZXZlbnRMYWcubWluU2FtcGxlcyYmYTxELmV2ZW50TGFnLmxhZ1RocmVzaG9sZD8oZi5wcm9ncmVzcz0xMDAsY2xlYXJJbnRlcnZhbChiKSk6Zi5wcm9ncmVzcz0xMDAqKDMvKGErMykpfSw1MCl9cmV0dXJuIGF9KCksbT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoYSl7dGhpcy5zb3VyY2U9YSx0aGlzLmxhc3Q9dGhpcy5zaW5jZUxhc3RVcGRhdGU9MCx0aGlzLnJhdGU9RC5pbml0aWFsUmF0ZSx0aGlzLmNhdGNodXA9MCx0aGlzLnByb2dyZXNzPXRoaXMubGFzdFByb2dyZXNzPTAsbnVsbCE9dGhpcy5zb3VyY2UmJih0aGlzLnByb2dyZXNzPUYodGhpcy5zb3VyY2UsXCJwcm9ncmVzc1wiKSl9cmV0dXJuIGEucHJvdG90eXBlLnRpY2s9ZnVuY3Rpb24oYSxiKXt2YXIgYztyZXR1cm4gbnVsbD09YiYmKGI9Rih0aGlzLnNvdXJjZSxcInByb2dyZXNzXCIpKSxiPj0xMDAmJih0aGlzLmRvbmU9ITApLGI9PT10aGlzLmxhc3Q/dGhpcy5zaW5jZUxhc3RVcGRhdGUrPWE6KHRoaXMuc2luY2VMYXN0VXBkYXRlJiYodGhpcy5yYXRlPShiLXRoaXMubGFzdCkvdGhpcy5zaW5jZUxhc3RVcGRhdGUpLHRoaXMuY2F0Y2h1cD0oYi10aGlzLnByb2dyZXNzKS9ELmNhdGNodXBUaW1lLHRoaXMuc2luY2VMYXN0VXBkYXRlPTAsdGhpcy5sYXN0PWIpLGI+dGhpcy5wcm9ncmVzcyYmKHRoaXMucHJvZ3Jlc3MrPXRoaXMuY2F0Y2h1cCphKSxjPTEtTWF0aC5wb3codGhpcy5wcm9ncmVzcy8xMDAsRC5lYXNlRmFjdG9yKSx0aGlzLnByb2dyZXNzKz1jKnRoaXMucmF0ZSphLHRoaXMucHJvZ3Jlc3M9TWF0aC5taW4odGhpcy5sYXN0UHJvZ3Jlc3MrRC5tYXhQcm9ncmVzc1BlckZyYW1lLHRoaXMucHJvZ3Jlc3MpLHRoaXMucHJvZ3Jlc3M9TWF0aC5tYXgoMCx0aGlzLnByb2dyZXNzKSx0aGlzLnByb2dyZXNzPU1hdGgubWluKDEwMCx0aGlzLnByb2dyZXNzKSx0aGlzLmxhc3RQcm9ncmVzcz10aGlzLnByb2dyZXNzLHRoaXMucHJvZ3Jlc3N9LGF9KCksTD1udWxsLEg9bnVsbCxyPW51bGwsTT1udWxsLHA9bnVsbCxzPW51bGwsai5ydW5uaW5nPSExLHo9ZnVuY3Rpb24oKXtyZXR1cm4gRC5yZXN0YXJ0T25QdXNoU3RhdGU/ai5yZXN0YXJ0KCk6dm9pZCAwfSxudWxsIT13aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUmJihUPXdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSx3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGU9ZnVuY3Rpb24oKXtyZXR1cm4geigpLFQuYXBwbHkod2luZG93Lmhpc3RvcnksYXJndW1lbnRzKX0pLG51bGwhPXdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSYmKFc9d2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlLHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZT1mdW5jdGlvbigpe3JldHVybiB6KCksVy5hcHBseSh3aW5kb3cuaGlzdG9yeSxhcmd1bWVudHMpfSksbD17YWpheDphLGVsZW1lbnRzOmQsZG9jdW1lbnQ6YyxldmVudExhZzpmfSwoQj1mdW5jdGlvbigpe3ZhciBhLGMsZCxlLGYsZyxoLGk7Zm9yKGouc291cmNlcz1MPVtdLGc9W1wiYWpheFwiLFwiZWxlbWVudHNcIixcImRvY3VtZW50XCIsXCJldmVudExhZ1wiXSxjPTAsZT1nLmxlbmd0aDtlPmM7YysrKWE9Z1tjXSxEW2FdIT09ITEmJkwucHVzaChuZXcgbFthXShEW2FdKSk7Zm9yKGk9bnVsbCE9KGg9RC5leHRyYVNvdXJjZXMpP2g6W10sZD0wLGY9aS5sZW5ndGg7Zj5kO2QrKylLPWlbZF0sTC5wdXNoKG5ldyBLKEQpKTtyZXR1cm4gai5iYXI9cj1uZXcgYixIPVtdLE09bmV3IG19KSgpLGouc3RvcD1mdW5jdGlvbigpe3JldHVybiBqLnRyaWdnZXIoXCJzdG9wXCIpLGoucnVubmluZz0hMSxyLmRlc3Ryb3koKSxzPSEwLG51bGwhPXAmJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZ0KHApLHA9bnVsbCksQigpfSxqLnJlc3RhcnQ9ZnVuY3Rpb24oKXtyZXR1cm4gai50cmlnZ2VyKFwicmVzdGFydFwiKSxqLnN0b3AoKSxqLnN0YXJ0KCl9LGouZ289ZnVuY3Rpb24oKXt2YXIgYTtyZXR1cm4gai5ydW5uaW5nPSEwLHIucmVuZGVyKCksYT1DKCkscz0hMSxwPUcoZnVuY3Rpb24oYixjKXt2YXIgZCxlLGYsZyxoLGksayxsLG4sbyxwLHEsdCx1LHYsdztmb3IobD0xMDAtci5wcm9ncmVzcyxlPXA9MCxmPSEwLGk9cT0wLHU9TC5sZW5ndGg7dT5xO2k9KytxKWZvcihLPUxbaV0sbz1udWxsIT1IW2ldP0hbaV06SFtpXT1bXSxoPW51bGwhPSh3PUsuZWxlbWVudHMpP3c6W0tdLGs9dD0wLHY9aC5sZW5ndGg7dj50O2s9Kyt0KWc9aFtrXSxuPW51bGwhPW9ba10/b1trXTpvW2tdPW5ldyBtKGcpLGYmPW4uZG9uZSxuLmRvbmV8fChlKysscCs9bi50aWNrKGIpKTtyZXR1cm4gZD1wL2Usci51cGRhdGUoTS50aWNrKGIsZCkpLHIuZG9uZSgpfHxmfHxzPyhyLnVwZGF0ZSgxMDApLGoudHJpZ2dlcihcImRvbmVcIiksc2V0VGltZW91dChmdW5jdGlvbigpe3JldHVybiByLmZpbmlzaCgpLGoucnVubmluZz0hMSxqLnRyaWdnZXIoXCJoaWRlXCIpfSxNYXRoLm1heChELmdob3N0VGltZSxNYXRoLm1heChELm1pblRpbWUtKEMoKS1hKSwwKSkpKTpjKCl9KX0sai5zdGFydD1mdW5jdGlvbihhKXt2KEQsYSksai5ydW5uaW5nPSEwO3RyeXtyLnJlbmRlcigpfWNhdGNoKGIpe2k9Yn1yZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wYWNlXCIpPyhqLnRyaWdnZXIoXCJzdGFydFwiKSxqLmdvKCkpOnNldFRpbWVvdXQoai5zdGFydCw1MCl9LFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gan0pOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPWo6RC5zdGFydE9uUGFnZUxvYWQmJmouc3RhcnQoKX0pLmNhbGwodGhpcyk7IiwiLy8gTG9hZGVkIGFmdGVyIENvcmVVSSBhcHAuanNcblxuIiwiaW1wb3J0ICdAY29yZXVpL2NvcmV1aSdcbiIsIi8qKlxuICogRmlyc3Qgd2Ugd2lsbCBsb2FkIGFsbCBvZiB0aGlzIHByb2plY3QncyBKYXZhU2NyaXB0IGRlcGVuZGVuY2llcyB3aGljaFxuICogaW5jbHVkZXMgVnVlIGFuZCBvdGhlciBsaWJyYXJpZXMuIEl0IGlzIGEgZ3JlYXQgc3RhcnRpbmcgcG9pbnQgd2hlblxuICogYnVpbGRpbmcgcm9idXN0LCBwb3dlcmZ1bCB3ZWIgYXBwbGljYXRpb25zIHVzaW5nIFZ1ZSBhbmQgTGFyYXZlbC5cbiAqL1xuXG4vLyBMb2FkZWQgYmVmb3JlIENvcmVVSSBhcHAuanNcbmltcG9ydCAnLi4vYm9vdHN0cmFwJztcbmltcG9ydCAnLi9fcGFjZSc7XG5pbXBvcnQgJy4uL3BsdWdpbnMnO1xuIiwiLyoqXG4gKiBUaGlzIGJvb3RzdHJhcCBmaWxlIGlzIHVzZWQgZm9yIGJvdGggZnJvbnRlbmQgYW5kIGJhY2tlbmRcbiAqL1xuXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgU3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdwb3BwZXIuanMnOyAvLyBSZXF1aXJlZCBmb3IgQlM0XG5pbXBvcnQgJ2Jvb3RzdHJhcCc7XG5cbi8qKlxuICogV2UnbGwgbG9hZCBqUXVlcnkgYW5kIHRoZSBCb290c3RyYXAgalF1ZXJ5IHBsdWdpbiB3aGljaCBwcm92aWRlcyBzdXBwb3J0XG4gKiBmb3IgSmF2YVNjcmlwdCBiYXNlZCBCb290c3RyYXAgZmVhdHVyZXMgc3VjaCBhcyBtb2RhbHMgYW5kIHRhYnMuIFRoaXNcbiAqIGNvZGUgbWF5IGJlIG1vZGlmaWVkIHRvIGZpdCB0aGUgc3BlY2lmaWMgbmVlZHMgb2YgeW91ciBhcHBsaWNhdGlvbi5cbiAqL1xuXG53aW5kb3cuJCA9IHdpbmRvdy5qUXVlcnkgPSAkO1xud2luZG93LlN3YWwgPSBTd2FsO1xud2luZG93Ll8gPSBfOyAvLyBMb2Rhc2hcblxuLyoqXG4gKiBXZSdsbCBsb2FkIHRoZSBheGlvcyBIVFRQIGxpYnJhcnkgd2hpY2ggYWxsb3dzIHVzIHRvIGVhc2lseSBpc3N1ZSByZXF1ZXN0c1xuICogdG8gb3VyIExhcmF2ZWwgYmFjay1lbmQuIFRoaXMgbGlicmFyeSBhdXRvbWF0aWNhbGx5IGhhbmRsZXMgc2VuZGluZyB0aGVcbiAqIENTUkYgdG9rZW4gYXMgYSBoZWFkZXIgYmFzZWQgb24gdGhlIHZhbHVlIG9mIHRoZSBcIlhTUkZcIiB0b2tlbiBjb29raWUuXG4gKi9cblxud2luZG93LmF4aW9zID0gYXhpb3M7XG53aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtUmVxdWVzdGVkLVdpdGgnXSA9ICdYTUxIdHRwUmVxdWVzdCc7XG5cbi8qKlxuICogTmV4dCB3ZSB3aWxsIHJlZ2lzdGVyIHRoZSBDU1JGIFRva2VuIGFzIGEgY29tbW9uIGhlYWRlciB3aXRoIEF4aW9zIHNvIHRoYXRcbiAqIGFsbCBvdXRnb2luZyBIVFRQIHJlcXVlc3RzIGF1dG9tYXRpY2FsbHkgaGF2ZSBpdCBhdHRhY2hlZC4gVGhpcyBpcyBqdXN0XG4gKiBhIHNpbXBsZSBjb252ZW5pZW5jZSBzbyB3ZSBkb24ndCBoYXZlIHRvIGF0dGFjaCBldmVyeSB0b2tlbiBtYW51YWxseS5cbiAqL1xuXG5jb25zdCB0b2tlbiA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpO1xuXG5pZiAodG9rZW4pIHtcbiAgICB3aW5kb3cuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtQ1NSRi1UT0tFTiddID0gdG9rZW4uY29udGVudDtcbn0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcignQ1NSRiB0b2tlbiBub3QgZm91bmQ6IGh0dHBzOi8vbGFyYXZlbC5jb20vZG9jcy9jc3JmI2NzcmYteC1jc3JmLXRva2VuJyk7XG59XG5cbi8qKlxuICogRWNobyBleHBvc2VzIGFuIGV4cHJlc3NpdmUgQVBJIGZvciBzdWJzY3JpYmluZyB0byBjaGFubmVscyBhbmQgbGlzdGVuaW5nXG4gKiBmb3IgZXZlbnRzIHRoYXQgYXJlIGJyb2FkY2FzdCBieSBMYXJhdmVsLiBFY2hvIGFuZCBldmVudCBicm9hZGNhc3RpbmdcbiAqIGFsbG93cyB5b3VyIHRlYW0gdG8gZWFzaWx5IGJ1aWxkIHJvYnVzdCByZWFsLXRpbWUgd2ViIGFwcGxpY2F0aW9ucy5cbiAqL1xuXG4vLyBpbXBvcnQgRWNobyBmcm9tICdsYXJhdmVsLWVjaG8nXG5cbi8vIHdpbmRvdy5QdXNoZXIgPSByZXF1aXJlKCdwdXNoZXItanMnKTtcblxuLy8gd2luZG93LkVjaG8gPSBuZXcgRWNobyh7XG4vLyAgICAgYnJvYWRjYXN0ZXI6ICdwdXNoZXInLFxuLy8gICAgIGtleTogcHJvY2Vzcy5lbnYuTUlYX1BVU0hFUl9BUFBfS0VZXG4vLyAgICAgY2x1c3RlcjogcHJvY2Vzcy5lbnYuTUlYX1BVU0hFUl9BUFBfQ0xVU1RFUixcbi8vICAgICBlbmNyeXB0ZWQ6IHRydWVcbi8vIH0pO1xuIiwiLyoqXG4gKiBBbGxvd3MgeW91IHRvIGFkZCBkYXRhLW1ldGhvZD1cIk1FVEhPRCB0byBsaW5rcyB0byBhdXRvbWF0aWNhbGx5IGluamVjdCBhIGZvcm1cbiAqIHdpdGggdGhlIG1ldGhvZCBvbiBjbGlja1xuICpcbiAqIEV4YW1wbGU6IDxhIGhyZWY9XCJ7e3JvdXRlKCdjdXN0b21lcnMuZGVzdHJveScsICRjdXN0b21lci0+aWQpfX1cIlxuICogZGF0YS1tZXRob2Q9XCJkZWxldGVcIiBuYW1lPVwiZGVsZXRlX2l0ZW1cIj5EZWxldGU8L2E+XG4gKlxuICogSW5qZWN0cyBhIGZvcm0gd2l0aCB0aGF0J3MgZmlyZWQgb24gY2xpY2sgb2YgdGhlIGxpbmsgd2l0aCBhIERFTEVURSByZXF1ZXN0LlxuICogR29vZCBiZWNhdXNlIHlvdSBkb24ndCBoYXZlIHRvIGRpcnR5IHlvdXIgSFRNTCB3aXRoIGRlbGV0ZSBmb3JtcyBldmVyeXdoZXJlLlxuICovXG5mdW5jdGlvbiBhZGREZWxldGVGb3JtcygpIHtcbiAgICAkKCdbZGF0YS1tZXRob2RdJykuYXBwZW5kKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEkKHRoaXMpLmZpbmQoJ2Zvcm0nKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcXG48Zm9ybSBhY3Rpb249J1wiICsgJCh0aGlzKS5hdHRyKCdocmVmJykgKyBcIicgbWV0aG9kPSdQT1NUJyBuYW1lPSdkZWxldGVfaXRlbScgc3R5bGU9J2Rpc3BsYXk6bm9uZSc+XFxuXCIgK1xuICAgICAgICAgICAgICAgIFwiPGlucHV0IHR5cGU9J2hpZGRlbicgbmFtZT0nX21ldGhvZCcgdmFsdWU9J1wiICsgJCh0aGlzKS5hdHRyKCdkYXRhLW1ldGhvZCcpICsgXCInPlxcblwiICtcbiAgICAgICAgICAgICAgICBcIjxpbnB1dCB0eXBlPSdoaWRkZW4nIG5hbWU9J190b2tlbicgdmFsdWU9J1wiICsgJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKSArIFwiJz5cXG5cIiArXG4gICAgICAgICAgICAgICAgJzwvZm9ybT5cXG4nO1xuICAgICAgICB9IGVsc2UgeyByZXR1cm4gJycgfVxuICAgIH0pXG4gICAgICAgIC5hdHRyKCdocmVmJywgJyMnKVxuICAgICAgICAuYXR0cignc3R5bGUnLCAnY3Vyc29yOnBvaW50ZXI7JylcbiAgICAgICAgLmF0dHIoJ29uY2xpY2snLCAnJCh0aGlzKS5maW5kKFwiZm9ybVwiKS5zdWJtaXQoKTsnKTtcbn1cblxuLyoqXG4gKiBQbGFjZSBhbnkgalF1ZXJ5L2hlbHBlciBwbHVnaW5zIGluIGhlcmUuXG4gKi9cbiQoZnVuY3Rpb24gKCkge1xuICAgIC8qKlxuICAgICAqIEFkZCB0aGUgZGF0YS1tZXRob2Q9XCJkZWxldGVcIiBmb3JtcyB0byBhbGwgZGVsZXRlIGxpbmtzXG4gICAgICovXG4gICAgYWRkRGVsZXRlRm9ybXMoKTtcblxuICAgIC8qKlxuICAgICAqIERpc2FibGUgYWxsIHN1Ym1pdCBidXR0b25zIG9uY2UgY2xpY2tlZFxuICAgICAqL1xuICAgICQoJ2Zvcm0nKS5zdWJtaXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAkKHRoaXMpLmZpbmQoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmljIGNvbmZpcm0gZm9ybSBkZWxldGUgdXNpbmcgU3dlZXQgQWxlcnRcbiAgICAgKi9cbiAgICAkKCdib2R5Jykub24oJ3N1Ym1pdCcsICdmb3JtW25hbWU9ZGVsZXRlX2l0ZW1dJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzO1xuICAgICAgICBjb25zdCBsaW5rID0gJCgnYVtkYXRhLW1ldGhvZD1cImRlbGV0ZVwiXScpO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAobGluay5hdHRyKCdkYXRhLXRyYW5zLWJ1dHRvbi1jYW5jZWwnKSkgPyBsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtYnV0dG9uLWNhbmNlbCcpIDogJ0NhbmNlbCc7XG4gICAgICAgIGNvbnN0IGNvbmZpcm0gPSAobGluay5hdHRyKCdkYXRhLXRyYW5zLWJ1dHRvbi1jb25maXJtJykpID8gbGluay5hdHRyKCdkYXRhLXRyYW5zLWJ1dHRvbi1jb25maXJtJykgOiAnWWVzLCBkZWxldGUnO1xuICAgICAgICBjb25zdCB0aXRsZSA9IChsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtdGl0bGUnKSkgPyBsaW5rLmF0dHIoJ2RhdGEtdHJhbnMtdGl0bGUnKSA6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nO1xuXG4gICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGNvbmZpcm0sXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBjYW5jZWwsXG4gICAgICAgICAgICB0eXBlOiAnd2FybmluZydcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICByZXN1bHQudmFsdWUgJiYgZm9ybS5zdWJtaXQoKTtcbiAgICAgICAgfSk7XG4gICAgfSkub24oJ2NsaWNrJywgJ2FbbmFtZT1jb25maXJtX2l0ZW1dJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdlbmVyaWMgJ2FyZSB5b3Ugc3VyZScgY29uZmlybSBib3hcbiAgICAgICAgICovXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBsaW5rID0gJCh0aGlzKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSAobGluay5hdHRyKCdkYXRhLXRyYW5zLXRpdGxlJykpID8gbGluay5hdHRyKCdkYXRhLXRyYW5zLXRpdGxlJykgOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRvIHRoaXM/JztcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY2FuY2VsJykpID8gbGluay5hdHRyKCdkYXRhLXRyYW5zLWJ1dHRvbi1jYW5jZWwnKSA6ICdDYW5jZWwnO1xuICAgICAgICBjb25zdCBjb25maXJtID0gKGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY29uZmlybScpKSA/IGxpbmsuYXR0cignZGF0YS10cmFucy1idXR0b24tY29uZmlybScpIDogJ0NvbnRpbnVlJztcblxuICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsLFxuICAgICAgICAgICAgdHlwZTogJ2luZm8nXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgcmVzdWx0LnZhbHVlICYmIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24obGluay5hdHRyKCdocmVmJykpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuXG4gLyogaGlkZSBsb2FkZXIgaWYgM3NlYyBvciBtb3JlIHRpbWUgKi9cbiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAkKFwiLmxvYWRlci1sb2dvXCIpLmZhZGVPdXQoKTtcbn0sIDMwMDApO1xuXG4vKiBsZWZ0IHNpZGViYXIgb3BlbiAqL1xuJCgnI2xlZnQtbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ3NpZGViYXItbGVmdC1jbG9zZScpO1xufSk7XG4kKCcuc2lkZWJhci1sZWZ0ICsgZGl2LmJhY2tkcm9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnc2lkZWJhci1sZWZ0LWNsb3NlJyk7XG59KTtcblxuXG5cblxuXG5cbiAgICAvKiBsZWZ0IHNpZGViYXIgYWNjb3JkaW9uIG1lbnUgKi9cbiAgICAvKiB1cmwgIG5hdmlnYXRpb24gYWN0aXZlICovXG4gICAgdmFyIHVybCA9IHdpbmRvdy5sb2NhdGlvbjtcblxuICAgIGZ1bmN0aW9uIG1lbnVpdGVtcygpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSAkKCcuc2lkZWJhciAubmF2IC5uYXYtaXRlbSBhJykuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhyZWYgPT0gdXJsO1xuICAgICAgICAgICAgY29uc29sZS5sb2codXJsKVxuICAgICAgICB9KS5hZGRDbGFzcygnYWN0aXZlJykucGFyZW50KFwibGlcIikuYWRkQ2xhc3MoJ2FjdGl2ZScpLmNsb3Nlc3QoJy5uYXYnKS5zbGlkZURvd24oKS5hZGRDbGFzcygnaW4nKS5wcmV2KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpLnBhcmVudCgpLmFkZENsYXNzKCdzaG93JykuY2xvc2VzdCgnLm5hdicpLnNsaWRlRG93bigpLmFkZENsYXNzKCdpbicpLnBhcmVudCgpLmFkZENsYXNzKCdzaG93Jyk7XG4gICAgfVxuICAgIG1lbnVpdGVtcygpO1xuXG4gICAgJCgnLnNpZGViYXIgLm5hdiAubmF2LWl0ZW0gLmRyb3Bkd293bi10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSAhPSB0cnVlKSB7XG4gICAgICAgICAgICAkKCcuc2lkZWJhciAubmF2IC5uYXYtaXRlbSAuZHJvcGR3b3duLXRvZ2dsZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5uZXh0KCkuc2xpZGVVcCgpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJykubmV4dCgpLnNsaWRlRG93bigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJykubmV4dCgpLnNsaWRlVXAoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICBcblxuXG5cbiAgICAvKiBzaWRlYmFyIGhpZGUgYmVsb3cgMTEwMHB4IHJlc29sdXRpb24gICovXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDExMDApIHtcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdzaWRlYmFyLWxlZnQtY2xvc2UnKTtcbiAgICB9XG5cblxuICAgICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLyogaGlkZSBsb2FkZXIgICovXG4gICAgICAgICQoJy5sb2FkZXInKS5oaWRlKCk7XG4gICAgICAgICQoJy5hbmltYXRlamFjaycpLmFkZENsYXNzKCdqYWNrSW5UaGVCb3gnKTtcbiAgICAgICAgJCgnLndyYXBwZXInKS5jc3MoJ3BhZGRpbmctYm90dG9tJywgJCgnYm9keSA+IGZvb3RlcicpLm91dGVySGVpZ2h0KCkgKTtcbiAgICAgICAgJCgnYm9keSA+IGZvb3RlcicpLmNzcygnbWFyZ2luLXRvcCcsIC0oICQoJ2JvZHkgPiBmb290ZXInKS5vdXRlckhlaWdodCgpICkpO1xuICAgIH0pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==