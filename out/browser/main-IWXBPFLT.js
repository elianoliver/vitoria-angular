var $M=Object.defineProperty,XM=Object.defineProperties;var ZM=Object.getOwnPropertyDescriptors;var th=Object.getOwnPropertySymbols;var YM=Object.prototype.hasOwnProperty,KM=Object.prototype.propertyIsEnumerable;var nh=(n,e,t)=>e in n?$M(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,zt=(n,e)=>{for(var t in e||={})YM.call(e,t)&&nh(n,t,e[t]);if(th)for(var t of th(e))KM.call(e,t)&&nh(n,t,e[t]);return n},tn=(n,e)=>XM(n,ZM(e));var gn=null,vs=!1,Lu=1,JM=null,xn=Symbol("SIGNAL");function Ne(n){let e=gn;return gn=n,e}function Cs(){return gn}var Aa={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function Vr(n){if(vs)throw new Error("");if(gn===null)return;gn.consumerOnSignalRead(n);let e=gn.producersTail;if(e!==void 0&&e.producer===n)return;let t,i=gn.recomputing;if(i&&(t=e!==void 0?e.nextProducer:gn.producers,t!==void 0&&t.producer===n)){gn.producersTail=t,t.lastReadVersion=n.version;return}let o=n.consumersTail;if(o!==void 0&&o.consumer===gn&&(!i||eC(o,gn)))return;let a=ja(gn),r={producer:n,consumer:gn,nextProducer:t,prevConsumer:o,lastReadVersion:n.version,nextConsumer:void 0};gn.producersTail=r,e!==void 0?e.nextProducer=r:gn.producers=r,a&&rh(n,r)}function ih(){Lu++}function wu(n){if(!(ja(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Lu)){if(!n.producerMustRecompute(n)&&!Gr(n)){Tu(n);return}n.producerRecomputeValue(n),Tu(n)}}function Au(n){if(n.consumers===void 0)return;let e=vs;vs=!0;try{for(let t=n.consumers;t!==void 0;t=t.nextConsumer){let i=t.consumer;i.dirty||QM(i)}}finally{vs=e}}function Ru(){return gn?.consumerAllowSignalWrites!==!1}function QM(n){n.dirty=!0,Au(n),n.consumerMarkedDirty?.(n)}function Tu(n){n.dirty=!1,n.lastCleanEpoch=Lu}function Ra(n){return n&&oh(n),Ne(n)}function oh(n){n.producersTail=void 0,n.recomputing=!0}function qr(n,e){Ne(e),n&&ah(n)}function ah(n){n.recomputing=!1;let e=n.producersTail,t=e!==void 0?e.nextProducer:n.producers;if(t!==void 0){if(ja(n))do t=ju(t);while(t!==void 0);e!==void 0?e.nextProducer=void 0:n.producers=void 0}}function Gr(n){for(let e=n.producers;e!==void 0;e=e.nextProducer){let t=e.producer,i=e.lastReadVersion;if(i!==t.version||(wu(t),i!==t.version))return!0}return!1}function Xo(n){if(ja(n)){let e=n.producers;for(;e!==void 0;)e=ju(e)}n.producers=void 0,n.producersTail=void 0,n.consumers=void 0,n.consumersTail=void 0}function rh(n,e){let t=n.consumersTail,i=ja(n);if(t!==void 0?(e.nextConsumer=t.nextConsumer,t.nextConsumer=e):(e.nextConsumer=void 0,n.consumers=e),e.prevConsumer=t,n.consumersTail=e,!i)for(let o=n.producers;o!==void 0;o=o.nextProducer)rh(o.producer,o)}function ju(n){let e=n.producer,t=n.nextProducer,i=n.nextConsumer,o=n.prevConsumer;if(n.nextConsumer=void 0,n.prevConsumer=void 0,i!==void 0?i.prevConsumer=o:e.consumersTail=o,o!==void 0)o.nextConsumer=i;else if(e.consumers=i,!ja(e)){let a=e.producers;for(;a!==void 0;)a=ju(a)}return t}function ja(n){return n.consumerIsAlwaysLive||n.consumers!==void 0}function Nu(n){JM?.(n)}function eC(n,e){let t=e.producersTail;if(t!==void 0){let i=e.producers;do{if(i===n)return!0;if(i===t)break;i=i.nextProducer}while(i!==void 0)}return!1}function Bu(n,e){return Object.is(n,e)}function Pu(n,e){let t=Object.create(tC);t.computation=n,e!==void 0&&(t.equal=e);let i=()=>{if(wu(t),Vr(t),t.value===Ms)throw t.error;return t.value};return i[xn]=t,Nu(t),i}var Iu=Symbol("UNSET"),bu=Symbol("COMPUTING"),Ms=Symbol("ERRORED"),tC=tn(zt({},Aa),{value:Iu,dirty:!0,error:null,equal:Bu,kind:"computed",producerMustRecompute(n){return n.value===Iu||n.value===bu},producerRecomputeValue(n){if(n.value===bu)throw new Error("");let e=n.value;n.value=bu;let t=Ra(n),i,o=!1;try{i=n.computation(),Ne(null),o=e!==Iu&&e!==Ms&&i!==Ms&&n.equal(e,i)}catch(a){i=Ms,n.error=a}finally{qr(n,t)}if(o){n.value=e;return}n.value=i,n.version++}});function nC(){throw new Error}var ch=nC;function sh(n){ch(n)}function zu(n){ch=n}var iC=null;function Ou(n,e){let t=Object.create(_s);t.value=n,e!==void 0&&(t.equal=e);let i=()=>lh(t);return i[xn]=t,Nu(t),[i,r=>Wr(t,r),r=>dh(t,r)]}function lh(n){return Vr(n),n.value}function Wr(n,e){Ru()||sh(n),n.equal(n.value,e)||(n.value=e,oC(n))}function dh(n,e){Ru()||sh(n),Wr(n,e(n.value))}var _s=tn(zt({},Aa),{equal:Bu,value:void 0,kind:"signal"});function oC(n){n.version++,ih(),Au(n),iC?.(n)}var Uu=tn(zt({},Aa),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Hu(n){if(n.dirty=!1,n.version>0&&!Gr(n))return;n.version++;let e=Ra(n);try{n.cleanup(),n.fn()}finally{qr(n,e)}}function In(n){return typeof n=="function"}function Ds(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var xs=Ds(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,o)=>`${o+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function $r(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var En=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let a of t)a.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(In(i))try{i()}catch(a){e=a instanceof xs?a.errors:[a]}let{_finalizers:o}=this;if(o){this._finalizers=null;for(let a of o)try{uh(a)}catch(r){e=e??[],r instanceof xs?e=[...e,...r.errors]:e.push(r)}}if(e)throw new xs(e)}}add(e){var t;if(e&&e!==this)if(this.closed)uh(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&$r(t,e)}remove(e){let{_finalizers:t}=this;t&&$r(t,e),e instanceof n&&e._removeParent(this)}};En.EMPTY=(()=>{let n=new En;return n.closed=!0,n})();var Vu=En.EMPTY;function Es(n){return n instanceof En||n&&"closed"in n&&In(n.remove)&&In(n.add)&&In(n.unsubscribe)}function uh(n){In(n)?n():n.unsubscribe()}var ni={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Na={setTimeout(n,e,...t){let{delegate:i}=Na;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=Na;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function ph(n){Na.setTimeout(()=>{let{onUnhandledError:e}=ni;if(e)e(n);else throw n})}function qu(){}var fh=Gu("C",void 0,void 0);function mh(n){return Gu("E",void 0,n)}function hh(n){return Gu("N",n,void 0)}function Gu(n,e,t){return{kind:n,value:e,error:t}}var Zo=null;function Ba(n){if(ni.useDeprecatedSynchronousErrorHandling){let e=!Zo;if(e&&(Zo={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=Zo;if(Zo=null,t)throw i}}else n()}function gh(n){ni.useDeprecatedSynchronousErrorHandling&&Zo&&(Zo.errorThrown=!0,Zo.error=n)}var Yo=class extends En{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Es(e)&&e.add(this)):this.destination=cC}static create(e,t,i){return new Pa(e,t,i)}next(e){this.isStopped?$u(hh(e),this):this._next(e)}error(e){this.isStopped?$u(mh(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?$u(fh,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},aC=Function.prototype.bind;function Wu(n,e){return aC.call(n,e)}var Xu=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Ss(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Ss(i)}else Ss(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Ss(t)}}},Pa=class extends Yo{constructor(e,t,i){super();let o;if(In(e)||!e)o={next:e??void 0,error:t??void 0,complete:i??void 0};else{let a;this&&ni.useDeprecatedNextContext?(a=Object.create(e),a.unsubscribe=()=>this.unsubscribe(),o={next:e.next&&Wu(e.next,a),error:e.error&&Wu(e.error,a),complete:e.complete&&Wu(e.complete,a)}):o=e}this.destination=new Xu(o)}};function Ss(n){ni.useDeprecatedSynchronousErrorHandling?gh(n):ph(n)}function rC(n){throw n}function $u(n,e){let{onStoppedNotification:t}=ni;t&&Na.setTimeout(()=>t(n,e))}var cC={closed:!0,next:qu,error:rC,complete:qu};var yh=typeof Symbol=="function"&&Symbol.observable||"@@observable";function vh(n){return n}function Mh(n){return n.length===0?vh:n.length===1?n[0]:function(t){return n.reduce((i,o)=>o(i),t)}}var za=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,o){let a=lC(t)?t:new Pa(t,i,o);return Ba(()=>{let{operator:r,source:c}=this;a.add(r?r.call(a,c):c?this._subscribe(a):this._trySubscribe(a))}),a}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=Ch(i),new i((o,a)=>{let r=new Pa({next:c=>{try{t(c)}catch(s){a(s),r.unsubscribe()}},error:a,complete:o});this.subscribe(r)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[yh](){return this}pipe(...t){return Mh(t)(this)}toPromise(t){return t=Ch(t),new t((i,o)=>{let a;this.subscribe(r=>a=r,r=>o(r),()=>i(a))})}}return n.create=e=>new n(e),n})();function Ch(n){var e;return(e=n??ni.Promise)!==null&&e!==void 0?e:Promise}function sC(n){return n&&In(n.next)&&In(n.error)&&In(n.complete)}function lC(n){return n&&n instanceof Yo||sC(n)&&Es(n)}function dC(n){return In(n?.lift)}function _h(n){return e=>{if(dC(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function Dh(n,e,t,i,o){return new Zu(n,e,t,i,o)}var Zu=class extends Yo{constructor(e,t,i,o,a,r){super(e),this.onFinalize=a,this.shouldUnsubscribe=r,this._next=t?function(c){try{t(c)}catch(s){e.error(s)}}:super._next,this._error=o?function(c){try{o(c)}catch(s){e.error(s)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};var xh=Ds(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var $i=(()=>{class n extends za{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new ks(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new xh}next(t){Ba(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){Ba(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Ba(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:o,observers:a}=this;return i||o?Vu:(this.currentObservers=null,a.push(t),new En(()=>{this.currentObservers=null,$r(a,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:o,isStopped:a}=this;i?t.error(o):a&&t.complete()}asObservable(){let t=new za;return t.source=this,t}}return n.create=(e,t)=>new ks(e,t),n})(),ks=class extends $i{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:Vu}};var Xr=class extends $i{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};function Yu(n,e){return _h((t,i)=>{let o=0;t.subscribe(Dh(i,a=>{i.next(n.call(e,a,o++))}))})}var Ku;function Fs(){return Ku}function Ei(n){let e=Ku;return Ku=n,e}var Eh=Symbol("NotFound");function Oa(n){return n===Eh||n?.name==="\u0275NotFound"}var js="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",ot=class extends Error{code;constructor(e,t){super(dp(e,t)),this.code=e}};function uC(n){return`NG0${Math.abs(n)}`}function dp(n,e){return`${uC(n)}${e?": "+e:""}`}function kt(n){for(let e in n)if(n[e]===kt)return e;throw Error("")}function bh(n,e){for(let t in e)e.hasOwnProperty(t)&&!n.hasOwnProperty(t)&&(n[t]=e[t])}function Ns(n){if(typeof n=="string")return n;if(Array.isArray(n))return`[${n.map(Ns).join(", ")}]`;if(n==null)return""+n;let e=n.overriddenName||n.name;if(e)return`${e}`;let t=n.toString();if(t==null)return""+t;let i=t.indexOf(`
`);return i>=0?t.slice(0,i):t}function Bs(n,e){return n?e?`${n} ${e}`:n:e||""}var pC=kt({__forward_ref__:kt});function Ps(n){return n.__forward_ref__=Ps,n}function bn(n){return up(n)?n():n}function up(n){return typeof n=="function"&&n.hasOwnProperty(pC)&&n.__forward_ref__===Ps}function $t(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function tc(n){return{providers:n.providers||[],imports:n.imports||[]}}function zs(n){return fC(n,Os)}function fC(n,e){return n.hasOwnProperty(e)&&n[e]||null}function mC(n){let e=n?.[Os]??null;return e||null}function Qu(n){return n&&n.hasOwnProperty(bs)?n[bs]:null}var Os=kt({\u0275prov:kt}),bs=kt({\u0275inj:kt}),rt=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=$t({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function pp(n){return n&&!!n.\u0275providers}var fp=kt({\u0275cmp:kt}),mp=kt({\u0275dir:kt}),hp=kt({\u0275pipe:kt});var Yr=kt({\u0275fac:kt}),na=kt({__NG_ELEMENT_ID__:kt}),Sh=kt({__NG_ENV_ID__:kt});function ia(n){return yp(n,"@Component"),n[fp]||null}function gp(n){return yp(n,"@Directive"),n[mp]||null}function Th(n){return yp(n,"@Pipe"),n[hp]||null}function yp(n,e){if(n==null)throw new ot(-919,!1)}function Ha(n){return typeof n=="string"?n:n==null?"":String(n)}var Lh=kt({ngErrorCode:kt}),hC=kt({ngErrorMessage:kt}),gC=kt({ngTokenPath:kt});function vp(n,e){return wh("",-200,e)}function Us(n,e){throw new ot(-201,!1)}function wh(n,e,t){let i=new ot(e,n);return i[Lh]=e,i[hC]=n,t&&(i[gC]=t),i}function yC(n){return n[Lh]}var ep;function Ah(){return ep}function Nn(n){let e=ep;return ep=n,e}function Mp(n,e,t){let i=zs(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&8)return null;if(e!==void 0)return e;Us(n,"")}var vC={},Ko=vC,MC="__NG_DI_FLAG__",tp=class{injector;constructor(e){this.injector=e}retrieve(e,t){let i=Jo(t)||0;try{return this.injector.get(e,i&8?null:Ko,i)}catch(o){if(Oa(o))return o;throw o}}};function CC(n,e=0){let t=Fs();if(t===void 0)throw new ot(-203,!1);if(t===null)return Mp(n,void 0,e);{let i=_C(e),o=t.retrieve(n,i);if(Oa(o)){if(i.optional)return null;throw o}return o}}function Dt(n,e=0){return(Ah()||CC)(bn(n),e)}function at(n,e){return Dt(n,Jo(e))}function Jo(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function _C(n){return{optional:!!(n&8),host:!!(n&1),self:!!(n&2),skipSelf:!!(n&4)}}function np(n){let e=[];for(let t=0;t<n.length;t++){let i=bn(n[t]);if(Array.isArray(i)){if(i.length===0)throw new ot(900,!1);let o,a=0;for(let r=0;r<i.length;r++){let c=i[r],s=DC(c);typeof s=="number"?s===-1?o=c.token:a|=s:o=c}e.push(Dt(o,a))}else e.push(Dt(i))}return e}function DC(n){return n[MC]}function Qo(n,e){let t=n.hasOwnProperty(Yr);return t?n[Yr]:null}function Rh(n,e,t){if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++){let o=n[i],a=e[i];if(t&&(o=t(o),a=t(a)),a!==o)return!1}return!0}function jh(n){return n.flat(Number.POSITIVE_INFINITY)}function Hs(n,e){n.forEach(t=>Array.isArray(t)?Hs(t,e):e(t))}function Cp(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function nc(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}function Nh(n,e){let t=[];for(let i=0;i<n;i++)t.push(e);return t}function Bh(n,e,t,i){let o=n.length;if(o==e)n.push(t,i);else if(o===1)n.push(i,n[0]),n[0]=t;else{for(o--,n.push(n[o-1],n[o]);o>e;){let a=o-2;n[o]=n[a],o--}n[e]=t,n[e+1]=i}}function Vs(n,e,t){let i=Va(n,e);return i>=0?n[i|1]=t:(i=~i,Bh(n,i,e,t)),i}function qs(n,e){let t=Va(n,e);if(t>=0)return n[t|1]}function Va(n,e){return xC(n,e,1)}function xC(n,e,t){let i=0,o=n.length>>t;for(;o!==i;){let a=i+(o-i>>1),r=n[a<<t];if(e===r)return a<<t;r>e?o=a:i=a+1}return~(o<<t)}var Co={},yn=[],qa=new rt(""),_p=new rt("",-1),Dp=new rt(""),Kr=class{get(e,t=Ko){if(t===Ko){let o=wh("",-201);throw o.name="\u0275NotFound",o}return t}};function Gs(n){return{\u0275providers:n}}function Ph(n){return Gs([{provide:qa,multi:!0,useValue:n}])}function zh(...n){return{\u0275providers:xp(!0,n),\u0275fromNgModule:!0}}function xp(n,...e){let t=[],i=new Set,o,a=r=>{t.push(r)};return Hs(e,r=>{let c=r;Ts(c,a,[],i)&&(o||=[],o.push(c))}),o!==void 0&&Oh(o,a),t}function Oh(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:o}=n[t];Ep(o,a=>{e(a,i)})}}function Ts(n,e,t,i){if(n=bn(n),!n)return!1;let o=null,a=Qu(n),r=!a&&ia(n);if(!a&&!r){let s=n.ngModule;if(a=Qu(s),a)o=s;else return!1}else{if(r&&!r.standalone)return!1;o=n}let c=i.has(o);if(r){if(c)return!1;if(i.add(o),r.dependencies){let s=typeof r.dependencies=="function"?r.dependencies():r.dependencies;for(let l of s)Ts(l,e,t,i)}}else if(a){if(a.imports!=null&&!c){i.add(o);let l;Hs(a.imports,d=>{Ts(d,e,t,i)&&(l||=[],l.push(d))}),l!==void 0&&Oh(l,e)}if(!c){let l=Qo(o)||(()=>new o);e({provide:o,useFactory:l,deps:yn},o),e({provide:Dp,useValue:o,multi:!0},o),e({provide:qa,useValue:()=>Dt(o),multi:!0},o)}let s=a.providers;if(s!=null&&!c){let l=n;Ep(s,d=>{e(d,l)})}}else return!1;return o!==n&&n.providers!==void 0}function Ep(n,e){for(let t of n)pp(t)&&(t=t.\u0275providers),Array.isArray(t)?Ep(t,e):e(t)}var EC=kt({provide:String,useValue:kt});function Uh(n){return n!==null&&typeof n=="object"&&EC in n}function SC(n){return!!(n&&n.useExisting)}function kC(n){return!!(n&&n.useFactory)}function Ls(n){return typeof n=="function"}var ic=new rt(""),Is={},kh={},Ju;function oc(){return Ju===void 0&&(Ju=new Kr),Ju}var Gn=class{},ea=class extends Gn{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,o){super(),this.parent=t,this.source=i,this.scopes=o,op(e,r=>this.processProvider(r)),this.records.set(_p,Ua(void 0,this)),o.has("environment")&&this.records.set(Gn,Ua(void 0,this));let a=this.records.get(ic);a!=null&&typeof a.value=="string"&&this.scopes.add(a.value),this.injectorDefTypes=new Set(this.get(Dp,yn,{self:!0}))}retrieve(e,t){let i=Jo(t)||0;try{return this.get(e,Ko,i)}catch(o){if(Oa(o))return o;throw o}}destroy(){Zr(this),this._destroyed=!0;let e=Ne(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),Ne(e)}}onDestroy(e){return Zr(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){Zr(this);let t=Ei(this),i=Nn(void 0),o;try{return e()}finally{Ei(t),Nn(i)}}get(e,t=Ko,i){if(Zr(this),e.hasOwnProperty(Sh))return e[Sh](this);let o=Jo(i),a,r=Ei(this),c=Nn(void 0);try{if(!(o&4)){let l=this.records.get(e);if(l===void 0){let d=LC(e)&&zs(e);d&&this.injectableDefInScope(d)?l=Ua(ip(e),Is):l=null,this.records.set(e,l)}if(l!=null)return this.hydrate(e,l,o)}let s=o&2?oc():this.parent;return t=o&8&&t===Ko?null:t,s.get(e,t)}catch(s){let l=yC(s);throw l===-200||l===-201?new ot(l,null):s}finally{Nn(c),Ei(r)}}resolveInjectorInitializers(){let e=Ne(null),t=Ei(this),i=Nn(void 0),o;try{let a=this.get(qa,yn,{self:!0});for(let r of a)r()}finally{Ei(t),Nn(i),Ne(e)}}toString(){return"R3Injector[...]"}processProvider(e){e=bn(e);let t=Ls(e)?e:bn(e&&e.provide),i=IC(e);if(!Ls(e)&&e.multi===!0){let o=this.records.get(t);o||(o=Ua(void 0,Is,!0),o.factory=()=>np(o.multi),this.records.set(t,o)),t=e,o.multi.push(e)}this.records.set(t,i)}hydrate(e,t,i){let o=Ne(null);try{if(t.value===kh)throw vp("");return t.value===Is&&(t.value=kh,t.value=t.factory(void 0,i)),typeof t.value=="object"&&t.value&&TC(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{Ne(o)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=bn(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function ip(n){let e=zs(n),t=e!==null?e.factory:Qo(n);if(t!==null)return t;if(n instanceof rt)throw new ot(-204,!1);if(n instanceof Function)return FC(n);throw new ot(-204,!1)}function FC(n){if(n.length>0)throw new ot(-204,!1);let t=mC(n);return t!==null?()=>t.factory(n):()=>new n}function IC(n){if(Uh(n))return Ua(void 0,n.useValue);{let e=Hh(n);return Ua(e,Is)}}function Hh(n,e,t){let i;if(Ls(n)){let o=bn(n);return Qo(o)||ip(o)}else if(Uh(n))i=()=>bn(n.useValue);else if(kC(n))i=()=>n.useFactory(...np(n.deps||[]));else if(SC(n))i=(o,a)=>Dt(bn(n.useExisting),a!==void 0&&a&8?8:void 0);else{let o=bn(n&&(n.useClass||n.provide));if(bC(n))i=()=>new o(...np(n.deps));else return Qo(o)||ip(o)}return i}function Zr(n){if(n.destroyed)throw new ot(-205,!1)}function Ua(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function bC(n){return!!n.deps}function TC(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function LC(n){return typeof n=="function"||typeof n=="object"&&n.ngMetadataName==="InjectionToken"}function op(n,e){for(let t of n)Array.isArray(t)?op(t,e):t&&pp(t)?op(t.\u0275providers,e):e(t)}function Ws(n,e){let t;n instanceof ea?(Zr(n),t=n):t=new tp(n);let i,o=Ei(t),a=Nn(void 0);try{return e()}finally{Ei(o),Nn(a)}}function Vh(){return Ah()!==void 0||Fs()!=null}var ii=0,Le=1,ze=2,nn=3,$n=4,Sn=5,oa=6,Ga=7,Xt=8,Ki=9,oi=10,jt=11,Wa=12,Sp=13,aa=14,Tn=15,_o=16,ra=17,Si=18,Ji=19,kp=20,Zi=21,$s=22,yo=23,Bn=24,Xs=25,Do=26,Jt=27,qh=1,Fp=6,xo=7,ac=8,ca=9,Ht=10;function Qi(n){return Array.isArray(n)&&typeof n[qh]=="object"}function ai(n){return Array.isArray(n)&&n[qh]===!0}function Ip(n){return(n.flags&4)!==0}function Eo(n){return n.componentOffset>-1}function Zs(n){return(n.flags&1)===1}function eo(n){return!!n.template}function $a(n){return(n[ze]&512)!==0}function sa(n){return(n[ze]&256)===256}var bp="svg",Gh="math";function Xn(n){for(;Array.isArray(n);)n=n[ii];return n}function Tp(n,e){return Xn(e[n])}function ri(n,e){return Xn(e[n.index])}function Ys(n,e){return n.data[e]}function ci(n,e){let t=e[n];return Qi(t)?t:t[ii]}function Wh(n){return(n[ze]&4)===4}function Ks(n){return(n[ze]&128)===128}function $h(n){return ai(n[nn])}function ki(n,e){return e==null?null:n[e]}function Lp(n){n[ra]=0}function wp(n){n[ze]&1024||(n[ze]|=1024,Ks(n)&&Xa(n))}function Xh(n,e){for(;n>0;)e=e[aa],n--;return e}function rc(n){return!!(n[ze]&9216||n[Bn]?.dirty)}function Js(n){n[oi].changeDetectionScheduler?.notify(8),n[ze]&64&&(n[ze]|=1024),rc(n)&&Xa(n)}function Xa(n){n[oi].changeDetectionScheduler?.notify(0);let e=vo(n);for(;e!==null&&!(e[ze]&8192||(e[ze]|=8192,!Ks(e)));)e=vo(e)}function Ap(n,e){if(sa(n))throw new ot(911,!1);n[Zi]===null&&(n[Zi]=[]),n[Zi].push(e)}function Zh(n,e){if(n[Zi]===null)return;let t=n[Zi].indexOf(e);t!==-1&&n[Zi].splice(t,1)}function vo(n){let e=n[nn];return ai(e)?e[nn]:e}function Rp(n){return n[Ga]??=[]}function jp(n){return n.cleanup??=[]}function Yh(n,e,t,i){let o=Rp(e);o.push(t),n.firstCreatePass&&jp(n).push(i,o.length-1)}var Xe={lFrame:l2(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var ap=!1;function Kh(){return Xe.lFrame.elementDepthCount}function Jh(){Xe.lFrame.elementDepthCount++}function Np(){Xe.lFrame.elementDepthCount--}function Qh(){return Xe.bindingsEnabled}function Bp(){return Xe.skipHydrationRootTNode!==null}function Pp(n){return Xe.skipHydrationRootTNode===n}function zp(){Xe.skipHydrationRootTNode=null}function Ze(){return Xe.lFrame.lView}function ln(){return Xe.lFrame.tView}function Zn(n){return Xe.lFrame.contextLView=n,n[Xt]}function Yn(n){return Xe.lFrame.contextLView=null,n}function kn(){let n=Op();for(;n!==null&&n.type===64;)n=n.parent;return n}function Op(){return Xe.lFrame.currentTNode}function e2(){let n=Xe.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Za(n,e){let t=Xe.lFrame;t.currentTNode=n,t.isParent=e}function Up(){return Xe.lFrame.isParent}function Hp(){Xe.lFrame.isParent=!1}function Vp(){return ap}function Jr(n){let e=ap;return ap=n,e}function t2(){let n=Xe.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function n2(){return Xe.lFrame.bindingIndex}function i2(n){return Xe.lFrame.bindingIndex=n}function la(){return Xe.lFrame.bindingIndex++}function Qs(n){let e=Xe.lFrame,t=e.bindingIndex;return e.bindingIndex=e.bindingIndex+n,t}function o2(){return Xe.lFrame.inI18n}function a2(n,e){let t=Xe.lFrame;t.bindingIndex=t.bindingRootIndex=n,el(e)}function r2(){return Xe.lFrame.currentDirectiveIndex}function el(n){Xe.lFrame.currentDirectiveIndex=n}function c2(n){let e=Xe.lFrame.currentDirectiveIndex;return e===-1?null:n[e]}function tl(){return Xe.lFrame.currentQueryIndex}function cc(n){Xe.lFrame.currentQueryIndex=n}function wC(n){let e=n[Le];return e.type===2?e.declTNode:e.type===1?n[Sn]:null}function qp(n,e,t){if(t&4){let o=e,a=n;for(;o=o.parent,o===null&&!(t&1);)if(o=wC(a),o===null||(a=a[aa],o.type&10))break;if(o===null)return!1;e=o,n=a}let i=Xe.lFrame=s2();return i.currentTNode=e,i.lView=n,!0}function nl(n){let e=s2(),t=n[Le];Xe.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function s2(){let n=Xe.lFrame,e=n===null?null:n.child;return e===null?l2(n):e}function l2(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function d2(){let n=Xe.lFrame;return Xe.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Gp=d2;function il(){let n=d2();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function u2(n){return(Xe.lFrame.contextLView=Xh(n,Xe.lFrame.contextLView))[Xt]}function Fi(){return Xe.lFrame.selectedIndex}function So(n){Xe.lFrame.selectedIndex=n}function ol(){let n=Xe.lFrame;return Ys(n.tView,n.selectedIndex)}function tt(){Xe.lFrame.currentNamespace=bp}function Pt(){AC()}function AC(){Xe.lFrame.currentNamespace=null}function p2(){return Xe.lFrame.currentNamespace}var f2=!0;function al(){return f2}function sc(n){f2=n}function rp(n,e=null,t=null,i){let o=m2(n,e,t,i);return o.resolveInjectorInitializers(),o}function m2(n,e=null,t=null,i,o=new Set){let a=[t||yn,zh(n)],r;return new ea(a,e||oc(),r||null,o)}var Mo=class n{static THROW_IF_NOT_FOUND=Ko;static NULL=new Kr;static create(e,t){if(Array.isArray(e))return rp({name:""},t,e,"");{let i=e.name??"";return rp({name:i},e.parent,e.providers,i)}}static \u0275prov=$t({token:n,providedIn:"any",factory:()=>Dt(_p)});static __NG_ELEMENT_ID__=-1},vn=new rt(""),Ya=(()=>{class n{static __NG_ELEMENT_ID__=RC;static __NG_ENV_ID__=t=>t}return n})(),ws=class extends Ya{_lView;constructor(e){super(),this._lView=e}get destroyed(){return sa(this._lView)}onDestroy(e){let t=this._lView;return Ap(t,e),()=>Zh(t,e)}};function RC(){return new ws(Ze())}var h2=!1,g2=new rt(""),Ka=(()=>{class n{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Xr(!1);debugTaskTracker=at(g2,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new za(t=>{t.next(!1),t.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),this.debugTaskTracker?.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.debugTaskTracker?.remove(t),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=$t({token:n,providedIn:"root",factory:()=>new n})}return n})(),cp=class extends $i{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,Vh()&&(this.destroyRef=at(Ya,{optional:!0})??void 0,this.pendingTasks=at(Ka,{optional:!0})??void 0)}emit(e){let t=Ne(null);try{super.next(e)}finally{Ne(t)}}subscribe(e,t,i){let o=e,a=t||(()=>null),r=i;if(e&&typeof e=="object"){let s=e;o=s.next?.bind(s),a=s.error?.bind(s),r=s.complete?.bind(s)}this.__isAsync&&(a=this.wrapInTimeout(a),o&&(o=this.wrapInTimeout(o)),r&&(r=this.wrapInTimeout(r)));let c=super.subscribe({next:o,error:a,complete:r});return e instanceof En&&e.add(c),c}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{e(t)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},Xi=cp;function As(...n){}function Wp(n){let e,t;function i(){n=As;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function y2(n){return queueMicrotask(()=>n()),()=>{n=As}}var $p="isAngularZone",Qr=$p+"_ID",jC=0,Wn=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new Xi(!1);onMicrotaskEmpty=new Xi(!1);onStable=new Xi(!1);onError=new Xi(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:o=!1,scheduleInRootZone:a=h2}=e;if(typeof Zone>"u")throw new ot(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!o&&i,r.shouldCoalesceRunChangeDetection=o,r.callbackScheduled=!1,r.scheduleInRootZone=a,PC(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get($p)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new ot(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new ot(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,o){let a=this._inner,r=a.scheduleEventTask("NgZoneEvent: "+o,e,NC,As,As);try{return a.runTask(r,t,i)}finally{a.cancelTask(r)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},NC={};function Xp(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function BC(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){Wp(()=>{n.callbackScheduled=!1,sp(n),n.isCheckStableRunning=!0,Xp(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),sp(n)}function PC(n){let e=()=>{BC(n)},t=jC++;n._inner=n._inner.fork({name:"angular",properties:{[$p]:!0,[Qr]:t,[Qr+t]:!0},onInvokeTask:(i,o,a,r,c,s)=>{if(zC(s))return i.invokeTask(a,r,c,s);try{return Fh(n),i.invokeTask(a,r,c,s)}finally{(n.shouldCoalesceEventChangeDetection&&r.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),Ih(n)}},onInvoke:(i,o,a,r,c,s,l)=>{try{return Fh(n),i.invoke(a,r,c,s,l)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!OC(s)&&e(),Ih(n)}},onHasTask:(i,o,a,r)=>{i.hasTask(a,r),o===a&&(r.change=="microTask"?(n._hasPendingMicrotasks=r.microTask,sp(n),Xp(n)):r.change=="macroTask"&&(n.hasPendingMacrotasks=r.macroTask))},onHandleError:(i,o,a,r)=>(i.handleError(a,r),n.runOutsideAngular(()=>n.onError.emit(r)),!1)})}function sp(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Fh(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Ih(n){n._nesting--,Xp(n)}var ec=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new Xi;onMicrotaskEmpty=new Xi;onStable=new Xi;onError=new Xi;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,o){return e.apply(t,i)}};function zC(n){return v2(n,"__ignore_ng_zone__")}function OC(n){return v2(n,"__scheduler_tick__")}function v2(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var Yi=class{_console=console;handleError(e){this._console.error("ERROR",e)}},da=new rt("",{factory:()=>{let n=at(Wn),e=at(Gn),t;return i=>{n.runOutsideAngular(()=>{e.destroyed&&!t?setTimeout(()=>{throw i}):(t??=e.get(Yi),t.handleError(i))})}}}),M2={provide:qa,useValue:()=>{let n=at(Yi,{optional:!0})},multi:!0},UC=new rt("",{factory:()=>{let n=at(vn).defaultView;if(!n)return;let e=at(da),t=a=>{e(a.reason),a.preventDefault()},i=a=>{a.error?e(a.error):e(new Error(a.message,{cause:a})),a.preventDefault()},o=()=>{n.addEventListener("unhandledrejection",t),n.addEventListener("error",i)};typeof Zone<"u"?Zone.root.run(o):o(),at(Ya).onDestroy(()=>{n.removeEventListener("error",i),n.removeEventListener("unhandledrejection",t)})}});function Zp(){return Gs([Ph(()=>{at(UC)})])}function nt(n,e){let[t,i,o]=Ou(n,e?.equal),a=t,r=a[xn];return a.set=i,a.update=o,a.asReadonly=C2.bind(a),a}function C2(){let n=this[xn];if(n.readonlyFn===void 0){let e=()=>this();e[xn]=n,n.readonlyFn=e}return n.readonlyFn}var rl=(()=>{class n{view;node;constructor(t,i){this.view=t,this.node=i}static __NG_ELEMENT_ID__=HC}return n})();function HC(){return new rl(Ze(),kn())}var ta=class{},lc=new rt("",{factory:()=>!0});var Yp=new rt("");var cl=(()=>{class n{static \u0275prov=$t({token:n,providedIn:"root",factory:()=>new lp})}return n})(),lp=class{dirtyEffectCount=0;queues=new Map;add(e){this.enqueue(e),this.schedule(e)}schedule(e){e.dirty&&this.dirtyEffectCount++}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),e.dirty&&this.dirtyEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||i.add(e)}flush(){for(;this.dirtyEffectCount>0;){let e=!1;for(let[t,i]of this.queues)t===null?e||=this.flushQueue(i):e||=t.run(()=>this.flushQueue(i));e||(this.dirtyEffectCount=0)}}flushQueue(e){let t=!1;for(let i of e)i.dirty&&(this.dirtyEffectCount--,t=!0,i.run());return t}},Rs=class{[xn];constructor(e){this[xn]=e}destroy(){this[xn].destroy()}};function Kp(n,e){let t=e?.injector??at(Mo),i=e?.manualCleanup!==!0?t.get(Ya):null,o,a=t.get(rl,null,{optional:!0}),r=t.get(ta);return a!==null?(o=GC(a.view,r,n),i instanceof ws&&i._lView===a.view&&(i=null)):o=WC(n,t.get(cl),r),o.injector=t,i!==null&&(o.onDestroyFns=[i.onDestroy(()=>o.destroy())]),new Rs(o)}var _2=tn(zt({},Uu),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let n=Jr(!1);try{Hu(this)}finally{Jr(n)}},cleanup(){if(!this.cleanupFns?.length)return;let n=Ne(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],Ne(n)}}}),VC=tn(zt({},_2),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(Xo(this),this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();this.cleanup(),this.scheduler.remove(this)}}),qC=tn(zt({},_2),{consumerMarkedDirty(){this.view[ze]|=8192,Xa(this.view),this.notifier.notify(13)},destroy(){if(Xo(this),this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();this.cleanup(),this.view[yo]?.delete(this)}});function GC(n,e,t){let i=Object.create(qC);return i.view=n,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=e,i.fn=D2(i,t),n[yo]??=new Set,n[yo].add(i),i.consumerMarkedDirty(i),i}function WC(n,e,t){let i=Object.create(VC);return i.fn=D2(i,n),i.scheduler=e,i.notifier=t,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function D2(n,e){return()=>{e(t=>(n.cleanupFns??=[]).push(t))}}function Il(n){return{toString:n}.toString()}var R1=Function;function n_(n){return typeof n=="function"}function Y2(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var ml=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function i_(n){return n.type.prototype.ngOnChanges&&(n.setInput=a_),o_}function o_(){let n=J2(this),e=n?.current;if(e){let t=n.previous;if(t===Co)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function a_(n,e,t,i,o){let a=this.declaredInputs[i],r=J2(n)||r_(n,{previous:Co,current:null}),c=r.current||(r.current={}),s=r.previous,l=s[a];c[a]=new ml(l&&l.currentValue,t,s===Co),Y2(n,e,o,t)}var K2="__ngSimpleChanges__";function J2(n){return n[K2]||null}function r_(n,e){return n[K2]=e}var x2=[];var Ft=function(n,e=null,t){for(let i=0;i<x2.length;i++){let o=x2[i];o(n,e,t)}},ft=(function(n){return n[n.TemplateCreateStart=0]="TemplateCreateStart",n[n.TemplateCreateEnd=1]="TemplateCreateEnd",n[n.TemplateUpdateStart=2]="TemplateUpdateStart",n[n.TemplateUpdateEnd=3]="TemplateUpdateEnd",n[n.LifecycleHookStart=4]="LifecycleHookStart",n[n.LifecycleHookEnd=5]="LifecycleHookEnd",n[n.OutputStart=6]="OutputStart",n[n.OutputEnd=7]="OutputEnd",n[n.BootstrapApplicationStart=8]="BootstrapApplicationStart",n[n.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",n[n.BootstrapComponentStart=10]="BootstrapComponentStart",n[n.BootstrapComponentEnd=11]="BootstrapComponentEnd",n[n.ChangeDetectionStart=12]="ChangeDetectionStart",n[n.ChangeDetectionEnd=13]="ChangeDetectionEnd",n[n.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",n[n.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",n[n.AfterRenderHooksStart=16]="AfterRenderHooksStart",n[n.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",n[n.ComponentStart=18]="ComponentStart",n[n.ComponentEnd=19]="ComponentEnd",n[n.DeferBlockStateStart=20]="DeferBlockStateStart",n[n.DeferBlockStateEnd=21]="DeferBlockStateEnd",n[n.DynamicComponentStart=22]="DynamicComponentStart",n[n.DynamicComponentEnd=23]="DynamicComponentEnd",n[n.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",n[n.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",n})(ft||{});function c_(n,e,t){let{ngOnChanges:i,ngOnInit:o,ngDoCheck:a}=e.type.prototype;if(i){let r=i_(e);(t.preOrderHooks??=[]).push(n,r),(t.preOrderCheckHooks??=[]).push(n,r)}o&&(t.preOrderHooks??=[]).push(0-n,o),a&&((t.preOrderHooks??=[]).push(n,a),(t.preOrderCheckHooks??=[]).push(n,a))}function s_(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let a=n.data[t].type.prototype,{ngAfterContentInit:r,ngAfterContentChecked:c,ngAfterViewInit:s,ngAfterViewChecked:l,ngOnDestroy:d}=a;r&&(n.contentHooks??=[]).push(-t,r),c&&((n.contentHooks??=[]).push(t,c),(n.contentCheckHooks??=[]).push(t,c)),s&&(n.viewHooks??=[]).push(-t,s),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),d!=null&&(n.destroyHooks??=[]).push(t,d)}}function ll(n,e,t){Q2(n,e,3,t)}function dl(n,e,t,i){(n[ze]&3)===t&&Q2(n,e,t,i)}function Jp(n,e){let t=n[ze];(t&3)===e&&(t&=16383,t+=1,n[ze]=t)}function Q2(n,e,t,i){let o=i!==void 0?n[ra]&65535:0,a=i??-1,r=e.length-1,c=0;for(let s=o;s<r;s++)if(typeof e[s+1]=="number"){if(c=e[s],i!=null&&c>=i)break}else e[s]<0&&(n[ra]+=65536),(c<a||a==-1)&&(l_(n,t,e,s),n[ra]=(n[ra]&4294901760)+s+2),s++}function E2(n,e){Ft(ft.LifecycleHookStart,n,e);let t=Ne(null);try{e.call(n)}finally{Ne(t),Ft(ft.LifecycleHookEnd,n,e)}}function l_(n,e,t,i){let o=t[i]<0,a=t[i+1],r=o?-t[i]:t[i],c=n[r];o?n[ze]>>14<n[ra]>>16&&(n[ze]&3)===e&&(n[ze]+=16384,E2(c,a)):E2(c,a)}var Qa=-1,fc=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i,o){this.factory=e,this.name=o,this.canSeeViewProviders=t,this.injectImpl=i}};function d_(n){return(n.flags&8)!==0}function u_(n){return(n.flags&16)!==0}function p_(n,e,t){let i=0;for(;i<t.length;){let o=t[i];if(typeof o=="number"){if(o!==0)break;i++;let a=t[i++],r=t[i++],c=t[i++];n.setAttribute(e,r,c,a)}else{let a=o,r=t[++i];m_(a)?n.setProperty(e,a,r):n.setAttribute(e,a,r),i++}}return i}function f_(n){return n===3||n===4||n===6}function m_(n){return n.charCodeAt(0)===64}function er(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let o=e[i];typeof o=="number"?t=o:t===0||(t===-1||t===2?S2(n,t,o,null,e[++i]):S2(n,t,o,null,null))}}return n}function S2(n,e,t,i,o){let a=0,r=n.length;if(e===-1)r=-1;else for(;a<n.length;){let c=n[a++];if(typeof c=="number"){if(c===e){r=-1;break}else if(c>e){r=a-1;break}}}for(;a<n.length;){let c=n[a];if(typeof c=="number")break;if(c===t){o!==null&&(n[a+1]=o);return}a++,o!==null&&a++}r!==-1&&(n.splice(r,0,e),a=r+1),n.splice(a++,0,t),o!==null&&n.splice(a++,0,o)}function eg(n){return n!==Qa}function hl(n){return n&32767}function h_(n){return n>>16}function gl(n,e){let t=h_(n),i=e;for(;t>0;)i=i[aa],t--;return i}var r1=!0;function k2(n){let e=r1;return r1=n,e}var g_=256,tg=g_-1,ng=5,y_=0,Ii={};function v_(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(na)&&(i=t[na]),i==null&&(i=t[na]=y_++);let o=i&tg,a=1<<o;e.data[n+(o>>ng)]|=a}function ig(n,e){let t=og(n,e);if(t!==-1)return t;let i=e[Le];i.firstCreatePass&&(n.injectorIndex=e.length,Qp(i.data,n),Qp(e,null),Qp(i.blueprint,null));let o=j1(n,e),a=n.injectorIndex;if(eg(o)){let r=hl(o),c=gl(o,e),s=c[Le].data;for(let l=0;l<8;l++)e[a+l]=c[r+l]|s[r+l]}return e[a+8]=o,a}function Qp(n,e){n.push(0,0,0,0,0,0,0,0,e)}function og(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function j1(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,o=e;for(;o!==null;){if(i=lg(o),i===null)return Qa;if(t++,o=o[aa],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Qa}function M_(n,e,t){v_(n,e,t)}function ag(n,e,t){if(t&8||n!==void 0)return n;Us(e,"NodeInjector")}function rg(n,e,t,i){if(t&8&&i===void 0&&(i=null),(t&3)===0){let o=n[Ki],a=Nn(void 0);try{return o?o.get(e,i,t&8):Mp(e,i,t&8)}finally{Nn(a)}}return ag(i,e,t)}function cg(n,e,t,i=0,o){if(n!==null){if(e[ze]&2048&&!(i&2)){let r=x_(n,e,t,i,Ii);if(r!==Ii)return r}let a=sg(n,e,t,i,Ii);if(a!==Ii)return a}return rg(e,t,i,o)}function sg(n,e,t,i,o){let a=__(t);if(typeof a=="function"){if(!qp(e,n,i))return i&1?ag(o,t,i):rg(e,t,i,o);try{let r;if(r=a(i),r==null&&!(i&8))Us(t);else return r}finally{Gp()}}else if(typeof a=="number"){let r=null,c=og(n,e),s=Qa,l=i&1?e[Tn][Sn]:null;for((c===-1||i&4)&&(s=c===-1?j1(n,e):e[c+8],s===Qa||!I2(i,!1)?c=-1:(r=e[Le],c=hl(s),e=gl(s,e)));c!==-1;){let d=e[Le];if(F2(a,c,d.data)){let p=C_(c,e,t,r,i,l);if(p!==Ii)return p}s=e[c+8],s!==Qa&&I2(i,e[Le].data[c+8]===l)&&F2(a,c,e)?(r=d,c=hl(s),e=gl(s,e)):c=-1}}return o}function C_(n,e,t,i,o,a){let r=e[Le],c=r.data[n+8],s=i==null?Eo(c)&&r1:i!=r&&(c.type&3)!==0,l=o&1&&a===c,d=ul(c,r,t,s,l);return d!==null?yl(e,r,d,c,o):Ii}function ul(n,e,t,i,o){let a=n.providerIndexes,r=e.data,c=a&1048575,s=n.directiveStart,l=n.directiveEnd,d=a>>20,p=i?c:c+d,u=o?c+d:l;for(let f=p;f<u;f++){let g=r[f];if(f<s&&t===g||f>=s&&g.type===t)return f}if(o){let f=r[s];if(f&&eo(f)&&f.type===t)return s}return null}function yl(n,e,t,i,o){let a=n[t],r=e.data;if(a instanceof fc){let c=a;if(c.resolving)throw vp("");let s=k2(c.canSeeViewProviders);c.resolving=!0;let l=r[t].type||r[t],d,p=c.injectImpl?Nn(c.injectImpl):null,u=qp(n,i,0);try{a=n[t]=c.factory(void 0,o,r,n,i),e.firstCreatePass&&t>=i.directiveStart&&c_(t,r[t],e)}finally{p!==null&&Nn(p),k2(s),c.resolving=!1,Gp()}}return a}function __(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(na)?n[na]:void 0;return typeof e=="number"?e>=0?e&tg:D_:e}function F2(n,e,t){let i=1<<n;return!!(t[e+(n>>ng)]&i)}function I2(n,e){return!(n&2)&&!(n&1&&e)}var ua=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return cg(this._tNode,this._lView,e,Jo(i),t)}};function D_(){return new ua(kn(),Ze())}function xt(n){return Il(()=>{let e=n.prototype.constructor,t=e[Yr]||c1(e),i=Object.prototype,o=Object.getPrototypeOf(n.prototype).constructor;for(;o&&o!==i;){let a=o[Yr]||c1(o);if(a&&a!==t)return a;o=Object.getPrototypeOf(o)}return a=>new a})}function c1(n){return up(n)?()=>{let e=c1(bn(n));return e&&e()}:Qo(n)}function x_(n,e,t,i,o){let a=n,r=e;for(;a!==null&&r!==null&&r[ze]&2048&&!$a(r);){let c=sg(a,r,t,i|2,Ii);if(c!==Ii)return c;let s=a.parent;if(!s){let l=r[kp];if(l){let d=l.get(t,Ii,i&-5);if(d!==Ii)return d}s=lg(r),r=r[aa]}a=s}return o}function lg(n){let e=n[Le],t=e.type;return t===2?e.declTNode:t===1?n[Sn]:null}function E_(){return rr(kn(),Ze())}function rr(n,e){return new ko(ri(n,e))}var ko=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=E_}return n})();function dg(n){return n instanceof ko?n.nativeElement:n}function S_(){return this._results[Symbol.iterator]()}var vl=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new $i}constructor(e=!1){this._emitDistinctChangesOnly=e}get(e){return this._results[e]}map(e){return this._results.map(e)}filter(e){return this._results.filter(e)}find(e){return this._results.find(e)}reduce(e,t){return this._results.reduce(e,t)}forEach(e){this._results.forEach(e)}some(e){return this._results.some(e)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(e,t){this.dirty=!1;let i=jh(e);(this._changesDetected=!Rh(this._results,i,t))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(e){this._onDirty=e}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=S_};function ug(n){return(n.flags&128)===128}var N1=(function(n){return n[n.OnPush=0]="OnPush",n[n.Eager=1]="Eager",n[n.Default=1]="Default",n})(N1||{}),pg=new Map,k_=0;function F_(){return k_++}function I_(n){pg.set(n[Ji],n)}function s1(n){pg.delete(n[Ji])}var b2="__ngContext__";function tr(n,e){Qi(e)?(n[b2]=e[Ji],I_(e)):n[b2]=e}function fg(n){return hg(n[Wa])}function mg(n){return hg(n[$n])}function hg(n){for(;n!==null&&!ai(n);)n=n[$n];return n}var b_;function B1(n){b_=n}var bl=new rt("",{factory:()=>T_}),T_="ng";var Tl=new rt(""),Cc=new rt("",{providedIn:"platform",factory:()=>"unknown"});var Ll=new rt("",{factory:()=>at(vn).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var gg="r";var yg="di";var vg=!1,Mg=new rt("",{factory:()=>vg});var L_=(n,e,t,i)=>{};function w_(n,e,t,i){L_(n,e,t,i)}function wl(n){return(n.flags&32)===32}var A_=()=>null;function Cg(n,e,t=!1){return A_(n,e,t)}function _g(n,e){let t=n.contentQueries;if(t!==null){let i=Ne(null);try{for(let o=0;o<t.length;o+=2){let a=t[o],r=t[o+1];if(r!==-1){let c=n.data[r];cc(a),c.contentQueries(2,e[r],r)}}}finally{Ne(i)}}}function l1(n,e,t){cc(0);let i=Ne(null);try{e(n,t)}finally{Ne(i)}}function Dg(n,e,t){if(Ip(e)){let i=Ne(null);try{let o=e.directiveStart,a=e.directiveEnd;for(let r=o;r<a;r++){let c=n.data[r];if(c.contentQueries){let s=t[r];c.contentQueries(1,s,r)}}}finally{Ne(i)}}}var di=(function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n[n.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",n})(di||{});var Ml=class{changingThisBreaksApplicationSecurity;constructor(e){this.changingThisBreaksApplicationSecurity=e}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${js})`}};function Al(n){return n instanceof Ml?n.changingThisBreaksApplicationSecurity:n}function xg(n,e){let t=Eg(n);if(t!=null&&t!==e){if(t==="ResourceURL"&&e==="URL")return!0;throw new Error(`Required a safe ${e}, got a ${t} (see ${js})`)}return t===e}function Eg(n){return n instanceof Ml&&n.getTypeName()||null}var R_=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Sg(n){return n=String(n),n.match(R_)?n:"unsafe:"+n}var j_=/^>|^->|<!--|-->|--!>|<!-$/g,N_=/(<|>)/g,B_="\u200B$1\u200B";function P_(n){return n.replace(j_,e=>e.replace(N_,B_))}function z_(n,e){return n.createText(e)}function O_(n,e,t){n.setValue(e,t)}function U_(n,e){return n.createComment(P_(e))}function kg(n,e,t){return n.createElement(e,t)}function Cl(n,e,t,i,o){n.insertBefore(e,t,i,o)}function Fg(n,e,t){n.appendChild(e,t)}function T2(n,e,t,i,o){i!==null?Cl(n,e,t,i,o):Fg(n,e,t)}function Ig(n,e,t,i){n.removeChild(null,e,t,i)}function H_(n,e,t){n.setAttribute(e,"style",t)}function V_(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function bg(n,e,t){let{mergedAttrs:i,classes:o,styles:a}=t;i!==null&&p_(n,e,i),o!==null&&V_(n,e,o),a!==null&&H_(n,e,a)}var P1=(function(n){return n[n.NONE=0]="NONE",n[n.HTML=1]="HTML",n[n.STYLE=2]="STYLE",n[n.SCRIPT=3]="SCRIPT",n[n.URL=4]="URL",n[n.RESOURCE_URL=5]="RESOURCE_URL",n})(P1||{});function Kn(n){let e=q_();return e?e.sanitize(P1.URL,n)||"":xg(n,"URL")?Al(n):Sg(Ha(n))}function q_(){let n=Ze();return n&&n[oi].sanitizer}function G_(n,e,t){let i=n.length;for(;;){let o=n.indexOf(e,t);if(o===-1)return o;if(o===0||n.charCodeAt(o-1)<=32){let a=e.length;if(o+a===i||n.charCodeAt(o+a)<=32)return o}t=o+1}}var Tg="ng-template";function W_(n,e,t,i){let o=0;if(i){for(;o<e.length&&typeof e[o]=="string";o+=2)if(e[o]==="class"&&G_(e[o+1].toLowerCase(),t,0)!==-1)return!0}else if(z1(n))return!1;if(o=e.indexOf(1,o),o>-1){let a;for(;++o<e.length&&typeof(a=e[o])=="string";)if(a.toLowerCase()===t)return!0}return!1}function z1(n){return n.type===4&&n.value!==Tg}function $_(n,e,t){let i=n.type===4&&!t?Tg:n.value;return e===i}function X_(n,e,t){let i=4,o=n.attrs,a=o!==null?K_(o):0,r=!1;for(let c=0;c<e.length;c++){let s=e[c];if(typeof s=="number"){if(!r&&!si(i)&&!si(s))return!1;if(r&&si(s))continue;r=!1,i=s|i&1;continue}if(!r)if(i&4){if(i=2|i&1,s!==""&&!$_(n,s,t)||s===""&&e.length===1){if(si(i))return!1;r=!0}}else if(i&8){if(o===null||!W_(n,o,s,t)){if(si(i))return!1;r=!0}}else{let l=e[++c],d=Z_(s,o,z1(n),t);if(d===-1){if(si(i))return!1;r=!0;continue}if(l!==""){let p;if(d>a?p="":p=o[d+1].toLowerCase(),i&2&&l!==p){if(si(i))return!1;r=!0}}}}return si(i)||r}function si(n){return(n&1)===0}function Z_(n,e,t,i){if(e===null)return-1;let o=0;if(i||!t){let a=!1;for(;o<e.length;){let r=e[o];if(r===n)return o;if(r===3||r===6)a=!0;else if(r===1||r===2){let c=e[++o];for(;typeof c=="string";)c=e[++o];continue}else{if(r===4)break;if(r===0){o+=4;continue}}o+=a?1:2}return-1}else return J_(e,n)}function Lg(n,e,t=!1){for(let i=0;i<e.length;i++)if(X_(n,e[i],t))return!0;return!1}function Y_(n){let e=n.attrs;if(e!=null){let t=e.indexOf(5);if((t&1)===0)return e[t+1]}return null}function K_(n){for(let e=0;e<n.length;e++){let t=n[e];if(f_(t))return e}return n.length}function J_(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function Q_(n,e){e:for(let t=0;t<e.length;t++){let i=e[t];if(n.length===i.length){for(let o=0;o<n.length;o++)if(n[o]!==i[o])continue e;return!0}}return!1}function L2(n,e){return n?":not("+e.trim()+")":e}function eD(n){let e=n[0],t=1,i=2,o="",a=!1;for(;t<n.length;){let r=n[t];if(typeof r=="string")if(i&2){let c=n[++t];o+="["+r+(c.length>0?'="'+c+'"':"")+"]"}else i&8?o+="."+r:i&4&&(o+=" "+r);else o!==""&&!si(r)&&(e+=L2(a,o),o=""),i=r,a=a||!si(i);t++}return o!==""&&(e+=L2(a,o)),e}function tD(n){return n.map(eD).join(",")}function nD(n){let e=[],t=[],i=1,o=2;for(;i<n.length;){let a=n[i];if(typeof a=="string")o===2?a!==""&&e.push(a,n[++i]):o===8&&t.push(a);else{if(!si(o))break;o=a}i++}return t.length&&e.push(1,...t),e}var Ln={};function O1(n,e,t,i,o,a,r,c,s,l,d){let p=Jt+i,u=p+o,f=iD(p,u),g=typeof l=="function"?l():l;return f[Le]={type:n,blueprint:f,template:t,queries:null,viewQuery:c,declTNode:e,data:f.slice().fill(null,p),bindingStartIndex:p,expandoStartIndex:u,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof a=="function"?a():a,pipeRegistry:typeof r=="function"?r():r,firstChild:null,schemas:s,consts:g,incompleteFirstPass:!1,ssrId:d}}function iD(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Ln);return t}function oD(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=O1(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function U1(n,e,t,i,o,a,r,c,s,l,d){let p=e.blueprint.slice();return p[ii]=o,p[ze]=i|4|128|8|64|1024,(l!==null||n&&n[ze]&2048)&&(p[ze]|=2048),Lp(p),p[nn]=p[aa]=n,p[Xt]=t,p[oi]=r||n&&n[oi],p[jt]=c||n&&n[jt],p[Ki]=s||n&&n[Ki]||null,p[Sn]=a,p[Ji]=F_(),p[oa]=d,p[kp]=l,p[Tn]=e.type==2?n[Tn]:p,p}function aD(n,e,t){let i=ri(e,n),o=oD(t),a=n[oi].rendererFactory,r=H1(n,U1(n,o,null,wg(t),i,e,null,a.createRenderer(i,t),null,null,null));return n[e.index]=r}function wg(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function Ag(n,e,t,i){if(t===0)return-1;let o=e.length;for(let a=0;a<t;a++)e.push(i),n.blueprint.push(i),n.data.push(null);return o}function H1(n,e){return n[Wa]?n[Sp][$n]=e:n[Wa]=e,n[Sp]=e,e}function ee(n=1){Rg(ln(),Ze(),Fi()+n,!1)}function Rg(n,e,t,i){if(!i)if((e[ze]&3)===3){let a=n.preOrderCheckHooks;a!==null&&ll(e,a,t)}else{let a=n.preOrderHooks;a!==null&&dl(e,a,0,t)}So(t)}var Rl=(function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n})(Rl||{});function d1(n,e,t,i){let o=Ne(null);try{let[a,r,c]=n.inputs[t],s=null;(r&Rl.SignalBased)!==0&&(s=e[a][xn]),s!==null&&s.transformFn!==void 0?i=s.transformFn(i):c!==null&&(i=c.call(e,i)),n.setInput!==null?n.setInput(e,s,i,t,a):Y2(e,s,a,i)}finally{Ne(o)}}var to=(function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n})(to||{}),rD;function V1(n,e){return rD(n,e)}var zw=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var u1=new WeakMap,dc=new WeakSet;function cD(n,e){let t=u1.get(n);if(!t||t.length===0)return;let i=e.parentNode,o=e.previousSibling;for(let a=t.length-1;a>=0;a--){let r=t[a],c=r.parentNode;r===e?(t.splice(a,1),dc.add(r),r.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(o&&r===o||c&&i&&c!==i)&&(t.splice(a,1),r.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),r.parentNode?.removeChild(r))}}function sD(n,e){let t=u1.get(n);t?t.includes(e)||t.push(e):u1.set(n,[e])}var pa=new Set,q1=(function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n})(q1||{}),cr=new rt(""),w2=new Set;function sr(n){w2.has(n)||(w2.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}var jg=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=$t({token:n,providedIn:"root",factory:()=>new n})}return n})();var Ng=new rt("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:at(Gn)})});function Bg(n,e,t){let i=n.get(Ng);if(Array.isArray(e))for(let o of e)i.queue.add(o),t?.detachedLeaveAnimationFns?.push(o);else i.queue.add(e),t?.detachedLeaveAnimationFns?.push(e);i.scheduler&&i.scheduler(n)}function lD(n,e){let t=n.get(Ng);if(e.detachedLeaveAnimationFns){for(let i of e.detachedLeaveAnimationFns)t.queue.delete(i);e.detachedLeaveAnimationFns=void 0}}function dD(n,e){for(let[t,i]of e)Bg(n,i.animateFns)}function A2(n,e,t,i){let o=n?.[Do]?.enter;e!==null&&o&&o.has(t.index)&&dD(i,o)}function Ja(n,e,t,i,o,a,r,c){if(o!=null){let s,l=!1;ai(o)?s=o:Qi(o)&&(l=!0,o=o[ii]);let d=Xn(o);n===0&&i!==null?(A2(c,i,a,t),r==null?Fg(e,i,d):Cl(e,i,d,r||null,!0)):n===1&&i!==null?(A2(c,i,a,t),Cl(e,i,d,r||null,!0),cD(a,d)):n===2?(c?.[Do]?.leave?.has(a.index)&&sD(a,d),dc.delete(d),R2(c,a,t,p=>{if(dc.has(d)){dc.delete(d);return}Ig(e,d,l,p)})):n===3&&(dc.delete(d),R2(c,a,t,()=>{e.destroyNode(d)})),s!=null&&_D(e,n,t,s,a,i,r)}}function uD(n,e){Pg(n,e),e[ii]=null,e[Sn]=null}function pD(n,e,t,i,o,a){i[ii]=o,i[Sn]=e,Nl(n,i,t,1,o,a)}function Pg(n,e){e[oi].changeDetectionScheduler?.notify(9),Nl(n,e,e[jt],2,null,null)}function fD(n){let e=n[Wa];if(!e)return e1(n[Le],n);for(;e;){let t=null;if(Qi(e))t=e[Wa];else{let i=e[Ht];i&&(t=i)}if(!t){for(;e&&!e[$n]&&e!==n;)Qi(e)&&e1(e[Le],e),e=e[nn];e===null&&(e=n),Qi(e)&&e1(e[Le],e),t=e&&e[$n]}e=t}}function G1(n,e){let t=n[ca],i=t.indexOf(e);t.splice(i,1)}function jl(n,e){if(sa(e))return;let t=e[jt];t.destroyNode&&Nl(n,e,t,3,null,null),fD(e)}function e1(n,e){if(sa(e))return;let t=Ne(null);try{e[ze]&=-129,e[ze]|=256,e[Bn]&&Xo(e[Bn]),gD(n,e),hD(n,e),e[Le].type===1&&e[jt].destroy();let i=e[_o];if(i!==null&&ai(e[nn])){i!==e[nn]&&G1(i,e);let o=e[Si];o!==null&&o.detachView(n)}s1(e)}finally{Ne(t)}}function R2(n,e,t,i){let o=n?.[Do];if(o==null||o.leave==null||!o.leave.has(e.index))return i(!1);n&&pa.add(n[Ji]),Bg(t,()=>{if(o.leave&&o.leave.has(e.index)){let r=o.leave.get(e.index),c=[];if(r){for(let s=0;s<r.animateFns.length;s++){let l=r.animateFns[s],{promise:d}=l();c.push(d)}o.detachedLeaveAnimationFns=void 0}o.running=Promise.allSettled(c),mD(n,i)}else n&&pa.delete(n[Ji]),i(!1)},o)}function mD(n,e){let t=n[Do]?.running;if(t){t.then(()=>{n[Do].running=void 0,pa.delete(n[Ji]),e(!0)});return}e(!1)}function hD(n,e){let t=n.cleanup,i=e[Ga];if(t!==null)for(let r=0;r<t.length-1;r+=2)if(typeof t[r]=="string"){let c=t[r+3];c>=0?i[c]():i[-c].unsubscribe(),r+=2}else{let c=i[t[r+1]];t[r].call(c)}i!==null&&(e[Ga]=null);let o=e[Zi];if(o!==null){e[Zi]=null;for(let r=0;r<o.length;r++){let c=o[r];c()}}let a=e[yo];if(a!==null){e[yo]=null;for(let r of a)r.destroy()}}function gD(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let o=e[t[i]];if(!(o instanceof fc)){let a=t[i+1];if(Array.isArray(a))for(let r=0;r<a.length;r+=2){let c=o[a[r]],s=a[r+1];Ft(ft.LifecycleHookStart,c,s);try{s.call(c)}finally{Ft(ft.LifecycleHookEnd,c,s)}}else{Ft(ft.LifecycleHookStart,o,a);try{a.call(o)}finally{Ft(ft.LifecycleHookEnd,o,a)}}}}}function zg(n,e,t){return yD(n,e.parent,t)}function yD(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[ii];if(Eo(i)){let{encapsulation:o}=n.data[i.directiveStart+i.componentOffset];if(o===di.None||o===di.Emulated)return null}return ri(i,t)}function Og(n,e,t){return MD(n,e,t)}function vD(n,e,t){return n.type&40?ri(n,t):null}var MD=vD,j2;function W1(n,e,t,i){let o=zg(n,i,e),a=e[jt],r=i.parent||e[Sn],c=Og(r,i,e);if(o!=null)if(Array.isArray(t))for(let s=0;s<t.length;s++)T2(a,o,t[s],c,!1);else T2(a,o,t,c,!1);j2!==void 0&&j2(a,i,e,t,o)}function uc(n,e){if(e!==null){let t=e.type;if(t&3)return ri(e,n);if(t&4)return p1(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return uc(n,i);{let o=n[e.index];return ai(o)?p1(-1,o):Xn(o)}}else{if(t&128)return uc(n,e.next);if(t&32)return V1(e,n)()||Xn(n[e.index]);{let i=Ug(n,e);if(i!==null){if(Array.isArray(i))return i[0];let o=vo(n[Tn]);return uc(o,i)}else return uc(n,e.next)}}}return null}function Ug(n,e){if(e!==null){let i=n[Tn][Sn],o=e.projection;return i.projection[o]}return null}function p1(n,e){let t=Ht+n+1;if(t<e.length){let i=e[t],o=i[Le].firstChild;if(o!==null)return uc(i,o)}return e[xo]}function $1(n,e,t,i,o,a,r){for(;t!=null;){let c=i[Ki];if(t.type===128){t=t.next;continue}let s=i[t.index],l=t.type;if(r&&e===0&&(s&&tr(Xn(s),i),t.flags|=2),!wl(t))if(l&8)$1(n,e,t.child,i,o,a,!1),Ja(e,n,c,o,s,t,a,i);else if(l&32){let d=V1(t,i),p;for(;p=d();)Ja(e,n,c,o,p,t,a,i);Ja(e,n,c,o,s,t,a,i)}else l&16?Hg(n,e,i,t,o,a):Ja(e,n,c,o,s,t,a,i);t=r?t.projectionNext:t.next}}function Nl(n,e,t,i,o,a){$1(t,i,n.firstChild,e,o,a,!1)}function CD(n,e,t){let i=e[jt],o=zg(n,t,e),a=t.parent||e[Sn],r=Og(a,t,e);Hg(i,0,e,t,o,r)}function Hg(n,e,t,i,o,a){let r=t[Tn],s=r[Sn].projection[i.projection];if(Array.isArray(s))for(let l=0;l<s.length;l++){let d=s[l];Ja(e,n,t[Ki],o,d,i,a,t)}else{let l=s,d=r[nn];ug(i)&&(l.flags|=128),$1(n,e,l,d,o,a,!0)}}function _D(n,e,t,i,o,a,r){let c=i[xo],s=Xn(i);c!==s&&Ja(e,n,t,a,c,o,r);for(let l=Ht;l<i.length;l++){let d=i[l];Nl(d[Le],d,n,e,a,c)}}function DD(n,e,t,i,o){if(e)o?n.addClass(t,i):n.removeClass(t,i);else{let a=i.indexOf("-")===-1?void 0:to.DashCase;o==null?n.removeStyle(t,i,a):(typeof o=="string"&&o.endsWith("!important")&&(o=o.slice(0,-10),a|=to.Important),n.setStyle(t,i,o,a))}}function Vg(n,e,t,i,o){let a=Fi(),r=i&2;try{So(-1),r&&e.length>Jt&&Rg(n,e,Jt,!1);let c=r?ft.TemplateUpdateStart:ft.TemplateCreateStart;Ft(c,o,t),t(i,o)}finally{So(a);let c=r?ft.TemplateUpdateEnd:ft.TemplateCreateEnd;Ft(c,o,t)}}function qg(n,e,t){bD(n,e,t),(t.flags&64)===64&&TD(n,e,t)}function Bl(n,e,t=ri){let i=e.localNames;if(i!==null){let o=e.index+1;for(let a=0;a<i.length;a+=2){let r=i[a+1],c=r===-1?t(e,n):n[r];n[o++]=c}}}function xD(n,e,t,i){let a=i.get(Mg,vg)||t===di.ShadowDom||t===di.ExperimentalIsolatedShadowDom,r=n.selectRootElement(e,a);return ED(r),r}function ED(n){SD(n)}var SD=()=>null;function kD(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function FD(n,e,t,i,o,a){let r=e[Le];if(Z1(n,r,e,t,i)){Eo(n)&&ID(e,n.index);return}n.type&3&&(t=kD(t)),Gg(n,e,t,i,o,a)}function Gg(n,e,t,i,o,a){if(n.type&3){let r=ri(n,e);i=a!=null?a(i,n.value||"",t):i,o.setProperty(r,t,i)}else n.type&12}function ID(n,e){let t=ci(e,n);t[ze]&16||(t[ze]|=64)}function bD(n,e,t){let i=t.directiveStart,o=t.directiveEnd;Eo(t)&&aD(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||ig(t,e);let a=t.initialInputs;for(let r=i;r<o;r++){let c=n.data[r],s=yl(e,n,r,t);if(tr(s,e),a!==null&&jD(e,r-i,s,c,t,a),eo(c)){let l=ci(t.index,e);l[Xt]=yl(e,n,r,t)}}}function TD(n,e,t){let i=t.directiveStart,o=t.directiveEnd,a=t.index,r=r2();try{So(a);for(let c=i;c<o;c++){let s=n.data[c],l=e[c];el(c),(s.hostBindings!==null||s.hostVars!==0||s.hostAttrs!==null)&&LD(s,l)}}finally{So(-1),el(r)}}function LD(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function wD(n,e){let t=n.directiveRegistry,i=null;if(t)for(let o=0;o<t.length;o++){let a=t[o];Lg(e,a.selectors,!1)&&(i??=[],eo(a)?i.unshift(a):i.push(a))}return i}function AD(n,e,t,i,o,a){let r=ri(n,e);RD(e[jt],r,a,n.value,t,i,o)}function RD(n,e,t,i,o,a,r){if(a==null)n.removeAttribute(e,o,t);else{let c=r==null?Ha(a):r(a,i||"",o);n.setAttribute(e,o,c,t)}}function jD(n,e,t,i,o,a){let r=a[e];if(r!==null)for(let c=0;c<r.length;c+=2){let s=r[c],l=r[c+1];d1(i,t,s,l)}}function X1(n,e,t,i,o){let a=Jt+t,r=e[Le],c=o(r,e,n,i,t);e[a]=c,Za(n,!0);let s=n.type===2;return s?(bg(e[jt],c,n),(Kh()===0||Zs(n))&&tr(c,e),Jh()):tr(c,e),al()&&(!s||!wl(n))&&W1(r,e,c,n),n}function Pl(n){let e=n;return Up()?Hp():(e=e.parent,Za(e,!1)),e}function ND(n,e){let t=n[Ki];if(!t)return;let i;try{i=t.get(da,null)}catch{i=null}i?.(e)}function Z1(n,e,t,i,o){let a=n.inputs?.[i],r=n.hostDirectiveInputs?.[i],c=!1;if(r)for(let s=0;s<r.length;s+=2){let l=r[s],d=r[s+1],p=e.data[l];d1(p,t[l],d,o),c=!0}if(a)for(let s of a){let l=t[s],d=e.data[s];d1(d,l,i,o),c=!0}return c}function BD(n,e){let t=ci(e,n),i=t[Le];PD(i,t);let o=t[ii];o!==null&&t[oa]===null&&(t[oa]=Cg(o,t[Ki])),Ft(ft.ComponentStart);try{Y1(i,t,t[Xt])}finally{Ft(ft.ComponentEnd,t[Xt])}}function PD(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function Y1(n,e,t){nl(e);try{let i=n.viewQuery;i!==null&&l1(1,i,t);let o=n.template;o!==null&&Vg(n,e,o,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[Si]?.finishViewCreation(n),n.staticContentQueries&&_g(n,e),n.staticViewQueries&&l1(2,n.viewQuery,t);let a=n.components;a!==null&&zD(e,a)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[ze]&=-5,il()}}function zD(n,e){for(let t=0;t<e.length;t++)BD(n,e[t])}function _c(n,e,t,i){let o=Ne(null);try{let a=e.tView,c=n[ze]&4096?4096:16,s=U1(n,a,t,c,null,e,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),l=n[e.index];s[_o]=l;let d=n[Si];return d!==null&&(s[Si]=d.createEmbeddedView(a)),Y1(a,s,t),s}finally{Ne(o)}}function nr(n,e){return!e||e.firstChild===null||ug(n)}function mc(n,e,t,i,o=!1){for(;t!==null;){if(t.type===128){t=o?t.projectionNext:t.next;continue}let a=e[t.index];a!==null&&i.push(Xn(a)),ai(a)&&Wg(a,i);let r=t.type;if(r&8)mc(n,e,t.child,i);else if(r&32){let c=V1(t,e),s;for(;s=c();)i.push(s)}else if(r&16){let c=Ug(e,t);if(Array.isArray(c))i.push(...c);else{let s=vo(e[Tn]);mc(s[Le],s,c,i,!0)}}t=o?t.projectionNext:t.next}return i}function Wg(n,e){for(let t=Ht;t<n.length;t++){let i=n[t],o=i[Le].firstChild;o!==null&&mc(i[Le],i,o,e)}n[xo]!==n[ii]&&e.push(n[xo])}function $g(n){if(n[Xs]!==null){for(let e of n[Xs])e.impl.addSequence(e);n[Xs].length=0}}var Xg=[];function OD(n){return n[Bn]??UD(n)}function UD(n){let e=Xg.pop()??Object.create(VD);return e.lView=n,e}function HD(n){n.lView[Bn]!==n&&(n.lView=null,Xg.push(n))}var VD=tn(zt({},Aa),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{Xa(n.lView)},consumerOnSignalRead(){this.lView[Bn]=this}});function qD(n){let e=n[Bn]??Object.create(GD);return e.lView=n,e}var GD=tn(zt({},Aa),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=vo(n.lView);for(;e&&!Zg(e[Le]);)e=vo(e);e&&wp(e)},consumerOnSignalRead(){this.lView[Bn]=this}});function Zg(n){return n.type!==2}function Yg(n){if(n[yo]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[yo])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[ze]&8192)}}var WD=100;function Kg(n,e=0){let i=n[oi].rendererFactory,o=!1;o||i.begin?.();try{$D(n,e)}finally{o||i.end?.()}}function $D(n,e){let t=Vp();try{Jr(!0),f1(n,e);let i=0;for(;rc(n);){if(i===WD)throw new ot(103,!1);i++,f1(n,1)}}finally{Jr(t)}}function XD(n,e,t,i){if(sa(e))return;let o=e[ze],a=!1,r=!1;nl(e);let c=!0,s=null,l=null;a||(Zg(n)?(l=OD(e),s=Ra(l)):Cs()===null?(c=!1,l=qD(e),s=Ra(l)):e[Bn]&&(Xo(e[Bn]),e[Bn]=null));try{Lp(e),i2(n.bindingStartIndex),t!==null&&Vg(n,e,t,2,i);let d=(o&3)===3;if(!a)if(d){let f=n.preOrderCheckHooks;f!==null&&ll(e,f,null)}else{let f=n.preOrderHooks;f!==null&&dl(e,f,0,null),Jp(e,0)}if(r||ZD(e),Yg(e),Jg(e,0),n.contentQueries!==null&&_g(n,e),!a)if(d){let f=n.contentCheckHooks;f!==null&&ll(e,f)}else{let f=n.contentHooks;f!==null&&dl(e,f,1),Jp(e,1)}KD(n,e);let p=n.components;p!==null&&ey(e,p,0);let u=n.viewQuery;if(u!==null&&l1(2,u,i),!a)if(d){let f=n.viewCheckHooks;f!==null&&ll(e,f)}else{let f=n.viewHooks;f!==null&&dl(e,f,2),Jp(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[$s]){for(let f of e[$s])f();e[$s]=null}a||($g(e),e[ze]&=-73)}catch(d){throw a||Xa(e),d}finally{l!==null&&(qr(l,s),c&&HD(l)),il()}}function Jg(n,e){for(let t=fg(n);t!==null;t=mg(t))for(let i=Ht;i<t.length;i++){let o=t[i];Qg(o,e)}}function ZD(n){for(let e=fg(n);e!==null;e=mg(e)){if(!(e[ze]&2))continue;let t=e[ca];for(let i=0;i<t.length;i++){let o=t[i];wp(o)}}}function YD(n,e,t){Ft(ft.ComponentStart);let i=ci(e,n);try{Qg(i,t)}finally{Ft(ft.ComponentEnd,i[Xt])}}function Qg(n,e){Ks(n)&&f1(n,e)}function f1(n,e){let i=n[Le],o=n[ze],a=n[Bn],r=!!(e===0&&o&16);if(r||=!!(o&64&&e===0),r||=!!(o&1024),r||=!!(a?.dirty&&Gr(a)),r||=!1,a&&(a.dirty=!1),n[ze]&=-9217,r)XD(i,n,i.template,n[Xt]);else if(o&8192){let c=Ne(null);try{Yg(n),Jg(n,1);let s=i.components;s!==null&&ey(n,s,1),$g(n)}finally{Ne(c)}}}function ey(n,e,t){for(let i=0;i<e.length;i++)YD(n,e[i],t)}function KD(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let o=t[i];if(o<0)So(~o);else{let a=o,r=t[++i],c=t[++i];a2(r,a);let s=e[a];Ft(ft.HostBindingsUpdateStart,s);try{c(2,s)}finally{Ft(ft.HostBindingsUpdateEnd,s)}}}}finally{So(-1)}}function K1(n,e){let t=Vp()?64:1088;for(n[oi].changeDetectionScheduler?.notify(e);n;){n[ze]|=t;let i=vo(n);if($a(n)&&!i)return n;n=i}return null}function ty(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function ny(n,e){let t=Ht+e;if(t<n.length)return n[t]}function Dc(n,e,t,i=!0){let o=e[Le];if(JD(o,e,n,t),i){let r=p1(t,n),c=e[jt],s=c.parentNode(n[xo]);s!==null&&pD(o,n[Sn],c,e,s,r)}let a=e[oa];a!==null&&a.firstChild!==null&&(a.firstChild=null)}function iy(n,e){let t=hc(n,e);return t!==void 0&&jl(t[Le],t),t}function hc(n,e){if(n.length<=Ht)return;let t=Ht+e,i=n[t];if(i){let o=i[_o];o!==null&&o!==n&&G1(o,i),e>0&&(n[t-1][$n]=i[$n]);let a=nc(n,Ht+e);uD(i[Le],i);let r=a[Si];r!==null&&r.detachView(a[Le]),i[nn]=null,i[$n]=null,i[ze]&=-129}return i}function JD(n,e,t,i){let o=Ht+i,a=t.length;i>0&&(t[o-1][$n]=e),i<a-Ht?(e[$n]=t[o],Cp(t,Ht+i,e)):(t.push(e),e[$n]=null),e[nn]=t;let r=e[_o];r!==null&&t!==r&&oy(r,e);let c=e[Si];c!==null&&c.insertView(n),Js(e),e[ze]|=128}function oy(n,e){let t=n[ca],i=e[nn];if(Qi(i))n[ze]|=2;else{let o=i[nn][Tn];e[Tn]!==o&&(n[ze]|=2)}t===null?n[ca]=[e]:t.push(e)}var ir=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let e=this._lView,t=e[Le];return mc(t,e,t.firstChild,[])}constructor(e,t){this._lView=e,this._cdRefInjectingView=t}get context(){return this._lView[Xt]}set context(e){this._lView[Xt]=e}get destroyed(){return sa(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[nn];if(ai(e)){let t=e[ac],i=t?t.indexOf(this):-1;i>-1&&(hc(e,i),nc(t,i))}this._attachedToViewContainer=!1}jl(this._lView[Le],this._lView)}onDestroy(e){Ap(this._lView,e)}markForCheck(){K1(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[ze]&=-129}reattach(){Js(this._lView),this._lView[ze]|=128}detectChanges(){this._lView[ze]|=1024,Kg(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new ot(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=$a(this._lView),t=this._lView[_o];t!==null&&!e&&G1(t,this._lView),Pg(this._lView[Le],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new ot(902,!1);this._appRef=e;let t=$a(this._lView),i=this._lView[_o];i!==null&&!t&&oy(i,this._lView),Js(this._lView)}};var or=(()=>{class n{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=QD;constructor(t,i,o){this._declarationLView=t,this._declarationTContainer=i,this.elementRef=o}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(t,i){return this.createEmbeddedViewImpl(t,i)}createEmbeddedViewImpl(t,i,o){let a=_c(this._declarationLView,this._declarationTContainer,t,{embeddedViewInjector:i,dehydratedView:o});return new ir(a)}}return n})();function QD(){return J1(kn(),Ze())}function J1(n,e){return n.type&4?new or(e,n,rr(n,e)):null}function xc(n,e,t,i,o){let a=n.data[e];if(a===null)a=ex(n,e,t,i,o),o2()&&(a.flags|=32);else if(a.type&64){a.type=t,a.value=i,a.attrs=o;let r=e2();a.injectorIndex=r===null?-1:r.injectorIndex}return Za(a,!0),a}function ex(n,e,t,i,o){let a=Op(),r=Up(),c=r?a:a&&a.parent,s=n.data[e]=nx(n,c,t,e,i,o);return tx(n,s,a,r),s}function tx(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function nx(n,e,t,i,o,a){let r=e?e.injectorIndex:-1,c=0;return Bp()&&(c|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:r,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:c,providerIndexes:0,value:o,attrs:a,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function ix(n){let e=n[Fp]??[],i=n[nn][jt],o=[];for(let a of e)a.data[yg]!==void 0?o.push(a):ox(a,i);n[Fp]=o}function ox(n,e){let t=0,i=n.firstChild;if(i){let o=n.data[gg];for(;t<o;){let a=i.nextSibling;Ig(e,i,!1),i=a,t++}}}var ax=()=>null,rx=()=>null;function _l(n,e){return ax(n,e)}function ay(n,e,t){return rx(n,e,t)}var ry=class{},zl=class{},m1=class{resolveComponentFactory(e){throw new ot(917,!1)}},Ol=class{static NULL=new m1},fa=class{},Ul=(()=>{class n{destroyNode=null;static __NG_ELEMENT_ID__=()=>cx()}return n})();function cx(){let n=Ze(),e=kn(),t=ci(e.index,n);return(Qi(t)?t:n)[jt]}var cy=(()=>{class n{static \u0275prov=$t({token:n,providedIn:"root",factory:()=>null})}return n})();var pl={},h1=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){let o=this.injector.get(e,pl,i);return o!==pl||t===pl?o:this.parentInjector.get(e,t,i)}};function Dl(n,e,t){let i=t?n.styles:null,o=t?n.classes:null,a=0;if(e!==null)for(let r=0;r<e.length;r++){let c=e[r];if(typeof c=="number")a=c;else if(a==1)o=Bs(o,c);else if(a==2){let s=c,l=e[++r];i=Bs(i,s+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=o:n.classesWithoutHost=o}function ha(n,e=0){let t=Ze();if(t===null)return Dt(n,e);let i=kn();return cg(i,t,bn(n),e)}function sx(n,e,t,i,o){let a=i===null?null:{"":-1},r=o(n,t);if(r!==null){let c=r,s=null,l=null;for(let d of r)if(d.resolveHostDirectives!==null){[c,s,l]=d.resolveHostDirectives(r);break}ux(n,e,t,c,a,s,l)}a!==null&&i!==null&&lx(t,i,a)}function lx(n,e,t){let i=n.localNames=[];for(let o=0;o<e.length;o+=2){let a=t[e[o+1]];if(a==null)throw new ot(-301,!1);i.push(e[o],a)}}function dx(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function ux(n,e,t,i,o,a,r){let c=i.length,s=null;for(let u=0;u<c;u++){let f=i[u];s===null&&eo(f)&&(s=f,dx(n,t,u)),M_(ig(t,e),n,f.type)}yx(t,n.data.length,c),s?.viewProvidersResolver&&s.viewProvidersResolver(s);for(let u=0;u<c;u++){let f=i[u];f.providersResolver&&f.providersResolver(f)}let l=!1,d=!1,p=Ag(n,e,c,null);c>0&&(t.directiveToIndex=new Map);for(let u=0;u<c;u++){let f=i[u];if(t.mergedAttrs=er(t.mergedAttrs,f.hostAttrs),fx(n,t,e,p,f),gx(p,f,o),r!==null&&r.has(f)){let[C,h]=r.get(f);t.directiveToIndex.set(f.type,[p,C+t.directiveStart,h+t.directiveStart])}else(a===null||!a.has(f))&&t.directiveToIndex.set(f.type,p);f.contentQueries!==null&&(t.flags|=4),(f.hostBindings!==null||f.hostAttrs!==null||f.hostVars!==0)&&(t.flags|=64);let g=f.type.prototype;!l&&(g.ngOnChanges||g.ngOnInit||g.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),l=!0),!d&&(g.ngOnChanges||g.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),d=!0),p++}px(n,t,a)}function px(n,e,t){for(let i=e.directiveStart;i<e.directiveEnd;i++){let o=n.data[i];if(t===null||!t.has(o))N2(0,e,o,i),N2(1,e,o,i),P2(e,i,!1);else{let a=t.get(o);B2(0,e,a,i),B2(1,e,a,i),P2(e,i,!0)}}}function N2(n,e,t,i){let o=n===0?t.inputs:t.outputs;for(let a in o)if(o.hasOwnProperty(a)){let r;n===0?r=e.inputs??={}:r=e.outputs??={},r[a]??=[],r[a].push(i),sy(e,a)}}function B2(n,e,t,i){let o=n===0?t.inputs:t.outputs;for(let a in o)if(o.hasOwnProperty(a)){let r=o[a],c;n===0?c=e.hostDirectiveInputs??={}:c=e.hostDirectiveOutputs??={},c[r]??=[],c[r].push(i,a),sy(e,r)}}function sy(n,e){e==="class"?n.flags|=8:e==="style"&&(n.flags|=16)}function P2(n,e,t){let{attrs:i,inputs:o,hostDirectiveInputs:a}=n;if(i===null||!t&&o===null||t&&a===null||z1(n)){n.initialInputs??=[],n.initialInputs.push(null);return}let r=null,c=0;for(;c<i.length;){let s=i[c];if(s===0){c+=4;continue}else if(s===5){c+=2;continue}else if(typeof s=="number")break;if(!t&&o.hasOwnProperty(s)){let l=o[s];for(let d of l)if(d===e){r??=[],r.push(s,i[c+1]);break}}else if(t&&a.hasOwnProperty(s)){let l=a[s];for(let d=0;d<l.length;d+=2)if(l[d]===e){r??=[],r.push(l[d+1],i[c+1]);break}}c+=2}n.initialInputs??=[],n.initialInputs.push(r)}function fx(n,e,t,i,o){n.data[i]=o;let a=o.factory||(o.factory=Qo(o.type,!0)),r=new fc(a,eo(o),ha,null);n.blueprint[i]=r,t[i]=r,mx(n,e,i,Ag(n,t,o.hostVars,Ln),o)}function mx(n,e,t,i,o){let a=o.hostBindings;if(a){let r=n.hostBindingOpCodes;r===null&&(r=n.hostBindingOpCodes=[]);let c=~e.index;hx(r)!=c&&r.push(c),r.push(t,i,a)}}function hx(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function gx(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;eo(e)&&(t[""]=n)}}function yx(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function ly(n,e,t,i,o,a,r,c){let s=e[Le],l=s.consts,d=ki(l,r),p=xc(s,n,t,i,d);return a&&sx(s,e,p,ki(l,c),o),p.mergedAttrs=er(p.mergedAttrs,p.attrs),p.attrs!==null&&Dl(p,p.attrs,!1),p.mergedAttrs!==null&&Dl(p,p.mergedAttrs,!0),s.queries!==null&&s.queries.elementStart(s,p),p}function Q1(n,e){s_(n,e),Ip(e)&&n.queries.elementEnd(e)}function dy(n,e,t,i,o,a){let r=e.consts,c=ki(r,o),s=xc(e,n,t,i,c);if(s.mergedAttrs=er(s.mergedAttrs,s.attrs),a!=null){let l=ki(r,a);s.localNames=[];for(let d=0;d<l.length;d+=2)s.localNames.push(l[d],-1)}return s.attrs!==null&&Dl(s,s.attrs,!1),s.mergedAttrs!==null&&Dl(s,s.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,s),s}function vx(n,e,t){return n[e]=t}function Mx(n,e){return n[e]}function bi(n,e,t){if(t===Ln)return!1;let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}function Cx(n,e,t,i){let o=bi(n,e,t);return bi(n,e+1,i)||o}function fl(n,e,t){return function i(o){let a=Eo(n)?ci(n.index,e):e;K1(a,5);let r=e[Xt],c=z2(e,r,t,o),s=i.__ngNextListenerFn__;for(;s;)c=z2(e,r,s,o)&&c,s=s.__ngNextListenerFn__;return c}}function z2(n,e,t,i){let o=Ne(null);try{return Ft(ft.OutputStart,e,t),t(i)!==!1}catch(a){return ND(n,a),!1}finally{Ft(ft.OutputEnd,e,t),Ne(o)}}function uy(n,e,t,i,o,a,r,c){let s=Zs(n),l=!1,d=null;if(!i&&s&&(d=Dx(e,t,a,n.index)),d!==null){let p=d.__ngLastListenerFn__||d;p.__ngNextListenerFn__=r,d.__ngLastListenerFn__=r,l=!0}else{let p=ri(n,t),u=i?i(p):p;w_(t,u,a,c);let f=o.listen(u,a,c);if(!_x(a)){let g=i?C=>i(Xn(C[n.index])):n.index;py(g,e,t,a,c,f,!1)}}return l}function _x(n){return n.startsWith("animation")||n.startsWith("transition")}function Dx(n,e,t,i){let o=n.cleanup;if(o!=null)for(let a=0;a<o.length-1;a+=2){let r=o[a];if(r===t&&o[a+1]===i){let c=e[Ga],s=o[a+2];return c&&c.length>s?c[s]:null}typeof r=="string"&&(a+=2)}return null}function py(n,e,t,i,o,a,r){let c=e.firstCreatePass?jp(e):null,s=Rp(t),l=s.length;s.push(o,a),c&&c.push(i,n,l,(l+1)*(r?-1:1))}function O2(n,e,t,i,o,a){let r=e[t],c=e[Le],l=c.data[t].outputs[i],p=r[l].subscribe(a);py(n.index,c,e,o,a,p,!0)}var g1=Symbol("BINDING");function fy(n){return n.debugInfo?.className||n.type.name||null}var y1=class extends Ol{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=ia(e);return new gc(t,this.ngModule)}};function xx(n){return Object.keys(n).map(e=>{let[t,i,o]=n[e],a={propName:t,templateName:e,isSignal:(i&Rl.SignalBased)!==0};return o&&(a.transform=o),a})}function Ex(n){return Object.keys(n).map(e=>({propName:n[e],templateName:e}))}function Sx(n,e,t){let i=e instanceof Gn?e:e?.injector;return i&&n.getStandaloneInjector!==null&&(i=n.getStandaloneInjector(i)||i),i?new h1(t,i):t}function kx(n){let e=n.get(fa,null);if(e===null)throw new ot(407,!1);let t=n.get(cy,null),i=n.get(ta,null),o=n.get(cr,null,{optional:!0});return{rendererFactory:e,sanitizer:t,changeDetectionScheduler:i,ngReflect:!1,tracingService:o}}function Fx(n,e){let t=my(n);return kg(e,t,t==="svg"?bp:t==="math"?Gh:null)}function my(n){return(n.selectors[0][0]||"div").toLowerCase()}var gc=class extends zl{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=xx(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=Ex(this.componentDef.outputs),this.cachedOutputs}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=tD(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,o,a,r){Ft(ft.DynamicComponentStart);let c=Ne(null);try{let s=this.componentDef,l=Sx(s,o||this.ngModule,e),d=kx(l),p=d.tracingService;return p&&p.componentCreate?p.componentCreate(fy(s),()=>this.createComponentRef(d,l,t,i,a,r)):this.createComponentRef(d,l,t,i,a,r)}finally{Ne(c)}}createComponentRef(e,t,i,o,a,r){let c=this.componentDef,s=Ix(o,c,r,a),l=e.rendererFactory.createRenderer(null,c),d=o?xD(l,o,c.encapsulation,t):Fx(c,l),p=r?.some(U2)||a?.some(g=>typeof g!="function"&&g.bindings.some(U2)),u=U1(null,s,null,512|wg(c),null,null,e,l,t,null,Cg(d,t,!0));u[Jt]=d,nl(u);let f=null;try{let g=ly(Jt,u,2,"#host",()=>s.directiveRegistry,!0,0);bg(l,d,g),tr(d,u),qg(s,u,g),Dg(s,g,u),Q1(s,g),i!==void 0&&Tx(g,this.ngContentSelectors,i),f=ci(g.index,u),u[Xt]=f[Xt],Y1(s,u,null)}catch(g){throw f!==null&&s1(f),s1(u),g}finally{Ft(ft.DynamicComponentEnd),il()}return new xl(this.componentType,u,!!p)}};function Ix(n,e,t,i){let o=n?["ng-version","21.2.9"]:nD(e.selectors[0]),a=null,r=null,c=0;if(t)for(let d of t)c+=d[g1].requiredVars,d.create&&(d.targetIdx=0,(a??=[]).push(d)),d.update&&(d.targetIdx=0,(r??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let p=i[d];if(typeof p!="function")for(let u of p.bindings){c+=u[g1].requiredVars;let f=d+1;u.create&&(u.targetIdx=f,(a??=[]).push(u)),u.update&&(u.targetIdx=f,(r??=[]).push(u))}}let s=[e];if(i)for(let d of i){let p=typeof d=="function"?d:d.type,u=gp(p);s.push(u)}return O1(0,null,bx(a,r),1,c,s,null,null,null,[o],null)}function bx(n,e){return!n&&!e?null:t=>{if(t&1&&n)for(let i of n)i.create();if(t&2&&e)for(let i of e)i.update()}}function U2(n){let e=n[g1].kind;return e==="input"||e==="twoWay"}var xl=class extends ry{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t,i){super(),this._rootLView=t,this._hasInputBindings=i,this._tNode=Ys(t[Le],Jt),this.location=rr(this._tNode,t),this.instance=ci(this._tNode.index,t)[Xt],this.hostView=this.changeDetectorRef=new ir(t,void 0),this.componentType=e}setInput(e,t){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let o=this._rootLView,a=Z1(i,o[Le],o,e,t);this.previousInputValues.set(e,t);let r=ci(i.index,o);K1(r,1)}get injector(){return new ua(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function Tx(n,e,t){let i=n.projection=[];for(let o=0;o<e.length;o++){let a=t[o];i.push(a!=null&&a.length?Array.from(a):null)}}var Ec=(()=>{class n{static __NG_ELEMENT_ID__=Lx}return n})();function Lx(){let n=kn();return hy(n,Ze())}var v1=class n extends Ec{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return rr(this._hostTNode,this._hostLView)}get injector(){return new ua(this._hostTNode,this._hostLView)}get parentInjector(){let e=j1(this._hostTNode,this._hostLView);if(eg(e)){let t=gl(e,this._hostLView),i=hl(e),o=t[Le].data[i+8];return new ua(o,t)}else return new ua(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=H2(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Ht}createEmbeddedView(e,t,i){let o,a;typeof i=="number"?o=i:i!=null&&(o=i.index,a=i.injector);let r=_l(this._lContainer,e.ssrId),c=e.createEmbeddedViewImpl(t||{},a,r);return this.insertImpl(c,o,nr(this._hostTNode,r)),c}createComponent(e,t,i,o,a,r,c){let s=e&&!n_(e),l;if(s)l=t;else{let h=t||{};l=h.index,i=h.injector,o=h.projectableNodes,a=h.environmentInjector||h.ngModuleRef,r=h.directives,c=h.bindings}let d=s?e:new gc(ia(e)),p=i||this.parentInjector;if(!a&&d.ngModule==null){let m=(s?p:this.parentInjector).get(Gn,null);m&&(a=m)}let u=ia(d.componentType??{}),f=_l(this._lContainer,u?.id??null),g=f?.firstChild??null,C=d.create(p,o,g,a,r,c);return this.insertImpl(C.hostView,l,nr(this._hostTNode,f)),C}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let o=e._lView;if($h(o)){let c=this.indexOf(e);if(c!==-1)this.detach(c);else{let s=o[nn],l=new n(s,s[Sn],s[nn]);l.detach(l.indexOf(e))}}let a=this._adjustIndex(t),r=this._lContainer;return Dc(r,o,a,i),e.attachToViewContainerRef(),Cp(t1(r),a,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=H2(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=hc(this._lContainer,t);i&&(nc(t1(this._lContainer),t),jl(i[Le],i))}detach(e){let t=this._adjustIndex(e,-1),i=hc(this._lContainer,t);return i&&nc(t1(this._lContainer),t)!=null?new ir(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function H2(n){return n[ac]}function t1(n){return n[ac]||(n[ac]=[])}function hy(n,e){let t,i=e[n.index];return ai(i)?t=i:(t=ty(i,e,null,n),e[n.index]=t,H1(e,t)),Ax(t,e,n,i),new v1(t,n,e)}function wx(n,e){let t=n[jt],i=t.createComment(""),o=ri(e,n),a=t.parentNode(o);return Cl(t,a,i,t.nextSibling(o),!1),i}var Ax=Nx,Rx=()=>!1;function jx(n,e,t){return Rx(n,e,t)}function Nx(n,e,t,i){if(n[xo])return;let o;t.type&8?o=Xn(i):o=wx(e,t),n[xo]=o}var M1=class n{queryList;matches=null;constructor(e){this.queryList=e}clone(){return new n(this.queryList)}setDirty(){this.queryList.setDirty()}},C1=class n{queries;constructor(e=[]){this.queries=e}createEmbeddedView(e){let t=e.queries;if(t!==null){let i=e.contentQueries!==null?e.contentQueries[0]:t.length,o=[];for(let a=0;a<i;a++){let r=t.getByIndex(a),c=this.queries[r.indexInDeclarationView];o.push(c.clone())}return new n(o)}return null}insertView(e){this.dirtyQueriesWithMatches(e)}detachView(e){this.dirtyQueriesWithMatches(e)}finishViewCreation(e){this.dirtyQueriesWithMatches(e)}dirtyQueriesWithMatches(e){for(let t=0;t<this.queries.length;t++)tf(e,t).matches!==null&&this.queries[t].setDirty()}},_1=class{flags;read;predicate;constructor(e,t,i=null){this.flags=t,this.read=i,typeof e=="string"?this.predicate=Hx(e):this.predicate=e}},D1=class n{queries;constructor(e=[]){this.queries=e}elementStart(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(e,t)}elementEnd(e){for(let t=0;t<this.queries.length;t++)this.queries[t].elementEnd(e)}embeddedTView(e){let t=null;for(let i=0;i<this.length;i++){let o=t!==null?t.length:0,a=this.getByIndex(i).embeddedTView(e,o);a&&(a.indexInDeclarationView=i,t!==null?t.push(a):t=[a])}return t!==null?new n(t):null}template(e,t){for(let i=0;i<this.queries.length;i++)this.queries[i].template(e,t)}getByIndex(e){return this.queries[e]}get length(){return this.queries.length}track(e){this.queries.push(e)}},x1=class n{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(e,t=-1){this.metadata=e,this._declarationNodeIndex=t}elementStart(e,t){this.isApplyingToNode(t)&&this.matchTNode(e,t)}elementEnd(e){this._declarationNodeIndex===e.index&&(this._appliesToNextNode=!1)}template(e,t){this.elementStart(e,t)}embeddedTView(e,t){return this.isApplyingToNode(e)?(this.crossesNgTemplate=!0,this.addMatch(-e.index,t),new n(this.metadata)):null}isApplyingToNode(e){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let t=this._declarationNodeIndex,i=e.parent;for(;i!==null&&i.type&8&&i.index!==t;)i=i.parent;return t===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(e,t){let i=this.metadata.predicate;if(Array.isArray(i))for(let o=0;o<i.length;o++){let a=i[o];this.matchTNodeWithReadOption(e,t,Bx(t,a)),this.matchTNodeWithReadOption(e,t,ul(t,e,a,!1,!1))}else i===or?t.type&4&&this.matchTNodeWithReadOption(e,t,-1):this.matchTNodeWithReadOption(e,t,ul(t,e,i,!1,!1))}matchTNodeWithReadOption(e,t,i){if(i!==null){let o=this.metadata.read;if(o!==null)if(o===ko||o===Ec||o===or&&t.type&4)this.addMatch(t.index,-2);else{let a=ul(t,e,o,!1,!1);a!==null&&this.addMatch(t.index,a)}else this.addMatch(t.index,i)}}addMatch(e,t){this.matches===null?this.matches=[e,t]:this.matches.push(e,t)}};function Bx(n,e){let t=n.localNames;if(t!==null){for(let i=0;i<t.length;i+=2)if(t[i]===e)return t[i+1]}return null}function Px(n,e){return n.type&11?rr(n,e):n.type&4?J1(n,e):null}function zx(n,e,t,i){return t===-1?Px(e,n):t===-2?Ox(n,e,i):yl(n,n[Le],t,e)}function Ox(n,e,t){if(t===ko)return rr(e,n);if(t===or)return J1(e,n);if(t===Ec)return hy(e,n)}function gy(n,e,t,i){let o=e[Si].queries[i];if(o.matches===null){let a=n.data,r=t.matches,c=[];for(let s=0;r!==null&&s<r.length;s+=2){let l=r[s];if(l<0)c.push(null);else{let d=a[l];c.push(zx(e,d,r[s+1],t.metadata.read))}}o.matches=c}return o.matches}function E1(n,e,t,i){let o=n.queries.getByIndex(t),a=o.matches;if(a!==null){let r=gy(n,e,o,t);for(let c=0;c<a.length;c+=2){let s=a[c];if(s>0)i.push(r[c/2]);else{let l=a[c+1],d=e[-s];for(let p=Ht;p<d.length;p++){let u=d[p];u[_o]===u[nn]&&E1(u[Le],u,l,i)}if(d[ca]!==null){let p=d[ca];for(let u=0;u<p.length;u++){let f=p[u];E1(f[Le],f,l,i)}}}}}return i}function ef(n,e){return n[Si].queries[e].queryList}function Ux(n,e,t){let i=new vl((t&4)===4);return Yh(n,e,i,i.destroy),(e[Si]??=new C1).queries.push(new M1(i))-1}function yy(n,e,t){let i=ln();return i.firstCreatePass&&(Vx(i,new _1(n,e,t),-1),(e&2)===2&&(i.staticViewQueries=!0)),Ux(i,Ze(),e)}function Hx(n){return n.split(",").map(e=>e.trim())}function Vx(n,e,t){n.queries===null&&(n.queries=new D1),n.queries.track(new x1(e,t))}function tf(n,e){return n.queries.getByIndex(e)}function vy(n,e){let t=n[Le],i=tf(t,e);return i.crossesNgTemplate?E1(t,n,e,[]):gy(t,n,i,e)}function My(n,e,t){let i,o=Pu(()=>{i._dirtyCounter();let a=Gx(i,n);if(e&&a===void 0)throw new ot(-951,!1);return a});return i=o[xn],i._dirtyCounter=nt(0),i._flatValue=void 0,o}function Cy(n){return My(!0,!1,n)}function _y(n){return My(!0,!0,n)}function qx(n,e){let t=n[xn];t._lView=Ze(),t._queryIndex=e,t._queryList=ef(t._lView,e),t._queryList.onDirty(()=>t._dirtyCounter.update(i=>i+1))}function Gx(n,e){let t=n._lView,i=n._queryIndex;if(t===void 0||i===void 0||t[ze]&4)return e?void 0:yn;let o=ef(t,i),a=vy(t,i);return o.reset(a,dg),e?o.first:o._changesDetected||n._flatValue===void 0?n._flatValue=o.toArray():n._flatValue}var El=class{};var yc=class extends El{injector;componentFactoryResolver=new y1(this);instance=null;constructor(e){super();let t=new ea([...e.providers,{provide:El,useValue:this},{provide:Ol,useValue:this.componentFactoryResolver}],e.parent||oc(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function Dy(n,e,t=null){return new yc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var Wx=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=xp(!1,t.type),o=i.length>0?Dy([i],this._injector,""):null;this.cachedInjectors.set(t,o)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=$t({token:n,providedIn:"environment",factory:()=>new n(Dt(Gn))})}return n})();function we(n){return Il(()=>{let e=Yx(n),t=tn(zt({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===N1.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?o=>o.get(Wx).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||di.Emulated,styles:n.styles||yn,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&sr("NgStandalone"),Kx(t);let i=n.dependencies;return t.directiveDefs=V2(i,$x),t.pipeDefs=V2(i,Th),t.id=Jx(t),t})}function $x(n){return ia(n)||gp(n)}function Hl(n){return Il(()=>({type:n.type,bootstrap:n.bootstrap||yn,declarations:n.declarations||yn,imports:n.imports||yn,exports:n.exports||yn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function Xx(n,e){if(n==null)return Co;let t={};for(let i in n)if(n.hasOwnProperty(i)){let o=n[i],a,r,c,s;Array.isArray(o)?(c=o[0],a=o[1],r=o[2]??a,s=o[3]||null):(a=o,r=o,c=Rl.None,s=null),t[a]=[i,c,s],e[a]=r}return t}function Zx(n){if(n==null)return Co;let e={};for(let t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function Yx(n){let e={};return{type:n.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputConfig:n.inputs||Co,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||yn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:Xx(n.inputs,e),outputs:Zx(n.outputs),debugInfo:null}}function Kx(n){n.features?.forEach(e=>e(n))}function V2(n,e){return n?()=>{let t=typeof n=="function"?n():n,i=[];for(let o of t){let a=e(o);a!==null&&i.push(a)}return i}:null}function Jx(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let a of i.join("|"))e=Math.imul(31,e)+a.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function Qx(n){return Object.getPrototypeOf(n.prototype).constructor}function yt(n){let e=Qx(n.type),t=!0,i=[n];for(;e;){let o;if(eo(n))o=e.\u0275cmp||e.\u0275dir;else{if(e.\u0275cmp)throw new ot(903,!1);o=e.\u0275dir}if(o){if(t){i.push(o);let r=n;r.inputs=n1(n.inputs),r.declaredInputs=n1(n.declaredInputs),r.outputs=n1(n.outputs);let c=o.hostBindings;c&&o4(n,c);let s=o.viewQuery,l=o.contentQueries;if(s&&n4(n,s),l&&i4(n,l),e4(n,o),bh(n.outputs,o.outputs),eo(o)&&o.data.animation){let d=n.data;d.animation=(d.animation||[]).concat(o.data.animation)}}let a=o.features;if(a)for(let r=0;r<a.length;r++){let c=a[r];c&&c.ngInherit&&c(n),c===yt&&(t=!1)}}e=Object.getPrototypeOf(e)}t4(i)}function e4(n,e){for(let t in e.inputs){if(!e.inputs.hasOwnProperty(t)||n.inputs.hasOwnProperty(t))continue;let i=e.inputs[t];i!==void 0&&(n.inputs[t]=i,n.declaredInputs[t]=e.declaredInputs[t])}}function t4(n){let e=0,t=null;for(let i=n.length-1;i>=0;i--){let o=n[i];o.hostVars=e+=o.hostVars,o.hostAttrs=er(o.hostAttrs,t=er(t,o.hostAttrs))}}function n1(n){return n===Co?{}:n===yn?[]:n}function n4(n,e){let t=n.viewQuery;t?n.viewQuery=(i,o)=>{e(i,o),t(i,o)}:n.viewQuery=e}function i4(n,e){let t=n.contentQueries;t?n.contentQueries=(i,o,a)=>{e(i,o,a),t(i,o,a)}:n.contentQueries=e}function o4(n,e){let t=n.hostBindings;t?n.hostBindings=(i,o)=>{e(i,o),t(i,o)}:n.hostBindings=e}function a4(n,e,t,i,o,a,r,c){if(t.firstCreatePass){n.mergedAttrs=er(n.mergedAttrs,n.attrs);let d=n.tView=O1(2,n,o,a,r,t.directiveRegistry,t.pipeRegistry,null,t.schemas,t.consts,null);t.queries!==null&&(t.queries.template(t,n),d.queries=t.queries.embeddedTView(n))}c&&(n.flags|=c),Za(n,!1);let s=r4(t,e,n,i);al()&&W1(t,e,s,n),tr(s,e);let l=ty(s,e,s,n);e[i+Jt]=l,H1(e,l),jx(l,n,e)}function vc(n,e,t,i,o,a,r,c,s,l,d){let p=t+Jt,u;if(e.firstCreatePass){if(u=xc(e,p,4,r||null,c||null),l!=null){let f=ki(e.consts,l);u.localNames=[];for(let g=0;g<f.length;g+=2)u.localNames.push(f[g],-1)}}else u=e.data[p];return a4(u,n,e,t,i,o,a,s),l!=null&&Bl(n,u,d),u}var r4=c4;function c4(n,e,t,i){return sc(!0),e[jt].createComment("")}var nf=new rt("");function of(n){return!!n&&typeof n.then=="function"}function xy(n){return!!n&&typeof n.subscribe=="function"}var Ey=new rt("");var af=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=at(Ey,{optional:!0})??[];injector=at(Mo);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let o of this.appInits){let a=Ws(this.injector,o);if(of(a))t.push(a);else if(xy(a)){let r=new Promise((c,s)=>{a.subscribe({complete:c,error:s})});t.push(r)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(o=>{this.reject(o)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$t({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Sy=new rt("");function ky(){zu(()=>{let n="";throw new ot(600,n)})}function Fy(n){return n.isBoundToModule}var s4=10;var Vl=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=at(da);afterRenderManager=at(jg);zonelessEnabled=at(lc);rootEffectScheduler=at(cl);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new $i;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=at(Ka);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(Yu(t=>!t))}constructor(){at(cr,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:o=>{o&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=at(Gn);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){return this.bootstrapImpl(t,i)}bootstrapImpl(t,i,o=Mo.NULL){return this._injector.get(Wn).run(()=>{Ft(ft.BootstrapComponentStart);let r=t instanceof zl;if(!this._injector.get(af).done){let g="";throw new ot(405,g)}let s;r?s=t:s=this._injector.get(Ol).resolveComponentFactory(t),this.componentTypes.push(s.componentType);let l=Fy(s)?void 0:this._injector.get(El),d=i||s.selector,p=s.create(o,[],d,l),u=p.location.nativeElement,f=p.injector.get(nf,null);return f?.registerApplication(u),p.onDestroy(()=>{this.detachView(p.hostView),pc(this.components,p),f?.unregisterApplication(u)}),this._loadComponent(p),Ft(ft.BootstrapComponentEnd,p),p})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){Ft(ft.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(q1.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw Ft(ft.ChangeDetectionEnd),new ot(101,!1);let t=Ne(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,Ne(t),this.afterTick.next(),Ft(ft.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(fa,null,{optional:!0}));let t=0;for(;this.dirtyFlags!==0&&t++<s4;){Ft(ft.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{Ft(ft.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let t=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:o}of this.allViews){if(!i&&!rc(o))continue;let a=i&&!this.zonelessEnabled?0:1;Kg(o,a),t=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}t||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>rc(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;pc(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView);try{this.tick()}catch(o){this.internalErrorHandler(o)}this.components.push(t),this._injector.get(Sy,[]).forEach(o=>o(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>pc(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new ot(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$t({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function pc(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function lr(n,e,t,i){let o=Ze(),a=la();if(bi(o,a,e)){let r=ln(),c=ol();AD(c,o,n,e,t,i)}return lr}var S1=class{destroy(e){}updateValue(e,t){}swap(e,t){let i=Math.min(e,t),o=Math.max(e,t),a=this.detach(o);if(o-i>1){let r=this.detach(i);this.attach(i,a),this.attach(o,r)}else this.attach(i,a)}move(e,t){this.attach(t,this.detach(e))}};function i1(n,e,t,i,o){return n===t&&Object.is(e,i)?1:Object.is(o(n,e),o(t,i))?-1:0}function l4(n,e,t,i){let o,a,r=0,c=n.length-1,s=void 0;if(Array.isArray(e)){Ne(i);let l=e.length-1;for(Ne(null);r<=c&&r<=l;){let d=n.at(r),p=e[r],u=i1(r,d,r,p,t);if(u!==0){u<0&&n.updateValue(r,p),r++;continue}let f=n.at(c),g=e[l],C=i1(c,f,l,g,t);if(C!==0){C<0&&n.updateValue(c,g),c--,l--;continue}let h=t(r,d),m=t(c,f),_=t(r,p);if(Object.is(_,m)){let S=t(l,g);Object.is(S,h)?(n.swap(r,c),n.updateValue(c,g),l--,c--):n.move(c,r),n.updateValue(r,p),r++;continue}if(o??=new Sl,a??=G2(n,r,c,t),k1(n,o,r,_))n.updateValue(r,p),r++,c++;else if(a.has(_))o.set(h,n.detach(r)),c--;else{let S=n.create(r,e[r]);n.attach(r,S),r++,c++}}for(;r<=l;)q2(n,o,t,r,e[r]),r++}else if(e!=null){Ne(i);let l=e[Symbol.iterator]();Ne(null);let d=l.next();for(;!d.done&&r<=c;){let p=n.at(r),u=d.value,f=i1(r,p,r,u,t);if(f!==0)f<0&&n.updateValue(r,u),r++,d=l.next();else{o??=new Sl,a??=G2(n,r,c,t);let g=t(r,u);if(k1(n,o,r,g))n.updateValue(r,u),r++,c++,d=l.next();else if(!a.has(g))n.attach(r,n.create(r,u)),r++,c++,d=l.next();else{let C=t(r,p);o.set(C,n.detach(r)),c--}}}for(;!d.done;)q2(n,o,t,n.length,d.value),d=l.next()}for(;r<=c;)n.destroy(n.detach(c--));o?.forEach(l=>{n.destroy(l)})}function k1(n,e,t,i){return e!==void 0&&e.has(i)?(n.attach(t,e.get(i)),e.delete(i),!0):!1}function q2(n,e,t,i,o){if(k1(n,e,i,t(i,o)))n.updateValue(i,o);else{let a=n.create(i,o);n.attach(i,a)}}function G2(n,e,t,i){let o=new Set;for(let a=e;a<=t;a++)o.add(i(a,n.at(a)));return o}var Sl=class{kvMap=new Map;_vMap=void 0;has(e){return this.kvMap.has(e)}delete(e){if(!this.has(e))return!1;let t=this.kvMap.get(e);return this._vMap!==void 0&&this._vMap.has(t)?(this.kvMap.set(e,this._vMap.get(t)),this._vMap.delete(t)):this.kvMap.delete(e),!0}get(e){return this.kvMap.get(e)}set(e,t){if(this.kvMap.has(e)){let i=this.kvMap.get(e);this._vMap===void 0&&(this._vMap=new Map);let o=this._vMap;for(;o.has(i);)i=o.get(i);o.set(i,t)}else this.kvMap.set(e,t)}forEach(e){for(let[t,i]of this.kvMap)if(e(i,t),this._vMap!==void 0){let o=this._vMap;for(;o.has(i);)i=o.get(i),e(i,t)}}};function Ve(n,e,t,i,o,a,r,c){sr("NgControlFlow");let s=Ze(),l=ln(),d=ki(l.consts,a);return vc(s,l,n,e,t,i,o,d,256,r,c),rf}function rf(n,e,t,i,o,a,r,c){sr("NgControlFlow");let s=Ze(),l=ln(),d=ki(l.consts,a);return vc(s,l,n,e,t,i,o,d,512,r,c),rf}function qe(n,e){sr("NgControlFlow");let t=Ze(),i=la(),o=t[i]!==Ln?t[i]:-1,a=o!==-1?kl(t,Jt+o):void 0,r=0;if(bi(t,i,n)){let c=Ne(null);try{if(a!==void 0&&iy(a,r),n!==-1){let s=Jt+n,l=kl(t,s),d=T1(t[Le],s),p=ay(l,d,t),u=_c(t,d,e,{dehydratedView:p});Dc(l,u,r,nr(d,p))}}finally{Ne(c)}}else if(a!==void 0){let c=ny(a,r);c!==void 0&&(c[Xt]=e)}}var F1=class{lContainer;$implicit;$index;constructor(e,t,i){this.lContainer=e,this.$implicit=t,this.$index=i}get $count(){return this.lContainer.length-Ht}};function Sc(n,e){return e}var I1=class{hasEmptyBlock;trackByFn;liveCollection;constructor(e,t,i){this.hasEmptyBlock=e,this.trackByFn=t,this.liveCollection=i}};function Zt(n,e,t,i,o,a,r,c,s,l,d,p,u){sr("NgControlFlow");let f=Ze(),g=ln(),C=s!==void 0,h=Ze(),m=c?r.bind(h[Tn][Xt]):r,_=new I1(C,m);h[Jt+n]=_,vc(f,g,n+1,e,t,i,o,ki(g.consts,a),256),C&&vc(f,g,n+2,s,l,d,p,ki(g.consts,u),512)}var b1=class extends S1{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(e,t,i){super(),this.lContainer=e,this.hostLView=t,this.templateTNode=i}get length(){return this.lContainer.length-Ht}at(e){return this.getLView(e)[Xt].$implicit}attach(e,t){let i=t[oa];this.needsIndexUpdate||=e!==this.length,Dc(this.lContainer,t,e,nr(this.templateTNode,i)),d4(this.lContainer,e)}detach(e){return this.needsIndexUpdate||=e!==this.length-1,u4(this.lContainer,e),p4(this.lContainer,e)}create(e,t){let i=_l(this.lContainer,this.templateTNode.tView.ssrId);return _c(this.hostLView,this.templateTNode,new F1(this.lContainer,t,e),{dehydratedView:i})}destroy(e){jl(e[Le],e)}updateValue(e,t){this.getLView(e)[Xt].$implicit=t}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let e=0;e<this.length;e++)this.getLView(e)[Xt].$index=e}getLView(e){return f4(this.lContainer,e)}};function Yt(n){let e=Ne(null),t=Fi();try{let i=Ze(),o=i[Le],a=i[t],r=t+1,c=kl(i,r);if(a.liveCollection===void 0){let l=T1(o,r);a.liveCollection=new b1(c,i,l)}else a.liveCollection.reset();let s=a.liveCollection;if(l4(s,n,a.trackByFn,e),s.updateIndexes(),a.hasEmptyBlock){let l=la(),d=s.length===0;if(bi(i,l,d)){let p=t+2,u=kl(i,p);if(d){let f=T1(o,p),g=ay(u,f,i),C=_c(i,f,void 0,{dehydratedView:g});Dc(u,C,0,nr(f,g))}else o.firstUpdatePass&&ix(u),iy(u,0)}}}finally{Ne(e)}}function kl(n,e){return n[e]}function d4(n,e){if(n.length<=Ht)return;let t=Ht+e,i=n[t],o=i?i[Do]:void 0;if(i&&o&&o.detachedLeaveAnimationFns&&o.detachedLeaveAnimationFns.length>0){let a=i[Ki];lD(a,o),pa.delete(i[Ji]),o.detachedLeaveAnimationFns=void 0}}function u4(n,e){if(n.length<=Ht)return;let t=Ht+e,i=n[t],o=i?i[Do]:void 0;o&&o.leave&&o.leave.size>0&&(o.detachedLeaveAnimationFns=[])}function p4(n,e){return hc(n,e)}function f4(n,e){return ny(n,e)}function T1(n,e){return Ys(n,e)}function no(n,e,t){let i=Ze(),o=la();if(bi(i,o,e)){let a=ln(),r=ol();FD(r,i,n,e,i[jt],t)}return no}function L1(n,e,t,i,o){Z1(e,n,t,o?"class":"style",i)}function Y(n,e,t,i){let o=Ze(),a=o[Le],r=n+Jt,c=a.firstCreatePass?ly(r,o,2,e,wD,Qh(),t,i):a.data[r];if(Eo(c)){let s=o[oi].tracingService;if(s&&s.componentCreate){let l=a.data[c.directiveStart+c.componentOffset];return s.componentCreate(fy(l),()=>(W2(n,e,o,c,i),Y))}}return W2(n,e,o,c,i),Y}function W2(n,e,t,i,o){if(X1(i,t,n,e,Iy),Zs(i)){let a=t[Le];qg(a,t,i),Dg(a,i,t)}o!=null&&Bl(t,i)}function J(){let n=ln(),e=kn(),t=Pl(e);return n.firstCreatePass&&Q1(n,t),Pp(t)&&zp(),Np(),t.classesWithoutHost!=null&&d_(t)&&L1(n,t,Ze(),t.classesWithoutHost,!0),t.stylesWithoutHost!=null&&u_(t)&&L1(n,t,Ze(),t.stylesWithoutHost,!1),J}function be(n,e,t,i){return Y(n,e,t,i),J(),be}function Re(n,e,t,i){let o=Ze(),a=o[Le],r=n+Jt,c=a.firstCreatePass?dy(r,a,2,e,t,i):a.data[r];return X1(c,o,n,e,Iy),i!=null&&Bl(o,c),Re}function Oe(){let n=kn(),e=Pl(n);return Pp(e)&&zp(),Np(),Oe}function Ti(n,e,t,i){return Re(n,e,t,i),Oe(),Ti}var Iy=(n,e,t,i,o)=>(sc(!0),kg(e[jt],i,p2()));function cf(){let n=ln(),e=kn(),t=Pl(e);return n.firstCreatePass&&Q1(n,t),cf}function sf(n,e,t){let i=Ze(),o=i[Le],a=n+Jt,r=o.firstCreatePass?dy(a,o,8,"ng-container",e,t):o.data[a];return X1(r,i,n,"ng-container",m4),t!=null&&Bl(i,r),sf}function by(){let n=kn(),e=Pl(n);return cf}function mt(n,e,t){return sf(n,e,t),by(),mt}var m4=(n,e,t,i,o)=>(sc(!0),U_(e[jt],""));function ui(){return Ze()}function dr(n,e,t){let i=Ze(),o=la();if(bi(i,o,e)){let a=ln(),r=ol();Gg(r,i,n,e,i[jt],t)}return dr}var kc="en-US";var h4=kc;function Ty(n){typeof n=="string"&&(h4=n.toLowerCase().replace(/_/g,"-"))}function pi(n,e,t){let i=Ze(),o=ln(),a=kn();return g4(o,i,i[jt],a,n,e,t),pi}function Fc(n,e,t){let i=Ze(),o=ln(),a=kn();return(a.type&3||t)&&uy(a,o,i,t,i[jt],n,e,fl(a,i,e)),Fc}function g4(n,e,t,i,o,a,r){let c=!0,s=null;if((i.type&3||r)&&(s??=fl(i,e,a),uy(i,n,e,r,t,o,a,s)&&(c=!1)),c){let l=i.outputs?.[o],d=i.hostDirectiveOutputs?.[o];if(d&&d.length)for(let p=0;p<d.length;p+=2){let u=d[p],f=d[p+1];s??=fl(i,e,a),O2(i,e,u,f,o,s)}if(l&&l.length)for(let p of l)s??=fl(i,e,a),O2(i,e,p,o,o,s)}}function Mn(n=1){return u2(n)}function y4(n,e){let t=null,i=Y_(n);for(let o=0;o<e.length;o++){let a=e[o];if(a==="*"){t=o;continue}if(i===null?Lg(n,a,!0):Q_(i,a))return o}return t}function vt(n){let e=Ze()[Tn][Sn];if(!e.projection){let t=n?n.length:1,i=e.projection=Nh(t,null),o=i.slice(),a=e.child;for(;a!==null;){if(a.type!==128){let r=n?y4(a,n):0;r!==null&&(o[r]?o[r].projectionNext=a:i[r]=a,o[r]=a)}a=a.next}}}function ke(n,e=0,t,i,o,a){let r=Ze(),c=ln(),s=i?n+1:null;s!==null&&vc(r,c,s,i,o,a,null,t);let l=xc(c,Jt+n,16,null,t||null);l.projection===null&&(l.projection=e),Hp();let p=!r[oa]||Bp();r[Tn][Sn].projection[l.projection]===null&&s!==null?v4(r,c,s):p&&!wl(l)&&CD(c,r,l)}function v4(n,e,t){let i=Jt+t,o=e.data[i],a=n[i],r=_l(a,o.tView.ssrId),c=_c(n,o,void 0,{dehydratedView:r});Dc(a,c,0,nr(o,r))}function ql(n,e,t){return yy(n,e,t),ql}function lf(n){let e=Ze(),t=ln(),i=tl();cc(i+1);let o=tf(t,i);if(n.dirty&&Wh(e)===((o.metadata.flags&2)===2)){if(o.matches===null)n.reset([]);else{let a=vy(e,i);n.reset(a,dg),n.notifyOnChanges()}return!0}return!1}function df(){return ef(Ze(),tl())}function Gl(n,e,t,i){return qx(n,yy(e,t,i)),Gl}function uf(n=1){cc(tl()+n)}function sl(n,e){return n<<17|e<<2}function ma(n){return n>>17&32767}function M4(n){return(n&2)==2}function C4(n,e){return n&131071|e<<17}function w1(n){return n|2}function ar(n){return(n&131068)>>2}function o1(n,e){return n&-131069|e<<2}function _4(n){return(n&1)===1}function A1(n){return n|1}function D4(n,e,t,i,o,a){let r=a?e.classBindings:e.styleBindings,c=ma(r),s=ar(r);n[i]=t;let l=!1,d;if(Array.isArray(t)){let p=t;d=p[1],(d===null||Va(p,d)>0)&&(l=!0)}else d=t;if(o)if(s!==0){let u=ma(n[c+1]);n[i+1]=sl(u,c),u!==0&&(n[u+1]=o1(n[u+1],i)),n[c+1]=C4(n[c+1],i)}else n[i+1]=sl(c,0),c!==0&&(n[c+1]=o1(n[c+1],i)),c=i;else n[i+1]=sl(s,0),c===0?c=i:n[s+1]=o1(n[s+1],i),s=i;l&&(n[i+1]=w1(n[i+1])),$2(n,d,i,!0),$2(n,d,i,!1),x4(e,d,n,i,a),r=sl(c,s),a?e.classBindings=r:e.styleBindings=r}function x4(n,e,t,i,o){let a=o?n.residualClasses:n.residualStyles;a!=null&&typeof e=="string"&&Va(a,e)>=0&&(t[i+1]=A1(t[i+1]))}function $2(n,e,t,i){let o=n[t+1],a=e===null,r=i?ma(o):ar(o),c=!1;for(;r!==0&&(c===!1||a);){let s=n[r],l=n[r+1];E4(s,e)&&(c=!0,n[r+1]=i?A1(l):w1(l)),r=i?ma(l):ar(l)}c&&(n[t+1]=i?w1(o):A1(o))}function E4(n,e){return n===null||e==null||(Array.isArray(n)?n[1]:n)===e?!0:Array.isArray(n)&&typeof e=="string"?Va(n,e)>=0:!1}var li={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function S4(n){return n.substring(li.key,li.keyEnd)}function k4(n){return F4(n),Ly(n,wy(n,0,li.textEnd))}function Ly(n,e){let t=li.textEnd;return t===e?-1:(e=li.keyEnd=I4(n,li.key=e,t),wy(n,e,t))}function F4(n){li.key=0,li.keyEnd=0,li.value=0,li.valueEnd=0,li.textEnd=n.length}function wy(n,e,t){for(;e<t&&n.charCodeAt(e)<=32;)e++;return e}function I4(n,e,t){for(;e<t&&n.charCodeAt(e)>32;)e++;return e}function ur(n,e){return T4(n,e,null,!0),ur}function Ic(n){L4(B4,b4,n,!0)}function b4(n,e){for(let t=k4(e);t>=0;t=Ly(e,t))Vs(n,S4(e),!0)}function T4(n,e,t,i){let o=Ze(),a=ln(),r=Qs(2);if(a.firstUpdatePass&&Ry(a,n,r,i),e!==Ln&&bi(o,r,e)){let c=a.data[Fi()];jy(a,c,o,o[jt],n,o[r+1]=z4(e,t),i,r)}}function L4(n,e,t,i){let o=ln(),a=Qs(2);o.firstUpdatePass&&Ry(o,null,a,i);let r=Ze();if(t!==Ln&&bi(r,a,t)){let c=o.data[Fi()];if(Ny(c,i)&&!Ay(o,a)){let s=i?c.classesWithoutHost:c.stylesWithoutHost;s!==null&&(t=Bs(s,t||"")),L1(o,c,r,t,i)}else P4(o,c,r,r[jt],r[a+1],r[a+1]=N4(n,e,t),i,a)}}function Ay(n,e){return e>=n.expandoStartIndex}function Ry(n,e,t,i){let o=n.data;if(o[t+1]===null){let a=o[Fi()],r=Ay(n,t);Ny(a,i)&&e===null&&!r&&(e=!1),e=w4(o,a,e,i),D4(o,a,e,t,r,i)}}function w4(n,e,t,i){let o=c2(n),a=i?e.residualClasses:e.residualStyles;if(o===null)(i?e.classBindings:e.styleBindings)===0&&(t=a1(null,n,e,t,i),t=Mc(t,e.attrs,i),a=null);else{let r=e.directiveStylingLast;if(r===-1||n[r]!==o)if(t=a1(o,n,e,t,i),a===null){let s=A4(n,e,i);s!==void 0&&Array.isArray(s)&&(s=a1(null,n,e,s[1],i),s=Mc(s,e.attrs,i),R4(n,e,i,s))}else a=j4(n,e,i)}return a!==void 0&&(i?e.residualClasses=a:e.residualStyles=a),t}function A4(n,e,t){let i=t?e.classBindings:e.styleBindings;if(ar(i)!==0)return n[ma(i)]}function R4(n,e,t,i){let o=t?e.classBindings:e.styleBindings;n[ma(o)]=i}function j4(n,e,t){let i,o=e.directiveEnd;for(let a=1+e.directiveStylingLast;a<o;a++){let r=n[a].hostAttrs;i=Mc(i,r,t)}return Mc(i,e.attrs,t)}function a1(n,e,t,i,o){let a=null,r=t.directiveEnd,c=t.directiveStylingLast;for(c===-1?c=t.directiveStart:c++;c<r&&(a=e[c],i=Mc(i,a.hostAttrs,o),a!==n);)c++;return n!==null&&(t.directiveStylingLast=c),i}function Mc(n,e,t){let i=t?1:2,o=-1;if(e!==null)for(let a=0;a<e.length;a++){let r=e[a];typeof r=="number"?o=r:o===i&&(Array.isArray(n)||(n=n===void 0?[]:["",n]),Vs(n,r,t?!0:e[++a]))}return n===void 0?null:n}function N4(n,e,t){if(t==null||t==="")return yn;let i=[],o=Al(t);if(Array.isArray(o))for(let a=0;a<o.length;a++)n(i,o[a],!0);else if(o instanceof Set)for(let a of o)n(i,a,!0);else if(typeof o=="object")for(let a in o)o.hasOwnProperty(a)&&n(i,a,o[a]);else typeof o=="string"&&e(i,o);return i}function B4(n,e,t){let i=String(e);i!==""&&!i.includes(" ")&&Vs(n,i,t)}function P4(n,e,t,i,o,a,r,c){o===Ln&&(o=yn);let s=0,l=0,d=0<o.length?o[0]:null,p=0<a.length?a[0]:null;for(;d!==null||p!==null;){let u=s<o.length?o[s+1]:void 0,f=l<a.length?a[l+1]:void 0,g=null,C;d===p?(s+=2,l+=2,u!==f&&(g=p,C=f)):p===null||d!==null&&d<p?(s+=2,g=d):(l+=2,g=p,C=f),g!==null&&jy(n,e,t,i,g,C,r,c),d=s<o.length?o[s]:null,p=l<a.length?a[l]:null}}function jy(n,e,t,i,o,a,r,c){if(!(e.type&3))return;let s=n.data,l=s[c+1],d=_4(l)?X2(s,e,t,o,ar(l),r):void 0;if(!Fl(d)){Fl(a)||M4(l)&&(a=X2(s,null,t,o,c,r));let p=Tp(Fi(),t);DD(i,r,p,o,a)}}function X2(n,e,t,i,o,a){let r=e===null,c;for(;o>0;){let s=n[o],l=Array.isArray(s),d=l?s[1]:s,p=d===null,u=t[o+1];u===Ln&&(u=p?yn:void 0);let f=p?qs(u,i):d===i?u:void 0;if(l&&!Fl(f)&&(f=qs(s,i)),Fl(f)&&(c=f,r))return c;let g=n[o+1];o=r?ma(g):ar(g)}if(e!==null){let s=a?e.residualClasses:e.residualStyles;s!=null&&(c=qs(s,i))}return c}function Fl(n){return n!==void 0}function z4(n,e){return n==null||n===""||(typeof e=="string"?n=n+e:typeof n=="object"&&(n=Ns(Al(n)))),n}function Ny(n,e){return(n.flags&(e?8:16))!==0}function W(n,e=""){let t=Ze(),i=ln(),o=n+Jt,a=i.firstCreatePass?xc(i,o,1,e,null):i.data[o],r=O4(i,t,a,e);t[o]=r,al()&&W1(i,t,r,a),Za(a,!1)}var O4=(n,e,t,i)=>(sc(!0),z_(e[jt],i));function U4(n,e,t,i=""){return bi(n,la(),t)?e+Ha(t)+i:Ln}function H4(n,e,t,i,o,a=""){let r=n2(),c=Cx(n,r,t,o);return Qs(2),c?e+Ha(t)+i+Ha(o)+a:Ln}function it(n){return ht("",n),it}function ht(n,e,t){let i=Ze(),o=U4(i,n,e,t);return o!==Ln&&By(i,Fi(),o),ht}function Wl(n,e,t,i,o){let a=Ze(),r=H4(a,n,e,t,i,o);return r!==Ln&&By(a,Fi(),r),Wl}function By(n,e,t){let i=Tp(e,n);O_(n[jt],i,t)}function pf(n,e){let t=t2()+n,i=Ze();return i[t]===Ln?vx(i,t,e()):Mx(i,t)}var Py=(()=>{class n{applicationErrorHandler=at(da);appRef=at(Vl);taskService=at(Ka);ngZone=at(Wn);zonelessEnabled=at(lc);tracing=at(cr,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new En;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Qr):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(at(Yp,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let t=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(t);return}this.switchToMicrotaskScheduler(),this.taskService.remove(t)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let t=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})})}notify(t){if(!this.zonelessEnabled&&t===5)return;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?y2:Wp;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Qr+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(t),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$t({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function zy(){return[{provide:ta,useExisting:Py},{provide:Wn,useClass:ec},{provide:lc,useValue:!0}]}function V4(){return typeof $localize<"u"&&$localize.locale||kc}var ff=new rt("",{factory:()=>at(ff,{optional:!0,skipSelf:!0})||V4()});var Hy=Symbol("InputSignalNode#UNSET"),J4=tn(zt({},_s),{transformFn:void 0,applyValueToInputSignal(n,e){Wr(n,e)}});function Vy(n,e){let t=Object.create(J4);t.value=n,t.transformFn=e?.transform;function i(){if(Vr(t),t.value===Hy){let o=null;throw new ot(-950,o)}return t.value}return i[xn]=t,i}function Oy(n,e){return Vy(n,e)}function Q4(n){return Vy(Hy,n)}var pr=(Oy.required=Q4,Oy);function Uy(n,e){return Cy(e)}function eE(n,e){return _y(e)}var qy=(Uy.required=eE,Uy);var mf=new rt(""),tE=new rt("");function bc(n){return!n.moduleRef}function nE(n){let e=bc(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Wn);return t.run(()=>{bc(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(da),o;if(t.runOutsideAngular(()=>{o=t.onError.subscribe({next:i})}),bc(n)){let a=()=>e.destroy(),r=n.platformInjector.get(mf);r.add(a),e.onDestroy(()=>{o.unsubscribe(),r.delete(a)})}else{let a=()=>n.moduleRef.destroy(),r=n.platformInjector.get(mf);r.add(a),n.moduleRef.onDestroy(()=>{pc(n.allPlatformModules,n.moduleRef),o.unsubscribe(),r.delete(a)})}return oE(i,t,()=>{let a=e.get(Ka),r=a.add(),c=e.get(af);return c.runInitializers(),c.donePromise.then(()=>{let s=e.get(ff,kc);if(Ty(s||kc),!e.get(tE,!0))return bc(n)?e.get(Vl):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(bc(n)){let d=e.get(Vl);return n.rootComponent!==void 0&&d.bootstrap(n.rootComponent),d}else return iE?.(n.moduleRef,n.allPlatformModules),n.moduleRef}).finally(()=>{a.remove(r)})})})}var iE;function oE(n,e,t){try{let i=t();return of(i)?i.catch(o=>{throw e.runOutsideAngular(()=>n(o)),o}):i}catch(i){throw e.runOutsideAngular(()=>n(i)),i}}var $l=null;function aE(n=[],e){return Mo.create({name:e,providers:[{provide:ic,useValue:"platform"},{provide:mf,useValue:new Set([()=>$l=null])},...n]})}function rE(n=[]){if($l)return $l;let e=aE(n);return $l=e,ky(),cE(e),e}function cE(n){let e=n.get(Tl,null);Ws(n,()=>{e?.forEach(t=>t())})}var sE=1e4;var gj=sE-1e3;function Gy(n){let{rootComponent:e,appProviders:t,platformProviders:i,platformRef:o}=n;Ft(ft.BootstrapApplicationStart);try{let a=o?.injector??rE(i),r=[zy(),M2,...t||[]],c=new yc({providers:r,parent:a,debugName:"",runEnvironmentInitializers:!1});return nE({r3Injector:c.injector,platformInjector:a,rootComponent:e})}catch(a){return Promise.reject(a)}finally{Ft(ft.BootstrapApplicationEnd)}}var Wy=null;function Lc(){return Wy}function hf(n){Wy??=n}var Tc=class{};var fr=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=Hl({type:n});static \u0275inj=tc({})}return n})();function gf(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[o,a]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(o.trim()===e)return decodeURIComponent(a)}return null}var wc=class{};var $y="browser";var Ac=class{_doc;constructor(e){this._doc=e}manager},Xl=(()=>{class n extends Ac{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,o,a){return t.addEventListener(i,o,a),()=>this.removeEventListener(t,i,o,a)}removeEventListener(t,i,o,a){return t.removeEventListener(i,o,a)}static \u0275fac=function(i){return new(i||n)(Dt(vn))};static \u0275prov=$t({token:n,factory:n.\u0275fac})}return n})(),Kl=new rt(""),Cf=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this});let o=t.filter(r=>!(r instanceof Xl));this._plugins=o.slice().reverse();let a=t.find(r=>r instanceof Xl);a&&this._plugins.push(a)}addEventListener(t,i,o,a){return this._findPluginFor(i).addEventListener(t,i,o,a)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(a=>a.supports(t)),!i)throw new ot(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(Dt(Kl),Dt(Wn))};static \u0275prov=$t({token:n,factory:n.\u0275fac})}return n})(),yf="ng-app-id";function Xy(n){for(let e of n)e.remove()}function Zy(n,e){let t=e.createElement("style");return t.textContent=n,t}function dE(n,e,t,i){let o=n.head?.querySelectorAll(`style[${yf}="${e}"],link[${yf}="${e}"]`);if(o)for(let a of o)a.removeAttribute(yf),a instanceof HTMLLinkElement?i.set(a.href.slice(a.href.lastIndexOf("/")+1),{usage:0,elements:[a]}):a.textContent&&t.set(a.textContent,{usage:0,elements:[a]})}function Mf(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var _f=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(t,i,o,a={}){this.doc=t,this.appId=i,this.nonce=o,dE(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let o of t)this.addUsage(o,this.inline,Zy);i?.forEach(o=>this.addUsage(o,this.external,Mf))}removeStyles(t,i){for(let o of t)this.removeUsage(o,this.inline);i?.forEach(o=>this.removeUsage(o,this.external))}addUsage(t,i,o){let a=i.get(t);a?a.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(r=>this.addElement(r,o(t,this.doc)))})}removeUsage(t,i){let o=i.get(t);o&&(o.usage--,o.usage<=0&&(Xy(o.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Xy(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:o}]of this.inline)o.push(this.addElement(t,Zy(i,this.doc)));for(let[i,{elements:o}]of this.external)o.push(this.addElement(t,Mf(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(Dt(vn),Dt(bl),Dt(Ll,8),Dt(Cc))};static \u0275prov=$t({token:n,factory:n.\u0275fac})}return n})(),vf={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Df=/%COMP%/g;var Ky="%COMP%",uE=`_nghost-${Ky}`,pE=`_ngcontent-${Ky}`,fE=!0,mE=new rt("",{factory:()=>fE});function hE(n){return pE.replace(Df,n)}function gE(n){return uE.replace(Df,n)}function Jy(n,e){return e.map(t=>t.replace(Df,n))}var xf=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(t,i,o,a,r,c,s=null,l=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=o,this.removeStylesOnCompDestroy=a,this.doc=r,this.ngZone=c,this.nonce=s,this.tracingService=l,this.defaultRenderer=new Rc(t,r,c,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;let o=this.getOrCreateRenderer(t,i);return o instanceof Yl?o.applyToHost(t):o instanceof jc&&o.applyStyles(),o}getOrCreateRenderer(t,i){let o=this.rendererByCompId,a=o.get(i.id);if(!a){let r=this.doc,c=this.ngZone,s=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,p=this.tracingService;switch(i.encapsulation){case di.Emulated:a=new Yl(s,l,i,this.appId,d,r,c,p);break;case di.ShadowDom:return new Zl(s,t,i,r,c,this.nonce,p,l);case di.ExperimentalIsolatedShadowDom:return new Zl(s,t,i,r,c,this.nonce,p);default:a=new jc(s,l,i,d,r,c,p);break}o.set(i.id,a)}return a}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(Dt(Cf),Dt(_f),Dt(bl),Dt(mE),Dt(vn),Dt(Wn),Dt(Ll),Dt(cr,8))};static \u0275prov=$t({token:n,factory:n.\u0275fac})}return n})(),Rc=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,o){this.eventManager=e,this.doc=t,this.ngZone=i,this.tracingService=o}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(vf[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Yy(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(Yy(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new ot(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,o){if(o){t=o+":"+t;let a=vf[o];a?e.setAttributeNS(a,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let o=vf[i];o?e.removeAttributeNS(o,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,o){o&(to.DashCase|to.Important)?e.style.setProperty(t,i,o&to.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&to.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,o){if(typeof e=="string"&&(e=Lc().getGlobalEventTarget(this.doc,e),!e))throw new ot(5102,!1);let a=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(a=this.tracingService.wrapEventListener(e,t,a)),this.eventManager.addEventListener(e,t,a,o)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;e(t)===!1&&t.preventDefault()}}};function Yy(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Zl=class extends Rc{hostEl;sharedStylesHost;shadowRoot;constructor(e,t,i,o,a,r,c,s){super(e,o,a,c),this.hostEl=t,this.sharedStylesHost=s,this.shadowRoot=t.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=i.styles;l=Jy(i.id,l);for(let p of l){let u=document.createElement("style");r&&u.setAttribute("nonce",r),u.textContent=p,this.shadowRoot.appendChild(u)}let d=i.getExternalStyles?.();if(d)for(let p of d){let u=Mf(p,o);r&&u.setAttribute("nonce",r),this.shadowRoot.appendChild(u)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},jc=class extends Rc{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,o,a,r,c,s){super(e,a,r,c),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=o;let l=i.styles;this.styles=s?Jy(s,l):l,this.styleUrls=i.getExternalStyles?.(s)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&pa.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Yl=class extends jc{contentAttr;hostAttr;constructor(e,t,i,o,a,r,c,s){let l=o+"-"+i.id;super(e,t,i,a,r,c,s,l),this.contentAttr=hE(l),this.hostAttr=gE(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}};var Jl=class n extends Tc{supportsDOMEvents=!0;static makeCurrent(){hf(new n)}onAndCancel(e,t,i,o){return e.addEventListener(t,i,o),()=>{e.removeEventListener(t,i,o)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=yE();return t==null?null:vE(t)}resetBaseElement(){Nc=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return gf(document.cookie,e)}},Nc=null;function yE(){return Nc=Nc||document.head.querySelector("base"),Nc?Nc.getAttribute("href"):null}function vE(n){return new URL(n,document.baseURI).pathname}var ME=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=$t({token:n,factory:n.\u0275fac})}return n})(),Qy=["alt","control","meta","shift"],CE={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},_E={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},ev=(()=>{class n extends Ac{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,o,a){let r=n.parseEventName(i),c=n.eventCallback(r.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Lc().onAndCancel(t,r.domEventName,c,a))}static parseEventName(t){let i=t.toLowerCase().split("."),o=i.shift();if(i.length===0||!(o==="keydown"||o==="keyup"))return null;let a=n._normalizeKey(i.pop()),r="",c=i.indexOf("code");if(c>-1&&(i.splice(c,1),r="code."),Qy.forEach(l=>{let d=i.indexOf(l);d>-1&&(i.splice(d,1),r+=l+".")}),r+=a,i.length!=0||a.length===0)return null;let s={};return s.domEventName=o,s.fullKey=r,s}static matchEventFullKeyCode(t,i){let o=CE[t.key]||t.key,a="";return i.indexOf("code.")>-1&&(o=t.code,a="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Qy.forEach(r=>{if(r!==o){let c=_E[r];c(t)&&(a+=r+".")}}),a+=o,a===i)}static eventCallback(t,i,o){return a=>{n.matchEventFullKeyCode(a,t)&&o.runGuarded(()=>i(a))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(Dt(vn))};static \u0275prov=$t({token:n,factory:n.\u0275fac})}return n})();async function Ef(n,e,t){let i=zt({rootComponent:n},DE(e,t));return Gy(i)}function DE(n,e){return{platformRef:e?.platformRef,appProviders:[...FE,...n?.providers??[]],platformProviders:kE}}function xE(){Jl.makeCurrent()}function EE(){return new Yi}function SE(){return B1(document),document}var kE=[{provide:Cc,useValue:$y},{provide:Tl,useValue:xE,multi:!0},{provide:vn,useFactory:SE}];var FE=[{provide:ic,useValue:"root"},{provide:Yi,useFactory:EE},{provide:Kl,useClass:Xl,multi:!0},{provide:Kl,useClass:ev,multi:!0},xf,_f,Cf,{provide:fa,useExisting:xf},{provide:wc,useClass:ME},[]];var IE=["contentRef"],bE=["lucideIcon",""],It=[[["title"]],"*"],bt=["title","*"];function TE(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var LE=["lucideArrowRight",""];function wE(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var AE=["lucideBookOpen",""];function RE(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var jE=["lucideBook",""];function NE(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var BE=["lucideBriefcase",""];function PE(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var zE=["lucideCamera",""];function OE(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var UE=["lucideCheck",""];function HE(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var VE=["lucideChevronDown",""];function qE(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var GE=["lucideCircleQuestionMark",""];function WE(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var $E=["lucideCreditCard",""];function XE(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var ZE=["lucideDownload",""];function YE(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var KE=["lucideFileText",""];function JE(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var QE=["lucideInfinity",""];function e5(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var t5=["lucideLightbulb",""];function n5(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var i5=["lucideMail",""];function o5(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var a5=["lucideMenu",""];function r5(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var c5=["lucideQuote",""];function s5(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var l5=["lucideShare2",""];function d5(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var u5=["lucideShieldCheck",""];function p5(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var f5=["lucideShoppingCart",""];function m5(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var h5=["lucideSmartphone",""];function g5(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var y5=["lucideStar",""];function v5(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var M5=["lucideTarget",""];function C5(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var _5=["lucideTicket",""];function D5(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var x5=["lucideTrendingUp",""];function E5(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var S5=["lucideUsers",""];function k5(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var F5=["lucideX",""];function I5(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var b5=["lucideZap",""];function T5(n,e){n&1&&(Re(0,"title"),W(1),Oe()),n&2&&(ee(),it(e))}var L5={color:"currentColor",size:24,strokeWidth:2,absoluteStrokeWidth:!1},w5=new rt("Lucide icon config",{factory:()=>L5});function tv(n,e){if(typeof n=="string"){let t=parseInt(n,10);return isNaN(t)?e:t}return n??e}var wt=(()=>{class n{iconConfig=at(w5);elRef=at(ko);renderer=at(Ul);contentRef=qy.required("contentRef");title=pr();size=pr(this.iconConfig.size,{transform:t=>tv(t,this.iconConfig.size)});color=pr(this.iconConfig.color,{transform:t=>t??this.iconConfig.color});strokeWidth=pr(this.iconConfig.strokeWidth,{transform:t=>tv(t,this.iconConfig.strokeWidth)});absoluteStrokeWidth=pr(this.iconConfig.absoluteStrokeWidth,{transform:t=>t??this.iconConfig.absoluteStrokeWidth});constructor(){Kp(t=>{let i=this.icon();if(i){let o=this.absoluteStrokeWidth(),{name:a,node:r,aliases:c=[]}=i,s=[a,...c].map(u=>`lucide-${u}`);for(let u of s)this.renderer.addClass(this.elRef.nativeElement,u);let d=this.contentRef().nativeElement,p=r.map(([u,f])=>{let g=this.renderer.createElement(u,"http://www.w3.org/2000/svg");return o&&this.renderer.setAttribute(g,"vector-effect","non-scaling-stroke"),Object.entries(f).forEach(([C,h])=>this.renderer.setAttribute(g,C,typeof h=="number"?h.toString(10):h)),this.renderer.insertBefore(this.elRef.nativeElement,g,d),g});t(()=>{p.forEach(u=>this.renderer.removeChild(this.elRef.nativeElement,u));for(let u of s)this.renderer.removeClass(this.elRef.nativeElement,u)})}})}static \u0275fac=function(i){return new(i||n)};static \u0275cmp=we({type:n,selectors:[["svg","lucideIcon",""]],viewQuery:function(i,o){i&1&&Gl(o.contentRef,IE,5),i&2&&uf()},hostAttrs:["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"lucide"],hostVars:5,hostBindings:function(i,o){i&2&&lr("width",o.size().toString(10))("height",o.size().toString(10))("stroke",o.color())("stroke-width",o.strokeWidth().toString(10))("aria-hidden",!o.title())},inputs:{title:[1,"title"],size:[1,"size"],color:[1,"color"],strokeWidth:[1,"strokeWidth"],absoluteStrokeWidth:[1,"absoluteStrokeWidth"]},attrs:bE,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,TE,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2})}return n})();var Ql=(()=>{class n extends wt{static icon={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideArrowRight",""]],features:[yt],attrs:LE,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,wE,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var mr=(()=>{class n extends wt{static icon={name:"book-open",size:24,node:[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideBookOpen",""]],features:[yt],attrs:AE,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,RE,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var nv=(()=>{class n extends wt{static icon={name:"book",size:24,node:[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideBook",""]],features:[yt],attrs:jE,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,NE,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var iv=(()=>{class n extends wt{static icon={name:"briefcase",size:24,node:[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideBriefcase",""]],features:[yt],attrs:BE,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,PE,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var ov=(()=>{class n extends wt{static icon={name:"camera",size:24,node:[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideCamera",""]],features:[yt],attrs:zE,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,OE,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var ed=(()=>{class n extends wt{static icon={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideCheck",""]],features:[yt],attrs:UE,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,HE,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var td=(()=>{class n extends wt{static icon={name:"chevron-down",size:24,node:[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideChevronDown",""]],features:[yt],attrs:VE,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,qE,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var Bc=(()=>{class n extends wt{static icon={name:"circle-question-mark",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],aliases:["help-circle","circle-help"]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideCircleQuestionMark",""],["svg","lucideHelpCircle",""],["svg","lucideCircleHelp",""]],features:[yt],attrs:GE,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,WE,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})(),av=Bc;var nd=(()=>{class n extends wt{static icon={name:"credit-card",size:24,node:[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideCreditCard",""]],features:[yt],attrs:$E,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,XE,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var id=(()=>{class n extends wt{static icon={name:"download",size:24,node:[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideDownload",""]],features:[yt],attrs:ZE,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,YE,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var od=(()=>{class n extends wt{static icon={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideFileText",""]],features:[yt],attrs:KE,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,JE,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var ad=(()=>{class n extends wt{static icon={name:"infinity",size:24,node:[["path",{d:"M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8",key:"18ogeb"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideInfinity",""]],features:[yt],attrs:QE,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,e5,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var rd=(()=>{class n extends wt{static icon={name:"lightbulb",size:24,node:[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideLightbulb",""]],features:[yt],attrs:t5,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,n5,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var rv=(()=>{class n extends wt{static icon={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideMail",""]],features:[yt],attrs:i5,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,o5,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var cd=(()=>{class n extends wt{static icon={name:"menu",size:24,node:[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideMenu",""]],features:[yt],attrs:a5,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,r5,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var sd=(()=>{class n extends wt{static icon={name:"quote",size:24,node:[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideQuote",""]],features:[yt],attrs:c5,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,s5,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var cv=(()=>{class n extends wt{static icon={name:"share-2",size:24,node:[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideShare2",""]],features:[yt],attrs:l5,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,d5,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var ld=(()=>{class n extends wt{static icon={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideShieldCheck",""]],features:[yt],attrs:u5,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,p5,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var dd=(()=>{class n extends wt{static icon={name:"shopping-cart",size:24,node:[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideShoppingCart",""]],features:[yt],attrs:f5,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,m5,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var ud=(()=>{class n extends wt{static icon={name:"smartphone",size:24,node:[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideSmartphone",""]],features:[yt],attrs:h5,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,g5,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var pd=(()=>{class n extends wt{static icon={name:"star",size:24,node:[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideStar",""]],features:[yt],attrs:y5,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,v5,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var fd=(()=>{class n extends wt{static icon={name:"target",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideTarget",""]],features:[yt],attrs:M5,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,C5,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var md=(()=>{class n extends wt{static icon={name:"ticket",size:24,node:[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideTicket",""]],features:[yt],attrs:_5,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,D5,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var hd=(()=>{class n extends wt{static icon={name:"trending-up",size:24,node:[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideTrendingUp",""]],features:[yt],attrs:x5,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,E5,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var gd=(()=>{class n extends wt{static icon={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideUsers",""]],features:[yt],attrs:S5,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,k5,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var yd=(()=>{class n extends wt{static icon={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideX",""]],features:[yt],attrs:F5,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,I5,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();var vd=(()=>{class n extends wt{static icon={name:"zap",size:24,node:[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]};icon=nt(n.icon);static \u0275fac=(()=>{let t;return function(o){return(t||(t=xt(n)))(o||n)}})();static \u0275cmp=we({type:n,selectors:[["svg","lucideZap",""]],features:[yt],attrs:b5,ngContentSelectors:bt,decls:5,vars:1,consts:[["contentRef",""]],template:function(i,o){if(i&1&&(vt(It),Ve(0,T5,2,1,"title"),ke(1),mt(2,null,0),ke(4,1)),i&2){let a;qe((a=o.title())?0:-1,a)}},encapsulation:2,changeDetection:0})}return n})();function A5(n){return!!n&&typeof n=="object"&&"name"in n&&typeof n.name=="string"&&"node"in n&&Array.isArray(n.node)}function R5(n){return n instanceof R1&&"icon"in n&&A5(n.icon)}var j5=new rt("Lucide icons",{factory:()=>({})});function sv(...n){return{provide:j5,useValue:n.reduce((e,t)=>{let i=R5(t)?t.icon:t;e[i.name]=i;for(let o of i.aliases??[])e[o]=i;return e},{})}}var lv={providers:[Zp(),sv(dd,cd,yd,ed,pd,id,Ql,vd,ld,sd,nd,av,rv,td,fd,rd,hd,gd,mr,ad,nv,od,ud,md,cv,ov,iv,Bc)]};var Qt={checkoutUrl:"https://pay.hotmart.com/SEU_CODIGO_AQUI",email:"contato@dotabuleiroaomercado.com.br",social:{facebook:"https://facebook.com/dotabuleiroaomercado",instagram:"https://instagram.com/dotabuleiroaomercado",linkedin:"https://linkedin.com/company/dotabuleiroaomercado"},product:{name:"Do Tabuleiro ao Mercado - E-book",price:97,oldPrice:197,currency:"BRL",id:"ebook-tabuleiro"},analytics:{enabled:!1,measurementId:"G-XXXXXXXXXX"}};var dv=(n,e)=>e.href;function N5(n,e){if(n&1){let t=ui();Y(0,"a",15),pi("click",function(o){let a=Zn(t).$implicit,r=Mn();return Yn(r.handleNavClick(o,a.href))}),W(1),J()}if(n&2){let t=e.$implicit;no("href",t.href,Kn),ee(),ht(" ",t.label," ")}}function B5(n,e){n&1&&(tt(),be(0,"svg",12))}function P5(n,e){n&1&&(tt(),be(0,"svg",13))}function z5(n,e){if(n&1){let t=ui();Y(0,"a",17),pi("click",function(o){let a=Zn(t).$implicit,r=Mn(2);return Yn(r.handleNavClick(o,a.href))}),W(1),J()}if(n&2){let t=e.$implicit;no("href",t.href,Kn),ee(),ht(" ",t.label," ")}}function O5(n,e){if(n&1&&(Y(0,"nav",14),Zt(1,z5,2,2,"a",16,dv),J()),n&2){let t=Mn();ee(),Yt(t.menuItems)}}var Md=class n{constructor(e){this.document=e}mobileMenuOpen=nt(!1);menuItems=[{label:"Depoimentos",href:"#depoimentos"},{label:"Benef\xEDcios",href:"#beneficios"},{label:"Conte\xFAdo",href:"#preview"},{label:"FAQ",href:"#faq"}];toggleMobileMenu(){this.mobileMenuOpen.update(e=>!e)}handleNavClick(e,t){e.preventDefault(),this.mobileMenuOpen.set(!1);let i=this.document.querySelector(t);if(i){let a=i.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:a,behavior:"smooth"})}}handleCTA(){window.open(Qt.checkoutUrl,"_blank","noopener,noreferrer")}static \u0275fac=function(t){return new(t||n)(ha(vn))};static \u0275cmp=we({type:n,selectors:[["app-header"]],decls:22,vars:3,consts:[[1,"fixed","top-4","z-50","w-full"],[1,"flex","justify-center","px-4"],[1,"container","max-w-7xl","bg-white/90","backdrop-blur","shadow-md","rounded-4xl"],[1,"flex","items-center","justify-between","px-6","py-3"],["href","#hero",1,"flex","items-center","gap-3"],["src","/logo.svg","alt","Logo Do Tabuleiro ao Mercado","draggable","false",1,"h-13","w-auto"],[1,"hidden","sm:block","text-sm","font-bold","text-gray-900","leading-tight"],[1,"hidden","lg:flex","items-center","gap-8"],[1,"text-lg","text-gray-700","font-medium","hover:text-[#FF6B35]","transition-colors",3,"href"],["href","#comprar",1,"hidden","lg:inline-flex","items-center","justify-center","h-10","px-5","rounded-lg","cursor-pointer","font-semibold","transition-all","duration-300","bg-linear-to-r","from-[#FF6B35]","to-[#FDB813]","hover:from-[#FF8555]","hover:to-[#FDCA33]","text-white","shadow-lg","hover:shadow-xl","hover:scale-105","text-sm","gap-2"],["lucideShoppingCart","",1,"w-4","h-4"],[1,"lg:hidden","p-2","rounded-lg","hover:bg-gray-100","transition-colors",3,"click"],["lucideX","",1,"w-5","h-5"],["lucideMenu","",1,"w-5","h-5"],[1,"border-t","border-gray-100","lg:hidden"],[1,"text-lg","text-gray-700","font-medium","hover:text-[#FF6B35]","transition-colors",3,"click","href"],[1,"block","px-6","py-3","text-center","text-sm","text-gray-700","hover:bg-gray-50","font-medium","transition-colors",3,"href"],[1,"block","px-6","py-3","text-center","text-sm","text-gray-700","hover:bg-gray-50","font-medium","transition-colors",3,"click","href"]],template:function(t,i){t&1&&(Y(0,"header",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),be(5,"img",5),Y(6,"span",6),W(7," Do"),be(8,"br"),W(9," Tabuleiro"),be(10,"br"),W(11," Ao Mercado "),J()(),Y(12,"nav",7),Zt(13,N5,2,2,"a",8,dv),J(),Y(15,"a",9),tt(),be(16,"svg",10),W(17," Comprar Agora "),J(),Pt(),Y(18,"button",11),pi("click",function(){return i.toggleMobileMenu()}),Ve(19,B5,1,0,":svg:svg",12)(20,P5,1,0,":svg:svg",13),J()(),Ve(21,O5,3,0,"nav",14),J()()()),t&2&&(ee(13),Yt(i.menuItems),ee(5),lr("aria-expanded",i.mobileMenuOpen()),ee(),qe(i.mobileMenuOpen()?19:20),ee(2),qe(i.mobileMenuOpen()?21:-1))},dependencies:[cd,yd,dd],encapsulation:2})};var Tv=0,am=1,Lv=2;var as=1,C0=2,Br=3,lo=0,Fn=1,zi=2,Oi=0,_a=1,rm=2,cm=3,sm=4,wv=5;var Ro=100,Av=101,Rv=102,jv=103,Nv=104,Bv=200,Pv=201,zv=202,Ov=203,Ud=204,Hd=205,Uv=206,Hv=207,Vv=208,qv=209,Gv=210,Wv=211,$v=212,Xv=213,Zv=214,Vd=0,qd=1,Gd=2,Da=3,Wd=4,$d=5,Xd=6,Zd=7,lm=0,Yv=1,Kv=2,Ci=0,dm=1,um=2,pm=3,fm=4,mm=5,hm=6,gm=7;var Zf=300,Ho=301,Sa=302,_0=303,D0=304,rs=306,Yd=1e3,Ri=1001,Kd=1002,un=1003,Jv=1004;var cs=1005;var mn=1006,x0=1007;var Vo=1008;var Rn=1009,ym=1010,vm=1011,Pr=1012,E0=1013,_i=1014,Di=1015,Ui=1016,S0=1017,k0=1018,zr=1020,Mm=35902,Cm=35899,_m=1021,Dm=1022,ei=1023,ji=1026,qo=1027,xm=1028,F0=1029,ka=1030,I0=1031;var b0=1033,ss=33776,ls=33777,ds=33778,us=33779,T0=35840,L0=35841,w0=35842,A0=35843,R0=36196,j0=37492,N0=37496,B0=37488,P0=37489,z0=37490,O0=37491,U0=37808,H0=37809,V0=37810,q0=37811,G0=37812,W0=37813,$0=37814,X0=37815,Z0=37816,Y0=37817,K0=37818,J0=37819,Q0=37820,eu=37821,tu=36492,nu=36494,iu=36495,ou=36283,au=36284,ru=36285,cu=36286;var Vc=2300,Jd=2301,Od=2302,Yf=2303,Kf=2400,Jf=2401,Qf=2402;var Qv=3200;var Em=0,eM=1,mo="",On="srgb",xa="srgb-linear",qc="linear",Mt="srgb";var Ca=7680;var em=519,tM=512,nM=513,iM=514,su=515,oM=516,aM=517,lu=518,rM=519,tm=35044;var Sm="300 es",gi=2e3,Ir=2001;function U5(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function H5(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Gc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function cM(){let n=Gc("canvas");return n.style.display="block",n}var uv={},br=null;function km(...n){let e="THREE."+n.shift();br?br("log",e,...n):console.log(e,...n)}function sM(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Pe(...n){n=sM(n);let e="THREE."+n.shift();if(br)br("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Be(...n){n=sM(n);let e="THREE."+n.shift();if(br)br("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Wc(...n){let e=n.join(" ");e in uv||(uv[e]=!0,Pe(...n))}function lM(n,e,t){return new Promise(function(i,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}var dM={[Vd]:qd,[Gd]:Xd,[Wd]:Zd,[Da]:$d,[qd]:Vd,[Xd]:Gd,[Zd]:Wd,[$d]:Da},uo=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let o=i[e];if(o!==void 0){let a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let o=i.slice(0);for(let a=0,r=o.length;a<r;a++)o[a].call(this,e);e.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Sf=Math.PI/180,Qd=180/Math.PI;function ps(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]).toLowerCase()}function ct(n,e,t){return Math.max(e,Math.min(t,n))}function V5(n,e){return(n%e+e)%e}function kf(n,e,t){return(1-t)*n+t*e}function Pc(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function An(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var pt=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*i-r*o+e.x,this.y=a*o+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ni=class{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,r,c){let s=i[o+0],l=i[o+1],d=i[o+2],p=i[o+3],u=a[r+0],f=a[r+1],g=a[r+2],C=a[r+3];if(p!==C||s!==u||l!==f||d!==g){let h=s*u+l*f+d*g+p*C;h<0&&(u=-u,f=-f,g=-g,C=-C,h=-h);let m=1-c;if(h<.9995){let _=Math.acos(h),S=Math.sin(_);m=Math.sin(m*_)/S,c=Math.sin(c*_)/S,s=s*m+u*c,l=l*m+f*c,d=d*m+g*c,p=p*m+C*c}else{s=s*m+u*c,l=l*m+f*c,d=d*m+g*c,p=p*m+C*c;let _=1/Math.sqrt(s*s+l*l+d*d+p*p);s*=_,l*=_,d*=_,p*=_}}e[t]=s,e[t+1]=l,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,o,a,r){let c=i[o],s=i[o+1],l=i[o+2],d=i[o+3],p=a[r],u=a[r+1],f=a[r+2],g=a[r+3];return e[t]=c*g+d*p+s*f-l*u,e[t+1]=s*g+d*u+l*p-c*f,e[t+2]=l*g+d*f+c*u-s*p,e[t+3]=d*g-c*p-s*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,o=e._y,a=e._z,r=e._order,c=Math.cos,s=Math.sin,l=c(i/2),d=c(o/2),p=c(a/2),u=s(i/2),f=s(o/2),g=s(a/2);switch(r){case"XYZ":this._x=u*d*p+l*f*g,this._y=l*f*p-u*d*g,this._z=l*d*g+u*f*p,this._w=l*d*p-u*f*g;break;case"YXZ":this._x=u*d*p+l*f*g,this._y=l*f*p-u*d*g,this._z=l*d*g-u*f*p,this._w=l*d*p+u*f*g;break;case"ZXY":this._x=u*d*p-l*f*g,this._y=l*f*p+u*d*g,this._z=l*d*g+u*f*p,this._w=l*d*p-u*f*g;break;case"ZYX":this._x=u*d*p-l*f*g,this._y=l*f*p+u*d*g,this._z=l*d*g-u*f*p,this._w=l*d*p+u*f*g;break;case"YZX":this._x=u*d*p+l*f*g,this._y=l*f*p+u*d*g,this._z=l*d*g-u*f*p,this._w=l*d*p-u*f*g;break;case"XZY":this._x=u*d*p-l*f*g,this._y=l*f*p-u*d*g,this._z=l*d*g+u*f*p,this._w=l*d*p+u*f*g;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],o=t[4],a=t[8],r=t[1],c=t[5],s=t[9],l=t[2],d=t[6],p=t[10],u=i+c+p;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(d-s)*f,this._y=(a-l)*f,this._z=(r-o)*f}else if(i>c&&i>p){let f=2*Math.sqrt(1+i-c-p);this._w=(d-s)/f,this._x=.25*f,this._y=(o+r)/f,this._z=(a+l)/f}else if(c>p){let f=2*Math.sqrt(1+c-i-p);this._w=(a-l)/f,this._x=(o+r)/f,this._y=.25*f,this._z=(s+d)/f}else{let f=2*Math.sqrt(1+p-i-c);this._w=(r-o)/f,this._x=(a+l)/f,this._y=(s+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,o=e._y,a=e._z,r=e._w,c=t._x,s=t._y,l=t._z,d=t._w;return this._x=i*d+r*c+o*l-a*s,this._y=o*d+r*s+a*c-i*l,this._z=a*d+r*l+i*s-o*c,this._w=r*d-i*c-o*s-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,o=e._y,a=e._z,r=e._w,c=this.dot(e);c<0&&(i=-i,o=-o,a=-a,r=-r,c=-c);let s=1-t;if(c<.9995){let l=Math.acos(c),d=Math.sin(l);s=Math.sin(s*l)/d,t=Math.sin(t*l)/d,this._x=this._x*s+i*t,this._y=this._y*s+o*t,this._z=this._z*s+a*t,this._w=this._w*s+r*t,this._onChangeCallback()}else this._x=this._x*s+i*t,this._y=this._y*s+o*t,this._z=this._z*s+a*t,this._w=this._w*s+r*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pv.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,o=this.z,a=e.elements,r=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*r,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*r,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*r,this}applyQuaternion(e){let t=this.x,i=this.y,o=this.z,a=e.x,r=e.y,c=e.z,s=e.w,l=2*(r*o-c*i),d=2*(c*t-a*o),p=2*(a*i-r*t);return this.x=t+s*l+r*p-c*d,this.y=i+s*d+c*l-a*p,this.z=o+s*p+a*d-r*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,o=e.y,a=e.z,r=t.x,c=t.y,s=t.z;return this.x=o*s-a*c,this.y=a*r-i*s,this.z=i*c-o*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ff.copy(this).projectOnVector(e),this.sub(Ff)}reflect(e){return this.sub(Ff.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ff=new B,pv=new Ni,We=class n{constructor(e,t,i,o,a,r,c,s,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,r,c,s,l)}set(e,t,i,o,a,r,c,s,l){let d=this.elements;return d[0]=e,d[1]=o,d[2]=c,d[3]=t,d[4]=a,d[5]=s,d[6]=i,d[7]=r,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,o=t.elements,a=this.elements,r=i[0],c=i[3],s=i[6],l=i[1],d=i[4],p=i[7],u=i[2],f=i[5],g=i[8],C=o[0],h=o[3],m=o[6],_=o[1],S=o[4],E=o[7],b=o[2],F=o[5],T=o[8];return a[0]=r*C+c*_+s*b,a[3]=r*h+c*S+s*F,a[6]=r*m+c*E+s*T,a[1]=l*C+d*_+p*b,a[4]=l*h+d*S+p*F,a[7]=l*m+d*E+p*T,a[2]=u*C+f*_+g*b,a[5]=u*h+f*S+g*F,a[8]=u*m+f*E+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],r=e[4],c=e[5],s=e[6],l=e[7],d=e[8];return t*r*d-t*c*l-i*a*d+i*c*s+o*a*l-o*r*s}invert(){let e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],r=e[4],c=e[5],s=e[6],l=e[7],d=e[8],p=d*r-c*l,u=c*s-d*a,f=l*a-r*s,g=t*p+i*u+o*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let C=1/g;return e[0]=p*C,e[1]=(o*l-d*i)*C,e[2]=(c*i-o*r)*C,e[3]=u*C,e[4]=(d*t-o*s)*C,e[5]=(o*a-c*t)*C,e[6]=f*C,e[7]=(i*s-l*t)*C,e[8]=(r*t-i*a)*C,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,r,c){let s=Math.cos(a),l=Math.sin(a);return this.set(i*s,i*l,-i*(s*r+l*c)+r+e,-o*l,o*s,-o*(-l*r+s*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(If.makeScale(e,t)),this}rotate(e){return this.premultiply(If.makeRotation(-e)),this}translate(e,t){return this.premultiply(If.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},If=new We,fv=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mv=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q5(){let n={enabled:!0,workingColorSpace:xa,spaces:{},convert:function(o,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===Mt&&(o.r=so(o.r),o.g=so(o.g),o.b=so(o.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Mt&&(o.r=Fr(o.r),o.g=Fr(o.g),o.b=Fr(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===mo?qc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,r){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return Wc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return Wc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[xa]:{primaries:e,whitePoint:i,transfer:qc,toXYZ:fv,fromXYZ:mv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:fv,fromXYZ:mv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),n}var lt=q5();function so(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var hr,e0=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{hr===void 0&&(hr=Gc("canvas")),hr.width=e.width,hr.height=e.height;let o=hr.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=hr}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Gc("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let r=0;r<a.length;r++)a[r]=so(a[r]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(so(t[i]/255)*255):t[i]=so(t[i]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},G5=0,Tr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:G5++}),this.uuid=ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let r=0,c=o.length;r<c;r++)o[r].isDataTexture?a.push(bf(o[r].image)):a.push(bf(o[r]))}else a=bf(o);i.url=a}return t||(e.images[this.uuid]=i),i}};function bf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?e0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}var W5=0,Tf=new B,Hi=(()=>{class n extends uo{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,o=Ri,a=Ri,r=mn,c=Vo,s=ei,l=Rn,d=n.DEFAULT_ANISOTROPY,p=mo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:W5++}),this.uuid=ps(),this.name="",this.source=new Tr(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=o,this.wrapT=a,this.magFilter=r,this.minFilter=c,this.anisotropy=d,this.format=s,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Tf).x}get height(){return this.source.getSize(Tf).y}get depth(){return this.source.getSize(Tf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let o=t[i];if(o===void 0){Pe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Pe(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&o&&a.isVector2&&o.isVector2||a&&o&&a.isVector3&&o.isVector3||a&&o&&a.isMatrix3&&o.isMatrix3?a.copy(o):this[i]=o}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let o={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(o.userData=this.userData),i||(t.textures[this.uuid]=o),o}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yd:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case Kd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yd:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case Kd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=Zf,n.DEFAULT_ANISOTROPY=1,n})(),Ot=class n{constructor(e=0,t=0,i=0,o=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,o=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*o+r[12]*a,this.y=r[1]*t+r[5]*i+r[9]*o+r[13]*a,this.z=r[2]*t+r[6]*i+r[10]*o+r[14]*a,this.w=r[3]*t+r[7]*i+r[11]*o+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a,s=e.elements,l=s[0],d=s[4],p=s[8],u=s[1],f=s[5],g=s[9],C=s[2],h=s[6],m=s[10];if(Math.abs(d-u)<.01&&Math.abs(p-C)<.01&&Math.abs(g-h)<.01){if(Math.abs(d+u)<.1&&Math.abs(p+C)<.1&&Math.abs(g+h)<.1&&Math.abs(l+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,E=(f+1)/2,b=(m+1)/2,F=(d+u)/4,T=(p+C)/4,v=(g+h)/4;return S>E&&S>b?S<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(S),o=F/i,a=T/i):E>b?E<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(E),i=F/o,a=v/o):b<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(b),i=T/a,o=v/a),this.set(i,o,a,t),this}let _=Math.sqrt((h-g)*(h-g)+(p-C)*(p-C)+(u-d)*(u-d));return Math.abs(_)<.001&&(_=1),this.x=(h-g)/_,this.y=(p-C)/_,this.z=(u-d)/_,this.w=Math.acos((l+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},t0=class extends uo{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];let o={width:e,height:t,depth:i.depth},a=new Hi(o),r=i.count;for(let c=0;c<r;c++)this.textures[c]=a.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let o=Object.assign({},e.textures[t].image);this.textures[t].source=new Tr(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends t0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},$c=class extends Hi{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=un,this.minFilter=un,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var n0=class extends Hi{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=un,this.minFilter=un,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qt=class n{constructor(e,t,i,o,a,r,c,s,l,d,p,u,f,g,C,h){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,r,c,s,l,d,p,u,f,g,C,h)}set(e,t,i,o,a,r,c,s,l,d,p,u,f,g,C,h){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=o,m[1]=a,m[5]=r,m[9]=c,m[13]=s,m[2]=l,m[6]=d,m[10]=p,m[14]=u,m[3]=f,m[7]=g,m[11]=C,m[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,i=e.elements,o=1/gr.setFromMatrixColumn(e,0).length(),a=1/gr.setFromMatrixColumn(e,1).length(),r=1/gr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,o=e.y,a=e.z,r=Math.cos(i),c=Math.sin(i),s=Math.cos(o),l=Math.sin(o),d=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){let u=r*d,f=r*p,g=c*d,C=c*p;t[0]=s*d,t[4]=-s*p,t[8]=l,t[1]=f+g*l,t[5]=u-C*l,t[9]=-c*s,t[2]=C-u*l,t[6]=g+f*l,t[10]=r*s}else if(e.order==="YXZ"){let u=s*d,f=s*p,g=l*d,C=l*p;t[0]=u+C*c,t[4]=g*c-f,t[8]=r*l,t[1]=r*p,t[5]=r*d,t[9]=-c,t[2]=f*c-g,t[6]=C+u*c,t[10]=r*s}else if(e.order==="ZXY"){let u=s*d,f=s*p,g=l*d,C=l*p;t[0]=u-C*c,t[4]=-r*p,t[8]=g+f*c,t[1]=f+g*c,t[5]=r*d,t[9]=C-u*c,t[2]=-r*l,t[6]=c,t[10]=r*s}else if(e.order==="ZYX"){let u=r*d,f=r*p,g=c*d,C=c*p;t[0]=s*d,t[4]=g*l-f,t[8]=u*l+C,t[1]=s*p,t[5]=C*l+u,t[9]=f*l-g,t[2]=-l,t[6]=c*s,t[10]=r*s}else if(e.order==="YZX"){let u=r*s,f=r*l,g=c*s,C=c*l;t[0]=s*d,t[4]=C-u*p,t[8]=g*p+f,t[1]=p,t[5]=r*d,t[9]=-c*d,t[2]=-l*d,t[6]=f*p+g,t[10]=u-C*p}else if(e.order==="XZY"){let u=r*s,f=r*l,g=c*s,C=c*l;t[0]=s*d,t[4]=-p,t[8]=l*d,t[1]=u*p+C,t[5]=r*d,t[9]=f*p-g,t[2]=g*p-f,t[6]=c*d,t[10]=C*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($5,e,X5)}lookAt(e,t,i){let o=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Fo.crossVectors(i,Pn),Fo.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Fo.crossVectors(i,Pn)),Fo.normalize(),Cd.crossVectors(Pn,Fo),o[0]=Fo.x,o[4]=Cd.x,o[8]=Pn.x,o[1]=Fo.y,o[5]=Cd.y,o[9]=Pn.y,o[2]=Fo.z,o[6]=Cd.z,o[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,o=t.elements,a=this.elements,r=i[0],c=i[4],s=i[8],l=i[12],d=i[1],p=i[5],u=i[9],f=i[13],g=i[2],C=i[6],h=i[10],m=i[14],_=i[3],S=i[7],E=i[11],b=i[15],F=o[0],T=o[4],v=o[8],x=o[12],X=o[1],k=o[5],P=o[9],O=o[13],q=o[2],z=o[6],U=o[10],R=o[14],ie=o[3],Q=o[7],fe=o[11],ve=o[15];return a[0]=r*F+c*X+s*q+l*ie,a[4]=r*T+c*k+s*z+l*Q,a[8]=r*v+c*P+s*U+l*fe,a[12]=r*x+c*O+s*R+l*ve,a[1]=d*F+p*X+u*q+f*ie,a[5]=d*T+p*k+u*z+f*Q,a[9]=d*v+p*P+u*U+f*fe,a[13]=d*x+p*O+u*R+f*ve,a[2]=g*F+C*X+h*q+m*ie,a[6]=g*T+C*k+h*z+m*Q,a[10]=g*v+C*P+h*U+m*fe,a[14]=g*x+C*O+h*R+m*ve,a[3]=_*F+S*X+E*q+b*ie,a[7]=_*T+S*k+E*z+b*Q,a[11]=_*v+S*P+E*U+b*fe,a[15]=_*x+S*O+E*R+b*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],r=e[1],c=e[5],s=e[9],l=e[13],d=e[2],p=e[6],u=e[10],f=e[14],g=e[3],C=e[7],h=e[11],m=e[15],_=s*f-l*u,S=c*f-l*p,E=c*u-s*p,b=r*f-l*d,F=r*u-s*d,T=r*p-c*d;return t*(C*_-h*S+m*E)-i*(g*_-h*b+m*F)+o*(g*S-C*b+m*T)-a*(g*E-C*F+h*T)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],r=e[4],c=e[5],s=e[6],l=e[7],d=e[8],p=e[9],u=e[10],f=e[11],g=e[12],C=e[13],h=e[14],m=e[15],_=t*c-i*r,S=t*s-o*r,E=t*l-a*r,b=i*s-o*c,F=i*l-a*c,T=o*l-a*s,v=d*C-p*g,x=d*h-u*g,X=d*m-f*g,k=p*h-u*C,P=p*m-f*C,O=u*m-f*h,q=_*O-S*P+E*k+b*X-F*x+T*v;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/q;return e[0]=(c*O-s*P+l*k)*z,e[1]=(o*P-i*O-a*k)*z,e[2]=(C*T-h*F+m*b)*z,e[3]=(u*F-p*T-f*b)*z,e[4]=(s*X-r*O-l*x)*z,e[5]=(t*O-o*X+a*x)*z,e[6]=(h*E-g*T-m*S)*z,e[7]=(d*T-u*E+f*S)*z,e[8]=(r*P-c*X+l*v)*z,e[9]=(i*X-t*P-a*v)*z,e[10]=(g*F-C*E+m*_)*z,e[11]=(p*E-d*F-f*_)*z,e[12]=(c*x-r*k-s*v)*z,e[13]=(t*k-i*x+o*v)*z,e[14]=(C*S-g*b-h*_)*z,e[15]=(d*b-p*S+u*_)*z,this}scale(e){let t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),o=Math.sin(t),a=1-i,r=e.x,c=e.y,s=e.z,l=a*r,d=a*c;return this.set(l*r+i,l*c-o*s,l*s+o*c,0,l*c+o*s,d*c+i,d*s-o*r,0,l*s-o*c,d*s+o*r,a*s*s+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,r){return this.set(1,i,a,0,e,1,r,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){let o=this.elements,a=t._x,r=t._y,c=t._z,s=t._w,l=a+a,d=r+r,p=c+c,u=a*l,f=a*d,g=a*p,C=r*d,h=r*p,m=c*p,_=s*l,S=s*d,E=s*p,b=i.x,F=i.y,T=i.z;return o[0]=(1-(C+m))*b,o[1]=(f+E)*b,o[2]=(g-S)*b,o[3]=0,o[4]=(f-E)*F,o[5]=(1-(u+m))*F,o[6]=(h+_)*F,o[7]=0,o[8]=(g+S)*T,o[9]=(h-_)*T,o[10]=(1-(u+C))*T,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){let o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];let a=this.determinant();if(a===0)return i.set(1,1,1),t.identity(),this;let r=gr.set(o[0],o[1],o[2]).length(),c=gr.set(o[4],o[5],o[6]).length(),s=gr.set(o[8],o[9],o[10]).length();a<0&&(r=-r),fi.copy(this);let l=1/r,d=1/c,p=1/s;return fi.elements[0]*=l,fi.elements[1]*=l,fi.elements[2]*=l,fi.elements[4]*=d,fi.elements[5]*=d,fi.elements[6]*=d,fi.elements[8]*=p,fi.elements[9]*=p,fi.elements[10]*=p,t.setFromRotationMatrix(fi),i.x=r,i.y=c,i.z=s,this}makePerspective(e,t,i,o,a,r,c=gi,s=!1){let l=this.elements,d=2*a/(t-e),p=2*a/(i-o),u=(t+e)/(t-e),f=(i+o)/(i-o),g,C;if(s)g=a/(r-a),C=r*a/(r-a);else if(c===gi)g=-(r+a)/(r-a),C=-2*r*a/(r-a);else if(c===Ir)g=-r/(r-a),C=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return l[0]=d,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=p,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=C,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,o,a,r,c=gi,s=!1){let l=this.elements,d=2/(t-e),p=2/(i-o),u=-(t+e)/(t-e),f=-(i+o)/(i-o),g,C;if(s)g=1/(r-a),C=r/(r-a);else if(c===gi)g=-2/(r-a),C=-(r+a)/(r-a);else if(c===Ir)g=-1/(r-a),C=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return l[0]=d,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=p,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=C,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},gr=new B,fi=new qt,$5=new B(0,0,0),X5=new B(1,1,1),Fo=new B,Cd=new B,Pn=new B,hv=new qt,gv=new Ni,jo=(()=>{class n{constructor(t=0,i=0,o=0,a=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=o,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,o,a=this._order){return this._x=t,this._y=i,this._z=o,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,o=!0){let a=t.elements,r=a[0],c=a[4],s=a[8],l=a[1],d=a[5],p=a[9],u=a[2],f=a[6],g=a[10];switch(i){case"XYZ":this._y=Math.asin(ct(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-p,g),this._z=Math.atan2(-c,r)):(this._x=Math.atan2(f,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(s,g),this._z=Math.atan2(l,d)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(s,g));break;case"XZY":this._z=Math.asin(-ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,d),this._y=Math.atan2(s,r)):(this._x=Math.atan2(-p,g),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,o===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,o){return hv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hv,i,o)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return gv.setFromEuler(this),this.setFromQuaternion(gv,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Xc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Z5=0,yv=new B,yr=new Ni,io=new qt,_d=new B,zc=new B,Y5=new B,K5=new Ni,vv=new B(1,0,0),Mv=new B(0,1,0),Cv=new B(0,0,1),_v={type:"added"},J5={type:"removed"},vr={type:"childadded",child:null},Lf={type:"childremoved",child:null},Bi=(()=>{class n extends uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Z5++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new B,i=new jo,o=new Ni,a=new B(1,1,1);function r(){o.setFromEuler(i,!1)}function c(){i.setFromQuaternion(o,void 0,!1)}i._onChange(r),o._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:o},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new qt},normalMatrix:{value:new We}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(vv,t)}rotateY(t){return this.rotateOnAxis(Mv,t)}rotateZ(t){return this.rotateOnAxis(Cv,t)}translateOnAxis(t,i){return yv.copy(t).applyQuaternion(this.quaternion),this.position.add(yv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(vv,t)}translateY(t){return this.translateOnAxis(Mv,t)}translateZ(t){return this.translateOnAxis(Cv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(io.copy(this.matrixWorld).invert())}lookAt(t,i,o){t.isVector3?_d.copy(t):_d.set(t,i,o);let a=this.parent;this.updateWorldMatrix(!0,!1),zc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?io.lookAt(zc,_d,this.up):io.lookAt(_d,zc,this.up),this.quaternion.setFromRotationMatrix(io),a&&(io.extractRotation(a.matrixWorld),yr.setFromRotationMatrix(io),this.quaternion.premultiply(yr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Be("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_v),vr.child=t,this.dispatchEvent(vr),vr.child=null):Be("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let o=0;o<arguments.length;o++)this.remove(arguments[o]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(J5),Lf.child=t,this.dispatchEvent(Lf),Lf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),io.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),io.multiply(t.parent.matrixWorld)),t.applyMatrix4(io),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_v),vr.child=t,this.dispatchEvent(vr),vr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let o=0,a=this.children.length;o<a;o++){let c=this.children[o].getObjectByProperty(t,i);if(c!==void 0)return c}}getObjectsByProperty(t,i,o=[]){this[t]===i&&o.push(this);let a=this.children;for(let r=0,c=a.length;r<c;r++)a[r].getObjectsByProperty(t,i,o);return o}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zc,t,Y5),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zc,K5,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,o=t.y,a=t.z,r=this.matrix.elements;r[12]+=i-r[0]*i-r[4]*o-r[8]*a,r[13]+=o-r[1]*i-r[5]*o-r[9]*a,r[14]+=a-r[2]*i-r[6]*o-r[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].updateMatrixWorld(t)}updateWorldMatrix(t,i){let o=this.parent;if(t===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let a=this.children;for(let r=0,c=a.length;r<c;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",o={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},o.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(s=>tn(zt({},s),{boundingBox:s.boundingBox?s.boundingBox.toJSON():void 0,boundingSphere:s.boundingSphere?s.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(s=>zt({},s)),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(t.geometries,this.geometry);let s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){let l=s.shapes;if(Array.isArray(l))for(let d=0,p=l.length;d<p;d++){let u=l[d];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let s=[];for(let l=0,d=this.material.length;l<d;l++)s.push(r(t.materials,this.material[l]));a.material=s}else a.material=r(t.materials,this.material);if(this.children.length>0){a.children=[];for(let s=0;s<this.children.length;s++)a.children.push(this.children[s].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let s=0;s<this.animations.length;s++){let l=this.animations[s];a.animations.push(r(t.animations,l))}}if(i){let s=c(t.geometries),l=c(t.materials),d=c(t.textures),p=c(t.images),u=c(t.shapes),f=c(t.skeletons),g=c(t.animations),C=c(t.nodes);s.length>0&&(o.geometries=s),l.length>0&&(o.materials=l),d.length>0&&(o.textures=d),p.length>0&&(o.images=p),u.length>0&&(o.shapes=u),f.length>0&&(o.skeletons=f),g.length>0&&(o.animations=g),C.length>0&&(o.nodes=C)}return o.object=a,o;function c(s){let l=[];for(let d in s){let p=s[d];delete p.metadata,l.push(p)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let o=0;o<t.children.length;o++){let a=t.children[o];this.add(a.clone())}return this}}return n.DEFAULT_UP=new B(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),yi=class extends Bi{constructor(){super(),this.isGroup=!0,this.type="Group"}},Q5={type:"move"},Lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,r=null,c=this._targetRay,s=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){r=!0;for(let C of e.hand.values()){let h=t.getJointPose(C,i),m=this._getHandJoint(l,C);h!==null&&(m.matrix.fromArray(h.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=h.radius),m.visible=h!==null}let d=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],u=d.position.distanceTo(p.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,a.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(a.linearVelocity)):s.hasLinearVelocity=!1,a.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(a.angularVelocity)):s.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Q5)))}return c!==null&&(c.visible=o!==null),s!==null&&(s.visible=a!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new yi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},uM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Io={h:0,s:0,l:0},Dd={h:0,s:0,l:0};function wf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var st=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,o=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.colorSpaceToWorking(this,o),this}setHSL(e,t,i,o=lt.workingColorSpace){if(e=V5(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,r=2*i-a;this.r=wf(r,a,e+1/3),this.g=wf(r,a,e),this.b=wf(r,a,e-1/3)}return lt.colorSpaceToWorking(this,o),this}setStyle(e,t=On){function i(a){a!==void 0&&parseFloat(a)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,r=o[1],c=o[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=o[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=On){let i=uM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return lt.workingToColorSpace(_n.copy(this),e),Math.round(ct(_n.r*255,0,255))*65536+Math.round(ct(_n.g*255,0,255))*256+Math.round(ct(_n.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(_n.copy(this),t);let i=_n.r,o=_n.g,a=_n.b,r=Math.max(i,o,a),c=Math.min(i,o,a),s,l,d=(c+r)/2;if(c===r)s=0,l=0;else{let p=r-c;switch(l=d<=.5?p/(r+c):p/(2-r-c),r){case i:s=(o-a)/p+(o<a?6:0);break;case o:s=(a-i)/p+2;break;case a:s=(i-o)/p+4;break}s/=6}return e.h=s,e.s=l,e.l=d,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=On){lt.workingToColorSpace(_n.copy(this),e);let t=_n.r,i=_n.g,o=_n.b;return e!==On?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(Io),this.setHSL(Io.h+e,Io.s+t,Io.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Io),e.getHSL(Dd);let i=kf(Io.h,Dd.h,t),o=kf(Io.s,Dd.s,t),a=kf(Io.l,Dd.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new st;st.NAMES=uM;var Zc=class extends Bi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jo,this.environmentIntensity=1,this.environmentRotation=new jo,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},mi=new B,oo=new B,Af=new B,ao=new B,Mr=new B,Cr=new B,Dv=new B,Rf=new B,jf=new B,Nf=new B,Bf=new Ot,Pf=new Ot,zf=new Ot,Ao=class n{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),mi.subVectors(e,t),o.cross(mi);let a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){mi.subVectors(o,t),oo.subVectors(i,t),Af.subVectors(e,t);let r=mi.dot(mi),c=mi.dot(oo),s=mi.dot(Af),l=oo.dot(oo),d=oo.dot(Af),p=r*l-c*c;if(p===0)return a.set(0,0,0),null;let u=1/p,f=(l*s-c*d)*u,g=(r*d-c*s)*u;return a.set(1-f-g,g,f)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,ao)===null?!1:ao.x>=0&&ao.y>=0&&ao.x+ao.y<=1}static getInterpolation(e,t,i,o,a,r,c,s){return this.getBarycoord(e,t,i,o,ao)===null?(s.x=0,s.y=0,"z"in s&&(s.z=0),"w"in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(a,ao.x),s.addScaledVector(r,ao.y),s.addScaledVector(c,ao.z),s)}static getInterpolatedAttribute(e,t,i,o,a,r){return Bf.setScalar(0),Pf.setScalar(0),zf.setScalar(0),Bf.fromBufferAttribute(e,t),Pf.fromBufferAttribute(e,i),zf.fromBufferAttribute(e,o),r.setScalar(0),r.addScaledVector(Bf,a.x),r.addScaledVector(Pf,a.y),r.addScaledVector(zf,a.z),r}static isFrontFacing(e,t,i,o){return mi.subVectors(i,t),oo.subVectors(e,t),mi.cross(oo).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),oo.subVectors(this.a,this.b),mi.cross(oo).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return n.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,o=this.b,a=this.c,r,c;Mr.subVectors(o,i),Cr.subVectors(a,i),Rf.subVectors(e,i);let s=Mr.dot(Rf),l=Cr.dot(Rf);if(s<=0&&l<=0)return t.copy(i);jf.subVectors(e,o);let d=Mr.dot(jf),p=Cr.dot(jf);if(d>=0&&p<=d)return t.copy(o);let u=s*p-d*l;if(u<=0&&s>=0&&d<=0)return r=s/(s-d),t.copy(i).addScaledVector(Mr,r);Nf.subVectors(e,a);let f=Mr.dot(Nf),g=Cr.dot(Nf);if(g>=0&&f<=g)return t.copy(a);let C=f*l-s*g;if(C<=0&&l>=0&&g<=0)return c=l/(l-g),t.copy(i).addScaledVector(Cr,c);let h=d*g-f*p;if(h<=0&&p-d>=0&&f-g>=0)return Dv.subVectors(a,o),c=(p-d)/(p-d+(f-g)),t.copy(o).addScaledVector(Dv,c);let m=1/(h+C+u);return r=C*m,c=u*m,t.copy(i).addScaledVector(Mr,r).addScaledVector(Cr,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},No=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,c=a.count;r<c;r++)e.isMesh===!0?e.getVertexPosition(r,hi):hi.fromBufferAttribute(a,r),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xd.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xd.copy(i.boundingBox)),xd.applyMatrix4(e.matrixWorld),this.union(xd)}let o=e.children;for(let a=0,r=o.length;a<r;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oc),Ed.subVectors(this.max,Oc),_r.subVectors(e.a,Oc),Dr.subVectors(e.b,Oc),xr.subVectors(e.c,Oc),bo.subVectors(Dr,_r),To.subVectors(xr,Dr),ga.subVectors(_r,xr);let t=[0,-bo.z,bo.y,0,-To.z,To.y,0,-ga.z,ga.y,bo.z,0,-bo.x,To.z,0,-To.x,ga.z,0,-ga.x,-bo.y,bo.x,0,-To.y,To.x,0,-ga.y,ga.x,0];return!Of(t,_r,Dr,xr,Ed)||(t=[1,0,0,0,1,0,0,0,1],!Of(t,_r,Dr,xr,Ed))?!1:(Sd.crossVectors(bo,To),t=[Sd.x,Sd.y,Sd.z],Of(t,_r,Dr,xr,Ed))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ro[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ro[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ro[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ro[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ro[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ro[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ro[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ro[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ro),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ro=[new B,new B,new B,new B,new B,new B,new B,new B],hi=new B,xd=new No,_r=new B,Dr=new B,xr=new B,bo=new B,To=new B,ga=new B,Oc=new B,Ed=new B,Sd=new B,ya=new B;function Of(n,e,t,i,o){for(let a=0,r=n.length-3;a<=r;a+=3){ya.fromArray(n,a);let c=o.x*Math.abs(ya.x)+o.y*Math.abs(ya.y)+o.z*Math.abs(ya.z),s=e.dot(ya),l=t.dot(ya),d=i.dot(ya);if(Math.max(-Math.max(s,l,d),Math.min(s,l,d))>c)return!1}return!0}var en=new B,kd=new pt,eS=0,Un=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=tm,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kd.fromBufferAttribute(this,t),kd.applyMatrix3(e),this.setXY(t,kd.x,kd.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pc(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=An(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pc(t,this.array)),t}setX(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pc(t,this.array)),t}setY(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pc(t,this.array)),t}setZ(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pc(t,this.array)),t}setW(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),i=An(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),i=An(i,this.array),o=An(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),i=An(i,this.array),o=An(o,this.array),a=An(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tm&&(e.usage=this.usage),e}};var Yc=class extends Un{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Kc=class extends Un{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Qn=class extends Un{constructor(e,t,i){super(new Float32Array(e),t,i)}},tS=new No,Uc=new B,Uf=new B,wr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):tS.setFromPoints(e).getCenter(i);let o=0;for(let a=0,r=e.length;a<r;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uc.subVectors(e,this.center);let t=Uc.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(Uc,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uc.copy(e.center).add(Uf)),this.expandByPoint(Uc.copy(e.center).sub(Uf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},nS=0,Jn=new qt,Hf=new Bi,Er=new B,zn=new No,Hc=new No,dn=new B,Pi=class n extends uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(U5(e)?Kc:Yc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new We().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}let o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,i){return Jn.makeTranslation(e,t,i),this.applyMatrix4(Jn),this}scale(e,t,i){return Jn.makeScale(e,t,i),this.applyMatrix4(Jn),this}lookAt(e){return Hf.lookAt(e),Hf.updateMatrix(),this.applyMatrix4(Hf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Er).negate(),this.translate(Er.x,Er.y,Er.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let o=0,a=e.length;o<a;o++){let r=e[o];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Qn(i,3))}else{let i=Math.min(e.length,t.count);for(let o=0;o<i;o++){let a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new No);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){let a=t[i];zn.setFromBufferAttribute(a),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Be('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Be("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let i=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){let c=t[a];Hc.setFromBufferAttribute(c),this.morphTargetsRelative?(dn.addVectors(zn.min,Hc.min),zn.expandByPoint(dn),dn.addVectors(zn.max,Hc.max),zn.expandByPoint(dn)):(zn.expandByPoint(Hc.min),zn.expandByPoint(Hc.max))}zn.getCenter(i);let o=0;for(let a=0,r=e.count;a<r;a++)dn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(dn));if(t)for(let a=0,r=t.length;a<r;a++){let c=t[a],s=this.morphTargetsRelative;for(let l=0,d=c.count;l<d;l++)dn.fromBufferAttribute(c,l),s&&(Er.fromBufferAttribute(e,l),dn.add(Er)),o=Math.max(o,i.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Be('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Be("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));let r=this.getAttribute("tangent"),c=[],s=[];for(let v=0;v<i.count;v++)c[v]=new B,s[v]=new B;let l=new B,d=new B,p=new B,u=new pt,f=new pt,g=new pt,C=new B,h=new B;function m(v,x,X){l.fromBufferAttribute(i,v),d.fromBufferAttribute(i,x),p.fromBufferAttribute(i,X),u.fromBufferAttribute(a,v),f.fromBufferAttribute(a,x),g.fromBufferAttribute(a,X),d.sub(l),p.sub(l),f.sub(u),g.sub(u);let k=1/(f.x*g.y-g.x*f.y);isFinite(k)&&(C.copy(d).multiplyScalar(g.y).addScaledVector(p,-f.y).multiplyScalar(k),h.copy(p).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(k),c[v].add(C),c[x].add(C),c[X].add(C),s[v].add(h),s[x].add(h),s[X].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let v=0,x=_.length;v<x;++v){let X=_[v],k=X.start,P=X.count;for(let O=k,q=k+P;O<q;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let S=new B,E=new B,b=new B,F=new B;function T(v){b.fromBufferAttribute(o,v),F.copy(b);let x=c[v];S.copy(x),S.sub(b.multiplyScalar(b.dot(x))).normalize(),E.crossVectors(F,x);let k=E.dot(s[v])<0?-1:1;r.setXYZW(v,S.x,S.y,S.z,k)}for(let v=0,x=_.length;v<x;++v){let X=_[v],k=X.start,P=X.count;for(let O=k,q=k+P;O<q;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let o=new B,a=new B,r=new B,c=new B,s=new B,l=new B,d=new B,p=new B;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),C=e.getX(u+1),h=e.getX(u+2);o.fromBufferAttribute(t,g),a.fromBufferAttribute(t,C),r.fromBufferAttribute(t,h),d.subVectors(r,a),p.subVectors(o,a),d.cross(p),c.fromBufferAttribute(i,g),s.fromBufferAttribute(i,C),l.fromBufferAttribute(i,h),c.add(d),s.add(d),l.add(d),i.setXYZ(g,c.x,c.y,c.z),i.setXYZ(C,s.x,s.y,s.z),i.setXYZ(h,l.x,l.y,l.z)}else for(let u=0,f=t.count;u<f;u+=3)o.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),r.fromBufferAttribute(t,u+2),d.subVectors(r,a),p.subVectors(o,a),d.cross(p),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(c,s){let l=c.array,d=c.itemSize,p=c.normalized,u=new l.constructor(s.length*d),f=0,g=0;for(let C=0,h=s.length;C<h;C++){c.isInterleavedBufferAttribute?f=s[C]*c.data.stride+c.offset:f=s[C]*d;for(let m=0;m<d;m++)u[g++]=l[f++]}return new Un(u,d,p)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,o=this.attributes;for(let c in o){let s=o[c],l=e(s,i);t.setAttribute(c,l)}let a=this.morphAttributes;for(let c in a){let s=[],l=a[c];for(let d=0,p=l.length;d<p;d++){let u=l[d],f=e(u,i);s.push(f)}t.morphAttributes[c]=s}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let c=0,s=r.length;c<s;c++){let l=r[c];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let s=this.parameters;for(let l in s)s[l]!==void 0&&(e[l]=s[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let s in i){let l=i[s];e.data.attributes[s]=l.toJSON(e.data)}let o={},a=!1;for(let s in this.morphAttributes){let l=this.morphAttributes[s],d=[];for(let p=0,u=l.length;p<u;p++){let f=l[p];d.push(f.toJSON(e.data))}d.length>0&&(o[s]=d,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let o=e.attributes;for(let l in o){let d=o[l];this.setAttribute(l,d.clone(t))}let a=e.morphAttributes;for(let l in a){let d=[],p=a[l];for(let u=0,f=p.length;u<f;u++)d.push(p[u].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let l=0,d=r.length;l<d;l++){let p=r[l];this.addGroup(p.start,p.count,p.materialIndex)}let c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var iS=0,po=class extends uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=_a,this.side=lo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ud,this.blendDst=Hd,this.blendEquation=Ro,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ca,this.stencilZFail=Ca,this.stencilZPass=Ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}let o=this[t];if(o===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_a&&(i.blending=this.blending),this.side!==lo&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ud&&(i.blendSrc=this.blendSrc),this.blendDst!==Hd&&(i.blendDst=this.blendDst),this.blendEquation!==Ro&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Da&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==em&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ca&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ca&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ca&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){let r=[];for(let c in a){let s=a[c];delete s.metadata,r.push(s)}return r}if(t){let a=o(e.textures),r=o(e.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var co=new B,Vf=new B,Fd=new B,Lo=new B,qf=new B,Id=new B,Gf=new B,i0=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,co)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=co.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(co.copy(this.origin).addScaledVector(this.direction,t),co.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){Vf.copy(e).add(t).multiplyScalar(.5),Fd.copy(t).sub(e).normalize(),Lo.copy(this.origin).sub(Vf);let a=e.distanceTo(t)*.5,r=-this.direction.dot(Fd),c=Lo.dot(this.direction),s=-Lo.dot(Fd),l=Lo.lengthSq(),d=Math.abs(1-r*r),p,u,f,g;if(d>0)if(p=r*s-c,u=r*c-s,g=a*d,p>=0)if(u>=-g)if(u<=g){let C=1/d;p*=C,u*=C,f=p*(p+r*u+2*c)+u*(r*p+u+2*s)+l}else u=a,p=Math.max(0,-(r*u+c)),f=-p*p+u*(u+2*s)+l;else u=-a,p=Math.max(0,-(r*u+c)),f=-p*p+u*(u+2*s)+l;else u<=-g?(p=Math.max(0,-(-r*a+c)),u=p>0?-a:Math.min(Math.max(-a,-s),a),f=-p*p+u*(u+2*s)+l):u<=g?(p=0,u=Math.min(Math.max(-a,-s),a),f=u*(u+2*s)+l):(p=Math.max(0,-(r*a+c)),u=p>0?a:Math.min(Math.max(-a,-s),a),f=-p*p+u*(u+2*s)+l);else u=r>0?-a:a,p=Math.max(0,-(r*u+c)),f=-p*p+u*(u+2*s)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,p),o&&o.copy(Vf).addScaledVector(Fd,u),f}intersectSphere(e,t){co.subVectors(e.center,this.origin);let i=co.dot(this.direction),o=co.dot(co)-i*i,a=e.radius*e.radius;if(o>a)return null;let r=Math.sqrt(a-o),c=i-r,s=i+r;return s<0?null:c<0?this.at(s,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,r,c,s,l=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,o=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,o=(e.min.x-u.x)*l),d>=0?(a=(e.min.y-u.y)*d,r=(e.max.y-u.y)*d):(a=(e.max.y-u.y)*d,r=(e.min.y-u.y)*d),i>r||a>o||((a>i||isNaN(i))&&(i=a),(r<o||isNaN(o))&&(o=r),p>=0?(c=(e.min.z-u.z)*p,s=(e.max.z-u.z)*p):(c=(e.max.z-u.z)*p,s=(e.min.z-u.z)*p),i>s||c>o)||((c>i||i!==i)&&(i=c),(s<o||o!==o)&&(o=s),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,co)!==null}intersectTriangle(e,t,i,o,a){qf.subVectors(t,e),Id.subVectors(i,e),Gf.crossVectors(qf,Id);let r=this.direction.dot(Gf),c;if(r>0){if(o)return null;c=1}else if(r<0)c=-1,r=-r;else return null;Lo.subVectors(this.origin,e);let s=c*this.direction.dot(Id.crossVectors(Lo,Id));if(s<0)return null;let l=c*this.direction.dot(qf.cross(Lo));if(l<0||s+l>r)return null;let d=-c*Lo.dot(Gf);return d<0?null:this.at(d/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ea=class extends po{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jo,this.combine=lm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},xv=new qt,va=new i0,bd=new wr,Ev=new B,Td=new B,Ld=new B,wd=new B,Wf=new B,Ad=new B,Sv=new B,Rd=new B,on=class extends Bi{constructor(e=new Pi,t=new Ea){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=o.length;a<r;a++){let c=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){let i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(o,e);let c=this.morphTargetInfluences;if(a&&c){Ad.set(0,0,0);for(let s=0,l=a.length;s<l;s++){let d=c[s],p=a[s];d!==0&&(Wf.fromBufferAttribute(p,e),r?Ad.addScaledVector(Wf,d):Ad.addScaledVector(Wf.sub(t),d))}t.add(Ad)}return t}raycast(e,t){let i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bd.copy(i.boundingSphere),bd.applyMatrix4(a),va.copy(e.ray).recast(e.near),!(bd.containsPoint(va.origin)===!1&&(va.intersectSphere(bd,Ev)===null||va.origin.distanceToSquared(Ev)>(e.far-e.near)**2))&&(xv.copy(a).invert(),va.copy(e.ray).applyMatrix4(xv),!(i.boundingBox!==null&&va.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,va)))}_computeIntersections(e,t,i){let o,a=this.geometry,r=this.material,c=a.index,s=a.attributes.position,l=a.attributes.uv,d=a.attributes.uv1,p=a.attributes.normal,u=a.groups,f=a.drawRange;if(c!==null)if(Array.isArray(r))for(let g=0,C=u.length;g<C;g++){let h=u[g],m=r[h.materialIndex],_=Math.max(h.start,f.start),S=Math.min(c.count,Math.min(h.start+h.count,f.start+f.count));for(let E=_,b=S;E<b;E+=3){let F=c.getX(E),T=c.getX(E+1),v=c.getX(E+2);o=jd(this,m,e,i,l,d,p,F,T,v),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{let g=Math.max(0,f.start),C=Math.min(c.count,f.start+f.count);for(let h=g,m=C;h<m;h+=3){let _=c.getX(h),S=c.getX(h+1),E=c.getX(h+2);o=jd(this,r,e,i,l,d,p,_,S,E),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}else if(s!==void 0)if(Array.isArray(r))for(let g=0,C=u.length;g<C;g++){let h=u[g],m=r[h.materialIndex],_=Math.max(h.start,f.start),S=Math.min(s.count,Math.min(h.start+h.count,f.start+f.count));for(let E=_,b=S;E<b;E+=3){let F=E,T=E+1,v=E+2;o=jd(this,m,e,i,l,d,p,F,T,v),o&&(o.faceIndex=Math.floor(E/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{let g=Math.max(0,f.start),C=Math.min(s.count,f.start+f.count);for(let h=g,m=C;h<m;h+=3){let _=h,S=h+1,E=h+2;o=jd(this,r,e,i,l,d,p,_,S,E),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}}};function oS(n,e,t,i,o,a,r,c){let s;if(e.side===Fn?s=i.intersectTriangle(r,a,o,!0,c):s=i.intersectTriangle(o,a,r,e.side===lo,c),s===null)return null;Rd.copy(c),Rd.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Rd);return l<t.near||l>t.far?null:{distance:l,point:Rd.clone(),object:n}}function jd(n,e,t,i,o,a,r,c,s,l){n.getVertexPosition(c,Td),n.getVertexPosition(s,Ld),n.getVertexPosition(l,wd);let d=oS(n,e,t,i,Td,Ld,wd,Sv);if(d){let p=new B;Ao.getBarycoord(Sv,Td,Ld,wd,p),o&&(d.uv=Ao.getInterpolatedAttribute(o,c,s,l,p,new pt)),a&&(d.uv1=Ao.getInterpolatedAttribute(a,c,s,l,p,new pt)),r&&(d.normal=Ao.getInterpolatedAttribute(r,c,s,l,p,new B),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let u={a:c,b:s,c:l,normal:new B,materialIndex:0};Ao.getNormal(Td,Ld,wd,u.normal),d.face=u,d.barycoord=p}return d}var o0=class extends Hi{constructor(e=null,t=1,i=1,o,a,r,c,s,l=un,d=un,p,u){super(null,r,c,s,l,d,o,a,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $f=new B,aS=new B,rS=new We,Ai=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let o=$f.subVectors(i,t).cross(aS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta($f),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||rS.getNormalMatrix(e),o=this.coplanarPoint($f).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ma=new wr,cS=new pt(.5,.5),Nd=new B,Ar=class{constructor(e=new Ai,t=new Ai,i=new Ai,o=new Ai,a=new Ai,r=new Ai){this.planes=[e,t,i,o,a,r]}set(e,t,i,o,a,r){let c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(o),c[4].copy(a),c[5].copy(r),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi,i=!1){let o=this.planes,a=e.elements,r=a[0],c=a[1],s=a[2],l=a[3],d=a[4],p=a[5],u=a[6],f=a[7],g=a[8],C=a[9],h=a[10],m=a[11],_=a[12],S=a[13],E=a[14],b=a[15];if(o[0].setComponents(l-r,f-d,m-g,b-_).normalize(),o[1].setComponents(l+r,f+d,m+g,b+_).normalize(),o[2].setComponents(l+c,f+p,m+C,b+S).normalize(),o[3].setComponents(l-c,f-p,m-C,b-S).normalize(),i)o[4].setComponents(s,u,h,E).normalize(),o[5].setComponents(l-s,f-u,m-h,b-E).normalize();else if(o[4].setComponents(l-s,f-u,m-h,b-E).normalize(),t===gi)o[5].setComponents(l+s,f+u,m+h,b+E).normalize();else if(t===Ir)o[5].setComponents(s,u,h,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ma.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ma.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ma)}intersectsSprite(e){Ma.center.set(0,0,0);let t=cS.distanceTo(e.center);return Ma.radius=.7071067811865476+t,Ma.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ma)}intersectsSphere(e){let t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let o=t[i];if(Nd.x=o.normal.x>0?e.max.x:e.min.x,Nd.y=o.normal.y>0?e.max.y:e.min.y,Nd.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Nd)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Jc=class extends Hi{constructor(e=[],t=Ho,i,o,a,r,c,s,l,d){super(e,t,i,o,a,r,c,s,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fo=class extends Hi{constructor(e,t,i,o,a,r,c,s,l){super(e,t,i,o,a,r,c,s,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Bo=class extends Hi{constructor(e,t,i=_i,o,a,r,c=un,s=un,l,d=ji,p=1){if(d!==ji&&d!==qo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,o,a,r,c,s,d,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},a0=class extends Bo{constructor(e,t=_i,i=Ho,o,a,r=un,c=un,s,l=ji){let d={width:e,height:e,depth:1},p=[d,d,d,d,d,d];super(e,e,t,i,o,a,r,c,s,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Qc=class extends Hi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},vi=class n extends Pi{constructor(e=1,t=1,i=1,o=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:r};let c=this;o=Math.floor(o),a=Math.floor(a),r=Math.floor(r);let s=[],l=[],d=[],p=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,r,a,0),g("z","y","x",1,-1,i,t,-e,r,a,1),g("x","z","y",1,1,e,i,t,o,r,2),g("x","z","y",1,-1,e,i,-t,o,r,3),g("x","y","z",1,-1,e,t,i,o,a,4),g("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(s),this.setAttribute("position",new Qn(l,3)),this.setAttribute("normal",new Qn(d,3)),this.setAttribute("uv",new Qn(p,2));function g(C,h,m,_,S,E,b,F,T,v,x){let X=E/T,k=b/v,P=E/2,O=b/2,q=F/2,z=T+1,U=v+1,R=0,ie=0,Q=new B;for(let fe=0;fe<U;fe++){let ve=fe*k-O;for(let he=0;he<z;he++){let Ye=he*X-P;Q[C]=Ye*_,Q[h]=ve*S,Q[m]=q,l.push(Q.x,Q.y,Q.z),Q[C]=0,Q[h]=0,Q[m]=F>0?1:-1,d.push(Q.x,Q.y,Q.z),p.push(he/T),p.push(1-fe/v),R+=1}}for(let fe=0;fe<v;fe++)for(let ve=0;ve<T;ve++){let he=u+ve+z*fe,Ye=u+ve+z*(fe+1),Bt=u+(ve+1)+z*(fe+1),Nt=u+(ve+1)+z*fe;s.push(he,Ye,Nt),s.push(Ye,Bt,Nt),ie+=6}c.addGroup(f,ie,x),f+=ie,u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Po=class n extends Pi{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};let a=e/2,r=t/2,c=Math.floor(i),s=Math.floor(o),l=c+1,d=s+1,p=e/c,u=t/s,f=[],g=[],C=[],h=[];for(let m=0;m<d;m++){let _=m*u-r;for(let S=0;S<l;S++){let E=S*p-a;g.push(E,-_,0),C.push(0,0,1),h.push(S/c),h.push(1-m/s)}}for(let m=0;m<s;m++)for(let _=0;_<c;_++){let S=_+l*m,E=_+l*(m+1),b=_+1+l*(m+1),F=_+1+l*m;f.push(S,E,F),f.push(E,b,F)}this.setIndex(f),this.setAttribute("position",new Qn(g,3)),this.setAttribute("normal",new Qn(C,3)),this.setAttribute("uv",new Qn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var es=class extends po{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new st(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Fa(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let o=n[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Dn(n){let e={};for(let t=0;t<n.length;t++){let i=Fa(n[t]);for(let o in i)e[o]=i[o]}return e}function sS(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fm(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var pM={clone:Fa,merge:Dn},lS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Vn=class extends po{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lS,this.fragmentShader=dS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fa(e.uniforms),this.uniformsGroups=sS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let o in this.uniforms){let r=this.uniforms[o].value;r&&r.isTexture?t.uniforms[o]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[o]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[o]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[o]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[o]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[o]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[o]={type:"m4",value:r.toArray()}:t.uniforms[o]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},r0=class extends Vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Mi=class extends po{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Em,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jo,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var c0=class extends po{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},s0=class extends po{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Bd(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}var zo=class{constructor(e,t,i,o){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=o!==void 0?o:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,o=t[i],a=t[i-1];e:{t:{let r;n:{i:if(!(e<o)){for(let c=i+2;;){if(o===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(a=o,o=t[++i],e<o)break t}r=t.length;break n}if(!(e>=a)){let c=t[1];e<c&&(i=2,a=c);for(let s=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===s)break;if(o=a,a=t[--i-1],e>=a)break t}r=i,i=0;break n}break e}for(;i<r;){let c=i+r>>>1;e<t[c]?r=c:i=c+1}if(o=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(o===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,o)}return this.interpolate_(i,a,e,o)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,o=this.valueSize,a=e*o;for(let r=0;r!==o;++r)t[r]=i[a+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},l0=class extends zo{constructor(e,t,i,o){super(e,t,i,o),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kf,endingEnd:Kf}}intervalChanged_(e,t,i){let o=this.parameterPositions,a=e-2,r=e+1,c=o[a],s=o[r];if(c===void 0)switch(this.getSettings_().endingStart){case Jf:a=e,c=2*t-i;break;case Qf:a=o.length-2,c=t+o[a]-o[a+1];break;default:a=e,c=i}if(s===void 0)switch(this.getSettings_().endingEnd){case Jf:r=e,s=2*i-t;break;case Qf:r=1,s=i+o[1]-o[0];break;default:r=e-1,s=t}let l=(i-t)*.5,d=this.valueSize;this._weightPrev=l/(t-c),this._weightNext=l/(s-i),this._offsetPrev=a*d,this._offsetNext=r*d}interpolate_(e,t,i,o){let a=this.resultBuffer,r=this.sampleValues,c=this.valueSize,s=e*c,l=s-c,d=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(o-t),C=g*g,h=C*g,m=-u*h+2*u*C-u*g,_=(1+u)*h+(-1.5-2*u)*C+(-.5+u)*g+1,S=(-1-f)*h+(1.5+f)*C+.5*g,E=f*h-f*C;for(let b=0;b!==c;++b)a[b]=m*r[d+b]+_*r[l+b]+S*r[s+b]+E*r[p+b];return a}},d0=class extends zo{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e,t,i,o){let a=this.resultBuffer,r=this.sampleValues,c=this.valueSize,s=e*c,l=s-c,d=(i-t)/(o-t),p=1-d;for(let u=0;u!==c;++u)a[u]=r[l+u]*p+r[s+u]*d;return a}},u0=class extends zo{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e){return this.copySampleValue_(e-1)}},p0=class extends zo{interpolate_(e,t,i,o){let a=this.resultBuffer,r=this.sampleValues,c=this.valueSize,s=e*c,l=s-c,d=this.settings||this.DefaultSettings_,p=d.inTangents,u=d.outTangents;if(!p||!u){let C=(i-t)/(o-t),h=1-C;for(let m=0;m!==c;++m)a[m]=r[l+m]*h+r[s+m]*C;return a}let f=c*2,g=e-1;for(let C=0;C!==c;++C){let h=r[l+C],m=r[s+C],_=g*f+C*2,S=u[_],E=u[_+1],b=e*f+C*2,F=p[b],T=p[b+1],v=(i-t)/(o-t),x,X,k,P,O;for(let q=0;q<8;q++){x=v*v,X=x*v,k=1-v,P=k*k,O=P*k;let U=O*t+3*P*v*S+3*k*x*F+X*o-i;if(Math.abs(U)<1e-10)break;let R=3*P*(S-t)+6*k*v*(F-S)+3*x*(o-F);if(Math.abs(R)<1e-10)break;v=v-U/R,v=Math.max(0,Math.min(1,v))}a[C]=O*h+3*P*v*E+3*k*x*T+X*m}return a}},qn=class{constructor(e,t,i,o){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bd(t,this.TimeBufferType),this.values=Bd(i,this.ValueBufferType),this.setInterpolation(o||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Bd(e.times,Array),values:Bd(e.values,Array)};let o=e.getInterpolation();o!==e.DefaultInterpolation&&(i.interpolation=o)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new u0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new d0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new l0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new p0(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Vc:t=this.InterpolantFactoryMethodDiscrete;break;case Jd:t=this.InterpolantFactoryMethodLinear;break;case Od:t=this.InterpolantFactoryMethodSmooth;break;case Yf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Pe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vc;case this.InterpolantFactoryMethodLinear:return Jd;case this.InterpolantFactoryMethodSmooth:return Od;case this.InterpolantFactoryMethodBezier:return Yf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,o=t.length;i!==o;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,o=t.length;i!==o;++i)t[i]*=e}return this}trim(e,t){let i=this.times,o=i.length,a=0,r=o-1;for(;a!==o&&i[a]<e;)++a;for(;r!==-1&&i[r]>t;)--r;if(++r,a!==0||r!==o){a>=r&&(r=Math.max(r,1),a=r-1);let c=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*c,r*c)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Be("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,o=this.values,a=i.length;a===0&&(Be("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let c=0;c!==a;c++){let s=i[c];if(typeof s=="number"&&isNaN(s)){Be("KeyframeTrack: Time is not a valid number.",this,c,s),e=!1;break}if(r!==null&&r>s){Be("KeyframeTrack: Out of order keys.",this,c,s,r),e=!1;break}r=s}if(o!==void 0&&H5(o))for(let c=0,s=o.length;c!==s;++c){let l=o[c];if(isNaN(l)){Be("KeyframeTrack: Value is not a valid number.",this,c,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),o=this.getInterpolation()===Od,a=e.length-1,r=1;for(let c=1;c<a;++c){let s=!1,l=e[c],d=e[c+1];if(l!==d&&(c!==1||l!==e[0]))if(o)s=!0;else{let p=c*i,u=p-i,f=p+i;for(let g=0;g!==i;++g){let C=t[p+g];if(C!==t[u+g]||C!==t[f+g]){s=!0;break}}}if(s){if(c!==r){e[r]=e[c];let p=c*i,u=r*i;for(let f=0;f!==i;++f)t[u+f]=t[p+f]}++r}}if(a>0){e[r]=e[a];for(let c=a*i,s=r*i,l=0;l!==i;++l)t[s+l]=t[c+l];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,o=new i(this.name,e,t);return o.createInterpolant=this.createInterpolant,o}};qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Jd;var Oo=class extends qn{constructor(e,t,i){super(e,t,i)}};Oo.prototype.ValueTypeName="bool";Oo.prototype.ValueBufferType=Array;Oo.prototype.DefaultInterpolation=Vc;Oo.prototype.InterpolantFactoryMethodLinear=void 0;Oo.prototype.InterpolantFactoryMethodSmooth=void 0;var f0=class extends qn{constructor(e,t,i,o){super(e,t,i,o)}};f0.prototype.ValueTypeName="color";var m0=class extends qn{constructor(e,t,i,o){super(e,t,i,o)}};m0.prototype.ValueTypeName="number";var h0=class extends zo{constructor(e,t,i,o){super(e,t,i,o)}interpolate_(e,t,i,o){let a=this.resultBuffer,r=this.sampleValues,c=this.valueSize,s=(i-t)/(o-t),l=e*c;for(let d=l+c;l!==d;l+=4)Ni.slerpFlat(a,0,r,l-c,r,l,s);return a}},ts=class extends qn{constructor(e,t,i,o){super(e,t,i,o)}InterpolantFactoryMethodLinear(e){return new h0(this.times,this.values,this.getValueSize(),e)}};ts.prototype.ValueTypeName="quaternion";ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Uo=class extends qn{constructor(e,t,i){super(e,t,i)}};Uo.prototype.ValueTypeName="string";Uo.prototype.ValueBufferType=Array;Uo.prototype.DefaultInterpolation=Vc;Uo.prototype.InterpolantFactoryMethodLinear=void 0;Uo.prototype.InterpolantFactoryMethodSmooth=void 0;var g0=class extends qn{constructor(e,t,i,o){super(e,t,i,o)}};g0.prototype.ValueTypeName="vector";var Rr=class extends Bi{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Xf=new qt,kv=new B,Fv=new B,y0=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;kv.setFromMatrixPosition(e.matrixWorld),t.position.copy(kv),Fv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fv),t.updateMatrixWorld(),Xf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ir||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Pd=new B,zd=new Ni,wi=new B,ns=class extends Bi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pd,zd,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pd,zd,wi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Pd,zd,wi),wi.x===1&&wi.y===1&&wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pd,zd,wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wo=new B,Iv=new pt,bv=new pt,fn=class extends ns{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qd*2*Math.atan(Math.tan(Sf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){wo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wo.x,wo.y).multiplyScalar(-e/wo.z),wo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wo.x,wo.y).multiplyScalar(-e/wo.z)}getViewSize(e,t){return this.getViewBounds(e,Iv,bv),t.subVectors(bv,Iv)}setViewOffset(e,t,i,o,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sf*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o,r=this.view;if(this.view!==null&&this.view.enabled){let s=r.fullWidth,l=r.fullHeight;a+=r.offsetX*o/s,t-=r.offsetY*i/l,o*=r.width/s,i*=r.height/l}let c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var nm=class extends y0{constructor(){super(new fn(90,1,.5,500)),this.isPointLightShadow=!0}},jr=class extends Rr{constructor(e,t,i=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=o,this.shadow=new nm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Nr=class extends ns{constructor(e=-1,t=1,i=1,o=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2,a=i-e,r=i+e,c=o+t,s=o-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,r=a+l*this.view.width,c-=d*this.view.offsetY,s=c-d*this.view.height}this.projectionMatrix.makeOrthographic(a,r,c,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},im=class extends y0{constructor(){super(new Nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},is=class extends Rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bi.DEFAULT_UP),this.updateMatrix(),this.target=new Bi,this.shadow=new im}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},os=class extends Rr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Sr=-90,kr=1,v0=class extends Bi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let o=new fn(Sr,kr,e,t);o.layers=this.layers,this.add(o);let a=new fn(Sr,kr,e,t);a.layers=this.layers,this.add(a);let r=new fn(Sr,kr,e,t);r.layers=this.layers,this.add(r);let c=new fn(Sr,kr,e,t);c.layers=this.layers,this.add(c);let s=new fn(Sr,kr,e,t);s.layers=this.layers,this.add(s);let l=new fn(Sr,kr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,o,a,r,c,s]=t;for(let l of t)this.remove(l);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===Ir)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,r,c,s,l,d]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let C=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let h=!1;e.isWebGLRenderer===!0?h=e.state.buffers.depth.getReversed():h=e.reversedDepthBuffer,e.setRenderTarget(i,0,o),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,o),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,2,o),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,3,o),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,4,o),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=C,e.setRenderTarget(i,5,o),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(p,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},M0=class extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Im="\\[\\]\\.:\\/",uS=new RegExp("["+Im+"]","g"),bm="[^"+Im+"]",pS="[^"+Im.replace("\\.","")+"]",fS=/((?:WC+[\/:])*)/.source.replace("WC",bm),mS=/(WCOD+)?/.source.replace("WCOD",pS),hS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bm),gS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bm),yS=new RegExp("^"+fS+mS+hS+gS+"$"),vS=["material","materials","bones","map"],om=class{constructor(e,t,i){let o=i||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,o)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,o=this._bindings[i];o!==void 0&&o.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let o=this._targetGroup.nCachedObjects_,a=i.length;o!==a;++o)i[o].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Vt=(()=>{class n{constructor(t,i,o){this.path=i,this.parsedPath=o||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,o){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,o):new n(t,i,o)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(uS,"")}static parseTrackName(t){let i=yS.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let o={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=o.nodeName&&o.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let r=o.nodeName.substring(a+1);vS.indexOf(r)!==-1&&(o.nodeName=o.nodeName.substring(0,a),o.objectName=r)}if(o.propertyName===null||o.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return o}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let o=t.skeleton.getBoneByName(i);if(o!==void 0)return o}if(t.children){let o=function(r){for(let c=0;c<r.length;c++){let s=r[c];if(s.name===i||s.uuid===i)return s;let l=o(s.children);if(l)return l}return null},a=o(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let o=this.resolvedProperty;for(let a=0,r=o.length;a!==r;++a)t[i++]=o[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let o=this.resolvedProperty;for(let a=0,r=o.length;a!==r;++a)o[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let o=this.resolvedProperty;for(let a=0,r=o.length;a!==r;++a)o[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let o=this.resolvedProperty;for(let a=0,r=o.length;a!==r;++a)o[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,o=i.objectName,a=i.propertyName,r=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(o){let d=i.objectIndex;switch(o){case"materials":if(!t.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Be("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Be("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let p=0;p<t.length;p++)if(t[p].name===d){d=p;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Be("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Be("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[o]===void 0){Be("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[o]}if(d!==void 0){if(t[d]===void 0){Be("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[d]}}let c=t[a];if(c===void 0){let d=i.nodeName;Be("PropertyBinding: Trying to update property for track: "+d+"."+a+" but it wasn't found.",t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Be("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=r}else c.fromArray!==void 0&&c.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(l=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=om,n})();Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var RB=new Float32Array(1);function Tm(n,e,t,i){let o=MS(i);switch(t){case _m:return n*e;case xm:return n*e/o.components*o.byteLength;case F0:return n*e/o.components*o.byteLength;case ka:return n*e*2/o.components*o.byteLength;case I0:return n*e*2/o.components*o.byteLength;case Dm:return n*e*3/o.components*o.byteLength;case ei:return n*e*4/o.components*o.byteLength;case b0:return n*e*4/o.components*o.byteLength;case ss:case ls:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ds:case us:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case L0:case A0:return Math.max(n,16)*Math.max(e,8)/4;case T0:case w0:return Math.max(n,8)*Math.max(e,8)/2;case R0:case j0:case B0:case P0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case N0:case z0:case O0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case U0:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case H0:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case V0:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case q0:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case G0:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case W0:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case $0:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case X0:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Z0:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Y0:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case K0:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case J0:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Q0:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case eu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case tu:case nu:case iu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ou:case au:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ru:case cu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function MS(n){switch(n){case Rn:case ym:return{byteLength:1,components:1};case Pr:case vm:case Ui:return{byteLength:2,components:1};case S0:case k0:return{byteLength:2,components:4};case _i:case E0:case Di:return{byteLength:4,components:1};case Mm:case Cm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="183");function jM(){let n=null,e=!1,t=null,i=null;function o(a,r){t(a,r),i=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function _S(n){let e=new WeakMap;function t(c,s){let l=c.array,d=c.usage,p=l.byteLength,u=n.createBuffer();n.bindBuffer(s,u),n.bufferData(s,l,d),c.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)c.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:c.version,size:p}}function i(c,s,l){let d=s.array,p=s.updateRanges;if(n.bindBuffer(l,c),p.length===0)n.bufferSubData(l,0,d);else{p.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<p.length;f++){let g=p[u],C=p[f];C.start<=g.start+g.count+1?g.count=Math.max(g.count,C.start+C.count-g.start):(++u,p[u]=C)}p.length=u+1;for(let f=0,g=p.length;f<g;f++){let C=p[f];n.bufferSubData(l,C.start*d.BYTES_PER_ELEMENT,d,C.start,C.count)}s.clearUpdateRanges()}s.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let s=e.get(c);s&&(n.deleteBuffer(s.buffer),e.delete(c))}function r(c,s){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){let d=e.get(c);(!d||d.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}let l=e.get(c);if(l===void 0)e.set(c,t(c,s));else if(l.version<c.version){if(l.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,c,s),l.version=c.version}}return{get:o,remove:a,update:r}}var DS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xS=`#ifdef USE_ALPHAHASH
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
#endif`,ES=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IS=`#ifdef USE_AOMAP
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
#endif`,bS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,TS=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,LS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,RS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jS=`#ifdef USE_IRIDESCENCE
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
#endif`,NS=`#ifdef USE_BUMPMAP
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
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,PS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,US=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,HS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,VS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,GS=`#define PI 3.141592653589793
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
} // validated`,WS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$S=`vec3 transformedNormal = objectNormal;
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
#endif`,XS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,KS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JS="gl_FragColor = linearToOutputTexel( gl_FragColor );",QS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e3=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,t3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,n3=`#ifdef USE_ENVMAP
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
#endif`,i3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o3=`#ifdef USE_ENVMAP
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
#endif`,a3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l3=`#ifdef USE_GRADIENTMAP
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
}`,d3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f3=`uniform bool receiveShadow;
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
#endif`,m3=`#ifdef USE_ENVMAP
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
#endif`,h3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M3=`PhysicalMaterial material;
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
#endif`,C3=`uniform sampler2D dfgLUT;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
}`,_3=`
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
#endif`,D3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,x3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,L3=`#if defined( USE_POINTS_UV )
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
#endif`,w3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B3=`#ifdef USE_MORPHTARGETS
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
#endif`,P3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,O3=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,q3=`#ifdef USE_NORMALMAP
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
#endif`,G3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,W3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y3=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,K3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ek=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tk=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nk=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ik=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ok=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ak=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rk=`float getShadowMask() {
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
}`,ck=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sk=`#ifdef USE_SKINNING
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
#endif`,lk=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dk=`#ifdef USE_SKINNING
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
#endif`,uk=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pk=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fk=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mk=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hk=`#ifdef USE_TRANSMISSION
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
#endif`,gk=`#ifdef USE_TRANSMISSION
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
#endif`,yk=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vk=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mk=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ck=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_k=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dk=`uniform sampler2D t2D;
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
}`,xk=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ek=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sk=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kk=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fk=`#include <common>
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
}`,Ik=`#if DEPTH_PACKING == 3200
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
}`,bk=`#define DISTANCE
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
}`,Tk=`#define DISTANCE
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
}`,Lk=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wk=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ak=`uniform float scale;
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
}`,Rk=`uniform vec3 diffuse;
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
}`,jk=`#include <common>
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
}`,Nk=`uniform vec3 diffuse;
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
}`,Bk=`#define LAMBERT
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
}`,Pk=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,zk=`#define MATCAP
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
}`,Ok=`#define MATCAP
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
}`,Uk=`#define NORMAL
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
}`,Hk=`#define NORMAL
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
}`,Vk=`#define PHONG
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
}`,qk=`#define PHONG
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Gk=`#define STANDARD
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
}`,Wk=`#define STANDARD
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
}`,$k=`#define TOON
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
}`,Xk=`#define TOON
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
}`,Zk=`uniform float size;
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
}`,Yk=`uniform vec3 diffuse;
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
}`,Kk=`#include <common>
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
}`,Jk=`uniform vec3 color;
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
	#include <premultiplied_alpha_fragment>
}`,Qk=`uniform float rotation;
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
}`,eF=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:DS,alphahash_pars_fragment:xS,alphamap_fragment:ES,alphamap_pars_fragment:SS,alphatest_fragment:kS,alphatest_pars_fragment:FS,aomap_fragment:IS,aomap_pars_fragment:bS,batching_pars_vertex:TS,batching_vertex:LS,begin_vertex:wS,beginnormal_vertex:AS,bsdfs:RS,iridescence_fragment:jS,bumpmap_pars_fragment:NS,clipping_planes_fragment:BS,clipping_planes_pars_fragment:PS,clipping_planes_pars_vertex:zS,clipping_planes_vertex:OS,color_fragment:US,color_pars_fragment:HS,color_pars_vertex:VS,color_vertex:qS,common:GS,cube_uv_reflection_fragment:WS,defaultnormal_vertex:$S,displacementmap_pars_vertex:XS,displacementmap_vertex:ZS,emissivemap_fragment:YS,emissivemap_pars_fragment:KS,colorspace_fragment:JS,colorspace_pars_fragment:QS,envmap_fragment:e3,envmap_common_pars_fragment:t3,envmap_pars_fragment:n3,envmap_pars_vertex:i3,envmap_physical_pars_fragment:m3,envmap_vertex:o3,fog_vertex:a3,fog_pars_vertex:r3,fog_fragment:c3,fog_pars_fragment:s3,gradientmap_pars_fragment:l3,lightmap_pars_fragment:d3,lights_lambert_fragment:u3,lights_lambert_pars_fragment:p3,lights_pars_begin:f3,lights_toon_fragment:h3,lights_toon_pars_fragment:g3,lights_phong_fragment:y3,lights_phong_pars_fragment:v3,lights_physical_fragment:M3,lights_physical_pars_fragment:C3,lights_fragment_begin:_3,lights_fragment_maps:D3,lights_fragment_end:x3,logdepthbuf_fragment:E3,logdepthbuf_pars_fragment:S3,logdepthbuf_pars_vertex:k3,logdepthbuf_vertex:F3,map_fragment:I3,map_pars_fragment:b3,map_particle_fragment:T3,map_particle_pars_fragment:L3,metalnessmap_fragment:w3,metalnessmap_pars_fragment:A3,morphinstance_vertex:R3,morphcolor_vertex:j3,morphnormal_vertex:N3,morphtarget_pars_vertex:B3,morphtarget_vertex:P3,normal_fragment_begin:z3,normal_fragment_maps:O3,normal_pars_fragment:U3,normal_pars_vertex:H3,normal_vertex:V3,normalmap_pars_fragment:q3,clearcoat_normal_fragment_begin:G3,clearcoat_normal_fragment_maps:W3,clearcoat_pars_fragment:$3,iridescence_pars_fragment:X3,opaque_fragment:Z3,packing:Y3,premultiplied_alpha_fragment:K3,project_vertex:J3,dithering_fragment:Q3,dithering_pars_fragment:ek,roughnessmap_fragment:tk,roughnessmap_pars_fragment:nk,shadowmap_pars_fragment:ik,shadowmap_pars_vertex:ok,shadowmap_vertex:ak,shadowmask_pars_fragment:rk,skinbase_vertex:ck,skinning_pars_vertex:sk,skinning_vertex:lk,skinnormal_vertex:dk,specularmap_fragment:uk,specularmap_pars_fragment:pk,tonemapping_fragment:fk,tonemapping_pars_fragment:mk,transmission_fragment:hk,transmission_pars_fragment:gk,uv_pars_fragment:yk,uv_pars_vertex:vk,uv_vertex:Mk,worldpos_vertex:Ck,background_vert:_k,background_frag:Dk,backgroundCube_vert:xk,backgroundCube_frag:Ek,cube_vert:Sk,cube_frag:kk,depth_vert:Fk,depth_frag:Ik,distance_vert:bk,distance_frag:Tk,equirect_vert:Lk,equirect_frag:wk,linedashed_vert:Ak,linedashed_frag:Rk,meshbasic_vert:jk,meshbasic_frag:Nk,meshlambert_vert:Bk,meshlambert_frag:Pk,meshmatcap_vert:zk,meshmatcap_frag:Ok,meshnormal_vert:Uk,meshnormal_frag:Hk,meshphong_vert:Vk,meshphong_frag:qk,meshphysical_vert:Gk,meshphysical_frag:Wk,meshtoon_vert:$k,meshtoon_frag:Xk,points_vert:Zk,points_frag:Yk,shadow_vert:Kk,shadow_frag:Jk,sprite_vert:Qk,sprite_frag:eF},de={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},qi={basic:{uniforms:Dn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Dn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Dn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Dn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Dn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new st(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Dn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Dn([de.points,de.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Dn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Dn([de.common,de.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Dn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Dn([de.sprite,de.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:Dn([de.common,de.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:Dn([de.lights,de.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};qi.physical={uniforms:Dn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var du={r:0,b:0,g:0},Ia=new jo,tF=new qt;function nF(n,e,t,i,o,a){let r=new st(0),c=o===!0?0:1,s,l,d=null,p=0,u=null;function f(_){let S=_.isScene===!0?_.background:null;if(S&&S.isTexture){let E=_.backgroundBlurriness>0;S=e.get(S,E)}return S}function g(_){let S=!1,E=f(_);E===null?h(r,c):E&&E.isColor&&(h(E,1),S=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function C(_,S){let E=f(S);E&&(E.isCubeTexture||E.mapping===rs)?(l===void 0&&(l=new on(new vi(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:Fa(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,F,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Ia.copy(S.backgroundRotation),Ia.x*=-1,Ia.y*=-1,Ia.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ia.y*=-1,Ia.z*=-1),l.material.uniforms.envMap.value=E,l.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(tF.makeRotationFromEuler(Ia)),l.material.toneMapped=lt.getTransfer(E.colorSpace)!==Mt,(d!==E||p!==E.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=E,p=E.version,u=n.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(s===void 0&&(s=new on(new Po(2,2),new Vn({name:"BackgroundMaterial",uniforms:Fa(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:lo,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),s.geometry.deleteAttribute("normal"),Object.defineProperty(s.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(s)),s.material.uniforms.t2D.value=E,s.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,s.material.toneMapped=lt.getTransfer(E.colorSpace)!==Mt,E.matrixAutoUpdate===!0&&E.updateMatrix(),s.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||p!==E.version||u!==n.toneMapping)&&(s.material.needsUpdate=!0,d=E,p=E.version,u=n.toneMapping),s.layers.enableAll(),_.unshift(s,s.geometry,s.material,0,0,null))}function h(_,S){_.getRGB(du,Fm(n)),t.buffers.color.setClear(du.r,du.g,du.b,S,a)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),s!==void 0&&(s.geometry.dispose(),s.material.dispose(),s=void 0)}return{getClearColor:function(){return r},setClearColor:function(_,S=1){r.set(_),c=S,h(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,h(r,c)},render:g,addToRenderList:C,dispose:m}}function iF(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},o=u(null),a=o,r=!1;function c(k,P,O,q,z){let U=!1,R=p(k,q,O,P);a!==R&&(a=R,l(a.object)),U=f(k,q,O,z),U&&g(k,q,O,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(U||r)&&(r=!1,E(k,P,O,q),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function s(){return n.createVertexArray()}function l(k){return n.bindVertexArray(k)}function d(k){return n.deleteVertexArray(k)}function p(k,P,O,q){let z=q.wireframe===!0,U=i[P.id];U===void 0&&(U={},i[P.id]=U);let R=k.isInstancedMesh===!0?k.id:0,ie=U[R];ie===void 0&&(ie={},U[R]=ie);let Q=ie[O.id];Q===void 0&&(Q={},ie[O.id]=Q);let fe=Q[z];return fe===void 0&&(fe=u(s()),Q[z]=fe),fe}function u(k){let P=[],O=[],q=[];for(let z=0;z<t;z++)P[z]=0,O[z]=0,q[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:q,object:k,attributes:{},index:null}}function f(k,P,O,q){let z=a.attributes,U=P.attributes,R=0,ie=O.getAttributes();for(let Q in ie)if(ie[Q].location>=0){let ve=z[Q],he=U[Q];if(he===void 0&&(Q==="instanceMatrix"&&k.instanceMatrix&&(he=k.instanceMatrix),Q==="instanceColor"&&k.instanceColor&&(he=k.instanceColor)),ve===void 0||ve.attribute!==he||he&&ve.data!==he.data)return!0;R++}return a.attributesNum!==R||a.index!==q}function g(k,P,O,q){let z={},U=P.attributes,R=0,ie=O.getAttributes();for(let Q in ie)if(ie[Q].location>=0){let ve=U[Q];ve===void 0&&(Q==="instanceMatrix"&&k.instanceMatrix&&(ve=k.instanceMatrix),Q==="instanceColor"&&k.instanceColor&&(ve=k.instanceColor));let he={};he.attribute=ve,ve&&ve.data&&(he.data=ve.data),z[Q]=he,R++}a.attributes=z,a.attributesNum=R,a.index=q}function C(){let k=a.newAttributes;for(let P=0,O=k.length;P<O;P++)k[P]=0}function h(k){m(k,0)}function m(k,P){let O=a.newAttributes,q=a.enabledAttributes,z=a.attributeDivisors;O[k]=1,q[k]===0&&(n.enableVertexAttribArray(k),q[k]=1),z[k]!==P&&(n.vertexAttribDivisor(k,P),z[k]=P)}function _(){let k=a.newAttributes,P=a.enabledAttributes;for(let O=0,q=P.length;O<q;O++)P[O]!==k[O]&&(n.disableVertexAttribArray(O),P[O]=0)}function S(k,P,O,q,z,U,R){R===!0?n.vertexAttribIPointer(k,P,O,z,U):n.vertexAttribPointer(k,P,O,q,z,U)}function E(k,P,O,q){C();let z=q.attributes,U=O.getAttributes(),R=P.defaultAttributeValues;for(let ie in U){let Q=U[ie];if(Q.location>=0){let fe=z[ie];if(fe===void 0&&(ie==="instanceMatrix"&&k.instanceMatrix&&(fe=k.instanceMatrix),ie==="instanceColor"&&k.instanceColor&&(fe=k.instanceColor)),fe!==void 0){let ve=fe.normalized,he=fe.itemSize,Ye=e.get(fe);if(Ye===void 0)continue;let Bt=Ye.buffer,Nt=Ye.type,Z=Ye.bytesPerElement,re=Nt===n.INT||Nt===n.UNSIGNED_INT||fe.gpuType===E0;if(fe.isInterleavedBufferAttribute){let le=fe.data,$e=le.stride,Ae=fe.offset;if(le.isInstancedInterleavedBuffer){for(let Ue=0;Ue<Q.locationSize;Ue++)m(Q.location+Ue,le.meshPerAttribute);k.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ue=0;Ue<Q.locationSize;Ue++)h(Q.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,Bt);for(let Ue=0;Ue<Q.locationSize;Ue++)S(Q.location+Ue,he/Q.locationSize,Nt,ve,$e*Z,(Ae+he/Q.locationSize*Ue)*Z,re)}else{if(fe.isInstancedBufferAttribute){for(let le=0;le<Q.locationSize;le++)m(Q.location+le,fe.meshPerAttribute);k.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let le=0;le<Q.locationSize;le++)h(Q.location+le);n.bindBuffer(n.ARRAY_BUFFER,Bt);for(let le=0;le<Q.locationSize;le++)S(Q.location+le,he/Q.locationSize,Nt,ve,he*Z,he/Q.locationSize*le*Z,re)}}else if(R!==void 0){let ve=R[ie];if(ve!==void 0)switch(ve.length){case 2:n.vertexAttrib2fv(Q.location,ve);break;case 3:n.vertexAttrib3fv(Q.location,ve);break;case 4:n.vertexAttrib4fv(Q.location,ve);break;default:n.vertexAttrib1fv(Q.location,ve)}}}}_()}function b(){x();for(let k in i){let P=i[k];for(let O in P){let q=P[O];for(let z in q){let U=q[z];for(let R in U)d(U[R].object),delete U[R];delete q[z]}}delete i[k]}}function F(k){if(i[k.id]===void 0)return;let P=i[k.id];for(let O in P){let q=P[O];for(let z in q){let U=q[z];for(let R in U)d(U[R].object),delete U[R];delete q[z]}}delete i[k.id]}function T(k){for(let P in i){let O=i[P];for(let q in O){let z=O[q];if(z[k.id]===void 0)continue;let U=z[k.id];for(let R in U)d(U[R].object),delete U[R];delete z[k.id]}}}function v(k){for(let P in i){let O=i[P],q=k.isInstancedMesh===!0?k.id:0,z=O[q];if(z!==void 0){for(let U in z){let R=z[U];for(let ie in R)d(R[ie].object),delete R[ie];delete z[U]}delete O[q],Object.keys(O).length===0&&delete i[P]}}}function x(){X(),r=!0,a!==o&&(a=o,l(a.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:x,resetDefaultState:X,dispose:b,releaseStatesOfGeometry:F,releaseStatesOfObject:v,releaseStatesOfProgram:T,initAttributes:C,enableAttribute:h,disableUnusedAttributes:_}}function oF(n,e,t){let i;function o(l){i=l}function a(l,d){n.drawArrays(i,l,d),t.update(d,i,1)}function r(l,d,p){p!==0&&(n.drawArraysInstanced(i,l,d,p),t.update(d,i,p))}function c(l,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,d,0,p);let f=0;for(let g=0;g<p;g++)f+=d[g];t.update(f,i,1)}function s(l,d,p,u){if(p===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)r(l[g],d[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,d,0,u,0,p);let g=0;for(let C=0;C<p;C++)g+=d[C]*u[C];t.update(g,i,1)}}this.setMode=o,this.render=a,this.renderInstances=r,this.renderMultiDraw=c,this.renderMultiDrawInstances=s}function aF(n,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function r(T){return!(T!==ei&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(T){let v=T===Ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Rn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Di&&!v)}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",d=s(l);d!==l&&(Pe("WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);let p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=n.getParameter(n.MAX_TEXTURE_SIZE),h=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),_=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),F=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:s,textureFormatReadable:r,textureTypeReadable:c,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:C,maxCubemapSize:h,maxAttributes:m,maxVertexUniforms:_,maxVaryings:S,maxFragmentUniforms:E,maxSamples:b,samples:F}}function rF(n){let e=this,t=null,i=0,o=!1,a=!1,r=new Ai,c=new We,s={value:null,needsUpdate:!1};this.uniform=s,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let f=p.length!==0||u||i!==0||o;return o=u,i=p.length,f},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,u){t=d(p,u,0)},this.setState=function(p,u,f){let g=p.clippingPlanes,C=p.clipIntersection,h=p.clipShadows,m=n.get(p);if(!o||g===null||g.length===0||a&&!h)a?d(null):l();else{let _=a?0:i,S=_*4,E=m.clippingState||null;s.value=E,E=d(g,u,S,f);for(let b=0;b!==S;++b)E[b]=t[b];m.clippingState=E,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=_}};function l(){s.value!==t&&(s.value=t,s.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,u,f,g){let C=p!==null?p.length:0,h=null;if(C!==0){if(h=s.value,g!==!0||h===null){let m=f+C*4,_=u.matrixWorldInverse;c.getNormalMatrix(_),(h===null||h.length<m)&&(h=new Float32Array(m));for(let S=0,E=f;S!==C;++S,E+=4)r.copy(p[S]).applyMatrix4(_,c),r.normal.toArray(h,E),h[E+3]=r.constant}s.value=h,s.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,h}}var Go=4,fM=[.125,.215,.35,.446,.526,.582],Ta=20,cF=256,fs=new Nr,mM=new st,Lm=null,wm=0,Am=0,Rm=!1,sF=new B,pu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,o=100,a={}){let{size:r=256,position:c=sF}=a;Lm=this._renderer.getRenderTarget(),wm=this._renderer.getActiveCubeFace(),Am=this._renderer.getActiveMipmapLevel(),Rm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,o,s,c),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Lm,wm,Am),this._renderer.xr.enabled=Rm,e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ho||e.mapping===Sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lm=this._renderer.getRenderTarget(),wm=this._renderer.getActiveCubeFace(),Am=this._renderer.getActiveMipmapLevel(),Rm=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Ui,format:ei,colorSpace:xa,depthBuffer:!1},o=hM(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hM(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lF(a)),this._blurMaterial=uF(a,e,t),this._ggxMaterial=dF(a,e,t)}return o}_compileMaterial(e){let t=new on(new Pi,e);this._renderer.compile(t,fs)}_sceneToCubeUV(e,t,i,o,a){let s=new fn(90,1,t,i),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,f=p.toneMapping;p.getClearColor(mM),p.toneMapping=Ci,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(o),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new on(new vi,new Ea({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1})));let C=this._backgroundBox,h=C.material,m=!1,_=e.background;_?_.isColor&&(h.color.copy(_),e.background=null,m=!0):(h.color.copy(mM),m=!0);for(let S=0;S<6;S++){let E=S%3;E===0?(s.up.set(0,l[S],0),s.position.set(a.x,a.y,a.z),s.lookAt(a.x+d[S],a.y,a.z)):E===1?(s.up.set(0,0,l[S]),s.position.set(a.x,a.y,a.z),s.lookAt(a.x,a.y+d[S],a.z)):(s.up.set(0,l[S],0),s.position.set(a.x,a.y,a.z),s.lookAt(a.x,a.y,a.z+d[S]));let b=this._cubeSize;Or(o,E*b,S>2?b:0,b,b),p.setRenderTarget(o),m&&p.render(C,s),p.render(e,s)}p.toneMapping=f,p.autoClear=u,e.background=_}_textureToCubeUV(e,t){let i=this._renderer,o=e.mapping===Ho||e.mapping===Sa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=yM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gM());let a=o?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let c=a.uniforms;c.envMap.value=e;let s=this._cubeSize;Or(t,0,0,3*s,2*s),i.setRenderTarget(t),i.render(r,fs)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let o=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,c=this._lodMeshes[i];c.material=r;let s=r.uniforms,l=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-d*d),u=0+l*1.25,f=p*u,{_lodMax:g}=this,C=this._sizeLods[i],h=3*C*(i>g-Go?i-g+Go:0),m=4*(this._cubeSize-C);s.envMap.value=e.texture,s.roughness.value=f,s.mipInt.value=g-t,Or(a,h,m,3*C,2*C),o.setRenderTarget(a),o.render(c,fs),s.envMap.value=a.texture,s.roughness.value=0,s.mipInt.value=g-i,Or(e,h,m,3*C,2*C),o.setRenderTarget(e),o.render(c,fs)}_blur(e,t,i,o,a){let r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,o,"latitudinal",a),this._halfBlur(r,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,r,c){let s=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&Be("blur direction must be either latitudinal or longitudinal!");let d=3,p=this._lodMeshes[o];p.material=l;let u=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*Ta-1),C=a/g,h=isFinite(a)?1+Math.floor(d*C):Ta;h>Ta&&Pe(`sigmaRadians, ${a}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${Ta}`);let m=[],_=0;for(let T=0;T<Ta;++T){let v=T/C,x=Math.exp(-v*v/2);m.push(x),T===0?_+=x:T<h&&(_+=2*x)}for(let T=0;T<m.length;T++)m[T]=m[T]/_;u.envMap.value=e.texture,u.samples.value=h,u.weights.value=m,u.latitudinal.value=r==="latitudinal",c&&(u.poleAxis.value=c);let{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-i;let E=this._sizeLods[o],b=3*E*(o>S-Go?o-S+Go:0),F=4*(this._cubeSize-E);Or(t,b,F,3*E,2*E),s.setRenderTarget(t),s.render(p,fs)}};function lF(n){let e=[],t=[],i=[],o=n,a=n-Go+1+fM.length;for(let r=0;r<a;r++){let c=Math.pow(2,o);e.push(c);let s=1/c;r>n-Go?s=fM[r-n+Go-1]:r===0&&(s=0),t.push(s);let l=1/(c-2),d=-l,p=1+l,u=[d,d,p,d,p,p,d,d,p,p,d,p],f=6,g=6,C=3,h=2,m=1,_=new Float32Array(C*g*f),S=new Float32Array(h*g*f),E=new Float32Array(m*g*f);for(let F=0;F<f;F++){let T=F%3*2/3-1,v=F>2?0:-1,x=[T,v,0,T+2/3,v,0,T+2/3,v+1,0,T,v,0,T+2/3,v+1,0,T,v+1,0];_.set(x,C*g*F),S.set(u,h*g*F);let X=[F,F,F,F,F,F];E.set(X,m*g*F)}let b=new Pi;b.setAttribute("position",new Un(_,C)),b.setAttribute("uv",new Un(S,h)),b.setAttribute("faceIndex",new Un(E,m)),i.push(new on(b,null)),o>Go&&o--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function hM(n,e,t){let i=new Hn(n,e,t);return i.texture.mapping=rs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Or(n,e,t,i,o){n.viewport.set(e,t,i,o),n.scissor.set(e,t,i,o)}function dF(n,e,t){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cF,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hu(),fragmentShader:`

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

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function uF(n,e,t){let i=new Float32Array(Ta),o=new B(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Ta,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function gM(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function yM(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function hu(){return`

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
	`}var fu=class extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new Jc(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new vi(5,5,5),a=new Vn({name:"CubemapFromEquirect",uniforms:Fa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Fn,blending:Oi});a.uniforms.tEquirect.value=t;let r=new on(o,a),c=t.minFilter;return t.minFilter===Vo&&(t.minFilter=mn),new v0(1,10,this).update(e,r),t.minFilter=c,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,i=!0,o=!0){let a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,o);e.setRenderTarget(a)}};function pF(n){let e=new WeakMap,t=new WeakMap,i=null;function o(u,f=!1){return u==null?null:f?r(u):a(u)}function a(u){if(u&&u.isTexture){let f=u.mapping;if(f===_0||f===D0)if(e.has(u)){let g=e.get(u).texture;return c(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let C=new fu(g.height);return C.fromEquirectangularTexture(n,u),e.set(u,C),u.addEventListener("dispose",l),c(C.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let f=u.mapping,g=f===_0||f===D0,C=f===Ho||f===Sa;if(g||C){let h=t.get(u),m=h!==void 0?h.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return i===null&&(i=new pu(n)),h=g?i.fromEquirectangular(u,h):i.fromCubemap(u,h),h.texture.pmremVersion=u.pmremVersion,t.set(u,h),h.texture;if(h!==void 0)return h.texture;{let _=u.image;return g&&_&&_.height>0||C&&_&&s(_)?(i===null&&(i=new pu(n)),h=g?i.fromEquirectangular(u):i.fromCubemap(u),h.texture.pmremVersion=u.pmremVersion,t.set(u,h),u.addEventListener("dispose",d),h.texture):null}}}return u}function c(u,f){return f===_0?u.mapping=Ho:f===D0&&(u.mapping=Sa),u}function s(u){let f=0,g=6;for(let C=0;C<g;C++)u[C]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(u){let f=u.target;f.removeEventListener("dispose",d);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:o,dispose:p}}function fF(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let o=n.getExtension(i);return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let o=t(i);return o===null&&Wc("WebGLRenderer: "+i+" extension not supported."),o}}}function mF(n,e,t,i){let o={},a=new WeakMap;function r(p){let u=p.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",r),delete o[u.id];let f=a.get(u);f&&(e.remove(f),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function c(p,u){return o[u.id]===!0||(u.addEventListener("dispose",r),o[u.id]=!0,t.memory.geometries++),u}function s(p){let u=p.attributes;for(let f in u)e.update(u[f],n.ARRAY_BUFFER)}function l(p){let u=[],f=p.index,g=p.attributes.position,C=0;if(g===void 0)return;if(f!==null){let _=f.array;C=f.version;for(let S=0,E=_.length;S<E;S+=3){let b=_[S+0],F=_[S+1],T=_[S+2];u.push(b,F,F,T,T,b)}}else{let _=g.array;C=g.version;for(let S=0,E=_.length/3-1;S<E;S+=3){let b=S+0,F=S+1,T=S+2;u.push(b,F,F,T,T,b)}}let h=new(g.count>=65535?Kc:Yc)(u,1);h.version=C;let m=a.get(p);m&&e.remove(m),a.set(p,h)}function d(p){let u=a.get(p);if(u){let f=p.index;f!==null&&u.version<f.version&&l(p)}else l(p);return a.get(p)}return{get:c,update:s,getWireframeAttribute:d}}function hF(n,e,t){let i;function o(u){i=u}let a,r;function c(u){a=u.type,r=u.bytesPerElement}function s(u,f){n.drawElements(i,f,a,u*r),t.update(f,i,1)}function l(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,a,u*r,g),t.update(f,i,g))}function d(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,a,u,0,g);let h=0;for(let m=0;m<g;m++)h+=f[m];t.update(h,i,1)}function p(u,f,g,C){if(g===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<u.length;m++)l(u[m]/r,f[m],C[m]);else{h.multiDrawElementsInstancedWEBGL(i,f,0,a,u,0,C,0,g);let m=0;for(let _=0;_<g;_++)m+=f[_]*C[_];t.update(m,i,1)}}this.setMode=o,this.setIndex=c,this.render=s,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function gF(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,c){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=c*(a/3);break;case n.LINES:t.lines+=c*(a/2);break;case n.LINE_STRIP:t.lines+=c*(a-1);break;case n.LINE_LOOP:t.lines+=c*a;break;case n.POINTS:t.points+=c*a;break;default:Be("WebGLInfo: Unknown draw mode:",r);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function yF(n,e,t){let i=new WeakMap,o=new Ot;function a(r,c,s){let l=r.morphTargetInfluences,d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,p=d!==void 0?d.length:0,u=i.get(c);if(u===void 0||u.count!==p){let X=function(){v.dispose(),i.delete(c),c.removeEventListener("dispose",X)};var f=X;u!==void 0&&u.texture.dispose();let g=c.morphAttributes.position!==void 0,C=c.morphAttributes.normal!==void 0,h=c.morphAttributes.color!==void 0,m=c.morphAttributes.position||[],_=c.morphAttributes.normal||[],S=c.morphAttributes.color||[],E=0;g===!0&&(E=1),C===!0&&(E=2),h===!0&&(E=3);let b=c.attributes.position.count*E,F=1;b>e.maxTextureSize&&(F=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let T=new Float32Array(b*F*4*p),v=new $c(T,b,F,p);v.type=Di,v.needsUpdate=!0;let x=E*4;for(let k=0;k<p;k++){let P=m[k],O=_[k],q=S[k],z=b*F*4*k;for(let U=0;U<P.count;U++){let R=U*x;g===!0&&(o.fromBufferAttribute(P,U),T[z+R+0]=o.x,T[z+R+1]=o.y,T[z+R+2]=o.z,T[z+R+3]=0),C===!0&&(o.fromBufferAttribute(O,U),T[z+R+4]=o.x,T[z+R+5]=o.y,T[z+R+6]=o.z,T[z+R+7]=0),h===!0&&(o.fromBufferAttribute(q,U),T[z+R+8]=o.x,T[z+R+9]=o.y,T[z+R+10]=o.z,T[z+R+11]=q.itemSize===4?o.w:1)}}u={count:p,texture:v,size:new pt(b,F)},i.set(c,u),c.addEventListener("dispose",X)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)s.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let g=0;for(let h=0;h<l.length;h++)g+=l[h];let C=c.morphTargetsRelative?1:1-g;s.getUniforms().setValue(n,"morphTargetBaseInfluence",C),s.getUniforms().setValue(n,"morphTargetInfluences",l)}s.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),s.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:a}}function vF(n,e,t,i,o){let a=new WeakMap;function r(l){let d=o.render.frame,p=l.geometry,u=e.get(l,p);if(a.get(u)!==d&&(e.update(u),a.set(u,d)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),a.get(l)!==d&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),a.set(l,d))),l.isSkinnedMesh){let f=l.skeleton;a.get(f)!==d&&(f.update(),a.set(f,d))}return u}function c(){a=new WeakMap}function s(l){let d=l.target;d.removeEventListener("dispose",s),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:r,dispose:c}}var MF={[dm]:"LINEAR_TONE_MAPPING",[um]:"REINHARD_TONE_MAPPING",[pm]:"CINEON_TONE_MAPPING",[fm]:"ACES_FILMIC_TONE_MAPPING",[hm]:"AGX_TONE_MAPPING",[gm]:"NEUTRAL_TONE_MAPPING",[mm]:"CUSTOM_TONE_MAPPING"};function CF(n,e,t,i,o){let a=new Hn(e,t,{type:n,depthBuffer:i,stencilBuffer:o}),r=new Hn(e,t,{type:Ui,depthBuffer:!1,stencilBuffer:!1}),c=new Pi;c.setAttribute("position",new Qn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Qn([0,2,0,0,2,0],2));let s=new r0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new on(c,s),d=new Nr(-1,1,1,-1,0,1),p=null,u=null,f=!1,g,C=null,h=[],m=!1;this.setSize=function(_,S){a.setSize(_,S),r.setSize(_,S);for(let E=0;E<h.length;E++){let b=h[E];b.setSize&&b.setSize(_,S)}},this.setEffects=function(_){h=_,m=h.length>0&&h[0].isRenderPass===!0;let S=a.width,E=a.height;for(let b=0;b<h.length;b++){let F=h[b];F.setSize&&F.setSize(S,E)}},this.begin=function(_,S){if(f||_.toneMapping===Ci&&h.length===0)return!1;if(C=S,S!==null){let E=S.width,b=S.height;(a.width!==E||a.height!==b)&&this.setSize(E,b)}return m===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=Ci,!0},this.hasRenderPass=function(){return m},this.end=function(_,S){_.toneMapping=g,f=!0;let E=a,b=r;for(let F=0;F<h.length;F++){let T=h[F];if(T.enabled!==!1&&(T.render(_,b,E,S),T.needsSwap!==!1)){let v=E;E=b,b=v}}if(p!==_.outputColorSpace||u!==_.toneMapping){p=_.outputColorSpace,u=_.toneMapping,s.defines={},lt.getTransfer(p)===Mt&&(s.defines.SRGB_TRANSFER="");let F=MF[u];F&&(s.defines[F]=""),s.needsUpdate=!0}s.uniforms.tDiffuse.value=E.texture,_.setRenderTarget(C),_.render(l,d),C=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){a.dispose(),r.dispose(),c.dispose(),s.dispose()}}var NM=new Hi,Bm=new Bo(1,1),BM=new $c,PM=new n0,zM=new Jc,vM=[],MM=[],CM=new Float32Array(16),_M=new Float32Array(9),DM=new Float32Array(4);function Hr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let o=e*t,a=vM[o];if(a===void 0&&(a=new Float32Array(o),vM[o]=a),e!==0){i.toArray(a,0);for(let r=1,c=0;r!==e;++r)c+=t,n[r].toArray(a,c)}return a}function an(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function rn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function gu(n,e){let t=MM[e];t===void 0&&(t=new Int32Array(e),MM[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function _F(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function DF(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2fv(this.addr,e),rn(t,e)}}function xF(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;n.uniform3fv(this.addr,e),rn(t,e)}}function EF(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4fv(this.addr,e),rn(t,e)}}function SF(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(an(t,i))return;DM.set(i),n.uniformMatrix2fv(this.addr,!1,DM),rn(t,i)}}function kF(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(an(t,i))return;_M.set(i),n.uniformMatrix3fv(this.addr,!1,_M),rn(t,i)}}function FF(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(an(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(an(t,i))return;CM.set(i),n.uniformMatrix4fv(this.addr,!1,CM),rn(t,i)}}function IF(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function bF(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2iv(this.addr,e),rn(t,e)}}function TF(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3iv(this.addr,e),rn(t,e)}}function LF(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4iv(this.addr,e),rn(t,e)}}function wF(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function AF(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;n.uniform2uiv(this.addr,e),rn(t,e)}}function RF(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;n.uniform3uiv(this.addr,e),rn(t,e)}}function jF(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;n.uniform4uiv(this.addr,e),rn(t,e)}}function NF(n,e,t){let i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(Bm.compareFunction=t.isReversedDepthBuffer()?lu:su,a=Bm):a=NM,t.setTexture2D(e||a,o)}function BF(n,e,t){let i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||PM,o)}function PF(n,e,t){let i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||zM,o)}function zF(n,e,t){let i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||BM,o)}function OF(n){switch(n){case 5126:return _F;case 35664:return DF;case 35665:return xF;case 35666:return EF;case 35674:return SF;case 35675:return kF;case 35676:return FF;case 5124:case 35670:return IF;case 35667:case 35671:return bF;case 35668:case 35672:return TF;case 35669:case 35673:return LF;case 5125:return wF;case 36294:return AF;case 36295:return RF;case 36296:return jF;case 35678:case 36198:case 36298:case 36306:case 35682:return NF;case 35679:case 36299:case 36307:return BF;case 35680:case 36300:case 36308:case 36293:return PF;case 36289:case 36303:case 36311:case 36292:return zF}}function UF(n,e){n.uniform1fv(this.addr,e)}function HF(n,e){let t=Hr(e,this.size,2);n.uniform2fv(this.addr,t)}function VF(n,e){let t=Hr(e,this.size,3);n.uniform3fv(this.addr,t)}function qF(n,e){let t=Hr(e,this.size,4);n.uniform4fv(this.addr,t)}function GF(n,e){let t=Hr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function WF(n,e){let t=Hr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $F(n,e){let t=Hr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function XF(n,e){n.uniform1iv(this.addr,e)}function ZF(n,e){n.uniform2iv(this.addr,e)}function YF(n,e){n.uniform3iv(this.addr,e)}function KF(n,e){n.uniform4iv(this.addr,e)}function JF(n,e){n.uniform1uiv(this.addr,e)}function QF(n,e){n.uniform2uiv(this.addr,e)}function eI(n,e){n.uniform3uiv(this.addr,e)}function tI(n,e){n.uniform4uiv(this.addr,e)}function nI(n,e,t){let i=this.cache,o=e.length,a=gu(t,o);an(i,a)||(n.uniform1iv(this.addr,a),rn(i,a));let r;this.type===n.SAMPLER_2D_SHADOW?r=Bm:r=NM;for(let c=0;c!==o;++c)t.setTexture2D(e[c]||r,a[c])}function iI(n,e,t){let i=this.cache,o=e.length,a=gu(t,o);an(i,a)||(n.uniform1iv(this.addr,a),rn(i,a));for(let r=0;r!==o;++r)t.setTexture3D(e[r]||PM,a[r])}function oI(n,e,t){let i=this.cache,o=e.length,a=gu(t,o);an(i,a)||(n.uniform1iv(this.addr,a),rn(i,a));for(let r=0;r!==o;++r)t.setTextureCube(e[r]||zM,a[r])}function aI(n,e,t){let i=this.cache,o=e.length,a=gu(t,o);an(i,a)||(n.uniform1iv(this.addr,a),rn(i,a));for(let r=0;r!==o;++r)t.setTexture2DArray(e[r]||BM,a[r])}function rI(n){switch(n){case 5126:return UF;case 35664:return HF;case 35665:return VF;case 35666:return qF;case 35674:return GF;case 35675:return WF;case 35676:return $F;case 5124:case 35670:return XF;case 35667:case 35671:return ZF;case 35668:case 35672:return YF;case 35669:case 35673:return KF;case 5125:return JF;case 36294:return QF;case 36295:return eI;case 36296:return tI;case 35678:case 36198:case 36298:case 36306:case 35682:return nI;case 35679:case 36299:case 36307:return iI;case 35680:case 36300:case 36308:case 36293:return oI;case 36289:case 36303:case 36311:case 36292:return aI}}var Pm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=OF(t.type)}},zm=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rI(t.type)}},Om=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let o=this.seq;for(let a=0,r=o.length;a!==r;++a){let c=o[a];c.setValue(e,t[c.id],i)}}},jm=/(\w+)(\])?(\[|\.)?/g;function xM(n,e){n.seq.push(e),n.map[e.id]=e}function cI(n,e,t){let i=n.name,o=i.length;for(jm.lastIndex=0;;){let a=jm.exec(i),r=jm.lastIndex,c=a[1],s=a[2]==="]",l=a[3];if(s&&(c=c|0),l===void 0||l==="["&&r+2===o){xM(t,l===void 0?new Pm(c,n,e):new zm(c,n,e));break}else{let p=t.map[c];p===void 0&&(p=new Om(c),xM(t,p)),t=p}}}var Ur=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let c=e.getActiveUniform(t,r),s=e.getUniformLocation(t,c.name);cI(c,s,this)}let o=[],a=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(r):a.push(r);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,i,o){let a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){let o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,r=t.length;a!==r;++a){let c=t[a],s=i[c.id];s.needsUpdate!==!1&&c.setValue(e,s.value,o)}}static seqWithValue(e,t){let i=[];for(let o=0,a=e.length;o!==a;++o){let r=e[o];r.id in t&&i.push(r)}return i}};function EM(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var sI=37297,lI=0;function dI(n,e){let t=n.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=o;r<a;r++){let c=r+1;i.push(`${c===e?">":" "} ${c}: ${t[r]}`)}return i.join(`
`)}var SM=new We;function uI(n){lt._getMatrix(SM,lt.workingColorSpace,n);let e=`mat3( ${SM.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case qc:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function kM(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let c=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+dI(n.getShaderSource(e),c)}else return a}function pI(n,e){let t=uI(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var fI={[dm]:"Linear",[um]:"Reinhard",[pm]:"Cineon",[fm]:"ACESFilmic",[hm]:"AgX",[gm]:"Neutral",[mm]:"Custom"};function mI(n,e){let t=fI[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var uu=new B;function hI(){lt.getLuminanceCoefficients(uu);let n=uu.x.toFixed(4),e=uu.y.toFixed(4),t=uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gI(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function yI(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vI(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){let a=n.getActiveAttrib(e,o),r=a.name,c=1;a.type===n.FLOAT_MAT2&&(c=2),a.type===n.FLOAT_MAT3&&(c=3),a.type===n.FLOAT_MAT4&&(c=4),t[r]={type:a.type,location:n.getAttribLocation(e,r),locationSize:c}}return t}function hs(n){return n!==""}function FM(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function IM(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var MI=/^[ \t]*#include +<([\w\d./]+)>/gm;function Um(n){return n.replace(MI,_I)}var CI=new Map;function _I(n,e){let t=Ke[e];if(t===void 0){let i=CI.get(e);if(i!==void 0)t=Ke[i],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Um(t)}var DI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bM(n){return n.replace(DI,xI)}function xI(n,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function TM(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var EI={[as]:"SHADOWMAP_TYPE_PCF",[Br]:"SHADOWMAP_TYPE_VSM"};function SI(n){return EI[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var kI={[Ho]:"ENVMAP_TYPE_CUBE",[Sa]:"ENVMAP_TYPE_CUBE",[rs]:"ENVMAP_TYPE_CUBE_UV"};function FI(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":kI[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var II={[Sa]:"ENVMAP_MODE_REFRACTION"};function bI(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":II[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var TI={[lm]:"ENVMAP_BLENDING_MULTIPLY",[Yv]:"ENVMAP_BLENDING_MIX",[Kv]:"ENVMAP_BLENDING_ADD"};function LI(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":TI[n.combine]||"ENVMAP_BLENDING_NONE"}function wI(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function AI(n,e,t,i){let o=n.getContext(),a=t.defines,r=t.vertexShader,c=t.fragmentShader,s=SI(t),l=FI(t),d=bI(t),p=LI(t),u=wI(t),f=gI(t),g=yI(a),C=o.createProgram(),h,m,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hs).join(`
`),h.length>0&&(h+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(hs).join(`
`),m.length>0&&(m+=`
`)):(h=[TM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+s:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),m=[TM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+s:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Ci?mI("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,pI("linearToOutputTexel",t.outputColorSpace),hI(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(hs).join(`
`)),r=Um(r),r=FM(r,t),r=IM(r,t),c=Um(c),c=FM(c,t),c=IM(c,t),r=bM(r),c=bM(c),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,m=["#define varying in",t.glslVersion===Sm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=_+h+r,E=_+m+c,b=EM(o,o.VERTEX_SHADER,S),F=EM(o,o.FRAGMENT_SHADER,E);o.attachShader(C,b),o.attachShader(C,F),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function T(k){if(n.debug.checkShaderErrors){let P=o.getProgramInfoLog(C)||"",O=o.getShaderInfoLog(b)||"",q=o.getShaderInfoLog(F)||"",z=P.trim(),U=O.trim(),R=q.trim(),ie=!0,Q=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,C,b,F);else{let fe=kM(o,b,"vertex"),ve=kM(o,F,"fragment");Be("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+z+`
`+fe+`
`+ve)}else z!==""?Pe("WebGLProgram: Program Info Log:",z):(U===""||R==="")&&(Q=!1);Q&&(k.diagnostics={runnable:ie,programLog:z,vertexShader:{log:U,prefix:h},fragmentShader:{log:R,prefix:m}})}o.deleteShader(b),o.deleteShader(F),v=new Ur(o,C),x=vI(o,C)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let x;this.getAttributes=function(){return x===void 0&&T(this),x};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=o.getProgramParameter(C,sI)),X},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lI++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=b,this.fragmentShader=F,this}var RI=0,Hm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(o)===!1&&(r.add(o),o.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Vm(e),t.set(e,i)),i}},Vm=class{constructor(e){this.id=RI++,this.code=e,this.usedTimes=0}};function jI(n,e,t,i,o,a){let r=new Xc,c=new Hm,s=new Set,l=[],d=new Map,p=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return s.add(v),v===0?"uv":`uv${v}`}function C(v,x,X,k,P){let O=k.fog,q=P.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?k.environment:null,U=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,R=e.get(v.envMap||z,U),ie=R&&R.mapping===rs?R.image.height:null,Q=f[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&Pe("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let fe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ve=fe!==void 0?fe.length:0,he=0;q.morphAttributes.position!==void 0&&(he=1),q.morphAttributes.normal!==void 0&&(he=2),q.morphAttributes.color!==void 0&&(he=3);let Ye,Bt,Nt,Z;if(Q){let _t=qi[Q];Ye=_t.vertexShader,Bt=_t.fragmentShader}else Ye=v.vertexShader,Bt=v.fragmentShader,c.update(v),Nt=c.getVertexShaderID(v),Z=c.getFragmentShaderID(v);let re=n.getRenderTarget(),le=n.state.buffers.depth.getReversed(),$e=P.isInstancedMesh===!0,Ae=P.isBatchedMesh===!0,Ue=!!v.map,cn=!!v.matcap,dt=!!R,Ct=!!v.aoMap,Tt=!!v.lightMap,Je=!!v.bumpMap,Gt=!!v.normalMap,I=!!v.displacementMap,Kt=!!v.emissiveMap,gt=!!v.metalnessMap,At=!!v.roughnessMap,Ee=v.anisotropy>0,D=v.clearcoat>0,y=v.dispersion>0,w=v.iridescence>0,$=v.sheen>0,K=v.transmission>0,G=Ee&&!!v.anisotropyMap,Me=D&&!!v.clearcoatMap,ce=D&&!!v.clearcoatNormalMap,Te=D&&!!v.clearcoatRoughnessMap,je=w&&!!v.iridescenceMap,te=w&&!!v.iridescenceThicknessMap,oe=$&&!!v.sheenColorMap,Ce=$&&!!v.sheenRoughnessMap,De=!!v.specularMap,me=!!v.specularColorMap,Qe=!!v.specularIntensityMap,L=K&&!!v.transmissionMap,se=K&&!!v.thicknessMap,ae=!!v.gradientMap,ye=!!v.alphaMap,ne=v.alphaTest>0,V=!!v.alphaHash,_e=!!v.extensions,He=Ci;v.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(He=n.toneMapping);let Rt={shaderID:Q,shaderType:v.type,shaderName:v.name,vertexShader:Ye,fragmentShader:Bt,defines:v.defines,customVertexShaderID:Nt,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Ae,batchingColor:Ae&&P._colorsTexture!==null,instancing:$e,instancingColor:$e&&P.instanceColor!==null,instancingMorph:$e&&P.morphTexture!==null,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:xa,alphaToCoverage:!!v.alphaToCoverage,map:Ue,matcap:cn,envMap:dt,envMapMode:dt&&R.mapping,envMapCubeUVHeight:ie,aoMap:Ct,lightMap:Tt,bumpMap:Je,normalMap:Gt,displacementMap:I,emissiveMap:Kt,normalMapObjectSpace:Gt&&v.normalMapType===eM,normalMapTangentSpace:Gt&&v.normalMapType===Em,metalnessMap:gt,roughnessMap:At,anisotropy:Ee,anisotropyMap:G,clearcoat:D,clearcoatMap:Me,clearcoatNormalMap:ce,clearcoatRoughnessMap:Te,dispersion:y,iridescence:w,iridescenceMap:je,iridescenceThicknessMap:te,sheen:$,sheenColorMap:oe,sheenRoughnessMap:Ce,specularMap:De,specularColorMap:me,specularIntensityMap:Qe,transmission:K,transmissionMap:L,thicknessMap:se,gradientMap:ae,opaque:v.transparent===!1&&v.blending===_a&&v.alphaToCoverage===!1,alphaMap:ye,alphaTest:ne,alphaHash:V,combine:v.combine,mapUv:Ue&&g(v.map.channel),aoMapUv:Ct&&g(v.aoMap.channel),lightMapUv:Tt&&g(v.lightMap.channel),bumpMapUv:Je&&g(v.bumpMap.channel),normalMapUv:Gt&&g(v.normalMap.channel),displacementMapUv:I&&g(v.displacementMap.channel),emissiveMapUv:Kt&&g(v.emissiveMap.channel),metalnessMapUv:gt&&g(v.metalnessMap.channel),roughnessMapUv:At&&g(v.roughnessMap.channel),anisotropyMapUv:G&&g(v.anisotropyMap.channel),clearcoatMapUv:Me&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:je&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:te&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&g(v.sheenRoughnessMap.channel),specularMapUv:De&&g(v.specularMap.channel),specularColorMapUv:me&&g(v.specularColorMap.channel),specularIntensityMapUv:Qe&&g(v.specularIntensityMap.channel),transmissionMapUv:L&&g(v.transmissionMap.channel),thicknessMapUv:se&&g(v.thicknessMap.channel),alphaMapUv:ye&&g(v.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Gt||Ee),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!q.attributes.uv&&(Ue||ye),fog:!!O,useFog:v.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||q.attributes.normal===void 0&&Gt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:le,skinning:P.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:he,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&X.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:Ue&&v.map.isVideoTexture===!0&&lt.getTransfer(v.map.colorSpace)===Mt,decodeVideoTextureEmissive:Kt&&v.emissiveMap.isVideoTexture===!0&&lt.getTransfer(v.emissiveMap.colorSpace)===Mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===zi,flipSided:v.side===Fn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_e&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&v.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Rt.vertexUv1s=s.has(1),Rt.vertexUv2s=s.has(2),Rt.vertexUv3s=s.has(3),s.clear(),Rt}function h(v){let x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(let X in v.defines)x.push(X),x.push(v.defines[X]);return v.isRawShaderMaterial===!1&&(m(x,v),_(x,v),x.push(n.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function m(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function _(v,x){r.disableAll(),x.instancing&&r.enable(0),x.instancingColor&&r.enable(1),x.instancingMorph&&r.enable(2),x.matcap&&r.enable(3),x.envMap&&r.enable(4),x.normalMapObjectSpace&&r.enable(5),x.normalMapTangentSpace&&r.enable(6),x.clearcoat&&r.enable(7),x.iridescence&&r.enable(8),x.alphaTest&&r.enable(9),x.vertexColors&&r.enable(10),x.vertexAlphas&&r.enable(11),x.vertexUv1s&&r.enable(12),x.vertexUv2s&&r.enable(13),x.vertexUv3s&&r.enable(14),x.vertexTangents&&r.enable(15),x.anisotropy&&r.enable(16),x.alphaHash&&r.enable(17),x.batching&&r.enable(18),x.dispersion&&r.enable(19),x.batchingColor&&r.enable(20),x.gradientMap&&r.enable(21),v.push(r.mask),r.disableAll(),x.fog&&r.enable(0),x.useFog&&r.enable(1),x.flatShading&&r.enable(2),x.logarithmicDepthBuffer&&r.enable(3),x.reversedDepthBuffer&&r.enable(4),x.skinning&&r.enable(5),x.morphTargets&&r.enable(6),x.morphNormals&&r.enable(7),x.morphColors&&r.enable(8),x.premultipliedAlpha&&r.enable(9),x.shadowMapEnabled&&r.enable(10),x.doubleSided&&r.enable(11),x.flipSided&&r.enable(12),x.useDepthPacking&&r.enable(13),x.dithering&&r.enable(14),x.transmission&&r.enable(15),x.sheen&&r.enable(16),x.opaque&&r.enable(17),x.pointsUvs&&r.enable(18),x.decodeVideoTexture&&r.enable(19),x.decodeVideoTextureEmissive&&r.enable(20),x.alphaToCoverage&&r.enable(21),v.push(r.mask)}function S(v){let x=f[v.type],X;if(x){let k=qi[x];X=pM.clone(k.uniforms)}else X=v.uniforms;return X}function E(v,x){let X=d.get(x);return X!==void 0?++X.usedTimes:(X=new AI(n,x,v,o),l.push(X),d.set(x,X)),X}function b(v){if(--v.usedTimes===0){let x=l.indexOf(v);l[x]=l[l.length-1],l.pop(),d.delete(v.cacheKey),v.destroy()}}function F(v){c.remove(v)}function T(){c.dispose()}return{getParameters:C,getProgramCacheKey:h,getUniforms:S,acquireProgram:E,releaseProgram:b,releaseShaderCache:F,programs:l,dispose:T}}function NI(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let c=n.get(r);return c===void 0&&(c={},n.set(r,c)),c}function i(r){n.delete(r)}function o(r,c,s){n.get(r)[c]=s}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:a}}function BI(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function LM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function wM(){let n=[],e=0,t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function r(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function c(u,f,g,C,h,m){let _=n[e];return _===void 0?(_={id:u.id,object:u,geometry:f,material:g,materialVariant:r(u),groupOrder:C,renderOrder:u.renderOrder,z:h,group:m},n[e]=_):(_.id=u.id,_.object=u,_.geometry=f,_.material=g,_.materialVariant=r(u),_.groupOrder=C,_.renderOrder=u.renderOrder,_.z=h,_.group=m),e++,_}function s(u,f,g,C,h,m){let _=c(u,f,g,C,h,m);g.transmission>0?i.push(_):g.transparent===!0?o.push(_):t.push(_)}function l(u,f,g,C,h,m){let _=c(u,f,g,C,h,m);g.transmission>0?i.unshift(_):g.transparent===!0?o.unshift(_):t.unshift(_)}function d(u,f){t.length>1&&t.sort(u||BI),i.length>1&&i.sort(f||LM),o.length>1&&o.sort(f||LM)}function p(){for(let u=e,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:s,unshift:l,finish:p,sort:d}}function PI(){let n=new WeakMap;function e(i,o){let a=n.get(i),r;return a===void 0?(r=new wM,n.set(i,[r])):o>=a.length?(r=new wM,a.push(r)):r=a[o],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function zI(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new st};break;case"SpotLight":t={position:new B,direction:new B,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function OI(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var UI=0;function HI(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function VI(n){let e=new zI,t=OI(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new B);let o=new B,a=new qt,r=new qt;function c(l){let d=0,p=0,u=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let f=0,g=0,C=0,h=0,m=0,_=0,S=0,E=0,b=0,F=0,T=0;l.sort(HI);for(let x=0,X=l.length;x<X;x++){let k=l[x],P=k.color,O=k.intensity,q=k.distance,z=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===ka?z=k.shadow.map.texture:z=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)d+=P.r*O,p+=P.g*O,u+=P.b*O;else if(k.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(k.sh.coefficients[U],O);T++}else if(k.isDirectionalLight){let U=e.get(k);if(U.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let R=k.shadow,ie=t.get(k);ie.shadowIntensity=R.intensity,ie.shadowBias=R.bias,ie.shadowNormalBias=R.normalBias,ie.shadowRadius=R.radius,ie.shadowMapSize=R.mapSize,i.directionalShadow[f]=ie,i.directionalShadowMap[f]=z,i.directionalShadowMatrix[f]=k.shadow.matrix,_++}i.directional[f]=U,f++}else if(k.isSpotLight){let U=e.get(k);U.position.setFromMatrixPosition(k.matrixWorld),U.color.copy(P).multiplyScalar(O),U.distance=q,U.coneCos=Math.cos(k.angle),U.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),U.decay=k.decay,i.spot[C]=U;let R=k.shadow;if(k.map&&(i.spotLightMap[b]=k.map,b++,R.updateMatrices(k),k.castShadow&&F++),i.spotLightMatrix[C]=R.matrix,k.castShadow){let ie=t.get(k);ie.shadowIntensity=R.intensity,ie.shadowBias=R.bias,ie.shadowNormalBias=R.normalBias,ie.shadowRadius=R.radius,ie.shadowMapSize=R.mapSize,i.spotShadow[C]=ie,i.spotShadowMap[C]=z,E++}C++}else if(k.isRectAreaLight){let U=e.get(k);U.color.copy(P).multiplyScalar(O),U.halfWidth.set(k.width*.5,0,0),U.halfHeight.set(0,k.height*.5,0),i.rectArea[h]=U,h++}else if(k.isPointLight){let U=e.get(k);if(U.color.copy(k.color).multiplyScalar(k.intensity),U.distance=k.distance,U.decay=k.decay,k.castShadow){let R=k.shadow,ie=t.get(k);ie.shadowIntensity=R.intensity,ie.shadowBias=R.bias,ie.shadowNormalBias=R.normalBias,ie.shadowRadius=R.radius,ie.shadowMapSize=R.mapSize,ie.shadowCameraNear=R.camera.near,ie.shadowCameraFar=R.camera.far,i.pointShadow[g]=ie,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=k.shadow.matrix,S++}i.point[g]=U,g++}else if(k.isHemisphereLight){let U=e.get(k);U.skyColor.copy(k.color).multiplyScalar(O),U.groundColor.copy(k.groundColor).multiplyScalar(O),i.hemi[m]=U,m++}}h>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=u;let v=i.hash;(v.directionalLength!==f||v.pointLength!==g||v.spotLength!==C||v.rectAreaLength!==h||v.hemiLength!==m||v.numDirectionalShadows!==_||v.numPointShadows!==S||v.numSpotShadows!==E||v.numSpotMaps!==b||v.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=C,i.rectArea.length=h,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=E+b-F,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=T,v.directionalLength=f,v.pointLength=g,v.spotLength=C,v.rectAreaLength=h,v.hemiLength=m,v.numDirectionalShadows=_,v.numPointShadows=S,v.numSpotShadows=E,v.numSpotMaps=b,v.numLightProbes=T,i.version=UI++)}function s(l,d){let p=0,u=0,f=0,g=0,C=0,h=d.matrixWorldInverse;for(let m=0,_=l.length;m<_;m++){let S=l[m];if(S.isDirectionalLight){let E=i.directional[p];E.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(h),p++}else if(S.isSpotLight){let E=i.spot[f];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(o),E.direction.transformDirection(h),f++}else if(S.isRectAreaLight){let E=i.rectArea[g];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(h),r.identity(),a.copy(S.matrixWorld),a.premultiply(h),r.extractRotation(a),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),g++}else if(S.isPointLight){let E=i.point[u];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(h),u++}else if(S.isHemisphereLight){let E=i.hemi[C];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(h),C++}}}return{setup:c,setupView:s,state:i}}function AM(n){let e=new VI(n),t=[],i=[];function o(d){l.camera=d,t.length=0,i.length=0}function a(d){t.push(d)}function r(d){i.push(d)}function c(){e.setup(t)}function s(d){e.setupView(t,d)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:l,setupLights:c,setupLightsView:s,pushLight:a,pushShadow:r}}function qI(n){let e=new WeakMap;function t(o,a=0){let r=e.get(o),c;return r===void 0?(c=new AM(n),e.set(o,[c])):a>=r.length?(c=new AM(n),r.push(c)):c=r[a],c}function i(){e=new WeakMap}return{get:t,dispose:i}}var GI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WI=`uniform sampler2D shadow_pass;
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
}`,$I=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],XI=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],RM=new qt,ms=new B,Nm=new B;function ZI(n,e,t){let i=new Ar,o=new pt,a=new pt,r=new Ot,c=new c0,s=new s0,l={},d=t.maxTextureSize,p={[lo]:Fn,[Fn]:lo,[zi]:zi},u=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:GI,fragmentShader:WI}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Pi;g.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let C=new on(g,u),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=as;let m=this.type;this.render=function(F,T,v){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||F.length===0)return;this.type===C0&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=as);let x=n.getRenderTarget(),X=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),P=n.state;P.setBlending(Oi),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let O=m!==this.type;O&&T.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(z=>z.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,z=F.length;q<z;q++){let U=F[q],R=U.shadow;if(R===void 0){Pe("WebGLShadowMap:",U,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;o.copy(R.mapSize);let ie=R.getFrameExtents();o.multiply(ie),a.copy(R.mapSize),(o.x>d||o.y>d)&&(o.x>d&&(a.x=Math.floor(d/ie.x),o.x=a.x*ie.x,R.mapSize.x=a.x),o.y>d&&(a.y=Math.floor(d/ie.y),o.y=a.y*ie.y,R.mapSize.y=a.y));let Q=n.state.buffers.depth.getReversed();if(R.camera._reversedDepth=Q,R.map===null||O===!0){if(R.map!==null&&(R.map.depthTexture!==null&&(R.map.depthTexture.dispose(),R.map.depthTexture=null),R.map.dispose()),this.type===Br){if(U.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}R.map=new Hn(o.x,o.y,{format:ka,type:Ui,minFilter:mn,magFilter:mn,generateMipmaps:!1}),R.map.texture.name=U.name+".shadowMap",R.map.depthTexture=new Bo(o.x,o.y,Di),R.map.depthTexture.name=U.name+".shadowMapDepth",R.map.depthTexture.format=ji,R.map.depthTexture.compareFunction=null,R.map.depthTexture.minFilter=un,R.map.depthTexture.magFilter=un}else U.isPointLight?(R.map=new fu(o.x),R.map.depthTexture=new a0(o.x,_i)):(R.map=new Hn(o.x,o.y),R.map.depthTexture=new Bo(o.x,o.y,_i)),R.map.depthTexture.name=U.name+".shadowMap",R.map.depthTexture.format=ji,this.type===as?(R.map.depthTexture.compareFunction=Q?lu:su,R.map.depthTexture.minFilter=mn,R.map.depthTexture.magFilter=mn):(R.map.depthTexture.compareFunction=null,R.map.depthTexture.minFilter=un,R.map.depthTexture.magFilter=un);R.camera.updateProjectionMatrix()}let fe=R.map.isWebGLCubeRenderTarget?6:1;for(let ve=0;ve<fe;ve++){if(R.map.isWebGLCubeRenderTarget)n.setRenderTarget(R.map,ve),n.clear();else{ve===0&&(n.setRenderTarget(R.map),n.clear());let he=R.getViewport(ve);r.set(a.x*he.x,a.y*he.y,a.x*he.z,a.y*he.w),P.viewport(r)}if(U.isPointLight){let he=R.camera,Ye=R.matrix,Bt=U.distance||he.far;Bt!==he.far&&(he.far=Bt,he.updateProjectionMatrix()),ms.setFromMatrixPosition(U.matrixWorld),he.position.copy(ms),Nm.copy(he.position),Nm.add($I[ve]),he.up.copy(XI[ve]),he.lookAt(Nm),he.updateMatrixWorld(),Ye.makeTranslation(-ms.x,-ms.y,-ms.z),RM.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),R._frustum.setFromProjectionMatrix(RM,he.coordinateSystem,he.reversedDepth)}else R.updateMatrices(U);i=R.getFrustum(),E(T,v,R.camera,U,this.type)}R.isPointLightShadow!==!0&&this.type===Br&&_(R,v),R.needsUpdate=!1}m=this.type,h.needsUpdate=!1,n.setRenderTarget(x,X,k)};function _(F,T){let v=e.update(C);u.defines.VSM_SAMPLES!==F.blurSamples&&(u.defines.VSM_SAMPLES=F.blurSamples,f.defines.VSM_SAMPLES=F.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Hn(o.x,o.y,{format:ka,type:Ui})),u.uniforms.shadow_pass.value=F.map.depthTexture,u.uniforms.resolution.value=F.mapSize,u.uniforms.radius.value=F.radius,n.setRenderTarget(F.mapPass),n.clear(),n.renderBufferDirect(T,null,v,u,C,null),f.uniforms.shadow_pass.value=F.mapPass.texture,f.uniforms.resolution.value=F.mapSize,f.uniforms.radius.value=F.radius,n.setRenderTarget(F.map),n.clear(),n.renderBufferDirect(T,null,v,f,C,null)}function S(F,T,v,x){let X=null,k=v.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(k!==void 0)X=k;else if(X=v.isPointLight===!0?s:c,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let P=X.uuid,O=T.uuid,q=l[P];q===void 0&&(q={},l[P]=q);let z=q[O];z===void 0&&(z=X.clone(),q[O]=z,T.addEventListener("dispose",b)),X=z}if(X.visible=T.visible,X.wireframe=T.wireframe,x===Br?X.side=T.shadowSide!==null?T.shadowSide:T.side:X.side=T.shadowSide!==null?T.shadowSide:p[T.side],X.alphaMap=T.alphaMap,X.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,X.map=T.map,X.clipShadows=T.clipShadows,X.clippingPlanes=T.clippingPlanes,X.clipIntersection=T.clipIntersection,X.displacementMap=T.displacementMap,X.displacementScale=T.displacementScale,X.displacementBias=T.displacementBias,X.wireframeLinewidth=T.wireframeLinewidth,X.linewidth=T.linewidth,v.isPointLight===!0&&X.isMeshDistanceMaterial===!0){let P=n.properties.get(X);P.light=v}return X}function E(F,T,v,x,X){if(F.visible===!1)return;if(F.layers.test(T.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&X===Br)&&(!F.frustumCulled||i.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,F.matrixWorld);let O=e.update(F),q=F.material;if(Array.isArray(q)){let z=O.groups;for(let U=0,R=z.length;U<R;U++){let ie=z[U],Q=q[ie.materialIndex];if(Q&&Q.visible){let fe=S(F,Q,x,X);F.onBeforeShadow(n,F,T,v,O,fe,ie),n.renderBufferDirect(v,null,O,fe,F,ie),F.onAfterShadow(n,F,T,v,O,fe,ie)}}}else if(q.visible){let z=S(F,q,x,X);F.onBeforeShadow(n,F,T,v,O,z,null),n.renderBufferDirect(v,null,O,z,F,null),F.onAfterShadow(n,F,T,v,O,z,null)}}let P=F.children;for(let O=0,q=P.length;O<q;O++)E(P[O],T,v,x,X)}function b(F){F.target.removeEventListener("dispose",b);for(let v in l){let x=l[v],X=F.target.uuid;X in x&&(x[X].dispose(),delete x[X])}}}function YI(n,e){function t(){let L=!1,se=new Ot,ae=null,ye=new Ot(0,0,0,0);return{setMask:function(ne){ae!==ne&&!L&&(n.colorMask(ne,ne,ne,ne),ae=ne)},setLocked:function(ne){L=ne},setClear:function(ne,V,_e,He,Rt){Rt===!0&&(ne*=He,V*=He,_e*=He),se.set(ne,V,_e,He),ye.equals(se)===!1&&(n.clearColor(ne,V,_e,He),ye.copy(se))},reset:function(){L=!1,ae=null,ye.set(-1,0,0,0)}}}function i(){let L=!1,se=!1,ae=null,ye=null,ne=null;return{setReversed:function(V){if(se!==V){let _e=e.get("EXT_clip_control");V?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),se=V;let He=ne;ne=null,this.setClear(He)}},getReversed:function(){return se},setTest:function(V){V?re(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(V){ae!==V&&!L&&(n.depthMask(V),ae=V)},setFunc:function(V){if(se&&(V=dM[V]),ye!==V){switch(V){case Vd:n.depthFunc(n.NEVER);break;case qd:n.depthFunc(n.ALWAYS);break;case Gd:n.depthFunc(n.LESS);break;case Da:n.depthFunc(n.LEQUAL);break;case Wd:n.depthFunc(n.EQUAL);break;case $d:n.depthFunc(n.GEQUAL);break;case Xd:n.depthFunc(n.GREATER);break;case Zd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ye=V}},setLocked:function(V){L=V},setClear:function(V){ne!==V&&(ne=V,se&&(V=1-V),n.clearDepth(V))},reset:function(){L=!1,ae=null,ye=null,ne=null,se=!1}}}function o(){let L=!1,se=null,ae=null,ye=null,ne=null,V=null,_e=null,He=null,Rt=null;return{setTest:function(_t){L||(_t?re(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(_t){se!==_t&&!L&&(n.stencilMask(_t),se=_t)},setFunc:function(_t,Gi,Wi){(ae!==_t||ye!==Gi||ne!==Wi)&&(n.stencilFunc(_t,Gi,Wi),ae=_t,ye=Gi,ne=Wi)},setOp:function(_t,Gi,Wi){(V!==_t||_e!==Gi||He!==Wi)&&(n.stencilOp(_t,Gi,Wi),V=_t,_e=Gi,He=Wi)},setLocked:function(_t){L=_t},setClear:function(_t){Rt!==_t&&(n.clearStencil(_t),Rt=_t)},reset:function(){L=!1,se=null,ae=null,ye=null,ne=null,V=null,_e=null,He=null,Rt=null}}}let a=new t,r=new i,c=new o,s=new WeakMap,l=new WeakMap,d={},p={},u=new WeakMap,f=[],g=null,C=!1,h=null,m=null,_=null,S=null,E=null,b=null,F=null,T=new st(0,0,0),v=0,x=!1,X=null,k=null,P=null,O=null,q=null,z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,R=0,ie=n.getParameter(n.VERSION);ie.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(ie)[1]),U=R>=1):ie.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),U=R>=2);let Q=null,fe={},ve=n.getParameter(n.SCISSOR_BOX),he=n.getParameter(n.VIEWPORT),Ye=new Ot().fromArray(ve),Bt=new Ot().fromArray(he);function Nt(L,se,ae,ye){let ne=new Uint8Array(4),V=n.createTexture();n.bindTexture(L,V),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _e=0;_e<ae;_e++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(se,0,n.RGBA,1,1,ye,0,n.RGBA,n.UNSIGNED_BYTE,ne):n.texImage2D(se+_e,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ne);return V}let Z={};Z[n.TEXTURE_2D]=Nt(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=Nt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=Nt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=Nt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),c.setClear(0),re(n.DEPTH_TEST),r.setFunc(Da),Je(!1),Gt(am),re(n.CULL_FACE),Ct(Oi);function re(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function le(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function $e(L,se){return p[L]!==se?(n.bindFramebuffer(L,se),p[L]=se,L===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=se),L===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=se),!0):!1}function Ae(L,se){let ae=f,ye=!1;if(L){ae=u.get(se),ae===void 0&&(ae=[],u.set(se,ae));let ne=L.textures;if(ae.length!==ne.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let V=0,_e=ne.length;V<_e;V++)ae[V]=n.COLOR_ATTACHMENT0+V;ae.length=ne.length,ye=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,ye=!0);ye&&n.drawBuffers(ae)}function Ue(L){return g!==L?(n.useProgram(L),g=L,!0):!1}let cn={[Ro]:n.FUNC_ADD,[Av]:n.FUNC_SUBTRACT,[Rv]:n.FUNC_REVERSE_SUBTRACT};cn[jv]=n.MIN,cn[Nv]=n.MAX;let dt={[Bv]:n.ZERO,[Pv]:n.ONE,[zv]:n.SRC_COLOR,[Ud]:n.SRC_ALPHA,[Gv]:n.SRC_ALPHA_SATURATE,[Vv]:n.DST_COLOR,[Uv]:n.DST_ALPHA,[Ov]:n.ONE_MINUS_SRC_COLOR,[Hd]:n.ONE_MINUS_SRC_ALPHA,[qv]:n.ONE_MINUS_DST_COLOR,[Hv]:n.ONE_MINUS_DST_ALPHA,[Wv]:n.CONSTANT_COLOR,[$v]:n.ONE_MINUS_CONSTANT_COLOR,[Xv]:n.CONSTANT_ALPHA,[Zv]:n.ONE_MINUS_CONSTANT_ALPHA};function Ct(L,se,ae,ye,ne,V,_e,He,Rt,_t){if(L===Oi){C===!0&&(le(n.BLEND),C=!1);return}if(C===!1&&(re(n.BLEND),C=!0),L!==wv){if(L!==h||_t!==x){if((m!==Ro||E!==Ro)&&(n.blendEquation(n.FUNC_ADD),m=Ro,E=Ro),_t)switch(L){case _a:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rm:n.blendFunc(n.ONE,n.ONE);break;case cm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sm:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Be("WebGLState: Invalid blending: ",L);break}else switch(L){case _a:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rm:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case cm:Be("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sm:Be("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Be("WebGLState: Invalid blending: ",L);break}_=null,S=null,b=null,F=null,T.set(0,0,0),v=0,h=L,x=_t}return}ne=ne||se,V=V||ae,_e=_e||ye,(se!==m||ne!==E)&&(n.blendEquationSeparate(cn[se],cn[ne]),m=se,E=ne),(ae!==_||ye!==S||V!==b||_e!==F)&&(n.blendFuncSeparate(dt[ae],dt[ye],dt[V],dt[_e]),_=ae,S=ye,b=V,F=_e),(He.equals(T)===!1||Rt!==v)&&(n.blendColor(He.r,He.g,He.b,Rt),T.copy(He),v=Rt),h=L,x=!1}function Tt(L,se){L.side===zi?le(n.CULL_FACE):re(n.CULL_FACE);let ae=L.side===Fn;se&&(ae=!ae),Je(ae),L.blending===_a&&L.transparent===!1?Ct(Oi):Ct(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),a.setMask(L.colorWrite);let ye=L.stencilWrite;c.setTest(ye),ye&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Kt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Je(L){X!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),X=L)}function Gt(L){L!==Tv?(re(n.CULL_FACE),L!==k&&(L===am?n.cullFace(n.BACK):L===Lv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),k=L}function I(L){L!==P&&(U&&n.lineWidth(L),P=L)}function Kt(L,se,ae){L?(re(n.POLYGON_OFFSET_FILL),(O!==se||q!==ae)&&(O=se,q=ae,r.getReversed()&&(se=-se),n.polygonOffset(se,ae))):le(n.POLYGON_OFFSET_FILL)}function gt(L){L?re(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function At(L){L===void 0&&(L=n.TEXTURE0+z-1),Q!==L&&(n.activeTexture(L),Q=L)}function Ee(L,se,ae){ae===void 0&&(Q===null?ae=n.TEXTURE0+z-1:ae=Q);let ye=fe[ae];ye===void 0&&(ye={type:void 0,texture:void 0},fe[ae]=ye),(ye.type!==L||ye.texture!==se)&&(Q!==ae&&(n.activeTexture(ae),Q=ae),n.bindTexture(L,se||Z[L]),ye.type=L,ye.texture=se)}function D(){let L=fe[Q];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(L){Be("WebGLState:",L)}}function w(){try{n.compressedTexImage3D(...arguments)}catch(L){Be("WebGLState:",L)}}function $(){try{n.texSubImage2D(...arguments)}catch(L){Be("WebGLState:",L)}}function K(){try{n.texSubImage3D(...arguments)}catch(L){Be("WebGLState:",L)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Be("WebGLState:",L)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Be("WebGLState:",L)}}function ce(){try{n.texStorage2D(...arguments)}catch(L){Be("WebGLState:",L)}}function Te(){try{n.texStorage3D(...arguments)}catch(L){Be("WebGLState:",L)}}function je(){try{n.texImage2D(...arguments)}catch(L){Be("WebGLState:",L)}}function te(){try{n.texImage3D(...arguments)}catch(L){Be("WebGLState:",L)}}function oe(L){Ye.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ye.copy(L))}function Ce(L){Bt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Bt.copy(L))}function De(L,se){let ae=l.get(se);ae===void 0&&(ae=new WeakMap,l.set(se,ae));let ye=ae.get(L);ye===void 0&&(ye=n.getUniformBlockIndex(se,L.name),ae.set(L,ye))}function me(L,se){let ye=l.get(se).get(L);s.get(se)!==ye&&(n.uniformBlockBinding(se,ye,L.__bindingPointIndex),s.set(se,ye))}function Qe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Q=null,fe={},p={},u=new WeakMap,f=[],g=null,C=!1,h=null,m=null,_=null,S=null,E=null,b=null,F=null,T=new st(0,0,0),v=0,x=!1,X=null,k=null,P=null,O=null,q=null,Ye.set(0,0,n.canvas.width,n.canvas.height),Bt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),r.reset(),c.reset()}return{buffers:{color:a,depth:r,stencil:c},enable:re,disable:le,bindFramebuffer:$e,drawBuffers:Ae,useProgram:Ue,setBlending:Ct,setMaterial:Tt,setFlipSided:Je,setCullFace:Gt,setLineWidth:I,setPolygonOffset:Kt,setScissorTest:gt,activeTexture:At,bindTexture:Ee,unbindTexture:D,compressedTexImage2D:y,compressedTexImage3D:w,texImage2D:je,texImage3D:te,updateUBOMapping:De,uniformBlockBinding:me,texStorage2D:ce,texStorage3D:Te,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:G,compressedTexSubImage3D:Me,scissor:oe,viewport:Ce,reset:Qe}}function KI(n,e,t,i,o,a,r){let c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,s=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,d=new WeakMap,p,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,y){return f?new OffscreenCanvas(D,y):Gc("canvas")}function C(D,y,w){let $=1,K=Ee(D);if((K.width>w||K.height>w)&&($=w/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let G=Math.floor($*K.width),Me=Math.floor($*K.height);p===void 0&&(p=g(G,Me));let ce=y?g(G,Me):p;return ce.width=G,ce.height=Me,ce.getContext("2d").drawImage(D,0,0,G,Me),Pe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+G+"x"+Me+")."),ce}else return"data"in D&&Pe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),D;return D}function h(D){return D.generateMipmaps}function m(D){n.generateMipmap(D)}function _(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(D,y,w,$,K=!1){if(D!==null){if(n[D]!==void 0)return n[D];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let G=y;if(y===n.RED&&(w===n.FLOAT&&(G=n.R32F),w===n.HALF_FLOAT&&(G=n.R16F),w===n.UNSIGNED_BYTE&&(G=n.R8)),y===n.RED_INTEGER&&(w===n.UNSIGNED_BYTE&&(G=n.R8UI),w===n.UNSIGNED_SHORT&&(G=n.R16UI),w===n.UNSIGNED_INT&&(G=n.R32UI),w===n.BYTE&&(G=n.R8I),w===n.SHORT&&(G=n.R16I),w===n.INT&&(G=n.R32I)),y===n.RG&&(w===n.FLOAT&&(G=n.RG32F),w===n.HALF_FLOAT&&(G=n.RG16F),w===n.UNSIGNED_BYTE&&(G=n.RG8)),y===n.RG_INTEGER&&(w===n.UNSIGNED_BYTE&&(G=n.RG8UI),w===n.UNSIGNED_SHORT&&(G=n.RG16UI),w===n.UNSIGNED_INT&&(G=n.RG32UI),w===n.BYTE&&(G=n.RG8I),w===n.SHORT&&(G=n.RG16I),w===n.INT&&(G=n.RG32I)),y===n.RGB_INTEGER&&(w===n.UNSIGNED_BYTE&&(G=n.RGB8UI),w===n.UNSIGNED_SHORT&&(G=n.RGB16UI),w===n.UNSIGNED_INT&&(G=n.RGB32UI),w===n.BYTE&&(G=n.RGB8I),w===n.SHORT&&(G=n.RGB16I),w===n.INT&&(G=n.RGB32I)),y===n.RGBA_INTEGER&&(w===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),w===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),w===n.UNSIGNED_INT&&(G=n.RGBA32UI),w===n.BYTE&&(G=n.RGBA8I),w===n.SHORT&&(G=n.RGBA16I),w===n.INT&&(G=n.RGBA32I)),y===n.RGB&&(w===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),w===n.UNSIGNED_INT_10F_11F_11F_REV&&(G=n.R11F_G11F_B10F)),y===n.RGBA){let Me=K?qc:lt.getTransfer($);w===n.FLOAT&&(G=n.RGBA32F),w===n.HALF_FLOAT&&(G=n.RGBA16F),w===n.UNSIGNED_BYTE&&(G=Me===Mt?n.SRGB8_ALPHA8:n.RGBA8),w===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),w===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function E(D,y){let w;return D?y===null||y===_i||y===zr?w=n.DEPTH24_STENCIL8:y===Di?w=n.DEPTH32F_STENCIL8:y===Pr&&(w=n.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===_i||y===zr?w=n.DEPTH_COMPONENT24:y===Di?w=n.DEPTH_COMPONENT32F:y===Pr&&(w=n.DEPTH_COMPONENT16),w}function b(D,y){return h(D)===!0||D.isFramebufferTexture&&D.minFilter!==un&&D.minFilter!==mn?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function F(D){let y=D.target;y.removeEventListener("dispose",F),v(y),y.isVideoTexture&&d.delete(y)}function T(D){let y=D.target;y.removeEventListener("dispose",T),X(y)}function v(D){let y=i.get(D);if(y.__webglInit===void 0)return;let w=D.source,$=u.get(w);if($){let K=$[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&x(D),Object.keys($).length===0&&u.delete(w)}i.remove(D)}function x(D){let y=i.get(D);n.deleteTexture(y.__webglTexture);let w=D.source,$=u.get(w);delete $[y.__cacheKey],r.memory.textures--}function X(D){let y=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let K=0;K<y.__webglFramebuffer[$].length;K++)n.deleteFramebuffer(y.__webglFramebuffer[$][K]);else n.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)n.deleteFramebuffer(y.__webglFramebuffer[$]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let w=D.textures;for(let $=0,K=w.length;$<K;$++){let G=i.get(w[$]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),r.memory.textures--),i.remove(w[$])}i.remove(D)}let k=0;function P(){k=0}function O(){let D=k;return D>=o.maxTextures&&Pe("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),k+=1,D}function q(D){let y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function z(D,y){let w=i.get(D);if(D.isVideoTexture&&gt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&w.__version!==D.version){let $=D.image;if($===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(w,D,y);return}}else D.isExternalTexture&&(w.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,w.__webglTexture,n.TEXTURE0+y)}function U(D,y){let w=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&w.__version!==D.version){Z(w,D,y);return}else D.isExternalTexture&&(w.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,w.__webglTexture,n.TEXTURE0+y)}function R(D,y){let w=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&w.__version!==D.version){Z(w,D,y);return}t.bindTexture(n.TEXTURE_3D,w.__webglTexture,n.TEXTURE0+y)}function ie(D,y){let w=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&w.__version!==D.version){re(w,D,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+y)}let Q={[Yd]:n.REPEAT,[Ri]:n.CLAMP_TO_EDGE,[Kd]:n.MIRRORED_REPEAT},fe={[un]:n.NEAREST,[Jv]:n.NEAREST_MIPMAP_NEAREST,[cs]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[x0]:n.LINEAR_MIPMAP_NEAREST,[Vo]:n.LINEAR_MIPMAP_LINEAR},ve={[tM]:n.NEVER,[rM]:n.ALWAYS,[nM]:n.LESS,[su]:n.LEQUAL,[iM]:n.EQUAL,[lu]:n.GEQUAL,[oM]:n.GREATER,[aM]:n.NOTEQUAL};function he(D,y){if(y.type===Di&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===mn||y.magFilter===x0||y.magFilter===cs||y.magFilter===Vo||y.minFilter===mn||y.minFilter===x0||y.minFilter===cs||y.minFilter===Vo)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,Q[y.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,Q[y.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,Q[y.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,fe[y.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,fe[y.minFilter]),y.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,ve[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===un||y.minFilter!==cs&&y.minFilter!==Vo||y.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let w=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function Ye(D,y){let w=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",F));let $=y.source,K=u.get($);K===void 0&&(K={},u.set($,K));let G=q(y);if(G!==D.__cacheKey){K[G]===void 0&&(K[G]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,w=!0),K[G].usedTimes++;let Me=K[D.__cacheKey];Me!==void 0&&(K[D.__cacheKey].usedTimes--,Me.usedTimes===0&&x(y)),D.__cacheKey=G,D.__webglTexture=K[G].texture}return w}function Bt(D,y,w){return Math.floor(Math.floor(D/w)/y)}function Nt(D,y,w,$){let G=D.updateRanges;if(G.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,w,$,y.data);else{G.sort((te,oe)=>te.start-oe.start);let Me=0;for(let te=1;te<G.length;te++){let oe=G[Me],Ce=G[te],De=oe.start+oe.count,me=Bt(Ce.start,y.width,4),Qe=Bt(oe.start,y.width,4);Ce.start<=De+1&&me===Qe&&Bt(Ce.start+Ce.count-1,y.width,4)===me?oe.count=Math.max(oe.count,Ce.start+Ce.count-oe.start):(++Me,G[Me]=Ce)}G.length=Me+1;let ce=n.getParameter(n.UNPACK_ROW_LENGTH),Te=n.getParameter(n.UNPACK_SKIP_PIXELS),je=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let te=0,oe=G.length;te<oe;te++){let Ce=G[te],De=Math.floor(Ce.start/4),me=Math.ceil(Ce.count/4),Qe=De%y.width,L=Math.floor(De/y.width),se=me,ae=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,Qe,L,se,ae,w,$,y.data)}D.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ce),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Te),n.pixelStorei(n.UNPACK_SKIP_ROWS,je)}}function Z(D,y,w){let $=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=n.TEXTURE_3D);let K=Ye(D,y),G=y.source;t.bindTexture($,D.__webglTexture,n.TEXTURE0+w);let Me=i.get(G);if(G.version!==Me.__version||K===!0){t.activeTexture(n.TEXTURE0+w);let ce=lt.getPrimaries(lt.workingColorSpace),Te=y.colorSpace===mo?null:lt.getPrimaries(y.colorSpace),je=y.colorSpace===mo||ce===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let te=C(y.image,!1,o.maxTextureSize);te=At(y,te);let oe=a.convert(y.format,y.colorSpace),Ce=a.convert(y.type),De=S(y.internalFormat,oe,Ce,y.colorSpace,y.isVideoTexture);he($,y);let me,Qe=y.mipmaps,L=y.isVideoTexture!==!0,se=Me.__version===void 0||K===!0,ae=G.dataReady,ye=b(y,te);if(y.isDepthTexture)De=E(y.format===qo,y.type),se&&(L?t.texStorage2D(n.TEXTURE_2D,1,De,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,De,te.width,te.height,0,oe,Ce,null));else if(y.isDataTexture)if(Qe.length>0){L&&se&&t.texStorage2D(n.TEXTURE_2D,ye,De,Qe[0].width,Qe[0].height);for(let ne=0,V=Qe.length;ne<V;ne++)me=Qe[ne],L?ae&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,me.width,me.height,oe,Ce,me.data):t.texImage2D(n.TEXTURE_2D,ne,De,me.width,me.height,0,oe,Ce,me.data);y.generateMipmaps=!1}else L?(se&&t.texStorage2D(n.TEXTURE_2D,ye,De,te.width,te.height),ae&&Nt(y,te,oe,Ce)):t.texImage2D(n.TEXTURE_2D,0,De,te.width,te.height,0,oe,Ce,te.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){L&&se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,De,Qe[0].width,Qe[0].height,te.depth);for(let ne=0,V=Qe.length;ne<V;ne++)if(me=Qe[ne],y.format!==ei)if(oe!==null)if(L){if(ae)if(y.layerUpdates.size>0){let _e=Tm(me.width,me.height,y.format,y.type);for(let He of y.layerUpdates){let Rt=me.data.subarray(He*_e/me.data.BYTES_PER_ELEMENT,(He+1)*_e/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,He,me.width,me.height,1,oe,Rt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,me.width,me.height,te.depth,oe,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ne,De,me.width,me.height,te.depth,0,me.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ne,0,0,0,me.width,me.height,te.depth,oe,Ce,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ne,De,me.width,me.height,te.depth,0,oe,Ce,me.data)}else{L&&se&&t.texStorage2D(n.TEXTURE_2D,ye,De,Qe[0].width,Qe[0].height);for(let ne=0,V=Qe.length;ne<V;ne++)me=Qe[ne],y.format!==ei?oe!==null?L?ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,ne,0,0,me.width,me.height,oe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,ne,De,me.width,me.height,0,me.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ae&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,me.width,me.height,oe,Ce,me.data):t.texImage2D(n.TEXTURE_2D,ne,De,me.width,me.height,0,oe,Ce,me.data)}else if(y.isDataArrayTexture)if(L){if(se&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,De,te.width,te.height,te.depth),ae)if(y.layerUpdates.size>0){let ne=Tm(te.width,te.height,y.format,y.type);for(let V of y.layerUpdates){let _e=te.data.subarray(V*ne/te.data.BYTES_PER_ELEMENT,(V+1)*ne/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,V,te.width,te.height,1,oe,Ce,_e)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,oe,Ce,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,te.width,te.height,te.depth,0,oe,Ce,te.data);else if(y.isData3DTexture)L?(se&&t.texStorage3D(n.TEXTURE_3D,ye,De,te.width,te.height,te.depth),ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,oe,Ce,te.data)):t.texImage3D(n.TEXTURE_3D,0,De,te.width,te.height,te.depth,0,oe,Ce,te.data);else if(y.isFramebufferTexture){if(se)if(L)t.texStorage2D(n.TEXTURE_2D,ye,De,te.width,te.height);else{let ne=te.width,V=te.height;for(let _e=0;_e<ye;_e++)t.texImage2D(n.TEXTURE_2D,_e,De,ne,V,0,oe,Ce,null),ne>>=1,V>>=1}}else if(Qe.length>0){if(L&&se){let ne=Ee(Qe[0]);t.texStorage2D(n.TEXTURE_2D,ye,De,ne.width,ne.height)}for(let ne=0,V=Qe.length;ne<V;ne++)me=Qe[ne],L?ae&&t.texSubImage2D(n.TEXTURE_2D,ne,0,0,oe,Ce,me):t.texImage2D(n.TEXTURE_2D,ne,De,oe,Ce,me);y.generateMipmaps=!1}else if(L){if(se){let ne=Ee(te);t.texStorage2D(n.TEXTURE_2D,ye,De,ne.width,ne.height)}ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe,Ce,te)}else t.texImage2D(n.TEXTURE_2D,0,De,oe,Ce,te);h(y)&&m($),Me.__version=G.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function re(D,y,w){if(y.image.length!==6)return;let $=Ye(D,y),K=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+w);let G=i.get(K);if(K.version!==G.__version||$===!0){t.activeTexture(n.TEXTURE0+w);let Me=lt.getPrimaries(lt.workingColorSpace),ce=y.colorSpace===mo?null:lt.getPrimaries(y.colorSpace),Te=y.colorSpace===mo||Me===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let je=y.isCompressedTexture||y.image[0].isCompressedTexture,te=y.image[0]&&y.image[0].isDataTexture,oe=[];for(let V=0;V<6;V++)!je&&!te?oe[V]=C(y.image[V],!0,o.maxCubemapSize):oe[V]=te?y.image[V].image:y.image[V],oe[V]=At(y,oe[V]);let Ce=oe[0],De=a.convert(y.format,y.colorSpace),me=a.convert(y.type),Qe=S(y.internalFormat,De,me,y.colorSpace),L=y.isVideoTexture!==!0,se=G.__version===void 0||$===!0,ae=K.dataReady,ye=b(y,Ce);he(n.TEXTURE_CUBE_MAP,y);let ne;if(je){L&&se&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Qe,Ce.width,Ce.height);for(let V=0;V<6;V++){ne=oe[V].mipmaps;for(let _e=0;_e<ne.length;_e++){let He=ne[_e];y.format!==ei?De!==null?L?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,_e,0,0,He.width,He.height,De,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,_e,Qe,He.width,He.height,0,He.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,_e,0,0,He.width,He.height,De,me,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,_e,Qe,He.width,He.height,0,De,me,He.data)}}}else{if(ne=y.mipmaps,L&&se){ne.length>0&&ye++;let V=Ee(oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Qe,V.width,V.height)}for(let V=0;V<6;V++)if(te){L?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,oe[V].width,oe[V].height,De,me,oe[V].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Qe,oe[V].width,oe[V].height,0,De,me,oe[V].data);for(let _e=0;_e<ne.length;_e++){let Rt=ne[_e].image[V].image;L?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,_e+1,0,0,Rt.width,Rt.height,De,me,Rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,_e+1,Qe,Rt.width,Rt.height,0,De,me,Rt.data)}}else{L?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,De,me,oe[V]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Qe,De,me,oe[V]);for(let _e=0;_e<ne.length;_e++){let He=ne[_e];L?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,_e+1,0,0,De,me,He.image[V]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,_e+1,Qe,De,me,He.image[V])}}}h(y)&&m(n.TEXTURE_CUBE_MAP),G.__version=K.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function le(D,y,w,$,K,G){let Me=a.convert(w.format,w.colorSpace),ce=a.convert(w.type),Te=S(w.internalFormat,Me,ce,w.colorSpace),je=i.get(y),te=i.get(w);if(te.__renderTarget=y,!je.__hasExternalTextures){let oe=Math.max(1,y.width>>G),Ce=Math.max(1,y.height>>G);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,G,Te,oe,Ce,y.depth,0,Me,ce,null):t.texImage2D(K,G,Te,oe,Ce,0,Me,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),Kt(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,K,te.__webglTexture,0,I(y)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,K,te.__webglTexture,G),t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(D,y,w){if(n.bindRenderbuffer(n.RENDERBUFFER,D),y.depthBuffer){let $=y.depthTexture,K=$&&$.isDepthTexture?$.type:null,G=E(y.stencilBuffer,K),Me=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Kt(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(y),G,y.width,y.height):w?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(y),G,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,G,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,D)}else{let $=y.textures;for(let K=0;K<$.length;K++){let G=$[K],Me=a.convert(G.format,G.colorSpace),ce=a.convert(G.type),Te=S(G.internalFormat,Me,ce,G.colorSpace);Kt(y)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I(y),Te,y.width,y.height):w?n.renderbufferStorageMultisample(n.RENDERBUFFER,I(y),Te,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Te,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(D,y,w){let $=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=i.get(y.depthTexture);if(K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$){if(K.__webglInit===void 0&&(K.__webglInit=!0,y.depthTexture.addEventListener("dispose",F)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),he(n.TEXTURE_CUBE_MAP,y.depthTexture);let je=a.convert(y.depthTexture.format),te=a.convert(y.depthTexture.type),oe;y.depthTexture.format===ji?oe=n.DEPTH_COMPONENT24:y.depthTexture.format===qo&&(oe=n.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,oe,y.width,y.height,0,je,te,null)}}else z(y.depthTexture,0);let G=K.__webglTexture,Me=I(y),ce=$?n.TEXTURE_CUBE_MAP_POSITIVE_X+w:n.TEXTURE_2D,Te=y.depthTexture.format===qo?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===ji)Kt(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Te,ce,G,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,Te,ce,G,0);else if(y.depthTexture.format===qo)Kt(y)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Te,ce,G,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,Te,ce,G,0);else throw new Error("Unknown depthTexture format")}function Ue(D){let y=i.get(D),w=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){let $=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){let K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=$}if(D.depthTexture&&!y.__autoAllocateDepthBuffer)if(w)for(let $=0;$<6;$++)Ae(y.__webglFramebuffer[$],D,$);else{let $=D.texture.mipmaps;$&&$.length>0?Ae(y.__webglFramebuffer[0],D,0):Ae(y.__webglFramebuffer,D,0)}else if(w){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=n.createRenderbuffer(),$e(y.__webglDepthbuffer[$],D,!1);else{let K=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=y.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,G)}}else{let $=D.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),$e(y.__webglDepthbuffer,D,!1);else{let K=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,G)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function cn(D,y,w){let $=i.get(D);y!==void 0&&le($.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),w!==void 0&&Ue(D)}function dt(D){let y=D.texture,w=i.get(D),$=i.get(y);D.addEventListener("dispose",T);let K=D.textures,G=D.isWebGLCubeRenderTarget===!0,Me=K.length>1;if(Me||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=y.version,r.memory.textures++),G){w.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0){w.__webglFramebuffer[ce]=[];for(let Te=0;Te<y.mipmaps.length;Te++)w.__webglFramebuffer[ce][Te]=n.createFramebuffer()}else w.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){w.__webglFramebuffer=[];for(let ce=0;ce<y.mipmaps.length;ce++)w.__webglFramebuffer[ce]=n.createFramebuffer()}else w.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ce=0,Te=K.length;ce<Te;ce++){let je=i.get(K[ce]);je.__webglTexture===void 0&&(je.__webglTexture=n.createTexture(),r.memory.textures++)}if(D.samples>0&&Kt(D)===!1){w.__webglMultisampledFramebuffer=n.createFramebuffer(),w.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let ce=0;ce<K.length;ce++){let Te=K[ce];w.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,w.__webglColorRenderbuffer[ce]);let je=a.convert(Te.format,Te.colorSpace),te=a.convert(Te.type),oe=S(Te.internalFormat,je,te,Te.colorSpace,D.isXRRenderTarget===!0),Ce=I(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,oe,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,w.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&(w.__webglDepthRenderbuffer=n.createRenderbuffer(),$e(w.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),he(n.TEXTURE_CUBE_MAP,y);for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0)for(let Te=0;Te<y.mipmaps.length;Te++)le(w.__webglFramebuffer[ce][Te],D,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Te);else le(w.__webglFramebuffer[ce],D,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);h(y)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ce=0,Te=K.length;ce<Te;ce++){let je=K[ce],te=i.get(je),oe=n.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(oe=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,te.__webglTexture),he(oe,je),le(w.__webglFramebuffer,D,je,n.COLOR_ATTACHMENT0+ce,oe,0),h(je)&&m(oe)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ce=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,$.__webglTexture),he(ce,y),y.mipmaps&&y.mipmaps.length>0)for(let Te=0;Te<y.mipmaps.length;Te++)le(w.__webglFramebuffer[Te],D,y,n.COLOR_ATTACHMENT0,ce,Te);else le(w.__webglFramebuffer,D,y,n.COLOR_ATTACHMENT0,ce,0);h(y)&&m(ce),t.unbindTexture()}D.depthBuffer&&Ue(D)}function Ct(D){let y=D.textures;for(let w=0,$=y.length;w<$;w++){let K=y[w];if(h(K)){let G=_(D),Me=i.get(K).__webglTexture;t.bindTexture(G,Me),m(G),t.unbindTexture()}}}let Tt=[],Je=[];function Gt(D){if(D.samples>0){if(Kt(D)===!1){let y=D.textures,w=D.width,$=D.height,K=n.COLOR_BUFFER_BIT,G=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(D),ce=y.length>1;if(ce)for(let je=0;je<y.length;je++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let Te=D.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let je=0;je<y.length;je++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[je]);let te=i.get(y[je]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,te,0)}n.blitFramebuffer(0,0,w,$,0,0,w,$,K,n.NEAREST),s===!0&&(Tt.length=0,Je.length=0,Tt.push(n.COLOR_ATTACHMENT0+je),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Tt.push(G),Je.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Je)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Tt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let je=0;je<y.length;je++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.RENDERBUFFER,Me.__webglColorRenderbuffer[je]);let te=i.get(y[je]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+je,n.TEXTURE_2D,te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&s){let y=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function I(D){return Math.min(o.maxSamples,D.samples)}function Kt(D){let y=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function gt(D){let y=r.render.frame;d.get(D)!==y&&(d.set(D,y),D.update())}function At(D,y){let w=D.colorSpace,$=D.format,K=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||w!==xa&&w!==mo&&(lt.getTransfer(w)===Mt?($!==ei||K!==Rn)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Be("WebGLTextures: Unsupported texture color space:",w)),y}function Ee(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=O,this.resetTextureUnits=P,this.setTexture2D=z,this.setTexture2DArray=U,this.setTexture3D=R,this.setTextureCube=ie,this.rebindTextures=cn,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function JI(n,e){function t(i,o=mo){let a,r=lt.getTransfer(o);if(i===Rn)return n.UNSIGNED_BYTE;if(i===S0)return n.UNSIGNED_SHORT_4_4_4_4;if(i===k0)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Mm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Cm)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ym)return n.BYTE;if(i===vm)return n.SHORT;if(i===Pr)return n.UNSIGNED_SHORT;if(i===E0)return n.INT;if(i===_i)return n.UNSIGNED_INT;if(i===Di)return n.FLOAT;if(i===Ui)return n.HALF_FLOAT;if(i===_m)return n.ALPHA;if(i===Dm)return n.RGB;if(i===ei)return n.RGBA;if(i===ji)return n.DEPTH_COMPONENT;if(i===qo)return n.DEPTH_STENCIL;if(i===xm)return n.RED;if(i===F0)return n.RED_INTEGER;if(i===ka)return n.RG;if(i===I0)return n.RG_INTEGER;if(i===b0)return n.RGBA_INTEGER;if(i===ss||i===ls||i===ds||i===us)if(r===Mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ss)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ss)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ls)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ds)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===us)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===T0||i===L0||i===w0||i===A0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===T0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===L0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===w0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===A0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===R0||i===j0||i===N0||i===B0||i===P0||i===z0||i===O0)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===R0||i===j0)return r===Mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===N0)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===B0)return a.COMPRESSED_R11_EAC;if(i===P0)return a.COMPRESSED_SIGNED_R11_EAC;if(i===z0)return a.COMPRESSED_RG11_EAC;if(i===O0)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===U0||i===H0||i===V0||i===q0||i===G0||i===W0||i===$0||i===X0||i===Z0||i===Y0||i===K0||i===J0||i===Q0||i===eu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===U0)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===H0)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===V0)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===q0)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===G0)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===W0)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$0)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===X0)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Z0)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Y0)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===K0)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===J0)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Q0)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eu)return r===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tu||i===nu||i===iu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===tu)return r===Mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===iu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ou||i===au||i===ru||i===cu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===ou)return a.COMPRESSED_RED_RGTC1_EXT;if(i===au)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ru)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var QI=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eb=`
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

}`,qm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Qc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Vn({vertexShader:QI,fragmentShader:eb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new on(new Po(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gm=class extends uo{constructor(e,t){super();let i=this,o=null,a=1,r=null,c="local-floor",s=1,l=null,d=null,p=null,u=null,f=null,g=null,C=typeof XRWebGLBinding<"u",h=new qm,m={},_=t.getContextAttributes(),S=null,E=null,b=[],F=[],T=new pt,v=null,x=new fn;x.viewport=new Ot;let X=new fn;X.viewport=new Ot;let k=[x,X],P=new M0,O=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let re=b[Z];return re===void 0&&(re=new Lr,b[Z]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Z){let re=b[Z];return re===void 0&&(re=new Lr,b[Z]=re),re.getGripSpace()},this.getHand=function(Z){let re=b[Z];return re===void 0&&(re=new Lr,b[Z]=re),re.getHandSpace()};function z(Z){let re=F.indexOf(Z.inputSource);if(re===-1)return;let le=b[re];le!==void 0&&(le.update(Z.inputSource,Z.frame,l||r),le.dispatchEvent({type:Z.type,data:Z.inputSource}))}function U(){o.removeEventListener("select",z),o.removeEventListener("selectstart",z),o.removeEventListener("selectend",z),o.removeEventListener("squeeze",z),o.removeEventListener("squeezestart",z),o.removeEventListener("squeezeend",z),o.removeEventListener("end",U),o.removeEventListener("inputsourceschange",R);for(let Z=0;Z<b.length;Z++){let re=F[Z];re!==null&&(F[Z]=null,b[Z].disconnect(re))}O=null,q=null,h.reset();for(let Z in m)delete m[Z];e.setRenderTarget(S),f=null,u=null,p=null,o=null,E=null,Nt.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(T.width,T.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){a=Z,i.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){c=Z,i.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p===null&&C&&(p=new XRWebGLBinding(o,t)),p},this.getFrame=function(){return g},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(S=e.getRenderTarget(),o.addEventListener("select",z),o.addEventListener("selectstart",z),o.addEventListener("selectend",z),o.addEventListener("squeeze",z),o.addEventListener("squeezestart",z),o.addEventListener("squeezeend",z),o.addEventListener("end",U),o.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(T),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,$e=null,Ae=null;_.depth&&(Ae=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=_.stencil?qo:ji,$e=_.stencil?zr:_i);let Ue={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:a};p=this.getBinding(),u=p.createProjectionLayer(Ue),o.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new Hn(u.textureWidth,u.textureHeight,{format:ei,type:Rn,depthTexture:new Bo(u.textureWidth,u.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let le={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(o,t,le),o.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Hn(f.framebufferWidth,f.framebufferHeight,{format:ei,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(s),l=null,r=await o.requestReferenceSpace(c),Nt.setContext(o),Nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function R(Z){for(let re=0;re<Z.removed.length;re++){let le=Z.removed[re],$e=F.indexOf(le);$e>=0&&(F[$e]=null,b[$e].disconnect(le))}for(let re=0;re<Z.added.length;re++){let le=Z.added[re],$e=F.indexOf(le);if($e===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=F.length){F.push(le),$e=Ue;break}else if(F[Ue]===null){F[Ue]=le,$e=Ue;break}if($e===-1)break}let Ae=b[$e];Ae&&Ae.connect(le)}}let ie=new B,Q=new B;function fe(Z,re,le){ie.setFromMatrixPosition(re.matrixWorld),Q.setFromMatrixPosition(le.matrixWorld);let $e=ie.distanceTo(Q),Ae=re.projectionMatrix.elements,Ue=le.projectionMatrix.elements,cn=Ae[14]/(Ae[10]-1),dt=Ae[14]/(Ae[10]+1),Ct=(Ae[9]+1)/Ae[5],Tt=(Ae[9]-1)/Ae[5],Je=(Ae[8]-1)/Ae[0],Gt=(Ue[8]+1)/Ue[0],I=cn*Je,Kt=cn*Gt,gt=$e/(-Je+Gt),At=gt*-Je;if(re.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(At),Z.translateZ(gt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ae[10]===-1)Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let Ee=cn+gt,D=dt+gt,y=I-At,w=Kt+($e-At),$=Ct*dt/D*Ee,K=Tt*dt/D*Ee;Z.projectionMatrix.makePerspective(y,w,$,K,Ee,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ve(Z,re){re===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(re.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let re=Z.near,le=Z.far;h.texture!==null&&(h.depthNear>0&&(re=h.depthNear),h.depthFar>0&&(le=h.depthFar)),P.near=X.near=x.near=re,P.far=X.far=x.far=le,(O!==P.near||q!==P.far)&&(o.updateRenderState({depthNear:P.near,depthFar:P.far}),O=P.near,q=P.far),P.layers.mask=Z.layers.mask|6,x.layers.mask=P.layers.mask&-5,X.layers.mask=P.layers.mask&-3;let $e=Z.parent,Ae=P.cameras;ve(P,$e);for(let Ue=0;Ue<Ae.length;Ue++)ve(Ae[Ue],$e);Ae.length===2?fe(P,x,X):P.projectionMatrix.copy(x.projectionMatrix),he(Z,P,$e)};function he(Z,re,le){le===null?Z.matrix.copy(re.matrixWorld):(Z.matrix.copy(le.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(re.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(re.projectionMatrix),Z.projectionMatrixInverse.copy(re.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Qd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(u===null&&f===null))return s},this.setFoveation=function(Z){s=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(P)},this.getCameraTexture=function(Z){return m[Z]};let Ye=null;function Bt(Z,re){if(d=re.getViewerPose(l||r),g=re,d!==null){let le=d.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let $e=!1;le.length!==P.cameras.length&&(P.cameras.length=0,$e=!0);for(let dt=0;dt<le.length;dt++){let Ct=le[dt],Tt=null;if(f!==null)Tt=f.getViewport(Ct);else{let Gt=p.getViewSubImage(u,Ct);Tt=Gt.viewport,dt===0&&(e.setRenderTargetTextures(E,Gt.colorTexture,Gt.depthStencilTexture),e.setRenderTarget(E))}let Je=k[dt];Je===void 0&&(Je=new fn,Je.layers.enable(dt),Je.viewport=new Ot,k[dt]=Je),Je.matrix.fromArray(Ct.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(Ct.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(Tt.x,Tt.y,Tt.width,Tt.height),dt===0&&(P.matrix.copy(Je.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),$e===!0&&P.cameras.push(Je)}let Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){p=i.getBinding();let dt=p.getDepthInformation(le[0]);dt&&dt.isValid&&dt.texture&&h.init(dt,o.renderState)}if(Ae&&Ae.includes("camera-access")&&C){e.state.unbindTexture(),p=i.getBinding();for(let dt=0;dt<le.length;dt++){let Ct=le[dt].camera;if(Ct){let Tt=m[Ct];Tt||(Tt=new Qc,m[Ct]=Tt);let Je=p.getCameraImage(Ct);Tt.sourceTexture=Je}}}}for(let le=0;le<b.length;le++){let $e=F[le],Ae=b[le];$e!==null&&Ae!==void 0&&Ae.update($e,re,l||r)}Ye&&Ye(Z,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}let Nt=new jM;Nt.setAnimationLoop(Bt),this.setAnimationLoop=function(Z){Ye=Z},this.dispose=function(){}}},ba=new jo,tb=new qt;function nb(n,e){function t(h,m){h.matrixAutoUpdate===!0&&h.updateMatrix(),m.value.copy(h.matrix)}function i(h,m){m.color.getRGB(h.fogColor.value,Fm(n)),m.isFog?(h.fogNear.value=m.near,h.fogFar.value=m.far):m.isFogExp2&&(h.fogDensity.value=m.density)}function o(h,m,_,S,E){m.isMeshBasicMaterial?a(h,m):m.isMeshLambertMaterial?(a(h,m),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(a(h,m),p(h,m)):m.isMeshPhongMaterial?(a(h,m),d(h,m),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(a(h,m),u(h,m),m.isMeshPhysicalMaterial&&f(h,m,E)):m.isMeshMatcapMaterial?(a(h,m),g(h,m)):m.isMeshDepthMaterial?a(h,m):m.isMeshDistanceMaterial?(a(h,m),C(h,m)):m.isMeshNormalMaterial?a(h,m):m.isLineBasicMaterial?(r(h,m),m.isLineDashedMaterial&&c(h,m)):m.isPointsMaterial?s(h,m,_,S):m.isSpriteMaterial?l(h,m):m.isShadowMaterial?(h.color.value.copy(m.color),h.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(h,m){h.opacity.value=m.opacity,m.color&&h.diffuse.value.copy(m.color),m.emissive&&h.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(h.map.value=m.map,t(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.bumpMap&&(h.bumpMap.value=m.bumpMap,t(m.bumpMap,h.bumpMapTransform),h.bumpScale.value=m.bumpScale,m.side===Fn&&(h.bumpScale.value*=-1)),m.normalMap&&(h.normalMap.value=m.normalMap,t(m.normalMap,h.normalMapTransform),h.normalScale.value.copy(m.normalScale),m.side===Fn&&h.normalScale.value.negate()),m.displacementMap&&(h.displacementMap.value=m.displacementMap,t(m.displacementMap,h.displacementMapTransform),h.displacementScale.value=m.displacementScale,h.displacementBias.value=m.displacementBias),m.emissiveMap&&(h.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,h.emissiveMapTransform)),m.specularMap&&(h.specularMap.value=m.specularMap,t(m.specularMap,h.specularMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);let _=e.get(m),S=_.envMap,E=_.envMapRotation;S&&(h.envMap.value=S,ba.copy(E),ba.x*=-1,ba.y*=-1,ba.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ba.y*=-1,ba.z*=-1),h.envMapRotation.value.setFromMatrix4(tb.makeRotationFromEuler(ba)),h.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=m.reflectivity,h.ior.value=m.ior,h.refractionRatio.value=m.refractionRatio),m.lightMap&&(h.lightMap.value=m.lightMap,h.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,h.lightMapTransform)),m.aoMap&&(h.aoMap.value=m.aoMap,h.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,h.aoMapTransform))}function r(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,m.map&&(h.map.value=m.map,t(m.map,h.mapTransform))}function c(h,m){h.dashSize.value=m.dashSize,h.totalSize.value=m.dashSize+m.gapSize,h.scale.value=m.scale}function s(h,m,_,S){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.size.value=m.size*_,h.scale.value=S*.5,m.map&&(h.map.value=m.map,t(m.map,h.uvTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function l(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.rotation.value=m.rotation,m.map&&(h.map.value=m.map,t(m.map,h.mapTransform)),m.alphaMap&&(h.alphaMap.value=m.alphaMap,t(m.alphaMap,h.alphaMapTransform)),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest)}function d(h,m){h.specular.value.copy(m.specular),h.shininess.value=Math.max(m.shininess,1e-4)}function p(h,m){m.gradientMap&&(h.gradientMap.value=m.gradientMap)}function u(h,m){h.metalness.value=m.metalness,m.metalnessMap&&(h.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,h.metalnessMapTransform)),h.roughness.value=m.roughness,m.roughnessMap&&(h.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,h.roughnessMapTransform)),m.envMap&&(h.envMapIntensity.value=m.envMapIntensity)}function f(h,m,_){h.ior.value=m.ior,m.sheen>0&&(h.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),h.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(h.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,h.sheenColorMapTransform)),m.sheenRoughnessMap&&(h.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,h.sheenRoughnessMapTransform))),m.clearcoat>0&&(h.clearcoat.value=m.clearcoat,h.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(h.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,h.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(h.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Fn&&h.clearcoatNormalScale.value.negate())),m.dispersion>0&&(h.dispersion.value=m.dispersion),m.iridescence>0&&(h.iridescence.value=m.iridescence,h.iridescenceIOR.value=m.iridescenceIOR,h.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(h.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,h.iridescenceMapTransform)),m.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),m.transmission>0&&(h.transmission.value=m.transmission,h.transmissionSamplerMap.value=_.texture,h.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(h.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,h.transmissionMapTransform)),h.thickness.value=m.thickness,m.thicknessMap&&(h.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=m.attenuationDistance,h.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(h.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(h.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=m.specularIntensity,h.specularColor.value.copy(m.specularColor),m.specularColorMap&&(h.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,h.specularColorMapTransform)),m.specularIntensityMap&&(h.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,h.specularIntensityMapTransform))}function g(h,m){m.matcap&&(h.matcap.value=m.matcap)}function C(h,m){let _=e.get(m).light;h.referencePosition.value.setFromMatrixPosition(_.matrixWorld),h.nearDistance.value=_.shadow.camera.near,h.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function ib(n,e,t,i){let o={},a={},r=[],c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function s(_,S){let E=S.program;i.uniformBlockBinding(_,E)}function l(_,S){let E=o[_.id];E===void 0&&(g(_),E=d(_),o[_.id]=E,_.addEventListener("dispose",h));let b=S.program;i.updateUBOMapping(_,b);let F=e.render.frame;a[_.id]!==F&&(u(_),a[_.id]=F)}function d(_){let S=p();_.__bindingPointIndex=S;let E=n.createBuffer(),b=_.__size,F=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,b,F),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,E),E}function p(){for(let _=0;_<c;_++)if(r.indexOf(_)===-1)return r.push(_),_;return Be("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let S=o[_.id],E=_.uniforms,b=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let F=0,T=E.length;F<T;F++){let v=Array.isArray(E[F])?E[F]:[E[F]];for(let x=0,X=v.length;x<X;x++){let k=v[x];if(f(k,F,x,b)===!0){let P=k.__offset,O=Array.isArray(k.value)?k.value:[k.value],q=0;for(let z=0;z<O.length;z++){let U=O[z],R=C(U);typeof U=="number"||typeof U=="boolean"?(k.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,P+q,k.__data)):U.isMatrix3?(k.__data[0]=U.elements[0],k.__data[1]=U.elements[1],k.__data[2]=U.elements[2],k.__data[3]=0,k.__data[4]=U.elements[3],k.__data[5]=U.elements[4],k.__data[6]=U.elements[5],k.__data[7]=0,k.__data[8]=U.elements[6],k.__data[9]=U.elements[7],k.__data[10]=U.elements[8],k.__data[11]=0):(U.toArray(k.__data,q),q+=R.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,P,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,S,E,b){let F=_.value,T=S+"_"+E;if(b[T]===void 0)return typeof F=="number"||typeof F=="boolean"?b[T]=F:b[T]=F.clone(),!0;{let v=b[T];if(typeof F=="number"||typeof F=="boolean"){if(v!==F)return b[T]=F,!0}else if(v.equals(F)===!1)return v.copy(F),!0}return!1}function g(_){let S=_.uniforms,E=0,b=16;for(let T=0,v=S.length;T<v;T++){let x=Array.isArray(S[T])?S[T]:[S[T]];for(let X=0,k=x.length;X<k;X++){let P=x[X],O=Array.isArray(P.value)?P.value:[P.value];for(let q=0,z=O.length;q<z;q++){let U=O[q],R=C(U),ie=E%b,Q=ie%R.boundary,fe=ie+Q;E+=Q,fe!==0&&b-fe<R.storage&&(E+=b-fe),P.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=E,E+=R.storage}}}let F=E%b;return F>0&&(E+=b-F),_.__size=E,_.__cache={},this}function C(_){let S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=48,S.storage=48):_.isMatrix4?(S.boundary=64,S.storage=64):_.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pe("WebGLRenderer: Unsupported uniform value type.",_),S}function h(_){let S=_.target;S.removeEventListener("dispose",h);let E=r.indexOf(S.__bindingPointIndex);r.splice(E,1),n.deleteBuffer(o[S.id]),delete o[S.id],delete a[S.id]}function m(){for(let _ in o)n.deleteBuffer(o[_]);r=[],o={},a={}}return{bind:s,update:l,dispose:m}}var ob=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vi=null;function ab(){return Vi===null&&(Vi=new o0(ob,16,16,ka,Ui),Vi.name="DFG_LUT",Vi.minFilter=mn,Vi.magFilter=mn,Vi.wrapS=Ri,Vi.wrapT=Ri,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}var mu=class{constructor(e={}){let{canvas:t=cM(),context:i=null,depth:o=!0,stencil:a=!1,alpha:r=!1,antialias:c=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Rn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;let C=f,h=new Set([b0,I0,F0]),m=new Set([Rn,_i,Pr,zr,S0,k0]),_=new Uint32Array(4),S=new Int32Array(4),E=null,b=null,F=[],T=[],v=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,X=!1;this._outputColorSpace=On;let k=0,P=0,O=null,q=-1,z=null,U=new Ot,R=new Ot,ie=null,Q=new st(0),fe=0,ve=t.width,he=t.height,Ye=1,Bt=null,Nt=null,Z=new Ot(0,0,ve,he),re=new Ot(0,0,ve,he),le=!1,$e=new Ar,Ae=!1,Ue=!1,cn=new qt,dt=new B,Ct=new Ot,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Je=!1;function Gt(){return O===null?Ye:1}let I=i;function Kt(M,A){return t.getContext(M,A)}try{let M={alpha:!0,depth:o,stencil:a,antialias:c,premultipliedAlpha:s,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"183"}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",Rt,!1),I===null){let A="webgl2";if(I=Kt(A,M),I===null)throw Kt(A)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Be("WebGLRenderer: "+M.message),M}let gt,At,Ee,D,y,w,$,K,G,Me,ce,Te,je,te,oe,Ce,De,me,Qe,L,se,ae,ye;function ne(){gt=new fF(I),gt.init(),se=new JI(I,gt),At=new aF(I,gt,e,se),Ee=new YI(I,gt),At.reversedDepthBuffer&&u&&Ee.buffers.depth.setReversed(!0),D=new gF(I),y=new NI,w=new KI(I,gt,Ee,y,At,se,D),$=new pF(x),K=new _S(I),ae=new iF(I,K),G=new mF(I,K,D,ae),Me=new vF(I,G,K,ae,D),me=new yF(I,At,w),oe=new rF(y),ce=new jI(x,$,gt,At,ae,oe),Te=new nb(x,y),je=new PI,te=new qI(gt),De=new nF(x,$,Ee,Me,g,s),Ce=new ZI(x,Me,At),ye=new ib(I,D,At,Ee),Qe=new oF(I,gt,D),L=new hF(I,gt,D),D.programs=ce.programs,x.capabilities=At,x.extensions=gt,x.properties=y,x.renderLists=je,x.shadowMap=Ce,x.state=Ee,x.info=D}ne(),C!==Rn&&(v=new CF(C,t.width,t.height,o,a));let V=new Gm(x,I);this.xr=V,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let M=gt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=gt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Ye},this.setPixelRatio=function(M){M!==void 0&&(Ye=M,this.setSize(ve,he,!1))},this.getSize=function(M){return M.set(ve,he)},this.setSize=function(M,A,H=!0){if(V.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=M,he=A,t.width=Math.floor(M*Ye),t.height=Math.floor(A*Ye),H===!0&&(t.style.width=M+"px",t.style.height=A+"px"),v!==null&&v.setSize(t.width,t.height),this.setViewport(0,0,M,A)},this.getDrawingBufferSize=function(M){return M.set(ve*Ye,he*Ye).floor()},this.setDrawingBufferSize=function(M,A,H){ve=M,he=A,Ye=H,t.width=Math.floor(M*H),t.height=Math.floor(A*H),this.setViewport(0,0,M,A)},this.setEffects=function(M){if(C===Rn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let A=0;A<M.length;A++)if(M[A].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(U)},this.getViewport=function(M){return M.copy(Z)},this.setViewport=function(M,A,H,N){M.isVector4?Z.set(M.x,M.y,M.z,M.w):Z.set(M,A,H,N),Ee.viewport(U.copy(Z).multiplyScalar(Ye).round())},this.getScissor=function(M){return M.copy(re)},this.setScissor=function(M,A,H,N){M.isVector4?re.set(M.x,M.y,M.z,M.w):re.set(M,A,H,N),Ee.scissor(R.copy(re).multiplyScalar(Ye).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(M){Ee.setScissorTest(le=M)},this.setOpaqueSort=function(M){Bt=M},this.setTransparentSort=function(M){Nt=M},this.getClearColor=function(M){return M.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(M=!0,A=!0,H=!0){let N=0;if(M){let j=!1;if(O!==null){let ue=O.texture.format;j=h.has(ue)}if(j){let ue=O.texture.type,ge=m.has(ue),pe=De.getClearColor(),xe=De.getClearAlpha(),Fe=pe.r,Ge=pe.g,et=pe.b;ge?(_[0]=Fe,_[1]=Ge,_[2]=et,_[3]=xe,I.clearBufferuiv(I.COLOR,0,_)):(S[0]=Fe,S[1]=Ge,S[2]=et,S[3]=xe,I.clearBufferiv(I.COLOR,0,S))}else N|=I.COLOR_BUFFER_BIT}A&&(N|=I.DEPTH_BUFFER_BIT),H&&(N|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N!==0&&I.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",Rt,!1),De.dispose(),je.dispose(),te.dispose(),y.dispose(),$.dispose(),Me.dispose(),ae.dispose(),ye.dispose(),ce.dispose(),V.dispose(),V.removeEventListener("sessionstart",$m),V.removeEventListener("sessionend",Xm),Wo.stop()};function _e(M){M.preventDefault(),km("WebGLRenderer: Context Lost."),X=!0}function He(){km("WebGLRenderer: Context Restored."),X=!1;let M=D.autoReset,A=Ce.enabled,H=Ce.autoUpdate,N=Ce.needsUpdate,j=Ce.type;ne(),D.autoReset=M,Ce.enabled=A,Ce.autoUpdate=H,Ce.needsUpdate=N,Ce.type=j}function Rt(M){Be("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function _t(M){let A=M.target;A.removeEventListener("dispose",_t),Gi(A)}function Gi(M){Wi(M),y.remove(M)}function Wi(M){let A=y.get(M).programs;A!==void 0&&(A.forEach(function(H){ce.releaseProgram(H)}),M.isShaderMaterial&&ce.releaseShaderCache(M))}this.renderBufferDirect=function(M,A,H,N,j,ue){A===null&&(A=Tt);let ge=j.isMesh&&j.matrixWorld.determinant()<0,pe=UM(M,A,H,N,j);Ee.setMaterial(N,ge);let xe=H.index,Fe=1;if(N.wireframe===!0){if(xe=G.getWireframeAttribute(H),xe===void 0)return;Fe=2}let Ge=H.drawRange,et=H.attributes.position,Ie=Ge.start*Fe,Et=(Ge.start+Ge.count)*Fe;ue!==null&&(Ie=Math.max(Ie,ue.start*Fe),Et=Math.min(Et,(ue.start+ue.count)*Fe)),xe!==null?(Ie=Math.max(Ie,0),Et=Math.min(Et,xe.count)):et!=null&&(Ie=Math.max(Ie,0),Et=Math.min(Et,et.count));let Wt=Et-Ie;if(Wt<0||Wt===1/0)return;ae.setup(j,N,pe,H,xe);let Ut,St=Qe;if(xe!==null&&(Ut=K.get(xe),St=L,St.setIndex(Ut)),j.isMesh)N.wireframe===!0?(Ee.setLineWidth(N.wireframeLinewidth*Gt()),St.setMode(I.LINES)):St.setMode(I.TRIANGLES);else if(j.isLine){let hn=N.linewidth;hn===void 0&&(hn=1),Ee.setLineWidth(hn*Gt()),j.isLineSegments?St.setMode(I.LINES):j.isLineLoop?St.setMode(I.LINE_LOOP):St.setMode(I.LINE_STRIP)}else j.isPoints?St.setMode(I.POINTS):j.isSprite&&St.setMode(I.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Wc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))St.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let hn=j._multiDrawStarts,Se=j._multiDrawCounts,jn=j._multiDrawCount,ut=xe?K.get(xe).bytesPerElement:1,ti=y.get(N).currentProgram.getUniforms();for(let xi=0;xi<jn;xi++)ti.setValue(I,"_gl_DrawID",xi),St.render(hn[xi]/ut,Se[xi])}else if(j.isInstancedMesh)St.renderInstances(Ie,Wt,j.count);else if(H.isInstancedBufferGeometry){let hn=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Se=Math.min(H.instanceCount,hn);St.renderInstances(Ie,Wt,Se)}else St.render(Ie,Wt)};function Wm(M,A,H){M.transparent===!0&&M.side===zi&&M.forceSinglePass===!1?(M.side=Fn,M.needsUpdate=!0,ys(M,A,H),M.side=lo,M.needsUpdate=!0,ys(M,A,H),M.side=zi):ys(M,A,H)}this.compile=function(M,A,H=null){H===null&&(H=M),b=te.get(H),b.init(A),T.push(b),H.traverseVisible(function(j){j.isLight&&j.layers.test(A.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),M!==H&&M.traverseVisible(function(j){j.isLight&&j.layers.test(A.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),b.setupLights();let N=new Set;return M.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let ue=j.material;if(ue)if(Array.isArray(ue))for(let ge=0;ge<ue.length;ge++){let pe=ue[ge];Wm(pe,H,j),N.add(pe)}else Wm(ue,H,j),N.add(ue)}),b=T.pop(),N},this.compileAsync=function(M,A,H=null){let N=this.compile(M,A,H);return new Promise(j=>{function ue(){if(N.forEach(function(ge){y.get(ge).currentProgram.isReady()&&N.delete(ge)}),N.size===0){j(M);return}setTimeout(ue,10)}gt.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let ku=null;function OM(M){ku&&ku(M)}function $m(){Wo.stop()}function Xm(){Wo.start()}let Wo=new jM;Wo.setAnimationLoop(OM),typeof self<"u"&&Wo.setContext(self),this.setAnimationLoop=function(M){ku=M,V.setAnimationLoop(M),M===null?Wo.stop():Wo.start()},V.addEventListener("sessionstart",$m),V.addEventListener("sessionend",Xm),this.render=function(M,A){if(A!==void 0&&A.isCamera!==!0){Be("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;let H=V.enabled===!0&&V.isPresenting===!0,N=v!==null&&(O===null||H)&&v.begin(x,O);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(V.cameraAutoUpdate===!0&&V.updateCamera(A),A=V.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,A,O),b=te.get(M,T.length),b.init(A),T.push(b),cn.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),$e.setFromProjectionMatrix(cn,gi,A.reversedDepth),Ue=this.localClippingEnabled,Ae=oe.init(this.clippingPlanes,Ue),E=je.get(M,F.length),E.init(),F.push(E),V.enabled===!0&&V.isPresenting===!0){let ge=x.xr.getDepthSensingMesh();ge!==null&&Fu(ge,A,-1/0,x.sortObjects)}Fu(M,A,0,x.sortObjects),E.finish(),x.sortObjects===!0&&E.sort(Bt,Nt),Je=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Je&&De.addToRenderList(E,M),this.info.render.frame++,Ae===!0&&oe.beginShadows();let j=b.state.shadowsArray;if(Ce.render(j,M,A),Ae===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(N&&v.hasRenderPass())===!1){let ge=E.opaque,pe=E.transmissive;if(b.setupLights(),A.isArrayCamera){let xe=A.cameras;if(pe.length>0)for(let Fe=0,Ge=xe.length;Fe<Ge;Fe++){let et=xe[Fe];Ym(ge,pe,M,et)}Je&&De.render(M);for(let Fe=0,Ge=xe.length;Fe<Ge;Fe++){let et=xe[Fe];Zm(E,M,et,et.viewport)}}else pe.length>0&&Ym(ge,pe,M,A),Je&&De.render(M),Zm(E,M,A)}O!==null&&P===0&&(w.updateMultisampleRenderTarget(O),w.updateRenderTargetMipmap(O)),N&&v.end(x),M.isScene===!0&&M.onAfterRender(x,M,A),ae.resetDefaultState(),q=-1,z=null,T.pop(),T.length>0?(b=T[T.length-1],Ae===!0&&oe.setGlobalState(x.clippingPlanes,b.state.camera)):b=null,F.pop(),F.length>0?E=F[F.length-1]:E=null};function Fu(M,A,H,N){if(M.visible===!1)return;if(M.layers.test(A.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(A);else if(M.isLight)b.pushLight(M),M.castShadow&&b.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$e.intersectsSprite(M)){N&&Ct.setFromMatrixPosition(M.matrixWorld).applyMatrix4(cn);let ge=Me.update(M),pe=M.material;pe.visible&&E.push(M,ge,pe,H,Ct.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$e.intersectsObject(M))){let ge=Me.update(M),pe=M.material;if(N&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ct.copy(M.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ct.copy(ge.boundingSphere.center)),Ct.applyMatrix4(M.matrixWorld).applyMatrix4(cn)),Array.isArray(pe)){let xe=ge.groups;for(let Fe=0,Ge=xe.length;Fe<Ge;Fe++){let et=xe[Fe],Ie=pe[et.materialIndex];Ie&&Ie.visible&&E.push(M,ge,Ie,H,Ct.z,et)}}else pe.visible&&E.push(M,ge,pe,H,Ct.z,null)}}let ue=M.children;for(let ge=0,pe=ue.length;ge<pe;ge++)Fu(ue[ge],A,H,N)}function Zm(M,A,H,N){let{opaque:j,transmissive:ue,transparent:ge}=M;b.setupLightsView(H),Ae===!0&&oe.setGlobalState(x.clippingPlanes,H),N&&Ee.viewport(U.copy(N)),j.length>0&&gs(j,A,H),ue.length>0&&gs(ue,A,H),ge.length>0&&gs(ge,A,H),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Ym(M,A,H,N){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[N.id]===void 0){let Ie=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[N.id]=new Hn(1,1,{generateMipmaps:!0,type:Ie?Ui:Rn,minFilter:Vo,samples:Math.max(4,At.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let ue=b.state.transmissionRenderTarget[N.id],ge=N.viewport||U;ue.setSize(ge.z*x.transmissionResolutionScale,ge.w*x.transmissionResolutionScale);let pe=x.getRenderTarget(),xe=x.getActiveCubeFace(),Fe=x.getActiveMipmapLevel();x.setRenderTarget(ue),x.getClearColor(Q),fe=x.getClearAlpha(),fe<1&&x.setClearColor(16777215,.5),x.clear(),Je&&De.render(H);let Ge=x.toneMapping;x.toneMapping=Ci;let et=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),b.setupLightsView(N),Ae===!0&&oe.setGlobalState(x.clippingPlanes,N),gs(M,H,N),w.updateMultisampleRenderTarget(ue),w.updateRenderTargetMipmap(ue),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let Et=0,Wt=A.length;Et<Wt;Et++){let Ut=A[Et],{object:St,geometry:hn,material:Se,group:jn}=Ut;if(Se.side===zi&&St.layers.test(N.layers)){let ut=Se.side;Se.side=Fn,Se.needsUpdate=!0,Km(St,H,N,hn,Se,jn),Se.side=ut,Se.needsUpdate=!0,Ie=!0}}Ie===!0&&(w.updateMultisampleRenderTarget(ue),w.updateRenderTargetMipmap(ue))}x.setRenderTarget(pe,xe,Fe),x.setClearColor(Q,fe),et!==void 0&&(N.viewport=et),x.toneMapping=Ge}function gs(M,A,H){let N=A.isScene===!0?A.overrideMaterial:null;for(let j=0,ue=M.length;j<ue;j++){let ge=M[j],{object:pe,geometry:xe,group:Fe}=ge,Ge=ge.material;Ge.allowOverride===!0&&N!==null&&(Ge=N),pe.layers.test(H.layers)&&Km(pe,A,H,xe,Ge,Fe)}}function Km(M,A,H,N,j,ue){M.onBeforeRender(x,A,H,N,j,ue),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),j.onBeforeRender(x,A,H,N,M,ue),j.transparent===!0&&j.side===zi&&j.forceSinglePass===!1?(j.side=Fn,j.needsUpdate=!0,x.renderBufferDirect(H,A,N,j,M,ue),j.side=lo,j.needsUpdate=!0,x.renderBufferDirect(H,A,N,j,M,ue),j.side=zi):x.renderBufferDirect(H,A,N,j,M,ue),M.onAfterRender(x,A,H,N,j,ue)}function ys(M,A,H){A.isScene!==!0&&(A=Tt);let N=y.get(M),j=b.state.lights,ue=b.state.shadowsArray,ge=j.state.version,pe=ce.getParameters(M,j.state,ue,A,H),xe=ce.getProgramCacheKey(pe),Fe=N.programs;N.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?A.environment:null,N.fog=A.fog;let Ge=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;N.envMap=$.get(M.envMap||N.environment,Ge),N.envMapRotation=N.environment!==null&&M.envMap===null?A.environmentRotation:M.envMapRotation,Fe===void 0&&(M.addEventListener("dispose",_t),Fe=new Map,N.programs=Fe);let et=Fe.get(xe);if(et!==void 0){if(N.currentProgram===et&&N.lightsStateVersion===ge)return Qm(M,pe),et}else pe.uniforms=ce.getUniforms(M),M.onBeforeCompile(pe,x),et=ce.acquireProgram(pe,xe),Fe.set(xe,et),N.uniforms=pe.uniforms;let Ie=N.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ie.clippingPlanes=oe.uniform),Qm(M,pe),N.needsLights=VM(M),N.lightsStateVersion=ge,N.needsLights&&(Ie.ambientLightColor.value=j.state.ambient,Ie.lightProbe.value=j.state.probe,Ie.directionalLights.value=j.state.directional,Ie.directionalLightShadows.value=j.state.directionalShadow,Ie.spotLights.value=j.state.spot,Ie.spotLightShadows.value=j.state.spotShadow,Ie.rectAreaLights.value=j.state.rectArea,Ie.ltc_1.value=j.state.rectAreaLTC1,Ie.ltc_2.value=j.state.rectAreaLTC2,Ie.pointLights.value=j.state.point,Ie.pointLightShadows.value=j.state.pointShadow,Ie.hemisphereLights.value=j.state.hemi,Ie.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ie.spotLightMatrix.value=j.state.spotLightMatrix,Ie.spotLightMap.value=j.state.spotLightMap,Ie.pointShadowMatrix.value=j.state.pointShadowMatrix),N.currentProgram=et,N.uniformsList=null,et}function Jm(M){if(M.uniformsList===null){let A=M.currentProgram.getUniforms();M.uniformsList=Ur.seqWithValue(A.seq,M.uniforms)}return M.uniformsList}function Qm(M,A){let H=y.get(M);H.outputColorSpace=A.outputColorSpace,H.batching=A.batching,H.batchingColor=A.batchingColor,H.instancing=A.instancing,H.instancingColor=A.instancingColor,H.instancingMorph=A.instancingMorph,H.skinning=A.skinning,H.morphTargets=A.morphTargets,H.morphNormals=A.morphNormals,H.morphColors=A.morphColors,H.morphTargetsCount=A.morphTargetsCount,H.numClippingPlanes=A.numClippingPlanes,H.numIntersection=A.numClipIntersection,H.vertexAlphas=A.vertexAlphas,H.vertexTangents=A.vertexTangents,H.toneMapping=A.toneMapping}function UM(M,A,H,N,j){A.isScene!==!0&&(A=Tt),w.resetTextureUnits();let ue=A.fog,ge=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?A.environment:null,pe=O===null?x.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:xa,xe=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap,Fe=$.get(N.envMap||ge,xe),Ge=N.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,et=!!H.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Ie=!!H.morphAttributes.position,Et=!!H.morphAttributes.normal,Wt=!!H.morphAttributes.color,Ut=Ci;N.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ut=x.toneMapping);let St=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,hn=St!==void 0?St.length:0,Se=y.get(N),jn=b.state.lights;if(Ae===!0&&(Ue===!0||M!==z)){let sn=M===z&&N.id===q;oe.setState(N,M,sn)}let ut=!1;N.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==jn.state.version||Se.outputColorSpace!==pe||j.isBatchedMesh&&Se.batching===!1||!j.isBatchedMesh&&Se.batching===!0||j.isBatchedMesh&&Se.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Se.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Se.instancing===!1||!j.isInstancedMesh&&Se.instancing===!0||j.isSkinnedMesh&&Se.skinning===!1||!j.isSkinnedMesh&&Se.skinning===!0||j.isInstancedMesh&&Se.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Se.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Se.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Se.instancingMorph===!1&&j.morphTexture!==null||Se.envMap!==Fe||N.fog===!0&&Se.fog!==ue||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==oe.numPlanes||Se.numIntersection!==oe.numIntersection)||Se.vertexAlphas!==Ge||Se.vertexTangents!==et||Se.morphTargets!==Ie||Se.morphNormals!==Et||Se.morphColors!==Wt||Se.toneMapping!==Ut||Se.morphTargetsCount!==hn)&&(ut=!0):(ut=!0,Se.__version=N.version);let ti=Se.currentProgram;ut===!0&&(ti=ys(N,A,j));let xi=!1,$o=!1,La=!1,Lt=ti.getUniforms(),pn=Se.uniforms;if(Ee.useProgram(ti.program)&&(xi=!0,$o=!0,La=!0),N.id!==q&&(q=N.id,$o=!0),xi||z!==M){Ee.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Lt.setValue(I,"projectionMatrix",M.projectionMatrix),Lt.setValue(I,"viewMatrix",M.matrixWorldInverse);let go=Lt.map.cameraPosition;go!==void 0&&go.setValue(I,dt.setFromMatrixPosition(M.matrixWorld)),At.logarithmicDepthBuffer&&Lt.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&Lt.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),z!==M&&(z=M,$o=!0,La=!0)}if(Se.needsLights&&(jn.state.directionalShadowMap.length>0&&Lt.setValue(I,"directionalShadowMap",jn.state.directionalShadowMap,w),jn.state.spotShadowMap.length>0&&Lt.setValue(I,"spotShadowMap",jn.state.spotShadowMap,w),jn.state.pointShadowMap.length>0&&Lt.setValue(I,"pointShadowMap",jn.state.pointShadowMap,w)),j.isSkinnedMesh){Lt.setOptional(I,j,"bindMatrix"),Lt.setOptional(I,j,"bindMatrixInverse");let sn=j.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Lt.setValue(I,"boneTexture",sn.boneTexture,w))}j.isBatchedMesh&&(Lt.setOptional(I,j,"batchingTexture"),Lt.setValue(I,"batchingTexture",j._matricesTexture,w),Lt.setOptional(I,j,"batchingIdTexture"),Lt.setValue(I,"batchingIdTexture",j._indirectTexture,w),Lt.setOptional(I,j,"batchingColorTexture"),j._colorsTexture!==null&&Lt.setValue(I,"batchingColorTexture",j._colorsTexture,w));let ho=H.morphAttributes;if((ho.position!==void 0||ho.normal!==void 0||ho.color!==void 0)&&me.update(j,H,ti),($o||Se.receiveShadow!==j.receiveShadow)&&(Se.receiveShadow=j.receiveShadow,Lt.setValue(I,"receiveShadow",j.receiveShadow)),(N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial)&&N.envMap===null&&A.environment!==null&&(pn.envMapIntensity.value=A.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=ab()),$o&&(Lt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Se.needsLights&&HM(pn,La),ue&&N.fog===!0&&Te.refreshFogUniforms(pn,ue),Te.refreshMaterialUniforms(pn,N,Ye,he,b.state.transmissionRenderTarget[M.id]),Ur.upload(I,Jm(Se),pn,w)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Ur.upload(I,Jm(Se),pn,w),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&Lt.setValue(I,"center",j.center),Lt.setValue(I,"modelViewMatrix",j.modelViewMatrix),Lt.setValue(I,"normalMatrix",j.normalMatrix),Lt.setValue(I,"modelMatrix",j.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){let sn=N.uniformsGroups;for(let go=0,wa=sn.length;go<wa;go++){let eh=sn[go];ye.update(eh,ti),ye.bind(eh,ti)}}return ti}function HM(M,A){M.ambientLightColor.needsUpdate=A,M.lightProbe.needsUpdate=A,M.directionalLights.needsUpdate=A,M.directionalLightShadows.needsUpdate=A,M.pointLights.needsUpdate=A,M.pointLightShadows.needsUpdate=A,M.spotLights.needsUpdate=A,M.spotLightShadows.needsUpdate=A,M.rectAreaLights.needsUpdate=A,M.hemisphereLights.needsUpdate=A}function VM(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(M,A,H){let N=y.get(M);N.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,N.__autoAllocateDepthBuffer===!1&&(N.__useRenderToTexture=!1),y.get(M.texture).__webglTexture=A,y.get(M.depthTexture).__webglTexture=N.__autoAllocateDepthBuffer?void 0:H,N.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,A){let H=y.get(M);H.__webglFramebuffer=A,H.__useDefaultFramebuffer=A===void 0};let qM=I.createFramebuffer();this.setRenderTarget=function(M,A=0,H=0){O=M,k=A,P=H;let N=null,j=!1,ue=!1;if(M){let pe=y.get(M);if(pe.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(I.FRAMEBUFFER,pe.__webglFramebuffer),U.copy(M.viewport),R.copy(M.scissor),ie=M.scissorTest,Ee.viewport(U),Ee.scissor(R),Ee.setScissorTest(ie),q=-1;return}else if(pe.__webglFramebuffer===void 0)w.setupRenderTarget(M);else if(pe.__hasExternalTextures)w.rebindTextures(M,y.get(M.texture).__webglTexture,y.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Ge=M.depthTexture;if(pe.__boundDepthTexture!==Ge){if(Ge!==null&&y.has(Ge)&&(M.width!==Ge.image.width||M.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(M)}}let xe=M.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ue=!0);let Fe=y.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Fe[A])?N=Fe[A][H]:N=Fe[A],j=!0):M.samples>0&&w.useMultisampledRTT(M)===!1?N=y.get(M).__webglMultisampledFramebuffer:Array.isArray(Fe)?N=Fe[H]:N=Fe,U.copy(M.viewport),R.copy(M.scissor),ie=M.scissorTest}else U.copy(Z).multiplyScalar(Ye).floor(),R.copy(re).multiplyScalar(Ye).floor(),ie=le;if(H!==0&&(N=qM),Ee.bindFramebuffer(I.FRAMEBUFFER,N)&&Ee.drawBuffers(M,N),Ee.viewport(U),Ee.scissor(R),Ee.setScissorTest(ie),j){let pe=y.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+A,pe.__webglTexture,H)}else if(ue){let pe=A;for(let xe=0;xe<M.textures.length;xe++){let Fe=y.get(M.textures[xe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+xe,Fe.__webglTexture,H,pe)}}else if(M!==null&&H!==0){let pe=y.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pe.__webglTexture,H)}q=-1},this.readRenderTargetPixels=function(M,A,H,N,j,ue,ge,pe=0){if(!(M&&M.isWebGLRenderTarget)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe){Ee.bindFramebuffer(I.FRAMEBUFFER,xe);try{let Fe=M.textures[pe],Ge=Fe.format,et=Fe.type;if(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pe),!At.textureFormatReadable(Ge)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!At.textureTypeReadable(et)){Be("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A>=0&&A<=M.width-N&&H>=0&&H<=M.height-j&&I.readPixels(A,H,N,j,se.convert(Ge),se.convert(et),ue)}finally{let Fe=O!==null?y.get(O).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(M,A,H,N,j,ue,ge,pe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(xe=xe[ge]),xe)if(A>=0&&A<=M.width-N&&H>=0&&H<=M.height-j){Ee.bindFramebuffer(I.FRAMEBUFFER,xe);let Fe=M.textures[pe],Ge=Fe.format,et=Fe.type;if(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pe),!At.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!At.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ie=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ie),I.bufferData(I.PIXEL_PACK_BUFFER,ue.byteLength,I.STREAM_READ),I.readPixels(A,H,N,j,se.convert(Ge),se.convert(et),0);let Et=O!==null?y.get(O).__webglFramebuffer:null;Ee.bindFramebuffer(I.FRAMEBUFFER,Et);let Wt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await lM(I,Wt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ie),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ue),I.deleteBuffer(Ie),I.deleteSync(Wt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,A=null,H=0){let N=Math.pow(2,-H),j=Math.floor(M.image.width*N),ue=Math.floor(M.image.height*N),ge=A!==null?A.x:0,pe=A!==null?A.y:0;w.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,ge,pe,j,ue),Ee.unbindTexture()};let GM=I.createFramebuffer(),WM=I.createFramebuffer();this.copyTextureToTexture=function(M,A,H=null,N=null,j=0,ue=0){let ge,pe,xe,Fe,Ge,et,Ie,Et,Wt,Ut=M.isCompressedTexture?M.mipmaps[ue]:M.image;if(H!==null)ge=H.max.x-H.min.x,pe=H.max.y-H.min.y,xe=H.isBox3?H.max.z-H.min.z:1,Fe=H.min.x,Ge=H.min.y,et=H.isBox3?H.min.z:0;else{let pn=Math.pow(2,-j);ge=Math.floor(Ut.width*pn),pe=Math.floor(Ut.height*pn),M.isDataArrayTexture?xe=Ut.depth:M.isData3DTexture?xe=Math.floor(Ut.depth*pn):xe=1,Fe=0,Ge=0,et=0}N!==null?(Ie=N.x,Et=N.y,Wt=N.z):(Ie=0,Et=0,Wt=0);let St=se.convert(A.format),hn=se.convert(A.type),Se;A.isData3DTexture?(w.setTexture3D(A,0),Se=I.TEXTURE_3D):A.isDataArrayTexture||A.isCompressedArrayTexture?(w.setTexture2DArray(A,0),Se=I.TEXTURE_2D_ARRAY):(w.setTexture2D(A,0),Se=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,A.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,A.unpackAlignment);let jn=I.getParameter(I.UNPACK_ROW_LENGTH),ut=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ti=I.getParameter(I.UNPACK_SKIP_PIXELS),xi=I.getParameter(I.UNPACK_SKIP_ROWS),$o=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ut.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ut.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Fe),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ge),I.pixelStorei(I.UNPACK_SKIP_IMAGES,et);let La=M.isDataArrayTexture||M.isData3DTexture,Lt=A.isDataArrayTexture||A.isData3DTexture;if(M.isDepthTexture){let pn=y.get(M),ho=y.get(A),sn=y.get(pn.__renderTarget),go=y.get(ho.__renderTarget);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,sn.__webglFramebuffer),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,go.__webglFramebuffer);for(let wa=0;wa<xe;wa++)La&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,y.get(M).__webglTexture,j,et+wa),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,y.get(A).__webglTexture,ue,Wt+wa)),I.blitFramebuffer(Fe,Ge,ge,pe,Ie,Et,ge,pe,I.DEPTH_BUFFER_BIT,I.NEAREST);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(j!==0||M.isRenderTargetTexture||y.has(M)){let pn=y.get(M),ho=y.get(A);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,GM),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,WM);for(let sn=0;sn<xe;sn++)La?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pn.__webglTexture,j,et+sn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pn.__webglTexture,j),Lt?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ho.__webglTexture,ue,Wt+sn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ho.__webglTexture,ue),j!==0?I.blitFramebuffer(Fe,Ge,ge,pe,Ie,Et,ge,pe,I.COLOR_BUFFER_BIT,I.NEAREST):Lt?I.copyTexSubImage3D(Se,ue,Ie,Et,Wt+sn,Fe,Ge,ge,pe):I.copyTexSubImage2D(Se,ue,Ie,Et,Fe,Ge,ge,pe);Ee.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Lt?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(Se,ue,Ie,Et,Wt,ge,pe,xe,St,hn,Ut.data):A.isCompressedArrayTexture?I.compressedTexSubImage3D(Se,ue,Ie,Et,Wt,ge,pe,xe,St,Ut.data):I.texSubImage3D(Se,ue,Ie,Et,Wt,ge,pe,xe,St,hn,Ut):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ue,Ie,Et,ge,pe,St,hn,Ut.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ue,Ie,Et,Ut.width,Ut.height,St,Ut.data):I.texSubImage2D(I.TEXTURE_2D,ue,Ie,Et,ge,pe,St,hn,Ut);I.pixelStorei(I.UNPACK_ROW_LENGTH,jn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ut),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ti),I.pixelStorei(I.UNPACK_SKIP_ROWS,xi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,$o),ue===0&&A.generateMipmaps&&I.generateMipmap(Se),Ee.unbindTexture()},this.initRenderTarget=function(M){y.get(M).__webglFramebuffer===void 0&&w.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?w.setTextureCube(M,0):M.isData3DTexture?w.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?w.setTexture2DArray(M,0):w.setTexture2D(M,0),Ee.unbindTexture()},this.resetState=function(){k=0,P=0,O=null,Ee.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var cb=["canvasContainer"],yu=class n{canvasContainer;renderer=null;scene=null;camera=null;animId=0;bookGroup=null;frontGroup=null;pageGroups=[];_resizeHandler=null;isOpen=!1;openProg=0;targetProg=0;BW=1.5;BH=2.2;CT=.065;PT=.018;NP=16;BASE_RX=-.58;BASE_RY=.18;ngAfterViewInit(){this.initScene()}initScene(){let e=this.canvasContainer.nativeElement,t=e.clientWidth||400,i=e.clientHeight||480;this.renderer=new mu({antialias:!0,alpha:!0}),this.renderer.setSize(t,i),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=C0,this.renderer.domElement.style.display="block",this.renderer.domElement.style.cursor="pointer",e.appendChild(this.renderer.domElement),this.scene=new Zc,this.camera=new fn(65,t/i,.1,100),this.camera.position.set(-.5,2.5,5.5),this.camera.lookAt(0,.5,0),this.scene.add(new os(16777215,.45));let o=new is(16774624,1.6);o.position.set(3,7,5),o.castShadow=!0,o.shadow.mapSize.width=1024,o.shadow.mapSize.height=1024,o.shadow.camera.near=.5,o.shadow.camera.far=30,o.shadow.camera.left=-5,o.shadow.camera.right=5,o.shadow.camera.top=5,o.shadow.camera.bottom=-5,this.scene.add(o);let a=new jr(16739125,.8,14);a.position.set(-5,.5,3),this.scene.add(a);let r=new jr(16627731,.45,10);r.position.set(0,6,1),this.scene.add(r),this.buildBook(),this.renderer.domElement.addEventListener("click",()=>this.toggleBook()),this._resizeHandler=()=>this.onWindowResize(),window.addEventListener("resize",this._resizeHandler),this.animate()}buildBook(){if(!this.scene)return;let e=-this.BW/2,t=this.CT*2+this.PT*this.NP,i=this.makeShadowTexture(),o=new Po(4.2,3),a=new Ea({map:i,transparent:!0,opacity:.28,depthWrite:!1}),r=new on(o,a);r.rotation.x=-Math.PI/2,r.position.set(.35,-1.85,0),this.scene.add(r),this.bookGroup=new yi,this.bookGroup.rotation.x=this.BASE_RX,this.bookGroup.rotation.y=this.BASE_RY,this.bookGroup.position.set(0,0,0),this.scene.add(this.bookGroup);let c=(_,S=.65)=>new Mi({color:_,roughness:S}),s=793960,l=new vi(this.BW,this.BH,this.CT),d=new on(l,[c(s),c(s),c(461864),c(461864),c(592932),new Mi({map:this.makeBackCoverTexture(),roughness:.5})]);d.position.z=this.CT/2,d.castShadow=!0,this.bookGroup.add(d);let p=new vi(.09,this.BH,t),u=new on(p,[c(462894),new Mi({map:this.makeSpineTexture(),roughness:.4}),c(330788),c(330788),c(793685),c(793685)]);u.position.x=e-.045,u.position.z=this.CT+t/2,u.castShadow=!0,this.bookGroup.add(u);for(let _=0;_<this.NP;_++){let S=new yi;S.position.x=e,S.position.z=this.CT+_*this.PT+this.PT/2;let E=this.makePageTexture(_),b=new vi(this.BW,this.BH,this.PT*.55),F=new on(b,[c(15263957,.9),c(15263957,.9),c(14013888,.9),c(14013888,.9),new Mi({map:E,roughness:.85}),new Mi({map:E,roughness:.85})]);F.position.x=this.BW/2,F.castShadow=!0,S.add(F),this.pageGroups.push(S),this.bookGroup.add(S)}this.frontGroup=new yi,this.frontGroup.position.x=e,this.frontGroup.position.z=this.CT+this.NP*this.PT+this.CT/2;let f=new vi(this.BW,this.BH,this.CT),g=new on(f,[c(s),c(s),c(595008),c(595008),new Mi({map:this.makeFrontCoverTexture(),roughness:.22,metalness:.06}),new Mi({color:1579064,roughness:.7})]);g.position.x=this.BW/2,g.castShadow=!0,this.frontGroup.add(g),this.bookGroup.add(this.frontGroup);let C=new Po(8,8),h=new es({opacity:.18}),m=new on(C,h);m.rotation.x=-Math.PI/2,m.position.y=-this.BH/2-.02,m.receiveShadow=!0,this.bookGroup.add(m)}toggleBook(){this.isOpen=!this.isOpen,this.targetProg=this.isOpen?1:0}applyProgress(e){if(!this.frontGroup)return;let t=i=>Math.sin(i*Math.PI/2);this.frontGroup.rotation.y=e*-Math.PI,this.pageGroups.forEach((i,o)=>{let a=o/Math.max(1,this.NP-1),r=t(a),c=-Math.PI*(.05+r*.87),s=(1-a)*.18,l=Math.max(0,Math.min(1,(e-s)/Math.max(.001,1-s)));i.rotation.y=l*c})}animate=()=>{if(this.animId=requestAnimationFrame(this.animate),!this.renderer||!this.scene||!this.camera||!this.bookGroup)return;this.openProg+=(this.targetProg-this.openProg)*.038,this.applyProgress(this.openProg);let e=Date.now()*.001,t=Math.sin(e*.75)*.015;this.bookGroup.position.y=0+t,this.renderer.render(this.scene,this.camera)};onWindowResize(){if(!this.renderer||!this.camera||!this.canvasContainer)return;let e=this.canvasContainer.nativeElement.clientWidth,t=this.canvasContainer.nativeElement.clientHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}makeShadowTexture(){let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d"),i=t.createRadialGradient(128,128,8,128,128,128);return i.addColorStop(0,"rgba(0,0,0,0.52)"),i.addColorStop(.45,"rgba(0,0,0,0.22)"),i.addColorStop(.78,"rgba(0,0,0,0.06)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=i,t.fillRect(0,0,256,256),new fo(e)}roundedRect(e,t,i,o,a,r){e.beginPath(),e.moveTo(t+r,i),e.lineTo(t+o-r,i),e.quadraticCurveTo(t+o,i,t+o,i+r),e.lineTo(t+o,i+a-r),e.quadraticCurveTo(t+o,i+a,t+o-r,i+a),e.lineTo(t+r,i+a),e.quadraticCurveTo(t,i+a,t,i+a-r),e.lineTo(t,i+r),e.quadraticCurveTo(t,i,t+r,i),e.closePath()}makeFrontCoverTexture(){let e=document.createElement("canvas");e.width=600,e.height=900;let t=e.getContext("2d"),i=t.createLinearGradient(0,0,0,900);i.addColorStop(0,"#07175a"),i.addColorStop(.42,"#1E3A8A"),i.addColorStop(.75,"#1d50c0"),i.addColorStop(1,"#bf3d10"),t.fillStyle=i,t.fillRect(0,0,600,900),t.strokeStyle="rgba(253,184,19,0.09)",t.lineWidth=1;for(let p=0;p<=600;p+=50)t.beginPath(),t.moveTo(p,0),t.lineTo(p,900),t.stroke();for(let p=0;p<=900;p+=50)t.beginPath(),t.moveTo(0,p),t.lineTo(600,p),t.stroke();t.strokeStyle="#FDB813",t.lineWidth=13,t.strokeRect(15,15,570,870),t.lineWidth=3,t.strokeStyle="rgba(253,184,19,0.45)",t.strokeRect(28,28,544,844);let o=128,a=95,r=344;t.fillStyle="rgba(5, 15, 55, 0.82)",this.roundedRect(t,o,a,r,r,14),t.fill(),t.strokeStyle="#FDB813",t.lineWidth=3,this.roundedRect(t,o,a,r,r,14),t.stroke();let c=r/5;for(let p=0;p<5;p++)for(let u=0;u<5;u++)t.fillStyle=(p+u)%2===0?"rgba(253,184,19,0.13)":"rgba(255,255,255,0.03)",t.fillRect(o+u*c,a+p*c,c,c);[[0,0],[0,1],[0,2],[0,3],[0,4],[1,4],[2,4],[3,4],[4,4],[4,3],[4,2],[4,1],[4,0],[3,0],[2,0]].forEach(([p,u])=>{let f=o+u*c+c/2,g=a+p*c+c/2;t.beginPath(),t.arc(f,g,10,0,Math.PI*2),t.fillStyle="#FDB813",t.fill(),t.beginPath(),t.arc(f,g,5,0,Math.PI*2),t.fillStyle="#0d2470",t.fill()});let l=o+r/2,d=a+r/2;return t.beginPath(),t.arc(l,d,38,0,Math.PI*2),t.fillStyle="#FF6B35",t.fill(),t.beginPath(),t.arc(l,d,30,0,Math.PI*2),t.strokeStyle="#FDB813",t.lineWidth=3,t.stroke(),t.fillStyle="#fff",t.font="bold 34px Arial",t.textAlign="center",t.fillText("$",l,d+13),t.beginPath(),t.arc(o+c/2,a+c/2,17,0,Math.PI*2),t.fillStyle="#FF3333",t.fill(),t.beginPath(),t.arc(o+c/2,a+c/2,9,0,Math.PI*2),t.fillStyle="#ff9999",t.fill(),t.strokeStyle="rgba(253,184,19,0.6)",t.lineWidth=2,t.beginPath(),t.moveTo(65,480),t.lineTo(535,480),t.stroke(),t.textAlign="center",t.shadowColor="rgba(0,0,0,0.65)",t.shadowBlur=14,t.fillStyle="#FFFFFF",t.font="bold 49px Arial",t.fillText("DO TABULEIRO",300,535),t.fillStyle="#FDB813",t.font="bold 59px Arial",t.fillText("AO MERCADO",300,605),t.shadowBlur=0,t.fillStyle="rgba(255,255,255,0.82)",t.font="26px Arial",t.fillText("Empreendedorismo pelo jogo",300,655),t.strokeStyle="rgba(253,184,19,0.3)",t.lineWidth=1.5,t.beginPath(),t.moveTo(100,695),t.lineTo(500,695),t.stroke(),t.fillStyle="#FF6B35",this.roundedRect(t,224,714,152,48,24),t.fill(),t.fillStyle="#fff",t.font="bold 27px Arial",t.fillText("E-BOOK",300,745),t.fillStyle="#FDB813",t.font="25px Arial",t.fillText("\u2605\u2605\u2605\u2605\u2605",300,805),t.fillStyle="rgba(255,255,255,0.5)",t.font="18px Arial",t.fillText("Edi\xE7\xE3o Digital Exclusiva",300,845),new fo(e)}makeBackCoverTexture(){let e=document.createElement("canvas");e.width=600,e.height=900;let t=e.getContext("2d"),i=t.createLinearGradient(0,900,0,0);i.addColorStop(0,"#030a22"),i.addColorStop(1,"#0b1c58"),t.fillStyle=i,t.fillRect(0,0,600,900),t.strokeStyle="#FDB813",t.lineWidth=8,t.strokeRect(12,12,576,876),t.fillStyle="rgba(255,255,255,0.55)",t.font="17px Arial",t.textAlign="center",t.fillText("contato@dotabuleiroaomercado.com.br",300,695),t.fillStyle="rgba(255,255,255,0.06)",t.fillRect(172,722,256,98);for(let o=0;o<22;o++)t.fillStyle=o%3===0?"rgba(253,184,19,0.38)":"rgba(255,255,255,0.18)",t.fillRect(177+o*10,730,o%3===0?9:5,73);return new fo(e)}makeSpineTexture(){let e=document.createElement("canvas");e.width=128,e.height=900;let t=e.getContext("2d"),i=t.createLinearGradient(0,0,128,0);return i.addColorStop(0,"#050e30"),i.addColorStop(1,"#102278"),t.fillStyle=i,t.fillRect(0,0,128,900),t.strokeStyle="#FDB813",t.lineWidth=3,t.strokeRect(4,4,120,892),t.save(),t.translate(64,450),t.rotate(-Math.PI/2),t.fillStyle="#FDB813",t.font="bold 21px Arial",t.textAlign="center",t.fillText("DO TABULEIRO AO MERCADO",0,8),t.restore(),new fo(e)}makePageTexture(e){let t=document.createElement("canvas");t.width=512,t.height=768;let i=t.getContext("2d"),o=248-Math.floor(e/2)*2;i.fillStyle=`rgb(${o},${o-2},${o-12})`,i.fillRect(0,0,512,768);let a=i.createLinearGradient(0,0,60,0);a.addColorStop(0,"rgba(0,0,0,0.14)"),a.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=a,i.fillRect(0,0,60,768),i.fillStyle="rgba(0,0,0,0.055)";let r=24+e%3*2;for(let c=0;c<r;c++){let s=180+Math.random()*260;i.fillRect(65,75+c*25,s,2.5)}return i.fillStyle="rgba(0,0,0,0.04)",i.fillRect(65,300,120,2.5),i.fillStyle="rgba(0,0,0,0.18)",i.font="15px Arial",i.textAlign="center",i.fillText(`${e+1}`,256,742),new fo(t)}ngOnDestroy(){if(cancelAnimationFrame(this.animId),this.renderer&&this.canvasContainer){let e=this.canvasContainer.nativeElement;this.renderer.domElement.parentElement===e&&e.removeChild(this.renderer.domElement),this.renderer.dispose()}this._resizeHandler&&window.removeEventListener("resize",this._resizeHandler)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=we({type:n,selectors:[["app-book3d"]],viewQuery:function(t,i){if(t&1&&ql(cb,5),t&2){let o;lf(o=df())&&(i.canvasContainer=o.first)}},decls:2,vars:0,consts:[["canvasContainer",""],[1,"w-full","h-full"]],template:function(t,i){t&1&&Ti(0,"div",1,0)},encapsulation:2})};var vu=class n{handleCTA(){window.open(Qt.checkoutUrl,"_blank","noopener,noreferrer")}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=we({type:n,selectors:[["app-hero"]],decls:38,vars:0,consts:[["id","hero",1,"relative","min-h-screen","flex","items-center","bg-linear-to-br","from-[#1E3A8A]","via-[#FF6B35]","to-[#FDB813]"],[1,"absolute","inset-0","overflow-hidden"],[1,"absolute","top-[5%]","left-[3%]","w-[5%]","aspect-square","rounded-full","bg-white/25","blur-xl","animate-float-particle-1"],[1,"absolute","top-[10%]","right-[5%]","w-[8%]","aspect-square","rounded-full","bg-[#FDB813]/25","blur-2xl","animate-float-particle-2"],[1,"absolute","bottom-[5%]","left-[25%]","w-[6%]","aspect-square","rounded-full","bg-white/25","blur-xl","animate-float-particle-3"],[1,"relative","mx-auto","px-[clamp(1rem,5vw,3.5rem)]","z-10","w-full","max-w-7xl","overflow-visible"],[1,"grid","lg:grid-cols-2","gap-[clamp(2.5rem,6vw,6rem)]","items-stretch","min-h-screen","overflow-visible"],[1,"text-center","lg:text-left","flex","flex-col","justify-center"],[1,"font-extrabold","text-white","leading-tight","mb-[clamp(1rem,2vh,1.5rem)]",2,"font-size","clamp(2rem, calc(5vw + 0.5rem), 4.75rem)"],[1,"text-gradient"],[1,"relative","inline-block"],[1,"relative","z-10","text-gradient"],[1,"absolute","-bottom-1.5","rounded-2xl","left-0","w-full","h-1","bg-[#FDB813]"],[1,"text-white/90","mx-auto","lg:mx-0","max-w-xl","mb-[clamp(1.5rem,3vh,2rem)]",2,"font-size","clamp(1rem, 2vw + 0.5rem, 1.5rem)"],[1,"mb-[clamp(1.5rem,3vh,2rem)]"],["href","#comprar",1,"w-full","h-[clamp(3rem,6vh,3.5rem)]","px-[clamp(2rem,6vw,3rem)]","text-white","inline-flex","items-center","justify-center","cursor-pointer","rounded-lg","font-semibold","transition-all","duration-300","disabled:opacity-50","disabled:cursor-not-allowed","bg-linear-to-r","from-[#FF6B35]","to-[#FDB813]","hover:from-[#FF8555]","hover:to-[#FDCA33]","shadow-2xl","hover:shadow-xl","hover:scale-105","group",2,"font-size","clamp(0.875rem, 1.5vw + 0.25rem, 1.125rem)"],["lucideArrowRight","",1,"ml-2","w-[1.25em]","h-[1.25em]","group-hover:translate-x-1","transition-transform"],[1,"flex","flex-wrap","gap-[clamp(0.75rem,2vw,1.25rem)]"],[1,"inline-flex","grow","items-center","justify-center","rounded-lg","px-[clamp(0.75rem,2vw,1rem)]","py-[clamp(0.6rem,1.5vh,0.9rem)]","text-sm","font-medium","bg-[#1E3A8A]","text-white","gap-2"],["lucideDownload","",1,"w-3.5","h-3.5"],["lucideZap","",1,"w-3.5","h-3.5"],["lucideShieldCheck","",1,"w-3.5","h-3.5"],[1,"hidden","relative","lg:flex","items-center","justify-center","lg:min-h-200","min-h-150","overflow-visible"],[1,"relative","w-full","h-full","max-w-125","aspect-5/6"],[1,"absolute","bottom-[clamp(2rem,5vh,4rem)]","left-1/2","-translate-x-1/2","animate-scroll-indicator"],[1,"w-6","h-10","border-2","border-white/50","rounded-full","flex","justify-center","pt-2"],[1,"w-1.5","h-1.5","bg-white","rounded-full","animate-scroll-dot"]],template:function(t,i){t&1&&(Y(0,"section",0)(1,"div",1),be(2,"div",2)(3,"div",3)(4,"div",4),J(),Y(5,"div",5)(6,"div",6)(7,"div",7)(8,"h1",8),W(9," Do "),Y(10,"span",9),W(11,"Tabuleiro"),J(),W(12," ao "),Y(13,"span",10)(14,"span",11),W(15,"Mercado"),J(),be(16,"span",12),J()(),Y(17,"p",13),W(18," Aprenda empreendedorismo de forma din\xE2mica e revolucion\xE1ria atrav\xE9s do nosso e-book exclusivo "),J(),Y(19,"div",14)(20,"a",15),W(21," GARANTIR MEU E-BOOK "),tt(),be(22,"svg",16),J()(),Pt(),Y(23,"div",17)(24,"span",18),tt(),be(25,"svg",19),W(26," 100% Digital "),J(),Pt(),Y(27,"span",18),tt(),be(28,"svg",20),W(29," Acesso Imediato "),J(),Pt(),Y(30,"span",18),tt(),be(31,"svg",21),W(32," Garantia 7 dias "),J()()(),Pt(),Y(33,"div",22),be(34,"app-book3d",23),J()()(),Y(35,"div",24)(36,"div",25),be(37,"div",26),J()()())},dependencies:[yu,Ql,id,vd,ld],encapsulation:2})};var sb=(n,e)=>e.title;function lb(n,e){n&1&&(tt(),be(0,"svg",9))}function db(n,e){n&1&&(tt(),be(0,"svg",10))}function ub(n,e){n&1&&(tt(),be(0,"svg",11))}function pb(n,e){n&1&&(tt(),be(0,"svg",12))}function fb(n,e){n&1&&(tt(),be(0,"svg",13))}function mb(n,e){n&1&&(tt(),be(0,"svg",14))}function hb(n,e){if(n&1&&(Y(0,"div",7)(1,"div",8)(2,"div"),Ve(3,lb,1,0,":svg:svg",9)(4,db,1,0,":svg:svg",10)(5,ub,1,0,":svg:svg",11)(6,pb,1,0,":svg:svg",12)(7,fb,1,0,":svg:svg",13)(8,mb,1,0,":svg:svg",14),J(),Y(9,"h3",15),W(10),J(),Y(11,"p",16),W(12),J(),Y(13,"div",17)(14,"div",18),be(15,"div",19),Y(16,"p",20)(17,"span",21),W(18,"Problema:"),J(),W(19),J()(),Y(20,"div",18),be(21,"div",22),Y(22,"p",23)(23,"span",21),W(24,"Resultado:"),J(),W(25),J()()()()()),n&2){let t,i=e.$implicit;ee(2),Ic("w-12 h-12 rounded-xl bg-linear-to-br "+i.color+" flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"),ee(),qe((t=i.icon)==="target"?3:t==="lightbulb"?4:t==="trending-up"?5:t==="users"?6:t==="book-open"?7:t==="infinity"?8:-1),ee(7),ht(" ",i.title," "),ee(2),ht(" ",i.description," "),ee(7),ht(" ",i.problem," "),ee(6),ht(" ",i.result," ")}}var Mu=class n{benefits=[{icon:"target",title:"Planos de Neg\xF3cio Vencedores",description:"Aprenda a criar estrat\xE9gias s\xF3lidas que transformam ideias em neg\xF3cios lucrativos",color:"from-[#FF6B35] to-[#FF8555]",problem:"Dificuldade em estruturar um plano de neg\xF3cios",result:"Plano completo e validado em 7 dias"},{icon:"lightbulb",title:"Aprendizado Gamificado",description:"Conceitos complexos apresentados de forma l\xFAdica e envolvente atrav\xE9s do jogo de tabuleiro",color:"from-[#FDB813] to-[#FDCA33]",problem:"Teoria chata e dif\xEDcil de absorver",result:"Aprenda brincando e retenha 3x mais"},{icon:"trending-up",title:"Metodologia Comprovada",description:"Sistema testado e aprovado por mais de 500 empreendedores de sucesso",color:"from-[#1E3A8A] to-[#3B5FBA]",problem:"Medo de investir em algo n\xE3o comprovado",result:"M\xE9todo validado por centenas de casos reais"},{icon:"users",title:"Networking e Comunidade",description:"Acesso a uma rede exclusiva de empreendedores para trocar experi\xEAncias",color:"from-[#10B981] to-[#34D399]",problem:"Empreender sozinho \xE9 solit\xE1rio",result:"Comunidade ativa e suporte cont\xEDnuo"},{icon:"book-open",title:"Conte\xFAdo Pr\xE1tico e Aplic\xE1vel",description:"Exerc\xEDcios e casos reais que voc\xEA pode implementar imediatamente no seu neg\xF3cio",color:"from-[#8B5CF6] to-[#A78BFA]",problem:"Conte\xFAdo te\xF3rico sem aplica\xE7\xE3o pr\xE1tica",result:"Implemente hoje, veja resultados amanh\xE3"},{icon:"infinity",title:"Acesso Vital\xEDcio + Atualiza\xE7\xF5es",description:"Receba todas as atualiza\xE7\xF5es e novos conte\xFAdos gratuitamente, para sempre",color:"from-[#EC4899] to-[#F472B6]",problem:"Conte\xFAdo desatualizado ap\xF3s poucos meses",result:"Sempre atualizado com novas estrat\xE9gias"}];static \u0275fac=function(t){return new(t||n)};static \u0275cmp=we({type:n,selectors:[["app-benefits-section"]],decls:12,vars:0,consts:[["id","beneficios",1,"py-[clamp(3rem,8vh,6rem)]","bg-white"],[1,"mx-auto","px-[clamp(1rem,5vw,3.5rem)]","w-full","max-w-7xl"],[1,"text-center","mb-[clamp(2rem,5vh,4rem)]"],[1,"font-extrabold","text-gray-900","mb-4",2,"font-size","clamp(1.75rem, 4vw + 0.25rem, 3rem)"],[1,"text-gradient"],[1,"text-gray-600","mx-auto","max-w-2xl",2,"font-size","clamp(1rem, 2vw + 0.5rem, 1.25rem)"],[1,"grid","md:grid-cols-2","lg:grid-cols-3","gap-[clamp(1rem,3vw,2rem)]"],[1,"rounded-2xl","p-6","h-full","transition-all","duration-300","hover:-translate-y-1","hover:shadow-2xl","bg-white","border","border-gray-100","group","relative","overflow-hidden"],[1,"relative","z-10"],["lucideTarget","",1,"text-white","w-6","h-6"],["lucideLightbulb","",1,"text-white","w-6","h-6"],["lucideTrendingUp","",1,"text-white","w-6","h-6"],["lucideUsers","",1,"text-white","w-6","h-6"],["lucideBookOpen","",1,"text-white","w-6","h-6"],["lucideInfinity","",1,"text-white","w-6","h-6"],[1,"text-lg","font-bold","text-gray-900","mb-2",2,"font-size","clamp(1rem, 2vw + 0.5rem, 1.25rem)"],[1,"text-gray-600","mb-4","leading-relaxed",2,"font-size","clamp(0.875rem, 1.5vw, 1rem)"],[1,"space-y-2","pt-4","border-t","border-gray-100"],[1,"flex","items-start","gap-2"],[1,"w-1.5","h-1.5","rounded-full","bg-red-400","mt-2","shrink-0"],[1,"text-sm","text-gray-500"],[1,"font-medium"],[1,"w-1.5","h-1.5","rounded-full","bg-green-400","mt-2","shrink-0"],[1,"text-sm","text-gray-700"]],template:function(t,i){t&1&&(Y(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),W(4," O que voc\xEA vai "),Y(5,"span",4),W(6," aprender"),J()(),Y(7,"p",5),W(8," Conte\xFAdo estrat\xE9gico e pr\xE1tico que vai acelerar sua jornada empreendedora "),J()(),Y(9,"div",6),Zt(10,hb,26,7,"div",7,sb),J()()()),t&2&&(ee(10),Yt(i.benefits))},dependencies:[fd,rd,hd,gd,mr,ad],encapsulation:2})};var gb=()=>[1,2,3,4,5],yb=(n,e)=>e.name;function vb(n,e){n&1&&(tt(),be(0,"svg",10))}function Mb(n,e){if(n&1&&(Y(0,"div",7),tt(),be(1,"svg",8),Pt(),Y(2,"div",9),Zt(3,vb,1,0,":svg:svg",10,Sc),J(),Y(5,"p",11),W(6),J(),Y(7,"div",12)(8,"div",13)(9,"span",14),W(10),J()(),Y(11,"div",15)(12,"p",16),W(13),J(),Y(14,"p",17),W(15),J()()()()),n&2){let t=e.$implicit;ee(3),Yt(pf(5,gb)),ee(3),ht(' "',t.content,'" '),ee(4),it(t.initials),ee(3),it(t.name),ee(2),Wl(" ",t.role," \u2022 ",t.company," ")}}var Cu=class n{testimonials=[{name:"Ana Paula Silva",role:"CEO",company:"TechStart",initials:"AS",content:"Este e-book transformou completamente minha vis\xE3o sobre empreendedorismo. A metodologia do jogo tornou o aprendizado muito mais pr\xE1tico e envolvente!"},{name:"Carlos Mendes",role:"Fundador",company:"InovaBrasil",initials:"CM",content:"Aprendi em dias o que levaria meses em cursos tradicionais. A abordagem l\xFAdica facilita muito a absor\xE7\xE3o dos conceitos de neg\xF3cios."},{name:"Juliana Costa",role:"Empreendedora",company:"Boutique JC",initials:"JC",content:"Recomendo para todos que querem empreender! O conte\xFAdo \xE9 rico e a forma como \xE9 apresentado atrav\xE9s do jogo torna tudo mais claro e aplic\xE1vel."}];static \u0275fac=function(t){return new(t||n)};static \u0275cmp=we({type:n,selectors:[["app-social-proof"]],decls:13,vars:0,consts:[["id","depoimentos",1,"py-[clamp(3rem,8vh,6rem)]","bg-gray-50"],[1,"mx-auto","px-[clamp(1rem,5vw,3.5rem)]","w-full","max-w-7xl"],[1,"text-center","mb-[clamp(2rem,5vh,4rem)]"],[1,"font-extrabold","text-gray-900","mb-4",2,"font-size","clamp(1.75rem, 4vw + 0.25rem, 3rem)"],[1,"text-gradient"],[1,"text-gray-600","mx-auto","max-w-2xl",2,"font-size","clamp(1rem, 2vw + 0.5rem, 1.25rem)"],[1,"grid","md:grid-cols-2","lg:grid-cols-3","gap-[clamp(1rem,3vw,2rem)]"],[1,"rounded-2xl","p-6","h-full","transition-all","duration-300","hover:-translate-y-2","hover:shadow-xl","bg-white","border","border-gray-100"],["lucideQuote","",1,"w-8","h-8","text-[#FF6B35]/20","mb-3"],[1,"flex","gap-0.5","mb-3"],["lucideStar","",1,"w-4","h-4","fill-[#FDB813]","text-[#FDB813]"],[1,"text-gray-700","mb-5","leading-relaxed",2,"font-size","clamp(0.875rem, 1.5vw, 1rem)"],[1,"flex","items-center","gap-3"],[1,"w-11","h-11","shrink-0","rounded-full","bg-linear-to-br","from-[#FF6B35]","to-[#FDB813]","flex","items-center","justify-center"],[1,"text-white","font-semibold","text-sm"],[1,"min-w-0"],[1,"font-semibold","text-gray-900","truncate"],[1,"text-xs","text-gray-500","truncate"]],template:function(t,i){t&1&&(Y(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),W(4," Mais de "),Y(5,"span",4),W(6," 500+ empreendedores"),J(),W(7," j\xE1 transformaram seus neg\xF3cios "),J(),Y(8,"p",5),W(9," Veja o que nossos clientes t\xEAm a dizer sobre a experi\xEAncia "),J()(),Y(10,"div",6),Zt(11,Mb,16,6,"div",7,yb),J()()()),t&2&&(ee(11),Yt(i.testimonials))},dependencies:[sd,pd],encapsulation:2})};var Cb=(n,e)=>e.title,_b=(n,e)=>e.number;function Db(n,e){if(n&1){let t=ui();Y(0,"div",20),pi("click",function(){let o=Zn(t).$index,a=Mn();return Yn(a.selectImage(o))}),Y(1,"div",21)(2,"div",22),tt(),be(3,"svg",23),J()(),Pt(),Y(4,"div",24)(5,"h4",25),W(6),J(),Y(7,"p",26),W(8),J()()()}if(n&2){let t=e.$implicit;ee(6),ht(" ",t.title," "),ee(2),it(t.description)}}function xb(n,e){if(n&1&&(Y(0,"li",36),tt(),be(1,"svg",37),Pt(),Y(2,"span"),W(3),J()()),n&2){let t=e.$implicit;ee(3),it(t)}}function Eb(n,e){if(n&1){let t=ui();Y(0,"div",12)(1,"button",27),pi("click",function(){let o=Zn(t).$index,a=Mn();return Yn(a.toggleChapter(o))}),Y(2,"div",28)(3,"div",29)(4,"span",30),W(5),J()(),Y(6,"div",24)(7,"h4",31),W(8),J(),Y(9,"p",32),W(10),J()()(),tt(),be(11,"svg",33),J(),Pt(),Y(12,"div",34)(13,"ul",35),Zt(14,xb,4,1,"li",36,Sc),J()()()}if(n&2){let t=e.$implicit,i=e.$index,o=Mn();ee(5),it(t.number),ee(3),ht(" ",t.title," "),ee(2),ht(" ",t.description," "),ee(),ur("rotate-180",o.openChapters().includes(i)),ee(),Ic(o.openChapters().includes(i)?"max-h-[500px] opacity-100":"max-h-0 opacity-0"),ee(2),Yt(t.topics)}}function Sb(n,e){if(n&1&&(Y(0,"div",16)(1,"div",38),tt(),be(2,"svg",39),J(),Pt(),Y(3,"p",40),W(4),J()()),n&2){let t=Mn();ee(4),ht(" ",t.previewImages[t.selectedImage()].title," ")}}var _u=class n{selectedImage=nt(null);openChapters=nt([]);chapters=[{number:"01",title:"Fundamentos do Empreendedorismo",description:"Entenda os pilares essenciais para construir um neg\xF3cio s\xF3lido e sustent\xE1vel",topics:["Mindset empreendedor","Identifica\xE7\xE3o de oportunidades","An\xE1lise de mercado","Valida\xE7\xE3o de ideias"]},{number:"02",title:"Planejamento Estrat\xE9gico",description:"Aprenda a criar planos de a\xE7\xE3o que realmente funcionam na pr\xE1tica",topics:["Business Model Canvas","An\xE1lise SWOT aplicada","Metas SMART","Roadmap de execu\xE7\xE3o"]},{number:"03",title:"Gest\xE3o Financeira para Empreendedores",description:"Domine as finan\xE7as do seu neg\xF3cio sem complica\xE7\xE3o",topics:["Controle de fluxo de caixa","Precifica\xE7\xE3o estrat\xE9gica","Indicadores financeiros","Investimentos e capta\xE7\xE3o"]},{number:"04",title:"Marketing e Vendas",description:"Estrat\xE9gias comprovadas para atrair e converter clientes",topics:["Posicionamento de marca","Funil de vendas","Marketing digital essencial","T\xE9cnicas de negocia\xE7\xE3o"]},{number:"05",title:"Opera\xE7\xF5es e Processos",description:"Estruture seu neg\xF3cio para escalar com efici\xEAncia",topics:["Mapeamento de processos","Automa\xE7\xE3o inteligente","Gest\xE3o de equipes","Qualidade e excel\xEAncia"]},{number:"06",title:"Crescimento e Escala",description:"Leve seu neg\xF3cio para o pr\xF3ximo n\xEDvel com estrat\xE9gias avan\xE7adas",topics:["Expans\xE3o de mercado","Parcerias estrat\xE9gicas","Inova\xE7\xE3o cont\xEDnua","M\xE9tricas de crescimento"]}];previewImages=[{title:"P\xE1gina de Introdu\xE7\xE3o",description:"Metodologia visual e envolvente"},{title:"Exerc\xEDcios Pr\xE1ticos",description:"Atividades para aplicar o conhecimento"},{title:"Estudos de Caso",description:"Exemplos reais de sucesso"}];selectImage(e){this.selectedImage.set(e)}toggleChapter(e){this.openChapters().includes(e)?this.openChapters.set([]):this.openChapters.set([e])}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=we({type:n,selectors:[["app-preview-section"]],decls:30,vars:1,consts:[["id","preview",1,"py-[clamp(3rem,8vh,6rem)]","bg-linear-to-br","from-gray-50","to-white"],[1,"mx-auto","px-[clamp(1rem,5vw,3.5rem)]","w-full","max-w-7xl"],[1,"text-center","mb-[clamp(2rem,5vh,4rem)]"],[1,"font-extrabold","text-gray-900","mb-4",2,"font-size","clamp(1.75rem, 4vw + 0.25rem, 3rem)"],[1,"text-gradient"],[1,"text-gray-600","mx-auto","max-w-2xl",2,"font-size","clamp(1rem, 2vw + 0.5rem, 1.25rem)"],[1,"flex","flex-col","gap-[clamp(2rem,5vw,4rem)]"],[1,"grid","lg:grid-cols-3","gap-2"],[1,"flex","items-center","gap-4","cursor-pointer","rounded-xl","p-4","shadow-md","border","border-transparent","hover:border-[#FF6B35]/30","hover:-translate-y-1","hover:shadow-xl","transition-all","duration-300"],[1,"font-bold","text-gray-900","mb-4",2,"font-size","clamp(1.25rem, 2.5vw, 1.5rem)"],[1,"grid","lg:grid-cols-[1fr_1.2fr]","gap-6","items-stretch"],[1,"space-y-2"],[1,"border","border-gray-200","rounded-xl","bg-white","transition-colors","hover:border-[#FF6B35]/30"],[1,"lg:sticky","lg:top-6","h-full"],[1,"p-3","bg-linear-to-br","from-gray-100","to-white","border","border-gray-200","rounded-xl","h-full"],[1,"h-full","bg-linear-to-br","from-[#1E3A8A]","via-[#FF6B35]","to-[#FDB813]","rounded-lg","flex","items-center","justify-center"],[1,"text-center","text-white","p-6"],[1,"p-3","bg-linear-to-r","from-[#FF6B35]/10","to-[#FDB813]/10","rounded-xl","border","border-[#FF6B35]/20"],[1,"text-center","text-gray-700",2,"font-size","clamp(0.875rem, 1.5vw, 1rem)"],[1,"font-bold","text-xl","text-gradient"],[1,"flex","items-center","gap-4","cursor-pointer","rounded-xl","p-4","shadow-md","border","border-transparent","hover:border-[#FF6B35]/30","hover:-translate-y-1","hover:shadow-xl","transition-all","duration-300",3,"click"],[1,"w-20","h-28","bg-linear-to-br","from-[#1E3A8A]","to-[#FF6B35]","rounded-lg","shrink-0","relative"],[1,"absolute","inset-0","flex","items-center","justify-center"],["lucideFileText","",1,"w-8","h-8","text-white"],[1,"flex-1","min-w-0"],[1,"font-bold","text-gray-900",2,"font-size","clamp(0.875rem, 1.5vw, 1.125rem)"],[1,"text-xs","text-gray-500","mt-0.5"],[1,"w-full","px-4","py-4","text-left","flex","items-center","justify-between",3,"click"],[1,"flex","items-center","gap-3","w-full","min-w-0"],[1,"w-10","h-10","rounded-full","bg-linear-to-br","from-[#FF6B35]","to-[#FDB813]","flex","items-center","justify-center","shrink-0"],[1,"text-white","font-bold","text-sm"],[1,"font-bold","text-gray-900","truncate",2,"font-size","clamp(0.75rem, 1.5vw, 1rem)"],[1,"text-xs","text-gray-500","truncate","hidden","sm:block"],["lucideChevronDown","",1,"w-5","h-5","text-[#FF6B35]","transition-transform","shrink-0"],[1,"px-4","pb-4","pt-1","overflow-hidden","transition-all","duration-300"],[1,"space-y-1.5","sm:ml-14"],[1,"flex","items-start","gap-2","text-gray-700",2,"font-size","clamp(0.75rem, 1.5vw, 0.875rem)"],["lucideCheck","",1,"w-4","h-4","text-[#10B981]","shrink-0","mt-0.5"],[1,"mb-3","flex","justify-center"],["lucideBookOpen","",1,"w-12","h-12","text-white"],[1,"font-semibold",2,"font-size","clamp(0.875rem, 1.5vw, 1.125rem)"]],template:function(t,i){t&1&&(Y(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),W(4," D\xEA uma "),Y(5,"span",4),W(6," espiada no conte\xFAdo"),J()(),Y(7,"p",5),W(8," Veja o que te espera dentro do e-book "),J()(),Y(9,"div",6)(10,"div",7),Zt(11,Db,9,2,"div",8,Cb),J(),Y(13,"div")(14,"h3",9),W(15," \xCDndice Completo do E-book "),J(),Y(16,"div",10)(17,"div",11),Zt(18,Eb,16,7,"div",12,_b),J(),Y(20,"div",13)(21,"div",14)(22,"div",15),Ve(23,Sb,5,1,"div",16),J()()()()(),Y(24,"div",17)(25,"p",18)(26,"span",19),W(27,"150+ p\xE1ginas"),J(),be(28,"br"),W(29," de conte\xFAdo pr\xE1tico e aplic\xE1vel "),J()()()()()),t&2&&(ee(11),Yt(i.previewImages),ee(7),Yt(i.chapters),ee(5),qe(i.selectedImage()!==null?23:-1))},dependencies:[ed,td,od,mr],encapsulation:2})};var kb=(n,e)=>e.text,Fb=(n,e)=>e.name;function Ib(n,e){if(n&1&&(Y(0,"div",23)(1,"div",42),tt(),be(2,"svg",43),J(),Pt(),Y(3,"span",44),W(4),J()()),n&2){let t=e.$implicit;ee(4),ht(" ",t.text," ")}}function bb(n,e){n&1&&(tt(),be(0,"svg",45))}function Tb(n,e){n&1&&(tt(),be(0,"svg",46))}function Lb(n,e){n&1&&(tt(),be(0,"svg",47))}function wb(n,e){if(n&1&&(Y(0,"div",34),Ve(1,bb,1,0,":svg:svg",45)(2,Tb,1,0,":svg:svg",46)(3,Lb,1,0,":svg:svg",47),Y(4,"span",48),W(5),J()()),n&2){let t,i=e.$implicit;ee(),qe((t=i.iconName)==="card"?1:t==="pix"?2:t==="ticket"?3:-1),ee(4),ht(" ",i.name," ")}}var Du=class n{config=Qt;includes=[{text:"E-book completo em PDF (150+ p\xE1ginas)"},{text:"Acesso vital\xEDcio ao conte\xFAdo"},{text:"Atualiza\xE7\xF5es gratuitas para sempre"},{text:"Acesso \xE0 comunidade exclusiva"},{text:"Garantia de 7 dias - 100% do dinheiro de volta"}];paymentMethods=[{name:"Cart\xE3o de Cr\xE9dito",iconName:"card"},{name:"PIX",iconName:"pix"},{name:"Boleto",iconName:"ticket"}];handlePurchase(){window.open(Qt.checkoutUrl,"_blank","noopener,noreferrer"),Qt.analytics.enabled&&typeof window<"u"&&window.gtag&&window.gtag("event","begin_checkout",{currency:Qt.product.currency,value:Qt.product.price,items:[{item_id:Qt.product.id,item_name:Qt.product.name,price:Qt.product.price,quantity:1}]})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=we({type:n,selectors:[["app-pricing-section"]],decls:71,vars:4,consts:[["id","comprar",1,"py-[clamp(3rem,8vh,6rem)]","bg-linear-to-r","from-gray-900","via-[#1E3A8A]","to-gray-900","relative","overflow-hidden"],[1,"absolute","inset-0","overflow-hidden"],[1,"absolute","top-20","right-10","w-64","h-64","rounded-full","bg-[#FF6B35]/10","blur-3xl","animate-pulse-blob"],[1,"absolute","bottom-20","left-10","w-64","h-64","rounded-full","bg-[#FDB813]/10","blur-3xl","animate-pulse-blob-2"],[1,"mx-auto","px-[clamp(1rem,5vw,3.5rem)]","w-full","max-w-7xl","relative","z-10"],[1,"text-center","mb-[clamp(2rem,5vh,4rem)]"],[1,"font-extrabold","text-white","mb-4",2,"font-size","clamp(1.75rem, 4vw + 0.25rem, 3rem)"],[1,"bg-linear-to-r","from-[#FF6B35]","to-[#FDB813]","bg-clip-text","text-transparent"],[1,"text-gray-300","mx-auto","max-w-2xl",2,"font-size","clamp(1rem, 2vw + 0.5rem, 1.25rem)"],[1,"max-w-2xl","mx-auto"],[1,"p-[clamp(1.5rem,4vw,2.5rem)]","relative","overflow-hidden","border-4","border-[#FF6B35]/30","shadow-2xl","bg-white","rounded-2xl"],[1,"absolute","-top-3","-right-3","animate-rotate-badge"],[1,"inline-flex","items-center","rounded-lg","px-3","py-1.5","text-sm","font-bold","shadow-lg","bg-[#1E3A8A]","text-white","gap-1"],["lucideZap","",1,"w-4","h-4"],[1,"text-center","mb-7"],[1,"mb-2"],[1,"text-gray-400","line-through","text-xl","font-semibold"],[1,"flex","items-baseline","justify-center","gap-2","mb-3"],[1,"text-gray-600","text-2xl","font-bold"],[1,"font-extrabold","text-gradient",2,"font-size","clamp(2.5rem, 8vw, 4rem)"],[1,"text-gray-600","text-xl","font-bold"],[1,"text-gray-600","font-medium",2,"font-size","clamp(0.875rem, 1.5vw + 0.25rem, 1rem)"],[1,"mb-6","space-y-2"],[1,"flex","items-start","gap-3","p-2.5","rounded-lg","hover:bg-gray-50","transition-colors"],["target","_blank","rel","noopener noreferrer",1,"w-full","h-16","px-8","text-white","inline-flex","items-center","justify-center","cursor-pointer","rounded-lg","font-semibold","transition-all","duration-300","bg-linear-to-r","from-[#FF6B35]","to-[#FDB813]","hover:from-[#FF8555]","hover:to-[#FDCA33]","shadow-2xl","hover:shadow-xl","hover:scale-105","group","mb-5",2,"font-size","clamp(0.875rem, 1.5vw + 0.25rem, 1.125rem)",3,"href"],["lucideArrowRight","",1,"ml-2","w-6","h-6","group-hover:translate-x-2","transition-transform"],[1,"flex","items-center","justify-center","gap-2","text-center","mb-5"],["lucideShieldCheck","",1,"w-5","h-5","text-[#10B981]"],[1,"text-gray-700","font-semibold",2,"font-size","clamp(0.75rem, 1.5vw, 0.875rem)"],[1,"space-y-3"],[1,"flex","items-center","justify-center","gap-2","text-gray-500","text-sm"],["lucideCreditCard","",1,"w-4","h-4"],[1,"font-medium"],[1,"flex","flex-wrap","items-center","justify-center","gap-2"],[1,"flex","items-center","gap-1.5","px-3","py-1.5","bg-gray-50","rounded-lg","border","border-gray-200"],[1,"text-center","text-xs","text-gray-500","mt-4"],[1,"mt-[clamp(2rem,5vh,3rem)]","text-center"],[1,"inline-flex","items-center","gap-6","px-6","py-3","bg-white/10","backdrop-blur-sm","rounded-2xl","border","border-white/20"],[1,"text-center"],[1,"font-bold","text-white","sm:text-3xl","text-xl"],[1,"text-xs","text-gray-300","sm:text-sm"],[1,"w-px","h-10","bg-white/20"],[1,"w-5","h-5","rounded-full","bg-[#10B981]/10","flex","items-center","justify-center","shrink-0","mt-0.5"],["lucideCheck","",1,"w-3","h-3","text-[#10B981]"],[1,"text-gray-700","font-medium",2,"font-size","clamp(0.75rem, 1.5vw, 0.875rem)"],["lucideCreditCard","",1,"w-4","h-4","text-gray-700"],["lucideSmartphone","",1,"w-4","h-4","text-gray-700"],["lucideTicket","",1,"w-4","h-4","text-gray-700"],[1,"text-xs","font-medium","text-gray-700"]],template:function(t,i){t&1&&(Y(0,"section",0)(1,"div",1),be(2,"div",2)(3,"div",3),J(),Y(4,"div",4)(5,"div",5)(6,"h2",6),W(7," Transforme seu neg\xF3cio "),Y(8,"span",7),W(9," hoje "),J()(),Y(10,"p",8),W(11," Invista no seu futuro empreendedor agora "),J()(),Y(12,"div",9)(13,"div",10)(14,"div",11)(15,"span",12),tt(),be(16,"svg",13),W(17," Oferta Digital "),J()(),Pt(),Y(18,"div",14)(19,"div",15)(20,"span",16),W(21),J()(),Y(22,"div",17)(23,"span",18),W(24,"R$"),J(),Y(25,"span",19),W(26),J(),Y(27,"span",20),W(28,",00"),J()(),Y(29,"p",21),W(30),J()(),Y(31,"div",22),Zt(32,Ib,5,1,"div",23,kb),J(),Y(34,"div")(35,"a",24),W(36," COMPRAR AGORA NA HOTMART "),tt(),be(37,"svg",25),J(),Pt(),Y(38,"div",26),tt(),be(39,"svg",27),Pt(),Y(40,"p",28),W(41," Garantia de 7 dias - 100% do seu dinheiro de volta "),J()(),Y(42,"div",29)(43,"div",30),tt(),be(44,"svg",31),Pt(),Y(45,"span",32),W(46,"Pagamento 100% Seguro"),J()(),Y(47,"div",33),Zt(48,wb,6,2,"div",34,Fb),J(),Y(50,"p",35),W(51," \u{1F512} Acesso imediato ap\xF3s pagamento confirmado "),J()()()()(),Y(52,"div",36)(53,"div",37)(54,"div",38)(55,"p",39),W(56,"500+"),J(),Y(57,"p",40),W(58,"Clientes Satisfeitos"),J()(),be(59,"div",41),Y(60,"div",38)(61,"p",39),W(62,"4.9/5"),J(),Y(63,"p",40),W(64,"Avalia\xE7\xE3o M\xE9dia"),J()(),be(65,"div",41),Y(66,"div",38)(67,"p",39),W(68,"100%"),J(),Y(69,"p",40),W(70,"Garantido"),J()()()()()()),t&2&&(ee(21),ht(" R$ ",i.config.product.oldPrice.toFixed(2).replace(".",",")," "),ee(5),ht(" ",i.config.product.price.toFixed(0)," "),ee(4),ht(" ou 12x de R$ ",(i.config.product.price/12).toFixed(2).replace(".",",")," sem juros "),ee(2),Yt(i.includes),ee(3),no("href",i.config.checkoutUrl,Kn),ee(13),Yt(i.paymentMethods))},dependencies:[fr,nd,ud,md],encapsulation:2})};var Ab=(n,e)=>e.question;function Rb(n,e){if(n&1&&(Y(0,"div",18),W(1),J()),n&2){let t=Mn().$implicit;ee(),ht(" ",t.answer," ")}}function jb(n,e){if(n&1){let t=ui();Y(0,"div",10)(1,"button",15),pi("click",function(){let o=Zn(t).$index,a=Mn();return Yn(a.toggleFaq(o))}),Y(2,"span",16),W(3),J(),tt(),be(4,"svg",17),J(),Ve(5,Rb,2,1,"div",18),J()}if(n&2){let t=e.$implicit,i=e.$index,o=Mn();ee(3),ht(" ",t.question," "),ee(),ur("rotate-180",o.openFaqs().includes(i)),ee(),qe(o.openFaqs().includes(i)?5:-1)}}var xu=class n{config=Qt;openFaqs=nt([]);faqs=[{question:"Como recebo o e-book ap\xF3s a compra?",answer:"A compra \xE9 processada de forma segura pela Hotmart. Assim que o pagamento for confirmado, voc\xEA receber\xE1 um e-mail da plataforma com o link para acessar o conte\xFAdo e realizar o download do e-book em formato PDF. O acesso \xE9 imediato para pagamentos via PIX ou cart\xE3o de cr\xE9dito. Para pagamentos via boleto, o envio ocorre ap\xF3s a compensa\xE7\xE3o banc\xE1ria, que leva de 1 a 2 dias \xFAteis."},{question:"Posso compartilhar o e-book com outras pessoas?",answer:"O e-book \xE9 para uso pessoal e individual. O compartilhamento n\xE3o autorizado viola os direitos autorais. Cada licen\xE7a \xE9 v\xE1lida para um \xFAnico usu\xE1rio, mas voc\xEA pode acessar o conte\xFAdo em todos os seus dispositivos."},{question:"O e-book funciona em qualquer dispositivo?",answer:"Sim! O e-book est\xE1 em formato PDF, que pode ser lido em computadores (Windows, Mac, Linux), tablets, smartphones (iOS e Android) e e-readers que suportam PDF. Voc\xEA pode baixar e acessar em quantos dispositivos quiser."},{question:"\xC9 realmente um produto digital? N\xE3o receberei nada f\xEDsico?",answer:"Correto! Este \xE9 um produto 100% digital. Voc\xEA n\xE3o receber\xE1 nenhum material f\xEDsico pelo correio. Isso permite acesso imediato, pre\xE7o mais acess\xEDvel e voc\xEA pode come\xE7ar a aprender assim que o pagamento for confirmado."},{question:"O conte\xFAdo \xE9 adequado para iniciantes?",answer:"Absolutamente! O e-book foi desenvolvido para atender desde quem est\xE1 come\xE7ando at\xE9 empreendedores que j\xE1 t\xEAm um neg\xF3cio e querem melhorar. A linguagem \xE9 clara, os conceitos s\xE3o explicados passo a passo, e a metodologia do jogo torna tudo mais f\xE1cil de entender."},{question:"Vou ter suporte caso tenha d\xFAvidas?",answer:"Sim! Al\xE9m do conte\xFAdo do e-book, voc\xEA ter\xE1 acesso \xE0 nossa comunidade exclusiva onde pode tirar d\xFAvidas, trocar experi\xEAncias com outros empreendedores e receber suporte da nossa equipe."}];toggleFaq(e){let t=this.openFaqs();t.includes(e)?this.openFaqs.set(t.filter(i=>i!==e)):this.openFaqs.set([...t,e])}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=we({type:n,selectors:[["app-faq-section"]],decls:21,vars:1,consts:[["id","faq",1,"py-[clamp(3rem,8vh,6rem)]","bg-white"],[1,"mx-auto","px-[clamp(1rem,5vw,3.5rem)]","w-full","max-w-7xl"],[1,"text-center","mb-[clamp(2rem,5vh,4rem)]"],[1,"inline-flex","items-center","justify-center","w-14","h-14","rounded-full","bg-linear-to-br","from-[#FF6B35]","to-[#FDB813]","mb-4"],["lucideCircleQuestionMark","",1,"w-7","h-7","text-white"],[1,"font-extrabold","text-gray-900","mb-4",2,"font-size","clamp(1.75rem, 4vw + 0.25rem, 3rem)"],[1,"text-gradient"],[1,"text-gray-600","mx-auto","max-w-2xl",2,"font-size","clamp(1rem, 2vw + 0.5rem, 1.25rem)"],[1,"max-w-3xl","mx-auto"],[1,"space-y-3"],[1,"rounded-xl","border","border-gray-200","bg-white","shadow-sm","transition-colors","hover:border-[#FF6B35]/30"],[1,"text-center","mt-10"],[1,"inline-block","px-6","py-5","bg-linear-to-r","from-[#FF6B35]/10","to-[#FDB813]/10","rounded-xl","border","border-[#FF6B35]/20"],[1,"text-gray-700","mb-1",2,"font-size","clamp(0.875rem, 1.5vw, 1rem)"],[1,"text-[#FF6B35]","font-bold","hover:text-[#FF8555]","transition-colors","underline",2,"font-size","clamp(0.875rem, 1.5vw, 1rem)",3,"href"],[1,"w-full","px-5","py-5","text-left","flex","items-center","justify-between","hover:no-underline",3,"click"],[1,"font-bold","text-gray-900","pr-4",2,"font-size","clamp(0.875rem, 1.5vw + 0.25rem, 1.125rem)"],["lucideChevronDown","",1,"w-5","h-5","text-[#FF6B35]","transition-transform","shrink-0"],[1,"px-5","pb-5","pt-1","text-gray-700","leading-relaxed",2,"font-size","clamp(0.875rem, 1.5vw, 1rem)"]],template:function(t,i){t&1&&(Y(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),tt(),be(4,"svg",4),J(),Pt(),Y(5,"h2",5),W(6," Perguntas "),Y(7,"span",6),W(8," Frequentes"),J()(),Y(9,"p",7),W(10," Tire suas d\xFAvidas antes de fazer seu investimento "),J()(),Y(11,"div",8)(12,"div",9),Zt(13,jb,6,4,"div",10,Ab),J()(),Y(15,"div",11)(16,"div",12)(17,"p",13),W(18," Ainda tem d\xFAvidas? "),J(),Y(19,"a",14),W(20," Entre em contato conosco "),J()()()()()),t&2&&(ee(13),Yt(i.faqs),ee(6),no("href","mailto:"+i.config.email,Kn))},dependencies:[Bc],encapsulation:2})};var Nb=(n,e)=>e.href,Bb=(n,e)=>e.name;function Pb(n,e){if(n&1){let t=ui();Re(0,"li")(1,"a",22),Fc("click",function(o){let a=Zn(t).$implicit,r=Mn();return Yn(r.handleNavClick(o,a.href))}),W(2),Oe()()}if(n&2){let t=e.$implicit;ee(),dr("href",t.href,Kn),ee(),ht(" ",t.label," ")}}function zb(n,e){n&1&&Ti(0,"i",23)}function Ob(n,e){n&1&&Ti(0,"i",24)}function Ub(n,e){n&1&&Ti(0,"i",25)}function Hb(n,e){if(n&1&&(Re(0,"a",18),Ve(1,zb,1,0,"i",23)(2,Ob,1,0,"i",24)(3,Ub,1,0,"i",25),Oe()),n&2){let t,i=e.$implicit;dr("href",i.href,Kn),ee(),qe((t=i.iconName)==="facebook"?1:t==="instagram"?2:t==="linkedin"?3:-1)}}var Eu=class n{constructor(e){this.document=e}config=Qt;currentYear=new Date().getFullYear();quickLinks=[{label:"In\xEDcio",href:"#hero"},{label:"Benef\xEDcios",href:"#beneficios"},{label:"Depoimentos",href:"#depoimentos"},{label:"FAQ",href:"#faq"}];socialLinks=[{name:"Facebook",href:Qt.social.facebook,iconName:"facebook"},{name:"Instagram",href:Qt.social.instagram,iconName:"instagram"},{name:"LinkedIn",href:Qt.social.linkedin,iconName:"linkedin"}];handleNavClick(e,t){e.preventDefault(),this.scrollToSection(t)}scrollToSection(e){let t=this.document.querySelector(e);if(t){let o=t.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:o-80,behavior:"smooth"})}}static \u0275fac=function(t){return new(t||n)(ha(vn))};static \u0275cmp=we({type:n,selectors:[["app-footer"]],decls:43,vars:3,consts:[[1,"bg-gray-900","text-white"],[1,"border-t","border-gray-800","py-12"],[1,"container","mx-auto","px-4","md:px-6"],[1,"grid","md:grid-cols-2","lg:grid-cols-4","gap-8","mb-12"],[1,"flex","items-center","gap-2","mb-4"],["src","/logo.svg","alt","Logo Do Tabuleiro ao Mercado","draggable","false",1,"h-10","w-auto"],[1,"font-bold","text-lg"],[1,"text-gray-400","text-sm","leading-relaxed"],[1,"font-bold","text-white","mb-4"],[1,"space-y-2"],[1,"text-gray-400","hover:text-[#FF6B35]","transition-colors","text-sm","text-left",3,"click"],[1,"space-y-3"],[1,"flex","items-center","gap-2","text-gray-400","hover:text-[#FF6B35]","transition-colors","text-sm","group",3,"href"],[1,"bi","bi-envelope","shrink-0",2,"font-size","1rem"],[1,"group-hover:underline"],[1,"pt-2"],[1,"text-gray-400","text-sm","mb-2"],[1,"flex","gap-3"],["target","_blank","rel","noopener noreferrer",1,"w-9","h-9","rounded-lg","bg-gray-800","hover:bg-linear-to-br","hover:from-[#FF6B35]","hover:to-[#FDB813]","flex","items-center","justify-center","transition-all","duration-300","hover:scale-110","text-white",3,"href"],[1,"pt-8","border-t","border-gray-800","text-center"],[1,"text-gray-400","text-sm"],["href","https://elian.dev.br/","target","_blank"],[1,"text-gray-400","hover:text-[#FF6B35]","transition-colors","text-sm",3,"click","href"],[1,"bi","bi-facebook",2,"font-size","1.25rem"],[1,"bi","bi-instagram",2,"font-size","1.25rem"],[1,"bi","bi-linkedin",2,"font-size","1.25rem"]],template:function(t,i){t&1&&(Re(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div")(5,"div",4),Ti(6,"img",5),Re(7,"span",6),W(8,"Do Tabuleiro ao Mercado"),Oe()(),Re(9,"p",7),W(10," Aprenda empreendedorismo de forma din\xE2mica e revolucion\xE1ria atrav\xE9s do nosso e-book exclusivo. "),Oe()(),Re(11,"div")(12,"h3",8),W(13,"Links R\xE1pidos"),Oe(),Re(14,"ul",9),Zt(15,Pb,3,2,"li",null,Nb),Oe()(),Re(17,"div")(18,"h3",8),W(19,"Legal"),Oe(),Re(20,"ul",9)(21,"li")(22,"button",10),Fc("click",function(){return i.scrollToSection("#faq")}),W(23," Pol\xEDtica de Reembolso "),Oe()()()(),Re(24,"div")(25,"h3",8),W(26,"Contato"),Oe(),Re(27,"div",11)(28,"a",12),Ti(29,"i",13),Re(30,"span",14),W(31),Oe()(),Re(32,"div",15)(33,"p",16),W(34,"Siga-nos:"),Oe(),Re(35,"div",17),Zt(36,Hb,4,2,"a",18,Bb),Oe()()()()(),Re(38,"div",19)(39,"p",20),W(40),Re(41,"a",21),W(42,"elian.dev"),Oe()()()()()()),t&2&&(ee(15),Yt(i.quickLinks),ee(13),dr("href","mailto:"+i.config.email,Kn),ee(3),ht(" ",i.config.email," "),ee(5),Yt(i.socialLinks),ee(4),ht(" \xA9 ",i.currentYear," Do Tabuleiro ao Mercado. Desenvolvido com \u2615 por "))},dependencies:[fr],encapsulation:2})};var Su=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=we({type:n,selectors:[["app-root"]],decls:10,vars:0,consts:[[1,"min-h-screen"],[1,"overflow-x-hidden"]],template:function(t,i){t&1&&(Y(0,"div",0),be(1,"app-header"),Y(2,"main",1),be(3,"app-hero")(4,"app-social-proof")(5,"app-benefits-section")(6,"app-preview-section")(7,"app-pricing-section")(8,"app-faq-section"),J(),be(9,"app-footer"),J())},dependencies:[Md,vu,Mu,Cu,_u,Du,xu,Eu],encapsulation:2})};Ef(Su,lv).catch(n=>console.error(n));
