// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36196 = [];
var len__27054__auto___36199 = arguments.length;
var i__27055__auto___36200 = (0);
while(true){
if((i__27055__auto___36200 < len__27054__auto___36199)){
args36196.push((arguments[i__27055__auto___36200]));

var G__36201 = (i__27055__auto___36200 + (1));
i__27055__auto___36200 = G__36201;
continue;
} else {
}
break;
}

var G__36198 = args36196.length;
switch (G__36198) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36196.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27061__auto__ = [];
var len__27054__auto___36204 = arguments.length;
var i__27055__auto___36205 = (0);
while(true){
if((i__27055__auto___36205 < len__27054__auto___36204)){
args__27061__auto__.push((arguments[i__27055__auto___36205]));

var G__36206 = (i__27055__auto___36205 + (1));
i__27055__auto___36205 = G__36206;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36203){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36203));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27061__auto__ = [];
var len__27054__auto___36208 = arguments.length;
var i__27055__auto___36209 = (0);
while(true){
if((i__27055__auto___36209 < len__27054__auto___36208)){
args__27061__auto__.push((arguments[i__27055__auto___36209]));

var G__36210 = (i__27055__auto___36209 + (1));
i__27055__auto___36209 = G__36210;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36207){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36207));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36211){
var map__36214 = p__36211;
var map__36214__$1 = ((((!((map__36214 == null)))?((((map__36214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36214):map__36214);
var message = cljs.core.get.call(null,map__36214__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36214__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25979__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25967__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25967__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25967__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28578__auto___36376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___36376,ch){
return (function (){
var f__28579__auto__ = (function (){var switch__27997__auto__ = ((function (c__28578__auto___36376,ch){
return (function (state_36345){
var state_val_36346 = (state_36345[(1)]);
if((state_val_36346 === (7))){
var inst_36341 = (state_36345[(2)]);
var state_36345__$1 = state_36345;
var statearr_36347_36377 = state_36345__$1;
(statearr_36347_36377[(2)] = inst_36341);

(statearr_36347_36377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36346 === (1))){
var state_36345__$1 = state_36345;
var statearr_36348_36378 = state_36345__$1;
(statearr_36348_36378[(2)] = null);

(statearr_36348_36378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36346 === (4))){
var inst_36298 = (state_36345[(7)]);
var inst_36298__$1 = (state_36345[(2)]);
var state_36345__$1 = (function (){var statearr_36349 = state_36345;
(statearr_36349[(7)] = inst_36298__$1);

return statearr_36349;
})();
if(cljs.core.truth_(inst_36298__$1)){
var statearr_36350_36379 = state_36345__$1;
(statearr_36350_36379[(1)] = (5));

} else {
var statearr_36351_36380 = state_36345__$1;
(statearr_36351_36380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36346 === (15))){
var inst_36305 = (state_36345[(8)]);
var inst_36320 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36305);
var inst_36321 = cljs.core.first.call(null,inst_36320);
var inst_36322 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36321);
var inst_36323 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36322)].join('');
var inst_36324 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36323);
var state_36345__$1 = state_36345;
var statearr_36352_36381 = state_36345__$1;
(statearr_36352_36381[(2)] = inst_36324);

(statearr_36352_36381[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36346 === (13))){
var inst_36329 = (state_36345[(2)]);
var state_36345__$1 = state_36345;
var statearr_36353_36382 = state_36345__$1;
(statearr_36353_36382[(2)] = inst_36329);

(statearr_36353_36382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36346 === (6))){
var state_36345__$1 = state_36345;
var statearr_36354_36383 = state_36345__$1;
(statearr_36354_36383[(2)] = null);

(statearr_36354_36383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36346 === (17))){
var inst_36327 = (state_36345[(2)]);
var state_36345__$1 = state_36345;
var statearr_36355_36384 = state_36345__$1;
(statearr_36355_36384[(2)] = inst_36327);

(statearr_36355_36384[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36346 === (3))){
var inst_36343 = (state_36345[(2)]);
var state_36345__$1 = state_36345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36345__$1,inst_36343);
} else {
if((state_val_36346 === (12))){
var inst_36304 = (state_36345[(9)]);
var inst_36318 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36304,opts);
var state_36345__$1 = state_36345;
if(cljs.core.truth_(inst_36318)){
var statearr_36356_36385 = state_36345__$1;
(statearr_36356_36385[(1)] = (15));

} else {
var statearr_36357_36386 = state_36345__$1;
(statearr_36357_36386[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36346 === (2))){
var state_36345__$1 = state_36345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36345__$1,(4),ch);
} else {
if((state_val_36346 === (11))){
var inst_36305 = (state_36345[(8)]);
var inst_36310 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36311 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36305);
var inst_36312 = cljs.core.async.timeout.call(null,(1000));
var inst_36313 = [inst_36311,inst_36312];
var inst_36314 = (new cljs.core.PersistentVector(null,2,(5),inst_36310,inst_36313,null));
var state_36345__$1 = state_36345;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36345__$1,(14),inst_36314);
} else {
if((state_val_36346 === (9))){
var inst_36305 = (state_36345[(8)]);
var inst_36331 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36332 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36305);
var inst_36333 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36332);
var inst_36334 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36333)].join('');
var inst_36335 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36334);
var state_36345__$1 = (function (){var statearr_36358 = state_36345;
(statearr_36358[(10)] = inst_36331);

return statearr_36358;
})();
var statearr_36359_36387 = state_36345__$1;
(statearr_36359_36387[(2)] = inst_36335);

(statearr_36359_36387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36346 === (5))){
var inst_36298 = (state_36345[(7)]);
var inst_36300 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36301 = (new cljs.core.PersistentArrayMap(null,2,inst_36300,null));
var inst_36302 = (new cljs.core.PersistentHashSet(null,inst_36301,null));
var inst_36303 = figwheel.client.focus_msgs.call(null,inst_36302,inst_36298);
var inst_36304 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36303);
var inst_36305 = cljs.core.first.call(null,inst_36303);
var inst_36306 = figwheel.client.autoload_QMARK_.call(null);
var state_36345__$1 = (function (){var statearr_36360 = state_36345;
(statearr_36360[(8)] = inst_36305);

(statearr_36360[(9)] = inst_36304);

return statearr_36360;
})();
if(cljs.core.truth_(inst_36306)){
var statearr_36361_36388 = state_36345__$1;
(statearr_36361_36388[(1)] = (8));

} else {
var statearr_36362_36389 = state_36345__$1;
(statearr_36362_36389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36346 === (14))){
var inst_36316 = (state_36345[(2)]);
var state_36345__$1 = state_36345;
var statearr_36363_36390 = state_36345__$1;
(statearr_36363_36390[(2)] = inst_36316);

(statearr_36363_36390[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36346 === (16))){
var state_36345__$1 = state_36345;
var statearr_36364_36391 = state_36345__$1;
(statearr_36364_36391[(2)] = null);

(statearr_36364_36391[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36346 === (10))){
var inst_36337 = (state_36345[(2)]);
var state_36345__$1 = (function (){var statearr_36365 = state_36345;
(statearr_36365[(11)] = inst_36337);

return statearr_36365;
})();
var statearr_36366_36392 = state_36345__$1;
(statearr_36366_36392[(2)] = null);

(statearr_36366_36392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36346 === (8))){
var inst_36304 = (state_36345[(9)]);
var inst_36308 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36304,opts);
var state_36345__$1 = state_36345;
if(cljs.core.truth_(inst_36308)){
var statearr_36367_36393 = state_36345__$1;
(statearr_36367_36393[(1)] = (11));

} else {
var statearr_36368_36394 = state_36345__$1;
(statearr_36368_36394[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28578__auto___36376,ch))
;
return ((function (switch__27997__auto__,c__28578__auto___36376,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27998__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27998__auto____0 = (function (){
var statearr_36372 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36372[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27998__auto__);

(statearr_36372[(1)] = (1));

return statearr_36372;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27998__auto____1 = (function (state_36345){
while(true){
var ret_value__27999__auto__ = (function (){try{while(true){
var result__28000__auto__ = switch__27997__auto__.call(null,state_36345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28000__auto__;
}
break;
}
}catch (e36373){if((e36373 instanceof Object)){
var ex__28001__auto__ = e36373;
var statearr_36374_36395 = state_36345;
(statearr_36374_36395[(5)] = ex__28001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36396 = state_36345;
state_36345 = G__36396;
continue;
} else {
return ret_value__27999__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27998__auto__ = function(state_36345){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27998__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27998__auto____1.call(this,state_36345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27998__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27998__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27998__auto__;
})()
;})(switch__27997__auto__,c__28578__auto___36376,ch))
})();
var state__28580__auto__ = (function (){var statearr_36375 = f__28579__auto__.call(null);
(statearr_36375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___36376);

return statearr_36375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___36376,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36397_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36397_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36400 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36400){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36399){if((e36399 instanceof Error)){
var e = e36399;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36400], null));
} else {
var e = e36399;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36400))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36401){
var map__36410 = p__36401;
var map__36410__$1 = ((((!((map__36410 == null)))?((((map__36410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36410):map__36410);
var opts = map__36410__$1;
var build_id = cljs.core.get.call(null,map__36410__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36410,map__36410__$1,opts,build_id){
return (function (p__36412){
var vec__36413 = p__36412;
var seq__36414 = cljs.core.seq.call(null,vec__36413);
var first__36415 = cljs.core.first.call(null,seq__36414);
var seq__36414__$1 = cljs.core.next.call(null,seq__36414);
var map__36416 = first__36415;
var map__36416__$1 = ((((!((map__36416 == null)))?((((map__36416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36416):map__36416);
var msg = map__36416__$1;
var msg_name = cljs.core.get.call(null,map__36416__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36414__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36413,seq__36414,first__36415,seq__36414__$1,map__36416,map__36416__$1,msg,msg_name,_,map__36410,map__36410__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36413,seq__36414,first__36415,seq__36414__$1,map__36416,map__36416__$1,msg,msg_name,_,map__36410,map__36410__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36410,map__36410__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36424){
var vec__36425 = p__36424;
var seq__36426 = cljs.core.seq.call(null,vec__36425);
var first__36427 = cljs.core.first.call(null,seq__36426);
var seq__36426__$1 = cljs.core.next.call(null,seq__36426);
var map__36428 = first__36427;
var map__36428__$1 = ((((!((map__36428 == null)))?((((map__36428.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36428.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36428):map__36428);
var msg = map__36428__$1;
var msg_name = cljs.core.get.call(null,map__36428__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36426__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36430){
var map__36442 = p__36430;
var map__36442__$1 = ((((!((map__36442 == null)))?((((map__36442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36442):map__36442);
var on_compile_warning = cljs.core.get.call(null,map__36442__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36442__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36442,map__36442__$1,on_compile_warning,on_compile_fail){
return (function (p__36444){
var vec__36445 = p__36444;
var seq__36446 = cljs.core.seq.call(null,vec__36445);
var first__36447 = cljs.core.first.call(null,seq__36446);
var seq__36446__$1 = cljs.core.next.call(null,seq__36446);
var map__36448 = first__36447;
var map__36448__$1 = ((((!((map__36448 == null)))?((((map__36448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36448):map__36448);
var msg = map__36448__$1;
var msg_name = cljs.core.get.call(null,map__36448__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36446__$1;
var pred__36450 = cljs.core._EQ_;
var expr__36451 = msg_name;
if(cljs.core.truth_(pred__36450.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36451))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36450.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36451))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36442,map__36442__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28579__auto__ = (function (){var switch__27997__auto__ = ((function (c__28578__auto__,msg_hist,msg_names,msg){
return (function (state_36679){
var state_val_36680 = (state_36679[(1)]);
if((state_val_36680 === (7))){
var inst_36599 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
if(cljs.core.truth_(inst_36599)){
var statearr_36681_36731 = state_36679__$1;
(statearr_36681_36731[(1)] = (8));

} else {
var statearr_36682_36732 = state_36679__$1;
(statearr_36682_36732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (20))){
var inst_36673 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36683_36733 = state_36679__$1;
(statearr_36683_36733[(2)] = inst_36673);

(statearr_36683_36733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (27))){
var inst_36669 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36684_36734 = state_36679__$1;
(statearr_36684_36734[(2)] = inst_36669);

(statearr_36684_36734[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (1))){
var inst_36592 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36679__$1 = state_36679;
if(cljs.core.truth_(inst_36592)){
var statearr_36685_36735 = state_36679__$1;
(statearr_36685_36735[(1)] = (2));

} else {
var statearr_36686_36736 = state_36679__$1;
(statearr_36686_36736[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (24))){
var inst_36671 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36687_36737 = state_36679__$1;
(statearr_36687_36737[(2)] = inst_36671);

(statearr_36687_36737[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (4))){
var inst_36677 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36679__$1,inst_36677);
} else {
if((state_val_36680 === (15))){
var inst_36675 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36688_36738 = state_36679__$1;
(statearr_36688_36738[(2)] = inst_36675);

(statearr_36688_36738[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (21))){
var inst_36628 = (state_36679[(2)]);
var inst_36629 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36630 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36629);
var state_36679__$1 = (function (){var statearr_36689 = state_36679;
(statearr_36689[(7)] = inst_36628);

return statearr_36689;
})();
var statearr_36690_36739 = state_36679__$1;
(statearr_36690_36739[(2)] = inst_36630);

(statearr_36690_36739[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (31))){
var inst_36658 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36679__$1 = state_36679;
if(cljs.core.truth_(inst_36658)){
var statearr_36691_36740 = state_36679__$1;
(statearr_36691_36740[(1)] = (34));

} else {
var statearr_36692_36741 = state_36679__$1;
(statearr_36692_36741[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (32))){
var inst_36667 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36693_36742 = state_36679__$1;
(statearr_36693_36742[(2)] = inst_36667);

(statearr_36693_36742[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (33))){
var inst_36654 = (state_36679[(2)]);
var inst_36655 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36656 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36655);
var state_36679__$1 = (function (){var statearr_36694 = state_36679;
(statearr_36694[(8)] = inst_36654);

return statearr_36694;
})();
var statearr_36695_36743 = state_36679__$1;
(statearr_36695_36743[(2)] = inst_36656);

(statearr_36695_36743[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (13))){
var inst_36613 = figwheel.client.heads_up.clear.call(null);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36679__$1,(16),inst_36613);
} else {
if((state_val_36680 === (22))){
var inst_36634 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36635 = figwheel.client.heads_up.append_warning_message.call(null,inst_36634);
var state_36679__$1 = state_36679;
var statearr_36696_36744 = state_36679__$1;
(statearr_36696_36744[(2)] = inst_36635);

(statearr_36696_36744[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (36))){
var inst_36665 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36697_36745 = state_36679__$1;
(statearr_36697_36745[(2)] = inst_36665);

(statearr_36697_36745[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (29))){
var inst_36645 = (state_36679[(2)]);
var inst_36646 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36647 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36646);
var state_36679__$1 = (function (){var statearr_36698 = state_36679;
(statearr_36698[(9)] = inst_36645);

return statearr_36698;
})();
var statearr_36699_36746 = state_36679__$1;
(statearr_36699_36746[(2)] = inst_36647);

(statearr_36699_36746[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (6))){
var inst_36594 = (state_36679[(10)]);
var state_36679__$1 = state_36679;
var statearr_36700_36747 = state_36679__$1;
(statearr_36700_36747[(2)] = inst_36594);

(statearr_36700_36747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (28))){
var inst_36641 = (state_36679[(2)]);
var inst_36642 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36643 = figwheel.client.heads_up.display_warning.call(null,inst_36642);
var state_36679__$1 = (function (){var statearr_36701 = state_36679;
(statearr_36701[(11)] = inst_36641);

return statearr_36701;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36679__$1,(29),inst_36643);
} else {
if((state_val_36680 === (25))){
var inst_36639 = figwheel.client.heads_up.clear.call(null);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36679__$1,(28),inst_36639);
} else {
if((state_val_36680 === (34))){
var inst_36660 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36679__$1,(37),inst_36660);
} else {
if((state_val_36680 === (17))){
var inst_36619 = (state_36679[(2)]);
var inst_36620 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36621 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36620);
var state_36679__$1 = (function (){var statearr_36702 = state_36679;
(statearr_36702[(12)] = inst_36619);

return statearr_36702;
})();
var statearr_36703_36748 = state_36679__$1;
(statearr_36703_36748[(2)] = inst_36621);

(statearr_36703_36748[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (3))){
var inst_36611 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36679__$1 = state_36679;
if(cljs.core.truth_(inst_36611)){
var statearr_36704_36749 = state_36679__$1;
(statearr_36704_36749[(1)] = (13));

} else {
var statearr_36705_36750 = state_36679__$1;
(statearr_36705_36750[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (12))){
var inst_36607 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36706_36751 = state_36679__$1;
(statearr_36706_36751[(2)] = inst_36607);

(statearr_36706_36751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (2))){
var inst_36594 = (state_36679[(10)]);
var inst_36594__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36679__$1 = (function (){var statearr_36707 = state_36679;
(statearr_36707[(10)] = inst_36594__$1);

return statearr_36707;
})();
if(cljs.core.truth_(inst_36594__$1)){
var statearr_36708_36752 = state_36679__$1;
(statearr_36708_36752[(1)] = (5));

} else {
var statearr_36709_36753 = state_36679__$1;
(statearr_36709_36753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (23))){
var inst_36637 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36679__$1 = state_36679;
if(cljs.core.truth_(inst_36637)){
var statearr_36710_36754 = state_36679__$1;
(statearr_36710_36754[(1)] = (25));

} else {
var statearr_36711_36755 = state_36679__$1;
(statearr_36711_36755[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (35))){
var state_36679__$1 = state_36679;
var statearr_36712_36756 = state_36679__$1;
(statearr_36712_36756[(2)] = null);

(statearr_36712_36756[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (19))){
var inst_36632 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36679__$1 = state_36679;
if(cljs.core.truth_(inst_36632)){
var statearr_36713_36757 = state_36679__$1;
(statearr_36713_36757[(1)] = (22));

} else {
var statearr_36714_36758 = state_36679__$1;
(statearr_36714_36758[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (11))){
var inst_36603 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36715_36759 = state_36679__$1;
(statearr_36715_36759[(2)] = inst_36603);

(statearr_36715_36759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (9))){
var inst_36605 = figwheel.client.heads_up.clear.call(null);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36679__$1,(12),inst_36605);
} else {
if((state_val_36680 === (5))){
var inst_36596 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36679__$1 = state_36679;
var statearr_36716_36760 = state_36679__$1;
(statearr_36716_36760[(2)] = inst_36596);

(statearr_36716_36760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (14))){
var inst_36623 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36679__$1 = state_36679;
if(cljs.core.truth_(inst_36623)){
var statearr_36717_36761 = state_36679__$1;
(statearr_36717_36761[(1)] = (18));

} else {
var statearr_36718_36762 = state_36679__$1;
(statearr_36718_36762[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (26))){
var inst_36649 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36679__$1 = state_36679;
if(cljs.core.truth_(inst_36649)){
var statearr_36719_36763 = state_36679__$1;
(statearr_36719_36763[(1)] = (30));

} else {
var statearr_36720_36764 = state_36679__$1;
(statearr_36720_36764[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (16))){
var inst_36615 = (state_36679[(2)]);
var inst_36616 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36617 = figwheel.client.heads_up.display_exception.call(null,inst_36616);
var state_36679__$1 = (function (){var statearr_36721 = state_36679;
(statearr_36721[(13)] = inst_36615);

return statearr_36721;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36679__$1,(17),inst_36617);
} else {
if((state_val_36680 === (30))){
var inst_36651 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36652 = figwheel.client.heads_up.display_warning.call(null,inst_36651);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36679__$1,(33),inst_36652);
} else {
if((state_val_36680 === (10))){
var inst_36609 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36722_36765 = state_36679__$1;
(statearr_36722_36765[(2)] = inst_36609);

(statearr_36722_36765[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (18))){
var inst_36625 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36626 = figwheel.client.heads_up.display_exception.call(null,inst_36625);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36679__$1,(21),inst_36626);
} else {
if((state_val_36680 === (37))){
var inst_36662 = (state_36679[(2)]);
var state_36679__$1 = state_36679;
var statearr_36723_36766 = state_36679__$1;
(statearr_36723_36766[(2)] = inst_36662);

(statearr_36723_36766[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36680 === (8))){
var inst_36601 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36679__$1 = state_36679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36679__$1,(11),inst_36601);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28578__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27997__auto__,c__28578__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto____0 = (function (){
var statearr_36727 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36727[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto__);

(statearr_36727[(1)] = (1));

return statearr_36727;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto____1 = (function (state_36679){
while(true){
var ret_value__27999__auto__ = (function (){try{while(true){
var result__28000__auto__ = switch__27997__auto__.call(null,state_36679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28000__auto__;
}
break;
}
}catch (e36728){if((e36728 instanceof Object)){
var ex__28001__auto__ = e36728;
var statearr_36729_36767 = state_36679;
(statearr_36729_36767[(5)] = ex__28001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36768 = state_36679;
state_36679 = G__36768;
continue;
} else {
return ret_value__27999__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto__ = function(state_36679){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto____1.call(this,state_36679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto__;
})()
;})(switch__27997__auto__,c__28578__auto__,msg_hist,msg_names,msg))
})();
var state__28580__auto__ = (function (){var statearr_36730 = f__28579__auto__.call(null);
(statearr_36730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_36730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto__,msg_hist,msg_names,msg))
);

return c__28578__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28578__auto___36831 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___36831,ch){
return (function (){
var f__28579__auto__ = (function (){var switch__27997__auto__ = ((function (c__28578__auto___36831,ch){
return (function (state_36814){
var state_val_36815 = (state_36814[(1)]);
if((state_val_36815 === (1))){
var state_36814__$1 = state_36814;
var statearr_36816_36832 = state_36814__$1;
(statearr_36816_36832[(2)] = null);

(statearr_36816_36832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36815 === (2))){
var state_36814__$1 = state_36814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36814__$1,(4),ch);
} else {
if((state_val_36815 === (3))){
var inst_36812 = (state_36814[(2)]);
var state_36814__$1 = state_36814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36814__$1,inst_36812);
} else {
if((state_val_36815 === (4))){
var inst_36802 = (state_36814[(7)]);
var inst_36802__$1 = (state_36814[(2)]);
var state_36814__$1 = (function (){var statearr_36817 = state_36814;
(statearr_36817[(7)] = inst_36802__$1);

return statearr_36817;
})();
if(cljs.core.truth_(inst_36802__$1)){
var statearr_36818_36833 = state_36814__$1;
(statearr_36818_36833[(1)] = (5));

} else {
var statearr_36819_36834 = state_36814__$1;
(statearr_36819_36834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36815 === (5))){
var inst_36802 = (state_36814[(7)]);
var inst_36804 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36802);
var state_36814__$1 = state_36814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36814__$1,(8),inst_36804);
} else {
if((state_val_36815 === (6))){
var state_36814__$1 = state_36814;
var statearr_36820_36835 = state_36814__$1;
(statearr_36820_36835[(2)] = null);

(statearr_36820_36835[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36815 === (7))){
var inst_36810 = (state_36814[(2)]);
var state_36814__$1 = state_36814;
var statearr_36821_36836 = state_36814__$1;
(statearr_36821_36836[(2)] = inst_36810);

(statearr_36821_36836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36815 === (8))){
var inst_36806 = (state_36814[(2)]);
var state_36814__$1 = (function (){var statearr_36822 = state_36814;
(statearr_36822[(8)] = inst_36806);

return statearr_36822;
})();
var statearr_36823_36837 = state_36814__$1;
(statearr_36823_36837[(2)] = null);

(statearr_36823_36837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__28578__auto___36831,ch))
;
return ((function (switch__27997__auto__,c__28578__auto___36831,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27998__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27998__auto____0 = (function (){
var statearr_36827 = [null,null,null,null,null,null,null,null,null];
(statearr_36827[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27998__auto__);

(statearr_36827[(1)] = (1));

return statearr_36827;
});
var figwheel$client$heads_up_plugin_$_state_machine__27998__auto____1 = (function (state_36814){
while(true){
var ret_value__27999__auto__ = (function (){try{while(true){
var result__28000__auto__ = switch__27997__auto__.call(null,state_36814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28000__auto__;
}
break;
}
}catch (e36828){if((e36828 instanceof Object)){
var ex__28001__auto__ = e36828;
var statearr_36829_36838 = state_36814;
(statearr_36829_36838[(5)] = ex__28001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36828;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36839 = state_36814;
state_36814 = G__36839;
continue;
} else {
return ret_value__27999__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27998__auto__ = function(state_36814){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27998__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27998__auto____1.call(this,state_36814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27998__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27998__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27998__auto__;
})()
;})(switch__27997__auto__,c__28578__auto___36831,ch))
})();
var state__28580__auto__ = (function (){var statearr_36830 = f__28579__auto__.call(null);
(statearr_36830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___36831);

return statearr_36830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___36831,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto__){
return (function (){
var f__28579__auto__ = (function (){var switch__27997__auto__ = ((function (c__28578__auto__){
return (function (state_36860){
var state_val_36861 = (state_36860[(1)]);
if((state_val_36861 === (1))){
var inst_36855 = cljs.core.async.timeout.call(null,(3000));
var state_36860__$1 = state_36860;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36860__$1,(2),inst_36855);
} else {
if((state_val_36861 === (2))){
var inst_36857 = (state_36860[(2)]);
var inst_36858 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36860__$1 = (function (){var statearr_36862 = state_36860;
(statearr_36862[(7)] = inst_36857);

return statearr_36862;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36860__$1,inst_36858);
} else {
return null;
}
}
});})(c__28578__auto__))
;
return ((function (switch__27997__auto__,c__28578__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27998__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27998__auto____0 = (function (){
var statearr_36866 = [null,null,null,null,null,null,null,null];
(statearr_36866[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27998__auto__);

(statearr_36866[(1)] = (1));

return statearr_36866;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27998__auto____1 = (function (state_36860){
while(true){
var ret_value__27999__auto__ = (function (){try{while(true){
var result__28000__auto__ = switch__27997__auto__.call(null,state_36860);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28000__auto__;
}
break;
}
}catch (e36867){if((e36867 instanceof Object)){
var ex__28001__auto__ = e36867;
var statearr_36868_36870 = state_36860;
(statearr_36868_36870[(5)] = ex__28001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36860);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36871 = state_36860;
state_36860 = G__36871;
continue;
} else {
return ret_value__27999__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27998__auto__ = function(state_36860){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27998__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27998__auto____1.call(this,state_36860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27998__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27998__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27998__auto__;
})()
;})(switch__27997__auto__,c__28578__auto__))
})();
var state__28580__auto__ = (function (){var statearr_36869 = f__28579__auto__.call(null);
(statearr_36869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_36869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto__))
);

return c__28578__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28579__auto__ = (function (){var switch__27997__auto__ = ((function (c__28578__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36894){
var state_val_36895 = (state_36894[(1)]);
if((state_val_36895 === (1))){
var inst_36888 = cljs.core.async.timeout.call(null,(2000));
var state_36894__$1 = state_36894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36894__$1,(2),inst_36888);
} else {
if((state_val_36895 === (2))){
var inst_36890 = (state_36894[(2)]);
var inst_36891 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_36892 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36891);
var state_36894__$1 = (function (){var statearr_36896 = state_36894;
(statearr_36896[(7)] = inst_36890);

return statearr_36896;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36894__$1,inst_36892);
} else {
return null;
}
}
});})(c__28578__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27997__auto__,c__28578__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto____0 = (function (){
var statearr_36900 = [null,null,null,null,null,null,null,null];
(statearr_36900[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto__);

(statearr_36900[(1)] = (1));

return statearr_36900;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto____1 = (function (state_36894){
while(true){
var ret_value__27999__auto__ = (function (){try{while(true){
var result__28000__auto__ = switch__27997__auto__.call(null,state_36894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28000__auto__;
}
break;
}
}catch (e36901){if((e36901 instanceof Object)){
var ex__28001__auto__ = e36901;
var statearr_36902_36904 = state_36894;
(statearr_36902_36904[(5)] = ex__28001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36901;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36905 = state_36894;
state_36894 = G__36905;
continue;
} else {
return ret_value__27999__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto__ = function(state_36894){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto____1.call(this,state_36894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto__;
})()
;})(switch__27997__auto__,c__28578__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28580__auto__ = (function (){var statearr_36903 = f__28579__auto__.call(null);
(statearr_36903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_36903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto__,figwheel_version,temp__4657__auto__))
);

return c__28578__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36906){
var map__36910 = p__36906;
var map__36910__$1 = ((((!((map__36910 == null)))?((((map__36910.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36910.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36910):map__36910);
var file = cljs.core.get.call(null,map__36910__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36910__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36910__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36912 = "";
var G__36912__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__36912),cljs.core.str("file "),cljs.core.str(file)].join(''):G__36912);
var G__36912__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__36912__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__36912__$1);
if(cljs.core.truth_((function (){var and__25967__auto__ = line;
if(cljs.core.truth_(and__25967__auto__)){
return column;
} else {
return and__25967__auto__;
}
})())){
return [cljs.core.str(G__36912__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__36912__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36913){
var map__36920 = p__36913;
var map__36920__$1 = ((((!((map__36920 == null)))?((((map__36920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36920):map__36920);
var ed = map__36920__$1;
var formatted_exception = cljs.core.get.call(null,map__36920__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36920__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36920__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36922_36926 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36923_36927 = null;
var count__36924_36928 = (0);
var i__36925_36929 = (0);
while(true){
if((i__36925_36929 < count__36924_36928)){
var msg_36930 = cljs.core._nth.call(null,chunk__36923_36927,i__36925_36929);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36930);

var G__36931 = seq__36922_36926;
var G__36932 = chunk__36923_36927;
var G__36933 = count__36924_36928;
var G__36934 = (i__36925_36929 + (1));
seq__36922_36926 = G__36931;
chunk__36923_36927 = G__36932;
count__36924_36928 = G__36933;
i__36925_36929 = G__36934;
continue;
} else {
var temp__4657__auto___36935 = cljs.core.seq.call(null,seq__36922_36926);
if(temp__4657__auto___36935){
var seq__36922_36936__$1 = temp__4657__auto___36935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36922_36936__$1)){
var c__26790__auto___36937 = cljs.core.chunk_first.call(null,seq__36922_36936__$1);
var G__36938 = cljs.core.chunk_rest.call(null,seq__36922_36936__$1);
var G__36939 = c__26790__auto___36937;
var G__36940 = cljs.core.count.call(null,c__26790__auto___36937);
var G__36941 = (0);
seq__36922_36926 = G__36938;
chunk__36923_36927 = G__36939;
count__36924_36928 = G__36940;
i__36925_36929 = G__36941;
continue;
} else {
var msg_36942 = cljs.core.first.call(null,seq__36922_36936__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36942);

var G__36943 = cljs.core.next.call(null,seq__36922_36936__$1);
var G__36944 = null;
var G__36945 = (0);
var G__36946 = (0);
seq__36922_36926 = G__36943;
chunk__36923_36927 = G__36944;
count__36924_36928 = G__36945;
i__36925_36929 = G__36946;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36947){
var map__36950 = p__36947;
var map__36950__$1 = ((((!((map__36950 == null)))?((((map__36950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36950):map__36950);
var w = map__36950__$1;
var message = cljs.core.get.call(null,map__36950__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25967__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25967__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25967__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__36962 = cljs.core.seq.call(null,plugins);
var chunk__36963 = null;
var count__36964 = (0);
var i__36965 = (0);
while(true){
if((i__36965 < count__36964)){
var vec__36966 = cljs.core._nth.call(null,chunk__36963,i__36965);
var k = cljs.core.nth.call(null,vec__36966,(0),null);
var plugin = cljs.core.nth.call(null,vec__36966,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36972 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36962,chunk__36963,count__36964,i__36965,pl_36972,vec__36966,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36972.call(null,msg_hist);
});})(seq__36962,chunk__36963,count__36964,i__36965,pl_36972,vec__36966,k,plugin))
);
} else {
}

var G__36973 = seq__36962;
var G__36974 = chunk__36963;
var G__36975 = count__36964;
var G__36976 = (i__36965 + (1));
seq__36962 = G__36973;
chunk__36963 = G__36974;
count__36964 = G__36975;
i__36965 = G__36976;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36962);
if(temp__4657__auto__){
var seq__36962__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36962__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__36962__$1);
var G__36977 = cljs.core.chunk_rest.call(null,seq__36962__$1);
var G__36978 = c__26790__auto__;
var G__36979 = cljs.core.count.call(null,c__26790__auto__);
var G__36980 = (0);
seq__36962 = G__36977;
chunk__36963 = G__36978;
count__36964 = G__36979;
i__36965 = G__36980;
continue;
} else {
var vec__36969 = cljs.core.first.call(null,seq__36962__$1);
var k = cljs.core.nth.call(null,vec__36969,(0),null);
var plugin = cljs.core.nth.call(null,vec__36969,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36981 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36962,chunk__36963,count__36964,i__36965,pl_36981,vec__36969,k,plugin,seq__36962__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36981.call(null,msg_hist);
});})(seq__36962,chunk__36963,count__36964,i__36965,pl_36981,vec__36969,k,plugin,seq__36962__$1,temp__4657__auto__))
);
} else {
}

var G__36982 = cljs.core.next.call(null,seq__36962__$1);
var G__36983 = null;
var G__36984 = (0);
var G__36985 = (0);
seq__36962 = G__36982;
chunk__36963 = G__36983;
count__36964 = G__36984;
i__36965 = G__36985;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args36986 = [];
var len__27054__auto___36993 = arguments.length;
var i__27055__auto___36994 = (0);
while(true){
if((i__27055__auto___36994 < len__27054__auto___36993)){
args36986.push((arguments[i__27055__auto___36994]));

var G__36995 = (i__27055__auto___36994 + (1));
i__27055__auto___36994 = G__36995;
continue;
} else {
}
break;
}

var G__36988 = args36986.length;
switch (G__36988) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36986.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__36989_36997 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36990_36998 = null;
var count__36991_36999 = (0);
var i__36992_37000 = (0);
while(true){
if((i__36992_37000 < count__36991_36999)){
var msg_37001 = cljs.core._nth.call(null,chunk__36990_36998,i__36992_37000);
figwheel.client.socket.handle_incoming_message.call(null,msg_37001);

var G__37002 = seq__36989_36997;
var G__37003 = chunk__36990_36998;
var G__37004 = count__36991_36999;
var G__37005 = (i__36992_37000 + (1));
seq__36989_36997 = G__37002;
chunk__36990_36998 = G__37003;
count__36991_36999 = G__37004;
i__36992_37000 = G__37005;
continue;
} else {
var temp__4657__auto___37006 = cljs.core.seq.call(null,seq__36989_36997);
if(temp__4657__auto___37006){
var seq__36989_37007__$1 = temp__4657__auto___37006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36989_37007__$1)){
var c__26790__auto___37008 = cljs.core.chunk_first.call(null,seq__36989_37007__$1);
var G__37009 = cljs.core.chunk_rest.call(null,seq__36989_37007__$1);
var G__37010 = c__26790__auto___37008;
var G__37011 = cljs.core.count.call(null,c__26790__auto___37008);
var G__37012 = (0);
seq__36989_36997 = G__37009;
chunk__36990_36998 = G__37010;
count__36991_36999 = G__37011;
i__36992_37000 = G__37012;
continue;
} else {
var msg_37013 = cljs.core.first.call(null,seq__36989_37007__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37013);

var G__37014 = cljs.core.next.call(null,seq__36989_37007__$1);
var G__37015 = null;
var G__37016 = (0);
var G__37017 = (0);
seq__36989_36997 = G__37014;
chunk__36990_36998 = G__37015;
count__36991_36999 = G__37016;
i__36992_37000 = G__37017;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37022 = arguments.length;
var i__27055__auto___37023 = (0);
while(true){
if((i__27055__auto___37023 < len__27054__auto___37022)){
args__27061__auto__.push((arguments[i__27055__auto___37023]));

var G__37024 = (i__27055__auto___37023 + (1));
i__27055__auto___37023 = G__37024;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37019){
var map__37020 = p__37019;
var map__37020__$1 = ((((!((map__37020 == null)))?((((map__37020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37020):map__37020);
var opts = map__37020__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37018){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37018));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37026){if((e37026 instanceof Error)){
var e = e37026;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37026;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37030){
var map__37031 = p__37030;
var map__37031__$1 = ((((!((map__37031 == null)))?((((map__37031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37031):map__37031);
var msg_name = cljs.core.get.call(null,map__37031__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1498365165020