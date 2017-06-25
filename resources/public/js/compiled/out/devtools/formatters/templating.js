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
var x40017_40018 = value;
x40017_40018.devtools$protocols$IGroup$ = true;


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
var x40022_40023 = value;
x40022_40023.devtools$protocols$ITemplate$ = true;


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
var x40027_40028 = value;
x40027_40028.devtools$protocols$ISurrogate$ = true;


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
var len__27054__auto___40036 = arguments.length;
var i__27055__auto___40037 = (0);
while(true){
if((i__27055__auto___40037 < len__27054__auto___40036)){
args__27061__auto__.push((arguments[i__27055__auto___40037]));

var G__40038 = (i__27055__auto___40037 + (1));
i__27055__auto___40037 = G__40038;
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
var seq__40032_40039 = cljs.core.seq.call(null,items);
var chunk__40033_40040 = null;
var count__40034_40041 = (0);
var i__40035_40042 = (0);
while(true){
if((i__40035_40042 < count__40034_40041)){
var item_40043 = cljs.core._nth.call(null,chunk__40033_40040,i__40035_40042);
if(cljs.core.some_QMARK_.call(null,item_40043)){
if(cljs.core.coll_QMARK_.call(null,item_40043)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40043)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40043));
}
} else {
}

var G__40044 = seq__40032_40039;
var G__40045 = chunk__40033_40040;
var G__40046 = count__40034_40041;
var G__40047 = (i__40035_40042 + (1));
seq__40032_40039 = G__40044;
chunk__40033_40040 = G__40045;
count__40034_40041 = G__40046;
i__40035_40042 = G__40047;
continue;
} else {
var temp__4657__auto___40048 = cljs.core.seq.call(null,seq__40032_40039);
if(temp__4657__auto___40048){
var seq__40032_40049__$1 = temp__4657__auto___40048;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40032_40049__$1)){
var c__26790__auto___40050 = cljs.core.chunk_first.call(null,seq__40032_40049__$1);
var G__40051 = cljs.core.chunk_rest.call(null,seq__40032_40049__$1);
var G__40052 = c__26790__auto___40050;
var G__40053 = cljs.core.count.call(null,c__26790__auto___40050);
var G__40054 = (0);
seq__40032_40039 = G__40051;
chunk__40033_40040 = G__40052;
count__40034_40041 = G__40053;
i__40035_40042 = G__40054;
continue;
} else {
var item_40055 = cljs.core.first.call(null,seq__40032_40049__$1);
if(cljs.core.some_QMARK_.call(null,item_40055)){
if(cljs.core.coll_QMARK_.call(null,item_40055)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_40055)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_40055));
}
} else {
}

var G__40056 = cljs.core.next.call(null,seq__40032_40049__$1);
var G__40057 = null;
var G__40058 = (0);
var G__40059 = (0);
seq__40032_40039 = G__40056;
chunk__40033_40040 = G__40057;
count__40034_40041 = G__40058;
i__40035_40042 = G__40059;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq40031){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40031));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40067 = arguments.length;
var i__27055__auto___40068 = (0);
while(true){
if((i__27055__auto___40068 < len__27054__auto___40067)){
args__27061__auto__.push((arguments[i__27055__auto___40068]));

var G__40069 = (i__27055__auto___40068 + (1));
i__27055__auto___40068 = G__40069;
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
var seq__40063_40070 = cljs.core.seq.call(null,children);
var chunk__40064_40071 = null;
var count__40065_40072 = (0);
var i__40066_40073 = (0);
while(true){
if((i__40066_40073 < count__40065_40072)){
var child_40074 = cljs.core._nth.call(null,chunk__40064_40071,i__40066_40073);
if(cljs.core.some_QMARK_.call(null,child_40074)){
if(cljs.core.coll_QMARK_.call(null,child_40074)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40074))));
} else {
var temp__4655__auto___40075 = devtools.formatters.helpers.pref.call(null,child_40074);
if(cljs.core.truth_(temp__4655__auto___40075)){
var child_value_40076 = temp__4655__auto___40075;
template.push(child_value_40076);
} else {
}
}
} else {
}

var G__40077 = seq__40063_40070;
var G__40078 = chunk__40064_40071;
var G__40079 = count__40065_40072;
var G__40080 = (i__40066_40073 + (1));
seq__40063_40070 = G__40077;
chunk__40064_40071 = G__40078;
count__40065_40072 = G__40079;
i__40066_40073 = G__40080;
continue;
} else {
var temp__4657__auto___40081 = cljs.core.seq.call(null,seq__40063_40070);
if(temp__4657__auto___40081){
var seq__40063_40082__$1 = temp__4657__auto___40081;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40063_40082__$1)){
var c__26790__auto___40083 = cljs.core.chunk_first.call(null,seq__40063_40082__$1);
var G__40084 = cljs.core.chunk_rest.call(null,seq__40063_40082__$1);
var G__40085 = c__26790__auto___40083;
var G__40086 = cljs.core.count.call(null,c__26790__auto___40083);
var G__40087 = (0);
seq__40063_40070 = G__40084;
chunk__40064_40071 = G__40085;
count__40065_40072 = G__40086;
i__40066_40073 = G__40087;
continue;
} else {
var child_40088 = cljs.core.first.call(null,seq__40063_40082__$1);
if(cljs.core.some_QMARK_.call(null,child_40088)){
if(cljs.core.coll_QMARK_.call(null,child_40088)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_40088))));
} else {
var temp__4655__auto___40089 = devtools.formatters.helpers.pref.call(null,child_40088);
if(cljs.core.truth_(temp__4655__auto___40089)){
var child_value_40090 = temp__4655__auto___40089;
template.push(child_value_40090);
} else {
}
}
} else {
}

var G__40091 = cljs.core.next.call(null,seq__40063_40082__$1);
var G__40092 = null;
var G__40093 = (0);
var G__40094 = (0);
seq__40063_40070 = G__40091;
chunk__40064_40071 = G__40092;
count__40065_40072 = G__40093;
i__40066_40073 = G__40094;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq40060){
var G__40061 = cljs.core.first.call(null,seq40060);
var seq40060__$1 = cljs.core.next.call(null,seq40060);
var G__40062 = cljs.core.first.call(null,seq40060__$1);
var seq40060__$2 = cljs.core.next.call(null,seq40060__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__40061,G__40062,seq40060__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40097 = arguments.length;
var i__27055__auto___40098 = (0);
while(true){
if((i__27055__auto___40098 < len__27054__auto___40097)){
args__27061__auto__.push((arguments[i__27055__auto___40098]));

var G__40099 = (i__27055__auto___40098 + (1));
i__27055__auto___40098 = G__40099;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq40095){
var G__40096 = cljs.core.first.call(null,seq40095);
var seq40095__$1 = cljs.core.next.call(null,seq40095);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40096,seq40095__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40102 = arguments.length;
var i__27055__auto___40103 = (0);
while(true){
if((i__27055__auto___40103 < len__27054__auto___40102)){
args__27061__auto__.push((arguments[i__27055__auto___40103]));

var G__40104 = (i__27055__auto___40103 + (1));
i__27055__auto___40103 = G__40104;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq40100){
var G__40101 = cljs.core.first.call(null,seq40100);
var seq40100__$1 = cljs.core.next.call(null,seq40100);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40101,seq40100__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args40105 = [];
var len__27054__auto___40110 = arguments.length;
var i__27055__auto___40111 = (0);
while(true){
if((i__27055__auto___40111 < len__27054__auto___40110)){
args40105.push((arguments[i__27055__auto___40111]));

var G__40112 = (i__27055__auto___40111 + (1));
i__27055__auto___40111 = G__40112;
continue;
} else {
}
break;
}

var G__40107 = args40105.length;
switch (G__40107) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40105.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj40109 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__25979__auto__ = start_index;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return (0);
}
})()};
return obj40109;
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
var len__27054__auto___40120 = arguments.length;
var i__27055__auto___40121 = (0);
while(true){
if((i__27055__auto___40121 < len__27054__auto___40120)){
args__27061__auto__.push((arguments[i__27055__auto___40121]));

var G__40122 = (i__27055__auto___40121 + (1));
i__27055__auto___40121 = G__40122;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__40116){
var vec__40117 = p__40116;
var state_override_fn = cljs.core.nth.call(null,vec__40117,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq40114){
var G__40115 = cljs.core.first.call(null,seq40114);
var seq40114__$1 = cljs.core.next.call(null,seq40114);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__40115,seq40114__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__26965__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40126_40129 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_40127_40130 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40126_40129,_STAR_print_fn_STAR_40127_40130,sb__26965__auto__){
return (function (x__26966__auto__){
return sb__26965__auto__.append(x__26966__auto__);
});})(_STAR_print_newline_STAR_40126_40129,_STAR_print_fn_STAR_40127_40130,sb__26965__auto__))
;

try{var _STAR_print_level_STAR_40128_40131 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_40128_40131;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40127_40130;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40126_40129;
}
return [cljs.core.str(sb__26965__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_40133 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_40133;
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
var G__40135 = name;
switch (G__40135) {
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
var vec__40140 = tag;
var html_tag = cljs.core.nth.call(null,vec__40140,(0),null);
var style = cljs.core.nth.call(null,vec__40140,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_40144 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40144;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_40147 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_40148 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_40148;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_40147;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__40149 = initial_value;
var G__40150 = value.call(null);
initial_value = G__40149;
value = G__40150;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__40151 = initial_value;
var G__40152 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__40151;
value = G__40152;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__40153 = initial_value;
var G__40154 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__40153;
value = G__40154;
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

//# sourceMappingURL=templating.js.map?rel=1498365177529