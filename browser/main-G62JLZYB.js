import{a as _}from"./chunk-Z2RIHWVL.js";import{A as w,Aa as $,B as y,Ba as ke,C as ue,D as m,E as z,Ea as X,F as C,Fa as Te,G as I,Ga as Ae,Ha as _e,Ia as Oe,Ja as Pe,K as N,L as R,La as Me,Ma as H,N as me,Na as A,O as he,Oa as Ne,P as J,Pa as ee,Qa as Re,T as u,U as k,W as de,Z as h,_ as W,a as ie,aa as D,ba as c,c as V,ca as p,da as B,e as re,f as U,g as ne,ga as L,h as g,i as oe,ia as T,j as Z,ja as Q,ka as fe,l as G,la as l,m as Y,ma as ge,n as S,na as ve,o as f,p as se,q as ae,qa as be,r as v,ra as we,s as ce,sa as Ee,t as pe,u as le,v as b,va as Se,wa as ye,x as M,xa as Ce,za as Ie}from"./chunk-EMOBDIL4.js";var x="Service workers are disabled or not supported by this browser";function Ye(t){return Z(()=>ne(new Error(t)))}var O=class{constructor(e){if(this.serviceWorker=e,!e)this.worker=this.events=this.registration=Ye(x);else{let r=G(e,"controllerchange").pipe(g(()=>e.controller)),i=Z(()=>U(e.controller)),n=oe(i,r);this.worker=n.pipe(f(d=>!!d)),this.registration=this.worker.pipe(b(()=>e.getRegistration()));let F=G(e,"message").pipe(g(d=>d.data)).pipe(f(d=>d&&d.type)).pipe(le());F.connect(),this.events=F}}postMessage(e,o){return this.worker.pipe(v(1),M(r=>{r.postMessage(ie({action:e},o))})).toPromise().then(()=>{})}postMessageWithOperation(e,o,r){let i=this.waitForOperationCompleted(r),n=this.postMessage(e,o);return Promise.all([n,i]).then(([,s])=>s)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(e){let o;return typeof e=="string"?o=r=>r.type===e:o=r=>e.includes(r.type),this.events.pipe(f(o))}nextEventOfType(e){return this.eventsOfType(e).pipe(v(1))}waitForOperationCompleted(e){return this.eventsOfType("OPERATION_COMPLETED").pipe(f(o=>o.nonce===e),v(1),g(o=>{if(o.result!==void 0)return o.result;throw new Error(o.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},q=(()=>{let e=class e{get isEnabled(){return this.sw.isEnabled}constructor(r){if(this.sw=r,this.pushManager=null,this.subscriptionChanges=new V,!r.isEnabled){this.messages=S,this.notificationClicks=S,this.subscription=S;return}this.messages=this.sw.eventsOfType("PUSH").pipe(g(n=>n.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(g(n=>n.data)),this.pushManager=this.sw.registration.pipe(g(n=>n.pushManager));let i=this.pushManager.pipe(b(n=>n.getSubscription()));this.subscription=Y(i,this.subscriptionChanges)}requestSubscription(r){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(x));let i={userVisibleOnly:!0},n=this.decodeBase64(r.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),s=new Uint8Array(new ArrayBuffer(n.length));for(let a=0;a<n.length;a++)s[a]=n.charCodeAt(a);return i.applicationServerKey=s,this.pushManager.pipe(b(a=>a.subscribe(i)),v(1)).toPromise().then(a=>(this.subscriptionChanges.next(a),a))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(x));let r=i=>{if(i===null)throw new Error("Not subscribed to push notifications.");return i.unsubscribe().then(n=>{if(!n)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(v(1),b(r)).toPromise()}decodeBase64(r){return atob(r)}};e.\u0275fac=function(i){return new(i||e)(m(O))},e.\u0275prov=w({token:e,factory:e.\u0275fac});let t=e;return t})(),K=(()=>{let e=class e{get isEnabled(){return this.sw.isEnabled}constructor(r){if(this.sw=r,!r.isEnabled){this.versionUpdates=S,this.unrecoverable=S;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(x));let r=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:r},r)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(x));let r=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:r},r)}};e.\u0275fac=function(i){return new(i||e)(m(O))},e.\u0275prov=w({token:e,factory:e.\u0275fac});let t=e;return t})();var De=new ue("NGSW_REGISTER_SCRIPT");function ze(t,e,o,r){return()=>{if(!(X(r)&&"serviceWorker"in navigator&&o.enabled!==!1))return;navigator.serviceWorker.addEventListener("controllerchange",()=>{navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.postMessage({action:"INITIALIZE"})});let i;if(typeof o.registrationStrategy=="function")i=o.registrationStrategy();else{let[s,...a]=(o.registrationStrategy||"registerWhenStable:30000").split(":");switch(s){case"registerImmediately":i=U(null);break;case"registerWithDelay":i=Le(+a[0]||0);break;case"registerWhenStable":i=a[0]?Y(je(t),Le(+a[0])):je(t);break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${o.registrationStrategy}`)}}t.get(de).runOutsideAngular(()=>i.pipe(v(1)).subscribe(()=>navigator.serviceWorker.register(e,{scope:o.scope}).catch(s=>console.error("Service worker registration failed with:",s))))}}function Le(t){return U(null).pipe(ce(t))}function je(t){return t.get(ye).isStable.pipe(f(o=>o))}function Je(t,e){return new O(X(e)&&t.enabled!==!1?navigator.serviceWorker:void 0)}var j=class{};function Qe(t,e={}){return me([q,K,{provide:De,useValue:t},{provide:j,useValue:e},{provide:O,useFactory:Je,deps:[j,J]},{provide:Se,useFactory:ze,deps:[he,De,j,J],multi:!0}])}var xe=(()=>{let e=class e{static register(r,i={}){return{ngModule:e,providers:[Qe(r,i)]}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=I({type:e}),e.\u0275inj=y({providers:[q,K]});let t=e;return t})();var et=t=>["/books",t];function tt(t,e){if(t&1&&(c(0,"li")(1,"a",6),l(2),c(3,"p",7),l(4),p()()()),t&2){let o=e.$implicit;u(1),h("routerLink",be(3,et,o.isbn)),u(1),ve(" ",o.title," "),u(2),ge(o.subtitle)}}function it(t,e){t&1&&(c(0,"li"),l(1,"No results"),p())}function rt(t,e){if(t&1&&(c(0,"ul",3),D(1,tt,5,5,"li",4)(2,it,2,0,"li",5),p()),t&2){let o=e.ngIf;u(1),h("ngForOf",o),u(1),h("ngIf",!o.length)}}var Ve=(()=>{let e=class e{constructor(r){this.service=r,this.input$=new V,this.isLoading=!1,this.results$=this.input$.pipe(f(i=>i.length>=3),ae(500),pe(),M(()=>this.isLoading=!0),b(i=>this.service.getAllSearch(i)),M(()=>this.isLoading=!1))}};e.\u0275fac=function(i){return new(i||e)(k(Re))},e.\u0275cmp=C({type:e,selectors:[["bm-search"]],decls:4,vars:5,consts:[["type","search","autocomplete","off","aria-label","Search",3,"input"],["searchInput",""],["class","search-results",4,"ngIf"],[1,"search-results"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"routerLink"],["role","doc-subtitle"]],template:function(i,n){if(i&1){let s=L();c(0,"input",0,1),T("input",function(){N(s);let P=fe(1);return R(n.input$.next(P.value))}),p(),D(2,rt,3,2,"ul",2),we(3,"async")}i&2&&(W("loading",n.isLoading),u(2),h("ngIf",Ee(3,3,n.results$)))},dependencies:[Ie,$,A,ke]});let t=e;return t})();var Ue=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=C({type:e,selectors:[["bm-home"]],decls:7,vars:0,consts:[["routerLink","/books",1,"button","red"]],template:function(i,n){i&1&&(c(0,"h1"),l(1,"Home"),p(),c(2,"a",0),l(3,` Show book list
`),p(),c(4,"h2"),l(5,"Search"),p(),B(6,"bm-search"))},dependencies:[A,Ve]});let t=e;return t})();var We=()=>{let t=z(_),e=z(H);return t.isAuthenticated?!0:(window.alert("Not logged in!"),e.parseUrl("/home"))};var ot=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:Ue},{path:"books",loadChildren:()=>import("./chunk-UPPMTJKU.js").then(t=>t.BooksModule)},{path:"admin",loadChildren:()=>import("./chunk-TEBW3JZC.js").then(t=>t.AdminModule),canActivate:[We]}],Be=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=I({type:e}),e.\u0275inj=y({imports:[ee.forRoot(ot),ee]});let t=e;return t})();var $e=(()=>{let e=class e{constructor(r,i,n){this.http=r,this.swPush=i,this.router=n,this.VAPID_PUBLIC_KEY="BGk2Rx3DEjXdRv9qP8aKrypFoNjISAZ54l-3V05xpPOV-5ZQJvVH9OB9Rz5Ug7H_qH6CEr40f4Pi3DpjzYLbfCA",this.baseUrl="https://api5.angular-buch.com/notifications",this.swPush.notificationClicks.subscribe(s=>{let a=s.notification.data;a?.book?.isbn&&this.router.navigate(["/books",a.book.isbn])})}get isEnabled(){return this.swPush.isEnabled}requestSubscription(){let r=this.swPush.requestSubscription({serverPublicKey:this.VAPID_PUBLIC_KEY});return re(r).pipe(se(i=>this.registerOnServer(i)))}registerOnServer(r){return this.http.post(this.baseUrl,r)}};e.\u0275fac=function(i){return new(i||e)(m(Te),m(q),m(H))},e.\u0275prov=w({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function ct(t,e){if(t&1){let o=L();c(0,"button",7),T("click",function(){N(o);let i=Q();return R(i.auth.login())}),l(1,"Login"),p()}}function pt(t,e){if(t&1){let o=L();c(0,"button",8),T("click",function(){N(o);let i=Q();return R(i.auth.logout())}),l(1,"Logout"),p()}}var He=(()=>{let e=class e{constructor(r,i,n){this.auth=r,this.swUpdate=i,this.notificationService=n,this.swUpdate.versionUpdates.subscribe(s=>{switch(s.type){case"VERSION_DETECTED":{console.log("Downloading new app version:",s.version.appData);break}case"VERSION_READY":{let a=s.currentVersion.appData,P=s.latestVersion.appData,F=a.version,d=P.version,Ze=P.changelog,Ge=`Update from ${F} to ${d}. Changes: ${Ze}. Install?`;window.confirm(Ge)&&window.location.reload();break}case"VERSION_INSTALLATION_FAILED":{console.log(`Failed to install ${s.version.appData}:`,s.error);break}}}),this.notificationService.isEnabled&&this.setPermission()}setPermission(){"Notification"in window&&(this.permission=Notification.permission)}requestSubscription(){this.notificationService.requestSubscription().subscribe(()=>this.setPermission())}};e.\u0275fac=function(i){return new(i||e)(k(_),k(K),k($e))},e.\u0275cmp=C({type:e,selectors:[["bm-root"]],decls:14,vars:7,consts:[["routerLink","/home","routerLinkActive","active","ariaCurrentWhenActive","page"],["routerLink","/books","routerLinkActive","active","ariaCurrentWhenActive","page"],["routerLink","/admin","routerLinkActive","active","ariaCurrentWhenActive","page"],[1,"actions"],["class","green",3,"click",4,"ngIf"],["class","red",3,"click",4,"ngIf"],["aria-label","Notifications",3,"disabled","click"],[1,"green",3,"click"],[1,"red",3,"click"]],template:function(i,n){i&1&&(c(0,"nav")(1,"a",0),l(2,"Home"),p(),c(3,"a",1),l(4,"Books"),p(),c(5,"a",2),l(6,"Administration"),p(),c(7,"div",3),D(8,ct,2,0,"button",4)(9,pt,2,0,"button",5),c(10,"button",6),T("click",function(){return n.requestSubscription()}),l(11,"!"),p()()(),c(12,"main"),B(13,"router-outlet"),p()),i&2&&(u(8),h("ngIf",!n.auth.isAuthenticated),u(1),h("ngIf",n.auth.isAuthenticated),u(1),W("green",n.permission==="granted")("red",n.permission==="denied"),h("disabled",!n.permission))},dependencies:[$,Me,A,Ne]});let t=e;return t})();var qe=(()=>{let e=class e{constructor(r){this.authService=r}intercept(r,i){let n="1234567890";if(this.authService.isAuthenticated){let s=r.clone({setHeaders:{Authorization:`Bearer ${n}`}});return i.handle(s)}else return i.handle(r)}};e.\u0275fac=function(i){return new(i||e)(m(_))},e.\u0275prov=w({token:e,factory:e.\u0275fac});let t=e;return t})();var Ke=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=I({type:e,bootstrap:[He]}),e.\u0275inj=y({providers:[{provide:Ae,useClass:qe,multi:!0}],imports:[Pe,Be,_e,xe.register("ngsw-worker.js",{enabled:!Ce(),registrationStrategy:"registerWhenStable:30000"})]});let t=e;return t})();Oe().bootstrapModule(Ke).catch(t=>console.error(t));
