// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('ms.mines');
goog.require('cljs.core');
ms.mines.alphabet = new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"], null);
ms.mines.mines_op = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null);
ms.mines.knights_op = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(-1)], null)], null);
ms.mines.mine_s = "\uD83D\uDCA3";
ms.mines.flag_s = "\u2690";
/**
 * Creates a Vector of n Vectors with n times nil.
 *   Ex: (create-board 2) => [[nil nil] [nil nil]].
 */
ms.mines.create_board = (function ms$mines$create_board(n){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null))))));
});
/**
 * Gets a board type (vectors of vectors), and it insertes the element e
 *   on the [x y] coordinates.
 *   Ex: (put-in-board [[0] [1]] [0 1] 'X') => [[0] ['X']].
 */
ms.mines.put_in_board = (function ms$mines$put_in_board(board,p__32543,e){
var vec__32547 = p__32543;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32547,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32547,(1),null);
return cljs.core.assoc_in(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),e);
});
/**
 * Returns the [x y] coordinates of a Vector of Vectors.
 *   Ex: (get-pos [[0 1] [2 3]] [1  0]) => 1.
 */
ms.mines.get_pos = (function ms$mines$get_pos(board,p__32550){
var vec__32554 = p__32550;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32554,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32554,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
});
/**
 * Puts a certain amount of mines in a random way into the board
 *   Ex: (put-mines [[nil nil] [nil nil]] 2) => [['X' 'X'] [nil nil]]
 *    (put-mines [[nil nil] [nil nil]] 2) => [['X' nil] ['X' nil]].
 */
ms.mines.put_mines = (function ms$mines$put_mines(board,mines){
var size = cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(board));
var b = board;
var m = mines;
while(true){
if((m === (0))){
return b;
} else {
var pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_nth(size),cljs.core.rand_nth(size)], null);
if(cljs.core.not(ms.mines.get_pos(b,pos))){
var G__32557 = ms.mines.put_in_board(b,pos,ms.mines.mine_s);
var G__32558 = (m - (1));
b = G__32557;
m = G__32558;
continue;
} else {
var G__32559 = b;
var G__32560 = m;
b = G__32559;
m = G__32560;
continue;
}
}
break;
}
});
/**
 * Indicates the numbers of mines adjacent in a [x y] position of a board
 */
ms.mines.numbers_of = (function ms$mines$numbers_of(board,p__32561,op){
var vec__32583 = p__32561;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32583,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32583,(1),null);
return cljs.core.count((function (){var iter__27020__auto__ = ((function (vec__32583,x,y){
return (function ms$mines$numbers_of_$_iter__32586(s__32587){
return (new cljs.core.LazySeq(null,((function (vec__32583,x,y){
return (function (){
var s__32587__$1 = s__32587;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__32587__$1);
if(temp__4657__auto__){
var s__32587__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32587__$2)){
var c__27018__auto__ = cljs.core.chunk_first(s__32587__$2);
var size__27019__auto__ = cljs.core.count(c__27018__auto__);
var b__32589 = cljs.core.chunk_buffer(size__27019__auto__);
if((function (){var i__32588 = (0);
while(true){
if((i__32588 < size__27019__auto__)){
var vec__32598 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__27018__auto__,i__32588);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32598,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32598,(1),null);
var p = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + h),(v + y)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ms.mines.mine_s,ms.mines.get_pos(board,p))){
cljs.core.chunk_append(b__32589,p);

var G__32604 = (i__32588 + (1));
i__32588 = G__32604;
continue;
} else {
var G__32605 = (i__32588 + (1));
i__32588 = G__32605;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32589),ms$mines$numbers_of_$_iter__32586(cljs.core.chunk_rest(s__32587__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32589),null);
}
} else {
var vec__32601 = cljs.core.first(s__32587__$2);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32601,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32601,(1),null);
var p = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + h),(v + y)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ms.mines.mine_s,ms.mines.get_pos(board,p))){
return cljs.core.cons(p,ms$mines$numbers_of_$_iter__32586(cljs.core.rest(s__32587__$2)));
} else {
var G__32606 = cljs.core.rest(s__32587__$2);
s__32587__$1 = G__32606;
continue;
}
}
} else {
return null;
}
break;
}
});})(vec__32583,x,y))
,null,null));
});})(vec__32583,x,y))
;
return iter__27020__auto__(op);
})());
});
/**
 * Count the number of mines that are around every not mine position
 *   of the board
 */
ms.mines.put_numbers = (function ms$mines$put_numbers(board,op){
var size = cljs.core.count(board);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (size){
return (function (y){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (size){
return (function (x){
if(cljs.core.not(ms.mines.get_pos(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return [cljs.core.str(ms.mines.numbers_of(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),op))].join('');
} else {
return ms.mines.get_pos(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}
});})(size))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(size));
});})(size))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(size));
});
/**
 * This Function create a board where it is all revealed, the mines
 *   and all the squares have their propper number. It is used as a model
 *   to de actually board where the game happens
 */
ms.mines.create_model = (function ms$mines$create_model(n,m,op){
return ms.mines.put_numbers(ms.mines.put_mines(ms.mines.create_board(n),m),op);
});
/**
 * Reveal the current coordinate, and the 8 adjacent squares
 */
ms.mines.reveal_if_0 = (function ms$mines$reveal_if_0(b,m,p__32607,op){
var vec__32633 = p__32607;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32633,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32633,(1),null);
var n = (function (){var iter__27020__auto__ = ((function (vec__32633,x,y){
return (function ms$mines$reveal_if_0_$_iter__32636(s__32637){
return (new cljs.core.LazySeq(null,((function (vec__32633,x,y){
return (function (){
var s__32637__$1 = s__32637;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__32637__$1);
if(temp__4657__auto__){
var s__32637__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__32637__$2)){
var c__27018__auto__ = cljs.core.chunk_first(s__32637__$2);
var size__27019__auto__ = cljs.core.count(c__27018__auto__);
var b__32639 = cljs.core.chunk_buffer(size__27019__auto__);
if((function (){var i__32638 = (0);
while(true){
if((i__32638 < size__27019__auto__)){
var vec__32648 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__27018__auto__,i__32638);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32648,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32648,(1),null);
var p = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + h),(v + y)], null);
if(cljs.core.truth_((function (){var and__26228__auto__ = ms.mines.get_pos(m,p);
if(cljs.core.truth_(and__26228__auto__)){
return cljs.core.not(ms.mines.get_pos(b,p));
} else {
return and__26228__auto__;
}
})())){
cljs.core.chunk_append(b__32639,p);

var G__32658 = (i__32638 + (1));
i__32638 = G__32658;
continue;
} else {
var G__32659 = (i__32638 + (1));
i__32638 = G__32659;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32639),ms$mines$reveal_if_0_$_iter__32636(cljs.core.chunk_rest(s__32637__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32639),null);
}
} else {
var vec__32651 = cljs.core.first(s__32637__$2);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32651,(0),null);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32651,(1),null);
var p = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + h),(v + y)], null);
if(cljs.core.truth_((function (){var and__26228__auto__ = ms.mines.get_pos(m,p);
if(cljs.core.truth_(and__26228__auto__)){
return cljs.core.not(ms.mines.get_pos(b,p));
} else {
return and__26228__auto__;
}
})())){
return cljs.core.cons(p,ms$mines$reveal_if_0_$_iter__32636(cljs.core.rest(s__32637__$2)));
} else {
var G__32660 = cljs.core.rest(s__32637__$2);
s__32637__$1 = G__32660;
continue;
}
}
} else {
return null;
}
break;
}
});})(vec__32633,x,y))
,null,null));
});})(vec__32633,x,y))
;
return iter__27020__auto__(op);
})();
var b__$1 = ms.mines.put_in_board(b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)," ");
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_(n__$1)){
return b__$1;
} else {
var G__32661 = (function (){var G__32654 = b__$1;
var G__32655 = m;
var G__32656 = cljs.core.first(n__$1);
var G__32657 = op;
return (ms.mines.reveal.cljs$core$IFn$_invoke$arity$4 ? ms.mines.reveal.cljs$core$IFn$_invoke$arity$4(G__32654,G__32655,G__32656,G__32657) : ms.mines.reveal.call(null,G__32654,G__32655,G__32656,G__32657));
})();
var G__32662 = cljs.core.rest(n__$1);
b__$1 = G__32661;
n__$1 = G__32662;
continue;
}
break;
}
});
/**
 * Reveal all the Mines on a board
 */
ms.mines.reveal_all_x = (function ms$mines$reveal_all_x(board,model,pos,op){
var size = cljs.core.count(board);
var xs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (size){
return (function (y){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (size){
return (function (x){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ms.mines.mine_s,ms.mines.get_pos(model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))) && (cljs.core.not(ms.mines.get_pos(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
} else {
return null;
}
});})(size))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(size));
});})(size))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(size));
var b = ms.mines.put_in_board(board,pos,ms.mines.mine_s);
var xs__$1 = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,xs)));
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return b;
} else {
var G__32671 = (function (){var G__32667 = b;
var G__32668 = model;
var G__32669 = cljs.core.first(xs__$1);
var G__32670 = op;
return (ms.mines.reveal.cljs$core$IFn$_invoke$arity$4 ? ms.mines.reveal.cljs$core$IFn$_invoke$arity$4(G__32667,G__32668,G__32669,G__32670) : ms.mines.reveal.call(null,G__32667,G__32668,G__32669,G__32670));
})();
var G__32672 = cljs.core.rest(xs__$1);
b = G__32671;
xs__$1 = G__32672;
continue;
}
break;
}
});
/**
 * Gets what it's on the 'pos' coordinate of the model, it paste it
 *   on the board.
 */
ms.mines.reveal = (function ms$mines$reveal(board,model,pos,op){
var in_pos = ms.mines.get_pos(model,pos);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ms.mines.mine_s,in_pos)){
return model;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("0",in_pos)){
return ms.mines.reveal_if_0(board,model,pos,op);
} else {
return ms.mines.put_in_board(board,pos,in_pos);

}
}
});
/**
 * Checks if the player has lost or win. If not, returns false
 */
ms.mines.end_QMARK_ = (function ms$mines$end_QMARK_(board,mines){
var b = cljs.core.flatten(board);
if(!(cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (b){
return (function (p1__32673_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__32673_SHARP_,ms.mines.mine_s);
});})(b))
,b)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mines,cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (b){
return (function (p1__32674_SHARP_){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,p1__32674_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__32674_SHARP_,ms.mines.flag_s));
});})(b))
,b)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null);

}
}
});
