// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('ms.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ms.mines');
ms.core.op = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(ms.mines.mines_op);
ms.core.board = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(ms.mines.create_board((16)));
ms.core.model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(ms.mines.create_model((16),(40),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.op) : cljs.core.deref.call(null,ms.core.op))));
ms.core.end_a = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,null], null));
ms.core.seconds = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
ms.core.format2 = (function ms$core$format2(n){
if((n > (9))){
return [cljs.core.str(n)].join('');
} else {
return [cljs.core.str("0"),cljs.core.str(n)].join('');
}
});
ms.core.seconds__GT_minutes = (function ms$core$seconds__GT_minutes(sec){
var min = cljs.core.quot(sec,(60));
var s = cljs.core.mod(sec,(60));
return [cljs.core.str(ms.core.format2(min)),cljs.core.str(":"),cljs.core.str(ms.core.format2(s))].join('');
});
ms.core.on_click = (function ms$core$on_click(end,pos){
if(cljs.core.truth_(cljs.core.first(end))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ms.core.board,(function (p1__32667_SHARP_){
return ms.mines.reveal(p1__32667_SHARP_,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.model) : cljs.core.deref.call(null,ms.core.model)),pos,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.op) : cljs.core.deref.call(null,ms.core.op)));
}));
}
});
ms.core.r_click = (function ms$core$r_click(end,pos){
if(cljs.core.truth_(cljs.core.first(end))){
return null;
} else {
var in_pos = ms.mines.get_pos((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.board) : cljs.core.deref.call(null,ms.core.board)),pos);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,ms.mines.flag_s)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ms.core.board,((function (in_pos){
return (function (p1__32668_SHARP_){
return ms.mines.put_in_board(p1__32668_SHARP_,pos,null);
});})(in_pos))
);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ms.core.board,((function (in_pos){
return (function (p1__32669_SHARP_){
return ms.mines.put_in_board(p1__32669_SHARP_,pos,ms.mines.flag_s);
});})(in_pos))
);
}
}
});
var G__32670_32672 = (function (){
if(cljs.core.truth_(cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.end_a) : cljs.core.deref.call(null,ms.core.end_a))))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ms.core.seconds,cljs.core.inc);
}
});
var G__32671_32673 = (1000);
setInterval(G__32670_32672,G__32671_32673);
ms.core.timer = (function ms$core$timer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1$time,[cljs.core.str("\u23F2 "),cljs.core.str(ms.core.seconds__GT_minutes((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.seconds) : cljs.core.deref.call(null,ms.core.seconds))))].join('')], null);
});
ms.core.decide_style = (function ms$core$decide_style(e){
var G__32675 = e;
switch (G__32675) {
case "1":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"blue"], null)], null),e], null);

break;
case "2":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"green"], null)], null),e], null);

break;
case "3":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"red"], null)], null),e], null);

break;
case "4":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"DarkBlue"], null)], null),e], null);

break;
case "5":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"DarkRed"], null)], null),e], null);

break;
case "6":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"Teal"], null)], null),e], null);

break;
case "7":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"black"], null)], null),e], null);

break;
case "8":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"OrangeRed"], null)], null),e], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cellB,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"red"], null)], null),e], null);

}
});
ms.core.render_board = (function ms$core$render_board(x,y){
var end = ms.mines.end_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.board) : cljs.core.deref.call(null,ms.core.board)),(40));
var cells = (function (){var iter__27020__auto__ = ((function (end){
return (function ms$core$render_board_$_iter__32707(s__32708){
return (new cljs.core.LazySeq(null,((function (end){
return (function (){
var s__32708__$1 = s__32708;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__32708__$1);
if(temp__4657__auto__){
var s__32708__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32708__$2)){
var c__27018__auto__ = cljs.core.chunk_first(s__32708__$2);
var size__27019__auto__ = cljs.core.count(c__27018__auto__);
var b__32710 = cljs.core.chunk_buffer(size__27019__auto__);
if((function (){var i__32709 = (0);
while(true){
if((i__32709 < size__27019__auto__)){
var y1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__27018__auto__,i__32709);
cljs.core.chunk_append(b__32710,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr], null),(function (){var iter__27020__auto__ = ((function (i__32709,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end){
return (function ms$core$render_board_$_iter__32707_$_iter__32725(s__32726){
return (new cljs.core.LazySeq(null,((function (i__32709,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end){
return (function (){
var s__32726__$1 = s__32726;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__32726__$1);
if(temp__4657__auto____$1){
var s__32726__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__32726__$2)){
var c__27018__auto____$1 = cljs.core.chunk_first(s__32726__$2);
var size__27019__auto____$1 = cljs.core.count(c__27018__auto____$1);
var b__32728 = cljs.core.chunk_buffer(size__27019__auto____$1);
if((function (){var i__32727 = (0);
while(true){
if((i__32727 < size__27019__auto____$1)){
var x1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__27018__auto____$1,i__32727);
var in_pos = ms.mines.get_pos((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.board) : cljs.core.deref.call(null,ms.core.board)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
cljs.core.chunk_append(b__32728,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cellE,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (i__32727,i__32709,in_pos,x1,c__27018__auto____$1,size__27019__auto____$1,b__32728,s__32726__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(i__32727,i__32709,in_pos,x1,c__27018__auto____$1,size__27019__auto____$1,b__32728,s__32726__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$onContextMenu,((function (i__32727,i__32709,in_pos,x1,c__27018__auto____$1,size__27019__auto____$1,b__32728,s__32726__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__32727,i__32709,in_pos,x1,c__27018__auto____$1,size__27019__auto____$1,b__32728,s__32726__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end))
], null)], null):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,"0")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos," ")))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell0,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (i__32727,i__32709,in_pos,x1,c__27018__auto____$1,size__27019__auto____$1,b__32728,s__32726__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(i__32727,i__32709,in_pos,x1,c__27018__auto____$1,size__27019__auto____$1,b__32728,s__32726__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$onContextMenu,((function (i__32727,i__32709,in_pos,x1,c__27018__auto____$1,size__27019__auto____$1,b__32728,s__32726__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__32727,i__32709,in_pos,x1,c__27018__auto____$1,size__27019__auto____$1,b__32728,s__32726__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end))
], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,ms.mines.flag_s))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onContextMenu,((function (i__32727,i__32709,in_pos,x1,c__27018__auto____$1,size__27019__auto____$1,b__32728,s__32726__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__32727,i__32709,in_pos,x1,c__27018__auto____$1,size__27019__auto____$1,b__32728,s__32726__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"Black",cljs.core.cst$kw$background_DASH_color,"rgba(0, 0, 0, 0.3)"], null)], null),in_pos], null):ms.core.decide_style(in_pos)
))));

var G__32737 = (i__32727 + (1));
i__32727 = G__32737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32728),ms$core$render_board_$_iter__32707_$_iter__32725(cljs.core.chunk_rest(s__32726__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32728),null);
}
} else {
var x1 = cljs.core.first(s__32726__$2);
var in_pos = ms.mines.get_pos((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.board) : cljs.core.deref.call(null,ms.core.board)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cellE,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (i__32709,in_pos,x1,s__32726__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(i__32709,in_pos,x1,s__32726__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$onContextMenu,((function (i__32709,in_pos,x1,s__32726__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__32709,in_pos,x1,s__32726__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end))
], null)], null):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,"0")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos," ")))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell0,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (i__32709,in_pos,x1,s__32726__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(i__32709,in_pos,x1,s__32726__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$onContextMenu,((function (i__32709,in_pos,x1,s__32726__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__32709,in_pos,x1,s__32726__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end))
], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,ms.mines.flag_s))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onContextMenu,((function (i__32709,in_pos,x1,s__32726__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__32709,in_pos,x1,s__32726__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"Black",cljs.core.cst$kw$background_DASH_color,"rgba(0, 0, 0, 0.3)"], null)], null),in_pos], null):ms.core.decide_style(in_pos)
))),ms$core$render_board_$_iter__32707_$_iter__32725(cljs.core.rest(s__32726__$2)));
}
} else {
return null;
}
break;
}
});})(i__32709,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end))
,null,null));
});})(i__32709,y1,c__27018__auto__,size__27019__auto__,b__32710,s__32708__$2,temp__4657__auto__,end))
;
return iter__27020__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(x));
})()));

var G__32738 = (i__32709 + (1));
i__32709 = G__32738;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32710),ms$core$render_board_$_iter__32707(cljs.core.chunk_rest(s__32708__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32710),null);
}
} else {
var y1 = cljs.core.first(s__32708__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr], null),(function (){var iter__27020__auto__ = ((function (y1,s__32708__$2,temp__4657__auto__,end){
return (function ms$core$render_board_$_iter__32707_$_iter__32731(s__32732){
return (new cljs.core.LazySeq(null,((function (y1,s__32708__$2,temp__4657__auto__,end){
return (function (){
var s__32732__$1 = s__32732;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__32732__$1);
if(temp__4657__auto____$1){
var s__32732__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__32732__$2)){
var c__27018__auto__ = cljs.core.chunk_first(s__32732__$2);
var size__27019__auto__ = cljs.core.count(c__27018__auto__);
var b__32734 = cljs.core.chunk_buffer(size__27019__auto__);
if((function (){var i__32733 = (0);
while(true){
if((i__32733 < size__27019__auto__)){
var x1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__27018__auto__,i__32733);
var in_pos = ms.mines.get_pos((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.board) : cljs.core.deref.call(null,ms.core.board)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
cljs.core.chunk_append(b__32734,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cellE,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (i__32733,in_pos,x1,c__27018__auto__,size__27019__auto__,b__32734,s__32732__$2,temp__4657__auto____$1,y1,s__32708__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(i__32733,in_pos,x1,c__27018__auto__,size__27019__auto__,b__32734,s__32732__$2,temp__4657__auto____$1,y1,s__32708__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$onContextMenu,((function (i__32733,in_pos,x1,c__27018__auto__,size__27019__auto__,b__32734,s__32732__$2,temp__4657__auto____$1,y1,s__32708__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__32733,in_pos,x1,c__27018__auto__,size__27019__auto__,b__32734,s__32732__$2,temp__4657__auto____$1,y1,s__32708__$2,temp__4657__auto__,end))
], null)], null):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,"0")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos," ")))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell0,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (i__32733,in_pos,x1,c__27018__auto__,size__27019__auto__,b__32734,s__32732__$2,temp__4657__auto____$1,y1,s__32708__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(i__32733,in_pos,x1,c__27018__auto__,size__27019__auto__,b__32734,s__32732__$2,temp__4657__auto____$1,y1,s__32708__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$onContextMenu,((function (i__32733,in_pos,x1,c__27018__auto__,size__27019__auto__,b__32734,s__32732__$2,temp__4657__auto____$1,y1,s__32708__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__32733,in_pos,x1,c__27018__auto__,size__27019__auto__,b__32734,s__32732__$2,temp__4657__auto____$1,y1,s__32708__$2,temp__4657__auto__,end))
], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,ms.mines.flag_s))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onContextMenu,((function (i__32733,in_pos,x1,c__27018__auto__,size__27019__auto__,b__32734,s__32732__$2,temp__4657__auto____$1,y1,s__32708__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__32733,in_pos,x1,c__27018__auto__,size__27019__auto__,b__32734,s__32732__$2,temp__4657__auto____$1,y1,s__32708__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"Black",cljs.core.cst$kw$background_DASH_color,"rgba(0, 0, 0, 0.3)"], null)], null),in_pos], null):ms.core.decide_style(in_pos)
))));

var G__32739 = (i__32733 + (1));
i__32733 = G__32739;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32734),ms$core$render_board_$_iter__32707_$_iter__32731(cljs.core.chunk_rest(s__32732__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32734),null);
}
} else {
var x1 = cljs.core.first(s__32732__$2);
var in_pos = ms.mines.get_pos((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.board) : cljs.core.deref.call(null,ms.core.board)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cellE,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (in_pos,x1,s__32732__$2,temp__4657__auto____$1,y1,s__32708__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(in_pos,x1,s__32732__$2,temp__4657__auto____$1,y1,s__32708__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$onContextMenu,((function (in_pos,x1,s__32732__$2,temp__4657__auto____$1,y1,s__32708__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(in_pos,x1,s__32732__$2,temp__4657__auto____$1,y1,s__32708__$2,temp__4657__auto__,end))
], null)], null):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,"0")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos," ")))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell0,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (in_pos,x1,s__32732__$2,temp__4657__auto____$1,y1,s__32708__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(in_pos,x1,s__32732__$2,temp__4657__auto____$1,y1,s__32708__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$onContextMenu,((function (in_pos,x1,s__32732__$2,temp__4657__auto____$1,y1,s__32708__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(in_pos,x1,s__32732__$2,temp__4657__auto____$1,y1,s__32708__$2,temp__4657__auto__,end))
], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,ms.mines.flag_s))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onContextMenu,((function (in_pos,x1,s__32732__$2,temp__4657__auto____$1,y1,s__32708__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(in_pos,x1,s__32732__$2,temp__4657__auto____$1,y1,s__32708__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"Black",cljs.core.cst$kw$background_DASH_color,"rgba(0, 0, 0, 0.3)"], null)], null),in_pos], null):ms.core.decide_style(in_pos)
))),ms$core$render_board_$_iter__32707_$_iter__32731(cljs.core.rest(s__32732__$2)));
}
} else {
return null;
}
break;
}
});})(y1,s__32708__$2,temp__4657__auto__,end))
,null,null));
});})(y1,s__32708__$2,temp__4657__auto__,end))
;
return iter__27020__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(x));
})()),ms$core$render_board_$_iter__32707(cljs.core.rest(s__32708__$2)));
}
} else {
return null;
}
break;
}
});})(end))
,null,null));
});})(end))
;
return iter__27020__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(y));
})();
if(cljs.core.truth_(cljs.core.first(end))){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ms.core.end_a,end) : cljs.core.reset_BANG_.call(null,ms.core.end_a,end));
} else {
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table$stage,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,(510),cljs.core.cst$kw$width,(510),cljs.core.cst$kw$table_DASH_layout,"fixed"], null)], null)], null),cells);
});
ms.core.restart = (function ms$core$restart(){
var G__32746_32752 = ms.core.end_a;
var G__32747_32753 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,null], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32746_32752,G__32747_32753) : cljs.core.reset_BANG_.call(null,G__32746_32752,G__32747_32753));

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ms.core.seconds,(0)) : cljs.core.reset_BANG_.call(null,ms.core.seconds,(0)));

var G__32748_32754 = ms.core.board;
var G__32749_32755 = ms.mines.create_board((16));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32748_32754,G__32749_32755) : cljs.core.reset_BANG_.call(null,G__32748_32754,G__32749_32755));

var G__32750 = ms.core.model;
var G__32751 = ms.mines.create_model((16),(40),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.op) : cljs.core.deref.call(null,ms.core.op)));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32750,G__32751) : cljs.core.reset_BANG_.call(null,G__32750,G__32751));
});
ms.core.mode_component = (function ms$core$mode_component(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.op) : cljs.core.deref.call(null,ms.core.op)),ms.mines.mines_op)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,"13%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$ms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ms.core.op,ms.mines.mines_op) : cljs.core.reset_BANG_.call(null,ms.core.op,ms.mines.mines_op));

return ms.core.restart();
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$image,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"img/mine.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"70px",cljs.core.cst$kw$height,"70px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$mn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ms.core.op,ms.mines.knights_op) : cljs.core.reset_BANG_.call(null,ms.core.op,ms.mines.knights_op));

return ms.core.restart();
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$image,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"img/knight.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"70px",cljs.core.cst$kw$height,"70px"], null)], null)], null)], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_left,"13%"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$mn,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ms.core.op,ms.mines.mines_op) : cljs.core.reset_BANG_.call(null,ms.core.op,ms.mines.mines_op));

return ms.core.restart();
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$image,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"img/mine.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"70px",cljs.core.cst$kw$height,"70px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$ms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ms.core.op,ms.mines.knights_op) : cljs.core.reset_BANG_.call(null,ms.core.op,ms.mines.knights_op));

return ms.core.restart();
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$image,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,"img/knight.png",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"70px",cljs.core.cst$kw$height,"70px"], null)], null)], null)], null)], null)], null);
}
});
ms.core.game = (function ms$core$game(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.timer], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button$restart,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return ms.core.restart();
})], null),"Start Over"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.mode_component], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.render_board,(16),(16)], null),(cljs.core.truth_(cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.end_a) : cljs.core.deref.call(null,ms.core.end_a))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$overlay,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$play,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return ms.core.restart();
})], null),(cljs.core.truth_(cljs.core.second((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.end_a) : cljs.core.deref.call(null,ms.core.end_a))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"You win"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"\u21BA",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,ms.core.seconds__GT_minutes((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.seconds) : cljs.core.deref.call(null,ms.core.seconds)))], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"You Lose"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"\u21BA"], null)], null))], null)], null):null)], null);
});
ms.core.run = (function ms$core$run(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.game], null),document.getElementById("app"));
});
ms.core.run();
