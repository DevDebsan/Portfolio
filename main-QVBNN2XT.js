var zT=Object.defineProperty,GT=Object.defineProperties;var WT=Object.getOwnPropertyDescriptors;var bv=Object.getOwnPropertySymbols;var jT=Object.prototype.hasOwnProperty,$T=Object.prototype.propertyIsEnumerable;var Sv=(i,e,t)=>e in i?zT(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,Jn=(i,e)=>{for(var t in e||={})jT.call(e,t)&&Sv(i,t,e[t]);if(bv)for(var t of bv(e))$T.call(e,t)&&Sv(i,t,e[t]);return i},Wi=(i,e)=>GT(i,WT(e));var nm=null;var wv=1;var Ma=Symbol("SIGNAL");function ft(i){let e=nm;return nm=i,e}function Hu(){return nm}var rm={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Tv(i){if(!(Gu(i)&&!i.dirty)&&!(!i.dirty&&i.lastCleanEpoch===wv)){if(!i.producerMustRecompute(i)&&!om(i)){im(i);return}i.producerRecomputeValue(i),im(i)}}function im(i){i.dirty=!1,i.lastCleanEpoch=wv}function sm(i){return i&&Cv(i),ft(i)}function Cv(i){i.producersTail=void 0,i.recomputing=!0}function Dv(i,e){ft(e),i&&Av(i)}function Av(i){i.recomputing=!1;let e=i.producersTail,t=e!==void 0?e.nextProducer:i.producers;if(t!==void 0){if(Gu(i))do t=am(t);while(t!==void 0);e!==void 0?e.nextProducer=void 0:i.producers=void 0}}function om(i){for(let e=i.producers;e!==void 0;e=e.nextProducer){let t=e.producer,n=e.lastReadVersion;if(n!==t.version||(Tv(t),n!==t.version))return!0}return!1}function zu(i){if(Gu(i)){let e=i.producers;for(;e!==void 0;)e=am(e)}i.producers=void 0,i.producersTail=void 0,i.consumers=void 0,i.consumersTail=void 0}function am(i){let e=i.producer,t=i.nextProducer,n=i.nextConsumer,r=i.prevConsumer;if(i.nextConsumer=void 0,i.prevConsumer=void 0,n!==void 0?n.prevConsumer=r:e.consumersTail=r,r!==void 0)r.nextConsumer=n;else if(e.consumers=n,!Gu(e)){let s=e.producers;for(;s!==void 0;)s=am(s)}return t}function Gu(i){return i.consumerIsAlwaysLive||i.consumers!==void 0}function qT(){throw new Error}var XT=qT;function cm(i){XT=i}function lt(i){return typeof i=="function"}function Wu(i){let t=i(n=>{Error.call(n),n.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var ju=Wu(i=>function(t){i(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((n,r)=>`${r+1}) ${n.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function co(i,e){if(i){let t=i.indexOf(e);0<=t&&i.splice(t,1)}}var Dn=class i{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:n}=this;if(lt(n))try{n()}catch(s){e=s instanceof ju?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{Iv(s)}catch(o){e=e??[],o instanceof ju?e=[...e,...o.errors]:e.push(o)}}if(e)throw new ju(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Iv(e);else{if(e instanceof i){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&co(t,e)}remove(e){let{_finalizers:t}=this;t&&co(t,e),e instanceof i&&e._removeParent(this)}};Dn.EMPTY=(()=>{let i=new Dn;return i.closed=!0,i})();var lm=Dn.EMPTY;function $u(i){return i instanceof Dn||i&&"closed"in i&&lt(i.remove)&&lt(i.add)&&lt(i.unsubscribe)}function Iv(i){lt(i)?i():i.unsubscribe()}var ar={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Ea={setTimeout(i,e,...t){let{delegate:n}=Ea;return n?.setTimeout?n.setTimeout(i,e,...t):setTimeout(i,e,...t)},clearTimeout(i){let{delegate:e}=Ea;return(e?.clearTimeout||clearTimeout)(i)},delegate:void 0};function qu(i){Ea.setTimeout(()=>{let{onUnhandledError:e}=ar;if(e)e(i);else throw i})}function um(){}var Rv=dm("C",void 0,void 0);function Nv(i){return dm("E",void 0,i)}function Pv(i){return dm("N",i,void 0)}function dm(i,e,t){return{kind:i,value:e,error:t}}var lo=null;function ba(i){if(ar.useDeprecatedSynchronousErrorHandling){let e=!lo;if(e&&(lo={errorThrown:!1,error:null}),i(),e){let{errorThrown:t,error:n}=lo;if(lo=null,t)throw n}}else i()}function Ov(i){ar.useDeprecatedSynchronousErrorHandling&&lo&&(lo.errorThrown=!0,lo.error=i)}var uo=class extends Dn{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,$u(e)&&e.add(this)):this.destination=JT}static create(e,t,n){return new Sa(e,t,n)}next(e){this.isStopped?hm(Pv(e),this):this._next(e)}error(e){this.isStopped?hm(Nv(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?hm(Rv,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},YT=Function.prototype.bind;function fm(i,e){return YT.call(i,e)}var pm=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(n){Xu(n)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(n){Xu(n)}else Xu(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Xu(t)}}},Sa=class extends uo{constructor(e,t,n){super();let r;if(lt(e)||!e)r={next:e??void 0,error:t??void 0,complete:n??void 0};else{let s;this&&ar.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&fm(e.next,s),error:e.error&&fm(e.error,s),complete:e.complete&&fm(e.complete,s)}):r=e}this.destination=new pm(r)}};function Xu(i){ar.useDeprecatedSynchronousErrorHandling?Ov(i):qu(i)}function ZT(i){throw i}function hm(i,e){let{onStoppedNotification:t}=ar;t&&Ea.setTimeout(()=>t(i,e))}var JT={closed:!0,next:um,error:ZT,complete:um};var wa=typeof Symbol=="function"&&Symbol.observable||"@@observable";function Lv(i){return i}function Fv(i){return i.length===0?Lv:i.length===1?i[0]:function(t){return i.reduce((n,r)=>r(n),t)}}var An=(()=>{class i{constructor(t){t&&(this._subscribe=t)}lift(t){let n=new i;return n.source=this,n.operator=t,n}subscribe(t,n,r){let s=QT(t)?t:new Sa(t,n,r);return ba(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(n){t.error(n)}}forEach(t,n){return n=kv(n),new n((r,s)=>{let o=new Sa({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)}[wa](){return this}pipe(...t){return Fv(t)(this)}toPromise(t){return t=kv(t),new t((n,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>n(s))})}}return i.create=e=>new i(e),i})();function kv(i){var e;return(e=i??ar.Promise)!==null&&e!==void 0?e:Promise}function KT(i){return i&&lt(i.next)&&lt(i.error)&&lt(i.complete)}function QT(i){return i&&i instanceof uo||KT(i)&&$u(i)}function eC(i){return lt(i?.lift)}function Ta(i){return e=>{if(eC(e))return e.lift(function(t){try{return i(t,this)}catch(n){this.error(n)}});throw new TypeError("Unable to lift unknown Observable type")}}function Es(i,e,t,n,r){return new mm(i,e,t,n,r)}var mm=class extends uo{constructor(e,t,n,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=n?function(){try{n()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var Uv=Wu(i=>function(){i(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Xr=(()=>{class i extends An{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let n=new Yu(this,this);return n.operator=t,n}_throwIfClosed(){if(this.closed)throw new Uv}next(t){ba(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let n of this.currentObservers)n.next(t)}})}error(t){ba(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:n}=this;for(;n.length;)n.shift().error(t)}})}complete(){ba(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:n,isStopped:r,observers:s}=this;return n||r?lm:(this.currentObservers=null,s.push(t),new Dn(()=>{this.currentObservers=null,co(s,t)}))}_checkFinalizedStatuses(t){let{hasError:n,thrownError:r,isStopped:s}=this;n?t.error(r):s&&t.complete()}asObservable(){let t=new An;return t.source=this,t}}return i.create=(e,t)=>new Yu(e,t),i})(),Yu=class extends Xr{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.next)===null||n===void 0||n.call(t,e)}error(e){var t,n;(n=(t=this.destination)===null||t===void 0?void 0:t.error)===null||n===void 0||n.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,n;return(n=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&n!==void 0?n:lm}};var bs=class extends Xr{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:n}=this;if(e)throw t;return this._throwIfClosed(),n}next(e){super.next(this._value=e)}};var gm={now(){return(gm.delegate||Date).now()},delegate:void 0};var Zu=class extends Dn{constructor(e,t){super()}schedule(e,t=0){return this}};var Wc={setInterval(i,e,...t){let{delegate:n}=Wc;return n?.setInterval?n.setInterval(i,e,...t):setInterval(i,e,...t)},clearInterval(i){let{delegate:e}=Wc;return(e?.clearInterval||clearInterval)(i)},delegate:void 0};var Ju=class extends Zu{constructor(e,t){super(e,t),this.scheduler=e,this.work=t,this.pending=!1}schedule(e,t=0){var n;if(this.closed)return this;this.state=e;let r=this.id,s=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(s,r,t)),this.pending=!0,this.delay=t,this.id=(n=this.id)!==null&&n!==void 0?n:this.requestAsyncId(s,this.id,t),this}requestAsyncId(e,t,n=0){return Wc.setInterval(e.flush.bind(e,this),n)}recycleAsyncId(e,t,n=0){if(n!=null&&this.delay===n&&this.pending===!1)return t;t!=null&&Wc.clearInterval(t)}execute(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let n=this._execute(e,t);if(n)return n;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,t){let n=!1,r;try{this.work(e)}catch(s){n=!0,r=s||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:e,scheduler:t}=this,{actions:n}=t;this.work=this.state=this.scheduler=null,this.pending=!1,co(n,this),e!=null&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null,super.unsubscribe()}}};var Ca=class i{constructor(e,t=i.now){this.schedulerActionCtor=e,this.now=t}schedule(e,t=0,n){return new this.schedulerActionCtor(this,e).schedule(n,t)}};Ca.now=gm.now;var Ku=class extends Ca{constructor(e,t=Ca.now){super(e,t),this.actions=[],this._active=!1}flush(e){let{actions:t}=this;if(this._active){t.push(e);return}let n;this._active=!0;do if(n=e.execute(e.state,e.delay))break;while(e=t.shift());if(this._active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}};var _m=new Ku(Ju),Bv=_m;function Vv(i){return i&&lt(i.schedule)}function zv(i,e,t,n){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(n.next(u))}catch(d){o(d)}}function c(u){try{l(n.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((n=n.apply(i,e||[])).next())})}function Hv(i){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&i[e],n=0;if(t)return t.call(i);if(i&&typeof i.length=="number")return{next:function(){return i&&n>=i.length&&(i=void 0),{value:i&&i[n++],done:!i}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function fo(i){return this instanceof fo?(this.v=i,this):new fo(i)}function Gv(i,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t.apply(i,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(f){return function(_){return Promise.resolve(_).then(f,d)}}function a(f,_){n[f]&&(r[f]=function(g){return new Promise(function(m,p){s.push([f,g,m,p])>1||c(f,g)})},_&&(r[f]=_(r[f])))}function c(f,_){try{l(n[f](_))}catch(g){h(s[0][3],g)}}function l(f){f.value instanceof fo?Promise.resolve(f.value.v).then(u,d):h(s[0][2],f)}function u(f){c("next",f)}function d(f){c("throw",f)}function h(f,_){f(_),s.shift(),s.length&&c(s[0][0],s[0][1])}}function Wv(i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=i[Symbol.asyncIterator],t;return e?e.call(i):(i=typeof Hv=="function"?Hv(i):i[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(s){t[s]=i[s]&&function(o){return new Promise(function(a,c){o=i[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var Qu=i=>i&&typeof i.length=="number"&&typeof i!="function";function jv(i){return lt(i?.then)}function $v(i){return lt(i[wa])}function qv(i){return Symbol.asyncIterator&&lt(i?.[Symbol.asyncIterator])}function Xv(i){return new TypeError(`You provided ${i!==null&&typeof i=="object"?"an invalid object":`'${i}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function tC(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Yv=tC();function Zv(i){return lt(i?.[Yv])}function Jv(i){return Gv(this,arguments,function*(){let t=i.getReader();try{for(;;){let{value:n,done:r}=yield fo(t.read());if(r)return yield fo(void 0);yield yield fo(n)}}finally{t.releaseLock()}})}function Kv(i){return lt(i?.getReader)}function Ss(i){if(i instanceof An)return i;if(i!=null){if($v(i))return nC(i);if(Qu(i))return iC(i);if(jv(i))return rC(i);if(qv(i))return Qv(i);if(Zv(i))return sC(i);if(Kv(i))return oC(i)}throw Xv(i)}function nC(i){return new An(e=>{let t=i[wa]();if(lt(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function iC(i){return new An(e=>{for(let t=0;t<i.length&&!e.closed;t++)e.next(i[t]);e.complete()})}function rC(i){return new An(e=>{i.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,qu)})}function sC(i){return new An(e=>{for(let t of i)if(e.next(t),e.closed)return;e.complete()})}function Qv(i){return new An(e=>{aC(i,e).catch(t=>e.error(t))})}function oC(i){return Qv(Jv(i))}function aC(i,e){var t,n,r,s;return zv(this,void 0,void 0,function*(){try{for(t=Wv(i);n=yield t.next(),!n.done;){let o=n.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{n&&!n.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function ex(i,e,t,n=0,r=!1){let s=e.schedule(function(){t(),r?i.add(this.schedule(null,n)):this.unsubscribe()},n);if(i.add(s),!r)return s}function tx(i){return i instanceof Date&&!isNaN(i)}function ho(i,e){return Ta((t,n)=>{let r=0;t.subscribe(Es(n,s=>{n.next(i.call(e,s,r++))}))})}var{isArray:cC}=Array;function lC(i,e){return cC(e)?i(...e):i(e)}function nx(i){return ho(e=>lC(i,e))}function ix(i,e,t,n,r,s,o,a){let c=[],l=0,u=0,d=!1,h=()=>{d&&!c.length&&!l&&e.complete()},f=g=>l<n?_(g):c.push(g),_=g=>{s&&e.next(g),l++;let m=!1;Ss(t(g,u++)).subscribe(Es(e,p=>{r?.(p),s?f(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(l--;c.length&&l<n;){let p=c.shift();o?ex(e,o,()=>_(p)):_(p)}h()}catch(p){e.error(p)}}))};return i.subscribe(Es(e,f,()=>{d=!0,h()})),()=>{a?.()}}function ym(i,e,t=1/0){return lt(e)?ym((n,r)=>ho((s,o)=>e(n,s,r,o))(Ss(i(n,r))),t):(typeof e=="number"&&(t=e),Ta((n,r)=>ix(n,r,i,t)))}var uC=["addListener","removeListener"],dC=["addEventListener","removeEventListener"],fC=["on","off"];function Da(i,e,t,n){if(lt(t)&&(n=t,t=void 0),n)return Da(i,e,t).pipe(nx(n));let[r,s]=mC(i)?dC.map(o=>a=>i[o](e,a,t)):hC(i)?uC.map(rx(i,e)):pC(i)?fC.map(rx(i,e)):[];if(!r&&Qu(i))return ym(o=>Da(o,e,t))(Ss(i));if(!r)throw new TypeError("Invalid event target");return new An(o=>{let a=(...c)=>o.next(1<c.length?c:c[0]);return r(a),()=>s(a)})}function rx(i,e){return t=>n=>i[t](e,n)}function hC(i){return lt(i.addListener)&&lt(i.removeListener)}function pC(i){return lt(i.on)&&lt(i.off)}function mC(i){return lt(i.addEventListener)&&lt(i.removeEventListener)}function sx(i=0,e,t=Bv){let n=-1;return e!=null&&(Vv(e)?t=e:n=e),new An(r=>{let s=tx(i)?+i-t.now():i;s<0&&(s=0);let o=0;return t.schedule(function(){r.closed||(r.next(o++),0<=n?this.schedule(void 0,n):r.complete())},s)})}function ox(i,e){return Ta((t,n)=>{let{leading:r=!0,trailing:s=!1}=e??{},o=!1,a=null,c=null,l=!1,u=()=>{c?.unsubscribe(),c=null,s&&(f(),l&&n.complete())},d=()=>{c=null,l&&n.complete()},h=_=>c=Ss(i(_)).subscribe(Es(n,u,d)),f=()=>{if(o){o=!1;let _=a;a=null,n.next(_),!l&&h(_)}};t.subscribe(Es(n,_=>{o=!0,a=_,!(c&&!c.closed)&&(r?f():h(_))},()=>{l=!0,!(s&&o&&c&&!c.closed)&&n.complete()}))})}function ed(i,e=_m,t){let n=sx(i,e);return ox(()=>n,t)}var vm;function td(){return vm}function Dr(i){let e=vm;return vm=i,e}var ax=Symbol("NotFound");function Aa(i){return i===ax||i?.name==="\u0275NotFound"}var _t=class extends Error{code;constructor(e,t){super(Lm(e,t)),this.code=e}};function MC(i){return`NG0${Math.abs(i)}`}function Lm(i,e){return`${MC(i)}${e?": "+e:""}`}function Lt(i){for(let e in i)if(i[e]===Lt)return e;throw Error("")}function mo(i){if(typeof i=="string")return i;if(Array.isArray(i))return`[${i.map(mo).join(", ")}]`;if(i==null)return""+i;let e=i.overriddenName||i.name;if(e)return`${e}`;let t=i.toString();if(t==null)return""+t;let n=t.indexOf(`
`);return n>=0?t.slice(0,n):t}function Fm(i,e){return i?e?`${i} ${e}`:i:e||""}var EC=Lt({__forward_ref__:Lt});function ad(i){return i.__forward_ref__=ad,i.toString=function(){return mo(this())},i}function wi(i){return fx(i)?i():i}function fx(i){return typeof i=="function"&&i.hasOwnProperty(EC)&&i.__forward_ref__===ad}function qt(i){return{token:i.token,providedIn:i.providedIn||null,factory:i.factory,value:void 0}}function Yc(i){return{providers:i.providers||[],imports:i.imports||[]}}function cd(i){return bC(i,ld)}function bC(i,e){return i.hasOwnProperty(e)&&i[e]||null}function SC(i){let e=i?.[ld]??null;return e||null}function Mm(i){return i&&i.hasOwnProperty(id)?i[id]:null}var ld=Lt({\u0275prov:Lt}),id=Lt({\u0275inj:Lt}),wt=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=qt({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function km(i){return i&&!!i.\u0275providers}var Um=Lt({\u0275cmp:Lt}),Bm=Lt({\u0275dir:Lt}),Vm=Lt({\u0275pipe:Lt});var Em=Lt({\u0275fac:Lt}),vo=Lt({__NG_ELEMENT_ID__:Lt}),cx=Lt({__NG_ENV_ID__:Lt});function xo(i){return zm(i,"@Component"),i[Um]||null}function Hm(i){return zm(i,"@Directive"),i[Bm]||null}function hx(i){return zm(i,"@Pipe"),i[Vm]||null}function zm(i,e){if(i==null)throw new _t(-919,!1)}function px(i){return typeof i=="string"?i:i==null?"":String(i)}var mx=Lt({ngErrorCode:Lt}),wC=Lt({ngErrorMessage:Lt}),TC=Lt({ngTokenPath:Lt});function Gm(i,e){return gx("",-200,e)}function ud(i,e){throw new _t(-201,!1)}function gx(i,e,t){let n=new _t(e,i);return n[mx]=e,n[wC]=i,t&&(n[TC]=t),n}function CC(i){return i[mx]}var bm;function _x(){return bm}function Si(i){let e=bm;return bm=i,e}function Wm(i,e,t){let n=cd(i);if(n&&n.providedIn=="root")return n.value===void 0?n.value=n.factory():n.value;if(t&8)return null;if(e!==void 0)return e;ud(i,"")}var DC={},po=DC,AC="__NG_DI_FLAG__",Sm=class{injector;constructor(e){this.injector=e}retrieve(e,t){let n=go(t)||0;try{return this.injector.get(e,n&8?null:po,n)}catch(r){if(Aa(r))return r;throw r}}};function IC(i,e=0){let t=td();if(t===void 0)throw new _t(-203,!1);if(t===null)return Wm(i,void 0,e);{let n=RC(e),r=t.retrieve(i,n);if(Aa(r)){if(n.optional)return null;throw r}return r}}function Tt(i,e=0){return(_x()||IC)(wi(i),e)}function St(i,e){return Tt(i,go(e))}function go(i){return typeof i>"u"||typeof i=="number"?i:0|(i.optional&&8)|(i.host&&1)|(i.self&&2)|(i.skipSelf&&4)}function RC(i){return{optional:!!(i&8),host:!!(i&1),self:!!(i&2),skipSelf:!!(i&4)}}function wm(i){let e=[];for(let t=0;t<i.length;t++){let n=wi(i[t]);if(Array.isArray(n)){if(n.length===0)throw new _t(900,!1);let r,s=0;for(let o=0;o<n.length;o++){let a=n[o],c=NC(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(Tt(r,s))}else e.push(Tt(n))}return e}function NC(i){return i[AC]}function Ra(i,e){let t=i.hasOwnProperty(Em);return t?i[Em]:null}function yx(i,e,t){if(i.length!==e.length)return!1;for(let n=0;n<i.length;n++){let r=i[n],s=e[n];if(t&&(r=t(r),s=t(s)),s!==r)return!1}return!0}function vx(i){return i.flat(Number.POSITIVE_INFINITY)}function dd(i,e){i.forEach(t=>Array.isArray(t)?dd(t,e):e(t))}function jm(i,e,t){e>=i.length?i.push(t):i.splice(e,0,t)}function Zc(i,e){return e>=i.length-1?i.pop():i.splice(e,1)[0]}var Mo={},cr=[],Pa=new wt(""),$m=new wt("",-1),qm=new wt(""),$c=class{get(e,t=po){if(t===po){let r=gx("",-201);throw r.name="\u0275NotFound",r}return t}};function fd(i){return{\u0275providers:i}}function xx(i){return fd([{provide:Pa,multi:!0,useValue:i}])}function Mx(...i){return{\u0275providers:Xm(!0,i),\u0275fromNgModule:!0}}function Xm(i,...e){let t=[],n=new Set,r,s=o=>{t.push(o)};return dd(e,o=>{let a=o;rd(a,s,[],n)&&(r||=[],r.push(a))}),r!==void 0&&Ex(r,s),t}function Ex(i,e){for(let t=0;t<i.length;t++){let{ngModule:n,providers:r}=i[t];Ym(r,s=>{e(s,n)})}}function rd(i,e,t,n){if(i=wi(i),!i)return!1;let r=null,s=Mm(i),o=!s&&xo(i);if(!s&&!o){let c=i.ngModule;if(s=Mm(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=i}let a=n.has(r);if(o){if(a)return!1;if(n.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)rd(l,e,t,n)}}else if(s){if(s.imports!=null&&!a){n.add(r);let l;dd(s.imports,u=>{rd(u,e,t,n)&&(l||=[],l.push(u))}),l!==void 0&&Ex(l,e)}if(!a){let l=Ra(r)||(()=>new r);e({provide:r,useFactory:l,deps:cr},r),e({provide:qm,useValue:r,multi:!0},r),e({provide:Pa,useValue:()=>Tt(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=i;Ym(c,u=>{e(u,l)})}}else return!1;return r!==i&&i.providers!==void 0}function Ym(i,e){for(let t of i)km(t)&&(t=t.\u0275providers),Array.isArray(t)?Ym(t,e):e(t)}var PC=Lt({provide:String,useValue:Lt});function bx(i){return i!==null&&typeof i=="object"&&PC in i}function OC(i){return!!(i&&i.useExisting)}function LC(i){return!!(i&&i.useFactory)}function sd(i){return typeof i=="function"}var Jc=new wt(""),nd={},lx={},xm;function Kc(){return xm===void 0&&(xm=new $c),xm}var ji=class{},_o=class extends ji{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,n,r){super(),this.parent=t,this.source=n,this.scopes=r,Cm(e,o=>this.processProvider(o)),this.records.set($m,Ia(void 0,this)),r.has("environment")&&this.records.set(ji,Ia(void 0,this));let s=this.records.get(Jc);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(qm,cr,{self:!0}))}retrieve(e,t){let n=go(t)||0;try{return this.get(e,po,n)}catch(r){if(Aa(r))return r;throw r}}destroy(){jc(this),this._destroyed=!0;let e=ft(null);try{for(let n of this._ngOnDestroyHooks)n.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let n of t)n()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ft(e)}}onDestroy(e){return jc(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){jc(this);let t=Dr(this),n=Si(void 0),r;try{return e()}finally{Dr(t),Si(n)}}get(e,t=po,n){if(jc(this),e.hasOwnProperty(cx))return e[cx](this);let r=go(n),s,o=Dr(this),a=Si(void 0);try{if(!(r&4)){let l=this.records.get(e);if(l===void 0){let u=VC(e)&&cd(e);u&&this.injectableDefInScope(u)?l=Ia(Tm(e),nd):l=null,this.records.set(e,l)}if(l!=null)return this.hydrate(e,l,r)}let c=r&2?Kc():this.parent;return t=r&8&&t===po?null:t,c.get(e,t)}catch(c){let l=CC(c);throw l===-200||l===-201?new _t(l,null):c}finally{Si(a),Dr(o)}}resolveInjectorInitializers(){let e=ft(null),t=Dr(this),n=Si(void 0),r;try{let s=this.get(Pa,cr,{self:!0});for(let o of s)o()}finally{Dr(t),Si(n),ft(e)}}toString(){let e=[],t=this.records;for(let n of t.keys())e.push(mo(n));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=wi(e);let t=sd(e)?e:wi(e&&e.provide),n=kC(e);if(!sd(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Ia(void 0,nd,!0),r.factory=()=>wm(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,n)}hydrate(e,t,n){let r=ft(null);try{if(t.value===lx)throw Gm(mo(e));return t.value===nd&&(t.value=lx,t.value=t.factory(void 0,n)),typeof t.value=="object"&&t.value&&BC(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{ft(r)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=wi(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Tm(i){let e=cd(i),t=e!==null?e.factory:Ra(i);if(t!==null)return t;if(i instanceof wt)throw new _t(204,!1);if(i instanceof Function)return FC(i);throw new _t(204,!1)}function FC(i){if(i.length>0)throw new _t(204,!1);let t=SC(i);return t!==null?()=>t.factory(i):()=>new i}function kC(i){if(bx(i))return Ia(void 0,i.useValue);{let e=Sx(i);return Ia(e,nd)}}function Sx(i,e,t){let n;if(sd(i)){let r=wi(i);return Ra(r)||Tm(r)}else if(bx(i))n=()=>wi(i.useValue);else if(LC(i))n=()=>i.useFactory(...wm(i.deps||[]));else if(OC(i))n=(r,s)=>Tt(wi(i.useExisting),s!==void 0&&s&8?8:void 0);else{let r=wi(i&&(i.useClass||i.provide));if(UC(i))n=()=>new r(...wm(i.deps));else return Ra(r)||Tm(r)}return n}function jc(i){if(i.destroyed)throw new _t(205,!1)}function Ia(i,e,t=!1){return{factory:i,value:e,multi:t?[]:void 0}}function UC(i){return!!i.deps}function BC(i){return i!==null&&typeof i=="object"&&typeof i.ngOnDestroy=="function"}function VC(i){return typeof i=="function"||typeof i=="object"&&i.ngMetadataName==="InjectionToken"}function Cm(i,e){for(let t of i)Array.isArray(t)?Cm(t,e):t&&km(t)?Cm(t.\u0275providers,e):e(t)}function hd(i,e){let t;i instanceof _o?(jc(i),t=i):t=new Sm(i);let n,r=Dr(t),s=Si(void 0);try{return e()}finally{Dr(r),Si(s)}}function wx(){return _x()!==void 0||td()!=null}var lr=0,Je=1,Ke=2,En=3,$i=4,qi=5,Qc=6,Oa=7,Vn=8,Ts=9,Kr=10,mn=11,La=12,Zm=13,Eo=14,ur=15,Cs=16,bo=17,Ar=18,Ds=19,Jm=20,Zr=21,pd=22,el=23,Ti=24,md=25,tl=26,fi=27,Tx=1;var As=7,nl=8,So=9,Kn=10;function Ir(i){return Array.isArray(i)&&typeof i[Tx]=="object"}function dr(i){return Array.isArray(i)&&i[Tx]===!0}function Km(i){return(i.flags&4)!==0}function wo(i){return i.componentOffset>-1}function il(i){return(i.flags&1)===1}function To(i){return!!i.template}function Fa(i){return(i[Ke]&512)!==0}function Co(i){return(i[Ke]&256)===256}var Cx="svg",Dx="math";function Xi(i){for(;Array.isArray(i);)i=i[lr];return i}function Ax(i,e){return Xi(e[i])}function Rr(i,e){return Xi(e[i.index])}function gd(i,e){return i.data[e]}function fr(i,e){let t=e[i];return Ir(t)?t:t[lr]}function Ix(i){return(i[Ke]&4)===4}function _d(i){return(i[Ke]&128)===128}function Rx(i){return dr(i[En])}function Do(i,e){return e==null?null:i[e]}function Qm(i){i[bo]=0}function eg(i){i[Ke]&1024||(i[Ke]|=1024,_d(i)&&sl(i))}function Nx(i,e){for(;i>0;)e=e[Eo],i--;return e}function rl(i){return!!(i[Ke]&9216||i[Ti]?.dirty)}function yd(i){i[Kr].changeDetectionScheduler?.notify(8),i[Ke]&64&&(i[Ke]|=1024),rl(i)&&sl(i)}function sl(i){i[Kr].changeDetectionScheduler?.notify(0);let e=ws(i);for(;e!==null&&!(e[Ke]&8192||(e[Ke]|=8192,!_d(e)));)e=ws(e)}function tg(i,e){if(Co(i))throw new _t(911,!1);i[Zr]===null&&(i[Zr]=[]),i[Zr].push(e)}function Px(i,e){if(i[Zr]===null)return;let t=i[Zr].indexOf(e);t!==-1&&i[Zr].splice(t,1)}function ws(i){let e=i[En];return dr(e)?e[En]:e}function ng(i){return i[Oa]??=[]}function ig(i){return i.cleanup??=[]}function Ox(i,e,t,n){let r=ng(e);r.push(t),i.firstCreatePass&&ig(i).push(n,r.length-1)}var pt={lFrame:$x(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Dm=!1;function Lx(){return pt.lFrame.elementDepthCount}function Fx(){pt.lFrame.elementDepthCount++}function rg(){pt.lFrame.elementDepthCount--}function sg(){return pt.bindingsEnabled}function kx(){return pt.skipHydrationRootTNode!==null}function og(i){return pt.skipHydrationRootTNode===i}function ag(){pt.skipHydrationRootTNode=null}function jt(){return pt.lFrame.lView}function Nr(){return pt.lFrame.tView}function vd(i){return pt.lFrame.contextLView=i,i[Vn]}function xd(i){return pt.lFrame.contextLView=null,i}function Yi(){let i=cg();for(;i!==null&&i.type===64;)i=i.parent;return i}function cg(){return pt.lFrame.currentTNode}function Ux(){let i=pt.lFrame,e=i.currentTNode;return i.isParent?e:e.parent}function ka(i,e){let t=pt.lFrame;t.currentTNode=i,t.isParent=e}function lg(){return pt.lFrame.isParent}function Bx(){pt.lFrame.isParent=!1}function ug(){return Dm}function dg(i){let e=Dm;return Dm=i,e}function Vx(){let i=pt.lFrame,e=i.bindingRootIndex;return e===-1&&(e=i.bindingRootIndex=i.tView.bindingStartIndex),e}function Hx(i){return pt.lFrame.bindingIndex=i}function fg(){return pt.lFrame.bindingIndex++}function zx(){return pt.lFrame.inI18n}function Gx(i,e){let t=pt.lFrame;t.bindingIndex=t.bindingRootIndex=i,Md(e)}function Wx(){return pt.lFrame.currentDirectiveIndex}function Md(i){pt.lFrame.currentDirectiveIndex=i}function hg(){return pt.lFrame.currentQueryIndex}function Ed(i){pt.lFrame.currentQueryIndex=i}function HC(i){let e=i[Je];return e.type===2?e.declTNode:e.type===1?i[qi]:null}function pg(i,e,t){if(t&4){let r=e,s=i;for(;r=r.parent,r===null&&!(t&1);)if(r=HC(s),r===null||(s=s[Eo],r.type&10))break;if(r===null)return!1;e=r,i=s}let n=pt.lFrame=jx();return n.currentTNode=e,n.lView=i,!0}function bd(i){let e=jx(),t=i[Je];pt.lFrame=e,e.currentTNode=t.firstChild,e.lView=i,e.tView=t,e.contextLView=i,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function jx(){let i=pt.lFrame,e=i===null?null:i.child;return e===null?$x(i):e}function $x(i){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:i,child:null,inI18n:!1};return i!==null&&(i.child=e),e}function qx(){let i=pt.lFrame;return pt.lFrame=i.parent,i.currentTNode=null,i.lView=null,i}var mg=qx;function Sd(){let i=qx();i.isParent=!0,i.tView=null,i.selectedIndex=-1,i.contextLView=null,i.elementDepthCount=0,i.currentDirectiveIndex=-1,i.currentNamespace=null,i.bindingRootIndex=-1,i.bindingIndex=-1,i.currentQueryIndex=0}function Xx(i){return(pt.lFrame.contextLView=Nx(i,pt.lFrame.contextLView))[Vn]}function wd(){return pt.lFrame.selectedIndex}function Is(i){pt.lFrame.selectedIndex=i}function Yx(){let i=pt.lFrame;return gd(i.tView,i.selectedIndex)}function Zx(){return pt.lFrame.currentNamespace}var Jx=!0;function Td(){return Jx}function Cd(i){Jx=i}function Am(i,e=null,t=null,n){let r=Kx(i,e,t,n);return r.resolveInjectorInitializers(),r}function Kx(i,e=null,t=null,n,r=new Set){let s=[t||cr,Mx(i)];return n=n||(typeof i=="object"?void 0:mo(i)),new _o(s,e||Kc(),n||null,r)}var yo=class i{static THROW_IF_NOT_FOUND=po;static NULL=new $c;static create(e,t){if(Array.isArray(e))return Am({name:""},t,e,"");{let n=e.name??"";return Am({name:n},e.parent,e.providers,n)}}static \u0275prov=qt({token:i,providedIn:"any",factory:()=>Tt($m)});static __NG_ELEMENT_ID__=-1},Zi=new wt(""),ol=(()=>{class i{static __NG_ELEMENT_ID__=zC;static __NG_ENV_ID__=t=>t}return i})(),Im=class extends ol{_lView;constructor(e){super(),this._lView=e}get destroyed(){return Co(this._lView)}onDestroy(e){let t=this._lView;return tg(t,e),()=>Px(t,e)}};function zC(){return new Im(jt())}var Qx=!1,eM=new wt(""),Ua=(()=>{class i{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new bs(!1);debugTaskTracker=St(eM,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new An(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),this.debugTaskTracker?.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.debugTaskTracker?.remove(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=qt({token:i,providedIn:"root",factory:()=>new i})}return i})(),Rm=class extends Xr{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,wx()&&(this.destroyRef=St(ol,{optional:!0})??void 0,this.pendingTasks=St(Ua,{optional:!0})??void 0)}emit(e){let t=ft(null);try{super.next(e)}finally{ft(t)}}subscribe(e,t,n){let r=e,s=t||(()=>null),o=n;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Dn&&e.add(a),a}wrapInTimeout(e){return t=>{let n=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{n!==void 0&&this.pendingTasks?.remove(n)}})}}},Yr=Rm;function od(...i){}function gg(i){let e,t;function n(){i=od;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{i(),n()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{i(),n()})),()=>n()}function tM(i){return queueMicrotask(()=>i()),()=>{i=od}}var _g="isAngularZone",qc=_g+"_ID",GC=0,Bn=class i{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Yr(!1);onMicrotaskEmpty=new Yr(!1);onStable=new Yr(!1);onError=new Yr(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:n=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=Qx}=e;if(typeof Zone>"u")throw new _t(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&n,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,$C(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(_g)===!0}static assertInAngularZone(){if(!i.isInAngularZone())throw new _t(909,!1)}static assertNotInAngularZone(){if(i.isInAngularZone())throw new _t(909,!1)}run(e,t,n){return this._inner.run(e,t,n)}runTask(e,t,n,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,WC,od,od);try{return s.runTask(o,t,n)}finally{s.cancelTask(o)}}runGuarded(e,t,n){return this._inner.runGuarded(e,t,n)}runOutsideAngular(e){return this._outer.run(e)}},WC={};function yg(i){if(i._nesting==0&&!i.hasPendingMicrotasks&&!i.isStable)try{i._nesting++,i.onMicrotaskEmpty.emit(null)}finally{if(i._nesting--,!i.hasPendingMicrotasks)try{i.runOutsideAngular(()=>i.onStable.emit(null))}finally{i.isStable=!0}}}function jC(i){if(i.isCheckStableRunning||i.callbackScheduled)return;i.callbackScheduled=!0;function e(){gg(()=>{i.callbackScheduled=!1,Nm(i),i.isCheckStableRunning=!0,yg(i),i.isCheckStableRunning=!1})}i.scheduleInRootZone?Zone.root.run(()=>{e()}):i._outer.run(()=>{e()}),Nm(i)}function $C(i){let e=()=>{jC(i)},t=GC++;i._inner=i._inner.fork({name:"angular",properties:{[_g]:!0,[qc]:t,[qc+t]:!0},onInvokeTask:(n,r,s,o,a,c)=>{if(qC(c))return n.invokeTask(s,o,a,c);try{return ux(i),n.invokeTask(s,o,a,c)}finally{(i.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||i.shouldCoalesceRunChangeDetection)&&e(),dx(i)}},onInvoke:(n,r,s,o,a,c,l)=>{try{return ux(i),n.invoke(s,o,a,c,l)}finally{i.shouldCoalesceRunChangeDetection&&!i.callbackScheduled&&!XC(c)&&e(),dx(i)}},onHasTask:(n,r,s,o)=>{n.hasTask(s,o),r===s&&(o.change=="microTask"?(i._hasPendingMicrotasks=o.microTask,Nm(i),yg(i)):o.change=="macroTask"&&(i.hasPendingMacrotasks=o.macroTask))},onHandleError:(n,r,s,o)=>(n.handleError(s,o),i.runOutsideAngular(()=>i.onError.emit(o)),!1)})}function Nm(i){i._hasPendingMicrotasks||(i.shouldCoalesceEventChangeDetection||i.shouldCoalesceRunChangeDetection)&&i.callbackScheduled===!0?i.hasPendingMicrotasks=!0:i.hasPendingMicrotasks=!1}function ux(i){i._nesting++,i.isStable&&(i.isStable=!1,i.onUnstable.emit(null))}function dx(i){i._nesting--,yg(i)}var Xc=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Yr;onMicrotaskEmpty=new Yr;onStable=new Yr;onError=new Yr;run(e,t,n){return e.apply(t,n)}runGuarded(e,t,n){return e.apply(t,n)}runOutsideAngular(e){return e()}runTask(e,t,n,r){return e.apply(t,n)}};function qC(i){return nM(i,"__ignore_ng_zone__")}function XC(i){return nM(i,"__scheduler_tick__")}function nM(i,e){return!Array.isArray(i)||i.length!==1?!1:i[0]?.data?.[e]===!0}var Jr=class{_console=console;handleError(e){this._console.error("ERROR",e)}},Ao=new wt("",{factory:()=>{let i=St(Bn),e=St(ji),t;return n=>{i.runOutsideAngular(()=>{e.destroyed&&!t?setTimeout(()=>{throw n}):(t??=e.get(Jr),t.handleError(n))})}}}),iM={provide:Pa,useValue:()=>{let i=St(Jr,{optional:!0})},multi:!0},YC=new wt("",{factory:()=>{let i=St(Zi).defaultView;if(!i)return;let e=St(Ao),t=s=>{e(s.reason),s.preventDefault()},n=s=>{s.error?e(s.error):e(new Error(s.message,{cause:s})),s.preventDefault()},r=()=>{i.addEventListener("unhandledrejection",t),i.addEventListener("error",n)};typeof Zone<"u"?Zone.root.run(r):r(),St(ol).onDestroy(()=>{i.removeEventListener("error",n),i.removeEventListener("unhandledrejection",t)})}});function vg(){return fd([xx(()=>{St(YC)})])}var Na=class{},al=new wt("",{factory:()=>!0});var xg=new wt("");var Mg=(()=>{class i{static \u0275prov=qt({token:i,providedIn:"root",factory:()=>new Pm})}return i})(),Pm=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let t=e.zone,n=this.queues.get(t);n.has(e)&&(n.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let n=this.queues.get(t);n.has(e)||n.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[t,n]of this.queues)t===null?e||=this.flushQueue(n):e||=t.run(()=>this.flushQueue(n));e||(this.dirtyEffectCount=0)}}flushQueue(e){let t=!1;for(let n of e)n.dirty&&(this.dirtyEffectCount--,t=!0,n.run());return t}},Om=class{[Ma];constructor(e){this[Ma]=e}destroy(){this[Ma].destroy()}};function Gd(i){return{toString:i}.toString()}function dD(i){return typeof i=="function"}function AM(i,e,t,n){e!==null?e.applyValueToInputSignal(e,n):i[t]=n}var Pd=class{previousValue;currentValue;firstChange;constructor(e,t,n){this.previousValue=e,this.currentValue=t,this.firstChange=n}isFirstChange(){return this.firstChange}};function fD(i){return i.type.prototype.ngOnChanges&&(i.setInput=pD),hD}function hD(){let i=RM(this),e=i?.current;if(e){let t=i.previous;if(t===Mo)i.previous=e;else for(let n in e)t[n]=e[n];i.current=null,this.ngOnChanges(e)}}function pD(i,e,t,n,r){let s=this.declaredInputs[n],o=RM(i)||mD(i,{previous:Mo,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Pd(l&&l.currentValue,t,c===Mo),AM(i,e,r,t)}var IM="__ngSimpleChanges__";function RM(i){return i[IM]||null}function mD(i,e){return i[IM]=e}var rM=[];var Ft=function(i,e=null,t){for(let n=0;n<rM.length;n++){let r=rM[n];r(i,e,t)}},Ct=(function(i){return i[i.TemplateCreateStart=0]="TemplateCreateStart",i[i.TemplateCreateEnd=1]="TemplateCreateEnd",i[i.TemplateUpdateStart=2]="TemplateUpdateStart",i[i.TemplateUpdateEnd=3]="TemplateUpdateEnd",i[i.LifecycleHookStart=4]="LifecycleHookStart",i[i.LifecycleHookEnd=5]="LifecycleHookEnd",i[i.OutputStart=6]="OutputStart",i[i.OutputEnd=7]="OutputEnd",i[i.BootstrapApplicationStart=8]="BootstrapApplicationStart",i[i.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",i[i.BootstrapComponentStart=10]="BootstrapComponentStart",i[i.BootstrapComponentEnd=11]="BootstrapComponentEnd",i[i.ChangeDetectionStart=12]="ChangeDetectionStart",i[i.ChangeDetectionEnd=13]="ChangeDetectionEnd",i[i.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",i[i.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",i[i.AfterRenderHooksStart=16]="AfterRenderHooksStart",i[i.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",i[i.ComponentStart=18]="ComponentStart",i[i.ComponentEnd=19]="ComponentEnd",i[i.DeferBlockStateStart=20]="DeferBlockStateStart",i[i.DeferBlockStateEnd=21]="DeferBlockStateEnd",i[i.DynamicComponentStart=22]="DynamicComponentStart",i[i.DynamicComponentEnd=23]="DynamicComponentEnd",i[i.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",i[i.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",i})(Ct||{});function gD(i,e,t){let{ngOnChanges:n,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(n){let o=fD(e);(t.preOrderHooks??=[]).push(i,o),(t.preOrderCheckHooks??=[]).push(i,o)}r&&(t.preOrderHooks??=[]).push(0-i,r),s&&((t.preOrderHooks??=[]).push(i,s),(t.preOrderCheckHooks??=[]).push(i,s))}function NM(i,e){for(let t=e.directiveStart,n=e.directiveEnd;t<n;t++){let s=i.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(i.contentHooks??=[]).push(-t,o),a&&((i.contentHooks??=[]).push(t,a),(i.contentCheckHooks??=[]).push(t,a)),c&&(i.viewHooks??=[]).push(-t,c),l&&((i.viewHooks??=[]).push(t,l),(i.viewCheckHooks??=[]).push(t,l)),u!=null&&(i.destroyHooks??=[]).push(t,u)}}function Dd(i,e,t){PM(i,e,3,t)}function Ad(i,e,t,n){(i[Ke]&3)===t&&PM(i,e,t,n)}function Eg(i,e){let t=i[Ke];(t&3)===e&&(t&=16383,t+=1,i[Ke]=t)}function PM(i,e,t,n){let r=n!==void 0?i[bo]&65535:0,s=n??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],n!=null&&a>=n)break}else e[c]<0&&(i[bo]+=65536),(a<s||s==-1)&&(_D(i,t,e,c),i[bo]=(i[bo]&4294901760)+c+2),c++}function sM(i,e){Ft(Ct.LifecycleHookStart,i,e);let t=ft(null);try{e.call(i)}finally{ft(t),Ft(Ct.LifecycleHookEnd,i,e)}}function _D(i,e,t,n){let r=t[n]<0,s=t[n+1],o=r?-t[n]:t[n],a=i[o];r?i[Ke]>>14<i[bo]>>16&&(i[Ke]&3)===e&&(i[Ke]+=16384,sM(a,s)):sM(a,s)}var Va=-1,ul=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,n,r){this.factory=e,this.name=r,this.canSeeViewProviders=t,this.injectImpl=n}};function yD(i){return(i.flags&8)!==0}function vD(i){return(i.flags&16)!==0}function xD(i,e,t){let n=0;for(;n<t.length;){let r=t[n];if(typeof r=="number"){if(r!==0)break;n++;let s=t[n++],o=t[n++],a=t[n++];i.setAttribute(e,o,a,s)}else{let s=r,o=t[++n];ED(s)?i.setProperty(e,s,o):i.setAttribute(e,s,o),n++}}return n}function MD(i){return i===3||i===4||i===6}function ED(i){return i.charCodeAt(0)===64}function Wd(i,e){if(!(e===null||e.length===0))if(i===null||i.length===0)i=e.slice();else{let t=-1;for(let n=0;n<e.length;n++){let r=e[n];typeof r=="number"?t=r:t===0||(t===-1||t===2?oM(i,t,r,null,e[++n]):oM(i,t,r,null,null))}}return i}function oM(i,e,t,n,r){let s=0,o=i.length;if(e===-1)o=-1;else for(;s<i.length;){let a=i[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<i.length;){let a=i[s];if(typeof a=="number")break;if(a===t){r!==null&&(i[s+1]=r);return}s++,r!==null&&s++}o!==-1&&(i.splice(o,0,e),s=o+1),i.splice(s++,0,t),r!==null&&i.splice(s++,0,r)}function OM(i){return i!==Va}function Od(i){return i&32767}function bD(i){return i>>16}function Ld(i,e){let t=bD(i),n=e;for(;t>0;)n=n[Eo],t--;return n}var Tg=!0;function aM(i){let e=Tg;return Tg=i,e}var SD=256,LM=SD-1,FM=5,wD=0,Pr={};function TD(i,e,t){let n;typeof t=="string"?n=t.charCodeAt(0)||0:t.hasOwnProperty(vo)&&(n=t[vo]),n==null&&(n=t[vo]=wD++);let r=n&LM,s=1<<r;e.data[i+(r>>FM)]|=s}function kM(i,e){let t=UM(i,e);if(t!==-1)return t;let n=e[Je];n.firstCreatePass&&(i.injectorIndex=e.length,bg(n.data,i),bg(e,null),bg(n.blueprint,null));let r=Wg(i,e),s=i.injectorIndex;if(OM(r)){let o=Od(r),a=Ld(r,e),c=a[Je].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function bg(i,e){i.push(0,0,0,0,0,0,0,0,e)}function UM(i,e){return i.injectorIndex===-1||i.parent&&i.parent.injectorIndex===i.injectorIndex||e[i.injectorIndex+8]===null?-1:i.injectorIndex}function Wg(i,e){if(i.parent&&i.parent.injectorIndex!==-1)return i.parent.injectorIndex;let t=0,n=null,r=e;for(;r!==null;){if(n=GM(r),n===null)return Va;if(t++,r=r[Eo],n.injectorIndex!==-1)return n.injectorIndex|t<<16}return Va}function CD(i,e,t){TD(i,e,t)}function BM(i,e,t){if(t&8||i!==void 0)return i;ud(e,"NodeInjector")}function VM(i,e,t,n){if(t&8&&n===void 0&&(n=null),(t&3)===0){let r=i[Ts],s=Si(void 0);try{return r?r.get(e,n,t&8):Wm(e,n,t&8)}finally{Si(s)}}return BM(n,e,t)}function HM(i,e,t,n=0,r){if(i!==null){if(e[Ke]&2048&&!(n&2)){let o=RD(i,e,t,n,Pr);if(o!==Pr)return o}let s=zM(i,e,t,n,Pr);if(s!==Pr)return s}return VM(e,t,n,r)}function zM(i,e,t,n,r){let s=AD(t);if(typeof s=="function"){if(!pg(e,i,n))return n&1?BM(r,t,n):VM(e,t,n,r);try{let o;if(o=s(n),o==null&&!(n&8))ud(t);else return o}finally{mg()}}else if(typeof s=="number"){let o=null,a=UM(i,e),c=Va,l=n&1?e[ur][qi]:null;for((a===-1||n&4)&&(c=a===-1?Wg(i,e):e[a+8],c===Va||!lM(n,!1)?a=-1:(o=e[Je],a=Od(c),e=Ld(c,e)));a!==-1;){let u=e[Je];if(cM(s,a,u.data)){let d=DD(a,e,t,o,n,l);if(d!==Pr)return d}c=e[a+8],c!==Va&&lM(n,e[Je].data[a+8]===l)&&cM(s,a,e)?(o=u,a=Od(c),e=Ld(c,e)):a=-1}}return r}function DD(i,e,t,n,r,s){let o=e[Je],a=o.data[i+8],c=n==null?wo(a)&&Tg:n!=o&&(a.type&3)!==0,l=r&1&&s===a,u=Id(a,o,t,c,l);return u!==null?Fd(e,o,u,a,r):Pr}function Id(i,e,t,n,r){let s=i.providerIndexes,o=e.data,a=s&1048575,c=i.directiveStart,l=i.directiveEnd,u=s>>20,d=n?a:a+u,h=r?a+u:l;for(let f=d;f<h;f++){let _=o[f];if(f<c&&t===_||f>=c&&_.type===t)return f}if(r){let f=o[c];if(f&&To(f)&&f.type===t)return c}return null}function Fd(i,e,t,n,r){let s=i[t],o=e.data;if(s instanceof ul){let a=s;if(a.resolving)throw Gm("");let c=aM(a.canSeeViewProviders);a.resolving=!0;let l=o[t].type||o[t],u,d=a.injectImpl?Si(a.injectImpl):null,h=pg(i,n,0);try{s=i[t]=a.factory(void 0,r,o,i,n),e.firstCreatePass&&t>=n.directiveStart&&gD(t,o[t],e)}finally{d!==null&&Si(d),aM(c),a.resolving=!1,mg()}}return s}function AD(i){if(typeof i=="string")return i.charCodeAt(0)||0;let e=i.hasOwnProperty(vo)?i[vo]:void 0;return typeof e=="number"?e>=0?e&LM:ID:e}function cM(i,e,t){let n=1<<i;return!!(t[e+(i>>FM)]&n)}function lM(i,e){return!(i&2)&&!(i&1&&e)}var Io=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,n){return HM(this._tNode,this._lView,e,go(n),t)}};function ID(){return new Io(Yi(),jt())}function RD(i,e,t,n,r){let s=i,o=e;for(;s!==null&&o!==null&&o[Ke]&2048&&!Fa(o);){let a=zM(s,o,t,n|2,Pr);if(a!==Pr)return a;let c=s.parent;if(!c){let l=o[Jm];if(l){let u=l.get(t,Pr,n);if(u!==Pr)return u}c=GM(o),o=o[Eo]}s=c}return r}function GM(i){let e=i[Je],t=e.type;return t===2?e.declTNode:t===1?i[qi]:null}function ND(){return Wa(Yi(),jt())}function Wa(i,e){return new Po(Rr(i,e))}var Po=(()=>{class i{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=ND}return i})();function PD(i){return i instanceof Po?i.nativeElement:i}function OD(){return this._results[Symbol.iterator]()}var kd=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new Xr}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let n=vx(e);(this._changesDetected=!yx(this._results,n,t))&&(this._results=n,this.length=n.length,this.last=n[this.length-1],this.first=n[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=OD};function WM(i){return(i.flags&128)===128}var jg=(function(i){return i[i.OnPush=0]="OnPush",i[i.Default=1]="Default",i})(jg||{}),jM=new Map,LD=0;function FD(){return LD++}function kD(i){jM.set(i[Ds],i)}function Cg(i){jM.delete(i[Ds])}var uM="__ngContext__";function Ha(i,e){Ir(e)?(i[uM]=e[Ds],kD(e)):i[uM]=e}function $M(i){return XM(i[La])}function qM(i){return XM(i[$i])}function XM(i){for(;i!==null&&!dr(i);)i=i[$i];return i}var UD;function $g(i){UD=i}var jd=new wt("",{factory:()=>BD}),BD="ng";var $d=new wt(""),pl=new wt("",{providedIn:"platform",factory:()=>"unknown"});var qd=new wt("",{factory:()=>St(Zi).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var YM=!1,ZM=new wt("",{factory:()=>YM});var VD=(i,e,t,n)=>{};function HD(i,e,t,n){VD(i,e,t,n)}function qg(i){return(i.flags&32)===32}var zD=()=>null;function JM(i,e,t=!1){return zD(i,e,t)}function KM(i,e){let t=i.contentQueries;if(t!==null){let n=ft(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=i.data[o];Ed(s),a.contentQueries(2,e[o],o)}}}finally{ft(n)}}}function Dg(i,e,t){Ed(0);let n=ft(null);try{e(i,t)}finally{ft(n)}}function QM(i,e,t){if(Km(e)){let n=ft(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=i.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{ft(n)}}}var pr=(function(i){return i[i.Emulated=0]="Emulated",i[i.None=2]="None",i[i.ShadowDom=3]="ShadowDom",i[i.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",i})(pr||{});function GD(i,e){return i.createText(e)}function WD(i,e,t){i.setValue(e,t)}function eE(i,e,t){return i.createElement(e,t)}function Ud(i,e,t,n,r){i.insertBefore(e,t,n,r)}function tE(i,e,t){i.appendChild(e,t)}function dM(i,e,t,n,r){n!==null?Ud(i,e,t,n,r):tE(i,e,t)}function jD(i,e,t,n){i.removeChild(null,e,t,n)}function $D(i,e,t){i.setAttribute(e,"style",t)}function qD(i,e,t){t===""?i.removeAttribute(e,"class"):i.setAttribute(e,"class",t)}function nE(i,e,t){let{mergedAttrs:n,classes:r,styles:s}=t;n!==null&&xD(i,e,n),r!==null&&qD(i,e,r),s!==null&&$D(i,e,s)}function XD(i,e,t){let n=i.length;for(;;){let r=i.indexOf(e,t);if(r===-1)return r;if(r===0||i.charCodeAt(r-1)<=32){let s=e.length;if(r+s===n||i.charCodeAt(r+s)<=32)return r}t=r+1}}var iE="ng-template";function YD(i,e,t,n){let r=0;if(n){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&XD(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(Xg(i))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function Xg(i){return i.type===4&&i.value!==iE}function ZD(i,e,t){let n=i.type===4&&!t?iE:i.value;return e===n}function JD(i,e,t){let n=4,r=i.attrs,s=r!==null?eA(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!hr(n)&&!hr(c))return!1;if(o&&hr(c))continue;o=!1,n=c|n&1;continue}if(!o)if(n&4){if(n=2|n&1,c!==""&&!ZD(i,c,t)||c===""&&e.length===1){if(hr(n))return!1;o=!0}}else if(n&8){if(r===null||!YD(i,r,c,t)){if(hr(n))return!1;o=!0}}else{let l=e[++a],u=KD(c,r,Xg(i),t);if(u===-1){if(hr(n))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),n&2&&l!==d){if(hr(n))return!1;o=!0}}}}return hr(n)||o}function hr(i){return(i&1)===0}function KD(i,e,t,n){if(e===null)return-1;let r=0;if(n||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===i)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return tA(e,i)}function QD(i,e,t=!1){for(let n=0;n<e.length;n++)if(JD(i,e[n],t))return!0;return!1}function eA(i){for(let e=0;e<i.length;e++){let t=i[e];if(MD(t))return e}return i.length}function tA(i,e){let t=i.indexOf(4);if(t>-1)for(t++;t<i.length;){let n=i[t];if(typeof n=="number")return-1;if(n===e)return t;t++}return-1}function fM(i,e){return i?":not("+e.trim()+")":e}function nA(i){let e=i[0],t=1,n=2,r="",s=!1;for(;t<i.length;){let o=i[t];if(typeof o=="string")if(n&2){let a=i[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else n&8?r+="."+o:n&4&&(r+=" "+o);else r!==""&&!hr(o)&&(e+=fM(s,r),r=""),n=o,s=s||!hr(n);t++}return r!==""&&(e+=fM(s,r)),e}function iA(i){return i.map(nA).join(",")}function rA(i){let e=[],t=[],n=1,r=2;for(;n<i.length;){let s=i[n];if(typeof s=="string")r===2?s!==""&&e.push(s,i[++n]):r===8&&t.push(s);else{if(!hr(r))break;r=s}n++}return t.length&&e.push(1,...t),e}var ja={};function Yg(i,e,t,n,r,s,o,a,c,l,u){let d=fi+n,h=d+r,f=sA(d,h),_=typeof l=="function"?l():l;return f[Je]={type:i,blueprint:f,template:t,queries:null,viewQuery:a,declTNode:e,data:f.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:_,incompleteFirstPass:!1,ssrId:u}}function sA(i,e){let t=[];for(let n=0;n<e;n++)t.push(n<i?null:ja);return t}function oA(i){let e=i.tView;return e===null||e.incompleteFirstPass?i.tView=Yg(1,null,i.template,i.decls,i.vars,i.directiveDefs,i.pipeDefs,i.viewQuery,i.schemas,i.consts,i.id):e}function Zg(i,e,t,n,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[lr]=r,d[Ke]=n|4|128|8|64|1024,(l!==null||i&&i[Ke]&2048)&&(d[Ke]|=2048),Qm(d),d[En]=d[Eo]=i,d[Vn]=t,d[Kr]=o||i&&i[Kr],d[mn]=a||i&&i[mn],d[Ts]=c||i&&i[Ts]||null,d[qi]=s,d[Ds]=FD(),d[Qc]=u,d[Jm]=l,d[ur]=e.type==2?i[ur]:d,d}function aA(i,e,t){let n=Rr(e,i),r=oA(t),s=i[Kr].rendererFactory,o=Jg(i,Zg(i,r,null,rE(t),n,e,null,s.createRenderer(n,t),null,null,null));return i[e.index]=o}function rE(i){let e=16;return i.signals?e=4096:i.onPush&&(e=64),e}function sE(i,e,t,n){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(n),i.blueprint.push(n),i.data.push(null);return r}function Jg(i,e){return i[La]?i[Zm][$i]=e:i[La]=e,i[Zm]=e,e}function In(i=1){oE(Nr(),jt(),wd()+i,!1)}function oE(i,e,t,n){if(!n)if((e[Ke]&3)===3){let s=i.preOrderCheckHooks;s!==null&&Dd(e,s,t)}else{let s=i.preOrderHooks;s!==null&&Ad(e,s,0,t)}Is(t)}var Xd=(function(i){return i[i.None=0]="None",i[i.SignalBased=1]="SignalBased",i[i.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",i})(Xd||{});function Ag(i,e,t,n){let r=ft(null);try{let[s,o,a]=i.inputs[t],c=null;(o&Xd.SignalBased)!==0&&(c=e[s][Ma]),c!==null&&c.transformFn!==void 0?n=c.transformFn(n):a!==null&&(n=a.call(e,n)),i.setInput!==null?i.setInput(e,c,n,t,s):AM(e,c,s,n)}finally{ft(r)}}var Oo=(function(i){return i[i.Important=1]="Important",i[i.DashCase=2]="DashCase",i})(Oo||{}),cA;function Kg(i,e){return cA(i,e)}var za=new Set,Qg=(function(i){return i[i.CHANGE_DETECTION=0]="CHANGE_DETECTION",i[i.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",i})(Qg||{}),ml=new wt(""),hM=new Set;function aE(i){hM.has(i)||(hM.add(i),performance?.mark?.("mark_feature_usage",{detail:{feature:i}}))}var cE=(()=>{class i{impl=null;execute(){this.impl?.execute()}static \u0275prov=qt({token:i,providedIn:"root",factory:()=>new i})}return i})();var lE=new wt("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:St(ji)})});function uE(i,e,t){let n=i.get(lE);if(Array.isArray(e))for(let r of e)n.queue.add(r),t?.detachedLeaveAnimationFns?.push(r);else n.queue.add(e),t?.detachedLeaveAnimationFns?.push(e);n.scheduler&&n.scheduler(i)}function lA(i,e){for(let[t,n]of e)uE(i,n.animateFns)}function uA(i,e){let t=i.get(lE);if(Array.isArray(e))for(let n of e)t.queue.delete(n);else t.queue.delete(e)}function pM(i,e,t,n){let r=i?.[tl]?.enter;e!==null&&r&&r.has(t.index)&&lA(n,r)}function Ba(i,e,t,n,r,s,o,a){if(r!=null){let c,l=!1;dr(r)?c=r:Ir(r)&&(l=!0,r=r[lr]);let u=Xi(r);i===0&&n!==null?(pM(a,n,s,t),o==null?tE(e,n,u):Ud(e,n,u,o||null,!0)):i===1&&n!==null?(pM(a,n,s,t),Ud(e,n,u,o||null,!0)):i===2?mM(a,s,t,d=>{jD(e,u,l,d)}):i===3&&mM(a,s,t,()=>{e.destroyNode(u)}),c!=null&&bA(e,i,t,c,s,n,o)}}function dA(i,e){dE(i,e),e[lr]=null,e[qi]=null}function fA(i,e,t,n,r,s){n[lr]=r,n[qi]=e,Yd(i,n,t,1,r,s)}function dE(i,e){e[Kr].changeDetectionScheduler?.notify(9),Yd(i,e,e[mn],2,null,null)}function hA(i){let e=i[La];if(!e)return Sg(i[Je],i);for(;e;){let t=null;if(Ir(e))t=e[La];else{let n=e[Kn];n&&(t=n)}if(!t){for(;e&&!e[$i]&&e!==i;)Ir(e)&&Sg(e[Je],e),e=e[En];e===null&&(e=i),Ir(e)&&Sg(e[Je],e),t=e&&e[$i]}e=t}}function e_(i,e){let t=i[So],n=t.indexOf(e);t.splice(n,1)}function fE(i,e){if(Co(e))return;let t=e[mn];t.destroyNode&&Yd(i,e,t,3,null,null),hA(e)}function Sg(i,e){if(Co(e))return;let t=ft(null);try{e[Ke]&=-129,e[Ke]|=256,e[Ti]&&zu(e[Ti]),gA(i,e),mA(i,e),e[Je].type===1&&e[mn].destroy();let n=e[Cs];if(n!==null&&dr(e[En])){n!==e[En]&&e_(n,e);let r=e[Ar];r!==null&&r.detachView(i)}Cg(e)}finally{ft(t)}}function mM(i,e,t,n){let r=i?.[tl];if(r?.enter?.has(e.index)&&uA(t,r.enter.get(e.index).animateFns),r==null||r.leave==null||!r.leave.has(e.index))return n(!1);i&&za.add(i[Ds]),uE(t,()=>{if(r.leave&&r.leave.has(e.index)){let o=r.leave.get(e.index),a=[];if(o){for(let c=0;c<o.animateFns.length;c++){let l=o.animateFns[c],{promise:u}=l();a.push(u)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(a),pA(i,n)}else i&&za.delete(i[Ds]),n(!1)},r)}function pA(i,e){let t=i[tl]?.running;if(t){t.then(()=>{i[tl].running=void 0,za.delete(i[Ds]),e(!0)});return}e(!1)}function mA(i,e){let t=i.cleanup,n=e[Oa];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?n[a]():n[-a].unsubscribe(),o+=2}else{let a=n[t[o+1]];t[o].call(a)}n!==null&&(e[Oa]=null);let r=e[Zr];if(r!==null){e[Zr]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[el];if(s!==null){e[el]=null;for(let o of s)o.destroy()}}function gA(i,e){let t;if(i!=null&&(t=i.destroyHooks)!=null)for(let n=0;n<t.length;n+=2){let r=e[t[n]];if(!(r instanceof ul)){let s=t[n+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];Ft(Ct.LifecycleHookStart,a,c);try{c.call(a)}finally{Ft(Ct.LifecycleHookEnd,a,c)}}else{Ft(Ct.LifecycleHookStart,r,s);try{s.call(r)}finally{Ft(Ct.LifecycleHookEnd,r,s)}}}}}function _A(i,e,t){return yA(i,e.parent,t)}function yA(i,e,t){let n=e;for(;n!==null&&n.type&168;)e=n,n=e.parent;if(n===null)return t[lr];if(wo(n)){let{encapsulation:r}=i.data[n.directiveStart+n.componentOffset];if(r===pr.None||r===pr.Emulated)return null}return Rr(n,t)}function vA(i,e,t){return MA(i,e,t)}function xA(i,e,t){return i.type&40?Rr(i,t):null}var MA=xA,gM;function t_(i,e,t,n){let r=_A(i,n,e),s=e[mn],o=n.parent||e[qi],a=vA(o,n,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)dM(s,r,t[c],a,!1);else dM(s,r,t,a,!1);gM!==void 0&&gM(s,n,e,t,r)}function cl(i,e){if(e!==null){let t=e.type;if(t&3)return Rr(e,i);if(t&4)return Ig(-1,i[e.index]);if(t&8){let n=e.child;if(n!==null)return cl(i,n);{let r=i[e.index];return dr(r)?Ig(-1,r):Xi(r)}}else{if(t&128)return cl(i,e.next);if(t&32)return Kg(e,i)()||Xi(i[e.index]);{let n=hE(i,e);if(n!==null){if(Array.isArray(n))return n[0];let r=ws(i[ur]);return cl(r,n)}else return cl(i,e.next)}}}return null}function hE(i,e){if(e!==null){let n=i[ur][qi],r=e.projection;return n.projection[r]}return null}function Ig(i,e){let t=Kn+i+1;if(t<e.length){let n=e[t],r=n[Je].firstChild;if(r!==null)return cl(n,r)}return e[As]}function n_(i,e,t,n,r,s,o){for(;t!=null;){let a=n[Ts];if(t.type===128){t=t.next;continue}let c=n[t.index],l=t.type;if(o&&e===0&&(c&&Ha(Xi(c),n),t.flags|=2),!qg(t))if(l&8)n_(i,e,t.child,n,r,s,!1),Ba(e,i,a,r,c,t,s,n);else if(l&32){let u=Kg(t,n),d;for(;d=u();)Ba(e,i,a,r,d,t,s,n);Ba(e,i,a,r,c,t,s,n)}else l&16?EA(i,e,n,t,r,s):Ba(e,i,a,r,c,t,s,n);t=o?t.projectionNext:t.next}}function Yd(i,e,t,n,r,s){n_(t,n,i.firstChild,e,r,s,!1)}function EA(i,e,t,n,r,s){let o=t[ur],c=o[qi].projection[n.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Ba(e,i,t[Ts],r,u,n,s,t)}else{let l=c,u=o[En];WM(n)&&(l.flags|=128),n_(i,e,l,u,r,s,!0)}}function bA(i,e,t,n,r,s,o){let a=n[As],c=Xi(n);a!==c&&Ba(e,i,t,s,a,r,o);for(let l=Kn;l<n.length;l++){let u=n[l];Yd(u[Je],u,i,e,s,a)}}function pE(i,e,t,n,r){let s=wd(),o=n&2;try{Is(-1),o&&e.length>fi&&oE(i,e,fi,!1);let a=o?Ct.TemplateUpdateStart:Ct.TemplateCreateStart;Ft(a,r,t),t(n,r)}finally{Is(s);let a=o?Ct.TemplateUpdateEnd:Ct.TemplateCreateEnd;Ft(a,r,t)}}function i_(i,e,t){RA(i,e,t),(t.flags&64)===64&&NA(i,e,t)}function r_(i,e,t=Rr){let n=e.localNames;if(n!==null){let r=e.index+1;for(let s=0;s<n.length;s+=2){let o=n[s+1],a=o===-1?t(e,i):i[o];i[r++]=a}}}function SA(i,e,t,n){let s=n.get(ZM,YM)||t===pr.ShadowDom||t===pr.ExperimentalIsolatedShadowDom,o=i.selectRootElement(e,s);return wA(o),o}function wA(i){TA(i)}var TA=()=>null;function CA(i){return i==="class"?"className":i==="for"?"htmlFor":i==="formaction"?"formAction":i==="innerHtml"?"innerHTML":i==="readonly"?"readOnly":i==="tabindex"?"tabIndex":i}function DA(i,e,t,n,r,s){let o=e[Je];if(s_(i,o,e,t,n)){wo(i)&&IA(e,i.index);return}i.type&3&&(t=CA(t)),AA(i,e,t,n,r,s)}function AA(i,e,t,n,r,s){if(i.type&3){let o=Rr(i,e);n=s!=null?s(n,i.value||"",t):n,r.setProperty(o,t,n)}else i.type&12}function IA(i,e){let t=fr(e,i);t[Ke]&16||(t[Ke]|=64)}function RA(i,e,t){let n=t.directiveStart,r=t.directiveEnd;wo(t)&&aA(e,t,i.data[n+t.componentOffset]),i.firstCreatePass||kM(t,e);let s=t.initialInputs;for(let o=n;o<r;o++){let a=i.data[o],c=Fd(e,i,o,t);if(Ha(c,e),s!==null&&OA(e,o-n,c,a,t,s),To(a)){let l=fr(t.index,e);l[Vn]=Fd(e,i,o,t)}}}function NA(i,e,t){let n=t.directiveStart,r=t.directiveEnd,s=t.index,o=Wx();try{Is(s);for(let a=n;a<r;a++){let c=i.data[a],l=e[a];Md(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&PA(c,l)}}finally{Is(-1),Md(o)}}function PA(i,e){i.hostBindings!==null&&i.hostBindings(1,e)}function mE(i,e){let t=i.directiveRegistry,n=null;if(t)for(let r=0;r<t.length;r++){let s=t[r];QD(e,s.selectors,!1)&&(n??=[],To(s)?n.unshift(s):n.push(s))}return n}function OA(i,e,t,n,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;a+=2){let c=o[a],l=o[a+1];Ag(n,t,c,l)}}function gE(i,e,t,n,r){let s=fi+t,o=e[Je],a=r(o,e,i,n,t);e[s]=a,ka(i,!0);let c=i.type===2;return c?(nE(e[mn],a,i),(Lx()===0||il(i))&&Ha(a,e),Fx()):Ha(a,e),Td()&&(!c||!qg(i))&&t_(o,e,a,i),i}function _E(i){let e=i;return lg()?Bx():(e=e.parent,ka(e,!1)),e}function LA(i,e){let t=i[Ts];if(!t)return;let n;try{n=t.get(Ao,null)}catch{n=null}n?.(e)}function s_(i,e,t,n,r){let s=i.inputs?.[n],o=i.hostDirectiveInputs?.[n],a=!1;if(o)for(let c=0;c<o.length;c+=2){let l=o[c],u=o[c+1],d=e.data[l];Ag(d,t[l],u,r),a=!0}if(s)for(let c of s){let l=t[c],u=e.data[c];Ag(u,l,n,r),a=!0}return a}function FA(i,e){let t=fr(e,i),n=t[Je];kA(n,t);let r=t[lr];r!==null&&t[Qc]===null&&(t[Qc]=JM(r,t[Ts])),Ft(Ct.ComponentStart);try{o_(n,t,t[Vn])}finally{Ft(Ct.ComponentEnd,t[Vn])}}function kA(i,e){for(let t=e.length;t<i.blueprint.length;t++)e.push(i.blueprint[t])}function o_(i,e,t){bd(e);try{let n=i.viewQuery;n!==null&&Dg(1,n,t);let r=i.template;r!==null&&pE(i,e,r,1,t),i.firstCreatePass&&(i.firstCreatePass=!1),e[Ar]?.finishViewCreation(i),i.staticContentQueries&&KM(i,e),i.staticViewQueries&&Dg(2,i.viewQuery,t);let s=i.components;s!==null&&UA(e,s)}catch(n){throw i.firstCreatePass&&(i.incompleteFirstPass=!0,i.firstCreatePass=!1),n}finally{e[Ke]&=-5,Sd()}}function UA(i,e){for(let t=0;t<e.length;t++)FA(i,e[t])}function BA(i,e,t,n){let r=ft(null);try{let s=e.tView,a=i[Ke]&4096?4096:16,c=Zg(i,s,t,a,null,e,null,null,n?.injector??null,n?.embeddedViewInjector??null,n?.dehydratedView??null),l=i[e.index];c[Cs]=l;let u=i[Ar];return u!==null&&(c[Ar]=u.createEmbeddedView(s)),o_(s,c,t),c}finally{ft(r)}}function _M(i,e){return!e||e.firstChild===null||WM(i)}function dl(i,e,t,n,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&n.push(Xi(s)),dr(s)&&yE(s,n);let o=t.type;if(o&8)dl(i,e,t.child,n);else if(o&32){let a=Kg(t,e),c;for(;c=a();)n.push(c)}else if(o&16){let a=hE(e,t);if(Array.isArray(a))n.push(...a);else{let c=ws(e[ur]);dl(c[Je],c,a,n,!0)}}t=r?t.projectionNext:t.next}return n}function yE(i,e){for(let t=Kn;t<i.length;t++){let n=i[t],r=n[Je].firstChild;r!==null&&dl(n[Je],n,r,e)}i[As]!==i[lr]&&e.push(i[As])}function vE(i){if(i[md]!==null){for(let e of i[md])e.impl.addSequence(e);i[md].length=0}}var xE=[];function VA(i){return i[Ti]??HA(i)}function HA(i){let e=xE.pop()??Object.create(GA);return e.lView=i,e}function zA(i){i.lView[Ti]!==i&&(i.lView=null,xE.push(i))}var GA=Wi(Jn({},rm),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:i=>{sl(i.lView)},consumerOnSignalRead(){this.lView[Ti]=this}});function WA(i){let e=i[Ti]??Object.create(jA);return e.lView=i,e}var jA=Wi(Jn({},rm),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:i=>{let e=ws(i.lView);for(;e&&!ME(e[Je]);)e=ws(e);e&&eg(e)},consumerOnSignalRead(){this.lView[Ti]=this}});function ME(i){return i.type!==2}function EE(i){if(i[el]===null)return;let e=!0;for(;e;){let t=!1;for(let n of i[el])n.dirty&&(t=!0,n.zone===null||Zone.current===n.zone?n.run():n.zone.run(()=>n.run()));e=t&&!!(i[Ke]&8192)}}var $A=100;function bE(i,e=0){let n=i[Kr].rendererFactory,r=!1;r||n.begin?.();try{qA(i,e)}finally{r||n.end?.()}}function qA(i,e){let t=ug();try{dg(!0),Rg(i,e);let n=0;for(;rl(i);){if(n===$A)throw new _t(103,!1);n++,Rg(i,1)}}finally{dg(t)}}function XA(i,e,t,n){if(Co(e))return;let r=e[Ke],s=!1,o=!1;bd(e);let a=!0,c=null,l=null;s||(ME(i)?(l=VA(e),c=sm(l)):Hu()===null?(a=!1,l=WA(e),c=sm(l)):e[Ti]&&(zu(e[Ti]),e[Ti]=null));try{Qm(e),Hx(i.bindingStartIndex),t!==null&&pE(i,e,t,2,n);let u=(r&3)===3;if(!s)if(u){let f=i.preOrderCheckHooks;f!==null&&Dd(e,f,null)}else{let f=i.preOrderHooks;f!==null&&Ad(e,f,0,null),Eg(e,0)}if(o||YA(e),EE(e),SE(e,0),i.contentQueries!==null&&KM(i,e),!s)if(u){let f=i.contentCheckHooks;f!==null&&Dd(e,f)}else{let f=i.contentHooks;f!==null&&Ad(e,f,1),Eg(e,1)}JA(i,e);let d=i.components;d!==null&&TE(e,d,0);let h=i.viewQuery;if(h!==null&&Dg(2,h,n),!s)if(u){let f=i.viewCheckHooks;f!==null&&Dd(e,f)}else{let f=i.viewHooks;f!==null&&Ad(e,f,2),Eg(e,2)}if(i.firstUpdatePass===!0&&(i.firstUpdatePass=!1),e[pd]){for(let f of e[pd])f();e[pd]=null}s||(vE(e),e[Ke]&=-73)}catch(u){throw s||sl(e),u}finally{l!==null&&(Dv(l,c),a&&zA(l)),Sd()}}function SE(i,e){for(let t=$M(i);t!==null;t=qM(t))for(let n=Kn;n<t.length;n++){let r=t[n];wE(r,e)}}function YA(i){for(let e=$M(i);e!==null;e=qM(e)){if(!(e[Ke]&2))continue;let t=e[So];for(let n=0;n<t.length;n++){let r=t[n];eg(r)}}}function ZA(i,e,t){Ft(Ct.ComponentStart);let n=fr(e,i);try{wE(n,t)}finally{Ft(Ct.ComponentEnd,n[Vn])}}function wE(i,e){_d(i)&&Rg(i,e)}function Rg(i,e){let n=i[Je],r=i[Ke],s=i[Ti],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&om(s)),o||=!1,s&&(s.dirty=!1),i[Ke]&=-9217,o)XA(n,i,n.template,i[Vn]);else if(r&8192){let a=ft(null);try{EE(i),SE(i,1);let c=n.components;c!==null&&TE(i,c,1),vE(i)}finally{ft(a)}}}function TE(i,e,t){for(let n=0;n<e.length;n++)ZA(i,e[n],t)}function JA(i,e){let t=i.hostBindingOpCodes;if(t!==null)try{for(let n=0;n<t.length;n++){let r=t[n];if(r<0)Is(~r);else{let s=r,o=t[++n],a=t[++n];Gx(o,s);let c=e[s];Ft(Ct.HostBindingsUpdateStart,c);try{a(2,c)}finally{Ft(Ct.HostBindingsUpdateEnd,c)}}}}finally{Is(-1)}}function a_(i,e){let t=ug()?64:1088;for(i[Kr].changeDetectionScheduler?.notify(e);i;){i[Ke]|=t;let n=ws(i);if(Fa(i)&&!n)return i;i=n}return null}function CE(i,e,t,n){return[i,!0,0,e,null,n,null,t,null,null]}function KA(i,e,t,n=!0){let r=e[Je];if(QA(r,e,i,t),n){let o=Ig(t,i),a=e[mn],c=a.parentNode(i[As]);c!==null&&fA(r,i[qi],a,e,c,o)}let s=e[Qc];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Ng(i,e){if(i.length<=Kn)return;let t=Kn+e,n=i[t];if(n){let r=n[Cs];r!==null&&r!==i&&e_(r,n),e>0&&(i[t-1][$i]=n[$i]);let s=Zc(i,Kn+e);dA(n[Je],n);let o=s[Ar];o!==null&&o.detachView(s[Je]),n[En]=null,n[$i]=null,n[Ke]&=-129}return n}function QA(i,e,t,n){let r=Kn+n,s=t.length;n>0&&(t[r-1][$i]=e),n<s-Kn?(e[$i]=t[r],jm(t,Kn+n,e)):(t.push(e),e[$i]=null),e[En]=t;let o=e[Cs];o!==null&&t!==o&&DE(o,e);let a=e[Ar];a!==null&&a.insertView(i),yd(e),e[Ke]|=128}function DE(i,e){let t=i[So],n=e[En];if(Ir(n))i[Ke]|=2;else{let r=n[En][ur];e[ur]!==r&&(i[Ke]|=2)}t===null?i[So]=[e]:t.push(e)}var Ga=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,t=e[Je];return dl(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t}get context(){return this._lView[Vn]}set context(e){this._lView[Vn]=e}get destroyed(){return Co(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[En];if(dr(e)){let t=e[nl],n=t?t.indexOf(this):-1;n>-1&&(Ng(e,n),Zc(t,n))}this._attachedToViewContainer=!1}fE(this._lView[Je],this._lView)}onDestroy(e){tg(this._lView,e)}markForCheck(){a_(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[Ke]&=-129}reattach(){yd(this._lView),this._lView[Ke]|=128}detectChanges(){this._lView[Ke]|=1024,bE(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new _t(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=Fa(this._lView),t=this._lView[Cs];t!==null&&!e&&e_(t,this._lView),dE(this._lView[Je],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new _t(902,!1);this._appRef=e;let t=Fa(this._lView),n=this._lView[Cs];n!==null&&!t&&DE(n,this._lView),yd(this._lView)}};var Ro=(()=>{class i{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=eI;constructor(t,n,r){this._declarationLView=t,this._declarationTContainer=n,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,n){return this.createEmbeddedViewImpl(t,n)}createEmbeddedViewImpl(t,n,r){let s=BA(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:n,dehydratedView:r});return new Ga(s)}}return i})();function eI(){return c_(Yi(),jt())}function c_(i,e){return i.type&4?new Ro(e,i,Wa(i,e)):null}function Zd(i,e,t,n,r){let s=i.data[e];if(s===null)s=tI(i,e,t,n,r),zx()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=n,s.attrs=r;let o=Ux();s.injectorIndex=o===null?-1:o.injectorIndex}return ka(s,!0),s}function tI(i,e,t,n,r){let s=cg(),o=lg(),a=o?s:s&&s.parent,c=i.data[e]=iI(i,a,t,e,n,r);return nI(i,c,s,o),c}function nI(i,e,t,n){i.firstChild===null&&(i.firstChild=e),t!==null&&(n?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function iI(i,e,t,n,r,s){let o=e?e.injectorIndex:-1,a=0;return kx()&&(a|=128),{type:t,index:n,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,fieldIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var rI=()=>null;function yM(i,e){return rI(i,e)}var AE=class{},Jd=class{},Pg=class{resolveComponentFactory(e){throw new _t(917,!1)}},Kd=class{static NULL=new Pg},No=class{},l_=(()=>{class i{destroyNode=null;static __NG_ELEMENT_ID__=()=>sI()}return i})();function sI(){let i=jt(),e=Yi(),t=fr(e.index,i);return(Ir(t)?t:i)[mn]}var IE=(()=>{class i{static \u0275prov=qt({token:i,providedIn:"root",factory:()=>null})}return i})();var Rd={},Og=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,n){let r=this.injector.get(e,Rd,n);return r!==Rd||t===Rd?r:this.parentInjector.get(e,t,n)}};function Bd(i,e,t){let n=t?i.styles:null,r=t?i.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Fm(r,a);else if(s==2){let c=a,l=e[++o];n=Fm(n,c+": "+l+";")}}t?i.styles=n:i.stylesWithoutHost=n,t?i.classes=r:i.classesWithoutHost=r}function mr(i,e=0){let t=jt();if(t===null)return Tt(i,e);let n=Yi();return HM(n,t,wi(i),e)}function RE(i,e,t,n,r){let s=n===null?null:{"":-1},o=r(i,t);if(o!==null){let a=o,c=null,l=null;for(let u of o)if(u.resolveHostDirectives!==null){[a,c,l]=u.resolveHostDirectives(o);break}cI(i,e,t,a,s,c,l)}s!==null&&n!==null&&oI(t,n,s)}function oI(i,e,t){let n=i.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new _t(-301,!1);n.push(e[r],s)}}function aI(i,e,t){e.componentOffset=t,(i.components??=[]).push(e.index)}function cI(i,e,t,n,r,s,o){let a=n.length,c=null;for(let h=0;h<a;h++){let f=n[h];c===null&&To(f)&&(c=f,aI(i,t,h)),CD(kM(t,e),i,f.type)}pI(t,i.data.length,a),c?.viewProvidersResolver&&c.viewProvidersResolver(c);for(let h=0;h<a;h++){let f=n[h];f.providersResolver&&f.providersResolver(f)}let l=!1,u=!1,d=sE(i,e,a,null);a>0&&(t.directiveToIndex=new Map);for(let h=0;h<a;h++){let f=n[h];if(t.mergedAttrs=Wd(t.mergedAttrs,f.hostAttrs),uI(i,t,e,d,f),hI(d,f,r),o!==null&&o.has(f)){let[g,m]=o.get(f);t.directiveToIndex.set(f.type,[d,g+t.directiveStart,m+t.directiveStart])}else(s===null||!s.has(f))&&t.directiveToIndex.set(f.type,d);f.contentQueries!==null&&(t.flags|=4),(f.hostBindings!==null||f.hostAttrs!==null||f.hostVars!==0)&&(t.flags|=64);let _=f.type.prototype;!l&&(_.ngOnChanges||_.ngOnInit||_.ngDoCheck)&&((i.preOrderHooks??=[]).push(t.index),l=!0),!u&&(_.ngOnChanges||_.ngDoCheck)&&((i.preOrderCheckHooks??=[]).push(t.index),u=!0),d++}lI(i,t,s)}function lI(i,e,t){for(let n=e.directiveStart;n<e.directiveEnd;n++){let r=i.data[n];if(t===null||!t.has(r))vM(0,e,r,n),vM(1,e,r,n),MM(e,n,!1);else{let s=t.get(r);xM(0,e,s,n),xM(1,e,s,n),MM(e,n,!0)}}}function vM(i,e,t,n){let r=i===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o;i===0?o=e.inputs??={}:o=e.outputs??={},o[s]??=[],o[s].push(n),NE(e,s)}}function xM(i,e,t,n){let r=i===0?t.inputs:t.outputs;for(let s in r)if(r.hasOwnProperty(s)){let o=r[s],a;i===0?a=e.hostDirectiveInputs??={}:a=e.hostDirectiveOutputs??={},a[o]??=[],a[o].push(n,s),NE(e,o)}}function NE(i,e){e==="class"?i.flags|=8:e==="style"&&(i.flags|=16)}function MM(i,e,t){let{attrs:n,inputs:r,hostDirectiveInputs:s}=i;if(n===null||!t&&r===null||t&&s===null||Xg(i)){i.initialInputs??=[],i.initialInputs.push(null);return}let o=null,a=0;for(;a<n.length;){let c=n[a];if(c===0){a+=4;continue}else if(c===5){a+=2;continue}else if(typeof c=="number")break;if(!t&&r.hasOwnProperty(c)){let l=r[c];for(let u of l)if(u===e){o??=[],o.push(c,n[a+1]);break}}else if(t&&s.hasOwnProperty(c)){let l=s[c];for(let u=0;u<l.length;u+=2)if(l[u]===e){o??=[],o.push(l[u+1],n[a+1]);break}}a+=2}i.initialInputs??=[],i.initialInputs.push(o)}function uI(i,e,t,n,r){i.data[n]=r;let s=r.factory||(r.factory=Ra(r.type,!0)),o=new ul(s,To(r),mr,null);i.blueprint[n]=o,t[n]=o,dI(i,e,n,sE(i,t,r.hostVars,ja),r)}function dI(i,e,t,n,r){let s=r.hostBindings;if(s){let o=i.hostBindingOpCodes;o===null&&(o=i.hostBindingOpCodes=[]);let a=~e.index;fI(o)!=a&&o.push(a),o.push(t,n,s)}}function fI(i){let e=i.length;for(;e>0;){let t=i[--e];if(typeof t=="number"&&t<0)return t}return 0}function hI(i,e,t){if(t){if(e.exportAs)for(let n=0;n<e.exportAs.length;n++)t[e.exportAs[n]]=i;To(e)&&(t[""]=i)}}function pI(i,e,t){i.flags|=1,i.directiveStart=e,i.directiveEnd=e+t,i.providerIndexes=e}function PE(i,e,t,n,r,s,o,a){let c=e[Je],l=c.consts,u=Do(l,o),d=Zd(c,i,t,n,u);return s&&RE(c,e,d,Do(l,a),r),d.mergedAttrs=Wd(d.mergedAttrs,d.attrs),d.attrs!==null&&Bd(d,d.attrs,!1),d.mergedAttrs!==null&&Bd(d,d.mergedAttrs,!0),c.queries!==null&&c.queries.elementStart(c,d),d}function OE(i,e){NM(i,e),Km(e)&&i.queries.elementEnd(e)}function mI(i,e,t,n,r,s){let o=e.consts,a=Do(o,r),c=Zd(e,i,t,n,a);if(c.mergedAttrs=Wd(c.mergedAttrs,c.attrs),s!=null){let l=Do(o,s);c.localNames=[];for(let u=0;u<l.length;u+=2)c.localNames.push(l[u],-1)}return c.attrs!==null&&Bd(c,c.attrs,!1),c.mergedAttrs!==null&&Bd(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function u_(i){return FE(i)?Array.isArray(i)||!(i instanceof Map)&&Symbol.iterator in i:!1}function LE(i,e){if(Array.isArray(i))for(let t=0;t<i.length;t++)e(i[t]);else{let t=i[Symbol.iterator](),n;for(;!(n=t.next()).done;)e(n.value)}}function FE(i){return i!==null&&(typeof i=="function"||typeof i=="object")}function gI(i,e,t){return i[e]=t}function _I(i,e){return i[e]}function Vd(i,e,t){if(t===ja)return!1;let n=i[e];return Object.is(n,t)?!1:(i[e]=t,!0)}function Lg(i,e,t,n){let r=Vd(i,e,t);return Vd(i,e+1,n)||r}function yI(i,e,t,n,r,s){let o=Lg(i,e,t,n);return Lg(i,e+2,r,s)||o}function Nd(i,e,t){return function n(r){let s=wo(i)?fr(i.index,e):e;a_(s,5);let o=e[Vn],a=EM(e,o,t,r),c=n.__ngNextListenerFn__;for(;c;)a=EM(e,o,c,r)&&a,c=c.__ngNextListenerFn__;return a}}function EM(i,e,t,n){let r=ft(null);try{return Ft(Ct.OutputStart,e,t),t(n)!==!1}catch(s){return LA(i,s),!1}finally{Ft(Ct.OutputEnd,e,t),ft(r)}}function kE(i,e,t,n,r,s,o,a){let c=il(i),l=!1,u=null;if(!n&&c&&(u=xI(e,t,s,i.index)),u!==null){let d=u.__ngLastListenerFn__||u;d.__ngNextListenerFn__=o,u.__ngLastListenerFn__=o,l=!0}else{let d=Rr(i,t),h=n?n(d):d;HD(t,h,s,a);let f=r.listen(h,s,a);if(!vI(s)){let _=n?g=>n(Xi(g[i.index])):i.index;UE(_,e,t,s,a,f,!1)}}return l}function vI(i){return i.startsWith("animation")||i.startsWith("transition")}function xI(i,e,t,n){let r=i.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===n){let a=e[Oa],c=r[s+2];return a&&a.length>c?a[c]:null}typeof o=="string"&&(s+=2)}return null}function UE(i,e,t,n,r,s,o){let a=e.firstCreatePass?ig(e):null,c=ng(t),l=c.length;c.push(r,s),a&&a.push(n,i,l,(l+1)*(o?-1:1))}function bM(i,e,t,n,r,s){let o=e[t],a=e[Je],l=a.data[t].outputs[n],d=o[l].subscribe(s);UE(i.index,a,e,r,s,d,!0)}var Fg=Symbol("BINDING");var kg=class extends Kd{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=xo(e);return new fl(t,this.ngModule)}};function MI(i){return Object.keys(i).map(e=>{let[t,n,r]=i[e],s={propName:t,templateName:e,isSignal:(n&Xd.SignalBased)!==0};return r&&(s.transform=r),s})}function EI(i){return Object.keys(i).map(e=>({propName:i[e],templateName:e}))}function bI(i,e,t){let n=e instanceof ji?e:e?.injector;return n&&i.getStandaloneInjector!==null&&(n=i.getStandaloneInjector(n)||n),n?new Og(t,n):t}function SI(i){let e=i.get(No,null);if(e===null)throw new _t(407,!1);let t=i.get(IE,null),n=i.get(Na,null);return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:n,ngReflect:!1}}function wI(i,e){let t=BE(i);return eE(e,t,t==="svg"?Cx:t==="math"?Dx:null)}function BE(i){return(i.selectors[0][0]||"div").toLowerCase()}var fl=class extends Jd{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=MI(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=EI(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=iA(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,n,r,s,o){Ft(Ct.DynamicComponentStart);let a=ft(null);try{let c=this.componentDef,l=TI(n,c,o,s),u=bI(c,r||this.ngModule,e),d=SI(u),h=d.rendererFactory.createRenderer(null,c),f=n?SA(h,n,c.encapsulation,u):wI(c,h),_=o?.some(SM)||s?.some(p=>typeof p!="function"&&p.bindings.some(SM)),g=Zg(null,l,null,512|rE(c),null,null,d,h,u,null,JM(f,u,!0));g[fi]=f,bd(g);let m=null;try{let p=PE(fi,g,2,"#host",()=>l.directiveRegistry,!0,0);nE(h,f,p),Ha(f,g),i_(l,g,p),QM(l,p,g),OE(l,p),t!==void 0&&DI(p,this.ngContentSelectors,t),m=fr(p.index,g),g[Vn]=m[Vn],o_(l,g,null)}catch(p){throw m!==null&&Cg(m),Cg(g),p}finally{Ft(Ct.DynamicComponentEnd),Sd()}return new Hd(this.componentType,g,!!_)}finally{ft(a)}}};function TI(i,e,t,n){let r=i?["ng-version","21.1.4"]:rA(e.selectors[0]),s=null,o=null,a=0;if(t)for(let u of t)a+=u[Fg].requiredVars,u.create&&(u.targetIdx=0,(s??=[]).push(u)),u.update&&(u.targetIdx=0,(o??=[]).push(u));if(n)for(let u=0;u<n.length;u++){let d=n[u];if(typeof d!="function")for(let h of d.bindings){a+=h[Fg].requiredVars;let f=u+1;h.create&&(h.targetIdx=f,(s??=[]).push(h)),h.update&&(h.targetIdx=f,(o??=[]).push(h))}}let c=[e];if(n)for(let u of n){let d=typeof u=="function"?u:u.type,h=Hm(d);c.push(h)}return Yg(0,null,CI(s,o),1,a,c,null,null,null,[r],null)}function CI(i,e){return!i&&!e?null:t=>{if(t&1&&i)for(let n of i)n.create();if(t&2&&e)for(let n of e)n.update()}}function SM(i){let e=i[Fg].kind;return e==="input"||e==="twoWay"}var Hd=class extends AE{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t,n){super(),this._rootLView=t,this._hasInputBindings=n,this._tNode=gd(t[Je],fi),this.location=Wa(this._tNode,t),this.instance=fr(this._tNode.index,t)[Vn],this.hostView=this.changeDetectorRef=new Ga(t,void 0),this.componentType=e}setInput(e,t){this._hasInputBindings;let n=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let r=this._rootLView,s=s_(n,r[Je],r,e,t);this.previousInputValues.set(e,t);let o=fr(n.index,r);a_(o,1)}get injector(){return new Io(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function DI(i,e,t){let n=i.projection=[];for(let r=0;r<e.length;r++){let s=t[r];n.push(s!=null&&s.length?Array.from(s):null)}}var $a=(()=>{class i{static __NG_ELEMENT_ID__=AI}return i})();function AI(){let i=Yi();return HE(i,jt())}var II=$a,VE=class extends II{_lContainer;_hostTNode;_hostLView;constructor(e,t,n){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=n}get element(){return Wa(this._hostTNode,this._hostLView)}get injector(){return new Io(this._hostTNode,this._hostLView)}get parentInjector(){let e=Wg(this._hostTNode,this._hostLView);if(OM(e)){let t=Ld(e,this._hostLView),n=Od(e),r=t[Je].data[n+8];return new Io(r,t)}else return new Io(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=wM(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Kn}createEmbeddedView(e,t,n){let r,s;typeof n=="number"?r=n:n!=null&&(r=n.index,s=n.injector);let o=yM(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,_M(this._hostTNode,o)),a}createComponent(e,t,n,r,s,o,a){let c=e&&!dD(e),l;if(c)l=t;else{let m=t||{};l=m.index,n=m.injector,r=m.projectableNodes,s=m.environmentInjector||m.ngModuleRef,o=m.directives,a=m.bindings}let u=c?e:new fl(xo(e)),d=n||this.parentInjector;if(!s&&u.ngModule==null){let p=(c?d:this.parentInjector).get(ji,null);p&&(s=p)}let h=xo(u.componentType??{}),f=yM(this._lContainer,h?.id??null),_=f?.firstChild??null,g=u.create(d,r,_,s,o,a);return this.insertImpl(g.hostView,l,_M(this._hostTNode,f)),g}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,n){let r=e._lView;if(Rx(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[En],l=new VE(c,c[qi],c[En]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return KA(o,r,s,n),e.attachToViewContainerRef(),jm(wg(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=wM(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),n=Ng(this._lContainer,t);n&&(Zc(wg(this._lContainer),t),fE(n[Je],n))}detach(e){let t=this._adjustIndex(e,-1),n=Ng(this._lContainer,t);return n&&Zc(wg(this._lContainer),t)!=null?new Ga(n):null}_adjustIndex(e,t=0){return e??this.length+t}};function wM(i){return i[nl]}function wg(i){return i[nl]||(i[nl]=[])}function HE(i,e){let t,n=e[i.index];return dr(n)?t=n:(t=CE(n,e,null,i),e[i.index]=t,Jg(e,t)),NI(t,e,i,n),new VE(t,i,e)}function RI(i,e){let t=i[mn],n=t.createComment(""),r=Rr(e,i),s=t.parentNode(r);return Ud(t,s,n,t.nextSibling(r),!1),n}var NI=LI,PI=()=>!1;function OI(i,e,t){return PI(i,e,t)}function LI(i,e,t,n){if(i[As])return;let r;t.type&8?r=Xi(n):r=RI(e,t),i[As]=r}var Ug=class i{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new i(this.queryList)}setDirty(){this.queryList.setDirty()}},Bg=class i{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let n=e.contentQueries!==null?e.contentQueries[0]:t.length,r=[];for(let s=0;s<n;s++){let o=t.getByIndex(s),a=this.queries[o.indexInDeclarationView];r.push(a.clone())}return new i(r)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)d_(e,t).matches!==null&&this.queries[t].setDirty()}},Vg=class{flags;read;predicate;constructor(e,t,n=null){this.flags=t,this.read=n,typeof e=="string"?this.predicate=GI(e):this.predicate=e}},Hg=class i{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let n=0;n<this.queries.length;n++)this.queries[n].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let n=0;n<this.length;n++){let r=t!==null?t.length:0,s=this.getByIndex(n).embeddedTView(e,r);s&&(s.indexInDeclarationView=n,t!==null?t.push(s):t=[s])}return t!==null?new i(t):null}template(e,t){for(let n=0;n<this.queries.length;n++)this.queries[n].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},zg=class i{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new i(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,n=e.parent;for(;n!==null&&n.type&8&&n.index!==t;)n=n.parent;return t===(n!==null?n.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let n=this.metadata.predicate;if(Array.isArray(n))for(let r=0;r<n.length;r++){let s=n[r];this.matchTNodeWithReadOption(e,t,FI(t,s)),this.matchTNodeWithReadOption(e,t,Id(t,e,s,!1,!1))}else n===Ro?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,Id(t,e,n,!1,!1))}matchTNodeWithReadOption(e,t,n){if(n!==null){let r=this.metadata.read;if(r!==null)if(r===Po||r===$a||r===Ro&&t.type&4)this.addMatch(t.index,-2);else{let s=Id(t,e,r,!1,!1);s!==null&&this.addMatch(t.index,s)}else this.addMatch(t.index,n)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function FI(i,e){let t=i.localNames;if(t!==null){for(let n=0;n<t.length;n+=2)if(t[n]===e)return t[n+1]}return null}function kI(i,e){return i.type&11?Wa(i,e):i.type&4?c_(i,e):null}function UI(i,e,t,n){return t===-1?kI(e,i):t===-2?BI(i,e,n):Fd(i,i[Je],t,e)}function BI(i,e,t){if(t===Po)return Wa(e,i);if(t===Ro)return c_(e,i);if(t===$a)return HE(e,i)}function zE(i,e,t,n){let r=e[Ar].queries[n];if(r.matches===null){let s=i.data,o=t.matches,a=[];for(let c=0;o!==null&&c<o.length;c+=2){let l=o[c];if(l<0)a.push(null);else{let u=s[l];a.push(UI(e,u,o[c+1],t.metadata.read))}}r.matches=a}return r.matches}function Gg(i,e,t,n){let r=i.queries.getByIndex(t),s=r.matches;if(s!==null){let o=zE(i,e,r,t);for(let a=0;a<s.length;a+=2){let c=s[a];if(c>0)n.push(o[a/2]);else{let l=s[a+1],u=e[-c];for(let d=Kn;d<u.length;d++){let h=u[d];h[Cs]===h[En]&&Gg(h[Je],h,l,n)}if(u[So]!==null){let d=u[So];for(let h=0;h<d.length;h++){let f=d[h];Gg(f[Je],f,l,n)}}}}}return n}function VI(i,e){return i[Ar].queries[e].queryList}function HI(i,e,t){let n=new kd((t&4)===4);return Ox(i,e,n,n.destroy),(e[Ar]??=new Bg).queries.push(new Ug(n))-1}function zI(i,e,t){let n=Nr();return n.firstCreatePass&&(WI(n,new Vg(i,e,t),-1),(e&2)===2&&(n.staticViewQueries=!0)),HI(n,jt(),e)}function GI(i){return i.split(",").map(e=>e.trim())}function WI(i,e,t){i.queries===null&&(i.queries=new Hg),i.queries.track(new zg(e,t))}function d_(i,e){return i.queries.getByIndex(e)}function jI(i,e){let t=i[Je],n=d_(t,e);return n.crossesNgTemplate?Gg(t,i,e,[]):zE(t,i,n,e)}var zd=class{};var hl=class extends zd{injector;componentFactoryResolver=new kg(this);instance=null;constructor(e){super();let t=new _o([...e.providers,{provide:zd,useValue:this},{provide:Kd,useValue:this.componentFactoryResolver}],e.parent||Kc(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function GE(i,e,t=null){return new hl({providers:i,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var $I=(()=>{class i{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let n=Xm(!1,t.type),r=n.length>0?GE([n],this._injector,""):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=qt({token:i,providedIn:"environment",factory:()=>new i(Tt(ji))})}return i})();function Qn(i){return Gd(()=>{let e=WE(i),t=Wi(Jn({},e),{decls:i.decls,vars:i.vars,template:i.template,consts:i.consts||null,ngContentSelectors:i.ngContentSelectors,onPush:i.changeDetection===jg.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&i.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get($I).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:i.signals??!1,data:i.data||{},encapsulation:i.encapsulation||pr.Emulated,styles:i.styles||cr,_:null,schemas:i.schemas||null,tView:null,id:""});e.standalone&&aE("NgStandalone"),jE(t);let n=i.dependencies;return t.directiveDefs=TM(n,qI),t.pipeDefs=TM(n,hx),t.id=ZI(t),t})}function qI(i){return xo(i)||Hm(i)}function Qd(i){return Gd(()=>({type:i.type,bootstrap:i.bootstrap||cr,declarations:i.declarations||cr,imports:i.imports||cr,exports:i.exports||cr,transitiveCompileScopes:null,schemas:i.schemas||null,id:i.id||null}))}function XI(i,e){if(i==null)return Mo;let t={};for(let n in i)if(i.hasOwnProperty(n)){let r=i[n],s,o,a,c;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s,c=r[3]||null):(s=r,o=r,a=Xd.None,c=null),t[s]=[n,a,c],e[s]=o}return t}function YI(i){if(i==null)return Mo;let e={};for(let t in i)i.hasOwnProperty(t)&&(e[i[t]]=t);return e}function ef(i){return Gd(()=>{let e=WE(i);return jE(e),e})}function WE(i){let e={};return{type:i.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:i.hostBindings||null,hostVars:i.hostVars||0,hostAttrs:i.hostAttrs||null,contentQueries:i.contentQueries||null,declaredInputs:e,inputConfig:i.inputs||Mo,exportAs:i.exportAs||null,standalone:i.standalone??!0,signals:i.signals===!0,selectors:i.selectors||cr,viewQuery:i.viewQuery||null,features:i.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,inputs:XI(i.inputs,e),outputs:YI(i.outputs),debugInfo:null}}function jE(i){i.features?.forEach(e=>e(i))}function TM(i,e){return i?()=>{let t=typeof i=="function"?i():i,n=[];for(let r of t){let s=e(r);s!==null&&n.push(s)}return n}:null}function ZI(i){let e=0,t=typeof i.consts=="function"?"":i.consts,n=[i.selectors,i.ngContentSelectors,i.hostVars,i.hostAttrs,t,i.vars,i.decls,i.encapsulation,i.standalone,i.signals,i.exportAs,JSON.stringify(i.inputs),JSON.stringify(i.outputs),Object.getOwnPropertyNames(i.type.prototype),!!i.contentQueries,!!i.viewQuery];for(let s of n.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function JI(i,e,t,n,r,s,o,a){if(t.firstCreatePass){i.mergedAttrs=Wd(i.mergedAttrs,i.attrs);let u=i.tView=Yg(2,i,r,s,o,t.directiveRegistry,t.pipeRegistry,null,t.schemas,t.consts,null);t.queries!==null&&(t.queries.template(t,i),u.queries=t.queries.embeddedTView(i))}a&&(i.flags|=a),ka(i,!1);let c=QI(t,e,i,n);Td()&&t_(t,e,c,i),Ha(c,e);let l=CE(c,e,c,i);e[n+fi]=l,Jg(e,l),OI(l,i,e)}function KI(i,e,t,n,r,s,o,a,c,l,u){let d=t+fi,h;return e.firstCreatePass?(h=Zd(e,d,4,o||null,a||null),sg()&&RE(e,i,h,Do(e.consts,l),mE),NM(e,h)):h=e.data[d],JI(h,i,e,t,n,r,s,c),il(h)&&i_(e,i,h),l!=null&&r_(i,h,u),h}function Qr(i,e,t,n,r,s,o,a){let c=jt(),l=Nr(),u=Do(l.consts,s);return KI(c,l,i,e,t,n,r,u,void 0,o,a),Qr}var QI=e1;function e1(i,e,t,n){return Cd(!0),e[mn].createComment("")}var f_=new wt("");function h_(i){return!!i&&typeof i.then=="function"}function $E(i){return!!i&&typeof i.subscribe=="function"}var qE=new wt("");var p_=(()=>{class i{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,n)=>{this.resolve=t,this.reject=n});appInits=St(qE,{optional:!0})??[];injector=St(yo);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=hd(this.injector,r);if(h_(s))t.push(s);else if($E(s)){let o=new Promise((a,c)=>{s.subscribe({complete:a,error:c})});t.push(o)}}let n=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{n()}).catch(r=>{this.reject(r)}),t.length===0&&n(),this.initialized=!0}static \u0275fac=function(n){return new(n||i)};static \u0275prov=qt({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),XE=new wt("");function YE(){cm(()=>{let i="";throw new _t(600,i)})}function ZE(i){return i.isBoundToModule}var t1=10;var tf=(()=>{class i{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=St(Ao);afterRenderManager=St(cE);zonelessEnabled=St(al);rootEffectScheduler=St(Mg);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new Xr;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=St(Ua);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(ho(t=>!t))}constructor(){St(ml,{optional:!0})}whenStable(){let t;return new Promise(n=>{t=this.isStable.subscribe({next:r=>{r&&n()}})}).finally(()=>{t.unsubscribe()})}_injector=St(ji);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,n){return this.bootstrapImpl(t,n)}bootstrapImpl(t,n,r=yo.NULL){return this._injector.get(Bn).run(()=>{Ft(Ct.BootstrapComponentStart);let o=t instanceof Jd;if(!this._injector.get(p_).done){let _="";throw new _t(405,_)}let c;o?c=t:c=this._injector.get(Kd).resolveComponentFactory(t),this.componentTypes.push(c.componentType);let l=ZE(c)?void 0:this._injector.get(zd),u=n||c.selector,d=c.create(r,[],u,l),h=d.location.nativeElement,f=d.injector.get(f_,null);return f?.registerApplication(h),d.onDestroy(()=>{this.detachView(d.hostView),ll(this.components,d),f?.unregisterApplication(h)}),this._loadComponent(d),Ft(Ct.BootstrapComponentEnd,d),d})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Ft(Ct.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(Qg.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Ft(Ct.ChangeDetectionEnd),new _t(101,!1);let t=ft(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,ft(t),this.afterTick.next(),Ft(Ct.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(No,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<t1;){Ft(Ct.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Ft(Ct.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let n=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!n&&!rl(r))continue;let s=n&&!this.zonelessEnabled?0:1;bE(r,s),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>rl(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let n=t;this._views.push(n),n.attachToAppRef(this)}detachView(t){let n=t;ll(this._views,n),n.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(t),this._injector.get(XE,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>ll(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new _t(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(n){return new(n||i)};static \u0275prov=qt({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ll(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}var gH=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";function gr(i,e,t){let n=jt(),r=fg();if(Vd(n,r,e)){let s=Nr(),o=Yx();DA(o,n,i,e,n[mn],t)}return gr}function CM(i,e,t,n,r){s_(e,i,t,r?"class":"style",n)}function zt(i,e,t,n){let r=jt(),s=r[Je],o=i+fi,a=s.firstCreatePass?PE(o,r,2,e,mE,sg(),t,n):s.data[o];if(gE(a,r,i,e,JE),il(a)){let c=r[Je];i_(c,r,a),QM(c,a,r)}return n!=null&&r_(r,a),zt}function $t(){let i=Nr(),e=Yi(),t=_E(e);return i.firstCreatePass&&OE(i,t),og(t)&&ag(),rg(),t.classesWithoutHost!=null&&yD(t)&&CM(i,t,jt(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&vD(t)&&CM(i,t,jt(),t.stylesWithoutHost,!1),$t}function es(i,e,t,n){return zt(i,e,t,n),$t(),es}function Ne(i,e,t,n){let r=jt(),s=r[Je],o=i+fi,a=s.firstCreatePass?mI(o,s,2,e,t,n):s.data[o];return gE(a,r,i,e,JE),n!=null&&r_(r,a),Ne}function Fe(){let i=Yi(),e=_E(i);return og(e)&&ag(),rg(),Fe}function hi(i,e,t,n){return Ne(i,e,t,n),Fe(),hi}var JE=(i,e,t,n,r)=>(Cd(!0),eE(e[mn],n,Zx()));function m_(){return jt()}var gl="en-US";var n1=gl;function KE(i){typeof i=="string"&&(n1=i.toLowerCase().replace(/_/g,"-"))}function nf(i,e,t){let n=jt(),r=Nr(),s=Yi();return i1(r,n,n[mn],s,i,e,t),nf}function _l(i,e,t){let n=jt(),r=Nr(),s=Yi();return(s.type&3||t)&&kE(s,r,n,t,n[mn],i,e,Nd(s,n,e)),_l}function i1(i,e,t,n,r,s,o){let a=!0,c=null;if((n.type&3||o)&&(c??=Nd(n,e,s),kE(n,i,e,o,t,r,s,c)&&(a=!1)),a){let l=n.outputs?.[r],u=n.hostDirectiveOutputs?.[r];if(u&&u.length)for(let d=0;d<u.length;d+=2){let h=u[d],f=u[d+1];c??=Nd(n,e,s),bM(n,e,h,f,r,c)}if(l&&l.length)for(let d of l)c??=Nd(n,e,s),bM(n,e,d,r,r,c)}}function g_(i=1){return Xx(i)}function rf(i,e,t){return zI(i,e,t),rf}function __(i){let e=jt(),t=Nr(),n=hg();Ed(n+1);let r=d_(t,n);if(i.dirty&&Ix(e)===((r.metadata.flags&2)===2)){if(r.matches===null)i.reset([]);else{let s=jI(e,n);i.reset(s,PD),i.notifyOnChanges()}return!0}return!1}function y_(){return VI(jt(),hg())}function xe(i,e=""){let t=jt(),n=Nr(),r=i+fi,s=n.firstCreatePass?Zd(n,r,1,e,null):n.data[r],o=r1(n,t,s,e);t[r]=o,Td()&&t_(n,t,o,s),ka(s,!1)}var r1=(i,e,t,n)=>(Cd(!0),GD(e[mn],n));function s1(i,e,t,n=""){return Vd(i,fg(),t)?e+px(t)+n:ja}function _r(i){return v_("",i),_r}function v_(i,e,t){let n=jt(),r=s1(n,i,e,t);return r!==ja&&o1(n,wd(),r),v_}function o1(i,e,t){let n=Ax(e,i);WD(i[mn],n,t)}function x_(i,e,t,n,r,s,o,a){let c=Vx()+i,l=jt(),u=yI(l,c,t,n,r,s);return Lg(l,c+4,o,a)||u?gI(l,c+6,e(t,n,r,s,o,a)):_I(l,c+6)}var QE=(()=>{class i{applicationErrorHandler=St(Ao);appRef=St(tf);taskService=St(Ua);ngZone=St(Bn);zonelessEnabled=St(al);tracing=St(ml,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Dn;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(qc):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(St(xg,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let t=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(t);return}this.switchToMicrotaskScheduler(),this.taskService.remove(t)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let t=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})})}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let n=this.useMicrotaskScheduler?tM:gg;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>n(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>n(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(qc+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(n){this.applicationErrorHandler(n)}finally{this.taskService.remove(t),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(n){return new(n||i)};static \u0275prov=qt({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function eb(){return[{provide:Na,useExisting:QE},{provide:Bn,useClass:Xc},{provide:al,useValue:!0}]}function a1(){return typeof $localize<"u"&&$localize.locale||gl}var M_=new wt("",{factory:()=>St(M_,{optional:!0,skipSelf:!0})||a1()});var E_=new wt(""),g1=new wt("");function yl(i){return!i.moduleRef}function _1(i){let e=yl(i)?i.r3Injector:i.moduleRef.injector,t=e.get(Bn);return t.run(()=>{yl(i)?i.r3Injector.resolveInjectorInitializers():i.moduleRef.resolveInjectorInitializers();let n=e.get(Ao),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:n})}),yl(i)){let s=()=>e.destroy(),o=i.platformInjector.get(E_);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>i.moduleRef.destroy(),o=i.platformInjector.get(E_);o.add(s),i.moduleRef.onDestroy(()=>{ll(i.allPlatformModules,i.moduleRef),r.unsubscribe(),o.delete(s)})}return v1(n,t,()=>{let s=e.get(Ua),o=s.add(),a=e.get(p_);return a.runInitializers(),a.donePromise.then(()=>{let c=e.get(M_,gl);if(KE(c||gl),!e.get(g1,!0))return yl(i)?e.get(tf):(i.allPlatformModules.push(i.moduleRef),i.moduleRef);if(yl(i)){let u=e.get(tf);return i.rootComponent!==void 0&&u.bootstrap(i.rootComponent),u}else return y1?.(i.moduleRef,i.allPlatformModules),i.moduleRef}).finally(()=>{s.remove(o)})})})}var y1;function v1(i,e,t){try{let n=t();return h_(n)?n.catch(r=>{throw e.runOutsideAngular(()=>i(r)),r}):n}catch(n){throw e.runOutsideAngular(()=>i(n)),n}}var sf=null;function x1(i=[],e){return yo.create({name:e,providers:[{provide:Jc,useValue:"platform"},{provide:E_,useValue:new Set([()=>sf=null])},...i]})}function M1(i=[]){if(sf)return sf;let e=x1(i);return sf=e,YE(),E1(e),e}function E1(i){let e=i.get($d,null);hd(i,()=>{e?.forEach(t=>t())})}var b1=1e4;var _j=b1-1e3;var b_=class{supports(e){return u_(e)}create(e){return new S_(e)}},S1=(i,e)=>e,S_=class{length=0;collection;_linkedRecords=null;_unlinkedRecords=null;_previousItHead=null;_itHead=null;_itTail=null;_additionsHead=null;_additionsTail=null;_movesHead=null;_movesTail=null;_removalsHead=null;_removalsTail=null;_identityChangesHead=null;_identityChangesTail=null;_trackByFn;constructor(e){this._trackByFn=e||S1}forEachItem(e){let t;for(t=this._itHead;t!==null;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,n=this._removalsHead,r=0,s=null;for(;t||n;){let o=!n||t&&t.currentIndex<tb(n,r,s)?t:n,a=tb(o,r,s),c=o.currentIndex;if(o===n)r--,n=n._nextRemoved;else if(t=t._next,o.previousIndex==null)r++;else{s||(s=[]);let l=a-r,u=c-r;if(l!=u){for(let h=0;h<l;h++){let f=h<s.length?s[h]:s[h]=0,_=f+h;u<=_&&_<l&&(s[h]=f+1)}let d=o.previousIndex;s[d]=u-l}}a!==c&&e(o,a,c)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;t!==null;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;t!==null;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;t!==null;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;t!==null;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;t!==null;t=t._nextIdentityChange)e(t)}diff(e){if(e==null&&(e=[]),!u_(e))throw new _t(900,!1);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._itHead,n=!1,r,s,o;if(Array.isArray(e)){this.length=e.length;for(let a=0;a<this.length;a++)s=e[a],o=this._trackByFn(a,s),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,s,o,a),n=!0):(n&&(t=this._verifyReinsertion(t,s,o,a)),Object.is(t.item,s)||this._addIdentityChange(t,s)),t=t._next}else r=0,LE(e,a=>{o=this._trackByFn(r,a),t===null||!Object.is(t.trackById,o)?(t=this._mismatch(t,a,o,r),n=!0):(n&&(t=this._verifyReinsertion(t,a,o,r)),Object.is(t.item,a)||this._addIdentityChange(t,a)),t=t._next,r++}),this.length=r;return this._truncate(t),this.collection=e,this.isDirty}get isDirty(){return this._additionsHead!==null||this._movesHead!==null||this._removalsHead!==null||this._identityChangesHead!==null}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;e!==null;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;e!==null;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;e!==null;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,n,r){let s;return e===null?s=this._itTail:(s=e._prev,this._remove(e)),e=this._unlinkedRecords===null?null:this._unlinkedRecords.get(n,null),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,s,r)):(e=this._linkedRecords===null?null:this._linkedRecords.get(n,r),e!==null?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,s,r)):e=this._addAfter(new w_(t,n),s,r)),e}_verifyReinsertion(e,t,n,r){let s=this._unlinkedRecords===null?null:this._unlinkedRecords.get(n,null);return s!==null?e=this._reinsertAfter(s,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;e!==null;){let t=e._next;this._addToRemovals(this._unlink(e)),e=t}this._unlinkedRecords!==null&&this._unlinkedRecords.clear(),this._additionsTail!==null&&(this._additionsTail._nextAdded=null),this._movesTail!==null&&(this._movesTail._nextMoved=null),this._itTail!==null&&(this._itTail._next=null),this._removalsTail!==null&&(this._removalsTail._nextRemoved=null),this._identityChangesTail!==null&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,n){this._unlinkedRecords!==null&&this._unlinkedRecords.remove(e);let r=e._prevRemoved,s=e._nextRemoved;return r===null?this._removalsHead=s:r._nextRemoved=s,s===null?this._removalsTail=r:s._prevRemoved=r,this._insertAfter(e,t,n),this._addToMoves(e,n),e}_moveAfter(e,t,n){return this._unlink(e),this._insertAfter(e,t,n),this._addToMoves(e,n),e}_addAfter(e,t,n){return this._insertAfter(e,t,n),this._additionsTail===null?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,n){let r=t===null?this._itHead:t._next;return e._next=r,e._prev=t,r===null?this._itTail=e:r._prev=e,t===null?this._itHead=e:t._next=e,this._linkedRecords===null&&(this._linkedRecords=new of),this._linkedRecords.put(e),e.currentIndex=n,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){this._linkedRecords!==null&&this._linkedRecords.remove(e);let t=e._prev,n=e._next;return t===null?this._itHead=n:t._next=n,n===null?this._itTail=t:n._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(this._movesTail===null?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return this._unlinkedRecords===null&&(this._unlinkedRecords=new of),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,this._removalsTail===null?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,this._identityChangesTail===null?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}},w_=class{item;trackById;currentIndex=null;previousIndex=null;_nextPrevious=null;_prev=null;_next=null;_prevDup=null;_nextDup=null;_prevRemoved=null;_nextRemoved=null;_nextAdded=null;_nextMoved=null;_nextIdentityChange=null;constructor(e,t){this.item=e,this.trackById=t}},T_=class{_head=null;_tail=null;add(e){this._head===null?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let n;for(n=this._head;n!==null;n=n._nextDup)if((t===null||t<=n.currentIndex)&&Object.is(n.trackById,e))return n;return null}remove(e){let t=e._prevDup,n=e._nextDup;return t===null?this._head=n:t._nextDup=n,n===null?this._tail=t:n._prevDup=t,this._head===null}},of=class{map=new Map;put(e){let t=e.trackById,n=this.map.get(t);n||(n=new T_,this.map.set(t,n)),n.add(e)}get(e,t){let n=e,r=this.map.get(n);return r?r.get(e,t):null}remove(e){let t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return this.map.size===0}clear(){this.map.clear()}};function tb(i,e,t){let n=i.previousIndex;if(n===null)return n;let r=0;return t&&n<t.length&&(r=t[n]),n+e+r}function nb(){return new C_([new b_])}var C_=(()=>{class i{factories;static \u0275prov=qt({token:i,providedIn:"root",factory:nb});constructor(t){this.factories=t}static create(t,n){if(n!=null){let r=n.factories.slice();t=t.concat(r)}return new i(t)}static extend(t){return{provide:i,useFactory:()=>{let n=St(i,{optional:!0,skipSelf:!0});return i.create(t,n||nb())}}}find(t){let n=this.factories.find(r=>r.supports(t));if(n!=null)return n;throw new _t(901,!1)}}return i})();function ib(i){let{rootComponent:e,appProviders:t,platformProviders:n,platformRef:r}=i;Ft(Ct.BootstrapApplicationStart);try{let s=r?.injector??M1(n),o=[eb(),iM,...t||[]],a=new hl({providers:o,parent:s,debugName:"",runEnvironmentInitializers:!1});return _1({r3Injector:a.injector,platformInjector:s,rootComponent:e})}catch(s){return Promise.reject(s)}finally{Ft(Ct.BootstrapApplicationEnd)}}var rb=null;function xl(){return rb}function D_(i){rb??=i}var vl=class{};var A_=/\s+/,sb=[],I_=(()=>{class i{_ngEl;_renderer;initialClasses=sb;rawClass;stateMap=new Map;constructor(t,n){this._ngEl=t,this._renderer=n}set klass(t){this.initialClasses=t!=null?t.trim().split(A_):sb}set ngClass(t){this.rawClass=typeof t=="string"?t.trim().split(A_):t}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let t=this.rawClass;if(Array.isArray(t)||t instanceof Set)for(let n of t)this._updateState(n,!0);else if(t!=null)for(let n of Object.keys(t))this._updateState(n,!!t[n]);this._applyStateDiff()}_updateState(t,n){let r=this.stateMap.get(t);r!==void 0?(r.enabled!==n&&(r.changed=!0,r.enabled=n),r.touched=!0):this.stateMap.set(t,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let t of this.stateMap){let n=t[0],r=t[1];r.changed?(this._toggleClass(n,r.enabled),r.changed=!1):r.touched||(r.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),r.touched=!1}}_toggleClass(t,n){t=t.trim(),t.length>0&&t.split(A_).forEach(r=>{n?this._renderer.addClass(this._ngEl.nativeElement,r):this._renderer.removeClass(this._ngEl.nativeElement,r)})}static \u0275fac=function(n){return new(n||i)(mr(Po),mr(l_))};static \u0275dir=ef({type:i,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return i})();var af=class{$implicit;ngForOf;index;count;constructor(e,t,n,r){this.$implicit=e,this.ngForOf=t,this.index=n,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},qa=(()=>{class i{_viewContainer;_template;_differs;set ngForOf(t){this._ngForOf=t,this._ngForOfDirty=!0}set ngForTrackBy(t){this._trackByFn=t}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(t,n,r){this._viewContainer=t,this._template=n,this._differs=r}set ngForTemplate(t){t&&(this._template=t)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let t=this._ngForOf;!this._differ&&t&&(this._differ=this._differs.find(t).create(this.ngForTrackBy))}if(this._differ){let t=this._differ.diff(this._ngForOf);t&&this._applyChanges(t)}}_applyChanges(t){let n=this._viewContainer;t.forEachOperation((r,s,o)=>{if(r.previousIndex==null)n.createEmbeddedView(this._template,new af(r.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)n.remove(s===null?void 0:s);else if(s!==null){let a=n.get(s);n.move(a,o),ob(a,r)}});for(let r=0,s=n.length;r<s;r++){let a=n.get(r).context;a.index=r,a.count=s,a.ngForOf=this._ngForOf}t.forEachIdentityChange(r=>{let s=n.get(r.currentIndex);ob(s,r)})}static ngTemplateContextGuard(t,n){return!0}static \u0275fac=function(n){return new(n||i)(mr($a),mr(Ro),mr(C_))};static \u0275dir=ef({type:i,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return i})();function ob(i,e){i.context.$implicit=e.item}var Xa=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Qd({type:i});static \u0275inj=Yc({})}return i})();function R_(i,e){e=encodeURIComponent(e);for(let t of i.split(";")){let n=t.indexOf("="),[r,s]=n==-1?[t,""]:[t.slice(0,n),t.slice(n+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var Ml=class{};var ab="browser";var El=class{_doc;constructor(e){this._doc=e}manager},cf=(()=>{class i extends El{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,r,s){return t.addEventListener(n,r,s),()=>this.removeEventListener(t,n,r,s)}removeEventListener(t,n,r,s){return t.removeEventListener(n,r,s)}static \u0275fac=function(n){return new(n||i)(Tt(Zi))};static \u0275prov=qt({token:i,factory:i.\u0275fac})}return i})(),df=new wt(""),L_=(()=>{class i{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,n){this._zone=n,t.forEach(o=>{o.manager=this});let r=t.filter(o=>!(o instanceof cf));this._plugins=r.slice().reverse();let s=t.find(o=>o instanceof cf);s&&this._plugins.push(s)}addEventListener(t,n,r,s){return this._findPluginFor(n).addEventListener(t,n,r,s)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(s=>s.supports(t)),!n)throw new _t(5101,!1);return this._eventNameToPlugin.set(t,n),n}static \u0275fac=function(n){return new(n||i)(Tt(df),Tt(Bn))};static \u0275prov=qt({token:i,factory:i.\u0275fac})}return i})(),N_="ng-app-id";function lb(i){for(let e of i)e.remove()}function ub(i,e){let t=e.createElement("style");return t.textContent=i,t}function w1(i,e,t,n){let r=i.head?.querySelectorAll(`style[${N_}="${e}"],link[${N_}="${e}"]`);if(r)for(let s of r)s.removeAttribute(N_),s instanceof HTMLLinkElement?n.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function O_(i,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",i),t}var F_=(()=>{class i{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,n,r,s={}){this.doc=t,this.appId=n,this.nonce=r,w1(t,n,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,n){for(let r of t)this.addUsage(r,this.inline,ub);n?.forEach(r=>this.addUsage(r,this.external,O_))}removeStyles(t,n){for(let r of t)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,n,r){let s=n.get(t);s?s.usage++:n.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,n){let r=n.get(t);r&&(r.usage--,r.usage<=0&&(lb(r.elements),n.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])lb(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(t,ub(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(t,O_(n,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,n){return this.nonce&&n.setAttribute("nonce",this.nonce),t.appendChild(n)}static \u0275fac=function(n){return new(n||i)(Tt(Zi),Tt(jd),Tt(qd,8),Tt(pl))};static \u0275prov=qt({token:i,factory:i.\u0275fac})}return i})(),P_={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},k_=/%COMP%/g;var fb="%COMP%",T1=`_nghost-${fb}`,C1=`_ngcontent-${fb}`,D1=!0,A1=new wt("",{factory:()=>D1});function I1(i){return C1.replace(k_,i)}function R1(i){return T1.replace(k_,i)}function hb(i,e){return e.map(t=>t.replace(k_,i))}var U_=(()=>{class i{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(t,n,r,s,o,a,c=null,l=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.ngZone=a,this.nonce=c,this.tracingService=l,this.defaultRenderer=new bl(t,o,a,this.tracingService)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;let r=this.getOrCreateRenderer(t,n);return r instanceof uf?r.applyToHost(t):r instanceof Sl&&r.applyStyles(),r}getOrCreateRenderer(t,n){let r=this.rendererByCompId,s=r.get(n.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.tracingService;switch(n.encapsulation){case pr.Emulated:s=new uf(c,l,n,this.appId,u,o,a,d);break;case pr.ShadowDom:return new lf(c,t,n,o,a,this.nonce,d,l);case pr.ExperimentalIsolatedShadowDom:return new lf(c,t,n,o,a,this.nonce,d);default:s=new Sl(c,l,n,u,o,a,d);break}r.set(n.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(n){return new(n||i)(Tt(L_),Tt(F_),Tt(jd),Tt(A1),Tt(Zi),Tt(Bn),Tt(qd),Tt(ml,8))};static \u0275prov=qt({token:i,factory:i.\u0275fac})}return i})(),bl=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,n,r){this.eventManager=e,this.doc=t,this.ngZone=n,this.tracingService=r}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(P_[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(db(e)?e.content:e).appendChild(t)}insertBefore(e,t,n){e&&(db(e)?e.content:e).insertBefore(t,n)}removeChild(e,t){t.remove()}selectRootElement(e,t){let n=typeof e=="string"?this.doc.querySelector(e):e;if(!n)throw new _t(-5104,!1);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,r){if(r){t=r+":"+t;let s=P_[r];s?e.setAttributeNS(s,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){let r=P_[n];r?e.removeAttributeNS(r,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,r){r&(Oo.DashCase|Oo.Important)?e.style.setProperty(t,n,r&Oo.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&Oo.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e!=null&&(e[t]=n)}setValue(e,t){e.nodeValue=t}listen(e,t,n,r){if(typeof e=="string"&&(e=xl().getGlobalEventTarget(this.doc,e),!e))throw new _t(5102,!1);let s=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;e(t)===!1&&t.preventDefault()}}};function db(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var lf=class extends bl{hostEl;sharedStylesHost;shadowRoot;constructor(e,t,n,r,s,o,a,c){super(e,r,s,a),this.hostEl=t,this.sharedStylesHost=c,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=n.styles;l=hb(n.id,l);for(let d of l){let h=document.createElement("style");o&&h.setAttribute("nonce",o),h.textContent=d,this.shadowRoot.appendChild(h)}let u=n.getExternalStyles?.();if(u)for(let d of u){let h=O_(d,r);o&&h.setAttribute("nonce",o),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},Sl=class extends bl{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,n,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let l=n.styles;this.styles=c?hb(c,l):l,this.styleUrls=n.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&za.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},uf=class extends Sl{contentAttr;hostAttr;constructor(e,t,n,r,s,o,a,c){let l=r+"-"+n.id;super(e,t,n,s,o,a,c,l),this.contentAttr=I1(l),this.hostAttr=R1(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}};var ff=class i extends vl{supportsDOMEvents=!0;static makeCurrent(){D_(new i)}onAndCancel(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=N1();return t==null?null:P1(t)}resetBaseElement(){wl=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return R_(document.cookie,e)}},wl=null;function N1(){return wl=wl||document.head.querySelector("base"),wl?wl.getAttribute("href"):null}function P1(i){return new URL(i,document.baseURI).pathname}var O1=(()=>{class i{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||i)};static \u0275prov=qt({token:i,factory:i.\u0275fac})}return i})(),pb=["alt","control","meta","shift"],L1={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},F1={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},mb=(()=>{class i extends El{constructor(t){super(t)}supports(t){return i.parseEventName(t)!=null}addEventListener(t,n,r,s){let o=i.parseEventName(n),a=i.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>xl().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let n=t.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let s=i._normalizeKey(n.pop()),o="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),o="code."),pb.forEach(l=>{let u=n.indexOf(l);u>-1&&(n.splice(u,1),o+=l+".")}),o+=s,n.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(t,n){let r=L1[t.key]||t.key,s="";return n.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),pb.forEach(o=>{if(o!==r){let a=F1[o];a(t)&&(s+=o+".")}}),s+=r,s===n)}static eventCallback(t,n,r){return s=>{i.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>n(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(n){return new(n||i)(Tt(Zi))};static \u0275prov=qt({token:i,factory:i.\u0275fac})}return i})();async function B_(i,e,t){let n=Jn({rootComponent:i},k1(e,t));return ib(n)}function k1(i,e){return{platformRef:e?.platformRef,appProviders:[...z1,...i?.providers??[]],platformProviders:H1}}function U1(){ff.makeCurrent()}function B1(){return new Jr}function V1(){return $g(document),document}var H1=[{provide:pl,useValue:ab},{provide:$d,useValue:U1,multi:!0},{provide:Zi,useFactory:V1}];var z1=[{provide:Jc,useValue:"root"},{provide:Jr,useFactory:B1},{provide:df,useClass:cf,multi:!0},{provide:df,useClass:mb,multi:!0},U_,F_,L_,{provide:No,useExisting:U_},{provide:Ml,useClass:O1},[]];var gb={providers:[vg()]};var Fb=0,vy=1,kb=2;var Kl=1,Ub=2,gc=3,as=0,ei=1,Qi=2,kr=0,zo=1,xy=2,My=3,Ey=4,Bb=5,Us=100,Vb=101,Hb=102,zb=103,Gb=104,Wb=200,jb=201,$b=202,qb=203,Nf=204,Pf=205,Xb=206,Yb=207,Zb=208,Jb=209,Kb=210,Qb=211,eS=212,tS=213,nS=214,rh=0,sh=1,oh=2,Go=3,ah=4,ch=5,lh=6,uh=7,by=0,iS=1,rS=2,br=0,Sy=1,wy=2,Ty=3,Cy=4,Dy=5,Ay=6,Iy=7;var uy=300,Ws=301,Xo=302,dh=303,fh=304,Ql=306,Of=1e3,Lr=1001,Lf=1002,wn=1003,sS=1004;var eu=1005;var Nn=1006,hh=1007;var js=1008;var mi=1009,Ry=1010,Ny=1011,_c=1012,ph=1013,Sr=1014,wr=1015,Ur=1016,mh=1017,gh=1018,yc=1020,Py=35902,Oy=35899,Ly=1021,Fy=1022,er=1023,Fr=1026,$s=1027,ky=1028,_h=1029,Yo=1030,yh=1031;var vh=1033,tu=33776,nu=33777,iu=33778,ru=33779,xh=35840,Mh=35841,Eh=35842,bh=35843,Sh=36196,wh=37492,Th=37496,Ch=37488,Dh=37489,Ah=37490,Ih=37491,Rh=37808,Nh=37809,Ph=37810,Oh=37811,Lh=37812,Fh=37813,kh=37814,Uh=37815,Bh=37816,Vh=37817,Hh=37818,zh=37819,Gh=37820,Wh=37821,jh=36492,$h=36494,qh=36495,Xh=36283,Yh=36284,Zh=36285,Jh=36286;var Rl=2300,Ff=2301,Rf=2302,dy=2400,fy=2401,hy=2402;var oS=3200;var Uy=0,aS=1,us="",Ai="srgb",Wo="srgb-linear",Nl="linear",At="srgb";var Vo=7680;var py=519,cS=512,lS=513,uS=514,Kh=515,dS=516,fS=517,Qh=518,hS=519,my=35044;var By="300 es",Er=2e3,Pl=2001;function Vy(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function G1(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ol(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pS(){let i=Ol("canvas");return i.style.display="block",i}var _b={},cc=null;function Hy(...i){let e="THREE."+i.shift();cc?cc("log",e,...i):console.log(e,...i)}function qe(...i){let e="THREE."+i.shift();cc?cc("warn",e,...i):console.warn(e,...i)}function je(...i){let e="THREE."+i.shift();cc?cc("error",e,...i):console.error(e,...i)}function lc(...i){let e=i.join(" ");e in _b||(_b[e]=!0,qe(...i))}function mS(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var cs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var V_=Math.PI/180,kf=180/Math.PI;function su(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Hn[i&255]+Hn[i>>8&255]+Hn[i>>16&255]+Hn[i>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[t&63|128]+Hn[t>>8&255]+"-"+Hn[t>>16&255]+Hn[t>>24&255]+Hn[n&255]+Hn[n>>8&255]+Hn[n>>16&255]+Hn[n>>24&255]).toLowerCase()}function mt(i,e,t){return Math.max(e,Math.min(t,i))}function W1(i,e){return(i%e+e)%e}function H_(i,e,t){return(1-t)*i+t*e}function Tl(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var gt=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ls=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3],h=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(a<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a>=1){e[t+0]=h,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(d!==g||c!==h||l!==f||u!==_){let m=c*h+l*f+u*_+d*g;m<0&&(h=-h,f=-f,_=-_,g=-g,m=-m);let p=1-a;if(m<.9995){let x=Math.acos(m),b=Math.sin(x);p=Math.sin(p*x)/b,a=Math.sin(a*x)/b,c=c*p+h*a,l=l*p+f*a,u=u*p+_*a,d=d*p+g*a}else{c=c*p+h*a,l=l*p+f*a,u=u*p+_*a,d=d*p+g*a;let x=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=x,l*=x,u*=x,d*=x}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=s[o],h=s[o+1],f=s[o+2],_=s[o+3];return e[t]=a*_+u*d+c*f-l*h,e[t+1]=c*_+u*h+l*d-a*f,e[t+2]=l*_+u*f+a*h-c*d,e[t+3]=u*_-a*d-c*h-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),d=a(s/2),h=c(n/2),f=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*f*_,this._y=l*f*d-h*u*_,this._z=l*u*_+h*f*d,this._w=l*u*d-h*f*_;break;case"YXZ":this._x=h*u*d+l*f*_,this._y=l*f*d-h*u*_,this._z=l*u*_-h*f*d,this._w=l*u*d+h*f*_;break;case"ZXY":this._x=h*u*d-l*f*_,this._y=l*f*d+h*u*_,this._z=l*u*_+h*f*d,this._w=l*u*d-h*f*_;break;case"ZYX":this._x=h*u*d-l*f*_,this._y=l*f*d+h*u*_,this._z=l*u*_-h*f*d,this._w=l*u*d+h*f*_;break;case"YZX":this._x=h*u*d+l*f*_,this._y=l*f*d+h*u*_,this._z=l*u*_-h*f*d,this._w=l*u*d-h*f*_;break;case"XZY":this._x=h*u*d-l*f*_,this._y=l*f*d-h*u*_,this._z=l*u*_+h*f*d,this._w=l*u*d+h*f*_;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=n+a+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(o-r)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-l)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yb.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yb.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),u=2*(a*t-s*r),d=2*(s*n-o*t);return this.x=t+c*l+o*d-a*u,this.y=n+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return z_.copy(this).projectOnVector(e),this.sub(z_)}reflect(e){return this.sub(z_.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(mt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},z_=new V,yb=new ls,tt=class i{constructor(e,t,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],_=n[8],g=r[0],m=r[3],p=r[6],x=r[1],b=r[4],M=r[7],S=r[2],C=r[5],T=r[8];return s[0]=o*g+a*x+c*S,s[3]=o*m+a*b+c*C,s[6]=o*p+a*M+c*T,s[1]=l*g+u*x+d*S,s[4]=l*m+u*b+d*C,s[7]=l*p+u*M+d*T,s[2]=h*g+f*x+_*S,s[5]=h*m+f*b+_*C,s[8]=h*p+f*M+_*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,f=l*s-o*c,_=t*d+n*h+r*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return e[0]=d*g,e[1]=(r*l-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=h*g,e[4]=(u*t-r*c)*g,e[5]=(r*s-a*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(G_.makeScale(e,t)),this}rotate(e){return this.premultiply(G_.makeRotation(-e)),this}translate(e,t){return this.premultiply(G_.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},G_=new tt,vb=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xb=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function j1(){let i={enabled:!0,workingColorSpace:Wo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===At&&(r.r=os(r.r),r.g=os(r.g),r.b=os(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===At&&(r.r=ac(r.r),r.g=ac(r.g),r.b=ac(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===us?Nl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return lc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return lc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wo]:{primaries:e,whitePoint:n,transfer:Nl,toXYZ:vb,fromXYZ:xb,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:e,whitePoint:n,transfer:At,toXYZ:vb,fromXYZ:xb,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),i}var xt=j1();function os(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ac(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ya,Uf=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ya===void 0&&(Ya=Ol("canvas")),Ya.width=e.width,Ya.height=e.height;let r=Ya.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ya}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ol("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=os(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(os(t[n]/255)*255):t[n]=os(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$1=0,uc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=su(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(W_(r[o].image)):s.push(W_(r[o]))}else s=W_(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function W_(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Uf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var q1=0,j_=new V,ds=(()=>{class i extends cs{constructor(t=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=Lr,s=Lr,o=Nn,a=js,c=er,l=mi,u=i.DEFAULT_ANISOTROPY,d=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=su(),this.name="",this.source=new uc(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(j_).x}get height(){return this.source.getSize(j_).y}get depth(){return this.source.getSize(j_).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let r=t[n];if(r===void 0){qe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){qe(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[n]=r}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Of:t.x=t.x-Math.floor(t.x);break;case Lr:t.x=t.x<0?0:1;break;case Lf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Of:t.y=t.y-Math.floor(t.y);break;case Lr:t.y=t.y<0?0:1;break;case Lf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=uy,i.DEFAULT_ANISOTROPY=1,i})(),Yt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],_=c[9],g=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,M=(f+1)/2,S=(p+1)/2,C=(u+h)/4,T=(d+g)/4,A=(_+m)/4;return b>M&&b>S?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=C/n,s=T/n):M>S?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=C/r,s=A/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=T/s,r=A/s),this.set(n,r,s,t),this}let x=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(d-g)/x,this.z=(h-u)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(mt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bf=class extends cs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new ds(r);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new uc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ri=class extends Bf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ll=class extends ds{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vf=class extends ds{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=Lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bs=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vr):vr.fromBufferAttribute(s,o),vr.applyMatrix4(e.matrixWorld),this.expandByPoint(vr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hf.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hf.copy(n.boundingBox)),hf.applyMatrix4(e.matrixWorld),this.union(hf)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vr),vr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cl),pf.subVectors(this.max,Cl),Za.subVectors(e.a,Cl),Ja.subVectors(e.b,Cl),Ka.subVectors(e.c,Cl),Rs.subVectors(Ja,Za),Ns.subVectors(Ka,Ja),Fo.subVectors(Za,Ka);let t=[0,-Rs.z,Rs.y,0,-Ns.z,Ns.y,0,-Fo.z,Fo.y,Rs.z,0,-Rs.x,Ns.z,0,-Ns.x,Fo.z,0,-Fo.x,-Rs.y,Rs.x,0,-Ns.y,Ns.x,0,-Fo.y,Fo.x,0];return!$_(t,Za,Ja,Ka,pf)||(t=[1,0,0,0,1,0,0,0,1],!$_(t,Za,Ja,Ka,pf))?!1:(mf.crossVectors(Rs,Ns),t=[mf.x,mf.y,mf.z],$_(t,Za,Ja,Ka,pf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ts),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ts=[new V,new V,new V,new V,new V,new V,new V,new V],vr=new V,hf=new Bs,Za=new V,Ja=new V,Ka=new V,Rs=new V,Ns=new V,Fo=new V,Cl=new V,pf=new V,mf=new V,ko=new V;function $_(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ko.fromArray(i,s);let a=r.x*Math.abs(ko.x)+r.y*Math.abs(ko.y)+r.z*Math.abs(ko.z),c=e.dot(ko),l=t.dot(ko),u=n.dot(ko);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var X1=new Bs,Dl=new V,q_=new V,dc=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):X1.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dl.subVectors(e,this.center);let t=Dl.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Dl,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(q_.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dl.copy(e.center).add(q_)),this.expandByPoint(Dl.copy(e.center).sub(q_))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ns=new V,X_=new V,gf=new V,Ps=new V,Y_=new V,_f=new V,Z_=new V,Hf=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ns)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ns.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ns.copy(this.origin).addScaledVector(this.direction,t),ns.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){X_.copy(e).add(t).multiplyScalar(.5),gf.copy(t).sub(e).normalize(),Ps.copy(this.origin).sub(X_);let s=e.distanceTo(t)*.5,o=-this.direction.dot(gf),a=Ps.dot(this.direction),c=-Ps.dot(gf),l=Ps.lengthSq(),u=Math.abs(1-o*o),d,h,f,_;if(u>0)if(d=o*c-a,h=o*a-c,_=s*u,d>=0)if(h>=-_)if(h<=_){let g=1/u;d*=g,h*=g,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=_?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(X_).addScaledVector(gf,h),f}intersectSphere(e,t){ns.subVectors(e.center,this.origin);let n=ns.dot(this.direction),r=ns.dot(ns)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ns)!==null}intersectTriangle(e,t,n,r,s){Y_.subVectors(t,e),_f.subVectors(n,e),Z_.crossVectors(Y_,_f);let o=this.direction.dot(Z_),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ps.subVectors(this.origin,e);let c=a*this.direction.dot(_f.crossVectors(Ps,_f));if(c<0)return null;let l=a*this.direction.dot(Y_.cross(Ps));if(l<0||c+l>o)return null;let u=-a*Ps.dot(Z_);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nn=class i{constructor(e,t,n,r,s,o,a,c,l,u,d,h,f,_,g,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,u,d,h,f,_,g,m)}set(e,t,n,r,s,o,a,c,l,u,d,h,f,_,g,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Qa.setFromMatrixColumn(e,0).length(),s=1/Qa.setFromMatrixColumn(e,1).length(),o=1/Qa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,f=o*d,_=a*u,g=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=f+_*l,t[5]=h-g*l,t[9]=-a*c,t[2]=g-h*l,t[6]=_+f*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,f=c*d,_=l*u,g=l*d;t[0]=h+g*a,t[4]=_*a-f,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=f*a-_,t[6]=g+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,f=c*d,_=l*u,g=l*d;t[0]=h-g*a,t[4]=-o*d,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,f=o*d,_=a*u,g=a*d;t[0]=c*u,t[4]=_*l-f,t[8]=h*l+g,t[1]=c*d,t[5]=g*l+h,t[9]=f*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,f=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=g-h*d,t[8]=_*d+f,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*d+_,t[10]=h-g*d}else if(e.order==="XZY"){let h=o*c,f=o*l,_=a*c,g=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+g,t[5]=o*u,t[9]=f*d-_,t[2]=_*d-f,t[6]=a*u,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y1,e,Z1)}lookAt(e,t,n){let r=this.elements;return Ci.subVectors(e,t),Ci.lengthSq()===0&&(Ci.z=1),Ci.normalize(),Os.crossVectors(n,Ci),Os.lengthSq()===0&&(Math.abs(n.z)===1?Ci.x+=1e-4:Ci.z+=1e-4,Ci.normalize(),Os.crossVectors(n,Ci)),Os.normalize(),yf.crossVectors(Ci,Os),r[0]=Os.x,r[4]=yf.x,r[8]=Ci.x,r[1]=Os.y,r[5]=yf.y,r[9]=Ci.y,r[2]=Os.z,r[6]=yf.z,r[10]=Ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],x=n[3],b=n[7],M=n[11],S=n[15],C=r[0],T=r[4],A=r[8],y=r[12],E=r[1],R=r[5],O=r[9],U=r[13],W=r[2],G=r[6],H=r[10],k=r[14],X=r[3],ie=r[7],I=r[11],re=r[15];return s[0]=o*C+a*E+c*W+l*X,s[4]=o*T+a*R+c*G+l*ie,s[8]=o*A+a*O+c*H+l*I,s[12]=o*y+a*U+c*k+l*re,s[1]=u*C+d*E+h*W+f*X,s[5]=u*T+d*R+h*G+f*ie,s[9]=u*A+d*O+h*H+f*I,s[13]=u*y+d*U+h*k+f*re,s[2]=_*C+g*E+m*W+p*X,s[6]=_*T+g*R+m*G+p*ie,s[10]=_*A+g*O+m*H+p*I,s[14]=_*y+g*U+m*k+p*re,s[3]=x*C+b*E+M*W+S*X,s[7]=x*T+b*R+M*G+S*ie,s[11]=x*A+b*O+M*H+S*I,s[15]=x*y+b*U+M*k+S*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15],x=c*f-l*h,b=a*f-l*d,M=a*h-c*d,S=o*f-l*u,C=o*h-c*u,T=o*d-a*u;return t*(g*x-m*b+p*M)-n*(_*x-m*S+p*C)+r*(_*b-g*S+p*T)-s*(_*M-g*C+m*T)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],x=d*m*l-g*h*l+g*c*f-a*m*f-d*c*p+a*h*p,b=_*h*l-u*m*l-_*c*f+o*m*f+u*c*p-o*h*p,M=u*g*l-_*d*l+_*a*f-o*g*f-u*a*p+o*d*p,S=_*d*c-u*g*c-_*a*h+o*g*h+u*a*m-o*d*m,C=t*x+n*b+r*M+s*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/C;return e[0]=x*T,e[1]=(g*h*s-d*m*s-g*r*f+n*m*f+d*r*p-n*h*p)*T,e[2]=(a*m*s-g*c*s+g*r*l-n*m*l-a*r*p+n*c*p)*T,e[3]=(d*c*s-a*h*s-d*r*l+n*h*l+a*r*f-n*c*f)*T,e[4]=b*T,e[5]=(u*m*s-_*h*s+_*r*f-t*m*f-u*r*p+t*h*p)*T,e[6]=(_*c*s-o*m*s-_*r*l+t*m*l+o*r*p-t*c*p)*T,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*f+t*c*f)*T,e[8]=M*T,e[9]=(_*d*s-u*g*s-_*n*f+t*g*f+u*n*p-t*d*p)*T,e[10]=(o*g*s-_*a*s+_*n*l-t*g*l-o*n*p+t*a*p)*T,e[11]=(u*a*s-o*d*s-u*n*l+t*d*l+o*n*f-t*a*f)*T,e[12]=S*T,e[13]=(u*g*r-_*d*r+_*n*h-t*g*h-u*n*m+t*d*m)*T,e[14]=(_*a*r-o*g*r-_*n*c+t*g*c+o*n*m-t*a*m)*T,e[15]=(o*d*r-u*a*r+u*n*c-t*d*c-o*n*h+t*a*h)*T,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,f=s*u,_=s*d,g=o*u,m=o*d,p=a*d,x=c*l,b=c*u,M=c*d,S=n.x,C=n.y,T=n.z;return r[0]=(1-(g+p))*S,r[1]=(f+M)*S,r[2]=(_-b)*S,r[3]=0,r[4]=(f-M)*C,r[5]=(1-(h+p))*C,r[6]=(m+x)*C,r[7]=0,r[8]=(_+b)*T,r[9]=(m-x)*T,r[10]=(1-(h+g))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=Qa.set(r[0],r[1],r[2]).length(),o=Qa.set(r[4],r[5],r[6]).length(),a=Qa.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),xr.copy(this);let l=1/s,u=1/o,d=1/a;return xr.elements[0]*=l,xr.elements[1]*=l,xr.elements[2]*=l,xr.elements[4]*=u,xr.elements[5]*=u,xr.elements[6]*=u,xr.elements[8]*=d,xr.elements[9]*=d,xr.elements[10]*=d,t.setFromRotationMatrix(xr),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Er,c=!1){let l=this.elements,u=2*s/(t-e),d=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r),_,g;if(c)_=s/(o-s),g=o*s/(o-s);else if(a===Er)_=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Pl)_=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Er,c=!1){let l=this.elements,u=2/(t-e),d=2/(n-r),h=-(t+e)/(t-e),f=-(n+r)/(n-r),_,g;if(c)_=1/(o-s),g=o/(o-s);else if(a===Er)_=-2/(o-s),g=-(o+s)/(o-s);else if(a===Pl)_=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=_,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Qa=new V,xr=new nn,Y1=new V(0,0,0),Z1=new V(1,1,1),Os=new V,yf=new V,Ci=new V,Mb=new nn,Eb=new ls,Ni=(()=>{class i{constructor(t=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],h=s[2],f=s[6],_=s[10];switch(n){case"XYZ":this._y=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,_),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,_),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,_),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,_));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,_),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return Mb.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mb,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Eb.setFromEuler(this),this.setFromQuaternion(Eb,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),Fl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},J1=0,bb=new V,ec=new ls,is=new nn,vf=new V,Al=new V,K1=new V,Q1=new ls,Sb=new V(1,0,0),wb=new V(0,1,0),Tb=new V(0,0,1),Cb={type:"added"},eR={type:"removed"},tc={type:"childadded",child:null},J_={type:"childremoved",child:null},qs=(()=>{class i extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J1++}),this.uuid=su(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new V,n=new Ni,r=new ls,s=new V(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nn},normalMatrix:{value:new tt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return ec.setFromAxisAngle(t,n),this.quaternion.multiply(ec),this}rotateOnWorldAxis(t,n){return ec.setFromAxisAngle(t,n),this.quaternion.premultiply(ec),this}rotateX(t){return this.rotateOnAxis(Sb,t)}rotateY(t){return this.rotateOnAxis(wb,t)}rotateZ(t){return this.rotateOnAxis(Tb,t)}translateOnAxis(t,n){return bb.copy(t).applyQuaternion(this.quaternion),this.position.add(bb.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Sb,t)}translateY(t){return this.translateOnAxis(wb,t)}translateZ(t){return this.translateOnAxis(Tb,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(is.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?vf.copy(t):vf.set(t,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Al.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?is.lookAt(Al,vf,this.up):is.lookAt(vf,Al,this.up),this.quaternion.setFromRotationMatrix(is),s&&(is.extractRotation(s.matrixWorld),ec.setFromRotationMatrix(is),this.quaternion.premultiply(ec.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(je("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cb),tc.child=t,this.dispatchEvent(tc),tc.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(eR),J_.child=t,this.dispatchEvent(J_),J_.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),is.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),is.multiply(t.parent.matrixWorld)),t.applyMatrix4(is),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cb),tc.child=t,this.dispatchEvent(tc),tc.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,t,K1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Al,Q1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>Wi(Jn({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>Jn({},c)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let h=l[u];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(n){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),h=a(t.shapes),f=a(t.skeletons),_=a(t.animations),g=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),h.length>0&&(r.shapes=h),f.length>0&&(r.skeletons=f),_.length>0&&(r.animations=_),g.length>0&&(r.nodes=g)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new V(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),Mr=new V,rs=new V,K_=new V,ss=new V,nc=new V,ic=new V,Db=new V,Q_=new V,ey=new V,ty=new V,ny=new Yt,iy=new Yt,ry=new Yt,ks=class i{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Mr.subVectors(e,t),r.cross(Mr);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Mr.subVectors(r,t),rs.subVectors(n,t),K_.subVectors(e,t);let o=Mr.dot(Mr),a=Mr.dot(rs),c=Mr.dot(K_),l=rs.dot(rs),u=rs.dot(K_),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,f=(l*c-a*u)*h,_=(o*u-a*c)*h;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ss)===null?!1:ss.x>=0&&ss.y>=0&&ss.x+ss.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,ss)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ss.x),c.addScaledVector(o,ss.y),c.addScaledVector(a,ss.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return ny.setScalar(0),iy.setScalar(0),ry.setScalar(0),ny.fromBufferAttribute(e,t),iy.fromBufferAttribute(e,n),ry.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ny,s.x),o.addScaledVector(iy,s.y),o.addScaledVector(ry,s.z),o}static isFrontFacing(e,t,n,r){return Mr.subVectors(n,t),rs.subVectors(e,t),Mr.cross(rs).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mr.subVectors(this.c,this.b),rs.subVectors(this.a,this.b),Mr.cross(rs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;nc.subVectors(r,n),ic.subVectors(s,n),Q_.subVectors(e,n);let c=nc.dot(Q_),l=ic.dot(Q_);if(c<=0&&l<=0)return t.copy(n);ey.subVectors(e,r);let u=nc.dot(ey),d=ic.dot(ey);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(nc,o);ty.subVectors(e,s);let f=nc.dot(ty),_=ic.dot(ty);if(_>=0&&f<=_)return t.copy(s);let g=f*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(ic,a);let m=u*_-f*d;if(m<=0&&d-u>=0&&f-_>=0)return Db.subVectors(s,r),a=(d-u)/(d-u+(f-_)),t.copy(r).addScaledVector(Db,a);let p=1/(m+g+h);return o=g*p,a=h*p,t.copy(n).addScaledVector(nc,o).addScaledVector(ic,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ls={h:0,s:0,l:0},xf={h:0,s:0,l:0};function sy(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ht=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=xt.workingColorSpace){if(e=W1(e,1),t=mt(t,0,1),n=mt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=sy(o,s,e+1/3),this.g=sy(o,s,e),this.b=sy(o,s,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ai){function n(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ai){let n=gS[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}copyLinearToSRGB(e){return this.r=ac(e.r),this.g=ac(e.g),this.b=ac(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ai){return xt.workingToColorSpace(zn.copy(this),e),Math.round(mt(zn.r*255,0,255))*65536+Math.round(mt(zn.g*255,0,255))*256+Math.round(mt(zn.b*255,0,255))}getHexString(e=Ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(zn.copy(this),t);let n=zn.r,r=zn.g,s=zn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(zn.copy(this),t),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Ai){xt.workingToColorSpace(zn.copy(this),e);let t=zn.r,n=zn.g,r=zn.b;return e!==Ai?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ls),this.setHSL(Ls.h+e,Ls.s+t,Ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ls),e.getHSL(xf);let n=H_(Ls.h,xf.h,t),r=H_(Ls.s,xf.s,t),s=H_(Ls.l,xf.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zn=new ht;ht.NAMES=gS;var tR=0,Vs=class extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tR++}),this.uuid=su(),this.name="",this.type="Material",this.blending=zo,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nf,this.blendDst=Pf,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=py,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vo,this.stencilZFail=Vo,this.stencilZPass=Vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zo&&(n.blending=this.blending),this.side!==as&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nf&&(n.blendSrc=this.blendSrc),this.blendDst!==Pf&&(n.blendDst=this.blendDst),this.blendEquation!==Us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Go&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==py&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},jo=class extends Vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=by,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var un=new V,Mf=new gt,nR=0,Ii=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=my,this.updateRanges=[],this.gpuType=wr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mf.fromBufferAttribute(this,t),Mf.applyMatrix3(e),this.setXY(t,Mf.x,Mf.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tl(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=pi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tl(t,this.array)),t}setX(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tl(t,this.array)),t}setY(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tl(t,this.array)),t}setW(e,t){return this.normalized&&(t=pi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),n=pi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),n=pi(n,this.array),r=pi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=pi(t,this.array),n=pi(n,this.array),r=pi(r,this.array),s=pi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==my&&(e.usage=this.usage),e}};var kl=class extends Ii{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ul=class extends Ii{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Sn=class extends Ii{constructor(e,t,n){super(new Float32Array(e),t,n)}},iR=0,Ji=new nn,oy=new qs,rc=new V,Di=new Bs,Il=new Bs,bn=new V,Ki=class i extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iR++}),this.uuid=su(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vy(e)?Ul:kl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new tt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ji.makeRotationFromQuaternion(e),this.applyMatrix4(Ji),this}rotateX(e){return Ji.makeRotationX(e),this.applyMatrix4(Ji),this}rotateY(e){return Ji.makeRotationY(e),this.applyMatrix4(Ji),this}rotateZ(e){return Ji.makeRotationZ(e),this.applyMatrix4(Ji),this}translate(e,t,n){return Ji.makeTranslation(e,t,n),this.applyMatrix4(Ji),this}scale(e,t,n){return Ji.makeScale(e,t,n),this.applyMatrix4(Ji),this}lookAt(e){return oy.lookAt(e),oy.updateMatrix(),this.applyMatrix4(oy.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rc).negate(),this.translate(rc.x,rc.y,rc.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Sn(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Di.setFromBufferAttribute(s),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,Di.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,Di.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(Di.min),this.boundingBox.expandByPoint(Di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dc);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(Di.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Il.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(Di.min,Il.min),Di.expandByPoint(bn),bn.addVectors(Di.max,Il.max),Di.expandByPoint(bn)):(Di.expandByPoint(Il.min),Di.expandByPoint(Il.max))}Di.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)bn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(bn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)bn.fromBufferAttribute(a,l),c&&(rc.fromBufferAttribute(e,l),bn.add(rc)),r=Math.max(r,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new V,c[A]=new V;let l=new V,u=new V,d=new V,h=new gt,f=new gt,_=new gt,g=new V,m=new V;function p(A,y,E){l.fromBufferAttribute(n,A),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,E),h.fromBufferAttribute(s,A),f.fromBufferAttribute(s,y),_.fromBufferAttribute(s,E),u.sub(l),d.sub(l),f.sub(h),_.sub(h);let R=1/(f.x*_.y-_.x*f.y);isFinite(R)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(R),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(R),a[A].add(g),a[y].add(g),a[E].add(g),c[A].add(m),c[y].add(m),c[E].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let A=0,y=x.length;A<y;++A){let E=x[A],R=E.start,O=E.count;for(let U=R,W=R+O;U<W;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let b=new V,M=new V,S=new V,C=new V;function T(A){S.fromBufferAttribute(r,A),C.copy(S);let y=a[A];b.copy(y),b.sub(S.multiplyScalar(S.dot(y))).normalize(),M.crossVectors(C,y);let R=M.dot(c[A])<0?-1:1;o.setXYZW(A,b.x,b.y,b.z,R)}for(let A=0,y=x.length;A<y;++A){let E=x[A],R=E.start,O=E.count;for(let U=R,W=R+O;U<W;U+=3)T(e.getX(U+0)),T(e.getX(U+1)),T(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ii(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let r=new V,s=new V,o=new V,a=new V,c=new V,l=new V,u=new V,d=new V;if(e)for(let h=0,f=e.count;h<f;h+=3){let _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),f=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?f=c[g]*a.data.stride+a.offset:f=c[g]*u;for(let p=0;p<u;p++)h[_++]=l[f++]}return new Ii(h,u,d)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=e(h,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ab=new nn,Uo=new Hf,Ef=new dc,Ib=new V,bf=new V,Sf=new V,wf=new V,ay=new V,Tf=new V,Rb=new V,Cf=new V,Pn=class extends qs{constructor(e=new Ki,t=new jo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Tf.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(ay.fromBufferAttribute(d,e),o?Tf.addScaledVector(ay,u):Tf.addScaledVector(ay.sub(t),u))}t.add(Tf)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ef.copy(n.boundingSphere),Ef.applyMatrix4(s),Uo.copy(e.ray).recast(e.near),!(Ef.containsPoint(Uo.origin)===!1&&(Uo.intersectSphere(Ef,Ib)===null||Uo.origin.distanceToSquared(Ib)>(e.far-e.near)**2))&&(Ab.copy(s).invert(),Uo.copy(e.ray).applyMatrix4(Ab),!(n.boundingBox!==null&&Uo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Uo)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){let m=h[_],p=o[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,S=b;M<S;M+=3){let C=a.getX(M),T=a.getX(M+1),A=a.getX(M+2);r=Df(this,p,e,n,l,u,d,C,T,A),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let x=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);r=Df(this,o,e,n,l,u,d,x,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){let m=h[_],p=o[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=x,S=b;M<S;M+=3){let C=M,T=M+1,A=M+2;r=Df(this,p,e,n,l,u,d,C,T,A),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let _=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let x=m,b=m+1,M=m+2;r=Df(this,o,e,n,l,u,d,x,b,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function rR(i,e,t,n,r,s,o,a){let c;if(e.side===ei?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===as,a),c===null)return null;Cf.copy(a),Cf.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Cf);return l<t.near||l>t.far?null:{distance:l,point:Cf.clone(),object:i}}function Df(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,bf),i.getVertexPosition(c,Sf),i.getVertexPosition(l,wf);let u=rR(i,e,t,n,bf,Sf,wf,Rb);if(u){let d=new V;ks.getBarycoord(Rb,bf,Sf,wf,d),r&&(u.uv=ks.getInterpolatedAttribute(r,a,c,l,d,new gt)),s&&(u.uv1=ks.getInterpolatedAttribute(s,a,c,l,d,new gt)),o&&(u.normal=ks.getInterpolatedAttribute(o,a,c,l,d,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new V,materialIndex:0};ks.getNormal(bf,Sf,wf,h.normal),u.face=h,u.barycoord=d}return u}var fc=class i extends Ki{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,f=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Sn(l,3)),this.setAttribute("normal",new Sn(u,3)),this.setAttribute("uv",new Sn(d,2));function _(g,m,p,x,b,M,S,C,T,A,y){let E=M/T,R=S/A,O=M/2,U=S/2,W=C/2,G=T+1,H=A+1,k=0,X=0,ie=new V;for(let I=0;I<H;I++){let re=I*R-U;for(let Oe=0;Oe<G;Oe++){let Ve=Oe*E-O;ie[g]=Ve*x,ie[m]=re*b,ie[p]=W,l.push(ie.x,ie.y,ie.z),ie[g]=0,ie[m]=0,ie[p]=C>0?1:-1,u.push(ie.x,ie.y,ie.z),d.push(Oe/T),d.push(1-I/A),k+=1}}for(let I=0;I<A;I++)for(let re=0;re<T;re++){let Oe=h+re+G*I,Ve=h+re+G*(I+1),Xe=h+(re+1)+G*(I+1),Qe=h+(re+1)+G*I;c.push(Oe,Ve,Qe),c.push(Ve,Xe,Qe),X+=6}a.addGroup(f,X,y),f+=X,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Zo(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Gn(i){let e={};for(let t=0;t<i.length;t++){let n=Zo(i[t]);for(let r in n)e[r]=n[r]}return e}function sR(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function zy(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var _S={clone:Zo,merge:Gn},oR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,aR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pi=class extends Vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oR,this.fragmentShader=aR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zo(e.uniforms),this.uniformsGroups=sR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Bl=class extends qs{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Er,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Fs=new V,Nb=new gt,Pb=new gt,Rn=class extends Bl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=kf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(V_*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kf*2*Math.atan(Math.tan(V_*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z),Fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fs.x,Fs.y).multiplyScalar(-e/Fs.z)}getViewSize(e,t){return this.getViewBounds(e,Nb,Pb),t.subVectors(Pb,Nb)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(V_*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},sc=-90,oc=1,zf=class extends qs{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Rn(sc,oc,e,t);r.layers=this.layers,this.add(r);let s=new Rn(sc,oc,e,t);s.layers=this.layers,this.add(s);let o=new Rn(sc,oc,e,t);o.layers=this.layers,this.add(o);let a=new Rn(sc,oc,e,t);a.layers=this.layers,this.add(a);let c=new Rn(sc,oc,e,t);c.layers=this.layers,this.add(c);let l=new Rn(sc,oc,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Er)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pl)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Vl=class extends ds{constructor(e=[],t=Ws,n,r,s,o,a,c,l,u){super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hl=class extends Ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Vl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new fc(5,5,5),s=new Pi({name:"CubemapFromEquirect",uniforms:Zo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ei,blending:kr});s.uniforms.tEquirect.value=t;let o=new Pn(r,s),a=t.minFilter;return t.minFilter===js&&(t.minFilter=Nn),new zf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},Ho=class extends qs{constructor(){super(),this.isGroup=!0,this.type="Group"}},cR={type:"move"},hc=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let g of e.hand.values()){let m=t.getJointPose(g,n),p=this._getHandJoint(l,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,_=.005;l.inputState.pinching&&h>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cR)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ho;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var zl=class extends qs{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Gf=class extends ds{constructor(e=null,t=1,n=1,r,s,o,a,c,l=wn,u=wn,d,h){super(null,o,a,c,l,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cy=new V,lR=new V,uR=new tt,Or=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=cy.subVectors(n,t).cross(lR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(cy),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||uR.getNormalMatrix(e),r=this.coplanarPoint(cy).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Bo=new dc,dR=new gt(.5,.5),Af=new V,pc=class{constructor(e=new Or,t=new Or,n=new Or,r=new Or,s=new Or,o=new Or){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Er,n=!1){let r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],f=s[7],_=s[8],g=s[9],m=s[10],p=s[11],x=s[12],b=s[13],M=s[14],S=s[15];if(r[0].setComponents(l-o,f-u,p-_,S-x).normalize(),r[1].setComponents(l+o,f+u,p+_,S+x).normalize(),r[2].setComponents(l+a,f+d,p+g,S+b).normalize(),r[3].setComponents(l-a,f-d,p-g,S-b).normalize(),n)r[4].setComponents(c,h,m,M).normalize(),r[5].setComponents(l-c,f-h,p-m,S-M).normalize();else if(r[4].setComponents(l-c,f-h,p-m,S-M).normalize(),t===Er)r[5].setComponents(l+c,f+h,p+m,S+M).normalize();else if(t===Pl)r[5].setComponents(c,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bo)}intersectsSprite(e){Bo.center.set(0,0,0);let t=dR.distanceTo(e.center);return Bo.radius=.7071067811865476+t,Bo.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bo)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Af.x=r.normal.x>0?e.max.x:e.min.x,Af.y=r.normal.y>0?e.max.y:e.min.y,Af.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Af)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Hs=class extends ds{constructor(e,t,n=Sr,r,s,o,a=wn,c=wn,l,u=Fr,d=1){if(u!==Fr&&u!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new uc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Wf=class extends Hs{constructor(e,t=Sr,n=Ws,r,s,o=wn,a=wn,c,l=Fr){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,s,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Gl=class extends ds{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var jf=class i extends Ki{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],o=[];a(r),l(n),u(),this.setAttribute("position",new Sn(s,3)),this.setAttribute("normal",new Sn(s.slice(),3)),this.setAttribute("uv",new Sn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let b=new V,M=new V,S=new V;for(let C=0;C<t.length;C+=3)f(t[C+0],b),f(t[C+1],M),f(t[C+2],S),c(b,M,S,x)}function c(x,b,M,S){let C=S+1,T=[];for(let A=0;A<=C;A++){T[A]=[];let y=x.clone().lerp(M,A/C),E=b.clone().lerp(M,A/C),R=C-A;for(let O=0;O<=R;O++)O===0&&A===C?T[A][O]=y:T[A][O]=y.clone().lerp(E,O/R)}for(let A=0;A<C;A++)for(let y=0;y<2*(C-A)-1;y++){let E=Math.floor(y/2);y%2===0?(h(T[A][E+1]),h(T[A+1][E]),h(T[A][E])):(h(T[A][E+1]),h(T[A+1][E+1]),h(T[A+1][E]))}}function l(x){let b=new V;for(let M=0;M<s.length;M+=3)b.x=s[M+0],b.y=s[M+1],b.z=s[M+2],b.normalize().multiplyScalar(x),s[M+0]=b.x,s[M+1]=b.y,s[M+2]=b.z}function u(){let x=new V;for(let b=0;b<s.length;b+=3){x.x=s[b+0],x.y=s[b+1],x.z=s[b+2];let M=m(x)/2/Math.PI+.5,S=p(x)/Math.PI+.5;o.push(M,1-S)}_(),d()}function d(){for(let x=0;x<o.length;x+=6){let b=o[x+0],M=o[x+2],S=o[x+4],C=Math.max(b,M,S),T=Math.min(b,M,S);C>.9&&T<.1&&(b<.2&&(o[x+0]+=1),M<.2&&(o[x+2]+=1),S<.2&&(o[x+4]+=1))}}function h(x){s.push(x.x,x.y,x.z)}function f(x,b){let M=x*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function _(){let x=new V,b=new V,M=new V,S=new V,C=new gt,T=new gt,A=new gt;for(let y=0,E=0;y<s.length;y+=9,E+=6){x.set(s[y+0],s[y+1],s[y+2]),b.set(s[y+3],s[y+4],s[y+5]),M.set(s[y+6],s[y+7],s[y+8]),C.set(o[E+0],o[E+1]),T.set(o[E+2],o[E+3]),A.set(o[E+4],o[E+5]),S.copy(x).add(b).add(M).divideScalar(3);let R=m(S);g(C,E+0,x,R),g(T,E+2,b,R),g(A,E+4,M,R)}}function g(x,b,M,S){S<0&&x.x===1&&(o[b]=x.x-1),M.x===0&&M.z===0&&(o[b]=S/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var $o=class i extends jf{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Wl=class i extends Ki{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){let x=p*h-o;for(let b=0;b<l;b++){let M=b*d-s;_.push(M,-x,0),g.push(0,0,1),m.push(b/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){let b=x+l*p,M=x+l*(p+1),S=x+1+l*(p+1),C=x+1+l*p;f.push(b,M,C),f.push(M,S,C)}this.setIndex(f),this.setAttribute("position",new Sn(_,3)),this.setAttribute("normal",new Sn(g,3)),this.setAttribute("uv",new Sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var jl=class i extends Ki{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],d=new V,h=new V,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){let x=[],b=p/n,M=0;p===0&&o===0?M=.5/t:p===n&&c===Math.PI&&(M=-.5/t);for(let S=0;S<=t;S++){let C=S/t;d.x=-e*Math.cos(r+C*s)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(r+C*s)*Math.sin(o+b*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),g.push(h.x,h.y,h.z),m.push(C+M,1-b),x.push(l++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let b=u[p][x+1],M=u[p][x],S=u[p+1][x],C=u[p+1][x+1];(p!==0||o>0)&&f.push(b,M,C),(p!==n-1||c<Math.PI)&&f.push(M,S,C)}this.setIndex(f),this.setAttribute("position",new Sn(_,3)),this.setAttribute("normal",new Sn(g,3)),this.setAttribute("uv",new Sn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var $f=class extends Pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qf=class extends Vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uy,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},$l=class extends qf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Xf=class extends Vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Yf=class extends Vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function If(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var qo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zf=class extends qo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dy,endingEnd:dy}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case fy:s=e,a=2*t-n;break;case hy:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case fy:o=e,c=2*n-t;break;case hy:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,_=(n-t)/(r-t),g=_*_,m=g*_,p=-h*m+2*h*g-h*_,x=(1+h)*m+(-1.5-2*h)*g+(-.5+h)*_+1,b=(-1-f)*m+(1.5+f)*g+.5*_,M=f*m-f*g;for(let S=0;S!==a;++S)s[S]=p*o[u+S]+x*o[l+S]+b*o[c+S]+M*o[d+S];return s}},Jf=class extends qo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}},Kf=class extends qo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Oi=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=If(t,this.TimeBufferType),this.values=If(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:If(e.times,Array),values:If(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Rl:t=this.InterpolantFactoryMethodDiscrete;break;case Ff:t=this.InterpolantFactoryMethodLinear;break;case Rf:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rl;case this.InterpolantFactoryMethodLinear:return Ff;case this.InterpolantFactoryMethodSmooth:return Rf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){je("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){je("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&G1(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){je("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Rf,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*n,h=d-n,f=d+n;for(let _=0;_!==n;++_){let g=t[d+_];if(g!==t[h+_]||g!==t[f+_]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*n,h=o*n;for(let f=0;f!==n;++f)t[h+f]=t[d+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Oi.prototype.ValueTypeName="";Oi.prototype.TimeBufferType=Float32Array;Oi.prototype.ValueBufferType=Float32Array;Oi.prototype.DefaultInterpolation=Ff;var zs=class extends Oi{constructor(e,t,n){super(e,t,n)}};zs.prototype.ValueTypeName="bool";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=Rl;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Qf=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}};Qf.prototype.ValueTypeName="color";var eh=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}};eh.prototype.ValueTypeName="number";var th=class extends qo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)ls.slerpFlat(s,0,o,l-a,o,l,c);return s}},ql=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new th(this.times,this.values,this.getValueSize(),e)}};ql.prototype.ValueTypeName="quaternion";ql.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends Oi{constructor(e,t,n){super(e,t,n)}};Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Rl;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var nh=class extends Oi{constructor(e,t,n,r){super(e,t,n,r)}};nh.prototype.ValueTypeName="vector";var Xl=class extends qs{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var ly=new nn,Ob=new V,Lb=new V,gy=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pc,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ob.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ob),Lb.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lb),t.updateMatrixWorld(),ly.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ly,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ly)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var _y=class extends gy{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0}},mc=class extends Xl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new _y}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Yl=class extends Bl{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var Zl=class extends Xl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ih=class extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Jl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Gy="\\[\\]\\.:\\/",fR=new RegExp("["+Gy+"]","g"),Wy="[^"+Gy+"]",hR="[^"+Gy.replace("\\.","")+"]",pR=/((?:WC+[\/:])*)/.source.replace("WC",Wy),mR=/(WCOD+)?/.source.replace("WCOD",hR),gR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wy),_R=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wy),yR=new RegExp("^"+pR+mR+gR+_R+"$"),vR=["material","materials","bones","map"],yy=class{constructor(e,t,n){let r=n||tn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},tn=(()=>{class i{constructor(t,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new i.Composite(t,n,r):new i(t,n,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fR,"")}static parseTrackName(t){let n=yR.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);vR.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===n||c.uuid===n)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[n++]=r[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=i.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=n.objectIndex;switch(r){case"materials":if(!t.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=n.nodeName;je("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=yy,i})();tn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tn.prototype.GetterByBindingType=[tn.prototype._getValue_direct,tn.prototype._getValue_array,tn.prototype._getValue_arrayElement,tn.prototype._getValue_toArray];tn.prototype.SetterByBindingTypeAndVersioning=[[tn.prototype._setValue_direct,tn.prototype._setValue_direct_setNeedsUpdate,tn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_array,tn.prototype._setValue_array_setNeedsUpdate,tn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_arrayElement,tn.prototype._setValue_arrayElement_setNeedsUpdate,tn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tn.prototype._setValue_fromArray,tn.prototype._setValue_fromArray_setNeedsUpdate,tn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var m9=new Float32Array(1);function jy(i,e,t,n){let r=xR(n);switch(t){case Ly:return i*e;case ky:return i*e/r.components*r.byteLength;case _h:return i*e/r.components*r.byteLength;case Yo:return i*e*2/r.components*r.byteLength;case yh:return i*e*2/r.components*r.byteLength;case Fy:return i*e*3/r.components*r.byteLength;case er:return i*e*4/r.components*r.byteLength;case vh:return i*e*4/r.components*r.byteLength;case tu:case nu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case iu:case ru:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Mh:case bh:return Math.max(i,16)*Math.max(e,8)/4;case xh:case Eh:return Math.max(i,8)*Math.max(e,8)/2;case Sh:case wh:case Ch:case Dh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Th:case Ah:case Ih:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case kh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Gh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Wh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case jh:case $h:case qh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Xh:case Yh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zh:case Jh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xR(i){switch(i){case mi:case Ry:return{byteLength:1,components:1};case _c:case Ny:case Ur:return{byteLength:2,components:1};case mh:case gh:return{byteLength:2,components:4};case Sr:case ph:case wr:return{byteLength:4,components:1};case Py:case Oy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function VS(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ER(i){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,d=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let u=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,u);else{d.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<d.length;f++){let _=d[h],g=d[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,d[h]=g)}d.length=h+1;for(let f=0,_=d.length;f<_;f++){let g=d[f];i.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var bR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,TR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,IR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,NR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,PR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,FR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,UR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$R=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,YR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QR="gl_FragColor = linearToOutputTexel( gl_FragColor );",eN=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nN=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iN=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rN=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sN=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,oN=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aN=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cN=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lN=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uN=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dN=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fN=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hN=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pN=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mN=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gN=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_N=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yN=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vN=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xN=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,MN=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,EN=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bN=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,SN=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AN=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IN=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RN=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NN=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PN=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ON=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FN=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UN=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BN=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HN=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jN=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$N=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ZN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JN=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,KN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dP=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_P=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,MP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,EP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,IP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,RP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,NP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GP=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$P=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XP=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YP=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZP=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,JP=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KP=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QP=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,eO=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tO=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:bR,alphahash_pars_fragment:SR,alphamap_fragment:wR,alphamap_pars_fragment:TR,alphatest_fragment:CR,alphatest_pars_fragment:DR,aomap_fragment:AR,aomap_pars_fragment:IR,batching_pars_vertex:RR,batching_vertex:NR,begin_vertex:PR,beginnormal_vertex:OR,bsdfs:LR,iridescence_fragment:FR,bumpmap_pars_fragment:kR,clipping_planes_fragment:UR,clipping_planes_pars_fragment:BR,clipping_planes_pars_vertex:VR,clipping_planes_vertex:HR,color_fragment:zR,color_pars_fragment:GR,color_pars_vertex:WR,color_vertex:jR,common:$R,cube_uv_reflection_fragment:qR,defaultnormal_vertex:XR,displacementmap_pars_vertex:YR,displacementmap_vertex:ZR,emissivemap_fragment:JR,emissivemap_pars_fragment:KR,colorspace_fragment:QR,colorspace_pars_fragment:eN,envmap_fragment:tN,envmap_common_pars_fragment:nN,envmap_pars_fragment:iN,envmap_pars_vertex:rN,envmap_physical_pars_fragment:mN,envmap_vertex:sN,fog_vertex:oN,fog_pars_vertex:aN,fog_fragment:cN,fog_pars_fragment:lN,gradientmap_pars_fragment:uN,lightmap_pars_fragment:dN,lights_lambert_fragment:fN,lights_lambert_pars_fragment:hN,lights_pars_begin:pN,lights_toon_fragment:gN,lights_toon_pars_fragment:_N,lights_phong_fragment:yN,lights_phong_pars_fragment:vN,lights_physical_fragment:xN,lights_physical_pars_fragment:MN,lights_fragment_begin:EN,lights_fragment_maps:bN,lights_fragment_end:SN,logdepthbuf_fragment:wN,logdepthbuf_pars_fragment:TN,logdepthbuf_pars_vertex:CN,logdepthbuf_vertex:DN,map_fragment:AN,map_pars_fragment:IN,map_particle_fragment:RN,map_particle_pars_fragment:NN,metalnessmap_fragment:PN,metalnessmap_pars_fragment:ON,morphinstance_vertex:LN,morphcolor_vertex:FN,morphnormal_vertex:kN,morphtarget_pars_vertex:UN,morphtarget_vertex:BN,normal_fragment_begin:VN,normal_fragment_maps:HN,normal_pars_fragment:zN,normal_pars_vertex:GN,normal_vertex:WN,normalmap_pars_fragment:jN,clearcoat_normal_fragment_begin:$N,clearcoat_normal_fragment_maps:qN,clearcoat_pars_fragment:XN,iridescence_pars_fragment:YN,opaque_fragment:ZN,packing:JN,premultiplied_alpha_fragment:KN,project_vertex:QN,dithering_fragment:eP,dithering_pars_fragment:tP,roughnessmap_fragment:nP,roughnessmap_pars_fragment:iP,shadowmap_pars_fragment:rP,shadowmap_pars_vertex:sP,shadowmap_vertex:oP,shadowmask_pars_fragment:aP,skinbase_vertex:cP,skinning_pars_vertex:lP,skinning_vertex:uP,skinnormal_vertex:dP,specularmap_fragment:fP,specularmap_pars_fragment:hP,tonemapping_fragment:pP,tonemapping_pars_fragment:mP,transmission_fragment:gP,transmission_pars_fragment:_P,uv_pars_fragment:yP,uv_pars_vertex:vP,uv_vertex:xP,worldpos_vertex:MP,background_vert:EP,background_frag:bP,backgroundCube_vert:SP,backgroundCube_frag:wP,cube_vert:TP,cube_frag:CP,depth_vert:DP,depth_frag:AP,distance_vert:IP,distance_frag:RP,equirect_vert:NP,equirect_frag:PP,linedashed_vert:OP,linedashed_frag:LP,meshbasic_vert:FP,meshbasic_frag:kP,meshlambert_vert:UP,meshlambert_frag:BP,meshmatcap_vert:VP,meshmatcap_frag:HP,meshnormal_vert:zP,meshnormal_frag:GP,meshphong_vert:WP,meshphong_frag:jP,meshphysical_vert:$P,meshphysical_frag:qP,meshtoon_vert:XP,meshtoon_frag:YP,points_vert:ZP,points_frag:JP,shadow_vert:KP,shadow_frag:QP,sprite_vert:eO,sprite_frag:tO},me={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Vr={basic:{uniforms:Gn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Gn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ht(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Gn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Gn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Gn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ht(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Gn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Gn([me.points,me.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Gn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Gn([me.common,me.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Gn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Gn([me.sprite,me.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:Gn([me.common,me.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:Gn([me.lights,me.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Vr.physical={uniforms:Gn([Vr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var ep={r:0,b:0,g:0},Jo=new Ni,nO=new nn;function iO(i,e,t,n,r,s,o){let a=new ht(0),c=s===!0?0:1,l,u,d=null,h=0,f=null;function _(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function g(b){let M=!1,S=_(b);S===null?p(a,c):S&&S.isColor&&(p(S,1),M=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,M){let S=_(M);S&&(S.isCubeTexture||S.mapping===Ql)?(u===void 0&&(u=new Pn(new fc(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Zo(Vr.backgroundCube.uniforms),vertexShader:Vr.backgroundCube.vertexShader,fragmentShader:Vr.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Jo.copy(M.backgroundRotation),Jo.x*=-1,Jo.y*=-1,Jo.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Jo.y*=-1,Jo.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nO.makeRotationFromEuler(Jo)),u.material.toneMapped=xt.getTransfer(S.colorSpace)!==At,(d!==S||h!==S.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,d=S,h=S.version,f=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Pn(new Wl(2,2),new Pi({name:"BackgroundMaterial",uniforms:Zo(Vr.background.uniforms),vertexShader:Vr.background.vertexShader,fragmentShader:Vr.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=xt.getTransfer(S.colorSpace)!==At,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=S,h=S.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,M){b.getRGB(ep,zy(i)),n.buffers.color.setClear(ep.r,ep.g,ep.b,M,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:g,addToRenderList:m,dispose:x}}function rO(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(E,R,O,U,W){let G=!1,H=d(U,O,R);s!==H&&(s=H,l(s.object)),G=f(E,U,O,W),G&&_(E,U,O,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,M(E,R,O,U),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function d(E,R,O){let U=O.wireframe===!0,W=n[E.id];W===void 0&&(W={},n[E.id]=W);let G=W[R.id];G===void 0&&(G={},W[R.id]=G);let H=G[U];return H===void 0&&(H=h(c()),G[U]=H),H}function h(E){let R=[],O=[],U=[];for(let W=0;W<t;W++)R[W]=0,O[W]=0,U[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:U,object:E,attributes:{},index:null}}function f(E,R,O,U){let W=s.attributes,G=R.attributes,H=0,k=O.getAttributes();for(let X in k)if(k[X].location>=0){let I=W[X],re=G[X];if(re===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(re=E.instanceColor)),I===void 0||I.attribute!==re||re&&I.data!==re.data)return!0;H++}return s.attributesNum!==H||s.index!==U}function _(E,R,O,U){let W={},G=R.attributes,H=0,k=O.getAttributes();for(let X in k)if(k[X].location>=0){let I=G[X];I===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(I=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(I=E.instanceColor));let re={};re.attribute=I,I&&I.data&&(re.data=I.data),W[X]=re,H++}s.attributes=W,s.attributesNum=H,s.index=U}function g(){let E=s.newAttributes;for(let R=0,O=E.length;R<O;R++)E[R]=0}function m(E){p(E,0)}function p(E,R){let O=s.newAttributes,U=s.enabledAttributes,W=s.attributeDivisors;O[E]=1,U[E]===0&&(i.enableVertexAttribArray(E),U[E]=1),W[E]!==R&&(i.vertexAttribDivisor(E,R),W[E]=R)}function x(){let E=s.newAttributes,R=s.enabledAttributes;for(let O=0,U=R.length;O<U;O++)R[O]!==E[O]&&(i.disableVertexAttribArray(O),R[O]=0)}function b(E,R,O,U,W,G,H){H===!0?i.vertexAttribIPointer(E,R,O,W,G):i.vertexAttribPointer(E,R,O,U,W,G)}function M(E,R,O,U){g();let W=U.attributes,G=O.getAttributes(),H=R.defaultAttributeValues;for(let k in G){let X=G[k];if(X.location>=0){let ie=W[k];if(ie===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(ie=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(ie=E.instanceColor)),ie!==void 0){let I=ie.normalized,re=ie.itemSize,Oe=e.get(ie);if(Oe===void 0)continue;let Ve=Oe.buffer,Xe=Oe.type,Qe=Oe.bytesPerElement,Y=Xe===i.INT||Xe===i.UNSIGNED_INT||ie.gpuType===ph;if(ie.isInterleavedBufferAttribute){let K=ie.data,fe=K.stride,Ie=ie.offset;if(K.isInstancedInterleavedBuffer){for(let Me=0;Me<X.locationSize;Me++)p(X.location+Me,K.meshPerAttribute);E.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Me=0;Me<X.locationSize;Me++)m(X.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Me=0;Me<X.locationSize;Me++)b(X.location+Me,re/X.locationSize,Xe,I,fe*Qe,(Ie+re/X.locationSize*Me)*Qe,Y)}else{if(ie.isInstancedBufferAttribute){for(let K=0;K<X.locationSize;K++)p(X.location+K,ie.meshPerAttribute);E.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let K=0;K<X.locationSize;K++)m(X.location+K);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let K=0;K<X.locationSize;K++)b(X.location+K,re/X.locationSize,Xe,I,re*Qe,re/X.locationSize*K*Qe,Y)}}else if(H!==void 0){let I=H[k];if(I!==void 0)switch(I.length){case 2:i.vertexAttrib2fv(X.location,I);break;case 3:i.vertexAttrib3fv(X.location,I);break;case 4:i.vertexAttrib4fv(X.location,I);break;default:i.vertexAttrib1fv(X.location,I)}}}}x()}function S(){A();for(let E in n){let R=n[E];for(let O in R){let U=R[O];for(let W in U)u(U[W].object),delete U[W];delete R[O]}delete n[E]}}function C(E){if(n[E.id]===void 0)return;let R=n[E.id];for(let O in R){let U=R[O];for(let W in U)u(U[W].object),delete U[W];delete R[O]}delete n[E.id]}function T(E){for(let R in n){let O=n[R];if(O[E.id]===void 0)continue;let U=O[E.id];for(let W in U)u(U[W].object),delete U[W];delete O[E.id]}}function A(){y(),o=!0,s!==r&&(s=r,l(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:y,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function sO(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),t.update(u,n,d))}function a(l,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let f=0;for(let _=0;_<d;_++)f+=u[_];t.update(f,n,1)}function c(l,u,d,h){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l.length;_++)o(l[_],u[_],h[_]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,h,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g]*h[g];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function oO(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==er&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let A=T===Ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==mi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==wr&&!A)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(qe("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=i.getParameter(i.MAX_SAMPLES),C=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:M,maxSamples:S,samples:C}}function aO(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Or,a=new tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||r;return r=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):l();else{let x=s?0:n,b=x*4,M=p.clippingState||null;c.value=M,M=u(_,h,b,f);for(let S=0;S!==b;++S)M[S]=t[S];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,_){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=c.value,_!==!0||m===null){let p=f+g*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,M=f;b!==g;++b,M+=4)o.copy(d[b]).applyMatrix4(x,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function cO(i){let e=new WeakMap;function t(o,a){return a===dh?o.mapping=Ws:a===fh&&(o.mapping=Xo),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===dh||a===fh)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Hl(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Xs=4,yS=[.125,.215,.35,.446,.526,.582],Qo=20,lO=256,ou=new Yl,vS=new ht,$y=null,qy=0,Xy=0,Yy=!1,uO=new V,np=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:o=256,position:a=uO}=s;$y=this._renderer.getRenderTarget(),qy=this._renderer.getActiveCubeFace(),Xy=this._renderer.getActiveMipmapLevel(),Yy=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ES(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=MS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($y,qy,Xy),this._renderer.xr.enabled=Yy,e.scissorTest=!1,vc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===Xo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$y=this._renderer.getRenderTarget(),qy=this._renderer.getActiveCubeFace(),Xy=this._renderer.getActiveMipmapLevel(),Yy=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Ur,format:er,colorSpace:Wo,depthBuffer:!1},r=xS(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xS(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=dO(s)),this._blurMaterial=hO(s,e,t),this._ggxMaterial=fO(s,e,t)}return r}_compileMaterial(e){let t=new Pn(new Ki,e);this._renderer.compile(t,ou)}_sceneToCubeUV(e,t,n,r,s){let c=new Rn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(vS),d.toneMapping=br,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pn(new fc,new jo({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,m=g.material,p=!1,x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,p=!0):(m.color.copy(vS),p=!0);for(let b=0;b<6;b++){let M=b%3;M===0?(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[b],s.y,s.z)):M===1?(c.up.set(0,0,l[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[b],s.z)):(c.up.set(0,l[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[b]));let S=this._cubeSize;vc(r,M*S,b>2?S:0,S,S),d.setRenderTarget(r),p&&d.render(g,c),d.render(e,c)}d.toneMapping=f,d.autoClear=h,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Ws||e.mapping===Xo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ES()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=MS());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;vc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,ou)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,f=d*h,{_lodMax:_}=this,g=this._sizeLods[n],m=3*g*(n>_-Xs?n-_+Xs:0),p=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=_-t,vc(s,m,p,3*g,2*g),r.setRenderTarget(s),r.render(a,ou),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-n,vc(e,m,p,3*g,2*g),r.setRenderTarget(e),r.render(a,ou)}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");let u=3,d=this._lodMeshes[r];d.material=l;let h=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Qo-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Qo;m>Qo&&qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qo}`);let p=[],x=0;for(let T=0;T<Qo;++T){let A=T/g,y=Math.exp(-A*A/2);p.push(y),T===0?x+=y:T<m&&(x+=2*y)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:b}=this;h.dTheta.value=_,h.mipInt.value=b-n;let M=this._sizeLods[r],S=3*M*(r>b-Xs?r-b+Xs:0),C=4*(this._cubeSize-M);vc(t,S,C,3*M,2*M),c.setRenderTarget(t),c.render(d,ou)}};function dO(i){let e=[],t=[],n=[],r=i,s=i-Xs+1+yS.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>i-Xs?c=yS[o-i+Xs-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,_=6,g=3,m=2,p=1,x=new Float32Array(g*_*f),b=new Float32Array(m*_*f),M=new Float32Array(p*_*f);for(let C=0;C<f;C++){let T=C%3*2/3-1,A=C>2?0:-1,y=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];x.set(y,g*_*C),b.set(h,m*_*C);let E=[C,C,C,C,C,C];M.set(E,p*_*C)}let S=new Ki;S.setAttribute("position",new Ii(x,g)),S.setAttribute("uv",new Ii(b,m)),S.setAttribute("faceIndex",new Ii(M,p)),n.push(new Pn(S,null)),r>Xs&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function xS(i,e,t){let n=new Ri(i,e,t);return n.texture.mapping=Ql,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vc(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function fO(i,e,t){return new Pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lO,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:rp(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function hO(i,e,t){let n=new Float32Array(Qo),r=new V(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Qo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function MS(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function ES(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function rp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pO(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===dh||c===fh,u=c===Ws||c===Xo;if(l||u){let d=e.get(a),h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new np(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new np(i)),d=l?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function mO(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&lc("WebGLRenderer: "+n+" extension not supported."),r}}}function gO(i,e,t,n){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete r[h.id];let f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let f in h)e.update(h[f],i.ARRAY_BUFFER)}function l(d){let h=[],f=d.index,_=d.attributes.position,g=0;if(f!==null){let x=f.array;g=f.version;for(let b=0,M=x.length;b<M;b+=3){let S=x[b+0],C=x[b+1],T=x[b+2];h.push(S,C,C,T,T,S)}}else if(_!==void 0){let x=_.array;g=_.version;for(let b=0,M=x.length/3-1;b<M;b+=3){let S=b+0,C=b+1,T=b+2;h.push(S,C,C,T,T,S)}}else return;let m=new(Vy(h)?Ul:kl)(h,1);m.version=g;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let h=s.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function _O(i,e,t){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,f){i.drawElements(n,f,s,h*o),t.update(f,n,1)}function l(h,f,_){_!==0&&(i.drawElementsInstanced(n,f,s,h*o,_),t.update(f,n,_))}function u(h,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function d(h,f,_,g){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)l(h[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,g,0,_);let p=0;for(let x=0;x<_;x++)p+=f[x]*g[x];t.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function yO(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function vO(i,e,t){let n=new WeakMap,r=new Yt;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==d){let E=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var f=E;h!==void 0&&h.texture.dispose();let _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],M=0;_===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let S=a.attributes.position.count*M,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let T=new Float32Array(S*C*4*d),A=new Ll(T,S,C,d);A.type=wr,A.needsUpdate=!0;let y=M*4;for(let R=0;R<d;R++){let O=p[R],U=x[R],W=b[R],G=S*C*4*R;for(let H=0;H<O.count;H++){let k=H*y;_===!0&&(r.fromBufferAttribute(O,H),T[G+k+0]=r.x,T[G+k+1]=r.y,T[G+k+2]=r.z,T[G+k+3]=0),g===!0&&(r.fromBufferAttribute(U,H),T[G+k+4]=r.x,T[G+k+5]=r.y,T[G+k+6]=r.z,T[G+k+7]=0),m===!0&&(r.fromBufferAttribute(W,H),T[G+k+8]=r.x,T[G+k+9]=r.y,T[G+k+10]=r.z,T[G+k+11]=W.itemSize===4?r.w:1)}}h={count:d,texture:A,size:new gt(S,C)},n.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];let g=a.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function xO(i,e,t,n){let r=new WeakMap;function s(c){let l=n.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var MO={[Sy]:"LINEAR_TONE_MAPPING",[wy]:"REINHARD_TONE_MAPPING",[Ty]:"CINEON_TONE_MAPPING",[Cy]:"ACES_FILMIC_TONE_MAPPING",[Ay]:"AGX_TONE_MAPPING",[Iy]:"NEUTRAL_TONE_MAPPING",[Dy]:"CUSTOM_TONE_MAPPING"};function EO(i,e,t,n,r){let s=new Ri(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),o=new Ri(e,t,{type:Ur,depthBuffer:!1,stencilBuffer:!1}),a=new Ki;a.setAttribute("position",new Sn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Sn([0,2,0,0,2,0],2));let c=new $f({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Pn(a,c),u=new Yl(-1,1,1,-1,0,1),d=null,h=null,f=!1,_,g=null,m=[],p=!1;this.setSize=function(x,b){s.setSize(x,b),o.setSize(x,b);for(let M=0;M<m.length;M++){let S=m[M];S.setSize&&S.setSize(x,b)}},this.setEffects=function(x){m=x,p=m.length>0&&m[0].isRenderPass===!0;let b=s.width,M=s.height;for(let S=0;S<m.length;S++){let C=m[S];C.setSize&&C.setSize(b,M)}},this.begin=function(x,b){if(f||x.toneMapping===br&&m.length===0)return!1;if(g=b,b!==null){let M=b.width,S=b.height;(s.width!==M||s.height!==S)&&this.setSize(M,S)}return p===!1&&x.setRenderTarget(s),_=x.toneMapping,x.toneMapping=br,!0},this.hasRenderPass=function(){return p},this.end=function(x,b){x.toneMapping=_,f=!0;let M=s,S=o;for(let C=0;C<m.length;C++){let T=m[C];if(T.enabled!==!1&&(T.render(x,S,M,b),T.needsSwap!==!1)){let A=M;M=S,S=A}}if(d!==x.outputColorSpace||h!==x.toneMapping){d=x.outputColorSpace,h=x.toneMapping,c.defines={},xt.getTransfer(d)===At&&(c.defines.SRGB_TRANSFER="");let C=MO[h];C&&(c.defines[C]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(g),x.render(l,u),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),c.dispose()}}var HS=new ds,Ky=new Hs(1,1),zS=new Ll,GS=new Vf,WS=new Vl,bS=[],SS=[],wS=new Float32Array(16),TS=new Float32Array(9),CS=new Float32Array(4);function Mc(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=bS[r];if(s===void 0&&(s=new Float32Array(r),bS[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function gn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _n(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sp(i,e){let t=SS[e];t===void 0&&(t=new Int32Array(e),SS[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bO(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function SO(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2fv(this.addr,e),_n(t,e)}}function wO(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;i.uniform3fv(this.addr,e),_n(t,e)}}function TO(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4fv(this.addr,e),_n(t,e)}}function CO(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,n))return;CS.set(n),i.uniformMatrix2fv(this.addr,!1,CS),_n(t,n)}}function DO(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,n))return;TS.set(n),i.uniformMatrix3fv(this.addr,!1,TS),_n(t,n)}}function AO(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(gn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(gn(t,n))return;wS.set(n),i.uniformMatrix4fv(this.addr,!1,wS),_n(t,n)}}function IO(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function RO(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2iv(this.addr,e),_n(t,e)}}function NO(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3iv(this.addr,e),_n(t,e)}}function PO(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4iv(this.addr,e),_n(t,e)}}function OO(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function LO(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2uiv(this.addr,e),_n(t,e)}}function FO(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3uiv(this.addr,e),_n(t,e)}}function kO(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4uiv(this.addr,e),_n(t,e)}}function UO(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ky.compareFunction=t.isReversedDepthBuffer()?Qh:Kh,s=Ky):s=HS,t.setTexture2D(e||s,r)}function BO(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||GS,r)}function VO(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||WS,r)}function HO(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||zS,r)}function zO(i){switch(i){case 5126:return bO;case 35664:return SO;case 35665:return wO;case 35666:return TO;case 35674:return CO;case 35675:return DO;case 35676:return AO;case 5124:case 35670:return IO;case 35667:case 35671:return RO;case 35668:case 35672:return NO;case 35669:case 35673:return PO;case 5125:return OO;case 36294:return LO;case 36295:return FO;case 36296:return kO;case 35678:case 36198:case 36298:case 36306:case 35682:return UO;case 35679:case 36299:case 36307:return BO;case 35680:case 36300:case 36308:case 36293:return VO;case 36289:case 36303:case 36311:case 36292:return HO}}function GO(i,e){i.uniform1fv(this.addr,e)}function WO(i,e){let t=Mc(e,this.size,2);i.uniform2fv(this.addr,t)}function jO(i,e){let t=Mc(e,this.size,3);i.uniform3fv(this.addr,t)}function $O(i,e){let t=Mc(e,this.size,4);i.uniform4fv(this.addr,t)}function qO(i,e){let t=Mc(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function XO(i,e){let t=Mc(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function YO(i,e){let t=Mc(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ZO(i,e){i.uniform1iv(this.addr,e)}function JO(i,e){i.uniform2iv(this.addr,e)}function KO(i,e){i.uniform3iv(this.addr,e)}function QO(i,e){i.uniform4iv(this.addr,e)}function eL(i,e){i.uniform1uiv(this.addr,e)}function tL(i,e){i.uniform2uiv(this.addr,e)}function nL(i,e){i.uniform3uiv(this.addr,e)}function iL(i,e){i.uniform4uiv(this.addr,e)}function rL(i,e,t){let n=this.cache,r=e.length,s=sp(t,r);gn(n,s)||(i.uniform1iv(this.addr,s),_n(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ky:o=HS;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function sL(i,e,t){let n=this.cache,r=e.length,s=sp(t,r);gn(n,s)||(i.uniform1iv(this.addr,s),_n(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||GS,s[o])}function oL(i,e,t){let n=this.cache,r=e.length,s=sp(t,r);gn(n,s)||(i.uniform1iv(this.addr,s),_n(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||WS,s[o])}function aL(i,e,t){let n=this.cache,r=e.length,s=sp(t,r);gn(n,s)||(i.uniform1iv(this.addr,s),_n(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||zS,s[o])}function cL(i){switch(i){case 5126:return GO;case 35664:return WO;case 35665:return jO;case 35666:return $O;case 35674:return qO;case 35675:return XO;case 35676:return YO;case 5124:case 35670:return ZO;case 35667:case 35671:return JO;case 35668:case 35672:return KO;case 35669:case 35673:return QO;case 5125:return eL;case 36294:return tL;case 36295:return nL;case 36296:return iL;case 35678:case 36198:case 36298:case 36306:case 35682:return rL;case 35679:case 36299:case 36307:return sL;case 35680:case 36300:case 36308:case 36293:return oL;case 36289:case 36303:case 36311:case 36292:return aL}}var Qy=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zO(t.type)}},e0=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cL(t.type)}},t0=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Zy=/(\w+)(\])?(\[|\.)?/g;function DS(i,e){i.seq.push(e),i.map[e.id]=e}function lL(i,e,t){let n=i.name,r=n.length;for(Zy.lastIndex=0;;){let s=Zy.exec(n),o=Zy.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){DS(t,l===void 0?new Qy(a,i,e):new e0(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new t0(a),DS(t,d)),t=d}}}var xc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);lL(a,c,this)}let r=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function AS(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var uL=37297,dL=0;function fL(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var IS=new tt;function hL(i){xt._getMatrix(IS,xt.workingColorSpace,i);let e=`mat3( ${IS.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(i)){case Nl:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function RS(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+fL(i.getShaderSource(e),a)}else return s}function pL(i,e){let t=hL(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var mL={[Sy]:"Linear",[wy]:"Reinhard",[Ty]:"Cineon",[Cy]:"ACESFilmic",[Ay]:"AgX",[Iy]:"Neutral",[Dy]:"Custom"};function gL(i,e){let t=mL[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var tp=new V;function _L(){xt.getLuminanceCoefficients(tp);let i=tp.x.toFixed(4),e=tp.y.toFixed(4),t=tp.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yL(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cu).join(`
`)}function vL(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xL(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function cu(i){return i!==""}function NS(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function PS(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ML=/^[ \t]*#include +<([\w\d./]+)>/gm;function n0(i){return i.replace(ML,bL)}var EL=new Map;function bL(i,e){let t=it[e];if(t===void 0){let n=EL.get(e);if(n!==void 0)t=it[n],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return n0(t)}var SL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function OS(i){return i.replace(SL,wL)}function wL(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function LS(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var TL={[Kl]:"SHADOWMAP_TYPE_PCF",[gc]:"SHADOWMAP_TYPE_VSM"};function CL(i){return TL[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var DL={[Ws]:"ENVMAP_TYPE_CUBE",[Xo]:"ENVMAP_TYPE_CUBE",[Ql]:"ENVMAP_TYPE_CUBE_UV"};function AL(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":DL[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var IL={[Xo]:"ENVMAP_MODE_REFRACTION"};function RL(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":IL[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var NL={[by]:"ENVMAP_BLENDING_MULTIPLY",[iS]:"ENVMAP_BLENDING_MIX",[rS]:"ENVMAP_BLENDING_ADD"};function PL(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":NL[i.combine]||"ENVMAP_BLENDING_NONE"}function OL(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function LL(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=CL(t),l=AL(t),u=RL(t),d=PL(t),h=OL(t),f=yL(t),_=vL(s),g=r.createProgram(),m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(cu).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(cu).join(`
`),p.length>0&&(p+=`
`)):(m=[LS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cu).join(`
`),p=[LS(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==br?"#define TONE_MAPPING":"",t.toneMapping!==br?it.tonemapping_pars_fragment:"",t.toneMapping!==br?gL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,pL("linearToOutputTexel",t.outputColorSpace),_L(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cu).join(`
`)),o=n0(o),o=NS(o,t),o=PS(o,t),a=n0(a),a=NS(a,t),a=PS(a,t),o=OS(o),a=OS(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===By?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===By?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=x+m+o,M=x+p+a,S=AS(r,r.VERTEX_SHADER,b),C=AS(r,r.FRAGMENT_SHADER,M);r.attachShader(g,S),r.attachShader(g,C),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(R){if(i.debug.checkShaderErrors){let O=r.getProgramInfoLog(g)||"",U=r.getShaderInfoLog(S)||"",W=r.getShaderInfoLog(C)||"",G=O.trim(),H=U.trim(),k=W.trim(),X=!0,ie=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,S,C);else{let I=RS(r,S,"vertex"),re=RS(r,C,"fragment");je("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+G+`
`+I+`
`+re)}else G!==""?qe("WebGLProgram: Program Info Log:",G):(H===""||k==="")&&(ie=!1);ie&&(R.diagnostics={runnable:X,programLog:G,vertexShader:{log:H,prefix:m},fragmentShader:{log:k,prefix:p}})}r.deleteShader(S),r.deleteShader(C),A=new xc(r,g),y=xL(r,g)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(g,uL)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dL++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}var FL=0,i0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new r0(e),t.set(e,n)),n}},r0=class{constructor(e){this.id=FL++,this.code=e,this.usedTimes=0}};function kL(i,e,t,n,r,s,o){let a=new Fl,c=new i0,l=new Set,u=[],d=new Map,h=r.logarithmicDepthBuffer,f=r.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,E,R,O,U){let W=O.fog,G=U.geometry,H=y.isMeshStandardMaterial?O.environment:null,k=(y.isMeshStandardMaterial?t:e).get(y.envMap||H),X=k&&k.mapping===Ql?k.image.height:null,ie=_[y.type];y.precision!==null&&(f=r.getMaxPrecision(y.precision),f!==y.precision&&qe("WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let I=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,re=I!==void 0?I.length:0,Oe=0;G.morphAttributes.position!==void 0&&(Oe=1),G.morphAttributes.normal!==void 0&&(Oe=2),G.morphAttributes.color!==void 0&&(Oe=3);let Ve,Xe,Qe,Y;if(ie){let ge=Vr[ie];Ve=ge.vertexShader,Xe=ge.fragmentShader}else Ve=y.vertexShader,Xe=y.fragmentShader,c.update(y),Qe=c.getVertexShaderID(y),Y=c.getFragmentShaderID(y);let K=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Ie=U.isInstancedMesh===!0,Me=U.isBatchedMesh===!0,Ge=!!y.map,vt=!!y.matcap,we=!!k,He=!!y.aoMap,et=!!y.lightMap,ke=!!y.bumpMap,z=!!y.normalMap,P=!!y.displacementMap,Dt=!!y.emissiveMap,rt=!!y.metalnessMap,ze=!!y.roughnessMap,Ee=y.anisotropy>0,D=y.clearcoat>0,v=y.dispersion>0,L=y.iridescence>0,Z=y.sheen>0,J=y.transmission>0,q=Ee&&!!y.anisotropyMap,ve=D&&!!y.clearcoatMap,se=D&&!!y.clearcoatNormalMap,Te=D&&!!y.clearcoatRoughnessMap,Se=L&&!!y.iridescenceMap,ne=L&&!!y.iridescenceThicknessMap,oe=Z&&!!y.sheenColorMap,be=Z&&!!y.sheenRoughnessMap,Ce=!!y.specularMap,ae=!!y.specularColorMap,$e=!!y.specularIntensityMap,N=J&&!!y.transmissionMap,ue=J&&!!y.thicknessMap,te=!!y.gradientMap,de=!!y.alphaMap,ee=y.alphaTest>0,Q=!!y.alphaHash,le=!!y.extensions,Le=br;y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Le=i.toneMapping);let Mt={shaderID:ie,shaderType:y.type,shaderName:y.name,vertexShader:Ve,fragmentShader:Xe,defines:y.defines,customVertexShaderID:Qe,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Me,batchingColor:Me&&U._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&U.instanceColor!==null,instancingMorph:Ie&&U.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Wo,alphaToCoverage:!!y.alphaToCoverage,map:Ge,matcap:vt,envMap:we,envMapMode:we&&k.mapping,envMapCubeUVHeight:X,aoMap:He,lightMap:et,bumpMap:ke,normalMap:z,displacementMap:P,emissiveMap:Dt,normalMapObjectSpace:z&&y.normalMapType===aS,normalMapTangentSpace:z&&y.normalMapType===Uy,metalnessMap:rt,roughnessMap:ze,anisotropy:Ee,anisotropyMap:q,clearcoat:D,clearcoatMap:ve,clearcoatNormalMap:se,clearcoatRoughnessMap:Te,dispersion:v,iridescence:L,iridescenceMap:Se,iridescenceThicknessMap:ne,sheen:Z,sheenColorMap:oe,sheenRoughnessMap:be,specularMap:Ce,specularColorMap:ae,specularIntensityMap:$e,transmission:J,transmissionMap:N,thicknessMap:ue,gradientMap:te,opaque:y.transparent===!1&&y.blending===zo&&y.alphaToCoverage===!1,alphaMap:de,alphaTest:ee,alphaHash:Q,combine:y.combine,mapUv:Ge&&g(y.map.channel),aoMapUv:He&&g(y.aoMap.channel),lightMapUv:et&&g(y.lightMap.channel),bumpMapUv:ke&&g(y.bumpMap.channel),normalMapUv:z&&g(y.normalMap.channel),displacementMapUv:P&&g(y.displacementMap.channel),emissiveMapUv:Dt&&g(y.emissiveMap.channel),metalnessMapUv:rt&&g(y.metalnessMap.channel),roughnessMapUv:ze&&g(y.roughnessMap.channel),anisotropyMapUv:q&&g(y.anisotropyMap.channel),clearcoatMapUv:ve&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(y.sheenRoughnessMap.channel),specularMapUv:Ce&&g(y.specularMap.channel),specularColorMapUv:ae&&g(y.specularColorMap.channel),specularIntensityMapUv:$e&&g(y.specularIntensityMap.channel),transmissionMapUv:N&&g(y.transmissionMap.channel),thicknessMapUv:ue&&g(y.thicknessMap.channel),alphaMapUv:de&&g(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(z||Ee),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(Ge||de),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:fe,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Oe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ge&&y.map.isVideoTexture===!0&&xt.getTransfer(y.map.colorSpace)===At,decodeVideoTextureEmissive:Dt&&y.emissiveMap.isVideoTexture===!0&&xt.getTransfer(y.emissiveMap.colorSpace)===At,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Qi,flipSided:y.side===ei,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:le&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&y.extensions.multiDraw===!0||Me)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function p(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)E.push(R),E.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(x(E,y),b(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function x(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function b(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){let E=_[y.type],R;if(E){let O=Vr[E];R=_S.clone(O.uniforms)}else R=y.uniforms;return R}function S(y,E){let R=d.get(E);return R!==void 0?++R.usedTimes:(R=new LL(i,E,y,s),u.push(R),d.set(E,R)),R}function C(y){if(--y.usedTimes===0){let E=u.indexOf(y);u[E]=u[u.length-1],u.pop(),d.delete(y.cacheKey),y.destroy()}}function T(y){c.remove(y)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:S,releaseProgram:C,releaseShaderCache:T,programs:u,dispose:A}}function UL(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function BL(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function FS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kS(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,h,f,_,g,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=g,p.group=m),e++,p}function a(d,h,f,_,g,m){let p=o(d,h,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(d,h,f,_,g,m){let p=o(d,h,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(d,h){t.length>1&&t.sort(d||BL),n.length>1&&n.sort(h||FS),r.length>1&&r.sort(h||FS)}function u(){for(let d=e,h=i.length;d<h;d++){let f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function VL(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new kS,i.set(n,[o])):r>=s.length?(o=new kS,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function HL(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new ht};break;case"SpotLight":t={position:new V,direction:new V,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new V,halfWidth:new V,halfHeight:new V};break}return i[e.id]=t,t}}}function zL(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var GL=0;function WL(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function jL(i){let e=new HL,t=zL(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);let r=new V,s=new nn,o=new nn;function a(l){let u=0,d=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,x=0,b=0,M=0,S=0,C=0,T=0;l.sort(WL);for(let y=0,E=l.length;y<E;y++){let R=l[y],O=R.color,U=R.intensity,W=R.distance,G=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Yo?G=R.shadow.map.texture:G=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)u+=O.r*U,d+=O.g*U,h+=O.b*U;else if(R.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(R.sh.coefficients[H],U);T++}else if(R.isDirectionalLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let k=R.shadow,X=t.get(R);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=R.shadow.matrix,x++}n.directional[f]=H,f++}else if(R.isSpotLight){let H=e.get(R);H.position.setFromMatrixPosition(R.matrixWorld),H.color.copy(O).multiplyScalar(U),H.distance=W,H.coneCos=Math.cos(R.angle),H.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),H.decay=R.decay,n.spot[g]=H;let k=R.shadow;if(R.map&&(n.spotLightMap[S]=R.map,S++,k.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[g]=k.matrix,R.castShadow){let X=t.get(R);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,n.spotShadow[g]=X,n.spotShadowMap[g]=G,M++}g++}else if(R.isRectAreaLight){let H=e.get(R);H.color.copy(O).multiplyScalar(U),H.halfWidth.set(R.width*.5,0,0),H.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=H,m++}else if(R.isPointLight){let H=e.get(R);if(H.color.copy(R.color).multiplyScalar(R.intensity),H.distance=R.distance,H.decay=R.decay,R.castShadow){let k=R.shadow,X=t.get(R);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,X.shadowCameraNear=k.camera.near,X.shadowCameraFar=k.camera.far,n.pointShadow[_]=X,n.pointShadowMap[_]=G,n.pointShadowMatrix[_]=R.shadow.matrix,b++}n.point[_]=H,_++}else if(R.isHemisphereLight){let H=e.get(R);H.skyColor.copy(R.color).multiplyScalar(U),H.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[p]=H,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let A=n.hash;(A.directionalLength!==f||A.pointLength!==_||A.spotLength!==g||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==x||A.numPointShadows!==b||A.numSpotShadows!==M||A.numSpotMaps!==S||A.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+S-C,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=T,A.directionalLength=f,A.pointLength=_,A.spotLength=g,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=x,A.numPointShadows=b,A.numSpotShadows=M,A.numSpotMaps=S,A.numLightProbes=T,n.version=GL++)}function c(l,u){let d=0,h=0,f=0,_=0,g=0,m=u.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){let b=l[p];if(b.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),d++}else if(b.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(b.isPointLight){let M=n.point[h];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:c,state:n}}function US(i){let e=new jL(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function $L(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new US(i),e.set(r,[a])):s>=o.length?(a=new US(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var qL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,YL=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],ZL=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],BS=new nn,au=new V,Jy=new V;function JL(i,e,t){let n=new pc,r=new gt,s=new gt,o=new Yt,a=new Xf,c=new Yf,l={},u=t.maxTextureSize,d={[as]:ei,[ei]:as,[Qi]:Qi},h=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:qL,fragmentShader:XL}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let _=new Ki;_.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Pn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let p=this.type;this.render=function(C,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;C.type===Ub&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),C.type=Kl);let y=i.getRenderTarget(),E=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),O=i.state;O.setBlending(kr),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let U=p!==this.type;U&&T.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(G=>G.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,G=C.length;W<G;W++){let H=C[W],k=H.shadow;if(k===void 0){qe("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);let X=k.getFrameExtents();if(r.multiply(X),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,k.mapSize.y=s.y)),k.map===null||U===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===gc){if(H.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Ri(r.x,r.y,{format:Yo,type:Ur,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new Hs(r.x,r.y,wr),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=Fr,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=wn,k.map.depthTexture.magFilter=wn}else{H.isPointLight?(k.map=new Hl(r.x),k.map.depthTexture=new Wf(r.x,Sr)):(k.map=new Ri(r.x,r.y),k.map.depthTexture=new Hs(r.x,r.y,Sr)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=Fr;let I=i.state.buffers.depth.getReversed();this.type===Kl?(k.map.depthTexture.compareFunction=I?Qh:Kh,k.map.depthTexture.minFilter=Nn,k.map.depthTexture.magFilter=Nn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=wn,k.map.depthTexture.magFilter=wn)}k.camera.updateProjectionMatrix()}let ie=k.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<ie;I++){if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,I),i.clear();else{I===0&&(i.setRenderTarget(k.map),i.clear());let re=k.getViewport(I);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),O.viewport(o)}if(H.isPointLight){let re=k.camera,Oe=k.matrix,Ve=H.distance||re.far;Ve!==re.far&&(re.far=Ve,re.updateProjectionMatrix()),au.setFromMatrixPosition(H.matrixWorld),re.position.copy(au),Jy.copy(re.position),Jy.add(YL[I]),re.up.copy(ZL[I]),re.lookAt(Jy),re.updateMatrixWorld(),Oe.makeTranslation(-au.x,-au.y,-au.z),BS.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),k._frustum.setFromProjectionMatrix(BS,re.coordinateSystem,re.reversedDepth)}else k.updateMatrices(H);n=k.getFrustum(),M(T,A,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===gc&&x(k,A),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,E,R)};function x(C,T){let A=e.update(g);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ri(r.x,r.y,{format:Yo,type:Ur})),h.uniforms.shadow_pass.value=C.map.depthTexture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(T,null,A,h,g,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(T,null,A,f,g,null)}function b(C,T,A,y){let E=null,R=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)E=R;else if(E=A.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let O=E.uuid,U=T.uuid,W=l[O];W===void 0&&(W={},l[O]=W);let G=W[U];G===void 0&&(G=E.clone(),W[U]=G,T.addEventListener("dispose",S)),E=G}if(E.visible=T.visible,E.wireframe=T.wireframe,y===gc?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:d[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,A.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let O=i.properties.get(E);O.light=A}return E}function M(C,T,A,y,E){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===gc)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);let U=e.update(C),W=C.material;if(Array.isArray(W)){let G=U.groups;for(let H=0,k=G.length;H<k;H++){let X=G[H],ie=W[X.materialIndex];if(ie&&ie.visible){let I=b(C,ie,y,E);C.onBeforeShadow(i,C,T,A,U,I,X),i.renderBufferDirect(A,null,U,I,C,X),C.onAfterShadow(i,C,T,A,U,I,X)}}}else if(W.visible){let G=b(C,W,y,E);C.onBeforeShadow(i,C,T,A,U,G,null),i.renderBufferDirect(A,null,U,G,C,null),C.onAfterShadow(i,C,T,A,U,G,null)}}let O=C.children;for(let U=0,W=O.length;U<W;U++)M(O[U],T,A,y,E)}function S(C){C.target.removeEventListener("dispose",S);for(let A in l){let y=l[A],E=C.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}var KL={[rh]:sh,[oh]:lh,[ah]:uh,[Go]:ch,[sh]:rh,[lh]:oh,[uh]:ah,[ch]:Go};function QL(i,e){function t(){let N=!1,ue=new Yt,te=null,de=new Yt(0,0,0,0);return{setMask:function(ee){te!==ee&&!N&&(i.colorMask(ee,ee,ee,ee),te=ee)},setLocked:function(ee){N=ee},setClear:function(ee,Q,le,Le,Mt){Mt===!0&&(ee*=Le,Q*=Le,le*=Le),ue.set(ee,Q,le,Le),de.equals(ue)===!1&&(i.clearColor(ee,Q,le,Le),de.copy(ue))},reset:function(){N=!1,te=null,de.set(-1,0,0,0)}}}function n(){let N=!1,ue=!1,te=null,de=null,ee=null;return{setReversed:function(Q){if(ue!==Q){let le=e.get("EXT_clip_control");Q?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),ue=Q;let Le=ee;ee=null,this.setClear(Le)}},getReversed:function(){return ue},setTest:function(Q){Q?K(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(Q){te!==Q&&!N&&(i.depthMask(Q),te=Q)},setFunc:function(Q){if(ue&&(Q=KL[Q]),de!==Q){switch(Q){case rh:i.depthFunc(i.NEVER);break;case sh:i.depthFunc(i.ALWAYS);break;case oh:i.depthFunc(i.LESS);break;case Go:i.depthFunc(i.LEQUAL);break;case ah:i.depthFunc(i.EQUAL);break;case ch:i.depthFunc(i.GEQUAL);break;case lh:i.depthFunc(i.GREATER);break;case uh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=Q}},setLocked:function(Q){N=Q},setClear:function(Q){ee!==Q&&(ue&&(Q=1-Q),i.clearDepth(Q),ee=Q)},reset:function(){N=!1,te=null,de=null,ee=null,ue=!1}}}function r(){let N=!1,ue=null,te=null,de=null,ee=null,Q=null,le=null,Le=null,Mt=null;return{setTest:function(ge){N||(ge?K(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(ge){ue!==ge&&!N&&(i.stencilMask(ge),ue=ge)},setFunc:function(ge,Ae,nt){(te!==ge||de!==Ae||ee!==nt)&&(i.stencilFunc(ge,Ae,nt),te=ge,de=Ae,ee=nt)},setOp:function(ge,Ae,nt){(Q!==ge||le!==Ae||Le!==nt)&&(i.stencilOp(ge,Ae,nt),Q=ge,le=Ae,Le=nt)},setLocked:function(ge){N=ge},setClear:function(ge){Mt!==ge&&(i.clearStencil(ge),Mt=ge)},reset:function(){N=!1,ue=null,te=null,de=null,ee=null,Q=null,le=null,Le=null,Mt=null}}}let s=new t,o=new n,a=new r,c=new WeakMap,l=new WeakMap,u={},d={},h=new WeakMap,f=[],_=null,g=!1,m=null,p=null,x=null,b=null,M=null,S=null,C=null,T=new ht(0,0,0),A=0,y=!1,E=null,R=null,O=null,U=null,W=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,k=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=k>=1):X.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=k>=2);let ie=null,I={},re=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),Ve=new Yt().fromArray(re),Xe=new Yt().fromArray(Oe);function Qe(N,ue,te,de){let ee=new Uint8Array(4),Q=i.createTexture();i.bindTexture(N,Q),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let le=0;le<te;le++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(ue+le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return Q}let Y={};Y[i.TEXTURE_2D]=Qe(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(i.DEPTH_TEST),o.setFunc(Go),ke(!1),z(vy),K(i.CULL_FACE),He(kr);function K(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function fe(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Ie(N,ue){return d[N]!==ue?(i.bindFramebuffer(N,ue),d[N]=ue,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ue),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function Me(N,ue){let te=f,de=!1;if(N){te=h.get(ue),te===void 0&&(te=[],h.set(ue,te));let ee=N.textures;if(te.length!==ee.length||te[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,le=ee.length;Q<le;Q++)te[Q]=i.COLOR_ATTACHMENT0+Q;te.length=ee.length,de=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,de=!0);de&&i.drawBuffers(te)}function Ge(N){return _!==N?(i.useProgram(N),_=N,!0):!1}let vt={[Us]:i.FUNC_ADD,[Vb]:i.FUNC_SUBTRACT,[Hb]:i.FUNC_REVERSE_SUBTRACT};vt[zb]=i.MIN,vt[Gb]=i.MAX;let we={[Wb]:i.ZERO,[jb]:i.ONE,[$b]:i.SRC_COLOR,[Nf]:i.SRC_ALPHA,[Kb]:i.SRC_ALPHA_SATURATE,[Zb]:i.DST_COLOR,[Xb]:i.DST_ALPHA,[qb]:i.ONE_MINUS_SRC_COLOR,[Pf]:i.ONE_MINUS_SRC_ALPHA,[Jb]:i.ONE_MINUS_DST_COLOR,[Yb]:i.ONE_MINUS_DST_ALPHA,[Qb]:i.CONSTANT_COLOR,[eS]:i.ONE_MINUS_CONSTANT_COLOR,[tS]:i.CONSTANT_ALPHA,[nS]:i.ONE_MINUS_CONSTANT_ALPHA};function He(N,ue,te,de,ee,Q,le,Le,Mt,ge){if(N===kr){g===!0&&(fe(i.BLEND),g=!1);return}if(g===!1&&(K(i.BLEND),g=!0),N!==Bb){if(N!==m||ge!==y){if((p!==Us||M!==Us)&&(i.blendEquation(i.FUNC_ADD),p=Us,M=Us),ge)switch(N){case zo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xy:i.blendFunc(i.ONE,i.ONE);break;case My:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ey:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",N);break}else switch(N){case zo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xy:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case My:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ey:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",N);break}x=null,b=null,S=null,C=null,T.set(0,0,0),A=0,m=N,y=ge}return}ee=ee||ue,Q=Q||te,le=le||de,(ue!==p||ee!==M)&&(i.blendEquationSeparate(vt[ue],vt[ee]),p=ue,M=ee),(te!==x||de!==b||Q!==S||le!==C)&&(i.blendFuncSeparate(we[te],we[de],we[Q],we[le]),x=te,b=de,S=Q,C=le),(Le.equals(T)===!1||Mt!==A)&&(i.blendColor(Le.r,Le.g,Le.b,Mt),T.copy(Le),A=Mt),m=N,y=!1}function et(N,ue){N.side===Qi?fe(i.CULL_FACE):K(i.CULL_FACE);let te=N.side===ei;ue&&(te=!te),ke(te),N.blending===zo&&N.transparent===!1?He(kr):He(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),s.setMask(N.colorWrite);let de=N.stencilWrite;a.setTest(de),de&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Dt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(N){E!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),E=N)}function z(N){N!==Fb?(K(i.CULL_FACE),N!==R&&(N===vy?i.cullFace(i.BACK):N===kb?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),R=N}function P(N){N!==O&&(H&&i.lineWidth(N),O=N)}function Dt(N,ue,te){N?(K(i.POLYGON_OFFSET_FILL),(U!==ue||W!==te)&&(i.polygonOffset(ue,te),U=ue,W=te)):fe(i.POLYGON_OFFSET_FILL)}function rt(N){N?K(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function ze(N){N===void 0&&(N=i.TEXTURE0+G-1),ie!==N&&(i.activeTexture(N),ie=N)}function Ee(N,ue,te){te===void 0&&(ie===null?te=i.TEXTURE0+G-1:te=ie);let de=I[te];de===void 0&&(de={type:void 0,texture:void 0},I[te]=de),(de.type!==N||de.texture!==ue)&&(ie!==te&&(i.activeTexture(te),ie=te),i.bindTexture(N,ue||Y[N]),de.type=N,de.texture=ue)}function D(){let N=I[ie];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(N){je("WebGLState:",N)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(N){je("WebGLState:",N)}}function Z(){try{i.texSubImage2D(...arguments)}catch(N){je("WebGLState:",N)}}function J(){try{i.texSubImage3D(...arguments)}catch(N){je("WebGLState:",N)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(N){je("WebGLState:",N)}}function ve(){try{i.compressedTexSubImage3D(...arguments)}catch(N){je("WebGLState:",N)}}function se(){try{i.texStorage2D(...arguments)}catch(N){je("WebGLState:",N)}}function Te(){try{i.texStorage3D(...arguments)}catch(N){je("WebGLState:",N)}}function Se(){try{i.texImage2D(...arguments)}catch(N){je("WebGLState:",N)}}function ne(){try{i.texImage3D(...arguments)}catch(N){je("WebGLState:",N)}}function oe(N){Ve.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ve.copy(N))}function be(N){Xe.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Xe.copy(N))}function Ce(N,ue){let te=l.get(ue);te===void 0&&(te=new WeakMap,l.set(ue,te));let de=te.get(N);de===void 0&&(de=i.getUniformBlockIndex(ue,N.name),te.set(N,de))}function ae(N,ue){let de=l.get(ue).get(N);c.get(ue)!==de&&(i.uniformBlockBinding(ue,de,N.__bindingPointIndex),c.set(ue,de))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ie=null,I={},d={},h=new WeakMap,f=[],_=null,g=!1,m=null,p=null,x=null,b=null,M=null,S=null,C=null,T=new ht(0,0,0),A=0,y=!1,E=null,R=null,O=null,U=null,W=null,Ve.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:fe,bindFramebuffer:Ie,drawBuffers:Me,useProgram:Ge,setBlending:He,setMaterial:et,setFlipSided:ke,setCullFace:z,setLineWidth:P,setPolygonOffset:Dt,setScissorTest:rt,activeTexture:ze,bindTexture:Ee,unbindTexture:D,compressedTexImage2D:v,compressedTexImage3D:L,texImage2D:Se,texImage3D:ne,updateUBOMapping:Ce,uniformBlockBinding:ae,texStorage2D:se,texStorage3D:Te,texSubImage2D:Z,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:ve,scissor:oe,viewport:be,reset:$e}}function eF(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,u=new WeakMap,d,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,v){return f?new OffscreenCanvas(D,v):Ol("canvas")}function g(D,v,L){let Z=1,J=Ee(D);if((J.width>L||J.height>L)&&(Z=L/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let q=Math.floor(Z*J.width),ve=Math.floor(Z*J.height);d===void 0&&(d=_(q,ve));let se=v?_(q,ve):d;return se.width=q,se.height=ve,se.getContext("2d").drawImage(D,0,0,q,ve),qe("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+ve+")."),se}else return"data"in D&&qe("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),D;return D}function m(D){return D.generateMipmaps}function p(D){i.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(D,v,L,Z,J=!1){if(D!==null){if(i[D]!==void 0)return i[D];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let q=v;if(v===i.RED&&(L===i.FLOAT&&(q=i.R32F),L===i.HALF_FLOAT&&(q=i.R16F),L===i.UNSIGNED_BYTE&&(q=i.R8)),v===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.R8UI),L===i.UNSIGNED_SHORT&&(q=i.R16UI),L===i.UNSIGNED_INT&&(q=i.R32UI),L===i.BYTE&&(q=i.R8I),L===i.SHORT&&(q=i.R16I),L===i.INT&&(q=i.R32I)),v===i.RG&&(L===i.FLOAT&&(q=i.RG32F),L===i.HALF_FLOAT&&(q=i.RG16F),L===i.UNSIGNED_BYTE&&(q=i.RG8)),v===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.RG8UI),L===i.UNSIGNED_SHORT&&(q=i.RG16UI),L===i.UNSIGNED_INT&&(q=i.RG32UI),L===i.BYTE&&(q=i.RG8I),L===i.SHORT&&(q=i.RG16I),L===i.INT&&(q=i.RG32I)),v===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.RGB8UI),L===i.UNSIGNED_SHORT&&(q=i.RGB16UI),L===i.UNSIGNED_INT&&(q=i.RGB32UI),L===i.BYTE&&(q=i.RGB8I),L===i.SHORT&&(q=i.RGB16I),L===i.INT&&(q=i.RGB32I)),v===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),L===i.UNSIGNED_INT&&(q=i.RGBA32UI),L===i.BYTE&&(q=i.RGBA8I),L===i.SHORT&&(q=i.RGBA16I),L===i.INT&&(q=i.RGBA32I)),v===i.RGB&&(L===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),v===i.RGBA){let ve=J?Nl:xt.getTransfer(Z);L===i.FLOAT&&(q=i.RGBA32F),L===i.HALF_FLOAT&&(q=i.RGBA16F),L===i.UNSIGNED_BYTE&&(q=ve===At?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function M(D,v){let L;return D?v===null||v===Sr||v===yc?L=i.DEPTH24_STENCIL8:v===wr?L=i.DEPTH32F_STENCIL8:v===_c&&(L=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Sr||v===yc?L=i.DEPTH_COMPONENT24:v===wr?L=i.DEPTH_COMPONENT32F:v===_c&&(L=i.DEPTH_COMPONENT16),L}function S(D,v){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==wn&&D.minFilter!==Nn?Math.log2(Math.max(v.width,v.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?v.mipmaps.length:1}function C(D){let v=D.target;v.removeEventListener("dispose",C),A(v),v.isVideoTexture&&u.delete(v)}function T(D){let v=D.target;v.removeEventListener("dispose",T),E(v)}function A(D){let v=n.get(D);if(v.__webglInit===void 0)return;let L=D.source,Z=h.get(L);if(Z){let J=Z[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(D),Object.keys(Z).length===0&&h.delete(L)}n.remove(D)}function y(D){let v=n.get(D);i.deleteTexture(v.__webglTexture);let L=D.source,Z=h.get(L);delete Z[v.__cacheKey],o.memory.textures--}function E(D){let v=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let J=0;J<v.__webglFramebuffer[Z].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[Z][J]);else i.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let L=D.textures;for(let Z=0,J=L.length;Z<J;Z++){let q=n.get(L[Z]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(L[Z])}n.remove(D)}let R=0;function O(){R=0}function U(){let D=R;return D>=r.maxTextures&&qe("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),R+=1,D}function W(D){let v=[];return v.push(D.wrapS),v.push(D.wrapT),v.push(D.wrapR||0),v.push(D.magFilter),v.push(D.minFilter),v.push(D.anisotropy),v.push(D.internalFormat),v.push(D.format),v.push(D.type),v.push(D.generateMipmaps),v.push(D.premultiplyAlpha),v.push(D.flipY),v.push(D.unpackAlignment),v.push(D.colorSpace),v.join()}function G(D,v){let L=n.get(D);if(D.isVideoTexture&&rt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&L.__version!==D.version){let Z=D.image;if(Z===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(L,D,v);return}}else D.isExternalTexture&&(L.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+v)}function H(D,v){let L=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&L.__version!==D.version){Y(L,D,v);return}else D.isExternalTexture&&(L.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+v)}function k(D,v){let L=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&L.__version!==D.version){Y(L,D,v);return}t.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+v)}function X(D,v){let L=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&L.__version!==D.version){K(L,D,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+v)}let ie={[Of]:i.REPEAT,[Lr]:i.CLAMP_TO_EDGE,[Lf]:i.MIRRORED_REPEAT},I={[wn]:i.NEAREST,[sS]:i.NEAREST_MIPMAP_NEAREST,[eu]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[hh]:i.LINEAR_MIPMAP_NEAREST,[js]:i.LINEAR_MIPMAP_LINEAR},re={[cS]:i.NEVER,[hS]:i.ALWAYS,[lS]:i.LESS,[Kh]:i.LEQUAL,[uS]:i.EQUAL,[Qh]:i.GEQUAL,[dS]:i.GREATER,[fS]:i.NOTEQUAL};function Oe(D,v){if(v.type===wr&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Nn||v.magFilter===hh||v.magFilter===eu||v.magFilter===js||v.minFilter===Nn||v.minFilter===hh||v.minFilter===eu||v.minFilter===js)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,ie[v.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,ie[v.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,ie[v.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,I[v.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,I[v.minFilter]),v.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===wn||v.minFilter!==eu&&v.minFilter!==js||v.type===wr&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ve(D,v){let L=!1;D.__webglInit===void 0&&(D.__webglInit=!0,v.addEventListener("dispose",C));let Z=v.source,J=h.get(Z);J===void 0&&(J={},h.set(Z,J));let q=W(v);if(q!==D.__cacheKey){J[q]===void 0&&(J[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,L=!0),J[q].usedTimes++;let ve=J[D.__cacheKey];ve!==void 0&&(J[D.__cacheKey].usedTimes--,ve.usedTimes===0&&y(v)),D.__cacheKey=q,D.__webglTexture=J[q].texture}return L}function Xe(D,v,L){return Math.floor(Math.floor(D/L)/v)}function Qe(D,v,L,Z){let q=D.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,L,Z,v.data);else{q.sort((ne,oe)=>ne.start-oe.start);let ve=0;for(let ne=1;ne<q.length;ne++){let oe=q[ve],be=q[ne],Ce=oe.start+oe.count,ae=Xe(be.start,v.width,4),$e=Xe(oe.start,v.width,4);be.start<=Ce+1&&ae===$e&&Xe(be.start+be.count-1,v.width,4)===ae?oe.count=Math.max(oe.count,be.start+be.count-oe.start):(++ve,q[ve]=be)}q.length=ve+1;let se=i.getParameter(i.UNPACK_ROW_LENGTH),Te=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ne=0,oe=q.length;ne<oe;ne++){let be=q[ne],Ce=Math.floor(be.start/4),ae=Math.ceil(be.count/4),$e=Ce%v.width,N=Math.floor(Ce/v.width),ue=ae,te=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$e),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,$e,N,ue,te,L,Z,v.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function Y(D,v,L){let Z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=i.TEXTURE_3D);let J=Ve(D,v),q=v.source;t.bindTexture(Z,D.__webglTexture,i.TEXTURE0+L);let ve=n.get(q);if(q.version!==ve.__version||J===!0){t.activeTexture(i.TEXTURE0+L);let se=xt.getPrimaries(xt.workingColorSpace),Te=v.colorSpace===us?null:xt.getPrimaries(v.colorSpace),Se=v.colorSpace===us||se===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ne=g(v.image,!1,r.maxTextureSize);ne=ze(v,ne);let oe=s.convert(v.format,v.colorSpace),be=s.convert(v.type),Ce=b(v.internalFormat,oe,be,v.colorSpace,v.isVideoTexture);Oe(Z,v);let ae,$e=v.mipmaps,N=v.isVideoTexture!==!0,ue=ve.__version===void 0||J===!0,te=q.dataReady,de=S(v,ne);if(v.isDepthTexture)Ce=M(v.format===$s,v.type),ue&&(N?t.texStorage2D(i.TEXTURE_2D,1,Ce,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Ce,ne.width,ne.height,0,oe,be,null));else if(v.isDataTexture)if($e.length>0){N&&ue&&t.texStorage2D(i.TEXTURE_2D,de,Ce,$e[0].width,$e[0].height);for(let ee=0,Q=$e.length;ee<Q;ee++)ae=$e[ee],N?te&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ae.width,ae.height,oe,be,ae.data):t.texImage2D(i.TEXTURE_2D,ee,Ce,ae.width,ae.height,0,oe,be,ae.data);v.generateMipmaps=!1}else N?(ue&&t.texStorage2D(i.TEXTURE_2D,de,Ce,ne.width,ne.height),te&&Qe(v,ne,oe,be)):t.texImage2D(i.TEXTURE_2D,0,Ce,ne.width,ne.height,0,oe,be,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){N&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Ce,$e[0].width,$e[0].height,ne.depth);for(let ee=0,Q=$e.length;ee<Q;ee++)if(ae=$e[ee],v.format!==er)if(oe!==null)if(N){if(te)if(v.layerUpdates.size>0){let le=jy(ae.width,ae.height,v.format,v.type);for(let Le of v.layerUpdates){let Mt=ae.data.subarray(Le*le/ae.data.BYTES_PER_ELEMENT,(Le+1)*le/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Le,ae.width,ae.height,1,oe,Mt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ae.width,ae.height,ne.depth,oe,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Ce,ae.width,ae.height,ne.depth,0,ae.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?te&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ae.width,ae.height,ne.depth,oe,be,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Ce,ae.width,ae.height,ne.depth,0,oe,be,ae.data)}else{N&&ue&&t.texStorage2D(i.TEXTURE_2D,de,Ce,$e[0].width,$e[0].height);for(let ee=0,Q=$e.length;ee<Q;ee++)ae=$e[ee],v.format!==er?oe!==null?N?te&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,ae.width,ae.height,oe,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Ce,ae.width,ae.height,0,ae.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?te&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ae.width,ae.height,oe,be,ae.data):t.texImage2D(i.TEXTURE_2D,ee,Ce,ae.width,ae.height,0,oe,be,ae.data)}else if(v.isDataArrayTexture)if(N){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Ce,ne.width,ne.height,ne.depth),te)if(v.layerUpdates.size>0){let ee=jy(ne.width,ne.height,v.format,v.type);for(let Q of v.layerUpdates){let le=ne.data.subarray(Q*ee/ne.data.BYTES_PER_ELEMENT,(Q+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ne.width,ne.height,1,oe,be,le)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,oe,be,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,ne.width,ne.height,ne.depth,0,oe,be,ne.data);else if(v.isData3DTexture)N?(ue&&t.texStorage3D(i.TEXTURE_3D,de,Ce,ne.width,ne.height,ne.depth),te&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,oe,be,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,ne.width,ne.height,ne.depth,0,oe,be,ne.data);else if(v.isFramebufferTexture){if(ue)if(N)t.texStorage2D(i.TEXTURE_2D,de,Ce,ne.width,ne.height);else{let ee=ne.width,Q=ne.height;for(let le=0;le<de;le++)t.texImage2D(i.TEXTURE_2D,le,Ce,ee,Q,0,oe,be,null),ee>>=1,Q>>=1}}else if($e.length>0){if(N&&ue){let ee=Ee($e[0]);t.texStorage2D(i.TEXTURE_2D,de,Ce,ee.width,ee.height)}for(let ee=0,Q=$e.length;ee<Q;ee++)ae=$e[ee],N?te&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,oe,be,ae):t.texImage2D(i.TEXTURE_2D,ee,Ce,oe,be,ae);v.generateMipmaps=!1}else if(N){if(ue){let ee=Ee(ne);t.texStorage2D(i.TEXTURE_2D,de,Ce,ee.width,ee.height)}te&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,be,ne)}else t.texImage2D(i.TEXTURE_2D,0,Ce,oe,be,ne);m(v)&&p(Z),ve.__version=q.version,v.onUpdate&&v.onUpdate(v)}D.__version=v.version}function K(D,v,L){if(v.image.length!==6)return;let Z=Ve(D,v),J=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+L);let q=n.get(J);if(J.version!==q.__version||Z===!0){t.activeTexture(i.TEXTURE0+L);let ve=xt.getPrimaries(xt.workingColorSpace),se=v.colorSpace===us?null:xt.getPrimaries(v.colorSpace),Te=v.colorSpace===us||ve===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let Se=v.isCompressedTexture||v.image[0].isCompressedTexture,ne=v.image[0]&&v.image[0].isDataTexture,oe=[];for(let Q=0;Q<6;Q++)!Se&&!ne?oe[Q]=g(v.image[Q],!0,r.maxCubemapSize):oe[Q]=ne?v.image[Q].image:v.image[Q],oe[Q]=ze(v,oe[Q]);let be=oe[0],Ce=s.convert(v.format,v.colorSpace),ae=s.convert(v.type),$e=b(v.internalFormat,Ce,ae,v.colorSpace),N=v.isVideoTexture!==!0,ue=q.__version===void 0||Z===!0,te=J.dataReady,de=S(v,be);Oe(i.TEXTURE_CUBE_MAP,v);let ee;if(Se){N&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,$e,be.width,be.height);for(let Q=0;Q<6;Q++){ee=oe[Q].mipmaps;for(let le=0;le<ee.length;le++){let Le=ee[le];v.format!==er?Ce!==null?N?te&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,0,0,Le.width,Le.height,Ce,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,$e,Le.width,Le.height,0,Le.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,0,0,Le.width,Le.height,Ce,ae,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le,$e,Le.width,Le.height,0,Ce,ae,Le.data)}}}else{if(ee=v.mipmaps,N&&ue){ee.length>0&&de++;let Q=Ee(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,$e,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ne){N?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,oe[Q].width,oe[Q].height,Ce,ae,oe[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$e,oe[Q].width,oe[Q].height,0,Ce,ae,oe[Q].data);for(let le=0;le<ee.length;le++){let Mt=ee[le].image[Q].image;N?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,0,0,Mt.width,Mt.height,Ce,ae,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,$e,Mt.width,Mt.height,0,Ce,ae,Mt.data)}}else{N?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ce,ae,oe[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,$e,Ce,ae,oe[Q]);for(let le=0;le<ee.length;le++){let Le=ee[le];N?te&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,0,0,Ce,ae,Le.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,le+1,$e,Ce,ae,Le.image[Q])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),q.__version=J.version,v.onUpdate&&v.onUpdate(v)}D.__version=v.version}function fe(D,v,L,Z,J,q){let ve=s.convert(L.format,L.colorSpace),se=s.convert(L.type),Te=b(L.internalFormat,ve,se,L.colorSpace),Se=n.get(v),ne=n.get(L);if(ne.__renderTarget=v,!Se.__hasExternalTextures){let oe=Math.max(1,v.width>>q),be=Math.max(1,v.height>>q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,q,Te,oe,be,v.depth,0,ve,se,null):t.texImage2D(J,q,Te,oe,be,0,ve,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Dt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,J,ne.__webglTexture,0,P(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,J,ne.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(D,v,L){if(i.bindRenderbuffer(i.RENDERBUFFER,D),v.depthBuffer){let Z=v.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,q=M(v.stencilBuffer,J),ve=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Dt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(v),q,v.width,v.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(v),q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,D)}else{let Z=v.textures;for(let J=0;J<Z.length;J++){let q=Z[J],ve=s.convert(q.format,q.colorSpace),se=s.convert(q.type),Te=b(q.internalFormat,ve,se,q.colorSpace);Dt(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(v),Te,v.width,v.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(v),Te,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Te,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(D,v,L){let Z=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=n.get(v.depthTexture);if(J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z){if(J.__webglInit===void 0&&(J.__webglInit=!0,v.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,v.depthTexture);let Se=s.convert(v.depthTexture.format),ne=s.convert(v.depthTexture.type),oe;v.depthTexture.format===Fr?oe=i.DEPTH_COMPONENT24:v.depthTexture.format===$s&&(oe=i.DEPTH24_STENCIL8);for(let be=0;be<6;be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,oe,v.width,v.height,0,Se,ne,null)}}else G(v.depthTexture,0);let q=J.__webglTexture,ve=P(v),se=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,Te=v.depthTexture.format===$s?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Fr)Dt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,se,q,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,Te,se,q,0);else if(v.depthTexture.format===$s)Dt(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,se,q,0,ve):i.framebufferTexture2D(i.FRAMEBUFFER,Te,se,q,0);else throw new Error("Unknown depthTexture format")}function Ge(D){let v=n.get(D),L=D.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==D.depthTexture){let Z=D.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=Z}if(D.depthTexture&&!v.__autoAllocateDepthBuffer)if(L)for(let Z=0;Z<6;Z++)Me(v.__webglFramebuffer[Z],D,Z);else{let Z=D.texture.mipmaps;Z&&Z.length>0?Me(v.__webglFramebuffer[0],D,0):Me(v.__webglFramebuffer,D,0)}else if(L){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=i.createRenderbuffer(),Ie(v.__webglDepthbuffer[Z],D,!1);else{let J=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}else{let Z=D.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ie(v.__webglDepthbuffer,D,!1);else{let J=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(D,v,L){let Z=n.get(D);v!==void 0&&fe(Z.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&Ge(D)}function we(D){let v=D.texture,L=n.get(D),Z=n.get(v);D.addEventListener("dispose",T);let J=D.textures,q=D.isWebGLCubeRenderTarget===!0,ve=J.length>1;if(ve||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=v.version,o.memory.textures++),q){L.__webglFramebuffer=[];for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[se]=[];for(let Te=0;Te<v.mipmaps.length;Te++)L.__webglFramebuffer[se][Te]=i.createFramebuffer()}else L.__webglFramebuffer[se]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let se=0;se<v.mipmaps.length;se++)L.__webglFramebuffer[se]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(ve)for(let se=0,Te=J.length;se<Te;se++){let Se=n.get(J[se]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&Dt(D)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let se=0;se<J.length;se++){let Te=J[se];L.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[se]);let Se=s.convert(Te.format,Te.colorSpace),ne=s.convert(Te.type),oe=b(Te.internalFormat,Se,ne,Te.colorSpace,D.isXRRenderTarget===!0),be=P(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,be,oe,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,L.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(L.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,v);for(let se=0;se<6;se++)if(v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)fe(L.__webglFramebuffer[se][Te],D,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Te);else fe(L.__webglFramebuffer[se],D,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let se=0,Te=J.length;se<Te;se++){let Se=J[se],ne=n.get(Se),oe=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(oe=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,ne.__webglTexture),Oe(oe,Se),fe(L.__webglFramebuffer,D,Se,i.COLOR_ATTACHMENT0+se,oe,0),m(Se)&&p(oe)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(se=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,Z.__webglTexture),Oe(se,v),v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)fe(L.__webglFramebuffer[Te],D,v,i.COLOR_ATTACHMENT0,se,Te);else fe(L.__webglFramebuffer,D,v,i.COLOR_ATTACHMENT0,se,0);m(v)&&p(se),t.unbindTexture()}D.depthBuffer&&Ge(D)}function He(D){let v=D.textures;for(let L=0,Z=v.length;L<Z;L++){let J=v[L];if(m(J)){let q=x(D),ve=n.get(J).__webglTexture;t.bindTexture(q,ve),p(q),t.unbindTexture()}}}let et=[],ke=[];function z(D){if(D.samples>0){if(Dt(D)===!1){let v=D.textures,L=D.width,Z=D.height,J=i.COLOR_BUFFER_BIT,q=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(D),se=v.length>1;if(se)for(let Se=0;Se<v.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let Te=D.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Se=0;Se<v.length;Se++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Se]);let ne=n.get(v[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,L,Z,0,0,L,Z,J,i.NEAREST),c===!0&&(et.length=0,ke.length=0,et.push(i.COLOR_ATTACHMENT0+Se),D.depthBuffer&&D.resolveDepthBuffer===!1&&(et.push(q),ke.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let Se=0;Se<v.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,ve.__webglColorRenderbuffer[Se]);let ne=n.get(v[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){let v=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function P(D){return Math.min(r.maxSamples,D.samples)}function Dt(D){let v=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function rt(D){let v=o.render.frame;u.get(D)!==v&&(u.set(D,v),D.update())}function ze(D,v){let L=D.colorSpace,Z=D.format,J=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||L!==Wo&&L!==us&&(xt.getTransfer(L)===At?(Z!==er||J!==mi)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",L)),v}function Ee(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=k,this.setTextureCube=X,this.rebindTextures=vt,this.setupRenderTarget=we,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function tF(i,e){function t(n,r=us){let s,o=xt.getTransfer(r);if(n===mi)return i.UNSIGNED_BYTE;if(n===mh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Py)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Oy)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ry)return i.BYTE;if(n===Ny)return i.SHORT;if(n===_c)return i.UNSIGNED_SHORT;if(n===ph)return i.INT;if(n===Sr)return i.UNSIGNED_INT;if(n===wr)return i.FLOAT;if(n===Ur)return i.HALF_FLOAT;if(n===Ly)return i.ALPHA;if(n===Fy)return i.RGB;if(n===er)return i.RGBA;if(n===Fr)return i.DEPTH_COMPONENT;if(n===$s)return i.DEPTH_STENCIL;if(n===ky)return i.RED;if(n===_h)return i.RED_INTEGER;if(n===Yo)return i.RG;if(n===yh)return i.RG_INTEGER;if(n===vh)return i.RGBA_INTEGER;if(n===tu||n===nu||n===iu||n===ru)if(o===At)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===tu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===iu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ru)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===tu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===iu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ru)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xh||n===Mh||n===Eh||n===bh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sh||n===wh||n===Th||n===Ch||n===Dh||n===Ah||n===Ih)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Sh||n===wh)return o===At?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Th)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ch)return s.COMPRESSED_R11_EAC;if(n===Dh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Ah)return s.COMPRESSED_RG11_EAC;if(n===Ih)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Rh||n===Nh||n===Ph||n===Oh||n===Lh||n===Fh||n===kh||n===Uh||n===Bh||n===Vh||n===Hh||n===zh||n===Gh||n===Wh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Rh)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nh)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ph)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oh)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lh)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fh)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kh)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uh)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bh)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Vh)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hh)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zh)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gh)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wh)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jh||n===$h||n===qh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===jh)return o===At?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$h)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xh||n===Yh||n===Zh||n===Jh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Xh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Yh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yc?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var nF=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iF=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,s0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Gl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Pi({vertexShader:nF,fragmentShader:iF,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pn(new Wl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},o0=class extends cs{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,_=null,g=typeof XRWebGLBinding<"u",m=new s0,p={},x=t.getContextAttributes(),b=null,M=null,S=[],C=[],T=new gt,A=null,y=new Rn;y.viewport=new Yt;let E=new Rn;E.viewport=new Yt;let R=[y,E],O=new ih,U=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=S[Y];return K===void 0&&(K=new hc,S[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=S[Y];return K===void 0&&(K=new hc,S[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=S[Y];return K===void 0&&(K=new hc,S[Y]=K),K.getHandSpace()};function G(Y){let K=C.indexOf(Y.inputSource);if(K===-1)return;let fe=S[K];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,l||o),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function H(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",k);for(let Y=0;Y<S.length;Y++){let K=C[Y];K!==null&&(C[Y]=null,S[Y].disconnect(K))}U=null,W=null,m.reset();for(let Y in p)delete p[Y];e.setRenderTarget(b),f=null,h=null,d=null,r=null,M=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",H),r.addEventListener("inputsourceschange",k),x.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(T),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ie=null,Me=null;x.depth&&(Me=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=x.stencil?$s:Fr,Ie=x.stencil?yc:Sr);let Ge={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Ge),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new Ri(h.textureWidth,h.textureHeight,{format:er,type:mi,depthTexture:new Hs(h.textureWidth,h.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{let fe={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Ri(f.framebufferWidth,f.framebufferHeight,{format:er,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Qe.setContext(r),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(Y){for(let K=0;K<Y.removed.length;K++){let fe=Y.removed[K],Ie=C.indexOf(fe);Ie>=0&&(C[Ie]=null,S[Ie].disconnect(fe))}for(let K=0;K<Y.added.length;K++){let fe=Y.added[K],Ie=C.indexOf(fe);if(Ie===-1){for(let Ge=0;Ge<S.length;Ge++)if(Ge>=C.length){C.push(fe),Ie=Ge;break}else if(C[Ge]===null){C[Ge]=fe,Ie=Ge;break}if(Ie===-1)break}let Me=S[Ie];Me&&Me.connect(fe)}}let X=new V,ie=new V;function I(Y,K,fe){X.setFromMatrixPosition(K.matrixWorld),ie.setFromMatrixPosition(fe.matrixWorld);let Ie=X.distanceTo(ie),Me=K.projectionMatrix.elements,Ge=fe.projectionMatrix.elements,vt=Me[14]/(Me[10]-1),we=Me[14]/(Me[10]+1),He=(Me[9]+1)/Me[5],et=(Me[9]-1)/Me[5],ke=(Me[8]-1)/Me[0],z=(Ge[8]+1)/Ge[0],P=vt*ke,Dt=vt*z,rt=Ie/(-ke+z),ze=rt*-ke;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ze),Y.translateZ(rt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Me[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{let Ee=vt+rt,D=we+rt,v=P-ze,L=Dt+(Ie-ze),Z=He*we/D*Ee,J=et*we/D*Ee;Y.projectionMatrix.makePerspective(v,L,Z,J,Ee,D),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function re(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let K=Y.near,fe=Y.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),O.near=E.near=y.near=K,O.far=E.far=y.far=fe,(U!==O.near||W!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),U=O.near,W=O.far),O.layers.mask=Y.layers.mask|6,y.layers.mask=O.layers.mask&3,E.layers.mask=O.layers.mask&5;let Ie=Y.parent,Me=O.cameras;re(O,Ie);for(let Ge=0;Ge<Me.length;Ge++)re(Me[Ge],Ie);Me.length===2?I(O,y,E):O.projectionMatrix.copy(y.projectionMatrix),Oe(Y,O,Ie)};function Oe(Y,K,fe){fe===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=kf*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(Y){c=Y,h!==null&&(h.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(Y){return p[Y]};let Ve=null;function Xe(Y,K){if(u=K.getViewerPose(l||o),_=K,u!==null){let fe=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ie=!1;fe.length!==O.cameras.length&&(O.cameras.length=0,Ie=!0);for(let we=0;we<fe.length;we++){let He=fe[we],et=null;if(f!==null)et=f.getViewport(He);else{let z=d.getViewSubImage(h,He);et=z.viewport,we===0&&(e.setRenderTargetTextures(M,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(M))}let ke=R[we];ke===void 0&&(ke=new Rn,ke.layers.enable(we),ke.viewport=new Yt,R[we]=ke),ke.matrix.fromArray(He.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(He.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(et.x,et.y,et.width,et.height),we===0&&(O.matrix.copy(ke.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Ie===!0&&O.cameras.push(ke)}let Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){d=n.getBinding();let we=d.getDepthInformation(fe[0]);we&&we.isValid&&we.texture&&m.init(we,r.renderState)}if(Me&&Me.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let we=0;we<fe.length;we++){let He=fe[we].camera;if(He){let et=p[He];et||(et=new Gl,p[He]=et);let ke=d.getCameraImage(He);et.sourceTexture=ke}}}}for(let fe=0;fe<S.length;fe++){let Ie=C[fe],Me=S[fe];Ie!==null&&Me!==void 0&&Me.update(Ie,K,l||o)}Ve&&Ve(Y,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),_=null}let Qe=new VS;Qe.setAnimationLoop(Xe),this.setAnimationLoop=function(Y){Ve=Y},this.dispose=function(){}}},Ko=new Ni,rF=new nn;function sF(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,zy(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,x,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ei&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ei&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p),b=x.envMap,M=x.envMapRotation;b&&(m.envMap.value=b,Ko.copy(M),Ko.x*=-1,Ko.y*=-1,Ko.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ko.y*=-1,Ko.z*=-1),m.envMapRotation.value.setFromMatrix4(rF.makeRotationFromEuler(Ko)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ei&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function oF(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,b){let M=b.program;n.uniformBlockBinding(x,M)}function l(x,b){let M=r[x.id];M===void 0&&(_(x),M=u(x),r[x.id]=M,x.addEventListener("dispose",m));let S=b.program;n.updateUBOMapping(x,S);let C=e.render.frame;s[x.id]!==C&&(h(x),s[x.id]=C)}function u(x){let b=d();x.__bindingPointIndex=b;let M=i.createBuffer(),S=x.__size,C=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,S,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let b=r[x.id],M=x.uniforms,S=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let C=0,T=M.length;C<T;C++){let A=Array.isArray(M[C])?M[C]:[M[C]];for(let y=0,E=A.length;y<E;y++){let R=A[y];if(f(R,C,y,S)===!0){let O=R.__offset,U=Array.isArray(R.value)?R.value:[R.value],W=0;for(let G=0;G<U.length;G++){let H=U[G],k=g(H);typeof H=="number"||typeof H=="boolean"?(R.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,O+W,R.__data)):H.isMatrix3?(R.__data[0]=H.elements[0],R.__data[1]=H.elements[1],R.__data[2]=H.elements[2],R.__data[3]=0,R.__data[4]=H.elements[3],R.__data[5]=H.elements[4],R.__data[6]=H.elements[5],R.__data[7]=0,R.__data[8]=H.elements[6],R.__data[9]=H.elements[7],R.__data[10]=H.elements[8],R.__data[11]=0):(H.toArray(R.__data,W),W+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,b,M,S){let C=x.value,T=b+"_"+M;if(S[T]===void 0)return typeof C=="number"||typeof C=="boolean"?S[T]=C:S[T]=C.clone(),!0;{let A=S[T];if(typeof C=="number"||typeof C=="boolean"){if(A!==C)return S[T]=C,!0}else if(A.equals(C)===!1)return A.copy(C),!0}return!1}function _(x){let b=x.uniforms,M=0,S=16;for(let T=0,A=b.length;T<A;T++){let y=Array.isArray(b[T])?b[T]:[b[T]];for(let E=0,R=y.length;E<R;E++){let O=y[E],U=Array.isArray(O.value)?O.value:[O.value];for(let W=0,G=U.length;W<G;W++){let H=U[W],k=g(H),X=M%S,ie=X%k.boundary,I=X+ie;M+=ie,I!==0&&S-I<k.storage&&(M+=S-I),O.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=k.storage}}}let C=M%S;return C>0&&(M+=S-C),x.__size=M,x.__cache={},this}function g(x){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",x),b}function m(x){let b=x.target;b.removeEventListener("dispose",m);let M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(let x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var aF=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Br=null;function cF(){return Br===null&&(Br=new Gf(aF,16,16,Yo,Ur),Br.name="DFG_LUT",Br.minFilter=Nn,Br.magFilter=Nn,Br.wrapS=Lr,Br.wrapT=Lr,Br.generateMipmaps=!1,Br.needsUpdate=!0),Br}var ip=class{constructor(e={}){let{canvas:t=pS(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=mi}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let g=f,m=new Set([vh,yh,_h]),p=new Set([mi,Sr,_c,yc,mh,gh]),x=new Uint32Array(4),b=new Int32Array(4),M=null,S=null,C=[],T=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=br,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,E=!1;this._outputColorSpace=Ai;let R=0,O=0,U=null,W=-1,G=null,H=new Yt,k=new Yt,X=null,ie=new ht(0),I=0,re=t.width,Oe=t.height,Ve=1,Xe=null,Qe=null,Y=new Yt(0,0,re,Oe),K=new Yt(0,0,re,Oe),fe=!1,Ie=new pc,Me=!1,Ge=!1,vt=new nn,we=new V,He=new Yt,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function z(){return U===null?Ve:1}let P=n;function Dt(w,F){return t.getContext(w,F)}try{let w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"182"}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Mt,!1),t.addEventListener("webglcontextcreationerror",ge,!1),P===null){let F="webgl2";if(P=Dt(F,w),P===null)throw Dt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw je("WebGLRenderer: "+w.message),w}let rt,ze,Ee,D,v,L,Z,J,q,ve,se,Te,Se,ne,oe,be,Ce,ae,$e,N,ue,te,de,ee;function Q(){rt=new mO(P),rt.init(),te=new tF(P,rt),ze=new oO(P,rt,e,te),Ee=new QL(P,rt),ze.reversedDepthBuffer&&h&&Ee.buffers.depth.setReversed(!0),D=new yO(P),v=new UL,L=new eF(P,rt,Ee,v,ze,te,D),Z=new cO(y),J=new pO(y),q=new ER(P),de=new rO(P,q),ve=new gO(P,q,D,de),se=new xO(P,ve,q,D),$e=new vO(P,ze,L),be=new aO(v),Te=new kL(y,Z,J,rt,ze,de,be),Se=new sF(y,v),ne=new VL,oe=new $L(rt),ae=new iO(y,Z,J,Ee,se,_,c),Ce=new JL(y,se,ze),ee=new oF(P,D,ze,Ee),N=new sO(P,rt,D),ue=new _O(P,rt,D),D.programs=Te.programs,y.capabilities=ze,y.extensions=rt,y.properties=v,y.renderLists=ne,y.shadowMap=Ce,y.state=Ee,y.info=D}Q(),g!==mi&&(A=new EO(g,t.width,t.height,r,s));let le=new o0(y,P);this.xr=le,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let w=rt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=rt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Ve},this.setPixelRatio=function(w){w!==void 0&&(Ve=w,this.setSize(re,Oe,!1))},this.getSize=function(w){return w.set(re,Oe)},this.setSize=function(w,F,$=!0){if(le.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}re=w,Oe=F,t.width=Math.floor(w*Ve),t.height=Math.floor(F*Ve),$===!0&&(t.style.width=w+"px",t.style.height=F+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(re*Ve,Oe*Ve).floor()},this.setDrawingBufferSize=function(w,F,$){re=w,Oe=F,Ve=$,t.width=Math.floor(w*$),t.height=Math.floor(F*$),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(g===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(H)},this.getViewport=function(w){return w.copy(Y)},this.setViewport=function(w,F,$,j){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,F,$,j),Ee.viewport(H.copy(Y).multiplyScalar(Ve).round())},this.getScissor=function(w){return w.copy(K)},this.setScissor=function(w,F,$,j){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,F,$,j),Ee.scissor(k.copy(K).multiplyScalar(Ve).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(w){Ee.setScissorTest(fe=w)},this.setOpaqueSort=function(w){Xe=w},this.setTransparentSort=function(w){Qe=w},this.getClearColor=function(w){return w.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,$=!0){let j=0;if(w){let B=!1;if(U!==null){let ce=U.texture.format;B=m.has(ce)}if(B){let ce=U.texture.type,_e=p.has(ce),he=ae.getClearColor(),ye=ae.getClearAlpha(),Re=he.r,We=he.g,Ue=he.b;_e?(x[0]=Re,x[1]=We,x[2]=Ue,x[3]=ye,P.clearBufferuiv(P.COLOR,0,x)):(b[0]=Re,b[1]=We,b[2]=Ue,b[3]=ye,P.clearBufferiv(P.COLOR,0,b))}else j|=P.COLOR_BUFFER_BIT}F&&(j|=P.DEPTH_BUFFER_BIT),$&&(j|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Mt,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ae.dispose(),ne.dispose(),oe.dispose(),v.dispose(),Z.dispose(),J.dispose(),se.dispose(),de.dispose(),ee.dispose(),Te.dispose(),le.dispose(),le.removeEventListener("sessionstart",an),le.removeEventListener("sessionend",at),Rt.stop()};function Le(w){w.preventDefault(),Hy("WebGLRenderer: Context Lost."),E=!0}function Mt(){Hy("WebGLRenderer: Context Restored."),E=!1;let w=D.autoReset,F=Ce.enabled,$=Ce.autoUpdate,j=Ce.needsUpdate,B=Ce.type;Q(),D.autoReset=w,Ce.enabled=F,Ce.autoUpdate=$,Ce.needsUpdate=j,Ce.type=B}function ge(w){je("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ae(w){let F=w.target;F.removeEventListener("dispose",Ae),nt(F)}function nt(w){pe(w),v.remove(w)}function pe(w){let F=v.get(w).programs;F!==void 0&&(F.forEach(function($){Te.releaseProgram($)}),w.isShaderMaterial&&Te.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,$,j,B,ce){F===null&&(F=et);let _e=B.isMesh&&B.matrixWorld.determinant()<0,he=hn(w,F,$,j,B);Ee.setMaterial(j,_e);let ye=$.index,Re=1;if(j.wireframe===!0){if(ye=ve.getWireframeAttribute($),ye===void 0)return;Re=2}let We=$.drawRange,Ue=$.attributes.position,ct=We.start*Re,Ot=(We.start+We.count)*Re;ce!==null&&(ct=Math.max(ct,ce.start*Re),Ot=Math.min(Ot,(ce.start+ce.count)*Re)),ye!==null?(ct=Math.max(ct,0),Ot=Math.min(Ot,ye.count)):Ue!=null&&(ct=Math.max(ct,0),Ot=Math.min(Ot,Ue.count));let Qt=Ot-ct;if(Qt<0||Qt===1/0)return;de.setup(B,j,he,$,ye);let en,Ut=N;if(ye!==null&&(en=q.get(ye),Ut=ue,Ut.setIndex(en)),B.isMesh)j.wireframe===!0?(Ee.setLineWidth(j.wireframeLinewidth*z()),Ut.setMode(P.LINES)):Ut.setMode(P.TRIANGLES);else if(B.isLine){let Be=j.linewidth;Be===void 0&&(Be=1),Ee.setLineWidth(Be*z()),B.isLineSegments?Ut.setMode(P.LINES):B.isLineLoop?Ut.setMode(P.LINE_LOOP):Ut.setMode(P.LINE_STRIP)}else B.isPoints?Ut.setMode(P.POINTS):B.isSprite&&Ut.setMode(P.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)lc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))Ut.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Be=B._multiDrawStarts,Nt=B._multiDrawCounts,bt=B._multiDrawCount,Ei=ye?q.get(ye).bytesPerElement:1,xa=v.get(j).currentProgram.getUniforms();for(let bi=0;bi<bt;bi++)xa.setValue(P,"_gl_DrawID",bi),Ut.render(Be[bi]/Ei,Nt[bi])}else if(B.isInstancedMesh)Ut.renderInstances(ct,Qt,B.count);else if($.isInstancedBufferGeometry){let Be=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Nt=Math.min($.instanceCount,Be);Ut.renderInstances(ct,Qt,Nt)}else Ut.render(ct,Qt)};function Ye(w,F,$){w.transparent===!0&&w.side===Qi&&w.forceSinglePass===!1?(w.side=ei,w.needsUpdate=!0,Pt(w,F,$),w.side=as,w.needsUpdate=!0,Pt(w,F,$),w.side=Qi):Pt(w,F,$)}this.compile=function(w,F,$=null){$===null&&($=w),S=oe.get($),S.init(F),T.push(S),$.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(S.pushLight(B),B.castShadow&&S.pushShadow(B))}),w!==$&&w.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(S.pushLight(B),B.castShadow&&S.pushShadow(B))}),S.setupLights();let j=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ce=B.material;if(ce)if(Array.isArray(ce))for(let _e=0;_e<ce.length;_e++){let he=ce[_e];Ye(he,$,B),j.add(he)}else Ye(ce,$,B),j.add(ce)}),S=T.pop(),j},this.compileAsync=function(w,F,$=null){let j=this.compile(w,F,$);return new Promise(B=>{function ce(){if(j.forEach(function(_e){v.get(_e).currentProgram.isReady()&&j.delete(_e)}),j.size===0){B(w);return}setTimeout(ce,10)}rt.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Pe=null;function Ze(w){Pe&&Pe(w)}function an(){Rt.stop()}function at(){Rt.start()}let Rt=new VS;Rt.setAnimationLoop(Ze),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(w){Pe=w,le.setAnimationLoop(w),w===null?Rt.stop():Rt.start()},le.addEventListener("sessionstart",an),le.addEventListener("sessionend",at),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;let $=le.enabled===!0&&le.isPresenting===!0,j=A!==null&&(U===null||$)&&A.begin(y,U);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(F),F=le.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,F,U),S=oe.get(w,T.length),S.init(F),T.push(S),vt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ie.setFromProjectionMatrix(vt,Er,F.reversedDepth),Ge=this.localClippingEnabled,Me=be.init(this.clippingPlanes,Ge),M=ne.get(w,C.length),M.init(),C.push(M),le.enabled===!0&&le.isPresenting===!0){let _e=y.xr.getDepthSensingMesh();_e!==null&&ln(_e,F,-1/0,y.sortObjects)}ln(w,F,0,y.sortObjects),M.finish(),y.sortObjects===!0&&M.sort(Xe,Qe),ke=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,ke&&ae.addToRenderList(M,w),this.info.render.frame++,Me===!0&&be.beginShadows();let B=S.state.shadowsArray;if(Ce.render(B,w,F),Me===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&A.hasRenderPass())===!1){let _e=M.opaque,he=M.transmissive;if(S.setupLights(),F.isArrayCamera){let ye=F.cameras;if(he.length>0)for(let Re=0,We=ye.length;Re<We;Re++){let Ue=ye[Re];kt(_e,he,w,Ue)}ke&&ae.render(w);for(let Re=0,We=ye.length;Re<We;Re++){let Ue=ye[Re];Wt(M,w,Ue,Ue.viewport)}}else he.length>0&&kt(_e,he,w,F),ke&&ae.render(w),Wt(M,w,F)}U!==null&&O===0&&(L.updateMultisampleRenderTarget(U),L.updateRenderTargetMipmap(U)),j&&A.end(y),w.isScene===!0&&w.onAfterRender(y,w,F),de.resetDefaultState(),W=-1,G=null,T.pop(),T.length>0?(S=T[T.length-1],Me===!0&&be.setGlobalState(y.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?M=C[C.length-1]:M=null};function ln(w,F,$,j){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)S.pushLight(w),w.castShadow&&S.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ie.intersectsSprite(w)){j&&He.setFromMatrixPosition(w.matrixWorld).applyMatrix4(vt);let _e=se.update(w),he=w.material;he.visible&&M.push(w,_e,he,$,He.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ie.intersectsObject(w))){let _e=se.update(w),he=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),He.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),He.copy(_e.boundingSphere.center)),He.applyMatrix4(w.matrixWorld).applyMatrix4(vt)),Array.isArray(he)){let ye=_e.groups;for(let Re=0,We=ye.length;Re<We;Re++){let Ue=ye[Re],ct=he[Ue.materialIndex];ct&&ct.visible&&M.push(w,_e,ct,$,He.z,Ue)}}else he.visible&&M.push(w,_e,he,$,He.z,null)}}let ce=w.children;for(let _e=0,he=ce.length;_e<he;_e++)ln(ce[_e],F,$,j)}function Wt(w,F,$,j){let{opaque:B,transmissive:ce,transparent:_e}=w;S.setupLightsView($),Me===!0&&be.setGlobalState(y.clippingPlanes,$),j&&Ee.viewport(H.copy(j)),B.length>0&&Et(B,F,$),ce.length>0&&Et(ce,F,$),_e.length>0&&Et(_e,F,$),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function kt(w,F,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[j.id]===void 0){let ct=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[j.id]=new Ri(1,1,{generateMipmaps:!0,type:ct?Ur:mi,minFilter:js,samples:ze.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace})}let ce=S.state.transmissionRenderTarget[j.id],_e=j.viewport||H;ce.setSize(_e.z*y.transmissionResolutionScale,_e.w*y.transmissionResolutionScale);let he=y.getRenderTarget(),ye=y.getActiveCubeFace(),Re=y.getActiveMipmapLevel();y.setRenderTarget(ce),y.getClearColor(ie),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear(),ke&&ae.render($);let We=y.toneMapping;y.toneMapping=br;let Ue=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),S.setupLightsView(j),Me===!0&&be.setGlobalState(y.clippingPlanes,j),Et(w,$,j),L.updateMultisampleRenderTarget(ce),L.updateRenderTargetMipmap(ce),rt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Ot=0,Qt=F.length;Ot<Qt;Ot++){let en=F[Ot],{object:Ut,geometry:Be,material:Nt,group:bt}=en;if(Nt.side===Qi&&Ut.layers.test(j.layers)){let Ei=Nt.side;Nt.side=ei,Nt.needsUpdate=!0,li(Ut,$,j,Be,Nt,bt),Nt.side=Ei,Nt.needsUpdate=!0,ct=!0}}ct===!0&&(L.updateMultisampleRenderTarget(ce),L.updateRenderTargetMipmap(ce))}y.setRenderTarget(he,ye,Re),y.setClearColor(ie,I),Ue!==void 0&&(j.viewport=Ue),y.toneMapping=We}function Et(w,F,$){let j=F.isScene===!0?F.overrideMaterial:null;for(let B=0,ce=w.length;B<ce;B++){let _e=w[B],{object:he,geometry:ye,group:Re}=_e,We=_e.material;We.allowOverride===!0&&j!==null&&(We=j),he.layers.test($.layers)&&li(he,F,$,ye,We,Re)}}function li(w,F,$,j,B,ce){w.onBeforeRender(y,F,$,j,B,ce),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(y,F,$,j,w,ce),B.transparent===!0&&B.side===Qi&&B.forceSinglePass===!1?(B.side=ei,B.needsUpdate=!0,y.renderBufferDirect($,F,j,B,w,ce),B.side=as,B.needsUpdate=!0,y.renderBufferDirect($,F,j,B,w,ce),B.side=Qi):y.renderBufferDirect($,F,j,B,w,ce),w.onAfterRender(y,F,$,j,B,ce)}function Pt(w,F,$){F.isScene!==!0&&(F=et);let j=v.get(w),B=S.state.lights,ce=S.state.shadowsArray,_e=B.state.version,he=Te.getParameters(w,B.state,ce,F,$),ye=Te.getProgramCacheKey(he),Re=j.programs;j.environment=w.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(w.isMeshStandardMaterial?J:Z).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Re===void 0&&(w.addEventListener("dispose",Ae),Re=new Map,j.programs=Re);let We=Re.get(ye);if(We!==void 0){if(j.currentProgram===We&&j.lightsStateVersion===_e)return Mi(w,he),We}else he.uniforms=Te.getUniforms(w),w.onBeforeCompile(he,y),We=Te.acquireProgram(he,ye),Re.set(ye,We),j.uniforms=he.uniforms;let Ue=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=be.uniform),Mi(w,he),j.needsLights=xn(w),j.lightsStateVersion=_e,j.needsLights&&(Ue.ambientLightColor.value=B.state.ambient,Ue.lightProbe.value=B.state.probe,Ue.directionalLights.value=B.state.directional,Ue.directionalLightShadows.value=B.state.directionalShadow,Ue.spotLights.value=B.state.spot,Ue.spotLightShadows.value=B.state.spotShadow,Ue.rectAreaLights.value=B.state.rectArea,Ue.ltc_1.value=B.state.rectAreaLTC1,Ue.ltc_2.value=B.state.rectAreaLTC2,Ue.pointLights.value=B.state.point,Ue.pointLightShadows.value=B.state.pointShadow,Ue.hemisphereLights.value=B.state.hemi,Ue.directionalShadowMap.value=B.state.directionalShadowMap,Ue.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ue.spotShadowMap.value=B.state.spotShadowMap,Ue.spotLightMatrix.value=B.state.spotLightMatrix,Ue.spotLightMap.value=B.state.spotLightMap,Ue.pointShadowMap.value=B.state.pointShadowMap,Ue.pointShadowMatrix.value=B.state.pointShadowMatrix),j.currentProgram=We,j.uniformsList=null,We}function Un(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=xc.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Mi(w,F){let $=v.get(w);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function hn(w,F,$,j,B){F.isScene!==!0&&(F=et),L.resetTextureUnits();let ce=F.fog,_e=j.isMeshStandardMaterial?F.environment:null,he=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Wo,ye=(j.isMeshStandardMaterial?J:Z).get(j.envMap||_e),Re=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,We=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ue=!!$.morphAttributes.position,ct=!!$.morphAttributes.normal,Ot=!!$.morphAttributes.color,Qt=br;j.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Qt=y.toneMapping);let en=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ut=en!==void 0?en.length:0,Be=v.get(j),Nt=S.state.lights;if(Me===!0&&(Ge===!0||w!==G)){let Zn=w===G&&j.id===W;be.setState(j,w,Zn)}let bt=!1;j.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Nt.state.version||Be.outputColorSpace!==he||B.isBatchedMesh&&Be.batching===!1||!B.isBatchedMesh&&Be.batching===!0||B.isBatchedMesh&&Be.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Be.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Be.instancing===!1||!B.isInstancedMesh&&Be.instancing===!0||B.isSkinnedMesh&&Be.skinning===!1||!B.isSkinnedMesh&&Be.skinning===!0||B.isInstancedMesh&&Be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Be.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Be.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Be.instancingMorph===!1&&B.morphTexture!==null||Be.envMap!==ye||j.fog===!0&&Be.fog!==ce||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==be.numPlanes||Be.numIntersection!==be.numIntersection)||Be.vertexAlphas!==Re||Be.vertexTangents!==We||Be.morphTargets!==Ue||Be.morphNormals!==ct||Be.morphColors!==Ot||Be.toneMapping!==Qt||Be.morphTargetsCount!==Ut)&&(bt=!0):(bt=!0,Be.__version=j.version);let Ei=Be.currentProgram;bt===!0&&(Ei=Pt(j,F,B));let xa=!1,bi=!1,Gc=!1,Ht=Ei.getUniforms(),ui=Be.uniforms;if(Ee.useProgram(Ei.program)&&(xa=!0,bi=!0,Gc=!0),j.id!==W&&(W=j.id,bi=!0),xa||G!==w){Ee.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ht.setValue(P,"projectionMatrix",w.projectionMatrix),Ht.setValue(P,"viewMatrix",w.matrixWorldInverse);let di=Ht.map.cameraPosition;di!==void 0&&di.setValue(P,we.setFromMatrixPosition(w.matrixWorld)),ze.logarithmicDepthBuffer&&Ht.setValue(P,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ht.setValue(P,"isOrthographic",w.isOrthographicCamera===!0),G!==w&&(G=w,bi=!0,Gc=!0)}if(Be.needsLights&&(Nt.state.directionalShadowMap.length>0&&Ht.setValue(P,"directionalShadowMap",Nt.state.directionalShadowMap,L),Nt.state.spotShadowMap.length>0&&Ht.setValue(P,"spotShadowMap",Nt.state.spotShadowMap,L),Nt.state.pointShadowMap.length>0&&Ht.setValue(P,"pointShadowMap",Nt.state.pointShadowMap,L)),B.isSkinnedMesh){Ht.setOptional(P,B,"bindMatrix"),Ht.setOptional(P,B,"bindMatrixInverse");let Zn=B.skeleton;Zn&&(Zn.boneTexture===null&&Zn.computeBoneTexture(),Ht.setValue(P,"boneTexture",Zn.boneTexture,L))}B.isBatchedMesh&&(Ht.setOptional(P,B,"batchingTexture"),Ht.setValue(P,"batchingTexture",B._matricesTexture,L),Ht.setOptional(P,B,"batchingIdTexture"),Ht.setValue(P,"batchingIdTexture",B._indirectTexture,L),Ht.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&Ht.setValue(P,"batchingColorTexture",B._colorsTexture,L));let Gi=$.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&$e.update(B,$,Ei),(bi||Be.receiveShadow!==B.receiveShadow)&&(Be.receiveShadow=B.receiveShadow,Ht.setValue(P,"receiveShadow",B.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(ui.envMap.value=ye,ui.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(ui.envMapIntensity.value=F.environmentIntensity),ui.dfgLUT!==void 0&&(ui.dfgLUT.value=cF()),bi&&(Ht.setValue(P,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&pn(ui,Gc),ce&&j.fog===!0&&Se.refreshFogUniforms(ui,ce),Se.refreshMaterialUniforms(ui,j,Ve,Oe,S.state.transmissionRenderTarget[w.id]),xc.upload(P,Un(Be),ui,L)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(xc.upload(P,Un(Be),ui,L),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ht.setValue(P,"center",B.center),Ht.setValue(P,"modelViewMatrix",B.modelViewMatrix),Ht.setValue(P,"normalMatrix",B.normalMatrix),Ht.setValue(P,"modelMatrix",B.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let Zn=j.uniformsGroups;for(let di=0,tm=Zn.length;di<tm;di++){let ao=Zn[di];ee.update(ao,Ei),ee.bind(ao,Ei)}}return Ei}function pn(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function xn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(w,F,$){let j=v.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),v.get(w.texture).__webglTexture=F,v.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:$,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){let $=v.get(w);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0};let qr=P.createFramebuffer();this.setRenderTarget=function(w,F=0,$=0){U=w,R=F,O=$;let j=null,B=!1,ce=!1;if(w){let he=v.get(w);if(he.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(P.FRAMEBUFFER,he.__webglFramebuffer),H.copy(w.viewport),k.copy(w.scissor),X=w.scissorTest,Ee.viewport(H),Ee.scissor(k),Ee.setScissorTest(X),W=-1;return}else if(he.__webglFramebuffer===void 0)L.setupRenderTarget(w);else if(he.__hasExternalTextures)L.rebindTextures(w,v.get(w.texture).__webglTexture,v.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let We=w.depthTexture;if(he.__boundDepthTexture!==We){if(We!==null&&v.has(We)&&(w.width!==We.image.width||w.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(w)}}let ye=w.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(ce=!0);let Re=v.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Re[F])?j=Re[F][$]:j=Re[F],B=!0):w.samples>0&&L.useMultisampledRTT(w)===!1?j=v.get(w).__webglMultisampledFramebuffer:Array.isArray(Re)?j=Re[$]:j=Re,H.copy(w.viewport),k.copy(w.scissor),X=w.scissorTest}else H.copy(Y).multiplyScalar(Ve).floor(),k.copy(K).multiplyScalar(Ve).floor(),X=fe;if($!==0&&(j=qr),Ee.bindFramebuffer(P.FRAMEBUFFER,j)&&Ee.drawBuffers(w,j),Ee.viewport(H),Ee.scissor(k),Ee.setScissorTest(X),B){let he=v.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,he.__webglTexture,$)}else if(ce){let he=F;for(let ye=0;ye<w.textures.length;ye++){let Re=v.get(w.textures[ye]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ye,Re.__webglTexture,$,he)}}else if(w!==null&&$!==0){let he=v.get(w.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,he.__webglTexture,$)}W=-1},this.readRenderTargetPixels=function(w,F,$,j,B,ce,_e,he=0){if(!(w&&w.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=v.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye){Ee.bindFramebuffer(P.FRAMEBUFFER,ye);try{let Re=w.textures[he],We=Re.format,Ue=Re.type;if(!ze.textureFormatReadable(We)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ze.textureTypeReadable(Ue)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-j&&$>=0&&$<=w.height-B&&(w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+he),P.readPixels(F,$,j,B,te.convert(We),te.convert(Ue),ce))}finally{let Re=U!==null?v.get(U).__webglFramebuffer:null;Ee.bindFramebuffer(P.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(w,F,$,j,B,ce,_e,he=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=v.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(ye=ye[_e]),ye)if(F>=0&&F<=w.width-j&&$>=0&&$<=w.height-B){Ee.bindFramebuffer(P.FRAMEBUFFER,ye);let Re=w.textures[he],We=Re.format,Ue=Re.type;if(!ze.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ze.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ct),P.bufferData(P.PIXEL_PACK_BUFFER,ce.byteLength,P.STREAM_READ),w.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+he),P.readPixels(F,$,j,B,te.convert(We),te.convert(Ue),0);let Ot=U!==null?v.get(U).__webglFramebuffer:null;Ee.bindFramebuffer(P.FRAMEBUFFER,Ot);let Qt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await mS(P,Qt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ct),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ce),P.deleteBuffer(ct),P.deleteSync(Qt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,$=0){let j=Math.pow(2,-$),B=Math.floor(w.image.width*j),ce=Math.floor(w.image.height*j),_e=F!==null?F.x:0,he=F!==null?F.y:0;L.setTexture2D(w,0),P.copyTexSubImage2D(P.TEXTURE_2D,$,0,0,_e,he,B,ce),Ee.unbindTexture()};let va=P.createFramebuffer(),Mn=P.createFramebuffer();this.copyTextureToTexture=function(w,F,$=null,j=null,B=0,ce=null){ce===null&&(B!==0?(lc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=B,B=0):ce=0);let _e,he,ye,Re,We,Ue,ct,Ot,Qt,en=w.isCompressedTexture?w.mipmaps[ce]:w.image;if($!==null)_e=$.max.x-$.min.x,he=$.max.y-$.min.y,ye=$.isBox3?$.max.z-$.min.z:1,Re=$.min.x,We=$.min.y,Ue=$.isBox3?$.min.z:0;else{let Gi=Math.pow(2,-B);_e=Math.floor(en.width*Gi),he=Math.floor(en.height*Gi),w.isDataArrayTexture?ye=en.depth:w.isData3DTexture?ye=Math.floor(en.depth*Gi):ye=1,Re=0,We=0,Ue=0}j!==null?(ct=j.x,Ot=j.y,Qt=j.z):(ct=0,Ot=0,Qt=0);let Ut=te.convert(F.format),Be=te.convert(F.type),Nt;F.isData3DTexture?(L.setTexture3D(F,0),Nt=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(L.setTexture2DArray(F,0),Nt=P.TEXTURE_2D_ARRAY):(L.setTexture2D(F,0),Nt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);let bt=P.getParameter(P.UNPACK_ROW_LENGTH),Ei=P.getParameter(P.UNPACK_IMAGE_HEIGHT),xa=P.getParameter(P.UNPACK_SKIP_PIXELS),bi=P.getParameter(P.UNPACK_SKIP_ROWS),Gc=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,en.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,en.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Re),P.pixelStorei(P.UNPACK_SKIP_ROWS,We),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ue);let Ht=w.isDataArrayTexture||w.isData3DTexture,ui=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let Gi=v.get(w),Zn=v.get(F),di=v.get(Gi.__renderTarget),tm=v.get(Zn.__renderTarget);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,di.__webglFramebuffer),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,tm.__webglFramebuffer);for(let ao=0;ao<ye;ao++)Ht&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,v.get(w).__webglTexture,B,Ue+ao),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,v.get(F).__webglTexture,ce,Qt+ao)),P.blitFramebuffer(Re,We,_e,he,ct,Ot,_e,he,P.DEPTH_BUFFER_BIT,P.NEAREST);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(B!==0||w.isRenderTargetTexture||v.has(w)){let Gi=v.get(w),Zn=v.get(F);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,va),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,Mn);for(let di=0;di<ye;di++)Ht?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Gi.__webglTexture,B,Ue+di):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Gi.__webglTexture,B),ui?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Zn.__webglTexture,ce,Qt+di):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Zn.__webglTexture,ce),B!==0?P.blitFramebuffer(Re,We,_e,he,ct,Ot,_e,he,P.COLOR_BUFFER_BIT,P.NEAREST):ui?P.copyTexSubImage3D(Nt,ce,ct,Ot,Qt+di,Re,We,_e,he):P.copyTexSubImage2D(Nt,ce,ct,Ot,Re,We,_e,he);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ui?w.isDataTexture||w.isData3DTexture?P.texSubImage3D(Nt,ce,ct,Ot,Qt,_e,he,ye,Ut,Be,en.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Nt,ce,ct,Ot,Qt,_e,he,ye,Ut,en.data):P.texSubImage3D(Nt,ce,ct,Ot,Qt,_e,he,ye,Ut,Be,en):w.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ce,ct,Ot,_e,he,Ut,Be,en.data):w.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ce,ct,Ot,en.width,en.height,Ut,en.data):P.texSubImage2D(P.TEXTURE_2D,ce,ct,Ot,_e,he,Ut,Be,en);P.pixelStorei(P.UNPACK_ROW_LENGTH,bt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ei),P.pixelStorei(P.UNPACK_SKIP_PIXELS,xa),P.pixelStorei(P.UNPACK_SKIP_ROWS,bi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Gc),ce===0&&F.generateMipmaps&&P.generateMipmap(Nt),Ee.unbindTexture()},this.initRenderTarget=function(w){v.get(w).__webglFramebuffer===void 0&&L.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?L.setTextureCube(w,0):w.isData3DTexture?L.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?L.setTexture2DArray(w,0):L.setTexture2D(w,0),Ee.unbindTexture()},this.resetState=function(){R=0,O=0,U=null,Ee.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};var op=class i{constructor(e){this.ngZone=e;this.initListeners()}mouseSource=new bs({x:0,y:0});mouse$=this.mouseSource.asObservable();scrollSource=new bs(0);scroll$=this.scrollSource.asObservable();initListeners(){this.ngZone.runOutsideAngular(()=>{Da(window,"mousemove").pipe(ed(16)).subscribe(e=>{let t=e.clientX/window.innerWidth*2-1,n=-(e.clientY/window.innerHeight)*2+1;this.mouseSource.next({x:t,y:n})}),Da(window,"scroll").pipe(ed(16)).subscribe(()=>{this.scrollSource.next(window.scrollY)})})}static \u0275fac=function(t){return new(t||i)(Tt(Bn))};static \u0275prov=qt({token:i,factory:i.\u0275fac,providedIn:"root"})};var dF=["bgCanvas"],ap=class i{constructor(e,t){this.ngZone=e;this.uiState=t}canvasRef;scene;camera;renderer;shapes=[];clock=new Jl;mouseSub;mouseX=0;mouseY=0;animationId;ngOnInit(){this.initThree(),this.initLighting(),this.initShapes(),this.startAnimationLoop(),this.mouseSub=this.uiState.mouse$.subscribe(e=>{this.mouseX=e.x*.5,this.mouseY=e.y*.5}),window.addEventListener("resize",this.onResize.bind(this))}ngOnDestroy(){this.animationId&&cancelAnimationFrame(this.animationId),this.mouseSub.unsubscribe(),window.removeEventListener("resize",this.onResize.bind(this)),this.renderer.dispose(),this.shapes.forEach(e=>{e.geometry.dispose(),e.material.dispose()})}initThree(){this.scene=new zl,this.camera=new Rn(75,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.z=25,this.renderer=new ip({canvas:this.canvasRef.nativeElement,alpha:!0,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}initLighting(){let e=new Zl(16777215,.4);this.scene.add(e);let t=new mc(13938487,250,100);t.position.set(10,10,10),this.scene.add(t);let n=new mc(16777215,100,100);n.position.set(-10,-5,5),this.scene.add(n)}initShapes(){let e=new $l({color:13938487,metalness:.9,roughness:.1,transmission:.6,thickness:1,transparent:!0,opacity:.5,envMapIntensity:2.5,clearcoat:1,clearcoatRoughness:.1,side:Qi}),t=new jo({color:13938487,wireframe:!0,transparent:!0,opacity:.15}),n=new $o(7,2),r=new Pn(n,e);r.position.set(5,0,-5),r.userData={base:new V(5,0,-5),baseRot:new Ni(0,0,0),timeOffset:0},this.scene.add(r),this.shapes.push(r);let s=new $o(9,1),o=new Pn(s,t);o.position.set(5,0,-5),o.userData={base:new V(5,0,-5),baseRot:new Ni(.5,.5,0),timeOffset:2},this.scene.add(o),this.shapes.push(o);let a=new jl(1.5,32,32),c=new Pn(a,e);c.position.set(-6,4,2),c.userData={base:new V(-6,4,2),baseRot:new Ni(0,0,0),timeOffset:1.5},this.scene.add(c),this.shapes.push(c);let l=new $o(2,0),u=new Pn(l,e);u.position.set(-4,-5,0),u.userData={base:new V(-4,-5,0),baseRot:new Ni(0,Math.PI/4,0),timeOffset:3},this.scene.add(u),this.shapes.push(u)}startAnimationLoop(){this.ngZone.runOutsideAngular(()=>{let e=()=>{let t=this.clock.getElapsedTime(),n=Math.sin(t*.5)*.5,r=Math.sin(t*.3)*(Math.PI/90);this.shapes.forEach((o,a)=>{let c=o.userData,l=c.timeOffset*.1;o.position.y=c.base.y+Math.sin(t*.4+l)*.8,o.rotation.y=c.baseRot.y+Math.sin(t*.2+l)*(Math.PI/60),o.rotation.x=c.baseRot.x+Math.sin(t*.1)*.02;let u=(this.mouseX||0)*.5,d=(this.mouseY||0)*.5;o.rotation.x+=.05*(d-o.rotation.x),o.rotation.y+=.05*(u-o.rotation.y)});let s=Math.sin(t*.25)*.5;this.camera.position.z=25+s,this.renderer.render(this.scene,this.camera),this.animationId=requestAnimationFrame(e)};e()})}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}static \u0275fac=function(t){return new(t||i)(mr(Bn),mr(op))};static \u0275cmp=Qn({type:i,selectors:[["app-three-background"]],viewQuery:function(t,n){if(t&1&&rf(dF,7),t&2){let r;__(r=y_())&&(n.canvasRef=r.first)}},decls:2,vars:0,consts:[["bgCanvas",""],[1,"webgl"]],template:function(t,n){t&1&&hi(0,"canvas",1,0)},styles:[".webgl[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;pointer-events:none}"]})};var cp=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Qn({type:i,selectors:[["app-navbar"]],decls:19,vars:0,consts:[[1,"nav-container"],["href","#",1,"logo"],[1,"nav-links"],["href","#about"],["href","#skills"],["href","#projects"],["href","#contact"]],template:function(t,n){t&1&&(Ne(0,"nav")(1,"div",0)(2,"a",1),xe(3,"DEBDEEP "),Ne(4,"span"),xe(5,"SANYAL"),Fe()(),Ne(6,"ul",2)(7,"li")(8,"a",3),xe(9,"About"),Fe()(),Ne(10,"li")(11,"a",4),xe(12,"Skills"),Fe()(),Ne(13,"li")(14,"a",5),xe(15,"Work"),Fe()(),Ne(16,"li")(17,"a",6),xe(18,"Contact"),Fe()()()()())},encapsulation:2})};function fs(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function QS(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}var vi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},bc={duration:.5,overwrite:!1,delay:0},S0,Ln,Xt,nr=1e8,Vt=1/nr,p0=Math.PI*2,fF=p0/4,hF=0,ew=Math.sqrt,pF=Math.cos,mF=Math.sin,yn=function(e){return typeof e=="string"},rn=function(e){return typeof e=="function"},ps=function(e){return typeof e=="number"},yp=function(e){return typeof e>"u"},Gr=function(e){return typeof e=="object"},yi=function(e){return e!==!1},w0=function(){return typeof window<"u"},lp=function(e){return rn(e)||yn(e)},tw=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wn=Array.isArray,gF=/random\([^)]+\)/g,_F=/,\s*/g,jS=/(?:-?\.?\d|\.)+/gi,T0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ia=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,a0=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,C0=/[+-]=-?[.\d]+/,yF=/[^,'"\[\]\s]+/gi,vF=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Jt,Hr,m0,D0,Fi={},hp={},nw,iw=function(e){return(hp=Sc(e,Fi))&&jn},vp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},pu=function(e,t){return!t&&console.warn(e)},rw=function(e,t){return e&&(Fi[e]=t)&&hp&&(hp[e]=t)||Fi},mu=function(){return 0},xF={suppressEvents:!0,isStart:!0,kill:!1},up={suppressEvents:!0,kill:!1},MF={suppressEvents:!0},A0={},Zs=[],g0={},sw,gi={},c0={},$S=30,dp=[],I0="",R0=function(e){var t=e[0],n,r;if(Gr(t)||rn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=dp.length;r--&&!dp[r].targetTest(t););n=dp[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new L0(e[r],n)))||e.splice(r,1);return e},Js=function(e){return e._gsap||R0(ir(e))[0]._gsap},N0=function(e,t,n){return(n=e[t])&&rn(n)?e[t]():yp(n)&&e.getAttribute&&e.getAttribute(t)||n},ti=function(e,t){return(e=e.split(",")).forEach(t)||e},sn=function(e){return Math.round(e*1e5)/1e5||0},Zt=function(e){return Math.round(e*1e7)/1e7||0},ra=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},EF=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},pp=function(){var e=Zs.length,t=Zs.slice(0),n,r;for(g0={},Zs.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},P0=function(e){return!!(e._initted||e._startAt||e.add)},ow=function(e,t,n,r){Zs.length&&!Ln&&pp(),e.render(t,n,r||!!(Ln&&t<0&&P0(e))),Zs.length&&!Ln&&pp()},aw=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(yF).length<2?t:yn(e)?e.trim():e},cw=function(e){return e},ki=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},bF=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Sc=function(e,t){for(var n in t)e[n]=t[n];return e},qS=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Gr(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},mp=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},du=function(e){var t=e.parent||Jt,n=e.keyframes?bF(Wn(e.keyframes)):ki;if(yi(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},SF=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},lw=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},xp=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ks=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ea=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},wF=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},_0=function(e,t,n,r){return e._startAt&&(Ln?e._startAt.revert(up):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},TF=function i(e){return!e||e._ts&&i(e.parent)},XS=function(e){return e._repeat?wc(e._tTime,e=e.duration()+e._rDelay)*e:0},wc=function(e,t){var n=Math.floor(e=Zt(e/t));return e&&n===e?n-1:n},gp=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Mp=function(e){return e._end=Zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Vt)||0))},Ep=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Mp(e),n._dirty||ea(n,e)),e},uw=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=gp(e.rawTime(),t),(!t._dur||yu(0,t.totalDuration(),n)-t._tTime>Vt)&&t.render(n,!0)),ea(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Vt}},zr=function(e,t,n,r){return t.parent&&Ks(t),t._start=Zt((ps(n)?n:n||e!==Jt?tr(e,n,t):e._time)+t._delay),t._end=Zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),lw(e,t,"_first","_last",e._sort?"_start":0),y0(t)||(e._recent=t),r||uw(e,t),e._ts<0&&Ep(e,e._tTime),e},dw=function(e,t){return(Fi.ScrollTrigger||vp("scrollTrigger",t))&&Fi.ScrollTrigger.create(t,e)},fw=function(e,t,n,r,s){if(U0(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&sw!==_i.frame)return Zs.push(e),e._lazy=[s,r],1},CF=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},y0=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},DF=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&CF(e)&&!(!e._initted&&y0(e))||(e._ts<0||e._dp._ts<0)&&!y0(e))?0:1,a=e._rDelay,c=0,l,u,d;if(a&&e._repeat&&(c=yu(0,e._tDur,t),u=wc(c,a),e._yoyo&&u&1&&(o=1-o),u!==wc(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Ln||r||e._zTime===Vt||!t&&e._zTime){if(!e._initted&&fw(e,t,r,n,c))return;for(d=e._zTime,e._zTime=t||(n?Vt:0),n||(n=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=c,l=e._pt;l;)l.r(o,l.d),l=l._next;t<0&&_0(e,t,n,!0),e._onUpdate&&!n&&Li(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Li(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ks(e,1),!n&&!Ln&&(Li(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},AF=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Tc=function(e,t,n,r){var s=e._repeat,o=Zt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Zt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Ep(e,e._tTime=e._tDur*a),e.parent&&Mp(e),n||ea(e.parent,e),e},YS=function(e){return e instanceof On?ea(e):Tc(e,e._dur)},IF={_start:0,endTime:mu,totalDuration:mu},tr=function i(e,t,n){var r=e.labels,s=e._recent||IF,o=e.duration()>=nr?s.endTime(!1):e._dur,a,c,l;return yn(t)&&(isNaN(t)||t in r)?(c=t.charAt(0),l=t.substr(-1)==="%",a=t.indexOf("="),c==="<"||c===">"?(a>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(c=parseFloat(t.charAt(a-1)+t.substr(a+1)),l&&n&&(c=c/100*(Wn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+c:o+c)):t==null?o:+t},fu=function(e,t,n){var r=ps(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,c;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,c=n;c&&!("immediateRender"in a);)a=c.vars.defaults||{},c=yi(c.vars.inherit)&&c.parent;o.immediateRender=yi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new cn(t[0],o,t[s+1])},Qs=function(e,t){return e||e===0?t(e):t},yu=function(e,t,n){return n<e?e:n>t?t:n},Fn=function(e,t){return!yn(e)||!(t=vF.exec(e))?"":t[1]},RF=function(e,t,n){return Qs(n,function(r){return yu(e,t,r)})},v0=[].slice,hw=function(e,t){return e&&Gr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Gr(e[0]))&&!e.nodeType&&e!==Hr},NF=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return yn(r)&&!t||hw(r,1)?(s=n).push.apply(s,ir(r)):n.push(r)})||n},ir=function(e,t,n){return Xt&&!t&&Xt.selector?Xt.selector(e):yn(e)&&!n&&(m0||!Cc())?v0.call((t||D0).querySelectorAll(e),0):Wn(e)?NF(e,n):hw(e)?v0.call(e,0):e?[e]:[]},x0=function(e){return e=ir(e)[0]||pu("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ir(t,n.querySelectorAll?n:n===e?pu("Invalid scope")||D0.createElement("div"):e)}},pw=function(e){return e.sort(function(){return .5-Math.random()})},mw=function(e){if(rn(e))return e;var t=Gr(e)?e:{each:e},n=ta(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,c=isNaN(r)||a,l=t.axis,u=r,d=r;return yn(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!a&&c&&(u=r[0],d=r[1]),function(h,f,_){var g=(_||t).length,m=o[g],p,x,b,M,S,C,T,A,y;if(!m){if(y=t.grid==="auto"?0:(t.grid||[1,nr])[1],!y){for(T=-nr;T<(T=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=o[g]=[],p=c?Math.min(y,g)*u-.5:r%y,x=y===nr?0:c?g*d/y-.5:r/y|0,T=0,A=nr,C=0;C<g;C++)b=C%y-p,M=x-(C/y|0),m[C]=S=l?Math.abs(l==="y"?M:b):ew(b*b+M*M),S>T&&(T=S),S<A&&(A=S);r==="random"&&pw(m),m.max=T-A,m.min=A,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(y>g?g-1:l?l==="y"?g/y:y:Math.max(y,g/y))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Fn(t.amount||t.each)||0,n=n&&g<0?Sw(n):n}return g=(m[h]-m.min)/m.max||0,Zt(m.b+(n?n(g):g)*m.v)+m.u}},M0=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Zt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ps(n)?0:Fn(n))}},gw=function(e,t){var n=Wn(e),r,s;return!n&&Gr(e)&&(r=n=e.radius||nr,e.values?(e=ir(e.values),(s=!ps(e[0]))&&(r*=r)):e=M0(e.increment)),Qs(t,n?rn(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),c=parseFloat(s?o.y:0),l=nr,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-a,f=e[d].y-c,h=h*h+f*f):h=Math.abs(e[d]-a),h<l&&(l=h,u=d);return u=!r||l<=r?e[u]:o,s||u===o||ps(o)?u:u+Fn(o)}:M0(e))},_w=function(e,t,n,r){return Qs(Wn(e)?!t:n===!0?!!(n=0):!r,function(){return Wn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},PF=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},OF=function(e,t){return function(n){return e(parseFloat(n))+(t||Fn(n))}},LF=function(e,t,n){return vw(e,t,0,1,n)},yw=function(e,t,n){return Qs(n,function(r){return e[~~t(r)]})},FF=function i(e,t,n){var r=t-e;return Wn(e)?yw(e,i(0,e.length),t):Qs(n,function(s){return(r+(s-e)%r)%r+e})},kF=function i(e,t,n){var r=t-e,s=r*2;return Wn(e)?yw(e,i(0,e.length-1),t):Qs(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Dc=function(e){return e.replace(gF,function(t){var n=t.indexOf("[")+1,r=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(_F);return _w(n?r:+r[0],n?0:+r[1],+r[2]||1e-5)})},vw=function(e,t,n,r,s){var o=t-e,a=r-n;return Qs(s,function(c){return n+((c-e)/o*a||0)})},UF=function i(e,t,n,r){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=yn(e),a={},c,l,u,d,h;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(Wn(e)&&!Wn(t)){for(u=[],d=e.length,h=d-2,l=1;l<d;l++)u.push(i(e[l-1],e[l]));d--,s=function(_){_*=d;var g=Math.min(h,~~_);return u[g](_-g)},n=t}else r||(e=Sc(Wn(e)?[]:{},e));if(!u){for(c in t)F0.call(a,e,c,"get",t[c]);s=function(_){return H0(_,a)||(o?e.p:e)}}}return Qs(n,s)},ZS=function(e,t,n){var r=e.labels,s=nr,o,a,c;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(c=o,s=a);return c},Li=function(e,t,n){var r=e.vars,s=r[t],o=Xt,a=e._ctx,c,l,u;if(s)return c=r[t+"Params"],l=r.callbackScope||e,n&&Zs.length&&pp(),a&&(Xt=a),u=c?s.apply(l,c):s.call(l),Xt=o,u},lu=function(e){return Ks(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ln),e.progress()<1&&Li(e,"onInterrupt"),e},Ec,xw=[],Mw=function(e){if(e)if(e=!e.name&&e.default||e,w0()||e.headless){var t=e.name,n=rn(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:mu,render:H0,add:F0,kill:e2,modifier:QF,rawVars:0},o={targetTest:0,get:0,getSetter:bp,aliases:{},register:0};if(Cc(),e!==r){if(gi[t])return;ki(r,ki(mp(e,s),o)),Sc(r.prototype,Sc(s,mp(e,o))),gi[r.prop=t]=r,e.targetTest&&(dp.push(r),A0[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}rw(t,r),e.register&&e.register(jn,r,ni)}else xw.push(e)},Bt=255,uu={aqua:[0,Bt,Bt],lime:[0,Bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Bt],navy:[0,0,128],white:[Bt,Bt,Bt],olive:[128,128,0],yellow:[Bt,Bt,0],orange:[Bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Bt,0,0],pink:[Bt,192,203],cyan:[0,Bt,Bt],transparent:[Bt,Bt,Bt,0]},l0=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Bt+.5|0},Ew=function(e,t,n){var r=e?ps(e)?[e>>16,e>>8&Bt,e&Bt]:0:uu.black,s,o,a,c,l,u,d,h,f,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),uu[e])r=uu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Bt,r&Bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Bt,e&Bt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(jS),!t)c=+r[0]%360/360,l=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(l+1):u+l-u*l,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=l0(c+1/3,s,o),r[1]=l0(c,s,o),r[2]=l0(c-1/3,s,o);else if(~e.indexOf("="))return r=e.match(T0),n&&r.length<4&&(r[3]=1),r}else r=e.match(jS)||uu.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/Bt,o=r[1]/Bt,a=r[2]/Bt,d=Math.max(s,o,a),h=Math.min(s,o,a),u=(d+h)/2,d===h?c=l=0:(f=d-h,l=u>.5?f/(2-d-h):f/(d+h),c=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,c*=60),r[0]=~~(c+.5),r[1]=~~(l*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},bw=function(e){var t=[],n=[],r=-1;return e.split(hs).forEach(function(s){var o=s.match(ia)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},JS=function(e,t,n){var r="",s=(e+r).match(hs),o=t?"hsla(":"rgba(",a=0,c,l,u,d;if(!s)return e;if(s=s.map(function(h){return(h=Ew(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=bw(e),c=n.c,c.join(r)!==u.c.join(r)))for(l=e.replace(hs,"1").split(ia),d=l.length-1;a<d;a++)r+=l[a]+(~c.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!l)for(l=e.split(hs),d=l.length-1;a<d;a++)r+=l[a]+s[a];return r+l[d]},hs=(function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in uu)i+="|"+e+"\\b";return new RegExp(i+")","gi")})(),BF=/hsl[a]?\(/,O0=function(e){var t=e.join(" "),n;if(hs.lastIndex=0,hs.test(t))return n=BF.test(t),e[1]=JS(e[1],n),e[0]=JS(e[0],n,bw(e[1])),!0},gu,_i=(function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],c,l,u,d,h,f,_=function g(m){var p=i()-r,x=m===!0,b,M,S,C;if((p>e||p<0)&&(n+=p-t),r+=p,S=r-n,b=S-o,(b>0||x)&&(C=++d.frame,h=S-d.time*1e3,d.time=S=S/1e3,o+=b+(b>=s?4:s-b),M=1),x||(c=l(g)),M)for(f=0;f<a.length;f++)a[f](S,h,C,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){nw&&(!m0&&w0()&&(Hr=m0=window,D0=Hr.document||{},Fi.gsap=jn,(Hr.gsapVersions||(Hr.gsapVersions=[])).push(jn.version),iw(hp||Hr.GreenSockGlobals||!Hr.gsap&&Hr||{}),xw.forEach(Mw)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&d.sleep(),l=u||function(m){return setTimeout(m,o-d.time*1e3+1|0)},gu=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),gu=0,l=mu},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,p,x){var b=p?function(M,S,C,T){m(M,S,C,T),d.remove(b)}:m;return d.remove(m),a[x?"unshift":"push"](b),Cc(),b},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},d})(),Cc=function(){return!gu&&_i.wake()},yt={},VF=/^[\d.\-M][\d.\-,\s]/,HF=/["']/g,zF=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,c,l;s<o;s++)c=n[s],a=s!==o-1?c.lastIndexOf(","):c.length,l=c.substr(0,a),t[r]=isNaN(l)?l.replace(HF,"").trim():+l,r=c.substr(a+1).trim();return t},GF=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},WF=function(e){var t=(e+"").split("("),n=yt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[zF(t[1])]:GF(e).split(",").map(aw)):yt._CE&&VF.test(e)?yt._CE("",e):n},Sw=function(e){return function(t){return 1-e(1-t)}},ww=function i(e,t){for(var n=e._first,r;n;)n instanceof On?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},ta=function(e,t){return e&&(rn(e)?e:yt[e]||WF(e))||t},sa=function(e,t,n,r){n===void 0&&(n=function(c){return 1-t(1-c)}),r===void 0&&(r=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return ti(e,function(a){yt[a]=Fi[a]=s,yt[o=a.toLowerCase()]=n;for(var c in s)yt[o+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=yt[a+"."+c]=s[c]}),s},Tw=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},u0=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/p0*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*mF((u-o)*s)+1},c=e==="out"?a:e==="in"?function(l){return 1-a(1-l)}:Tw(a);return s=p0/s,c.config=function(l,u){return i(e,l,u)},c},d0=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Tw(n);return r.config=function(s){return i(e,s)},r};ti("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;sa(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});yt.Linear.easeNone=yt.none=yt.Linear.easeIn;sa("Elastic",u0("in"),u0("out"),u0());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};sa("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);sa("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});sa("Circ",function(i){return-(ew(1-i*i)-1)});sa("Sine",function(i){return i===1?1:-pF(i*fF)+1});sa("Back",d0("in"),d0("out"),d0());yt.SteppedEase=yt.steps=Fi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-Vt;return function(a){return((r*yu(0,o,a)|0)+s)*n}}};bc.ease=yt["quad.out"];ti("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return I0+=i+","+i+"Params,"});var L0=function(e,t){this.id=hF++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:N0,this.set=t?t.getSetter:bp},_u=(function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Tc(this,+t.duration,1,1),this.data=t.data,Xt&&(this._ctx=Xt,Xt.data.push(this)),gu||_i.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Tc(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Cc(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ep(this,n),!s._dp||s.parent||uw(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&zr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Vt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ow(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+XS(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+XS(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?wc(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-Vt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?gp(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Vt?0:this._rts,this.totalTime(yu(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Mp(this),wF(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Cc(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Vt&&(this._tTime-=Vt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Zt(n);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&zr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(yi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?gp(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=MF);var r=Ln;return Ln=n,P0(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ln=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,YS(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,YS(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(tr(this,n),yi(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,yi(r)),this._dur||(this._zTime=-Vt),this},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Vt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Vt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Vt)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this,s=r._prom;return new Promise(function(o){var a=rn(n)?n:cw,c=function(){var u=r.then;r.then=null,s&&s(),rn(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=u),o(a),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?c():r._prom=c})},e.kill=function(){lu(this)},i})();ki(_u.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Vt,_prom:0,_ps:!1,_rts:1});var On=(function(i){QS(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=yi(n.sortChildren),Jt&&zr(n.parent||Jt,fs(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&dw(fs(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return fu(0,arguments,this),this},t.from=function(r,s,o){return fu(1,arguments,this),this},t.fromTo=function(r,s,o,a){return fu(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,du(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new cn(r,s,tr(this,o),1),this},t.call=function(r,s,o){return zr(this,cn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,c,l,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=l,o.onCompleteParams=u,o.parent=this,new cn(r,o,tr(this,c)),this},t.staggerFrom=function(r,s,o,a,c,l,u){return o.runBackwards=1,du(o).immediateRender=yi(o.immediateRender),this.staggerTo(r,s,o,a,c,l,u)},t.staggerFromTo=function(r,s,o,a,c,l,u,d){return a.startAt=o,du(a).immediateRender=yi(a.immediateRender),this.staggerTo(r,s,a,c,l,u,d)},t.render=function(r,s,o){var a=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=r<=0?0:Zt(r),d=this._zTime<0!=r<0&&(this._initted||!l),h,f,_,g,m,p,x,b,M,S,C,T;if(this!==Jt&&u>c&&r>=0&&(u=c),u!==this._tTime||o||d){if(a!==this._time&&l&&(u+=this._time-a,r+=this._time-a),h=u,M=this._start,b=this._ts,p=!b,d&&(l||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,m=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=Zt(u%m),u===c?(g=this._repeat,h=l):(S=Zt(u/m),g=~~S,g&&g===S&&(h=l,g--),h>l&&(h=l)),S=wc(this._tTime,m),!a&&this._tTime&&S!==g&&this._tTime-S*m-this._dur<=0&&(S=g),C&&g&1&&(h=l-h,T=1),g!==S&&!this._lock){var A=C&&S&1,y=A===(C&&g&1);if(g<S&&(A=!A),a=A?0:u%l?l:u,this._lock=1,this.render(a||(T?0:Zt(g*m)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&Li(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,S=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,y&&(this._lock=2,a=A?l:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;ww(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=AF(this,Zt(a),Zt(h)),x&&(u-=h-(h=x._start))),this._tTime=u,this._time=h,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&u&&l&&!s&&!S&&(Li(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(f=this._first;f;){if(_=f._next,(f._act||h>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(r,s,o);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,o),h!==this._time||!this._ts&&!p){x=0,_&&(u+=this._zTime=-Vt);break}}f=_}else{f=this._last;for(var E=r<0?r:h;f;){if(_=f._prev,(f._act||E<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(r,s,o);if(f.render(f._ts>0?(E-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(E-f._start)*f._ts,s,o||Ln&&P0(f)),h!==this._time||!this._ts&&!p){x=0,_&&(u+=this._zTime=E?-Vt:Vt);break}}f=_}}if(x&&!s&&(this.pause(),x.render(h>=a?0:-Vt)._zTime=h>=a?1:-1,this._ts))return this._start=M,Mp(this),this.render(r,s,o);this._onUpdate&&!s&&Li(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Ks(this,1),!s&&!(r<0&&!a)&&(u||a||!c)&&(Li(this,u===c&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ps(s)||(s=tr(this,s,r)),!(r instanceof _u)){if(Wn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(yn(r))return this.addLabel(r,s);if(rn(r))r=cn.delayedCall(0,r);else return this}return this!==r?zr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-nr);for(var c=[],l=this._first;l;)l._start>=a&&(l instanceof cn?s&&c.push(l):(o&&c.push(l),r&&c.push.apply(c,l.getChildren(!0,s,o)))),l=l._next;return c},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return yn(r)?this.removeLabel(r):rn(r)?this.killTweensOf(r):(r.parent===this&&xp(this,r),r===this._recent&&(this._recent=this._last),ea(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Zt(_i.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=tr(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=cn.delayedCall(0,s||mu,o);return a.data="isPause",this._hasPause=1,zr(this,a,tr(this,r))},t.removePause=function(r){var s=this._first;for(r=tr(this,r);s;)s._start===r&&s.data==="isPause"&&Ks(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),c=a.length;c--;)Ys!==a[c]&&a[c].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ir(r),c=this._first,l=ps(s),u;c;)c instanceof cn?EF(c._targets,a)&&(l?(!Ys||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&o.push(c):(u=c.getTweensOf(a,s)).length&&o.push.apply(o,u),c=c._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=tr(o,r),c=s,l=c.startAt,u=c.onStart,d=c.onStartParams,h=c.immediateRender,f,_=cn.to(o,ki({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale())||Vt,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(l&&"time"in l?l.time:o._time))/o.timeScale());_._dur!==m&&Tc(_,m,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,d||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,ki({startAt:{time:tr(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),ZS(this,tr(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),ZS(this,tr(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Vt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,c=this.labels,l;for(r=Zt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(l in c)c[l]>=o&&(c[l]+=r);return ea(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ea(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,c=nr,l,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)l=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>c&&o._sort&&a._ts&&!o._lock?(o._lock=1,zr(o,a,u-a._delay,1)._lock=0):c=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Zt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),c=0),a._end>s&&a._ts&&(s=a._end),a=l;Tc(o,o===Jt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Jt._ts&&(ow(Jt,gp(r,Jt)),sw=_i.frame),_i.frame>=$S){$S+=vi.autoSleep||120;var s=Jt._first;if((!s||!s._ts)&&vi.autoSleep&&_i._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||_i.sleep()}}},e})(_u);ki(On.prototype,{_lock:0,_hasPause:0,_forcing:0});var jF=function(e,t,n,r,s,o,a){var c=new ni(this._pt,e,t,0,1,V0,null,s),l=0,u=0,d,h,f,_,g,m,p,x;for(c.b=n,c.e=r,n+="",r+="",(p=~r.indexOf("random("))&&(r=Dc(r)),o&&(x=[n,r],o(x,e,t),n=x[0],r=x[1]),h=n.match(a0)||[];d=a0.exec(r);)_=d[0],g=r.substring(l,d.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==h[u++]&&(m=parseFloat(h[u-1])||0,c._pt={_next:c._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?ra(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},l=a0.lastIndex);return c.c=l<r.length?r.substring(l,r.length):"",c.fp=a,(C0.test(r)||p)&&(c.e=0),this._pt=c,c},F0=function(e,t,n,r,s,o,a,c,l,u){rn(r)&&(r=r(s||0,e,o));var d=e[t],h=n!=="get"?n:rn(d)?l?e[t.indexOf("set")||!rn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():d,f=rn(d)?l?ZF:Aw:B0,_;if(yn(r)&&(~r.indexOf("random(")&&(r=Dc(r)),r.charAt(1)==="="&&(_=ra(h,r)+(Fn(h)||0),(_||_===0)&&(r=_))),!u||h!==r||E0)return!isNaN(h*r)&&r!==""?(_=new ni(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?KF:Iw,0,f),l&&(_.fp=l),a&&_.modifier(a,this,e),this._pt=_):(!d&&!(t in e)&&vp(t,r),jF.call(this,e,t,h,r,f,c||vi.stringFilter,l))},$F=function(e,t,n,r,s){if(rn(e)&&(e=hu(e,s,t,n,r)),!Gr(e)||e.style&&e.nodeType||Wn(e)||tw(e))return yn(e)?hu(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=hu(e[a],s,t,n,r);return o},k0=function(e,t,n,r,s,o){var a,c,l,u;if(gi[e]&&(a=new gi[e]).init(s,a.rawVars?t[e]:$F(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=c=new ni(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ec))for(l=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)l[a._props[u]]=c;return a},Ys,E0,U0=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,c=r.lazy,l=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,h=r.keyframes,f=r.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,x=p&&p.data==="nested"?p.vars.targets:m,b=e._overwrite==="auto"&&!S0,M=e.timeline,S,C,T,A,y,E,R,O,U,W,G,H,k;if(M&&(!h||!s)&&(s="none"),e._ease=ta(s,bc.ease),e._yEase=d?Sw(ta(d===!0?s:d,bc.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!M&&!!r.runBackwards,!M||h&&!r.stagger){if(O=m[0]?Js(m[0]).harness:0,H=O&&r[O.prop],S=mp(r,A0),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!f?g.render(-1,!0):g.revert(u&&_?up:xF),g._lazy=0),o){if(Ks(e._startAt=cn.set(m,ki({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&yi(c),startAt:null,delay:0,onUpdate:l&&function(){return Li(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ln||!a&&!f)&&e._startAt.revert(up),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),T=ki({overwrite:!1,data:"isFromStart",lazy:a&&!g&&yi(c),immediateRender:a,stagger:0,parent:p},S),H&&(T[O.prop]=H),Ks(e._startAt=cn.set(m,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ln?e._startAt.revert(up):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,Vt,Vt);else if(!t)return}for(e._pt=e._ptCache=0,c=_&&yi(c)||c&&!_,C=0;C<m.length;C++){if(y=m[C],R=y._gsap||R0(m)[C]._gsap,e._ptLookup[C]=W={},g0[R.id]&&Zs.length&&pp(),G=x===m?C:x.indexOf(y),O&&(U=new O).init(y,H||S,e,G,x)!==!1&&(e._pt=A=new ni(e._pt,y,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(X){W[X]=A}),U.priority&&(E=1)),!O||H)for(T in S)gi[T]&&(U=k0(T,S,e,G,y,x))?U.priority&&(E=1):W[T]=A=F0.call(e,y,T,"get",S[T],G,x,0,r.stringFilter);e._op&&e._op[C]&&e.kill(y,e._op[C]),b&&e._pt&&(Ys=e,Jt.killTweensOf(y,W,e.globalTime(t)),k=!e.parent,Ys=0),e._pt&&c&&(g0[R.id]=1)}E&&z0(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!k,h&&t<=0&&M.render(nr,!0,!0)},qF=function(e,t,n,r,s,o,a,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return E0=1,e.vars[t]="+=0",U0(e,a),E0=0,c?pu(t+" not eligible for reset"):1;l.push(u)}for(f=l.length;f--;)d=l[f],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,d.e&&(d.e=sn(n)+Fn(d.e)),d.b&&(d.b=u.s+Fn(d.b))},XF=function(e,t){var n=e[0]?Js(e[0]).harness:0,r=n&&n.aliases,s,o,a,c;if(!r)return t;s=Sc({},t);for(o in r)if(o in s)for(c=r[o].split(","),a=c.length;a--;)s[c[a]]=s[o];return s},YF=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(Wn(t))a=n[e]||(n[e]=[]),t.forEach(function(c,l){return a.push({t:l/(t.length-1)*100,v:c,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},hu=function(e,t,n,r,s){return rn(e)?e.call(t,n,r,s):yn(e)&&~e.indexOf("random(")?Dc(e):e},Cw=I0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Dw={};ti(Cw+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Dw[i]=1});var cn=(function(i){QS(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:du(r))||this;var c=a.vars,l=c.duration,u=c.delay,d=c.immediateRender,h=c.stagger,f=c.overwrite,_=c.keyframes,g=c.defaults,m=c.scrollTrigger,p=c.yoyoEase,x=r.parent||Jt,b=(Wn(n)||tw(n)?ps(n[0]):"length"in r)?[n]:ir(n),M,S,C,T,A,y,E,R;if(a._targets=b.length?R0(b):pu("GSAP target "+n+" not found. https://gsap.com",!vi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||h||lp(l)||lp(u)){if(r=a.vars,M=a.timeline=new On({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:b}),M.kill(),M.parent=M._dp=fs(a),M._start=0,h||lp(l)||lp(u)){if(T=b.length,E=h&&mw(h),Gr(h))for(A in h)~Cw.indexOf(A)&&(R||(R={}),R[A]=h[A]);for(S=0;S<T;S++)C=mp(r,Dw),C.stagger=0,p&&(C.yoyoEase=p),R&&Sc(C,R),y=b[S],C.duration=+hu(l,fs(a),S,y,b),C.delay=(+hu(u,fs(a),S,y,b)||0)-a._delay,!h&&T===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),M.to(y,C,E?E(S,y,b):0),M._ease=yt.none;M.duration()?l=u=0:a.timeline=0}else if(_){du(ki(M.vars.defaults,{ease:"none"})),M._ease=ta(_.ease||r.ease||"none");var O=0,U,W,G;if(Wn(_))_.forEach(function(H){return M.to(b,H,">")}),M.duration();else{C={};for(A in _)A==="ease"||A==="easeEach"||YF(A,_[A],C,_.easeEach);for(A in C)for(U=C[A].sort(function(H,k){return H.t-k.t}),O=0,S=0;S<U.length;S++)W=U[S],G={ease:W.e,duration:(W.t-(S?U[S-1].t:0))/100*l},G[A]=W.v,M.to(b,G,O),O+=G.duration;M.duration()<l&&M.to({},{duration:l-M.duration()})}}l||a.duration(l=M.duration())}else a.timeline=0;return f===!0&&!S0&&(Ys=fs(a),Jt.killTweensOf(b),Ys=0),zr(x,fs(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!l&&!_&&a._start===Zt(x._time)&&yi(d)&&TF(fs(a))&&x.data!=="nested")&&(a._tTime=-Vt,a.render(Math.max(0,-u)||0)),m&&dw(fs(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,c=this._tDur,l=this._dur,u=r<0,d=r>c-Vt&&!u?c:r<Vt?0:r,h,f,_,g,m,p,x,b,M;if(!l)DF(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,b=this.timeline,this._repeat){if(g=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,o);if(h=Zt(d%g),d===c?(_=this._repeat,h=l):(m=Zt(d/g),_=~~m,_&&_===m?(h=l,_--):h>l&&(h=l)),p=this._yoyo&&_&1,p&&(M=this._yEase,h=l-h),m=wc(this._tTime,g),h===a&&!o&&this._initted&&_===m)return this._tTime=d,this;_!==m&&(b&&this._yEase&&ww(b,p),this.vars.repeatRefresh&&!p&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(Zt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(fw(this,u?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(l!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(M||this._ease)(h/l),this._from&&(this.ratio=x=1-x),!a&&d&&!s&&!m&&(Li(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;b&&b.render(r<0?r:b._dur*b._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&_0(this,r,s,o),Li(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Li(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&_0(this,r,!0,!0),(r||!l)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ks(this,1),!s&&!(u&&!a)&&(d||a||p)&&(Li(this,d===c?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,c){gu||_i.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||U0(this,l),u=this._ease(l/this._dur),qF(this,r,s,o,a,u,l,c)?this.resetTo(r,s,o,a,1):(Ep(this,0),this.parent||lw(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?lu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ln),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ys&&Ys.vars.overwrite!==!0)._first||lu(this),this.parent&&o!==this.timeline.totalDuration()&&Tc(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,c=r?ir(r):a,l=this._ptLookup,u=this._pt,d,h,f,_,g,m,p;if((!s||s==="all")&&SF(a,c))return s==="all"&&(this._pt=0),lu(this);for(d=this._op=this._op||[],s!=="all"&&(yn(s)&&(g={},ti(s,function(x){return g[x]=1}),s=g),s=XF(a,s)),p=a.length;p--;)if(~c.indexOf(a[p])){h=l[p],s==="all"?(d[p]=s,_=h,f={}):(f=d[p]=d[p]||{},_=s);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&xp(this,m,"_pt"),delete h[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&lu(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return fu(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return fu(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Jt.killTweensOf(r,s,o)},e})(_u);ki(cn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ti("staggerTo,staggerFrom,staggerFromTo",function(i){cn[i]=function(){var e=new On,t=v0.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var B0=function(e,t,n){return e[t]=n},Aw=function(e,t,n){return e[t](n)},ZF=function(e,t,n,r){return e[t](r.fp,n)},JF=function(e,t,n){return e.setAttribute(t,n)},bp=function(e,t){return rn(e[t])?Aw:yp(e[t])&&e.setAttribute?JF:B0},Iw=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},KF=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},V0=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},H0=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},QF=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},e2=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?xp(this,t,"_pt"):t.dep||(n=1),t=r;return!n},t2=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},z0=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},ni=(function(){function i(t,n,r,s,o,a,c,l,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Iw,this.d=c||this,this.set=l||B0,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=t2,this.m=n,this.mt=s,this.tween=r},i})();ti(I0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return A0[i]=1});Fi.TweenMax=Fi.TweenLite=cn;Fi.TimelineLite=Fi.TimelineMax=On;Jt=new On({sortChildren:!1,defaults:bc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});vi.stringFilter=O0;var na=[],fp={},n2=[],KS=0,i2=0,f0=function(e){return(fp[e]||n2).map(function(t){return t()})},b0=function(){var e=Date.now(),t=[];e-KS>2&&(f0("matchMediaInit"),na.forEach(function(n){var r=n.queries,s=n.conditions,o,a,c,l;for(a in r)o=Hr.matchMedia(r[a]).matches,o&&(c=1),o!==s[a]&&(s[a]=o,l=1);l&&(n.revert(),c&&t.push(n))}),f0("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),KS=e,f0("matchMedia"))},Rw=(function(){function i(t,n){this.selector=n&&x0(n),this.data=[],this._r=[],this.isReverted=!1,this.id=i2++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){rn(n)&&(s=r,r=n,n=rn);var o=this,a=function(){var l=Xt,u=o.selector,d;return l&&l!==o&&l.data.push(o),s&&(o.selector=x0(s)),Xt=o,d=r.apply(o,arguments),rn(d)&&o._r.push(d),Xt=l,o.selector=u,o.isReverted=!1,d};return o.last=a,n===rn?a(o,function(c){return o.add(null,c)}):n?o[n]=a:a},e.ignore=function(n){var r=Xt;Xt=null,n(this),Xt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof cn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?(function(){for(var a=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof On?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof cn)&&l.revert&&l.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=na.length;o--;)na[o].id===this.id&&na.splice(o,1)},e.revert=function(n){this.kill(n||{})},i})(),r2=(function(){function i(t){this.contexts=[],this.scope=t,Xt&&Xt.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Gr(n)||(n={matches:n});var o=new Rw(0,s||this.scope),a=o.conditions={},c,l,u;Xt&&!o.selector&&(o.selector=Xt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(l in n)l==="all"?u=1:(c=Hr.matchMedia(n[l]),c&&(na.indexOf(o)<0&&na.push(o),(a[l]=c.matches)&&(u=1),c.addListener?c.addListener(b0):c.addEventListener("change",b0)));return u&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i})(),_p={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Mw(r)})},timeline:function(e){return new On(e)},getTweensOf:function(e,t){return Jt.getTweensOf(e,t)},getProperty:function(e,t,n,r){yn(e)&&(e=ir(e)[0]);var s=Js(e||{}).get,o=n?cw:aw;return n==="native"&&(n=""),e&&(t?o((gi[t]&&gi[t].get||s)(e,t,n,r)):function(a,c,l){return o((gi[a]&&gi[a].get||s)(e,a,c,l))})},quickSetter:function(e,t,n){if(e=ir(e),e.length>1){var r=e.map(function(u){return jn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var o=gi[t],a=Js(e),c=a.harness&&(a.harness.aliases||{})[t]||t,l=o?function(u){var d=new o;Ec._pt=0,d.init(e,n?u+n:u,Ec,0,[e]),d.render(1,d),Ec._pt&&H0(1,Ec)}:a.set(e,c);return o?l:function(u){return l(e,c,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=jn.to(e,ki((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(c,l,u){return s.resetTo(t,c,l,u)};return o.tween=s,o},isTweening:function(e){return Jt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ta(e.ease,bc.ease)),qS(bc,e||{})},config:function(e){return qS(vi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!gi[a]&&!Fi[a]&&pu(t+" effect requires "+a+" plugin.")}),c0[t]=function(a,c,l){return n(ir(a),ki(c||{},s),l)},o&&(On.prototype[t]=function(a,c,l){return this.add(c0[t](a,Gr(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){yt[e]=ta(t)},parseEase:function(e,t){return arguments.length?ta(e,t):yt},getById:function(e){return Jt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new On(e),r,s;for(n.smoothChildTiming=yi(e.smoothChildTiming),Jt.remove(n),n._dp=0,n._time=n._tTime=Jt._time,r=Jt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof cn&&r.vars.onComplete===r._targets[0]))&&zr(n,r,r._start-r._delay),r=s;return zr(Jt,n,0),n},context:function(e,t){return e?new Rw(e,t):Xt},matchMedia:function(e){return new r2(e)},matchMediaRefresh:function(){return na.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||b0()},addEventListener:function(e,t){var n=fp[e]||(fp[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=fp[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:FF,wrapYoyo:kF,distribute:mw,random:_w,snap:gw,normalize:LF,getUnit:Fn,clamp:RF,splitColor:Ew,toArray:ir,selector:x0,mapRange:vw,pipe:PF,unitize:OF,interpolate:UF,shuffle:pw},install:iw,effects:c0,ticker:_i,updateRoot:On.updateRoot,plugins:gi,globalTimeline:Jt,core:{PropTween:ni,globals:rw,Tween:cn,Timeline:On,Animation:_u,getCache:Js,_removeLinkedListItem:xp,reverting:function(){return Ln},context:function(e){return e&&Xt&&(Xt.data.push(e),e._ctx=Xt),Xt},suppressOverwrites:function(e){return S0=e}}};ti("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return _p[i]=cn[i]});_i.add(On.updateRoot);Ec=_p.to({},{duration:0});var s2=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},o2=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=s2(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},h0=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var c,l;if(yn(s)&&(c={},ti(s,function(u){return c[u]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}o2(a,s)}}}},jn=_p.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,c;this.tween=n;for(o in t)c=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(c||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=c,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Ln?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},h0("roundProps",M0),h0("modifiers"),h0("snap",gw))||_p;cn.version=On.version=jn.version="3.14.2";nw=1;w0()&&Cc();var a2=yt.Power0,c2=yt.Power1,l2=yt.Power2,u2=yt.Power3,d2=yt.Power4,f2=yt.Linear,h2=yt.Quad,p2=yt.Cubic,m2=yt.Quart,g2=yt.Quint,_2=yt.Strong,y2=yt.Elastic,v2=yt.Back,x2=yt.SteppedEase,M2=yt.Bounce,E2=yt.Sine,b2=yt.Expo,S2=yt.Circ;var Nw,eo,Ic,X0,la,w2,Pw,Y0,T2=function(){return typeof window<"u"},gs={},ca=180/Math.PI,Rc=Math.PI/180,Ac=Math.atan2,Ow=1e8,Z0=/([A-Z])/g,C2=/(left|right|width|margin|padding|x)/i,D2=/[\s,\(]\S/,Wr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},W0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},A2=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},I2=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},R2=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},N2=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},zw=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Gw=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},P2=function(e,t,n){return e.style[t]=n},O2=function(e,t,n){return e.style.setProperty(t,n)},L2=function(e,t,n){return e._gsap[t]=n},F2=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},k2=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},U2=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Kt="transform",xi=Kt+"Origin",B2=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in gs&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Wr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ms(r,a)}):this.tfm[e]=o.x?o[e]:ms(r,e),e===xi&&(this.tfm.zOrigin=o.zOrigin);else return Wr.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Kt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(xi,t,"")),e=Kt}(s||t)&&this.props.push(e,t,s[e])},Ww=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},V2=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Z0,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Y0(),(!s||!s.isStart)&&!n[Kt]&&(Ww(n),r.zOrigin&&n[xi]&&(n[xi]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},jw=function(e,t){var n={target:e,props:[],revert:V2,save:B2};return e._gsap||jn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return n.save(r)}),n},$w,j0=function(e,t){var n=eo.createElementNS?eo.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):eo.createElement(e);return n&&n.style?n:eo.createElement(e)},Ui=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Z0,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Nc(t)||t,1)||""},Lw="O,Moz,ms,Ms,Webkit".split(","),Nc=function(e,t,n){var r=t||la,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Lw[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Lw[o]:"")+e},$0=function(){T2()&&window.document&&(Nw=window,eo=Nw.document,Ic=eo.documentElement,la=j0("div")||{style:{}},w2=j0("div"),Kt=Nc(Kt),xi=Kt+"Origin",la.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",$w=!!Nc("perspective"),Y0=jn.core.reverting,X0=1)},Fw=function(e){var t=e.ownerSVGElement,n=j0("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Ic.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Ic.removeChild(n),s},kw=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},qw=function(e){var t,n;try{t=e.getBBox()}catch{t=Fw(e),n=1}return t&&(t.width||t.height)||n||(t=Fw(e)),t&&!t.width&&!t.x&&!t.y?{x:+kw(e,["x","cx","x1"])||0,y:+kw(e,["y","cy","y1"])||0,width:0,height:0}:t},Xw=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&qw(e))},no=function(e,t){if(t){var n=e.style,r;t in gs&&t!==xi&&(t=Kt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Z0,"-$1").toLowerCase())):n.removeAttribute(t)}},to=function(e,t,n,r,s,o){var a=new ni(e._pt,t,n,0,1,o?Gw:zw);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Uw={deg:1,rad:1,turn:1},H2={grid:1,flex:1},io=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=la.style,c=C2.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),d=100,h=r==="px",f=r==="%",_,g,m,p;if(r===o||!s||Uw[r]||Uw[o])return s;if(o!=="px"&&!h&&(s=i(e,t,n,"px")),p=e.getCTM&&Xw(e),(f||o==="%")&&(gs[t]||~t.indexOf("adius")))return _=p?e.getBBox()[c?"width":"height"]:e[u],sn(f?s/_*d:s/100*_);if(a[c?"width":"height"]=d+(h?o:r),g=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===eo||!g.appendChild)&&(g=eo.body),m=g._gsap,m&&f&&m.width&&c&&m.time===_i.time&&!m.uncache)return sn(s/m.width*d);if(f&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=d+r,_=e[u],x?e.style[t]=x:no(e,t)}else(f||o==="%")&&!H2[Ui(g,"display")]&&(a.position=Ui(e,"position")),g===e&&(a.position="static"),g.appendChild(la),_=la[u],g.removeChild(la),a.position="absolute";return c&&f&&(m=Js(g),m.time=_i.time,m.width=g[u]),sn(h?_*s/d:_&&s?d/_*s:0)},ms=function(e,t,n,r){var s;return X0||$0(),t in Wr&&t!=="transform"&&(t=Wr[t],~t.indexOf(",")&&(t=t.split(",")[0])),gs[t]&&t!=="transform"?(s=Mu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:wp(Ui(e,xi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Sp[t]&&Sp[t](e,t,n)||Ui(e,t)||N0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?io(e,t,s,n)+n:s},z2=function(e,t,n,r){if(!n||n==="none"){var s=Nc(t,e,1),o=s&&Ui(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ui(e,"borderTopColor"))}var a=new ni(this._pt,e.style,t,0,1,V0),c=0,l=0,u,d,h,f,_,g,m,p,x,b,M,S;if(a.b=n,a.e=r,n+="",r+="",r.substring(0,6)==="var(--"&&(r=Ui(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(g=e.style[t],e.style[t]=r,r=Ui(e,t)||r,g?e.style[t]=g:no(e,t)),u=[n,r],O0(u),n=u[0],r=u[1],h=n.match(ia)||[],S=r.match(ia)||[],S.length){for(;d=ia.exec(r);)m=d[0],x=r.substring(c,d.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),m!==(g=h[l++]||"")&&(f=parseFloat(g)||0,M=g.substr((f+"").length),m.charAt(1)==="="&&(m=ra(f,m)+M),p=parseFloat(m),b=m.substr((p+"").length),c=ia.lastIndex-b.length,b||(b=b||vi.units[t]||M,c===r.length&&(r+=b,a.e+=b)),M!==b&&(f=io(e,t,g,b)||0),a._pt={_next:a._pt,p:x||l===1?x:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=c<r.length?r.substring(c,r.length):""}else a.r=t==="display"&&r==="none"?Gw:zw;return C0.test(r)&&(a.e=0),this._pt=a,a},Bw={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},G2=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Bw[n]||n,t[1]=Bw[r]||r,t.join(" ")},W2=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,c,l;if(s==="all"||s===!0)r.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)a=s[l],gs[a]&&(c=1,a=a==="transformOrigin"?xi:Kt),no(n,a);c&&(no(n,Kt),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Mu(n,1),o.uncache=1,Ww(r)))}},Sp={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ni(e._pt,t,n,0,0,W2);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},xu=[1,0,0,1,0,0],Yw={},Zw=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Vw=function(e){var t=Ui(e,Kt);return Zw(t)?xu:t.substr(7).match(T0).map(sn)},J0=function(e,t){var n=e._gsap||Js(e),r=e.style,s=Vw(e),o,a,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?xu:s):(s===xu&&!e.offsetParent&&e!==Ic&&!n.svg&&(c=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,a=e.nextElementSibling,Ic.appendChild(e)),s=Vw(e),c?r.display=c:no(e,"display"),l&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ic.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},q0=function(e,t,n,r,s,o){var a=e._gsap,c=s||J0(e,!0),l=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,f=c[0],_=c[1],g=c[2],m=c[3],p=c[4],x=c[5],b=t.split(" "),M=parseFloat(b[0])||0,S=parseFloat(b[1])||0,C,T,A,y;n?c!==xu&&(T=f*m-_*g)&&(A=M*(m/T)+S*(-g/T)+(g*x-m*p)/T,y=M*(-_/T)+S*(f/T)-(f*x-_*p)/T,M=A,S=y):(C=qw(e),M=C.x+(~b[0].indexOf("%")?M/100*C.width:M),S=C.y+(~(b[1]||b[0]).indexOf("%")?S/100*C.height:S)),r||r!==!1&&a.smooth?(p=M-l,x=S-u,a.xOffset=d+(p*f+x*g)-p,a.yOffset=h+(p*_+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=S,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[xi]="0px 0px",o&&(to(o,a,"xOrigin",l,M),to(o,a,"yOrigin",u,S),to(o,a,"xOffset",d,a.xOffset),to(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+S)},Mu=function(e,t){var n=e._gsap||new L0(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",c=getComputedStyle(e),l=Ui(e,xi)||"0",u,d,h,f,_,g,m,p,x,b,M,S,C,T,A,y,E,R,O,U,W,G,H,k,X,ie,I,re,Oe,Ve,Xe,Qe;return u=d=h=g=m=p=x=b=M=0,f=_=1,n.svg=!!(e.getCTM&&Xw(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(r[Kt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[Kt]!=="none"?c[Kt]:"")),r.scale=r.rotate=r.translate="none"),T=J0(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),l=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),q0(e,k||l,!!k||n.originIsAbsolute,n.smooth!==!1,T)),S=n.xOrigin||0,C=n.yOrigin||0,T!==xu&&(R=T[0],O=T[1],U=T[2],W=T[3],u=G=T[4],d=H=T[5],T.length===6?(f=Math.sqrt(R*R+O*O),_=Math.sqrt(W*W+U*U),g=R||O?Ac(O,R)*ca:0,x=U||W?Ac(U,W)*ca+g:0,x&&(_*=Math.abs(Math.cos(x*Rc))),n.svg&&(u-=S-(S*R+C*U),d-=C-(S*O+C*W))):(Qe=T[6],Ve=T[7],I=T[8],re=T[9],Oe=T[10],Xe=T[11],u=T[12],d=T[13],h=T[14],A=Ac(Qe,Oe),m=A*ca,A&&(y=Math.cos(-A),E=Math.sin(-A),k=G*y+I*E,X=H*y+re*E,ie=Qe*y+Oe*E,I=G*-E+I*y,re=H*-E+re*y,Oe=Qe*-E+Oe*y,Xe=Ve*-E+Xe*y,G=k,H=X,Qe=ie),A=Ac(-U,Oe),p=A*ca,A&&(y=Math.cos(-A),E=Math.sin(-A),k=R*y-I*E,X=O*y-re*E,ie=U*y-Oe*E,Xe=W*E+Xe*y,R=k,O=X,U=ie),A=Ac(O,R),g=A*ca,A&&(y=Math.cos(A),E=Math.sin(A),k=R*y+O*E,X=G*y+H*E,O=O*y-R*E,H=H*y-G*E,R=k,G=X),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=sn(Math.sqrt(R*R+O*O+U*U)),_=sn(Math.sqrt(H*H+Qe*Qe)),A=Ac(G,H),x=Math.abs(A)>2e-4?A*ca:0,M=Xe?1/(Xe<0?-Xe:Xe):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Zw(Ui(e,Kt)),k&&e.setAttribute("transform",k))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(f*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=sn(f),n.scaleY=sn(_),n.rotation=sn(g)+a,n.rotationX=sn(m)+a,n.rotationY=sn(p)+a,n.skewX=x+a,n.skewY=b+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(r[xi]=wp(l)),n.xOffset=n.yOffset=0,n.force3D=vi.force3D,n.renderTransform=n.svg?$2:$w?Jw:j2,n.uncache=0,n},wp=function(e){return(e=e.split(" "))[0]+" "+e[1]},G0=function(e,t,n){var r=Fn(t);return sn(parseFloat(t)+parseFloat(io(e,"x",n+"px",r)))+r},j2=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Jw(e,t)},oa="0deg",vu="0px",aa=") ",Jw=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.z,l=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,x=n.target,b=n.zOrigin,M="",S=p==="auto"&&e&&e!==1||p===!0;if(b&&(d!==oa||u!==oa)){var C=parseFloat(u)*Rc,T=Math.sin(C),A=Math.cos(C),y;C=parseFloat(d)*Rc,y=Math.cos(C),o=G0(x,o,T*y*-b),a=G0(x,a,-Math.sin(C)*-b),c=G0(x,c,A*y*-b+b)}m!==vu&&(M+="perspective("+m+aa),(r||s)&&(M+="translate("+r+"%, "+s+"%) "),(S||o!==vu||a!==vu||c!==vu)&&(M+=c!==vu||S?"translate3d("+o+", "+a+", "+c+") ":"translate("+o+", "+a+aa),l!==oa&&(M+="rotate("+l+aa),u!==oa&&(M+="rotateY("+u+aa),d!==oa&&(M+="rotateX("+d+aa),(h!==oa||f!==oa)&&(M+="skew("+h+", "+f+aa),(_!==1||g!==1)&&(M+="scale("+_+", "+g+aa),x.style[Kt]=M||"translate(0, 0)"},$2=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,c=n.rotation,l=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,x=n.forceCSS,b=parseFloat(o),M=parseFloat(a),S,C,T,A,y;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Rc,l*=Rc,S=Math.cos(c)*d,C=Math.sin(c)*d,T=Math.sin(c-l)*-h,A=Math.cos(c-l)*h,l&&(u*=Rc,y=Math.tan(l-u),y=Math.sqrt(1+y*y),T*=y,A*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),S*=y,C*=y)),S=sn(S),C=sn(C),T=sn(T),A=sn(A)):(S=d,A=h,C=T=0),(b&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(b=io(f,"x",o,"px"),M=io(f,"y",a,"px")),(_||g||m||p)&&(b=sn(b+_-(_*S+g*T)+m),M=sn(M+g-(_*C+g*A)+p)),(r||s)&&(y=f.getBBox(),b=sn(b+r/100*y.width),M=sn(M+s/100*y.height)),y="matrix("+S+","+C+","+T+","+A+","+b+","+M+")",f.setAttribute("transform",y),x&&(f.style[Kt]=y)},q2=function(e,t,n,r,s){var o=360,a=yn(s),c=parseFloat(s)*(a&&~s.indexOf("rad")?ca:1),l=c-r,u=r+l+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(l%=o,l!==l%(o/2)&&(l+=l<0?o:-o)),d==="cw"&&l<0?l=(l+o*Ow)%o-~~(l/o)*o:d==="ccw"&&l>0&&(l=(l-o*Ow)%o-~~(l/o)*o)),e._pt=h=new ni(e._pt,t,n,r,l,A2),h.e=u,h.u="deg",e._props.push(n),h},Hw=function(e,t){for(var n in t)e[n]=t[n];return e},X2=function(e,t,n){var r=Hw({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,c,l,u,d,h,f,_;r.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),o[Kt]=t,a=Mu(n,1),no(n,Kt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[Kt],o[Kt]=t,a=Mu(n,1),o[Kt]=l);for(c in gs)l=r[c],u=a[c],l!==u&&s.indexOf(c)<0&&(f=Fn(l),_=Fn(u),d=f!==_?io(n,c,l,_):parseFloat(l),h=parseFloat(u),e._pt=new ni(e._pt,a,c,d,h-d,W0),e._pt.u=_||0,e._props.push(c));Hw(a,r)};ti("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});Sp[e>1?"border"+i:i]=function(a,c,l,u,d){var h,f;if(arguments.length<4)return h=o.map(function(_){return ms(a,_,l)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},o.forEach(function(_,g){return f[_]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(c,f,d)}});var K0={name:"css",register:$0,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,c=n.vars.startAt,l,u,d,h,f,_,g,m,p,x,b,M,S,C,T,A,y;X0||$0(),this.styles=this.styles||jw(e),A=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(gi[g]&&k0(g,t,n,r,e,s)))){if(f=typeof u,_=Sp[g],f==="function"&&(u=u.call(n,r,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=Dc(u)),_)_(this,e,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",hs.lastIndex=0,hs.test(l)||(m=Fn(l),p=Fn(u),p?m!==p&&(l=io(e,g,l,p)+p):m&&(u+=m)),this.add(a,"setProperty",l,u,r,s,0,0,g),o.push(g),A.push(g,0,a[g]);else if(f!=="undefined"){if(c&&g in c?(l=typeof c[g]=="function"?c[g].call(n,r,e,s):c[g],yn(l)&&~l.indexOf("random(")&&(l=Dc(l)),Fn(l+"")||l==="auto"||(l+=vi.units[g]||Fn(ms(e,g))||""),(l+"").charAt(1)==="="&&(l=ms(e,g))):l=ms(e,g),h=parseFloat(l),x=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),d=parseFloat(u),g in Wr&&(g==="autoAlpha"&&(h===1&&ms(e,"visibility")==="hidden"&&d&&(h=0),A.push("visibility",0,a.visibility),to(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Wr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),b=g in gs,b){if(this.styles.save(g),y=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=Ui(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=u,u=Ui(e,"perspective"),E?e.style.perspective=E:no(e,"perspective")}d=parseFloat(u)}if(M||(S=e._gsap,S.renderTransform&&!t.parseTransform||Mu(e,t.parseTransform),C=t.smoothOrigin!==!1&&S.smooth,M=this._pt=new ni(this._pt,a,Kt,0,1,S.renderTransform,S,0,-1),M.dep=1),g==="scale")this._pt=new ni(this._pt,S,"scaleY",S.scaleY,(x?ra(S.scaleY,x+d):d)-S.scaleY||0,W0),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){A.push(xi,0,a[xi]),u=G2(u),S.svg?q0(e,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==S.zOrigin&&to(this,S,"zOrigin",S.zOrigin,p),to(this,a,g,wp(l),wp(u)));continue}else if(g==="svgOrigin"){q0(e,u,1,C,0,this);continue}else if(g in Yw){q2(this,S,g,h,x?ra(h,x+u):u);continue}else if(g==="smoothOrigin"){to(this,S,"smooth",S.smooth,u);continue}else if(g==="force3D"){S[g]=u;continue}else if(g==="transform"){X2(this,u,e);continue}}else g in a||(g=Nc(g)||g);if(b||(d||d===0)&&(h||h===0)&&!D2.test(u)&&g in a)m=(l+"").substr((h+"").length),d||(d=0),p=Fn(u)||(g in vi.units?vi.units[g]:m),m!==p&&(h=io(e,g,l,p)),this._pt=new ni(this._pt,b?S:a,g,h,(x?ra(h,x+d):d)-h,!b&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?N2:W0),this._pt.u=p||0,b&&y!==u?(this._pt.b=l,this._pt.e=y,this._pt.r=R2):m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=I2);else if(g in a)z2.call(this,e,g,l,x?x+u:u);else if(g in e)this.add(e,g,l||e[g],x?x+u:u,r,s);else if(g!=="parseTransform"){vp(g,u);continue}b||(g in a?A.push(g,0,a[g]):typeof e[g]=="function"?A.push(g,2,e[g]()):A.push(g,1,l||e[g])),o.push(g)}}T&&z0(this)},render:function(e,t){if(t.tween._time||!Y0())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ms,aliases:Wr,getSetter:function(e,t,n){var r=Wr[t];return r&&r.indexOf(",")<0&&(t=r),t in gs&&t!==xi&&(e._gsap.x||ms(e,"x"))?n&&Pw===n?t==="scale"?F2:L2:(Pw=n||{})&&(t==="scale"?k2:U2):e.style&&!yp(e.style[t])?P2:~t.indexOf("-")?O2:bp(e,t)},core:{_removeProperty:no,_getMatrix:J0}};jn.utils.checkPrefix=Nc;jn.core.getStyleSaver=jw;(function(i,e,t,n){var r=ti(i+","+e+","+t,function(s){gs[s]=1});ti(e,function(s){vi.units[s]="deg",Yw[s]=1}),Wr[r[13]]=i+","+e,ti(n,function(s){var o=s.split(":");Wr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ti("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){vi.units[i]="px"});jn.registerPlugin(K0);var Pc=jn.registerPlugin(K0)||jn,aX=Pc.core.Tween;var Tp=class i{ngAfterViewInit(){Pc.from(".hero-anim",{duration:1.2,y:30,opacity:0,ease:"power3.out",stagger:.15})}openResume(){window.open("./assets/cv.pdf","_blank")}scrollToContact(){let e=document.getElementById("contact");e&&e.scrollIntoView({behavior:"smooth"})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Qn({type:i,selectors:[["app-hero"]],decls:68,vars:0,consts:[["id","about",1,"container","hero-section"],[1,"col-span-7","hero-primary"],[1,"hero-header"],[1,"status-indicator"],[1,"dot"],[1,"hero-title"],[1,"hero-lead"],[1,"hero-actions"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-secondary",3,"click"],[1,"col-span-5","hero-sidebar"],[1,"snapshot-card"],[1,"profile-summary"],["src","assets/profile-pic.jpg","alt","Debdeep Sanyal","onerror","this.src='assets/fallback_avatar.png'",1,"sidebar-avatar"],[1,"profile-info"],[1,"name"],[1,"role"],[1,"snapshot-inner"],[1,"snapshot-row"],[1,"snapshot-label"],[1,"snapshot-value"],[1,"snapshot-metrics"],[1,"metric"],[1,"metric-label"],[1,"metric-value"],[1,"social-links-sidebar"],["href","https://www.linkedin.com/in/debdeep-sanyal/","target","_blank"],[1,"fab","fa-linkedin"],["href","mailto:sanyaldebdeep@gmail.com"],[1,"fas","fa-envelope"]],template:function(t,n){t&1&&(Ne(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),hi(4,"span",4),xe(5," Currently working at Vareli Tecnac "),Fe(),Ne(6,"h1",5),xe(7,"Engineering"),hi(8,"br"),Ne(9,"span"),xe(10,"System Intelligence"),Fe(),xe(11," & Android."),Fe()(),Ne(12,"p",6),xe(13," Android and AI/ML Engineer with 3 years of experience building "),Ne(14,"strong"),xe(15,"production systems"),Fe(),xe(16," and "),Ne(17,"strong"),xe(18,"computer vision"),Fe(),xe(19," solutions. Focused on real-time video analytics, model integration, and edge deployment. "),Fe(),Ne(20,"div",7)(21,"button",8),_l("click",function(){return n.openResume()}),xe(22,"Full Resume PDF"),Fe(),Ne(23,"button",9),_l("click",function(){return n.scrollToContact()}),xe(24,"Contact Engineering"),Fe()()(),Ne(25,"div",10)(26,"div",11)(27,"div",12),hi(28,"img",13),Ne(29,"div",14)(30,"h4",15),xe(31,"Debdeep Sanyal"),Fe(),Ne(32,"span",16),xe(33,"Android & AI/ML Engineer"),Fe()()(),Ne(34,"div",17)(35,"div",18)(36,"span",19),xe(37,"Domain"),Fe(),Ne(38,"span",20),xe(39,"Android / AI / Computer Vision"),Fe()(),Ne(40,"div",18)(41,"span",19),xe(42,"Education"),Fe(),Ne(43,"span",20),xe(44,"M.Tech (AI & Data Science)"),Fe()(),Ne(45,"div",18)(46,"span",19),xe(47,"Experience"),Fe(),Ne(48,"span",20),xe(49,"3 Years Professional"),Fe()()(),Ne(50,"div",21)(51,"div",22)(52,"span",23),xe(53,"Mobile Products"),Fe(),Ne(54,"span",24),xe(55,"End-to-End Delivery Portfolio"),Fe()(),Ne(56,"div",22)(57,"span",23),xe(58,"ML Specialization"),Fe(),Ne(59,"span",24),xe(60,"AI and Data Science (DS)"),Fe()()(),Ne(61,"div",25)(62,"a",26),hi(63,"i",27),xe(64," LinkedIn"),Fe(),Ne(65,"a",28),hi(66,"i",29),xe(67," Email"),Fe()()()()())},styles:[".hero-section[_ngcontent-%COMP%]{align-items:center;min-height:85vh;padding-top:8rem}.status-indicator[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.75rem;background:#a78bfa1a;color:var(--accent);padding:.5rem 1rem;border-radius:99px;font-size:.8rem;font-weight:600;margin-bottom:2rem;border:1px solid rgba(167,139,250,.2)}.dot[_ngcontent-%COMP%]{width:8px;height:8px;background:var(--accent);border-radius:50%;box-shadow:0 0 10px var(--accent);animation:_ngcontent-%COMP%_pulse 2s infinite}@keyframes _ngcontent-%COMP%_pulse{0%{transform:scale(1);opacity:1}50%{transform:scale(1.5);opacity:.5}to{transform:scale(1);opacity:1}}.hero-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--accent)}.hero-lead[_ngcontent-%COMP%]{font-size:1.25rem;color:var(--text-secondary);max-width:55ch;margin-bottom:3rem;line-height:1.6}.hero-actions[_ngcontent-%COMP%]{display:flex;gap:1.5rem}.hero-sidebar[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.snapshot-card[_ngcontent-%COMP%]{background:var(--bg-secondary);border:1px solid var(--border-color);border-radius:24px;padding:2rem;width:100%;max-width:420px;box-shadow:0 20px 50px #00000080}.profile-summary[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1.5rem;margin-bottom:2rem}.sidebar-avatar[_ngcontent-%COMP%]{width:70px;height:70px;border-radius:20px;object-fit:cover;border:2px solid var(--border-color)}.name[_ngcontent-%COMP%]{font-size:1.25rem;margin-bottom:.25rem}.role[_ngcontent-%COMP%]{font-size:.85rem;color:var(--accent);font-weight:600;text-transform:uppercase;letter-spacing:1px}.snapshot-inner[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;margin-bottom:2rem;padding-bottom:2rem;border-bottom:1px solid var(--border-color)}.snapshot-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:.85rem}.snapshot-label[_ngcontent-%COMP%]{color:var(--text-secondary)}.snapshot-value[_ngcontent-%COMP%]{font-weight:500;color:var(--text-primary);text-align:right}.snapshot-metrics[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem;margin-bottom:2rem}.metric[_ngcontent-%COMP%]{padding-left:1rem;border-left:2px solid var(--accent)}.metric-label[_ngcontent-%COMP%]{font-size:.75rem;text-transform:uppercase;color:var(--text-secondary);font-weight:700;display:block;margin-bottom:.25rem}.metric-value[_ngcontent-%COMP%]{font-size:.95rem;font-weight:600;color:var(--text-primary)}.social-links-sidebar[_ngcontent-%COMP%]{display:flex;justify-content:space-around;padding-top:1rem;border-top:1px solid var(--border-color)}.social-links-sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-secondary);text-decoration:none;font-size:.85rem;font-weight:600;transition:color .3s}.social-links-sidebar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--accent)}@media(max-width:1024px){.hero-title[_ngcontent-%COMP%]{font-size:3rem}.hero-sidebar[_ngcontent-%COMP%]{justify-content:flex-start;margin-top:3rem}}"]})};function Kw(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function Y2(i,e,t){return e&&Kw(i.prototype,e),t&&Kw(i,t),i}var kn,Ap,Z2,Bi,ro,so,Lc,eT,ua,bu,tT,_s,Tr,nT,iT=function(){return kn||typeof window<"u"&&(kn=window.gsap)&&kn.registerPlugin&&kn},rT=1,Oc=[],st=[],Cr=[],Su=Date.now,Q0=function(e,t){return t},J2=function(){var e=bu.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,st),r.push.apply(r,Cr),st=n,Cr=r,Q0=function(o,a){return t[o](a)}},vs=function(e,t){return~Cr.indexOf(e)&&Cr[Cr.indexOf(e)+1][t]},wu=function(e){return!!~tT.indexOf(e)},ri=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},ii=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Cp="scrollLeft",Dp="scrollTop",ev=function(){return _s&&_s.isPressed||st.cache++},Ip=function(e,t){var n=function r(s){if(s||s===0){rT&&(Bi.history.scrollRestoration="manual");var o=_s&&_s.isPressed;s=r.v=Math.round(s)||(_s&&_s.iOS?1:0),e(s),r.cacheID=st.cache,o&&Q0("ss",s)}else(t||st.cache!==r.cacheID||Q0("ref"))&&(r.cacheID=st.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},$n={s:Cp,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ip(function(i){return arguments.length?Bi.scrollTo(i,dn.sc()):Bi.pageXOffset||ro[Cp]||so[Cp]||Lc[Cp]||0})},dn={s:Dp,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:$n,sc:Ip(function(i){return arguments.length?Bi.scrollTo($n.sc(),i):Bi.pageYOffset||ro[Dp]||so[Dp]||Lc[Dp]||0})},si=function(e,t){return(t&&t._ctx&&t._ctx.selector||kn.utils.toArray)(e)[0]||(typeof e=="string"&&kn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},K2=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},ys=function(e,t){var n=t.s,r=t.sc;wu(e)&&(e=ro.scrollingElement||so);var s=st.indexOf(e),o=r===dn.sc?1:2;!~s&&(s=st.push(e)-1),st[s+o]||ri(e,"scroll",ev);var a=st[s+o],c=a||(st[s+o]=Ip(vs(e,n),!0)||(wu(e)?r:Ip(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,a||(c.smooth=kn.getProperty(e,"scrollBehavior")==="smooth"),c},Rp=function(e,t,n){var r=e,s=e,o=Su(),a=o,c=t||50,l=Math.max(500,c*3),u=function(_,g){var m=Su();g||m-o>c?(s=r,r=_,a=o,o=m):n?r+=_:r=s+(_-s)/(m-a)*(o-a)},d=function(){s=r=n?0:r,a=o=0},h=function(_){var g=a,m=s,p=Su();return(_||_===0)&&_!==r&&u(_),o===a||p-a>l?0:(r+(n?m:-m))/((n?p:o)-g)*1e3};return{update:u,reset:d,getVelocity:h}},Eu=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Qw=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},sT=function(){bu=kn.core.globals().ScrollTrigger,bu&&bu.core&&J2()},oT=function(e){return kn=e||iT(),!Ap&&kn&&typeof document<"u"&&document.body&&(Bi=window,ro=document,so=ro.documentElement,Lc=ro.body,tT=[Bi,ro,so,Lc],Z2=kn.utils.clamp,nT=kn.core.context||function(){},ua="onpointerenter"in Lc?"pointer":"mouse",eT=on.isTouch=Bi.matchMedia&&Bi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Bi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Tr=on.eventTypes=("ontouchstart"in so?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in so?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return rT=0},500),sT(),Ap=1),Ap};$n.op=dn;st.cache=0;var on=(function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Ap||oT(kn)||console.warn("Please gsap.registerPlugin(Observer)"),bu||sT();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,c=n.lineHeight,l=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,x=n.onDrag,b=n.onPress,M=n.onRelease,S=n.onRight,C=n.onLeft,T=n.onUp,A=n.onDown,y=n.onChangeX,E=n.onChangeY,R=n.onChange,O=n.onToggleX,U=n.onToggleY,W=n.onHover,G=n.onHoverEnd,H=n.onMove,k=n.ignoreCheck,X=n.isNormalizer,ie=n.onGestureStart,I=n.onGestureEnd,re=n.onWheel,Oe=n.onEnable,Ve=n.onDisable,Xe=n.onClick,Qe=n.scrollSpeed,Y=n.capture,K=n.allowClicks,fe=n.lockAxis,Ie=n.onLockAxis;this.target=a=si(a)||so,this.vars=n,f&&(f=kn.utils.toArray(f)),r=r||1e-9,s=s||0,_=_||1,Qe=Qe||1,o=o||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(Bi.getComputedStyle(Lc).lineHeight)||22);var Me,Ge,vt,we,He,et,ke,z=this,P=0,Dt=0,rt=n.passive||!u&&n.passive!==!1,ze=ys(a,$n),Ee=ys(a,dn),D=ze(),v=Ee(),L=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Tr[0]==="pointerdown",Z=wu(a),J=a.ownerDocument||ro,q=[0,0,0],ve=[0,0,0],se=0,Te=function(){return se=Su()},Se=function(Ae,nt){return(z.event=Ae)&&f&&K2(Ae.target,f)||nt&&L&&Ae.pointerType!=="touch"||k&&k(Ae,nt)},ne=function(){z._vx.reset(),z._vy.reset(),Ge.pause(),d&&d(z)},oe=function(){var Ae=z.deltaX=Qw(q),nt=z.deltaY=Qw(ve),pe=Math.abs(Ae)>=r,Ye=Math.abs(nt)>=r;R&&(pe||Ye)&&R(z,Ae,nt,q,ve),pe&&(S&&z.deltaX>0&&S(z),C&&z.deltaX<0&&C(z),y&&y(z),O&&z.deltaX<0!=P<0&&O(z),P=z.deltaX,q[0]=q[1]=q[2]=0),Ye&&(A&&z.deltaY>0&&A(z),T&&z.deltaY<0&&T(z),E&&E(z),U&&z.deltaY<0!=Dt<0&&U(z),Dt=z.deltaY,ve[0]=ve[1]=ve[2]=0),(we||vt)&&(H&&H(z),vt&&(m&&vt===1&&m(z),x&&x(z),vt=0),we=!1),et&&!(et=!1)&&Ie&&Ie(z),He&&(re(z),He=!1),Me=0},be=function(Ae,nt,pe){q[pe]+=Ae,ve[pe]+=nt,z._vx.update(Ae),z._vy.update(nt),l?Me||(Me=requestAnimationFrame(oe)):oe()},Ce=function(Ae,nt){fe&&!ke&&(z.axis=ke=Math.abs(Ae)>Math.abs(nt)?"x":"y",et=!0),ke!=="y"&&(q[2]+=Ae,z._vx.update(Ae,!0)),ke!=="x"&&(ve[2]+=nt,z._vy.update(nt,!0)),l?Me||(Me=requestAnimationFrame(oe)):oe()},ae=function(Ae){if(!Se(Ae,1)){Ae=Eu(Ae,u);var nt=Ae.clientX,pe=Ae.clientY,Ye=nt-z.x,Pe=pe-z.y,Ze=z.isDragging;z.x=nt,z.y=pe,(Ze||(Ye||Pe)&&(Math.abs(z.startX-nt)>=s||Math.abs(z.startY-pe)>=s))&&(vt||(vt=Ze?2:1),Ze||(z.isDragging=!0),Ce(Ye,Pe))}},$e=z.onPress=function(ge){Se(ge,1)||ge&&ge.button||(z.axis=ke=null,Ge.pause(),z.isPressed=!0,ge=Eu(ge),P=Dt=0,z.startX=z.x=ge.clientX,z.startY=z.y=ge.clientY,z._vx.reset(),z._vy.reset(),ri(X?a:J,Tr[1],ae,rt,!0),z.deltaX=z.deltaY=0,b&&b(z))},N=z.onRelease=function(ge){if(!Se(ge,1)){ii(X?a:J,Tr[1],ae,!0);var Ae=!isNaN(z.y-z.startY),nt=z.isDragging,pe=nt&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Ye=Eu(ge);!pe&&Ae&&(z._vx.reset(),z._vy.reset(),u&&K&&kn.delayedCall(.08,function(){if(Su()-se>300&&!ge.defaultPrevented){if(ge.target.click)ge.target.click();else if(J.createEvent){var Pe=J.createEvent("MouseEvents");Pe.initMouseEvent("click",!0,!0,Bi,1,Ye.screenX,Ye.screenY,Ye.clientX,Ye.clientY,!1,!1,!1,!1,0,null),ge.target.dispatchEvent(Pe)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,d&&nt&&!X&&Ge.restart(!0),vt&&oe(),p&&nt&&p(z),M&&M(z,pe)}},ue=function(Ae){return Ae.touches&&Ae.touches.length>1&&(z.isGesturing=!0)&&ie(Ae,z.isDragging)},te=function(){return(z.isGesturing=!1)||I(z)},de=function(Ae){if(!Se(Ae)){var nt=ze(),pe=Ee();be((nt-D)*Qe,(pe-v)*Qe,1),D=nt,v=pe,d&&Ge.restart(!0)}},ee=function(Ae){if(!Se(Ae)){Ae=Eu(Ae,u),re&&(He=!0);var nt=(Ae.deltaMode===1?c:Ae.deltaMode===2?Bi.innerHeight:1)*_;be(Ae.deltaX*nt,Ae.deltaY*nt,0),d&&!X&&Ge.restart(!0)}},Q=function(Ae){if(!Se(Ae)){var nt=Ae.clientX,pe=Ae.clientY,Ye=nt-z.x,Pe=pe-z.y;z.x=nt,z.y=pe,we=!0,d&&Ge.restart(!0),(Ye||Pe)&&Ce(Ye,Pe)}},le=function(Ae){z.event=Ae,W(z)},Le=function(Ae){z.event=Ae,G(z)},Mt=function(Ae){return Se(Ae)||Eu(Ae,u)&&Xe(z)};Ge=z._dc=kn.delayedCall(h||.25,ne).pause(),z.deltaX=z.deltaY=0,z._vx=Rp(0,50,!0),z._vy=Rp(0,50,!0),z.scrollX=ze,z.scrollY=Ee,z.isDragging=z.isGesturing=z.isPressed=!1,nT(this),z.enable=function(ge){return z.isEnabled||(ri(Z?J:a,"scroll",ev),o.indexOf("scroll")>=0&&ri(Z?J:a,"scroll",de,rt,Y),o.indexOf("wheel")>=0&&ri(a,"wheel",ee,rt,Y),(o.indexOf("touch")>=0&&eT||o.indexOf("pointer")>=0)&&(ri(a,Tr[0],$e,rt,Y),ri(J,Tr[2],N),ri(J,Tr[3],N),K&&ri(a,"click",Te,!0,!0),Xe&&ri(a,"click",Mt),ie&&ri(J,"gesturestart",ue),I&&ri(J,"gestureend",te),W&&ri(a,ua+"enter",le),G&&ri(a,ua+"leave",Le),H&&ri(a,ua+"move",Q)),z.isEnabled=!0,z.isDragging=z.isGesturing=z.isPressed=we=vt=!1,z._vx.reset(),z._vy.reset(),D=ze(),v=Ee(),ge&&ge.type&&$e(ge),Oe&&Oe(z)),z},z.disable=function(){z.isEnabled&&(Oc.filter(function(ge){return ge!==z&&wu(ge.target)}).length||ii(Z?J:a,"scroll",ev),z.isPressed&&(z._vx.reset(),z._vy.reset(),ii(X?a:J,Tr[1],ae,!0)),ii(Z?J:a,"scroll",de,Y),ii(a,"wheel",ee,Y),ii(a,Tr[0],$e,Y),ii(J,Tr[2],N),ii(J,Tr[3],N),ii(a,"click",Te,!0),ii(a,"click",Mt),ii(J,"gesturestart",ue),ii(J,"gestureend",te),ii(a,ua+"enter",le),ii(a,ua+"leave",Le),ii(a,ua+"move",Q),z.isEnabled=z.isPressed=z.isDragging=!1,Ve&&Ve(z))},z.kill=z.revert=function(){z.disable();var ge=Oc.indexOf(z);ge>=0&&Oc.splice(ge,1),_s===z&&(_s=0)},Oc.push(z),X&&wu(a)&&(_s=z),z.enable(g)},Y2(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i})();on.version="3.14.2";on.create=function(i){return new on(i)};on.register=oT;on.getAll=function(){return Oc.slice()};on.getById=function(i){return Oc.filter(function(e){return e.vars.id===i})[0]};iT()&&kn.registerPlugin(on);var De,Uc,ut,Gt,zi,It,mv,qp,Bu,Nu,Cu,Np,qn,Zp,cv,ai,aT,cT,Bc,ST,tv,wT,oi,lv,TT,CT,oo,uv,gv,Vc,_v,Pu,dv,nv,Pp=1,Xn=Date.now,iv=Xn(),or=0,Du=0,lT=function(e,t,n){var r=Hi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},uT=function(e,t){return t&&(!Hi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Q2=function i(){return Du&&requestAnimationFrame(i)},dT=function(){return Zp=1},fT=function(){return Zp=0},jr=function(e){return e},Au=function(e){return Math.round(e*1e5)/1e5||0},DT=function(){return typeof window<"u"},AT=function(){return De||DT()&&(De=window.gsap)&&De.registerPlugin&&De},ga=function(e){return!!~mv.indexOf(e)},IT=function(e){return(e==="Height"?_v:ut["inner"+e])||zi["client"+e]||It["client"+e]},RT=function(e){return vs(e,"getBoundingClientRect")||(ga(e)?function(){return $p.width=ut.innerWidth,$p.height=_v,$p}:function(){return xs(e)})},ek=function(e,t,n){var r=n.d,s=n.d2,o=n.a;return(o=vs(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?IT(s):e["client"+s])||0}},tk=function(e,t){return!t||~Cr.indexOf(e)?RT(e):function(){return $p}},$r=function(e,t){var n=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+r)&&(o=vs(e,n))?o()-RT(e)()[s]:ga(e)?(zi[n]||It[n])-IT(r):e[n]-e["offset"+r])},Op=function(e,t){for(var n=0;n<Bc.length;n+=3)(!t||~t.indexOf(Bc[n+1]))&&e(Bc[n],Bc[n+1],Bc[n+2])},Hi=function(e){return typeof e=="string"},Yn=function(e){return typeof e=="function"},Iu=function(e){return typeof e=="number"},da=function(e){return typeof e=="object"},Tu=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},rv=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Fc=Math.abs,NT="left",PT="top",yv="right",vv="bottom",ha="width",pa="height",Ou="Right",Lu="Left",Fu="Top",ku="Bottom",fn="padding",rr="margin",zc="Width",xv="Height",vn="px",sr=function(e){return ut.getComputedStyle(e)},nk=function(e){var t=sr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},hT=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},xs=function(e,t){var n=t&&sr(e)[cv]!=="matrix(1, 0, 0, 1, 0, 0)"&&De.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},Xp=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},OT=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},ik=function(e){return function(t){return De.utils.snap(OT(e),t)}},Mv=function(e){var t=De.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},rk=function(e){return function(t,n){return Mv(OT(e))(t,n.direction)}},Lp=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},Cn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},Tn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Fp=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},pT={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},kp={toggleActions:"play",anticipatePin:0},Yp={top:0,left:0,center:.5,bottom:1,right:1},zp=function(e,t){if(Hi(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Yp?Yp[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Up=function(e,t,n,r,s,o,a,c){var l=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,_=Gt.createElement("div"),g=ga(n)||vs(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?It:n,x=e.indexOf("start")!==-1,b=x?l:u,M="border-color:"+b+";font-size:"+d+";color:"+b+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((m||c)&&g?"fixed;":"absolute;"),(m||c||!g)&&(M+=(r===dn?yv:vv)+":"+(o+parseFloat(h))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=x,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=M,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+r.op.d2],Gp(_,0,r,x),_},Gp=function(e,t,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+zc]=1,s["border"+a+zc]=0,s[n.p]=t+"px",De.set(e,s)},ot=[],fv={},Vu,mT=function(){return Xn()-or>34&&(Vu||(Vu=requestAnimationFrame(Ms)))},kc=function(){(!oi||!oi.isPressed||oi.startX>It.clientWidth)&&(st.cache++,oi?Vu||(Vu=requestAnimationFrame(Ms)):Ms(),or||ya("scrollStart"),or=Xn())},sv=function(){CT=ut.innerWidth,TT=ut.innerHeight},Ru=function(e){st.cache++,(e===!0||!qn&&!wT&&!Gt.fullscreenElement&&!Gt.webkitFullscreenElement&&(!lv||CT!==ut.innerWidth||Math.abs(ut.innerHeight-TT)>ut.innerHeight*.25))&&qp.restart(!0)},_a={},sk=[],LT=function i(){return Tn(dt,"scrollEnd",i)||fa(!0)},ya=function(e){return _a[e]&&_a[e].map(function(t){return t()})||sk},Vi=[],FT=function(e){for(var t=0;t<Vi.length;t+=5)(!e||Vi[t+4]&&Vi[t+4].query===e)&&(Vi[t].style.cssText=Vi[t+1],Vi[t].getBBox&&Vi[t].setAttribute("transform",Vi[t+2]||""),Vi[t+3].uncache=1)},kT=function(){return st.forEach(function(e){return Yn(e)&&++e.cacheID&&(e.rec=e())})},Ev=function(e,t){var n;for(ai=0;ai<ot.length;ai++)n=ot[ai],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Pu=!0,t&&FT(t),t||ya("revert")},UT=function(e,t){st.cache++,(t||!ci)&&st.forEach(function(n){return Yn(n)&&n.cacheID++&&(n.rec=0)}),Hi(e)&&(ut.history.scrollRestoration=gv=e)},ci,ma=0,gT,ok=function(){if(gT!==ma){var e=gT=ma;requestAnimationFrame(function(){return e===ma&&fa(!0)})}},BT=function(){It.appendChild(Vc),_v=!oi&&Vc.offsetHeight||ut.innerHeight,It.removeChild(Vc)},_T=function(e){return Bu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},fa=function(e,t){if(zi=Gt.documentElement,It=Gt.body,mv=[ut,Gt,zi,It],or&&!e&&!Pu){Cn(dt,"scrollEnd",LT);return}BT(),ci=dt.isRefreshing=!0,Pu||kT();var n=ya("refreshInit");ST&&dt.sort(),t||Ev(),st.forEach(function(r){Yn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ot.slice(0).forEach(function(r){return r.refresh()}),Pu=!1,ot.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),dv=1,_T(!0),ot.forEach(function(r){var s=$r(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),_T(!1),dv=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),st.forEach(function(r){Yn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),UT(gv,1),qp.pause(),ma++,ci=2,Ms(2),ot.forEach(function(r){return Yn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),ci=dt.isRefreshing=!1,ya("refresh")},hv=0,Wp=1,Uu,Ms=function(e){if(e===2||!ci&&!Pu){dt.isUpdating=!0,Uu&&Uu.update(0);var t=ot.length,n=Xn(),r=n-iv>=50,s=t&&ot[0].scroll();if(Wp=hv>s?-1:1,ci||(hv=s),r&&(or&&!Zp&&n-or>200&&(or=0,ya("scrollEnd")),Cu=iv,iv=n),Wp<0){for(ai=t;ai-- >0;)ot[ai]&&ot[ai].update(0,r);Wp=1}else for(ai=0;ai<t;ai++)ot[ai]&&ot[ai].update(0,r);dt.isUpdating=!1}Vu=0},pv=[NT,PT,vv,yv,rr+ku,rr+Ou,rr+Fu,rr+Lu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],jp=pv.concat([ha,pa,"boxSizing","max"+zc,"max"+xv,"position",rr,fn,fn+Fu,fn+Ou,fn+ku,fn+Lu]),ak=function(e,t,n){Hc(n);var r=e._gsap;if(r.spacerIsNative)Hc(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},ov=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=pv.length,o=t.style,a=e.style,c;s--;)c=pv[s],o[c]=n[c];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[vv]=a[yv]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ha]=Xp(e,$n)+vn,o[pa]=Xp(e,dn)+vn,o[fn]=a[rr]=a[PT]=a[NT]="0",Hc(r),a[ha]=a["max"+zc]=n[ha],a[pa]=a["max"+xv]=n[pa],a[fn]=n[fn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},ck=/([A-Z])/g,Hc=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,o;for((e.t._gsap||De.core.getCache(e.t)).uncache=1;r<n;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(ck,"-$1").toLowerCase())}},Bp=function(e){for(var t=jp.length,n=e.style,r=[],s=0;s<t;s++)r.push(jp[s],n[jp[s]]);return r.t=e,r},lk=function(e,t,n){for(var r=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},$p={left:0,top:0},yT=function(e,t,n,r,s,o,a,c,l,u,d,h,f,_){Yn(e)&&(e=e(c)),Hi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?zp("0"+e.substr(3),n):0));var g=f?f.time():0,m,p,x;if(f&&f.seek(0),isNaN(e)||(e=+e),Iu(e))f&&(e=De.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),a&&Gp(a,n,r,!0);else{Yn(t)&&(t=t(c));var b=(e||"0").split(" "),M,S,C,T;x=si(t,c)||It,M=xs(x)||{},(!M||!M.left&&!M.top)&&sr(x).display==="none"&&(T=x.style.display,x.style.display="block",M=xs(x),T?x.style.display=T:x.style.removeProperty("display")),S=zp(b[0],M[r.d]),C=zp(b[1]||"0",n),e=M[r.p]-l[r.p]-u+S+s-C,a&&Gp(a,C,r,n-C<20||a._isStart&&C>20),n-=n-C}if(_&&(c[_]=e||-.001,e<0&&(e=0)),o){var A=e+n,y=o._isStart;m="scroll"+r.d2,Gp(o,A,r,y&&A>20||!y&&(d?Math.max(It[m],zi[m]):o.parentNode[m])<=A+1),d&&(l=xs(a),d&&(o.style[r.op.p]=l[r.op.p]-r.op.m-o._offset+vn))}return f&&x&&(m=xs(x),f.seek(h),p=xs(x),f._caScrollDist=m[r.p]-p[r.p],e=e/f._caScrollDist*h),f&&f.seek(g),f?e:Math.round(e)},uk=/(webkit|moz|length|cssText|inset)/i,vT=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===It){e._stOrig=s.cssText,a=sr(e);for(o in a)!+o&&!uk.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=e._stOrig;De.core.getCache(e).uncache=1,t.appendChild(e)}},VT=function(e,t,n){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=Math.round(o),r}},Vp=function(e,t,n){var r={};r[t.p]="+="+n,De.set(e,r)},xT=function(e,t){var n=ys(e,t),r="_scroll"+t.p2,s=function o(a,c,l,u,d){var h=o.tween,f=c.onComplete,_={};l=l||n();var g=VT(n,l,function(){h.kill(),o.tween=0});return d=u&&d||0,u=u||a-l,h&&h.kill(),c[r]=a,c.inherit=!1,c.modifiers=_,_[r]=function(){return g(l+u*h.ratio+d*h.ratio*h.ratio)},c.onUpdate=function(){st.cache++,o.tween&&Ms()},c.onComplete=function(){o.tween=0,f&&f.call(h)},h=o.tween=De.to(e,c),h};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Cn(e,"wheel",n.wheelHandler),dt.isTouch&&Cn(e,"touchmove",n.wheelHandler),s},dt=(function(){function i(t,n){Uc||i.register(De)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),uv(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Du){this.update=this.refresh=this.kill=jr;return}n=hT(Hi(n)||Iu(n)||n.nodeType?{trigger:n}:n,kp);var s=n,o=s.onUpdate,a=s.toggleClass,c=s.id,l=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,x=s.onSnapComplete,b=s.once,M=s.snap,S=s.pinReparent,C=s.pinSpacer,T=s.containerAnimation,A=s.fastScrollEnd,y=s.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?$n:dn,R=!d&&d!==0,O=si(n.scroller||ut),U=De.core.getCache(O),W=ga(O),G=("pinType"in n?n.pinType:vs(O,"pinType")||W&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=R&&n.toggleActions.split(" "),X="markers"in n?n.markers:kp.markers,ie=W?0:parseFloat(sr(O)["border"+E.p2+zc])||0,I=this,re=n.onRefreshInit&&function(){return n.onRefreshInit(I)},Oe=ek(O,W,E),Ve=tk(O,W),Xe=0,Qe=0,Y=0,K=ys(O,E),fe,Ie,Me,Ge,vt,we,He,et,ke,z,P,Dt,rt,ze,Ee,D,v,L,Z,J,q,ve,se,Te,Se,ne,oe,be,Ce,ae,$e,N,ue,te,de,ee,Q,le,Le;if(I._startClamp=I._endClamp=!1,I._dir=E,m*=45,I.scroller=O,I.scroll=T?T.time.bind(T):K,Ge=K(),I.vars=n,r=r||n.animation,"refreshPriority"in n&&(ST=1,n.refreshPriority===-9999&&(Uu=I)),U.tweenScroll=U.tweenScroll||{top:xT(O,dn),left:xT(O,$n)},I.tweenTo=fe=U.tweenScroll[E.p],I.scrubDuration=function(pe){ue=Iu(pe)&&pe,ue?N?N.duration(pe):N=De.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ue,paused:!0,onComplete:function(){return p&&p(I)}}):(N&&N.progress(1).kill(),N=0)},r&&(r.vars.lazy=!1,r._initted&&!I.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),I.animation=r.pause(),r.scrollTrigger=I,I.scrubDuration(d),ae=0,c||(c=r.vars.id)),M&&((!da(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in It.style&&De.set(W?[It,zi]:O,{scrollBehavior:"auto"}),st.forEach(function(pe){return Yn(pe)&&pe.target===(W?Gt.scrollingElement||zi:O)&&(pe.smooth=!1)}),Me=Yn(M.snapTo)?M.snapTo:M.snapTo==="labels"?ik(r):M.snapTo==="labelsDirectional"?rk(r):M.directional!==!1?function(pe,Ye){return Mv(M.snapTo)(pe,Xn()-Qe<500?0:Ye.direction)}:De.utils.snap(M.snapTo),te=M.duration||{min:.1,max:2},te=da(te)?Nu(te.min,te.max):Nu(te,te),de=De.delayedCall(M.delay||ue/2||.1,function(){var pe=K(),Ye=Xn()-Qe<500,Pe=fe.tween;if((Ye||Math.abs(I.getVelocity())<10)&&!Pe&&!Zp&&Xe!==pe){var Ze=(pe-we)/ze,an=r&&!R?r.totalProgress():Ze,at=Ye?0:(an-$e)/(Xn()-Cu)*1e3||0,Rt=De.utils.clamp(-Ze,1-Ze,Fc(at/2)*at/.185),ln=Ze+(M.inertia===!1?0:Rt),Wt,kt,Et=M,li=Et.onStart,Pt=Et.onInterrupt,Un=Et.onComplete;if(Wt=Me(ln,I),Iu(Wt)||(Wt=ln),kt=Math.max(0,Math.round(we+Wt*ze)),pe<=He&&pe>=we&&kt!==pe){if(Pe&&!Pe._initted&&Pe.data<=Fc(kt-pe))return;M.inertia===!1&&(Rt=Wt-Ze),fe(kt,{duration:te(Fc(Math.max(Fc(ln-an),Fc(Wt-an))*.185/at/.05||0)),ease:M.ease||"power3",data:Fc(kt-pe),onInterrupt:function(){return de.restart(!0)&&Pt&&Pt(I)},onComplete:function(){I.update(),Xe=K(),r&&!R&&(N?N.resetTo("totalProgress",Wt,r._tTime/r._tDur):r.progress(Wt)),ae=$e=r&&!R?r.totalProgress():I.progress,x&&x(I),Un&&Un(I)}},pe,Rt*ze,kt-pe-Rt*ze),li&&li(I,fe.tween)}}else I.isActive&&Xe!==pe&&de.restart(!0)}).pause()),c&&(fv[c]=I),h=I.trigger=si(h||f!==!0&&f),Le=h&&h._gsap&&h._gsap.stRevert,Le&&(Le=Le(I)),f=f===!0?h:si(f),Hi(a)&&(a={targets:h,className:a}),f&&(_===!1||_===rr||(_=!_&&f.parentNode&&f.parentNode.style&&sr(f.parentNode).display==="flex"?!1:fn),I.pin=f,Ie=De.core.getCache(f),Ie.spacer?Ee=Ie.pinState:(C&&(C=si(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),Ie.spacerIsNative=!!C,C&&(Ie.spacerState=Bp(C))),Ie.spacer=L=C||Gt.createElement("div"),L.classList.add("pin-spacer"),c&&L.classList.add("pin-spacer-"+c),Ie.pinState=Ee=Bp(f)),n.force3D!==!1&&De.set(f,{force3D:!0}),I.spacer=L=Ie.spacer,Ce=sr(f),Te=Ce[_+E.os2],J=De.getProperty(f),q=De.quickSetter(f,E.a,vn),ov(f,L,Ce),v=Bp(f)),X){Dt=da(X)?hT(X,pT):pT,z=Up("scroller-start",c,O,E,Dt,0),P=Up("scroller-end",c,O,E,Dt,0,z),Z=z["offset"+E.op.d2];var Mt=si(vs(O,"content")||O);et=this.markerStart=Up("start",c,Mt,E,Dt,Z,0,T),ke=this.markerEnd=Up("end",c,Mt,E,Dt,Z,0,T),T&&(le=De.quickSetter([et,ke],E.a,vn)),!G&&!(Cr.length&&vs(O,"fixedMarkers")===!0)&&(nk(W?It:O),De.set([z,P],{force3D:!0}),ne=De.quickSetter(z,E.a,vn),be=De.quickSetter(P,E.a,vn))}if(T){var ge=T.vars.onUpdate,Ae=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){I.update(0,0,1),ge&&ge.apply(T,Ae||[])})}if(I.previous=function(){return ot[ot.indexOf(I)-1]},I.next=function(){return ot[ot.indexOf(I)+1]},I.revert=function(pe,Ye){if(!Ye)return I.kill(!0);var Pe=pe!==!1||!I.enabled,Ze=qn;Pe!==I.isReverted&&(Pe&&(ee=Math.max(K(),I.scroll.rec||0),Y=I.progress,Q=r&&r.progress()),et&&[et,ke,z,P].forEach(function(an){return an.style.display=Pe?"none":"block"}),Pe&&(qn=I,I.update(Pe)),f&&(!S||!I.isActive)&&(Pe?ak(f,L,Ee):ov(f,L,sr(f),Se)),Pe||I.update(Pe),qn=Ze,I.isReverted=Pe)},I.refresh=function(pe,Ye,Pe,Ze){if(!((qn||!I.enabled)&&!Ye)){if(f&&pe&&or){Cn(i,"scrollEnd",LT);return}!ci&&re&&re(I),qn=I,fe.tween&&!Pe&&(fe.tween.kill(),fe.tween=0),N&&N.pause(),g&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(ye){return ye.vars.immediateRender&&ye.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var an=Oe(),at=Ve(),Rt=T?T.duration():$r(O,E),ln=ze<=.01||!ze,Wt=0,kt=Ze||0,Et=da(Pe)?Pe.end:n.end,li=n.endTrigger||h,Pt=da(Pe)?Pe.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),Un=I.pinnedContainer=n.pinnedContainer&&si(n.pinnedContainer,I),Mi=h&&Math.max(0,ot.indexOf(I))||0,hn=Mi,pn,xn,qr,va,Mn,w,F,$,j,B,ce,_e,he;for(X&&da(Pe)&&(_e=De.getProperty(z,E.p),he=De.getProperty(P,E.p));hn-- >0;)w=ot[hn],w.end||w.refresh(0,1)||(qn=I),F=w.pin,F&&(F===h||F===f||F===Un)&&!w.isReverted&&(B||(B=[]),B.unshift(w),w.revert(!0,!0)),w!==ot[hn]&&(Mi--,hn--);for(Yn(Pt)&&(Pt=Pt(I)),Pt=lT(Pt,"start",I),we=yT(Pt,h,an,E,K(),et,z,I,at,ie,G,Rt,T,I._startClamp&&"_startClamp")||(f?-.001:0),Yn(Et)&&(Et=Et(I)),Hi(Et)&&!Et.indexOf("+=")&&(~Et.indexOf(" ")?Et=(Hi(Pt)?Pt.split(" ")[0]:"")+Et:(Wt=zp(Et.substr(2),an),Et=Hi(Pt)?Pt:(T?De.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,we):we)+Wt,li=h)),Et=lT(Et,"end",I),He=Math.max(we,yT(Et||(li?"100% 0":Rt),li,an,E,K()+Wt,ke,P,I,at,ie,G,Rt,T,I._endClamp&&"_endClamp"))||-.001,Wt=0,hn=Mi;hn--;)w=ot[hn]||{},F=w.pin,F&&w.start-w._pinPush<=we&&!T&&w.end>0&&(pn=w.end-(I._startClamp?Math.max(0,w.start):w.start),(F===h&&w.start-w._pinPush<we||F===Un)&&isNaN(Pt)&&(Wt+=pn*(1-w.progress)),F===f&&(kt+=pn));if(we+=Wt,He+=Wt,I._startClamp&&(I._startClamp+=Wt),I._endClamp&&!ci&&(I._endClamp=He||-.001,He=Math.min(He,$r(O,E))),ze=He-we||(we-=.01)&&.001,ln&&(Y=De.utils.clamp(0,1,De.utils.normalize(we,He,ee))),I._pinPush=kt,et&&Wt&&(pn={},pn[E.a]="+="+Wt,Un&&(pn[E.p]="-="+K()),De.set([et,ke],pn)),f&&!(dv&&I.end>=$r(O,E)))pn=sr(f),va=E===dn,qr=K(),ve=parseFloat(J(E.a))+kt,!Rt&&He>1&&(ce=(W?Gt.scrollingElement||zi:O).style,ce={style:ce,value:ce["overflow"+E.a.toUpperCase()]},W&&sr(It)["overflow"+E.a.toUpperCase()]!=="scroll"&&(ce.style["overflow"+E.a.toUpperCase()]="scroll")),ov(f,L,pn),v=Bp(f),xn=xs(f,!0),$=G&&ys(O,va?$n:dn)(),_?(Se=[_+E.os2,ze+kt+vn],Se.t=L,hn=_===fn?Xp(f,E)+ze+kt:0,hn&&(Se.push(E.d,hn+vn),L.style.flexBasis!=="auto"&&(L.style.flexBasis=hn+vn)),Hc(Se),Un&&ot.forEach(function(ye){ye.pin===Un&&ye.vars.pinSpacing!==!1&&(ye._subPinOffset=!0)}),G&&K(ee)):(hn=Xp(f,E),hn&&L.style.flexBasis!=="auto"&&(L.style.flexBasis=hn+vn)),G&&(Mn={top:xn.top+(va?qr-we:$)+vn,left:xn.left+(va?$:qr-we)+vn,boxSizing:"border-box",position:"fixed"},Mn[ha]=Mn["max"+zc]=Math.ceil(xn.width)+vn,Mn[pa]=Mn["max"+xv]=Math.ceil(xn.height)+vn,Mn[rr]=Mn[rr+Fu]=Mn[rr+Ou]=Mn[rr+ku]=Mn[rr+Lu]="0",Mn[fn]=pn[fn],Mn[fn+Fu]=pn[fn+Fu],Mn[fn+Ou]=pn[fn+Ou],Mn[fn+ku]=pn[fn+ku],Mn[fn+Lu]=pn[fn+Lu],D=lk(Ee,Mn,S),ci&&K(0)),r?(j=r._initted,tv(1),r.render(r.duration(),!0,!0),se=J(E.a)-ve+ze+kt,oe=Math.abs(ze-se)>1,G&&oe&&D.splice(D.length-2,2),r.render(0,!0,!0),j||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),tv(0)):se=ze,ce&&(ce.value?ce.style["overflow"+E.a.toUpperCase()]=ce.value:ce.style.removeProperty("overflow-"+E.a));else if(h&&K()&&!T)for(xn=h.parentNode;xn&&xn!==It;)xn._pinOffset&&(we-=xn._pinOffset,He-=xn._pinOffset),xn=xn.parentNode;B&&B.forEach(function(ye){return ye.revert(!1,!0)}),I.start=we,I.end=He,Ge=vt=ci?ee:K(),!T&&!ci&&(Ge<ee&&K(ee),I.scroll.rec=0),I.revert(!1,!0),Qe=Xn(),de&&(Xe=-1,de.restart(!0)),qn=0,r&&R&&(r._initted||Q)&&r.progress()!==Q&&r.progress(Q||0,!0).render(r.time(),!0,!0),(ln||Y!==I.progress||T||g||r&&!r._initted)&&(r&&!R&&(r._initted||Y||r.vars.immediateRender!==!1)&&r.totalProgress(T&&we<-.001&&!Y?De.utils.normalize(we,He,0):Y,!0),I.progress=ln||(Ge-we)/ze===Y?0:Y),f&&_&&(L._pinOffset=Math.round(I.progress*se)),N&&N.invalidate(),isNaN(_e)||(_e-=De.getProperty(z,E.p),he-=De.getProperty(P,E.p),Vp(z,E,_e),Vp(et,E,_e-(Ze||0)),Vp(P,E,he),Vp(ke,E,he-(Ze||0))),ln&&!ci&&I.update(),u&&!ci&&!rt&&(rt=!0,u(I),rt=!1)}},I.getVelocity=function(){return(K()-vt)/(Xn()-Cu)*1e3||0},I.endAnimation=function(){Tu(I.callbackAnimation),r&&(N?N.progress(1):r.paused()?R||Tu(r,I.direction<0,1):Tu(r,r.reversed()))},I.labelToScroll=function(pe){return r&&r.labels&&(we||I.refresh()||we)+r.labels[pe]/r.duration()*ze||0},I.getTrailing=function(pe){var Ye=ot.indexOf(I),Pe=I.direction>0?ot.slice(0,Ye).reverse():ot.slice(Ye+1);return(Hi(pe)?Pe.filter(function(Ze){return Ze.vars.preventOverlaps===pe}):Pe).filter(function(Ze){return I.direction>0?Ze.end<=we:Ze.start>=He})},I.update=function(pe,Ye,Pe){if(!(T&&!Pe&&!pe)){var Ze=ci===!0?ee:I.scroll(),an=pe?0:(Ze-we)/ze,at=an<0?0:an>1?1:an||0,Rt=I.progress,ln,Wt,kt,Et,li,Pt,Un,Mi;if(Ye&&(vt=Ge,Ge=T?K():Ze,M&&($e=ae,ae=r&&!R?r.totalProgress():at)),m&&f&&!qn&&!Pp&&or&&(!at&&we<Ze+(Ze-vt)/(Xn()-Cu)*m?at=1e-4:at===1&&He>Ze+(Ze-vt)/(Xn()-Cu)*m&&(at=.9999)),at!==Rt&&I.enabled){if(ln=I.isActive=!!at&&at<1,Wt=!!Rt&&Rt<1,Pt=ln!==Wt,li=Pt||!!at!=!!Rt,I.direction=at>Rt?1:-1,I.progress=at,li&&!qn&&(kt=at&&!Rt?0:at===1?1:Rt===1?2:3,R&&(Et=!Pt&&k[kt+1]!=="none"&&k[kt+1]||k[kt],Mi=r&&(Et==="complete"||Et==="reset"||Et in r))),y&&(Pt||Mi)&&(Mi||d||!r)&&(Yn(y)?y(I):I.getTrailing(y).forEach(function(qr){return qr.endAnimation()})),R||(N&&!qn&&!Pp?(N._dp._time-N._start!==N._time&&N.render(N._dp._time-N._start),N.resetTo?N.resetTo("totalProgress",at,r._tTime/r._tDur):(N.vars.totalProgress=at,N.invalidate().restart())):r&&r.totalProgress(at,!!(qn&&(Qe||pe)))),f){if(pe&&_&&(L.style[_+E.os2]=Te),!G)q(Au(ve+se*at));else if(li){if(Un=!pe&&at>Rt&&He+1>Ze&&Ze+1>=$r(O,E),S)if(!pe&&(ln||Un)){var hn=xs(f,!0),pn=Ze-we;vT(f,It,hn.top+(E===dn?pn:0)+vn,hn.left+(E===dn?0:pn)+vn)}else vT(f,L);Hc(ln||Un?D:v),oe&&at<1&&ln||q(ve+(at===1&&!Un?se:0))}}M&&!fe.tween&&!qn&&!Pp&&de.restart(!0),a&&(Pt||b&&at&&(at<1||!nv))&&Bu(a.targets).forEach(function(qr){return qr.classList[ln||b?"add":"remove"](a.className)}),o&&!R&&!pe&&o(I),li&&!qn?(R&&(Mi&&(Et==="complete"?r.pause().totalProgress(1):Et==="reset"?r.restart(!0).pause():Et==="restart"?r.restart(!0):r[Et]()),o&&o(I)),(Pt||!nv)&&(l&&Pt&&rv(I,l),H[kt]&&rv(I,H[kt]),b&&(at===1?I.kill(!1,1):H[kt]=0),Pt||(kt=at===1?1:3,H[kt]&&rv(I,H[kt]))),A&&!ln&&Math.abs(I.getVelocity())>(Iu(A)?A:2500)&&(Tu(I.callbackAnimation),N?N.progress(1):Tu(r,Et==="reverse"?1:!at,1))):R&&o&&!qn&&o(I)}if(be){var xn=T?Ze/T.duration()*(T._caScrollDist||0):Ze;ne(xn+(z._isFlipped?1:0)),be(xn)}le&&le(-Ze/T.duration()*(T._caScrollDist||0))}},I.enable=function(pe,Ye){I.enabled||(I.enabled=!0,Cn(O,"resize",Ru),W||Cn(O,"scroll",kc),re&&Cn(i,"refreshInit",re),pe!==!1&&(I.progress=Y=0,Ge=vt=Xe=K()),Ye!==!1&&I.refresh())},I.getTween=function(pe){return pe&&fe?fe.tween:N},I.setPositions=function(pe,Ye,Pe,Ze){if(T){var an=T.scrollTrigger,at=T.duration(),Rt=an.end-an.start;pe=an.start+Rt*pe/at,Ye=an.start+Rt*Ye/at}I.refresh(!1,!1,{start:uT(pe,Pe&&!!I._startClamp),end:uT(Ye,Pe&&!!I._endClamp)},Ze),I.update()},I.adjustPinSpacing=function(pe){if(Se&&pe){var Ye=Se.indexOf(E.d)+1;Se[Ye]=parseFloat(Se[Ye])+pe+vn,Se[1]=parseFloat(Se[1])+pe+vn,Hc(Se)}},I.disable=function(pe,Ye){if(pe!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,Ye||N&&N.pause(),ee=0,Ie&&(Ie.uncache=1),re&&Tn(i,"refreshInit",re),de&&(de.pause(),fe.tween&&fe.tween.kill()&&(fe.tween=0)),!W)){for(var Pe=ot.length;Pe--;)if(ot[Pe].scroller===O&&ot[Pe]!==I)return;Tn(O,"resize",Ru),W||Tn(O,"scroll",kc)}},I.kill=function(pe,Ye){I.disable(pe,Ye),N&&!Ye&&N.kill(),c&&delete fv[c];var Pe=ot.indexOf(I);Pe>=0&&ot.splice(Pe,1),Pe===ai&&Wp>0&&ai--,Pe=0,ot.forEach(function(Ze){return Ze.scroller===I.scroller&&(Pe=1)}),Pe||ci||(I.scroll.rec=0),r&&(r.scrollTrigger=null,pe&&r.revert({kill:!1}),Ye||r.kill()),et&&[et,ke,z,P].forEach(function(Ze){return Ze.parentNode&&Ze.parentNode.removeChild(Ze)}),Uu===I&&(Uu=0),f&&(Ie&&(Ie.uncache=1),Pe=0,ot.forEach(function(Ze){return Ze.pin===f&&Pe++}),Pe||(Ie.spacer=0)),n.onKill&&n.onKill(I)},ot.push(I),I.enable(!1,!1),Le&&Le(I),r&&r.add&&!ze){var nt=I.update;I.update=function(){I.update=nt,st.cache++,we||He||I.refresh()},De.delayedCall(.01,I.update),ze=.01,we=He=0}else I.refresh();f&&ok()},i.register=function(n){return Uc||(De=n||AT(),DT()&&window.document&&i.enable(),Uc=Du),Uc},i.defaults=function(n){if(n)for(var r in n)kp[r]=n[r];return kp},i.disable=function(n,r){Du=0,ot.forEach(function(o){return o[r?"kill":"disable"](n)}),Tn(ut,"wheel",kc),Tn(Gt,"scroll",kc),clearInterval(Np),Tn(Gt,"touchcancel",jr),Tn(It,"touchstart",jr),Lp(Tn,Gt,"pointerdown,touchstart,mousedown",dT),Lp(Tn,Gt,"pointerup,touchend,mouseup",fT),qp.kill(),Op(Tn);for(var s=0;s<st.length;s+=3)Fp(Tn,st[s],st[s+1]),Fp(Tn,st[s],st[s+2])},i.enable=function(){if(ut=window,Gt=document,zi=Gt.documentElement,It=Gt.body,De&&(Bu=De.utils.toArray,Nu=De.utils.clamp,uv=De.core.context||jr,tv=De.core.suppressOverwrites||jr,gv=ut.history.scrollRestoration||"auto",hv=ut.pageYOffset||0,De.core.globals("ScrollTrigger",i),It)){Du=1,Vc=document.createElement("div"),Vc.style.height="100vh",Vc.style.position="absolute",BT(),Q2(),on.register(De),i.isTouch=on.isTouch,oo=on.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),lv=on.isTouch===1,Cn(ut,"wheel",kc),mv=[ut,Gt,zi,It],De.matchMedia?(i.matchMedia=function(l){var u=De.matchMedia(),d;for(d in l)u.add(d,l[d]);return u},De.addEventListener("matchMediaInit",function(){kT(),Ev()}),De.addEventListener("matchMediaRevert",function(){return FT()}),De.addEventListener("matchMedia",function(){fa(0,1),ya("matchMedia")}),De.matchMedia().add("(orientation: portrait)",function(){return sv(),sv})):console.warn("Requires GSAP 3.11.0 or later"),sv(),Cn(Gt,"scroll",kc);var n=It.hasAttribute("style"),r=It.style,s=r.borderTopStyle,o=De.core.Animation.prototype,a,c;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=xs(It),dn.m=Math.round(a.top+dn.sc())||0,$n.m=Math.round(a.left+$n.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(It.setAttribute("style",""),It.removeAttribute("style")),Np=setInterval(mT,250),De.delayedCall(.5,function(){return Pp=0}),Cn(Gt,"touchcancel",jr),Cn(It,"touchstart",jr),Lp(Cn,Gt,"pointerdown,touchstart,mousedown",dT),Lp(Cn,Gt,"pointerup,touchend,mouseup",fT),cv=De.utils.checkPrefix("transform"),jp.push(cv),Uc=Xn(),qp=De.delayedCall(.2,fa).pause(),Bc=[Gt,"visibilitychange",function(){var l=ut.innerWidth,u=ut.innerHeight;Gt.hidden?(aT=l,cT=u):(aT!==l||cT!==u)&&Ru()},Gt,"DOMContentLoaded",fa,ut,"load",fa,ut,"resize",Ru],Op(Cn),ot.forEach(function(l){return l.enable(0,1)}),c=0;c<st.length;c+=3)Fp(Tn,st[c],st[c+1]),Fp(Tn,st[c],st[c+2])}},i.config=function(n){"limitCallbacks"in n&&(nv=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Np)||(Np=r)&&setInterval(mT,r),"ignoreMobileResize"in n&&(lv=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Op(Tn)||Op(Cn,n.autoRefreshEvents||"none"),wT=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=si(n),o=st.indexOf(s),a=ga(s);~o&&st.splice(o,a?6:2),r&&(a?Cr.unshift(ut,r,It,r,zi,r):Cr.unshift(s,r))},i.clearMatchMedia=function(n){ot.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(Hi(n)?si(n):n).getBoundingClientRect(),a=o[s?ha:pa]*r||0;return s?o.right-a>0&&o.left+a<ut.innerWidth:o.bottom-a>0&&o.top+a<ut.innerHeight},i.positionInViewport=function(n,r,s){Hi(n)&&(n=si(n));var o=n.getBoundingClientRect(),a=o[s?ha:pa],c=r==null?a/2:r in Yp?Yp[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+c)/ut.innerWidth:(o.top+c)/ut.innerHeight},i.killAll=function(n){if(ot.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=_a.killAll||[];_a={},r.forEach(function(s){return s()})}},i})();dt.version="3.14.2";dt.saveStyles=function(i){return i?Bu(i).forEach(function(e){if(e&&e.style){var t=Vi.indexOf(e);t>=0&&Vi.splice(t,5),Vi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),De.core.getCache(e),uv())}}):Vi};dt.revert=function(i,e){return Ev(!i,e)};dt.create=function(i,e){return new dt(i,e)};dt.refresh=function(i){return i?Ru(!0):(Uc||dt.register())&&fa(!0)};dt.update=function(i){return++st.cache&&Ms(i===!0?2:0)};dt.clearScrollMemory=UT;dt.maxScroll=function(i,e){return $r(i,e?$n:dn)};dt.getScrollFunc=function(i,e){return ys(si(i),e?$n:dn)};dt.getById=function(i){return fv[i]};dt.getAll=function(){return ot.filter(function(i){return i.vars.id!=="ScrollSmoother"})};dt.isScrolling=function(){return!!or};dt.snapDirectional=Mv;dt.addEventListener=function(i,e){var t=_a[i]||(_a[i]=[]);~t.indexOf(e)||t.push(e)};dt.removeEventListener=function(i,e){var t=_a[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};dt.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,o=function(l,u){var d=[],h=[],f=De.delayedCall(r,function(){u(d,h),d=[],h=[]}).pause();return function(_){d.length||f.restart(!0),d.push(_.trigger),h.push(_),s<=d.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Yn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Yn(s)&&(s=s(),Cn(dt,"refresh",function(){return s=e.batchMax()})),Bu(i).forEach(function(c){var l={};for(a in n)l[a]=n[a];l.trigger=c,t.push(dt.create(l))}),t};var MT=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},av=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(on.isTouch?" pinch-zoom":""):"none",e===zi&&i(It,t)},Hp={auto:1,scroll:1},dk=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||De.core.getCache(s),a=Xn(),c;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==It&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Hp[(c=sr(s)).overflowY]||Hp[c.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ga(s)&&(Hp[(c=sr(s)).overflowY]||Hp[c.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},HT=function(e,t,n,r){return on.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&dk,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Cn(Gt,on.eventTypes[0],bT,!1,!0)},onDisable:function(){return Tn(Gt,on.eventTypes[0],bT,!0)}})},fk=/(input|label|select|textarea)/i,ET,bT=function(e){var t=fk.test(e.target.tagName);(t||ET)&&(e._gsapAllow=!0,ET=t)},hk=function(e){da(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,c,l=si(e.target)||zi,u=De.core.globals().ScrollSmoother,d=u&&u.get(),h=oo&&(e.content&&si(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=ys(l,dn),_=ys(l,$n),g=1,m=(on.isTouch&&ut.visualViewport?ut.visualViewport.scale*ut.visualViewport.width:ut.outerWidth)/ut.innerWidth,p=0,x=Yn(r)?function(){return r(a)}:function(){return r||2.8},b,M,S=HT(l,e.type,!0,s),C=function(){return M=!1},T=jr,A=jr,y=function(){c=$r(l,dn),A=Nu(oo?1:0,c),n&&(T=Nu(0,$r(l,$n))),b=ma},E=function(){h._gsap.y=Au(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},R=function(){if(M){requestAnimationFrame(C);var X=Au(a.deltaY/2),ie=A(f.v-X);if(h&&ie!==f.v+f.offset){f.offset=ie-f.v;var I=Au((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",h._gsap.y=I+"px",f.cacheID=st.cache,Ms()}return!0}f.offset&&E(),M=!0},O,U,W,G,H=function(){y(),O.isActive()&&O.vars.scrollY>c&&(f()>c?O.progress(1)&&f(c):O.resetTo("scrollY",c))};return h&&De.set(h,{y:"+=0"}),e.ignoreCheck=function(k){return oo&&k.type==="touchmove"&&R(k)||g>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},e.onPress=function(){M=!1;var k=g;g=Au((ut.visualViewport&&ut.visualViewport.scale||1)/m),O.pause(),k!==g&&av(l,g>1.01?!0:n?!1:"x"),U=_(),W=f(),y(),b=ma},e.onRelease=e.onGestureStart=function(k,X){if(f.offset&&E(),!X)G.restart(!0);else{st.cache++;var ie=x(),I,re;n&&(I=_(),re=I+ie*.05*-k.velocityX/.227,ie*=MT(_,I,re,$r(l,$n)),O.vars.scrollX=T(re)),I=f(),re=I+ie*.05*-k.velocityY/.227,ie*=MT(f,I,re,$r(l,dn)),O.vars.scrollY=A(re),O.invalidate().duration(ie).play(.01),(oo&&O.vars.scrollY>=c||I>=c-1)&&De.to({},{onUpdate:H,duration:ie})}o&&o(k)},e.onWheel=function(){O._ts&&O.pause(),Xn()-p>1e3&&(b=0,p=Xn())},e.onChange=function(k,X,ie,I,re){if(ma!==b&&y(),X&&n&&_(T(I[2]===X?U+(k.startX-k.x):_()+X-I[1])),ie){f.offset&&E();var Oe=re[2]===ie,Ve=Oe?W+k.startY-k.y:f()+ie-re[1],Xe=A(Ve);Oe&&Ve!==Xe&&(W+=Xe-Ve),f(Xe)}(ie||X)&&Ms()},e.onEnable=function(){av(l,n?!1:"x"),dt.addEventListener("refresh",H),Cn(ut,"resize",H),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),S.enable()},e.onDisable=function(){av(l,!0),Tn(ut,"resize",H),dt.removeEventListener("refresh",H),S.kill()},e.lockAxis=e.lockAxis!==!1,a=new on(e),a.iOS=oo,oo&&!f()&&f(1),oo&&De.ticker.add(jr),G=a._dc,O=De.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:VT(f,f(),function(){return O.pause()})},onUpdate:Ms,onComplete:G.vars.onComplete}),a};dt.sort=function(i){if(Yn(i))return ot.sort(i);var e=ut.pageYOffset||0;return dt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ut.innerHeight}),ot.sort(i||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};dt.observe=function(i){return new on(i)};dt.normalizeScroll=function(i){if(typeof i>"u")return oi;if(i===!0&&oi)return oi.enable();if(i===!1){oi&&oi.kill(),oi=i;return}var e=i instanceof on?i:hk(i);return oi&&oi.target===e.target&&oi.kill(),ga(e.target)&&(oi=e),e};dt.core={_getVelocityProp:Rp,_inputObserver:HT,_scrollers:st,_proxies:Cr,bridge:{ss:function(){or||ya("scrollStart"),or=Xn()},ref:function(){return qn}}};AT()&&De.registerPlugin(dt);function pk(i,e){if(i&1&&(zt(0,"li"),xe(1),$t()),i&2){let t=e.$implicit;In(),_r(t)}}function mk(i,e){if(i&1&&(zt(0,"div",4)(1,"h3",5),xe(2),$t(),zt(3,"ul",6),Qr(4,pk,2,1,"li",7),$t()()),i&2){let t=e.$implicit;In(2),_r(t.category),In(2),gr("ngForOf",t.skills)}}Pc.registerPlugin(dt);var Jp=class i{capabilities=[{category:"Android Engineering",skills:["Android SDK, Jetpack Compose","MVVM, RESTful APIs","SQLite, Firebase","Multithreading, Camera Pipelines"]},{category:"Computer Vision & ML",skills:["OpenCV, ML Kit, TrackNet","InsightFace, DeepFace","CNN-based Object Detection","LSTM, Transformer Architectures"]},{category:"Training & Optimization",skills:["PyTorch, TensorFlow Lite","ONNX, CoreML","Quantization, Edge Deployment","Dataset Engineering"]},{category:"Processing & Tools",skills:["GStreamer, RTSP, FFmpeg","GPU Inference","Git, Google Cloud Console","Performance Tuning"]}];ngAfterViewInit(){Pc.from(".skill-block",{scrollTrigger:{trigger:".proof-section",start:"top 85%",toggleActions:"play none none reverse"},duration:.8,y:30,opacity:0,stagger:.1,ease:"power2.out"})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Qn({type:i,selectors:[["app-skills"]],decls:9,vars:1,consts:[["id","skills",1,"container","proof-section","bg-light"],[1,"col-span-12","header-row"],[1,"meta-label"],["class","col-span-3 skill-block",4,"ngFor","ngForOf"],[1,"col-span-3","skill-block"],[1,"skill-category"],[1,"skill-list"],[4,"ngFor","ngForOf"]],template:function(t,n){t&1&&(zt(0,"section",0)(1,"div",1)(2,"h2"),xe(3,"Expertise "),zt(4,"span"),xe(5,"Matrix"),$t()(),zt(6,"span",2),xe(7,"Domain Specialization"),$t()(),Qr(8,mk,5,2,"div",3),$t()),t&2&&(In(8),gr("ngForOf",n.capabilities))},dependencies:[Xa,qa],styles:['.proof-section[_ngcontent-%COMP%]{padding-top:6rem;padding-bottom:6rem;border-top:1px solid var(--border-color)}.header-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--border-color);padding-bottom:1.5rem;margin-bottom:4rem}.header-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--accent)}.meta-label[_ngcontent-%COMP%]{background:var(--bg-primary);padding:.25rem .75rem;border-radius:4px;font-size:.75rem;color:var(--accent);text-transform:uppercase;font-weight:700}.skill-block[_ngcontent-%COMP%]{border-right:1px solid var(--border-color);padding-right:2rem}.skill-block[_ngcontent-%COMP%]:last-child{border-right:none}.skill-category[_ngcontent-%COMP%]{font-size:1.15rem;color:var(--text-primary);margin-bottom:2rem;position:relative;padding-bottom:.5rem}.skill-category[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:0;width:2rem;height:2px;background:var(--accent)}.skill-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.95rem;color:var(--text-secondary);margin-bottom:.8rem;display:flex;align-items:center;gap:.75rem}.skill-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"";width:6px;height:6px;background:var(--accent);transform:rotate(45deg)}']})};var gk=(i,e,t,n,r,s)=>({"fa-table-tennis":i,"fa-calendar-check":e,"fa-bus":t,"fa-truck":n,"fa-boxes":r,"fa-sign-language":s});function _k(i,e){if(i&1&&(zt(0,"span",24),xe(1),$t()),i&2){let t=e.$implicit;In(),_r(t)}}function yk(i,e){if(i&1&&(zt(0,"div",25)(1,"span"),xe(2),$t()()),i&2){let t=e.$implicit;In(2),_r(t)}}function vk(i,e){if(i&1){let t=m_();zt(0,"div",4)(1,"div",5)(2,"div",6),es(3,"div",7),zt(4,"div",8)(5,"h3",9),xe(6),$t(),zt(7,"span",10),xe(8),$t()()(),zt(9,"div",11),es(10,"div",12)(11,"i",13),$t(),zt(12,"div",14),Qr(13,_k,2,1,"span",15),$t()(),zt(14,"div",16)(15,"div",17)(16,"p",18),xe(17),$t(),zt(18,"div",19),Qr(19,yk,3,1,"div",20),$t()(),zt(20,"div",21)(21,"button",22),nf("click",function(){let r=vd(t).$implicit,s=g_();return xd(s.openLink(r.link))}),xe(22," Explore "),es(23,"i",23),$t()()()()}if(i&2){let t=e.$implicit;In(6),_r(t.title),In(2),_r(t.subtitle),In(),gr("ngClass",t.assetClass),In(2),gr("ngClass",x_(7,gk,t.assetClass==="asset-ppp",t.assetClass==="asset-event",t.assetClass==="asset-commute",t.assetClass==="asset-fleet",t.assetClass==="asset-vasset",t.assetClass==="asset-ican")),In(2),gr("ngForOf",t.tech),In(4),_r(t.description[0]),In(2),gr("ngForOf",t.description.slice(1))}}var Kp=class i{projects=[{title:"Play\u2013Pause\u2013Post (PPP)",subtitle:"AI Sports Replay & Analytics Platform",description:["Production-grade sports analytics and decision-support platform for badminton and racket sports.","Implemented live ball and shuttle tracking systems with continuous model tuning.","Deployed TrackNet-based tracking with 90%+ accuracy and integrated paddle detection.","Optimized inference pipelines for iOS/CoreML and GPU execution for low-latency replays."],tech:["TrackNet","CoreML","OpenCV","GPU Optimization"],link:"https://play.google.com/store/apps/details?id=com.vtpl.volley&hl=en",assetClass:"asset-ppp"},{title:"V-Commute",subtitle:"Enterprise Commute Tracking Platform",description:["Employee commute tracking, attendance, and travel allowance management.","Implemented geofenced real-time tracking with background execution optimization.","Integrated biometric and face-based authentication with 99%+ accuracy.","Developed lightweight on-device models for low-connectivity environments."],tech:["Geofencing","Biometrics","On-device ML","Android"],link:"https://play.google.com/store/apps/details?id=com.vcommute.traveltracking&hl=en",assetClass:"asset-commute"},{title:"V-Fleet",subtitle:"Fleet & Vehicle Operations Management",description:["Enterprise fleet and vehicle operations management platform.","Built an offline-first architecture to support uninterrupted fleet operations.","Implemented secure backend synchronization for vehicle, trip, and usage data.","Designed scalable data workflows for fleet monitoring and reporting."],tech:["Offline-first","Data Sync","Fleet Management","Android"],link:"https://play.google.com/store/apps/details?id=com.vareli.fleet&hl=en",assetClass:"asset-fleet"},{title:"Event Management",subtitle:"Enterprise Event Logistics & Tracking",description:["Comprehensive solution for corporate event planning and execution.","Real-time attendee tracking and session management.","Integrated QR-based check-in and digital certification delivery.","Scalable backend for multi-track event synchronization."],tech:["Event Tech","QR Systems","Real-time Sync","Android"],link:"https://play.google.com/store/apps/details?id=com.vareli.v_event_management&hl=en",assetClass:"asset-event"},{title:"V-Asset",subtitle:"Secure Asset Lifecycle Management",description:["Enterprise solution for secure asset lifecycle and inventory management.","Integrated QR and barcode scanning using ML Kit for rapid identification.","Implemented audit trails and asset history tracking for compliance.","JWT-based authentication with role-based access control."],tech:["ML Kit","QR/Barcode","JWT","Inventory"],link:"https://play.google.com/store/apps/details?id=com.vareli.vasset",assetClass:"asset-vasset"},{title:"iCan",subtitle:"Accessibility-focused Android Application",description:["Designed for deaf users to support visual learning through sign-language storytelling.","Integrated speech-to-text and text-to-speech for two-way communication.","Led a cross-functional team of 4 developers from design through delivery."],tech:["Accessibility","STT/TTS","Sign Language","Media"],link:"https://play.google.com/store/apps/details?id=com.ican.app",assetClass:"asset-ican"}];openLink(e){e&&window.open(e,"_blank")}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Qn({type:i,selectors:[["app-projects"]],decls:9,vars:1,consts:[["id","projects",1,"container","work-section"],[1,"col-span-12","header-row"],[1,"meta-label"],["class","col-span-12 project-item",4,"ngFor","ngForOf"],[1,"col-span-12","project-item"],[1,"project-header"],[1,"project-title-group"],[1,"p-accent"],[1,"title-meta"],[1,"project-title-text"],[1,"project-subtitle-text"],[1,"project-preview-small",3,"ngClass"],[1,"glow-sphere"],[1,"fas",3,"ngClass"],[1,"project-tags"],["class","tag",4,"ngFor","ngForOf"],[1,"project-body"],[1,"project-desc-col"],[1,"project-desc-text"],[1,"bullet-grid"],["class","bullet-item",4,"ngFor","ngForOf"],[1,"project-cta-col"],[1,"icon-btn",3,"click"],[1,"fas","fa-arrow-right"],[1,"tag"],[1,"bullet-item"]],template:function(t,n){t&1&&(zt(0,"section",0)(1,"div",1)(2,"h2"),xe(3,"Strategic "),zt(4,"span"),xe(5,"Implementations"),$t()(),zt(6,"span",2),xe(7,"Selected Project Archive"),$t()(),Qr(8,vk,24,14,"div",3),$t()),t&2&&(In(8),gr("ngForOf",n.projects))},dependencies:[Xa,I_,qa],styles:['.work-section[_ngcontent-%COMP%]{padding-top:8rem;padding-bottom:8rem}.header-row[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--accent)}.project-item[_ngcontent-%COMP%]{border-bottom:1px solid var(--border-color);padding:3rem 0;transition:all .4s cubic-bezier(.165,.84,.44,1)}.project-item[_ngcontent-%COMP%]:hover{padding-left:2rem;background:linear-gradient(90deg,rgba(45,212,191,.05),transparent)}.project-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem}.project-title-group[_ngcontent-%COMP%]{display:flex;gap:1.5rem;align-items:center}.p-accent[_ngcontent-%COMP%]{width:4px;height:40px;background:var(--accent);border-radius:99px}.project-title-text[_ngcontent-%COMP%]{font-size:2.25rem;margin:0;letter-spacing:-.03em}.project-subtitle-text[_ngcontent-%COMP%]{font-size:.95rem;color:var(--text-secondary);font-weight:500}.tag[_ngcontent-%COMP%]{font-size:.7rem;color:var(--accent);background:#2dd4bf1a;border:1px solid rgba(45,212,191,.2);padding:.3rem .8rem;border-radius:99px;font-weight:600}.project-body[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr auto;gap:4rem;align-items:flex-end}.project-desc-text[_ngcontent-%COMP%]{font-size:1.25rem;color:var(--text-primary);margin-bottom:1.5rem;max-width:60ch}.bullet-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:1rem 3rem}.bullet-item[_ngcontent-%COMP%]{font-size:.95rem;color:var(--text-secondary);display:flex;gap:.75rem;align-items:flex-start}.bullet-item[_ngcontent-%COMP%]:before{content:"\\2192";color:var(--accent);font-weight:700}.icon-btn[_ngcontent-%COMP%]{background:transparent;border:none;color:var(--text-primary);font-weight:700;cursor:pointer;font-size:1rem;display:flex;align-items:center;gap:.75rem;padding:1rem 0;transition:gap .3s}.icon-btn[_ngcontent-%COMP%]:hover{gap:1.25rem;color:var(--accent)}.project-preview-small[_ngcontent-%COMP%]{position:relative;width:60px;height:60px;display:flex;align-items:center;justify-content:center;border-radius:12px;background:#ffffff08;border:1px solid var(--border-color);margin-right:-2rem;transition:all .5s ease;overflow:hidden}.project-item[_ngcontent-%COMP%]:hover   .project-preview-small[_ngcontent-%COMP%]{transform:scale(1.1) rotate(5deg);border-color:var(--accent);background:#d4af370d}.project-preview-small[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:1.5rem;color:var(--text-secondary);z-index:2;transition:color .3s}.project-item[_ngcontent-%COMP%]:hover   .project-preview-small[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--accent)}.glow-sphere[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;background:radial-gradient(circle,var(--accent-glow) 0%,transparent 70%);opacity:0;transition:opacity .5s}.project-item[_ngcontent-%COMP%]:hover   .glow-sphere[_ngcontent-%COMP%]{opacity:1}.asset-vasset[_ngcontent-%COMP%]   .glow-sphere[_ngcontent-%COMP%]{background:radial-gradient(circle,rgba(212,175,55,.4) 0%,transparent 80%)}.asset-vasset[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{filter:drop-shadow(0 0 10px rgba(212,175,55,.3))}.asset-ican[_ngcontent-%COMP%]   .glow-sphere[_ngcontent-%COMP%]{background:radial-gradient(circle,rgba(255,255,255,.2) 0%,transparent 80%)}.asset-ican[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--text-primary);filter:drop-shadow(0 0 12px rgba(255,255,255,.4))}.project-preview-small[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.1) 0%,transparent 100%);pointer-events:none}@media(max-width:768px){.bullet-grid[_ngcontent-%COMP%], .project-body[_ngcontent-%COMP%]{grid-template-columns:1fr}.project-header[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:1rem}}']})};var Qp=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Qn({type:i,selectors:[["app-contact"]],decls:60,vars:0,consts:[["id","contact",1,"container","footer-section","bg-light"],[1,"col-span-12","section-header"],[1,"col-span-8","ed-container"],[1,"ed-item"],[1,"ed-meta"],[1,"ed-item","experience-summary"],[1,"exp-bullets"],[1,"col-span-4","contact-sidebar"],[1,"contact-list"],[1,"contact-item"],[1,"c-label"],["href","mailto:sanyaldebdeep@gmail.com",1,"c-value"],["href","https://linkedin.com/in/debdeep-sanyal/","target","_blank",1,"c-value"],[1,"c-value"],[1,"col-span-12","footer-bottom"],[1,"copyright"],[1,"social-icons"],["href","https://www.linkedin.com/in/debdeep-sanyal/","target","_blank"],[1,"fab","fa-linkedin"],["href","mailto:sanyaldebdeep@gmail.com"],[1,"fas","fa-envelope"]],template:function(t,n){t&1&&(Ne(0,"footer",0)(1,"div",1)(2,"h2"),xe(3,"Professional"),hi(4,"br"),Ne(5,"span"),xe(6,"Academic Summary"),Fe()()(),Ne(7,"div",2)(8,"div",3)(9,"h4"),xe(10,"Master of Technology (M.Tech) in Computer Technology"),Fe(),Ne(11,"span",4),xe(12,"AI & Data Science | 2024 \u2013 Present | Jadavpur University, Kolkata"),Fe()(),Ne(13,"div",3)(14,"h4"),xe(15,"Bachelor of Technology (B.Tech) in Computer Science"),Fe(),Ne(16,"span",4),xe(17,"CSE | 2019 \u2013 2023 | I.K. Gujral Punjab Technical University, Punjab"),Fe()(),Ne(18,"div",5)(19,"h4"),xe(20,"Engineering Tenancy"),Fe(),Ne(21,"p"),xe(22,"Android & AI Systems Engineer @ Vareli Tecnac Pvt. Ltd. (2022 \u2013 Present)"),Fe(),Ne(23,"ul",6)(24,"li"),xe(25,"Production delivery of scalable mobile workflows and real-time media streams."),Fe(),Ne(26,"li"),xe(27,"On-device ML optimization and background execution tuning."),Fe()()()(),Ne(28,"div",7)(29,"h4"),xe(30,"Connect Directly"),Fe(),Ne(31,"div",8)(32,"div",9)(33,"span",10),xe(34,"Email Interface"),Fe(),Ne(35,"a",11),xe(36,"sanyaldebdeep@gmail.com"),Fe()(),Ne(37,"div",9)(38,"span",10),xe(39,"Professional Network"),Fe(),Ne(40,"a",12),xe(41,"LinkedIn Profile"),Fe()(),Ne(42,"div",9)(43,"span",10),xe(44,"Global Identity"),Fe(),Ne(45,"span",13),xe(46,"Kolkata, India (+5:30 GMT)"),Fe()(),Ne(47,"div",9)(48,"span",10),xe(49,"Direct Line"),Fe(),Ne(50,"span",13),xe(51,"+91 7044692859"),Fe()()()(),Ne(52,"div",14)(53,"span",15),xe(54,"\xA9 2026 Debdeep Sanyal | Android & AI/ML Specialist"),Fe(),Ne(55,"div",16)(56,"a",17),hi(57,"i",18),Fe(),Ne(58,"a",19),hi(59,"i",20),Fe()()()())},styles:['.footer-section[_ngcontent-%COMP%]{padding-top:6rem;padding-bottom:2rem}.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--accent)}.ed-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem}.ed-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.25rem;margin-bottom:.25rem;color:var(--text-primary)}.ed-meta[_ngcontent-%COMP%]{font-size:.9rem;color:var(--accent);font-weight:600}.experience-summary[_ngcontent-%COMP%]{margin-top:1rem;padding-top:1.5rem;border-top:1px solid var(--border-color)}.exp-bullets[_ngcontent-%COMP%]{list-style:none;padding:0;margin-top:1rem}.exp-bullets[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.95rem;color:var(--text-secondary);margin-bottom:.5rem;padding-left:1rem;position:relative}.exp-bullets[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"\\25b9";position:absolute;left:0;color:var(--accent)}.contact-sidebar[_ngcontent-%COMP%]{border-left:1px solid var(--border-color);padding-left:2rem}.contact-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.5rem;margin-top:1rem}.contact-item[_ngcontent-%COMP%]{display:flex;flex-direction:column}.c-label[_ngcontent-%COMP%]{font-size:.75rem;text-transform:uppercase;font-weight:700;color:var(--text-secondary);margin-bottom:.3rem}.c-value[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;color:var(--text-primary);text-decoration:none;transition:color .3s}a.c-value[_ngcontent-%COMP%]:hover{color:var(--accent)}.footer-bottom[_ngcontent-%COMP%]{margin-top:5rem;padding-top:2rem;border-top:1px solid var(--border-color);display:flex;justify-content:space-between;align-items:center}.copyright[_ngcontent-%COMP%]{font-size:.85rem;color:var(--text-secondary)}.social-icons[_ngcontent-%COMP%]{display:flex;gap:1.5rem}.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--text-secondary);font-size:1.25rem;transition:color .3s}.social-icons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--accent)}@media(max-width:1024px){.contact-sidebar[_ngcontent-%COMP%]{border-left:none;padding-left:0;margin-top:4rem}}']})};var em=class i{title="angular-portfolio";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=Qn({type:i,selectors:[["app-root"]],decls:7,vars:0,template:function(t,n){t&1&&(es(0,"app-three-background")(1,"app-navbar"),zt(2,"main"),es(3,"app-hero")(4,"app-skills")(5,"app-projects")(6,"app-contact"),$t())},dependencies:[ap,cp,Tp,Jp,Kp,Qp],encapsulation:2})};B_(em,gb).catch(i=>console.error(i));
