import { createRequire as topLevelCreateRequire } from 'module';
const require = topLevelCreateRequire(import.meta.url);
import { fileURLToPath as topLevelFileUrlToPath, URL as topLevelURL } from "url"
const __dirname = topLevelFileUrlToPath(new topLevelURL(".", import.meta.url))
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/memoirist@0.1.4/node_modules/memoirist/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/.pnpm/memoirist@0.1.4/node_modules/memoirist/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true }), function(e2, t2) {
      for (var r2 in t2)
        Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
    }(exports, { Memoirist: function() {
      return a;
    }, default: function() {
      return n;
    } });
    var e = /* @__PURE__ */ __name((e2, t2) => ({ part: e2, store: null, inert: void 0 !== t2 ? new Map(t2.map((e3) => [e3.part.charCodeAt(0), e3])) : null, params: null, wildcardStore: null }), "e");
    var t = /* @__PURE__ */ __name((e2, t2) => ({ ...e2, part: t2 }), "t");
    var r = /* @__PURE__ */ __name((e2) => ({ paramName: e2, store: null, inert: null }), "r");
    var a = class _a {
      static {
        __name(this, "a");
      }
      root = {};
      history = [];
      static regex = { static: /:.+?(?=\/|$)/, params: /:.+?(?=\/|$)/g };
      add(l2, n2, i) {
        let s;
        if ("string" != typeof n2)
          throw TypeError("Route path must be a string");
        "" === n2 ? n2 = "/" : "/" !== n2[0] && (n2 = `/${n2}`), this.history.push([l2, n2, i]);
        let o = "*" === n2[n2.length - 1];
        o && (n2 = n2.slice(0, -1));
        let u = n2.split(_a.regex.static), p = n2.match(_a.regex.params) || [];
        "" === u[u.length - 1] && u.pop(), s = this.root[l2] ? this.root[l2] : this.root[l2] = e("/");
        let c = 0;
        for (let a2 = 0; a2 < u.length; ++a2) {
          let l3 = u[a2];
          if (a2 > 0) {
            let t2 = p[c++].slice(1);
            if (null === s.params)
              s.params = r(t2);
            else if (s.params.paramName !== t2)
              throw Error(`Cannot create route "${n2}" with parameter "${t2}" because a route already exists with a different parameter name ("${s.params.paramName}") in the same location`);
            let a3 = s.params;
            if (null === a3.inert) {
              s = a3.inert = e(l3);
              continue;
            }
            s = a3.inert;
          }
          for (let r2 = 0; ; ) {
            if (r2 === l3.length) {
              if (r2 < s.part.length) {
                let a3 = t(s, s.part.slice(r2));
                Object.assign(s, e(l3, [a3]));
              }
              break;
            }
            if (r2 === s.part.length) {
              if (null === s.inert)
                s.inert = /* @__PURE__ */ new Map();
              else if (s.inert.has(l3.charCodeAt(r2))) {
                s = s.inert.get(l3.charCodeAt(r2)), l3 = l3.slice(r2), r2 = 0;
                continue;
              }
              let t2 = e(l3.slice(r2));
              s.inert.set(l3.charCodeAt(r2), t2), s = t2;
              break;
            }
            if (l3[r2] !== s.part[r2]) {
              let a3 = t(s, s.part.slice(r2)), n3 = e(l3.slice(r2));
              Object.assign(s, e(s.part.slice(0, r2), [a3, n3])), s = n3;
              break;
            }
            ++r2;
          }
        }
        if (c < p.length) {
          let e2 = p[c], t2 = e2.slice(1);
          if (null === s.params)
            s.params = r(t2);
          else if (s.params.paramName !== t2)
            throw Error(`Cannot create route "${n2}" with parameter "${t2}" because a route already exists with a different parameter name ("${s.params.paramName}") in the same location`);
          return null === s.params.store && (s.params.store = i), s.params.store;
        }
        return o ? (null === s.wildcardStore && (s.wildcardStore = i), s.wildcardStore) : (null === s.store && (s.store = i), s.store);
      }
      find(e2, t2) {
        let r2 = this.root[e2];
        return r2 ? l(t2, t2.length, r2, 0) : null;
      }
    };
    var l = /* @__PURE__ */ __name((e2, t2, r2, a2) => {
      let n2 = r2?.part, i = a2 + n2.length;
      if (n2.length > 1) {
        if (i > t2)
          return null;
        if (n2.length < 15) {
          for (let t3 = 1, r3 = a2 + 1; t3 < n2.length; ++t3, ++r3)
            if (n2.charCodeAt(t3) !== e2.charCodeAt(r3))
              return null;
        } else if (e2.substring(a2, i) !== n2)
          return null;
      }
      if (i === t2)
        return null !== r2.store ? { store: r2.store, params: {} } : null !== r2.wildcardStore ? { store: r2.wildcardStore, params: { "*": "" } } : null;
      if (null !== r2.inert) {
        let a3 = r2.inert.get(e2.charCodeAt(i));
        if (void 0 !== a3) {
          let r3 = l(e2, t2, a3, i);
          if (null !== r3)
            return r3;
        }
      }
      if (null !== r2.params) {
        let a3 = r2.params, n3 = e2.indexOf("/", i);
        if (n3 !== i) {
          if (-1 === n3 || n3 >= t2) {
            if (null !== a3.store) {
              let r3 = {};
              return r3[a3.paramName] = e2.substring(i, t2), { store: a3.store, params: r3 };
            }
          } else if (null !== a3.inert) {
            let r3 = l(e2, t2, a3.inert, n3);
            if (null !== r3)
              return r3.params[a3.paramName] = e2.substring(i, n3), r3;
          }
        }
      }
      return null !== r2.wildcardStore ? { store: r2.wildcardStore, params: { "*": e2.substring(i, t2) } } : null;
    }, "l");
    var n = a;
  }
});

// node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/.pnpm/eventemitter3@5.0.1/node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    __name(Events, "Events");
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__)
        prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    __name(EE, "EE");
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt])
        emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn)
        emitter._events[evt].push(listener);
      else
        emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    __name(addListener, "addListener");
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0)
        emitter._events = new Events();
      else
        delete emitter._events[evt];
    }
    __name(clearEvent, "clearEvent");
    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    __name(EventEmitter, "EventEmitter");
    EventEmitter.prototype.eventNames = /* @__PURE__ */ __name(function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0)
        return names;
      for (name in events = this._events) {
        if (has.call(events, name))
          names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    }, "eventNames");
    EventEmitter.prototype.listeners = /* @__PURE__ */ __name(function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers)
        return [];
      if (handlers.fn)
        return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    }, "listeners");
    EventEmitter.prototype.listenerCount = /* @__PURE__ */ __name(function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners)
        return 0;
      if (listeners.fn)
        return 1;
      return listeners.length;
    }, "listenerCount");
    EventEmitter.prototype.emit = /* @__PURE__ */ __name(function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once)
          this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once)
            this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args)
                for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    }, "emit");
    EventEmitter.prototype.on = /* @__PURE__ */ __name(function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    }, "on");
    EventEmitter.prototype.once = /* @__PURE__ */ __name(function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    }, "once");
    EventEmitter.prototype.removeListener = /* @__PURE__ */ __name(function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }
        if (events.length)
          this._events[evt] = events.length === 1 ? events[0] : events;
        else
          clearEvent(this, evt);
      }
      return this;
    }, "removeListener");
    EventEmitter.prototype.removeAllListeners = /* @__PURE__ */ __name(function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt])
          clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    }, "removeAllListeners");
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prefixed = prefix;
    EventEmitter.EventEmitter = EventEmitter;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter;
    }
  }
});

// node_modules/.pnpm/elysia@0.8.8_@sinclair+typebox@0.32.5_typescript@5.3.3/node_modules/elysia/dist/cjs/trace.js
var require_trace = __commonJS({
  "node_modules/.pnpm/elysia@0.8.8_@sinclair+typebox@0.32.5_typescript@5.3.3/node_modules/elysia/dist/cjs/trace.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createTraceListener = void 0;
    var resolver = /* @__PURE__ */ __name(() => {
      let resolve;
      const promise = new Promise((r) => {
        resolve = r;
      });
      return [promise, resolve];
    }, "resolver");
    var createSignal = /* @__PURE__ */ __name(() => {
      const [start, resolveStart] = resolver();
      const [end, resolveEnd] = resolver();
      const children = [];
      const resolvers = [];
      return {
        signal: start,
        consume: (trace) => {
          switch (trace.type) {
            case "begin":
              if (trace.unit && children.length === 0)
                for (let i = 0; i < trace.unit; i++) {
                  const [start2, resolveStart2] = resolver();
                  const [end2, resolveEnd2] = resolver();
                  children.push(start2);
                  resolvers.push([
                    (trace2) => {
                      resolveStart2({
                        children: [],
                        end: end2,
                        name: trace2.name ?? "",
                        skip: false,
                        time: trace2.time
                      });
                    },
                    (time) => {
                      resolveEnd2(time);
                    }
                  ]);
                }
              resolveStart({
                children,
                end,
                name: trace.name ?? "",
                skip: false,
                time: trace.time
              });
              break;
            case "end":
              resolveEnd(trace.time);
              break;
          }
        },
        consumeChild(trace) {
          switch (trace.type) {
            case "begin":
              if (!resolvers[0])
                return;
              const [resolveStart2] = resolvers[0];
              resolveStart2({
                children: [],
                end,
                name: trace.name ?? "",
                skip: false,
                time: trace.time
              });
              break;
            case "end":
              const child = resolvers.shift();
              if (!child)
                return;
              child[1](trace.time);
          }
        },
        resolve() {
          resolveStart({
            children: [],
            end: new Promise((resolve) => resolve(0)),
            name: "",
            skip: true,
            time: 0
          });
          for (const [resolveStart2, resolveEnd2] of resolvers) {
            resolveStart2({
              children: [],
              end: new Promise((resolve) => resolve(0)),
              name: "",
              skip: true,
              time: 0
            });
            resolveEnd2(0);
          }
          resolveEnd(0);
        }
      };
    }, "createSignal");
    var createTraceListener = /* @__PURE__ */ __name((getReporter, totalListener, handler) => {
      return /* @__PURE__ */ __name(async function trace(trace) {
        if (trace.event !== "request" || trace.type !== "begin")
          return;
        const id = trace.id;
        const reporter = getReporter();
        const request2 = createSignal();
        const parse = createSignal();
        const transform = createSignal();
        const beforeHandle = createSignal();
        const handle = createSignal();
        const afterHandle = createSignal();
        const error = createSignal();
        const response2 = createSignal();
        request2.consume(trace);
        const reducer = /* @__PURE__ */ __name((event) => {
          if (event.id === id)
            switch (event.event) {
              case "request":
                request2.consume(event);
                break;
              case "request.unit":
                request2.consumeChild(event);
                break;
              case "parse":
                parse.consume(event);
                break;
              case "parse.unit":
                parse.consumeChild(event);
                break;
              case "transform":
                transform.consume(event);
                break;
              case "transform.unit":
                transform.consumeChild(event);
                break;
              case "beforeHandle":
                beforeHandle.consume(event);
                break;
              case "beforeHandle.unit":
                beforeHandle.consumeChild(event);
                break;
              case "handle":
                handle.consume(event);
                break;
              case "afterHandle":
                afterHandle.consume(event);
                break;
              case "afterHandle.unit":
                afterHandle.consumeChild(event);
                break;
              case "error":
                error.consume(event);
                break;
              case "error.unit":
                error.consumeChild(event);
                break;
              case "response":
                if (event.type === "begin") {
                  request2.resolve();
                  parse.resolve();
                  transform.resolve();
                  beforeHandle.resolve();
                  handle.resolve();
                  afterHandle.resolve();
                  error.resolve();
                } else
                  reporter.off("event", reducer);
                response2.consume(event);
                break;
              case "response.unit":
                response2.consumeChild(event);
                break;
              case "exit":
                request2.resolve();
                parse.resolve();
                transform.resolve();
                beforeHandle.resolve();
                handle.resolve();
                afterHandle.resolve();
                error.resolve();
                break;
            }
        }, "reducer");
        reporter.on("event", reducer);
        await handler({
          id,
          // @ts-ignore
          context: trace.ctx,
          // @ts-ignore
          set: trace.ctx?.set,
          // @ts-ignore
          store: trace.ctx?.store,
          time: trace.time,
          request: request2.signal,
          parse: parse.signal,
          transform: transform.signal,
          beforeHandle: beforeHandle.signal,
          handle: handle.signal,
          afterHandle: afterHandle.signal,
          error: error.signal,
          response: response2.signal
        });
        reporter.emit(`res${id}.${totalListener}`, void 0);
      }, "trace");
    }, "createTraceListener");
    exports.createTraceListener = createTraceListener;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/guard/guard.js
var require_guard = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/guard/guard.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IsValueType = exports.IsSymbol = exports.IsFunction = exports.IsString = exports.IsBigInt = exports.IsInteger = exports.IsNumber = exports.IsBoolean = exports.IsNull = exports.IsUndefined = exports.IsArray = exports.IsObject = exports.IsPlainObject = exports.HasPropertyKey = exports.IsDate = exports.IsUint8Array = exports.IsPromise = exports.IsTypedArray = exports.IsIterator = exports.IsAsyncIterator = void 0;
    function IsAsyncIterator(value) {
      return IsObject(value) && Symbol.asyncIterator in value;
    }
    __name(IsAsyncIterator, "IsAsyncIterator");
    exports.IsAsyncIterator = IsAsyncIterator;
    function IsIterator(value) {
      return IsObject(value) && Symbol.iterator in value;
    }
    __name(IsIterator, "IsIterator");
    exports.IsIterator = IsIterator;
    function IsTypedArray(value) {
      return ArrayBuffer.isView(value);
    }
    __name(IsTypedArray, "IsTypedArray");
    exports.IsTypedArray = IsTypedArray;
    function IsPromise(value) {
      return value instanceof Promise;
    }
    __name(IsPromise, "IsPromise");
    exports.IsPromise = IsPromise;
    function IsUint8Array(value) {
      return value instanceof Uint8Array;
    }
    __name(IsUint8Array, "IsUint8Array");
    exports.IsUint8Array = IsUint8Array;
    function IsDate(value) {
      return value instanceof Date && Number.isFinite(value.getTime());
    }
    __name(IsDate, "IsDate");
    exports.IsDate = IsDate;
    function HasPropertyKey(value, key) {
      return key in value;
    }
    __name(HasPropertyKey, "HasPropertyKey");
    exports.HasPropertyKey = HasPropertyKey;
    function IsPlainObject(value) {
      return IsObject(value) && IsFunction(value.constructor) && value.constructor.name === "Object";
    }
    __name(IsPlainObject, "IsPlainObject");
    exports.IsPlainObject = IsPlainObject;
    function IsObject(value) {
      return value !== null && typeof value === "object";
    }
    __name(IsObject, "IsObject");
    exports.IsObject = IsObject;
    function IsArray(value) {
      return Array.isArray(value) && !ArrayBuffer.isView(value);
    }
    __name(IsArray, "IsArray");
    exports.IsArray = IsArray;
    function IsUndefined(value) {
      return value === void 0;
    }
    __name(IsUndefined, "IsUndefined");
    exports.IsUndefined = IsUndefined;
    function IsNull(value) {
      return value === null;
    }
    __name(IsNull, "IsNull");
    exports.IsNull = IsNull;
    function IsBoolean(value) {
      return typeof value === "boolean";
    }
    __name(IsBoolean, "IsBoolean");
    exports.IsBoolean = IsBoolean;
    function IsNumber(value) {
      return typeof value === "number";
    }
    __name(IsNumber, "IsNumber");
    exports.IsNumber = IsNumber;
    function IsInteger(value) {
      return IsNumber(value) && Number.isInteger(value);
    }
    __name(IsInteger, "IsInteger");
    exports.IsInteger = IsInteger;
    function IsBigInt(value) {
      return typeof value === "bigint";
    }
    __name(IsBigInt, "IsBigInt");
    exports.IsBigInt = IsBigInt;
    function IsString(value) {
      return typeof value === "string";
    }
    __name(IsString, "IsString");
    exports.IsString = IsString;
    function IsFunction(value) {
      return typeof value === "function";
    }
    __name(IsFunction, "IsFunction");
    exports.IsFunction = IsFunction;
    function IsSymbol(value) {
      return typeof value === "symbol";
    }
    __name(IsSymbol, "IsSymbol");
    exports.IsSymbol = IsSymbol;
    function IsValueType(value) {
      return IsBigInt(value) || IsBoolean(value) || IsNull(value) || IsNumber(value) || IsString(value) || IsSymbol(value) || IsUndefined(value);
    }
    __name(IsValueType, "IsValueType");
    exports.IsValueType = IsValueType;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/guard/index.js
var require_guard2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/guard/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_guard(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/system/policy.js
var require_policy = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/system/policy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeSystemPolicy = void 0;
    var index_1 = require_guard2();
    var TypeSystemPolicy;
    (function(TypeSystemPolicy2) {
      TypeSystemPolicy2.ExactOptionalPropertyTypes = false;
      TypeSystemPolicy2.AllowArrayObject = false;
      TypeSystemPolicy2.AllowNaN = false;
      TypeSystemPolicy2.AllowNullVoid = false;
      function IsExactOptionalProperty(value, key) {
        return TypeSystemPolicy2.ExactOptionalPropertyTypes ? key in value : value[key] !== void 0;
      }
      __name(IsExactOptionalProperty, "IsExactOptionalProperty");
      TypeSystemPolicy2.IsExactOptionalProperty = IsExactOptionalProperty;
      function IsObjectLike(value) {
        const isObject = (0, index_1.IsObject)(value);
        return TypeSystemPolicy2.AllowArrayObject ? isObject : isObject && !(0, index_1.IsArray)(value);
      }
      __name(IsObjectLike, "IsObjectLike");
      TypeSystemPolicy2.IsObjectLike = IsObjectLike;
      function IsRecordLike(value) {
        return IsObjectLike(value) && !(value instanceof Date) && !(value instanceof Uint8Array);
      }
      __name(IsRecordLike, "IsRecordLike");
      TypeSystemPolicy2.IsRecordLike = IsRecordLike;
      function IsNumberLike(value) {
        const isNumber = (0, index_1.IsNumber)(value);
        return TypeSystemPolicy2.AllowNaN ? isNumber : isNumber && Number.isFinite(value);
      }
      __name(IsNumberLike, "IsNumberLike");
      TypeSystemPolicy2.IsNumberLike = IsNumberLike;
      function IsVoidLike(value) {
        const isUndefined = (0, index_1.IsUndefined)(value);
        return TypeSystemPolicy2.AllowNullVoid ? isUndefined || value === null : isUndefined;
      }
      __name(IsVoidLike, "IsVoidLike");
      TypeSystemPolicy2.IsVoidLike = IsVoidLike;
    })(TypeSystemPolicy || (exports.TypeSystemPolicy = TypeSystemPolicy = {}));
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/registry/format.js
var require_format = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/registry/format.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Get = exports.Set = exports.Has = exports.Delete = exports.Clear = exports.Entries = void 0;
    var map = /* @__PURE__ */ new Map();
    function Entries() {
      return new Map(map);
    }
    __name(Entries, "Entries");
    exports.Entries = Entries;
    function Clear() {
      return map.clear();
    }
    __name(Clear, "Clear");
    exports.Clear = Clear;
    function Delete(format) {
      return map.delete(format);
    }
    __name(Delete, "Delete");
    exports.Delete = Delete;
    function Has(format) {
      return map.has(format);
    }
    __name(Has, "Has");
    exports.Has = Has;
    function Set2(format, func) {
      map.set(format, func);
    }
    __name(Set2, "Set");
    exports.Set = Set2;
    function Get(format) {
      return map.get(format);
    }
    __name(Get, "Get");
    exports.Get = Get;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/registry/type.js
var require_type = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/registry/type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Get = exports.Set = exports.Has = exports.Delete = exports.Clear = exports.Entries = void 0;
    var map = /* @__PURE__ */ new Map();
    function Entries() {
      return new Map(map);
    }
    __name(Entries, "Entries");
    exports.Entries = Entries;
    function Clear() {
      return map.clear();
    }
    __name(Clear, "Clear");
    exports.Clear = Clear;
    function Delete(kind) {
      return map.delete(kind);
    }
    __name(Delete, "Delete");
    exports.Delete = Delete;
    function Has(kind) {
      return map.has(kind);
    }
    __name(Has, "Has");
    exports.Has = Has;
    function Set2(kind, func) {
      map.set(kind, func);
    }
    __name(Set2, "Set");
    exports.Set = Set2;
    function Get(kind) {
      return map.get(kind);
    }
    __name(Get, "Get");
    exports.Get = Get;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/registry/index.js
var require_registry = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/registry/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeRegistry = exports.FormatRegistry = void 0;
    exports.FormatRegistry = require_format();
    exports.TypeRegistry = require_type();
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/symbols/symbols.js
var require_symbols = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/symbols/symbols.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Kind = exports.Hint = exports.OptionalKind = exports.ReadonlyKind = exports.TransformKind = void 0;
    exports.TransformKind = Symbol.for("TypeBox.Transform");
    exports.ReadonlyKind = Symbol.for("TypeBox.Readonly");
    exports.OptionalKind = Symbol.for("TypeBox.Optional");
    exports.Hint = Symbol.for("TypeBox.Hint");
    exports.Kind = Symbol.for("TypeBox.Kind");
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/symbols/index.js
var require_symbols2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/symbols/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_symbols(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/unsafe/unsafe.js
var require_unsafe = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/unsafe/unsafe.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Unsafe = void 0;
    var index_1 = require_symbols2();
    function Unsafe(options = {}) {
      return {
        ...options,
        [index_1.Kind]: options[index_1.Kind] ?? "Unsafe"
      };
    }
    __name(Unsafe, "Unsafe");
    exports.Unsafe = Unsafe;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/unsafe/index.js
var require_unsafe2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/unsafe/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_unsafe(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/error/error.js
var require_error = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/error/error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeBoxError = void 0;
    var TypeBoxError = class extends Error {
      static {
        __name(this, "TypeBoxError");
      }
      constructor(message) {
        super(message);
      }
    };
    exports.TypeBoxError = TypeBoxError;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/error/index.js
var require_error2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/error/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_error(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/system/system.js
var require_system = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/system/system.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeSystem = exports.TypeSystemDuplicateFormat = exports.TypeSystemDuplicateTypeKind = void 0;
    var index_1 = require_registry();
    var index_2 = require_unsafe2();
    var index_3 = require_symbols2();
    var index_4 = require_error2();
    var TypeSystemDuplicateTypeKind = class extends index_4.TypeBoxError {
      static {
        __name(this, "TypeSystemDuplicateTypeKind");
      }
      constructor(kind) {
        super(`Duplicate type kind '${kind}' detected`);
      }
    };
    exports.TypeSystemDuplicateTypeKind = TypeSystemDuplicateTypeKind;
    var TypeSystemDuplicateFormat = class extends index_4.TypeBoxError {
      static {
        __name(this, "TypeSystemDuplicateFormat");
      }
      constructor(kind) {
        super(`Duplicate string format '${kind}' detected`);
      }
    };
    exports.TypeSystemDuplicateFormat = TypeSystemDuplicateFormat;
    var TypeSystem;
    (function(TypeSystem2) {
      function Type(kind, check) {
        if (index_1.TypeRegistry.Has(kind))
          throw new TypeSystemDuplicateTypeKind(kind);
        index_1.TypeRegistry.Set(kind, check);
        return (options = {}) => (0, index_2.Unsafe)({ ...options, [index_3.Kind]: kind });
      }
      __name(Type, "Type");
      TypeSystem2.Type = Type;
      function Format(format, check) {
        if (index_1.FormatRegistry.Has(format))
          throw new TypeSystemDuplicateFormat(format);
        index_1.FormatRegistry.Set(format, check);
        return format;
      }
      __name(Format, "Format");
      TypeSystem2.Format = Format;
    })(TypeSystem || (exports.TypeSystem = TypeSystem = {}));
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/system/index.js
var require_system2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/system/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeSystemDuplicateTypeKind = exports.TypeSystemDuplicateFormat = exports.TypeSystem = exports.TypeSystemPolicy = void 0;
    var policy_1 = require_policy();
    Object.defineProperty(exports, "TypeSystemPolicy", { enumerable: true, get: function() {
      return policy_1.TypeSystemPolicy;
    } });
    var system_1 = require_system();
    Object.defineProperty(exports, "TypeSystem", { enumerable: true, get: function() {
      return system_1.TypeSystem;
    } });
    Object.defineProperty(exports, "TypeSystemDuplicateFormat", { enumerable: true, get: function() {
      return system_1.TypeSystemDuplicateFormat;
    } });
    Object.defineProperty(exports, "TypeSystemDuplicateTypeKind", { enumerable: true, get: function() {
      return system_1.TypeSystemDuplicateTypeKind;
    } });
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/mapped/mapped-key.js
var require_mapped_key = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/mapped/mapped-key.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MappedKey = void 0;
    var index_1 = require_symbols2();
    function MappedKey(T) {
      return {
        [index_1.Kind]: "MappedKey",
        keys: T
      };
    }
    __name(MappedKey, "MappedKey");
    exports.MappedKey = MappedKey;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/mapped/mapped-result.js
var require_mapped_result = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/mapped/mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MappedResult = void 0;
    var index_1 = require_symbols2();
    function MappedResult(properties) {
      return {
        [index_1.Kind]: "MappedResult",
        properties
      };
    }
    __name(MappedResult, "MappedResult");
    exports.MappedResult = MappedResult;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/guard/value.js
var require_value = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/guard/value.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IsUndefined = exports.IsUint8Array = exports.IsSymbol = exports.IsString = exports.IsRegExp = exports.IsObject = exports.IsNumber = exports.IsNull = exports.IsIterator = exports.IsFunction = exports.IsDate = exports.IsBoolean = exports.IsBigInt = exports.IsArray = exports.IsAsyncIterator = void 0;
    function IsAsyncIterator(value) {
      return IsObject(value) && !IsArray(value) && !IsUint8Array(value) && Symbol.asyncIterator in value;
    }
    __name(IsAsyncIterator, "IsAsyncIterator");
    exports.IsAsyncIterator = IsAsyncIterator;
    function IsArray(value) {
      return Array.isArray(value);
    }
    __name(IsArray, "IsArray");
    exports.IsArray = IsArray;
    function IsBigInt(value) {
      return typeof value === "bigint";
    }
    __name(IsBigInt, "IsBigInt");
    exports.IsBigInt = IsBigInt;
    function IsBoolean(value) {
      return typeof value === "boolean";
    }
    __name(IsBoolean, "IsBoolean");
    exports.IsBoolean = IsBoolean;
    function IsDate(value) {
      return value instanceof globalThis.Date;
    }
    __name(IsDate, "IsDate");
    exports.IsDate = IsDate;
    function IsFunction(value) {
      return typeof value === "function";
    }
    __name(IsFunction, "IsFunction");
    exports.IsFunction = IsFunction;
    function IsIterator(value) {
      return IsObject(value) && !IsArray(value) && !IsUint8Array(value) && Symbol.iterator in value;
    }
    __name(IsIterator, "IsIterator");
    exports.IsIterator = IsIterator;
    function IsNull(value) {
      return value === null;
    }
    __name(IsNull, "IsNull");
    exports.IsNull = IsNull;
    function IsNumber(value) {
      return typeof value === "number";
    }
    __name(IsNumber, "IsNumber");
    exports.IsNumber = IsNumber;
    function IsObject(value) {
      return typeof value === "object" && value !== null;
    }
    __name(IsObject, "IsObject");
    exports.IsObject = IsObject;
    function IsRegExp(value) {
      return value instanceof globalThis.RegExp;
    }
    __name(IsRegExp, "IsRegExp");
    exports.IsRegExp = IsRegExp;
    function IsString(value) {
      return typeof value === "string";
    }
    __name(IsString, "IsString");
    exports.IsString = IsString;
    function IsSymbol(value) {
      return typeof value === "symbol";
    }
    __name(IsSymbol, "IsSymbol");
    exports.IsSymbol = IsSymbol;
    function IsUint8Array(value) {
      return value instanceof globalThis.Uint8Array;
    }
    __name(IsUint8Array, "IsUint8Array");
    exports.IsUint8Array = IsUint8Array;
    function IsUndefined(value) {
      return value === void 0;
    }
    __name(IsUndefined, "IsUndefined");
    exports.IsUndefined = IsUndefined;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/clone/value.js
var require_value2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/clone/value.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Clone = void 0;
    var ValueGuard = require_value();
    function ArrayType(value) {
      return value.map((value2) => Visit(value2));
    }
    __name(ArrayType, "ArrayType");
    function DateType(value) {
      return new Date(value.getTime());
    }
    __name(DateType, "DateType");
    function Uint8ArrayType(value) {
      return new Uint8Array(value);
    }
    __name(Uint8ArrayType, "Uint8ArrayType");
    function RegExpType(value) {
      return new RegExp(value.source, value.flags);
    }
    __name(RegExpType, "RegExpType");
    function ObjectType(value) {
      const clonedProperties = Object.getOwnPropertyNames(value).reduce((acc, key) => ({ ...acc, [key]: Visit(value[key]) }), {});
      const clonedSymbols = Object.getOwnPropertySymbols(value).reduce((acc, key) => ({ ...acc, [key]: Visit(value[key]) }), {});
      return { ...clonedProperties, ...clonedSymbols };
    }
    __name(ObjectType, "ObjectType");
    function Visit(value) {
      return ValueGuard.IsArray(value) ? ArrayType(value) : ValueGuard.IsDate(value) ? DateType(value) : ValueGuard.IsUint8Array(value) ? Uint8ArrayType(value) : ValueGuard.IsRegExp(value) ? RegExpType(value) : ValueGuard.IsObject(value) ? ObjectType(value) : value;
    }
    __name(Visit, "Visit");
    function Clone(value) {
      return Visit(value);
    }
    __name(Clone, "Clone");
    exports.Clone = Clone;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/clone/type.js
var require_type2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/clone/type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CloneType = exports.CloneRest = void 0;
    var value_1 = require_value2();
    function CloneRest(schemas) {
      return schemas.map((schema) => CloneType(schema));
    }
    __name(CloneRest, "CloneRest");
    exports.CloneRest = CloneRest;
    function CloneType(schema, options = {}) {
      return { ...(0, value_1.Clone)(schema), ...options };
    }
    __name(CloneType, "CloneType");
    exports.CloneType = CloneType;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/discard/discard.js
var require_discard = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/discard/discard.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Discard = void 0;
    function DiscardKey(value, key) {
      const { [key]: _, ...rest } = value;
      return rest;
    }
    __name(DiscardKey, "DiscardKey");
    function Discard(value, keys) {
      return keys.reduce((acc, key) => DiscardKey(acc, key), value);
    }
    __name(Discard, "Discard");
    exports.Discard = Discard;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/discard/index.js
var require_discard2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/discard/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_discard(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/array/array.js
var require_array = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/array/array.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Array = void 0;
    var index_1 = require_symbols2();
    var type_1 = require_type2();
    function Array2(schema, options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Array",
        type: "array",
        items: (0, type_1.CloneType)(schema)
      };
    }
    __name(Array2, "Array");
    exports.Array = Array2;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/array/index.js
var require_array2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/array/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_array(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/async-iterator/async-iterator.js
var require_async_iterator = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/async-iterator/async-iterator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AsyncIterator = void 0;
    var index_1 = require_symbols2();
    var type_1 = require_type2();
    function AsyncIterator(items, options = {}) {
      return {
        ...options,
        [index_1.Kind]: "AsyncIterator",
        type: "AsyncIterator",
        items: (0, type_1.CloneType)(items)
      };
    }
    __name(AsyncIterator, "AsyncIterator");
    exports.AsyncIterator = AsyncIterator;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/async-iterator/index.js
var require_async_iterator2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/async-iterator/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_async_iterator(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/constructor/constructor.js
var require_constructor = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/constructor/constructor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Constructor = void 0;
    var type_1 = require_type2();
    var index_1 = require_symbols2();
    function Constructor(parameters, returns, options) {
      return {
        ...options,
        [index_1.Kind]: "Constructor",
        type: "Constructor",
        parameters: (0, type_1.CloneRest)(parameters),
        returns: (0, type_1.CloneType)(returns)
      };
    }
    __name(Constructor, "Constructor");
    exports.Constructor = Constructor;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/constructor/index.js
var require_constructor2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/constructor/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_constructor(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/function/function.js
var require_function = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/function/function.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Function = void 0;
    var type_1 = require_type2();
    var index_1 = require_symbols2();
    function Function2(parameters, returns, options) {
      return {
        ...options,
        [index_1.Kind]: "Function",
        type: "Function",
        parameters: (0, type_1.CloneRest)(parameters),
        returns: (0, type_1.CloneType)(returns)
      };
    }
    __name(Function2, "Function");
    exports.Function = Function2;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/function/index.js
var require_function2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/function/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_function(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/never/never.js
var require_never = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/never/never.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Never = void 0;
    var index_1 = require_symbols2();
    function Never(options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Never",
        not: {}
      };
    }
    __name(Never, "Never");
    exports.Never = Never;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/never/index.js
var require_never2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/never/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_never(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/guard/type.js
var require_type3 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/guard/type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IsSchema = exports.IsKind = exports.IsVoid = exports.IsUnsafe = exports.IsUnknown = exports.IsUint8Array = exports.IsUnion = exports.IsUnionLiteral = exports.IsUndefined = exports.IsTuple = exports.IsTransform = exports.IsThis = exports.IsTemplateLiteral = exports.IsSymbol = exports.IsString = exports.IsRegExp = exports.IsRef = exports.IsRecursive = exports.IsRecord = exports.IsPromise = exports.IsObject = exports.IsNumber = exports.IsNull = exports.IsNot = exports.IsNever = exports.IsMappedResult = exports.IsMappedKey = exports.IsLiteralValue = exports.IsLiteral = exports.IsLiteralBoolean = exports.IsLiteralNumber = exports.IsLiteralString = exports.IsKindOf = exports.IsIterator = exports.IsIntersect = exports.IsProperties = exports.IsInteger = exports.IsFunction = exports.IsDate = exports.IsConstructor = exports.IsBoolean = exports.IsBigInt = exports.IsAsyncIterator = exports.IsArray = exports.IsAny = exports.IsOptional = exports.IsReadonly = exports.TypeGuardUnknownTypeError = void 0;
    var ValueGuard = require_value();
    var index_1 = require_symbols2();
    var index_2 = require_error2();
    var TypeGuardUnknownTypeError = class extends index_2.TypeBoxError {
      static {
        __name(this, "TypeGuardUnknownTypeError");
      }
    };
    exports.TypeGuardUnknownTypeError = TypeGuardUnknownTypeError;
    var KnownTypes = [
      "Any",
      "Array",
      "AsyncIterator",
      "BigInt",
      "Boolean",
      "Constructor",
      "Date",
      "Enum",
      "Function",
      "Integer",
      "Intersect",
      "Iterator",
      "Literal",
      "MappedKey",
      "MappedResult",
      "Not",
      "Null",
      "Number",
      "Object",
      "Promise",
      "Record",
      "Ref",
      "RegExp",
      "String",
      "Symbol",
      "TemplateLiteral",
      "This",
      "Tuple",
      "Undefined",
      "Union",
      "Uint8Array",
      "Unknown",
      "Void"
    ];
    function IsPattern(value) {
      try {
        new RegExp(value);
        return true;
      } catch {
        return false;
      }
    }
    __name(IsPattern, "IsPattern");
    function IsControlCharacterFree(value) {
      if (!ValueGuard.IsString(value))
        return false;
      for (let i = 0; i < value.length; i++) {
        const code = value.charCodeAt(i);
        if (code >= 7 && code <= 13 || code === 27 || code === 127) {
          return false;
        }
      }
      return true;
    }
    __name(IsControlCharacterFree, "IsControlCharacterFree");
    function IsAdditionalProperties(value) {
      return IsOptionalBoolean(value) || IsSchema(value);
    }
    __name(IsAdditionalProperties, "IsAdditionalProperties");
    function IsOptionalBigInt(value) {
      return ValueGuard.IsUndefined(value) || ValueGuard.IsBigInt(value);
    }
    __name(IsOptionalBigInt, "IsOptionalBigInt");
    function IsOptionalNumber(value) {
      return ValueGuard.IsUndefined(value) || ValueGuard.IsNumber(value);
    }
    __name(IsOptionalNumber, "IsOptionalNumber");
    function IsOptionalBoolean(value) {
      return ValueGuard.IsUndefined(value) || ValueGuard.IsBoolean(value);
    }
    __name(IsOptionalBoolean, "IsOptionalBoolean");
    function IsOptionalString(value) {
      return ValueGuard.IsUndefined(value) || ValueGuard.IsString(value);
    }
    __name(IsOptionalString, "IsOptionalString");
    function IsOptionalPattern(value) {
      return ValueGuard.IsUndefined(value) || ValueGuard.IsString(value) && IsControlCharacterFree(value) && IsPattern(value);
    }
    __name(IsOptionalPattern, "IsOptionalPattern");
    function IsOptionalFormat(value) {
      return ValueGuard.IsUndefined(value) || ValueGuard.IsString(value) && IsControlCharacterFree(value);
    }
    __name(IsOptionalFormat, "IsOptionalFormat");
    function IsOptionalSchema(value) {
      return ValueGuard.IsUndefined(value) || IsSchema(value);
    }
    __name(IsOptionalSchema, "IsOptionalSchema");
    function IsReadonly(value) {
      return ValueGuard.IsObject(value) && value[index_1.ReadonlyKind] === "Readonly";
    }
    __name(IsReadonly, "IsReadonly");
    exports.IsReadonly = IsReadonly;
    function IsOptional(value) {
      return ValueGuard.IsObject(value) && value[index_1.OptionalKind] === "Optional";
    }
    __name(IsOptional, "IsOptional");
    exports.IsOptional = IsOptional;
    function IsAny(value) {
      return IsKindOf(value, "Any") && IsOptionalString(value.$id);
    }
    __name(IsAny, "IsAny");
    exports.IsAny = IsAny;
    function IsArray(value) {
      return IsKindOf(value, "Array") && value.type === "array" && IsOptionalString(value.$id) && IsSchema(value.items) && IsOptionalNumber(value.minItems) && IsOptionalNumber(value.maxItems) && IsOptionalBoolean(value.uniqueItems) && IsOptionalSchema(value.contains) && IsOptionalNumber(value.minContains) && IsOptionalNumber(value.maxContains);
    }
    __name(IsArray, "IsArray");
    exports.IsArray = IsArray;
    function IsAsyncIterator(value) {
      return IsKindOf(value, "AsyncIterator") && value.type === "AsyncIterator" && IsOptionalString(value.$id) && IsSchema(value.items);
    }
    __name(IsAsyncIterator, "IsAsyncIterator");
    exports.IsAsyncIterator = IsAsyncIterator;
    function IsBigInt(value) {
      return IsKindOf(value, "BigInt") && value.type === "bigint" && IsOptionalString(value.$id) && IsOptionalBigInt(value.exclusiveMaximum) && IsOptionalBigInt(value.exclusiveMinimum) && IsOptionalBigInt(value.maximum) && IsOptionalBigInt(value.minimum) && IsOptionalBigInt(value.multipleOf);
    }
    __name(IsBigInt, "IsBigInt");
    exports.IsBigInt = IsBigInt;
    function IsBoolean(value) {
      return IsKindOf(value, "Boolean") && value.type === "boolean" && IsOptionalString(value.$id);
    }
    __name(IsBoolean, "IsBoolean");
    exports.IsBoolean = IsBoolean;
    function IsConstructor(value) {
      return IsKindOf(value, "Constructor") && value.type === "Constructor" && IsOptionalString(value.$id) && ValueGuard.IsArray(value.parameters) && value.parameters.every((schema) => IsSchema(schema)) && IsSchema(value.returns);
    }
    __name(IsConstructor, "IsConstructor");
    exports.IsConstructor = IsConstructor;
    function IsDate(value) {
      return IsKindOf(value, "Date") && value.type === "Date" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximumTimestamp) && IsOptionalNumber(value.exclusiveMinimumTimestamp) && IsOptionalNumber(value.maximumTimestamp) && IsOptionalNumber(value.minimumTimestamp) && IsOptionalNumber(value.multipleOfTimestamp);
    }
    __name(IsDate, "IsDate");
    exports.IsDate = IsDate;
    function IsFunction(value) {
      return IsKindOf(value, "Function") && value.type === "Function" && IsOptionalString(value.$id) && ValueGuard.IsArray(value.parameters) && value.parameters.every((schema) => IsSchema(schema)) && IsSchema(value.returns);
    }
    __name(IsFunction, "IsFunction");
    exports.IsFunction = IsFunction;
    function IsInteger(value) {
      return IsKindOf(value, "Integer") && value.type === "integer" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
    }
    __name(IsInteger, "IsInteger");
    exports.IsInteger = IsInteger;
    function IsProperties(value) {
      return ValueGuard.IsObject(value) && Object.entries(value).every(([key, schema]) => IsControlCharacterFree(key) && IsSchema(schema));
    }
    __name(IsProperties, "IsProperties");
    exports.IsProperties = IsProperties;
    function IsIntersect(value) {
      return IsKindOf(value, "Intersect") && (ValueGuard.IsString(value.type) && value.type !== "object" ? false : true) && ValueGuard.IsArray(value.allOf) && value.allOf.every((schema) => IsSchema(schema) && !IsTransform(schema)) && IsOptionalString(value.type) && (IsOptionalBoolean(value.unevaluatedProperties) || IsOptionalSchema(value.unevaluatedProperties)) && IsOptionalString(value.$id);
    }
    __name(IsIntersect, "IsIntersect");
    exports.IsIntersect = IsIntersect;
    function IsIterator(value) {
      return IsKindOf(value, "Iterator") && value.type === "Iterator" && IsOptionalString(value.$id) && IsSchema(value.items);
    }
    __name(IsIterator, "IsIterator");
    exports.IsIterator = IsIterator;
    function IsKindOf(value, kind) {
      return ValueGuard.IsObject(value) && index_1.Kind in value && value[index_1.Kind] === kind;
    }
    __name(IsKindOf, "IsKindOf");
    exports.IsKindOf = IsKindOf;
    function IsLiteralString(value) {
      return IsLiteral(value) && ValueGuard.IsString(value.const);
    }
    __name(IsLiteralString, "IsLiteralString");
    exports.IsLiteralString = IsLiteralString;
    function IsLiteralNumber(value) {
      return IsLiteral(value) && ValueGuard.IsNumber(value.const);
    }
    __name(IsLiteralNumber, "IsLiteralNumber");
    exports.IsLiteralNumber = IsLiteralNumber;
    function IsLiteralBoolean(value) {
      return IsLiteral(value) && ValueGuard.IsBoolean(value.const);
    }
    __name(IsLiteralBoolean, "IsLiteralBoolean");
    exports.IsLiteralBoolean = IsLiteralBoolean;
    function IsLiteral(value) {
      return IsKindOf(value, "Literal") && IsOptionalString(value.$id) && IsLiteralValue(value.const);
    }
    __name(IsLiteral, "IsLiteral");
    exports.IsLiteral = IsLiteral;
    function IsLiteralValue(value) {
      return ValueGuard.IsBoolean(value) || ValueGuard.IsNumber(value) || ValueGuard.IsString(value);
    }
    __name(IsLiteralValue, "IsLiteralValue");
    exports.IsLiteralValue = IsLiteralValue;
    function IsMappedKey(value) {
      return IsKindOf(value, "MappedKey") && ValueGuard.IsArray(value.keys) && value.keys.every((key) => ValueGuard.IsNumber(key) || ValueGuard.IsString(key));
    }
    __name(IsMappedKey, "IsMappedKey");
    exports.IsMappedKey = IsMappedKey;
    function IsMappedResult(value) {
      return IsKindOf(value, "MappedResult") && IsProperties(value.properties);
    }
    __name(IsMappedResult, "IsMappedResult");
    exports.IsMappedResult = IsMappedResult;
    function IsNever(value) {
      return IsKindOf(value, "Never") && ValueGuard.IsObject(value.not) && Object.getOwnPropertyNames(value.not).length === 0;
    }
    __name(IsNever, "IsNever");
    exports.IsNever = IsNever;
    function IsNot(value) {
      return IsKindOf(value, "Not") && IsSchema(value.not);
    }
    __name(IsNot, "IsNot");
    exports.IsNot = IsNot;
    function IsNull(value) {
      return IsKindOf(value, "Null") && value.type === "null" && IsOptionalString(value.$id);
    }
    __name(IsNull, "IsNull");
    exports.IsNull = IsNull;
    function IsNumber(value) {
      return IsKindOf(value, "Number") && value.type === "number" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
    }
    __name(IsNumber, "IsNumber");
    exports.IsNumber = IsNumber;
    function IsObject(value) {
      return IsKindOf(value, "Object") && value.type === "object" && IsOptionalString(value.$id) && IsProperties(value.properties) && IsAdditionalProperties(value.additionalProperties) && IsOptionalNumber(value.minProperties) && IsOptionalNumber(value.maxProperties);
    }
    __name(IsObject, "IsObject");
    exports.IsObject = IsObject;
    function IsPromise(value) {
      return IsKindOf(value, "Promise") && value.type === "Promise" && IsOptionalString(value.$id) && IsSchema(value.item);
    }
    __name(IsPromise, "IsPromise");
    exports.IsPromise = IsPromise;
    function IsRecord(value) {
      return IsKindOf(value, "Record") && value.type === "object" && IsOptionalString(value.$id) && IsAdditionalProperties(value.additionalProperties) && ValueGuard.IsObject(value.patternProperties) && ((schema) => {
        const keys = Object.getOwnPropertyNames(schema.patternProperties);
        return keys.length === 1 && IsPattern(keys[0]) && ValueGuard.IsObject(schema.patternProperties) && IsSchema(schema.patternProperties[keys[0]]);
      })(value);
    }
    __name(IsRecord, "IsRecord");
    exports.IsRecord = IsRecord;
    function IsRecursive(value) {
      return ValueGuard.IsObject(value) && index_1.Hint in value && value[index_1.Hint] === "Recursive";
    }
    __name(IsRecursive, "IsRecursive");
    exports.IsRecursive = IsRecursive;
    function IsRef(value) {
      return IsKindOf(value, "Ref") && IsOptionalString(value.$id) && ValueGuard.IsString(value.$ref);
    }
    __name(IsRef, "IsRef");
    exports.IsRef = IsRef;
    function IsRegExp(value) {
      return IsKindOf(value, "RegExp") && IsOptionalString(value.$id) && ValueGuard.IsString(value.source) && ValueGuard.IsString(value.flags);
    }
    __name(IsRegExp, "IsRegExp");
    exports.IsRegExp = IsRegExp;
    function IsString(value) {
      return IsKindOf(value, "String") && value.type === "string" && IsOptionalString(value.$id) && IsOptionalNumber(value.minLength) && IsOptionalNumber(value.maxLength) && IsOptionalPattern(value.pattern) && IsOptionalFormat(value.format);
    }
    __name(IsString, "IsString");
    exports.IsString = IsString;
    function IsSymbol(value) {
      return IsKindOf(value, "Symbol") && value.type === "symbol" && IsOptionalString(value.$id);
    }
    __name(IsSymbol, "IsSymbol");
    exports.IsSymbol = IsSymbol;
    function IsTemplateLiteral(value) {
      return IsKindOf(value, "TemplateLiteral") && value.type === "string" && ValueGuard.IsString(value.pattern) && value.pattern[0] === "^" && value.pattern[value.pattern.length - 1] === "$";
    }
    __name(IsTemplateLiteral, "IsTemplateLiteral");
    exports.IsTemplateLiteral = IsTemplateLiteral;
    function IsThis(value) {
      return IsKindOf(value, "This") && IsOptionalString(value.$id) && ValueGuard.IsString(value.$ref);
    }
    __name(IsThis, "IsThis");
    exports.IsThis = IsThis;
    function IsTransform(value) {
      return ValueGuard.IsObject(value) && index_1.TransformKind in value;
    }
    __name(IsTransform, "IsTransform");
    exports.IsTransform = IsTransform;
    function IsTuple(value) {
      return IsKindOf(value, "Tuple") && value.type === "array" && IsOptionalString(value.$id) && ValueGuard.IsNumber(value.minItems) && ValueGuard.IsNumber(value.maxItems) && value.minItems === value.maxItems && // empty
      (ValueGuard.IsUndefined(value.items) && ValueGuard.IsUndefined(value.additionalItems) && value.minItems === 0 || ValueGuard.IsArray(value.items) && value.items.every((schema) => IsSchema(schema)));
    }
    __name(IsTuple, "IsTuple");
    exports.IsTuple = IsTuple;
    function IsUndefined(value) {
      return IsKindOf(value, "Undefined") && value.type === "undefined" && IsOptionalString(value.$id);
    }
    __name(IsUndefined, "IsUndefined");
    exports.IsUndefined = IsUndefined;
    function IsUnionLiteral(value) {
      return IsUnion(value) && value.anyOf.every((schema) => IsLiteralString(schema) || IsLiteralNumber(schema));
    }
    __name(IsUnionLiteral, "IsUnionLiteral");
    exports.IsUnionLiteral = IsUnionLiteral;
    function IsUnion(value) {
      return IsKindOf(value, "Union") && IsOptionalString(value.$id) && ValueGuard.IsObject(value) && ValueGuard.IsArray(value.anyOf) && value.anyOf.every((schema) => IsSchema(schema));
    }
    __name(IsUnion, "IsUnion");
    exports.IsUnion = IsUnion;
    function IsUint8Array(value) {
      return IsKindOf(value, "Uint8Array") && value.type === "Uint8Array" && IsOptionalString(value.$id) && IsOptionalNumber(value.minByteLength) && IsOptionalNumber(value.maxByteLength);
    }
    __name(IsUint8Array, "IsUint8Array");
    exports.IsUint8Array = IsUint8Array;
    function IsUnknown(value) {
      return IsKindOf(value, "Unknown") && IsOptionalString(value.$id);
    }
    __name(IsUnknown, "IsUnknown");
    exports.IsUnknown = IsUnknown;
    function IsUnsafe(value) {
      return IsKindOf(value, "Unsafe");
    }
    __name(IsUnsafe, "IsUnsafe");
    exports.IsUnsafe = IsUnsafe;
    function IsVoid(value) {
      return IsKindOf(value, "Void") && value.type === "void" && IsOptionalString(value.$id);
    }
    __name(IsVoid, "IsVoid");
    exports.IsVoid = IsVoid;
    function IsKind(value) {
      return ValueGuard.IsObject(value) && index_1.Kind in value && ValueGuard.IsString(value[index_1.Kind]) && !KnownTypes.includes(value[index_1.Kind]);
    }
    __name(IsKind, "IsKind");
    exports.IsKind = IsKind;
    function IsSchema(value) {
      return ValueGuard.IsObject(value) && (IsAny(value) || IsArray(value) || IsBoolean(value) || IsBigInt(value) || IsAsyncIterator(value) || IsConstructor(value) || IsDate(value) || IsFunction(value) || IsInteger(value) || IsIntersect(value) || IsIterator(value) || IsLiteral(value) || IsMappedKey(value) || IsMappedResult(value) || IsNever(value) || IsNot(value) || IsNull(value) || IsNumber(value) || IsObject(value) || IsPromise(value) || IsRecord(value) || IsRef(value) || IsRegExp(value) || IsString(value) || IsSymbol(value) || IsTemplateLiteral(value) || IsThis(value) || IsTuple(value) || IsUndefined(value) || IsUnion(value) || IsUint8Array(value) || IsUnknown(value) || IsUnsafe(value) || IsVoid(value) || IsKind(value));
    }
    __name(IsSchema, "IsSchema");
    exports.IsSchema = IsSchema;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/optional/optional.js
var require_optional = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/optional/optional.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Optional = void 0;
    var index_1 = require_symbols2();
    var type_1 = require_type2();
    var index_2 = require_discard2();
    var optional_from_mapped_result_1 = require_optional_from_mapped_result();
    var type_2 = require_type3();
    function RemoveOptional(schema) {
      return (0, index_2.Discard)((0, type_1.CloneType)(schema), [index_1.OptionalKind]);
    }
    __name(RemoveOptional, "RemoveOptional");
    function AddOptional(schema) {
      return { ...(0, type_1.CloneType)(schema), [index_1.OptionalKind]: "Optional" };
    }
    __name(AddOptional, "AddOptional");
    function OptionalWithFlag(schema, F) {
      return F === false ? RemoveOptional(schema) : AddOptional(schema);
    }
    __name(OptionalWithFlag, "OptionalWithFlag");
    function Optional(schema, enable) {
      const F = enable ?? true;
      return (0, type_2.IsMappedResult)(schema) ? (0, optional_from_mapped_result_1.OptionalFromMappedResult)(schema, F) : OptionalWithFlag(schema, F);
    }
    __name(Optional, "Optional");
    exports.Optional = Optional;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/optional/optional-from-mapped-result.js
var require_optional_from_mapped_result = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/optional/optional-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OptionalFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var optional_1 = require_optional();
    function FromProperties(P, F) {
      return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, optional_1.Optional)(P[K2], F) };
      }, {});
    }
    __name(FromProperties, "FromProperties");
    function FromMappedResult(R, F) {
      return FromProperties(R.properties, F);
    }
    __name(FromMappedResult, "FromMappedResult");
    function OptionalFromMappedResult(R, F) {
      const P = FromMappedResult(R, F);
      return (0, index_1.MappedResult)(P);
    }
    __name(OptionalFromMappedResult, "OptionalFromMappedResult");
    exports.OptionalFromMappedResult = OptionalFromMappedResult;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/optional/index.js
var require_optional2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/optional/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_optional_from_mapped_result(), exports);
    __exportStar(require_optional(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intersect/intersect-create.js
var require_intersect_create = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intersect/intersect-create.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IntersectCreate = void 0;
    var index_1 = require_symbols2();
    var type_1 = require_type2();
    var type_2 = require_type3();
    function IntersectCreate(T, options) {
      const allObjects = T.every((schema) => (0, type_2.IsObject)(schema));
      const clonedUnevaluatedProperties = (0, type_2.IsSchema)(options.unevaluatedProperties) ? { unevaluatedProperties: (0, type_1.CloneType)(options.unevaluatedProperties) } : {};
      return options.unevaluatedProperties === false || (0, type_2.IsSchema)(options.unevaluatedProperties) || allObjects ? { ...options, ...clonedUnevaluatedProperties, [index_1.Kind]: "Intersect", type: "object", allOf: (0, type_1.CloneRest)(T) } : { ...options, ...clonedUnevaluatedProperties, [index_1.Kind]: "Intersect", allOf: (0, type_1.CloneRest)(T) };
    }
    __name(IntersectCreate, "IntersectCreate");
    exports.IntersectCreate = IntersectCreate;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intersect/intersect-evaluated.js
var require_intersect_evaluated = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intersect/intersect-evaluated.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IntersectEvaluated = void 0;
    var index_1 = require_symbols2();
    var type_1 = require_type2();
    var index_2 = require_discard2();
    var index_3 = require_never2();
    var index_4 = require_optional2();
    var intersect_create_1 = require_intersect_create();
    var type_2 = require_type3();
    function IsIntersectOptional(T) {
      return T.every((L) => (0, type_2.IsOptional)(L));
    }
    __name(IsIntersectOptional, "IsIntersectOptional");
    function RemoveOptionalFromType(T) {
      return (0, index_2.Discard)(T, [index_1.OptionalKind]);
    }
    __name(RemoveOptionalFromType, "RemoveOptionalFromType");
    function RemoveOptionalFromRest(T) {
      return T.map((L) => (0, type_2.IsOptional)(L) ? RemoveOptionalFromType(L) : L);
    }
    __name(RemoveOptionalFromRest, "RemoveOptionalFromRest");
    function ResolveIntersect(T, options) {
      return IsIntersectOptional(T) ? (0, index_4.Optional)((0, intersect_create_1.IntersectCreate)(RemoveOptionalFromRest(T), options)) : (0, intersect_create_1.IntersectCreate)(RemoveOptionalFromRest(T), options);
    }
    __name(ResolveIntersect, "ResolveIntersect");
    function IntersectEvaluated(T, options = {}) {
      if (T.length === 0)
        return (0, index_3.Never)(options);
      if (T.length === 1)
        return (0, type_1.CloneType)(T[0], options);
      if (T.some((schema) => (0, type_2.IsTransform)(schema)))
        throw new Error("Cannot intersect transform types");
      return ResolveIntersect(T, options);
    }
    __name(IntersectEvaluated, "IntersectEvaluated");
    exports.IntersectEvaluated = IntersectEvaluated;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intersect/intersect-type.js
var require_intersect_type = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intersect/intersect-type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var index_1 = require_symbols2();
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intersect/intersect.js
var require_intersect = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intersect/intersect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Intersect = void 0;
    var type_1 = require_type2();
    var index_1 = require_never2();
    var intersect_create_1 = require_intersect_create();
    var type_2 = require_type3();
    function Intersect(T, options = {}) {
      if (T.length === 0)
        return (0, index_1.Never)(options);
      if (T.length === 1)
        return (0, type_1.CloneType)(T[0], options);
      if (T.some((schema) => (0, type_2.IsTransform)(schema)))
        throw new Error("Cannot intersect transform types");
      return (0, intersect_create_1.IntersectCreate)(T, options);
    }
    __name(Intersect, "Intersect");
    exports.Intersect = Intersect;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intersect/index.js
var require_intersect2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intersect/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_intersect_evaluated(), exports);
    __exportStar(require_intersect_type(), exports);
    __exportStar(require_intersect(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/union/union-create.js
var require_union_create = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/union/union-create.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UnionCreate = void 0;
    var type_1 = require_type2();
    var index_1 = require_symbols2();
    function UnionCreate(T, options) {
      return { ...options, [index_1.Kind]: "Union", anyOf: (0, type_1.CloneRest)(T) };
    }
    __name(UnionCreate, "UnionCreate");
    exports.UnionCreate = UnionCreate;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/union/union-evaluated.js
var require_union_evaluated = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/union/union-evaluated.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UnionEvaluated = void 0;
    var index_1 = require_symbols2();
    var type_1 = require_type2();
    var index_2 = require_discard2();
    var index_3 = require_never2();
    var index_4 = require_optional2();
    var union_create_1 = require_union_create();
    var type_2 = require_type3();
    function IsUnionOptional(T) {
      return T.some((L) => (0, type_2.IsOptional)(L));
    }
    __name(IsUnionOptional, "IsUnionOptional");
    function RemoveOptionalFromRest(T) {
      return T.map((L) => (0, type_2.IsOptional)(L) ? RemoveOptionalFromType(L) : L);
    }
    __name(RemoveOptionalFromRest, "RemoveOptionalFromRest");
    function RemoveOptionalFromType(T) {
      return (0, index_2.Discard)(T, [index_1.OptionalKind]);
    }
    __name(RemoveOptionalFromType, "RemoveOptionalFromType");
    function ResolveUnion(T, options) {
      return IsUnionOptional(T) ? (0, index_4.Optional)((0, union_create_1.UnionCreate)(RemoveOptionalFromRest(T), options)) : (0, union_create_1.UnionCreate)(RemoveOptionalFromRest(T), options);
    }
    __name(ResolveUnion, "ResolveUnion");
    function UnionEvaluated(T, options = {}) {
      return T.length === 0 ? (0, index_3.Never)(options) : T.length === 1 ? (0, type_1.CloneType)(T[0], options) : ResolveUnion(T, options);
    }
    __name(UnionEvaluated, "UnionEvaluated");
    exports.UnionEvaluated = UnionEvaluated;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/union/union-type.js
var require_union_type = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/union/union-type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var index_1 = require_symbols2();
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/union/union.js
var require_union = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/union/union.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Union = void 0;
    var index_1 = require_never2();
    var type_1 = require_type2();
    var union_create_1 = require_union_create();
    function Union(T, options = {}) {
      return T.length === 0 ? (0, index_1.Never)(options) : T.length === 1 ? (0, type_1.CloneType)(T[0], options) : (0, union_create_1.UnionCreate)(T, options);
    }
    __name(Union, "Union");
    exports.Union = Union;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/union/index.js
var require_union2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/union/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_union_evaluated(), exports);
    __exportStar(require_union_type(), exports);
    __exportStar(require_union(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/template-literal/parse.js
var require_parse = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/template-literal/parse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TemplateLiteralParseExact = exports.TemplateLiteralParse = exports.TemplateLiteralParserError = void 0;
    var index_1 = require_error2();
    var TemplateLiteralParserError = class extends index_1.TypeBoxError {
      static {
        __name(this, "TemplateLiteralParserError");
      }
    };
    exports.TemplateLiteralParserError = TemplateLiteralParserError;
    function IsNonEscaped(pattern, index, char) {
      return pattern[index] === char && pattern.charCodeAt(index - 1) !== 92;
    }
    __name(IsNonEscaped, "IsNonEscaped");
    function IsOpenParen(pattern, index) {
      return IsNonEscaped(pattern, index, "(");
    }
    __name(IsOpenParen, "IsOpenParen");
    function IsCloseParen(pattern, index) {
      return IsNonEscaped(pattern, index, ")");
    }
    __name(IsCloseParen, "IsCloseParen");
    function IsSeparator(pattern, index) {
      return IsNonEscaped(pattern, index, "|");
    }
    __name(IsSeparator, "IsSeparator");
    function IsGroup(pattern) {
      if (!(IsOpenParen(pattern, 0) && IsCloseParen(pattern, pattern.length - 1)))
        return false;
      let count = 0;
      for (let index = 0; index < pattern.length; index++) {
        if (IsOpenParen(pattern, index))
          count += 1;
        if (IsCloseParen(pattern, index))
          count -= 1;
        if (count === 0 && index !== pattern.length - 1)
          return false;
      }
      return true;
    }
    __name(IsGroup, "IsGroup");
    function InGroup(pattern) {
      return pattern.slice(1, pattern.length - 1);
    }
    __name(InGroup, "InGroup");
    function IsPrecedenceOr(pattern) {
      let count = 0;
      for (let index = 0; index < pattern.length; index++) {
        if (IsOpenParen(pattern, index))
          count += 1;
        if (IsCloseParen(pattern, index))
          count -= 1;
        if (IsSeparator(pattern, index) && count === 0)
          return true;
      }
      return false;
    }
    __name(IsPrecedenceOr, "IsPrecedenceOr");
    function IsPrecedenceAnd(pattern) {
      for (let index = 0; index < pattern.length; index++) {
        if (IsOpenParen(pattern, index))
          return true;
      }
      return false;
    }
    __name(IsPrecedenceAnd, "IsPrecedenceAnd");
    function Or(pattern) {
      let [count, start] = [0, 0];
      const expressions = [];
      for (let index = 0; index < pattern.length; index++) {
        if (IsOpenParen(pattern, index))
          count += 1;
        if (IsCloseParen(pattern, index))
          count -= 1;
        if (IsSeparator(pattern, index) && count === 0) {
          const range2 = pattern.slice(start, index);
          if (range2.length > 0)
            expressions.push(TemplateLiteralParse(range2));
          start = index + 1;
        }
      }
      const range = pattern.slice(start);
      if (range.length > 0)
        expressions.push(TemplateLiteralParse(range));
      if (expressions.length === 0)
        return { type: "const", const: "" };
      if (expressions.length === 1)
        return expressions[0];
      return { type: "or", expr: expressions };
    }
    __name(Or, "Or");
    function And(pattern) {
      function Group(value, index) {
        if (!IsOpenParen(value, index))
          throw new TemplateLiteralParserError(`TemplateLiteralParser: Index must point to open parens`);
        let count = 0;
        for (let scan = index; scan < value.length; scan++) {
          if (IsOpenParen(value, scan))
            count += 1;
          if (IsCloseParen(value, scan))
            count -= 1;
          if (count === 0)
            return [index, scan];
        }
        throw new TemplateLiteralParserError(`TemplateLiteralParser: Unclosed group parens in expression`);
      }
      __name(Group, "Group");
      function Range(pattern2, index) {
        for (let scan = index; scan < pattern2.length; scan++) {
          if (IsOpenParen(pattern2, scan))
            return [index, scan];
        }
        return [index, pattern2.length];
      }
      __name(Range, "Range");
      const expressions = [];
      for (let index = 0; index < pattern.length; index++) {
        if (IsOpenParen(pattern, index)) {
          const [start, end] = Group(pattern, index);
          const range = pattern.slice(start, end + 1);
          expressions.push(TemplateLiteralParse(range));
          index = end;
        } else {
          const [start, end] = Range(pattern, index);
          const range = pattern.slice(start, end);
          if (range.length > 0)
            expressions.push(TemplateLiteralParse(range));
          index = end - 1;
        }
      }
      return expressions.length === 0 ? { type: "const", const: "" } : expressions.length === 1 ? expressions[0] : { type: "and", expr: expressions };
    }
    __name(And, "And");
    function TemplateLiteralParse(pattern) {
      return IsGroup(pattern) ? TemplateLiteralParse(InGroup(pattern)) : IsPrecedenceOr(pattern) ? Or(pattern) : IsPrecedenceAnd(pattern) ? And(pattern) : { type: "const", const: pattern };
    }
    __name(TemplateLiteralParse, "TemplateLiteralParse");
    exports.TemplateLiteralParse = TemplateLiteralParse;
    function TemplateLiteralParseExact(pattern) {
      return TemplateLiteralParse(pattern.slice(1, pattern.length - 1));
    }
    __name(TemplateLiteralParseExact, "TemplateLiteralParseExact");
    exports.TemplateLiteralParseExact = TemplateLiteralParseExact;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/template-literal/finite.js
var require_finite = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/template-literal/finite.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IsTemplateLiteralFinite = exports.IsTemplateLiteralExpressionFinite = exports.TemplateLiteralFiniteError = void 0;
    var parse_1 = require_parse();
    var index_1 = require_error2();
    var TemplateLiteralFiniteError = class extends index_1.TypeBoxError {
      static {
        __name(this, "TemplateLiteralFiniteError");
      }
    };
    exports.TemplateLiteralFiniteError = TemplateLiteralFiniteError;
    function IsNumberExpression(expression) {
      return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "0" && expression.expr[1].type === "const" && expression.expr[1].const === "[1-9][0-9]*";
    }
    __name(IsNumberExpression, "IsNumberExpression");
    function IsBooleanExpression(expression) {
      return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "true" && expression.expr[1].type === "const" && expression.expr[1].const === "false";
    }
    __name(IsBooleanExpression, "IsBooleanExpression");
    function IsStringExpression(expression) {
      return expression.type === "const" && expression.const === ".*";
    }
    __name(IsStringExpression, "IsStringExpression");
    function IsTemplateLiteralExpressionFinite(expression) {
      return IsNumberExpression(expression) || IsStringExpression(expression) ? false : IsBooleanExpression(expression) ? true : expression.type === "and" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "or" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "const" ? true : (() => {
        throw new TemplateLiteralFiniteError(`Unknown expression type`);
      })();
    }
    __name(IsTemplateLiteralExpressionFinite, "IsTemplateLiteralExpressionFinite");
    exports.IsTemplateLiteralExpressionFinite = IsTemplateLiteralExpressionFinite;
    function IsTemplateLiteralFinite(schema) {
      const expression = (0, parse_1.TemplateLiteralParseExact)(schema.pattern);
      return IsTemplateLiteralExpressionFinite(expression);
    }
    __name(IsTemplateLiteralFinite, "IsTemplateLiteralFinite");
    exports.IsTemplateLiteralFinite = IsTemplateLiteralFinite;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/template-literal/generate.js
var require_generate = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/template-literal/generate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TemplateLiteralGenerate = exports.TemplateLiteralExpressionGenerate = exports.TemplateLiteralGenerateError = void 0;
    var finite_1 = require_finite();
    var parse_1 = require_parse();
    var index_1 = require_error2();
    var TemplateLiteralGenerateError = class extends index_1.TypeBoxError {
      static {
        __name(this, "TemplateLiteralGenerateError");
      }
    };
    exports.TemplateLiteralGenerateError = TemplateLiteralGenerateError;
    function* GenerateReduce(buffer) {
      if (buffer.length === 1)
        return yield* buffer[0];
      for (const left of buffer[0]) {
        for (const right of GenerateReduce(buffer.slice(1))) {
          yield `${left}${right}`;
        }
      }
    }
    __name(GenerateReduce, "GenerateReduce");
    function* GenerateAnd(expression) {
      return yield* GenerateReduce(expression.expr.map((expr) => [...TemplateLiteralExpressionGenerate(expr)]));
    }
    __name(GenerateAnd, "GenerateAnd");
    function* GenerateOr(expression) {
      for (const expr of expression.expr)
        yield* TemplateLiteralExpressionGenerate(expr);
    }
    __name(GenerateOr, "GenerateOr");
    function* GenerateConst(expression) {
      return yield expression.const;
    }
    __name(GenerateConst, "GenerateConst");
    function* TemplateLiteralExpressionGenerate(expression) {
      return expression.type === "and" ? yield* GenerateAnd(expression) : expression.type === "or" ? yield* GenerateOr(expression) : expression.type === "const" ? yield* GenerateConst(expression) : (() => {
        throw new TemplateLiteralGenerateError("Unknown expression");
      })();
    }
    __name(TemplateLiteralExpressionGenerate, "TemplateLiteralExpressionGenerate");
    exports.TemplateLiteralExpressionGenerate = TemplateLiteralExpressionGenerate;
    function TemplateLiteralGenerate(schema) {
      const expression = (0, parse_1.TemplateLiteralParseExact)(schema.pattern);
      return (0, finite_1.IsTemplateLiteralExpressionFinite)(expression) ? [...TemplateLiteralExpressionGenerate(expression)] : [];
    }
    __name(TemplateLiteralGenerate, "TemplateLiteralGenerate");
    exports.TemplateLiteralGenerate = TemplateLiteralGenerate;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/literal/literal.js
var require_literal = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/literal/literal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Literal = void 0;
    var index_1 = require_symbols2();
    function Literal(value, options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Literal",
        const: value,
        type: typeof value
      };
    }
    __name(Literal, "Literal");
    exports.Literal = Literal;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/literal/index.js
var require_literal2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/literal/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_literal(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/boolean/boolean.js
var require_boolean = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/boolean/boolean.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Boolean = void 0;
    var index_1 = require_symbols2();
    function Boolean(options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Boolean",
        type: "boolean"
      };
    }
    __name(Boolean, "Boolean");
    exports.Boolean = Boolean;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/boolean/index.js
var require_boolean2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/boolean/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_boolean(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/bigint/bigint.js
var require_bigint = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/bigint/bigint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BigInt = void 0;
    var index_1 = require_symbols2();
    function BigInt2(options = {}) {
      return {
        ...options,
        [index_1.Kind]: "BigInt",
        type: "bigint"
      };
    }
    __name(BigInt2, "BigInt");
    exports.BigInt = BigInt2;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/bigint/index.js
var require_bigint2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/bigint/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_bigint(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/number/number.js
var require_number = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/number/number.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Number = void 0;
    var index_1 = require_symbols2();
    function Number2(options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Number",
        type: "number"
      };
    }
    __name(Number2, "Number");
    exports.Number = Number2;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/number/index.js
var require_number2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/number/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_number(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/string/string.js
var require_string = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/string/string.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.String = void 0;
    var index_1 = require_symbols2();
    function String2(options = {}) {
      return { ...options, [index_1.Kind]: "String", type: "string" };
    }
    __name(String2, "String");
    exports.String = String2;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/string/index.js
var require_string2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/string/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_string(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/template-literal/syntax.js
var require_syntax = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/template-literal/syntax.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TemplateLiteralSyntax = void 0;
    var index_1 = require_literal2();
    var index_2 = require_boolean2();
    var index_3 = require_bigint2();
    var index_4 = require_number2();
    var index_5 = require_string2();
    var index_6 = require_union2();
    var index_7 = require_never2();
    function* FromUnion(syntax) {
      const trim = syntax.trim().replace(/"|'/g, "");
      return trim === "boolean" ? yield (0, index_2.Boolean)() : trim === "number" ? yield (0, index_4.Number)() : trim === "bigint" ? yield (0, index_3.BigInt)() : trim === "string" ? yield (0, index_5.String)() : yield (() => {
        const literals = trim.split("|").map((literal) => (0, index_1.Literal)(literal.trim()));
        return literals.length === 0 ? (0, index_7.Never)() : literals.length === 1 ? literals[0] : (0, index_6.UnionEvaluated)(literals);
      })();
    }
    __name(FromUnion, "FromUnion");
    function* FromTerminal(syntax) {
      if (syntax[1] !== "{") {
        const L = (0, index_1.Literal)("$");
        const R = FromSyntax(syntax.slice(1));
        return yield* [L, ...R];
      }
      for (let i = 2; i < syntax.length; i++) {
        if (syntax[i] === "}") {
          const L = FromUnion(syntax.slice(2, i));
          const R = FromSyntax(syntax.slice(i + 1));
          return yield* [...L, ...R];
        }
      }
      yield (0, index_1.Literal)(syntax);
    }
    __name(FromTerminal, "FromTerminal");
    function* FromSyntax(syntax) {
      for (let i = 0; i < syntax.length; i++) {
        if (syntax[i] === "$") {
          const L = (0, index_1.Literal)(syntax.slice(0, i));
          const R = FromTerminal(syntax.slice(i));
          return yield* [L, ...R];
        }
      }
      yield (0, index_1.Literal)(syntax);
    }
    __name(FromSyntax, "FromSyntax");
    function TemplateLiteralSyntax(syntax) {
      return [...FromSyntax(syntax)];
    }
    __name(TemplateLiteralSyntax, "TemplateLiteralSyntax");
    exports.TemplateLiteralSyntax = TemplateLiteralSyntax;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/patterns/patterns.js
var require_patterns = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/patterns/patterns.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PatternStringExact = exports.PatternNumberExact = exports.PatternBooleanExact = exports.PatternString = exports.PatternNumber = exports.PatternBoolean = void 0;
    exports.PatternBoolean = "(true|false)";
    exports.PatternNumber = "(0|[1-9][0-9]*)";
    exports.PatternString = "(.*)";
    exports.PatternBooleanExact = `^${exports.PatternBoolean}$`;
    exports.PatternNumberExact = `^${exports.PatternNumber}$`;
    exports.PatternStringExact = `^${exports.PatternString}$`;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/patterns/index.js
var require_patterns2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/patterns/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_patterns(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/template-literal/pattern.js
var require_pattern = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/template-literal/pattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TemplateLiteralPattern = exports.TemplateLiteralPatternError = void 0;
    var index_1 = require_patterns2();
    var index_2 = require_symbols2();
    var index_3 = require_error2();
    var type_1 = require_type3();
    var TemplateLiteralPatternError = class extends index_3.TypeBoxError {
      static {
        __name(this, "TemplateLiteralPatternError");
      }
    };
    exports.TemplateLiteralPatternError = TemplateLiteralPatternError;
    function Escape(value) {
      return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
    __name(Escape, "Escape");
    function Visit(schema, acc) {
      return (0, type_1.IsTemplateLiteral)(schema) ? schema.pattern.slice(1, schema.pattern.length - 1) : (0, type_1.IsUnion)(schema) ? `(${schema.anyOf.map((schema2) => Visit(schema2, acc)).join("|")})` : (0, type_1.IsNumber)(schema) ? `${acc}${index_1.PatternNumber}` : (0, type_1.IsInteger)(schema) ? `${acc}${index_1.PatternNumber}` : (0, type_1.IsBigInt)(schema) ? `${acc}${index_1.PatternNumber}` : (0, type_1.IsString)(schema) ? `${acc}${index_1.PatternString}` : (0, type_1.IsLiteral)(schema) ? `${acc}${Escape(schema.const.toString())}` : (0, type_1.IsBoolean)(schema) ? `${acc}${index_1.PatternBoolean}` : (() => {
        throw new TemplateLiteralPatternError(`Unexpected Kind '${schema[index_2.Kind]}'`);
      })();
    }
    __name(Visit, "Visit");
    function TemplateLiteralPattern(kinds) {
      return `^${kinds.map((schema) => Visit(schema, "")).join("")}$`;
    }
    __name(TemplateLiteralPattern, "TemplateLiteralPattern");
    exports.TemplateLiteralPattern = TemplateLiteralPattern;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/template-literal/union.js
var require_union3 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/template-literal/union.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TemplateLiteralToUnion = void 0;
    var index_1 = require_union2();
    var index_2 = require_literal2();
    var generate_1 = require_generate();
    function TemplateLiteralToUnion(schema) {
      const R = (0, generate_1.TemplateLiteralGenerate)(schema);
      const L = R.map((S) => (0, index_2.Literal)(S));
      return (0, index_1.Union)(L);
    }
    __name(TemplateLiteralToUnion, "TemplateLiteralToUnion");
    exports.TemplateLiteralToUnion = TemplateLiteralToUnion;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/template-literal/template-literal.js
var require_template_literal = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/template-literal/template-literal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TemplateLiteral = void 0;
    var syntax_1 = require_syntax();
    var pattern_1 = require_pattern();
    var value_1 = require_value();
    var index_1 = require_symbols2();
    function TemplateLiteral(unresolved, options = {}) {
      const pattern = (0, value_1.IsString)(unresolved) ? (0, pattern_1.TemplateLiteralPattern)((0, syntax_1.TemplateLiteralSyntax)(unresolved)) : (0, pattern_1.TemplateLiteralPattern)(unresolved);
      return { ...options, [index_1.Kind]: "TemplateLiteral", type: "string", pattern };
    }
    __name(TemplateLiteral, "TemplateLiteral");
    exports.TemplateLiteral = TemplateLiteral;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/template-literal/index.js
var require_template_literal2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/template-literal/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_finite(), exports);
    __exportStar(require_generate(), exports);
    __exportStar(require_syntax(), exports);
    __exportStar(require_parse(), exports);
    __exportStar(require_pattern(), exports);
    __exportStar(require_union3(), exports);
    __exportStar(require_template_literal(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/indexed/indexed-property-keys.js
var require_indexed_property_keys = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/indexed/indexed-property-keys.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IndexPropertyKeys = void 0;
    var index_1 = require_template_literal2();
    var type_1 = require_type3();
    function FromTemplateLiteral(T) {
      const R = (0, index_1.TemplateLiteralGenerate)(T);
      return R.map((S) => S.toString());
    }
    __name(FromTemplateLiteral, "FromTemplateLiteral");
    function FromUnion(T) {
      return T.reduce((Acc, L) => {
        return [...Acc, ...IndexPropertyKeys(L)];
      }, []);
    }
    __name(FromUnion, "FromUnion");
    function FromLiteral(T) {
      return [T.toString()];
    }
    __name(FromLiteral, "FromLiteral");
    function IndexPropertyKeys(T) {
      return [...new Set((0, type_1.IsTemplateLiteral)(T) ? FromTemplateLiteral(T) : (0, type_1.IsUnion)(T) ? FromUnion(T.anyOf) : (0, type_1.IsLiteral)(T) ? FromLiteral(T.const) : (0, type_1.IsNumber)(T) ? ["[number]"] : (0, type_1.IsInteger)(T) ? ["[number]"] : [])];
    }
    __name(IndexPropertyKeys, "IndexPropertyKeys");
    exports.IndexPropertyKeys = IndexPropertyKeys;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/indexed/indexed-from-mapped-result.js
var require_indexed_from_mapped_result = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/indexed/indexed-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IndexFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var indexed_property_keys_1 = require_indexed_property_keys();
    var index_2 = require_indexed2();
    function FromProperties(T, P, options) {
      return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, index_2.Index)(T, (0, indexed_property_keys_1.IndexPropertyKeys)(P[K2]), options) };
      }, {});
    }
    __name(FromProperties, "FromProperties");
    function FromMappedResult(T, R, options) {
      return FromProperties(T, R.properties, options);
    }
    __name(FromMappedResult, "FromMappedResult");
    function IndexFromMappedResult(T, R, options) {
      const P = FromMappedResult(T, R, options);
      return (0, index_1.MappedResult)(P);
    }
    __name(IndexFromMappedResult, "IndexFromMappedResult");
    exports.IndexFromMappedResult = IndexFromMappedResult;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/indexed/indexed.js
var require_indexed = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/indexed/indexed.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Index = void 0;
    var index_1 = require_never2();
    var index_2 = require_intersect2();
    var index_3 = require_union2();
    var type_1 = require_type2();
    var indexed_property_keys_1 = require_indexed_property_keys();
    var indexed_from_mapped_key_1 = require_indexed_from_mapped_key();
    var indexed_from_mapped_result_1 = require_indexed_from_mapped_result();
    var type_2 = require_type3();
    function FromRest(T, K) {
      return T.map((L) => FromKey(L, K));
    }
    __name(FromRest, "FromRest");
    function FromIntersectRest(T) {
      return T.filter((L) => !(0, type_2.IsNever)(L));
    }
    __name(FromIntersectRest, "FromIntersectRest");
    function FromIntersect(T, K) {
      return (0, index_2.IntersectEvaluated)(FromIntersectRest(FromRest(T, K)));
    }
    __name(FromIntersect, "FromIntersect");
    function FromUnionRest(T) {
      return T;
    }
    __name(FromUnionRest, "FromUnionRest");
    function FromUnion(T, K) {
      return (0, index_3.UnionEvaluated)(FromUnionRest(FromRest(T, K)));
    }
    __name(FromUnion, "FromUnion");
    function FromTuple(T, K) {
      return K in T ? T[K] : K === "[number]" ? (0, index_3.UnionEvaluated)(T) : (0, index_1.Never)();
    }
    __name(FromTuple, "FromTuple");
    function FromArray(T, K) {
      return K === "[number]" ? T : (0, index_1.Never)();
    }
    __name(FromArray, "FromArray");
    function FromProperty(T, K) {
      return K in T ? T[K] : (0, index_1.Never)();
    }
    __name(FromProperty, "FromProperty");
    function FromKey(T, K) {
      return (0, type_2.IsIntersect)(T) ? FromIntersect(T.allOf, K) : (0, type_2.IsUnion)(T) ? FromUnion(T.anyOf, K) : (0, type_2.IsTuple)(T) ? FromTuple(T.items ?? [], K) : (0, type_2.IsArray)(T) ? FromArray(T.items, K) : (0, type_2.IsObject)(T) ? FromProperty(T.properties, K) : (0, index_1.Never)();
    }
    __name(FromKey, "FromKey");
    function FromKeys(T, K) {
      return K.map((L) => FromKey(T, L));
    }
    __name(FromKeys, "FromKeys");
    function FromSchema(T, K) {
      return (0, index_3.UnionEvaluated)(FromKeys(T, K));
    }
    __name(FromSchema, "FromSchema");
    function Index(T, K, options = {}) {
      return (0, type_2.IsMappedResult)(K) ? (0, type_1.CloneType)((0, indexed_from_mapped_result_1.IndexFromMappedResult)(T, K, options)) : (0, type_2.IsMappedKey)(K) ? (0, type_1.CloneType)((0, indexed_from_mapped_key_1.IndexFromMappedKey)(T, K, options)) : (0, type_2.IsSchema)(K) ? (0, type_1.CloneType)(FromSchema(T, (0, indexed_property_keys_1.IndexPropertyKeys)(K)), options) : (0, type_1.CloneType)(FromSchema(T, K), options);
    }
    __name(Index, "Index");
    exports.Index = Index;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/indexed/indexed-from-mapped-key.js
var require_indexed_from_mapped_key = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/indexed/indexed-from-mapped-key.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IndexFromMappedKey = void 0;
    var indexed_1 = require_indexed();
    var index_1 = require_mapped2();
    function MappedIndexPropertyKey(T, K, options) {
      return { [K]: (0, indexed_1.Index)(T, [K], options) };
    }
    __name(MappedIndexPropertyKey, "MappedIndexPropertyKey");
    function MappedIndexPropertyKeys(T, K, options) {
      return K.reduce((Acc, L) => {
        return { ...Acc, ...MappedIndexPropertyKey(T, L, options) };
      }, {});
    }
    __name(MappedIndexPropertyKeys, "MappedIndexPropertyKeys");
    function MappedIndexProperties(T, K, options) {
      return MappedIndexPropertyKeys(T, K.keys, options);
    }
    __name(MappedIndexProperties, "MappedIndexProperties");
    function IndexFromMappedKey(T, K, options) {
      const P = MappedIndexProperties(T, K, options);
      return (0, index_1.MappedResult)(P);
    }
    __name(IndexFromMappedKey, "IndexFromMappedKey");
    exports.IndexFromMappedKey = IndexFromMappedKey;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/indexed/index.js
var require_indexed2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/indexed/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_indexed_from_mapped_key(), exports);
    __exportStar(require_indexed_from_mapped_result(), exports);
    __exportStar(require_indexed_property_keys(), exports);
    __exportStar(require_indexed(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/iterator/iterator.js
var require_iterator = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/iterator/iterator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Iterator = void 0;
    var type_1 = require_type2();
    var index_1 = require_symbols2();
    function Iterator(items, options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Iterator",
        type: "Iterator",
        items: (0, type_1.CloneType)(items)
      };
    }
    __name(Iterator, "Iterator");
    exports.Iterator = Iterator;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/iterator/index.js
var require_iterator2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/iterator/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_iterator(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/object/object.js
var require_object = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/object/object.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Object = exports._Object = void 0;
    var type_1 = require_type2();
    var index_1 = require_symbols2();
    var type_2 = require_type3();
    function _Object(properties, options = {}) {
      const propertyKeys = globalThis.Object.getOwnPropertyNames(properties);
      const optionalKeys = propertyKeys.filter((key) => (0, type_2.IsOptional)(properties[key]));
      const requiredKeys = propertyKeys.filter((name) => !optionalKeys.includes(name));
      const clonedAdditionalProperties = (0, type_2.IsSchema)(options.additionalProperties) ? { additionalProperties: (0, type_1.CloneType)(options.additionalProperties) } : {};
      const clonedProperties = propertyKeys.reduce((acc, key) => ({ ...acc, [key]: (0, type_1.CloneType)(properties[key]) }), {});
      return requiredKeys.length > 0 ? { ...options, ...clonedAdditionalProperties, [index_1.Kind]: "Object", type: "object", properties: clonedProperties, required: requiredKeys } : { ...options, ...clonedAdditionalProperties, [index_1.Kind]: "Object", type: "object", properties: clonedProperties };
    }
    __name(_Object, "_Object");
    exports._Object = _Object;
    exports.Object = _Object;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/object/index.js
var require_object2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/object/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_object(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/promise/promise.js
var require_promise = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/promise/promise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Promise = void 0;
    var type_1 = require_type2();
    var index_1 = require_symbols2();
    function Promise2(item, options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Promise",
        type: "Promise",
        item: (0, type_1.CloneType)(item)
      };
    }
    __name(Promise2, "Promise");
    exports.Promise = Promise2;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/promise/index.js
var require_promise2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/promise/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_promise(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/readonly/readonly.js
var require_readonly = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/readonly/readonly.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Readonly = void 0;
    var index_1 = require_symbols2();
    var type_1 = require_type2();
    var index_2 = require_discard2();
    var readonly_from_mapped_result_1 = require_readonly_from_mapped_result();
    var type_2 = require_type3();
    function RemoveReadonly(schema) {
      return (0, index_2.Discard)((0, type_1.CloneType)(schema), [index_1.ReadonlyKind]);
    }
    __name(RemoveReadonly, "RemoveReadonly");
    function AddReadonly(schema) {
      return { ...(0, type_1.CloneType)(schema), [index_1.ReadonlyKind]: "Readonly" };
    }
    __name(AddReadonly, "AddReadonly");
    function ReadonlyWithFlag(schema, F) {
      return F === false ? RemoveReadonly(schema) : AddReadonly(schema);
    }
    __name(ReadonlyWithFlag, "ReadonlyWithFlag");
    function Readonly(schema, enable) {
      const F = enable ?? true;
      return (0, type_2.IsMappedResult)(schema) ? (0, readonly_from_mapped_result_1.ReadonlyFromMappedResult)(schema, F) : ReadonlyWithFlag(schema, F);
    }
    __name(Readonly, "Readonly");
    exports.Readonly = Readonly;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/readonly/readonly-from-mapped-result.js
var require_readonly_from_mapped_result = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/readonly/readonly-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReadonlyFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var readonly_1 = require_readonly();
    function FromProperties(K, F) {
      return globalThis.Object.getOwnPropertyNames(K).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, readonly_1.Readonly)(K[K2], F) };
      }, {});
    }
    __name(FromProperties, "FromProperties");
    function FromMappedResult(R, F) {
      return FromProperties(R.properties, F);
    }
    __name(FromMappedResult, "FromMappedResult");
    function ReadonlyFromMappedResult(R, F) {
      const P = FromMappedResult(R, F);
      return (0, index_1.MappedResult)(P);
    }
    __name(ReadonlyFromMappedResult, "ReadonlyFromMappedResult");
    exports.ReadonlyFromMappedResult = ReadonlyFromMappedResult;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/readonly/index.js
var require_readonly2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/readonly/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_readonly_from_mapped_result(), exports);
    __exportStar(require_readonly(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/tuple/tuple.js
var require_tuple = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/tuple/tuple.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Tuple = void 0;
    var type_1 = require_type2();
    var index_1 = require_symbols2();
    function Tuple(items, options = {}) {
      const [additionalItems, minItems, maxItems] = [false, items.length, items.length];
      return items.length > 0 ? { ...options, [index_1.Kind]: "Tuple", type: "array", items: (0, type_1.CloneRest)(items), additionalItems, minItems, maxItems } : { ...options, [index_1.Kind]: "Tuple", type: "array", minItems, maxItems };
    }
    __name(Tuple, "Tuple");
    exports.Tuple = Tuple;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/tuple/index.js
var require_tuple2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/tuple/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_tuple(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/sets/set.js
var require_set = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/sets/set.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SetUnionMany = exports.SetIntersectMany = exports.SetComplement = exports.SetUnion = exports.SetIntersect = exports.SetDistinct = exports.SetIsSubset = exports.SetIncludes = void 0;
    function SetIncludes(T, S) {
      return T.includes(S);
    }
    __name(SetIncludes, "SetIncludes");
    exports.SetIncludes = SetIncludes;
    function SetIsSubset(T, S) {
      return T.every((L) => SetIncludes(S, L));
    }
    __name(SetIsSubset, "SetIsSubset");
    exports.SetIsSubset = SetIsSubset;
    function SetDistinct(T) {
      return [...new Set(T)];
    }
    __name(SetDistinct, "SetDistinct");
    exports.SetDistinct = SetDistinct;
    function SetIntersect(T, S) {
      return T.filter((L) => S.includes(L));
    }
    __name(SetIntersect, "SetIntersect");
    exports.SetIntersect = SetIntersect;
    function SetUnion(T, S) {
      return [...T, ...S];
    }
    __name(SetUnion, "SetUnion");
    exports.SetUnion = SetUnion;
    function SetComplement(T, S) {
      return T.filter((L) => !S.includes(L));
    }
    __name(SetComplement, "SetComplement");
    exports.SetComplement = SetComplement;
    function SetIntersectMany(T) {
      return T.length === 1 ? T[0] : T.reduce((Acc, L) => [...SetIntersect(Acc, L)], []);
    }
    __name(SetIntersectMany, "SetIntersectMany");
    exports.SetIntersectMany = SetIntersectMany;
    function SetUnionMany(T) {
      return T.reduce((Acc, L) => [...Acc, ...L], []);
    }
    __name(SetUnionMany, "SetUnionMany");
    exports.SetUnionMany = SetUnionMany;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/sets/index.js
var require_sets = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/sets/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_set(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/mapped/mapped.js
var require_mapped = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/mapped/mapped.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Mapped = void 0;
    var index_1 = require_symbols2();
    var type_1 = require_type2();
    var index_2 = require_discard2();
    var index_3 = require_array2();
    var index_4 = require_async_iterator2();
    var index_5 = require_constructor2();
    var index_6 = require_function2();
    var index_7 = require_indexed2();
    var index_8 = require_intersect2();
    var index_9 = require_iterator2();
    var index_10 = require_literal2();
    var index_11 = require_object2();
    var index_12 = require_optional2();
    var index_13 = require_promise2();
    var index_14 = require_readonly2();
    var index_15 = require_tuple2();
    var index_16 = require_union2();
    var index_17 = require_sets();
    var mapped_result_1 = require_mapped_result();
    var type_2 = require_type3();
    function FromMappedResult(K, P) {
      return K in P ? FromSchemaType(K, P[K]) : (0, mapped_result_1.MappedResult)(P);
    }
    __name(FromMappedResult, "FromMappedResult");
    function MappedKeyToKnownMappedResultProperties(K) {
      return { [K]: (0, index_10.Literal)(K) };
    }
    __name(MappedKeyToKnownMappedResultProperties, "MappedKeyToKnownMappedResultProperties");
    function MappedKeyToUnknownMappedResultProperties(P) {
      return P.reduce((Acc, L) => {
        return { ...Acc, [L]: (0, index_10.Literal)(L) };
      }, {});
    }
    __name(MappedKeyToUnknownMappedResultProperties, "MappedKeyToUnknownMappedResultProperties");
    function MappedKeyToMappedResultProperties(K, P) {
      return (0, index_17.SetIncludes)(P, K) ? MappedKeyToKnownMappedResultProperties(K) : MappedKeyToUnknownMappedResultProperties(P);
    }
    __name(MappedKeyToMappedResultProperties, "MappedKeyToMappedResultProperties");
    function FromMappedKey(K, P) {
      const R = MappedKeyToMappedResultProperties(K, P);
      return FromMappedResult(K, R);
    }
    __name(FromMappedKey, "FromMappedKey");
    function FromRest(K, T) {
      return T.map((L) => FromSchemaType(K, L));
    }
    __name(FromRest, "FromRest");
    function FromProperties(K, T) {
      return globalThis.Object.getOwnPropertyNames(T).reduce((Acc, K2) => {
        return { ...Acc, [K2]: FromSchemaType(K, T[K2]) };
      }, {});
    }
    __name(FromProperties, "FromProperties");
    function FromSchemaType(K, T) {
      return (
        // unevaluated modifier types
        (0, type_2.IsOptional)(T) ? (0, index_12.Optional)(FromSchemaType(K, (0, index_2.Discard)(T, [index_1.OptionalKind]))) : (0, type_2.IsReadonly)(T) ? (0, index_14.Readonly)(FromSchemaType(K, (0, index_2.Discard)(T, [index_1.ReadonlyKind]))) : (
          // unevaluated mapped types
          (0, type_2.IsMappedResult)(T) ? FromMappedResult(K, T.properties) : (0, type_2.IsMappedKey)(T) ? FromMappedKey(K, T.keys) : (
            // unevaluated types
            (0, type_2.IsConstructor)(T) ? (0, index_5.Constructor)(FromRest(K, T.parameters), FromSchemaType(K, T.returns)) : (0, type_2.IsFunction)(T) ? (0, index_6.Function)(FromRest(K, T.parameters), FromSchemaType(K, T.returns)) : (0, type_2.IsAsyncIterator)(T) ? (0, index_4.AsyncIterator)(FromSchemaType(K, T.items)) : (0, type_2.IsIterator)(T) ? (0, index_9.Iterator)(FromSchemaType(K, T.items)) : (0, type_2.IsIntersect)(T) ? (0, index_8.Intersect)(FromRest(K, T.allOf)) : (0, type_2.IsUnion)(T) ? (0, index_16.Union)(FromRest(K, T.anyOf)) : (0, type_2.IsTuple)(T) ? (0, index_15.Tuple)(FromRest(K, T.items ?? [])) : (0, type_2.IsObject)(T) ? (0, index_11.Object)(FromProperties(K, T.properties)) : (0, type_2.IsArray)(T) ? (0, index_3.Array)(FromSchemaType(K, T.items)) : (0, type_2.IsPromise)(T) ? (0, index_13.Promise)(FromSchemaType(K, T.item)) : T
          )
        )
      );
    }
    __name(FromSchemaType, "FromSchemaType");
    function FromMappedFunctionReturnType(K, T, Acc = {}) {
      return K.reduce((Acc2, L) => {
        return { ...Acc2, [L]: FromSchemaType(L, T) };
      }, {});
    }
    __name(FromMappedFunctionReturnType, "FromMappedFunctionReturnType");
    function Mapped(key, map, options = {}) {
      const K = (0, type_2.IsSchema)(key) ? (0, index_7.IndexPropertyKeys)(key) : key;
      const RT = map({ [index_1.Kind]: "MappedKey", keys: K });
      const R = FromMappedFunctionReturnType(K, RT);
      return (0, type_1.CloneType)((0, index_11.Object)(R), options);
    }
    __name(Mapped, "Mapped");
    exports.Mapped = Mapped;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/mapped/index.js
var require_mapped2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/mapped/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_mapped_key(), exports);
    __exportStar(require_mapped_result(), exports);
    __exportStar(require_mapped(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/keyof/keyof-property-keys.js
var require_keyof_property_keys = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/keyof/keyof-property-keys.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KeyOfPattern = exports.KeyOfPropertyKeys = void 0;
    var index_1 = require_sets();
    var type_1 = require_type3();
    function FromRest(T) {
      return T.reduce((Acc, L) => {
        return [...Acc, KeyOfPropertyKeys(L)];
      }, []);
    }
    __name(FromRest, "FromRest");
    function FromIntersect(T) {
      const C = FromRest(T);
      const R = (0, index_1.SetUnionMany)(C);
      return R;
    }
    __name(FromIntersect, "FromIntersect");
    function FromUnion(T) {
      const C = FromRest(T);
      const R = (0, index_1.SetIntersectMany)(C);
      return R;
    }
    __name(FromUnion, "FromUnion");
    function FromTuple(T) {
      return T.map((_, I) => I.toString());
    }
    __name(FromTuple, "FromTuple");
    function FromArray(_) {
      return ["[number]"];
    }
    __name(FromArray, "FromArray");
    function FromProperties(T) {
      return globalThis.Object.getOwnPropertyNames(T);
    }
    __name(FromProperties, "FromProperties");
    function FromPatternProperties(patternProperties) {
      if (!includePatternProperties)
        return [];
      const patternPropertyKeys = globalThis.Object.getOwnPropertyNames(patternProperties);
      return patternPropertyKeys.map((key) => {
        return key[0] === "^" && key[key.length - 1] === "$" ? key.slice(1, key.length - 1) : key;
      });
    }
    __name(FromPatternProperties, "FromPatternProperties");
    function KeyOfPropertyKeys(T) {
      return (0, type_1.IsIntersect)(T) ? FromIntersect(T.allOf) : (0, type_1.IsUnion)(T) ? FromUnion(T.anyOf) : (0, type_1.IsTuple)(T) ? FromTuple(T.items ?? []) : (0, type_1.IsArray)(T) ? FromArray(T.items) : (0, type_1.IsObject)(T) ? FromProperties(T.properties) : (0, type_1.IsRecord)(T) ? FromPatternProperties(T.patternProperties) : [];
    }
    __name(KeyOfPropertyKeys, "KeyOfPropertyKeys");
    exports.KeyOfPropertyKeys = KeyOfPropertyKeys;
    var includePatternProperties = false;
    function KeyOfPattern(schema) {
      includePatternProperties = true;
      const keys = KeyOfPropertyKeys(schema);
      includePatternProperties = false;
      const pattern = keys.map((key) => `(${key})`);
      return `^(${pattern.join("|")})$`;
    }
    __name(KeyOfPattern, "KeyOfPattern");
    exports.KeyOfPattern = KeyOfPattern;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/keyof/keyof.js
var require_keyof = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/keyof/keyof.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KeyOf = void 0;
    var index_1 = require_literal2();
    var index_2 = require_number2();
    var keyof_property_keys_1 = require_keyof_property_keys();
    var index_3 = require_union2();
    var type_1 = require_type2();
    var keyof_from_mapped_result_1 = require_keyof_from_mapped_result();
    var type_2 = require_type3();
    function FromPropertyKeys(T) {
      return T.map((L) => L === "[number]" ? (0, index_2.Number)() : (0, index_1.Literal)(L));
    }
    __name(FromPropertyKeys, "FromPropertyKeys");
    function KeyOf(T, options = {}) {
      if ((0, type_2.IsMappedResult)(T)) {
        return (0, keyof_from_mapped_result_1.KeyOfFromMappedResult)(T, options);
      } else {
        const K = (0, keyof_property_keys_1.KeyOfPropertyKeys)(T);
        const S = FromPropertyKeys(K);
        const U = (0, index_3.UnionEvaluated)(S);
        return (0, type_1.CloneType)(U, options);
      }
    }
    __name(KeyOf, "KeyOf");
    exports.KeyOf = KeyOf;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/keyof/keyof-from-mapped-result.js
var require_keyof_from_mapped_result = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/keyof/keyof-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KeyOfFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var keyof_1 = require_keyof();
    function FromProperties(K, options) {
      return globalThis.Object.getOwnPropertyNames(K).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, keyof_1.KeyOf)(K[K2], options) };
      }, {});
    }
    __name(FromProperties, "FromProperties");
    function FromMappedResult(R, options) {
      return FromProperties(R.properties, options);
    }
    __name(FromMappedResult, "FromMappedResult");
    function KeyOfFromMappedResult(R, options) {
      const P = FromMappedResult(R, options);
      return (0, index_1.MappedResult)(P);
    }
    __name(KeyOfFromMappedResult, "KeyOfFromMappedResult");
    exports.KeyOfFromMappedResult = KeyOfFromMappedResult;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/keyof/index.js
var require_keyof2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/keyof/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_keyof_from_mapped_result(), exports);
    __exportStar(require_keyof_property_keys(), exports);
    __exportStar(require_keyof(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/extends/extends-undefined.js
var require_extends_undefined = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/extends/extends-undefined.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExtendsUndefinedCheck = void 0;
    var index_1 = require_symbols2();
    function Intersect(schema) {
      return schema.allOf.every((schema2) => ExtendsUndefinedCheck(schema2));
    }
    __name(Intersect, "Intersect");
    function Union(schema) {
      return schema.anyOf.some((schema2) => ExtendsUndefinedCheck(schema2));
    }
    __name(Union, "Union");
    function Not(schema) {
      return !ExtendsUndefinedCheck(schema.not);
    }
    __name(Not, "Not");
    function ExtendsUndefinedCheck(schema) {
      return schema[index_1.Kind] === "Intersect" ? Intersect(schema) : schema[index_1.Kind] === "Union" ? Union(schema) : schema[index_1.Kind] === "Not" ? Not(schema) : schema[index_1.Kind] === "Undefined" ? true : false;
    }
    __name(ExtendsUndefinedCheck, "ExtendsUndefinedCheck");
    exports.ExtendsUndefinedCheck = ExtendsUndefinedCheck;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/errors/function.js
var require_function3 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/errors/function.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GetErrorFunction = exports.SetErrorFunction = exports.DefaultErrorFunction = void 0;
    var index_1 = require_symbols2();
    var errors_1 = require_errors();
    function DefaultErrorFunction(error) {
      switch (error.errorType) {
        case errors_1.ValueErrorType.ArrayContains:
          return "Expected array to contain at least one matching value";
        case errors_1.ValueErrorType.ArrayMaxContains:
          return `Expected array to contain no more than ${error.schema.maxContains} matching values`;
        case errors_1.ValueErrorType.ArrayMinContains:
          return `Expected array to contain at least ${error.schema.minContains} matching values`;
        case errors_1.ValueErrorType.ArrayMaxItems:
          return `Expected array length to be less or equal to ${error.schema.maxItems}`;
        case errors_1.ValueErrorType.ArrayMinItems:
          return `Expected array length to be greater or equal to ${error.schema.minItems}`;
        case errors_1.ValueErrorType.ArrayUniqueItems:
          return "Expected array elements to be unique";
        case errors_1.ValueErrorType.Array:
          return "Expected array";
        case errors_1.ValueErrorType.AsyncIterator:
          return "Expected AsyncIterator";
        case errors_1.ValueErrorType.BigIntExclusiveMaximum:
          return `Expected bigint to be less than ${error.schema.exclusiveMaximum}`;
        case errors_1.ValueErrorType.BigIntExclusiveMinimum:
          return `Expected bigint to be greater than ${error.schema.exclusiveMinimum}`;
        case errors_1.ValueErrorType.BigIntMaximum:
          return `Expected bigint to be less or equal to ${error.schema.maximum}`;
        case errors_1.ValueErrorType.BigIntMinimum:
          return `Expected bigint to be greater or equal to ${error.schema.minimum}`;
        case errors_1.ValueErrorType.BigIntMultipleOf:
          return `Expected bigint to be a multiple of ${error.schema.multipleOf}`;
        case errors_1.ValueErrorType.BigInt:
          return "Expected bigint";
        case errors_1.ValueErrorType.Boolean:
          return "Expected boolean";
        case errors_1.ValueErrorType.DateExclusiveMinimumTimestamp:
          return `Expected Date timestamp to be greater than ${error.schema.exclusiveMinimumTimestamp}`;
        case errors_1.ValueErrorType.DateExclusiveMaximumTimestamp:
          return `Expected Date timestamp to be less than ${error.schema.exclusiveMaximumTimestamp}`;
        case errors_1.ValueErrorType.DateMinimumTimestamp:
          return `Expected Date timestamp to be greater or equal to ${error.schema.minimumTimestamp}`;
        case errors_1.ValueErrorType.DateMaximumTimestamp:
          return `Expected Date timestamp to be less or equal to ${error.schema.maximumTimestamp}`;
        case errors_1.ValueErrorType.DateMultipleOfTimestamp:
          return `Expected Date timestamp to be a multiple of ${error.schema.multipleOfTimestamp}`;
        case errors_1.ValueErrorType.Date:
          return "Expected Date";
        case errors_1.ValueErrorType.Function:
          return "Expected function";
        case errors_1.ValueErrorType.IntegerExclusiveMaximum:
          return `Expected integer to be less than ${error.schema.exclusiveMaximum}`;
        case errors_1.ValueErrorType.IntegerExclusiveMinimum:
          return `Expected integer to be greater than ${error.schema.exclusiveMinimum}`;
        case errors_1.ValueErrorType.IntegerMaximum:
          return `Expected integer to be less or equal to ${error.schema.maximum}`;
        case errors_1.ValueErrorType.IntegerMinimum:
          return `Expected integer to be greater or equal to ${error.schema.minimum}`;
        case errors_1.ValueErrorType.IntegerMultipleOf:
          return `Expected integer to be a multiple of ${error.schema.multipleOf}`;
        case errors_1.ValueErrorType.Integer:
          return "Expected integer";
        case errors_1.ValueErrorType.IntersectUnevaluatedProperties:
          return "Unexpected property";
        case errors_1.ValueErrorType.Intersect:
          return "Expected all values to match";
        case errors_1.ValueErrorType.Iterator:
          return "Expected Iterator";
        case errors_1.ValueErrorType.Literal:
          return `Expected ${typeof error.schema.const === "string" ? `'${error.schema.const}'` : error.schema.const}`;
        case errors_1.ValueErrorType.Never:
          return "Never";
        case errors_1.ValueErrorType.Not:
          return "Value should not match";
        case errors_1.ValueErrorType.Null:
          return "Expected null";
        case errors_1.ValueErrorType.NumberExclusiveMaximum:
          return `Expected number to be less than ${error.schema.exclusiveMaximum}`;
        case errors_1.ValueErrorType.NumberExclusiveMinimum:
          return `Expected number to be greater than ${error.schema.exclusiveMinimum}`;
        case errors_1.ValueErrorType.NumberMaximum:
          return `Expected number to be less or equal to ${error.schema.maximum}`;
        case errors_1.ValueErrorType.NumberMinimum:
          return `Expected number to be greater or equal to ${error.schema.minimum}`;
        case errors_1.ValueErrorType.NumberMultipleOf:
          return `Expected number to be a multiple of ${error.schema.multipleOf}`;
        case errors_1.ValueErrorType.Number:
          return "Expected number";
        case errors_1.ValueErrorType.Object:
          return "Expected object";
        case errors_1.ValueErrorType.ObjectAdditionalProperties:
          return "Unexpected property";
        case errors_1.ValueErrorType.ObjectMaxProperties:
          return `Expected object to have no more than ${error.schema.maxProperties} properties`;
        case errors_1.ValueErrorType.ObjectMinProperties:
          return `Expected object to have at least ${error.schema.minProperties} properties`;
        case errors_1.ValueErrorType.ObjectRequiredProperty:
          return "Required property";
        case errors_1.ValueErrorType.Promise:
          return "Expected Promise";
        case errors_1.ValueErrorType.RegExp:
          return "Expected string to match regular expression";
        case errors_1.ValueErrorType.StringFormatUnknown:
          return `Unknown format '${error.schema.format}'`;
        case errors_1.ValueErrorType.StringFormat:
          return `Expected string to match '${error.schema.format}' format`;
        case errors_1.ValueErrorType.StringMaxLength:
          return `Expected string length less or equal to ${error.schema.maxLength}`;
        case errors_1.ValueErrorType.StringMinLength:
          return `Expected string length greater or equal to ${error.schema.minLength}`;
        case errors_1.ValueErrorType.StringPattern:
          return `Expected string to match '${error.schema.pattern}'`;
        case errors_1.ValueErrorType.String:
          return "Expected string";
        case errors_1.ValueErrorType.Symbol:
          return "Expected symbol";
        case errors_1.ValueErrorType.TupleLength:
          return `Expected tuple to have ${error.schema.maxItems || 0} elements`;
        case errors_1.ValueErrorType.Tuple:
          return "Expected tuple";
        case errors_1.ValueErrorType.Uint8ArrayMaxByteLength:
          return `Expected byte length less or equal to ${error.schema.maxByteLength}`;
        case errors_1.ValueErrorType.Uint8ArrayMinByteLength:
          return `Expected byte length greater or equal to ${error.schema.minByteLength}`;
        case errors_1.ValueErrorType.Uint8Array:
          return "Expected Uint8Array";
        case errors_1.ValueErrorType.Undefined:
          return "Expected undefined";
        case errors_1.ValueErrorType.Union:
          return "Expected union value";
        case errors_1.ValueErrorType.Void:
          return "Expected void";
        case errors_1.ValueErrorType.Kind:
          return `Expected kind '${error.schema[index_1.Kind]}'`;
        default:
          return "Unknown error type";
      }
    }
    __name(DefaultErrorFunction, "DefaultErrorFunction");
    exports.DefaultErrorFunction = DefaultErrorFunction;
    var errorFunction = DefaultErrorFunction;
    function SetErrorFunction(callback) {
      errorFunction = callback;
    }
    __name(SetErrorFunction, "SetErrorFunction");
    exports.SetErrorFunction = SetErrorFunction;
    function GetErrorFunction() {
      return errorFunction;
    }
    __name(GetErrorFunction, "GetErrorFunction");
    exports.GetErrorFunction = GetErrorFunction;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/deref/deref.js
var require_deref = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/deref/deref.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Deref = exports.TypeDereferenceError = void 0;
    var index_1 = require_error2();
    var TypeDereferenceError = class extends index_1.TypeBoxError {
      static {
        __name(this, "TypeDereferenceError");
      }
      constructor(schema) {
        super(`Unable to dereference schema with $id '${schema.$id}'`);
        this.schema = schema;
      }
    };
    exports.TypeDereferenceError = TypeDereferenceError;
    function Deref(schema, references) {
      const index = references.findIndex((target) => target.$id === schema.$ref);
      if (index === -1)
        throw new TypeDereferenceError(schema);
      return references[index];
    }
    __name(Deref, "Deref");
    exports.Deref = Deref;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/deref/index.js
var require_deref2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/deref/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_deref(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/hash/hash.js
var require_hash = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/hash/hash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Hash = exports.ValueHashError = void 0;
    var index_1 = require_guard2();
    var index_2 = require_error2();
    var ValueHashError = class extends index_2.TypeBoxError {
      static {
        __name(this, "ValueHashError");
      }
      constructor(value) {
        super(`Unable to hash value`);
        this.value = value;
      }
    };
    exports.ValueHashError = ValueHashError;
    var ByteMarker;
    (function(ByteMarker2) {
      ByteMarker2[ByteMarker2["Undefined"] = 0] = "Undefined";
      ByteMarker2[ByteMarker2["Null"] = 1] = "Null";
      ByteMarker2[ByteMarker2["Boolean"] = 2] = "Boolean";
      ByteMarker2[ByteMarker2["Number"] = 3] = "Number";
      ByteMarker2[ByteMarker2["String"] = 4] = "String";
      ByteMarker2[ByteMarker2["Object"] = 5] = "Object";
      ByteMarker2[ByteMarker2["Array"] = 6] = "Array";
      ByteMarker2[ByteMarker2["Date"] = 7] = "Date";
      ByteMarker2[ByteMarker2["Uint8Array"] = 8] = "Uint8Array";
      ByteMarker2[ByteMarker2["Symbol"] = 9] = "Symbol";
      ByteMarker2[ByteMarker2["BigInt"] = 10] = "BigInt";
    })(ByteMarker || (ByteMarker = {}));
    var Accumulator = BigInt("14695981039346656037");
    var [Prime, Size] = [BigInt("1099511628211"), BigInt("2") ** BigInt("64")];
    var Bytes = Array.from({ length: 256 }).map((_, i) => BigInt(i));
    var F64 = new Float64Array(1);
    var F64In = new DataView(F64.buffer);
    var F64Out = new Uint8Array(F64.buffer);
    function* NumberToBytes(value) {
      const byteCount = value === 0 ? 1 : Math.ceil(Math.floor(Math.log2(value) + 1) / 8);
      for (let i = 0; i < byteCount; i++) {
        yield value >> 8 * (byteCount - 1 - i) & 255;
      }
    }
    __name(NumberToBytes, "NumberToBytes");
    function ArrayType(value) {
      FNV1A64(ByteMarker.Array);
      for (const item of value) {
        Visit(item);
      }
    }
    __name(ArrayType, "ArrayType");
    function BooleanType(value) {
      FNV1A64(ByteMarker.Boolean);
      FNV1A64(value ? 1 : 0);
    }
    __name(BooleanType, "BooleanType");
    function BigIntType(value) {
      FNV1A64(ByteMarker.BigInt);
      F64In.setBigInt64(0, value);
      for (const byte of F64Out) {
        FNV1A64(byte);
      }
    }
    __name(BigIntType, "BigIntType");
    function DateType(value) {
      FNV1A64(ByteMarker.Date);
      Visit(value.getTime());
    }
    __name(DateType, "DateType");
    function NullType(value) {
      FNV1A64(ByteMarker.Null);
    }
    __name(NullType, "NullType");
    function NumberType(value) {
      FNV1A64(ByteMarker.Number);
      F64In.setFloat64(0, value);
      for (const byte of F64Out) {
        FNV1A64(byte);
      }
    }
    __name(NumberType, "NumberType");
    function ObjectType(value) {
      FNV1A64(ByteMarker.Object);
      for (const key of globalThis.Object.keys(value).sort()) {
        Visit(key);
        Visit(value[key]);
      }
    }
    __name(ObjectType, "ObjectType");
    function StringType(value) {
      FNV1A64(ByteMarker.String);
      for (let i = 0; i < value.length; i++) {
        for (const byte of NumberToBytes(value.charCodeAt(i))) {
          FNV1A64(byte);
        }
      }
    }
    __name(StringType, "StringType");
    function SymbolType(value) {
      FNV1A64(ByteMarker.Symbol);
      Visit(value.description);
    }
    __name(SymbolType, "SymbolType");
    function Uint8ArrayType(value) {
      FNV1A64(ByteMarker.Uint8Array);
      for (let i = 0; i < value.length; i++) {
        FNV1A64(value[i]);
      }
    }
    __name(Uint8ArrayType, "Uint8ArrayType");
    function UndefinedType(value) {
      return FNV1A64(ByteMarker.Undefined);
    }
    __name(UndefinedType, "UndefinedType");
    function Visit(value) {
      if ((0, index_1.IsArray)(value))
        return ArrayType(value);
      if ((0, index_1.IsBoolean)(value))
        return BooleanType(value);
      if ((0, index_1.IsBigInt)(value))
        return BigIntType(value);
      if ((0, index_1.IsDate)(value))
        return DateType(value);
      if ((0, index_1.IsNull)(value))
        return NullType(value);
      if ((0, index_1.IsNumber)(value))
        return NumberType(value);
      if ((0, index_1.IsPlainObject)(value))
        return ObjectType(value);
      if ((0, index_1.IsString)(value))
        return StringType(value);
      if ((0, index_1.IsSymbol)(value))
        return SymbolType(value);
      if ((0, index_1.IsUint8Array)(value))
        return Uint8ArrayType(value);
      if ((0, index_1.IsUndefined)(value))
        return UndefinedType(value);
      throw new ValueHashError(value);
    }
    __name(Visit, "Visit");
    function FNV1A64(byte) {
      Accumulator = Accumulator ^ Bytes[byte];
      Accumulator = Accumulator * Prime % Size;
    }
    __name(FNV1A64, "FNV1A64");
    function Hash(value) {
      Accumulator = BigInt("14695981039346656037");
      Visit(value);
      return Accumulator;
    }
    __name(Hash, "Hash");
    exports.Hash = Hash;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/hash/index.js
var require_hash2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/hash/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_hash(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/errors/errors.js
var require_errors = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/errors/errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Errors = exports.ValueErrorIterator = exports.ValueErrorsUnknownTypeError = exports.ValueErrorType = void 0;
    var index_1 = require_system2();
    var index_2 = require_keyof2();
    var index_3 = require_registry();
    var extends_undefined_1 = require_extends_undefined();
    var function_1 = require_function3();
    var index_4 = require_error2();
    var index_5 = require_deref2();
    var index_6 = require_hash2();
    var index_7 = require_symbols2();
    var index_8 = require_never2();
    var index_9 = require_guard2();
    var ValueErrorType;
    (function(ValueErrorType2) {
      ValueErrorType2[ValueErrorType2["ArrayContains"] = 0] = "ArrayContains";
      ValueErrorType2[ValueErrorType2["ArrayMaxContains"] = 1] = "ArrayMaxContains";
      ValueErrorType2[ValueErrorType2["ArrayMaxItems"] = 2] = "ArrayMaxItems";
      ValueErrorType2[ValueErrorType2["ArrayMinContains"] = 3] = "ArrayMinContains";
      ValueErrorType2[ValueErrorType2["ArrayMinItems"] = 4] = "ArrayMinItems";
      ValueErrorType2[ValueErrorType2["ArrayUniqueItems"] = 5] = "ArrayUniqueItems";
      ValueErrorType2[ValueErrorType2["Array"] = 6] = "Array";
      ValueErrorType2[ValueErrorType2["AsyncIterator"] = 7] = "AsyncIterator";
      ValueErrorType2[ValueErrorType2["BigIntExclusiveMaximum"] = 8] = "BigIntExclusiveMaximum";
      ValueErrorType2[ValueErrorType2["BigIntExclusiveMinimum"] = 9] = "BigIntExclusiveMinimum";
      ValueErrorType2[ValueErrorType2["BigIntMaximum"] = 10] = "BigIntMaximum";
      ValueErrorType2[ValueErrorType2["BigIntMinimum"] = 11] = "BigIntMinimum";
      ValueErrorType2[ValueErrorType2["BigIntMultipleOf"] = 12] = "BigIntMultipleOf";
      ValueErrorType2[ValueErrorType2["BigInt"] = 13] = "BigInt";
      ValueErrorType2[ValueErrorType2["Boolean"] = 14] = "Boolean";
      ValueErrorType2[ValueErrorType2["DateExclusiveMaximumTimestamp"] = 15] = "DateExclusiveMaximumTimestamp";
      ValueErrorType2[ValueErrorType2["DateExclusiveMinimumTimestamp"] = 16] = "DateExclusiveMinimumTimestamp";
      ValueErrorType2[ValueErrorType2["DateMaximumTimestamp"] = 17] = "DateMaximumTimestamp";
      ValueErrorType2[ValueErrorType2["DateMinimumTimestamp"] = 18] = "DateMinimumTimestamp";
      ValueErrorType2[ValueErrorType2["DateMultipleOfTimestamp"] = 19] = "DateMultipleOfTimestamp";
      ValueErrorType2[ValueErrorType2["Date"] = 20] = "Date";
      ValueErrorType2[ValueErrorType2["Function"] = 21] = "Function";
      ValueErrorType2[ValueErrorType2["IntegerExclusiveMaximum"] = 22] = "IntegerExclusiveMaximum";
      ValueErrorType2[ValueErrorType2["IntegerExclusiveMinimum"] = 23] = "IntegerExclusiveMinimum";
      ValueErrorType2[ValueErrorType2["IntegerMaximum"] = 24] = "IntegerMaximum";
      ValueErrorType2[ValueErrorType2["IntegerMinimum"] = 25] = "IntegerMinimum";
      ValueErrorType2[ValueErrorType2["IntegerMultipleOf"] = 26] = "IntegerMultipleOf";
      ValueErrorType2[ValueErrorType2["Integer"] = 27] = "Integer";
      ValueErrorType2[ValueErrorType2["IntersectUnevaluatedProperties"] = 28] = "IntersectUnevaluatedProperties";
      ValueErrorType2[ValueErrorType2["Intersect"] = 29] = "Intersect";
      ValueErrorType2[ValueErrorType2["Iterator"] = 30] = "Iterator";
      ValueErrorType2[ValueErrorType2["Kind"] = 31] = "Kind";
      ValueErrorType2[ValueErrorType2["Literal"] = 32] = "Literal";
      ValueErrorType2[ValueErrorType2["Never"] = 33] = "Never";
      ValueErrorType2[ValueErrorType2["Not"] = 34] = "Not";
      ValueErrorType2[ValueErrorType2["Null"] = 35] = "Null";
      ValueErrorType2[ValueErrorType2["NumberExclusiveMaximum"] = 36] = "NumberExclusiveMaximum";
      ValueErrorType2[ValueErrorType2["NumberExclusiveMinimum"] = 37] = "NumberExclusiveMinimum";
      ValueErrorType2[ValueErrorType2["NumberMaximum"] = 38] = "NumberMaximum";
      ValueErrorType2[ValueErrorType2["NumberMinimum"] = 39] = "NumberMinimum";
      ValueErrorType2[ValueErrorType2["NumberMultipleOf"] = 40] = "NumberMultipleOf";
      ValueErrorType2[ValueErrorType2["Number"] = 41] = "Number";
      ValueErrorType2[ValueErrorType2["ObjectAdditionalProperties"] = 42] = "ObjectAdditionalProperties";
      ValueErrorType2[ValueErrorType2["ObjectMaxProperties"] = 43] = "ObjectMaxProperties";
      ValueErrorType2[ValueErrorType2["ObjectMinProperties"] = 44] = "ObjectMinProperties";
      ValueErrorType2[ValueErrorType2["ObjectRequiredProperty"] = 45] = "ObjectRequiredProperty";
      ValueErrorType2[ValueErrorType2["Object"] = 46] = "Object";
      ValueErrorType2[ValueErrorType2["Promise"] = 47] = "Promise";
      ValueErrorType2[ValueErrorType2["RegExp"] = 48] = "RegExp";
      ValueErrorType2[ValueErrorType2["StringFormatUnknown"] = 49] = "StringFormatUnknown";
      ValueErrorType2[ValueErrorType2["StringFormat"] = 50] = "StringFormat";
      ValueErrorType2[ValueErrorType2["StringMaxLength"] = 51] = "StringMaxLength";
      ValueErrorType2[ValueErrorType2["StringMinLength"] = 52] = "StringMinLength";
      ValueErrorType2[ValueErrorType2["StringPattern"] = 53] = "StringPattern";
      ValueErrorType2[ValueErrorType2["String"] = 54] = "String";
      ValueErrorType2[ValueErrorType2["Symbol"] = 55] = "Symbol";
      ValueErrorType2[ValueErrorType2["TupleLength"] = 56] = "TupleLength";
      ValueErrorType2[ValueErrorType2["Tuple"] = 57] = "Tuple";
      ValueErrorType2[ValueErrorType2["Uint8ArrayMaxByteLength"] = 58] = "Uint8ArrayMaxByteLength";
      ValueErrorType2[ValueErrorType2["Uint8ArrayMinByteLength"] = 59] = "Uint8ArrayMinByteLength";
      ValueErrorType2[ValueErrorType2["Uint8Array"] = 60] = "Uint8Array";
      ValueErrorType2[ValueErrorType2["Undefined"] = 61] = "Undefined";
      ValueErrorType2[ValueErrorType2["Union"] = 62] = "Union";
      ValueErrorType2[ValueErrorType2["Void"] = 63] = "Void";
    })(ValueErrorType || (exports.ValueErrorType = ValueErrorType = {}));
    var ValueErrorsUnknownTypeError = class extends index_4.TypeBoxError {
      static {
        __name(this, "ValueErrorsUnknownTypeError");
      }
      constructor(schema) {
        super("Unknown type");
        this.schema = schema;
      }
    };
    exports.ValueErrorsUnknownTypeError = ValueErrorsUnknownTypeError;
    function EscapeKey(key) {
      return key.replace(/~/g, "~0").replace(/\//g, "~1");
    }
    __name(EscapeKey, "EscapeKey");
    function IsDefined(value) {
      return value !== void 0;
    }
    __name(IsDefined, "IsDefined");
    var ValueErrorIterator = class {
      static {
        __name(this, "ValueErrorIterator");
      }
      constructor(iterator) {
        this.iterator = iterator;
      }
      [Symbol.iterator]() {
        return this.iterator;
      }
      /** Returns the first value error or undefined if no errors */
      First() {
        const next = this.iterator.next();
        return next.done ? void 0 : next.value;
      }
    };
    exports.ValueErrorIterator = ValueErrorIterator;
    function Create(errorType, schema, path, value) {
      return { type: errorType, schema, path, value, message: (0, function_1.GetErrorFunction)()({ errorType, path, schema, value }) };
    }
    __name(Create, "Create");
    function* FromAny(schema, references, path, value) {
    }
    __name(FromAny, "FromAny");
    function* FromArray(schema, references, path, value) {
      if (!(0, index_9.IsArray)(value)) {
        return yield Create(ValueErrorType.Array, schema, path, value);
      }
      if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
        yield Create(ValueErrorType.ArrayMinItems, schema, path, value);
      }
      if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
        yield Create(ValueErrorType.ArrayMaxItems, schema, path, value);
      }
      for (let i = 0; i < value.length; i++) {
        yield* Visit(schema.items, references, `${path}/${i}`, value[i]);
      }
      if (schema.uniqueItems === true && !function() {
        const set = /* @__PURE__ */ new Set();
        for (const element of value) {
          const hashed = (0, index_6.Hash)(element);
          if (set.has(hashed)) {
            return false;
          } else {
            set.add(hashed);
          }
        }
        return true;
      }()) {
        yield Create(ValueErrorType.ArrayUniqueItems, schema, path, value);
      }
      if (!(IsDefined(schema.contains) || IsDefined(schema.minContains) || IsDefined(schema.maxContains))) {
        return;
      }
      const containsSchema = IsDefined(schema.contains) ? schema.contains : (0, index_8.Never)();
      const containsCount = value.reduce((acc, value2, index) => Visit(containsSchema, references, `${path}${index}`, value2).next().done === true ? acc + 1 : acc, 0);
      if (containsCount === 0) {
        yield Create(ValueErrorType.ArrayContains, schema, path, value);
      }
      if ((0, index_9.IsNumber)(schema.minContains) && containsCount < schema.minContains) {
        yield Create(ValueErrorType.ArrayMinContains, schema, path, value);
      }
      if ((0, index_9.IsNumber)(schema.maxContains) && containsCount > schema.maxContains) {
        yield Create(ValueErrorType.ArrayMaxContains, schema, path, value);
      }
    }
    __name(FromArray, "FromArray");
    function* FromAsyncIterator(schema, references, path, value) {
      if (!(0, index_9.IsAsyncIterator)(value))
        yield Create(ValueErrorType.AsyncIterator, schema, path, value);
    }
    __name(FromAsyncIterator, "FromAsyncIterator");
    function* FromBigInt(schema, references, path, value) {
      if (!(0, index_9.IsBigInt)(value))
        return yield Create(ValueErrorType.BigInt, schema, path, value);
      if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        yield Create(ValueErrorType.BigIntExclusiveMaximum, schema, path, value);
      }
      if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        yield Create(ValueErrorType.BigIntExclusiveMinimum, schema, path, value);
      }
      if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        yield Create(ValueErrorType.BigIntMaximum, schema, path, value);
      }
      if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        yield Create(ValueErrorType.BigIntMinimum, schema, path, value);
      }
      if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
        yield Create(ValueErrorType.BigIntMultipleOf, schema, path, value);
      }
    }
    __name(FromBigInt, "FromBigInt");
    function* FromBoolean(schema, references, path, value) {
      if (!(0, index_9.IsBoolean)(value))
        yield Create(ValueErrorType.Boolean, schema, path, value);
    }
    __name(FromBoolean, "FromBoolean");
    function* FromConstructor(schema, references, path, value) {
      yield* Visit(schema.returns, references, path, value.prototype);
    }
    __name(FromConstructor, "FromConstructor");
    function* FromDate(schema, references, path, value) {
      if (!(0, index_9.IsDate)(value))
        return yield Create(ValueErrorType.Date, schema, path, value);
      if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
        yield Create(ValueErrorType.DateExclusiveMaximumTimestamp, schema, path, value);
      }
      if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
        yield Create(ValueErrorType.DateExclusiveMinimumTimestamp, schema, path, value);
      }
      if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
        yield Create(ValueErrorType.DateMaximumTimestamp, schema, path, value);
      }
      if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
        yield Create(ValueErrorType.DateMinimumTimestamp, schema, path, value);
      }
      if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
        yield Create(ValueErrorType.DateMultipleOfTimestamp, schema, path, value);
      }
    }
    __name(FromDate, "FromDate");
    function* FromFunction(schema, references, path, value) {
      if (!(0, index_9.IsFunction)(value))
        yield Create(ValueErrorType.Function, schema, path, value);
    }
    __name(FromFunction, "FromFunction");
    function* FromInteger(schema, references, path, value) {
      if (!(0, index_9.IsInteger)(value))
        return yield Create(ValueErrorType.Integer, schema, path, value);
      if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        yield Create(ValueErrorType.IntegerExclusiveMaximum, schema, path, value);
      }
      if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        yield Create(ValueErrorType.IntegerExclusiveMinimum, schema, path, value);
      }
      if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        yield Create(ValueErrorType.IntegerMaximum, schema, path, value);
      }
      if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        yield Create(ValueErrorType.IntegerMinimum, schema, path, value);
      }
      if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        yield Create(ValueErrorType.IntegerMultipleOf, schema, path, value);
      }
    }
    __name(FromInteger, "FromInteger");
    function* FromIntersect(schema, references, path, value) {
      for (const inner of schema.allOf) {
        const next = Visit(inner, references, path, value).next();
        if (!next.done) {
          yield Create(ValueErrorType.Intersect, schema, path, value);
          yield next.value;
        }
      }
      if (schema.unevaluatedProperties === false) {
        const keyCheck = new RegExp((0, index_2.KeyOfPattern)(schema));
        for (const valueKey of Object.getOwnPropertyNames(value)) {
          if (!keyCheck.test(valueKey)) {
            yield Create(ValueErrorType.IntersectUnevaluatedProperties, schema, `${path}/${valueKey}`, value);
          }
        }
      }
      if (typeof schema.unevaluatedProperties === "object") {
        const keyCheck = new RegExp((0, index_2.KeyOfPattern)(schema));
        for (const valueKey of Object.getOwnPropertyNames(value)) {
          if (!keyCheck.test(valueKey)) {
            const next = Visit(schema.unevaluatedProperties, references, `${path}/${valueKey}`, value[valueKey]).next();
            if (!next.done)
              yield next.value;
          }
        }
      }
    }
    __name(FromIntersect, "FromIntersect");
    function* FromIterator(schema, references, path, value) {
      if (!(0, index_9.IsIterator)(value))
        yield Create(ValueErrorType.Iterator, schema, path, value);
    }
    __name(FromIterator, "FromIterator");
    function* FromLiteral(schema, references, path, value) {
      if (!(value === schema.const))
        yield Create(ValueErrorType.Literal, schema, path, value);
    }
    __name(FromLiteral, "FromLiteral");
    function* FromNever(schema, references, path, value) {
      yield Create(ValueErrorType.Never, schema, path, value);
    }
    __name(FromNever, "FromNever");
    function* FromNot(schema, references, path, value) {
      if (Visit(schema.not, references, path, value).next().done === true)
        yield Create(ValueErrorType.Not, schema, path, value);
    }
    __name(FromNot, "FromNot");
    function* FromNull(schema, references, path, value) {
      if (!(0, index_9.IsNull)(value))
        yield Create(ValueErrorType.Null, schema, path, value);
    }
    __name(FromNull, "FromNull");
    function* FromNumber(schema, references, path, value) {
      if (!index_1.TypeSystemPolicy.IsNumberLike(value))
        return yield Create(ValueErrorType.Number, schema, path, value);
      if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        yield Create(ValueErrorType.NumberExclusiveMaximum, schema, path, value);
      }
      if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        yield Create(ValueErrorType.NumberExclusiveMinimum, schema, path, value);
      }
      if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        yield Create(ValueErrorType.NumberMaximum, schema, path, value);
      }
      if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        yield Create(ValueErrorType.NumberMinimum, schema, path, value);
      }
      if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        yield Create(ValueErrorType.NumberMultipleOf, schema, path, value);
      }
    }
    __name(FromNumber, "FromNumber");
    function* FromObject(schema, references, path, value) {
      if (!index_1.TypeSystemPolicy.IsObjectLike(value))
        return yield Create(ValueErrorType.Object, schema, path, value);
      if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
      }
      if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
      }
      const requiredKeys = Array.isArray(schema.required) ? schema.required : [];
      const knownKeys = Object.getOwnPropertyNames(schema.properties);
      const unknownKeys = Object.getOwnPropertyNames(value);
      for (const requiredKey of requiredKeys) {
        if (unknownKeys.includes(requiredKey))
          continue;
        yield Create(ValueErrorType.ObjectRequiredProperty, schema.properties[requiredKey], `${path}/${EscapeKey(requiredKey)}`, void 0);
      }
      if (schema.additionalProperties === false) {
        for (const valueKey of unknownKeys) {
          if (!knownKeys.includes(valueKey)) {
            yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
          }
        }
      }
      if (typeof schema.additionalProperties === "object") {
        for (const valueKey of unknownKeys) {
          if (knownKeys.includes(valueKey))
            continue;
          yield* Visit(schema.additionalProperties, references, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
        }
      }
      for (const knownKey of knownKeys) {
        const property = schema.properties[knownKey];
        if (schema.required && schema.required.includes(knownKey)) {
          yield* Visit(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
          if ((0, extends_undefined_1.ExtendsUndefinedCheck)(schema) && !(knownKey in value)) {
            yield Create(ValueErrorType.ObjectRequiredProperty, property, `${path}/${EscapeKey(knownKey)}`, void 0);
          }
        } else {
          if (index_1.TypeSystemPolicy.IsExactOptionalProperty(value, knownKey)) {
            yield* Visit(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
          }
        }
      }
    }
    __name(FromObject, "FromObject");
    function* FromPromise(schema, references, path, value) {
      if (!(0, index_9.IsPromise)(value))
        yield Create(ValueErrorType.Promise, schema, path, value);
    }
    __name(FromPromise, "FromPromise");
    function* FromRecord(schema, references, path, value) {
      if (!index_1.TypeSystemPolicy.IsRecordLike(value))
        return yield Create(ValueErrorType.Object, schema, path, value);
      if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
      }
      if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
      }
      const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
      const regex = new RegExp(patternKey);
      for (const [propertyKey, propertyValue] of Object.entries(value)) {
        if (regex.test(propertyKey))
          yield* Visit(patternSchema, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
      }
      if (typeof schema.additionalProperties === "object") {
        for (const [propertyKey, propertyValue] of Object.entries(value)) {
          if (!regex.test(propertyKey))
            yield* Visit(schema.additionalProperties, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
        }
      }
      if (schema.additionalProperties === false) {
        for (const [propertyKey, propertyValue] of Object.entries(value)) {
          if (regex.test(propertyKey))
            continue;
          return yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
        }
      }
    }
    __name(FromRecord, "FromRecord");
    function* FromRef(schema, references, path, value) {
      yield* Visit((0, index_5.Deref)(schema, references), references, path, value);
    }
    __name(FromRef, "FromRef");
    function* FromRegExp(schema, references, path, value) {
      const regex = new RegExp(schema.source, schema.flags);
      if (!regex.test(value)) {
        return yield Create(ValueErrorType.RegExp, schema, path, value);
      }
    }
    __name(FromRegExp, "FromRegExp");
    function* FromString(schema, references, path, value) {
      if (!(0, index_9.IsString)(value))
        return yield Create(ValueErrorType.String, schema, path, value);
      if (IsDefined(schema.minLength) && !(value.length >= schema.minLength)) {
        yield Create(ValueErrorType.StringMinLength, schema, path, value);
      }
      if (IsDefined(schema.maxLength) && !(value.length <= schema.maxLength)) {
        yield Create(ValueErrorType.StringMaxLength, schema, path, value);
      }
      if ((0, index_9.IsString)(schema.pattern)) {
        const regex = new RegExp(schema.pattern);
        if (!regex.test(value)) {
          yield Create(ValueErrorType.StringPattern, schema, path, value);
        }
      }
      if ((0, index_9.IsString)(schema.format)) {
        if (!index_3.FormatRegistry.Has(schema.format)) {
          yield Create(ValueErrorType.StringFormatUnknown, schema, path, value);
        } else {
          const format = index_3.FormatRegistry.Get(schema.format);
          if (!format(value)) {
            yield Create(ValueErrorType.StringFormat, schema, path, value);
          }
        }
      }
    }
    __name(FromString, "FromString");
    function* FromSymbol(schema, references, path, value) {
      if (!(0, index_9.IsSymbol)(value))
        yield Create(ValueErrorType.Symbol, schema, path, value);
    }
    __name(FromSymbol, "FromSymbol");
    function* FromTemplateLiteral(schema, references, path, value) {
      if (!(0, index_9.IsString)(value))
        return yield Create(ValueErrorType.String, schema, path, value);
      const regex = new RegExp(schema.pattern);
      if (!regex.test(value)) {
        yield Create(ValueErrorType.StringPattern, schema, path, value);
      }
    }
    __name(FromTemplateLiteral, "FromTemplateLiteral");
    function* FromThis(schema, references, path, value) {
      yield* Visit((0, index_5.Deref)(schema, references), references, path, value);
    }
    __name(FromThis, "FromThis");
    function* FromTuple(schema, references, path, value) {
      if (!(0, index_9.IsArray)(value))
        return yield Create(ValueErrorType.Tuple, schema, path, value);
      if (schema.items === void 0 && !(value.length === 0)) {
        return yield Create(ValueErrorType.TupleLength, schema, path, value);
      }
      if (!(value.length === schema.maxItems)) {
        return yield Create(ValueErrorType.TupleLength, schema, path, value);
      }
      if (!schema.items) {
        return;
      }
      for (let i = 0; i < schema.items.length; i++) {
        yield* Visit(schema.items[i], references, `${path}/${i}`, value[i]);
      }
    }
    __name(FromTuple, "FromTuple");
    function* FromUndefined(schema, references, path, value) {
      if (!(0, index_9.IsUndefined)(value))
        yield Create(ValueErrorType.Undefined, schema, path, value);
    }
    __name(FromUndefined, "FromUndefined");
    function* FromUnion(schema, references, path, value) {
      let count = 0;
      for (const subschema of schema.anyOf) {
        const errors = [...Visit(subschema, references, path, value)];
        if (errors.length === 0)
          return;
        count += errors.length;
      }
      if (count > 0) {
        yield Create(ValueErrorType.Union, schema, path, value);
      }
    }
    __name(FromUnion, "FromUnion");
    function* FromUint8Array(schema, references, path, value) {
      if (!(0, index_9.IsUint8Array)(value))
        return yield Create(ValueErrorType.Uint8Array, schema, path, value);
      if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
        yield Create(ValueErrorType.Uint8ArrayMaxByteLength, schema, path, value);
      }
      if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
        yield Create(ValueErrorType.Uint8ArrayMinByteLength, schema, path, value);
      }
    }
    __name(FromUint8Array, "FromUint8Array");
    function* FromUnknown(schema, references, path, value) {
    }
    __name(FromUnknown, "FromUnknown");
    function* FromVoid(schema, references, path, value) {
      if (!index_1.TypeSystemPolicy.IsVoidLike(value))
        yield Create(ValueErrorType.Void, schema, path, value);
    }
    __name(FromVoid, "FromVoid");
    function* FromKind(schema, references, path, value) {
      const check = index_3.TypeRegistry.Get(schema[index_7.Kind]);
      if (!check(schema, value))
        yield Create(ValueErrorType.Kind, schema, path, value);
    }
    __name(FromKind, "FromKind");
    function* Visit(schema, references, path, value) {
      const references_ = IsDefined(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema_[index_7.Kind]) {
        case "Any":
          return yield* FromAny(schema_, references_, path, value);
        case "Array":
          return yield* FromArray(schema_, references_, path, value);
        case "AsyncIterator":
          return yield* FromAsyncIterator(schema_, references_, path, value);
        case "BigInt":
          return yield* FromBigInt(schema_, references_, path, value);
        case "Boolean":
          return yield* FromBoolean(schema_, references_, path, value);
        case "Constructor":
          return yield* FromConstructor(schema_, references_, path, value);
        case "Date":
          return yield* FromDate(schema_, references_, path, value);
        case "Function":
          return yield* FromFunction(schema_, references_, path, value);
        case "Integer":
          return yield* FromInteger(schema_, references_, path, value);
        case "Intersect":
          return yield* FromIntersect(schema_, references_, path, value);
        case "Iterator":
          return yield* FromIterator(schema_, references_, path, value);
        case "Literal":
          return yield* FromLiteral(schema_, references_, path, value);
        case "Never":
          return yield* FromNever(schema_, references_, path, value);
        case "Not":
          return yield* FromNot(schema_, references_, path, value);
        case "Null":
          return yield* FromNull(schema_, references_, path, value);
        case "Number":
          return yield* FromNumber(schema_, references_, path, value);
        case "Object":
          return yield* FromObject(schema_, references_, path, value);
        case "Promise":
          return yield* FromPromise(schema_, references_, path, value);
        case "Record":
          return yield* FromRecord(schema_, references_, path, value);
        case "Ref":
          return yield* FromRef(schema_, references_, path, value);
        case "RegExp":
          return yield* FromRegExp(schema_, references_, path, value);
        case "String":
          return yield* FromString(schema_, references_, path, value);
        case "Symbol":
          return yield* FromSymbol(schema_, references_, path, value);
        case "TemplateLiteral":
          return yield* FromTemplateLiteral(schema_, references_, path, value);
        case "This":
          return yield* FromThis(schema_, references_, path, value);
        case "Tuple":
          return yield* FromTuple(schema_, references_, path, value);
        case "Undefined":
          return yield* FromUndefined(schema_, references_, path, value);
        case "Union":
          return yield* FromUnion(schema_, references_, path, value);
        case "Uint8Array":
          return yield* FromUint8Array(schema_, references_, path, value);
        case "Unknown":
          return yield* FromUnknown(schema_, references_, path, value);
        case "Void":
          return yield* FromVoid(schema_, references_, path, value);
        default:
          if (!index_3.TypeRegistry.Has(schema_[index_7.Kind]))
            throw new ValueErrorsUnknownTypeError(schema);
          return yield* FromKind(schema_, references_, path, value);
      }
    }
    __name(Visit, "Visit");
    function Errors(...args) {
      const iterator = args.length === 3 ? Visit(args[0], args[1], "", args[2]) : Visit(args[0], [], "", args[1]);
      return new ValueErrorIterator(iterator);
    }
    __name(Errors, "Errors");
    exports.Errors = Errors;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/errors/index.js
var require_errors2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/errors/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SetErrorFunction = exports.GetErrorFunction = exports.DefaultErrorFunction = exports.ValueErrorsUnknownTypeError = exports.ValueErrorType = exports.ValueErrorIterator = exports.Errors = void 0;
    var errors_1 = require_errors();
    Object.defineProperty(exports, "Errors", { enumerable: true, get: function() {
      return errors_1.Errors;
    } });
    Object.defineProperty(exports, "ValueErrorIterator", { enumerable: true, get: function() {
      return errors_1.ValueErrorIterator;
    } });
    Object.defineProperty(exports, "ValueErrorType", { enumerable: true, get: function() {
      return errors_1.ValueErrorType;
    } });
    Object.defineProperty(exports, "ValueErrorsUnknownTypeError", { enumerable: true, get: function() {
      return errors_1.ValueErrorsUnknownTypeError;
    } });
    var function_1 = require_function3();
    Object.defineProperty(exports, "DefaultErrorFunction", { enumerable: true, get: function() {
      return function_1.DefaultErrorFunction;
    } });
    Object.defineProperty(exports, "GetErrorFunction", { enumerable: true, get: function() {
      return function_1.GetErrorFunction;
    } });
    Object.defineProperty(exports, "SetErrorFunction", { enumerable: true, get: function() {
      return function_1.SetErrorFunction;
    } });
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/any/any.js
var require_any = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/any/any.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Any = void 0;
    var index_1 = require_symbols2();
    function Any(options = {}) {
      return { ...options, [index_1.Kind]: "Any" };
    }
    __name(Any, "Any");
    exports.Any = Any;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/any/index.js
var require_any2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/any/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_any(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/unknown/unknown.js
var require_unknown = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/unknown/unknown.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Unknown = void 0;
    var index_1 = require_symbols2();
    function Unknown(options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Unknown"
      };
    }
    __name(Unknown, "Unknown");
    exports.Unknown = Unknown;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/unknown/index.js
var require_unknown2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/unknown/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_unknown(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/guard/index.js
var require_guard3 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/guard/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValueGuard = exports.TypeGuard = void 0;
    exports.TypeGuard = require_type3();
    exports.ValueGuard = require_value();
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/extends/extends-check.js
var require_extends_check = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/extends/extends-check.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExtendsCheck = exports.ExtendsResult = exports.ExtendsResolverError = void 0;
    var index_1 = require_any2();
    var index_2 = require_function2();
    var index_3 = require_number2();
    var index_4 = require_string2();
    var index_5 = require_unknown2();
    var index_6 = require_template_literal2();
    var index_7 = require_patterns2();
    var index_8 = require_symbols2();
    var index_9 = require_error2();
    var index_10 = require_guard3();
    var ExtendsResolverError = class extends index_9.TypeBoxError {
      static {
        __name(this, "ExtendsResolverError");
      }
    };
    exports.ExtendsResolverError = ExtendsResolverError;
    var ExtendsResult;
    (function(ExtendsResult2) {
      ExtendsResult2[ExtendsResult2["Union"] = 0] = "Union";
      ExtendsResult2[ExtendsResult2["True"] = 1] = "True";
      ExtendsResult2[ExtendsResult2["False"] = 2] = "False";
    })(ExtendsResult || (exports.ExtendsResult = ExtendsResult = {}));
    function IntoBooleanResult(result) {
      return result === ExtendsResult.False ? result : ExtendsResult.True;
    }
    __name(IntoBooleanResult, "IntoBooleanResult");
    function Throw(message) {
      throw new ExtendsResolverError(message);
    }
    __name(Throw, "Throw");
    function IsStructuralRight(right) {
      return index_10.TypeGuard.IsNever(right) || index_10.TypeGuard.IsIntersect(right) || index_10.TypeGuard.IsUnion(right) || index_10.TypeGuard.IsUnknown(right) || index_10.TypeGuard.IsAny(right);
    }
    __name(IsStructuralRight, "IsStructuralRight");
    function StructuralRight(left, right) {
      return index_10.TypeGuard.IsNever(right) ? FromNeverRight(left, right) : index_10.TypeGuard.IsIntersect(right) ? FromIntersectRight(left, right) : index_10.TypeGuard.IsUnion(right) ? FromUnionRight(left, right) : index_10.TypeGuard.IsUnknown(right) ? FromUnknownRight(left, right) : index_10.TypeGuard.IsAny(right) ? FromAnyRight(left, right) : Throw("StructuralRight");
    }
    __name(StructuralRight, "StructuralRight");
    function FromAnyRight(left, right) {
      return ExtendsResult.True;
    }
    __name(FromAnyRight, "FromAnyRight");
    function FromAny(left, right) {
      return index_10.TypeGuard.IsIntersect(right) ? FromIntersectRight(left, right) : index_10.TypeGuard.IsUnion(right) && right.anyOf.some((schema) => index_10.TypeGuard.IsAny(schema) || index_10.TypeGuard.IsUnknown(schema)) ? ExtendsResult.True : index_10.TypeGuard.IsUnion(right) ? ExtendsResult.Union : index_10.TypeGuard.IsUnknown(right) ? ExtendsResult.True : index_10.TypeGuard.IsAny(right) ? ExtendsResult.True : ExtendsResult.Union;
    }
    __name(FromAny, "FromAny");
    function FromArrayRight(left, right) {
      return index_10.TypeGuard.IsUnknown(left) ? ExtendsResult.False : index_10.TypeGuard.IsAny(left) ? ExtendsResult.Union : index_10.TypeGuard.IsNever(left) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromArrayRight, "FromArrayRight");
    function FromArray(left, right) {
      return index_10.TypeGuard.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : !index_10.TypeGuard.IsArray(right) ? ExtendsResult.False : IntoBooleanResult(Visit(left.items, right.items));
    }
    __name(FromArray, "FromArray");
    function FromAsyncIterator(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : !index_10.TypeGuard.IsAsyncIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit(left.items, right.items));
    }
    __name(FromAsyncIterator, "FromAsyncIterator");
    function FromBigInt(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsBigInt(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromBigInt, "FromBigInt");
    function FromBooleanRight(left, right) {
      return index_10.TypeGuard.IsLiteralBoolean(left) ? ExtendsResult.True : index_10.TypeGuard.IsBoolean(left) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromBooleanRight, "FromBooleanRight");
    function FromBoolean(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsBoolean(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromBoolean, "FromBoolean");
    function FromConstructor(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : !index_10.TypeGuard.IsConstructor(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit(left.returns, right.returns));
    }
    __name(FromConstructor, "FromConstructor");
    function FromDate(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsDate(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromDate, "FromDate");
    function FromFunction(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : !index_10.TypeGuard.IsFunction(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit(left.returns, right.returns));
    }
    __name(FromFunction, "FromFunction");
    function FromIntegerRight(left, right) {
      return index_10.TypeGuard.IsLiteral(left) && index_10.ValueGuard.IsNumber(left.const) ? ExtendsResult.True : index_10.TypeGuard.IsNumber(left) || index_10.TypeGuard.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromIntegerRight, "FromIntegerRight");
    function FromInteger(left, right) {
      return index_10.TypeGuard.IsInteger(right) || index_10.TypeGuard.IsNumber(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : ExtendsResult.False;
    }
    __name(FromInteger, "FromInteger");
    function FromIntersectRight(left, right) {
      return right.allOf.every((schema) => Visit(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromIntersectRight, "FromIntersectRight");
    function FromIntersect(left, right) {
      return left.allOf.some((schema) => Visit(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromIntersect, "FromIntersect");
    function FromIterator(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : !index_10.TypeGuard.IsIterator(right) ? ExtendsResult.False : IntoBooleanResult(Visit(left.items, right.items));
    }
    __name(FromIterator, "FromIterator");
    function FromLiteral(left, right) {
      return index_10.TypeGuard.IsLiteral(right) && right.const === left.const ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsString(right) ? FromStringRight(left, right) : index_10.TypeGuard.IsNumber(right) ? FromNumberRight(left, right) : index_10.TypeGuard.IsInteger(right) ? FromIntegerRight(left, right) : index_10.TypeGuard.IsBoolean(right) ? FromBooleanRight(left, right) : ExtendsResult.False;
    }
    __name(FromLiteral, "FromLiteral");
    function FromNeverRight(left, right) {
      return ExtendsResult.False;
    }
    __name(FromNeverRight, "FromNeverRight");
    function FromNever(left, right) {
      return ExtendsResult.True;
    }
    __name(FromNever, "FromNever");
    function UnwrapTNot(schema) {
      let [current, depth] = [schema, 0];
      while (true) {
        if (!index_10.TypeGuard.IsNot(current))
          break;
        current = current.not;
        depth += 1;
      }
      return depth % 2 === 0 ? current : (0, index_5.Unknown)();
    }
    __name(UnwrapTNot, "UnwrapTNot");
    function FromNot(left, right) {
      return index_10.TypeGuard.IsNot(left) ? Visit(UnwrapTNot(left), right) : index_10.TypeGuard.IsNot(right) ? Visit(left, UnwrapTNot(right)) : Throw("Invalid fallthrough for Not");
    }
    __name(FromNot, "FromNot");
    function FromNull(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsNull(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromNull, "FromNull");
    function FromNumberRight(left, right) {
      return index_10.TypeGuard.IsLiteralNumber(left) ? ExtendsResult.True : index_10.TypeGuard.IsNumber(left) || index_10.TypeGuard.IsInteger(left) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromNumberRight, "FromNumberRight");
    function FromNumber(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsInteger(right) || index_10.TypeGuard.IsNumber(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromNumber, "FromNumber");
    function IsObjectPropertyCount(schema, count) {
      return Object.getOwnPropertyNames(schema.properties).length === count;
    }
    __name(IsObjectPropertyCount, "IsObjectPropertyCount");
    function IsObjectStringLike(schema) {
      return IsObjectArrayLike(schema);
    }
    __name(IsObjectStringLike, "IsObjectStringLike");
    function IsObjectSymbolLike(schema) {
      return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "description" in schema.properties && index_10.TypeGuard.IsUnion(schema.properties.description) && schema.properties.description.anyOf.length === 2 && (index_10.TypeGuard.IsString(schema.properties.description.anyOf[0]) && index_10.TypeGuard.IsUndefined(schema.properties.description.anyOf[1]) || index_10.TypeGuard.IsString(schema.properties.description.anyOf[1]) && index_10.TypeGuard.IsUndefined(schema.properties.description.anyOf[0]));
    }
    __name(IsObjectSymbolLike, "IsObjectSymbolLike");
    function IsObjectNumberLike(schema) {
      return IsObjectPropertyCount(schema, 0);
    }
    __name(IsObjectNumberLike, "IsObjectNumberLike");
    function IsObjectBooleanLike(schema) {
      return IsObjectPropertyCount(schema, 0);
    }
    __name(IsObjectBooleanLike, "IsObjectBooleanLike");
    function IsObjectBigIntLike(schema) {
      return IsObjectPropertyCount(schema, 0);
    }
    __name(IsObjectBigIntLike, "IsObjectBigIntLike");
    function IsObjectDateLike(schema) {
      return IsObjectPropertyCount(schema, 0);
    }
    __name(IsObjectDateLike, "IsObjectDateLike");
    function IsObjectUint8ArrayLike(schema) {
      return IsObjectArrayLike(schema);
    }
    __name(IsObjectUint8ArrayLike, "IsObjectUint8ArrayLike");
    function IsObjectFunctionLike(schema) {
      const length = (0, index_3.Number)();
      return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit(schema.properties["length"], length)) === ExtendsResult.True;
    }
    __name(IsObjectFunctionLike, "IsObjectFunctionLike");
    function IsObjectConstructorLike(schema) {
      return IsObjectPropertyCount(schema, 0);
    }
    __name(IsObjectConstructorLike, "IsObjectConstructorLike");
    function IsObjectArrayLike(schema) {
      const length = (0, index_3.Number)();
      return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit(schema.properties["length"], length)) === ExtendsResult.True;
    }
    __name(IsObjectArrayLike, "IsObjectArrayLike");
    function IsObjectPromiseLike(schema) {
      const then = (0, index_2.Function)([(0, index_1.Any)()], (0, index_1.Any)());
      return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "then" in schema.properties && IntoBooleanResult(Visit(schema.properties["then"], then)) === ExtendsResult.True;
    }
    __name(IsObjectPromiseLike, "IsObjectPromiseLike");
    function Property(left, right) {
      return Visit(left, right) === ExtendsResult.False ? ExtendsResult.False : index_10.TypeGuard.IsOptional(left) && !index_10.TypeGuard.IsOptional(right) ? ExtendsResult.False : ExtendsResult.True;
    }
    __name(Property, "Property");
    function FromObjectRight(left, right) {
      return index_10.TypeGuard.IsUnknown(left) ? ExtendsResult.False : index_10.TypeGuard.IsAny(left) ? ExtendsResult.Union : index_10.TypeGuard.IsNever(left) || index_10.TypeGuard.IsLiteralString(left) && IsObjectStringLike(right) || index_10.TypeGuard.IsLiteralNumber(left) && IsObjectNumberLike(right) || index_10.TypeGuard.IsLiteralBoolean(left) && IsObjectBooleanLike(right) || index_10.TypeGuard.IsSymbol(left) && IsObjectSymbolLike(right) || index_10.TypeGuard.IsBigInt(left) && IsObjectBigIntLike(right) || index_10.TypeGuard.IsString(left) && IsObjectStringLike(right) || index_10.TypeGuard.IsSymbol(left) && IsObjectSymbolLike(right) || index_10.TypeGuard.IsNumber(left) && IsObjectNumberLike(right) || index_10.TypeGuard.IsInteger(left) && IsObjectNumberLike(right) || index_10.TypeGuard.IsBoolean(left) && IsObjectBooleanLike(right) || index_10.TypeGuard.IsUint8Array(left) && IsObjectUint8ArrayLike(right) || index_10.TypeGuard.IsDate(left) && IsObjectDateLike(right) || index_10.TypeGuard.IsConstructor(left) && IsObjectConstructorLike(right) || index_10.TypeGuard.IsFunction(left) && IsObjectFunctionLike(right) ? ExtendsResult.True : index_10.TypeGuard.IsRecord(left) && index_10.TypeGuard.IsString(RecordKey(left)) ? (() => {
        return right[index_8.Hint] === "Record" ? ExtendsResult.True : ExtendsResult.False;
      })() : index_10.TypeGuard.IsRecord(left) && index_10.TypeGuard.IsNumber(RecordKey(left)) ? (() => {
        return IsObjectPropertyCount(right, 0) ? ExtendsResult.True : ExtendsResult.False;
      })() : ExtendsResult.False;
    }
    __name(FromObjectRight, "FromObjectRight");
    function FromObject(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : !index_10.TypeGuard.IsObject(right) ? ExtendsResult.False : (() => {
        for (const key of Object.getOwnPropertyNames(right.properties)) {
          if (!(key in left.properties) && !index_10.TypeGuard.IsOptional(right.properties[key])) {
            return ExtendsResult.False;
          }
          if (index_10.TypeGuard.IsOptional(right.properties[key])) {
            return ExtendsResult.True;
          }
          if (Property(left.properties[key], right.properties[key]) === ExtendsResult.False) {
            return ExtendsResult.False;
          }
        }
        return ExtendsResult.True;
      })();
    }
    __name(FromObject, "FromObject");
    function FromPromise(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) && IsObjectPromiseLike(right) ? ExtendsResult.True : !index_10.TypeGuard.IsPromise(right) ? ExtendsResult.False : IntoBooleanResult(Visit(left.item, right.item));
    }
    __name(FromPromise, "FromPromise");
    function RecordKey(schema) {
      return index_7.PatternNumberExact in schema.patternProperties ? (0, index_3.Number)() : index_7.PatternStringExact in schema.patternProperties ? (0, index_4.String)() : Throw("Unknown record key pattern");
    }
    __name(RecordKey, "RecordKey");
    function RecordValue(schema) {
      return index_7.PatternNumberExact in schema.patternProperties ? schema.patternProperties[index_7.PatternNumberExact] : index_7.PatternStringExact in schema.patternProperties ? schema.patternProperties[index_7.PatternStringExact] : Throw("Unable to get record value schema");
    }
    __name(RecordValue, "RecordValue");
    function FromRecordRight(left, right) {
      const [Key, Value] = [RecordKey(right), RecordValue(right)];
      return index_10.TypeGuard.IsLiteralString(left) && index_10.TypeGuard.IsNumber(Key) && IntoBooleanResult(Visit(left, Value)) === ExtendsResult.True ? ExtendsResult.True : index_10.TypeGuard.IsUint8Array(left) && index_10.TypeGuard.IsNumber(Key) ? Visit(left, Value) : index_10.TypeGuard.IsString(left) && index_10.TypeGuard.IsNumber(Key) ? Visit(left, Value) : index_10.TypeGuard.IsArray(left) && index_10.TypeGuard.IsNumber(Key) ? Visit(left, Value) : index_10.TypeGuard.IsObject(left) ? (() => {
        for (const key of Object.getOwnPropertyNames(left.properties)) {
          if (Property(Value, left.properties[key]) === ExtendsResult.False) {
            return ExtendsResult.False;
          }
        }
        return ExtendsResult.True;
      })() : ExtendsResult.False;
    }
    __name(FromRecordRight, "FromRecordRight");
    function FromRecord(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : !index_10.TypeGuard.IsRecord(right) ? ExtendsResult.False : Visit(RecordValue(left), RecordValue(right));
    }
    __name(FromRecord, "FromRecord");
    function FromRegExp(left, right) {
      const L = index_10.TypeGuard.IsRegExp(left) ? (0, index_4.String)() : left;
      const R = index_10.TypeGuard.IsRegExp(right) ? (0, index_4.String)() : right;
      return Visit(L, R);
    }
    __name(FromRegExp, "FromRegExp");
    function FromStringRight(left, right) {
      return index_10.TypeGuard.IsLiteral(left) && index_10.ValueGuard.IsString(left.const) ? ExtendsResult.True : index_10.TypeGuard.IsString(left) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromStringRight, "FromStringRight");
    function FromString(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsString(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromString, "FromString");
    function FromSymbol(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsSymbol(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromSymbol, "FromSymbol");
    function FromTemplateLiteral(left, right) {
      return index_10.TypeGuard.IsTemplateLiteral(left) ? Visit((0, index_6.TemplateLiteralToUnion)(left), right) : index_10.TypeGuard.IsTemplateLiteral(right) ? Visit(left, (0, index_6.TemplateLiteralToUnion)(right)) : Throw("Invalid fallthrough for TemplateLiteral");
    }
    __name(FromTemplateLiteral, "FromTemplateLiteral");
    function IsArrayOfTuple(left, right) {
      return index_10.TypeGuard.IsArray(right) && left.items !== void 0 && left.items.every((schema) => Visit(schema, right.items) === ExtendsResult.True);
    }
    __name(IsArrayOfTuple, "IsArrayOfTuple");
    function FromTupleRight(left, right) {
      return index_10.TypeGuard.IsNever(left) ? ExtendsResult.True : index_10.TypeGuard.IsUnknown(left) ? ExtendsResult.False : index_10.TypeGuard.IsAny(left) ? ExtendsResult.Union : ExtendsResult.False;
    }
    __name(FromTupleRight, "FromTupleRight");
    function FromTuple(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) && IsObjectArrayLike(right) ? ExtendsResult.True : index_10.TypeGuard.IsArray(right) && IsArrayOfTuple(left, right) ? ExtendsResult.True : !index_10.TypeGuard.IsTuple(right) ? ExtendsResult.False : index_10.ValueGuard.IsUndefined(left.items) && !index_10.ValueGuard.IsUndefined(right.items) || !index_10.ValueGuard.IsUndefined(left.items) && index_10.ValueGuard.IsUndefined(right.items) ? ExtendsResult.False : index_10.ValueGuard.IsUndefined(left.items) && !index_10.ValueGuard.IsUndefined(right.items) ? ExtendsResult.True : left.items.every((schema, index) => Visit(schema, right.items[index]) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromTuple, "FromTuple");
    function FromUint8Array(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsUint8Array(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromUint8Array, "FromUint8Array");
    function FromUndefined(left, right) {
      return IsStructuralRight(right) ? StructuralRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsRecord(right) ? FromRecordRight(left, right) : index_10.TypeGuard.IsVoid(right) ? FromVoidRight(left, right) : index_10.TypeGuard.IsUndefined(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromUndefined, "FromUndefined");
    function FromUnionRight(left, right) {
      return right.anyOf.some((schema) => Visit(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromUnionRight, "FromUnionRight");
    function FromUnion(left, right) {
      return left.anyOf.every((schema) => Visit(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromUnion, "FromUnion");
    function FromUnknownRight(left, right) {
      return ExtendsResult.True;
    }
    __name(FromUnknownRight, "FromUnknownRight");
    function FromUnknown(left, right) {
      return index_10.TypeGuard.IsNever(right) ? FromNeverRight(left, right) : index_10.TypeGuard.IsIntersect(right) ? FromIntersectRight(left, right) : index_10.TypeGuard.IsUnion(right) ? FromUnionRight(left, right) : index_10.TypeGuard.IsAny(right) ? FromAnyRight(left, right) : index_10.TypeGuard.IsString(right) ? FromStringRight(left, right) : index_10.TypeGuard.IsNumber(right) ? FromNumberRight(left, right) : index_10.TypeGuard.IsInteger(right) ? FromIntegerRight(left, right) : index_10.TypeGuard.IsBoolean(right) ? FromBooleanRight(left, right) : index_10.TypeGuard.IsArray(right) ? FromArrayRight(left, right) : index_10.TypeGuard.IsTuple(right) ? FromTupleRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsUnknown(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromUnknown, "FromUnknown");
    function FromVoidRight(left, right) {
      return index_10.TypeGuard.IsUndefined(left) ? ExtendsResult.True : index_10.TypeGuard.IsUndefined(left) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromVoidRight, "FromVoidRight");
    function FromVoid(left, right) {
      return index_10.TypeGuard.IsIntersect(right) ? FromIntersectRight(left, right) : index_10.TypeGuard.IsUnion(right) ? FromUnionRight(left, right) : index_10.TypeGuard.IsUnknown(right) ? FromUnknownRight(left, right) : index_10.TypeGuard.IsAny(right) ? FromAnyRight(left, right) : index_10.TypeGuard.IsObject(right) ? FromObjectRight(left, right) : index_10.TypeGuard.IsVoid(right) ? ExtendsResult.True : ExtendsResult.False;
    }
    __name(FromVoid, "FromVoid");
    function Visit(left, right) {
      return (
        // resolvable
        index_10.TypeGuard.IsTemplateLiteral(left) || index_10.TypeGuard.IsTemplateLiteral(right) ? FromTemplateLiteral(left, right) : index_10.TypeGuard.IsRegExp(left) || index_10.TypeGuard.IsRegExp(right) ? FromRegExp(left, right) : index_10.TypeGuard.IsNot(left) || index_10.TypeGuard.IsNot(right) ? FromNot(left, right) : (
          // standard
          index_10.TypeGuard.IsAny(left) ? FromAny(left, right) : index_10.TypeGuard.IsArray(left) ? FromArray(left, right) : index_10.TypeGuard.IsBigInt(left) ? FromBigInt(left, right) : index_10.TypeGuard.IsBoolean(left) ? FromBoolean(left, right) : index_10.TypeGuard.IsAsyncIterator(left) ? FromAsyncIterator(left, right) : index_10.TypeGuard.IsConstructor(left) ? FromConstructor(left, right) : index_10.TypeGuard.IsDate(left) ? FromDate(left, right) : index_10.TypeGuard.IsFunction(left) ? FromFunction(left, right) : index_10.TypeGuard.IsInteger(left) ? FromInteger(left, right) : index_10.TypeGuard.IsIntersect(left) ? FromIntersect(left, right) : index_10.TypeGuard.IsIterator(left) ? FromIterator(left, right) : index_10.TypeGuard.IsLiteral(left) ? FromLiteral(left, right) : index_10.TypeGuard.IsNever(left) ? FromNever(left, right) : index_10.TypeGuard.IsNull(left) ? FromNull(left, right) : index_10.TypeGuard.IsNumber(left) ? FromNumber(left, right) : index_10.TypeGuard.IsObject(left) ? FromObject(left, right) : index_10.TypeGuard.IsRecord(left) ? FromRecord(left, right) : index_10.TypeGuard.IsString(left) ? FromString(left, right) : index_10.TypeGuard.IsSymbol(left) ? FromSymbol(left, right) : index_10.TypeGuard.IsTuple(left) ? FromTuple(left, right) : index_10.TypeGuard.IsPromise(left) ? FromPromise(left, right) : index_10.TypeGuard.IsUint8Array(left) ? FromUint8Array(left, right) : index_10.TypeGuard.IsUndefined(left) ? FromUndefined(left, right) : index_10.TypeGuard.IsUnion(left) ? FromUnion(left, right) : index_10.TypeGuard.IsUnknown(left) ? FromUnknown(left, right) : index_10.TypeGuard.IsVoid(left) ? FromVoid(left, right) : Throw(`Unknown left type operand '${left[index_8.Kind]}'`)
        )
      );
    }
    __name(Visit, "Visit");
    function ExtendsCheck(left, right) {
      return Visit(left, right);
    }
    __name(ExtendsCheck, "ExtendsCheck");
    exports.ExtendsCheck = ExtendsCheck;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/extends/extends-from-mapped-result.js
var require_extends_from_mapped_result = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/extends/extends-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExtendsFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var extends_1 = require_extends();
    function FromProperties(P, Right, True, False, options) {
      return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, extends_1.Extends)(P[K2], Right, True, False, options) };
      }, {});
    }
    __name(FromProperties, "FromProperties");
    function FromMappedResult(Left, Right, True, False, options) {
      return FromProperties(Left.properties, Right, True, False, options);
    }
    __name(FromMappedResult, "FromMappedResult");
    function ExtendsFromMappedResult(Left, Right, True, False, options) {
      const P = FromMappedResult(Left, Right, True, False, options);
      return (0, index_1.MappedResult)(P);
    }
    __name(ExtendsFromMappedResult, "ExtendsFromMappedResult");
    exports.ExtendsFromMappedResult = ExtendsFromMappedResult;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/extends/extends.js
var require_extends = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/extends/extends.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Extends = void 0;
    var index_1 = require_union2();
    var extends_check_1 = require_extends_check();
    var type_1 = require_type2();
    var extends_from_mapped_key_1 = require_extends_from_mapped_key();
    var extends_from_mapped_result_1 = require_extends_from_mapped_result();
    var type_2 = require_type3();
    function ExtendsResolve(left, right, trueType, falseType) {
      const R = (0, extends_check_1.ExtendsCheck)(left, right);
      return R === extends_check_1.ExtendsResult.Union ? (0, index_1.Union)([trueType, falseType]) : R === extends_check_1.ExtendsResult.True ? trueType : falseType;
    }
    __name(ExtendsResolve, "ExtendsResolve");
    function Extends(L, R, T, F, options = {}) {
      return (0, type_2.IsMappedResult)(L) ? (0, extends_from_mapped_result_1.ExtendsFromMappedResult)(L, R, T, F, options) : (0, type_2.IsMappedKey)(L) ? (0, type_1.CloneType)((0, extends_from_mapped_key_1.ExtendsFromMappedKey)(L, R, T, F, options)) : (0, type_1.CloneType)(ExtendsResolve(L, R, T, F), options);
    }
    __name(Extends, "Extends");
    exports.Extends = Extends;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/extends/extends-from-mapped-key.js
var require_extends_from_mapped_key = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/extends/extends-from-mapped-key.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExtendsFromMappedKey = void 0;
    var index_1 = require_mapped2();
    var index_2 = require_literal2();
    var extends_1 = require_extends();
    function FromPropertyKey(K, U, L, R, options) {
      return {
        [K]: (0, extends_1.Extends)((0, index_2.Literal)(K), U, L, R, options)
      };
    }
    __name(FromPropertyKey, "FromPropertyKey");
    function FromPropertyKeys(K, U, L, R, options) {
      return K.reduce((Acc, LK) => {
        return { ...Acc, ...FromPropertyKey(LK, U, L, R, options) };
      }, {});
    }
    __name(FromPropertyKeys, "FromPropertyKeys");
    function FromMappedKey(K, U, L, R, options) {
      return FromPropertyKeys(K.keys, U, L, R, options);
    }
    __name(FromMappedKey, "FromMappedKey");
    function ExtendsFromMappedKey(T, U, L, R, options) {
      const P = FromMappedKey(T, U, L, R, options);
      return (0, index_1.MappedResult)(P);
    }
    __name(ExtendsFromMappedKey, "ExtendsFromMappedKey");
    exports.ExtendsFromMappedKey = ExtendsFromMappedKey;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/extends/index.js
var require_extends2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/extends/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_extends_check(), exports);
    __exportStar(require_extends_from_mapped_key(), exports);
    __exportStar(require_extends_from_mapped_result(), exports);
    __exportStar(require_extends_undefined(), exports);
    __exportStar(require_extends(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/check/check.js
var require_check = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/check/check.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Check = exports.ValueCheckUnknownTypeError = void 0;
    var index_1 = require_system2();
    var index_2 = require_deref2();
    var index_3 = require_hash2();
    var index_4 = require_symbols2();
    var index_5 = require_keyof2();
    var index_6 = require_extends2();
    var index_7 = require_registry();
    var index_8 = require_error2();
    var index_9 = require_never2();
    var index_10 = require_guard2();
    var type_1 = require_type3();
    var ValueCheckUnknownTypeError = class extends index_8.TypeBoxError {
      static {
        __name(this, "ValueCheckUnknownTypeError");
      }
      constructor(schema) {
        super(`Unknown type`);
        this.schema = schema;
      }
    };
    exports.ValueCheckUnknownTypeError = ValueCheckUnknownTypeError;
    function IsAnyOrUnknown(schema) {
      return schema[index_4.Kind] === "Any" || schema[index_4.Kind] === "Unknown";
    }
    __name(IsAnyOrUnknown, "IsAnyOrUnknown");
    function IsDefined(value) {
      return value !== void 0;
    }
    __name(IsDefined, "IsDefined");
    function FromAny(schema, references, value) {
      return true;
    }
    __name(FromAny, "FromAny");
    function FromArray(schema, references, value) {
      if (!(0, index_10.IsArray)(value))
        return false;
      if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
        return false;
      }
      if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
        return false;
      }
      if (!value.every((value2) => Visit(schema.items, references, value2))) {
        return false;
      }
      if (schema.uniqueItems === true && !function() {
        const set = /* @__PURE__ */ new Set();
        for (const element of value) {
          const hashed = (0, index_3.Hash)(element);
          if (set.has(hashed)) {
            return false;
          } else {
            set.add(hashed);
          }
        }
        return true;
      }()) {
        return false;
      }
      if (!(IsDefined(schema.contains) || (0, index_10.IsNumber)(schema.minContains) || (0, index_10.IsNumber)(schema.maxContains))) {
        return true;
      }
      const containsSchema = IsDefined(schema.contains) ? schema.contains : (0, index_9.Never)();
      const containsCount = value.reduce((acc, value2) => Visit(containsSchema, references, value2) ? acc + 1 : acc, 0);
      if (containsCount === 0) {
        return false;
      }
      if ((0, index_10.IsNumber)(schema.minContains) && containsCount < schema.minContains) {
        return false;
      }
      if ((0, index_10.IsNumber)(schema.maxContains) && containsCount > schema.maxContains) {
        return false;
      }
      return true;
    }
    __name(FromArray, "FromArray");
    function FromAsyncIterator(schema, references, value) {
      return (0, index_10.IsAsyncIterator)(value);
    }
    __name(FromAsyncIterator, "FromAsyncIterator");
    function FromBigInt(schema, references, value) {
      if (!(0, index_10.IsBigInt)(value))
        return false;
      if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        return false;
      }
      if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        return false;
      }
      if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        return false;
      }
      if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        return false;
      }
      if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
        return false;
      }
      return true;
    }
    __name(FromBigInt, "FromBigInt");
    function FromBoolean(schema, references, value) {
      return (0, index_10.IsBoolean)(value);
    }
    __name(FromBoolean, "FromBoolean");
    function FromConstructor(schema, references, value) {
      return Visit(schema.returns, references, value.prototype);
    }
    __name(FromConstructor, "FromConstructor");
    function FromDate(schema, references, value) {
      if (!(0, index_10.IsDate)(value))
        return false;
      if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
        return false;
      }
      if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
        return false;
      }
      if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
        return false;
      }
      if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
        return false;
      }
      if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
        return false;
      }
      return true;
    }
    __name(FromDate, "FromDate");
    function FromFunction(schema, references, value) {
      return (0, index_10.IsFunction)(value);
    }
    __name(FromFunction, "FromFunction");
    function FromInteger(schema, references, value) {
      if (!(0, index_10.IsInteger)(value)) {
        return false;
      }
      if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        return false;
      }
      if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        return false;
      }
      if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        return false;
      }
      if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        return false;
      }
      if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        return false;
      }
      return true;
    }
    __name(FromInteger, "FromInteger");
    function FromIntersect(schema, references, value) {
      const check1 = schema.allOf.every((schema2) => Visit(schema2, references, value));
      if (schema.unevaluatedProperties === false) {
        const keyPattern = new RegExp((0, index_5.KeyOfPattern)(schema));
        const check2 = Object.getOwnPropertyNames(value).every((key) => keyPattern.test(key));
        return check1 && check2;
      } else if ((0, type_1.IsSchema)(schema.unevaluatedProperties)) {
        const keyCheck = new RegExp((0, index_5.KeyOfPattern)(schema));
        const check2 = Object.getOwnPropertyNames(value).every((key) => keyCheck.test(key) || Visit(schema.unevaluatedProperties, references, value[key]));
        return check1 && check2;
      } else {
        return check1;
      }
    }
    __name(FromIntersect, "FromIntersect");
    function FromIterator(schema, references, value) {
      return (0, index_10.IsIterator)(value);
    }
    __name(FromIterator, "FromIterator");
    function FromLiteral(schema, references, value) {
      return value === schema.const;
    }
    __name(FromLiteral, "FromLiteral");
    function FromNever(schema, references, value) {
      return false;
    }
    __name(FromNever, "FromNever");
    function FromNot(schema, references, value) {
      return !Visit(schema.not, references, value);
    }
    __name(FromNot, "FromNot");
    function FromNull(schema, references, value) {
      return (0, index_10.IsNull)(value);
    }
    __name(FromNull, "FromNull");
    function FromNumber(schema, references, value) {
      if (!index_1.TypeSystemPolicy.IsNumberLike(value))
        return false;
      if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
        return false;
      }
      if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
        return false;
      }
      if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
        return false;
      }
      if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
        return false;
      }
      if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
        return false;
      }
      return true;
    }
    __name(FromNumber, "FromNumber");
    function FromObject(schema, references, value) {
      if (!index_1.TypeSystemPolicy.IsObjectLike(value))
        return false;
      if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        return false;
      }
      if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        return false;
      }
      const knownKeys = Object.getOwnPropertyNames(schema.properties);
      for (const knownKey of knownKeys) {
        const property = schema.properties[knownKey];
        if (schema.required && schema.required.includes(knownKey)) {
          if (!Visit(property, references, value[knownKey])) {
            return false;
          }
          if (((0, index_6.ExtendsUndefinedCheck)(property) || IsAnyOrUnknown(property)) && !(knownKey in value)) {
            return false;
          }
        } else {
          if (index_1.TypeSystemPolicy.IsExactOptionalProperty(value, knownKey) && !Visit(property, references, value[knownKey])) {
            return false;
          }
        }
      }
      if (schema.additionalProperties === false) {
        const valueKeys = Object.getOwnPropertyNames(value);
        if (schema.required && schema.required.length === knownKeys.length && valueKeys.length === knownKeys.length) {
          return true;
        } else {
          return valueKeys.every((valueKey) => knownKeys.includes(valueKey));
        }
      } else if (typeof schema.additionalProperties === "object") {
        const valueKeys = Object.getOwnPropertyNames(value);
        return valueKeys.every((key) => knownKeys.includes(key) || Visit(schema.additionalProperties, references, value[key]));
      } else {
        return true;
      }
    }
    __name(FromObject, "FromObject");
    function FromPromise(schema, references, value) {
      return (0, index_10.IsPromise)(value);
    }
    __name(FromPromise, "FromPromise");
    function FromRecord(schema, references, value) {
      if (!index_1.TypeSystemPolicy.IsRecordLike(value)) {
        return false;
      }
      if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
        return false;
      }
      if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
        return false;
      }
      const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
      const regex = new RegExp(patternKey);
      const check1 = Object.entries(value).every(([key, value2]) => {
        return regex.test(key) ? Visit(patternSchema, references, value2) : true;
      });
      const check2 = typeof schema.additionalProperties === "object" ? Object.entries(value).every(([key, value2]) => {
        return !regex.test(key) ? Visit(schema.additionalProperties, references, value2) : true;
      }) : true;
      const check3 = schema.additionalProperties === false ? Object.getOwnPropertyNames(value).every((key) => {
        return regex.test(key);
      }) : true;
      return check1 && check2 && check3;
    }
    __name(FromRecord, "FromRecord");
    function FromRef(schema, references, value) {
      return Visit((0, index_2.Deref)(schema, references), references, value);
    }
    __name(FromRef, "FromRef");
    function FromRegExp(schema, references, value) {
      const regex = new RegExp(schema.source, schema.flags);
      return regex.test(value);
    }
    __name(FromRegExp, "FromRegExp");
    function FromString(schema, references, value) {
      if (!(0, index_10.IsString)(value)) {
        return false;
      }
      if (IsDefined(schema.minLength)) {
        if (!(value.length >= schema.minLength))
          return false;
      }
      if (IsDefined(schema.maxLength)) {
        if (!(value.length <= schema.maxLength))
          return false;
      }
      if (IsDefined(schema.pattern)) {
        const regex = new RegExp(schema.pattern);
        if (!regex.test(value))
          return false;
      }
      if (IsDefined(schema.format)) {
        if (!index_7.FormatRegistry.Has(schema.format))
          return false;
        const func = index_7.FormatRegistry.Get(schema.format);
        return func(value);
      }
      return true;
    }
    __name(FromString, "FromString");
    function FromSymbol(schema, references, value) {
      return (0, index_10.IsSymbol)(value);
    }
    __name(FromSymbol, "FromSymbol");
    function FromTemplateLiteral(schema, references, value) {
      return (0, index_10.IsString)(value) && new RegExp(schema.pattern).test(value);
    }
    __name(FromTemplateLiteral, "FromTemplateLiteral");
    function FromThis(schema, references, value) {
      return Visit((0, index_2.Deref)(schema, references), references, value);
    }
    __name(FromThis, "FromThis");
    function FromTuple(schema, references, value) {
      if (!(0, index_10.IsArray)(value)) {
        return false;
      }
      if (schema.items === void 0 && !(value.length === 0)) {
        return false;
      }
      if (!(value.length === schema.maxItems)) {
        return false;
      }
      if (!schema.items) {
        return true;
      }
      for (let i = 0; i < schema.items.length; i++) {
        if (!Visit(schema.items[i], references, value[i]))
          return false;
      }
      return true;
    }
    __name(FromTuple, "FromTuple");
    function FromUndefined(schema, references, value) {
      return (0, index_10.IsUndefined)(value);
    }
    __name(FromUndefined, "FromUndefined");
    function FromUnion(schema, references, value) {
      return schema.anyOf.some((inner) => Visit(inner, references, value));
    }
    __name(FromUnion, "FromUnion");
    function FromUint8Array(schema, references, value) {
      if (!(0, index_10.IsUint8Array)(value)) {
        return false;
      }
      if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
        return false;
      }
      if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
        return false;
      }
      return true;
    }
    __name(FromUint8Array, "FromUint8Array");
    function FromUnknown(schema, references, value) {
      return true;
    }
    __name(FromUnknown, "FromUnknown");
    function FromVoid(schema, references, value) {
      return index_1.TypeSystemPolicy.IsVoidLike(value);
    }
    __name(FromVoid, "FromVoid");
    function FromKind(schema, references, value) {
      if (!index_7.TypeRegistry.Has(schema[index_4.Kind]))
        return false;
      const func = index_7.TypeRegistry.Get(schema[index_4.Kind]);
      return func(schema, value);
    }
    __name(FromKind, "FromKind");
    function Visit(schema, references, value) {
      const references_ = IsDefined(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema_[index_4.Kind]) {
        case "Any":
          return FromAny(schema_, references_, value);
        case "Array":
          return FromArray(schema_, references_, value);
        case "AsyncIterator":
          return FromAsyncIterator(schema_, references_, value);
        case "BigInt":
          return FromBigInt(schema_, references_, value);
        case "Boolean":
          return FromBoolean(schema_, references_, value);
        case "Constructor":
          return FromConstructor(schema_, references_, value);
        case "Date":
          return FromDate(schema_, references_, value);
        case "Function":
          return FromFunction(schema_, references_, value);
        case "Integer":
          return FromInteger(schema_, references_, value);
        case "Intersect":
          return FromIntersect(schema_, references_, value);
        case "Iterator":
          return FromIterator(schema_, references_, value);
        case "Literal":
          return FromLiteral(schema_, references_, value);
        case "Never":
          return FromNever(schema_, references_, value);
        case "Not":
          return FromNot(schema_, references_, value);
        case "Null":
          return FromNull(schema_, references_, value);
        case "Number":
          return FromNumber(schema_, references_, value);
        case "Object":
          return FromObject(schema_, references_, value);
        case "Promise":
          return FromPromise(schema_, references_, value);
        case "Record":
          return FromRecord(schema_, references_, value);
        case "Ref":
          return FromRef(schema_, references_, value);
        case "RegExp":
          return FromRegExp(schema_, references_, value);
        case "String":
          return FromString(schema_, references_, value);
        case "Symbol":
          return FromSymbol(schema_, references_, value);
        case "TemplateLiteral":
          return FromTemplateLiteral(schema_, references_, value);
        case "This":
          return FromThis(schema_, references_, value);
        case "Tuple":
          return FromTuple(schema_, references_, value);
        case "Undefined":
          return FromUndefined(schema_, references_, value);
        case "Union":
          return FromUnion(schema_, references_, value);
        case "Uint8Array":
          return FromUint8Array(schema_, references_, value);
        case "Unknown":
          return FromUnknown(schema_, references_, value);
        case "Void":
          return FromVoid(schema_, references_, value);
        default:
          if (!index_7.TypeRegistry.Has(schema_[index_4.Kind]))
            throw new ValueCheckUnknownTypeError(schema_);
          return FromKind(schema_, references_, value);
      }
    }
    __name(Visit, "Visit");
    function Check(...args) {
      return args.length === 3 ? Visit(args[0], args[1], args[2]) : Visit(args[0], [], args[1]);
    }
    __name(Check, "Check");
    exports.Check = Check;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/check/index.js
var require_check2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/check/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_check(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/create/create.js
var require_create = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/create/create.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Create = exports.ValueCreateError = void 0;
    var index_1 = require_guard2();
    var index_2 = require_check2();
    var index_3 = require_deref2();
    var index_4 = require_template_literal2();
    var index_5 = require_patterns2();
    var index_6 = require_registry();
    var index_7 = require_symbols2();
    var index_8 = require_error2();
    var ValueCreateError = class extends index_8.TypeBoxError {
      static {
        __name(this, "ValueCreateError");
      }
      constructor(schema, message) {
        super(message);
        this.schema = schema;
      }
    };
    exports.ValueCreateError = ValueCreateError;
    function FromAny(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return {};
      }
    }
    __name(FromAny, "FromAny");
    function FromArray(schema, references) {
      if (schema.uniqueItems === true && !(0, index_1.HasPropertyKey)(schema, "default")) {
        throw new ValueCreateError(schema, "Array with the uniqueItems constraint requires a default value");
      } else if ("contains" in schema && !(0, index_1.HasPropertyKey)(schema, "default")) {
        throw new ValueCreateError(schema, "Array with the contains constraint requires a default value");
      } else if ("default" in schema) {
        return schema.default;
      } else if (schema.minItems !== void 0) {
        return Array.from({ length: schema.minItems }).map((item) => {
          return Visit(schema.items, references);
        });
      } else {
        return [];
      }
    }
    __name(FromArray, "FromArray");
    function FromAsyncIterator(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return /* @__PURE__ */ async function* () {
        }();
      }
    }
    __name(FromAsyncIterator, "FromAsyncIterator");
    function FromBigInt(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return BigInt(0);
      }
    }
    __name(FromBigInt, "FromBigInt");
    function FromBoolean(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return false;
      }
    }
    __name(FromBoolean, "FromBoolean");
    function FromConstructor(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        const value = Visit(schema.returns, references);
        if (typeof value === "object" && !Array.isArray(value)) {
          return class {
            constructor() {
              for (const [key, val] of Object.entries(value)) {
                const self = this;
                self[key] = val;
              }
            }
          };
        } else {
          return class {
          };
        }
      }
    }
    __name(FromConstructor, "FromConstructor");
    function FromDate(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else if (schema.minimumTimestamp !== void 0) {
        return new Date(schema.minimumTimestamp);
      } else {
        return /* @__PURE__ */ new Date();
      }
    }
    __name(FromDate, "FromDate");
    function FromFunction(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return () => Visit(schema.returns, references);
      }
    }
    __name(FromFunction, "FromFunction");
    function FromInteger(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else if (schema.minimum !== void 0) {
        return schema.minimum;
      } else {
        return 0;
      }
    }
    __name(FromInteger, "FromInteger");
    function FromIntersect(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        const value = schema.allOf.reduce((acc, schema2) => {
          const next = Visit(schema2, references);
          return typeof next === "object" ? { ...acc, ...next } : next;
        }, {});
        if (!(0, index_2.Check)(schema, references, value))
          throw new ValueCreateError(schema, "Intersect produced invalid value. Consider using a default value.");
        return value;
      }
    }
    __name(FromIntersect, "FromIntersect");
    function FromIterator(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return /* @__PURE__ */ function* () {
        }();
      }
    }
    __name(FromIterator, "FromIterator");
    function FromLiteral(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return schema.const;
      }
    }
    __name(FromLiteral, "FromLiteral");
    function FromNever(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        throw new ValueCreateError(schema, "Never types cannot be created. Consider using a default value.");
      }
    }
    __name(FromNever, "FromNever");
    function FromNot(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        throw new ValueCreateError(schema, "Not types must have a default value");
      }
    }
    __name(FromNot, "FromNot");
    function FromNull(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return null;
      }
    }
    __name(FromNull, "FromNull");
    function FromNumber(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else if (schema.minimum !== void 0) {
        return schema.minimum;
      } else {
        return 0;
      }
    }
    __name(FromNumber, "FromNumber");
    function FromObject(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        const required = new Set(schema.required);
        return schema.default || Object.entries(schema.properties).reduce((acc, [key, schema2]) => {
          return required.has(key) ? { ...acc, [key]: Visit(schema2, references) } : { ...acc };
        }, {});
      }
    }
    __name(FromObject, "FromObject");
    function FromPromise(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return Promise.resolve(Visit(schema.item, references));
      }
    }
    __name(FromPromise, "FromPromise");
    function FromRecord(schema, references) {
      const [keyPattern, valueSchema] = Object.entries(schema.patternProperties)[0];
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else if (!(keyPattern === index_5.PatternStringExact || keyPattern === index_5.PatternNumberExact)) {
        const propertyKeys = keyPattern.slice(1, keyPattern.length - 1).split("|");
        return propertyKeys.reduce((acc, key) => {
          return { ...acc, [key]: Visit(valueSchema, references) };
        }, {});
      } else {
        return {};
      }
    }
    __name(FromRecord, "FromRecord");
    function FromRef(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return Visit((0, index_3.Deref)(schema, references), references);
      }
    }
    __name(FromRef, "FromRef");
    function FromRegExp(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        throw new ValueCreateError(schema, "RegExp types cannot be created. Consider using a default value.");
      }
    }
    __name(FromRegExp, "FromRegExp");
    function FromString(schema, references) {
      if (schema.pattern !== void 0) {
        if (!(0, index_1.HasPropertyKey)(schema, "default")) {
          throw new ValueCreateError(schema, "String types with patterns must specify a default value");
        } else {
          return schema.default;
        }
      } else if (schema.format !== void 0) {
        if (!(0, index_1.HasPropertyKey)(schema, "default")) {
          throw new ValueCreateError(schema, "String types with formats must specify a default value");
        } else {
          return schema.default;
        }
      } else {
        if ((0, index_1.HasPropertyKey)(schema, "default")) {
          return schema.default;
        } else if (schema.minLength !== void 0) {
          return Array.from({ length: schema.minLength }).map(() => " ").join("");
        } else {
          return "";
        }
      }
    }
    __name(FromString, "FromString");
    function FromSymbol(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else if ("value" in schema) {
        return Symbol.for(schema.value);
      } else {
        return Symbol();
      }
    }
    __name(FromSymbol, "FromSymbol");
    function FromTemplateLiteral(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      }
      if (!(0, index_4.IsTemplateLiteralFinite)(schema))
        throw new ValueCreateError(schema, "Can only create template literals that produce a finite variants. Consider using a default value.");
      const generated = (0, index_4.TemplateLiteralGenerate)(schema);
      return generated[0];
    }
    __name(FromTemplateLiteral, "FromTemplateLiteral");
    function FromThis(schema, references) {
      if (recursiveDepth++ > recursiveMaxDepth)
        throw new ValueCreateError(schema, "Cannot create recursive type as it appears possibly infinite. Consider using a default.");
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return Visit((0, index_3.Deref)(schema, references), references);
      }
    }
    __name(FromThis, "FromThis");
    function FromTuple(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      }
      if (schema.items === void 0) {
        return [];
      } else {
        return Array.from({ length: schema.minItems }).map((_, index) => Visit(schema.items[index], references));
      }
    }
    __name(FromTuple, "FromTuple");
    function FromUndefined(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return void 0;
      }
    }
    __name(FromUndefined, "FromUndefined");
    function FromUnion(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else if (schema.anyOf.length === 0) {
        throw new Error("ValueCreate.Union: Cannot create Union with zero variants");
      } else {
        return Visit(schema.anyOf[0], references);
      }
    }
    __name(FromUnion, "FromUnion");
    function FromUint8Array(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else if (schema.minByteLength !== void 0) {
        return new Uint8Array(schema.minByteLength);
      } else {
        return new Uint8Array(0);
      }
    }
    __name(FromUint8Array, "FromUint8Array");
    function FromUnknown(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return {};
      }
    }
    __name(FromUnknown, "FromUnknown");
    function FromVoid(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        return void 0;
      }
    }
    __name(FromVoid, "FromVoid");
    function FromKind(schema, references) {
      if ((0, index_1.HasPropertyKey)(schema, "default")) {
        return schema.default;
      } else {
        throw new Error("User defined types must specify a default value");
      }
    }
    __name(FromKind, "FromKind");
    function Visit(schema, references) {
      const references_ = (0, index_1.IsString)(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema_[index_7.Kind]) {
        case "Any":
          return FromAny(schema_, references_);
        case "Array":
          return FromArray(schema_, references_);
        case "AsyncIterator":
          return FromAsyncIterator(schema_, references_);
        case "BigInt":
          return FromBigInt(schema_, references_);
        case "Boolean":
          return FromBoolean(schema_, references_);
        case "Constructor":
          return FromConstructor(schema_, references_);
        case "Date":
          return FromDate(schema_, references_);
        case "Function":
          return FromFunction(schema_, references_);
        case "Integer":
          return FromInteger(schema_, references_);
        case "Intersect":
          return FromIntersect(schema_, references_);
        case "Iterator":
          return FromIterator(schema_, references_);
        case "Literal":
          return FromLiteral(schema_, references_);
        case "Never":
          return FromNever(schema_, references_);
        case "Not":
          return FromNot(schema_, references_);
        case "Null":
          return FromNull(schema_, references_);
        case "Number":
          return FromNumber(schema_, references_);
        case "Object":
          return FromObject(schema_, references_);
        case "Promise":
          return FromPromise(schema_, references_);
        case "Record":
          return FromRecord(schema_, references_);
        case "Ref":
          return FromRef(schema_, references_);
        case "RegExp":
          return FromRegExp(schema_, references_);
        case "String":
          return FromString(schema_, references_);
        case "Symbol":
          return FromSymbol(schema_, references_);
        case "TemplateLiteral":
          return FromTemplateLiteral(schema_, references_);
        case "This":
          return FromThis(schema_, references_);
        case "Tuple":
          return FromTuple(schema_, references_);
        case "Undefined":
          return FromUndefined(schema_, references_);
        case "Union":
          return FromUnion(schema_, references_);
        case "Uint8Array":
          return FromUint8Array(schema_, references_);
        case "Unknown":
          return FromUnknown(schema_, references_);
        case "Void":
          return FromVoid(schema_, references_);
        default:
          if (!index_6.TypeRegistry.Has(schema_[index_7.Kind]))
            throw new ValueCreateError(schema_, "Unknown type");
          return FromKind(schema_, references_);
      }
    }
    __name(Visit, "Visit");
    var recursiveMaxDepth = 512;
    var recursiveDepth = 0;
    function Create(...args) {
      recursiveDepth = 0;
      return args.length === 2 ? Visit(args[0], args[1]) : Visit(args[0], []);
    }
    __name(Create, "Create");
    exports.Create = Create;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/create/index.js
var require_create2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/create/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_create(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/clone/clone.js
var require_clone = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/clone/clone.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Clone = void 0;
    var index_1 = require_guard2();
    function ObjectType(value) {
      const keys = [...Object.getOwnPropertyNames(value), ...Object.getOwnPropertySymbols(value)];
      return keys.reduce((acc, key) => ({ ...acc, [key]: Clone(value[key]) }), {});
    }
    __name(ObjectType, "ObjectType");
    function ArrayType(value) {
      return value.map((element) => Clone(element));
    }
    __name(ArrayType, "ArrayType");
    function TypedArrayType(value) {
      return value.slice();
    }
    __name(TypedArrayType, "TypedArrayType");
    function DateType(value) {
      return new Date(value.toISOString());
    }
    __name(DateType, "DateType");
    function ValueType(value) {
      return value;
    }
    __name(ValueType, "ValueType");
    function Clone(value) {
      if ((0, index_1.IsArray)(value))
        return ArrayType(value);
      if ((0, index_1.IsDate)(value))
        return DateType(value);
      if ((0, index_1.IsPlainObject)(value))
        return ObjectType(value);
      if ((0, index_1.IsTypedArray)(value))
        return TypedArrayType(value);
      if ((0, index_1.IsValueType)(value))
        return ValueType(value);
      throw new Error("ValueClone: Unable to clone value");
    }
    __name(Clone, "Clone");
    exports.Clone = Clone;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/clone/index.js
var require_clone2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/clone/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_clone(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/cast/cast.js
var require_cast = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/cast/cast.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Cast = exports.ValueCastError = void 0;
    var index_1 = require_guard2();
    var index_2 = require_error2();
    var index_3 = require_symbols2();
    var index_4 = require_create2();
    var index_5 = require_check2();
    var index_6 = require_clone2();
    var index_7 = require_deref2();
    var ValueCastError = class extends index_2.TypeBoxError {
      static {
        __name(this, "ValueCastError");
      }
      constructor(schema, message) {
        super(message);
        this.schema = schema;
      }
    };
    exports.ValueCastError = ValueCastError;
    function ScoreUnion(schema, references, value) {
      if (schema[index_3.Kind] === "Object" && typeof value === "object" && !(0, index_1.IsNull)(value)) {
        const object = schema;
        const keys = Object.getOwnPropertyNames(value);
        const entries = Object.entries(object.properties);
        const [point, max] = [1 / entries.length, entries.length];
        return entries.reduce((acc, [key, schema2]) => {
          const literal = schema2[index_3.Kind] === "Literal" && schema2.const === value[key] ? max : 0;
          const checks = (0, index_5.Check)(schema2, references, value[key]) ? point : 0;
          const exists = keys.includes(key) ? point : 0;
          return acc + (literal + checks + exists);
        }, 0);
      } else {
        return (0, index_5.Check)(schema, references, value) ? 1 : 0;
      }
    }
    __name(ScoreUnion, "ScoreUnion");
    function SelectUnion(union, references, value) {
      let [select, best] = [union.anyOf[0], 0];
      for (const schema of union.anyOf) {
        const score = ScoreUnion(schema, references, value);
        if (score > best) {
          select = schema;
          best = score;
        }
      }
      return select;
    }
    __name(SelectUnion, "SelectUnion");
    function CastUnion(union, references, value) {
      if ("default" in union) {
        return union.default;
      } else {
        const schema = SelectUnion(union, references, value);
        return Cast(schema, references, value);
      }
    }
    __name(CastUnion, "CastUnion");
    function DefaultClone(schema, references, value) {
      return (0, index_5.Check)(schema, references, value) ? (0, index_6.Clone)(value) : (0, index_4.Create)(schema, references);
    }
    __name(DefaultClone, "DefaultClone");
    function Default(schema, references, value) {
      return (0, index_5.Check)(schema, references, value) ? value : (0, index_4.Create)(schema, references);
    }
    __name(Default, "Default");
    function FromArray(schema, references, value) {
      if ((0, index_5.Check)(schema, references, value))
        return (0, index_6.Clone)(value);
      const created = (0, index_1.IsArray)(value) ? (0, index_6.Clone)(value) : (0, index_4.Create)(schema, references);
      const minimum = (0, index_1.IsNumber)(schema.minItems) && created.length < schema.minItems ? [...created, ...Array.from({ length: schema.minItems - created.length }, () => null)] : created;
      const maximum = (0, index_1.IsNumber)(schema.maxItems) && minimum.length > schema.maxItems ? minimum.slice(0, schema.maxItems) : minimum;
      const casted = maximum.map((value2) => Visit(schema.items, references, value2));
      if (schema.uniqueItems !== true)
        return casted;
      const unique = [...new Set(casted)];
      if (!(0, index_5.Check)(schema, references, unique))
        throw new ValueCastError(schema, "Array cast produced invalid data due to uniqueItems constraint");
      return unique;
    }
    __name(FromArray, "FromArray");
    function FromConstructor(schema, references, value) {
      if ((0, index_5.Check)(schema, references, value))
        return (0, index_4.Create)(schema, references);
      const required = new Set(schema.returns.required || []);
      const result = /* @__PURE__ */ __name(function() {
      }, "result");
      for (const [key, property] of Object.entries(schema.returns.properties)) {
        if (!required.has(key) && value.prototype[key] === void 0)
          continue;
        result.prototype[key] = Visit(property, references, value.prototype[key]);
      }
      return result;
    }
    __name(FromConstructor, "FromConstructor");
    function FromIntersect(schema, references, value) {
      const created = (0, index_4.Create)(schema, references);
      const mapped = (0, index_1.IsPlainObject)(created) && (0, index_1.IsPlainObject)(value) ? { ...created, ...value } : value;
      return (0, index_5.Check)(schema, references, mapped) ? mapped : (0, index_4.Create)(schema, references);
    }
    __name(FromIntersect, "FromIntersect");
    function FromNever(schema, references, value) {
      throw new ValueCastError(schema, "Never types cannot be cast");
    }
    __name(FromNever, "FromNever");
    function FromObject(schema, references, value) {
      if ((0, index_5.Check)(schema, references, value))
        return value;
      if (value === null || typeof value !== "object")
        return (0, index_4.Create)(schema, references);
      const required = new Set(schema.required || []);
      const result = {};
      for (const [key, property] of Object.entries(schema.properties)) {
        if (!required.has(key) && value[key] === void 0)
          continue;
        result[key] = Visit(property, references, value[key]);
      }
      if (typeof schema.additionalProperties === "object") {
        const propertyNames = Object.getOwnPropertyNames(schema.properties);
        for (const propertyName of Object.getOwnPropertyNames(value)) {
          if (propertyNames.includes(propertyName))
            continue;
          result[propertyName] = Visit(schema.additionalProperties, references, value[propertyName]);
        }
      }
      return result;
    }
    __name(FromObject, "FromObject");
    function FromRecord(schema, references, value) {
      if ((0, index_5.Check)(schema, references, value))
        return (0, index_6.Clone)(value);
      if (value === null || typeof value !== "object" || Array.isArray(value) || value instanceof Date)
        return (0, index_4.Create)(schema, references);
      const subschemaPropertyName = Object.getOwnPropertyNames(schema.patternProperties)[0];
      const subschema = schema.patternProperties[subschemaPropertyName];
      const result = {};
      for (const [propKey, propValue] of Object.entries(value)) {
        result[propKey] = Visit(subschema, references, propValue);
      }
      return result;
    }
    __name(FromRecord, "FromRecord");
    function FromRef(schema, references, value) {
      return Visit((0, index_7.Deref)(schema, references), references, value);
    }
    __name(FromRef, "FromRef");
    function FromThis(schema, references, value) {
      return Visit((0, index_7.Deref)(schema, references), references, value);
    }
    __name(FromThis, "FromThis");
    function FromTuple(schema, references, value) {
      if ((0, index_5.Check)(schema, references, value))
        return (0, index_6.Clone)(value);
      if (!(0, index_1.IsArray)(value))
        return (0, index_4.Create)(schema, references);
      if (schema.items === void 0)
        return [];
      return schema.items.map((schema2, index) => Visit(schema2, references, value[index]));
    }
    __name(FromTuple, "FromTuple");
    function FromUnion(schema, references, value) {
      return (0, index_5.Check)(schema, references, value) ? (0, index_6.Clone)(value) : CastUnion(schema, references, value);
    }
    __name(FromUnion, "FromUnion");
    function Visit(schema, references, value) {
      const references_ = (0, index_1.IsString)(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema[index_3.Kind]) {
        case "Array":
          return FromArray(schema_, references_, value);
        case "Constructor":
          return FromConstructor(schema_, references_, value);
        case "Intersect":
          return FromIntersect(schema_, references_, value);
        case "Never":
          return FromNever(schema_, references_, value);
        case "Object":
          return FromObject(schema_, references_, value);
        case "Record":
          return FromRecord(schema_, references_, value);
        case "Ref":
          return FromRef(schema_, references_, value);
        case "This":
          return FromThis(schema_, references_, value);
        case "Tuple":
          return FromTuple(schema_, references_, value);
        case "Union":
          return FromUnion(schema_, references_, value);
        case "Date":
        case "Symbol":
        case "Uint8Array":
          return DefaultClone(schema, references, value);
        default:
          return Default(schema_, references_, value);
      }
    }
    __name(Visit, "Visit");
    function Cast(...args) {
      return args.length === 3 ? Visit(args[0], args[1], args[2]) : Visit(args[0], [], args[1]);
    }
    __name(Cast, "Cast");
    exports.Cast = Cast;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/cast/index.js
var require_cast2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/cast/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_cast(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/clean/clean.js
var require_clean = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/clean/clean.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Clean = void 0;
    var index_1 = require_keyof2();
    var index_2 = require_check2();
    var index_3 = require_clone2();
    var index_4 = require_deref2();
    var index_5 = require_symbols2();
    var index_6 = require_guard2();
    var type_1 = require_type3();
    function IsCheckable(schema) {
      return (0, type_1.IsSchema)(schema) && schema[index_5.Kind] !== "Unsafe";
    }
    __name(IsCheckable, "IsCheckable");
    function FromArray(schema, references, value) {
      if (!(0, index_6.IsArray)(value))
        return value;
      return value.map((value2) => Visit(schema.items, references, value2));
    }
    __name(FromArray, "FromArray");
    function FromIntersect(schema, references, value) {
      const unevaluatedProperties = schema.unevaluatedProperties;
      const intersections = schema.allOf.map((schema2) => Visit(schema2, references, (0, index_3.Clone)(value)));
      const composite = intersections.reduce((acc, value2) => (0, index_6.IsObject)(value2) ? { ...acc, ...value2 } : value2, {});
      if (!(0, index_6.IsObject)(value) || !(0, index_6.IsObject)(composite) || !(0, type_1.IsSchema)(unevaluatedProperties))
        return composite;
      const knownkeys = (0, index_1.KeyOfPropertyKeys)(schema);
      for (const key of Object.getOwnPropertyNames(value)) {
        if (knownkeys.includes(key))
          continue;
        if ((0, index_2.Check)(unevaluatedProperties, references, value[key])) {
          composite[key] = Visit(unevaluatedProperties, references, value[key]);
        }
      }
      return composite;
    }
    __name(FromIntersect, "FromIntersect");
    function FromObject(schema, references, value) {
      if (!(0, index_6.IsObject)(value) || (0, index_6.IsArray)(value))
        return value;
      const additionalProperties = schema.additionalProperties;
      for (const key of Object.getOwnPropertyNames(value)) {
        if (key in schema.properties) {
          value[key] = Visit(schema.properties[key], references, value[key]);
          continue;
        }
        if ((0, type_1.IsSchema)(additionalProperties) && (0, index_2.Check)(additionalProperties, references, value[key])) {
          value[key] = Visit(additionalProperties, references, value[key]);
          continue;
        }
        delete value[key];
      }
      return value;
    }
    __name(FromObject, "FromObject");
    function FromRecord(schema, references, value) {
      if (!(0, index_6.IsObject)(value))
        return value;
      const additionalProperties = schema.additionalProperties;
      const propertyKeys = Object.keys(value);
      const [propertyKey, propertySchema] = Object.entries(schema.patternProperties)[0];
      const propertyKeyTest = new RegExp(propertyKey);
      for (const key of propertyKeys) {
        if (propertyKeyTest.test(key)) {
          value[key] = Visit(propertySchema, references, value[key]);
          continue;
        }
        if ((0, type_1.IsSchema)(additionalProperties) && (0, index_2.Check)(additionalProperties, references, value[key])) {
          value[key] = Visit(additionalProperties, references, value[key]);
          continue;
        }
        delete value[key];
      }
      return value;
    }
    __name(FromRecord, "FromRecord");
    function FromRef(schema, references, value) {
      return Visit((0, index_4.Deref)(schema, references), references, value);
    }
    __name(FromRef, "FromRef");
    function FromThis(schema, references, value) {
      return Visit((0, index_4.Deref)(schema, references), references, value);
    }
    __name(FromThis, "FromThis");
    function FromTuple(schema, references, value) {
      if (!(0, index_6.IsArray)(value))
        return value;
      if ((0, index_6.IsUndefined)(schema.items))
        return [];
      const length = Math.min(value.length, schema.items.length);
      for (let i = 0; i < length; i++) {
        value[i] = Visit(schema.items[i], references, value[i]);
      }
      return value.length > length ? value.slice(0, length) : value;
    }
    __name(FromTuple, "FromTuple");
    function FromUnion(schema, references, value) {
      for (const inner of schema.anyOf) {
        if (IsCheckable(inner) && (0, index_2.Check)(inner, value)) {
          return Visit(inner, references, value);
        }
      }
      return value;
    }
    __name(FromUnion, "FromUnion");
    function Visit(schema, references, value) {
      const references_ = (0, index_6.IsString)(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema_[index_5.Kind]) {
        case "Array":
          return FromArray(schema_, references_, value);
        case "Intersect":
          return FromIntersect(schema_, references_, value);
        case "Object":
          return FromObject(schema_, references_, value);
        case "Record":
          return FromRecord(schema_, references_, value);
        case "Ref":
          return FromRef(schema_, references_, value);
        case "This":
          return FromThis(schema_, references_, value);
        case "Tuple":
          return FromTuple(schema_, references_, value);
        case "Union":
          return FromUnion(schema_, references_, value);
        default:
          return value;
      }
    }
    __name(Visit, "Visit");
    function Clean(...args) {
      return args.length === 3 ? Visit(args[0], args[1], args[2]) : Visit(args[0], [], args[1]);
    }
    __name(Clean, "Clean");
    exports.Clean = Clean;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/clean/index.js
var require_clean2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/clean/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_clean(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/composite/composite.js
var require_composite = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/composite/composite.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Composite = void 0;
    var index_1 = require_object2();
    var index_2 = require_intersect2();
    var index_3 = require_indexed2();
    var index_4 = require_keyof2();
    var type_1 = require_type2();
    function CompositeResolve(T) {
      const intersect = (0, index_2.Intersect)(T, {});
      const keys = (0, index_4.KeyOfPropertyKeys)(intersect);
      const properties = keys.reduce((acc, key) => ({ ...acc, [key]: (0, index_3.Index)(intersect, [key]) }), {});
      return (0, index_1.Object)(properties);
    }
    __name(CompositeResolve, "CompositeResolve");
    function Composite(T, options) {
      return (0, type_1.CloneType)(CompositeResolve(T), options);
    }
    __name(Composite, "Composite");
    exports.Composite = Composite;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/composite/index.js
var require_composite2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/composite/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_composite(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/convert/convert.js
var require_convert = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/convert/convert.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Convert = void 0;
    var index_1 = require_clone2();
    var index_2 = require_check2();
    var index_3 = require_deref2();
    var type_1 = require_type3();
    var index_4 = require_symbols2();
    var index_5 = require_composite2();
    var index_6 = require_guard2();
    function IsStringNumeric(value) {
      return (0, index_6.IsString)(value) && !isNaN(value) && !isNaN(parseFloat(value));
    }
    __name(IsStringNumeric, "IsStringNumeric");
    function IsValueToString(value) {
      return (0, index_6.IsBigInt)(value) || (0, index_6.IsBoolean)(value) || (0, index_6.IsNumber)(value);
    }
    __name(IsValueToString, "IsValueToString");
    function IsValueTrue(value) {
      return value === true || (0, index_6.IsNumber)(value) && value === 1 || (0, index_6.IsBigInt)(value) && value === BigInt("1") || (0, index_6.IsString)(value) && (value.toLowerCase() === "true" || value === "1");
    }
    __name(IsValueTrue, "IsValueTrue");
    function IsValueFalse(value) {
      return value === false || (0, index_6.IsNumber)(value) && (value === 0 || Object.is(value, -0)) || (0, index_6.IsBigInt)(value) && value === BigInt("0") || (0, index_6.IsString)(value) && (value.toLowerCase() === "false" || value === "0" || value === "-0");
    }
    __name(IsValueFalse, "IsValueFalse");
    function IsTimeStringWithTimeZone(value) {
      return (0, index_6.IsString)(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
    }
    __name(IsTimeStringWithTimeZone, "IsTimeStringWithTimeZone");
    function IsTimeStringWithoutTimeZone(value) {
      return (0, index_6.IsString)(value) && /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
    }
    __name(IsTimeStringWithoutTimeZone, "IsTimeStringWithoutTimeZone");
    function IsDateTimeStringWithTimeZone(value) {
      return (0, index_6.IsString)(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i.test(value);
    }
    __name(IsDateTimeStringWithTimeZone, "IsDateTimeStringWithTimeZone");
    function IsDateTimeStringWithoutTimeZone(value) {
      return (0, index_6.IsString)(value) && /^\d\d\d\d-[0-1]\d-[0-3]\dt(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)?$/i.test(value);
    }
    __name(IsDateTimeStringWithoutTimeZone, "IsDateTimeStringWithoutTimeZone");
    function IsDateString(value) {
      return (0, index_6.IsString)(value) && /^\d\d\d\d-[0-1]\d-[0-3]\d$/i.test(value);
    }
    __name(IsDateString, "IsDateString");
    function TryConvertLiteralString(value, target) {
      const conversion = TryConvertString(value);
      return conversion === target ? conversion : value;
    }
    __name(TryConvertLiteralString, "TryConvertLiteralString");
    function TryConvertLiteralNumber(value, target) {
      const conversion = TryConvertNumber(value);
      return conversion === target ? conversion : value;
    }
    __name(TryConvertLiteralNumber, "TryConvertLiteralNumber");
    function TryConvertLiteralBoolean(value, target) {
      const conversion = TryConvertBoolean(value);
      return conversion === target ? conversion : value;
    }
    __name(TryConvertLiteralBoolean, "TryConvertLiteralBoolean");
    function TryConvertLiteral(schema, value) {
      return (0, index_6.IsString)(schema.const) ? TryConvertLiteralString(value, schema.const) : (0, index_6.IsNumber)(schema.const) ? TryConvertLiteralNumber(value, schema.const) : (0, index_6.IsBoolean)(schema.const) ? TryConvertLiteralBoolean(value, schema.const) : (0, index_1.Clone)(value);
    }
    __name(TryConvertLiteral, "TryConvertLiteral");
    function TryConvertBoolean(value) {
      return IsValueTrue(value) ? true : IsValueFalse(value) ? false : value;
    }
    __name(TryConvertBoolean, "TryConvertBoolean");
    function TryConvertBigInt(value) {
      return IsStringNumeric(value) ? BigInt(parseInt(value)) : (0, index_6.IsNumber)(value) ? BigInt(value | 0) : IsValueFalse(value) ? BigInt(0) : IsValueTrue(value) ? BigInt(1) : value;
    }
    __name(TryConvertBigInt, "TryConvertBigInt");
    function TryConvertString(value) {
      return IsValueToString(value) ? value.toString() : (0, index_6.IsSymbol)(value) && value.description !== void 0 ? value.description.toString() : value;
    }
    __name(TryConvertString, "TryConvertString");
    function TryConvertNumber(value) {
      return IsStringNumeric(value) ? parseFloat(value) : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
    }
    __name(TryConvertNumber, "TryConvertNumber");
    function TryConvertInteger(value) {
      return IsStringNumeric(value) ? parseInt(value) : (0, index_6.IsNumber)(value) ? value | 0 : IsValueTrue(value) ? 1 : IsValueFalse(value) ? 0 : value;
    }
    __name(TryConvertInteger, "TryConvertInteger");
    function TryConvertNull(value) {
      return (0, index_6.IsString)(value) && value.toLowerCase() === "null" ? null : value;
    }
    __name(TryConvertNull, "TryConvertNull");
    function TryConvertUndefined(value) {
      return (0, index_6.IsString)(value) && value === "undefined" ? void 0 : value;
    }
    __name(TryConvertUndefined, "TryConvertUndefined");
    function TryConvertDate(value) {
      return (0, index_6.IsDate)(value) ? value : (0, index_6.IsNumber)(value) ? new Date(value) : IsValueTrue(value) ? /* @__PURE__ */ new Date(1) : IsValueFalse(value) ? /* @__PURE__ */ new Date(0) : IsStringNumeric(value) ? new Date(parseInt(value)) : IsTimeStringWithoutTimeZone(value) ? /* @__PURE__ */ new Date(`1970-01-01T${value}.000Z`) : IsTimeStringWithTimeZone(value) ? /* @__PURE__ */ new Date(`1970-01-01T${value}`) : IsDateTimeStringWithoutTimeZone(value) ? /* @__PURE__ */ new Date(`${value}.000Z`) : IsDateTimeStringWithTimeZone(value) ? new Date(value) : IsDateString(value) ? /* @__PURE__ */ new Date(`${value}T00:00:00.000Z`) : value;
    }
    __name(TryConvertDate, "TryConvertDate");
    function Default(value) {
      return value;
    }
    __name(Default, "Default");
    function FromArray(schema, references, value) {
      if ((0, index_6.IsArray)(value)) {
        return value.map((value2) => Visit(schema.items, references, value2));
      }
      return value;
    }
    __name(FromArray, "FromArray");
    function FromBigInt(schema, references, value) {
      return TryConvertBigInt(value);
    }
    __name(FromBigInt, "FromBigInt");
    function FromBoolean(schema, references, value) {
      return TryConvertBoolean(value);
    }
    __name(FromBoolean, "FromBoolean");
    function FromDate(schema, references, value) {
      return TryConvertDate(value);
    }
    __name(FromDate, "FromDate");
    function FromInteger(schema, references, value) {
      return TryConvertInteger(value);
    }
    __name(FromInteger, "FromInteger");
    function FromIntersect(schema, references, value) {
      const allObjects = schema.allOf.every((schema2) => (0, type_1.IsObject)(schema2));
      if (allObjects)
        return Visit((0, index_5.Composite)(schema.allOf), references, value);
      return Visit(schema.allOf[0], references, value);
    }
    __name(FromIntersect, "FromIntersect");
    function FromLiteral(schema, references, value) {
      return TryConvertLiteral(schema, value);
    }
    __name(FromLiteral, "FromLiteral");
    function FromNull(schema, references, value) {
      return TryConvertNull(value);
    }
    __name(FromNull, "FromNull");
    function FromNumber(schema, references, value) {
      return TryConvertNumber(value);
    }
    __name(FromNumber, "FromNumber");
    function FromObject(schema, references, value) {
      const isConvertable = (0, index_6.IsObject)(value);
      if (!isConvertable)
        return value;
      return Object.getOwnPropertyNames(schema.properties).reduce((value2, key) => {
        return !(0, index_6.IsUndefined)(value2[key]) ? { ...value2, [key]: Visit(schema.properties[key], references, value2[key]) } : { ...value2 };
      }, value);
    }
    __name(FromObject, "FromObject");
    function FromRecord(schema, references, value) {
      const propertyKey = Object.getOwnPropertyNames(schema.patternProperties)[0];
      const property = schema.patternProperties[propertyKey];
      const result = {};
      for (const [propKey, propValue] of Object.entries(value)) {
        result[propKey] = Visit(property, references, propValue);
      }
      return result;
    }
    __name(FromRecord, "FromRecord");
    function FromRef(schema, references, value) {
      return Visit((0, index_3.Deref)(schema, references), references, value);
    }
    __name(FromRef, "FromRef");
    function FromString(schema, references, value) {
      return TryConvertString(value);
    }
    __name(FromString, "FromString");
    function FromSymbol(schema, references, value) {
      return (0, index_6.IsString)(value) || (0, index_6.IsNumber)(value) ? Symbol(value) : value;
    }
    __name(FromSymbol, "FromSymbol");
    function FromThis(schema, references, value) {
      return Visit((0, index_3.Deref)(schema, references), references, value);
    }
    __name(FromThis, "FromThis");
    function FromTuple(schema, references, value) {
      const isConvertable = (0, index_6.IsArray)(value) && !(0, index_6.IsUndefined)(schema.items);
      if (!isConvertable)
        return value;
      return value.map((value2, index) => {
        return index < schema.items.length ? Visit(schema.items[index], references, value2) : value2;
      });
    }
    __name(FromTuple, "FromTuple");
    function FromUndefined(schema, references, value) {
      return TryConvertUndefined(value);
    }
    __name(FromUndefined, "FromUndefined");
    function FromUnion(schema, references, value) {
      for (const subschema of schema.anyOf) {
        const converted = Visit(subschema, references, value);
        if ((0, index_2.Check)(subschema, references, converted)) {
          return converted;
        }
      }
      return value;
    }
    __name(FromUnion, "FromUnion");
    function Visit(schema, references, value) {
      const references_ = (0, index_6.IsString)(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema[index_4.Kind]) {
        case "Array":
          return FromArray(schema_, references_, value);
        case "BigInt":
          return FromBigInt(schema_, references_, value);
        case "Boolean":
          return FromBoolean(schema_, references_, value);
        case "Date":
          return FromDate(schema_, references_, value);
        case "Integer":
          return FromInteger(schema_, references_, value);
        case "Intersect":
          return FromIntersect(schema_, references_, value);
        case "Literal":
          return FromLiteral(schema_, references_, value);
        case "Null":
          return FromNull(schema_, references_, value);
        case "Number":
          return FromNumber(schema_, references_, value);
        case "Object":
          return FromObject(schema_, references_, value);
        case "Record":
          return FromRecord(schema_, references_, value);
        case "Ref":
          return FromRef(schema_, references_, value);
        case "String":
          return FromString(schema_, references_, value);
        case "Symbol":
          return FromSymbol(schema_, references_, value);
        case "This":
          return FromThis(schema_, references_, value);
        case "Tuple":
          return FromTuple(schema_, references_, value);
        case "Undefined":
          return FromUndefined(schema_, references_, value);
        case "Union":
          return FromUnion(schema_, references_, value);
        default:
          return Default(value);
      }
    }
    __name(Visit, "Visit");
    function Convert(...args) {
      return args.length === 3 ? Visit(args[0], args[1], args[2]) : Visit(args[0], [], args[1]);
    }
    __name(Convert, "Convert");
    exports.Convert = Convert;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/convert/index.js
var require_convert2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/convert/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_convert(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/default/default.js
var require_default = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/default/default.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Default = void 0;
    var index_1 = require_check2();
    var index_2 = require_deref2();
    var index_3 = require_symbols2();
    var index_4 = require_guard2();
    var type_1 = require_type3();
    function ValueOrDefault(schema, value) {
      return !(value === void 0) || !("default" in schema) ? value : schema.default;
    }
    __name(ValueOrDefault, "ValueOrDefault");
    function IsCheckable(schema) {
      return (0, type_1.IsSchema)(schema) && schema[index_3.Kind] !== "Unsafe";
    }
    __name(IsCheckable, "IsCheckable");
    function IsDefaultSchema(value) {
      return (0, type_1.IsSchema)(value) && "default" in value;
    }
    __name(IsDefaultSchema, "IsDefaultSchema");
    function FromArray(schema, references, value) {
      const defaulted = ValueOrDefault(schema, value);
      if (!(0, index_4.IsArray)(defaulted))
        return defaulted;
      for (let i = 0; i < defaulted.length; i++) {
        defaulted[i] = Visit(schema.items, references, defaulted[i]);
      }
      return defaulted;
    }
    __name(FromArray, "FromArray");
    function FromIntersect(schema, references, value) {
      const defaulted = ValueOrDefault(schema, value);
      return schema.allOf.reduce((acc, schema2) => {
        const next = Visit(schema2, references, defaulted);
        return (0, index_4.IsObject)(next) ? { ...acc, ...next } : next;
      }, {});
    }
    __name(FromIntersect, "FromIntersect");
    function FromObject(schema, references, value) {
      const defaulted = ValueOrDefault(schema, value);
      if (!(0, index_4.IsObject)(defaulted))
        return defaulted;
      const additionalPropertiesSchema = schema.additionalProperties;
      const knownPropertyKeys = Object.getOwnPropertyNames(schema.properties);
      for (const key of knownPropertyKeys) {
        if (!IsDefaultSchema(schema.properties[key]))
          continue;
        defaulted[key] = Visit(schema.properties[key], references, defaulted[key]);
      }
      if (!IsDefaultSchema(additionalPropertiesSchema))
        return defaulted;
      for (const key of Object.getOwnPropertyNames(defaulted)) {
        if (knownPropertyKeys.includes(key))
          continue;
        defaulted[key] = Visit(additionalPropertiesSchema, references, defaulted[key]);
      }
      return defaulted;
    }
    __name(FromObject, "FromObject");
    function FromRecord(schema, references, value) {
      const defaulted = ValueOrDefault(schema, value);
      if (!(0, index_4.IsObject)(defaulted))
        return defaulted;
      const additionalPropertiesSchema = schema.additionalProperties;
      const [propertyKeyPattern, propertySchema] = Object.entries(schema.patternProperties)[0];
      const knownPropertyKey = new RegExp(propertyKeyPattern);
      for (const key of Object.getOwnPropertyNames(defaulted)) {
        if (!(knownPropertyKey.test(key) && IsDefaultSchema(propertySchema)))
          continue;
        defaulted[key] = Visit(propertySchema, references, defaulted[key]);
      }
      if (!IsDefaultSchema(additionalPropertiesSchema))
        return defaulted;
      for (const key of Object.getOwnPropertyNames(defaulted)) {
        if (knownPropertyKey.test(key))
          continue;
        defaulted[key] = Visit(additionalPropertiesSchema, references, defaulted[key]);
      }
      return defaulted;
    }
    __name(FromRecord, "FromRecord");
    function FromRef(schema, references, value) {
      return Visit((0, index_2.Deref)(schema, references), references, ValueOrDefault(schema, value));
    }
    __name(FromRef, "FromRef");
    function FromThis(schema, references, value) {
      return Visit((0, index_2.Deref)(schema, references), references, value);
    }
    __name(FromThis, "FromThis");
    function FromTuple(schema, references, value) {
      const defaulted = ValueOrDefault(schema, value);
      if (!(0, index_4.IsArray)(defaulted) || (0, index_4.IsUndefined)(schema.items))
        return defaulted;
      const [items, max] = [schema.items, Math.max(schema.items.length, defaulted.length)];
      for (let i = 0; i < max; i++) {
        if (i < items.length)
          defaulted[i] = Visit(items[i], references, defaulted[i]);
      }
      return defaulted;
    }
    __name(FromTuple, "FromTuple");
    function FromUnion(schema, references, value) {
      const defaulted = ValueOrDefault(schema, value);
      for (const inner of schema.anyOf) {
        const result = Visit(inner, references, defaulted);
        if (IsCheckable(inner) && (0, index_1.Check)(inner, result)) {
          return result;
        }
      }
      return defaulted;
    }
    __name(FromUnion, "FromUnion");
    function Visit(schema, references, value) {
      const references_ = (0, index_4.IsString)(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema_[index_3.Kind]) {
        case "Array":
          return FromArray(schema_, references_, value);
        case "Intersect":
          return FromIntersect(schema_, references_, value);
        case "Object":
          return FromObject(schema_, references_, value);
        case "Record":
          return FromRecord(schema_, references_, value);
        case "Ref":
          return FromRef(schema_, references_, value);
        case "This":
          return FromThis(schema_, references_, value);
        case "Tuple":
          return FromTuple(schema_, references_, value);
        case "Union":
          return FromUnion(schema_, references_, value);
        default:
          return ValueOrDefault(schema_, value);
      }
    }
    __name(Visit, "Visit");
    function Default(...args) {
      return args.length === 3 ? Visit(args[0], args[1], args[2]) : Visit(args[0], [], args[1]);
    }
    __name(Default, "Default");
    exports.Default = Default;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/default/index.js
var require_default2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/default/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_default(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/pointer/pointer.js
var require_pointer = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/pointer/pointer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Get = exports.Has = exports.Delete = exports.Set = exports.Format = exports.ValuePointerRootDeleteError = exports.ValuePointerRootSetError = void 0;
    var index_1 = require_error2();
    var ValuePointerRootSetError = class extends index_1.TypeBoxError {
      static {
        __name(this, "ValuePointerRootSetError");
      }
      constructor(value, path, update) {
        super("Cannot set root value");
        this.value = value;
        this.path = path;
        this.update = update;
      }
    };
    exports.ValuePointerRootSetError = ValuePointerRootSetError;
    var ValuePointerRootDeleteError = class extends index_1.TypeBoxError {
      static {
        __name(this, "ValuePointerRootDeleteError");
      }
      constructor(value, path) {
        super("Cannot delete root value");
        this.value = value;
        this.path = path;
      }
    };
    exports.ValuePointerRootDeleteError = ValuePointerRootDeleteError;
    function Escape(component) {
      return component.indexOf("~") === -1 ? component : component.replace(/~1/g, "/").replace(/~0/g, "~");
    }
    __name(Escape, "Escape");
    function* Format(pointer) {
      if (pointer === "")
        return;
      let [start, end] = [0, 0];
      for (let i = 0; i < pointer.length; i++) {
        const char = pointer.charAt(i);
        if (char === "/") {
          if (i === 0) {
            start = i + 1;
          } else {
            end = i;
            yield Escape(pointer.slice(start, end));
            start = i + 1;
          }
        } else {
          end = i;
        }
      }
      yield Escape(pointer.slice(start));
    }
    __name(Format, "Format");
    exports.Format = Format;
    function Set2(value, pointer, update) {
      if (pointer === "")
        throw new ValuePointerRootSetError(value, pointer, update);
      let [owner, next, key] = [null, value, ""];
      for (const component of Format(pointer)) {
        if (next[component] === void 0)
          next[component] = {};
        owner = next;
        next = next[component];
        key = component;
      }
      owner[key] = update;
    }
    __name(Set2, "Set");
    exports.Set = Set2;
    function Delete(value, pointer) {
      if (pointer === "")
        throw new ValuePointerRootDeleteError(value, pointer);
      let [owner, next, key] = [null, value, ""];
      for (const component of Format(pointer)) {
        if (next[component] === void 0 || next[component] === null)
          return;
        owner = next;
        next = next[component];
        key = component;
      }
      if (Array.isArray(owner)) {
        const index = parseInt(key);
        owner.splice(index, 1);
      } else {
        delete owner[key];
      }
    }
    __name(Delete, "Delete");
    exports.Delete = Delete;
    function Has(value, pointer) {
      if (pointer === "")
        return true;
      let [owner, next, key] = [null, value, ""];
      for (const component of Format(pointer)) {
        if (next[component] === void 0)
          return false;
        owner = next;
        next = next[component];
        key = component;
      }
      return Object.getOwnPropertyNames(owner).includes(key);
    }
    __name(Has, "Has");
    exports.Has = Has;
    function Get(value, pointer) {
      if (pointer === "")
        return value;
      let current = value;
      for (const component of Format(pointer)) {
        if (current[component] === void 0)
          return void 0;
        current = current[component];
      }
      return current;
    }
    __name(Get, "Get");
    exports.Get = Get;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/pointer/index.js
var require_pointer2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/pointer/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValuePointer = void 0;
    exports.ValuePointer = require_pointer();
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/delta/delta.js
var require_delta = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/delta/delta.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Patch = exports.Diff = exports.ValueDeltaSymbolError = exports.ValueDeltaError = exports.Edit = exports.Delete = exports.Update = exports.Insert = void 0;
    var index_1 = require_guard2();
    var index_2 = require_pointer2();
    var index_3 = require_clone2();
    var index_4 = require_error2();
    var index_5 = require_literal2();
    var index_6 = require_object2();
    var index_7 = require_string2();
    var index_8 = require_unknown2();
    var index_9 = require_union2();
    exports.Insert = (0, index_6.Object)({
      type: (0, index_5.Literal)("insert"),
      path: (0, index_7.String)(),
      value: (0, index_8.Unknown)()
    });
    exports.Update = (0, index_6.Object)({
      type: (0, index_5.Literal)("update"),
      path: (0, index_7.String)(),
      value: (0, index_8.Unknown)()
    });
    exports.Delete = (0, index_6.Object)({
      type: (0, index_5.Literal)("delete"),
      path: (0, index_7.String)()
    });
    exports.Edit = (0, index_9.Union)([exports.Insert, exports.Update, exports.Delete]);
    var ValueDeltaError = class extends index_4.TypeBoxError {
      static {
        __name(this, "ValueDeltaError");
      }
      constructor(value, message) {
        super(message);
        this.value = value;
      }
    };
    exports.ValueDeltaError = ValueDeltaError;
    var ValueDeltaSymbolError = class extends ValueDeltaError {
      static {
        __name(this, "ValueDeltaSymbolError");
      }
      constructor(value) {
        super(value, "Cannot diff objects with symbol keys");
        this.value = value;
      }
    };
    exports.ValueDeltaSymbolError = ValueDeltaSymbolError;
    function CreateUpdate(path, value) {
      return { type: "update", path, value };
    }
    __name(CreateUpdate, "CreateUpdate");
    function CreateInsert(path, value) {
      return { type: "insert", path, value };
    }
    __name(CreateInsert, "CreateInsert");
    function CreateDelete(path) {
      return { type: "delete", path };
    }
    __name(CreateDelete, "CreateDelete");
    function* ObjectType(path, current, next) {
      if (!(0, index_1.IsPlainObject)(next))
        return yield CreateUpdate(path, next);
      const currentKeys = [...globalThis.Object.keys(current), ...globalThis.Object.getOwnPropertySymbols(current)];
      const nextKeys = [...globalThis.Object.keys(next), ...globalThis.Object.getOwnPropertySymbols(next)];
      for (const key of currentKeys) {
        if ((0, index_1.IsSymbol)(key))
          throw new ValueDeltaSymbolError(key);
        if ((0, index_1.IsUndefined)(next[key]) && nextKeys.includes(key))
          yield CreateUpdate(`${path}/${globalThis.String(key)}`, void 0);
      }
      for (const key of nextKeys) {
        if ((0, index_1.IsUndefined)(current[key]) || (0, index_1.IsUndefined)(next[key]))
          continue;
        if ((0, index_1.IsSymbol)(key))
          throw new ValueDeltaSymbolError(key);
        yield* Visit(`${path}/${globalThis.String(key)}`, current[key], next[key]);
      }
      for (const key of nextKeys) {
        if ((0, index_1.IsSymbol)(key))
          throw new ValueDeltaSymbolError(key);
        if ((0, index_1.IsUndefined)(current[key]))
          yield CreateInsert(`${path}/${globalThis.String(key)}`, next[key]);
      }
      for (const key of currentKeys.reverse()) {
        if ((0, index_1.IsSymbol)(key))
          throw new ValueDeltaSymbolError(key);
        if ((0, index_1.IsUndefined)(next[key]) && !nextKeys.includes(key))
          yield CreateDelete(`${path}/${globalThis.String(key)}`);
      }
    }
    __name(ObjectType, "ObjectType");
    function* ArrayType(path, current, next) {
      if (!(0, index_1.IsArray)(next))
        return yield CreateUpdate(path, next);
      for (let i = 0; i < Math.min(current.length, next.length); i++) {
        yield* Visit(`${path}/${i}`, current[i], next[i]);
      }
      for (let i = 0; i < next.length; i++) {
        if (i < current.length)
          continue;
        yield CreateInsert(`${path}/${i}`, next[i]);
      }
      for (let i = current.length - 1; i >= 0; i--) {
        if (i < next.length)
          continue;
        yield CreateDelete(`${path}/${i}`);
      }
    }
    __name(ArrayType, "ArrayType");
    function* TypedArrayType(path, current, next) {
      if (!(0, index_1.IsTypedArray)(next) || current.length !== next.length || globalThis.Object.getPrototypeOf(current).constructor.name !== globalThis.Object.getPrototypeOf(next).constructor.name)
        return yield CreateUpdate(path, next);
      for (let i = 0; i < Math.min(current.length, next.length); i++) {
        yield* Visit(`${path}/${i}`, current[i], next[i]);
      }
    }
    __name(TypedArrayType, "TypedArrayType");
    function* ValueType(path, current, next) {
      if (current === next)
        return;
      yield CreateUpdate(path, next);
    }
    __name(ValueType, "ValueType");
    function* Visit(path, current, next) {
      if ((0, index_1.IsPlainObject)(current))
        return yield* ObjectType(path, current, next);
      if ((0, index_1.IsArray)(current))
        return yield* ArrayType(path, current, next);
      if ((0, index_1.IsTypedArray)(current))
        return yield* TypedArrayType(path, current, next);
      if ((0, index_1.IsValueType)(current))
        return yield* ValueType(path, current, next);
      throw new ValueDeltaError(current, "Unable to create diff edits for unknown value");
    }
    __name(Visit, "Visit");
    function Diff(current, next) {
      return [...Visit("", current, next)];
    }
    __name(Diff, "Diff");
    exports.Diff = Diff;
    function IsRootUpdate(edits) {
      return edits.length > 0 && edits[0].path === "" && edits[0].type === "update";
    }
    __name(IsRootUpdate, "IsRootUpdate");
    function IsIdentity(edits) {
      return edits.length === 0;
    }
    __name(IsIdentity, "IsIdentity");
    function Patch(current, edits) {
      if (IsRootUpdate(edits)) {
        return (0, index_3.Clone)(edits[0].value);
      }
      if (IsIdentity(edits)) {
        return (0, index_3.Clone)(current);
      }
      const clone = (0, index_3.Clone)(current);
      for (const edit of edits) {
        switch (edit.type) {
          case "insert": {
            index_2.ValuePointer.Set(clone, edit.path, edit.value);
            break;
          }
          case "update": {
            index_2.ValuePointer.Set(clone, edit.path, edit.value);
            break;
          }
          case "delete": {
            index_2.ValuePointer.Delete(clone, edit.path);
            break;
          }
        }
      }
      return clone;
    }
    __name(Patch, "Patch");
    exports.Patch = Patch;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/delta/index.js
var require_delta2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/delta/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_delta(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/equal/equal.js
var require_equal = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/equal/equal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Equal = void 0;
    var index_1 = require_guard2();
    function ObjectType(left, right) {
      if (!(0, index_1.IsPlainObject)(right))
        return false;
      const leftKeys = [...Object.keys(left), ...Object.getOwnPropertySymbols(left)];
      const rightKeys = [...Object.keys(right), ...Object.getOwnPropertySymbols(right)];
      if (leftKeys.length !== rightKeys.length)
        return false;
      return leftKeys.every((key) => Equal(left[key], right[key]));
    }
    __name(ObjectType, "ObjectType");
    function DateType(left, right) {
      return (0, index_1.IsDate)(right) && left.getTime() === right.getTime();
    }
    __name(DateType, "DateType");
    function ArrayType(left, right) {
      if (!(0, index_1.IsArray)(right) || left.length !== right.length)
        return false;
      return left.every((value, index) => Equal(value, right[index]));
    }
    __name(ArrayType, "ArrayType");
    function TypedArrayType(left, right) {
      if (!(0, index_1.IsTypedArray)(right) || left.length !== right.length || Object.getPrototypeOf(left).constructor.name !== Object.getPrototypeOf(right).constructor.name)
        return false;
      return left.every((value, index) => Equal(value, right[index]));
    }
    __name(TypedArrayType, "TypedArrayType");
    function ValueType(left, right) {
      return left === right;
    }
    __name(ValueType, "ValueType");
    function Equal(left, right) {
      if ((0, index_1.IsPlainObject)(left))
        return ObjectType(left, right);
      if ((0, index_1.IsDate)(left))
        return DateType(left, right);
      if ((0, index_1.IsTypedArray)(left))
        return TypedArrayType(left, right);
      if ((0, index_1.IsArray)(left))
        return ArrayType(left, right);
      if ((0, index_1.IsValueType)(left))
        return ValueType(left, right);
      throw new Error("ValueEquals: Unable to compare value");
    }
    __name(Equal, "Equal");
    exports.Equal = Equal;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/equal/index.js
var require_equal2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/equal/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_equal(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/mutate/mutate.js
var require_mutate = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/mutate/mutate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Mutate = exports.ValueMutateError = void 0;
    var index_1 = require_guard2();
    var index_2 = require_pointer2();
    var index_3 = require_clone2();
    var index_4 = require_error2();
    var ValueMutateError = class extends index_4.TypeBoxError {
      static {
        __name(this, "ValueMutateError");
      }
      constructor(message) {
        super(message);
      }
    };
    exports.ValueMutateError = ValueMutateError;
    function ObjectType(root, path, current, next) {
      if (!(0, index_1.IsPlainObject)(current)) {
        index_2.ValuePointer.Set(root, path, (0, index_3.Clone)(next));
      } else {
        const currentKeys = Object.keys(current);
        const nextKeys = Object.keys(next);
        for (const currentKey of currentKeys) {
          if (!nextKeys.includes(currentKey)) {
            delete current[currentKey];
          }
        }
        for (const nextKey of nextKeys) {
          if (!currentKeys.includes(nextKey)) {
            current[nextKey] = null;
          }
        }
        for (const nextKey of nextKeys) {
          Visit(root, `${path}/${nextKey}`, current[nextKey], next[nextKey]);
        }
      }
    }
    __name(ObjectType, "ObjectType");
    function ArrayType(root, path, current, next) {
      if (!(0, index_1.IsArray)(current)) {
        index_2.ValuePointer.Set(root, path, (0, index_3.Clone)(next));
      } else {
        for (let index = 0; index < next.length; index++) {
          Visit(root, `${path}/${index}`, current[index], next[index]);
        }
        current.splice(next.length);
      }
    }
    __name(ArrayType, "ArrayType");
    function TypedArrayType(root, path, current, next) {
      if ((0, index_1.IsTypedArray)(current) && current.length === next.length) {
        for (let i = 0; i < current.length; i++) {
          current[i] = next[i];
        }
      } else {
        index_2.ValuePointer.Set(root, path, (0, index_3.Clone)(next));
      }
    }
    __name(TypedArrayType, "TypedArrayType");
    function ValueType(root, path, current, next) {
      if (current === next)
        return;
      index_2.ValuePointer.Set(root, path, next);
    }
    __name(ValueType, "ValueType");
    function Visit(root, path, current, next) {
      if ((0, index_1.IsArray)(next))
        return ArrayType(root, path, current, next);
      if ((0, index_1.IsTypedArray)(next))
        return TypedArrayType(root, path, current, next);
      if ((0, index_1.IsPlainObject)(next))
        return ObjectType(root, path, current, next);
      if ((0, index_1.IsValueType)(next))
        return ValueType(root, path, current, next);
    }
    __name(Visit, "Visit");
    function IsNonMutableValue(value) {
      return (0, index_1.IsTypedArray)(value) || (0, index_1.IsValueType)(value);
    }
    __name(IsNonMutableValue, "IsNonMutableValue");
    function IsMismatchedValue(current, next) {
      return (0, index_1.IsPlainObject)(current) && (0, index_1.IsArray)(next) || (0, index_1.IsArray)(current) && (0, index_1.IsPlainObject)(next);
    }
    __name(IsMismatchedValue, "IsMismatchedValue");
    function Mutate(current, next) {
      if (IsNonMutableValue(current) || IsNonMutableValue(next))
        throw new ValueMutateError("Only object and array types can be mutated at the root level");
      if (IsMismatchedValue(current, next))
        throw new ValueMutateError("Cannot assign due type mismatch of assignable values");
      Visit(current, "", current, next);
    }
    __name(Mutate, "Mutate");
    exports.Mutate = Mutate;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/mutate/index.js
var require_mutate2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/mutate/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_mutate(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/transform/decode.js
var require_decode = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/transform/decode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransformDecode = exports.TransformDecodeError = exports.TransformDecodeCheckError = void 0;
    var index_1 = require_symbols2();
    var index_2 = require_error2();
    var index_3 = require_keyof2();
    var index_4 = require_indexed2();
    var index_5 = require_deref2();
    var index_6 = require_check2();
    var index_7 = require_guard2();
    var type_1 = require_type3();
    var TransformDecodeCheckError = class extends index_2.TypeBoxError {
      static {
        __name(this, "TransformDecodeCheckError");
      }
      constructor(schema, value, error) {
        super(`Unable to decode due to invalid value`);
        this.schema = schema;
        this.value = value;
        this.error = error;
      }
    };
    exports.TransformDecodeCheckError = TransformDecodeCheckError;
    var TransformDecodeError = class extends index_2.TypeBoxError {
      static {
        __name(this, "TransformDecodeError");
      }
      constructor(schema, value, error) {
        super(`${error instanceof Error ? error.message : "Unknown error"}`);
        this.schema = schema;
        this.value = value;
      }
    };
    exports.TransformDecodeError = TransformDecodeError;
    function Default(schema, value) {
      try {
        return (0, type_1.IsTransform)(schema) ? schema[index_1.TransformKind].Decode(value) : value;
      } catch (error) {
        throw new TransformDecodeError(schema, value, error);
      }
    }
    __name(Default, "Default");
    function FromArray(schema, references, value) {
      return (0, index_7.IsArray)(value) ? Default(schema, value.map((value2) => Visit(schema.items, references, value2))) : Default(schema, value);
    }
    __name(FromArray, "FromArray");
    function FromIntersect(schema, references, value) {
      if (!(0, index_7.IsPlainObject)(value) || (0, index_7.IsValueType)(value))
        return Default(schema, value);
      const knownKeys = (0, index_3.KeyOfPropertyKeys)(schema);
      const knownProperties = knownKeys.reduce((value2, key) => {
        return key in value2 ? { ...value2, [key]: Visit((0, index_4.Index)(schema, [key]), references, value2[key]) } : value2;
      }, value);
      if (!(0, type_1.IsTransform)(schema.unevaluatedProperties)) {
        return Default(schema, knownProperties);
      }
      const unknownKeys = Object.getOwnPropertyNames(knownProperties);
      const unevaluatedProperties = schema.unevaluatedProperties;
      const unknownProperties = unknownKeys.reduce((value2, key) => {
        return !knownKeys.includes(key) ? { ...value2, [key]: Default(unevaluatedProperties, value2[key]) } : value2;
      }, knownProperties);
      return Default(schema, unknownProperties);
    }
    __name(FromIntersect, "FromIntersect");
    function FromNot(schema, references, value) {
      return Default(schema, Visit(schema.not, references, value));
    }
    __name(FromNot, "FromNot");
    function FromObject(schema, references, value) {
      if (!(0, index_7.IsPlainObject)(value))
        return Default(schema, value);
      const knownKeys = (0, index_3.KeyOfPropertyKeys)(schema);
      const knownProperties = knownKeys.reduce((value2, key) => {
        return key in value2 ? { ...value2, [key]: Visit(schema.properties[key], references, value2[key]) } : value2;
      }, value);
      if (!(0, type_1.IsSchema)(schema.additionalProperties)) {
        return Default(schema, knownProperties);
      }
      const unknownKeys = Object.getOwnPropertyNames(knownProperties);
      const additionalProperties = schema.additionalProperties;
      const unknownProperties = unknownKeys.reduce((value2, key) => {
        return !knownKeys.includes(key) ? { ...value2, [key]: Default(additionalProperties, value2[key]) } : value2;
      }, knownProperties);
      return Default(schema, unknownProperties);
    }
    __name(FromObject, "FromObject");
    function FromRecord(schema, references, value) {
      if (!(0, index_7.IsPlainObject)(value))
        return Default(schema, value);
      const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
      const knownKeys = new RegExp(pattern);
      const knownProperties = Object.getOwnPropertyNames(value).reduce((value2, key) => {
        return knownKeys.test(key) ? { ...value2, [key]: Visit(schema.patternProperties[pattern], references, value2[key]) } : value2;
      }, value);
      if (!(0, type_1.IsSchema)(schema.additionalProperties)) {
        return Default(schema, knownProperties);
      }
      const unknownKeys = Object.getOwnPropertyNames(knownProperties);
      const additionalProperties = schema.additionalProperties;
      const unknownProperties = unknownKeys.reduce((value2, key) => {
        return !knownKeys.test(key) ? { ...value2, [key]: Default(additionalProperties, value2[key]) } : value2;
      }, knownProperties);
      return Default(schema, unknownProperties);
    }
    __name(FromRecord, "FromRecord");
    function FromRef(schema, references, value) {
      const target = (0, index_5.Deref)(schema, references);
      return Default(schema, Visit(target, references, value));
    }
    __name(FromRef, "FromRef");
    function FromThis(schema, references, value) {
      const target = (0, index_5.Deref)(schema, references);
      return Default(schema, Visit(target, references, value));
    }
    __name(FromThis, "FromThis");
    function FromTuple(schema, references, value) {
      return (0, index_7.IsArray)(value) && (0, index_7.IsArray)(schema.items) ? Default(schema, schema.items.map((schema2, index) => Visit(schema2, references, value[index]))) : Default(schema, value);
    }
    __name(FromTuple, "FromTuple");
    function FromUnion(schema, references, value) {
      for (const subschema of schema.anyOf) {
        if (!(0, index_6.Check)(subschema, references, value))
          continue;
        const decoded = Visit(subschema, references, value);
        return Default(schema, decoded);
      }
      return Default(schema, value);
    }
    __name(FromUnion, "FromUnion");
    function Visit(schema, references, value) {
      const references_ = typeof schema.$id === "string" ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema[index_1.Kind]) {
        case "Array":
          return FromArray(schema_, references_, value);
        case "Intersect":
          return FromIntersect(schema_, references_, value);
        case "Not":
          return FromNot(schema_, references_, value);
        case "Object":
          return FromObject(schema_, references_, value);
        case "Record":
          return FromRecord(schema_, references_, value);
        case "Ref":
          return FromRef(schema_, references_, value);
        case "Symbol":
          return Default(schema_, value);
        case "This":
          return FromThis(schema_, references_, value);
        case "Tuple":
          return FromTuple(schema_, references_, value);
        case "Union":
          return FromUnion(schema_, references_, value);
        default:
          return Default(schema_, value);
      }
    }
    __name(Visit, "Visit");
    function TransformDecode(schema, references, value) {
      return Visit(schema, references, value);
    }
    __name(TransformDecode, "TransformDecode");
    exports.TransformDecode = TransformDecode;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/transform/encode.js
var require_encode = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/transform/encode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransformEncode = exports.TransformEncodeError = exports.TransformEncodeCheckError = void 0;
    var index_1 = require_symbols2();
    var index_2 = require_error2();
    var index_3 = require_keyof2();
    var index_4 = require_indexed2();
    var index_5 = require_deref2();
    var index_6 = require_check2();
    var index_7 = require_guard2();
    var type_1 = require_type3();
    var TransformEncodeCheckError = class extends index_2.TypeBoxError {
      static {
        __name(this, "TransformEncodeCheckError");
      }
      constructor(schema, value, error) {
        super(`Unable to encode due to invalid value`);
        this.schema = schema;
        this.value = value;
        this.error = error;
      }
    };
    exports.TransformEncodeCheckError = TransformEncodeCheckError;
    var TransformEncodeError = class extends index_2.TypeBoxError {
      static {
        __name(this, "TransformEncodeError");
      }
      constructor(schema, value, error) {
        super(`${error instanceof Error ? error.message : "Unknown error"}`);
        this.schema = schema;
        this.value = value;
      }
    };
    exports.TransformEncodeError = TransformEncodeError;
    function Default(schema, value) {
      try {
        return (0, type_1.IsTransform)(schema) ? schema[index_1.TransformKind].Encode(value) : value;
      } catch (error) {
        throw new TransformEncodeError(schema, value, error);
      }
    }
    __name(Default, "Default");
    function FromArray(schema, references, value) {
      const defaulted = Default(schema, value);
      return (0, index_7.IsArray)(defaulted) ? defaulted.map((value2) => Visit(schema.items, references, value2)) : defaulted;
    }
    __name(FromArray, "FromArray");
    function FromIntersect(schema, references, value) {
      const defaulted = Default(schema, value);
      if (!(0, index_7.IsPlainObject)(value) || (0, index_7.IsValueType)(value))
        return defaulted;
      const knownKeys = (0, index_3.KeyOfPropertyKeys)(schema);
      const knownProperties = knownKeys.reduce((value2, key) => {
        return key in defaulted ? { ...value2, [key]: Visit((0, index_4.Index)(schema, [key]), references, value2[key]) } : value2;
      }, defaulted);
      if (!(0, type_1.IsTransform)(schema.unevaluatedProperties)) {
        return Default(schema, knownProperties);
      }
      const unknownKeys = Object.getOwnPropertyNames(knownProperties);
      const unevaluatedProperties = schema.unevaluatedProperties;
      return unknownKeys.reduce((value2, key) => {
        return !knownKeys.includes(key) ? { ...value2, [key]: Default(unevaluatedProperties, value2[key]) } : value2;
      }, knownProperties);
    }
    __name(FromIntersect, "FromIntersect");
    function FromNot(schema, references, value) {
      return Default(schema.not, Default(schema, value));
    }
    __name(FromNot, "FromNot");
    function FromObject(schema, references, value) {
      const defaulted = Default(schema, value);
      if (!(0, index_7.IsPlainObject)(value))
        return defaulted;
      const knownKeys = (0, index_3.KeyOfPropertyKeys)(schema);
      const knownProperties = knownKeys.reduce((value2, key) => {
        return key in value2 ? { ...value2, [key]: Visit(schema.properties[key], references, value2[key]) } : value2;
      }, defaulted);
      if (!(0, type_1.IsSchema)(schema.additionalProperties)) {
        return knownProperties;
      }
      const unknownKeys = Object.getOwnPropertyNames(knownProperties);
      const additionalProperties = schema.additionalProperties;
      return unknownKeys.reduce((value2, key) => {
        return !knownKeys.includes(key) ? { ...value2, [key]: Default(additionalProperties, value2[key]) } : value2;
      }, knownProperties);
    }
    __name(FromObject, "FromObject");
    function FromRecord(schema, references, value) {
      const defaulted = Default(schema, value);
      if (!(0, index_7.IsPlainObject)(value))
        return defaulted;
      const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
      const knownKeys = new RegExp(pattern);
      const knownProperties = Object.getOwnPropertyNames(value).reduce((value2, key) => {
        return knownKeys.test(key) ? { ...value2, [key]: Visit(schema.patternProperties[pattern], references, value2[key]) } : value2;
      }, defaulted);
      if (!(0, type_1.IsSchema)(schema.additionalProperties)) {
        return Default(schema, knownProperties);
      }
      const unknownKeys = Object.getOwnPropertyNames(knownProperties);
      const additionalProperties = schema.additionalProperties;
      return unknownKeys.reduce((value2, key) => {
        return !knownKeys.test(key) ? { ...value2, [key]: Default(additionalProperties, value2[key]) } : value2;
      }, knownProperties);
    }
    __name(FromRecord, "FromRecord");
    function FromRef(schema, references, value) {
      const target = (0, index_5.Deref)(schema, references);
      const resolved = Visit(target, references, value);
      return Default(schema, resolved);
    }
    __name(FromRef, "FromRef");
    function FromThis(schema, references, value) {
      const target = (0, index_5.Deref)(schema, references);
      const resolved = Visit(target, references, value);
      return Default(schema, resolved);
    }
    __name(FromThis, "FromThis");
    function FromTuple(schema, references, value) {
      const value1 = Default(schema, value);
      return (0, index_7.IsArray)(schema.items) ? schema.items.map((schema2, index) => Visit(schema2, references, value1[index])) : [];
    }
    __name(FromTuple, "FromTuple");
    function FromUnion(schema, references, value) {
      for (const subschema of schema.anyOf) {
        if (!(0, index_6.Check)(subschema, references, value))
          continue;
        const value1 = Visit(subschema, references, value);
        return Default(schema, value1);
      }
      for (const subschema of schema.anyOf) {
        const value1 = Visit(subschema, references, value);
        if (!(0, index_6.Check)(schema, references, value1))
          continue;
        return Default(schema, value1);
      }
      return Default(schema, value);
    }
    __name(FromUnion, "FromUnion");
    function Visit(schema, references, value) {
      const references_ = typeof schema.$id === "string" ? [...references, schema] : references;
      const schema_ = schema;
      switch (schema[index_1.Kind]) {
        case "Array":
          return FromArray(schema_, references_, value);
        case "Intersect":
          return FromIntersect(schema_, references_, value);
        case "Not":
          return FromNot(schema_, references_, value);
        case "Object":
          return FromObject(schema_, references_, value);
        case "Record":
          return FromRecord(schema_, references_, value);
        case "Ref":
          return FromRef(schema_, references_, value);
        case "This":
          return FromThis(schema_, references_, value);
        case "Tuple":
          return FromTuple(schema_, references_, value);
        case "Union":
          return FromUnion(schema_, references_, value);
        default:
          return Default(schema_, value);
      }
    }
    __name(Visit, "Visit");
    function TransformEncode(schema, references, value) {
      return Visit(schema, references, value);
    }
    __name(TransformEncode, "TransformEncode");
    exports.TransformEncode = TransformEncode;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/transform/has.js
var require_has = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/transform/has.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HasTransform = void 0;
    var index_1 = require_deref2();
    var index_2 = require_symbols2();
    var type_1 = require_type3();
    var index_3 = require_guard2();
    function FromArray(schema, references) {
      return (0, type_1.IsTransform)(schema) || Visit(schema.items, references);
    }
    __name(FromArray, "FromArray");
    function FromAsyncIterator(schema, references) {
      return (0, type_1.IsTransform)(schema) || Visit(schema.items, references);
    }
    __name(FromAsyncIterator, "FromAsyncIterator");
    function FromConstructor(schema, references) {
      return (0, type_1.IsTransform)(schema) || Visit(schema.returns, references) || schema.parameters.some((schema2) => Visit(schema2, references));
    }
    __name(FromConstructor, "FromConstructor");
    function FromFunction(schema, references) {
      return (0, type_1.IsTransform)(schema) || Visit(schema.returns, references) || schema.parameters.some((schema2) => Visit(schema2, references));
    }
    __name(FromFunction, "FromFunction");
    function FromIntersect(schema, references) {
      return (0, type_1.IsTransform)(schema) || (0, type_1.IsTransform)(schema.unevaluatedProperties) || schema.allOf.some((schema2) => Visit(schema2, references));
    }
    __name(FromIntersect, "FromIntersect");
    function FromIterator(schema, references) {
      return (0, type_1.IsTransform)(schema) || Visit(schema.items, references);
    }
    __name(FromIterator, "FromIterator");
    function FromNot(schema, references) {
      return (0, type_1.IsTransform)(schema) || Visit(schema.not, references);
    }
    __name(FromNot, "FromNot");
    function FromObject(schema, references) {
      return (0, type_1.IsTransform)(schema) || Object.values(schema.properties).some((schema2) => Visit(schema2, references)) || (0, type_1.IsSchema)(schema.additionalProperties) && Visit(schema.additionalProperties, references);
    }
    __name(FromObject, "FromObject");
    function FromPromise(schema, references) {
      return (0, type_1.IsTransform)(schema) || Visit(schema.item, references);
    }
    __name(FromPromise, "FromPromise");
    function FromRecord(schema, references) {
      const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
      const property = schema.patternProperties[pattern];
      return (0, type_1.IsTransform)(schema) || Visit(property, references) || (0, type_1.IsSchema)(schema.additionalProperties) && (0, type_1.IsTransform)(schema.additionalProperties);
    }
    __name(FromRecord, "FromRecord");
    function FromRef(schema, references) {
      if ((0, type_1.IsTransform)(schema))
        return true;
      return Visit((0, index_1.Deref)(schema, references), references);
    }
    __name(FromRef, "FromRef");
    function FromThis(schema, references) {
      if ((0, type_1.IsTransform)(schema))
        return true;
      return Visit((0, index_1.Deref)(schema, references), references);
    }
    __name(FromThis, "FromThis");
    function FromTuple(schema, references) {
      return (0, type_1.IsTransform)(schema) || !(0, index_3.IsUndefined)(schema.items) && schema.items.some((schema2) => Visit(schema2, references));
    }
    __name(FromTuple, "FromTuple");
    function FromUnion(schema, references) {
      return (0, type_1.IsTransform)(schema) || schema.anyOf.some((schema2) => Visit(schema2, references));
    }
    __name(FromUnion, "FromUnion");
    function Visit(schema, references) {
      const references_ = (0, index_3.IsString)(schema.$id) ? [...references, schema] : references;
      const schema_ = schema;
      if (schema.$id && visited.has(schema.$id))
        return false;
      if (schema.$id)
        visited.add(schema.$id);
      switch (schema[index_2.Kind]) {
        case "Array":
          return FromArray(schema_, references_);
        case "AsyncIterator":
          return FromAsyncIterator(schema_, references_);
        case "Constructor":
          return FromConstructor(schema_, references_);
        case "Function":
          return FromFunction(schema_, references_);
        case "Intersect":
          return FromIntersect(schema_, references_);
        case "Iterator":
          return FromIterator(schema_, references_);
        case "Not":
          return FromNot(schema_, references_);
        case "Object":
          return FromObject(schema_, references_);
        case "Promise":
          return FromPromise(schema_, references_);
        case "Record":
          return FromRecord(schema_, references_);
        case "Ref":
          return FromRef(schema_, references_);
        case "This":
          return FromThis(schema_, references_);
        case "Tuple":
          return FromTuple(schema_, references_);
        case "Union":
          return FromUnion(schema_, references_);
        default:
          return (0, type_1.IsTransform)(schema);
      }
    }
    __name(Visit, "Visit");
    var visited = /* @__PURE__ */ new Set();
    function HasTransform(schema, references) {
      visited.clear();
      return Visit(schema, references);
    }
    __name(HasTransform, "HasTransform");
    exports.HasTransform = HasTransform;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/transform/index.js
var require_transform = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/transform/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_decode(), exports);
    __exportStar(require_encode(), exports);
    __exportStar(require_has(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/value/value.js
var require_value3 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/value/value.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Mutate = exports.Patch = exports.Hash = exports.Diff = exports.Equal = exports.Errors = exports.Encode = exports.Default = exports.Decode = exports.Clone = exports.Convert = exports.Clean = exports.Check = exports.Create = exports.Cast = void 0;
    var index_1 = require_transform();
    var index_2 = require_mutate2();
    var index_3 = require_hash2();
    var index_4 = require_equal2();
    var index_5 = require_cast2();
    var index_6 = require_clone2();
    var index_7 = require_convert2();
    var index_8 = require_create2();
    var index_9 = require_clean2();
    var index_10 = require_check2();
    var index_11 = require_default2();
    var index_12 = require_delta2();
    var index_13 = require_errors2();
    function Cast(...args) {
      return index_5.Cast.apply(index_5.Cast, args);
    }
    __name(Cast, "Cast");
    exports.Cast = Cast;
    function Create(...args) {
      return index_8.Create.apply(index_8.Create, args);
    }
    __name(Create, "Create");
    exports.Create = Create;
    function Check(...args) {
      return index_10.Check.apply(index_10.Check, args);
    }
    __name(Check, "Check");
    exports.Check = Check;
    function Clean(...args) {
      return index_9.Clean.apply(index_9.Clean, args);
    }
    __name(Clean, "Clean");
    exports.Clean = Clean;
    function Convert(...args) {
      return index_7.Convert.apply(index_7.Convert, args);
    }
    __name(Convert, "Convert");
    exports.Convert = Convert;
    function Clone(value) {
      return (0, index_6.Clone)(value);
    }
    __name(Clone, "Clone");
    exports.Clone = Clone;
    function Decode(...args) {
      const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
      if (!Check(schema, references, value))
        throw new index_1.TransformDecodeCheckError(schema, value, Errors(schema, references, value).First());
      return (0, index_1.TransformDecode)(schema, references, value);
    }
    __name(Decode, "Decode");
    exports.Decode = Decode;
    function Default(...args) {
      return index_11.Default.apply(index_11.Default, args);
    }
    __name(Default, "Default");
    exports.Default = Default;
    function Encode(...args) {
      const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
      const encoded = (0, index_1.TransformEncode)(schema, references, value);
      if (!Check(schema, references, encoded))
        throw new index_1.TransformEncodeCheckError(schema, value, Errors(schema, references, value).First());
      return encoded;
    }
    __name(Encode, "Encode");
    exports.Encode = Encode;
    function Errors(...args) {
      return index_13.Errors.apply(index_13.Errors, args);
    }
    __name(Errors, "Errors");
    exports.Errors = Errors;
    function Equal(left, right) {
      return (0, index_4.Equal)(left, right);
    }
    __name(Equal, "Equal");
    exports.Equal = Equal;
    function Diff(current, next) {
      return (0, index_12.Diff)(current, next);
    }
    __name(Diff, "Diff");
    exports.Diff = Diff;
    function Hash(value) {
      return (0, index_3.Hash)(value);
    }
    __name(Hash, "Hash");
    exports.Hash = Hash;
    function Patch(current, edits) {
      return (0, index_12.Patch)(current, edits);
    }
    __name(Patch, "Patch");
    exports.Patch = Patch;
    function Mutate(current, next) {
      (0, index_2.Mutate)(current, next);
    }
    __name(Mutate, "Mutate");
    exports.Mutate = Mutate;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/value/index.js
var require_value4 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/value/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Value = void 0;
    exports.Value = require_value3();
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/index.js
var require_value5 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/value/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IsUndefined = exports.IsUint8Array = exports.IsTypedArray = exports.IsSymbol = exports.IsString = exports.IsPromise = exports.IsPlainObject = exports.IsObject = exports.IsNumber = exports.IsNull = exports.IsIterator = exports.IsInteger = exports.IsFunction = exports.IsDate = exports.IsBoolean = exports.IsBigInt = exports.IsAsyncIterator = exports.IsArray = exports.HasPropertyKey = exports.TransformEncodeError = exports.TransformEncodeCheckError = exports.TransformDecodeError = exports.TransformDecodeCheckError = exports.HasTransform = exports.TransformEncode = exports.TransformDecode = exports.ValuePointer = exports.ValueMutateError = exports.Mutate = exports.ValueHashError = exports.Hash = exports.Equal = exports.ValueDeltaError = exports.Update = exports.Insert = exports.Delete = exports.Edit = exports.Patch = exports.Diff = exports.Default = exports.ValueCreateError = exports.Create = exports.Convert = exports.Clone = exports.Clean = exports.Check = exports.ValueCastError = exports.Cast = exports.ValueErrorIterator = exports.ValueErrorType = void 0;
    exports.Value = exports.IsValueType = void 0;
    var index_1 = require_errors2();
    Object.defineProperty(exports, "ValueErrorType", { enumerable: true, get: function() {
      return index_1.ValueErrorType;
    } });
    Object.defineProperty(exports, "ValueErrorIterator", { enumerable: true, get: function() {
      return index_1.ValueErrorIterator;
    } });
    var index_2 = require_cast2();
    Object.defineProperty(exports, "Cast", { enumerable: true, get: function() {
      return index_2.Cast;
    } });
    Object.defineProperty(exports, "ValueCastError", { enumerable: true, get: function() {
      return index_2.ValueCastError;
    } });
    var index_3 = require_check2();
    Object.defineProperty(exports, "Check", { enumerable: true, get: function() {
      return index_3.Check;
    } });
    var index_4 = require_clean2();
    Object.defineProperty(exports, "Clean", { enumerable: true, get: function() {
      return index_4.Clean;
    } });
    var index_5 = require_clone2();
    Object.defineProperty(exports, "Clone", { enumerable: true, get: function() {
      return index_5.Clone;
    } });
    var index_6 = require_convert2();
    Object.defineProperty(exports, "Convert", { enumerable: true, get: function() {
      return index_6.Convert;
    } });
    var index_7 = require_create2();
    Object.defineProperty(exports, "Create", { enumerable: true, get: function() {
      return index_7.Create;
    } });
    Object.defineProperty(exports, "ValueCreateError", { enumerable: true, get: function() {
      return index_7.ValueCreateError;
    } });
    var index_8 = require_default2();
    Object.defineProperty(exports, "Default", { enumerable: true, get: function() {
      return index_8.Default;
    } });
    var index_9 = require_delta2();
    Object.defineProperty(exports, "Diff", { enumerable: true, get: function() {
      return index_9.Diff;
    } });
    Object.defineProperty(exports, "Patch", { enumerable: true, get: function() {
      return index_9.Patch;
    } });
    Object.defineProperty(exports, "Edit", { enumerable: true, get: function() {
      return index_9.Edit;
    } });
    Object.defineProperty(exports, "Delete", { enumerable: true, get: function() {
      return index_9.Delete;
    } });
    Object.defineProperty(exports, "Insert", { enumerable: true, get: function() {
      return index_9.Insert;
    } });
    Object.defineProperty(exports, "Update", { enumerable: true, get: function() {
      return index_9.Update;
    } });
    Object.defineProperty(exports, "ValueDeltaError", { enumerable: true, get: function() {
      return index_9.ValueDeltaError;
    } });
    var index_10 = require_equal2();
    Object.defineProperty(exports, "Equal", { enumerable: true, get: function() {
      return index_10.Equal;
    } });
    var index_11 = require_hash2();
    Object.defineProperty(exports, "Hash", { enumerable: true, get: function() {
      return index_11.Hash;
    } });
    Object.defineProperty(exports, "ValueHashError", { enumerable: true, get: function() {
      return index_11.ValueHashError;
    } });
    var index_12 = require_mutate2();
    Object.defineProperty(exports, "Mutate", { enumerable: true, get: function() {
      return index_12.Mutate;
    } });
    Object.defineProperty(exports, "ValueMutateError", { enumerable: true, get: function() {
      return index_12.ValueMutateError;
    } });
    var index_13 = require_pointer2();
    Object.defineProperty(exports, "ValuePointer", { enumerable: true, get: function() {
      return index_13.ValuePointer;
    } });
    var index_14 = require_transform();
    Object.defineProperty(exports, "TransformDecode", { enumerable: true, get: function() {
      return index_14.TransformDecode;
    } });
    Object.defineProperty(exports, "TransformEncode", { enumerable: true, get: function() {
      return index_14.TransformEncode;
    } });
    Object.defineProperty(exports, "HasTransform", { enumerable: true, get: function() {
      return index_14.HasTransform;
    } });
    Object.defineProperty(exports, "TransformDecodeCheckError", { enumerable: true, get: function() {
      return index_14.TransformDecodeCheckError;
    } });
    Object.defineProperty(exports, "TransformDecodeError", { enumerable: true, get: function() {
      return index_14.TransformDecodeError;
    } });
    Object.defineProperty(exports, "TransformEncodeCheckError", { enumerable: true, get: function() {
      return index_14.TransformEncodeCheckError;
    } });
    Object.defineProperty(exports, "TransformEncodeError", { enumerable: true, get: function() {
      return index_14.TransformEncodeError;
    } });
    var index_15 = require_guard2();
    Object.defineProperty(exports, "HasPropertyKey", { enumerable: true, get: function() {
      return index_15.HasPropertyKey;
    } });
    Object.defineProperty(exports, "IsArray", { enumerable: true, get: function() {
      return index_15.IsArray;
    } });
    Object.defineProperty(exports, "IsAsyncIterator", { enumerable: true, get: function() {
      return index_15.IsAsyncIterator;
    } });
    Object.defineProperty(exports, "IsBigInt", { enumerable: true, get: function() {
      return index_15.IsBigInt;
    } });
    Object.defineProperty(exports, "IsBoolean", { enumerable: true, get: function() {
      return index_15.IsBoolean;
    } });
    Object.defineProperty(exports, "IsDate", { enumerable: true, get: function() {
      return index_15.IsDate;
    } });
    Object.defineProperty(exports, "IsFunction", { enumerable: true, get: function() {
      return index_15.IsFunction;
    } });
    Object.defineProperty(exports, "IsInteger", { enumerable: true, get: function() {
      return index_15.IsInteger;
    } });
    Object.defineProperty(exports, "IsIterator", { enumerable: true, get: function() {
      return index_15.IsIterator;
    } });
    Object.defineProperty(exports, "IsNull", { enumerable: true, get: function() {
      return index_15.IsNull;
    } });
    Object.defineProperty(exports, "IsNumber", { enumerable: true, get: function() {
      return index_15.IsNumber;
    } });
    Object.defineProperty(exports, "IsObject", { enumerable: true, get: function() {
      return index_15.IsObject;
    } });
    Object.defineProperty(exports, "IsPlainObject", { enumerable: true, get: function() {
      return index_15.IsPlainObject;
    } });
    Object.defineProperty(exports, "IsPromise", { enumerable: true, get: function() {
      return index_15.IsPromise;
    } });
    Object.defineProperty(exports, "IsString", { enumerable: true, get: function() {
      return index_15.IsString;
    } });
    Object.defineProperty(exports, "IsSymbol", { enumerable: true, get: function() {
      return index_15.IsSymbol;
    } });
    Object.defineProperty(exports, "IsTypedArray", { enumerable: true, get: function() {
      return index_15.IsTypedArray;
    } });
    Object.defineProperty(exports, "IsUint8Array", { enumerable: true, get: function() {
      return index_15.IsUint8Array;
    } });
    Object.defineProperty(exports, "IsUndefined", { enumerable: true, get: function() {
      return index_15.IsUndefined;
    } });
    Object.defineProperty(exports, "IsValueType", { enumerable: true, get: function() {
      return index_15.IsValueType;
    } });
    var index_16 = require_value4();
    Object.defineProperty(exports, "Value", { enumerable: true, get: function() {
      return index_16.Value;
    } });
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/awaited/awaited.js
var require_awaited = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/awaited/awaited.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Awaited = void 0;
    var index_1 = require_intersect2();
    var index_2 = require_union2();
    var type_1 = require_type2();
    var type_2 = require_type3();
    function FromRest(T) {
      return T.map((L) => FromSchema(L));
    }
    __name(FromRest, "FromRest");
    function FromIntersect(T) {
      return (0, index_1.Intersect)(FromRest(T));
    }
    __name(FromIntersect, "FromIntersect");
    function FromUnion(T) {
      return (0, index_2.Union)(FromRest(T));
    }
    __name(FromUnion, "FromUnion");
    function FromPromise(T) {
      return FromSchema(T);
    }
    __name(FromPromise, "FromPromise");
    function FromSchema(T) {
      return (0, type_2.IsIntersect)(T) ? FromIntersect(T.allOf) : (0, type_2.IsUnion)(T) ? FromUnion(T.anyOf) : (0, type_2.IsPromise)(T) ? FromPromise(T.item) : T;
    }
    __name(FromSchema, "FromSchema");
    function Awaited(T, options = {}) {
      return (0, type_1.CloneType)(FromSchema(T), options);
    }
    __name(Awaited, "Awaited");
    exports.Awaited = Awaited;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/awaited/index.js
var require_awaited2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/awaited/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_awaited(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/date/date.js
var require_date = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/date/date.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Date = void 0;
    var index_1 = require_symbols2();
    function Date2(options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Date",
        type: "Date"
      };
    }
    __name(Date2, "Date");
    exports.Date = Date2;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/date/index.js
var require_date2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/date/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_date(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/null/null.js
var require_null = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/null/null.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Null = void 0;
    var index_1 = require_symbols2();
    function Null(options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Null",
        type: "null"
      };
    }
    __name(Null, "Null");
    exports.Null = Null;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/null/index.js
var require_null2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/null/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_null(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/symbol/symbol.js
var require_symbol = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/symbol/symbol.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Symbol = void 0;
    var index_1 = require_symbols2();
    function Symbol2(options) {
      return { ...options, [index_1.Kind]: "Symbol", type: "symbol" };
    }
    __name(Symbol2, "Symbol");
    exports.Symbol = Symbol2;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/symbol/index.js
var require_symbol2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/symbol/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_symbol(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/undefined/undefined.js
var require_undefined = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/undefined/undefined.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Undefined = void 0;
    var index_1 = require_symbols2();
    function Undefined(options = {}) {
      return { ...options, [index_1.Kind]: "Undefined", type: "undefined" };
    }
    __name(Undefined, "Undefined");
    exports.Undefined = Undefined;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/undefined/index.js
var require_undefined2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/undefined/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_undefined(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/uint8array/uint8array.js
var require_uint8array = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/uint8array/uint8array.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Uint8Array = void 0;
    var index_1 = require_symbols2();
    function Uint8Array2(options = {}) {
      return { ...options, [index_1.Kind]: "Uint8Array", type: "Uint8Array" };
    }
    __name(Uint8Array2, "Uint8Array");
    exports.Uint8Array = Uint8Array2;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/uint8array/index.js
var require_uint8array2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/uint8array/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_uint8array(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/clone/index.js
var require_clone3 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/clone/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValueClone = exports.TypeClone = void 0;
    exports.TypeClone = require_type2();
    exports.ValueClone = require_value2();
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/const/const.js
var require_const = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/const/const.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Const = void 0;
    var index_1 = require_any2();
    var index_2 = require_bigint2();
    var index_3 = require_date2();
    var index_4 = require_function2();
    var index_5 = require_literal2();
    var index_6 = require_null2();
    var index_7 = require_object2();
    var index_8 = require_symbol2();
    var index_9 = require_tuple2();
    var index_10 = require_readonly2();
    var index_11 = require_undefined2();
    var index_12 = require_uint8array2();
    var index_13 = require_unknown2();
    var index_14 = require_clone3();
    var value_1 = require_value();
    function FromArray(T) {
      return T.map((L) => FromValue(L, false));
    }
    __name(FromArray, "FromArray");
    function FromProperties(value) {
      return globalThis.Object.getOwnPropertyNames(value).reduce((acc, key) => {
        return { ...acc, [key]: (0, index_10.Readonly)(FromValue(value[key], false)) };
      }, {});
    }
    __name(FromProperties, "FromProperties");
    function ConditionalReadonly(T, root) {
      return root === true ? T : (0, index_10.Readonly)(T);
    }
    __name(ConditionalReadonly, "ConditionalReadonly");
    function FromValue(value, root) {
      return (0, value_1.IsAsyncIterator)(value) ? ConditionalReadonly((0, index_1.Any)(), root) : (0, value_1.IsIterator)(value) ? ConditionalReadonly((0, index_1.Any)(), root) : (0, value_1.IsArray)(value) ? (0, index_10.Readonly)((0, index_9.Tuple)(FromArray(value))) : (0, value_1.IsUint8Array)(value) ? (0, index_12.Uint8Array)() : (0, value_1.IsDate)(value) ? (0, index_3.Date)() : (0, value_1.IsObject)(value) ? ConditionalReadonly((0, index_7.Object)(FromProperties(value)), root) : (0, value_1.IsFunction)(value) ? ConditionalReadonly((0, index_4.Function)([], (0, index_13.Unknown)()), root) : (0, value_1.IsUndefined)(value) ? (0, index_11.Undefined)() : (0, value_1.IsNull)(value) ? (0, index_6.Null)() : (0, value_1.IsSymbol)(value) ? (0, index_8.Symbol)() : (0, value_1.IsBigInt)(value) ? (0, index_2.BigInt)() : (0, value_1.IsNumber)(value) ? (0, index_5.Literal)(value) : (0, value_1.IsBoolean)(value) ? (0, index_5.Literal)(value) : (0, value_1.IsString)(value) ? (0, index_5.Literal)(value) : (0, index_7.Object)({});
    }
    __name(FromValue, "FromValue");
    function Const(T, options = {}) {
      return index_14.TypeClone.CloneType(FromValue(T, true), options);
    }
    __name(Const, "Const");
    exports.Const = Const;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/const/index.js
var require_const2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/const/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_const(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/constructor-parameters/constructor-parameters.js
var require_constructor_parameters = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/constructor-parameters/constructor-parameters.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConstructorParameters = void 0;
    var index_1 = require_tuple2();
    var type_1 = require_type2();
    function ConstructorParameters(schema, options = {}) {
      return (0, index_1.Tuple)((0, type_1.CloneRest)(schema.parameters), { ...options });
    }
    __name(ConstructorParameters, "ConstructorParameters");
    exports.ConstructorParameters = ConstructorParameters;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/constructor-parameters/index.js
var require_constructor_parameters2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/constructor-parameters/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_constructor_parameters(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/deref/deref.js
var require_deref3 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/deref/deref.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Deref = exports.DerefResolve = void 0;
    var type_1 = require_type2();
    var index_1 = require_discard2();
    var value_1 = require_value();
    var type_2 = require_type3();
    function FromRest(schema, references) {
      return schema.map((schema2) => Deref(schema2, references));
    }
    __name(FromRest, "FromRest");
    function FromProperties(properties, references) {
      return globalThis.Object.getOwnPropertyNames(properties).reduce((acc, key) => {
        return { ...acc, [key]: Deref(properties[key], references) };
      }, {});
    }
    __name(FromProperties, "FromProperties");
    function FromConstructor(schema, references) {
      schema.parameters = FromRest(schema.parameters, references);
      schema.returns = Deref(schema.returns, references);
      return schema;
    }
    __name(FromConstructor, "FromConstructor");
    function FromFunction(schema, references) {
      schema.parameters = FromRest(schema.parameters, references);
      schema.returns = Deref(schema.returns, references);
      return schema;
    }
    __name(FromFunction, "FromFunction");
    function FromIntersect(schema, references) {
      schema.allOf = FromRest(schema.allOf, references);
      return schema;
    }
    __name(FromIntersect, "FromIntersect");
    function FromUnion(schema, references) {
      schema.anyOf = FromRest(schema.anyOf, references);
      return schema;
    }
    __name(FromUnion, "FromUnion");
    function FromTuple(schema, references) {
      if ((0, value_1.IsUndefined)(schema.items))
        return schema;
      schema.items = FromRest(schema.items, references);
      return schema;
    }
    __name(FromTuple, "FromTuple");
    function FromArray(schema, references) {
      schema.items = Deref(schema.items, references);
      return schema;
    }
    __name(FromArray, "FromArray");
    function FromObject(schema, references) {
      schema.properties = FromProperties(schema.properties, references);
      return schema;
    }
    __name(FromObject, "FromObject");
    function FromPromise(schema, references) {
      schema.item = Deref(schema.item, references);
      return schema;
    }
    __name(FromPromise, "FromPromise");
    function FromAsyncIterator(schema, references) {
      schema.items = Deref(schema.items, references);
      return schema;
    }
    __name(FromAsyncIterator, "FromAsyncIterator");
    function FromIterator(schema, references) {
      schema.items = Deref(schema.items, references);
      return schema;
    }
    __name(FromIterator, "FromIterator");
    function FromRef(schema, references) {
      const target = references.find((remote) => remote.$id === schema.$ref);
      if (target === void 0)
        throw Error(`Unable to dereference schema with $id ${schema.$ref}`);
      const discard = (0, index_1.Discard)(target, ["$id"]);
      return Deref(discard, references);
    }
    __name(FromRef, "FromRef");
    function DerefResolve(schema, references) {
      return (0, type_2.IsConstructor)(schema) ? FromConstructor(schema, references) : (0, type_2.IsFunction)(schema) ? FromFunction(schema, references) : (0, type_2.IsIntersect)(schema) ? FromIntersect(schema, references) : (0, type_2.IsUnion)(schema) ? FromUnion(schema, references) : (0, type_2.IsTuple)(schema) ? FromTuple(schema, references) : (0, type_2.IsArray)(schema) ? FromArray(schema, references) : (0, type_2.IsObject)(schema) ? FromObject(schema, references) : (0, type_2.IsPromise)(schema) ? FromPromise(schema, references) : (0, type_2.IsAsyncIterator)(schema) ? FromAsyncIterator(schema, references) : (0, type_2.IsIterator)(schema) ? FromIterator(schema, references) : (0, type_2.IsRef)(schema) ? FromRef(schema, references) : schema;
    }
    __name(DerefResolve, "DerefResolve");
    exports.DerefResolve = DerefResolve;
    function Deref(schema, references) {
      return DerefResolve((0, type_1.CloneType)(schema), (0, type_1.CloneRest)(references));
    }
    __name(Deref, "Deref");
    exports.Deref = Deref;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/deref/index.js
var require_deref4 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/deref/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_deref3(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/enum/enum.js
var require_enum = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/enum/enum.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Enum = void 0;
    var index_1 = require_literal2();
    var index_2 = require_symbols2();
    var index_3 = require_union2();
    var value_1 = require_value();
    function Enum(item, options = {}) {
      if ((0, value_1.IsUndefined)(item))
        throw new Error("Enum undefined or empty");
      const values1 = globalThis.Object.getOwnPropertyNames(item).filter((key) => isNaN(key)).map((key) => item[key]);
      const values2 = [...new Set(values1)];
      const anyOf = values2.map((value) => (0, index_1.Literal)(value));
      return (0, index_3.Union)(anyOf, { ...options, [index_2.Hint]: "Enum" });
    }
    __name(Enum, "Enum");
    exports.Enum = Enum;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/enum/index.js
var require_enum2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/enum/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_enum(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/exclude/exclude.js
var require_exclude = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/exclude/exclude.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Exclude = void 0;
    var index_1 = require_template_literal2();
    var index_2 = require_union2();
    var index_3 = require_never2();
    var index_4 = require_extends2();
    var type_1 = require_type2();
    var exclude_from_mapped_result_1 = require_exclude_from_mapped_result();
    var type_2 = require_type3();
    function ExcludeResolve(L, R) {
      return (0, type_2.IsTemplateLiteral)(L) ? ExcludeResolve((0, index_1.TemplateLiteralToUnion)(L), R) : (0, type_2.IsTemplateLiteral)(R) ? ExcludeResolve(L, (0, index_1.TemplateLiteralToUnion)(R)) : (0, type_2.IsUnion)(L) ? (() => {
        const narrowed = L.anyOf.filter((inner) => (0, index_4.ExtendsCheck)(inner, R) === index_4.ExtendsResult.False);
        return narrowed.length === 1 ? narrowed[0] : (0, index_2.Union)(narrowed);
      })() : (0, index_4.ExtendsCheck)(L, R) !== index_4.ExtendsResult.False ? (0, index_3.Never)() : L;
    }
    __name(ExcludeResolve, "ExcludeResolve");
    function Exclude(unionType, excludedMembers, options = {}) {
      if ((0, type_2.IsMappedResult)(unionType)) {
        return (0, exclude_from_mapped_result_1.ExcludeFromMappedResult)(unionType, excludedMembers, options);
      } else {
        const E = ExcludeResolve(unionType, excludedMembers);
        return (0, type_1.CloneType)(E, options);
      }
    }
    __name(Exclude, "Exclude");
    exports.Exclude = Exclude;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/exclude/exclude-from-mapped-result.js
var require_exclude_from_mapped_result = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/exclude/exclude-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExcludeFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var exclude_1 = require_exclude();
    function FromProperties(P, U, options) {
      return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, exclude_1.Exclude)(P[K2], U, options) };
      }, {});
    }
    __name(FromProperties, "FromProperties");
    function FromMappedResult(R, T, options) {
      return FromProperties(R.properties, T, options);
    }
    __name(FromMappedResult, "FromMappedResult");
    function ExcludeFromMappedResult(R, T, options) {
      const P = FromMappedResult(R, T, options);
      return (0, index_1.MappedResult)(P);
    }
    __name(ExcludeFromMappedResult, "ExcludeFromMappedResult");
    exports.ExcludeFromMappedResult = ExcludeFromMappedResult;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/exclude/index.js
var require_exclude2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/exclude/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_exclude_from_mapped_result(), exports);
    __exportStar(require_exclude(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/extract/extract.js
var require_extract = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/extract/extract.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Extract = void 0;
    var index_1 = require_template_literal2();
    var index_2 = require_union2();
    var index_3 = require_never2();
    var index_4 = require_extends2();
    var type_1 = require_type2();
    var extract_from_mapped_result_1 = require_extract_from_mapped_result();
    var type_2 = require_type3();
    function ExtractResolve(L, R) {
      return (0, type_2.IsTemplateLiteral)(L) ? ExtractResolve((0, index_1.TemplateLiteralToUnion)(L), R) : (0, type_2.IsTemplateLiteral)(R) ? ExtractResolve(L, (0, index_1.TemplateLiteralToUnion)(R)) : (0, type_2.IsUnion)(L) ? (() => {
        const narrowed = L.anyOf.filter((inner) => (0, index_4.ExtendsCheck)(inner, R) !== index_4.ExtendsResult.False);
        return narrowed.length === 1 ? narrowed[0] : (0, index_2.Union)(narrowed);
      })() : (0, index_4.ExtendsCheck)(L, R) !== index_4.ExtendsResult.False ? L : (0, index_3.Never)();
    }
    __name(ExtractResolve, "ExtractResolve");
    function Extract(type, union, options = {}) {
      if ((0, type_2.IsMappedResult)(type)) {
        return (0, extract_from_mapped_result_1.ExtractFromMappedResult)(type, union, options);
      } else {
        const E = ExtractResolve(type, union);
        return (0, type_1.CloneType)(E, options);
      }
    }
    __name(Extract, "Extract");
    exports.Extract = Extract;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/extract/extract-from-mapped-result.js
var require_extract_from_mapped_result = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/extract/extract-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExtractFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var extract_1 = require_extract();
    function FromProperties(P, T, options) {
      return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, extract_1.Extract)(P[K2], T, options) };
      }, {});
    }
    __name(FromProperties, "FromProperties");
    function FromMappedResult(R, T, options) {
      return FromProperties(R.properties, T, options);
    }
    __name(FromMappedResult, "FromMappedResult");
    function ExtractFromMappedResult(R, T, options) {
      const P = FromMappedResult(R, T, options);
      return (0, index_1.MappedResult)(P);
    }
    __name(ExtractFromMappedResult, "ExtractFromMappedResult");
    exports.ExtractFromMappedResult = ExtractFromMappedResult;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/extract/index.js
var require_extract2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/extract/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_extract_from_mapped_result(), exports);
    __exportStar(require_extract(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/helpers/helpers.js
var require_helpers = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/helpers/helpers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Increment = void 0;
    function Increment(T) {
      return (parseInt(T) + 1).toString();
    }
    __name(Increment, "Increment");
    exports.Increment = Increment;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/helpers/index.js
var require_helpers2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/helpers/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_helpers(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/instance-type/instance-type.js
var require_instance_type = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/instance-type/instance-type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InstanceType = void 0;
    var type_1 = require_type2();
    function InstanceType(schema, options = {}) {
      return (0, type_1.CloneType)(schema.returns, options);
    }
    __name(InstanceType, "InstanceType");
    exports.InstanceType = InstanceType;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/instance-type/index.js
var require_instance_type2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/instance-type/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_instance_type(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/integer/integer.js
var require_integer = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/integer/integer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Integer = void 0;
    var index_1 = require_symbols2();
    function Integer(options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Integer",
        type: "integer"
      };
    }
    __name(Integer, "Integer");
    exports.Integer = Integer;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/integer/index.js
var require_integer2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/integer/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_integer(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intrinsic/intrinsic-from-mapped-key.js
var require_intrinsic_from_mapped_key = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intrinsic/intrinsic-from-mapped-key.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IntrinsicFromMappedKey = void 0;
    var index_1 = require_mapped2();
    var intrinsic_1 = require_intrinsic();
    var index_2 = require_literal2();
    function MappedIntrinsicPropertyKey(K, M, options) {
      return {
        [K]: (0, intrinsic_1.Intrinsic)((0, index_2.Literal)(K), M, options)
      };
    }
    __name(MappedIntrinsicPropertyKey, "MappedIntrinsicPropertyKey");
    function MappedIntrinsicPropertyKeys(K, M, options) {
      return K.reduce((Acc, L) => {
        return { ...Acc, ...MappedIntrinsicPropertyKey(L, M, options) };
      }, {});
    }
    __name(MappedIntrinsicPropertyKeys, "MappedIntrinsicPropertyKeys");
    function MappedIntrinsicProperties(T, M, options) {
      return MappedIntrinsicPropertyKeys(T["keys"], M, options);
    }
    __name(MappedIntrinsicProperties, "MappedIntrinsicProperties");
    function IntrinsicFromMappedKey(T, M, options) {
      const P = MappedIntrinsicProperties(T, M, options);
      return (0, index_1.MappedResult)(P);
    }
    __name(IntrinsicFromMappedKey, "IntrinsicFromMappedKey");
    exports.IntrinsicFromMappedKey = IntrinsicFromMappedKey;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intrinsic/intrinsic.js
var require_intrinsic = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intrinsic/intrinsic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Intrinsic = void 0;
    var index_1 = require_template_literal2();
    var intrinsic_from_mapped_key_1 = require_intrinsic_from_mapped_key();
    var index_2 = require_literal2();
    var index_3 = require_union2();
    var type_1 = require_type3();
    function ApplyUncapitalize(value) {
      const [first, rest] = [value.slice(0, 1), value.slice(1)];
      return [first.toLowerCase(), rest].join("");
    }
    __name(ApplyUncapitalize, "ApplyUncapitalize");
    function ApplyCapitalize(value) {
      const [first, rest] = [value.slice(0, 1), value.slice(1)];
      return [first.toUpperCase(), rest].join("");
    }
    __name(ApplyCapitalize, "ApplyCapitalize");
    function ApplyUppercase(value) {
      return value.toUpperCase();
    }
    __name(ApplyUppercase, "ApplyUppercase");
    function ApplyLowercase(value) {
      return value.toLowerCase();
    }
    __name(ApplyLowercase, "ApplyLowercase");
    function FromTemplateLiteral(schema, mode, options) {
      const expression = (0, index_1.TemplateLiteralParseExact)(schema.pattern);
      const finite = (0, index_1.IsTemplateLiteralExpressionFinite)(expression);
      if (!finite)
        return { ...schema, pattern: FromLiteralValue(schema.pattern, mode) };
      const strings = [...(0, index_1.TemplateLiteralExpressionGenerate)(expression)];
      const literals = strings.map((value) => (0, index_2.Literal)(value));
      const mapped = FromRest(literals, mode);
      const union = (0, index_3.Union)(mapped);
      return (0, index_1.TemplateLiteral)([union], options);
    }
    __name(FromTemplateLiteral, "FromTemplateLiteral");
    function FromLiteralValue(value, mode) {
      return typeof value === "string" ? mode === "Uncapitalize" ? ApplyUncapitalize(value) : mode === "Capitalize" ? ApplyCapitalize(value) : mode === "Uppercase" ? ApplyUppercase(value) : mode === "Lowercase" ? ApplyLowercase(value) : value : value.toString();
    }
    __name(FromLiteralValue, "FromLiteralValue");
    function FromRest(T, M) {
      return T.map((L) => Intrinsic(L, M));
    }
    __name(FromRest, "FromRest");
    function Intrinsic(schema, mode, options = {}) {
      return (
        // Intrinsic-Mapped-Inference
        (0, type_1.IsMappedKey)(schema) ? (0, intrinsic_from_mapped_key_1.IntrinsicFromMappedKey)(schema, mode, options) : (
          // Standard-Inference
          (0, type_1.IsTemplateLiteral)(schema) ? FromTemplateLiteral(schema, mode, schema) : (0, type_1.IsUnion)(schema) ? (0, index_3.Union)(FromRest(schema.anyOf, mode), options) : (0, type_1.IsLiteral)(schema) ? (0, index_2.Literal)(FromLiteralValue(schema.const, mode), options) : schema
        )
      );
    }
    __name(Intrinsic, "Intrinsic");
    exports.Intrinsic = Intrinsic;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intrinsic/capitalize.js
var require_capitalize = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intrinsic/capitalize.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Capitalize = void 0;
    var intrinsic_1 = require_intrinsic();
    function Capitalize(T, options = {}) {
      return (0, intrinsic_1.Intrinsic)(T, "Capitalize", options);
    }
    __name(Capitalize, "Capitalize");
    exports.Capitalize = Capitalize;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intrinsic/lowercase.js
var require_lowercase = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intrinsic/lowercase.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Lowercase = void 0;
    var intrinsic_1 = require_intrinsic();
    function Lowercase(T, options = {}) {
      return (0, intrinsic_1.Intrinsic)(T, "Lowercase", options);
    }
    __name(Lowercase, "Lowercase");
    exports.Lowercase = Lowercase;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intrinsic/uncapitalize.js
var require_uncapitalize = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intrinsic/uncapitalize.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Uncapitalize = void 0;
    var intrinsic_1 = require_intrinsic();
    function Uncapitalize(T, options = {}) {
      return (0, intrinsic_1.Intrinsic)(T, "Uncapitalize", options);
    }
    __name(Uncapitalize, "Uncapitalize");
    exports.Uncapitalize = Uncapitalize;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intrinsic/uppercase.js
var require_uppercase = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intrinsic/uppercase.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Uppercase = void 0;
    var intrinsic_1 = require_intrinsic();
    function Uppercase(T, options = {}) {
      return (0, intrinsic_1.Intrinsic)(T, "Uppercase", options);
    }
    __name(Uppercase, "Uppercase");
    exports.Uppercase = Uppercase;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intrinsic/index.js
var require_intrinsic2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/intrinsic/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_capitalize(), exports);
    __exportStar(require_intrinsic_from_mapped_key(), exports);
    __exportStar(require_intrinsic(), exports);
    __exportStar(require_lowercase(), exports);
    __exportStar(require_uncapitalize(), exports);
    __exportStar(require_uppercase(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/not/not.js
var require_not = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/not/not.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Not = void 0;
    var type_1 = require_type2();
    var index_1 = require_symbols2();
    function Not(schema, options) {
      return {
        ...options,
        [index_1.Kind]: "Not",
        not: (0, type_1.CloneType)(schema)
      };
    }
    __name(Not, "Not");
    exports.Not = Not;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/not/index.js
var require_not2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/not/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_not(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/omit/omit-from-mapped-result.js
var require_omit_from_mapped_result = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/omit/omit-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OmitFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var omit_1 = require_omit();
    function FromProperties(P, K, options) {
      return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, omit_1.Omit)(P[K2], K, options) };
      }, {});
    }
    __name(FromProperties, "FromProperties");
    function FromMappedResult(R, K, options) {
      return FromProperties(R.properties, K, options);
    }
    __name(FromMappedResult, "FromMappedResult");
    function OmitFromMappedResult(R, K, options) {
      const P = FromMappedResult(R, K, options);
      return (0, index_1.MappedResult)(P);
    }
    __name(OmitFromMappedResult, "OmitFromMappedResult");
    exports.OmitFromMappedResult = OmitFromMappedResult;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/omit/omit.js
var require_omit = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/omit/omit.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Omit = exports.OmitResolve = void 0;
    var index_1 = require_intersect2();
    var index_2 = require_union2();
    var index_3 = require_object2();
    var index_4 = require_indexed2();
    var index_5 = require_discard2();
    var index_6 = require_symbols2();
    var type_1 = require_type2();
    var omit_from_mapped_key_1 = require_omit_from_mapped_key();
    var omit_from_mapped_result_1 = require_omit_from_mapped_result();
    var type_2 = require_type3();
    function FromIntersect(T, K) {
      return T.map((T2) => OmitResolve(T2, K));
    }
    __name(FromIntersect, "FromIntersect");
    function FromUnion(T, K) {
      return T.map((T2) => OmitResolve(T2, K));
    }
    __name(FromUnion, "FromUnion");
    function FromProperty(T, K) {
      const { [K]: _, ...R } = T;
      return R;
    }
    __name(FromProperty, "FromProperty");
    function FromProperties(T, K) {
      return K.reduce((T2, K2) => {
        return FromProperty(T2, K2);
      }, T);
    }
    __name(FromProperties, "FromProperties");
    function OmitResolve(T, K) {
      return (0, type_2.IsIntersect)(T) ? (0, index_1.Intersect)(FromIntersect(T.allOf, K)) : (0, type_2.IsUnion)(T) ? (0, index_2.Union)(FromUnion(T.anyOf, K)) : (0, type_2.IsObject)(T) ? (0, index_3.Object)(FromProperties(T.properties, K)) : (0, index_3.Object)({});
    }
    __name(OmitResolve, "OmitResolve");
    exports.OmitResolve = OmitResolve;
    function Omit(T, K, options = {}) {
      if ((0, type_2.IsMappedKey)(K))
        return (0, omit_from_mapped_key_1.OmitFromMappedKey)(T, K, options);
      if ((0, type_2.IsMappedResult)(T))
        return (0, omit_from_mapped_result_1.OmitFromMappedResult)(T, K, options);
      const I = (0, type_2.IsSchema)(K) ? (0, index_4.IndexPropertyKeys)(K) : K;
      const D = (0, index_5.Discard)(T, [index_6.TransformKind, "$id", "required"]);
      const R = (0, type_1.CloneType)(OmitResolve(T, I), options);
      return { ...D, ...R };
    }
    __name(Omit, "Omit");
    exports.Omit = Omit;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/omit/omit-from-mapped-key.js
var require_omit_from_mapped_key = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/omit/omit-from-mapped-key.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OmitFromMappedKey = void 0;
    var index_1 = require_mapped2();
    var omit_1 = require_omit();
    function FromPropertyKey(T, K, options) {
      return {
        [K]: (0, omit_1.Omit)(T, [K], options)
      };
    }
    __name(FromPropertyKey, "FromPropertyKey");
    function FromPropertyKeys(T, K, options) {
      return K.reduce((Acc, LK) => {
        return { ...Acc, ...FromPropertyKey(T, LK, options) };
      }, {});
    }
    __name(FromPropertyKeys, "FromPropertyKeys");
    function FromMappedKey(T, K, options) {
      return FromPropertyKeys(T, K.keys, options);
    }
    __name(FromMappedKey, "FromMappedKey");
    function OmitFromMappedKey(T, K, options) {
      const P = FromMappedKey(T, K, options);
      return (0, index_1.MappedResult)(P);
    }
    __name(OmitFromMappedKey, "OmitFromMappedKey");
    exports.OmitFromMappedKey = OmitFromMappedKey;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/omit/index.js
var require_omit2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/omit/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_omit_from_mapped_key(), exports);
    __exportStar(require_omit_from_mapped_result(), exports);
    __exportStar(require_omit(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/parameters/parameters.js
var require_parameters = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/parameters/parameters.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Parameters = void 0;
    var index_1 = require_tuple2();
    var type_1 = require_type2();
    function Parameters(schema, options = {}) {
      return (0, index_1.Tuple)((0, type_1.CloneRest)(schema.parameters), { ...options });
    }
    __name(Parameters, "Parameters");
    exports.Parameters = Parameters;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/parameters/index.js
var require_parameters2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/parameters/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_parameters(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/partial/partial.js
var require_partial = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/partial/partial.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Partial = void 0;
    var index_1 = require_optional2();
    var index_2 = require_object2();
    var index_3 = require_intersect2();
    var index_4 = require_union2();
    var index_5 = require_discard2();
    var index_6 = require_symbols2();
    var type_1 = require_type2();
    var partial_from_mapped_result_1 = require_partial_from_mapped_result();
    var type_2 = require_type3();
    function FromRest(T) {
      return T.map((L) => PartialResolve(L));
    }
    __name(FromRest, "FromRest");
    function FromProperties(T) {
      return globalThis.Object.getOwnPropertyNames(T).reduce((Acc, K) => {
        return { ...Acc, [K]: (0, index_1.Optional)(T[K]) };
      }, {});
    }
    __name(FromProperties, "FromProperties");
    function PartialResolve(T) {
      return (0, type_2.IsIntersect)(T) ? (0, index_3.Intersect)(FromRest(T.allOf)) : (0, type_2.IsUnion)(T) ? (0, index_4.Union)(FromRest(T.anyOf)) : (0, type_2.IsObject)(T) ? (0, index_2.Object)(FromProperties(T.properties)) : (0, index_2.Object)({});
    }
    __name(PartialResolve, "PartialResolve");
    function Partial(T, options = {}) {
      if ((0, type_2.IsMappedResult)(T))
        return (0, partial_from_mapped_result_1.PartialFromMappedResult)(T, options);
      const D = (0, index_5.Discard)(T, [index_6.TransformKind, "$id", "required"]);
      const R = (0, type_1.CloneType)(PartialResolve(T), options);
      return { ...D, ...R };
    }
    __name(Partial, "Partial");
    exports.Partial = Partial;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/partial/partial-from-mapped-result.js
var require_partial_from_mapped_result = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/partial/partial-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PartialFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var partial_1 = require_partial();
    function FromProperties(K, options) {
      return globalThis.Object.getOwnPropertyNames(K).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, partial_1.Partial)(K[K2], options) };
      }, {});
    }
    __name(FromProperties, "FromProperties");
    function FromMappedResult(R, options) {
      return FromProperties(R.properties, options);
    }
    __name(FromMappedResult, "FromMappedResult");
    function PartialFromMappedResult(R, options) {
      const P = FromMappedResult(R, options);
      return (0, index_1.MappedResult)(P);
    }
    __name(PartialFromMappedResult, "PartialFromMappedResult");
    exports.PartialFromMappedResult = PartialFromMappedResult;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/partial/index.js
var require_partial2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/partial/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_partial_from_mapped_result(), exports);
    __exportStar(require_partial(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/pick/pick-from-mapped-result.js
var require_pick_from_mapped_result = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/pick/pick-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PickFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var pick_1 = require_pick();
    function FromProperties(P, K, options) {
      return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, pick_1.Pick)(P[K2], K, options) };
      }, {});
    }
    __name(FromProperties, "FromProperties");
    function FromMappedResult(R, K, options) {
      return FromProperties(R.properties, K, options);
    }
    __name(FromMappedResult, "FromMappedResult");
    function PickFromMappedResult(R, K, options) {
      const P = FromMappedResult(R, K, options);
      return (0, index_1.MappedResult)(P);
    }
    __name(PickFromMappedResult, "PickFromMappedResult");
    exports.PickFromMappedResult = PickFromMappedResult;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/pick/pick.js
var require_pick = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/pick/pick.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Pick = exports.PickResolve = void 0;
    var index_1 = require_intersect2();
    var index_2 = require_union2();
    var index_3 = require_object2();
    var index_4 = require_indexed2();
    var index_5 = require_discard2();
    var index_6 = require_symbols2();
    var type_1 = require_type2();
    var pick_from_mapped_key_1 = require_pick_from_mapped_key();
    var pick_from_mapped_result_1 = require_pick_from_mapped_result();
    var type_2 = require_type3();
    function FromIntersect(T, K) {
      return T.map((T2) => PickResolve(T2, K));
    }
    __name(FromIntersect, "FromIntersect");
    function FromUnion(T, K) {
      return T.map((T2) => PickResolve(T2, K));
    }
    __name(FromUnion, "FromUnion");
    function FromProperties(T, K) {
      return K.reduce((Acc, K2) => {
        return K2 in T ? { ...Acc, [K2]: T[K2] } : Acc;
      }, {});
    }
    __name(FromProperties, "FromProperties");
    function PickResolve(T, K) {
      return (0, type_2.IsIntersect)(T) ? (0, index_1.Intersect)(FromIntersect(T.allOf, K)) : (0, type_2.IsUnion)(T) ? (0, index_2.Union)(FromUnion(T.anyOf, K)) : (0, type_2.IsObject)(T) ? (0, index_3.Object)(FromProperties(T.properties, K)) : (0, index_3.Object)({});
    }
    __name(PickResolve, "PickResolve");
    exports.PickResolve = PickResolve;
    function Pick(T, K, options = {}) {
      if ((0, type_2.IsMappedKey)(K))
        return (0, pick_from_mapped_key_1.PickFromMappedKey)(T, K, options);
      if ((0, type_2.IsMappedResult)(T))
        return (0, pick_from_mapped_result_1.PickFromMappedResult)(T, K, options);
      const I = (0, type_2.IsSchema)(K) ? (0, index_4.IndexPropertyKeys)(K) : K;
      const D = (0, index_5.Discard)(T, [index_6.TransformKind, "$id", "required"]);
      const R = (0, type_1.CloneType)(PickResolve(T, I), options);
      return { ...D, ...R };
    }
    __name(Pick, "Pick");
    exports.Pick = Pick;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/pick/pick-from-mapped-key.js
var require_pick_from_mapped_key = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/pick/pick-from-mapped-key.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PickFromMappedKey = void 0;
    var index_1 = require_mapped2();
    var pick_1 = require_pick();
    function FromPropertyKey(T, K, options) {
      return {
        [K]: (0, pick_1.Pick)(T, [K], options)
      };
    }
    __name(FromPropertyKey, "FromPropertyKey");
    function FromPropertyKeys(T, K, options) {
      return K.reduce((Acc, LK) => {
        return { ...Acc, ...FromPropertyKey(T, LK, options) };
      }, {});
    }
    __name(FromPropertyKeys, "FromPropertyKeys");
    function FromMappedKey(T, K, options) {
      return FromPropertyKeys(T, K.keys, options);
    }
    __name(FromMappedKey, "FromMappedKey");
    function PickFromMappedKey(T, K, options) {
      const P = FromMappedKey(T, K, options);
      return (0, index_1.MappedResult)(P);
    }
    __name(PickFromMappedKey, "PickFromMappedKey");
    exports.PickFromMappedKey = PickFromMappedKey;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/pick/index.js
var require_pick2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/pick/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_pick_from_mapped_key(), exports);
    __exportStar(require_pick_from_mapped_result(), exports);
    __exportStar(require_pick(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/readonly-optional/readonly-optional.js
var require_readonly_optional = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/readonly-optional/readonly-optional.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReadonlyOptional = void 0;
    var index_1 = require_readonly2();
    var index_2 = require_optional2();
    function ReadonlyOptional(schema) {
      return (0, index_1.Readonly)((0, index_2.Optional)(schema));
    }
    __name(ReadonlyOptional, "ReadonlyOptional");
    exports.ReadonlyOptional = ReadonlyOptional;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/readonly-optional/index.js
var require_readonly_optional2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/readonly-optional/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_readonly_optional(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/record/record.js
var require_record = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/record/record.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Record = void 0;
    var index_1 = require_object2();
    var index_2 = require_never2();
    var index_3 = require_union2();
    var index_4 = require_template_literal2();
    var index_5 = require_patterns2();
    var index_6 = require_indexed2();
    var index_7 = require_symbols2();
    var type_1 = require_type2();
    var value_1 = require_value();
    var type_2 = require_type3();
    function RecordCreateFromPattern(pattern, T, options) {
      return {
        ...options,
        [index_7.Kind]: "Record",
        type: "object",
        patternProperties: { [pattern]: (0, type_1.CloneType)(T) }
      };
    }
    __name(RecordCreateFromPattern, "RecordCreateFromPattern");
    function RecordCreateFromKeys(K, T, options) {
      const P = K.reduce((Acc, K2) => ({ ...Acc, [K2]: (0, type_1.CloneType)(T) }), {});
      return (0, index_1.Object)(P, { ...options, [index_7.Hint]: "Record" });
    }
    __name(RecordCreateFromKeys, "RecordCreateFromKeys");
    function FromTemplateLiteralKey(K, T, options) {
      return (0, index_4.IsTemplateLiteralFinite)(K) ? RecordCreateFromKeys((0, index_6.IndexPropertyKeys)(K), T, options) : RecordCreateFromPattern(K.pattern, T, options);
    }
    __name(FromTemplateLiteralKey, "FromTemplateLiteralKey");
    function FromUnionKey(K, T, options) {
      return RecordCreateFromKeys((0, index_6.IndexPropertyKeys)((0, index_3.Union)(K)), T, options);
    }
    __name(FromUnionKey, "FromUnionKey");
    function FromLiteralKey(K, T, options) {
      return RecordCreateFromKeys([K.toString()], T, options);
    }
    __name(FromLiteralKey, "FromLiteralKey");
    function FromRegExpKey(K, T, options) {
      return RecordCreateFromPattern(K.source, T, options);
    }
    __name(FromRegExpKey, "FromRegExpKey");
    function FromStringKey(K, T, options) {
      const pattern = (0, value_1.IsUndefined)(K.pattern) ? index_5.PatternStringExact : K.pattern;
      return RecordCreateFromPattern(pattern, T, options);
    }
    __name(FromStringKey, "FromStringKey");
    function FromIntegerKey(_, T, options) {
      return RecordCreateFromPattern(index_5.PatternNumberExact, T, options);
    }
    __name(FromIntegerKey, "FromIntegerKey");
    function FromNumberKey(_, T, options) {
      return RecordCreateFromPattern(index_5.PatternNumberExact, T, options);
    }
    __name(FromNumberKey, "FromNumberKey");
    function Record(K, T, options = {}) {
      return (0, type_2.IsUnion)(K) ? FromUnionKey(K.anyOf, T, options) : (0, type_2.IsTemplateLiteral)(K) ? FromTemplateLiteralKey(K, T, options) : (0, type_2.IsLiteral)(K) ? FromLiteralKey(K.const, T, options) : (0, type_2.IsInteger)(K) ? FromIntegerKey(K, T, options) : (0, type_2.IsNumber)(K) ? FromNumberKey(K, T, options) : (0, type_2.IsRegExp)(K) ? FromRegExpKey(K, T, options) : (0, type_2.IsString)(K) ? FromStringKey(K, T, options) : (0, index_2.Never)(options);
    }
    __name(Record, "Record");
    exports.Record = Record;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/record/index.js
var require_record2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/record/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_record(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/recursive/recursive.js
var require_recursive = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/recursive/recursive.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Recursive = void 0;
    var type_1 = require_type2();
    var value_1 = require_value();
    var index_1 = require_symbols2();
    var Ordinal = 0;
    function Recursive(callback, options = {}) {
      if ((0, value_1.IsUndefined)(options.$id))
        options.$id = `T${Ordinal++}`;
      const thisType = callback({ [index_1.Kind]: "This", $ref: `${options.$id}` });
      thisType.$id = options.$id;
      return (0, type_1.CloneType)({ ...options, [index_1.Hint]: "Recursive", ...thisType });
    }
    __name(Recursive, "Recursive");
    exports.Recursive = Recursive;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/recursive/index.js
var require_recursive2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/recursive/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_recursive(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/ref/ref.js
var require_ref = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/ref/ref.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Ref = void 0;
    var index_1 = require_symbols2();
    var value_1 = require_value();
    function Ref(unresolved, options = {}) {
      if ((0, value_1.IsString)(unresolved))
        return { ...options, [index_1.Kind]: "Ref", $ref: unresolved };
      if ((0, value_1.IsUndefined)(unresolved.$id))
        throw new Error("Reference target type must specify an $id");
      return {
        ...options,
        [index_1.Kind]: "Ref",
        $ref: unresolved.$id
      };
    }
    __name(Ref, "Ref");
    exports.Ref = Ref;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/ref/index.js
var require_ref2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/ref/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_ref(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/regexp/regexp.js
var require_regexp = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/regexp/regexp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RegExp = void 0;
    var value_1 = require_value();
    var index_1 = require_symbols2();
    function RegExp2(unresolved, options = {}) {
      const expr = (0, value_1.IsString)(unresolved) ? new globalThis.RegExp(unresolved) : unresolved;
      return { ...options, [index_1.Kind]: "RegExp", type: "RegExp", source: expr.source, flags: expr.flags };
    }
    __name(RegExp2, "RegExp");
    exports.RegExp = RegExp2;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/regexp/index.js
var require_regexp2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/regexp/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_regexp(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/required/required.js
var require_required = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/required/required.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Required = void 0;
    var index_1 = require_intersect2();
    var index_2 = require_union2();
    var index_3 = require_object2();
    var index_4 = require_symbols2();
    var type_1 = require_type2();
    var index_5 = require_discard2();
    var required_from_mapped_result_1 = require_required_from_mapped_result();
    var type_2 = require_type3();
    function FromRest(T) {
      return T.map((L) => RequiredResolve(L));
    }
    __name(FromRest, "FromRest");
    function FromProperties(T) {
      return globalThis.Object.getOwnPropertyNames(T).reduce((Acc, K) => {
        return { ...Acc, [K]: (0, index_5.Discard)(T[K], [index_4.OptionalKind]) };
      }, {});
    }
    __name(FromProperties, "FromProperties");
    function RequiredResolve(T) {
      return (0, type_2.IsIntersect)(T) ? (0, index_1.Intersect)(FromRest(T.allOf)) : (0, type_2.IsUnion)(T) ? (0, index_2.Union)(FromRest(T.anyOf)) : (0, type_2.IsObject)(T) ? (0, index_3.Object)(FromProperties(T.properties)) : (0, index_3.Object)({});
    }
    __name(RequiredResolve, "RequiredResolve");
    function Required(T, options = {}) {
      if ((0, type_2.IsMappedResult)(T)) {
        return (0, required_from_mapped_result_1.RequiredFromMappedResult)(T, options);
      } else {
        const D = (0, index_5.Discard)(T, [index_4.TransformKind, "$id", "required"]);
        const R = (0, type_1.CloneType)(RequiredResolve(T), options);
        return { ...D, ...R };
      }
    }
    __name(Required, "Required");
    exports.Required = Required;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/required/required-from-mapped-result.js
var require_required_from_mapped_result = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/required/required-from-mapped-result.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RequiredFromMappedResult = void 0;
    var index_1 = require_mapped2();
    var required_1 = require_required();
    function FromProperties(P, options) {
      return globalThis.Object.getOwnPropertyNames(P).reduce((Acc, K2) => {
        return { ...Acc, [K2]: (0, required_1.Required)(P[K2], options) };
      }, {});
    }
    __name(FromProperties, "FromProperties");
    function FromMappedResult(R, options) {
      return FromProperties(R.properties, options);
    }
    __name(FromMappedResult, "FromMappedResult");
    function RequiredFromMappedResult(R, options) {
      const P = FromMappedResult(R, options);
      return (0, index_1.MappedResult)(P);
    }
    __name(RequiredFromMappedResult, "RequiredFromMappedResult");
    exports.RequiredFromMappedResult = RequiredFromMappedResult;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/required/index.js
var require_required2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/required/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_required_from_mapped_result(), exports);
    __exportStar(require_required(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/rest/rest.js
var require_rest = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/rest/rest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Rest = void 0;
    var type_1 = require_type2();
    var type_2 = require_type3();
    function RestResolve(T) {
      return (0, type_2.IsIntersect)(T) ? [...T.allOf] : (0, type_2.IsUnion)(T) ? [...T.anyOf] : (0, type_2.IsTuple)(T) ? [...T.items ?? []] : [];
    }
    __name(RestResolve, "RestResolve");
    function Rest(T) {
      return (0, type_1.CloneRest)(RestResolve(T));
    }
    __name(Rest, "Rest");
    exports.Rest = Rest;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/rest/index.js
var require_rest2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/rest/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_rest(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/return-type/return-type.js
var require_return_type = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/return-type/return-type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReturnType = void 0;
    var type_1 = require_type2();
    function ReturnType(schema, options = {}) {
      return (0, type_1.CloneType)(schema.returns, options);
    }
    __name(ReturnType, "ReturnType");
    exports.ReturnType = ReturnType;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/return-type/index.js
var require_return_type2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/return-type/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_return_type(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/strict/strict.js
var require_strict = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/strict/strict.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Strict = void 0;
    function Strict(schema) {
      return JSON.parse(JSON.stringify(schema));
    }
    __name(Strict, "Strict");
    exports.Strict = Strict;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/strict/index.js
var require_strict2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/strict/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_strict(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/transform/transform.js
var require_transform2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/transform/transform.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Transform = exports.TransformEncodeBuilder = exports.TransformDecodeBuilder = void 0;
    var index_1 = require_symbols2();
    var type_1 = require_type2();
    var type_2 = require_type3();
    var TransformDecodeBuilder = class {
      static {
        __name(this, "TransformDecodeBuilder");
      }
      constructor(schema) {
        this.schema = schema;
      }
      Decode(decode) {
        return new TransformEncodeBuilder(this.schema, decode);
      }
    };
    exports.TransformDecodeBuilder = TransformDecodeBuilder;
    var TransformEncodeBuilder = class {
      static {
        __name(this, "TransformEncodeBuilder");
      }
      constructor(schema, decode) {
        this.schema = schema;
        this.decode = decode;
      }
      EncodeTransform(encode, schema) {
        const Encode = /* @__PURE__ */ __name((value) => schema[index_1.TransformKind].Encode(encode(value)), "Encode");
        const Decode = /* @__PURE__ */ __name((value) => this.decode(schema[index_1.TransformKind].Decode(value)), "Decode");
        const Codec = { Encode, Decode };
        return { ...schema, [index_1.TransformKind]: Codec };
      }
      EncodeSchema(encode, schema) {
        const Codec = { Decode: this.decode, Encode: encode };
        return { ...schema, [index_1.TransformKind]: Codec };
      }
      Encode(encode) {
        const schema = (0, type_1.CloneType)(this.schema);
        return (0, type_2.IsTransform)(schema) ? this.EncodeTransform(encode, schema) : this.EncodeSchema(encode, schema);
      }
    };
    exports.TransformEncodeBuilder = TransformEncodeBuilder;
    function Transform(schema) {
      return new TransformDecodeBuilder(schema);
    }
    __name(Transform, "Transform");
    exports.Transform = Transform;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/transform/index.js
var require_transform3 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/transform/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_transform2(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/void/void.js
var require_void = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/void/void.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Void = void 0;
    var index_1 = require_symbols2();
    function Void(options = {}) {
      return {
        ...options,
        [index_1.Kind]: "Void",
        type: "void"
      };
    }
    __name(Void, "Void");
    exports.Void = Void;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/void/index.js
var require_void2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/void/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_void(), exports);
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/type/json.js
var require_json = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/type/json.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JsonTypeBuilder = void 0;
    var index_1 = require_any2();
    var index_2 = require_array2();
    var index_3 = require_boolean2();
    var index_4 = require_composite2();
    var index_5 = require_const2();
    var index_6 = require_deref4();
    var index_7 = require_enum2();
    var index_8 = require_exclude2();
    var index_9 = require_extends2();
    var index_10 = require_extract2();
    var index_11 = require_indexed2();
    var index_12 = require_integer2();
    var index_13 = require_intersect2();
    var index_14 = require_intrinsic2();
    var index_15 = require_keyof2();
    var index_16 = require_literal2();
    var index_17 = require_mapped2();
    var index_18 = require_never2();
    var index_19 = require_not2();
    var index_20 = require_null2();
    var index_21 = require_number2();
    var index_22 = require_object2();
    var index_23 = require_omit2();
    var index_24 = require_optional2();
    var index_25 = require_partial2();
    var index_26 = require_pick2();
    var index_27 = require_readonly2();
    var index_28 = require_readonly_optional2();
    var index_29 = require_record2();
    var index_30 = require_recursive2();
    var index_31 = require_ref2();
    var index_32 = require_required2();
    var index_33 = require_rest2();
    var index_34 = require_strict2();
    var index_35 = require_string2();
    var index_36 = require_template_literal2();
    var index_37 = require_transform3();
    var index_38 = require_tuple2();
    var index_39 = require_union2();
    var index_40 = require_unknown2();
    var index_41 = require_unsafe2();
    var JsonTypeBuilder = class {
      static {
        __name(this, "JsonTypeBuilder");
      }
      // ------------------------------------------------------------------------
      // Strict
      // ------------------------------------------------------------------------
      /** `[Json]` Omits compositing symbols from this schema */
      Strict(schema) {
        return (0, index_34.Strict)(schema);
      }
      // ------------------------------------------------------------------------
      // Modifiers
      // ------------------------------------------------------------------------
      /** `[Json]` Creates a Readonly and Optional property */
      ReadonlyOptional(schema) {
        return (0, index_28.ReadonlyOptional)(schema);
      }
      /** `[Json]` Creates a Readonly property */
      Readonly(schema, enable) {
        return (0, index_27.Readonly)(schema, enable ?? true);
      }
      /** `[Json]` Creates a Optional property */
      Optional(schema, enable) {
        return (0, index_24.Optional)(schema, enable ?? true);
      }
      // ------------------------------------------------------------------------
      // Types
      // ------------------------------------------------------------------------
      /** `[Json]` Creates an Any type */
      Any(options = {}) {
        return (0, index_1.Any)(options);
      }
      /** `[Json]` Creates an Array type */
      Array(schema, options = {}) {
        return (0, index_2.Array)(schema, options);
      }
      /** `[Json]` Creates a Boolean type */
      Boolean(options = {}) {
        return (0, index_3.Boolean)(options);
      }
      /** `[Json]` Intrinsic function to Capitalize LiteralString types */
      Capitalize(schema, options = {}) {
        return (0, index_14.Capitalize)(schema, options);
      }
      /** `[Json]` Creates a Composite object type */
      Composite(objects, options) {
        return (0, index_4.Composite)(objects, options);
      }
      /** `[JavaScript]` Creates a readonly const type from the given value. */
      Const(value, options = {}) {
        return (0, index_5.Const)(value, options);
      }
      /** `[Json]` Creates a dereferenced type */
      Deref(schema, references) {
        return (0, index_6.Deref)(schema, references);
      }
      /** `[Json]` Creates a Enum type */
      Enum(item, options = {}) {
        return (0, index_7.Enum)(item, options);
      }
      /** `[Json]` Constructs a type by excluding from unionType all union members that are assignable to excludedMembers */
      Exclude(unionType, excludedMembers, options = {}) {
        return (0, index_8.Exclude)(unionType, excludedMembers, options);
      }
      /** `[Json]` Creates a Conditional type */
      Extends(L, R, T, F, options = {}) {
        return (0, index_9.Extends)(L, R, T, F, options);
      }
      /** `[Json]` Constructs a type by extracting from type all union members that are assignable to union */
      Extract(type, union, options = {}) {
        return (0, index_10.Extract)(type, union, options);
      }
      /** `[Json]` Returns an Indexed property type for the given keys */
      Index(schema, unresolved, options = {}) {
        return (0, index_11.Index)(schema, unresolved, options);
      }
      /** `[Json]` Creates an Integer type */
      Integer(options = {}) {
        return (0, index_12.Integer)(options);
      }
      /** `[Json]` Creates an Intersect type */
      Intersect(T, options = {}) {
        return (0, index_13.Intersect)(T, options);
      }
      /** `[Json]` Creates a KeyOf type */
      KeyOf(schema, options = {}) {
        return (0, index_15.KeyOf)(schema, options);
      }
      /** `[Json]` Creates a Literal type */
      Literal(value, options = {}) {
        return (0, index_16.Literal)(value, options);
      }
      /** `[Json]` Intrinsic function to Lowercase LiteralString types */
      Lowercase(schema, options = {}) {
        return (0, index_14.Lowercase)(schema, options);
      }
      /** `[Json]` Creates a Mapped object type */
      Mapped(key, map, options = {}) {
        return (0, index_17.Mapped)(key, map, options);
      }
      /** `[Json]` Creates a Never type */
      Never(options = {}) {
        return (0, index_18.Never)(options);
      }
      /** `[Json]` Creates a Not type */
      Not(schema, options) {
        return (0, index_19.Not)(schema, options);
      }
      /** `[Json]` Creates a Null type */
      Null(options = {}) {
        return (0, index_20.Null)(options);
      }
      /** `[Json]` Creates a Number type */
      Number(options = {}) {
        return (0, index_21.Number)(options);
      }
      /** `[Json]` Creates an Object type */
      Object(properties, options = {}) {
        return (0, index_22.Object)(properties, options);
      }
      /** `[Json]` Constructs a type whose keys are omitted from the given type */
      Omit(schema, unresolved, options = {}) {
        return (0, index_23.Omit)(schema, unresolved, options);
      }
      /** `[Json]` Constructs a type where all properties are optional */
      Partial(schema, options = {}) {
        return (0, index_25.Partial)(schema, options);
      }
      /** `[Json]` Constructs a type whose keys are picked from the given type */
      Pick(schema, unresolved, options = {}) {
        return (0, index_26.Pick)(schema, unresolved, options);
      }
      /** `[Json]` Creates a Record type */
      Record(key, schema, options = {}) {
        return (0, index_29.Record)(key, schema);
      }
      /** `[Json]` Creates a Recursive type */
      Recursive(callback, options = {}) {
        return (0, index_30.Recursive)(callback, options);
      }
      /** `[Json]` Creates a Ref type. */
      Ref(unresolved, options = {}) {
        return (0, index_31.Ref)(unresolved, options);
      }
      /** `[Json]` Constructs a type where all properties are required */
      Required(schema, options = {}) {
        return (0, index_32.Required)(schema, options);
      }
      /** `[Json]` Extracts interior Rest elements from Tuple, Intersect and Union types */
      Rest(schema) {
        return (0, index_33.Rest)(schema);
      }
      /** `[Json]` Creates a String type */
      String(options = {}) {
        return (0, index_35.String)(options);
      }
      /** `[Json]` Creates a TemplateLiteral type */
      TemplateLiteral(unresolved, options = {}) {
        return (0, index_36.TemplateLiteral)(unresolved, options);
      }
      /** `[Json]` Creates a Transform type */
      Transform(schema) {
        return (0, index_37.Transform)(schema);
      }
      /** `[Json]` Creates a Tuple type */
      Tuple(items, options = {}) {
        return (0, index_38.Tuple)(items, options);
      }
      /** `[Json]` Intrinsic function to Uncapitalize LiteralString types */
      Uncapitalize(schema, options = {}) {
        return (0, index_14.Uncapitalize)(schema, options);
      }
      /** `[Json]` Creates a Union type */
      Union(schemas, options = {}) {
        return (0, index_39.Union)(schemas, options);
      }
      /** `[Json]` Creates an Unknown type */
      Unknown(options = {}) {
        return (0, index_40.Unknown)(options);
      }
      /** `[Json]` Creates a Unsafe type that will infers as the generic argument T */
      Unsafe(options = {}) {
        return (0, index_41.Unsafe)(options);
      }
      /** `[Json]` Intrinsic function to Uppercase LiteralString types */
      Uppercase(schema, options = {}) {
        return (0, index_14.Uppercase)(schema, options);
      }
    };
    exports.JsonTypeBuilder = JsonTypeBuilder;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/type/type.js
var require_type4 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/type/type.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Strict = exports.ReturnType = exports.Rest = exports.Required = exports.RegExp = exports.Ref = exports.Recursive = exports.Record = exports.ReadonlyOptional = exports.Readonly = exports.Promise = exports.Pick = exports.Partial = exports.Parameters = exports.Optional = exports.Omit = exports.Object = exports.Number = exports.Null = exports.Not = exports.Never = exports.Mapped = exports.Literal = exports.KeyOf = exports.Iterator = exports.Uppercase = exports.Lowercase = exports.Uncapitalize = exports.Capitalize = exports.Intersect = exports.Integer = exports.InstanceType = exports.Index = exports.Function = exports.Extract = exports.Extends = exports.Exclude = exports.Enum = exports.Deref = exports.Date = exports.ConstructorParameters = exports.Constructor = exports.Const = exports.Composite = exports.Boolean = exports.BigInt = exports.Awaited = exports.AsyncIterator = exports.Array = exports.Any = void 0;
    exports.Void = exports.Unsafe = exports.Unknown = exports.Union = exports.Undefined = exports.Uint8Array = exports.Tuple = exports.Transform = exports.TemplateLiteral = exports.Symbol = exports.String = void 0;
    var index_1 = require_any2();
    Object.defineProperty(exports, "Any", { enumerable: true, get: function() {
      return index_1.Any;
    } });
    var index_2 = require_array2();
    Object.defineProperty(exports, "Array", { enumerable: true, get: function() {
      return index_2.Array;
    } });
    var index_3 = require_async_iterator2();
    Object.defineProperty(exports, "AsyncIterator", { enumerable: true, get: function() {
      return index_3.AsyncIterator;
    } });
    var index_4 = require_awaited2();
    Object.defineProperty(exports, "Awaited", { enumerable: true, get: function() {
      return index_4.Awaited;
    } });
    var index_5 = require_bigint2();
    Object.defineProperty(exports, "BigInt", { enumerable: true, get: function() {
      return index_5.BigInt;
    } });
    var index_6 = require_boolean2();
    Object.defineProperty(exports, "Boolean", { enumerable: true, get: function() {
      return index_6.Boolean;
    } });
    var index_7 = require_composite2();
    Object.defineProperty(exports, "Composite", { enumerable: true, get: function() {
      return index_7.Composite;
    } });
    var index_8 = require_const2();
    Object.defineProperty(exports, "Const", { enumerable: true, get: function() {
      return index_8.Const;
    } });
    var index_9 = require_constructor2();
    Object.defineProperty(exports, "Constructor", { enumerable: true, get: function() {
      return index_9.Constructor;
    } });
    var index_10 = require_constructor_parameters2();
    Object.defineProperty(exports, "ConstructorParameters", { enumerable: true, get: function() {
      return index_10.ConstructorParameters;
    } });
    var index_11 = require_date2();
    Object.defineProperty(exports, "Date", { enumerable: true, get: function() {
      return index_11.Date;
    } });
    var index_12 = require_deref4();
    Object.defineProperty(exports, "Deref", { enumerable: true, get: function() {
      return index_12.Deref;
    } });
    var index_13 = require_enum2();
    Object.defineProperty(exports, "Enum", { enumerable: true, get: function() {
      return index_13.Enum;
    } });
    var index_14 = require_exclude2();
    Object.defineProperty(exports, "Exclude", { enumerable: true, get: function() {
      return index_14.Exclude;
    } });
    var index_15 = require_extends2();
    Object.defineProperty(exports, "Extends", { enumerable: true, get: function() {
      return index_15.Extends;
    } });
    var index_16 = require_extract2();
    Object.defineProperty(exports, "Extract", { enumerable: true, get: function() {
      return index_16.Extract;
    } });
    var index_17 = require_function2();
    Object.defineProperty(exports, "Function", { enumerable: true, get: function() {
      return index_17.Function;
    } });
    var index_18 = require_indexed2();
    Object.defineProperty(exports, "Index", { enumerable: true, get: function() {
      return index_18.Index;
    } });
    var index_19 = require_instance_type2();
    Object.defineProperty(exports, "InstanceType", { enumerable: true, get: function() {
      return index_19.InstanceType;
    } });
    var index_20 = require_integer2();
    Object.defineProperty(exports, "Integer", { enumerable: true, get: function() {
      return index_20.Integer;
    } });
    var index_21 = require_intersect2();
    Object.defineProperty(exports, "Intersect", { enumerable: true, get: function() {
      return index_21.Intersect;
    } });
    var index_22 = require_intrinsic2();
    Object.defineProperty(exports, "Capitalize", { enumerable: true, get: function() {
      return index_22.Capitalize;
    } });
    Object.defineProperty(exports, "Uncapitalize", { enumerable: true, get: function() {
      return index_22.Uncapitalize;
    } });
    Object.defineProperty(exports, "Lowercase", { enumerable: true, get: function() {
      return index_22.Lowercase;
    } });
    Object.defineProperty(exports, "Uppercase", { enumerable: true, get: function() {
      return index_22.Uppercase;
    } });
    var index_23 = require_iterator2();
    Object.defineProperty(exports, "Iterator", { enumerable: true, get: function() {
      return index_23.Iterator;
    } });
    var index_24 = require_keyof2();
    Object.defineProperty(exports, "KeyOf", { enumerable: true, get: function() {
      return index_24.KeyOf;
    } });
    var index_25 = require_literal2();
    Object.defineProperty(exports, "Literal", { enumerable: true, get: function() {
      return index_25.Literal;
    } });
    var index_26 = require_mapped2();
    Object.defineProperty(exports, "Mapped", { enumerable: true, get: function() {
      return index_26.Mapped;
    } });
    var index_27 = require_never2();
    Object.defineProperty(exports, "Never", { enumerable: true, get: function() {
      return index_27.Never;
    } });
    var index_28 = require_not2();
    Object.defineProperty(exports, "Not", { enumerable: true, get: function() {
      return index_28.Not;
    } });
    var index_29 = require_null2();
    Object.defineProperty(exports, "Null", { enumerable: true, get: function() {
      return index_29.Null;
    } });
    var index_30 = require_number2();
    Object.defineProperty(exports, "Number", { enumerable: true, get: function() {
      return index_30.Number;
    } });
    var index_31 = require_object2();
    Object.defineProperty(exports, "Object", { enumerable: true, get: function() {
      return index_31.Object;
    } });
    var index_32 = require_omit2();
    Object.defineProperty(exports, "Omit", { enumerable: true, get: function() {
      return index_32.Omit;
    } });
    var index_33 = require_optional2();
    Object.defineProperty(exports, "Optional", { enumerable: true, get: function() {
      return index_33.Optional;
    } });
    var index_34 = require_parameters2();
    Object.defineProperty(exports, "Parameters", { enumerable: true, get: function() {
      return index_34.Parameters;
    } });
    var index_35 = require_partial2();
    Object.defineProperty(exports, "Partial", { enumerable: true, get: function() {
      return index_35.Partial;
    } });
    var index_36 = require_pick2();
    Object.defineProperty(exports, "Pick", { enumerable: true, get: function() {
      return index_36.Pick;
    } });
    var index_37 = require_promise2();
    Object.defineProperty(exports, "Promise", { enumerable: true, get: function() {
      return index_37.Promise;
    } });
    var index_38 = require_readonly2();
    Object.defineProperty(exports, "Readonly", { enumerable: true, get: function() {
      return index_38.Readonly;
    } });
    var index_39 = require_readonly_optional2();
    Object.defineProperty(exports, "ReadonlyOptional", { enumerable: true, get: function() {
      return index_39.ReadonlyOptional;
    } });
    var index_40 = require_record2();
    Object.defineProperty(exports, "Record", { enumerable: true, get: function() {
      return index_40.Record;
    } });
    var index_41 = require_recursive2();
    Object.defineProperty(exports, "Recursive", { enumerable: true, get: function() {
      return index_41.Recursive;
    } });
    var index_42 = require_ref2();
    Object.defineProperty(exports, "Ref", { enumerable: true, get: function() {
      return index_42.Ref;
    } });
    var index_43 = require_regexp2();
    Object.defineProperty(exports, "RegExp", { enumerable: true, get: function() {
      return index_43.RegExp;
    } });
    var index_44 = require_required2();
    Object.defineProperty(exports, "Required", { enumerable: true, get: function() {
      return index_44.Required;
    } });
    var index_45 = require_rest2();
    Object.defineProperty(exports, "Rest", { enumerable: true, get: function() {
      return index_45.Rest;
    } });
    var index_46 = require_return_type2();
    Object.defineProperty(exports, "ReturnType", { enumerable: true, get: function() {
      return index_46.ReturnType;
    } });
    var index_47 = require_strict2();
    Object.defineProperty(exports, "Strict", { enumerable: true, get: function() {
      return index_47.Strict;
    } });
    var index_48 = require_string2();
    Object.defineProperty(exports, "String", { enumerable: true, get: function() {
      return index_48.String;
    } });
    var index_49 = require_symbol2();
    Object.defineProperty(exports, "Symbol", { enumerable: true, get: function() {
      return index_49.Symbol;
    } });
    var index_50 = require_template_literal2();
    Object.defineProperty(exports, "TemplateLiteral", { enumerable: true, get: function() {
      return index_50.TemplateLiteral;
    } });
    var index_51 = require_transform3();
    Object.defineProperty(exports, "Transform", { enumerable: true, get: function() {
      return index_51.Transform;
    } });
    var index_52 = require_tuple2();
    Object.defineProperty(exports, "Tuple", { enumerable: true, get: function() {
      return index_52.Tuple;
    } });
    var index_53 = require_uint8array2();
    Object.defineProperty(exports, "Uint8Array", { enumerable: true, get: function() {
      return index_53.Uint8Array;
    } });
    var index_54 = require_undefined2();
    Object.defineProperty(exports, "Undefined", { enumerable: true, get: function() {
      return index_54.Undefined;
    } });
    var index_55 = require_union2();
    Object.defineProperty(exports, "Union", { enumerable: true, get: function() {
      return index_55.Union;
    } });
    var index_56 = require_unknown2();
    Object.defineProperty(exports, "Unknown", { enumerable: true, get: function() {
      return index_56.Unknown;
    } });
    var index_57 = require_unsafe2();
    Object.defineProperty(exports, "Unsafe", { enumerable: true, get: function() {
      return index_57.Unsafe;
    } });
    var index_58 = require_void2();
    Object.defineProperty(exports, "Void", { enumerable: true, get: function() {
      return index_58.Void;
    } });
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/type/javascript.js
var require_javascript = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/type/javascript.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JavaScriptTypeBuilder = void 0;
    var json_1 = require_json();
    var index_1 = require_async_iterator2();
    var index_2 = require_awaited2();
    var index_3 = require_bigint2();
    var index_4 = require_constructor2();
    var index_5 = require_constructor_parameters2();
    var index_6 = require_date2();
    var index_7 = require_function2();
    var index_8 = require_instance_type2();
    var index_9 = require_iterator2();
    var index_10 = require_parameters2();
    var index_11 = require_promise2();
    var index_12 = require_regexp2();
    var index_13 = require_return_type2();
    var index_14 = require_symbol2();
    var index_15 = require_uint8array2();
    var index_16 = require_undefined2();
    var index_17 = require_void2();
    var JavaScriptTypeBuilder = class extends json_1.JsonTypeBuilder {
      static {
        __name(this, "JavaScriptTypeBuilder");
      }
      /** `[JavaScript]` Creates a AsyncIterator type */
      AsyncIterator(items, options = {}) {
        return (0, index_1.AsyncIterator)(items, options);
      }
      /** `[JavaScript]` Constructs a type by recursively unwrapping Promise types */
      Awaited(schema, options = {}) {
        return (0, index_2.Awaited)(schema, options);
      }
      /** `[JavaScript]` Creates a BigInt type */
      BigInt(options = {}) {
        return (0, index_3.BigInt)(options);
      }
      /** `[JavaScript]` Extracts the ConstructorParameters from the given Constructor type */
      ConstructorParameters(schema, options = {}) {
        return (0, index_5.ConstructorParameters)(schema, options);
      }
      /** `[JavaScript]` Creates a Constructor type */
      Constructor(parameters, returns, options) {
        return (0, index_4.Constructor)(parameters, returns, options);
      }
      /** `[JavaScript]` Creates a Date type */
      Date(options = {}) {
        return (0, index_6.Date)(options);
      }
      /** `[JavaScript]` Creates a Function type */
      Function(parameters, returns, options) {
        return (0, index_7.Function)(parameters, returns, options);
      }
      /** `[JavaScript]` Extracts the InstanceType from the given Constructor type */
      InstanceType(schema, options = {}) {
        return (0, index_8.InstanceType)(schema, options);
      }
      /** `[JavaScript]` Creates an Iterator type */
      Iterator(items, options = {}) {
        return (0, index_9.Iterator)(items, options);
      }
      /** `[JavaScript]` Extracts the Parameters from the given Function type */
      Parameters(schema, options = {}) {
        return (0, index_10.Parameters)(schema, options);
      }
      /** `[JavaScript]` Creates a Promise type */
      Promise(item, options = {}) {
        return (0, index_11.Promise)(item, options);
      }
      /** `[JavaScript]` Creates a RegExp type */
      RegExp(unresolved, options = {}) {
        return (0, index_12.RegExp)(unresolved, options);
      }
      /** `[JavaScript]` Extracts the ReturnType from the given Function type */
      ReturnType(schema, options = {}) {
        return (0, index_13.ReturnType)(schema, options);
      }
      /** `[JavaScript]` Creates a Symbol type */
      Symbol(options) {
        return (0, index_14.Symbol)(options);
      }
      /** `[JavaScript]` Creates a Undefined type */
      Undefined(options = {}) {
        return (0, index_16.Undefined)(options);
      }
      /** `[JavaScript]` Creates a Uint8Array type */
      Uint8Array(options = {}) {
        return (0, index_15.Uint8Array)(options);
      }
      /** `[JavaScript]` Creates a Void type */
      Void(options = {}) {
        return (0, index_17.Void)(options);
      }
    };
    exports.JavaScriptTypeBuilder = JavaScriptTypeBuilder;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/type/index.js
var require_type5 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/type/type/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Type = exports.JavaScriptTypeBuilder = exports.JsonTypeBuilder = void 0;
    var json_1 = require_json();
    Object.defineProperty(exports, "JsonTypeBuilder", { enumerable: true, get: function() {
      return json_1.JsonTypeBuilder;
    } });
    var TypeBuilder = require_type4();
    var javascript_1 = require_javascript();
    Object.defineProperty(exports, "JavaScriptTypeBuilder", { enumerable: true, get: function() {
      return javascript_1.JavaScriptTypeBuilder;
    } });
    var Type = TypeBuilder;
    exports.Type = Type;
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/index.js
var require_require = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IntrinsicFromMappedKey = exports.Intrinsic = exports.Iterator = exports.IntersectEvaluated = exports.Intersect = exports.Integer = exports.InstanceType = exports.IndexFromMappedResult = exports.IndexFromMappedKey = exports.IndexPropertyKeys = exports.Index = exports.Increment = exports.Function = exports.Extract = exports.ExtendsUndefinedCheck = exports.ExtendsResult = exports.ExtendsCheck = exports.Extends = exports.Exclude = exports.Enum = exports.Deref = exports.Date = exports.ConstructorParameters = exports.Constructor = exports.Const = exports.Composite = exports.Boolean = exports.BigInt = exports.Awaited = exports.AsyncIterator = exports.Array = exports.Any = exports.TypeBoxError = exports.CloneRest = exports.CloneType = exports.ValueGuard = exports.TypeGuard = exports.FormatRegistry = exports.TypeRegistry = exports.PatternStringExact = exports.PatternString = exports.PatternNumberExact = exports.PatternNumber = exports.PatternBooleanExact = exports.PatternBoolean = exports.TransformKind = exports.OptionalKind = exports.ReadonlyKind = exports.Hint = exports.Kind = void 0;
    exports.Undefined = exports.Uint8Array = exports.Tuple = exports.TransformEncodeBuilder = exports.TransformDecodeBuilder = exports.Transform = exports.TemplateLiteralExpressionGenerate = exports.TemplateLiteralGenerate = exports.TemplateLiteralParseExact = exports.TemplateLiteralParse = exports.IsTemplateLiteralExpressionFinite = exports.IsTemplateLiteralFinite = exports.TemplateLiteral = exports.Symbol = exports.String = exports.Strict = exports.ReturnType = exports.Rest = exports.Required = exports.RegExp = exports.Ref = exports.Recursive = exports.Record = exports.ReadonlyOptional = exports.ReadonlyFromMappedResult = exports.Readonly = exports.Promise = exports.Pick = exports.PartialFromMappedResult = exports.Partial = exports.Parameters = exports.OptionalFromMappedResult = exports.Optional = exports.Omit = exports.Object = exports.Number = exports.Null = exports.Not = exports.Never = exports.MappedResult = exports.MappedKey = exports.Mapped = exports.Literal = exports.KeyOfPattern = exports.KeyOfPropertyKeys = exports.KeyOf = exports.Uppercase = exports.Uncapitalize = exports.Lowercase = exports.Capitalize = void 0;
    exports.JavaScriptTypeBuilder = exports.JsonTypeBuilder = exports.Type = exports.Void = exports.Unsafe = exports.Unknown = exports.UnionEvaluated = exports.Union = void 0;
    var index_1 = require_symbols2();
    Object.defineProperty(exports, "Kind", { enumerable: true, get: function() {
      return index_1.Kind;
    } });
    Object.defineProperty(exports, "Hint", { enumerable: true, get: function() {
      return index_1.Hint;
    } });
    Object.defineProperty(exports, "ReadonlyKind", { enumerable: true, get: function() {
      return index_1.ReadonlyKind;
    } });
    Object.defineProperty(exports, "OptionalKind", { enumerable: true, get: function() {
      return index_1.OptionalKind;
    } });
    Object.defineProperty(exports, "TransformKind", { enumerable: true, get: function() {
      return index_1.TransformKind;
    } });
    var index_2 = require_patterns2();
    Object.defineProperty(exports, "PatternBoolean", { enumerable: true, get: function() {
      return index_2.PatternBoolean;
    } });
    Object.defineProperty(exports, "PatternBooleanExact", { enumerable: true, get: function() {
      return index_2.PatternBooleanExact;
    } });
    Object.defineProperty(exports, "PatternNumber", { enumerable: true, get: function() {
      return index_2.PatternNumber;
    } });
    Object.defineProperty(exports, "PatternNumberExact", { enumerable: true, get: function() {
      return index_2.PatternNumberExact;
    } });
    Object.defineProperty(exports, "PatternString", { enumerable: true, get: function() {
      return index_2.PatternString;
    } });
    Object.defineProperty(exports, "PatternStringExact", { enumerable: true, get: function() {
      return index_2.PatternStringExact;
    } });
    var index_3 = require_registry();
    Object.defineProperty(exports, "TypeRegistry", { enumerable: true, get: function() {
      return index_3.TypeRegistry;
    } });
    Object.defineProperty(exports, "FormatRegistry", { enumerable: true, get: function() {
      return index_3.FormatRegistry;
    } });
    var index_4 = require_guard3();
    Object.defineProperty(exports, "TypeGuard", { enumerable: true, get: function() {
      return index_4.TypeGuard;
    } });
    Object.defineProperty(exports, "ValueGuard", { enumerable: true, get: function() {
      return index_4.ValueGuard;
    } });
    var type_1 = require_type2();
    Object.defineProperty(exports, "CloneType", { enumerable: true, get: function() {
      return type_1.CloneType;
    } });
    Object.defineProperty(exports, "CloneRest", { enumerable: true, get: function() {
      return type_1.CloneRest;
    } });
    var index_5 = require_error2();
    Object.defineProperty(exports, "TypeBoxError", { enumerable: true, get: function() {
      return index_5.TypeBoxError;
    } });
    var index_6 = require_any2();
    Object.defineProperty(exports, "Any", { enumerable: true, get: function() {
      return index_6.Any;
    } });
    var index_7 = require_array2();
    Object.defineProperty(exports, "Array", { enumerable: true, get: function() {
      return index_7.Array;
    } });
    var index_8 = require_async_iterator2();
    Object.defineProperty(exports, "AsyncIterator", { enumerable: true, get: function() {
      return index_8.AsyncIterator;
    } });
    var index_9 = require_awaited2();
    Object.defineProperty(exports, "Awaited", { enumerable: true, get: function() {
      return index_9.Awaited;
    } });
    var index_10 = require_bigint2();
    Object.defineProperty(exports, "BigInt", { enumerable: true, get: function() {
      return index_10.BigInt;
    } });
    var index_11 = require_boolean2();
    Object.defineProperty(exports, "Boolean", { enumerable: true, get: function() {
      return index_11.Boolean;
    } });
    var index_12 = require_composite2();
    Object.defineProperty(exports, "Composite", { enumerable: true, get: function() {
      return index_12.Composite;
    } });
    var index_13 = require_const2();
    Object.defineProperty(exports, "Const", { enumerable: true, get: function() {
      return index_13.Const;
    } });
    var index_14 = require_constructor2();
    Object.defineProperty(exports, "Constructor", { enumerable: true, get: function() {
      return index_14.Constructor;
    } });
    var index_15 = require_constructor_parameters2();
    Object.defineProperty(exports, "ConstructorParameters", { enumerable: true, get: function() {
      return index_15.ConstructorParameters;
    } });
    var index_16 = require_date2();
    Object.defineProperty(exports, "Date", { enumerable: true, get: function() {
      return index_16.Date;
    } });
    var index_17 = require_deref4();
    Object.defineProperty(exports, "Deref", { enumerable: true, get: function() {
      return index_17.Deref;
    } });
    var index_18 = require_enum2();
    Object.defineProperty(exports, "Enum", { enumerable: true, get: function() {
      return index_18.Enum;
    } });
    var index_19 = require_exclude2();
    Object.defineProperty(exports, "Exclude", { enumerable: true, get: function() {
      return index_19.Exclude;
    } });
    var index_20 = require_extends2();
    Object.defineProperty(exports, "Extends", { enumerable: true, get: function() {
      return index_20.Extends;
    } });
    Object.defineProperty(exports, "ExtendsCheck", { enumerable: true, get: function() {
      return index_20.ExtendsCheck;
    } });
    Object.defineProperty(exports, "ExtendsResult", { enumerable: true, get: function() {
      return index_20.ExtendsResult;
    } });
    Object.defineProperty(exports, "ExtendsUndefinedCheck", { enumerable: true, get: function() {
      return index_20.ExtendsUndefinedCheck;
    } });
    var index_21 = require_extract2();
    Object.defineProperty(exports, "Extract", { enumerable: true, get: function() {
      return index_21.Extract;
    } });
    var index_22 = require_function2();
    Object.defineProperty(exports, "Function", { enumerable: true, get: function() {
      return index_22.Function;
    } });
    var index_23 = require_helpers2();
    Object.defineProperty(exports, "Increment", { enumerable: true, get: function() {
      return index_23.Increment;
    } });
    var index_24 = require_indexed2();
    Object.defineProperty(exports, "Index", { enumerable: true, get: function() {
      return index_24.Index;
    } });
    Object.defineProperty(exports, "IndexPropertyKeys", { enumerable: true, get: function() {
      return index_24.IndexPropertyKeys;
    } });
    Object.defineProperty(exports, "IndexFromMappedKey", { enumerable: true, get: function() {
      return index_24.IndexFromMappedKey;
    } });
    Object.defineProperty(exports, "IndexFromMappedResult", { enumerable: true, get: function() {
      return index_24.IndexFromMappedResult;
    } });
    var index_25 = require_instance_type2();
    Object.defineProperty(exports, "InstanceType", { enumerable: true, get: function() {
      return index_25.InstanceType;
    } });
    var index_26 = require_integer2();
    Object.defineProperty(exports, "Integer", { enumerable: true, get: function() {
      return index_26.Integer;
    } });
    var index_27 = require_intersect2();
    Object.defineProperty(exports, "Intersect", { enumerable: true, get: function() {
      return index_27.Intersect;
    } });
    Object.defineProperty(exports, "IntersectEvaluated", { enumerable: true, get: function() {
      return index_27.IntersectEvaluated;
    } });
    var index_28 = require_iterator2();
    Object.defineProperty(exports, "Iterator", { enumerable: true, get: function() {
      return index_28.Iterator;
    } });
    var index_29 = require_intrinsic2();
    Object.defineProperty(exports, "Intrinsic", { enumerable: true, get: function() {
      return index_29.Intrinsic;
    } });
    Object.defineProperty(exports, "IntrinsicFromMappedKey", { enumerable: true, get: function() {
      return index_29.IntrinsicFromMappedKey;
    } });
    Object.defineProperty(exports, "Capitalize", { enumerable: true, get: function() {
      return index_29.Capitalize;
    } });
    Object.defineProperty(exports, "Lowercase", { enumerable: true, get: function() {
      return index_29.Lowercase;
    } });
    Object.defineProperty(exports, "Uncapitalize", { enumerable: true, get: function() {
      return index_29.Uncapitalize;
    } });
    Object.defineProperty(exports, "Uppercase", { enumerable: true, get: function() {
      return index_29.Uppercase;
    } });
    var index_30 = require_keyof2();
    Object.defineProperty(exports, "KeyOf", { enumerable: true, get: function() {
      return index_30.KeyOf;
    } });
    Object.defineProperty(exports, "KeyOfPropertyKeys", { enumerable: true, get: function() {
      return index_30.KeyOfPropertyKeys;
    } });
    Object.defineProperty(exports, "KeyOfPattern", { enumerable: true, get: function() {
      return index_30.KeyOfPattern;
    } });
    var index_31 = require_literal2();
    Object.defineProperty(exports, "Literal", { enumerable: true, get: function() {
      return index_31.Literal;
    } });
    var index_32 = require_mapped2();
    Object.defineProperty(exports, "Mapped", { enumerable: true, get: function() {
      return index_32.Mapped;
    } });
    Object.defineProperty(exports, "MappedKey", { enumerable: true, get: function() {
      return index_32.MappedKey;
    } });
    Object.defineProperty(exports, "MappedResult", { enumerable: true, get: function() {
      return index_32.MappedResult;
    } });
    var index_33 = require_never2();
    Object.defineProperty(exports, "Never", { enumerable: true, get: function() {
      return index_33.Never;
    } });
    var index_34 = require_not2();
    Object.defineProperty(exports, "Not", { enumerable: true, get: function() {
      return index_34.Not;
    } });
    var index_35 = require_null2();
    Object.defineProperty(exports, "Null", { enumerable: true, get: function() {
      return index_35.Null;
    } });
    var index_36 = require_number2();
    Object.defineProperty(exports, "Number", { enumerable: true, get: function() {
      return index_36.Number;
    } });
    var index_37 = require_object2();
    Object.defineProperty(exports, "Object", { enumerable: true, get: function() {
      return index_37.Object;
    } });
    var index_38 = require_omit2();
    Object.defineProperty(exports, "Omit", { enumerable: true, get: function() {
      return index_38.Omit;
    } });
    var index_39 = require_optional2();
    Object.defineProperty(exports, "Optional", { enumerable: true, get: function() {
      return index_39.Optional;
    } });
    Object.defineProperty(exports, "OptionalFromMappedResult", { enumerable: true, get: function() {
      return index_39.OptionalFromMappedResult;
    } });
    var index_40 = require_parameters2();
    Object.defineProperty(exports, "Parameters", { enumerable: true, get: function() {
      return index_40.Parameters;
    } });
    var index_41 = require_partial2();
    Object.defineProperty(exports, "Partial", { enumerable: true, get: function() {
      return index_41.Partial;
    } });
    Object.defineProperty(exports, "PartialFromMappedResult", { enumerable: true, get: function() {
      return index_41.PartialFromMappedResult;
    } });
    var index_42 = require_pick2();
    Object.defineProperty(exports, "Pick", { enumerable: true, get: function() {
      return index_42.Pick;
    } });
    var index_43 = require_promise2();
    Object.defineProperty(exports, "Promise", { enumerable: true, get: function() {
      return index_43.Promise;
    } });
    var index_44 = require_readonly2();
    Object.defineProperty(exports, "Readonly", { enumerable: true, get: function() {
      return index_44.Readonly;
    } });
    Object.defineProperty(exports, "ReadonlyFromMappedResult", { enumerable: true, get: function() {
      return index_44.ReadonlyFromMappedResult;
    } });
    var index_45 = require_readonly_optional2();
    Object.defineProperty(exports, "ReadonlyOptional", { enumerable: true, get: function() {
      return index_45.ReadonlyOptional;
    } });
    var index_46 = require_record2();
    Object.defineProperty(exports, "Record", { enumerable: true, get: function() {
      return index_46.Record;
    } });
    var index_47 = require_recursive2();
    Object.defineProperty(exports, "Recursive", { enumerable: true, get: function() {
      return index_47.Recursive;
    } });
    var index_48 = require_ref2();
    Object.defineProperty(exports, "Ref", { enumerable: true, get: function() {
      return index_48.Ref;
    } });
    var index_49 = require_regexp2();
    Object.defineProperty(exports, "RegExp", { enumerable: true, get: function() {
      return index_49.RegExp;
    } });
    var index_50 = require_required2();
    Object.defineProperty(exports, "Required", { enumerable: true, get: function() {
      return index_50.Required;
    } });
    var index_51 = require_rest2();
    Object.defineProperty(exports, "Rest", { enumerable: true, get: function() {
      return index_51.Rest;
    } });
    var index_52 = require_return_type2();
    Object.defineProperty(exports, "ReturnType", { enumerable: true, get: function() {
      return index_52.ReturnType;
    } });
    var index_53 = require_strict2();
    Object.defineProperty(exports, "Strict", { enumerable: true, get: function() {
      return index_53.Strict;
    } });
    var index_54 = require_string2();
    Object.defineProperty(exports, "String", { enumerable: true, get: function() {
      return index_54.String;
    } });
    var index_55 = require_symbol2();
    Object.defineProperty(exports, "Symbol", { enumerable: true, get: function() {
      return index_55.Symbol;
    } });
    var index_56 = require_template_literal2();
    Object.defineProperty(exports, "TemplateLiteral", { enumerable: true, get: function() {
      return index_56.TemplateLiteral;
    } });
    Object.defineProperty(exports, "IsTemplateLiteralFinite", { enumerable: true, get: function() {
      return index_56.IsTemplateLiteralFinite;
    } });
    Object.defineProperty(exports, "IsTemplateLiteralExpressionFinite", { enumerable: true, get: function() {
      return index_56.IsTemplateLiteralExpressionFinite;
    } });
    Object.defineProperty(exports, "TemplateLiteralParse", { enumerable: true, get: function() {
      return index_56.TemplateLiteralParse;
    } });
    Object.defineProperty(exports, "TemplateLiteralParseExact", { enumerable: true, get: function() {
      return index_56.TemplateLiteralParseExact;
    } });
    Object.defineProperty(exports, "TemplateLiteralGenerate", { enumerable: true, get: function() {
      return index_56.TemplateLiteralGenerate;
    } });
    Object.defineProperty(exports, "TemplateLiteralExpressionGenerate", { enumerable: true, get: function() {
      return index_56.TemplateLiteralExpressionGenerate;
    } });
    var index_57 = require_transform3();
    Object.defineProperty(exports, "Transform", { enumerable: true, get: function() {
      return index_57.Transform;
    } });
    Object.defineProperty(exports, "TransformDecodeBuilder", { enumerable: true, get: function() {
      return index_57.TransformDecodeBuilder;
    } });
    Object.defineProperty(exports, "TransformEncodeBuilder", { enumerable: true, get: function() {
      return index_57.TransformEncodeBuilder;
    } });
    var index_58 = require_tuple2();
    Object.defineProperty(exports, "Tuple", { enumerable: true, get: function() {
      return index_58.Tuple;
    } });
    var index_59 = require_uint8array2();
    Object.defineProperty(exports, "Uint8Array", { enumerable: true, get: function() {
      return index_59.Uint8Array;
    } });
    var index_60 = require_undefined2();
    Object.defineProperty(exports, "Undefined", { enumerable: true, get: function() {
      return index_60.Undefined;
    } });
    var index_61 = require_union2();
    Object.defineProperty(exports, "Union", { enumerable: true, get: function() {
      return index_61.Union;
    } });
    Object.defineProperty(exports, "UnionEvaluated", { enumerable: true, get: function() {
      return index_61.UnionEvaluated;
    } });
    var index_62 = require_unknown2();
    Object.defineProperty(exports, "Unknown", { enumerable: true, get: function() {
      return index_62.Unknown;
    } });
    var index_63 = require_unsafe2();
    Object.defineProperty(exports, "Unsafe", { enumerable: true, get: function() {
      return index_63.Unsafe;
    } });
    var index_64 = require_void2();
    Object.defineProperty(exports, "Void", { enumerable: true, get: function() {
      return index_64.Void;
    } });
    var index_65 = require_type5();
    Object.defineProperty(exports, "Type", { enumerable: true, get: function() {
      return index_65.Type;
    } });
    Object.defineProperty(exports, "JsonTypeBuilder", { enumerable: true, get: function() {
      return index_65.JsonTypeBuilder;
    } });
    Object.defineProperty(exports, "JavaScriptTypeBuilder", { enumerable: true, get: function() {
      return index_65.JavaScriptTypeBuilder;
    } });
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/compiler/compiler.js
var require_compiler = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/compiler/compiler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeCompiler = exports.Policy = exports.TypeCompilerTypeGuardError = exports.TypeCompilerUnknownTypeError = exports.TypeCheck = void 0;
    var index_1 = require_transform();
    var index_2 = require_errors2();
    var index_3 = require_system2();
    var index_4 = require_error2();
    var index_5 = require_deref2();
    var index_6 = require_hash2();
    var index_7 = require_symbols2();
    var index_8 = require_registry();
    var index_9 = require_keyof2();
    var extends_undefined_1 = require_extends_undefined();
    var index_10 = require_never2();
    var index_11 = require_guard2();
    var type_1 = require_type3();
    var TypeCheck = class {
      static {
        __name(this, "TypeCheck");
      }
      constructor(schema, references, checkFunc, code) {
        this.schema = schema;
        this.references = references;
        this.checkFunc = checkFunc;
        this.code = code;
        this.hasTransform = (0, index_1.HasTransform)(schema, references);
      }
      /** Returns the generated assertion code used to validate this type. */
      Code() {
        return this.code;
      }
      /** Returns an iterator for each error in this value. */
      Errors(value) {
        return (0, index_2.Errors)(this.schema, this.references, value);
      }
      /** Returns true if the value matches the compiled type. */
      Check(value) {
        return this.checkFunc(value);
      }
      /** Decodes a value or throws if error */
      Decode(value) {
        if (!this.checkFunc(value))
          throw new index_1.TransformDecodeCheckError(this.schema, value, this.Errors(value).First());
        return this.hasTransform ? (0, index_1.TransformDecode)(this.schema, this.references, value) : value;
      }
      /** Encodes a value or throws if error */
      Encode(value) {
        const encoded = this.hasTransform ? (0, index_1.TransformEncode)(this.schema, this.references, value) : value;
        if (!this.checkFunc(encoded))
          throw new index_1.TransformEncodeCheckError(this.schema, value, this.Errors(value).First());
        return encoded;
      }
    };
    exports.TypeCheck = TypeCheck;
    var Character;
    (function(Character2) {
      function DollarSign(code) {
        return code === 36;
      }
      __name(DollarSign, "DollarSign");
      Character2.DollarSign = DollarSign;
      function IsUnderscore(code) {
        return code === 95;
      }
      __name(IsUnderscore, "IsUnderscore");
      Character2.IsUnderscore = IsUnderscore;
      function IsAlpha(code) {
        return code >= 65 && code <= 90 || code >= 97 && code <= 122;
      }
      __name(IsAlpha, "IsAlpha");
      Character2.IsAlpha = IsAlpha;
      function IsNumeric(code) {
        return code >= 48 && code <= 57;
      }
      __name(IsNumeric, "IsNumeric");
      Character2.IsNumeric = IsNumeric;
    })(Character || (Character = {}));
    var MemberExpression;
    (function(MemberExpression2) {
      function IsFirstCharacterNumeric(value) {
        if (value.length === 0)
          return false;
        return Character.IsNumeric(value.charCodeAt(0));
      }
      __name(IsFirstCharacterNumeric, "IsFirstCharacterNumeric");
      function IsAccessor(value) {
        if (IsFirstCharacterNumeric(value))
          return false;
        for (let i = 0; i < value.length; i++) {
          const code = value.charCodeAt(i);
          const check = Character.IsAlpha(code) || Character.IsNumeric(code) || Character.DollarSign(code) || Character.IsUnderscore(code);
          if (!check)
            return false;
        }
        return true;
      }
      __name(IsAccessor, "IsAccessor");
      function EscapeHyphen(key) {
        return key.replace(/'/g, "\\'");
      }
      __name(EscapeHyphen, "EscapeHyphen");
      function Encode(object, key) {
        return IsAccessor(key) ? `${object}.${key}` : `${object}['${EscapeHyphen(key)}']`;
      }
      __name(Encode, "Encode");
      MemberExpression2.Encode = Encode;
    })(MemberExpression || (MemberExpression = {}));
    var Identifier;
    (function(Identifier2) {
      function Encode($id) {
        const buffer = [];
        for (let i = 0; i < $id.length; i++) {
          const code = $id.charCodeAt(i);
          if (Character.IsNumeric(code) || Character.IsAlpha(code)) {
            buffer.push($id.charAt(i));
          } else {
            buffer.push(`_${code}_`);
          }
        }
        return buffer.join("").replace(/__/g, "_");
      }
      __name(Encode, "Encode");
      Identifier2.Encode = Encode;
    })(Identifier || (Identifier = {}));
    var LiteralString;
    (function(LiteralString2) {
      function Escape(content) {
        return content.replace(/'/g, "\\'");
      }
      __name(Escape, "Escape");
      LiteralString2.Escape = Escape;
    })(LiteralString || (LiteralString = {}));
    var TypeCompilerUnknownTypeError = class extends index_4.TypeBoxError {
      static {
        __name(this, "TypeCompilerUnknownTypeError");
      }
      constructor(schema) {
        super("Unknown type");
        this.schema = schema;
      }
    };
    exports.TypeCompilerUnknownTypeError = TypeCompilerUnknownTypeError;
    var TypeCompilerTypeGuardError = class extends index_4.TypeBoxError {
      static {
        __name(this, "TypeCompilerTypeGuardError");
      }
      constructor(schema) {
        super("Preflight validation check failed to guard for the given schema");
        this.schema = schema;
      }
    };
    exports.TypeCompilerTypeGuardError = TypeCompilerTypeGuardError;
    var Policy;
    (function(Policy2) {
      function IsExactOptionalProperty(value, key, expression) {
        return index_3.TypeSystemPolicy.ExactOptionalPropertyTypes ? `('${key}' in ${value} ? ${expression} : true)` : `(${MemberExpression.Encode(value, key)} !== undefined ? ${expression} : true)`;
      }
      __name(IsExactOptionalProperty, "IsExactOptionalProperty");
      Policy2.IsExactOptionalProperty = IsExactOptionalProperty;
      function IsObjectLike(value) {
        return !index_3.TypeSystemPolicy.AllowArrayObject ? `(typeof ${value} === 'object' && ${value} !== null && !Array.isArray(${value}))` : `(typeof ${value} === 'object' && ${value} !== null)`;
      }
      __name(IsObjectLike, "IsObjectLike");
      Policy2.IsObjectLike = IsObjectLike;
      function IsRecordLike(value) {
        return !index_3.TypeSystemPolicy.AllowArrayObject ? `(typeof ${value} === 'object' && ${value} !== null && !Array.isArray(${value}) && !(${value} instanceof Date) && !(${value} instanceof Uint8Array))` : `(typeof ${value} === 'object' && ${value} !== null && !(${value} instanceof Date) && !(${value} instanceof Uint8Array))`;
      }
      __name(IsRecordLike, "IsRecordLike");
      Policy2.IsRecordLike = IsRecordLike;
      function IsNumberLike(value) {
        return !index_3.TypeSystemPolicy.AllowNaN ? `(typeof ${value} === 'number' && Number.isFinite(${value}))` : `typeof ${value} === 'number'`;
      }
      __name(IsNumberLike, "IsNumberLike");
      Policy2.IsNumberLike = IsNumberLike;
      function IsVoidLike(value) {
        return index_3.TypeSystemPolicy.AllowNullVoid ? `(${value} === undefined || ${value} === null)` : `${value} === undefined`;
      }
      __name(IsVoidLike, "IsVoidLike");
      Policy2.IsVoidLike = IsVoidLike;
    })(Policy || (exports.Policy = Policy = {}));
    var TypeCompiler;
    (function(TypeCompiler2) {
      function IsAnyOrUnknown(schema) {
        return schema[index_7.Kind] === "Any" || schema[index_7.Kind] === "Unknown";
      }
      __name(IsAnyOrUnknown, "IsAnyOrUnknown");
      function* FromAny(schema, references, value) {
        yield "true";
      }
      __name(FromAny, "FromAny");
      function* FromArray(schema, references, value) {
        yield `Array.isArray(${value})`;
        const [parameter, accumulator] = [CreateParameter("value", "any"), CreateParameter("acc", "number")];
        if ((0, index_11.IsNumber)(schema.maxItems))
          yield `${value}.length <= ${schema.maxItems}`;
        if ((0, index_11.IsNumber)(schema.minItems))
          yield `${value}.length >= ${schema.minItems}`;
        const elementExpression = CreateExpression(schema.items, references, "value");
        yield `${value}.every((${parameter}) => ${elementExpression})`;
        if ((0, type_1.IsSchema)(schema.contains) || (0, index_11.IsNumber)(schema.minContains) || (0, index_11.IsNumber)(schema.maxContains)) {
          const containsSchema = (0, type_1.IsSchema)(schema.contains) ? schema.contains : (0, index_10.Never)();
          const checkExpression = CreateExpression(containsSchema, references, "value");
          const checkMinContains = (0, index_11.IsNumber)(schema.minContains) ? [`(count >= ${schema.minContains})`] : [];
          const checkMaxContains = (0, index_11.IsNumber)(schema.maxContains) ? [`(count <= ${schema.maxContains})`] : [];
          const checkCount = `const count = value.reduce((${accumulator}, ${parameter}) => ${checkExpression} ? acc + 1 : acc, 0)`;
          const check = [`(count > 0)`, ...checkMinContains, ...checkMaxContains].join(" && ");
          yield `((${parameter}) => { ${checkCount}; return ${check}})(${value})`;
        }
        if (schema.uniqueItems === true) {
          const check = `const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true`;
          const block = `const set = new Set(); for(const element of value) { ${check} }`;
          yield `((${parameter}) => { ${block} )(${value})`;
        }
      }
      __name(FromArray, "FromArray");
      function* FromAsyncIterator(schema, references, value) {
        yield `(typeof value === 'object' && Symbol.asyncIterator in ${value})`;
      }
      __name(FromAsyncIterator, "FromAsyncIterator");
      function* FromBigInt(schema, references, value) {
        yield `(typeof ${value} === 'bigint')`;
        if ((0, index_11.IsBigInt)(schema.exclusiveMaximum))
          yield `${value} < BigInt(${schema.exclusiveMaximum})`;
        if ((0, index_11.IsBigInt)(schema.exclusiveMinimum))
          yield `${value} > BigInt(${schema.exclusiveMinimum})`;
        if ((0, index_11.IsBigInt)(schema.maximum))
          yield `${value} <= BigInt(${schema.maximum})`;
        if ((0, index_11.IsBigInt)(schema.minimum))
          yield `${value} >= BigInt(${schema.minimum})`;
        if ((0, index_11.IsBigInt)(schema.multipleOf))
          yield `(${value} % BigInt(${schema.multipleOf})) === 0`;
      }
      __name(FromBigInt, "FromBigInt");
      function* FromBoolean(schema, references, value) {
        yield `(typeof ${value} === 'boolean')`;
      }
      __name(FromBoolean, "FromBoolean");
      function* FromConstructor(schema, references, value) {
        yield* Visit(schema.returns, references, `${value}.prototype`);
      }
      __name(FromConstructor, "FromConstructor");
      function* FromDate(schema, references, value) {
        yield `(${value} instanceof Date) && Number.isFinite(${value}.getTime())`;
        if ((0, index_11.IsNumber)(schema.exclusiveMaximumTimestamp))
          yield `${value}.getTime() < ${schema.exclusiveMaximumTimestamp}`;
        if ((0, index_11.IsNumber)(schema.exclusiveMinimumTimestamp))
          yield `${value}.getTime() > ${schema.exclusiveMinimumTimestamp}`;
        if ((0, index_11.IsNumber)(schema.maximumTimestamp))
          yield `${value}.getTime() <= ${schema.maximumTimestamp}`;
        if ((0, index_11.IsNumber)(schema.minimumTimestamp))
          yield `${value}.getTime() >= ${schema.minimumTimestamp}`;
        if ((0, index_11.IsNumber)(schema.multipleOfTimestamp))
          yield `(${value}.getTime() % ${schema.multipleOfTimestamp}) === 0`;
      }
      __name(FromDate, "FromDate");
      function* FromFunction(schema, references, value) {
        yield `(typeof ${value} === 'function')`;
      }
      __name(FromFunction, "FromFunction");
      function* FromInteger(schema, references, value) {
        yield `(typeof ${value} === 'number' && Number.isInteger(${value}))`;
        if ((0, index_11.IsNumber)(schema.exclusiveMaximum))
          yield `${value} < ${schema.exclusiveMaximum}`;
        if ((0, index_11.IsNumber)(schema.exclusiveMinimum))
          yield `${value} > ${schema.exclusiveMinimum}`;
        if ((0, index_11.IsNumber)(schema.maximum))
          yield `${value} <= ${schema.maximum}`;
        if ((0, index_11.IsNumber)(schema.minimum))
          yield `${value} >= ${schema.minimum}`;
        if ((0, index_11.IsNumber)(schema.multipleOf))
          yield `(${value} % ${schema.multipleOf}) === 0`;
      }
      __name(FromInteger, "FromInteger");
      function* FromIntersect(schema, references, value) {
        const check1 = schema.allOf.map((schema2) => CreateExpression(schema2, references, value)).join(" && ");
        if (schema.unevaluatedProperties === false) {
          const keyCheck = CreateVariable(`${new RegExp((0, index_9.KeyOfPattern)(schema))};`);
          const check2 = `Object.getOwnPropertyNames(${value}).every(key => ${keyCheck}.test(key))`;
          yield `(${check1} && ${check2})`;
        } else if ((0, type_1.IsSchema)(schema.unevaluatedProperties)) {
          const keyCheck = CreateVariable(`${new RegExp((0, index_9.KeyOfPattern)(schema))};`);
          const check2 = `Object.getOwnPropertyNames(${value}).every(key => ${keyCheck}.test(key) || ${CreateExpression(schema.unevaluatedProperties, references, `${value}[key]`)})`;
          yield `(${check1} && ${check2})`;
        } else {
          yield `(${check1})`;
        }
      }
      __name(FromIntersect, "FromIntersect");
      function* FromIterator(schema, references, value) {
        yield `(typeof value === 'object' && Symbol.iterator in ${value})`;
      }
      __name(FromIterator, "FromIterator");
      function* FromLiteral(schema, references, value) {
        if (typeof schema.const === "number" || typeof schema.const === "boolean") {
          yield `(${value} === ${schema.const})`;
        } else {
          yield `(${value} === '${LiteralString.Escape(schema.const)}')`;
        }
      }
      __name(FromLiteral, "FromLiteral");
      function* FromNever(schema, references, value) {
        yield `false`;
      }
      __name(FromNever, "FromNever");
      function* FromNot(schema, references, value) {
        const expression = CreateExpression(schema.not, references, value);
        yield `(!${expression})`;
      }
      __name(FromNot, "FromNot");
      function* FromNull(schema, references, value) {
        yield `(${value} === null)`;
      }
      __name(FromNull, "FromNull");
      function* FromNumber(schema, references, value) {
        yield Policy.IsNumberLike(value);
        if ((0, index_11.IsNumber)(schema.exclusiveMaximum))
          yield `${value} < ${schema.exclusiveMaximum}`;
        if ((0, index_11.IsNumber)(schema.exclusiveMinimum))
          yield `${value} > ${schema.exclusiveMinimum}`;
        if ((0, index_11.IsNumber)(schema.maximum))
          yield `${value} <= ${schema.maximum}`;
        if ((0, index_11.IsNumber)(schema.minimum))
          yield `${value} >= ${schema.minimum}`;
        if ((0, index_11.IsNumber)(schema.multipleOf))
          yield `(${value} % ${schema.multipleOf}) === 0`;
      }
      __name(FromNumber, "FromNumber");
      function* FromObject(schema, references, value) {
        yield Policy.IsObjectLike(value);
        if ((0, index_11.IsNumber)(schema.minProperties))
          yield `Object.getOwnPropertyNames(${value}).length >= ${schema.minProperties}`;
        if ((0, index_11.IsNumber)(schema.maxProperties))
          yield `Object.getOwnPropertyNames(${value}).length <= ${schema.maxProperties}`;
        const knownKeys = Object.getOwnPropertyNames(schema.properties);
        for (const knownKey of knownKeys) {
          const memberExpression = MemberExpression.Encode(value, knownKey);
          const property = schema.properties[knownKey];
          if (schema.required && schema.required.includes(knownKey)) {
            yield* Visit(property, references, memberExpression);
            if ((0, extends_undefined_1.ExtendsUndefinedCheck)(property) || IsAnyOrUnknown(property))
              yield `('${knownKey}' in ${value})`;
          } else {
            const expression = CreateExpression(property, references, memberExpression);
            yield Policy.IsExactOptionalProperty(value, knownKey, expression);
          }
        }
        if (schema.additionalProperties === false) {
          if (schema.required && schema.required.length === knownKeys.length) {
            yield `Object.getOwnPropertyNames(${value}).length === ${knownKeys.length}`;
          } else {
            const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
            yield `Object.getOwnPropertyNames(${value}).every(key => ${keys}.includes(key))`;
          }
        }
        if (typeof schema.additionalProperties === "object") {
          const expression = CreateExpression(schema.additionalProperties, references, `${value}[key]`);
          const keys = `[${knownKeys.map((key) => `'${key}'`).join(", ")}]`;
          yield `(Object.getOwnPropertyNames(${value}).every(key => ${keys}.includes(key) || ${expression}))`;
        }
      }
      __name(FromObject, "FromObject");
      function* FromPromise(schema, references, value) {
        yield `(typeof value === 'object' && typeof ${value}.then === 'function')`;
      }
      __name(FromPromise, "FromPromise");
      function* FromRecord(schema, references, value) {
        yield Policy.IsRecordLike(value);
        if ((0, index_11.IsNumber)(schema.minProperties))
          yield `Object.getOwnPropertyNames(${value}).length >= ${schema.minProperties}`;
        if ((0, index_11.IsNumber)(schema.maxProperties))
          yield `Object.getOwnPropertyNames(${value}).length <= ${schema.maxProperties}`;
        const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
        const variable = CreateVariable(`${new RegExp(patternKey)}`);
        const check1 = CreateExpression(patternSchema, references, "value");
        const check2 = (0, type_1.IsSchema)(schema.additionalProperties) ? CreateExpression(schema.additionalProperties, references, value) : schema.additionalProperties === false ? "false" : "true";
        const expression = `(${variable}.test(key) ? ${check1} : ${check2})`;
        yield `(Object.entries(${value}).every(([key, value]) => ${expression}))`;
      }
      __name(FromRecord, "FromRecord");
      function* FromRef(schema, references, value) {
        const target = (0, index_5.Deref)(schema, references);
        if (state.functions.has(schema.$ref))
          return yield `${CreateFunctionName(schema.$ref)}(${value})`;
        yield* Visit(target, references, value);
      }
      __name(FromRef, "FromRef");
      function* FromRegExp(schema, references, value) {
        const variable = CreateVariable(`${new RegExp(schema.source, schema.flags)};`);
        yield `(typeof ${value} === 'string')`;
        yield `${variable}.test(${value})`;
      }
      __name(FromRegExp, "FromRegExp");
      function* FromString(schema, references, value) {
        yield `(typeof ${value} === 'string')`;
        if ((0, index_11.IsNumber)(schema.maxLength))
          yield `${value}.length <= ${schema.maxLength}`;
        if ((0, index_11.IsNumber)(schema.minLength))
          yield `${value}.length >= ${schema.minLength}`;
        if (schema.pattern !== void 0) {
          const variable = CreateVariable(`${new RegExp(schema.pattern)};`);
          yield `${variable}.test(${value})`;
        }
        if (schema.format !== void 0) {
          yield `format('${schema.format}', ${value})`;
        }
      }
      __name(FromString, "FromString");
      function* FromSymbol(schema, references, value) {
        yield `(typeof ${value} === 'symbol')`;
      }
      __name(FromSymbol, "FromSymbol");
      function* FromTemplateLiteral(schema, references, value) {
        yield `(typeof ${value} === 'string')`;
        const variable = CreateVariable(`${new RegExp(schema.pattern)};`);
        yield `${variable}.test(${value})`;
      }
      __name(FromTemplateLiteral, "FromTemplateLiteral");
      function* FromThis(schema, references, value) {
        yield `${CreateFunctionName(schema.$ref)}(${value})`;
      }
      __name(FromThis, "FromThis");
      function* FromTuple(schema, references, value) {
        yield `Array.isArray(${value})`;
        if (schema.items === void 0)
          return yield `${value}.length === 0`;
        yield `(${value}.length === ${schema.maxItems})`;
        for (let i = 0; i < schema.items.length; i++) {
          const expression = CreateExpression(schema.items[i], references, `${value}[${i}]`);
          yield `${expression}`;
        }
      }
      __name(FromTuple, "FromTuple");
      function* FromUndefined(schema, references, value) {
        yield `${value} === undefined`;
      }
      __name(FromUndefined, "FromUndefined");
      function* FromUnion(schema, references, value) {
        const expressions = schema.anyOf.map((schema2) => CreateExpression(schema2, references, value));
        yield `(${expressions.join(" || ")})`;
      }
      __name(FromUnion, "FromUnion");
      function* FromUint8Array(schema, references, value) {
        yield `${value} instanceof Uint8Array`;
        if ((0, index_11.IsNumber)(schema.maxByteLength))
          yield `(${value}.length <= ${schema.maxByteLength})`;
        if ((0, index_11.IsNumber)(schema.minByteLength))
          yield `(${value}.length >= ${schema.minByteLength})`;
      }
      __name(FromUint8Array, "FromUint8Array");
      function* FromUnknown(schema, references, value) {
        yield "true";
      }
      __name(FromUnknown, "FromUnknown");
      function* FromVoid(schema, references, value) {
        yield Policy.IsVoidLike(value);
      }
      __name(FromVoid, "FromVoid");
      function* FromKind(schema, references, value) {
        const instance = state.instances.size;
        state.instances.set(instance, schema);
        yield `kind('${schema[index_7.Kind]}', ${instance}, ${value})`;
      }
      __name(FromKind, "FromKind");
      function* Visit(schema, references, value, useHoisting = true) {
        const references_ = (0, index_11.IsString)(schema.$id) ? [...references, schema] : references;
        const schema_ = schema;
        if (useHoisting && (0, index_11.IsString)(schema.$id)) {
          const functionName = CreateFunctionName(schema.$id);
          if (state.functions.has(functionName)) {
            return yield `${functionName}(${value})`;
          } else {
            const functionCode = CreateFunction(functionName, schema, references, "value", false);
            state.functions.set(functionName, functionCode);
            return yield `${functionName}(${value})`;
          }
        }
        switch (schema_[index_7.Kind]) {
          case "Any":
            return yield* FromAny(schema_, references_, value);
          case "Array":
            return yield* FromArray(schema_, references_, value);
          case "AsyncIterator":
            return yield* FromAsyncIterator(schema_, references_, value);
          case "BigInt":
            return yield* FromBigInt(schema_, references_, value);
          case "Boolean":
            return yield* FromBoolean(schema_, references_, value);
          case "Constructor":
            return yield* FromConstructor(schema_, references_, value);
          case "Date":
            return yield* FromDate(schema_, references_, value);
          case "Function":
            return yield* FromFunction(schema_, references_, value);
          case "Integer":
            return yield* FromInteger(schema_, references_, value);
          case "Intersect":
            return yield* FromIntersect(schema_, references_, value);
          case "Iterator":
            return yield* FromIterator(schema_, references_, value);
          case "Literal":
            return yield* FromLiteral(schema_, references_, value);
          case "Never":
            return yield* FromNever(schema_, references_, value);
          case "Not":
            return yield* FromNot(schema_, references_, value);
          case "Null":
            return yield* FromNull(schema_, references_, value);
          case "Number":
            return yield* FromNumber(schema_, references_, value);
          case "Object":
            return yield* FromObject(schema_, references_, value);
          case "Promise":
            return yield* FromPromise(schema_, references_, value);
          case "Record":
            return yield* FromRecord(schema_, references_, value);
          case "Ref":
            return yield* FromRef(schema_, references_, value);
          case "RegExp":
            return yield* FromRegExp(schema_, references_, value);
          case "String":
            return yield* FromString(schema_, references_, value);
          case "Symbol":
            return yield* FromSymbol(schema_, references_, value);
          case "TemplateLiteral":
            return yield* FromTemplateLiteral(schema_, references_, value);
          case "This":
            return yield* FromThis(schema_, references_, value);
          case "Tuple":
            return yield* FromTuple(schema_, references_, value);
          case "Undefined":
            return yield* FromUndefined(schema_, references_, value);
          case "Union":
            return yield* FromUnion(schema_, references_, value);
          case "Uint8Array":
            return yield* FromUint8Array(schema_, references_, value);
          case "Unknown":
            return yield* FromUnknown(schema_, references_, value);
          case "Void":
            return yield* FromVoid(schema_, references_, value);
          default:
            if (!index_8.TypeRegistry.Has(schema_[index_7.Kind]))
              throw new TypeCompilerUnknownTypeError(schema);
            return yield* FromKind(schema_, references_, value);
        }
      }
      __name(Visit, "Visit");
      const state = {
        language: "javascript",
        // target language
        functions: /* @__PURE__ */ new Map(),
        // local functions
        variables: /* @__PURE__ */ new Map(),
        // local variables
        instances: /* @__PURE__ */ new Map()
        // exterior kind instances
      };
      function CreateExpression(schema, references, value, useHoisting = true) {
        return `(${[...Visit(schema, references, value, useHoisting)].join(" && ")})`;
      }
      __name(CreateExpression, "CreateExpression");
      function CreateFunctionName($id) {
        return `check_${Identifier.Encode($id)}`;
      }
      __name(CreateFunctionName, "CreateFunctionName");
      function CreateVariable(expression) {
        const variableName = `local_${state.variables.size}`;
        state.variables.set(variableName, `const ${variableName} = ${expression}`);
        return variableName;
      }
      __name(CreateVariable, "CreateVariable");
      function CreateFunction(name, schema, references, value, useHoisting = true) {
        const [newline, pad] = ["\n", (length) => "".padStart(length, " ")];
        const parameter = CreateParameter("value", "any");
        const returns = CreateReturns("boolean");
        const expression = [...Visit(schema, references, value, useHoisting)].map((expression2) => `${pad(4)}${expression2}`).join(` &&${newline}`);
        return `function ${name}(${parameter})${returns} {${newline}${pad(2)}return (${newline}${expression}${newline}${pad(2)})
}`;
      }
      __name(CreateFunction, "CreateFunction");
      function CreateParameter(name, type) {
        const annotation = state.language === "typescript" ? `: ${type}` : "";
        return `${name}${annotation}`;
      }
      __name(CreateParameter, "CreateParameter");
      function CreateReturns(type) {
        return state.language === "typescript" ? `: ${type}` : "";
      }
      __name(CreateReturns, "CreateReturns");
      function Build(schema, references, options) {
        const functionCode = CreateFunction("check", schema, references, "value");
        const parameter = CreateParameter("value", "any");
        const returns = CreateReturns("boolean");
        const functions = [...state.functions.values()];
        const variables = [...state.variables.values()];
        const checkFunction = (0, index_11.IsString)(schema.$id) ? `return function check(${parameter})${returns} {
  return ${CreateFunctionName(schema.$id)}(value)
}` : `return ${functionCode}`;
        return [...variables, ...functions, checkFunction].join("\n");
      }
      __name(Build, "Build");
      function Code(...args) {
        const defaults = { language: "javascript" };
        const [schema, references, options] = args.length === 2 && (0, index_11.IsArray)(args[1]) ? [args[0], args[1], defaults] : args.length === 2 && !(0, index_11.IsArray)(args[1]) ? [args[0], [], args[1]] : args.length === 3 ? [args[0], args[1], args[2]] : args.length === 1 ? [args[0], [], defaults] : [null, [], defaults];
        state.language = options.language;
        state.variables.clear();
        state.functions.clear();
        state.instances.clear();
        if (!(0, type_1.IsSchema)(schema))
          throw new TypeCompilerTypeGuardError(schema);
        for (const schema2 of references)
          if (!(0, type_1.IsSchema)(schema2))
            throw new TypeCompilerTypeGuardError(schema2);
        return Build(schema, references, options);
      }
      __name(Code, "Code");
      TypeCompiler2.Code = Code;
      function Compile(schema, references = []) {
        const generatedCode = Code(schema, references, { language: "javascript" });
        const compiledFunction = globalThis.Function("kind", "format", "hash", generatedCode);
        const instances = new Map(state.instances);
        function typeRegistryFunction(kind, instance, value) {
          if (!index_8.TypeRegistry.Has(kind) || !instances.has(instance))
            return false;
          const checkFunc = index_8.TypeRegistry.Get(kind);
          const schema2 = instances.get(instance);
          return checkFunc(schema2, value);
        }
        __name(typeRegistryFunction, "typeRegistryFunction");
        function formatRegistryFunction(format, value) {
          if (!index_8.FormatRegistry.Has(format))
            return false;
          const checkFunc = index_8.FormatRegistry.Get(format);
          return checkFunc(value);
        }
        __name(formatRegistryFunction, "formatRegistryFunction");
        function hashFunction(value) {
          return (0, index_6.Hash)(value);
        }
        __name(hashFunction, "hashFunction");
        const checkFunction = compiledFunction(typeRegistryFunction, formatRegistryFunction, hashFunction);
        return new TypeCheck(schema, references, checkFunction, generatedCode);
      }
      __name(Compile, "Compile");
      TypeCompiler2.Compile = Compile;
    })(TypeCompiler || (exports.TypeCompiler = TypeCompiler = {}));
  }
});

// node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/compiler/index.js
var require_compiler2 = __commonJS({
  "node_modules/.pnpm/@sinclair+typebox@0.32.5/node_modules/@sinclair/typebox/build/require/compiler/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TypeCompilerUnknownTypeError = exports.TypeCompilerTypeGuardError = exports.TypeCheck = exports.TypeCompiler = exports.ValueErrorIterator = exports.ValueErrorType = void 0;
    var index_1 = require_errors2();
    Object.defineProperty(exports, "ValueErrorType", { enumerable: true, get: function() {
      return index_1.ValueErrorType;
    } });
    Object.defineProperty(exports, "ValueErrorIterator", { enumerable: true, get: function() {
      return index_1.ValueErrorIterator;
    } });
    var compiler_1 = require_compiler();
    Object.defineProperty(exports, "TypeCompiler", { enumerable: true, get: function() {
      return compiler_1.TypeCompiler;
    } });
    Object.defineProperty(exports, "TypeCheck", { enumerable: true, get: function() {
      return compiler_1.TypeCheck;
    } });
    Object.defineProperty(exports, "TypeCompilerTypeGuardError", { enumerable: true, get: function() {
      return compiler_1.TypeCompilerTypeGuardError;
    } });
    Object.defineProperty(exports, "TypeCompilerUnknownTypeError", { enumerable: true, get: function() {
      return compiler_1.TypeCompilerUnknownTypeError;
    } });
  }
});

// node_modules/.pnpm/cookie@0.6.0/node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/.pnpm/cookie@0.6.0/node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse;
    exports.serialize = serialize;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse(str, options) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options || {};
      var dec = opt.decode || decode;
      var index = 0;
      while (index < str.length) {
        var eqIdx = str.indexOf("=", index);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key = str.slice(index, eqIdx).trim();
        if (void 0 === obj[key]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key] = tryDecode(val, dec);
        }
        index = endIdx + 1;
      }
      return obj;
    }
    __name(parse, "parse");
    function serialize(name, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.partitioned) {
        str += "; Partitioned";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    __name(serialize, "serialize");
    function decode(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    __name(decode, "decode");
    function encode(val) {
      return encodeURIComponent(val);
    }
    __name(encode, "encode");
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    __name(isDate, "isDate");
    function tryDecode(str, decode2) {
      try {
        return decode2(str);
      } catch (e) {
        return str;
      }
    }
    __name(tryDecode, "tryDecode");
  }
});

// node_modules/.pnpm/elysia@0.8.8_@sinclair+typebox@0.32.5_typescript@5.3.3/node_modules/elysia/dist/cjs/cookie.js
var require_cookie2 = __commonJS({
  "node_modules/.pnpm/elysia@0.8.8_@sinclair+typebox@0.32.5_typescript@5.3.3/node_modules/elysia/dist/cjs/cookie.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseCookie = exports.createCookieJar = exports.Cookie = void 0;
    var cookie_1 = require_cookie();
    var utils_1 = require_utils();
    var error_1 = require_error3();
    var Cookie = class {
      static {
        __name(this, "Cookie");
      }
      constructor(_value, property = {}) {
        this._value = _value;
        this.property = property;
      }
      get() {
        return this._value;
      }
      get value() {
        return this._value;
      }
      set value(value) {
        if (typeof value === "object") {
          if (JSON.stringify(this.value) === JSON.stringify(value))
            return;
        } else if (this.value === value)
          return;
        this._value = value;
        this.sync();
      }
      add(config) {
        const updated = Object.assign(this.property, typeof config === "function" ? config(Object.assign(this.property, this.value)) : config);
        if ("value" in updated) {
          this._value = updated.value;
          delete updated.value;
        }
        this.property = updated;
        return this.sync();
      }
      set(config) {
        const updated = typeof config === "function" ? config(Object.assign(this.property, this.value)) : config;
        if ("value" in updated) {
          this._value = updated.value;
          delete updated.value;
        }
        this.property = updated;
        return this.sync();
      }
      remove(options) {
        if (this.value === void 0)
          return;
        this.set({
          domain: options?.domain,
          expires: /* @__PURE__ */ new Date(0),
          maxAge: 0,
          path: options?.path,
          sameSite: options?.sameSite,
          secure: options?.secure,
          value: ""
        });
      }
      get domain() {
        return this.property.domain;
      }
      set domain(value) {
        if (this.property.domain === value)
          return;
        this.property.domain = value;
        this.sync();
      }
      get expires() {
        return this.property.expires;
      }
      set expires(value) {
        if (this.property.expires?.getTime() === value?.getTime())
          return;
        this.property.expires = value;
        this.sync();
      }
      get httpOnly() {
        return this.property.httpOnly;
      }
      set httpOnly(value) {
        if (this.property.domain === value)
          return;
        this.property.httpOnly = value;
        this.sync();
      }
      get maxAge() {
        return this.property.maxAge;
      }
      set maxAge(value) {
        if (this.property.maxAge === value)
          return;
        this.property.maxAge = value;
        this.sync();
      }
      get path() {
        return this.property.path;
      }
      set path(value) {
        if (this.property.path === value)
          return;
        this.property.path = value;
        this.sync();
      }
      get priority() {
        return this.property.priority;
      }
      set priority(value) {
        if (this.property.priority === value)
          return;
        this.property.priority = value;
        this.sync();
      }
      get sameSite() {
        return this.property.sameSite;
      }
      set sameSite(value) {
        if (this.property.sameSite === value)
          return;
        this.property.sameSite = value;
        this.sync();
      }
      get secure() {
        return this.property.secure;
      }
      set secure(value) {
        if (this.property.secure === value)
          return;
        this.property.secure = value;
        this.sync();
      }
      toString() {
        return typeof this.value === "object" ? JSON.stringify(this.value) : this.value?.toString() ?? "";
      }
      sync() {
        if (!this.name || !this.setter)
          return this;
        if (!this.setter.cookie)
          this.setter.cookie = {
            [this.name]: Object.assign(this.property, {
              value: this.toString()
            })
          };
        else
          this.setter.cookie[this.name] = Object.assign(this.property, {
            value: this.toString()
          });
        return this;
      }
    };
    exports.Cookie = Cookie;
    var createCookieJar = /* @__PURE__ */ __name((initial, set, properties) => new Proxy(initial, {
      get(target, key) {
        if (key in target)
          return target[key];
        const cookie = new Cookie(void 0, properties ? { ...properties } : void 0);
        cookie.setter = set;
        cookie.name = key;
        return cookie;
      },
      set(target, key, value) {
        if (!(value instanceof Cookie))
          return false;
        if (!set.cookie)
          set.cookie = {};
        value.setter = set;
        value.name = key;
        value.sync();
        target[key] = value;
        return true;
      }
    }), "createCookieJar");
    exports.createCookieJar = createCookieJar;
    var parseCookie = /* @__PURE__ */ __name(async (set, cookieString, { secret, sign, ...properties } = {}) => {
      if (!cookieString)
        return (0, exports.createCookieJar)({}, set, properties);
      const jar = {};
      const isStringKey = typeof secret === "string";
      if (sign && sign !== true && !Array.isArray(sign))
        sign = [sign];
      const cookieKeys = Object.keys((0, cookie_1.parse)(cookieString));
      for (let i = 0; i < cookieKeys.length; i++) {
        const key = cookieKeys[i];
        let value = (0, cookie_1.parse)(cookieString)[key];
        if (sign === true || sign?.includes(key)) {
          if (!secret)
            throw new Error("No secret is provided to cookie plugin");
          if (isStringKey) {
            value = await (0, utils_1.unsignCookie)(value, secret);
            if (value === false)
              throw new error_1.InvalidCookieSignature(key);
          } else {
            let fail = true;
            for (let i2 = 0; i2 < secret.length; i2++) {
              const temp = await (0, utils_1.unsignCookie)(value, secret[i2]);
              if (temp !== false) {
                value = temp;
                fail = false;
                break;
              }
            }
            if (fail)
              throw new error_1.InvalidCookieSignature(key);
          }
        }
        if (value === void 0)
          continue;
        const start = value.charCodeAt(0);
        if (start === 123 || start === 91)
          try {
            const cookie2 = new Cookie(JSON.parse(value));
            cookie2.setter = set;
            cookie2.name = key;
            jar[key] = cookie2;
            continue;
          } catch {
          }
        if ((0, utils_1.isNumericString)(value))
          value = +value;
        else if (value === "true")
          value = true;
        else if (value === "false")
          value = false;
        const cookie = new Cookie(value, properties);
        cookie.setter = set;
        cookie.name = key;
        jar[key] = cookie;
      }
      return (0, exports.createCookieJar)(jar, set);
    }, "parseCookie");
    exports.parseCookie = parseCookie;
  }
});

// node_modules/.pnpm/elysia@0.8.8_@sinclair+typebox@0.32.5_typescript@5.3.3/node_modules/elysia/dist/cjs/handler.js
var require_handler = __commonJS({
  "node_modules/.pnpm/elysia@0.8.8_@sinclair+typebox@0.32.5_typescript@5.3.3/node_modules/elysia/dist/cjs/handler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.errorToResponse = exports.mapCompactResponse = exports.mapEarlyResponse = exports.mapResponse = exports.cookieToHeader = exports.parseSetCookies = exports.isNotEmpty = void 0;
    var cookie_1 = require_cookie();
    var utils_1 = require_utils();
    var cookie_2 = require_cookie2();
    var error_1 = require_error3();
    var hasHeaderShorthand = "toJSON" in new Headers();
    var isNotEmpty = /* @__PURE__ */ __name((obj) => {
      for (const x in obj)
        return true;
      return false;
    }, "isNotEmpty");
    exports.isNotEmpty = isNotEmpty;
    var handleFile = /* @__PURE__ */ __name((response2, set) => {
      const size = response2.size;
      if (size && set && set.status !== 206 && set.status !== 304 && set.status !== 412 && set.status !== 416 || !set && size) {
        if (set) {
          if (set.headers instanceof Headers) {
            if (hasHeaderShorthand)
              set.headers = set.headers.toJSON();
            else
              for (const [key, value] of set.headers.entries())
                if (key in set.headers)
                  set.headers[key] = value;
          }
          return new Response(response2, {
            status: set.status,
            headers: Object.assign({
              "accept-ranges": "bytes",
              "content-range": `bytes 0-${size - 1}/${size}`
            }, set.headers)
          });
        }
        return new Response(response2, {
          headers: {
            "accept-ranges": "bytes",
            "content-range": `bytes 0-${size - 1}/${size}`
          }
        });
      }
      return new Response(response2);
    }, "handleFile");
    var parseSetCookies = /* @__PURE__ */ __name((headers, setCookie) => {
      if (!headers || !Array.isArray(setCookie))
        return headers;
      headers.delete("Set-Cookie");
      for (let i = 0; i < setCookie.length; i++) {
        const index = setCookie[i].indexOf("=");
        headers.append("Set-Cookie", `${setCookie[i].slice(0, index)}=${setCookie[i].slice(index + 1)}`);
      }
      return headers;
    }, "parseSetCookies");
    exports.parseSetCookies = parseSetCookies;
    var cookieToHeader = /* @__PURE__ */ __name((cookies) => {
      if (!cookies || typeof cookies !== "object" || !(0, exports.isNotEmpty)(cookies))
        return void 0;
      const set = [];
      for (const [key, property] of Object.entries(cookies)) {
        if (!key || !property)
          continue;
        if (Array.isArray(property.value)) {
          for (let i = 0; i < property.value.length; i++) {
            let value = property.value[i];
            if (value === void 0 || value === null)
              continue;
            if (typeof value === "object")
              value = JSON.stringify(value);
            set.push((0, cookie_1.serialize)(key, value, property));
          }
        } else {
          let value = property.value;
          if (value === void 0 || value === null)
            continue;
          if (typeof value === "object")
            value = JSON.stringify(value);
          set.push((0, cookie_1.serialize)(key, property.value, property));
        }
      }
      if (set.length === 0)
        return void 0;
      if (set.length === 1)
        return set[0];
      return set;
    }, "cookieToHeader");
    exports.cookieToHeader = cookieToHeader;
    var mapResponse = /* @__PURE__ */ __name((response2, set) => {
      if (response2?.[response2.$passthrough])
        response2 = response2[response2.$passthrough];
      if (response2?.[error_1.ELYSIA_RESPONSE]) {
        set.status = response2[error_1.ELYSIA_RESPONSE];
        response2 = response2.response;
      }
      if ((0, exports.isNotEmpty)(set.headers) || set.status !== 200 || set.redirect || set.cookie) {
        if (typeof set.status === "string")
          set.status = utils_1.StatusMap[set.status];
        if (set.redirect) {
          set.headers.Location = set.redirect;
          if (!set.status || set.status < 300 || set.status >= 400)
            set.status = 302;
        }
        if (set.cookie && (0, exports.isNotEmpty)(set.cookie))
          set.headers["Set-Cookie"] = (0, exports.cookieToHeader)(set.cookie);
        if (set.headers["Set-Cookie"] && Array.isArray(set.headers["Set-Cookie"]))
          set.headers = (0, exports.parseSetCookies)(new Headers(set.headers), set.headers["Set-Cookie"]);
        switch (response2?.constructor?.name) {
          case "String":
            return new Response(response2, set);
          case "Blob":
            return handleFile(response2, set);
          case "Object":
          case "Array":
            return Response.json(response2, set);
          case "ReadableStream":
            if (!set.headers["content-type"]?.startsWith("text/event-stream"))
              set.headers["content-type"] = "text/event-stream; charset=utf-8";
            return new Response(response2, set);
          case void 0:
            if (!response2)
              return new Response("", set);
            return Response.json(response2, set);
          case "Response":
            const inherits = { ...set.headers };
            if (hasHeaderShorthand)
              set.headers = response2.headers.toJSON();
            else
              for (const [key, value] of response2.headers.entries())
                if (key in set.headers)
                  set.headers[key] = value;
            for (const key in inherits)
              response2.headers.append(key, inherits[key]);
            return response2;
          case "Error":
            return (0, exports.errorToResponse)(response2, set);
          case "Promise":
            return response2.then((x) => (0, exports.mapResponse)(x, set));
          case "Function":
            return (0, exports.mapResponse)(response2(), set);
          case "Number":
          case "Boolean":
            return new Response(response2.toString(), set);
          case "Cookie":
            if (response2 instanceof cookie_2.Cookie)
              return new Response(response2.value, set);
            return new Response(response2?.toString(), set);
          default:
            const r = JSON.stringify(response2);
            if (r.charCodeAt(0) === 123) {
              if (!set.headers["Content-Type"])
                set.headers["Content-Type"] = "application/json";
              return new Response(JSON.stringify(response2), set);
            }
            return new Response(r, set);
        }
      } else
        switch (response2?.constructor?.name) {
          case "String":
            return new Response(response2);
          case "Blob":
            return handleFile(response2, set);
          case "Object":
          case "Array":
            return new Response(JSON.stringify(response2), {
              headers: {
                "content-type": "application/json"
              }
            });
          case "ReadableStream":
            return new Response(response2, {
              headers: {
                "Content-Type": "text/event-stream; charset=utf-8"
              }
            });
          case void 0:
            if (!response2)
              return new Response("");
            return new Response(JSON.stringify(response2), {
              headers: {
                "content-type": "application/json"
              }
            });
          case "Response":
            return response2;
          case "Error":
            return (0, exports.errorToResponse)(response2, set);
          case "Promise":
            return response2.then((x) => {
              const r2 = (0, exports.mapCompactResponse)(x);
              if (r2 !== void 0)
                return r2;
              return new Response("");
            });
          case "Function":
            return (0, exports.mapCompactResponse)(response2());
          case "Number":
          case "Boolean":
            return new Response(response2.toString());
          case "Cookie":
            if (response2 instanceof cookie_2.Cookie)
              return new Response(response2.value, set);
            return new Response(response2?.toString(), set);
          default:
            const r = JSON.stringify(response2);
            if (r.charCodeAt(0) === 123)
              return new Response(JSON.stringify(response2), {
                headers: {
                  "Content-Type": "application/json"
                }
              });
            return new Response(r);
        }
    }, "mapResponse");
    exports.mapResponse = mapResponse;
    var mapEarlyResponse = /* @__PURE__ */ __name((response2, set) => {
      if (response2 === void 0 || response2 === null)
        return;
      if (
        // @ts-ignore
        response2?.$passthrough
      )
        response2 = response2[response2.$passthrough];
      if (response2?.[error_1.ELYSIA_RESPONSE]) {
        set.status = response2[error_1.ELYSIA_RESPONSE];
        response2 = response2.response;
      }
      if ((0, exports.isNotEmpty)(set.headers) || set.status !== 200 || set.redirect || set.cookie) {
        if (typeof set.status === "string")
          set.status = utils_1.StatusMap[set.status];
        if (set.redirect) {
          set.headers.Location = set.redirect;
          if (!set.status || set.status < 300 || set.status >= 400)
            set.status = 302;
        }
        if (set.cookie && (0, exports.isNotEmpty)(set.cookie))
          set.headers["Set-Cookie"] = (0, exports.cookieToHeader)(set.cookie);
        if (set.headers["Set-Cookie"] && Array.isArray(set.headers["Set-Cookie"]))
          set.headers = (0, exports.parseSetCookies)(new Headers(set.headers), set.headers["Set-Cookie"]);
        switch (response2?.constructor?.name) {
          case "String":
            return new Response(response2, set);
          case "Blob":
            return handleFile(response2, set);
          case "Object":
          case "Array":
            return Response.json(response2, set);
          case "ReadableStream":
            if (!set.headers["content-type"]?.startsWith("text/event-stream"))
              set.headers["content-type"] = "text/event-stream; charset=utf-8";
            return new Response(response2, set);
          case void 0:
            if (!response2)
              return;
            return Response.json(response2, set);
          case "Response":
            const inherits = Object.assign({}, set.headers);
            if (hasHeaderShorthand)
              set.headers = response2.headers.toJSON();
            else
              for (const [key, value] of response2.headers.entries())
                if (!(key in set.headers))
                  set.headers[key] = value;
            for (const key in inherits)
              response2.headers.append(key, inherits[key]);
            if (response2.status !== set.status)
              set.status = response2.status;
            return response2;
          case "Promise":
            return response2.then((x) => {
              const r2 = (0, exports.mapEarlyResponse)(x, set);
              if (r2 !== void 0)
                return r2;
              return;
            });
          case "Error":
            return (0, exports.errorToResponse)(response2, set);
          case "Function":
            return (0, exports.mapEarlyResponse)(response2(), set);
          case "Number":
          case "Boolean":
            return new Response(response2.toString(), set);
          case "Cookie":
            if (response2 instanceof cookie_2.Cookie)
              return new Response(response2.value, set);
            return new Response(response2?.toString(), set);
          default:
            const r = JSON.stringify(response2);
            if (r.charCodeAt(0) === 123) {
              if (!set.headers["Content-Type"])
                set.headers["Content-Type"] = "application/json";
              return new Response(JSON.stringify(response2), set);
            }
            return new Response(r, set);
        }
      } else
        switch (response2?.constructor?.name) {
          case "String":
            return new Response(response2);
          case "Blob":
            return handleFile(response2, set);
          case "Object":
          case "Array":
            return new Response(JSON.stringify(response2), {
              headers: {
                "content-type": "application/json"
              }
            });
          case "ReadableStream":
            return new Response(response2, {
              headers: {
                "Content-Type": "text/event-stream; charset=utf-8"
              }
            });
          case void 0:
            if (!response2)
              return new Response("");
            return new Response(JSON.stringify(response2), {
              headers: {
                "content-type": "application/json"
              }
            });
          case "Response":
            return response2;
          case "Promise":
            return response2.then((x) => {
              const r2 = (0, exports.mapEarlyResponse)(x, set);
              if (r2 !== void 0)
                return r2;
              return;
            });
          case "Error":
            return (0, exports.errorToResponse)(response2, set);
          case "Function":
            return (0, exports.mapCompactResponse)(response2());
          case "Number":
          case "Boolean":
            return new Response(response2.toString());
          case "Cookie":
            if (response2 instanceof cookie_2.Cookie)
              return new Response(response2.value, set);
            return new Response(response2?.toString(), set);
          default:
            const r = JSON.stringify(response2);
            if (r.charCodeAt(0) === 123)
              return new Response(JSON.stringify(response2), {
                headers: {
                  "Content-Type": "application/json"
                }
              });
            return new Response(r);
        }
    }, "mapEarlyResponse");
    exports.mapEarlyResponse = mapEarlyResponse;
    var mapCompactResponse = /* @__PURE__ */ __name((response2) => {
      if (
        // @ts-ignore
        response2?.$passthrough
      )
        response2 = response2[response2.$passthrough];
      if (response2?.[error_1.ELYSIA_RESPONSE])
        return (0, exports.mapResponse)(response2.response, {
          // @ts-ignore
          status: response2[error_1.ELYSIA_RESPONSE],
          headers: {}
        });
      switch (response2?.constructor?.name) {
        case "String":
          return new Response(response2);
        case "Blob":
          return handleFile(response2);
        case "Object":
        case "Array":
          return new Response(JSON.stringify(response2), {
            headers: {
              "content-type": "application/json"
            }
          });
        case "ReadableStream":
          return new Response(response2, {
            headers: {
              "Content-Type": "text/event-stream; charset=utf-8"
            }
          });
        case void 0:
          if (!response2)
            return new Response("");
          return new Response(JSON.stringify(response2), {
            headers: {
              "content-type": "application/json"
            }
          });
        case "Response":
          return response2;
        case "Error":
          return (0, exports.errorToResponse)(response2);
        case "Promise":
          return response2.then((x) => {
            const r2 = (0, exports.mapCompactResponse)(x);
            if (r2 !== void 0)
              return r2;
            return new Response("");
          });
        case "Function":
          return (0, exports.mapCompactResponse)(response2());
        case "Number":
        case "Boolean":
          return new Response(response2.toString());
        default:
          const r = JSON.stringify(response2);
          if (r.charCodeAt(0) === 123)
            return new Response(JSON.stringify(response2), {
              headers: {
                "Content-Type": "application/json"
              }
            });
          return new Response(r);
      }
    }, "mapCompactResponse");
    exports.mapCompactResponse = mapCompactResponse;
    var errorToResponse = /* @__PURE__ */ __name((error, set) => new Response(JSON.stringify({
      name: error?.name,
      message: error?.message,
      cause: error?.cause
    }), {
      status: set?.status !== 200 ? set?.status ?? 500 : 500,
      headers: set?.headers
    }), "errorToResponse");
    exports.errorToResponse = errorToResponse;
  }
});

// node_modules/.pnpm/elysia@0.8.8_@sinclair+typebox@0.32.5_typescript@5.3.3/node_modules/elysia/dist/cjs/utils.js
var require_utils = __commonJS({
  "node_modules/.pnpm/elysia@0.8.8_@sinclair+typebox@0.32.5_typescript@5.3.3/node_modules/elysia/dist/cjs/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isNumericString = exports.traceBackMacro = exports.unsignCookie = exports.signCookie = exports.StatusMap = exports.filterGlobalHook = exports.asGlobal = exports.asGlobalHook = exports.mergeLifeCycle = exports.checksum = exports.getResponseSchemaValidator = exports.getSchemaValidator = exports.mergeHook = exports.primitiveHooks = exports.mergeObjectArray = exports.mergeCookie = exports.mergeDeep = exports.replaceUrlPath = void 0;
    var typebox_1 = require_require();
    var value_1 = require_value5();
    var compiler_1 = require_compiler2();
    var handler_1 = require_handler();
    var isObject = /* @__PURE__ */ __name((item) => item && typeof item === "object" && !Array.isArray(item), "isObject");
    var replaceUrlPath = /* @__PURE__ */ __name((url, pathname) => {
      const urlObject = new URL(url);
      urlObject.pathname = pathname;
      return urlObject.toString();
    }, "replaceUrlPath");
    exports.replaceUrlPath = replaceUrlPath;
    var isClass = /* @__PURE__ */ __name((v) => typeof v === "function" && /^\s*class\s+/.test(v.toString()) || // Handle import * as Sentry from '@sentry/bun'
    // This also handle [object Date], [object Array]
    // and FFI value like [object Prisma]
    v.toString().startsWith("[object ") || // If object prototype is not pure, then probably a class-like object
    (0, handler_1.isNotEmpty)(Object.getPrototypeOf(v)), "isClass");
    var mergeDeep = /* @__PURE__ */ __name((target, source, { skipKeys } = {}) => {
      if (isObject(target) && isObject(source))
        for (const [key, value] of Object.entries(source)) {
          if (skipKeys?.includes(key))
            continue;
          if (!isObject(value)) {
            target[key] = value;
            continue;
          }
          if (!(key in target)) {
            target[key] = value;
            continue;
          }
          if (isClass(value)) {
            target[key] = value;
            continue;
          }
          target[key] = (0, exports.mergeDeep)(target[key], value);
        }
      return target;
    }, "mergeDeep");
    exports.mergeDeep = mergeDeep;
    var mergeCookie = /* @__PURE__ */ __name((target, source) => (0, exports.mergeDeep)(target, source, {
      skipKeys: ["properties"]
    }), "mergeCookie");
    exports.mergeCookie = mergeCookie;
    var mergeObjectArray = /* @__PURE__ */ __name((a, b) => {
      if (!a)
        return [];
      const array = [...Array.isArray(a) ? a : [a]];
      const checksums = [];
      for (const item of array) {
        if (item.$elysiaChecksum)
          checksums.push(item.$elysiaChecksum);
      }
      for (const item of Array.isArray(b) ? b : [b]) {
        if (!checksums.includes(item?.$elysiaChecksum)) {
          array.push(item);
        }
      }
      return array;
    }, "mergeObjectArray");
    exports.mergeObjectArray = mergeObjectArray;
    exports.primitiveHooks = [
      "start",
      "request",
      "parse",
      "transform",
      "resolve",
      "beforeHandle",
      "afterHandle",
      "onResponse",
      "mapResponse",
      "trace",
      "error",
      "stop",
      "body",
      "headers",
      "params",
      "query",
      "response",
      "type",
      "detail"
    ];
    var mergeHook = /* @__PURE__ */ __name((a, b) => {
      return {
        ...a,
        ...b,
        // Merge local hook first
        // @ts-ignore
        body: b?.body ?? a?.body,
        // @ts-ignore
        headers: b?.headers ?? a?.headers,
        // @ts-ignore
        params: b?.params ?? a?.params,
        // @ts-ignore
        query: b?.query ?? a?.query,
        // @ts-ignore
        response: b?.response ?? a?.response,
        type: a?.type || b?.type,
        detail: (0, exports.mergeDeep)(
          // @ts-ignore
          b?.detail ?? {},
          // @ts-ignore
          a?.detail ?? {}
        ),
        parse: (0, exports.mergeObjectArray)(a?.parse ?? [], b?.parse ?? []),
        transform: (0, exports.mergeObjectArray)(a?.transform ?? [], b?.transform ?? []),
        beforeHandle: (0, exports.mergeObjectArray)(a?.beforeHandle ?? [], b?.beforeHandle ?? []),
        afterHandle: (0, exports.mergeObjectArray)(a?.afterHandle ?? [], b?.afterHandle ?? []),
        onResponse: (0, exports.mergeObjectArray)(a?.onResponse ?? [], b?.onResponse ?? []),
        mapResponse: (0, exports.mergeObjectArray)(a?.mapResponse ?? [], b?.mapResponse ?? []),
        trace: (0, exports.mergeObjectArray)(a?.trace ?? [], b?.trace ?? []),
        error: (0, exports.mergeObjectArray)(a?.error ?? [], b?.error ?? [])
      };
    }, "mergeHook");
    exports.mergeHook = mergeHook;
    var getSchemaValidator = /* @__PURE__ */ __name((s, { models = {}, additionalProperties = false, dynamic = false }) => {
      if (!s)
        return;
      if (typeof s === "string" && !(s in models))
        return;
      const schema = typeof s === "string" ? models[s] : s;
      if (schema.type === "object" && "additionalProperties" in schema === false)
        schema.additionalProperties = additionalProperties;
      if (dynamic)
        return {
          schema,
          references: "",
          checkFunc: () => {
          },
          code: "",
          Check: (value) => value_1.Value.Check(schema, value),
          Errors: (value) => value_1.Value.Errors(schema, value),
          Code: () => ""
        };
      return compiler_1.TypeCompiler.Compile(schema, Object.values(models));
    }, "getSchemaValidator");
    exports.getSchemaValidator = getSchemaValidator;
    var getResponseSchemaValidator = /* @__PURE__ */ __name((s, { models = {}, additionalProperties = false, dynamic = false }) => {
      if (!s)
        return;
      if (typeof s === "string" && !(s in models))
        return;
      const maybeSchemaOrRecord = typeof s === "string" ? models[s] : s;
      const compile = /* @__PURE__ */ __name((schema, references) => {
        if (dynamic)
          return {
            schema,
            references: "",
            checkFunc: () => {
            },
            code: "",
            Check: (value) => value_1.Value.Check(schema, value),
            Errors: (value) => value_1.Value.Errors(schema, value),
            Code: () => ""
          };
        return compiler_1.TypeCompiler.Compile(schema, references);
      }, "compile");
      if (typebox_1.Kind in maybeSchemaOrRecord) {
        if ("additionalProperties" in maybeSchemaOrRecord === false)
          maybeSchemaOrRecord.additionalProperties = additionalProperties;
        return {
          200: compile(maybeSchemaOrRecord, Object.values(models))
        };
      }
      const record = {};
      Object.keys(maybeSchemaOrRecord).forEach((status) => {
        const maybeNameOrSchema = maybeSchemaOrRecord[+status];
        if (typeof maybeNameOrSchema === "string") {
          if (maybeNameOrSchema in models) {
            const schema = models[maybeNameOrSchema];
            schema.type === "object" && "additionalProperties" in schema === false;
            record[+status] = typebox_1.Kind in schema ? compile(schema, Object.values(models)) : schema;
          }
          return void 0;
        }
        if (maybeNameOrSchema.type === "object" && "additionalProperties" in maybeNameOrSchema === false)
          maybeNameOrSchema.additionalProperties = additionalProperties;
        record[+status] = typebox_1.Kind in maybeNameOrSchema ? compile(maybeNameOrSchema, Object.values(models)) : maybeNameOrSchema;
      });
      return record;
    }, "getResponseSchemaValidator");
    exports.getResponseSchemaValidator = getResponseSchemaValidator;
    var isBun = typeof Bun !== "undefined";
    var hasHash = isBun && typeof Bun.hash === "function";
    var checksum = /* @__PURE__ */ __name((s) => {
      if (hasHash)
        return Bun.hash(s);
      let h = 9;
      for (let i = 0; i < s.length; )
        h = Math.imul(h ^ s.charCodeAt(i++), 9 ** 9);
      return h = h ^ h >>> 9;
    }, "checksum");
    exports.checksum = checksum;
    var mergeLifeCycle = /* @__PURE__ */ __name((a, b, checksum2) => {
      const injectChecksum = /* @__PURE__ */ __name((x) => {
        if (checksum2 && !x.$elysiaChecksum)
          x.$elysiaChecksum = checksum2;
        return x;
      }, "injectChecksum");
      return {
        ...a,
        ...b,
        start: (0, exports.mergeObjectArray)(a.start, ("start" in b ? b.start ?? [] : []).map(injectChecksum)),
        request: (0, exports.mergeObjectArray)(a.request, ("request" in b ? b.request ?? [] : []).map(injectChecksum)),
        parse: (0, exports.mergeObjectArray)(a.parse, "parse" in b ? b?.parse ?? [] : []).map(injectChecksum),
        transform: (0, exports.mergeObjectArray)(a.transform, (b?.transform ?? []).map(injectChecksum)),
        beforeHandle: (0, exports.mergeObjectArray)(a.beforeHandle, (b?.beforeHandle ?? []).map(injectChecksum)),
        afterHandle: (0, exports.mergeObjectArray)(a.afterHandle, (b?.afterHandle ?? []).map(injectChecksum)),
        mapResponse: (0, exports.mergeObjectArray)(a.mapResponse, (b?.mapResponse ?? []).map(injectChecksum)),
        onResponse: (0, exports.mergeObjectArray)(a.onResponse, (b?.onResponse ?? []).map(injectChecksum)),
        trace: a.trace,
        error: (0, exports.mergeObjectArray)(a.error, (b?.error ?? []).map(injectChecksum)),
        stop: (0, exports.mergeObjectArray)(a.stop, ("stop" in b ? b.stop ?? [] : []).map(injectChecksum))
      };
    }, "mergeLifeCycle");
    exports.mergeLifeCycle = mergeLifeCycle;
    var asGlobalHook = /* @__PURE__ */ __name((hook, inject = true) => {
      return {
        // rest is validator
        ...hook,
        type: hook?.type,
        detail: hook?.detail,
        parse: (0, exports.asGlobal)(hook?.parse, inject),
        transform: (0, exports.asGlobal)(hook?.transform, inject),
        beforeHandle: (0, exports.asGlobal)(hook?.beforeHandle, inject),
        afterHandle: (0, exports.asGlobal)(hook?.afterHandle, inject),
        onResponse: (0, exports.asGlobal)(hook?.onResponse, inject),
        error: (0, exports.asGlobal)(hook?.error, inject)
      };
    }, "asGlobalHook");
    exports.asGlobalHook = asGlobalHook;
    var asGlobal = /* @__PURE__ */ __name((fn, inject = true) => {
      if (!fn)
        return fn;
      if (typeof fn === "function") {
        if (inject)
          fn.$elysiaHookType = "global";
        else
          fn.$elysiaHookType = void 0;
        return fn;
      }
      return fn.map((x) => {
        if (inject)
          x.$elysiaHookType = "global";
        else
          x.$elysiaHookType = void 0;
        return x;
      });
    }, "asGlobal");
    exports.asGlobal = asGlobal;
    var filterGlobal = /* @__PURE__ */ __name((fn) => {
      if (!fn)
        return fn;
      if (typeof fn === "function") {
        return fn.$elysiaHookType === "global" ? fn : void 0;
      }
      return fn.filter((x) => x.$elysiaHookType === "global");
    }, "filterGlobal");
    var filterGlobalHook = /* @__PURE__ */ __name((hook) => {
      return {
        // rest is validator
        ...hook,
        type: hook?.type,
        detail: hook?.detail,
        parse: filterGlobal(hook?.parse),
        transform: filterGlobal(hook?.transform),
        beforeHandle: filterGlobal(hook?.beforeHandle),
        afterHandle: filterGlobal(hook?.afterHandle),
        onResponse: filterGlobal(hook?.onResponse),
        error: filterGlobal(hook?.error)
      };
    }, "filterGlobalHook");
    exports.filterGlobalHook = filterGlobalHook;
    exports.StatusMap = {
      Continue: 100,
      "Switching Protocols": 101,
      Processing: 102,
      "Early Hints": 103,
      OK: 200,
      Created: 201,
      Accepted: 202,
      "Non-Authoritative Information": 203,
      "No Content": 204,
      "Reset Content": 205,
      "Partial Content": 206,
      "Multi-Status": 207,
      "Already Reported": 208,
      "Multiple Choices": 300,
      "Moved Permanently": 301,
      Found: 302,
      "See Other": 303,
      "Not Modified": 304,
      "Temporary Redirect": 307,
      "Permanent Redirect": 308,
      "Bad Request": 400,
      Unauthorized: 401,
      "Payment Required": 402,
      Forbidden: 403,
      "Not Found": 404,
      "Method Not Allowed": 405,
      "Not Acceptable": 406,
      "Proxy Authentication Required": 407,
      "Request Timeout": 408,
      Conflict: 409,
      Gone: 410,
      "Length Required": 411,
      "Precondition Failed": 412,
      "Payload Too Large": 413,
      "URI Too Long": 414,
      "Unsupported Media Type": 415,
      "Range Not Satisfiable": 416,
      "Expectation Failed": 417,
      "I'm a teapot": 418,
      "Misdirected Request": 421,
      "Unprocessable Content": 422,
      Locked: 423,
      "Failed Dependency": 424,
      "Too Early": 425,
      "Upgrade Required": 426,
      "Precondition Required": 428,
      "Too Many Requests": 429,
      "Request Header Fields Too Large": 431,
      "Unavailable For Legal Reasons": 451,
      "Internal Server Error": 500,
      "Not Implemented": 501,
      "Bad Gateway": 502,
      "Service Unavailable": 503,
      "Gateway Timeout": 504,
      "HTTP Version Not Supported": 505,
      "Variant Also Negotiates": 506,
      "Insufficient Storage": 507,
      "Loop Detected": 508,
      "Not Extended": 510,
      "Network Authentication Required": 511
    };
    var signCookie = /* @__PURE__ */ __name(async (val, secret) => {
      if (typeof val !== "string")
        throw new TypeError("Cookie value must be provided as a string.");
      if (secret === null)
        throw new TypeError("Secret key must be provided.");
      const encoder = new TextEncoder();
      const secretKey = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
      const hmacBuffer = await crypto.subtle.sign("HMAC", secretKey, encoder.encode(val));
      const hmacArray = Array.from(new Uint8Array(hmacBuffer));
      const digest = btoa(String.fromCharCode(...hmacArray));
      return `${val}.${digest.replace(/=+$/, "")}`;
    }, "signCookie");
    exports.signCookie = signCookie;
    var unsignCookie = /* @__PURE__ */ __name(async (input, secret) => {
      if (typeof input !== "string")
        throw new TypeError("Signed cookie string must be provided.");
      if (null === secret)
        throw new TypeError("Secret key must be provided.");
      const tentativeValue = input.slice(0, input.lastIndexOf("."));
      const expectedInput = await (0, exports.signCookie)(tentativeValue, secret);
      return expectedInput === input ? tentativeValue : false;
    }, "unsignCookie");
    exports.unsignCookie = unsignCookie;
    var traceBackMacro = /* @__PURE__ */ __name((extension, property, hooks = property) => {
      for (const [key, value] of Object.entries(property)) {
        if (exports.primitiveHooks.includes(key) || !(key in extension))
          continue;
        if (typeof extension[key] === "function") {
          extension[key](value);
        } else if (typeof extension[key] === "object")
          (0, exports.traceBackMacro)(extension[key], value, hooks);
      }
    }, "traceBackMacro");
    exports.traceBackMacro = traceBackMacro;
    var isNumericString = /* @__PURE__ */ __name((message) => !Number.isNaN(parseInt(message)), "isNumericString");
    exports.isNumericString = isNumericString;
  }
});

// node_modules/.pnpm/elysia@0.8.8_@sinclair+typebox@0.32.5_typescript@5.3.3/node_modules/elysia/dist/cjs/error.js
var require_error3 = __commonJS({
  "node_modules/.pnpm/elysia@0.8.8_@sinclair+typebox@0.32.5_typescript@5.3.3/node_modules/elysia/dist/cjs/error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ValidationError = exports.InvalidCookieSignature = exports.ParseError = exports.NotFoundError = exports.InternalServerError = exports.error = exports.isProduction = exports.ELYSIA_RESPONSE = exports.ERROR_CODE = void 0;
    var value_1 = require_value5();
    var utils_1 = require_utils();
    var env = typeof Bun !== "undefined" ? Bun.env : typeof process !== "undefined" ? process?.env : void 0;
    exports.ERROR_CODE = Symbol("ElysiaErrorCode");
    exports.ELYSIA_RESPONSE = Symbol("ElysiaResponse");
    exports.isProduction = (env?.NODE_ENV ?? env?.ENV) === "production";
    var error = /* @__PURE__ */ __name((code, response2) => ({
      // @ts-ignore
      [exports.ELYSIA_RESPONSE]: utils_1.StatusMap[code] ?? code,
      response: response2
    }), "error");
    exports.error = error;
    var InternalServerError = class extends Error {
      static {
        __name(this, "InternalServerError");
      }
      constructor(message) {
        super(message ?? "INTERNAL_SERVER_ERROR");
        this.code = "INTERNAL_SERVER_ERROR";
        this.status = 500;
      }
    };
    exports.InternalServerError = InternalServerError;
    var NotFoundError = class extends Error {
      static {
        __name(this, "NotFoundError");
      }
      constructor(message) {
        super(message ?? "NOT_FOUND");
        this.code = "NOT_FOUND";
        this.status = 404;
      }
    };
    exports.NotFoundError = NotFoundError;
    var ParseError = class extends Error {
      static {
        __name(this, "ParseError");
      }
      constructor(message) {
        super(message ?? "PARSE");
        this.code = "PARSE";
        this.status = 400;
      }
    };
    exports.ParseError = ParseError;
    var InvalidCookieSignature = class extends Error {
      static {
        __name(this, "InvalidCookieSignature");
      }
      constructor(key, message) {
        super(message ?? `"${key}" has invalid cookie signature`);
        this.key = key;
        this.code = "INVALID_COOKIE_SIGNATURE";
        this.status = 400;
      }
    };
    exports.InvalidCookieSignature = InvalidCookieSignature;
    var ValidationError = class _ValidationError extends Error {
      static {
        __name(this, "ValidationError");
      }
      constructor(type, validator, value) {
        const error2 = exports.isProduction ? void 0 : "Errors" in validator ? validator.Errors(value).First() : value_1.Value.Errors(validator, value).First();
        const customError = error2?.schema.error ? typeof error2.schema.error === "function" ? error2.schema.error(type, validator, value) : error2.schema.error : void 0;
        const accessor = error2?.path?.slice(1) || "root";
        let message = "";
        if (customError) {
          message = typeof customError === "object" ? JSON.stringify(customError) : customError + "";
        } else if (exports.isProduction) {
          message = JSON.stringify({
            type,
            message: error2?.message
          });
        } else {
          message = JSON.stringify({
            type,
            at: accessor,
            message: error2?.message,
            expected: value_1.Value.Create(
              // @ts-ignore private field
              validator.schema
            ),
            found: value,
            errors: [...validator.Errors(value)]
          }, null, 2);
        }
        super(message);
        this.type = type;
        this.validator = validator;
        this.value = value;
        this.code = "VALIDATION";
        this.status = 400;
        Object.setPrototypeOf(this, _ValidationError.prototype);
      }
      get all() {
        return [...this.validator.Errors(this.value)];
      }
      static simplifyModel(validator) {
        const model = "schema" in validator ? validator.schema : validator;
        try {
          return value_1.Value.Create(model);
        } catch {
          return model;
        }
      }
      get model() {
        return _ValidationError.simplifyModel(this.validator);
      }
      toResponse(headers) {
        return new Response(this.message, {
          status: 400,
          headers
        });
      }
    };
    exports.ValidationError = ValidationError;
  }
});

// node_modules/.pnpm/elysia@0.8.8_@sinclair+typebox@0.32.5_typescript@5.3.3/node_modules/elysia/dist/cjs/ws/index.js
var require_ws = __commonJS({
  "node_modules/.pnpm/elysia@0.8.8_@sinclair+typebox@0.32.5_typescript@5.3.3/node_modules/elysia/dist/cjs/ws/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ElysiaWS = exports.websocket = void 0;
    var error_1 = require_error3();
    exports.websocket = {
      open(ws) {
        ws.data.open?.(ws);
      },
      message(ws, message) {
        ws.data.message?.(ws, message);
      },
      drain(ws) {
        ws.data.drain?.(ws);
      },
      close(ws, code, reason) {
        ws.data.close?.(ws, code, reason);
      }
    };
    var ElysiaWS = class {
      static {
        __name(this, "ElysiaWS");
      }
      constructor(raw, data) {
        this.raw = raw;
        this.data = data;
        this.validator = raw.data.validator;
        this.id = Date.now();
      }
      get publish() {
        return (topic, data = void 0, compress) => {
          if (this.validator?.Check(data) === false)
            throw new error_1.ValidationError("message", this.validator, data);
          if (typeof data === "object")
            data = JSON.stringify(data);
          this.raw.publish(topic, data, compress);
          return this;
        };
      }
      get send() {
        return (data) => {
          if (this.validator?.Check(data) === false)
            throw new error_1.ValidationError("message", this.validator, data);
          if (Buffer.isBuffer(data)) {
            this.raw.send(data);
            return this;
          }
          if (typeof data === "object")
            data = JSON.stringify(data);
          this.raw.send(data);
          return this;
        };
      }
      get subscribe() {
        return (room) => {
          this.raw.subscribe(room);
          return this;
        };
      }
      get unsubscribe() {
        return (room) => {
          this.raw.unsubscribe(room);
          return this;
        };
      }
      get cork() {
        return (callback) => {
          this.raw.cork(callback);
          return this;
        };
      }
      get close() {
        return () => {
          this.raw.close();
          return this;
        };
      }
      get terminate() {
        return this.raw.terminate.bind(this.raw);
      }
      get isSubscribed() {
        return this.raw.isSubscribed.bind(this.raw);
      }
      get remoteAddress() {
        return this.raw.remoteAddress;
      }
    };
    exports.ElysiaWS = ElysiaWS;
  }
});

// node_modules/.pnpm/fast-decode-uri-component@1.0.1/node_modules/fast-decode-uri-component/index.js
var require_fast_decode_uri_component = __commonJS({
  "node_modules/.pnpm/fast-decode-uri-component@1.0.1/node_modules/fast-decode-uri-component/index.js"(exports, module) {
    "use strict";
    var UTF8_ACCEPT = 12;
    var UTF8_REJECT = 0;
    var UTF8_DATA = [
      // The first part of the table maps bytes to character to a transition.
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      3,
      4,
      4,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      6,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      7,
      8,
      7,
      7,
      10,
      9,
      9,
      9,
      11,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      4,
      // The second part of the table maps a state to a new state when adding a
      // transition.
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      12,
      0,
      0,
      0,
      0,
      24,
      36,
      48,
      60,
      72,
      84,
      96,
      0,
      12,
      12,
      12,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      24,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      24,
      24,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      48,
      48,
      48,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      48,
      48,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      48,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // The third part maps the current transition to a mask that needs to apply
      // to the byte.
      127,
      63,
      63,
      63,
      0,
      31,
      15,
      15,
      15,
      7,
      7,
      7
    ];
    function decodeURIComponent2(uri) {
      var percentPosition = uri.indexOf("%");
      if (percentPosition === -1)
        return uri;
      var length = uri.length;
      var decoded = "";
      var last = 0;
      var codepoint = 0;
      var startOfOctets = percentPosition;
      var state = UTF8_ACCEPT;
      while (percentPosition > -1 && percentPosition < length) {
        var high = hexCodeToInt(uri[percentPosition + 1], 4);
        var low = hexCodeToInt(uri[percentPosition + 2], 0);
        var byte = high | low;
        var type = UTF8_DATA[byte];
        state = UTF8_DATA[256 + state + type];
        codepoint = codepoint << 6 | byte & UTF8_DATA[364 + type];
        if (state === UTF8_ACCEPT) {
          decoded += uri.slice(last, startOfOctets);
          decoded += codepoint <= 65535 ? String.fromCharCode(codepoint) : String.fromCharCode(
            55232 + (codepoint >> 10),
            56320 + (codepoint & 1023)
          );
          codepoint = 0;
          last = percentPosition + 3;
          percentPosition = startOfOctets = uri.indexOf("%", last);
        } else if (state === UTF8_REJECT) {
          return null;
        } else {
          percentPosition += 3;
          if (percentPosition < length && uri.charCodeAt(percentPosition) === 37)
            continue;
          return null;
        }
      }
      return decoded + uri.slice(last);
    }
    __name(decodeURIComponent2, "decodeURIComponent");
    var HEX = {
      "0": 0,
      "1": 1,
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
      "a": 10,
      "A": 10,
      "b": 11,
      "B": 11,
      "c": 12,
      "C": 12,
      "d": 13,
      "D": 13,
      "e": 14,
      "E": 14,
      "f": 15,
      "F": 15
    };
    function hexCodeToInt(c, shift) {
      var i = HEX[c];
      return i === void 0 ? 255 : i << shift;
    }
    __name(hexCodeToInt, "hexCodeToInt");
    module.exports = decodeURIComponent2;
  }
});

// node_modules/.pnpm/fast-querystring@1.1.2/node_modules/fast-querystring/lib/parse.js
var require_parse2 = __commonJS({
  "node_modules/.pnpm/fast-querystring@1.1.2/node_modules/fast-querystring/lib/parse.js"(exports, module) {
    "use strict";
    var fastDecode = require_fast_decode_uri_component();
    var plusRegex = /\+/g;
    var Empty = /* @__PURE__ */ __name(function() {
    }, "Empty");
    Empty.prototype = /* @__PURE__ */ Object.create(null);
    function parse(input) {
      const result = new Empty();
      if (typeof input !== "string") {
        return result;
      }
      let inputLength = input.length;
      let key = "";
      let value = "";
      let startingIndex = -1;
      let equalityIndex = -1;
      let shouldDecodeKey = false;
      let shouldDecodeValue = false;
      let keyHasPlus = false;
      let valueHasPlus = false;
      let hasBothKeyValuePair = false;
      let c = 0;
      for (let i = 0; i < inputLength + 1; i++) {
        c = i !== inputLength ? input.charCodeAt(i) : 38;
        if (c === 38) {
          hasBothKeyValuePair = equalityIndex > startingIndex;
          if (!hasBothKeyValuePair) {
            equalityIndex = i;
          }
          key = input.slice(startingIndex + 1, equalityIndex);
          if (hasBothKeyValuePair || key.length > 0) {
            if (keyHasPlus) {
              key = key.replace(plusRegex, " ");
            }
            if (shouldDecodeKey) {
              key = fastDecode(key) || key;
            }
            if (hasBothKeyValuePair) {
              value = input.slice(equalityIndex + 1, i);
              if (valueHasPlus) {
                value = value.replace(plusRegex, " ");
              }
              if (shouldDecodeValue) {
                value = fastDecode(value) || value;
              }
            }
            const currentValue = result[key];
            if (currentValue === void 0) {
              result[key] = value;
            } else {
              if (currentValue.pop) {
                currentValue.push(value);
              } else {
                result[key] = [currentValue, value];
              }
            }
          }
          value = "";
          startingIndex = i;
          equalityIndex = i;
          shouldDecodeKey = false;
          shouldDecodeValue = false;
          keyHasPlus = false;
          valueHasPlus = false;
        } else if (c === 61) {
          if (equalityIndex <= startingIndex) {
            equalityIndex = i;
          } else {
            shouldDecodeValue = true;
          }
        } else if (c === 43) {
          if (equalityIndex > startingIndex) {
            valueHasPlus = true;
          } else {
            keyHasPlus = true;
          }
        } else if (c === 37) {
          if (equalityIndex > startingIndex) {
            shouldDecodeValue = true;
          } else {
            shouldDecodeKey = true;
          }
        }
      }
      return result;
    }
    __name(parse, "parse");
    module.exports = parse;
  }
});

// node_modules/.pnpm/fast-querystring@1.1.2/node_modules/fast-querystring/lib/internals/querystring.js
var require_querystring = __commonJS({
  "node_modules/.pnpm/fast-querystring@1.1.2/node_modules/fast-querystring/lib/internals/querystring.js"(exports, module) {
    var hexTable = Array.from(
      { length: 256 },
      (_, i) => "%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase()
    );
    var noEscape = new Int8Array([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 0 - 15
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // 16 - 31
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      0,
      0,
      1,
      1,
      0,
      // 32 - 47
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      // 48 - 63
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 64 - 79
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      1,
      // 80 - 95
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      // 96 - 111
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      1,
      0
      // 112 - 127
    ]);
    function encodeString(str) {
      const len = str.length;
      if (len === 0)
        return "";
      let out = "";
      let lastPos = 0;
      let i = 0;
      outer:
        for (; i < len; i++) {
          let c = str.charCodeAt(i);
          while (c < 128) {
            if (noEscape[c] !== 1) {
              if (lastPos < i)
                out += str.slice(lastPos, i);
              lastPos = i + 1;
              out += hexTable[c];
            }
            if (++i === len)
              break outer;
            c = str.charCodeAt(i);
          }
          if (lastPos < i)
            out += str.slice(lastPos, i);
          if (c < 2048) {
            lastPos = i + 1;
            out += hexTable[192 | c >> 6] + hexTable[128 | c & 63];
            continue;
          }
          if (c < 55296 || c >= 57344) {
            lastPos = i + 1;
            out += hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
            continue;
          }
          ++i;
          if (i >= len) {
            throw new Error("URI malformed");
          }
          const c2 = str.charCodeAt(i) & 1023;
          lastPos = i + 1;
          c = 65536 + ((c & 1023) << 10 | c2);
          out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        }
      if (lastPos === 0)
        return str;
      if (lastPos < len)
        return out + str.slice(lastPos);
      return out;
    }
    __name(encodeString, "encodeString");
    module.exports = { encodeString };
  }
});

// node_modules/.pnpm/fast-querystring@1.1.2/node_modules/fast-querystring/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/.pnpm/fast-querystring@1.1.2/node_modules/fast-querystring/lib/stringify.js"(exports, module) {
    "use strict";
    var { encodeString } = require_querystring();
    function getAsPrimitive(value) {
      const type = typeof value;
      if (type === "string") {
        return encodeString(value);
      } else if (type === "bigint") {
        return value.toString();
      } else if (type === "boolean") {
        return value ? "true" : "false";
      } else if (type === "number" && Number.isFinite(value)) {
        return value < 1e21 ? "" + value : encodeString("" + value);
      }
      return "";
    }
    __name(getAsPrimitive, "getAsPrimitive");
    function stringify(input) {
      let result = "";
      if (input === null || typeof input !== "object") {
        return result;
      }
      const separator = "&";
      const keys = Object.keys(input);
      const keyLength = keys.length;
      let valueLength = 0;
      for (let i = 0; i < keyLength; i++) {
        const key = keys[i];
        const value = input[key];
        const encodedKey = encodeString(key) + "=";
        if (i) {
          result += separator;
        }
        if (Array.isArray(value)) {
          valueLength = value.length;
          for (let j = 0; j < valueLength; j++) {
            if (j) {
              result += separator;
            }
            result += encodedKey;
            result += getAsPrimitive(value[j]);
          }
        } else {
          result += encodedKey;
          result += getAsPrimitive(value);
        }
      }
      return result;
    }
    __name(stringify, "stringify");
    module.exports = stringify;
  }
});

// node_modules/.pnpm/fast-querystring@1.1.2/node_modules/fast-querystring/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/fast-querystring@1.1.2/node_modules/fast-querystring/lib/index.js"(exports, module) {
    "use strict";
    var parse = require_parse2();
    var stringify = require_stringify();
    var fastQuerystring = {
      parse,
      stringify
    };
    module.exports = fastQuerystring;
    module.exports.default = fastQuerystring;
    module.exports.parse = parse;
    module.exports.stringify = stringify;
  }
});

// node_modules/.pnpm/elysia@0.8.8_@sinclair+typebox@0.32.5_typescript@5.3.3/node_modules/elysia/dist/cjs/compose.js
var require_compose = __commonJS({
  "node_modules/.pnpm/elysia@0.8.8_@sinclair+typebox@0.32.5_typescript@5.3.3/node_modules/elysia/dist/cjs/compose.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.composeErrorHandler = exports.composeGeneralHandler = exports.composeHandler = exports.isAsync = exports.hasTransform = exports.hasProperty = exports.hasType = exports.isFnUse = exports.hasReturn = void 0;
    var value_1 = require_value5();
    var fast_querystring_1 = require_lib();
    var fast_decode_uri_component_1 = __importDefault(require_fast_decode_uri_component());
    var utils_1 = require_utils();
    var handler_1 = require_handler();
    var error_1 = require_error3();
    var cookie_1 = require_cookie2();
    var headersHasToJSON = new Headers().toJSON;
    var findAliases = new RegExp(` (\\w+) = context`, "g");
    var requestId = { value: 0 };
    var createReport = /* @__PURE__ */ __name(({ hasTrace, hasTraceSet = false, addFn, condition = {} }) => {
      if (hasTrace) {
        addFn(`
const reporter = getReporter()
`);
        return (event, { name, attribute = "", unit = 0 } = {}) => {
          const dotIndex = event.indexOf(".");
          const isGroup = dotIndex === -1;
          if (event !== "request" && event !== "response" && !condition[isGroup ? event : event.slice(0, dotIndex)])
            return () => {
              if (hasTraceSet && event === "afterHandle")
                addFn(`
await traceDone
`);
            };
          if (isGroup)
            name ||= event;
          else
            name ||= "anonymous";
          addFn("\n" + `reporter.emit('event', {
					id,
					event: '${event}',
					type: 'begin',
					name: '${name}',
					time: performance.now(),
					${isGroup ? `unit: ${unit},` : ""}
					${attribute}
				})`.replace(/(\t| |\n)/g, "") + "\n");
          let handled = false;
          return () => {
            if (handled)
              return;
            handled = true;
            addFn("\n" + `reporter.emit('event', {
							id,
							event: '${event}',
							type: 'end',
							time: performance.now()
						})`.replace(/(\t| |\n)/g, "") + "\n");
            if (hasTraceSet && event === "afterHandle")
              addFn(`
await traceDone
`);
          };
        };
      } else {
        return () => () => {
        };
      }
    }, "createReport");
    var hasReturn = /* @__PURE__ */ __name((fnLiteral) => {
      const parenthesisEnd = fnLiteral.indexOf(")");
      if (fnLiteral.charCodeAt(parenthesisEnd + 2) === 61 && fnLiteral.charCodeAt(parenthesisEnd + 5) !== 123) {
        return true;
      }
      return fnLiteral.includes("return");
    }, "hasReturn");
    exports.hasReturn = hasReturn;
    var composeValidationFactory = /* @__PURE__ */ __name((hasErrorHandler, { injectResponse = "" } = {}) => ({
      composeValidation: (type, value = `c.${type}`) => hasErrorHandler ? `c.set.status = 400; throw new ValidationError(
'${type}',
${type},
${value}
)` : `c.set.status = 400; return new ValidationError(
	'${type}',
	${type},
	${value}
).toResponse(c.set.headers)`,
      composeResponseValidation: (name = "r") => {
        const returnError = hasErrorHandler ? `throw new ValidationError(
'response',
response[c.set.status],
${name}
)` : `return new ValidationError(
'response',
response[c.set.status],
${name}
).toResponse(c.set.headers)`;
        return `
${injectResponse}
		if(!(${name} instanceof Response) && response[c.set.status]?.Check(${name}) === false) {
	if(!(response instanceof Error))
		${returnError}
}
`;
      }
    }), "composeValidationFactory");
    var isFnUse = /* @__PURE__ */ __name((keyword, fnLiteral) => {
      if (fnLiteral.startsWith("[object "))
        return false;
      fnLiteral = fnLiteral.trimStart();
      fnLiteral = fnLiteral.replaceAll(/^async /g, "");
      if (/^(\w+)\(/g.test(fnLiteral))
        fnLiteral = fnLiteral.slice(fnLiteral.indexOf("("));
      const argument = (
        // CharCode 40 is '('
        fnLiteral.charCodeAt(0) === 40 || fnLiteral.startsWith("function") ? (
          // Bun: (context) => {}
          fnLiteral.slice(fnLiteral.indexOf("(") + 1, fnLiteral.indexOf(")"))
        ) : (
          // Node: context => {}
          fnLiteral.slice(0, fnLiteral.indexOf("=") - 1)
        )
      );
      if (argument === "")
        return false;
      const restIndex = argument.charCodeAt(0) === 123 ? argument.indexOf("...") : -1;
      if (argument.charCodeAt(0) === 123) {
        if (argument.includes(keyword))
          return true;
        if (restIndex === -1)
          return false;
      }
      if (fnLiteral.match(new RegExp(`${argument}(.${keyword}|\\["${keyword}"\\])`))) {
        return true;
      }
      const restAlias = restIndex !== -1 ? argument.slice(restIndex + 3, argument.indexOf(" ", restIndex + 3)) : void 0;
      if (fnLiteral.match(new RegExp(`${restAlias}(.${keyword}|\\["${keyword}"\\])`)))
        return true;
      const aliases = [argument];
      if (restAlias)
        aliases.push(restAlias);
      for (const found of fnLiteral.matchAll(findAliases))
        aliases.push(found[1]);
      const destructuringRegex = new RegExp(`{.*?} = (${aliases.join("|")})`, "g");
      for (const [params] of fnLiteral.matchAll(destructuringRegex))
        if (params.includes(`{ ${keyword}`) || params.includes(`, ${keyword}`))
          return true;
      return false;
    }, "isFnUse");
    exports.isFnUse = isFnUse;
    var isContextPassToFunction = /* @__PURE__ */ __name((fnLiteral) => {
      fnLiteral = fnLiteral.trimStart();
      if (fnLiteral.startsWith("[object"))
        return false;
      fnLiteral = fnLiteral.replaceAll(/^async /g, "");
      if (/^(\w+)\(/g.test(fnLiteral))
        fnLiteral = fnLiteral.slice(fnLiteral.indexOf("("));
      const argument = (
        // CharCode 40 is '('
        fnLiteral.charCodeAt(0) === 40 || fnLiteral.startsWith("function") ? (
          // Bun: (context) => {}
          fnLiteral.slice(fnLiteral.indexOf("(") + 1, fnLiteral.indexOf(")"))
        ) : (
          // Node: context => {}
          fnLiteral.slice(0, fnLiteral.indexOf("=") - 1)
        )
      );
      if (argument === "")
        return false;
      const restIndex = argument.charCodeAt(0) === 123 ? argument.indexOf("...") : -1;
      const restAlias = restIndex !== -1 ? argument.slice(restIndex + 3, argument.indexOf(" ", restIndex + 3)) : void 0;
      const aliases = [argument];
      if (restAlias)
        aliases.push(restAlias);
      for (const found of fnLiteral.matchAll(findAliases))
        aliases.push(found[1]);
      for (const alias of aliases)
        if (new RegExp(`\\b\\w+\\([^)]*\\b${alias}\\b[^)]*\\)`).test(fnLiteral))
          return true;
      const destructuringRegex = new RegExp(`{.*?} = (${aliases.join("|")})`, "g");
      for (const [renamed] of fnLiteral.matchAll(destructuringRegex))
        if (new RegExp(`\\b\\w+\\([^)]*\\b${renamed}\\b[^)]*\\)`).test(fnLiteral))
          return true;
      return false;
    }, "isContextPassToFunction");
    var KindSymbol = Symbol.for("TypeBox.Kind");
    var hasType = /* @__PURE__ */ __name((type, schema) => {
      if (!schema)
        return;
      if (KindSymbol in schema && schema[KindSymbol] === type)
        return true;
      if (schema.type === "object") {
        const properties = schema.properties;
        for (const key of Object.keys(properties)) {
          const property = properties[key];
          if (property.type === "object") {
            if ((0, exports.hasType)(type, property))
              return true;
          } else if (property.anyOf) {
            for (let i = 0; i < property.anyOf.length; i++)
              if ((0, exports.hasType)(type, property.anyOf[i]))
                return true;
          }
          if (KindSymbol in property && property[KindSymbol] === type)
            return true;
        }
        return false;
      }
      return schema.properties && KindSymbol in schema.properties && schema.properties[KindSymbol] === type;
    }, "hasType");
    exports.hasType = hasType;
    var hasProperty = /* @__PURE__ */ __name((expectedProperty, schema) => {
      if (!schema)
        return;
      if (schema.type === "object") {
        const properties = schema.properties;
        if (!properties)
          return false;
        for (const key of Object.keys(properties)) {
          const property = properties[key];
          if (expectedProperty in property)
            return true;
          if (property.type === "object") {
            if ((0, exports.hasProperty)(expectedProperty, property))
              return true;
          } else if (property.anyOf) {
            for (let i = 0; i < property.anyOf.length; i++) {
              if ((0, exports.hasProperty)(expectedProperty, property.anyOf[i]))
                return true;
            }
          }
        }
        return false;
      }
      return expectedProperty in schema;
    }, "hasProperty");
    exports.hasProperty = hasProperty;
    var TransformSymbol = Symbol.for("TypeBox.Transform");
    var hasTransform = /* @__PURE__ */ __name((schema) => {
      if (!schema)
        return;
      if (schema.type === "object" && schema.properties) {
        const properties = schema.properties;
        for (const key of Object.keys(properties)) {
          const property = properties[key];
          if (property.type === "object") {
            if ((0, exports.hasTransform)(property))
              return true;
          } else if (property.anyOf) {
            for (let i = 0; i < property.anyOf.length; i++)
              if ((0, exports.hasTransform)(property.anyOf[i]))
                return true;
          }
          const hasTransformSymbol = TransformSymbol in property;
          if (hasTransformSymbol)
            return true;
        }
        return false;
      }
      return TransformSymbol in schema || schema.properties && TransformSymbol in schema.properties;
    }, "hasTransform");
    exports.hasTransform = hasTransform;
    var getUnionedType = /* @__PURE__ */ __name((validator) => {
      if (!validator)
        return;
      const schema = validator?.schema;
      if (schema && "anyOf" in schema) {
        let foundDifference = false;
        const type = schema.anyOf[0].type;
        for (const validator2 of schema.anyOf) {
          if (validator2.type !== type) {
            foundDifference = true;
            break;
          }
        }
        if (!foundDifference)
          return type;
      }
      return validator.schema?.type;
    }, "getUnionedType");
    var matchFnReturn = /(?:return|=>) \S+\(/g;
    var isAsync = /* @__PURE__ */ __name((fn) => {
      if (fn.constructor.name === "AsyncFunction")
        return true;
      const literal = fn.toString();
      if (literal.includes("=> response.clone("))
        return false;
      return !!literal.match(matchFnReturn);
    }, "isAsync");
    exports.isAsync = isAsync;
    var getDestructureQuery = /* @__PURE__ */ __name((fn) => {
      if (!fn.includes("query: {") || fn.includes("query,") || fn.includes("query }"))
        return false;
      const start = fn.indexOf("query: {");
      fn = fn.slice(start + 9);
      fn = fn.slice(0, fn.indexOf("}"));
      return fn.split(",").map((x) => {
        const indexOf = x.indexOf(":");
        if (indexOf === -1)
          return x.trim();
        return x.slice(0, indexOf).trim();
      });
    }, "getDestructureQuery");
    var composeHandler = /* @__PURE__ */ __name(({ path, method, hooks, validator, handler, handleError: handleError2, definitions, schema, onRequest, config, getReporter, setHeader }) => {
      const hasErrorHandler = config.forceErrorEncapsulation || hooks.error.length > 0 || typeof Bun === "undefined" || hooks.onResponse.length > 0 || !!hooks.trace.length;
      const isHandleFn = typeof handler === "function";
      const handle = isHandleFn ? `handler(c)` : `handler`;
      const handleResponse = hooks.onResponse.length ? `
;(async () => {${hooks.onResponse.map((_, i) => `await res${i}(c)`).join(";")}})();
` : "";
      const traceLiteral = hooks.trace.map((x) => x.toString());
      let hasUnknownContext = false;
      if (isHandleFn && isContextPassToFunction(handler.toString()))
        hasUnknownContext = true;
      if (!hasUnknownContext)
        for (const [key, value] of Object.entries(hooks)) {
          if (!Array.isArray(value) || !value.length || ![
            "parse",
            "transform",
            "beforeHandle",
            "afterHandle",
            "onResponse"
          ].includes(key))
            continue;
          for (const handle2 of value) {
            if (typeof handle2 !== "function")
              continue;
            if (isContextPassToFunction(handle2.toString())) {
              hasUnknownContext = true;
              break;
            }
          }
          if (hasUnknownContext)
            break;
        }
      const traceConditions = {
        parse: traceLiteral.some((x) => (0, exports.isFnUse)("parse", x)),
        transform: traceLiteral.some((x) => (0, exports.isFnUse)("transform", x)),
        handle: traceLiteral.some((x) => (0, exports.isFnUse)("handle", x)),
        beforeHandle: traceLiteral.some((x) => (0, exports.isFnUse)("beforeHandle", x)),
        afterHandle: traceLiteral.some((x) => (0, exports.isFnUse)("afterHandle", x)),
        error: hasErrorHandler || traceLiteral.some((x) => (0, exports.isFnUse)("error", x))
      };
      const hasTrace = hooks.trace.length > 0;
      let fnLiteral = "";
      const lifeCycleLiteral = validator || method !== "GET" && method !== "HEAD" ? [
        handler,
        ...hooks.transform,
        ...hooks.beforeHandle,
        ...hooks.afterHandle,
        ...hooks.mapResponse
      ].map((x) => typeof x === "function" ? x.toString() : `${x}`) : [];
      const hasBody = method !== "GET" && method !== "HEAD" && (hasUnknownContext || hooks.type !== "none" && (!!validator.body || !!hooks.type || lifeCycleLiteral.some((fn) => (0, exports.isFnUse)("body", fn))));
      const hasHeaders = hasUnknownContext || validator.headers || lifeCycleLiteral.some((fn) => (0, exports.isFnUse)("headers", fn)) || setHeader && Object.keys(setHeader).length;
      const hasCookie = hasUnknownContext || !!validator.cookie || lifeCycleLiteral.some((fn) => (0, exports.isFnUse)("cookie", fn));
      const cookieMeta = validator?.cookie?.schema;
      let encodeCookie = "";
      if (cookieMeta?.sign) {
        if (!cookieMeta.secrets)
          throw new Error(`t.Cookie required secret which is not set in (${method}) ${path}.`);
        const secret = !cookieMeta.secrets ? void 0 : typeof cookieMeta.secrets === "string" ? cookieMeta.secrets : cookieMeta.secrets[0];
        encodeCookie += `const _setCookie = c.set.cookie
		if(_setCookie) {`;
        if (cookieMeta.sign === true) {
          encodeCookie += `for(const [key, cookie] of Object.entries(_setCookie)) {
				c.set.cookie[key].value = await signCookie(cookie.value, '${secret}')
			}`;
        } else
          for (const name of cookieMeta.sign) {
            encodeCookie += `if(_setCookie['${name}']?.value) { c.set.cookie['${name}'].value = await signCookie(_setCookie['${name}'].value, '${secret}') }
`;
          }
        encodeCookie += "}\n";
      }
      const { composeValidation, composeResponseValidation } = composeValidationFactory(hasErrorHandler);
      if (hasHeaders) {
        fnLiteral += headersHasToJSON ? `c.headers = c.request.headers.toJSON()
` : `c.headers = {}
                for (const [key, value] of c.request.headers.entries())
					c.headers[key] = value
				`;
      }
      if (hasCookie) {
        const get = /* @__PURE__ */ __name((name, defaultValue) => {
          const value = cookieMeta?.[name] ?? defaultValue;
          if (!value)
            return typeof defaultValue === "string" ? `${name}: "${defaultValue}",` : `${name}: ${defaultValue},`;
          if (typeof value === "string")
            return `${name}: '${value}',`;
          if (value instanceof Date)
            return `${name}: new Date(${value.getTime()}),`;
          return `${name}: ${value},`;
        }, "get");
        const options = cookieMeta ? `{
			secret: ${cookieMeta.secrets !== void 0 ? typeof cookieMeta.secrets === "string" ? `'${cookieMeta.secrets}'` : "[" + cookieMeta.secrets.reduce((a, b) => a + `'${b}',`, "") + "]" : "undefined"},
			sign: ${cookieMeta.sign === true ? true : cookieMeta.sign !== void 0 ? "[" + cookieMeta.sign.reduce((a, b) => a + `'${b}',`, "") + "]" : "undefined"},
			${get("domain")}
			${get("expires")}
			${get("httpOnly")}
			${get("maxAge")}
			${get("path", "/")}
			${get("priority")}
			${get("sameSite")}
			${get("secure")}
		}` : "undefined";
        if (hasHeaders)
          fnLiteral += `
c.cookie = await parseCookie(c.set, c.headers.cookie, ${options})
`;
        else
          fnLiteral += `
c.cookie = await parseCookie(c.set, c.request.headers.get('cookie'), ${options})
`;
      }
      const hasQuery = hasUnknownContext || validator.query || lifeCycleLiteral.some((fn) => (0, exports.isFnUse)("query", fn));
      if (hasQuery) {
        let destructured = [];
        let referenceFullQuery = false;
        if (validator.query && validator.query.schema.type === "object") {
          destructured = Object.keys(validator.query.schema.properties);
        } else
          for (const event of lifeCycleLiteral) {
            const queries = getDestructureQuery(event);
            if (!queries) {
              referenceFullQuery = true;
              continue;
            }
            for (const query of queries)
              if (destructured.indexOf(query) === -1)
                destructured.push(query);
          }
        if (!referenceFullQuery && destructured.length) {
          fnLiteral += `if(c.qi !== -1) {
				const url = decodeURIComponent(c.request.url.slice(c.qi + 1))
				let memory = 0

				${destructured.map((name, index) => `
						memory = url.indexOf('${name}=')

						const a${index} = memory === -1 ? undefined : url.slice(memory = memory + ${name.length + 1}, (memory = url.indexOf('&', memory)) === -1 ? undefined : memory)`).join("\n")}

				c.query = {
					${destructured.map((name, index) => `${name}: a${index}`).join(", ")}
				}
			} else {
				c.query = {}
			}`;
        } else {
          fnLiteral += `c.query = c.qi !== -1 ? parseQuery(decodeURIComponent(c.request.url.slice(c.qi + 1))) : {}`;
        }
      }
      const traceLiterals = hooks.trace.map((x) => x.toString());
      const hasTraceSet = traceLiterals.some((fn) => (0, exports.isFnUse)("set", fn) || isContextPassToFunction(fn));
      hasUnknownContext || hooks.trace.some((fn) => (0, exports.isFnUse)("set", fn.toString()));
      const hasSet = setHeader && Object.keys(setHeader).length || hasTraceSet || hasCookie || lifeCycleLiteral.some((fn) => (0, exports.isFnUse)("set", fn)) || onRequest.some((fn) => (0, exports.isFnUse)("set", fn.toString()));
      if (hasTrace)
        fnLiteral += "\nconst id = c.$$requestId\n";
      const report = createReport({
        hasTrace,
        hasTraceSet,
        condition: traceConditions,
        addFn: (word) => {
          fnLiteral += word;
        }
      });
      fnLiteral += hasErrorHandler ? "\n try {\n" : "";
      if (hasTraceSet) {
        fnLiteral += `
const traceDone = Promise.all([`;
        for (let i = 0; i < hooks.trace.length; i++) {
          fnLiteral += `new Promise(r => { reporter.once(\`res\${id}.${i}\`, r) }),`;
        }
        fnLiteral += `])
`;
      }
      const isAsyncHandler = typeof handler === "function" && (0, exports.isAsync)(handler);
      const maybeAsync = hasCookie || hasBody || hasTraceSet || isAsyncHandler || !!hooks.mapResponse.length || hooks.parse.length > 0 || hooks.afterHandle.some(exports.isAsync) || hooks.beforeHandle.some(exports.isAsync) || hooks.transform.some(exports.isAsync);
      const endParse = report("parse", {
        unit: hooks.parse.length
      });
      if (hasBody) {
        const type = getUnionedType(validator?.body);
        if (hooks.type && !Array.isArray(hooks.type)) {
          if (hooks.type) {
            switch (hooks.type) {
              case "json":
              case "application/json":
                fnLiteral += `c.body = await c.request.json()
`;
                break;
              case "text":
              case "text/plain":
                fnLiteral += `c.body = await c.request.text()
`;
                break;
              case "urlencoded":
              case "application/x-www-form-urlencoded":
                fnLiteral += `c.body = parseQuery(await c.request.text())
`;
                break;
              case "arrayBuffer":
              case "application/octet-stream":
                fnLiteral += `c.body = await c.request.arrayBuffer()
`;
                break;
              case "formdata":
              case "multipart/form-data":
                fnLiteral += `c.body = {}

						const form = await c.request.formData()
						for (const key of form.keys()) {
							if (c.body[key])
								continue

							const value = form.getAll(key)
							if (value.length === 1)
								c.body[key] = value[0]
							else c.body[key] = value
						}
`;
                break;
            }
          }
          if (hooks.parse.length)
            fnLiteral += "}}";
        } else {
          const getAotParser = /* @__PURE__ */ __name(() => {
            if (hooks.parse.length && type && !Array.isArray(hooks.type)) {
              const schema2 = validator?.body?.schema;
              switch (type) {
                case "object":
                  if ((0, exports.hasType)("File", schema2) || (0, exports.hasType)("Files", schema2))
                    return `c.body = {}

								const form = await c.request.formData()
								for (const key of form.keys()) {
									if (c.body[key])
										continue

									const value = form.getAll(key)
									if (value.length === 1)
										c.body[key] = value[0]
									else c.body[key] = value
								}`;
                  break;
                default:
                  break;
              }
            }
          }, "getAotParser");
          const aotParse = getAotParser();
          if (aotParse)
            fnLiteral += aotParse;
          else {
            fnLiteral += "\n";
            fnLiteral += hasHeaders ? `let contentType = c.headers['content-type']` : `let contentType = c.request.headers.get('content-type')`;
            fnLiteral += `
				if (contentType) {
					const index = contentType.indexOf(';')
					if (index !== -1) contentType = contentType.substring(0, index)
`;
            if (hooks.parse.length) {
              fnLiteral += `let used = false
`;
              const endReport = report("parse", {
                unit: hooks.parse.length
              });
              for (let i = 0; i < hooks.parse.length; i++) {
                const endUnit = report("parse.unit", {
                  name: hooks.parse[i].name
                });
                const name = `bo${i}`;
                if (i !== 0)
                  fnLiteral += `if(!used) {
`;
                fnLiteral += `let ${name} = parse[${i}](c, contentType)
`;
                fnLiteral += `if(${name} instanceof Promise) ${name} = await ${name}
`;
                fnLiteral += `if(${name} !== undefined) { c.body = ${name}; used = true }
`;
                endUnit();
                if (i !== 0)
                  fnLiteral += `}`;
              }
              endReport();
            }
            if (hooks.parse.length)
              fnLiteral += `if (!used)`;
            fnLiteral += `
				switch (contentType) {
					case 'application/json':
						c.body = await c.request.json()
						break

					case 'text/plain':
						c.body = await c.request.text()
						break

					case 'application/x-www-form-urlencoded':
						c.body = parseQuery(await c.request.text())
						break

					case 'application/octet-stream':
						c.body = await c.request.arrayBuffer();
						break

					case 'multipart/form-data':
						c.body = {}

						const form = await c.request.formData()
						for (const key of form.keys()) {
							if (c.body[key])
								continue

							const value = form.getAll(key)
							if (value.length === 1)
								c.body[key] = value[0]
							else c.body[key] = value
						}

						break
					}
`;
            fnLiteral += "}\n";
          }
        }
        fnLiteral += "\n";
      }
      endParse();
      if (hooks?.transform) {
        const endTransform = report("transform", {
          unit: hooks.transform.length
        });
        for (let i = 0; i < hooks.transform.length; i++) {
          const transform = hooks.transform[i];
          const endUnit = report("transform.unit", {
            name: transform.name
          });
          if (transform.$elysia === "derive")
            fnLiteral += (0, exports.isAsync)(transform) ? `Object.assign(c, await transform[${i}](c));` : `Object.assign(c, transform[${i}](c));`;
          else
            fnLiteral += (0, exports.isAsync)(transform) ? `await transform[${i}](c);` : `transform[${i}](c);`;
          endUnit();
        }
        endTransform();
      }
      if (validator) {
        fnLiteral += "\n";
        if (validator.headers) {
          if ((0, exports.hasProperty)("default", validator.headers.params))
            for (const [key, value] of Object.entries(value_1.Value.Default(
              // @ts-ignore
              validator.headers.schema,
              {}
            ))) {
              const parsed = typeof value === "object" ? JSON.stringify(value) : `'${value}'`;
              if (parsed)
                fnLiteral += `c.headers['${key}'] ??= ${parsed}
`;
            }
          fnLiteral += `if(headers.Check(c.headers) === false) {
				${composeValidation("headers")}
			}`;
          if ((0, exports.hasTransform)(validator.headers.schema))
            fnLiteral += `
c.headers = headers.Decode(c.headers)
`;
        }
        if (validator.params) {
          if ((0, exports.hasProperty)("default", validator.params.schema))
            for (const [key, value] of Object.entries(value_1.Value.Default(
              // @ts-ignore
              validator.params.schema,
              {}
            ))) {
              const parsed = typeof value === "object" ? JSON.stringify(value) : `'${value}'`;
              if (parsed)
                fnLiteral += `c.params['${key}'] ??= ${parsed}
`;
            }
          fnLiteral += `if(params.Check(c.params) === false) {
				${composeValidation("params")}
			}`;
          if ((0, exports.hasTransform)(validator.params.schema))
            fnLiteral += `
c.params = params.Decode(c.params)
`;
        }
        if (validator.query) {
          if ((0, exports.hasProperty)("default", validator.query.schema))
            for (const [key, value] of Object.entries(value_1.Value.Default(
              // @ts-ignore
              validator.query.schema,
              {}
            ))) {
              const parsed = typeof value === "object" ? JSON.stringify(value) : `'${value}'`;
              if (parsed)
                fnLiteral += `c.query['${key}'] ??= ${parsed}
`;
            }
          fnLiteral += `if(query.Check(c.query) === false) {
				${composeValidation("query")}
			}`;
          if ((0, exports.hasTransform)(validator.query.schema))
            fnLiteral += `
c.query = query.Decode(Object.assign({}, c.query))
`;
        }
        if (validator.body) {
          if ((0, exports.hasProperty)("default", validator.body.schema))
            fnLiteral += `if(body.Check(c.body) === false) {
    				c.body = Object.assign(${JSON.stringify(value_1.Value.Default(
              // @ts-ignore
              validator.body.schema,
              null
            ) ?? {})}, c.body)

    				if(body.Check(c.query) === false) {
        				${composeValidation("body")}
     			}
            }`;
          else
            fnLiteral += `if(body.Check(c.body) === false) {
			${composeValidation("body")}
		}`;
          if ((0, exports.hasTransform)(validator.body.schema))
            fnLiteral += `
c.body = body.Decode(c.body)
`;
        }
        if ((0, handler_1.isNotEmpty)(validator.cookie?.schema.properties ?? {})) {
          fnLiteral += `const cookieValue = {}
    			for(const [key, value] of Object.entries(c.cookie))
    				cookieValue[key] = value.value
`;
          if ((0, exports.hasProperty)("default", validator.cookie.schema))
            for (const [key, value] of Object.entries(value_1.Value.Default(
              // @ts-ignore
              validator.cookie.schema,
              {}
            ))) {
              fnLiteral += `cookieValue['${key}'] = ${typeof value === "object" ? JSON.stringify(value) : value}
`;
            }
          fnLiteral += `if(cookie.Check(cookieValue) === false) {
				${composeValidation("cookie", "cookieValue")}
			}`;
          if ((0, exports.hasTransform)(validator.cookie.schema))
            fnLiteral += `
c.cookie = params.Decode(c.cookie)
`;
        }
      }
      if (hooks?.beforeHandle) {
        const endBeforeHandle = report("beforeHandle", {
          unit: hooks.beforeHandle.length
        });
        for (let i = 0; i < hooks.beforeHandle.length; i++) {
          const beforeHandle = hooks.beforeHandle[i];
          const endUnit = report("beforeHandle.unit", {
            name: beforeHandle.name
          });
          const returning = (0, exports.hasReturn)(beforeHandle.toString());
          if (beforeHandle.$elysia === "resolve") {
            fnLiteral += (0, exports.isAsync)(beforeHandle) ? `Object.assign(c, await beforeHandle[${i}](c));` : `Object.assign(c, beforeHandle[${i}](c));`;
          } else if (!returning) {
            fnLiteral += (0, exports.isAsync)(beforeHandle) ? `await beforeHandle[${i}](c);
` : `beforeHandle[${i}](c);
`;
            endUnit();
          } else {
            fnLiteral += (0, exports.isAsync)(beforeHandle) ? `be = await beforeHandle[${i}](c);
` : `be = beforeHandle[${i}](c);
`;
            endUnit();
            fnLiteral += `if(be !== undefined) {
`;
            const endAfterHandle = report("afterHandle", {
              unit: hooks.transform.length
            });
            if (hooks.afterHandle) {
              report("handle", {
                name: isHandleFn ? handler.name : void 0
              })();
              for (let i2 = 0; i2 < hooks.afterHandle.length; i2++) {
                const returning2 = (0, exports.hasReturn)(hooks.afterHandle[i2].toString());
                const endUnit2 = report("afterHandle.unit", {
                  name: hooks.afterHandle[i2].name
                });
                fnLiteral += `c.response = be
`;
                if (!returning2) {
                  fnLiteral += (0, exports.isAsync)(hooks.afterHandle[i2]) ? `await afterHandle[${i2}](c, be)
` : `afterHandle[${i2}](c, be)
`;
                } else {
                  fnLiteral += (0, exports.isAsync)(hooks.afterHandle[i2]) ? `af = await afterHandle[${i2}](c)
` : `af = afterHandle[${i2}](c)
`;
                  fnLiteral += `if(af !== undefined) { c.response = be = af }
`;
                }
                endUnit2();
              }
            }
            endAfterHandle();
            if (validator.response)
              fnLiteral += composeResponseValidation("be");
            if (hooks.mapResponse.length) {
              fnLiteral += `c.response = be`;
              for (let i2 = 0; i2 < hooks.mapResponse.length; i2++) {
                fnLiteral += `
if(mr === undefined) {
							mr = onMapResponse[${i2}](c)
							if(mr instanceof Promise) mr = await mr
							if(mr !== undefined) c.response = mr
						}
`;
              }
            }
            fnLiteral += encodeCookie;
            fnLiteral += `return mapEarlyResponse(be, c.set)}
`;
          }
        }
        endBeforeHandle();
      }
      if (hooks?.afterHandle.length) {
        const endHandle = report("handle", {
          name: isHandleFn ? handler.name : void 0
        });
        if (hooks.afterHandle.length)
          fnLiteral += isAsyncHandler ? `let r = c.response = await ${handle};
` : `let r = c.response = ${handle};
`;
        else
          fnLiteral += isAsyncHandler ? `let r = await ${handle};
` : `let r = ${handle};
`;
        endHandle();
        const endAfterHandle = report("afterHandle", {
          unit: hooks.afterHandle.length
        });
        for (let i = 0; i < hooks.afterHandle.length; i++) {
          const returning = (0, exports.hasReturn)(hooks.afterHandle[i].toString());
          const endUnit = report("afterHandle.unit", {
            name: hooks.afterHandle[i].name
          });
          if (!returning) {
            fnLiteral += (0, exports.isAsync)(hooks.afterHandle[i]) ? `await afterHandle[${i}](c)
` : `afterHandle[${i}](c)
`;
            endUnit();
          } else {
            fnLiteral += (0, exports.isAsync)(hooks.afterHandle[i]) ? `af = await afterHandle[${i}](c)
` : `af = afterHandle[${i}](c)
`;
            endUnit();
            if (validator.response) {
              fnLiteral += `if(af !== undefined) {`;
              endAfterHandle();
              fnLiteral += composeResponseValidation("af");
              fnLiteral += `c.response = af }`;
            } else {
              fnLiteral += `if(af !== undefined) {`;
              endAfterHandle();
              fnLiteral += `c.response = af}
`;
            }
          }
        }
        endAfterHandle();
        fnLiteral += `r = c.response
`;
        if (validator.response)
          fnLiteral += composeResponseValidation();
        fnLiteral += encodeCookie;
        if (hooks.mapResponse.length) {
          for (let i = 0; i < hooks.mapResponse.length; i++) {
            fnLiteral += `
mr = onMapResponse[${i}](c)
				if(mr instanceof Promise) mr = await mr
				if(mr !== undefined) c.response = mr
`;
          }
        }
        if (hasSet)
          fnLiteral += `return mapResponse(r, c.set)
`;
        else
          fnLiteral += `return mapCompactResponse(r)
`;
      } else {
        const endHandle = report("handle", {
          name: isHandleFn ? handler.name : void 0
        });
        if (validator.response || hooks.mapResponse.length) {
          fnLiteral += isAsyncHandler ? `let r = await ${handle};
` : `let r = ${handle};
`;
          endHandle();
          if (validator.response)
            fnLiteral += composeResponseValidation();
          report("afterHandle")();
          if (hooks.mapResponse.length) {
            fnLiteral += "c.response = r";
            for (let i = 0; i < hooks.mapResponse.length; i++) {
              fnLiteral += `
if(mr === undefined) { 
						mr = onMapResponse[${i}](c)
						if(mr instanceof Promise) mr = await mr
    					if(mr !== undefined) r = c.response = mr
					}
`;
            }
          }
          fnLiteral += encodeCookie;
          if (handler instanceof Response)
            fnLiteral += `return ${handle}.clone()
`;
          else if (hasSet)
            fnLiteral += `return mapResponse(r, c.set)
`;
          else
            fnLiteral += `return mapCompactResponse(r)
`;
        } else {
          if (traceConditions.handle || hasCookie) {
            fnLiteral += isAsyncHandler ? `let r = await ${handle};
` : `let r = ${handle};
`;
            endHandle();
            report("afterHandle")();
            if (hooks.mapResponse.length) {
              fnLiteral += "c.response = r";
              for (let i = 0; i < hooks.mapResponse.length; i++) {
                fnLiteral += `
if(mr === undefined) {
							mr = onMapResponse[${i}](c)
							if(mr instanceof Promise) mr = await mr
    						if(mr !== undefined) r = c.response = mr
						}
`;
              }
            }
            fnLiteral += encodeCookie;
            if (hasSet)
              fnLiteral += `return mapResponse(r, c.set)
`;
            else
              fnLiteral += `return mapCompactResponse(r)
`;
          } else {
            endHandle();
            const handled = isAsyncHandler ? `await ${handle}` : handle;
            report("afterHandle")();
            if (handler instanceof Response)
              fnLiteral += `return ${handle}.clone()
`;
            else if (hasSet)
              fnLiteral += `return mapResponse(${handled}, c.set)
`;
            else
              fnLiteral += `return mapCompactResponse(${handled})
`;
          }
        }
      }
      if (hasErrorHandler || handleResponse) {
        fnLiteral += `
} catch(error) {`;
        if (!maybeAsync)
          fnLiteral += `return (async () => {`;
        fnLiteral += `const set = c.set

		if (!set.status || set.status < 300) set.status = error?.status || 500
	`;
        const endError = report("error", {
          unit: hooks.error.length
        });
        if (hooks.error.length) {
          fnLiteral += `
				c.error = error
				c.code = error.code ?? error[ERROR_CODE] ?? "UNKNOWN"
			`;
          for (let i = 0; i < hooks.error.length; i++) {
            const name = `er${i}`;
            const endUnit = report("error.unit", {
              name: hooks.error[i].name
            });
            fnLiteral += `
let ${name} = handleErrors[${i}](c)
`;
            if ((0, exports.isAsync)(hooks.error[i]))
              fnLiteral += `if (${name} instanceof Promise) ${name} = await ${name}
`;
            endUnit();
            fnLiteral += `${name} = mapEarlyResponse(${name}, set)
`;
            fnLiteral += `if (${name}) {`;
            fnLiteral += `return ${name} }
`;
          }
        }
        endError();
        fnLiteral += `return handleError(c, error)

`;
        if (!maybeAsync)
          fnLiteral += "})()";
        fnLiteral += "}";
        if (handleResponse || hasTrace) {
          fnLiteral += ` finally { `;
          const endResponse = report("response", {
            unit: hooks.onResponse.length
          });
          fnLiteral += handleResponse;
          endResponse();
          fnLiteral += `}`;
        }
      }
      fnLiteral = `const {
		handler,
		handleError,
		hooks: {
			transform,
			resolve,
			beforeHandle,
			afterHandle,
			mapResponse: onMapResponse,
			parse,
			error: handleErrors,
			onResponse
		},
		validator: {
			body,
			headers,
			params,
			query,
			response,
			cookie
		},
		utils: {
			mapResponse,
			mapCompactResponse,
			mapEarlyResponse,
			parseQuery
		},
		error: {
			NotFoundError,
			ValidationError,
			InternalServerError
		},
		schema,
		definitions,
		ERROR_CODE,
		getReporter,
		requestId,
		parseCookie,
		signCookie,
		decodeURIComponent
	} = hooks

	${hooks.onResponse.length ? `const ${hooks.onResponse.map((x, i) => `res${i} = onResponse[${i}]`).join(",")}` : ""}

	return ${maybeAsync ? "async" : ""} function handle(c) {
		${hooks.beforeHandle.length ? "let be" : ""}
		${hooks.afterHandle.length ? "let af" : ""}
		${hooks.mapResponse.length ? "let mr" : ""}

		${schema && definitions ? "c.schema = schema; c.defs = definitions;" : ""}
		${fnLiteral}
	}`;
      const createHandler = Function("hooks", fnLiteral);
      return createHandler({
        handler,
        hooks,
        validator,
        handleError: handleError2,
        utils: {
          mapResponse: handler_1.mapResponse,
          mapCompactResponse: handler_1.mapCompactResponse,
          mapEarlyResponse: handler_1.mapEarlyResponse,
          parseQuery: fast_querystring_1.parse
        },
        error: {
          NotFoundError: error_1.NotFoundError,
          ValidationError: error_1.ValidationError,
          InternalServerError: error_1.InternalServerError
        },
        schema,
        definitions,
        ERROR_CODE: error_1.ERROR_CODE,
        getReporter,
        requestId,
        parseCookie: cookie_1.parseCookie,
        signCookie: utils_1.signCookie,
        decodeURIComponent: fast_decode_uri_component_1.default
      });
    }, "composeHandler");
    exports.composeHandler = composeHandler;
    var composeGeneralHandler = /* @__PURE__ */ __name((app2) => {
      let decoratorsLiteral = "";
      let fnLiteral = "";
      for (const key of Object.keys(app2.decorators))
        decoratorsLiteral += `,${key}: app.decorators.${key}`;
      const { router, staticRouter } = app2;
      const hasTrace = app2.event.trace.length > 0;
      const findDynamicRoute = `
	const route = router.find(request.method, path) ${router.root.ALL ? '?? router.find("ALL", path)' : ""}
	if (route === null)
		return ${app2.event.error.length ? `app.handleError(ctx, notFound)` : app2.event.request.length ? `new Response(error404Message, {
					status: ctx.set.status === 200 ? 404 : ctx.set.status,
					headers: ctx.set.headers
				})` : `error404.clone()`}

	ctx.params = route.params

	return route.store(ctx)`;
      let switchMap = ``;
      for (const [path, { code, all }] of Object.entries(staticRouter.map))
        switchMap += `case '${path}':
switch(request.method) {
${code}
${all ?? `default: break map`}}

`;
      const maybeAsync = app2.event.request.some(exports.isAsync);
      fnLiteral += `const {
		app,
		app: { store, router, staticRouter, wsRouter },
		mapEarlyResponse,
		NotFoundError,
		requestId,
		getReporter,
		handleError
	} = data

	const notFound = new NotFoundError()

	${app2.event.request.length ? `const onRequest = app.event.request` : ""}
	${staticRouter.variables}
	${app2.event.error.length ? "" : `
	const error404Message = notFound.message.toString()
	const error404 = new Response(error404Message, { status: 404 });
	`}

	return ${maybeAsync ? "async" : ""} function map(request) {
`;
      if (app2.event.request.length)
        fnLiteral += `let re`;
      const traceLiteral = app2.event.trace.map((x) => x.toString());
      const report = createReport({
        hasTrace,
        hasTraceSet: app2.event.trace.some((fn) => {
          const literal = fn.toString();
          return (0, exports.isFnUse)("set", literal) || isContextPassToFunction(literal);
        }),
        condition: {
          request: traceLiteral.some((x) => (0, exports.isFnUse)("request", x) || isContextPassToFunction(x))
        },
        addFn: (word) => {
          fnLiteral += word;
        }
      });
      if (app2.event.request.length) {
        fnLiteral += `
			${hasTrace ? "const id = +requestId.value++" : ""}

			const ctx = {
				request,
				store,
				set: {
					headers: ${// @ts-ignore
        Object.keys(app2.setHeaders ?? {}).length ? "Object.assign({}, app.setHeaders)" : "{}"},
					status: 200
				}
				${hasTrace ? ",$$requestId: +id" : ""}
				${decoratorsLiteral}
			}
		`;
        const endReport = report("request", {
          attribute: "ctx",
          unit: app2.event.request.length
        });
        fnLiteral += `
 try {
`;
        for (let i = 0; i < app2.event.request.length; i++) {
          const fn = app2.event.request[i];
          const withReturn = (0, exports.hasReturn)(fn.toString());
          const maybeAsync2 = (0, exports.isAsync)(fn);
          const endUnit = report("request.unit", {
            name: app2.event.request[i].name
          });
          if (withReturn) {
            fnLiteral += `re = mapEarlyResponse(
					${maybeAsync2 ? "await" : ""} onRequest[${i}](ctx),
					ctx.set
				)
`;
            endUnit();
            if (withReturn)
              fnLiteral += `if(re !== undefined) return re
`;
          } else {
            fnLiteral += `${maybeAsync2 ? "await" : ""} onRequest[${i}](ctx)
`;
            endUnit();
          }
        }
        fnLiteral += `} catch (error) {
			return app.handleError(ctx, error)
		}`;
        endReport();
        fnLiteral += `
		const url = request.url
		const s = url.indexOf('/', 11)
		const qi = ctx.qi = url.indexOf('?', s + 1)
		const path = ctx.path = url.substring(s, qi === -1 ? undefined : qi)`;
      } else {
        fnLiteral += `
		const url = request.url
		const s = url.indexOf('/', 11)
		const qi = url.indexOf('?', s + 1)
		const path = url.substring(s, qi === -1 ? undefined : qi)
		${hasTrace ? "const id = +requestId.value++" : ""}
		const ctx = {
			request,
			store,
			qi,
			path,
			set: {
				headers: ${// @ts-ignore
        Object.keys(app2.setHeaders ?? {}).length ? "Object.assign({}, app.setHeaders)" : "{}"},
				status: 200
			}
			${hasTrace ? ",$$requestId: id" : ""}
			${decoratorsLiteral}
		}`;
        report("request", {
          unit: app2.event.request.length,
          attribute: traceLiteral.some((x) => (0, exports.isFnUse)("context", x)) || traceLiteral.some((x) => (0, exports.isFnUse)("store", x)) || traceLiteral.some((x) => (0, exports.isFnUse)("set", x)) ? "ctx" : ""
        })();
      }
      const wsPaths = app2.wsPaths;
      const wsRouter = app2.wsRouter;
      if (Object.keys(wsPaths).length || wsRouter.history.length) {
        fnLiteral += `
			if(request.method === 'GET') {
				switch(path) {`;
        for (const [path, index] of Object.entries(wsPaths)) {
          fnLiteral += `
					case '${path}':
						if(request.headers.get('upgrade') === 'websocket')
							return st${index}(ctx)

						break`;
        }
        fnLiteral += `
				default:
					if(request.headers.get('upgrade') === 'websocket') {
						const route = wsRouter.find('ws', path)

						if(route) {
							ctx.params = route.params

							return route.store(ctx)
						}
					}

					break
			}
		}
`;
      }
      fnLiteral += `
		map: switch(path) {
			${switchMap}

			default:
				break
		}

		${findDynamicRoute}
	}`;
      const handleError2 = (0, exports.composeErrorHandler)(app2);
      app2.handleError = handleError2;
      return Function("data", fnLiteral)({
        app: app2,
        mapEarlyResponse: handler_1.mapEarlyResponse,
        NotFoundError: error_1.NotFoundError,
        // @ts-ignore
        getReporter: () => app2.reporter,
        requestId,
        handleError: handleError2
      });
    }, "composeGeneralHandler");
    exports.composeGeneralHandler = composeGeneralHandler;
    var composeErrorHandler = /* @__PURE__ */ __name((app2) => {
      let fnLiteral = `const {
		app: { event: { error: onError, onResponse: res } },
		mapResponse,
		ERROR_CODE,
		ELYSIA_RESPONSE
	} = inject

	return ${app2.event.error.find(exports.isAsync) ? "async" : ""} function(context, error) {
		let r

		const { set } = context

		context.code = error.code
		context.error = error

		if(error[ELYSIA_RESPONSE]) {
			error.status = error[ELYSIA_RESPONSE]
			error.message = error.response
		}
`;
      for (let i = 0; i < app2.event.error.length; i++) {
        const handler = app2.event.error[i];
        const response2 = `${(0, exports.isAsync)(handler) ? "await " : ""}onError[${i}](context)`;
        if ((0, exports.hasReturn)(handler.toString()))
          fnLiteral += `r = ${response2}; if(r !== undefined) {
				if(r instanceof Response) return r

				if(r[ELYSIA_RESPONSE]) {
					error.status = error[ELYSIA_RESPONSE]
					error.message = error.response
				}
		
				if(set.status === 200) set.status = error.status
				return mapResponse(r, set)
			}
`;
        else
          fnLiteral += response2 + "\n";
      }
      fnLiteral += `if(error.constructor.name === "ValidationError" || error.constructor.name === "TransformDecodeError") {
		set.status = error.status ?? 400
		return new Response(
			error.message,
			{ headers: set.headers, status: set.status }
		)
	} else {
		if(error.code && typeof error.status === "number")
			return new Response(
				error.message,
				{ headers: set.headers, status: error.status }
			)

		return mapResponse(error, set)
	}
}`;
      return Function("inject", fnLiteral)({
        app: app2,
        mapResponse: handler_1.mapResponse,
        ERROR_CODE: error_1.ERROR_CODE,
        ELYSIA_RESPONSE: error_1.ELYSIA_RESPONSE
      });
    }, "composeErrorHandler");
    exports.composeErrorHandler = composeErrorHandler;
  }
});

// node_modules/.pnpm/elysia@0.8.8_@sinclair+typebox@0.32.5_typescript@5.3.3/node_modules/elysia/dist/cjs/dynamic-handle.js
var require_dynamic_handle = __commonJS({
  "node_modules/.pnpm/elysia@0.8.8_@sinclair+typebox@0.32.5_typescript@5.3.3/node_modules/elysia/dist/cjs/dynamic-handle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDynamicErrorHandler = exports.createDynamicHandler = void 0;
    var handler_1 = require_handler();
    var error_1 = require_error3();
    var fast_querystring_1 = require_lib();
    var utils_1 = require_utils();
    var cookie_1 = require_cookie2();
    var createDynamicHandler = /* @__PURE__ */ __name((app2) => async (request2) => {
      const set = {
        cookie: {},
        status: 200,
        headers: {}
      };
      let context;
      if (app2.decorators) {
        context = app2.decorators;
        context.request = request2;
        context.set = set;
        context.store = app2.store;
      } else {
        context = {
          set,
          store: app2.store,
          request: request2
        };
      }
      const url = request2.url, s = url.indexOf("/", 11), q = url.indexOf("?", s + 1), path = q === -1 ? url.substring(s) : url.substring(s, q);
      try {
        for (let i = 0; i < app2.event.request.length; i++) {
          const onRequest = app2.event.request[i];
          let response3 = onRequest(context);
          if (response3 instanceof Promise)
            response3 = await response3;
          response3 = (0, handler_1.mapEarlyResponse)(response3, set);
          if (response3)
            return response3;
        }
        const handler = (
          // @ts-ignore
          app2.dynamicRouter.find(request2.method, path) ?? // @ts-ignore
          app2.dynamicRouter.find("ALL", path)
        );
        if (!handler)
          throw new error_1.NotFoundError();
        const { handle, hooks, validator, content } = handler.store;
        let body;
        if (request2.method !== "GET" && request2.method !== "HEAD") {
          if (content) {
            switch (content) {
              case "application/json":
                body = await request2.json();
                break;
              case "text/plain":
                body = await request2.text();
                break;
              case "application/x-www-form-urlencoded":
                body = (0, fast_querystring_1.parse)(await request2.text());
                break;
              case "application/octet-stream":
                body = await request2.arrayBuffer();
                break;
              case "multipart/form-data":
                body = {};
                const form = await request2.formData();
                for (const key of form.keys()) {
                  if (body[key])
                    continue;
                  const value = form.getAll(key);
                  if (value.length === 1)
                    body[key] = value[0];
                  else
                    body[key] = value;
                }
                break;
            }
          } else {
            let contentType = request2.headers.get("content-type");
            if (contentType) {
              const index = contentType.indexOf(";");
              if (index !== -1)
                contentType = contentType.slice(0, index);
              for (let i = 0; i < app2.event.parse.length; i++) {
                let temp = app2.event.parse[i](context, contentType);
                if (temp instanceof Promise)
                  temp = await temp;
                if (temp) {
                  body = temp;
                  break;
                }
              }
              if (body === void 0) {
                switch (contentType) {
                  case "application/json":
                    body = await request2.json();
                    break;
                  case "text/plain":
                    body = await request2.text();
                    break;
                  case "application/x-www-form-urlencoded":
                    body = (0, fast_querystring_1.parse)(await request2.text());
                    break;
                  case "application/octet-stream":
                    body = await request2.arrayBuffer();
                    break;
                  case "multipart/form-data":
                    body = {};
                    const form = await request2.formData();
                    for (const key of form.keys()) {
                      if (body[key])
                        continue;
                      const value = form.getAll(key);
                      if (value.length === 1)
                        body[key] = value[0];
                      else
                        body[key] = value;
                    }
                    break;
                }
              }
            }
          }
        }
        context.body = body;
        context.params = handler?.params || void 0;
        context.query = q === -1 ? {} : (0, fast_querystring_1.parse)(url.substring(q + 1));
        context.headers = {};
        for (const [key, value] of request2.headers.entries())
          context.headers[key] = value;
        const cookieMeta = validator?.cookie?.schema;
        context.cookie = await (0, cookie_1.parseCookie)(context.set, context.headers.cookie, cookieMeta ? {
          secret: cookieMeta.secrets !== void 0 ? typeof cookieMeta.secrets === "string" ? cookieMeta.secrets : cookieMeta.secrets.join(",") : void 0,
          sign: cookieMeta.sign === true ? true : cookieMeta.sign !== void 0 ? typeof cookieMeta.sign === "string" ? cookieMeta.sign : cookieMeta.sign.join(",") : void 0
        } : void 0);
        for (let i = 0; i < hooks.transform.length; i++) {
          const operation = hooks.transform[i](context);
          if (hooks.transform[i].$elysia === "derive") {
            if (operation instanceof Promise)
              Object.assign(context, await operation);
            else
              Object.assign(context, operation);
          } else if (operation instanceof Promise)
            await operation;
        }
        if (validator) {
          if (validator.headers) {
            const _header = {};
            for (const key in request2.headers)
              _header[key] = request2.headers.get(key);
            if (validator.headers.Check(_header) === false)
              throw new error_1.ValidationError("header", validator.headers, _header);
          }
          if (validator.params?.Check(context.params) === false)
            throw new error_1.ValidationError("params", validator.params, context.params);
          if (validator.query?.Check(context.query) === false)
            throw new error_1.ValidationError("query", validator.query, context.query);
          if (validator.cookie) {
            const cookieValue = {};
            for (const [key, value] of Object.entries(context.cookie))
              cookieValue[key] = value.value;
            if (validator.cookie?.Check(cookieValue) === false)
              throw new error_1.ValidationError("cookie", validator.cookie, cookieValue);
          }
          if (validator.body?.Check(body) === false)
            throw new error_1.ValidationError("body", validator.body, body);
        }
        for (let i = 0; i < hooks.beforeHandle.length; i++) {
          let response3 = hooks.beforeHandle[i](context);
          if (response3 instanceof Promise)
            response3 = await response3;
          if (response3 !== void 0) {
            ;
            context.response = response3;
            for (let i2 = 0; i2 < hooks.afterHandle.length; i2++) {
              let newResponse = hooks.afterHandle[i2](context);
              if (newResponse instanceof Promise)
                newResponse = await newResponse;
              if (newResponse)
                response3 = newResponse;
            }
            const result = (0, handler_1.mapEarlyResponse)(response3, context.set);
            if (result)
              return result;
          }
        }
        let response2 = handle(context);
        if (response2 instanceof Promise)
          response2 = await response2;
        if (!hooks.afterHandle.length) {
          const responseValidator = validator?.response?.[response2.status];
          if (responseValidator?.Check(response2) === false)
            throw new error_1.ValidationError("response", responseValidator, response2);
        } else {
          ;
          context.response = response2;
          for (let i = 0; i < hooks.afterHandle.length; i++) {
            let newResponse = hooks.afterHandle[i](context);
            if (newResponse instanceof Promise)
              newResponse = await newResponse;
            const result = (0, handler_1.mapEarlyResponse)(newResponse, context.set);
            if (result !== void 0) {
              const responseValidator = validator?.response?.[response2.status];
              if (responseValidator?.Check(result) === false)
                throw new error_1.ValidationError("response", responseValidator, result);
              return result;
            }
          }
        }
        if (context.set.cookie && cookieMeta?.sign) {
          const secret = !cookieMeta.secrets ? void 0 : typeof cookieMeta.secrets === "string" ? cookieMeta.secrets : cookieMeta.secrets[0];
          if (cookieMeta.sign === true)
            for (const [key, cookie] of Object.entries(context.set.cookie))
              context.set.cookie[key].value = await (0, utils_1.signCookie)(cookie.value, "${secret}");
          else
            for (const name of cookieMeta.sign) {
              if (!(name in cookieMeta.properties))
                continue;
              if (context.set.cookie[name]?.value) {
                context.set.cookie[name].value = await (0, utils_1.signCookie)(context.set.cookie[name].value, secret);
              }
            }
        }
        return (0, handler_1.mapResponse)(response2, context.set);
      } catch (error) {
        if (error.status)
          set.status = error.status;
        return app2.handleError(context, error);
      } finally {
        for (const onResponse of app2.event.onResponse)
          await onResponse(context);
      }
    }, "createDynamicHandler");
    exports.createDynamicHandler = createDynamicHandler;
    var createDynamicErrorHandler = /* @__PURE__ */ __name((app2) => async (context, error) => {
      const errorContext = Object.assign(context, { error, code: error.code });
      errorContext.set = context.set;
      for (let i = 0; i < app2.event.error.length; i++) {
        let response2 = app2.event.error[i](errorContext);
        if (response2 instanceof Promise)
          response2 = await response2;
        if (response2 !== void 0 && response2 !== null)
          return (0, handler_1.mapResponse)(response2, context.set);
      }
      return new Response(typeof error.cause === "string" ? error.cause : error.message, {
        headers: context.set.headers,
        status: error.status ?? 500
      });
    }, "createDynamicErrorHandler");
    exports.createDynamicErrorHandler = createDynamicErrorHandler;
  }
});

// node_modules/.pnpm/elysia@0.8.8_@sinclair+typebox@0.32.5_typescript@5.3.3/node_modules/elysia/dist/cjs/type-system.js
var require_type_system = __commonJS({
  "node_modules/.pnpm/elysia@0.8.8_@sinclair+typebox@0.32.5_typescript@5.3.3/node_modules/elysia/dist/cjs/type-system.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.t = exports.ElysiaType = void 0;
    var system_1 = require_system2();
    var typebox_1 = require_require();
    var value_1 = require_value5();
    var error_1 = require_error3();
    var t = Object.assign({}, typebox_1.Type);
    exports.t = t;
    try {
      system_1.TypeSystem.Format("email", (value) => /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(value));
      system_1.TypeSystem.Format("uuid", (value) => /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value));
      system_1.TypeSystem.Format("date", (value) => !Number.isNaN(new Date(value).getTime()));
      system_1.TypeSystem.Format("date-time", (value) => !Number.isNaN(new Date(value).getTime()));
    } catch (error) {
    }
    var parseFileUnit = /* @__PURE__ */ __name((size) => {
      if (typeof size === "string")
        switch (size.slice(-1)) {
          case "k":
            return +size.slice(0, size.length - 1) * 1024;
          case "m":
            return +size.slice(0, size.length - 1) * 1048576;
          default:
            return +size;
        }
      return size;
    }, "parseFileUnit");
    var validateFile = /* @__PURE__ */ __name((options, value) => {
      if (!(value instanceof Blob))
        return false;
      if (options.minSize && value.size < parseFileUnit(options.minSize))
        return false;
      if (options.maxSize && value.size > parseFileUnit(options.maxSize))
        return false;
      if (options.extension)
        if (typeof options.extension === "string") {
          if (!value.type.startsWith(options.extension))
            return false;
        } else {
          for (let i = 0; i < options.extension.length; i++)
            if (value.type.startsWith(options.extension[i]))
              return true;
          return false;
        }
      return true;
    }, "validateFile");
    var Files = system_1.TypeSystem.Type("Files", (options, value) => {
      if (!Array.isArray(value))
        return validateFile(options, value);
      if (options.minItems && value.length < options.minItems)
        return false;
      if (options.maxItems && value.length > options.maxItems)
        return false;
      for (let i = 0; i < value.length; i++)
        if (!validateFile(options, value[i]))
          return false;
      return true;
    });
    typebox_1.FormatRegistry.Set("numeric", (value) => !!value && !isNaN(+value));
    typebox_1.FormatRegistry.Set("ObjectString", (value) => {
      let start = value.charCodeAt(0);
      if (start === 9 || start === 10 || start === 32)
        start = value.trimStart().charCodeAt(0);
      if (start !== 123 && start !== 91)
        return false;
      try {
        JSON.parse(value);
        return true;
      } catch {
        return false;
      }
    });
    exports.ElysiaType = {
      Numeric: (property) => {
        const schema = typebox_1.Type.Number(property);
        return t.Transform(t.Union([
          t.String({
            format: "numeric",
            default: 0
          }),
          t.Number(property)
        ], property)).Decode((value) => {
          const number = +value;
          if (isNaN(number))
            return value;
          if (property && !value_1.Value.Check(schema, number))
            throw new error_1.ValidationError("property", schema, number);
          return number;
        }).Encode((value) => value);
      },
      ObjectString: (properties, options) => t.Transform(t.Union([
        t.String({
          format: "ObjectString",
          default: ""
        }),
        t.Object(properties, options)
      ], options)).Decode((value) => {
        if (typeof value === "string")
          try {
            return JSON.parse(value);
          } catch {
            return value;
          }
        return value;
      }).Encode((value) => JSON.stringify(value)),
      File: system_1.TypeSystem.Type("File", validateFile),
      Files: (options = {}) => t.Transform(t.Union([Files(options)])).Decode((value) => {
        if (Array.isArray(value))
          return value;
        return [value];
      }).Encode((value) => value),
      Nullable: (schema) => t.Union([t.Null(), schema]),
      /**
       * Allow Optional, Nullable and Undefined
       */
      MaybeEmpty: (schema) => t.Union([t.Null(), t.Undefined(), schema]),
      Cookie: (properties, options) => t.Object(properties, options)
    };
    t.ObjectString = exports.ElysiaType.ObjectString;
    t.Numeric = exports.ElysiaType.Numeric;
    t.File = (arg = {}) => exports.ElysiaType.File({
      default: "File",
      ...arg,
      extension: arg?.type,
      type: "string",
      format: "binary"
    });
    t.Files = (arg = {}) => exports.ElysiaType.Files({
      ...arg,
      elysiaMeta: "Files",
      default: "Files",
      extension: arg?.type,
      type: "array",
      items: {
        ...arg,
        default: "Files",
        type: "string",
        format: "binary"
      }
    });
    t.Nullable = (schema) => exports.ElysiaType.Nullable(schema);
    t.MaybeEmpty = exports.ElysiaType.MaybeEmpty;
    t.Cookie = exports.ElysiaType.Cookie;
    __exportStar(require_system2(), exports);
    __exportStar(require_compiler2(), exports);
  }
});

// node_modules/.pnpm/elysia@0.8.8_@sinclair+typebox@0.32.5_typescript@5.3.3/node_modules/elysia/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "node_modules/.pnpm/elysia@0.8.8_@sinclair+typebox@0.32.5_typescript@5.3.3/node_modules/elysia/dist/cjs/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InvalidCookieSignature = exports.InternalServerError = exports.ValidationError = exports.NotFoundError = exports.ParseError = exports.error = exports.getResponseSchemaValidator = exports.mergeObjectArray = exports.mergeHook = exports.mergeDeep = exports.getSchemaValidator = exports.Cookie = exports.t = exports.mapEarlyResponse = exports.mapCompactResponse = exports.mapResponse = exports.Elysia = void 0;
    var memoirist_1 = require_cjs();
    var eventemitter3_1 = __importDefault(require_eventemitter3());
    var trace_1 = require_trace();
    var ws_1 = require_ws();
    var handler_1 = require_handler();
    var compose_1 = require_compose();
    var utils_1 = require_utils();
    var dynamic_handle_1 = require_dynamic_handle();
    var error_1 = require_error3();
    var type_system_1 = require_type_system();
    var Elysia3 = class _Elysia {
      static {
        __name(this, "Elysia");
      }
      getServer() {
        return this.server;
      }
      constructor(config) {
        this.dependencies = {};
        this.store = {};
        this.decorators = {};
        this.definitions = {
          type: {},
          error: {}
        };
        this.schema = {};
        this.macros = [];
        this.event = {
          start: [],
          request: [],
          parse: [],
          transform: [],
          beforeHandle: [],
          afterHandle: [],
          mapResponse: [],
          onResponse: [],
          trace: [],
          error: [],
          stop: []
        };
        this.reporter = new eventemitter3_1.default();
        this.server = null;
        this.validator = null;
        this.router = new memoirist_1.Memoirist();
        this.wsRouter = new memoirist_1.Memoirist();
        this.routes = [];
        this.staticRouter = {
          handlers: [],
          variables: "",
          map: {},
          all: ""
        };
        this.wsPaths = {};
        this.dynamicRouter = new memoirist_1.Memoirist();
        this.lazyLoadModules = [];
        this.path = "";
        this.stack = void 0;
        this.handle = async (request2) => this.fetch(request2);
        this.fetch = (request2) => {
          if (process.env.NODE_ENV === "production")
            console.warn("Performance degradation found. Please call Elysia.compile() before using 'fetch'");
          return (this.fetch = this.config.aot ? (0, compose_1.composeGeneralHandler)(this) : (0, dynamic_handle_1.createDynamicHandler)(this))(request2);
        };
        this.handleError = async (context, error) => (this.handleError = this.config.aot ? (0, compose_1.composeErrorHandler)(this) : (0, dynamic_handle_1.createDynamicErrorHandler)(this))(context, error);
        this.outerErrorHandler = (error) => new Response(error.message || error.name || "Error", {
          // @ts-ignore
          status: error?.status ?? 500
        });
        this.listen = (options, callback) => {
          if (!Bun)
            throw new Error("Bun to run");
          this.compile();
          if (typeof options === "string") {
            options = +options.trim();
            if (Number.isNaN(options))
              throw new Error("Port must be a numeric value");
          }
          const fetch = this.fetch;
          const serve = typeof options === "object" ? {
            development: !error_1.isProduction,
            reusePort: true,
            ...this.config.serve,
            ...options,
            websocket: {
              ...this.config.websocket,
              ...ws_1.websocket
            },
            fetch,
            error: this.outerErrorHandler
          } : {
            development: !error_1.isProduction,
            reusePort: true,
            ...this.config.serve,
            websocket: {
              ...this.config.websocket,
              ...ws_1.websocket
            },
            port: options,
            fetch,
            error: this.outerErrorHandler
          };
          if (typeof Bun === "undefined")
            throw new Error(".listen() is designed to run on Bun only. If you are running Elysia in other environment please use a dedicated plugin or export the handler via Elysia.fetch");
          this.server = Bun?.serve(serve);
          if (this.event.start.length)
            for (let i = 0; i < this.event.start.length; i++)
              this.event.start[i](this);
          if (callback)
            callback(this.server);
          process.on("beforeExit", () => {
            for (let i = 0; i < this.event.stop.length; i++)
              this.event.stop[i](this);
          });
          Promise.all(this.lazyLoadModules).then(() => {
            Bun?.gc(false);
          });
          return this;
        };
        this.stop = async () => {
          if (!this.server)
            throw new Error("Elysia isn't running. Call `app.listen` to start the server.");
          this.server.stop();
          if (this.event.stop.length)
            for (let i = 0; i < this.event.stop.length; i++)
              this.event.stop[i](this);
        };
        this.config = {
          forceErrorEncapsulation: true,
          prefix: "",
          aot: true,
          strictPath: false,
          scoped: false,
          cookie: {},
          analytic: false,
          ...config,
          seed: config?.seed === void 0 ? "" : config?.seed
        };
        if (config?.analytic && (config?.name || config?.seed !== void 0))
          this.stack = new Error().stack;
      }
      add(method, paths, handle, localHook, { allowMeta = false, skipPrefix = false } = {
        allowMeta: false,
        skipPrefix: false
      }) {
        if (typeof paths === "string")
          paths = [paths];
        for (let path of paths) {
          path = path === "" ? path : path.charCodeAt(0) === 47 ? path : `/${path}`;
          if (this.config.prefix && !skipPrefix)
            path = this.config.prefix + path;
          if (localHook?.type)
            switch (localHook.type) {
              case "text":
                localHook.type = "text/plain";
                break;
              case "json":
                localHook.type = "application/json";
                break;
              case "formdata":
                localHook.type = "multipart/form-data";
                break;
              case "urlencoded":
                localHook.type = "application/x-www-form-urlencoded";
                break;
              case "arrayBuffer":
                localHook.type = "application/octet-stream";
                break;
              default:
                break;
            }
          const models = this.definitions.type;
          let cookieValidator = (0, utils_1.getSchemaValidator)(localHook?.cookie ?? this.validator?.cookie, {
            dynamic: !this.config.aot,
            models,
            additionalProperties: true
          });
          if ((0, handler_1.isNotEmpty)(this.config.cookie ?? {})) {
            if (cookieValidator) {
              cookieValidator.schema = (0, utils_1.mergeCookie)(
                // @ts-ignore
                cookieValidator.schema,
                this.config.cookie ?? {}
              );
            } else {
              cookieValidator = (0, utils_1.getSchemaValidator)(
                // @ts-ignore
                type_system_1.t.Cookie({}, this.config.cookie),
                {
                  dynamic: !this.config.aot,
                  models,
                  additionalProperties: true
                }
              );
            }
          }
          const validator = {
            body: (0, utils_1.getSchemaValidator)(localHook?.body ?? this.validator?.body, {
              dynamic: !this.config.aot,
              models
            }),
            headers: (0, utils_1.getSchemaValidator)(localHook?.headers ?? this.validator?.headers, {
              dynamic: !this.config.aot,
              models,
              additionalProperties: true
            }),
            params: (0, utils_1.getSchemaValidator)(localHook?.params ?? this.validator?.params, {
              dynamic: !this.config.aot,
              models
            }),
            query: (0, utils_1.getSchemaValidator)(localHook?.query ?? this.validator?.query, {
              dynamic: !this.config.aot,
              models
            }),
            cookie: cookieValidator,
            response: (0, utils_1.getResponseSchemaValidator)(localHook?.response ?? this.validator?.response, {
              dynamic: !this.config.aot,
              models
            })
          };
          const globalHook = this.event;
          const loosePath = path.endsWith("/") ? path.slice(0, path.length - 1) : path + "/";
          if (this.macros.length) {
            const createManager = /* @__PURE__ */ __name((stackName) => (type, fn) => {
              if (typeof type === "function" || Array.isArray(type)) {
                if (!localHook[stackName])
                  localHook[stackName] = [];
                if (typeof localHook[stackName] === "function")
                  localHook[stackName] = [localHook[stackName]];
                if (Array.isArray(type))
                  localHook[stackName] = localHook[stackName].concat(type);
                else
                  localHook[stackName].push(type);
                return;
              }
              const { insert = "after", stack = "local" } = type;
              if (stack === "global") {
                if (!Array.isArray(fn)) {
                  if (insert === "before") {
                    ;
                    globalHook[stackName].unshift(fn);
                  } else {
                    ;
                    globalHook[stackName].push(fn);
                  }
                } else {
                  if (insert === "before") {
                    globalHook[stackName] = fn.concat(globalHook[stackName]);
                  } else {
                    globalHook[stackName] = globalHook[stackName].concat(fn);
                  }
                }
                return;
              } else {
                if (!localHook[stackName])
                  localHook[stackName] = [];
                if (typeof localHook[stackName] === "function")
                  localHook[stackName] = [localHook[stackName]];
                if (!Array.isArray(fn)) {
                  if (insert === "before") {
                    ;
                    localHook[stackName].unshift(fn);
                  } else {
                    ;
                    localHook[stackName].push(fn);
                  }
                } else {
                  if (insert === "before") {
                    localHook[stackName] = fn.concat(localHook[stackName]);
                  } else {
                    localHook[stackName] = localHook[stackName].concat(fn);
                  }
                }
                return;
              }
            }, "createManager");
            const manager = {
              events: {
                global: globalHook,
                local: localHook
              },
              onParse: createManager("parse"),
              onTransform: createManager("transform"),
              onBeforeHandle: createManager("beforeHandle"),
              onAfterHandle: createManager("afterHandle"),
              onResponse: createManager("onResponse"),
              onError: createManager("error")
            };
            for (const macro of this.macros) {
              const customHookValues = {};
              for (const [key, value] of Object.entries(localHook ?? {})) {
                if (utils_1.primitiveHooks.includes(key))
                  continue;
                customHookValues[key] = value;
              }
              if (!macro.$elysiaChecksum)
                macro.$elysiaChecksum = [];
              const hash = (0, utils_1.checksum)(JSON.stringify(customHookValues));
              if (macro.$elysiaChecksum.includes(hash))
                continue;
              macro.$elysiaChecksum.push((0, utils_1.checksum)(JSON.stringify(customHookValues)));
              (0, utils_1.traceBackMacro)(macro(manager), localHook);
            }
          }
          const hooks = (0, utils_1.mergeHook)(globalHook, localHook);
          const isFn = typeof handle === "function";
          if (this.config.aot === false) {
            this.dynamicRouter.add(method, path, {
              validator,
              hooks,
              content: localHook?.type,
              handle
            });
            if (this.config.strictPath === false) {
              this.dynamicRouter.add(method, loosePath, {
                validator,
                hooks,
                content: localHook?.type,
                handle
              });
            }
            this.routes.push({
              method,
              path,
              composed: null,
              handler: handle,
              hooks
            });
            return;
          }
          const mainHandler = (0, compose_1.composeHandler)({
            path,
            method,
            hooks,
            validator,
            handler: handle,
            handleError: this.handleError,
            onRequest: this.event.request,
            config: this.config,
            definitions: allowMeta ? this.definitions.type : void 0,
            schema: allowMeta ? this.schema : void 0,
            getReporter: () => this.reporter,
            setHeader: this.setHeaders
          });
          if (!isFn) {
            const context = Object.assign({
              headers: {},
              query: {},
              params: {},
              body: void 0,
              request: new Request(`http://localhost${path}`),
              store: this.store,
              path,
              set: {
                headers: this.setHeaders ?? {},
                status: 200
              }
            }, this.decorators);
            let response2;
            for (const onRequest of Object.values(hooks.request)) {
              try {
                const inner = (0, handler_1.mapEarlyResponse)(onRequest(context), context.set);
                if (inner !== void 0) {
                  response2 = inner;
                  break;
                }
              } catch (error) {
                response2 = this.handleError(context, error);
                break;
              }
            }
            if (response2)
              mainHandler.response = response2;
            else {
              try {
                mainHandler.response = mainHandler(context);
              } catch (error) {
                mainHandler.response = this.handleError(context, error);
              }
            }
          }
          const existingRouteIndex = this.routes.findIndex((route) => route.path === path && route.method === method);
          if (existingRouteIndex !== -1) {
            this.routes.splice(existingRouteIndex, 1);
          }
          this.routes.push({
            method,
            path,
            composed: mainHandler,
            handler: handle,
            hooks
          });
          if (method === "$INTERNALWS") {
            const loose = this.config.strictPath ? void 0 : path.endsWith("/") ? path.slice(0, path.length - 1) : path + "/";
            if (path.indexOf(":") === -1 && path.indexOf("*") === -1) {
              const index = this.staticRouter.handlers.length;
              this.staticRouter.handlers.push(mainHandler);
              if (mainHandler.response instanceof Response)
                this.staticRouter.variables += `const st${index} = staticRouter.handlers[${index}].response
`;
              else
                this.staticRouter.variables += `const st${index} = staticRouter.handlers[${index}]
`;
              this.wsPaths[path] = index;
              if (loose)
                this.wsPaths[loose] = index;
            } else {
              this.wsRouter.add("ws", path, mainHandler);
              if (loose)
                this.wsRouter.add("ws", loose, mainHandler);
            }
            return;
          }
          if (path.indexOf(":") === -1 && path.indexOf("*") === -1) {
            const index = this.staticRouter.handlers.length;
            this.staticRouter.handlers.push(mainHandler);
            if (mainHandler.response instanceof Response)
              this.staticRouter.variables += `const st${index} = staticRouter.handlers[${index}].response
`;
            else
              this.staticRouter.variables += `const st${index} = staticRouter.handlers[${index}]
`;
            if (!this.staticRouter.map[path])
              this.staticRouter.map[path] = {
                code: ""
              };
            if (method === "ALL")
              this.staticRouter.map[path].all = `default: return st${index}(ctx)
`;
            else {
              if (mainHandler.response instanceof Response)
                this.staticRouter.map[path].code = `case '${method}': return st${index}.clone()
${this.staticRouter.map[path].code}`;
              else
                this.staticRouter.map[path].code = `case '${method}': return st${index}(ctx)
${this.staticRouter.map[path].code}`;
            }
            if (!this.config.strictPath) {
              if (!this.staticRouter.map[loosePath])
                this.staticRouter.map[loosePath] = {
                  code: ""
                };
              if (method === "ALL")
                this.staticRouter.map[loosePath].all = `default: return st${index}(ctx)
`;
              else {
                if (mainHandler.response instanceof Response)
                  this.staticRouter.map[loosePath].code = `case '${method}': return st${index}.clone()
${this.staticRouter.map[loosePath].code}`;
                else
                  this.staticRouter.map[loosePath].code = `case '${method}': return st${index}(ctx)
${this.staticRouter.map[loosePath].code}`;
              }
            }
          } else {
            this.router.add(method, path, mainHandler);
            if (!this.config.strictPath)
              this.router.add(method, path.endsWith("/") ? path.slice(0, path.length - 1) : path + "/", mainHandler);
          }
        }
      }
      headers(header) {
        if (!header)
          return this;
        if (!this.setHeaders)
          this.setHeaders = {};
        this.setHeaders = (0, utils_1.mergeDeep)(this.setHeaders, header);
        return this;
      }
      /**
       * ### start | Life cycle event
       * Called after server is ready for serving
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onStart(({ url, port }) => {
       *         console.log("Running at ${url}:${port}")
       *     })
       *     .listen(8080)
       * ```
       */
      onStart(handler) {
        this.on("start", handler);
        return this;
      }
      /**
       * ### request | Life cycle event
       * Called on every new request is accepted
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onRequest(({ method, url }) => {
       *         saveToAnalytic({ method, url })
       *     })
       * ```
       */
      onRequest(handler) {
        this.on("request", handler);
        return this;
      }
      /**
       * ### parse | Life cycle event
       * Callback function to handle body parsing
       *
       * If truthy value is returned, will be assigned to `context.body`
       * Otherwise will skip the callback and look for the next one.
       *
       * Equivalent to Express's body parser
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onParse((request, contentType) => {
       *         if(contentType === "application/json")
       *             return request.json()
       *     })
       * ```
       */
      onParse(parser) {
        this.on("parse", parser);
        return this;
      }
      /**
       * ### transform | Life cycle event
       * Assign or transform anything related to context before validation.
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onTransform(({ params }) => {
       *         if(params.id)
       *             params.id = +params.id
       *     })
       * ```
       */
      onTransform(handler) {
        this.on("transform", handler);
        return this;
      }
      /**
       * ### After Handle | Life cycle event
       * Intercept request **after** main handler is called.
       *
       * If truthy value is returned, will be assigned as `Response`
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onAfterHandle((context, response) => {
       *         if(typeof response === "object")
       *             return JSON.stringify(response)
       *     })
       * ```
       */
      /**
       * Derive new property for each request with access to `Context`.
       *
       * If error is thrown, the scope will skip to handling error instead.
       *
       * ---
       * @example
       * new Elysia()
       *     .state('counter', 1)
       *     .derive(({ store }) => ({
       *         increase() {
       *             store.counter++
       *         }
       *     }))
       */
      resolve(resolver) {
        resolver.$elysia = "resolve";
        return this.onBeforeHandle(resolver);
      }
      /**
       * ### Before Handle | Life cycle event
       * Intercept request **before(()) main handler is called.
       *
       * If truthy value is returned, will be assigned as `Response` and skip the main handler
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onBeforeHandle(({ params: { id }, status }) => {
       *         if(id && !isExisted(id)) {
       * 	           status(401)
       *
       *             return "Unauthorized"
       * 	       }
       *     })
       * ```
       */
      onBeforeHandle(handler) {
        this.on("beforeHandle", handler);
        return this;
      }
      /**
       * ### After Handle | Life cycle event
       * Intercept request **after** main handler is called.
       *
       * If truthy value is returned, will be assigned as `Response`
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onAfterHandle((context, response) => {
       *         if(typeof response === "object")
       *             return JSON.stringify(response)
       *     })
       * ```
       */
      onAfterHandle(handler) {
        this.on("afterHandle", handler);
        return this;
      }
      /**
       * ### After Handle | Life cycle event
       * Intercept request **after** main handler is called.
       *
       * If truthy value is returned, will be assigned as `Response`
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .mapResponse((context, response) => {
       *         if(typeof response === "object")
       *             return JSON.stringify(response)
       *     })
       * ```
       */
      mapResponse(handler) {
        this.on("mapResponse", handler);
        return this;
      }
      /**
       * ### response | Life cycle event
       * Called when handler is executed
       * Good for analytic metrics
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onError(({ code }) => {
       *         if(code === "NOT_FOUND")
       *             return "Path not found :("
       *     })
       * ```
       */
      onResponse(handler) {
        this.on("response", handler);
        return this;
      }
      /**
       * ### After Handle | Life cycle event
       * Intercept request **after** main handler is called.
       *
       * If truthy value is returned, will be assigned as `Response`
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onAfterHandle((context, response) => {
       *         if(typeof response === "object")
       *             return JSON.stringify(response)
       *     })
       * ```
       */
      trace(handler) {
        this.reporter.on("event", (0, trace_1.createTraceListener)(() => this.reporter, this.event.trace.length, handler));
        this.on("trace", handler);
        return this;
      }
      error(name, error) {
        switch (typeof name) {
          case "string":
            error.prototype[error_1.ERROR_CODE] = name;
            this.definitions.error[name] = error;
            return this;
          case "function":
            this.definitions.error = name(this.definitions.error);
            return this;
        }
        for (const [code, error2] of Object.entries(name)) {
          error2.prototype[error_1.ERROR_CODE] = code;
          this.definitions.error[code] = error2;
        }
        return this;
      }
      /**
       * ### Error | Life cycle event
       * Called when error is thrown during processing request
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onError(({ code }) => {
       *         if(code === "NOT_FOUND")
       *             return "Path not found :("
       *     })
       * ```
       */
      onError(handler) {
        this.on("error", handler);
        return this;
      }
      /**
       * ### stop | Life cycle event
       * Called after server stop serving request
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .onStop((app) => {
       *         cleanup()
       *     })
       * ```
       */
      onStop(handler) {
        this.on("stop", handler);
        return this;
      }
      /**
       * ### on
       * Syntax sugar for attaching life cycle event by name
       *
       * Does the exact same thing as `.on[Event]()`
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .on('error', ({ code }) => {
       *         if(code === "NOT_FOUND")
       *             return "Path not found :("
       *     })
       * ```
       */
      on(type, handlers) {
        for (let handler of Array.isArray(handlers) ? handlers : [handlers]) {
          handler = (0, utils_1.asGlobal)(handler);
          switch (type) {
            case "start":
              this.event.start.push(handler);
              break;
            case "request":
              this.event.request.push(handler);
              break;
            case "parse":
              this.event.parse.splice(this.event.parse.length - 1, 0, handler);
              break;
            case "transform":
              this.event.transform.push(handler);
              break;
            case "beforeHandle":
              this.event.beforeHandle.push(handler);
              break;
            case "afterHandle":
              this.event.afterHandle.push(handler);
              break;
            case "mapResponse":
              this.event.mapResponse.push(handler);
              break;
            case "response":
              this.event.onResponse.push(handler);
              break;
            case "trace":
              this.event.trace.push(handler);
              break;
            case "error":
              this.event.error.push(handler);
              break;
            case "stop":
              this.event.stop.push(handler);
              break;
          }
        }
        return this;
      }
      /**
       * ### group
       * Encapsulate and group path with prefix
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .group('/v1', app => app
       *         .get('/', () => 'Hi')
       *         .get('/name', () => 'Elysia')
       *     })
       * ```
       */
      group(prefix, schemaOrRun, run) {
        const instance = new _Elysia({
          ...this.config,
          prefix: ""
        });
        instance.store = this.store;
        instance.definitions = this.definitions;
        instance.getServer = () => this.server;
        const isSchema = typeof schemaOrRun === "object";
        const sandbox = (isSchema ? run : schemaOrRun)(instance);
        this.decorators = (0, utils_1.mergeDeep)(this.decorators, instance.decorators);
        if (sandbox.event.request.length)
          this.event.request = [
            ...this.event.request,
            ...sandbox.event.request
          ];
        if (sandbox.event.onResponse.length)
          this.event.onResponse = [
            ...this.event.onResponse,
            ...sandbox.event.onResponse
          ];
        this.model(sandbox.definitions.type);
        Object.values(instance.routes).forEach(({ method, path, handler, hooks }) => {
          path = (isSchema ? "" : this.config.prefix) + prefix + path;
          if (isSchema) {
            const hook = schemaOrRun;
            const localHook = hooks;
            this.add(method, path, handler, (0, utils_1.mergeHook)(hook, {
              ...localHook,
              error: !localHook.error ? sandbox.event.error : Array.isArray(localHook.error) ? [...localHook.error, ...sandbox.event.error] : [localHook.error, ...sandbox.event.error]
            }));
          } else {
            this.add(method, path, handler, (0, utils_1.mergeHook)(hooks, {
              error: sandbox.event.error
            }), {
              skipPrefix: true
            });
          }
        });
        return this;
      }
      /**
       * ### guard
       * Encapsulate and pass hook into all child handler
       *
       * ---
       * @example
       * ```typescript
       * import { t } from 'elysia'
       *
       * new Elysia()
       *     .guard({
       *          schema: {
       *              body: t.Object({
       *                  username: t.String(),
       *                  password: t.String()
       *              })
       *          }
       *     }, app => app
       *         .get("/", () => 'Hi')
       *         .get("/name", () => 'Elysia')
       *     })
       * ```
       */
      guard(hook, run) {
        if (!run) {
          this.event = (0, utils_1.mergeLifeCycle)(this.event, hook);
          this.validator = {
            body: hook.body,
            headers: hook.headers,
            params: hook.params,
            query: hook.query,
            response: hook.response
          };
          return this;
        }
        const instance = new _Elysia({
          ...this.config,
          prefix: ""
        });
        instance.store = this.store;
        instance.definitions = this.definitions;
        const sandbox = run(instance);
        this.decorators = (0, utils_1.mergeDeep)(this.decorators, instance.decorators);
        if (sandbox.event.request.length)
          this.event.request = [
            ...this.event.request,
            ...sandbox.event.request
          ];
        if (sandbox.event.onResponse.length)
          this.event.onResponse = [
            ...this.event.onResponse,
            ...sandbox.event.onResponse
          ];
        this.model(sandbox.definitions.type);
        Object.values(instance.routes).forEach(({ method, path, handler, hooks: localHook }) => {
          this.add(method, path, handler, (0, utils_1.mergeHook)(hook, {
            ...localHook,
            error: !localHook.error ? sandbox.event.error : Array.isArray(localHook.error) ? [...localHook.error, ...sandbox.event.error] : [localHook.error, ...sandbox.event.error]
          }));
        });
        return this;
      }
      /**
       * ### use
       * Merge separate logic of Elysia with current
       *
       * ---
       * @example
       * ```typescript
       * const plugin = (app: Elysia) => app
       *     .get('/plugin', () => 'hi')
       *
       * new Elysia()
       *     .use(plugin)
       * ```
       */
      use(plugin2) {
        if (plugin2 instanceof Promise) {
          this.lazyLoadModules.push(plugin2.then((plugin3) => {
            if (typeof plugin3 === "function") {
              return plugin3(this);
            }
            if (typeof plugin3.default === "function")
              return plugin3.default(this);
            return this._use(plugin3);
          }).then((x) => x.compile()));
          return this;
        } else
          return this._use(plugin2);
        return this;
      }
      _use(plugin2) {
        if (typeof plugin2 === "function") {
          const instance = plugin2(this);
          if (instance instanceof Promise) {
            this.lazyLoadModules.push(instance.then((plugin3) => {
              if (plugin3 instanceof _Elysia) {
                this.compile();
                for (const { method, path, handler, hooks } of Object.values(plugin3.routes)) {
                  this.add(method, path, handler, (0, utils_1.mergeHook)(hooks, {
                    error: plugin3.event.error
                  }));
                }
                return plugin3;
              }
              if (typeof plugin3 === "function")
                return plugin3(this);
              if (typeof plugin3.default === "function")
                return plugin3.default(this);
              return this._use(plugin3);
            }).then((x) => x.compile()));
            return this;
          }
          return instance;
        }
        const { name, seed } = plugin2.config;
        plugin2.getServer = () => this.getServer();
        this.headers(plugin2.setHeaders);
        const isScoped = plugin2.config.scoped;
        if (isScoped) {
          if (name) {
            if (!(name in this.dependencies))
              this.dependencies[name] = [];
            const current = seed !== void 0 ? (0, utils_1.checksum)(name + JSON.stringify(seed)) : 0;
            if (this.dependencies[name].some(({ checksum }) => current === checksum))
              return this;
            this.dependencies[name].push(!this.config?.analytic ? {
              name: plugin2.config.name,
              seed: plugin2.config.seed,
              checksum: current,
              dependencies: plugin2.dependencies
            } : {
              name: plugin2.config.name,
              seed: plugin2.config.seed,
              checksum: current,
              dependencies: plugin2.dependencies,
              stack: plugin2.stack,
              routes: plugin2.routes,
              decorators: plugin2.decorators,
              store: plugin2.store,
              type: plugin2.definitions.type,
              error: plugin2.definitions.error,
              derive: plugin2.event.transform.filter((x) => x.$elysia === "derive").map((x) => ({
                fn: x.toString(),
                stack: new Error().stack ?? ""
              })),
              resolve: plugin2.event.transform.filter((x) => x.$elysia === "derive").map((x) => ({
                fn: x.toString(),
                stack: new Error().stack ?? ""
              }))
            });
          }
          plugin2.model(this.definitions.type);
          plugin2.error(this.definitions.error);
          plugin2.macros = [...this.macros, ...plugin2.macros];
          plugin2.onRequest((context) => {
            Object.assign(context, this.decorators);
            Object.assign(context.store, this.store);
          });
          plugin2.event.trace = [...this.event.trace, ...plugin2.event.trace];
          if (plugin2.config.aot)
            plugin2.compile();
          const instance = this.mount(plugin2.fetch);
          this.routes = this.routes.concat(instance.routes);
          return this;
        } else {
          plugin2.reporter = this.reporter;
          for (const trace of plugin2.event.trace)
            this.trace(trace);
          if (name) {
            if (!(name in this.dependencies))
              this.dependencies[name] = [];
            const current = seed !== void 0 ? (0, utils_1.checksum)(name + JSON.stringify(seed)) : 0;
            if (!this.dependencies[name].some(({ checksum }) => current === checksum))
              this.macros.push(...plugin2.macros);
          }
        }
        this.decorate(plugin2.decorators);
        this.state(plugin2.store);
        this.model(plugin2.definitions.type);
        this.error(plugin2.definitions.error);
        for (const { method, path, handler, hooks } of Object.values(plugin2.routes)) {
          this.add(method, path, handler, (0, utils_1.mergeHook)(hooks, {
            error: plugin2.event.error
          }));
        }
        if (!isScoped)
          if (name) {
            if (!(name in this.dependencies))
              this.dependencies[name] = [];
            const current = seed !== void 0 ? (0, utils_1.checksum)(name + JSON.stringify(seed)) : 0;
            if (this.dependencies[name].some(({ checksum }) => current === checksum))
              return this;
            this.dependencies[name].push(!this.config?.analytic ? {
              name: plugin2.config.name,
              seed: plugin2.config.seed,
              checksum: current,
              dependencies: plugin2.dependencies
            } : {
              name: plugin2.config.name,
              seed: plugin2.config.seed,
              checksum: current,
              dependencies: plugin2.dependencies,
              stack: plugin2.stack,
              routes: plugin2.routes,
              decorators: plugin2.decorators,
              store: plugin2.store,
              type: plugin2.definitions.type,
              error: plugin2.definitions.error,
              derive: plugin2.event.transform.filter((x) => x?.$elysia === "derive").map((x) => ({
                fn: x.toString(),
                stack: new Error().stack ?? ""
              })),
              resolve: plugin2.event.transform.filter((x) => x?.$elysia === "resolve").map((x) => ({
                fn: x.toString(),
                stack: new Error().stack ?? ""
              }))
            });
            this.event = (0, utils_1.mergeLifeCycle)(this.event, (0, utils_1.filterGlobalHook)(plugin2.event), current);
          } else {
            this.event = (0, utils_1.mergeLifeCycle)(this.event, (0, utils_1.filterGlobalHook)(plugin2.event));
          }
        return this;
      }
      macro(macro) {
        this.macros.push(macro);
        return this;
      }
      mount(path, handle) {
        if (path instanceof _Elysia || typeof path === "function" || path.length === 0 || path === "/") {
          const run = typeof path === "function" ? path : path instanceof _Elysia ? path.compile().fetch : handle instanceof _Elysia ? handle.compile().fetch : handle;
          const handler2 = /* @__PURE__ */ __name(async ({ request: request2, path: path2 }) => run(new Request((0, utils_1.replaceUrlPath)(request2.url, path2 || "/"), request2)), "handler");
          this.all("/", handler2, {
            type: "none"
          });
          this.all("/*", handler2, {
            type: "none"
          });
          return this;
        }
        const length = path.length;
        if (handle instanceof _Elysia)
          handle = handle.compile().fetch;
        const handler = /* @__PURE__ */ __name(async ({ request: request2, path: path2 }) => handle(new Request((0, utils_1.replaceUrlPath)(request2.url, path2.slice(length) || "/"), request2)), "handler");
        this.all(path, handler, {
          type: "none"
        });
        this.all(path + (path.endsWith("/") ? "*" : "/*"), handler, {
          type: "none"
        });
        return this;
      }
      /**
       * ### get
       * Register handler for path with method [GET]
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .get('/', () => 'hi')
       *     .get('/with-hook', () => 'hi', {
       *         schema: {
       *             response: t.String()
       *         }
       *     })
       * ```
       */
      get(path, handler, hook) {
        this.add("GET", path, handler, hook);
        return this;
      }
      /**
       * ### post
       * Register handler for path with method [POST]
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .post('/', () => 'hi')
       *     .post('/with-hook', () => 'hi', {
       *         schema: {
       *             response: t.String()
       *         }
       *     })
       * ```
       */
      post(path, handler, hook) {
        this.add("POST", path, handler, hook);
        return this;
      }
      /**
       * ### put
       * Register handler for path with method [PUT]
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .put('/', () => 'hi')
       *     .put('/with-hook', () => 'hi', {
       *         schema: {
       *             response: t.String()
       *         }
       *     })
       * ```
       */
      put(path, handler, hook) {
        this.add("PUT", path, handler, hook);
        return this;
      }
      /**
       * ### patch
       * Register handler for path with method [PATCH]
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .patch('/', () => 'hi')
       *     .patch('/with-hook', () => 'hi', {
       *         schema: {
       *             response: t.String()
       *         }
       *     })
       * ```
       */
      patch(path, handler, hook) {
        this.add("PATCH", path, handler, hook);
        return this;
      }
      /**
       * ### delete
       * Register handler for path with method [DELETE]
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .delete('/', () => 'hi')
       *     .delete('/with-hook', () => 'hi', {
       *         schema: {
       *             response: t.String()
       *         }
       *     })
       * ```
       */
      delete(path, handler, hook) {
        this.add("DELETE", path, handler, hook);
        return this;
      }
      /**
       * ### options
       * Register handler for path with method [OPTIONS]
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .options('/', () => 'hi')
       *     .options('/with-hook', () => 'hi', {
       *         schema: {
       *             response: t.String()
       *         }
       *     })
       * ```
       */
      options(path, handler, hook) {
        this.add("OPTIONS", path, handler, hook);
        return this;
      }
      /**
       * ### all
       * Register handler for path with any method
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .all('/', () => 'hi')
       * ```
       */
      all(path, handler, hook) {
        this.add("ALL", path, handler, hook);
        return this;
      }
      /**
       * ### head
       * Register handler for path with method [HEAD]
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .head('/', () => 'hi')
       *     .head('/with-hook', () => 'hi', {
       *         schema: {
       *             response: t.String()
       *         }
       *     })
       * ```
       */
      head(path, handler, hook) {
        this.add("HEAD", path, handler, hook);
        return this;
      }
      /**
       * ### connect
       * Register handler for path with method [CONNECT]
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .connect('/', () => 'hi')
       *     .connect('/with-hook', () => 'hi', {
       *         schema: {
       *             response: t.String()
       *         }
       *     })
       * ```
       */
      connect(path, handler, hook) {
        this.add("CONNECT", path, handler, hook);
        return this;
      }
      /**
       * ### ws
       * Register handler for path with method [ws]
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .ws('/', {
       *         message(ws, message) {
       *             ws.send(message)
       *         }
       *     })
       * ```
       */
      ws(path, options) {
        const transform = options.transformMessage ? Array.isArray(options.transformMessage) ? options.transformMessage : [options.transformMessage] : void 0;
        let server = null;
        const validateMessage = (0, utils_1.getSchemaValidator)(options?.body, {
          models: this.definitions.type
        });
        const validateResponse = (0, utils_1.getSchemaValidator)(options?.response, {
          models: this.definitions.type
        });
        const parseMessage = /* @__PURE__ */ __name((message) => {
          if (typeof message === "string") {
            const start = message?.charCodeAt(0);
            if (start === 47 || start === 123)
              try {
                message = JSON.parse(message);
              } catch {
              }
            else if ((0, utils_1.isNumericString)(message))
              message = +message;
          }
          if (transform?.length)
            for (let i = 0; i < transform.length; i++) {
              const temp = transform[i](message);
              if (temp !== void 0)
                message = temp;
            }
          return message;
        }, "parseMessage");
        this.route(
          "$INTERNALWS",
          path,
          // @ts-ignore
          (context) => {
            const { set, path: path2, qi, headers, query, params } = context;
            if (server === null)
              server = this.getServer();
            if (server?.upgrade(context.request, {
              headers: typeof options.upgrade === "function" ? options.upgrade(context) : options.upgrade,
              data: {
                validator: validateResponse,
                open(ws) {
                  options.open?.(new ws_1.ElysiaWS(ws, context));
                },
                message: (ws, msg) => {
                  const message = parseMessage(msg);
                  if (validateMessage?.Check(message) === false)
                    return void ws.send(new error_1.ValidationError("message", validateMessage, message).message);
                  options.message?.(new ws_1.ElysiaWS(ws, context), message);
                },
                drain(ws) {
                  options.drain?.(new ws_1.ElysiaWS(ws, context));
                },
                close(ws, code, reason) {
                  options.close?.(new ws_1.ElysiaWS(ws, context), code, reason);
                }
              }
            }))
              return;
            set.status = 400;
            return "Expected a websocket connection";
          },
          {
            beforeHandle: options.beforeHandle,
            transform: options.transform,
            headers: options.headers,
            params: options.params,
            query: options.query
          }
        );
        return this;
      }
      /**
       * ### route
       * Register handler for path with custom method
       *
       * ---
       * @example
       * ```typescript
       * import { Elysia, t } from 'elysia'
       *
       * new Elysia()
       *     .route('CUSTOM', '/', () => 'hi')
       *     .route('CUSTOM', '/with-hook', () => 'hi', {
       *         schema: {
       *             response: t.String()
       *         }
       *     })
       * ```
       */
      route(method, path, handler, { config, ...hook } = {
        config: {
          allowMeta: false
        }
      }) {
        this.add(method, path, handler, hook, config);
        return this;
      }
      /**
       * ### state
       * Assign global mutatable state accessible for all handler
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .state('counter', 0)
       *     .get('/', (({ counter }) => ++counter)
       * ```
       */
      state(name, value) {
        switch (typeof name) {
          case "object":
            this.store = (0, utils_1.mergeDeep)(this.store, name);
            return this;
          case "function":
            this.store = name(this.store);
            return this;
        }
        if (!(name in this.store)) {
          ;
          this.store[name] = value;
        }
        return this;
      }
      /**
       * ### decorate
       * Define custom method to `Context` accessible for all handler
       *
       * ---
       * @example
       * ```typescript
       * new Elysia()
       *     .decorate('getDate', () => Date.now())
       *     .get('/', (({ getDate }) => getDate())
       * ```
       */
      decorate(name, value) {
        switch (typeof name) {
          case "object":
            this.decorators = (0, utils_1.mergeDeep)(this.decorators, name);
            return this;
          case "function":
            this.decorators = name(this.decorators);
            return this;
        }
        if (!(name in this.decorators))
          this.decorators[name] = value;
        return this;
      }
      /**
       * Derive new property for each request with access to `Context`.
       *
       * If error is thrown, the scope will skip to handling error instead.
       *
       * ---
       * @example
       * new Elysia()
       *     .state('counter', 1)
       *     .derive(({ store }) => ({
       *         increase() {
       *             store.counter++
       *         }
       *     }))
       */
      derive(transform) {
        transform.$elysia = "derive";
        return this.onTransform(transform);
      }
      model(name, model) {
        switch (typeof name) {
          case "object":
            Object.entries(name).forEach(([key, value]) => {
              if (!(key in this.definitions.type))
                this.definitions.type[key] = value;
            });
            return this;
          case "function":
            this.definitions.type = name(this.definitions.type);
            return this;
        }
        ;
        this.definitions.type[name] = model;
        return this;
      }
      mapDerive(mapper) {
        mapper.$elysia = "derive";
        return this.onTransform(mapper);
      }
      affix(base, type, word) {
        if (word === "")
          return this;
        const delimieter = ["_", "-", " "];
        const capitalize = /* @__PURE__ */ __name((word2) => word2[0].toUpperCase() + word2.slice(1), "capitalize");
        const joinKey = base === "prefix" ? (prefix, word2) => delimieter.includes(prefix.at(-1) ?? "") ? prefix + word2 : prefix + capitalize(word2) : delimieter.includes(word.at(-1) ?? "") ? (suffix, word2) => word2 + suffix : (suffix, word2) => word2 + capitalize(suffix);
        const remap = /* @__PURE__ */ __name((type2) => {
          const store = {};
          switch (type2) {
            case "decorator":
              for (const key in this.decorators)
                store[joinKey(word, key)] = this.decorators[key];
              this.decorators = store;
              break;
            case "state":
              for (const key in this.store)
                store[joinKey(word, key)] = this.store[key];
              this.store = store;
              break;
            case "model":
              for (const key in this.definitions.type)
                store[joinKey(word, key)] = this.definitions.type[key];
              this.definitions.type = store;
              break;
            case "error":
              for (const key in this.definitions.error)
                store[joinKey(word, key)] = this.definitions.error[key];
              this.definitions.error = store;
              break;
          }
        }, "remap");
        const types = Array.isArray(type) ? type : [type];
        for (const type2 of types.some((x) => x === "all") ? ["decorator", "state", "model", "error"] : types)
          remap(type2);
        return this;
      }
      prefix(type, word) {
        return this.affix("prefix", type, word);
      }
      suffix(type, word) {
        return this.affix("suffix", type, word);
      }
      compile() {
        this.fetch = this.config.aot ? (0, compose_1.composeGeneralHandler)(this) : (0, dynamic_handle_1.createDynamicHandler)(this);
        if (typeof this.server?.reload === "function")
          this.server.reload({
            ...this.server,
            fetch: this.fetch
          });
        return this;
      }
      /**
       * Wait until all lazy loaded modules all load is fully
       */
      get modules() {
        return Promise.all(this.lazyLoadModules);
      }
    };
    exports.default = Elysia3;
    exports.Elysia = Elysia3;
    var handler_2 = require_handler();
    Object.defineProperty(exports, "mapResponse", { enumerable: true, get: function() {
      return handler_2.mapResponse;
    } });
    Object.defineProperty(exports, "mapCompactResponse", { enumerable: true, get: function() {
      return handler_2.mapCompactResponse;
    } });
    Object.defineProperty(exports, "mapEarlyResponse", { enumerable: true, get: function() {
      return handler_2.mapEarlyResponse;
    } });
    var type_system_2 = require_type_system();
    Object.defineProperty(exports, "t", { enumerable: true, get: function() {
      return type_system_2.t;
    } });
    var cookie_1 = require_cookie2();
    Object.defineProperty(exports, "Cookie", { enumerable: true, get: function() {
      return cookie_1.Cookie;
    } });
    var utils_2 = require_utils();
    Object.defineProperty(exports, "getSchemaValidator", { enumerable: true, get: function() {
      return utils_2.getSchemaValidator;
    } });
    Object.defineProperty(exports, "mergeDeep", { enumerable: true, get: function() {
      return utils_2.mergeDeep;
    } });
    Object.defineProperty(exports, "mergeHook", { enumerable: true, get: function() {
      return utils_2.mergeHook;
    } });
    Object.defineProperty(exports, "mergeObjectArray", { enumerable: true, get: function() {
      return utils_2.mergeObjectArray;
    } });
    Object.defineProperty(exports, "getResponseSchemaValidator", { enumerable: true, get: function() {
      return utils_2.getResponseSchemaValidator;
    } });
    var error_2 = require_error3();
    Object.defineProperty(exports, "error", { enumerable: true, get: function() {
      return error_2.error;
    } });
    Object.defineProperty(exports, "ParseError", { enumerable: true, get: function() {
      return error_2.ParseError;
    } });
    Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function() {
      return error_2.NotFoundError;
    } });
    Object.defineProperty(exports, "ValidationError", { enumerable: true, get: function() {
      return error_2.ValidationError;
    } });
    Object.defineProperty(exports, "InternalServerError", { enumerable: true, get: function() {
      return error_2.InternalServerError;
    } });
    Object.defineProperty(exports, "InvalidCookieSignature", { enumerable: true, get: function() {
      return error_2.InvalidCookieSignature;
    } });
  }
});

// node_modules/.pnpm/pino-std-serializers@6.2.2/node_modules/pino-std-serializers/lib/err-helpers.js
var require_err_helpers = __commonJS({
  "node_modules/.pnpm/pino-std-serializers@6.2.2/node_modules/pino-std-serializers/lib/err-helpers.js"(exports, module) {
    "use strict";
    var isErrorLike = /* @__PURE__ */ __name((err) => {
      return err && typeof err.message === "string";
    }, "isErrorLike");
    var getErrorCause = /* @__PURE__ */ __name((err) => {
      if (!err)
        return;
      const cause = err.cause;
      if (typeof cause === "function") {
        const causeResult = err.cause();
        return isErrorLike(causeResult) ? causeResult : void 0;
      } else {
        return isErrorLike(cause) ? cause : void 0;
      }
    }, "getErrorCause");
    var _stackWithCauses = /* @__PURE__ */ __name((err, seen) => {
      if (!isErrorLike(err))
        return "";
      const stack = err.stack || "";
      if (seen.has(err)) {
        return stack + "\ncauses have become circular...";
      }
      const cause = getErrorCause(err);
      if (cause) {
        seen.add(err);
        return stack + "\ncaused by: " + _stackWithCauses(cause, seen);
      } else {
        return stack;
      }
    }, "_stackWithCauses");
    var stackWithCauses = /* @__PURE__ */ __name((err) => _stackWithCauses(err, /* @__PURE__ */ new Set()), "stackWithCauses");
    var _messageWithCauses = /* @__PURE__ */ __name((err, seen, skip) => {
      if (!isErrorLike(err))
        return "";
      const message = skip ? "" : err.message || "";
      if (seen.has(err)) {
        return message + ": ...";
      }
      const cause = getErrorCause(err);
      if (cause) {
        seen.add(err);
        const skipIfVErrorStyleCause = typeof err.cause === "function";
        return message + (skipIfVErrorStyleCause ? "" : ": ") + _messageWithCauses(cause, seen, skipIfVErrorStyleCause);
      } else {
        return message;
      }
    }, "_messageWithCauses");
    var messageWithCauses = /* @__PURE__ */ __name((err) => _messageWithCauses(err, /* @__PURE__ */ new Set()), "messageWithCauses");
    module.exports = {
      isErrorLike,
      getErrorCause,
      stackWithCauses,
      messageWithCauses
    };
  }
});

// node_modules/.pnpm/pino-std-serializers@6.2.2/node_modules/pino-std-serializers/lib/err-proto.js
var require_err_proto = __commonJS({
  "node_modules/.pnpm/pino-std-serializers@6.2.2/node_modules/pino-std-serializers/lib/err-proto.js"(exports, module) {
    "use strict";
    var seen = Symbol("circular-ref-tag");
    var rawSymbol = Symbol("pino-raw-err-ref");
    var pinoErrProto = Object.create({}, {
      type: {
        enumerable: true,
        writable: true,
        value: void 0
      },
      message: {
        enumerable: true,
        writable: true,
        value: void 0
      },
      stack: {
        enumerable: true,
        writable: true,
        value: void 0
      },
      aggregateErrors: {
        enumerable: true,
        writable: true,
        value: void 0
      },
      raw: {
        enumerable: false,
        get: function() {
          return this[rawSymbol];
        },
        set: function(val) {
          this[rawSymbol] = val;
        }
      }
    });
    Object.defineProperty(pinoErrProto, rawSymbol, {
      writable: true,
      value: {}
    });
    module.exports = {
      pinoErrProto,
      pinoErrorSymbols: {
        seen,
        rawSymbol
      }
    };
  }
});

// node_modules/.pnpm/pino-std-serializers@6.2.2/node_modules/pino-std-serializers/lib/err.js
var require_err = __commonJS({
  "node_modules/.pnpm/pino-std-serializers@6.2.2/node_modules/pino-std-serializers/lib/err.js"(exports, module) {
    "use strict";
    module.exports = errSerializer;
    var { messageWithCauses, stackWithCauses, isErrorLike } = require_err_helpers();
    var { pinoErrProto, pinoErrorSymbols } = require_err_proto();
    var { seen } = pinoErrorSymbols;
    var { toString } = Object.prototype;
    function errSerializer(err) {
      if (!isErrorLike(err)) {
        return err;
      }
      err[seen] = void 0;
      const _err = Object.create(pinoErrProto);
      _err.type = toString.call(err.constructor) === "[object Function]" ? err.constructor.name : err.name;
      _err.message = messageWithCauses(err);
      _err.stack = stackWithCauses(err);
      if (Array.isArray(err.errors)) {
        _err.aggregateErrors = err.errors.map((err2) => errSerializer(err2));
      }
      for (const key in err) {
        if (_err[key] === void 0) {
          const val = err[key];
          if (isErrorLike(val)) {
            if (key !== "cause" && !Object.prototype.hasOwnProperty.call(val, seen)) {
              _err[key] = errSerializer(val);
            }
          } else {
            _err[key] = val;
          }
        }
      }
      delete err[seen];
      _err.raw = err;
      return _err;
    }
    __name(errSerializer, "errSerializer");
  }
});

// node_modules/.pnpm/pino-std-serializers@6.2.2/node_modules/pino-std-serializers/lib/err-with-cause.js
var require_err_with_cause = __commonJS({
  "node_modules/.pnpm/pino-std-serializers@6.2.2/node_modules/pino-std-serializers/lib/err-with-cause.js"(exports, module) {
    "use strict";
    module.exports = errWithCauseSerializer;
    var { isErrorLike } = require_err_helpers();
    var { pinoErrProto, pinoErrorSymbols } = require_err_proto();
    var { seen } = pinoErrorSymbols;
    var { toString } = Object.prototype;
    function errWithCauseSerializer(err) {
      if (!isErrorLike(err)) {
        return err;
      }
      err[seen] = void 0;
      const _err = Object.create(pinoErrProto);
      _err.type = toString.call(err.constructor) === "[object Function]" ? err.constructor.name : err.name;
      _err.message = err.message;
      _err.stack = err.stack;
      if (Array.isArray(err.errors)) {
        _err.aggregateErrors = err.errors.map((err2) => errWithCauseSerializer(err2));
      }
      if (isErrorLike(err.cause) && !Object.prototype.hasOwnProperty.call(err.cause, seen)) {
        _err.cause = errWithCauseSerializer(err.cause);
      }
      for (const key in err) {
        if (_err[key] === void 0) {
          const val = err[key];
          if (isErrorLike(val)) {
            if (!Object.prototype.hasOwnProperty.call(val, seen)) {
              _err[key] = errWithCauseSerializer(val);
            }
          } else {
            _err[key] = val;
          }
        }
      }
      delete err[seen];
      _err.raw = err;
      return _err;
    }
    __name(errWithCauseSerializer, "errWithCauseSerializer");
  }
});

// node_modules/.pnpm/pino-std-serializers@6.2.2/node_modules/pino-std-serializers/lib/req.js
var require_req = __commonJS({
  "node_modules/.pnpm/pino-std-serializers@6.2.2/node_modules/pino-std-serializers/lib/req.js"(exports, module) {
    "use strict";
    module.exports = {
      mapHttpRequest,
      reqSerializer
    };
    var rawSymbol = Symbol("pino-raw-req-ref");
    var pinoReqProto = Object.create({}, {
      id: {
        enumerable: true,
        writable: true,
        value: ""
      },
      method: {
        enumerable: true,
        writable: true,
        value: ""
      },
      url: {
        enumerable: true,
        writable: true,
        value: ""
      },
      query: {
        enumerable: true,
        writable: true,
        value: ""
      },
      params: {
        enumerable: true,
        writable: true,
        value: ""
      },
      headers: {
        enumerable: true,
        writable: true,
        value: {}
      },
      remoteAddress: {
        enumerable: true,
        writable: true,
        value: ""
      },
      remotePort: {
        enumerable: true,
        writable: true,
        value: ""
      },
      raw: {
        enumerable: false,
        get: function() {
          return this[rawSymbol];
        },
        set: function(val) {
          this[rawSymbol] = val;
        }
      }
    });
    Object.defineProperty(pinoReqProto, rawSymbol, {
      writable: true,
      value: {}
    });
    function reqSerializer(req) {
      const connection = req.info || req.socket;
      const _req = Object.create(pinoReqProto);
      _req.id = typeof req.id === "function" ? req.id() : req.id || (req.info ? req.info.id : void 0);
      _req.method = req.method;
      if (req.originalUrl) {
        _req.url = req.originalUrl;
      } else {
        const path = req.path;
        _req.url = typeof path === "string" ? path : req.url ? req.url.path || req.url : void 0;
      }
      if (req.query) {
        _req.query = req.query;
      }
      if (req.params) {
        _req.params = req.params;
      }
      _req.headers = req.headers;
      _req.remoteAddress = connection && connection.remoteAddress;
      _req.remotePort = connection && connection.remotePort;
      _req.raw = req.raw || req;
      return _req;
    }
    __name(reqSerializer, "reqSerializer");
    function mapHttpRequest(req) {
      return {
        req: reqSerializer(req)
      };
    }
    __name(mapHttpRequest, "mapHttpRequest");
  }
});

// node_modules/.pnpm/pino-std-serializers@6.2.2/node_modules/pino-std-serializers/lib/res.js
var require_res = __commonJS({
  "node_modules/.pnpm/pino-std-serializers@6.2.2/node_modules/pino-std-serializers/lib/res.js"(exports, module) {
    "use strict";
    module.exports = {
      mapHttpResponse,
      resSerializer
    };
    var rawSymbol = Symbol("pino-raw-res-ref");
    var pinoResProto = Object.create({}, {
      statusCode: {
        enumerable: true,
        writable: true,
        value: 0
      },
      headers: {
        enumerable: true,
        writable: true,
        value: ""
      },
      raw: {
        enumerable: false,
        get: function() {
          return this[rawSymbol];
        },
        set: function(val) {
          this[rawSymbol] = val;
        }
      }
    });
    Object.defineProperty(pinoResProto, rawSymbol, {
      writable: true,
      value: {}
    });
    function resSerializer(res) {
      const _res = Object.create(pinoResProto);
      _res.statusCode = res.headersSent ? res.statusCode : null;
      _res.headers = res.getHeaders ? res.getHeaders() : res._headers;
      _res.raw = res;
      return _res;
    }
    __name(resSerializer, "resSerializer");
    function mapHttpResponse(res) {
      return {
        res: resSerializer(res)
      };
    }
    __name(mapHttpResponse, "mapHttpResponse");
  }
});

// node_modules/.pnpm/pino-std-serializers@6.2.2/node_modules/pino-std-serializers/index.js
var require_pino_std_serializers = __commonJS({
  "node_modules/.pnpm/pino-std-serializers@6.2.2/node_modules/pino-std-serializers/index.js"(exports, module) {
    "use strict";
    var errSerializer = require_err();
    var errWithCauseSerializer = require_err_with_cause();
    var reqSerializers = require_req();
    var resSerializers = require_res();
    module.exports = {
      err: errSerializer,
      errWithCause: errWithCauseSerializer,
      mapHttpRequest: reqSerializers.mapHttpRequest,
      mapHttpResponse: resSerializers.mapHttpResponse,
      req: reqSerializers.reqSerializer,
      res: resSerializers.resSerializer,
      wrapErrorSerializer: /* @__PURE__ */ __name(function wrapErrorSerializer(customSerializer) {
        if (customSerializer === errSerializer)
          return customSerializer;
        return /* @__PURE__ */ __name(function wrapErrSerializer(err) {
          return customSerializer(errSerializer(err));
        }, "wrapErrSerializer");
      }, "wrapErrorSerializer"),
      wrapRequestSerializer: /* @__PURE__ */ __name(function wrapRequestSerializer(customSerializer) {
        if (customSerializer === reqSerializers.reqSerializer)
          return customSerializer;
        return /* @__PURE__ */ __name(function wrappedReqSerializer(req) {
          return customSerializer(reqSerializers.reqSerializer(req));
        }, "wrappedReqSerializer");
      }, "wrapRequestSerializer"),
      wrapResponseSerializer: /* @__PURE__ */ __name(function wrapResponseSerializer(customSerializer) {
        if (customSerializer === resSerializers.resSerializer)
          return customSerializer;
        return /* @__PURE__ */ __name(function wrappedResSerializer(res) {
          return customSerializer(resSerializers.resSerializer(res));
        }, "wrappedResSerializer");
      }, "wrapResponseSerializer")
    };
  }
});

// node_modules/.pnpm/pino@8.17.1/node_modules/pino/lib/caller.js
var require_caller = __commonJS({
  "node_modules/.pnpm/pino@8.17.1/node_modules/pino/lib/caller.js"(exports, module) {
    "use strict";
    function noOpPrepareStackTrace(_, stack) {
      return stack;
    }
    __name(noOpPrepareStackTrace, "noOpPrepareStackTrace");
    module.exports = /* @__PURE__ */ __name(function getCallers() {
      const originalPrepare = Error.prepareStackTrace;
      Error.prepareStackTrace = noOpPrepareStackTrace;
      const stack = new Error().stack;
      Error.prepareStackTrace = originalPrepare;
      if (!Array.isArray(stack)) {
        return void 0;
      }
      const entries = stack.slice(2);
      const fileNames = [];
      for (const entry of entries) {
        if (!entry) {
          continue;
        }
        fileNames.push(entry.getFileName());
      }
      return fileNames;
    }, "getCallers");
  }
});

// node_modules/.pnpm/fast-redact@3.3.0/node_modules/fast-redact/lib/validator.js
var require_validator = __commonJS({
  "node_modules/.pnpm/fast-redact@3.3.0/node_modules/fast-redact/lib/validator.js"(exports, module) {
    "use strict";
    module.exports = validator;
    function validator(opts = {}) {
      const {
        ERR_PATHS_MUST_BE_STRINGS = /* @__PURE__ */ __name(() => "fast-redact - Paths must be (non-empty) strings", "ERR_PATHS_MUST_BE_STRINGS"),
        ERR_INVALID_PATH = /* @__PURE__ */ __name((s) => `fast-redact \u2013 Invalid path (${s})`, "ERR_INVALID_PATH")
      } = opts;
      return /* @__PURE__ */ __name(function validate({ paths }) {
        paths.forEach((s) => {
          if (typeof s !== "string") {
            throw Error(ERR_PATHS_MUST_BE_STRINGS());
          }
          try {
            if (/〇/.test(s))
              throw Error();
            const expr = (s[0] === "[" ? "" : ".") + s.replace(/^\*/, "\u3007").replace(/\.\*/g, ".\u3007").replace(/\[\*\]/g, "[\u3007]");
            if (/\n|\r|;/.test(expr))
              throw Error();
            if (/\/\*/.test(expr))
              throw Error();
            Function(`
            'use strict'
            const o = new Proxy({}, { get: () => o, set: () => { throw Error() } });
            const \u3007 = null;
            o${expr}
            if ([o${expr}].length !== 1) throw Error()`)();
          } catch (e) {
            throw Error(ERR_INVALID_PATH(s));
          }
        });
      }, "validate");
    }
    __name(validator, "validator");
  }
});

// node_modules/.pnpm/fast-redact@3.3.0/node_modules/fast-redact/lib/rx.js
var require_rx = __commonJS({
  "node_modules/.pnpm/fast-redact@3.3.0/node_modules/fast-redact/lib/rx.js"(exports, module) {
    "use strict";
    module.exports = /[^.[\]]+|\[((?:.)*?)\]/g;
  }
});

// node_modules/.pnpm/fast-redact@3.3.0/node_modules/fast-redact/lib/parse.js
var require_parse3 = __commonJS({
  "node_modules/.pnpm/fast-redact@3.3.0/node_modules/fast-redact/lib/parse.js"(exports, module) {
    "use strict";
    var rx = require_rx();
    module.exports = parse;
    function parse({ paths }) {
      const wildcards = [];
      var wcLen = 0;
      const secret = paths.reduce(function(o, strPath, ix) {
        var path = strPath.match(rx).map((p) => p.replace(/'|"|`/g, ""));
        const leadingBracket = strPath[0] === "[";
        path = path.map((p) => {
          if (p[0] === "[")
            return p.substr(1, p.length - 2);
          else
            return p;
        });
        const star = path.indexOf("*");
        if (star > -1) {
          const before = path.slice(0, star);
          const beforeStr = before.join(".");
          const after = path.slice(star + 1, path.length);
          const nested = after.length > 0;
          wcLen++;
          wildcards.push({
            before,
            beforeStr,
            after,
            nested
          });
        } else {
          o[strPath] = {
            path,
            val: void 0,
            precensored: false,
            circle: "",
            escPath: JSON.stringify(strPath),
            leadingBracket
          };
        }
        return o;
      }, {});
      return { wildcards, wcLen, secret };
    }
    __name(parse, "parse");
  }
});

// node_modules/.pnpm/fast-redact@3.3.0/node_modules/fast-redact/lib/redactor.js
var require_redactor = __commonJS({
  "node_modules/.pnpm/fast-redact@3.3.0/node_modules/fast-redact/lib/redactor.js"(exports, module) {
    "use strict";
    var rx = require_rx();
    module.exports = redactor;
    function redactor({ secret, serialize, wcLen, strict, isCensorFct, censorFctTakesPath }, state) {
      const redact = Function("o", `
    if (typeof o !== 'object' || o == null) {
      ${strictImpl(strict, serialize)}
    }
    const { censor, secret } = this
    ${redactTmpl(secret, isCensorFct, censorFctTakesPath)}
    this.compileRestore()
    ${dynamicRedactTmpl(wcLen > 0, isCensorFct, censorFctTakesPath)}
    ${resultTmpl(serialize)}
  `).bind(state);
      if (serialize === false) {
        redact.restore = (o) => state.restore(o);
      }
      return redact;
    }
    __name(redactor, "redactor");
    function redactTmpl(secret, isCensorFct, censorFctTakesPath) {
      return Object.keys(secret).map((path) => {
        const { escPath, leadingBracket, path: arrPath } = secret[path];
        const skip = leadingBracket ? 1 : 0;
        const delim = leadingBracket ? "" : ".";
        const hops = [];
        var match;
        while ((match = rx.exec(path)) !== null) {
          const [, ix] = match;
          const { index, input } = match;
          if (index > skip)
            hops.push(input.substring(0, index - (ix ? 0 : 1)));
        }
        var existence = hops.map((p) => `o${delim}${p}`).join(" && ");
        if (existence.length === 0)
          existence += `o${delim}${path} != null`;
        else
          existence += ` && o${delim}${path} != null`;
        const circularDetection = `
      switch (true) {
        ${hops.reverse().map((p) => `
          case o${delim}${p} === censor:
            secret[${escPath}].circle = ${JSON.stringify(p)}
            break
        `).join("\n")}
      }
    `;
        const censorArgs = censorFctTakesPath ? `val, ${JSON.stringify(arrPath)}` : `val`;
        return `
      if (${existence}) {
        const val = o${delim}${path}
        if (val === censor) {
          secret[${escPath}].precensored = true
        } else {
          secret[${escPath}].val = val
          o${delim}${path} = ${isCensorFct ? `censor(${censorArgs})` : "censor"}
          ${circularDetection}
        }
      }
    `;
      }).join("\n");
    }
    __name(redactTmpl, "redactTmpl");
    function dynamicRedactTmpl(hasWildcards, isCensorFct, censorFctTakesPath) {
      return hasWildcards === true ? `
    {
      const { wildcards, wcLen, groupRedact, nestedRedact } = this
      for (var i = 0; i < wcLen; i++) {
        const { before, beforeStr, after, nested } = wildcards[i]
        if (nested === true) {
          secret[beforeStr] = secret[beforeStr] || []
          nestedRedact(secret[beforeStr], o, before, after, censor, ${isCensorFct}, ${censorFctTakesPath})
        } else secret[beforeStr] = groupRedact(o, before, censor, ${isCensorFct}, ${censorFctTakesPath})
      }
    }
  ` : "";
    }
    __name(dynamicRedactTmpl, "dynamicRedactTmpl");
    function resultTmpl(serialize) {
      return serialize === false ? `return o` : `
    var s = this.serialize(o)
    this.restore(o)
    return s
  `;
    }
    __name(resultTmpl, "resultTmpl");
    function strictImpl(strict, serialize) {
      return strict === true ? `throw Error('fast-redact: primitives cannot be redacted')` : serialize === false ? `return o` : `return this.serialize(o)`;
    }
    __name(strictImpl, "strictImpl");
  }
});

// node_modules/.pnpm/fast-redact@3.3.0/node_modules/fast-redact/lib/modifiers.js
var require_modifiers = __commonJS({
  "node_modules/.pnpm/fast-redact@3.3.0/node_modules/fast-redact/lib/modifiers.js"(exports, module) {
    "use strict";
    module.exports = {
      groupRedact,
      groupRestore,
      nestedRedact,
      nestedRestore
    };
    function groupRestore({ keys, values, target }) {
      if (target == null)
        return;
      const length = keys.length;
      for (var i = 0; i < length; i++) {
        const k = keys[i];
        target[k] = values[i];
      }
    }
    __name(groupRestore, "groupRestore");
    function groupRedact(o, path, censor, isCensorFct, censorFctTakesPath) {
      const target = get(o, path);
      if (target == null)
        return { keys: null, values: null, target: null, flat: true };
      const keys = Object.keys(target);
      const keysLength = keys.length;
      const pathLength = path.length;
      const pathWithKey = censorFctTakesPath ? [...path] : void 0;
      const values = new Array(keysLength);
      for (var i = 0; i < keysLength; i++) {
        const key = keys[i];
        values[i] = target[key];
        if (censorFctTakesPath) {
          pathWithKey[pathLength] = key;
          target[key] = censor(target[key], pathWithKey);
        } else if (isCensorFct) {
          target[key] = censor(target[key]);
        } else {
          target[key] = censor;
        }
      }
      return { keys, values, target, flat: true };
    }
    __name(groupRedact, "groupRedact");
    function nestedRestore(instructions) {
      for (let i = 0; i < instructions.length; i++) {
        const { target, path, value } = instructions[i];
        let current = target;
        for (let i2 = path.length - 1; i2 > 0; i2--) {
          current = current[path[i2]];
        }
        current[path[0]] = value;
      }
    }
    __name(nestedRestore, "nestedRestore");
    function nestedRedact(store, o, path, ns, censor, isCensorFct, censorFctTakesPath) {
      const target = get(o, path);
      if (target == null)
        return;
      const keys = Object.keys(target);
      const keysLength = keys.length;
      for (var i = 0; i < keysLength; i++) {
        const key = keys[i];
        specialSet(store, target, key, path, ns, censor, isCensorFct, censorFctTakesPath);
      }
      return store;
    }
    __name(nestedRedact, "nestedRedact");
    function has(obj, prop) {
      return obj !== void 0 && obj !== null ? "hasOwn" in Object ? Object.hasOwn(obj, prop) : Object.prototype.hasOwnProperty.call(obj, prop) : false;
    }
    __name(has, "has");
    function specialSet(store, o, k, path, afterPath, censor, isCensorFct, censorFctTakesPath) {
      const afterPathLen = afterPath.length;
      const lastPathIndex = afterPathLen - 1;
      const originalKey = k;
      var i = -1;
      var n;
      var nv;
      var ov;
      var oov = null;
      var wc = null;
      var kIsWc;
      var wcov;
      var consecutive = false;
      var level = 0;
      var depth = 0;
      var redactPathCurrent = tree();
      ov = n = o[k];
      if (typeof n !== "object")
        return;
      while (n != null && ++i < afterPathLen) {
        depth += 1;
        k = afterPath[i];
        oov = ov;
        if (k !== "*" && !wc && !(typeof n === "object" && k in n)) {
          break;
        }
        if (k === "*") {
          if (wc === "*") {
            consecutive = true;
          }
          wc = k;
          if (i !== lastPathIndex) {
            continue;
          }
        }
        if (wc) {
          const wcKeys = Object.keys(n);
          for (var j = 0; j < wcKeys.length; j++) {
            const wck = wcKeys[j];
            wcov = n[wck];
            kIsWc = k === "*";
            if (consecutive) {
              redactPathCurrent = node(redactPathCurrent, wck, depth);
              level = i;
              ov = iterateNthLevel(wcov, level - 1, k, path, afterPath, censor, isCensorFct, censorFctTakesPath, originalKey, n, nv, ov, kIsWc, wck, i, lastPathIndex, redactPathCurrent, store, o[originalKey], depth + 1);
            } else {
              if (kIsWc || typeof wcov === "object" && wcov !== null && k in wcov) {
                if (kIsWc) {
                  ov = wcov;
                } else {
                  ov = wcov[k];
                }
                nv = i !== lastPathIndex ? ov : isCensorFct ? censorFctTakesPath ? censor(ov, [...path, originalKey, ...afterPath]) : censor(ov) : censor;
                if (kIsWc) {
                  const rv = restoreInstr(node(redactPathCurrent, wck, depth), ov, o[originalKey]);
                  store.push(rv);
                  n[wck] = nv;
                } else {
                  if (wcov[k] === nv) {
                  } else if (nv === void 0 && censor !== void 0 || has(wcov, k) && nv === ov) {
                    redactPathCurrent = node(redactPathCurrent, wck, depth);
                  } else {
                    redactPathCurrent = node(redactPathCurrent, wck, depth);
                    const rv = restoreInstr(node(redactPathCurrent, k, depth + 1), ov, o[originalKey]);
                    store.push(rv);
                    wcov[k] = nv;
                  }
                }
              }
            }
          }
          wc = null;
        } else {
          ov = n[k];
          redactPathCurrent = node(redactPathCurrent, k, depth);
          nv = i !== lastPathIndex ? ov : isCensorFct ? censorFctTakesPath ? censor(ov, [...path, originalKey, ...afterPath]) : censor(ov) : censor;
          if (has(n, k) && nv === ov || nv === void 0 && censor !== void 0) {
          } else {
            const rv = restoreInstr(redactPathCurrent, ov, o[originalKey]);
            store.push(rv);
            n[k] = nv;
          }
          n = n[k];
        }
        if (typeof n !== "object")
          break;
        if (ov === oov || typeof ov === "undefined") {
        }
      }
    }
    __name(specialSet, "specialSet");
    function get(o, p) {
      var i = -1;
      var l = p.length;
      var n = o;
      while (n != null && ++i < l) {
        n = n[p[i]];
      }
      return n;
    }
    __name(get, "get");
    function iterateNthLevel(wcov, level, k, path, afterPath, censor, isCensorFct, censorFctTakesPath, originalKey, n, nv, ov, kIsWc, wck, i, lastPathIndex, redactPathCurrent, store, parent, depth) {
      if (level === 0) {
        if (kIsWc || typeof wcov === "object" && wcov !== null && k in wcov) {
          if (kIsWc) {
            ov = wcov;
          } else {
            ov = wcov[k];
          }
          nv = i !== lastPathIndex ? ov : isCensorFct ? censorFctTakesPath ? censor(ov, [...path, originalKey, ...afterPath]) : censor(ov) : censor;
          if (kIsWc) {
            const rv = restoreInstr(redactPathCurrent, ov, parent);
            store.push(rv);
            n[wck] = nv;
          } else {
            if (wcov[k] === nv) {
            } else if (nv === void 0 && censor !== void 0 || has(wcov, k) && nv === ov) {
            } else {
              const rv = restoreInstr(node(redactPathCurrent, k, depth + 1), ov, parent);
              store.push(rv);
              wcov[k] = nv;
            }
          }
        }
      }
      for (const key in wcov) {
        if (typeof wcov[key] === "object") {
          redactPathCurrent = node(redactPathCurrent, key, depth);
          iterateNthLevel(wcov[key], level - 1, k, path, afterPath, censor, isCensorFct, censorFctTakesPath, originalKey, n, nv, ov, kIsWc, wck, i, lastPathIndex, redactPathCurrent, store, parent, depth + 1);
        }
      }
    }
    __name(iterateNthLevel, "iterateNthLevel");
    function tree() {
      return { parent: null, key: null, children: [], depth: 0 };
    }
    __name(tree, "tree");
    function node(parent, key, depth) {
      if (parent.depth === depth) {
        return node(parent.parent, key, depth);
      }
      var child = {
        parent,
        key,
        depth,
        children: []
      };
      parent.children.push(child);
      return child;
    }
    __name(node, "node");
    function restoreInstr(node2, value, target) {
      let current = node2;
      const path = [];
      do {
        path.push(current.key);
        current = current.parent;
      } while (current.parent != null);
      return { path, value, target };
    }
    __name(restoreInstr, "restoreInstr");
  }
});

// node_modules/.pnpm/fast-redact@3.3.0/node_modules/fast-redact/lib/restorer.js
var require_restorer = __commonJS({
  "node_modules/.pnpm/fast-redact@3.3.0/node_modules/fast-redact/lib/restorer.js"(exports, module) {
    "use strict";
    var { groupRestore, nestedRestore } = require_modifiers();
    module.exports = restorer;
    function restorer({ secret, wcLen }) {
      return /* @__PURE__ */ __name(function compileRestore() {
        if (this.restore)
          return;
        const paths = Object.keys(secret);
        const resetters = resetTmpl(secret, paths);
        const hasWildcards = wcLen > 0;
        const state = hasWildcards ? { secret, groupRestore, nestedRestore } : { secret };
        this.restore = Function(
          "o",
          restoreTmpl(resetters, paths, hasWildcards)
        ).bind(state);
      }, "compileRestore");
    }
    __name(restorer, "restorer");
    function resetTmpl(secret, paths) {
      return paths.map((path) => {
        const { circle, escPath, leadingBracket } = secret[path];
        const delim = leadingBracket ? "" : ".";
        const reset = circle ? `o.${circle} = secret[${escPath}].val` : `o${delim}${path} = secret[${escPath}].val`;
        const clear = `secret[${escPath}].val = undefined`;
        return `
      if (secret[${escPath}].val !== undefined) {
        try { ${reset} } catch (e) {}
        ${clear}
      }
    `;
      }).join("");
    }
    __name(resetTmpl, "resetTmpl");
    function restoreTmpl(resetters, paths, hasWildcards) {
      const dynamicReset = hasWildcards === true ? `
    const keys = Object.keys(secret)
    const len = keys.length
    for (var i = len - 1; i >= ${paths.length}; i--) {
      const k = keys[i]
      const o = secret[k]
      if (o.flat === true) this.groupRestore(o)
      else this.nestedRestore(o)
      secret[k] = null
    }
  ` : "";
      return `
    const secret = this.secret
    ${dynamicReset}
    ${resetters}
    return o
  `;
    }
    __name(restoreTmpl, "restoreTmpl");
  }
});

// node_modules/.pnpm/fast-redact@3.3.0/node_modules/fast-redact/lib/state.js
var require_state = __commonJS({
  "node_modules/.pnpm/fast-redact@3.3.0/node_modules/fast-redact/lib/state.js"(exports, module) {
    "use strict";
    module.exports = state;
    function state(o) {
      const {
        secret,
        censor,
        compileRestore,
        serialize,
        groupRedact,
        nestedRedact,
        wildcards,
        wcLen
      } = o;
      const builder = [{ secret, censor, compileRestore }];
      if (serialize !== false)
        builder.push({ serialize });
      if (wcLen > 0)
        builder.push({ groupRedact, nestedRedact, wildcards, wcLen });
      return Object.assign(...builder);
    }
    __name(state, "state");
  }
});

// node_modules/.pnpm/fast-redact@3.3.0/node_modules/fast-redact/index.js
var require_fast_redact = __commonJS({
  "node_modules/.pnpm/fast-redact@3.3.0/node_modules/fast-redact/index.js"(exports, module) {
    "use strict";
    var validator = require_validator();
    var parse = require_parse3();
    var redactor = require_redactor();
    var restorer = require_restorer();
    var { groupRedact, nestedRedact } = require_modifiers();
    var state = require_state();
    var rx = require_rx();
    var validate = validator();
    var noop = /* @__PURE__ */ __name((o) => o, "noop");
    noop.restore = noop;
    var DEFAULT_CENSOR = "[REDACTED]";
    fastRedact.rx = rx;
    fastRedact.validator = validator;
    module.exports = fastRedact;
    function fastRedact(opts = {}) {
      const paths = Array.from(new Set(opts.paths || []));
      const serialize = "serialize" in opts ? opts.serialize === false ? opts.serialize : typeof opts.serialize === "function" ? opts.serialize : JSON.stringify : JSON.stringify;
      const remove = opts.remove;
      if (remove === true && serialize !== JSON.stringify) {
        throw Error("fast-redact \u2013 remove option may only be set when serializer is JSON.stringify");
      }
      const censor = remove === true ? void 0 : "censor" in opts ? opts.censor : DEFAULT_CENSOR;
      const isCensorFct = typeof censor === "function";
      const censorFctTakesPath = isCensorFct && censor.length > 1;
      if (paths.length === 0)
        return serialize || noop;
      validate({ paths, serialize, censor });
      const { wildcards, wcLen, secret } = parse({ paths, censor });
      const compileRestore = restorer({ secret, wcLen });
      const strict = "strict" in opts ? opts.strict : true;
      return redactor({ secret, wcLen, serialize, strict, isCensorFct, censorFctTakesPath }, state({
        secret,
        censor,
        compileRestore,
        serialize,
        groupRedact,
        nestedRedact,
        wildcards,
        wcLen
      }));
    }
    __name(fastRedact, "fastRedact");
  }
});

// node_modules/.pnpm/pino@8.17.1/node_modules/pino/lib/symbols.js
var require_symbols3 = __commonJS({
  "node_modules/.pnpm/pino@8.17.1/node_modules/pino/lib/symbols.js"(exports, module) {
    "use strict";
    var setLevelSym = Symbol("pino.setLevel");
    var getLevelSym = Symbol("pino.getLevel");
    var levelValSym = Symbol("pino.levelVal");
    var useLevelLabelsSym = Symbol("pino.useLevelLabels");
    var useOnlyCustomLevelsSym = Symbol("pino.useOnlyCustomLevels");
    var mixinSym = Symbol("pino.mixin");
    var lsCacheSym = Symbol("pino.lsCache");
    var chindingsSym = Symbol("pino.chindings");
    var asJsonSym = Symbol("pino.asJson");
    var writeSym = Symbol("pino.write");
    var redactFmtSym = Symbol("pino.redactFmt");
    var timeSym = Symbol("pino.time");
    var timeSliceIndexSym = Symbol("pino.timeSliceIndex");
    var streamSym = Symbol("pino.stream");
    var stringifySym = Symbol("pino.stringify");
    var stringifySafeSym = Symbol("pino.stringifySafe");
    var stringifiersSym = Symbol("pino.stringifiers");
    var endSym = Symbol("pino.end");
    var formatOptsSym = Symbol("pino.formatOpts");
    var messageKeySym = Symbol("pino.messageKey");
    var errorKeySym = Symbol("pino.errorKey");
    var nestedKeySym = Symbol("pino.nestedKey");
    var nestedKeyStrSym = Symbol("pino.nestedKeyStr");
    var mixinMergeStrategySym = Symbol("pino.mixinMergeStrategy");
    var msgPrefixSym = Symbol("pino.msgPrefix");
    var wildcardFirstSym = Symbol("pino.wildcardFirst");
    var serializersSym = Symbol.for("pino.serializers");
    var formattersSym = Symbol.for("pino.formatters");
    var hooksSym = Symbol.for("pino.hooks");
    var needsMetadataGsym = Symbol.for("pino.metadata");
    module.exports = {
      setLevelSym,
      getLevelSym,
      levelValSym,
      useLevelLabelsSym,
      mixinSym,
      lsCacheSym,
      chindingsSym,
      asJsonSym,
      writeSym,
      serializersSym,
      redactFmtSym,
      timeSym,
      timeSliceIndexSym,
      streamSym,
      stringifySym,
      stringifySafeSym,
      stringifiersSym,
      endSym,
      formatOptsSym,
      messageKeySym,
      errorKeySym,
      nestedKeySym,
      wildcardFirstSym,
      needsMetadataGsym,
      useOnlyCustomLevelsSym,
      formattersSym,
      hooksSym,
      nestedKeyStrSym,
      mixinMergeStrategySym,
      msgPrefixSym
    };
  }
});

// node_modules/.pnpm/pino@8.17.1/node_modules/pino/lib/redaction.js
var require_redaction = __commonJS({
  "node_modules/.pnpm/pino@8.17.1/node_modules/pino/lib/redaction.js"(exports, module) {
    "use strict";
    var fastRedact = require_fast_redact();
    var { redactFmtSym, wildcardFirstSym } = require_symbols3();
    var { rx, validator } = fastRedact;
    var validate = validator({
      ERR_PATHS_MUST_BE_STRINGS: () => "pino \u2013 redacted paths must be strings",
      ERR_INVALID_PATH: (s) => `pino \u2013 redact paths array contains an invalid path (${s})`
    });
    var CENSOR = "[Redacted]";
    var strict = false;
    function redaction(opts, serialize) {
      const { paths, censor } = handle(opts);
      const shape = paths.reduce((o, str) => {
        rx.lastIndex = 0;
        const first = rx.exec(str);
        const next = rx.exec(str);
        let ns = first[1] !== void 0 ? first[1].replace(/^(?:"|'|`)(.*)(?:"|'|`)$/, "$1") : first[0];
        if (ns === "*") {
          ns = wildcardFirstSym;
        }
        if (next === null) {
          o[ns] = null;
          return o;
        }
        if (o[ns] === null) {
          return o;
        }
        const { index } = next;
        const nextPath = `${str.substr(index, str.length - 1)}`;
        o[ns] = o[ns] || [];
        if (ns !== wildcardFirstSym && o[ns].length === 0) {
          o[ns].push(...o[wildcardFirstSym] || []);
        }
        if (ns === wildcardFirstSym) {
          Object.keys(o).forEach(function(k) {
            if (o[k]) {
              o[k].push(nextPath);
            }
          });
        }
        o[ns].push(nextPath);
        return o;
      }, {});
      const result = {
        [redactFmtSym]: fastRedact({ paths, censor, serialize, strict })
      };
      const topCensor = /* @__PURE__ */ __name((...args) => {
        return typeof censor === "function" ? serialize(censor(...args)) : serialize(censor);
      }, "topCensor");
      return [...Object.keys(shape), ...Object.getOwnPropertySymbols(shape)].reduce((o, k) => {
        if (shape[k] === null) {
          o[k] = (value) => topCensor(value, [k]);
        } else {
          const wrappedCensor = typeof censor === "function" ? (value, path) => {
            return censor(value, [k, ...path]);
          } : censor;
          o[k] = fastRedact({
            paths: shape[k],
            censor: wrappedCensor,
            serialize,
            strict
          });
        }
        return o;
      }, result);
    }
    __name(redaction, "redaction");
    function handle(opts) {
      if (Array.isArray(opts)) {
        opts = { paths: opts, censor: CENSOR };
        validate(opts);
        return opts;
      }
      let { paths, censor = CENSOR, remove } = opts;
      if (Array.isArray(paths) === false) {
        throw Error("pino \u2013 redact must contain an array of strings");
      }
      if (remove === true)
        censor = void 0;
      validate({ paths, censor });
      return { paths, censor };
    }
    __name(handle, "handle");
    module.exports = redaction;
  }
});

// node_modules/.pnpm/pino@8.17.1/node_modules/pino/lib/time.js
var require_time = __commonJS({
  "node_modules/.pnpm/pino@8.17.1/node_modules/pino/lib/time.js"(exports, module) {
    "use strict";
    var nullTime = /* @__PURE__ */ __name(() => "", "nullTime");
    var epochTime = /* @__PURE__ */ __name(() => `,"time":${Date.now()}`, "epochTime");
    var unixTime = /* @__PURE__ */ __name(() => `,"time":${Math.round(Date.now() / 1e3)}`, "unixTime");
    var isoTime = /* @__PURE__ */ __name(() => `,"time":"${new Date(Date.now()).toISOString()}"`, "isoTime");
    module.exports = { nullTime, epochTime, unixTime, isoTime };
  }
});

// node_modules/.pnpm/quick-format-unescaped@4.0.4/node_modules/quick-format-unescaped/index.js
var require_quick_format_unescaped = __commonJS({
  "node_modules/.pnpm/quick-format-unescaped@4.0.4/node_modules/quick-format-unescaped/index.js"(exports, module) {
    "use strict";
    function tryStringify(o) {
      try {
        return JSON.stringify(o);
      } catch (e) {
        return '"[Circular]"';
      }
    }
    __name(tryStringify, "tryStringify");
    module.exports = format;
    function format(f, args, opts) {
      var ss = opts && opts.stringify || tryStringify;
      var offset = 1;
      if (typeof f === "object" && f !== null) {
        var len = args.length + offset;
        if (len === 1)
          return f;
        var objects = new Array(len);
        objects[0] = ss(f);
        for (var index = 1; index < len; index++) {
          objects[index] = ss(args[index]);
        }
        return objects.join(" ");
      }
      if (typeof f !== "string") {
        return f;
      }
      var argLen = args.length;
      if (argLen === 0)
        return f;
      var str = "";
      var a = 1 - offset;
      var lastPos = -1;
      var flen = f && f.length || 0;
      for (var i = 0; i < flen; ) {
        if (f.charCodeAt(i) === 37 && i + 1 < flen) {
          lastPos = lastPos > -1 ? lastPos : 0;
          switch (f.charCodeAt(i + 1)) {
            case 100:
            case 102:
              if (a >= argLen)
                break;
              if (args[a] == null)
                break;
              if (lastPos < i)
                str += f.slice(lastPos, i);
              str += Number(args[a]);
              lastPos = i + 2;
              i++;
              break;
            case 105:
              if (a >= argLen)
                break;
              if (args[a] == null)
                break;
              if (lastPos < i)
                str += f.slice(lastPos, i);
              str += Math.floor(Number(args[a]));
              lastPos = i + 2;
              i++;
              break;
            case 79:
            case 111:
            case 106:
              if (a >= argLen)
                break;
              if (args[a] === void 0)
                break;
              if (lastPos < i)
                str += f.slice(lastPos, i);
              var type = typeof args[a];
              if (type === "string") {
                str += "'" + args[a] + "'";
                lastPos = i + 2;
                i++;
                break;
              }
              if (type === "function") {
                str += args[a].name || "<anonymous>";
                lastPos = i + 2;
                i++;
                break;
              }
              str += ss(args[a]);
              lastPos = i + 2;
              i++;
              break;
            case 115:
              if (a >= argLen)
                break;
              if (lastPos < i)
                str += f.slice(lastPos, i);
              str += String(args[a]);
              lastPos = i + 2;
              i++;
              break;
            case 37:
              if (lastPos < i)
                str += f.slice(lastPos, i);
              str += "%";
              lastPos = i + 2;
              i++;
              a--;
              break;
          }
          ++a;
        }
        ++i;
      }
      if (lastPos === -1)
        return f;
      else if (lastPos < flen) {
        str += f.slice(lastPos);
      }
      return str;
    }
    __name(format, "format");
  }
});

// node_modules/.pnpm/atomic-sleep@1.0.0/node_modules/atomic-sleep/index.js
var require_atomic_sleep = __commonJS({
  "node_modules/.pnpm/atomic-sleep@1.0.0/node_modules/atomic-sleep/index.js"(exports, module) {
    "use strict";
    if (typeof SharedArrayBuffer !== "undefined" && typeof Atomics !== "undefined") {
      let sleep = function(ms) {
        const valid = ms > 0 && ms < Infinity;
        if (valid === false) {
          if (typeof ms !== "number" && typeof ms !== "bigint") {
            throw TypeError("sleep: ms must be a number");
          }
          throw RangeError("sleep: ms must be a number that is greater than 0 but less than Infinity");
        }
        Atomics.wait(nil, 0, 0, Number(ms));
      };
      __name(sleep, "sleep");
      const nil = new Int32Array(new SharedArrayBuffer(4));
      module.exports = sleep;
    } else {
      let sleep = function(ms) {
        const valid = ms > 0 && ms < Infinity;
        if (valid === false) {
          if (typeof ms !== "number" && typeof ms !== "bigint") {
            throw TypeError("sleep: ms must be a number");
          }
          throw RangeError("sleep: ms must be a number that is greater than 0 but less than Infinity");
        }
        const target = Date.now() + Number(ms);
        while (target > Date.now()) {
        }
      };
      __name(sleep, "sleep");
      module.exports = sleep;
    }
  }
});

// node_modules/.pnpm/sonic-boom@3.7.0/node_modules/sonic-boom/index.js
var require_sonic_boom = __commonJS({
  "node_modules/.pnpm/sonic-boom@3.7.0/node_modules/sonic-boom/index.js"(exports, module) {
    "use strict";
    var fs2 = __require("fs");
    var EventEmitter = __require("events");
    var inherits = __require("util").inherits;
    var path = __require("path");
    var sleep = require_atomic_sleep();
    var BUSY_WRITE_TIMEOUT = 100;
    var kEmptyBuffer = Buffer.allocUnsafe(0);
    var MAX_WRITE = 16 * 1024;
    var kContentModeBuffer = "buffer";
    var kContentModeUtf8 = "utf8";
    function openFile(file, sonic) {
      sonic._opening = true;
      sonic._writing = true;
      sonic._asyncDrainScheduled = false;
      function fileOpened(err, fd) {
        if (err) {
          sonic._reopening = false;
          sonic._writing = false;
          sonic._opening = false;
          if (sonic.sync) {
            process.nextTick(() => {
              if (sonic.listenerCount("error") > 0) {
                sonic.emit("error", err);
              }
            });
          } else {
            sonic.emit("error", err);
          }
          return;
        }
        sonic.fd = fd;
        sonic.file = file;
        sonic._reopening = false;
        sonic._opening = false;
        sonic._writing = false;
        if (sonic.sync) {
          process.nextTick(() => sonic.emit("ready"));
        } else {
          sonic.emit("ready");
        }
        if (sonic._reopening || sonic.destroyed) {
          return;
        }
        if (!sonic._writing && sonic._len > sonic.minLength || sonic._flushPending) {
          sonic._actualWrite();
        }
      }
      __name(fileOpened, "fileOpened");
      const flags = sonic.append ? "a" : "w";
      const mode = sonic.mode;
      if (sonic.sync) {
        try {
          if (sonic.mkdir)
            fs2.mkdirSync(path.dirname(file), { recursive: true });
          const fd = fs2.openSync(file, flags, mode);
          fileOpened(null, fd);
        } catch (err) {
          fileOpened(err);
          throw err;
        }
      } else if (sonic.mkdir) {
        fs2.mkdir(path.dirname(file), { recursive: true }, (err) => {
          if (err)
            return fileOpened(err);
          fs2.open(file, flags, mode, fileOpened);
        });
      } else {
        fs2.open(file, flags, mode, fileOpened);
      }
    }
    __name(openFile, "openFile");
    function SonicBoom(opts) {
      if (!(this instanceof SonicBoom)) {
        return new SonicBoom(opts);
      }
      let { fd, dest, minLength, maxLength, maxWrite, sync, append = true, mkdir, retryEAGAIN, fsync, contentMode, mode } = opts || {};
      fd = fd || dest;
      this._len = 0;
      this.fd = -1;
      this._bufs = [];
      this._lens = [];
      this._writing = false;
      this._ending = false;
      this._reopening = false;
      this._asyncDrainScheduled = false;
      this._flushPending = false;
      this._hwm = Math.max(minLength || 0, 16387);
      this.file = null;
      this.destroyed = false;
      this.minLength = minLength || 0;
      this.maxLength = maxLength || 0;
      this.maxWrite = maxWrite || MAX_WRITE;
      this.sync = sync || false;
      this.writable = true;
      this._fsync = fsync || false;
      this.append = append || false;
      this.mode = mode;
      this.retryEAGAIN = retryEAGAIN || (() => true);
      this.mkdir = mkdir || false;
      let fsWriteSync;
      let fsWrite;
      if (contentMode === kContentModeBuffer) {
        this._writingBuf = kEmptyBuffer;
        this.write = writeBuffer;
        this.flush = flushBuffer;
        this.flushSync = flushBufferSync;
        this._actualWrite = actualWriteBuffer;
        fsWriteSync = /* @__PURE__ */ __name(() => fs2.writeSync(this.fd, this._writingBuf), "fsWriteSync");
        fsWrite = /* @__PURE__ */ __name(() => fs2.write(this.fd, this._writingBuf, this.release), "fsWrite");
      } else if (contentMode === void 0 || contentMode === kContentModeUtf8) {
        this._writingBuf = "";
        this.write = write;
        this.flush = flush;
        this.flushSync = flushSync;
        this._actualWrite = actualWrite;
        fsWriteSync = /* @__PURE__ */ __name(() => fs2.writeSync(this.fd, this._writingBuf, "utf8"), "fsWriteSync");
        fsWrite = /* @__PURE__ */ __name(() => fs2.write(this.fd, this._writingBuf, "utf8", this.release), "fsWrite");
      } else {
        throw new Error(`SonicBoom supports "${kContentModeUtf8}" and "${kContentModeBuffer}", but passed ${contentMode}`);
      }
      if (typeof fd === "number") {
        this.fd = fd;
        process.nextTick(() => this.emit("ready"));
      } else if (typeof fd === "string") {
        openFile(fd, this);
      } else {
        throw new Error("SonicBoom supports only file descriptors and files");
      }
      if (this.minLength >= this.maxWrite) {
        throw new Error(`minLength should be smaller than maxWrite (${this.maxWrite})`);
      }
      this.release = (err, n) => {
        if (err) {
          if ((err.code === "EAGAIN" || err.code === "EBUSY") && this.retryEAGAIN(err, this._writingBuf.length, this._len - this._writingBuf.length)) {
            if (this.sync) {
              try {
                sleep(BUSY_WRITE_TIMEOUT);
                this.release(void 0, 0);
              } catch (err2) {
                this.release(err2);
              }
            } else {
              setTimeout(fsWrite, BUSY_WRITE_TIMEOUT);
            }
          } else {
            this._writing = false;
            this.emit("error", err);
          }
          return;
        }
        this.emit("write", n);
        this._len -= n;
        if (this._len < 0) {
          this._len = 0;
        }
        this._writingBuf = this._writingBuf.slice(n);
        if (this._writingBuf.length) {
          if (!this.sync) {
            fsWrite();
            return;
          }
          try {
            do {
              const n2 = fsWriteSync();
              this._len -= n2;
              this._writingBuf = this._writingBuf.slice(n2);
            } while (this._writingBuf.length);
          } catch (err2) {
            this.release(err2);
            return;
          }
        }
        if (this._fsync) {
          fs2.fsyncSync(this.fd);
        }
        const len = this._len;
        if (this._reopening) {
          this._writing = false;
          this._reopening = false;
          this.reopen();
        } else if (len > this.minLength) {
          this._actualWrite();
        } else if (this._ending) {
          if (len > 0) {
            this._actualWrite();
          } else {
            this._writing = false;
            actualClose(this);
          }
        } else {
          this._writing = false;
          if (this.sync) {
            if (!this._asyncDrainScheduled) {
              this._asyncDrainScheduled = true;
              process.nextTick(emitDrain, this);
            }
          } else {
            this.emit("drain");
          }
        }
      };
      this.on("newListener", function(name) {
        if (name === "drain") {
          this._asyncDrainScheduled = false;
        }
      });
    }
    __name(SonicBoom, "SonicBoom");
    function emitDrain(sonic) {
      const hasListeners = sonic.listenerCount("drain") > 0;
      if (!hasListeners)
        return;
      sonic._asyncDrainScheduled = false;
      sonic.emit("drain");
    }
    __name(emitDrain, "emitDrain");
    inherits(SonicBoom, EventEmitter);
    function mergeBuf(bufs, len) {
      if (bufs.length === 0) {
        return kEmptyBuffer;
      }
      if (bufs.length === 1) {
        return bufs[0];
      }
      return Buffer.concat(bufs, len);
    }
    __name(mergeBuf, "mergeBuf");
    function write(data) {
      if (this.destroyed) {
        throw new Error("SonicBoom destroyed");
      }
      const len = this._len + data.length;
      const bufs = this._bufs;
      if (this.maxLength && len > this.maxLength) {
        this.emit("drop", data);
        return this._len < this._hwm;
      }
      if (bufs.length === 0 || bufs[bufs.length - 1].length + data.length > this.maxWrite) {
        bufs.push("" + data);
      } else {
        bufs[bufs.length - 1] += data;
      }
      this._len = len;
      if (!this._writing && this._len >= this.minLength) {
        this._actualWrite();
      }
      return this._len < this._hwm;
    }
    __name(write, "write");
    function writeBuffer(data) {
      if (this.destroyed) {
        throw new Error("SonicBoom destroyed");
      }
      const len = this._len + data.length;
      const bufs = this._bufs;
      const lens = this._lens;
      if (this.maxLength && len > this.maxLength) {
        this.emit("drop", data);
        return this._len < this._hwm;
      }
      if (bufs.length === 0 || lens[lens.length - 1] + data.length > this.maxWrite) {
        bufs.push([data]);
        lens.push(data.length);
      } else {
        bufs[bufs.length - 1].push(data);
        lens[lens.length - 1] += data.length;
      }
      this._len = len;
      if (!this._writing && this._len >= this.minLength) {
        this._actualWrite();
      }
      return this._len < this._hwm;
    }
    __name(writeBuffer, "writeBuffer");
    function callFlushCallbackOnDrain(cb) {
      this._flushPending = true;
      const onDrain = /* @__PURE__ */ __name(() => {
        if (!this._fsync) {
          fs2.fsync(this.fd, (err) => {
            this._flushPending = false;
            cb(err);
          });
        } else {
          this._flushPending = false;
          cb();
        }
        this.off("error", onError);
      }, "onDrain");
      const onError = /* @__PURE__ */ __name((err) => {
        this._flushPending = false;
        cb(err);
        this.off("drain", onDrain);
      }, "onError");
      this.once("drain", onDrain);
      this.once("error", onError);
    }
    __name(callFlushCallbackOnDrain, "callFlushCallbackOnDrain");
    function flush(cb) {
      if (cb != null && typeof cb !== "function") {
        throw new Error("flush cb must be a function");
      }
      if (this.destroyed) {
        const error = new Error("SonicBoom destroyed");
        if (cb) {
          cb(error);
          return;
        }
        throw error;
      }
      if (this.minLength <= 0) {
        cb?.();
        return;
      }
      if (cb) {
        callFlushCallbackOnDrain.call(this, cb);
      }
      if (this._writing) {
        return;
      }
      if (this._bufs.length === 0) {
        this._bufs.push("");
      }
      this._actualWrite();
    }
    __name(flush, "flush");
    function flushBuffer(cb) {
      if (cb != null && typeof cb !== "function") {
        throw new Error("flush cb must be a function");
      }
      if (this.destroyed) {
        const error = new Error("SonicBoom destroyed");
        if (cb) {
          cb(error);
          return;
        }
        throw error;
      }
      if (this.minLength <= 0) {
        cb?.();
        return;
      }
      if (cb) {
        callFlushCallbackOnDrain.call(this, cb);
      }
      if (this._writing) {
        return;
      }
      if (this._bufs.length === 0) {
        this._bufs.push([]);
        this._lens.push(0);
      }
      this._actualWrite();
    }
    __name(flushBuffer, "flushBuffer");
    SonicBoom.prototype.reopen = function(file) {
      if (this.destroyed) {
        throw new Error("SonicBoom destroyed");
      }
      if (this._opening) {
        this.once("ready", () => {
          this.reopen(file);
        });
        return;
      }
      if (this._ending) {
        return;
      }
      if (!this.file) {
        throw new Error("Unable to reopen a file descriptor, you must pass a file to SonicBoom");
      }
      this._reopening = true;
      if (this._writing) {
        return;
      }
      const fd = this.fd;
      this.once("ready", () => {
        if (fd !== this.fd) {
          fs2.close(fd, (err) => {
            if (err) {
              return this.emit("error", err);
            }
          });
        }
      });
      openFile(file || this.file, this);
    };
    SonicBoom.prototype.end = function() {
      if (this.destroyed) {
        throw new Error("SonicBoom destroyed");
      }
      if (this._opening) {
        this.once("ready", () => {
          this.end();
        });
        return;
      }
      if (this._ending) {
        return;
      }
      this._ending = true;
      if (this._writing) {
        return;
      }
      if (this._len > 0 && this.fd >= 0) {
        this._actualWrite();
      } else {
        actualClose(this);
      }
    };
    function flushSync() {
      if (this.destroyed) {
        throw new Error("SonicBoom destroyed");
      }
      if (this.fd < 0) {
        throw new Error("sonic boom is not ready yet");
      }
      if (!this._writing && this._writingBuf.length > 0) {
        this._bufs.unshift(this._writingBuf);
        this._writingBuf = "";
      }
      let buf = "";
      while (this._bufs.length || buf) {
        if (buf.length <= 0) {
          buf = this._bufs[0];
        }
        try {
          const n = fs2.writeSync(this.fd, buf, "utf8");
          buf = buf.slice(n);
          this._len = Math.max(this._len - n, 0);
          if (buf.length <= 0) {
            this._bufs.shift();
          }
        } catch (err) {
          const shouldRetry = err.code === "EAGAIN" || err.code === "EBUSY";
          if (shouldRetry && !this.retryEAGAIN(err, buf.length, this._len - buf.length)) {
            throw err;
          }
          sleep(BUSY_WRITE_TIMEOUT);
        }
      }
      try {
        fs2.fsyncSync(this.fd);
      } catch {
      }
    }
    __name(flushSync, "flushSync");
    function flushBufferSync() {
      if (this.destroyed) {
        throw new Error("SonicBoom destroyed");
      }
      if (this.fd < 0) {
        throw new Error("sonic boom is not ready yet");
      }
      if (!this._writing && this._writingBuf.length > 0) {
        this._bufs.unshift([this._writingBuf]);
        this._writingBuf = kEmptyBuffer;
      }
      let buf = kEmptyBuffer;
      while (this._bufs.length || buf.length) {
        if (buf.length <= 0) {
          buf = mergeBuf(this._bufs[0], this._lens[0]);
        }
        try {
          const n = fs2.writeSync(this.fd, buf);
          buf = buf.subarray(n);
          this._len = Math.max(this._len - n, 0);
          if (buf.length <= 0) {
            this._bufs.shift();
            this._lens.shift();
          }
        } catch (err) {
          const shouldRetry = err.code === "EAGAIN" || err.code === "EBUSY";
          if (shouldRetry && !this.retryEAGAIN(err, buf.length, this._len - buf.length)) {
            throw err;
          }
          sleep(BUSY_WRITE_TIMEOUT);
        }
      }
    }
    __name(flushBufferSync, "flushBufferSync");
    SonicBoom.prototype.destroy = function() {
      if (this.destroyed) {
        return;
      }
      actualClose(this);
    };
    function actualWrite() {
      const release = this.release;
      this._writing = true;
      this._writingBuf = this._writingBuf || this._bufs.shift() || "";
      if (this.sync) {
        try {
          const written = fs2.writeSync(this.fd, this._writingBuf, "utf8");
          release(null, written);
        } catch (err) {
          release(err);
        }
      } else {
        fs2.write(this.fd, this._writingBuf, "utf8", release);
      }
    }
    __name(actualWrite, "actualWrite");
    function actualWriteBuffer() {
      const release = this.release;
      this._writing = true;
      this._writingBuf = this._writingBuf.length ? this._writingBuf : mergeBuf(this._bufs.shift(), this._lens.shift());
      if (this.sync) {
        try {
          const written = fs2.writeSync(this.fd, this._writingBuf);
          release(null, written);
        } catch (err) {
          release(err);
        }
      } else {
        fs2.write(this.fd, this._writingBuf, release);
      }
    }
    __name(actualWriteBuffer, "actualWriteBuffer");
    function actualClose(sonic) {
      if (sonic.fd === -1) {
        sonic.once("ready", actualClose.bind(null, sonic));
        return;
      }
      sonic.destroyed = true;
      sonic._bufs = [];
      sonic._lens = [];
      fs2.fsync(sonic.fd, closeWrapped);
      function closeWrapped() {
        if (sonic.fd !== 1 && sonic.fd !== 2) {
          fs2.close(sonic.fd, done);
        } else {
          done();
        }
      }
      __name(closeWrapped, "closeWrapped");
      function done(err) {
        if (err) {
          sonic.emit("error", err);
          return;
        }
        if (sonic._ending && !sonic._writing) {
          sonic.emit("finish");
        }
        sonic.emit("close");
      }
      __name(done, "done");
    }
    __name(actualClose, "actualClose");
    SonicBoom.SonicBoom = SonicBoom;
    SonicBoom.default = SonicBoom;
    module.exports = SonicBoom;
  }
});

// node_modules/.pnpm/on-exit-leak-free@2.1.2/node_modules/on-exit-leak-free/index.js
var require_on_exit_leak_free = __commonJS({
  "node_modules/.pnpm/on-exit-leak-free@2.1.2/node_modules/on-exit-leak-free/index.js"(exports, module) {
    "use strict";
    var refs = {
      exit: [],
      beforeExit: []
    };
    var functions = {
      exit: onExit,
      beforeExit: onBeforeExit
    };
    var registry;
    function ensureRegistry() {
      if (registry === void 0) {
        registry = new FinalizationRegistry(clear);
      }
    }
    __name(ensureRegistry, "ensureRegistry");
    function install(event) {
      if (refs[event].length > 0) {
        return;
      }
      process.on(event, functions[event]);
    }
    __name(install, "install");
    function uninstall(event) {
      if (refs[event].length > 0) {
        return;
      }
      process.removeListener(event, functions[event]);
      if (refs.exit.length === 0 && refs.beforeExit.length === 0) {
        registry = void 0;
      }
    }
    __name(uninstall, "uninstall");
    function onExit() {
      callRefs("exit");
    }
    __name(onExit, "onExit");
    function onBeforeExit() {
      callRefs("beforeExit");
    }
    __name(onBeforeExit, "onBeforeExit");
    function callRefs(event) {
      for (const ref of refs[event]) {
        const obj = ref.deref();
        const fn = ref.fn;
        if (obj !== void 0) {
          fn(obj, event);
        }
      }
      refs[event] = [];
    }
    __name(callRefs, "callRefs");
    function clear(ref) {
      for (const event of ["exit", "beforeExit"]) {
        const index = refs[event].indexOf(ref);
        refs[event].splice(index, index + 1);
        uninstall(event);
      }
    }
    __name(clear, "clear");
    function _register(event, obj, fn) {
      if (obj === void 0) {
        throw new Error("the object can't be undefined");
      }
      install(event);
      const ref = new WeakRef(obj);
      ref.fn = fn;
      ensureRegistry();
      registry.register(obj, ref);
      refs[event].push(ref);
    }
    __name(_register, "_register");
    function register(obj, fn) {
      _register("exit", obj, fn);
    }
    __name(register, "register");
    function registerBeforeExit(obj, fn) {
      _register("beforeExit", obj, fn);
    }
    __name(registerBeforeExit, "registerBeforeExit");
    function unregister(obj) {
      if (registry === void 0) {
        return;
      }
      registry.unregister(obj);
      for (const event of ["exit", "beforeExit"]) {
        refs[event] = refs[event].filter((ref) => {
          const _obj = ref.deref();
          return _obj && _obj !== obj;
        });
        uninstall(event);
      }
    }
    __name(unregister, "unregister");
    module.exports = {
      register,
      registerBeforeExit,
      unregister
    };
  }
});

// node_modules/.pnpm/thread-stream@2.4.1/node_modules/thread-stream/package.json
var require_package = __commonJS({
  "node_modules/.pnpm/thread-stream@2.4.1/node_modules/thread-stream/package.json"(exports, module) {
    module.exports = {
      name: "thread-stream",
      version: "2.4.1",
      description: "A streaming way to send data to a Node.js Worker Thread",
      main: "index.js",
      types: "index.d.ts",
      dependencies: {
        "real-require": "^0.2.0"
      },
      devDependencies: {
        "@types/node": "^20.1.0",
        "@types/tap": "^15.0.0",
        desm: "^1.3.0",
        fastbench: "^1.0.1",
        husky: "^8.0.1",
        "pino-elasticsearch": "^6.0.0",
        "sonic-boom": "^3.0.0",
        standard: "^17.0.0",
        tap: "^16.2.0",
        "ts-node": "^10.8.0",
        typescript: "^4.7.2",
        "why-is-node-running": "^2.2.2"
      },
      scripts: {
        test: "standard && npm run transpile && tap test/*.test.*js && tap --ts test/*.test.*ts",
        "test:ci": "standard && npm run transpile && npm run test:ci:js && npm run test:ci:ts",
        "test:ci:js": 'tap --no-check-coverage --coverage-report=lcovonly "test/**/*.test.*js"',
        "test:ci:ts": 'tap --ts --no-check-coverage --coverage-report=lcovonly "test/**/*.test.*ts"',
        "test:yarn": 'npm run transpile && tap "test/**/*.test.js" --no-check-coverage',
        transpile: "sh ./test/ts/transpile.sh",
        prepare: "husky install"
      },
      standard: {
        ignore: [
          "test/ts/**/*"
        ]
      },
      repository: {
        type: "git",
        url: "git+https://github.com/mcollina/thread-stream.git"
      },
      keywords: [
        "worker",
        "thread",
        "threads",
        "stream"
      ],
      author: "Matteo Collina <hello@matteocollina.com>",
      license: "MIT",
      bugs: {
        url: "https://github.com/mcollina/thread-stream/issues"
      },
      homepage: "https://github.com/mcollina/thread-stream#readme"
    };
  }
});

// node_modules/.pnpm/thread-stream@2.4.1/node_modules/thread-stream/lib/wait.js
var require_wait = __commonJS({
  "node_modules/.pnpm/thread-stream@2.4.1/node_modules/thread-stream/lib/wait.js"(exports, module) {
    "use strict";
    var MAX_TIMEOUT = 1e3;
    function wait(state, index, expected, timeout, done) {
      const max = Date.now() + timeout;
      let current = Atomics.load(state, index);
      if (current === expected) {
        done(null, "ok");
        return;
      }
      let prior = current;
      const check = /* @__PURE__ */ __name((backoff) => {
        if (Date.now() > max) {
          done(null, "timed-out");
        } else {
          setTimeout(() => {
            prior = current;
            current = Atomics.load(state, index);
            if (current === prior) {
              check(backoff >= MAX_TIMEOUT ? MAX_TIMEOUT : backoff * 2);
            } else {
              if (current === expected)
                done(null, "ok");
              else
                done(null, "not-equal");
            }
          }, backoff);
        }
      }, "check");
      check(1);
    }
    __name(wait, "wait");
    function waitDiff(state, index, expected, timeout, done) {
      const max = Date.now() + timeout;
      let current = Atomics.load(state, index);
      if (current !== expected) {
        done(null, "ok");
        return;
      }
      const check = /* @__PURE__ */ __name((backoff) => {
        if (Date.now() > max) {
          done(null, "timed-out");
        } else {
          setTimeout(() => {
            current = Atomics.load(state, index);
            if (current !== expected) {
              done(null, "ok");
            } else {
              check(backoff >= MAX_TIMEOUT ? MAX_TIMEOUT : backoff * 2);
            }
          }, backoff);
        }
      }, "check");
      check(1);
    }
    __name(waitDiff, "waitDiff");
    module.exports = { wait, waitDiff };
  }
});

// node_modules/.pnpm/thread-stream@2.4.1/node_modules/thread-stream/lib/indexes.js
var require_indexes = __commonJS({
  "node_modules/.pnpm/thread-stream@2.4.1/node_modules/thread-stream/lib/indexes.js"(exports, module) {
    "use strict";
    var WRITE_INDEX = 4;
    var READ_INDEX = 8;
    module.exports = {
      WRITE_INDEX,
      READ_INDEX
    };
  }
});

// node_modules/.pnpm/thread-stream@2.4.1/node_modules/thread-stream/index.js
var require_thread_stream = __commonJS({
  "node_modules/.pnpm/thread-stream@2.4.1/node_modules/thread-stream/index.js"(exports, module) {
    "use strict";
    var { version } = require_package();
    var { EventEmitter } = __require("events");
    var { Worker } = __require("worker_threads");
    var { join } = __require("path");
    var { pathToFileURL } = __require("url");
    var { wait } = require_wait();
    var {
      WRITE_INDEX,
      READ_INDEX
    } = require_indexes();
    var buffer = __require("buffer");
    var assert = __require("assert");
    var kImpl = Symbol("kImpl");
    var MAX_STRING = buffer.constants.MAX_STRING_LENGTH;
    var FakeWeakRef = class {
      static {
        __name(this, "FakeWeakRef");
      }
      constructor(value) {
        this._value = value;
      }
      deref() {
        return this._value;
      }
    };
    var FakeFinalizationRegistry = class {
      static {
        __name(this, "FakeFinalizationRegistry");
      }
      register() {
      }
      unregister() {
      }
    };
    var FinalizationRegistry2 = process.env.NODE_V8_COVERAGE ? FakeFinalizationRegistry : global.FinalizationRegistry || FakeFinalizationRegistry;
    var WeakRef2 = process.env.NODE_V8_COVERAGE ? FakeWeakRef : global.WeakRef || FakeWeakRef;
    var registry = new FinalizationRegistry2((worker) => {
      if (worker.exited) {
        return;
      }
      worker.terminate();
    });
    function createWorker(stream, opts) {
      const { filename, workerData } = opts;
      const bundlerOverrides = "__bundlerPathsOverrides" in globalThis ? globalThis.__bundlerPathsOverrides : {};
      const toExecute = bundlerOverrides["thread-stream-worker"] || join(__dirname, "lib", "worker.js");
      const worker = new Worker(toExecute, {
        ...opts.workerOpts,
        trackUnmanagedFds: false,
        workerData: {
          filename: filename.indexOf("file://") === 0 ? filename : pathToFileURL(filename).href,
          dataBuf: stream[kImpl].dataBuf,
          stateBuf: stream[kImpl].stateBuf,
          workerData: {
            $context: {
              threadStreamVersion: version
            },
            ...workerData
          }
        }
      });
      worker.stream = new FakeWeakRef(stream);
      worker.on("message", onWorkerMessage);
      worker.on("exit", onWorkerExit);
      registry.register(stream, worker);
      return worker;
    }
    __name(createWorker, "createWorker");
    function drain(stream) {
      assert(!stream[kImpl].sync);
      if (stream[kImpl].needDrain) {
        stream[kImpl].needDrain = false;
        stream.emit("drain");
      }
    }
    __name(drain, "drain");
    function nextFlush(stream) {
      const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
      let leftover = stream[kImpl].data.length - writeIndex;
      if (leftover > 0) {
        if (stream[kImpl].buf.length === 0) {
          stream[kImpl].flushing = false;
          if (stream[kImpl].ending) {
            end(stream);
          } else if (stream[kImpl].needDrain) {
            process.nextTick(drain, stream);
          }
          return;
        }
        let toWrite = stream[kImpl].buf.slice(0, leftover);
        let toWriteBytes = Buffer.byteLength(toWrite);
        if (toWriteBytes <= leftover) {
          stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
          write(stream, toWrite, nextFlush.bind(null, stream));
        } else {
          stream.flush(() => {
            if (stream.destroyed) {
              return;
            }
            Atomics.store(stream[kImpl].state, READ_INDEX, 0);
            Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
            while (toWriteBytes > stream[kImpl].data.length) {
              leftover = leftover / 2;
              toWrite = stream[kImpl].buf.slice(0, leftover);
              toWriteBytes = Buffer.byteLength(toWrite);
            }
            stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
            write(stream, toWrite, nextFlush.bind(null, stream));
          });
        }
      } else if (leftover === 0) {
        if (writeIndex === 0 && stream[kImpl].buf.length === 0) {
          return;
        }
        stream.flush(() => {
          Atomics.store(stream[kImpl].state, READ_INDEX, 0);
          Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
          nextFlush(stream);
        });
      } else {
        destroy(stream, new Error("overwritten"));
      }
    }
    __name(nextFlush, "nextFlush");
    function onWorkerMessage(msg) {
      const stream = this.stream.deref();
      if (stream === void 0) {
        this.exited = true;
        this.terminate();
        return;
      }
      switch (msg.code) {
        case "READY":
          this.stream = new WeakRef2(stream);
          stream.flush(() => {
            stream[kImpl].ready = true;
            stream.emit("ready");
          });
          break;
        case "ERROR":
          destroy(stream, msg.err);
          break;
        case "EVENT":
          if (Array.isArray(msg.args)) {
            stream.emit(msg.name, ...msg.args);
          } else {
            stream.emit(msg.name, msg.args);
          }
          break;
        case "WARNING":
          process.emitWarning(msg.err);
          break;
        default:
          destroy(stream, new Error("this should not happen: " + msg.code));
      }
    }
    __name(onWorkerMessage, "onWorkerMessage");
    function onWorkerExit(code) {
      const stream = this.stream.deref();
      if (stream === void 0) {
        return;
      }
      registry.unregister(stream);
      stream.worker.exited = true;
      stream.worker.off("exit", onWorkerExit);
      destroy(stream, code !== 0 ? new Error("the worker thread exited") : null);
    }
    __name(onWorkerExit, "onWorkerExit");
    var ThreadStream = class extends EventEmitter {
      static {
        __name(this, "ThreadStream");
      }
      constructor(opts = {}) {
        super();
        if (opts.bufferSize < 4) {
          throw new Error("bufferSize must at least fit a 4-byte utf-8 char");
        }
        this[kImpl] = {};
        this[kImpl].stateBuf = new SharedArrayBuffer(128);
        this[kImpl].state = new Int32Array(this[kImpl].stateBuf);
        this[kImpl].dataBuf = new SharedArrayBuffer(opts.bufferSize || 4 * 1024 * 1024);
        this[kImpl].data = Buffer.from(this[kImpl].dataBuf);
        this[kImpl].sync = opts.sync || false;
        this[kImpl].ending = false;
        this[kImpl].ended = false;
        this[kImpl].needDrain = false;
        this[kImpl].destroyed = false;
        this[kImpl].flushing = false;
        this[kImpl].ready = false;
        this[kImpl].finished = false;
        this[kImpl].errored = null;
        this[kImpl].closed = false;
        this[kImpl].buf = "";
        this.worker = createWorker(this, opts);
      }
      write(data) {
        if (this[kImpl].destroyed) {
          error(this, new Error("the worker has exited"));
          return false;
        }
        if (this[kImpl].ending) {
          error(this, new Error("the worker is ending"));
          return false;
        }
        if (this[kImpl].flushing && this[kImpl].buf.length + data.length >= MAX_STRING) {
          try {
            writeSync(this);
            this[kImpl].flushing = true;
          } catch (err) {
            destroy(this, err);
            return false;
          }
        }
        this[kImpl].buf += data;
        if (this[kImpl].sync) {
          try {
            writeSync(this);
            return true;
          } catch (err) {
            destroy(this, err);
            return false;
          }
        }
        if (!this[kImpl].flushing) {
          this[kImpl].flushing = true;
          setImmediate(nextFlush, this);
        }
        this[kImpl].needDrain = this[kImpl].data.length - this[kImpl].buf.length - Atomics.load(this[kImpl].state, WRITE_INDEX) <= 0;
        return !this[kImpl].needDrain;
      }
      end() {
        if (this[kImpl].destroyed) {
          return;
        }
        this[kImpl].ending = true;
        end(this);
      }
      flush(cb) {
        if (this[kImpl].destroyed) {
          if (typeof cb === "function") {
            process.nextTick(cb, new Error("the worker has exited"));
          }
          return;
        }
        const writeIndex = Atomics.load(this[kImpl].state, WRITE_INDEX);
        wait(this[kImpl].state, READ_INDEX, writeIndex, Infinity, (err, res) => {
          if (err) {
            destroy(this, err);
            process.nextTick(cb, err);
            return;
          }
          if (res === "not-equal") {
            this.flush(cb);
            return;
          }
          process.nextTick(cb);
        });
      }
      flushSync() {
        if (this[kImpl].destroyed) {
          return;
        }
        writeSync(this);
        flushSync(this);
      }
      unref() {
        this.worker.unref();
      }
      ref() {
        this.worker.ref();
      }
      get ready() {
        return this[kImpl].ready;
      }
      get destroyed() {
        return this[kImpl].destroyed;
      }
      get closed() {
        return this[kImpl].closed;
      }
      get writable() {
        return !this[kImpl].destroyed && !this[kImpl].ending;
      }
      get writableEnded() {
        return this[kImpl].ending;
      }
      get writableFinished() {
        return this[kImpl].finished;
      }
      get writableNeedDrain() {
        return this[kImpl].needDrain;
      }
      get writableObjectMode() {
        return false;
      }
      get writableErrored() {
        return this[kImpl].errored;
      }
    };
    function error(stream, err) {
      setImmediate(() => {
        stream.emit("error", err);
      });
    }
    __name(error, "error");
    function destroy(stream, err) {
      if (stream[kImpl].destroyed) {
        return;
      }
      stream[kImpl].destroyed = true;
      if (err) {
        stream[kImpl].errored = err;
        error(stream, err);
      }
      if (!stream.worker.exited) {
        stream.worker.terminate().catch(() => {
        }).then(() => {
          stream[kImpl].closed = true;
          stream.emit("close");
        });
      } else {
        setImmediate(() => {
          stream[kImpl].closed = true;
          stream.emit("close");
        });
      }
    }
    __name(destroy, "destroy");
    function write(stream, data, cb) {
      const current = Atomics.load(stream[kImpl].state, WRITE_INDEX);
      const length = Buffer.byteLength(data);
      stream[kImpl].data.write(data, current);
      Atomics.store(stream[kImpl].state, WRITE_INDEX, current + length);
      Atomics.notify(stream[kImpl].state, WRITE_INDEX);
      cb();
      return true;
    }
    __name(write, "write");
    function end(stream) {
      if (stream[kImpl].ended || !stream[kImpl].ending || stream[kImpl].flushing) {
        return;
      }
      stream[kImpl].ended = true;
      try {
        stream.flushSync();
        let readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
        Atomics.store(stream[kImpl].state, WRITE_INDEX, -1);
        Atomics.notify(stream[kImpl].state, WRITE_INDEX);
        let spins = 0;
        while (readIndex !== -1) {
          Atomics.wait(stream[kImpl].state, READ_INDEX, readIndex, 1e3);
          readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
          if (readIndex === -2) {
            destroy(stream, new Error("end() failed"));
            return;
          }
          if (++spins === 10) {
            destroy(stream, new Error("end() took too long (10s)"));
            return;
          }
        }
        process.nextTick(() => {
          stream[kImpl].finished = true;
          stream.emit("finish");
        });
      } catch (err) {
        destroy(stream, err);
      }
    }
    __name(end, "end");
    function writeSync(stream) {
      const cb = /* @__PURE__ */ __name(() => {
        if (stream[kImpl].ending) {
          end(stream);
        } else if (stream[kImpl].needDrain) {
          process.nextTick(drain, stream);
        }
      }, "cb");
      stream[kImpl].flushing = false;
      while (stream[kImpl].buf.length !== 0) {
        const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
        let leftover = stream[kImpl].data.length - writeIndex;
        if (leftover === 0) {
          flushSync(stream);
          Atomics.store(stream[kImpl].state, READ_INDEX, 0);
          Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
          continue;
        } else if (leftover < 0) {
          throw new Error("overwritten");
        }
        let toWrite = stream[kImpl].buf.slice(0, leftover);
        let toWriteBytes = Buffer.byteLength(toWrite);
        if (toWriteBytes <= leftover) {
          stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
          write(stream, toWrite, cb);
        } else {
          flushSync(stream);
          Atomics.store(stream[kImpl].state, READ_INDEX, 0);
          Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
          while (toWriteBytes > stream[kImpl].buf.length) {
            leftover = leftover / 2;
            toWrite = stream[kImpl].buf.slice(0, leftover);
            toWriteBytes = Buffer.byteLength(toWrite);
          }
          stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
          write(stream, toWrite, cb);
        }
      }
    }
    __name(writeSync, "writeSync");
    function flushSync(stream) {
      if (stream[kImpl].flushing) {
        throw new Error("unable to flush while flushing");
      }
      const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
      let spins = 0;
      while (true) {
        const readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
        if (readIndex === -2) {
          throw Error("_flushSync failed");
        }
        if (readIndex !== writeIndex) {
          Atomics.wait(stream[kImpl].state, READ_INDEX, readIndex, 1e3);
        } else {
          break;
        }
        if (++spins === 10) {
          throw new Error("_flushSync took too long (10s)");
        }
      }
    }
    __name(flushSync, "flushSync");
    module.exports = ThreadStream;
  }
});

// node_modules/.pnpm/pino@8.17.1/node_modules/pino/lib/transport.js
var require_transport = __commonJS({
  "node_modules/.pnpm/pino@8.17.1/node_modules/pino/lib/transport.js"(exports, module) {
    "use strict";
    var { createRequire } = __require("module");
    var getCallers = require_caller();
    var { join, isAbsolute, sep } = __require("path");
    var sleep = require_atomic_sleep();
    var onExit = require_on_exit_leak_free();
    var ThreadStream = require_thread_stream();
    function setupOnExit(stream) {
      onExit.register(stream, autoEnd);
      onExit.registerBeforeExit(stream, flush);
      stream.on("close", function() {
        onExit.unregister(stream);
      });
    }
    __name(setupOnExit, "setupOnExit");
    function buildStream(filename, workerData, workerOpts) {
      const stream = new ThreadStream({
        filename,
        workerData,
        workerOpts
      });
      stream.on("ready", onReady);
      stream.on("close", function() {
        process.removeListener("exit", onExit2);
      });
      process.on("exit", onExit2);
      function onReady() {
        process.removeListener("exit", onExit2);
        stream.unref();
        if (workerOpts.autoEnd !== false) {
          setupOnExit(stream);
        }
      }
      __name(onReady, "onReady");
      function onExit2() {
        if (stream.closed) {
          return;
        }
        stream.flushSync();
        sleep(100);
        stream.end();
      }
      __name(onExit2, "onExit");
      return stream;
    }
    __name(buildStream, "buildStream");
    function autoEnd(stream) {
      stream.ref();
      stream.flushSync();
      stream.end();
      stream.once("close", function() {
        stream.unref();
      });
    }
    __name(autoEnd, "autoEnd");
    function flush(stream) {
      stream.flushSync();
    }
    __name(flush, "flush");
    function transport(fullOptions) {
      const { pipeline, targets, levels, dedupe, options = {}, worker = {}, caller = getCallers() } = fullOptions;
      const callers = typeof caller === "string" ? [caller] : caller;
      const bundlerOverrides = "__bundlerPathsOverrides" in globalThis ? globalThis.__bundlerPathsOverrides : {};
      let target = fullOptions.target;
      if (target && targets) {
        throw new Error("only one of target or targets can be specified");
      }
      if (targets) {
        target = bundlerOverrides["pino-worker"] || join(__dirname, "worker.js");
        options.targets = targets.map((dest) => {
          return {
            ...dest,
            target: fixTarget(dest.target)
          };
        });
      } else if (pipeline) {
        target = bundlerOverrides["pino-pipeline-worker"] || join(__dirname, "worker-pipeline.js");
        options.targets = pipeline.map((dest) => {
          return {
            ...dest,
            target: fixTarget(dest.target)
          };
        });
      }
      if (levels) {
        options.levels = levels;
      }
      if (dedupe) {
        options.dedupe = dedupe;
      }
      return buildStream(fixTarget(target), options, worker);
      function fixTarget(origin) {
        origin = bundlerOverrides[origin] || origin;
        if (isAbsolute(origin) || origin.indexOf("file://") === 0) {
          return origin;
        }
        if (origin === "pino/file") {
          return join(__dirname, "..", "file.js");
        }
        let fixTarget2;
        for (const filePath of callers) {
          try {
            const context = filePath === "node:repl" ? process.cwd() + sep : filePath;
            fixTarget2 = createRequire(context).resolve(origin);
            break;
          } catch (err) {
            continue;
          }
        }
        if (!fixTarget2) {
          throw new Error(`unable to determine transport target for "${origin}"`);
        }
        return fixTarget2;
      }
      __name(fixTarget, "fixTarget");
    }
    __name(transport, "transport");
    module.exports = transport;
  }
});

// node_modules/.pnpm/pino@8.17.1/node_modules/pino/lib/tools.js
var require_tools = __commonJS({
  "node_modules/.pnpm/pino@8.17.1/node_modules/pino/lib/tools.js"(exports, module) {
    "use strict";
    var format = require_quick_format_unescaped();
    var { mapHttpRequest, mapHttpResponse } = require_pino_std_serializers();
    var SonicBoom = require_sonic_boom();
    var onExit = require_on_exit_leak_free();
    var {
      lsCacheSym,
      chindingsSym,
      writeSym,
      serializersSym,
      formatOptsSym,
      endSym,
      stringifiersSym,
      stringifySym,
      stringifySafeSym,
      wildcardFirstSym,
      nestedKeySym,
      formattersSym,
      messageKeySym,
      errorKeySym,
      nestedKeyStrSym,
      msgPrefixSym
    } = require_symbols3();
    var { isMainThread } = __require("worker_threads");
    var transport = require_transport();
    function noop() {
    }
    __name(noop, "noop");
    function genLog(level, hook) {
      if (!hook)
        return LOG;
      return /* @__PURE__ */ __name(function hookWrappedLog(...args) {
        hook.call(this, args, LOG, level);
      }, "hookWrappedLog");
      function LOG(o, ...n) {
        if (typeof o === "object") {
          let msg = o;
          if (o !== null) {
            if (o.method && o.headers && o.socket) {
              o = mapHttpRequest(o);
            } else if (typeof o.setHeader === "function") {
              o = mapHttpResponse(o);
            }
          }
          let formatParams;
          if (msg === null && n.length === 0) {
            formatParams = [null];
          } else {
            msg = n.shift();
            formatParams = n;
          }
          if (typeof this[msgPrefixSym] === "string" && msg !== void 0 && msg !== null) {
            msg = this[msgPrefixSym] + msg;
          }
          this[writeSym](o, format(msg, formatParams, this[formatOptsSym]), level);
        } else {
          let msg = o === void 0 ? n.shift() : o;
          if (typeof this[msgPrefixSym] === "string" && msg !== void 0 && msg !== null) {
            msg = this[msgPrefixSym] + msg;
          }
          this[writeSym](null, format(msg, n, this[formatOptsSym]), level);
        }
      }
      __name(LOG, "LOG");
    }
    __name(genLog, "genLog");
    function asString(str) {
      let result = "";
      let last = 0;
      let found = false;
      let point = 255;
      const l = str.length;
      if (l > 100) {
        return JSON.stringify(str);
      }
      for (var i = 0; i < l && point >= 32; i++) {
        point = str.charCodeAt(i);
        if (point === 34 || point === 92) {
          result += str.slice(last, i) + "\\";
          last = i;
          found = true;
        }
      }
      if (!found) {
        result = str;
      } else {
        result += str.slice(last);
      }
      return point < 32 ? JSON.stringify(str) : '"' + result + '"';
    }
    __name(asString, "asString");
    function asJson(obj, msg, num, time) {
      const stringify2 = this[stringifySym];
      const stringifySafe = this[stringifySafeSym];
      const stringifiers = this[stringifiersSym];
      const end = this[endSym];
      const chindings = this[chindingsSym];
      const serializers2 = this[serializersSym];
      const formatters2 = this[formattersSym];
      const messageKey = this[messageKeySym];
      const errorKey = this[errorKeySym];
      let data = this[lsCacheSym][num] + time;
      data = data + chindings;
      let value;
      if (formatters2.log) {
        obj = formatters2.log(obj);
      }
      const wildcardStringifier = stringifiers[wildcardFirstSym];
      let propStr = "";
      for (const key in obj) {
        value = obj[key];
        if (Object.prototype.hasOwnProperty.call(obj, key) && value !== void 0) {
          if (serializers2[key]) {
            value = serializers2[key](value);
          } else if (key === errorKey && serializers2.err) {
            value = serializers2.err(value);
          }
          const stringifier = stringifiers[key] || wildcardStringifier;
          switch (typeof value) {
            case "undefined":
            case "function":
              continue;
            case "number":
              if (Number.isFinite(value) === false) {
                value = null;
              }
            case "boolean":
              if (stringifier)
                value = stringifier(value);
              break;
            case "string":
              value = (stringifier || asString)(value);
              break;
            default:
              value = (stringifier || stringify2)(value, stringifySafe);
          }
          if (value === void 0)
            continue;
          const strKey = asString(key);
          propStr += "," + strKey + ":" + value;
        }
      }
      let msgStr = "";
      if (msg !== void 0) {
        value = serializers2[messageKey] ? serializers2[messageKey](msg) : msg;
        const stringifier = stringifiers[messageKey] || wildcardStringifier;
        switch (typeof value) {
          case "function":
            break;
          case "number":
            if (Number.isFinite(value) === false) {
              value = null;
            }
          case "boolean":
            if (stringifier)
              value = stringifier(value);
            msgStr = ',"' + messageKey + '":' + value;
            break;
          case "string":
            value = (stringifier || asString)(value);
            msgStr = ',"' + messageKey + '":' + value;
            break;
          default:
            value = (stringifier || stringify2)(value, stringifySafe);
            msgStr = ',"' + messageKey + '":' + value;
        }
      }
      if (this[nestedKeySym] && propStr) {
        return data + this[nestedKeyStrSym] + propStr.slice(1) + "}" + msgStr + end;
      } else {
        return data + propStr + msgStr + end;
      }
    }
    __name(asJson, "asJson");
    function asChindings(instance, bindings) {
      let value;
      let data = instance[chindingsSym];
      const stringify2 = instance[stringifySym];
      const stringifySafe = instance[stringifySafeSym];
      const stringifiers = instance[stringifiersSym];
      const wildcardStringifier = stringifiers[wildcardFirstSym];
      const serializers2 = instance[serializersSym];
      const formatter = instance[formattersSym].bindings;
      bindings = formatter(bindings);
      for (const key in bindings) {
        value = bindings[key];
        const valid = key !== "level" && key !== "serializers" && key !== "formatters" && key !== "customLevels" && bindings.hasOwnProperty(key) && value !== void 0;
        if (valid === true) {
          value = serializers2[key] ? serializers2[key](value) : value;
          value = (stringifiers[key] || wildcardStringifier || stringify2)(value, stringifySafe);
          if (value === void 0)
            continue;
          data += ',"' + key + '":' + value;
        }
      }
      return data;
    }
    __name(asChindings, "asChindings");
    function hasBeenTampered(stream) {
      return stream.write !== stream.constructor.prototype.write;
    }
    __name(hasBeenTampered, "hasBeenTampered");
    var hasNodeCodeCoverage = process.env.NODE_V8_COVERAGE || process.env.V8_COVERAGE;
    function buildSafeSonicBoom(opts) {
      const stream = new SonicBoom(opts);
      stream.on("error", filterBrokenPipe);
      if (!hasNodeCodeCoverage && !opts.sync && isMainThread) {
        onExit.register(stream, autoEnd);
        stream.on("close", function() {
          onExit.unregister(stream);
        });
      }
      return stream;
      function filterBrokenPipe(err) {
        if (err.code === "EPIPE") {
          stream.write = noop;
          stream.end = noop;
          stream.flushSync = noop;
          stream.destroy = noop;
          return;
        }
        stream.removeListener("error", filterBrokenPipe);
        stream.emit("error", err);
      }
      __name(filterBrokenPipe, "filterBrokenPipe");
    }
    __name(buildSafeSonicBoom, "buildSafeSonicBoom");
    function autoEnd(stream, eventName) {
      if (stream.destroyed) {
        return;
      }
      if (eventName === "beforeExit") {
        stream.flush();
        stream.on("drain", function() {
          stream.end();
        });
      } else {
        stream.flushSync();
      }
    }
    __name(autoEnd, "autoEnd");
    function createArgsNormalizer(defaultOptions) {
      return /* @__PURE__ */ __name(function normalizeArgs(instance, caller, opts = {}, stream) {
        if (typeof opts === "string") {
          stream = buildSafeSonicBoom({ dest: opts });
          opts = {};
        } else if (typeof stream === "string") {
          if (opts && opts.transport) {
            throw Error("only one of option.transport or stream can be specified");
          }
          stream = buildSafeSonicBoom({ dest: stream });
        } else if (opts instanceof SonicBoom || opts.writable || opts._writableState) {
          stream = opts;
          opts = {};
        } else if (opts.transport) {
          if (opts.transport instanceof SonicBoom || opts.transport.writable || opts.transport._writableState) {
            throw Error("option.transport do not allow stream, please pass to option directly. e.g. pino(transport)");
          }
          if (opts.transport.targets && opts.transport.targets.length && opts.formatters && typeof opts.formatters.level === "function") {
            throw Error("option.transport.targets do not allow custom level formatters");
          }
          let customLevels;
          if (opts.customLevels) {
            customLevels = opts.useOnlyCustomLevels ? opts.customLevels : Object.assign({}, opts.levels, opts.customLevels);
          }
          stream = transport({ caller, ...opts.transport, levels: customLevels });
        }
        opts = Object.assign({}, defaultOptions, opts);
        opts.serializers = Object.assign({}, defaultOptions.serializers, opts.serializers);
        opts.formatters = Object.assign({}, defaultOptions.formatters, opts.formatters);
        if (opts.prettyPrint) {
          throw new Error("prettyPrint option is no longer supported, see the pino-pretty package (https://github.com/pinojs/pino-pretty)");
        }
        const { enabled, onChild } = opts;
        if (enabled === false)
          opts.level = "silent";
        if (!onChild)
          opts.onChild = noop;
        if (!stream) {
          if (!hasBeenTampered(process.stdout)) {
            stream = buildSafeSonicBoom({ fd: process.stdout.fd || 1 });
          } else {
            stream = process.stdout;
          }
        }
        return { opts, stream };
      }, "normalizeArgs");
    }
    __name(createArgsNormalizer, "createArgsNormalizer");
    function stringify(obj, stringifySafeFn) {
      try {
        return JSON.stringify(obj);
      } catch (_) {
        try {
          const stringify2 = stringifySafeFn || this[stringifySafeSym];
          return stringify2(obj);
        } catch (_2) {
          return '"[unable to serialize, circular reference is too complex to analyze]"';
        }
      }
    }
    __name(stringify, "stringify");
    function buildFormatters(level, bindings, log) {
      return {
        level,
        bindings,
        log
      };
    }
    __name(buildFormatters, "buildFormatters");
    function normalizeDestFileDescriptor(destination) {
      const fd = Number(destination);
      if (typeof destination === "string" && Number.isFinite(fd)) {
        return fd;
      }
      if (destination === void 0) {
        return 1;
      }
      return destination;
    }
    __name(normalizeDestFileDescriptor, "normalizeDestFileDescriptor");
    module.exports = {
      noop,
      buildSafeSonicBoom,
      asChindings,
      asJson,
      genLog,
      createArgsNormalizer,
      stringify,
      buildFormatters,
      normalizeDestFileDescriptor
    };
  }
});

// node_modules/.pnpm/pino@8.17.1/node_modules/pino/lib/levels.js
var require_levels = __commonJS({
  "node_modules/.pnpm/pino@8.17.1/node_modules/pino/lib/levels.js"(exports, module) {
    "use strict";
    var {
      lsCacheSym,
      levelValSym,
      useOnlyCustomLevelsSym,
      streamSym,
      formattersSym,
      hooksSym
    } = require_symbols3();
    var { noop, genLog } = require_tools();
    var levels = {
      trace: 10,
      debug: 20,
      info: 30,
      warn: 40,
      error: 50,
      fatal: 60
    };
    var levelMethods = {
      fatal: (hook) => {
        const logFatal = genLog(levels.fatal, hook);
        return function(...args) {
          const stream = this[streamSym];
          logFatal.call(this, ...args);
          if (typeof stream.flushSync === "function") {
            try {
              stream.flushSync();
            } catch (e) {
            }
          }
        };
      },
      error: (hook) => genLog(levels.error, hook),
      warn: (hook) => genLog(levels.warn, hook),
      info: (hook) => genLog(levels.info, hook),
      debug: (hook) => genLog(levels.debug, hook),
      trace: (hook) => genLog(levels.trace, hook)
    };
    var nums = Object.keys(levels).reduce((o, k) => {
      o[levels[k]] = k;
      return o;
    }, {});
    var initialLsCache = Object.keys(nums).reduce((o, k) => {
      o[k] = '{"level":' + Number(k);
      return o;
    }, {});
    function genLsCache(instance) {
      const formatter = instance[formattersSym].level;
      const { labels } = instance.levels;
      const cache = {};
      for (const label in labels) {
        const level = formatter(labels[label], Number(label));
        cache[label] = JSON.stringify(level).slice(0, -1);
      }
      instance[lsCacheSym] = cache;
      return instance;
    }
    __name(genLsCache, "genLsCache");
    function isStandardLevel(level, useOnlyCustomLevels) {
      if (useOnlyCustomLevels) {
        return false;
      }
      switch (level) {
        case "fatal":
        case "error":
        case "warn":
        case "info":
        case "debug":
        case "trace":
          return true;
        default:
          return false;
      }
    }
    __name(isStandardLevel, "isStandardLevel");
    function setLevel(level) {
      const { labels, values } = this.levels;
      if (typeof level === "number") {
        if (labels[level] === void 0)
          throw Error("unknown level value" + level);
        level = labels[level];
      }
      if (values[level] === void 0)
        throw Error("unknown level " + level);
      const preLevelVal = this[levelValSym];
      const levelVal = this[levelValSym] = values[level];
      const useOnlyCustomLevelsVal = this[useOnlyCustomLevelsSym];
      const hook = this[hooksSym].logMethod;
      for (const key in values) {
        if (levelVal > values[key]) {
          this[key] = noop;
          continue;
        }
        this[key] = isStandardLevel(key, useOnlyCustomLevelsVal) ? levelMethods[key](hook) : genLog(values[key], hook);
      }
      this.emit(
        "level-change",
        level,
        levelVal,
        labels[preLevelVal],
        preLevelVal,
        this
      );
    }
    __name(setLevel, "setLevel");
    function getLevel(level) {
      const { levels: levels2, levelVal } = this;
      return levels2 && levels2.labels ? levels2.labels[levelVal] : "";
    }
    __name(getLevel, "getLevel");
    function isLevelEnabled(logLevel) {
      const { values } = this.levels;
      const logLevelVal = values[logLevel];
      return logLevelVal !== void 0 && logLevelVal >= this[levelValSym];
    }
    __name(isLevelEnabled, "isLevelEnabled");
    function mappings(customLevels = null, useOnlyCustomLevels = false) {
      const customNums = customLevels ? Object.keys(customLevels).reduce((o, k) => {
        o[customLevels[k]] = k;
        return o;
      }, {}) : null;
      const labels = Object.assign(
        Object.create(Object.prototype, { Infinity: { value: "silent" } }),
        useOnlyCustomLevels ? null : nums,
        customNums
      );
      const values = Object.assign(
        Object.create(Object.prototype, { silent: { value: Infinity } }),
        useOnlyCustomLevels ? null : levels,
        customLevels
      );
      return { labels, values };
    }
    __name(mappings, "mappings");
    function assertDefaultLevelFound(defaultLevel, customLevels, useOnlyCustomLevels) {
      if (typeof defaultLevel === "number") {
        const values = [].concat(
          Object.keys(customLevels || {}).map((key) => customLevels[key]),
          useOnlyCustomLevels ? [] : Object.keys(nums).map((level) => +level),
          Infinity
        );
        if (!values.includes(defaultLevel)) {
          throw Error(`default level:${defaultLevel} must be included in custom levels`);
        }
        return;
      }
      const labels = Object.assign(
        Object.create(Object.prototype, { silent: { value: Infinity } }),
        useOnlyCustomLevels ? null : levels,
        customLevels
      );
      if (!(defaultLevel in labels)) {
        throw Error(`default level:${defaultLevel} must be included in custom levels`);
      }
    }
    __name(assertDefaultLevelFound, "assertDefaultLevelFound");
    function assertNoLevelCollisions(levels2, customLevels) {
      const { labels, values } = levels2;
      for (const k in customLevels) {
        if (k in values) {
          throw Error("levels cannot be overridden");
        }
        if (customLevels[k] in labels) {
          throw Error("pre-existing level values cannot be used for new levels");
        }
      }
    }
    __name(assertNoLevelCollisions, "assertNoLevelCollisions");
    module.exports = {
      initialLsCache,
      genLsCache,
      levelMethods,
      getLevel,
      setLevel,
      isLevelEnabled,
      mappings,
      levels,
      assertNoLevelCollisions,
      assertDefaultLevelFound
    };
  }
});

// node_modules/.pnpm/pino@8.17.1/node_modules/pino/lib/meta.js
var require_meta = __commonJS({
  "node_modules/.pnpm/pino@8.17.1/node_modules/pino/lib/meta.js"(exports, module) {
    "use strict";
    module.exports = { version: "8.17.1" };
  }
});

// node_modules/.pnpm/pino@8.17.1/node_modules/pino/lib/proto.js
var require_proto = __commonJS({
  "node_modules/.pnpm/pino@8.17.1/node_modules/pino/lib/proto.js"(exports, module) {
    "use strict";
    var { EventEmitter } = __require("events");
    var {
      lsCacheSym,
      levelValSym,
      setLevelSym,
      getLevelSym,
      chindingsSym,
      parsedChindingsSym,
      mixinSym,
      asJsonSym,
      writeSym,
      mixinMergeStrategySym,
      timeSym,
      timeSliceIndexSym,
      streamSym,
      serializersSym,
      formattersSym,
      errorKeySym,
      messageKeySym,
      useOnlyCustomLevelsSym,
      needsMetadataGsym,
      redactFmtSym,
      stringifySym,
      formatOptsSym,
      stringifiersSym,
      msgPrefixSym
    } = require_symbols3();
    var {
      getLevel,
      setLevel,
      isLevelEnabled,
      mappings,
      initialLsCache,
      genLsCache,
      assertNoLevelCollisions
    } = require_levels();
    var {
      asChindings,
      asJson,
      buildFormatters,
      stringify
    } = require_tools();
    var {
      version
    } = require_meta();
    var redaction = require_redaction();
    var constructor = class Pino {
      static {
        __name(this, "Pino");
      }
    };
    var prototype = {
      constructor,
      child,
      bindings,
      setBindings,
      flush,
      isLevelEnabled,
      version,
      get level() {
        return this[getLevelSym]();
      },
      set level(lvl) {
        this[setLevelSym](lvl);
      },
      get levelVal() {
        return this[levelValSym];
      },
      set levelVal(n) {
        throw Error("levelVal is read-only");
      },
      [lsCacheSym]: initialLsCache,
      [writeSym]: write,
      [asJsonSym]: asJson,
      [getLevelSym]: getLevel,
      [setLevelSym]: setLevel
    };
    Object.setPrototypeOf(prototype, EventEmitter.prototype);
    module.exports = function() {
      return Object.create(prototype);
    };
    var resetChildingsFormatter = /* @__PURE__ */ __name((bindings2) => bindings2, "resetChildingsFormatter");
    function child(bindings2, options) {
      if (!bindings2) {
        throw Error("missing bindings for child Pino");
      }
      options = options || {};
      const serializers2 = this[serializersSym];
      const formatters2 = this[formattersSym];
      const instance = Object.create(this);
      if (options.hasOwnProperty("serializers") === true) {
        instance[serializersSym] = /* @__PURE__ */ Object.create(null);
        for (const k in serializers2) {
          instance[serializersSym][k] = serializers2[k];
        }
        const parentSymbols = Object.getOwnPropertySymbols(serializers2);
        for (var i = 0; i < parentSymbols.length; i++) {
          const ks = parentSymbols[i];
          instance[serializersSym][ks] = serializers2[ks];
        }
        for (const bk in options.serializers) {
          instance[serializersSym][bk] = options.serializers[bk];
        }
        const bindingsSymbols = Object.getOwnPropertySymbols(options.serializers);
        for (var bi = 0; bi < bindingsSymbols.length; bi++) {
          const bks = bindingsSymbols[bi];
          instance[serializersSym][bks] = options.serializers[bks];
        }
      } else
        instance[serializersSym] = serializers2;
      if (options.hasOwnProperty("formatters")) {
        const { level, bindings: chindings, log } = options.formatters;
        instance[formattersSym] = buildFormatters(
          level || formatters2.level,
          chindings || resetChildingsFormatter,
          log || formatters2.log
        );
      } else {
        instance[formattersSym] = buildFormatters(
          formatters2.level,
          resetChildingsFormatter,
          formatters2.log
        );
      }
      if (options.hasOwnProperty("customLevels") === true) {
        assertNoLevelCollisions(this.levels, options.customLevels);
        instance.levels = mappings(options.customLevels, instance[useOnlyCustomLevelsSym]);
        genLsCache(instance);
      }
      if (typeof options.redact === "object" && options.redact !== null || Array.isArray(options.redact)) {
        instance.redact = options.redact;
        const stringifiers = redaction(instance.redact, stringify);
        const formatOpts = { stringify: stringifiers[redactFmtSym] };
        instance[stringifySym] = stringify;
        instance[stringifiersSym] = stringifiers;
        instance[formatOptsSym] = formatOpts;
      }
      if (typeof options.msgPrefix === "string") {
        instance[msgPrefixSym] = (this[msgPrefixSym] || "") + options.msgPrefix;
      }
      instance[chindingsSym] = asChindings(instance, bindings2);
      const childLevel = options.level || this.level;
      instance[setLevelSym](childLevel);
      this.onChild(instance);
      return instance;
    }
    __name(child, "child");
    function bindings() {
      const chindings = this[chindingsSym];
      const chindingsJson = `{${chindings.substr(1)}}`;
      const bindingsFromJson = JSON.parse(chindingsJson);
      delete bindingsFromJson.pid;
      delete bindingsFromJson.hostname;
      return bindingsFromJson;
    }
    __name(bindings, "bindings");
    function setBindings(newBindings) {
      const chindings = asChindings(this, newBindings);
      this[chindingsSym] = chindings;
      delete this[parsedChindingsSym];
    }
    __name(setBindings, "setBindings");
    function defaultMixinMergeStrategy(mergeObject, mixinObject) {
      return Object.assign(mixinObject, mergeObject);
    }
    __name(defaultMixinMergeStrategy, "defaultMixinMergeStrategy");
    function write(_obj, msg, num) {
      const t = this[timeSym]();
      const mixin = this[mixinSym];
      const errorKey = this[errorKeySym];
      const messageKey = this[messageKeySym];
      const mixinMergeStrategy = this[mixinMergeStrategySym] || defaultMixinMergeStrategy;
      let obj;
      if (_obj === void 0 || _obj === null) {
        obj = {};
      } else if (_obj instanceof Error) {
        obj = { [errorKey]: _obj };
        if (msg === void 0) {
          msg = _obj.message;
        }
      } else {
        obj = _obj;
        if (msg === void 0 && _obj[messageKey] === void 0 && _obj[errorKey]) {
          msg = _obj[errorKey].message;
        }
      }
      if (mixin) {
        obj = mixinMergeStrategy(obj, mixin(obj, num, this));
      }
      const s = this[asJsonSym](obj, msg, num, t);
      const stream = this[streamSym];
      if (stream[needsMetadataGsym] === true) {
        stream.lastLevel = num;
        stream.lastObj = obj;
        stream.lastMsg = msg;
        stream.lastTime = t.slice(this[timeSliceIndexSym]);
        stream.lastLogger = this;
      }
      stream.write(s);
    }
    __name(write, "write");
    function noop() {
    }
    __name(noop, "noop");
    function flush(cb) {
      if (cb != null && typeof cb !== "function") {
        throw Error("callback must be a function");
      }
      const stream = this[streamSym];
      if (typeof stream.flush === "function") {
        stream.flush(cb || noop);
      } else if (cb)
        cb();
    }
    __name(flush, "flush");
  }
});

// node_modules/.pnpm/safe-stable-stringify@2.4.3/node_modules/safe-stable-stringify/index.js
var require_safe_stable_stringify = __commonJS({
  "node_modules/.pnpm/safe-stable-stringify@2.4.3/node_modules/safe-stable-stringify/index.js"(exports, module) {
    "use strict";
    var { hasOwnProperty } = Object.prototype;
    var stringify = configure();
    stringify.configure = configure;
    stringify.stringify = stringify;
    stringify.default = stringify;
    exports.stringify = stringify;
    exports.configure = configure;
    module.exports = stringify;
    var strEscapeSequencesRegExp = /[\u0000-\u001f\u0022\u005c\ud800-\udfff]|[\ud800-\udbff](?![\udc00-\udfff])|(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/;
    function strEscape(str) {
      if (str.length < 5e3 && !strEscapeSequencesRegExp.test(str)) {
        return `"${str}"`;
      }
      return JSON.stringify(str);
    }
    __name(strEscape, "strEscape");
    function insertSort(array) {
      if (array.length > 200) {
        return array.sort();
      }
      for (let i = 1; i < array.length; i++) {
        const currentValue = array[i];
        let position = i;
        while (position !== 0 && array[position - 1] > currentValue) {
          array[position] = array[position - 1];
          position--;
        }
        array[position] = currentValue;
      }
      return array;
    }
    __name(insertSort, "insertSort");
    var typedArrayPrototypeGetSymbolToStringTag = Object.getOwnPropertyDescriptor(
      Object.getPrototypeOf(
        Object.getPrototypeOf(
          new Int8Array()
        )
      ),
      Symbol.toStringTag
    ).get;
    function isTypedArrayWithEntries(value) {
      return typedArrayPrototypeGetSymbolToStringTag.call(value) !== void 0 && value.length !== 0;
    }
    __name(isTypedArrayWithEntries, "isTypedArrayWithEntries");
    function stringifyTypedArray(array, separator, maximumBreadth) {
      if (array.length < maximumBreadth) {
        maximumBreadth = array.length;
      }
      const whitespace = separator === "," ? "" : " ";
      let res = `"0":${whitespace}${array[0]}`;
      for (let i = 1; i < maximumBreadth; i++) {
        res += `${separator}"${i}":${whitespace}${array[i]}`;
      }
      return res;
    }
    __name(stringifyTypedArray, "stringifyTypedArray");
    function getCircularValueOption(options) {
      if (hasOwnProperty.call(options, "circularValue")) {
        const circularValue = options.circularValue;
        if (typeof circularValue === "string") {
          return `"${circularValue}"`;
        }
        if (circularValue == null) {
          return circularValue;
        }
        if (circularValue === Error || circularValue === TypeError) {
          return {
            toString() {
              throw new TypeError("Converting circular structure to JSON");
            }
          };
        }
        throw new TypeError('The "circularValue" argument must be of type string or the value null or undefined');
      }
      return '"[Circular]"';
    }
    __name(getCircularValueOption, "getCircularValueOption");
    function getBooleanOption(options, key) {
      let value;
      if (hasOwnProperty.call(options, key)) {
        value = options[key];
        if (typeof value !== "boolean") {
          throw new TypeError(`The "${key}" argument must be of type boolean`);
        }
      }
      return value === void 0 ? true : value;
    }
    __name(getBooleanOption, "getBooleanOption");
    function getPositiveIntegerOption(options, key) {
      let value;
      if (hasOwnProperty.call(options, key)) {
        value = options[key];
        if (typeof value !== "number") {
          throw new TypeError(`The "${key}" argument must be of type number`);
        }
        if (!Number.isInteger(value)) {
          throw new TypeError(`The "${key}" argument must be an integer`);
        }
        if (value < 1) {
          throw new RangeError(`The "${key}" argument must be >= 1`);
        }
      }
      return value === void 0 ? Infinity : value;
    }
    __name(getPositiveIntegerOption, "getPositiveIntegerOption");
    function getItemCount(number) {
      if (number === 1) {
        return "1 item";
      }
      return `${number} items`;
    }
    __name(getItemCount, "getItemCount");
    function getUniqueReplacerSet(replacerArray) {
      const replacerSet = /* @__PURE__ */ new Set();
      for (const value of replacerArray) {
        if (typeof value === "string" || typeof value === "number") {
          replacerSet.add(String(value));
        }
      }
      return replacerSet;
    }
    __name(getUniqueReplacerSet, "getUniqueReplacerSet");
    function getStrictOption(options) {
      if (hasOwnProperty.call(options, "strict")) {
        const value = options.strict;
        if (typeof value !== "boolean") {
          throw new TypeError('The "strict" argument must be of type boolean');
        }
        if (value) {
          return (value2) => {
            let message = `Object can not safely be stringified. Received type ${typeof value2}`;
            if (typeof value2 !== "function")
              message += ` (${value2.toString()})`;
            throw new Error(message);
          };
        }
      }
    }
    __name(getStrictOption, "getStrictOption");
    function configure(options) {
      options = { ...options };
      const fail = getStrictOption(options);
      if (fail) {
        if (options.bigint === void 0) {
          options.bigint = false;
        }
        if (!("circularValue" in options)) {
          options.circularValue = Error;
        }
      }
      const circularValue = getCircularValueOption(options);
      const bigint = getBooleanOption(options, "bigint");
      const deterministic = getBooleanOption(options, "deterministic");
      const maximumDepth = getPositiveIntegerOption(options, "maximumDepth");
      const maximumBreadth = getPositiveIntegerOption(options, "maximumBreadth");
      function stringifyFnReplacer(key, parent, stack, replacer, spacer, indentation) {
        let value = parent[key];
        if (typeof value === "object" && value !== null && typeof value.toJSON === "function") {
          value = value.toJSON(key);
        }
        value = replacer.call(parent, key, value);
        switch (typeof value) {
          case "string":
            return strEscape(value);
          case "object": {
            if (value === null) {
              return "null";
            }
            if (stack.indexOf(value) !== -1) {
              return circularValue;
            }
            let res = "";
            let join = ",";
            const originalIndentation = indentation;
            if (Array.isArray(value)) {
              if (value.length === 0) {
                return "[]";
              }
              if (maximumDepth < stack.length + 1) {
                return '"[Array]"';
              }
              stack.push(value);
              if (spacer !== "") {
                indentation += spacer;
                res += `
${indentation}`;
                join = `,
${indentation}`;
              }
              const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
              let i = 0;
              for (; i < maximumValuesToStringify - 1; i++) {
                const tmp2 = stringifyFnReplacer(String(i), value, stack, replacer, spacer, indentation);
                res += tmp2 !== void 0 ? tmp2 : "null";
                res += join;
              }
              const tmp = stringifyFnReplacer(String(i), value, stack, replacer, spacer, indentation);
              res += tmp !== void 0 ? tmp : "null";
              if (value.length - 1 > maximumBreadth) {
                const removedKeys = value.length - maximumBreadth - 1;
                res += `${join}"... ${getItemCount(removedKeys)} not stringified"`;
              }
              if (spacer !== "") {
                res += `
${originalIndentation}`;
              }
              stack.pop();
              return `[${res}]`;
            }
            let keys = Object.keys(value);
            const keyLength = keys.length;
            if (keyLength === 0) {
              return "{}";
            }
            if (maximumDepth < stack.length + 1) {
              return '"[Object]"';
            }
            let whitespace = "";
            let separator = "";
            if (spacer !== "") {
              indentation += spacer;
              join = `,
${indentation}`;
              whitespace = " ";
            }
            const maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
            if (deterministic && !isTypedArrayWithEntries(value)) {
              keys = insertSort(keys);
            }
            stack.push(value);
            for (let i = 0; i < maximumPropertiesToStringify; i++) {
              const key2 = keys[i];
              const tmp = stringifyFnReplacer(key2, value, stack, replacer, spacer, indentation);
              if (tmp !== void 0) {
                res += `${separator}${strEscape(key2)}:${whitespace}${tmp}`;
                separator = join;
              }
            }
            if (keyLength > maximumBreadth) {
              const removedKeys = keyLength - maximumBreadth;
              res += `${separator}"...":${whitespace}"${getItemCount(removedKeys)} not stringified"`;
              separator = join;
            }
            if (spacer !== "" && separator.length > 1) {
              res = `
${indentation}${res}
${originalIndentation}`;
            }
            stack.pop();
            return `{${res}}`;
          }
          case "number":
            return isFinite(value) ? String(value) : fail ? fail(value) : "null";
          case "boolean":
            return value === true ? "true" : "false";
          case "undefined":
            return void 0;
          case "bigint":
            if (bigint) {
              return String(value);
            }
          default:
            return fail ? fail(value) : void 0;
        }
      }
      __name(stringifyFnReplacer, "stringifyFnReplacer");
      function stringifyArrayReplacer(key, value, stack, replacer, spacer, indentation) {
        if (typeof value === "object" && value !== null && typeof value.toJSON === "function") {
          value = value.toJSON(key);
        }
        switch (typeof value) {
          case "string":
            return strEscape(value);
          case "object": {
            if (value === null) {
              return "null";
            }
            if (stack.indexOf(value) !== -1) {
              return circularValue;
            }
            const originalIndentation = indentation;
            let res = "";
            let join = ",";
            if (Array.isArray(value)) {
              if (value.length === 0) {
                return "[]";
              }
              if (maximumDepth < stack.length + 1) {
                return '"[Array]"';
              }
              stack.push(value);
              if (spacer !== "") {
                indentation += spacer;
                res += `
${indentation}`;
                join = `,
${indentation}`;
              }
              const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
              let i = 0;
              for (; i < maximumValuesToStringify - 1; i++) {
                const tmp2 = stringifyArrayReplacer(String(i), value[i], stack, replacer, spacer, indentation);
                res += tmp2 !== void 0 ? tmp2 : "null";
                res += join;
              }
              const tmp = stringifyArrayReplacer(String(i), value[i], stack, replacer, spacer, indentation);
              res += tmp !== void 0 ? tmp : "null";
              if (value.length - 1 > maximumBreadth) {
                const removedKeys = value.length - maximumBreadth - 1;
                res += `${join}"... ${getItemCount(removedKeys)} not stringified"`;
              }
              if (spacer !== "") {
                res += `
${originalIndentation}`;
              }
              stack.pop();
              return `[${res}]`;
            }
            stack.push(value);
            let whitespace = "";
            if (spacer !== "") {
              indentation += spacer;
              join = `,
${indentation}`;
              whitespace = " ";
            }
            let separator = "";
            for (const key2 of replacer) {
              const tmp = stringifyArrayReplacer(key2, value[key2], stack, replacer, spacer, indentation);
              if (tmp !== void 0) {
                res += `${separator}${strEscape(key2)}:${whitespace}${tmp}`;
                separator = join;
              }
            }
            if (spacer !== "" && separator.length > 1) {
              res = `
${indentation}${res}
${originalIndentation}`;
            }
            stack.pop();
            return `{${res}}`;
          }
          case "number":
            return isFinite(value) ? String(value) : fail ? fail(value) : "null";
          case "boolean":
            return value === true ? "true" : "false";
          case "undefined":
            return void 0;
          case "bigint":
            if (bigint) {
              return String(value);
            }
          default:
            return fail ? fail(value) : void 0;
        }
      }
      __name(stringifyArrayReplacer, "stringifyArrayReplacer");
      function stringifyIndent(key, value, stack, spacer, indentation) {
        switch (typeof value) {
          case "string":
            return strEscape(value);
          case "object": {
            if (value === null) {
              return "null";
            }
            if (typeof value.toJSON === "function") {
              value = value.toJSON(key);
              if (typeof value !== "object") {
                return stringifyIndent(key, value, stack, spacer, indentation);
              }
              if (value === null) {
                return "null";
              }
            }
            if (stack.indexOf(value) !== -1) {
              return circularValue;
            }
            const originalIndentation = indentation;
            if (Array.isArray(value)) {
              if (value.length === 0) {
                return "[]";
              }
              if (maximumDepth < stack.length + 1) {
                return '"[Array]"';
              }
              stack.push(value);
              indentation += spacer;
              let res2 = `
${indentation}`;
              const join2 = `,
${indentation}`;
              const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
              let i = 0;
              for (; i < maximumValuesToStringify - 1; i++) {
                const tmp2 = stringifyIndent(String(i), value[i], stack, spacer, indentation);
                res2 += tmp2 !== void 0 ? tmp2 : "null";
                res2 += join2;
              }
              const tmp = stringifyIndent(String(i), value[i], stack, spacer, indentation);
              res2 += tmp !== void 0 ? tmp : "null";
              if (value.length - 1 > maximumBreadth) {
                const removedKeys = value.length - maximumBreadth - 1;
                res2 += `${join2}"... ${getItemCount(removedKeys)} not stringified"`;
              }
              res2 += `
${originalIndentation}`;
              stack.pop();
              return `[${res2}]`;
            }
            let keys = Object.keys(value);
            const keyLength = keys.length;
            if (keyLength === 0) {
              return "{}";
            }
            if (maximumDepth < stack.length + 1) {
              return '"[Object]"';
            }
            indentation += spacer;
            const join = `,
${indentation}`;
            let res = "";
            let separator = "";
            let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
            if (isTypedArrayWithEntries(value)) {
              res += stringifyTypedArray(value, join, maximumBreadth);
              keys = keys.slice(value.length);
              maximumPropertiesToStringify -= value.length;
              separator = join;
            }
            if (deterministic) {
              keys = insertSort(keys);
            }
            stack.push(value);
            for (let i = 0; i < maximumPropertiesToStringify; i++) {
              const key2 = keys[i];
              const tmp = stringifyIndent(key2, value[key2], stack, spacer, indentation);
              if (tmp !== void 0) {
                res += `${separator}${strEscape(key2)}: ${tmp}`;
                separator = join;
              }
            }
            if (keyLength > maximumBreadth) {
              const removedKeys = keyLength - maximumBreadth;
              res += `${separator}"...": "${getItemCount(removedKeys)} not stringified"`;
              separator = join;
            }
            if (separator !== "") {
              res = `
${indentation}${res}
${originalIndentation}`;
            }
            stack.pop();
            return `{${res}}`;
          }
          case "number":
            return isFinite(value) ? String(value) : fail ? fail(value) : "null";
          case "boolean":
            return value === true ? "true" : "false";
          case "undefined":
            return void 0;
          case "bigint":
            if (bigint) {
              return String(value);
            }
          default:
            return fail ? fail(value) : void 0;
        }
      }
      __name(stringifyIndent, "stringifyIndent");
      function stringifySimple(key, value, stack) {
        switch (typeof value) {
          case "string":
            return strEscape(value);
          case "object": {
            if (value === null) {
              return "null";
            }
            if (typeof value.toJSON === "function") {
              value = value.toJSON(key);
              if (typeof value !== "object") {
                return stringifySimple(key, value, stack);
              }
              if (value === null) {
                return "null";
              }
            }
            if (stack.indexOf(value) !== -1) {
              return circularValue;
            }
            let res = "";
            if (Array.isArray(value)) {
              if (value.length === 0) {
                return "[]";
              }
              if (maximumDepth < stack.length + 1) {
                return '"[Array]"';
              }
              stack.push(value);
              const maximumValuesToStringify = Math.min(value.length, maximumBreadth);
              let i = 0;
              for (; i < maximumValuesToStringify - 1; i++) {
                const tmp2 = stringifySimple(String(i), value[i], stack);
                res += tmp2 !== void 0 ? tmp2 : "null";
                res += ",";
              }
              const tmp = stringifySimple(String(i), value[i], stack);
              res += tmp !== void 0 ? tmp : "null";
              if (value.length - 1 > maximumBreadth) {
                const removedKeys = value.length - maximumBreadth - 1;
                res += `,"... ${getItemCount(removedKeys)} not stringified"`;
              }
              stack.pop();
              return `[${res}]`;
            }
            let keys = Object.keys(value);
            const keyLength = keys.length;
            if (keyLength === 0) {
              return "{}";
            }
            if (maximumDepth < stack.length + 1) {
              return '"[Object]"';
            }
            let separator = "";
            let maximumPropertiesToStringify = Math.min(keyLength, maximumBreadth);
            if (isTypedArrayWithEntries(value)) {
              res += stringifyTypedArray(value, ",", maximumBreadth);
              keys = keys.slice(value.length);
              maximumPropertiesToStringify -= value.length;
              separator = ",";
            }
            if (deterministic) {
              keys = insertSort(keys);
            }
            stack.push(value);
            for (let i = 0; i < maximumPropertiesToStringify; i++) {
              const key2 = keys[i];
              const tmp = stringifySimple(key2, value[key2], stack);
              if (tmp !== void 0) {
                res += `${separator}${strEscape(key2)}:${tmp}`;
                separator = ",";
              }
            }
            if (keyLength > maximumBreadth) {
              const removedKeys = keyLength - maximumBreadth;
              res += `${separator}"...":"${getItemCount(removedKeys)} not stringified"`;
            }
            stack.pop();
            return `{${res}}`;
          }
          case "number":
            return isFinite(value) ? String(value) : fail ? fail(value) : "null";
          case "boolean":
            return value === true ? "true" : "false";
          case "undefined":
            return void 0;
          case "bigint":
            if (bigint) {
              return String(value);
            }
          default:
            return fail ? fail(value) : void 0;
        }
      }
      __name(stringifySimple, "stringifySimple");
      function stringify2(value, replacer, space) {
        if (arguments.length > 1) {
          let spacer = "";
          if (typeof space === "number") {
            spacer = " ".repeat(Math.min(space, 10));
          } else if (typeof space === "string") {
            spacer = space.slice(0, 10);
          }
          if (replacer != null) {
            if (typeof replacer === "function") {
              return stringifyFnReplacer("", { "": value }, [], replacer, spacer, "");
            }
            if (Array.isArray(replacer)) {
              return stringifyArrayReplacer("", value, [], getUniqueReplacerSet(replacer), spacer, "");
            }
          }
          if (spacer.length !== 0) {
            return stringifyIndent("", value, [], spacer, "");
          }
        }
        return stringifySimple("", value, []);
      }
      __name(stringify2, "stringify");
      return stringify2;
    }
    __name(configure, "configure");
  }
});

// node_modules/.pnpm/pino@8.17.1/node_modules/pino/lib/multistream.js
var require_multistream = __commonJS({
  "node_modules/.pnpm/pino@8.17.1/node_modules/pino/lib/multistream.js"(exports, module) {
    "use strict";
    var metadata = Symbol.for("pino.metadata");
    var { levels } = require_levels();
    var DEFAULT_INFO_LEVEL = levels.info;
    function multistream(streamsArray, opts) {
      let counter = 0;
      streamsArray = streamsArray || [];
      opts = opts || { dedupe: false };
      const streamLevels = Object.create(levels);
      streamLevels.silent = Infinity;
      if (opts.levels && typeof opts.levels === "object") {
        Object.keys(opts.levels).forEach((i) => {
          streamLevels[i] = opts.levels[i];
        });
      }
      const res = {
        write,
        add,
        flushSync,
        end,
        minLevel: 0,
        streams: [],
        clone,
        [metadata]: true,
        streamLevels
      };
      if (Array.isArray(streamsArray)) {
        streamsArray.forEach(add, res);
      } else {
        add.call(res, streamsArray);
      }
      streamsArray = null;
      return res;
      function write(data) {
        let dest;
        const level = this.lastLevel;
        const { streams } = this;
        let recordedLevel = 0;
        let stream;
        for (let i = initLoopVar(streams.length, opts.dedupe); checkLoopVar(i, streams.length, opts.dedupe); i = adjustLoopVar(i, opts.dedupe)) {
          dest = streams[i];
          if (dest.level <= level) {
            if (recordedLevel !== 0 && recordedLevel !== dest.level) {
              break;
            }
            stream = dest.stream;
            if (stream[metadata]) {
              const { lastTime, lastMsg, lastObj, lastLogger } = this;
              stream.lastLevel = level;
              stream.lastTime = lastTime;
              stream.lastMsg = lastMsg;
              stream.lastObj = lastObj;
              stream.lastLogger = lastLogger;
            }
            stream.write(data);
            if (opts.dedupe) {
              recordedLevel = dest.level;
            }
          } else if (!opts.dedupe) {
            break;
          }
        }
      }
      __name(write, "write");
      function flushSync() {
        for (const { stream } of this.streams) {
          if (typeof stream.flushSync === "function") {
            stream.flushSync();
          }
        }
      }
      __name(flushSync, "flushSync");
      function add(dest) {
        if (!dest) {
          return res;
        }
        const isStream = typeof dest.write === "function" || dest.stream;
        const stream_ = dest.write ? dest : dest.stream;
        if (!isStream) {
          throw Error("stream object needs to implement either StreamEntry or DestinationStream interface");
        }
        const { streams, streamLevels: streamLevels2 } = this;
        let level;
        if (typeof dest.levelVal === "number") {
          level = dest.levelVal;
        } else if (typeof dest.level === "string") {
          level = streamLevels2[dest.level];
        } else if (typeof dest.level === "number") {
          level = dest.level;
        } else {
          level = DEFAULT_INFO_LEVEL;
        }
        const dest_ = {
          stream: stream_,
          level,
          levelVal: void 0,
          id: counter++
        };
        streams.unshift(dest_);
        streams.sort(compareByLevel);
        this.minLevel = streams[0].level;
        return res;
      }
      __name(add, "add");
      function end() {
        for (const { stream } of this.streams) {
          if (typeof stream.flushSync === "function") {
            stream.flushSync();
          }
          stream.end();
        }
      }
      __name(end, "end");
      function clone(level) {
        const streams = new Array(this.streams.length);
        for (let i = 0; i < streams.length; i++) {
          streams[i] = {
            level,
            stream: this.streams[i].stream
          };
        }
        return {
          write,
          add,
          minLevel: level,
          streams,
          clone,
          flushSync,
          [metadata]: true
        };
      }
      __name(clone, "clone");
    }
    __name(multistream, "multistream");
    function compareByLevel(a, b) {
      return a.level - b.level;
    }
    __name(compareByLevel, "compareByLevel");
    function initLoopVar(length, dedupe) {
      return dedupe ? length - 1 : 0;
    }
    __name(initLoopVar, "initLoopVar");
    function adjustLoopVar(i, dedupe) {
      return dedupe ? i - 1 : i + 1;
    }
    __name(adjustLoopVar, "adjustLoopVar");
    function checkLoopVar(i, length, dedupe) {
      return dedupe ? i >= 0 : i < length;
    }
    __name(checkLoopVar, "checkLoopVar");
    module.exports = multistream;
  }
});

// node_modules/.pnpm/pino@8.17.1/node_modules/pino/pino.js
var require_pino = __commonJS({
  "node_modules/.pnpm/pino@8.17.1/node_modules/pino/pino.js"(exports, module) {
    "use strict";
    var os = __require("os");
    var stdSerializers2 = require_pino_std_serializers();
    var caller = require_caller();
    var redaction = require_redaction();
    var time = require_time();
    var proto = require_proto();
    var symbols = require_symbols3();
    var { configure } = require_safe_stable_stringify();
    var { assertDefaultLevelFound, mappings, genLsCache, levels } = require_levels();
    var {
      createArgsNormalizer,
      asChindings,
      buildSafeSonicBoom,
      buildFormatters,
      stringify,
      normalizeDestFileDescriptor,
      noop
    } = require_tools();
    var { version } = require_meta();
    var {
      chindingsSym,
      redactFmtSym,
      serializersSym,
      timeSym,
      timeSliceIndexSym,
      streamSym,
      stringifySym,
      stringifySafeSym,
      stringifiersSym,
      setLevelSym,
      endSym,
      formatOptsSym,
      messageKeySym,
      errorKeySym,
      nestedKeySym,
      mixinSym,
      useOnlyCustomLevelsSym,
      formattersSym,
      hooksSym,
      nestedKeyStrSym,
      mixinMergeStrategySym,
      msgPrefixSym
    } = symbols;
    var { epochTime, nullTime } = time;
    var { pid } = process;
    var hostname = os.hostname();
    var defaultErrorSerializer = stdSerializers2.err;
    var defaultOptions = {
      level: "info",
      levels,
      messageKey: "msg",
      errorKey: "err",
      nestedKey: null,
      enabled: true,
      base: { pid, hostname },
      serializers: Object.assign(/* @__PURE__ */ Object.create(null), {
        err: defaultErrorSerializer
      }),
      formatters: Object.assign(/* @__PURE__ */ Object.create(null), {
        bindings(bindings) {
          return bindings;
        },
        level(label, number) {
          return { level: number };
        }
      }),
      hooks: {
        logMethod: void 0
      },
      timestamp: epochTime,
      name: void 0,
      redact: null,
      customLevels: null,
      useOnlyCustomLevels: false,
      depthLimit: 5,
      edgeLimit: 100
    };
    var normalize = createArgsNormalizer(defaultOptions);
    var serializers2 = Object.assign(/* @__PURE__ */ Object.create(null), stdSerializers2);
    function pino3(...args) {
      const instance = {};
      const { opts, stream } = normalize(instance, caller(), ...args);
      const {
        redact,
        crlf,
        serializers: serializers3,
        timestamp,
        messageKey,
        errorKey,
        nestedKey,
        base,
        name,
        level,
        customLevels,
        mixin,
        mixinMergeStrategy,
        useOnlyCustomLevels,
        formatters: formatters2,
        hooks,
        depthLimit,
        edgeLimit,
        onChild,
        msgPrefix
      } = opts;
      const stringifySafe = configure({
        maximumDepth: depthLimit,
        maximumBreadth: edgeLimit
      });
      const allFormatters = buildFormatters(
        formatters2.level,
        formatters2.bindings,
        formatters2.log
      );
      const stringifyFn = stringify.bind({
        [stringifySafeSym]: stringifySafe
      });
      const stringifiers = redact ? redaction(redact, stringifyFn) : {};
      const formatOpts = redact ? { stringify: stringifiers[redactFmtSym] } : { stringify: stringifyFn };
      const end = "}" + (crlf ? "\r\n" : "\n");
      const coreChindings = asChindings.bind(null, {
        [chindingsSym]: "",
        [serializersSym]: serializers3,
        [stringifiersSym]: stringifiers,
        [stringifySym]: stringify,
        [stringifySafeSym]: stringifySafe,
        [formattersSym]: allFormatters
      });
      let chindings = "";
      if (base !== null) {
        if (name === void 0) {
          chindings = coreChindings(base);
        } else {
          chindings = coreChindings(Object.assign({}, base, { name }));
        }
      }
      const time2 = timestamp instanceof Function ? timestamp : timestamp ? epochTime : nullTime;
      const timeSliceIndex = time2().indexOf(":") + 1;
      if (useOnlyCustomLevels && !customLevels)
        throw Error("customLevels is required if useOnlyCustomLevels is set true");
      if (mixin && typeof mixin !== "function")
        throw Error(`Unknown mixin type "${typeof mixin}" - expected "function"`);
      if (msgPrefix && typeof msgPrefix !== "string")
        throw Error(`Unknown msgPrefix type "${typeof msgPrefix}" - expected "string"`);
      assertDefaultLevelFound(level, customLevels, useOnlyCustomLevels);
      const levels2 = mappings(customLevels, useOnlyCustomLevels);
      Object.assign(instance, {
        levels: levels2,
        [useOnlyCustomLevelsSym]: useOnlyCustomLevels,
        [streamSym]: stream,
        [timeSym]: time2,
        [timeSliceIndexSym]: timeSliceIndex,
        [stringifySym]: stringify,
        [stringifySafeSym]: stringifySafe,
        [stringifiersSym]: stringifiers,
        [endSym]: end,
        [formatOptsSym]: formatOpts,
        [messageKeySym]: messageKey,
        [errorKeySym]: errorKey,
        [nestedKeySym]: nestedKey,
        // protect against injection
        [nestedKeyStrSym]: nestedKey ? `,${JSON.stringify(nestedKey)}:{` : "",
        [serializersSym]: serializers3,
        [mixinSym]: mixin,
        [mixinMergeStrategySym]: mixinMergeStrategy,
        [chindingsSym]: chindings,
        [formattersSym]: allFormatters,
        [hooksSym]: hooks,
        silent: noop,
        onChild,
        [msgPrefixSym]: msgPrefix
      });
      Object.setPrototypeOf(instance, proto());
      genLsCache(instance);
      instance[setLevelSym](level);
      return instance;
    }
    __name(pino3, "pino");
    module.exports = pino3;
    module.exports.destination = (dest = process.stdout.fd) => {
      if (typeof dest === "object") {
        dest.dest = normalizeDestFileDescriptor(dest.dest || process.stdout.fd);
        return buildSafeSonicBoom(dest);
      } else {
        return buildSafeSonicBoom({ dest: normalizeDestFileDescriptor(dest), minLength: 0 });
      }
    };
    module.exports.transport = require_transport();
    module.exports.multistream = require_multistream();
    module.exports.levels = mappings();
    module.exports.stdSerializers = serializers2;
    module.exports.stdTimeFunctions = Object.assign({}, time);
    module.exports.symbols = symbols;
    module.exports.version = version;
    module.exports.default = pino3;
    module.exports.pino = pino3;
  }
});

// node_modules/.pnpm/@bogeychan+elysia-polyfills@0.6.1_elysia@0.8.8/node_modules/@bogeychan/elysia-polyfills/dist/mjs/env/node/server.js
import fs from "node:fs";
import http from "node:http";
import https from "node:https";
import { Blob as Blob2 } from "node:buffer";

// node_modules/.pnpm/@bogeychan+elysia-polyfills@0.6.1_elysia@0.8.8/node_modules/@bogeychan/elysia-polyfills/dist/mjs/env/node/utils.js
function toReadableStream(req) {
  return new ReadableStream({
    start(controller) {
      req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      req.on("end", () => {
        controller.close();
      });
    },
    cancel(reason) {
      req.destroy(reason);
    }
  });
}
__name(toReadableStream, "toReadableStream");
function toHeaders(httpHeaders) {
  const headers = new Headers();
  for (const name in httpHeaders) {
    const values = httpHeaders[name];
    if (typeof values === "string") {
      headers.set(name, values);
    } else {
      for (const value in values) {
        headers.set(name, value);
      }
    }
  }
  return headers;
}
__name(toHeaders, "toHeaders");

// node_modules/.pnpm/@bogeychan+elysia-polyfills@0.6.1_elysia@0.8.8/node_modules/@bogeychan/elysia-polyfills/dist/mjs/env/node/request.js
async function request(req, { hostname, port }) {
  const stream = toReadableStream(req);
  return new Promise((res, rej) => {
    req.on("end", async () => {
      try {
        const url = `http://${hostname}:${port}${req.url}`;
        const init = {
          headers: toHeaders(req.headers),
          method: req.method
        };
        switch (req.method) {
          case "GET":
          case "HEAD":
            stream.cancel("Request with GET/HEAD method cannot have body");
            break;
          default:
            init.body = stream;
            init.duplex = "half";
            break;
        }
        res(new Request(url, init));
      } catch (error) {
        rej(error);
      }
    });
    req.on("error", (error) => {
      rej(error);
    });
  });
}
__name(request, "request");

// node_modules/.pnpm/@bogeychan+elysia-polyfills@0.6.1_elysia@0.8.8/node_modules/@bogeychan/elysia-polyfills/dist/mjs/env/node/response.js
async function response(response2, httpResponse) {
  httpResponse.statusCode = response2.status;
  httpResponse.statusMessage = response2.statusText;
  for (const [name, value] of response2.headers) {
    httpResponse.setHeader(name, value);
  }
  await response2.body?.pipeTo(new WritableStream({
    write(chunk) {
      httpResponse.write(chunk);
    }
  }));
}
__name(response, "response");

// node_modules/.pnpm/@bogeychan+elysia-polyfills@0.6.1_elysia@0.8.8/node_modules/@bogeychan/elysia-polyfills/dist/mjs/config.js
function ensureDefaults(options) {
  if (typeof options.port === "undefined") {
    options.port = process.env.PORT ?? "3000";
  }
  if (typeof options.port === "string") {
    options.port = parseInt(options.port);
  }
  if (isNaN(options.port)) {
    throw new Error(`Invalid port "${options.port}"`);
  }
  if (!options.hostname) {
    options.hostname = "0.0.0.0";
  }
  const { key, cert } = options;
  if (typeof key !== "undefined" && typeof cert !== "undefined") {
    if (typeof key !== "string" || typeof cert !== "string") {
      throw new Error(`Key and Cert are only supported in "string" (i.e. PEM) format`);
    }
  }
  return options;
}
__name(ensureDefaults, "ensureDefaults");

// node_modules/.pnpm/@bogeychan+elysia-polyfills@0.6.1_elysia@0.8.8/node_modules/@bogeychan/elysia-polyfills/dist/mjs/env/error.js
var statusText = "Internal Server Error";
async function handleError(options, server, error) {
  if (options.error) {
    const response2 = await options.error.call(server, error);
    if (response2) {
      return response2;
    }
  }
  return new Response(statusText, { status: 500, statusText });
}
__name(handleError, "handleError");

// node_modules/.pnpm/@bogeychan+elysia-polyfills@0.6.1_elysia@0.8.8/node_modules/@bogeychan/elysia-polyfills/dist/mjs/env/node/server.js
var ElysiaBun = {
  serve(options) {
    const { hostname, port, key, cert } = ensureDefaults(options);
    let isRunning = false;
    let shutdown;
    const server = {
      id: "",
      port,
      hostname,
      pendingRequests: 0,
      pendingWebSockets: 0,
      development: options.development ?? process.env.NODE_ENV !== "production",
      fetch: (request2) => options.fetch.call(server, request2, server),
      stop() {
      },
      reload(newOptions) {
        if (newOptions.fetch) {
          options.fetch = newOptions.fetch;
        }
      }
    };
    const handler = /* @__PURE__ */ __name(async (req, res) => {
      try {
        const my_request = await request(req, options);
        let my_response;
        try {
          my_response = await server.fetch(my_request);
        } catch (error) {
          my_response = await handleError(options, server, error);
        }
        await response(my_response, res);
      } finally {
        res.end();
      }
    }, "handler");
    const httpServer = key && cert ? https.createServer({ key, cert }, handler) : http.createServer(handler);
    server.stop = (closeActiveConnections) => {
      if (!isRunning) {
        shutdown = { closeAll: closeActiveConnections };
        return;
      }
      if (closeActiveConnections) {
        httpServer.closeAllConnections();
      }
      httpServer.close((error) => {
        if (error) {
          console.error(error);
        }
      });
      setImmediate(() => httpServer.emit("close"));
    };
    httpServer.listen(port, hostname, () => {
      isRunning = true;
      if (shutdown) {
        server.stop(shutdown.closeAll);
      }
    });
    return server;
  },
  gc() {
  },
  file(path, options) {
    const buffer = fs.readFileSync(path);
    return new Blob2([buffer], { type: options?.type });
  }
};
globalThis.Bun = ElysiaBun;

// node_modules/.pnpm/@bogeychan+elysia-polyfills@0.6.1_elysia@0.8.8/node_modules/@bogeychan/elysia-polyfills/dist/mjs/env/headers.js
var BunHeaders = class extends Headers {
  static {
    __name(this, "BunHeaders");
  }
  toJSON() {
    const entries = {};
    for (const [name, value] of this.entries()) {
      entries[name] = value;
    }
    return entries;
  }
};
var BunRequest = class extends Request {
  static {
    __name(this, "BunRequest");
  }
  get headers() {
    return new BunHeaders(super.headers);
  }
};
globalThis.Headers = BunHeaders;
globalThis.Request = BunRequest;

// main.ts
var import_elysia2 = __toESM(require_cjs2(), 1);

// node_modules/.pnpm/@bogeychan+elysia-logger@0.0.14_elysia@0.8.8/node_modules/@bogeychan/elysia-logger/dist/index.js
var import_pino2 = __toESM(require_pino(), 1);
var import_elysia = __toESM(require_cjs2(), 1);

// node_modules/.pnpm/@bogeychan+elysia-logger@0.0.14_elysia@0.8.8/node_modules/@bogeychan/elysia-logger/dist/config/serializers.js
var import_pino = __toESM(require_pino(), 1);
var serializers = {
  request: serializeRequest,
  err: import_pino.stdSerializers.err
};
function serializeRequest(request2) {
  return {
    method: request2.method,
    url: request2.url,
    referrer: request2.headers.get("Referer")
  };
}
__name(serializeRequest, "serializeRequest");

// node_modules/.pnpm/@bogeychan+elysia-logger@0.0.14_elysia@0.8.8/node_modules/@bogeychan/elysia-logger/dist/config/formatters.js
var formatters = {
  log(object) {
    if (isContext(object)) {
      const context = object;
      const log = {
        request: context.request
      };
      if (context.store.responseTime) {
        log.responseTime = context.store.responseTime;
      }
      return log;
    } else if (isRequest(object)) {
      return serializeRequest(object);
    }
    return object;
  }
};
function isContext(object) {
  const context = object;
  return context.request && context.store;
}
__name(isContext, "isContext");
function isRequest(object) {
  const request2 = object;
  return request2.url && request2.method;
}
__name(isRequest, "isRequest");

// node_modules/.pnpm/@bogeychan+elysia-logger@0.0.14_elysia@0.8.8/node_modules/@bogeychan/elysia-logger/dist/index.js
var import_pino3 = __toESM(require_pino(), 1);
function logger(options = {}) {
  return plugin(options);
}
__name(logger, "logger");
function createPinoLoggerInternal(options) {
  options.level ??= "info";
  options.formatters ??= formatters;
  options.serializers ??= serializers;
  const streamOptions = options;
  if ("file" in options) {
    streamOptions.stream = import_pino2.default.destination(options.file);
    delete options.file;
  }
  return (0, import_pino2.default)(options, streamOptions.stream);
}
__name(createPinoLoggerInternal, "createPinoLoggerInternal");
function into(options = {}) {
  const autoLogging = options.autoLogging ?? true;
  delete options.autoLogging;
  let log;
  let app2 = new import_elysia.default({
    name: "@bogeychan/elysia-logger",
    seed: options
  }).derive((ctx) => {
    log = typeof options.customProps === "function" ? this.child(options.customProps(ctx)) : this;
    return { log };
  });
  if (autoLogging) {
    app2 = app2.onRequest((ctx) => {
      ctx.store = { ...ctx.store, startTime: performance.now() };
    }).onResponse((ctx) => {
      if (log.level == "silent") {
        return;
      }
      if (typeof autoLogging == "object" && autoLogging.ignore(ctx)) {
        return;
      }
      ctx.store.startTime ??= 0;
      ctx.store.endTime = performance.now();
      ctx.store.responseTime = ctx.store.endTime - ctx.store.startTime;
      log.info(ctx);
    });
  }
  return app2;
}
__name(into, "into");
var plugin = /* @__PURE__ */ __name((options) => into.bind(createPinoLoggerInternal(options))(options), "plugin");

// main.ts
var app = new import_elysia2.Elysia().use(logger({ level: "warn" })).get("/", () => ({ hello: "Node.js\u{1F44B}" })).listen(8080);
console.log(`Listening on http://localhost:${app.server.port}`);
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
