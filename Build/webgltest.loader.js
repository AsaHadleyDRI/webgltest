function createUnityInstance(e,t,n){function r(e,n){if(!r.aborted&&t.showBanner)return"error"==n&&(r.aborted=!0),t.showBanner(e,n);switch(n){case"error":console.error(e);break;case"warning":console.warn(e);break;default:console.log(e)}}function o(e){var t=e.reason||e.error,n=t?t.toString():e.message||e.reason||"",r=t&&t.stack?t.stack.toString():"";if(r.startsWith(n)&&(r=r.substring(n.length)),n+="\n"+r.trim(),n&&l.stackTraceRegExp&&l.stackTraceRegExp.test(n)){var o=e.filename||t&&(t.fileName||t.sourceURL)||"",a=e.lineno||t&&(t.lineNumber||t.line)||0;i(n,o,a)}}function a(e){e.preventDefault()}function i(e,t,n){if(e.indexOf("fullscreen error")==-1){if(l.startupErrorHandler)return void l.startupErrorHandler(e,t,n);if(!(l.errorHandler&&l.errorHandler(e,t,n)||(console.log("Invoking error handler due to\n"+e),"function"==typeof dump&&dump("Invoking error handler due to\n"+e),i.didShowErrorMessage))){var e="An error occurred running the Unity content on this page. See your browser JavaScript console for more info. The error was:\n"+e;e.indexOf("DISABLE_EXCEPTION_CATCHING")!=-1?e="An exception has occurred, but exception handling has been disabled in this build. If you are the developer of this content, enable exceptions in your project WebGL player settings to be able to catch the exception or see the stack trace.":e.indexOf("Cannot enlarge memory arrays")!=-1?e="Out of memory. If you are the developer of this content, try allocating more memory to your WebGL build in the WebGL player settings.":e.indexOf("Invalid array buffer length")==-1&&e.indexOf("Invalid typed array length")==-1&&e.indexOf("out of memory")==-1&&e.indexOf("could not allocate memory")==-1||(e="The browser could not allocate enough memory for the WebGL content. If you are the developer of this content, try allocating less memory to your WebGL build in the WebGL player settings."),alert(e),i.didShowErrorMessage=!0}}}function s(e,t){if("symbolsUrl"!=e){var r=l.downloadProgress[e];r||(r=l.downloadProgress[e]={started:!1,finished:!1,lengthComputable:!1,total:0,loaded:0}),"object"!=typeof t||"progress"!=t.type&&"load"!=t.type||(r.started||(r.started=!0,r.lengthComputable=t.lengthComputable),r.total=t.total,r.loaded=t.loaded,"load"==t.type&&(r.finished=!0));var o=0,a=0,i=0,s=0,u=0;for(var e in l.downloadProgress){var r=l.downloadProgress[e];if(!r.started)return 0;i++,r.lengthComputable?(o+=r.loaded,a+=r.total,s++):r.finished||u++}var c=i?(i-u-(a?s*(a-o)/a:0))/i:0;n(.9*c)}}function u(e){s(e);var t=l.cacheControl(l[e]),n=l.companyName&&l.productName?l.cachedFetch:l.fetchWithProgress,o=l[e],a=/file:\/\//.exec(o)?"same-origin":void 0,i=n(l[e],{method:"GET",companyName:l.companyName,productName:l.productName,productVersion:l.productVersion,control:t,mode:a,onProgress:function(t){s(e,t)}});return i.then(function(e){return e.parsedBody}).catch(function(t){var n="Failed to download file "+l[e];"file:"==location.protocol?r(n+". Loading web pages via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host Unity content, or use the Unity Build and Run option.","error"):console.error(n)})}function c(){return new Promise(function(e,t){var n=document.createElement("script");n.src=l.frameworkUrl,n.onload=function(){if("undefined"==typeof unityFramework||!unityFramework){var t=[["br","br"],["gz","gzip"]];for(var o in t){var a=t[o];if(l.frameworkUrl.endsWith("."+a[0])){var i="Unable to parse "+l.frameworkUrl+"!";if("file:"==location.protocol)return void r(i+" Loading pre-compressed (brotli or gzip) content via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host compressed Unity content, or use the Unity Build and Run option.","error");if(i+=' This can happen if build compression was enabled but web server hosting the content was misconfigured to not serve the file with HTTP Response Header "Content-Encoding: '+a[1]+'" present. Check browser Console and Devtools Network tab to debug.',"br"==a[0]&&"http:"==location.protocol){var s=["localhost","127.0.0.1"].indexOf(location.hostname)!=-1?"":"Migrate your server to use HTTPS.";i=/Firefox/.test(navigator.userAgent)?"Unable to parse "+l.frameworkUrl+'!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported in Firefox over HTTP connections. '+s+' See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1670675">https://bugzilla.mozilla.org/show_bug.cgi?id=1670675</a> for more information.':"Unable to parse "+l.frameworkUrl+'!<br>If using custom web server, verify that web server is sending .br files with HTTP Response Header "Content-Encoding: br". Brotli compression may not be supported over HTTP connections. Migrate your server to use HTTPS.'}return void r(i,"error")}}r("Unable to parse "+l.frameworkUrl+"! The file is corrupt, or compression was misconfigured? (check Content-Encoding HTTP Response Header on web server)","error")}var u=unityFramework;unityFramework=null,n.onload=null,e(u)},n.onerror=function(e){r("Unable to load file "+l.frameworkUrl+"! Check that the file exists on the remote server. (also check browser Console and Devtools Network tab to debug)","error")},document.body.appendChild(n),l.deinitializers.push(function(){document.body.removeChild(n)})})}function d(){c().then(function(e){e(l)});var e=u("dataUrl");l.preRun.push(function(){l.addRunDependency("dataUrl"),e.then(function(e){var t=new DataView(e.buffer,e.byteOffset,e.byteLength),n=0,r="UnityWebData1.0\0";if(!String.fromCharCode.apply(null,e.subarray(n,n+r.length))==r)throw"unknown data format";n+=r.length;var o=t.getUint32(n,!0);for(n+=4;n<o;){var a=t.getUint32(n,!0);n+=4;var i=t.getUint32(n,!0);n+=4;var s=t.getUint32(n,!0);n+=4;var u=String.fromCharCode.apply(null,e.subarray(n,n+s));n+=s;for(var c=0,d=u.indexOf("/",c)+1;d>0;c=d,d=u.indexOf("/",c)+1)l.FS_createPath(u.substring(0,c),u.substring(c,d-1),!0,!0);l.FS_createDataFile(u,null,e.subarray(a,a+i),!0,!0,!0)}l.removeRunDependency("dataUrl")})})}n=n||function(){};var l={canvas:e,webglContextAttributes:{preserveDrawingBuffer:!1},cacheControl:function(e){return e==l.dataUrl||e.match(/\.bundle/)?"must-revalidate":"no-store"},streamingAssetsUrl:"StreamingAssets",downloadProgress:{},deinitializers:[],intervals:{},setInterval:function(e,t){var n=window.setInterval(e,t);return this.intervals[n]=!0,n},clearInterval:function(e){delete this.intervals[e],window.clearInterval(e)},preRun:[],postRun:[],print:function(e){console.log(e)},printErr:function(e){console.error(e),"string"==typeof e&&e.indexOf("wasm streaming compile failed")!=-1&&(e.toLowerCase().indexOf("mime")!=-1?r('HTTP Response Header "Content-Type" configured incorrectly on the server for file '+l.codeUrl+' , should be "application/wasm". Startup time performance will suffer.',"warning"):r('WebAssembly streaming compilation failed! This can happen for example if "Content-Encoding" HTTP header is incorrectly enabled on the server for file '+l.codeUrl+", but the file is not pre-compressed on disk (or vice versa). Check the Network tab in browser Devtools to debug server header configuration.","warning"))},locateFile:function(e){return"build.wasm"==e?this.codeUrl:e},disabledCanvasEvents:["contextmenu","dragstart"]};for(var h in t)l[h]=t[h];l.streamingAssetsUrl=new URL(l.streamingAssetsUrl,document.URL).href;var f=l.disabledCanvasEvents.slice();f.forEach(function(t){e.addEventListener(t,a)}),window.addEventListener("error",o),window.addEventListener("unhandledrejection",o);var p="",m="";document.addEventListener("webkitfullscreenchange",function(t){var n=document.webkitCurrentFullScreenElement;n===e?e.style.width&&(p=e.style.width,m=e.style.height,e.style.width="100%",e.style.height="100%"):p&&(e.style.width=p,e.style.height=m,p="",m="")}),l.deinitializers.push(function(){l.disableAccessToMediaDevices(),f.forEach(function(t){e.removeEventListener(t,a)}),window.removeEventListener("error",o),window.removeEventListener("unhandledrejection",o);for(var t in l.intervals)window.clearInterval(t);l.intervals={}}),l.QuitCleanup=function(){for(var e=0;e<l.deinitializers.length;e++)l.deinitializers[e]();l.deinitializers=[],"function"==typeof l.onQuit&&l.onQuit()};var g={Module:l,SetFullscreen:function(){return l.SetFullscreen?l.SetFullscreen.apply(l,arguments):void l.print("Failed to set Fullscreen mode: Player not loaded yet.")},SendMessage:function(){return l.SendMessage?l.SendMessage.apply(l,arguments):void l.print("Failed to execute SendMessage: Player not loaded yet.")},Quit:function(){return new Promise(function(e,t){l.shouldQuit=!0,l.onQuit=e})}};return l.SystemInfo=function(){function e(e,t,n){return e=RegExp(e,"i").exec(t),e&&e[n]}for(var t,n,r,o,a,i,s=navigator.userAgent+" ",u=[["Firefox","Firefox"],["OPR","Opera"],["Edg","Edge"],["SamsungBrowser","Samsung Browser"],["Trident","Internet Explorer"],["MSIE","Internet Explorer"],["Chrome","Chrome"],["CriOS","Chrome on iOS Safari"],["FxiOS","Firefox on iOS Safari"],["Safari","Safari"]],c=0;c<u.length;++c)if(n=e(u[c][0]+"[/ ](.*?)[ \\)]",s,1)){t=u[c][1];break}"Safari"==t&&(n=e("Version/(.*?) ",s,1)),"Internet Explorer"==t&&(n=e("rv:(.*?)\\)? ",s,1)||n);for(var d=[["Windows (.*?)[;)]","Windows"],["Android ([0-9_.]+)","Android"],["iPhone OS ([0-9_.]+)","iPhoneOS"],["iPad.*? OS ([0-9_.]+)","iPadOS"],["FreeBSD( )","FreeBSD"],["OpenBSD( )","OpenBSD"],["Linux|X11()","Linux"],["Mac OS X ([0-9_.]+)","MacOS"],["bot|google|baidu|bing|msn|teoma|slurp|yandex","Search Bot"]],l=0;l<d.length;++l)if(o=e(d[l][0],s,1)){r=d[l][1],o=o.replace(/_/g,".");break}var h={"NT 5.0":"2000","NT 5.1":"XP","NT 5.2":"Server 2003","NT 6.0":"Vista","NT 6.1":"7","NT 6.2":"8","NT 6.3":"8.1","NT 10.0":"10"};o=h[o]||o,a=document.createElement("canvas"),a&&(gl=a.getContext("webgl2"),glVersion=gl?2:0,gl||(gl=a&&a.getContext("webgl"))&&(glVersion=1),gl&&(i=gl.getExtension("WEBGL_debug_renderer_info")&&gl.getParameter(37446)||gl.getParameter(7937)));var f="undefined"!=typeof SharedArrayBuffer,p="object"==typeof WebAssembly&&"function"==typeof WebAssembly.compile;return{width:screen.width,height:screen.height,userAgent:s.trim(),browser:t||"Unknown browser",browserVersion:n||"Unknown version",mobile:/Mobile|Android|iP(ad|hone)/.test(navigator.appVersion),os:r||"Unknown OS",osVersion:o||"Unknown OS Version",gpu:i||"Unknown GPU",language:navigator.userLanguage||navigator.language,hasWebGL:glVersion,hasCursorLock:!!document.body.requestPointerLock,hasFullscreen:!!document.body.requestFullscreen||!!document.body.webkitRequestFullscreen,hasThreads:f,hasWasm:p,hasWasmThreads:!1}}(),l.abortHandler=function(e){return i(e,"",0),!0},Error.stackTraceLimit=Math.max(Error.stackTraceLimit||0,50),l.readBodyWithProgress=function(){function e(e,t){if(!t)return 0;var n=e.headers.get("Content-Encoding"),r=parseInt(e.headers.get("Content-Length"));switch(n){case"br":return Math.round(5*r);case"gzip":return Math.round(4*r);default:return r}}function t(t,n){function r(){return"undefined"==typeof a?t.arrayBuffer().then(function(e){return n({type:"progress",total:e.length,loaded:0,lengthComputable:i}),new Uint8Array(e)}):a.read().then(function(e){return e.done?o():(d+e.value.length<=u.length?(u.set(e.value,d),l=d+e.value.length):c.push(e.value),d+=e.value.length,n({type:"progress",total:Math.max(s,d),loaded:d,lengthComputable:i}),r())})}function o(){if(d===s)return u;if(d<s)return u.slice(0,d);var e=new Uint8Array(d);e.set(u,0);for(var t=l,n=0;n<c.length;++n)e.set(c[n],t),t+=c[n].length;return e}var a=t.body?t.body.getReader():void 0,i="undefined"!=typeof t.headers.get("Content-Length"),s=e(t,i),u=new Uint8Array(s),c=[],d=0,l=0;return i||console.warn("[UnityCache] Response is served without Content-Length header. Please reconfigure server to include valid Content-Length for better download performance."),r().then(function(e){return n({type:"load",total:e.length,loaded:e.length,lengthComputable:i}),t.parsedBody=e,t})}return t}(),l.fetchWithProgress=function(){function e(e,t){var n=function(){};return t&&t.onProgress&&(n=t.onProgress),fetch(e,t).then(function(e){return l.readBodyWithProgress(e,n)})}return e}(),l.UnityCache=function(){function e(e){console.log("[UnityCache] "+e)}function t(){var t=this;this.isConnected=this.connect().then(function(){return t.cleanUpCache()}),this.isConnected.catch(function(t){e("Error when initializing cache: "+t)})}var n={name:"UnityCache",version:4},r={name:"RequestMetaDataStore",version:1},o={name:"RequestStore",version:1},a={name:"WebAssembly",version:1},i=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB,s=null;return t.getInstance=function(){return s||(s=new t),s},t.destroyInstance=function(){return s?s.close().then(function(){s=null}):Promise.resolve()},t.prototype.clearCache=function(){function e(n){if(0===n.length)return Promise.resolve();var r=n.pop();return t.cache.delete(r).then(function(){return e(n)})}var t=this;return this.isConnected.then(function(){return t.execute(r.name,"clear",[])}).then(function(){return t.cache.keys()}).then(function(t){return e(t)})},t.UnityCacheDatabase=n,t.RequestMetaDataStore=r,t.MaximumCacheSize=1073741824,t.prototype.loadRequest=function(e){var t=this;return t.isConnected.then(function(){return Promise.all([t.cache.match(e),t.loadRequestMetaData(e)])}).then(function(e){if("undefined"!=typeof e[0]&&"undefined"!=typeof e[1])return{response:e[0],metaData:e[1]}})},t.prototype.loadRequestMetaData=function(e){var t="string"==typeof e?e:e.url;return this.execute(r.name,"get",[t])},t.prototype.updateRequestMetaData=function(e){return this.execute(r.name,"put",[e])},t.prototype.storeRequest=function(e,t){var n=this;return n.isConnected.then(function(){return n.cache.put(e,t)})},t.prototype.close=function(){return this.isConnected.then(function(){this.database&&(this.database.close(),this.database=null),this.cache&&(this.cache=null)}.bind(this))},t.prototype.connect=function(){var e=this;if("undefined"==typeof i)return Promise.reject(new Error("Could not connect to cache: IndexedDB is not supported."));if("undefined"==typeof window.caches)return Promise.reject(new Error("Could not connect to cache: Cache API is not supported."));var t=new Promise(function(t,r){function o(){e.openDBTimeout&&(clearTimeout(e.openDBTimeout),e.openDBTimeout=null)}try{e.openDBTimeout=setTimeout(function(){"undefined"==typeof e.database&&r(new Error("Could not connect to cache: Database timeout."))},2e4);var a=i.open(n.name,n.version);a.onupgradeneeded=e.upgradeDatabase.bind(e),a.onsuccess=function(n){o(),e.database=n.target.result,t()},a.onerror=function(t){o(),e.database=null,r(new Error("Could not connect to database."))}}catch(t){o(),e.database=null,e.cache=null,r(new Error("Could not connect to cache: Could not connect to database."))}}).then(function(){var e=n.name+"_"+l.companyName+"_"+l.productName;return caches.open(e)}).then(function(t){e.cache=t});return t},t.prototype.upgradeDatabase=function(e){var t=e.target.result;if(!t.objectStoreNames.contains(r.name)){var n=t.createObjectStore(r.name,{keyPath:"url"});["accessedAt","updatedAt"].forEach(function(e){n.createIndex(e,e)})}t.objectStoreNames.contains(o.name)&&t.deleteObjectStore(o.name),t.objectStoreNames.contains(a.name)&&t.deleteObjectStore(a.name)},t.prototype.execute=function(e,t,n){return this.isConnected.then(function(){return new Promise(function(r,o){try{if(null===this.database)return void o(new Error("indexedDB access denied"));var a=["put","delete","clear"].indexOf(t)!=-1?"readwrite":"readonly",i=this.database.transaction([e],a),s=i.objectStore(e);"openKeyCursor"==t&&(s=s.index(n[0]),n=n.slice(1));var u=s[t].apply(s,n);u.onsuccess=function(e){r(e.target.result)},u.onerror=function(e){o(e)}}catch(e){o(e)}}.bind(this))}.bind(this))},t.prototype.getMetaDataEntries=function(){var e=this,t=0,n=[];return new Promise(function(o,a){var i=e.database.transaction([r.name],"readonly"),s=i.objectStore(r.name),u=s.openCursor();u.onsuccess=function(e){var r=e.target.result;r?(t+=r.value.size,n.push(r.value),r.continue()):o({metaDataEntries:n,cacheSize:t})},u.onerror=function(e){a(e)}})},t.prototype.cleanUpCache=function(){var e=this;return this.getMetaDataEntries().then(function(n){function o(t){return new Promise(function(n,o){var a=e.database.transaction([r.name],"readwrite"),i=a.objectStore(r.name);i.delete(t),a.oncomplete=n,a.onerror=o})}function a(){if(0===u.length)return Promise.resolve();var t=u.pop();return e.cache.delete(t.url).then(function(e){if(e)return o(t.url)}).then(function(){return a()})}for(var i=n.metaDataEntries,s=n.cacheSize,u=[],c=[],d=0;d<i.length;++d)i[d].version!=l.productVersion?(u.push(i[d]),s-=i[d].size):c.push(i[d]);c.sort(function(e,t){return e.accessedAt-t.accessedAt});for(var d=0;d<c.length&&!(s<t.MaximumCacheSize);++d)u.push(c[d]),s-=c[d].size;return a()})},t}(),l.cachedFetch=function(){function e(e){console.log("[UnityCache] "+e)}function t(e){return t.link=t.link||document.createElement("a"),t.link.href=e,t.link.href}function n(e){var t=window.location.href.match(/^[a-z]+:\/\/[^\/]+/);return!t||e.lastIndexOf(t[0],0)}function r(e,t){return(!t||!t.method||"GET"===t.method)&&((!t||["must-revalidate","immutable"].indexOf(t.control)!=-1)&&!!e.match("^https?://"))}function o(o,u){function c(t,n){return fetch(t,n).then(function(r){if(!h.enabled||h.revalidated)return r;if(304===r.status)return h.revalidated=!0,d.updateRequestMetaData(h.metaData).then(function(){e("'"+h.metaData.url+"' successfully revalidated and served from the indexedDB cache")}).catch(function(t){e("'"+h.metaData.url+"' successfully revalidated but not stored in the indexedDB cache due to the error: "+t)}),s(h.response,n.onProgress);if(200==r.status){h.response=r,h.metaData.updatedAt=h.metaData.accessedAt,h.revalidated=!0;var o=r.clone();return s(r,n.onProgress).then(function(n){return h.metaData.size=n.parsedBody.length,Promise.all([d.storeRequest(t,o),d.updateRequestMetaData(h.metaData)]).then(function(){e("'"+l+"' successfully downloaded and stored in the indexedDB cache")}).catch(function(t){e("'"+l+"' successfully downloaded but not stored in the indexedDB cache due to the error: "+t)}),n})}return e("'"+l+"' request failed with status: "+r.status+" "+r.statusText),s(r,n.onProgress)})}var d=a.getInstance(),l=t("string"==typeof o?o:o.url),h={enabled:r(l,u)};return u&&(h.control=u.control,h.companyName=u.companyName,h.productName=u.productName,h.productVersion=u.productVersion),h.revalidated=!1,h.metaData={url:l,accessedAt:Date.now(),version:h.productVersion},h.response=null,h.enabled?d.loadRequest(l).then(function(t){if(!t)return c(o,u);var r=t.response,a=t.metaData;if(h.response=r,h.metaData.size=a.size,h.metaData.updatedAt=a.updatedAt,"immutable"==h.control)return h.revalidated=!0,d.updateRequestMetaData(a).then(function(){e("'"+h.metaData.url+"' served from the indexedDB cache without revalidation")}),s(r,u.onProgress);if(n(l)&&(r.headers.get("Last-Modified")||r.headers.get("ETag")))return fetch(l,{method:"HEAD"}).then(function(t){return h.revalidated=["Last-Modified","ETag"].every(function(e){return!r.headers.get(e)||r.headers.get(e)==t.headers.get(e)}),h.revalidated?(d.updateRequestMetaData(a).then(function(){e("'"+h.metaData.url+"' successfully revalidated and served from the indexedDB cache")}),s(h.response,u.onProgress)):c(o,u)});u=u||{};var i=u.headers||{};return u.headers=i,r.headers.get("Last-Modified")?(i["If-Modified-Since"]=r.headers.get("Last-Modified"),i["Cache-Control"]="no-cache"):r.headers.get("ETag")&&(i["If-None-Match"]=r.headers.get("ETag"),i["Cache-Control"]="no-cache"),c(o,u)}).catch(function(t){return e("Failed to load '"+h.metaData.url+"' from indexedDB cache due to the error: "+t),i(o,u)}):i(o,u)}var a=l.UnityCache,i=l.fetchWithProgress,s=l.readBodyWithProgress;return o}(),new Promise(function(e,t){l.SystemInfo.hasWebGL?l.SystemInfo.hasWasm?(l.startupErrorHandler=t,n(0),l.postRun.push(function(){n(1),delete l.startupErrorHandler,e(g)}),d()):t("Your browser does not support WebAssembly."):t("Your browser does not support WebGL.")})}