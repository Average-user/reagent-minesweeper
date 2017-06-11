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
var args36198 = [];
var len__27054__auto___36201 = arguments.length;
var i__27055__auto___36202 = (0);
while(true){
if((i__27055__auto___36202 < len__27054__auto___36201)){
args36198.push((arguments[i__27055__auto___36202]));

var G__36203 = (i__27055__auto___36202 + (1));
i__27055__auto___36202 = G__36203;
continue;
} else {
}
break;
}

var G__36200 = args36198.length;
switch (G__36200) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36198.length)].join('')));

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
var len__27054__auto___36206 = arguments.length;
var i__27055__auto___36207 = (0);
while(true){
if((i__27055__auto___36207 < len__27054__auto___36206)){
args__27061__auto__.push((arguments[i__27055__auto___36207]));

var G__36208 = (i__27055__auto___36207 + (1));
i__27055__auto___36207 = G__36208;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36205){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36205));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27061__auto__ = [];
var len__27054__auto___36210 = arguments.length;
var i__27055__auto___36211 = (0);
while(true){
if((i__27055__auto___36211 < len__27054__auto___36210)){
args__27061__auto__.push((arguments[i__27055__auto___36211]));

var G__36212 = (i__27055__auto___36211 + (1));
i__27055__auto___36211 = G__36212;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36209){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36209));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36213){
var map__36216 = p__36213;
var map__36216__$1 = ((((!((map__36216 == null)))?((((map__36216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36216):map__36216);
var message = cljs.core.get.call(null,map__36216__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36216__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28578__auto___36378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___36378,ch){
return (function (){
var f__28579__auto__ = (function (){var switch__27997__auto__ = ((function (c__28578__auto___36378,ch){
return (function (state_36347){
var state_val_36348 = (state_36347[(1)]);
if((state_val_36348 === (7))){
var inst_36343 = (state_36347[(2)]);
var state_36347__$1 = state_36347;
var statearr_36349_36379 = state_36347__$1;
(statearr_36349_36379[(2)] = inst_36343);

(statearr_36349_36379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (1))){
var state_36347__$1 = state_36347;
var statearr_36350_36380 = state_36347__$1;
(statearr_36350_36380[(2)] = null);

(statearr_36350_36380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (4))){
var inst_36300 = (state_36347[(7)]);
var inst_36300__$1 = (state_36347[(2)]);
var state_36347__$1 = (function (){var statearr_36351 = state_36347;
(statearr_36351[(7)] = inst_36300__$1);

return statearr_36351;
})();
if(cljs.core.truth_(inst_36300__$1)){
var statearr_36352_36381 = state_36347__$1;
(statearr_36352_36381[(1)] = (5));

} else {
var statearr_36353_36382 = state_36347__$1;
(statearr_36353_36382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (15))){
var inst_36307 = (state_36347[(8)]);
var inst_36322 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36307);
var inst_36323 = cljs.core.first.call(null,inst_36322);
var inst_36324 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36323);
var inst_36325 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36324)].join('');
var inst_36326 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36325);
var state_36347__$1 = state_36347;
var statearr_36354_36383 = state_36347__$1;
(statearr_36354_36383[(2)] = inst_36326);

(statearr_36354_36383[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (13))){
var inst_36331 = (state_36347[(2)]);
var state_36347__$1 = state_36347;
var statearr_36355_36384 = state_36347__$1;
(statearr_36355_36384[(2)] = inst_36331);

(statearr_36355_36384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (6))){
var state_36347__$1 = state_36347;
var statearr_36356_36385 = state_36347__$1;
(statearr_36356_36385[(2)] = null);

(statearr_36356_36385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (17))){
var inst_36329 = (state_36347[(2)]);
var state_36347__$1 = state_36347;
var statearr_36357_36386 = state_36347__$1;
(statearr_36357_36386[(2)] = inst_36329);

(statearr_36357_36386[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (3))){
var inst_36345 = (state_36347[(2)]);
var state_36347__$1 = state_36347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36347__$1,inst_36345);
} else {
if((state_val_36348 === (12))){
var inst_36306 = (state_36347[(9)]);
var inst_36320 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36306,opts);
var state_36347__$1 = state_36347;
if(cljs.core.truth_(inst_36320)){
var statearr_36358_36387 = state_36347__$1;
(statearr_36358_36387[(1)] = (15));

} else {
var statearr_36359_36388 = state_36347__$1;
(statearr_36359_36388[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (2))){
var state_36347__$1 = state_36347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36347__$1,(4),ch);
} else {
if((state_val_36348 === (11))){
var inst_36307 = (state_36347[(8)]);
var inst_36312 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36313 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36307);
var inst_36314 = cljs.core.async.timeout.call(null,(1000));
var inst_36315 = [inst_36313,inst_36314];
var inst_36316 = (new cljs.core.PersistentVector(null,2,(5),inst_36312,inst_36315,null));
var state_36347__$1 = state_36347;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36347__$1,(14),inst_36316);
} else {
if((state_val_36348 === (9))){
var inst_36307 = (state_36347[(8)]);
var inst_36333 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36334 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36307);
var inst_36335 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36334);
var inst_36336 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36335)].join('');
var inst_36337 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36336);
var state_36347__$1 = (function (){var statearr_36360 = state_36347;
(statearr_36360[(10)] = inst_36333);

return statearr_36360;
})();
var statearr_36361_36389 = state_36347__$1;
(statearr_36361_36389[(2)] = inst_36337);

(statearr_36361_36389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (5))){
var inst_36300 = (state_36347[(7)]);
var inst_36302 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36303 = (new cljs.core.PersistentArrayMap(null,2,inst_36302,null));
var inst_36304 = (new cljs.core.PersistentHashSet(null,inst_36303,null));
var inst_36305 = figwheel.client.focus_msgs.call(null,inst_36304,inst_36300);
var inst_36306 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36305);
var inst_36307 = cljs.core.first.call(null,inst_36305);
var inst_36308 = figwheel.client.autoload_QMARK_.call(null);
var state_36347__$1 = (function (){var statearr_36362 = state_36347;
(statearr_36362[(8)] = inst_36307);

(statearr_36362[(9)] = inst_36306);

return statearr_36362;
})();
if(cljs.core.truth_(inst_36308)){
var statearr_36363_36390 = state_36347__$1;
(statearr_36363_36390[(1)] = (8));

} else {
var statearr_36364_36391 = state_36347__$1;
(statearr_36364_36391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (14))){
var inst_36318 = (state_36347[(2)]);
var state_36347__$1 = state_36347;
var statearr_36365_36392 = state_36347__$1;
(statearr_36365_36392[(2)] = inst_36318);

(statearr_36365_36392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (16))){
var state_36347__$1 = state_36347;
var statearr_36366_36393 = state_36347__$1;
(statearr_36366_36393[(2)] = null);

(statearr_36366_36393[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (10))){
var inst_36339 = (state_36347[(2)]);
var state_36347__$1 = (function (){var statearr_36367 = state_36347;
(statearr_36367[(11)] = inst_36339);

return statearr_36367;
})();
var statearr_36368_36394 = state_36347__$1;
(statearr_36368_36394[(2)] = null);

(statearr_36368_36394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36348 === (8))){
var inst_36306 = (state_36347[(9)]);
var inst_36310 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36306,opts);
var state_36347__$1 = state_36347;
if(cljs.core.truth_(inst_36310)){
var statearr_36369_36395 = state_36347__$1;
(statearr_36369_36395[(1)] = (11));

} else {
var statearr_36370_36396 = state_36347__$1;
(statearr_36370_36396[(1)] = (12));

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
});})(c__28578__auto___36378,ch))
;
return ((function (switch__27997__auto__,c__28578__auto___36378,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27998__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27998__auto____0 = (function (){
var statearr_36374 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36374[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27998__auto__);

(statearr_36374[(1)] = (1));

return statearr_36374;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27998__auto____1 = (function (state_36347){
while(true){
var ret_value__27999__auto__ = (function (){try{while(true){
var result__28000__auto__ = switch__27997__auto__.call(null,state_36347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28000__auto__;
}
break;
}
}catch (e36375){if((e36375 instanceof Object)){
var ex__28001__auto__ = e36375;
var statearr_36376_36397 = state_36347;
(statearr_36376_36397[(5)] = ex__28001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36398 = state_36347;
state_36347 = G__36398;
continue;
} else {
return ret_value__27999__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27998__auto__ = function(state_36347){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27998__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27998__auto____1.call(this,state_36347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27998__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27998__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27998__auto__;
})()
;})(switch__27997__auto__,c__28578__auto___36378,ch))
})();
var state__28580__auto__ = (function (){var statearr_36377 = f__28579__auto__.call(null);
(statearr_36377[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___36378);

return statearr_36377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___36378,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36399_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36399_SHARP_));
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
var base_path_36402 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36402){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36401){if((e36401 instanceof Error)){
var e = e36401;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36402], null));
} else {
var e = e36401;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36402))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36403){
var map__36412 = p__36403;
var map__36412__$1 = ((((!((map__36412 == null)))?((((map__36412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36412):map__36412);
var opts = map__36412__$1;
var build_id = cljs.core.get.call(null,map__36412__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36412,map__36412__$1,opts,build_id){
return (function (p__36414){
var vec__36415 = p__36414;
var seq__36416 = cljs.core.seq.call(null,vec__36415);
var first__36417 = cljs.core.first.call(null,seq__36416);
var seq__36416__$1 = cljs.core.next.call(null,seq__36416);
var map__36418 = first__36417;
var map__36418__$1 = ((((!((map__36418 == null)))?((((map__36418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36418):map__36418);
var msg = map__36418__$1;
var msg_name = cljs.core.get.call(null,map__36418__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36416__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36415,seq__36416,first__36417,seq__36416__$1,map__36418,map__36418__$1,msg,msg_name,_,map__36412,map__36412__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36415,seq__36416,first__36417,seq__36416__$1,map__36418,map__36418__$1,msg,msg_name,_,map__36412,map__36412__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36412,map__36412__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36426){
var vec__36427 = p__36426;
var seq__36428 = cljs.core.seq.call(null,vec__36427);
var first__36429 = cljs.core.first.call(null,seq__36428);
var seq__36428__$1 = cljs.core.next.call(null,seq__36428);
var map__36430 = first__36429;
var map__36430__$1 = ((((!((map__36430 == null)))?((((map__36430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36430):map__36430);
var msg = map__36430__$1;
var msg_name = cljs.core.get.call(null,map__36430__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36428__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36432){
var map__36444 = p__36432;
var map__36444__$1 = ((((!((map__36444 == null)))?((((map__36444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36444):map__36444);
var on_compile_warning = cljs.core.get.call(null,map__36444__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36444__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36444,map__36444__$1,on_compile_warning,on_compile_fail){
return (function (p__36446){
var vec__36447 = p__36446;
var seq__36448 = cljs.core.seq.call(null,vec__36447);
var first__36449 = cljs.core.first.call(null,seq__36448);
var seq__36448__$1 = cljs.core.next.call(null,seq__36448);
var map__36450 = first__36449;
var map__36450__$1 = ((((!((map__36450 == null)))?((((map__36450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36450):map__36450);
var msg = map__36450__$1;
var msg_name = cljs.core.get.call(null,map__36450__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36448__$1;
var pred__36452 = cljs.core._EQ_;
var expr__36453 = msg_name;
if(cljs.core.truth_(pred__36452.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36453))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36452.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36453))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36444,map__36444__$1,on_compile_warning,on_compile_fail))
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
return (function (state_36681){
var state_val_36682 = (state_36681[(1)]);
if((state_val_36682 === (7))){
var inst_36601 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
if(cljs.core.truth_(inst_36601)){
var statearr_36683_36733 = state_36681__$1;
(statearr_36683_36733[(1)] = (8));

} else {
var statearr_36684_36734 = state_36681__$1;
(statearr_36684_36734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (20))){
var inst_36675 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
var statearr_36685_36735 = state_36681__$1;
(statearr_36685_36735[(2)] = inst_36675);

(statearr_36685_36735[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (27))){
var inst_36671 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
var statearr_36686_36736 = state_36681__$1;
(statearr_36686_36736[(2)] = inst_36671);

(statearr_36686_36736[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (1))){
var inst_36594 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36681__$1 = state_36681;
if(cljs.core.truth_(inst_36594)){
var statearr_36687_36737 = state_36681__$1;
(statearr_36687_36737[(1)] = (2));

} else {
var statearr_36688_36738 = state_36681__$1;
(statearr_36688_36738[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (24))){
var inst_36673 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
var statearr_36689_36739 = state_36681__$1;
(statearr_36689_36739[(2)] = inst_36673);

(statearr_36689_36739[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (4))){
var inst_36679 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36681__$1,inst_36679);
} else {
if((state_val_36682 === (15))){
var inst_36677 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
var statearr_36690_36740 = state_36681__$1;
(statearr_36690_36740[(2)] = inst_36677);

(statearr_36690_36740[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (21))){
var inst_36630 = (state_36681[(2)]);
var inst_36631 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36632 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36631);
var state_36681__$1 = (function (){var statearr_36691 = state_36681;
(statearr_36691[(7)] = inst_36630);

return statearr_36691;
})();
var statearr_36692_36741 = state_36681__$1;
(statearr_36692_36741[(2)] = inst_36632);

(statearr_36692_36741[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (31))){
var inst_36660 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36681__$1 = state_36681;
if(cljs.core.truth_(inst_36660)){
var statearr_36693_36742 = state_36681__$1;
(statearr_36693_36742[(1)] = (34));

} else {
var statearr_36694_36743 = state_36681__$1;
(statearr_36694_36743[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (32))){
var inst_36669 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
var statearr_36695_36744 = state_36681__$1;
(statearr_36695_36744[(2)] = inst_36669);

(statearr_36695_36744[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (33))){
var inst_36656 = (state_36681[(2)]);
var inst_36657 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36658 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36657);
var state_36681__$1 = (function (){var statearr_36696 = state_36681;
(statearr_36696[(8)] = inst_36656);

return statearr_36696;
})();
var statearr_36697_36745 = state_36681__$1;
(statearr_36697_36745[(2)] = inst_36658);

(statearr_36697_36745[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (13))){
var inst_36615 = figwheel.client.heads_up.clear.call(null);
var state_36681__$1 = state_36681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36681__$1,(16),inst_36615);
} else {
if((state_val_36682 === (22))){
var inst_36636 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36637 = figwheel.client.heads_up.append_warning_message.call(null,inst_36636);
var state_36681__$1 = state_36681;
var statearr_36698_36746 = state_36681__$1;
(statearr_36698_36746[(2)] = inst_36637);

(statearr_36698_36746[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (36))){
var inst_36667 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
var statearr_36699_36747 = state_36681__$1;
(statearr_36699_36747[(2)] = inst_36667);

(statearr_36699_36747[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (29))){
var inst_36647 = (state_36681[(2)]);
var inst_36648 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36649 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36648);
var state_36681__$1 = (function (){var statearr_36700 = state_36681;
(statearr_36700[(9)] = inst_36647);

return statearr_36700;
})();
var statearr_36701_36748 = state_36681__$1;
(statearr_36701_36748[(2)] = inst_36649);

(statearr_36701_36748[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (6))){
var inst_36596 = (state_36681[(10)]);
var state_36681__$1 = state_36681;
var statearr_36702_36749 = state_36681__$1;
(statearr_36702_36749[(2)] = inst_36596);

(statearr_36702_36749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (28))){
var inst_36643 = (state_36681[(2)]);
var inst_36644 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36645 = figwheel.client.heads_up.display_warning.call(null,inst_36644);
var state_36681__$1 = (function (){var statearr_36703 = state_36681;
(statearr_36703[(11)] = inst_36643);

return statearr_36703;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36681__$1,(29),inst_36645);
} else {
if((state_val_36682 === (25))){
var inst_36641 = figwheel.client.heads_up.clear.call(null);
var state_36681__$1 = state_36681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36681__$1,(28),inst_36641);
} else {
if((state_val_36682 === (34))){
var inst_36662 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36681__$1 = state_36681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36681__$1,(37),inst_36662);
} else {
if((state_val_36682 === (17))){
var inst_36621 = (state_36681[(2)]);
var inst_36622 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36623 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36622);
var state_36681__$1 = (function (){var statearr_36704 = state_36681;
(statearr_36704[(12)] = inst_36621);

return statearr_36704;
})();
var statearr_36705_36750 = state_36681__$1;
(statearr_36705_36750[(2)] = inst_36623);

(statearr_36705_36750[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (3))){
var inst_36613 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36681__$1 = state_36681;
if(cljs.core.truth_(inst_36613)){
var statearr_36706_36751 = state_36681__$1;
(statearr_36706_36751[(1)] = (13));

} else {
var statearr_36707_36752 = state_36681__$1;
(statearr_36707_36752[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (12))){
var inst_36609 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
var statearr_36708_36753 = state_36681__$1;
(statearr_36708_36753[(2)] = inst_36609);

(statearr_36708_36753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (2))){
var inst_36596 = (state_36681[(10)]);
var inst_36596__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36681__$1 = (function (){var statearr_36709 = state_36681;
(statearr_36709[(10)] = inst_36596__$1);

return statearr_36709;
})();
if(cljs.core.truth_(inst_36596__$1)){
var statearr_36710_36754 = state_36681__$1;
(statearr_36710_36754[(1)] = (5));

} else {
var statearr_36711_36755 = state_36681__$1;
(statearr_36711_36755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (23))){
var inst_36639 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36681__$1 = state_36681;
if(cljs.core.truth_(inst_36639)){
var statearr_36712_36756 = state_36681__$1;
(statearr_36712_36756[(1)] = (25));

} else {
var statearr_36713_36757 = state_36681__$1;
(statearr_36713_36757[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (35))){
var state_36681__$1 = state_36681;
var statearr_36714_36758 = state_36681__$1;
(statearr_36714_36758[(2)] = null);

(statearr_36714_36758[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (19))){
var inst_36634 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36681__$1 = state_36681;
if(cljs.core.truth_(inst_36634)){
var statearr_36715_36759 = state_36681__$1;
(statearr_36715_36759[(1)] = (22));

} else {
var statearr_36716_36760 = state_36681__$1;
(statearr_36716_36760[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (11))){
var inst_36605 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
var statearr_36717_36761 = state_36681__$1;
(statearr_36717_36761[(2)] = inst_36605);

(statearr_36717_36761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (9))){
var inst_36607 = figwheel.client.heads_up.clear.call(null);
var state_36681__$1 = state_36681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36681__$1,(12),inst_36607);
} else {
if((state_val_36682 === (5))){
var inst_36598 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36681__$1 = state_36681;
var statearr_36718_36762 = state_36681__$1;
(statearr_36718_36762[(2)] = inst_36598);

(statearr_36718_36762[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (14))){
var inst_36625 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36681__$1 = state_36681;
if(cljs.core.truth_(inst_36625)){
var statearr_36719_36763 = state_36681__$1;
(statearr_36719_36763[(1)] = (18));

} else {
var statearr_36720_36764 = state_36681__$1;
(statearr_36720_36764[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (26))){
var inst_36651 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36681__$1 = state_36681;
if(cljs.core.truth_(inst_36651)){
var statearr_36721_36765 = state_36681__$1;
(statearr_36721_36765[(1)] = (30));

} else {
var statearr_36722_36766 = state_36681__$1;
(statearr_36722_36766[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (16))){
var inst_36617 = (state_36681[(2)]);
var inst_36618 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36619 = figwheel.client.heads_up.display_exception.call(null,inst_36618);
var state_36681__$1 = (function (){var statearr_36723 = state_36681;
(statearr_36723[(13)] = inst_36617);

return statearr_36723;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36681__$1,(17),inst_36619);
} else {
if((state_val_36682 === (30))){
var inst_36653 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36654 = figwheel.client.heads_up.display_warning.call(null,inst_36653);
var state_36681__$1 = state_36681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36681__$1,(33),inst_36654);
} else {
if((state_val_36682 === (10))){
var inst_36611 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
var statearr_36724_36767 = state_36681__$1;
(statearr_36724_36767[(2)] = inst_36611);

(statearr_36724_36767[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (18))){
var inst_36627 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36628 = figwheel.client.heads_up.display_exception.call(null,inst_36627);
var state_36681__$1 = state_36681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36681__$1,(21),inst_36628);
} else {
if((state_val_36682 === (37))){
var inst_36664 = (state_36681[(2)]);
var state_36681__$1 = state_36681;
var statearr_36725_36768 = state_36681__$1;
(statearr_36725_36768[(2)] = inst_36664);

(statearr_36725_36768[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36682 === (8))){
var inst_36603 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36681__$1 = state_36681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36681__$1,(11),inst_36603);
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
var statearr_36729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36729[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto__);

(statearr_36729[(1)] = (1));

return statearr_36729;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto____1 = (function (state_36681){
while(true){
var ret_value__27999__auto__ = (function (){try{while(true){
var result__28000__auto__ = switch__27997__auto__.call(null,state_36681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28000__auto__;
}
break;
}
}catch (e36730){if((e36730 instanceof Object)){
var ex__28001__auto__ = e36730;
var statearr_36731_36769 = state_36681;
(statearr_36731_36769[(5)] = ex__28001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36770 = state_36681;
state_36681 = G__36770;
continue;
} else {
return ret_value__27999__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto__ = function(state_36681){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto____1.call(this,state_36681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto__;
})()
;})(switch__27997__auto__,c__28578__auto__,msg_hist,msg_names,msg))
})();
var state__28580__auto__ = (function (){var statearr_36732 = f__28579__auto__.call(null);
(statearr_36732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_36732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto__,msg_hist,msg_names,msg))
);

return c__28578__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28578__auto___36833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___36833,ch){
return (function (){
var f__28579__auto__ = (function (){var switch__27997__auto__ = ((function (c__28578__auto___36833,ch){
return (function (state_36816){
var state_val_36817 = (state_36816[(1)]);
if((state_val_36817 === (1))){
var state_36816__$1 = state_36816;
var statearr_36818_36834 = state_36816__$1;
(statearr_36818_36834[(2)] = null);

(statearr_36818_36834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (2))){
var state_36816__$1 = state_36816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36816__$1,(4),ch);
} else {
if((state_val_36817 === (3))){
var inst_36814 = (state_36816[(2)]);
var state_36816__$1 = state_36816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36816__$1,inst_36814);
} else {
if((state_val_36817 === (4))){
var inst_36804 = (state_36816[(7)]);
var inst_36804__$1 = (state_36816[(2)]);
var state_36816__$1 = (function (){var statearr_36819 = state_36816;
(statearr_36819[(7)] = inst_36804__$1);

return statearr_36819;
})();
if(cljs.core.truth_(inst_36804__$1)){
var statearr_36820_36835 = state_36816__$1;
(statearr_36820_36835[(1)] = (5));

} else {
var statearr_36821_36836 = state_36816__$1;
(statearr_36821_36836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (5))){
var inst_36804 = (state_36816[(7)]);
var inst_36806 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36804);
var state_36816__$1 = state_36816;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36816__$1,(8),inst_36806);
} else {
if((state_val_36817 === (6))){
var state_36816__$1 = state_36816;
var statearr_36822_36837 = state_36816__$1;
(statearr_36822_36837[(2)] = null);

(statearr_36822_36837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (7))){
var inst_36812 = (state_36816[(2)]);
var state_36816__$1 = state_36816;
var statearr_36823_36838 = state_36816__$1;
(statearr_36823_36838[(2)] = inst_36812);

(statearr_36823_36838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36817 === (8))){
var inst_36808 = (state_36816[(2)]);
var state_36816__$1 = (function (){var statearr_36824 = state_36816;
(statearr_36824[(8)] = inst_36808);

return statearr_36824;
})();
var statearr_36825_36839 = state_36816__$1;
(statearr_36825_36839[(2)] = null);

(statearr_36825_36839[(1)] = (2));


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
});})(c__28578__auto___36833,ch))
;
return ((function (switch__27997__auto__,c__28578__auto___36833,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27998__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27998__auto____0 = (function (){
var statearr_36829 = [null,null,null,null,null,null,null,null,null];
(statearr_36829[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27998__auto__);

(statearr_36829[(1)] = (1));

return statearr_36829;
});
var figwheel$client$heads_up_plugin_$_state_machine__27998__auto____1 = (function (state_36816){
while(true){
var ret_value__27999__auto__ = (function (){try{while(true){
var result__28000__auto__ = switch__27997__auto__.call(null,state_36816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28000__auto__;
}
break;
}
}catch (e36830){if((e36830 instanceof Object)){
var ex__28001__auto__ = e36830;
var statearr_36831_36840 = state_36816;
(statearr_36831_36840[(5)] = ex__28001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36841 = state_36816;
state_36816 = G__36841;
continue;
} else {
return ret_value__27999__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27998__auto__ = function(state_36816){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27998__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27998__auto____1.call(this,state_36816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27998__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27998__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27998__auto__;
})()
;})(switch__27997__auto__,c__28578__auto___36833,ch))
})();
var state__28580__auto__ = (function (){var statearr_36832 = f__28579__auto__.call(null);
(statearr_36832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___36833);

return statearr_36832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___36833,ch))
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
return (function (state_36862){
var state_val_36863 = (state_36862[(1)]);
if((state_val_36863 === (1))){
var inst_36857 = cljs.core.async.timeout.call(null,(3000));
var state_36862__$1 = state_36862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36862__$1,(2),inst_36857);
} else {
if((state_val_36863 === (2))){
var inst_36859 = (state_36862[(2)]);
var inst_36860 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36862__$1 = (function (){var statearr_36864 = state_36862;
(statearr_36864[(7)] = inst_36859);

return statearr_36864;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36862__$1,inst_36860);
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
var statearr_36868 = [null,null,null,null,null,null,null,null];
(statearr_36868[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27998__auto__);

(statearr_36868[(1)] = (1));

return statearr_36868;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27998__auto____1 = (function (state_36862){
while(true){
var ret_value__27999__auto__ = (function (){try{while(true){
var result__28000__auto__ = switch__27997__auto__.call(null,state_36862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28000__auto__;
}
break;
}
}catch (e36869){if((e36869 instanceof Object)){
var ex__28001__auto__ = e36869;
var statearr_36870_36872 = state_36862;
(statearr_36870_36872[(5)] = ex__28001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36873 = state_36862;
state_36862 = G__36873;
continue;
} else {
return ret_value__27999__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27998__auto__ = function(state_36862){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27998__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27998__auto____1.call(this,state_36862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27998__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27998__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27998__auto__;
})()
;})(switch__27997__auto__,c__28578__auto__))
})();
var state__28580__auto__ = (function (){var statearr_36871 = f__28579__auto__.call(null);
(statearr_36871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_36871;
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
return (function (state_36896){
var state_val_36897 = (state_36896[(1)]);
if((state_val_36897 === (1))){
var inst_36890 = cljs.core.async.timeout.call(null,(2000));
var state_36896__$1 = state_36896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36896__$1,(2),inst_36890);
} else {
if((state_val_36897 === (2))){
var inst_36892 = (state_36896[(2)]);
var inst_36893 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_36894 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36893);
var state_36896__$1 = (function (){var statearr_36898 = state_36896;
(statearr_36898[(7)] = inst_36892);

return statearr_36898;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36896__$1,inst_36894);
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
var statearr_36902 = [null,null,null,null,null,null,null,null];
(statearr_36902[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto__);

(statearr_36902[(1)] = (1));

return statearr_36902;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto____1 = (function (state_36896){
while(true){
var ret_value__27999__auto__ = (function (){try{while(true){
var result__28000__auto__ = switch__27997__auto__.call(null,state_36896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28000__auto__;
}
break;
}
}catch (e36903){if((e36903 instanceof Object)){
var ex__28001__auto__ = e36903;
var statearr_36904_36906 = state_36896;
(statearr_36904_36906[(5)] = ex__28001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36907 = state_36896;
state_36896 = G__36907;
continue;
} else {
return ret_value__27999__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto__ = function(state_36896){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto____1.call(this,state_36896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto__;
})()
;})(switch__27997__auto__,c__28578__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28580__auto__ = (function (){var statearr_36905 = f__28579__auto__.call(null);
(statearr_36905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_36905;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36908){
var map__36912 = p__36908;
var map__36912__$1 = ((((!((map__36912 == null)))?((((map__36912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36912):map__36912);
var file = cljs.core.get.call(null,map__36912__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36912__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36912__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36914 = "";
var G__36914__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__36914),cljs.core.str("file "),cljs.core.str(file)].join(''):G__36914);
var G__36914__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__36914__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__36914__$1);
if(cljs.core.truth_((function (){var and__25967__auto__ = line;
if(cljs.core.truth_(and__25967__auto__)){
return column;
} else {
return and__25967__auto__;
}
})())){
return [cljs.core.str(G__36914__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__36914__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36915){
var map__36922 = p__36915;
var map__36922__$1 = ((((!((map__36922 == null)))?((((map__36922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36922):map__36922);
var ed = map__36922__$1;
var formatted_exception = cljs.core.get.call(null,map__36922__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36922__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36922__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36924_36928 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36925_36929 = null;
var count__36926_36930 = (0);
var i__36927_36931 = (0);
while(true){
if((i__36927_36931 < count__36926_36930)){
var msg_36932 = cljs.core._nth.call(null,chunk__36925_36929,i__36927_36931);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36932);

var G__36933 = seq__36924_36928;
var G__36934 = chunk__36925_36929;
var G__36935 = count__36926_36930;
var G__36936 = (i__36927_36931 + (1));
seq__36924_36928 = G__36933;
chunk__36925_36929 = G__36934;
count__36926_36930 = G__36935;
i__36927_36931 = G__36936;
continue;
} else {
var temp__4657__auto___36937 = cljs.core.seq.call(null,seq__36924_36928);
if(temp__4657__auto___36937){
var seq__36924_36938__$1 = temp__4657__auto___36937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36924_36938__$1)){
var c__26790__auto___36939 = cljs.core.chunk_first.call(null,seq__36924_36938__$1);
var G__36940 = cljs.core.chunk_rest.call(null,seq__36924_36938__$1);
var G__36941 = c__26790__auto___36939;
var G__36942 = cljs.core.count.call(null,c__26790__auto___36939);
var G__36943 = (0);
seq__36924_36928 = G__36940;
chunk__36925_36929 = G__36941;
count__36926_36930 = G__36942;
i__36927_36931 = G__36943;
continue;
} else {
var msg_36944 = cljs.core.first.call(null,seq__36924_36938__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36944);

var G__36945 = cljs.core.next.call(null,seq__36924_36938__$1);
var G__36946 = null;
var G__36947 = (0);
var G__36948 = (0);
seq__36924_36928 = G__36945;
chunk__36925_36929 = G__36946;
count__36926_36930 = G__36947;
i__36927_36931 = G__36948;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36949){
var map__36952 = p__36949;
var map__36952__$1 = ((((!((map__36952 == null)))?((((map__36952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36952):map__36952);
var w = map__36952__$1;
var message = cljs.core.get.call(null,map__36952__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__36964 = cljs.core.seq.call(null,plugins);
var chunk__36965 = null;
var count__36966 = (0);
var i__36967 = (0);
while(true){
if((i__36967 < count__36966)){
var vec__36968 = cljs.core._nth.call(null,chunk__36965,i__36967);
var k = cljs.core.nth.call(null,vec__36968,(0),null);
var plugin = cljs.core.nth.call(null,vec__36968,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36974 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36964,chunk__36965,count__36966,i__36967,pl_36974,vec__36968,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36974.call(null,msg_hist);
});})(seq__36964,chunk__36965,count__36966,i__36967,pl_36974,vec__36968,k,plugin))
);
} else {
}

var G__36975 = seq__36964;
var G__36976 = chunk__36965;
var G__36977 = count__36966;
var G__36978 = (i__36967 + (1));
seq__36964 = G__36975;
chunk__36965 = G__36976;
count__36966 = G__36977;
i__36967 = G__36978;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36964);
if(temp__4657__auto__){
var seq__36964__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36964__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__36964__$1);
var G__36979 = cljs.core.chunk_rest.call(null,seq__36964__$1);
var G__36980 = c__26790__auto__;
var G__36981 = cljs.core.count.call(null,c__26790__auto__);
var G__36982 = (0);
seq__36964 = G__36979;
chunk__36965 = G__36980;
count__36966 = G__36981;
i__36967 = G__36982;
continue;
} else {
var vec__36971 = cljs.core.first.call(null,seq__36964__$1);
var k = cljs.core.nth.call(null,vec__36971,(0),null);
var plugin = cljs.core.nth.call(null,vec__36971,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36983 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36964,chunk__36965,count__36966,i__36967,pl_36983,vec__36971,k,plugin,seq__36964__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36983.call(null,msg_hist);
});})(seq__36964,chunk__36965,count__36966,i__36967,pl_36983,vec__36971,k,plugin,seq__36964__$1,temp__4657__auto__))
);
} else {
}

var G__36984 = cljs.core.next.call(null,seq__36964__$1);
var G__36985 = null;
var G__36986 = (0);
var G__36987 = (0);
seq__36964 = G__36984;
chunk__36965 = G__36985;
count__36966 = G__36986;
i__36967 = G__36987;
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
var args36988 = [];
var len__27054__auto___36995 = arguments.length;
var i__27055__auto___36996 = (0);
while(true){
if((i__27055__auto___36996 < len__27054__auto___36995)){
args36988.push((arguments[i__27055__auto___36996]));

var G__36997 = (i__27055__auto___36996 + (1));
i__27055__auto___36996 = G__36997;
continue;
} else {
}
break;
}

var G__36990 = args36988.length;
switch (G__36990) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36988.length)].join('')));

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

var seq__36991_36999 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36992_37000 = null;
var count__36993_37001 = (0);
var i__36994_37002 = (0);
while(true){
if((i__36994_37002 < count__36993_37001)){
var msg_37003 = cljs.core._nth.call(null,chunk__36992_37000,i__36994_37002);
figwheel.client.socket.handle_incoming_message.call(null,msg_37003);

var G__37004 = seq__36991_36999;
var G__37005 = chunk__36992_37000;
var G__37006 = count__36993_37001;
var G__37007 = (i__36994_37002 + (1));
seq__36991_36999 = G__37004;
chunk__36992_37000 = G__37005;
count__36993_37001 = G__37006;
i__36994_37002 = G__37007;
continue;
} else {
var temp__4657__auto___37008 = cljs.core.seq.call(null,seq__36991_36999);
if(temp__4657__auto___37008){
var seq__36991_37009__$1 = temp__4657__auto___37008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36991_37009__$1)){
var c__26790__auto___37010 = cljs.core.chunk_first.call(null,seq__36991_37009__$1);
var G__37011 = cljs.core.chunk_rest.call(null,seq__36991_37009__$1);
var G__37012 = c__26790__auto___37010;
var G__37013 = cljs.core.count.call(null,c__26790__auto___37010);
var G__37014 = (0);
seq__36991_36999 = G__37011;
chunk__36992_37000 = G__37012;
count__36993_37001 = G__37013;
i__36994_37002 = G__37014;
continue;
} else {
var msg_37015 = cljs.core.first.call(null,seq__36991_37009__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37015);

var G__37016 = cljs.core.next.call(null,seq__36991_37009__$1);
var G__37017 = null;
var G__37018 = (0);
var G__37019 = (0);
seq__36991_36999 = G__37016;
chunk__36992_37000 = G__37017;
count__36993_37001 = G__37018;
i__36994_37002 = G__37019;
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
var len__27054__auto___37024 = arguments.length;
var i__27055__auto___37025 = (0);
while(true){
if((i__27055__auto___37025 < len__27054__auto___37024)){
args__27061__auto__.push((arguments[i__27055__auto___37025]));

var G__37026 = (i__27055__auto___37025 + (1));
i__27055__auto___37025 = G__37026;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37021){
var map__37022 = p__37021;
var map__37022__$1 = ((((!((map__37022 == null)))?((((map__37022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37022):map__37022);
var opts = map__37022__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37020){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37020));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37028){if((e37028 instanceof Error)){
var e = e37028;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37028;

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
return (function (p__37032){
var map__37033 = p__37032;
var map__37033__$1 = ((((!((map__37033 == null)))?((((map__37033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37033):map__37033);
var msg_name = cljs.core.get.call(null,map__37033__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1497204733790