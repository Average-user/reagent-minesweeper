// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('ms.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ms.mines');
ms.core.board = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(ms.mines.create_board((16)));
ms.core.model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(ms.mines.create_model((16),(40),ms.mines.mines_op));
ms.core.end_a = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,null], null));
ms.core.on_click = (function ms$core$on_click(end,pos){
if(cljs.core.truth_(cljs.core.first(end))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ms.core.board,(function (p1__32677_SHARP_){
return ms.mines.reveal(p1__32677_SHARP_,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.model) : cljs.core.deref.call(null,ms.core.model)),pos,ms.mines.mines_op);
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
return (function (p1__32678_SHARP_){
return ms.mines.put_in_board(p1__32678_SHARP_,pos,null);
});})(in_pos))
);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ms.core.board,((function (in_pos){
return (function (p1__32679_SHARP_){
return ms.mines.put_in_board(p1__32679_SHARP_,pos,ms.mines.flag_s);
});})(in_pos))
);
}
}
});
ms.core.color_t = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"\uD83D\uDCA3",null,"\uD83D\uDCA3","\uD83D\uDCA3",null,"\uD83D\uDCA3","\uD83D\uDCA3","\uD83D\uDCA3",null,null,"\uD83D\uDCA3","\uD83D\uDCA3","\uD83D\uDCA3",null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null,null,null,"\uD83D\uDCA3",null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"\uD83D\uDCA3","\uD83D\uDCA3","\uD83D\uDCA3",null,null,null,null,null,null,"\uD83D\uDCA3","\uD83D\uDCA3","\uD83D\uDCA3",null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"\uD83D\uDCA3",null,"\uD83D\uDCA3",null,null,null,null,null,null,"\uD83D\uDCA3",null,"\uD83D\uDCA3",null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null,null,null,null,"\uD83D\uDCA3",null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"\uD83D\uDCA3","\uD83D\uDCA3","\uD83D\uDCA3",null,null,null,"\uD83D\uDCA3","\uD83D\uDCA3","\uD83D\uDCA3",null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"\uD83D\uDCA3",null,"\uD83D\uDCA3",null,null,null,"\uD83D\uDCA3",null,"\uD83D\uDCA3",null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"\uD83D\uDCA3",null,"\uD83D\uDCA3",null,null,null,"\uD83D\uDCA3","\uD83D\uDCA3","\uD83D\uDCA3",null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], null)], null);
ms.core.decide_style = (function ms$core$decide_style(e){
var G__32681 = e;
switch (G__32681) {
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
return (function ms$core$render_board_$_iter__32713(s__32714){
return (new cljs.core.LazySeq(null,((function (end){
return (function (){
var s__32714__$1 = s__32714;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__32714__$1);
if(temp__4657__auto__){
var s__32714__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32714__$2)){
var c__27018__auto__ = cljs.core.chunk_first(s__32714__$2);
var size__27019__auto__ = cljs.core.count(c__27018__auto__);
var b__32716 = cljs.core.chunk_buffer(size__27019__auto__);
if((function (){var i__32715 = (0);
while(true){
if((i__32715 < size__27019__auto__)){
var y1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__27018__auto__,i__32715);
cljs.core.chunk_append(b__32716,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr], null),(function (){var iter__27020__auto__ = ((function (i__32715,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end){
return (function ms$core$render_board_$_iter__32713_$_iter__32731(s__32732){
return (new cljs.core.LazySeq(null,((function (i__32715,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end){
return (function (){
var s__32732__$1 = s__32732;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__32732__$1);
if(temp__4657__auto____$1){
var s__32732__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__32732__$2)){
var c__27018__auto____$1 = cljs.core.chunk_first(s__32732__$2);
var size__27019__auto____$1 = cljs.core.count(c__27018__auto____$1);
var b__32734 = cljs.core.chunk_buffer(size__27019__auto____$1);
if((function (){var i__32733 = (0);
while(true){
if((i__32733 < size__27019__auto____$1)){
var x1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__27018__auto____$1,i__32733);
var in_pos = ms.mines.get_pos((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.board) : cljs.core.deref.call(null,ms.core.board)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
cljs.core.chunk_append(b__32734,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cellE,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (i__32733,i__32715,in_pos,x1,c__27018__auto____$1,size__27019__auto____$1,b__32734,s__32732__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(i__32733,i__32715,in_pos,x1,c__27018__auto____$1,size__27019__auto____$1,b__32734,s__32732__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$onContextMenu,((function (i__32733,i__32715,in_pos,x1,c__27018__auto____$1,size__27019__auto____$1,b__32734,s__32732__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__32733,i__32715,in_pos,x1,c__27018__auto____$1,size__27019__auto____$1,b__32734,s__32732__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end))
], null)], null):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,"0")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos," ")))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell0,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (i__32733,i__32715,in_pos,x1,c__27018__auto____$1,size__27019__auto____$1,b__32734,s__32732__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(i__32733,i__32715,in_pos,x1,c__27018__auto____$1,size__27019__auto____$1,b__32734,s__32732__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$onContextMenu,((function (i__32733,i__32715,in_pos,x1,c__27018__auto____$1,size__27019__auto____$1,b__32734,s__32732__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__32733,i__32715,in_pos,x1,c__27018__auto____$1,size__27019__auto____$1,b__32734,s__32732__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end))
], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,ms.mines.flag_s))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onContextMenu,((function (i__32733,i__32715,in_pos,x1,c__27018__auto____$1,size__27019__auto____$1,b__32734,s__32732__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__32733,i__32715,in_pos,x1,c__27018__auto____$1,size__27019__auto____$1,b__32734,s__32732__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"white"], null)], null),in_pos], null):ms.core.decide_style(in_pos)
))));

var G__32743 = (i__32733 + (1));
i__32733 = G__32743;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32734),ms$core$render_board_$_iter__32713_$_iter__32731(cljs.core.chunk_rest(s__32732__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32734),null);
}
} else {
var x1 = cljs.core.first(s__32732__$2);
var in_pos = ms.mines.get_pos((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.board) : cljs.core.deref.call(null,ms.core.board)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cellE,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (i__32715,in_pos,x1,s__32732__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(i__32715,in_pos,x1,s__32732__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$onContextMenu,((function (i__32715,in_pos,x1,s__32732__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__32715,in_pos,x1,s__32732__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end))
], null)], null):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,"0")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos," ")))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell0,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (i__32715,in_pos,x1,s__32732__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(i__32715,in_pos,x1,s__32732__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$onContextMenu,((function (i__32715,in_pos,x1,s__32732__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__32715,in_pos,x1,s__32732__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end))
], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,ms.mines.flag_s))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onContextMenu,((function (i__32715,in_pos,x1,s__32732__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__32715,in_pos,x1,s__32732__$2,temp__4657__auto____$1,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"white"], null)], null),in_pos], null):ms.core.decide_style(in_pos)
))),ms$core$render_board_$_iter__32713_$_iter__32731(cljs.core.rest(s__32732__$2)));
}
} else {
return null;
}
break;
}
});})(i__32715,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end))
,null,null));
});})(i__32715,y1,c__27018__auto__,size__27019__auto__,b__32716,s__32714__$2,temp__4657__auto__,end))
;
return iter__27020__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(x));
})()));

var G__32744 = (i__32715 + (1));
i__32715 = G__32744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32716),ms$core$render_board_$_iter__32713(cljs.core.chunk_rest(s__32714__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32716),null);
}
} else {
var y1 = cljs.core.first(s__32714__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr], null),(function (){var iter__27020__auto__ = ((function (y1,s__32714__$2,temp__4657__auto__,end){
return (function ms$core$render_board_$_iter__32713_$_iter__32737(s__32738){
return (new cljs.core.LazySeq(null,((function (y1,s__32714__$2,temp__4657__auto__,end){
return (function (){
var s__32738__$1 = s__32738;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__32738__$1);
if(temp__4657__auto____$1){
var s__32738__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__32738__$2)){
var c__27018__auto__ = cljs.core.chunk_first(s__32738__$2);
var size__27019__auto__ = cljs.core.count(c__27018__auto__);
var b__32740 = cljs.core.chunk_buffer(size__27019__auto__);
if((function (){var i__32739 = (0);
while(true){
if((i__32739 < size__27019__auto__)){
var x1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__27018__auto__,i__32739);
var in_pos = ms.mines.get_pos((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.board) : cljs.core.deref.call(null,ms.core.board)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
cljs.core.chunk_append(b__32740,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cellE,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (i__32739,in_pos,x1,c__27018__auto__,size__27019__auto__,b__32740,s__32738__$2,temp__4657__auto____$1,y1,s__32714__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(i__32739,in_pos,x1,c__27018__auto__,size__27019__auto__,b__32740,s__32738__$2,temp__4657__auto____$1,y1,s__32714__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$onContextMenu,((function (i__32739,in_pos,x1,c__27018__auto__,size__27019__auto__,b__32740,s__32738__$2,temp__4657__auto____$1,y1,s__32714__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__32739,in_pos,x1,c__27018__auto__,size__27019__auto__,b__32740,s__32738__$2,temp__4657__auto____$1,y1,s__32714__$2,temp__4657__auto__,end))
], null)], null):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,"0")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos," ")))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell0,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (i__32739,in_pos,x1,c__27018__auto__,size__27019__auto__,b__32740,s__32738__$2,temp__4657__auto____$1,y1,s__32714__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(i__32739,in_pos,x1,c__27018__auto__,size__27019__auto__,b__32740,s__32738__$2,temp__4657__auto____$1,y1,s__32714__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$onContextMenu,((function (i__32739,in_pos,x1,c__27018__auto__,size__27019__auto__,b__32740,s__32738__$2,temp__4657__auto____$1,y1,s__32714__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__32739,in_pos,x1,c__27018__auto__,size__27019__auto__,b__32740,s__32738__$2,temp__4657__auto____$1,y1,s__32714__$2,temp__4657__auto__,end))
], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,ms.mines.flag_s))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onContextMenu,((function (i__32739,in_pos,x1,c__27018__auto__,size__27019__auto__,b__32740,s__32738__$2,temp__4657__auto____$1,y1,s__32714__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__32739,in_pos,x1,c__27018__auto__,size__27019__auto__,b__32740,s__32738__$2,temp__4657__auto____$1,y1,s__32714__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"white"], null)], null),in_pos], null):ms.core.decide_style(in_pos)
))));

var G__32745 = (i__32739 + (1));
i__32739 = G__32745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32740),ms$core$render_board_$_iter__32713_$_iter__32737(cljs.core.chunk_rest(s__32738__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32740),null);
}
} else {
var x1 = cljs.core.first(s__32738__$2);
var in_pos = ms.mines.get_pos((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.board) : cljs.core.deref.call(null,ms.core.board)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cellE,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (in_pos,x1,s__32738__$2,temp__4657__auto____$1,y1,s__32714__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(in_pos,x1,s__32738__$2,temp__4657__auto____$1,y1,s__32714__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$onContextMenu,((function (in_pos,x1,s__32738__$2,temp__4657__auto____$1,y1,s__32714__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(in_pos,x1,s__32738__$2,temp__4657__auto____$1,y1,s__32714__$2,temp__4657__auto__,end))
], null)], null):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,"0")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos," ")))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell0,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_click,((function (in_pos,x1,s__32738__$2,temp__4657__auto____$1,y1,s__32714__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(in_pos,x1,s__32738__$2,temp__4657__auto____$1,y1,s__32714__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$onContextMenu,((function (in_pos,x1,s__32738__$2,temp__4657__auto____$1,y1,s__32714__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(in_pos,x1,s__32738__$2,temp__4657__auto____$1,y1,s__32714__$2,temp__4657__auto__,end))
], null)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_pos,ms.mines.flag_s))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td$cell,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$onContextMenu,((function (in_pos,x1,s__32738__$2,temp__4657__auto____$1,y1,s__32714__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),e.button)){
return ms.core.r_click(end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(in_pos,x1,s__32738__$2,temp__4657__auto____$1,y1,s__32714__$2,temp__4657__auto__,end))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"white"], null)], null),in_pos], null):ms.core.decide_style(in_pos)
))),ms$core$render_board_$_iter__32713_$_iter__32737(cljs.core.rest(s__32738__$2)));
}
} else {
return null;
}
break;
}
});})(y1,s__32714__$2,temp__4657__auto__,end))
,null,null));
});})(y1,s__32714__$2,temp__4657__auto__,end))
;
return iter__27020__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(x));
})()),ms$core$render_board_$_iter__32713(cljs.core.rest(s__32714__$2)));
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
ms.core.game = (function ms$core$game(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.render_board,(16),(16)], null),(cljs.core.truth_(cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.end_a) : cljs.core.deref.call(null,ms.core.end_a))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$overlay,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$play,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
var G__32752_32758 = ms.core.end_a;
var G__32753_32759 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,null], null);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32752_32758,G__32753_32759) : cljs.core.reset_BANG_.call(null,G__32752_32758,G__32753_32759));

var G__32754_32760 = ms.core.board;
var G__32755_32761 = ms.mines.create_board((16));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32754_32760,G__32755_32761) : cljs.core.reset_BANG_.call(null,G__32754_32760,G__32755_32761));

var G__32756 = ms.core.model;
var G__32757 = ms.mines.create_model((16),(40),ms.mines.mines_op);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__32756,G__32757) : cljs.core.reset_BANG_.call(null,G__32756,G__32757));
})], null),(cljs.core.truth_(cljs.core.second((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ms.core.end_a) : cljs.core.deref.call(null,ms.core.end_a))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"You win"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"\u21BA"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"You Lose"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"\u21BA"], null)], null))], null)], null):null)], null);
});
ms.core.run = (function ms$core$run(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.game], null),document.getElementById("app"));
});
ms.core.run();
