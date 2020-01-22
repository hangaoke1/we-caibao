var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[4],[[5],[[5],[1,'cropper-crop-box data-v-1915aeb0']],[[2,'?:'],[[7],[3,'cropFixed']],[1,'pointer-events'],[1,'']]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'width:'],[[2,'+'],[[7],[3,'cropW']],[1,'px']]],[1,';']],[[2,'+'],[[2,'+'],[1,'height:'],[[2,'+'],[[7],[3,'cropH']],[1,'px']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'transform:'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'translate3d('],[[7],[3,'cropOffsertX']]],[1,'px,']],[[7],[3,'cropOffsertY']]],[1,'px,']],[1,'0)']]],[1,';']]])
Z([[2,'!'],[[7],[3,'cropFixed']]])
Z(z[2])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showPopup']])
Z([3,'__e'])
Z([3,'uni-popup data-v-8e75530a'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'clear']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__l'])
Z(z[1])
Z([3,'data-v-8e75530a'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'onTap']]]]]]]]])
Z([[7],[3,'duration']])
Z([[4],[[5],[1,'fade']]])
Z([[7],[3,'showTrans']])
Z([[7],[3,'maskClass']])
Z([3,'1'])
Z(z[4])
Z(z[1])
Z(z[6])
Z(z[7])
Z(z[8])
Z([[7],[3,'ani']])
Z(z[10])
Z([[7],[3,'transClass']])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z([3,'uni-popup__wrapper-box data-v-8e75530a'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clear']],[[4],[[5],[1,'$event']]]]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShow']])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-transition vue-ref']],[[6],[[7],[3,'ani']],[3,'in']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'ani'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'transform:'],[[7],[3,'transform']]],[1,';']],[[7],[3,'stylesObject']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[1,'confirm']]]]]]]],[[4],[[5],[[5],[1,'^cancel']],[[4],[[5],[[4],[[5],[1,'cancel']]]]]]]]])
Z([[7],[3,'tempFilePath']])
Z([3,'1'])
Z(z[0])
Z([3,'vue-ref'])
Z([3,'popup'])
Z([3,'center'])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/invinbg-image-cropper/invinbg-image-cropper.wxml','./components/uni-popup/uni-popup.wxml','./components/uni-transition/uni-transition.wxml','./pages/index/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,2,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,3,e,s,gg)){oD.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var cF=_v()
_(r,cF)
if(_oz(z,0,e,s,gg)){cF.wxVkey=1
var hG=_mz(z,'view',['catchtouchmove',1,'class',1,'data-event-opts',2],[],e,s,gg)
var oH=_mz(z,'uni-transition',['bind:__l',4,'bind:click',1,'class',2,'data-event-opts',3,'duration',4,'modeClass',5,'show',6,'styles',7,'vueId',8],[],e,s,gg)
_(hG,oH)
var cI=_mz(z,'uni-transition',['bind:__l',13,'bind:click',1,'class',2,'data-event-opts',3,'duration',4,'modeClass',5,'show',6,'styles',7,'vueId',8,'vueSlots',9],[],e,s,gg)
var oJ=_mz(z,'view',['catchtap',23,'class',1,'data-event-opts',2],[],e,s,gg)
var lK=_n('slot')
_(oJ,lK)
_(cI,oJ)
_(hG,cI)
_(cF,hG)
}
cF.wxXCkey=1
cF.wxXCkey=3
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var tM=_v()
_(r,tM)
if(_oz(z,0,e,s,gg)){tM.wxVkey=1
var eN=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2,'data-ref',3,'style',4],[],e,s,gg)
var bO=_n('slot')
_(eN,bO)
_(tM,eN)
}
tM.wxXCkey=1
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var xQ=_n('view')
var oR=_mz(z,'image-cropper',['bind:__l',0,'bind:cancel',1,'bind:confirm',1,'data-event-opts',2,'src',3,'vueId',4],[],e,s,gg)
_(xQ,oR)
var fS=_mz(z,'uni-popup',['bind:__l',6,'class',1,'data-ref',2,'type',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(xQ,fS)
_(r,xQ)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"小裁","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"networkTimeout":{"request":"10000"},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"米宝","compilerVersion":"2.5.1","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/invinbg-image-cropper/invinbg-image-cropper.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/invinbg-image-cropper/invinbg-image-cropper.wxml']=$gwx('./components/invinbg-image-cropper/invinbg-image-cropper.wxml');

__wxAppCode__['components/uni-popup/uni-popup.json']={"component":true,"usingComponents":{"uni-transition":"/components/uni-transition/uni-transition"}};
__wxAppCode__['components/uni-popup/uni-popup.wxml']=$gwx('./components/uni-popup/uni-popup.wxml');

__wxAppCode__['components/uni-transition/uni-transition.json']={"component":true,"usingComponents":{}};
__wxAppCode__['components/uni-transition/uni-transition.wxml']=$gwx('./components/uni-transition/uni-transition.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarTitleText":"小裁","titleNView":{"buttons":[{"text":"反馈","width":"80px","fontSize":"16px"}]},"usingComponents":{"image-cropper":"/components/invinbg-image-cropper/invinbg-image-cropper","uni-popup":"/components/uni-popup/uni-popup"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"5f55":function(n,e,t){"use strict";t.r(e);var o=t("6500"),u=t.n(o);for(var c in o)"default"!==c&&function(n){t.d(e,n,function(){return o[n]})}(c);e["default"]=u.a},6459:function(n,e,t){"use strict";t.r(e);var o=t("5f55");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("9a6c");var c,r,a,f,l=t("f0c5"),i=Object(l["a"])(o["default"],c,r,!1,null,null,null,!1,a,f);e["default"]=i.exports},6500:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={onLaunch:function(){console.log(n("App Launch"," at App.vue:4"))},onShow:function(){console.log(n("App Show"," at App.vue:7"))},onHide:function(){console.log(n("App Hide"," at App.vue:10"))}};e.default=t}).call(this,t("0de9")["default"])},"9a6c":function(n,e,t){"use strict";var o=t("aa06"),u=t.n(o);u.a},aa06:function(n,e,t){},b2ce:function(n,e,t){"use strict";(function(n){t("1fbc"),t("921b");var e=u(t("66fd")),o=u(t("6459"));function u(n){return n&&n.__esModule?n:{default:n}}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){r(n,e,t[e])})}return n}function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.default.config.productionTip=!1,o.default.mpType="app";var a=new e.default(c({},o.default));n(a).$mount()}).call(this,t("6e42")["createApp"])}},[["b2ce","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var r, o, a = n[0], p = n[1], c = n[2], l = 0, s = []; l < a.length; l++) {
      o = a[l], i[o] && s.push(i[o][0]), i[o] = 0;
    }

    for (r in p) {
      Object.prototype.hasOwnProperty.call(p, r) && (e[r] = p[r]);
    }

    f && f(n);

    while (s.length) {
      s.shift()();
    }

    return u.push.apply(u, c || []), t();
  }

  function t() {
    for (var e, n = 0; n < u.length; n++) {
      for (var t = u[n], r = !0, o = 1; o < t.length; o++) {
        var a = t[o];
        0 !== i[a] && (r = !1);
      }

      r && (u.splice(n--, 1), e = p(p.s = t[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      i = {
    "common/runtime": 0
  },
      u = [];

  function a(e) {
    return p.p + "" + e + ".js";
  }

  function p(n) {
    if (r[n]) return r[n].exports;
    var t = r[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, p), t.l = !0, t.exports;
  }

  p.e = function (e) {
    var n = [],
        t = {
      "components/invinbg-image-cropper/invinbg-image-cropper": 1,
      "components/uni-popup/uni-popup": 1,
      "components/uni-transition/uni-transition": 1
    };
    o[e] ? n.push(o[e]) : 0 !== o[e] && t[e] && n.push(o[e] = new Promise(function (n, t) {
      for (var r = ({
        "components/invinbg-image-cropper/invinbg-image-cropper": "components/invinbg-image-cropper/invinbg-image-cropper",
        "components/uni-popup/uni-popup": "components/uni-popup/uni-popup",
        "components/uni-transition/uni-transition": "components/uni-transition/uni-transition"
      }[e] || e) + ".wxss", i = p.p + r, u = document.getElementsByTagName("link"), a = 0; a < u.length; a++) {
        var c = u[a],
            l = c.getAttribute("data-href") || c.getAttribute("href");
        if ("stylesheet" === c.rel && (l === r || l === i)) return n();
      }

      var s = document.getElementsByTagName("style");

      for (a = 0; a < s.length; a++) {
        c = s[a], l = c.getAttribute("data-href");
        if (l === r || l === i) return n();
      }

      var f = document.createElement("link");
      f.rel = "stylesheet", f.type = "text/css", f.onload = n, f.onerror = function (n) {
        var r = n && n.target && n.target.src || i,
            u = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        u.request = r, delete o[e], f.parentNode.removeChild(f), t(u);
      }, f.href = i;
      var m = document.getElementsByTagName("head")[0];
      m.appendChild(f);
    }).then(function () {
      o[e] = 0;
    }));
    var r = i[e];
    if (0 !== r) if (r) n.push(r[2]);else {
      var u = new Promise(function (n, t) {
        r = i[e] = [n, t];
      });
      n.push(r[2] = u);
      var c,
          l = document.createElement("script");
      l.charset = "utf-8", l.timeout = 120, p.nc && l.setAttribute("nonce", p.nc), l.src = a(e), c = function c(n) {
        l.onerror = l.onload = null, clearTimeout(s);
        var t = i[e];

        if (0 !== t) {
          if (t) {
            var r = n && ("load" === n.type ? "missing" : n.type),
                o = n && n.target && n.target.src,
                u = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            u.type = r, u.request = o, t[1](u);
          }

          i[e] = void 0;
        }
      };
      var s = setTimeout(function () {
        c({
          type: "timeout",
          target: l
        });
      }, 12e4);
      l.onerror = l.onload = c, document.head.appendChild(l);
    }
    return Promise.all(n);
  }, p.m = e, p.c = r, p.d = function (e, n, t) {
    p.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, p.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, p.t = function (e, n) {
    if (1 & n && (e = p(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (p.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var r in e) {
      p.d(t, r, function (n) {
        return e[n];
      }.bind(null, r));
    }
    return t;
  }, p.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return p.d(n, "a", n), n;
  }, p.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, p.p = "/", p.oe = function (e) {
    throw console.error(e), e;
  };
  var c = global["webpackJsonp"] = global["webpackJsonp"] || [],
      l = c.push.bind(c);
  c.push = n, c = c.slice();

  for (var s = 0; s < c.length; s++) {
    n(c[s]);
  }

  var f = l;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,n,e){"use strict";function r(t){var n=Object.prototype.toString.call(t);return n.substring(8,n.length-1)}function i(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];var i=n.map(function(t){var n=Object.prototype.toString.call(t);if("[object object]"===n.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(i){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var e=r(t).toUpperCase();t="NUMBER"===e||"BOOLEAN"===e?"---BEGIN:"+e+"---"+t+"---END:"+e+"---":String(t)}return t}),o="";if(i.length>1){var u=i.pop();o=i.join("---COMMA---"),0===u.indexOf(" at ")?o+=u:o+="---COMMA---"+u}else o=i[0];return o}Object.defineProperty(n,"__esModule",{value:!0}),n.default=i},"182e":function(t,n,e){"use strict";(function(t,r){Object.defineProperty(n,"__esModule",{value:!0}),n.default=u;var i=o(e("d5cc"));function o(t){return t&&t.__esModule?t:{default:t}}function u(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;console.log(t("---- 版本更新检测开始 ----"," at lib/checkUpdate.js:9")),plus.runtime.getProperty(plus.runtime.appid,function(o){var u=r.getSystemInfoSync().platform,a=o.version;i.default.queryVersion({appkey:e}).then(function(e){if(console.log(t("当前平台: "+u," at lib/checkUpdate.js:17")),console.log(t("当前版本: "+a," at lib/checkUpdate.js:18")),console.log(t("最新版本: "+e.version," at lib/checkUpdate.js:19")),a.split(".")[0]>e.version.split(".")[0])console.log(t("版本超前，无需更新"," at lib/checkUpdate.js:23"));else if(a!=e.version){var i=a.split(".")[0]!=e.version.split(".")[0];if(i&&"ios"==u)r.showModal({title:"版本更新",content:"小店有新的内容更新啦，点击确认前往更新哦～",showCancel:!1,success:function(){plus.runtime.openURL(e.iosUrl)}});else{var o=i?e.androidUrl:e.commonUrl;if(!o)return void r.showToast({title:"配置异常, 请联系相关人员",icon:"none"});n&&r.showLoading({title:"更新中"});var c=r.downloadFile({url:o,success:function(n){r.hideLoading(),console.log(t(n," at lib/checkUpdate.js:61")),200===n.statusCode&&plus.runtime.install(n.tempFilePath,{force:!1},function(){r.showModal({title:"更新完成",content:"快乐赢球，尽情收米",confirmText:"重启应用",showCancel:!1,success:function(t){plus.runtime.restart()}})},function(n){console.log(t(n," at lib/checkUpdate.js:76")),r.showToast({title:"安装升级包失败",icon:"none"})})},fail:function(){r.hideLoading(),r.showToast({title:"下载升级包失败",icon:"none"})}});c.onProgressUpdate(function(t){})}}else n&&r.showToast({title:"已经是最新版本, 无需更新",icon:"none"}),console.log(t("已经是最新版本, 无需更新"," at lib/checkUpdate.js:104"))}).catch(function(e){n&&r.showToast({title:"版本更新检测失败",icon:"none"}),console.log(t("---- 版本更新检测失败 ----"," at lib/checkUpdate.js:113"))})})}}).call(this,e("0de9")["default"],e("6e42")["default"])},"1fbc":function(t,n,e){},"2ef0":function(t,n,e){(function(t,r){var i;
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(){var o,u="4.17.11",a=200,c="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",s="Expected a function",f="__lodash_hash_undefined__",l=500,p="__lodash_placeholder__",h=1,v=2,d=4,_=1,g=2,y=1,m=2,b=4,w=8,$=16,O=32,A=64,j=128,k=256,x=512,S=30,E="...",D=800,I=16,P=1,T=2,C=3,R=1/0,N=9007199254740991,U=1.7976931348623157e308,B=NaN,M=4294967295,L=M-1,q=M>>>1,V=[["ary",j],["bind",y],["bindKey",m],["curry",w],["curryRight",$],["flip",x],["partial",O],["partialRight",A],["rearg",k]],z="[object Arguments]",F="[object Array]",W="[object AsyncFunction]",H="[object Boolean]",J="[object Date]",G="[object DOMException]",K="[object Error]",Z="[object Function]",Q="[object GeneratorFunction]",Y="[object Map]",X="[object Number]",tt="[object Null]",nt="[object Object]",et="[object Promise]",rt="[object Proxy]",it="[object RegExp]",ot="[object Set]",ut="[object String]",at="[object Symbol]",ct="[object Undefined]",st="[object WeakMap]",ft="[object WeakSet]",lt="[object ArrayBuffer]",pt="[object DataView]",ht="[object Float32Array]",vt="[object Float64Array]",dt="[object Int8Array]",_t="[object Int16Array]",gt="[object Int32Array]",yt="[object Uint8Array]",mt="[object Uint8ClampedArray]",bt="[object Uint16Array]",wt="[object Uint32Array]",$t=/\b__p \+= '';/g,Ot=/\b(__p \+=) '' \+/g,At=/(__e\(.*?\)|\b__t\)) \+\n'';/g,jt=/&(?:amp|lt|gt|quot|#39);/g,kt=/[&<>"']/g,xt=RegExp(jt.source),St=RegExp(kt.source),Et=/<%-([\s\S]+?)%>/g,Dt=/<%([\s\S]+?)%>/g,It=/<%=([\s\S]+?)%>/g,Pt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Tt=/^\w*$/,Ct=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Rt=/[\\^$.*+?()[\]{}|]/g,Nt=RegExp(Rt.source),Ut=/^\s+|\s+$/g,Bt=/^\s+/,Mt=/\s+$/,Lt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,qt=/\{\n\/\* \[wrapped with (.+)\] \*/,Vt=/,? & /,zt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ft=/\\(\\)?/g,Wt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ht=/\w*$/,Jt=/^[-+]0x[0-9a-f]+$/i,Gt=/^0b[01]+$/i,Kt=/^\[object .+?Constructor\]$/,Zt=/^0o[0-7]+$/i,Qt=/^(?:0|[1-9]\d*)$/,Yt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Xt=/($^)/,tn=/['\n\r\u2028\u2029\\]/g,nn="\\ud800-\\udfff",en="\\u0300-\\u036f",rn="\\ufe20-\\ufe2f",on="\\u20d0-\\u20ff",un=en+rn+on,an="\\u2700-\\u27bf",cn="a-z\\xdf-\\xf6\\xf8-\\xff",sn="\\xac\\xb1\\xd7\\xf7",fn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ln="\\u2000-\\u206f",pn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",hn="A-Z\\xc0-\\xd6\\xd8-\\xde",vn="\\ufe0e\\ufe0f",dn=sn+fn+ln+pn,_n="['’]",gn="["+nn+"]",yn="["+dn+"]",mn="["+un+"]",bn="\\d+",wn="["+an+"]",$n="["+cn+"]",On="[^"+nn+dn+bn+an+cn+hn+"]",An="\\ud83c[\\udffb-\\udfff]",jn="(?:"+mn+"|"+An+")",kn="[^"+nn+"]",xn="(?:\\ud83c[\\udde6-\\uddff]){2}",Sn="[\\ud800-\\udbff][\\udc00-\\udfff]",En="["+hn+"]",Dn="\\u200d",In="(?:"+$n+"|"+On+")",Pn="(?:"+En+"|"+On+")",Tn="(?:"+_n+"(?:d|ll|m|re|s|t|ve))?",Cn="(?:"+_n+"(?:D|LL|M|RE|S|T|VE))?",Rn=jn+"?",Nn="["+vn+"]?",Un="(?:"+Dn+"(?:"+[kn,xn,Sn].join("|")+")"+Nn+Rn+")*",Bn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Mn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ln=Nn+Rn+Un,qn="(?:"+[wn,xn,Sn].join("|")+")"+Ln,Vn="(?:"+[kn+mn+"?",mn,xn,Sn,gn].join("|")+")",zn=RegExp(_n,"g"),Fn=RegExp(mn,"g"),Wn=RegExp(An+"(?="+An+")|"+Vn+Ln,"g"),Hn=RegExp([En+"?"+$n+"+"+Tn+"(?="+[yn,En,"$"].join("|")+")",Pn+"+"+Cn+"(?="+[yn,En+In,"$"].join("|")+")",En+"?"+In+"+"+Tn,En+"+"+Cn,Mn,Bn,bn,qn].join("|"),"g"),Jn=RegExp("["+Dn+nn+un+vn+"]"),Gn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Kn=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Zn=-1,Qn={};Qn[ht]=Qn[vt]=Qn[dt]=Qn[_t]=Qn[gt]=Qn[yt]=Qn[mt]=Qn[bt]=Qn[wt]=!0,Qn[z]=Qn[F]=Qn[lt]=Qn[H]=Qn[pt]=Qn[J]=Qn[K]=Qn[Z]=Qn[Y]=Qn[X]=Qn[nt]=Qn[it]=Qn[ot]=Qn[ut]=Qn[st]=!1;var Yn={};Yn[z]=Yn[F]=Yn[lt]=Yn[pt]=Yn[H]=Yn[J]=Yn[ht]=Yn[vt]=Yn[dt]=Yn[_t]=Yn[gt]=Yn[Y]=Yn[X]=Yn[nt]=Yn[it]=Yn[ot]=Yn[ut]=Yn[at]=Yn[yt]=Yn[mt]=Yn[bt]=Yn[wt]=!0,Yn[K]=Yn[Z]=Yn[st]=!1;var Xn={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},te={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ne={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},ee={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},re=parseFloat,ie=parseInt,oe="object"==typeof t&&t&&t.Object===Object&&t,ue="object"==typeof self&&self&&self.Object===Object&&self,ae=oe||ue||Function("return this")(),ce=n&&!n.nodeType&&n,se=ce&&"object"==typeof r&&r&&!r.nodeType&&r,fe=se&&se.exports===ce,le=fe&&oe.process,pe=function(){try{var t=se&&se.require&&se.require("util").types;return t||le&&le.binding&&le.binding("util")}catch(n){}}(),he=pe&&pe.isArrayBuffer,ve=pe&&pe.isDate,de=pe&&pe.isMap,_e=pe&&pe.isRegExp,ge=pe&&pe.isSet,ye=pe&&pe.isTypedArray;function me(t,n,e){switch(e.length){case 0:return t.call(n);case 1:return t.call(n,e[0]);case 2:return t.call(n,e[0],e[1]);case 3:return t.call(n,e[0],e[1],e[2])}return t.apply(n,e)}function be(t,n,e,r){var i=-1,o=null==t?0:t.length;while(++i<o){var u=t[i];n(r,u,e(u),t)}return r}function we(t,n){var e=-1,r=null==t?0:t.length;while(++e<r)if(!1===n(t[e],e,t))break;return t}function $e(t,n){var e=null==t?0:t.length;while(e--)if(!1===n(t[e],e,t))break;return t}function Oe(t,n){var e=-1,r=null==t?0:t.length;while(++e<r)if(!n(t[e],e,t))return!1;return!0}function Ae(t,n){var e=-1,r=null==t?0:t.length,i=0,o=[];while(++e<r){var u=t[e];n(u,e,t)&&(o[i++]=u)}return o}function je(t,n){var e=null==t?0:t.length;return!!e&&Ue(t,n,0)>-1}function ke(t,n,e){var r=-1,i=null==t?0:t.length;while(++r<i)if(e(n,t[r]))return!0;return!1}function xe(t,n){var e=-1,r=null==t?0:t.length,i=Array(r);while(++e<r)i[e]=n(t[e],e,t);return i}function Se(t,n){var e=-1,r=n.length,i=t.length;while(++e<r)t[i+e]=n[e];return t}function Ee(t,n,e,r){var i=-1,o=null==t?0:t.length;r&&o&&(e=t[++i]);while(++i<o)e=n(e,t[i],i,t);return e}function De(t,n,e,r){var i=null==t?0:t.length;r&&i&&(e=t[--i]);while(i--)e=n(e,t[i],i,t);return e}function Ie(t,n){var e=-1,r=null==t?0:t.length;while(++e<r)if(n(t[e],e,t))return!0;return!1}var Pe=qe("length");function Te(t){return t.split("")}function Ce(t){return t.match(zt)||[]}function Re(t,n,e){var r;return e(t,function(t,e,i){if(n(t,e,i))return r=e,!1}),r}function Ne(t,n,e,r){var i=t.length,o=e+(r?1:-1);while(r?o--:++o<i)if(n(t[o],o,t))return o;return-1}function Ue(t,n,e){return n===n?pr(t,n,e):Ne(t,Me,e)}function Be(t,n,e,r){var i=e-1,o=t.length;while(++i<o)if(r(t[i],n))return i;return-1}function Me(t){return t!==t}function Le(t,n){var e=null==t?0:t.length;return e?We(t,n)/e:B}function qe(t){return function(n){return null==n?o:n[t]}}function Ve(t){return function(n){return null==t?o:t[n]}}function ze(t,n,e,r,i){return i(t,function(t,i,o){e=r?(r=!1,t):n(e,t,i,o)}),e}function Fe(t,n){var e=t.length;t.sort(n);while(e--)t[e]=t[e].value;return t}function We(t,n){var e,r=-1,i=t.length;while(++r<i){var u=n(t[r]);u!==o&&(e=e===o?u:e+u)}return e}function He(t,n){var e=-1,r=Array(t);while(++e<t)r[e]=n(e);return r}function Je(t,n){return xe(n,function(n){return[n,t[n]]})}function Ge(t){return function(n){return t(n)}}function Ke(t,n){return xe(n,function(n){return t[n]})}function Ze(t,n){return t.has(n)}function Qe(t,n){var e=-1,r=t.length;while(++e<r&&Ue(n,t[e],0)>-1);return e}function Ye(t,n){var e=t.length;while(e--&&Ue(n,t[e],0)>-1);return e}function Xe(t,n){var e=t.length,r=0;while(e--)t[e]===n&&++r;return r}var tr=Ve(Xn),nr=Ve(te);function er(t){return"\\"+ee[t]}function rr(t,n){return null==t?o:t[n]}function ir(t){return Jn.test(t)}function or(t){return Gn.test(t)}function ur(t){var n,e=[];while(!(n=t.next()).done)e.push(n.value);return e}function ar(t){var n=-1,e=Array(t.size);return t.forEach(function(t,r){e[++n]=[r,t]}),e}function cr(t,n){return function(e){return t(n(e))}}function sr(t,n){var e=-1,r=t.length,i=0,o=[];while(++e<r){var u=t[e];u!==n&&u!==p||(t[e]=p,o[i++]=e)}return o}function fr(t){var n=-1,e=Array(t.size);return t.forEach(function(t){e[++n]=t}),e}function lr(t){var n=-1,e=Array(t.size);return t.forEach(function(t){e[++n]=[t,t]}),e}function pr(t,n,e){var r=e-1,i=t.length;while(++r<i)if(t[r]===n)return r;return-1}function hr(t,n,e){var r=e+1;while(r--)if(t[r]===n)return r;return r}function vr(t){return ir(t)?gr(t):Pe(t)}function dr(t){return ir(t)?yr(t):Te(t)}var _r=Ve(ne);function gr(t){var n=Wn.lastIndex=0;while(Wn.test(t))++n;return n}function yr(t){return t.match(Wn)||[]}function mr(t){return t.match(Hn)||[]}var br=function t(n){n=null==n?ae:wr.defaults(ae.Object(),n,wr.pick(ae,Kn));var e=n.Array,r=n.Date,i=n.Error,zt=n.Function,nn=n.Math,en=n.Object,rn=n.RegExp,on=n.String,un=n.TypeError,an=e.prototype,cn=zt.prototype,sn=en.prototype,fn=n["__core-js_shared__"],ln=cn.toString,pn=sn.hasOwnProperty,hn=0,vn=function(){var t=/[^.]+$/.exec(fn&&fn.keys&&fn.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),dn=sn.toString,_n=ln.call(en),gn=ae._,yn=rn("^"+ln.call(pn).replace(Rt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),mn=fe?n.Buffer:o,bn=n.Symbol,wn=n.Uint8Array,$n=mn?mn.allocUnsafe:o,On=cr(en.getPrototypeOf,en),An=en.create,jn=sn.propertyIsEnumerable,kn=an.splice,xn=bn?bn.isConcatSpreadable:o,Sn=bn?bn.iterator:o,En=bn?bn.toStringTag:o,Dn=function(){try{var t=Wu(en,"defineProperty");return t({},"",{}),t}catch(n){}}(),In=n.clearTimeout!==ae.clearTimeout&&n.clearTimeout,Pn=r&&r.now!==ae.Date.now&&r.now,Tn=n.setTimeout!==ae.setTimeout&&n.setTimeout,Cn=nn.ceil,Rn=nn.floor,Nn=en.getOwnPropertySymbols,Un=mn?mn.isBuffer:o,Bn=n.isFinite,Mn=an.join,Ln=cr(en.keys,en),qn=nn.max,Vn=nn.min,Wn=r.now,Hn=n.parseInt,Jn=nn.random,Gn=an.reverse,Xn=Wu(n,"DataView"),te=Wu(n,"Map"),ne=Wu(n,"Promise"),ee=Wu(n,"Set"),oe=Wu(n,"WeakMap"),ue=Wu(en,"create"),ce=oe&&new oe,se={},le=Da(Xn),pe=Da(te),Pe=Da(ne),Te=Da(ee),Ve=Da(oe),pr=bn?bn.prototype:o,gr=pr?pr.valueOf:o,yr=pr?pr.toString:o;function br(t){if(Af(t)&&!af(t)&&!(t instanceof jr)){if(t instanceof Ar)return t;if(pn.call(t,"__wrapped__"))return Pa(t)}return new Ar(t)}var $r=function(){function t(){}return function(n){if(!Of(n))return{};if(An)return An(n);t.prototype=n;var e=new t;return t.prototype=o,e}}();function Or(){}function Ar(t,n){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!n,this.__index__=0,this.__values__=o}function jr(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=M,this.__views__=[]}function kr(){var t=new jr(this.__wrapped__);return t.__actions__=eu(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=eu(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=eu(this.__views__),t}function xr(){if(this.__filtered__){var t=new jr(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function Sr(){var t=this.__wrapped__.value(),n=this.__dir__,e=af(t),r=n<0,i=e?t.length:0,o=Zu(0,i,this.__views__),u=o.start,a=o.end,c=a-u,s=r?a:u-1,f=this.__iteratees__,l=f.length,p=0,h=Vn(c,this.__takeCount__);if(!e||!r&&i==c&&h==c)return Uo(t,this.__actions__);var v=[];t:while(c--&&p<h){s+=n;var d=-1,_=t[s];while(++d<l){var g=f[d],y=g.iteratee,m=g.type,b=y(_);if(m==T)_=b;else if(!b){if(m==P)continue t;break t}}v[p++]=_}return v}function Er(t){var n=-1,e=null==t?0:t.length;this.clear();while(++n<e){var r=t[n];this.set(r[0],r[1])}}function Dr(){this.__data__=ue?ue(null):{},this.size=0}function Ir(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n}function Pr(t){var n=this.__data__;if(ue){var e=n[t];return e===f?o:e}return pn.call(n,t)?n[t]:o}function Tr(t){var n=this.__data__;return ue?n[t]!==o:pn.call(n,t)}function Cr(t,n){var e=this.__data__;return this.size+=this.has(t)?0:1,e[t]=ue&&n===o?f:n,this}function Rr(t){var n=-1,e=null==t?0:t.length;this.clear();while(++n<e){var r=t[n];this.set(r[0],r[1])}}function Nr(){this.__data__=[],this.size=0}function Ur(t){var n=this.__data__,e=ci(n,t);if(e<0)return!1;var r=n.length-1;return e==r?n.pop():kn.call(n,e,1),--this.size,!0}function Br(t){var n=this.__data__,e=ci(n,t);return e<0?o:n[e][1]}function Mr(t){return ci(this.__data__,t)>-1}function Lr(t,n){var e=this.__data__,r=ci(e,t);return r<0?(++this.size,e.push([t,n])):e[r][1]=n,this}function qr(t){var n=-1,e=null==t?0:t.length;this.clear();while(++n<e){var r=t[n];this.set(r[0],r[1])}}function Vr(){this.size=0,this.__data__={hash:new Er,map:new(te||Rr),string:new Er}}function zr(t){var n=zu(this,t)["delete"](t);return this.size-=n?1:0,n}function Fr(t){return zu(this,t).get(t)}function Wr(t){return zu(this,t).has(t)}function Hr(t,n){var e=zu(this,t),r=e.size;return e.set(t,n),this.size+=e.size==r?0:1,this}function Jr(t){var n=-1,e=null==t?0:t.length;this.__data__=new qr;while(++n<e)this.add(t[n])}function Gr(t){return this.__data__.set(t,f),this}function Kr(t){return this.__data__.has(t)}function Zr(t){var n=this.__data__=new Rr(t);this.size=n.size}function Qr(){this.__data__=new Rr,this.size=0}function Yr(t){var n=this.__data__,e=n["delete"](t);return this.size=n.size,e}function Xr(t){return this.__data__.get(t)}function ti(t){return this.__data__.has(t)}function ni(t,n){var e=this.__data__;if(e instanceof Rr){var r=e.__data__;if(!te||r.length<a-1)return r.push([t,n]),this.size=++e.size,this;e=this.__data__=new qr(r)}return e.set(t,n),this.size=e.size,this}function ei(t,n){var e=af(t),r=!e&&uf(t),i=!e&&!r&&pf(t),o=!e&&!r&&!i&&Mf(t),u=e||r||i||o,a=u?He(t.length,on):[],c=a.length;for(var s in t)!n&&!pn.call(t,s)||u&&("length"==s||i&&("offset"==s||"parent"==s)||o&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||ia(s,c))||a.push(s);return a}function ri(t){var n=t.length;return n?t[_o(0,n-1)]:o}function ii(t,n){return xa(eu(t),vi(n,0,t.length))}function oi(t){return xa(eu(t))}function ui(t,n,e){(e===o||ef(t[n],e))&&(e!==o||n in t)||pi(t,n,e)}function ai(t,n,e){var r=t[n];pn.call(t,n)&&ef(r,e)&&(e!==o||n in t)||pi(t,n,e)}function ci(t,n){var e=t.length;while(e--)if(ef(t[e][0],n))return e;return-1}function si(t,n,e,r){return bi(t,function(t,i,o){n(r,t,e(t),o)}),r}function fi(t,n){return t&&ru(n,wl(n),t)}function li(t,n){return t&&ru(n,$l(n),t)}function pi(t,n,e){"__proto__"==n&&Dn?Dn(t,n,{configurable:!0,enumerable:!0,value:e,writable:!0}):t[n]=e}function hi(t,n){var r=-1,i=n.length,u=e(i),a=null==t;while(++r<i)u[r]=a?o:dl(t,n[r]);return u}function vi(t,n,e){return t===t&&(e!==o&&(t=t<=e?t:e),n!==o&&(t=t>=n?t:n)),t}function di(t,n,e,r,i,u){var a,c=n&h,s=n&v,f=n&d;if(e&&(a=i?e(t,r,i,u):e(t)),a!==o)return a;if(!Of(t))return t;var l=af(t);if(l){if(a=Xu(t),!c)return eu(t,a)}else{var p=Ku(t),_=p==Z||p==Q;if(pf(t))return Ho(t,c);if(p==nt||p==z||_&&!i){if(a=s||_?{}:ta(t),!c)return s?ou(t,li(a,t)):iu(t,fi(a,t))}else{if(!Yn[p])return i?t:{};a=na(t,p,c)}}u||(u=new Zr);var g=u.get(t);if(g)return g;if(u.set(t,a),Nf(t))return t.forEach(function(r){a.add(di(r,n,e,r,t,u))}),a;if(jf(t))return t.forEach(function(r,i){a.set(i,di(r,n,e,i,t,u))}),a;var y=f?s?Bu:Uu:s?$l:wl,m=l?o:y(t);return we(m||t,function(r,i){m&&(i=r,r=t[i]),ai(a,i,di(r,n,e,i,t,u))}),a}function _i(t){var n=wl(t);return function(e){return gi(e,t,n)}}function gi(t,n,e){var r=e.length;if(null==t)return!r;t=en(t);while(r--){var i=e[r],u=n[i],a=t[i];if(a===o&&!(i in t)||!u(a))return!1}return!0}function yi(t,n,e){if("function"!=typeof t)throw new un(s);return Oa(function(){t.apply(o,e)},n)}function mi(t,n,e,r){var i=-1,o=je,u=!0,c=t.length,s=[],f=n.length;if(!c)return s;e&&(n=xe(n,Ge(e))),r?(o=ke,u=!1):n.length>=a&&(o=Ze,u=!1,n=new Jr(n));t:while(++i<c){var l=t[i],p=null==e?l:e(l);if(l=r||0!==l?l:0,u&&p===p){var h=f;while(h--)if(n[h]===p)continue t;s.push(l)}else o(n,p,r)||s.push(l)}return s}br.templateSettings={escape:Et,evaluate:Dt,interpolate:It,variable:"",imports:{_:br}},br.prototype=Or.prototype,br.prototype.constructor=br,Ar.prototype=$r(Or.prototype),Ar.prototype.constructor=Ar,jr.prototype=$r(Or.prototype),jr.prototype.constructor=jr,Er.prototype.clear=Dr,Er.prototype["delete"]=Ir,Er.prototype.get=Pr,Er.prototype.has=Tr,Er.prototype.set=Cr,Rr.prototype.clear=Nr,Rr.prototype["delete"]=Ur,Rr.prototype.get=Br,Rr.prototype.has=Mr,Rr.prototype.set=Lr,qr.prototype.clear=Vr,qr.prototype["delete"]=zr,qr.prototype.get=Fr,qr.prototype.has=Wr,qr.prototype.set=Hr,Jr.prototype.add=Jr.prototype.push=Gr,Jr.prototype.has=Kr,Zr.prototype.clear=Qr,Zr.prototype["delete"]=Yr,Zr.prototype.get=Xr,Zr.prototype.has=ti,Zr.prototype.set=ni;var bi=cu(Ei),wi=cu(Di,!0);function $i(t,n){var e=!0;return bi(t,function(t,r,i){return e=!!n(t,r,i),e}),e}function Oi(t,n,e){var r=-1,i=t.length;while(++r<i){var u=t[r],a=n(u);if(null!=a&&(c===o?a===a&&!Bf(a):e(a,c)))var c=a,s=u}return s}function Ai(t,n,e,r){var i=t.length;e=Jf(e),e<0&&(e=-e>i?0:i+e),r=r===o||r>i?i:Jf(r),r<0&&(r+=i),r=e>r?0:Gf(r);while(e<r)t[e++]=n;return t}function ji(t,n){var e=[];return bi(t,function(t,r,i){n(t,r,i)&&e.push(t)}),e}function ki(t,n,e,r,i){var o=-1,u=t.length;e||(e=ra),i||(i=[]);while(++o<u){var a=t[o];n>0&&e(a)?n>1?ki(a,n-1,e,r,i):Se(i,a):r||(i[i.length]=a)}return i}var xi=su(),Si=su(!0);function Ei(t,n){return t&&xi(t,n,wl)}function Di(t,n){return t&&Si(t,n,wl)}function Ii(t,n){return Ae(n,function(n){return bf(t[n])})}function Pi(t,n){n=Vo(n,t);var e=0,r=n.length;while(null!=t&&e<r)t=t[Ea(n[e++])];return e&&e==r?t:o}function Ti(t,n,e){var r=n(t);return af(t)?r:Se(r,e(t))}function Ci(t){return null==t?t===o?ct:tt:En&&En in en(t)?Hu(t):ga(t)}function Ri(t,n){return t>n}function Ni(t,n){return null!=t&&pn.call(t,n)}function Ui(t,n){return null!=t&&n in en(t)}function Bi(t,n,e){return t>=Vn(n,e)&&t<qn(n,e)}function Mi(t,n,r){var i=r?ke:je,u=t[0].length,a=t.length,c=a,s=e(a),f=1/0,l=[];while(c--){var p=t[c];c&&n&&(p=xe(p,Ge(n))),f=Vn(p.length,f),s[c]=!r&&(n||u>=120&&p.length>=120)?new Jr(c&&p):o}p=t[0];var h=-1,v=s[0];t:while(++h<u&&l.length<f){var d=p[h],_=n?n(d):d;if(d=r||0!==d?d:0,!(v?Ze(v,_):i(l,_,r))){c=a;while(--c){var g=s[c];if(!(g?Ze(g,_):i(t[c],_,r)))continue t}v&&v.push(_),l.push(d)}}return l}function Li(t,n,e,r){return Ei(t,function(t,i,o){n(r,e(t),i,o)}),r}function qi(t,n,e){n=Vo(n,t),t=ma(t,n);var r=null==t?t:t[Ea(rc(n))];return null==r?o:me(r,t,e)}function Vi(t){return Af(t)&&Ci(t)==z}function zi(t){return Af(t)&&Ci(t)==lt}function Fi(t){return Af(t)&&Ci(t)==J}function Wi(t,n,e,r,i){return t===n||(null==t||null==n||!Af(t)&&!Af(n)?t!==t&&n!==n:Hi(t,n,e,r,Wi,i))}function Hi(t,n,e,r,i,o){var u=af(t),a=af(n),c=u?F:Ku(t),s=a?F:Ku(n);c=c==z?nt:c,s=s==z?nt:s;var f=c==nt,l=s==nt,p=c==s;if(p&&pf(t)){if(!pf(n))return!1;u=!0,f=!1}if(p&&!f)return o||(o=new Zr),u||Mf(t)?Tu(t,n,e,r,i,o):Cu(t,n,c,e,r,i,o);if(!(e&_)){var h=f&&pn.call(t,"__wrapped__"),v=l&&pn.call(n,"__wrapped__");if(h||v){var d=h?t.value():t,g=v?n.value():n;return o||(o=new Zr),i(d,g,e,r,o)}}return!!p&&(o||(o=new Zr),Ru(t,n,e,r,i,o))}function Ji(t){return Af(t)&&Ku(t)==Y}function Gi(t,n,e,r){var i=e.length,u=i,a=!r;if(null==t)return!u;t=en(t);while(i--){var c=e[i];if(a&&c[2]?c[1]!==t[c[0]]:!(c[0]in t))return!1}while(++i<u){c=e[i];var s=c[0],f=t[s],l=c[1];if(a&&c[2]){if(f===o&&!(s in t))return!1}else{var p=new Zr;if(r)var h=r(f,l,s,t,n,p);if(!(h===o?Wi(l,f,_|g,r,p):h))return!1}}return!0}function Ki(t){if(!Of(t)||sa(t))return!1;var n=bf(t)?yn:Kt;return n.test(Da(t))}function Zi(t){return Af(t)&&Ci(t)==it}function Qi(t){return Af(t)&&Ku(t)==ot}function Yi(t){return Af(t)&&$f(t.length)&&!!Qn[Ci(t)]}function Xi(t){return"function"==typeof t?t:null==t?Ep:"object"==typeof t?af(t)?oo(t[0],t[1]):io(t):Vp(t)}function to(t){if(!la(t))return Ln(t);var n=[];for(var e in en(t))pn.call(t,e)&&"constructor"!=e&&n.push(e);return n}function no(t){if(!Of(t))return _a(t);var n=la(t),e=[];for(var r in t)("constructor"!=r||!n&&pn.call(t,r))&&e.push(r);return e}function eo(t,n){return t<n}function ro(t,n){var r=-1,i=sf(t)?e(t.length):[];return bi(t,function(t,e,o){i[++r]=n(t,e,o)}),i}function io(t){var n=Fu(t);return 1==n.length&&n[0][2]?ha(n[0][0],n[0][1]):function(e){return e===t||Gi(e,t,n)}}function oo(t,n){return ua(t)&&pa(n)?ha(Ea(t),n):function(e){var r=dl(e,t);return r===o&&r===n?gl(e,t):Wi(n,r,_|g)}}function uo(t,n,e,r,i){t!==n&&xi(n,function(u,a){if(Of(u))i||(i=new Zr),ao(t,n,a,e,uo,r,i);else{var c=r?r(wa(t,a),u,a+"",t,n,i):o;c===o&&(c=u),ui(t,a,c)}},$l)}function ao(t,n,e,r,i,u,a){var c=wa(t,e),s=wa(n,e),f=a.get(s);if(f)ui(t,e,f);else{var l=u?u(c,s,e+"",t,n,a):o,p=l===o;if(p){var h=af(s),v=!h&&pf(s),d=!h&&!v&&Mf(s);l=s,h||v||d?af(c)?l=c:ff(c)?l=eu(c):v?(p=!1,l=Ho(s,!0)):d?(p=!1,l=Qo(s,!0)):l=[]:Tf(s)||uf(s)?(l=c,uf(c)?l=Zf(c):Of(c)&&!bf(c)||(l=ta(s))):p=!1}p&&(a.set(s,l),i(l,s,r,u,a),a["delete"](s)),ui(t,e,l)}}function co(t,n){var e=t.length;if(e)return n+=n<0?e:0,ia(n,e)?t[n]:o}function so(t,n,e){var r=-1;n=xe(n.length?n:[Ep],Ge(Vu()));var i=ro(t,function(t,e,i){var o=xe(n,function(n){return n(t)});return{criteria:o,index:++r,value:t}});return Fe(i,function(t,n){return Xo(t,n,e)})}function fo(t,n){return lo(t,n,function(n,e){return gl(t,e)})}function lo(t,n,e){var r=-1,i=n.length,o={};while(++r<i){var u=n[r],a=Pi(t,u);e(a,u)&&$o(o,Vo(u,t),a)}return o}function po(t){return function(n){return Pi(n,t)}}function ho(t,n,e,r){var i=r?Be:Ue,o=-1,u=n.length,a=t;t===n&&(n=eu(n)),e&&(a=xe(t,Ge(e)));while(++o<u){var c=0,s=n[o],f=e?e(s):s;while((c=i(a,f,c,r))>-1)a!==t&&kn.call(a,c,1),kn.call(t,c,1)}return t}function vo(t,n){var e=t?n.length:0,r=e-1;while(e--){var i=n[e];if(e==r||i!==o){var o=i;ia(i)?kn.call(t,i,1):Co(t,i)}}return t}function _o(t,n){return t+Rn(Jn()*(n-t+1))}function go(t,n,r,i){var o=-1,u=qn(Cn((n-t)/(r||1)),0),a=e(u);while(u--)a[i?u:++o]=t,t+=r;return a}function yo(t,n){var e="";if(!t||n<1||n>N)return e;do{n%2&&(e+=t),n=Rn(n/2),n&&(t+=t)}while(n);return e}function mo(t,n){return Aa(ya(t,n,Ep),t+"")}function bo(t){return ri(Ll(t))}function wo(t,n){var e=Ll(t);return xa(e,vi(n,0,e.length))}function $o(t,n,e,r){if(!Of(t))return t;n=Vo(n,t);var i=-1,u=n.length,a=u-1,c=t;while(null!=c&&++i<u){var s=Ea(n[i]),f=e;if(i!=a){var l=c[s];f=r?r(l,s,c):o,f===o&&(f=Of(l)?l:ia(n[i+1])?[]:{})}ai(c,s,f),c=c[s]}return t}var Oo=ce?function(t,n){return ce.set(t,n),t}:Ep,Ao=Dn?function(t,n){return Dn(t,"toString",{configurable:!0,enumerable:!1,value:jp(n),writable:!0})}:Ep;function jo(t){return xa(Ll(t))}function ko(t,n,r){var i=-1,o=t.length;n<0&&(n=-n>o?0:o+n),r=r>o?o:r,r<0&&(r+=o),o=n>r?0:r-n>>>0,n>>>=0;var u=e(o);while(++i<o)u[i]=t[i+n];return u}function xo(t,n){var e;return bi(t,function(t,r,i){return e=n(t,r,i),!e}),!!e}function So(t,n,e){var r=0,i=null==t?r:t.length;if("number"==typeof n&&n===n&&i<=q){while(r<i){var o=r+i>>>1,u=t[o];null!==u&&!Bf(u)&&(e?u<=n:u<n)?r=o+1:i=o}return i}return Eo(t,n,Ep,e)}function Eo(t,n,e,r){n=e(n);var i=0,u=null==t?0:t.length,a=n!==n,c=null===n,s=Bf(n),f=n===o;while(i<u){var l=Rn((i+u)/2),p=e(t[l]),h=p!==o,v=null===p,d=p===p,_=Bf(p);if(a)var g=r||d;else g=f?d&&(r||h):c?d&&h&&(r||!v):s?d&&h&&!v&&(r||!_):!v&&!_&&(r?p<=n:p<n);g?i=l+1:u=l}return Vn(u,L)}function Do(t,n){var e=-1,r=t.length,i=0,o=[];while(++e<r){var u=t[e],a=n?n(u):u;if(!e||!ef(a,c)){var c=a;o[i++]=0===u?0:u}}return o}function Io(t){return"number"==typeof t?t:Bf(t)?B:+t}function Po(t){if("string"==typeof t)return t;if(af(t))return xe(t,Po)+"";if(Bf(t))return yr?yr.call(t):"";var n=t+"";return"0"==n&&1/t==-R?"-0":n}function To(t,n,e){var r=-1,i=je,o=t.length,u=!0,c=[],s=c;if(e)u=!1,i=ke;else if(o>=a){var f=n?null:xu(t);if(f)return fr(f);u=!1,i=Ze,s=new Jr}else s=n?[]:c;t:while(++r<o){var l=t[r],p=n?n(l):l;if(l=e||0!==l?l:0,u&&p===p){var h=s.length;while(h--)if(s[h]===p)continue t;n&&s.push(p),c.push(l)}else i(s,p,e)||(s!==c&&s.push(p),c.push(l))}return c}function Co(t,n){return n=Vo(n,t),t=ma(t,n),null==t||delete t[Ea(rc(n))]}function Ro(t,n,e,r){return $o(t,n,e(Pi(t,n)),r)}function No(t,n,e,r){var i=t.length,o=r?i:-1;while((r?o--:++o<i)&&n(t[o],o,t));return e?ko(t,r?0:o,r?o+1:i):ko(t,r?o+1:0,r?i:o)}function Uo(t,n){var e=t;return e instanceof jr&&(e=e.value()),Ee(n,function(t,n){return n.func.apply(n.thisArg,Se([t],n.args))},e)}function Bo(t,n,r){var i=t.length;if(i<2)return i?To(t[0]):[];var o=-1,u=e(i);while(++o<i){var a=t[o],c=-1;while(++c<i)c!=o&&(u[o]=mi(u[o]||a,t[c],n,r))}return To(ki(u,1),n,r)}function Mo(t,n,e){var r=-1,i=t.length,u=n.length,a={};while(++r<i){var c=r<u?n[r]:o;e(a,t[r],c)}return a}function Lo(t){return ff(t)?t:[]}function qo(t){return"function"==typeof t?t:Ep}function Vo(t,n){return af(t)?t:ua(t,n)?[t]:Sa(Yf(t))}var zo=mo;function Fo(t,n,e){var r=t.length;return e=e===o?r:e,!n&&e>=r?t:ko(t,n,e)}var Wo=In||function(t){return ae.clearTimeout(t)};function Ho(t,n){if(n)return t.slice();var e=t.length,r=$n?$n(e):new t.constructor(e);return t.copy(r),r}function Jo(t){var n=new t.constructor(t.byteLength);return new wn(n).set(new wn(t)),n}function Go(t,n){var e=n?Jo(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}function Ko(t){var n=new t.constructor(t.source,Ht.exec(t));return n.lastIndex=t.lastIndex,n}function Zo(t){return gr?en(gr.call(t)):{}}function Qo(t,n){var e=n?Jo(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}function Yo(t,n){if(t!==n){var e=t!==o,r=null===t,i=t===t,u=Bf(t),a=n!==o,c=null===n,s=n===n,f=Bf(n);if(!c&&!f&&!u&&t>n||u&&a&&s&&!c&&!f||r&&a&&s||!e&&s||!i)return 1;if(!r&&!u&&!f&&t<n||f&&e&&i&&!r&&!u||c&&e&&i||!a&&i||!s)return-1}return 0}function Xo(t,n,e){var r=-1,i=t.criteria,o=n.criteria,u=i.length,a=e.length;while(++r<u){var c=Yo(i[r],o[r]);if(c){if(r>=a)return c;var s=e[r];return c*("desc"==s?-1:1)}}return t.index-n.index}function tu(t,n,r,i){var o=-1,u=t.length,a=r.length,c=-1,s=n.length,f=qn(u-a,0),l=e(s+f),p=!i;while(++c<s)l[c]=n[c];while(++o<a)(p||o<u)&&(l[r[o]]=t[o]);while(f--)l[c++]=t[o++];return l}function nu(t,n,r,i){var o=-1,u=t.length,a=-1,c=r.length,s=-1,f=n.length,l=qn(u-c,0),p=e(l+f),h=!i;while(++o<l)p[o]=t[o];var v=o;while(++s<f)p[v+s]=n[s];while(++a<c)(h||o<u)&&(p[v+r[a]]=t[o++]);return p}function eu(t,n){var r=-1,i=t.length;n||(n=e(i));while(++r<i)n[r]=t[r];return n}function ru(t,n,e,r){var i=!e;e||(e={});var u=-1,a=n.length;while(++u<a){var c=n[u],s=r?r(e[c],t[c],c,e,t):o;s===o&&(s=t[c]),i?pi(e,c,s):ai(e,c,s)}return e}function iu(t,n){return ru(t,Ju(t),n)}function ou(t,n){return ru(t,Gu(t),n)}function uu(t,n){return function(e,r){var i=af(e)?be:si,o=n?n():{};return i(e,t,Vu(r,2),o)}}function au(t){return mo(function(n,e){var r=-1,i=e.length,u=i>1?e[i-1]:o,a=i>2?e[2]:o;u=t.length>3&&"function"==typeof u?(i--,u):o,a&&oa(e[0],e[1],a)&&(u=i<3?o:u,i=1),n=en(n);while(++r<i){var c=e[r];c&&t(n,c,r,u)}return n})}function cu(t,n){return function(e,r){if(null==e)return e;if(!sf(e))return t(e,r);var i=e.length,o=n?i:-1,u=en(e);while(n?o--:++o<i)if(!1===r(u[o],o,u))break;return e}}function su(t){return function(n,e,r){var i=-1,o=en(n),u=r(n),a=u.length;while(a--){var c=u[t?a:++i];if(!1===e(o[c],c,o))break}return n}}function fu(t,n,e){var r=n&y,i=hu(t);function o(){var n=this&&this!==ae&&this instanceof o?i:t;return n.apply(r?e:this,arguments)}return o}function lu(t){return function(n){n=Yf(n);var e=ir(n)?dr(n):o,r=e?e[0]:n.charAt(0),i=e?Fo(e,1).join(""):n.slice(1);return r[t]()+i}}function pu(t){return function(n){return Ee(bp(Jl(n).replace(zn,"")),t,"")}}function hu(t){return function(){var n=arguments;switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3]);case 5:return new t(n[0],n[1],n[2],n[3],n[4]);case 6:return new t(n[0],n[1],n[2],n[3],n[4],n[5]);case 7:return new t(n[0],n[1],n[2],n[3],n[4],n[5],n[6])}var e=$r(t.prototype),r=t.apply(e,n);return Of(r)?r:e}}function vu(t,n,r){var i=hu(t);function u(){var a=arguments.length,c=e(a),s=a,f=qu(u);while(s--)c[s]=arguments[s];var l=a<3&&c[0]!==f&&c[a-1]!==f?[]:sr(c,f);if(a-=l.length,a<r)return ju(t,n,gu,u.placeholder,o,c,l,o,o,r-a);var p=this&&this!==ae&&this instanceof u?i:t;return me(p,this,c)}return u}function du(t){return function(n,e,r){var i=en(n);if(!sf(n)){var u=Vu(e,3);n=wl(n),e=function(t){return u(i[t],t,i)}}var a=t(n,e,r);return a>-1?i[u?n[a]:a]:o}}function _u(t){return Nu(function(n){var e=n.length,r=e,i=Ar.prototype.thru;t&&n.reverse();while(r--){var u=n[r];if("function"!=typeof u)throw new un(s);if(i&&!a&&"wrapper"==Lu(u))var a=new Ar([],!0)}r=a?r:e;while(++r<e){u=n[r];var c=Lu(u),f="wrapper"==c?Mu(u):o;a=f&&ca(f[0])&&f[1]==(j|w|O|k)&&!f[4].length&&1==f[9]?a[Lu(f[0])].apply(a,f[3]):1==u.length&&ca(u)?a[c]():a.thru(u)}return function(){var t=arguments,r=t[0];if(a&&1==t.length&&af(r))return a.plant(r).value();var i=0,o=e?n[i].apply(this,t):r;while(++i<e)o=n[i].call(this,o);return o}})}function gu(t,n,r,i,u,a,c,s,f,l){var p=n&j,h=n&y,v=n&m,d=n&(w|$),_=n&x,g=v?o:hu(t);function b(){var o=arguments.length,y=e(o),m=o;while(m--)y[m]=arguments[m];if(d)var w=qu(b),$=Xe(y,w);if(i&&(y=tu(y,i,u,d)),a&&(y=nu(y,a,c,d)),o-=$,d&&o<l){var O=sr(y,w);return ju(t,n,gu,b.placeholder,r,y,O,s,f,l-o)}var A=h?r:this,j=v?A[t]:t;return o=y.length,s?y=ba(y,s):_&&o>1&&y.reverse(),p&&f<o&&(y.length=f),this&&this!==ae&&this instanceof b&&(j=g||hu(j)),j.apply(A,y)}return b}function yu(t,n){return function(e,r){return Li(e,t,n(r),{})}}function mu(t,n){return function(e,r){var i;if(e===o&&r===o)return n;if(e!==o&&(i=e),r!==o){if(i===o)return r;"string"==typeof e||"string"==typeof r?(e=Po(e),r=Po(r)):(e=Io(e),r=Io(r)),i=t(e,r)}return i}}function bu(t){return Nu(function(n){return n=xe(n,Ge(Vu())),mo(function(e){var r=this;return t(n,function(t){return me(t,r,e)})})})}function wu(t,n){n=n===o?" ":Po(n);var e=n.length;if(e<2)return e?yo(n,t):n;var r=yo(n,Cn(t/vr(n)));return ir(n)?Fo(dr(r),0,t).join(""):r.slice(0,t)}function $u(t,n,r,i){var o=n&y,u=hu(t);function a(){var n=-1,c=arguments.length,s=-1,f=i.length,l=e(f+c),p=this&&this!==ae&&this instanceof a?u:t;while(++s<f)l[s]=i[s];while(c--)l[s++]=arguments[++n];return me(p,o?r:this,l)}return a}function Ou(t){return function(n,e,r){return r&&"number"!=typeof r&&oa(n,e,r)&&(e=r=o),n=Hf(n),e===o?(e=n,n=0):e=Hf(e),r=r===o?n<e?1:-1:Hf(r),go(n,e,r,t)}}function Au(t){return function(n,e){return"string"==typeof n&&"string"==typeof e||(n=Kf(n),e=Kf(e)),t(n,e)}}function ju(t,n,e,r,i,u,a,c,s,f){var l=n&w,p=l?a:o,h=l?o:a,v=l?u:o,d=l?o:u;n|=l?O:A,n&=~(l?A:O),n&b||(n&=~(y|m));var _=[t,n,i,v,p,d,h,c,s,f],g=e.apply(o,_);return ca(t)&&$a(g,_),g.placeholder=r,ja(g,t,n)}function ku(t){var n=nn[t];return function(t,e){if(t=Kf(t),e=null==e?0:Vn(Jf(e),292),e){var r=(Yf(t)+"e").split("e"),i=n(r[0]+"e"+(+r[1]+e));return r=(Yf(i)+"e").split("e"),+(r[0]+"e"+(+r[1]-e))}return n(t)}}var xu=ee&&1/fr(new ee([,-0]))[1]==R?function(t){return new ee(t)}:Up;function Su(t){return function(n){var e=Ku(n);return e==Y?ar(n):e==ot?lr(n):Je(n,t(n))}}function Eu(t,n,e,r,i,u,a,c){var f=n&m;if(!f&&"function"!=typeof t)throw new un(s);var l=r?r.length:0;if(l||(n&=~(O|A),r=i=o),a=a===o?a:qn(Jf(a),0),c=c===o?c:Jf(c),l-=i?i.length:0,n&A){var p=r,h=i;r=i=o}var v=f?o:Mu(t),d=[t,n,e,r,i,p,h,u,a,c];if(v&&da(d,v),t=d[0],n=d[1],e=d[2],r=d[3],i=d[4],c=d[9]=d[9]===o?f?0:t.length:qn(d[9]-l,0),!c&&n&(w|$)&&(n&=~(w|$)),n&&n!=y)_=n==w||n==$?vu(t,n,c):n!=O&&n!=(y|O)||i.length?gu.apply(o,d):$u(t,n,e,r);else var _=fu(t,n,e);var g=v?Oo:$a;return ja(g(_,d),t,n)}function Du(t,n,e,r){return t===o||ef(t,sn[e])&&!pn.call(r,e)?n:t}function Iu(t,n,e,r,i,u){return Of(t)&&Of(n)&&(u.set(n,t),uo(t,n,o,Iu,u),u["delete"](n)),t}function Pu(t){return Tf(t)?o:t}function Tu(t,n,e,r,i,u){var a=e&_,c=t.length,s=n.length;if(c!=s&&!(a&&s>c))return!1;var f=u.get(t);if(f&&u.get(n))return f==n;var l=-1,p=!0,h=e&g?new Jr:o;u.set(t,n),u.set(n,t);while(++l<c){var v=t[l],d=n[l];if(r)var y=a?r(d,v,l,n,t,u):r(v,d,l,t,n,u);if(y!==o){if(y)continue;p=!1;break}if(h){if(!Ie(n,function(t,n){if(!Ze(h,n)&&(v===t||i(v,t,e,r,u)))return h.push(n)})){p=!1;break}}else if(v!==d&&!i(v,d,e,r,u)){p=!1;break}}return u["delete"](t),u["delete"](n),p}function Cu(t,n,e,r,i,o,u){switch(e){case pt:if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case lt:return!(t.byteLength!=n.byteLength||!o(new wn(t),new wn(n)));case H:case J:case X:return ef(+t,+n);case K:return t.name==n.name&&t.message==n.message;case it:case ut:return t==n+"";case Y:var a=ar;case ot:var c=r&_;if(a||(a=fr),t.size!=n.size&&!c)return!1;var s=u.get(t);if(s)return s==n;r|=g,u.set(t,n);var f=Tu(a(t),a(n),r,i,o,u);return u["delete"](t),f;case at:if(gr)return gr.call(t)==gr.call(n)}return!1}function Ru(t,n,e,r,i,u){var a=e&_,c=Uu(t),s=c.length,f=Uu(n),l=f.length;if(s!=l&&!a)return!1;var p=s;while(p--){var h=c[p];if(!(a?h in n:pn.call(n,h)))return!1}var v=u.get(t);if(v&&u.get(n))return v==n;var d=!0;u.set(t,n),u.set(n,t);var g=a;while(++p<s){h=c[p];var y=t[h],m=n[h];if(r)var b=a?r(m,y,h,n,t,u):r(y,m,h,t,n,u);if(!(b===o?y===m||i(y,m,e,r,u):b)){d=!1;break}g||(g="constructor"==h)}if(d&&!g){var w=t.constructor,$=n.constructor;w!=$&&"constructor"in t&&"constructor"in n&&!("function"==typeof w&&w instanceof w&&"function"==typeof $&&$ instanceof $)&&(d=!1)}return u["delete"](t),u["delete"](n),d}function Nu(t){return Aa(ya(t,o,Ha),t+"")}function Uu(t){return Ti(t,wl,Ju)}function Bu(t){return Ti(t,$l,Gu)}var Mu=ce?function(t){return ce.get(t)}:Up;function Lu(t){var n=t.name+"",e=se[n],r=pn.call(se,n)?e.length:0;while(r--){var i=e[r],o=i.func;if(null==o||o==t)return i.name}return n}function qu(t){var n=pn.call(br,"placeholder")?br:t;return n.placeholder}function Vu(){var t=br.iteratee||Dp;return t=t===Dp?Xi:t,arguments.length?t(arguments[0],arguments[1]):t}function zu(t,n){var e=t.__data__;return aa(n)?e["string"==typeof n?"string":"hash"]:e.map}function Fu(t){var n=wl(t),e=n.length;while(e--){var r=n[e],i=t[r];n[e]=[r,i,pa(i)]}return n}function Wu(t,n){var e=rr(t,n);return Ki(e)?e:o}function Hu(t){var n=pn.call(t,En),e=t[En];try{t[En]=o;var r=!0}catch(u){}var i=dn.call(t);return r&&(n?t[En]=e:delete t[En]),i}var Ju=Nn?function(t){return null==t?[]:(t=en(t),Ae(Nn(t),function(n){return jn.call(t,n)}))}:Hp,Gu=Nn?function(t){var n=[];while(t)Se(n,Ju(t)),t=On(t);return n}:Hp,Ku=Ci;function Zu(t,n,e){var r=-1,i=e.length;while(++r<i){var o=e[r],u=o.size;switch(o.type){case"drop":t+=u;break;case"dropRight":n-=u;break;case"take":n=Vn(n,t+u);break;case"takeRight":t=qn(t,n-u);break}}return{start:t,end:n}}function Qu(t){var n=t.match(qt);return n?n[1].split(Vt):[]}function Yu(t,n,e){n=Vo(n,t);var r=-1,i=n.length,o=!1;while(++r<i){var u=Ea(n[r]);if(!(o=null!=t&&e(t,u)))break;t=t[u]}return o||++r!=i?o:(i=null==t?0:t.length,!!i&&$f(i)&&ia(u,i)&&(af(t)||uf(t)))}function Xu(t){var n=t.length,e=new t.constructor(n);return n&&"string"==typeof t[0]&&pn.call(t,"index")&&(e.index=t.index,e.input=t.input),e}function ta(t){return"function"!=typeof t.constructor||la(t)?{}:$r(On(t))}function na(t,n,e){var r=t.constructor;switch(n){case lt:return Jo(t);case H:case J:return new r(+t);case pt:return Go(t,e);case ht:case vt:case dt:case _t:case gt:case yt:case mt:case bt:case wt:return Qo(t,e);case Y:return new r;case X:case ut:return new r(t);case it:return Ko(t);case ot:return new r;case at:return Zo(t)}}function ea(t,n){var e=n.length;if(!e)return t;var r=e-1;return n[r]=(e>1?"& ":"")+n[r],n=n.join(e>2?", ":" "),t.replace(Lt,"{\n/* [wrapped with "+n+"] */\n")}function ra(t){return af(t)||uf(t)||!!(xn&&t&&t[xn])}function ia(t,n){var e=typeof t;return n=null==n?N:n,!!n&&("number"==e||"symbol"!=e&&Qt.test(t))&&t>-1&&t%1==0&&t<n}function oa(t,n,e){if(!Of(e))return!1;var r=typeof n;return!!("number"==r?sf(e)&&ia(n,e.length):"string"==r&&n in e)&&ef(e[n],t)}function ua(t,n){if(af(t))return!1;var e=typeof t;return!("number"!=e&&"symbol"!=e&&"boolean"!=e&&null!=t&&!Bf(t))||(Tt.test(t)||!Pt.test(t)||null!=n&&t in en(n))}function aa(t){var n=typeof t;return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t}function ca(t){var n=Lu(t),e=br[n];if("function"!=typeof e||!(n in jr.prototype))return!1;if(t===e)return!0;var r=Mu(e);return!!r&&t===r[0]}function sa(t){return!!vn&&vn in t}(Xn&&Ku(new Xn(new ArrayBuffer(1)))!=pt||te&&Ku(new te)!=Y||ne&&Ku(ne.resolve())!=et||ee&&Ku(new ee)!=ot||oe&&Ku(new oe)!=st)&&(Ku=function(t){var n=Ci(t),e=n==nt?t.constructor:o,r=e?Da(e):"";if(r)switch(r){case le:return pt;case pe:return Y;case Pe:return et;case Te:return ot;case Ve:return st}return n});var fa=fn?bf:Jp;function la(t){var n=t&&t.constructor,e="function"==typeof n&&n.prototype||sn;return t===e}function pa(t){return t===t&&!Of(t)}function ha(t,n){return function(e){return null!=e&&(e[t]===n&&(n!==o||t in en(e)))}}function va(t){var n=Bs(t,function(t){return e.size===l&&e.clear(),t}),e=n.cache;return n}function da(t,n){var e=t[1],r=n[1],i=e|r,o=i<(y|m|j),u=r==j&&e==w||r==j&&e==k&&t[7].length<=n[8]||r==(j|k)&&n[7].length<=n[8]&&e==w;if(!o&&!u)return t;r&y&&(t[2]=n[2],i|=e&y?0:b);var a=n[3];if(a){var c=t[3];t[3]=c?tu(c,a,n[4]):a,t[4]=c?sr(t[3],p):n[4]}return a=n[5],a&&(c=t[5],t[5]=c?nu(c,a,n[6]):a,t[6]=c?sr(t[5],p):n[6]),a=n[7],a&&(t[7]=a),r&j&&(t[8]=null==t[8]?n[8]:Vn(t[8],n[8])),null==t[9]&&(t[9]=n[9]),t[0]=n[0],t[1]=i,t}function _a(t){var n=[];if(null!=t)for(var e in en(t))n.push(e);return n}function ga(t){return dn.call(t)}function ya(t,n,r){return n=qn(n===o?t.length-1:n,0),function(){var i=arguments,o=-1,u=qn(i.length-n,0),a=e(u);while(++o<u)a[o]=i[n+o];o=-1;var c=e(n+1);while(++o<n)c[o]=i[o];return c[n]=r(a),me(t,this,c)}}function ma(t,n){return n.length<2?t:Pi(t,ko(n,0,-1))}function ba(t,n){var e=t.length,r=Vn(n.length,e),i=eu(t);while(r--){var u=n[r];t[r]=ia(u,e)?i[u]:o}return t}function wa(t,n){if("__proto__"!=n)return t[n]}var $a=ka(Oo),Oa=Tn||function(t,n){return ae.setTimeout(t,n)},Aa=ka(Ao);function ja(t,n,e){var r=n+"";return Aa(t,ea(r,Ia(Qu(r),e)))}function ka(t){var n=0,e=0;return function(){var r=Wn(),i=I-(r-e);if(e=r,i>0){if(++n>=D)return arguments[0]}else n=0;return t.apply(o,arguments)}}function xa(t,n){var e=-1,r=t.length,i=r-1;n=n===o?r:n;while(++e<n){var u=_o(e,i),a=t[u];t[u]=t[e],t[e]=a}return t.length=n,t}var Sa=va(function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(Ct,function(t,e,r,i){n.push(r?i.replace(Ft,"$1"):e||t)}),n});function Ea(t){if("string"==typeof t||Bf(t))return t;var n=t+"";return"0"==n&&1/t==-R?"-0":n}function Da(t){if(null!=t){try{return ln.call(t)}catch(n){}try{return t+""}catch(n){}}return""}function Ia(t,n){return we(V,function(e){var r="_."+e[0];n&e[1]&&!je(t,r)&&t.push(r)}),t.sort()}function Pa(t){if(t instanceof jr)return t.clone();var n=new Ar(t.__wrapped__,t.__chain__);return n.__actions__=eu(t.__actions__),n.__index__=t.__index__,n.__values__=t.__values__,n}function Ta(t,n,r){n=(r?oa(t,n,r):n===o)?1:qn(Jf(n),0);var i=null==t?0:t.length;if(!i||n<1)return[];var u=0,a=0,c=e(Cn(i/n));while(u<i)c[a++]=ko(t,u,u+=n);return c}function Ca(t){var n=-1,e=null==t?0:t.length,r=0,i=[];while(++n<e){var o=t[n];o&&(i[r++]=o)}return i}function Ra(){var t=arguments.length;if(!t)return[];var n=e(t-1),r=arguments[0],i=t;while(i--)n[i-1]=arguments[i];return Se(af(r)?eu(r):[r],ki(n,1))}var Na=mo(function(t,n){return ff(t)?mi(t,ki(n,1,ff,!0)):[]}),Ua=mo(function(t,n){var e=rc(n);return ff(e)&&(e=o),ff(t)?mi(t,ki(n,1,ff,!0),Vu(e,2)):[]}),Ba=mo(function(t,n){var e=rc(n);return ff(e)&&(e=o),ff(t)?mi(t,ki(n,1,ff,!0),o,e):[]});function Ma(t,n,e){var r=null==t?0:t.length;return r?(n=e||n===o?1:Jf(n),ko(t,n<0?0:n,r)):[]}function La(t,n,e){var r=null==t?0:t.length;return r?(n=e||n===o?1:Jf(n),n=r-n,ko(t,0,n<0?0:n)):[]}function qa(t,n){return t&&t.length?No(t,Vu(n,3),!0,!0):[]}function Va(t,n){return t&&t.length?No(t,Vu(n,3),!0):[]}function za(t,n,e,r){var i=null==t?0:t.length;return i?(e&&"number"!=typeof e&&oa(t,n,e)&&(e=0,r=i),Ai(t,n,e,r)):[]}function Fa(t,n,e){var r=null==t?0:t.length;if(!r)return-1;var i=null==e?0:Jf(e);return i<0&&(i=qn(r+i,0)),Ne(t,Vu(n,3),i)}function Wa(t,n,e){var r=null==t?0:t.length;if(!r)return-1;var i=r-1;return e!==o&&(i=Jf(e),i=e<0?qn(r+i,0):Vn(i,r-1)),Ne(t,Vu(n,3),i,!0)}function Ha(t){var n=null==t?0:t.length;return n?ki(t,1):[]}function Ja(t){var n=null==t?0:t.length;return n?ki(t,R):[]}function Ga(t,n){var e=null==t?0:t.length;return e?(n=n===o?1:Jf(n),ki(t,n)):[]}function Ka(t){var n=-1,e=null==t?0:t.length,r={};while(++n<e){var i=t[n];r[i[0]]=i[1]}return r}function Za(t){return t&&t.length?t[0]:o}function Qa(t,n,e){var r=null==t?0:t.length;if(!r)return-1;var i=null==e?0:Jf(e);return i<0&&(i=qn(r+i,0)),Ue(t,n,i)}function Ya(t){var n=null==t?0:t.length;return n?ko(t,0,-1):[]}var Xa=mo(function(t){var n=xe(t,Lo);return n.length&&n[0]===t[0]?Mi(n):[]}),tc=mo(function(t){var n=rc(t),e=xe(t,Lo);return n===rc(e)?n=o:e.pop(),e.length&&e[0]===t[0]?Mi(e,Vu(n,2)):[]}),nc=mo(function(t){var n=rc(t),e=xe(t,Lo);return n="function"==typeof n?n:o,n&&e.pop(),e.length&&e[0]===t[0]?Mi(e,o,n):[]});function ec(t,n){return null==t?"":Mn.call(t,n)}function rc(t){var n=null==t?0:t.length;return n?t[n-1]:o}function ic(t,n,e){var r=null==t?0:t.length;if(!r)return-1;var i=r;return e!==o&&(i=Jf(e),i=i<0?qn(r+i,0):Vn(i,r-1)),n===n?hr(t,n,i):Ne(t,Me,i,!0)}function oc(t,n){return t&&t.length?co(t,Jf(n)):o}var uc=mo(ac);function ac(t,n){return t&&t.length&&n&&n.length?ho(t,n):t}function cc(t,n,e){return t&&t.length&&n&&n.length?ho(t,n,Vu(e,2)):t}function sc(t,n,e){return t&&t.length&&n&&n.length?ho(t,n,o,e):t}var fc=Nu(function(t,n){var e=null==t?0:t.length,r=hi(t,n);return vo(t,xe(n,function(t){return ia(t,e)?+t:t}).sort(Yo)),r});function lc(t,n){var e=[];if(!t||!t.length)return e;var r=-1,i=[],o=t.length;n=Vu(n,3);while(++r<o){var u=t[r];n(u,r,t)&&(e.push(u),i.push(r))}return vo(t,i),e}function pc(t){return null==t?t:Gn.call(t)}function hc(t,n,e){var r=null==t?0:t.length;return r?(e&&"number"!=typeof e&&oa(t,n,e)?(n=0,e=r):(n=null==n?0:Jf(n),e=e===o?r:Jf(e)),ko(t,n,e)):[]}function vc(t,n){return So(t,n)}function dc(t,n,e){return Eo(t,n,Vu(e,2))}function _c(t,n){var e=null==t?0:t.length;if(e){var r=So(t,n);if(r<e&&ef(t[r],n))return r}return-1}function gc(t,n){return So(t,n,!0)}function yc(t,n,e){return Eo(t,n,Vu(e,2),!0)}function mc(t,n){var e=null==t?0:t.length;if(e){var r=So(t,n,!0)-1;if(ef(t[r],n))return r}return-1}function bc(t){return t&&t.length?Do(t):[]}function wc(t,n){return t&&t.length?Do(t,Vu(n,2)):[]}function $c(t){var n=null==t?0:t.length;return n?ko(t,1,n):[]}function Oc(t,n,e){return t&&t.length?(n=e||n===o?1:Jf(n),ko(t,0,n<0?0:n)):[]}function Ac(t,n,e){var r=null==t?0:t.length;return r?(n=e||n===o?1:Jf(n),n=r-n,ko(t,n<0?0:n,r)):[]}function jc(t,n){return t&&t.length?No(t,Vu(n,3),!1,!0):[]}function kc(t,n){return t&&t.length?No(t,Vu(n,3)):[]}var xc=mo(function(t){return To(ki(t,1,ff,!0))}),Sc=mo(function(t){var n=rc(t);return ff(n)&&(n=o),To(ki(t,1,ff,!0),Vu(n,2))}),Ec=mo(function(t){var n=rc(t);return n="function"==typeof n?n:o,To(ki(t,1,ff,!0),o,n)});function Dc(t){return t&&t.length?To(t):[]}function Ic(t,n){return t&&t.length?To(t,Vu(n,2)):[]}function Pc(t,n){return n="function"==typeof n?n:o,t&&t.length?To(t,o,n):[]}function Tc(t){if(!t||!t.length)return[];var n=0;return t=Ae(t,function(t){if(ff(t))return n=qn(t.length,n),!0}),He(n,function(n){return xe(t,qe(n))})}function Cc(t,n){if(!t||!t.length)return[];var e=Tc(t);return null==n?e:xe(e,function(t){return me(n,o,t)})}var Rc=mo(function(t,n){return ff(t)?mi(t,n):[]}),Nc=mo(function(t){return Bo(Ae(t,ff))}),Uc=mo(function(t){var n=rc(t);return ff(n)&&(n=o),Bo(Ae(t,ff),Vu(n,2))}),Bc=mo(function(t){var n=rc(t);return n="function"==typeof n?n:o,Bo(Ae(t,ff),o,n)}),Mc=mo(Tc);function Lc(t,n){return Mo(t||[],n||[],ai)}function qc(t,n){return Mo(t||[],n||[],$o)}var Vc=mo(function(t){var n=t.length,e=n>1?t[n-1]:o;return e="function"==typeof e?(t.pop(),e):o,Cc(t,e)});function zc(t){var n=br(t);return n.__chain__=!0,n}function Fc(t,n){return n(t),t}function Wc(t,n){return n(t)}var Hc=Nu(function(t){var n=t.length,e=n?t[0]:0,r=this.__wrapped__,i=function(n){return hi(n,t)};return!(n>1||this.__actions__.length)&&r instanceof jr&&ia(e)?(r=r.slice(e,+e+(n?1:0)),r.__actions__.push({func:Wc,args:[i],thisArg:o}),new Ar(r,this.__chain__).thru(function(t){return n&&!t.length&&t.push(o),t})):this.thru(i)});function Jc(){return zc(this)}function Gc(){return new Ar(this.value(),this.__chain__)}function Kc(){this.__values__===o&&(this.__values__=Wf(this.value()));var t=this.__index__>=this.__values__.length,n=t?o:this.__values__[this.__index__++];return{done:t,value:n}}function Zc(){return this}function Qc(t){var n,e=this;while(e instanceof Or){var r=Pa(e);r.__index__=0,r.__values__=o,n?i.__wrapped__=r:n=r;var i=r;e=e.__wrapped__}return i.__wrapped__=t,n}function Yc(){var t=this.__wrapped__;if(t instanceof jr){var n=t;return this.__actions__.length&&(n=new jr(this)),n=n.reverse(),n.__actions__.push({func:Wc,args:[pc],thisArg:o}),new Ar(n,this.__chain__)}return this.thru(pc)}function Xc(){return Uo(this.__wrapped__,this.__actions__)}var ts=uu(function(t,n,e){pn.call(t,e)?++t[e]:pi(t,e,1)});function ns(t,n,e){var r=af(t)?Oe:$i;return e&&oa(t,n,e)&&(n=o),r(t,Vu(n,3))}function es(t,n){var e=af(t)?Ae:ji;return e(t,Vu(n,3))}var rs=du(Fa),is=du(Wa);function os(t,n){return ki(vs(t,n),1)}function us(t,n){return ki(vs(t,n),R)}function as(t,n,e){return e=e===o?1:Jf(e),ki(vs(t,n),e)}function cs(t,n){var e=af(t)?we:bi;return e(t,Vu(n,3))}function ss(t,n){var e=af(t)?$e:wi;return e(t,Vu(n,3))}var fs=uu(function(t,n,e){pn.call(t,e)?t[e].push(n):pi(t,e,[n])});function ls(t,n,e,r){t=sf(t)?t:Ll(t),e=e&&!r?Jf(e):0;var i=t.length;return e<0&&(e=qn(i+e,0)),Uf(t)?e<=i&&t.indexOf(n,e)>-1:!!i&&Ue(t,n,e)>-1}var ps=mo(function(t,n,r){var i=-1,o="function"==typeof n,u=sf(t)?e(t.length):[];return bi(t,function(t){u[++i]=o?me(n,t,r):qi(t,n,r)}),u}),hs=uu(function(t,n,e){pi(t,e,n)});function vs(t,n){var e=af(t)?xe:ro;return e(t,Vu(n,3))}function ds(t,n,e,r){return null==t?[]:(af(n)||(n=null==n?[]:[n]),e=r?o:e,af(e)||(e=null==e?[]:[e]),so(t,n,e))}var _s=uu(function(t,n,e){t[e?0:1].push(n)},function(){return[[],[]]});function gs(t,n,e){var r=af(t)?Ee:ze,i=arguments.length<3;return r(t,Vu(n,4),e,i,bi)}function ys(t,n,e){var r=af(t)?De:ze,i=arguments.length<3;return r(t,Vu(n,4),e,i,wi)}function ms(t,n){var e=af(t)?Ae:ji;return e(t,Ms(Vu(n,3)))}function bs(t){var n=af(t)?ri:bo;return n(t)}function ws(t,n,e){n=(e?oa(t,n,e):n===o)?1:Jf(n);var r=af(t)?ii:wo;return r(t,n)}function $s(t){var n=af(t)?oi:jo;return n(t)}function Os(t){if(null==t)return 0;if(sf(t))return Uf(t)?vr(t):t.length;var n=Ku(t);return n==Y||n==ot?t.size:to(t).length}function As(t,n,e){var r=af(t)?Ie:xo;return e&&oa(t,n,e)&&(n=o),r(t,Vu(n,3))}var js=mo(function(t,n){if(null==t)return[];var e=n.length;return e>1&&oa(t,n[0],n[1])?n=[]:e>2&&oa(n[0],n[1],n[2])&&(n=[n[0]]),so(t,ki(n,1),[])}),ks=Pn||function(){return ae.Date.now()};function xs(t,n){if("function"!=typeof n)throw new un(s);return t=Jf(t),function(){if(--t<1)return n.apply(this,arguments)}}function Ss(t,n,e){return n=e?o:n,n=t&&null==n?t.length:n,Eu(t,j,o,o,o,o,n)}function Es(t,n){var e;if("function"!=typeof n)throw new un(s);return t=Jf(t),function(){return--t>0&&(e=n.apply(this,arguments)),t<=1&&(n=o),e}}var Ds=mo(function(t,n,e){var r=y;if(e.length){var i=sr(e,qu(Ds));r|=O}return Eu(t,r,n,e,i)}),Is=mo(function(t,n,e){var r=y|m;if(e.length){var i=sr(e,qu(Is));r|=O}return Eu(n,r,t,e,i)});function Ps(t,n,e){n=e?o:n;var r=Eu(t,w,o,o,o,o,o,n);return r.placeholder=Ps.placeholder,r}function Ts(t,n,e){n=e?o:n;var r=Eu(t,$,o,o,o,o,o,n);return r.placeholder=Ts.placeholder,r}function Cs(t,n,e){var r,i,u,a,c,f,l=0,p=!1,h=!1,v=!0;if("function"!=typeof t)throw new un(s);function d(n){var e=r,u=i;return r=i=o,l=n,a=t.apply(u,e),a}function _(t){return l=t,c=Oa(m,n),p?d(t):a}function g(t){var e=t-f,r=t-l,i=n-e;return h?Vn(i,u-r):i}function y(t){var e=t-f,r=t-l;return f===o||e>=n||e<0||h&&r>=u}function m(){var t=ks();if(y(t))return b(t);c=Oa(m,g(t))}function b(t){return c=o,v&&r?d(t):(r=i=o,a)}function w(){c!==o&&Wo(c),l=0,r=f=i=c=o}function $(){return c===o?a:b(ks())}function O(){var t=ks(),e=y(t);if(r=arguments,i=this,f=t,e){if(c===o)return _(f);if(h)return c=Oa(m,n),d(f)}return c===o&&(c=Oa(m,n)),a}return n=Kf(n)||0,Of(e)&&(p=!!e.leading,h="maxWait"in e,u=h?qn(Kf(e.maxWait)||0,n):u,v="trailing"in e?!!e.trailing:v),O.cancel=w,O.flush=$,O}var Rs=mo(function(t,n){return yi(t,1,n)}),Ns=mo(function(t,n,e){return yi(t,Kf(n)||0,e)});function Us(t){return Eu(t,x)}function Bs(t,n){if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new un(s);var e=function(){var r=arguments,i=n?n.apply(this,r):r[0],o=e.cache;if(o.has(i))return o.get(i);var u=t.apply(this,r);return e.cache=o.set(i,u)||o,u};return e.cache=new(Bs.Cache||qr),e}function Ms(t){if("function"!=typeof t)throw new un(s);return function(){var n=arguments;switch(n.length){case 0:return!t.call(this);case 1:return!t.call(this,n[0]);case 2:return!t.call(this,n[0],n[1]);case 3:return!t.call(this,n[0],n[1],n[2])}return!t.apply(this,n)}}function Ls(t){return Es(2,t)}Bs.Cache=qr;var qs=zo(function(t,n){n=1==n.length&&af(n[0])?xe(n[0],Ge(Vu())):xe(ki(n,1),Ge(Vu()));var e=n.length;return mo(function(r){var i=-1,o=Vn(r.length,e);while(++i<o)r[i]=n[i].call(this,r[i]);return me(t,this,r)})}),Vs=mo(function(t,n){var e=sr(n,qu(Vs));return Eu(t,O,o,n,e)}),zs=mo(function(t,n){var e=sr(n,qu(zs));return Eu(t,A,o,n,e)}),Fs=Nu(function(t,n){return Eu(t,k,o,o,o,n)});function Ws(t,n){if("function"!=typeof t)throw new un(s);return n=n===o?n:Jf(n),mo(t,n)}function Hs(t,n){if("function"!=typeof t)throw new un(s);return n=null==n?0:qn(Jf(n),0),mo(function(e){var r=e[n],i=Fo(e,0,n);return r&&Se(i,r),me(t,this,i)})}function Js(t,n,e){var r=!0,i=!0;if("function"!=typeof t)throw new un(s);return Of(e)&&(r="leading"in e?!!e.leading:r,i="trailing"in e?!!e.trailing:i),Cs(t,n,{leading:r,maxWait:n,trailing:i})}function Gs(t){return Ss(t,1)}function Ks(t,n){return Vs(qo(n),t)}function Zs(){if(!arguments.length)return[];var t=arguments[0];return af(t)?t:[t]}function Qs(t){return di(t,d)}function Ys(t,n){return n="function"==typeof n?n:o,di(t,d,n)}function Xs(t){return di(t,h|d)}function tf(t,n){return n="function"==typeof n?n:o,di(t,h|d,n)}function nf(t,n){return null==n||gi(t,n,wl(n))}function ef(t,n){return t===n||t!==t&&n!==n}var rf=Au(Ri),of=Au(function(t,n){return t>=n}),uf=Vi(function(){return arguments}())?Vi:function(t){return Af(t)&&pn.call(t,"callee")&&!jn.call(t,"callee")},af=e.isArray,cf=he?Ge(he):zi;function sf(t){return null!=t&&$f(t.length)&&!bf(t)}function ff(t){return Af(t)&&sf(t)}function lf(t){return!0===t||!1===t||Af(t)&&Ci(t)==H}var pf=Un||Jp,hf=ve?Ge(ve):Fi;function vf(t){return Af(t)&&1===t.nodeType&&!Tf(t)}function df(t){if(null==t)return!0;if(sf(t)&&(af(t)||"string"==typeof t||"function"==typeof t.splice||pf(t)||Mf(t)||uf(t)))return!t.length;var n=Ku(t);if(n==Y||n==ot)return!t.size;if(la(t))return!to(t).length;for(var e in t)if(pn.call(t,e))return!1;return!0}function _f(t,n){return Wi(t,n)}function gf(t,n,e){e="function"==typeof e?e:o;var r=e?e(t,n):o;return r===o?Wi(t,n,o,e):!!r}function yf(t){if(!Af(t))return!1;var n=Ci(t);return n==K||n==G||"string"==typeof t.message&&"string"==typeof t.name&&!Tf(t)}function mf(t){return"number"==typeof t&&Bn(t)}function bf(t){if(!Of(t))return!1;var n=Ci(t);return n==Z||n==Q||n==W||n==rt}function wf(t){return"number"==typeof t&&t==Jf(t)}function $f(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=N}function Of(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}function Af(t){return null!=t&&"object"==typeof t}var jf=de?Ge(de):Ji;function kf(t,n){return t===n||Gi(t,n,Fu(n))}function xf(t,n,e){return e="function"==typeof e?e:o,Gi(t,n,Fu(n),e)}function Sf(t){return Pf(t)&&t!=+t}function Ef(t){if(fa(t))throw new i(c);return Ki(t)}function Df(t){return null===t}function If(t){return null==t}function Pf(t){return"number"==typeof t||Af(t)&&Ci(t)==X}function Tf(t){if(!Af(t)||Ci(t)!=nt)return!1;var n=On(t);if(null===n)return!0;var e=pn.call(n,"constructor")&&n.constructor;return"function"==typeof e&&e instanceof e&&ln.call(e)==_n}var Cf=_e?Ge(_e):Zi;function Rf(t){return wf(t)&&t>=-N&&t<=N}var Nf=ge?Ge(ge):Qi;function Uf(t){return"string"==typeof t||!af(t)&&Af(t)&&Ci(t)==ut}function Bf(t){return"symbol"==typeof t||Af(t)&&Ci(t)==at}var Mf=ye?Ge(ye):Yi;function Lf(t){return t===o}function qf(t){return Af(t)&&Ku(t)==st}function Vf(t){return Af(t)&&Ci(t)==ft}var zf=Au(eo),Ff=Au(function(t,n){return t<=n});function Wf(t){if(!t)return[];if(sf(t))return Uf(t)?dr(t):eu(t);if(Sn&&t[Sn])return ur(t[Sn]());var n=Ku(t),e=n==Y?ar:n==ot?fr:Ll;return e(t)}function Hf(t){if(!t)return 0===t?t:0;if(t=Kf(t),t===R||t===-R){var n=t<0?-1:1;return n*U}return t===t?t:0}function Jf(t){var n=Hf(t),e=n%1;return n===n?e?n-e:n:0}function Gf(t){return t?vi(Jf(t),0,M):0}function Kf(t){if("number"==typeof t)return t;if(Bf(t))return B;if(Of(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=Of(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Ut,"");var e=Gt.test(t);return e||Zt.test(t)?ie(t.slice(2),e?2:8):Jt.test(t)?B:+t}function Zf(t){return ru(t,$l(t))}function Qf(t){return t?vi(Jf(t),-N,N):0===t?t:0}function Yf(t){return null==t?"":Po(t)}var Xf=au(function(t,n){if(la(n)||sf(n))ru(n,wl(n),t);else for(var e in n)pn.call(n,e)&&ai(t,e,n[e])}),tl=au(function(t,n){ru(n,$l(n),t)}),nl=au(function(t,n,e,r){ru(n,$l(n),t,r)}),el=au(function(t,n,e,r){ru(n,wl(n),t,r)}),rl=Nu(hi);function il(t,n){var e=$r(t);return null==n?e:fi(e,n)}var ol=mo(function(t,n){t=en(t);var e=-1,r=n.length,i=r>2?n[2]:o;i&&oa(n[0],n[1],i)&&(r=1);while(++e<r){var u=n[e],a=$l(u),c=-1,s=a.length;while(++c<s){var f=a[c],l=t[f];(l===o||ef(l,sn[f])&&!pn.call(t,f))&&(t[f]=u[f])}}return t}),ul=mo(function(t){return t.push(o,Iu),me(kl,o,t)});function al(t,n){return Re(t,Vu(n,3),Ei)}function cl(t,n){return Re(t,Vu(n,3),Di)}function sl(t,n){return null==t?t:xi(t,Vu(n,3),$l)}function fl(t,n){return null==t?t:Si(t,Vu(n,3),$l)}function ll(t,n){return t&&Ei(t,Vu(n,3))}function pl(t,n){return t&&Di(t,Vu(n,3))}function hl(t){return null==t?[]:Ii(t,wl(t))}function vl(t){return null==t?[]:Ii(t,$l(t))}function dl(t,n,e){var r=null==t?o:Pi(t,n);return r===o?e:r}function _l(t,n){return null!=t&&Yu(t,n,Ni)}function gl(t,n){return null!=t&&Yu(t,n,Ui)}var yl=yu(function(t,n,e){null!=n&&"function"!=typeof n.toString&&(n=dn.call(n)),t[n]=e},jp(Ep)),ml=yu(function(t,n,e){null!=n&&"function"!=typeof n.toString&&(n=dn.call(n)),pn.call(t,n)?t[n].push(e):t[n]=[e]},Vu),bl=mo(qi);function wl(t){return sf(t)?ei(t):to(t)}function $l(t){return sf(t)?ei(t,!0):no(t)}function Ol(t,n){var e={};return n=Vu(n,3),Ei(t,function(t,r,i){pi(e,n(t,r,i),t)}),e}function Al(t,n){var e={};return n=Vu(n,3),Ei(t,function(t,r,i){pi(e,r,n(t,r,i))}),e}var jl=au(function(t,n,e){uo(t,n,e)}),kl=au(function(t,n,e,r){uo(t,n,e,r)}),xl=Nu(function(t,n){var e={};if(null==t)return e;var r=!1;n=xe(n,function(n){return n=Vo(n,t),r||(r=n.length>1),n}),ru(t,Bu(t),e),r&&(e=di(e,h|v|d,Pu));var i=n.length;while(i--)Co(e,n[i]);return e});function Sl(t,n){return Dl(t,Ms(Vu(n)))}var El=Nu(function(t,n){return null==t?{}:fo(t,n)});function Dl(t,n){if(null==t)return{};var e=xe(Bu(t),function(t){return[t]});return n=Vu(n),lo(t,e,function(t,e){return n(t,e[0])})}function Il(t,n,e){n=Vo(n,t);var r=-1,i=n.length;i||(i=1,t=o);while(++r<i){var u=null==t?o:t[Ea(n[r])];u===o&&(r=i,u=e),t=bf(u)?u.call(t):u}return t}function Pl(t,n,e){return null==t?t:$o(t,n,e)}function Tl(t,n,e,r){return r="function"==typeof r?r:o,null==t?t:$o(t,n,e,r)}var Cl=Su(wl),Rl=Su($l);function Nl(t,n,e){var r=af(t),i=r||pf(t)||Mf(t);if(n=Vu(n,4),null==e){var o=t&&t.constructor;e=i?r?new o:[]:Of(t)&&bf(o)?$r(On(t)):{}}return(i?we:Ei)(t,function(t,r,i){return n(e,t,r,i)}),e}function Ul(t,n){return null==t||Co(t,n)}function Bl(t,n,e){return null==t?t:Ro(t,n,qo(e))}function Ml(t,n,e,r){return r="function"==typeof r?r:o,null==t?t:Ro(t,n,qo(e),r)}function Ll(t){return null==t?[]:Ke(t,wl(t))}function ql(t){return null==t?[]:Ke(t,$l(t))}function Vl(t,n,e){return e===o&&(e=n,n=o),e!==o&&(e=Kf(e),e=e===e?e:0),n!==o&&(n=Kf(n),n=n===n?n:0),vi(Kf(t),n,e)}function zl(t,n,e){return n=Hf(n),e===o?(e=n,n=0):e=Hf(e),t=Kf(t),Bi(t,n,e)}function Fl(t,n,e){if(e&&"boolean"!=typeof e&&oa(t,n,e)&&(n=e=o),e===o&&("boolean"==typeof n?(e=n,n=o):"boolean"==typeof t&&(e=t,t=o)),t===o&&n===o?(t=0,n=1):(t=Hf(t),n===o?(n=t,t=0):n=Hf(n)),t>n){var r=t;t=n,n=r}if(e||t%1||n%1){var i=Jn();return Vn(t+i*(n-t+re("1e-"+((i+"").length-1))),n)}return _o(t,n)}var Wl=pu(function(t,n,e){return n=n.toLowerCase(),t+(e?Hl(n):n)});function Hl(t){return mp(Yf(t).toLowerCase())}function Jl(t){return t=Yf(t),t&&t.replace(Yt,tr).replace(Fn,"")}function Gl(t,n,e){t=Yf(t),n=Po(n);var r=t.length;e=e===o?r:vi(Jf(e),0,r);var i=e;return e-=n.length,e>=0&&t.slice(e,i)==n}function Kl(t){return t=Yf(t),t&&St.test(t)?t.replace(kt,nr):t}function Zl(t){return t=Yf(t),t&&Nt.test(t)?t.replace(Rt,"\\$&"):t}var Ql=pu(function(t,n,e){return t+(e?"-":"")+n.toLowerCase()}),Yl=pu(function(t,n,e){return t+(e?" ":"")+n.toLowerCase()}),Xl=lu("toLowerCase");function tp(t,n,e){t=Yf(t),n=Jf(n);var r=n?vr(t):0;if(!n||r>=n)return t;var i=(n-r)/2;return wu(Rn(i),e)+t+wu(Cn(i),e)}function np(t,n,e){t=Yf(t),n=Jf(n);var r=n?vr(t):0;return n&&r<n?t+wu(n-r,e):t}function ep(t,n,e){t=Yf(t),n=Jf(n);var r=n?vr(t):0;return n&&r<n?wu(n-r,e)+t:t}function rp(t,n,e){return e||null==n?n=0:n&&(n=+n),Hn(Yf(t).replace(Bt,""),n||0)}function ip(t,n,e){return n=(e?oa(t,n,e):n===o)?1:Jf(n),yo(Yf(t),n)}function op(){var t=arguments,n=Yf(t[0]);return t.length<3?n:n.replace(t[1],t[2])}var up=pu(function(t,n,e){return t+(e?"_":"")+n.toLowerCase()});function ap(t,n,e){return e&&"number"!=typeof e&&oa(t,n,e)&&(n=e=o),e=e===o?M:e>>>0,e?(t=Yf(t),t&&("string"==typeof n||null!=n&&!Cf(n))&&(n=Po(n),!n&&ir(t))?Fo(dr(t),0,e):t.split(n,e)):[]}var cp=pu(function(t,n,e){return t+(e?" ":"")+mp(n)});function sp(t,n,e){return t=Yf(t),e=null==e?0:vi(Jf(e),0,t.length),n=Po(n),t.slice(e,e+n.length)==n}function fp(t,n,e){var r=br.templateSettings;e&&oa(t,n,e)&&(n=o),t=Yf(t),n=nl({},n,r,Du);var i,u,a=nl({},n.imports,r.imports,Du),c=wl(a),s=Ke(a,c),f=0,l=n.interpolate||Xt,p="__p += '",h=rn((n.escape||Xt).source+"|"+l.source+"|"+(l===It?Wt:Xt).source+"|"+(n.evaluate||Xt).source+"|$","g"),v="//# sourceURL="+("sourceURL"in n?n.sourceURL:"lodash.templateSources["+ ++Zn+"]")+"\n";t.replace(h,function(n,e,r,o,a,c){return r||(r=o),p+=t.slice(f,c).replace(tn,er),e&&(i=!0,p+="' +\n__e("+e+") +\n'"),a&&(u=!0,p+="';\n"+a+";\n__p += '"),r&&(p+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),f=c+n.length,n}),p+="';\n";var d=n.variable;d||(p="with (obj) {\n"+p+"\n}\n"),p=(u?p.replace($t,""):p).replace(Ot,"$1").replace(At,"$1;"),p="function("+(d||"obj")+") {\n"+(d?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(u?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var _=wp(function(){return zt(c,v+"return "+p).apply(o,s)});if(_.source=p,yf(_))throw _;return _}function lp(t){return Yf(t).toLowerCase()}function pp(t){return Yf(t).toUpperCase()}function hp(t,n,e){if(t=Yf(t),t&&(e||n===o))return t.replace(Ut,"");if(!t||!(n=Po(n)))return t;var r=dr(t),i=dr(n),u=Qe(r,i),a=Ye(r,i)+1;return Fo(r,u,a).join("")}function vp(t,n,e){if(t=Yf(t),t&&(e||n===o))return t.replace(Mt,"");if(!t||!(n=Po(n)))return t;var r=dr(t),i=Ye(r,dr(n))+1;return Fo(r,0,i).join("")}function dp(t,n,e){if(t=Yf(t),t&&(e||n===o))return t.replace(Bt,"");if(!t||!(n=Po(n)))return t;var r=dr(t),i=Qe(r,dr(n));return Fo(r,i).join("")}function _p(t,n){var e=S,r=E;if(Of(n)){var i="separator"in n?n.separator:i;e="length"in n?Jf(n.length):e,r="omission"in n?Po(n.omission):r}t=Yf(t);var u=t.length;if(ir(t)){var a=dr(t);u=a.length}if(e>=u)return t;var c=e-vr(r);if(c<1)return r;var s=a?Fo(a,0,c).join(""):t.slice(0,c);if(i===o)return s+r;if(a&&(c+=s.length-c),Cf(i)){if(t.slice(c).search(i)){var f,l=s;i.global||(i=rn(i.source,Yf(Ht.exec(i))+"g")),i.lastIndex=0;while(f=i.exec(l))var p=f.index;s=s.slice(0,p===o?c:p)}}else if(t.indexOf(Po(i),c)!=c){var h=s.lastIndexOf(i);h>-1&&(s=s.slice(0,h))}return s+r}function gp(t){return t=Yf(t),t&&xt.test(t)?t.replace(jt,_r):t}var yp=pu(function(t,n,e){return t+(e?" ":"")+n.toUpperCase()}),mp=lu("toUpperCase");function bp(t,n,e){return t=Yf(t),n=e?o:n,n===o?or(t)?mr(t):Ce(t):t.match(n)||[]}var wp=mo(function(t,n){try{return me(t,o,n)}catch(e){return yf(e)?e:new i(e)}}),$p=Nu(function(t,n){return we(n,function(n){n=Ea(n),pi(t,n,Ds(t[n],t))}),t});function Op(t){var n=null==t?0:t.length,e=Vu();return t=n?xe(t,function(t){if("function"!=typeof t[1])throw new un(s);return[e(t[0]),t[1]]}):[],mo(function(e){var r=-1;while(++r<n){var i=t[r];if(me(i[0],this,e))return me(i[1],this,e)}})}function Ap(t){return _i(di(t,h))}function jp(t){return function(){return t}}function kp(t,n){return null==t||t!==t?n:t}var xp=_u(),Sp=_u(!0);function Ep(t){return t}function Dp(t){return Xi("function"==typeof t?t:di(t,h))}function Ip(t){return io(di(t,h))}function Pp(t,n){return oo(t,di(n,h))}var Tp=mo(function(t,n){return function(e){return qi(e,t,n)}}),Cp=mo(function(t,n){return function(e){return qi(t,e,n)}});function Rp(t,n,e){var r=wl(n),i=Ii(n,r);null!=e||Of(n)&&(i.length||!r.length)||(e=n,n=t,t=this,i=Ii(n,wl(n)));var o=!(Of(e)&&"chain"in e)||!!e.chain,u=bf(t);return we(i,function(e){var r=n[e];t[e]=r,u&&(t.prototype[e]=function(){var n=this.__chain__;if(o||n){var e=t(this.__wrapped__),i=e.__actions__=eu(this.__actions__);return i.push({func:r,args:arguments,thisArg:t}),e.__chain__=n,e}return r.apply(t,Se([this.value()],arguments))})}),t}function Np(){return ae._===this&&(ae._=gn),this}function Up(){}function Bp(t){return t=Jf(t),mo(function(n){return co(n,t)})}var Mp=bu(xe),Lp=bu(Oe),qp=bu(Ie);function Vp(t){return ua(t)?qe(Ea(t)):po(t)}function zp(t){return function(n){return null==t?o:Pi(t,n)}}var Fp=Ou(),Wp=Ou(!0);function Hp(){return[]}function Jp(){return!1}function Gp(){return{}}function Kp(){return""}function Zp(){return!0}function Qp(t,n){if(t=Jf(t),t<1||t>N)return[];var e=M,r=Vn(t,M);n=Vu(n),t-=M;var i=He(r,n);while(++e<t)n(e);return i}function Yp(t){return af(t)?xe(t,Ea):Bf(t)?[t]:eu(Sa(Yf(t)))}function Xp(t){var n=++hn;return Yf(t)+n}var th=mu(function(t,n){return t+n},0),nh=ku("ceil"),eh=mu(function(t,n){return t/n},1),rh=ku("floor");function ih(t){return t&&t.length?Oi(t,Ep,Ri):o}function oh(t,n){return t&&t.length?Oi(t,Vu(n,2),Ri):o}function uh(t){return Le(t,Ep)}function ah(t,n){return Le(t,Vu(n,2))}function ch(t){return t&&t.length?Oi(t,Ep,eo):o}function sh(t,n){return t&&t.length?Oi(t,Vu(n,2),eo):o}var fh=mu(function(t,n){return t*n},1),lh=ku("round"),ph=mu(function(t,n){return t-n},0);function hh(t){return t&&t.length?We(t,Ep):0}function vh(t,n){return t&&t.length?We(t,Vu(n,2)):0}return br.after=xs,br.ary=Ss,br.assign=Xf,br.assignIn=tl,br.assignInWith=nl,br.assignWith=el,br.at=rl,br.before=Es,br.bind=Ds,br.bindAll=$p,br.bindKey=Is,br.castArray=Zs,br.chain=zc,br.chunk=Ta,br.compact=Ca,br.concat=Ra,br.cond=Op,br.conforms=Ap,br.constant=jp,br.countBy=ts,br.create=il,br.curry=Ps,br.curryRight=Ts,br.debounce=Cs,br.defaults=ol,br.defaultsDeep=ul,br.defer=Rs,br.delay=Ns,br.difference=Na,br.differenceBy=Ua,br.differenceWith=Ba,br.drop=Ma,br.dropRight=La,br.dropRightWhile=qa,br.dropWhile=Va,br.fill=za,br.filter=es,br.flatMap=os,br.flatMapDeep=us,br.flatMapDepth=as,br.flatten=Ha,br.flattenDeep=Ja,br.flattenDepth=Ga,br.flip=Us,br.flow=xp,br.flowRight=Sp,br.fromPairs=Ka,br.functions=hl,br.functionsIn=vl,br.groupBy=fs,br.initial=Ya,br.intersection=Xa,br.intersectionBy=tc,br.intersectionWith=nc,br.invert=yl,br.invertBy=ml,br.invokeMap=ps,br.iteratee=Dp,br.keyBy=hs,br.keys=wl,br.keysIn=$l,br.map=vs,br.mapKeys=Ol,br.mapValues=Al,br.matches=Ip,br.matchesProperty=Pp,br.memoize=Bs,br.merge=jl,br.mergeWith=kl,br.method=Tp,br.methodOf=Cp,br.mixin=Rp,br.negate=Ms,br.nthArg=Bp,br.omit=xl,br.omitBy=Sl,br.once=Ls,br.orderBy=ds,br.over=Mp,br.overArgs=qs,br.overEvery=Lp,br.overSome=qp,br.partial=Vs,br.partialRight=zs,br.partition=_s,br.pick=El,br.pickBy=Dl,br.property=Vp,br.propertyOf=zp,br.pull=uc,br.pullAll=ac,br.pullAllBy=cc,br.pullAllWith=sc,br.pullAt=fc,br.range=Fp,br.rangeRight=Wp,br.rearg=Fs,br.reject=ms,br.remove=lc,br.rest=Ws,br.reverse=pc,br.sampleSize=ws,br.set=Pl,br.setWith=Tl,br.shuffle=$s,br.slice=hc,br.sortBy=js,br.sortedUniq=bc,br.sortedUniqBy=wc,br.split=ap,br.spread=Hs,br.tail=$c,br.take=Oc,br.takeRight=Ac,br.takeRightWhile=jc,br.takeWhile=kc,br.tap=Fc,br.throttle=Js,br.thru=Wc,br.toArray=Wf,br.toPairs=Cl,br.toPairsIn=Rl,br.toPath=Yp,br.toPlainObject=Zf,br.transform=Nl,br.unary=Gs,br.union=xc,br.unionBy=Sc,br.unionWith=Ec,br.uniq=Dc,br.uniqBy=Ic,br.uniqWith=Pc,br.unset=Ul,br.unzip=Tc,br.unzipWith=Cc,br.update=Bl,br.updateWith=Ml,br.values=Ll,br.valuesIn=ql,br.without=Rc,br.words=bp,br.wrap=Ks,br.xor=Nc,br.xorBy=Uc,br.xorWith=Bc,br.zip=Mc,br.zipObject=Lc,br.zipObjectDeep=qc,br.zipWith=Vc,br.entries=Cl,br.entriesIn=Rl,br.extend=tl,br.extendWith=nl,Rp(br,br),br.add=th,br.attempt=wp,br.camelCase=Wl,br.capitalize=Hl,br.ceil=nh,br.clamp=Vl,br.clone=Qs,br.cloneDeep=Xs,br.cloneDeepWith=tf,br.cloneWith=Ys,br.conformsTo=nf,br.deburr=Jl,br.defaultTo=kp,br.divide=eh,br.endsWith=Gl,br.eq=ef,br.escape=Kl,br.escapeRegExp=Zl,br.every=ns,br.find=rs,br.findIndex=Fa,br.findKey=al,br.findLast=is,br.findLastIndex=Wa,br.findLastKey=cl,br.floor=rh,br.forEach=cs,br.forEachRight=ss,br.forIn=sl,br.forInRight=fl,br.forOwn=ll,br.forOwnRight=pl,br.get=dl,br.gt=rf,br.gte=of,br.has=_l,br.hasIn=gl,br.head=Za,br.identity=Ep,br.includes=ls,br.indexOf=Qa,br.inRange=zl,br.invoke=bl,br.isArguments=uf,br.isArray=af,br.isArrayBuffer=cf,br.isArrayLike=sf,br.isArrayLikeObject=ff,br.isBoolean=lf,br.isBuffer=pf,br.isDate=hf,br.isElement=vf,br.isEmpty=df,br.isEqual=_f,br.isEqualWith=gf,br.isError=yf,br.isFinite=mf,br.isFunction=bf,br.isInteger=wf,br.isLength=$f,br.isMap=jf,br.isMatch=kf,br.isMatchWith=xf,br.isNaN=Sf,br.isNative=Ef,br.isNil=If,br.isNull=Df,br.isNumber=Pf,br.isObject=Of,br.isObjectLike=Af,br.isPlainObject=Tf,br.isRegExp=Cf,br.isSafeInteger=Rf,br.isSet=Nf,br.isString=Uf,br.isSymbol=Bf,br.isTypedArray=Mf,br.isUndefined=Lf,br.isWeakMap=qf,br.isWeakSet=Vf,br.join=ec,br.kebabCase=Ql,br.last=rc,br.lastIndexOf=ic,br.lowerCase=Yl,br.lowerFirst=Xl,br.lt=zf,br.lte=Ff,br.max=ih,br.maxBy=oh,br.mean=uh,br.meanBy=ah,br.min=ch,br.minBy=sh,br.stubArray=Hp,br.stubFalse=Jp,br.stubObject=Gp,br.stubString=Kp,br.stubTrue=Zp,br.multiply=fh,br.nth=oc,br.noConflict=Np,br.noop=Up,br.now=ks,br.pad=tp,br.padEnd=np,br.padStart=ep,br.parseInt=rp,br.random=Fl,br.reduce=gs,br.reduceRight=ys,br.repeat=ip,br.replace=op,br.result=Il,br.round=lh,br.runInContext=t,br.sample=bs,br.size=Os,br.snakeCase=up,br.some=As,br.sortedIndex=vc,br.sortedIndexBy=dc,br.sortedIndexOf=_c,br.sortedLastIndex=gc,br.sortedLastIndexBy=yc,br.sortedLastIndexOf=mc,br.startCase=cp,br.startsWith=sp,br.subtract=ph,br.sum=hh,br.sumBy=vh,br.template=fp,br.times=Qp,br.toFinite=Hf,br.toInteger=Jf,br.toLength=Gf,br.toLower=lp,br.toNumber=Kf,br.toSafeInteger=Qf,br.toString=Yf,br.toUpper=pp,br.trim=hp,br.trimEnd=vp,br.trimStart=dp,br.truncate=_p,br.unescape=gp,br.uniqueId=Xp,br.upperCase=yp,br.upperFirst=mp,br.each=cs,br.eachRight=ss,br.first=Za,Rp(br,function(){var t={};return Ei(br,function(n,e){pn.call(br.prototype,e)||(t[e]=n)}),t}(),{chain:!1}),br.VERSION=u,we(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){br[t].placeholder=br}),we(["drop","take"],function(t,n){jr.prototype[t]=function(e){e=e===o?1:qn(Jf(e),0);var r=this.__filtered__&&!n?new jr(this):this.clone();return r.__filtered__?r.__takeCount__=Vn(e,r.__takeCount__):r.__views__.push({size:Vn(e,M),type:t+(r.__dir__<0?"Right":"")}),r},jr.prototype[t+"Right"]=function(n){return this.reverse()[t](n).reverse()}}),we(["filter","map","takeWhile"],function(t,n){var e=n+1,r=e==P||e==C;jr.prototype[t]=function(t){var n=this.clone();return n.__iteratees__.push({iteratee:Vu(t,3),type:e}),n.__filtered__=n.__filtered__||r,n}}),we(["head","last"],function(t,n){var e="take"+(n?"Right":"");jr.prototype[t]=function(){return this[e](1).value()[0]}}),we(["initial","tail"],function(t,n){var e="drop"+(n?"":"Right");jr.prototype[t]=function(){return this.__filtered__?new jr(this):this[e](1)}}),jr.prototype.compact=function(){return this.filter(Ep)},jr.prototype.find=function(t){return this.filter(t).head()},jr.prototype.findLast=function(t){return this.reverse().find(t)},jr.prototype.invokeMap=mo(function(t,n){return"function"==typeof t?new jr(this):this.map(function(e){return qi(e,t,n)})}),jr.prototype.reject=function(t){return this.filter(Ms(Vu(t)))},jr.prototype.slice=function(t,n){t=Jf(t);var e=this;return e.__filtered__&&(t>0||n<0)?new jr(e):(t<0?e=e.takeRight(-t):t&&(e=e.drop(t)),n!==o&&(n=Jf(n),e=n<0?e.dropRight(-n):e.take(n-t)),e)},jr.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},jr.prototype.toArray=function(){return this.take(M)},Ei(jr.prototype,function(t,n){var e=/^(?:filter|find|map|reject)|While$/.test(n),r=/^(?:head|last)$/.test(n),i=br[r?"take"+("last"==n?"Right":""):n],u=r||/^find/.test(n);i&&(br.prototype[n]=function(){var n=this.__wrapped__,a=r?[1]:arguments,c=n instanceof jr,s=a[0],f=c||af(n),l=function(t){var n=i.apply(br,Se([t],a));return r&&p?n[0]:n};f&&e&&"function"==typeof s&&1!=s.length&&(c=f=!1);var p=this.__chain__,h=!!this.__actions__.length,v=u&&!p,d=c&&!h;if(!u&&f){n=d?n:new jr(this);var _=t.apply(n,a);return _.__actions__.push({func:Wc,args:[l],thisArg:o}),new Ar(_,p)}return v&&d?t.apply(this,a):(_=this.thru(l),v?r?_.value()[0]:_.value():_)})}),we(["pop","push","shift","sort","splice","unshift"],function(t){var n=an[t],e=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t);br.prototype[t]=function(){var t=arguments;if(r&&!this.__chain__){var i=this.value();return n.apply(af(i)?i:[],t)}return this[e](function(e){return n.apply(af(e)?e:[],t)})}}),Ei(jr.prototype,function(t,n){var e=br[n];if(e){var r=e.name+"",i=se[r]||(se[r]=[]);i.push({name:n,func:e})}}),se[gu(o,m).name]=[{name:"wrapper",func:o}],jr.prototype.clone=kr,jr.prototype.reverse=xr,jr.prototype.value=Sr,br.prototype.at=Hc,br.prototype.chain=Jc,br.prototype.commit=Gc,br.prototype.next=Kc,br.prototype.plant=Qc,br.prototype.reverse=Yc,br.prototype.toJSON=br.prototype.valueOf=br.prototype.value=Xc,br.prototype.first=br.prototype.head,Sn&&(br.prototype[Sn]=Zc),br},wr=br();ae._=wr,i=function(){return wr}.call(n,e,n,r),i===o||(r.exports=i)}).call(this)}).call(this,e("c8ba"),e("62e4")(t))},3705:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={server:"http://101.132.119.190:9610"};n.default=r},"49a3":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={pages:{"pages/index/index":{navigationBarTitleText:"小裁",titleNView:{buttons:[{text:"反馈",width:"80px",fontSize:"16px"}]}}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"小裁",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};n.default=r},"62e4":function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},"66fd":function(t,n,e){"use strict";e.r(n),function(t){
/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var e=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function o(t){return!0===t}function u(t){return!1===t}function a(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function c(t){return null!==t&&"object"===typeof t}var s=Object.prototype.toString;function f(t){return"[object Object]"===s.call(t)}function l(t){return"[object RegExp]"===s.call(t)}function p(t){var n=parseFloat(String(t));return n>=0&&Math.floor(n)===n&&isFinite(t)}function h(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function v(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===s?JSON.stringify(t,null,2):String(t)}function d(t){var n=parseFloat(t);return isNaN(n)?t:n}function _(t,n){for(var e=Object.create(null),r=t.split(","),i=0;i<r.length;i++)e[r[i]]=!0;return n?function(t){return e[t.toLowerCase()]}:function(t){return e[t]}}_("slot,component",!0);var g=_("key,ref,slot,slot-scope,is");function y(t,n){if(t.length){var e=t.indexOf(n);if(e>-1)return t.splice(e,1)}}var m=Object.prototype.hasOwnProperty;function b(t,n){return m.call(t,n)}function w(t){var n=Object.create(null);return function(e){var r=n[e];return r||(n[e]=t(e))}}var $=/-(\w)/g,O=w(function(t){return t.replace($,function(t,n){return n?n.toUpperCase():""})}),A=w(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),j=/\B([A-Z])/g,k=w(function(t){return t.replace(j,"-$1").toLowerCase()});function x(t,n){function e(e){var r=arguments.length;return r?r>1?t.apply(n,arguments):t.call(n,e):t.call(n)}return e._length=t.length,e}function S(t,n){return t.bind(n)}var E=Function.prototype.bind?S:x;function D(t,n){n=n||0;var e=t.length-n,r=new Array(e);while(e--)r[e]=t[e+n];return r}function I(t,n){for(var e in n)t[e]=n[e];return t}function P(t){for(var n={},e=0;e<t.length;e++)t[e]&&I(n,t[e]);return n}function T(t,n,e){}var C=function(t,n,e){return!1},R=function(t){return t};function N(t,n){if(t===n)return!0;var e=c(t),r=c(n);if(!e||!r)return!e&&!r&&String(t)===String(n);try{var i=Array.isArray(t),o=Array.isArray(n);if(i&&o)return t.length===n.length&&t.every(function(t,e){return N(t,n[e])});if(t instanceof Date&&n instanceof Date)return t.getTime()===n.getTime();if(i||o)return!1;var u=Object.keys(t),a=Object.keys(n);return u.length===a.length&&u.every(function(e){return N(t[e],n[e])})}catch(s){return!1}}function U(t,n){for(var e=0;e<t.length;e++)if(N(t[e],n))return e;return-1}function B(t){var n=!1;return function(){n||(n=!0,t.apply(this,arguments))}}var M=["component","directive","filter"],L=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:C,isReservedAttr:C,isUnknownElement:C,getTagNamespace:T,parsePlatformTagName:R,mustUseProp:C,async:!0,_lifecycleHooks:L},V=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function z(t){var n=(t+"").charCodeAt(0);return 36===n||95===n}function F(t,n,e,r){Object.defineProperty(t,n,{value:e,enumerable:!!r,writable:!0,configurable:!0})}var W=new RegExp("[^"+V.source+".$_\\d]");function H(t){if(!W.test(t)){var n=t.split(".");return function(t){for(var e=0;e<n.length;e++){if(!t)return;t=t[n[e]]}return t}}}var J,G="__proto__"in{},K="undefined"!==typeof window,Z="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=Z&&WXEnvironment.platform.toLowerCase(),Y=K&&window.navigator.userAgent.toLowerCase(),X=Y&&/msie|trident/.test(Y),tt=(Y&&Y.indexOf("msie 9.0"),Y&&Y.indexOf("edge/")>0),nt=(Y&&Y.indexOf("android"),Y&&/iphone|ipad|ipod|ios/.test(Y)||"ios"===Q),et=(Y&&/chrome\/\d+/.test(Y),Y&&/phantomjs/.test(Y),Y&&Y.match(/firefox\/(\d+)/),{}.watch);if(K)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(ei){}var it=function(){return void 0===J&&(J=!K&&!Z&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),J},ot=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ut(t){return"function"===typeof t&&/native code/.test(t.toString())}var at,ct="undefined"!==typeof Symbol&&ut(Symbol)&&"undefined"!==typeof Reflect&&ut(Reflect.ownKeys);at="undefined"!==typeof Set&&ut(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var st=T,ft=0,lt=function(){"undefined"!==typeof SharedObject?this.id=SharedObject.uid++:this.id=ft++,this.subs=[]};function pt(t){lt.SharedObject.targetStack.push(t),lt.SharedObject.target=t}function ht(){lt.SharedObject.targetStack.pop(),lt.SharedObject.target=lt.SharedObject.targetStack[lt.SharedObject.targetStack.length-1]}lt.prototype.addSub=function(t){this.subs.push(t)},lt.prototype.removeSub=function(t){y(this.subs,t)},lt.prototype.depend=function(){lt.SharedObject.target&&lt.SharedObject.target.addDep(this)},lt.prototype.notify=function(){var t=this.subs.slice();for(var n=0,e=t.length;n<e;n++)t[n].update()},lt.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},lt.SharedObject.target=null,lt.SharedObject.targetStack=[];var vt=function(t,n,e,r,i,o,u,a){this.tag=t,this.data=n,this.children=e,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=n&&n.key,this.componentOptions=u,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},dt={child:{configurable:!0}};dt.child.get=function(){return this.componentInstance},Object.defineProperties(vt.prototype,dt);var _t=function(t){void 0===t&&(t="");var n=new vt;return n.text=t,n.isComment=!0,n};function gt(t){return new vt(void 0,void 0,void 0,String(t))}function yt(t){var n=new vt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return n.ns=t.ns,n.isStatic=t.isStatic,n.key=t.key,n.isComment=t.isComment,n.fnContext=t.fnContext,n.fnOptions=t.fnOptions,n.fnScopeId=t.fnScopeId,n.asyncMeta=t.asyncMeta,n.isCloned=!0,n}var mt=Array.prototype,bt=Object.create(mt),wt=["push","pop","shift","unshift","splice","sort","reverse"];wt.forEach(function(t){var n=mt[t];F(bt,t,function(){var e=[],r=arguments.length;while(r--)e[r]=arguments[r];var i,o=n.apply(this,e),u=this.__ob__;switch(t){case"push":case"unshift":i=e;break;case"splice":i=e.slice(2);break}return i&&u.observeArray(i),u.dep.notify(),o})});var $t=Object.getOwnPropertyNames(bt),Ot=!0;function At(t){Ot=t}var jt=function(t){this.value=t,this.dep=new lt,this.vmCount=0,F(t,"__ob__",this),Array.isArray(t)?(G?t.push!==t.__proto__.push?xt(t,bt,$t):kt(t,bt):xt(t,bt,$t),this.observeArray(t)):this.walk(t)};function kt(t,n){t.__proto__=n}function xt(t,n,e){for(var r=0,i=e.length;r<i;r++){var o=e[r];F(t,o,n[o])}}function St(t,n){var e;if(c(t)&&!(t instanceof vt))return b(t,"__ob__")&&t.__ob__ instanceof jt?e=t.__ob__:Ot&&!it()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(e=new jt(t)),n&&e&&e.vmCount++,e}function Et(t,n,e,r,i){var o=new lt,u=Object.getOwnPropertyDescriptor(t,n);if(!u||!1!==u.configurable){var a=u&&u.get,c=u&&u.set;a&&!c||2!==arguments.length||(e=t[n]);var s=!i&&St(e);Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:function(){var n=a?a.call(t):e;return lt.SharedObject.target&&(o.depend(),s&&(s.dep.depend(),Array.isArray(n)&&Pt(n))),n},set:function(n){var r=a?a.call(t):e;n===r||n!==n&&r!==r||a&&!c||(c?c.call(t,n):e=n,s=!i&&St(n),o.notify())}})}}function Dt(t,n,e){if(Array.isArray(t)&&p(n))return t.length=Math.max(t.length,n),t.splice(n,1,e),e;if(n in t&&!(n in Object.prototype))return t[n]=e,e;var r=t.__ob__;return t._isVue||r&&r.vmCount?e:r?(Et(r.value,n,e),r.dep.notify(),e):(t[n]=e,e)}function It(t,n){if(Array.isArray(t)&&p(n))t.splice(n,1);else{var e=t.__ob__;t._isVue||e&&e.vmCount||b(t,n)&&(delete t[n],e&&e.dep.notify())}}function Pt(t){for(var n=void 0,e=0,r=t.length;e<r;e++)n=t[e],n&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&Pt(n)}jt.prototype.walk=function(t){for(var n=Object.keys(t),e=0;e<n.length;e++)Et(t,n[e])},jt.prototype.observeArray=function(t){for(var n=0,e=t.length;n<e;n++)St(t[n])};var Tt=q.optionMergeStrategies;function Ct(t,n){if(!n)return t;for(var e,r,i,o=ct?Reflect.ownKeys(n):Object.keys(n),u=0;u<o.length;u++)e=o[u],"__ob__"!==e&&(r=t[e],i=n[e],b(t,e)?r!==i&&f(r)&&f(i)&&Ct(r,i):Dt(t,e,i));return t}function Rt(t,n,e){return e?function(){var r="function"===typeof n?n.call(e,e):n,i="function"===typeof t?t.call(e,e):t;return r?Ct(r,i):i}:n?t?function(){return Ct("function"===typeof n?n.call(this,this):n,"function"===typeof t?t.call(this,this):t)}:n:t}function Nt(t,n){var e=n?t?t.concat(n):Array.isArray(n)?n:[n]:t;return e?Ut(e):e}function Ut(t){for(var n=[],e=0;e<t.length;e++)-1===n.indexOf(t[e])&&n.push(t[e]);return n}function Bt(t,n,e,r){var i=Object.create(t||null);return n?I(i,n):i}Tt.data=function(t,n,e){return e?Rt(t,n,e):n&&"function"!==typeof n?t:Rt(t,n)},L.forEach(function(t){Tt[t]=Nt}),M.forEach(function(t){Tt[t+"s"]=Bt}),Tt.watch=function(t,n,e,r){if(t===et&&(t=void 0),n===et&&(n=void 0),!n)return Object.create(t||null);if(!t)return n;var i={};for(var o in I(i,t),n){var u=i[o],a=n[o];u&&!Array.isArray(u)&&(u=[u]),i[o]=u?u.concat(a):Array.isArray(a)?a:[a]}return i},Tt.props=Tt.methods=Tt.inject=Tt.computed=function(t,n,e,r){if(!t)return n;var i=Object.create(null);return I(i,t),n&&I(i,n),i},Tt.provide=Rt;var Mt=function(t,n){return void 0===n?t:n};function Lt(t,n){var e=t.props;if(e){var r,i,o,u={};if(Array.isArray(e)){r=e.length;while(r--)i=e[r],"string"===typeof i&&(o=O(i),u[o]={type:null})}else if(f(e))for(var a in e)i=e[a],o=O(a),u[o]=f(i)?i:{type:i};else 0;t.props=u}}function qt(t,n){var e=t.inject;if(e){var r=t.inject={};if(Array.isArray(e))for(var i=0;i<e.length;i++)r[e[i]]={from:e[i]};else if(f(e))for(var o in e){var u=e[o];r[o]=f(u)?I({from:o},u):{from:u}}else 0}}function Vt(t){var n=t.directives;if(n)for(var e in n){var r=n[e];"function"===typeof r&&(n[e]={bind:r,update:r})}}function zt(t,n,e){if("function"===typeof n&&(n=n.options),Lt(n,e),qt(n,e),Vt(n),!n._base&&(n.extends&&(t=zt(t,n.extends,e)),n.mixins))for(var r=0,i=n.mixins.length;r<i;r++)t=zt(t,n.mixins[r],e);var o,u={};for(o in t)a(o);for(o in n)b(t,o)||a(o);function a(r){var i=Tt[r]||Mt;u[r]=i(t[r],n[r],e,r)}return u}function Ft(t,n,e,r){if("string"===typeof e){var i=t[n];if(b(i,e))return i[e];var o=O(e);if(b(i,o))return i[o];var u=A(o);if(b(i,u))return i[u];var a=i[e]||i[o]||i[u];return a}}function Wt(t,n,e,r){var i=n[t],o=!b(e,t),u=e[t],a=Kt(Boolean,i.type);if(a>-1)if(o&&!b(i,"default"))u=!1;else if(""===u||u===k(t)){var c=Kt(String,i.type);(c<0||a<c)&&(u=!0)}if(void 0===u){u=Ht(r,i,t);var s=Ot;At(!0),St(u),At(s)}return u}function Ht(t,n,e){if(b(n,"default")){var r=n.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[e]&&void 0!==t._props[e]?t._props[e]:"function"===typeof r&&"Function"!==Jt(n.type)?r.call(t):r}}function Jt(t){var n=t&&t.toString().match(/^\s*function (\w+)/);return n?n[1]:""}function Gt(t,n){return Jt(t)===Jt(n)}function Kt(t,n){if(!Array.isArray(n))return Gt(n,t)?0:-1;for(var e=0,r=n.length;e<r;e++)if(Gt(n[e],t))return e;return-1}function Zt(t,n,e){pt();try{if(n){var r=n;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var u=!1===i[o].call(r,t,n,e);if(u)return}catch(ei){Yt(ei,r,"errorCaptured hook")}}}Yt(t,n,e)}finally{ht()}}function Qt(t,n,e,r,i){var o;try{o=e?t.apply(n,e):t.call(n),o&&!o._isVue&&h(o)&&!o._handled&&(o.catch(function(t){return Zt(t,r,i+" (Promise/async)")}),o._handled=!0)}catch(ei){Zt(ei,r,i)}return o}function Yt(t,n,e){if(q.errorHandler)try{return q.errorHandler.call(null,t,n,e)}catch(ei){ei!==t&&Xt(ei,null,"config.errorHandler")}Xt(t,n,e)}function Xt(t,n,e){if(!K&&!Z||"undefined"===typeof console)throw t;console.error(t)}var tn,nn=[],en=!1;function rn(){en=!1;var t=nn.slice(0);nn.length=0;for(var n=0;n<t.length;n++)t[n]()}if("undefined"!==typeof Promise&&ut(Promise)){var on=Promise.resolve();tn=function(){on.then(rn),nt&&setTimeout(T)}}else if(X||"undefined"===typeof MutationObserver||!ut(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())tn="undefined"!==typeof setImmediate&&ut(setImmediate)?function(){setImmediate(rn)}:function(){setTimeout(rn,0)};else{var un=1,an=new MutationObserver(rn),cn=document.createTextNode(String(un));an.observe(cn,{characterData:!0}),tn=function(){un=(un+1)%2,cn.data=String(un)}}function sn(t,n){var e;if(nn.push(function(){if(t)try{t.call(n)}catch(ei){Zt(ei,n,"nextTick")}else e&&e(n)}),en||(en=!0,tn()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){e=t})}var fn=new at;function ln(t){pn(t,fn),fn.clear()}function pn(t,n){var e,r,i=Array.isArray(t);if(!(!i&&!c(t)||Object.isFrozen(t)||t instanceof vt)){if(t.__ob__){var o=t.__ob__.dep.id;if(n.has(o))return;n.add(o)}if(i){e=t.length;while(e--)pn(t[e],n)}else{r=Object.keys(t),e=r.length;while(e--)pn(t[r[e]],n)}}}var hn=w(function(t){var n="&"===t.charAt(0);t=n?t.slice(1):t;var e="~"===t.charAt(0);t=e?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:e,capture:r,passive:n}});function vn(t,n){function e(){var t=arguments,r=e.fns;if(!Array.isArray(r))return Qt(r,null,arguments,n,"v-on handler");for(var i=r.slice(),o=0;o<i.length;o++)Qt(i[o],null,t,n,"v-on handler")}return e.fns=t,e}function dn(t,n,e,i,u,a){var c,s,f,l;for(c in t)s=t[c],f=n[c],l=hn(c),r(s)||(r(f)?(r(s.fns)&&(s=t[c]=vn(s,a)),o(l.once)&&(s=t[c]=u(l.name,s,l.capture)),e(l.name,s,l.capture,l.passive,l.params)):s!==f&&(f.fns=s,t[c]=f));for(c in n)r(t[c])&&(l=hn(c),i(l.name,n[c],l.capture))}function _n(t,n,e,o){var u=n.options.mpOptions&&n.options.mpOptions.properties;if(r(u))return e;var a=n.options.mpOptions.externalClasses||[],c=t.attrs,s=t.props;if(i(c)||i(s))for(var f in u){var l=k(f),p=yn(e,s,f,l,!0)||yn(e,c,f,l,!1);p&&e[f]&&-1!==a.indexOf(l)&&o[O(e[f])]&&(e[f]=o[O(e[f])])}return e}function gn(t,n,e,o){var u=n.options.props;if(r(u))return _n(t,n,{},o);var a={},c=t.attrs,s=t.props;if(i(c)||i(s))for(var f in u){var l=k(f);yn(a,s,f,l,!0)||yn(a,c,f,l,!1)}return _n(t,n,a,o)}function yn(t,n,e,r,o){if(i(n)){if(b(n,e))return t[e]=n[e],o||delete n[e],!0;if(b(n,r))return t[e]=n[r],o||delete n[r],!0}return!1}function mn(t){for(var n=0;n<t.length;n++)if(Array.isArray(t[n]))return Array.prototype.concat.apply([],t);return t}function bn(t){return a(t)?[gt(t)]:Array.isArray(t)?$n(t):void 0}function wn(t){return i(t)&&i(t.text)&&u(t.isComment)}function $n(t,n){var e,u,c,s,f=[];for(e=0;e<t.length;e++)u=t[e],r(u)||"boolean"===typeof u||(c=f.length-1,s=f[c],Array.isArray(u)?u.length>0&&(u=$n(u,(n||"")+"_"+e),wn(u[0])&&wn(s)&&(f[c]=gt(s.text+u[0].text),u.shift()),f.push.apply(f,u)):a(u)?wn(s)?f[c]=gt(s.text+u):""!==u&&f.push(gt(u)):wn(u)&&wn(s)?f[c]=gt(s.text+u.text):(o(t._isVList)&&i(u.tag)&&r(u.key)&&i(n)&&(u.key="__vlist"+n+"_"+e+"__"),f.push(u)));return f}function On(t){var n=t.$options.provide;n&&(t._provided="function"===typeof n?n.call(t):n)}function An(t){var n=jn(t.$options.inject,t);n&&(At(!1),Object.keys(n).forEach(function(e){Et(t,e,n[e])}),At(!0))}function jn(t,n){if(t){for(var e=Object.create(null),r=ct?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var o=r[i];if("__ob__"!==o){var u=t[o].from,a=n;while(a){if(a._provided&&b(a._provided,u)){e[o]=a._provided[u];break}a=a.$parent}if(!a)if("default"in t[o]){var c=t[o].default;e[o]="function"===typeof c?c.call(n):c}else 0}}return e}}function kn(t,n){if(!t||!t.length)return{};for(var e={},r=0,i=t.length;r<i;r++){var o=t[r],u=o.data;if(u&&u.attrs&&u.attrs.slot&&delete u.attrs.slot,o.context!==n&&o.fnContext!==n||!u||null==u.slot)o.asyncMeta&&o.asyncMeta.data&&"page"===o.asyncMeta.data.slot?(e["page"]||(e["page"]=[])).push(o):(e.default||(e.default=[])).push(o);else{var a=u.slot,c=e[a]||(e[a]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var s in e)e[s].every(xn)&&delete e[s];return e}function xn(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Sn(t,n,r){var i,o=Object.keys(n).length>0,u=t?!!t.$stable:!o,a=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(u&&r&&r!==e&&a===r.$key&&!o&&!r.$hasNormal)return r;for(var c in i={},t)t[c]&&"$"!==c[0]&&(i[c]=En(n,c,t[c]))}else i={};for(var s in n)s in i||(i[s]=Dn(n,s));return t&&Object.isExtensible(t)&&(t._normalized=i),F(i,"$stable",u),F(i,"$key",a),F(i,"$hasNormal",o),i}function En(t,n,e){var r=function(){var t=arguments.length?e.apply(null,arguments):e({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:bn(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return e.proxy&&Object.defineProperty(t,n,{get:r,enumerable:!0,configurable:!0}),r}function Dn(t,n){return function(){return t[n]}}function In(t,n){var e,r,o,u,a;if(Array.isArray(t)||"string"===typeof t)for(e=new Array(t.length),r=0,o=t.length;r<o;r++)e[r]=n(t[r],r,r,r);else if("number"===typeof t)for(e=new Array(t),r=0;r<t;r++)e[r]=n(r+1,r,r,r);else if(c(t))if(ct&&t[Symbol.iterator]){e=[];var s=t[Symbol.iterator](),f=s.next();while(!f.done)e.push(n(f.value,e.length,r++,r)),f=s.next()}else for(u=Object.keys(t),e=new Array(u.length),r=0,o=u.length;r<o;r++)a=u[r],e[r]=n(t[a],a,r,r);return i(e)||(e=[]),e._isVList=!0,e}function Pn(t,n,e,r){var i,o=this.$scopedSlots[t];o?(e=e||{},r&&(e=I(I({},r),e)),i=o(e,this,e._i)||n):i=this.$slots[t]||n;var u=e&&e.slot;return u?this.$createElement("template",{slot:u},i):i}function Tn(t){return Ft(this.$options,"filters",t,!0)||R}function Cn(t,n){return Array.isArray(t)?-1===t.indexOf(n):t!==n}function Rn(t,n,e,r,i){var o=q.keyCodes[n]||e;return i&&r&&!q.keyCodes[n]?Cn(i,r):o?Cn(o,t):r?k(r)!==n:void 0}function Nn(t,n,e,r,i){if(e)if(c(e)){var o;Array.isArray(e)&&(e=P(e));var u=function(u){if("class"===u||"style"===u||g(u))o=t;else{var a=t.attrs&&t.attrs.type;o=r||q.mustUseProp(n,a,u)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var c=O(u),s=k(u);if(!(c in o)&&!(s in o)&&(o[u]=e[u],i)){var f=t.on||(t.on={});f["update:"+u]=function(t){e[u]=t}}};for(var a in e)u(a)}else;return t}function Un(t,n){var e=this._staticTrees||(this._staticTrees=[]),r=e[t];return r&&!n?r:(r=e[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Mn(r,"__static__"+t,!1),r)}function Bn(t,n,e){return Mn(t,"__once__"+n+(e?"_"+e:""),!0),t}function Mn(t,n,e){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ln(t[r],n+"_"+r,e);else Ln(t,n,e)}function Ln(t,n,e){t.isStatic=!0,t.key=n,t.isOnce=e}function qn(t,n){if(n)if(f(n)){var e=t.on=t.on?I({},t.on):{};for(var r in n){var i=e[r],o=n[r];e[r]=i?[].concat(i,o):o}}else;return t}function Vn(t,n,e,r){n=n||{$stable:!e};for(var i=0;i<t.length;i++){var o=t[i];Array.isArray(o)?Vn(o,n,e):o&&(o.proxy&&(o.fn.proxy=!0),n[o.key]=o.fn)}return r&&(n.$key=r),n}function zn(t,n){for(var e=0;e<n.length;e+=2){var r=n[e];"string"===typeof r&&r&&(t[n[e]]=n[e+1])}return t}function Fn(t,n){return"string"===typeof t?n+t:t}function Wn(t){t._o=Bn,t._n=d,t._s=v,t._l=In,t._t=Pn,t._q=N,t._i=U,t._m=Un,t._f=Tn,t._k=Rn,t._b=Nn,t._v=gt,t._e=_t,t._u=Vn,t._g=qn,t._d=zn,t._p=Fn}function Hn(t,n,r,i,u){var a,c=this,s=u.options;b(i,"_uid")?(a=Object.create(i),a._original=i):(a=i,i=i._original);var f=o(s._compiled),l=!f;this.data=t,this.props=n,this.children=r,this.parent=i,this.listeners=t.on||e,this.injections=jn(s.inject,i),this.slots=function(){return c.$slots||Sn(t.scopedSlots,c.$slots=kn(r,i)),c.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Sn(t.scopedSlots,this.slots())}}),f&&(this.$options=s,this.$slots=this.slots(),this.$scopedSlots=Sn(t.scopedSlots,this.$slots)),s._scopeId?this._c=function(t,n,e,r){var o=oe(a,t,n,e,r,l);return o&&!Array.isArray(o)&&(o.fnScopeId=s._scopeId,o.fnContext=i),o}:this._c=function(t,n,e,r){return oe(a,t,n,e,r,l)}}function Jn(t,n,r,o,u){var a=t.options,c={},s=a.props;if(i(s))for(var f in s)c[f]=Wt(f,s,n||e);else i(r.attrs)&&Kn(c,r.attrs),i(r.props)&&Kn(c,r.props);var l=new Hn(r,c,u,o,t),p=a.render.call(null,l._c,l);if(p instanceof vt)return Gn(p,r,l.parent,a,l);if(Array.isArray(p)){for(var h=bn(p)||[],v=new Array(h.length),d=0;d<h.length;d++)v[d]=Gn(h[d],r,l.parent,a,l);return v}}function Gn(t,n,e,r,i){var o=yt(t);return o.fnContext=e,o.fnOptions=r,n.slot&&((o.data||(o.data={})).slot=n.slot),o}function Kn(t,n){for(var e in n)t[O(e)]=n[e]}Wn(Hn.prototype);var Zn={init:function(t,n){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var e=t;Zn.prepatch(e,e)}else{var r=t.componentInstance=Xn(t,Ae);r.$mount(n?t.elm:void 0,n)}},prepatch:function(t,n){var e=n.componentOptions,r=n.componentInstance=t.componentInstance;Se(r,e.propsData,e.listeners,n,e.children)},insert:function(t){var n=t.context,e=t.componentInstance;e._isMounted||(Pe(e,"onServiceCreated"),Pe(e,"onServiceAttached"),e._isMounted=!0,Pe(e,"mounted")),t.data.keepAlive&&(n._isMounted?Fe(e):De(e,!0))},destroy:function(t){var n=t.componentInstance;n._isDestroyed||(t.data.keepAlive?Ie(n,!0):n.$destroy())}},Qn=Object.keys(Zn);function Yn(t,n,e,u,a){if(!r(t)){var s=e.$options._base;if(c(t)&&(t=s.extend(t)),"function"===typeof t){var f;if(r(t.cid)&&(f=t,t=de(f,s),void 0===t))return ve(f,n,e,u,a);n=n||{},hr(t),i(n.model)&&ee(t.options,n);var l=gn(n,t,a,e);if(o(t.options.functional))return Jn(t,l,n,e,u);var p=n.on;if(n.on=n.nativeOn,o(t.options.abstract)){var h=n.slot;n={},h&&(n.slot=h)}te(n);var v=t.options.name||a,d=new vt("vue-component-"+t.cid+(v?"-"+v:""),n,void 0,void 0,void 0,e,{Ctor:t,propsData:l,listeners:p,tag:a,children:u},f);return d}}}function Xn(t,n){var e={_isComponent:!0,_parentVnode:t,parent:n},r=t.data.inlineTemplate;return i(r)&&(e.render=r.render,e.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(e)}function te(t){for(var n=t.hook||(t.hook={}),e=0;e<Qn.length;e++){var r=Qn[e],i=n[r],o=Zn[r];i===o||i&&i._merged||(n[r]=i?ne(o,i):o)}}function ne(t,n){var e=function(e,r){t(e,r),n(e,r)};return e._merged=!0,e}function ee(t,n){var e=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(n.attrs||(n.attrs={}))[e]=n.model.value;var o=n.on||(n.on={}),u=o[r],a=n.model.callback;i(u)?(Array.isArray(u)?-1===u.indexOf(a):u!==a)&&(o[r]=[a].concat(u)):o[r]=a}var re=1,ie=2;function oe(t,n,e,r,i,u){return(Array.isArray(e)||a(e))&&(i=r,r=e,e=void 0),o(u)&&(i=ie),ue(t,n,e,r,i)}function ue(t,n,e,r,o){if(i(e)&&i(e.__ob__))return _t();if(i(e)&&i(e.is)&&(n=e.is),!n)return _t();var u,a,c;(Array.isArray(r)&&"function"===typeof r[0]&&(e=e||{},e.scopedSlots={default:r[0]},r.length=0),o===ie?r=bn(r):o===re&&(r=mn(r)),"string"===typeof n)?(a=t.$vnode&&t.$vnode.ns||q.getTagNamespace(n),u=q.isReservedTag(n)?new vt(q.parsePlatformTagName(n),e,r,void 0,void 0,t):e&&e.pre||!i(c=Ft(t.$options,"components",n))?new vt(n,e,r,void 0,void 0,t):Yn(c,e,t,r,n)):u=Yn(n,e,t,r);return Array.isArray(u)?u:i(u)?(i(a)&&ae(u,a),i(e)&&ce(e),u):_t()}function ae(t,n,e){if(t.ns=n,"foreignObject"===t.tag&&(n=void 0,e=!0),i(t.children))for(var u=0,a=t.children.length;u<a;u++){var c=t.children[u];i(c.tag)&&(r(c.ns)||o(e)&&"svg"!==c.tag)&&ae(c,n,e)}}function ce(t){c(t.style)&&ln(t.style),c(t.class)&&ln(t.class)}function se(t){t._vnode=null,t._staticTrees=null;var n=t.$options,r=t.$vnode=n._parentVnode,i=r&&r.context;t.$slots=kn(n._renderChildren,i),t.$scopedSlots=e,t._c=function(n,e,r,i){return oe(t,n,e,r,i,!1)},t.$createElement=function(n,e,r,i){return oe(t,n,e,r,i,!0)};var o=r&&r.data;Et(t,"$attrs",o&&o.attrs||e,null,!0),Et(t,"$listeners",n._parentListeners||e,null,!0)}var fe,le=null;function pe(t){Wn(t.prototype),t.prototype.$nextTick=function(t){return sn(t,this)},t.prototype._render=function(){var t,n=this,e=n.$options,r=e.render,i=e._parentVnode;i&&(n.$scopedSlots=Sn(i.data.scopedSlots,n.$slots,n.$scopedSlots)),n.$vnode=i;try{le=n,t=r.call(n._renderProxy,n.$createElement)}catch(ei){Zt(ei,n,"render"),t=n._vnode}finally{le=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof vt||(t=_t()),t.parent=i,t}}function he(t,n){return(t.__esModule||ct&&"Module"===t[Symbol.toStringTag])&&(t=t.default),c(t)?n.extend(t):t}function ve(t,n,e,r,i){var o=_t();return o.asyncFactory=t,o.asyncMeta={data:n,context:e,children:r,tag:i},o}function de(t,n){if(o(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var e=le;if(e&&i(t.owners)&&-1===t.owners.indexOf(e)&&t.owners.push(e),o(t.loading)&&i(t.loadingComp))return t.loadingComp;if(e&&!i(t.owners)){var u=t.owners=[e],a=!0,s=null,f=null;e.$on("hook:destroyed",function(){return y(u,e)});var l=function(t){for(var n=0,e=u.length;n<e;n++)u[n].$forceUpdate();t&&(u.length=0,null!==s&&(clearTimeout(s),s=null),null!==f&&(clearTimeout(f),f=null))},p=B(function(e){t.resolved=he(e,n),a?u.length=0:l(!0)}),v=B(function(n){i(t.errorComp)&&(t.error=!0,l(!0))}),d=t(p,v);return c(d)&&(h(d)?r(t.resolved)&&d.then(p,v):h(d.component)&&(d.component.then(p,v),i(d.error)&&(t.errorComp=he(d.error,n)),i(d.loading)&&(t.loadingComp=he(d.loading,n),0===d.delay?t.loading=!0:s=setTimeout(function(){s=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,l(!1))},d.delay||200)),i(d.timeout)&&(f=setTimeout(function(){f=null,r(t.resolved)&&v(null)},d.timeout)))),a=!1,t.loading?t.loadingComp:t.resolved}}function _e(t){return t.isComment&&t.asyncFactory}function ge(t){if(Array.isArray(t))for(var n=0;n<t.length;n++){var e=t[n];if(i(e)&&(i(e.componentOptions)||_e(e)))return e}}function ye(t){t._events=Object.create(null),t._hasHookEvent=!1;var n=t.$options._parentListeners;n&&$e(t,n)}function me(t,n){fe.$on(t,n)}function be(t,n){fe.$off(t,n)}function we(t,n){var e=fe;return function r(){var i=n.apply(null,arguments);null!==i&&e.$off(t,r)}}function $e(t,n,e){fe=t,dn(n,e||{},me,be,we,t),fe=void 0}function Oe(t){var n=/^hook:/;t.prototype.$on=function(t,e){var r=this;if(Array.isArray(t))for(var i=0,o=t.length;i<o;i++)r.$on(t[i],e);else(r._events[t]||(r._events[t]=[])).push(e),n.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,n){var e=this;function r(){e.$off(t,r),n.apply(e,arguments)}return r.fn=n,e.$on(t,r),e},t.prototype.$off=function(t,n){var e=this;if(!arguments.length)return e._events=Object.create(null),e;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)e.$off(t[r],n);return e}var o,u=e._events[t];if(!u)return e;if(!n)return e._events[t]=null,e;var a=u.length;while(a--)if(o=u[a],o===n||o.fn===n){u.splice(a,1);break}return e},t.prototype.$emit=function(t){var n=this,e=n._events[t];if(e){e=e.length>1?D(e):e;for(var r=D(arguments,1),i='event handler for "'+t+'"',o=0,u=e.length;o<u;o++)Qt(e[o],n,r,n,i)}return n}}var Ae=null;function je(t){var n=Ae;return Ae=t,function(){Ae=n}}function ke(t){var n=t.$options,e=n.parent;if(e&&!n.abstract){while(e.$options.abstract&&e.$parent)e=e.$parent;e.$children.push(t)}t.$parent=e,t.$root=e?e.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function xe(t){t.prototype._update=function(t,n){var e=this,r=e.$el,i=e._vnode,o=je(e);e._vnode=t,e.$el=i?e.__patch__(i,t):e.__patch__(e.$el,t,n,!1),o(),r&&(r.__vue__=null),e.$el&&(e.$el.__vue__=e),e.$vnode&&e.$parent&&e.$vnode===e.$parent._vnode&&(e.$parent.$el=e.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Pe(t,"beforeDestroy"),t._isBeingDestroyed=!0;var n=t.$parent;!n||n._isBeingDestroyed||t.$options.abstract||y(n.$children,t),t._watcher&&t._watcher.teardown();var e=t._watchers.length;while(e--)t._watchers[e].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Pe(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Se(t,n,r,i,o){var u=i.data.scopedSlots,a=t.$scopedSlots,c=!!(u&&!u.$stable||a!==e&&!a.$stable||u&&t.$scopedSlots.$key!==u.$key),s=!!(o||t.$options._renderChildren||c);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=o,t.$attrs=i.data.attrs||e,t.$listeners=r||e,n&&t.$options.props){At(!1);for(var f=t._props,l=t.$options._propKeys||[],p=0;p<l.length;p++){var h=l[p],v=t.$options.props;f[h]=Wt(h,v,n,t)}At(!0),t.$options.propsData=n}t._$updateProperties&&t._$updateProperties(t),r=r||e;var d=t.$options._parentListeners;t.$options._parentListeners=r,$e(t,r,d),s&&(t.$slots=kn(o,i.context),t.$forceUpdate())}function Ee(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function De(t,n){if(n){if(t._directInactive=!1,Ee(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var e=0;e<t.$children.length;e++)De(t.$children[e]);Pe(t,"activated")}}function Ie(t,n){if((!n||(t._directInactive=!0,!Ee(t)))&&!t._inactive){t._inactive=!0;for(var e=0;e<t.$children.length;e++)Ie(t.$children[e]);Pe(t,"deactivated")}}function Pe(t,n){pt();var e=t.$options[n],r=n+" hook";if(e)for(var i=0,o=e.length;i<o;i++)Qt(e[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+n),ht()}var Te=[],Ce=[],Re={},Ne=!1,Ue=!1,Be=0;function Me(){Be=Te.length=Ce.length=0,Re={},Ne=Ue=!1}var Le=Date.now;if(K&&!X){var qe=window.performance;qe&&"function"===typeof qe.now&&Le()>document.createEvent("Event").timeStamp&&(Le=function(){return qe.now()})}function Ve(){var t,n;for(Le(),Ue=!0,Te.sort(function(t,n){return t.id-n.id}),Be=0;Be<Te.length;Be++)t=Te[Be],t.before&&t.before(),n=t.id,Re[n]=null,t.run();var e=Ce.slice(),r=Te.slice();Me(),We(e),ze(r),ot&&q.devtools&&ot.emit("flush")}function ze(t){var n=t.length;while(n--){var e=t[n],r=e.vm;r._watcher===e&&r._isMounted&&!r._isDestroyed&&Pe(r,"updated")}}function Fe(t){t._inactive=!1,Ce.push(t)}function We(t){for(var n=0;n<t.length;n++)t[n]._inactive=!0,De(t[n],!0)}function He(t){var n=t.id;if(null==Re[n]){if(Re[n]=!0,Ue){var e=Te.length-1;while(e>Be&&Te[e].id>t.id)e--;Te.splice(e+1,0,t)}else Te.push(t);Ne||(Ne=!0,sn(Ve))}}var Je=0,Ge=function(t,n,e,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=e,this.id=++Je,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new at,this.newDepIds=new at,this.expression="","function"===typeof n?this.getter=n:(this.getter=H(n),this.getter||(this.getter=T)),this.value=this.lazy?void 0:this.get()};Ge.prototype.get=function(){var t;pt(this);var n=this.vm;try{t=this.getter.call(n,n)}catch(ei){if(!this.user)throw ei;Zt(ei,n,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ln(t),ht(),this.cleanupDeps()}return t},Ge.prototype.addDep=function(t){var n=t.id;this.newDepIds.has(n)||(this.newDepIds.add(n),this.newDeps.push(t),this.depIds.has(n)||t.addSub(this))},Ge.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var n=this.deps[t];this.newDepIds.has(n.id)||n.removeSub(this)}var e=this.depIds;this.depIds=this.newDepIds,this.newDepIds=e,this.newDepIds.clear(),e=this.deps,this.deps=this.newDeps,this.newDeps=e,this.newDeps.length=0},Ge.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():He(this)},Ge.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||c(t)||this.deep){var n=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,n)}catch(ei){Zt(ei,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,n)}}},Ge.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ge.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Ge.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Ke={enumerable:!0,configurable:!0,get:T,set:T};function Ze(t,n,e){Ke.get=function(){return this[n][e]},Ke.set=function(t){this[n][e]=t},Object.defineProperty(t,e,Ke)}function Qe(t){t._watchers=[];var n=t.$options;n.props&&Ye(t,n.props),n.methods&&ur(t,n.methods),n.data?Xe(t):St(t._data={},!0),n.computed&&er(t,n.computed),n.watch&&n.watch!==et&&ar(t,n.watch)}function Ye(t,n){var e=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;o||At(!1);var u=function(o){i.push(o);var u=Wt(o,n,e,t);Et(r,o,u),o in t||Ze(t,"_props",o)};for(var a in n)u(a);At(!0)}function Xe(t){var n=t.$options.data;n=t._data="function"===typeof n?tr(n,t):n||{},f(n)||(n={});var e=Object.keys(n),r=t.$options.props,i=(t.$options.methods,e.length);while(i--){var o=e[i];0,r&&b(r,o)||z(o)||Ze(t,"_data",o)}St(n,!0)}function tr(t,n){pt();try{return t.call(n,n)}catch(ei){return Zt(ei,n,"data()"),{}}finally{ht()}}var nr={lazy:!0};function er(t,n){var e=t._computedWatchers=Object.create(null),r=it();for(var i in n){var o=n[i],u="function"===typeof o?o:o.get;0,r||(e[i]=new Ge(t,u||T,T,nr)),i in t||rr(t,i,o)}}function rr(t,n,e){var r=!it();"function"===typeof e?(Ke.get=r?ir(n):or(e),Ke.set=T):(Ke.get=e.get?r&&!1!==e.cache?ir(n):or(e.get):T,Ke.set=e.set||T),Object.defineProperty(t,n,Ke)}function ir(t){return function(){var n=this._computedWatchers&&this._computedWatchers[t];if(n)return n.dirty&&n.evaluate(),lt.SharedObject.target&&n.depend(),n.value}}function or(t){return function(){return t.call(this,this)}}function ur(t,n){t.$options.props;for(var e in n)t[e]="function"!==typeof n[e]?T:E(n[e],t)}function ar(t,n){for(var e in n){var r=n[e];if(Array.isArray(r))for(var i=0;i<r.length;i++)cr(t,e,r[i]);else cr(t,e,r)}}function cr(t,n,e,r){return f(e)&&(r=e,e=e.handler),"string"===typeof e&&(e=t[e]),t.$watch(n,e,r)}function sr(t){var n={get:function(){return this._data}},e={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",n),Object.defineProperty(t.prototype,"$props",e),t.prototype.$set=Dt,t.prototype.$delete=It,t.prototype.$watch=function(t,n,e){var r=this;if(f(n))return cr(r,t,n,e);e=e||{},e.user=!0;var i=new Ge(r,t,n,e);if(e.immediate)try{n.call(r,i.value)}catch(o){Zt(o,r,'callback for immediate watcher "'+i.expression+'"')}return function(){i.teardown()}}}var fr=0;function lr(t){t.prototype._init=function(t){var n=this;n._uid=fr++,n._isVue=!0,t&&t._isComponent?pr(n,t):n.$options=zt(hr(n.constructor),t||{},n),n._renderProxy=n,n._self=n,ke(n),ye(n),se(n),Pe(n,"beforeCreate"),"mp-toutiao"!==n.mpHost&&An(n),Qe(n),"mp-toutiao"!==n.mpHost&&On(n),"mp-toutiao"!==n.mpHost&&Pe(n,"created"),n.$options.el&&n.$mount(n.$options.el)}}function pr(t,n){var e=t.$options=Object.create(t.constructor.options),r=n._parentVnode;e.parent=n.parent,e._parentVnode=r;var i=r.componentOptions;e.propsData=i.propsData,e._parentListeners=i.listeners,e._renderChildren=i.children,e._componentTag=i.tag,n.render&&(e.render=n.render,e.staticRenderFns=n.staticRenderFns)}function hr(t){var n=t.options;if(t.super){var e=hr(t.super),r=t.superOptions;if(e!==r){t.superOptions=e;var i=vr(t);i&&I(t.extendOptions,i),n=t.options=zt(e,t.extendOptions),n.name&&(n.components[n.name]=t)}}return n}function vr(t){var n,e=t.options,r=t.sealedOptions;for(var i in e)e[i]!==r[i]&&(n||(n={}),n[i]=e[i]);return n}function dr(t){this._init(t)}function _r(t){t.use=function(t){var n=this._installedPlugins||(this._installedPlugins=[]);if(n.indexOf(t)>-1)return this;var e=D(arguments,1);return e.unshift(this),"function"===typeof t.install?t.install.apply(t,e):"function"===typeof t&&t.apply(null,e),n.push(t),this}}function gr(t){t.mixin=function(t){return this.options=zt(this.options,t),this}}function yr(t){t.cid=0;var n=1;t.extend=function(t){t=t||{};var e=this,r=e.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||e.options.name;var u=function(t){this._init(t)};return u.prototype=Object.create(e.prototype),u.prototype.constructor=u,u.cid=n++,u.options=zt(e.options,t),u["super"]=e,u.options.props&&mr(u),u.options.computed&&br(u),u.extend=e.extend,u.mixin=e.mixin,u.use=e.use,M.forEach(function(t){u[t]=e[t]}),o&&(u.options.components[o]=u),u.superOptions=e.options,u.extendOptions=t,u.sealedOptions=I({},u.options),i[r]=u,u}}function mr(t){var n=t.options.props;for(var e in n)Ze(t.prototype,"_props",e)}function br(t){var n=t.options.computed;for(var e in n)rr(t.prototype,e,n[e])}function wr(t){M.forEach(function(n){t[n]=function(t,e){return e?("component"===n&&f(e)&&(e.name=e.name||t,e=this.options._base.extend(e)),"directive"===n&&"function"===typeof e&&(e={bind:e,update:e}),this.options[n+"s"][t]=e,e):this.options[n+"s"][t]}})}function $r(t){return t&&(t.Ctor.options.name||t.tag)}function Or(t,n){return Array.isArray(t)?t.indexOf(n)>-1:"string"===typeof t?t.split(",").indexOf(n)>-1:!!l(t)&&t.test(n)}function Ar(t,n){var e=t.cache,r=t.keys,i=t._vnode;for(var o in e){var u=e[o];if(u){var a=$r(u.componentOptions);a&&!n(a)&&jr(e,o,r,i)}}}function jr(t,n,e,r){var i=t[n];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[n]=null,y(e,n)}lr(dr),sr(dr),Oe(dr),xe(dr),pe(dr);var kr=[String,RegExp,Array],xr={name:"keep-alive",abstract:!0,props:{include:kr,exclude:kr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)jr(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(n){Ar(t,function(t){return Or(n,t)})}),this.$watch("exclude",function(n){Ar(t,function(t){return!Or(n,t)})})},render:function(){var t=this.$slots.default,n=ge(t),e=n&&n.componentOptions;if(e){var r=$r(e),i=this,o=i.include,u=i.exclude;if(o&&(!r||!Or(o,r))||u&&r&&Or(u,r))return n;var a=this,c=a.cache,s=a.keys,f=null==n.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):n.key;c[f]?(n.componentInstance=c[f].componentInstance,y(s,f),s.push(f)):(c[f]=n,s.push(f),this.max&&s.length>parseInt(this.max)&&jr(c,s[0],s,this._vnode)),n.data.keepAlive=!0}return n||t&&t[0]}},Sr={KeepAlive:xr};function Er(t){var n={get:function(){return q}};Object.defineProperty(t,"config",n),t.util={warn:st,extend:I,mergeOptions:zt,defineReactive:Et},t.set=Dt,t.delete=It,t.nextTick=sn,t.observable=function(t){return St(t),t},t.options=Object.create(null),M.forEach(function(n){t.options[n+"s"]=Object.create(null)}),t.options._base=t,I(t.options.components,Sr),_r(t),gr(t),yr(t),wr(t)}Er(dr),Object.defineProperty(dr.prototype,"$isServer",{get:it}),Object.defineProperty(dr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(dr,"FunctionalRenderContext",{value:Hn}),dr.version="2.6.11";var Dr="[object Array]",Ir="[object Object]";function Pr(t,n){var e={};return Tr(t,n),Cr(t,n,"",e),e}function Tr(t,n){if(t!==n){var e=Nr(t),r=Nr(n);if(e==Ir&&r==Ir){if(Object.keys(t).length>=Object.keys(n).length)for(var i in n){var o=t[i];void 0===o?t[i]=null:Tr(o,n[i])}}else e==Dr&&r==Dr&&t.length>=n.length&&n.forEach(function(n,e){Tr(t[e],n)})}}function Cr(t,n,e,r){if(t!==n){var i=Nr(t),o=Nr(n);if(i==Ir)if(o!=Ir||Object.keys(t).length<Object.keys(n).length)Rr(r,e,t);else{var u=function(i){var o=t[i],u=n[i],a=Nr(o),c=Nr(u);if(a!=Dr&&a!=Ir)o!=n[i]&&Rr(r,(""==e?"":e+".")+i,o);else if(a==Dr)c!=Dr?Rr(r,(""==e?"":e+".")+i,o):o.length<u.length?Rr(r,(""==e?"":e+".")+i,o):o.forEach(function(t,n){Cr(t,u[n],(""==e?"":e+".")+i+"["+n+"]",r)});else if(a==Ir)if(c!=Ir||Object.keys(o).length<Object.keys(u).length)Rr(r,(""==e?"":e+".")+i,o);else for(var s in o)Cr(o[s],u[s],(""==e?"":e+".")+i+"."+s,r)};for(var a in t)u(a)}else i==Dr?o!=Dr?Rr(r,e,t):t.length<n.length?Rr(r,e,t):t.forEach(function(t,i){Cr(t,n[i],e+"["+i+"]",r)}):Rr(r,e,t)}}function Rr(t,n,e){t[n]=e}function Nr(t){return Object.prototype.toString.call(t)}function Ur(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var e=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<e.length;r++)e[r]()}}function Br(t){return Te.find(function(n){return t._watcher===n})}function Mr(t,n){if(!t.__next_tick_pending&&!Br(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:nextVueTick")}return sn(n,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var i;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(n)try{n.call(t)}catch(ei){Zt(ei,t,"nextTick")}else i&&i(t)}),!n&&"undefined"!==typeof Promise)return new Promise(function(t){i=t})}function Lr(t){var n=Object.create(null),e=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return e.reduce(function(n,e){return n[e]=t[e],n},n),Object.assign(n,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(n["name"]=t.name,n["value"]=t.value),JSON.parse(JSON.stringify(n))}var qr=function(t,n){var e=this;if(null!==n&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,i=Object.create(null);try{i=Lr(this)}catch(a){console.error(a)}i.__webviewId__=r.data.__webviewId__;var o=Object.create(null);Object.keys(i).forEach(function(t){o[t]=r.data[t]});var u=Pr(i,o);Object.keys(u).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(u)),this.__next_tick_pending=!0,r.setData(u,function(){e.__next_tick_pending=!1,Ur(e)})):Ur(this)}};function Vr(){}function zr(t,n,e){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Vr),t.$options.render||(t.$options.render=Vr),"mp-toutiao"!==t.mpHost&&Pe(t,"beforeMount");var r=function(){t._update(t._render(),e)};return new Ge(t,r,T,{before:function(){t._isMounted&&!t._isDestroyed&&Pe(t,"beforeUpdate")}},!0),e=!1,t}function Fr(t,n){return i(t)||i(n)?Wr(t,Hr(n)):""}function Wr(t,n){return t?n?t+" "+n:t:n||""}function Hr(t){return Array.isArray(t)?Jr(t):c(t)?Gr(t):"string"===typeof t?t:""}function Jr(t){for(var n,e="",r=0,o=t.length;r<o;r++)i(n=Hr(t[r]))&&""!==n&&(e&&(e+=" "),e+=n);return e}function Gr(t){var n="";for(var e in t)t[e]&&(n&&(n+=" "),n+=e);return n}var Kr=w(function(t){var n={},e=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(e).forEach(function(t){if(t){var e=t.split(r);e.length>1&&(n[e[0].trim()]=e[1].trim())}}),n});function Zr(t){return Array.isArray(t)?P(t):"string"===typeof t?Kr(t):t}var Qr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yr(t,n){var e=n.split("."),r=e[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===e.length?t[r]:Yr(t[r],e.slice(1).join("."))}function Xr(t){t.config.errorHandler=function(t){var n=getApp();n&&n.onError?n.onError(t):console.error(t)};var n=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:D(arguments,1)}),n.apply(this,arguments)},t.prototype.$nextTick=function(t){return Mr(this,t)},Qr.forEach(function(n){t.prototype[n]=function(t){return this.$scope&&this.$scope[n]?this.$scope[n](t):"undefined"!==typeof my?"createSelectorQuery"===n?my.createSelectorQuery(t):"createIntersectionObserver"===n?my.createIntersectionObserver(t):void 0:void 0}}),t.prototype.__init_provide=On,t.prototype.__init_injections=An,t.prototype.__call_hook=function(t,n){var e=this;pt();var r,i=e.$options[t],o=t+" hook";if(i)for(var u=0,a=i.length;u<a;u++)r=Qt(i[u],e,n?[n]:null,e,o);return e._hasHookEvent&&e.$emit("hook:"+t,n),ht(),r},t.prototype.__set_model=function(t,n,e,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(e=e.trim()),-1!==r.indexOf("number")&&(e=this._n(e))),t||(t=this),t[n]=e},t.prototype.__set_sync=function(t,n,e){t||(t=this),t[n]=e},t.prototype.__get_orig=function(t){return f(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,n){return Yr(n||this,t)},t.prototype.__get_class=function(t,n){return Fr(n,t)},t.prototype.__get_style=function(t,n){if(!t&&!n)return"";var e=Zr(t),r=n?I(n,e):e;return Object.keys(r).map(function(t){return k(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,n){var e,r,i,o,u;if(Array.isArray(t)){for(e=new Array(t.length),r=0,i=t.length;r<i;r++)e[r]=n(t[r],r);return e}if(c(t)){for(o=Object.keys(t),e=Object.create(null),r=0,i=o.length;r<i;r++)u=o[r],e[u]=n(t[u],u,r);return e}return[]}}var ti=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function ni(t){var n=t.extend;t.extend=function(t){t=t||{};var e=t.methods;return e&&Object.keys(e).forEach(function(n){-1!==ti.indexOf(n)&&(t[n]=e[n],delete e[n])}),n.call(this,t)};var e=t.config.optionMergeStrategies,r=e.created;ti.forEach(function(t){e[t]=r}),t.prototype.__lifecycle_hooks__=ti}dr.prototype.__patch__=qr,dr.prototype.$mount=function(t,n){return zr(this,t,n)},ni(dr),Xr(dr),n["default"]=dr}.call(this,e("c8ba"))},"6e42":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.createApp=dn,n.createComponent=jn,n.createPage=An,n.default=void 0;var r=i(e("66fd"));function i(t){return t&&t.__esModule?t:{default:t}}function o(t,n){return c(t)||a(t,n)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(t,n){var e=[],r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done);r=!0)if(e.push(u.value),n&&e.length===n)break}catch(c){i=!0,o=c}finally{try{r||null==a["return"]||a["return"]()}finally{if(i)throw o}}return e}function c(t){if(Array.isArray(t))return t}function s(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function f(t){return h(t)||p(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}var v=Object.prototype.toString,d=Object.prototype.hasOwnProperty;function _(t){return"function"===typeof t}function g(t){return"string"===typeof t}function y(t){return"[object Object]"===v.call(t)}function m(t,n){return d.call(t,n)}function b(){}function w(t){var n=Object.create(null);return function(e){var r=n[e];return r||(n[e]=t(e))}}var $=/-(\w)/g,O=w(function(t){return t.replace($,function(t,n){return n?n.toUpperCase():""})}),A=["invoke","success","fail","complete","returnValue"],j={},k={};function x(t,n){var e=n?t?t.concat(n):Array.isArray(n)?n:[n]:t;return e?S(e):e}function S(t){for(var n=[],e=0;e<t.length;e++)-1===n.indexOf(t[e])&&n.push(t[e]);return n}function E(t,n){var e=t.indexOf(n);-1!==e&&t.splice(e,1)}function D(t,n){Object.keys(n).forEach(function(e){-1!==A.indexOf(e)&&_(n[e])&&(t[e]=x(t[e],n[e]))})}function I(t,n){t&&n&&Object.keys(n).forEach(function(e){-1!==A.indexOf(e)&&_(n[e])&&E(t[e],n[e])})}function P(t,n){"string"===typeof t&&y(n)?D(k[t]||(k[t]={}),n):y(t)&&D(j,t)}function T(t,n){"string"===typeof t?y(n)?I(k[t],n):delete k[t]:y(t)&&I(j,t)}function C(t){return function(n){return t(n)||n}}function R(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function N(t,n){for(var e=!1,r=0;r<t.length;r++){var i=t[r];if(e)e=Promise.then(C(i));else{var o=i(n);if(R(o)&&(e=Promise.resolve(o)),!1===o)return{then:function(){}}}}return e||{then:function(t){return t(n)}}}function U(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(e){if(Array.isArray(t[e])){var r=n[e];n[e]=function(n){N(t[e],n).then(function(t){return _(r)&&r(t)||t})}}}),n}function B(t,n){var e=[];Array.isArray(j.returnValue)&&e.push.apply(e,f(j.returnValue));var r=k[t];return r&&Array.isArray(r.returnValue)&&e.push.apply(e,f(r.returnValue)),e.forEach(function(t){n=t(n)||n}),n}function M(t){var n=Object.create(null);Object.keys(j).forEach(function(t){"returnValue"!==t&&(n[t]=j[t].slice())});var e=k[t];return e&&Object.keys(e).forEach(function(t){"returnValue"!==t&&(n[t]=(n[t]||[]).concat(e[t]))}),n}function L(t,n,e){for(var r=arguments.length,i=new Array(r>3?r-3:0),o=3;o<r;o++)i[o-3]=arguments[o];var u=M(t);if(u&&Object.keys(u).length){if(Array.isArray(u.invoke)){var a=N(u.invoke,e);return a.then(function(t){return n.apply(void 0,[U(u,t)].concat(i))})}return n.apply(void 0,[U(u,e)].concat(i))}return n.apply(void 0,[e].concat(i))}var q={returnValue:function(t){return R(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},V=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,z=/^create|Manager$/,F=/^on/;function W(t){return z.test(t)}function H(t){return V.test(t)}function J(t){return F.test(t)&&"onPush"!==t}function G(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function K(t){return!(W(t)||H(t)||J(t))}function Z(t,n){return K(t)?function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return _(e.success)||_(e.fail)||_(e.complete)?B(t,L.apply(void 0,[t,n,e].concat(i))):B(t,G(new Promise(function(r,o){L.apply(void 0,[t,n,Object.assign({},e,{success:r,fail:o})].concat(i)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var n=this.constructor;return this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})})})})))}:n}var Q=1e-4,Y=750,X=!1,tt=0,nt=0;function et(){var t=wx.getSystemInfoSync(),n=t.platform,e=t.pixelRatio,r=t.windowWidth;tt=r,nt=e,X="ios"===n}function rt(t,n){if(0===tt&&et(),t=Number(t),0===t)return 0;var e=t/Y*(n||tt);return e<0&&(e=-e),e=Math.floor(e+Q),0===e?1!==nt&&X?.5:1:t<0?-e:e}var it={promiseInterceptor:q},ot=Object.freeze({__proto__:null,upx2px:rt,interceptors:it,addInterceptor:P,removeInterceptor:T}),ut={},at=[],ct=[],st=["success","fail","cancel","complete"];function ft(t,n,e){return function(r){return n(pt(t,r,e))}}function lt(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(y(n)){var o=!0===i?n:{};for(var u in _(e)&&(e=e(n,o)||{}),n)if(m(e,u)){var a=e[u];_(a)&&(a=a(n[u],n,o)),a?g(a)?o[a]=n[u]:y(a)&&(o[a.name?a.name:u]=a.value):console.warn("app-plus ".concat(t,"暂不支持").concat(u))}else-1!==st.indexOf(u)?o[u]=ft(t,n[u],r):i||(o[u]=n[u]);return o}return _(n)&&(n=ft(t,n,r)),n}function pt(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return _(ut.returnValue)&&(n=ut.returnValue(t,n)),lt(t,n,e,{},r)}function ht(t,n){if(m(ut,t)){var e=ut[t];return e?function(n,r){var i=e;_(e)&&(i=e(n)),n=lt(t,n,i.args,i.returnValue);var o=[n];"undefined"!==typeof r&&o.push(r);var u=wx[i.name||t].apply(wx,o);return H(t)?pt(t,u,i.returnValue,W(t)):u}:function(){console.error("app-plus 暂不支持".concat(t))}}return n}var vt=Object.create(null),dt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function _t(t){return function(n){var e=n.fail,r=n.complete,i={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};_(e)&&e(i),_(r)&&r(i)}}dt.forEach(function(t){vt[t]=_t(t)});var gt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function yt(t,n,e){return t[n].apply(t,e)}function mt(){return yt(gt(),"$on",Array.prototype.slice.call(arguments))}function bt(){return yt(gt(),"$off",Array.prototype.slice.call(arguments))}function wt(){return yt(gt(),"$once",Array.prototype.slice.call(arguments))}function $t(){return yt(gt(),"$emit",Array.prototype.slice.call(arguments))}var Ot=Object.freeze({__proto__:null,$on:mt,$off:bt,$once:wt,$emit:$t});function At(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function jt(t){t.$processed=!0,t.postMessage=function(n){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:n},t.id)};var n=[];if(t.onMessage=function(t){n.push(t)},t.$consumeMessage=function(t){n.forEach(function(n){return n(t)})},t.__uniapp_mask_id){var e=t.__uniapp_mask,r="0"===t.__uniapp_mask_id?{setStyle:function(t){var n=t.mask;At("uni-tabview").setMask({color:n})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),i=t.show,o=t.hide,u=t.close,a=function(){r.setStyle({mask:e})},c=function(){r.setStyle({mask:"none"})};t.show=function(){a();for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return i.apply(t,e)},t.hide=function(){c();for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return o.apply(t,e)},t.close=function(){c(),n=[];for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return u.apply(t,r)}}}function kt(t){var n=plus.webview.getWebviewById(t);return n&&!n.$processed&&jt(n),n}var xt=Object.freeze({__proto__:null,getSubNVueById:kt,requireNativePlugin:At}),St=Page,Et=Component,Dt=/:/g,It=w(function(t){return O(t.replace(Dt,"-"))});function Pt(t){if(wx.canIUse("nextTick")){var n=t.triggerEvent;t.triggerEvent=function(e){for(var r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++)i[o-1]=arguments[o];return n.apply(t,[It(e)].concat(i))}}}function Tt(t,n){var e=n[t];n[t]=e?function(){Pt(this);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(this,n)}:function(){Pt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Tt("onLoad",t),St(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Tt("created",t),Et(t)};var Ct=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Rt(t,n){var e=t.$mp[t.mpType];n.forEach(function(n){m(e,n)&&(t[n]=e[n])})}function Nt(t,n){if(!n)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(n=n.default||n,_(n))return!!_(n.extendOptions[t])||!!(n.super&&n.super.options&&Array.isArray(n.super.options[t]));if(_(n[t]))return!0;var e=n.mixins;return Array.isArray(e)?!!e.find(function(n){return Nt(t,n)}):void 0}function Ut(t,n,e){n.forEach(function(n){Nt(n,e)&&(t[n]=function(t){return this.$vm&&this.$vm.__call_hook(n,t)})})}function Bt(t,n){var e;return n=n.default||n,_(n)?(e=n,n=e.extendOptions):e=t.extend(n),[e,n]}function Mt(t,n){if(Array.isArray(n)&&n.length){var e=Object.create(null);n.forEach(function(t){e[t]=!0}),t.$scopedSlots=t.$slots=e}}function Lt(t,n){t=(t||"").split(",");var e=t.length;1===e?n._$vueId=t[0]:2===e&&(n._$vueId=t[0],n._$vuePid=t[1])}function qt(t,n){var e=t.data||{},r=t.methods||{};if("function"===typeof e)try{e=e.call(n)}catch(i){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",e)}else try{e=JSON.parse(JSON.stringify(e))}catch(i){}return y(e)||(e={}),Object.keys(r).forEach(function(t){-1!==n.__lifecycle_hooks__.indexOf(t)||m(e,t)||(e[t]=r[t])}),e}var Vt=[String,Number,Boolean,Object,Array,null];function zt(t){return function(n,e){this.$vm&&(this.$vm[t]=n)}}function Ft(t,n){var e=t["behaviors"],r=t["extends"],i=t["mixins"],o=t["props"];o||(t["props"]=o=[]);var u=[];return Array.isArray(e)&&e.forEach(function(t){u.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(o)?(o.push("name"),o.push("value")):(o["name"]={type:String,default:""},o["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),y(r)&&r.props&&u.push(n({properties:Ht(r.props,!0)})),Array.isArray(i)&&i.forEach(function(t){y(t)&&t.props&&u.push(n({properties:Ht(t.props,!0)}))}),u}function Wt(t,n,e,r){return Array.isArray(n)&&1===n.length?n[0]:n}function Ht(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return n||(e.vueId={type:String,value:""},e.vueSlots={type:null,value:[],observer:function(t,n){var e=Object.create(null);t.forEach(function(t){e[t]=!0}),this.setData({$slots:e})}}),Array.isArray(t)?t.forEach(function(t){e[t]={type:null,observer:zt(t)}}):y(t)&&Object.keys(t).forEach(function(n){var r=t[n];if(y(r)){var i=r["default"];_(i)&&(i=i()),r.type=Wt(n,r.type),e[n]={type:-1!==Vt.indexOf(r.type)?r.type:null,value:i,observer:zt(n)}}else{var o=Wt(n,r);e[n]={type:-1!==Vt.indexOf(o)?o:null,observer:zt(n)}}}),e}function Jt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(n){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},m(t,"detail")||(t.detail={}),y(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Gt(t,n){var e=t;return n.forEach(function(n){var r=n[0],i=n[2];if(r||"undefined"!==typeof i){var o=n[1],u=n[3],a=r?t.__get_value(r,e):e;Number.isInteger(a)?e=i:o?Array.isArray(a)?e=a.find(function(n){return t.__get_value(o,n)===i}):y(a)?e=Object.keys(a).find(function(n){return t.__get_value(o,a[n])===i}):console.error("v-for 暂不支持循环数据：",a):e=a[i],u&&(e=t.__get_value(u,e))}}),e}function Kt(t,n,e){var r={};return Array.isArray(n)&&n.length&&n.forEach(function(n,i){"string"===typeof n?n?"$event"===n?r["$"+i]=e:0===n.indexOf("$event.")?r["$"+i]=t.__get_value(n.replace("$event.",""),e):r["$"+i]=t.__get_value(n):r["$"+i]=t:r["$"+i]=Gt(t,n)}),r}function Zt(t){for(var n={},e=1;e<t.length;e++){var r=t[e];n[r[0]]=r[1]}return n}function Qt(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5?arguments[5]:void 0,u=!1;if(i&&(u=n.currentTarget&&n.currentTarget.dataset&&"wx"===n.currentTarget.dataset.comType,!e.length))return u?[n]:n.detail.__args__||n.detail;var a=Kt(t,r,n),c=[];return e.forEach(function(t){"$event"===t?"__set_model"!==o||i?i&&!u?c.push(n.detail.__args__[0]):c.push(n):c.push(n.target.value):Array.isArray(t)&&"o"===t[0]?c.push(Zt(t)):"string"===typeof t&&m(a,t)?c.push(a[t]):c.push(t)}),c}var Yt="~",Xt="^";function tn(t,n){return t===n||"regionchange"===n&&("begin"===t||"end"===t)}function nn(t){var n=this;t=Jt(t);var e=(t.currentTarget||t.target).dataset;if(!e)return console.warn("事件信息不存在");var r=e.eventOpts||e["event-opts"];if(!r)return console.warn("事件信息不存在");var i=t.type,o=[];return r.forEach(function(e){var r=e[0],u=e[1],a=r.charAt(0)===Xt;r=a?r.slice(1):r;var c=r.charAt(0)===Yt;r=c?r.slice(1):r,u&&tn(i,r)&&u.forEach(function(e){var r=e[0];if(r){var i=n.$vm;if(i.$options.generic&&i.$parent&&i.$parent.$parent&&(i=i.$parent.$parent),"$emit"===r)return void i.$emit.apply(i,Qt(n.$vm,t,e[1],e[2],a,r));var u=i[r];if(!_(u))throw new Error(" _vm.".concat(r," is not a function"));if(c){if(u.once)return;u.once=!0}o.push(u.apply(i,Qt(n.$vm,t,e[1],e[2],a,r)))}})}),"input"===i&&1===o.length&&"undefined"!==typeof o[0]?o[0]:void 0}var en=["onShow","onHide","onError","onPageNotFound"];function rn(t,n){var e=n.mocks,i=n.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=s({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(i(this),Rt(this,e)))}});var o={onLaunch:function(n){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",n),this.$vm.__call_hook("onLaunch",n))}};o.globalData=t.$options.globalData||{};var u=t.$options.methods;return u&&Object.keys(u).forEach(function(t){o[t]=u[t]}),Ut(o,en),o}var on=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function un(t,n){for(var e,r=t.$children,i=r.length-1;i>=0;i--){var o=r[i];if(o.$scope._$vueId===n)return o}for(var u=r.length-1;u>=0;u--)if(e=un(r[u],n),e)return e}function an(t){return Behavior(t)}function cn(){return!!this.route}function sn(t){this.triggerEvent("__l",t)}function fn(t){var n=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},e=n.selectAllComponents(".vue-ref");e.forEach(function(n){var e=n.dataset.ref;t[e]=n.$vm||n});var r=n.selectAllComponents(".vue-ref-in-for");return r.forEach(function(n){var e=n.dataset.ref;t[e]||(t[e]=[]),t[e].push(n.$vm||n)}),t}})}function ln(t){var n,e=t.detail||t.value,r=e.vuePid,i=e.vueOptions;r&&(n=un(this.$vm,r)),n||(n=this.$vm),i.parent=n}function pn(t){return rn(t,{mocks:on,initRefs:fn})}var hn=["onUniNViewMessage"];function vn(t){var n=pn(t);return Ut(n,hn),n}function dn(t){return App(vn(t)),t}function _n(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.isPage,i=n.initRelation,u=Bt(r.default,t),a=o(u,2),c=a[0],s=a[1],f={multipleSlots:!0,addGlobalClass:!0},l={options:f,data:qt(s,r.default.prototype),behaviors:Ft(s,an),properties:Ht(s.props,!1,s.__file),lifetimes:{attached:function(){var t=this.properties,n={mpType:e.call(this)?"page":"component",mpInstance:this,propsData:t};Lt(t.vueId,this),i.call(this,{vuePid:this._$vuePid,vueOptions:n}),this.$vm=new c(n),Mt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:ln,__e:nn}};return Array.isArray(s.wxsCallMethods)&&s.wxsCallMethods.forEach(function(t){l.methods[t]=function(n){return this.$vm[t](n)}}),e?l:[l,c]}function gn(t){return _n(t,{isPage:cn,initRelation:sn})}function yn(t){var n=gn(t);return n.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},n}var mn=["onShow","onHide","onUnload"];function bn(t,n){n.isPage,n.initRelation;var e=yn(t);return Ut(e.methods,mn,t),e.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},e}function wn(t){return bn(t,{isPage:cn,initRelation:sn})}mn.push.apply(mn,Ct);var $n=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function On(t){var n=wn(t);return Ut(n.methods,$n),n}function An(t){return Component(On(t))}function jn(t){return Component(yn(t))}at.forEach(function(t){ut[t]=!1}),ct.forEach(function(t){var n=ut[t]&&ut[t].name?ut[t].name:t;wx.canIUse(n)||(ut[t]=!1)});var kn={};Object.keys(ot).forEach(function(t){kn[t]=ot[t]}),Object.keys(Ot).forEach(function(t){kn[t]=Ot[t]}),Object.keys(xt).forEach(function(t){kn[t]=Z(t,xt[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(ut,t))&&(kn[t]=Z(t,ht(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=kn,t.UniEmitter=Ot),wx.createApp=dn,wx.createPage=An,wx.createComponent=jn;var xn=kn,Sn=xn;n.default=Sn}).call(this,e("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-25120200103005",_inBundle:!1,_integrity:"sha512-nYoIrRV2e5o/vzr6foSdWi3Rl2p0GuO+LPY3JctyY6uTKgPnuH99d7aL/QQdJ1SacQjBWO+QGK1qankN7oyrWw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25120200103005.tgz",_shasum:"a77a63481f36474f3e86686868051219d1bb12df",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"6be187a3dfe15f95dd6146d9fec08e1f81100987",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-25120200103005"}},"921b":function(t,n,e){"use strict";(function(t){var n=e("8189");function r(t,n){return!n||"object"!==typeof n&&"function"!==typeof n?i(t):n}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},o(t)}function u(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&a(t,n)}function a(t,n){return a=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},a(t,n)}function c(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function s(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,n,e){return n&&s(t.prototype,n),e&&s(t,e),t}var l=n.version,p="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",v=1800,d=300,_=10,g="__DC_STAT_UUID",y="__DC_UUID_VALUE";function m(){var n="";if("n"===O()){try{n=plus.runtime.getDCloudId()}catch(e){n=""}return n}try{n=t.getStorageSync(g)}catch(e){n=y}if(!n){n=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(g,n)}catch(e){t.setStorageSync(g,y)}}return n}var b=function(t){var n=Object.keys(t),e=n.sort(),r={},i="";for(var o in e)r[e[o]]=t[e[o]],i+=e[o]+"="+t[e[o]]+"&";return{sign:"",options:i.substr(0,i.length-1)}},w=function(t){var n="";for(var e in t)n+=e+"="+t[e]+"&";return n.substr(0,n.length-1)},$=function(){return parseInt((new Date).getTime()/1e3)},O=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},A=function(){var n="";return"wx"!==O()&&"qq"!==O()||t.canIUse("getAccountInfoSync")&&(n=t.getAccountInfoSync().miniProgram.appId||""),n},j=function(){return"n"===O()?plus.runtime.version:""},k=function(){var t=O(),n="";return"n"===t&&(n=plus.runtime.channel),n},x=function(n){var e=O(),r="";return n||("wx"===e&&(r=t.getLaunchOptionsSync().scene),r)},S="First__Visit__Time",E="Last__Visit__Time",D=function(){var n=t.getStorageSync(S),e=0;return n?e=n:(e=$(),t.setStorageSync(S,e),t.removeStorageSync(E)),e},I=function(){var n=t.getStorageSync(E),e=0;return e=n||"",t.setStorageSync(E,$()),e},P="__page__residence__time",T=0,C=0,R=function(){return T=$(),"n"===O()&&t.setStorageSync(P,$()),T},N=function(){return C=$(),"n"===O()&&(T=t.getStorageSync(P)),C-T},U="Total__Visit__Count",B=function(){var n=t.getStorageSync(U),e=1;return n&&(e=n,e++),t.setStorageSync(U,e),e},M=function(t){var n={};for(var e in t)n[e]=encodeURIComponent(t[e]);return n},L=0,q=0,V=function(){var t=(new Date).getTime();return L=t,q=0,t},z=function(){var t=(new Date).getTime();return q=t,t},F=function(t){var n=0;if(0!==L&&(n=q-L),n=parseInt(n/1e3),n=n<1?1:n,"app"===t){var e=n>d;return{residenceTime:n,overtime:e}}if("page"===t){var r=n>v;return{residenceTime:n,overtime:r}}return{residenceTime:n}},W=function(){var t=getCurrentPages(),n=t[t.length-1],e=n.$vm;return"bd"===O()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route},H=function(t){var n=getCurrentPages(),e=n[n.length-1],r=e.$vm,i=t._query,o=i&&"{}"!==JSON.stringify(i)?"?"+JSON.stringify(i):"";return t._query="","bd"===O()?r.$mp&&r.$mp.page.is+o:r.$scope&&r.$scope.route+o||r.$mp&&r.$mp.page.route+o},J=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},G=function(t,n){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof n&&"object"!==typeof n?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof n&&n.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof n?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},K=e("49a3").default,Z=e("c69b").default||e("c69b"),Q=t.getSystemInfoSync(),Y=function(){function n(){c(this,n),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:O(),mpn:A(),ak:Z.appid,usv:l,v:j(),ch:k(),cn:"",pn:"",ct:"",t:$(),tt:"",p:"android"===Q.platform?"a":"i",brand:Q.brand||"",md:Q.model,sv:Q.system.replace(/(Android|iOS)\s/,""),mpsdk:Q.SDKVersion||"",mpv:Q.version||"",lang:Q.language,pr:Q.pixelRatio,ww:Q.windowWidth,wh:Q.windowHeight,sw:Q.screenWidth,sh:Q.screenHeight}}return f(n,[{key:"_applicationShow",value:function(){if(this.__licationHide){z();var t=F("app");if(t.overtime){var n={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(n)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,n){this.__licationHide=!0,z();var e=F();V();var r=H(this);this._sendHideRequest({urlref:r,urlref_ts:e.residenceTime},n)}},{key:"_pageShow",value:function(){var t=H(this),n=W();if(this._navigationBarTitle.config=K&&K.pages[n]&&K.pages[n].titleNView&&K.pages[n].titleNView.titleText||K&&K.pages[n]&&K.pages[n].navigationBarTitleText||"",this.__licationShow)return V(),this.__licationShow=!1,void(this._lastPageRoute=t);z(),this._lastPageRoute=t;var e=F("page");if(e.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}V()}},{key:"_pageHide",value:function(){if(!this.__licationHide){z();var t=F("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var n=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+n||"",this.statData.t=$(),this.statData.sc=x(t.scene),this.statData.fvts=D(),this.statData.lvts=I(),this.statData.tvc=B(),"n"===O()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var n=t.url,e=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:n,tt:this.statData.tt,urlref:e,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(i)}},{key:"_sendHideRequest",value:function(t,n){var e=t.urlref,r=t.urlref_ts,i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:e,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(i,n)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.key,e=void 0===n?"":n,r=t.value,i=void 0===r?"":r,o=this._lastPageRoute,u={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:o,ch:this.statData.ch,e_n:e,e_v:"object"===typeof i?JSON.stringify(i):i.toString(),usv:this.statData.usv,t:$(),p:this.statData.p};this.request(u)}},{key:"getNetworkInfo",value:function(){var n=this;t.getNetworkType({success:function(t){n.statData.net=t.networkType,n.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(n){t.statData.v=n.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var n=this;Z.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(n.statData.cn=t.address.country,n.statData.pn=t.address.province,n.statData.ct=t.address.city),n.statData.lat=t.latitude,n.statData.lng=t.longitude,n.request(n.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(n,e){var r=this,i=$(),o=this._navigationBarTitle;n.ttn=o.page,n.ttpj=o.config,n.ttc=o.report;var u=this._reportingRequestData;if("n"===O()&&(u=t.getStorageSync("__UNI__STAT__DATA")||{}),u[n.lt]||(u[n.lt]=[]),u[n.lt].push(n),"n"===O()&&t.setStorageSync("__UNI__STAT__DATA",u),!(N()<_)||e){var a=this._reportingRequestData;"n"===O()&&(a=t.getStorageSync("__UNI__STAT__DATA")),R();var c=[],s=[],f=[],p=function(t){var n=a[t];n.forEach(function(n){var e=w(n);0===t?c.push(e):3===t?f.push(e):s.push(e)})};for(var h in a)p(h);c.push.apply(c,s.concat(f));var v={usv:l,t:i,requests:JSON.stringify(c)};this._reportingRequestData={},"n"===O()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==n.ut?"n"!==O()||"a"!==this.statData.p?this._sendRequest(v):setTimeout(function(){r._sendRequest(v)},200):this.imageRequest(v)}}},{key:"_sendRequest",value:function(n){var e=this;t.request({url:p,method:"POST",data:n,success:function(){},fail:function(t){++e._retry<3&&setTimeout(function(){e._sendRequest(n)},1e3)}})}},{key:"imageRequest",value:function(t){var n=new Image,e=b(M(t)).options;n.src=h+"?"+e}},{key:"sendEvent",value:function(t,n){G(t,n)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof n?JSON.stringify(n):n},1):this._navigationBarTitle.report=n)}}]),n}(),X=function(n){function e(){var n;return c(this,e),n=r(this,o(e).call(this)),n.instance=null,"function"===typeof t.addInterceptor&&(n.addInterceptorInit(),n.interceptLogin(),n.interceptShare(!0),n.interceptRequestPayment()),n}return u(e,n),f(e,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new e),this.instance}}]),f(e,[{key:"addInterceptorInit",value:function(){var n=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){n._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var n=this;t.addInterceptor("login",{complete:function(){n._login()}})}},{key:"interceptShare",value:function(n){var e=this;n?t.addInterceptor("share",{success:function(){e._share()},fail:function(){e._share()}}):e._share()}},{key:"interceptRequestPayment",value:function(){var n=this;t.addInterceptor("requestPayment",{success:function(){n._payment("pay_success")},fail:function(){n._payment("pay_fail")}})}},{key:"report",value:function(t,n){this.self=n,R(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,n){if(!n.$scope&&!n.$mp){var e=getCurrentPages();n.$scope=e[e.length-1]}this.self=n,this._query=t}},{key:"show",value:function(t){this.self=t,J(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,J(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var n="";n=t.message?t.stack:JSON.stringify(t);var e={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:n,usv:this.statData.usv,t:$(),p:this.statData.p};this.request(e)}}]),e}(Y),tt=X.getInstance(),nt=!1,et={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var n=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),n.call(this,t)}}},onShow:function(){nt=!1,tt.show(this)},onHide:function(){nt=!0,tt.hide(this)},onUnload:function(){nt?nt=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var n=e("66fd");(n.default||n).mixin(et),t.report=function(t,n){tt.sendEvent(t,n)}}rt()}).call(this,e("6e42")["default"])},adaf:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=l,n.post=n.get=void 0;var r=o(e("2ef0")),i=o(e("3705"));function o(t){return t&&t.__esModule?t:{default:t}}function u(t,n){return s(t)||c(t,n)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function c(t,n){var e=[],r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done);r=!0)if(e.push(u.value),n&&e.length===n)break}catch(c){i=!0,o=c}finally{try{r||null==a["return"]||a["return"]()}finally{if(i)throw o}}return e}function s(t){if(Array.isArray(t))return t}var f=function(t){var n=i.default.server,e={};t.data=Object.assign({},e,t.data||{}),t.sslVerify=!1,t.method=t.method||"GET";var r={accept:"application/json","content-type":"application/x-www-form-urlencoded"};return t.header=Object.assign({},r,t.header),/http/.test(t.url)||(t.url=n+t.url),t};function l(n){return n=f(n),t.request(n).then(function(t){var n=u(t,2),e=n[0],i=n[1];if(e)throw new Error(e.message);var o=r.default.get(i,"data",{});o.flag;return o})}var p=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return l(Object.assign({url:t,method:"GET",data:n},e))};n.get=p;var h=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return l(Object.assign({url:t,method:"POST",data:n},e))};n.post=h}).call(this,e("6e42")["default"])},c69b:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={appid:"__UNI__A9D6471"};n.default=r},c8ba:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"===typeof window&&(e=window)}t.exports=e},d5cc:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=e("adaf"),i={post:r.post,get:r.get,upload:r.upload},o={queryVersion:function(t){return i.get("/version",t)}};n.default=o},f0c5:function(t,n,e){"use strict";function r(t,n,e,r,i,o,u,a,c,s){var f,l="function"===typeof t?t.options:t;if(c&&(l.components=Object.assign(c,l.components||{})),s&&((s.beforeCreate||(s.beforeCreate=[])).unshift(function(){this[s.__module]=this}),(l.mixins||(l.mixins=[])).push(s)),n&&(l.render=n,l.staticRenderFns=e,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),u?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},l._ssrRegister=f):i&&(f=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),f)if(l.functional){l._injectStyles=f;var p=l.render;l.render=function(t,n){return f.call(n),p(t,n)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,f):[f]}return{exports:t,options:l}}e.d(n,"a",function(){return r})}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/invinbg-image-cropper/invinbg-image-cropper';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/invinbg-image-cropper/invinbg-image-cropper.js';

define('components/invinbg-image-cropper/invinbg-image-cropper.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/invinbg-image-cropper/invinbg-image-cropper"], {
  "02e7": function e7(t, i, e) {},
  2998: function _(t, i, e) {
    "use strict";

    var o = e("02e7"),
        s = e.n(o);
    s.a;
  },
  "4ffc": function ffc(t, i, e) {
    "use strict";

    e.r(i);
    var o = e("976d"),
        s = e("a2fc");

    for (var r in s) {
      "default" !== r && function (t) {
        e.d(i, t, function () {
          return s[t];
        });
      }(r);
    }

    e("2998");
    var a,
        h = e("f0c5"),
        c = Object(h["a"])(s["default"], o["b"], o["c"], !1, null, "1915aeb0", null, !1, o["a"], a);
    i["default"] = c.exports;
  },
  "68d1": function d1(t, i, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(i, "__esModule", {
        value: !0
      }), i.default = void 0;
      var e = {
        name: "image-cropper",
        props: {
          cropWidth: {
            type: Number,
            default: 200
          },
          cropHeight: {
            type: Number,
            default: 200
          },
          cropFixed: {
            type: Boolean,
            default: !1
          },
          src: {
            type: String
          },
          showResetBtn: {
            type: Boolean,
            default: !0
          },
          showRotateBtn: {
            type: Boolean,
            default: !0
          }
        },
        data: function data() {
          var i = t.getSystemInfoSync(),
              e = i.pixelRatio;
          return {
            show: !1,
            scale: 1,
            rotate: 0,
            cropW: 0,
            cropH: 0,
            cropOldW: 0,
            cropOldH: 0,
            sysInfo: i,
            pixelRatio: e,
            imageRealWidth: 0,
            imageRealHeight: 0,
            cropOffsertX: 0,
            cropOffsertY: 0,
            startX: 0,
            startY: 0,
            border: 5,
            x: 0,
            y: 0,
            startL: 0,
            oldScale: 1
          };
        },
        watch: {
          src: function src(t) {
            t.length > 0 && this.init();
          },
          show: function show(t) {
            t || (this.src = "");
          }
        },
        computed: {
          containerTop: function containerTop() {
            var t = 0;
            return t;
          },
          containerHeight: function containerHeight() {
            return this.windowHeight - 48;
          },
          windowWidth: function windowWidth() {
            return this.sysInfo.windowWidth;
          },
          windowHeight: function windowHeight() {
            return this.sysInfo.windowHeight;
          },
          imageRatio: function imageRatio() {
            return this.imageRealHeight > 0 ? this.imageRealWidth / this.imageRealHeight : 0;
          },
          imageWidth: function imageWidth() {
            return this.imageRatio >= 1 ? this.windowWidth : this.windowWidth * this.imageRatio;
          },
          imageHeight: function imageHeight() {
            return this.imageRatio >= 1 ? this.windowWidth / this.imageRatio : this.windowWidth;
          }
        },
        methods: {
          rotateHandler: function rotateHandler() {
            3 == this.rotate ? this.rotate = 0 : ++this.rotate;
          },
          init: function init() {
            this.rotate = 0, this.scale = 1, this.cropW = this.cropWidth, this.cropH = this.cropHeight, t.showLoading({
              title: "图片加载中..."
            }), this.loadImage(this.src).then(function (i) {
              t.hideLoading();
            }).catch(function (i) {
              t.hideLoading(), t.showModal({
                title: "标题",
                content: "图片加载失败"
              });
            });
          },
          loadImage: function loadImage(i) {
            var e = this;
            return new Promise(function (o, s) {
              t.getImageInfo({
                src: i,
                success: function success(t) {
                  e.imageRealWidth = t.width, e.imageRealHeight = t.height, e.cropOffsertX = e.windowWidth / 2 - e.cropW / 2, e.cropOffsertY = e.windowHeight / 2 - e.cropH / 2, e.show = !0, e.$nextTick(function () {
                    e.x = e.windowWidth / 2 - e.imageWidth / 2, e.y = e.containerHeight / 2 - e.imageHeight / 2;
                  }), o(t);
                },
                fail: function fail(t) {
                  e.show = !1, s(t);
                }
              });
            });
          },
          cancel: function cancel() {
            this.show = !1, this.$emit("cancel");
          },
          confirm: function confirm(i) {
            t.showLoading({
              title: "裁剪中..."
            });
            var e = this,
                o = t.createCanvasContext("myCanvas", e),
                s = e.pixelRatio,
                r = e.src,
                a = e.imageWidth * e.scale,
                h = e.imageHeight * e.scale,
                c = e.rotate,
                n = e.cropOffsertX - e.x - (e.imageWidth - a) / 2,
                p = e.cropOffsertY - e.y - (e.imageHeight - h) / 2;

            switch (o.setFillStyle("white"), o.fillRect(0, 0, a, h), o.save(), o.rotate(90 * c * Math.PI / 180), c) {
              case 1:
                n += (h - a) / 2, p -= (h - a) / 2, o.drawImage(r, -p, n, a, -h);
                break;

              case 2:
                o.drawImage(r, n, p, -a, -h);
                break;

              case 3:
                n += (h - a) / 2, p -= (h - a) / 2, o.drawImage(r, p, -n, -a, h);
                break;

              default:
                o.drawImage(r, -n, -p, a, h);
                break;
            }

            o.restore(), o.draw(!1, function () {
              t.canvasToTempFilePath({
                canvasId: "myCanvas",
                destWidth: e.cropW * s,
                destHeight: e.cropH * s,
                success: function success(o) {
                  t.hideLoading(), i.detail.tempFilePath = o.tempFilePath, e.show = !1, e.$emit("confirm", i);
                },
                fail: function fail(i) {
                  t.hideLoading(), t.showModal({
                    title: "提示",
                    content: "裁剪失败"
                  });
                }
              }, e);
            });
          },
          imgTouchStart: function imgTouchStart(i) {
            if (2 == i.touches.length) {
              this.oldScale = this.scale, this.scaling = !0;
              var e = i.touches[0].pageX - i.touches[1].pageX,
                  o = i.touches[0].pageY - i.touches[1].pageY,
                  s = Math.sqrt(Math.pow(e, 2) + Math.pow(o, 2));
              this.startL = Math.max(e, o, s), t.showModal({
                content: this.startL
              });
            } else this.startX = i.touches[0].pageX - this.x, this.startY = i.touches[0].pageY - this.y;
          },
          imgMoveing: function imgMoveing(t) {
            if (this.scaling) {
              var i = this.oldScale,
                  e = t.touches[0].pageX - t.touches[1].pageX,
                  o = t.touches[0].pageY - t.touches[1].pageY,
                  s = Math.sqrt(Math.pow(e, 2) + Math.pow(o, 2)),
                  r = Math.max(e, o, s),
                  a = r - this.startL,
                  h = 1;
              h = h / this.imageWidth > h / this.imageHeight ? h / this.imageHeight : h / this.imageWidth, h = h > .1 ? .1 : h;
              var c = h * a;
              a > 0 ? i += Math.abs(c) : a < 0 && i > Math.abs(c) && (i -= Math.abs(c)), this.scale = i;
            } else {
              var n = t.touches[0].pageX - this.startX,
                  p = t.touches[0].pageY - this.startY;
              this.x = n, this.y = p;
            }
          },
          imgMoveEnd: function imgMoveEnd() {
            var t = this;
            setTimeout(function () {
              t.scaling = !1;
            }, 100);
          },
          touchStart: function touchStart(t) {
            this.startX = t.touches[0].pageX - this.cropOffsertX, this.startY = t.touches[0].pageY - this.cropOffsertY, this.cropOldW = this.cropW, this.cropOldH = this.cropH;
          },
          cropMoveing: function cropMoveing(t) {
            var i = this._cropX(t.touches[0].pageX - this.startX),
                e = this._cropY(t.touches[0].pageY - this.startY);

            this.cropOffsertX = i, this.cropOffsertY = e;
          },
          dragMove: function dragMove(t, i) {
            if (this.cropFixed) return !1;
            var e = t.touches[0].pageX - this.startX,
                o = t.touches[0].pageY - this.startY;

            switch (i) {
              case "left-top":
                this._cropMoveLeft(e), this._cropMoveTop(o);
                break;

              case "middle-top":
                this._cropMoveTop(o);

                break;

              case "right-top":
                this._cropMoveTop(o), this._cropMoveRight(e);
                break;

              case "middle-right":
                this._cropMoveRight(e);

                break;

              case "right-bottom":
                this._cropMoveRight(e), this._cropMoveBottom(o);
                break;

              case "middle-bottom":
                this._cropMoveBottom(o);

                break;

              case "left-bottom":
                this._cropMoveBottom(o), this._cropMoveLeft(e);
                break;

              case "middle-left":
                this._cropMoveLeft(e);

                break;

              default:
                break;
            }
          },
          _cropMoveTop: function _cropMoveTop(t) {
            var i = this._cropY(t);

            this.cropH += this.cropOffsertY - i, this.cropOffsertY = i;
          },
          _cropMoveRight: function _cropMoveRight(t) {
            if (this.cropOldW + t >= this.windowWidth - this.border) return !1;
            this.cropW = this.cropOldW + (t - this.cropOffsertX);
          },
          _cropMoveBottom: function _cropMoveBottom(t) {
            if (this.cropOldH + t >= this.windowHeight - this.containerTop - this.border) return !1;
            this.cropH = this.cropOldH + (t - this.cropOffsertY);
          },
          _cropMoveLeft: function _cropMoveLeft(t) {
            var i = this._cropY(t);

            this.cropW += this.cropOffsertX - i, this.cropOffsertX = i;
          },
          _cropX: function _cropX(t) {
            return t <= this.border ? this.border : t + this.cropW >= this.windowWidth - this.border ? this.windowWidth - this.cropW - this.border : t;
          },
          _cropY: function _cropY(t) {
            return t <= this.border ? this.border : t + this.cropH >= this.windowHeight - this.containerTop - this.border ? this.windowHeight - this.cropH - this.containerTop - this.border : t;
          }
        }
      };
      i.default = e;
    }).call(this, e("6e42")["default"]);
  },
  "976d": function d(t, i, e) {
    "use strict";

    var o,
        s = function s() {
      var t = this,
          i = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(i, "b", function () {
      return s;
    }), e.d(i, "c", function () {
      return r;
    }), e.d(i, "a", function () {
      return o;
    });
  },
  a2fc: function a2fc(t, i, e) {
    "use strict";

    e.r(i);
    var o = e("68d1"),
        s = e.n(o);

    for (var r in o) {
      "default" !== r && function (t) {
        e.d(i, t, function () {
          return o[t];
        });
      }(r);
    }

    i["default"] = s.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/invinbg-image-cropper/invinbg-image-cropper-create-component', {
  'components/invinbg-image-cropper/invinbg-image-cropper-create-component': function componentsInvinbgImageCropperInvinbgImageCropperCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4ffc"));
  }
}, [['components/invinbg-image-cropper/invinbg-image-cropper-create-component']]]);
});
require('components/invinbg-image-cropper/invinbg-image-cropper.js');
__wxRoute = 'components/uni-popup/uni-popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-popup/uni-popup.js';

define('components/uni-popup/uni-popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-popup/uni-popup"], {
  1431: function _(t, n, i) {},
  2829: function _(t, n, i) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var e = function e() {
      return i.e("components/uni-transition/uni-transition").then(i.bind(null, "53c6"));
    },
        o = {
      name: "UniPopup",
      components: {
        uniTransition: e
      },
      props: {
        animation: {
          type: Boolean,
          default: !0
        },
        type: {
          type: String,
          default: "center"
        },
        maskClick: {
          type: Boolean,
          default: !0
        }
      },
      data: function data() {
        return {
          duration: 300,
          ani: [],
          showPopup: !1,
          showTrans: !1,
          maskClass: {
            position: "fixed",
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)"
          },
          transClass: {
            position: "fixed",
            left: 0,
            right: 0
          }
        };
      },
      watch: {
        type: {
          handler: function handler(t) {
            switch (this.type) {
              case "top":
                this.ani = ["slide-top"], this.transClass = {
                  position: "fixed",
                  left: 0,
                  right: 0
                };
                break;

              case "bottom":
                this.ani = ["slide-bottom"], this.transClass = {
                  position: "fixed",
                  left: 0,
                  right: 0,
                  bottom: 0
                };
                break;

              case "center":
                this.ani = ["zoom-out", "fade"], this.transClass = {
                  position: "fixed",
                  display: "flex",
                  flexDirection: "column",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  top: 0,
                  justifyContent: "center",
                  alignItems: "center"
                };
                break;
            }
          },
          immediate: !0
        }
      },
      created: function created() {
        this.animation ? this.duration = 300 : this.duration = 0;
      },
      methods: {
        clear: function clear(t) {
          t.stopPropagation();
        },
        open: function open() {
          var t = this;
          this.showPopup = !0, this.$nextTick(function () {
            clearTimeout(t.timer), t.timer = setTimeout(function () {
              t.showTrans = !0;
            }, 50);
          }), this.$emit("change", {
            show: !0
          });
        },
        close: function close(t) {
          var n = this;
          this.showTrans = !1, this.$nextTick(function () {
            clearTimeout(n.timer), n.timer = setTimeout(function () {
              n.$emit("change", {
                show: !1
              }), n.showPopup = !1;
            }, 300);
          });
        },
        onTap: function onTap() {
          this.maskClick && this.close();
        }
      }
    };

    n.default = o;
  },
  "4bbc": function bbc(t, n, i) {
    "use strict";

    var e,
        o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        s = [];

    i.d(n, "b", function () {
      return o;
    }), i.d(n, "c", function () {
      return s;
    }), i.d(n, "a", function () {
      return e;
    });
  },
  "6e31": function e31(t, n, i) {
    "use strict";

    var e = i("1431"),
        o = i.n(e);
    o.a;
  },
  "915f": function f(t, n, i) {
    "use strict";

    i.r(n);
    var e = i("4bbc"),
        o = i("f065");

    for (var s in o) {
      "default" !== s && function (t) {
        i.d(n, t, function () {
          return o[t];
        });
      }(s);
    }

    i("6e31");
    var a,
        r = i("f0c5"),
        u = Object(r["a"])(o["default"], e["b"], e["c"], !1, null, "8e75530a", null, !1, e["a"], a);
    n["default"] = u.exports;
  },
  f065: function f065(t, n, i) {
    "use strict";

    i.r(n);
    var e = i("2829"),
        o = i.n(e);

    for (var s in e) {
      "default" !== s && function (t) {
        i.d(n, t, function () {
          return e[t];
        });
      }(s);
    }

    n["default"] = o.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-popup/uni-popup-create-component', {
  'components/uni-popup/uni-popup-create-component': function componentsUniPopupUniPopupCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("915f"));
  }
}, [['components/uni-popup/uni-popup-create-component']]]);
});
require('components/uni-popup/uni-popup.js');
__wxRoute = 'components/uni-transition/uni-transition';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-transition/uni-transition.js';

define('components/uni-transition/uni-transition.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-transition/uni-transition"], {
  "20b0": function b0(t, n, e) {
    "use strict";

    var r = e("633a"),
        a = e.n(r);
    a.a;
  },
  "53c6": function c6(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("dab7"),
        a = e("c019");

    for (var i in a) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(i);
    }

    e("20b0");
    var o,
        s = e("f0c5"),
        c = Object(s["a"])(a["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], o);
    n["default"] = c.exports;
  },
  "633a": function a(t, n, e) {},
  c019: function c019(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("fff9"),
        a = e.n(r);

    for (var i in r) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(i);
    }

    n["default"] = a.a;
  },
  dab7: function dab7(t, n, e) {
    "use strict";

    var r,
        a = function a() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "b", function () {
      return a;
    }), e.d(n, "c", function () {
      return i;
    }), e.d(n, "a", function () {
      return r;
    });
  },
  fff9: function fff9(t, n, e) {
    "use strict";

    function r(t) {
      for (var n = 1; n < arguments.length; n++) {
        var e = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(e);
        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.forEach(function (n) {
          a(t, n, e[n]);
        });
      }

      return t;
    }

    function a(t, n, e) {
      return n in t ? Object.defineProperty(t, n, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[n] = e, t;
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var i = {
      name: "uniTransition",
      props: {
        show: {
          type: Boolean,
          default: !1
        },
        modeClass: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        duration: {
          type: Number,
          default: 300
        },
        styles: {
          type: Object,
          default: function _default() {
            return {};
          }
        }
      },
      data: function data() {
        return {
          isShow: !1,
          transform: "",
          ani: {
            in: "",
            active: ""
          }
        };
      },
      watch: {
        show: {
          handler: function handler(t) {
            t ? this.open() : this.close();
          },
          immediate: !0
        }
      },
      computed: {
        stylesObject: function stylesObject() {
          var t = r({}, this.styles, {
            "transition-duration": this.duration / 1e3 + "s"
          }),
              n = "";

          for (var e in t) {
            var a = this.toLine(e);
            n += a + ":" + t[e] + ";";
          }

          return n;
        }
      },
      created: function created() {},
      methods: {
        change: function change() {
          this.$emit("click", {
            detail: this.isShow
          });
        },
        open: function open() {
          var t = this;

          for (var n in clearTimeout(this.timer), this.isShow = !0, this.transform = "", this.ani.in = "", this.getTranfrom(!1)) {
            "opacity" === n ? this.ani.in = "fade-in" : this.transform += "".concat(this.getTranfrom(!1)[n], " ");
          }

          this.$nextTick(function () {
            setTimeout(function () {
              t._animation(!0);
            }, 50);
          });
        },
        close: function close(t) {
          clearTimeout(this.timer), this._animation(!1);
        },
        _animation: function _animation(t) {
          var n = this,
              e = this.getTranfrom(t);

          for (var r in this.transform = "", e) {
            "opacity" === r ? this.ani.in = "fade-".concat(t ? "out" : "in") : this.transform += "".concat(e[r], " ");
          }

          this.timer = setTimeout(function () {
            t || (n.isShow = !1), n.$emit("change", {
              detail: n.isShow
            });
          }, this.duration);
        },
        getTranfrom: function getTranfrom(t) {
          var n = {
            transform: ""
          };
          return this.modeClass.forEach(function (e) {
            switch (e) {
              case "fade":
                n.opacity = t ? 1 : 0;
                break;

              case "slide-top":
                n.transform += "translateY(".concat(t ? "0" : "-100%", ") ");
                break;

              case "slide-right":
                n.transform += "translateX(".concat(t ? "0" : "100%", ") ");
                break;

              case "slide-bottom":
                n.transform += "translateY(".concat(t ? "0" : "100%", ") ");
                break;

              case "slide-left":
                n.transform += "translateX(".concat(t ? "0" : "-100%", ") ");
                break;

              case "zoom-in":
                n.transform += "scale(".concat(t ? 1 : .8, ") ");
                break;

              case "zoom-out":
                n.transform += "scale(".concat(t ? 1 : 1.2, ") ");
                break;
            }
          }), n;
        },
        _modeClassArr: function _modeClassArr(t) {
          var n = this.modeClass;

          if ("string" !== typeof n) {
            var e = "";
            return n.forEach(function (n) {
              e += n + "-" + t + ",";
            }), e.substr(0, e.length - 1);
          }

          return n + "-" + t;
        },
        toLine: function toLine(t) {
          return t.replace(/([A-Z])/g, "-$1").toLowerCase();
        }
      }
    };
    n.default = i;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-transition/uni-transition-create-component', {
  'components/uni-transition/uni-transition-create-component': function componentsUniTransitionUniTransitionCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("53c6"));
  }
}, [['components/uni-transition/uni-transition-create-component']]]);
});
require('components/uni-transition/uni-transition.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"3bbd":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n("182e"));function u(t){return t&&t.__esModule?t:{default:t}}var c=function(){return n.e("components/invinbg-image-cropper/invinbg-image-cropper").then(n.bind(null,"4ffc"))},s=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"915f"))},a={data:function(){return{suggest:"",version:"",tempFilePath:"",cropFilePath:"",count:0}},components:{ImageCropper:c,uniPopup:s},created:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.version=e.version})},onNavigationBarButtonTap:function(){this.open()},methods:{open:function(){this.$refs.popup.open()},close:function(){this.$refs.popup.close()},handleSubmitSuggest:function(){this.suggest.indexOf("9527")>-1?(0,o.default)(!0,this.suggest):t.showToast({title:"感谢您的反馈",icon:"none"}),this.suggest="",this.close()},handleClick:function(){10===this.count?((0,o.default)(!0),this.count=0):this.count+=1},save:function(){this.cropFilePath?t.saveImageToPhotosAlbum({filePath:this.cropFilePath,success:function(){t.showToast({title:"保存成功"})}}):t.showToast({title:"请先上传图片"})},upload:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(t){e.tempFilePath=t.tempFilePaths.shift()}})},confirm:function(t){this.tempFilePath="",this.cropFilePath=t.detail.tempFilePath},cancel:function(){console.log(i("canceled"," at pages/index/index.vue:107"))}}};e.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},5112:function(t,e,n){"use strict";n.r(e);var i=n("8d39"),o=n("e754");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("e969");var c,s=n("f0c5"),a=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],c);e["default"]=a.exports},"8d39":function(t,e,n){"use strict";var i,o=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return i})},d45a:function(t,e,n){},e754:function(t,e,n){"use strict";n.r(e);var i=n("3bbd"),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=o.a},e969:function(t,e,n){"use strict";var i=n("d45a"),o=n.n(i);o.a},f3ba:function(t,e,n){"use strict";(function(t){n("1fbc"),n("921b");i(n("66fd"));var e=i(n("5112"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["f3ba","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

