// Compiled by ClojureScript 1.9.229 {}
goog.provide('ms.mines');
goog.require('cljs.core');
ms.mines.alphabet = new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"], null);
ms.mines.mines_op = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null)], null);
ms.mines.knights_op = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-2)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(-1)], null)], null);
ms.mines.mine_s = "\uD83D\uDCA3";
ms.mines.flag_s = "\u2691";
/**
 * Creates a Vector of n Vectors with n times nil.
 *   Ex: (create-board 2) => [[nil nil] [nil nil]].
 */
ms.mines.create_board = (function ms$mines$create_board(n){
return cljs.core.vec.call(null,cljs.core.take.call(null,n,cljs.core.repeat.call(null,cljs.core.vec.call(null,cljs.core.take.call(null,n,cljs.core.repeat.call(null,null))))));
});
/**
 * Gets a board type (vectors of vectors), and it insertes the element e
 *   on the [x y] coordinates.
 *   Ex: (put-in-board [[0] [1]] [0 1] 'X') => [[0] ['X']].
 */
ms.mines.put_in_board = (function ms$mines$put_in_board(board,p__33012,e){
var vec__33016 = p__33012;
var x = cljs.core.nth.call(null,vec__33016,(0),null);
var y = cljs.core.nth.call(null,vec__33016,(1),null);
return cljs.core.assoc_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),e);
});
/**
 * Returns the [x y] coordinates of a Vector of Vectors.
 *   Ex: (get-pos [[0 1] [2 3]] [1  0]) => 1.
 */
ms.mines.get_pos = (function ms$mines$get_pos(board,p__33019){
var vec__33023 = p__33019;
var x = cljs.core.nth.call(null,vec__33023,(0),null);
var y = cljs.core.nth.call(null,vec__33023,(1),null);
return cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
});
/**
 * Puts a certain amount of mines in a random way into the board
 *   Ex: (put-mines [[nil nil] [nil nil]] 2) => [['X' 'X'] [nil nil]]
 *    (put-mines [[nil nil] [nil nil]] 2) => [['X' nil] ['X' nil]].
 */
ms.mines.put_mines = (function ms$mines$put_mines(board,mines){
var size = cljs.core.range.call(null,cljs.core.count.call(null,board));
var b = board;
var m = mines;
while(true){
if((m === (0))){
return b;
} else {
var pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_nth.call(null,size),cljs.core.rand_nth.call(null,size)], null);
if(cljs.core.not.call(null,ms.mines.get_pos.call(null,b,pos))){
var G__33026 = ms.mines.put_in_board.call(null,b,pos,ms.mines.mine_s);
var G__33027 = (m - (1));
b = G__33026;
m = G__33027;
continue;
} else {
var G__33028 = b;
var G__33029 = m;
b = G__33028;
m = G__33029;
continue;
}
}
break;
}
});
/**
 * Indicates the numbers of mines adjacent in a [x y] position of a board
 */
ms.mines.numbers_of = (function ms$mines$numbers_of(board,p__33030,op){
var vec__33050 = p__33030;
var x = cljs.core.nth.call(null,vec__33050,(0),null);
var y = cljs.core.nth.call(null,vec__33050,(1),null);
return cljs.core.count.call(null,(function (){var iter__26759__auto__ = ((function (vec__33050,x,y){
return (function ms$mines$numbers_of_$_iter__33053(s__33054){
return (new cljs.core.LazySeq(null,((function (vec__33050,x,y){
return (function (){
var s__33054__$1 = s__33054;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33054__$1);
if(temp__4657__auto__){
var s__33054__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33054__$2)){
var c__26757__auto__ = cljs.core.chunk_first.call(null,s__33054__$2);
var size__26758__auto__ = cljs.core.count.call(null,c__26757__auto__);
var b__33056 = cljs.core.chunk_buffer.call(null,size__26758__auto__);
if((function (){var i__33055 = (0);
while(true){
if((i__33055 < size__26758__auto__)){
var vec__33063 = cljs.core._nth.call(null,c__26757__auto__,i__33055);
var v = cljs.core.nth.call(null,vec__33063,(0),null);
var h = cljs.core.nth.call(null,vec__33063,(1),null);
var p = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + h),(v + y)], null);
if(cljs.core._EQ_.call(null,ms.mines.mine_s,ms.mines.get_pos.call(null,board,p))){
cljs.core.chunk_append.call(null,b__33056,p);

var G__33069 = (i__33055 + (1));
i__33055 = G__33069;
continue;
} else {
var G__33070 = (i__33055 + (1));
i__33055 = G__33070;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33056),ms$mines$numbers_of_$_iter__33053.call(null,cljs.core.chunk_rest.call(null,s__33054__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33056),null);
}
} else {
var vec__33066 = cljs.core.first.call(null,s__33054__$2);
var v = cljs.core.nth.call(null,vec__33066,(0),null);
var h = cljs.core.nth.call(null,vec__33066,(1),null);
var p = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + h),(v + y)], null);
if(cljs.core._EQ_.call(null,ms.mines.mine_s,ms.mines.get_pos.call(null,board,p))){
return cljs.core.cons.call(null,p,ms$mines$numbers_of_$_iter__33053.call(null,cljs.core.rest.call(null,s__33054__$2)));
} else {
var G__33071 = cljs.core.rest.call(null,s__33054__$2);
s__33054__$1 = G__33071;
continue;
}
}
} else {
return null;
}
break;
}
});})(vec__33050,x,y))
,null,null));
});})(vec__33050,x,y))
;
return iter__26759__auto__.call(null,op);
})());
});
/**
 * Count the number of mines that are around every not mine position
 *   of the board
 */
ms.mines.put_numbers = (function ms$mines$put_numbers(board,op){
var size = cljs.core.count.call(null,board);
return cljs.core.mapv.call(null,((function (size){
return (function (y){
return cljs.core.mapv.call(null,((function (size){
return (function (x){
if(cljs.core.not.call(null,ms.mines.get_pos.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return [cljs.core.str(ms.mines.numbers_of.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),op))].join('');
} else {
return ms.mines.get_pos.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
}
});})(size))
,cljs.core.range.call(null,size));
});})(size))
,cljs.core.range.call(null,size));
});
/**
 * This Function create a board where it is all revealed, the mines
 *   and all the squares have their propper number. It is used as a model
 *   to de actually board where the game happens
 */
ms.mines.create_model = (function ms$mines$create_model(n,m,op){
return ms.mines.put_numbers.call(null,ms.mines.put_mines.call(null,ms.mines.create_board.call(null,n),m),op);
});
/**
 * Reveal the current coordinate, and the 8 adjacent squares
 */
ms.mines.reveal_if_0 = (function ms$mines$reveal_if_0(b,m,p__33072,op){
var vec__33092 = p__33072;
var x = cljs.core.nth.call(null,vec__33092,(0),null);
var y = cljs.core.nth.call(null,vec__33092,(1),null);
var n = (function (){var iter__26759__auto__ = ((function (vec__33092,x,y){
return (function ms$mines$reveal_if_0_$_iter__33095(s__33096){
return (new cljs.core.LazySeq(null,((function (vec__33092,x,y){
return (function (){
var s__33096__$1 = s__33096;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33096__$1);
if(temp__4657__auto__){
var s__33096__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33096__$2)){
var c__26757__auto__ = cljs.core.chunk_first.call(null,s__33096__$2);
var size__26758__auto__ = cljs.core.count.call(null,c__26757__auto__);
var b__33098 = cljs.core.chunk_buffer.call(null,size__26758__auto__);
if((function (){var i__33097 = (0);
while(true){
if((i__33097 < size__26758__auto__)){
var vec__33105 = cljs.core._nth.call(null,c__26757__auto__,i__33097);
var v = cljs.core.nth.call(null,vec__33105,(0),null);
var h = cljs.core.nth.call(null,vec__33105,(1),null);
var p = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + h),(v + y)], null);
if(cljs.core.truth_((function (){var and__25967__auto__ = ms.mines.get_pos.call(null,m,p);
if(cljs.core.truth_(and__25967__auto__)){
return cljs.core.not.call(null,ms.mines.get_pos.call(null,b,p));
} else {
return and__25967__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__33098,p);

var G__33111 = (i__33097 + (1));
i__33097 = G__33111;
continue;
} else {
var G__33112 = (i__33097 + (1));
i__33097 = G__33112;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33098),ms$mines$reveal_if_0_$_iter__33095.call(null,cljs.core.chunk_rest.call(null,s__33096__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33098),null);
}
} else {
var vec__33108 = cljs.core.first.call(null,s__33096__$2);
var v = cljs.core.nth.call(null,vec__33108,(0),null);
var h = cljs.core.nth.call(null,vec__33108,(1),null);
var p = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + h),(v + y)], null);
if(cljs.core.truth_((function (){var and__25967__auto__ = ms.mines.get_pos.call(null,m,p);
if(cljs.core.truth_(and__25967__auto__)){
return cljs.core.not.call(null,ms.mines.get_pos.call(null,b,p));
} else {
return and__25967__auto__;
}
})())){
return cljs.core.cons.call(null,p,ms$mines$reveal_if_0_$_iter__33095.call(null,cljs.core.rest.call(null,s__33096__$2)));
} else {
var G__33113 = cljs.core.rest.call(null,s__33096__$2);
s__33096__$1 = G__33113;
continue;
}
}
} else {
return null;
}
break;
}
});})(vec__33092,x,y))
,null,null));
});})(vec__33092,x,y))
;
return iter__26759__auto__.call(null,op);
})();
var b__$1 = ms.mines.put_in_board.call(null,b,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)," ");
var n__$1 = n;
while(true){
if(cljs.core.empty_QMARK_.call(null,n__$1)){
return b__$1;
} else {
var G__33114 = ms.mines.reveal.call(null,b__$1,m,cljs.core.first.call(null,n__$1),op);
var G__33115 = cljs.core.rest.call(null,n__$1);
b__$1 = G__33114;
n__$1 = G__33115;
continue;
}
break;
}
});
ms.mines.reveal_all_x = (function ms$mines$reveal_all_x(board,model){
return cljs.core.mapv.call(null,(function (l,y){
return cljs.core.mapv.call(null,(function (e,x){
if(cljs.core._EQ_.call(null,ms.mines.get_pos.call(null,model,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),ms.mines.mine_s)){
return ms.mines.mine_s;
} else {
return e;
}
}),l,cljs.core.range.call(null,cljs.core.count.call(null,l)));
}),board,cljs.core.range.call(null,cljs.core.count.call(null,board)));
});
/**
 * Gets what it's on the 'pos' coordinate of the model, it paste it
 *   on the board.
 */
ms.mines.reveal = (function ms$mines$reveal(board,model,pos,op){
var in_pos = ms.mines.get_pos.call(null,model,pos);
if(cljs.core._EQ_.call(null,ms.mines.mine_s,in_pos)){
return ms.mines.reveal_all_x.call(null,board,model);
} else {
if(cljs.core._EQ_.call(null,"0",in_pos)){
return ms.mines.reveal_if_0.call(null,board,model,pos,op);
} else {
return ms.mines.put_in_board.call(null,board,pos,in_pos);

}
}
});
/**
 * Checks if the player has lost or win. If not, returns false
 */
ms.mines.end_QMARK_ = (function ms$mines$end_QMARK_(board,mines){
var b = cljs.core.flatten.call(null,board);
if(!(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,((function (b){
return (function (p1__33116_SHARP_){
return cljs.core._EQ_.call(null,p1__33116_SHARP_,ms.mines.mine_s);
});})(b))
,b)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null);
} else {
if(cljs.core._EQ_.call(null,mines,cljs.core.count.call(null,cljs.core.filter.call(null,((function (b){
return (function (p1__33117_SHARP_){
return (cljs.core._EQ_.call(null,null,p1__33117_SHARP_)) || (cljs.core._EQ_.call(null,p1__33117_SHARP_,ms.mines.flag_s));
});})(b))
,b)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null);

}
}
});

//# sourceMappingURL=mines.js.map?rel=1497206911962