// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.util');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('clojure.data');
goog.require('devtools.version');
goog.require('goog.userAgent');
goog.require('cljs.pprint');
goog.require('devtools.defaults');
goog.require('devtools.context');
devtools.util.lib_info_style = "color:black;font-weight:bold;";
devtools.util.reset_style = "color:black";
devtools.util.advanced_build_explanation_url = "https://github.com/binaryage/cljs-devtools/blob/master/docs/faq.md#why-custom-formatters-do-not-work-for-advanced-builds";
devtools.util._STAR_custom_formatters_active_STAR_ = false;
devtools.util._STAR_console_open_STAR_ = false;
devtools.util._STAR_custom_formatters_warning_reported_STAR_ = false;
devtools.util.make_version_info = (function devtools$util$make_version_info(){
return [cljs.core.str("0.9.2")].join('');
});
devtools.util.make_lib_info = (function devtools$util$make_lib_info(){
return [cljs.core.str("CLJS DevTools "),cljs.core.str(devtools.util.make_version_info.call(null))].join('');
});
devtools.util.get_lib_info = (function devtools$util$get_lib_info(){
return devtools.util.make_lib_info.call(null);
});
devtools.util.get_node_info = (function devtools$util$get_node_info(root){
try{var process = goog.object.get(root,"process");
var version = goog.object.get(process,"version");
var platform = goog.object.get(process,"platform");
if(cljs.core.truth_((function (){var and__25967__auto__ = version;
if(cljs.core.truth_(and__25967__auto__)){
return platform;
} else {
return and__25967__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),version,new cljs.core.Keyword(null,"platform","platform",-1086422114),platform], null);
} else {
return null;
}
}catch (e39688){var _ = e39688;
return null;
}});
devtools.util.get_node_description = (function devtools$util$get_node_description(node_info){
return [cljs.core.str((function (){var or__25979__auto__ = new cljs.core.Keyword(null,"platform","platform",-1086422114).cljs$core$IFn$_invoke$arity$1(node_info);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return "?";
}
})()),cljs.core.str("/"),cljs.core.str((function (){var or__25979__auto__ = new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(node_info);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return "?";
}
})())].join('');
});
devtools.util.in_node_context_QMARK_ = (function devtools$util$in_node_context_QMARK_(){
return cljs.core.some_QMARK_.call(null,devtools.util.get_node_info.call(null,devtools.context.get_root.call(null)));
});
devtools.util.get_js_context_description = (function devtools$util$get_js_context_description(){
var temp__4655__auto__ = devtools.util.get_node_info.call(null,devtools.context.get_root.call(null));
if(cljs.core.truth_(temp__4655__auto__)){
var node_info = temp__4655__auto__;
return [cljs.core.str("node/"),cljs.core.str(devtools.util.get_node_description.call(null,node_info))].join('');
} else {
var user_agent = goog.userAgent.getUserAgentString();
if(cljs.core.empty_QMARK_.call(null,user_agent)){
return "<unknown context>";
} else {
return user_agent;
}
}
});
devtools.util.unknown_feature_msg = (function devtools$util$unknown_feature_msg(feature,known_features,lib_info){
return [cljs.core.str("No such feature "),cljs.core.str(feature),cljs.core.str(" is currently available in "),cljs.core.str(lib_info),cljs.core.str(". "),cljs.core.str("The list of supported features is "),cljs.core.str(cljs.core.pr_str.call(null,known_features)),cljs.core.str(".")].join('');
});
devtools.util.feature_not_available_msg = (function devtools$util$feature_not_available_msg(feature){
return [cljs.core.str("Feature "),cljs.core.str(feature),cljs.core.str(" cannot be installed. "),cljs.core.str("Unsupported Javascript context: "),cljs.core.str(devtools.util.get_js_context_description.call(null)),cljs.core.str(".")].join('');
});
devtools.util.custom_formatters_not_active_msg = (function devtools$util$custom_formatters_not_active_msg(){
return [cljs.core.str("CLJS DevTools: some custom formatters were not rendered.\n"),cljs.core.str("https://github.com/binaryage/cljs-devtools/blob/master/docs/faq.md#why-some-custom-formatters-were-not-rendered")].join('');
});
devtools.util.formatter_key = "devtoolsFormatters";
devtools.util.get_formatters_safe = (function devtools$util$get_formatters_safe(){
var formatters = (devtools.context.get_root.call(null)[devtools.util.formatter_key]);
if(cljs.core.array_QMARK_.call(null,formatters)){
return formatters;
} else {
return [];
}
});
devtools.util.set_formatters_safe_BANG_ = (function devtools$util$set_formatters_safe_BANG_(new_formatters){
if(((new_formatters == null)) || (cljs.core.array_QMARK_.call(null,new_formatters))){
} else {
throw (new Error("Assert failed: (or (nil? new-formatters) (array? new-formatters))"));
}

return (devtools.context.get_root.call(null)[devtools.util.formatter_key] = ((cljs.core.empty_QMARK_.call(null,new_formatters))?null:new_formatters));
});
devtools.util.print_config_overrides_if_requested_BANG_ = (function devtools$util$print_config_overrides_if_requested_BANG_(msg){
if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"print-config-overrides","print-config-overrides",-274716965)))){
var diff = cljs.core.second.call(null,clojure.data.diff.call(null,devtools.defaults.prefs,devtools.prefs.get_prefs.call(null)));
if(!(cljs.core.empty_QMARK_.call(null,diff))){
return console.info(msg,(function (){var sb__26965__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_39691_39693 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_39692_39694 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_39691_39693,_STAR_print_fn_STAR_39692_39694,sb__26965__auto__,diff){
return (function (x__26966__auto__){
return sb__26965__auto__.append(x__26966__auto__);
});})(_STAR_print_newline_STAR_39691_39693,_STAR_print_fn_STAR_39692_39694,sb__26965__auto__,diff))
;

try{cljs.pprint.pprint.call(null,diff);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39692_39694;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39691_39693;
}
return [cljs.core.str(sb__26965__auto__)].join('');
})());
} else {
return null;
}
} else {
return null;
}
});

/**
* @constructor
*/
devtools.util.CustomFormattersDetector = (function (){
})

devtools.util.CustomFormattersDetector.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

devtools.util.CustomFormattersDetector.cljs$lang$type = true;

devtools.util.CustomFormattersDetector.cljs$lang$ctorStr = "devtools.util/CustomFormattersDetector";

devtools.util.CustomFormattersDetector.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"devtools.util/CustomFormattersDetector");
});

devtools.util.__GT_CustomFormattersDetector = (function devtools$util$__GT_CustomFormattersDetector(){
return (new devtools.util.CustomFormattersDetector());
});

devtools.util.make_detector = (function devtools$util$make_detector(){
var detector = (new devtools.util.CustomFormattersDetector());
(detector["header"] = ((function (detector){
return (function (_object,_config){
devtools.util._STAR_custom_formatters_active_STAR_ = true;

return null;
});})(detector))
);

(detector["hasBody"] = cljs.core.constantly.call(null,false));

(detector["body"] = cljs.core.constantly.call(null,null));

return detector;
});
devtools.util.install_detector_BANG_ = (function devtools$util$install_detector_BANG_(detector){
var formatters = devtools.util.get_formatters_safe.call(null);
formatters.push(detector);

return devtools.util.set_formatters_safe_BANG_.call(null,formatters);
});
devtools.util.uninstall_detector_BANG_ = (function devtools$util$uninstall_detector_BANG_(detector){
var current_formatters = (devtools.context.get_root.call(null)[devtools.util.formatter_key]);
if(cljs.core.array_QMARK_.call(null,current_formatters)){
var new_formatters = current_formatters.filter(((function (current_formatters){
return (function (p1__39695_SHARP_){
return !(cljs.core._EQ_.call(null,detector,p1__39695_SHARP_));
});})(current_formatters))
);
return devtools.util.set_formatters_safe_BANG_.call(null,new_formatters);
} else {
return null;
}
});
devtools.util.check_custom_formatters_active_BANG_ = (function devtools$util$check_custom_formatters_active_BANG_(){
if(cljs.core.truth_((function (){var and__25967__auto__ = devtools.util._STAR_console_open_STAR_;
if(cljs.core.truth_(and__25967__auto__)){
return cljs.core.not.call(null,devtools.util._STAR_custom_formatters_active_STAR_);
} else {
return and__25967__auto__;
}
})())){
if(cljs.core.truth_(devtools.util._STAR_custom_formatters_warning_reported_STAR_)){
return null;
} else {
devtools.util._STAR_custom_formatters_warning_reported_STAR_ = true;

return console.warn(devtools.util.custom_formatters_not_active_msg.call(null));
}
} else {
return null;
}
});
devtools.util.uninstall_detector_and_check_custom_formatters_active_BANG_ = (function devtools$util$uninstall_detector_and_check_custom_formatters_active_BANG_(detector){
devtools.util.uninstall_detector_BANG_.call(null,detector);

return devtools.util.check_custom_formatters_active_BANG_.call(null);
});
devtools.util.make_detection_printer = (function devtools$util$make_detection_printer(){
var f = (function (){
return null;
});
var G__39697_39698 = f;
var target__37369__auto___39699 = G__39697_39698;
if(cljs.core.truth_(target__37369__auto___39699)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("unable to locate object path "),cljs.core.str(null),cljs.core.str(" in "),cljs.core.str(G__39697_39698)].join('')),cljs.core.str("\n"),cljs.core.str("target__37369__auto__")].join('')));
}

goog.object.set(target__37369__auto___39699,cljs.core.last.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toString"], null)),((function (G__39697_39698,target__37369__auto___39699,f){
return (function (){
devtools.util._STAR_console_open_STAR_ = true;

setTimeout(devtools.util.check_custom_formatters_active_BANG_,(0));

return "";
});})(G__39697_39698,target__37369__auto___39699,f))
);


return f;
});
devtools.util.wrap_with_custom_formatter_detection_BANG_ = (function devtools$util$wrap_with_custom_formatter_detection_BANG_(f){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-detect-custom-formatters","dont-detect-custom-formatters",-29005804)))){
var detector = devtools.util.make_detector.call(null);
devtools.util.install_detector_BANG_.call(null,detector);

f.call(null,"%c%s","color:transparent",devtools.util.make_detection_printer.call(null));

return setTimeout(cljs.core.partial.call(null,devtools.util.uninstall_detector_and_check_custom_formatters_active_BANG_,detector),(0));
} else {
return f.call(null);
}
});
devtools.util.feature_for_display = (function devtools$util$feature_for_display(installed_features,feature){
var color = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([feature], true),installed_features))?"color:#0000ff":"color:#ccc");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%c%s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,[cljs.core.str(feature)].join('')], null)], null);
});
devtools.util.feature_list_display = (function devtools$util$feature_list_display(installed_features,feature_groups){
var labels = cljs.core.map.call(null,cljs.core.partial.call(null,devtools.util.feature_for_display,installed_features),new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(feature_groups));
var _STAR_ = ((function (labels){
return (function (accum,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.first.call(null,accum)),cljs.core.str(" "),cljs.core.str(cljs.core.first.call(null,val))].join(''),cljs.core.concat.call(null,cljs.core.second.call(null,accum),cljs.core.second.call(null,val))], null);
});})(labels))
;
return cljs.core.reduce.call(null,_STAR_,cljs.core.first.call(null,labels),cljs.core.rest.call(null,labels));
});
devtools.util.display_banner_BANG_ = (function devtools$util$display_banner_BANG_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___39707 = arguments.length;
var i__27055__auto___39708 = (0);
while(true){
if((i__27055__auto___39708 < len__27054__auto___39707)){
args__27061__auto__.push((arguments[i__27055__auto___39708]));

var G__39709 = (i__27055__auto___39708 + (1));
i__27055__auto___39708 = G__39709;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((3) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((3)),(0),null)):null);
return devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27062__auto__);
});

devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (installed_features,feature_groups,fmt,params){
var vec__39704 = devtools.util.feature_list_display.call(null,installed_features,feature_groups);
var fmt_str = cljs.core.nth.call(null,vec__39704,(0),null);
var fmt_params = cljs.core.nth.call(null,vec__39704,(1),null);
return devtools.util.wrap_with_custom_formatter_detection_BANG_.call(null,((function (vec__39704,fmt_str,fmt_params){
return (function() { 
var G__39710__delegate = function (add_fmt,add_args){
var items = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(fmt),cljs.core.str(" "),cljs.core.str(fmt_str),cljs.core.str(add_fmt)].join('')], null),params,fmt_params,add_args);
return console.info.apply(console,cljs.core.into_array.call(null,items));
};
var G__39710 = function (add_fmt,var_args){
var add_args = null;
if (arguments.length > 1) {
var G__39711__i = 0, G__39711__a = new Array(arguments.length -  1);
while (G__39711__i < G__39711__a.length) {G__39711__a[G__39711__i] = arguments[G__39711__i + 1]; ++G__39711__i;}
  add_args = new cljs.core.IndexedSeq(G__39711__a,0);
} 
return G__39710__delegate.call(this,add_fmt,add_args);};
G__39710.cljs$lang$maxFixedArity = 1;
G__39710.cljs$lang$applyTo = (function (arglist__39712){
var add_fmt = cljs.core.first(arglist__39712);
var add_args = cljs.core.rest(arglist__39712);
return G__39710__delegate(add_fmt,add_args);
});
G__39710.cljs$core$IFn$_invoke$arity$variadic = G__39710__delegate;
return G__39710;
})()
;})(vec__39704,fmt_str,fmt_params))
);
});

devtools.util.display_banner_BANG_.cljs$lang$maxFixedArity = (3);

devtools.util.display_banner_BANG_.cljs$lang$applyTo = (function (seq39700){
var G__39701 = cljs.core.first.call(null,seq39700);
var seq39700__$1 = cljs.core.next.call(null,seq39700);
var G__39702 = cljs.core.first.call(null,seq39700__$1);
var seq39700__$2 = cljs.core.next.call(null,seq39700__$1);
var G__39703 = cljs.core.first.call(null,seq39700__$2);
var seq39700__$3 = cljs.core.next.call(null,seq39700__$2);
return devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39701,G__39702,G__39703,seq39700__$3);
});

devtools.util.display_banner_if_needed_BANG_ = (function devtools$util$display_banner_if_needed_BANG_(features_to_install,feature_groups){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-display-banner","dont-display-banner",-1175550370)))){
var banner = [cljs.core.str("Installing %c%s%c and enabling features")].join('');
return devtools.util.display_banner_BANG_.call(null,features_to_install,feature_groups,banner,devtools.util.lib_info_style,devtools.util.get_lib_info.call(null),devtools.util.reset_style);
} else {
return devtools.util._STAR_custom_formatters_active_STAR_ = true;
}
});
devtools.util.report_unknown_features_BANG_ = (function devtools$util$report_unknown_features_BANG_(features,known_features){
var lib_info = devtools.util.get_lib_info.call(null);
var seq__39717 = cljs.core.seq.call(null,features);
var chunk__39718 = null;
var count__39719 = (0);
var i__39720 = (0);
while(true){
if((i__39720 < count__39719)){
var feature = cljs.core._nth.call(null,chunk__39718,i__39720);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([feature], true),known_features))){
console.warn(devtools.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}

var G__39721 = seq__39717;
var G__39722 = chunk__39718;
var G__39723 = count__39719;
var G__39724 = (i__39720 + (1));
seq__39717 = G__39721;
chunk__39718 = G__39722;
count__39719 = G__39723;
i__39720 = G__39724;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39717);
if(temp__4657__auto__){
var seq__39717__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39717__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__39717__$1);
var G__39725 = cljs.core.chunk_rest.call(null,seq__39717__$1);
var G__39726 = c__26790__auto__;
var G__39727 = cljs.core.count.call(null,c__26790__auto__);
var G__39728 = (0);
seq__39717 = G__39725;
chunk__39718 = G__39726;
count__39719 = G__39727;
i__39720 = G__39728;
continue;
} else {
var feature = cljs.core.first.call(null,seq__39717__$1);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([feature], true),known_features))){
console.warn(devtools.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}

var G__39729 = cljs.core.next.call(null,seq__39717__$1);
var G__39730 = null;
var G__39731 = (0);
var G__39732 = (0);
seq__39717 = G__39729;
chunk__39718 = G__39730;
count__39719 = G__39731;
i__39720 = G__39732;
continue;
}
} else {
return null;
}
}
break;
}
});
devtools.util.is_known_feature_QMARK_ = (function devtools$util$is_known_feature_QMARK_(known_features,feature){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([feature], true),known_features));
});
devtools.util.convert_legacy_feature = (function devtools$util$convert_legacy_feature(feature){
var G__39734 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__39734) {
case "custom-formatters":
return new cljs.core.Keyword(null,"formatters","formatters",-1875637118);

break;
case "sanity-hints":
return new cljs.core.Keyword(null,"hints","hints",-991113151);

break;
default:
return feature;

}
});
devtools.util.convert_legacy_features = (function devtools$util$convert_legacy_features(features){
return cljs.core.map.call(null,devtools.util.convert_legacy_feature,features);
});
devtools.util.sanititze_features_BANG_ = (function devtools$util$sanititze_features_BANG_(features,feature_groups){
var known_features = new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(feature_groups);
var features__$1 = devtools.util.convert_legacy_features.call(null,features);
devtools.util.report_unknown_features_BANG_.call(null,features__$1,known_features);

return cljs.core.filter.call(null,cljs.core.partial.call(null,devtools.util.is_known_feature_QMARK_,known_features),features__$1);
});
devtools.util.resolve_features_BANG_ = (function devtools$util$resolve_features_BANG_(features_desc,feature_groups){
var features = (cljs.core.truth_((function (){var and__25967__auto__ = (features_desc instanceof cljs.core.Keyword);
if(and__25967__auto__){
return features_desc.call(null,feature_groups);
} else {
return and__25967__auto__;
}
})())?features_desc.call(null,feature_groups):(((features_desc == null))?new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(feature_groups):((cljs.core.seqable_QMARK_.call(null,features_desc))?features_desc:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features_desc], null)
)));
return devtools.util.sanititze_features_BANG_.call(null,features,feature_groups);
});
devtools.util.under_advanced_build_QMARK_ = (function devtools$util$under_advanced_build_QMARK_(){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"disable-advanced-mode-check","disable-advanced-mode-check",-968346539)))){
return ((function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__37362__auto__ = temp__4657__auto__;
return goog.object.get(o__37362__auto__,"version");
} else {
return null;
}
})() == null);
} else {
return null;
}
});
devtools.util.display_advanced_build_warning_if_needed_BANG_ = (function devtools$util$display_advanced_build_warning_if_needed_BANG_(){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-display-advanced-build-warning","dont-display-advanced-build-warning",-91321563)))){
var banner = [cljs.core.str("%cNOT%c installing %c%s%c under advanced build. See "),cljs.core.str(devtools.util.advanced_build_explanation_url),cljs.core.str(".")].join('');
return console.warn(banner,"font-weight:bold",devtools.util.reset_style,devtools.util.lib_info_style,devtools.util.get_lib_info.call(null),devtools.util.reset_style);
} else {
return null;
}
});
devtools.util.install_feature_BANG_ = (function devtools$util$install_feature_BANG_(feature,features_to_install,available_fn,install_fn){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([feature], true),features_to_install))){
if(cljs.core.truth_((function (){var or__25979__auto__ = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"bypass-availability-checks","bypass-availability-checks",1934691680));
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return available_fn.call(null,feature);
}
})())){
return install_fn.call(null);
} else {
return console.warn(devtools.util.feature_not_available_msg.call(null,feature));
}
} else {
return null;
}
});

//# sourceMappingURL=util.js.map?rel=1498365175343