(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{h9W5:function(t,r,e){"use strict";e.r(r),e.d(r,"OrdersModule",function(){return g});var s=e("PCNd"),c=e("fXoL"),o=e("tyNb"),i=e("tc9g"),b=e("AytR"),n=e("tk/3");let d=(()=>{class t{constructor(t){this.http=t,this.baseUrl=b.a.apiUrl}getOrdersForUser(){return this.http.get(this.baseUrl+"orders")}getOrderDetailed(t){return this.http.get(this.baseUrl+"orders/"+t)}}return t.\u0275fac=function(r){return new(r||t)(c.Wb(n.b))},t.\u0275prov=c.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var a=e("ofXK"),l=e("GJcC"),u=e("PoZw");function p(t,r){if(1&t&&(c.Sb(0,"div",2),c.Sb(1,"div",3),c.Nb(2,"app-basket-summary",4),c.Rb(),c.Sb(3,"div",5),c.Nb(4,"app-order-totals",6),c.Rb(),c.Rb()),2&t){const t=c.bc();c.Bb(2),c.hc("items",t.order.orderItems)("isBasket",!1)("isOrder",!0),c.Bb(2),c.hc("shippingPrice",t.order.shippingPrice)("subtotal",t.order.subtotal)("total",t.order.total)}}let h=(()=>{class t{constructor(t,r,e){this.route=t,this.breadcrumbService=r,this.orderService=e,this.breadcrumbService.set("@OrderDetailed"," ")}ngOnInit(){this.orderService.getOrderDetailed(+this.route.snapshot.paramMap.get("id")).subscribe(t=>{this.order=t,this.breadcrumbService.set("@OrderDetailed",`Order# ${t.id} - ${t.status}`)},t=>{console.log(t)})}}return t.\u0275fac=function(r){return new(r||t)(c.Mb(o.a),c.Mb(i.c),c.Mb(d))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-order-detailed"]],decls:2,vars:1,consts:[[1,"container","mt-5"],["class","row",4,"ngIf"],[1,"row"],[1,"col-8"],[3,"items","isBasket","isOrder"],[1,"col-4"],[3,"shippingPrice","subtotal","total"]],template:function(t,r){1&t&&(c.Sb(0,"div",0),c.yc(1,p,5,6,"div",1),c.Rb()),2&t&&(c.Bb(1),c.hc("ngIf",r.order))},directives:[a.m,l.a,u.a],styles:[""]}),t})();function f(t,r){if(1&t&&(c.Sb(0,"tr",6),c.Sb(1,"th"),c.Ac(2),c.Rb(),c.Sb(3,"td"),c.Ac(4),c.cc(5,"date"),c.Rb(),c.Sb(6,"td"),c.Ac(7),c.cc(8,"currency"),c.Rb(),c.Sb(9,"td"),c.Ac(10),c.Rb(),c.Rb()),2&t){const t=r.$implicit;c.jc("routerLink","/orders/",t.id,""),c.Bb(2),c.Cc("# ",t.id,""),c.Bb(2),c.Bc(c.ec(5,5,t.orderDate,"medium")),c.Bb(3),c.Bc(c.dc(8,8,t.total)),c.Bb(3),c.Bc(t.status)}}const S=[{path:"",component:(()=>{class t{constructor(t){this.orderService=t}ngOnInit(){this.getOrders()}getOrders(){this.orderService.getOrdersForUser().subscribe(t=>{this.orders=t},t=>{console.log(t)})}}return t.\u0275fac=function(r){return new(r||t)(c.Mb(d))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-orders"]],decls:16,vars:1,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-12"],[1,"table","table-hover",2,"cursor","pointer"],[1,"thead-light"],[3,"routerLink",4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(t,r){1&t&&(c.Sb(0,"div",0),c.Sb(1,"div",1),c.Sb(2,"div",2),c.Sb(3,"table",3),c.Sb(4,"thead",4),c.Sb(5,"tr"),c.Sb(6,"th"),c.Ac(7,"Order"),c.Rb(),c.Sb(8,"th"),c.Ac(9,"Date"),c.Rb(),c.Sb(10,"th"),c.Ac(11,"Total"),c.Rb(),c.Sb(12,"th"),c.Ac(13,"Status"),c.Rb(),c.Rb(),c.Rb(),c.Sb(14,"tbody"),c.yc(15,f,11,10,"tr",5),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Rb()),2&t&&(c.Bb(15),c.hc("ngForOf",r.orders))},directives:[a.l,o.d],pipes:[a.f,a.d],styles:[""]}),t})()},{path:":id",component:h,data:{breadcrumb:{alias:"OrderDetailed"}}}];let m=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({imports:[[o.g.forChild(S)],o.g]}),t})(),g=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({imports:[[a.c,m,s.a]]}),t})()}}]);