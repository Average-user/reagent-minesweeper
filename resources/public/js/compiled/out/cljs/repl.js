// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35757){
var map__35782 = p__35757;
var map__35782__$1 = ((((!((map__35782 == null)))?((((map__35782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35782):map__35782);
var m = map__35782__$1;
var n = cljs.core.get.call(null,map__35782__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35782__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35784_35806 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35785_35807 = null;
var count__35786_35808 = (0);
var i__35787_35809 = (0);
while(true){
if((i__35787_35809 < count__35786_35808)){
var f_35810 = cljs.core._nth.call(null,chunk__35785_35807,i__35787_35809);
cljs.core.println.call(null,"  ",f_35810);

var G__35811 = seq__35784_35806;
var G__35812 = chunk__35785_35807;
var G__35813 = count__35786_35808;
var G__35814 = (i__35787_35809 + (1));
seq__35784_35806 = G__35811;
chunk__35785_35807 = G__35812;
count__35786_35808 = G__35813;
i__35787_35809 = G__35814;
continue;
} else {
var temp__4657__auto___35815 = cljs.core.seq.call(null,seq__35784_35806);
if(temp__4657__auto___35815){
var seq__35784_35816__$1 = temp__4657__auto___35815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35784_35816__$1)){
var c__26790__auto___35817 = cljs.core.chunk_first.call(null,seq__35784_35816__$1);
var G__35818 = cljs.core.chunk_rest.call(null,seq__35784_35816__$1);
var G__35819 = c__26790__auto___35817;
var G__35820 = cljs.core.count.call(null,c__26790__auto___35817);
var G__35821 = (0);
seq__35784_35806 = G__35818;
chunk__35785_35807 = G__35819;
count__35786_35808 = G__35820;
i__35787_35809 = G__35821;
continue;
} else {
var f_35822 = cljs.core.first.call(null,seq__35784_35816__$1);
cljs.core.println.call(null,"  ",f_35822);

var G__35823 = cljs.core.next.call(null,seq__35784_35816__$1);
var G__35824 = null;
var G__35825 = (0);
var G__35826 = (0);
seq__35784_35806 = G__35823;
chunk__35785_35807 = G__35824;
count__35786_35808 = G__35825;
i__35787_35809 = G__35826;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35827 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25979__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35827);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35827)))?cljs.core.second.call(null,arglists_35827):arglists_35827));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35788_35828 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35789_35829 = null;
var count__35790_35830 = (0);
var i__35791_35831 = (0);
while(true){
if((i__35791_35831 < count__35790_35830)){
var vec__35792_35832 = cljs.core._nth.call(null,chunk__35789_35829,i__35791_35831);
var name_35833 = cljs.core.nth.call(null,vec__35792_35832,(0),null);
var map__35795_35834 = cljs.core.nth.call(null,vec__35792_35832,(1),null);
var map__35795_35835__$1 = ((((!((map__35795_35834 == null)))?((((map__35795_35834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35795_35834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35795_35834):map__35795_35834);
var doc_35836 = cljs.core.get.call(null,map__35795_35835__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35837 = cljs.core.get.call(null,map__35795_35835__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35833);

cljs.core.println.call(null," ",arglists_35837);

if(cljs.core.truth_(doc_35836)){
cljs.core.println.call(null," ",doc_35836);
} else {
}

var G__35838 = seq__35788_35828;
var G__35839 = chunk__35789_35829;
var G__35840 = count__35790_35830;
var G__35841 = (i__35791_35831 + (1));
seq__35788_35828 = G__35838;
chunk__35789_35829 = G__35839;
count__35790_35830 = G__35840;
i__35791_35831 = G__35841;
continue;
} else {
var temp__4657__auto___35842 = cljs.core.seq.call(null,seq__35788_35828);
if(temp__4657__auto___35842){
var seq__35788_35843__$1 = temp__4657__auto___35842;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35788_35843__$1)){
var c__26790__auto___35844 = cljs.core.chunk_first.call(null,seq__35788_35843__$1);
var G__35845 = cljs.core.chunk_rest.call(null,seq__35788_35843__$1);
var G__35846 = c__26790__auto___35844;
var G__35847 = cljs.core.count.call(null,c__26790__auto___35844);
var G__35848 = (0);
seq__35788_35828 = G__35845;
chunk__35789_35829 = G__35846;
count__35790_35830 = G__35847;
i__35791_35831 = G__35848;
continue;
} else {
var vec__35797_35849 = cljs.core.first.call(null,seq__35788_35843__$1);
var name_35850 = cljs.core.nth.call(null,vec__35797_35849,(0),null);
var map__35800_35851 = cljs.core.nth.call(null,vec__35797_35849,(1),null);
var map__35800_35852__$1 = ((((!((map__35800_35851 == null)))?((((map__35800_35851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35800_35851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35800_35851):map__35800_35851);
var doc_35853 = cljs.core.get.call(null,map__35800_35852__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35854 = cljs.core.get.call(null,map__35800_35852__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35850);

cljs.core.println.call(null," ",arglists_35854);

if(cljs.core.truth_(doc_35853)){
cljs.core.println.call(null," ",doc_35853);
} else {
}

var G__35855 = cljs.core.next.call(null,seq__35788_35843__$1);
var G__35856 = null;
var G__35857 = (0);
var G__35858 = (0);
seq__35788_35828 = G__35855;
chunk__35789_35829 = G__35856;
count__35790_35830 = G__35857;
i__35791_35831 = G__35858;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__35802 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35803 = null;
var count__35804 = (0);
var i__35805 = (0);
while(true){
if((i__35805 < count__35804)){
var role = cljs.core._nth.call(null,chunk__35803,i__35805);
var temp__4657__auto___35859__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35859__$1)){
var spec_35860 = temp__4657__auto___35859__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35860));
} else {
}

var G__35861 = seq__35802;
var G__35862 = chunk__35803;
var G__35863 = count__35804;
var G__35864 = (i__35805 + (1));
seq__35802 = G__35861;
chunk__35803 = G__35862;
count__35804 = G__35863;
i__35805 = G__35864;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35802);
if(temp__4657__auto____$1){
var seq__35802__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35802__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__35802__$1);
var G__35865 = cljs.core.chunk_rest.call(null,seq__35802__$1);
var G__35866 = c__26790__auto__;
var G__35867 = cljs.core.count.call(null,c__26790__auto__);
var G__35868 = (0);
seq__35802 = G__35865;
chunk__35803 = G__35866;
count__35804 = G__35867;
i__35805 = G__35868;
continue;
} else {
var role = cljs.core.first.call(null,seq__35802__$1);
var temp__4657__auto___35869__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35869__$2)){
var spec_35870 = temp__4657__auto___35869__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35870));
} else {
}

var G__35871 = cljs.core.next.call(null,seq__35802__$1);
var G__35872 = null;
var G__35873 = (0);
var G__35874 = (0);
seq__35802 = G__35871;
chunk__35803 = G__35872;
count__35804 = G__35873;
i__35805 = G__35874;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1498365162774