// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35759){
var map__35784 = p__35759;
var map__35784__$1 = ((((!((map__35784 == null)))?((((map__35784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35784):map__35784);
var m = map__35784__$1;
var n = cljs.core.get.call(null,map__35784__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35784__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35786_35808 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35787_35809 = null;
var count__35788_35810 = (0);
var i__35789_35811 = (0);
while(true){
if((i__35789_35811 < count__35788_35810)){
var f_35812 = cljs.core._nth.call(null,chunk__35787_35809,i__35789_35811);
cljs.core.println.call(null,"  ",f_35812);

var G__35813 = seq__35786_35808;
var G__35814 = chunk__35787_35809;
var G__35815 = count__35788_35810;
var G__35816 = (i__35789_35811 + (1));
seq__35786_35808 = G__35813;
chunk__35787_35809 = G__35814;
count__35788_35810 = G__35815;
i__35789_35811 = G__35816;
continue;
} else {
var temp__4657__auto___35817 = cljs.core.seq.call(null,seq__35786_35808);
if(temp__4657__auto___35817){
var seq__35786_35818__$1 = temp__4657__auto___35817;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35786_35818__$1)){
var c__26790__auto___35819 = cljs.core.chunk_first.call(null,seq__35786_35818__$1);
var G__35820 = cljs.core.chunk_rest.call(null,seq__35786_35818__$1);
var G__35821 = c__26790__auto___35819;
var G__35822 = cljs.core.count.call(null,c__26790__auto___35819);
var G__35823 = (0);
seq__35786_35808 = G__35820;
chunk__35787_35809 = G__35821;
count__35788_35810 = G__35822;
i__35789_35811 = G__35823;
continue;
} else {
var f_35824 = cljs.core.first.call(null,seq__35786_35818__$1);
cljs.core.println.call(null,"  ",f_35824);

var G__35825 = cljs.core.next.call(null,seq__35786_35818__$1);
var G__35826 = null;
var G__35827 = (0);
var G__35828 = (0);
seq__35786_35808 = G__35825;
chunk__35787_35809 = G__35826;
count__35788_35810 = G__35827;
i__35789_35811 = G__35828;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35829 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25979__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35829);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35829)))?cljs.core.second.call(null,arglists_35829):arglists_35829));
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
var seq__35790_35830 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35791_35831 = null;
var count__35792_35832 = (0);
var i__35793_35833 = (0);
while(true){
if((i__35793_35833 < count__35792_35832)){
var vec__35794_35834 = cljs.core._nth.call(null,chunk__35791_35831,i__35793_35833);
var name_35835 = cljs.core.nth.call(null,vec__35794_35834,(0),null);
var map__35797_35836 = cljs.core.nth.call(null,vec__35794_35834,(1),null);
var map__35797_35837__$1 = ((((!((map__35797_35836 == null)))?((((map__35797_35836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35797_35836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35797_35836):map__35797_35836);
var doc_35838 = cljs.core.get.call(null,map__35797_35837__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35839 = cljs.core.get.call(null,map__35797_35837__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35835);

cljs.core.println.call(null," ",arglists_35839);

if(cljs.core.truth_(doc_35838)){
cljs.core.println.call(null," ",doc_35838);
} else {
}

var G__35840 = seq__35790_35830;
var G__35841 = chunk__35791_35831;
var G__35842 = count__35792_35832;
var G__35843 = (i__35793_35833 + (1));
seq__35790_35830 = G__35840;
chunk__35791_35831 = G__35841;
count__35792_35832 = G__35842;
i__35793_35833 = G__35843;
continue;
} else {
var temp__4657__auto___35844 = cljs.core.seq.call(null,seq__35790_35830);
if(temp__4657__auto___35844){
var seq__35790_35845__$1 = temp__4657__auto___35844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35790_35845__$1)){
var c__26790__auto___35846 = cljs.core.chunk_first.call(null,seq__35790_35845__$1);
var G__35847 = cljs.core.chunk_rest.call(null,seq__35790_35845__$1);
var G__35848 = c__26790__auto___35846;
var G__35849 = cljs.core.count.call(null,c__26790__auto___35846);
var G__35850 = (0);
seq__35790_35830 = G__35847;
chunk__35791_35831 = G__35848;
count__35792_35832 = G__35849;
i__35793_35833 = G__35850;
continue;
} else {
var vec__35799_35851 = cljs.core.first.call(null,seq__35790_35845__$1);
var name_35852 = cljs.core.nth.call(null,vec__35799_35851,(0),null);
var map__35802_35853 = cljs.core.nth.call(null,vec__35799_35851,(1),null);
var map__35802_35854__$1 = ((((!((map__35802_35853 == null)))?((((map__35802_35853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35802_35853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35802_35853):map__35802_35853);
var doc_35855 = cljs.core.get.call(null,map__35802_35854__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35856 = cljs.core.get.call(null,map__35802_35854__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35852);

cljs.core.println.call(null," ",arglists_35856);

if(cljs.core.truth_(doc_35855)){
cljs.core.println.call(null," ",doc_35855);
} else {
}

var G__35857 = cljs.core.next.call(null,seq__35790_35845__$1);
var G__35858 = null;
var G__35859 = (0);
var G__35860 = (0);
seq__35790_35830 = G__35857;
chunk__35791_35831 = G__35858;
count__35792_35832 = G__35859;
i__35793_35833 = G__35860;
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

var seq__35804 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35805 = null;
var count__35806 = (0);
var i__35807 = (0);
while(true){
if((i__35807 < count__35806)){
var role = cljs.core._nth.call(null,chunk__35805,i__35807);
var temp__4657__auto___35861__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35861__$1)){
var spec_35862 = temp__4657__auto___35861__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35862));
} else {
}

var G__35863 = seq__35804;
var G__35864 = chunk__35805;
var G__35865 = count__35806;
var G__35866 = (i__35807 + (1));
seq__35804 = G__35863;
chunk__35805 = G__35864;
count__35806 = G__35865;
i__35807 = G__35866;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35804);
if(temp__4657__auto____$1){
var seq__35804__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35804__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__35804__$1);
var G__35867 = cljs.core.chunk_rest.call(null,seq__35804__$1);
var G__35868 = c__26790__auto__;
var G__35869 = cljs.core.count.call(null,c__26790__auto__);
var G__35870 = (0);
seq__35804 = G__35867;
chunk__35805 = G__35868;
count__35806 = G__35869;
i__35807 = G__35870;
continue;
} else {
var role = cljs.core.first.call(null,seq__35804__$1);
var temp__4657__auto___35871__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35871__$2)){
var spec_35872 = temp__4657__auto___35871__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35872));
} else {
}

var G__35873 = cljs.core.next.call(null,seq__35804__$1);
var G__35874 = null;
var G__35875 = (0);
var G__35876 = (0);
seq__35804 = G__35873;
chunk__35805 = G__35874;
count__35806 = G__35875;
i__35807 = G__35876;
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

//# sourceMappingURL=repl.js.map?rel=1497204732638