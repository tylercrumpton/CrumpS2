(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1176:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),function(e){e.LOGIN="[USER_LOGIN] LOGIN",e.SIGNUP="[USER_LOGIN] SIGNUP"}(r||(r={}));var o=function(e){return void 0===e&&(e={}),{type:r.LOGIN,payload:{openBoardId:e.openBoardId,reason:e.reason,copyBoardId:e.copyBoardId,from:e.from,ignoreWorkspace:e.ignoreWorkspace}}},i=function(e){return void 0===e&&(e={}),{type:r.SIGNUP,payload:{openBoardId:e.openBoardId,from:e.from,copyBoardId:e.copyBoardId,shorterSignUpFlow:e.shorterSignUpFlow}}}},1302:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return a})),n.d(t,"b",(function(){return u})),function(e){e.SET_INIT_URL_DATA="[URL_DATA] SET_INIT_URL_DATA",e.SET_DONE_URL_COMMAND="[URL_COMMAND] SET_DONE_URL_COMMAND",e.SET_UPDATE_URL_PARAMETER="[URL_PARAMETER] SET_UPDATE_URL_PARAMETER",e.SET_CLEAR_URL_PARAMETER="[URL_PARAMETER] SET_CLEAR_URL_PARAMETER"}(r||(r={}));var o=function(e,t){return{type:r.SET_INIT_URL_DATA,payload:{commands:e,parameters:t}}},i=function(e,t){return void 0===t&&(t={doUrlCleanup:!1}),{type:r.SET_DONE_URL_COMMAND,payload:e,meta:t}},a=function(e,t){return{type:r.SET_UPDATE_URL_PARAMETER,payload:{name:e,value:t}}},u=function(e){return{type:r.SET_CLEAR_URL_PARAMETER,payload:e}}},214:function(e,t,n){"use strict";(function(e){var r=n(242),o=n(55),i=n(27),a=n(16),u="mobileAppVersion",c="tabletAppVersion",d=function(){function e(){}return e.canEditWidget=function(e){return!this.editableWidgets||this.editableWidgets.includes(e)},e.editWidgetInExternalEditor=function(e){return this.widgetsToEditInExternalEditor&&this.widgetsToEditInExternalEditor.includes(e)},e.initialTool=i.B.VIEW,e.showPoweredByLogo=!1,e.allowBoardBackup=!1,e.canCreateWelcomeBoard=!1,e.showSelectionFrame=!0,e.allowBoxPlugin=!0,e.allowDropboxPlugin=!0,e.allowAdobeCloudPlugin=!0,e.allowOneDrivePlugin=!0,e.allowVideoChatPlugin=!0,e.viewDocumentWidgetInViewer=!1,e.loadDocumentWidgetBySingleTap=!1,e.loadDocumentWidgetByDoubleTap=!1,e.animateCommentIconOnModeChanged=!1,e.animateCommentIconOnMove=!1,e.playVideoByDoubleTap=!1,e.multiSelectByLongTap=!1,e.allowPlayEmbedWidget=!1,e.allowCreateLinks=!1,e.moveCanvasWithOneFinger=!1,e.sendCursorPosition=!0,e.canShowCanvasTools=!0,e.canShowCommentatorTools=!0,e.runWebPlugins=!0,e.allowDownloadDocuments=!0,e.allowSelectionMenu=!0,e.allowCardExpandButton=!0,e.networkDataBuffer=3e5,e.networkMaxChunkSize=65536,e.allowRightSidebar=!0,e.alwaysShowResolvedComments=!1,e.allowSpaceFixInStickersByCSS=!1,e.allowSpaceFixInStickersByJS=!1,e.allowMusicPlaying=!1,e.clipboard={copyMode:i.i.OnlyShortcuts,pasteMode:i.i.OnlyShortcuts,allowEvents:!0,allowCatcher:!0},e.allowSmoothCurveWidgetWithAlpha=!0,e.allowPenToolOnboarding=!0,e.allowIncreasedEditor=!1,e}(),s=function(){function e(){}return e.allowPointers=!1,e.allowPencilDetection=!0,e.preventTouches=!1,e.maxLegalTouchRadius=60,e.maxLegalPointerRadius=120,e.maxPencilRadius=1,e.minPencilRadius=0,e}(),f=function(){function t(){}return Object.defineProperty(t,"upgradeIsSupported",{get:function(){return t.___upgradeIsSupported},set:function(e){t.___upgradeIsSupported=e},enumerable:!1,configurable:!0}),Object.defineProperty(t,"isCookiesBlocked",{get:function(){return void 0===t._isCookiesBlocked&&(t._isCookiesBlocked=!navigator.cookieEnabled||function(){if(!function(){try{return window.self!==window.top}catch(e){return!0}}())return!1;if("undefined"!==typeof window&&"object"===typeof window.process&&"renderer"===window.process.type)return!0;if("undefined"!==typeof e&&"object"===typeof e.versions&&e.versions.electron)return!0;if("object"===typeof navigator&&"string"===typeof navigator.userAgent&&navigator.userAgent.indexOf("Electron")>=0)return!0;return!1}()),t._isCookiesBlocked},enumerable:!1,configurable:!0}),t.initializePlatformFlags=function(e,n){t.updateMobileAppFlags(n),t.updateTabletAppFlags(n),t.updateAppFlags(),t.updateEmbedGeneratorFlags(n),t.updateNetworkMaxChunkSize(),t.updateDirectLinkLiveEmbedModeFlags(e),t.updateAllowSpaceFixInStickers(),t.updateClipboard(),t.updateAllowSmoothCurveWidgetWithAlpha(),t.updateDeviceInputSettings(),t.updateAllowIncreasedEditor()},t.updateAppFlags=function(){a.a.appDetected&&(t.resetAppFlags(),t.appVersion=a.a.appVersion,a.a.mobileApp&&(t.minAppVersion="3.0.3",t.board.editableWidgets=[i.G.IMAGE,i.G.TEXT,i.G.SHAPE,i.G.STICKER,i.G.WEBSCREEN,i.G.FRAME,i.G.DOCUMENT,i.G.LINE,i.G.CARD],t.board.widgetsToEditInExternalEditor=[]))},t.resetAppFlags=function(){l(c),l(u)},t.resetTabletAppFlags=function(){l(c)},t.updateMobileAppFlags=function(e){if(!a.a.appDetected)if(a.a.desktop)l(u);else{l(c);var n=p(u,e);n&&(t.minAppVersion="3.0.3",t.appVersion=n,a.a.mobileApp=!0,t.board.editableWidgets=[i.G.IMAGE,i.G.TEXT,i.G.SHAPE,i.G.STICKER,i.G.WEBSCREEN,i.G.FRAME,i.G.DOCUMENT,i.G.LINE,i.G.CARD],t.board.widgetsToEditInExternalEditor=[])}},t.updateTabletAppFlags=function(e){if(!a.a.appDetected){var n=function(){var e=window.navigator;if("iP"===(e.platform||"").substr(0,2)){var t=/constructor/i.test(window.HTMLElement),n=e.userAgent,r=!!window.indexedDB;if(-1!==n.indexOf("Safari")&&-1!==n.indexOf("Version")&&!e.standalone)return!0;if(!r&&t||!window.statusbar.visible)return!0;if(window.webkit&&window.webkit.messageHandlers||!t||r)return!0}return!1}();if(!n&&a.a.desktop)l(c);else{l(u);var r=p(c,e);r&&(t.appVersion=r,a.a.tabletApp=!0,a.a.mobile&&(t.___isIOS=n,t.___tabletAppIsDetectedAsMobile=!0,t.___userAgent=navigator.userAgent,a.a.mobile=!1,a.a.tablet=!0,a.a.ios=n,a.a.android=!n))}}},t.updateEmbedGeneratorFlags=function(e){""!==Object(o.j)("phantom",e)&&(a.a.embedGenerator=!0)},t.updateDirectLinkLiveEmbedModeFlags=function(e){a.a.directLinkLiveEmbedMode=e.includes("live-embed")},t.updateNetworkMaxChunkSize=function(){if(a.a.tabletApp&&a.a.ios)t.board.networkMaxChunkSize=3072;else if(a.a.safari)try{var e=Object(o.b)(a.a.version||"","13"),n=Object(o.b)(a.a.osversion||"","10.15");(a.a.ipados||e>=0||n>=0)&&(t.board.networkMaxChunkSize=3072)}catch(e){}},t.updateAllowSpaceFixInStickers=function(){if(a.a.ipados)t.board.allowSpaceFixInStickersByCSS=!0,t.board.allowSpaceFixInStickersByJS=!1;else if(a.a.ios)try{var e=Object(o.b)(a.a.osversion||"","13");t.board.allowSpaceFixInStickersByCSS=e>=0,t.board.allowSpaceFixInStickersByJS=e<0}catch(e){}else a.a.safari&&(t.board.allowSpaceFixInStickersByJS=!0)},t.updateClipboard=function(){if(a.a.isTouchSupportedAndNotDesktop||a.a.uwpApp||a.a.tabletApp)t.board.clipboard.copyMode=i.i.Fake,t.board.clipboard.pasteMode=i.i.Fake;else if(a.a.desktopApp)t.board.clipboard.copyMode=i.i.Indirect,t.board.clipboard.pasteMode=i.i.Indirect;else{var e=window.chrome;if(e){t.board.clipboard.copyMode=i.i.Indirect;var n=void 0;try{n=e.app.getDetails().permissions}catch(e){}n&&n.indexOf("clipboardRead")>=0&&(t.board.clipboard.pasteMode=i.i.Indirect)}}a.a.ipados&&(t.board.clipboard.allowCatcher=!1,t.board.clipboard.allowEvents=!1)},t.updateAllowSmoothCurveWidgetWithAlpha=function(){if(a.a.ipados)t.board.allowSmoothCurveWidgetWithAlpha=!1;else if(a.a.ios){var e=Object(o.b)(a.a.osversion,"14");t.board.allowSmoothCurveWidgetWithAlpha=e<0}},t.updateAllowIncreasedEditor=function(){(a.a.ios&&a.a.tablet||a.a.ipados)&&(t.board.allowIncreasedEditor=!0)},t.updateDeviceInputSettings=function(){var e=(a.a.msie||a.a.msedge)&&navigator.maxTouchPoints>0;t.deviceInput.allowPointers=(a.a.winDesktopAppWithTouch||a.a.android&&a.a.tablet||e)&&window.PointerEvent,(a.a.firefox||a.a.android&&a.a.mobile||a.a.android&&!t.deviceInput.allowPointers)&&(t.deviceInput.allowPencilDetection=!1),t.deviceInput.allowPointers&&a.a.android&&a.a.tabletApp&&(t.deviceInput.preventTouches=!0)},t.minAppVersion="1.0.0",t.appVersion="1.0.0",t.canShowAppsBanner=!1,t.multiTabsAvailable=!1,t.featureTrialsIsSupported=!0,t.topSignalPriority=1e5,t.board=d,t.deviceInput=s,t._isCookiesBlocked=void 0,t.___userAgent="",t.___isIOS=!1,t.___tabletAppIsDetectedAsMobile=!1,t.___upgradeIsSupported=!0,t}();function p(e,t){var n=E(e),i=Object(o.j)(e,t);return i?r.setItem(n,i):i=r.getItem(n)||"",i}function l(e){var t=E(e);r.removeItem(t)}function E(e){return"__rtbAppVersion-"+e}t.a=f}).call(this,n(117))},223:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=new(function(){function e(){}return e.prototype.init=function(e,t,n){this.instance=e,this.model=t,this.observer=n},e.prototype.isReady=function(){return!!this.instance},e.prototype.destroy=function(){this.instance=void 0,this.model=void 0,this.observer=void 0},e.prototype.addModules=function(e){this.checkInstance(),this.instance.addModules(e)},e.prototype.addServices=function(e){this.checkInstance(),this.instance.addServices(e)},e.prototype.getInstance=function(){return this.checkInstance(),this.instance},e.prototype.getState=function(){return this.checkInstance(),this.instance.get()},e.prototype.__getUntypedState=function(e){return this.checkInstance(),this.instance.get(e)},e.prototype.__getUntypedSignals=function(){return this.checkInstance(),this.instance.getSignals()},e.prototype.getSignals=function(){return this.checkInstance(),this.instance.getSignals()},e.prototype.getServices=function(){return this.checkInstance(),this.instance.getServices()},e.prototype.getModules=function(){return this.checkInstance(),this.instance.getModules()},e.prototype.addStateChangeListener=function(e,t,n){var r=this;void 0===n&&(n=!1);var o=this.getModel().tree.select(e.split(".")),i=function(){t(r.__getUntypedState(e))};return n&&i(),o.on("update",i),function(){o.off("update",i)}},e.prototype.addStateChangeListenerOld=function(e,t,n){return void 0===n&&(n=!1),this.addStateChangeListener(e,t,n)},e.prototype.getModel=function(){return this.checkModel(),this.model},e.prototype.getObserver=function(){return this.checkObserver(),this.observer},e.prototype.checkInstance=function(){if(!this.instance)throw new Error("Cerebral module: instance is not defined")},e.prototype.checkModel=function(){if(!this.model)throw new Error("Cerebral module: model is not defined")},e.prototype.checkObserver=function(){if(!this.observer)throw new Error("Cerebral module: observer is not defined")},e}());function o(){return r.getSignals()}t.a=r},238:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(5);function o(){return"AppService"}function i(){return r.a("AppService")}t.a=i()},2790:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=function(e,t){return t.initCommandKeys.includes(e)},o=function(e,t){var n=t.commandByKey[e];return n?n.value:""},i=function(e,t){return r(e,t)?o(e,t):""}},290:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"m",(function(){return i})),n.d(t,"n",(function(){return a})),n.d(t,"o",(function(){return u})),n.d(t,"l",(function(){return c})),n.d(t,"d",(function(){return d})),n.d(t,"e",(function(){return s})),n.d(t,"i",(function(){return f})),n.d(t,"f",(function(){return p})),n.d(t,"h",(function(){return l})),n.d(t,"c",(function(){return E})),n.d(t,"k",(function(){return A})),n.d(t,"b",(function(){return I}));var r,o=n(1176);n.d(t,"g",(function(){return o.b})),n.d(t,"j",(function(){return o.c})),function(e){e.INIT="[USER] INIT",e.UNAUTHORIZED_ON_BOARD="[USER] UNAUTHORIZED_ON_BOARD",e.SET_TECHNICAL_INFO="[USER] SET_TECHNICAL_INFO",e.LOGOUT="[USER] LOGOUT",e.LOGOUT_ALL="[USER] LOGOUT_ALL",e.NAVIGATE_TO_FIND_WORKSPACE_PAGE="[USER] NAVIGATE_TO_FIND_WORKSPACE_PAGE",e.NAVIGATE_TO_DASHBOARD="[USER] NAVIGATE_TO_DASHBOARD",e.NAVIGATE_TO_BOARD="[USER] NAVIGATE_TO_BOARD",e.NAVIGATE_TO_ROOT="[USER] NAVIGATE_TO_ROOT",e.NAVIGATE_TO="[USER] NAVIGATE_TO",e.NAVIGATE_TO_RECOVER_PASSWORD="[USER] NAVIGATE_TO_RECOVER_PASSWORD",e.SET_REDIRECT_URL="[USER] SET_REDIRECT_URL",e.CLEAR_REDIRECT_URL="[USER] CLEAR_REDIRECT_URL"}(r||(r={}));var i=function(e){return{type:r.LOGOUT,payload:{logoutRedirectUrl:e}}},a=function(){return{type:r.LOGOUT_ALL}},u=function(e){var t=e.reason;return{type:r.UNAUTHORIZED_ON_BOARD,payload:{reason:t}}},c=function(e){var t=e.caption,n=e.data,o=e.feature,i=e.userIdForDebug;return{type:r.SET_TECHNICAL_INFO,payload:{caption:t,data:n},meta:{feature:o,userIdForDebug:i}}},d=function(e){return{type:r.NAVIGATE_TO_BOARD,payload:{boardId:e}}},s=function(e){return{type:r.NAVIGATE_TO_DASHBOARD,payload:{spaceId:e}}},f=function(){return{type:r.NAVIGATE_TO_ROOT}},p=function(){return{type:r.NAVIGATE_TO_FIND_WORKSPACE_PAGE}},l=function(){return{type:r.NAVIGATE_TO_RECOVER_PASSWORD}},E=function(e){return{type:r.NAVIGATE_TO,payload:{url:e}}},A=function(e){return{type:r.SET_REDIRECT_URL,payload:{redirectUrl:e}}},I=function(){return{type:r.CLEAR_REDIRECT_URL}}},292:function(e,t,n){"use strict";(function(e){n.d(t,"q",(function(){return E})),n.d(t,"s",(function(){return A})),n.d(t,"p",(function(){return I})),n.d(t,"b",(function(){return _})),n.d(t,"r",(function(){return S})),n.d(t,"v",(function(){return v})),n.d(t,"d",(function(){return R})),n.d(t,"c",(function(){return g})),n.d(t,"u",(function(){return h})),n.d(t,"t",(function(){return O})),n.d(t,"V",(function(){return y})),n.d(t,"i",(function(){return C})),n.d(t,"K",(function(){return w})),n.d(t,"U",(function(){return N})),n.d(t,"h",(function(){return L})),n.d(t,"A",(function(){return D})),n.d(t,"bb",(function(){return U})),n.d(t,"D",(function(){return k})),n.d(t,"C",(function(){return P})),n.d(t,"B",(function(){return M})),n.d(t,"x",(function(){return G})),n.d(t,"H",(function(){return B})),n.d(t,"R",(function(){return F})),n.d(t,"w",(function(){return V})),n.d(t,"G",(function(){return W})),n.d(t,"Q",(function(){return x})),n.d(t,"z",(function(){return j})),n.d(t,"J",(function(){return H})),n.d(t,"T",(function(){return J})),n.d(t,"y",(function(){return q})),n.d(t,"I",(function(){return K})),n.d(t,"S",(function(){return z})),n.d(t,"X",(function(){return Z})),n.d(t,"g",(function(){return X})),n.d(t,"l",(function(){return Q})),n.d(t,"k",(function(){return Y})),n.d(t,"W",(function(){return ee})),n.d(t,"j",(function(){return te})),n.d(t,"L",(function(){return ne})),n.d(t,"a",(function(){return oe})),n.d(t,"O",(function(){return ie})),n.d(t,"E",(function(){return ae})),n.d(t,"Y",(function(){return ue})),n.d(t,"e",(function(){return ce})),n.d(t,"Z",(function(){return de})),n.d(t,"m",(function(){return se})),n.d(t,"M",(function(){return fe})),n.d(t,"ab",(function(){return pe})),n.d(t,"n",(function(){return le})),n.d(t,"N",(function(){return Ee})),n.d(t,"P",(function(){return Ae})),n.d(t,"f",(function(){return Ie})),n.d(t,"F",(function(){return me})),n.d(t,"o",(function(){return _e}));var r=n(43),o=n(242),i=n(283),a=n(278),u=n(55),c=n(17),d=n(599),s=n(256),f=n(2790),p=n(27),l=n(1302);function E(){return""!=Object(r.i)(c.g.CREATE_DEV_TEAM)}function A(){return""!=Object(r.i)(c.g.CREATE_FREE_TEAM2018)}function I(){var t=e.cookie("boardInviteInfo");try{var n=JSON.parse(t);return n.limits&&"object"===typeof n.limits&&n.limits.usersPerAccount&&"number"===typeof n.limits.usersPerAccount&&n.usersNumber&&"number"===typeof n.usersNumber&&n.picture&&"object"===typeof n.picture&&n.picture.big&&"string"===typeof n.picture.big&&n.title&&"string"===typeof n.title&&n.id&&"string"===typeof n.id?n:void 0}catch(e){return}}var m=!1;function _(){m=!0}function S(){return m}var T=!1,b=!1;function v(){return T}function R(){T=!0}function g(){b=!0}function h(){return b}function O(){return!!e.cookie("get-personal-slack-integration")}function y(){o.setItem(i.a.registeredByInvite,"true")}function C(){return"true"===o.getItem(i.a.registeredByInvite)}function w(){o.removeItem(i.a.registeredByInvite)}function N(){o.setItem(i.a.registeredAsInvitee,!0)}function L(){return o.getItem(i.a.registeredAsInvitee)}function D(){e.removeCookie("boardInviteInfo",{path:"/"})}function U(){return"true"===e.cookie("simple-app-loading")}function k(){e.removeCookie("simple-app-loading")}function P(){e.removeCookie("lastReferer")}function M(){e.removeCookie("get-personal-slack-integration")}function G(e){var t,n=!1;try{t=JSON.parse(o.getItem(i.a.mustSubmitTeamInfo))}catch(e){t=!1}var r=Object(s.a)().getCurrentId();return t&&("object"===typeof t&&t.profileId&&e===t.profileId&&(t.accountId&&t.accountId===r||!t.accountId)?n=!0:B()),n}function B(){o.removeItem(i.a.mustSubmitTeamInfo)}function F(e,t){o.setItem(i.a.mustSubmitTeamInfo,JSON.stringify({accountId:e,profileId:t}))}function V(){return!!o.getItem(i.a.mustSubmitInvite)}function W(){o.removeItem(i.a.mustSubmitInvite)}function x(){o.setItem(i.a.mustSubmitInvite,!0)}function j(){return!!o.getItem(i.a.mustSubmitWelcome)}function H(){o.removeItem(i.a.mustSubmitWelcome)}function J(){o.setItem(i.a.mustSubmitWelcome,!0)}function q(){return!!o.getItem(i.a.mustSubmitUseCases)}function K(){o.removeItem(i.a.mustSubmitUseCases)}function z(){o.setItem(i.a.mustSubmitUseCases,!0)}function Z(e,t,n){o.setItem(i.a.requestedMembershipTeamName,JSON.stringify({teamName:t,profileId:n,teamID:e}))}function X(e,t){void 0===t&&(t=!1);var n,r=e.getState().urlData.urlCommand,o=(n=r,Object(f.c)(c.d.CREATE_CONSULTANT_PLAN,n)?c.d.CREATE_CONSULTANT_PLAN:Object(f.c)(c.d.CREATE_BUSINESS_PLAN,n)?c.d.CREATE_BUSINESS_PLAN:Object(f.c)(c.d.CREATE_TEAM_PLAN,n)?c.d.CREATE_TEAM_PLAN:void 0),i=void 0;return o===c.d.CREATE_CONSULTANT_PLAN&&(i=p.s.CONSULTANT),o===c.d.CREATE_BUSINESS_PLAN&&(i=p.s.BUSINESS),o===c.d.CREATE_TEAM_PLAN&&(i=p.s.PAID_TEAM_ORG),t&&o&&e.dispatch(Object(l.c)(o,{doUrlCleanup:!0})),i}function Q(e){var t=$(e);return t?Object(d.d)(t.teamName):""}function Y(e){var t=$(e);return t?t.teamID:""}function $(e){var t=o.getItem(i.a.requestedMembershipTeamName);try{var n=JSON.parse(t);return n&&n.profileId&&n.profileId===e&&n.teamID&&n.teamName?n:void 0}catch(e){var r="Could not parse localStorage item: "+i.a.requestedMembershipTeamName+"\n  value: "+t+"\n  error: "+e;return console.error(r),void ErrorsTracker.error(r)}}function ee(e,t){o.setItem(i.a.requestedLicense,JSON.stringify({profileId:t,hasRequestedLicense:e}))}function te(e){var t=!1,n=o.getItem(i.a.requestedLicense);try{var r=JSON.parse(n);r&&r.profileId&&r.profileId===e&&(t=r.hasRequestedLicense)}catch(e){var a="Could not parse localStorage item: "+i.a.requestedLicense+"\n  value: "+n+"\n  error: "+e;console.error(a),ErrorsTracker.error(a)}return t}function ne(){o.removeItem(i.a.requestedMembershipTeamName)}var re=a.a.toMillis(1);function oe(e,t){void 0===t&&(t=re);var n=parseInt(o.getItem(e),10)||0;return Date.now()-n>=t}function ie(e){o.setItem(e,Date.now())}function ae(e){o.removeItem(e)}function ue(){o.setItem(i.a.shorterSignUpFlow,!0)}function ce(){var e=!!o.getItem(i.a.shorterSignUpFlow);return e&&o.removeItem(i.a.shorterSignUpFlow),e}function de(e){o.setItem(i.a.showBoardDuplicateBanner,e)}function se(e){var t=o.getItem(i.a.showBoardDuplicateBanner);return!!e&&e===t}function fe(){o.removeItem(i.a.showBoardDuplicateBanner)}function pe(e){o.setItem(i.a.showCopyingBoardContentAdminPromo,e)}function le(e){var t=o.getItem(i.a.showCopyingBoardContentAdminPromo);return!!e&&e===t}function Ee(){o.removeItem(i.a.showCopyingBoardContentAdminPromo)}function Ae(e){o.setItem(i.a.boardGuestsSectionFlashed,e)}function Ie(e){var t=o.getItem(i.a.boardGuestsSectionFlashed);return!!e&&e===t}function me(){o.removeItem(i.a.boardGuestsSectionFlashed)}function _e(){var e={};try{var t=Object.prototype.hasOwnProperty,n=Object(u.k)(location.href);for(var r in n)if(t.call(n,r)&&"utm_"===r.substr(0,4)){var o=r.substr(4);"campaign"===o&&(o="name"),e["campaign_"+o]=n[r]}}finally{return e}}}).call(this,n(193))},297:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return c}));var r,o=n(17),i=n(16),a=(r=o.a.EMBED,null!==new URL(location.href).searchParams.get(r));function u(){return i.a.directLinkLiveEmbedMode||a}function c(e){var t=!1;if(u()&&window.parent!==window){t=void 0;try{t=new URL(document.referrer).origin===e}catch(e){}}return t}},4039:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),function(e){e.COLLECT_AND_SEND="[TECHNICAL_INFO] COLLECT_AND_SEND"}(r||(r={}));var o=function(e){var t=e.caption,n=e.data,o=e.feature,i=e.userIdForDebug;return{type:r.COLLECT_AND_SEND,payload:{caption:t,data:n},meta:{feature:o,userIdForDebug:i}}}},599:function(e,t,n){"use strict";function r(e){return u(e,"company")}function o(e){return u(e,"team",!0)}function i(e){return u(e,"team")}function a(e){return u(e,"project")}function u(e,t,n){return void 0===n&&(n=!1),c(e=e.trim(),t)?n?"<strong>"+e+"</strong>":e:n?"<strong>"+e+"</strong> "+t:e+" "+t}function c(e,t){return e.toLowerCase().split(" ").includes(t.toLowerCase())}n.d(t,"b",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"f",(function(){return u})),n.d(t,"a",(function(){return c}))},624:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(5);function o(){return"ServerNotificationService"}function i(){return r.a("ServerNotificationService")}t.a=i()},790:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),n.d(t,"i",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return a})),n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return d})),n.d(t,"h",(function(){return s})),n.d(t,"f",(function(){return f})),function(e){e.URL_CHANGED="[ROUTER] URL_CHANGED",e.INIT="[ROUTER] INIT",e.REDIRECT="[ROUTER] REDIRECT",e.NAVIGATE="[ROUTER] NAVIGATE",e.NAVIGATE_WITH_SEARCH="[ROUTER] NAVIGATE_WITH_SEARCH",e.SET_BASE_PATH="[ROUTER] SET_BASE_PATH",e.REMOVE_SEARCH_PARAM="[ROUTER] REMOVE_SEARCH_PARAM",e.RELOAD="[ROUTER] RELOAD"}(r||(r={}));var o=function(e){return{type:r.URL_CHANGED,payload:{url:e.url,location:e.location},meta:{provider:e.provider}}},i=function(e){return{type:r.INIT,payload:e}},a=function(e,t){return{type:r.REDIRECT,payload:{pathname:e},meta:{inNewTab:null===t||void 0===t?void 0:t.inNewTab}}},u=function(e){return{type:r.REMOVE_SEARCH_PARAM,payload:e}},c=function(e){return{type:r.NAVIGATE,payload:{pathname:e}}},d=function(e){return{type:r.NAVIGATE_WITH_SEARCH,payload:{pathname:e}}},s=function(e){return{type:r.SET_BASE_PATH,payload:{basePath:e}}},f=function(){return{type:r.RELOAD}}},938:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(13),o=function(e,t){return Object(r.compose)(e)(t.getState().router.basePath)}}}]);
//# sourceMappingURL=https://miro.com/app/static/cmn~app.cor~roo.sto~c6418fa5.7d5e42e46bb41cbb48f3.js.map