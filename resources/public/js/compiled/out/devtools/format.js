// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__26642__auto__ = (((value == null))?null:value);
var m__26643__auto__ = (devtools.format._header[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,value);
} else {
var m__26643__auto____$1 = (devtools.format._header["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__26642__auto__ = (((value == null))?null:value);
var m__26643__auto__ = (devtools.format._has_body[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,value);
} else {
var m__26643__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__26642__auto__ = (((value == null))?null:value);
var m__26643__auto__ = (devtools.format._body[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,value);
} else {
var m__26643__auto____$1 = (devtools.format._body["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37363__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37363__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37363__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37363__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37362__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37362__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37363__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37363__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37363__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37363__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37362__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37362__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37363__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37363__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37363__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37363__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37362__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37362__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37363__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37363__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37363__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37363__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37362__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37362__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37363__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37363__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37363__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37363__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37362__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37362__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37363__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37363__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37363__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37363__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37362__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37362__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37363__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37363__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37363__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37363__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37362__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37362__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37384 = arguments.length;
var i__27055__auto___37385 = (0);
while(true){
if((i__27055__auto___37385 < len__27054__auto___37384)){
args__27061__auto__.push((arguments[i__27055__auto___37385]));

var G__37386 = (i__27055__auto___37385 + (1));
i__27055__auto___37385 = G__37386;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq37383){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37383));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37388 = arguments.length;
var i__27055__auto___37389 = (0);
while(true){
if((i__27055__auto___37389 < len__27054__auto___37388)){
args__27061__auto__.push((arguments[i__27055__auto___37389]));

var G__37390 = (i__27055__auto___37389 + (1));
i__27055__auto___37389 = G__37390;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq37387){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37387));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37392 = arguments.length;
var i__27055__auto___37393 = (0);
while(true){
if((i__27055__auto___37393 < len__27054__auto___37392)){
args__27061__auto__.push((arguments[i__27055__auto___37393]));

var G__37394 = (i__27055__auto___37393 + (1));
i__27055__auto___37393 = G__37394;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq37391){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37391));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37396 = arguments.length;
var i__27055__auto___37397 = (0);
while(true){
if((i__27055__auto___37397 < len__27054__auto___37396)){
args__27061__auto__.push((arguments[i__27055__auto___37397]));

var G__37398 = (i__27055__auto___37397 + (1));
i__27055__auto___37397 = G__37398;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq37395){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37395));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37400 = arguments.length;
var i__27055__auto___37401 = (0);
while(true){
if((i__27055__auto___37401 < len__27054__auto___37400)){
args__27061__auto__.push((arguments[i__27055__auto___37401]));

var G__37402 = (i__27055__auto___37401 + (1));
i__27055__auto___37401 = G__37402;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq37399){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37399));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37404 = arguments.length;
var i__27055__auto___37405 = (0);
while(true){
if((i__27055__auto___37405 < len__27054__auto___37404)){
args__27061__auto__.push((arguments[i__27055__auto___37405]));

var G__37406 = (i__27055__auto___37405 + (1));
i__27055__auto___37405 = G__37406;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq37403){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37403));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37408 = arguments.length;
var i__27055__auto___37409 = (0);
while(true){
if((i__27055__auto___37409 < len__27054__auto___37408)){
args__27061__auto__.push((arguments[i__27055__auto___37409]));

var G__37410 = (i__27055__auto___37409 + (1));
i__27055__auto___37409 = G__37410;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq37407){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37407));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37418 = arguments.length;
var i__27055__auto___37419 = (0);
while(true){
if((i__27055__auto___37419 < len__27054__auto___37418)){
args__27061__auto__.push((arguments[i__27055__auto___37419]));

var G__37420 = (i__27055__auto___37419 + (1));
i__27055__auto___37419 = G__37420;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37414){
var vec__37415 = p__37414;
var state_override = cljs.core.nth.call(null,vec__37415,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__37415,state_override){
return (function (p1__37411_SHARP_){
return cljs.core.merge.call(null,p1__37411_SHARP_,state_override);
});})(vec__37415,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq37412){
var G__37413 = cljs.core.first.call(null,seq37412);
var seq37412__$1 = cljs.core.next.call(null,seq37412);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__37413,seq37412__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37422 = arguments.length;
var i__27055__auto___37423 = (0);
while(true){
if((i__27055__auto___37423 < len__27054__auto___37422)){
args__27061__auto__.push((arguments[i__27055__auto___37423]));

var G__37424 = (i__27055__auto___37423 + (1));
i__27055__auto___37423 = G__37424;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq37421){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37421));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37427 = arguments.length;
var i__27055__auto___37428 = (0);
while(true){
if((i__27055__auto___37428 < len__27054__auto___37427)){
args__27061__auto__.push((arguments[i__27055__auto___37428]));

var G__37429 = (i__27055__auto___37428 + (1));
i__27055__auto___37428 = G__37429;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq37425){
var G__37426 = cljs.core.first.call(null,seq37425);
var seq37425__$1 = cljs.core.next.call(null,seq37425);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__37426,seq37425__$1);
});


//# sourceMappingURL=format.js.map?rel=1498365166772