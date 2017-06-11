// Compiled by ClojureScript 1.9.229 {}
goog.provide('ms.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ms.mines');
ms.core.board = reagent.core.atom.call(null,ms.mines.create_board.call(null,(16)));
ms.core.model = reagent.core.atom.call(null,ms.mines.create_model.call(null,(16),(40),ms.mines.mines_op));
ms.core.end_a = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,null], null));
ms.core.seconds = reagent.core.atom.call(null,(0));
ms.core.format2 = (function ms$core$format2(n){
if((n > (9))){
return [cljs.core.str(n)].join('');
} else {
return [cljs.core.str("0"),cljs.core.str(n)].join('');
}
});
ms.core.seconds__GT_minutes = (function ms$core$seconds__GT_minutes(sec){
var min = cljs.core.quot.call(null,sec,(60));
var s = cljs.core.mod.call(null,sec,(60));
return [cljs.core.str(ms.core.format2.call(null,min)),cljs.core.str(":"),cljs.core.str(ms.core.format2.call(null,s))].join('');
});
ms.core.on_click = (function ms$core$on_click(end,pos){
if(cljs.core.truth_(cljs.core.first.call(null,end))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,ms.core.board,(function (p1__40294_SHARP_){
return ms.mines.reveal.call(null,p1__40294_SHARP_,cljs.core.deref.call(null,ms.core.model),pos,ms.mines.mines_op);
}));
}
});
ms.core.r_click = (function ms$core$r_click(end,pos){
if(cljs.core.truth_(cljs.core.first.call(null,end))){
return null;
} else {
var in_pos = ms.mines.get_pos.call(null,cljs.core.deref.call(null,ms.core.board),pos);
if(cljs.core._EQ_.call(null,in_pos,ms.mines.flag_s)){
return cljs.core.swap_BANG_.call(null,ms.core.board,((function (in_pos){
return (function (p1__40295_SHARP_){
return ms.mines.put_in_board.call(null,p1__40295_SHARP_,pos,null);
});})(in_pos))
);
} else {
return cljs.core.swap_BANG_.call(null,ms.core.board,((function (in_pos){
return (function (p1__40296_SHARP_){
return ms.mines.put_in_board.call(null,p1__40296_SHARP_,pos,ms.mines.flag_s);
});})(in_pos))
);
}
}
});
setInterval((function (){
if(cljs.core.truth_(cljs.core.first.call(null,cljs.core.deref.call(null,ms.core.end_a)))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,ms.core.seconds,cljs.core.inc);
}
}),(1000));
ms.core.timer = (function ms$core$timer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.time","h1.time",-60553187),[cljs.core.str("\u23F2 "),cljs.core.str(ms.core.seconds__GT_minutes.call(null,cljs.core.deref.call(null,ms.core.seconds)))].join('')], null);
});
ms.core.color_t = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"\uD83D\uDCA3",null,"\uD83D\uDCA3","\uD83D\uDCA3",null,"\uD83D\uDCA3","\uD83D\uDCA3","\uD83D\uDCA3",null,null,"\uD83D\uDCA3","\uD83D\uDCA3","\uD83D\uDCA3",null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null,null,null,"\uD83D\uDCA3",null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"\uD83D\uDCA3","\uD83D\uDCA3","\uD83D\uDCA3",null,null,null,null,null,null,"\uD83D\uDCA3","\uD83D\uDCA3","\uD83D\uDCA3",null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"\uD83D\uDCA3",null,"\uD83D\uDCA3",null,null,null,null,null,null,"\uD83D\uDCA3",null,"\uD83D\uDCA3",null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null,null,null,null,"\uD83D\uDCA3",null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"\uD83D\uDCA3","\uD83D\uDCA3","\uD83D\uDCA3",null,null,null,"\uD83D\uDCA3","\uD83D\uDCA3","\uD83D\uDCA3",null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"\uD83D\uDCA3",null,"\uD83D\uDCA3",null,null,null,"\uD83D\uDCA3",null,"\uD83D\uDCA3",null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,"\uD83D\uDCA3",null,"\uD83D\uDCA3",null,null,null,"\uD83D\uDCA3","\uD83D\uDCA3","\uD83D\uDCA3",null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], null),new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null], null)], null);
ms.core.decide_style = (function ms$core$decide_style(e){
var G__40298 = e;
switch (G__40298) {
case "1":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null)], null),e], null);

break;
case "2":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),e], null);

break;
case "3":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),e], null);

break;
case "4":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"DarkBlue"], null)], null),e], null);

break;
case "5":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"DarkRed"], null)], null),e], null);

break;
case "6":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"Teal"], null)], null),e], null);

break;
case "7":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null)], null),e], null);

break;
case "8":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"OrangeRed"], null)], null),e], null);

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cellB","td.cellB",-1586374289),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),e], null);

}
});
ms.core.render_board = (function ms$core$render_board(x,y){
var end = ms.mines.end_QMARK_.call(null,cljs.core.deref.call(null,ms.core.board),(40));
var cells = (function (){var iter__26759__auto__ = ((function (end){
return (function ms$core$render_board_$_iter__40320(s__40321){
return (new cljs.core.LazySeq(null,((function (end){
return (function (){
var s__40321__$1 = s__40321;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40321__$1);
if(temp__4657__auto__){
var s__40321__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40321__$2)){
var c__26757__auto__ = cljs.core.chunk_first.call(null,s__40321__$2);
var size__26758__auto__ = cljs.core.count.call(null,c__26757__auto__);
var b__40323 = cljs.core.chunk_buffer.call(null,size__26758__auto__);
if((function (){var i__40322 = (0);
while(true){
if((i__40322 < size__26758__auto__)){
var y1 = cljs.core._nth.call(null,c__26757__auto__,i__40322);
cljs.core.chunk_append.call(null,b__40323,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__26759__auto__ = ((function (i__40322,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end){
return (function ms$core$render_board_$_iter__40320_$_iter__40332(s__40333){
return (new cljs.core.LazySeq(null,((function (i__40322,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end){
return (function (){
var s__40333__$1 = s__40333;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__40333__$1);
if(temp__4657__auto____$1){
var s__40333__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40333__$2)){
var c__26757__auto____$1 = cljs.core.chunk_first.call(null,s__40333__$2);
var size__26758__auto____$1 = cljs.core.count.call(null,c__26757__auto____$1);
var b__40335 = cljs.core.chunk_buffer.call(null,size__26758__auto____$1);
if((function (){var i__40334 = (0);
while(true){
if((i__40334 < size__26758__auto____$1)){
var x1 = cljs.core._nth.call(null,c__26757__auto____$1,i__40334);
var in_pos = ms.mines.get_pos.call(null,cljs.core.deref.call(null,ms.core.board),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
cljs.core.chunk_append.call(null,b__40335,((cljs.core._EQ_.call(null,in_pos,null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cellE","td.cellE",623496785),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40334,i__40322,in_pos,x1,c__26757__auto____$1,size__26758__auto____$1,b__40335,s__40333__$2,temp__4657__auto____$1,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click.call(null,end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(i__40334,i__40322,in_pos,x1,c__26757__auto____$1,size__26758__auto____$1,b__40335,s__40333__$2,temp__4657__auto____$1,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end))
,new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),((function (i__40334,i__40322,in_pos,x1,c__26757__auto____$1,size__26758__auto____$1,b__40335,s__40333__$2,temp__4657__auto____$1,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.call(null,(2),e.button)){
return ms.core.r_click.call(null,end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__40334,i__40322,in_pos,x1,c__26757__auto____$1,size__26758__auto____$1,b__40335,s__40333__$2,temp__4657__auto____$1,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end))
], null)], null):(((cljs.core._EQ_.call(null,in_pos,"0")) || (cljs.core._EQ_.call(null,in_pos," ")))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell0","td.cell0",-1559730114),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40334,i__40322,in_pos,x1,c__26757__auto____$1,size__26758__auto____$1,b__40335,s__40333__$2,temp__4657__auto____$1,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click.call(null,end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(i__40334,i__40322,in_pos,x1,c__26757__auto____$1,size__26758__auto____$1,b__40335,s__40333__$2,temp__4657__auto____$1,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end))
,new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),((function (i__40334,i__40322,in_pos,x1,c__26757__auto____$1,size__26758__auto____$1,b__40335,s__40333__$2,temp__4657__auto____$1,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.call(null,(2),e.button)){
return ms.core.r_click.call(null,end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__40334,i__40322,in_pos,x1,c__26757__auto____$1,size__26758__auto____$1,b__40335,s__40333__$2,temp__4657__auto____$1,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end))
], null)], null):((cljs.core._EQ_.call(null,in_pos,ms.mines.flag_s))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),((function (i__40334,i__40322,in_pos,x1,c__26757__auto____$1,size__26758__auto____$1,b__40335,s__40333__$2,temp__4657__auto____$1,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.call(null,(2),e.button)){
return ms.core.r_click.call(null,end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__40334,i__40322,in_pos,x1,c__26757__auto____$1,size__26758__auto____$1,b__40335,s__40333__$2,temp__4657__auto____$1,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"Black",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(0, 0, 0, 0.3)"], null)], null),in_pos], null):ms.core.decide_style.call(null,in_pos)
))));

var G__40340 = (i__40334 + (1));
i__40334 = G__40340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40335),ms$core$render_board_$_iter__40320_$_iter__40332.call(null,cljs.core.chunk_rest.call(null,s__40333__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40335),null);
}
} else {
var x1 = cljs.core.first.call(null,s__40333__$2);
var in_pos = ms.mines.get_pos.call(null,cljs.core.deref.call(null,ms.core.board),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,in_pos,null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cellE","td.cellE",623496785),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40322,in_pos,x1,s__40333__$2,temp__4657__auto____$1,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click.call(null,end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(i__40322,in_pos,x1,s__40333__$2,temp__4657__auto____$1,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end))
,new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),((function (i__40322,in_pos,x1,s__40333__$2,temp__4657__auto____$1,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.call(null,(2),e.button)){
return ms.core.r_click.call(null,end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__40322,in_pos,x1,s__40333__$2,temp__4657__auto____$1,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end))
], null)], null):(((cljs.core._EQ_.call(null,in_pos,"0")) || (cljs.core._EQ_.call(null,in_pos," ")))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell0","td.cell0",-1559730114),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40322,in_pos,x1,s__40333__$2,temp__4657__auto____$1,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click.call(null,end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(i__40322,in_pos,x1,s__40333__$2,temp__4657__auto____$1,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end))
,new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),((function (i__40322,in_pos,x1,s__40333__$2,temp__4657__auto____$1,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.call(null,(2),e.button)){
return ms.core.r_click.call(null,end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__40322,in_pos,x1,s__40333__$2,temp__4657__auto____$1,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end))
], null)], null):((cljs.core._EQ_.call(null,in_pos,ms.mines.flag_s))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),((function (i__40322,in_pos,x1,s__40333__$2,temp__4657__auto____$1,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.call(null,(2),e.button)){
return ms.core.r_click.call(null,end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__40322,in_pos,x1,s__40333__$2,temp__4657__auto____$1,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"Black",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(0, 0, 0, 0.3)"], null)], null),in_pos], null):ms.core.decide_style.call(null,in_pos)
))),ms$core$render_board_$_iter__40320_$_iter__40332.call(null,cljs.core.rest.call(null,s__40333__$2)));
}
} else {
return null;
}
break;
}
});})(i__40322,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end))
,null,null));
});})(i__40322,y1,c__26757__auto__,size__26758__auto__,b__40323,s__40321__$2,temp__4657__auto__,end))
;
return iter__26759__auto__.call(null,cljs.core.range.call(null,x));
})()));

var G__40341 = (i__40322 + (1));
i__40322 = G__40341;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40323),ms$core$render_board_$_iter__40320.call(null,cljs.core.chunk_rest.call(null,s__40321__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40323),null);
}
} else {
var y1 = cljs.core.first.call(null,s__40321__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__26759__auto__ = ((function (y1,s__40321__$2,temp__4657__auto__,end){
return (function ms$core$render_board_$_iter__40320_$_iter__40336(s__40337){
return (new cljs.core.LazySeq(null,((function (y1,s__40321__$2,temp__4657__auto__,end){
return (function (){
var s__40337__$1 = s__40337;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__40337__$1);
if(temp__4657__auto____$1){
var s__40337__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40337__$2)){
var c__26757__auto__ = cljs.core.chunk_first.call(null,s__40337__$2);
var size__26758__auto__ = cljs.core.count.call(null,c__26757__auto__);
var b__40339 = cljs.core.chunk_buffer.call(null,size__26758__auto__);
if((function (){var i__40338 = (0);
while(true){
if((i__40338 < size__26758__auto__)){
var x1 = cljs.core._nth.call(null,c__26757__auto__,i__40338);
var in_pos = ms.mines.get_pos.call(null,cljs.core.deref.call(null,ms.core.board),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
cljs.core.chunk_append.call(null,b__40339,((cljs.core._EQ_.call(null,in_pos,null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cellE","td.cellE",623496785),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40338,in_pos,x1,c__26757__auto__,size__26758__auto__,b__40339,s__40337__$2,temp__4657__auto____$1,y1,s__40321__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click.call(null,end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(i__40338,in_pos,x1,c__26757__auto__,size__26758__auto__,b__40339,s__40337__$2,temp__4657__auto____$1,y1,s__40321__$2,temp__4657__auto__,end))
,new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),((function (i__40338,in_pos,x1,c__26757__auto__,size__26758__auto__,b__40339,s__40337__$2,temp__4657__auto____$1,y1,s__40321__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.call(null,(2),e.button)){
return ms.core.r_click.call(null,end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__40338,in_pos,x1,c__26757__auto__,size__26758__auto__,b__40339,s__40337__$2,temp__4657__auto____$1,y1,s__40321__$2,temp__4657__auto__,end))
], null)], null):(((cljs.core._EQ_.call(null,in_pos,"0")) || (cljs.core._EQ_.call(null,in_pos," ")))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell0","td.cell0",-1559730114),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__40338,in_pos,x1,c__26757__auto__,size__26758__auto__,b__40339,s__40337__$2,temp__4657__auto____$1,y1,s__40321__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click.call(null,end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(i__40338,in_pos,x1,c__26757__auto__,size__26758__auto__,b__40339,s__40337__$2,temp__4657__auto____$1,y1,s__40321__$2,temp__4657__auto__,end))
,new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),((function (i__40338,in_pos,x1,c__26757__auto__,size__26758__auto__,b__40339,s__40337__$2,temp__4657__auto____$1,y1,s__40321__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.call(null,(2),e.button)){
return ms.core.r_click.call(null,end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__40338,in_pos,x1,c__26757__auto__,size__26758__auto__,b__40339,s__40337__$2,temp__4657__auto____$1,y1,s__40321__$2,temp__4657__auto__,end))
], null)], null):((cljs.core._EQ_.call(null,in_pos,ms.mines.flag_s))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),((function (i__40338,in_pos,x1,c__26757__auto__,size__26758__auto__,b__40339,s__40337__$2,temp__4657__auto____$1,y1,s__40321__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.call(null,(2),e.button)){
return ms.core.r_click.call(null,end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(i__40338,in_pos,x1,c__26757__auto__,size__26758__auto__,b__40339,s__40337__$2,temp__4657__auto____$1,y1,s__40321__$2,temp__4657__auto__,end))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"Black",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(0, 0, 0, 0.3)"], null)], null),in_pos], null):ms.core.decide_style.call(null,in_pos)
))));

var G__40342 = (i__40338 + (1));
i__40338 = G__40342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40339),ms$core$render_board_$_iter__40320_$_iter__40336.call(null,cljs.core.chunk_rest.call(null,s__40337__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40339),null);
}
} else {
var x1 = cljs.core.first.call(null,s__40337__$2);
var in_pos = ms.mines.get_pos.call(null,cljs.core.deref.call(null,ms.core.board),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,in_pos,null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cellE","td.cellE",623496785),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (in_pos,x1,s__40337__$2,temp__4657__auto____$1,y1,s__40321__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click.call(null,end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(in_pos,x1,s__40337__$2,temp__4657__auto____$1,y1,s__40321__$2,temp__4657__auto__,end))
,new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),((function (in_pos,x1,s__40337__$2,temp__4657__auto____$1,y1,s__40321__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.call(null,(2),e.button)){
return ms.core.r_click.call(null,end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(in_pos,x1,s__40337__$2,temp__4657__auto____$1,y1,s__40321__$2,temp__4657__auto__,end))
], null)], null):(((cljs.core._EQ_.call(null,in_pos,"0")) || (cljs.core._EQ_.call(null,in_pos," ")))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell0","td.cell0",-1559730114),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (in_pos,x1,s__40337__$2,temp__4657__auto____$1,y1,s__40321__$2,temp__4657__auto__,end){
return (function (){
return ms.core.on_click.call(null,end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
});})(in_pos,x1,s__40337__$2,temp__4657__auto____$1,y1,s__40321__$2,temp__4657__auto__,end))
,new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),((function (in_pos,x1,s__40337__$2,temp__4657__auto____$1,y1,s__40321__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.call(null,(2),e.button)){
return ms.core.r_click.call(null,end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(in_pos,x1,s__40337__$2,temp__4657__auto____$1,y1,s__40321__$2,temp__4657__auto__,end))
], null)], null):((cljs.core._EQ_.call(null,in_pos,ms.mines.flag_s))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.cell","td.cell",-1877794863),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onContextMenu","onContextMenu",1302877981),((function (in_pos,x1,s__40337__$2,temp__4657__auto____$1,y1,s__40321__$2,temp__4657__auto__,end){
return (function (e){
e.preventDefault();

if(cljs.core._EQ_.call(null,(2),e.button)){
return ms.core.r_click.call(null,end,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null));
} else {
return null;
}
});})(in_pos,x1,s__40337__$2,temp__4657__auto____$1,y1,s__40321__$2,temp__4657__auto__,end))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"Black",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(0, 0, 0, 0.3)"], null)], null),in_pos], null):ms.core.decide_style.call(null,in_pos)
))),ms$core$render_board_$_iter__40320_$_iter__40336.call(null,cljs.core.rest.call(null,s__40337__$2)));
}
} else {
return null;
}
break;
}
});})(y1,s__40321__$2,temp__4657__auto__,end))
,null,null));
});})(y1,s__40321__$2,temp__4657__auto__,end))
;
return iter__26759__auto__.call(null,cljs.core.range.call(null,x));
})()),ms$core$render_board_$_iter__40320.call(null,cljs.core.rest.call(null,s__40321__$2)));
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
return iter__26759__auto__.call(null,cljs.core.range.call(null,y));
})();
if(cljs.core.truth_(cljs.core.first.call(null,end))){
cljs.core.reset_BANG_.call(null,ms.core.end_a,end);
} else {
}

return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.stage","table.stage",-803350276),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),(510),new cljs.core.Keyword(null,"width","width",-384071477),(510),new cljs.core.Keyword(null,"table-layout","table-layout",-1260034150),"fixed"], null)], null)], null),cells);
});
ms.core.restart = (function ms$core$restart(){
cljs.core.reset_BANG_.call(null,ms.core.end_a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,null], null));

cljs.core.reset_BANG_.call(null,ms.core.seconds,(0));

cljs.core.reset_BANG_.call(null,ms.core.board,ms.mines.create_board.call(null,(16)));

return cljs.core.reset_BANG_.call(null,ms.core.model,ms.mines.create_model.call(null,(16),(40),ms.mines.mines_op));
});
ms.core.game = (function ms$core$game(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.timer], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.restart","button.restart",-779494177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ms.core.restart.call(null);
})], null),"Start Over"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.render_board,(16),(16)], null),(cljs.core.truth_(cljs.core.first.call(null,cljs.core.deref.call(null,ms.core.end_a)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.overlay","div.overlay",58496851),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.play","div.play",-334856682),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return ms.core.restart.call(null);
})], null),(cljs.core.truth_(cljs.core.second.call(null,cljs.core.deref.call(null,ms.core.end_a)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"You win"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"\u21BA",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),ms.core.seconds__GT_minutes.call(null,cljs.core.deref.call(null,ms.core.seconds))], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"You Lose"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"\u21BA"], null)], null))], null)], null):null)], null);
});
ms.core.run = (function ms$core$run(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ms.core.game], null),document.getElementById("app"));
});
ms.core.run.call(null);

//# sourceMappingURL=core.js.map?rel=1497141549557