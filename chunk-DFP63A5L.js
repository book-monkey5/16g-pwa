import{a as X}from"./chunk-FQTBG2C4.js";import{$ as U,Aa as I,B as y,Ba as L,Ca as J,Da as K,F as k,G as B,H as S,I as j,K as M,Ka as Q,L as P,Ma as W,Na as w,Pa as O,Q as E,Qa as F,T as r,U as d,V as R,Z as c,aa as p,ba as m,c as N,ca as n,da as x,ea as A,fa as V,ga as H,ia as D,ja as f,la as a,ma as v,na as b,qa as z,ra as u,sa as g,ta as q,ua as G,w as $,za as _}from"./chunk-KIQA2W2F.js";var Y=(()=>{let t=class t{constructor(){this.confirm=new R}onClick(){window.confirm(this.confirmText)&&this.confirm.emit()}};t.\u0275fac=function(o){return new(o||t)},t.\u0275dir=S({type:t,selectors:[["","bmConfirm",""]],hostBindings:function(o,l){o&1&&D("click",function(){return l.onClick()})},inputs:{confirmText:["bmConfirm","confirmText"]},outputs:{confirm:"confirm"}});let e=t;return e})();var Z=(()=>{let t=class t{constructor(s,o,l){this.template=s,this.viewContainer=o,this.authService=l,this.destroy$=new N,this.authService.isAuthenticated$.pipe($(this.destroy$)).subscribe(C=>{C?this.viewContainer.createEmbeddedView(this.template):this.viewContainer.clear()})}ngOnDestroy(){this.destroy$.next()}};t.\u0275fac=function(o){return new(o||t)(d(G),d(U),d(X))},t.\u0275dir=S({type:t,selectors:[["","bmLoggedinOnly",""]]});let e=t;return e})();var T=(()=>{let t=class t{transform(s){return s?`${s.substring(0,3)}-${s.substring(3)}`:""}};t.\u0275fac=function(o){return new(o||t)},t.\u0275pipe=j({name:"isbn",type:t,pure:!0});let e=t;return e})();function pt(e,t){if(e&1&&(m(0,"p",9),a(1),n()),e&2){let i=f().ngIf;r(),v(i.subtitle)}}function lt(e,t){if(e&1&&(m(0,"li"),a(1),n()),e&2){let i=t.$implicit;r(),v(i)}}function ft(e,t){if(e&1&&(m(0,"div")(1,"h2"),a(2,"Published"),n(),a(3),u(4,"date"),n()),e&2){let i=f().ngIf;r(3),b(" ",q(4,1,i.published,"longDate")," ")}}function dt(e,t){if(e&1&&x(0,"img",10),e&2){let i=f().ngIf;c("src",i.thumbnailUrl,E)}}var ut=e=>["/admin/edit",e];function vt(e,t){if(e&1){let i=H();A(0),m(1,"button",11),D("confirm",function(){M(i);let o=f().ngIf,l=f();return P(l.removeBook(o.isbn))}),a(2," Remove book "),n(),m(3,"a",12),a(4," Edit book "),n(),V()}if(e&2){let i=f().ngIf;r(3),c("routerLink",z(1,ut,i.isbn))}}function bt(e,t){if(e&1&&(m(0,"div",1)(1,"h1"),a(2),n(),p(3,pt,2,1,"p",2),m(4,"div",3)(5,"div")(6,"h2"),a(7,"Authors"),n(),m(8,"ul"),p(9,lt,2,1,"li",4),n()(),m(10,"div")(11,"h2"),a(12,"ISBN"),n(),a(13),u(14,"isbn"),n(),p(15,ft,5,4,"div",5),n(),m(16,"h2"),a(17,"Description"),n(),m(18,"p"),a(19),n(),p(20,dt,1,1,"img",6),m(21,"a",7),a(22,"Back to list"),n(),p(23,vt,5,3,"ng-container",8),n()),e&2){let i=t.ngIf;r(2),v(i.title),r(),c("ngIf",i.subtitle),r(6),c("ngForOf",i.authors),r(4),b(" ",g(14,7,i.isbn)," "),r(2),c("ngIf",i.published),r(4),v(i.description),r(),c("ngIf",i.thumbnailUrl)}}var it=(()=>{let t=class t{constructor(s,o,l){this.service=s,this.route=o,this.router=l;let C=this.route.snapshot.paramMap.get("isbn");this.book$=this.service.getSingle(C)}removeBook(s){this.service.remove(s).subscribe(()=>{this.router.navigateByUrl("/books")})}};t.\u0275fac=function(o){return new(o||t)(d(F),d(Q),d(W))},t.\u0275cmp=k({type:t,selectors:[["bm-book-details"]],decls:2,vars:3,consts:[["class","details",4,"ngIf"],[1,"details"],["role","doc-subtitle",4,"ngIf"],[1,"header"],[4,"ngFor","ngForOf"],[4,"ngIf"],["alt","Cover",3,"src",4,"ngIf"],["routerLink","..",1,"button","arrow-left"],[4,"bmLoggedinOnly"],["role","doc-subtitle"],["alt","Cover",3,"src"],["bmConfirm","Remove book?",1,"red",3,"confirm"],[1,"button",3,"routerLink"]],template:function(o,l){o&1&&(p(0,bt,24,9,"div",0),u(1,"async")),o&2&&c("ngIf",g(1,1,l.book$))},dependencies:[_,I,w,Y,Z,L,J,T]});let e=t;return e})();function gt(e,t){if(e&1&&x(0,"img",6),e&2){let i=f(2);c("src",i.book.thumbnailUrl,E)}}function ht(e,t){if(e&1&&(m(0,"p",7),a(1),n()),e&2){let i=f(2);r(),b(" ",i.book.subtitle," ")}}function kt(e,t){if(e&1&&(m(0,"li"),a(1),n()),e&2){let i=t.$implicit;r(),b(" ",i," ")}}function xt(e,t){if(e&1&&(m(0,"a",1),p(1,gt,1,1,"img",2),m(2,"h2"),a(3),n(),p(4,ht,2,1,"p",3),m(5,"ul",4),p(6,kt,2,1,"li",5),n(),m(7,"div"),a(8),u(9,"isbn"),n()()),e&2){let i=f();c("routerLink",i.book.isbn),r(),c("ngIf",i.book.thumbnailUrl),r(2),v(i.book.title),r(),c("ngIf",i.book.subtitle),r(2),c("ngForOf",i.book.authors),r(2),b("ISBN ",g(9,6,i.book.isbn),"")}}var ot=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=k({type:t,selectors:[["bm-book-list-item"]],inputs:{book:"book"},decls:1,vars:1,consts:[["class","list-item",3,"routerLink",4,"ngIf"],[1,"list-item",3,"routerLink"],["alt","Cover",3,"src",4,"ngIf"],["role","doc-subtitle",4,"ngIf"],[1,"comma-list"],[4,"ngFor","ngForOf"],["alt","Cover",3,"src"],["role","doc-subtitle"]],template:function(o,l){o&1&&p(0,xt,10,8,"a",0),o&2&&c("ngIf",l.book)},dependencies:[_,I,w,T]});let e=t;return e})();function It(e,t){if(e&1&&(m(0,"li"),x(1,"bm-book-list-item",4),n()),e&2){let i=t.$implicit;r(),c("book",i)}}function Ct(e,t){e&1&&(m(0,"li"),a(1," No books available. "),n())}function yt(e,t){if(e&1&&(m(0,"ul",1),p(1,It,2,1,"li",2)(2,Ct,2,0,"li",3),n()),e&2){let i=t.ngIf;r(),c("ngForOf",i),r(),c("ngIf",!i.length)}}var nt=(()=>{let t=class t{constructor(s){this.service=s,this.books$=this.service.getAll()}};t.\u0275fac=function(o){return new(o||t)(d(F))},t.\u0275cmp=k({type:t,selectors:[["bm-book-list"]],decls:4,vars:3,consts:[["class","book-list",4,"ngIf"],[1,"book-list"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"book"]],template:function(o,l){o&1&&(m(0,"h1"),a(1,"Books"),n(),p(2,yt,3,2,"ul",0),u(3,"async")),o&2&&(r(2),c("ngIf",g(3,1,l.books$)))},dependencies:[_,I,ot,L]});let e=t;return e})();var Bt=[{path:"",component:nt},{path:":isbn",component:it}],rt=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=B({type:t}),t.\u0275inj=y({imports:[O.forChild(Bt),O]});let e=t;return e})();var Zt=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=B({type:t}),t.\u0275inj=y({imports:[K,rt]});let e=t;return e})();export{Zt as BooksModule};
