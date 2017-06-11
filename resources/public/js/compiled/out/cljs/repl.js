// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35649){
var map__35674 = p__35649;
var map__35674__$1 = ((((!((map__35674 == null)))?((((map__35674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35674):map__35674);
var m = map__35674__$1;
var n = cljs.core.get.call(null,map__35674__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35674__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35676_35698 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35677_35699 = null;
var count__35678_35700 = (0);
var i__35679_35701 = (0);
while(true){
if((i__35679_35701 < count__35678_35700)){
var f_35702 = cljs.core._nth.call(null,chunk__35677_35699,i__35679_35701);
cljs.core.println.call(null,"  ",f_35702);

var G__35703 = seq__35676_35698;
var G__35704 = chunk__35677_35699;
var G__35705 = count__35678_35700;
var G__35706 = (i__35679_35701 + (1));
seq__35676_35698 = G__35703;
chunk__35677_35699 = G__35704;
count__35678_35700 = G__35705;
i__35679_35701 = G__35706;
continue;
} else {
var temp__4657__auto___35707 = cljs.core.seq.call(null,seq__35676_35698);
if(temp__4657__auto___35707){
var seq__35676_35708__$1 = temp__4657__auto___35707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35676_35708__$1)){
var c__26790__auto___35709 = cljs.core.chunk_first.call(null,seq__35676_35708__$1);
var G__35710 = cljs.core.chunk_rest.call(null,seq__35676_35708__$1);
var G__35711 = c__26790__auto___35709;
var G__35712 = cljs.core.count.call(null,c__26790__auto___35709);
var G__35713 = (0);
seq__35676_35698 = G__35710;
chunk__35677_35699 = G__35711;
count__35678_35700 = G__35712;
i__35679_35701 = G__35713;
continue;
} else {
var f_35714 = cljs.core.first.call(null,seq__35676_35708__$1);
cljs.core.println.call(null,"  ",f_35714);

var G__35715 = cljs.core.next.call(null,seq__35676_35708__$1);
var G__35716 = null;
var G__35717 = (0);
var G__35718 = (0);
seq__35676_35698 = G__35715;
chunk__35677_35699 = G__35716;
count__35678_35700 = G__35717;
i__35679_35701 = G__35718;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35719 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25979__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35719);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35719)))?cljs.core.second.call(null,arglists_35719):arglists_35719));
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
var seq__35680_35720 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35681_35721 = null;
var count__35682_35722 = (0);
var i__35683_35723 = (0);
while(true){
if((i__35683_35723 < count__35682_35722)){
var vec__35684_35724 = cljs.core._nth.call(null,chunk__35681_35721,i__35683_35723);
var name_35725 = cljs.core.nth.call(null,vec__35684_35724,(0),null);
var map__35687_35726 = cljs.core.nth.call(null,vec__35684_35724,(1),null);
var map__35687_35727__$1 = ((((!((map__35687_35726 == null)))?((((map__35687_35726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35687_35726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35687_35726):map__35687_35726);
var doc_35728 = cljs.core.get.call(null,map__35687_35727__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35729 = cljs.core.get.call(null,map__35687_35727__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35725);

cljs.core.println.call(null," ",arglists_35729);

if(cljs.core.truth_(doc_35728)){
cljs.core.println.call(null," ",doc_35728);
} else {
}

var G__35730 = seq__35680_35720;
var G__35731 = chunk__35681_35721;
var G__35732 = count__35682_35722;
var G__35733 = (i__35683_35723 + (1));
seq__35680_35720 = G__35730;
chunk__35681_35721 = G__35731;
count__35682_35722 = G__35732;
i__35683_35723 = G__35733;
continue;
} else {
var temp__4657__auto___35734 = cljs.core.seq.call(null,seq__35680_35720);
if(temp__4657__auto___35734){
var seq__35680_35735__$1 = temp__4657__auto___35734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35680_35735__$1)){
var c__26790__auto___35736 = cljs.core.chunk_first.call(null,seq__35680_35735__$1);
var G__35737 = cljs.core.chunk_rest.call(null,seq__35680_35735__$1);
var G__35738 = c__26790__auto___35736;
var G__35739 = cljs.core.count.call(null,c__26790__auto___35736);
var G__35740 = (0);
seq__35680_35720 = G__35737;
chunk__35681_35721 = G__35738;
count__35682_35722 = G__35739;
i__35683_35723 = G__35740;
continue;
} else {
var vec__35689_35741 = cljs.core.first.call(null,seq__35680_35735__$1);
var name_35742 = cljs.core.nth.call(null,vec__35689_35741,(0),null);
var map__35692_35743 = cljs.core.nth.call(null,vec__35689_35741,(1),null);
var map__35692_35744__$1 = ((((!((map__35692_35743 == null)))?((((map__35692_35743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35692_35743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35692_35743):map__35692_35743);
var doc_35745 = cljs.core.get.call(null,map__35692_35744__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35746 = cljs.core.get.call(null,map__35692_35744__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35742);

cljs.core.println.call(null," ",arglists_35746);

if(cljs.core.truth_(doc_35745)){
cljs.core.println.call(null," ",doc_35745);
} else {
}

var G__35747 = cljs.core.next.call(null,seq__35680_35735__$1);
var G__35748 = null;
var G__35749 = (0);
var G__35750 = (0);
seq__35680_35720 = G__35747;
chunk__35681_35721 = G__35748;
count__35682_35722 = G__35749;
i__35683_35723 = G__35750;
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

var seq__35694 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35695 = null;
var count__35696 = (0);
var i__35697 = (0);
while(true){
if((i__35697 < count__35696)){
var role = cljs.core._nth.call(null,chunk__35695,i__35697);
var temp__4657__auto___35751__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35751__$1)){
var spec_35752 = temp__4657__auto___35751__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35752));
} else {
}

var G__35753 = seq__35694;
var G__35754 = chunk__35695;
var G__35755 = count__35696;
var G__35756 = (i__35697 + (1));
seq__35694 = G__35753;
chunk__35695 = G__35754;
count__35696 = G__35755;
i__35697 = G__35756;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35694);
if(temp__4657__auto____$1){
var seq__35694__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35694__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__35694__$1);
var G__35757 = cljs.core.chunk_rest.call(null,seq__35694__$1);
var G__35758 = c__26790__auto__;
var G__35759 = cljs.core.count.call(null,c__26790__auto__);
var G__35760 = (0);
seq__35694 = G__35757;
chunk__35695 = G__35758;
count__35696 = G__35759;
i__35697 = G__35760;
continue;
} else {
var role = cljs.core.first.call(null,seq__35694__$1);
var temp__4657__auto___35761__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35761__$2)){
var spec_35762 = temp__4657__auto___35761__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35762));
} else {
}

var G__35763 = cljs.core.next.call(null,seq__35694__$1);
var G__35764 = null;
var G__35765 = (0);
var G__35766 = (0);
seq__35694 = G__35763;
chunk__35695 = G__35764;
count__35696 = G__35765;
i__35697 = G__35766;
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

//# sourceMappingURL=repl.js.map?rel=1497141439983