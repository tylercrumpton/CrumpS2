(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{1013:function(e,t,a){"use strict";var r;a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return n})),a.d(t,"d",(function(){return c})),a.d(t,"h",(function(){return o})),a.d(t,"g",(function(){return u})),a.d(t,"i",(function(){return s})),a.d(t,"b",(function(){return i})),a.d(t,"e",(function(){return O})),a.d(t,"f",(function(){return b})),function(e){e.FETCH_CURRENT_WORKSPACE="[Workspaces] FETCH_CURRENT_WORKSPACE",e.FETCH_WORKSPACES="[Workspaces] FETCH_WORKSPACES",e.SET_CURRENT_WORKSPACE_KEY="[Workspaces] SET_CURRENT_WORKSPACE_KEY",e.SET_CURRENT_WORKSPACE="[Workspaces] SET_CURRENT_WORKSPACE",e.SET_WORKSPACES="[Workspaces] SET_WORKSPACES",e.ADD_WORKSPACE="[Workspaces] ADD_WORKSPACE",e.FIND_WORKSPACE="[Workspaces] FIND_WORKSPACE",e.REMOVE_WORKSPACE="[Workspaces] REMOVE_WORKSPACE"}(r||(r={}));var n=function(){return{type:r.FETCH_CURRENT_WORKSPACE}},c=function(){return{type:r.FETCH_WORKSPACES}},o=function(e){return{type:r.SET_CURRENT_WORKSPACE_KEY,payload:{key:e}}},u=function(e){return{type:r.SET_CURRENT_WORKSPACE,payload:{workspace:e}}},s=function(e){return{type:r.SET_WORKSPACES,payload:{workspaces:e}}},i=function(e){return{type:r.ADD_WORKSPACE,payload:{workspace:e}}},O=function(e){return{type:r.FIND_WORKSPACE,payload:{domainName:e}}},b=function(e){return{type:r.REMOVE_WORKSPACE,payload:{key:e}}}},1014:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}));var r=function(e,t){return t.initParameterKeys.includes(e)},n=function(e,t){var a=t.parameterByKey[e];return a?a.value:""}},11254:function(e,t,a){"use strict";a.d(t,"a",(function(){return Pe}));var r=a(13),n=a(0),c=a(9),o=a(790);var u,s={rawRoute:"/",basePath:c.c,app:c.b.UNKNOWN,location:{pathname:"/"}},i=function(e,t){switch(void 0===e&&(e=s),t.type){case o.a.URL_CHANGED:case o.a.INIT:var a=t.payload,r=a.url,u=a.location,i=u.pathname,O=u.hash,b=u.search,d=function(e){var t,a=null!==(t=/(\/app\/)(dashboard|board|settings|auth)/.exec(e))&&void 0!==t?t:[];switch(a[a.length-1]){case"board":return c.b.BOARD;case"auth":return c.b.AUTH;case"settings":return c.b.SETTINGS;case"dashboard":return c.b.DASHBOARD;default:var r=Object(c.s)();return e.endsWith(r.substr(0,r.length-1))||e.endsWith(r)?c.b.ROOT:c.b.UNKNOWN}}(i);return d===e.app&&r===e.rawRoute?e:Object(n.a)(Object(n.a)({},e),{rawRoute:r,app:d,location:{pathname:i,hash:O,search:b}});case o.a.SET_BASE_PATH:return e.basePath!==t.payload.basePath?Object(n.a)(Object(n.a)({},e),{basePath:t.payload.basePath}):e;default:return e}},O=a(1013),b=a(830),d=a(10),E=a(60),p={status:d.a.UNSET},f=function(e,t){switch(void 0===e&&(e=p),t.type){case O.a.SET_CURRENT_WORKSPACE_KEY:if(t.payload.key){if(e.status!==d.a.LOCAL_NOT_LOADED||t.payload.key!==e.unverifiedKey)return Object(n.a)(Object(n.a)({},e),{status:d.a.LOCAL_NOT_LOADED,unverifiedKey:t.payload.key})}else if(e.status!==d.a.GLOBAL)return Object(n.a)(Object(n.a)({},e),{status:d.a.GLOBAL});return e;case O.a.SET_CURRENT_WORKSPACE:return Object(n.a)(Object(n.a)({},e),{status:d.a.LOCAL_LOADED_SUCCESS,key:t.payload.workspace.key});case b.a.SET_ERROR:return t.meta.feature===O.a.FETCH_CURRENT_WORKSPACE&&e.status===d.a.LOCAL_LOADING?Object(n.a)(Object(n.a)({},e),{status:d.a.LOCAL_LOADED_FAIL,unverifiedKey:e.unverifiedKey,error:t.payload}):e;case E.a.API_GET:return t.meta.feature===O.a.FETCH_CURRENT_WORKSPACE&&e.status===d.a.LOCAL_NOT_LOADED?Object(n.a)(Object(n.a)({},e),{status:d.a.LOCAL_LOADING,unverifiedKey:e.unverifiedKey}):e;default:return e}},_=a(27),y={status:_.u.NOT_ASKED},l=function(e,t){switch(void 0===e&&(e=y),t.type){case E.a.API_SUCCESS:return t.meta.feature===O.a.FIND_WORKSPACE?Object(n.a)(Object(n.a)({},e),{status:_.u.SUCCESS}):e;case b.a.SET_ERROR:return t.meta.feature===O.a.FIND_WORKSPACE?Object(n.a)(Object(n.a)({},e),{status:_.u.FAIL,error:t.payload}):e;case E.a.API_GET:return t.meta.feature===O.a.FIND_WORKSPACE?Object(n.a)(Object(n.a)({},e),{status:_.u.LOADING}):e;default:return e}},S=a(20),j=a(290),T={keys:[],info:{},error:void 0,activeRequestsCount:0},R=function(e,t){var a,r;switch(void 0===e&&(e=T),t.type){case O.a.SET_WORKSPACES:var c=[],o={};return Object(S.a)(t.payload.workspaces).forEach((function(e){c.push(e.key),o[e.key]=e})),Object(n.a)(Object(n.a)({},e),{keys:c,info:Object(n.a)(Object(n.a)({},e.info),o)});case O.a.ADD_WORKSPACE:return Object(n.a)(Object(n.a)({},e),{info:Object(n.a)(Object(n.a)({},e.info),(a={},a[t.payload.workspace.key]=t.payload.workspace,a))});case E.a.API_SUCCESS:switch(t.meta.feature){case O.a.FETCH_WORKSPACES:return Object(n.a)(Object(n.a)({},e),{activeRequestsCount:e.activeRequestsCount-1});case O.a.REMOVE_WORKSPACE:var u=String(t.meta.apiArgs.workspaceKey||"");return Object(n.a)(Object(n.a)({},e),{keys:e.keys.filter((function(e){return e!==u}))});case j.a.LOGOUT:var s=String(t.meta.apiArgs.workspaceKey||"");return Object(n.a)(Object(n.a)({},e),{info:Object(n.a)(Object(n.a)({},e.info),(r={},r[s]=Object(n.a)(Object(n.a)({},e.info[s]),{authorized:!1}),r))});case j.a.LOGOUT_ALL:return Object(n.a)(Object(n.a)({},e),{info:Object.keys(e.info).reduce((function(t,a){return t[a]=Object(n.a)(Object(n.a)({},e.info[a]),{authorized:!1}),t}),{})});default:return e}case b.a.SET_ERROR:return t.meta.feature===O.a.FETCH_WORKSPACES?Object(n.a)(Object(n.a)({},e),{error:t.payload,activeRequestsCount:e.activeRequestsCount-1}):e;case E.a.API_GET:return t.meta.feature===O.a.FETCH_WORKSPACES?Object(n.a)(Object(n.a)({},e),{activeRequestsCount:e.activeRequestsCount+1}):e;default:return e}},C=a(29),A=function(e){var t=e.getState,a=e.dispatch;return function(){return function(e){switch(e.type){case O.a.SET_CURRENT_WORKSPACE_KEY:Object(S.f)(e.payload.key||""),a(Object(O.c)());break;case O.a.FETCH_CURRENT_WORKSPACE:var r=t().workspace;r.current.status!==d.a.LOCAL_NOT_LOADED&&r.current.status!==d.a.LOCAL_LOADED_FAIL||a(Object(E.d)({url:"workspaces/"+encodeURIComponent(Object(C.c)(r))+"/",params:{userIdForDebug:""},feature:e.type}));break;case O.a.FETCH_WORKSPACES:Object(C.h)(t().workspace.workspaces)||a(Object(E.d)({url:"workspaces/",params:{userIdForDebug:""},feature:e.type}));break;case O.a.FIND_WORKSPACE:a(Object(E.d)({url:"workspaces/find/",apiArgs:e.payload,params:{userIdForDebug:""},feature:e.type}));break;case E.a.API_SUCCESS:switch(e.meta.feature){case O.a.FETCH_CURRENT_WORKSPACE:a(Object(O.b)(e.payload)),a(Object(O.g)(e.payload));break;case O.a.FETCH_WORKSPACES:a(Object(O.i)(e.payload))}break;case E.a.API_ERROR:switch(e.meta.feature){case O.a.FETCH_CURRENT_WORKSPACE:a(Object(b.b)({value:e.payload,feature:e.meta.feature}));break;case O.a.FETCH_WORKSPACES:a(Object(O.i)([])),a(Object(b.b)({value:e.payload,feature:e.meta.feature}));break;case O.a.FIND_WORKSPACE:a(Object(b.b)({value:e.payload,feature:e.meta.feature}))}break;case O.a.REMOVE_WORKSPACE:var n=e.payload.key;a(Object(E.b)({url:"auth/",apiArgs:{workspaceKey:n},params:{userIdForDebug:""},feature:e.type}))}}}},I=a(3),m=a(62),h=a.n(m),v={method:"GET",mode:"cors",credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json","Cache-Control":"no-cache","Referrer-Policy":"no-referrer"}},g=a(12),k=function(e){function t(t,a){var r=e.call(this,t)||this,n=new Error(r.message);return n.name=r.name,r.stack=n.stack,r.name="HttpClientError",r.message=t,r.jsonError=a,r}return Object(n.d)(t,e),t}(Error),N=I.b.getDefaultQueryParametersString,K=I.b.getHeaders;function P(e){return(e.headers.get("Content-Type")||"").includes("application/json")}function D(e){return P(e)?e.json().then((function(t){return{data:t,response:e}})):Promise.resolve({response:e})}!function(e){e.SERVER_TIME_REQUEST="[Server time] SET_CURRENT_TIME"}(u||(u={}));function L(e,t){var a=e.data,r=e.response,n=t.getState,c=t.dispatch;return r.ok||function(e,t){var a=e.data,r=e.response,n=t.dispatch,c={responseJSON:a};if(!P(r)||!a)throw new k("Not a json response",c);throw I.b.isUnauthorized(r)?n(Object(E.h)(I.b.getJsonError(c))):I.b.isRequestEntityTooLarge(r)&&n(Object(E.g)()),new k(a.error.message,c)}({data:a,response:r},{getState:n,dispatch:c}),{data:a,response:r}}function U(e,t,a){var r,n=e.data,c=e.response,o=t.dispatch,s=a.isExternalRequest,i=a.requestTime;return s||o((r={requestDuration:Date.now()-i,serverTime:c.headers.get("date-with-ms")||"",serverTimeRFC:c.headers.get("date")||""},{type:u.SERVER_TIME_REQUEST,meta:r})),n}function w(e,t,a,r){var c=e.getState,o=e.dispatch,u=a.isExternalRequest,s=a.isCache,i=function(e,t){var a=e.getState,r=t.isExternalRequest,n=t.userIdForDebug,c=t.isCache,o=t.method,u=t.argsAsQuery,s=a().api;return{isOurApiRequest:!r,clientType:s.clientType,isEmbedMode:s.isEmbedMode,csrfToken:s.csrfToken,accessLink:s.accessLink,argsAsQuery:u,userIdForDebug:n,isCache:c,method:o}}({getState:c,dispatch:o},a),O=Date.now(),b=function(e,t){var a=t.isCache,r=Object(n.a)({},e);return!1===a&&(r._=Date.now()),r}(r,i),d=function(e){var t=e.api,a=e.url,r=e.args,n=e.settings,c=(0,t.getState)().api.baseUrl,o=a;if(("GET"===n.method||n.argsAsQuery)&&!h()(o)){var u=Object.keys(r).map((function(e){return e+"="+encodeURIComponent(String(r[e]))})).join("&");u&&(o+=(-1!==o.indexOf("?")?"&":"?")+u)}var s=N();return s&&(o+=(-1!==o.indexOf("?")?"&":"?")+s),Object(g.f)(a)?o:""+c+o}({api:{getState:c,dispatch:o},url:t,args:b,settings:i}),E=function(e,t){var a=e.isOurApiRequest,r=e.userIdForDebug,c=e.clientType,o=e.isEmbedMode,u=e.csrfToken,s=e.accessLink,i=e.method,O=e.argsAsQuery,b=Object(n.a)(Object(n.a)({},v),{method:i,argsAsQuery:O}),d={defaultHeaders:b.headers,isOurApiRequest:a,clientType:c,userId:r,isEmbedMode:o,accessLink:s};return"GET"!==b.method&&(d.csrfToken=u,b.argsAsQuery||(b.body=JSON.stringify(t))),b.headers=Object(n.a)({},K(d)),b}(i,b);return function(e,t,a){var r=t.getState,n=t.dispatch;return e.then(D).then((function(e){return L(e,{getState:r,dispatch:n})})).then((function(e){return U(e,{getState:r,dispatch:n},a)}))}(fetch(d,E),{getState:c,dispatch:o},{isExternalRequest:u,requestTime:O,isCache:s})}var W=function(e){var t=e.getState,a=e.dispatch;return function(){return function(e){switch(e.type){case E.a.API_GET:var r=e.meta,n=r.url,c=r.apiArgs,o=void 0===c?{}:c,u=r.params,s=r.feature,i=u.isExternalRequest,O=u.userIdForDebug;w({getState:t,dispatch:a},n,{isExternalRequest:i,userIdForDebug:O,method:"GET"},o).then((function(e){return a(Object(E.m)(e,s,o))})).catch((function(e){return a(Object(E.c)(I.b.getJsonError(e.jsonError),s,o))}));break;case E.a.API_DELETE:var b=e.meta,d=(n=b.url,b.apiArgs),p=void 0===d?{}:d,f=(u=b.params,b.feature),_=(i=u.isExternalRequest,O=u.userIdForDebug,u.argsAsQuery);w({getState:t,dispatch:a},n,{isExternalRequest:i,userIdForDebug:O,argsAsQuery:_,method:"DELETE"},p).then((function(e){return a(Object(E.m)(e,f,p))})).catch((function(e){return a(Object(E.c)(I.b.getJsonError(e.jsonError),f,p))}));break;case E.a.API_POST:var y=e.meta,l=(n=y.url,y.apiArgs),S=void 0===l?{}:l,j=(u=y.params,y.feature);i=u.isExternalRequest,O=u.userIdForDebug,_=u.argsAsQuery;w({getState:t,dispatch:a},n,{isExternalRequest:i,userIdForDebug:O,argsAsQuery:_,method:"POST"},S).then((function(e){return a(Object(E.m)(e,j,S))})).catch((function(e){return a(Object(E.c)(I.b.getJsonError(e.jsonError),j,S))}));break;case E.a.API_PUT:var T=e.meta,R=(n=T.url,T.apiArgs),C=void 0===R?{}:R,A=(u=T.params,T.feature);i=u.isExternalRequest,O=u.userIdForDebug,_=u.argsAsQuery;w({getState:t,dispatch:a},n,{isExternalRequest:i,userIdForDebug:O,argsAsQuery:_,method:"PUT"},C).then((function(e){return a(Object(E.m)(e,A,C))})).catch((function(e){return a(Object(E.c)(I.b.getJsonError(e.jsonError),A,C))}))}}}},F=function(e){return function(t){var a=t.getState;return function(){return function(t){switch(t.type){case o.a.NAVIGATE:(r=t.payload.pathname)!==(u=a().router.location.pathname)&&e.push(r);break;case o.a.NAVIGATE_WITH_SEARCH:var r=t.payload.pathname,c=a().router.location,u=c.pathname,s=c.search;r!==u&&e.push(r+s);break;case o.a.REMOVE_SEARCH_PARAM:var i=t.payload,O=a().router.location;if(O.search&&O.search.includes(i)){var b=new URLSearchParams(O.search);b.delete(i),e.replace(Object(n.a)(Object(n.a)({},O),{search:b.toString()}))}break;case o.a.RELOAD:window.location.reload();break;case o.a.REDIRECT:r=t.payload.pathname;var d=t.meta.inNewTab;r!==(u=a().router.location.pathname)&&(d?window.open(r):window.location.assign(r))}}}}},M={clientType:"",baseUrl:"/api/v1/",isEmbedMode:!1,csrfToken:rtb.token,accessLink:rtb.accessLink};function G(e,t){switch(void 0===e&&(e=M),t.type){case E.a.API_SET_CLIENT_TYPE:return Object(n.a)(Object(n.a)({},e),{clientType:t.payload});case E.a.API_SET_EMBED_MODE:return Object(n.a)(Object(n.a)({},e),{isEmbedMode:t.payload});case E.a.API_SETUP:return Object(n.a)(Object(n.a)({},e),t.payload);case E.a.SET_CSRF_TOKEN:return Object(n.a)(Object(n.a)({},e),{csrfToken:t.payload.token});default:return e}}var H={accountStatus:_.u.NOT_ASKED},B=function(e,t){switch(void 0===e&&(e=H),t.type){case j.a.SET_REDIRECT_URL:return Object(n.a)(Object(n.a)({},e),{redirectUrl:t.payload.redirectUrl});case j.a.CLEAR_REDIRECT_URL:return Object(n.a)(Object(n.a)({},e),{redirectUrl:void 0});default:return e}},V=a(4039),q=a(53),x=a(938),Q=function(e){return function(){return function(t){var a=e.dispatch,r=e.getState;switch(t.type){case j.a.LOGOUT:var n=Object(C.c)(r().workspace),u=n?{workspaceKey:n}:{};a(Object(E.e)({url:"auth/logout/",apiArgs:u,params:{userIdForDebug:""},feature:t.type})),t.payload.logoutRedirectUrl?a(Object(j.k)(t.payload.logoutRedirectUrl)):a(Object(j.b)());break;case j.a.LOGOUT_ALL:a(Object(E.e)({url:"auth/logout/all/",params:{userIdForDebug:""},feature:t.type}));break;case j.a.NAVIGATE_TO_BOARD:a(Object(o.e)(Object(x.a)(Object(c.m)(t.payload.boardId),e)));break;case j.a.NAVIGATE_TO_DASHBOARD:a(Object(o.e)(Object(x.a)(Object(c.n)(t.payload.spaceId),e)));break;case j.a.NAVIGATE_TO_ROOT:a(Object(o.e)(Object(x.a)(c.s,e)));break;case j.a.NAVIGATE_TO_FIND_WORKSPACE_PAGE:a(Object(o.c)(Object(x.a)(c.l,e)));break;case j.a.NAVIGATE_TO_RECOVER_PASSWORD:a(Object(o.c)(Object(x.a)(c.i,e)));break;case j.a.NAVIGATE_TO:a(Object(o.e)(t.payload.url));break;case E.a.API_SUCCESS:if(t.meta.feature===j.a.LOGOUT||t.meta.feature===j.a.LOGOUT_ALL){var s=r().user.redirectUrl;s?(a(Object(j.b)()),a(Object(j.c)(s))):a(Object(j.g)({reason:q.t.ManualLogout}))}break;case E.a.API_REQUEST_UNAUTHORIZED:var i=r().router.app,O=t.payload;a("board"===i?Object(j.o)(O):Object(j.g)({reason:O.reason}));break;case j.a.SET_TECHNICAL_INFO:var b=t.payload,d=b.caption,p=b.data,f=t.meta,_=f.feature,y=f.userIdForDebug;a(Object(V.b)({caption:d,data:p,feature:_,userIdForDebug:y}))}}}},J=a(17),Y=a(1176),z=a(292),$=a(2796),X=a(1014),Z=a(1302),ee=a(624),te=a(214),ae=a(55),re=a(14),ne=a(238),ce=a(223),oe=a(183);var ue=a(297);function se(){return function(){var e;return Object(oe.isOnMiroLite)(null===(e=function(){try{return Object(ne.a)().isBoardOpened()?ce.a.getState().board.info:void 0}catch(e){return}}())||void 0===e?void 0:e.account)}()?_.q.LITE:function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null==t?"":decodeURIComponent(t[1])}(J.g.FROM_EMBED)?_.q.EMBED:Object(ue.a)()?_.q.LIVE_EMBED:void 0}function ie(e){var t,a;return te.a.isCookiesBlocked||Object(ae.j)(J.b.USE_POST_AUTH,null!==(a=null===(t=e.location)||void 0===t?void 0:t.search)&&void 0!==a?a:"")?"post":""}function Oe(e,t,a,r){var n=e;t&&(n=Object(re.c)(n,"reason",t),n=Object(re.c)(n,"service","app"));var c=null!==a&&void 0!==a?a:se();return c&&(n=Object(re.c)(n,J.g.CHANNEL,c)),r&&(n=Object(re.c)(n,J.g.RETURN_METHOD,r)),n}function be(e,t,a){var r=e,n=null!==t&&void 0!==t?t:se();return n&&(r=Object(re.c)(r,J.g.CHANNEL,n)),a&&(r=Object(re.c)(r,J.g.RETURN_METHOD,a)),r}var de,Ee=function(e){var t=e.getState,a=e.dispatch;return function(){return function(e){switch(e.type){case Y.a.LOGIN:var r=Object(C.c)(t().workspace),n=e.payload,u=n.copyBoardId,s=n.from,i=n.openBoardId,O=n.reason;r&&!e.payload.ignoreWorkspace?(i?a(Object(j.k)(Object(x.a)(Object(c.m)(i),{getState:t}))):O?(O!==q.t.ManualLogout&&a(Object(j.k)(t().router.rawRoute)),Object(X.a)(J.g.REASON,t().urlData.urlParameter)!==q.t.ManualLogout&&a(Object(Z.e)(J.g.REASON,O))):a(Object(Z.b)(J.g.REASON)),Object(ee.a)().stopPing(),a(Object(o.c)(Oe(Object(x.a)(c.g,{getState:t}),O,s,ie(t().router))))):(Object($.b)(i),Object($.a)(u),a(Object(o.e)(Oe("/login/",O!==q.t.ManualLogout?O:void 0,s,ie(t().router)))));break;case Y.a.SIGNUP:r=Object(C.c)(t().workspace);var b=e.payload;u=b.copyBoardId,s=b.from,i=b.openBoardId;b.shorterSignUpFlow&&Object(z.Y)(),r?(i&&a(Object(j.k)(Object(x.a)(Object(c.m)(i),{getState:t}))),a(Object(Z.b)(J.g.REASON)),a(Object(o.c)(be(Object(x.a)(c.k,{getState:t}),s,ie(t().router))))):(Object($.b)(i),Object($.a)(u),a(Object(o.e)(be("/signup/",s,ie(t().router)))))}}}},pe=a(76),fe=a(78),_e=function(){return function(){return function(e){switch(e.type){case Y.a.LOGIN:fe.a.sendMessageToParent(Object(pe.c)(),"*");break;case Y.a.SIGNUP:fe.a.sendMessageToParent(Object(pe.d)(),"*")}}}};!function(e){e.INVITE_CHECK="[Invite] INVITE_CHECK",e.SET_INVITE="[Invite] SET_INVITE"}(de||(de={}));var ye,le={status:_.u.NOT_ASKED},Se=function(e,t){switch(void 0===e&&(e=le),t.type){case de.INVITE_CHECK:return Object(n.a)(Object(n.a)({},e),{status:_.u.LOADING,unverifiedKey:t.payload.invite});case de.SET_INVITE:return e.status===_.u.LOADING?Object(n.a)(Object(n.a)({},e),{status:_.u.SUCCESS,info:t.payload.invite,key:e.unverifiedKey}):e;case b.a.SET_ERROR:return t.meta.feature===de.INVITE_CHECK&&e.status===_.u.LOADING?Object(n.a)(Object(n.a)({},e),{status:_.u.FAIL,error:t.payload}):e;default:return e}},je=a(2790),Te=function(e){return function(){return function(t){var a=e.dispatch,r=e.getState;switch(t.type){case de.INVITE_CHECK:a(Object(E.d)({url:"invite/check/",apiArgs:t.payload,params:{userIdForDebug:""},feature:t.type}));break;case E.a.API_SUCCESS:if(t.meta.feature===de.INVITE_CHECK){var n=t.payload;a(function(e){return{type:de.SET_INVITE,payload:{invite:e}}}(n)),n.valid?a(Object(o.c)(Object(x.a)(c.k,e))):a(Object(o.c)(Object(x.a)(c.g,e)))}break;case E.a.API_ERROR:t.meta.feature===de.INVITE_CHECK&&a(Object(b.b)({value:t.payload,feature:t.meta.feature}));break;case Z.a.SET_INIT_URL_DATA:var u=Object(C.c)(r().workspace),s=Object(je.b)(J.d.INVITE,r().urlData.urlCommand);s&&(u&&rtb.config.account.guest&&r().router.app===c.b.ROOT&&(a(Object(o.c)(Object(x.a)(c.g,e))),a(function(e){return{type:de.INVITE_CHECK,payload:{invite:e}}}(s))),a(Object(Z.c)(J.d.INVITE,{doUrlCleanup:!0})))}}}},Re={initParameterKeys:[],parameterByKey:{}};function Ce(e,t){var a,r;switch(void 0===e&&(e=Re),t.type){case Z.a.SET_INIT_URL_DATA:var c=Object.keys(t.payload.parameters).reduce((function(e,a){var r=t.payload.parameters[a];return"string"!==typeof r||(e[a]={key:a,value:r}),e}),{});return{initParameterKeys:Object.keys(c),parameterByKey:c};case Z.a.SET_UPDATE_URL_PARAMETER:return{initParameterKeys:Object(n.j)(e.initParameterKeys,[t.payload.name]),parameterByKey:Object(n.a)(Object(n.a)({},e.parameterByKey),(a={},a[t.payload.name]={key:t.payload.name,value:t.payload.value},a))};case Z.a.SET_CLEAR_URL_PARAMETER:var o=e.parameterByKey[t.payload];return o?{initParameterKeys:e.initParameterKeys.filter((function(e){return e!==o.key})),parameterByKey:Object(n.a)(Object(n.a)({},e.parameterByKey),(r={},r[o.key]=void 0,r))}:e;default:return e}}!function(e){e.SET="SET",e.DONE="DONE"}(ye||(ye={}));var Ae={initCommandKeys:[],doneCommandKeys:[],commandByKey:{}};function Ie(e,t){var a,r,c;switch(void 0===e&&(e=Ae),t.type){case Z.a.SET_INIT_URL_DATA:var o=Object.keys(t.payload.commands).reduce((function(e,a){var r=t.payload.commands[a];return"string"!==typeof r||(e[a]={key:a,value:r,status:ye.SET}),e}),{});return{initCommandKeys:Object.keys(o),doneCommandKeys:[],commandByKey:o};case Z.a.SET_DONE_URL_COMMAND:var u=e.commandByKey[t.payload];return!u||e.doneCommandKeys.includes(u.key)?e:{initCommandKeys:e.initCommandKeys.filter((function(e){return e!==u.key})),doneCommandKeys:e.doneCommandKeys.concat(u.key),commandByKey:Object(n.a)(Object(n.a)({},e.commandByKey),(a={},a[u.key]=(r=u.key,c=u.value,{key:r,value:c,status:ye.DONE}),a))};default:return e}}var me=function(e){var t=e.dispatch;return function(){return function(e){switch(e.type){case o.a.INIT:var a=e.payload.location.search;if(a){var r=new URLSearchParams(a),c=function(e,t){return e.reduce((function(e,a){var r=t.get(a);return"string"===typeof r&&(e[a]=r),e}),{})}(Object.keys(J.d).map((function(e){return J.d[e]})),r),u=function(e,t){return e.reduce((function(e,a){var r=t.get(a);return"string"===typeof r&&(e[a]=r),e}),{})}(Object(n.j)(Object.keys(J.g).map((function(e){return J.g[e]})),Object.keys(J.h).map((function(e){return J.h[e]}))),r);(Object.keys(c).length>0||Object.keys(u).length>0)&&t(Object(Z.d)(c,u))}break;case Z.a.SET_DONE_URL_COMMAND:e.meta.doUrlCleanup&&t(Object(o.g)(e.payload))}}}},he=a(887),ve=function(e){var t=e.getState,a=e.dispatch;return function(){return function(e){switch(e.type){case O.a.SET_CURRENT_WORKSPACE_KEY:a(Object(o.h)(Object(S.b)(e.payload.key)+"/"));break;case E.a.API_SUCCESS:switch(e.meta.feature){case O.a.FIND_WORKSPACE:a(Object(o.e)(Object(c.g)(Object(S.b)(e.payload.key)+"/")))}break;case he.a.WORKSPACE_LIST_MOUNTED:case he.a.WORKSPACES_BUTTON_MOUNTED:a(Object(O.d)());break;case he.a.WORKSPACE_LIST_ITEM_CLICKED:Object(C.i)(t().workspace.workspaces,e.payload.key).authorized&&a(Object(o.e)(Object(c.s)(Object(S.b)(e.payload.key)+"/")));break;case he.a.WORKSPACE_LIST_ITEM_SIGN_IN_CLICKED:e.payload.key?a(Object(o.e)(Object(c.g)(Object(S.b)(e.payload.key)+"/"))):a(Object(o.e)("/login/"));break;case he.a.SIGN_IN_TO_WORKSPACE_CLICKED:a(Object(o.e)(Object(c.l)()));break;case o.a.INIT:a(Object(O.h)(rtb.workspace))}}}},ge=a(32),ke=function(e){var t=e.getState,a=e.dispatch;return function(){return function(e){switch(e.type){case Y.a.LOGIN:var r=Object(C.c)(t().workspace),n=e.payload,u=n.copyBoardId,s=n.from,i=n.ignoreWorkspace,O=n.openBoardId,b=n.reason;Object($.b)(O),Object($.a)(u),r&&!i&&ge.a.setItem(_.x.liveEmbedLogin,"true"),a(Object(o.e)(Oe(r&&!i?Object(x.a)(c.g,{getState:t}):"/login/",b!==q.t.ManualLogout?b:void 0,s,ie(t().router)),{inNewTab:!0}));break;case Y.a.SIGNUP:r=Object(C.c)(t().workspace);var d=e.payload;u=d.copyBoardId,s=d.from,O=d.openBoardId;d.shorterSignUpFlow&&Object(z.Y)(),Object($.b)(O),Object($.a)(u),r&&ge.a.setItem(_.x.liveEmbedLogin,"true"),a(Object(o.e)(be(r?Object(x.a)(c.k,{getState:t}):"/signup/",s,ie(t().router)),{inNewTab:!0}))}}}};function Ne(e){return null!==new URL(location.href).searchParams.get(e)}var Ke=Ne(J.g.AUTOTEST)?function(e){var t=e.getState;return window.actionsList||(window.actionsList=[]),function(){return function(e){window.actionsList.push({action:e.type,state:t()})}}}:null;function Pe(e){return{id:"root",reducer:{router:i,workspace:Object(r.combineReducers)({current:f,find:l,workspaces:R}),user:B,api:G,invite:Se,urlData:Object(r.combineReducers)({urlCommand:Ie,urlParameter:Ce})},middlewares:[F(e),A,ve,Q,Object(ue.a)()?Ne(J.e.EXTERNAL_AUTH_FLOW)?_e:ke:Ee,Te,me,W,Ke]}}},11397:function(e,t,a){"use strict";a.r(t),function(e){a.d(t,"init",(function(){return b}));var r=a(0),n=a(4737),c=a(13),o=a(57),u=a(790),s=a(2794),i=a(11254),O=window||{};function b(t){var a=Object(n.a)(t).history,b={createStore:c.createStore,applyEnhancer:c.applyMiddleware,devToolsName:Object(o.g)(e,O.rtb)?"main-store":""},d=Object(o.f)(Object(o.d)(b),Object(i.a)(a)),E=a.location,p=E.pathname,f=E.search,_=E.hash,y=s.a.subscribe("HighLevelRouter",(function(e,t){d.dispatch(Object(u.i)(Object(r.a)(Object(r.a)({},t),{provider:e})))}));return d.dispatch(Object(u.b)({url:p+f+_,location:a.location})),{history:a,store:d,disable:function(){y.unsubscribe()}}}}.call(this,a(117))},2794:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=new(function(){function e(){this.subscribers=[]}return e.prototype.subscribe=function(e,t){var a=this;return this.subscribers.push(t),{onUrlChange:function(r){a.subscribers.forEach((function(a){a!==t&&a(e,r)}))},unsubscribe:function(){a.subscribers=a.subscribers.filter((function(e){return e!==t}))}}},e}())},2796:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c}));var r=a(600);function n(e){e&&Object(r.c)("openBoardId",e,{expires:"",path:"/"})}function c(e){if(e){var t=new Date;t.setDate(t.getDate()+30),Object(r.c)("copyBoardId",e,{expires:t,path:"/"})}}},4737:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(3931),n=a(2794);function c(e){var t=Object(r.a)(),a=n.a.subscribe("BrowserHistory",(function(){})),c=Object(r.f)(e).pathname||"/",o=t.listen((function(e){var t=Object(r.d)(e);t!==c&&(c=t,a.onUrlChange({url:t,location:e}))}));return{history:t,unsubscribe:o}}},600:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return o}));var r=a(0);function n(e){return function(e,t){var a=t.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return a?decodeURIComponent(a[1]):void 0}(e,document.cookie)}function c(e,t,a){a.expires instanceof Date&&(a.expires=a.expires.toUTCString());var r=e+"="+(t=encodeURIComponent(t));for(var n in a){r+="; "+n;var c=a[n];!0!==c&&(r+="="+c)}document.cookie=r}function o(e,t){return c(e,"",Object(r.a)(Object(r.a)({path:"/"},t),{expires:"Thu, 01 Jan 1970 00:00:01 GMT"})),void 0===n(e)}},830:function(e,t,a){"use strict";var r;a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return n})),function(e){e.SET_ERROR="[Error] SET_ERROR"}(r||(r={}));var n=function(e){var t=e.value,a=e.feature;return{type:r.SET_ERROR,payload:t,meta:{feature:a}}}},887:function(e,t,a){"use strict";var r;a.d(t,"a",(function(){return r})),a.d(t,"e",(function(){return n})),a.d(t,"f",(function(){return c})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return u})),a.d(t,"b",(function(){return s})),function(e){e.WORKSPACE_LIST_MOUNTED="[Workspaces] WORKSPACE_LIST_MOUNTED",e.WORKSPACE_LIST_ITEM_CLICKED="[Workspaces] WORKSPACE_LIST_ITEM_CLICKED",e.WORKSPACE_LIST_ITEM_SIGN_IN_CLICKED="[Workspaces] WORKSPACE_LIST_ITEM_SIGN_IN_CLICKED",e.WORKSPACES_BUTTON_MOUNTED="[Workspaces] WORKSPACES_BUTTON_MOUNTED",e.SIGN_IN_TO_WORKSPACE_CLICKED="[Workspaces] SIGN_IN_TO_WORKSPACE_CLICKED"}(r||(r={}));var n=function(){return{type:r.WORKSPACE_LIST_MOUNTED}},c=function(){return{type:r.WORKSPACES_BUTTON_MOUNTED}},o=function(e){return{type:r.WORKSPACE_LIST_ITEM_CLICKED,payload:{key:e}}},u=function(e){return{type:r.WORKSPACE_LIST_ITEM_SIGN_IN_CLICKED,payload:{key:e}}},s=function(){return{type:r.SIGN_IN_TO_WORKSPACE_CLICKED}}}}]);
//# sourceMappingURL=https://miro.com/app/static/root-store.e02003cd90c5071fd4cd.js.map