// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25979__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25979__auto__){
return or__25979__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25979__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33263_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33263_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33268 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33269 = null;
var count__33270 = (0);
var i__33271 = (0);
while(true){
if((i__33271 < count__33270)){
var n = cljs.core._nth.call(null,chunk__33269,i__33271);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33272 = seq__33268;
var G__33273 = chunk__33269;
var G__33274 = count__33270;
var G__33275 = (i__33271 + (1));
seq__33268 = G__33272;
chunk__33269 = G__33273;
count__33270 = G__33274;
i__33271 = G__33275;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33268);
if(temp__4657__auto__){
var seq__33268__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33268__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__33268__$1);
var G__33276 = cljs.core.chunk_rest.call(null,seq__33268__$1);
var G__33277 = c__26790__auto__;
var G__33278 = cljs.core.count.call(null,c__26790__auto__);
var G__33279 = (0);
seq__33268 = G__33276;
chunk__33269 = G__33277;
count__33270 = G__33278;
i__33271 = G__33279;
continue;
} else {
var n = cljs.core.first.call(null,seq__33268__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33280 = cljs.core.next.call(null,seq__33268__$1);
var G__33281 = null;
var G__33282 = (0);
var G__33283 = (0);
seq__33268 = G__33280;
chunk__33269 = G__33281;
count__33270 = G__33282;
i__33271 = G__33283;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__33334_33345 = cljs.core.seq.call(null,deps);
var chunk__33335_33346 = null;
var count__33336_33347 = (0);
var i__33337_33348 = (0);
while(true){
if((i__33337_33348 < count__33336_33347)){
var dep_33349 = cljs.core._nth.call(null,chunk__33335_33346,i__33337_33348);
topo_sort_helper_STAR_.call(null,dep_33349,(depth + (1)),state);

var G__33350 = seq__33334_33345;
var G__33351 = chunk__33335_33346;
var G__33352 = count__33336_33347;
var G__33353 = (i__33337_33348 + (1));
seq__33334_33345 = G__33350;
chunk__33335_33346 = G__33351;
count__33336_33347 = G__33352;
i__33337_33348 = G__33353;
continue;
} else {
var temp__4657__auto___33354 = cljs.core.seq.call(null,seq__33334_33345);
if(temp__4657__auto___33354){
var seq__33334_33355__$1 = temp__4657__auto___33354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33334_33355__$1)){
var c__26790__auto___33356 = cljs.core.chunk_first.call(null,seq__33334_33355__$1);
var G__33357 = cljs.core.chunk_rest.call(null,seq__33334_33355__$1);
var G__33358 = c__26790__auto___33356;
var G__33359 = cljs.core.count.call(null,c__26790__auto___33356);
var G__33360 = (0);
seq__33334_33345 = G__33357;
chunk__33335_33346 = G__33358;
count__33336_33347 = G__33359;
i__33337_33348 = G__33360;
continue;
} else {
var dep_33361 = cljs.core.first.call(null,seq__33334_33355__$1);
topo_sort_helper_STAR_.call(null,dep_33361,(depth + (1)),state);

var G__33362 = cljs.core.next.call(null,seq__33334_33355__$1);
var G__33363 = null;
var G__33364 = (0);
var G__33365 = (0);
seq__33334_33345 = G__33362;
chunk__33335_33346 = G__33363;
count__33336_33347 = G__33364;
i__33337_33348 = G__33365;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33338){
var vec__33342 = p__33338;
var seq__33343 = cljs.core.seq.call(null,vec__33342);
var first__33344 = cljs.core.first.call(null,seq__33343);
var seq__33343__$1 = cljs.core.next.call(null,seq__33343);
var x = first__33344;
var xs = seq__33343__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33342,seq__33343,first__33344,seq__33343__$1,x,xs,get_deps__$1){
return (function (p1__33284_SHARP_){
return clojure.set.difference.call(null,p1__33284_SHARP_,x);
});})(vec__33342,seq__33343,first__33344,seq__33343__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33378 = cljs.core.seq.call(null,provides);
var chunk__33379 = null;
var count__33380 = (0);
var i__33381 = (0);
while(true){
if((i__33381 < count__33380)){
var prov = cljs.core._nth.call(null,chunk__33379,i__33381);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33382_33390 = cljs.core.seq.call(null,requires);
var chunk__33383_33391 = null;
var count__33384_33392 = (0);
var i__33385_33393 = (0);
while(true){
if((i__33385_33393 < count__33384_33392)){
var req_33394 = cljs.core._nth.call(null,chunk__33383_33391,i__33385_33393);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33394,prov);

var G__33395 = seq__33382_33390;
var G__33396 = chunk__33383_33391;
var G__33397 = count__33384_33392;
var G__33398 = (i__33385_33393 + (1));
seq__33382_33390 = G__33395;
chunk__33383_33391 = G__33396;
count__33384_33392 = G__33397;
i__33385_33393 = G__33398;
continue;
} else {
var temp__4657__auto___33399 = cljs.core.seq.call(null,seq__33382_33390);
if(temp__4657__auto___33399){
var seq__33382_33400__$1 = temp__4657__auto___33399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33382_33400__$1)){
var c__26790__auto___33401 = cljs.core.chunk_first.call(null,seq__33382_33400__$1);
var G__33402 = cljs.core.chunk_rest.call(null,seq__33382_33400__$1);
var G__33403 = c__26790__auto___33401;
var G__33404 = cljs.core.count.call(null,c__26790__auto___33401);
var G__33405 = (0);
seq__33382_33390 = G__33402;
chunk__33383_33391 = G__33403;
count__33384_33392 = G__33404;
i__33385_33393 = G__33405;
continue;
} else {
var req_33406 = cljs.core.first.call(null,seq__33382_33400__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33406,prov);

var G__33407 = cljs.core.next.call(null,seq__33382_33400__$1);
var G__33408 = null;
var G__33409 = (0);
var G__33410 = (0);
seq__33382_33390 = G__33407;
chunk__33383_33391 = G__33408;
count__33384_33392 = G__33409;
i__33385_33393 = G__33410;
continue;
}
} else {
}
}
break;
}

var G__33411 = seq__33378;
var G__33412 = chunk__33379;
var G__33413 = count__33380;
var G__33414 = (i__33381 + (1));
seq__33378 = G__33411;
chunk__33379 = G__33412;
count__33380 = G__33413;
i__33381 = G__33414;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33378);
if(temp__4657__auto__){
var seq__33378__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33378__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__33378__$1);
var G__33415 = cljs.core.chunk_rest.call(null,seq__33378__$1);
var G__33416 = c__26790__auto__;
var G__33417 = cljs.core.count.call(null,c__26790__auto__);
var G__33418 = (0);
seq__33378 = G__33415;
chunk__33379 = G__33416;
count__33380 = G__33417;
i__33381 = G__33418;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33378__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33386_33419 = cljs.core.seq.call(null,requires);
var chunk__33387_33420 = null;
var count__33388_33421 = (0);
var i__33389_33422 = (0);
while(true){
if((i__33389_33422 < count__33388_33421)){
var req_33423 = cljs.core._nth.call(null,chunk__33387_33420,i__33389_33422);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33423,prov);

var G__33424 = seq__33386_33419;
var G__33425 = chunk__33387_33420;
var G__33426 = count__33388_33421;
var G__33427 = (i__33389_33422 + (1));
seq__33386_33419 = G__33424;
chunk__33387_33420 = G__33425;
count__33388_33421 = G__33426;
i__33389_33422 = G__33427;
continue;
} else {
var temp__4657__auto___33428__$1 = cljs.core.seq.call(null,seq__33386_33419);
if(temp__4657__auto___33428__$1){
var seq__33386_33429__$1 = temp__4657__auto___33428__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33386_33429__$1)){
var c__26790__auto___33430 = cljs.core.chunk_first.call(null,seq__33386_33429__$1);
var G__33431 = cljs.core.chunk_rest.call(null,seq__33386_33429__$1);
var G__33432 = c__26790__auto___33430;
var G__33433 = cljs.core.count.call(null,c__26790__auto___33430);
var G__33434 = (0);
seq__33386_33419 = G__33431;
chunk__33387_33420 = G__33432;
count__33388_33421 = G__33433;
i__33389_33422 = G__33434;
continue;
} else {
var req_33435 = cljs.core.first.call(null,seq__33386_33429__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33435,prov);

var G__33436 = cljs.core.next.call(null,seq__33386_33429__$1);
var G__33437 = null;
var G__33438 = (0);
var G__33439 = (0);
seq__33386_33419 = G__33436;
chunk__33387_33420 = G__33437;
count__33388_33421 = G__33438;
i__33389_33422 = G__33439;
continue;
}
} else {
}
}
break;
}

var G__33440 = cljs.core.next.call(null,seq__33378__$1);
var G__33441 = null;
var G__33442 = (0);
var G__33443 = (0);
seq__33378 = G__33440;
chunk__33379 = G__33441;
count__33380 = G__33442;
i__33381 = G__33443;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__33448_33452 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33449_33453 = null;
var count__33450_33454 = (0);
var i__33451_33455 = (0);
while(true){
if((i__33451_33455 < count__33450_33454)){
var ns_33456 = cljs.core._nth.call(null,chunk__33449_33453,i__33451_33455);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33456);

var G__33457 = seq__33448_33452;
var G__33458 = chunk__33449_33453;
var G__33459 = count__33450_33454;
var G__33460 = (i__33451_33455 + (1));
seq__33448_33452 = G__33457;
chunk__33449_33453 = G__33458;
count__33450_33454 = G__33459;
i__33451_33455 = G__33460;
continue;
} else {
var temp__4657__auto___33461 = cljs.core.seq.call(null,seq__33448_33452);
if(temp__4657__auto___33461){
var seq__33448_33462__$1 = temp__4657__auto___33461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33448_33462__$1)){
var c__26790__auto___33463 = cljs.core.chunk_first.call(null,seq__33448_33462__$1);
var G__33464 = cljs.core.chunk_rest.call(null,seq__33448_33462__$1);
var G__33465 = c__26790__auto___33463;
var G__33466 = cljs.core.count.call(null,c__26790__auto___33463);
var G__33467 = (0);
seq__33448_33452 = G__33464;
chunk__33449_33453 = G__33465;
count__33450_33454 = G__33466;
i__33451_33455 = G__33467;
continue;
} else {
var ns_33468 = cljs.core.first.call(null,seq__33448_33462__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33468);

var G__33469 = cljs.core.next.call(null,seq__33448_33462__$1);
var G__33470 = null;
var G__33471 = (0);
var G__33472 = (0);
seq__33448_33452 = G__33469;
chunk__33449_33453 = G__33470;
count__33450_33454 = G__33471;
i__33451_33455 = G__33472;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25979__auto__ = goog.require__;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__33473__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33473 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33474__i = 0, G__33474__a = new Array(arguments.length -  0);
while (G__33474__i < G__33474__a.length) {G__33474__a[G__33474__i] = arguments[G__33474__i + 0]; ++G__33474__i;}
  args = new cljs.core.IndexedSeq(G__33474__a,0);
} 
return G__33473__delegate.call(this,args);};
G__33473.cljs$lang$maxFixedArity = 0;
G__33473.cljs$lang$applyTo = (function (arglist__33475){
var args = cljs.core.seq(arglist__33475);
return G__33473__delegate(args);
});
G__33473.cljs$core$IFn$_invoke$arity$variadic = G__33473__delegate;
return G__33473;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33476 = cljs.core._EQ_;
var expr__33477 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33476.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33477))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__33476,expr__33477){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__33476,expr__33477))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__33476,expr__33477){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33479){if((e33479 instanceof Error)){
var e = e33479;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33479;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__33476,expr__33477))
} else {
if(cljs.core.truth_(pred__33476.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33477))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33476.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__33477))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33476.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33477))){
return ((function (pred__33476,expr__33477){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33480){if((e33480 instanceof Error)){
var e = e33480;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33480;

}
}})());
});
;})(pred__33476,expr__33477))
} else {
return ((function (pred__33476,expr__33477){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33476,expr__33477))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33481,callback){
var map__33484 = p__33481;
var map__33484__$1 = ((((!((map__33484 == null)))?((((map__33484.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33484.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33484):map__33484);
var file_msg = map__33484__$1;
var request_url = cljs.core.get.call(null,map__33484__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33484,map__33484__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33484,map__33484__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto__){
return (function (){
var f__28579__auto__ = (function (){var switch__27997__auto__ = ((function (c__28578__auto__){
return (function (state_33508){
var state_val_33509 = (state_33508[(1)]);
if((state_val_33509 === (7))){
var inst_33504 = (state_33508[(2)]);
var state_33508__$1 = state_33508;
var statearr_33510_33530 = state_33508__$1;
(statearr_33510_33530[(2)] = inst_33504);

(statearr_33510_33530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (1))){
var state_33508__$1 = state_33508;
var statearr_33511_33531 = state_33508__$1;
(statearr_33511_33531[(2)] = null);

(statearr_33511_33531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (4))){
var inst_33488 = (state_33508[(7)]);
var inst_33488__$1 = (state_33508[(2)]);
var state_33508__$1 = (function (){var statearr_33512 = state_33508;
(statearr_33512[(7)] = inst_33488__$1);

return statearr_33512;
})();
if(cljs.core.truth_(inst_33488__$1)){
var statearr_33513_33532 = state_33508__$1;
(statearr_33513_33532[(1)] = (5));

} else {
var statearr_33514_33533 = state_33508__$1;
(statearr_33514_33533[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (6))){
var state_33508__$1 = state_33508;
var statearr_33515_33534 = state_33508__$1;
(statearr_33515_33534[(2)] = null);

(statearr_33515_33534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (3))){
var inst_33506 = (state_33508[(2)]);
var state_33508__$1 = state_33508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33508__$1,inst_33506);
} else {
if((state_val_33509 === (2))){
var state_33508__$1 = state_33508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33508__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33509 === (11))){
var inst_33500 = (state_33508[(2)]);
var state_33508__$1 = (function (){var statearr_33516 = state_33508;
(statearr_33516[(8)] = inst_33500);

return statearr_33516;
})();
var statearr_33517_33535 = state_33508__$1;
(statearr_33517_33535[(2)] = null);

(statearr_33517_33535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (9))){
var inst_33492 = (state_33508[(9)]);
var inst_33494 = (state_33508[(10)]);
var inst_33496 = inst_33494.call(null,inst_33492);
var state_33508__$1 = state_33508;
var statearr_33518_33536 = state_33508__$1;
(statearr_33518_33536[(2)] = inst_33496);

(statearr_33518_33536[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (5))){
var inst_33488 = (state_33508[(7)]);
var inst_33490 = figwheel.client.file_reloading.blocking_load.call(null,inst_33488);
var state_33508__$1 = state_33508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33508__$1,(8),inst_33490);
} else {
if((state_val_33509 === (10))){
var inst_33492 = (state_33508[(9)]);
var inst_33498 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33492);
var state_33508__$1 = state_33508;
var statearr_33519_33537 = state_33508__$1;
(statearr_33519_33537[(2)] = inst_33498);

(statearr_33519_33537[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33509 === (8))){
var inst_33488 = (state_33508[(7)]);
var inst_33494 = (state_33508[(10)]);
var inst_33492 = (state_33508[(2)]);
var inst_33493 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33494__$1 = cljs.core.get.call(null,inst_33493,inst_33488);
var state_33508__$1 = (function (){var statearr_33520 = state_33508;
(statearr_33520[(9)] = inst_33492);

(statearr_33520[(10)] = inst_33494__$1);

return statearr_33520;
})();
if(cljs.core.truth_(inst_33494__$1)){
var statearr_33521_33538 = state_33508__$1;
(statearr_33521_33538[(1)] = (9));

} else {
var statearr_33522_33539 = state_33508__$1;
(statearr_33522_33539[(1)] = (10));

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
});})(c__28578__auto__))
;
return ((function (switch__27997__auto__,c__28578__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27998__auto__ = null;
var figwheel$client$file_reloading$state_machine__27998__auto____0 = (function (){
var statearr_33526 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33526[(0)] = figwheel$client$file_reloading$state_machine__27998__auto__);

(statearr_33526[(1)] = (1));

return statearr_33526;
});
var figwheel$client$file_reloading$state_machine__27998__auto____1 = (function (state_33508){
while(true){
var ret_value__27999__auto__ = (function (){try{while(true){
var result__28000__auto__ = switch__27997__auto__.call(null,state_33508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28000__auto__;
}
break;
}
}catch (e33527){if((e33527 instanceof Object)){
var ex__28001__auto__ = e33527;
var statearr_33528_33540 = state_33508;
(statearr_33528_33540[(5)] = ex__28001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33541 = state_33508;
state_33508 = G__33541;
continue;
} else {
return ret_value__27999__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27998__auto__ = function(state_33508){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27998__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27998__auto____1.call(this,state_33508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27998__auto____0;
figwheel$client$file_reloading$state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27998__auto____1;
return figwheel$client$file_reloading$state_machine__27998__auto__;
})()
;})(switch__27997__auto__,c__28578__auto__))
})();
var state__28580__auto__ = (function (){var statearr_33529 = f__28579__auto__.call(null);
(statearr_33529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_33529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto__))
);

return c__28578__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33542,callback){
var map__33545 = p__33542;
var map__33545__$1 = ((((!((map__33545 == null)))?((((map__33545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33545):map__33545);
var file_msg = map__33545__$1;
var namespace = cljs.core.get.call(null,map__33545__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33545,map__33545__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33545,map__33545__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33547){
var map__33550 = p__33547;
var map__33550__$1 = ((((!((map__33550 == null)))?((((map__33550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33550):map__33550);
var file_msg = map__33550__$1;
var namespace = cljs.core.get.call(null,map__33550__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33552){
var map__33555 = p__33552;
var map__33555__$1 = ((((!((map__33555 == null)))?((((map__33555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33555):map__33555);
var file_msg = map__33555__$1;
var namespace = cljs.core.get.call(null,map__33555__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25967__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25967__auto__){
var or__25979__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
var or__25979__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25979__auto____$1)){
return or__25979__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25967__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33557,callback){
var map__33560 = p__33557;
var map__33560__$1 = ((((!((map__33560 == null)))?((((map__33560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33560):map__33560);
var file_msg = map__33560__$1;
var request_url = cljs.core.get.call(null,map__33560__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33560__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28578__auto___33664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto___33664,out){
return (function (){
var f__28579__auto__ = (function (){var switch__27997__auto__ = ((function (c__28578__auto___33664,out){
return (function (state_33646){
var state_val_33647 = (state_33646[(1)]);
if((state_val_33647 === (1))){
var inst_33620 = cljs.core.seq.call(null,files);
var inst_33621 = cljs.core.first.call(null,inst_33620);
var inst_33622 = cljs.core.next.call(null,inst_33620);
var inst_33623 = files;
var state_33646__$1 = (function (){var statearr_33648 = state_33646;
(statearr_33648[(7)] = inst_33622);

(statearr_33648[(8)] = inst_33623);

(statearr_33648[(9)] = inst_33621);

return statearr_33648;
})();
var statearr_33649_33665 = state_33646__$1;
(statearr_33649_33665[(2)] = null);

(statearr_33649_33665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33647 === (2))){
var inst_33629 = (state_33646[(10)]);
var inst_33623 = (state_33646[(8)]);
var inst_33628 = cljs.core.seq.call(null,inst_33623);
var inst_33629__$1 = cljs.core.first.call(null,inst_33628);
var inst_33630 = cljs.core.next.call(null,inst_33628);
var inst_33631 = (inst_33629__$1 == null);
var inst_33632 = cljs.core.not.call(null,inst_33631);
var state_33646__$1 = (function (){var statearr_33650 = state_33646;
(statearr_33650[(10)] = inst_33629__$1);

(statearr_33650[(11)] = inst_33630);

return statearr_33650;
})();
if(inst_33632){
var statearr_33651_33666 = state_33646__$1;
(statearr_33651_33666[(1)] = (4));

} else {
var statearr_33652_33667 = state_33646__$1;
(statearr_33652_33667[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33647 === (3))){
var inst_33644 = (state_33646[(2)]);
var state_33646__$1 = state_33646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33646__$1,inst_33644);
} else {
if((state_val_33647 === (4))){
var inst_33629 = (state_33646[(10)]);
var inst_33634 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33629);
var state_33646__$1 = state_33646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33646__$1,(7),inst_33634);
} else {
if((state_val_33647 === (5))){
var inst_33640 = cljs.core.async.close_BANG_.call(null,out);
var state_33646__$1 = state_33646;
var statearr_33653_33668 = state_33646__$1;
(statearr_33653_33668[(2)] = inst_33640);

(statearr_33653_33668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33647 === (6))){
var inst_33642 = (state_33646[(2)]);
var state_33646__$1 = state_33646;
var statearr_33654_33669 = state_33646__$1;
(statearr_33654_33669[(2)] = inst_33642);

(statearr_33654_33669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33647 === (7))){
var inst_33630 = (state_33646[(11)]);
var inst_33636 = (state_33646[(2)]);
var inst_33637 = cljs.core.async.put_BANG_.call(null,out,inst_33636);
var inst_33623 = inst_33630;
var state_33646__$1 = (function (){var statearr_33655 = state_33646;
(statearr_33655[(12)] = inst_33637);

(statearr_33655[(8)] = inst_33623);

return statearr_33655;
})();
var statearr_33656_33670 = state_33646__$1;
(statearr_33656_33670[(2)] = null);

(statearr_33656_33670[(1)] = (2));


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
});})(c__28578__auto___33664,out))
;
return ((function (switch__27997__auto__,c__28578__auto___33664,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27998__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27998__auto____0 = (function (){
var statearr_33660 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33660[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27998__auto__);

(statearr_33660[(1)] = (1));

return statearr_33660;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27998__auto____1 = (function (state_33646){
while(true){
var ret_value__27999__auto__ = (function (){try{while(true){
var result__28000__auto__ = switch__27997__auto__.call(null,state_33646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28000__auto__;
}
break;
}
}catch (e33661){if((e33661 instanceof Object)){
var ex__28001__auto__ = e33661;
var statearr_33662_33671 = state_33646;
(statearr_33662_33671[(5)] = ex__28001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33672 = state_33646;
state_33646 = G__33672;
continue;
} else {
return ret_value__27999__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27998__auto__ = function(state_33646){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27998__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27998__auto____1.call(this,state_33646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27998__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27998__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27998__auto__;
})()
;})(switch__27997__auto__,c__28578__auto___33664,out))
})();
var state__28580__auto__ = (function (){var statearr_33663 = f__28579__auto__.call(null);
(statearr_33663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto___33664);

return statearr_33663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto___33664,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33673,opts){
var map__33677 = p__33673;
var map__33677__$1 = ((((!((map__33677 == null)))?((((map__33677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33677):map__33677);
var eval_body__$1 = cljs.core.get.call(null,map__33677__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33677__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25967__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25967__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25967__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33679){var e = e33679;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33680_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33680_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33689){
var vec__33690 = p__33689;
var k = cljs.core.nth.call(null,vec__33690,(0),null);
var v = cljs.core.nth.call(null,vec__33690,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33693){
var vec__33694 = p__33693;
var k = cljs.core.nth.call(null,vec__33694,(0),null);
var v = cljs.core.nth.call(null,vec__33694,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33700,p__33701){
var map__33948 = p__33700;
var map__33948__$1 = ((((!((map__33948 == null)))?((((map__33948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33948):map__33948);
var opts = map__33948__$1;
var before_jsload = cljs.core.get.call(null,map__33948__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33948__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33948__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33949 = p__33701;
var map__33949__$1 = ((((!((map__33949 == null)))?((((map__33949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33949):map__33949);
var msg = map__33949__$1;
var files = cljs.core.get.call(null,map__33949__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33949__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33949__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28578__auto__,map__33948,map__33948__$1,opts,before_jsload,on_jsload,reload_dependents,map__33949,map__33949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28579__auto__ = (function (){var switch__27997__auto__ = ((function (c__28578__auto__,map__33948,map__33948__$1,opts,before_jsload,on_jsload,reload_dependents,map__33949,map__33949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34102){
var state_val_34103 = (state_34102[(1)]);
if((state_val_34103 === (7))){
var inst_33965 = (state_34102[(7)]);
var inst_33964 = (state_34102[(8)]);
var inst_33963 = (state_34102[(9)]);
var inst_33966 = (state_34102[(10)]);
var inst_33971 = cljs.core._nth.call(null,inst_33964,inst_33966);
var inst_33972 = figwheel.client.file_reloading.eval_body.call(null,inst_33971,opts);
var inst_33973 = (inst_33966 + (1));
var tmp34104 = inst_33965;
var tmp34105 = inst_33964;
var tmp34106 = inst_33963;
var inst_33963__$1 = tmp34106;
var inst_33964__$1 = tmp34105;
var inst_33965__$1 = tmp34104;
var inst_33966__$1 = inst_33973;
var state_34102__$1 = (function (){var statearr_34107 = state_34102;
(statearr_34107[(7)] = inst_33965__$1);

(statearr_34107[(8)] = inst_33964__$1);

(statearr_34107[(9)] = inst_33963__$1);

(statearr_34107[(11)] = inst_33972);

(statearr_34107[(10)] = inst_33966__$1);

return statearr_34107;
})();
var statearr_34108_34194 = state_34102__$1;
(statearr_34108_34194[(2)] = null);

(statearr_34108_34194[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (20))){
var inst_34006 = (state_34102[(12)]);
var inst_34014 = figwheel.client.file_reloading.sort_files.call(null,inst_34006);
var state_34102__$1 = state_34102;
var statearr_34109_34195 = state_34102__$1;
(statearr_34109_34195[(2)] = inst_34014);

(statearr_34109_34195[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (27))){
var state_34102__$1 = state_34102;
var statearr_34110_34196 = state_34102__$1;
(statearr_34110_34196[(2)] = null);

(statearr_34110_34196[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (1))){
var inst_33955 = (state_34102[(13)]);
var inst_33952 = before_jsload.call(null,files);
var inst_33953 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33954 = (function (){return ((function (inst_33955,inst_33952,inst_33953,state_val_34103,c__28578__auto__,map__33948,map__33948__$1,opts,before_jsload,on_jsload,reload_dependents,map__33949,map__33949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33697_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33697_SHARP_);
});
;})(inst_33955,inst_33952,inst_33953,state_val_34103,c__28578__auto__,map__33948,map__33948__$1,opts,before_jsload,on_jsload,reload_dependents,map__33949,map__33949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33955__$1 = cljs.core.filter.call(null,inst_33954,files);
var inst_33956 = cljs.core.not_empty.call(null,inst_33955__$1);
var state_34102__$1 = (function (){var statearr_34111 = state_34102;
(statearr_34111[(13)] = inst_33955__$1);

(statearr_34111[(14)] = inst_33952);

(statearr_34111[(15)] = inst_33953);

return statearr_34111;
})();
if(cljs.core.truth_(inst_33956)){
var statearr_34112_34197 = state_34102__$1;
(statearr_34112_34197[(1)] = (2));

} else {
var statearr_34113_34198 = state_34102__$1;
(statearr_34113_34198[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (24))){
var state_34102__$1 = state_34102;
var statearr_34114_34199 = state_34102__$1;
(statearr_34114_34199[(2)] = null);

(statearr_34114_34199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (39))){
var inst_34056 = (state_34102[(16)]);
var state_34102__$1 = state_34102;
var statearr_34115_34200 = state_34102__$1;
(statearr_34115_34200[(2)] = inst_34056);

(statearr_34115_34200[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (46))){
var inst_34097 = (state_34102[(2)]);
var state_34102__$1 = state_34102;
var statearr_34116_34201 = state_34102__$1;
(statearr_34116_34201[(2)] = inst_34097);

(statearr_34116_34201[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (4))){
var inst_34000 = (state_34102[(2)]);
var inst_34001 = cljs.core.List.EMPTY;
var inst_34002 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34001);
var inst_34003 = (function (){return ((function (inst_34000,inst_34001,inst_34002,state_val_34103,c__28578__auto__,map__33948,map__33948__$1,opts,before_jsload,on_jsload,reload_dependents,map__33949,map__33949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33698_SHARP_){
var and__25967__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33698_SHARP_);
if(cljs.core.truth_(and__25967__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33698_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33698_SHARP_)));
} else {
return and__25967__auto__;
}
});
;})(inst_34000,inst_34001,inst_34002,state_val_34103,c__28578__auto__,map__33948,map__33948__$1,opts,before_jsload,on_jsload,reload_dependents,map__33949,map__33949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34004 = cljs.core.filter.call(null,inst_34003,files);
var inst_34005 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34006 = cljs.core.concat.call(null,inst_34004,inst_34005);
var state_34102__$1 = (function (){var statearr_34117 = state_34102;
(statearr_34117[(17)] = inst_34000);

(statearr_34117[(12)] = inst_34006);

(statearr_34117[(18)] = inst_34002);

return statearr_34117;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34118_34202 = state_34102__$1;
(statearr_34118_34202[(1)] = (16));

} else {
var statearr_34119_34203 = state_34102__$1;
(statearr_34119_34203[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (15))){
var inst_33990 = (state_34102[(2)]);
var state_34102__$1 = state_34102;
var statearr_34120_34204 = state_34102__$1;
(statearr_34120_34204[(2)] = inst_33990);

(statearr_34120_34204[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (21))){
var inst_34016 = (state_34102[(19)]);
var inst_34016__$1 = (state_34102[(2)]);
var inst_34017 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34016__$1);
var state_34102__$1 = (function (){var statearr_34121 = state_34102;
(statearr_34121[(19)] = inst_34016__$1);

return statearr_34121;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34102__$1,(22),inst_34017);
} else {
if((state_val_34103 === (31))){
var inst_34100 = (state_34102[(2)]);
var state_34102__$1 = state_34102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34102__$1,inst_34100);
} else {
if((state_val_34103 === (32))){
var inst_34056 = (state_34102[(16)]);
var inst_34061 = inst_34056.cljs$lang$protocol_mask$partition0$;
var inst_34062 = (inst_34061 & (64));
var inst_34063 = inst_34056.cljs$core$ISeq$;
var inst_34064 = (inst_34062) || (inst_34063);
var state_34102__$1 = state_34102;
if(cljs.core.truth_(inst_34064)){
var statearr_34122_34205 = state_34102__$1;
(statearr_34122_34205[(1)] = (35));

} else {
var statearr_34123_34206 = state_34102__$1;
(statearr_34123_34206[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (40))){
var inst_34077 = (state_34102[(20)]);
var inst_34076 = (state_34102[(2)]);
var inst_34077__$1 = cljs.core.get.call(null,inst_34076,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34078 = cljs.core.get.call(null,inst_34076,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34079 = cljs.core.not_empty.call(null,inst_34077__$1);
var state_34102__$1 = (function (){var statearr_34124 = state_34102;
(statearr_34124[(20)] = inst_34077__$1);

(statearr_34124[(21)] = inst_34078);

return statearr_34124;
})();
if(cljs.core.truth_(inst_34079)){
var statearr_34125_34207 = state_34102__$1;
(statearr_34125_34207[(1)] = (41));

} else {
var statearr_34126_34208 = state_34102__$1;
(statearr_34126_34208[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (33))){
var state_34102__$1 = state_34102;
var statearr_34127_34209 = state_34102__$1;
(statearr_34127_34209[(2)] = false);

(statearr_34127_34209[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (13))){
var inst_33976 = (state_34102[(22)]);
var inst_33980 = cljs.core.chunk_first.call(null,inst_33976);
var inst_33981 = cljs.core.chunk_rest.call(null,inst_33976);
var inst_33982 = cljs.core.count.call(null,inst_33980);
var inst_33963 = inst_33981;
var inst_33964 = inst_33980;
var inst_33965 = inst_33982;
var inst_33966 = (0);
var state_34102__$1 = (function (){var statearr_34128 = state_34102;
(statearr_34128[(7)] = inst_33965);

(statearr_34128[(8)] = inst_33964);

(statearr_34128[(9)] = inst_33963);

(statearr_34128[(10)] = inst_33966);

return statearr_34128;
})();
var statearr_34129_34210 = state_34102__$1;
(statearr_34129_34210[(2)] = null);

(statearr_34129_34210[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (22))){
var inst_34020 = (state_34102[(23)]);
var inst_34024 = (state_34102[(24)]);
var inst_34016 = (state_34102[(19)]);
var inst_34019 = (state_34102[(25)]);
var inst_34019__$1 = (state_34102[(2)]);
var inst_34020__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34019__$1);
var inst_34021 = (function (){var all_files = inst_34016;
var res_SINGLEQUOTE_ = inst_34019__$1;
var res = inst_34020__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34020,inst_34024,inst_34016,inst_34019,inst_34019__$1,inst_34020__$1,state_val_34103,c__28578__auto__,map__33948,map__33948__$1,opts,before_jsload,on_jsload,reload_dependents,map__33949,map__33949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33699_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33699_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34020,inst_34024,inst_34016,inst_34019,inst_34019__$1,inst_34020__$1,state_val_34103,c__28578__auto__,map__33948,map__33948__$1,opts,before_jsload,on_jsload,reload_dependents,map__33949,map__33949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34022 = cljs.core.filter.call(null,inst_34021,inst_34019__$1);
var inst_34023 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34024__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34023);
var inst_34025 = cljs.core.not_empty.call(null,inst_34024__$1);
var state_34102__$1 = (function (){var statearr_34130 = state_34102;
(statearr_34130[(23)] = inst_34020__$1);

(statearr_34130[(24)] = inst_34024__$1);

(statearr_34130[(25)] = inst_34019__$1);

(statearr_34130[(26)] = inst_34022);

return statearr_34130;
})();
if(cljs.core.truth_(inst_34025)){
var statearr_34131_34211 = state_34102__$1;
(statearr_34131_34211[(1)] = (23));

} else {
var statearr_34132_34212 = state_34102__$1;
(statearr_34132_34212[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (36))){
var state_34102__$1 = state_34102;
var statearr_34133_34213 = state_34102__$1;
(statearr_34133_34213[(2)] = false);

(statearr_34133_34213[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (41))){
var inst_34077 = (state_34102[(20)]);
var inst_34081 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34082 = cljs.core.map.call(null,inst_34081,inst_34077);
var inst_34083 = cljs.core.pr_str.call(null,inst_34082);
var inst_34084 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34083)].join('');
var inst_34085 = figwheel.client.utils.log.call(null,inst_34084);
var state_34102__$1 = state_34102;
var statearr_34134_34214 = state_34102__$1;
(statearr_34134_34214[(2)] = inst_34085);

(statearr_34134_34214[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (43))){
var inst_34078 = (state_34102[(21)]);
var inst_34088 = (state_34102[(2)]);
var inst_34089 = cljs.core.not_empty.call(null,inst_34078);
var state_34102__$1 = (function (){var statearr_34135 = state_34102;
(statearr_34135[(27)] = inst_34088);

return statearr_34135;
})();
if(cljs.core.truth_(inst_34089)){
var statearr_34136_34215 = state_34102__$1;
(statearr_34136_34215[(1)] = (44));

} else {
var statearr_34137_34216 = state_34102__$1;
(statearr_34137_34216[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (29))){
var inst_34020 = (state_34102[(23)]);
var inst_34024 = (state_34102[(24)]);
var inst_34016 = (state_34102[(19)]);
var inst_34056 = (state_34102[(16)]);
var inst_34019 = (state_34102[(25)]);
var inst_34022 = (state_34102[(26)]);
var inst_34052 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34055 = (function (){var all_files = inst_34016;
var res_SINGLEQUOTE_ = inst_34019;
var res = inst_34020;
var files_not_loaded = inst_34022;
var dependencies_that_loaded = inst_34024;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34020,inst_34024,inst_34016,inst_34056,inst_34019,inst_34022,inst_34052,state_val_34103,c__28578__auto__,map__33948,map__33948__$1,opts,before_jsload,on_jsload,reload_dependents,map__33949,map__33949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34054){
var map__34138 = p__34054;
var map__34138__$1 = ((((!((map__34138 == null)))?((((map__34138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34138):map__34138);
var namespace = cljs.core.get.call(null,map__34138__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34020,inst_34024,inst_34016,inst_34056,inst_34019,inst_34022,inst_34052,state_val_34103,c__28578__auto__,map__33948,map__33948__$1,opts,before_jsload,on_jsload,reload_dependents,map__33949,map__33949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34056__$1 = cljs.core.group_by.call(null,inst_34055,inst_34022);
var inst_34058 = (inst_34056__$1 == null);
var inst_34059 = cljs.core.not.call(null,inst_34058);
var state_34102__$1 = (function (){var statearr_34140 = state_34102;
(statearr_34140[(28)] = inst_34052);

(statearr_34140[(16)] = inst_34056__$1);

return statearr_34140;
})();
if(inst_34059){
var statearr_34141_34217 = state_34102__$1;
(statearr_34141_34217[(1)] = (32));

} else {
var statearr_34142_34218 = state_34102__$1;
(statearr_34142_34218[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (44))){
var inst_34078 = (state_34102[(21)]);
var inst_34091 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34078);
var inst_34092 = cljs.core.pr_str.call(null,inst_34091);
var inst_34093 = [cljs.core.str("not required: "),cljs.core.str(inst_34092)].join('');
var inst_34094 = figwheel.client.utils.log.call(null,inst_34093);
var state_34102__$1 = state_34102;
var statearr_34143_34219 = state_34102__$1;
(statearr_34143_34219[(2)] = inst_34094);

(statearr_34143_34219[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (6))){
var inst_33997 = (state_34102[(2)]);
var state_34102__$1 = state_34102;
var statearr_34144_34220 = state_34102__$1;
(statearr_34144_34220[(2)] = inst_33997);

(statearr_34144_34220[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (28))){
var inst_34022 = (state_34102[(26)]);
var inst_34049 = (state_34102[(2)]);
var inst_34050 = cljs.core.not_empty.call(null,inst_34022);
var state_34102__$1 = (function (){var statearr_34145 = state_34102;
(statearr_34145[(29)] = inst_34049);

return statearr_34145;
})();
if(cljs.core.truth_(inst_34050)){
var statearr_34146_34221 = state_34102__$1;
(statearr_34146_34221[(1)] = (29));

} else {
var statearr_34147_34222 = state_34102__$1;
(statearr_34147_34222[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (25))){
var inst_34020 = (state_34102[(23)]);
var inst_34036 = (state_34102[(2)]);
var inst_34037 = cljs.core.not_empty.call(null,inst_34020);
var state_34102__$1 = (function (){var statearr_34148 = state_34102;
(statearr_34148[(30)] = inst_34036);

return statearr_34148;
})();
if(cljs.core.truth_(inst_34037)){
var statearr_34149_34223 = state_34102__$1;
(statearr_34149_34223[(1)] = (26));

} else {
var statearr_34150_34224 = state_34102__$1;
(statearr_34150_34224[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (34))){
var inst_34071 = (state_34102[(2)]);
var state_34102__$1 = state_34102;
if(cljs.core.truth_(inst_34071)){
var statearr_34151_34225 = state_34102__$1;
(statearr_34151_34225[(1)] = (38));

} else {
var statearr_34152_34226 = state_34102__$1;
(statearr_34152_34226[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (17))){
var state_34102__$1 = state_34102;
var statearr_34153_34227 = state_34102__$1;
(statearr_34153_34227[(2)] = recompile_dependents);

(statearr_34153_34227[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (3))){
var state_34102__$1 = state_34102;
var statearr_34154_34228 = state_34102__$1;
(statearr_34154_34228[(2)] = null);

(statearr_34154_34228[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (12))){
var inst_33993 = (state_34102[(2)]);
var state_34102__$1 = state_34102;
var statearr_34155_34229 = state_34102__$1;
(statearr_34155_34229[(2)] = inst_33993);

(statearr_34155_34229[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (2))){
var inst_33955 = (state_34102[(13)]);
var inst_33962 = cljs.core.seq.call(null,inst_33955);
var inst_33963 = inst_33962;
var inst_33964 = null;
var inst_33965 = (0);
var inst_33966 = (0);
var state_34102__$1 = (function (){var statearr_34156 = state_34102;
(statearr_34156[(7)] = inst_33965);

(statearr_34156[(8)] = inst_33964);

(statearr_34156[(9)] = inst_33963);

(statearr_34156[(10)] = inst_33966);

return statearr_34156;
})();
var statearr_34157_34230 = state_34102__$1;
(statearr_34157_34230[(2)] = null);

(statearr_34157_34230[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (23))){
var inst_34020 = (state_34102[(23)]);
var inst_34024 = (state_34102[(24)]);
var inst_34016 = (state_34102[(19)]);
var inst_34019 = (state_34102[(25)]);
var inst_34022 = (state_34102[(26)]);
var inst_34027 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34029 = (function (){var all_files = inst_34016;
var res_SINGLEQUOTE_ = inst_34019;
var res = inst_34020;
var files_not_loaded = inst_34022;
var dependencies_that_loaded = inst_34024;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34020,inst_34024,inst_34016,inst_34019,inst_34022,inst_34027,state_val_34103,c__28578__auto__,map__33948,map__33948__$1,opts,before_jsload,on_jsload,reload_dependents,map__33949,map__33949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34028){
var map__34158 = p__34028;
var map__34158__$1 = ((((!((map__34158 == null)))?((((map__34158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34158):map__34158);
var request_url = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34020,inst_34024,inst_34016,inst_34019,inst_34022,inst_34027,state_val_34103,c__28578__auto__,map__33948,map__33948__$1,opts,before_jsload,on_jsload,reload_dependents,map__33949,map__33949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34030 = cljs.core.reverse.call(null,inst_34024);
var inst_34031 = cljs.core.map.call(null,inst_34029,inst_34030);
var inst_34032 = cljs.core.pr_str.call(null,inst_34031);
var inst_34033 = figwheel.client.utils.log.call(null,inst_34032);
var state_34102__$1 = (function (){var statearr_34160 = state_34102;
(statearr_34160[(31)] = inst_34027);

return statearr_34160;
})();
var statearr_34161_34231 = state_34102__$1;
(statearr_34161_34231[(2)] = inst_34033);

(statearr_34161_34231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (35))){
var state_34102__$1 = state_34102;
var statearr_34162_34232 = state_34102__$1;
(statearr_34162_34232[(2)] = true);

(statearr_34162_34232[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (19))){
var inst_34006 = (state_34102[(12)]);
var inst_34012 = figwheel.client.file_reloading.expand_files.call(null,inst_34006);
var state_34102__$1 = state_34102;
var statearr_34163_34233 = state_34102__$1;
(statearr_34163_34233[(2)] = inst_34012);

(statearr_34163_34233[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (11))){
var state_34102__$1 = state_34102;
var statearr_34164_34234 = state_34102__$1;
(statearr_34164_34234[(2)] = null);

(statearr_34164_34234[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (9))){
var inst_33995 = (state_34102[(2)]);
var state_34102__$1 = state_34102;
var statearr_34165_34235 = state_34102__$1;
(statearr_34165_34235[(2)] = inst_33995);

(statearr_34165_34235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (5))){
var inst_33965 = (state_34102[(7)]);
var inst_33966 = (state_34102[(10)]);
var inst_33968 = (inst_33966 < inst_33965);
var inst_33969 = inst_33968;
var state_34102__$1 = state_34102;
if(cljs.core.truth_(inst_33969)){
var statearr_34166_34236 = state_34102__$1;
(statearr_34166_34236[(1)] = (7));

} else {
var statearr_34167_34237 = state_34102__$1;
(statearr_34167_34237[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (14))){
var inst_33976 = (state_34102[(22)]);
var inst_33985 = cljs.core.first.call(null,inst_33976);
var inst_33986 = figwheel.client.file_reloading.eval_body.call(null,inst_33985,opts);
var inst_33987 = cljs.core.next.call(null,inst_33976);
var inst_33963 = inst_33987;
var inst_33964 = null;
var inst_33965 = (0);
var inst_33966 = (0);
var state_34102__$1 = (function (){var statearr_34168 = state_34102;
(statearr_34168[(7)] = inst_33965);

(statearr_34168[(8)] = inst_33964);

(statearr_34168[(9)] = inst_33963);

(statearr_34168[(32)] = inst_33986);

(statearr_34168[(10)] = inst_33966);

return statearr_34168;
})();
var statearr_34169_34238 = state_34102__$1;
(statearr_34169_34238[(2)] = null);

(statearr_34169_34238[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (45))){
var state_34102__$1 = state_34102;
var statearr_34170_34239 = state_34102__$1;
(statearr_34170_34239[(2)] = null);

(statearr_34170_34239[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (26))){
var inst_34020 = (state_34102[(23)]);
var inst_34024 = (state_34102[(24)]);
var inst_34016 = (state_34102[(19)]);
var inst_34019 = (state_34102[(25)]);
var inst_34022 = (state_34102[(26)]);
var inst_34039 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34041 = (function (){var all_files = inst_34016;
var res_SINGLEQUOTE_ = inst_34019;
var res = inst_34020;
var files_not_loaded = inst_34022;
var dependencies_that_loaded = inst_34024;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34020,inst_34024,inst_34016,inst_34019,inst_34022,inst_34039,state_val_34103,c__28578__auto__,map__33948,map__33948__$1,opts,before_jsload,on_jsload,reload_dependents,map__33949,map__33949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34040){
var map__34171 = p__34040;
var map__34171__$1 = ((((!((map__34171 == null)))?((((map__34171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34171):map__34171);
var namespace = cljs.core.get.call(null,map__34171__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34171__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34020,inst_34024,inst_34016,inst_34019,inst_34022,inst_34039,state_val_34103,c__28578__auto__,map__33948,map__33948__$1,opts,before_jsload,on_jsload,reload_dependents,map__33949,map__33949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34042 = cljs.core.map.call(null,inst_34041,inst_34020);
var inst_34043 = cljs.core.pr_str.call(null,inst_34042);
var inst_34044 = figwheel.client.utils.log.call(null,inst_34043);
var inst_34045 = (function (){var all_files = inst_34016;
var res_SINGLEQUOTE_ = inst_34019;
var res = inst_34020;
var files_not_loaded = inst_34022;
var dependencies_that_loaded = inst_34024;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34020,inst_34024,inst_34016,inst_34019,inst_34022,inst_34039,inst_34041,inst_34042,inst_34043,inst_34044,state_val_34103,c__28578__auto__,map__33948,map__33948__$1,opts,before_jsload,on_jsload,reload_dependents,map__33949,map__33949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34020,inst_34024,inst_34016,inst_34019,inst_34022,inst_34039,inst_34041,inst_34042,inst_34043,inst_34044,state_val_34103,c__28578__auto__,map__33948,map__33948__$1,opts,before_jsload,on_jsload,reload_dependents,map__33949,map__33949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34046 = setTimeout(inst_34045,(10));
var state_34102__$1 = (function (){var statearr_34173 = state_34102;
(statearr_34173[(33)] = inst_34039);

(statearr_34173[(34)] = inst_34044);

return statearr_34173;
})();
var statearr_34174_34240 = state_34102__$1;
(statearr_34174_34240[(2)] = inst_34046);

(statearr_34174_34240[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (16))){
var state_34102__$1 = state_34102;
var statearr_34175_34241 = state_34102__$1;
(statearr_34175_34241[(2)] = reload_dependents);

(statearr_34175_34241[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (38))){
var inst_34056 = (state_34102[(16)]);
var inst_34073 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34056);
var state_34102__$1 = state_34102;
var statearr_34176_34242 = state_34102__$1;
(statearr_34176_34242[(2)] = inst_34073);

(statearr_34176_34242[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (30))){
var state_34102__$1 = state_34102;
var statearr_34177_34243 = state_34102__$1;
(statearr_34177_34243[(2)] = null);

(statearr_34177_34243[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (10))){
var inst_33976 = (state_34102[(22)]);
var inst_33978 = cljs.core.chunked_seq_QMARK_.call(null,inst_33976);
var state_34102__$1 = state_34102;
if(inst_33978){
var statearr_34178_34244 = state_34102__$1;
(statearr_34178_34244[(1)] = (13));

} else {
var statearr_34179_34245 = state_34102__$1;
(statearr_34179_34245[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (18))){
var inst_34010 = (state_34102[(2)]);
var state_34102__$1 = state_34102;
if(cljs.core.truth_(inst_34010)){
var statearr_34180_34246 = state_34102__$1;
(statearr_34180_34246[(1)] = (19));

} else {
var statearr_34181_34247 = state_34102__$1;
(statearr_34181_34247[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (42))){
var state_34102__$1 = state_34102;
var statearr_34182_34248 = state_34102__$1;
(statearr_34182_34248[(2)] = null);

(statearr_34182_34248[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (37))){
var inst_34068 = (state_34102[(2)]);
var state_34102__$1 = state_34102;
var statearr_34183_34249 = state_34102__$1;
(statearr_34183_34249[(2)] = inst_34068);

(statearr_34183_34249[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34103 === (8))){
var inst_33963 = (state_34102[(9)]);
var inst_33976 = (state_34102[(22)]);
var inst_33976__$1 = cljs.core.seq.call(null,inst_33963);
var state_34102__$1 = (function (){var statearr_34184 = state_34102;
(statearr_34184[(22)] = inst_33976__$1);

return statearr_34184;
})();
if(inst_33976__$1){
var statearr_34185_34250 = state_34102__$1;
(statearr_34185_34250[(1)] = (10));

} else {
var statearr_34186_34251 = state_34102__$1;
(statearr_34186_34251[(1)] = (11));

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
});})(c__28578__auto__,map__33948,map__33948__$1,opts,before_jsload,on_jsload,reload_dependents,map__33949,map__33949__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27997__auto__,c__28578__auto__,map__33948,map__33948__$1,opts,before_jsload,on_jsload,reload_dependents,map__33949,map__33949__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27998__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27998__auto____0 = (function (){
var statearr_34190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34190[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27998__auto__);

(statearr_34190[(1)] = (1));

return statearr_34190;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27998__auto____1 = (function (state_34102){
while(true){
var ret_value__27999__auto__ = (function (){try{while(true){
var result__28000__auto__ = switch__27997__auto__.call(null,state_34102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28000__auto__;
}
break;
}
}catch (e34191){if((e34191 instanceof Object)){
var ex__28001__auto__ = e34191;
var statearr_34192_34252 = state_34102;
(statearr_34192_34252[(5)] = ex__28001__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27999__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34253 = state_34102;
state_34102 = G__34253;
continue;
} else {
return ret_value__27999__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27998__auto__ = function(state_34102){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27998__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27998__auto____1.call(this,state_34102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27998__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27998__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27998__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27998__auto__;
})()
;})(switch__27997__auto__,c__28578__auto__,map__33948,map__33948__$1,opts,before_jsload,on_jsload,reload_dependents,map__33949,map__33949__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28580__auto__ = (function (){var statearr_34193 = f__28579__auto__.call(null);
(statearr_34193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28578__auto__);

return statearr_34193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28580__auto__);
});})(c__28578__auto__,map__33948,map__33948__$1,opts,before_jsload,on_jsload,reload_dependents,map__33949,map__33949__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28578__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34256,link){
var map__34259 = p__34256;
var map__34259__$1 = ((((!((map__34259 == null)))?((((map__34259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34259):map__34259);
var file = cljs.core.get.call(null,map__34259__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34259,map__34259__$1,file){
return (function (p1__34254_SHARP_,p2__34255_SHARP_){
if(cljs.core._EQ_.call(null,p1__34254_SHARP_,p2__34255_SHARP_)){
return p1__34254_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34259,map__34259__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34265){
var map__34266 = p__34265;
var map__34266__$1 = ((((!((map__34266 == null)))?((((map__34266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34266):map__34266);
var match_length = cljs.core.get.call(null,map__34266__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34266__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34261_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34261_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34268_SHARP_,p2__34269_SHARP_){
return cljs.core.assoc.call(null,p1__34268_SHARP_,cljs.core.get.call(null,p2__34269_SHARP_,key),p2__34269_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_34270 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34270);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34270);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34271,p__34272){
var map__34277 = p__34271;
var map__34277__$1 = ((((!((map__34277 == null)))?((((map__34277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34277):map__34277);
var on_cssload = cljs.core.get.call(null,map__34277__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34278 = p__34272;
var map__34278__$1 = ((((!((map__34278 == null)))?((((map__34278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34278):map__34278);
var files_msg = map__34278__$1;
var files = cljs.core.get.call(null,map__34278__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1497204729108