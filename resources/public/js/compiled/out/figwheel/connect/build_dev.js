// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('ms.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__40345__delegate = function (x){
if(cljs.core.truth_(ms.core.on_js_reload)){
return cljs.core.apply.call(null,ms.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'ms.core/on-js-reload' is missing");
}
};
var G__40345 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__40346__i = 0, G__40346__a = new Array(arguments.length -  0);
while (G__40346__i < G__40346__a.length) {G__40346__a[G__40346__i] = arguments[G__40346__i + 0]; ++G__40346__i;}
  x = new cljs.core.IndexedSeq(G__40346__a,0);
} 
return G__40345__delegate.call(this,x);};
G__40345.cljs$lang$maxFixedArity = 0;
G__40345.cljs$lang$applyTo = (function (arglist__40347){
var x = cljs.core.seq(arglist__40347);
return G__40345__delegate(x);
});
G__40345.cljs$core$IFn$_invoke$arity$variadic = G__40345__delegate;
return G__40345;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1497141549685