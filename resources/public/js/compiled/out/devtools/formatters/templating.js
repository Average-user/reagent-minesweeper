// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x39769_39770 = value;
x39769_39770.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x39774_39775 = value;
x39774_39775.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x39779_39780 = value;
x39779_39780.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__25967__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__25967__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__25967__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__27061__auto__ = [];
var len__27054__auto___39788 = arguments.length;
var i__27055__auto___39789 = (0);
while(true){
if((i__27055__auto___39789 < len__27054__auto___39788)){
args__27061__auto__.push((arguments[i__27055__auto___39789]));

var G__39790 = (i__27055__auto___39789 + (1));
i__27055__auto___39789 = G__39790;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__39784_39791 = cljs.core.seq.call(null,items);
var chunk__39785_39792 = null;
var count__39786_39793 = (0);
var i__39787_39794 = (0);
while(true){
if((i__39787_39794 < count__39786_39793)){
var item_39795 = cljs.core._nth.call(null,chunk__39785_39792,i__39787_39794);
if(cljs.core.some_QMARK_.call(null,item_39795)){
if(cljs.core.coll_QMARK_.call(null,item_39795)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_39795)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_39795));
}
} else {
}

var G__39796 = seq__39784_39791;
var G__39797 = chunk__39785_39792;
var G__39798 = count__39786_39793;
var G__39799 = (i__39787_39794 + (1));
seq__39784_39791 = G__39796;
chunk__39785_39792 = G__39797;
count__39786_39793 = G__39798;
i__39787_39794 = G__39799;
continue;
} else {
var temp__4657__auto___39800 = cljs.core.seq.call(null,seq__39784_39791);
if(temp__4657__auto___39800){
var seq__39784_39801__$1 = temp__4657__auto___39800;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39784_39801__$1)){
var c__26790__auto___39802 = cljs.core.chunk_first.call(null,seq__39784_39801__$1);
var G__39803 = cljs.core.chunk_rest.call(null,seq__39784_39801__$1);
var G__39804 = c__26790__auto___39802;
var G__39805 = cljs.core.count.call(null,c__26790__auto___39802);
var G__39806 = (0);
seq__39784_39791 = G__39803;
chunk__39785_39792 = G__39804;
count__39786_39793 = G__39805;
i__39787_39794 = G__39806;
continue;
} else {
var item_39807 = cljs.core.first.call(null,seq__39784_39801__$1);
if(cljs.core.some_QMARK_.call(null,item_39807)){
if(cljs.core.coll_QMARK_.call(null,item_39807)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_39807)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_39807));
}
} else {
}

var G__39808 = cljs.core.next.call(null,seq__39784_39801__$1);
var G__39809 = null;
var G__39810 = (0);
var G__39811 = (0);
seq__39784_39791 = G__39808;
chunk__39785_39792 = G__39809;
count__39786_39793 = G__39810;
i__39787_39794 = G__39811;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq39783){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39783));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___39819 = arguments.length;
var i__27055__auto___39820 = (0);
while(true){
if((i__27055__auto___39820 < len__27054__auto___39819)){
args__27061__auto__.push((arguments[i__27055__auto___39820]));

var G__39821 = (i__27055__auto___39820 + (1));
i__27055__auto___39820 = G__39821;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((2) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27062__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__39815_39822 = cljs.core.seq.call(null,children);
var chunk__39816_39823 = null;
var count__39817_39824 = (0);
var i__39818_39825 = (0);
while(true){
if((i__39818_39825 < count__39817_39824)){
var child_39826 = cljs.core._nth.call(null,chunk__39816_39823,i__39818_39825);
if(cljs.core.some_QMARK_.call(null,child_39826)){
if(cljs.core.coll_QMARK_.call(null,child_39826)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_39826))));
} else {
var temp__4655__auto___39827 = devtools.formatters.helpers.pref.call(null,child_39826);
if(cljs.core.truth_(temp__4655__auto___39827)){
var child_value_39828 = temp__4655__auto___39827;
template.push(child_value_39828);
} else {
}
}
} else {
}

var G__39829 = seq__39815_39822;
var G__39830 = chunk__39816_39823;
var G__39831 = count__39817_39824;
var G__39832 = (i__39818_39825 + (1));
seq__39815_39822 = G__39829;
chunk__39816_39823 = G__39830;
count__39817_39824 = G__39831;
i__39818_39825 = G__39832;
continue;
} else {
var temp__4657__auto___39833 = cljs.core.seq.call(null,seq__39815_39822);
if(temp__4657__auto___39833){
var seq__39815_39834__$1 = temp__4657__auto___39833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39815_39834__$1)){
var c__26790__auto___39835 = cljs.core.chunk_first.call(null,seq__39815_39834__$1);
var G__39836 = cljs.core.chunk_rest.call(null,seq__39815_39834__$1);
var G__39837 = c__26790__auto___39835;
var G__39838 = cljs.core.count.call(null,c__26790__auto___39835);
var G__39839 = (0);
seq__39815_39822 = G__39836;
chunk__39816_39823 = G__39837;
count__39817_39824 = G__39838;
i__39818_39825 = G__39839;
continue;
} else {
var child_39840 = cljs.core.first.call(null,seq__39815_39834__$1);
if(cljs.core.some_QMARK_.call(null,child_39840)){
if(cljs.core.coll_QMARK_.call(null,child_39840)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_39840))));
} else {
var temp__4655__auto___39841 = devtools.formatters.helpers.pref.call(null,child_39840);
if(cljs.core.truth_(temp__4655__auto___39841)){
var child_value_39842 = temp__4655__auto___39841;
template.push(child_value_39842);
} else {
}
}
} else {
}

var G__39843 = cljs.core.next.call(null,seq__39815_39834__$1);
var G__39844 = null;
var G__39845 = (0);
var G__39846 = (0);
seq__39815_39822 = G__39843;
chunk__39816_39823 = G__39844;
count__39817_39824 = G__39845;
i__39818_39825 = G__39846;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq39812){
var G__39813 = cljs.core.first.call(null,seq39812);
var seq39812__$1 = cljs.core.next.call(null,seq39812);
var G__39814 = cljs.core.first.call(null,seq39812__$1);
var seq39812__$2 = cljs.core.next.call(null,seq39812__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__39813,G__39814,seq39812__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___39849 = arguments.length;
var i__27055__auto___39850 = (0);
while(true){
if((i__27055__auto___39850 < len__27054__auto___39849)){
args__27061__auto__.push((arguments[i__27055__auto___39850]));

var G__39851 = (i__27055__auto___39850 + (1));
i__27055__auto___39850 = G__39851;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq39847){
var G__39848 = cljs.core.first.call(null,seq39847);
var seq39847__$1 = cljs.core.next.call(null,seq39847);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39848,seq39847__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___39854 = arguments.length;
var i__27055__auto___39855 = (0);
while(true){
if((i__27055__auto___39855 < len__27054__auto___39854)){
args__27061__auto__.push((arguments[i__27055__auto___39855]));

var G__39856 = (i__27055__auto___39855 + (1));
i__27055__auto___39855 = G__39856;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq39852){
var G__39853 = cljs.core.first.call(null,seq39852);
var seq39852__$1 = cljs.core.next.call(null,seq39852);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39853,seq39852__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args39857 = [];
var len__27054__auto___39862 = arguments.length;
var i__27055__auto___39863 = (0);
while(true){
if((i__27055__auto___39863 < len__27054__auto___39862)){
args39857.push((arguments[i__27055__auto___39863]));

var G__39864 = (i__27055__auto___39863 + (1));
i__27055__auto___39863 = G__39864;
continue;
} else {
}
break;
}

var G__39859 = args39857.length;
switch (G__39859) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39857.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj39861 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__25979__auto__ = start_index;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return (0);
}
})()};
return obj39861;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__27061__auto__ = [];
var len__27054__auto___39872 = arguments.length;
var i__27055__auto___39873 = (0);
while(true){
if((i__27055__auto___39873 < len__27054__auto___39872)){
args__27061__auto__.push((arguments[i__27055__auto___39873]));

var G__39874 = (i__27055__auto___39873 + (1));
i__27055__auto___39873 = G__39874;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__39868){
var vec__39869 = p__39868;
var state_override_fn = cljs.core.nth.call(null,vec__39869,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq39866){
var G__39867 = cljs.core.first.call(null,seq39866);
var seq39866__$1 = cljs.core.next.call(null,seq39866);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__39867,seq39866__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__26965__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_39878_39881 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_39879_39882 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_39878_39881,_STAR_print_fn_STAR_39879_39882,sb__26965__auto__){
return (function (x__26966__auto__){
return sb__26965__auto__.append(x__26966__auto__);
});})(_STAR_print_newline_STAR_39878_39881,_STAR_print_fn_STAR_39879_39882,sb__26965__auto__))
;

try{var _STAR_print_level_STAR_39880_39883 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_39880_39883;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39879_39882;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39878_39881;
}
return [cljs.core.str(sb__26965__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_39885 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_39885;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__39887 = name;
switch (G__39887) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__39892 = tag;
var html_tag = cljs.core.nth.call(null,vec__39892,(0),null);
var style = cljs.core.nth.call(null,vec__39892,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_39896 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_39896;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_39899 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_39900 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_39900;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_39899;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__39901 = initial_value;
var G__39902 = value.call(null);
initial_value = G__39901;
value = G__39902;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__39903 = initial_value;
var G__39904 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__39903;
value = G__39904;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__39905 = initial_value;
var G__39906 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__39905;
value = G__39906;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1497141453563