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
var args36088 = [];
var len__27054__auto___36091 = arguments.length;
var i__27055__auto___36092 = (0);
while(true){
if((i__27055__auto___36092 < len__27054__auto___36091)){
args36088.push((arguments[i__27055__auto___36092]));

var G__36093 = (i__27055__auto___36092 + (1));
i__27055__auto___36092 = G__36093;
continue;
} else {
}
break;
}

var G__36090 = args36088.length;
switch (G__36090) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36088.length)].join('')));

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
var len__27054__auto___36096 = arguments.length;
var i__27055__auto___36097 = (0);
while(true){
if((i__27055__auto___36097 < len__27054__auto___36096)){
args__27061__auto__.push((arguments[i__27055__auto___36097]));

var G__36098 = (i__27055__auto___36097 + (1));
i__27055__auto___36097 = G__36098;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36095){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36095));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27061__auto__ = [];
var len__27054__auto___36100 = arguments.length;
var i__27055__auto___36101 = (0);
while(true){
if((i__27055__auto___36101 < len__27054__auto___36100)){
args__27061__auto__.push((arguments[i__27055__auto___36101]));

var G__36102 = (i__27055__auto___36101 + (1));
i__27055__auto___36101 = G__36102;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36099){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36099));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36103){
var map__36106 = p__36103;
var map__36106__$1 = ((((!((map__36106 == null)))?((((map__36106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36106):map__36106);
var message = cljs.core.get.call(null,map__36106__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36106__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28578__auto___36268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___36268,ch){
return (function (){
var f__28579__auto__ = (function (){var switch__27997__auto__ = ((function (c__28578__auto___36268,ch){
return (function (state_36237){
var state_val_36238 = (state_36237[(1)]);
if((state_val_36238 === (7))){
var inst_36233 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
var statearr_36239_36269 = state_36237__$1;
(statearr_36239_36269[(2)] = inst_36233);

(statearr_36239_36269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (1))){
var state_36237__$1 = state_36237;
var statearr_36240_36270 = state_36237__$1;
(statearr_36240_36270[(2)] = null);

(statearr_36240_36270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (4))){
var inst_36190 = (state_36237[(7)]);
var inst_36190__$1 = (state_36237[(2)]);
var state_36237__$1 = (function (){var statearr_36241 = state_36237;
(statearr_36241[(7)] = inst_36190__$1);

return statearr_36241;
})();
if(cljs.core.truth_(inst_36190__$1)){
var statearr_36242_36271 = state_36237__$1;
(statearr_36242_36271[(1)] = (5));

} else {
var statearr_36243_36272 = state_36237__$1;
(statearr_36243_36272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (15))){
var inst_36197 = (state_36237[(8)]);
var inst_36212 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36197);
var inst_36213 = cljs.core.first.call(null,inst_36212);
var inst_36214 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36213);
var inst_36215 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36214)].join('');
var inst_36216 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36215);
var state_36237__$1 = state_36237;
var statearr_36244_36273 = state_36237__$1;
(statearr_36244_36273[(2)] = inst_36216);

(statearr_36244_36273[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (13))){
var inst_36221 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
var statearr_36245_36274 = state_36237__$1;
(statearr_36245_36274[(2)] = inst_36221);

(statearr_36245_36274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (6))){
var state_36237__$1 = state_36237;
var statearr_36246_36275 = state_36237__$1;
(statearr_36246_36275[(2)] = null);

(statearr_36246_36275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (17))){
var inst_36219 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
var statearr_36247_36276 = state_36237__$1;
(statearr_36247_36276[(2)] = inst_36219);

(statearr_36247_36276[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (3))){
var inst_36235 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36237__$1,inst_36235);
} else {
if((state_val_36238 === (12))){
var inst_36196 = (state_36237[(9)]);
var inst_36210 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36196,opts);
var state_36237__$1 = state_36237;
if(cljs.core.truth_(inst_36210)){
var statearr_36248_36277 = state_36237__$1;
(statearr_36248_36277[(1)] = (15));

} else {
var statearr_36249_36278 = state_36237__$1;
(statearr_36249_36278[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (2))){
var state_36237__$1 = state_36237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36237__$1,(4),ch);
} else {
if((state_val_36238 === (11))){
var inst_36197 = (state_36237[(8)]);
var inst_36202 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36203 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36197);
var inst_36204 = cljs.core.async.timeout.call(null,(1000));
var inst_36205 = [inst_36203,inst_36204];
var inst_36206 = (new cljs.core.PersistentVector(null,2,(5),inst_36202,inst_36205,null));
var state_36237__$1 = state_36237;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36237__$1,(14),inst_36206);
} else {
if((state_val_36238 === (9))){
var inst_36197 = (state_36237[(8)]);
var inst_36223 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36224 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36197);
var inst_36225 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36224);
var inst_36226 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36225)].join('');
var inst_36227 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36226);
var state_36237__$1 = (function (){var statearr_36250 = state_36237;
(statearr_36250[(10)] = inst_36223);

return statearr_36250;
})();
var statearr_36251_36279 = state_36237__$1;
(statearr_36251_36279[(2)] = inst_36227);

(statearr_36251_36279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (5))){
var inst_36190 = (state_36237[(7)]);
var inst_36192 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36193 = (new cljs.core.PersistentArrayMap(null,2,inst_36192,null));
var inst_36194 = (new cljs.core.PersistentHashSet(null,inst_36193,null));
var inst_36195 = figwheel.client.focus_msgs.call(null,inst_36194,inst_36190);
var inst_36196 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36195);
var inst_36197 = cljs.core.first.call(null,inst_36195);
var inst_36198 = figwheel.client.autoload_QMARK_.call(null);
var state_36237__$1 = (function (){var statearr_36252 = state_36237;
(statearr_36252[(9)] = inst_36196);

(statearr_36252[(8)] = inst_36197);

return statearr_36252;
})();
if(cljs.core.truth_(inst_36198)){
var statearr_36253_36280 = state_36237__$1;
(statearr_36253_36280[(1)] = (8));

} else {
var statearr_36254_36281 = state_36237__$1;
(statearr_36254_36281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (14))){
var inst_36208 = (state_36237[(2)]);
var state_36237__$1 = state_36237;
var statearr_36255_36282 = state_36237__$1;
(statearr_36255_36282[(2)] = inst_36208);

(statearr_36255_36282[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (16))){
var state_36237__$1 = state_36237;
var statearr_36256_36283 = state_36237__$1;
(statearr_36256_36283[(2)] = null);

(statearr_36256_36283[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (10))){
var inst_36229 = (state_36237[(2)]);
var state_36237__$1 = (function (){var statearr_36257 = state_36237;
(statearr_36257[(11)] = inst_36229);

return statearr_36257;
})();
var statearr_36258_36284 = state_36237__$1;
(statearr_36258_36284[(2)] = null);

(statearr_36258_36284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36238 === (8))){
var inst_36196 = (state_36237[(9)]);
var inst_36200 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36196,opts);
var state_36237__$1 = state_36237;
if(cljs.core.truth_(inst_36200)){
var statearr_36259_36285 = state_36237__$1;
(statearr_36259_36285[(1)] = (11));

} else {
var statearr_36260_36286 = state_36237__$1;
(statearr_36260_36286[(1)] = (12));

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
});})(c__28578__auto___36268,ch))
;
return ((function (switch__27997__auto__,c__28578__auto___36268,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27998__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27998__auto____0 = (function (){
var statearr_36264 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36264[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27998__auto__);

(statearr_36264[(1)] = (1));

return statearr_36264;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27998__auto____1 = (function (state_36237){
while(true){
var ret_value__27999__auto__ = (function (){try{while(true){
var result__28000__auto__ = switch__27997__auto__.call(null,state_36237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28000__auto__;
}
break;
}
}catch (e36265){if((e36265 instanceof Object)){
var ex__28001__auto__ = e36265;
var statearr_36266_36287 = state_36237;
(statearr_36266_36287[(5)] = ex__28001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36288 = state_36237;
state_36237 = G__36288;
continue;
} else {
return ret_value__27999__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27998__auto__ = function(state_36237){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27998__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27998__auto____1.call(this,state_36237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27998__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27998__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27998__auto__;
})()
;})(switch__27997__auto__,c__28578__auto___36268,ch))
})();
var state__28580__auto__ = (function (){var statearr_36267 = f__28579__auto__.call(null);
(statearr_36267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___36268);

return statearr_36267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___36268,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36289_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36289_SHARP_));
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
var base_path_36292 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36292){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36291){if((e36291 instanceof Error)){
var e = e36291;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36292], null));
} else {
var e = e36291;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36292))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36293){
var map__36302 = p__36293;
var map__36302__$1 = ((((!((map__36302 == null)))?((((map__36302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36302):map__36302);
var opts = map__36302__$1;
var build_id = cljs.core.get.call(null,map__36302__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36302,map__36302__$1,opts,build_id){
return (function (p__36304){
var vec__36305 = p__36304;
var seq__36306 = cljs.core.seq.call(null,vec__36305);
var first__36307 = cljs.core.first.call(null,seq__36306);
var seq__36306__$1 = cljs.core.next.call(null,seq__36306);
var map__36308 = first__36307;
var map__36308__$1 = ((((!((map__36308 == null)))?((((map__36308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36308):map__36308);
var msg = map__36308__$1;
var msg_name = cljs.core.get.call(null,map__36308__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36306__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36305,seq__36306,first__36307,seq__36306__$1,map__36308,map__36308__$1,msg,msg_name,_,map__36302,map__36302__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36305,seq__36306,first__36307,seq__36306__$1,map__36308,map__36308__$1,msg,msg_name,_,map__36302,map__36302__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36302,map__36302__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36316){
var vec__36317 = p__36316;
var seq__36318 = cljs.core.seq.call(null,vec__36317);
var first__36319 = cljs.core.first.call(null,seq__36318);
var seq__36318__$1 = cljs.core.next.call(null,seq__36318);
var map__36320 = first__36319;
var map__36320__$1 = ((((!((map__36320 == null)))?((((map__36320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36320):map__36320);
var msg = map__36320__$1;
var msg_name = cljs.core.get.call(null,map__36320__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36318__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36322){
var map__36334 = p__36322;
var map__36334__$1 = ((((!((map__36334 == null)))?((((map__36334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36334):map__36334);
var on_compile_warning = cljs.core.get.call(null,map__36334__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36334__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36334,map__36334__$1,on_compile_warning,on_compile_fail){
return (function (p__36336){
var vec__36337 = p__36336;
var seq__36338 = cljs.core.seq.call(null,vec__36337);
var first__36339 = cljs.core.first.call(null,seq__36338);
var seq__36338__$1 = cljs.core.next.call(null,seq__36338);
var map__36340 = first__36339;
var map__36340__$1 = ((((!((map__36340 == null)))?((((map__36340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36340):map__36340);
var msg = map__36340__$1;
var msg_name = cljs.core.get.call(null,map__36340__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36338__$1;
var pred__36342 = cljs.core._EQ_;
var expr__36343 = msg_name;
if(cljs.core.truth_(pred__36342.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36343))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36342.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36343))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36334,map__36334__$1,on_compile_warning,on_compile_fail))
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
return (function (state_36571){
var state_val_36572 = (state_36571[(1)]);
if((state_val_36572 === (7))){
var inst_36491 = (state_36571[(2)]);
var state_36571__$1 = state_36571;
if(cljs.core.truth_(inst_36491)){
var statearr_36573_36623 = state_36571__$1;
(statearr_36573_36623[(1)] = (8));

} else {
var statearr_36574_36624 = state_36571__$1;
(statearr_36574_36624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (20))){
var inst_36565 = (state_36571[(2)]);
var state_36571__$1 = state_36571;
var statearr_36575_36625 = state_36571__$1;
(statearr_36575_36625[(2)] = inst_36565);

(statearr_36575_36625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (27))){
var inst_36561 = (state_36571[(2)]);
var state_36571__$1 = state_36571;
var statearr_36576_36626 = state_36571__$1;
(statearr_36576_36626[(2)] = inst_36561);

(statearr_36576_36626[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (1))){
var inst_36484 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36571__$1 = state_36571;
if(cljs.core.truth_(inst_36484)){
var statearr_36577_36627 = state_36571__$1;
(statearr_36577_36627[(1)] = (2));

} else {
var statearr_36578_36628 = state_36571__$1;
(statearr_36578_36628[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (24))){
var inst_36563 = (state_36571[(2)]);
var state_36571__$1 = state_36571;
var statearr_36579_36629 = state_36571__$1;
(statearr_36579_36629[(2)] = inst_36563);

(statearr_36579_36629[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (4))){
var inst_36569 = (state_36571[(2)]);
var state_36571__$1 = state_36571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36571__$1,inst_36569);
} else {
if((state_val_36572 === (15))){
var inst_36567 = (state_36571[(2)]);
var state_36571__$1 = state_36571;
var statearr_36580_36630 = state_36571__$1;
(statearr_36580_36630[(2)] = inst_36567);

(statearr_36580_36630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (21))){
var inst_36520 = (state_36571[(2)]);
var inst_36521 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36522 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36521);
var state_36571__$1 = (function (){var statearr_36581 = state_36571;
(statearr_36581[(7)] = inst_36520);

return statearr_36581;
})();
var statearr_36582_36631 = state_36571__$1;
(statearr_36582_36631[(2)] = inst_36522);

(statearr_36582_36631[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (31))){
var inst_36550 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36571__$1 = state_36571;
if(cljs.core.truth_(inst_36550)){
var statearr_36583_36632 = state_36571__$1;
(statearr_36583_36632[(1)] = (34));

} else {
var statearr_36584_36633 = state_36571__$1;
(statearr_36584_36633[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (32))){
var inst_36559 = (state_36571[(2)]);
var state_36571__$1 = state_36571;
var statearr_36585_36634 = state_36571__$1;
(statearr_36585_36634[(2)] = inst_36559);

(statearr_36585_36634[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (33))){
var inst_36546 = (state_36571[(2)]);
var inst_36547 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36548 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36547);
var state_36571__$1 = (function (){var statearr_36586 = state_36571;
(statearr_36586[(8)] = inst_36546);

return statearr_36586;
})();
var statearr_36587_36635 = state_36571__$1;
(statearr_36587_36635[(2)] = inst_36548);

(statearr_36587_36635[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (13))){
var inst_36505 = figwheel.client.heads_up.clear.call(null);
var state_36571__$1 = state_36571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36571__$1,(16),inst_36505);
} else {
if((state_val_36572 === (22))){
var inst_36526 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36527 = figwheel.client.heads_up.append_warning_message.call(null,inst_36526);
var state_36571__$1 = state_36571;
var statearr_36588_36636 = state_36571__$1;
(statearr_36588_36636[(2)] = inst_36527);

(statearr_36588_36636[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (36))){
var inst_36557 = (state_36571[(2)]);
var state_36571__$1 = state_36571;
var statearr_36589_36637 = state_36571__$1;
(statearr_36589_36637[(2)] = inst_36557);

(statearr_36589_36637[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (29))){
var inst_36537 = (state_36571[(2)]);
var inst_36538 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36539 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36538);
var state_36571__$1 = (function (){var statearr_36590 = state_36571;
(statearr_36590[(9)] = inst_36537);

return statearr_36590;
})();
var statearr_36591_36638 = state_36571__$1;
(statearr_36591_36638[(2)] = inst_36539);

(statearr_36591_36638[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (6))){
var inst_36486 = (state_36571[(10)]);
var state_36571__$1 = state_36571;
var statearr_36592_36639 = state_36571__$1;
(statearr_36592_36639[(2)] = inst_36486);

(statearr_36592_36639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (28))){
var inst_36533 = (state_36571[(2)]);
var inst_36534 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36535 = figwheel.client.heads_up.display_warning.call(null,inst_36534);
var state_36571__$1 = (function (){var statearr_36593 = state_36571;
(statearr_36593[(11)] = inst_36533);

return statearr_36593;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36571__$1,(29),inst_36535);
} else {
if((state_val_36572 === (25))){
var inst_36531 = figwheel.client.heads_up.clear.call(null);
var state_36571__$1 = state_36571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36571__$1,(28),inst_36531);
} else {
if((state_val_36572 === (34))){
var inst_36552 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36571__$1 = state_36571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36571__$1,(37),inst_36552);
} else {
if((state_val_36572 === (17))){
var inst_36511 = (state_36571[(2)]);
var inst_36512 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36513 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36512);
var state_36571__$1 = (function (){var statearr_36594 = state_36571;
(statearr_36594[(12)] = inst_36511);

return statearr_36594;
})();
var statearr_36595_36640 = state_36571__$1;
(statearr_36595_36640[(2)] = inst_36513);

(statearr_36595_36640[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (3))){
var inst_36503 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36571__$1 = state_36571;
if(cljs.core.truth_(inst_36503)){
var statearr_36596_36641 = state_36571__$1;
(statearr_36596_36641[(1)] = (13));

} else {
var statearr_36597_36642 = state_36571__$1;
(statearr_36597_36642[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (12))){
var inst_36499 = (state_36571[(2)]);
var state_36571__$1 = state_36571;
var statearr_36598_36643 = state_36571__$1;
(statearr_36598_36643[(2)] = inst_36499);

(statearr_36598_36643[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (2))){
var inst_36486 = (state_36571[(10)]);
var inst_36486__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36571__$1 = (function (){var statearr_36599 = state_36571;
(statearr_36599[(10)] = inst_36486__$1);

return statearr_36599;
})();
if(cljs.core.truth_(inst_36486__$1)){
var statearr_36600_36644 = state_36571__$1;
(statearr_36600_36644[(1)] = (5));

} else {
var statearr_36601_36645 = state_36571__$1;
(statearr_36601_36645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (23))){
var inst_36529 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36571__$1 = state_36571;
if(cljs.core.truth_(inst_36529)){
var statearr_36602_36646 = state_36571__$1;
(statearr_36602_36646[(1)] = (25));

} else {
var statearr_36603_36647 = state_36571__$1;
(statearr_36603_36647[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (35))){
var state_36571__$1 = state_36571;
var statearr_36604_36648 = state_36571__$1;
(statearr_36604_36648[(2)] = null);

(statearr_36604_36648[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (19))){
var inst_36524 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36571__$1 = state_36571;
if(cljs.core.truth_(inst_36524)){
var statearr_36605_36649 = state_36571__$1;
(statearr_36605_36649[(1)] = (22));

} else {
var statearr_36606_36650 = state_36571__$1;
(statearr_36606_36650[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (11))){
var inst_36495 = (state_36571[(2)]);
var state_36571__$1 = state_36571;
var statearr_36607_36651 = state_36571__$1;
(statearr_36607_36651[(2)] = inst_36495);

(statearr_36607_36651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (9))){
var inst_36497 = figwheel.client.heads_up.clear.call(null);
var state_36571__$1 = state_36571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36571__$1,(12),inst_36497);
} else {
if((state_val_36572 === (5))){
var inst_36488 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36571__$1 = state_36571;
var statearr_36608_36652 = state_36571__$1;
(statearr_36608_36652[(2)] = inst_36488);

(statearr_36608_36652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (14))){
var inst_36515 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36571__$1 = state_36571;
if(cljs.core.truth_(inst_36515)){
var statearr_36609_36653 = state_36571__$1;
(statearr_36609_36653[(1)] = (18));

} else {
var statearr_36610_36654 = state_36571__$1;
(statearr_36610_36654[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (26))){
var inst_36541 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36571__$1 = state_36571;
if(cljs.core.truth_(inst_36541)){
var statearr_36611_36655 = state_36571__$1;
(statearr_36611_36655[(1)] = (30));

} else {
var statearr_36612_36656 = state_36571__$1;
(statearr_36612_36656[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (16))){
var inst_36507 = (state_36571[(2)]);
var inst_36508 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36509 = figwheel.client.heads_up.display_exception.call(null,inst_36508);
var state_36571__$1 = (function (){var statearr_36613 = state_36571;
(statearr_36613[(13)] = inst_36507);

return statearr_36613;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36571__$1,(17),inst_36509);
} else {
if((state_val_36572 === (30))){
var inst_36543 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36544 = figwheel.client.heads_up.display_warning.call(null,inst_36543);
var state_36571__$1 = state_36571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36571__$1,(33),inst_36544);
} else {
if((state_val_36572 === (10))){
var inst_36501 = (state_36571[(2)]);
var state_36571__$1 = state_36571;
var statearr_36614_36657 = state_36571__$1;
(statearr_36614_36657[(2)] = inst_36501);

(statearr_36614_36657[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (18))){
var inst_36517 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36518 = figwheel.client.heads_up.display_exception.call(null,inst_36517);
var state_36571__$1 = state_36571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36571__$1,(21),inst_36518);
} else {
if((state_val_36572 === (37))){
var inst_36554 = (state_36571[(2)]);
var state_36571__$1 = state_36571;
var statearr_36615_36658 = state_36571__$1;
(statearr_36615_36658[(2)] = inst_36554);

(statearr_36615_36658[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36572 === (8))){
var inst_36493 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36571__$1 = state_36571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36571__$1,(11),inst_36493);
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
var statearr_36619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36619[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto__);

(statearr_36619[(1)] = (1));

return statearr_36619;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto____1 = (function (state_36571){
while(true){
var ret_value__27999__auto__ = (function (){try{while(true){
var result__28000__auto__ = switch__27997__auto__.call(null,state_36571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28000__auto__;
}
break;
}
}catch (e36620){if((e36620 instanceof Object)){
var ex__28001__auto__ = e36620;
var statearr_36621_36659 = state_36571;
(statearr_36621_36659[(5)] = ex__28001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36660 = state_36571;
state_36571 = G__36660;
continue;
} else {
return ret_value__27999__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto__ = function(state_36571){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto____1.call(this,state_36571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27998__auto__;
})()
;})(switch__27997__auto__,c__28578__auto__,msg_hist,msg_names,msg))
})();
var state__28580__auto__ = (function (){var statearr_36622 = f__28579__auto__.call(null);
(statearr_36622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_36622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto__,msg_hist,msg_names,msg))
);

return c__28578__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28578__auto___36723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___36723,ch){
return (function (){
var f__28579__auto__ = (function (){var switch__27997__auto__ = ((function (c__28578__auto___36723,ch){
return (function (state_36706){
var state_val_36707 = (state_36706[(1)]);
if((state_val_36707 === (1))){
var state_36706__$1 = state_36706;
var statearr_36708_36724 = state_36706__$1;
(statearr_36708_36724[(2)] = null);

(statearr_36708_36724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (2))){
var state_36706__$1 = state_36706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36706__$1,(4),ch);
} else {
if((state_val_36707 === (3))){
var inst_36704 = (state_36706[(2)]);
var state_36706__$1 = state_36706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36706__$1,inst_36704);
} else {
if((state_val_36707 === (4))){
var inst_36694 = (state_36706[(7)]);
var inst_36694__$1 = (state_36706[(2)]);
var state_36706__$1 = (function (){var statearr_36709 = state_36706;
(statearr_36709[(7)] = inst_36694__$1);

return statearr_36709;
})();
if(cljs.core.truth_(inst_36694__$1)){
var statearr_36710_36725 = state_36706__$1;
(statearr_36710_36725[(1)] = (5));

} else {
var statearr_36711_36726 = state_36706__$1;
(statearr_36711_36726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (5))){
var inst_36694 = (state_36706[(7)]);
var inst_36696 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36694);
var state_36706__$1 = state_36706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36706__$1,(8),inst_36696);
} else {
if((state_val_36707 === (6))){
var state_36706__$1 = state_36706;
var statearr_36712_36727 = state_36706__$1;
(statearr_36712_36727[(2)] = null);

(statearr_36712_36727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (7))){
var inst_36702 = (state_36706[(2)]);
var state_36706__$1 = state_36706;
var statearr_36713_36728 = state_36706__$1;
(statearr_36713_36728[(2)] = inst_36702);

(statearr_36713_36728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36707 === (8))){
var inst_36698 = (state_36706[(2)]);
var state_36706__$1 = (function (){var statearr_36714 = state_36706;
(statearr_36714[(8)] = inst_36698);

return statearr_36714;
})();
var statearr_36715_36729 = state_36706__$1;
(statearr_36715_36729[(2)] = null);

(statearr_36715_36729[(1)] = (2));


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
});})(c__28578__auto___36723,ch))
;
return ((function (switch__27997__auto__,c__28578__auto___36723,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27998__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27998__auto____0 = (function (){
var statearr_36719 = [null,null,null,null,null,null,null,null,null];
(statearr_36719[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27998__auto__);

(statearr_36719[(1)] = (1));

return statearr_36719;
});
var figwheel$client$heads_up_plugin_$_state_machine__27998__auto____1 = (function (state_36706){
while(true){
var ret_value__27999__auto__ = (function (){try{while(true){
var result__28000__auto__ = switch__27997__auto__.call(null,state_36706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28000__auto__;
}
break;
}
}catch (e36720){if((e36720 instanceof Object)){
var ex__28001__auto__ = e36720;
var statearr_36721_36730 = state_36706;
(statearr_36721_36730[(5)] = ex__28001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36731 = state_36706;
state_36706 = G__36731;
continue;
} else {
return ret_value__27999__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27998__auto__ = function(state_36706){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27998__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27998__auto____1.call(this,state_36706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27998__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27998__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27998__auto__;
})()
;})(switch__27997__auto__,c__28578__auto___36723,ch))
})();
var state__28580__auto__ = (function (){var statearr_36722 = f__28579__auto__.call(null);
(statearr_36722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___36723);

return statearr_36722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___36723,ch))
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
return (function (state_36752){
var state_val_36753 = (state_36752[(1)]);
if((state_val_36753 === (1))){
var inst_36747 = cljs.core.async.timeout.call(null,(3000));
var state_36752__$1 = state_36752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36752__$1,(2),inst_36747);
} else {
if((state_val_36753 === (2))){
var inst_36749 = (state_36752[(2)]);
var inst_36750 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36752__$1 = (function (){var statearr_36754 = state_36752;
(statearr_36754[(7)] = inst_36749);

return statearr_36754;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36752__$1,inst_36750);
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
var statearr_36758 = [null,null,null,null,null,null,null,null];
(statearr_36758[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27998__auto__);

(statearr_36758[(1)] = (1));

return statearr_36758;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27998__auto____1 = (function (state_36752){
while(true){
var ret_value__27999__auto__ = (function (){try{while(true){
var result__28000__auto__ = switch__27997__auto__.call(null,state_36752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28000__auto__;
}
break;
}
}catch (e36759){if((e36759 instanceof Object)){
var ex__28001__auto__ = e36759;
var statearr_36760_36762 = state_36752;
(statearr_36760_36762[(5)] = ex__28001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36763 = state_36752;
state_36752 = G__36763;
continue;
} else {
return ret_value__27999__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27998__auto__ = function(state_36752){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27998__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27998__auto____1.call(this,state_36752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27998__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27998__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27998__auto__;
})()
;})(switch__27997__auto__,c__28578__auto__))
})();
var state__28580__auto__ = (function (){var statearr_36761 = f__28579__auto__.call(null);
(statearr_36761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_36761;
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
return (function (state_36786){
var state_val_36787 = (state_36786[(1)]);
if((state_val_36787 === (1))){
var inst_36780 = cljs.core.async.timeout.call(null,(2000));
var state_36786__$1 = state_36786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36786__$1,(2),inst_36780);
} else {
if((state_val_36787 === (2))){
var inst_36782 = (state_36786[(2)]);
var inst_36783 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_36784 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36783);
var state_36786__$1 = (function (){var statearr_36788 = state_36786;
(statearr_36788[(7)] = inst_36782);

return statearr_36788;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36786__$1,inst_36784);
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
var statearr_36792 = [null,null,null,null,null,null,null,null];
(statearr_36792[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto__);

(statearr_36792[(1)] = (1));

return statearr_36792;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto____1 = (function (state_36786){
while(true){
var ret_value__27999__auto__ = (function (){try{while(true){
var result__28000__auto__ = switch__27997__auto__.call(null,state_36786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28000__auto__;
}
break;
}
}catch (e36793){if((e36793 instanceof Object)){
var ex__28001__auto__ = e36793;
var statearr_36794_36796 = state_36786;
(statearr_36794_36796[(5)] = ex__28001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36797 = state_36786;
state_36786 = G__36797;
continue;
} else {
return ret_value__27999__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto__ = function(state_36786){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto____1.call(this,state_36786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27998__auto__;
})()
;})(switch__27997__auto__,c__28578__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28580__auto__ = (function (){var statearr_36795 = f__28579__auto__.call(null);
(statearr_36795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_36795;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36798){
var map__36802 = p__36798;
var map__36802__$1 = ((((!((map__36802 == null)))?((((map__36802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36802):map__36802);
var file = cljs.core.get.call(null,map__36802__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36802__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36802__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36804 = "";
var G__36804__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__36804),cljs.core.str("file "),cljs.core.str(file)].join(''):G__36804);
var G__36804__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__36804__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__36804__$1);
if(cljs.core.truth_((function (){var and__25967__auto__ = line;
if(cljs.core.truth_(and__25967__auto__)){
return column;
} else {
return and__25967__auto__;
}
})())){
return [cljs.core.str(G__36804__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__36804__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36805){
var map__36812 = p__36805;
var map__36812__$1 = ((((!((map__36812 == null)))?((((map__36812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36812):map__36812);
var ed = map__36812__$1;
var formatted_exception = cljs.core.get.call(null,map__36812__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36812__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36812__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36814_36818 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36815_36819 = null;
var count__36816_36820 = (0);
var i__36817_36821 = (0);
while(true){
if((i__36817_36821 < count__36816_36820)){
var msg_36822 = cljs.core._nth.call(null,chunk__36815_36819,i__36817_36821);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36822);

var G__36823 = seq__36814_36818;
var G__36824 = chunk__36815_36819;
var G__36825 = count__36816_36820;
var G__36826 = (i__36817_36821 + (1));
seq__36814_36818 = G__36823;
chunk__36815_36819 = G__36824;
count__36816_36820 = G__36825;
i__36817_36821 = G__36826;
continue;
} else {
var temp__4657__auto___36827 = cljs.core.seq.call(null,seq__36814_36818);
if(temp__4657__auto___36827){
var seq__36814_36828__$1 = temp__4657__auto___36827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36814_36828__$1)){
var c__26790__auto___36829 = cljs.core.chunk_first.call(null,seq__36814_36828__$1);
var G__36830 = cljs.core.chunk_rest.call(null,seq__36814_36828__$1);
var G__36831 = c__26790__auto___36829;
var G__36832 = cljs.core.count.call(null,c__26790__auto___36829);
var G__36833 = (0);
seq__36814_36818 = G__36830;
chunk__36815_36819 = G__36831;
count__36816_36820 = G__36832;
i__36817_36821 = G__36833;
continue;
} else {
var msg_36834 = cljs.core.first.call(null,seq__36814_36828__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36834);

var G__36835 = cljs.core.next.call(null,seq__36814_36828__$1);
var G__36836 = null;
var G__36837 = (0);
var G__36838 = (0);
seq__36814_36818 = G__36835;
chunk__36815_36819 = G__36836;
count__36816_36820 = G__36837;
i__36817_36821 = G__36838;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36839){
var map__36842 = p__36839;
var map__36842__$1 = ((((!((map__36842 == null)))?((((map__36842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36842):map__36842);
var w = map__36842__$1;
var message = cljs.core.get.call(null,map__36842__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__36854 = cljs.core.seq.call(null,plugins);
var chunk__36855 = null;
var count__36856 = (0);
var i__36857 = (0);
while(true){
if((i__36857 < count__36856)){
var vec__36858 = cljs.core._nth.call(null,chunk__36855,i__36857);
var k = cljs.core.nth.call(null,vec__36858,(0),null);
var plugin = cljs.core.nth.call(null,vec__36858,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36864 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36854,chunk__36855,count__36856,i__36857,pl_36864,vec__36858,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36864.call(null,msg_hist);
});})(seq__36854,chunk__36855,count__36856,i__36857,pl_36864,vec__36858,k,plugin))
);
} else {
}

var G__36865 = seq__36854;
var G__36866 = chunk__36855;
var G__36867 = count__36856;
var G__36868 = (i__36857 + (1));
seq__36854 = G__36865;
chunk__36855 = G__36866;
count__36856 = G__36867;
i__36857 = G__36868;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36854);
if(temp__4657__auto__){
var seq__36854__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36854__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__36854__$1);
var G__36869 = cljs.core.chunk_rest.call(null,seq__36854__$1);
var G__36870 = c__26790__auto__;
var G__36871 = cljs.core.count.call(null,c__26790__auto__);
var G__36872 = (0);
seq__36854 = G__36869;
chunk__36855 = G__36870;
count__36856 = G__36871;
i__36857 = G__36872;
continue;
} else {
var vec__36861 = cljs.core.first.call(null,seq__36854__$1);
var k = cljs.core.nth.call(null,vec__36861,(0),null);
var plugin = cljs.core.nth.call(null,vec__36861,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36873 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36854,chunk__36855,count__36856,i__36857,pl_36873,vec__36861,k,plugin,seq__36854__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36873.call(null,msg_hist);
});})(seq__36854,chunk__36855,count__36856,i__36857,pl_36873,vec__36861,k,plugin,seq__36854__$1,temp__4657__auto__))
);
} else {
}

var G__36874 = cljs.core.next.call(null,seq__36854__$1);
var G__36875 = null;
var G__36876 = (0);
var G__36877 = (0);
seq__36854 = G__36874;
chunk__36855 = G__36875;
count__36856 = G__36876;
i__36857 = G__36877;
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
var args36878 = [];
var len__27054__auto___36885 = arguments.length;
var i__27055__auto___36886 = (0);
while(true){
if((i__27055__auto___36886 < len__27054__auto___36885)){
args36878.push((arguments[i__27055__auto___36886]));

var G__36887 = (i__27055__auto___36886 + (1));
i__27055__auto___36886 = G__36887;
continue;
} else {
}
break;
}

var G__36880 = args36878.length;
switch (G__36880) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36878.length)].join('')));

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

var seq__36881_36889 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36882_36890 = null;
var count__36883_36891 = (0);
var i__36884_36892 = (0);
while(true){
if((i__36884_36892 < count__36883_36891)){
var msg_36893 = cljs.core._nth.call(null,chunk__36882_36890,i__36884_36892);
figwheel.client.socket.handle_incoming_message.call(null,msg_36893);

var G__36894 = seq__36881_36889;
var G__36895 = chunk__36882_36890;
var G__36896 = count__36883_36891;
var G__36897 = (i__36884_36892 + (1));
seq__36881_36889 = G__36894;
chunk__36882_36890 = G__36895;
count__36883_36891 = G__36896;
i__36884_36892 = G__36897;
continue;
} else {
var temp__4657__auto___36898 = cljs.core.seq.call(null,seq__36881_36889);
if(temp__4657__auto___36898){
var seq__36881_36899__$1 = temp__4657__auto___36898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36881_36899__$1)){
var c__26790__auto___36900 = cljs.core.chunk_first.call(null,seq__36881_36899__$1);
var G__36901 = cljs.core.chunk_rest.call(null,seq__36881_36899__$1);
var G__36902 = c__26790__auto___36900;
var G__36903 = cljs.core.count.call(null,c__26790__auto___36900);
var G__36904 = (0);
seq__36881_36889 = G__36901;
chunk__36882_36890 = G__36902;
count__36883_36891 = G__36903;
i__36884_36892 = G__36904;
continue;
} else {
var msg_36905 = cljs.core.first.call(null,seq__36881_36899__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36905);

var G__36906 = cljs.core.next.call(null,seq__36881_36899__$1);
var G__36907 = null;
var G__36908 = (0);
var G__36909 = (0);
seq__36881_36889 = G__36906;
chunk__36882_36890 = G__36907;
count__36883_36891 = G__36908;
i__36884_36892 = G__36909;
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
var len__27054__auto___36914 = arguments.length;
var i__27055__auto___36915 = (0);
while(true){
if((i__27055__auto___36915 < len__27054__auto___36914)){
args__27061__auto__.push((arguments[i__27055__auto___36915]));

var G__36916 = (i__27055__auto___36915 + (1));
i__27055__auto___36915 = G__36916;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__36911){
var map__36912 = p__36911;
var map__36912__$1 = ((((!((map__36912 == null)))?((((map__36912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36912):map__36912);
var opts = map__36912__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq36910){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36910));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e36918){if((e36918 instanceof Error)){
var e = e36918;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e36918;

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
return (function (p__36922){
var map__36923 = p__36922;
var map__36923__$1 = ((((!((map__36923 == null)))?((((map__36923.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36923.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36923):map__36923);
var msg_name = cljs.core.get.call(null,map__36923__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1497141442023